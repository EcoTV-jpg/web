import Reveal from "./Reveal";
import { Accent } from "./ui";
import { coverage, whatIsIptv, whyChoose, devicesSection, includedFeatures } from "../data/site";
import { Check, Tv, HelpCircle } from "lucide-react";

export default function Coverage() {
  return (
    <section id="coverage" className="section-y scroll-mt-16" aria-labelledby="coverage-heading">
      <div className="container-x space-y-20 sm:space-y-24">
        {/* 1. What Is an IPTV Subscription? */}
        <Reveal>
          <div className="card p-8 sm:p-10 border-phosphor-green/30 bg-ash/40">
            <div className="flex items-start gap-4">
              <HelpCircle className="size-6 text-phosphor-green shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="t-h2 text-xl sm:text-2xl text-snow">{whatIsIptv.heading}</h2>
                <p className="t-body-sm mt-3 text-silver-mist leading-relaxed">{whatIsIptv.copy}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Why Choose Teleview? */}
        <div>
          <Reveal className="text-center">
            <h2 className="t-h2 text-balance">
              Why Choose <Accent>Teleview</Accent>?
            </h2>
            <p className="t-body-sm mx-auto mt-4 max-w-[620px] text-silver-mist leading-relaxed">
              {whyChoose.subhead}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.items.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.05} className="h-full">
                  <article className="card card-hover h-full p-6 sm:p-7 flex flex-col">
                    <Icon className="size-6 text-phosphor-green" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="t-card-title mt-4 text-base text-snow">{item.title}</h3>
                    <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm leading-relaxed flex-1">{item.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* 3. Watch on Your Favorite Devices & Entertainment From Around the World */}
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
                    className="media-mono w-full"
                    width={648}
                    height={432}
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
              <h2 id="coverage-heading" className="t-h2 text-balance">
                Entertainment From <Accent>Around the World</Accent>
              </h2>
              <p className="t-body-sm mt-4 text-silver-mist leading-relaxed">{coverage.copy}</p>
              <div className="mt-4 rounded-lg border border-charcoal bg-ash/50 p-4 text-xs font-medium text-snow leading-relaxed">
                {coverage.regions}
              </div>
              <p className="t-caption mt-3 text-xs text-smoke">{coverage.note}</p>
            </div>
          </Reveal>
        </div>

        {/* 4. Watch on Your Favorite Devices */}
        <Reveal>
          <div className="card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Tv className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
              <h2 className="t-h2 text-xl sm:text-2xl text-snow">{devicesSection.heading}</h2>
            </div>
            <p className="t-body-sm mt-3 text-silver-mist">{devicesSection.subhead}</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {devicesSection.devices.map((device) => (
                <span
                  key={device}
                  className="rounded-full border border-charcoal bg-ash/60 px-3.5 py-1.5 text-xs text-snow font-medium"
                >
                  {device}
                </span>
              ))}
            </div>

            <p className="t-caption mt-6 text-xs text-smoke border-t border-charcoal pt-4">
              {devicesSection.note}
            </p>
          </div>
        </Reveal>

        {/* 5. What's Included With Your Teleview Subscription? */}
        <Reveal>
          <div className="card p-8 sm:p-10 bg-ash/30 border-charcoal">
            <h2 className="t-h2 text-xl sm:text-2xl text-snow">{includedFeatures.heading}</h2>
            <p className="t-body-sm mt-2 text-silver-mist">{includedFeatures.subhead}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {includedFeatures.items.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-snow font-medium">
                  <Check className="size-4 text-phosphor-green shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <p className="t-caption mt-6 text-xs text-smoke border-t border-charcoal pt-4">
              {includedFeatures.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
