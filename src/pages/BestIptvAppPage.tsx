import {
  Tv,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Zap,
  Sliders,
  ShieldCheck,
  Smartphone,
  Layers,
  Wrench,
  ChevronLeft,
  XCircle,
  ExternalLink,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { bestIptvAppsList, IptvAppDetail } from "../data/bestIptvApps";
import { routes } from "../routes";
import NotFoundPage from "./NotFoundPage";

export default function BestIptvAppPage({ slug }: { slug: string }) {
  const normalizedSlug = String(slug || "").trim().toLowerCase();
  const app: IptvAppDetail | undefined = bestIptvAppsList.find(
    (a) => a.slug.toLowerCase() === normalizedSlug
  );

  if (!app) {
    return <NotFoundPage />;
  }

  const route =
    routes.find((r) => r.path === `/iptv-players/${app.slug}`) ||
    routes.find((r) => r.path === `/best-iptv/${app.slug}`);

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "IPTV Players", url: "/iptv-players" },
    { name: app.shortName, url: `/iptv-players/${app.slug}` },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1000px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Return to Hub link */}
          <div className="mb-4">
            <a
              href="/iptv-players"
              className="inline-flex items-center gap-1.5 text-xs text-silver-mist hover:text-phosphor-green transition-colors"
            >
              <ChevronLeft className="size-3.5" aria-hidden="true" />
              <span>Back to IPTV Player Directory</span>
            </a>
          </div>

          {/* Article Header */}
          <header className="py-4 sm:py-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2.5 py-0.5 text-xs font-mono text-phosphor-green">
                {app.developer}
              </span>
              <span className="text-xs text-smoke font-mono">
                {app.licenseModel}
              </span>
            </div>

            <h1 className="t-h2 text-snow font-bold tracking-tight max-w-[840px]">
              {route?.h1 || `${app.name}: Technical Setup & Features`}
            </h1>
            <p className="t-body mt-3 max-w-[760px] text-silver-mist">
              {app.tagline}
            </p>
          </header>

          {/* TiviMate Hero Feature Banner */}
          {app.slug === "tivimate" && (
            <div className="card overflow-hidden p-2 mb-8">
              <div className="overflow-hidden rounded-lg bg-ink-900">
                <img
                  src="/images/players/tivimate-iptv-player-banner.webp"
                  alt="TiviMate IPTV Player official application logo and branding"
                  className="w-full aspect-[1024/500] object-cover"
                  width={1024}
                  height={500}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          )}

          {/* IPTV Smarters Pro Hero Feature Banner */}
          {app.slug === "iptv-smarters-pro" && (
            <div className="card overflow-hidden p-2 mb-8">
              <div className="overflow-hidden rounded-lg bg-ink-900">
                <img
                  src="/images/players/iptv-smarters-pro-banner.webp"
                  alt="IPTV Smarters Pro official application logo and branding on blue background"
                  className="w-full aspect-[1024/500] object-cover"
                  width={1024}
                  height={500}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          )}

          {/* Quick Answer Callout */}
          <section className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-5 sm:p-7" aria-labelledby="app-summary-heading">
            <div className="flex items-start gap-3">
              <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-2">
                <h2 id="app-summary-heading" className="text-sm sm:text-base font-bold text-snow">
                  Direct Answer: What Is {app.shortName} and Who Should Use It?
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  <strong className="text-snow">{app.name}</strong> is an {app.appCategory || "independent IPTV media player"} developed by {app.developer}. It is designed specifically for <strong className="text-snow">{app.bestFor}</strong>. Like all legitimate player apps, it contains no channels and functions as an interface shell for your existing IPTV subscription credentials (such as Teleview Xtream Codes API or M3U playlist URLs).
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-smoke pt-1">
                  <span><strong className="text-snow">Target User:</strong> {app.targetUsers}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Compatibility Matrix */}
          <section className="mt-12" aria-labelledby="compatibility-heading">
            <h2 id="compatibility-heading" className="text-lg sm:text-xl font-bold text-snow">
              Platform &amp; Hardware Compatibility
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              Review verified operating systems and platforms supported by {app.shortName}:
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3 text-xs">
              <div className="rounded-xl border border-charcoal bg-ash/30 p-4">
                <span className="font-semibold text-phosphor-green block mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                  Primary Platforms
                </span>
                <ul className="space-y-1 text-snow">
                  {app.primaryPlatforms.map((p) => (
                    <li key={p}>&bull; {p}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-4">
                <span className="font-semibold text-silver-mist block mb-2 flex items-center gap-1.5">
                  <Layers className="size-3.5" aria-hidden="true" />
                  Secondary Platforms
                </span>
                <ul className="space-y-1 text-smoke">
                  {app.secondaryPlatforms.length > 0 ? (
                    app.secondaryPlatforms.map((p) => <li key={p}>&bull; {p}</li>)
                  ) : (
                    <li>&bull; None</li>
                  )}
                </ul>
              </div>

              <div className="rounded-xl border border-charcoal bg-ash/30 p-4">
                <span className="font-semibold text-red-400/90 block mb-2 flex items-center gap-1.5">
                  <XCircle className="size-3.5" aria-hidden="true" />
                  Unsupported Platforms
                </span>
                <ul className="space-y-1 text-smoke">
                  {app.unsupportedPlatforms.map((p) => (
                    <li key={p}>&bull; {p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="mt-4 rounded-lg border border-charcoal/80 bg-ink-800/80 p-4 text-xs text-silver-mist flex items-start gap-2.5">
              <ShieldCheck className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1">
                <div>
                  <strong className="text-snow">Verification Status:</strong> {app.verification.source} (Reviewed: {app.verification.lastReviewed}).
                </div>
                {app.ratingDisclaimer && (
                  <div className="text-smoke">
                    <strong className="text-silver-mist">Notice:</strong> {app.ratingDisclaimer}
                  </div>
                )}
              </div>
            </aside>
          </section>

          {/* Key Technical Features & Strengths */}
          <section className="mt-12" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-lg sm:text-xl font-bold text-snow">
              Key Features &amp; Technical Capabilities
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
              {app.uniqueStrengths.map((strength, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ash/20 p-4 flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-silver-mist leading-relaxed">{strength}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3 text-xs text-silver-mist border-t border-charcoal/60 pt-5">
              <div>
                <strong className="text-snow block mb-1">EPG Behavior:</strong>
                <p className="leading-relaxed">{app.epgSupport}</p>
              </div>
              <div>
                <strong className="text-snow block mb-1">Playback Architecture:</strong>
                <p className="leading-relaxed">{app.playbackEngine}</p>
              </div>
              <div>
                <strong className="text-snow block mb-1">Remote Navigation:</strong>
                <p className="leading-relaxed">{app.remoteUsability}</p>
              </div>
            </div>
          </section>

          {/* TiviMate Interface & TV Guide Gallery */}
          {app.slug === "tivimate" && (
            <section className="mt-12" aria-labelledby="tivimate-gallery-heading">
              <div className="flex items-center gap-2.5 mb-2">
                <Tv className="size-5 text-phosphor-green" aria-hidden="true" />
                <h2 id="tivimate-gallery-heading" className="text-lg sm:text-xl font-bold text-snow">
                  TiviMate Interface &amp; TV Guide Overview
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-silver-mist">
                High-resolution interface previews showcasing the broadcast cable-style EPG, channel navigation, and playback controls:
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/tivimate-epg-grid-timeline.webp"
                      alt="TiviMate IPTV Player electronic program guide grid interface with multi-channel schedule timeline"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Interactive EPG Grid Timeline</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Multi-channel TV grid guide with timeline scrolling and program descriptions.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/tivimate-tv-guide-overlay.webp"
                      alt="TiviMate IPTV Player TV guide overlay showing channel information and live playback timeline"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Live Playback Guide Overlay</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Cable-style on-screen display with current broadcast timeline and stream status.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/tivimate-channel-list-menu.webp"
                      alt="TiviMate IPTV Player channel list sidebar with program schedule and live stream preview"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Channel List &amp; Schedule Sidebar</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Quick channel grouping, category management, and live stream previews.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/tivimate-player-controls-multiview.webp"
                      alt="TiviMate IPTV Player playback control menu with multi-view, search, and recording options"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Playback Controls &amp; Multi-View</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Quick access to multi-screen viewing, audio/subtitle selection, and search.</span>
                  </figcaption>
                </figure>
              </div>
            </section>
          )}

          {/* IPTV Smarters Pro Interface & Configuration Gallery */}
          {app.slug === "iptv-smarters-pro" && (
            <section className="mt-12" aria-labelledby="smarters-gallery-heading">
              <div className="flex items-center gap-2.5 mb-2">
                <Tv className="size-5 text-phosphor-green" aria-hidden="true" />
                <h2 id="smarters-gallery-heading" className="text-lg sm:text-xl font-bold text-snow">
                  IPTV Smarters Pro Interface &amp; Configuration Overview
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-silver-mist">
                High-resolution interface previews showing the categorized dashboard, hardware decoding options, and subtitle customizations:
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/iptv-smarters-pro-home-dashboard.webp"
                      alt="IPTV Smarters Pro home dashboard featuring Live TV, Movies, Series, and Catch Up tiles"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Segmented Content Dashboard</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Dedicated sections for Live TV, Movies, Series boxsets, Catch Up, and Playlists.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/iptv-smarters-pro-player-decoder-settings.webp"
                      alt="IPTV Smarters Pro built-in player settings menu with hardware decoder and buffer limit configuration"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Built-In Player &amp; Decoder Settings</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Hardware versus software decoding toggles and configurable stream buffer limits.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/iptv-smarters-pro-subtitle-settings.webp"
                      alt="IPTV Smarters Pro subtitle settings menu showing font size, color, and background options"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Subtitle Display Customization</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">On-screen subtitle styling controls including font size scaling and text background.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/iptv-smarters-pro-loading-splash.webp"
                      alt="IPTV Smarters Pro startup loading screen displaying device identifier and MAC address info"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">App Initialization &amp; Authentication</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Startup splash screen showing MAC address and device key for playlist activation.</span>
                  </figcaption>
                </figure>
              </div>
            </section>
          )}

          {/* IBO Player Interface & Smart TV Navigation Gallery */}
          {app.slug === "ibo-player" && (
            <section className="mt-12" aria-labelledby="ibo-gallery-heading">
              <div className="flex items-center gap-2.5 mb-2">
                <Tv className="size-5 text-phosphor-green" aria-hidden="true" />
                <h2 id="ibo-gallery-heading" className="text-lg sm:text-xl font-bold text-snow">
                  IBO Player Smart TV Interface &amp; Navigation Overview
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-silver-mist">
                High-resolution interface previews showcasing the Samsung Tizen and LG webOS TV dashboard, live stream zapping, and category organization:
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/ibo-player-home-dashboard.webp"
                      alt="IBO Player home dashboard showing Live TV, Movies, Series, and server management options on Smart TV"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Smart TV Home Dashboard</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Dedicated tiles for Live TV, Movies, Series, Account status, and Change Server controls.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/ibo-player-live-channels-preview.webp"
                      alt="IBO Player live channel guide with split-screen sports broadcast video preview"
                      className="w-full aspect-[293/183] sm:aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={293}
                      height={183}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Live Channel Guide &amp; Stream Preview</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Integrated channel list with real-time video playback and quick zapping.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/ibo-player-channel-categories.webp"
                      alt="IBO Player category navigation menu showing live channels, favorites, and search"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Category Navigation &amp; Favorites</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Streamlined sidebar organizing channels into groups, favorites, and recently viewed.</span>
                  </figcaption>
                </figure>

                <figure className="card p-3 overflow-hidden">
                  <div className="overflow-hidden rounded-lg bg-ink-900 border border-charcoal/60">
                    <img
                      src="/images/players/ibo-player-loading-splash.webp"
                      alt="IBO Player Pro application loading screen with official logo on dark gradient"
                      className="w-full aspect-[325/182] object-cover transition-transform duration-300 hover:scale-105"
                      width={325}
                      height={182}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-1 text-xs">
                    <strong className="text-snow block font-semibold">Application Startup &amp; Initialization</strong>
                    <span className="text-smoke text-[11px] leading-relaxed">Lightweight initialization screen connecting to remote portal and loading playlists.</span>
                  </figcaption>
                </figure>
              </div>
            </section>
          )}

          {/* Step-by-Step Setup Guide */}
          <section className="mt-12 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="setup-heading">
            <h2 id="setup-heading" className="text-lg sm:text-xl font-bold text-snow">
              How to Set Up {app.shortName} with Teleview
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              {app.setupDescription ?? "Follow these three practical steps to connect your playlist and synchronize channel guides:"}
            </p>

            <ol className="mt-6 space-y-4 list-none p-0">
              {app.setupGuide.map((step) => (
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

            <div className="mt-6 pt-4 border-t border-charcoal/60 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-smoke">
                Need hardware-specific setup instructions for this player?
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={`/devices/${app.relatedDeviceSlug}`}
                  className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                >
                  View {app.relatedDeviceName} Hardware Guide
                  <ArrowRight className="size-3" aria-hidden="true" />
                </a>
                <span className="text-smoke">&bull;</span>
                <a
                  href="/devices"
                  className="text-silver-mist hover:text-snow hover:underline inline-flex items-center gap-1"
                >
                  All Supported Devices
                </a>
              </div>
            </div>
          </section>

          {/* Pros & Limitations (No fake ratings) */}
          <section className="mt-12" aria-labelledby="pros-cons-heading">
            <h2 id="pros-cons-heading" className="text-lg sm:text-xl font-bold text-snow">
              Advantages &amp; Limitations of {app.shortName}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              An honest architectural comparison based on actual operating characteristics:
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-5 text-xs">
              <div className="rounded-xl border border-phosphor-green/30 bg-ash/20 p-5">
                <h3 className="text-sm font-semibold text-phosphor-green flex items-center gap-2 mb-3">
                  <CheckCircle2 className="size-4 text-phosphor-green" aria-hidden="true" />
                  <span>Key Advantages</span>
                </h3>
                <ul className="space-y-2 text-silver-mist">
                  {app.uniqueStrengths.map((str, idx) => (
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
                  <span>Important Limitations</span>
                </h3>
                <ul className="space-y-2 text-silver-mist">
                  {app.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-smoke mt-0.5">&bull;</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Practical Troubleshooting Scenarios */}
          <section className="mt-12 rounded-2xl border border-charcoal bg-ash/20 p-6 sm:p-8" aria-labelledby="troubleshooting-heading">
            <div className="flex items-center gap-2.5 mb-2">
              <Wrench className="size-5 text-phosphor-green" aria-hidden="true" />
              <h2 id="troubleshooting-heading" className="text-lg sm:text-xl font-bold text-snow">
                {app.shortName} Practical Troubleshooting
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-silver-mist">
              {app.troubleshootingDescription ?? "Solutions to common connectivity, EPG synchronization, and video decoding errors:"}
            </p>

            <div className="mt-6 space-y-4">
              {app.troubleshooting.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ink-800/80 p-5 text-xs">
                  <h3 className="text-sm font-semibold text-snow">{item.title}</h3>
                  <p className="mt-1.5 text-smoke leading-relaxed">
                    <strong className="text-snow">Problem:</strong> {item.problem}
                  </p>
                  <p className="mt-2 text-silver-mist leading-relaxed bg-ash/50 p-3 rounded-lg border border-charcoal/50">
                    <strong className="text-phosphor-green">Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal/60 text-xs text-smoke flex flex-wrap items-center justify-between gap-3">
              <span>Encountering server authentication issues?</span>
              <a href="/help-center" className="text-phosphor-green font-semibold hover:underline">
                Visit Teleview Diagnostic Help Center &rarr;
              </a>
            </div>
          </section>

          {/* Alternatives & Comparisons */}
          <section className="mt-12" aria-labelledby="alternatives-heading">
            <h2 id="alternatives-heading" className="text-lg sm:text-xl font-bold text-snow">
              Alternative Players to Consider
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              If {app.shortName} does not fit your streaming hardware, consider these verified alternatives:
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs">
              {app.alternatives.map((alt) => (
                <article key={alt.slug} className="rounded-xl border border-charcoal bg-ash/30 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-snow">{alt.name}</h3>
                    <p className="mt-1.5 text-silver-mist leading-relaxed">{alt.reason}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/60">
                    <a
                      href={`/iptv-players/${alt.slug}`}
                      className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
                    >
                      Explore {alt.name} Guide
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contextual Service Callout */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Ready to Stream on {app.shortName}?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[580px] mx-auto leading-relaxed">
              The <a href="/" className="text-phosphor-green font-semibold hover:underline">Teleview IPTV service</a> provides ultra-fast streaming servers, 25,000+ live television channels, and 4K sports broadcasts compatible with {app.shortName} and all major IPTV media engines.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                View Subscription Plans
              </GreenButton>
              <GhostButton href="/best-iptv" className="text-xs px-5 py-2.5">
                Compare All Players
              </GhostButton>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-14" aria-labelledby="faqs-heading">
            <div className="text-center mb-8">
              <h2 id="faqs-heading" className="text-lg sm:text-xl font-bold text-snow">
                Frequently Asked Questions About {app.shortName}
              </h2>
            </div>
            <div className="space-y-4 max-w-[840px] mx-auto">
              {app.faqs.map((faq) => (
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

          {/* Diagnostic Troubleshooting Bridge */}
          <div className="mt-8 rounded-xl border border-charcoal bg-ash/20 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="space-y-0.5 text-center sm:text-left">
              <span className="text-snow font-semibold">Troubleshooting {app.name} playback or configuration errors?</span>
              <p className="text-silver-mist">
                If {app.name} encounters stream playback or playlist sync errors, consult our guides on <a href="/help-center/epg-not-working" className="text-phosphor-green hover:underline">fixing EPG not loading</a>, <a href="/help-center/channels-not-loading" className="text-phosphor-green hover:underline">resolving channels not loading</a>, or <a href="/help-center/connection-problems" className="text-phosphor-green hover:underline">server connection problems</a>.
              </p>
            </div>
            <a
              href="/help-center"
              className="rounded-lg border border-charcoal bg-ash/60 px-4 py-2 text-snow hover:border-phosphor-green/50 hover:text-phosphor-green transition-colors font-medium shrink-0"
            >
              Help Center &rarr;
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
