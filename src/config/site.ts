/* ------------------------------------------------------------------
   Central Site Configuration — Single Source of Truth for SEO & Brand
------------------------------------------------------------------- */

export const siteConfig = {
  url: "https://www.teleview.me",
  name: "Teleview",
  legalName: "Teleview Media",
  tagline: "High-Speed IPTV Subscription & Streaming Service",
  defaultTitle: "Best IPTV Service 2026 | Premium Worldwide IPTV | Teleview",
  defaultDescription:
    "Looking for the best IPTV service in 2026? Discover Teleview for live TV, sports, movies, news and on-demand entertainment in HD and 4K worldwide.",
  logoUrl: "https://www.teleview.me/favicon.svg",
  socialImage: "/images/teleview-og.jpg",
  language: "en",
  sitemapUrl: "https://www.teleview.me/sitemap.xml",
  // Shared fallback modification date for routes without an explicit lastmod.
  // Single source of truth used by the sitemap generator, JSON-LD dateModified,
  // and article:modified_time so all three always agree.
  defaultLastmod: "2026-09-06",
  contact: {
    email: "Help@Teleview.me",
    emailHref: "mailto:Help@Teleview.me",
    whatsapp: "+447848197761",
    whatsappDisplay: "WhatsApp: +44 7848 197761",
    whatsappHref: "https://wa.me/447848197761",
  },
  themeColor: "#070b18",
  socialProfiles: [] as string[],
  entityIds: {
    organization: "https://www.teleview.me/#organization",
    website: "https://www.teleview.me/#website",
    webpage: "https://www.teleview.me/#webpage",
    product: "https://www.teleview.me/#product",
    brand: "https://www.teleview.me/#brand",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function getCanonicalUrl(path: string = "/"): string {
  let clean = path || "/";
  if (clean.startsWith("http://") || clean.startsWith("https://")) {
    try {
      clean = new URL(clean).pathname;
    } catch {
      clean = clean.replace(/^https?:\/\/[^/]+/, "");
    }
  }
  clean = clean.split("?")[0].split("#")[0];
  clean = clean.replace(/^\/+|\/+$/g, "");
  return clean === "" ? `${siteConfig.url}/` : `${siteConfig.url}/${clean}`;
}

export function createWhatsAppOrderUrl(planName: string, price: string | number) {
  const cleanPrice = String(price).replace(/^\$/, "").trim();
  const text = `Hello, I would like to order the ${planName} plan ($${cleanPrice})`;
  return `https://wa.me/447848197761?text=${encodeURIComponent(text)}`;
}

export function createWhatsAppTrialUrl() {
  const text = "Hello, I would like to request a 24-Hour Free Trial";
  return `https://wa.me/447848197761?text=${encodeURIComponent(text)}`;
}
