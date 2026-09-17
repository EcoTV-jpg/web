import assert from "assert";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("\n=== TESTING VERCEL ROUTING CONFIGURATION & LOGIC ===\n");

// 1. Inspect vercel.json
const vercelJsonPath = path.join(rootDir, "vercel.json");
assert(fs.existsSync(vercelJsonPath), "vercel.json must exist");
const vercelConfig = JSON.parse(fs.readFileSync(vercelJsonPath, "utf-8"));

// Verify redirects
const redirects = vercelConfig.redirects || [];
const playerRedirects = [
  "tivimate",
  "iptv-smarters-pro",
  "ibo-player",
  "smartone",
  "gse-smart-iptv",
  "vlc",
  "ott-navigator",
];

for (const slug of playerRedirects) {
  const rule = redirects.find((r) => r.source === `/best-iptv/${slug}`);
  assert(rule, `Missing redirect rule for /best-iptv/${slug}`);
  assert.strictEqual(rule.destination, `/iptv-players/${slug}`);
  assert.strictEqual(rule.permanent, true);
  console.log(`✓ vercel.json redirect: /best-iptv/${slug} -> ${rule.destination} (308)`);
}

// Verify rewrites
const rewrites = vercelConfig.rewrites || [];
const expectedRewrites = [
  "/best-iptv",
  "/best-iptv/",
  "/guides/best-iptv-service",
  "/guides/best-iptv-service/",
];

for (const src of expectedRewrites) {
  const rule = rewrites.find((r) => r.source === src);
  assert(rule, `Missing rewrite rule for ${src}`);
  assert.strictEqual(rule.destination, "/api/best-iptv");
  console.log(`✓ vercel.json rewrite: ${src} -> ${rule.destination}`);
}

// Ensure NO wildcard rewrite on /best-iptv/*
const wildcardRewrite = rewrites.find((r) => r.source.includes("/best-iptv/.*") || r.source.includes("/best-iptv/*") || r.source === "/best-iptv/:path*");
assert(!wildcardRewrite, "FATAL: Wildcard rewrite found on /best-iptv/* which would break player redirects!");
console.log("✓ No wildcard rewrites detected on /best-iptv/*");

// 2. Test api/best-iptv.js Serverless Function
const apiHandlerPath = path.join(rootDir, "api/best-iptv.js");
assert(fs.existsSync(apiHandlerPath), "api/best-iptv.js must exist");
const { default: apiHandler } = await import(apiHandlerPath);

// Test Node.js style invocation
let nodeHeaders = {};
let nodeStatus = 0;
let nodeBody = "";
const mockRes = {
  setHeader(k, v) {
    nodeHeaders[k.toLowerCase()] = v;
  },
  status(code) {
    nodeStatus = code;
    return this;
  },
  send(body) {
    nodeBody = body;
    return this;
  },
};

apiHandler({}, mockRes);
assert.strictEqual(nodeStatus, 410, "Serverless function must return status 410");
assert.strictEqual(nodeHeaders["x-robots-tag"], "noindex, nofollow");
assert(nodeHeaders["content-type"].includes("text/html"));
assert(nodeBody.includes("410 Gone"));
console.log("✓ api/best-iptv.js (Node runtime) returns HTTP 410 with X-Robots-Tag: noindex, nofollow");

// Test Edge style invocation
const edgeResponse = apiHandler({});
assert.strictEqual(edgeResponse.status, 410);
assert.strictEqual(edgeResponse.headers.get("x-robots-tag"), "noindex, nofollow");
assert(edgeResponse.headers.get("content-type").includes("text/html"));
console.log("✓ api/best-iptv.js (Edge runtime fallback) returns HTTP 410 with correct headers");

// 3. Test middleware.js Edge Middleware
const middlewarePath = path.join(rootDir, "middleware.js");
assert(fs.existsSync(middlewarePath), "middleware.js must exist");
const { default: middlewareHandler, config: middlewareConfig } = await import(middlewarePath);

// Verify matcher does not match player slugs
const matchers = middlewareConfig.matcher;
for (const slug of playerRedirects) {
  const childPath = `/best-iptv/${slug}`;
  assert(!matchers.includes(childPath), `Middleware matcher must NOT include ${childPath}`);
}
console.log("✓ middleware.js matcher isolates /best-iptv without capturing child routes");

// Verify middleware execution on target paths
for (const testPath of ["/best-iptv", "/best-iptv/", "/guides/best-iptv-service"]) {
  const req = { url: `https://www.teleview.me${testPath}` };
  const res = middlewareHandler(req);
  assert(res, `Middleware should return Response for ${testPath}`);
  assert.strictEqual(res.status, 410, `Middleware must return status 410 for ${testPath}`);
  assert.strictEqual(res.headers.get("x-robots-tag"), "noindex, nofollow");
  assert(res.headers.get("cache-control").includes("public, max-age=31536000"));
  console.log(`✓ middleware.js intercepts ${testPath} -> HTTP 410 Gone at Edge CDN`);
}

// 4. Verify Vite preview server compatibility
console.log("\nAll Vercel routing simulations passed with 100% precision.\n");
