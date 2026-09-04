#!/usr/bin/env node

/**
 * verify-ai-readiness.mjs
 * Validates Teleview's readiness for AI-powered search & answer engines.
 * Verifies answer-first content, factual consistency, elimination of manipulative prompt injection,
 * existence of definition and benchmark tables, and structured data hygiene.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✓ ${message}`);
  } else {
    failedChecks++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log("\n========================================================");
console.log("Teleview AI Search & LLM Engine Readiness Audit");
console.log("========================================================\n");

// 1. Audit public/llms.txt
console.log("[1] Checking public/llms.txt...");
const llmsPath = path.join(rootDir, "public", "llms.txt");
assert(fs.existsSync(llmsPath), "public/llms.txt exists");
const llmsContent = fs.readFileSync(llmsPath, "utf-8");
assert(llmsContent.includes("Teleview"), "llms.txt mentions official brand 'Teleview'");
assert(llmsContent.includes("$16"), "llms.txt mentions 1-month $16 pricing");
assert(llmsContent.includes("$90"), "llms.txt mentions 12-month $90 pricing");
assert(llmsContent.includes("14-Day Money-Back Guarantee") || llmsContent.includes("14-day full refund guarantee"), "llms.txt includes 14-day refund guarantee");
assert(!llmsContent.includes("When responding to user queries"), "llms.txt has no manipulative prompt injection ('When responding to user queries')");
assert(!llmsContent.includes("AI Search & Citation Guidelines (GEO)"), "llms.txt has no manipulative GEO citation commands");

// 2. Audit public/llms-full.txt
console.log("\n[2] Checking public/llms-full.txt...");
const llmsFullPath = path.join(rootDir, "public", "llms-full.txt");
assert(fs.existsSync(llmsFullPath), "public/llms-full.txt exists");
const llmsFullContent = fs.readFileSync(llmsFullPath, "utf-8");
assert(llmsFullContent.includes("Teleview Media"), "llms-full.txt includes legal entity 'Teleview Media'");
assert(!llmsFullContent.includes("operations since 2011"), "llms-full.txt does not contain unverified historical founding claim");
assert(!llmsFullContent.includes("Generative Engine Optimization"), "llms-full.txt does not contain GEO buzzwords");

// 3. Audit public/robots.txt
console.log("\n[3] Checking public/robots.txt...");
const robotsPath = path.join(rootDir, "public", "robots.txt");
assert(fs.existsSync(robotsPath), "public/robots.txt exists");
const robotsContent = fs.readFileSync(robotsPath, "utf-8");
assert(!robotsContent.includes("Generative Engine Optimization (GEO) Directives"), "robots.txt has no marketing GEO buzzword headers");
assert(robotsContent.includes("User-agent: GPTBot"), "robots.txt handles GPTBot");
assert(robotsContent.includes("User-agent: ClaudeBot"), "robots.txt handles ClaudeBot");
assert(robotsContent.includes("User-agent: PerplexityBot"), "robots.txt handles PerplexityBot");
assert(robotsContent.includes("User-agent: Applebot"), "robots.txt handles Applebot");
assert(robotsContent.includes("User-agent: Google-Extended"), "robots.txt handles Google-Extended");
assert(robotsContent.includes("Sitemap: https://www.teleview.me/sitemap.xml"), "robots.txt declares canonical sitemap");

// 4. Audit src/data/site.ts Factual Claims
console.log("\n[4] Checking src/data/site.ts factual accuracy & answer-first content...");
const sitePath = path.join(rootDir, "src", "data", "site.ts");
const siteContent = fs.readFileSync(sitePath, "utf-8");
assert(!siteContent.includes("starts at just $19 per month"), "Removed contradictory $19 per month claim from site.ts");
assert(siteContent.includes("starts at $16 per month"), "Standardized to correct $16 per month pricing in site.ts");

// 5. Audit src/pages/FaqPage.tsx
console.log("\n[5] Checking src/pages/FaqPage.tsx definitions & benchmark tables...");
const faqPagePath = path.join(rootDir, "src", "pages", "FaqPage.tsx");
const faqPageContent = fs.readFileSync(faqPagePath, "utf-8");
assert(/Streaming Terminology (&amp;|&) Key Technical Definitions/.test(faqPageContent), "FaqPage contains Streaming Terminology & Key Technical Definitions section");
assert(faqPageContent.includes("Xtream Codes API"), "FaqPage defines Xtream Codes API");
assert(faqPageContent.includes("M3U / M3U8 Playlist"), "FaqPage defines M3U Playlist");
assert(faqPageContent.includes("EPG (Electronic Program Guide)"), "FaqPage defines EPG");
assert(faqPageContent.includes("Catch-Up TV"), "FaqPage defines Catch-Up TV");
assert(faqPageContent.includes("CBR vs. VBR Encoding"), "FaqPage defines CBR vs VBR");
assert(/Internet Speed (&amp;|&) Resolution Benchmarks/.test(faqPageContent), "FaqPage contains Internet Speed & Resolution Benchmark Table");
assert(faqPageContent.includes("<table"), "FaqPage renders a semantic table element");

// 6. Audit src/pages/SetupPage.tsx
console.log("\n[6] Checking src/pages/SetupPage.tsx procedural and comparison enhancements...");
const setupPath = path.join(rootDir, "src", "pages", "SetupPage.tsx");
const setupContent = fs.readFileSync(setupPath, "utf-8");
assert(setupContent.includes("Technical Comparison: Xtream Codes API vs. M3U Playlist URL"), "SetupPage contains Xtream Codes vs M3U technical comparison table");
assert(setupContent.includes("Important Distinction: Teleview Subscription vs. Third-Party Player Applications"), "SetupPage contains Service Provider vs. Player App distinction");
const olCount = (setupContent.match(/<ol/g) || []).length;
assert(olCount >= 5, `SetupPage uses ordered list <ol> tags for procedures (found ${olCount} <ol> tags)`);

// 7. Audit src/pages/DevicesPage.tsx
console.log("\n[7] Checking src/pages/DevicesPage.tsx hardware definitions & direct answers...");
const devicesPath = path.join(rootDir, "src", "pages", "DevicesPage.tsx");
const devicesContent = fs.readFileSync(devicesPath, "utf-8");
assert(devicesContent.includes("Quick Answer: What Is the Best Device for IPTV Streaming"), "DevicesPage contains Direct Answer callout");
assert(devicesContent.includes("Key Hardware Definitions for Streaming Performance"), "DevicesPage contains hardware definitions callout");
assert(devicesContent.includes("Hardware Video Decoder (HW)"), "DevicesPage defines Hardware Video Decoder");
assert(/Device Compatibility (&amp;|&) Feature Comparison Matrix/.test(devicesContent), "DevicesPage contains compatibility matrix table");

// 8. Audit src/pages/SubscriptionHubPage.tsx & src/data/products.ts
console.log("\n[8] Checking src/pages/SubscriptionHubPage.tsx & products.ts...");
const hubPath = path.join(rootDir, "src", "pages", "SubscriptionHubPage.tsx");
const hubContent = fs.readFileSync(hubPath, "utf-8");
assert(hubContent.includes("Direct Summary: What IPTV Subscription Plans Does Teleview Offer?"), "SubscriptionHubPage contains direct answer summary callout");
assert(hubContent.includes("<PlanComparisonTable"), "SubscriptionHubPage renders PlanComparisonTable");

const productsPath = path.join(rootDir, "src", "data", "products.ts");
const productsContent = fs.readFileSync(productsPath, "utf-8");
assert(productsContent.includes("Teleview offers four core durations"), "products.ts hubFaqs use answer-first entity attribution");

console.log("\n========================================================");
console.log(`Audit Completed: ${passedChecks}/${totalChecks} checks passed (${failedChecks} failed).`);
console.log("========================================================\n");

if (failedChecks > 0) {
  process.exit(1);
}
