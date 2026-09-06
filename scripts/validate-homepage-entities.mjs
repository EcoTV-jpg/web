import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distHtmlPath = path.resolve(rootDir, "dist", "index.html");

console.log("==================================================");
console.log("   TELEVIEW HOMEPAGE ENTITY & SEO AUDIT          ");
console.log("==================================================\n");

if (!fs.existsSync(distHtmlPath)) {
  console.error(`❌ Pre-rendered dist/index.html does not exist at ${distHtmlPath}. Please run npm run build first.`);
  process.exit(1);
}

const html = fs.readFileSync(distHtmlPath, "utf-8");

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(category, testName, condition, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`✅ [${category}] ${testName}`);
  } else {
    failedTests++;
    failures.push({ category, testName, details });
    console.error(`❌ [${category}] FAIL: ${testName} ${details ? `(${details})` : ""}`);
  }
}

// 1. Title & Meta Tags
console.log("\n--- 1. METADATA & CANONICAL AUDIT ---");
const expectedTitle = "Teleview IPTV Subscription | Live TV, Sports & 24h Free Trial";
const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
const actualTitle = titleMatch ? titleMatch[1].trim() : "";
assert("METADATA", "Title tag matches approved copy exactly", actualTitle === expectedTitle, `Got: "${actualTitle}"`);

const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
const canonicalUrl = canonicalMatch ? canonicalMatch[1] : "";
assert("METADATA", "Canonical URL is https://www.teleview.me/", canonicalUrl === "https://www.teleview.me/", `Got: "${canonicalUrl}"`);

const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
const metaDesc = metaDescMatch ? metaDescMatch[1] : "";
assert("METADATA", "Meta description is present and descriptive", metaDesc.length > 50 && metaDesc.includes("Teleview IPTV subscription"), `Got: "${metaDesc}"`);

// 2. Single H1 & Hero Copy
console.log("\n--- 2. H1 & HERO SECTION AUDIT ---");
const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
assert("HEADING", "Exactly 1 H1 element on homepage", h1Matches.length === 1, `Found: ${h1Matches.length}`);
if (h1Matches.length > 0) {
  const h1Text = h1Matches[0].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
  const expectedH1 = "IPTV Subscription for Live TV & On-Demand Streaming";
  assert("HEADING", `H1 is "${expectedH1}"`, h1Text === expectedH1, `Got: "${h1Text}"`);
}

// 3. Answer-First Direct Q&A Module
console.log("\n--- 3. ANSWER-FIRST DIRECT Q&A AUDIT ---");
assert("ANSWER_FIRST", 'AnswerFirstBlocks section present with id="quick-answers"', html.includes('id="quick-answers"'));
assert("ANSWER_FIRST", "Contains question: What is Teleview?", html.includes("What is Teleview?"));
assert("ANSWER_FIRST", "Contains question: What is IPTV?", html.includes("What is IPTV?"));
assert("ANSWER_FIRST", "Contains question: How does Teleview IPTV work?", html.includes("How does Teleview IPTV work?"));
assert("ANSWER_FIRST", "Contains question: How much does Teleview IPTV cost?", html.includes("How much does Teleview IPTV cost?"));
assert("ANSWER_FIRST", "Contains question: What devices does Teleview support?", html.includes("What devices does Teleview support?"));
assert("ANSWER_FIRST", "Contains question: Does Teleview offer a free trial?", html.includes("Does Teleview offer a free trial?"));
assert("ANSWER_FIRST", "Contains question: What refund policy does Teleview offer?", html.includes("What refund policy does Teleview offer?"));

// 4. Section Duplication Audit
console.log("\n--- 4. SECTION DEDUPLICATION AUDIT ---");
const whyChooseMatches = html.match(/Why Choose <span[^>]*>Teleview<\/span>\?/gi) || html.match(/Why Choose Teleview\?/gi) || [];
assert("DEDUPLICATION", 'Single "Why Choose Teleview?" section (no duplicate Coverage block)', whyChooseMatches.length === 1, `Found ${whyChooseMatches.length} occurrences`);

// 5. Schema.org @graph Validation
console.log("\n--- 5. SCHEMA.ORG JSON-LD @GRAPH ENTITY AUDIT ---");
const scriptMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
assert("SCHEMA", "Exactly 1 JSON-LD script tag on homepage", scriptMatches.length === 1, `Found ${scriptMatches.length}`);

