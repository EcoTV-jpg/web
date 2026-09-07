/* ------------------------------------------------------------------
   Teleview IPTV Pricing Architecture & Cost Comparison Registry (2026)
   Commercial investigation data comparing IPTV subscription tiers,
   cost-per-month economics, industry pricing models, and hidden fees.
   Synchronized directly with canonical product data in products.ts.
------------------------------------------------------------------- */

import { subscriptionPlans } from "./products";

export interface PricingTierComparison {
  planName: string;
  slug: "1-month" | "3-months" | "6-months" | "12-months";
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

export interface PricingGlanceMetric {
  label: string;
  value: string;
  detail: string;
}

export interface FeatureInclusionItem {
  feature: string;
  included: boolean;
  notes: string;
}

export interface CostComparisonRow {
  category: string;
  cableSatellite: string;
  televiewIptv: string;
  annualSavings: string;
}

// Single Source of Truth: Derive mathematically from subscriptionPlans in products.ts
const p1 = subscriptionPlans["1-month"];
const p3 = subscriptionPlans["3-months"];
const p6 = subscriptionPlans["6-months"];
const p12 = subscriptionPlans["12-months"];

export const pricingTierComparisons: PricingTierComparison[] = [
  {
    planName: p1.name,
    slug: p1.slug,
    durationMonths: p1.months,
    totalPrice: p1.price,
    effectiveMonthlyPrice: Number((p1.price / p1.months).toFixed(2)),
    savingsPercentage: 0,
    connectionCount: 1,
    bestFor: "Short-term testing, tournament passes, and benchmarking home broadband stability.",
    highlights: [
      "Zero contract lock-in or automated recurring charges",
      "Full access to 25,000+ live TV channels & VOD catalog",
      "4K Ultra HD & 60 FPS live sports feeds",
      "Standard 1-device active connection profile",
    ],
  },
  {
    planName: p3.name,
    slug: p3.slug,
    durationMonths: p3.months,
    totalPrice: p3.price,
    effectiveMonthlyPrice: Number((p3.price / p3.months).toFixed(2)),
    savingsPercentage: Math.round(((p1.price * 3 - p3.price) / (p1.price * 3)) * 100),
    connectionCount: 1,
    bestFor: "Quarterly sports coverage (Champions League, Premier League, NFL, NBA playoffs).",
    highlights: [
      `Saves $${p1.price * 3 - p3.price} (19%) compared to three 1-month renewals`,
      "Guaranteed price lock across the entire quarter",
      "Automated XMLTV program guide with 7-day EPG catch-up",
      "Priority customer service & fast activation dispatch",
    ],
  },
  {
    planName: p6.name,
    slug: p6.slug,
    durationMonths: p6.months,
    totalPrice: p6.price,
    effectiveMonthlyPrice: Number((p6.price / p6.months).toFixed(2)),
    savingsPercentage: Math.round(((p1.price * 6 - p6.price) / (p1.price * 6)) * 100),
    connectionCount: 1,
    bestFor: "Regular sporting seasons and multi-month household streaming reliability.",
    highlights: [
      `Low $${(p6.price / p6.months).toFixed(2)}/month effective rate (saves $${p1.price * 6 - p6.price} over monthly)`,
      "High-bandwidth server tier with anti-freeze load balancing",
      "All major international regional channel bouquets included",
      "Multi-device compatible (Firestick, Apple TV, Smart TVs, Android)",
    ],
  },
  {
    planName: p12.name,
    slug: p12.slug,
    durationMonths: p12.months,
    totalPrice: p12.price,
    effectiveMonthlyPrice: Number((p12.price / p12.months).toFixed(2)),
    savingsPercentage: Math.round(((p1.price * 12 - p12.price) / (p1.price * 12)) * 100),
    connectionCount: 1,
    bestFor: "Maximum long-term value for cord-cutters replacing traditional cable contracts.",
    highlights: [
      `Lowest effective price at just $${(p12.price / p12.months).toFixed(2)} per month (53% discount)`,
      `Saves $${p1.price * 12 - p12.price} annually compared to individual monthly renewals`,
      "Unrestricted 4K UHD sports, premium PPV events & full VOD library",
      "14-day money-back guarantee protection included",
    ],
  },
];

export const pricingGlanceMetrics: PricingGlanceMetric[] = [
  {
    label: "Lowest Effective Rate",
    value: `$${(p12.price / p12.months).toFixed(2)} / mo`,
    detail: "On 12-month annual subscription",
  },
  {
    label: "Shortest Entry Commitment",
    value: `$${p1.price.toFixed(2)}`,
    detail: "Full 30-day non-recurring pass",
  },
  {
    label: "Maximum Volume Discount",
    value: "53% Savings",
    detail: `$${p1.price * 12 - p12.price} saved vs monthly renewals`,
  },
  {
    label: "Billing Model",
    value: "100% Pre-Paid",
    detail: "Zero auto-rebilling or credit card lock-in",
  },
  {
    label: "Trial Availability",
    value: "24-Hour Free Pass",
    detail: "No payment details required",
  },
  {
    label: "Satisfaction Guarantee",
    value: "14-Day Refund",
    detail: "Full technical refund policy",
  },
];

export const featureInclusions: FeatureInclusionItem[] = [
  {
    feature: "25,000+ Global Live TV Channels (HD, FHD, 4K)",
    included: true,
    notes: "Included across all 1, 3, 6, and 12-month subscription tiers.",
  },
  {
    feature: "100,000+ On-Demand Movies & TV Series",
    included: true,
    notes: "Updated weekly with multi-language audio tracks and subtitles.",
  },
  {
    feature: "7-Day XMLTV Electronic Program Guide (EPG)",
    included: true,
    notes: "Automated schedule syncing with dynamic timezone compensation.",
  },
  {
    feature: "Xtream Codes API & M3U Playlist Streaming Credentials",
    included: true,
    notes: "Direct server URL, port, username, password, and custom M3U links.",
  },
  {
    feature: "Anti-Freeze Edge CDN Routing Architecture",
    included: true,
    notes: "Distributed edge network optimized to prevent prime-time stutter.",
  },
  {
    feature: "24/7 Technical Support via WhatsApp & Email",
    included: true,
    notes: "Real technical staff for app configuration and playlist troubleshooting.",
  },
  {
    feature: "Third-Party Player App Premium Activations",
    included: false,
    notes: "Teleview provides stream credentials. Independent apps (TiviMate Premium, IBO Player) have separate developer license fees.",
  },
  {
    feature: "Dedicated Streaming Hardware",
    included: false,
    notes: "Use your existing television, Amazon Firestick, Apple TV, phone, or Android box.",
  },
  {
    feature: "Home Internet Bandwidth",
    included: false,
    notes: "Broadband connection provided by your ISP (minimum 25–50 Mbps recommended).",
  },
];

export const cableVsIptvComparison: CostComparisonRow[] = [
  {
    category: "Average Monthly Service Cost",
    cableSatellite: "$110.00 – $180.00 / month",
    televiewIptv: `$${(p12.price / p12.months).toFixed(2)} – $${p1.price.toFixed(2)} / month`,
    annualSavings: "Save $1,200 – $2,000+ / year",
  },
  {
    category: "Hardware & Set-Top Box Rental",
    cableSatellite: "$10.00 – $25.00 / month per TV",
    televiewIptv: "$0 (Use your existing devices)",
    annualSavings: "Save $120 – $300 / year",
  },
  {
    category: "Broadcast & Regional Sports Surcharges",
    cableSatellite: "$15.00 – $35.00 / month extra",
    televiewIptv: "$0 (Included in base price)",
    annualSavings: "Save $180 – $420 / year",
  },
  {
    category: "Contract Length & Cancellation Penalties",
    cableSatellite: "12–24 month lock-in ($150–$300 fee)",
    televiewIptv: "Zero contract; zero cancellation fees",
    annualSavings: "Zero exit risk",
  },
  {
    category: "Total 1-Year Streaming Investment",
    cableSatellite: "$1,500 – $2,500+ annually",
    televiewIptv: `$${p12.price.toFixed(2)} flat for 12 months`,
    annualSavings: "Over 90% total savings",
  },
];

export const industryPricingModels: IndustryPricingModel[] = [
  {
    modelName: "Fixed-Term Pre-Paid Plans (Teleview Standard)",
    typicalPriceRange: `$${(p12.price / p12.months).toFixed(2)} – $${p1.price.toFixed(2)} / month`,
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
    description: "Cheap IPTV providers often over-subscribe server clusters, leading to packet loss and buffering during peak events. Premium pricing covers dedicated multi-CDN bandwidth and 50/60 FPS encoder clusters.",
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

export const pricingMethodologyPoints = [
  {
    title: "Transparent Advertised Pricing",
    description: "Every price displayed on Teleview represents the total amount charged at checkout. There are zero hidden activation fees, equipment surcharges, or processing fees.",
  },
  {
    title: "Mathematical Effective Monthly Rate",
    description: "Effective monthly cost is calculated as the total package price divided by the term duration in calendar months (e.g., $90 ÷ 12 months = $7.50/month).",
  },
  {
    title: "Volume Savings Calculation",
    description: "Savings percentages compare each multi-month package against an equivalent duration purchased as rolling 1-month subscriptions at the baseline $16.00 rate.",
  },
  {
    title: "Independent Application Policy",
    description: "Subscription fees cover Teleview raw streaming server credentials. Third-party player applications (such as TiviMate Premium or IBO Player) operate independent licensing.",
  },
  {
    title: "Verified Freshness & Review Standards",
    description: "Pricing schedules, package features, and server specifications are reviewed and audited monthly by Teleview operations staff. Last reviewed: September 2026.",
  },
];

export const pricingFaqs: PricingFaq[] = [
  {
    question: "What is the average cost of IPTV?",
    answer: "Across the streaming industry, a reliable IPTV subscription typically averages between $10 and $16 per month on short-term plans, and $7.50 to $9.00 per month on annual plans. Services priced significantly below this often suffer from overloaded servers and buffering, while prices above $20 per month generally indicate unnecessary reseller markups.",
  },
  {
    question: "How much does an IPTV subscription cost on Teleview?",
    answer: "Teleview IPTV subscription plans start at $7.50 per month on the 12-month tier ($90 total). Shorter plans include 6 months at $60 ($10.00/mo), 3 months at $39 ($13.00/mo), and a 1-month commitment at $16 ($16.00/mo). All plans include the complete channel and VOD catalog with zero hidden fees.",
  },
  {
    question: "What is the cheapest Teleview IPTV plan?",
    answer: "The 1-month subscription at $16.00 is the lowest upfront payment, making it ideal for testing stream stability or watching a single sports tournament. However, the 12-month plan at $90.00 provides the lowest effective monthly price at $7.50 per month.",
  },
  {
    question: "Which IPTV plan offers the lowest effective monthly price?",
    answer: "The 12-month subscription delivers the lowest effective monthly rate at $7.50 per month ($90 total upfront). This delivers a 53% discount compared to renewing individual 1-month plans, saving $102 across the full year.",
  },
  {
    question: "Is IPTV cheaper than traditional TV?",
    answer: "Yes, significantly. Traditional cable and satellite subscriptions typically range from $110 to $180 per month when hardware rental fees, regional sports surcharges, and taxes are added ($1,320 to $2,160+ annually). An annual Teleview subscription costs $90 flat, delivering over 90% in household savings with zero hardware fees.",
  },
  {
    question: "What should I compare before buying an IPTV subscription?",
    answer: "Before purchasing, evaluate four critical factors: server stability during live sports, EPG TV guide accuracy, customer support responsiveness, and whether billing is non-recurring pre-paid or recurring auto-debit. We strongly recommend testing our complimentary 24-hour IPTV free trial before committing to any paid plan.",
  },
  {
    question: "Are there any hidden activation fees, equipment charges, or contract cancellation penalties?",
    answer: "No. Teleview has zero activation fees, zero hardware rental costs, and zero cancellation penalties. You pay only the advertised pre-paid rate for your chosen term with no automatic credit card rebilling.",
  },
  {
    question: "Can I test the IPTV service before paying for a subscription?",
    answer: "Yes. Teleview offers a complimentary 24-hour IPTV free trial with full server access. You can test live sports channels, VOD content, EPG guide accuracy, and app compatibility on your own devices before paying anything.",
  },
  {
    question: "What payment methods are supported for IPTV subscriptions?",
    answer: "Subscriptions can be purchased securely through major credit and debit cards, digital payment gateways, and cryptocurrency options for subscribers seeking additional payment privacy.",
  },
  {
    question: "What is Teleview's refund policy on subscription plans?",
    answer: "Teleview provides a 14-day money-back guarantee. If you experience technical configuration or stream delivery issues that our 24/7 technical support team cannot resolve, you are entitled to a full refund within 14 days of activation.",
  },
];

