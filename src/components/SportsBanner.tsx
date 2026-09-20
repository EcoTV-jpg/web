import { Trophy, Tv2, Clock } from "lucide-react";
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
                  Live Sports in High Definition &amp; <Accent>50/60 FPS</Accent>
                </h2>
                <p className="t-body mt-4 text-silver-mist leading-relaxed text-sm sm:text-base">
                  Experience major domestic and international competitions with motion clarity on supported feeds. Connect through compatible players with stable 15–25+ Mbps broadband for fluid live action without blurring.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-charcoal bg-ash/50 p-4">
                    <div className="flex items-center gap-2 text-phosphor-green mb-1">
                      <Tv2 className="size-4" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">50/60 FPS Feeds</span>
                    </div>
                    <p className="text-xs text-silver-mist">Select live sports streams encoded at 50/60 FPS for fluid motion</p>
                  </div>

                  <div className="rounded-xl border border-charcoal bg-ash/50 p-4">
                    <div className="flex items-center gap-2 text-phosphor-green mb-1">
                      <Trophy className="size-4" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">Global Leagues</span>
                    </div>
                    <p className="text-xs text-silver-mist">Premier League, Champions League, NFL, NBA, NHL, F1, and UFC</p>
                  </div>

                  <div className="rounded-xl border border-charcoal bg-ash/50 p-4">
                    <div className="flex items-center gap-2 text-phosphor-green mb-1">
                      <Clock className="size-4" aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-wide">7-Day Schedule</span>
                    </div>
                    <p className="text-xs text-silver-mist">XMLTV electronic program guide for match kickoff times worldwide</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8 rounded-2xl border border-charcoal/60 bg-ash/40">
                <span className="text-xs font-semibold text-phosphor-green uppercase tracking-wider">Streaming Specifications</span>
                <div className="mt-3 space-y-2.5 text-xs text-silver-mist">
                  <div className="flex justify-between border-b border-charcoal/50 pb-2">
                    <span className="text-smoke">Video Resolution</span>
                    <span className="font-semibold text-snow">1080p &amp; 4K (Select Events)</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/50 pb-2">
                    <span className="text-smoke">Frame Rate</span>
                    <span className="font-semibold text-phosphor-green">50 / 60 FPS (Supported Feeds)</span>
                  </div>
                  <div className="flex justify-between border-b border-charcoal/50 pb-2">
                    <span className="text-smoke">Recommended Bandwidth</span>
                    <span className="font-semibold text-snow">15–25+ Mbps</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-smoke">Network Delivery</span>
                    <span className="font-semibold text-snow">Multi-CDN Edge Routing</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GreenButton href="/iptv-sports" className="w-full text-center py-2.5 text-xs">
                    Explore Sports Streaming Guide &rarr;
                  </GreenButton>
                  <a
                    href="#pricing"
                    className="text-center text-xs font-semibold text-silver-mist hover:text-snow hover:underline pt-1"
                  >
                    View All Subscription Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
