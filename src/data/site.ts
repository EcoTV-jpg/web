import type { LucideIcon } from "lucide-react";
import { Tv, Film, Trophy, Users, ShieldCheck, Zap, Headphones, RefreshCw, Smartphone, Monitor } from "lucide-react";
import { siteConfig, createWhatsAppOrderUrl, createWhatsAppTrialUrl } from "../config/site";

/* ------------------------------------------------------------------
   Site configuration — re-exported from central siteConfig
------------------------------------------------------------------- */

export const site = {
  name: siteConfig.name,
  tagline: "Premium IPTV subscription and streaming service for customers seeking live TV and on-demand entertainment through compatible devices.",
  whatsapp: siteConfig.contact.whatsapp,
  whatsappDisplay: "+44 7848 197761",
  whatsappHref: siteConfig.contact.whatsappHref,
  email: siteConfig.contact.email,
  emailHref: siteConfig.contact.emailHref,
  url: siteConfig.url,
};

/* Hero */
export const hero = {
  kicker: "TELEVIEW IPTV",
  heading: "IPTV Subscription for Live TV & On-Demand Streaming",
  subhead:
    "Teleview is an IPTV subscription service for live TV and on-demand entertainment, with support for major streaming devices, multiple subscription periods, customer support and 24-hour trial access.",
  copy: "Access over 25,000 live channels, sports broadcasts, and an extensive on-demand library with HD and 4K streams where available. Supported on Smart TVs, Firestick, Android, Apple TV, and computers with transparent one-time pricing.",
  ctaPrimary: "View IPTV Plans",
  ctaSecondary: "Start 24-Hour Trial",
  trustBadges: [
    "Instant Activation",
    "HD & 4K Streams Where Available",
    "24/7 Customer Support",
    "14-Day Money-Back Guarantee",
  ],
};

