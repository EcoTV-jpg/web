import { BadgeCheck, Headphones, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { GreenButton } from "./ui";
import { guarantee, setupHelp, site } from "../data/site";

function GuaranteeBadge() {
  return (
    <div className="shrink-0" aria-hidden="true">
      <div className="grid size-20 place-items-center rounded-full border-2 border-charcoal sm:size-24 bg-ash/40">
        <BadgeCheck className="size-10 text-phosphor-green" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function Guarantee() {
  return (
    <section id="guarantee" className="section-y scroll-mt-16" aria-labelledby="guarantee-heading">
      <div className="container-x grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Guarantee block */}
        <Reveal>
          <div className="card p-8 sm:p-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                <GuaranteeBadge />
                <div>
                  <p className="label-mono text-phosphor-green">Risk-Free Streaming</p>
                  <h2 id="guarantee-heading" className="t-h2 mt-2 text-xl sm:text-2xl text-snow">
                    {guarantee.heading}
                  </h2>
                </div>
              </div>
              <p className="t-body-sm mt-6 text-silver-mist leading-relaxed">{guarantee.copy}</p>
            </div>

            <div className="mt-8 border-t border-charcoal pt-6 space-y-2.5">
              {guarantee.badges.map((b) => (
                <div key={b} className="flex items-center gap-2 text-xs sm:text-sm text-snow font-medium">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Support & Setup help card */}
        <Reveal delay={0.1}>
          <article className="card card-hover p-8 sm:p-10 h-full flex flex-col">
            <p className="label-mono flex items-center gap-2 text-smoke">
              <Headphones className="size-4 text-phosphor-green" aria-hidden="true" />
              Customer Support
            </p>
            <h3 className="t-heading-sm mt-3 text-snow text-lg sm:text-xl">
              {setupHelp.heading}
            </h3>
            <p className="t-body-sm mt-3 text-silver-mist text-xs sm:text-sm leading-relaxed">{setupHelp.copy}</p>

            <div className="mt-4 rounded-lg border border-charcoal bg-ash/40 p-4 text-xs text-silver-mist">
              <p className="font-medium text-snow mb-2">{setupHelp.prompt}</p>
              <ul className="space-y-1.5 list-disc list-inside text-smoke">
                {setupHelp.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-2 text-phosphor-green font-medium">{setupHelp.conclusion}</p>
            </div>

            <div className="mt-6 pt-2">
              <GreenButton href={site.emailHref}>{setupHelp.cta}</GreenButton>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
