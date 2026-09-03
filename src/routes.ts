/* ------------------------------------------------------------------
   Application Route Classification Matrix
------------------------------------------------------------------- */

export interface AppRoute {
  path: string;
  indexable: boolean;
  rendering: "SSG" | "CSR" | "Static";
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  title?: string;
  description?: string;
}

export const routes: AppRoute[] = [
  {
    path: "/",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 1.0,
    title: "Teleview | 2026 Best IPTV Service With 24h Free Trial",
    description:
      "Enjoy live sports, news, movies, and shows from around the world. Teleview offers premium streaming with 24/7 customer support and no long-term contracts.",
  },
  {
    path: "/setup",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    title: "IPTV Setup & Installation Guide | Teleview",
    description:
      "Step-by-step IPTV setup instructions for Teleview on Firestick, Smart TV, Android, iOS, MAG, and Enigma2. Easy installation with Xtream API or M3U playlist.",
  },
  {
    path: "/devices",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    title: "Supported IPTV Devices & Apps | Teleview",
    description:
      "Explore supported hardware and streaming apps for Teleview IPTV. Compatible with Smart TVs, Fire TV, Android Boxes, TiviMate, IPTV Smarters, and more.",
  },
  {
    path: "/faq",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    title: "IPTV Frequently Asked Questions & Support | Teleview",
    description:
      "Find answers to common questions about Teleview IPTV subscriptions, activation times, device rules, internet speed requirements, and refund policies.",
  },
  {
    path: "/iptv-subscription",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.9,
    title: "IPTV Subscription – Plans & Pricing | Teleview",
    description:
      "Compare Teleview IPTV subscription plans. Get 25,000+ live channels, 4K sports, and 120k+ movies from $7.50/mo. Fast activation and 14-day guarantee.",
  },
  {
    path: "/iptv-subscription/1-month",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    title: "1 Month IPTV Subscription – $16 | Teleview",
    description:
      "Get a 1 month IPTV subscription for $16. Enjoy 25,000+ live channels, 4K sports, and 120k+ movies with instant activation, 24/7 support, and no contracts.",
  },
  {
    path: "/iptv-subscription/3-months",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    title: "3 Months IPTV Subscription – $39 ($13/mo) | Teleview",
    description:
      "Save 19% with a 3 month IPTV subscription for $39 ($13.00/mo). Stream 25,000+ live channels, 4K sports leagues, and on-demand movies with 24/7 support.",
  },
  {
    path: "/iptv-subscription/6-months",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    title: "6 Months IPTV Subscription – $60 ($10/mo) | Teleview",
    description:
      "Save 37.5% with a 6 month IPTV subscription for $60 ($10.00/mo). Get 25,000+ channels, 4K sports, VOD library, and 99.9% uptime on all devices.",
  },
  {
    path: "/iptv-subscription/12-months",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    title: "12 Months IPTV Subscription – $90 ($7.50/mo) | Teleview",
    description:
      "Get a 12 month IPTV subscription for $90 ($7.50/mo). Save $102 with 25,000+ live channels, 4K sports, VOD library, dedicated server priority, and no contracts.",
  },
  {
    path: "/pricing",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    title: "IPTV Subscription Plans & Pricing | Teleview",
    description:
      "Compare Teleview IPTV subscription plans. Get 25,000+ live channels, 4K sports, and 120k+ movies from $7.50/mo. Fast activation and 14-day guarantee.",
  },
  {
    path: "/contact",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    title: "Contact Teleview Support | 24/7 Customer Assistance",
    description:
      "Contact Teleview customer support via WhatsApp or email. 24/7 technical assistance for activation, device setup, and subscription inquiries.",
  },
  {
    path: "/404",
    indexable: false,
    rendering: "Static",
  },
];

export const indexableRoutes = routes.filter((r) => r.indexable);
