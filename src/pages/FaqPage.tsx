import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { HelpCircle, FileCode, Gauge } from "lucide-react";
import { siteConfig } from "../config/site";
import { faqs } from "../data/site";

export default function FaqPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "FAQ & Support", url: "/faq" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[900px]">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Page Header */}
          <Reveal>
            <h1 className="t-display text-balance">
              Frequently Asked <Accent>Questions</Accent>
            </h1>
            <p className="t-body-sm mt-4 max-w-[660px] text-silver-mist leading-relaxed">
              Find fast, accurate answers to common questions regarding Teleview IPTV subscriptions, activation, compatible devices, streaming requirements, and our 14-day money-back guarantee.
            </p>
          </Reveal>

          {/* Streaming Terminology & Key Definitions */}
          <Reveal delay={0.04} className="mt-12">
            <section aria-labelledby="definitions-heading">
              <div className="flex items-center gap-3">
                <FileCode className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 id="definitions-heading" className="t-heading-sm">
                  Streaming Terminology &amp; Key Technical Definitions
                </h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Understanding core IPTV protocols and standards helps you configure your devices for optimal stability and video fidelity:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-xl border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-[11px] text-phosphor-green">Protocol Definition</span>
                    <h3 className="text-base font-semibold text-snow mt-1">IPTV (Internet Protocol TV)</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                      Delivery of television content over IP networks (the internet) rather than through traditional terrestrial,
                      satellite broadcast, or closed-cable television formats.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-charcoal/60 text-[11px] text-smoke">
                    Enables on-demand viewing, multi-device access, and global channel routing.
                  </div>
                </article>

                <article className="rounded-xl border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-[11px] text-phosphor-green">API Authentication</span>
                    <h3 className="text-base font-semibold text-snow mt-1">Xtream Codes API</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                      A standardized client-server protocol used by modern IPTV applications. Instead of raw text files,
                      it connects via Server URL, Username, and Password to dynamically sync categories, live streams, and VOD.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-charcoal/60 text-[11px] text-smoke">
                    Top choice for TiviMate, IPTV Smarters Pro, and XCIPTV.
                  </div>
                </article>

                <article className="rounded-xl border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-[11px] text-phosphor-green">File Standard</span>
                    <h3 className="text-base font-semibold text-snow mt-1">M3U / M3U8 Playlist</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                      A plain-text playlist file format containing stream URLs and metadata tags (such as channel logo,
                      group category, and channel ID) used by web players, Smart TVs, and VLC Media Player.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-charcoal/60 text-[11px] text-smoke">
                    Standardized format supported universally across legacy and desktop media players.
                  </div>
                </article>

                <article className="rounded-xl border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-[11px] text-phosphor-green">Schedule Data</span>
                    <h3 className="text-base font-semibold text-snow mt-1">EPG (Electronic Program Guide)</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                      An interactive on-screen TV guide delivered via XMLTV data feeds. Displays current and upcoming show schedules,
                      episode synopses, and channel logos directly within your player interface.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-charcoal/60 text-[11px] text-smoke">
                    Teleview EPG synchronizes automatically every 24 hours.
                  </div>
                </article>

                <article className="rounded-xl border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-[11px] text-phosphor-green">Time-Shift Feature</span>
                    <h3 className="text-base font-semibold text-snow mt-1">Catch-Up TV</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                      A server-side recording feature allowing subscribers to replay previously aired live broadcasts for up to 7 days
                      directly from the EPG timeline without needing local DVR hardware or physical hard drives.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-charcoal/60 text-[11px] text-smoke">
                    Available on major sports, news, and entertainment networks.
                  </div>
                </article>

                <article className="rounded-xl border border-charcoal bg-ash/40 p-5 flex flex-col justify-between">
                  <div>
                    <span className="label-mono text-[11px] text-phosphor-green">Encoding Quality</span>
                    <h3 className="text-base font-semibold text-snow mt-1">CBR vs. VBR Encoding</h3>
                    <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                      Constant Bitrate (CBR) delivers a continuous, unvarying data rate, eliminating buffer dips during fast-motion
                      sports scenes. Variable Bitrate (VBR) fluctuates dynamically based on scene complexity.
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-charcoal/60 text-[11px] text-smoke">
                    Teleview streams high-priority sports channels using stable CBR feeds.
                  </div>
                </article>
              </div>
            </section>
          </Reveal>

          {/* Speed & Resolution Benchmark Table */}
          <Reveal delay={0.06} className="mt-14">
            <section aria-labelledby="speed-benchmark-heading" className="card p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Gauge className="size-6 text-phosphor-green shrink-0" aria-hidden="true" />
                <h2 id="speed-benchmark-heading" className="t-heading-sm">
                  Internet Speed &amp; Resolution Benchmarks for Buffer-Free Playback
                </h2>
              </div>
              <p className="t-body-sm mt-2 text-silver-mist">
                Review verified download bandwidth and latency targets required to sustain uninterrupted live broadcasts on Teleview:
              </p>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal bg-ash/60 text-snow">
                      <th scope="col" className="p-3.5 font-semibold">Video Resolution &amp; Frame Rate</th>
                      <th scope="col" className="p-3.5 font-semibold">Minimum Bandwidth</th>
                      <th scope="col" className="p-3.5 font-semibold">Recommended Bandwidth</th>
                      <th scope="col" className="p-3.5 font-semibold">Recommended Connection</th>
                      <th scope="col" className="p-3.5 font-semibold">Target Latency (Ping)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/60 text-silver-mist">
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Standard Definition (SD 480p)</th>
                      <td className="p-3.5 font-mono">5 Mbps</td>
                      <td className="p-3.5 font-mono text-phosphor-green">8 Mbps</td>
                      <td className="p-3.5">Standard Wi-Fi (2.4 GHz)</td>
                      <td className="p-3.5 font-mono">&lt; 80 ms</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">High Definition (HD 1080p @ 30 FPS)</th>
                      <td className="p-3.5 font-mono">10 Mbps</td>
                      <td className="p-3.5 font-mono text-phosphor-green">15 Mbps</td>
                      <td className="p-3.5">5 GHz Wi-Fi / Ethernet</td>
                      <td className="p-3.5 font-mono">&lt; 50 ms</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">Full HD Live Sports (1080p @ 60 FPS)</th>
                      <td className="p-3.5 font-mono">15 Mbps</td>
                      <td className="p-3.5 font-mono text-phosphor-green">25 Mbps</td>
                      <td className="p-3.5 text-snow">5 GHz Wi-Fi / Cat6 Ethernet</td>
                      <td className="p-3.5 font-mono text-phosphor-green">&lt; 35 ms</td>
                    </tr>
                    <tr className="hover:bg-ash/30 transition-colors">
                      <th scope="row" className="p-3.5 font-medium text-snow">4K Ultra HD (2160p HDR @ 60 FPS)</th>
                      <td className="p-3.5 font-mono">25 Mbps</td>
                      <td className="p-3.5 font-mono text-phosphor-green">35–50 Mbps</td>
                      <td className="p-3.5 text-snow">Wired Cat6 Ethernet</td>
                      <td className="p-3.5 font-mono text-phosphor-green">&lt; 25 ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-silver-mist border-t border-charcoal/60 pt-4">
                <span>Want to test your current home connection speed?</span>
                <a
                  href="https://fast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-phosphor-green hover:underline font-medium inline-flex items-center gap-1"
                >
                  Test your speed on Fast.com &rarr;
                </a>
              </div>
            </section>
          </Reveal>

          {/* Section Heading for FAQ List */}
          <div className="mt-14 flex items-center justify-between">
            <h2 className="t-heading-sm">Frequently Asked Questions</h2>
            <span className="text-xs font-mono text-smoke">{faqs.length} Answers Available</span>
          </div>

          {/* FAQ Accordion List */}
          <div className="mt-6 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.03}>
                <article className="card card-hover p-6 sm:p-7">
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className="mt-1 size-5 shrink-0 text-phosphor-green" />
                    <div className="flex-1">
                      <h3 className="t-card-title text-base sm:text-lg text-snow">{faq.question}</h3>
                      <p className="t-body-sm mt-2.5 text-silver-mist leading-relaxed text-xs sm:text-sm">{faq.answer}</p>
                      {faq.link && (
                        <div className="mt-3">
                          <a
                            href={faq.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-medium text-phosphor-green hover:underline"
                          >
                            {faq.link.text}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <Reveal className="mt-14 text-center">
            <div className="card p-8 bg-ash/30 border-phosphor-green/30">
              <h2 className="t-heading-sm">Still Have Questions?</h2>
              <p className="t-body-sm mt-2 max-w-[480px] mx-auto text-silver-mist">
                Our 24/7 technical customer support team is ready to help you with activation, device setup, or plan choices.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <GreenButton href={siteConfig.contact.emailHref}>Contact Support Email</GreenButton>
                <GhostButton href="/iptv-subscription">Compare All Plans</GhostButton>
                <GhostButton href="/setup">View Setup Guides</GhostButton>
                <GhostButton href="/devices">Supported Devices</GhostButton>
                <GhostButton href="/help-center">Help Center</GhostButton>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
