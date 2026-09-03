import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { ChevronRight, HelpCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { faqs } from "../data/site";

export default function FaqPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[900px]">
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
                FAQ &amp; Support
              </li>
            </ol>
          </nav>

          {/* Page Header */}
          <Reveal>
            <h1 className="t-display text-balance">
              Frequently Asked <Accent>Questions</Accent>
            </h1>
            <p className="t-body-sm mt-4 max-w-[660px] text-silver-mist leading-relaxed">
              Find fast, accurate answers to common questions regarding Teleview IPTV subscriptions, activation, compatible devices, streaming requirements, and our 14-day money-back guarantee.
            </p>
          </Reveal>

          {/* FAQ Accordion List */}
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.04}>
                <article className="card card-hover p-6 sm:p-7">
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className="mt-1 size-5 shrink-0 text-phosphor-green" />
                    <div>
                      <h2 className="t-card-title text-base sm:text-lg text-snow">{faq.question}</h2>
                      <p className="t-body-sm mt-2.5 text-silver-mist leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <Reveal className="mt-14 text-center">
            <div className="card p-8 bg-ash/30 border-phosphor-green/30">
              <h2 className="t-heading-sm">Still Have Questions?</h2>
              <p className="t-body-sm mt-2 max-w-[480px] mx-auto text-silver-mist">
                Our 24/7 technical customer support team is ready to help you with activation, device setup, or plan choices.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <GreenButton href={siteConfig.contact.emailHref}>Contact Support Email</GreenButton>
                <GhostButton href="/setup">View Setup Guides</GhostButton>
                <GhostButton href="/devices">Supported Devices</GhostButton>
                <GhostButton href="/#pricing">View Subscription Plans</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
