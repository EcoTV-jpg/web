import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  HelpCircle,
  Clock,
  Sparkles,
  Server,
  Layers,
  Tv,
} from "lucide-react";
import {
  pricingTierComparisons,
  industryPricingModels,
  pricingEvaluationFactors,
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
        <div className="container-x max-w-[1000px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Page Header */}
          <header className="py-6 sm:py-8 text-center max-w-[860px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3.5 py-1 text-xs font-mono text-phosphor-green mb-4">
              <DollarSign className="size-3.5" aria-hidden="true" />
              <span>Commercial Pricing &amp; Value Analysis</span>
            </div>

            <h1 className="t-h1 text-snow font-extrabold tracking-tight">
              IPTV Pricing &amp; <Accent>Subscription Plans Guide (2026)</Accent>
            </h1>

            <p className="t-body mt-4 text-silver-mist leading-relaxed">
              Compare honest IPTV subscription costs, effective monthly pricing, volume discount savings, and industry billing models. Understand what high-performance streaming servers cost and avoid hidden fees.
            </p>
          </header>

          {/* Direct Answer / Quick Answer */}
          <section className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-8" aria-labelledby="pricing-summary-heading">
            <div className="flex items-start gap-3.5">
              <Zap className="size-6 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-3">
                <h2 id="pricing-summary-heading" className="text-base sm:text-lg font-bold text-snow">
                  Direct Answer: What Is the Standard Price for an IPTV Subscription?
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  In 2026, a dependable IPTV subscription ranges between <strong className="text-snow">$7.50 and $16.00 per month</strong>. A standard 1-month commitment is priced around $14 to $16, while multi-month commitments offer steep volume discounts: 3 months at $39 ($13/mo), 6 months at $60 ($10/mo), and 12 months at $90 ($7.50/mo).
                </p>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  Unlike traditional cable services that average $110 to $180 monthly, IPTV requires zero hardware rental fees, zero activation charges, and zero cancellation penalties. Viewers can also evaluate server performance first with a <a href="/iptv-free-trial" className="text-phosphor-green font-semibold hover:underline">24-hour IPTV free trial</a> before purchasing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Teleview Plan Comparison Grid */}
          <section className="mt-14" aria-labelledby="plans-comparison-heading">
            <div className="text-center mb-8">
              <h2 id="plans-comparison-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Teleview Subscription Plans &amp; Effective Monthly Rates
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[640px] mx-auto">
                All plans include identical premium server features, 25,000+ live channels, 100,000+ VOD movies, and 60 FPS 4K sports feeds. Longer commitments unlock lower monthly rates:
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {pricingTierComparisons.map((plan) => (
                <div
                  key={plan.slug}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-colors ${
                    plan.slug === "12-months"
                      ? "border-phosphor-green/50 bg-ash/50 shadow-lg shadow-phosphor-green/5"
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
                        FLEXIBLE TRIAL
                      </span>
                    )}

                    <h3 className="text-base font-bold text-snow">{plan.planName}</h3>
                    <p className="text-xs text-silver-mist mt-1 min-h-[36px]">{plan.bestFor}</p>

                    <div className="mt-4 pt-4 border-t border-charcoal/60">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-snow">${plan.totalPrice}</span>
                        <span className="text-xs text-smoke font-mono">/ {plan.durationMonths === 1 ? "month" : `${plan.durationMonths} mos`}</span>
                      </div>
                      <p className="text-[11px] text-phosphor-green font-mono mt-1">
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
                      View Plan Specifications &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-smoke">
                Need more information before purchasing? Review our complete{" "}
                <a href="/iptv-subscription" className="text-phosphor-green font-semibold hover:underline">
                  IPTV Subscription Hub
                </a>{" "}
                or read the{" "}
                <a href="/best-iptv" className="text-phosphor-green font-semibold hover:underline">
                  IPTV Buying Guide
                </a>
                .
              </p>
            </div>
          </section>

          {/* Section 2: Industry Pricing Models */}
          <section className="mt-16" aria-labelledby="models-heading">
            <div className="text-center mb-8">
              <h2 id="models-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Comparing IPTV Industry Billing Models
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Not all IPTV providers bill the same way. Understand the differences between pre-paid terms, auto-renewals, and 'lifetime' promises:
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
                        <span className="font-semibold text-snow block mb-1">Drawbacks:</span>
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

          {/* Section 3: Factors That Influence IPTV Pricing */}
          <section className="mt-16" aria-labelledby="factors-heading">
            <div className="text-center mb-8">
              <h2 id="factors-heading" className="text-xl sm:text-2xl font-bold text-snow">
                What Determines the Cost of High-Quality IPTV?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Running a continuous 4K 60 FPS television network requires substantial infrastructure investment. Here is where your subscription fee goes:
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

          {/* Section 4: FAQs */}
          <section className="mt-16" aria-labelledby="pricing-faq-heading">
            <div className="text-center mb-8">
              <h2 id="pricing-faq-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Frequently Asked Questions About IPTV Pricing
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Clear, transparent answers to common subscription and pricing inquiries.
              </p>
            </div>

            <div className="space-y-3 max-w-[780px] mx-auto">
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

          {/* Section 5: Contextual CTA */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Ready to Experience Buffer-Free IPTV?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[540px] mx-auto">
              Start with a 24-hour free trial on your television or smartphone, or select a transparent pre-paid subscription plan.
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
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
