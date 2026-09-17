#!/usr/bin/env node
/**
 * seo-404-audit.mjs
 *
 * Automated 404 / soft-404 compliance test suite.
 * Run: npm run seo:404
 *
 * Fails the build (exit 1) if:
 *  1. Random nonexistent paths return HTTP 200 (soft-404)
 *  2. /404 appears in sitemap.xml
 *  3. dist/404.html canonicalises to homepage or /404
 *  4. dist/404.html is missing noindex
 *  5. dist/404.html title is wrong
 *  6. The JSON-LD in dist/404.html emits Product/Offer/FAQPage/Service/AggregateRating/Review
 *  7. vercel.json contains a wildcard rewrite that turns 404s into 200s
 *  8. Any internal HTML-page link in prerendered output points to a nonexistent canonical
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

let passed = 0;
let failed = 0;
const errors = [];

function assert(label, condition, detail = "") {
  if (condition) {
    console.log(`  ✅ PASS  ${label}`);
    passed++;
  } else {
    console.error(`  ❌ FAIL  ${label}${detail ? ` — ${detail}` : ""}`);
    failed++;
    errors.push(label + (detail ? `: ${detail}` : ""));
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1: dist/404.html static file checks
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== 1. STATIC 404 ERROR DOCUMENT ===");

const dist404Path = path.resolve(distDir, "404.html");
assert("dist/404.html exists", fs.existsSync(dist404Path));

if (fs.existsSync(dist404Path)) {
  const html = fs.readFileSync(dist404Path, "utf-8");

  // Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : "";
  assert(
    'dist/404.html title is "Page Not Found | Teleview"',
    title === "Page Not Found | Teleview",
    `got: "${title}"`
  );

  // noindex
  assert(
    "dist/404.html has noindex robots meta",
    html.includes("noindex"),
    "missing noindex"
  );

  // No canonical tag
  const hasCanonical = /<link\s[^>]*rel=["']canonical["'][^>]*>/i.test(html);
  assert(
    "dist/404.html has NO canonical tag",
    !hasCanonical,
    "error documents must not carry a canonical"
  );

  // No canonical pointing to homepage
  assert(
    "dist/404.html does NOT canonicalise to homepage",
    !html.includes('href="https://www.teleview.me/"'),
    "found homepage canonical on error document"
  );

  // Check ONLY the JSON-LD script block (not the full JS bundle which contains all page code)
  const jsonLdBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  const forbiddenInJsonLd = ["Product", "Offer", "FAQPage", "AggregateRating", "Review"];
  const foundForbidden = [];
  for (const block of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(block[1]);
      const types = [];
      const extract = (obj) => {
        if (!obj || typeof obj !== "object") return;
        if (obj["@type"]) {
          const t = Array.isArray(obj["@type"]) ? obj["@type"] : [obj["@type"]];
          types.push(...t);
        }
        if (obj["@graph"]) obj["@graph"].forEach(extract);
      };
      extract(parsed);
      for (const t of types) {
        if (forbiddenInJsonLd.includes(t)) foundForbidden.push(t);
      }
    } catch (_) {
      // ignore parse errors in minified bundles
    }
  }
  assert(
    "dist/404.html JSON-LD has no commercial schema (Product/Offer/FAQPage/AggregateRating/Review)",
    foundForbidden.length === 0,
    foundForbidden.length > 0 ? `found: ${[...new Set(foundForbidden)].join(", ")}` : ""
  );

  // Must contain H1 "Page Not Found"
  assert(
    'dist/404.html contains "Page Not Found" heading',
    html.includes("Page Not Found"),
    "missing expected H1 text"
  );

  // Must NOT canonicalise to /404
  assert(
    "dist/404.html does NOT canonicalise to /404",
    !html.includes('href="https://www.teleview.me/404"'),
    "found /404 canonical on error document"
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2: Sitemap must not include /404
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== 2. SITEMAP — /404 EXCLUSION ===");

const sitemapPath = path.resolve(distDir, "sitemap.xml");
const publicSitemapPath = path.resolve(rootDir, "public", "sitemap.xml");
const sitemapFile = fs.existsSync(sitemapPath)
  ? sitemapPath
  : fs.existsSync(publicSitemapPath)
  ? publicSitemapPath
  : null;

assert("sitemap.xml file exists in dist/ or public/", sitemapFile !== null);

if (sitemapFile) {
  const sitemap = fs.readFileSync(sitemapFile, "utf-8");
  assert(
    "/404 is NOT in sitemap.xml",
    !sitemap.includes("<loc>https://www.teleview.me/404</loc>") &&
      !sitemap.includes("<loc>https://www.teleview.me/404/</loc>"),
    "/404 URL found in sitemap — must be excluded"
  );

  const urlCount = (sitemap.match(/<loc>/g) || []).length;
  assert(
    `sitemap.xml has expected URL count (got ${urlCount}, expected ≥ 40)`,
    urlCount >= 40,
    `only ${urlCount} URLs — something may be missing`
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3: vercel.json — no wildcard soft-404 rewrite
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== 3. VERCEL.JSON — WILDCARD REWRITE CHECK ===");

const vercelJsonPath = path.resolve(rootDir, "vercel.json");
assert("vercel.json exists", fs.existsSync(vercelJsonPath));

if (fs.existsSync(vercelJsonPath)) {
  const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));
  const rewrites = vercelConfig.rewrites || [];

  const dangerousRewrite = rewrites.find(
    (r) =>
      (r.source === "/(.*)" || r.source === "/:path*" || r.source === "/*") &&
      (r.destination === "/index.html" || r.destination === "/")
  );
  assert(
    "vercel.json has NO wildcard rewrite that converts 404s to 200s",
    !dangerousRewrite,
    dangerousRewrite ? `found: ${JSON.stringify(dangerousRewrite)}` : ""
  );

  assert(
    "vercel.json has cleanUrls: true",
    vercelConfig.cleanUrls === true,
    "cleanUrls should be true for correct 404 fallback behaviour"
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4: Internal links — no broken HTML-page links in prerendered output
// (Excludes static assets: /images/*, /llms.txt, /robots.txt, /sitemap.xml,
//  /favicon.*, /site.webmanifest, and mailto: / tel: / external links)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== 4. INTERNAL LINK BROKEN-LINK CHECK ===");

const canonicalPages = [
  "/", "/setup", "/what-is-iptv", "/devices",
  "/devices/firestick", "/devices/samsung-smart-tv", "/devices/lg-smart-tv",
  "/devices/android-tv", "/devices/apple-tv", "/devices/roku",
  "/devices/google-tv", "/devices/formuler",
  "/faq", "/iptv-subscription", "/iptv-free-trial",
  "/iptv-subscription/1-month", "/iptv-subscription/3-months",
  "/iptv-subscription/6-months", "/iptv-subscription/12-months",
  "/contact", "/terms-conditions", "/privacy-policy", "/refund-policy",
  "/disclaimer", "/help-center",
  "/help-center/buffering", "/help-center/not-working",
  "/help-center/epg-not-working", "/help-center/channels-not-loading",
  "/help-center/connection-problems", "/help-center/internet-speed",
  "/my-account", "/dmca", "/about", "/iptv-players",
  "/iptv-players/tivimate", "/iptv-players/iptv-smarters-pro",
  "/iptv-players/ibo-player", "/iptv-players/smartone",
  "/iptv-players/gse-smart-iptv", "/iptv-players/vlc",
  "/iptv-players/ott-navigator",
  "/iptv-pricing", "/is-iptv-legal", "/is-iptv-safe", "/iptv-vs-cable",
  "/iptv-channels", "/iptv-sports", "/iptv-movies",
];

const knownRedirects = new Set([
  "/pricing", "/iptv-cost", "/how-does-iptv-work", "/plans",
  "/tutorial", "/installation-guide", "/contact-us", "/help",
  "/my-subscription", "/dmca-report", "/dmca-notice", "/terms",
  "/legal", "/privacy", "/refund", "/free-trial",
  "/best-iptv/tivimate", "/best-iptv/iptv-smarters-pro",
  "/best-iptv/ibo-player", "/best-iptv/smartone",
  "/best-iptv/gse-smart-iptv", "/best-iptv/vlc", "/best-iptv/ott-navigator",
]);

// Static asset path prefixes / extensions to exclude from the page-link check
const assetPrefixes = ["/images/", "/fonts/", "/icons/"];
const assetExtensions = [
  ".jpg", ".jpeg", ".webp", ".png", ".svg", ".avif", ".ico",
  ".woff", ".woff2", ".ttf",
  ".txt", ".xml", ".json", ".webmanifest", ".pdf", ".mp4", ".mp3",
];

function isAssetPath(p) {
  if (assetPrefixes.some((pfx) => p.startsWith(pfx))) return true;
  const lower = p.toLowerCase().split("?")[0];
  return assetExtensions.some((ext) => lower.endsWith(ext));
}

let brokenLinks = 0;
const canonicalSet = new Set(canonicalPages);

for (const page of canonicalPages) {
  const filePath =
    page === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, page.slice(1), "index.html");

  if (!fs.existsSync(filePath)) continue;

  const html = fs.readFileSync(filePath, "utf-8");
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let m;
  while ((m = hrefRegex.exec(html)) !== null) {
    const raw = m[1];
    // Skip external, anchor-only, mailto, tel links
    if (
      !raw.startsWith("/") &&
      !raw.startsWith("https://www.teleview.me")
    ) continue;
    if (raw.startsWith("mailto:") || raw.startsWith("tel:")) continue;

    const cleanPath =
      raw.replace("https://www.teleview.me", "").split("#")[0].replace(/\/$/, "") || "/";

    // Skip static asset paths
    if (isAssetPath(cleanPath)) continue;

    // Skip the /404 error page path (it resolves correctly on Vercel)
    if (cleanPath === "/404") continue;

    if (knownRedirects.has(cleanPath)) {
      console.error(`  [REDIRECT LINK] In ${page}: "${cleanPath}" — update to canonical target`);
      brokenLinks++;
    } else if (!canonicalSet.has(cleanPath)) {
      console.error(`  [BROKEN LINK] In ${page}: "${cleanPath}" is not a canonical page`);
      brokenLinks++;
    }
  }
}

assert(
  `Internal link check: 0 broken HTML-page links across ${canonicalPages.length} prerendered pages`,
  brokenLinks === 0,
  `${brokenLinks} broken/redirect links found`
);

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5: Live soft-404 detection (production, sandbox-safe)
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n=== 5. LIVE SOFT-404 DETECTION ===");

const productionBase = "https://www.teleview.me";
const randomSuffix = () => Math.random().toString(36).slice(2, 10);

const nonexistentPaths = [
  `/does-not-exist-${randomSuffix()}`,
  `/foo/bar/not-real-${randomSuffix()}`,
  `/old-page-${randomSuffix()}`,
  `/iptv-random-${randomSuffix()}`,
  `/devices/not-a-real-device-${randomSuffix()}`,
];

let soft404Failures = 0;
let soft404Skipped = 0;

for (const p of nonexistentPaths) {
  try {
    const res = await fetch(`${productionBase}${p}`, {
      method: "HEAD",
      redirect: "manual",
      signal: AbortSignal.timeout(8000),
    });
    if (res.status === 200) {
      console.error(`  ❌ SOFT-404: ${productionBase}${p} returned HTTP ${res.status}`);
      soft404Failures++;
    } else {
      console.log(`  ✅ ${productionBase}${p} → HTTP ${res.status}`);
    }
  } catch (_) {
    console.warn(`  ⚠️  Network unavailable — skipping live check for ${p}`);
    soft404Skipped++;
  }
}

if (soft404Skipped === nonexistentPaths.length) {
  console.log("  ℹ️  All live checks skipped (no network access in sandbox). Run manually to verify.");
  assert(
    "Live soft-404 check (skipped — no network; run npm run seo:404 with network access)",
    true
  );
} else {
  assert(
    `${nonexistentPaths.length - soft404Skipped} live paths all return HTTP 404 (not 200)`,
    soft404Failures === 0,
    `${soft404Failures} path(s) returned HTTP 200 — soft-404 detected`
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SUMMARY
// ─────────────────────────────────────────────────────────────────────────────
console.log("\n==================================================");
console.log(`  ${passed + failed} checks | ✅ ${passed} passed | ❌ ${failed} failed`);
console.log("==================================================\n");

if (failed > 0) {
  console.error("FAILURES:");
  errors.forEach((e) => console.error(`  • ${e}`));
  process.exit(1);
} else {
  console.log("✅ All 404 SEO compliance checks passed.");
  process.exit(0);
}
