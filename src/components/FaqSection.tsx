import { HelpCircle, ArrowRight, ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { homepageFaqs } from "../data/site";

export default function FaqSection() {
  return (
    <section id="faq" className="section-y scroll-mt-20" aria-labelledby="faq-section-heading">
      <div className="container-x max-w-[880px]">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            Common Inquiries
          </p>
          <h2 id="faq-section-heading" className="t-h2 mt-4 text-balance">
            Frequently Asked <Accent>Questions</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[580px] text-silver-mist leading-relaxed">
            Find fast, accurate answers to common questions about Teleview IPTV subscriptions, activation timing, compatible devices, and our 14-day money-back guarantee.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {homepageFaqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.03}>
              <details
                className="group card border-charcoal bg-ash/30 transition-colors duration-150 open:border-graphite/60 open:bg-ash/50 overflow-hidden"
                open={i === 0 ? true : undefined}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3.5 p-4 sm:p-5 select-none min-h-[44px] [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="size-4 shrink-0 text-phosphor-green" aria-hidden="true" />
                    <h3 className="text-sm sm:text-base font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className="size-4 shrink-0 text-silver-mist transition-transform duration-200 group-open:rotate-180 group-open:text-phosphor-green"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-silver-mist leading-relaxed border-t border-charcoal/40">
                  <p className="mt-2 text-silver-mist leading-relaxed">{faq.answer}</p>
                  {"link" in faq && faq.link && (
                    <a
                      href={(faq.link as { url: string; text: string }).url}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-phosphor-green hover:underline min-h-[44px] sm:min-h-0 py-2 sm:py-0"
                    >
                      {(faq.link as { url: string; text: string }).text}
                    </a>
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <a
            href="/faq"
            className="text-xs sm:text-sm font-semibold text-silver-mist hover:text-snow hover:underline inline-flex items-center gap-1.5 min-h-[44px]"
          >
            Have a question not listed here? Visit our complete FAQ Knowledge Base <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
