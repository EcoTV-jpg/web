import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import PlanComparisonTable from "../components/PlanComparisonTable";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { subscriptionHubData, allSubscriptionPlans } from "../data/products";
import {
  ShieldCheck,
  CheckCircle2,
  Tv,
  Smartphone,
  Laptop,
  HelpCircle,
  ArrowRight,
  Zap,
  Globe,
  Film,
  Calendar,
  Layers,
  Server,
  Headphones,
  Sparkles,
  Wifi,
  MonitorCheck,
  AlertCircle,
} from "lucide-react";

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
          {/* 1. Breadcrumb navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* 2. Above-the-Fold Hero */}
          <Reveal>
            <div className="text-center max-w-[820px] mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3.5 py-1 text-xs font-semibold text-phosphor-green">
                <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
                {subscriptionHubData.kicker}
              </span>
              <h1 className="t-display mt-4 text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold text-snow">
                IPTV Subscription Plans: <Accent>25,000+ Live Channels &amp; 4K Streaming</Accent>
              </h1>
              <p className="t-body mt-4 text-silver-mist text-sm sm:text-base leading-relaxed">
                {subscriptionHubData.subhead}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <GreenButton href="#comparison" className="text-xs sm:text-sm">
                  Compare Plans
                </GreenButton>
                <GhostButton href="/iptv-free-trial" className="text-xs sm:text-sm">
                  24h Free Trial
                </GhostButton>
                <GhostButton href="/iptv-pricing" className="text-xs sm:text-sm">
                  Pricing Breakdown
                </GhostButton>
                <GhostButton href="/setup" className="text-xs sm:text-sm">
                  Setup Guide
                </GhostButton>
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
                      25,000 live TV channels, 100,000+ on-demand movies and series, 4K sports streaming (on supported feeds), zero automatic rebilling,
                      and a risk-free 14-day money-back guarantee. Want to evaluate stream stability and device compatibility first? Request a 24-hour{" "}
                      <a href="/iptv-free-trial" className="text-phosphor-green font-semibold hover:underline">
                        IPTV free trial
                      </a>
                      , explore the complete{" "}
                      <a href="/" className="text-phosphor-green font-semibold hover:underline">
                        Teleview IPTV service
                      </a>
                      , or consult our detailed{" "}
                      <a href="/iptv-pricing" className="text-phosphor-green font-semibold hover:underline">
                        IPTV pricing guide
                      </a>{" "}
                      for connection economics and multi-month discount breakdowns.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </Reveal>

          {/* 3. Available Plans Product Grid (Direct Commercial Intent) */}
          <section className="mt-14" aria-labelledby="available-plans-heading">
            <div className="text-center mb-8">
              <span className="label-mono text-phosphor-green text-xs">Duration Selection</span>
              <h2 id="available-plans-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                Choose Your IPTV Subscription Duration
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Every subscription includes identical 25,000+ channel catalog access, 4K sports coverage, and 24/7 technical support. Select your duration below:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {allSubscriptionPlans.map((plan) => (
                <Reveal key={plan.slug} className="h-full">
                  <article className="card card-hover p-6 h-full flex flex-col justify-between border-charcoal bg-ash/40">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-phosphor-green">
                          {plan.badge || "Standard Plan"}
                        </span>
                        {plan.months > 1 && (
                          <span className="text-[10px] font-mono font-bold bg-phosphor-green/20 text-phosphor-green px-2 py-0.5 rounded">
                            {plan.months === 3 ? "SAVE 19%" : plan.months === 6 ? "SAVE 38%" : "SAVE 53%"}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 text-lg font-bold text-snow">{plan.duration}</h3>
                      {plan.image && (
                        <div className="mt-3 mb-2 overflow-hidden rounded-lg border border-charcoal/60 bg-black/50">
                          <picture>
                            <source srcSet={plan.image.avif} type="image/avif" />
                            <img
                              src={plan.image.fallback}
                              alt={plan.image.alt}
                              width={plan.image.width}
                              height={plan.image.height}
                              className="w-full h-auto aspect-[1475/720] object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
                        </div>
                      )}
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-snow">{plan.priceFormatted}</span>
                        <span className="text-xs text-smoke font-normal">{plan.billingText}</span>
                      </div>
                      <p className="mt-1 text-xs text-phosphor-green font-medium">
                        Equivalent to {plan.monthlyFormatted}
                      </p>
                      <p className="mt-3 text-xs text-silver-mist leading-relaxed min-h-[48px]">
                        {plan.tagline}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-charcoal/60 pt-4 text-xs text-silver-mist">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span>25,000+ Live Channels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span>4K Sports &amp; 7-Day EPG</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span>1 Active Device Profile</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span>14-Day Money-Back Guarantee</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-charcoal/60 space-y-2">
                      <GreenButton
                        href={`/iptv-subscription/${plan.slug}`}
                        className="w-full text-xs py-2.5 justify-center"
                      >
                        Select {plan.duration}
                      </GreenButton>
                      <a
                        href={`/iptv-subscription/${plan.slug}`}
                        className="block text-center text-[11px] text-smoke hover:text-phosphor-green transition-colors"
                      >
                        View Detailed Specifications &rarr;
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Payment Methods & Instant Dispatch Trust Banner */}
            <div className="mt-8 rounded-xl border border-charcoal/70 bg-ash/30 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-xs text-silver-mist">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                <span><strong className="text-snow">Accepted Payment Methods:</strong> Visa, Mastercard, American Express, PayPal, and Major Cryptocurrencies (BTC, USDT).</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11px] text-smoke bg-ink-800/80 px-3 py-1.5 rounded-lg border border-charcoal">
                <span className="size-1.5 rounded-full bg-phosphor-green animate-pulse" aria-hidden="true" />
                <span>Automated Setup &bull; Instant Email Dispatch (&lt; 15 mins)</span>
              </div>
            </div>

            {/* Viewer Profile Decision Framework */}
            <div className="mt-10 mb-6">
              <h3 className="text-sm sm:text-base font-bold text-snow mb-3">
                Viewer Decision Guide: Which Duration Fits Your Streaming Habits?
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                <div className="rounded-xl border border-charcoal bg-ash/20 p-4 space-y-1.5">
                  <span className="font-semibold text-phosphor-green">1 Month ($16.00)</span>
                  <p className="font-medium text-snow">Best for Road Testing</p>
                  <p className="text-smoke leading-relaxed">Ideal for testing peak evening stream stability on your local ISP before upgrading.</p>
                </div>
                <div className="rounded-xl border border-charcoal bg-ash/20 p-4 space-y-1.5">
                  <span className="font-semibold text-phosphor-green">3 Months ($39.00)</span>
                  <p className="font-medium text-snow">Best for Sports Seasons</p>
                  <p className="text-smoke leading-relaxed">Optimal for single tournament seasons like Champions League knockouts or NFL playoffs.</p>
                </div>
                <div className="rounded-xl border border-charcoal bg-ash/20 p-4 space-y-1.5">
                  <span className="font-semibold text-phosphor-green">6 Months ($60.00)</span>
                  <p className="font-medium text-snow">Biannual Regulars</p>
                  <p className="text-smoke leading-relaxed">Balanced mid-term savings ($10/mo effective) covering entire winter sports schedules.</p>
                </div>
                <div className="rounded-xl border border-phosphor-green/40 bg-ash/40 p-4 space-y-1.5">
                  <span className="font-semibold text-phosphor-green">12 Months ($90.00)</span>
                  <p className="font-medium text-snow">Maximum Annual Value</p>
                  <p className="text-smoke leading-relaxed">Top choice: $7.50/mo effective with high-capacity VIP routing reserves and grandfathered renewal rates.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Plan Comparison Section */}
          <div id="comparison">
            <PlanComparisonTable />
          </div>

          {/* 5. What Is Included With Every Subscription Plan (Detailed Specifications) */}
          <section className="mt-20" aria-labelledby="whats-included-heading">
            <div className="text-center mb-10">
              <span className="label-mono text-phosphor-green text-xs">Standard Inclusions</span>
              <h2 id="whats-included-heading" className="text-2xl sm:text-3xl font-extrabold text-snow mt-1">
                What Is Included With Every <Accent>Teleview</Accent> Subscription
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[640px] mx-auto">
                We believe in complete transparency. Regardless of whether you select a 1-month pass or an annual subscription, you receive identical premier streaming capabilities:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">25,000+ Live TV Channels</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  Access major national, international, and regional television networks across news, entertainment, and documentary categories in HD, FHD, and 4K.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Zap className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">4K Live Sports &amp; 60 FPS</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  Dedicated high-frame-rate feeds for Premier League, UEFA Champions League, NFL, NBA, Formula 1, and pay-per-view events (on supported channels).
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Film className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">100,000+ Movies &amp; VOD</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  Expansive video-on-demand cinema library updated weekly with multiple language audio tracks, multi-language subtitles, and complete series box sets.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Calendar className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">7-Day XMLTV EPG Guide</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  Automated electronic program guide with dynamic timezone synchronization, detailed episode information, and catch-up TV compatibility.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Layers className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">Xtream Codes &amp; M3U Formats</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  Universal credentials supporting Xtream Codes API (Server URL, Port, Username, Password) as well as custom M3U Plus playlist download URLs.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Server className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">Multi-CDN Edge Routing</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  High-capacity distributed edge CDN infrastructure engineered with automated failover and adaptive buffering to prevent stutter during peak viewing hours.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Smartphone className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">1 Active Stream (Expandable)</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  Standard plans support 1 simultaneous stream across your personal devices. Multi-room concurrent streaming add-ons are available upon request.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2.5">
                <div className="size-8 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center">
                  <Headphones className="size-4 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-snow">24/7 Technical Support</h3>
                <p className="text-xs text-silver-mist leading-relaxed">
                  Real operational technical assistance via WhatsApp and email ticketing for playlist loading, app configuration, and streaming troubleshooting.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Hardware & IPTV Player Compatibility Matrix */}
          <section className="mt-20" aria-labelledby="hardware-matrix-heading">
            <div className="text-center mb-10">
              <span className="label-mono text-phosphor-green text-xs">Cross-Platform Compatibility</span>
              <h2 id="hardware-matrix-heading" className="text-2xl sm:text-3xl font-extrabold text-snow mt-1">
                Compatible Hardware &amp; Recommended IPTV Players
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Teleview provides standard streaming server credentials that integrate seamlessly into all leading IPTV player applications:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {subscriptionHubData.hardwareCompatibility.map((item) => (
                <div key={item.category} className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-snow flex items-center gap-2">
                      <Tv className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                      <span>{item.category}</span>
                    </h3>
                    <p className="text-xs text-smoke leading-relaxed">
                      <strong className="text-snow">Devices:</strong> {item.devices}
                    </p>
                    <p className="text-xs text-silver-mist leading-relaxed">
                      <strong className="text-snow">Recommended Players:</strong> {item.recommendedApps}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/50">
                    <a
                      href={item.setupUrl}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-phosphor-green hover:underline"
                    >
                      <span>View Installation Manual</span>
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <a href="/devices" className="text-phosphor-green hover:underline">
                Explore All Supported Devices &rarr;
              </a>
              <span className="text-smoke">&bull;</span>
              <a href="/iptv-players" className="text-phosphor-green hover:underline">
                Explore IPTV Players Directory &rarr;
              </a>
              <span className="text-smoke">&bull;</span>
              <a href="/best-iptv" className="text-phosphor-green hover:underline">
                Best IPTV Services Comparison &rarr;
              </a>
            </div>
          </section>

          {/* 7. Step-by-Step Activation Workflow */}
          <section className="mt-20" aria-labelledby="activation-workflow-heading">
            <div className="text-center mb-10">
              <span className="label-mono text-phosphor-green text-xs">Onboarding Timeline</span>
              <h2 id="activation-workflow-heading" className="text-2xl sm:text-3xl font-extrabold text-snow mt-1">
                How Fast Activation Works
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[560px] mx-auto">
                Get up and streaming in three straightforward steps without technical complications or recurring contracts:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionHubData.activationSteps.map((step) => (
                <div key={step.step} className="rounded-xl border border-charcoal bg-ash/30 p-6 text-left relative overflow-hidden">
                  <span className="font-mono text-xs font-bold text-phosphor-green">STEP {step.step}</span>
                  <h3 className="mt-2 text-base font-bold text-snow">{step.title}</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Subscription Decision Framework */}
          <section className="mt-20" aria-labelledby="decision-framework-heading">
            <div className="text-center mb-10">
              <span className="label-mono text-phosphor-green text-xs">Buyer Guidance</span>
              <h2 id="decision-framework-heading" className="text-2xl sm:text-3xl font-extrabold text-snow mt-1">
                Which IPTV Subscription Plan Is Right for You?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Match your household viewing habits and sports calendar to the most cost-effective subscription tier:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {subscriptionHubData.decisionFramework.map((guide) => (
                <div key={guide.plan} className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                      <h3 className="text-sm font-bold text-snow">{guide.plan}</h3>
                    </div>
                    <p className="text-xs font-semibold text-phosphor-green">{guide.headline}</p>
                    <p className="text-xs text-silver-mist leading-relaxed">{guide.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/50">
                    <a
                      href={`/iptv-subscription/${guide.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-phosphor-green hover:underline"
                    >
                      <span>Explore {guide.plan.split("(")[0].trim()} Plan</span>
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Broadband Prerequisites & Service Limitations (Crucial for E-E-A-T & Google Search Essentials) */}
          <section className="mt-20 rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-8" aria-labelledby="prerequisites-heading">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center shrink-0 mt-1">
                <Wifi className="size-5 text-phosphor-green" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                <h2 id="prerequisites-heading" className="text-lg sm:text-xl font-bold text-snow">
                  Broadband Prerequisites &amp; Transparent Service Policies
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  To ensure a reliable, buffer-free viewing experience, please review our recommended technical prerequisites and operational policies before completing your purchase:
                </p>

                <div className="grid sm:grid-cols-3 gap-4 pt-2 text-xs">
                  <div className="rounded-lg border border-charcoal bg-ink-800/60 p-3.5 space-y-1">
                    <span className="font-semibold text-snow flex items-center gap-1.5">
                      <Zap className="size-3.5 text-phosphor-green" /> Internet Bandwidth
                    </span>
                    <p className="text-silver-mist leading-relaxed">
                      Minimum 15 Mbps for standard HD channels; 25–50 Mbps recommended for 4K sports feeds. 5GHz Wi-Fi or wired Ethernet is strongly advised over 2.4GHz.
                    </p>
                  </div>

                  <div className="rounded-lg border border-charcoal bg-ink-800/60 p-3.5 space-y-1">
                    <span className="font-semibold text-snow flex items-center gap-1.5">
                      <MonitorCheck className="size-3.5 text-phosphor-green" /> Concurrency Rules
                    </span>
                    <p className="text-silver-mist leading-relaxed">
                      Standard subscriptions include 1 active stream profile. You can register credentials across multiple home devices, but only one screen can stream simultaneously unless a multi-room pass is added.
                    </p>
                  </div>

                  <div className="rounded-lg border border-charcoal bg-ink-800/60 p-3.5 space-y-1">
                    <span className="font-semibold text-snow flex items-center gap-1.5">
                      <AlertCircle className="size-3.5 text-phosphor-green" /> Player App Licensing
                    </span>
                    <p className="text-silver-mist leading-relaxed">
                      Teleview provides raw IPTV server lines (Xtream Codes API &amp; M3U). Independent third-party player applications (such as TiviMate Premium or IBO Player) have separate developer licenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Hub FAQs */}
          <section className="mt-20" aria-labelledby="hub-faq-heading">
            <div className="text-center mb-8">
              <span className="label-mono text-phosphor-green text-xs">Frequently Asked Questions</span>
              <h2 id="hub-faq-heading" className="text-xl sm:text-2xl font-bold text-snow mt-1">
                IPTV Subscription Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Clear answers to common questions regarding plans, channels, concurrency, and refunds:
              </p>
            </div>
            <div className="space-y-4 max-w-[840px] mx-auto">
              {subscriptionHubData.hubFaqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-charcoal bg-ash/30 p-5">
                  <h3 className="text-sm sm:text-base font-semibold text-snow flex items-start gap-2.5">
                    <HelpCircle className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-silver-mist leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* 11. Trust & Transparency Banner */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-8 text-center" aria-labelledby="trust-banner-heading">
            <ShieldCheck className="size-8 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
            <h2 id="trust-banner-heading" className="text-lg sm:text-xl font-bold text-snow">
              14-Day Risk-Free Money-Back Guarantee
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[560px] mx-auto">
              Every Teleview subscription is covered by our full 14-day money-back guarantee under our{" "}
              <a href="/refund-policy" className="text-phosphor-green hover:underline">
                Refund Policy
              </a>
              . If you experience technical incompatibilities that our support team cannot resolve, request a complete refund.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-smoke">
              <span>Instant 5–15 Min Activation</span>
              <span>&bull;</span>
              <span>100% Pre-Paid (No Re-billing)</span>
              <span>&bull;</span>
              <span>24/7 WhatsApp &amp; Email Support</span>
            </div>
            <div className="mt-6">
              <GreenButton href="/iptv-free-trial" className="text-xs px-6 py-2.5">
                Start 24-Hour Free Trial First
              </GreenButton>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

