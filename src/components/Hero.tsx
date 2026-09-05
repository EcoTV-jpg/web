import { ShieldCheck, Zap, Headphones, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GhostButton, GreenButton } from "./ui";
import { hero } from "../data/site";

export default function Hero() {
  return (
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20" aria-labelledby="hero-heading">
      <div className="container-x text-center">
        {/* Eyebrow Trust Badge */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/40 bg-phosphor-green/10 px-3 py-1 text-xs font-semibold text-phosphor-green">
              <span className="size-1.5 rounded-full bg-phosphor-green animate-pulse" aria-hidden="true" />
              24h Free Trial Available
            </span>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal bg-ash px-4 py-1 text-xs font-normal text-silver-mist transition-colors duration-200 hover:border-graphite hover:text-snow"
            >
              <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
              {hero.kicker}
              <ChevronRight className="size-3.5 text-smoke" aria-hidden="true" />
            </a>
          </div>
        </Reveal>


        {/* Main H1 Title */}
        <Reveal delay={0.06}>
          <h1 id="hero-heading" className="t-display mx-auto mt-8 max-w-[880px] text-balance">
            Best <Accent>IPTV Service</Accent> in 2026
          </h1>
        </Reveal>

        {/* Subhead & Description */}
        <Reveal delay={0.12}>
          <p className="t-body mx-auto mt-6 max-w-[640px] text-silver-mist font-medium">
            {hero.subhead}
          </p>
          <p className="t-body-sm mx-auto mt-3 max-w-[600px] text-smoke">
            {hero.copy}
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GreenButton href="#pricing">{hero.ctaPrimary}</GreenButton>
            <GhostButton href="#pricing">{hero.ctaSecondary}</GhostButton>
          </div>
        </Reveal>

        {/* 3 Core Trust Badges */}
        <Reveal delay={0.24}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-silver-mist">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-phosphor-green" aria-hidden="true" />
              Instant Activation
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="size-4 text-phosphor-green" aria-hidden="true" />
              Premium Service
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Headphones className="size-4 text-phosphor-green" aria-hidden="true" />
              Reliable Streaming
            </span>
          </div>
        </Reveal>



        {/* Hero Media */}
        <Reveal delay={0.34} className="mx-auto mt-14 max-w-[880px] sm:mt-16">
          <div className="card overflow-hidden p-2">
            <div className="overflow-hidden rounded-lg">
              <picture>
                <source srcSet="/images/teleview-fans.webp" type="image/webp" />
                <img
                  src="/images/teleview-fans.jpg"
                  alt="Sports fans celebrating with snacks while watching Teleview"
                  className="media-mono w-full"
                  width={900}
                  height={600}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </Reveal>

        {/* Stats Counter Bar */}
        <Reveal delay={0.4} className="mx-auto mt-12 max-w-[880px]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 rounded-2xl border border-charcoal bg-ash/50 p-6 shadow-lg backdrop-blur-sm">
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-snow">25,000+</div>
              <p className="mt-1 text-xs font-medium text-silver-mist uppercase tracking-wider">FHD Channels</p>
            </div>
            <div className="text-center p-2 border-l border-charcoal/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-phosphor-green">5,000+</div>
              <p className="mt-1 text-xs font-medium text-silver-mist uppercase tracking-wider">Active Users</p>
            </div>
            <div className="text-center p-2 border-t sm:border-t-0 sm:border-l border-charcoal/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-snow">120,000+</div>
              <p className="mt-1 text-xs font-medium text-silver-mist uppercase tracking-wider">Movies / Series</p>
            </div>
            <div className="text-center p-2 border-t sm:border-t-0 sm:border-l border-charcoal/50">
              <div className="text-2xl sm:text-3xl font-extrabold text-phosphor-green">1,000+</div>
              <p className="mt-1 text-xs font-medium text-silver-mist uppercase tracking-wider">Subscribers</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
