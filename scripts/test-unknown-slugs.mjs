import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.resolve(rootDir, "dist");

async function runUnknownSlugTests() {
  console.log("==================================================");
  console.log("   UNKNOWN DYNAMIC SLUG REGRESSION TEST SUITE     ");
  console.log("==================================================\n");

  const serverEntryPath = path.resolve(rootDir, "dist-ssr/entry-server.js");
  let render;
  try {
    const mod = await import(pathToFileURL(serverEntryPath).href);
    render = mod.render;
  } catch (e) {
    // If dist-ssr is not present, compile it quickly
    await build({
      root: rootDir,
      logLevel: "warn",
      build: {
        ssr: path.resolve(rootDir, "src/entry-server.tsx"),
        outDir: path.resolve(rootDir, "dist-ssr-temp"),
        emptyOutDir: true,
      },
    });
    const mod = await import(pathToFileURL(path.resolve(rootDir, "dist-ssr-temp/entry-server.js")).href);
    render = mod.render;
    fs.rmSync(path.resolve(rootDir, "dist-ssr-temp"), { recursive: true, force: true });
  }

  const results = [];
  function assert(name, condition, details = "") {
    results.push({ name, passed: Boolean(condition), details });
    const status = condition ? "PASS" : "FAIL";
    console.log(`[${status}] ${name} ${details ? `(${details})` : ""}`);
    if (!condition) {
      process.exitCode = 1;
    }
  }

  // 1. Static 404 handler presence in dist
  console.log("--- 1. STATIC 404 HANDLER VERIFICATION ---");
  const dist404 = path.resolve(distDir, "404.html");
  assert("dist/404.html exists in build output", fs.existsSync(dist404));
  if (fs.existsSync(dist404)) {
    const content404 = fs.readFileSync(dist404, "utf-8");
    assert("dist/404.html has <title>404 Not Found | Teleview</title>", content404.includes("<title>404 Not Found | Teleview</title>"));
    assert("dist/404.html has meta robots noindex, follow", content404.includes('content="noindex, follow"'));
    assert("dist/404.html has canonical to /404", content404.includes('href="https://www.teleview.me/404"'));
    assert("dist/404.html renders Page Not Found h1", content404.includes("Page Not Found"));
    assert("dist/404.html renders HTTP 404 badge", content404.includes("HTTP 404 — Not Found"));
  }

  // 2. Unknown dynamic slug probing
  console.log("\n--- 2. DYNAMIC ROUTE UNKNOWN SLUG BEHAVIOR ---");
  const unknownSlugs = [
    { path: "/devices/does-not-exist", type: "device", forbiddenPhrase: "Amazon Fire TV Stick" },
    { path: "/devices/abc123", type: "device", forbiddenPhrase: "Amazon Fire TV Stick" },
    { path: "/devices/samsung", type: "device", forbiddenPhrase: "Samsung Smart TV (Tizen OS)" },
    { path: "/devices/random-device-slug", type: "device", forbiddenPhrase: "Amazon Fire TV Stick" },
    { path: "/help-center/does-not-exist", type: "troubleshooting", forbiddenPhrase: "Buffering & Stream Freezing" },
    { path: "/help-center/abc123", type: "troubleshooting", forbiddenPhrase: "Buffering & Stream Freezing" },
    { path: "/help-center/random-issue-xyz", type: "troubleshooting", forbiddenPhrase: "Buffering & Stream Freezing" },
    { path: "/iptv-players/does-not-exist", type: "player", forbiddenPhrase: "TiviMate IPTV Player" },
    { path: "/iptv-players/abc123", type: "player", forbiddenPhrase: "TiviMate IPTV Player" },
    { path: "/best-iptv/does-not-exist", type: "player", forbiddenPhrase: "TiviMate IPTV Player" },
    { path: "/iptv-subscription/does-not-exist", type: "subscription", forbiddenPhrase: "1 Month IPTV Subscription" },
    { path: "/iptv-subscription/5-years", type: "subscription", forbiddenPhrase: "1 Month IPTV Subscription" },
    { path: "/nonexistent-page-abc", type: "generic", forbiddenPhrase: "Best IPTV Service in 2026" },
    { path: "/foo/bar/baz", type: "generic", forbiddenPhrase: "Best IPTV Service in 2026" },
    { path: "/404", type: "error", forbiddenPhrase: "Amazon Fire TV Stick" },
  ];

  for (const testCase of unknownSlugs) {
    const { html, schemas } = render(testCase.path);

    // Must render 404 page content
    assert(`${testCase.path} renders 404 heading`, html.includes("Page Not Found"));
    assert(`${testCase.path} renders HTTP 404 badge`, html.includes("HTTP 404 — Not Found"));
    assert(`${testCase.path} renders return home link`, html.includes('href="/"'));

    // Must NEVER render the first valid item fallback content
    assert(
      `${testCase.path} does NOT leak forbidden fallback content (${testCase.forbiddenPhrase})`,
      !html.includes(testCase.forbiddenPhrase)
    );

    // Schemas must only contain Organization and WebSite
    const graph = schemas?.["@graph"] || (Array.isArray(schemas) ? schemas : []);
    const schemaTypes = graph.map((s) => s["@type"]);
    assert(
      `${testCase.path} structured data has only Organization and WebSite`,
      schemaTypes.length === 2 && schemaTypes.includes("Organization") && schemaTypes.includes("WebSite"),
      `Actual: [${schemaTypes.join(", ")}]`
    );

    // Must NOT emit entity schemas
    assert(`${testCase.path} has no TechArticle schema`, !schemaTypes.includes("TechArticle"));
    assert(`${testCase.path} has no Product schema`, !schemaTypes.includes("Product"));
    assert(`${testCase.path} has no HowTo schema`, !schemaTypes.includes("HowTo"));
    assert(`${testCase.path} has no FAQPage schema`, !schemaTypes.includes("FAQPage"));
    assert(`${testCase.path} has no BreadcrumbList schema`, !schemaTypes.includes("BreadcrumbList"));

    // Verify static dist dir does NOT contain spurious folders for unknown slugs
    const spuriousDistPath = path.resolve(distDir, testCase.path.replace(/^\//, ""));
    if (testCase.path !== "/404") {
      assert(`${testCase.path} is not pre-rendered into static dist folder`, !fs.existsSync(spuriousDistPath));
    }
  }

  // 3. Valid dynamic routes must still render 200 and their proper entities
  console.log("\n--- 3. VALID DYNAMIC ROUTES VERIFICATION (SANITY CHECK) ---");
  const validRoutes = [
    { path: "/devices/firestick", expectedTitle: "Firestick", expectedEntity: "TechArticle" },
    { path: "/devices/samsung-smart-tv", expectedTitle: "Samsung", expectedEntity: "TechArticle" },
    { path: "/help-center/buffering", expectedTitle: "Buffering", expectedEntity: "TechArticle" },
    { path: "/iptv-players/tivimate", expectedTitle: "TiviMate", expectedEntity: "TechArticle" },
    { path: "/iptv-subscription/1-month", expectedTitle: "1 Month", expectedEntity: "Product" },
    { path: "/iptv-subscription/12-months", expectedTitle: "12 Months", expectedEntity: "Product" },
  ];

  for (const vr of validRoutes) {
    const { html, schemas } = render(vr.path);
    assert(`Valid route ${vr.path} does NOT render 404`, !html.includes("HTTP 404 — Not Found"));
    assert(`Valid route ${vr.path} renders expected content (${vr.expectedTitle})`, html.includes(vr.expectedTitle));

    const graph = schemas?.["@graph"] || (Array.isArray(schemas) ? schemas : []);
    const schemaTypes = graph.map((s) => s["@type"]);
    assert(`Valid route ${vr.path} emits expected schema ${vr.expectedEntity}`, schemaTypes.includes(vr.expectedEntity));
    assert(`Valid route ${vr.path} emits BreadcrumbList schema`, schemaTypes.includes("BreadcrumbList"));
  }

  // Summary
  const passed = results.filter((r) => r.passed).length;
  const failed = results.filter((r) => !r.passed).length;
  console.log("\n==================================================");
  console.log(`TOTAL CHECKS EVALUATED: ${results.length}`);
  console.log(`PASSED: ${passed}`);
  console.log(`FAILED: ${failed}`);
  console.log("==================================================");

  if (failed > 0) {
    console.error("\n❌ UNKNOWN SLUG REGRESSION TEST SUITE: FAILED");
    process.exit(1);
  } else {
    console.log("\n✅ ALL UNKNOWN SLUG REGRESSION TESTS PASSED!");
  }
}

runUnknownSlugTests().catch((err) => {
  console.error("Test execution error:", err);
  process.exit(1);
});
