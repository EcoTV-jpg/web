/* ------------------------------------------------------------------
   Central Product Data Model — Single Source of Truth
   Powers /iptv-subscription and individual product pages:
   /iptv-subscription/1-month, /3-months, /6-months, /12-months
------------------------------------------------------------------- */

export interface ProductPlanFAQ {
  question: string;
  answer: string;
}

export interface SubscriptionPlan {
  slug: "1-month" | "3-months" | "6-months" | "12-months";
  name: string;
  duration: string;
  months: number;
  price: number;
  currency: "USD";
  monthlyEquivalent: number;
  priceFormatted: string;
  monthlyFormatted: string;
  billingText: string;
  originalPrice?: string;
  saveText?: string;
  badge?: string;
  tagline: string;
  positioning: string;
  audience: string[];
  whyChoose: string;
  expirationInfo: string;
  upgradeInfo: string;
  comparisonWithOthers: string;
  features: string[];
  faqs: ProductPlanFAQ[];
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
}

export const subscriptionPlans: Record<string, SubscriptionPlan> = {
  "1-month": {
    slug: "1-month",
    name: "1 Month IPTV Subscription",
    duration: "1 Month",
    months: 1,
    price: 16,
    currency: "USD",
    monthlyEquivalent: 16,
    priceFormatted: "$16",
    monthlyFormatted: "$16.00 / month",
    billingText: "/ 1 month",
    badge: "Maximum Flexibility",
    tagline: "Short-term streaming flexibility with zero contract and instant access.",
    positioning:
      "Designed for viewers who want full access to all 25,000+ live channels, sports, and on-demand movies without committing to a long-term plan.",
    audience: [
      "Viewers who want to test service stability, channel lineup, and device speed on their home network.",
      "Sports fans wanting coverage for a specific monthly tournament or seasonal event.",
      "Travelers or temporary residents looking for short-term entertainment without contracts.",
      "Budget-conscious streamers who prefer paying month-to-month.",
    ],
    whyChoose:
      "A 1-month subscription delivers full premium access with minimal financial outlay. You get the exact same high-speed CDN server performance, 4K resolution, and 24/7 customer support as longer subscriptions, but with complete freedom to renew or discontinue at month-end.",
    expirationInfo:
      "Your service remains fully active for 30 consecutive days from activation. Because Teleview does not enforce recurring auto-billing, your subscription simply concludes at the end of the term unless you choose to renew or extend.",
    upgradeInfo:
      "Upgrading is seamless. At any time before or after your 30-day term ends, you can switch to a 3-month, 6-month, or 12-month package to lower your effective monthly cost to as little as $7.50/month while preserving your existing configuration.",
    comparisonWithOthers:
      "At $16 for 30 days, the 1-month plan offers the lowest upfront cost. However, if you plan to stream continuously, the 3-month plan reduces your rate to $13.00/mo ($39 total), the 6-month plan to $10.00/mo ($60 total), and the 12-month plan to $7.50/mo ($90 total).",
    features: [
      "4K Ultra HD & FHD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows On-Demand",
      "Major Sports Networks & PPV Included",
      "Smart EPG & Catch-Up TV Features",
      "24/7 Customer Support & Rapid Setup",
      "Compatible With All Major Streaming Apps",
      "Zero Long-Term Contract Or Hidden Fees",
    ],
    faqs: [
      {
        question: "How long does the 1-month IPTV subscription last?",
        answer:
          "The 1-month subscription is valid for exactly 30 calendar days starting from the moment your credentials are generated and sent to your email.",
      },
      {
        question: "Will I be automatically billed again next month?",
        answer:
          "No. We operate with transparent one-time payments. There are no recurring charges or automatic withdrawals. If you wish to continue streaming, you simply purchase a renewal.",
      },
      {
        question: "Can I switch to a longer plan before my 1 month ends?",
        answer:
          "Yes. You can contact support or place an order for a 3, 6, or 12-month subscription at any time. Any remaining time on your active account can be extended seamlessly.",
      },
      {
        question: "Is the channel selection identical to longer plans?",
        answer:
          "Yes, 100%. Every Teleview subscriber enjoys identical access to our full 25,000+ channel catalog, 4K streams, and on-demand video library regardless of subscription length.",
      },
      {
        question: "What happens when my 1-month subscription expires?",
        answer:
          "Upon expiration, stream access will pause. Your account configuration and playlist data are retained for 14 days, allowing you to reactivate instantly without reinstalling your apps.",
      },
    ],
    ctaText: "Choose 1 Month",
    metaTitle: "1 Month IPTV Subscription – $16 | Teleview",
    metaDescription:
      "Get a 1 month IPTV subscription for $16. Enjoy 25,000+ live channels, 4K sports, and 120k+ movies with instant activation, 24/7 support, and no contracts.",
  },

  "3-months": {
    slug: "3-months",
    name: "3 Months IPTV Subscription",
    duration: "3 Months",
    months: 3,
    price: 39,
    currency: "USD",
    monthlyEquivalent: 13,
    priceFormatted: "$39",
    monthlyFormatted: "$13.00 / month",
    billingText: "/ 3 months",
    badge: "Balanced Quarterly Value",
    tagline: "Balanced quarterly entertainment saving you 19% compared to monthly billing.",
    positioning:
      "The ideal middle ground for regular viewers who want meaningful monthly savings without locking into a long-term commitment.",
    audience: [
      "Sports enthusiasts following a full season quarter (NFL regular season, NHL playoffs, Premier League stretches).",
      "Regular TV viewers who want uninterrupted access without the hassle of monthly renewals.",
      "Households looking for a balanced household entertainment budget with predictable quarterly payments.",
      "Users who have tested IPTV and want a dependable mid-length subscription.",
    ],
    whyChoose:
      "At $39 for 90 days, your effective cost drops from $16.00/month to $13.00/month. You save $9 over three individual monthly payments while enjoying 90 consecutive days of uninterrupted 4K sports and global programming.",
    expirationInfo:
      "Your service runs continuously for 90 days from the date of activation. Friendly reminder notices are emailed prior to expiration, giving you ample time to renew or adjust your plan.",
    upgradeInfo:
      "If you discover that 3 months suits your household well, you can easily transition to our 6-month or 12-month tier upon expiration to reduce your monthly cost further down to $10.00/mo or $7.50/mo.",
    comparisonWithOthers:
      "Compared to the 1-month plan ($16), the 3-month package ($39 total) saves you $3 every month. If you are prepared for a longer horizon, our 6-month plan ($60) lowers the monthly cost to $10.00, and the 12-month plan ($90) brings it to $7.50.",
    features: [
      "4K Ultra HD & FHD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows On-Demand",
      "Major Sports Networks & PPV Included",
      "Smart EPG & Catch-Up TV Features",
      "24/7 Priority Customer Support",
      "Compatible With All Major Streaming Apps",
      "Save 19% Compared To Monthly Billing",
    ],
    faqs: [
      {
        question: "How much do I save with the 3-month IPTV plan?",
        answer:
          "Paying $39 for 3 months reduces your cost to $13.00 per month, saving you $9 compared to paying $16 every month individually.",
      },
      {
        question: "How many devices can stream simultaneously?",
        answer:
          "The standard plan includes 1 simultaneous connection. Multi-device options for 2, 3, or 4 simultaneous devices can be selected directly on the checkout screen.",
      },
      {
        question: "Can I use the 3-month subscription on multiple TVs in my house?",
        answer:
          "You can configure your login credentials on multiple devices (e.g. Living Room TV, bedroom Firestick, tablet), streaming on one device at a time, or add simultaneous device slots as needed.",
      },
      {
        question: "When does the 3-month countdown begin?",
        answer:
          "The 90-day countdown begins once your activation details are issued and sent to your email, ensuring you receive the full duration you paid for.",
      },
      {
        question: "What happens if I experience buffering during a major sports event?",
        answer:
          "Our servers use load-balanced multi-CDN architecture with 99.9% uptime. Should any temporary ISP throttling occur, our 24/7 technical team provides alternate server routes instantly.",
      },
    ],
    ctaText: "Choose 3 Months",
    metaTitle: "3 Months IPTV Subscription – $39 ($13/mo) | Teleview",
    metaDescription:
      "Save 19% with a 3 month IPTV subscription for $39 ($13.00/mo). Stream 25,000+ live channels, 4K sports leagues, and on-demand movies with 24/7 support.",
  },

  "6-months": {
    slug: "6-months",
    name: "6 Months IPTV Subscription",
    duration: "6 Months",
    months: 6,
    price: 60,
    currency: "USD",
    monthlyEquivalent: 10,
    priceFormatted: "$60",
    monthlyFormatted: "$10.00 / month",
    billingText: "/ 6 months",
    badge: "Substantial Semi-Annual Savings",
    tagline: "Substantial semi-annual savings dropping your monthly cost to just $10.00.",
    positioning:
      "Designed for committed cord-cutters seeking substantial savings and half a year of uninterrupted family entertainment.",
    audience: [
      "Cord-cutters replacing high-cost traditional cable or satellite packages permanently.",
      "Households wanting reliable everyday live TV and movies without frequent billing cycles.",
      "Expatriates and international families following home news and sports abroad.",
      "Users seeking an exceptional price-to-performance ratio without committing to a full year upfront.",
    ],
    whyChoose:
      "At $60 for 6 months, your effective rate drops to $10.00/month. You save $36 compared to monthly billing while locking in high-performance server priority through major sporting seasons and family movie nights.",
    expirationInfo:
      "Provides 180 continuous days of premium streaming. You will receive helpful reminders 7 days and 3 days before your semi-annual term ends.",
    upgradeInfo:
      "When your 6-month term concludes, you can renew for another 6 months or step up to the 12-month tier at $90 to reduce your cost to our absolute lowest rate of $7.50/month.",
    comparisonWithOthers:
      "At $10.00/month ($60 total), the 6-month plan saves 37.5% compared to paying $16 month-by-month. It provides longer stability than the 3-month plan ($13/mo) while offering a lower upfront payment than the 12-month plan ($90 total).",
    features: [
      "4K Ultra HD & FHD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows On-Demand",
      "Major Sports Networks & PPV Included",
      "Smart EPG & Catch-Up TV Features",
      "24/7 Dedicated Server Priority Support",
      "Compatible With All Major Streaming Apps",
      "Save 37.5% Compared To Monthly Billing",
    ],
    faqs: [
      {
        question: "Why choose 6 months instead of 1 or 3 months?",
        answer:
          "The 6-month plan lowers your monthly rate to $10.00/mo ($60 total), saving $36 versus six single-month purchases. It eliminates the hassle of frequent renewals while offering exceptional value.",
      },
      {
        question: "How does the price compare to traditional cable?",
        answer:
          "Traditional cable television typically costs $90 to $150 per month ($540 to $900 over 6 months). Teleview costs just $60 for the entire half-year, saving you hundreds of dollars.",
      },
      {
        question: "Are pay-per-view (PPV) events included in the 6-month plan?",
        answer:
          "Yes. All major boxing, UFC, wrestling, and international sports PPVs broadcast on our partner channels are included at no additional charge.",
      },
      {
        question: "Can I renew my 6-month subscription before it expires?",
        answer:
          "Yes. Renewing early simply adds 180 days to your existing expiration date. You will not lose any active subscription days.",
      },
      {
        question: "What apps can I use with this subscription?",
        answer:
          "Teleview works with all top IPTV players including TiviMate, IPTV Smarters Pro, IBO Player, XCIPTV, OTT Navigator, GSE Smart IPTV, and smart TV apps.",
      },
    ],
    ctaText: "Choose 6 Months",
    metaTitle: "6 Months IPTV Subscription – $60 ($10/mo) | Teleview",
    metaDescription:
      "Save 37.5% with a 6 month IPTV subscription for $60 ($10.00/mo). Get 25,000+ channels, 4K sports, VOD library, and 99.9% uptime on all devices.",
  },

  "12-months": {
    slug: "12-months",
    name: "12 Months IPTV Subscription",
    duration: "12 Months",
    months: 12,
    price: 90,
    currency: "USD",
    monthlyEquivalent: 7.5,
    priceFormatted: "$90",
    monthlyFormatted: "$7.50 / month",
    billingText: "/ 12 months",
    originalPrice: "$192",
    saveText: "Save $102 — Lowest Monthly Rate",
    badge: "Best Price-Per-Month Option",
    tagline: "Our lowest price-per-month package delivering a full year of 4K streaming for $7.50/mo.",
    positioning:
      "The definitive package for dedicated streamers seeking the lowest possible monthly cost and complete peace of mind with 365 days of uninterrupted service.",
    audience: [
      "Dedicated households replacing traditional cable and streaming services year-round.",
      "Sports superfans wanting guaranteed access through an entire year of multi-league calendars.",
      "Budget-conscious families seeking maximum return on investment and zero renewal friction.",
      "International viewers wanting dependable long-term home country broadcasts.",
    ],
    whyChoose:
      "At $90 for an entire year (365 days), your monthly equivalent drops to just $7.50/month. You save $102 compared to paying the $16 monthly rate 12 times. This represents our highest server tier with prioritized bandwidth allocation.",
    expirationInfo:
      "Your service remains active for 365 days from activation. Renewal reminders are sent 14 days and 3 days prior to expiration. There are zero surprise renewals or hidden fees.",
    upgradeInfo:
      "As our top standard duration, the 12-month plan already provides our absolute lowest cost-per-month. You can extend your subscription at the same preferential rate upon expiration or add multi-device streams.",
    comparisonWithOthers:
      "The 12-month plan offers our deepest savings: $7.50/month versus $10.00/month (6-month plan), $13.00/month (3-month plan), and $16.00/month (1-month plan). Over 12 months, you save $102 compared to month-to-month purchases.",
    features: [
      "4K Ultra HD & FHD Streaming Quality",
      "25,000+ Live Channels Worldwide",
      "120,000+ Movies & TV Shows On-Demand",
      "Major Sports Networks & PPV Included",
      "Smart EPG & Catch-Up TV Features",
      "Dedicated VIP High-Performance Server Priority",
      "Compatible With All Major Streaming Apps",
      "Save Over 53% ($102 Total Savings)",
    ],
    faqs: [
      {
        question: "Why is the 12-month plan the best price-per-month option?",
        answer:
          "At $90 for 12 months, you pay just $7.50 per month. Compared to the $16 monthly rate ($192 over a year), you save $102 upfront with guaranteed locked-in pricing for 365 days.",
      },
      {
        question: "Does the 12-month subscription include server priority?",
        answer:
          "Yes. Annual subscribers are routed through our dedicated high-performance server clusters, ensuring optimal throughput and zero latency during peak global sporting events.",
      },
      {
        question: "Is there a contract or automatic credit card renewal?",
        answer:
          "No. All purchases are strictly one-time payments. We do not store credit card details or perform automatic renewals without your explicit authorization.",
      },
      {
        question: "What if I move or change my internet service provider during the year?",
        answer:
          "Teleview is fully portable. You can use your subscription on any internet connection worldwide without restriction. If your IP address changes, our systems adapt automatically.",
      },
      {
        question: "Does the 14-day money-back guarantee apply to the annual plan?",
        answer:
          "Yes, absolutely. All Teleview plans, including the 12-month plan, are covered by our 14-day satisfaction guarantee.",
      },
    ],
    ctaText: "Choose 12 Months",
    metaTitle: "12 Months IPTV Subscription – $90 ($7.50/mo) | Teleview",
    metaDescription:
      "Get a 12 month IPTV subscription for $90 ($7.50/mo). Save $102 with 25,000+ live channels, 4K sports, VOD library, dedicated server priority, and no contracts.",
  },
};

