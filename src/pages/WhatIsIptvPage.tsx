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
  MonitorPlay,
  Smartphone,
  Laptop,
  LifeBuoy,
  BookOpen,
  Clock,
} from "lucide-react";
import {
  iptvArchitectureLayers,
  iptvVsTraditionalComparison,
  iptvProtocolsList,
  whatIsIptvFaqs,
  iptvCoreTypes,
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

          {/* Section: The 3 Core Types of IPTV Services */}
          <section className="mt-14" aria-labelledby="types-heading">
            <div className="text-center mb-8">
              <h2 id="types-heading" className="text-xl sm:text-2xl font-bold text-snow">
                The 3 Core Types of IPTV Services
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[640px] mx-auto">
                Under ITU-T standards, Internet Protocol Television is structured into three primary media delivery formats:
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {iptvCoreTypes.map((type, idx) => (
                <article key={idx} className="rounded-xl border border-charcoal bg-ash/30 p-6 flex flex-col justify-between">
                  <div>
                    <div className="mb-3">
                      <span className="text-[11px] font-mono text-phosphor-green uppercase tracking-wider font-semibold">
                        Type 0{idx + 1}
                      </span>
                      <h3 className="text-base font-semibold text-snow mt-1">{type.title}</h3>
                      <p className="text-xs text-smoke font-medium mt-0.5">{type.subtitle}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-silver-mist leading-relaxed mb-4">
                      {type.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-charcoal/60">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-smoke font-medium block mb-2">Key Examples</span>
                    <ul className="space-y-1.5 text-xs text-silver-mist">
                      {type.examples.map((ex, exIdx) => (
                        <li key={exIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0" aria-hidden="true" />
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
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

            {/* Visual Signal Flow Architecture Box */}
            <div className="mt-6 rounded-xl border border-charcoal/80 bg-ink-800/60 p-4 sm:p-5">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono">
                <div className="flex flex-wrap items-center justify-center gap-2 text-center">
                  <span className="rounded-lg bg-ash px-3 py-1.5 text-snow border border-charcoal">
                    Satellite Downlink Ingest
                  </span>
                  <ArrowRight className="size-4 text-phosphor-green shrink-0 hidden sm:inline" aria-hidden="true" />
                  <span className="rounded-lg bg-ash px-3 py-1.5 text-snow border border-charcoal">
                    Hardware Transcoder (H.264/HEVC)
                  </span>
                  <ArrowRight className="size-4 text-phosphor-green shrink-0 hidden sm:inline" aria-hidden="true" />
                  <span className="rounded-lg bg-ash px-3 py-1.5 text-snow border border-charcoal">
                    Multi-CDN Edge Cluster
                  </span>
                  <ArrowRight className="size-4 text-phosphor-green shrink-0 hidden sm:inline" aria-hidden="true" />
                  <span className="rounded-lg bg-ash px-3 py-1.5 text-phosphor-green border border-phosphor-green/30 font-semibold">
                    Subscriber Player Buffer
                  </span>
                </div>
                <a
                  href="/how-does-iptv-work"
                  className="inline-flex items-center gap-1.5 text-xs text-phosphor-green hover:underline shrink-0 font-sans mt-2 md:mt-0 font-medium"
                >
                  <span>Read deep-dive signal guide</span>
                  <ArrowRight className="size-3" aria-hidden="true" />
                </a>
              </div>
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
                    <th scope="col" className="p-4 font-semibold text-phosphor-green">IPTV Services</th>
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

          {/* Section 4.5: Broadcast Delay & Latency Benchmarks */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="latency-benchmarks-heading">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 id="latency-benchmarks-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Broadcast Latency: How IPTV Transmission Speeds Compare
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-silver-mist leading-relaxed mb-6">
              A common technical question among live sports viewers is broadcast delay (the time elapsed between a live stadium play and its appearance on screen). Here is how major transmission technologies compare:
            </p>

            <div className="overflow-x-auto rounded-xl border border-charcoal bg-ink-800/80">
              <table className="w-full text-left text-xs border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-charcoal bg-ink-900/90 text-smoke uppercase tracking-wider text-[11px]">
                    <th scope="col" className="p-3.5 font-semibold">Broadcast Technology</th>
                    <th scope="col" className="p-3.5 font-semibold">Typical Latency</th>
                    <th scope="col" className="p-3.5 font-semibold">Transmission Conduit</th>
                    <th scope="col" className="p-3.5 font-semibold">Technical Bottleneck</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                  <tr className="hover:bg-ash/40 transition-colors">
                    <th scope="row" className="p-3.5 font-medium text-snow">Over-The-Air (OTA) Antenna</th>
                    <td className="p-3.5 font-mono text-phosphor-green font-semibold">3 &ndash; 5 seconds</td>
                    <td className="p-3.5">Terrestrial radio frequency (ATSC/DVB-T)</td>
                    <td className="p-3.5">Speed-of-light RF propagation (Lowest delay)</td>
                  </tr>
                  <tr className="hover:bg-ash/40 transition-colors">
                    <th scope="row" className="p-3.5 font-medium text-snow">Traditional Digital Cable</th>
                    <td className="p-3.5 font-mono text-phosphor-green font-semibold">5 &ndash; 8 seconds</td>
                    <td className="p-3.5">Dedicated coaxial cable (QAM modulation)</td>
                    <td className="p-3.5">Hardware set-top box decoding delay</td>
                  </tr>
                  <tr className="hover:bg-ash/40 transition-colors">
                    <th scope="row" className="p-3.5 font-medium text-snow">Satellite Television</th>
                    <td className="p-3.5 font-mono text-phosphor-green font-semibold">5 &ndash; 7 seconds</td>
                    <td className="p-3.5">Geostationary satellite uplink/downlink (DVB-S2)</td>
                    <td className="p-3.5">70,000 km orbital round-trip propagation</td>
                  </tr>
                  <tr className="hover:bg-ash/40 transition-colors bg-phosphor-green/5">
                    <th scope="row" className="p-3.5 font-medium text-snow">MPEG-TS / HLS IPTV Streams</th>
                    <td className="p-3.5 font-mono text-phosphor-green font-semibold">10 &ndash; 20 seconds</td>
                    <td className="p-3.5">Edge CDN unicast over public internet</td>
                    <td className="p-3.5">Encoder segmenting + player RAM cache</td>
                  </tr>
                  <tr className="hover:bg-ash/40 transition-colors">
                    <th scope="row" className="p-3.5 font-medium text-snow">Commercial OTT Apps (YouTube TV, Hulu)</th>
                    <td className="p-3.5 font-mono text-smoke">45 &ndash; 60+ seconds</td>
                    <td className="p-3.5">Multi-bitrate HLS / DASH packaging</td>
                    <td className="p-3.5">Large 6s chunk playlists + DRM license verification</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5: Compatible Streaming Devices & Platforms */}
          <section className="mt-16" aria-labelledby="compatible-devices-heading">
            <div className="text-center mb-8">
              <h2 id="compatible-devices-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Compatible IPTV Streaming Devices
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[660px] mx-auto">
                Because IPTV transmits video via standardized internet protocols, subscribers can stream on virtually any internet-connected display hardware:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-snow font-bold text-sm">
                    <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3>Amazon Fire TV &amp; Firestick</h3>
                  </div>
                  <p className="text-silver-mist leading-relaxed">
                    The most popular streaming hardware worldwide due to straightforward APK sideloading, hardware HEVC decoding, and smooth remote navigation.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/firestick"
                    className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                  >
                    Firestick Installation Guide
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-snow font-bold text-sm">
                    <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3>Samsung Smart TVs (Tizen)</h3>
                  </div>
                  <p className="text-silver-mist leading-relaxed">
                    Stream natively through dedicated Samsung App Store players like IBO Player and SmartOne without connecting external HDMI streaming dongles.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/samsung-smart-tv"
                    className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                  >
                    Samsung Smart TV Guide
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-snow font-bold text-sm">
                    <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3>LG Smart TVs (webOS)</h3>
                  </div>
                  <p className="text-silver-mist leading-relaxed">
                    Install certified webOS IPTV applications directly from the LG Content Store with complete Magic Remote pointer and playlist integration.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/lg-smart-tv"
                    className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                  >
                    LG Smart TV Setup Guide
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-snow font-bold text-sm">
                    <Smartphone className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3>Android TV &amp; Google TV</h3>
                  </div>
                  <p className="text-silver-mist leading-relaxed">
                    Native Google Play Store access enables gold-standard television players like TiviMate, OTT Navigator, and IPTV Smarters with automated updates.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/android-tv"
                    className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                  >
                    Android TV Setup Guide
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-snow font-bold text-sm">
                    <Laptop className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3>Apple TV (tvOS) &amp; iOS</h3>
                  </div>
                  <p className="text-silver-mist leading-relaxed">
                    Powerful Apple A-Series processors deliver ultra-smooth 4K 60 FPS playback, AirPlay streaming, and refined interfaces via GSE Smart IPTV and Smarters Lite.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/apple-tv"
                    className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                  >
                    Apple TV Setup Guide
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-snow font-bold text-sm">
                    <Cpu className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3>Formuler &amp; Set-Top Boxes</h3>
                  </div>
                  <p className="text-silver-mist leading-relaxed">
                    Dedicated IPTV hardware featuring proprietary MYTVOnline middleware with integrated recording, multi-EPG, and gigabit Ethernet routing.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/formuler"
                    className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                  >
                    Formuler Hardware Guide
                    <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="/devices"
                className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
              >
                Explore All Supported Devices &amp; Minimum Hardware Specs &rarr;
              </a>
            </div>
          </section>

          {/* Section 6: IPTV Players vs. IPTV Services (Crucial Distinction) */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/20 p-6 sm:p-8" aria-labelledby="players-vs-services-heading">
            <div className="flex items-center gap-3 mb-4">
              <Layers className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 id="players-vs-services-heading" className="text-xl sm:text-2xl font-bold text-snow">
                IPTV Player Applications vs. IPTV Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
              A frequent point of confusion for new streaming viewers is the difference between an <strong className="text-snow">IPTV player application</strong> and an <strong className="text-snow">IPTV subscription service</strong>:
            </p>

            <div className="grid gap-5 sm:grid-cols-2 mt-6 text-xs">
              <div className="rounded-xl border border-charcoal bg-ink-800/80 p-5">
                <div className="flex items-center gap-2 text-phosphor-green font-bold text-sm mb-2">
                  <MonitorPlay className="size-4" aria-hidden="true" />
                  <h3>IPTV Player (Client Software)</h3>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  A media player app installed on your device (such as <a href="/iptv-players/tivimate" className="text-snow underline hover:text-phosphor-green">TiviMate</a>, <a href="/iptv-players/iptv-smarters-pro" className="text-snow underline hover:text-phosphor-green">IPTV Smarters Pro</a>, <a href="/iptv-players/ibo-player" className="text-snow underline hover:text-phosphor-green">IBO Player</a>, or <a href="/iptv-players/vlc" className="text-snow underline hover:text-phosphor-green">VLC Media Player</a>). The player provides the on-screen guide, remote navigation, and video decoding engine. <strong className="text-snow">Players contain zero channels or streams on their own.</strong>
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/80 p-5">
                <div className="flex items-center gap-2 text-phosphor-green font-bold text-sm mb-2">
                  <Server className="size-4" aria-hidden="true" />
                  <h3>IPTV Service (Stream Provider)</h3>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  A broadcast infrastructure service (such as Teleview) that operates content delivery networks (CDNs), encodes live satellite feeds, updates electronic program guides, and issues authentication credentials (via Xtream Codes API or M3U playlist URLs) that you enter into your player application.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal/60 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-smoke">Compare standalone media player applications:</span>
              <a
                href="/iptv-players"
                className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
              >
                Browse Full IPTV Players Directory &rarr;
              </a>
            </div>
          </section>

          {/* Section 7: How to Evaluate an IPTV Service */}
          <section className="mt-16" aria-labelledby="evaluation-heading">
            <div className="text-center mb-8">
              <h2 id="evaluation-heading" className="text-xl sm:text-2xl font-bold text-snow">
                How to Evaluate an IPTV Service in 2026
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[640px] mx-auto">
                With thousands of generic IPTV resellers online, use these objective criteria to evaluate provider quality and protect your subscription investment:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border border-charcoal bg-ash/30 p-5">
                <h3 className="text-sm font-bold text-snow mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  Server Architecture &amp; Multi-CDN Failover Routing
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  Look for providers that utilize globally distributed Content Delivery Networks (CDNs) with automatic load balancing. Single-server resellers frequently suffer from severe buffering during marquee sporting events when viewer concurrency surges.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5">
                <h3 className="text-sm font-bold text-snow mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  EPG Accuracy &amp; XMLTV Synchronization
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  A high-grade IPTV service provides automated XMLTV electronic program guides with correct timezone offsets and program metadata, enabling seamless channel navigation and scheduled catch-up viewing.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5">
                <h3 className="text-sm font-bold text-snow mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  Trial Availability &amp; Refund Protection
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  Never commit to an annual plan without testing first. Reputable providers offer a 24-hour trial period and publish clear refund policies so you can verify stream stability on your own broadband connection before paying.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-5">
                <h3 className="text-sm font-bold text-snow mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  Responsive Human Support
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  Ensure the provider maintains active customer service through instant channels like WhatsApp or ticketing systems to assist with line provisioning, playlist refreshes, or routing diagnostics.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-charcoal bg-ash/40 px-6 py-3.5 text-xs sm:text-sm">
                <span className="text-silver-mist">
                  Want a comprehensive provider comparison framework?
                </span>
                <a
                  href="/best-iptv"
                  className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                >
                  Read Our Best IPTV Services Buying Guide &rarr;
                </a>
              </div>
            </div>
          </section>

          {/* Section 8: Troubleshooting & Stream Reliability */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="troubleshooting-heading">
            <div className="flex items-center gap-3 mb-4">
              <LifeBuoy className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 id="troubleshooting-heading" className="text-xl sm:text-2xl font-bold text-snow">
                IPTV Troubleshooting &amp; Stream Reliability
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
              When streaming live 4K television over broadband, playback interruptions can arise from home Wi-Fi bottlenecks, ISP bandwidth throttling, or playlist caching errors. Explore our diagnostic manuals to resolve common issues:
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mt-6 text-xs">
              <a
                href="/help-center/buffering"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Eliminating Buffering
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Diagnostic steps for stream freezing, player buffer sizing, and ISP throttling workarounds.
                </p>
              </a>

              <a
                href="/help-center/internet-speed"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Internet Speed Benchmarks
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Minimum bandwidth, latency thresholds, and jitter requirements for HD and 4K Ultra HD.
                </p>
              </a>

              <a
                href="/help-center/connection-problems"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Connection Problems
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Fixing DNS resolution issues, server handshake errors, and expired login credentials.
                </p>
              </a>

              <a
                href="/help-center/channels-not-loading"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Channels Not Loading
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Troubleshooting playlist sync errors, empty channel categories, and format mismatches.
                </p>
              </a>

              <a
                href="/help-center/epg-not-working"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    EPG Guide Problems
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Resolving missing TV schedule data, incorrect timezone offsets, and XMLTV guide URLs.
                </p>
              </a>

              <a
                href="/help-center/not-working"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    General Diagnostic Checklist
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Step-by-step diagnostic workflow when your IPTV service stops functioning unexpectedly.
                </p>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal/60 text-center">
              <a
                href="/help-center"
                className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
              >
                Visit the Complete Teleview Help Center &amp; Diagnostic Knowledge Base &rarr;
              </a>
            </div>
          </section>

          {/* Section: Technical & Informational Guides */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="guides-heading">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 id="guides-heading" className="text-xl sm:text-2xl font-bold text-snow">
                In-Depth IPTV Guides &amp; Technical Analysis
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-silver-mist leading-relaxed mb-6">
              Continue exploring our comprehensive knowledge base to understand the networking architecture, legal boundaries, security standards, and economic trade-offs of modern IPTV:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
              <a
                href="/how-does-iptv-work"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    How Does IPTV Work?
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  In-depth breakdown of unicast/multicast delivery, HLS/MPEG-TS protocols, CDN caching, and decoders.
                </p>
              </a>

              <a
                href="/is-iptv-legal"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Is IPTV Legal?
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Global copyright framework, licensing compliance, and distinguishing legitimate providers from pirate services.
                </p>
              </a>

              <a
                href="/is-iptv-safe"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Is IPTV Safe?
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Cybersecurity analysis, APK inspection protocols, stream malware risks, and data encryption practices.
                </p>
              </a>

              <a
                href="/iptv-vs-cable"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    IPTV vs Cable TV
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Side-by-side comparison of annual costs, hardware rental fees, contract lock-ins, and 4K flexibility.
                </p>
              </a>

              <a
                href="/iptv-cost"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    How Much Does IPTV Cost?
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Real-world pricing benchmarks, streaming device setup fees, premium player licenses, and total cost of ownership.
                </p>
              </a>

              <a
                href="/iptv-pricing"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    IPTV Pricing Guide
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Compare monthly vs annual subscription models, multi-device savings, and plan selection factors.
                </p>
              </a>

              <a
                href="/iptv-channels"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    IPTV Channel Directory
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  Bouquet organization across US, UK, Canada, and global territories with EPG channel mapping.
                </p>
              </a>

              <a
                href="/iptv-sports"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Live Sports Streaming
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  60fps high-motion sports feeds, pay-per-view live coverage, and anti-buffering connection settings.
                </p>
              </a>

              <a
                href="/iptv-movies"
                className="rounded-xl border border-charcoal bg-ink-800/80 p-4 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    Movies &amp; VOD Library
                  </span>
                  <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <p className="text-silver-mist">
                  On-demand 4K movie streaming, multi-language subtitle tracks, and audio codec compatibility.
                </p>
              </a>
            </div>
          </section>

          {/* Contextual Service Callout */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Experience Next-Generation 4K IPTV with Teleview
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[580px] mx-auto leading-relaxed">
              Explore the <a href="/" className="text-phosphor-green font-semibold hover:underline">Teleview IPTV service</a> featuring 25,000+ live television channels, high-capacity streaming servers, full 7-day EPG guides, and dedicated subscriber support across all your favorite streaming devices.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                View Subscription Plans
              </GreenButton>
              <GhostButton href="/iptv-free-trial" className="text-xs px-5 py-2.5">
                Start Free Trial
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
