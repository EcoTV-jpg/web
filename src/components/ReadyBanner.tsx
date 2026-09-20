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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GreenButton href="/iptv-free-trial">
              {readyBanner.ctaPrimary}
            </GreenButton>
            <a
              href="/iptv-subscription"
              className="inline-flex items-center justify-center rounded-full border border-charcoal bg-ash/40 px-6 py-3 text-xs sm:text-sm font-semibold text-silver-mist hover:text-snow hover:border-graphite transition-all"
            >
              {readyBanner.ctaSecondary} &rarr;
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-smoke">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-phosphor-green" aria-hidden="true" />
              24-Hour Evaluation Pass
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="size-3.5 text-phosphor-green" aria-hidden="true" />
              Prepaid — No Auto-Renewal
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="size-3.5 text-phosphor-green" aria-hidden="true" />
              5–15 Min Delivery
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-phosphor-green" aria-hidden="true" />
              14-Day Guarantee on Plans
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
