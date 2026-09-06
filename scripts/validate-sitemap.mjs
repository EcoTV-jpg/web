import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

// Expected 33 canonical approved sitemap paths
const APPROVED_SITEMAP_PATHS = [
  "/",
  "/iptv-subscription",
  "/iptv-subscription/1-month",
  "/iptv-subscription/3-months",
  "/iptv-subscription/6-months",
  "/iptv-subscription/12-months",
  "/iptv-free-trial",
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
  "/devices",
  "/devices/firestick",
  "/devices/samsung-smart-tv",
  "/devices/lg-smart-tv",
  "/devices/android-tv",
  "/devices/apple-tv",
  "/devices/roku",
  "/devices/google-tv",
  "/devices/formuler",
  "/help-center",
  "/help-center/buffering",
  "/help-center/not-working",
  "/help-center/epg-not-working",
  "/help-center/channels-not-loading",
  "/help-center/connection-problems",
  "/help-center/internet-speed",
];

const EXCLUDED_SLUGS = [
  "/setup",
  "/faq",
  "/contact",
  "/terms-conditions",
  "/privacy-policy",
  "/refund-policy",
  "/disclaimer",
  "/dmca",
  "/my-account",
  "/404",
  "/pricing",
];

async function validateSitemap() {
  console.log("==================================================");
  console.log("       TELEVIEW SITEMAP & TECHNICAL SEO AUDIT     ");
  console.log("==================================================");

  const { routes, sitemapRoutes } = await import("../src/routes.ts");

  const sitemapDistPath = path.resolve(distDir, "sitemap.xml");
  const sitemapPublicPath = path.resolve(rootDir, "public/sitemap.xml");
  const robotsDistPath = path.resolve(distDir, "robots.txt");
  const robotsPublicPath = path.resolve(rootDir, "public/robots.txt");
  const vercelJsonPath = path.resolve(rootDir, "vercel.json");

  let failures = 0;
  function check(label, condition, detail = "") {
    if (condition) {
      console.log(`[PASS] ${label} ${detail ? `(${detail})` : ""}`);
    } else {
      console.error(`[FAIL] ${label} ${detail ? `(${detail})` : ""}`);
      failures++;
    }
  }

  // 1. Check sitemap and robots existence
  console.log("\n--- 1. FILE EXISTENCE & ROBOTS DIRECTIVE ---");
  check("dist/sitemap.xml exists", fs.existsSync(sitemapDistPath));
  check("public/sitemap.xml exists", fs.existsSync(sitemapPublicPath));
  check("dist/robots.txt exists", fs.existsSync(robotsDistPath));
  check("public/robots.txt exists", fs.existsSync(robotsPublicPath));

  const expectedSitemapDirective = "Sitemap: https://www.teleview.me/sitemap.xml";
  if (fs.existsSync(robotsDistPath)) {
    const robotsContent = fs.readFileSync(robotsDistPath, "utf-8");
    check(
      "dist/robots.txt declares canonical sitemap.xml",
      robotsContent.includes(expectedSitemapDirective),
      expectedSitemapDirective
    );
    check(
      "dist/robots.txt has User-agent: * and Allow: /",
      robotsContent.includes("User-agent: *") && robotsContent.includes("Allow: /")
    );
    check(
      "dist/robots.txt does not disallow CSS, JS, or images",
      !robotsContent.includes("Disallow: /*.js") &&
        !robotsContent.includes("Disallow: /*.css") &&
        !robotsContent.includes("Disallow: /assets")
    );
  }

  if (fs.existsSync(robotsPublicPath)) {
    const publicRobots = fs.readFileSync(robotsPublicPath, "utf-8");
    check(
      "public/robots.txt declares canonical sitemap.xml",
      publicRobots.includes(expectedSitemapDirective),
      expectedSitemapDirective
    );
  }

  // 2. Read and parse sitemap.xml
  console.log("\n--- 2. SITEMAP PROTOCOL & STRUCTURE AUDIT ---");
  const targetSitemapPath = fs.existsSync(sitemapDistPath) ? sitemapDistPath : sitemapPublicPath;
  const sitemapXml = fs.readFileSync(targetSitemapPath, "utf-8");

  // Verify XML protocol rules: no priority, no changefreq, valid lastmod
  check(
    "Sitemap does NOT contain deprecated <priority> tags",
    !sitemapXml.includes("<priority>")
  );
  check(
    "Sitemap does NOT contain deprecated <changefreq> tags",
    !sitemapXml.includes("<changefreq>")
  );
  check(
    "Sitemap contains standard <urlset> namespace",
    sitemapXml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
  );

  const urlsInSitemap = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  console.log(`Total URLs parsed from sitemap: ${urlsInSitemap.length}`);
  check(
    "Sitemap contains exactly 33 approved URLs",
    urlsInSitemap.length === APPROVED_SITEMAP_PATHS.length,
    `${urlsInSitemap.length} found, ${APPROVED_SITEMAP_PATHS.length} expected`
  );

  // Check duplicate URLs in sitemap
  const seenUrls = new Set();
  const duplicateUrls = [];
  for (const u of urlsInSitemap) {
    if (seenUrls.has(u)) {
      duplicateUrls.push(u);
    }
    seenUrls.add(u);
  }
  check("Zero duplicate URLs in sitemap", duplicateUrls.length === 0, duplicateUrls.join(", "));

  // Check sitemap URLs against routing configuration
  const registeredSitemapUrls = sitemapRoutes.map((r) =>
    r.path === "/" ? "https://www.teleview.me/" : `https://www.teleview.me${r.path}`
  );
  for (const sitemapUrl of urlsInSitemap) {
    const inRouting = registeredSitemapUrls.includes(sitemapUrl);
    check(
      `Sitemap URL recognized in routing matrix: ${sitemapUrl}`,
      inRouting,
      inRouting ? "Valid" : "Orphaned/Unregistered URL"
    );
  }

  // Check approved URLs are all in sitemap
  for (const p of APPROVED_SITEMAP_PATHS) {
    const expectedCanonical = p === "/" ? "https://www.teleview.me/" : `https://www.teleview.me${p}`;
    const isPresent = urlsInSitemap.includes(expectedCanonical);
    check(`Approved URL present in sitemap: ${p}`, isPresent);
  }

  // Verify excluded URLs are absent from sitemap
  console.log("\n--- 3. SITEMAP EXCLUSION CHECK ---");
  for (const slug of EXCLUDED_SLUGS) {
    const canonical = `https://www.teleview.me${slug}`;
    const isPresent = urlsInSitemap.includes(canonical);
    check(
      `Sitemap EXCLUDES ${slug}`,
      !isPresent,
      isPresent ? `Found forbidden URL: ${canonical}` : "Successfully omitted"
    );
  }

  // 4. Verify excluded utility/support pages remain accessible in dist/
  console.log("\n--- 4. ACCESSIBILITY OF EXCLUDED UTILITY & SUPPORT PAGES ---");
  const utilityPagesToCheck = [
    "/setup",
    "/faq",
    "/contact",
    "/terms-conditions",
    "/privacy-policy",
    "/refund-policy",
    "/disclaimer",
    "/dmca",
  ];

  for (const slug of utilityPagesToCheck) {
    const htmlFile = path.resolve(distDir, slug.replace(/^\//, ""), "index.html");
    const exists = fs.existsSync(htmlFile);
    check(`Accessible HTML exists for ${slug}`, exists, htmlFile);
    if (exists) {
      const html = fs.readFileSync(htmlFile, "utf-8");
      const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
      const expectedCanonical = `https://www.teleview.me${slug}`;
      check(
        `Self-referencing canonical on ${slug}`,
        canonicalMatch && canonicalMatch[1] === expectedCanonical,
        canonicalMatch ? canonicalMatch[1] : "missing"
      );
      const robotsMeta = html.match(/<meta[^>]*name=["']robots["'][^>]*\/?>/i)?.[0] || "";
      check(
        `Indexable (no noindex) on ${slug}`,
        !robotsMeta.includes("noindex"),
        robotsMeta || "none"
      );
    }
  }

  // 5. Check redirect rules in vercel.json (guarantee zero sitemap URLs redirect)
  console.log("\n--- 5. REDIRECT CROSS-CHECK (NO SITEMAP URL REDIRECTS) ---");
  let redirectSources = [];
  if (fs.existsSync(vercelJsonPath)) {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
    redirectSources = (vercelConfig.redirects || []).map((r) => r.source);
  }

  // 6. Audit every URL in sitemap.xml
  console.log("\n--- 6. PER-URL AUDIT (HTTP 200, INDEXABILITY, CANONICAL) ---");
  const reportRows = [];

  for (const url of urlsInSitemap) {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname === "" ? "/" : urlObj.pathname;
    const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

    // a. Check redirect collision
    const redirects = redirectSources.includes(cleanPath);

    // b. Resolve pre-rendered HTML file from dist/
    const targetFile = cleanPath === "/"
      ? path.resolve(distDir, "index.html")
      : path.resolve(distDir, cleanPath.replace(/^\//, ""), "index.html");
    const fileExists = fs.existsSync(targetFile);

    let httpStatus = 0;
    let body = "";

    if (redirects) {
      httpStatus = 308;
    } else if (fileExists) {
      httpStatus = 200;
      body = fs.readFileSync(targetFile, "utf-8");
    } else {
      httpStatus = 404;
    }

    // c. Canonical check
    const canonicalMatch = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const foundCanonical = canonicalMatch ? canonicalMatch[1] : null;
    const isSelfCanonical = foundCanonical === url;

    // d. Indexability check
    const robotsMatch = body.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
    const robotsContent = robotsMatch ? robotsMatch[1] : "";
    const hasNoIndex = robotsContent.toLowerCase().includes("noindex");
    const isIndexable = !hasNoIndex;

    const row = {
      url,
      path: cleanPath,
      httpStatus,
      redirects: redirects ? "YES (REDIRECT)" : "NONE (DIRECT)",
      isIndexable: isIndexable ? "YES (index, follow)" : "NO (noindex)",
      canonical: isSelfCanonical ? "SELF (MATCH)" : `MISMATCH (${foundCanonical})`,
      passed: httpStatus === 200 && !redirects && isIndexable && isSelfCanonical,
    };

    reportRows.push(row);

    check(
      `URL ${cleanPath}`,
      row.passed,
      `Status: ${httpStatus} | Canonical: ${isSelfCanonical ? "MATCH" : "FAIL"} | Indexable: ${isIndexable ? "YES" : "NO"} | Redirect: ${row.redirects}`
    );
  }

  // Print Summary Table
  console.log("\n==================================================");
  console.log("            SITEMAP URL AUDIT SUMMARY             ");
  console.log("==================================================");
  console.table(
    reportRows.map((r) => ({
      Path: r.path,
      Status: r.httpStatus,
      Redirect: r.redirects,
      Indexable: r.isIndexable,
      Canonical: r.canonical,
      Pass: r.passed ? "PASS" : "FAIL",
    }))
  );

  const failingUrls = reportRows.filter((r) => !r.passed);
  console.log("\n--- EXCEPTION REPORT ---");
  if (failingUrls.length === 0) {
    console.log("Zero URLs returned non-200, noindex, or non-self canonical. 100% SUCCESS.");
  } else {
    console.error(`Found ${failingUrls.length} failing URLs:`);
    console.table(failingUrls);
  }

  if (failures > 0 || failingUrls.length > 0) {
    process.exit(1);
  } else {
    console.log("\n[SUCCESS] All sitemap validations passed cleanly with 0 errors.");
  }
}

validateSitemap().catch((err) => {
  console.error("Fatal error during sitemap validation:", err);
  process.exit(1);
});
