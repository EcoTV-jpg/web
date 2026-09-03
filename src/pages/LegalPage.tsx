import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Accent, GreenButton } from "../components/ui";
import { site } from "../data/site";
import {
  FileText,
  Shield,
  RefreshCcw,
  AlertTriangle,
  ChevronRight,
  CheckCircle2,
  Lock,
  Mail,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export type LegalType = "terms" | "privacy" | "refund" | "disclaimer";

interface LegalPageProps {
  type: LegalType;
}

const navTabs = [
  { id: "terms", label: "Terms & Conditions", href: "/terms-conditions", icon: FileText },
  { id: "privacy", label: "Privacy Policy", href: "/privacy-policy", icon: Shield },
  { id: "refund", label: "Refund Policy", href: "/refund-policy", icon: RefreshCcw },
  { id: "disclaimer", label: "Disclaimer", href: "/disclaimer", icon: AlertTriangle },
];

export default function LegalPage({ type }: LegalPageProps) {
  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[940px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-silver-mist">
              <li>
                <a href="/" className="hover:text-snow transition-colors">
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="size-3 text-smoke" aria-hidden="true" />
              </li>
              <li>
                <span className="text-smoke">Legal</span>
              </li>
              <li>
                <ChevronRight className="size-3 text-smoke" aria-hidden="true" />
              </li>
              <li>
                <span className="text-phosphor-green font-medium">
                  {type === "terms" && "Terms & Conditions"}
                  {type === "privacy" && "Privacy Policy"}
                  {type === "refund" && "Refund Policy"}
                  {type === "disclaimer" && "Disclaimer"}
                </span>
              </li>
            </ol>
          </nav>

          {/* Header Title Section */}
          <Reveal className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/20 bg-phosphor-green/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-phosphor-green">
              <Shield className="size-3.5" aria-hidden="true" />
              <span>Legal &amp; Compliance Documentation</span>
            </div>

            <h1 className="t-h1 mt-4 text-balance">
              {type === "terms" && (
                <>
                  Terms &amp; <Accent>Conditions</Accent>
                </>
              )}
              {type === "privacy" && (
                <>
                  Privacy <Accent>Policy</Accent>
                </>
              )}
              {type === "refund" && (
                <>
                  Refund <Accent>Policy</Accent>
                </>
              )}
              {type === "disclaimer" && (
                <>
                  Legal <Accent>Disclaimer</Accent>
                </>
              )}
            </h1>

            <p className="t-body mt-3 max-w-[680px] text-silver-mist">
              {type === "terms" &&
                "Your rights and responsibilities as a Teleview subscriber. Review our service usage guidelines, account terms, and streaming policies."}
              {type === "privacy" &&
                "Your data, handled with care and complete confidentiality. Learn what information we collect, how it is secured, and your privacy rights."}
              {type === "refund" &&
                "Clear, transparent refund terms backed by our 14-day money-back guarantee and 24/7 technical customer assistance."}
              {type === "disclaimer" &&
                "Important legal notices regarding IPTV streaming technology, intellectual property, third-party media access, and compliance."}
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs text-smoke font-mono">
              <span>Last updated: September 3, 2026</span>
              <span>&bull;</span>
              <span>Applies Worldwide</span>
            </div>
          </Reveal>

          {/* Legal Navigation Tabs */}
          <div className="mb-12 flex flex-wrap gap-2 border-b border-charcoal/60 pb-4">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === type;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-phosphor-green text-obsidian font-semibold shadow-sm"
                      : "bg-ash/40 text-silver-mist hover:bg-ash hover:text-snow border border-charcoal/50"
                  }`}
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="space-y-10">
            {type === "terms" && <TermsContent />}
            {type === "privacy" && <PrivacyContent />}
            {type === "refund" && <RefundContent />}
            {type === "disclaimer" && <DisclaimerContent />}
          </div>

          {/* Support & Contact Card */}
          <div className="mt-16 card p-8 sm:p-10 border border-phosphor-green/20 bg-ash/30">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="t-h3 text-xl text-snow">Have questions about our legal policies?</h3>
                <p className="t-body-sm mt-2 text-silver-mist max-w-[540px]">
                  Our customer support team is available 24/7 to clarify terms, assist with activation, or answer questions regarding your subscription.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-green text-xs"
                >
                  <MessageCircle className="mr-2 size-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
                <a
                  href={site.emailHref}
                  className="btn-ghost text-xs"
                >
                  <Mail className="mr-2 size-4" aria-hidden="true" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function TermsContent() {
  return (
    <article className="prose prose-invert max-w-none space-y-8 text-silver-mist leading-relaxed text-sm sm:text-base">
      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">01.</span>
          Acceptance of Terms
        </h2>
        <p>
          Welcome to <strong className="text-snow">Teleview</strong> (<a href="https://www.teleview.me" className="text-phosphor-green hover:underline">teleview.me</a>). We provide an online video streaming subscription service that allows users to access and enjoy a curated catalog of global live television broadcasts and on-demand video entertainment.
        </p>
        <p>
          By creating an account, placing an order, or accessing any Teleview streaming endpoint, you confirm that you have read, understood, and agreed to be bound by these <strong className="text-snow">Terms &amp; Conditions</strong> and our associated policies. If you do not agree, you must discontinue using our services immediately.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">02.</span>
          Changes to Terms
        </h2>
        <p>
          Teleview reserves the right to revise or update these Terms and Conditions at any time at our sole discretion. Any modifications become effective immediately upon being published on this page with an updated revision date. Your continued use of the platform after updates signifies your acceptance of the amended terms.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">03.</span>
          Minimum Age Requirement
        </h2>
        <p>
          To purchase or use Teleview services, you must be at least <strong className="text-snow">18 years of age</strong> or the legal age of majority in your jurisdiction. By subscribing, you represent and warrant that you meet this age requirement and possess legal authority to enter into this agreement.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">04.</span>
          Permitted Use &amp; Prohibited Conduct
        </h2>
        <p>
          Your Teleview subscription is granted strictly for personal, non-commercial, residential entertainment. You agree not to engage in any of the following unauthorized activities:
        </p>
        <ul className="space-y-2 pl-4 list-disc marker:text-phosphor-green">
          <li>Re-streaming, broadcasting, re-distributing, or commercially exhibiting streams without explicit written consent.</li>
          <li>Simultaneous multi-screen streaming exceeding the number of active connections authorized by your specific plan tier.</li>
          <li>Publicly sharing, reselling, or transferring your login credentials (username, password, M3U link, or Xtream API parameters).</li>
          <li>Using automated scrapers, bots, crawlers, or scripts to monitor, extract, or capture media packets from our servers.</li>
          <li>Attempting to probe, bypass, reverse-engineer, or breach server security mechanisms, rate limiters, or firewalls.</li>
        </ul>
        <p className="text-xs text-smoke">
          Notice: Violating these restrictions will result in immediate account suspension or permanent termination without entitlement to a refund.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">05.</span>
          Streaming Quality &amp; Network Conditions
        </h2>
        <p>
          Teleview employs enterprise-grade worldwide Content Delivery Networks (CDNs) to deliver fast, 99.9% uptime streams in 4K Ultra HD, FHD, and HD. However, end-user playback performance depends on multiple external variables outside our direct control, including:
        </p>
        <ul className="space-y-1.5 pl-4 list-disc marker:text-phosphor-green">
          <li>Your internet service provider (ISP) speed, routing, and bandwidth limits.</li>
          <li>Wi-Fi signal quality, local network congestion, and router performance.</li>
          <li>Processing capabilities and codecs supported by your hardware or TV box.</li>
          <li>Configuration settings of your chosen player app (TiviMate, IPTV Smarters, IBO Player).</li>
        </ul>
        <p>
          We recommend a minimum stable download speed of 15 Mbps for 1080p Full HD streams and 30+ Mbps for 4K Ultra HD video.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">06.</span>
          Payments &amp; 14-Day Money-Back Guarantee
        </h2>
        <p>
          All subscription plans (1 Month, 3 Months, 6 Months, 12 Months) are prepaid. Teleview does not impose long-term binding contracts or hidden cancellation penalties.
        </p>
        <p>
          We back all purchases with a <strong className="text-snow">14-Day Money-Back Guarantee</strong>. If our technical support team is unable to resolve an active connectivity or server delivery issue, you may request a refund within 14 days of purchase as detailed in our <a href="/refund-policy" className="text-phosphor-green hover:underline">Refund Policy</a>.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">07.</span>
          VPN &amp; Proxy Usage
        </h2>
        <p>
          You are fully permitted to use a Virtual Private Network (VPN) or secure proxy when connecting to Teleview servers. VPNs provide added privacy and can help bypass ISP bandwidth throttling during high-demand live sporting events.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">08.</span>
          Limitation of Liability
        </h2>
        <p>
          In no event shall Teleview, its directors, employees, or technical partners be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the streaming platform. Teleview's total liability shall not exceed the amount paid by you for the active subscription term.
        </p>
      </section>
    </article>
  );
}

function PrivacyContent() {
  return (
    <article className="prose prose-invert max-w-none space-y-8 text-silver-mist leading-relaxed text-sm sm:text-base">
      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">01.</span>
          Our Privacy Commitment
        </h2>
        <p>
          At <strong className="text-snow">Teleview</strong>, we respect and safeguard the personal privacy of our subscribers worldwide. This Privacy Policy explains our practices regarding the collection, handling, storage, and protection of information when you browse our website (<a href="https://www.teleview.me" className="text-phosphor-green hover:underline">https://www.teleview.me</a>) or use our streaming services.
        </p>
        <p>
          We operate under strict data minimization principles: <strong className="text-snow">we only collect what is strictly necessary to deliver and maintain your streaming service</strong>. We do not sell, rent, or trade your personal information with third-party advertising networks.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">02.</span>
          Information We Collect
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div className="card p-4 border border-charcoal/60 bg-ash/20">
            <h3 className="text-snow font-medium text-sm flex items-center gap-2">
              <CheckCircle2 className="size-4 text-phosphor-green" />
              Account &amp; Delivery Data
            </h3>
            <p className="mt-2 text-xs text-silver-mist">
              Your email address to deliver Xtream API credentials, M3U playlists, setup guides, renewal reminders, and critical customer support updates.
            </p>
          </div>
          <div className="card p-4 border border-charcoal/60 bg-ash/20">
            <h3 className="text-snow font-medium text-sm flex items-center gap-2">
              <CheckCircle2 className="size-4 text-phosphor-green" />
              Technical &amp; Session Data
            </h3>
            <p className="mt-2 text-xs text-silver-mist">
              Device model, operating system, and IP address for CDN geo-routing, concurrent connection enforcement, and anti-abuse protection.
            </p>
          </div>
        </div>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">03.</span>
          What We Never Log or Collect
        </h2>
        <div className="rounded-lg border border-phosphor-green/30 bg-phosphor-green/5 p-4 text-sm text-snow">
          <p className="font-semibold text-phosphor-green mb-1 flex items-center gap-2">
            <Lock className="size-4" /> Zero-Viewing-Log Commitment
          </p>
          <p className="text-xs text-silver-mist leading-relaxed">
            We do not track, monitor, or store logs of the specific channels, movies, sports events, or videos you stream. Your entertainment viewing history remains strictly private and confidential.
          </p>
        </div>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">04.</span>
          How We Use Your Data
        </h2>
        <ul className="space-y-2 pl-4 list-disc marker:text-phosphor-green">
          <li>To provision, authenticate, and maintain your IPTV subscription account.</li>
          <li>To route media requests to the closest regional edge CDN server for lowest latency.</li>
          <li>To provide 24/7 technical customer support via WhatsApp and email.</li>
          <li>To detect and prevent fraudulent transactions and DDoS attacks.</li>
          <li>To fulfill billing obligations and process legitimate refund requests.</li>
        </ul>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">05.</span>
          Security &amp; Data Encryption
        </h2>
        <p>
          We employ 256-bit SSL/TLS encryption for all data in transit across our website and API endpoints. Server infrastructure is housed in secure, access-controlled data centers with automated intrusion detection and firewall defenses.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">06.</span>
          Your Data Protection Rights (GDPR &amp; Global)
        </h2>
        <p>
          Under international privacy standards (including GDPR and CCPA), you have the right to request access to the personal data we hold about you, request corrections, or request permanent deletion of your account information. To exercise any of these rights, simply email our privacy team at <a href={site.emailHref} className="text-phosphor-green hover:underline">{site.email}</a>.
        </p>
      </section>
    </article>
  );
}

function RefundContent() {
  return (
    <article className="prose prose-invert max-w-none space-y-8 text-silver-mist leading-relaxed text-sm sm:text-base">
      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">01.</span>
          14-Day Money-Back Guarantee
        </h2>
        <p>
          At <strong className="text-snow">Teleview</strong>, we stand behind the reliability of our premium streaming infrastructure with an unconditional <strong className="text-snow">14-Day Money-Back Guarantee</strong> on all new subscriptions.
        </p>
        <p>
          We want you to be completely satisfied with our 25,000+ channel catalog, 4K sports coverage, and server speed. If you encounter technical issues that our 24/7 support team cannot resolve, you are entitled to a full refund within 14 days of your original purchase date.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">02.</span>
          Testing with a Free Trial or 1-Month Plan
        </h2>
        <p>
          To ensure Teleview is 100% compatible with your smart TV, streaming box, and home internet connection before committing to longer terms, we strongly recommend:
        </p>
        <ul className="space-y-2 pl-4 list-disc marker:text-phosphor-green">
          <li>Requesting our <strong className="text-snow">24-hour trial</strong> to test server responsiveness during live events.</li>
          <li>Starting with our flexible <a href="/iptv-subscription/1-month" className="text-phosphor-green hover:underline">1-Month Plan ($16)</a>, which offers zero long-term commitment.</li>
        </ul>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">03.</span>
          Refund Eligibility Conditions
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-phosphor-green/30 bg-phosphor-green/5 p-4 text-xs sm:text-sm">
            <h3 className="font-semibold text-phosphor-green mb-1 flex items-center gap-2">
              <CheckCircle2 className="size-4" /> Eligible Scenarios:
            </h3>
            <ul className="space-y-1 list-disc pl-4 text-silver-mist">
              <li>Credentials failed to deliver or account activation was not completed within 12 hours.</li>
              <li>Verified ongoing server downtime or stream unavailability exceeding 24 consecutive hours.</li>
              <li>Technical incompatibilities verified by our support staff that prevent streaming on supported hardware.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-charcoal/80 bg-ash/20 p-4 text-xs sm:text-sm">
            <h3 className="font-semibold text-smoke mb-1 flex items-center gap-2">
              <HelpCircle className="size-4" /> Scenarios Not Covered:
            </h3>
            <ul className="space-y-1 list-disc pl-4 text-silver-mist">
              <li>Local ISP throttling, low Wi-Fi bandwidth, or unstable home internet below recommended 15 Mbps.</li>
              <li>Temporary fluctuations in individual third-party channels (we provide multiple redundant backups for all marquee networks).</li>
              <li>Accounts banned or suspended due to multi-device rule violations or sharing credentials.</li>
              <li>Refund requests submitted after the 14-day warranty period has expired.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">04.</span>
          How to Request a Refund
        </h2>
        <p>Requesting a refund is simple and fast:</p>
        <ol className="space-y-3 pl-4 list-decimal marker:text-phosphor-green">
          <li>
            <strong className="text-snow">Contact Customer Support</strong>: Send a message to our WhatsApp support at <strong className="text-snow">{site.whatsappDisplay}</strong> or email <a href={site.emailHref} className="text-phosphor-green hover:underline">{site.email}</a>.
          </li>
          <li>
            <strong className="text-snow">Provide Order Information</strong>: Include your registered email address and order confirmation number.
          </li>
          <li>
            <strong className="text-snow">Brief Explanation</strong>: Describe the technical issue encountered so our engineers can review server logs.
          </li>
          <li>
            <strong className="text-snow">Processing &amp; Credit</strong>: Once approved, your refund will be processed back to your original payment method within <strong className="text-snow">3 to 5 business days</strong>.
          </li>
        </ol>
      </section>
    </article>
  );
}

function DisclaimerContent() {
  return (
    <article className="prose prose-invert max-w-none space-y-8 text-silver-mist leading-relaxed text-sm sm:text-base">
      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">01.</span>
          General Technology Disclaimer
        </h2>
        <p>
          At <strong className="text-snow">Teleview</strong>, we operate in strict compliance with applicable telecommunications and digital streaming regulations. IPTV (Internet Protocol Television) is a recognized, lawful transmission technology used worldwide by broadcasters and telecommunications companies to transmit audiovisual content over internet protocol networks.
        </p>
        <p>
          Teleview acts solely as an access and technical management service. We do not own, operate, broadcast, or store video media files on our web servers. All media streams are delivered through third-party streaming content providers.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">02.</span>
          Trademarks &amp; Intellectual Property
        </h2>
        <p>
          All product names, brand names, logos, trademarks, and registered marks mentioned across this website—including but not limited to <strong className="text-snow">Amazon Fire TV, Apple TV, Android TV, Samsung Tizen, LG webOS, Roku, TiviMate, IPTV Smarters Pro, and Google Chromecast</strong>—remain the exclusive property of their respective owners.
        </p>
        <p>
          References to these trademarks are made solely for <strong className="text-snow">nominative, descriptive, and compatibility identification purposes</strong> under fair use principles. Such use does not imply endorsement, sponsorship, or affiliation between Teleview and these respective entities.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">03.</span>
          Subscriber Responsibility &amp; Jurisdiction
        </h2>
        <p>
          Broadcasting, copyright, and digital media licensing laws vary significantly by country, state, and municipality. It is the sole responsibility of each subscriber to verify and ensure that their access and consumption of online streaming media complies with the local laws and broadcasting regulations of their jurisdiction.
        </p>
        <p className="text-xs text-smoke">
          Teleview disclaims all liability for unauthorized usage or legal non-compliance committed by end users in their domestic territories.
        </p>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">04.</span>
          DMCA Copyright Notice &amp; Takedown Protocol
        </h2>
        <p>
          Teleview respects the intellectual property rights of creators and copyright holders. In accordance with the Digital Millennium Copyright Act (DMCA) and international copyright directives, we promptly investigate all properly formulated notifications of alleged infringement.
        </p>
        <p>
          If you are a copyright owner or authorized representative and believe that any content accessible via our platform infringes your copyright, please submit a formal notification to our designated copyright agent:
        </p>
        <div className="rounded-lg border border-charcoal/80 bg-ash/20 p-4 font-mono text-xs text-silver-mist space-y-1">
          <p className="text-snow font-semibold">Teleview Copyright Compliance Office</p>
          <p>Email: <a href={site.emailHref} className="text-phosphor-green hover:underline">{site.email}</a></p>
          <p>Subject: DMCA Notice of Infringement</p>
          <p>Response Window: 24 to 48 business hours</p>
        </div>
      </section>

      <section className="card p-6 sm:p-8 space-y-4">
        <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
          <span className="text-phosphor-green font-mono text-sm">05.</span>
          No Legal Advice
        </h2>
        <p>
          The materials and information published on this website are provided for general educational and informational purposes only. They do not constitute legal advice or formal legal counsel. For specific legal questions regarding telecommunications or copyright law, consult a licensed legal attorney in your jurisdiction.
        </p>
      </section>
    </article>
  );
}
