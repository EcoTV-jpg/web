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
  heading: "IPTV Service Built for Reliable Everyday Streaming",
  subhead:
    "Watch live TV, sports, movies, and series across compatible devices. Test Teleview on your own broadband connection before committing to a longer plan.",
  copy: "Provisioned with standard Xtream Codes API and M3U playlist credentials for third-party player apps on Firestick, Smart TVs, Android, and Apple TV. Subscriptions include 1 to 4 connections, prompt credential delivery typically within 5–15 minutes, and an official 14-day money-back guarantee.",
  ctaPrimary: "Start 24-Hour Trial",
  ctaSecondary: "View Plans",
  trustBadges: [
    "24-Hour Trial",
    "Xtream & M3U",
    "Prepaid — No Auto-Renewal",
    "Setup Guides",
    "5–15 Min Delivery",
  ],
};

/* Highlights — Everything You Want to Watch */
export interface Highlight {
  icon: LucideIcon;
  title: string;
  copy: string;
}

export const highlightsSection = {
  heading: "25,000+ Live TV Channels and On-Demand Entertainment",
  copy: "Teleview brings live television and on-demand entertainment together in one IPTV service. Whether you follow live sports, enjoy movies and series, or want family-friendly entertainment, your subscription gives you access to a broad range of content through supported devices.",
  cta: "Get Started with Teleview",
};

