import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  Tv,
  Wifi,
  Cpu,
  ShieldCheck,
  Layers,
  Zap,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Sliders,
  Globe,
  Activity,
  Server,
  Code,
} from "lucide-react";
import {
  iptvArchitectureLayers,
  iptvVsTraditionalComparison,
  iptvProtocolsList,
  whatIsIptvFaqs,
} from "../data/whatIsIptv";

export default function WhatIsIptvPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "What Is IPTV?", url: "/what-is-iptv" },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1000px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Article Header */}
          <header className="py-6 sm:py-8 text-center max-w-[860px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3.5 py-1 text-xs font-mono text-phosphor-green mb-4">
              <Activity className="size-3.5" aria-hidden="true" />
              <span>Technology Architecture &amp; Transmission Standards</span>
            </div>

            <h1 className="t-h1 text-snow font-extrabold tracking-tight">
              What Is IPTV? <Accent>The Complete 2026 Technology Guide</Accent>
            </h1>

            <p className="t-body mt-4 text-silver-mist leading-relaxed">
              Understand how Internet Protocol Television works, how it compares to legacy cable and satellite broadcasts, the core streaming protocols (HLS, MPEG-TS, Xtream Codes), and what hardware delivers the best 4K viewing experience.
            </p>
          </header>

          {/* Direct Answer: Quick Definition */}
          <section className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-8" aria-labelledby="definition-heading">
            <div className="flex items-start gap-3.5">
              <Zap className="size-6 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-3">
                <h2 id="definition-heading" className="text-base sm:text-lg font-bold text-snow">
                  Direct Answer: What Does IPTV Mean?
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  <strong className="text-snow">IPTV (Internet Protocol Television)</strong> is the transmission of continuous television programming and video content over internet protocol (IP) networks using packet-switched architecture, rather than traditional terrestrial radio waves, satellite transponders, or analog cable television signals.
                </p>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  Unlike traditional broadcast television where every channel is sent simultaneously over a physical wire, IPTV operates on a <strong className="text-snow">two-way client-server request model</strong>: when you change the channel on your television or mobile app, your player sends a direct unicast request to an edge server, which streams only that specific media file or live video chunk to your screen.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: How IPTV Works (Technical Architecture) */}
          <section className="mt-14" aria-labelledby="architecture-heading">
            <div className="text-center mb-8">
              <h2 id="architecture-heading" className="text-xl sm:text-2xl font-bold text-snow">
                How IPTV Works: The 4-Stage Streaming Architecture
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                From satellite dish ingestion to your living room television screen, here is the technical path of an IPTV stream:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {iptvArchitectureLayers.map((layer) => (
                <article key={layer.step} className="rounded-xl border border-charcoal bg-ash/30 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="size-7 rounded-full bg-phosphor-green/20 border border-phosphor-green/40 font-mono text-xs font-bold text-phosphor-green flex items-center justify-center shrink-0">
                        {layer.step}
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-snow">{layer.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 2: IPTV vs Cable vs Satellite vs OTT Streaming */}
          <section className="mt-16" aria-labelledby="comparison-heading">
            <div className="text-center mb-8">
              <h2 id="comparison-heading" className="text-xl sm:text-2xl font-bold text-snow">
                IPTV vs. Cable vs. Satellite vs. OTT Streaming
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[650px] mx-auto">
                How modern Internet Protocol Television compares against legacy broadcast infrastructure and traditional on-demand apps:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-charcoal bg-ink-800/80 text-smoke uppercase tracking-wider text-[11px]">
                    <th scope="col" className="p-4 font-semibold">Aspect</th>
                    <th scope="col" className="p-4 font-semibold text-phosphor-green">IPTV (Teleview)</th>
                    <th scope="col" className="p-4 font-semibold">Traditional Cable</th>
                    <th scope="col" className="p-4 font-semibold">Satellite TV</th>
                    <th scope="col" className="p-4 font-semibold">OTT (Netflix/Prime)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                  {iptvVsTraditionalComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-ash/50 transition-colors">
                      <th scope="row" className="p-4 font-semibold text-snow">{row.aspect}</th>
                      <td className="p-4 font-medium text-phosphor-green">{row.iptv}</td>
                      <td className="p-4">{row.traditionalCable}</td>
                      <td className="p-4">{row.satelliteTv}</td>
                      <td className="p-4">{row.ottStreaming}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Key Protocols & Streaming Standards */}
          <section className="mt-16" aria-labelledby="protocols-heading">
            <div className="text-center mb-8">
              <h2 id="protocols-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Key IPTV Protocols &amp; Standards Explained
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Understand the transmission formats, authentication APIs, and playlist files used by modern IPTV applications.
              </p>
            </div>

            <div className="space-y-4">
              {iptvProtocolsList.map((proto) => (
                <article key={proto.name} className="rounded-xl border border-charcoal bg-ash/30 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base font-bold text-snow">{proto.name}</h3>
                      <span className="text-xs text-silver-mist font-normal">({proto.fullName})</span>
                    </div>
                    <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[11px] font-mono text-phosphor-green">
                      {proto.type}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                    {proto.description}
                  </p>
                  <p className="mt-2 text-xs text-smoke">
                    <strong className="text-snow">Common Usage:</strong> {proto.standardUse}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Section 4: Hardware & Network Requirements */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/20 p-6 sm:p-8" aria-labelledby="requirements-heading">
            <div className="flex items-center gap-3 mb-4">
              <Sliders className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 id="requirements-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Hardware &amp; Internet Requirements for 4K IPTV
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
              Because IPTV streams high-bitrate live video across your broadband network, your equipment and Wi-Fi setup directly determine your streaming quality:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mt-6 text-xs">
              <div className="rounded-xl border border-charcoal bg-ink-800/80 p-5">
                <Wifi className="size-5 text-phosphor-green mb-2" aria-hidden="true" />
                <h3 className="text-sm font-bold text-snow mb-1">Bandwidth Standards</h3>
                <ul className="space-y-1.5 text-silver-mist">
                  <li>&bull; SD Quality: 8 Mbps</li>
                  <li>&bull; 1080p HD: 15–20 Mbps</li>
                  <li>&bull; 4K UHD 60 FPS: 30+ Mbps</li>
                </ul>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/80 p-5">
                <Cpu className="size-5 text-phosphor-green mb-2" aria-hidden="true" />
                <h3 className="text-sm font-bold text-snow mb-1">Hardware Decoders</h3>
                <ul className="space-y-1.5 text-silver-mist">
                  <li>&bull; HEVC / H.265 support</li>
                  <li>&bull; 2 GB+ RAM recommended</li>
                  <li>&bull; Dedicated TV streaming SoC</li>
                </ul>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/80 p-5">
                <ShieldCheck className="size-5 text-phosphor-green mb-2" aria-hidden="true" />
                <h3 className="text-sm font-bold text-snow mb-1">Network Hygiene</h3>
                <ul className="space-y-1.5 text-silver-mist">
                  <li>&bull; 5 GHz Wi-Fi or Ethernet</li>
                  <li>&bull; Low packet jitter (&lt;5ms)</li>
                  <li>&bull; Public DNS (1.1.1.1 / 8.8.8.8)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal/60 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-smoke">Explore hardware compatibility and client applications:</span>
              <div className="flex items-center gap-4">
                <a
                  href="/devices"
                  className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                >
                  Supported Devices Guide
                  <ArrowRight className="size-3" aria-hidden="true" />
                </a>
                <span className="text-smoke">&bull;</span>
                <a
                  href="/iptv-players"
                  className="font-semibold text-silver-mist hover:text-snow hover:underline inline-flex items-center gap-1"
                >
                  IPTV Players Directory
                  <ArrowRight className="size-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </section>

          {/* Contextual Service Callout */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Experience Next-Generation 4K IPTV with Teleview
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[580px] mx-auto leading-relaxed">
              25,000+ live television channels, anti-freeze CDN server routing, full 7-day EPG guides, and dedicated subscriber support across all your favorite streaming devices.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                View Subscription Plans
              </GreenButton>
              <GhostButton href="/iptv-players" className="text-xs px-5 py-2.5">
                IPTV Players Directory
              </GhostButton>
              <GhostButton href="/setup" className="text-xs px-5 py-2.5">
                Setup Guide
              </GhostButton>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="mt-16" aria-labelledby="faqs-heading">
            <div className="text-center mb-8">
              <h2 id="faqs-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Frequently Asked Questions About IPTV
              </h2>
            </div>

            <div className="space-y-4 max-w-[840px] mx-auto">
              {whatIsIptvFaqs.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-charcoal bg-ash/30 p-5 sm:p-6">
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
