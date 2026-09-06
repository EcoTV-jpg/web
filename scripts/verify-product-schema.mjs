import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

console.log("==================================================================");
console.log("TELEVIEW — DEDICATED PRODUCT SCHEMA QA VERIFICATION");
console.log("==================================================================");

if (!fs.existsSync(distDir)) {
  console.error("❌ dist directory not found. Please run 'npm run build' first.");
  process.exit(1);
}

// Find all HTML files
function getHtmlFiles(dir, baseDir = dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath, baseDir));
    } else if (file === "index.html" || file === "404.html") {
      results.push(filePath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(distDir);
console.log(`Found ${htmlFiles.length} HTML files to inspect in dist/.\n`);

const EXPECTED_PRODUCT_ROUTES = new Set([
  "/iptv-subscription/1-month",
  "/iptv-subscription/3-months",
  "/iptv-subscription/6-months",
  "/iptv-subscription/12-months",
]);

const FORBIDDEN_PRODUCT_ROUTES = new Set([
  "/",
  "/iptv-subscription",
]);

let totalErrors = 0;
let totalWarnings = 0;
const summaryRows = [];

for (const filePath of htmlFiles) {
  const relativePath = path.relative(distDir, filePath);
  let route = "/" + relativePath.replace(/\/index\.html$/, "").replace(/^index\.html$/, "");
  if (route === "/404.html") route = "/404";
  if (route === "") route = "/";

  const content = fs.readFileSync(filePath, "utf-8");
  const jsonLdMatches = content.match(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || [];

  const entities = [];
  for (const match of jsonLdMatches) {
    const jsonText = match.replace(/<script\s+type="application\/ld\+json"[^>]*>/i, "").replace(/<\/script>/i, "");
    try {
      const parsed = JSON.parse(jsonText);
      if (parsed["@graph"] && Array.isArray(parsed["@graph"])) {
        entities.push(...parsed["@graph"]);
      } else {
        entities.push(parsed);
      }
    } catch (e) {
      console.error(`❌ JSON-LD parse error on ${route}:`, e.message);
      totalErrors++;
    }
  }

  const products = entities.filter((e) => e["@type"] === "Product");
  const services = entities.filter((e) => e["@type"] === "Service");
  const hasProduct = products.length > 0;
  const hasService = services.length > 0;

  let rowStatus = "PASS";
  const notes = [];

  // Check 1: Route expectation
  if (EXPECTED_PRODUCT_ROUTES.has(route)) {
    if (!hasProduct) {
      rowStatus = "FAIL";
      notes.push("Missing expected Product schema");
      totalErrors++;
    } else if (products.length > 1) {
      rowStatus = "FAIL";
      notes.push(`Multiple (${products.length}) Product schemas found`);
      totalErrors++;
    }
  } else if (FORBIDDEN_PRODUCT_ROUTES.has(route)) {
    if (hasProduct) {
      rowStatus = "FAIL";
      notes.push("Product schema strictly forbidden on Homepage & Hub");
      totalErrors++;
    }
  } else {
    // Other routes should not emit Product schema
    if (hasProduct) {
      rowStatus = "FAIL";
      notes.push("Unexpected Product schema on informational/guide page");
      totalErrors++;
    }
  }

  // Check 2: Service schema on Homepage and Hub
  if (route === "/" || route === "/iptv-subscription") {
    if (!hasService) {
      rowStatus = "FAIL";
      notes.push("Missing Service schema on Homepage/Hub");
      totalErrors++;
    } else {
      const service = services[0];
      if (!service.hasOfferCatalog || service.hasOfferCatalog["@type"] !== "OfferCatalog") {
        rowStatus = "FAIL";
        notes.push("Service missing valid hasOfferCatalog");
        totalErrors++;
      } else {
        notes.push("Service with OfferCatalog present");
      }
    }
  }

  // Check 3: Product schema validation (if present)
  for (const product of products) {
    // Check required truthful fields
    if (!product.name) {
      rowStatus = "FAIL";
      notes.push("Product missing name");
      totalErrors++;
    }
    if (!product.description) {
      rowStatus = "FAIL";
      notes.push("Product missing description");
      totalErrors++;
    }
    if (!product.brand || product.brand.name !== "Teleview") {
      rowStatus = "FAIL";
      notes.push("Product missing valid Teleview brand");
      totalErrors++;
    }
    if (!product.manufacturer || product.manufacturer["@id"] !== "https://www.teleview.me/#organization") {
      rowStatus = "FAIL";
      notes.push("Product missing valid manufacturer reference");
      totalErrors++;
    }
    if (!product.image) {
      rowStatus = "FAIL";
      notes.push("Product missing image");
      totalErrors++;
    }
    if (!product.offers || product.offers["@type"] !== "Offer") {
      rowStatus = "FAIL";
      notes.push("Product missing valid Offer");
      totalErrors++;
    } else {
      const offer = product.offers;
      if (!offer.price || isNaN(parseFloat(offer.price))) {
        rowStatus = "FAIL";
        notes.push("Offer missing valid price");
        totalErrors++;
      }
      if (offer.priceCurrency !== "USD") {
        rowStatus = "FAIL";
        notes.push("Offer missing USD priceCurrency");
        totalErrors++;
      }
      if (offer.availability !== "https://schema.org/InStock") {
        rowStatus = "FAIL";
        notes.push("Offer missing InStock availability");
        totalErrors++;
      }
      if (!offer.seller || offer.seller["@id"] !== "https://www.teleview.me/#organization") {
        rowStatus = "FAIL";
        notes.push("Offer missing valid seller reference");
        totalErrors++;
      }
    }

    // Check 4: Zero fabricated reviews or aggregateRating
    if (product.review || product.reviews) {
      rowStatus = "FAIL";
      notes.push("CRITICAL: Fabricated review field detected!");
      totalErrors++;
    }
    if (product.aggregateRating) {
      rowStatus = "FAIL";
      notes.push("CRITICAL: Fabricated aggregateRating field detected!");
      totalErrors++;
    }
  }

  if (notes.length === 0) {
    if (hasProduct) notes.push("Valid standalone Product schema");
    else notes.push("Standard non-product page");
  }

  summaryRows.push({
    route,
    hasProduct: hasProduct ? "YES" : "NO",
    hasService: hasService ? "YES" : "NO",
    status: rowStatus,
    notes: notes.join("; "),
  });
}

// Print Summary Table
console.log("-------------------------------------------------------------------------------------------------------------");
console.log(
  `| ${"Route".padEnd(35)} | ${"Product".padEnd(8)} | ${"Service".padEnd(8)} | ${"Status".padEnd(6)} | ${"Notes".padEnd(38)} |`
);
console.log("-------------------------------------------------------------------------------------------------------------");

for (const row of summaryRows) {
  // Only display routes of special interest or failures to keep table focused
  if (
    EXPECTED_PRODUCT_ROUTES.has(row.route) ||
    FORBIDDEN_PRODUCT_ROUTES.has(row.route) ||
    row.route === "/iptv-free-trial" ||
    row.status === "FAIL"
  ) {
    console.log(
      `| ${row.route.padEnd(35)} | ${row.hasProduct.padEnd(8)} | ${row.hasService.padEnd(8)} | ${row.status.padEnd(6)} | ${row.notes.padEnd(38)} |`
    );
  }
}
console.log("-------------------------------------------------------------------------------------------------------------\n");

console.log(`Inspected all ${summaryRows.length} routes.`);
console.log(`Total Errors: ${totalErrors}`);
console.log(`Total Warnings: ${totalWarnings}`);

if (totalErrors > 0) {
  console.log("\n❌ VERIFICATION RESULT: FAIL");
  process.exit(1);
} else {
  console.log("\n✅ VERIFICATION RESULT: PASS — All Product and Service schema rules strictly satisfied with 0 fabricated reviews/ratings.");
  process.exit(0);
}
