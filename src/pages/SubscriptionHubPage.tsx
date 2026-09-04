import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import PlanComparisonTable from "../components/PlanComparisonTable";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { subscriptionHubData, allSubscriptionPlans } from "../data/products";
import { ShieldCheck, CheckCircle2, Tv, Smartphone, Laptop, HelpCircle, ArrowRight } from "lucide-react";

export default function SubscriptionHubPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "IPTV Subscription", url: "/iptv-subscription" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-10 sm:pb-24 sm:pt-14">
        <div className="container-x max-w-[1040px]">
          {/* Breadcrumb navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Above-the-Fold Hero */}
          <Reveal>
            <div className="text-center max-w-[780px] mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3.5 py-1 text-xs font-semibold text-phosphor-green">
                <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
                {subscriptionHubData.kicker}
              </span>
              <h1 className="t-display mt-4 text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow">
                IPTV Subscription <Accent>Plans &amp; Pricing</Accent>
              </h1>
              <p className="t-body mt-4 text-silver-mist text-sm sm:text-base leading-relaxed">
                {subscriptionHubData.subhead}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <GreenButton href="#comparison">Compare Plans</GreenButton>
                <GhostButton href="/setup">Setup Guide</GhostButton>
              </div>

              {/* Direct Answer Summary Callout for AI Search & Featured Snippets */}
              <aside
                aria-label="Direct Summary: Teleview IPTV Subscription Plans"
                className="mt-8 rounded-2xl border border-charcoal bg-ash/50 p-5 sm:p-6 text-left"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h2 className="text-sm font-semibold text-snow">
                      Direct Summary: What IPTV Subscription Plans Does Teleview Offer?
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                      Teleview offers four standard subscription tiers: <strong className="text-snow">1 Month ($16.00)</strong>,{" "}
                      <strong className="text-snow">3 Months ($39.00 / $13.00/mo)</strong>,{" "}
                      <strong className="text-snow">6 Months ($60.00 / $10.00/mo)</strong>, and{" "}
                      <strong className="text-snow">12 Months ($90.00 / $7.50/mo)</strong>. Every plan includes full access to over
                      25,000 live TV channels, 120,000+ on-demand movies and series, 4K sports streaming, zero automatic rebilling,
                      and a risk-free 14-day money-back guarantee.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </Reveal>

          {/* Quick Product Grid (Direct Commercial Intent) */}
          <section className="mt-12" aria-labelledby="available-plans-heading">
            <h2 id="available-plans-heading" className="sr-only">
              Available IPTV Subscription Plans
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {allSubscriptionPlans.map((plan) => (
                <Reveal key={plan.slug} className="h-full">
                  <article className="card card-hover p-6 h-full flex flex-col justify-between border-charcoal bg-ash/40">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-phosphor-green">
                        {plan.badge || "Standard Plan"}
                      </span>
                      <h3 className="mt-2 text-lg font-bold text-snow">{plan.duration}</h3>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-snow">{plan.priceFormatted}</span>
                      <span className="text-xs text-smoke font-normal">{plan.billingText}</span>
                    </div>
                    <p className="mt-1 text-xs text-phosphor-green font-medium">
                      Equivalent to {plan.monthlyFormatted}
                    </p>
                    <p className="mt-3 text-xs text-silver-mist leading-relaxed line-clamp-3">
                      {plan.tagline}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-charcoal/60">
                    <a
                      href={`/iptv-subscription/${plan.slug}`}
                      className="inline-flex items-center justify-center w-full rounded-lg border border-charcoal bg-ink-800 py-2 text-xs font-semibold text-snow hover:border-phosphor-green/50 transition-colors gap-1.5"
                    >
                      Explore {plan.duration}
                      <ArrowRight className="size-3 text-phosphor-green" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
            </div>
          </section>

          {/* Plan Comparison Section */}
          <div id="comparison">
            <PlanComparisonTable />
          </div>

          {/* Why Choose Teleview Subscription */}
          <section className="mt-20" aria-labelledby="hub-why-heading">
            <div className="text-center mb-10">
              <h2 id="hub-why-heading" className="text-2xl sm:text-3xl font-extrabold text-snow">
                Why Choose a <Accent>Teleview</Accent> Subscription?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Built from the ground up for high-availability sports streaming and low-latency broadcast playback.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {subscriptionHubData.whyChoosePoints.map((point) => (
                <div key={point.title} className="rounded-xl border border-charcoal bg-ash/30 p-6">
                  <h3 className="text-base font-bold text-snow">{point.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's Included Checklist */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/40 p-8" aria-labelledby="whats-included-heading">
            <h2 id="whats-included-heading" className="text-xl sm:text-2xl font-bold text-snow text-center">
              What Is Included With Every Subscription Plan
            </h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {subscriptionHubData.whatsIncluded.map((feat) => (
                <div key={feat} className="flex items-start gap-2.5 text-xs text-silver-mist">
                  <CheckCircle2 className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Device Compatibility Preview */}
          <section className="mt-16 text-center" aria-labelledby="devices-summary-heading">
            <h2 id="devices-summary-heading" className="text-xl sm:text-2xl font-bold text-snow">
              Compatible With Your Favorite Devices
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[580px] mx-auto">
              Teleview supports all major IPTV applications and streaming hardware with straightforward setup.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-smoke">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ink-800 px-4 py-2 text-snow">
                <Tv className="size-4 text-phosphor-green" aria-hidden="true" /> Amazon Fire TV
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ink-800 px-4 py-2 text-snow">
                <Tv className="size-4 text-phosphor-green" aria-hidden="true" /> Smart TVs (Samsung &amp; LG)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ink-800 px-4 py-2 text-snow">
                <Smartphone className="size-4 text-phosphor-green" aria-hidden="true" /> Android &amp; Google TV
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-charcoal bg-ink-800 px-4 py-2 text-snow">
                <Laptop className="size-4 text-phosphor-green" aria-hidden="true" /> Apple iOS &amp; tvOS
              </span>
            </div>
            <div className="mt-5">
              <a href="/devices" className="text-xs font-semibold text-phosphor-green hover:underline">
                View All Supported Hardware &amp; Apps &rarr;
              </a>
            </div>
          </section>

          {/* How Activation Works */}
          <section className="mt-16" aria-labelledby="activation-heading">
            <div className="text-center mb-10">
              <h2 id="activation-heading" className="text-xl sm:text-2xl font-bold text-snow">
                How Fast Activation Works
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Get up and streaming in three simple steps without technical complications.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionHubData.activationSteps.map((step) => (
                <div key={step.step} className="rounded-xl border border-charcoal bg-ash/30 p-6 text-left">
                  <span className="font-mono text-xs font-bold text-phosphor-green">STEP {step.step}</span>
                  <h3 className="mt-2 text-base font-bold text-snow">{step.title}</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hub FAQs */}
          <section className="mt-16" aria-labelledby="hub-faq-heading">
            <div className="text-center mb-8">
              <h2 id="hub-faq-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Subscription Plan Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Answers to common billing, renewal, and feature questions.
              </p>
            </div>
            <div className="space-y-4 max-w-[840px] mx-auto">
              {subscriptionHubData.hubFaqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-charcoal bg-ash/30 p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-snow flex items-start gap-2.5">
                    <HelpCircle className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    {faq.question}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-silver-mist leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Trust & Transparency Banner */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-8 text-center" aria-labelledby="trust-banner-heading">
            <ShieldCheck className="size-8 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
            <h2 id="trust-banner-heading" className="text-lg sm:text-xl font-bold text-snow">
              14-Day Risk-Free Money-Back Guarantee
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[540px] mx-auto">
              Every Teleview subscription is backed by our full 14-day refund guarantee. If you encounter any unresolvable issues, we refund your payment in full.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-smoke">
              <span>Instant Activation</span>
              <span>&bull;</span>
              <span>One-Time Payments</span>
              <span>&bull;</span>
              <span>24/7 Support</span>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
