// Content Freshness & Decay Prevention Audit Script
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

console.log("==================================================");
console.log("    TELEVIEW CONTENT FRESHNESS & DECAY AUDIT      ");
console.log("==================================================\n");

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

function check(name, condition, details = "") {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log("[PASS] " + name + (details ? " (" + details + ")" : ""));
  } else {
    failedChecks++;
    failures.push({ name, details });
    console.error("[FAIL] " + name + " -> " + details);
  }
}

// 1. Scan Dist Files
const htmlFiles = [];
function scanHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      scanHtml(full);
    } else if (e.name === "index.html") {
      htmlFiles.push(full);
    }
  }
}
scanHtml(distDir);
check("Pre-rendered routes discovered in dist", htmlFiles.length >= 40, htmlFiles.length + " routes found");

// 2. Outdated year references (< 2026) in Page Titles and H1 tags
console.log("\n--- 1. TEMPORAL FRESHNESS & YEAR AUDIT ---");
const staleYearsRegex = /\b(202[0-4])\b/g;
let staleYearCount = 0;
for (const file of htmlFiles) {
  const rel = path.relative(distDir, file);
  const route = "/" + rel.replace(/\/index\.html$/, "").replace(/^index\.html$/, "");
  const html = fs.readFileSync(file, "utf-8");
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : "";
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1] : "";
  const titleStale = title.match(staleYearsRegex);
  const h1Stale = h1.match(staleYearsRegex);
  if (titleStale) {
    staleYearCount++;
    console.error("Outdated year in title on " + route + ": " + titleStale.join(", "));
  }
  if (h1Stale) {
    staleYearCount++;
    console.error("Outdated year in H1 on " + route + ": " + h1Stale.join(", "));
  }
}
check("Zero outdated years (2020-2024) in Page Titles and H1 tags", staleYearCount === 0, staleYearCount + " stale years found");

// 3. Current year (2026) presence on key pillar pages
console.log("\n--- 2. 2026 PILLAR FRESHNESS SIGNALS ---");
const pillarRoutes = ["/", "/best-iptv", "/what-is-iptv", "/iptv-players", "/iptv-subscription", "/devices", "/setup"];
for (const p of pillarRoutes) {
  const filePath = p === "/" ? path.join(distDir, "index.html") : path.join(distDir, p.replace(/^\//, ""), "index.html");
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, "utf-8");
    check("Pillar route " + p + " explicitly includes 2026 freshness marker", html.includes("2026"));
  }
}

// 4. Pricing consistency audit
console.log("\n--- 3. PRICING & BENEFIT CONSISTENCY AUDIT ---");
const subHubHtml = fs.readFileSync(path.join(distDir, "iptv-subscription", "index.html"), "utf-8");
check("Subscription hub includes exact verified pricing for 1 Month ($16.00)", subHubHtml.includes("$16.00"));
check("Subscription hub includes exact verified pricing for 3 Months ($39.00)", subHubHtml.includes("$39.00"));
check("Subscription hub includes exact verified pricing for 6 Months ($60.00)", subHubHtml.includes("$60.00"));
check("Subscription hub includes exact verified pricing for 12 Months ($90.00)", subHubHtml.includes("$90.00"));
check("Subscription hub includes 14-day refund guarantee signal", subHubHtml.includes("14-day") || subHubHtml.includes("14-Day"));
check("Subscription hub includes 24-hour free trial signal", subHubHtml.includes("free trial") || subHubHtml.includes("Free Trial"));

// 5. Structured Data Date Freshness
console.log("\n--- 4. STRUCTURED DATA MODIFICATION SIGNALS ---");
let routesWithDates = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf-8");
  if (html.includes("dateModified") || html.includes("datePublished")) {
    routesWithDates++;
  }
}
check("Structured data date freshness stamps present on editorial routes", routesWithDates >= 10, routesWithDates + " routes with date stamps");

// 6. Internal Link Health Across All Pages
console.log("\n--- 5. INTERNAL LINK HEALTH & INTEGRITY ---");
const distRoutes = new Set();
for (const file of htmlFiles) {
  const rel = path.relative(distDir, file);
  const r = "/" + rel.replace(/\/index\.html$/, "").replace(/^index\.html$/, "");
  distRoutes.add(r === "" ? "/" : r);
}
const linkRegex = /<a[^>]*href=["']([^"'#?]+)["'][^>]*>/gi;
let totalLinksScanned = 0;
let brokenLinksFound = 0;
for (const file of htmlFiles) {
  const rel = path.relative(distDir, file);
  const currentRoute = "/" + rel.replace(/\/index\.html$/, "").replace(/^index\.html$/, "");
  const html = fs.readFileSync(file, "utf-8");
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const target = match[1];
    if (target.startsWith("/") && !target.startsWith("//") && !target.startsWith("/images") && !target.startsWith("/favicon") && !target.startsWith("/google")) {
      totalLinksScanned++;
      const cleanTarget = target.replace(/\/$/, "") || "/";
      if (!distRoutes.has(cleanTarget)) {
        brokenLinksFound++;
        console.error("Dead link on " + currentRoute + ": " + target);
      }
    }
  }
}
check("Zero broken internal links across all pre-rendered HTML routes", brokenLinksFound === 0, totalLinksScanned + " links checked, " + brokenLinksFound + " broken");

// Summary
console.log("\n==================================================");
console.log("TOTAL CHECKS: " + totalChecks);
console.log("PASSED: " + passedChecks);
console.log("FAILED: " + failedChecks);
console.log("==================================================");

if (failedChecks === 0) {
  console.log("\n✅ CONTENT FRESHNESS & DECAY AUDIT: 100% PASS");
  process.exit(0);
} else {
  console.error("\n❌ CONTENT FRESHNESS & DECAY AUDIT: FAILED");
  process.exit(1);
}