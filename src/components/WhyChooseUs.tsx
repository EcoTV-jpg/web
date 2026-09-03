import { ShieldCheck, Sparkles, Layers, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { whyChooseUs } from "../data/site";

const icons = [Sparkles, ShieldCheck, Layers, Zap];

export default function WhyChooseUs() {
  return (
    <section id="why-choose" className="section-y scroll-mt-16" aria-labelledby="why-choose-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {whyChooseUs.kicker}
          </p>
          <h2 id="why-choose-heading" className="t-h2 mt-4 text-balance">
            Why Choose <Accent>Teleview</Accent>?
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[620px] text-silver-mist leading-relaxed">
            {whyChooseUs.subhead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {whyChooseUs.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 0.08} className="h-full">
                <article className="card card-hover h-full p-7 sm:p-8 flex flex-col border-charcoal bg-ash/40">
                  <div className="size-11 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green mb-5">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-snow">{item.title}</h3>
                  <p className="mt-3 text-silver-mist text-xs sm:text-sm leading-relaxed flex-1">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
