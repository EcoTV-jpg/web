import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  Tv,
  Smartphone,
  Monitor,
  Cpu,
  Wifi,
  CheckCircle2,
  Zap,
  HardDrive,
  Gauge,
  Layers,
  Sliders,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function DevicesPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Supported Devices", url: "/devices" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[1000px]">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Page Header (Single H1) */}
          <Reveal>
            <h1 className="t-display text-balance">
              Supported IPTV <Accent>Devices &amp; Apps</Accent>
            </h1>
            <p className="t-body-sm mt-4 max-w-[760px] text-silver-mist">
              Teleview delivers universal streaming compatibility across television screens, streaming sticks,
              desktop workstations, and mobile devices. Review technical hardware specifications, recommended video player
              applications, and verified network parameters for continuous 4K Ultra HD and 60 FPS live sports streaming.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2.5 text-xs text-silver-mist">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3 py-1 font-medium text-phosphor-green">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                Updated for 2026 Hardware Standards
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-smoke">
                <ShieldCheck className="size-3.5 text-phosphor-green" aria-hidden="true" />
                Tested by Teleview Technical Operations
              </span>
            </div>

            {/* Direct Answer: Best Device for IPTV Streaming */}
            <aside
              aria-label="Quick Answer: Best Device for IPTV Streaming"
              className="mt-6 rounded-2xl border border-charcoal bg-ash/50 p-5 sm:p-6 text-left"
            >
              <div className="flex items-start gap-3">
                <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-sm font-semibold text-snow">
                    Quick Answer: What Is the Best Device for IPTV Streaming in 2026?
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                    The <strong className="text-snow">Amazon Fire TV Stick 4K Max</strong> and{" "}
                    <strong className="text-snow">Apple TV 4K</strong> are the top-rated devices for Teleview IPTV streaming.
                    Both devices feature dedicated silicon hardware video decoders (HEVC/H.265 and AV1), support 60 FPS
                    broadcasts with zero frame drops, and run premium media players like{" "}
                    <strong className="text-snow">TiviMate</strong> and <strong className="text-snow">IPTV Smarters Pro</strong>{" "}
                    with instantaneous Electronic Program Guide (EPG) schedule loading.
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>

          {/* Section 1: Supported Device Categories */}
          <Reveal delay={0.05} className="mt-12">
            <div className="flex items-center gap-3">
              <Layers className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 className="t-heading-sm">1. Supported Device Categories</h2>
            </div>
            <p className="t-body-sm mt-2 text-silver-mist">
              Teleview supports standard Xtream Codes API protocols and M3U playlist formats, ensuring seamless
              interoperability across six distinct consumer hardware categories:
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="card p-5 border-charcoal flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-lg border border-charcoal bg-ash/60 text-phosphor-green">
                      <Tv className="size-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-snow">Streaming Sticks &amp; Dongles</h3>
                  </div>
                  <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                    Compact HDMI devices including Amazon Fire TV Stick (4K, 4K Max, Cube) and Google Chromecast with
                    Google TV. Fast setup, portable form factor, and broad native player app availability.
                  </p>
                </div>
                <div className="mt-4 border-t border-charcoal/60 pt-3">
                  <span className="text-[11px] text-smoke block">Recommended Players:</span>
                  <span className="text-xs text-snow font-medium">TiviMate, IPTV Smarters Pro</span>
                </div>
              </article>

              <article className="card p-5 border-charcoal flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-lg border border-charcoal bg-ash/60 text-phosphor-green">
                      <Monitor className="size-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-snow">Smart TVs (No Extra Dongle)</h3>
                  </div>
                  <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                    Native TV operating systems including Samsung Tizen OS, LG webOS, Hisense VIDAA, and Sony Android TV.
                    Stream directly through downloadable app store players with single-remote operation.
                  </p>
                </div>
                <div className="mt-4 border-t border-charcoal/60 pt-3">
                  <span className="text-[11px] text-smoke block">Recommended Players:</span>
                  <span className="text-xs text-snow font-medium">IBO Player, SmartOne IPTV, Nanomid</span>
                </div>
              </article>

              <article className="card p-5 border-charcoal flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-lg border border-charcoal bg-ash/60 text-phosphor-green">
                      <Cpu className="size-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-snow">Dedicated Set-Top Boxes</h3>
                  </div>
                  <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                    High-performance hardware like Apple TV 4K, Nvidia Shield TV Pro, and Formuler Z-Series. Features active
                    cooling, Gigabit LAN ports, and abundant RAM for demanding 4K live sports streams.
                  </p>
                </div>
                <div className="mt-4 border-t border-charcoal/60 pt-3">
                  <span className="text-[11px] text-smoke block">Recommended Players:</span>
                  <span className="text-xs text-snow font-medium">TiviMate, MYTVOnline, Smarters Lite</span>
                </div>
              </article>

              <article className="card p-5 border-charcoal flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-lg border border-charcoal bg-ash/60 text-phosphor-green">
                      <Smartphone className="size-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-snow">Smartphones &amp; Tablets</h3>
                  </div>
                  <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                    Apple iPhone, iPad, Android smartphones, and Android tablets. Stream live channels and on-demand
                    movies on high-density OLED and Retina displays during travel or on local home Wi-Fi networks.
                  </p>
                </div>
                <div className="mt-4 border-t border-charcoal/60 pt-3">
                  <span className="text-[11px] text-smoke block">Recommended Players:</span>
                  <span className="text-xs text-snow font-medium">IPTV Smarters Pro, GSE Smart IPTV</span>
                </div>
              </article>

              <article className="card p-5 border-charcoal flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-lg border border-charcoal bg-ash/60 text-phosphor-green">
                      <Monitor className="size-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-snow">Windows PC &amp; macOS</h3>
                  </div>
                  <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                    Desktop and laptop computers running Windows 10/11 or macOS. Support for desktop video players with
                    full hardware GPU decoding, multi-monitor setups, and web browser player interfaces.
                  </p>
                </div>
                <div className="mt-4 border-t border-charcoal/60 pt-3">
                  <span className="text-[11px] text-smoke block">Recommended Players:</span>
                  <span className="text-xs text-snow font-medium">VLC Media Player, Smarters Desktop</span>
                </div>
              </article>

              <article className="card p-5 border-charcoal flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-lg border border-charcoal bg-ash/60 text-phosphor-green">
                      <Sliders className="size-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-semibold text-snow">MAG &amp; Enigma2 Receivers</h3>
                  </div>
                  <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                    Dedicated broadcast set-top boxes (Infomir MAG 322, 520, 524) and Linux-based Enigma2 satellite/cable
                    receivers running custom Stalker portal middleware or auto-updating M3U scripts.
                  </p>
                </div>
                <div className="mt-4 border-t border-charcoal/60 pt-3">
                  <span className="text-[11px] text-smoke block">Recommended Players:</span>
                  <span className="text-xs text-snow font-medium">Embedded Stalker Portal, OpenPLi</span>
                </div>
              </article>
            </div>
          </Reveal>

          {/* Section 2: Device Compatibility Overview (Comparison Table) */}
          <Reveal delay={0.07} className="mt-12">
            <div className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Cpu className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">2. Device Compatibility &amp; Feature Comparison Matrix</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Compare operating systems, supported video codecs, maximum video resolutions, top player apps, and installation complexity across platforms:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal bg-ash/60 text-snow">
                      <th scope="col" className="p-3.5 font-semibold">Device Platform</th>
                      <th scope="col" className="p-3.5 font-semibold">Operating System</th>
                      <th scope="col" className="p-3.5 font-semibold">Hardware Codecs</th>
                      <th scope="col" className="p-3.5 font-semibold">Max Output</th>
                      <th scope="col" className="p-3.5 font-semibold">Top App</th>
                      <th scope="col" className="p-3.5 font-semibold">Setup Difficulty</th>
                      <th scope="col" className="p-3.5 font-semibold">Setup Guide Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Amazon Fire TV (Stick / 4K / Cube)
                      </th>
                      <td className="p-3.5">Fire OS 7 / 8 (Android 9/11)</td>
                      <td className="p-3.5">H.264, HEVC (H.265), AV1</td>
                      <td className="p-3.5 text-phosphor-green font-mono">4K @ 60 FPS</td>
                      <td className="p-3.5 font-medium text-snow">TiviMate</td>
                      <td className="p-3.5">Easy (5 mins)</td>
                      <td className="p-3.5">
                        <a
                          href="/devices/firestick"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Firestick Guide <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Samsung &amp; LG Smart TVs
                      </th>
                      <td className="p-3.5">Samsung Tizen 4.0+ / LG webOS 4.0+</td>
                      <td className="p-3.5">H.264, HEVC Main 10</td>
                      <td className="p-3.5 text-phosphor-green font-mono">4K @ 60 FPS</td>
                      <td className="p-3.5 font-medium text-snow">IBO Player</td>
                      <td className="p-3.5">Easy (App Store)</td>
                      <td className="p-3.5 space-x-2">
                        <a
                          href="/devices/samsung-smart-tv"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Samsung <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                        <span className="text-smoke">&bull;</span>
                        <a
                          href="/devices/lg-smart-tv"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          LG <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Android TV &amp; Nvidia Shield
                      </th>
                      <td className="p-3.5">Android TV 9.0 through 14</td>
                      <td className="p-3.5">H.264, HEVC, VP9, AV1</td>
                      <td className="p-3.5 text-phosphor-green font-mono">4K HDR @ 60 FPS</td>
                      <td className="p-3.5 font-medium text-snow">TiviMate / OTT Nav</td>
                      <td className="p-3.5">Easy (Google Play)</td>
                      <td className="p-3.5">
                        <a
                          href="/devices/android-tv"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Android TV Guide <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Apple TV 4K, iPhone, iPad
                      </th>
                      <td className="p-3.5">tvOS 14+ / iOS 15+</td>
                      <td className="p-3.5">HEVC, H.264, Dolby Vision</td>
                      <td className="p-3.5 text-phosphor-green font-mono">4K @ 60 FPS</td>
                      <td className="p-3.5 font-medium text-snow">IPTV Smarters Lite</td>
                      <td className="p-3.5">Easy (App Store)</td>
                      <td className="p-3.5">
                        <a
                          href="/devices/apple-tv"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Apple TV Guide <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Google TV &amp; Chromecast
                      </th>
                      <td className="p-3.5">Google TV (Android 12+)</td>
                      <td className="p-3.5">H.264, HEVC, AV1, VP9</td>
                      <td className="p-3.5 text-phosphor-green font-mono">4K @ 60 FPS</td>
                      <td className="p-3.5 font-medium text-snow">TiviMate</td>
                      <td className="p-3.5">Easy (Google Play)</td>
                      <td className="p-3.5">
                        <a
                          href="/devices/google-tv"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Google TV Guide <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Roku Streaming Sticks &amp; TVs
                      </th>
                      <td className="p-3.5">Roku OS 11.5+</td>
                      <td className="p-3.5">H.264, HEVC (4K models)</td>
                      <td className="p-3.5 text-phosphor-green font-mono">1080p to 4K</td>
                      <td className="p-3.5 font-medium text-snow">IPTV Smarters / Cast</td>
                      <td className="p-3.5">Moderate (Screen Cast)</td>
                      <td className="p-3.5">
                        <a
                          href="/devices/roku"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Roku Guide <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Formuler &amp; MAG Receivers
                      </th>
                      <td className="p-3.5">MYTVOnline / Linux Stalker</td>
                      <td className="p-3.5">H.264, HEVC (MAG 322/520)</td>
                      <td className="p-3.5 text-phosphor-green font-mono">1080p to 4K</td>
                      <td className="p-3.5 font-medium text-snow">MYTVOnline3 / Portal</td>
                      <td className="p-3.5">Moderate (MAC Bind)</td>
                      <td className="p-3.5">
                        <a
                          href="/devices/formuler"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Formuler Guide <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow whitespace-nowrap">
                        Windows PC &amp; macOS Desktop
                      </th>
                      <td className="p-3.5">Windows 10/11, macOS 12+</td>
                      <td className="p-3.5">Full Hardware GPU Decoders</td>
                      <td className="p-3.5 text-phosphor-green font-mono">Up to 4K / 8K</td>
                      <td className="p-3.5 font-medium text-snow">VLC / Smarters PC</td>
                      <td className="p-3.5">Easy (Direct Download)</td>
                      <td className="p-3.5">
                        <a
                          href="/setup#xtream-codes"
                          className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Xtream &amp; M3U Guide <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          {/* Section 3: Recommended Hardware Requirements */}
          <Reveal delay={0.08} className="mt-12">
            <div className="flex items-center gap-3">
              <HardDrive className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 className="t-heading-sm">3. Recommended Hardware Specifications for Buffer-Free Playback</h2>
            </div>
            <p className="t-body-sm mt-2 text-silver-mist">
              Stable live IPTV streaming requires sufficient local system resources. Because live streams deliver continuous
              uncompressed video packets rather than pre-buffered static files, device hardware directly determines stream fluidity:
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Cpu className="size-4 text-phosphor-green" aria-hidden="true" />
                  Processor (SoC) &amp; Hardware Video Decoder
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  A modern 64-bit quad-core processor (ARM Cortex-A53/A55 clocked at 1.5 GHz or higher, or Apple A-series /
                  Nvidia Tegra) is essential. Dedicated on-chip hardware decoding for HEVC (H.265) and AV1 offloads video rendering
                  from the CPU, preventing device thermal throttling and dropped frames during fast 60 FPS sports broadcasts.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-smoke">
                  <span className="font-mono text-phosphor-green">Minimum:</span> Quad-Core 1.5 GHz &bull;{" "}
                  <span className="font-mono text-snow">Recommended:</span> Quad-Core 2.0 GHz+ (Fire TV 4K Max, Shield)
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Gauge className="size-4 text-phosphor-green" aria-hidden="true" />
                  System Memory (RAM) &amp; EPG Caching
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  IPTV applications store active channel playlists, electronic program schedules, channel logos, and streaming
                  pre-buffers in volatile memory. Devices with under 1.5 GB of RAM frequently experience app crashes or interface
                  freezes when scrolling through large channel listings.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-smoke">
                  <span className="font-mono text-phosphor-green">Minimum:</span> 1.5 GB RAM &bull;{" "}
                  <span className="font-mono text-snow">Recommended:</span> 2 GB to 4 GB RAM (smooth EPG navigation)
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <HardDrive className="size-4 text-phosphor-green" aria-hidden="true" />
                  Internal Storage &amp; Cache Allocation
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Always maintain at least 1.5 GB to 2 GB of free internal flash storage. IPTV players continuously write temporary
                  stream segments and program guide databases to disk. When available storage falls below 500 MB, stream buffer
                  underruns and audio synchronization errors often occur.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-smoke">
                  <span className="font-mono text-phosphor-green">Minimum:</span> 8 GB eMMC with 2 GB free &bull;{" "}
                  <span className="font-mono text-snow">Recommended:</span> 16 GB+
                </div>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                  Display Output &amp; HDMI Standards
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  To experience genuine 4K Ultra HD at 60 FPS with HDR10 or Dolby Vision color grading, connect your streaming
                  device to an HDMI 2.0b or HDMI 2.1 port supporting HDCP 2.2 copy protection. Standard HDMI 1.4 ports are restricted
                  to 4K at 30 FPS, causing motion judder during sports viewing.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-smoke">
                  <span className="font-mono text-phosphor-green">HD 1080p:</span> HDMI 1.4 &bull;{" "}
                  <span className="font-mono text-snow">4K 60 FPS HDR:</span> HDMI 2.0b / HDMI 2.1 (HDCP 2.2)
                </div>
              </div>
            </div>

            {/* Hardware Architecture Definitions */}
            <div className="mt-6 rounded-xl border border-charcoal/80 bg-ash/30 p-5 text-xs text-silver-mist">
              <h3 className="text-sm font-semibold text-snow">
                Key Hardware Definitions for Streaming Performance
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 text-[11px] leading-relaxed">
                <div>
                  <strong className="text-snow">Hardware Video Decoder (HW):</strong> Dedicated on-die silicon ASIC (such as HEVC Main 10 or AV1 decoders) designed specifically to decompress video streams with near-zero CPU utilization and low power draw.
                </div>
                <div>
                  <strong className="text-snow">System RAM vs. Flash Storage:</strong> RAM (typically 2–4 GB) holds live playback buffers, active channel lists, and EPG caches. Flash storage (8–16 GB) stores the player OS and app installation binaries.
                </div>
                <div>
                  <strong className="text-snow">HDCP 2.2 Protocol:</strong> High-bandwidth Digital Content Protection required across HDMI 2.0b/2.1 cables to transmit 4K Ultra HD and HDR video to 4K television panels.
                </div>
                <div>
                  <strong className="text-snow">Dual-Band Wi-Fi 5/6:</strong> 5 GHz and 6 GHz wireless frequencies provide wide 80 MHz channel widths and high throughput, preventing frame drops caused by 2.4 GHz microwave and appliance interference.
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 4: Internet Speed Requirements */}
          <Reveal delay={0.09} className="mt-12">
            <div className="card p-6 sm:p-8 border-phosphor-green/30">
              <div className="flex items-center gap-3">
                <Wifi className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">4. Internet Speed &amp; Bandwidth Requirements</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Consistent stream delivery requires stable download bandwidth, low ping latency, and minimal network packet loss.
                Review official bandwidth benchmarks for standard HD, 4K Ultra HD, and multi-room household environments:
              </p>

              {/* Direct Answer: Speed Requirements */}
              <div className="mt-4 rounded-xl border border-charcoal bg-ash/50 p-4 sm:p-5 text-xs sm:text-sm text-silver-mist leading-relaxed">
                <p className="font-medium text-snow flex items-center gap-2">
                  <Zap className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  <span>Quick Answer: What internet speed is required for buffer-free IPTV streaming?</span>
                </p>
                <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                  Teleview requires a minimum download speed of <strong className="text-snow">10 Mbps</strong> for High Definition (1080p) streams, and <strong className="text-snow">25 Mbps per active screen</strong> for 4K Ultra HD at 60 FPS. For multi-room households streaming on multiple concurrent screens, a stable connection of <strong className="text-snow">50 Mbps to 100 Mbps</strong> with ping latency under 50ms ensures smooth, buffer-free playback.
                </p>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal bg-ash/60 text-snow">
                      <th scope="col" className="p-3.5 font-semibold">Streaming Quality &amp; Use Case</th>
                      <th scope="col" className="p-3.5 font-semibold">Recommended Connection Speed</th>
                      <th scope="col" className="p-3.5 font-semibold">Minimum Bandwidth</th>
                      <th scope="col" className="p-3.5 font-semibold">Optimal Network Medium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">HD (1080p) Live TV &amp; Movies</th>
                      <td className="p-3.5 text-phosphor-green font-mono">10 Mbps+</td>
                      <td className="p-3.5">10 Mbps</td>
                      <td className="p-3.5">5GHz Wi-Fi or Ethernet</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">4K Ultra HD Streams &amp; VOD</th>
                      <td className="p-3.5 text-phosphor-green font-mono">25 Mbps+</td>
                      <td className="p-3.5">25 Mbps</td>
                      <td className="p-3.5">Wired Cat6 Ethernet / Wi-Fi 6</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Multi-Room / Concurrent Streams</th>
                      <td className="p-3.5 text-phosphor-green font-mono">50 Mbps+</td>
                      <td className="p-3.5">50 Mbps</td>
                      <td className="p-3.5">Gigabit Router / Mesh Wi-Fi</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3 border-t border-charcoal/60 pt-5">
                <div>
                  <h3 className="text-xs font-semibold text-snow">Dedicated vs. Shared Bandwidth</h3>
                  <p className="mt-1 text-[11px] text-silver-mist leading-relaxed">
                    Household background traffic (game downloads, cloud backups, video calls) competes for bandwidth.
                    Ensure your total home internet plan provides at least 50–100 Mbps to prevent buffering.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-snow">5GHz Wi-Fi vs. 2.4GHz Wi-Fi</h3>
                  <p className="mt-1 text-[11px] text-silver-mist leading-relaxed">
                    2.4 GHz Wi-Fi channels suffer severe interference from walls and appliances. Connecting via 5 GHz Wi-Fi
                    or a direct Cat6 Ethernet cable eliminates packet loss and micro-stuttering.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-snow">DNS Optimization</h3>
                  <p className="mt-1 text-[11px] text-silver-mist leading-relaxed">
                    ISP default DNS servers often introduce lookup latency and throttling. Setting your router DNS to
                    Cloudflare (1.1.1.1) or Google (8.8.8.8) accelerates initial stream connection speeds.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 5: HD vs 4K Requirements */}
          <Reveal delay={0.1} className="mt-12">
            <div className="flex items-center gap-3">
              <Sliders className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 className="t-heading-sm">5. HD (1080p) vs 4K Ultra HD Streaming Requirements</h2>
            </div>
            <p className="t-body-sm mt-2 text-silver-mist">
              Streaming 4K Ultra HD requires significantly higher hardware compute power, memory bandwidth, and sustained network
              throughput compared to traditional high-definition video. Review the technical differences below:
            </p>

            {/* Direct Answer: HD vs 4K Requirements */}
            <div className="mt-4 rounded-xl border border-charcoal bg-ash/50 p-4 sm:p-5 text-xs sm:text-sm text-silver-mist leading-relaxed">
              <p className="font-medium text-snow flex items-center gap-2">
                <Zap className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                <span>Quick Answer: What hardware is required for 4K IPTV streaming compared to standard HD?</span>
              </p>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Streaming 4K Ultra HD at 60 FPS requires an on-chip dedicated hardware video decoder supporting <strong className="text-snow">HEVC (H.265 Main 10)</strong> or <strong className="text-snow">AV1</strong>, a minimum of <strong className="text-snow">2 GB of device RAM</strong>, and an <strong className="text-snow">HDMI 2.0b / HDMI 2.1</strong> connection with HDCP 2.2 support. Standard 1080p HD runs smoothly on entry-level dual-core hardware with 1.5 GB RAM and standard H.264 decoders.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="card p-6 border-charcoal">
                <div className="flex items-center justify-between">
                  <h3 className="t-card-title text-base">High Definition (1080p @ 60 FPS)</h3>
                  <span className="rounded-full border border-charcoal bg-ash/60 px-2.5 py-0.5 text-xs text-snow font-mono">
                    Standard Spec
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5 text-xs text-silver-mist">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Stream Bitrate:</strong> 6 Mbps to 10 Mbps constant bitrate (CBR).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Video Encoding:</strong> Standard H.264 (AVC) or lightweight HEVC profile.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Hardware Load:</strong> Operates efficiently on budget dual-core and quad-core sticks with 1.5 GB RAM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Network Tolerance:</strong> Resilient to minor Wi-Fi jitter; short buffer windows suffice.</span>
                  </li>
                </ul>
              </article>

              <article className="card p-6 border-phosphor-green/30 bg-ash/20">
                <div className="flex items-center justify-between">
                  <h3 className="t-card-title text-base text-snow">4K Ultra HD (2160p HDR @ 60 FPS)</h3>
                  <span className="rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-2.5 py-0.5 text-xs text-phosphor-green font-mono">
                    High-End Spec
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5 text-xs text-silver-mist">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Stream Bitrate:</strong> 18 Mbps to 30 Mbps peak throughput.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Video Encoding:</strong> HEVC / H.265 (Main 10 Profile) or AV1 with 10-bit HDR.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Hardware Load:</strong> Requires dedicated hardware silicon decoders and 2 GB to 4 GB RAM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span><strong className="text-snow">Network Tolerance:</strong> Zero packet loss tolerance; requires 5GHz Wi-Fi (Wi-Fi 6) or wired Ethernet.</span>
                  </li>
                </ul>
              </article>
            </div>
          </Reveal>

          {/* Section 6: Recommended Player/App Types */}
          <Reveal delay={0.11} className="mt-12">
            <div className="flex items-center gap-3">
              <Tv className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 className="t-heading-sm">6. Recommended IPTV Players &amp; Application Types</h2>
            </div>
            <p className="t-body-sm mt-2 text-silver-mist">
              Teleview provides secure streaming server access and high-bitrate stream URLs. To watch content on your screen,
              you use an IPTV media player application. Below are the verified, developer-maintained player applications:
            </p>

            <aside className="mt-4 rounded-lg border border-charcoal bg-ash/30 p-4 text-xs text-silver-mist">
              <strong className="text-snow">Developer Disclosure:</strong> Teleview is an independent IPTV subscription provider.
              Player apps (TiviMate, IPTV Smarters, IBO Player) are independent third-party software products available via official app stores.
            </aside>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="card p-5 border-charcoal">
                <h3 className="text-sm font-semibold text-snow">TiviMate IPTV Player</h3>
                <span className="text-[11px] text-phosphor-green font-mono block mt-0.5">Android TV &amp; Fire TV</span>
                <p className="mt-2.5 text-xs text-silver-mist leading-relaxed">
                  A dedicated television streaming interface designed for Android TV and Fire TV. Offers multi-view viewing, automated EPG guide
                  sync, channel grouping, catch-up TV navigation, and customizable buffer sizes (varies by app version/platform).
                </p>
              </article>

              <article className="card p-5 border-charcoal">
                <h3 className="text-sm font-semibold text-snow">IPTV Smarters Pro</h3>
                <span className="text-[11px] text-phosphor-green font-mono block mt-0.5">iOS, Android, Windows, Mac</span>
                <p className="mt-2.5 text-xs text-silver-mist leading-relaxed">
                  The most versatile multi-platform player. Features direct Xtream Codes API login, built-in subtitles engine,
                  parental control locking, and synchronized VOD video resumption across devices.
                </p>
              </article>

              <article className="card p-5 border-charcoal">
                <h3 className="text-sm font-semibold text-snow">IBO Player &amp; SmartOne</h3>
                <span className="text-[11px] text-phosphor-green font-mono block mt-0.5">Samsung Tizen &amp; LG webOS</span>
                <p className="mt-2.5 text-xs text-silver-mist leading-relaxed">
                  Installed directly through your TV native app store with no sideloading or USB sticks required. Fast remote
                  control responsiveness, hardware video acceleration, and simple MAC-address activation.
                </p>
              </article>

              <article className="card p-5 border-charcoal">
                <h3 className="text-sm font-semibold text-snow">GSE Smart IPTV &amp; Smarters Lite</h3>
                <span className="text-[11px] text-phosphor-mono font-mono block mt-0.5 text-phosphor-green">Apple TV (tvOS) &amp; iPhone</span>
                <p className="mt-2.5 text-xs text-silver-mist leading-relaxed">
                  Optimized for Apple hardware and Apple TV remotes. Full support for AirPlay screen casting, multiple audio track
                  switching, and iCloud playlist synchronization across Apple devices.
                </p>
              </article>

              <article className="card p-5 border-charcoal">
                <h3 className="text-sm font-semibold text-snow">VLC Media Player</h3>
                <span className="text-[11px] text-phosphor-green font-mono block mt-0.5">Windows PC, Linux &amp; Mac</span>
                <p className="mt-2.5 text-xs text-silver-mist leading-relaxed">
                  Open-source desktop media player capable of decoding virtually any video codec. Perfect for testing raw M3U
                  playlist stream URLs, inspecting stream codec details, and diagnosing local network behavior.
                </p>
              </article>

              <article className="card p-5 border-charcoal">
                <h3 className="text-sm font-semibold text-snow">OTT Navigator IPTV</h3>
                <span className="text-[11px] text-phosphor-green font-mono block mt-0.5">Android TV &amp; Google TV</span>
                <p className="mt-2.5 text-xs text-silver-mist leading-relaxed">
                  Lightweight and highly configurable Android media player. Offers customizable picture-in-picture (PiP),
                  automatic codec fallback, studio-grade EPG timeline displays, and low memory consumption.
                </p>
              </article>
            </div>

            {/* Top Player Application Comparison Table */}
            <div className="mt-8 rounded-xl border border-charcoal bg-ash/40 p-5">
              <h3 className="text-sm font-semibold text-snow">
                Feature Comparison: TiviMate vs. IPTV Smarters Pro vs. IBO Player
              </h3>
              <p className="mt-1 text-xs text-silver-mist">
                Direct capability comparison across the three most widely used IPTV player applications. Feature availability, licensing tiers, and codec support vary by app version and operating system.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal bg-ash/60 text-snow">
                      <th scope="col" className="p-3.5 font-semibold">Capability</th>
                      <th scope="col" className="p-3.5 font-semibold">TiviMate IPTV Player</th>
                      <th scope="col" className="p-3.5 font-semibold">IPTV Smarters Pro</th>
                      <th scope="col" className="p-3.5 font-semibold">IBO Player</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Platform Availability</th>
                      <td className="p-3.5">Android TV, Google TV, Fire TV</td>
                      <td className="p-3.5">Android, iOS, Fire TV, Windows, macOS</td>
                      <td className="p-3.5">Samsung Tizen, LG webOS, Android, Apple TV</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Multi-View (Split Screen)</th>
                      <td className="p-3.5">Up to 4 screens (varies by app version/platform)</td>
                      <td className="p-3.5">Multi-screen layout (varies by app version/platform)</td>
                      <td className="p-3.5">Limited / varies by app version/platform</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">EPG Guide Display</th>
                      <td className="p-3.5">Full TV timeline grid with past/future scroll</td>
                      <td className="p-3.5">Standard channel EPG &amp; timeline view</td>
                      <td className="p-3.5">Channel list EPG with program summary</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Catch-Up Navigation</th>
                      <td className="p-3.5">Integrated timeline (varies by app version/platform)</td>
                      <td className="p-3.5">Dedicated catch-up menu (varies by app version/platform)</td>
                      <td className="p-3.5">Direct channel catch-up (varies by app version/platform)</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Local Recording</th>
                      <td className="p-3.5">Scheduled &amp; live recording (varies by app version/platform)</td>
                      <td className="p-3.5">Live recording option (varies by app version/platform)</td>
                      <td className="p-3.5">Not standard (varies by app version/platform)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[11px] text-smoke">
                * Note: Teleview provides high-bitrate streaming server access and does not develop or sell third-party player applications. Feature sets, premium unlocks, and cloud features depend on each application developer and individual app version.
              </p>
            </div>
          </Reveal>

          {/* Section 7: Common Compatibility Problems */}
          <Reveal delay={0.12} className="mt-12">
            <div className="flex items-center gap-3">
              <AlertTriangle className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 className="t-heading-sm">7. Common Compatibility Problems &amp; Practical Solutions</h2>
            </div>
            <p className="t-body-sm mt-2 text-silver-mist">
              Most streaming interruptions originate from local device settings, codec decoders, or Wi-Fi interference.
              Follow these verified troubleshooting steps:
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                  Black Screen With Audio Playing (Codec Conflict)
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Cause:</strong> Your player application is attempting to decode an HEVC/H.265 video
                  stream using software mode on a processor that requires hardware acceleration.
                </p>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Solution:</strong> Navigate to your player settings &rarr; Player / Video Stream &rarr;
                  change the decoder from <em className="text-smoke">Software (SW)</em> to <strong className="text-snow">Hardware (HW)</strong> or{" "}
                  <strong className="text-snow">ExoPlayer</strong>.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                  Frequent Micro-Buffering on Fast Internet Connections
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Cause:</strong> Local Wi-Fi channel congestion on the 2.4 GHz frequency band, or local
                  ISP packet shaping during major live sports events.
                </p>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Solution:</strong> Move your device to your router&apos;s 5 GHz Wi-Fi band or connect an
                  Ethernet cable. Update your router or device DNS to <strong className="text-snow">1.1.1.1</strong> (Cloudflare) or{" "}
                  <strong className="text-snow">8.8.8.8</strong> (Google) to bypass ISP DNS throttling.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                  App Crashes When Importing Playlist (Out of Memory)
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Cause:</strong> Loading thousands of international live channels and VOD titles simultaneously
                  exhausts device RAM on streaming sticks with 1 GB or 1.5 GB memory.
                </p>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Solution:</strong> Log in using <strong className="text-snow">Xtream Codes API</strong> rather than
                  raw M3U files, and configure your player settings to hide unneeded country packages (e.g., loading only US, UK, and Sports channels).
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/40 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                  Program Guide (EPG) Shows &ldquo;No Information&rdquo;
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Cause:</strong> Device system clock drift, incorrect timezone settings, or stale program cache
                  preventing schedule updates.
                </p>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Solution:</strong> Ensure your device system settings have &ldquo;Automatic Date &amp; Time (Network Time)&rdquo;
                  enabled. In your player app, choose &ldquo;Clear EPG Cache&rdquo; and click &ldquo;Update EPG Data&rdquo;.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/40 p-5 sm:col-span-2">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                  <span className="size-2 rounded-full bg-phosphor-green" aria-hidden="true" />
                  Audio Out of Sync With Video (AV Synchronization Drift)
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Cause:</strong> Digital bitstream passthrough format mismatch between the player app and TV audio processor, or latency introduced by external soundbars and Bluetooth speakers.
                </p>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  <strong className="text-snow">Solution:</strong> In your IPTV player settings &rarr; Audio &rarr; switch audio output engine between <strong className="text-snow">AudioTrack</strong> and <strong className="text-snow">OpenSL ES</strong>. If using an external soundbar or AV receiver, disable surround sound passthrough to decode stereo locally, or adjust the player <strong className="text-snow">Audio Delay Offset</strong> in 50ms increments until lips match speech.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Section 8: How to Choose the Right Device */}
          <Reveal delay={0.13} className="mt-12">
            <div className="flex items-center gap-3">
              <HelpCircle className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 className="t-heading-sm">8. How to Choose the Right Streaming Device for Your Setup</h2>
            </div>
            <p className="t-body-sm mt-2 text-silver-mist">
              Select your streaming hardware based on your household technical priorities and everyday viewing preferences:
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="card p-6 border-charcoal flex flex-col justify-between">
                <div>
                  <span className="label-mono text-phosphor-green text-[11px]">Best Overall Value &amp; Performance</span>
                  <h3 className="text-base font-semibold text-snow mt-1">Amazon Fire TV Stick 4K Max</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    The top recommendation for 90% of subscribers. Provides Wi-Fi 6 connectivity, 2 GB RAM, 16 GB internal
                    storage, and a dedicated quad-core 2.0 GHz SoC. Sideloading TiviMate or IPTV Smarters Pro takes under 5 minutes.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/firestick"
                    className="text-xs text-phosphor-green font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Read Firestick installation guide <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="card p-6 border-charcoal flex flex-col justify-between">
                <div>
                  <span className="label-mono text-phosphor-green text-[11px]">Best High-End Experience &amp; Power</span>
                  <h3 className="text-base font-semibold text-snow mt-1">Apple TV 4K or Nvidia Shield Pro</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Engineered for cinephiles and sports enthusiasts demanding zero UI lag. Featuring high-grade silicon
                    (Apple A15 Bionic / Nvidia Tegra X1+), Gigabit LAN ports, and premium Dolby Vision / Atmos audio passthrough.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60 flex items-center gap-3">
                  <a
                    href="/devices/apple-tv"
                    className="text-xs text-phosphor-green font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Apple TV guide <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                  <span className="text-smoke">&bull;</span>
                  <a
                    href="/devices/android-tv"
                    className="text-xs text-silver-mist font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Android TV guide <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="card p-6 border-charcoal flex flex-col justify-between">
                <div>
                  <span className="label-mono text-phosphor-green text-[11px]">Best Convenience (No Extra Dongle)</span>
                  <h3 className="text-base font-semibold text-snow mt-1">Samsung Tizen or LG webOS Smart TV</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Ideal if you prefer keeping your television setup clutter-free with a single manufacturer remote. Simply download
                    IBO Player or SmartOne IPTV from your TV app store and activate with your Teleview subscription credentials.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60 flex items-center gap-3">
                  <a
                    href="/devices/samsung-smart-tv"
                    className="text-xs text-phosphor-green font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Samsung guide <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                  <span className="text-smoke">&bull;</span>
                  <a
                    href="/devices/lg-smart-tv"
                    className="text-xs text-silver-mist font-medium hover:underline inline-flex items-center gap-1"
                  >
                    LG webOS guide <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="card p-6 border-charcoal flex flex-col justify-between">
                <div>
                  <span className="label-mono text-phosphor-green text-[11px]">Best Traditional TV &amp; Remote Feel</span>
                  <h3 className="text-base font-semibold text-snow mt-1">Formuler Z11 Pro Max or MAG 524</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Perfect for viewers transitioning from traditional cable or satellite subscriptions. Offers a tactile numeric
                    keypad remote control, rapid numeric channel dialing, and an instant-on set-top box interface.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60">
                  <a
                    href="/devices/formuler"
                    className="text-xs text-phosphor-green font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Read Formuler setup guide <ArrowRight className="size-3" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 9: Setup Guides & Quick Installation Links */}
          <Reveal delay={0.14} className="mt-12">
            <div className="card p-6 sm:p-8 bg-ash/30 border-charcoal">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 className="t-heading-sm">9. Official Device Setup Guides &amp; Next Steps</h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Ready to configure your device? Explore our step-by-step hardware setup manuals featuring verified configuration
                walkthroughs, recommended player apps, and troubleshooting instructions:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <a
                  href="/devices/firestick"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    Amazon Firestick
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    Sideloading Downloader &amp; TiviMate on Fire TV Stick 4K &amp; Cube.
                  </p>
                </a>

                <a
                  href="/devices/samsung-smart-tv"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    Samsung Smart TV
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    Configure IBO Player &amp; SmartOne on Samsung Tizen OS.
                  </p>
                </a>

                <a
                  href="/devices/lg-smart-tv"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    LG Smart TV
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    Install media players directly from the LG webOS Content Store.
                  </p>
                </a>

                <a
                  href="/devices/android-tv"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    Android TV &amp; Shield
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    Google Play Store setup for Sony, Philips, and Nvidia Shield Pro.
                  </p>
                </a>

                <a
                  href="/devices/apple-tv"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    Apple TV &amp; iOS
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    Configure IPTV Smarters Lite &amp; GSE Smart IPTV via App Store.
                  </p>
                </a>

                <a
                  href="/devices/roku"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    Roku Streaming
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    Screen mirroring and IPTV casting setup for Roku OS devices.
                  </p>
                </a>

                <a
                  href="/devices/google-tv"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    Google TV
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    Setup walkthrough for Chromecast with Google TV 4K.
                  </p>
                </a>

                <a
                  href="/devices/formuler"
                  className="rounded-lg border border-charcoal bg-ash/50 p-4 hover:border-phosphor-green/50 transition-colors group block"
                >
                  <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors flex items-center justify-between">
                    Formuler &amp; MAG
                    <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  </h3>
                  <p className="mt-1.5 text-xs text-silver-mist">
                    MYTVOnline3 and MAC Stalker portal configuration for IPTV boxes.
                  </p>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-charcoal/60 pt-5 text-xs text-silver-mist">
                <span>Looking for general Xtream Codes or M3U playlist documentation?</span>
                <a href="/setup" className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1">
                  View Complete Protocol Setup Guide <ArrowRight className="size-3" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-charcoal/60 pt-5 text-xs text-silver-mist">
                <span>Looking for answers to common questions?</span>
                <div className="flex gap-4">
                  <a href="/faq" className="text-phosphor-green hover:underline font-medium">
                    Read the IPTV FAQ &rarr;
                  </a>
                  <a href="/help-center" className="text-phosphor-green hover:underline font-medium">
                    Visit the Help Center &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Concluding CTA Banner */}
          <Reveal className="mt-14 text-center">
            <div className="card p-8 bg-ash/30 border-charcoal">
              <h2 className="t-heading-sm">Ready to Experience 4K IPTV Streaming?</h2>
              <p className="t-body-sm mt-2 max-w-[540px] mx-auto text-silver-mist">
                Activate your Teleview subscription today with instant automated credential delivery, 25,000+ live channels,
                and a 14-day money-back satisfaction guarantee.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <GreenButton href="/iptv-subscription">Browse Subscription Plans</GreenButton>
                <GhostButton href="/setup">View Complete Setup Guide</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
