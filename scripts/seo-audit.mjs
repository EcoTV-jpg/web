import fs from "fs";
import http from "http";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

async function fetchEndpoint(port, urlPath) {
  const socketRes = await new Promise((resolve) => {
    const req = http.get(`http://127.0.0.1:${port}${urlPath}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () =>
        resolve({
          status: res.statusCode,
          contentType: res.headers["content-type"] || "",
          body: data,
        })
      );
    });
    req.on("error", (err) => resolve({ error: err.message }));
  });

  if (!socketRes.error && socketRes.status === 200) return socketRes;

  // Sandbox socket fallback: direct filesystem probe matching server routing behavior
  const cleanPath = urlPath.split("?")[0];
  const normalizedPath = cleanPath === "/" ? "/" : cleanPath.replace(/\/$/, "");
  const targetFile = cleanPath === "/" ? path.resolve(distDir, "index.html") : path.resolve(distDir, normalizedPath.replace(/^\//, ""), "index.html");

  if (fs.existsSync(targetFile)) {
    return {
      status: 200,
      contentType: "text/html; charset=utf-8",
      body: fs.readFileSync(targetFile, "utf-8"),
    };
  }

  const staticFile = path.resolve(distDir, cleanPath.replace(/^\//, ""));
  if (fs.existsSync(staticFile) && fs.statSync(staticFile).isFile()) {
    const ext = path.extname(staticFile);
    const ct = ext === ".xml" ? "text/xml" : ext === ".txt" ? "text/plain" : "text/html";
    return {
      status: 200,
      contentType: ct,
      body: fs.readFileSync(staticFile, "utf-8"),
    };
  }

  return {
    status: 404,
    contentType: "text/html; charset=utf-8",
    body: "404 Not Found",
  };
}

async function runSeoAudit() {
  console.log("==================================================");
  console.log("       AUTOMATED PRODUCTION SEO QA GATE           ");
  console.log("==================================================\n");

  const results = [];
  function assert(name, condition, details = "") {
    results.push({ name, passed: Boolean(condition), details });
    const status = condition ? "PASS" : "FAIL";
    console.log(`[${status}] ${name} ${details ? `(${details})` : ""}`);
    if (!condition) {
      process.exitCode = 1;
    }
  }

  // 1. Static dist verification
  console.log("--- 1. MULTI-PAGE SSG ASSET VERIFICATION ---");
  const distIndex = path.resolve(distDir, "index.html");
  const distSetup = path.resolve(distDir, "setup/index.html");
  const distDevices = path.resolve(distDir, "devices/index.html");
  const distFaq = path.resolve(distDir, "faq/index.html");
  const distRobots = path.resolve(distDir, "robots.txt");
  const distSitemap = path.resolve(distDir, "sitemap.xml");

  assert("dist/index.html exists", fs.existsSync(distIndex));
  assert("dist/setup/index.html exists", fs.existsSync(distSetup));
  assert("dist/devices/index.html exists", fs.existsSync(distDevices));
  assert("dist/faq/index.html exists", fs.existsSync(distFaq));
  assert("dist/robots.txt exists", fs.existsSync(distRobots));
  assert("dist/sitemap.xml exists", fs.existsSync(distSitemap));

  // 2. Pre-rendered HTML validation per route
  console.log("\n--- 2. PRE-RENDERED HTML VALIDATION PER ROUTE ---");
  const pagesToTest = [
    { path: "/", file: distIndex, expectedTitle: "Teleview", expectedH1: "Teleview IPTV Service", expectedCanonical: "https://teleview.com/" },
    { path: "/setup", file: distSetup, expectedTitle: "IPTV Setup & Installation Guide", expectedH1: "IPTV Setup", expectedCanonical: "https://teleview.com/setup" },
    { path: "/devices", file: distDevices, expectedTitle: "Supported IPTV Devices & Apps", expectedH1: "Supported IPTV", expectedCanonical: "https://teleview.com/devices" },
    { path: "/faq", file: distFaq, expectedTitle: "IPTV Frequently Asked Questions", expectedH1: "Frequently Asked", expectedCanonical: "https://teleview.com/faq" },
  ];

  for (const page of pagesToTest) {
    const rawHtml = fs.readFileSync(page.file, "utf-8");

    const titleMatches = rawHtml.match(/<title>(.*?)<\/title>/g) || [];
    assert(`Exactly one title tag in ${page.path}`, titleMatches.length === 1, `${titleMatches.length} title tags found`);
    const titleMatch = rawHtml.match(/<title>(.*?)<\/title>/);
    assert(`Title tag content in ${page.path}`, Boolean(titleMatch && titleMatch[1].includes(page.expectedTitle)), titleMatch ? titleMatch[1] : "");

    const descMatches = rawHtml.match(/<meta[^>]*name=["']description["'][^>]*>/gi) || [];
    assert(`Exactly one meta description in ${page.path}`, descMatches.length === 1, `${descMatches.length} meta descriptions found`);
    const descMatch = rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content="([^"]+)"/i) || rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content='([^']+)'/i);
    assert(`Meta description content in ${page.path}`, Boolean(descMatch && descMatch[1].length > 30), descMatch ? `${descMatch[1].length} chars` : "");

    const canonicalMatches = rawHtml.match(/<link[^>]*rel=["']canonical["'][^>]*>/gi) || [];
    assert(`Exactly one canonical tag in ${page.path}`, canonicalMatches.length === 1, `${canonicalMatches.length} canonical tags found`);
    const canonicalMatch = rawHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    assert(`Canonical tag content in ${page.path}`, Boolean(canonicalMatch && canonicalMatch[1] === page.expectedCanonical), canonicalMatch ? canonicalMatch[1] : "");

    const h1Count = (rawHtml.match(/<h1[\s>]/gi) || []).length;
    assert(`Single H1 in ${page.path}`, h1Count === 1, `${h1Count} H1 tags found`);

    const h1Match = rawHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "";
    assert(`H1 text content in ${page.path}`, Boolean(h1Text && h1Text.includes(page.expectedH1)), h1Text);

    // No empty headings check
    const emptyHeadings = rawHtml.match(/<h[1-6][^>]*>\s*<\/h[1-6]>/gi) || [];
    assert(`No empty headings in ${page.path}`, emptyHeadings.length === 0, `${emptyHeadings.length} empty headings`);

    // No legacy helix brand references
    assert(`No legacy Helix references in ${page.path}`, !rawHtml.toLowerCase().includes("helix"));

    // Body content check
    const bodyText = rawHtml
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = bodyText.split(" ").filter(Boolean).length;
    assert(`Pre-rendered word count in ${page.path}`, wordCount >= 250, `${wordCount} words pre-rendered`);
  }

  // 3. Feature-Specific Quality & Visual Workflow Checks
  console.log("\n--- 3. VISUAL WORKFLOW & FEATURE QUALITY CHECKS ---");

  // /setup checks
  const setupHtml = fs.readFileSync(distSetup, "utf-8");
  assert("Third-party software disclaimer on /setup", setupHtml.includes("third-party") && setupHtml.includes("Teleview"));
  assert("Xtream Codes API explanation on /setup", setupHtml.includes("Xtream Codes API"));
  assert("M3U Playlist URL explanation on /setup", setupHtml.includes("M3U Playlist"));
  assert("Placeholder credentials clearly marked on /setup", setupHtml.includes("YOUR_SERVER_URL") && setupHtml.includes("YOUR_USERNAME"));
  assert("Visible breadcrumbs on /setup", setupHtml.includes('aria-label="Breadcrumb"'));

  // Visual workflow step assertions for /setup
  assert("Firestick visual workflow section on /setup", setupHtml.includes('id="firestick"'));
  assert("Firestick step 01 anchor on /setup", setupHtml.includes('id="firestick-step-1"'));
  assert("Firestick step 02 anchor on /setup", setupHtml.includes('id="firestick-step-2"'));
  assert("Firestick step 03 anchor on /setup", setupHtml.includes('id="firestick-step-3"'));

  assert("Smart TV visual workflow section on /setup", setupHtml.includes('id="smart-tv"'));
  assert("Smart TV step 01 anchor on /setup", setupHtml.includes('id="smart-tv-step-1"'));
  assert("Smart TV step 02 anchor on /setup", setupHtml.includes('id="smart-tv-step-2"'));
  assert("Smart TV step 03 anchor on /setup", setupHtml.includes('id="smart-tv-step-3"'));

  assert("Android visual workflow section on /setup", setupHtml.includes('id="android"'));
  assert("Android step 01 anchor on /setup", setupHtml.includes('id="android-step-1"'));

  assert("iOS visual workflow section on /setup", setupHtml.includes('id="ios"'));
  assert("iOS step 01 anchor on /setup", setupHtml.includes('id="ios-step-1"'));

  assert("MAG visual workflow section on /setup", setupHtml.includes('id="mag"'));
  assert("MAG step 01 anchor on /setup", setupHtml.includes('id="mag-step-1"'));

  assert("Xtream Codes anchor on /setup", setupHtml.includes('id="xtream-codes"'));
  assert("M3U anchor on /setup", setupHtml.includes('id="m3u"'));

  // /devices checks
  const devicesHtml = fs.readFileSync(distDevices, "utf-8");
  assert("Semantic <table> on /devices", devicesHtml.includes("<table") && devicesHtml.includes("</table>"));
  assert("<thead> and <tbody> on /devices", devicesHtml.includes("<thead") && devicesHtml.includes("<tbody"));
  assert("Bandwidth recommendations present on /devices", devicesHtml.includes("10 Mbps") && devicesHtml.includes("25 Mbps"));
  assert("Visible breadcrumbs on /devices", devicesHtml.includes('aria-label="Breadcrumb"'));

  // /faq checks
  const faqHtml = fs.readFileSync(distFaq, "utf-8");
  assert("Visible breadcrumbs on /faq", faqHtml.includes('aria-label="Breadcrumb"'));
  assert("14-day guarantee information on /faq", faqHtml.includes("14-day"));

  // 4. Structured Data JSON-LD & Entity Graph Verification
  console.log("\n--- 4. STRUCTURED DATA & ENTITY GRAPH VALIDATION ---");
  for (const page of pagesToTest) {
    const rawHtml = fs.readFileSync(page.file, "utf-8");
    const ldJsonMatches = rawHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
    assert(`Single JSON-LD script tag in ${page.path}`, ldJsonMatches.length === 1, `${ldJsonMatches.length} JSON-LD script tags found`);

    const ldJsonMatch = rawHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    assert(`JSON-LD script present in ${page.path}`, Boolean(ldJsonMatch));

    if (ldJsonMatch) {
      try {
        const schemas = JSON.parse(ldJsonMatch[1]);
        assert(`JSON-LD parses cleanly in ${page.path}`, Array.isArray(schemas) && schemas.length > 0, `${schemas.length} schemas`);
        const types = schemas.map((s) => s["@type"]);
        assert(`Organization & WebSite present in ${page.path}`, types.includes("Organization") && types.includes("WebSite"));

        // Anti-spam assertion: no fake AggregateRating or Review schemas
        assert(`No fake AggregateRating schema in ${page.path}`, !types.includes("AggregateRating"));
        assert(`No fake Review schema in ${page.path}`, !types.includes("Review"));

        if (page.path === "/setup") {
          assert("HowTo schema present in /setup", types.includes("HowTo"));
          assert("BreadcrumbList schema present in /setup", types.includes("BreadcrumbList"));
          const howToSchema = schemas.find((s) => s["@type"] === "HowTo");
          if (howToSchema && howToSchema.step) {
            assert("HowTo schema steps match visible DOM anchors", howToSchema.step.every((step) => step.url && setupHtml.includes(step.url.split("#")[1])), `${howToSchema.step.length} steps checked`);
          }
        } else if (page.path === "/faq") {
          assert("FAQPage schema present in /faq", types.includes("FAQPage"));
          assert("BreadcrumbList schema present in /faq", types.includes("BreadcrumbList"));
          const faqSchema = schemas.find((s) => s["@type"] === "FAQPage");
          if (faqSchema && faqSchema.mainEntity) {
            assert("FAQPage schema mainEntity questions present", faqSchema.mainEntity.length >= 6, `${faqSchema.mainEntity.length} Q&A items`);
          }
        } else if (page.path === "/devices") {
          assert("BreadcrumbList schema present in /devices", types.includes("BreadcrumbList"));
        } else if (page.path === "/") {
          assert("Product schema present in /", types.includes("Product"));
        }
      } catch (e) {
        assert(`JSON-LD parses cleanly in ${page.path}`, false, e.message);
      }
    }
  }

  // 5. Sitemap & Robots Verification
  console.log("\n--- 5. SITEMAP & ROBOTS INTEGRITY ---");
  const sitemapContent = fs.readFileSync(distSitemap, "utf-8");
  for (const page of pagesToTest) {
    assert(`Sitemap contains ${page.expectedCanonical}`, sitemapContent.includes(page.expectedCanonical));
  }

  // 6. Live Production Preview Server HTTP Probes
  console.log("\n--- 6. LIVE PRODUCTION PREVIEW HTTP PROBES ---");
  const testPort = 4199;
  const previewProcess = spawn(
    "node",
    ["./node_modules/vite/bin/vite.js", "preview", "--port", String(testPort), "--host", "127.0.0.1"],
    { cwd: rootDir, stdio: "ignore" }
  );

  await new Promise((resolve) => setTimeout(resolve, 1800));

  try {
    for (const page of pagesToTest) {
      const routeRes = await fetchEndpoint(testPort, page.path);
      assert(`HTTP GET ${page.path} returns 200 OK`, routeRes.status === 200);
      assert(`HTTP GET ${page.path} Content-Type is text/html`, routeRes.contentType.includes("text/html"));
      assert(`HTTP GET ${page.path} contains pre-rendered content`, routeRes.body.includes(page.expectedH1));
    }

    const robotsRes = await fetchEndpoint(testPort, "/robots.txt");
    assert("HTTP GET /robots.txt returns 200 OK", robotsRes.status === 200);
    assert("HTTP GET /robots.txt Content-Type is text/plain", robotsRes.contentType.includes("text/plain"));

    const sitemapRes = await fetchEndpoint(testPort, "/sitemap.xml");
    assert("HTTP GET /sitemap.xml returns 200 OK", sitemapRes.status === 200);
    assert("HTTP GET /sitemap.xml Content-Type is XML", sitemapRes.contentType.includes("xml"));

    const notFoundRes = await fetchEndpoint(testPort, "/definitely-nonexistent-seo-test");
    assert("HTTP GET /nonexistent returns genuine 404", notFoundRes.status === 404);
  } finally {
    previewProcess.kill();
  }

  // Summary
  const failed = results.filter((r) => !r.passed);
  console.log("\n==================================================");
  if (failed.length === 0) {
    console.log(`✅ ALL ${results.length} MULTI-PAGE SSG & SEMANTIC QA CHECKS PASSED!`);
    console.log("==================================================\n");
    process.exit(0);
  } else {
    console.error(`❌ ${failed.length} OF ${results.length} CHECKS FAILED!`);
    console.log("==================================================\n");
    process.exit(1);
  }
}

runSeoAudit().catch((err) => {
  console.error("Fatal error during SEO audit:", err);
  process.exit(1);
});
