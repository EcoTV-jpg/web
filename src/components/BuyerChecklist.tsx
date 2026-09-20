import { Check, HelpCircle, ArrowRight, ShieldCheck, FileText, Lock, Headphones } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { buyerChecklist, trustAndTransparency } from "../data/site";

const trustIcons = [ShieldCheck, FileText, Lock, Headphones];

export default function BuyerChecklist() {
  return (
    <section id="buyer-checklist" className="section-y scroll-mt-20 bg-ash/10 border-y border-charcoal/40" aria-labelledby="checklist-heading">
      <div className="container-x">
        {/* Part 1: Buyer Checklist */}
        <Reveal className="text-center max-w-[760px] mx-auto">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {buyerChecklist.kicker}
          </p>
          <h2 id="checklist-heading" className="t-h2 mt-4 text-balance">
            What to Check Before Choosing an <Accent>IPTV Service</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 text-silver-mist leading-relaxed">
            {buyerChecklist.subhead}
          </p>
        </Reveal>

        {/* 8-Point Checklist Table / Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-[1140px] mx-auto">
          {buyerChecklist.criteria.map((item, i) => (
            <Reveal key={item.criterion} delay={i * 0.04} className="h-full">
              <article className="card card-hover h-full p-4 sm:p-5 flex flex-col border-charcoal bg-ash/40">
                <div className="flex items-center gap-2 pb-3 border-b border-charcoal">
                  <HelpCircle className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
                  <h3 className="text-xs sm:text-sm font-bold text-snow">{item.criterion}</h3>
                </div>

                <div className="mt-3 space-y-2.5 flex-1 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-smoke font-medium block">Key Question</span>
                    <p className="text-silver-mist mt-0.5 leading-relaxed text-[11px] sm:text-xs">{item.question}</p>
                  </div>
                  <div className="pt-2 border-t border-charcoal/40">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-phosphor-green block font-semibold">Teleview Specification</span>
                    <p className="text-snow mt-0.5 font-medium leading-relaxed text-[11px] sm:text-xs">{item.teleview}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Part 2: Trust & Policy Cards */}
        <div className="mt-12 pt-10 border-t border-charcoal/60 max-w-[1140px] mx-auto">
          <Reveal className="text-center mb-8 max-w-[640px] mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-snow">
              {trustAndTransparency.heading}
            </h3>
            <p className="t-body-sm mt-2 text-silver-mist">
              {trustAndTransparency.subhead}
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustAndTransparency.cards.map((card, idx) => {
              const Icon = trustIcons[idx % trustIcons.length];
              return (
                <Reveal key={card.title} delay={idx * 0.06} className="h-full">
                  <article className="card h-full p-5 sm:p-6 flex flex-col justify-between border-charcoal bg-ash/30">
                    <div>
                      <div className="size-9 rounded-lg bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green mb-4">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </div>
                      <h4 className="text-sm font-bold text-snow">{card.title}</h4>
                      <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-charcoal/40">
                      <a
                        href={card.href}
                        className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1 min-h-[44px] sm:min-h-0 py-2 sm:py-0"
                      >
                        {card.linkText} <ArrowRight className="size-3" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
