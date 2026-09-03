import Reveal from "./Reveal";
import { Accent, GreenButton, WireDeco } from "./ui";
import { highlights, highlightsSection } from "../data/site";

export default function Highlights() {
  return (
    <section id="highlights" className="section-y scroll-mt-16" aria-labelledby="highlights-heading">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
        {/* Copy */}
        <Reveal>
          <div className="max-w-[460px]">
            <h2 id="highlights-heading" className="t-h2 text-balance">
              Everything You Want to Watch, in <Accent>One IPTV Service</Accent>
            </h2>
            <p className="t-body-sm mt-5 text-silver-mist leading-relaxed">{highlightsSection.copy}</p>
            <div className="mt-7">
              <GreenButton href="#pricing">{highlightsSection.cta}</GreenButton>
            </div>
          </div>
        </Reveal>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {highlights.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 0.07} className="h-full">
                <article className="card card-hover h-full overflow-hidden p-6">
                  <Icon className="size-6 text-phosphor-green" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="t-card-title mt-5 text-base sm:text-lg text-snow">{feature.title}</h3>
                  <p className="t-body-sm mt-2.5 max-w-[240px] text-silver-mist text-xs sm:text-sm leading-relaxed">{feature.copy}</p>
                  <WireDeco />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
