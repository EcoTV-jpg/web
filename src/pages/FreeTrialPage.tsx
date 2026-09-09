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
  Wifi,
  Check,
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
                Zero automatic rebilling (Expires automatically)
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
                Xtream Codes API + M3U supported
              </span>
            </div>
          </header>

          {/* Section: IPTV Free Trial at a Glance */}
          <section className="mt-8" aria-labelledby="trial-at-a-glance-heading">
            <div className="rounded-2xl border border-charcoal/80 bg-ink-800/90 p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <ShieldCheck className="size-5 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 id="trial-at-a-glance-heading" className="text-lg sm:text-xl font-bold text-snow">
                  IPTV Free Trial at a Glance
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs sm:text-sm">
                <div className="rounded-xl border border-charcoal bg-black/40 p-4">
                  <span className="text-[11px] font-mono text-smoke uppercase block mb-1">Trial Duration</span>
                  <span className="font-semibold text-snow">{freeTrialData.trialAtAGlance.duration}</span>
                </div>
                <div className="rounded-xl border border-charcoal bg-black/40 p-4">
                  <span className="text-[11px] font-mono text-smoke uppercase block mb-1">Credit Card Needed</span>
                  <span className="font-semibold text-phosphor-green">{freeTrialData.trialAtAGlance.paymentRequired}</span>
                </div>
                <div className="rounded-xl border border-charcoal bg-black/40 p-4">
                  <span className="text-[11px] font-mono text-smoke uppercase block mb-1">Auto-Renewal</span>
                  <span className="font-semibold text-snow">{freeTrialData.trialAtAGlance.autoRenewal}</span>
                </div>
                <div className="rounded-xl border border-charcoal bg-black/40 p-4">
                  <span className="text-[11px] font-mono text-smoke uppercase block mb-1">Active Streams</span>
                  <span className="font-semibold text-snow">{freeTrialData.trialAtAGlance.activeStreams}</span>
                </div>
                <div className="rounded-xl border border-charcoal bg-black/40 p-4 sm:col-span-2">
                  <span className="text-[11px] font-mono text-smoke uppercase block mb-1">Credentials Provided</span>
                  <span className="font-medium text-silver-mist leading-relaxed">{freeTrialData.trialAtAGlance.credentialsDelivered}</span>
                </div>
                <div className="rounded-xl border border-charcoal bg-black/40 p-4 sm:col-span-2">
                  <span className="text-[11px] font-mono text-smoke uppercase block mb-1">Compatible Hardware</span>
                  <span className="font-medium text-silver-mist leading-relaxed">{freeTrialData.trialAtAGlance.compatibleHardware}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Before You Request a Trial */}
          <section className="mt-16" aria-labelledby="before-request-heading">
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Pre-Flight Checklist</span>
              <h2 id="before-request-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Before You Request an IPTV Free Trial
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Taking three minutes to prepare your hardware ensures you make the most of your 24-hour test window:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {freeTrialData.preRequestChecklist.map((item, idx) => (
                <div key={item.title} className="card p-5 border-charcoal flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-phosphor-green">Step {idx + 1}</span>
                    <h3 className="text-sm font-semibold text-snow mt-1 mb-2">{item.title}</h3>
                    <p className="text-xs text-silver-mist leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: How the Trial Works (5 Steps) */}
          <section className="mt-20" aria-labelledby="how-trial-works-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Onboarding Flow</span>
              <h2 id="how-trial-works-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                How the 24-Hour IPTV Free Trial Works
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Getting connected takes five simple steps from initial WhatsApp message to active television playback:
              </p>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 list-none p-0">
              {freeTrialData.howItWorksFiveSteps.map((step) => (
                <li key={step.number} className="card p-4 border-charcoal flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-phosphor-green">{step.number}</span>
                    <h3 className="text-sm font-semibold text-snow mt-1.5">{step.title}</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-charcoal/60 text-[11px] text-smoke leading-relaxed">
                    {step.detail}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section: What Credentials Do You Receive? */}
          <section className="mt-20" aria-labelledby="credential-format-heading">
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Credential Architecture</span>
              <h2 id="credential-format-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                What Credentials Do You Receive With Your Trial?
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Teleview provides standard credentials that configure directly inside your IPTV player of choice:
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
            <div className="mt-4 p-4 rounded-xl border border-charcoal/80 bg-ink-800/60 text-xs text-silver-mist flex items-start gap-2.5">
              <AlertCircle className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>Credentials Security:</strong> All credentials dispatched for your trial are temporary, generated specifically for your device, and expire automatically after 24 hours. We never publish raw active lines or shared community links.
              </span>
            </div>
          </section>

          {/* Section: What Should You Test During an IPTV Free Trial? */}
          <section className="mt-20" aria-labelledby="what-to-test-heading">
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Evaluation Checklist</span>
              <h2 id="what-to-test-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                What Should You Test During an IPTV Free Trial?
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                A reliable service should perform consistently across all broadcast formats. Review these core items:
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-charcoal bg-ash/30">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-charcoal bg-black/40 text-smoke uppercase font-mono text-[11px]">
                  <tr>
                    <th className="p-3.5 w-1/4">Aspect to Test</th>
                    <th className="p-3.5 w-1/2">What to Check</th>
                    <th className="p-3.5 w-1/4">Practical Evaluation Tip</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-charcoal/60">
                  {freeTrialData.whatToTestTable.map((row) => (
                    <tr key={row.aspect} className="hover:bg-ash/50 transition-colors">
                      <td className="p-3.5 font-semibold text-snow">{row.aspect}</td>
                      <td className="p-3.5 text-silver-mist leading-relaxed">{row.whatToCheck}</td>
                      <td className="p-3.5 text-smoke text-xs italic leading-relaxed">{row.evaluationTip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: How to Test an IPTV Trial in 24 Hours */}
          <section className="mt-20" aria-labelledby="testing-schedule-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Methodical Walkthrough</span>
              <h2 id="testing-schedule-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                How to Test an IPTV Trial in 24 Hours
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Follow this six-step practical testing procedure to evaluate performance under real viewing conditions:
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {freeTrialData.testingScheduleSteps.map((step) => (
                <article key={step.number} className="card p-6 border-charcoal flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-phosphor-green">Test {step.number}</span>
                      <span className="text-[11px] font-mono text-smoke">{step.focus}</span>
                    </div>
                    <h3 className="text-base font-semibold text-snow mb-2">{step.title}</h3>
                    <p className="text-xs text-silver-mist leading-relaxed mb-4">{step.instructions}</p>
                    <ul className="space-y-2 border-t border-charcoal/60 pt-3">
                      {step.checklist.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-silver-mist leading-relaxed">
                          <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Section: M3U vs Xtream Codes */}
          <section className="mt-20" aria-labelledby="m3u-vs-xtream-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Connection Architecture</span>
              <h2 id="m3u-vs-xtream-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                M3U vs Xtream Codes: What&apos;s the Difference?
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Both protocols deliver live television streams, but handle navigation, categories, and EPG differently:
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="card p-6 sm:p-8 border-phosphor-green/40 bg-ink-800/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-phosphor-green font-semibold uppercase">Recommended Option</span>
                  <Zap className="size-5 text-phosphor-green" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-snow">{freeTrialData.m3uVsXtreamComparison.xtreamCodes.title}</h3>
                <p className="text-xs text-smoke mt-1">{freeTrialData.m3uVsXtreamComparison.xtreamCodes.summary}</p>

                <ul className="mt-5 space-y-2.5 text-xs text-silver-mist">
                  {freeTrialData.m3uVsXtreamComparison.xtreamCodes.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-charcoal/60 text-xs text-silver-mist">
                  <strong className="text-snow">Best For: </strong>
                  {freeTrialData.m3uVsXtreamComparison.xtreamCodes.bestFor}
                </div>
              </div>

              <div className="card p-6 sm:p-8 border-charcoal bg-ash/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-smoke uppercase">Alternative Option</span>
                  <Server className="size-5 text-smoke" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-snow">{freeTrialData.m3uVsXtreamComparison.m3uPlaylist.title}</h3>
                <p className="text-xs text-smoke mt-1">{freeTrialData.m3uVsXtreamComparison.m3uPlaylist.summary}</p>

                <ul className="mt-5 space-y-2.5 text-xs text-silver-mist">
                  {freeTrialData.m3uVsXtreamComparison.m3uPlaylist.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="size-4 text-smoke shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-charcoal/60 text-xs text-silver-mist">
                  <strong className="text-snow">Best For: </strong>
                  {freeTrialData.m3uVsXtreamComparison.m3uPlaylist.bestFor}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Compatible Devices and IPTV Players */}
          <section className="mt-20" aria-labelledby="compatible-devices-heading">
            <div className="text-center max-w-[720px] mx-auto mb-8">
              <span className="label-mono text-phosphor-green text-xs">Hardware &amp; Applications</span>
              <h2 id="compatible-devices-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Compatible Devices &amp; IPTV Players
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Match your streaming television or device to the recommended player application:
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

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {deviceGuidesList.slice(0, 4).map((d) => (
                <a
                  key={d.slug}
                  href={`/devices/${d.slug}`}
                  className="rounded-xl border border-charcoal bg-ash/20 p-3.5 hover:border-phosphor-green/40 transition-colors group block"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-phosphor-green uppercase">{d.category}</span>
                    <ArrowRight className="size-3 text-smoke group-hover:text-phosphor-green transition-colors" />
                  </div>
                  <h3 className="text-xs font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                    {d.name}
                  </h3>
                </a>
              ))}
            </div>
          </section>

          {/* Section: IPTV Trial Troubleshooting */}
          <section className="mt-20" aria-labelledby="troubleshooting-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Self-Service Help Center</span>
              <h2 id="troubleshooting-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                IPTV Trial Troubleshooting: Resolving Common Issues
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                If you encounter any playback or configuration hurdles during your trial, consult our dedicated troubleshooting guides:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {freeTrialData.troubleshootingLinks.map((t) => (
                <a
                  key={t.issue}
                  href={t.href}
                  className="card p-5 border-charcoal hover:border-phosphor-green/40 transition-colors group block flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors mb-1.5">
                      {t.issue}
                    </h3>
                    <p className="text-xs text-silver-mist leading-relaxed">{t.symptom}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-charcoal/60 text-xs font-medium text-phosphor-green inline-flex items-center gap-1">
                    <span>{t.linkText}</span>
                    <ArrowRight className="size-3" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Section: Trial Limitations & Fair Use */}
          <section className="mt-20" aria-labelledby="trial-limitations-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Guidelines &amp; Policies</span>
              <h2 id="trial-limitations-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Trial Scope, Fair Use &amp; Zero Automatic Billing
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                To guarantee stable bandwidth for active subscribers and trial users alike, test passes operate under straightforward terms:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* Section: What Happens When the Trial Ends? */}
          <section className="mt-16 card p-6 sm:p-8 border-charcoal bg-ash/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-[660px]">
              <div className="flex items-center gap-2 text-xs font-mono text-phosphor-green uppercase mb-2">
                <Layers className="size-4" aria-hidden="true" />
                <span>What Happens When the Trial Ends?</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-snow">
                Keep Your Exact Settings When Transitioning to a Subscription
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                When your 24-hour test period concludes, your trial line simply turns off. You will never be charged automatically. If you enjoyed the streaming quality, contact support to select a 1, 3, 6, or 12-month subscription tier. Your username, password, channel groupings, and EPG settings remain active with zero re-installation.
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

          {/* Section: FAQs */}
          <section className="mt-20" aria-labelledby="free-trial-faqs-heading">
            <div className="text-center max-w-[720px] mx-auto mb-10">
              <span className="label-mono text-phosphor-green text-xs">Got Questions?</span>
              <h2 id="free-trial-faqs-heading" className="t-heading-sm mt-1 text-xl sm:text-2xl font-bold text-snow">
                Frequently Asked Questions About the IPTV Free Trial
              </h2>
              <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm">
                Everything you need to know about testing Teleview IPTV before purchasing:
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
