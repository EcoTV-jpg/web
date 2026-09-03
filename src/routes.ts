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
    path: "/404",
    indexable: false,
    rendering: "Static",
  },
];

export const indexableRoutes = routes.filter((r) => r.indexable);
