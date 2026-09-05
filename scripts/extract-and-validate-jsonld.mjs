import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

const siteConfig = {
  url: "https://www.teleview.me",
  name: "Teleview",
  contact: {
    email: "Help@Teleview.me",
    whatsapp: "+447848197761",
  },
  entityIds: {
    organization: "https://www.teleview.me/#organization",
    website: "https://www.teleview.me/#website",
    product: "https://www.teleview.me/#product",
    brand: "https://www.teleview.me/#brand",
  },
};

const indexableRoutes = [
  { path: "/", breadcrumbName: "Home" },
  { path: "/setup", breadcrumbName: "Setup & Installation" },
  { path: "/what-is-iptv", breadcrumbName: "What Is IPTV?" },
  { path: "/devices", breadcrumbName: "Supported Devices" },
  { path: "/devices/firestick", breadcrumbName: "Amazon Fire TV Stick" },
  { path: "/devices/samsung-smart-tv", breadcrumbName: "Samsung Smart TV" },
  { path: "/devices/lg-smart-tv", breadcrumbName: "LG Smart TV" },
  { path: "/devices/android-tv", breadcrumbName: "Android TV Box" },
  { path: "/devices/apple-tv", breadcrumbName: "Apple TV 4K" },
  { path: "/devices/roku", breadcrumbName: "Roku Streaming Stick & TV" },
  { path: "/devices/google-tv", breadcrumbName: "Google TV & Chromecast" },
  { path: "/devices/formuler", breadcrumbName: "Formuler Z-Series" },
  { path: "/faq", breadcrumbName: "FAQ & Support" },
  { path: "/iptv-subscription", breadcrumbName: "IPTV Subscription" },
  { path: "/iptv-free-trial", breadcrumbName: "IPTV Free Trial" },
  { path: "/iptv-subscription/1-month", breadcrumbName: "1 Month", price: "16.00", duration: "1 Month" },
  { path: "/iptv-subscription/3-months", breadcrumbName: "3 Months", price: "39.00", duration: "3 Months" },
  { path: "/iptv-subscription/6-months", breadcrumbName: "6 Months", price: "60.00", duration: "6 Months" },
  { path: "/iptv-subscription/12-months", breadcrumbName: "12 Months", price: "90.00", duration: "12 Months" },
  { path: "/contact", breadcrumbName: "Contact Us" },
  { path: "/terms-conditions", breadcrumbName: "Terms & Conditions" },
  { path: "/privacy-policy", breadcrumbName: "Privacy Policy" },
  { path: "/refund-policy", breadcrumbName: "Refund Policy" },
  { path: "/disclaimer", breadcrumbName: "Legal Disclaimer" },
  { path: "/help-center", breadcrumbName: "Help Center" },
  { path: "/help-center/buffering", breadcrumbName: "How to Stop IPTV Buffering & Freezing" },
  { path: "/help-center/not-working", breadcrumbName: "IPTV Not Working? Master Diagnostic Checklist" },
  { path: "/help-center/epg-not-working", breadcrumbName: "How to Fix IPTV EPG (Electronic Program Guide) Not Loading" },
  { path: "/help-center/channels-not-loading", breadcrumbName: "How to Fix IPTV Channels & Playlists Not Loading" },
  { path: "/help-center/connection-problems", breadcrumbName: "How to Fix IPTV Connection Errors & Server Timeouts" },
  { path: "/help-center/internet-speed", breadcrumbName: "Internet Speed Requirements for 4K IPTV Streaming" },
  { path: "/dmca", breadcrumbName: "DMCA Notice" },
  { path: "/best-iptv", breadcrumbName: "Best IPTV Players" },
  { path: "/iptv-players", breadcrumbName: "IPTV Players" },
  { path: "/iptv-players/tivimate", breadcrumbName: "TiviMate" },
  { path: "/iptv-players/iptv-smarters-pro", breadcrumbName: "IPTV Smarters" },
  { path: "/iptv-players/ibo-player", breadcrumbName: "IBO Player" },
  { path: "/iptv-players/smartone", breadcrumbName: "SmartOne" },
  { path: "/iptv-players/gse-smart-iptv", breadcrumbName: "GSE Smart IPTV" },
  { path: "/iptv-players/vlc", breadcrumbName: "VLC" },
  { path: "/iptv-players/ott-navigator", breadcrumbName: "OTT Navigator" },
];

function getCanonicalUrl(routePath) {
  return routePath === "/" ? "https://www.teleview.me/" : `https://www.teleview.me${routePath}`;
}

