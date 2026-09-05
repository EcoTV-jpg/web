import {
  Tv,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Zap,
  Sliders,
  ShieldCheck,
  Laptop,
  Smartphone,
  Layers,
  MonitorPlay,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton } from "../components/ui";
import Reveal from "../components/Reveal";
import {
  bestIptvAppsList,
  hubComparisonData,
  hubFaqs,
} from "../data/bestIptvApps";

export default function BestIptvHubPage() {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Best IPTV Players", url: "/best-iptv" },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1100px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Section */}
          <header className="text-center py-6 sm:py-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 text-xs font-mono text-phosphor-green mb-4">
              <MonitorPlay className="size-3.5" aria-hidden="true" />
              <span>2026 Technical Player Guide</span>
            </div>
            <h1 className="t-display tracking-tight text-snow max-w-[880px] mx-auto">
              Best <Accent>IPTV Players &amp; Apps</Accent>
            </h1>
            <p className="t-body mt-4 max-w-[720px] mx-auto text-silver-mist">
              An independent, technical evaluation of the top media player applications across Amazon Firestick, Android TV, Smart TVs, Apple devices, and desktop computers.
            </p>
          </header>

          {/* Editorial vs Directory notice */}
          <div className="mb-2 flex flex-wrap items-center justify-center gap-2 text-xs text-smoke">
            <span>Looking for technical specs &amp; protocol matrices?</span>
            <a
              href="/iptv-players"
              className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
            >
              Browse the IPTV Apps Directory →
            </a>
          </div>

          {/* Immediate Answer-First Summary */}
          <section className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-5 sm:p-7" aria-labelledby="quick-answer-heading">
            <div className="flex items-start gap-3">
              <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-2">
                <h2 id="quick-answer-heading" className="text-base sm:text-lg font-bold text-snow">
                  Quick Answer: What Is an IPTV Player and How Should You Choose One?
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  An <strong className="text-snow">IPTV player</strong> is a video-rendering application that organizes channels, displays electronic program schedules (EPG), and plays live broadcast streams on your screen. IPTV players <strong className="text-snow">do not include or provide channels</strong>—they are empty media frameworks that require an active playlist or Xtream Codes API login from a subscription service provider like Teleview. You can evaluate player compatibility and streaming responsiveness risk-free with an{" "}
                  <a href="/iptv-free-trial" className="text-phosphor-green font-semibold hover:underline">
                    IPTV free trial
                  </a>.
                </p>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  To choose the right player: <strong className="text-snow">TiviMate</strong> is favored for its dedicated television EPG interface on Android TV and Firestick; <strong className="text-snow">IPTV Smarters Pro</strong> provides versatile multi-platform support across mobile, TV, and desktop; <strong className="text-snow">IBO Player</strong> and <strong className="text-snow">SmartOne IPTV</strong> install directly on Samsung and LG Smart TVs without extra hardware; <strong className="text-snow">GSE Smart IPTV</strong> serves Apple iOS and Apple TV users; and <strong className="text-snow">VLC Media Player</strong> serves as an open-source diagnostic player for desktop computers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1: Comparison Table */}
          <section className="mt-14 scroll-mt-20" id="comparison" aria-labelledby="comparison-heading">
            <div className="text-center mb-8">
              <h2 id="comparison-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Best IPTV Players Compared
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[650px] mx-auto">
                Verified platform compatibility, playlist protocols, EPG performance, and distinctive features across the 7 leading IPTV applications.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-charcoal bg-ink-800/80 text-smoke uppercase tracking-wider text-[11px]">
                    <th scope="col" className="p-4 font-semibold">Application</th>
                    <th scope="col" className="p-4 font-semibold">Best For</th>
                    <th scope="col" className="p-4 font-semibold">Platforms</th>
                    <th scope="col" className="p-4 font-semibold">Playlist Protocols</th>
                    <th scope="col" className="p-4 font-semibold">EPG Quality</th>
                    <th scope="col" className="p-4 font-semibold">Setup Ease</th>
                    <th scope="col" className="p-4 font-semibold text-right">Dedicated Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                  {hubComparisonData.map((app) => (
                    <tr key={app.slug} className="hover:bg-ash/50 transition-colors">
                      <th scope="row" className="p-4 font-semibold text-snow">
                        <a href={`/iptv-players/${app.slug}`} className="hover:text-phosphor-green transition-colors">
                          {app.name}
                        </a>
                      </th>
                      <td className="p-4 text-snow">{app.bestFor}</td>
                      <td className="p-4">{app.platforms}</td>
                      <td className="p-4 font-mono text-[11px] text-smoke">{app.playlistSupport}</td>
                      <td className="p-4">{app.epgQuality}</td>
                      <td className="p-4">{app.setupEase}</td>
                      <td className="p-4 text-right">
                        <a
                          href={`/iptv-players/${app.slug}`}
                          className="inline-flex items-center gap-1 font-semibold text-phosphor-green hover:underline"
                        >
                          Guide
                          <ArrowRight className="size-3" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] text-smoke text-center">
              * Note: Independent player applications require subscription credentials to stream video. Teleview is not affiliated with third-party app developers.
            </p>
          </section>

          {/* Section 2: Dedicated Player Profiles */}
          <section className="mt-16" aria-labelledby="profiles-heading">
            <div className="text-center mb-10">
              <h2 id="profiles-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Top 7 IPTV Players in 2026: Detailed Profiles
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Explore individual hardware specifications, strengths, and limitations for each verified application.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {bestIptvAppsList.map((app) => (
                <article
                  key={app.slug}
                  className="rounded-xl border border-charcoal bg-ash/30 p-6 flex flex-col justify-between hover:border-charcoal/90 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-snow">
                        <a href={`/iptv-players/${app.slug}`} className="hover:text-phosphor-green transition-colors">
                          {app.name}
                        </a>
                      </h3>
                      <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase shrink-0">
                        {app.shortName}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-phosphor-green font-medium">
                      Best For: {app.bestFor}
                    </p>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                      {app.tagline}
                    </p>

                    <div className="mt-4 pt-3 border-t border-charcoal/50 space-y-2 text-xs">
                      <div>
                        <strong className="text-snow">Supported Platforms:</strong>{" "}
                        <span className="text-silver-mist">{app.primaryPlatforms.join(", ")}</span>
                      </div>
                      <div>
                        <strong className="text-snow">Top Advantage:</strong>{" "}
                        <span className="text-silver-mist">{app.uniqueStrengths[0]}</span>
                      </div>
                      <div>
                        <strong className="text-snow">Key Limitation:</strong>{" "}
                        <span className="text-smoke">{app.limitations[0]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-charcoal/60 flex items-center justify-between">
                    <span className="text-[11px] text-smoke font-mono">
                      Dev: {app.developer}
                    </span>
                    <a
                      href={`/iptv-players/${app.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-phosphor-green hover:underline"
                    >
                      Full {app.shortName} Technical Guide &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section 3: What is an IPTV Player? */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/20 p-6 sm:p-8" aria-labelledby="what-is-heading">
            <h2 id="what-is-heading" className="text-xl sm:text-2xl font-bold text-snow">
              What Is an IPTV Player? (And What It Is Not)
            </h2>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-silver-mist leading-relaxed">
              <p>
                To understand IPTV architecture, it is essential to distinguish between four distinct components:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 mt-4 text-xs">
                <div className="rounded-lg border border-charcoal bg-ink-800/80 p-4">
                  <strong className="text-snow block text-sm mb-1">1. The IPTV Player (Software Client)</strong>
                  The application you install on your television, phone, or computer. Its sole job is to parse your channel database, render video decoders, and display an on-screen TV guide. Players contain zero broadcast streams by default.
                </div>
                <div className="rounded-lg border border-charcoal bg-ink-800/80 p-4">
                  <strong className="text-snow block text-sm mb-1">2. The IPTV Service (Content Provider)</strong>
                  The network service provider (such as Teleview) that manages cloud streaming servers, content delivery networks (CDNs), broadcast encoders, and delivers high-bitrate live feeds.
                </div>
                <div className="rounded-lg border border-charcoal bg-ink-800/80 p-4">
                  <strong className="text-snow block text-sm mb-1">3. The IPTV Subscription (Access Credentials)</strong>
                  Your account authorization, typically delivered as Xtream Codes API credentials (server URL, username, password) or an M3U playlist URL, granting access to the provider’s server catalog.
                </div>
                <div className="rounded-lg border border-charcoal bg-ink-800/80 p-4">
                  <strong className="text-snow block text-sm mb-1">4. The M3U Playlist / XMLTV EPG</strong>
                  The index files detailing channel stream URLs, channel logos, category headers, and broadcast schedule times that your player downloads to construct the guide.
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: How to Choose an IPTV Player */}
          <section className="mt-16" aria-labelledby="how-to-choose-heading">
            <div className="text-center mb-8">
              <h2 id="how-to-choose-heading" className="text-xl sm:text-2xl font-bold text-snow">
                How to Choose the Right IPTV Player
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Key evaluation criteria to consider before installing an application on your primary viewing screen.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
              <div className="card p-5 border-charcoal">
                <div className="flex items-center gap-2 font-semibold text-snow mb-2">
                  <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Hardware &amp; OS Compatibility</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Verify whether the app installs natively through your television official app store (like IBO Player on Samsung/LG) or requires sideloading via Downloader (like TiviMate on Firestick).
                </p>
              </div>

              <div className="card p-5 border-charcoal">
                <div className="flex items-center gap-2 font-semibold text-snow mb-2">
                  <Layers className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Xtream Codes vs. M3U Support</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Players supporting Xtream Codes API log in with a clean username, password, and URL, separating Live TV from VOD. Plain M3U players load all streams into a single list.
                </p>
              </div>

              <div className="card p-5 border-charcoal">
                <div className="flex items-center gap-2 font-semibold text-snow mb-2">
                  <Sliders className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>EPG &amp; Timeline Performance</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Ensure the player supports automatic EPG guide synchronization, past/future timeline scrolling, and timezone offsets to keep program schedules accurately aligned.
                </p>
              </div>

              <div className="card p-5 border-charcoal">
                <div className="flex items-center gap-2 font-semibold text-snow mb-2">
                  <MonitorPlay className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Remote-Control Optimization</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Living room television apps must navigate fluidly using standard directional pads (DPAD), number keys, and quick-channel zapping without requiring mouse emulation.
                </p>
              </div>

              <div className="card p-5 border-charcoal">
                <div className="flex items-center gap-2 font-semibold text-snow mb-2">
                  <Zap className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Buffer &amp; Decoder Controls</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Customizable pre-buffer size (None, Medium, Large) and alternative decoders (ExoPlayer vs. VLC) help eliminate micro-stuttering across wireless home networks.
                </p>
              </div>

              <div className="card p-5 border-charcoal">
                <div className="flex items-center gap-2 font-semibold text-snow mb-2">
                  <ShieldCheck className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Security &amp; Developer Transparency</span>
                </div>
                <p className="text-silver-mist leading-relaxed">
                  Download only established players from verified developers or official repositories. Never use modified or cracked APK files that could compromise your credentials.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Best IPTV Players by Device */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="by-device-heading">
            <h2 id="by-device-heading" className="text-xl sm:text-2xl font-bold text-snow text-center">
              Best IPTV Players by Device Ecosystem
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist text-center max-w-[600px] mx-auto">
              Recommendations based on documented operating system compatibility and authentication protocol support.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-xs">
              <div className="rounded-xl border border-charcoal bg-ink-800/70 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2 mb-2">
                  <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Amazon Fire TV &amp; Firestick</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  <strong className="text-snow">Recommended Option:</strong> <a href="/iptv-players/tivimate" className="text-phosphor-green hover:underline font-medium">TiviMate IPTV Player</a>. Full DPAD remote control support and cable-style EPG grid layout. <a href="/iptv-players/iptv-smarters-pro" className="text-phosphor-green hover:underline">IPTV Smarters Pro</a> serves as a strong alternative for VOD.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/70 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2 mb-2">
                  <Smartphone className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Android TV &amp; Google TV</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  <strong className="text-snow">Recommended Options:</strong> <a href="/iptv-players/tivimate" className="text-phosphor-green hover:underline font-medium">TiviMate</a> for general viewing; <a href="/iptv-players/ott-navigator" className="text-phosphor-green hover:underline font-medium">OTT Navigator</a> for technical power users desiring per-channel decoders.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/70 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2 mb-2">
                  <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Samsung Smart TV (Tizen OS)</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  <strong className="text-snow">Recommended Option:</strong> <a href="/iptv-players/ibo-player" className="text-phosphor-green hover:underline font-medium">IBO Player</a>. Direct Samsung Apps download without sideloading. <a href="/iptv-players/smartone" className="text-phosphor-green hover:underline">SmartOne IPTV</a> also offers native TV remote support.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/70 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2 mb-2">
                  <Tv className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>LG Smart TV (webOS)</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  <strong className="text-snow">Recommended Option:</strong> <a href="/iptv-players/ibo-player" className="text-phosphor-green hover:underline font-medium">IBO Player</a> or <a href="/iptv-players/smartone" className="text-phosphor-green hover:underline font-medium">SmartOne IPTV</a>. Direct installation from the LG Content Store with simple MAC web portal activation.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/70 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2 mb-2">
                  <Smartphone className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Apple iOS &amp; Apple TV</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  <strong className="text-snow">Recommended Options:</strong> <a href="/iptv-players/gse-smart-iptv" className="text-phosphor-green hover:underline font-medium">GSE Smart IPTV</a> for AirPlay and local playlist uploads; <a href="/iptv-players/iptv-smarters-pro" className="text-phosphor-green hover:underline">Smarters Player Lite</a> for a modern consumer UI.
                </p>
              </div>

              <div className="rounded-xl border border-charcoal bg-ink-800/70 p-5">
                <h3 className="text-sm font-semibold text-snow flex items-center gap-2 mb-2">
                  <Laptop className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Windows PC, Mac &amp; Linux</span>
                </h3>
                <p className="text-silver-mist leading-relaxed">
                  <strong className="text-snow">Recommended Options:</strong> <a href="/iptv-players/iptv-smarters-pro" className="text-phosphor-green hover:underline font-medium">IPTV Smarters Pro</a> for organized TV/VOD catalogs; <a href="/iptv-players/vlc" className="text-phosphor-green hover:underline font-medium">VLC Media Player</a> for raw stream debugging and network diagnostics.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: IPTV Player vs IPTV Service */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-8" aria-labelledby="player-vs-service-heading">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 id="player-vs-service-heading" className="text-xl sm:text-2xl font-bold text-snow">
                IPTV Player vs. IPTV Service Provider
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-silver-mist leading-relaxed">
                A common misconception among cord-cutters is assuming an IPTV player application provides access to live television channels. Players are merely the vehicle; the service is the fuel.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4 text-left text-xs">
                <div className="rounded-xl border border-charcoal bg-ink-800 p-5">
                  <h3 className="font-semibold text-snow text-sm mb-2">The Player (Software Shell)</h3>
                  <ul className="space-y-1.5 text-silver-mist list-disc list-inside">
                    <li>Developed by third-party app developers</li>
                    <li>Downloaded via device app stores or APKs</li>
                    <li>Renders user interfaces, EPG guides, and audio</li>
                    <li>Zero channels included out-of-the-box</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-charcoal bg-ink-800 p-5">
                  <h3 className="font-semibold text-snow text-sm mb-2">The Service (Stream Infrastructure)</h3>
                  <ul className="space-y-1.5 text-silver-mist list-disc list-inside">
                    <li>Maintains broadcast delivery servers and CDNs</li>
                    <li>Provides 25,000+ live sports and news feeds</li>
                    <li>Supplies your login credentials (Xtream / M3U)</li>
                    <li>Backed by 24/7 technical operations</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                  Explore Teleview Subscription Plans &rarr;
                </GreenButton>
              </div>
            </div>
          </section>

          {/* Section 7: Related Technical Guides & Hardware Links */}
          <section className="mt-16" aria-labelledby="setup-guides-heading">
            <div className="text-center mb-8">
              <h2 id="setup-guides-heading" className="text-xl sm:text-2xl font-bold text-snow">
                IPTV Player Setup Guides &amp; Resources
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Step-by-step installation walkthroughs and hardware specifications from the Teleview knowledge base.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs">
              <a href="/setup#firestick" className="card p-5 border-charcoal hover:border-phosphor-green/40 transition-colors group">
                <strong className="text-snow block text-sm group-hover:text-phosphor-green transition-colors">
                  Firestick Installation
                </strong>
                <p className="mt-1.5 text-silver-mist">
                  Downloader setup, 7-click developer options, and TiviMate installation.
                </p>
                <span className="mt-3 inline-block font-mono text-[11px] text-phosphor-green">
                  View Guide &rarr;
                </span>
              </a>

              <a href="/setup#smart-tv" className="card p-5 border-charcoal hover:border-phosphor-green/40 transition-colors group">
                <strong className="text-snow block text-sm group-hover:text-phosphor-green transition-colors">
                  Smart TV Installation
                </strong>
                <p className="mt-1.5 text-silver-mist">
                  Native app store setup for Samsung Tizen, LG webOS, and IBO Player.
                </p>
                <span className="mt-3 inline-block font-mono text-[11px] text-phosphor-green">
                  View Guide &rarr;
                </span>
              </a>

              <a href="/devices" className="card p-5 border-charcoal hover:border-phosphor-green/40 transition-colors group">
                <strong className="text-snow block text-sm group-hover:text-phosphor-green transition-colors">
                  Supported Devices Matrix
                </strong>
                <p className="mt-1.5 text-silver-mist">
                  Hardware RAM minimums, video decoders, and bandwidth benchmarks.
                </p>
                <span className="mt-3 inline-block font-mono text-[11px] text-phosphor-green">
                  View Matrix &rarr;
                </span>
              </a>

              <a href="/help-center" className="card p-5 border-charcoal hover:border-phosphor-green/40 transition-colors group">
                <strong className="text-snow block text-sm group-hover:text-phosphor-green transition-colors">
                  Diagnostic Help Center
                </strong>
                <p className="mt-1.5 text-silver-mist">
                  Fix Error 401 Unauthorized, Error 403 Forbidden, and M3U timeouts.
                </p>
                <span className="mt-3 inline-block font-mono text-[11px] text-phosphor-green">
                  Troubleshoot &rarr;
                </span>
              </a>
            </div>
          </section>

          {/* Section 8: Hub FAQs */}
          <section className="mt-16" aria-labelledby="hub-faqs-heading">
            <div className="text-center mb-8">
              <h2 id="hub-faqs-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Frequently Asked Questions About IPTV Players
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Answers to common player compatibility, setup, and licensing questions.
              </p>
            </div>

            <div className="space-y-4 max-w-[840px] mx-auto">
              {hubFaqs.map((faq) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
