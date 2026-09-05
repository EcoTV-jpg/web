import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  Tv,
  Cpu,
  HardDrive,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Zap,
  ChevronLeft,
  Sliders,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { deviceGuidesList, DeviceGuideDetail } from "../data/deviceGuides";
import NotFoundPage from "./NotFoundPage";

export default function DeviceGuidePage({ slug }: { slug: string }) {
  const normalizedSlug = String(slug || "").trim().toLowerCase();
  const device: DeviceGuideDetail | undefined = deviceGuidesList.find(
    (d) => d.slug.toLowerCase() === normalizedSlug
  );

  if (!device) {
    return <NotFoundPage />;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Supported Devices", url: "/devices" },
    { name: device.name, url: `/devices/${device.slug}` },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1000px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Return to Devices Hub */}
          <div className="mb-4">
            <a
              href="/devices"
              className="inline-flex items-center gap-1.5 text-xs text-silver-mist hover:text-phosphor-green transition-colors"
            >
              <ChevronLeft className="size-3.5" aria-hidden="true" />
              <span>Back to All Supported Devices</span>
            </a>
          </div>

          {/* Article Header */}
          <header className="py-4 sm:py-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2.5 py-0.5 text-xs font-mono text-phosphor-green">
                {device.category}
              </span>
              <span className="text-xs text-smoke font-mono">
                OS: {device.operatingSystem}
              </span>
            </div>

            <h1 className="t-h2 text-snow font-bold tracking-tight max-w-[840px]">
              How to Set Up &amp; Stream IPTV on {device.name}
            </h1>
            <p className="t-body mt-3 max-w-[760px] text-silver-mist leading-relaxed">
              {device.tagline}
            </p>
          </header>

          {/* Quick Answer Callout */}
          <section className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-5 sm:p-7" aria-labelledby="quick-answer-heading">
            <div className="flex items-start gap-3">
              <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-2">
                <h2 id="quick-answer-heading" className="text-sm sm:text-base font-bold text-snow">
                  Direct Answer: Can You Stream IPTV on {device.name}?
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  {device.heroAnswer}
                </p>
              </div>
            </div>
          </section>

          {/* Hardware Specifications & Decoders */}
          <section className="mt-12" aria-labelledby="specs-heading">
            <h2 id="specs-heading" className="text-lg sm:text-xl font-bold text-snow">
              Hardware Specifications &amp; Decoding Capabilities
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              Verified operating system specs and video standards for {device.name}:
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3 text-xs">
              <div className="rounded-xl border border-charcoal bg-ash/30 p-4">
                <Cpu className="size-4 text-phosphor-green mb-2" aria-hidden="true" />
                <strong className="text-snow block mb-1">RAM Recommendation:</strong>
                <p className="text-silver-mist leading-relaxed">{device.minRamRecommended}</p>
              </div>
              <div className="rounded-xl border border-charcoal bg-ash/30 p-4">
                <HardDrive className="size-4 text-phosphor-green mb-2" aria-hidden="true" />
                <strong className="text-snow block mb-1">Internal Storage:</strong>
                <p className="text-silver-mist leading-relaxed">{device.storageRequirement}</p>
              </div>
              <div className="rounded-xl border border-charcoal bg-ash/30 p-4">
                <Tv className="size-4 text-phosphor-green mb-2" aria-hidden="true" />
                <strong className="text-snow block mb-1">Video Decoders:</strong>
                <p className="text-silver-mist leading-relaxed">{device.videoDecoders.join(", ")}</p>
              </div>
            </div>
          </section>

          {/* Recommended Players */}
          <section className="mt-12" aria-labelledby="players-heading">
            <h2 id="players-heading" className="text-lg sm:text-xl font-bold text-snow">
              Top Recommended IPTV Players for {device.name}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              These applications provide fast channel switching and a responsive TV guide for this hardware:
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs">
              {device.recommendedPlayers.map((player) => (
                <article key={player.name} className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-snow">{player.name}</h3>
                    <p className="mt-1.5 text-silver-mist leading-relaxed">{player.reason}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/60">
                    <a
                      href={`/iptv-players/${player.slug}`}
                      className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                    >
                      View {player.name} Manual
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Step-by-Step Installation Guide */}
          <section className="mt-12 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="setup-steps-heading">
            <h2 id="setup-steps-heading" className="text-lg sm:text-xl font-bold text-snow">
              Step-by-Step Setup Guide: {device.name}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              Follow these verified instructions to connect your Teleview subscription:
            </p>

            <ol className="mt-6 space-y-4 list-none p-0">
              {device.setupSteps.map((step) => (
                <li key={step.step} className="rounded-xl border border-charcoal bg-ink-800/80 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="size-7 rounded-full bg-phosphor-green/20 border border-phosphor-green/40 font-mono text-xs font-bold text-phosphor-green flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-snow">{step.title}</h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      {step.instruction}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Advantages & Limitations */}
          <section className="mt-12" aria-labelledby="pros-cons-heading">
            <h2 id="pros-cons-heading" className="text-lg sm:text-xl font-bold text-snow">
              Advantages &amp; Limitations on {device.name}
            </h2>

            <div className="mt-5 grid sm:grid-cols-2 gap-5 text-xs">
              <div className="rounded-xl border border-phosphor-green/30 bg-ash/20 p-5">
                <h3 className="text-sm font-semibold text-phosphor-green flex items-center gap-2 mb-3">
                  <CheckCircle2 className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Hardware Strengths</span>
                </h3>
                <ul className="space-y-2 text-silver-mist">
                  {device.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-phosphor-green mt-0.5">&bull;</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/20 p-5">
                <h3 className="text-sm font-semibold text-smoke flex items-center gap-2 mb-3">
                  <AlertTriangle className="size-4 text-smoke" aria-hidden="true" />
                  <span>Platform Limitations</span>
                </h3>
                <ul className="space-y-2 text-silver-mist">
                  {device.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-smoke mt-0.5">&bull;</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Device Troubleshooting */}
          <section className="mt-12" aria-labelledby="troubleshooting-heading">
            <h2 id="troubleshooting-heading" className="text-lg sm:text-xl font-bold text-snow">
              Common {device.name} Issues &amp; Solutions
            </h2>

            <div className="mt-4 space-y-4">
              {device.troubleshooting.map((t, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ash/30 p-5 text-xs space-y-1.5">
                  <h3 className="text-sm font-semibold text-snow">{t.issue}</h3>
                  <p className="text-smoke"><strong className="text-snow">Probable Cause:</strong> {t.cause}</p>
                  <p className="text-silver-mist"><strong className="text-phosphor-green">Solution:</strong> {t.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contextual CTA */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Ready to Stream on Your {device.name}?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[580px] mx-auto leading-relaxed">
              Connect Teleview&apos;s premium 4K live sports and international channels to your {device.name} in minutes.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                View Subscription Plans
              </GreenButton>
              <GhostButton href="/setup" className="text-xs px-5 py-2.5">
                Full Setup Manual
              </GhostButton>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-14" aria-labelledby="faqs-heading">
            <div className="text-center mb-8">
              <h2 id="faqs-heading" className="text-lg sm:text-xl font-bold text-snow">
                Frequently Asked Questions About {device.name}
              </h2>
            </div>
            <div className="space-y-4 max-w-[840px] mx-auto">
              {device.faqs.map((faq) => (
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

          {/* Related Device Guides Cross-Linking */}
          <section className="mt-16 border-t border-charcoal/60 pt-12" aria-labelledby="other-devices-heading">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 id="other-devices-heading" className="text-lg sm:text-xl font-bold text-snow">
                  Explore Other Supported IPTV Devices
                </h2>
                <p className="text-xs text-silver-mist mt-1">
                  Compare setup requirements and performance across popular streaming hardware:
                </p>
              </div>
              <a
                href="/devices"
                className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1 shrink-0"
              >
                All Supported Devices &rarr;
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {deviceGuidesList
                .filter((d) => d.slug !== device.slug)
                .map((other) => (
                  <a
                    key={other.slug}
                    href={`/devices/${other.slug}`}
                    className="rounded-xl border border-charcoal bg-ash/30 p-4 hover:border-phosphor-green/40 transition-colors group block"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono uppercase text-phosphor-green">
                        {other.category}
                      </span>
                      <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                    </div>
                    <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                      {other.name}
                    </h3>
                    <p className="mt-1 text-xs text-silver-mist line-clamp-2">
                      {other.tagline}
                    </p>
                  </a>
                ))}
            </div>

            <div className="mt-8 rounded-xl border border-charcoal bg-ash/20 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-snow font-semibold">Encountering playback or buffering issues on your {device.name}?</span>
                <p className="text-silver-mist">Read our diagnostic guides on <a href="/help-center/buffering" className="text-phosphor-green hover:underline">stopping IPTV buffering</a> or <a href="/help-center/connection-problems" className="text-phosphor-green hover:underline">resolving server connection timeouts</a>.</p>
              </div>
              <a
                href="/help-center"
                className="rounded-lg border border-charcoal bg-ash/60 px-4 py-2 text-snow hover:border-phosphor-green/50 hover:text-phosphor-green transition-colors font-medium shrink-0"
              >
                Visit Help Center
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
