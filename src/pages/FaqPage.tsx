import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { HelpCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { faqs } from "../data/site";

export default function FaqPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "FAQ & Support", url: "/faq" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[900px]">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbItems} />

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
                <GhostButton href="/iptv-subscription">Compare All Plans</GhostButton>
                <GhostButton href="/setup">View Setup Guides</GhostButton>
                <GhostButton href="/devices">Supported Devices</GhostButton>
                <GhostButton href="/help-center">Help Center</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
