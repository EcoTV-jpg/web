import { Globe, Tv, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";
import { channelCategories, channelPreview } from "../data/site";

export default function EntertainmentSection() {
  return (
    <section id="entertainment" className="section-y scroll-mt-20 bg-ash/10 border-b border-charcoal/40" aria-labelledby="entertainment-heading">
      <div className="container-x">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left: World Map Graphic */}
          <Reveal className="order-2 lg:order-1">
            <div className="card overflow-hidden p-2">
              <div className="overflow-hidden rounded-lg">
                <picture>
                  <source srcSet="/images/teleview-map.webp" type="image/webp" />
                  <img
                    src="/images/teleview-map.jpg"
                    alt="World map showing Teleview global entertainment and channel availability"
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

          {/* Right: Content Copy */}
          <Reveal className="order-1 lg:order-2" delay={0.08}>
            <div>
              <p className="label-mono flex items-center gap-2">
                <Globe className="size-3.5 text-phosphor-green" aria-hidden="true" />
                {channelPreview.kicker}
              </p>
              <h2 id="entertainment-heading" className="t-h2 mt-3 text-balance">
                Worldwide Entertainment for the <Accent>Whole Household</Accent>
              </h2>
              <p className="t-body-sm mt-4 text-silver-mist leading-relaxed">
                Teleview consolidates linear television networks, on-demand cinema, television series, and family entertainment across global regions into organized, easy-to-browse categories.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {channelCategories.map((cat) => (
                  <div key={cat.name} className="rounded-xl border border-charcoal bg-ash/40 p-3.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-snow">{cat.name}</h3>
                      <span className="text-[11px] font-mono text-phosphor-green font-semibold">{cat.count}</span>
                    </div>
                    <p className="mt-1 text-[11px] text-smoke leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <GreenButton href="/iptv-channels" className="py-2.5 px-5 text-xs">
                  Browse Full Channel Catalog
                </GreenButton>
                <a
                  href="/what-is-iptv"
                  className="text-xs font-semibold text-silver-mist hover:text-snow hover:underline inline-flex items-center gap-1 min-h-[44px] sm:min-h-0 py-2 sm:py-0"
                >
                  How IPTV Technology Works <ArrowRight className="size-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
