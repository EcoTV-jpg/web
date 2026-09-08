import Reveal from "./Reveal";
import { Accent } from "./ui";
import { coverage, whatIsIptv, includedFeatures } from "../data/site";
import { Check, HelpCircle, Globe } from "lucide-react";

export default function Coverage() {
  return (
    <section id="coverage" className="section-y scroll-mt-16" aria-labelledby="coverage-heading">
      <div className="container-x space-y-16 sm:space-y-20">
        {/* 1. What Is an IPTV Subscription? */}
        <Reveal>
          <div className="card p-8 sm:p-10 border-phosphor-green/30 bg-ash/40">
            <div className="flex items-start gap-4">
              <HelpCircle className="size-6 text-phosphor-green shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-snow">{whatIsIptv.heading}</h3>
                <p className="t-body-sm mt-3 text-silver-mist leading-relaxed">{whatIsIptv.copy}</p>
                <div className="mt-4">
                  <a
                    href="/what-is-iptv"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-phosphor-green hover:underline"
                  >
                    Learn more about how IPTV streaming technology works &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Global Coverage & Regional Lineups */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Map Image */}
          <Reveal className="order-2 lg:order-1">
            <div className="card overflow-hidden p-2">
              <div className="overflow-hidden rounded-lg">
                <picture>
                  <source srcSet="/images/teleview-map.webp" type="image/webp" />
                  <img
                    src="/images/teleview-map.jpg"
                    alt="Dotted world map showing Teleview coverage across countries"
                    className="media-mono w-full aspect-[1448/1086]"
                    width={1448}
                    height={1086}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </Reveal>

          {/* Coverage Text */}
          <Reveal className="order-1 lg:order-2" delay={0.08}>
            <div>
              <p className="label-mono flex items-center gap-2">
                <Globe className="size-3.5 text-phosphor-green" aria-hidden="true" />
                Worldwide Channel Availability
              </p>
              <h2 id="coverage-heading" className="t-h2 mt-3 text-balance">
                Entertainment From <Accent>Around the World</Accent>
              </h2>
              <p className="t-body-sm mt-4 text-silver-mist leading-relaxed">{coverage.copy}</p>
              <div className="mt-4 rounded-lg border border-charcoal bg-ash/50 p-4 text-xs font-medium text-snow leading-relaxed">
                {coverage.regions}
              </div>
              <p className="t-caption mt-3 text-xs text-smoke">{coverage.note}</p>
              <div className="mt-5">
                <a
                  href="/iptv-channels"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-phosphor-green hover:underline"
                >
                  Browse our full international channel list &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 3. What's Included With Your Teleview Subscription? */}
        <Reveal>
          <div className="card p-8 sm:p-10 bg-ash/30 border-charcoal">
            <h3 className="t-card-title text-xl sm:text-2xl font-bold text-snow">{includedFeatures.heading}</h3>
            <p className="t-body-sm mt-2 text-silver-mist">{includedFeatures.subhead}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {includedFeatures.items.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-snow font-medium">
                  <Check className="size-4 text-phosphor-green shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-charcoal flex flex-wrap items-center justify-between gap-3">
              <p className="t-caption text-xs text-smoke">
                {includedFeatures.note}
              </p>
              <a
                href="#pricing"
                className="text-xs sm:text-sm font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1"
              >
                View Subscription Plans &rarr;
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
