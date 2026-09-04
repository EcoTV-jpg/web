import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

const clusterRoutes = [
  "/best-iptv",
  "/best-iptv/tivimate",
  "/best-iptv/iptv-smarters-pro",
  "/best-iptv/ibo-player",
  "/best-iptv/smartone",
  "/best-iptv/gse-smart-iptv",
  "/best-iptv/vlc",
  "/best-iptv/ott-navigator",
];

const appRoutes = clusterRoutes.filter((r) => r !== "/best-iptv");

console.log("==================================================");
console.log("    BEST IPTV SEO & CONTENT QUALITY GATE         ");
console.log("==================================================\n");

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

function check(name, condition, details = "") {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`[PASS] ${name} ${details ? `(${details})` : ""}`);
  } else {
    failedChecks++;
    failures.push({ name, details });
    console.error(`[FAIL] ${name} -> ${details}`);
  }
}

// Helper: load HTML
function getHtml(routePath) {
  const clean = routePath.replace(/^\//, "");
  const p = path.resolve(distDir, clean, "index.html");
  if (!fs.existsSync(p)) return null;
  return fs.readFileSync(p, "utf-8");
}

function extractText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getNGrams(words, n) {
  const ngrams = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    ngrams.add(words.slice(i, i + n).join(" "));
  }
  return ngrams;
}

function jaccardSimilarity(setA, setB) {
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return union.size === 0 ? 0 : intersection.size / union.size;
}

// 1. ROUTE EXISTENCE
console.log("\n--- 1. ROUTE EXISTENCE ---");
for (const r of clusterRoutes) {
  const clean = r.replace(/^\//, "");
  const filePath = path.resolve(distDir, clean, "index.html");
  check(`Route file exists for ${r}`, fs.existsSync(filePath), filePath);
}

// 2 & 3 & 4 & 5 & 6. METADATA, CANONICAL, H1 & HEADING HIERARCHY
console.log("\n--- 2. METADATA, CANONICAL & HEADING QA ---");
const titles = new Map();
const descriptions = new Map();
const ogTitles = new Map();

for (const r of clusterRoutes) {
  const html = getHtml(r);
  if (!html) continue;

  // Title
  const titleMatches = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatches ? titleMatches[1].trim() : "";
  check(`Page ${r} has valid <title>`, Boolean(title && title.length >= 20 && title.length <= 80), title);
  check(`Page ${r} title is unique`, !titles.has(title), `Duplicate of ${titles.get(title)}`);
  if (title) titles.set(title, r);

  // Description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
  const desc = descMatch ? descMatch[1].trim() : "";
  check(`Page ${r} has valid meta description`, Boolean(desc && desc.length >= 60 && desc.length <= 180), `${desc.length} chars`);
  check(`Page ${r} meta description is unique`, !descriptions.has(desc), `Duplicate of ${descriptions.get(desc)}`);
  if (desc) descriptions.set(desc, r);

  // Canonical
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : "";
  const expectedCanonical = `https://www.teleview.me${r}`;
  check(`Page ${r} canonical points to self`, canonical === expectedCanonical, `Got: ${canonical}, Expected: ${expectedCanonical}`);

  // Single H1
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  check(`Page ${r} has exactly one <h1> tag`, h1Matches.length === 1, `${h1Matches.length} found`);

  // No empty headings
  const emptyHeadings = html.match(/<h[1-6][^>]*>\s*<\/h[1-6]>/gi) || [];
  check(`Page ${r} has no empty headings`, emptyHeadings.length === 0, `${emptyHeadings.length} empty headings`);

  // Open Graph
  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);
  const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : "";
  check(`Page ${r} has og:title`, Boolean(ogTitle), ogTitle);
  check(`Page ${r} og:title is unique`, !ogTitles.has(ogTitle), `Duplicate of ${ogTitles.get(ogTitle)}`);
  if (ogTitle) ogTitles.set(ogTitle, r);
}

