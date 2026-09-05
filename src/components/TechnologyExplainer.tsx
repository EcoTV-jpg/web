import { BookOpen, Cpu, Globe, Server } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";

export default function TechnologyExplainer() {
  return (
    <section id="technology" className="section-y scroll-mt-16" aria-labelledby="tech-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            Technology
          </p>
          <h2 id="tech-heading" className="t-h2 mt-4 text-balance">
            IPTV Service <Accent>Explained</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[620px] text-silver-mist leading-relaxed">
            Understanding how our advanced IPTV delivers premium entertainment to households worldwide.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <Reveal delay={0.06} className="h-full">
            <div className="card card-hover h-full p-6 sm:p-8 flex flex-col">
              <div className="size-10 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green">
                <Globe className="size-5" aria-hidden="true" />
              </div>
              <h3 className="t-card-title mt-5 text-lg font-bold text-snow">What is IPTV?</h3>
              <p className="t-body-sm mt-3 text-silver-mist leading-relaxed text-xs sm:text-sm flex-1">
                IPTV (Internet Protocol Television) represents the future of entertainment delivery. Unlike traditional cable or satellite TV, our advanced IPTV service transmits high-quality video content through secure internet protocols, providing superior streaming performance and flexibility.{" "}
                <a href="/what-is-iptv" className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1">
                  Read architecture guide &rarr;
                </a>
              </p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.12} className="h-full">
            <div className="card card-hover h-full p-6 sm:p-8 flex flex-col">
              <div className="size-10 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green">
                <Server className="size-5" aria-hidden="true" />
              </div>
              <h3 className="t-card-title mt-5 text-lg font-bold text-snow">How Our IPTV Subscription Works</h3>
              <p className="t-body-sm mt-3 text-silver-mist leading-relaxed text-xs sm:text-sm flex-1">
                Our IPTV technology converts television signals into digital data packets, delivered through optimized streaming servers worldwide. This ensures fast channel switching, high-definition and 4K quality, and smooth streaming—providing an entertainment experience that surpasses traditional broadcasting methods.
              </p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.18} className="h-full">
            <div className="card card-hover h-full p-6 sm:p-8 flex flex-col">
              <div className="size-10 rounded-xl bg-phosphor-green/10 border border-phosphor-green/30 flex items-center justify-center text-phosphor-green">
                <Cpu className="size-5" aria-hidden="true" />
              </div>
              <h3 className="t-card-title mt-5 text-lg font-bold text-snow">Why Choose Our IPTV Package?</h3>
              <p className="t-body-sm mt-3 text-silver-mist leading-relaxed text-xs sm:text-sm flex-1">
                Our IPTV technology delivers high-availability streaming infrastructure, anti-freeze edge routing, and 4K Ultra HD quality. It offers instant channel switching, multi-device support, and runs on dedicated servers for reliable playback.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tutorial / Setup CTA */}
        <Reveal delay={0.24} className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <GreenButton href="/setup" className="inline-flex items-center gap-2">
            <BookOpen className="size-4" aria-hidden="true" />
            Read Complete Setup Guide
          </GreenButton>
          <a
            href="/what-is-iptv"
            className="text-xs font-semibold text-silver-mist hover:text-snow hover:underline inline-flex items-center gap-1.5"
          >
            Learn More: What Is IPTV? &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
