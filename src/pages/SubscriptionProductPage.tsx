import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import PlanComparisonTable from "../components/PlanComparisonTable";
import { GreenButton, GhostButton, WhatsAppIcon } from "../components/ui";
import { getProductPlan, allSubscriptionPlans } from "../data/products";
import { createWhatsAppOrderUrl } from "../config/site";
import {
  ShieldCheck,
  CheckCircle2,
  Tv,
  Smartphone,
  Laptop,
  HelpCircle,
  ArrowRight,
  Clock,
  Zap,
  MessageCircle,
  Cpu,
  Layers,
  Award,
  RefreshCw,
} from "lucide-react";

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
          <section
            className="rounded-3xl border border-charcoal bg-ash/40 p-6 sm:p-10 lg:p-12 shadow-2xl"
            aria-labelledby="product-h1"
          >
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/40 bg-phosphor-green/10 px-3 py-1 text-xs font-semibold text-phosphor-green">
                    <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
                    {plan.badge || "IPTV Subscription"}
                  </span>
                  <span className="rounded-md border border-charcoal bg-black/40 px-2.5 py-1 text-xs font-medium text-silver-mist">
                    Duration: {plan.duration} ({plan.calendarDays} Days)
                  </span>
                </div>

                {/* Primary H1: exact match for SEO invariant */}
                <h1
                  id="product-h1"
                  className="t-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-snow text-balance"
                >
                  {plan.name}
                </h1>

                <p className="t-body mt-4 text-silver-mist text-sm sm:text-base leading-relaxed">
                  {plan.positioning}
                </p>

                {/* Intent Statement Callout */}
                <div className="mt-4 rounded-xl border border-charcoal/80 bg-ink-800/60 p-3.5 text-xs text-silver-mist leading-relaxed">
                  <span className="font-semibold text-phosphor-green mr-1">Primary Objective:</span>
                  {plan.primaryIntentStatement}
                </div>

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
                    <span>Anti-Freeze Multi-CDN Infrastructure</span>
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
                        <WhatsAppIcon className="size-5 shrink-0" />
                        <span>Order on WhatsApp — {plan.priceFormatted}</span>
                      </GreenButton>
                      <div className="space-y-1 text-[11px] text-smoke">
                        <p className="flex items-center justify-center gap-1 text-silver-mist">
                          <ShieldCheck className="size-3.5 text-phosphor-green" aria-hidden="true" />
                          <span>One-Time Payment &bull; No Auto-Renewal</span>
                        </p>
                        <p>Instant Activation &bull; 14-Day Money-Back Guarantee</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </section>

          {/* Key Plan Metrics Grid */}
          <section className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3" aria-label="Plan Metrics">
            {plan.specHighlights.map((spec, idx) => (
              <div key={idx} className="rounded-xl border border-charcoal bg-ash/30 p-4 text-center">
                <span className="text-[11px] font-medium text-smoke uppercase tracking-wider">{spec.label}</span>
                <div className="mt-1 text-lg sm:text-xl font-bold text-snow">{spec.value}</div>
                <div className="mt-0.5 text-[11px] text-phosphor-green">{spec.note}</div>
              </div>
            ))}
          </section>

          {/* Differentiated Deep-Dive Section */}
          <section className="mt-14 rounded-3xl border border-charcoal bg-ash/30 p-6 sm:p-10" aria-labelledby="deep-dive-heading">
            <div className="max-w-[760px]">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3 py-1 text-xs font-semibold text-phosphor-green mb-3">
                <Award className="size-3.5" aria-hidden="true" />
                <span>{plan.intentBadge}</span>
              </div>
              <h2 id="deep-dive-heading" className="text-xl sm:text-2xl font-bold text-snow">
                {plan.deepDiveTitle}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-silver-mist leading-relaxed">
                {plan.deepDiveSubtitle}
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {plan.deepDivePillars.map((pillar, idx) => (
                <article key={idx} className="rounded-2xl border border-charcoal/80 bg-ink-800/80 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-snow flex items-center gap-2">
                      <span className="size-6 rounded-full bg-phosphor-green/15 text-phosphor-green flex items-center justify-center text-xs font-bold shrink-0">
                        {idx + 1}
                      </span>
                      {pillar.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-silver-mist leading-relaxed pl-8">
                      {pillar.description}
                    </p>
                  </div>
                </article>
              ))}
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

          {/* Payment Terms & Refund Guarantee Section */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-ink-800/70 p-6 sm:p-8" aria-labelledby="terms-heading">
            <h2 id="terms-heading" className="text-xl sm:text-2xl font-bold text-snow">
              Payment Terms &amp; Satisfaction Guarantee
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[700px]">
              We believe in complete billing transparency. Teleview operates with zero contract lock-in and zero surprise charges.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6 pt-6 border-t border-charcoal">
              <div>
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Clock className="size-4 text-phosphor-green" aria-hidden="true" />
                  One-Time Payment &amp; Duration Terms
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  {plan.paymentTerms}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <ShieldCheck className="size-4 text-phosphor-green" aria-hidden="true" />
                  14-Day Money-Back Guarantee
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  {plan.guaranteeDetails} For full details on refund eligibility, review our official{" "}
                  <a href="/refund-policy" className="text-phosphor-green underline hover:text-snow">
                    Refund Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* What's Included Full Specification Checklist */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="included-heading">
            <h2 id="included-heading" className="text-xl sm:text-2xl font-bold text-snow">
              What&apos;s Included in Your {plan.duration} IPTV Plan
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist">
              Every Teleview subscription includes identical full access to our global broadcast network and on-demand streaming catalog.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-silver-mist">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 rounded-lg border border-charcoal/60 bg-ink-800/50 px-3.5 py-2.5">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  <span className="text-snow">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 3-Step Setup Process */}
          <section className="mt-14" aria-labelledby="setup-process-heading">
            <div className="text-center mb-8">
              <h2 id="setup-process-heading" className="text-xl sm:text-2xl font-bold text-snow">
                How Setup Works in 3 Quick Steps
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[600px] mx-auto">
                Getting started with your {plan.duration} subscription takes less than 2 minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-charcoal bg-ash/30 p-5">
                <span className="text-xs font-bold text-phosphor-green uppercase tracking-wider">Step 01</span>
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-snow">Receive Credentials</h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Upon confirmed payment, your Xtream Codes API login (Username, Password, Server URL) and M3U playlist arrive via WhatsApp and email.
                </p>
              </div>
              <div className="rounded-xl border border-charcoal bg-ash/30 p-5">
                <span className="text-xs font-bold text-phosphor-green uppercase tracking-wider">Step 02</span>
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-snow">Configure Your App</h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Launch your favorite IPTV player (TiviMate, IPTV Smarters Pro, or Smart TV app) and enter your credentials. See our{" "}
                  <a href="/setup" className="text-phosphor-green underline hover:text-snow">
                    IPTV Setup Guide
                  </a>{" "}
                  for walkthroughs.
                </p>
              </div>
              <div className="rounded-xl border border-charcoal bg-ash/30 p-5">
                <span className="text-xs font-bold text-phosphor-green uppercase tracking-wider">Step 03</span>
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-snow">Stream Instantly</h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Your channel lists, electronic program guide (EPG), and on-demand movies synchronize in seconds. Enjoy uninterrupted 4K streaming.
                </p>
              </div>
            </div>
          </section>

          {/* Supported Devices Section */}
          <section className="mt-14 text-center rounded-2xl border border-charcoal bg-ink-800/60 p-6 sm:p-8" aria-labelledby="product-device-heading">
            <h2 id="product-device-heading" className="text-xl sm:text-2xl font-bold text-snow">
              Device Compatibility With Your {plan.duration} Subscription
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[650px] mx-auto">
              Your credentials work seamlessly across all major operating systems and streaming hardware. For optimal performance, we recommend 15 Mbps for Full HD and 30 Mbps for 4K streams.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Tv className="size-3.5 text-phosphor-green" aria-hidden="true" /> Amazon Firestick &amp; Fire TV
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Smartphone className="size-3.5 text-phosphor-green" aria-hidden="true" /> Android TV, Google TV &amp; Boxes
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Tv className="size-3.5 text-phosphor-green" aria-hidden="true" /> Samsung (Tizen) &amp; LG (webOS)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Laptop className="size-3.5 text-phosphor-green" aria-hidden="true" /> Apple TV, iOS &amp; Mac
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ash/40 px-3 py-1.5 text-snow">
                <Cpu className="size-3.5 text-phosphor-green" aria-hidden="true" /> MAG, Formuler &amp; Windows PC
              </span>
            </div>
            <div className="mt-5">
              <a
                href="/devices"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-phosphor-green hover:underline"
              >
                View Full Device Compatibility &amp; Hardware Specs Guide &rarr;
              </a>
            </div>
          </section>

          {/* Reusable Plan Comparison Component */}
          <PlanComparisonTable
            activeSlug={plan.slug}
            title={`How Does the ${plan.duration} Plan Compare to Other Options?`}
            subhead={plan.comparisonWithOthers}
          />

          {/* Expiration Continuity & Upgrade Paths */}
          <section className="mt-12 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="continuity-heading">
            <h2 id="continuity-heading" className="text-xl sm:text-2xl font-bold text-snow">
              Subscription Expiration &amp; Continuity
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Clock className="size-4 text-phosphor-green" aria-hidden="true" />
                  What Happens When Your {plan.duration} Concludes?
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  {plan.expirationInfo}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <RefreshCw className="size-4 text-phosphor-green" aria-hidden="true" />
                  Upgrades &amp; Plan Transitions
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  {plan.upgradeInfo}
                </p>
              </div>
            </div>
          </section>

          {/* Contextual Internal Alternatives Linking */}
          <section className="mt-12 rounded-xl border border-charcoal bg-ink-800 p-6" aria-labelledby="alternatives-heading">
            <h2 id="alternatives-heading" className="text-base font-bold text-snow mb-2">
              Explore Alternative Subscription Durations
            </h2>
            <p className="text-xs text-silver-mist mb-4">
              Compare other Teleview subscription options to find the duration and volume discount matching your schedule:
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

          {/* Plan-Specific FAQs */}
          <section className="mt-16" aria-labelledby="plan-faq-heading">
            <div className="text-center mb-8">
              <h2 id="plan-faq-heading" className="text-xl sm:text-2xl font-bold text-snow">
                {plan.duration} IPTV Subscription FAQs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Answers to specific questions regarding the {plan.duration} plan duration, billing terms, and activation.
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

          {/* Customer Support & Assistance */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-ink-800/70 p-6 text-center" aria-label="Customer Support">
            <h2 className="text-base font-bold text-snow">Need Assistance With Your {plan.duration} Plan?</h2>
            <p className="mt-1 text-xs text-silver-mist max-w-[600px] mx-auto">
              Our technical support team is available 24/7 to assist with app configuration, playlist setup, or billing inquiries.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
              <a href="/help-center" className="text-phosphor-green hover:underline">
                Visit Help Center &rarr;
              </a>
              <span className="text-smoke">&bull;</span>
              <a href="/contact" className="text-phosphor-green hover:underline">
                Contact Support &rarr;
              </a>
              <span className="text-smoke">&bull;</span>
              <a href="/faq" className="text-phosphor-green hover:underline">
                General IPTV FAQs &rarr;
              </a>
            </div>
          </section>

          {/* Bottom Conversion CTA */}
          <section
            className="mt-16 rounded-3xl border border-phosphor-green/30 bg-gradient-to-r from-ash/80 via-ash/50 to-obsidian p-8 sm:p-10 text-center"
            aria-labelledby="bottom-cta-heading"
          >
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
                <WhatsAppIcon className="size-5 shrink-0" />
                <span>Order on WhatsApp — {plan.priceFormatted}</span>
              </GreenButton>
              <GhostButton href="/iptv-subscription">Compare All Plans</GhostButton>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