console.log("==================================================");
console.log("   TELEVIEW JSON-LD STRUCTURED DATA AUDIT        ");
console.log("==================================================\n");

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const issues = [];

function assert(category, testName, condition, details = "") {
  totalTests++;
  if (condition) {
    passedTests++;
  } else {
    failedTests++;
    issues.push({ category, testName, details });
    console.error(`❌ [${category}] FAIL: ${testName} ${details ? `(${details})` : ""}`);
  }
}

// Recursively search for any forbidden keys like aggregateRating or review in an object
function hasForbiddenKeys(obj, forbiddenKeys) {
  if (!obj || typeof obj !== "object") return false;
  for (const key of Object.keys(obj)) {
    if (forbiddenKeys.includes(key.toLowerCase()) || forbiddenKeys.includes(obj[key]?.toString().toLowerCase())) {
      return true;
    }
    if (typeof obj[key] === "object" && hasForbiddenKeys(obj[key], forbiddenKeys)) {
      return true;
    }
  }
  return false;
}

const auditSummary = [];

for (const route of indexableRoutes) {
  const canonicalUrl = getCanonicalUrl(route.path);
  const routeRelPath = route.path === "/" ? "index.html" : path.join(route.path.replace(/^\//, ""), "index.html");
  const htmlPath = path.resolve(distDir, routeRelPath);

  assert("FILE_EXISTENCE", `Pre-rendered HTML exists for ${route.path}`, fs.existsSync(htmlPath), htmlPath);
  if (!fs.existsSync(htmlPath)) continue;

  const html = fs.readFileSync(htmlPath, "utf-8");

  // 1. Script tag presence
  const scriptMatches = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  assert("SCRIPT_TAG", `Exactly 1 JSON-LD script tag in ${route.path}`, scriptMatches.length === 1, `Found ${scriptMatches.length}`);

  if (scriptMatches.length === 0) continue;

  const rawJsonLd = scriptMatches[0].replace(/<script[^>]*type=["']application\/ld\+json["'][^>]*>|<\/script>/gi, "").trim();

  // 2. Syntax validation
  let data;
  try {
    data = JSON.parse(rawJsonLd);
    assert("SYNTAX", `JSON-LD parses without error in ${route.path}`, true);
  } catch (err) {
    assert("SYNTAX", `JSON-LD parses without error in ${route.path}`, false, err.message);
    continue;
  }

  // 3. Root @context & @graph structure
  assert("GRAPH_STRUCTURE", `@context is schema.org in ${route.path}`, data["@context"] === "https://schema.org");
  assert("GRAPH_STRUCTURE", `@graph is an array in ${route.path}`, Array.isArray(data["@graph"]) && data["@graph"].length > 0);

  const graph = data["@graph"] || [];
  const entityTypes = graph.flatMap((e) => (Array.isArray(e["@type"]) ? e["@type"] : [e["@type"]]));

  // 4. Anti-spam: Ensure no fake AggregateRating or Review anywhere in the graph
  const hasFakeRating = hasForbiddenKeys(data, ["aggregaterating"]);
  const hasFakeReview = hasForbiddenKeys(data, ["review"]);
  assert("ANTI_SPAM", `Zero synthetic AggregateRating in ${route.path}`, !hasFakeRating);
  assert("ANTI_SPAM", `Zero synthetic Review in ${route.path}`, !hasFakeReview);

  // 5. Core Entities: Organization & WebSite
  const org = graph.find((e) => e["@type"] === "Organization");
  assert("ORGANIZATION", `Organization exists in ${route.path}`, Boolean(org));
  if (org) {
    assert("ORGANIZATION", `Organization @id is stable in ${route.path}`, org["@id"] === siteConfig.entityIds.organization);
    assert("ORGANIZATION", `Organization name is Teleview in ${route.path}`, org.name === siteConfig.name);
    assert("ORGANIZATION", `Organization email matches contact in ${route.path}`, org.email === siteConfig.contact.email);
    assert("ORGANIZATION", `Organization phone matches contact in ${route.path}`, org.telephone === siteConfig.contact.whatsapp);
  }

  const website = graph.find((e) => e["@type"] === "WebSite");
  assert("WEBSITE", `WebSite exists in ${route.path}`, Boolean(website));
  if (website) {
    assert("WEBSITE", `WebSite @id is stable in ${route.path}`, website["@id"] === siteConfig.entityIds.website);
    assert("WEBSITE", `WebSite publisher links to Organization in ${route.path}`, website.publisher?.["@id"] === siteConfig.entityIds.organization);
  }

  // 6. WebPage entity
  const webpage = graph.find((e) => e["@type"] === "WebPage" || (Array.isArray(e["@type"]) && e["@type"].includes("WebPage")));
  assert("WEBPAGE", `WebPage exists in ${route.path}`, Boolean(webpage));
  if (webpage) {
    assert("WEBPAGE", `WebPage @id is ${canonicalUrl}#webpage in ${route.path}`, webpage["@id"] === `${canonicalUrl}#webpage`);
    assert("WEBPAGE", `WebPage isPartOf links to WebSite in ${route.path}`, webpage.isPartOf?.["@id"] === siteConfig.entityIds.website);
    assert("WEBPAGE", `WebPage canonical URL matches in ${route.path}`, webpage.url === canonicalUrl);
  }

  // 7. BreadcrumbList entity and DOM parity
  const breadcrumb = graph.find((e) => e["@type"] === "BreadcrumbList");
  if (route.path !== "/") {
    assert("BREADCRUMBS", `BreadcrumbList exists in ${route.path}`, Boolean(breadcrumb));
    if (breadcrumb && breadcrumb.itemListElement) {
      assert("BREADCRUMBS", `BreadcrumbList @id matches in ${route.path}`, breadcrumb["@id"] === `${canonicalUrl}#breadcrumb`);
      assert("BREADCRUMBS", `WebPage references breadcrumb in ${route.path}`, webpage?.breadcrumb?.["@id"] === `${canonicalUrl}#breadcrumb`);

      const items = breadcrumb.itemListElement;
      assert("BREADCRUMBS", `First breadcrumb item is Home in ${route.path}`, items[0]?.name === "Home" && items[0]?.item === `${siteConfig.url}/`);

      if (route.path.startsWith("/iptv-subscription/")) {
        assert("BREADCRUMBS", `3 items in product breadcrumb for ${route.path}`, items.length === 3);
        assert("BREADCRUMBS", `Second item is IPTV Subscription in ${route.path}`, items[1]?.name === "IPTV Subscription");
        assert("BREADCRUMBS", `Third item is ${route.duration} in ${route.path}`, items[2]?.name === route.duration);
      } else if (route.path.startsWith("/iptv-players/")) {
        assert("BREADCRUMBS", `3 items in iptv-players child breadcrumb for ${route.path}`, items.length === 3);
        assert("BREADCRUMBS", `Second item is IPTV Players in ${route.path}`, items[1]?.name === "IPTV Players");
        assert("BREADCRUMBS", `Third item is ${route.breadcrumbName} in ${route.path}`, items[2]?.name === route.breadcrumbName);
      } else if (route.path.startsWith("/devices/")) {
        assert("BREADCRUMBS", `3 items in devices child breadcrumb for ${route.path}`, items.length === 3);
        assert("BREADCRUMBS", `Second item is Supported Devices in ${route.path}`, items[1]?.name === "Supported Devices");
        assert("BREADCRUMBS", `Third item is ${route.breadcrumbName} in ${route.path}`, items[2]?.name === route.breadcrumbName);
      } else if (route.path.startsWith("/help-center/")) {
        assert("BREADCRUMBS", `3 items in help-center child breadcrumb for ${route.path}`, items.length === 3);
        assert("BREADCRUMBS", `Second item is Help Center in ${route.path}`, items[1]?.name === "Help Center");
        assert("BREADCRUMBS", `Third item is ${route.breadcrumbName} in ${route.path}`, items[2]?.name === route.breadcrumbName);
      } else {
        assert("BREADCRUMBS", `2 items in standard breadcrumb for ${route.path}`, items.length === 2);
        assert("BREADCRUMBS", `Second item name matches route breadcrumbName in ${route.path}`, items[1]?.name === route.breadcrumbName);
        assert("BREADCRUMBS", `Second item URL is canonical in ${route.path}`, items[1]?.item === canonicalUrl);
      }

      // Verify each breadcrumb item text appears visibly in the pre-rendered HTML
      for (const item of items) {
        assert("BREADCRUMBS_DOM", `Breadcrumb item "${item.name}" visible in DOM of ${route.path}`, html.includes(item.name));
      }
    }
  } else {
    assert("BREADCRUMBS", `No BreadcrumbList on root ${route.path}`, !breadcrumb);
  }

  // 8. Route-Specific Schemas & Deep Checks
  if (route.path === "/") {
    const product = graph.find((e) => e["@type"] === "Product");
    const service = graph.find((e) => e["@type"] === "Service");
    assert("HOMEPAGE_SCHEMA", "Product entity on /", Boolean(product));
    assert("HOMEPAGE_SCHEMA", "Service entity on /", Boolean(service));
    assert("HOMEPAGE_SCHEMA", "No FAQPage entity on /", !entityTypes.includes("FAQPage"));
    assert("HOMEPAGE_SCHEMA", "Product offers count is 4 on /", product?.offers?.offerCount === 4);
    assert("HOMEPAGE_SCHEMA", "No AggregateRating in Product on /", !product?.aggregateRating);
  } else if (route.path === "/setup") {
    const howTo = graph.find((e) => e["@type"] === "HowTo");
    assert("SETUP_SCHEMA", "HowTo entity on /setup", Boolean(howTo));
    assert("SETUP_SCHEMA", "HowTo steps count is 4", howTo?.step?.length === 4);
    if (howTo?.step) {
      for (const step of howTo.step) {
        const hash = step.url.split("#")[1];
        assert("SETUP_STEPS", `Step anchor #${hash} exists in /setup HTML`, html.includes(`id="${hash}"`));
      }
    }
  } else if (route.path === "/devices") {
    const techArticle = graph.find((e) => e["@type"] === "TechArticle");
    assert("DEVICES_SCHEMA", "TechArticle entity on /devices", Boolean(techArticle));
    assert("DEVICES_SCHEMA", "TechArticle author points to Organization", techArticle?.author?.["@id"] === siteConfig.entityIds.organization);
  } else if (route.path === "/faq") {
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("FAQ_SCHEMA", "FAQPage entity on /faq", Boolean(faqPage));
    assert("FAQ_SCHEMA", "FAQPage questions count >= 6 on /faq", faqPage?.mainEntity?.length >= 6);
    if (faqPage?.mainEntity) {
      for (const q of faqPage.mainEntity) {
        assert("FAQ_DOM", `FAQ question "${q.name.substring(0, 25)}..." visible in DOM`, html.includes(q.name));
      }
    }
  } else if (route.path === "/iptv-subscription") {
    const product = graph.find((e) => e["@type"] === "Product");
    const service = graph.find((e) => e["@type"] === "Service");
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("HUB_SCHEMA", "Product entity on /iptv-subscription", Boolean(product));
    assert("HUB_SCHEMA", "Service entity on /iptv-subscription", Boolean(service));
    assert("HUB_SCHEMA", "FAQPage entity on /iptv-subscription", Boolean(faqPage));
    assert("HUB_SCHEMA", "FAQPage questions count is 4 on /iptv-subscription", faqPage?.mainEntity?.length === 4);
    assert("HUB_SCHEMA", "No AggregateRating in Product on /iptv-subscription", !product?.aggregateRating);
  } else if (route.path === "/iptv-free-trial") {
    const service = graph.find((e) => e["@type"] === "Service");
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("TRIAL_SCHEMA", "Service entity on /iptv-free-trial", Boolean(service));
    assert("TRIAL_SCHEMA", "FAQPage entity on /iptv-free-trial", Boolean(faqPage));
    assert("TRIAL_SCHEMA", "Offer price is 0.00 on /iptv-free-trial", service?.offers?.price === "0.00");
    assert("TRIAL_SCHEMA", "Offer availability is InStock on /iptv-free-trial", service?.offers?.availability === "https://schema.org/InStock");
    assert("TRIAL_SCHEMA", "No AggregateRating on /iptv-free-trial", !entityTypes.includes("AggregateRating"));
  } else if (route.path.startsWith("/iptv-subscription/")) {
    const product = graph.find((e) => e["@type"] === "Product");
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");

    assert("PRODUCT_SCHEMA", `Product entity on ${route.path}`, Boolean(product));
    assert("PRODUCT_SCHEMA", `FAQPage entity on ${route.path}`, Boolean(faqPage));
    assert("PRODUCT_SCHEMA", `No AggregateRating on ${route.path}`, !product?.aggregateRating);
    assert("PRODUCT_SCHEMA", `Offer price is ${route.price} on ${route.path}`, product?.offers?.price === route.price);
    assert("PRODUCT_SCHEMA", `Offer currency is USD on ${route.path}`, product?.offers?.priceCurrency === "USD");
    assert("PRODUCT_SCHEMA", `Offer availability is InStock on ${route.path}`, product?.offers?.availability === "https://schema.org/InStock");
    assert("PRODUCT_SCHEMA", `FAQPage questions count is 5 on ${route.path}`, faqPage?.mainEntity?.length === 5);
  } else if (route.path === "/best-iptv") {
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("BEST_IPTV_HUB_SCHEMA", "CollectionPage entity on /best-iptv", entityTypes.includes("CollectionPage"));
    assert("BEST_IPTV_HUB_SCHEMA", "FAQPage entity on /best-iptv", Boolean(faqPage));
    assert("BEST_IPTV_HUB_SCHEMA", "No Product on /best-iptv", !entityTypes.includes("Product"));
    assert("BEST_IPTV_HUB_SCHEMA", "No AggregateRating on /best-iptv", !entityTypes.includes("AggregateRating"));
  } else if (route.path === "/iptv-players") {
    assert("IPTV_PLAYERS_HUB_SCHEMA", "CollectionPage entity on /iptv-players", entityTypes.includes("CollectionPage"));
    assert("IPTV_PLAYERS_HUB_SCHEMA", "No Product on /iptv-players", !entityTypes.includes("Product"));
  } else if (route.path === "/what-is-iptv") {
    const article = graph.find((e) => e["@type"] === "Article" || e["@type"] === "TechArticle");
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("WHAT_IS_IPTV_SCHEMA", "Article or TechArticle entity on /what-is-iptv", Boolean(article));
    assert("WHAT_IS_IPTV_SCHEMA", "FAQPage entity on /what-is-iptv", Boolean(faqPage));
    assert("WHAT_IS_IPTV_SCHEMA", "No Product on /what-is-iptv", !entityTypes.includes("Product"));
  } else if (route.path.startsWith("/iptv-players/")) {
    const techArticle = graph.find((e) => e["@type"] === "TechArticle");
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("IPTV_PLAYERS_APP_SCHEMA", `TechArticle entity on ${route.path}`, Boolean(techArticle));
    assert("IPTV_PLAYERS_APP_SCHEMA", `FAQPage entity on ${route.path}`, Boolean(faqPage));
    assert("IPTV_PLAYERS_APP_SCHEMA", `No Product on ${route.path}`, !entityTypes.includes("Product"));
    assert("IPTV_PLAYERS_APP_SCHEMA", `No AggregateRating on ${route.path}`, !entityTypes.includes("AggregateRating"));
  } else if (route.path.startsWith("/devices/")) {
    const techArticle = graph.find((e) => e["@type"] === "TechArticle");
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("DEVICE_GUIDE_SCHEMA", `TechArticle entity on ${route.path}`, Boolean(techArticle));
    assert("DEVICE_GUIDE_SCHEMA", `FAQPage entity on ${route.path}`, Boolean(faqPage));
    assert("DEVICE_GUIDE_SCHEMA", `No Product on ${route.path}`, !entityTypes.includes("Product"));
  } else if (route.path.startsWith("/help-center/")) {
    const techArticle = graph.find((e) => e["@type"] === "TechArticle");
    const faqPage = graph.find((e) => e["@type"] === "FAQPage");
    assert("TROUBLESHOOTING_SCHEMA", `TechArticle entity on ${route.path}`, Boolean(techArticle));
    assert("TROUBLESHOOTING_SCHEMA", `FAQPage entity on ${route.path}`, Boolean(faqPage));
    assert("TROUBLESHOOTING_SCHEMA", `No Product on ${route.path}`, !entityTypes.includes("Product"));
  } else {
    // Legal & Support routes: strictly core entities, no extraneous products or FAQs
    assert("LEGAL_SUPPORT", `No Product entity on ${route.path}`, !entityTypes.includes("Product"));
    assert("LEGAL_SUPPORT", `No FAQPage entity on ${route.path}`, !entityTypes.includes("FAQPage"));
    assert("LEGAL_SUPPORT", `No HowTo entity on ${route.path}`, !entityTypes.includes("HowTo"));
  }

  auditSummary.push({
    route: route.path,
    entities: entityTypes.join(", "),
    itemsInGraph: graph.length,
    status: "PASS",
  });
}

console.log("\n=== STRUCTURED DATA AUDIT SUMMARY PER ROUTE ===");
for (const item of auditSummary) {
  console.log(`${item.route.padEnd(32)} | [${item.itemsInGraph} entities] | ${item.entities}`);
}

console.log("\n==================================================");
console.log(`TOTAL CHECKS EVALUATED: ${totalTests}`);
console.log(`PASSED: ${passedTests}`);
console.log(`FAILED: ${failedTests}`);
console.log("==================================================");

if (failedTests > 0) {
  console.error("\nDetailed Failure Report:");
  issues.forEach((iss, idx) => {
    console.error(`${idx + 1}. [${iss.category}] ${iss.testName}: ${iss.details}`);
  });
  process.exit(1);
} else {
  console.log("\n✅ ALL JSON-LD STRUCTURED DATA AUDIT CHECKS PASSED PERFECTLY!");
  process.exit(0);
}
