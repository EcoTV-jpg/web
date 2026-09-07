import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs, { BreadcrumbItem } from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  Zap,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { informationalGuidesList } from "../data/informationalGuides";
import NotFoundPage from "./NotFoundPage";

interface InformationalArticlePageProps {
  slug: string;
}

export default function InformationalArticlePage({ slug }: InformationalArticlePageProps) {
  const article = informationalGuidesList.find((g) => g.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Knowledge Base", url: "/what-is-iptv" },
    { name: article.breadcrumbName, url: `/${article.slug}` },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow">
      <Header />

      <main className="pt-24 pb-20">
        <article className="container-x max-w-[920px]">
          {/* Breadcrumb Navigation */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Article Header */}
          <header className="py-6 sm:py-8 text-center max-w-[800px] mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-silver-mist mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3 py-1 font-mono text-phosphor-green">
                <BookOpen className="size-3.5" aria-hidden="true" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-smoke">
                <Clock className="size-3.5" aria-hidden="true" />
                {article.readTime}
              </span>
            </div>

            <h1 className="t-h1 text-snow font-extrabold tracking-tight">
              {article.h1}
            </h1>

            <p className="t-body mt-4 text-silver-mist leading-relaxed">
              {article.tagline}
            </p>
          </header>

          {/* Direct Answer Box */}
          <aside
            aria-label="Direct Answer Summary"
            className="mt-6 rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-7 text-left"
          >
            <div className="flex items-start gap-3.5">
              <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="text-sm font-semibold text-snow">
                  {article.directAnswer.question}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed">
                  {article.directAnswer.answer}
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content Sections */}
          <div className="mt-12 space-y-12">
            {article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-snow">
                    {sec.heading}
                  </h2>
                  {sec.subheading && (
                    <p className="text-xs text-phosphor-green font-mono mt-1">
                      {sec.subheading}
                    </p>
                  )}
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-silver-mist leading-relaxed">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {sec.callout && (
                  <div
                    className={`rounded-xl border p-4 sm:p-5 text-xs flex items-start gap-3 ${
                      sec.callout.type === "warning"
                        ? "border-amber-500/30 bg-amber-500/10 text-amber-200"
                        : sec.callout.type === "tip"
                        ? "border-phosphor-green/30 bg-phosphor-green/10 text-silver-mist"
                        : sec.callout.type === "check"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-silver-mist"
                        : "border-charcoal bg-ash/30 text-silver-mist"
                    }`}
                  >
                    {sec.callout.type === "warning" && (
                      <AlertTriangle className="size-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    {sec.callout.type === "tip" && (
                      <Zap className="size-5 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    {sec.callout.type === "check" && (
                      <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    {sec.callout.type === "info" && (
                      <Info className="size-5 text-smoke shrink-0 mt-0.5" aria-hidden="true" />
                    )}
                    <div>
                      <h3 className="font-semibold text-snow mb-1">{sec.callout.title}</h3>
                      <p className="leading-relaxed">{sec.callout.text}</p>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Key Takeaways */}
          <section className="mt-14 rounded-2xl border border-charcoal bg-ash/20 p-6 sm:p-7">
            <h2 className="text-base sm:text-lg font-bold text-snow flex items-center gap-2 mb-4">
              <ShieldCheck className="size-5 text-phosphor-green" aria-hidden="true" />
              <span>Key Takeaways</span>
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-xs text-silver-mist">
              {article.keyTakeaways.map((k, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-phosphor-green mt-0.5">&bull;</span>
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          {article.faqs && article.faqs.length > 0 && (
            <section className="mt-14" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="text-lg sm:text-xl font-bold text-snow mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {article.faqs.map((faq, idx) => (
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
          )}

          {/* Next Steps / Contextual Navigation */}
          {article.nextSteps && article.nextSteps.length > 0 && (
            <section className="mt-14" aria-labelledby="next-steps-heading">
              <h2 id="next-steps-heading" className="text-lg sm:text-xl font-bold text-snow mb-4">
                Recommended Next Steps &amp; Related Guides
              </h2>
              <div className="grid gap-3.5 sm:grid-cols-3">
                {article.nextSteps.map((step, idx) => (
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
          )}

          {/* Contextual CTA Banner */}
          <section className="mt-16 rounded-2xl border border-charcoal bg-gradient-to-r from-ink-800 via-ash/50 to-ink-800 p-6 sm:p-8 text-center" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-lg sm:text-xl font-bold text-snow">
              Ready to Upgrade Your Television Experience?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[540px] mx-auto leading-relaxed">
              Explore Teleview&apos;s 25,000+ channel catalog, 4K sports streams, and reliable server infrastructure risk-free with our 24-hour trial.
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
        </article>
      </main>

      <Footer />
    </div>
  );
}
