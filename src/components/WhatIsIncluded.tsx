import { Tv, Film, Trophy, Calendar, Key, Monitor, ShieldCheck, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { whatIsIncluded } from "../data/site";

const icons = [Tv, Film, Monitor, Trophy, Calendar, Key, Monitor, ShieldCheck];

export default function WhatIsIncluded() {
  return (
    <section id="included" className="section-y scroll-mt-16" aria-labelledby="included-heading">
      <div className="container-x">
        <Reveal className="text-center max-w-[720px] mx-auto">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {whatIsIncluded.kicker}
          </p>
          <h2 id="included-heading" className="t-h2 mt-4 text-balance">
            What's Included with <Accent>Teleview</Accent>?
          </h2>
          <p className="t-body-sm mx-auto mt-4 text-silver-mist leading-relaxed">
            {whatIsIncluded.subhead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatIsIncluded.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 0.05} className="h-full">
                <article className="card card-hover h-full p-6 sm:p-7 flex flex-col border-charcoal bg-ash/40">
                  <div className="size-10 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green mb-4">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-snow">{item.title}</h3>
                  <p className="mt-2 text-xs sm:text-[13px] text-silver-mist leading-relaxed flex-1">
                    {item.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a href="/iptv-channels" className="text-phosphor-green hover:underline inline-flex items-center gap-1">
              Browse Channel Catalog <ArrowRight className="size-3" aria-hidden="true" />
            </a>
            <span className="text-smoke" aria-hidden="true">&bull;</span>
            <a href="/iptv-sports" className="text-phosphor-green hover:underline inline-flex items-center gap-1">
              50/60 FPS Sports Information <ArrowRight className="size-3" aria-hidden="true" />
            </a>
            <span className="text-smoke" aria-hidden="true">&bull;</span>
            <a href="/iptv-movies" className="text-phosphor-green hover:underline inline-flex items-center gap-1">
              VOD Library Guide <ArrowRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
