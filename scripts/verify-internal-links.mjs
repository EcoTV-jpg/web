import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const canonicalPages = [
  "/",
  "/setup",
  "/what-is-iptv",
  "/devices",
  "/devices/firestick",
  "/devices/samsung-smart-tv",
  "/devices/lg-smart-tv",
  "/devices/android-tv",
  "/devices/apple-tv",
  "/devices/roku",
  "/devices/google-tv",
  "/devices/formuler",
  "/faq",
  "/iptv-subscription",
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
  "/help-center/buffering",
  "/help-center/not-working",
  "/help-center/epg-not-working",
  "/help-center/channels-not-loading",
  "/help-center/connection-problems",
  "/help-center/internet-speed",
  "/my-account",
  "/dmca",
  "/best-iptv",
  "/iptv-players",
  "/iptv-players/tivimate",
  "/iptv-players/iptv-smarters-pro",
  "/iptv-players/ibo-player",
  "/iptv-players/smartone",
  "/iptv-players/gse-smart-iptv",
  "/iptv-players/vlc",
  "/iptv-players/ott-navigator",
];

const knownRedirects = {
  "/best-iptv/tivimate": "/iptv-players/tivimate",
  "/best-iptv/iptv-smarters-pro": "/iptv-players/iptv-smarters-pro",
  "/best-iptv/ibo-player": "/iptv-players/ibo-player",
  "/best-iptv/smartone": "/iptv-players/smartone",
  "/best-iptv/gse-smart-iptv": "/iptv-players/gse-smart-iptv",
  "/best-iptv/vlc": "/iptv-players/vlc",
  "/best-iptv/ott-navigator": "/iptv-players/ott-navigator",
  "/pricing": "/iptv-subscription",
  "/plans": "/iptv-subscription",
  "/tutorial": "/setup",
  "/installation-guide": "/setup",
  "/help": "/help-center",
  "/contact-us": "/contact",
  "/my-subscription": "/my-account",
  "/dmca-report": "/dmca",
  "/dmca-notice": "/dmca",
  "/terms": "/terms-conditions",
  "/legal": "/terms-conditions",
  "/privacy": "/privacy-policy",
  "/refund": "/refund-policy",
};

console.log("==================================================");
console.log("    TELEVIEW INTERNAL LINK ARCHITECTURE AUDIT    ");
console.log("==================================================\n");

let totalLinksChecked = 0;
let errorsCount = 0;

const inLinksTotal = {};
const inLinksContextual = {};
canonicalPages.forEach((p) => {
  inLinksTotal[p] = new Set();
  inLinksContextual[p] = new Set();
});

for (const page of canonicalPages) {
  const filePath = page === "/" ? path.join(distDir, "index.html") : path.join(distDir, page.slice(1), "index.html");
  if (!fs.existsSync(filePath)) {
    console.error(`Missing pre-rendered file for ${page}: ${filePath}`);
    errorsCount++;
    continue;
  }

  const html = fs.readFileSync(filePath, "utf-8");
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  const mainHtml = mainMatch ? mainMatch[0] : html;

  const hrefRegex = /<a[^>]*href=["\x27]([^"\x27]+)["\x27][^>]*>([\s\S]*?)<\/a>/gi;
  let m;

  while ((m = hrefRegex.exec(html)) !== null) {
    const rawHref = m[1];
    const rawText = m[2].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

    // Check only internal links
    if (rawHref.startsWith("/") || rawHref.startsWith("https://www.teleview.me")) {
      totalLinksChecked++;
      const cleanPath = rawHref.replace("https://www.teleview.me", "").split("#")[0].replace(/\/$/, "") || "/";

      // 1. Check for redirects
      if (knownRedirects[cleanPath]) {
        console.error(`[ERROR: REDIRECT] In ${page}: href="${rawHref}" points to known redirect ${cleanPath} -> ${knownRedirects[cleanPath]}`);
        errorsCount++;
      }

      // 2. Check for nonexistent routes
      if (!canonicalPages.includes(cleanPath)) {
        console.error(`[ERROR: 404] In ${page}: href="${rawHref}" points to nonexistent page "${cleanPath}"`);
        errorsCount++;
      }

      // 3. Track in-links
      if (inLinksTotal[cleanPath]) {
        inLinksTotal[cleanPath].add(page);
      }

      // Check if this link was inside <main>
      if (mainHtml.includes(m[0]) && inLinksContextual[cleanPath]) {
        inLinksContextual[cleanPath].add(page);
      }

      // 4. Check for poor/empty anchor text
      if (!rawText && !m[2].includes("<img") && !m[2].includes("<svg")) {
        console.warn(`[WARN: EMPTY ANCHOR] In ${page}: href="${rawHref}" has empty anchor text`);
      }
    }
  }
}

console.log(`Total internal links evaluated: ${totalLinksChecked}`);
console.log(`Errors found: ${errorsCount}\n`);

console.log("=== IN-BODY CONTEXTUAL INBOUND LINKS PER ROUTE ===");
for (const p of canonicalPages) {
  const sources = Array.from(inLinksContextual[p]);
  console.log(`${p.padEnd(30)} : ${sources.length.toString().padStart(2)} in-body sources | [${sources.join(", ")}]`);
}

console.log("\n=== TOPICAL CLUSTER INTEGRATION CHECK ===");
const clusters = {
  "IPTV Subscription": [
    "/iptv-subscription",
    "/iptv-subscription/1-month",
    "/iptv-subscription/3-months",
    "/iptv-subscription/6-months",
    "/iptv-subscription/12-months",
  ],
  "Core & Understanding": ["/what-is-iptv", "/setup", "/devices", "/help-center"],
  "Apps & Players": [
    "/best-iptv",
    "/iptv-players",
    "/iptv-players/tivimate",
    "/iptv-players/iptv-smarters-pro",
    "/iptv-players/ibo-player",
    "/iptv-players/smartone",
    "/iptv-players/gse-smart-iptv",
    "/iptv-players/vlc",
    "/iptv-players/ott-navigator",
  ],
  "Devices & Hardware": [
    "/devices",
    "/devices/firestick",
    "/devices/samsung-smart-tv",
    "/devices/lg-smart-tv",
    "/devices/android-tv",
    "/devices/apple-tv",
    "/devices/roku",
    "/devices/google-tv",
    "/devices/formuler",
  ],
  "Troubleshooting & Help Center": [
    "/help-center",
    "/help-center/buffering",
    "/help-center/not-working",
    "/help-center/epg-not-working",
    "/help-center/channels-not-loading",
    "/help-center/connection-problems",
    "/help-center/internet-speed",
  ],
  "Support & Account": ["/faq", "/contact", "/my-account"],
  "Trust & Policies": ["/refund-policy", "/terms-conditions", "/privacy-policy", "/disclaimer", "/dmca"],
};

for (const [clusterName, routes] of Object.entries(clusters)) {
  console.log(`\nCluster [${clusterName}]:`);
  for (const r of routes) {
    const contextualCount = inLinksContextual[r].size;
    const status = contextualCount > 0 ? "OK" : "ORPHAN";
    console.log(`  ${r.padEnd(30)}: ${contextualCount} contextual sources (${status})`);
  }
}

if (errorsCount === 0) {
  console.log("\n==================================================");
  console.log("✅ INTERNAL LINK ARCHITECTURE VERIFICATION PASSED!");
  console.log("==================================================");
  process.exit(0);
} else {
  console.error(`\n❌ FAILED: ${errorsCount} link errors detected.`);
  process.exit(1);
}
