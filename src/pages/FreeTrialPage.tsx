import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { GhostButton } from "../components/ui";
import {
  Tv,
  Zap,
  Calendar,
  Film,
  Smartphone,
  Activity,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ShieldCheck,
  Server,
  Clock,
  MessageCircle,
} from "lucide-react";
import { createWhatsAppTrialUrl } from "../config/site";
import { freeTrialData } from "../data/freeTrial";
import { deviceGuidesList } from "../data/deviceGuides";
import { bestIptvAppsList } from "../data/bestIptvApps";

export default function FreeTrialPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "IPTV Free Trial", url: "/iptv-free-trial" },
  ];

  const trialUrl = createWhatsAppTrialUrl();

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1040px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="py-8 sm:py-12 text-center max-w-[880px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3.5 py-1 text-xs font-mono text-phosphor-green mb-4">
              <Clock className="size-3.5 animate-pulse" aria-hidden="true" />
              <span>{freeTrialData.hero.durationBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-snow">
              {freeTrialData.hero.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-silver-mist leading-relaxed max-w-[760px] mx-auto">
              {freeTrialData.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={trialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center gap-2 text-sm px-6 py-3"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span>{freeTrialData.hero.primaryCtaText}</span>
              </a>
              <GhostButton href="/iptv-subscription" className="text-sm px-6 py-3">
                {freeTrialData.hero.secondaryCtaText}
              </GhostButton>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-xs text-smoke">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-phosphor-green" aria-hidden="true" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-phosphor-green" aria-hidden="true" />
                Instant WhatsApp delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-phosphor-green" aria-hidden="true" />
                Test live sports &amp; VOD channels
              </span>
            </div>
          </header>

          {/* Section: Test Before You Subscribe */}
          <section className="mt-12" aria-labelledby="why-test-heading">
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Stream Verification</span>
              <h2 id="why-test-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                What Can You Test During Your Trial?
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Evaluate stream smoothness, sound sync, and Electronic Program Guide response under real-world conditions.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {freeTrialData.testPoints.map((point) => (
                <article key={point.title} className="card p-6 border-charcoal flex flex-col">
                  <div className="size-10 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green mb-4">
                    {point.icon === "Tv" && <Tv className="size-5" aria-hidden="true" />}
                    {point.icon === "Zap" && <Zap className="size-5" aria-hidden="true" />}
                    {point.icon === "Calendar" && <Calendar className="size-5" aria-hidden="true" />}
                    {point.icon === "Film" && <Film className="size-5" aria-hidden="true" />}
                    {point.icon === "Smartphone" && <Smartphone className="size-5" aria-hidden="true" />}
                    {point.icon === "Activity" && <Activity className="size-5" aria-hidden="true" />}
                  </div>
                  <h3 className="text-base font-semibold text-snow">{point.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed flex-1">
                    {point.desc}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Section: How the Trial Works */}
          <section className="mt-20" aria-labelledby="how-trial-works-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Step-by-Step Procedure</span>
              <h2 id="how-trial-works-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                How the 24-Hour IPTV Free Trial Works
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Getting connected takes fewer than 5 minutes from request to first live broadcast.
              </p>
            </div>

            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
              {freeTrialData.howItWorks.map((step) => (
                <li key={step.number} className="card p-5 border-charcoal flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-phosphor-green">{step.number}</span>
                    <h3 className="text-sm sm:text-base font-semibold text-snow mt-1.5">{step.title}</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/60 text-[11px] text-smoke">
                    {step.detail}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section: Supported Devices */}
          <section className="mt-20" aria-labelledby="supported-devices-trial-heading">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="label-mono text-phosphor-green text-xs">Hardware Coverage</span>
                <h2 id="supported-devices-trial-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                  Test On Your Television, Phone, or Streaming Stick
                </h2>
                <p className="t-body-sm mt-1 text-silver-mist text-xs sm:text-sm">
                  Review hardware-specific setup steps for each major operating system:
                </p>
              </div>
              <a
                href="/devices"
                className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1 shrink-0"
              >
                All Supported Devices &rarr;
              </a>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {deviceGuidesList.map((d) => (
                <a
                  key={d.slug}
                  href={`/devices/${d.slug}`}
                  className="rounded-xl border border-charcoal bg-ash/30 p-4 hover:border-phosphor-green/40 transition-colors group block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono uppercase text-phosphor-green">{d.category}</span>
                    <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-xs text-silver-mist line-clamp-2">{d.tagline}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Section: Compatible IPTV Players */}
          <section className="mt-20" aria-labelledby="compatible-players-trial-heading">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="label-mono text-phosphor-green text-xs">Player Applications</span>
                <h2 id="compatible-players-trial-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                  Compatible IPTV Player Applications
                </h2>
                <p className="t-body-sm mt-1 text-silver-mist text-xs sm:text-sm">
                  Teleview credentials work seamlessly across all major IPTV player engines. Compare apps or browse the directory:
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="/best-iptv"
                  className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                >
                  Compare Players &rarr;
                </a>
                <span className="text-smoke">&bull;</span>
                <a
                  href="/iptv-players"
                  className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                >
                  Apps Directory &rarr;
                </a>
              </div>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {bestIptvAppsList.slice(0, 6).map((app) => (
                <a
                  key={app.slug}
                  href={`/iptv-players/${app.slug}`}
                  className="card p-4 border-charcoal hover:border-phosphor-green/40 transition-colors group block"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-phosphor-green">{app.licenseModel}</span>
                    <span className="text-[11px] text-smoke">{app.appCategory || app.bestFor}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    {app.name}
                  </h3>
                  <p className="mt-1 text-xs text-silver-mist line-clamp-2">{app.tagline}</p>
                </a>
              ))}
            </div>
          </section>

          {/* Section: Actionable Testing Checklist */}
          <section className="mt-20" aria-labelledby="testing-checklist-heading">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 id="testing-checklist-heading" className="t-heading-sm text-lg sm:text-xl font-bold text-snow">
                  Actionable Testing Checklist During Your Trial
                </h2>
              </div>
              <p className="t-body-sm text-silver-mist text-xs sm:text-sm">
                Follow these five checks to ensure Teleview meets your standards before choosing a subscription duration:
              </p>

              <div className="mt-6 space-y-4">
                {freeTrialData.testingChecklist.map((item) => (
                  <article key={item.title} className="rounded-xl border border-charcoal bg-ash/30 p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                          {item.category}
                        </span>
                        <h3 className="text-sm font-semibold text-snow">{item.title}</h3>
                      </div>
                      {item.helpLink && (
                        <a
                          href={item.helpLink.href}
                          className="text-xs text-phosphor-green hover:underline font-medium inline-flex items-center gap-1 shrink-0"
                        >
                          {item.helpLink.text} &rarr;
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">{item.desc}</p>
                    <p className="mt-1.5 text-xs text-smoke italic">{item.guidance}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Why Teleview Factual Quality */}
          <section className="mt-20" aria-labelledby="why-teleview-trial-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Quality Commitment</span>
              <h2 id="why-teleview-trial-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Why Evaluate Teleview as Your IPTV Service?
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                We believe in complete transparency. Test our servers directly before committing to any paid plan.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div className="card p-5 border-charcoal text-center">
                <Server className="size-6 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-snow">Anti-Freeze Edge Routing</h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Distributed CDN architecture with intelligent traffic management designed to prevent stutter during peak live matches.
                </p>
              </div>

              <div className="card p-5 border-charcoal text-center">
                <Zap className="size-6 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-snow">Zero Contract Lock-Ins</h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Flexible plans from 1 to 12 months with zero automatic rebilling, credit card lock-ins, or cancellation friction.
                </p>
              </div>

              <div className="card p-5 border-charcoal text-center">
                <Activity className="size-6 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-snow">24/7 WhatsApp Support</h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Real technical support staff online around the clock to troubleshoot decoder settings, EPG syncing, and playlist URLs.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Free Trial FAQs */}
          <section className="mt-20" aria-labelledby="free-trial-faqs-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Got Questions?</span>
              <h2 id="free-trial-faqs-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Frequently Asked Questions About the Free Trial
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Everything you need to know about testing Teleview IPTV risk-free:
              </p>
            </div>

            <div className="space-y-4 max-w-[860px] mx-auto">
              {freeTrialData.faqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-charcoal bg-ash/30 p-5">
                  <h3 className="font-semibold text-snow text-sm sm:text-base flex items-start gap-2.5">
                    <HelpCircle className="size-4 text-phosphor-green shrink-0 mt-1" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-silver-mist leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Bottom Conversion Banner */}
          <section className="mt-20 card p-8 sm:p-10 border-phosphor-green/30 bg-ash/30 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-snow">
              Ready to Start Your 24-Hour IPTV Free Trial?
            </h2>
            <p className="mt-3 text-sm text-silver-mist max-w-[600px] mx-auto leading-relaxed">
              Connect with our support team on WhatsApp to receive your server URL, username, and password within minutes. No credit card required.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={trialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green inline-flex items-center gap-2 text-sm px-6 py-3"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                <span>Start Free Trial Now</span>
              </a>
              <GhostButton href="/iptv-subscription" className="text-sm px-6 py-3">
                Explore Subscription Plans
              </GhostButton>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
