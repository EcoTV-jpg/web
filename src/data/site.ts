import type { LucideIcon } from "lucide-react";
import { Tv, Film, Trophy, Users, ShieldCheck, Zap, Headphones, RefreshCw, Smartphone, Monitor } from "lucide-react";
import { siteConfig } from "../config/site";

/* ------------------------------------------------------------------
   Site configuration — re-exported from central siteConfig
------------------------------------------------------------------- */

export const site = {
  name: siteConfig.name,
  tagline: "Premium IPTV subscription and streaming service for customers seeking live TV and on-demand entertainment through compatible devices.",
  whatsapp: siteConfig.contact.whatsapp,
  whatsappDisplay: "+44 7537 105861",
  email: siteConfig.contact.email,
  emailHref: siteConfig.contact.emailHref,
  url: siteConfig.url,
};

/* Hero */
export const hero = {
  kicker: "TELEVIEW IPTV",
  heading: "Best Teleview IPTV Service in 2026",
  subhead:
    "Get instant access to over 25,000 live TV channels and a huge library of on-demand content. Watch in HD or 4K with fast, reliable Teleview IPTV subscription.",
  copy: "Enjoy live sports, news, movies, and shows from around the world. Teleview offers premium streaming with 24/7 support and no long-term contracts. As a premier IPTV provider, we deliver cutting-edge streaming technology with guaranteed 99.9% uptime.",
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

/* Pricing Plans */
export interface Plan {
  name: string;
  price: string;
  originalPrice?: string;
  billingText: string;
  description: string;
  save?: string;
  badge?: string;
  mostValue?: boolean;
  features: string[];
  ctaText?: string;
  guaranteeText?: string;
  deliveryNote?: string;
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
    price: "$19",
    billingText: "$19.00 / month",
    badge: "High Performance Server",
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
    ctaText: "Get this plan",
    guaranteeText: "14-day money-back guarantee",
  },
  {
    name: "3 Months",
    price: "$29",
    billingText: "$9.67 / month",
    badge: "High Performance Server",
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
    ctaText: "Get this plan",
    guaranteeText: "14-day money-back guarantee",
  },
  {
    name: "6 Months",
    price: "$49",
    billingText: "$8.17 / month",
    badge: "High Performance Server",
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
    ctaText: "Get this plan",
    guaranteeText: "14-day money-back guarantee",
  },
  {
    name: "12 Months",
    price: "$79",
    originalPrice: "$228",
    billingText: "$6.58 / month",
    save: "Best Value — Save $149",
    badge: "High Performance Server",
    mostValue: true,
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
    ctaText: "Get this plan",
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

/* Comprehensive 10-Item FAQ List */
export const faqs = [
  {
    question: "What is an IPTV subscription?",
    answer:
      "An IPTV subscription provides access to television and video content delivered over the internet. Depending on the service and plan, this can include live TV, movies, series, sports, and other on-demand programming.",
  },
  {
    question: "How does Teleview IPTV work?",
    answer:
      "After purchasing a subscription, you receive the account or activation information needed to use the service on a compatible device or supported IPTV application. Your viewing experience depends on your internet connection, device, application, and content availability.",
  },
  {
    question: "Which devices support Teleview?",
    answer:
      "Teleview is designed to work with compatible Smart TVs, Android devices, iPhone and iPad, Fire TV and other supported streaming devices, tablets, Windows, Mac, and compatible IPTV applications.",
  },
  {
    question: "Can I use my IPTV subscription on multiple devices?",
    answer:
      "Multi-device availability depends on your selected plan and the number of simultaneous connections included with that plan.",
  },
  {
    question: "Does Teleview offer HD and 4K?",
    answer:
      "HD, Full HD, and 4K quality may be available depending on the content, device, application, and internet connection.",
  },
  {
    question: "How quickly will I receive my IPTV subscription?",
    answer:
      "After successful payment, your login or activation information is sent to the email address provided during checkout.",
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer:
      "Yes. Eligible purchases are covered by a 14-day money-back guarantee according to the applicable refund policy.",
  },
  {
    question: "Does IPTV require an internet connection?",
    answer:
      "Yes. IPTV relies on an internet connection to deliver streaming content. A stable and sufficiently fast connection can help provide a better viewing experience.",
  },
  {
    question: "Is IPTV available in every country?",
    answer:
      "Availability of channels and content varies by region. Teleview provides access to content subject to regional availability and applicable rights.",
  },
  {
    question: "Can you help me install IPTV?",
    answer:
      "Yes. Our support team can assist with setup questions for compatible devices and applications.",
  },
];

/* Ready to Start Streaming Banner */
export const readyBanner = {
  heading: "Ready to Start Streaming?",
  subhead: "Choose the IPTV subscription that fits your needs and get started with Teleview.",
  cta: "View IPTV Plans",
  subtext: "14-Day Money-Back Guarantee · Fast Activation · Customer Support",
};
