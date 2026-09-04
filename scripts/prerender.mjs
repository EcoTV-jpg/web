import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

async function prerender() {
  console.log("[SSG] Compiling SSR bundle...");
  await build({
    root: rootDir,
    logLevel: "warn",
    build: {
      ssr: path.resolve(rootDir, "src/entry-server.tsx"),
      outDir: path.resolve(rootDir, "dist-ssr"),
      emptyOutDir: true,
    },
  });

  const serverEntryPath = path.resolve(rootDir, "dist-ssr/entry-server.js");
  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const { indexableRoutes } = await import("../src/routes.ts");
  const { siteConfig, getCanonicalUrl } = await import("../src/config/site.ts");

  const distDir = path.resolve(rootDir, "dist");
  const distIndexPath = path.resolve(distDir, "index.html");
  if (!fs.existsSync(distIndexPath)) {
    throw new Error(`Client build not found at ${distIndexPath}. Run vite build first.`);
  }

  const baseTemplate = fs.readFileSync(distIndexPath, "utf-8");

  for (const route of indexableRoutes) {
    const { html, schemas } = render(route.path);
    let pageHtml = baseTemplate;

    const canonicalUrl = getCanonicalUrl(route.path);
    const pageTitle = route.title || siteConfig.defaultTitle;
    const pageDesc = route.description || siteConfig.defaultDescription;
    const ogTitle = route.ogTitle || pageTitle;
    const ogDesc = route.ogDescription || pageDesc;

    // Update <title>
    pageHtml = pageHtml.replace(/<title>(.*?)<\/title>/i, () => `<title>${pageTitle}</title>`);

    // Update <meta name="description">
    pageHtml = pageHtml.replace(
      /<meta[^>]*name=["']description["'][^>]*\/?>/i,
      () => `<meta name="description" content="${pageDesc}" />`
    );

    // Update <link rel="canonical">
    pageHtml = pageHtml.replace(
      /<link[^>]*rel=["']canonical["'][^>]*\/?>/i,
      () => `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Update Open Graph tags
    pageHtml = pageHtml
      .replace(/<meta[^>]*property=["']og:title["'][^>]*\/?>/i, () => `<meta property="og:title" content="${ogTitle}" />`)
      .replace(/<meta[^>]*property=["']og:description["'][^>]*\/?>/i, () => `<meta property="og:description" content="${ogDesc}" />`)
      .replace(/<meta[^>]*property=["']og:url["'][^>]*\/?>/i, () => `<meta property="og:url" content="${canonicalUrl}" />`);

    // Update Twitter tags
    pageHtml = pageHtml
      .replace(/<meta[^>]*name=["']twitter:title["'][^>]*\/?>/i, () => `<meta name="twitter:title" content="${ogTitle}" />`)
      .replace(/<meta[^>]*name=["']twitter:description["'][^>]*\/?>/i, () => `<meta name="twitter:description" content="${ogDesc}" />`);

    // For non-homepage routes, remove the homepage hero preload
    if (route.path !== "/") {
      pageHtml = pageHtml.replace(/<link[^>]*href=["'][^"']*teleview-fans[^"']*["'][^>]*\/?>\s*/i, "");
    }

    // Inject pre-rendered HTML into #root
    if (pageHtml.includes('<div id="root"></div>')) {
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    } else {
      pageHtml = pageHtml.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${html}</div>`);
    }

    // Inject JSON-LD structured data into <head>
    const schemaScript = `\n    <!-- Schema.org JSON-LD Structured Data -->\n    <script type="application/ld+json">${JSON.stringify(schemas)}</script>\n  `;
    const jsonLdTagRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i;
    if (jsonLdTagRegex.test(pageHtml)) {
      pageHtml = pageHtml.replace(jsonLdTagRegex, schemaScript.trim());
    } else {
      pageHtml = pageHtml.replace("</head>", `${schemaScript}</head>`);
    }

    // Hoist React 19 auto-generated <link rel="preload"> from inside #root body → <head>
    const preloadPattern = /(<link\s[^>]*rel=["']preload["'][^>]*\/?>)/gi;
    const rootContent = pageHtml.substring(pageHtml.indexOf('<div id="root">'));
    const preloadLinks = [...rootContent.matchAll(preloadPattern)].map((m) => m[0]);
    if (preloadLinks.length > 0) {
      for (const link of preloadLinks) {
        const rootIdx = pageHtml.indexOf('<div id="root">');
        const afterRoot = pageHtml.substring(rootIdx);
        const cleaned = afterRoot.replace(link, "");
        pageHtml = pageHtml.substring(0, rootIdx) + cleaned;
      }
      const headPreloads = `\n    <!-- Resource hints (hoisted from React 19 SSR) -->\n    ${preloadLinks.join("\n    ")}\n  `;
      pageHtml = pageHtml.replace("</head>", `${headPreloads}</head>`);
    }

    // Determine target output filepath
    let targetPath;
    if (route.path === "/") {
      targetPath = distIndexPath;
    } else {
      const pageDir = path.resolve(distDir, route.path.replace(/^\//, ""));
      fs.mkdirSync(pageDir, { recursive: true });
      targetPath = path.resolve(pageDir, "index.html");
    }

    fs.writeFileSync(targetPath, pageHtml, "utf-8");
    console.log(`[SSG] Pre-rendered ${route.path} → ${path.relative(rootDir, targetPath)} (${html.length} chars rendered)`);
  }

  // Clean up temporary dist-ssr directory
  fs.rmSync(path.resolve(rootDir, "dist-ssr"), { recursive: true, force: true });
}

prerender().catch((err) => {
  console.error("[SSG] Error during pre-rendering:", err);
  process.exit(1);
});
