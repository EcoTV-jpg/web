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
  AlertCircle,
  Key,
  Layers,
  Lock,
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
                Zero automatic rebilling (Expires in 24 hours)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-phosphor-green" aria-hidden="true" />
                1 active stream per trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-phosphor-green" aria-hidden="true" />
                5–15 min WhatsApp dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-phosphor-green" aria-hidden="true" />
                Test live sports &amp; VOD channels
              </span>
            </div>
          </header>

          {/* Transparent Trust Banner: Zero Credit Card Commitment */}
          <section className="mt-6 rounded-2xl border border-phosphor-green/30 bg-ink-800/80 p-5 sm:p-6 text-sm text-silver-mist">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Lock className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-snow">
                    Transparent, Risk-Free Evaluation — Zero Payment Information Collected
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-silver-mist leading-relaxed">
                    Teleview will never ask for your credit card number, bank details, or automated billing authorizations for a trial. Your 24-hour test line is dispatched directly through WhatsApp and concludes automatically after 24 hours with zero rollover charges.
                  </p>
                </div>
              </div>
              <a
                href={trialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green text-xs px-4 py-2 shrink-0 inline-flex items-center gap-1.5"
              >
                Request Free Pass &rarr;
              </a>
            </div>
          </section>

          {/* Section: Credential Architecture Breakdown */}
          <section className="mt-16" aria-labelledby="credential-format-heading">
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Credential Transparency</span>
              <h2 id="credential-format-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                What Credentials Do You Receive for Your Trial?
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Upon contacting our support desk, you receive standard industry credentials compatible with any modern IPTV player:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {freeTrialData.credentialFields.map((field) => (
                <div key={field.label} className="card p-5 border-charcoal flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold text-phosphor-green uppercase">{field.label}</span>
                      <Key className="size-4 text-smoke" aria-hidden="true" />
                    </div>
                    <code className="text-xs font-mono text-snow bg-black/40 px-2 py-1 rounded border border-charcoal/80 block break-all mb-2">
                      {field.field}
                    </code>
                    <p className="text-xs text-silver-mist leading-relaxed">
                      {field.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 p-3.5 rounded-xl border border-charcoal/80 bg-ink-800/60 text-xs text-silver-mist flex items-start gap-2">
              <AlertCircle className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>MAC / MAG Stalker Portal Support:</strong> If you stream on a Formuler box (MYTVOnline) or MAG device, provide your device MAC address to our WhatsApp support agent for portal activation instead of username/password.
              </span>
            </div>
          </section>

          {/* Section: Test Before You Subscribe */}
          <section className="mt-20" aria-labelledby="why-test-heading">
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
                <article key={point.title} className="card p-6 border-charcoal flex flex-col justify-between">
                  <div>
                    <div className="size-10 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green mb-4">
                      {point.icon === "Tv" && <Tv className="size-5" aria-hidden="true" />}
                      {point.icon === "Zap" && <Zap className="size-5" aria-hidden="true" />}
                      {point.icon === "Calendar" && <Calendar className="size-5" aria-hidden="true" />}
                      {point.icon === "Film" && <Film className="size-5" aria-hidden="true" />}
                      {point.icon === "Smartphone" && <Smartphone className="size-5" aria-hidden="true" />}
                      {point.icon === "Activity" && <Activity className="size-5" aria-hidden="true" />}
                    </div>
                    <h3 className="text-base font-semibold text-snow">{point.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                  {point.linkUrl && (
                    <div className="mt-4 pt-3 border-t border-charcoal/60">
                      <a
                        href={point.linkUrl}
                        className="text-xs text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                      >
                        {point.linkText} &rarr;
                      </a>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Section: 24-Hour Benchmark Schedule */}
          <section className="mt-20" aria-labelledby="benchmark-schedule-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Evaluation Protocol</span>
              <h2 id="benchmark-schedule-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                The 24-Hour IPTV Free Trial Testing Schedule
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Get maximum value from your 24-hour test pass by following this systematic, 4-phase evaluation timeline:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {freeTrialData.benchmarkSchedule.map((item) => (
                <div key={item.phase} className="card p-6 border-charcoal flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-phosphor-green/15 text-phosphor-green border border-phosphor-green/30 font-semibold">
                        {item.phase} • {item.hours}
                      </span>
                      <span className="text-xs text-smoke font-mono">{item.focus}</span>
                    </div>
                    <h3 className="text-base font-bold text-snow mt-2">{item.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {item.actionItems.map((action, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                          <CheckCircle2 className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
                Getting connected typically takes between 5 to 15 minutes from WhatsApp request to first live broadcast.
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
                    {step.number === "02" ? (
                      <span>
                        Major industry-standard players supporting Xtream Codes API or M3U playlists are compatible, depending on the app and device. Check our{" "}
                        <a href="/setup" className="text-phosphor-green hover:underline font-medium">
                          step-by-step setup guides
                        </a>{" "}
                        for quick 5-minute configuration walkthroughs.
                      </span>
                    ) : (
                      step.detail
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section: Fast Compatibility Matrix */}
          <section className="mt-20" aria-labelledby="compatibility-matrix-heading">
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Setup Quick Reference</span>
              <h2 id="compatibility-matrix-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Device &amp; App Compatibility Matrix
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Find the recommended IPTV player application and login method for your specific streaming hardware:
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-charcoal bg-black/40 text-smoke uppercase font-mono text-[11px]">
                  <tr>
                    <th className="p-3.5">Device Platform</th>
                    <th className="p-3.5">Recommended Player App</th>
                    <th className="p-3.5">Connection Method</th>
                    <th className="p-3.5">Setup Time</th>
                    <th className="p-3.5">Step-by-Step Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60">
                  {freeTrialData.deviceCompatibilityRows.map((row) => (
                    <tr key={row.device} className="hover:bg-ash/50 transition-colors">
                      <td className="p-3.5 font-medium text-snow">{row.device}</td>
                      <td className="p-3.5 text-silver-mist">{row.recommendedApp}</td>
                      <td className="p-3.5 text-smoke font-mono text-xs">{row.connectionMethod}</td>
                      <td className="p-3.5 text-phosphor-green font-medium">{row.setupTime}</td>
                      <td className="p-3.5">
                        <a href={row.guideUrl} className="text-phosphor-green hover:underline font-semibold inline-flex items-center gap-1">
                          View Tutorial &rarr;
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                  IPTV Buying Guide &rarr;
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

            <div className="mt-4 p-4 rounded-xl border border-charcoal bg-ash/20 text-xs text-silver-mist leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>Player License Independence:</strong> Teleview provides your raw streaming credentials (Xtream Codes API server URL, username, password, and M3U playlist). Any premium player application upgrades (such as TiviMate Premium or IBO Player activations) are separate purchases made directly through their respective developers.
              </span>
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
              <p className="t-body-sm text-silver-mist text-xs sm:text-sm leading-relaxed">
                To test an IPTV free trial effectively, evaluate live channel playback, channel switching response, EPG guide accuracy, and on-demand VOD streaming directly on your primary home devices. Make sure to test stream stability during peak evening hours (8:00 PM to 11:00 PM) to verify that your local network and internet provider maintain smooth playback without throttling.
              </p>
              <p className="t-body-sm text-silver-mist text-xs sm:text-sm mt-3">
                Follow these core checks to evaluate Teleview before choosing a subscription duration: <strong className="text-snow">1)</strong> Benchmark peak-hour 60 FPS sports (8 PM &ndash; 11 PM); <strong className="text-snow">2)</strong> Verify channel zapping response (&lt;2 seconds); <strong className="text-snow">3)</strong> Check EPG guide timeline accuracy; <strong className="text-snow">4)</strong> Test 4K VOD playback with subtitle sync.
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

          {/* Section: Transparent Trial Limitations & Fair Use */}
          <section className="mt-20" aria-labelledby="trial-limitations-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Fair Use &amp; Guidelines</span>
              <h2 id="trial-limitations-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Trial Scope, Limitations &amp; Requirements
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                To maintain reliable stream performance for all active subscribers and trial users, complimentary test passes operate under straightforward guidelines:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {freeTrialData.limitations.map((item) => (
                <div key={item.title} className="card p-5 border-charcoal flex flex-col justify-between">
                  <div>
                    <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                      {item.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-snow mt-2.5">{item.title}</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seamless Upgrade Continuity Callout */}
          <section className="mt-16 card p-6 sm:p-8 border-charcoal bg-ash/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-[660px]">
              <div className="flex items-center gap-2 text-xs font-mono text-phosphor-green uppercase mb-2">
                <Layers className="size-4" aria-hidden="true" />
                <span>Seamless Transition to Full Subscription</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-snow">
                Keep Your Exact Line &amp; Playlist Settings When Upgrading
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                When your 24-hour test pass concludes, you do not need to re-install apps, re-download M3U files, or reorganize your favorite channels. Choosing any paid subscription tier (1, 3, 6, or 12 months) preserves your existing credentials with instant server activation.
              </p>
            </div>
            <a
              href="/iptv-subscription"
              className="btn-green text-xs px-5 py-3 shrink-0 inline-flex items-center gap-2"
            >
              <span>View Subscription Plans</span>
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
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
              <div className="card p-5 border-charcoal text-center flex flex-col justify-between">
                <div>
                  <Server className="size-6 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-snow">Multi-CDN Edge Routing</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Distributed CDN architecture with intelligent traffic management designed to prevent stutter during peak live matches. Learn more about{" "}
                    <a href="/how-does-iptv-work" className="text-phosphor-green hover:underline">
                      how IPTV streaming works
                    </a>.
                  </p>
                </div>
              </div>

              <div className="card p-5 border-charcoal text-center flex flex-col justify-between">
                <div>
                  <Zap className="size-6 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-snow">Zero Contract Lock-Ins</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Flexible plans from 1 to 12 months with zero automatic rebilling, credit card lock-ins, or cancellation friction. Explore all{" "}
                    <a href="/iptv-subscription" className="text-phosphor-green hover:underline">
                      IPTV subscription packages
                    </a>.
                  </p>
                </div>
              </div>

              <div className="card p-5 border-charcoal text-center flex flex-col justify-between">
                <div>
                  <Activity className="size-6 text-phosphor-green mx-auto mb-3" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-snow">24/7 WhatsApp Support</h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Direct technical assistance online around the clock to troubleshoot decoder settings, EPG synchronization, and custom playlist URLs.
                  </p>
                </div>
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
              Connect with our support team on WhatsApp to receive your Xtream Codes API server URL, username, and password within minutes. No credit card required.
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
