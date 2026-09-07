/* ------------------------------------------------------------------
   Teleview IPTV Pricing Architecture & Cost Comparison Registry (2026)
   Commercial investigation data comparing IPTV subscription tiers,
   cost-per-month economics, industry pricing models, and hidden fees.
------------------------------------------------------------------- */

export interface PricingTierComparison {
  planName: string;
  slug: string;
  durationMonths: number;
  totalPrice: number;
  effectiveMonthlyPrice: number;
  savingsPercentage: number;
  connectionCount: number;
  bestFor: string;
  highlights: string[];
}

export interface IndustryPricingModel {
  modelName: string;
  typicalPriceRange: string;
  billingFrequency: string;
  pros: string[];
  cons: string[];
  recommendation: string;
}

export interface PricingFaq {
  question: string;
  answer: string;
}

export const pricingTierComparisons: PricingTierComparison[] = [
  {
    planName: "1 Month IPTV Subscription",
    slug: "1-month",
    durationMonths: 1,
    totalPrice: 16,
    effectiveMonthlyPrice: 16.0,
    savingsPercentage: 0,
    connectionCount: 1,
    bestFor: "Short-term viewers, sports tournaments, and subscribers testing real-world stream stability.",
    highlights: [
      "No long-term contract or recurring auto-renewal trap",
      "Full access to 25,000+ live TV channels & VOD library",
      "4K Ultra HD & 60 FPS live sports feeds",
      "Standard 1-device connection profile",
    ],
  },
  {
    planName: "3 Months IPTV Subscription",
    slug: "3-months",
    durationMonths: 3,
    totalPrice: 39,
    effectiveMonthlyPrice: 13.0,
    savingsPercentage: 19,
    connectionCount: 1,
    bestFor: "Quarterly seasonal sports coverage (Champions League, Premier League, NFL, NBA playoffs).",
    highlights: [
      "Saves 19% compared to three rolling 1-month subscriptions",
      "Guaranteed price lock across the complete quarter",
      "Automated XMLTV program guide with 7-day EPG catchup",
      "Priority customer service & fast activation response",
    ],
  },
  {
    planName: "6 Months IPTV Subscription",
    slug: "6-months",
    durationMonths: 6,
    totalPrice: 60,
    effectiveMonthlyPrice: 10.0,
    savingsPercentage: 38,
    connectionCount: 1,
    bestFor: "Full regular sporting seasons and international households wanting sustained reliability.",
    highlights: [
      "Low $10/month effective cost (saves $36 over rolling monthly)",
      "High-bandwidth server tier with anti-freeze load balancing",
      "All major international regional channel bouquets included",
      "Multi-device compatible (Firestick, Apple TV, Smart TVs, Android)",
    ],
  },
  {
    planName: "12 Months IPTV Subscription",
    slug: "12-months",
    durationMonths: 12,
    totalPrice: 90,
    effectiveMonthlyPrice: 7.5,
    savingsPercentage: 53,
    connectionCount: 1,
    bestFor: "Maximum long-term value for cord-cutters replacing high-cost cable and satellite contracts.",
    highlights: [
      "Lowest effective price at just $7.50 per month (53% discount)",
      "Saves $102 annually compared to individual monthly renewals",
      "Unrestricted 4K UHD sports, premium PPV events & complete VOD",
      "14-day refund protection policy included",
    ],
  },
];

export const industryPricingModels: IndustryPricingModel[] = [
  {
    modelName: "Fixed-Term Pre-Paid Plans (Teleview Standard)",
    typicalPriceRange: "$7.50 – $16.00 / month",
    billingFrequency: "Pre-paid for 1, 3, 6, or 12 months; non-recurring",
    pros: [
      "Zero surprise charges or unwanted recurring credit card billing",
      "Clear volume discounts for longer commitments",
      "Subscribers retain complete control over renewal decisions",
    ],
    cons: [
      "Requires manual payment renewal at expiration",
    ],
    recommendation: "Recommended: provides complete billing transparency without hidden contract lock-in.",
  },
  {
    modelName: "Recurring Auto-Billing Subscriptions",
    typicalPriceRange: "$15.00 – $25.00 / month",
    billingFrequency: "Automated monthly recurring charge",
    pros: [
      "Continuous streaming without manual renewal",
    ],
    cons: [
      "Difficult cancellation processes with hidden recurring merchant IDs",
      "Risk of continuing charges if provider servers go offline",
      "Often charges higher baseline monthly rates without long-term discounts",
    ],
    recommendation: "Exercise caution: verify merchant billing descriptors and ensure self-service cancellation exists.",
  },
  {
    modelName: "Ultra-Low-Cost 'Lifetime' Offers",
    typicalPriceRange: "$30.00 – $60.00 one-time",
    billingFrequency: "Advertised as 'Lifetime'",
    pros: [
      "Appears inexpensive initially",
    ],
    cons: [
      "Economically unsustainable for video streaming server bandwidth",
      "Providers routinely shut down or rebrand within 3 to 6 months",
      "Extreme buffering during high-demand live sports matches",
    ],
    recommendation: "Avoid: legitimate streaming servers require continuous monthly bandwidth and CDN transit expenditure.",
  },
];

export const pricingEvaluationFactors = [
  {
    title: "Server Bandwidth & 60 FPS Sports Encoding",
    description: "Cheap IPTV providers over-subscribe server clusters, causing severe packet loss and buffering during marquee matches. Premium pricing covers dedicated CDN capacity and dedicated 50/60 FPS encoder clusters.",
  },
  {
    title: "EPG (Electronic Program Guide) Maintenance",
    description: "Maintaining accurate 7-day TV guides with dynamic timezone compensation across 25,000+ channels requires dedicated XMLTV scrapers and server infrastructure.",
  },
  {
    title: "Multi-Screen Concurrency",
    description: "Single-connection accounts are standard. Beware providers advertising unlimited simultaneous connections for low prices, as total stream bitrate is inevitably capped or throttled.",
  },
  {
    title: "VOD Infrastructure & Storage",
    description: "Hosting thousands of 4K and 1080p movies and complete television series on high-speed NVMe storage drives adds measurable hosting overhead to subscription pricing.",
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    question: "How much does a reliable IPTV subscription cost in 2026?",
    answer: "A reliable IPTV subscription typically ranges between $10 and $16 per month on short-term plans, and $7.50 to $9 per month on annual plans. Prices significantly lower than this often indicate over-subscribed servers that buffer during live sports, while prices exceeding $25 per month generally reflect inflated markups.",
  },
  {
    question: "Are there any hidden activation fees, equipment charges, or contract cancellation penalties?",
    answer: "No. Teleview has zero activation charges, zero hardware rental fees, and zero cancellation penalties. You pay only the advertised pre-paid price for your chosen duration (1, 3, 6, or 12 months) with no automatic recurring charges.",
  },
  {
    question: "Can I test the IPTV service before paying for a subscription?",
    answer: "Yes. Teleview offers a 24-hour IPTV free trial allowing you to test channel stability, video quality, and player compatibility on your hardware before purchasing any subscription plan.",
  },
  {
    question: "What payment methods are supported for IPTV subscriptions?",
    answer: "Subscriptions can be purchased securely through standard credit and debit cards, major digital payment gateways, and cryptocurrency for subscribers preferring additional payment privacy.",
  },
  {
    question: "Which plan offers the best value for money?",
    answer: "The 12-month subscription provides the greatest value at $90 total ($7.50 per month), representing a 53% discount compared to monthly renewals. However, first-time cord-cutters frequently choose the 1-month plan ($16) or 3-month plan ($39) to verify their viewing preferences.",
  },
];
