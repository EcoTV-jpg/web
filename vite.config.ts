import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serverRedirects: Record<string, string> = {
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
  "/contact-us": "/contact",
  "/help": "/help-center",
  "/my-subscription": "/my-account",
  "/dmca-report": "/dmca",
  "/dmca-notice": "/dmca",
  "/terms": "/terms-conditions",
  "/legal": "/terms-conditions",
  "/privacy": "/privacy-policy",
  "/refund": "/refund-policy",
};

function seoRoutingPlugin(): Plugin {
  return {
    name: "seo-routing-plugin",
    configureServer(server) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const rawUrl = req.url || "/";
        const pathname = decodeURIComponent(rawUrl.split("?")[0]);
        const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

        // Dev server internal paths & module imports
        if (
          pathname.startsWith("/@") ||
          pathname.startsWith("/src/") ||
          pathname.startsWith("/node_modules/") ||
          pathname.startsWith("/__vite") ||
          pathname.startsWith("/@fs/") ||
          pathname.startsWith("/@id/")
        ) {
          return next();
        }

        // Check simulated 301 redirects
        if (serverRedirects[normalizedPath]) {
          res.statusCode = 301;
          res.setHeader("Location", serverRedirects[normalizedPath]);
          res.end();
          return;
        }

        // Allowed top-level document paths & known app routes
        const validAppRoutes = [
          "/",
          "/index.html",
          "/setup",
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
          "/contact",
          "/what-is-iptv",
          "/iptv-subscription",
          "/iptv-subscription/1-month",
          "/iptv-subscription/3-months",
          "/iptv-subscription/6-months",
          "/iptv-subscription/12-months",
          "/best-iptv",
          "/iptv-players",
          "/iptv-players/tivimate",
          "/iptv-players/iptv-smarters-pro",
          "/iptv-players/ibo-player",
          "/iptv-players/smartone",
          "/iptv-players/gse-smart-iptv",
          "/iptv-players/vlc",
          "/iptv-players/ott-navigator",
          "/help-center",
          "/help-center/buffering",
          "/help-center/not-working",
          "/help-center/epg-not-working",
          "/help-center/channels-not-loading",
          "/help-center/connection-problems",
          "/help-center/internet-speed",
          "/my-account",
          "/dmca",
          "/terms-conditions",
          "/privacy-policy",
          "/refund-policy",
          "/disclaimer",
        ];
        if (validAppRoutes.includes(normalizedPath)) {
          return next();
        }

        // Check if the requested file exists in public/
        const publicFilePath = path.join(__dirname, "public", pathname.replace(/^\//, ""));
        if (fs.existsSync(publicFilePath) && fs.statSync(publicFilePath).isFile()) {
          return next();
        }

        // Real non-existent URL -> return genuine 404
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 Not Found | Teleview</title>
  </head>
  <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #070b18; color: #f5f5f5; display: grid; min-height: 100vh; place-items: center; margin: 0;">
    <div style="text-align: center; padding: 2rem;">
      <h1 style="font-size: 2rem; font-weight: 600; margin: 0 0 0.5rem 0;">404 Not Found</h1>
      <p style="color: #8b949e; margin: 0 0 1.5rem 0;">The requested URL was not found on this server.</p>
      <a href="/" style="color: #3ecf8e; text-decoration: none; font-weight: 500;">Return to Home</a>
    </div>
  </body>
</html>`);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const rawUrl = req.url || "/";
        const hostHeader = (req.headers.host || "").split(":")[0];

        // Vercel simulation: non-www hostname -> permanent 308 redirect to canonical https://www.teleview.me
        if (hostHeader === "teleview.me") {
          res.statusCode = 308;
          res.setHeader("Location", `https://www.teleview.me${rawUrl}`);
          res.end();
          return;
        }

        const pathname = decodeURIComponent(rawUrl.split("?")[0]);
        const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

        // Check simulated 301 redirects in preview server
        if (serverRedirects[normalizedPath]) {
          res.statusCode = 301;
          res.setHeader("Location", serverRedirects[normalizedPath]);
          res.end();
          return;
        }

        // If requested route has pre-rendered subpage index.html in dist/, rewrite req.url or serve file
        const distSubpageHtml = path.join(__dirname, "dist", normalizedPath.replace(/^\//, ""), "index.html");
        if (normalizedPath !== "/" && fs.existsSync(distSubpageHtml) && fs.statSync(distSubpageHtml).isFile()) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(fs.readFileSync(distSubpageHtml, "utf-8"));
          return;
        }

        const distFilePath = path.join(__dirname, "dist", pathname.replace(/^\//, ""));
        if (pathname === "/" || pathname === "/index.html" || (fs.existsSync(distFilePath) && fs.statSync(distFilePath).isFile())) {
          return next();
        }

        // Real non-existent URL -> return genuine 404
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404 Not Found | Teleview</title>
  </head>
  <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #070b18; color: #f5f5f5; display: grid; min-height: 100vh; place-items: center; margin: 0;">
    <div style="text-align: center; padding: 2rem;">
      <h1 style="font-size: 2rem; font-weight: 600; margin: 0 0 0.5rem 0;">404 Not Found</h1>
      <p style="color: #8b949e; margin: 0 0 1.5rem 0;">The requested URL was not found on this server.</p>
      <a href="/" style="color: #3ecf8e; text-decoration: none; font-weight: 500;">Return to Home</a>
    </div>
  </body>
</html>`);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), seoRoutingPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
