import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { Accent, GreenButton } from "../components/ui";
import { site } from "../data/site";
import {
  ShieldAlert,
  Mail,
  Send,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  FileCheck,
  Building,
  FileText,
  Shield,
  RefreshCcw,
} from "lucide-react";

const navTabs = [
  { id: "terms", label: "Terms & Conditions", href: "/terms-conditions", icon: FileText },
  { id: "privacy", label: "Privacy Policy", href: "/privacy-policy", icon: Shield },
  { id: "refund", label: "Refund Policy", href: "/refund-policy", icon: RefreshCcw },
  { id: "disclaimer", label: "Disclaimer", href: "/disclaimer", icon: AlertTriangle },
  { id: "dmca", label: "DMCA Notice", href: "/dmca", icon: ShieldAlert },
];

export default function DmcaPage() {
  const [submitted, setSubmitted] = useState(false);
  const [claim, setClaim] = useState({
    name: "",
    email: "",
    owner: "",
    work: "",
    url: "",
    sworn: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                <a href="/terms-conditions" className="hover:text-snow transition-colors">
                  Trust &amp; Legal
                </a>
              </li>
              <li>
                <ChevronRight className="size-3 text-smoke" aria-hidden="true" />
              </li>
              <li>
                <span className="text-phosphor-green font-medium">DMCA Notice</span>
              </li>
            </ol>
          </nav>

          {/* Hero Header */}
          <Reveal className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/20 bg-phosphor-green/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-phosphor-green">
              <ShieldAlert className="size-3.5" aria-hidden="true" />
              <span>Digital Millennium Copyright Act Compliance</span>
            </div>

            <h1 className="t-h1 mt-4 text-balance">
              DMCA Notice &amp; <Accent>Copyright Policy</Accent>
            </h1>

            <p className="t-body mt-3 max-w-[700px] text-silver-mist">
              Teleview respects the intellectual property rights of copyright owners worldwide. Review our copyright policies, safe harbor declarations, and procedures for submitting DMCA notifications.
            </p>
          </Reveal>

          {/* Legal Navigation Tabs */}
          <div className="mb-12 flex flex-wrap gap-2 border-b border-charcoal/60 pb-4">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === "dmca";
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-all ${
                    isActive
                      ? "bg-phosphor-green text-obsidian font-bold shadow-[0_0_12px_rgba(62,207,142,0.3)]"
                      : "border border-charcoal bg-ash/30 text-silver-mist hover:border-slate hover:text-snow"
                  }`}
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                  <span>{tab.label}</span>
                </a>
              );
            })}
          </div>

          {/* Core Policy Articles */}
          <div className="space-y-8 text-silver-mist text-sm leading-relaxed">
            <section className="card p-6 sm:p-8 space-y-4 border border-charcoal/80 bg-ash/20">
              <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
                <span className="text-phosphor-green font-mono text-sm">01.</span>
                Statement of Principle
              </h2>
              <p>
                <strong className="text-snow">Teleview</strong> (<a href="https://www.teleview.me" className="text-phosphor-green hover:underline">teleview.me</a>) operates in strict compliance with the provisions of Title 17, United States Code, Section 512 (Digital Millennium Copyright Act) and relevant international intellectual property frameworks.
              </p>
              <p>
                It is our policy to respond expeditiously to legitimate, clear notices of alleged copyright infringement and take appropriate action under applicable intellectual property laws.
              </p>
            </section>

            <section className="card p-6 sm:p-8 space-y-4 border border-charcoal/80 bg-ash/20">
              <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
                <span className="text-phosphor-green font-mono text-sm">02.</span>
                Scope of Service &amp; Technology Notice
              </h2>
              <p>
                Teleview provides an IPTV account access platform and customer management infrastructure. <strong className="text-snow">Teleview does not host, store, encode, or broadcast video files, media archives, or television signals on our web servers.</strong>
              </p>
              <p>
                All television broadcasts and on-demand media content are delivered through third-party streaming providers over internet protocols. We do not possess control over external streaming endpoints or media feeds maintained by independent broadcasters. For further details on our technology model and nominative trademark disclosures, review our official{" "}
                <a href="/disclaimer" className="text-phosphor-green hover:underline">
                  Legal Disclaimer
                </a>{" "}
                and{" "}
                <a href="/terms-conditions" className="text-phosphor-green hover:underline">
                  Terms &amp; Conditions
                </a>
                .
              </p>
            </section>

            <section className="card p-6 sm:p-8 space-y-4 border border-charcoal/80 bg-ash/20">
              <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2.5">
                <span className="text-phosphor-green font-mono text-sm">03.</span>
                Notification Requirements for Copyright Owners
              </h2>
              <p>
                To file a valid DMCA notification of alleged copyright infringement, rights holders or authorized legal representatives must provide a written communication containing the following statutory elements:
              </p>
              <ul className="space-y-2 pl-4 list-disc marker:text-phosphor-green">
                <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
                <li>Clear identification of the copyrighted work claimed to have been infringed.</li>
                <li>Specific identification of the material that is claimed to be infringing, including URLs or server references.</li>
                <li>Sufficient contact information (full legal name, physical address, telephone number, and official email address).</li>
                <li>A statement that the complaining party has a good-faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              </ul>
            </section>

            {/* Designated Agent Box */}
            <section className="card p-6 sm:p-8 border border-phosphor-green/30 bg-phosphor-green/5 space-y-3">
              <div className="flex items-center gap-2 text-phosphor-green font-semibold text-sm sm:text-base">
                <Building className="size-5" />
                Designated Copyright Agent
              </div>
              <p className="text-xs sm:text-sm text-silver-mist">
                Please direct all official DMCA notifications and takedown requests to our designated copyright compliance agent:
              </p>
              <div className="font-mono text-xs text-snow bg-obsidian/80 p-4 rounded-lg border border-charcoal/60 space-y-1">
                <p className="font-bold text-phosphor-green">Teleview Copyright Compliance Office</p>
                <p>Email: <a href={site.emailHref} className="text-snow hover:underline">{site.email}</a></p>
                <p>Attention: DMCA Takedown Notice Department</p>
                <p>Response Timeframe: 24 to 48 business hours</p>
              </div>
            </section>

            {/* Online DMCA Submission Form */}
            <section className="card p-6 sm:p-8 border border-charcoal/80 bg-ash/20 space-y-4">
              <h2 className="t-h2 text-lg sm:text-xl text-snow flex items-center gap-2">
                <FileCheck className="size-5 text-phosphor-green" />
                Online DMCA Notice Submission Form
              </h2>
              <p className="text-xs text-silver-mist">
                Rights holders may also submit notifications directly through our verified digital intake form:
              </p>

              {submitted ? (
                <div className="rounded-lg border border-phosphor-green/40 bg-phosphor-green/10 p-6 text-center">
                  <CheckCircle2 className="mx-auto size-10 text-phosphor-green" />
                  <h3 className="mt-3 text-base font-semibold text-snow">DMCA Notice Received</h3>
                  <p className="mt-2 text-xs text-silver-mist max-w-[440px] mx-auto">
                    Your infringement notification has been logged. Our legal compliance office will review the submitted details and contact <strong className="text-snow">{claim.email}</strong> within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="dmca-name" className="block text-xs font-medium text-silver-mist mb-1">
                        Claimant Legal Name
                      </label>
                      <input
                        type="text"
                        id="dmca-name"
                        required
                        value={claim.name}
                        onChange={(e) => setClaim({ ...claim, name: e.target.value })}
                        placeholder="Your full legal name"
                        className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow focus:border-phosphor-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dmca-email" className="block text-xs font-medium text-silver-mist mb-1">
                        Corporate / Contact Email
                      </label>
                      <input
                        type="email"
                        id="dmca-email"
                        required
                        value={claim.email}
                        onChange={(e) => setClaim({ ...claim, email: e.target.value })}
                        placeholder="legal@rightsholder.com"
                        className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow focus:border-phosphor-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="dmca-owner" className="block text-xs font-medium text-silver-mist mb-1">
                      Copyright Owner / Entity Represented
                    </label>
                    <input
                      type="text"
                      id="dmca-owner"
                      required
                      value={claim.owner}
                      onChange={(e) => setClaim({ ...claim, owner: e.target.value })}
                      placeholder="e.g. Broadcast Corporation Inc."
                      className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow focus:border-phosphor-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="dmca-work" className="block text-xs font-medium text-silver-mist mb-1">
                      Identification of Copyrighted Work
                    </label>
                    <input
                      type="text"
                      id="dmca-work"
                      required
                      value={claim.work}
                      onChange={(e) => setClaim({ ...claim, work: e.target.value })}
                      placeholder="Description of the original protected broadcast or media"
                      className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow focus:border-phosphor-green focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="dmca-url" className="block text-xs font-medium text-silver-mist mb-1">
                      Location / Details of Alleged Infringing Stream
                    </label>
                    <textarea
                      id="dmca-url"
                      rows={3}
                      required
                      value={claim.url}
                      onChange={(e) => setClaim({ ...claim, url: e.target.value })}
                      placeholder="Provide specific channel names, URLs, or feed identifiers..."
                      className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow focus:border-phosphor-green focus:outline-none"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="dmca-sworn"
                      required
                      checked={claim.sworn}
                      onChange={(e) => setClaim({ ...claim, sworn: e.target.checked })}
                      className="mt-1 size-4 rounded border-charcoal bg-obsidian text-phosphor-green focus:ring-phosphor-green"
                    />
                    <label htmlFor="dmca-sworn" className="text-xs text-smoke leading-relaxed">
                      I have a good-faith belief that use of the material is not authorized, and under penalty of perjury, that I am authorized to act on behalf of the copyright owner.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-green w-full text-xs flex items-center justify-center gap-2 py-3 mt-4"
                  >
                    <Send className="size-4" />
                    Submit DMCA Takedown Notice
                  </button>
                </form>
              )}
            </section>

            <section className="card p-6 sm:p-8 space-y-3 border border-charcoal/80 bg-ash/20 text-xs">
              <h3 className="text-sm font-semibold text-snow">Repeat Infringer Termination Policy</h3>
              <p>
                In compliance with 17 U.S.C. § 512(i), Teleview maintains a strict policy providing for the immediate suspension or permanent termination of subscriber accounts found to repeatedly infringe copyright rights.
              </p>
              <p className="pt-2 text-smoke">
                For customer service, non-copyright inquiries, or billing assistance, please reach our 24/7 team at the{" "}
                <a href="/contact" className="text-phosphor-green hover:underline">
                  Teleview Support Center
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
