import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";
import { readyBanner } from "../data/site";
import { ShieldCheck, Zap, Headphones } from "lucide-react";

export default function ReadyBanner() {
  return (
    <section className="section-y border-t border-charcoal bg-ash/20" aria-labelledby="ready-heading">
      <div className="container-x text-center max-w-[760px]">
        <Reveal>
          <h2 id="ready-heading" className="t-h2 text-balance">
            Ready to <Accent>Start Streaming</Accent>?
          </h2>
          <p className="t-body mx-auto mt-4 text-silver-mist">
            {readyBanner.subhead}
          </p>
          <div className="mt-8">
            <GreenButton href="#pricing">{readyBanner.cta}</GreenButton>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-smoke">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-phosphor-green" aria-hidden="true" />
              14-Day Money-Back Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="size-3.5 text-phosphor-green" aria-hidden="true" />
              Fast Activation
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Headphones className="size-3.5 text-phosphor-green" aria-hidden="true" />
              Customer Support
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
