/* ------------------------------------------------------------------
   Central Site Configuration — Single Source of Truth for SEO & Brand
------------------------------------------------------------------- */

export const siteConfig = {
  url: "https://www.teleview.me",
  name: "Teleview",
  legalName: "Teleview Media",
  tagline: "High-Speed IPTV Subscription & Streaming Service",
  defaultTitle: "Teleview | 2026 Best IPTV Service With 24h Free Trial",
  defaultDescription:
    "Enjoy live sports, news, movies, and shows from around the world. Teleview offers premium streaming with 24/7 customer support and no long-term contracts.",
  logoUrl: "https://www.teleview.me/favicon.svg",
  socialImage: "/images/teleview-og.jpg",
  language: "en",
  sitemapUrl: "https://www.teleview.me/sitemap.xml",
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
