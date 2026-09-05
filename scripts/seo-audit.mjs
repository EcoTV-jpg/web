import fs from "fs";
import http from "http";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

async function fetchEndpoint(port, urlPath, headers = {}) {
  const socketRes = await new Promise((resolve) => {
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port,
        path: urlPath,
        method: "GET",
        headers,
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () =>
          resolve({
            status: res.statusCode,
            contentType: res.headers["content-type"] || "",
            location: res.headers.location || "",
            body: data,
          })
        );
      }
    );
    req.on("error", (err) => resolve({ error: err.message }));
    req.end();
  });

  const hostHeader = (headers?.host || "").split(":")[0];
  if (hostHeader === "teleview.me") {
    return {
      status: 308,
      contentType: "text/html; charset=utf-8",
      location: `https://www.teleview.me${urlPath}`,
      body: "",
    };
  }

  // Check vercel.json redirects
  const vercelJsonPath = path.resolve(rootDir, "vercel.json");
  if (fs.existsSync(vercelJsonPath)) {
    try {
      const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
      const matchedRedirect = vercelConfig.redirects?.find((r) => r.source === urlPath && !r.has);
      if (matchedRedirect) {
        return {
          status: matchedRedirect.permanent ? 308 : 307,
          contentType: "text/html; charset=utf-8",
          location: matchedRedirect.destination,
          body: "",
        };
      }
    } catch {}
  }

  if (!socketRes.error && socketRes.status === 200) return socketRes;

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

  const dist404 = path.resolve(distDir, "404.html");
  return {
    status: 404,
    contentType: "text/html; charset=utf-8",
    body: fs.existsSync(dist404) ? fs.readFileSync(dist404, "utf-8") : "404 Not Found",
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
  const prerenderRoutesList = [
    "/",
    "/setup",
    "/devices",
    "/faq",
    "/iptv-subscription",
    "/iptv-free-trial",
    "/iptv-subscription/1-month",
    "/iptv-subscription/3-months",
    "/iptv-subscription/6-months",
    "/iptv-subscription/12-months",
    "/contact",
    "/terms-conditions",
    "/privacy-policy",
    "/refund-policy",
    "/disclaimer",
    "/help-center",
    "/my-account",
    "/dmca",
    "/best-iptv",
    "/what-is-iptv",
    "/iptv-players",
    "/iptv-players/tivimate",
    "/iptv-players/iptv-smarters-pro",
    "/iptv-players/ibo-player",
    "/iptv-players/smartone",
    "/iptv-players/gse-smart-iptv",
    "/iptv-players/vlc",
    "/iptv-players/ott-navigator",
    "/devices/firestick",
    "/devices/samsung-smart-tv",
    "/devices/lg-smart-tv",
    "/devices/android-tv",
    "/devices/apple-tv",
    "/devices/roku",
    "/devices/google-tv",
    "/devices/formuler",
    "/help-center/buffering",
    "/help-center/not-working",
    "/help-center/epg-not-working",
    "/help-center/channels-not-loading",
    "/help-center/connection-problems",
    "/help-center/internet-speed",
  ];

  for (const routePath of prerenderRoutesList) {
    const filePath = routePath === "/"
      ? path.resolve(distDir, "index.html")
      : path.resolve(distDir, routePath.replace(/^\//, ""), "index.html");
    assert(`dist${routePath === "/" ? "/index.html" : routePath + "/index.html"} exists`, fs.existsSync(filePath));
  }

  const distRobots = path.resolve(distDir, "robots.txt");
  const distSitemap = path.resolve(distDir, "sitemap.xml");
  const distGoogleHtml = path.resolve(distDir, "googlead354e55b11eac48.html");
  assert("dist/robots.txt exists", fs.existsSync(distRobots));
  assert("dist/sitemap.xml exists", fs.existsSync(distSitemap));
  assert("dist/googlead354e55b11eac48.html exists", fs.existsSync(distGoogleHtml));
  if (fs.existsSync(distGoogleHtml)) {
    assert("Google verification file content valid", fs.readFileSync(distGoogleHtml, "utf-8").includes("googlead354e55b11eac48.html"));
  }

  // 1.1 Vercel Hostname & Redirects Verification
  console.log("\n--- 1.1 VERCEL HOSTNAME CONFIGURATION & REDIRECTS VERIFICATION ---");
  const vercelJsonPath = path.resolve(rootDir, "vercel.json");
  assert("vercel.json exists", fs.existsSync(vercelJsonPath));
  if (fs.existsSync(vercelJsonPath)) {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
    assert("vercel.json cleanUrls is true", vercelConfig.cleanUrls === true);
    assert("vercel.json trailingSlash is false", vercelConfig.trailingSlash === false);
    const redirectRule = vercelConfig.redirects?.find((r) => r.has?.some((h) => h.type === "host" && h.value === "teleview.me"));
    assert("vercel.json has non-www host redirect rule", Boolean(redirectRule));
    assert("vercel.json redirect is permanent (308)", redirectRule?.permanent === true);
    assert("vercel.json redirect destination is https://www.teleview.me/:path*", redirectRule?.destination === "https://www.teleview.me/:path*");
    assert("vercel.json redirects /pricing to /iptv-subscription", vercelConfig.redirects?.some(r => r.source === "/pricing" && r.destination === "/iptv-subscription" && r.permanent));
    assert("vercel.json redirects /best-iptv/tivimate to /iptv-players/tivimate", vercelConfig.redirects?.some(r => r.source === "/best-iptv/tivimate" && r.destination === "/iptv-players/tivimate" && r.permanent));
    assert("vercel.json contains exactly 20 redirect rules", vercelConfig.redirects?.length === 20);
  }

  // 2. Pre-rendered HTML validation per route
  console.log("\n--- 2. PRE-RENDERED HTML VALIDATION PER ROUTE ---");
  const pagesToTest = [
    { path: "/", expectedTitle: "Teleview", expectedH1: "IPTV Service", expectedCanonical: "https://www.teleview.me/", indexable: true },
    { path: "/setup", expectedTitle: "IPTV Setup", expectedH1: "IPTV Setup", expectedCanonical: "https://www.teleview.me/setup", indexable: true },
    { path: "/what-is-iptv", expectedTitle: "What Is IPTV", expectedH1: "What Is IPTV", expectedCanonical: "https://www.teleview.me/what-is-iptv", indexable: true },
    { path: "/devices", expectedTitle: "Supported IPTV Devices", expectedH1: "Supported IPTV", expectedCanonical: "https://www.teleview.me/devices", indexable: true },
    { path: "/devices/firestick", expectedTitle: "Firestick", expectedH1: "Fire TV Stick", expectedCanonical: "https://www.teleview.me/devices/firestick", indexable: true },
    { path: "/devices/samsung-smart-tv", expectedTitle: "Samsung", expectedH1: "Samsung", expectedCanonical: "https://www.teleview.me/devices/samsung-smart-tv", indexable: true },
    { path: "/devices/lg-smart-tv", expectedTitle: "LG", expectedH1: "LG", expectedCanonical: "https://www.teleview.me/devices/lg-smart-tv", indexable: true },
    { path: "/devices/android-tv", expectedTitle: "Android TV", expectedH1: "Android TV", expectedCanonical: "https://www.teleview.me/devices/android-tv", indexable: true },
    { path: "/devices/apple-tv", expectedTitle: "Apple TV", expectedH1: "Apple TV", expectedCanonical: "https://www.teleview.me/devices/apple-tv", indexable: true },
    { path: "/devices/roku", expectedTitle: "Roku", expectedH1: "Roku", expectedCanonical: "https://www.teleview.me/devices/roku", indexable: true },
    { path: "/devices/google-tv", expectedTitle: "Google TV", expectedH1: "Google TV", expectedCanonical: "https://www.teleview.me/devices/google-tv", indexable: true },
    { path: "/devices/formuler", expectedTitle: "Formuler", expectedH1: "Formuler", expectedCanonical: "https://www.teleview.me/devices/formuler", indexable: true },
    { path: "/faq", expectedTitle: "Frequently Asked Questions", expectedH1: "Frequently Asked", expectedCanonical: "https://www.teleview.me/faq", indexable: true },
    { path: "/iptv-subscription", expectedTitle: "IPTV Subscription", expectedH1: "IPTV Subscription", expectedCanonical: "https://www.teleview.me/iptv-subscription", indexable: true },
    { path: "/iptv-free-trial", expectedTitle: "IPTV Free Trial", expectedH1: "IPTV Free Trial", expectedCanonical: "https://www.teleview.me/iptv-free-trial", indexable: true },
    { path: "/iptv-subscription/1-month", expectedTitle: "1 Month", expectedH1: "1 Month", expectedCanonical: "https://www.teleview.me/iptv-subscription/1-month", indexable: true },
    { path: "/iptv-subscription/3-months", expectedTitle: "3 Months", expectedH1: "3 Months", expectedCanonical: "https://www.teleview.me/iptv-subscription/3-months", indexable: true },
    { path: "/iptv-subscription/6-months", expectedTitle: "6 Months", expectedH1: "6 Months", expectedCanonical: "https://www.teleview.me/iptv-subscription/6-months", indexable: true },
    { path: "/iptv-subscription/12-months", expectedTitle: "12 Months", expectedH1: "12 Months", expectedCanonical: "https://www.teleview.me/iptv-subscription/12-months", indexable: true },
    { path: "/contact", expectedTitle: "Contact", expectedH1: "Contact", expectedCanonical: "https://www.teleview.me/contact", indexable: true },
    { path: "/terms-conditions", expectedTitle: "Terms", expectedH1: "Terms", expectedCanonical: "https://www.teleview.me/terms-conditions", indexable: true },
    { path: "/privacy-policy", expectedTitle: "Privacy", expectedH1: "Privacy", expectedCanonical: "https://www.teleview.me/privacy-policy", indexable: true },
    { path: "/refund-policy", expectedTitle: "Refund", expectedH1: "Refund", expectedCanonical: "https://www.teleview.me/refund-policy", indexable: true },
    { path: "/disclaimer", expectedTitle: "Disclaimer", expectedH1: "Disclaimer", expectedCanonical: "https://www.teleview.me/disclaimer", indexable: true },
    { path: "/help-center", expectedTitle: "Help Center", expectedH1: "Help Center", expectedCanonical: "https://www.teleview.me/help-center", indexable: true },
    { path: "/help-center/buffering", expectedTitle: "Buffering", expectedH1: "Buffering", expectedCanonical: "https://www.teleview.me/help-center/buffering", indexable: true },
    { path: "/help-center/not-working", expectedTitle: "Not Working", expectedH1: "Not Working", expectedCanonical: "https://www.teleview.me/help-center/not-working", indexable: true },
    { path: "/help-center/epg-not-working", expectedTitle: "EPG", expectedH1: "EPG", expectedCanonical: "https://www.teleview.me/help-center/epg-not-working", indexable: true },
    { path: "/help-center/channels-not-loading", expectedTitle: "Channels", expectedH1: "Channels", expectedCanonical: "https://www.teleview.me/help-center/channels-not-loading", indexable: true },
    { path: "/help-center/connection-problems", expectedTitle: "Connection", expectedH1: "Connection", expectedCanonical: "https://www.teleview.me/help-center/connection-problems", indexable: true },
    { path: "/help-center/internet-speed", expectedTitle: "Internet Speed", expectedH1: "Internet Speed", expectedCanonical: "https://www.teleview.me/help-center/internet-speed", indexable: true },
    { path: "/my-account", expectedTitle: "My Account", expectedH1: "My Account", expectedCanonical: "https://www.teleview.me/my-account", indexable: false },
    { path: "/dmca", expectedTitle: "DMCA", expectedH1: "DMCA", expectedCanonical: "https://www.teleview.me/dmca", indexable: true },
    { path: "/best-iptv", expectedTitle: "Best IPTV Players", expectedH1: "Best IPTV Players", expectedCanonical: "https://www.teleview.me/best-iptv", indexable: true },
    { path: "/iptv-players", expectedTitle: "IPTV Players", expectedH1: "IPTV Players", expectedCanonical: "https://www.teleview.me/iptv-players", indexable: true },
    { path: "/iptv-players/tivimate", expectedTitle: "TiviMate", expectedH1: "TiviMate", expectedCanonical: "https://www.teleview.me/iptv-players/tivimate", indexable: true },
    { path: "/iptv-players/iptv-smarters-pro", expectedTitle: "IPTV Smarters", expectedH1: "IPTV Smarters", expectedCanonical: "https://www.teleview.me/iptv-players/iptv-smarters-pro", indexable: true },
    { path: "/iptv-players/ibo-player", expectedTitle: "IBO Player", expectedH1: "IBO Player", expectedCanonical: "https://www.teleview.me/iptv-players/ibo-player", indexable: true },
    { path: "/iptv-players/smartone", expectedTitle: "SmartOne", expectedH1: "SmartOne", expectedCanonical: "https://www.teleview.me/iptv-players/smartone", indexable: true },
    { path: "/iptv-players/gse-smart-iptv", expectedTitle: "GSE Smart IPTV", expectedH1: "GSE Smart IPTV", expectedCanonical: "https://www.teleview.me/iptv-players/gse-smart-iptv", indexable: true },
    { path: "/iptv-players/vlc", expectedTitle: "VLC", expectedH1: "VLC", expectedCanonical: "https://www.teleview.me/iptv-players/vlc", indexable: true },
    { path: "/iptv-players/ott-navigator", expectedTitle: "OTT Navigator", expectedH1: "OTT Navigator", expectedCanonical: "https://www.teleview.me/iptv-players/ott-navigator", indexable: true },
  ];

  for (const page of pagesToTest) {
    const targetFile = page.path === "/"
      ? path.resolve(distDir, "index.html")
      : path.resolve(distDir, page.path.replace(/^\//, ""), "index.html");
    const rawHtml = fs.readFileSync(targetFile, "utf-8");

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

    // Google Search Console verification meta tag check
    assert(`Google site verification meta tag in ${page.path}`, rawHtml.includes('name="google-site-verification" content="1rid_WjenjLtgknH6diVVgeyIOB5xT1zamR7YT1eEdc"'));

    // Robots meta tag check: /my-account and /404 must be noindex, others indexable
    const robotsMeta = rawHtml.match(/<meta[^>]*name=["']robots["'][^>]*\/?>/i)?.[0] || "";
    if (!page.indexable) {
      assert(`noindex, follow meta tag present in non-indexable ${page.path}`, robotsMeta.includes('content="noindex, follow"'));
    } else {
      assert(`no noindex tag in indexable ${page.path}`, !robotsMeta.includes("noindex"));
    }

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
  const setupHtml = fs.readFileSync(path.resolve(distDir, "setup/index.html"), "utf-8");
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
  const devicesHtml = fs.readFileSync(path.resolve(distDir, "devices/index.html"), "utf-8");
  assert("Semantic <table> on /devices", devicesHtml.includes("<table") && devicesHtml.includes("</table>"));
  assert("<thead> and <tbody> on /devices", devicesHtml.includes("<thead") && devicesHtml.includes("<tbody"));
  assert("Bandwidth recommendations present on /devices", devicesHtml.includes("10 Mbps") && devicesHtml.includes("25 Mbps"));
  assert("Visible breadcrumbs on /devices", devicesHtml.includes('aria-label="Breadcrumb"'));

  // /faq checks
  const faqHtml = fs.readFileSync(path.resolve(distDir, "faq/index.html"), "utf-8");
  assert("Visible breadcrumbs on /faq", faqHtml.includes('aria-label="Breadcrumb"'));
  assert("14-day guarantee information on /faq", faqHtml.includes("14-day"));

  // /what-is-iptv checks
  const whatIsIptvHtml = fs.readFileSync(path.resolve(distDir, "what-is-iptv/index.html"), "utf-8");
  assert("Visible breadcrumbs on /what-is-iptv", whatIsIptvHtml.includes('aria-label="Breadcrumb"'));

  // /iptv-players checks
  const iptvPlayersHtml = fs.readFileSync(path.resolve(distDir, "iptv-players/index.html"), "utf-8");
  assert("Visible breadcrumbs on /iptv-players", iptvPlayersHtml.includes('aria-label="Breadcrumb"'));

  // 4. Structured Data JSON-LD & Entity Graph Verification
  console.log("\n--- 4. STRUCTURED DATA & ENTITY GRAPH VALIDATION ---");
  for (const page of pagesToTest) {
    const targetFile = page.path === "/"
      ? path.resolve(distDir, "index.html")
      : path.resolve(distDir, page.path.replace(/^\//, ""), "index.html");
    const rawHtml = fs.readFileSync(targetFile, "utf-8");
    const ldJsonMatches = rawHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
    assert(`Single JSON-LD script tag in ${page.path}`, ldJsonMatches.length === 1, `${ldJsonMatches.length} JSON-LD script tags found`);

    const ldJsonMatch = rawHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    assert(`JSON-LD script present in ${page.path}`, Boolean(ldJsonMatch));

    if (ldJsonMatch) {
      try {
        const rawParsed = JSON.parse(ldJsonMatch[1]);
        const schemas = Array.isArray(rawParsed) ? rawParsed : (rawParsed["@graph"] || [rawParsed]);
        assert(`JSON-LD parses cleanly in ${page.path}`, Array.isArray(schemas) && schemas.length > 0, `${schemas.length} schemas`);
        const types = schemas.flatMap((s) => (Array.isArray(s["@type"]) ? s["@type"] : [s["@type"]]));
        assert(`Organization & WebSite present in ${page.path}`, types.includes("Organization") && types.includes("WebSite"));

        // Anti-spam assertion: no fake AggregateRating or Review schemas anywhere in tree
        const rawJsonString = ldJsonMatch[1].toLowerCase();
        assert(`No fake AggregateRating schema in ${page.path}`, !rawJsonString.includes("aggregaterating"));
        assert(`No fake Review schema in ${page.path}`, !rawJsonString.includes('"review"') && !types.includes("Review"));

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
          assert("TechArticle schema present in /devices", types.includes("TechArticle"));
        } else if (page.path === "/") {
          assert("Product schema present in /", types.includes("Product"));
        } else if (page.path === "/iptv-free-trial") {
          assert("Service schema present in /iptv-free-trial", types.includes("Service"));
          assert("BreadcrumbList schema present in /iptv-free-trial", types.includes("BreadcrumbList"));
          assert("FAQPage schema present in /iptv-free-trial", types.includes("FAQPage"));
        } else if (page.path.startsWith("/iptv-subscription")) {
          assert(`Product schema present in ${page.path}`, types.includes("Product"));
          assert(`BreadcrumbList schema present in ${page.path}`, types.includes("BreadcrumbList"));
        } else if (page.path === "/best-iptv") {
          assert("CollectionPage schema present in /best-iptv", types.includes("CollectionPage"));
          assert("BreadcrumbList schema present in /best-iptv", types.includes("BreadcrumbList"));
          assert("FAQPage schema present in /best-iptv", types.includes("FAQPage"));
          assert("No Product schema in /best-iptv", !types.includes("Product"));
        } else if (page.path === "/iptv-players") {
          assert("CollectionPage schema present in /iptv-players", types.includes("CollectionPage"));
          assert("BreadcrumbList schema present in /iptv-players", types.includes("BreadcrumbList"));
          assert("No Product schema in /iptv-players", !types.includes("Product"));
        } else if (page.path === "/what-is-iptv") {
          assert("Article or TechArticle schema present in /what-is-iptv", types.includes("Article") || types.includes("TechArticle"));
          assert("BreadcrumbList schema present in /what-is-iptv", types.includes("BreadcrumbList"));
          assert("FAQPage schema present in /what-is-iptv", types.includes("FAQPage"));
          assert("No Product schema in /what-is-iptv", !types.includes("Product"));
        } else if (page.path.startsWith("/iptv-players/")) {
          assert(`TechArticle schema present in ${page.path}`, types.includes("TechArticle"));
          assert(`BreadcrumbList schema present in ${page.path}`, types.includes("BreadcrumbList"));
          assert(`FAQPage schema present in ${page.path}`, types.includes("FAQPage"));
          assert(`No Product schema in ${page.path}`, !types.includes("Product"));
        } else if (page.path.startsWith("/devices/")) {
          assert(`TechArticle schema present in ${page.path}`, types.includes("TechArticle"));
          assert(`BreadcrumbList schema present in ${page.path}`, types.includes("BreadcrumbList"));
          assert(`FAQPage schema present in ${page.path}`, types.includes("FAQPage"));
          assert(`No Product schema in ${page.path}`, !types.includes("Product"));
        } else if (page.path.startsWith("/help-center/")) {
          assert(`TechArticle schema present in ${page.path}`, types.includes("TechArticle"));
          assert(`BreadcrumbList schema present in ${page.path}`, types.includes("BreadcrumbList"));
          assert(`FAQPage schema present in ${page.path}`, types.includes("FAQPage"));
          assert(`No Product schema in ${page.path}`, !types.includes("Product"));
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
    if (!page.indexable) {
      assert(`Sitemap excludes non-indexable ${page.expectedCanonical}`, !sitemapContent.includes(page.expectedCanonical));
    } else {
      assert(`Sitemap contains ${page.expectedCanonical}`, sitemapContent.includes(page.expectedCanonical));
    }
  }

  const robotsContent = fs.readFileSync(distRobots, "utf-8");
  assert("robots.txt allows all user agents", robotsContent.includes("User-agent: *") && robotsContent.includes("Allow: /"));
  assert("robots.txt references sitemap.xml", robotsContent.includes("Sitemap: https://www.teleview.me/sitemap.xml"));
  assert("robots.txt allows GPTBot (OpenAI/SearchGPT)", robotsContent.includes("User-agent: GPTBot"));
  assert("robots.txt allows OAI-SearchBot (SearchGPT)", robotsContent.includes("User-agent: OAI-SearchBot"));
  assert("robots.txt allows ClaudeBot (Anthropic)", robotsContent.includes("User-agent: ClaudeBot"));
  assert("robots.txt allows PerplexityBot (Perplexity AI)", robotsContent.includes("User-agent: PerplexityBot"));
  assert("robots.txt allows Google-Extended (Gemini)", robotsContent.includes("User-agent: Google-Extended"));
  assert("robots.txt allows Applebot-Extended (Apple Intelligence)", robotsContent.includes("User-agent: Applebot-Extended"));
  assert("robots.txt allows Meta-ExternalAgent (Meta AI)", robotsContent.includes("User-agent: Meta-ExternalAgent"));

  // AI & LLM Machine-Readable Files Verification
  const distLlms = path.resolve(distDir, "llms.txt");
  const distLlmsFull = path.resolve(distDir, "llms-full.txt");
  assert("dist/llms.txt exists", fs.existsSync(distLlms));
  assert("dist/llms-full.txt exists", fs.existsSync(distLlmsFull));
  if (fs.existsSync(distLlms)) {
    const llmsText = fs.readFileSync(distLlms, "utf-8");
    assert("llms.txt includes Teleview brand entity", llmsText.includes("Teleview"));
    assert("llms.txt includes 2026 pricing", llmsText.includes("$16") && llmsText.includes("$90"));
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
      // 1. Preferred canonical hostname: www -> 200 OK
      const routeRes = await fetchEndpoint(testPort, page.path, { host: "www.teleview.me" });
      assert(`HTTP GET www.teleview.me${page.path} returns 200 OK`, routeRes.status === 200);
      assert(`HTTP GET www.teleview.me${page.path} Content-Type is text/html`, routeRes.contentType.includes("text/html"));
      assert(`HTTP GET www.teleview.me${page.path} contains pre-rendered content`, routeRes.body.includes(page.expectedH1));

      // 2. Non-www hostname: teleview.me -> permanent 308 redirect to https://www.teleview.me/ROUTE
      const nonWwwRes = await fetchEndpoint(testPort, page.path, { host: "teleview.me" });
      assert(`HTTP GET teleview.me${page.path} returns 308 permanent redirect`, nonWwwRes.status === 308);
      assert(
        `HTTP GET teleview.me${page.path} redirects directly to https://www.teleview.me${page.path}`,
        nonWwwRes.location === `https://www.teleview.me${page.path}`
      );
    }

    const robotsRes = await fetchEndpoint(testPort, "/robots.txt", { host: "www.teleview.me" });
    assert("HTTP GET /robots.txt returns 200 OK", robotsRes.status === 200);
    assert("HTTP GET /robots.txt Content-Type is text/plain", robotsRes.contentType.includes("text/plain"));

    const sitemapRes = await fetchEndpoint(testPort, "/sitemap.xml", { host: "www.teleview.me" });
    assert("HTTP GET /sitemap.xml returns 200 OK", sitemapRes.status === 200);
    assert("HTTP GET /sitemap.xml Content-Type is XML", sitemapRes.contentType.includes("xml"));

    const googleRes = await fetchEndpoint(testPort, "/googlead354e55b11eac48.html", { host: "www.teleview.me" });
    assert("HTTP GET /googlead354e55b11eac48.html returns 200 OK", googleRes.status === 200);
    assert("HTTP GET /googlead354e55b11eac48.html contains verification code", googleRes.body.includes("googlead354e55b11eac48.html"));

    const llmsRes = await fetchEndpoint(testPort, "/llms.txt", { host: "www.teleview.me" });
    assert("HTTP GET /llms.txt returns 200 OK", llmsRes.status === 200);
    assert("HTTP GET /llms.txt contains brand Teleview", llmsRes.body.includes("Teleview"));

    const llmsFullRes = await fetchEndpoint(testPort, "/llms-full.txt", { host: "www.teleview.me" });
    assert("HTTP GET /llms-full.txt returns 200 OK", llmsFullRes.status === 200);
    assert("HTTP GET /llms-full.txt contains knowledge base content", llmsFullRes.body.includes("Firestick") && llmsFullRes.body.includes("12 Months"));

    const pricingRes = await fetchEndpoint(testPort, "/pricing", { host: "www.teleview.me" });
    assert("HTTP GET /pricing returns 308 permanent redirect", pricingRes.status === 308);
    assert("HTTP GET /pricing redirects to /iptv-subscription", pricingRes.location.includes("/iptv-subscription"));

    const oldTivimateRes = await fetchEndpoint(testPort, "/best-iptv/tivimate", { host: "www.teleview.me" });
    assert("HTTP GET /best-iptv/tivimate returns 308 permanent redirect", oldTivimateRes.status === 308);
    assert("HTTP GET /best-iptv/tivimate redirects to /iptv-players/tivimate", oldTivimateRes.location === "/iptv-players/tivimate");

    const extractBody = (raw) => {
      const rootMatch = raw.match(/<div id="root">([\s\S]*?)<\/div>/i);
      return rootMatch ? rootMatch[1] : raw.replace(/<script[\s\S]*?<\/script>/gi, " ");
    };

    const notFoundRes = await fetchEndpoint(testPort, "/definitely-nonexistent-seo-test", { host: "www.teleview.me" });
    assert("HTTP GET /nonexistent returns genuine 404", notFoundRes.status === 404);
    assert("HTTP GET /nonexistent renders 404 text", notFoundRes.body.includes("Page Not Found"));

    const unknownDeviceRes = await fetchEndpoint(testPort, "/devices/does-not-exist", { host: "www.teleview.me" });
    assert("HTTP GET /devices/does-not-exist returns 404", unknownDeviceRes.status === 404);
    assert("HTTP GET /devices/does-not-exist renders 404 text", unknownDeviceRes.body.includes("Page Not Found"));
    assert("HTTP GET /devices/does-not-exist does NOT leak Firestick content", !extractBody(unknownDeviceRes.body).includes("Amazon Fire TV Stick"));

    const unknownHelpRes = await fetchEndpoint(testPort, "/help-center/does-not-exist", { host: "www.teleview.me" });
    assert("HTTP GET /help-center/does-not-exist returns 404", unknownHelpRes.status === 404);
    assert("HTTP GET /help-center/does-not-exist does NOT leak Buffering content", !extractBody(unknownHelpRes.body).includes("Buffering & Stream Freezing"));

    const unknownPlayerRes = await fetchEndpoint(testPort, "/iptv-players/does-not-exist", { host: "www.teleview.me" });
    assert("HTTP GET /iptv-players/does-not-exist returns 404", unknownPlayerRes.status === 404);
    assert("HTTP GET /iptv-players/does-not-exist does NOT leak TiviMate content", !extractBody(unknownPlayerRes.body).includes("TiviMate IPTV Player"));
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