export const highlights: Highlight[] = [
  {
    icon: Tv,
    title: "Live TV Channels",
    copy: "Access 25,000+ national and international television networks with complete 7-day XMLTV program schedule data.",
  },
  {
    icon: Film,
    title: "Movies & Series (VOD)",
    copy: "Explore 100,000+ on-demand movies and full television series in HD and 4K with multi-language audio and subtitles.",
  },
  {
    icon: Trophy,
    title: "50/60 FPS Sports Feeds",
    copy: "Stream domestic and international football, basketball, motorsports, and combat sports in 50/60 FPS on supported feeds.",
  },
  {
    icon: Users,
    title: "Family Entertainment",
    copy: "Enjoy commercial-free family animation, science documentaries, kids networks, and lifestyle programming for all ages.",
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
  heading: "Watch Teleview on All Compatible Devices",
  subhead:
    "Your IPTV subscription connects smoothly across major streaming platforms—from Amazon Fire Stick and Smart TVs (Samsung & LG) to Android, Apple TV, MAG boxes, and Roku (via screen casting). Enjoy reliable playback with step-by-step setup guides.",
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
    description: "Amazon Fire TV Stick, Chromecast with Google TV, Roku (via screen casting), Apple TV, and Android TV boxes.",
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
    description: "24/7 global news networks covering international headlines, financial markets, weather, and regional news.",
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
    description: "Nature, history, science, investigative crime, wildlife, and cultural documentary programming.",
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
  heading: "IPTV Subscription Plans for Worldwide Streaming",
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
      "100,000+ Movies & TV Shows",
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
      "100,000+ Movies & TV Shows",
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
      "100,000+ Movies & TV Shows",
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
      "100,000+ Movies & TV Shows",
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
  heading: "3 Simple Steps to Start Streaming",
  subhead: "Getting started takes just a few minutes with rapid credential delivery.",
};

export const steps: Step[] = [
  {
    label: "01",
    title: "Choose Your Plan or Test Line",
    copy: "Select from our 1, 3, 6, or 12-month prepaid plans, or request a complimentary 24-hour test line to evaluate streaming performance on your broadband.",
  },
  {
    label: "02",
    title: "Receive Login Credentials",
    copy: "Your credentials are dispatched in 5–15 minutes via WhatsApp or email, containing your Xtream Codes API details (URL, port, username, password) and M3U playlist link.",
  },
  {
    label: "03",
    title: "Connect Your Player & Stream",
    copy: "Input your credentials into your preferred player app (like TiviMate, IPTV Smarters Pro, or IBO Player) on your Firestick, Smart TV, or phone and start watching immediately.",
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
  heading: "Why Teleview Is One of the Best IPTV Services in 2026",
  subhead: "Engineered for stream stability, transparent prepaid billing, and 24/7 technical support across all devices.",
  items: [
    {
      title: "High-Capacity Server Infrastructure",
      copy: "Teleview connects subscribers to high-capacity streaming servers engineered to maintain playback responsiveness during peak evening hours and major live events.",
    },
    {
      title: "High-Framerate 50/60 FPS Sports Feeds",
      copy: "Supported broadcast feeds are encoded in Full HD 1080p at 50/60 FPS, with marquee sporting events available in native 4K Ultra HD where available. H.264 and HEVC codecs deliver smooth motion on compatible devices.",
    },
    {
      title: "Transparent Prepaid Billing & Guarantee",
      copy: "Teleview operates on a 100% prepaid model with zero automatic credit card rebilling, zero hidden hardware rental charges, and zero cancellation penalties. Every plan is backed by an official 14-day technical money-back guarantee.",
    },
    {
      title: "Fast Credential Delivery & 24/7 Support",
      copy: "Receive Xtream Codes API login credentials and custom M3U playlist URLs typically within 5–15 minutes of payment confirmation. Our dedicated technical support team is available via WhatsApp and email to assist with app setup.",
    },
  ],
};

/* Live Sports Feature Section */
export const sportsSection = {
  kicker: "LIVE 4K SPORTS",
  heading: "Never Miss Your Favorite Game Again",
  copy: "Experience live sports action with high-definition and 4K streams where available, covering major international football, basketball, racing, and championships.",
  highlights: [
    {
      title: "Live HD Streams",
      desc: "High-definition and 4K sports streams where available",
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
  heading: "IPTV Streaming Available Worldwide",
  copy: "We serve viewers across the globe: United States, United Kingdom, Canada, Australia, Germany, France, Italy, Spain, Portugal, Netherlands, Belgium, Switzerland, Sweden, Norway, Denmark, Ireland, Brazil, Mexico, UAE, Saudi Arabia, Qatar, Japan, South Korea, India, and more. Enjoy international channel access and on-demand streaming with fast credential delivery.",
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
      "IPTV (Internet Protocol Television) delivers live television channels and on-demand video over an internet connection instead of cable or satellite. Teleview provisions secure subscriber credentials (Xtream Codes API or M3U playlist) that you input into your preferred media player app to stream 25,000+ live channels and 100,000+ VOD titles.",
  },
  {
    question: "What customer support response time does Teleview offer?",
    answer:
      "Teleview provides 24/7 technical customer support with an average response time under 15 minutes via WhatsApp (+44 7848 197761) and email (Help@Teleview.me). Our technical team assists with initial credential setup, app installation, and playback optimization.",
  },
  {
    question: "How does Teleview IPTV streaming infrastructure work?",
    answer:
      "Teleview connects subscribers to high-bandwidth streaming servers. Live broadcast signals are transcoded with modern H.264 and HEVC codecs and delivered via standard HTTP live streaming protocols directly to your compatible player application.",
  },
  {
    question: "Why choose Teleview as your IPTV provider?",
    answer:
      "Teleview offers a comprehensive streaming service with 25,000+ live channels, 100,000+ VOD movies and series, high-definition live sports on supported feeds, multi-device support, and a risk-free 14-day money-back guarantee.",
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
      "IPTV is a streaming technology. Legality depends on content licensing, distribution rights, provider practices, and applicable laws in your jurisdiction. Teleview provisions access to streams over standard IP networks using standard protocols.",
    link: {
      url: "/is-iptv-legal",
      text: "Read our comprehensive IPTV legality guide →",
    },
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
      "Teleview IPTV starts at $16 per month (or down to $7.50 per month on the 12-month plan), compared to traditional cable packages that typically cost between $90 and $180 per month. Subscribers save over $1,000 annually while accessing 25,000+ live channels and 100,000+ on-demand titles.",
  },
  {
    question: "What live sports coverage is included with Teleview?",
    answer:
      "Teleview includes access to global live sports channels covering major football, basketball, racing, and combat events in Full HD and 4K where available.",
  },
  {
    question: "How do I set up Teleview IPTV on my device step-by-step?",
    answer:
      "Setting up Teleview involves three steps: 1) Select a subscription plan, 2) Install a compatible player app (such as TiviMate or IBO Player) from your device app store, and 3) Enter your Xtream Codes API credentials sent to your email or WhatsApp to immediately start watching.",
  },
  {
    question: "What internet speed is required for Teleview IPTV streaming?",
    answer:
      "Teleview requires a minimum stable download speed of 10–15 Mbps for Full HD 1080p channels and 25–30 Mbps for 4K Ultra HD 60 FPS sports broadcasts. Connecting via a 5 GHz Wi-Fi band or wired Ethernet ensures stable playback.",
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
  heading: "See How Teleview Works on Your Setup",
  subhead: "Evaluate channel switching, picture clarity, and sports stability on your actual television and broadband connection.",
  ctaPrimary: "Start 24-Hour Free Trial",
  ctaSecondary: "Compare Subscription Plans",
  badges: [
    "24-Hour Evaluation Pass",
    "Prepaid — No Auto-Renewal",
    "Fast 5–15 Min Delivery",
    "14-Day Guarantee on Plans",
  ],
};

/* ------------------------------------------------------------------
   Structured Homepage Content Data (Consolidated Decision Journey)
------------------------------------------------------------------- */

export const userProblemsAndSolution = {
  kicker: "A BETTER STREAMING EXPERIENCE",
  problemsHeading: "IPTV Shouldn't Mean Constant Troubleshooting",
  problemsSubhead:
    "Streaming television over the internet should be as simple as turning on a TV. We address common streaming friction points directly:",
  problemItems: [
    {
      title: "Peak-Hour Buffering",
      copy: "Streaming servers that stall or freeze right as marquee sports matches or primetime evening broadcasts begin.",
    },
    {
      title: "Complicated Manual Setup",
      copy: "Vague instructions, broken playlist links, and missing program schedule data requiring hours of trial and error.",
    },
    {
      title: "Proprietary App Lock-In",
      copy: "Providers forcing clunky, ad-filled custom applications rather than supporting proven third-party media players.",
    },
    {
      title: "Paying Blindly Upfront",
      copy: "Being pressured into annual commitments before verifying whether streams play smoothly on your home broadband.",
    },
  ],
  solutionHeading: "A Simpler Way to Evaluate IPTV",
  solutionSubhead: "Evaluate our service on your own hardware before committing to any paid plan:",
  solutionSteps: [
    {
      step: "01",
      title: "Request Test Access",
      copy: "Ask for a 24-hour evaluation pass to test live channels, picture quality, and switching responsiveness.",
    },
    {
      step: "02",
      title: "Receive Credentials",
      copy: "Receive standard Xtream Codes API login details and M3U playlist links typically within 5–15 minutes.",
    },
    {
      step: "03",
      title: "Test on Your Setup",
      copy: "Load credentials into your preferred player app on your TV, Firestick, phone, or computer.",
    },
    {
      step: "04",
      title: "Decide with Confidence",
      copy: "Choose a prepaid subscription only after you verify reliable playback on your personal home network.",
    },
  ],
};

export const whatIsIncluded = {
  kicker: "SERVICE SPECIFICATIONS",
  heading: "What's Included with Teleview?",
  subhead:
    "Every plan includes identical, unrestricted access to our full live channel library, on-demand catalog, and core streaming features.",
  items: [
    {
      title: "25,000+ Live Channels",
      copy: "National and international broadcast networks categorized by country and genre with full schedule listings.",
    },
    {
      title: "100,000+ Movies & Series",
      copy: "Extensive on-demand video library updated regularly with multi-language audio tracks and subtitles.",
    },
    {
      title: "High-Definition & 4K Feeds",
      copy: "Broadcast streams available up to 4K Ultra HD where the source broadcast, device decoder, and connection bandwidth support it.",
    },
    {
      title: "50/60 FPS Sports Streams",
      copy: "Select live sporting events encoded at 50/60 frames per second for fluid broadcast motion.",
    },
    {
      title: "7-Day XMLTV EPG",
      copy: "Electronic Program Guide data for channel schedules, program descriptions, and catch-up navigation.",
    },
    {
      title: "Xtream & M3U Formats",
      copy: "Standard Xtream Codes API (URL, port, username, password) and M3U playlist links for broad player support.",
    },
  ],
};

export const freeTrialSection = {
  kicker: "EVALUATE BEFORE YOU BUY",
  heading: "Don't Take Our Word for It. Test It Yourself.",
  subhead:
    "Real-world IPTV performance depends on factors unique to your household: your internet service provider, Wi-Fi routing, streaming hardware, and player software.",
  checklist: [
    "Check your favorite live national and international channels",
    "Test channel zapping and switching responsiveness",
    "Evaluate high-framerate 50/60 FPS sports playback",
    "Verify full 7-day EPG synchronization on your player",
    "Browse the 100,000+ on-demand movie and series catalog",
    "Test compatibility across multiple household devices",
  ],
  ctaPrimary: "Start 24-Hour Free Trial",
  ctaSecondary: "Compare All Plans",
  note: "No credit card required for trial access. Delivery typically takes between 5 to 15 minutes.",
};

export const devicesAndPlayers = {
  kicker: "HARDWARE & SOFTWARE COMPATIBILITY",
  heading: "Will Teleview Work on Your Device & Player?",
  subhead:
    "Teleview connects across major streaming platforms and third-party media players using standard Xtream Codes API and M3U playlist protocols.",
  rokuNote: "Roku devices do not support native IPTV apps and require screen casting or AirPlay.",
  players: [
    {
      name: "TiviMate",
      platform: "Fire TV & Android",
      desc: "Advanced EPG, recording, and customizable multi-screen layouts.",
      href: "/iptv-players/tivimate",
    },
    {
      name: "IPTV Smarters Pro",
      platform: "Android, iOS, Smart TV",
      desc: "Intuitive interface for live TV, movies, series, and multi-user login.",
      href: "/iptv-players/iptv-smarters-pro",
    },
    {
      name: "IBO Player",
      platform: "Samsung & LG TVs",
      desc: "Fast startup and hardware-accelerated playback on Tizen and webOS.",
      href: "/iptv-players/ibo-player",
    },
    {
      name: "OTT Navigator",
      platform: "Android TV & Mobile",
      desc: "Highly configurable buffer controls and automated playlist filtering.",
      href: "/iptv-players/ott-navigator",
    },
    {
      name: "VLC Media Player",
      platform: "Windows, Mac, Linux",
      desc: "Reliable, open-source network stream playback on desktop operating systems.",
      href: "/iptv-players/vlc",
    },
  ],
};

export const planDecisionSupport = {
  kicker: "PLAN COMPARISON",
  heading: "Not Sure Which Plan to Choose?",
  subhead: "Select the subscription duration that best matches your viewing habits and budget:",
  options: [
    {
      name: "1 Month",
      price: "$16",
      effective: "$16.00/mo",
      desc: "Best for short-term evaluation, holiday travel, or watching specific tournament matches without long-term commitment.",
    },
    {
      name: "3 Months",
      price: "$39",
      effective: "$13.00/mo",
      desc: "Popular for following an active sports season, saving 19% compared to monthly renewal.",
    },
    {
      name: "6 Months",
      price: "$60",
      effective: "$10.00/mo",
      desc: "A balanced choice for regular household streaming at a predictable low rate of $10.00 per month.",
    },
    {
      name: "12 Months",
      price: "$90",
      effective: "$7.50/mo",
      desc: "Our lowest effective monthly rate, ideal for viewers seeking year-round streaming stability at maximum savings.",
    },
  ],
};

export const postPurchaseProcess = {
  kicker: "ORDER FULFILLMENT",
  heading: "What Happens After You Order?",
  subhead: "Getting started takes just a few minutes with our structured fulfillment process:",
  steps: [
    {
      step: "01",
      title: "Select Plan & Screens",
      desc: "Choose your preferred prepaid subscription duration and number of simultaneous screens.",
    },
    {
      step: "02",
      title: "Receive Credentials (5–15 Min)",
      desc: "Your Xtream Codes API login and M3U playlist link arrive typically within 5–15 minutes of payment confirmation.",
    },
    {
      step: "03",
      title: "Configure Player App",
      desc: "Input your server address, username, and password into TiviMate, Smarters Pro, or your chosen player.",
    },
    {
      step: "04",
      title: "Start Streaming",
      desc: "Immediate playback across your live channel lineup, 7-day program schedule, and on-demand cinema catalog.",
    },
  ],
};

export const buyerChecklist = {
  kicker: "BUYER'S GUIDE",
  heading: "What to Check Before Choosing an IPTV Service",
  subhead:
    "Whether you evaluate Teleview or another provider, compare these 4 critical technical and operational standards:",
  criteria: [
    {
      criterion: "Connection Formats",
      industry: "Often locked to proprietary apps or restrictive single-device M3U URLs.",
      teleview: "Dual provisioning: standard Xtream Codes API credentials and custom M3U playlist links.",
    },
    {
      criterion: "Server Infrastructure",
      industry: "Single oversold servers prone to buffering, peak-hour throttling, and sudden outages.",
      teleview: "Load-balanced edge server clusters with automated stream failover and daily link validation.",
    },
    {
      criterion: "Refund Terms",
      industry: "Strict 'no refunds' policies once account credentials have been generated.",
      teleview: "Documented 14-day technical money-back guarantee per our published refund policy.",
    },
    {
      criterion: "Customer Support",
      industry: "Unresponsive email contact forms, unmonitored tickets, or automated bot scripts.",
      teleview: "Dedicated technical support desk providing real-time assistance via WhatsApp and email.",
    },
  ],
};

export const trustAndTransparency = {
  kicker: "TRANSPARENT POLICIES",
  heading: "Know What You're Buying Before You Pay",
  subhead: "We operate with clear policies, documented terms, and accessible technical guidance:",
  cards: [
    {
      title: "14-Day Money-Back Guarantee",
      desc: "Eligible purchases are backed by our refund policy if technical incompatibilities cannot be resolved.",
      linkText: "Read Refund Policy",
      href: "/refund-policy",
    },
    {
      title: "Terms of Service & Usage",
      desc: "Transparent terms covering service provisioning, acceptable use, and account responsibilities.",
      linkText: "View Terms of Service",
      href: "/terms-conditions",
    },
    {
      title: "Privacy & Data Protection",
      desc: "We prioritize user privacy with strict data minimization and encryption standards.",
      linkText: "Read Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Technical Help Center",
      desc: "Self-help troubleshooting guides for common buffering, player, and network issues.",
      linkText: "Visit Help Center",
      href: "/help-center",
    },
  ],
};

export const homepageFaqs = [
  {
    question: "What internet speed do I need for smooth streaming?",
    answer:
      "We recommend a stable broadband connection of at least 15–25 Mbps for smooth HD and 4K playback. Using a 5 GHz Wi-Fi band or a direct Ethernet connection minimizes packet loss and buffering during live events.",
    link: {
      url: "/help-center/internet-speed",
      text: "Read our Internet Speed & Network Guide →",
    },
  },
  {
    question: "Can I test Teleview before purchasing a subscription?",
    answer:
      "Yes. Teleview offers a complimentary 24-hour evaluation pass so you can test channel selection, switching speed, and stream stability on your broadband connection before buying.",
    link: {
      url: "/iptv-free-trial",
      text: "Learn more about the 24-hour free trial →",
    },
  },
  {
    question: "Which devices and operating systems are compatible?",
    answer:
      "Teleview works across Amazon Fire TV Stick, Android TV boxes, Google TV, Samsung Smart TVs (Tizen OS), LG Smart TVs (webOS), Apple TV (tvOS), iOS devices, Android smartphones and tablets, and Windows/Mac PCs. Roku devices require screen casting or AirPlay as Roku OS does not support native IPTV player applications.",
    link: {
      url: "/devices",
      text: "View all supported devices & setup guides →",
    },
  },
  {
    question: "Which IPTV player applications do you recommend?",
    answer:
      "We recommend TiviMate and IPTV Smarters Pro for Firestick and Android TV, IBO Player for Samsung and LG Smart TVs, and IPTV Smarters Lite or GSE Smart IPTV for Apple devices. Any player supporting Xtream Codes API or M3U playlists will work.",
    link: {
      url: "/iptv-players",
      text: "Explore supported IPTV players →",
    },
  },
  {
    question: "How many devices can stream simultaneously on one account?",
    answer:
      "Standard Teleview subscriptions include 1 active concurrent connection, allowing you to configure your playlist credentials on multiple personal devices for non-simultaneous viewing. If your household requires streaming on 2, 3, or 4 screens at the same time, multi-connection tiers are available.",
  },
  {
    question: "How long does activation and credential delivery take?",
    answer:
      "Credentials are dispatched typically within 5–15 minutes of order confirmation. You will receive your Xtream Codes API details (Server URL, Port, Username, and Password) along with your M3U playlist link.",
  },
  {
    question: "Does the subscription renew automatically?",
    answer:
      "No. All Teleview plans are 100% prepaid. We do not store payment details or charge recurring subscription fees. We send a courtesy renewal notice before your term expires, leaving you in full control.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Teleview provides an official 14-day technical money-back guarantee. If you experience persistent technical incompatibilities that our support desk cannot resolve within 14 days of purchase, you are eligible for a full refund per our refund policy.",
    link: {
      url: "/refund-policy",
      text: "Read our official 14-Day Refund Policy →",
    },
  },
  {
    question: "Is using Teleview IPTV legal?",
    answer:
      "IPTV is a streaming technology. Legality depends on content licensing, distribution rights, provider practices, and applicable laws in your jurisdiction. Teleview provisions access to streams over standard IP networks using standard protocols.",
    link: {
      url: "/is-iptv-legal",
      text: "Read our comprehensive IPTV legality guide →",
    },
  },
];

