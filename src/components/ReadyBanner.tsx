import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";
import { readyBanner } from "../data/site";
import { ShieldCheck, Zap, Headphones } from "lucide-react";

export default function ReadyBanner() {
  return (
    <section className="section-y border-t border-charcoal/60 bg-ash/20" aria-labelledby="ready-heading">
      <div className="container-x text-center max-w-[760px]">
        <Reveal>
          <p className="label-mono flex items-center justify-center gap-2 mb-3">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            Get Started
          </p>
          <h2 id="ready-heading" className="t-h2 text-balance">
            See How Teleview Works on Your <Accent>Setup</Accent>
          </h2>
          <p className="t-body mx-auto mt-4 text-silver-mist">
            {readyBanner.subhead}
          </p>
          <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3">
            <GreenButton href="/iptv-free-trial">
              {readyBanner.ctaPrimary}
            </GreenButton>
            <a
              href="/iptv-subscription"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-charcoal bg-ash/40 px-6 py-2.5 text-xs sm:text-sm font-semibold text-silver-mist hover:text-snow hover:border-graphite transition-all"
            >
              {readyBanner.ctaSecondary} &rarr;
            </a>
          </div>
          <p className="mt-6 text-xs text-smoke">
            Prepaid plans with zero auto-renewal &bull; Backed by our 14-day technical money-back guarantee
          </p>
        </Reveal>
      </div>
    </section>
  );
}
