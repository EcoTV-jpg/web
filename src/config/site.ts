/* ------------------------------------------------------------------
   Central Site Configuration — Single Source of Truth for SEO & Brand
------------------------------------------------------------------- */

export const siteConfig = {
  url: "https://teleview.com",
  name: "Teleview",
  legalName: "Teleview Media",
  tagline: "High-Speed IPTV Subscription & Streaming Service",
  defaultTitle: "Teleview | Premium IPTV Subscription — Endless Entertainment",
  defaultDescription:
    "Enjoy Teleview's premium IPTV subscription with 54,000+ live channels, sports, and 4K on-demand streaming. Fast activation with a 14-day money-back guarantee.",
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