/* Highlights — Everything You Want to Watch */
export interface Highlight {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const highlightsSection = {
  heading: "Everything You Want to Watch, in One IPTV Service",
  copy: "Teleview brings live television and on-demand entertainment together in one IPTV service. Whether you follow live sports, enjoy movies and series, or want family-friendly entertainment, your subscription gives you access to a broad range of content through supported devices.",
  cta: "Get Started with Teleview",
};

export const highlights: Highlight[] = [
  {
    icon: Tv,
    title: "Live TV",
    copy: "Watch live television across a wide range of categories and regions.",
  },
  {
    icon: Film,
    title: "Movies & Series",
    copy: "Explore an extensive on-demand library with movies and TV series.",
  },
  {
    icon: Trophy,
    title: "Sports",
    copy: "Follow live sporting events and sports programming available through the service.",
  },
  {
    icon: Users,
    title: "Family Entertainment",
    copy: "Find entertainment suitable for different members of your household.",
  },
];

/* Educational What Is IPTV */
export const whatIsIptv = {
  heading: "What Is an IPTV Subscription?",
  copy: "An IPTV subscription provides access to television and video content delivered through an internet connection instead of traditional broadcast, cable, or satellite delivery. With Teleview, your subscription is designed to give you access to live TV and on-demand entertainment through compatible devices and applications. The experience depends on your internet connection, device, application, location, and the availability of specific content.",
};

/* Why Choose Teleview */
export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const whyChoose = {
  heading: "Why Choose Teleview?",
  subhead: "Choosing an IPTV service is about more than the number of channels advertised. A good experience also depends on accessibility, compatibility, support, and a straightforward subscription process.",
  items: [
    {
      icon: Zap,
      title: "Flexible Subscription Plans",
      copy: "Choose a subscription period that fits your viewing needs, from one month to longer-term plans.",
    },
    {
      icon: Smartphone,
      title: "Multi-Device Support",
      copy: "Use the service across supported TVs, phones, tablets, computers, and other compatible devices.",
    },
    {
      icon: Monitor,
      title: "HD, Full HD & 4K",
      copy: "Where supported by the content, device, and connection, enjoy high-quality streaming.",
    },
    {
      icon: RefreshCw,
      title: "Regular Content Updates",
      copy: "The available channel lineup and on-demand library are regularly maintained and updated.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      copy: "Need help with setup or your subscription? Our support team is available to assist you.",
    },
    {
      icon: ShieldCheck,
      title: "14-Day Money-Back Guarantee",
      copy: "If Teleview isn't right for you, eligible purchases can be refunded within 14 days according to our refund policy.",
    },
  ],
};

/* Devices & Coverage */
export const devicesSection = {
  kicker: "Multi-Platform Compatibility",
  heading: "Supported IPTV Streaming Devices",
  subhead:
    "Works with supported Smart TVs, streaming devices, mobile platforms and computers.",
  devices: [
    "Fire TV",
    "Android TV",
    "Apple TV",
    "Samsung",
    "LG",
    "Roku",
    "Chromecast",
    "Nvidia Shield",
    "Windows",
    "VIDAA",
    "Formuler",
    "BuzzTV",
  ],
  note: "Stream smoothly across supported devices with step-by-step setup guides and verified configuration assistance.",
};

export const coverage = {
  heading: "Entertainment From Around the World",
  copy: "Teleview offers access to content from multiple regions, subject to availability and applicable rights. Our service includes channels and programming from regions such as:",
  regions: "United Kingdom · United States · Canada · Portugal · Albania · Germany · Italy · France · Brazil · Romania · Greece · Spain · Ireland · Australia · International broadcasts",
  note: "Channel and content availability may change over time and can vary by region.",
};

export const includedFeatures = {
  heading: "What's Included With Your Teleview Subscription?",
  subhead: "Every plan is designed to provide a straightforward streaming experience.",
  items: [
    "Live TV access",
    "Movies and TV series",
    "HD and 4K streaming where available",
    "Sports programming",
    "Multi-device compatibility",
    "Customer support",
    "Fast account activation",
    "Regular content updates",
    "14-day money-back guarantee",
  ],
  note: "The exact content available to you depends on your plan, region, device, and current service availability.",
};

/* Device section */
export const deviceSection = {
  kicker: "MULTI-PLATFORM COMPATIBILITY",
  heading: "Compatible with All Your Devices",
  subhead:
    "Set up Teleview on your favorite streaming player in minutes. No technical expertise required.",
};

export const deviceCategories = [
  {
    icon: Tv,
    title: "Streaming Devices",
    description: "Amazon Fire TV Stick, Chromecast with Google TV, Roku (select apps), Apple TV, and Android TV boxes.",
  },
  {
    icon: Monitor,
    title: "Smart TVs",
    description: "Samsung (Tizen OS), LG (webOS), Sony, TCL, Hisense, and all Android TV-powered smart televisions.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Tablets",
    description: "iPhone, iPad (iOS), Android smartphones, and Android tablets using your preferred IPTV player app.",
  },
  {
    icon: Monitor,
    title: "Computers & Other",
    description: "Windows PC, Mac, MAG devices, Formuler, and Enigma2 receivers with M3U or Xtream API support.",
  },
];

/* Channels Preview */
export const channelPreview = {
  kicker: "EXTENSIVE ENTERTAINMENT",
  heading: "Entertainment for Everyone",
  subhead: "From championship sports to children's programming, discover channels tailored to your taste.",
};

export const channelCategories = [
  {
    name: "Live Sports",
    count: "500+ Channels",
    description: "Football, basketball, soccer, baseball, hockey, MMA, motorsport, and pay-per-view events.",
  },
  {
    name: "Movies & Cinema",
    count: "1,200+ Channels",
    description: "Dedicated movie channels across all genres: action, comedy, drama, sci-fi, and classics.",
  },
  {
    name: "News & Information",
    count: "300+ Channels",
    description: "24/7 global news networks including CNN, BBC, Sky News, Fox News, CNBC, and regional news.",
  },
  {
    name: "International",
    count: "15,000+ Channels",
    description: "Channels from the UK, US, Canada, Europe, Latin America, Middle East, Asia, and Africa.",
  },
  {
    name: "Kids & Family",
    count: "200+ Channels",
    description: "Cartoons, animated series, educational shows, and family entertainment for all age groups.",
  },
  {
    name: "Documentaries",
    count: "150+ Channels",
    description: "Nature, history, science, crime, and culture from Discovery, Nat Geo, History, and more.",
  },
];

/* Pricing / Plans */
export interface Plan {
  name: string;
  slug?: string;
  price: string;
  originalPrice?: string;
  billingText: string;
  description?: string;
  save?: string;
  badge?: string;
  mostValue?: boolean;
  features: string[];
  ctaText?: string;
  guaranteeText?: string;
  deliveryNote?: string;
  whatsappHref?: string;
}

export const pricingHeader = {
  kicker: "Teleview Pricing",
  heading: "Teleview IPTV Subscription Plans",
  subhead:
    "Choose your ideal Teleview plan with 25,000+ live channels, 4K streaming, and fast activation. All plans include 24/7 customer support, no contracts, and prices in USD (plus applicable taxes at checkout).",
};

export const plans: Plan[] = [
  {
    name: "1 Month",
    slug: "1-month",
    price: "$16",
    billingText: "/ 1 month",
    badge: "High Performance Server",
    whatsappHref: createWhatsAppOrderUrl("1 Month", "16"),
    features: [
      "4K Ultra HD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows",
      "Premium PPV Events Included",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Customer Support",
      "Multi-Device Compatibility",
    ],
    ctaText: "Order on WhatsApp",
    guaranteeText: "14-day money-back guarantee",
  },
  {
    name: "3 Months",
    slug: "3-months",
    price: "$39",
    billingText: "/ 3 months",
    badge: "High Performance Server",
    whatsappHref: createWhatsAppOrderUrl("3 Months", "39"),
    features: [
      "4K Ultra HD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows",
      "Premium PPV Events Included",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Customer Support",
      "Multi-Device Compatibility",
    ],
    ctaText: "Order on WhatsApp",
    guaranteeText: "14-day money-back guarantee",
  },
  {
    name: "6 Months",
    slug: "6-months",
    price: "$60",
    billingText: "/ 6 months",
    badge: "High Performance Server",
    whatsappHref: createWhatsAppOrderUrl("6 Months", "60"),
    features: [
      "4K Ultra HD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows",
      "Premium PPV Events Included",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Customer Support",
      "Multi-Device Compatibility",
    ],
    ctaText: "Order on WhatsApp",
    guaranteeText: "14-day money-back guarantee",
  },
  {
    name: "12 Months",
    slug: "12-months",
    price: "$90",
    originalPrice: "$192",
    billingText: "/ 12 months",
    save: "Best Value — Save $102",
    badge: "High Performance Server",
    mostValue: true,
    whatsappHref: createWhatsAppOrderUrl("12 Months", "90"),
    features: [
      "4K Ultra HD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows",
      "Premium PPV Events Included",
      "Instant VOD Access",
      "Smart EPG & Catch-Up TV",
      "24/7 Customer Support",
      "Multi-Device Compatibility",
    ],
    ctaText: "Order on WhatsApp",
    guaranteeText: "14-day money-back guarantee",
  },
];

/* Deal promo */
export const deal = {
  kicker: "Extended IPTV Subscription Offer",
  heading: "2 Years + 3 Months Free (27 Months Total)",
  copy: "Get 27 full months of continuous streaming access with our extended subscription package.",
  price: "$129",
  oldPrice: "$179",
  save: "Save $50 (28% Discount)",
  note: "27 months total access (24 months + 3 bonus months). Transparent one-time payment with no recurring subscription fees.",
  cta: "Order Deal on WhatsApp",
};

/* How to Buy Steps */
export interface Step {
  label: string;
  title: string;
  copy: string;
}

export const stepsSection = {
  kicker: "How to Get Started",
  heading: "Simple 3-Step Setup Process",
  subhead: "Getting started is simple: choose a plan, complete your order, and follow the setup instructions.",
};

export const steps: Step[] = [
  {
    label: "01",
    title: "Choose Your Plan",
    copy: "Select from our 1, 3, 6, or 12-month plans with 25,000+ live channels, HD and 4K streams where available, across supported devices.",
  },
  {
    label: "02",
    title: "Complete Your Order",
    copy: "Complete your one-time payment securely. Select our popular 12-month package to save $102 compared to 12 individual monthly payments.",
  },
  {
    label: "03",
    title: "Start Watching",
    copy: "Receive your credentials by email or WhatsApp, enter them into your preferred player application, and begin streaming immediately.",
  },
];

/* Setup Support & Guarantee */
export const setupHelp = {
  heading: "Need Help Setting Up Your IPTV Service?",
  copy: "Setting up an IPTV subscription can vary depending on your device and the application you use. Our support team can help you understand the setup process and troubleshoot common subscription or activation issues.",
  prompt: "If you need assistance, contact us and tell us:",
  bullets: [
    "Which device you're using",
    "Which application you're using",
    "The issue you're experiencing",
  ],
  conclusion: "We'll help you find the appropriate next step.",
  cta: "Contact Support",
};

export const guarantee = {
  heading: "14-Day Money-Back Guarantee",
  copy: "We want you to feel confident when choosing your IPTV subscription. Eligible Teleview purchases are covered by a 14-day money-back guarantee. If you're not satisfied with the service, contact our support team within 14 days of your purchase and request a refund according to our refund policy.",
  badges: [
    "No long-term contract.",
    "No hidden subscription renewal.",
    "Clear pricing.",
  ],
};

/* Why Choose Teleview */
export const whyChooseUs = {
  kicker: "Why Choose Teleview",
  heading: "Why Choose Teleview?",
  subhead: "Delivering dependable streaming quality, multi-platform compatibility, and 24/7 customer support.",
  items: [
    {
      title: "Dependable Streaming Quality",
      copy: "Teleview focuses on delivering consistent streaming quality. Our IPTV service utilizes streaming infrastructure designed to support reliable delivery across supported regions, providing responsive playback on your home devices.",
    },
    {
      title: "Service Standards & Transparency",
      copy: "Teleview operates with strict adherence to reliable service standards. IPTV is a delivery technology for television content over the internet; legality depends on the specific content and applicable regional rights. Teleview is intended for access to content you are authorized to view.",
    },
    {
      title: "Broad Player Compatibility",
      copy: "Our IPTV subscription works with leading player applications: fast channel switching, comprehensive electronic program guide (EPG), catch-up TV support, and multi-device capabilities across Smart TVs, streaming boxes, mobile devices, and computers.",
    },
    {
      title: "Clear Pricing & Prompt Support",
      copy: "We offer prompt account activation with credentials delivered upon confirmed payment, no recurring rebilling, transparent one-time pricing, and 24/7 customer support via WhatsApp and email.",
    },
  ],
};

/* Live Sports Feature Section */
export const sportsSection = {
  kicker: "LIVE SPORTS COVERAGE",
  heading: "Follow Live Sports Action Worldwide",
  copy: "Experience live sports programming with high-definition and 4K streams where available, covering major international football, basketball, racing, combat sports, and championships.",
  highlights: [
    {
      title: "Live HD Streams",
      desc: "HD and 4K sports streams where available",
    },
    {
      title: "24/7 Coverage",
      desc: "Around the clock sports entertainment",
    },
    {
      title: "All Major Leagues",
      desc: "Premier League, Champions League, NFL, NBA, NHL, F1, UFC, and more",
    },
  ],
  priceText: "$16/month",
  ctaText: "View All Plans",
};

/* Worldwide Coverage */
export const coastToCoast = {
  kicker: "Multi-Region Availability",
  heading: "Teleview Multi-Region Streaming Coverage",
  copy: "Teleview offers access to content from multiple regions, subject to availability and applicable rights. Our service includes channels and programming from regions such as the United States, United Kingdom, Canada, Australia, Germany, France, Italy, Spain, Portugal, Netherlands, Belgium, Switzerland, Scandinavia, Ireland, Latin America, and international broadcasts.",
  cities: [
    "United States", "United Kingdom", "Canada", "Australia", "Germany", "France",
    "Italy", "Spain", "Portugal", "Netherlands", "Belgium", "Switzerland",
    "Sweden", "Norway", "Denmark", "Ireland", "Brazil", "Mexico",
    "Argentina", "Colombia", "UAE", "Saudi Arabia", "Qatar", "Japan",
    "South Korea", "India", "South Africa", "New Zealand", "Singapore",
  ],
};

/* Frequently Asked Questions */
export const faqHeader = {
  kicker: "Frequently Asked Questions",
  heading: "Discover Teleview IPTV Service",
  subhead: "Find quick, factual answers to common questions about our service, activation, supported devices, and subscription plans.",
};

export const faqs = [
  {
    question: "What is IPTV and how does Teleview work?",
    answer:
      "IPTV (Internet Protocol Television) delivers live television channels and on-demand video over an internet connection instead of cable or satellite. Teleview provisions subscriber credentials (Xtream Codes API or M3U playlist) that you input into your preferred media player app to stream 25,000+ live channels and 120,000+ VOD titles.",
  },
  {
    question: "What customer support channels does Teleview offer?",
    answer:
      "Teleview provides 24/7 customer support via WhatsApp (+44 7848 197761) and email (Help@Teleview.me). Our technical support team assists with credential configuration, player app installation, and playback troubleshooting.",
  },
  {
    question: "How does Teleview IPTV streaming infrastructure work?",
    answer:
      "Teleview uses streaming infrastructure designed to support reliable delivery across supported regions. Live broadcast feeds are ingested, transcoded, and delivered via standard HTTP streaming protocols directly to compatible player applications on your device.",
  },
  {
    question: "Why choose Teleview as your IPTV provider?",
    answer:
      "Teleview offers a stable streaming service with 25,000+ live channels, 120,000+ VOD movies and series, HD and 4K sports streams where available, multi-device support, transparent pricing, and a 14-day money-back guarantee.",
  },
  {
    question: "Which devices and operating systems are supported by Teleview?",
    answer:
      "Teleview supports major streaming platforms including Amazon Fire TV Stick, Smart TVs (Samsung Tizen, LG webOS, Android TV, Google TV), Apple TV (tvOS), iPhone and iPad (iOS), Android mobile devices, Windows PC, Mac, and Formuler receivers.",
  },
  {
    question: "Can I use multiple devices simultaneously on one Teleview subscription?",
    answer:
      "A standard Teleview subscription includes 1 active simultaneous stream, though you may configure your credentials across multiple household devices. Multi-connection options (2, 3, or 4 simultaneous devices) can be selected during ordering or configured via support.",
  },
  {
    question: "Is using Teleview IPTV legal?",
    answer:
      "IPTV is a technology for delivering television and video content over the internet. The legality of a particular service depends on the content being provided and whether the provider has the necessary rights or authorization to distribute it in the applicable region. Teleview is intended for access to content you are authorized to view.",
  },
  {
    question: "How do I choose the best Teleview subscription plan?",
    answer:
      "Choose your Teleview plan based on your viewing horizon: the 1-Month plan ($16) is ideal for testing, the 3-Month plan ($39 / $13.00/mo) aligns with seasonal sports, the 6-Month plan ($60 / $10.00/mo) saves 37.5%, and the 12-Month plan ($90 / $7.50/mo) delivers our lowest monthly rate with $102 in savings compared to monthly purchases.",
  },
  {
    question: "Can I get a free trial of Teleview IPTV?",
    answer:
      "Yes. Teleview offers 24-hour test access upon request via WhatsApp. In addition, all standard subscription plans are covered by a 14-day money-back guarantee so you can evaluate service stability on your home network.",
  },
  {
    question: "What is the best IPTV player application for Teleview?",
    answer:
      "Teleview credentials work across popular player apps: TiviMate and IPTV Smarters Pro on Fire TV and Android devices, IBO Player and SmartOne on Samsung and LG Smart TVs, and IPTV Smarters Pro or GSE Smart IPTV on Apple iOS and tvOS.",
  },
  {
    question: "How much does Teleview IPTV cost compared to cable TV?",
    answer:
      "Teleview pricing starts at $16 per month for a 1-month plan, and decreases to $7.50 per month ($90 total) for a 12-month subscription. By comparison, traditional cable packages often range from $90 to $180 per month with added equipment rentals and broadcast fees. Teleview operates with transparent one-time payments and zero long-term contracts.",
  },
  {
    question: "What live sports coverage is included with Teleview?",
    answer:
      "Teleview includes access to major sports networks and live sporting events covering football, basketball, racing, hockey, baseball, and combat sports with HD and 4K streams where available.",
  },
  {
    question: "How do I set up Teleview IPTV on my device step-by-step?",
    answer:
      "Setting up Teleview involves three steps: 1) Select a subscription plan, 2) Install a compatible player app from your device app store, and 3) Enter your Xtream Codes API credentials sent to your email or WhatsApp to immediately start watching.",
  },
  {
    question: "What internet speed is required for Teleview IPTV streaming?",
    answer:
      "A stable download speed of 10–15 Mbps is recommended for Full HD streams, and 25–30 Mbps for 4K streams where available. Connecting via 5 GHz Wi-Fi or wired Ethernet provides the most reliable streaming experience.",
    link: {
      url: "https://fast.com",
      text: "Test your connection speed on Fast.com →",
    },
  },
  {
    question: "Do I need a VPN to use Teleview IPTV?",
    answer:
      "A VPN is not required to stream Teleview under normal network conditions. However, Teleview is compatible with major VPN services (such as NordVPN, ExpressVPN, or Surfshark) if your ISP throttles streaming bandwidth during live sports matches.",
  },
];

/* Ready to Start Streaming Banner */
export const readyBanner = {
  heading: "Ready to Start Streaming?",
  subhead: "Choose the IPTV subscription that fits your needs and get started with Teleview.",
  cta: "View IPTV Plans",
  subtext: "14-Day Money-Back Guarantee · Fast Activation · Customer Support",
};