// 7. BREADCRUMBS QA
console.log("\n--- 3. BREADCRUMB QA ---");
for (const r of clusterRoutes) {
  const html = getHtml(r);
  if (!html) continue;

  const navMatch = html.match(/<nav[^>]*aria-label=["']Breadcrumb["'][\s\S]*?<\/nav>/i);
  check(`Page ${r} renders visible Breadcrumb nav`, Boolean(navMatch));

  if (r === "/best-iptv") {
    check("Hub breadcrumb contains Home and Best IPTV", html.includes("Home") && html.includes("Best IPTV Players"));
  } else {
    check(`App page ${r} breadcrumb links back to /best-iptv`, html.includes('href="/best-iptv"') || html.includes('href="https://www.teleview.me/best-iptv"'));
  }
}

// 8 & 9. JSON-LD STRUCTURED DATA
console.log("\n--- 4. JSON-LD STRUCTURED DATA QA ---");
for (const r of clusterRoutes) {
  const html = getHtml(r);
  if (!html) continue;

  const jsonLdMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  check(`Page ${r} has exactly one JSON-LD script`, jsonLdMatches.length === 1, `${jsonLdMatches.length} found`);

  if (jsonLdMatches.length === 1) {
    const rawJson = jsonLdMatches[0].replace(/<script[^>]*>/i, "").replace(/<\/script>/i, "").trim();
    let parsed;
    try {
      parsed = JSON.parse(rawJson);
      check(`Page ${r} JSON-LD is valid JSON`, true);
    } catch (err) {
      check(`Page ${r} JSON-LD is valid JSON`, false, err.message);
    }

    if (parsed) {
      const graph = parsed["@graph"] || [];
      const types = graph.map((e) => e["@type"]).flat();
      check(`Page ${r} JSON-LD contains Organization`, types.includes("Organization"));
      check(`Page ${r} JSON-LD contains WebSite`, types.includes("WebSite"));
      check(`Page ${r} JSON-LD contains WebPage`, types.includes("WebPage") || types.includes("CollectionPage"));
      check(`Page ${r} JSON-LD contains BreadcrumbList`, types.includes("BreadcrumbList"));

      // Zero fake reviews
      check(`Page ${r} has NO fake AggregateRating`, !types.includes("AggregateRating"));
      check(`Page ${r} has NO fake Review`, !types.includes("Review"));

      // App pages must NOT have Product schema (they are 3rd party apps, not Teleview subscriptions)
      if (r !== "/best-iptv") {
        check(`App page ${r} has NO Product schema`, !types.includes("Product"));
        check(`App page ${r} has TechArticle schema`, types.includes("TechArticle"));
      }
    }
  }
}

// 10 & 11 & 12. INTERNAL LINKING, ORPHAN CHECK & BROKEN LINKS
console.log("\n--- 5. INTERNAL LINK GRAPH & INTEGRITY ---");
const hubHtml = getHtml("/best-iptv");
for (const appRoute of appRoutes) {
  // Hub must link to every app
  check(`Hub /best-iptv links to ${appRoute}`, Boolean(hubHtml && (hubHtml.includes(`href="${appRoute}"`) || hubHtml.includes(`href="${appRoute}/"`))));

  // Every app must link back to /best-iptv
  const appHtml = getHtml(appRoute);
  check(`App ${appRoute} links back to Hub /best-iptv`, Boolean(appHtml && (appHtml.includes('href="/best-iptv"') || appHtml.includes('href="/best-iptv/"'))));

  // Contextual link to setup or devices or subscription
  check(`App ${appRoute} links to /setup`, Boolean(appHtml && appHtml.includes('href="/setup')));
  check(`App ${appRoute} links to /iptv-subscription`, Boolean(appHtml && appHtml.includes('href="/iptv-subscription"')));
}

// Broken links check on all cluster pages
const internalLinkRegex = /<a[^>]*href=["']([^"'#]+)["'][^>]*>/gi;
const distFiles = new Set();
function scanDistFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      scanDistFiles(full);
    } else if (e.name === "index.html") {
      const rel = path.relative(distDir, full);
      const route = "/" + rel.replace(/\/index\.html$/, "").replace(/^index\.html$/, "");
      distFiles.add(route === "" ? "/" : route);
    }
  }
}
scanDistFiles(distDir);

