import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Clock,
  Sparkles,
  Server,
  Tv,
  Calendar,
  Info,
  CreditCard,
  Calculator,
  Flame,
  BadgePercent,
} from "lucide-react";
import {
  pricingTierComparisons,
  pricingGlanceMetrics,
  featureInclusions,
  cableVsIptvComparison,
  industryPricingModels,
  pricingEvaluationFactors,
  pricingMethodologyPoints,
  pricingFaqs,
} from "../data/pricingGuide";

export default function PricingPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "IPTV Pricing", url: "/iptv-pricing" },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1020px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Page Header */}
          <header className="py-6 sm:py-8 text-center max-w-[880px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3.5 py-1 text-xs font-mono text-phosphor-green mb-4">
              <DollarSign className="size-3.5" aria-hidden="true" />
              <span>Commercial Pricing &amp; Value Analysis</span>
            </div>

            <h1 className="t-h1 text-snow font-extrabold tracking-tight">
              IPTV Pricing Guide 2026: <Accent>Subscription Costs &amp; Plans</Accent>
            </h1>

            <p className="t-body mt-4 text-silver-mist leading-relaxed text-sm sm:text-base">
              A comprehensive guide to IPTV subscription pricing, effective monthly rates, mathematical volume discounts, and billing transparency. Review honest costs across 1, 3, 6, and 12-month packages with zero hidden fees or contract lock-ins.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-smoke bg-charcoal/40 border border-charcoal/70 px-3 py-1 rounded-md">
              <Clock className="size-3.5 text-phosphor-green" aria-hidden="true" />
              <span>Last reviewed: September 2026 &bull; Verified by Teleview Operations</span>
            </div>

            {/* Direct Conversion Hand-off Banner to Subscription Hub */}
            <div className="mt-6 rounded-xl border border-phosphor-green/30 bg-phosphor-green/10 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div>
                <p className="text-sm font-bold text-snow">Looking for fast subscription activation, typically within 5–15 minutes?</p>
                <p className="text-xs text-silver-mist mt-0.5">Skip the pricing analysis guide and select your preferred duration directly on our official checkout hub.</p>
              </div>
              <a
                href="/iptv-subscription"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-phosphor-green px-5 py-2.5 text-xs font-bold text-obsidian uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-sm"
              >
                View Subscription Plans &rarr;
              </a>
            </div>
          </header>

          {/* Above-the-Fold: IPTV Pricing at a Glance */}
          <section className="mt-8 rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-8" aria-labelledby="pricing-glance-heading">
            <div className="flex items-start gap-3.5 mb-6">
              <Zap className="size-6 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 id="pricing-glance-heading" className="text-base sm:text-lg font-bold text-snow">
                  IPTV Pricing at a Glance
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed mt-2">
                  In 2026, dependable IPTV services typically cost between <strong className="text-snow">$7.50 and $16.00 per month</strong> depending on plan duration. Baseline 1-month subscriptions average $14 to $16, while multi-month commitments offer substantial volume savings: 3 months at $39 ($13.00/mo, save 19%), 6 months at $60 ($10.00/mo, save 38%), and 12 months at $90 ($7.50/mo, save 53%).
                </p>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed mt-2">
                  Teleview operates on a 100% pre-paid, non-recurring billing model with zero automatic credit card rebilling, zero equipment rental charges, and zero cancellation fees. Subscribers are protected by a <a href="/refund-policy" className="text-phosphor-green font-semibold hover:underline">14-day money-back guarantee</a> and can test streaming fluidity risk-free with a <a href="/iptv-free-trial" className="text-phosphor-green font-semibold hover:underline">24-hour IPTV free trial</a> before purchasing.
                </p>
              </div>
            </div>

            {/* Glance Metric Cards */}
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 pt-4 border-t border-charcoal/60">
              {pricingGlanceMetrics.map((metric, i) => (
                <div key={i} className="rounded-xl border border-charcoal/80 bg-ink-800/60 p-3.5 flex flex-col justify-between">
                  <span className="text-[11px] font-mono text-smoke uppercase">{metric.label}</span>
                  <span className="text-lg sm:text-xl font-extrabold text-snow mt-1">{metric.value}</span>
                  <span className="text-[11px] text-silver-mist mt-0.5">{metric.detail}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: How Much Does IPTV Cost? */}
          <section className="mt-14" aria-labelledby="how-much-cost-heading">
            <div className="text-center max-w-[760px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Market Economics</span>
              <h2 id="how-much-cost-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                How Much Does IPTV Cost in 2026?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                The actual cost of an IPTV subscription depends primarily on server architecture, content delivery network (CDN) routing, live broadcast encoding quality, and commitment length:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-xs">
              <div className="rounded-xl border border-charcoal bg-ash/20 p-5 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-phosphor-green uppercase font-semibold">Short-Term (1 Month)</span>
                  <h3 className="text-sm font-bold text-snow mt-1">$14.00 – $16.00 / month</h3>
                  <p className="text-silver-mist leading-relaxed mt-2">
                    Ideal for first-time evaluations, troubleshooting local ISP behavior, or streaming a specific single tournament. Carries the lowest upfront financial commitment with full catalog access.
                  </p>
                </div>
                <p className="text-[11px] text-smoke pt-3 border-t border-charcoal/50">Baseline rate without volume discount.</p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/20 p-5 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-phosphor-green uppercase font-semibold">Medium-Term (3–6 Months)</span>
                  <h3 className="text-sm font-bold text-snow mt-1">$10.00 – $13.00 / month</h3>
                  <p className="text-silver-mist leading-relaxed mt-2">
                    Popular for major sports league seasons (Premier League, Champions League, NFL). Delivers 19% to 38% in cumulative savings over rolling 30-day renewals.
                  </p>
                </div>
                <p className="text-[11px] text-smoke pt-3 border-t border-charcoal/50">Balanced value for seasonal entertainment.</p>
              </div>

              <div className="rounded-xl border border-phosphor-green/40 bg-ash/40 p-5 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-phosphor-green uppercase font-semibold">Annual (12 Months)</span>
                  <h3 className="text-sm font-bold text-snow mt-1">$7.50 – $9.00 / month</h3>
                  <p className="text-silver-mist leading-relaxed mt-2">
                    The highest-value option for full cord-cutting households. Teleview's 12-month plan costs $90.00 flat ($7.50/mo), cutting 53% off the baseline rate and saving $102 annually.
                  </p>
                </div>
                <p className="text-[11px] text-phosphor-green font-mono pt-3 border-t border-charcoal/50">Lowest effective monthly cost.</p>
              </div>
            </div>
          </section>

          {/* Section: Teleview IPTV Subscription Plans */}
          <section className="mt-16" aria-labelledby="plans-comparison-heading">
            <div className="text-center mb-8">
              <span className="label-mono text-phosphor-green text-xs">Official Packages</span>
              <h2 id="plans-comparison-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                Teleview IPTV Subscription Plans &amp; Effective Monthly Rates
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[640px] mx-auto">
                Every subscription tier delivers unrestricted access to 25,000+ live channels, 100,000+ VOD movies, and 60 FPS sports feeds. Choose the duration that suits your viewing schedule:
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pricingTierComparisons.map((plan) => (
                <div
                  key={plan.slug}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-colors ${
                    plan.slug === "12-months"
                      ? "border-phosphor-green/50 bg-ash/50 shadow-lg shadow-phosphor-green/5 ring-1 ring-phosphor-green/30"
                      : "border-charcoal bg-ash/20 hover:border-charcoal/80"
                  }`}
                >
                  <div>
                    {plan.savingsPercentage > 0 ? (
                      <span className="inline-block text-[11px] font-mono font-bold text-phosphor-green bg-phosphor-green/10 border border-phosphor-green/30 px-2.5 py-0.5 rounded-full mb-3">
                        SAVE {plan.savingsPercentage}%
                      </span>
                    ) : (
                      <span className="inline-block text-[11px] font-mono text-smoke bg-charcoal/50 px-2.5 py-0.5 rounded-full mb-3">
                        ENTRY PASS
                      </span>
                    )}

                    <h3 className="text-base font-bold text-snow">{plan.planName}</h3>
                    <p className="text-xs text-silver-mist mt-1 min-h-[36px]">{plan.bestFor}</p>

                    <div className="mt-4 pt-4 border-t border-charcoal/60">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-snow">${plan.totalPrice}</span>
                        <span className="text-xs text-smoke font-mono">/ {plan.durationMonths === 1 ? "month" : `${plan.durationMonths} mos`}</span>
                      </div>
                      <p className="text-[11px] text-phosphor-green font-mono mt-1 font-semibold">
                        Effective: ${plan.effectiveMonthlyPrice.toFixed(2)} / month
                      </p>
                    </div>

                    <ul className="mt-5 space-y-2 text-xs text-silver-mist">
                      {plan.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal/40 space-y-2">
                    <GreenButton href={`/iptv-subscription/${plan.slug}`} className="w-full text-xs py-2.5 justify-center">
                      Select {plan.planName.replace(" IPTV Subscription", "")}
                    </GreenButton>
                    <a
                      href={`/iptv-subscription/${plan.slug}`}
                      className="block text-center text-[11px] text-smoke hover:text-phosphor-green transition-colors"
                    >
                      View Detailed Specifications &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-smoke">
                Looking to test stream fluidity first? Start with a{" "}
                <a href="/iptv-free-trial" className="text-phosphor-green font-semibold hover:underline">
                  24-hour IPTV free trial
                </a>{" "}
                or explore our full{" "}
                <a href="/iptv-subscription" className="text-phosphor-green font-semibold hover:underline">
                  IPTV Subscription Hub
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section: Semantic HTML Pricing Comparison Table */}
          <section className="mt-16" aria-labelledby="comparison-table-heading">
            <div className="text-center mb-8">
              <span className="label-mono text-phosphor-green text-xs">Mathematical Breakdown</span>
              <h2 id="comparison-table-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                IPTV Plan Comparison &amp; Value Breakdown
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Compare total package costs, calculated monthly rates, volume savings, and recommended use cases across all available durations:
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs text-silver-mist border-collapse" aria-label="IPTV Subscription Plans and Pricing Comparison">
                <caption className="sr-only">Comprehensive comparison of Teleview IPTV subscription plans, total prices, effective monthly rates, and savings</caption>
                <thead className="border-b border-charcoal/80 bg-ink-800/80 text-[11px] font-mono uppercase text-smoke">
                  <tr>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Plan</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Duration</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Total Price</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Effective Monthly</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Savings</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Best For</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-right text-snow font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/50">
                  {pricingTierComparisons.map((plan) => (
                    <tr key={plan.slug} className={`hover:bg-charcoal/20 transition-colors ${plan.slug === "12-months" ? "bg-phosphor-green/5" : ""}`}>
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-snow whitespace-nowrap">
                        {plan.planName}
                      </th>
                      <td className="p-3.5 sm:p-4 font-mono text-smoke whitespace-nowrap">
                        {plan.durationMonths === 1 ? "30 Days" : `${plan.durationMonths} Months`}
                      </td>
                      <td className="p-3.5 sm:p-4 font-bold text-snow whitespace-nowrap">
                        ${plan.totalPrice.toFixed(2)} USD
                      </td>
                      <td className="p-3.5 sm:p-4 font-mono text-phosphor-green font-semibold whitespace-nowrap">
                        ${plan.effectiveMonthlyPrice.toFixed(2)} / mo
                      </td>
                      <td className="p-3.5 sm:p-4 whitespace-nowrap">
                        {plan.savingsPercentage > 0 ? (
                          <span className="inline-flex items-center gap-1 font-mono text-phosphor-green font-bold bg-phosphor-green/10 border border-phosphor-green/30 px-2 py-0.5 rounded text-[10px]">
                            <BadgePercent className="size-3" aria-hidden="true" />
                            SAVE {plan.savingsPercentage}%
                          </span>
                        ) : (
                          <span className="text-smoke text-[11px] font-mono">Baseline Rate</span>
                        )}
                      </td>
                      <td className="p-3.5 sm:p-4 text-silver-mist max-w-[240px] leading-relaxed">
                        {plan.bestFor}
                      </td>
                      <td className="p-3.5 sm:p-4 text-right whitespace-nowrap">
                        <a
                          href={`/iptv-subscription/${plan.slug}`}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-phosphor-green hover:underline"
                        >
                          Select Plan &rarr;
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: How We Calculate IPTV Pricing (Methodology & Trust) */}
          <section className="mt-16" aria-labelledby="methodology-heading">
            <div className="text-center mb-8 max-w-[720px] mx-auto">
              <span className="label-mono text-phosphor-green text-xs">Methodology &amp; Standards</span>
              <h2 id="methodology-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                How We Calculate IPTV Pricing &amp; Savings
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                We believe in total financial transparency. Here is the mathematical and operational methodology behind Teleview's subscription costs:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
              {pricingMethodologyPoints.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ash/20 p-5 space-y-2">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <Calculator className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-silver-mist leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: What Is Included With an IPTV Subscription? */}
          <section className="mt-16" aria-labelledby="included-heading">
            <div className="text-center mb-8 max-w-[720px] mx-auto">
              <span className="label-mono text-phosphor-green text-xs">Full Transparency</span>
              <h2 id="included-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                What Is Included in Your IPTV Subscription?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                To prevent surprises, we clearly delineate what your subscription covers versus what requires independent apps or personal hardware:
              </p>
            </div>

            <div className="rounded-xl border border-charcoal bg-ash/20 divide-y divide-charcoal/60 text-xs">
              {featureInclusions.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {item.included ? (
                      <CheckCircle2 className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    ) : (
                      <Info className="size-4 text-smoke shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div>
                      <span className={`font-semibold ${item.included ? "text-snow" : "text-smoke"}`}>
                        {item.feature}
                      </span>
                      <p className="text-silver-mist mt-0.5 leading-relaxed">{item.notes}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider shrink-0 self-start sm:self-center ${
                      item.included
                        ? "bg-phosphor-green/10 text-phosphor-green border border-phosphor-green/30"
                        : "bg-charcoal/50 text-smoke border border-charcoal"
                    }`}
                  >
                    {item.included ? "Included" : "Separate / User-Provided"}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Monthly vs Longer-Term IPTV Plans */}
          <section className="mt-16" aria-labelledby="choose-plan-heading">
            <div className="text-center mb-8 max-w-[720px] mx-auto">
              <span className="label-mono text-phosphor-green text-xs">Decision Framework</span>
              <h2 id="choose-plan-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                Monthly vs. Longer-Term IPTV Plans: Which Should You Choose?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                Selecting the right subscription duration depends on your viewing objectives and how you prefer to manage household entertainment budgets:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border border-charcoal bg-ash/20 p-5 space-y-2">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Flame className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>When to Choose a 1-Month Plan ($16.00)</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  Choose the 1-month plan when you want to benchmark stream stability during peak evening hours on your home broadband, verify app performance across specific <a href="/devices" className="text-phosphor-green hover:underline">streaming devices</a>, or watch a single 30-day sporting tournament with zero subsequent renewal obligations.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/20 p-5 space-y-2">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Calendar className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>When to Choose a 3-Month Plan ($39.00)</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  Ideal for quarterly sports seasons, such as Champions League group stages, NFL playoff runs, or tennis Grand Slam clusters. Reduces your effective monthly cost to $13.00 while providing guaranteed price protection across three months.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/20 p-5 space-y-2">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>When to Choose a 6-Month Plan ($60.00)</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  Perfect for regular domestic league soccer and basketball seasons without paying for inactive summer months. Drops your effective rate to $10.00/month (a 38% discount over monthly renewals).
                </p>
              </div>

              <div className="rounded-xl border border-phosphor-green/40 bg-ash/40 p-5 space-y-2">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Sparkles className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>When to Choose a 12-Month Plan ($90.00)</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  The definitive cord-cutting solution for households replacing high-cost cable or satellite TV. Cuts your effective monthly cost to just $7.50/month (a 53% savings), locking in 365 days of streaming access (including supported 4K channels) for less than typical monthly cable bills.
                </p>
              </div>
            </div>
          </section>

          {/* Section: IPTV Pricing vs Traditional TV Costs */}
          <section className="mt-16" aria-labelledby="cable-vs-iptv-heading">
            <div className="text-center mb-8 max-w-[720px] mx-auto">
              <span className="label-mono text-phosphor-green text-xs">Cord-Cutting Economics</span>
              <h2 id="cable-vs-iptv-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                IPTV Pricing vs. Traditional Cable &amp; Satellite Costs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                See how modern IPTV streaming economics compare against legacy cable and satellite television packages:
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs text-silver-mist border-collapse" aria-label="Cable vs IPTV Cost Comparison">
                <caption className="sr-only">Detailed breakdown comparing traditional cable TV costs with Teleview IPTV streaming plans</caption>
                <thead className="border-b border-charcoal/80 bg-ink-800/80 text-[11px] font-mono uppercase text-smoke">
                  <tr>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Expense Category</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-smoke font-semibold">Traditional Cable / Satellite</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-phosphor-green font-semibold">Teleview IPTV</th>
                    <th scope="col" className="p-3.5 sm:p-4 text-snow font-semibold">Annual Household Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/50">
                  {cableVsIptvComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-charcoal/20 transition-colors">
                      <th scope="row" className="p-3.5 sm:p-4 font-semibold text-snow whitespace-nowrap">
                        {row.category}
                      </th>
                      <td className="p-3.5 sm:p-4 text-smoke">
                        {row.cableSatellite}
                      </td>
                      <td className="p-3.5 sm:p-4 font-semibold text-phosphor-green">
                        {row.televiewIptv}
                      </td>
                      <td className="p-3.5 sm:p-4 font-mono font-bold text-snow">
                        {row.annualSavings}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* True Year 1 Total Cost Breakdown */}
            <div className="mt-8 rounded-xl border border-charcoal bg-ash/20 p-5 sm:p-6 text-xs text-silver-mist">
              <h3 className="text-sm sm:text-base font-bold text-snow mb-2 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                <span>True Year 1 Cost of Ownership (Hardware Included)</span>
              </h3>
              <p className="leading-relaxed mb-4">
                When budgeting for cord-cutting, smart consumers factor in one-time streaming hardware alongside subscription fees:
              </p>
              <div className="grid gap-3 sm:grid-cols-3 text-xs">
                <div className="rounded-lg border border-charcoal bg-ink-800/60 p-3.5 space-y-1">
                  <span className="text-smoke text-[11px] font-mono uppercase">Traditional Cable</span>
                  <div className="text-base font-bold text-snow">$1,860 / year</div>
                  <p className="text-[11px] text-silver-mist">Based on $120/mo programming + $23/mo regional sports fee + two $11.50/mo box rentals.</p>
                </div>
                <div className="rounded-lg border border-charcoal bg-ink-800/60 p-3.5 space-y-1">
                  <span className="text-smoke text-[11px] font-mono uppercase">App Stacking (OTT)</span>
                  <div className="text-base font-bold text-snow">$1,320 / year</div>
                  <p className="text-[11px] text-silver-mist">Live TV app ($79.99/mo) + regional sports streaming passes + fragmented on-demand apps.</p>
                </div>
                <div className="rounded-lg border border-phosphor-green/40 bg-phosphor-green/5 p-3.5 space-y-1">
                  <span className="text-phosphor-green text-[11px] font-mono uppercase font-semibold">Teleview + Firestick 4K</span>
                  <div className="text-base font-bold text-phosphor-green">$139.99 Total Year 1</div>
                  <p className="text-[11px] text-snow">12-Month Teleview ($90.00) + one-time Firestick 4K ($49.99). Year 2 renews at just $90 flat.</p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-smoke">
                Read our in-depth comparison:{" "}
                <a href="/iptv-vs-cable" className="text-phosphor-green font-semibold hover:underline">
                  IPTV vs Cable TV: Cost, Channels &amp; Features Compared
                </a>{" "}
                or review our total cost analysis on{" "}
                <a href="/iptv-cost" className="text-phosphor-green font-semibold hover:underline">
                  IPTV Cost Economics
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section: Factors That Influence IPTV Pricing */}
          <section className="mt-16" aria-labelledby="factors-heading">
            <div className="text-center mb-8 max-w-[720px] mx-auto">
              <span className="label-mono text-phosphor-green text-xs">Technical Infrastructure</span>
              <h2 id="factors-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                What Affects IPTV Subscription Pricing?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                Operating a reliable 4K 60 FPS television network requires ongoing capital investment in multi-CDN bandwidth and high-throughput encoding clusters. To verify whether your home connection meets bandwidth benchmarks for uninterrupted 4K streaming, review our{" "}
                <a href="/help-center/internet-speed" className="text-phosphor-green font-semibold hover:underline">
                  IPTV internet speed guide
                </a>
                . Here is where subscription revenue is invested:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {pricingEvaluationFactors.map((factor, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ash/20 p-5 space-y-2">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <Server className="size-4 text-phosphor-green" aria-hidden="true" />
                    <span>{factor.title}</span>
                  </h3>
                  <p className="text-xs text-silver-mist leading-relaxed">{factor.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Industry Pricing Models */}
          <section className="mt-16" aria-labelledby="models-heading">
            <div className="text-center mb-8 max-w-[720px] mx-auto">
              <span className="label-mono text-phosphor-green text-xs">Market Models</span>
              <h2 id="models-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                Comparing IPTV Industry Billing Models
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                Not all IPTV providers bill the same way. Understand the differences between fixed-term pre-paid plans, automated recurring charges, and unsustainable 'lifetime' claims:
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {industryPricingModels.map((model, idx) => (
                <article key={idx} className="rounded-xl border border-charcoal bg-ash/30 p-6 flex flex-col justify-between text-xs">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-snow mb-1">{model.modelName}</h3>
                    <p className="font-mono text-phosphor-green mb-1">{model.typicalPriceRange}</p>
                    <p className="text-smoke mb-4">{model.billingFrequency}</p>

                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-snow block mb-1">Advantages:</span>
                        <ul className="space-y-1 text-silver-mist">
                          {model.pros.map((p, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-phosphor-green">&bull;</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-semibold text-smoke block mb-1">Drawbacks:</span>
                        <ul className="space-y-1 text-smoke">
                          {model.cons.map((c, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-smoke">&bull;</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-charcoal/60">
                    <p className="text-[11px] text-silver-mist italic">{model.recommendation}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section: Billing, Trial and Refund Information */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/20 p-6 sm:p-8" aria-labelledby="billing-terms-heading">
            <div className="max-w-[760px] mx-auto text-center mb-6">
              <span className="label-mono text-phosphor-green text-xs">Policy Details</span>
              <h2 id="billing-terms-heading" className="text-lg sm:text-xl font-bold text-snow mt-1">
                Billing Terms, Free Trial &amp; Refund Guarantee
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                Clear, consumer-first policies governing activations, trials, and payment processing:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-xs">
              <div className="rounded-xl border border-charcoal/80 bg-ink-800/60 p-4 space-y-2">
                <div className="flex items-center gap-2 text-phosphor-green font-semibold">
                  <Zap className="size-4" aria-hidden="true" />
                  <span>24-Hour Free Trial</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Request credentials via WhatsApp to evaluate server stability, channels, and VOD for 24 hours. Zero payment data is collected.{" "}
                  <a href="/iptv-free-trial" className="text-phosphor-green hover:underline">
                    Start a free trial &rarr;
                  </a>
                </p>
              </div>

              <div className="rounded-xl border border-charcoal/80 bg-ink-800/60 p-4 space-y-2">
                <div className="flex items-center gap-2 text-phosphor-green font-semibold">
                  <CreditCard className="size-4" aria-hidden="true" />
                  <span>Transparent Payments</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Pre-paid via credit/debit card, major payment gateways, or cryptocurrency. No recurring subscriptions or unexpected bank charges.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal/80 bg-ink-800/60 p-4 space-y-2">
                <div className="flex items-center gap-2 text-phosphor-green font-semibold">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  <span>14-Day Money-Back Guarantee</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  If technical configuration or stream delivery issues cannot be resolved by our support team, you receive a full refund. Review our{" "}
                  <a href="/refund-policy" className="text-phosphor-green hover:underline">
                    refund policy &rarr;
                  </a>
                </p>
              </div>
            </div>

            <p className="mt-6 text-[11px] text-smoke text-center">
              Teleview provides raw video streaming server credentials. For legal rights and terms of service, review our{" "}
              <a href="/terms-conditions" className="text-phosphor-green hover:underline">
                Terms &amp; Conditions
              </a>{" "}
              and{" "}
              <a href="/is-iptv-legal" className="text-phosphor-green hover:underline">
                IPTV Legal Guide
              </a>
              .
            </p>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="mt-16" aria-labelledby="pricing-faq-heading">
            <div className="text-center mb-8 max-w-[720px] mx-auto">
              <span className="label-mono text-phosphor-green text-xs">Direct Answers</span>
              <h2 id="pricing-faq-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                Frequently Asked Questions About IPTV Pricing
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                Direct, factual answers to common questions about IPTV subscription costs, plans, and savings:
              </p>
            </div>

            <div className="space-y-3 max-w-[800px] mx-auto">
              {pricingFaqs.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-charcoal bg-ash/20 p-4 text-xs transition-colors open:bg-ash/40">
                  <summary className="font-semibold text-snow cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="text-phosphor-green transition-transform group-open:rotate-180">&darr;</span>
                  </summary>
                  <p className="mt-3 text-silver-mist leading-relaxed pl-1">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Contextual Conversion CTA */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Ready to Start Streaming with Zero Hidden Fees?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[560px] mx-auto leading-relaxed">
              Test streaming performance on your home television or smartphone with a complimentary 24-hour free trial, or choose a transparent pre-paid plan from <a href="/" className="text-phosphor-green font-semibold hover:underline">Teleview&apos;s IPTV service</a>.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                View Subscription Plans
              </GreenButton>
              <GhostButton href="/iptv-free-trial" className="text-xs px-5 py-2.5">
                Start 24h Free Trial
              </GhostButton>
              <GhostButton href="/iptv-vs-cable" className="text-xs px-5 py-2.5">
                IPTV vs Cable Comparison
              </GhostButton>
              <GhostButton href="/best-iptv" className="text-xs px-5 py-2.5">
                IPTV Buying Guide
              </GhostButton>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

