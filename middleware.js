export const config = {
  matcher: [
    "/best-iptv",
    "/best-iptv/",
    "/guides/best-iptv-service",
    "/guides/best-iptv-service/",
    "/iptv-cost",
    "/iptv-cost/",
    "/how-does-iptv-work",
    "/how-does-iptv-work/",
  ],
};

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>410 Gone | Teleview</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #070b18; color: #f5f5f5; display: grid; min-height: 100vh; place-items: center; margin: 0;">
    <div style="text-align: center; padding: 2rem;">
      <h1 style="font-size: 2rem; font-weight: 600; margin: 0 0 0.5rem 0;">410 Gone</h1>
      <p style="color: #8b949e; margin: 0 0 1.5rem 0;">This page has been permanently removed from this website.</p>
      <a href="/" style="color: #3ecf8e; text-decoration: none; font-weight: 500;">Return to Home</a>
    </div>
  </body>
</html>`;

export default function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname.replace(/\/$/, "");

  if (pathname === "/best-iptv" || pathname === "/guides/best-iptv-service") {
    return new Response(html, {
      status: 410,
      statusText: "Gone",
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=31536000, immutable",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  if (pathname === "/iptv-cost") {
    return Response.redirect(new URL("/iptv-pricing", request.url), 308);
  }

  if (pathname === "/how-does-iptv-work") {
    return Response.redirect(new URL("/what-is-iptv", request.url), 308);
  }
}

