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
      "4K Ultra HD & 60 FPS live sports (on supported feeds & compatible hardware)",
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
      "High-bandwidth server tier with dynamic CDN load balancing",
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
    bestFor: "Full household entertainment replacement with maximum long-term savings.",
    highlights: [
      `Lowest rate of $${(p12.price / p12.months).toFixed(2)}/month ($${p1.price * 12 - p12.price} total annual savings)`,
      "Top-tier high-capacity VIP server cluster allocation",
      "Comprehensive 365-day live sports coverage guarantee",
      "Zero price increase guarantee for current active subscribers",
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
    notes: "Included across all 1, 3, 6, and 12-month subscription tiers (4K on supported feeds).",
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
    feature: "Multi-Edge CDN Routing Architecture",
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
    cableSatellite: "Estimated $85.00 – $150.00 / mo (varies widely by market & bundle)",
    televiewIptv: `$${(p12.price / p12.months).toFixed(2)} – $${p1.price.toFixed(2)} / month`,
    annualSavings: "Substantial annual overhead reduction",
  },
  {
    category: "Hardware & Set-Top Box Rental",
    cableSatellite: "Often $10.00 – $25.00 / mo per box (provider-dependent)",
    televiewIptv: "$0 (Use existing smart devices & apps)",
    annualSavings: "Zero hardware rental fees",
  },
  {
    category: "Broadcast & Regional Sports Surcharges",
    cableSatellite: "Often $15.00 – $35.00 / mo extra on standard tiers",
    televiewIptv: "$0 (All sports channels included in base rate)",
    annualSavings: "No regional sports surcharges",
  },
  {
    category: "Contract Length & Cancellation Penalties",
    cableSatellite: "12–24 month contracts common (early termination fees)",
    televiewIptv: "Zero contract; zero cancellation fees",
    annualSavings: "No contract lock-in or early exit penalties",
  },
  {
    category: "Estimated Total 1-Year TV Investment",
    cableSatellite: "Estimated $1,200 – $2,200+ annually depending on provider",
    televiewIptv: `$${p12.price.toFixed(2)} flat for 12 months`,
    annualSavings: "Substantial annual savings vs legacy pay-TV",
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

export interface HardwareExpenseItem {
  category: string;
  oneTimeCost: string;
  notes: string;
}

export const hardwareAndSetupExpenses: HardwareExpenseItem[] = [
  {
    category: "Streaming Media Player (Hardware)",
    oneTimeCost: "$0 – $150 (One-Time)",
    notes: "Amazon Fire TV Stick 4K ($35–$50), Google TV Streamer ($50), or Apple TV 4K ($130). Owners of Samsung (Tizen) or LG (webOS) Smart TVs can install native apps with $0 hardware expenditure.",
  },
  {
    category: "IPTV Player Application (Software)",
    oneTimeCost: "Free – $35 (One-Time)",
    notes: "Quality players like VLC and IPTV Smarters Pro offer free tiers. Advanced power-user applications like TiviMate Premium charge a one-time lifetime license (~$35 for up to 5 devices).",
  },
  {
    category: "IPTV Service Subscription (Teleview)",
    oneTimeCost: "$7.50 – $16.00 / month",
    notes: "Pre-paid access covering 25,000+ live channels, 100k VOD, and 50/60 FPS sports. Zero recurring credit card auto-debits, contracts, or cancellation fees.",
  },
  {
    category: "Cable Surcharges IPTV Completely Eliminates",
    oneTimeCost: "Saves $45 – $60 / month",
    notes: "IPTV eliminates mandatory cable add-ons: Broadcast TV Surcharges (avg $21.20/mo), Regional Sports Fees (avg $15.35/mo), and proprietary set-top box rentals ($11.50/box/mo per TV).",
  },
];

export interface BandwidthUsageTier {
  resolution: string;
  hourlyConsumption: string;
  monthly4HoursDaily: string;
  ispCapImpact: string;
}

export const bandwidthConsumptionTiers: BandwidthUsageTier[] = [
  {
    resolution: "Standard Definition (SD / 576p)",
    hourlyConsumption: "0.8 – 1.2 GB / hour",
    monthly4HoursDaily: "~120 GB / month",
    ispCapImpact: "Minimal (<10% of standard 1.2 TB data caps)",
  },
  {
    resolution: "Full High Definition (1080p / 60 FPS)",
    hourlyConsumption: "2.5 – 3.5 GB / hour",
    monthly4HoursDaily: "~360 GB / month",
    ispCapImpact: "Moderate (~30% of standard 1.2 TB data caps)",
  },
  {
    resolution: "4K Ultra HD (2160p HDR)",
    hourlyConsumption: "7.0 – 10.0 GB / hour",
    monthly4HoursDaily: "~840 GB / month",
    ispCapImpact: "Significant (~70% of standard 1.2 TB data caps)",
  },
];

export interface BudgetTrapItem {
  trapTitle: string;
  advertisedLure: string;
  underlyingRisk: string;
  televiewStandard: string;
}

export const budgetTrapComparisons: BudgetTrapItem[] = [
  {
    trapTitle: "Under-Powered Shared VPS Hosting",
    advertisedLure: "$2 - $4 per month",
    underlyingRisk: "Providers host thousands of subscribers on cheap, shared VPS instances that immediately buckle into endless buffering loops during high-profile sports events.",
    televiewStandard: "Multi-CDN reverse-proxy architecture with dedicated edge node caching and bandwidth throttling failovers.",
  },
  {
    trapTitle: "Choppy 25/30 FPS Transcoding",
    advertisedLure: "'Cheap Full HD' claims",
    underlyingRisk: "Sports feeds look blurry and juddery because providers use cheap software CPU encoders rather than dedicated hardware ASICs supporting true 50/60 FPS.",
    televiewStandard: "High-frame-rate 50/60 FPS broadcast ingest with hardware-accelerated HEVC/H.265 transcoding on live sports feeds.",
  },
  {
    trapTitle: "The 'Lifetime Access' Disappearing Scam",
    advertisedLure: "$30 – $50 'Lifetime' pass",
    underlyingRisk: "Economically unsustainable business model. The service operates for 2 to 4 months before disappearing, leaving subscribers with zero recourse or refunds.",
    televiewStandard: "Sustainable term-based subscriptions (1, 3, 6, 12 months) protected by a legally binding 14-day refund guarantee.",
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
    question: "How does IPTV pricing compare to YouTube TV, Hulu + Live TV, or Fubo?",
    answer: "Virtual MVPD streaming services like YouTube TV ($73+/mo), Hulu + Live TV ($77+/mo), and Fubo ($80+/mo) provide 85 to 100 channels with heavy regional blackouts. By comparison, an annual Teleview IPTV subscription costs $7.50/month ($90/year) and provides access to over 25,000 international and domestic channels, live sports feeds with 60 FPS, and a 100k+ on-demand movie library.",
  },
  {
    question: "What is the total cost of ownership (TCO) including equipment and internet?",
    answer: "If you already own an Amazon Firestick, Google TV, or Smart TV, your upfront hardware cost is $0. If you need a streaming stick, a Fire TV Stick 4K costs roughly $35 to $50 once. Combined with Teleview's annual subscription ($90/year), your total first-year TV entertainment expense is approximately $125 to $140 total—compared to over $1,200 to $1,800 annually for traditional cable.",
  },
  {
    question: "Will IPTV streaming cause me to exceed my broadband provider's monthly data cap?",
    answer: "For households with standard 1.2 TB ISP monthly data caps (such as Comcast/Xfinity), 4 hours of daily 1080p Full HD streaming consumes approximately 360 GB per month, leaving over 800 GB for web browsing, gaming, and remote work. If you stream exclusively in 4K UHD, data usage averages ~840 GB/month. Setting default streams to 1080p easily conserves data for multi-TV households.",
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
    answer: "Yes, for most households. While legacy cable and satellite packages often range between $85 and $150+ per month once mandatory equipment rentals, regional sports fees, and franchise surcharges are factored in, an annual Teleview IPTV subscription costs $90 flat ($7.50/month effective). Depending on your existing provider and setup, this represents a substantial annual cost reduction with zero equipment rental fees.",
  },
  {
    question: "What should I compare before buying an IPTV subscription?",
    answer: "Before purchasing, evaluate four critical factors: server stability during live sports, EPG TV guide accuracy, customer support responsiveness, and whether billing is non-recurring pre-paid or recurring auto-debit. We strongly recommend testing our complimentary 24-hour IPTV free trial before committing to any paid plan.",
  },
  {
    question: "Are there any contracts or cancellation fees?",
    answer: "No. Teleview IPTV subscriptions are strictly pre-paid for the term selected. There are no contracts, no credit checks, and no cancellation penalties when your term concludes.",
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

