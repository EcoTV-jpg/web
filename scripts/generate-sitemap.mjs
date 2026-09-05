import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

async function generateSitemap() {
  const { siteConfig, getCanonicalUrl } = await import("../src/config/site.ts");
  const { indexableRoutes } = await import("../src/routes.ts");

  const defaultLastmod = "2026-09-05";

  const xmlUrls = indexableRoutes
    .map((route) => {
      const loc = getCanonicalUrl(route.path);
      const changefreq = route.changefreq || "weekly";
      const priority = (route.priority !== undefined ? route.priority : 0.8).toFixed(1);
      const lastmod = route.lastmod || defaultLastmod;

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>
`;

  // Write to public/
  const publicPath = path.resolve(rootDir, "public/sitemap.xml");
  fs.writeFileSync(publicPath, sitemapContent, "utf-8");

  // Write to dist/ if dist exists
  const distDir = path.resolve(rootDir, "dist");
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemapContent, "utf-8");
  }

  console.log(`[Sitemap] Generated valid sitemap.xml with ${indexableRoutes.length} indexable route(s).`);
}

generateSitemap().catch((err) => {
  console.error("[Sitemap] Error generating sitemap:", err);
  process.exit(1);
});
