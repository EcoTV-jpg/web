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
  heading: "Best IPTV Service in 2026",
  subhead:
    "Get instant access to over 25,000 live TV channels and a huge library of on-demand content. Watch in HD or 4K with fast, reliable Teleview IPTV subscription.",
  copy: "Enjoy live sports, news, movies, and shows from around the world. Teleview offers premium streaming with 24/7 support and no long-term contracts. Start with a 24-hour free trial — no commitment required.",
  ctaPrimary: "CHOOSE A PLAN",
  ctaSecondary: "View IPTV Plans",
  trustBadges: [
    "Instant Activation",
    "Premium Service",
    "Reliable Streaming",
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
  kicker: "Stream anywhere anytime",
  heading: "Watch Teleview on All Devices",
  subhead:
    "Don’t worry—your IPTV subscription works seamlessly on all smart devices, from Fire Stick and Smart TVs to Android, Apple, Magbox, and Roku. No matter what you use, you’ll enjoy smooth streaming.",
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
  note: "No matter what device you use, you’ll enjoy smooth streaming with complete step-by-step setup guides.",
};

export const coverage = {
  heading: "Entertainment From Around the World",
  copy: "Teleview offers access to content from multiple regions, subject to availability and applicable rights. Our service may include channels and programming associated with regions such as:",
  regions: "United Kingdom · United States · Canada · Portugal · Albania · Germany · Italy · France · Brazil · Romania · Greece · Spain · Ireland · Australia · Arabic-language content",
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
  kicker: "UNLIMITED CONTENT",
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
  heading: "2 Years + 3 Months Free",
  copy: "Get our extended subscription offer for customers who prefer a longer-term plan.",
  price: "$129",
  oldPrice: "$179",
  note: "2 years + 3 months free. This offer is available for a limited time while the promotion remains active.",
  cta: "Get This Deal",
};

/* How to Buy Steps */
export interface Step {
  label: string;
  title: string;
  copy: string;
}

export const stepsSection = {
  kicker: "how to get your IPTV?",
  heading: "3 Easy Steps to Ultimate Entertainment!",
  subhead: "Getting started takes less than 2 minutes with instant activation.",
};