let brokenCount = 0;
for (const r of clusterRoutes) {
  const html = getHtml(r);
  if (!html) continue;

  let m;
  while ((m = internalLinkRegex.exec(html)) !== null) {
    const href = m[1].split("?")[0].replace(/\/$/, "") || "/";
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/images") && !href.startsWith("/favicon")) {
      if (!distFiles.has(href)) {
        brokenCount++;
        console.error(`Broken link in ${r}: href="${m[1]}" not found in dist`);
      }
    }
  }
}
check("Zero broken internal links in cluster", brokenCount === 0, `${brokenCount} broken links found`);

// 13. SITEMAP INCLUSION
console.log("\n--- 6. SITEMAP INCLUSION ---");
const sitemapPath = path.resolve(distDir, "sitemap.xml");
check("dist/sitemap.xml exists", fs.existsSync(sitemapPath));
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, "utf-8");
  for (const r of clusterRoutes) {
    const loc = `https://www.teleview.me${r}`;
    check(`Sitemap includes canonical URL for ${r}`, sitemapXml.includes(`<loc>${loc}</loc>`), loc);
  }
}

// 14. ROBOTS & INDEXABILITY
console.log("\n--- 7. ROBOTS & INDEXABILITY ---");
for (const r of clusterRoutes) {
  const html = getHtml(r);
  if (!html) continue;
  check(`Page ${r} does NOT contain noindex`, !html.includes('content="noindex"') && !html.includes("noindex,"));
}

