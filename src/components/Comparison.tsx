import { Check, X } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";

export default function Comparison() {
  return (
    <section id="comparison" className="section-y scroll-mt-16 bg-ash/30 border-y border-charcoal/40" aria-labelledby="comparison-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            Stream More. Pay Less
          </p>
          <h2 id="comparison-heading" className="t-h2 mt-4 text-balance">
            What Makes Our IPTV Subscription <Accent>Stand Out</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[620px] text-silver-mist leading-relaxed">
            Comparing cable and random IPTV sellers? Teleview is tuned for high-speed streaming and works on the devices you already use.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3 items-stretch max-w-[1100px] mx-auto">
          {/* 1. Traditional Cable */}
          <Reveal delay={0.06} className="h-full">
            <div className="card h-full p-6 sm:p-8 flex flex-col border-charcoal bg-ash/40">
              <div className="pb-4 border-b border-charcoal">
                <span className="text-xs uppercase tracking-wider text-smoke font-semibold">Legacy Option</span>
                <h3 className="text-lg font-bold text-snow mt-1">Traditional Cable</h3>
                <p className="text-xs text-silver-mist mt-1">Outdated equipment with restrictive contracts</p>
              </div>

              <ul className="mt-6 space-y-4 text-xs sm:text-[13px] flex-1">
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">No Portability:</strong> Locked to your living room box</span>
                </li>
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">Limited Choices:</strong> Expensive add-on channel tiers</span>
                </li>
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">More Expensive:</strong> $90 - $180/mo average bills</span>
                </li>
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">Single-Screen:</strong> Strict multi-room fees</span>
                </li>
              </ul>
            </div>
          </Reveal>

          {/* 2. Teleview (Highlighted) */}
          <Reveal delay={0.12} className="h-full">
            <div className="card relative h-full p-6 sm:p-8 flex flex-col border-phosphor-green/60 bg-gradient-to-b from-phosphor-green/10 via-ash/70 to-ash/90 shadow-[0_0_30px_-10px_rgba(62,207,142,0.25)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-phosphor-green px-3 py-1 text-[11px] font-bold text-obsidian uppercase tracking-wider shadow-sm">
                  Recommended Choice
                </span>
              </div>

              <div className="pb-4 border-b border-phosphor-green/30 pt-2">
                <span className="text-xs uppercase tracking-wider text-phosphor-green font-semibold">IPTV Subscription</span>
                <h3 className="text-xl font-extrabold text-snow mt-1">Teleview</h3>
                <p className="text-xs text-silver-mist mt-1">HD &amp; 4K streaming where available across supported devices</p>
              </div>

              <ul className="mt-6 space-y-4 text-xs sm:text-[13px] flex-1">
                <li className="flex items-start gap-2.5 text-snow">
                  <Check className="size-4 text-phosphor-green shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-phosphor-green">24/7 Customer Support:</strong> Responsive live assistance and step-by-step setup guides</span>
                </li>
                <li className="flex items-start gap-2.5 text-snow">
                  <Check className="size-4 text-phosphor-green shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-phosphor-green">Reliable Delivery:</strong> Multi-region streaming infrastructure designed for high stability</span>
                </li>
                <li className="flex items-start gap-2.5 text-snow">
                  <Check className="size-4 text-phosphor-green shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-phosphor-green">Flexible Packages:</strong> 1 to 4 connection plans with 14-day refund guarantee</span>
                </li>
                <li className="flex items-start gap-2.5 text-snow">
                  <Check className="size-4 text-phosphor-green shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-phosphor-green">Broad Compatibility:</strong> Firestick, Android TV, Apple TV, Smart TVs and PC/Mac</span>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t border-phosphor-green/20">
                <GreenButton href="#pricing" className="w-full text-center">
                  CHOOSE A PLAN
                </GreenButton>
              </div>
            </div>
          </Reveal>

          {/* 3. Other IPTV Providers */}
          <Reveal delay={0.18} className="h-full">
            <div className="card h-full p-6 sm:p-8 flex flex-col border-charcoal bg-ash/40">
              <div className="pb-4 border-b border-charcoal">
                <span className="text-xs uppercase tracking-wider text-smoke font-semibold">Unverified Resellers</span>
                <h3 className="text-lg font-bold text-snow mt-1">Other IPTV Providers</h3>
                <p className="text-xs text-silver-mist mt-1">Unverified providers or low-cost resellers</p>
              </div>

              <ul className="mt-6 space-y-4 text-xs sm:text-[13px] flex-1">
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">Variable Support:</strong> Support channels may be inconsistent or unresponsive</span>
                </li>
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">Unclear Infrastructure:</strong> Server capacity and streaming bandwidth may vary during major events</span>
                </li>
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">Uncertain Continuity:</strong> Channel line-ups and streams may experience interruptions</span>
                </li>
                <li className="flex items-start gap-2.5 text-smoke">
                  <X className="size-4 text-rose-400 shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span><strong className="text-snow">Inconsistent Policies:</strong> Return and refund terms are often undocumented</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Contextual Bridge to Best IPTV Services Buying Guide */}
        <Reveal delay={0.24} className="mt-10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-charcoal bg-ash/40 px-6 py-3.5 text-xs sm:text-sm">
            <span className="text-silver-mist">
              Evaluating streaming providers across the market?
            </span>
            <a
              href="/best-iptv"
              className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
            >
              Read Our Best IPTV Services Buying Guide &rarr;
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