export const steps: Step[] = [
  {
    label: "01",
    title: "Choose Your Plan",
    copy: "Select from our 1, 3, 6, or 12-month plans with 25,000+ live channels in crystal-clear 4K streaming. Watch anywhere, anytime!",
  },
  {
    label: "02",
    title: "Complete Your Order",
    copy: "Secure your subscription with a quick payment. Go for our popular 12-month package and save $20 - our subscribers' top choice!",
  },
  {
    label: "03",
    title: "Start Watching!",
    copy: "Check your email for login details, grab your favorite snacks, and dive into endless entertainment on all your devices!",
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

/* Why We're the #1 IPTV Provider */
export const whyChooseUs = {
  kicker: "Why We're the #1 IPTV Provider",
  heading: "Why Choose Teleview?",
  subhead: "Delivering streaming excellence, verified reliability, and 24/7 support for over 15 years.",
  items: [
    {
      title: "Premium IPTV Experience",
      copy: "At Teleview, we’re recognized as the best IPTV provider, delivering premium streaming excellence for over 15 years. Our IPTV service combines superior technology with unmatched reliability, featuring 99.9% guaranteed uptime and zero-buffering streaming across all devices.",
    },
    {
      title: "Reliable & Secure Service",
      copy: "What sets our IPTV service apart is our commitment to service standards and customer satisfaction. We operate with strict adherence to reliable broadcasting standards, ensuring your subscription is completely legitimate and secure. Our advanced streaming infrastructure delivers crystal-clear 4K content without interruptions, backed by our technical support team available 24/7.",
    },
    {
      title: "Advanced Streaming Features",
      copy: "Our IPTV subscription includes industry-leading features: instant channel switching, comprehensive electronic program guide (EPG), catch-up TV functionality, and multi-device streaming capabilities. Whether you’re watching on Smart TV, Android box, or mobile device, you’ll experience the same premium quality that thousands of families trust daily.",
    },
    {
      title: "Fast & Flexible Activation",
      copy: "We offer fast activation with credentials delivered immediately upon confirmed payment, no long-term contracts, and transparent pricing. Join the growing community of satisfied customers who’ve discovered why Teleview remains the top-rated IPTV provider for reliability, quality, and customer service excellence.",
    },
  ],
};

/* Live Sports Feature Section */
export const sportsSection = {
  kicker: "LIVE 4K SPORTS",
  heading: "Never Miss Your Favorite Game Again",
  copy: "Experience every thrilling moment with our premium sports streaming. From UEFA Champions League to NFL championships, Premier League to NHL playoffs, enjoy crystal-clear 4K coverage of all major worldwide sports events.",
  highlights: [
    {
      title: "Live HD Streams",
      desc: "Crystal clear 4K quality for every game",
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
  kicker: "Worldwide Streaming Network",
  heading: "Teleview Global Streaming Coverage",
  copy: "We serve viewers across the globe with high-speed CDN edge servers: United States, United Kingdom, Canada, Australia, Germany, France, Italy, Spain, Portugal, Netherlands, Belgium, Switzerland, Sweden, Norway, Denmark, Ireland, Brazil, Mexico, UAE, Saudi Arabia, Qatar, Japan, South Korea, India, and more. No matter where you live, enjoy premium 4K IPTV streaming with fast activation.",
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
  heading: "Discover Premium Teleview IPTV Service",
  subhead: "Find quick answers to common questions about our service, activation, supported devices, and channels worldwide.",
};

export const faqs = [
  {
    question: "What is IPTV and how does Teleview work?",
    answer:
      "IPTV (Internet Protocol Television) delivers live television channels and on-demand video over an internet connection instead of cable or satellite. Teleview provisions secure subscriber credentials (Xtream Codes API or M3U playlist) that you input into your preferred media player app to stream 25,000+ live channels and 120,000+ VOD titles.",
  },
  {
    question: "What customer support response time does Teleview offer?",
    answer:
      "Teleview provides 24/7 technical customer support with an average response time under 15 minutes via WhatsApp (+44 7848 197761) and email (Help@Teleview.me). Our technical team assists with initial credential setup, app installation, and playback optimization.",
  },
  {
    question: "How does Teleview IPTV streaming infrastructure work?",
    answer:
      "Teleview operates a globally distributed Content Delivery Network (CDN) with automated load balancing and 99.9% server uptime. Live broadcast signals are ingested, transcoded with dedicated hardware encoders, and delivered via low-latency HTTP streams directly to your device.",
  },
  {
    question: "Why choose Teleview as your IPTV provider?",
    answer:
      "Teleview offers a stable global streaming service with 25,000+ live channels, 120,000+ VOD movies and series, true 4K UHD sports at 60 FPS, anti-freeze edge routing, multi-device support, and a risk-free 14-day money-back guarantee.",
  },
  {
    question: "Which devices and operating systems are supported by Teleview?",
    answer:
      "Teleview supports all major platforms including Amazon Fire TV Stick, Smart TVs (Samsung Tizen, LG webOS, Android TV, Google TV), Apple TV (tvOS), iPhone and iPad (iOS), Android mobile devices, Windows PC, Mac, MAG 322/524 boxes, and Formuler receivers.",
  },
  {
    question: "Can I use multiple devices simultaneously on one Teleview subscription?",
    answer:
      "A standard Teleview subscription includes 1 active simultaneous stream, though you may configure your credentials on unlimited devices. If multiple family members wish to stream at the same time, multi-connection options (2, 3, or 4 simultaneous devices) can be arranged with our support team.",
  },
  {
    question: "Is using Teleview IPTV legal?",
    answer:
      "Yes, streaming IPTV services is legal. Teleview complies with international streaming protocols and provides access to public broadcasts and global channels over standard IP networks.",
  },
  {
    question: "How do I choose the best Teleview subscription plan?",
    answer:
      "Choose your Teleview plan based on viewing commitment: the 1-Month plan ($16) is ideal for testing, the 3-Month plan ($39) suits seasonal sports, while the 12-Month plan ($90 / $7.50/mo) provides maximum value and priority server allocation during high-traffic global events.",
  },
  {
    question: "Can I get a free trial of Teleview IPTV?",
    answer:
      "Yes, Teleview offers 24-hour test access upon request via WhatsApp, as well as a 1-Month plan fully backed by a 14-day money-back guarantee so you can test our channel library and streaming stability risk-free.",
  },
  {
    question: "What is the best IPTV player application for Teleview?",
    answer:
      "Teleview recommends TiviMate and IPTV Smarters Pro for Fire TV and Android devices, IBO Player for Samsung and LG Smart TVs, and IPTV Smarters Lite or GSE Smart IPTV for Apple iOS and tvOS. Comprehensive tutorials are available in our Setup Guide.",
  },
  {
    question: "How much does Teleview IPTV cost compared to cable TV?",
    answer:
      "Teleview IPTV starts at $16 per month (or down to $7.50 per month on the 12-month plan), compared to traditional cable packages that typically cost between $90 and $180 per month. Subscribers save over $1,000 annually while accessing 25,000+ live channels and 120,000+ on-demand titles.",
  },
  {
    question: "What live sports coverage is included with Teleview?",
    answer:
      "Teleview includes comprehensive global sports coverage including Premier League, UEFA Champions League, NFL, NBA, Formula 1, UFC PPV events, NHL, MLB, tennis grand slams, and international cricket in Full HD and 4K 60 FPS.",
  },
  {
    question: "How do I set up Teleview IPTV on my device step-by-step?",
    answer:
      "Setting up Teleview involves three steps: 1) Select a subscription plan, 2) Install a compatible player app (such as TiviMate or IBO Player) from your device app store, and 3) Enter your Xtream Codes API credentials sent to your email or WhatsApp to immediately start watching.",
  },
  {
    question: "What internet speed is required for Teleview IPTV streaming?",
    answer:
      "Teleview requires a minimum stable download speed of 10–15 Mbps for Full HD 1080p channels and 25–30 Mbps for 4K Ultra HD 60 FPS sports broadcasts. Connecting via a 5 GHz Wi-Fi band or wired Ethernet ensures buffer-free playback.",
    link: {
      url: "https://fast.com",
      text: "Test your connection speed on Fast.com →",
    },
  },
  {
    question: "Do I need a VPN to use Teleview IPTV?",
    answer:
      "A VPN is not required to stream Teleview as our servers use encrypted streaming endpoints. However, Teleview is 100% VPN-compatible (supporting NordVPN, ExpressVPN, Surfshark) if your ISP throttles streaming bandwidth during live sports matches.",
  },
];

/* Ready to Start Streaming Banner */
export const readyBanner = {
  heading: "Ready to Start Streaming?",
  subhead: "Choose the IPTV subscription that fits your needs and get started with Teleview.",
  cta: "View IPTV Plans",
  subtext: "14-Day Money-Back Guarantee · Fast Activation · Customer Support",
};
