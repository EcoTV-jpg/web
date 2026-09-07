import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

console.log("==================================================");
console.log("     TELEVIEW SEMANTIC SEO ARCHITECTURE AUDIT     ");
console.log("==================================================\n");

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];

function check(category, testName, condition, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`[PASS] [${category}] ${testName} ${details ? `(${details})` : ""}`);
  } else {
    failedTests++;
    errors.push({ category, testName, details });
    console.error(`[FAIL] [${category}] ${testName} ${details ? `(${details})` : ""}`);
  }
}

async function runSemanticAudit() {
  const { routes, sitemapRoutes } = await import("../src/routes.ts");
  const { siteConfig, getCanonicalUrl } = await import("../src/config/site.ts");

  console.log(`Auditing ${sitemapRoutes.length} approved canonical sitemap routes...\n`);
  check("ROUTING", "Expected 42 canonical sitemap routes", sitemapRoutes.length === 42, `Found ${sitemapRoutes.length}`);

  const titlesMap = new Map();
  const descriptionsMap = new Map();
  const h1sMap = new Map();
  const keywordsMap = new Map();

  for (const route of sitemapRoutes) {
    const canonicalUrl = getCanonicalUrl(route.path);
    const relPath = route.path === "/" ? "index.html" : path.join(route.path.replace(/^\//, ""), "index.html");
    const filePath = path.resolve(distDir, relPath);

    check("FILE_EXISTENCE", `HTML file exists for ${route.path}`, fs.existsSync(filePath), filePath);
    if (!fs.existsSync(filePath)) continue;

    const html = fs.readFileSync(filePath, "utf-8");

    // 1. Title uniqueness & structure
    const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : "";
    check("TITLE", `Single title tag in ${route.path}`, (html.match(/<title>/gi) || []).length === 1);
    check("TITLE", `Title is non-empty in ${route.path}`, title.length > 10, title);
    if (titlesMap.has(title)) {
      check("TITLE_UNIQUENESS", `Unique title for ${route.path}`, false, `Duplicate with ${titlesMap.get(title)}: "${title}"`);
    } else {
      titlesMap.set(title, route.path);
      check("TITLE_UNIQUENESS", `Unique title for ${route.path}`, true);
    }

    // 2. Meta description uniqueness & structure
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content="([^"]+)"/i) || html.match(/<meta[^>]*name=["']description["'][^>]*content='([^']+)'/i);
    const desc = descMatch ? descMatch[1].trim() : "";
    check("DESCRIPTION", `Single meta description in ${route.path}`, (html.match(/<meta[^>]*name=["']description["']/gi) || []).length === 1);
    check("DESCRIPTION", `Description has good length in ${route.path}`, desc.length >= 50 && desc.length <= 250, `${desc.length} chars`);
    if (descriptionsMap.has(desc)) {
      check("DESC_UNIQUENESS", `Unique description for ${route.path}`, false, `Duplicate with ${descriptionsMap.get(desc)}`);
    } else {
      descriptionsMap.set(desc, route.path);
      check("DESC_UNIQUENESS", `Unique description for ${route.path}`, true);
    }

    // 3. Canonical tag self-referencing check
    const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    const canonicalHref = canonicalMatch ? canonicalMatch[1].trim() : "";
    check("CANONICAL", `Self-referencing canonical in ${route.path}`, canonicalHref === canonicalUrl, `Found ${canonicalHref}`);

    // 4. Single H1 per page and distinct heading
    const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
    check("H1_COUNT", `Exactly one H1 in ${route.path}`, h1Matches.length === 1, `${h1Matches.length} found`);
    const h1Text = h1Matches.length > 0 ? h1Matches[0].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : "";
    check("H1_CONTENT", `H1 is descriptive in ${route.path}`, h1Text.length >= 5, h1Text);
    if (h1sMap.has(h1Text)) {
      check("H1_UNIQUENESS", `Unique H1 for ${route.path}`, false, `Duplicate with ${h1sMap.get(h1Text)}: "${h1Text}"`);
    } else {
      h1sMap.set(h1Text, route.path);
      check("H1_UNIQUENESS", `Unique H1 for ${route.path}`, true);
    }

    // 5. Keyword cannibalization check
    const primaryKw = (route.primaryKeyword || "").toLowerCase().trim();
    if (primaryKw) {
      if (keywordsMap.has(primaryKw)) {
        check("KEYWORD_CANNIBALIZATION", `Unique primary keyword for ${route.path}`, false, `Collides with ${keywordsMap.get(primaryKw)}: "${primaryKw}"`);
      } else {
        keywordsMap.set(primaryKw, route.path);
        check("KEYWORD_CANNIBALIZATION", `Unique primary keyword for ${route.path}`, true);
      }
    }

    // 6. JSON-LD Graph verification
    const jsonLdMatch = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    check("JSON_LD", `JSON-LD block present in ${route.path}`, Boolean(jsonLdMatch));
    if (jsonLdMatch) {
      try {
        const parsed = JSON.parse(jsonLdMatch[1]);
        const graph = parsed["@graph"] || [];
        const types = graph.map((item) => item["@type"]);

        // Stable entity IDs
        const org = graph.find((item) => item["@type"] === "Organization");
        check("ENTITY_GRAPH", `Organization entity present in ${route.path}`, Boolean(org));
        if (org) {
          check("ENTITY_GRAPH", `Organization @id is stable in ${route.path}`, org["@id"] === "https://www.teleview.me/#organization");
        }

        const site = graph.find((item) => item["@type"] === "WebSite");
        check("ENTITY_GRAPH", `WebSite entity present in ${route.path}`, Boolean(site));
        if (site) {
          check("ENTITY_GRAPH", `WebSite @id is stable in ${route.path}`, site["@id"] === "https://www.teleview.me/#website");
        }

        // Anti-spam checks: NO fake ratings
        const rawJsonStr = JSON.stringify(parsed).toLowerCase();
        check("ANTI_SPAM", `Zero synthetic aggregateRating in ${route.path}`, !rawJsonStr.includes("aggregaterating"));
        check("ANTI_SPAM", `Zero synthetic review in ${route.path}`, !rawJsonStr.includes('"review"'));

        // Breadcrumb presence on non-homepage
        if (route.path !== "/") {
          const breadcrumb = graph.find((item) => item["@type"] === "BreadcrumbList");
          check("BREADCRUMB_SCHEMA", `BreadcrumbList in ${route.path}`, Boolean(breadcrumb));
          if (breadcrumb && breadcrumb.itemListElement) {
            check("BREADCRUMB_SCHEMA", `Breadcrumb @id matches in ${route.path}`, breadcrumb["@id"] === `${canonicalUrl}#breadcrumb`);
            for (const bItem of breadcrumb.itemListElement) {
              check("BREADCRUMB_DOM_PARITY", `Breadcrumb item "${bItem.name}" in DOM of ${route.path}`, html.includes(bItem.name));
            }
          }
        }
      } catch (err) {
        check("JSON_LD", `Valid JSON-LD syntax in ${route.path}`, false, err.message);
      }
    }

    // 7. Contextual internal links to transactional / commercial funnels
    if (route.path !== "/iptv-subscription" && route.path !== "/iptv-free-trial") {
      const hasCommercialLink = html.includes('href="/iptv-subscription"') || html.includes('href="/iptv-free-trial"');
      check("CONVERSION_FUNNEL", `Page has link to subscription or free trial in ${route.path}`, hasCommercialLink);
    }
  }

  console.log("\n==================================================");
  console.log(`TOTAL CHECKS: ${totalTests}`);
  console.log(`PASSED: ${passedTests}`);
  console.log(`FAILED: ${failedTests}`);
  console.log("==================================================");

  if (failedTests > 0) {
    console.error("\nDetailed Failure Report:");
    errors.forEach((err, idx) => {
      console.error(`${idx + 1}. [${err.category}] ${err.testName}: ${err.details}`);
    });
    process.exit(1);
  } else {
    console.log("\n✅ ALL SEMANTIC SEO AUDIT CHECKS PASSED PERFECTLY!");
    process.exit(0);
  }
}

runSemanticAudit().catch((err) => {
  console.error("Audit error:", err);
  process.exit(1);
});