if (scriptMatches.length > 0) {
  const jsonLdContent = scriptMatches[0].replace(/<script[^>]*type=["']application\/ld\+json["'][^>]*>|<\/script>/gi, "").trim();
  let schemaData;
  try {
    schemaData = JSON.parse(jsonLdContent);
    assert("SCHEMA", "JSON-LD parses without error", true);
  } catch (err) {
    assert("SCHEMA", "JSON-LD parses without error", false, err.message);
  }

  if (schemaData) {
    assert("SCHEMA", "@context is https://schema.org", schemaData["@context"] === "https://schema.org");
    assert("SCHEMA", "@graph is an array", Array.isArray(schemaData["@graph"]) && schemaData["@graph"].length > 0);

    const graph = schemaData["@graph"] || [];
    const types = graph.flatMap(e => Array.isArray(e["@type"]) ? e["@type"] : [e["@type"]]);

    // Check entity types
    assert("SCHEMA", "Organization present in @graph", types.includes("Organization"));
    assert("SCHEMA", "Brand present in @graph", types.includes("Brand"));
    assert("SCHEMA", "WebSite present in @graph", types.includes("WebSite"));
    assert("SCHEMA", "WebPage present in @graph", types.includes("WebPage"));
    assert("SCHEMA", "Service present in @graph", types.includes("Service"));
    assert("SCHEMA", "No inappropriate standalone Product on homepage", !types.includes("Product"));
    assert("SCHEMA", "No synthetic AggregateRating or Review in schema", !jsonLdContent.toLowerCase().includes("aggregaterating") && !jsonLdContent.toLowerCase().includes("review"));

    // Check stable IDs
    const org = graph.find(e => e["@type"] === "Organization");
    assert("SCHEMA", "Organization @id is https://www.teleview.me/#organization", org?.["@id"] === "https://www.teleview.me/#organization");

    const brand = graph.find(e => e["@type"] === "Brand");
    assert("SCHEMA", "Brand @id is https://www.teleview.me/#brand", brand?.["@id"] === "https://www.teleview.me/#brand");

    const website = graph.find(e => e["@type"] === "WebSite");
    assert("SCHEMA", "WebSite @id is https://www.teleview.me/#website", website?.["@id"] === "https://www.teleview.me/#website");

    const webpage = graph.find(e => e["@type"] === "WebPage");
    assert("SCHEMA", "WebPage @id is https://www.teleview.me/#webpage", webpage?.["@id"] === "https://www.teleview.me/#webpage");

    const service = graph.find(e => e["@type"] === "Service");
    assert("SCHEMA", "Service @id is https://www.teleview.me/#service", service?.["@id"] === "https://www.teleview.me/#service");
    assert("SCHEMA", "Service provider links to #organization", service?.provider?.["@id"] === "https://www.teleview.me/#organization");
    assert("SCHEMA", "Service brand links to #brand", service?.brand?.["@id"] === "https://www.teleview.me/#brand");
    assert("SCHEMA", "Service hasOfferCatalog @id is https://www.teleview.me/#plans", service?.hasOfferCatalog?.["@id"] === "https://www.teleview.me/#plans");

    // Check pricing parity in OfferCatalog
    const offers = service?.hasOfferCatalog?.itemListElement || [];
    assert("SCHEMA", "OfferCatalog contains exactly 4 offers", offers.length === 4, `Found: ${offers.length}`);
    const expectedPrices = ["16.00", "39.00", "60.00", "90.00"];
    const actualPrices = offers.map(o => o.price);
    assert("SCHEMA", "Offer prices match canonical subscription plans ($16, $39, $60, $90)", 
      JSON.stringify(actualPrices) === JSON.stringify(expectedPrices), 
      `Got: ${JSON.stringify(actualPrices)}`);
  }
}

// 6. Zero Forbidden / Contradictory Claims
console.log("\n--- 6. CONTRADICTION & UNVERIFIED CLAIMS AUDIT ---");
const forbiddenPhrases = [
  { phrase: "save $20", label: 'Obsolete "save $20" claim' },
  { phrase: "Crystal clear 4K quality for every game", label: 'Unqualified "4K quality for every game" claim' },
  { phrase: "works seamlessly on all smart devices", label: 'Absolute "all smart devices" claim' },
  { phrase: "takes less than 2 minutes", label: 'Unverified "takes less than 2 minutes" claim' },
  { phrase: "completely legitimate and secure", label: 'Unqualified legal claim "completely legitimate and secure"' },
  { phrase: "5,000+ Active Users", label: 'Unverified "5,000+ Active Users" stat' },
  { phrase: "1,000+ Subscribers", label: 'Unverified "1,000+ Subscribers" stat' },
  { phrase: "50+ Worldwide CDN Edge Server Hubs", label: 'Fabricated "50+ Worldwide CDN Edge Server Hubs" claim' },
  { phrase: "Ghosted after taking payment", label: 'Emotive phrasing "Ghosted after taking payment"' },
  { phrase: "Subscribers save over $1,000 annually", label: 'Unverified "$1,000 annually" cable savings claim' },
];

for (const { phrase, label } of forbiddenPhrases) {
  const found = html.includes(phrase);
  assert("FACT_CHECK", `Zero instances of: ${label}`, !found, `Found forbidden text: "${phrase}"`);
}

// 7. Verified Factual Claims Audit
console.log("\n--- 7. VERIFIED FACTUAL CLAIMS AUDIT ---");
const expectedFactualPhrases = [
  "25,000+ Live Channels",
  "120,000+ Movies & Series",
  "HD & 4K Streams Where Available",
  "14-Day Money-Back Guarantee",
  "IPTV Subscription for Live TV & On-Demand Streaming",
  "Save $102",
];

for (const phrase of expectedFactualPhrases) {
  const found = html.includes(phrase);
  assert("FACT_VERIFY", `Pre-rendered HTML contains verified phrase: "${phrase}"`, found);
}

// Final Summary
console.log("\n==================================================");
console.log(`TOTAL AUDIT CHECKS : ${totalTests}`);
console.log(`PASSED             : ${passedTests}`);
console.log(`FAILED             : ${failedTests}`);
console.log("==================================================");

if (failedTests > 0) {
  console.error(`\n❌ HOMEPAGE ENTITY AUDIT FAILED with ${failedTests} issue(s).`);
  process.exit(1);
} else {
  console.log("\n🎉 ALL HOMEPAGE ENTITY & SEO AUDIT CHECKS PASSED!");
  process.exit(0);
}
