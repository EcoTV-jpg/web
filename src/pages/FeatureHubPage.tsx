import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  Tv,
  Clock,
  CheckCircle2,
  Zap,
  Layers,
  Film,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { featureGuidesList } from "../data/featureGuides";
import NotFoundPage from "./NotFoundPage";

interface FeatureHubPageProps {
  slug: string;
}

export default function FeatureHubPage({ slug }: FeatureHubPageProps) {
  const feature = featureGuidesList.find((f) => f.slug === slug);

  if (!feature) {
    return <NotFoundPage />;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Features", url: "/best-iptv" },
    { name: feature.h1.split(":")[0].trim(), url: `/${feature.slug}` },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container-x max-w-[1000px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Page Header */}
          <header className="py-6 sm:py-8 text-center max-w-[860px] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-silver-mist mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3 py-1 font-mono text-phosphor-green">
                {feature.slug === "iptv-sports" ? (
                  <Trophy className="size-3.5" aria-hidden="true" />
                ) : feature.slug === "iptv-movies" ? (
                  <Film className="size-3.5" aria-hidden="true" />
                ) : (
                  <Tv className="size-3.5" aria-hidden="true" />
                )}
                <span>{feature.category}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-smoke">
                <Clock className="size-3.5" aria-hidden="true" />
                {feature.readTime}
              </span>
            </div>

            <h1 className="t-h1 text-snow font-extrabold tracking-tight">
              {feature.h1}
            </h1>

            <p className="t-body mt-4 text-silver-mist leading-relaxed">
              {feature.tagline}
            </p>
          </header>

          {/* Direct Answer / Executive Summary */}
          <aside
            aria-label="Feature Overview Summary"
            className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-7 text-left"
          >
            <div className="flex items-start gap-3.5">
              <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-snow">
                  {feature.directAnswer.question}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                  {feature.directAnswer.answer}
                </p>
              </div>
            </div>
          </aside>

          {/* Introduction Paragraphs */}
          <section className="mt-10 max-w-[860px] mx-auto space-y-3 text-xs sm:text-sm text-silver-mist leading-relaxed text-center sm:text-left">
            {feature.introParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>

          {/* Section 1: Categories & Channel Bouquets */}
          <section className="mt-14" aria-labelledby="bouquets-heading">
            <div className="text-center mb-8">
              <h2 id="bouquets-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Available Bouquets &amp; Broadcast Coverage
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[620px] mx-auto">
                Explore major category packages, stream volumes, and content coverage available to subscribers:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {feature.categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-charcoal bg-ash/20 p-5 flex flex-col justify-between hover:border-charcoal/80 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-sm font-bold text-snow">{cat.categoryName}</h3>
                      <span className="text-[10px] font-mono text-phosphor-green bg-phosphor-green/10 border border-phosphor-green/30 px-2 py-0.5 rounded-full shrink-0">
                        {cat.channelCount}
                      </span>
                    </div>
                    <p className="text-xs text-silver-mist leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Technical Highlights */}
          <section className="mt-16" aria-labelledby="highlights-heading">
            <div className="text-center mb-8">
              <h2 id="highlights-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Transmission Infrastructure &amp; Quality Standards
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[600px] mx-auto">
                How Teleview optimizes bandwidth, video encoding, and guide synchronization:
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {feature.technicalHighlights.map((th, idx) => (
                <div key={idx} className="rounded-xl border border-charcoal bg-ash/30 p-5 space-y-2 text-xs">
                  <h3 className="text-sm font-semibold text-snow flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                    <span>{th.title}</span>
                  </h3>
                  <p className="text-silver-mist leading-relaxed">{th.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: FAQs */}
          <section className="mt-16" aria-labelledby="faqs-heading">
            <div className="text-center mb-8">
              <h2 id="faqs-heading" className="text-xl sm:text-2xl font-bold text-snow">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-silver-mist">
                Answers to common inquiries regarding channels, sports, and on-demand catalogs.
              </p>
            </div>

            <div className="space-y-3 max-w-[780px] mx-auto">
              {feature.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group rounded-xl border border-charcoal bg-ash/20 p-4 text-xs transition-colors open:bg-ash/40"
                >
                  <summary className="font-semibold text-snow cursor-pointer list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="text-phosphor-green transition-transform group-open:rotate-180">&darr;</span>
                  </summary>
                  <p className="mt-3 text-silver-mist leading-relaxed pl-1">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Section 4: Contextual Next Steps */}
          <section className="mt-14" aria-labelledby="next-steps-heading">
            <h2 id="next-steps-heading" className="text-lg sm:text-xl font-bold text-snow mb-4">
              Related Guides &amp; Next Steps
            </h2>
            <div className="grid gap-3.5 sm:grid-cols-3">
              {feature.nextSteps.map((step, idx) => (
                <a
                  key={idx}
                  href={step.linkUrl}
                  className="rounded-xl border border-charcoal bg-ash/30 p-4 hover:border-phosphor-green/40 transition-colors group block text-xs"
                >
                  <h3 className="font-semibold text-snow group-hover:text-phosphor-green transition-colors mb-1">
                    {step.title}
                  </h3>
                  <p className="text-smoke mb-3">{step.description}</p>
                  <span className="text-phosphor-green font-semibold inline-flex items-center gap-1 group-hover:underline">
                    {step.linkText}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Contextual CTA Banner */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Ready to Stream {feature.slug === "iptv-sports" ? "Live Sports" : feature.slug === "iptv-movies" ? "4K Movies" : "Live Channels"}?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[540px] mx-auto leading-relaxed">
              Connect Teleview credentials to your television or streaming stick in under 4 minutes.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <GreenButton href="/iptv-subscription" className="text-xs px-5 py-2.5">
                View Subscription Plans
              </GreenButton>
              <GhostButton href="/iptv-free-trial" className="text-xs px-5 py-2.5">
                Start 24h Free Trial
              </GhostButton>
              <GhostButton href="/best-iptv" className="text-xs px-5 py-2.5">
                IPTV Buying Guide
              </GhostButton>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
