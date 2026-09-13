import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  Tv,
  Smartphone,
  Monitor,
  CheckCircle2,
  Zap,
  ArrowRight,
  Filter,
  Sliders,
  Layers,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { bestIptvAppsList } from "../data/bestIptvApps";

const platformFilters = [
  "All Platforms",
  "Amazon Firestick",
  "Android TV",
  "Samsung Tizen",
  "LG webOS",
  "Apple TV & iOS",
  "Windows & Mac",
];

export default function IptvPlayersHubPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "IPTV Players", url: "/iptv-players" },
  ];

  const filteredApps = selectedPlatform === "All Platforms"
    ? bestIptvAppsList
    : bestIptvAppsList.filter((app) =>
        app.primaryPlatforms.some((p) => p.toLowerCase().includes(selectedPlatform.toLowerCase().replace(" & ios", "").replace("amazon ", ""))) ||
        app.secondaryPlatforms.some((p) => p.toLowerCase().includes(selectedPlatform.toLowerCase().replace(" & ios", "").replace("amazon ", "")))
      );

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1050px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Directory Header */}
          <header className="py-6 sm:py-8 text-center max-w-[840px] mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3.5 py-1 text-xs font-mono text-phosphor-green mb-4">
              <Layers className="size-3.5" aria-hidden="true" />
              <span>IPTV Software Directory &amp; Application Index</span>
            </div>

            <h1 className="t-h1 text-snow font-extrabold tracking-tight">
              IPTV Players <Accent>&amp; Streaming Apps Directory</Accent>
            </h1>

            <p className="t-body mt-4 text-silver-mist leading-relaxed">
              Browse technical profiles, protocol support matrices, and setup manuals for the world&apos;s leading IPTV player applications. Compatible with Teleview Xtream Codes API and M3U playlists.
            </p>
          </header>

          {/* Quick Notice: Player vs Provider */}
          <section className="mt-4 rounded-2xl border border-charcoal bg-ash/40 p-5 sm:p-6" aria-labelledby="notice-heading">
            <div className="flex items-start gap-3">
              <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 id="notice-heading" className="text-sm sm:text-base font-bold text-snow">
                  Directory Notice: Independent Media Player Shells
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-silver-mist leading-relaxed">
                  All media players indexed below are standalone third-party software applications that <strong className="text-snow">do not include video content or television channels</strong>. Teleview does not develop, license, or sell player software. To stream live TV, sports, and VOD, you need an active subscription account from a verified provider like Teleview to generate your Xtream Codes API or M3U credentials. Any premium app upgrades (such as TiviMate Premium) are purchased directly from their respective developers. You can evaluate stream stability and player compatibility with a 24-hour{" "}
                  <a href="/iptv-free-trial" className="text-phosphor-green font-medium hover:underline">
                    IPTV Free Trial
                  </a>{" "}
                  before subscribing. For safe installation — verifying official store listings and avoiding cracked APKs — review our <a href="/is-iptv-safe" className="text-phosphor-green font-medium hover:underline">Is IPTV Safe? guide</a>. If you use on-demand movies, see <a href="/iptv-movies" className="text-phosphor-green font-medium hover:underline">IPTV Movies VOD</a> for data usage and library considerations.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Filter Buttons */}
          <section className="mt-10" aria-label="Filter applications by operating system">
            <div className="flex items-center gap-2 mb-3 text-xs text-smoke">
              <Filter className="size-3.5 text-phosphor-green" aria-hidden="true" />
              <span>Filter by Operating System:</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {platformFilters.map((platform) => {
                const isActive = selectedPlatform === platform;
                return (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => setSelectedPlatform(platform)}
                    className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-phosphor-green text-obsidian font-semibold shadow-sm"
                        : "border border-charcoal bg-ash/40 text-silver-mist hover:text-snow hover:border-charcoal/80"
                    }`}
                  >
                    {platform}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Applications Grid */}
          <section className="mt-8" aria-labelledby="catalog-heading">
            <div className="flex items-center justify-between mb-6">
              <h2 id="catalog-heading" className="text-lg sm:text-xl font-bold text-snow">
                Indexed Applications ({filteredApps.length})
              </h2>
              <a
                href="/best-iptv"
                className="text-xs font-medium text-phosphor-green hover:underline inline-flex items-center gap-1"
              >
                View Side-by-Side Comparison Guide &rarr;
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredApps.map((app) => (
                <article
                  key={app.slug}
                  className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between hover:border-phosphor-green/40 transition-colors"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-bold text-snow">
                        <a href={`/iptv-players/${app.slug}`} className="hover:text-phosphor-green transition-colors">
                          {app.name}
                        </a>
                      </h3>
                      <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase shrink-0">
                        {app.shortName}
                      </span>
                    </div>

                    <p className="text-xs text-smoke font-mono mb-2">
                      {app.licenseModel} &bull; Dev: {app.developer}
                    </p>

                    <p className="text-xs text-silver-mist leading-relaxed line-clamp-2">
                      {app.tagline}
                    </p>

                    <div className="mt-4 pt-3 border-t border-charcoal/60 space-y-1.5 text-xs">
                      <div>
                        <strong className="text-snow">Best For:</strong>{" "}
                        <span className="text-silver-mist">{app.bestFor}</span>
                      </div>
                      <div>
                        <strong className="text-snow">Platforms:</strong>{" "}
                        <span className="text-smoke">{app.primaryPlatforms.join(", ")}</span>
                      </div>
                      <div>
                        <strong className="text-snow">Protocols:</strong>{" "}
                        <span className="text-smoke">{app.authenticationModels.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-charcoal/60 flex items-center justify-between">
                    <span className="text-[11px] text-smoke">
                      Verified Manual
                    </span>
                    <a
                      href={`/iptv-players/${app.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-phosphor-green hover:underline"
                    >
                      Technical Guide
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* P1.7 — Player Feature Matrix Methodology */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-ash/20 p-6 sm:p-8" aria-labelledby="player-methodology-heading">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="size-5 text-phosphor-green" aria-hidden="true" />
              <h2 id="player-methodology-heading" className="text-base sm:text-lg font-bold text-snow">Player Feature Matrix Methodology & Provenance</h2>
            </div>
            <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">This player feature dataset is compiled from official store listings and developer documentation. Source verification reflects official docs review, not Teleview first-hand testing. Every field has provenance — unknown remains unknown.</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs leading-relaxed">
              <div className="rounded-lg border border-charcoal bg-ash/40 p-4">
                <h3 className="text-sm font-semibold text-snow">What it measures</h3>
                <p className="mt-1 text-silver-mist">IPTV player applications, supported platforms, playlist protocol support (M3U, Xtream Codes, Stalker, MAC), EPG support, features (favorites, multi-screen, parental controls, recording, catch-up), installation methods, license models, limitations.</p>
              </div>
              <div className="rounded-lg border border-charcoal bg-ash/40 p-4">
                <h3 className="text-sm font-semibold text-snow">What it does NOT measure</h3>
                <p className="mt-1 text-silver-mist">Does NOT measure first-hand testing, benchmarks, uptime, or claim Teleview tested players. Feature availability varies by app version and license tier. Not claim perfect compatibility.</p>
              </div>
              <div className="rounded-lg border border-charcoal bg-ash/40 p-4">
                <h3 className="text-sm font-semibold text-snow">Where it comes from</h3>
                <p className="mt-1 text-silver-mist">Official listings: Google Play (TiviMate, OTT Navigator), Apple App Store (GSE, Smarters Lite, VLC), Samsung Apps / LG Content Store (IBO, SmartOne), portals iboplayer.com, smartone-iptv.com, videolan.org, WHMCSSmarters, Armobsoft FZE. Last verified 2026-09-04, monthly review.</p>
              </div>
              <div className="rounded-lg border border-charcoal bg-ash/40 p-4">
                <h3 className="text-sm font-semibold text-snow">Evidence types & Unknown</h3>
                <p className="mt-1 text-silver-mist"><strong className="text-snow">DOCUMENTED</strong>: official listing/dev docs. <strong className="text-snow">UNKNOWN</strong>: not documented remains null — e.g., parental controls not explicit → null, not guessed. Do NOT convert unknown to Yes/No.</p>
              </div>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[760px]" aria-label="Player feature matrix with provenance">
                <caption className="sr-only">Player feature matrix with provenance showing platforms, playlist support, EPG, multi-screen, recording, license, limitations, last verified</caption>
                <thead>
                  <tr className="border-b border-charcoal bg-ash/60 text-snow">
                    <th scope="col" className="p-3 font-semibold">Player</th>
                    <th scope="col" className="p-3 font-semibold">Primary Platforms (DOCUMENTED)</th>
                    <th scope="col" className="p-3 font-semibold">M3U / Xtream / Stalker / MAC</th>
                    <th scope="col" className="p-3 font-semibold">EPG / Multi-Screen / Recording</th>
                    <th scope="col" className="p-3 font-semibold">License Model</th>
                    <th scope="col" className="p-3 font-semibold">Last Verified</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                  <tr className="hover:bg-ash/30"><th scope="row" className="p-3 text-snow">TiviMate</th><td className="p-3">Android TV, Google TV, Firestick, Shield — Play Store</td><td className="p-3">M3U Yes, Xtream Yes, Stalker Yes, MAC UNKNOWN null</td><td className="p-3">EPG Full grid, Multi Yes Quad, Rec Yes — parental UNKNOWN</td><td className="p-3">Freemium Premium unlock</td><td className="p-3 font-mono text-snow">2026-09-04</td></tr>
                  <tr className="hover:bg-ash/30"><th scope="row" className="p-3 text-snow">Smarters Pro</th><td className="p-3">Android, iOS, Firestick, Win, Mac — Official listing</td><td className="p-3">M3U Yes, Xtream Yes, Stalker UNKNOWN null</td><td className="p-3">EPG Category-based, Multi Yes up to 4, Rec Yes, Parental Yes Premium</td><td className="p-3">Freemium Premium in-app</td><td className="p-3 font-mono text-snow">2026-09-04</td></tr>
                  <tr className="hover:bg-ash/30"><th scope="row" className="p-3 text-snow">IBO Player</th><td className="p-3">Samsung Tizen, LG webOS, Android TV, Apple TV — iboplayer.com</td><td className="p-3">M3U Yes, Xtream Yes, MAC Yes web portal, Stalker UNKNOWN</td><td className="p-3">EPG Standard, Multi UNKNOWN null, Rec No — favorites UNKNOWN</td><td className="p-3">7-day trial then one-time fee dev</td><td className="p-3 font-mono text-snow">2026-09-04</td></tr>
                  <tr className="hover:bg-ash/30"><th scope="row" className="p-3 text-snow">SmartOne</th><td className="p-3">LG webOS, Samsung Tizen, Android TV, Vidaa — smartone-iptv.com</td><td className="p-3">M3U Yes, Xtream Yes, MAC Yes, Stalker UNKNOWN null</td><td className="p-3">EPG Compact, features UNKNOWN null — remains unknown not guessed</td><td className="p-3">14-day trial then fee dev</td><td className="p-3 font-mono text-snow">2026-09-04</td></tr>
                  <tr className="hover:bg-ash/30"><th scope="row" className="p-3 text-snow">GSE Smart</th><td className="p-3">iOS, tvOS, macOS — Apple App Store GSE Technology</td><td className="p-3">M3U Yes remote+FTP, Xtream Yes, Stalker UNKNOWN</td><td className="p-3">EPG Multi-source XMLTV, Multi UNKNOWN, Parental Yes PIN</td><td className="p-3">Free + in-app Pro</td><td className="p-3 font-mono text-snow">2026-09-04</td></tr>
                  <tr className="hover:bg-ash/30"><th scope="row" className="p-3 text-snow">VLC</th><td className="p-3">Win 10/11, macOS, Linux — videolan.org</td><td className="p-3">M3U Yes, Xtream No (requires M3U), Stalker UNKNOWN</td><td className="p-3">EPG Limited no grid, Multi No, Rec UNKNOWN null, Favorites No, Catch-up No</td><td className="p-3">100% Free GPLv2</td><td className="p-3 font-mono text-snow">2026-09-04</td></tr>
                  <tr className="hover:bg-ash/30"><th scope="row" className="p-3 text-snow">OTT Navigator</th><td className="p-3">Android TV, Google TV, Android mobile, Fire TV sideload — Play Store Scillarium</td><td className="p-3">M3U Yes, Xtream Yes, Stalker Yes, MAC Yes</td><td className="p-3">EPG Advanced multi-source, Multi Yes PiP Studio, Catch-up Yes</td><td className="p-3">Freemium Premium license</td><td className="p-3 font-mono text-snow">2026-09-04</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[11px] text-smoke">Dataset: src/data/datasets/playerFeatureMatrix.ts — 7 records, each feature with evidenceType, sourceType, sourceDescription, lastVerified. Unknown remains null. Methodology: official docs review, not first-hand testing. Internal links: device guides, setup, EPG, troubleshooting.</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <a href="/devices" className="text-phosphor-green hover:underline">Device hub →</a>
              <a href="/devices/firestick" className="text-phosphor-green hover:underline">Firestick →</a>
              <a href="/setup" className="text-phosphor-green hover:underline">Setup guide →</a>
              <a href="/help-center/epg-not-working" className="text-phosphor-green hover:underline">EPG help →</a>
              <a href="/help-center/buffering" className="text-phosphor-green hover:underline">Buffering help →</a>
              <a href="/is-iptv-safe" className="text-phosphor-green hover:underline">Is IPTV Safe? →</a>
              <a href="/iptv-movies" className="text-phosphor-green hover:underline">IPTV Movies VOD →</a>
              <a href="/about" className="text-phosphor-green hover:underline">About Teleview →</a>
            </div>
          </section>

          {/* 7-Player Comprehensive Comparison Matrix */}
          <section className="mt-16" aria-labelledby="player-matrix-heading">
            <div className="text-center mb-8">
              <h2 id="player-matrix-heading" className="text-xl sm:text-2xl font-bold text-snow">
                IPTV Players Comparison Matrix
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[660px] mx-auto">
                Compare the top 7 media players across platforms, licensing structures, electronic program guide capabilities, multi-screen modes, and live stream recording:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs border-collapse min-w-[760px]">
                <thead>
                  <tr className="border-b border-charcoal bg-ink-800/80 text-smoke uppercase tracking-wider text-[11px]">
                    <th scope="col" className="p-4 font-semibold">Application</th>
                    <th scope="col" className="p-4 font-semibold">Supported Platforms</th>
                    <th scope="col" className="p-4 font-semibold">License Model</th>
                    <th scope="col" className="p-4 font-semibold">EPG Guide Support</th>
                    <th scope="col" className="p-4 font-semibold">Multi-Screen</th>
                    <th scope="col" className="p-4 font-semibold">Recording Support</th>
                    <th scope="col" className="p-4 font-semibold text-right">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                  <tr className="hover:bg-ash/50 transition-colors">
                    <th scope="row" className="p-4 font-semibold text-snow">
                      <a href="/iptv-players/tivimate" className="hover:text-phosphor-green transition-colors">TiviMate</a>
                    </th>
                    <td className="p-4">Android TV, Google TV, Firestick</td>
                    <td className="p-4 text-snow">Freemium (Paid Premium unlock)</td>
                    <td className="p-4 text-phosphor-green font-medium">Interactive Grid (Past/Future)</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (Quad Multi-View)</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (USB / SMB / LAN)</td>
                    <td className="p-4 text-right">
                      <a href="/iptv-players/tivimate" className="text-phosphor-green font-semibold hover:underline">Guide &rarr;</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-ash/50 transition-colors">
                    <th scope="row" className="p-4 font-semibold text-snow">
                      <a href="/iptv-players/iptv-smarters-pro" className="hover:text-phosphor-green transition-colors">IPTV Smarters Pro</a>
                    </th>
                    <td className="p-4">Firestick, Android, iOS, Windows, Mac</td>
                    <td className="p-4 text-snow">Freemium (Free core features)</td>
                    <td className="p-4 text-phosphor-green font-medium">Category-based XMLTV</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (Up to 4 screens)</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (Local storage)</td>
                    <td className="p-4 text-right">
                      <a href="/iptv-players/iptv-smarters-pro" className="text-phosphor-green font-semibold hover:underline">Guide &rarr;</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-ash/50 transition-colors">
                    <th scope="row" className="p-4 font-semibold text-snow">
                      <a href="/iptv-players/ibo-player" className="hover:text-phosphor-green transition-colors">IBO Player</a>
                    </th>
                    <td className="p-4">Samsung Tizen, LG webOS, Android TV</td>
                    <td className="p-4 text-snow">7-Day Free Trial then one-time fee</td>
                    <td className="p-4 text-phosphor-green font-medium">Standard EPG</td>
                    <td className="p-4 text-smoke">No (Single screen)</td>
                    <td className="p-4 text-smoke">No</td>
                    <td className="p-4 text-right">
                      <a href="/iptv-players/ibo-player" className="text-phosphor-green font-semibold hover:underline">Guide &rarr;</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-ash/50 transition-colors">
                    <th scope="row" className="p-4 font-semibold text-snow">
                      <a href="/iptv-players/smartone" className="hover:text-phosphor-green transition-colors">SmartOne IPTV</a>
                    </th>
                    <td className="p-4">Samsung Tizen, LG webOS</td>
                    <td className="p-4 text-snow">14-Day Free Trial then one-time fee</td>
                    <td className="p-4 text-phosphor-green font-medium">Basic XMLTV</td>
                    <td className="p-4 text-smoke">No (Single screen)</td>
                    <td className="p-4 text-smoke">No</td>
                    <td className="p-4 text-right">
                      <a href="/iptv-players/smartone" className="text-phosphor-green font-semibold hover:underline">Guide &rarr;</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-ash/50 transition-colors">
                    <th scope="row" className="p-4 font-semibold text-snow">
                      <a href="/iptv-players/gse-smart-iptv" className="hover:text-phosphor-green transition-colors">GSE Smart IPTV</a>
                    </th>
                    <td className="p-4">Apple TV (tvOS), iOS, Android</td>
                    <td className="p-4 text-snow">Freemium (In-app Pro purchase)</td>
                    <td className="p-4 text-phosphor-green font-medium">XMLTV / GZ Parser</td>
                    <td className="p-4 text-phosphor-green font-medium">Dual-screen (iOS)</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (Live stream recording)</td>
                    <td className="p-4 text-right">
                      <a href="/iptv-players/gse-smart-iptv" className="text-phosphor-green font-semibold hover:underline">Guide &rarr;</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-ash/50 transition-colors">
                    <th scope="row" className="p-4 font-semibold text-snow">
                      <a href="/iptv-players/vlc" className="hover:text-phosphor-green transition-colors">VLC Media Player</a>
                    </th>
                    <td className="p-4">Windows, Mac, Linux, Android, iOS, tvOS</td>
                    <td className="p-4 text-snow">100% Free Open-Source</td>
                    <td className="p-4 text-smoke">Minimal / Raw link parser</td>
                    <td className="p-4 text-smoke">No</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (Raw stream capture)</td>
                    <td className="p-4 text-right">
                      <a href="/iptv-players/vlc" className="text-phosphor-green font-semibold hover:underline">Guide &rarr;</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-ash/50 transition-colors">
                    <th scope="row" className="p-4 font-semibold text-snow">
                      <a href="/iptv-players/ott-navigator" className="hover:text-phosphor-green transition-colors">OTT Navigator</a>
                    </th>
                    <td className="p-4">Android TV, Fire TV, Android</td>
                    <td className="p-4 text-snow">Freemium (Premium license key)</td>
                    <td className="p-4 text-phosphor-green font-medium">Multi-source XMLTV &amp; Archive</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (PiP &amp; Studio Mode)</td>
                    <td className="p-4 text-phosphor-green font-medium">Yes (Timeshift / Recording)</td>
                    <td className="p-4 text-right">
                      <a href="/iptv-players/ott-navigator" className="text-phosphor-green font-semibold hover:underline">Guide &rarr;</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Protocol Support Reference Matrix */}
          <section className="mt-16" aria-labelledby="protocol-matrix-heading">
            <div className="text-center mb-8">
              <h2 id="protocol-matrix-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Protocol &amp; Format Support Matrix
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Review verified playlist formats and authentication APIs supported by each indexed application:
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-charcoal bg-ink-800/80 text-smoke uppercase tracking-wider text-[11px]">
                    <th scope="col" className="p-4 font-semibold">Application</th>
                    <th scope="col" className="p-4 font-semibold">Xtream Codes API</th>
                    <th scope="col" className="p-4 font-semibold">M3U Playlist URL</th>
                    <th scope="col" className="p-4 font-semibold">Stalker / MAC Portal</th>
                    <th scope="col" className="p-4 font-semibold">XMLTV EPG</th>
                    <th scope="col" className="p-4 font-semibold text-right">Dedicated Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                  {bestIptvAppsList.map((app) => (
                    <tr key={app.slug} className="hover:bg-ash/50 transition-colors">
                      <th scope="row" className="p-4 font-semibold text-snow">
                        <a href={`/iptv-players/${app.slug}`} className="hover:text-phosphor-green transition-colors">
                          {app.name}
                        </a>
                      </th>
                      <td className="p-4 text-phosphor-green font-medium">
                        {app.authenticationModels.some((m) => m.includes("Xtream")) ? "✓ Yes" : "—"}
                      </td>
                      <td className="p-4 text-phosphor-green font-medium">
                        {app.authenticationModels.some((m) => m.includes("M3U")) ? "✓ Yes" : "—"}
                      </td>
                      <td className="p-4 text-smoke">
                        {app.authenticationModels.some((m) => m.includes("MAC") || m.includes("Stalker") || m.includes("Device Key")) ? "✓ Yes" : "—"}
                      </td>
                      <td className="p-4 text-phosphor-green font-medium">✓ Yes</td>
                      <td className="p-4 text-right">
                        <a
                          href={`/iptv-players/${app.slug}`}
                          className="font-semibold text-phosphor-green hover:underline"
                        >
                          Manual &rarr;
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Contextual CTA */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Ready to Connect Your Player App?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[580px] mx-auto leading-relaxed">
              The <a href="/" className="text-phosphor-green font-semibold hover:underline">Teleview IPTV service</a> provides ultra-fast streaming lines with Xtream Codes API credentials, typically dispatched within 5–15 minutes and compatible with all 7 indexed players.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                View Subscription Plans
              </GreenButton>
              <GhostButton href="/iptv-free-trial" className="text-xs px-5 py-2.5">
                Test Free Trial
              </GhostButton>
              <GhostButton href="/setup" className="text-xs px-5 py-2.5">
                View Setup Tutorials
              </GhostButton>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
