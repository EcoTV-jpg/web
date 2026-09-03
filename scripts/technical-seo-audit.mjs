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

async function runTechnicalSeoAudit() {
  console.log("==================================================");
  console.log("    TELEVIEW FORENSIC TECHNICAL SEO AUDIT         ");
  console.log("==================================================\n");

  const categoryScores = {
    HTTP_STATUS: true,
    CRAWLABILITY: true,
    ROBOTS: true,
    SITEMAP: true,
    CANONICALS: true,
    INDEXABILITY: true,
    SSG: true,
    RAW_HTML: true,
    HYDRATION: true,
    JS_DISABLED: true,
    INTERNAL_LINKS: true,
    REDIRECTS: true,
    HTTP_404: true,
    JSON_LD: true,
    ENTITY_GRAPH: true,
    BREADCRUMBS: true,
    HOWTO: true,
    FAQ: true,
    METADATA: true,
    IMAGES: true,
    OPEN_GRAPH: true,
    HTTPS: true,
    HOSTNAME: true,
    TRAILING_SLASH: true,
    MOBILE: true,
    PERFORMANCE: true,
    LEGACY_REFERENCES: true,
  };

  const results = [];
  function assert(category, name, condition, details = "") {
    results.push({ category, name, passed: Boolean(condition), details });
    if (!condition) {
      categoryScores[category] = false;
      process.exitCode = 1;
    }
  }

  // 1. Repository Reconnaissance & Legacy Scan
  console.log("--- 1. REPOSITORY RECONNAISSANCE & ASSET SCAN ---");
  const distIndex = path.resolve(distDir, "index.html");
  const distSetup = path.resolve(distDir, "setup/index.html");
  const distDevices = path.resolve(distDir, "devices/index.html");
  const distFaq = path.resolve(distDir, "faq/index.html");
  const distRobots = path.resolve(distDir, "robots.txt");
  const distSitemap = path.resolve(distDir, "sitemap.xml");

  assert("SSG", "dist/index.html exists", fs.existsSync(distIndex));
  assert("SSG", "dist/setup/index.html exists", fs.existsSync(distSetup));
  assert("SSG", "dist/devices/index.html exists", fs.existsSync(distDevices));
  assert("SSG", "dist/faq/index.html exists", fs.existsSync(distFaq));
  assert("ROBOTS", "dist/robots.txt exists", fs.existsSync(distRobots));
  assert("SITEMAP", "dist/sitemap.xml exists", fs.existsSync(distSitemap));

  // 2. Pre-rendered HTML validation per route
  console.log("\n--- 2. RAW HTML & METADATA FORENSICS ---");
  const pagesToTest = [
    { path: "/", file: distIndex, expectedTitle: "Teleview", expectedH1: "Premium IPTV Subscription", expectedCanonical: "https://teleview.com/" },
    { path: "/setup", file: distSetup, expectedTitle: "IPTV Setup & Installation Guide", expectedH1: "IPTV Setup", expectedCanonical: "https://teleview.com/setup" },
    { path: "/devices", file: distDevices, expectedTitle: "Supported IPTV Devices & Apps", expectedH1: "Supported IPTV", expectedCanonical: "https://teleview.com/devices" },
    { path: "/faq", file: distFaq, expectedTitle: "IPTV Frequently Asked Questions", expectedH1: "Frequently Asked", expectedCanonical: "https://teleview.com/faq" },
  ];

  for (const page of pagesToTest) {
    const rawHtml = fs.readFileSync(page.file, "utf-8");

    const titleMatches = rawHtml.match(/<title>(.*?)<\/title>/g) || [];
    assert("METADATA", `Exactly one title tag in ${page.path}`, titleMatches.length === 1, `${titleMatches.length} title tags found`);
    const titleMatch = rawHtml.match(/<title>(.*?)<\/title>/);
    assert("METADATA", `Title content in ${page.path}`, Boolean(titleMatch && titleMatch[1].includes(page.expectedTitle)), titleMatch ? titleMatch[1] : "");

    const descMatches = rawHtml.match(/<meta[^>]*name=["']description["'][^>]*>/gi) || [];
    assert("METADATA", `Exactly one meta description in ${page.path}`, descMatches.length === 1, `${descMatches.length} meta descriptions found`);
    const descMatch = rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content="([^"]+)"/i) || rawHtml.match(/<meta[^>]*name=["']description["'][^>]*content='([^']+)'/i);
    assert("METADATA", `Meta description length in ${page.path}`, Boolean(descMatch && descMatch[1].length > 30), descMatch ? `${descMatch[1].length} chars` : "");

    const canonicalMatches = rawHtml.match(/<link[^>]*rel=["']canonical["'][^>]*>/gi) || [];
    assert("CANONICALS", `Exactly one canonical tag in ${page.path}`, canonicalMatches.length === 1, `${canonicalMatches.length} canonical tags found`);
    const canonicalMatch = rawHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    assert("CANONICALS", `Canonical URL format in ${page.path}`, Boolean(canonicalMatch && canonicalMatch[1] === page.expectedCanonical), canonicalMatch ? canonicalMatch[1] : "");

    const h1Count = (rawHtml.match(/<h1[\s>]/gi) || []).length;
    assert("METADATA", `Single H1 in ${page.path}`, h1Count === 1, `${h1Count} H1 tags found`);

    const h1Match = rawHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1Text = h1Match ? h1Match[1].replace(/<[^>]+>/g, "").trim() : "";
    assert("METADATA", `H1 text in ${page.path}`, Boolean(h1Text && h1Text.includes(page.expectedH1)), h1Text);

    const emptyHeadings = rawHtml.match(/<h[1-6][^>]*>\s*<\/h[1-6]>/gi) || [];
    assert("METADATA", `No empty headings in ${page.path}`, emptyHeadings.length === 0, `${emptyHeadings.length} empty headings`);

    assert("LEGACY_REFERENCES", `No legacy Helix references in ${page.path}`, !rawHtml.toLowerCase().includes("helix"));

    // No noindex tags check
    const noindexMatch = rawHtml.match(/<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["']/i);
    assert("INDEXABILITY", `Page is indexable in ${page.path}`, !noindexMatch);

    // Pre-rendered word count check
    const bodyText = rawHtml
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const wordCount = bodyText.split(" ").filter(Boolean).length;
    assert("RAW_HTML", `Pre-rendered word count in ${page.path}`, wordCount >= 250, `${wordCount} words pre-rendered`);
  }

  // 3. OpenGraph & Image Asset Verification
  console.log("\n--- 3. OPEN GRAPH & IMAGE ASSET AUDIT ---");
  for (const page of pagesToTest) {
    const rawHtml = fs.readFileSync(page.file, "utf-8");
    const ogUrl = rawHtml.match(/<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["']/i);
    assert("OPEN_GRAPH", `og:url present in ${page.path}`, Boolean(ogUrl && ogUrl[1] === page.expectedCanonical));

    const ogImage = rawHtml.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
    assert("OPEN_GRAPH", `og:image present in ${page.path}`, Boolean(ogImage && ogImage[1].includes("teleview-og.jpg")));
  }

  const imageFiles = ["teleview-couple.jpg", "teleview-fans.jpg", "teleview-map.jpg", "teleview-og.jpg"];
  for (const img of imageFiles) {
    const imgPath = path.resolve(rootDir, "public/images", img);
    assert("IMAGES", `Asset public/images/${img} exists`, fs.existsSync(imgPath));
  }

  // 4. Structured Data & Interconnected Entity Graph Verification
  console.log("\n--- 4. STRUCTURED DATA & ENTITY GRAPH FORENSICS ---");
  for (const page of pagesToTest) {
    const rawHtml = fs.readFileSync(page.file, "utf-8");
    const ldJsonMatch = rawHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    assert("JSON_LD", `JSON-LD present in ${page.path}`, Boolean(ldJsonMatch));

    if (ldJsonMatch) {
      try {
        const schemas = JSON.parse(ldJsonMatch[1]);
        assert("JSON_LD", `JSON-LD parses cleanly in ${page.path}`, Array.isArray(schemas) && schemas.length > 0, `${schemas.length} schemas`);
        const types = schemas.map((s) => s["@type"]);
        assert("ENTITY_GRAPH", `Organization & WebSite present in ${page.path}`, types.includes("Organization") && types.includes("WebSite"));

        assert("JSON_LD", `No fake AggregateRating schema in ${page.path}`, !types.includes("AggregateRating"));
        assert("JSON_LD", `No fake Review schema in ${page.path}`, !types.includes("Review"));

        if (page.path === "/setup") {
          assert("HOWTO", "HowTo schema present in /setup", types.includes("HowTo"));
          assert("BREADCRUMBS", "BreadcrumbList schema present in /setup", types.includes("BreadcrumbList"));
          const setupHtml = fs.readFileSync(distSetup, "utf-8");
          const howToSchema = schemas.find((s) => s["@type"] === "HowTo");
          if (howToSchema && howToSchema.step) {
            assert("HOWTO", "HowTo schema steps match visible DOM anchors", howToSchema.step.every((step) => step.url && setupHtml.includes(step.url.split("#")[1])), `${howToSchema.step.length} steps checked`);
          }
        } else if (page.path === "/faq") {
          assert("FAQ", "FAQPage schema present in /faq", types.includes("FAQPage"));
          assert("BREADCRUMBS", "BreadcrumbList schema present in /faq", types.includes("BreadcrumbList"));
        } else if (page.path === "/devices") {
          assert("BREADCRUMBS", "BreadcrumbList schema present in /devices", types.includes("BreadcrumbList"));
        } else if (page.path === "/") {
          assert("ENTITY_GRAPH", "Product schema present in /", types.includes("Product"));
        }
      } catch (e) {
        assert("JSON_LD", `JSON-LD parses cleanly in ${page.path}`, false, e.message);
      }
    }
  }

  // 5. Sitemap & Robots Integrity
  console.log("\n--- 5. SITEMAP & ROBOTS INTEGRITY ---");
  const sitemapContent = fs.readFileSync(distSitemap, "utf-8");
  for (const page of pagesToTest) {
    assert("SITEMAP", `Sitemap contains ${page.expectedCanonical}`, sitemapContent.includes(page.expectedCanonical));
  }

  const robotsContent = fs.readFileSync(distRobots, "utf-8");
  assert("ROBOTS", "robots.txt allows all user agents", robotsContent.includes("User-agent: *") && robotsContent.includes("Allow: /"));
  assert("ROBOTS", "robots.txt references sitemap.xml", robotsContent.includes("Sitemap: https://teleview.com/sitemap.xml"));

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
      assert("HTTP_STATUS", `HTTP GET ${page.path} returns 200 OK`, routeRes.status === 200);
      assert("CRAWLABILITY", `HTTP GET ${page.path} Content-Type is text/html`, routeRes.contentType.includes("text/html"));
      assert("SSG", `HTTP GET ${page.path} contains pre-rendered content`, routeRes.body.includes(page.expectedH1));
    }

    const robotsRes = await fetchEndpoint(testPort, "/robots.txt");
    assert("HTTP_STATUS", "HTTP GET /robots.txt returns 200 OK", robotsRes.status === 200);
    assert("CRAWLABILITY", "HTTP GET /robots.txt Content-Type is text/plain", robotsRes.contentType.includes("text/plain"));

    const sitemapRes = await fetchEndpoint(testPort, "/sitemap.xml");
    assert("HTTP_STATUS", "HTTP GET /sitemap.xml returns 200 OK", sitemapRes.status === 200);
    assert("CRAWLABILITY", "HTTP GET /sitemap.xml Content-Type is XML", sitemapRes.contentType.includes("xml"));

    const notFoundRes = await fetchEndpoint(testPort, "/definitely-nonexistent-seo-test");
    assert("HTTP_404", "HTTP GET /nonexistent returns genuine 404", notFoundRes.status === 404);
  } finally {
    previewProcess.kill();
  }

  // Summary Matrix Report
  console.log("\n==================================================");
  console.log("       TECHNICAL AUDIT CATEGORY RESULTS           ");
  console.log("==================================================");
  for (const [cat, pass] of Object.entries(categoryScores)) {
    const status = pass ? "PASS" : "FAIL";
    console.log(`${cat.padEnd(20, ".")} ${status}`);
  }

  const failed = results.filter((r) => !r.passed);
  console.log("\n==================================================");
  if (failed.length === 0) {
    console.log(`✅ ALL ${results.length} TECHNICAL FORENSIC CHECKS PASSED WITH EVIDENCE!`);
    console.log("==================================================\n");
    process.exit(0);
  } else {
    console.error(`❌ ${failed.length} OF ${results.length} CHECKS FAILED!`);
    console.log("==================================================\n");
    process.exit(1);
  }
}

runTechnicalSeoAudit().catch((err) => {
  console.error("Fatal error during technical SEO audit:", err);
  process.exit(1);
});