// 15 & 16. CONTENT DIFFERENTIATION & THIN CONTENT
console.log("\n--- 8. CONTENT DIFFERENTIATION & THIN CONTENT AUDIT ---");
const appContents = {};
for (const r of appRoutes) {
  const html = getHtml(r);
  const text = extractText(html);
  const words = text.toLowerCase().match(/\b[a-z0-9'-]+\b/g) || [];
  appContents[r] = {
    wordCount: words.length,
    words,
    words1Gram: new Set(words),
    words2Gram: getNGrams(words, 2),
    words3Gram: getNGrams(words, 3),
  };

  check(`App ${r} word count >= 750 words (comprehensive)`, words.length >= 750, `${words.length} words`);

  // Check required sections exist in DOM
  check(`App ${r} contains Platform Compatibility section`, html.includes("Compatibility") || html.includes("compatibility"));
  check(`App ${r} contains Setup section`, html.includes("Set Up") || html.includes("Setup") || html.includes("Install"));
  check(`App ${r} contains Troubleshooting section`, html.includes("Troubleshooting") || html.includes("troubleshooting"));
  check(`App ${r} contains Advantages & Limitations`, html.includes("Advantages") && html.includes("Limitations"));
  check(`App ${r} contains Alternatives section`, html.includes("Alternative") || html.includes("alternative"));
  check(`App ${r} contains FAQs`, html.includes("Frequently Asked Questions"));
}

// Pairwise Jaccard similarity across app pages
for (let i = 0; i < appRoutes.length; i++) {
  for (let j = i + 1; j < appRoutes.length; j++) {
    const routeA = appRoutes[i];
    const routeB = appRoutes[j];

    const sim3Gram = jaccardSimilarity(appContents[routeA].words3Gram, appContents[routeB].words3Gram);
    const simPercent = (sim3Gram * 100).toFixed(1);

    // Differentiation threshold: phrase overlap should be < 38%
    check(
      `Differentiation: ${path.basename(routeA)} vs ${path.basename(routeB)} phrase overlap < 38%`,
      sim3Gram < 0.38,
      `${simPercent}% 3-gram Jaccard overlap`
    );
  }
}

// 17. SUSPICIOUS FEATURE CLAIMS & FALSE FIRST-HAND TESTING
console.log("\n--- 9. SUSPICIOUS CLAIMS & FACTUAL INTEGRITY ---");
const forbiddenPhrases = [
  "we tested",
  "our testing showed",
  "in our experience",
  "our lab",
  "we verified personally",
  "our hands-on review",
  "the ultimate solution",
  "game-changing",
  "revolutionary streaming",
  "elevate your viewing experience",
];

for (const r of clusterRoutes) {
  const html = getHtml(r).toLowerCase();
  for (const phrase of forbiddenPhrases) {
    check(
      `Page ${r} contains NO false testing claim "${phrase}"`,
      !html.includes(phrase),
      `Found forbidden phrase "${phrase}"`
    );
  }
}

// 18. ANCHOR TEXT QUALITY
console.log("\n--- 10. ANCHOR TEXT QUALITY ---");
let emptyAnchorCount = 0;
let genericAnchorCount = 0;
const anchorRegex = /<a[^>]*href=["'][^"']+["'][^>]*>([\s\S]*?)<\/a>/gi;

for (const r of clusterRoutes) {
  const html = getHtml(r);
  let m;
  while ((m = anchorRegex.exec(html)) !== null) {
    const anchorInner = m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!anchorInner && !m[1].includes("<svg") && !m[1].includes("<img")) {
      emptyAnchorCount++;
      console.warn(`Empty anchor in ${r}: ${m[0]}`);
    }
    const lower = anchorInner.toLowerCase();
    if (lower === "click here" || lower === "read more" || lower === "learn more") {
      genericAnchorCount++;
      console.warn(`Generic anchor text in ${r}: "${anchorInner}"`);
    }
  }
}
check("No empty anchor tags found in cluster", emptyAnchorCount === 0, `${emptyAnchorCount} empty anchors`);
check("No standalone generic anchors (click here / read more)", genericAnchorCount === 0, `${genericAnchorCount} generic anchors`);

// 19 & 20. DUPLICATE EDITORIAL PARAGRAPHS
console.log("\n--- 11. DUPLICATE EDITORIAL PARAGRAPHS CHECK ---");
const paragraphs = new Map();
let duplicateParagraphsCount = 0;

for (const r of appRoutes) {
  const html = getHtml(r);
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  const mainHtml = mainMatch ? mainMatch[0] : html;
  const pMatches = mainHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];
  for (const p of pMatches) {
    const text = p.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    // Only inspect substantial editorial paragraphs (> 100 chars), ignoring global boilerplate/CTAs
    if (
      text.length > 100 &&
      !text.includes("All rights reserved") &&
      !text.includes("Teleview provides ultra-fast streaming servers") &&
      !text.includes("Our support team is available")
    ) {
      if (paragraphs.has(text) && paragraphs.get(text) !== r) {
        duplicateParagraphsCount++;
        console.warn(`Duplicate paragraph found between ${r} and ${paragraphs.get(text)}:\n  "${text.slice(0, 80)}..."`);
      } else {
        paragraphs.set(text, r);
      }
    }
  }
}
check("Zero duplicated editorial paragraphs across child app pages", duplicateParagraphsCount === 0, `${duplicateParagraphsCount} duplicates found`);

// FINAL SUMMARY & EXIT
console.log("\n==================================================");
console.log(`TOTAL CHECKS EVALUATED: ${totalChecks}`);
console.log(`PASSED: ${passedChecks}`);
console.log(`FAILED: ${failedChecks}`);
console.log("==================================================");

if (failedChecks === 0) {
  console.log("\n==================================================");
  console.log("✅ BEST IPTV SEO QUALITY GATE: PASS");
  console.log("==================================================");
  process.exit(0);
} else {
  console.error("\n==================================================");
  console.error("❌ BEST IPTV SEO QUALITY GATE: FAIL");
  console.error("==================================================");
  for (const f of failures) {
    console.error(` - ${f.name}: ${f.details}`);
  }
  process.exit(1);
}