/* Helper function to get valid product plan by slug */
export function getProductPlan(slug: string): SubscriptionPlan | undefined {
  return subscriptionPlans[slug];
}

/* Array of all plans in canonical order */
export const allSubscriptionPlans = Object.values(subscriptionPlans);

/* Hub Page Data */
export const subscriptionHubData = {
  kicker: "Commercial IPTV Plans & Pricing",
  heading: "IPTV Subscription Plans",
  subhead:
    "Compare all Teleview subscription plans. Choose the duration that matches your viewing habits — from short-term 1-month flexibility to our lowest-cost 12-month annual package.",
  whyChoosePoints: [
    {
      title: "25,000+ Live Worldwide Channels",
      desc: "Access premier local and international broadcasts across sports, news, entertainment, and documentary networks in 4K and FHD.",
    },
    {
      title: "Ultra-Fast Anti-Freeze Infrastructure",
      desc: "Stream with 99.9% guaranteed server uptime backed by worldwide low-latency CDNs and intelligent packet routing.",
    },
    {
      title: "No Long-Term Contracts",
      desc: "Enjoy simple, transparent one-time pricing. No credit card lock-ins, automatic recurring billing, or hidden cancellation fees.",
    },
    {
      title: "Multi-Device Compatibility",
      desc: "Stream effortlessly on Amazon Firestick, Smart TVs, Android boxes, Apple TV, smartphones, tablets, and Windows/Mac PCs.",
    },
  ],
  whatsIncluded: [
    "4K Ultra HD & Full HD Resolution",
    "25,000+ Live TV Channels Globally",
    "120,000+ On-Demand Movies & TV Series",
    "Comprehensive EPG & Catch-Up TV",
    "All Major Sports Leagues & PPV Events",
    "24/7 Technical Support via Live Chat & Email",
    "Fast Activation Upon Confirmed Payment",
    "14-Day Money-Back Guarantee Included",
  ],
  activationSteps: [
    {
      step: "01",
      title: "Select Your Plan",
      desc: "Choose between 1, 3, 6, or 12 months based on your budget and preferred duration.",
    },
    {
      step: "02",
      title: "Receive Credentials",
      desc: "Your M3U playlist URL and Xtream Codes API credentials arrive via email within minutes.",
    },
    {
      step: "03",
      title: "Start Streaming",
      desc: "Enter your credentials into your favorite IPTV player app and enjoy instant access.",
    },
  ],
  hubFaqs: [
    {
      question: "Which IPTV subscription plan is right for me?",
      answer:
        "If you are new to IPTV or want to test your home network, the 1-month plan ($16) offers total flexibility. If you want maximum savings and uninterrupted streaming, the 12-month plan ($90 / $7.50/mo) provides the lowest price-per-month.",
    },
    {
      question: "Are all channels and features included in every plan?",
      answer:
        "Yes. Every plan includes full access to our entire 25,000+ live channel catalog, 120,000+ movies and series, 4K streams, sports networks, and 24/7 customer support.",
    },
    {
      question: "Can I upgrade or extend my subscription later?",
      answer:
        "Yes. You can renew or upgrade to a longer duration at any time without losing your account settings or favorite channel lists.",
    },
    {
      question: "How does the 14-day money-back guarantee work?",
      answer:
        "If you encounter technical issues that our support team cannot resolve within 14 days of purchase, you are eligible for a full refund under our guarantee policy.",
    },
  ],
};
