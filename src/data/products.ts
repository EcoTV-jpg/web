/* ------------------------------------------------------------------
   Central Product Data Model — Single Source of Truth
   Powers /iptv-subscription and individual product pages:
   /iptv-subscription/1-month, /3-months, /6-months, /12-months
------------------------------------------------------------------- */

export interface ProductPlanFAQ {
  question: string;
  answer: string;
}

export interface SpecHighlight {
  label: string;
  value: string;
  note: string;
}

export interface DeepDivePillar {
  title: string;
  description: string;
}

export interface SubscriptionPlan {
  slug: "1-month" | "3-months" | "6-months" | "12-months";
  name: string;
  duration: string;
  calendarDays: number;
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
  intentBadge: string;
  tagline: string;
  positioning: string;
  primaryIntentStatement: string;
  audience: string[];
  whyChoose: string;
  expirationInfo: string;
  upgradeInfo: string;
  comparisonWithOthers: string;
  deepDiveTitle: string;
  deepDiveSubtitle: string;
  deepDivePillars: DeepDivePillar[];
  paymentTerms: string;
  guaranteeDetails: string;
  specHighlights: SpecHighlight[];
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
    calendarDays: 30,
    months: 1,
    price: 16,
    currency: "USD",
    monthlyEquivalent: 16,
    priceFormatted: "$16",
    monthlyFormatted: "$16.00 / month",
    billingText: "/ 1 month",
    badge: "Zero-Risk Evaluation",
    intentBadge: "Broadband Benchmark & Tournament Pass",
    tagline: "Short-term streaming flexibility with zero contract, instant access, and full channel catalog.",
    positioning:
      "Designed for viewers who want to test service stability, channel lineup, and device speed on their home network before making a longer commitment.",
    primaryIntentStatement:
      "Benchmark full-catalog streaming quality on your own broadband, verify player app compatibility on your streaming hardware, or enjoy a 30-day single sports tournament pass with zero recurring billing.",
    paymentTerms:
      "Single one-time payment of $16.00. No recurring credit card subscriptions, no hidden activation charges, and no automated renewals. Service runs for exactly 30 calendar days from credential generation.",
    guaranteeDetails:
      "Fully covered by Teleview's 14-day money-back guarantee. If you encounter any technical configuration issues that our 24/7 support team cannot resolve, you are entitled to a complete refund.",
    specHighlights: [
      { label: "Total Cost", value: "$16.00", note: "Lowest entry commitment" },
      { label: "Active Period", value: "30 Days", note: "Continuous calendar access" },
      { label: "Payment Model", value: "One-Time", note: "No automatic rebilling" },
      { label: "Playlist Grace", value: "14 Days", note: "Retained post-expiration" },
    ],
    audience: [
      "Viewers testing real-world stream fluidity and ISP peering during peak evening hours (8 PM – 11 PM).",
      "Cord-cutters evaluating app responsiveness (TiviMate, Smarters) on Amazon Firestick, Android TV, or Smart TVs.",
      "Sports fans wanting dedicated coverage for a specific 30-day tournament, cup final stage, or playoff series.",
      "Travelers, seasonal workers, or temporary tenants requiring immediate TV access with zero cancellation hassle.",
    ],
    whyChoose:
      "A 1-month subscription delivers complete premium access with minimal financial outlay. You get the exact same high-speed multi-CDN server performance, 4K resolution feeds, and 24/7 customer support as multi-month subscriptions, but with complete freedom to renew or discontinue at month-end.",
    deepDiveTitle: "Why the 1-Month Plan is the Ideal ISP & Hardware Benchmark",
    deepDiveSubtitle:
      "How smart cord-cutters use a 30-day pass to verify real-world network throughput, app responsiveness, and streaming reliability before choosing a longer tier.",
    deepDivePillars: [
      {
        title: "Peak-Hour ISP Peering Test",
        description:
          "Internet Service Providers frequently throttle or reprioritize streaming traffic during prime-time hours (8 PM – 11 PM). A 30-day pass allows you to verify that our multi-CDN edge servers deliver smooth, buffer-free playback on your specific home internet connection.",
      },
      {
        title: "Hardware Player Responsiveness",
        description:
          "Test how popular IPTV player applications (such as TiviMate, IPTV Smarters Pro, or IBO Player) perform on your streaming hardware—whether an Amazon Firestick 4K, Android TV box, Apple TV, or Smart TV—before committing to multi-month plans.",
      },
      {
        title: "Single-Event & Tournament Coverage",
        description:
          "If you only need coverage for a specific monthly sports event—such as a soccer cup competition, tennis Grand Slam, playoff series, or championship fight month—the 1-month pass gives you complete access without paying for unused subsequent months.",
      },
      {
        title: "14-Day Playlist Retention Post-Expiry",
        description:
          "When your 30 days conclude, your account configuration, favorite channel groupings, and EPG mapping are retained in our database for 14 days. You can reactivate with a single click or upgrade seamlessly to 3, 6, or 12 months without reconfiguring your apps.",
      },
    ],
    expirationInfo:
      "Your service remains fully active for 30 consecutive days from activation. Because Teleview operates strictly with transparent one-time payments, your subscription simply concludes at the end of the term unless you choose to renew or extend.",
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
        question: "Can I use the 1-month plan to benchmark stream quality on my home ISP?",
        answer:
          "Yes. Many subscribers choose the 1-month plan specifically to test peak-hour streaming stability (8 PM – 11 PM), verify ISP routing, and check player responsiveness on their Amazon Firestick, Android TV, or Apple TV before upgrading to an annual plan.",
      },
      {
        question: "What happens when my 30-day subscription expires?",
        answer:
          "Upon expiration, stream access will pause. Your account configuration and playlist data are retained for 14 days, allowing you to reactivate instantly without reinstalling your apps.",
      },
      {
        question: "How quickly can I upgrade to a 3, 6, or 12-month plan after testing?",
        answer:
          "You can upgrade at any time. Simply contact our 24/7 support team via WhatsApp or select a new duration on the subscription hub. Any remaining active days are carried forward seamlessly.",
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
    calendarDays: 90,
    months: 3,
    price: 39,
    currency: "USD",
    monthlyEquivalent: 13,
    priceFormatted: "$39",
    monthlyFormatted: "$13.00 / month",
    billingText: "/ 3 months",
    saveText: "Save 19% vs Monthly ($9 Saved)",
    badge: "Quarterly Entertainment Value",
    intentBadge: "Seasonal Sports & Tournament Alignment",
    tagline: "Balanced quarterly entertainment saving you 19% compared to monthly billing.",
    positioning:
      "The ideal middle ground for regular viewers who want meaningful monthly savings without locking into a long-term commitment.",
    primaryIntentStatement:
      "Secure continuous 90-day coverage for full sporting tournaments, football league stretches, or seasonal entertainment blocks without monthly renewal drop-offs.",
    paymentTerms:
      "Single one-time payment of $39.00. No recurring credit card charges, no hidden fees, and zero contract obligations. Provides 90 consecutive calendar days of active streaming.",
    guaranteeDetails:
      "Protected by Teleview's 14-day money-back satisfaction guarantee. Our technical operations team provides rapid setup support and server optimization across all your home devices.",
    specHighlights: [
      { label: "Total Cost", value: "$39.00", note: "One-time quarterly payment" },
      { label: "Monthly Rate", value: "$13.00 / mo", note: "19% discount applied" },
      { label: "Active Period", value: "90 Days", note: "Full seasonal calendar" },
      { label: "Upfront Savings", value: "$9.00 Saved", note: "vs 3 individual months" },
    ],
    audience: [
      "Sports enthusiasts following a full season quarter (NFL regular season, NHL playoffs, Premier League stretches).",
      "Regular TV viewers who want uninterrupted access without the hassle of monthly renewals.",
      "Households looking for a balanced entertainment budget with predictable quarterly payments.",
      "Users who have tested IPTV and want a dependable mid-length subscription with volume savings.",
    ],
    whyChoose:
      "At $39 for 90 days, your effective cost drops from $16.00/month to $13.00/month. You save $9 over three individual monthly payments while enjoying 90 consecutive days of uninterrupted 4K sports and global programming without mid-season expiration drop-offs.",
    deepDiveTitle: "Quarterly Alignment: Built for Seasonal Sports & Mid-Term Viewing",
    deepDiveSubtitle:
      "Why the 90-day package represents the sweet spot between upfront affordability, volume savings, and uninterrupted seasonal coverage.",
    deepDivePillars: [
      {
        title: "90-Day Sports Calendar Alignment",
        description:
          "Major athletic competitions rarely fit into a 30-day window. From multi-stage continental soccer tournaments to the NFL regular season stretch and NBA playoff brackets, a 90-day window covers the full trajectory without mid-season expiration anxiety.",
      },
      {
        title: "19% Cost Savings With Low Upfront Cash",
        description:
          "Paying $39 upfront saves you $9 compared to paying $16 three times individually. You capture significant volume savings without committing the larger upfront payment of an annual subscription.",
      },
      {
        title: "Zero Mid-Game Expiration Lockouts",
        description:
          "With month-to-month billing, accounts frequently expire on a weekend afternoon just before a championship match. The 90-day horizon guarantees sustained uptime across dozens of premier sporting weekends.",
      },
      {
        title: "Seamless Household Budgeting",
        description:
          "A predictable $39 quarterly outlay integrates naturally into household utility and entertainment budgeting, providing premium 4K television for less than $0.43 per day.",
      },
    ],
    expirationInfo:
      "Your service runs continuously for 90 days from the date of activation. Friendly reminder notices are emailed prior to expiration, giving you ample time to renew or adjust your plan.",
    upgradeInfo:
      "If you discover that 3 months suits your household well, you can easily transition to our 6-month or 12-month tier upon expiration to reduce your monthly cost further down to $10.00/mo or $7.50/mo.",
    comparisonWithOthers:
      "Compared to the 1-month plan ($16), the 3-month package ($39 total) saves you $3 every month ($9 total). If you are prepared for a longer horizon, our 6-month plan ($60) lowers the monthly cost to $10.00, and the 12-month plan ($90) brings it to $7.50.",
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
        question: "Why is a 3-month IPTV subscription ideal for sports seasons?",
        answer:
          "Most sports seasons, major tournament knockout phases, and playoff series span between two and three months. A 90-day subscription ensures uninterrupted coverage through the decisive matches without needing monthly renewals.",
      },
      {
        question: "How much do I save with the 3-month IPTV plan?",
        answer:
          "Paying $39 for 3 months reduces your cost to $13.00 per month, saving you $9 compared to paying $16 every month individually (a 19% discount).",
      },
      {
        question: "Can I configure my 3-month credentials across multiple home devices?",
        answer:
          "Yes. You can install your playlist or Xtream Codes login across multiple household devices (Firestick in the living room, Smart TV in the bedroom, mobile phone). The standard plan supports 1 active stream at a time; multi-screen upgrades can be selected at checkout.",
      },
      {
        question: "What happens if a sporting tournament extends beyond 90 days?",
        answer:
          "We send courteous renewal reminder notices 7 days before your 90-day period expires. You can easily extend your plan for another 3 months or upgrade to our 6 or 12-month tier without any interruption in service.",
      },
      {
        question: "How does Teleview prevent buffering during high-traffic weekend matches?",
        answer:
          "Teleview utilizes a redundant multi-CDN network with automated load balancing. High-demand events are served across distributed edge nodes with dedicated bandwidth headroom to prevent buffering.",
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
    calendarDays: 180,
    months: 6,
    price: 60,
    currency: "USD",
    monthlyEquivalent: 10,
    priceFormatted: "$60",
    monthlyFormatted: "$10.00 / month",
    billingText: "/ 6 months",
    saveText: "Save 37.5% vs Monthly ($36 Saved)",
    badge: "Semi-Annual Cord-Cutter",
    intentBadge: "Permanent Cable Replacement & Expat Living",
    tagline: "Substantial semi-annual savings dropping your monthly cost to just $10.00.",
    positioning:
      "Designed for committed cord-cutters seeking substantial savings and half a year of uninterrupted family entertainment.",
    primaryIntentStatement:
      "Permanently replace expensive cable contracts with a flat $10/month rate, locking in 180 days of 25,000+ live channels, 4K sports, and on-demand entertainment.",
    paymentTerms:
      "Single one-time payment of $60.00. No contracts, no equipment rental fees, and no recurring credit card charges. Delivers 180 consecutive calendar days of active streaming access.",
    guaranteeDetails:
      "Backed by Teleview's 14-day satisfaction money-back guarantee. Includes priority configuration support for Smart TVs, streaming boxes, and mobile players.",
    specHighlights: [
      { label: "Total Price", value: "$60.00", note: "One-time semi-annual charge" },
      { label: "Monthly Cost", value: "$10.00 / mo", note: "Flat rate milestone" },
      { label: "Cable Savings", value: "$450+ Saved", note: "vs typical cable bills" },
      { label: "Active Period", value: "180 Days", note: "Half-year stability" },
    ],
    audience: [
      "Committed cord-cutters replacing high-cost traditional cable or satellite packages permanently.",
      "Snowbirds, expats, and retirees spending 6 months in second homes, warm climates, or abroad.",
      "Multi-room households needing dependable, daily live TV, news, kids' programming, and cinema releases.",
      "Users seeking an exceptional price-to-performance ratio without committing to a full year upfront.",
    ],
    whyChoose:
      "At $60 for 6 months, your effective rate drops to $10.00/month. You save $36 compared to monthly billing while locking in high-performance server priority through major sporting seasons and family movie nights.",
    deepDiveTitle: "The Economics of Cord-Cutting: 6 Months of Cable Replacement",
    deepDiveSubtitle:
      "How a single $60 semi-annual payment replaces hundreds of dollars in traditional cable packages, box rentals, and regional sports fees.",
    deepDivePillars: [
      {
        title: "Replacing $600+ Cable Invoices",
        description:
          "The average traditional cable or satellite subscriber pays between $90 and $150 per month ($540 to $900 over 6 months) once equipment rentals and broadcast fees are tallied. Teleview provides full access to 25,000+ channels and 120,000+ VOD titles for a single $60 payment.",
      },
      {
        title: "Flat $10.00 Monthly Predictability",
        description:
          "Captures a deep 37.5% discount ($36 saved) without locking you into a full year. At just $10/month, you enjoy premium 4K sports, news, and movies for approximately $0.33 per day.",
      },
      {
        title: "The Expat & Snowbird 180-Day Advantage",
        description:
          "Seasonal residents, international travelers, and expatriates who split their year between locations benefit from a clean 180-day block. Stream home-country channels anywhere in the world on any broadband or Wi-Fi connection.",
      },
      {
        title: "Priority Regional CDN Routing",
        description:
          "Semi-annual accounts are prioritized across our primary North American, European, and international CDN edge nodes, guaranteeing rapid channel zapping and anti-buffering playback.",
      },
    ],
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
        question: "How does the 6-month IPTV plan compare economically to cable TV?",
        answer:
          "Traditional cable packages typically cost between $90 and $150 per month ($540 to $900 over 6 months) plus box rentals and regional fees. Teleview delivers full access for a single $60 payment, saving over $450 in a single half-year.",
      },
      {
        question: "Is the 6-month subscription suitable for expats and seasonal living abroad?",
        answer:
          "Yes. Teleview has no regional IP locks. Whether you are spending winter in a warmer climate or working abroad, your subscription travels with you on any standard broadband, fiber, or mobile internet connection.",
      },
      {
        question: "Are all international sports channels and live PPV broadcasts included?",
        answer:
          "Yes. All major boxing, UFC, wrestling, and international sports PPVs broadcast on our partner channels are included at no additional charge for the entire 180-day duration.",
      },
      {
        question: "How far in advance will I be notified before my 180-day subscription ends?",
        answer:
          "We send automated email notices 7 days and 3 days prior to expiration, giving you ample time to renew or transition without experiencing any service disruption.",
      },
      {
        question: "Which IPTV player apps deliver the best performance for long-term daily use?",
        answer:
          "For long-term daily family use, we recommend TiviMate (on Firestick and Android TV), IPTV Smarters Pro, or IBO Player. These applications offer fast EPG caching, favorites management, and multi-screen capabilities.",
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
    calendarDays: 365,
    months: 12,
    price: 90,
    currency: "USD",
    monthlyEquivalent: 7.5,
    priceFormatted: "$90",
    monthlyFormatted: "$7.50 / month",
    billingText: "/ 12 months",
    originalPrice: "$192",
    saveText: "Save $102 — Lowest Monthly Rate ($7.50/mo)",
    badge: "Best Price-Per-Month Option",
    intentBadge: "Maximum Annual ROI & VIP Cluster Routing",
    tagline: "Our lowest price-per-month package delivering a full year of 4K streaming for $7.50/mo.",
    positioning:
      "The definitive package for dedicated streamers seeking the lowest possible monthly cost and complete peace of mind with 365 days of uninterrupted service.",
    primaryIntentStatement:
      "Maximize annual entertainment savings with our lowest $7.50/month rate, consolidating multiple streaming apps into a single 365-day high-performance package.",
    paymentTerms:
      "Single one-time payment of $90.00. No contracts, no automatic card renewals, and locked-in pricing for 365 full calendar days. Transparent manual renewal when your year concludes.",
    guaranteeDetails:
      "Protected by our full 14-day satisfaction money-back guarantee. Includes dedicated VIP server cluster priority and 24/7 personalized customer support.",
    specHighlights: [
      { label: "Annual Price", value: "$90.00", note: "Lowest rate per month" },
      { label: "Monthly Cost", value: "$7.50 / mo", note: "Over 53% savings applied" },
      { label: "Annual Savings", value: "$102 Saved", note: "vs 12 monthly payments" },
      { label: "Server Tier", value: "VIP Cluster", note: "Prioritized CDN allocation" },
    ],
    audience: [
      "Long-term households consolidating 4+ fragmented streaming subscriptions into one unified platform.",
      "Sports superfans requiring 365-day coverage across every seasonal phase, domestic league, and international championship.",
      "Budget-conscious families seeking maximum return on investment and zero renewal maintenance.",
      "International viewers wanting dependable long-term home country broadcasts.",
    ],
    whyChoose:
      "At $90 for an entire year (365 days), your monthly equivalent drops to just $7.50/month. You save $102 compared to paying the $16 monthly rate 12 times. This represents our highest server tier with prioritized bandwidth allocation.",
    deepDiveTitle: "The Annual Value Benchmark: 365 Days at $7.50 per Month",
    deepDiveSubtitle:
      "Why the 12-month subscription delivers our highest return on investment, server priority, and total entertainment consolidation.",
    deepDivePillars: [
      {
        title: "Multi-App Streaming Consolidation",
        description:
          "Subscribing separately to 4 or 5 streaming services (Netflix, Disney+, sports apps, and live TV packages) easily costs households $720 to $1,200 annually. Teleview unifies 25,000+ live channels and 120,000+ on-demand movies into one $90 annual payment—under $0.25 per day.",
      },
      {
        title: "Complete 365-Day Sporting Calendar",
        description:
          "Never miss pre-season preparation, regular season matchdays, winter tournaments, spring playoffs, and summer international championships. An annual subscription guarantees seamless continuity across Premier League, NFL, NBA, UFC, Formula 1, and Champions League.",
      },
      {
        title: "VIP High-Capacity Server Cluster Priority",
        description:
          "Annual subscribers are automatically provisioned on our high-capacity VIP server clusters with reserved upstream bandwidth, preventing packet loss and buffer delays during the highest-demand global finals.",
      },
      {
        title: "365-Day Locked-In Price Protection",
        description:
          "Protect your household entertainment expenses against mid-year subscription price hikes. Your $90 fee is locked in for 365 days, with preferential grandfathered renewal rates available at expiration.",
      },
    ],
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
        question: "Why does the 12-month subscription offer the lowest price-per-month?",
        answer:
          "At $90 for 12 months, you pay just $7.50 per month. Compared to the $16 monthly rate ($192 over a year), you save $102 upfront with guaranteed locked-in pricing for 365 days (over a 53% discount).",
      },
      {
        question: "What dedicated server routing priority do annual subscribers receive?",
        answer:
          "Annual subscribers are routed through our high-capacity VIP server clusters. These clusters feature dedicated upstream bandwidth reserves, ensuring optimal throughput and zero latency during peak global sporting events.",
      },
      {
        question: "What happens if I switch internet providers or relocate during the 12 months?",
        answer:
          "Teleview is fully portable. You can use your subscription on any internet connection worldwide without restriction. If your IP address changes, our systems adapt automatically without requiring manual re-registration.",
      },
      {
        question: "Does the 14-day satisfaction guarantee cover the entire annual subscription?",
        answer:
          "Yes, absolutely. All Teleview plans, including the 12-month plan, are covered by our 14-day money-back guarantee. If you encounter technical issues our support team cannot resolve, you receive a full refund.",
      },
      {
        question: "Are annual subscription renewal rates guaranteed against price increases?",
        answer:
          "Yes. Active annual subscribers who choose to renew at the end of their 365-day term are grandfathered into their original preferential rate, protecting you from future service price adjustments.",
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
        "Teleview offers four core durations to match your viewing needs: the 1-month plan ($16) provides complete flexibility for short-term testing, the 3-month ($39) and 6-month ($60) plans suit seasonal sports leagues, and the 12-month plan ($90 / $7.50/mo) delivers the maximum 53% discount with VIP server priority.",
    },
    {
      question: "Are all channels and features included in every plan?",
      answer:
        "Yes, every Teleview subscription plan includes identical, unrestricted access to the complete 25,000+ live channel catalog, 120,000+ VOD movies and series, 4K UHD streaming, and 24/7 technical customer support.",
    },
    {
      question: "Can I upgrade or extend my subscription later?",
      answer:
        "Yes, you can extend or upgrade your Teleview subscription at any time without losing your playlist configuration, favorites, or EPG settings.",
    },
    {
      question: "How does the 14-day money-back guarantee work?",
      answer:
        "Teleview provides an unconditional 14-day money-back satisfaction guarantee on every plan. If you experience technical incompatibilities that our support team cannot resolve within 14 days of purchase, request a 100% full refund via WhatsApp or email.",
    },
  ],
};
