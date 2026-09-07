import { MapPin, Activity } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { coastToCoast } from "../data/site";

export default function CoastToCoast() {
  return (
    <section id="coverage-cities" className="section-y scroll-mt-16 bg-ash/20 border-y border-charcoal/40" aria-labelledby="coverage-cities-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {coastToCoast.kicker}
          </p>
          <h2 id="coverage-cities-heading" className="t-h2 mt-4 text-balance">
            Teleview <Accent>Global Streaming Coverage</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[680px] text-silver-mist leading-relaxed">
            {coastToCoast.copy}
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-12">
          <div className="rounded-2xl border border-charcoal bg-ash/40 p-6 sm:p-8 max-w-[1020px] mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-charcoal text-xs text-smoke">
              <span className="flex items-center gap-2 text-snow font-semibold">
                <MapPin className="size-4 text-phosphor-green" aria-hidden="true" />
                50+ Worldwide CDN Edge Server Hubs
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-phosphor-green/10 border border-phosphor-green/30 px-3 py-1 text-phosphor-green font-medium">
                <Activity className="size-3.5 animate-pulse" aria-hidden="true" />
                Anti-Freeze Edge Network Routing
              </span>
            </div>

            {/* City Cloud Badges */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5 justify-center">
              {coastToCoast.cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-charcoal/80 bg-ink-800/80 px-3 py-1.5 text-xs text-silver-mist font-medium hover:border-phosphor-green/40 hover:text-snow transition-colors"
                >
                  {city}
                </span>
              ))}
              <span className="rounded-full border border-phosphor-green/40 bg-phosphor-green/10 px-3 py-1.5 text-xs text-phosphor-green font-semibold">
                + Worldwide
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
