import { HelpCircle, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { planDecisionSupport } from "../data/site";

export default function PlanDecisionSupport() {
  return (
    <section id="decision-support" className="section-y scroll-mt-16 bg-ash/10 border-b border-charcoal/40" aria-labelledby="decision-support-heading">
      <div className="container-x max-w-[1040px]">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {planDecisionSupport.kicker}
          </p>
          <h2 id="decision-support-heading" className="t-h2 mt-4 text-balance">
            Not Sure Which Plan to <Accent>Choose</Accent>?
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[600px] text-silver-mist leading-relaxed">
            {planDecisionSupport.subhead}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {planDecisionSupport.options.map((opt, i) => (
            <Reveal key={opt.name} delay={i * 0.06} className="h-full">
              <article className="card card-hover h-full p-6 flex flex-col border-charcoal bg-ash/40">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-snow">{opt.name}</h3>
                  <span className="text-xs font-mono font-bold text-phosphor-green">{opt.price}</span>
                </div>
                <p className="mt-1 text-[11px] font-mono text-smoke">{opt.effective}</p>
                <p className="mt-3 text-xs text-silver-mist leading-relaxed flex-1">
                  {opt.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs text-silver-mist">
            <HelpCircle className="size-3.5 text-phosphor-green shrink-0" aria-hidden="true" />
            <span>Still have questions about pricing breakdown or duration economics?</span>
            <a href="/iptv-pricing" className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1">
              Read Our Complete IPTV Pricing Guide <ArrowRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
