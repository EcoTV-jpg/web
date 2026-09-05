import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  Wrench,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Zap,
  ChevronLeft,
  LifeBuoy,
  Wifi,
  Activity,
} from "lucide-react";
import {
  troubleshootingGuidesList,
  TroubleshootingGuideDetail,
} from "../data/troubleshootingGuides";
import NotFoundPage from "./NotFoundPage";

export default function TroubleshootingGuidePage({ slug }: { slug: string }) {
  const normalizedSlug = String(slug || "").trim().toLowerCase();
  const guide: TroubleshootingGuideDetail | undefined = troubleshootingGuidesList.find(
    (g) => g.slug.toLowerCase() === normalizedSlug
  );

  if (!guide) {
    return <NotFoundPage />;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Help Center", url: "/help-center" },
    { name: guide.name, url: `/help-center/${guide.slug}` },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1000px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Return to Help Center Hub */}
          <div className="mb-4">
            <a
              href="/help-center"
              className="inline-flex items-center gap-1.5 text-xs text-silver-mist hover:text-phosphor-green transition-colors"
            >
              <ChevronLeft className="size-3.5" aria-hidden="true" />
              <span>Back to Help Center &amp; Knowledge Base</span>
            </a>
          </div>

          {/* Guide Header */}
          <header className="py-4 sm:py-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2.5 py-0.5 text-xs font-mono text-phosphor-green">
                {guide.category}
              </span>
              <span className="text-xs text-smoke font-mono">
                Verified Diagnostic Manual
              </span>
            </div>

            <h1 className="t-h2 text-snow font-bold tracking-tight max-w-[840px]">
              {guide.name}
            </h1>
            <p className="t-body mt-3 max-w-[760px] text-silver-mist leading-relaxed">
              {guide.tagline}
            </p>
          </header>

          {/* Quick Answer / Immediate Resolution */}
          <section className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-5 sm:p-7" aria-labelledby="quick-answer-heading">
            <div className="flex items-start gap-3">
              <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-2">
                <h2 id="quick-answer-heading" className="text-sm sm:text-base font-bold text-snow">
                  Quick Answer: Primary Diagnosis &amp; Immediate Fix
                </h2>
                <p className="text-xs sm:text-sm text-silver-mist leading-relaxed">
                  {guide.quickAnswer}
                </p>
              </div>
            </div>
          </section>

          {/* Primary Causes Section */}
          <section className="mt-12" aria-labelledby="causes-heading">
            <h2 id="causes-heading" className="text-lg sm:text-xl font-bold text-snow">
              Primary Causes of this Problem
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              Technical root causes identified across network, player software, and ISP layers:
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs">
              {guide.primaryCauses.map((cause, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <AlertTriangle className="size-4 text-smoke shrink-0" aria-hidden="true" />
                    <span>{cause.title}</span>
                  </h3>
                  <p className="text-silver-mist leading-relaxed">
                    {cause.explanation}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Step-by-Step Diagnostic Workflow */}
          <section className="mt-12 rounded-2xl border border-charcoal bg-ash/30 p-6 sm:p-8" aria-labelledby="workflow-heading">
            <h2 id="workflow-heading" className="text-lg sm:text-xl font-bold text-snow">
              Step-by-Step Diagnostic &amp; Resolution Workflow
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-silver-mist">
              Follow these sequential steps in order to diagnose and resolve the issue:
            </p>

            <ol className="mt-6 space-y-4 list-none p-0">
              {guide.diagnosticWorkflow.map((step) => (
                <li key={step.step} className="rounded-xl border border-charcoal bg-ink-800/80 p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                  <span className="size-7 rounded-full bg-phosphor-green/20 border border-phosphor-green/40 font-mono text-xs font-bold text-phosphor-green flex items-center justify-center shrink-0">
                    {step.step}
                  </span>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-snow">{step.title}</h3>
                    <p className="text-xs text-silver-mist leading-relaxed">
                      <strong className="text-snow">Action:</strong> {step.action}
                    </p>
                    <p className="text-xs text-smoke leading-relaxed">
                      <strong className="text-phosphor-green">Technical Rationale:</strong> {step.technicalRationale}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Advanced Optimizations */}
          {guide.advancedFixes && guide.advancedFixes.length > 0 && (
            <section className="mt-12" aria-labelledby="advanced-heading">
              <h2 id="advanced-heading" className="text-lg sm:text-xl font-bold text-snow">
                Advanced Network &amp; Player Adjustments
              </h2>

              <div className="mt-4 space-y-3 text-xs">
                {guide.advancedFixes.map((fix, idx) => (
                  <div key={idx} className="rounded-xl border border-charcoal bg-ash/20 p-5">
                    <h3 className="text-sm font-semibold text-snow mb-1.5">{fix.title}</h3>
                    <p className="text-silver-mist leading-relaxed">{fix.instruction}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contextual Support Callout */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Still Experiencing Streaming Issues?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[580px] mx-auto leading-relaxed">
              Teleview subscriber support is available 24/7 on WhatsApp and email. Message our technical operations team with your Order ID for real-time line diagnostics.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/contact" className="text-xs px-5 py-2.5">
                Contact 24/7 Support
              </GreenButton>
              <GhostButton href="/faq" className="text-xs px-5 py-2.5">
                Browse All FAQs
              </GhostButton>
            </div>
          </section>

          {/* FAQs */}
          <section className="mt-14" aria-labelledby="faqs-heading">
            <div className="text-center mb-8">
              <h2 id="faqs-heading" className="text-lg sm:text-xl font-bold text-snow">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4 max-w-[840px] mx-auto">
              {guide.faqs.map((faq) => (
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

          {/* Related Troubleshooting Manuals Cross-Linking */}
          <section className="mt-16 border-t border-charcoal/60 pt-12" aria-labelledby="other-troubleshooting-heading">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 id="other-troubleshooting-heading" className="text-lg sm:text-xl font-bold text-snow">
                  Related IPTV Diagnostic Guides
                </h2>
                <p className="text-xs text-silver-mist mt-1">
                  Explore other troubleshooting manuals and resolution procedures:
                </p>
              </div>
              <a
                href="/help-center"
                className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1 shrink-0"
              >
                All Help Center Topics &rarr;
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {troubleshootingGuidesList
                .filter((g) => g.slug !== guide.slug)
                .slice(0, 3)
                .map((other) => (
                  <a
                    key={other.slug}
                    href={`/help-center/${other.slug}`}
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
                <span className="text-snow font-semibold">Configuring a new television or streaming stick?</span>
                <p className="text-silver-mist">Review hardware decoders and setup walkthroughs for your device.</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/devices"
                  className="rounded-lg border border-charcoal bg-ash/60 px-3.5 py-1.5 text-snow hover:border-phosphor-green/50 hover:text-phosphor-green transition-colors font-medium"
                >
                  Device Guides
                </a>
                <a
                  href="/setup"
                  className="rounded-lg border border-charcoal bg-ash/60 px-3.5 py-1.5 text-snow hover:border-phosphor-green/50 hover:text-phosphor-green transition-colors font-medium"
                >
                  Setup Manual
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
