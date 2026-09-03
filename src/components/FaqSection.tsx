import { HelpCircle } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { faqs } from "../data/site";

export default function FaqSection() {
  return (
    <section id="faq" className="section-y scroll-mt-16" aria-labelledby="faq-section-heading">
      <div className="container-x max-w-[920px]">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            Frequently Asked Questions
          </p>
          <h2 id="faq-section-heading" className="t-h2 mt-4 text-balance">
            Discover Premium <Accent>Teleview IPTV Service</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[560px] text-silver-mist leading-relaxed">
            Find fast, accurate answers to common questions about Teleview IPTV subscriptions, activation, compatible devices, and our 14-day money-back guarantee.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.04}>
              <article className="card card-hover p-6 sm:p-7">
                <div className="flex items-start gap-3.5">
                  <HelpCircle className="mt-1 size-5 shrink-0 text-phosphor-green" aria-hidden="true" />
                  <div>
                    <h3 className="t-card-title text-base sm:text-lg text-snow font-semibold">{faq.question}</h3>
                    <p className="t-body-sm mt-2.5 text-silver-mist leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
                    {"link" in faq && faq.link && (
                      <a
                        href={(faq.link as { url: string; text: string }).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-phosphor-green hover:underline"
                      >
                        {(faq.link as { url: string; text: string }).text}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
