/* ------------------------------------------------------------------
   Central Site Configuration — Single Source of Truth for SEO & Brand
------------------------------------------------------------------- */

export const siteConfig = {
  url: "https://teleview.me",
  name: "Teleview",
  legalName: "Teleview Media",
  tagline: "High-Speed IPTV Subscription & Streaming Service",
  defaultTitle: "Teleview | 2026 Best IPTV Service With 24h Free Trial",
  defaultDescription:
    "Enjoy live sports, news, movies, and shows from around the world. Teleview offers premium streaming with 24/7 customer support and no long-term contracts.",
  logoUrl: "https://teleview.me/favicon.svg",
  socialImage: "/images/teleview-og.jpg",
  language: "en",
  sitemapUrl: "https://teleview.me/sitemap.xml",
  contact: {
    email: "Help@Teleview.me",
    emailHref: "mailto:Help@Teleview.me",
    whatsapp: "+447537105861",
    whatsappDisplay: "WhatsApp: +447537105861",
    whatsappHref: "https://wa.me/447537105861",
  },
  themeColor: "#070b18",
  socialProfiles: [] as string[],
  entityIds: {
    organization: "https://teleview.me/#organization",
    website: "https://teleview.me/#website",
    webpage: "https://teleview.me/#webpage",
    product: "https://teleview.me/#product",
    brand: "https://teleview.me/#brand",
  },
} as const;

export type SiteConfig = typeof siteConfig;
