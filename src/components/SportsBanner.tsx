import { Trophy, Tv2, Clock, Flame } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";
import { sportsSection } from "../data/site";

export default function SportsBanner() {
  return (
    <section id="sports" className="section-y scroll-mt-16 relative overflow-hidden" aria-labelledby="sports-heading">
      <div className="container-x">
        <Reveal>
          <div className="relative rounded-3xl border border-phosphor-green/30 bg-gradient-to-br from-ash/90 via-ash/60 to-obsidian p-8 sm:p-12 shadow-[0_0_50px_-20px_rgba(62,207,142,0.18)]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-phosphor-green/15 border border-phosphor-green/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-phosphor-green">
                <span className="size-2 rounded-full bg-rose-500 animate-ping" aria-hidden="true" />
                {sportsSection.kicker}
              </span>
              <span className="rounded-md border border-charcoal bg-black/40 px-3 py-1 text-xs font-semibold text-silver-mist">
                NHL · NFL · NBA · MLB · Premier League · UFC · F1
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <h2 id="sports-heading" className="t-h2 text-balance text-2xl sm:text-3xl lg:text-4xl text-snow font-extrabold">
                  Never Miss Your <Accent>Favorite Game</Accent> Again
                </h2>
                <p className="t-body mt-4 text-silver-mist leading-relaxed text-sm sm:text-base">
                  {sportsSection.copy}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-charcoal bg-ash/50 p-4">
                    <div className="flex items-center gap-2 text-phosphor-green mb-1">
                      <Tv2 className="size-4" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">Live HD Streams</span>
                    </div>
                    <p className="text-xs text-silver-mist">Crystal clear 4K quality for every game</p>
                  </div>

                  <div className="rounded-xl border border-charcoal bg-ash/50 p-4">
                    <div className="flex items-center gap-2 text-phosphor-green mb-1">
                      <Clock className="size-4" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">24/7 Coverage</span>
                    </div>
                    <p className="text-xs text-silver-mist">Around the clock sports entertainment</p>
                  </div>

                  <div className="rounded-xl border border-charcoal bg-ash/50 p-4">
                    <div className="flex items-center gap-2 text-phosphor-green mb-1">
                      <Trophy className="size-4" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">All Major Leagues</span>
                    </div>
                    <p className="text-xs text-silver-mist">NHL, NFL, NBA, MLB, and more</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl border border-charcoal/60 bg-ash/40 text-center">
                <span className="text-xs font-semibold text-smoke uppercase tracking-wider">Start Watching Today</span>
                <div className="mt-2 text-3xl sm:text-4xl font-extrabold text-snow">
                  {sportsSection.priceText}
                </div>
                <p className="mt-1 text-xs text-silver-mist">Instant activation · Zero contract</p>
                <div className="mt-6 w-full">
                  <GreenButton href="#pricing" className="w-full text-center">
                    {sportsSection.ctaText}
                  </GreenButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
