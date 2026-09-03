import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import PlanComparisonTable from "../components/PlanComparisonTable";
import { GreenButton, GhostButton } from "../components/ui";
import { getProductPlan, allSubscriptionPlans } from "../data/products";
import { createWhatsAppOrderUrl } from "../config/site";
import { ShieldCheck, CheckCircle2, Tv, Smartphone, Laptop, HelpCircle, ArrowRight, Clock, Zap, MessageCircle } from "lucide-react";

interface SubscriptionProductPageProps {
  slug: string;
}

export default function SubscriptionProductPage({ slug }: SubscriptionProductPageProps) {
  const plan = getProductPlan(slug);

  // Fallback for invalid slugs
  if (!plan) {
    return (
      <div className="min-h-screen bg-obsidian text-snow flex flex-col justify-between">
        <Header />
        <main className="container-x py-20 text-center">
          <h1 className="text-3xl font-bold">Plan Not Found</h1>
          <p className="mt-4 text-silver-mist">The requested IPTV subscription plan does not exist.</p>
          <div className="mt-6">
            <GreenButton href="/iptv-subscription">View Available Plans</GreenButton>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "IPTV Subscription", url: "/iptv-subscription" },
    { name: plan.duration, url: `/iptv-subscription/${plan.slug}` },
  ];

  // Other plans for contextual internal linking
  const otherPlans = allSubscriptionPlans.filter((p) => p.slug !== plan.slug);

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-x max-w-[1020px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Above-the-Fold Product Hero */}
          <section className="rounded-3xl border border-charcoal bg-ash/40 p-6 sm:p-10 lg:p-12 shadow-2xl" aria-labelledby="product-h1">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/40 bg-phosphor-green/10 px-3 py-1 text-xs font-semibold text-phosphor-green">
                    <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
                    {plan.badge || "IPTV Subscription"}
                  </span>
                  <span className="rounded-md border border-charcoal bg-black/40 px-2.5 py-1 text-xs font-medium text-silver-mist">
                    Duration: {plan.duration}
                  </span>
                </div>

                <h1 id="product-h1" className="t-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-snow text-balance">
                  {plan.name}
                </h1>

                <p className="t-body mt-4 text-silver-mist text-sm sm:text-base leading-relaxed">
                  {plan.positioning}
                </p>

                {/* Core Features Preview */}
                <div className="mt-6 grid sm:grid-cols-2 gap-2.5 text-xs text-silver-mist">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                    <span>25,000+ Live Channels Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                    <span>4K Ultra HD &amp; Full HD Quality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                    <span>120,000+ Movies &amp; Series VOD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                    <span>99.9% Server Uptime Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Conversion Box Above The Fold */}
              <div className="rounded-2xl border border-charcoal/80 bg-ink-800/90 p-6 sm:p-8 text-center flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-smoke">Total Plan Cost</span>
                  <div className="mt-2 flex items-baseline justify-center gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-snow">{plan.priceFormatted}</span>
                    <span className="text-sm text-silver-mist font-medium">{plan.billingText}</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-phosphor-green">
                    Equivalent to {plan.monthlyFormatted}
                  </p>
                  {plan.saveText && (
                    <span className="inline-block mt-2 rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2.5 py-0.5 text-[11px] font-semibold text-phosphor-green">
                      {plan.saveText}
                    </span>
                  )}
                </div>

                {(() => {
                  const waOrderUrl = createWhatsAppOrderUrl(plan.duration, plan.priceFormatted);
                  return (
                    <div className="mt-8 space-y-3">
                      <GreenButton
                        href={waOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold shadow-lg shadow-phosphor-green/10"
                      >
                        <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                        <span>Order on WhatsApp — {plan.priceFormatted}</span>
                      </GreenButton>
                      <p className="text-[11px] text-smoke">
                        Instant activation &bull; Pre-configured for all devices &bull; 14-day guarantee
                      </p>
                    </div>
                  );
                })()}
              </div>
            </div>
          </section>

          {/* Who Benefits From This Plan */}
          <section className="mt-14" aria-labelledby="audience-heading">
            <h2 id="audience-heading" className="text-xl sm:text-2xl font-bold text-snow">
              Who Benefits Most From the {plan.duration} Plan?
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {plan.audience.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ash/30 p-5 flex items-start gap-3">
                  <div className="size-6 rounded-full bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green shrink-0 mt-0.5">
                    <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  </div>
                  <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose This Duration */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="why-duration-heading">
            <h2 id="why-duration-heading" className="text-xl sm:text-2xl font-bold text-snow">
              Why Choose {plan.duration} for Your IPTV Streaming?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-silver-mist leading-relaxed">
              {plan.whyChoose}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6 pt-6 border-t border-charcoal">
              <div>
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Clock className="size-4 text-phosphor-green" aria-hidden="true" />
                  Subscription Expiration &amp; Continuity
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  {plan.expirationInfo}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Zap className="size-4 text-phosphor-green" aria-hidden="true" />
                  Upgrades &amp; Plan Transitions
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  {plan.upgradeInfo}
                </p>
              </div>
            </div>
          </section>

          {/* Reusable Plan Comparison Component */}
          <PlanComparisonTable
            activeSlug={plan.slug}
            title={`How Does the ${plan.duration} Plan Compare to Other Options?`}
            subhead={plan.comparisonWithOthers}
          />

          {/* Contextual Internal Alternatives Linking */}
          <section className="mt-12 rounded-xl border border-charcoal bg-ink-800 p-6" aria-labelledby="alternatives-heading">
            <h2 id="alternatives-heading" className="text-base font-bold text-snow mb-2">
              Looking for Alternative Subscription Durations?
            </h2>
            <p className="text-xs text-silver-mist mb-4">
              Explore our other IPTV subscription tiers to find the duration that best aligns with your viewing schedule and budget:
            </p>
            <div className="flex flex-wrap gap-3">
              {otherPlans.map((alt) => (
                <a
                  key={alt.slug}
                  href={`/iptv-subscription/${alt.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/60 px-3.5 py-2 text-xs font-semibold text-silver-mist hover:text-snow hover:border-phosphor-green/50 transition-colors"
                >
                  <span>{alt.name}</span>
                  <span className="text-phosphor-green">({alt.priceFormatted})</span>
                  <ArrowRight className="size-3 text-smoke" aria-hidden="true" />
                </a>
              ))}
              <a
                href="/iptv-subscription"
                className="inline-flex items-center gap-1.5 rounded-lg border border-phosphor-green/40 bg-phosphor-green/10 px-3.5 py-2 text-xs font-semibold text-phosphor-green hover:bg-phosphor-green/20 transition-colors"
              >
                View All Plans Hub &rarr;
              </a>
            </div>
          </section>

          {/* Device Compatibility Note */}
          <section className="mt-14 text-center" aria-labelledby="product-device-heading">
            <h2 id="product-device-heading" className="text-xl sm:text-2xl font-bold text-snow">
              Device Compatibility With Your {plan.duration} Subscription
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[600px] mx-auto">
              Your credentials work across all major operating systems and media players.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Tv className="size-3.5 text-phosphor-green" aria-hidden="true" /> Amazon Firestick &amp; Fire TV
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Tv className="size-3.5 text-phosphor-green" aria-hidden="true" /> Samsung &amp; LG Smart TV
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Smartphone className="size-3.5 text-phosphor-green" aria-hidden="true" /> Android TV &amp; Boxes
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Laptop className="size-3.5 text-phosphor-green" aria-hidden="true" /> Apple iOS, iPad &amp; Mac
              </span>
            </div>
          </section>

          {/* Plan-Specific FAQs */}
          <section className="mt-16" aria-labelledby="plan-faq-heading">
            <div className="text-center mb-8">
              <h2 id="plan-faq-heading" className="text-xl sm:text-2xl font-bold text-snow">
                {plan.duration} IPTV Subscription FAQs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Answers to specific questions regarding the {plan.duration} plan duration, billing, and activation.
              </p>
            </div>
            <div className="space-y-4 max-w-[840px] mx-auto">
              {plan.faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-charcoal bg-ash/30 p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-snow flex items-start gap-2.5">
                    <HelpCircle className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <section className="mt-16 rounded-3xl border border-phosphor-green/30 bg-gradient-to-r from-ash/80 via-ash/50 to-obsidian p-8 sm:p-10 text-center" aria-labelledby="bottom-cta-heading">
            <ShieldCheck className="size-8 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
            <h2 id="bottom-cta-heading" className="text-2xl sm:text-3xl font-extrabold text-snow">
              Ready to Start With the {plan.duration} Plan?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-silver-mist max-w-[500px] mx-auto">
              Instant activation &bull; Full access to 25,000+ live channels &bull; 14-day money-back guarantee
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <GreenButton
                href={createWhatsAppOrderUrl(plan.duration, plan.priceFormatted)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-6 text-sm font-bold shadow-lg shadow-phosphor-green/10"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                <span>Order on WhatsApp — {plan.priceFormatted}</span>
              </GreenButton>
              <GhostButton href="/pricing">Compare All Plans</GhostButton>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
