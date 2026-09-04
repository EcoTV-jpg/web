/* ------------------------------------------------------------------
   Application Route Classification Matrix & SEO Copywriting Registry
------------------------------------------------------------------- */

export interface AppRoute {
  path: string;
  indexable: boolean;
  rendering: "SSG" | "CSR" | "Static";
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
  primaryIntent: string;
  primaryKeyword: string;
  secondaryTopics: string[];
  h1: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  breadcrumbName?: string;
}

export const routes: AppRoute[] = [
  {
    path: "/",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 1.0,
    primaryIntent: "Navigational & Brand Proposition",
    primaryKeyword: "best IPTV service 2026",
    secondaryTopics: [
      "4K live sports streaming",
      "anti-freeze server technology",
      "24h free trial",
      "25,000 live channels",
      "VOD library",
    ],
    h1: "Best IPTV Service in 2026",
    title: "Teleview | 2026 Best IPTV Service With 24h Free Trial",
    description:
      "Stream live sports, international news, and 4K entertainment worldwide. Teleview offers ultra-fast streaming servers, 24/7 support, and no long-term contracts.",
    ogTitle: "Teleview | 2026 Best IPTV Service With 24h Free Trial",
    ogDescription:
      "Experience buffer-free 4K live sports and international television across all your devices with 24/7 dedicated subscriber support.",
    breadcrumbName: "Home",
  },
  {
    path: "/setup",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    primaryIntent: "Informational How-To & Technical Installation",
    primaryKeyword: "IPTV setup guide",
    secondaryTopics: [
      "Firestick installation",
      "Smart TV setup",
      "Xtream Codes API",
      "M3U playlist URL",
      "TiviMate configuration",
    ],
    h1: "IPTV Setup & Installation Guide",
    title: "IPTV Setup & Installation Guide | Teleview",
    description:
      "Step-by-step setup instructions for Teleview on Amazon Firestick, Android TV, Smart TVs, Apple iOS, and MAG boxes. Configure Xtream Codes or M3U in minutes.",
    ogTitle: "How to Set Up Teleview on Firestick, Smart TV, & Mobile",
    ogDescription:
      "Step-by-step installation guides with verified configuration steps for TiviMate, IPTV Smarters, and Smart TV players.",
    breadcrumbName: "Setup & Installation",
  },
  {
    path: "/devices",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    primaryIntent: "Commercial Investigation & Hardware Compatibility",
    primaryKeyword: "supported IPTV devices and apps",
    secondaryTopics: [
      "hardware specifications",
      "Fire TV Stick",
      "Android TV boxes",
      "Apple TV 4K",
      "Smart TV webOS & Tizen",
      "recommended IPTV players",
    ],
    h1: "Supported IPTV Devices & Apps",
    title: "Supported IPTV Devices & Apps | Teleview",
    description:
      "Explore compatible hardware and streaming apps for Teleview. Check minimum specs, RAM recommendations, and recommended players for Fire TV, Android, and Smart TVs.",
    ogTitle: "Supported Streaming Devices & Hardware Specs | Teleview",
    ogDescription:
      "Check device compatibility, recommended hardware requirements, and supported video codecs for smooth 4K streaming.",
    breadcrumbName: "Supported Devices",
  },
  {
    path: "/faq",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    primaryIntent: "Informational & Pre-Purchase Inquiry",
    primaryKeyword: "IPTV frequently asked questions",
    secondaryTopics: [
      "internet speed requirements",
      "free trial activation",
      "device concurrency limits",
      "VPN usage rules",
      "satisfaction guarantee",
    ],
    h1: "Frequently Asked Questions & Support",
    title: "IPTV Frequently Asked Questions & Support | Teleview",
    description:
      "Find clear answers to common questions about Teleview subscriptions, activation speed, internet bandwidth requirements, VPN compatibility, and refunds.",
    ogTitle: "Frequently Asked Questions & Answers | Teleview Support",
    ogDescription:
      "Everything you need to know about Teleview: bandwidth requirements, free trials, multi-device rules, and technical support.",
    breadcrumbName: "FAQ & Support",
  },
  {
    path: "/iptv-subscription",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.9,
    primaryIntent: "Commercial Comparison & Duration Selection",
    primaryKeyword: "IPTV subscription plans",
    secondaryTopics: [
      "tier comparison",
      "duration discounts",
      "multi-device connections",
      "14-day refund guarantee",
      "4K sports channels",
    ],
    h1: "IPTV Subscription Plans & Pricing",
    title: "IPTV Subscription – Plans & Pricing | Teleview",
    description:
      "Compare flexible Teleview IPTV subscription packages from 1 month to 1 year. Instant activation, 4K streaming, 25,000+ channels, and 14-day money-back guarantee.",
    ogTitle: "Compare Teleview IPTV Subscription Plans & Pricing",
    ogDescription:
      "Find the best streaming plan for your home. Compare 1, 3, 6, and 12-month packages with instant activation and verified 4K sports coverage.",
    breadcrumbName: "IPTV Subscription",
  },
  {
    path: "/iptv-subscription/1-month",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    primaryIntent: "Commercial & Short-Term Flexibility",
    primaryKeyword: "1 month IPTV subscription",
    secondaryTopics: [
      "$16 monthly plan",
      "no commitment streaming",
      "instant activation",
      "sports event pass",
      "full channel lineup",
    ],
    h1: "1 Month IPTV Subscription",
    title: "1 Month IPTV Subscription – $16 | Teleview",
    description:
      "Get a 1 month IPTV subscription for $16. Enjoy full access to 25,000+ live channels, 4K sports, and 120k+ movies with instant activation and zero contracts.",
    ogTitle: "1 Month IPTV Subscription for $16 – Instant Activation | Teleview",
    ogDescription:
      "Flexible monthly streaming without locked-in contracts. Full live sports and entertainment access with 24/7 technical support.",
    breadcrumbName: "1 Month",
  },
  {
    path: "/iptv-subscription/3-months",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    primaryIntent: "Commercial & Quarterly Value",
    primaryKeyword: "3 months IPTV subscription",
    secondaryTopics: [
      "$39 quarterly package",
      "$13 per month rate",
      "19% cost savings",
      "sports tournament coverage",
      "continuous playlist",
    ],
    h1: "3 Months IPTV Subscription",
    title: "3 Months IPTV Subscription – $39 ($13/mo) | Teleview",
    description:
      "Save 19% with a 3 month IPTV subscription for $39 ($13.00/mo). Stream 25,000+ live channels, 4K sports leagues, and on-demand movies with dedicated support.",
    ogTitle: "3 Months IPTV Subscription – Save 19% at $13/mo | Teleview",
    ogDescription:
      "Quarterly flexibility at $13.00/month. Stream international tournaments and series without monthly renewal friction.",
    breadcrumbName: "3 Months",
  },
  {
    path: "/iptv-subscription/6-months",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    primaryIntent: "Commercial & Semi-Annual Value",
    primaryKeyword: "6 months IPTV subscription",
    secondaryTopics: [
      "$60 semi-annual plan",
      "$10 per month rate",
      "37.5% cost savings",
      "priority server routing",
      "multi-device streaming",
    ],
    h1: "6 Months IPTV Subscription",
    title: "6 Months IPTV Subscription – $60 ($10/mo) | Teleview",
    description:
      "Save 37.5% with a 6 month IPTV subscription for $60 ($10.00/mo). Get 25,000+ channels, 4K sports, VOD library, and 99.9% uptime on all your devices.",
    ogTitle: "6 Months IPTV Subscription for $60 – $10/mo Semi-Annual Value | Teleview",
    ogDescription:
      "Half a year of uninterrupted 4K sports and worldwide channels at 37.5% off standard monthly rates.",
    breadcrumbName: "6 Months",
  },
  {
    path: "/iptv-subscription/12-months",
    indexable: true,
    rendering: "SSG",
    changefreq: "weekly",
    priority: 0.85,
    primaryIntent: "Commercial & Maximum Annual Savings",
    primaryKeyword: "12 months IPTV subscription",
    secondaryTopics: [
      "$90 annual plan",
      "$7.50 per month rate",
      "save $102",
      "dedicated server priority",
      "annual entertainment pass",
    ],
    h1: "12 Months IPTV Subscription",
    title: "12 Months IPTV Subscription – $90 ($7.50/mo) | Teleview",
    description:
      "Get a 12 month IPTV subscription for $90 ($7.50/mo). Save $102 with 25,000+ live channels, 4K sports, VOD library, dedicated server priority, and no contracts.",
    ogTitle: "12 Months IPTV Subscription – Best Value at $7.50/Month | Teleview",
    ogDescription:
      "Maximize your savings with a full year of premium television for $90. Includes dedicated server priority and 24/7 customer support.",
    breadcrumbName: "12 Months",
  },
  {
    path: "/pricing",
    indexable: false,
    rendering: "Static",
    primaryIntent: "Commercial Redirect Alias",
    primaryKeyword: "IPTV pricing",
    secondaryTopics: ["subscription pricing", "plan costs", "channel packages"],
    h1: "IPTV Subscription Plans & Pricing",
    title: "IPTV Subscription Plans & Pricing | Teleview",
    description:
      "Compare Teleview IPTV subscription plans. Get 25,000+ live channels, 4K sports, and 120k+ movies from $7.50/mo. Fast activation and 14-day guarantee.",
    ogTitle: "Teleview IPTV Pricing & Subscription Packages",
    ogDescription:
      "Compare all IPTV subscription tiers and pricing options from $7.50/mo.",
    breadcrumbName: "Plans & Pricing",
  },
  {
    path: "/contact",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    primaryIntent: "Support & Customer Service Inquiries",
    primaryKeyword: "contact Teleview support",
    secondaryTopics: [
      "WhatsApp live chat",
      "email ticketing desk",
      "activation assistance",
      "24/7 customer service",
    ],
    h1: "Contact Teleview Support",
    title: "Contact Teleview Support | 24/7 Customer Assistance",
    description:
      "Contact Teleview customer support via WhatsApp or email. 24/7 technical assistance for activation, device setup, and subscription inquiries.",
    ogTitle: "Contact Teleview 24/7 Technical Support Desk",
    ogDescription:
      "Direct access to Teleview support agents for instant credential assistance, player setup help, and account renewals.",
    breadcrumbName: "Contact Us",
  },
  {
    path: "/terms-conditions",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.6,
    primaryIntent: "Legal Agreement & Terms of Service",
    primaryKeyword: "Teleview terms and conditions",
    secondaryTopics: [
      "residential service agreement",
      "acceptable use policy",
      "device connection limits",
      "service availability",
    ],
    h1: "Terms & Conditions",
    title: "Terms & Conditions | Teleview IPTV",
    description:
      "Review the Teleview IPTV Terms and Conditions. Learn about our service usage terms, account rules, streaming performance, and subscriber obligations.",
    ogTitle: "Terms & Conditions of Service | Teleview",
    ogDescription:
      "Official terms of service governing subscriber agreements, residential streaming usage, and account policies.",
    breadcrumbName: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.6,
    primaryIntent: "Legal Compliance & Privacy Disclosure",
    primaryKeyword: "Teleview privacy policy",
    secondaryTopics: [
      "GDPR & CCPA compliance",
      "zero viewing logs",
      "TLS encryption",
      "personal data handling",
      "cookie practices",
    ],
    h1: "Privacy Policy",
    title: "Privacy Policy | Teleview IPTV",
    description:
      "Understand how Teleview protects your personal data and privacy. Learn what information we collect, how it is used, and your data protection rights.",
    ogTitle: "Privacy Policy & Data Protection Standards | Teleview",
    ogDescription:
      "Detailed disclosure on subscriber confidentiality, data minimization, and technical security protocols.",
    breadcrumbName: "Privacy Policy",
  },
  {
    path: "/refund-policy",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.6,
    primaryIntent: "Legal Terms & Consumer Protection",
    primaryKeyword: "Teleview refund policy 14 day guarantee",
    secondaryTopics: [
      "14-day money-back guarantee",
      "refund eligibility criteria",
      "processing timeline",
      "technical support qualification",
    ],
    h1: "Refund Policy",
    title: "Refund Policy & 14-Day Guarantee | Teleview IPTV",
    description:
      "Read Teleview's official 14-day refund policy. Clear, transparent guidelines on satisfaction guarantees, eligibility, and how to request a refund.",
    ogTitle: "14-Day Refund Policy & Guarantee Terms | Teleview",
    ogDescription:
      "Transparent terms and step-by-step procedures for requesting a refund under our 14-day satisfaction guarantee.",
    breadcrumbName: "Refund Policy",
  },
  {
    path: "/disclaimer",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.6,
    primaryIntent: "Legal Operational Notice & Technology Clarification",
    primaryKeyword: "Teleview legal disclaimer and technology notice",
    secondaryTopics: [
      "IPTV transmission technology",
      "third-party content aggregation",
      "trademark fair use",
      "subscriber jurisdiction",
    ],
    h1: "Legal Disclaimer",
    title: "Legal Disclaimer & Copyright Notice | Teleview IPTV",
    description:
      "Important legal information regarding Teleview IPTV streaming technology, intellectual property, third-party content, DMCA concerns, and compliance.",
    ogTitle: "Legal Disclaimer & Content Technology Notice | Teleview",
    ogDescription:
      "Notice on streaming protocols, third-party player application compatibility, and subscriber legal compliance.",
    breadcrumbName: "Legal Disclaimer",
  },
  {
    path: "/help-center",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.8,
    primaryIntent: "Informational Troubleshooting & Diagnostic Knowledge Base",
    primaryKeyword: "IPTV troubleshooting and knowledge base",
    secondaryTopics: [
      "HTTP 401 error resolution",
      "HTTP 403 stream locks",
      "M3U timeout fixes",
      "ISP DNS blocking",
      "buffer cache optimization",
    ],
    h1: "Help Center",
    title: "Help Center & Knowledge Base | Teleview IPTV",
    description:
      "Explore comprehensive troubleshooting guides, buffer optimization techniques, and setup tutorials for Teleview IPTV service.",
    ogTitle: "Teleview Help Center & Streaming Troubleshooting Guides",
    ogDescription:
      "Step-by-step diagnostic solutions for buffering, stream timeouts, and connection errors.",
    breadcrumbName: "Help Center",
  },
  {
    path: "/my-account",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.7,
    primaryIntent: "Transactional & Subscriber Self-Service",
    primaryKeyword: "teleview my account subscription portal",
    secondaryTopics: [
      "subscription status verification",
      "Xtream API retrieval",
      "M3U link renewal",
      "order ID lookup",
    ],
    h1: "My Account",
    title: "My Account & Subscription Status | Teleview IPTV",
    description:
      "Check your subscription status, retrieve Xtream API / M3U credentials, or renew your Teleview IPTV service online.",
    ogTitle: "My Account & Subscription Status | Teleview Self-Service",
    ogDescription:
      "Check your active IPTV line status, view expiration dates, and renew your service directly.",
    breadcrumbName: "My Account",
  },
  {
    path: "/dmca",
    indexable: true,
    rendering: "SSG",
    changefreq: "monthly",
    priority: 0.6,
    primaryIntent: "Legal Compliance & Copyright Notice",
    primaryKeyword: "Teleview DMCA notice and copyright policy",
    secondaryTopics: [
      "17 U.S.C. § 512",
      "designated copyright agent",
      "infringement notification",
      "takedown procedure",
      "repeat infringer policy",
    ],
    h1: "DMCA Notice",
    title: "DMCA Notice & Copyright Policy | Teleview IPTV",
    description:
      "Review Teleview's DMCA notice, copyright policies, infringement takedown procedures, and designated copyright agent information.",
    ogTitle: "DMCA Notice & Copyright Infringement Policy | Teleview",
    ogDescription:
      "Official intellectual property compliance, copyright policies, and takedown procedures for Teleview.",
    breadcrumbName: "DMCA Notice",
  },
  {
    path: "/404",
    indexable: false,
    rendering: "Static",
    primaryIntent: "Error Not Found",
    primaryKeyword: "page not found",
    secondaryTopics: ["404 error", "broken link navigation"],
    h1: "Page Not Found",
    title: "404 Not Found | Teleview",
    description: "The requested page could not be found.",
    ogTitle: "404 Not Found | Teleview",
    ogDescription: "The requested page could not be found.",
    breadcrumbName: "404",
  },
];

export const indexableRoutes = routes.filter((r) => r.indexable);

