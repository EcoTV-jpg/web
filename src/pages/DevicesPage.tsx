import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { ChevronRight, Tv, Smartphone, Monitor, Cpu, Wifi, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const deviceList = [
  {
    name: "Amazon Firestick & Fire TV",
    icon: Tv,
    description: "Fully compatible with all Amazon Fire TV Stick generations (Lite, 4K, 4K Max, Cube). Recommended player: TiviMate or IPTV Smarters Pro.",
    apps: ["TiviMate", "IPTV Smarters Pro", "XCIPTV"],
  },
  {
    name: "Smart TVs (Samsung, LG, Sony)",
    icon: Monitor,
    description: "Supports Samsung Tizen OS, LG webOS, and Android TV / Google TV platforms natively through popular app stores.",
    apps: ["IBO Player", "SmartOne IPTV", "SS IPTV", "Nanomid"],
  },
  {
    name: "Android Boxes & Phones",
    icon: Smartphone,
    description: "Compatible with Nvidia Shield, Formuler, Xiaomi Mi Box, Chromecast with Google TV, and all Android smartphones and tablets.",
    apps: ["TiviMate", "IPTV Smarters Pro", "OTT Navigator"],
  },
  {
    name: "Apple iOS & Apple TV",
    icon: Cpu,
    description: "Enjoy seamless streaming on iPhone, iPad, Mac, and Apple TV (tvOS) using App Store certified applications.",
    apps: ["GSE Smart IPTV", "IPTV Smarters Lite", "Smarters Player Lite"],
  },
  {
    name: "MAG & Enigma2 Receivers",
    icon: Cpu,
    description: "Full portal compatibility for dedicated MAG hardware boxes (MAG 250, 254, 322, 520) and Linux Enigma2 receivers.",
    apps: ["MAG Stalker Portal", "Enigma2 Plugin Script"],
  },
  {
    name: "Windows PC & Mac",
    icon: Monitor,
    description: "Stream directly on desktop and laptop computers using VLC Media Player, Web Player, or native desktop apps.",
    apps: ["VLC Media Player", "IPTV Smarters Desktop", "Web Player"],
  },
];

export default function DevicesPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[960px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-silver-mist">
              <li>
                <a href="/" className="hover:text-snow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="size-3 text-smoke" />
              </li>
              <li className="text-snow font-medium" aria-current="page">
                Supported Devices
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <Reveal>
            <h1 className="t-display text-balance">
              Supported IPTV <Accent>Devices &amp; Apps</Accent>
            </h1>
            <p className="t-body-sm mt-4 max-w-[700px]">
              Teleview is compatible with virtually every modern streaming device and application.
              Enjoy 4K Ultra HD streaming on your Smart TV, smartphone, tablet, or dedicated set-top box.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs text-silver-mist">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3 py-1 font-medium text-phosphor-green">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                Updated for 2026 Hardware
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-smoke">
                Tested by Teleview Streaming Operations Desk
              </span>
            </div>

            {/* GEO Direct Answer Callout for AI Search & Featured Snippets */}
            <aside aria-label="Quick Answer: Best IPTV Device" className="mt-6 rounded-2xl border border-charcoal bg-ash/50 p-5 sm:p-6 text-left">
              <div className="flex items-start gap-3">
                <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-snow">
                    Quick Answer: What is the Best Device for IPTV Streaming in 2026?
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                    The <strong className="text-snow">Amazon Fire TV Stick 4K Max</strong> and <strong className="text-snow">Apple TV 4K</strong> are the top-recommended devices for Teleview IPTV. Both devices feature dedicated hardware video decoders (HEVC/H.265 and AV1), support high-bitrate 60 FPS live sports broadcasting, and run high-performance media players like <strong className="text-snow">TiviMate</strong> and <strong className="text-snow">IPTV Smarters Pro</strong> with instantaneous EPG channel loading.
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>

          {/* Priority 1: Semantic Device Bandwidth Table */}
          <Reveal delay={0.06} className="mt-10">
            <div className="card p-6 sm:p-8 border-phosphor-green/30">
              <div className="flex items-center gap-3">
                <Wifi className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">Recommended Streaming Bandwidth Specifications</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Review recommended network speeds for stable HD and 4K Ultra HD video playback:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal bg-ash/60 text-snow">
                      <th scope="col" className="p-3.5 font-semibold">Streaming Quality &amp; Use Case</th>
                      <th scope="col" className="p-3.5 font-semibold">Recommended Connection Speed</th>
                      <th scope="col" className="p-3.5 font-semibold">Minimum Bandwidth</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">HD (1080p) Live TV &amp; Movies</th>
                      <td className="p-3.5 text-phosphor-green font-mono">10 Mbps+</td>
                      <td className="p-3.5">10 Mbps</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">4K Ultra HD Streams &amp; VOD</th>
                      <td className="p-3.5 text-phosphor-green font-mono">25 Mbps+</td>
                      <td className="p-3.5">25 Mbps</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Multi-Room / Concurrent Streams</th>
                      <td className="p-3.5 text-phosphor-green font-mono">50 Mbps+</td>
                      <td className="p-3.5">50 Mbps</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="t-caption mt-4 text-xs text-smoke">
                * Note: Speed figures are practical recommendations for optimal playback. Real-world performance depends on Wi-Fi frequency (5GHz recommended over 2.4GHz) or Ethernet connection, local ISP routing, device hardware capabilities, and overall household network congestion.
              </p>
            </div>
          </Reveal>

          {/* Hardware Specifications & Codec Support Matrix */}
          <Reveal delay={0.08} className="mt-10">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Cpu className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">Hardware Requirements &amp; Codec Compatibility</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Ensure your streaming hardware meets the recommended technical parameters for 60 FPS live sports and 4K VOD:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal bg-ash/60 text-snow">
                      <th scope="col" className="p-3 font-semibold">Device Platform</th>
                      <th scope="col" className="p-3 font-semibold">Recommended Hardware Spec</th>
                      <th scope="col" className="p-3 font-semibold">Video Codecs</th>
                      <th scope="col" className="p-3 font-semibold">Optimal Network Link</th>
                      <th scope="col" className="p-3 font-semibold">Top App</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Amazon Firestick 4K / Max</th>
                      <td className="p-3">Quad-Core 2.0GHz, 2GB RAM</td>
                      <td className="p-3">H.264, HEVC (H.265), AV1</td>
                      <td className="p-3 text-phosphor-green">5GHz Wi-Fi 6 / Ethernet</td>
                      <td className="p-3 font-medium text-snow">TiviMate</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Android TV &amp; Nvidia Shield</th>
                      <td className="p-3">Quad-Core / Tegra, 2GB–3GB RAM</td>
                      <td className="p-3">H.264, HEVC, VP9, AV1</td>
                      <td className="p-3 text-phosphor-green">Gigabit Ethernet</td>
                      <td className="p-3 font-medium text-snow">TiviMate / OTT Nav</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Apple TV 4K (tvOS)</th>
                      <td className="p-3">Apple A12 / A15 Bionic, 3–4GB RAM</td>
                      <td className="p-3">HEVC, H.264, Dolby Vision</td>
                      <td className="p-3 text-phosphor-green">Gigabit LAN / Wi-Fi 6</td>
                      <td className="p-3 font-medium text-snow">IPTV Smarters Lite</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Smart TVs (Samsung Tizen / LG webOS)</th>
                      <td className="p-3">Integrated TV SoC, 1.5GB RAM</td>
                      <td className="p-3">H.264, HEVC Main 10</td>
                      <td className="p-3 text-phosphor-green">5GHz Wi-Fi / LAN</td>
                      <td className="p-3 font-medium text-snow">IBO Player / Nanomid</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">MAG / Formuler Receivers</th>
                      <td className="p-3">Hisilicon / Realtek SoC, 2GB RAM</td>
                      <td className="p-3">Hardware Stalker / M3U Decoders</td>
                      <td className="p-3 text-phosphor-green">Wired Ethernet</td>
                      <td className="p-3 font-medium text-snow">Built-in Portal</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3 font-medium text-snow">Windows PC &amp; Mac</th>
                      <td className="p-3">Intel/AMD/Apple Silicon, 4GB+ RAM</td>
                      <td className="p-3">Hardware GPU Acceleration</td>
                      <td className="p-3 text-phosphor-green">Ethernet / Wi-Fi</td>
                      <td className="p-3 font-medium text-snow">VLC / Smarters PC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Device Cards Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {deviceList.map((device, i) => {
              const Icon = device.icon;
              return (
                <Reveal key={device.name} delay={i * 0.06} className="h-full">
                  <article className="card card-hover h-full flex flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <div className="grid size-10 place-items-center rounded-lg border border-charcoal bg-ash/50 text-phosphor-green">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="t-card-title text-lg">{device.name}</h2>
                    </div>

                    <p className="t-body-sm mt-4 text-silver-mist flex-1">{device.description}</p>

                    <div className="mt-6 border-t border-charcoal pt-4">
                      <p className="label-mono text-xs text-smoke">Recommended Player Apps:</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {device.apps.map((app) => (
                          <span
                            key={app}
                            className="rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-xs text-snow"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Next Steps CTA */}
          <Reveal className="mt-14 text-center">
            <div className="card p-8 bg-ash/30 border-charcoal">
              <h2 className="t-heading-sm">Ready to Start Streaming?</h2>
              <p className="t-body-sm mt-2 max-w-[500px] mx-auto">
                Check out our setup guides for quick step-by-step instructions or pick your subscription plan.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <GreenButton href="/setup">View Setup Guides</GreenButton>
                <GhostButton href="/iptv-subscription">View Subscription Plans</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
