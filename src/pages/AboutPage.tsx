import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton, GhostButton } from "../components/ui";
import { site } from "../data/site";
import {
  Info,
  Shield,
  Tv,
  Smartphone,
  FileText,
  HelpCircle,
  MessageCircle,
  Mail,
  CheckCircle2,
  Globe,
  Settings,
  BookOpen,
} from "lucide-react";

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About Teleview", url: "/about" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[960px]">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero */}
          <Reveal className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/20 bg-phosphor-green/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-phosphor-green">
              <Info className="size-3.5" aria-hidden="true" />
              <span>Company & Service Information</span>
            </div>

            <h1 className="t-h1 mt-4 text-balance">
              About <Accent>Teleview</Accent>
            </h1>

            <p className="t-body mt-3 max-w-[720px] text-silver-mist">
              Teleview is an IPTV subscription service operated by Teleview Media. We provide access to live television and on-demand entertainment through compatible devices and third-party player applications. This page explains what the service provides, how we approach clarity, compatibility, and customer support, and where you can independently verify pricing, refund, and legal information.
            </p>
          </Reveal>

          {/* What Teleview does */}
          <Reveal className="mb-10" delay={0.05}>
            <section className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <Tv className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">What Teleview does</h2>
              </div>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-silver-mist">
                <p>
                  Teleview provisions IPTV subscription credentials that allow you to stream live TV and on-demand content on supported hardware. Each active subscription includes an Xtream Codes API login (server URL, username, password) and an M3U playlist link, which you enter into your preferred player app.
                </p>
                <p>
                  The service includes access to 25,000+ live channels, 100,000+ movies and series, and a 7-day XMLTV electronic program guide. Where supported by the source feed, your device, and your connection, you can watch 50/60 FPS sports feeds and 4K Ultra HD content.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <div className="rounded-lg border border-charcoal/60 bg-ash/20 p-4">
                    <h3 className="text-xs font-semibold text-snow flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-phosphor-green" />
                      Access method
                    </h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      Xtream Codes API + M3U playlist for third-party players. Learn how it works in{" "}
                      <a href="/what-is-iptv" className="text-phosphor-green hover:underline font-medium">
                        What is IPTV
                      </a>
                      .
                    </p>
                  </div>
                  <div className="rounded-lg border border-charcoal/60 bg-ash/20 p-4">
                    <h3 className="text-xs font-semibold text-snow flex items-center gap-2">
                      <CheckCircle2 className="size-3.5 text-phosphor-green" />
                      Compatibility
                    </h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      Firestick, Samsung and LG Smart TVs, Android TV, Apple TV, Google TV, Formuler, and mobile devices. Roku is supported via casting. See{" "}
                      <a href="/devices" className="text-phosphor-green hover:underline font-medium">
                        Supported Devices
                      </a>{" "}
                      and{" "}
                      <a href="/iptv-players" className="text-phosphor-green hover:underline font-medium">
                        IPTV players
                      </a>
                      .
                    </p>
                  </div>
                </div>
                <p className="text-xs text-smoke">
                  Channel and VOD availability varies by region and over time. The exact content available depends on your plan, device, and current service availability.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Our approach */}
          <Reveal className="mb-10" delay={0.1}>
            <section className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <Shield className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">Our approach</h2>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-snow">Clarity</h3>
                      <p className="mt-1 text-xs text-silver-mist leading-relaxed">
                        Explain what the service is, what it includes, and how to use it in plain language without filler or exaggerated claims.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-snow">Straightforward information</h3>
                      <p className="mt-1 text-xs text-silver-mist leading-relaxed">
                        Pricing, plans, and policies are documented in dedicated pages so you can compare options before purchasing. See{" "}
                        <a href="/iptv-pricing" className="text-phosphor-green hover:underline">
                          IPTV pricing
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-snow">Compatibility guidance</h3>
                      <p className="mt-1 text-xs text-silver-mist leading-relaxed">
                        Device and player guides cover installation steps, supported operating systems, and known limitations such as Roku casting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-snow">Transparent policies</h3>
                      <p className="mt-1 text-xs text-silver-mist leading-relaxed">
                        Refund terms, acceptable use, and privacy practices are published and linked from the footer and from relevant checkout flows.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-snow">Useful documentation</h3>
                      <p className="mt-1 text-xs text-silver-mist leading-relaxed">
                        Setup instructions, troubleshooting articles, and FAQs are maintained in{" "}
                        <a href="/setup" className="text-phosphor-green hover:underline">
                          Setup
                        </a>{" "}
                        and{" "}
                        <a href="/help-center" className="text-phosphor-green hover:underline">
                          Help Center
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-phosphor-green mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-medium text-snow">Prepaid billing</h3>
                      <p className="mt-1 text-xs text-silver-mist leading-relaxed">
                        All plans are prepaid with no automatic rebilling, no hidden renewal, and no long-term contract. Service runs for the duration you select.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* How we research and maintain information */}
          <Reveal className="mb-10" delay={0.12}>
            <section id="editorial-methodology" className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <BookOpen className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">How we research and maintain information</h2>
              </div>

              <div className="mt-5 space-y-6 text-sm leading-relaxed text-silver-mist">
                <div>
                  <h3 className="text-sm font-medium text-snow">Research</h3>
                  <p className="mt-1.5 text-xs leading-relaxed">
                    Technical information may be researched using official manufacturer documentation, official developer documentation, official app and store listings, recognized technical standards, and government or regulatory sources where relevant. Direct compatibility verification may be performed where genuinely applicable. Not every article uses every source type; sources are selected based on the topic.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-snow">Verification</h3>
                  <p className="mt-1.5 text-xs leading-relaxed">
                    Factual claims are reviewed for consistency with Teleview&apos;s canonical business data, consistency across pages, official documentation where applicable, technical standards where applicable, and compatibility information where applicable. Business data such as channel counts, VOD counts, plan prices, and trial and refund periods are maintained in an internal claim registry and checked for consistency across the site.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-snow">Updates</h3>
                  <p className="mt-1.5 text-xs leading-relaxed">
                    Technical documentation may be updated when device operating systems change, player applications change, official documentation changes, technical standards change, a factual error is identified, or Teleview business information changes. We do not claim a fixed review schedule; updates are made as needed to keep information accurate.
                  </p>
                </div>

                <div className="rounded-lg border border-charcoal/60 bg-ash/20 p-4">
                  <p className="text-[11px] leading-relaxed text-smoke">
                    Organization-based editorial accountability: this documentation is produced by Teleview as an organization. Organization is the author for organization-produced guides, with publisher Teleview. We do not attribute articles to individual persons unless a real, verifiable person is involved.
                  </p>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Source hierarchy */}
          <Reveal className="mb-10" delay={0.13}>
            <section id="source-hierarchy" className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <Globe className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">Source hierarchy</h2>
              </div>

              <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                We prioritize sources in the following order and clearly distinguish what is documented by the manufacturer from what is verified through Teleview compatibility verification where applicable.
              </p>

              <ol className="mt-5 space-y-3 list-decimal list-inside text-xs text-silver-mist leading-relaxed">
                <li>
                  <span className="font-medium text-snow">Official manufacturer/developer documentation</span>
                  <span className="block pl-5 mt-1 text-[11px] text-smoke">Device specifications, app store listings, and official player websites. Example wording: &quot;documented by the manufacturer&quot;.</span>
                </li>
                <li>
                  <span className="font-medium text-snow">Recognized technical standards</span>
                  <span className="block pl-5 mt-1 text-[11px] text-smoke">IETF RFCs, ISO/IEC standards, SMPTE standards where relevant to streaming protocols.</span>
                </li>
                <li>
                  <span className="font-medium text-snow">Government/regulatory sources</span>
                  <span className="block pl-5 mt-1 text-[11px] text-smoke">Legislation and regulator documentation where relevant to legal or safety topics.</span>
                </li>
                <li>
                  <span className="font-medium text-snow">Direct compatibility verification where applicable</span>
                  <span className="block pl-5 mt-1 text-[11px] text-smoke">Verification performed by Teleview where genuinely applicable. Example wording: &quot;verified through Teleview compatibility verification where applicable&quot; — we do not imply testing merely because an official source exists.</span>
                </li>
                <li>
                  <span className="font-medium text-snow">Secondary sources only when necessary</span>
                  <span className="block pl-5 mt-1 text-[11px] text-smoke">Used only when primary sources are unavailable and clearly indicated as secondary.</span>
                </li>
              </ol>
            </section>
          </Reveal>

          {/* Corrections and updates */}
          <Reveal className="mb-10" delay={0.14}>
            <section id="corrections-policy" className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <FileText className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">Corrections and updates</h2>
              </div>

              <div className="mt-5 space-y-3 text-xs leading-relaxed text-silver-mist">
                <p>
                  Factual errors may be corrected when identified. Outdated technical information may be updated when devices, applications, official documentation, technical standards, or platforms change.
                </p>
                <p>
                  Material updates are reflected by the page&apos;s review or update date where shown. Technical information may change over time as devices, applications, standards, or platforms evolve.
                </p>
                <p>
                  If you notice incorrect information, you can report it through the existing Teleview support channels:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-[11px] text-smoke">
                  <li>
                    Email: <a href={site.emailHref} className="text-phosphor-green hover:underline">{site.email}</a>
                  </li>
                  <li>
                    WhatsApp: <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-phosphor-green hover:underline">{site.whatsappDisplay}</a>
                  </li>
                  <li>
                    Contact page: <a href="/contact" className="text-phosphor-green hover:underline">/contact</a> and Help Center: <a href="/help-center" className="text-phosphor-green hover:underline">/help-center</a>
                  </li>
                </ul>
                <p className="text-[11px] text-smoke">
                  We do not invent new contact methods or promise specific response times beyond what is documented in support pages.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Built around customer experience */}
          <Reveal className="mb-10" delay={0.15}>
            <section className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <Settings className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">Built around the customer experience</h2>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-5">
                <div className="sm:col-span-5 grid grid-cols-1 sm:grid-cols-5 gap-4">
                  <div className="card p-4 bg-ash/20 border-charcoal/60">
                    <span className="text-[11px] font-mono text-phosphor-green">01</span>
                    <h3 className="mt-1 text-sm font-medium text-snow">Discover</h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      Review what IPTV is, which devices are supported, and how player apps work.
                    </p>
                  </div>
                  <div className="card p-4 bg-ash/20 border-charcoal/60">
                    <span className="text-[11px] font-mono text-phosphor-green">02</span>
                    <h3 className="mt-1 text-sm font-medium text-snow">Choose a plan</h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      Compare 1, 3, 6, and 12-month options in{" "}
                      <a href="/iptv-subscription" className="text-phosphor-green hover:underline">
                        IPTV subscription
                      </a>
                      .
                    </p>
                  </div>
                  <div className="card p-4 bg-ash/20 border-charcoal/60">
                    <span className="text-[11px] font-mono text-phosphor-green">03</span>
                    <h3 className="mt-1 text-sm font-medium text-snow">Activate</h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      Credentials are dispatched typically within 5–15 minutes via WhatsApp or email after order verification.
                    </p>
                  </div>
                  <div className="card p-4 bg-ash/20 border-charcoal/60">
                    <span className="text-[11px] font-mono text-phosphor-green">04</span>
                    <h3 className="mt-1 text-sm font-medium text-snow">Configure</h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      Enter credentials into TiviMate, IPTV Smarters Pro, IBO Player, or another supported player on your device.
                    </p>
                  </div>
                  <div className="card p-4 bg-ash/20 border-charcoal/60">
                    <span className="text-[11px] font-mono text-phosphor-green">05</span>
                    <h3 className="mt-1 text-sm font-medium text-snow">Use support resources</h3>
                    <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                      If needed, follow setup guides or contact support. You can also test first with a{" "}
                      <a href="/iptv-free-trial" className="text-phosphor-green hover:underline">
                        free trial
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Support */}
          <Reveal className="mb-10" delay={0.2}>
            <section className="card p-6 sm:p-8 border-phosphor-green/20 bg-ash/20">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-phosphor-green/15 text-phosphor-green">
                  <HelpCircle className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">Support</h2>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div className="card p-5 bg-obsidian">
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3 className="text-sm font-medium text-snow">WhatsApp</h3>
                  </div>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Contact our support team on WhatsApp for help with subscription and setup questions.
                  </p>
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-xs font-medium text-phosphor-green hover:underline"
                  >
                    WhatsApp: {site.whatsappDisplay}
                  </a>
                </div>

                <div className="card p-5 bg-obsidian">
                  <div className="flex items-center gap-2.5">
                    <Mail className="size-4 text-phosphor-green" aria-hidden="true" />
                    <h3 className="text-sm font-medium text-snow">Email</h3>
                  </div>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    Send questions about your subscription, activation, or compatible devices via email.
                  </p>
                  <a href={site.emailHref} className="mt-3 inline-flex text-xs font-medium text-phosphor-green hover:underline">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <GreenButton href="/help-center" className="text-xs">
                  Browse Help Center
                </GreenButton>
                <GhostButton href="/contact" className="text-xs">
                  Contact Us
                </GhostButton>
              </div>

              <p className="mt-4 text-[11px] text-smoke leading-relaxed">
                Our support team is available to help with subscription and setup questions. For quick answers, see{" "}
                <a href="/faq" className="text-silver-mist hover:text-snow underline">
                  FAQ
                </a>
                .
              </p>
            </section>
          </Reveal>

          {/* Transparency */}
          <Reveal className="mb-10" delay={0.25}>
            <section className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <FileText className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">Transparency</h2>
              </div>

              <p className="mt-3 text-sm text-silver-mist leading-relaxed max-w-[720px]">
                You can independently verify important information about Teleview in the following dedicated pages. We keep pricing, refund terms, and legal documentation published and linked from the footer.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <a href="/iptv-subscription" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <Tv className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Subscription plans</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">Compare 1, 3, 6, and 12-month plans and what is included.</p>
                  </div>
                </a>

                <a href="/iptv-pricing" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <Globe className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Pricing guide</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">Effective monthly costs, savings, and billing model.</p>
                  </div>
                </a>

                <a href="/refund-policy" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <Shield className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Refund policy</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">14-day money-back guarantee terms and eligibility.</p>
                  </div>
                </a>

                <a href="/terms-conditions" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <FileText className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Terms & Conditions</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">Service usage guidelines, account rules, and streaming policies.</p>
                  </div>
                </a>

                <a href="/privacy-policy" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <Shield className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Privacy policy</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">What information we collect and how it is handled.</p>
                  </div>
                </a>

                <a href="/disclaimer" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <Info className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Disclaimer</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">Technology notices, trademarks, and subscriber responsibilities.</p>
                  </div>
                </a>

                <a href="/dmca" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <FileText className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">DMCA notice</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">Copyright policy and takedown procedure.</p>
                  </div>
                </a>

                <a href="/help-center" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <HelpCircle className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Help Center</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">Troubleshooting guides for buffering, EPG, and connection issues.</p>
                  </div>
                </a>

                <a href="/setup" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <Settings className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">Setup guide</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">Step-by-step installation for Firestick, Smart TVs, and mobile.</p>
                  </div>
                </a>

                <a href="/what-is-iptv" className="card p-4 card-hover bg-ash/20 flex items-start gap-3">
                  <BookOpen className="size-4 text-phosphor-green mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-sm font-medium text-snow">What is IPTV</span>
                    <p className="mt-1 text-xs text-silver-mist leading-relaxed">How IPTV works, protocols, and comparison with cable/satellite.</p>
                  </div>
                </a>
              </div>
            </section>
          </Reveal>

          {/* Explore Teleview */}
          <Reveal className="mb-12" delay={0.3}>
            <section className="card p-6 sm:p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-ash text-phosphor-green">
                  <Smartphone className="size-4" aria-hidden="true" />
                </div>
                <h2 className="t-h2 text-lg sm:text-xl text-snow">Explore Teleview</h2>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-3 text-xs">
                <a href="/what-is-iptv" className="flex items-center justify-between rounded-lg border border-charcoal/60 bg-ash/20 px-4 py-3 hover:border-graphite transition-colors">
                  <span className="text-silver-mist">Learn how IPTV works and what it requires</span>
                  <span className="text-phosphor-green font-medium shrink-0 ml-3">What is IPTV →</span>
                </a>
                <a href="/iptv-subscription" className="flex items-center justify-between rounded-lg border border-charcoal/60 bg-ash/20 px-4 py-3 hover:border-graphite transition-colors">
                  <span className="text-silver-mist">Compare 1, 3, 6, and 12-month subscription options</span>
                  <span className="text-phosphor-green font-medium shrink-0 ml-3">Subscription →</span>
                </a>
                <a href="/devices" className="flex items-center justify-between rounded-lg border border-charcoal/60 bg-ash/20 px-4 py-3 hover:border-graphite transition-colors">
                  <span className="text-silver-mist">Check compatible streaming devices and TVs</span>
                  <span className="text-phosphor-green font-medium shrink-0 ml-3">Devices →</span>
                </a>
                <a href="/iptv-players" className="flex items-center justify-between rounded-lg border border-charcoal/60 bg-ash/20 px-4 py-3 hover:border-graphite transition-colors">
                  <span className="text-silver-mist">Browse supported player apps like TiviMate and IBO Player</span>
                  <span className="text-phosphor-green font-medium shrink-0 ml-3">Players →</span>
                </a>
                <a href="/setup" className="flex items-center justify-between rounded-lg border border-charcoal/60 bg-ash/20 px-4 py-3 hover:border-graphite transition-colors">
                  <span className="text-silver-mist">Follow installation guides for your device</span>
                  <span className="text-phosphor-green font-medium shrink-0 ml-3">Setup →</span>
                </a>
                <a href="/iptv-free-trial" className="flex items-center justify-between rounded-lg border border-charcoal/60 bg-ash/20 px-4 py-3 hover:border-graphite transition-colors">
                  <span className="text-silver-mist">Evaluate the service before subscribing</span>
                  <span className="text-phosphor-green font-medium shrink-0 ml-3">Free Trial →</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <GreenButton href="/iptv-subscription" className="text-xs">
                  View Plans
                </GreenButton>
                <GhostButton href="/help-center" className="text-xs">
                  Help Center
                </GhostButton>
              </div>
            </section>
          </Reveal>

          {/* Operated by note */}
          <Reveal delay={0.35}>
            <p className="t-caption text-[11px] text-smoke leading-relaxed max-w-[720px]">
              Teleview is operated by Teleview Media. All product names, trademarks, and registered marks referenced on this site remain the property of their respective owners and are used for compatibility identification only. Content availability may change over time and can vary by region.{" "}
              <a href="/disclaimer" className="text-phosphor-green hover:underline">
                Read disclaimer
              </a>
              .
            </p>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
