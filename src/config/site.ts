/* ------------------------------------------------------------------
   Central Site Configuration — Single Source of Truth for SEO & Brand
------------------------------------------------------------------- */

export const siteConfig = {
  url: "https://teleview.com",
  name: "Teleview",
  legalName: "Teleview Media",
  tagline: "High-Speed IPTV Subscription & Streaming Service",
  defaultTitle: "Teleview | 2026 Best IPTV Service With 24h Free Trial",
  defaultDescription:
    "Enjoy live sports, news, movies, and shows from around the world. Teleview offers premium streaming with 24/7 customer support and no long-term contracts.",
  logoUrl: "https://teleview.com/favicon.svg",
  socialImage: "/images/teleview-og.jpg",
  language: "en",
  sitemapUrl: "https://teleview.com/sitemap.xml",
  contact: {
    email: "Help@Teleview.Com",
    emailHref: "mailto:Help@Teleview.Com",
    whatsapp: "+447537105861",
    whatsappDisplay: "WhatsApp: +447537105861",
    whatsappHref: "https://wa.me/447537105861",
  },
  themeColor: "#070b18",
  socialProfiles: [] as string[],
  entityIds: {
    organization: "https://teleview.com/#organization",
    website: "https://teleview.com/#website",
    webpage: "https://teleview.com/#webpage",
    product: "https://teleview.com/#product",
    brand: "https://teleview.com/#brand",
  },
} as const;

export type SiteConfig = typeof siteConfig;
