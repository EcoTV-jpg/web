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
  copy: "Experience every thrilling moment with our premium sports streaming. From NHL playoffs to NFL championships, enjoy crystal-clear 4K coverage of all major Canadian and international sports events.",
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
      desc: "NHL, NFL, NBA, MLB, and more",
    },
  ],
  priceText: "$19/month",
  ctaText: "View All Plans",
};

/* Coast to Coast Coverage */
export const coastToCoast = {
  kicker: "We Serve Coast to Coast",
  heading: "Teleview Nationwide & Global Coverage",
  copy: "We serve major cities across Canada and worldwide: Toronto, Montreal, Vancouver, Calgary, Edmonton, Ottawa, Winnipeg, Quebec City, Hamilton, Kitchener, London, Victoria, Halifax, Saskatoon, Regina, Windsor, Mississauga, Brampton, Surrey, Laval, Burnaby, Richmond, Markham, Vaughan, Gatineau, Oakville, Burlington, Barrie, Kelowna, and more. No matter where you live, enjoy premium IPTV streaming with fast activation.",
  cities: [
    "Toronto", "Montreal", "Vancouver", "Calgary", "Edmonton", "Ottawa",
    "Winnipeg", "Quebec City", "Hamilton", "Kitchener", "London", "Victoria",
    "Halifax", "Saskatoon", "Regina", "Windsor", "Mississauga", "Brampton",
    "Surrey", "Laval", "Burnaby", "Richmond", "Markham", "Vaughan",
    "Gatineau", "Oakville", "Burlington", "Barrie", "Kelowna",
  ],
};

/* Frequently Asked Questions */
export const faqHeader = {
  kicker: "Frequently Asked Questions",
  heading: "Discover Premium Teleview IPTV Service",
  subhead: "Find quick answers to common questions about our service, activation, supported devices, and channels.",
};

export const faqs = [
  {
    question: "What is IPTV and how does Teleview work?",
    answer:
      "IPTV (Internet Protocol Television) delivers live television channels and on-demand content through secure internet protocols rather than traditional cable or satellite. With Teleview, simply choose a plan, receive your credentials, and start streaming on any compatible smart device with our high-speed server network.",
  },
  {
    question: "Teleview customer support response time?",
    answer:
      "Our dedicated technical support team is available 24/7 with an average response time of under 15 minutes via live chat and email. We assist with initial setup, app configuration, and channel troubleshooting.",
  },
  {
    question: "How does Premium IPTV streaming work?",
    answer:
      "Our premium streaming infrastructure converts broadcast signals into optimized digital packets delivered through CDN servers worldwide. This ensures lightning-fast channel zapping, 4K Ultra HD resolution, and 99.9% anti-freeze server uptime.",
  },
  {
    question: "Why choose Teleview as IPTV provider?",
    answer:
      "Teleview provides over 15 years of industry excellence, offering 25,000+ live worldwide channels, 120,000+ VOD movies and series, 4K UHD streaming, 99.9% guaranteed uptime, multi-device support, and a risk-free 14-day money-back guarantee.",
  },
  {
    question: "Supported devices for Teleview?",
    answer:
      "Teleview works on Amazon Firestick, Smart TVs (Samsung, LG, Sony, Android TV, VIDAA), Apple TV, iPhones, iPads, Android smartphones and tablets, Windows PC, Mac, MAG boxes, Formuler, BuzzTV, and Roku.",
  },
  {
    question: "Is IPTV Legal in Canada?",
    answer:
      "Yes, using IPTV services in Canada is legal. Teleview complies with international streaming protocols and provides access to legitimate global streams so you can enjoy secure, high-quality entertainment without worries.",
  },
  {
    question: "What devices can I use with Teleview?",
    answer:
      "You can stream Teleview across all popular platforms including Amazon Fire TV, Android TV boxes, Apple TV, Smart TVs with TiviMate or IPTV Smarters Pro, mobile devices, and desktop computers.",
  },
  {
    question: "How do I choose the best IPTV subscription in Canada?",
    answer:
      "Look for providers with high-speed CDN servers, 4K/FHD resolution, comprehensive EPG TV guides, responsive 24/7 support, and no long-term contracts. Teleview's 12-month plan is our most popular choice, offering maximum savings and premium server priority.",
  },
  {
    question: "Can I get a free trial of Teleview?",
    answer:
      "Yes! We offer a 24-hour trial as well as a flexible 1-Month plan backed by our full 14-day money-back guarantee, allowing you to test our channel lineup and server performance completely risk-free.",
  },
  {
    question: "What is the best IPTV player to use with your service?",
    answer:
      "We recommend TiviMate and IPTV Smarters Pro for Firestick and Android devices, IBO Player or Nanomid for Smart TVs, and GSE Smart IPTV or UHF for Apple iOS and tvOS devices. Detailed step-by-step setup tutorials are available in our Setup Guide.",
  },
  {
    question: "How much does IPTV cost compared to cable in Canada?",
    answer:
      "Traditional Canadian cable packages cost between $90 and $180 per month with extra fees for HD boxes and sports tiers. Teleview starts at just $19 per month with no contracts, saving you over $1,200 every year while providing more than 25,000 channels.",
  },
  {
    question: "What sports channels are included with Teleview IPTV?",
    answer:
      "Teleview includes all major Canadian, US, and international sports networks: NHL Center Ice, NFL Sunday Ticket, NBA League Pass, MLB Extra Innings, Premier League, UEFA Champions League, Formula 1, UFC PPV events, TSN, and Sportsnet in 4K.",
  },
  {
    question: "How do I set up IPTV on my device step-by-step?",
    answer:
      "Setting up is fast: 1) Select your plan, 2) Download your preferred IPTV player app (like TiviMate or IPTV Smarters Pro), 3) Enter your server URL and login credentials sent to your email, and 4) Start watching instantly. Check our Setup page for visual guides.",
  },
  {
    question: "Do I need a VPN for IPTV streaming in Canada?",
    answer:
      "A VPN is not required to stream Teleview because our servers use encrypted streaming protocols. However, you are welcome to use a VPN (such as NordVPN or ExpressVPN) for added privacy or if your ISP throttles high-bandwidth video traffic during major sports matches.",
  },
];

/* Ready to Start Streaming Banner */
export const readyBanner = {
  heading: "Ready to Start Streaming?",
  subhead: "Choose the IPTV subscription that fits your needs and get started with Teleview.",
  cta: "View IPTV Plans",
  subtext: "14-Day Money-Back Guarantee · Fast Activation · Customer Support",
};
