import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton } from "../components/ui";
import { site } from "../data/site";
import {
  MessageCircle,
  Mail,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Send,
  Shield,
  Smartphone,
  Tv,
  ExternalLink,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderId: "",
    device: "Firestick",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[960px]">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Page Hero Header */}
          <Reveal className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/20 bg-phosphor-green/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-phosphor-green">
              <Clock className="size-3.5" aria-hidden="true" />
              <span>24/7 Global Customer Support</span>
            </div>

            <h1 className="t-h1 mt-4 text-balance">
              Support &amp; <Accent>Contact Center</Accent>
            </h1>

            <p className="t-body mt-3 max-w-[700px] text-silver-mist">
              Have questions about your IPTV subscription, activation, or setup? Our dedicated technical specialists are online 24 hours a day, 7 days a week to ensure seamless streaming.
            </p>
          </Reveal>

          {/* Essential Alert: Subscription vs Player App */}
          <Reveal className="mb-10" delay={0.05}>
            <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-5 sm:p-6 text-snow shadow-lg">
              <div className="flex items-start gap-3.5">
                <AlertCircle className="size-5 sm:size-6 shrink-0 text-blue-400 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-blue-200">
                    Important: Your Subscription and Your Player App Are Two Different Things
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                    Teleview provides your active streaming subscription and Xtream / M3U login credentials. The player app you stream on (such as <strong>TiviMate, IBO Player, IPTV Smarters Pro, or XCIPTV</strong>) is independent third-party software.
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                    If your player displays an app trial expiration or asks for a separate software license, your Teleview subscription remains 100% active. You can simply log in with your same credentials on any other free supported player app.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Quick Troubleshooting Grid ("Before You Contact Us") */}
          <Reveal className="mb-12" delay={0.1}>
            <h2 className="t-h3 text-lg sm:text-xl text-snow mb-4 flex items-center gap-2">
              <HelpCircle className="size-5 text-phosphor-green" aria-hidden="true" />
              Before You Contact Us (Quick Answers)
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="card p-5 border border-charcoal/70 bg-ash/30">
                <h3 className="text-snow text-sm font-semibold flex items-center gap-2">
                  <Smartphone className="size-4 text-phosphor-green" />
                  App Not Working?
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Try another player from our{" "}
                  <a href="/devices" className="text-phosphor-green hover:underline font-medium">
                    Supported Devices &amp; Apps Guide
                  </a>
                  . Most playback glitches stem from local cache or decoder settings, not server downtime.
                </p>
              </div>

              <div className="card p-5 border border-charcoal/70 bg-ash/30">
                <h3 className="text-snow text-sm font-semibold flex items-center gap-2">
                  <Mail className="size-4 text-phosphor-green" />
                  Didn't Receive Credentials?
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Credentials are automatically issued after payment. You can instantly look up or resend your dispatch via{" "}
                  <a href="/my-account" className="text-phosphor-green hover:underline font-medium">
                    My Account
                  </a>
                  , or check your spam folder.
                </p>
              </div>

              <div className="card p-5 border border-charcoal/70 bg-ash/30">
                <h3 className="text-snow text-sm font-semibold flex items-center gap-2">
                  <Tv className="size-4 text-phosphor-green" />
                  Need Setup Help?
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Follow our step-by-step{" "}
                  <a href="/setup" className="text-phosphor-green hover:underline font-medium">
                    IPTV Installation Guide
                  </a>{" "}
                  covering Firestick, Android TV, Smart TVs, and Apple devices in minutes.
                </p>
              </div>

              <div className="card p-5 border border-charcoal/70 bg-ash/30">
                <h3 className="text-snow text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-phosphor-green" />
                  Wrong Login Details?
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  Copy and paste your username, password, and Xtream URL exactly as delivered. Accidental spaces before or after characters are the #1 cause of login errors.
                </p>
              </div>
            </div>

            <div className="mt-4 text-right">
              <a href="/help-center" className="text-xs font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1">
                Browse searchable troubleshooting in Help Center &rarr;
              </a>
            </div>
          </Reveal>

          {/* Contact Methods & Direct Form Layout */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column: Direct Support Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card p-6 border border-phosphor-green/30 bg-phosphor-green/5">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-phosphor-green/20 text-phosphor-green">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-snow">WhatsApp Live Support</h3>
                    <span className="text-[11px] font-mono text-phosphor-green">Fastest Response (&lt; 15 mins)</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                  Chat live with our technical support team for real-time activation, speed troubleshooting, or subscription renewals.
                </p>
                <div className="mt-4">
                  <a
                    href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green w-full text-center text-xs flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="size-4" />
                    Open WhatsApp Chat ({site.whatsappDisplay})
                  </a>
                </div>
              </div>

              <div className="card p-6 border border-charcoal/80 bg-ash/30">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-ash text-silver-mist">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-snow">Email Support</h3>
                    <span className="text-[11px] font-mono text-smoke">Typical Reply &lt; 2 Hours</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-silver-mist leading-relaxed">
                  Send questions, payment receipts, or business reseller inquiries directly to our senior desk.
                </p>
                <div className="mt-4">
                  <a
                    href={site.emailHref}
                    className="btn-ghost w-full text-center text-xs flex items-center justify-center gap-2"
                  >
                    <Mail className="size-4" />
                    Email {site.email}
                  </a>
                </div>
              </div>

              <div className="card p-6 border border-charcoal/80 bg-ash/20 space-y-3 text-xs text-silver-mist">
                <div className="flex items-center justify-between border-b border-charcoal/50 pb-2">
                  <span className="text-smoke">Operating Hours:</span>
                  <span className="font-medium text-snow">24 Hours / 7 Days a Week</span>
                </div>
                <div className="flex items-center justify-between border-b border-charcoal/50 pb-2">
                  <span className="text-smoke">Activation Guarantee:</span>
                  <span className="font-medium text-phosphor-green">Instant (&lt; 15 mins)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-smoke">Money-Back Period:</span>
                  <span className="font-medium text-snow">14 Days Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Support Ticket Form */}
            <div className="lg:col-span-7">
              <div className="card p-6 sm:p-8 border border-charcoal/80 bg-ash/20">
                <h3 className="t-h3 text-lg sm:text-xl text-snow">Open a Support Request</h3>
                <p className="t-body-sm mt-1 text-xs text-silver-mist">
                  Fill out the form below. A support specialist will review your inquiry and follow up promptly.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-lg border border-phosphor-green/30 bg-phosphor-green/10 p-6 text-center">
                    <CheckCircle2 className="mx-auto size-10 text-phosphor-green" />
                    <h4 className="mt-3 text-base font-semibold text-snow">Support Request Received</h4>
                    <p className="mt-2 text-xs text-silver-mist max-w-[400px] mx-auto">
                      Thank you! Our technical support team has received your ticket and will respond to <strong className="text-snow">{formData.email}</strong> within 15 to 45 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-5 btn-ghost text-xs"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-silver-mist mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow placeholder:text-smoke focus:border-phosphor-green focus:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-silver-mist mb-1">
                        Email Address (Where you want the reply sent)
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow placeholder:text-smoke focus:border-phosphor-green focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-order" className="block text-xs font-medium text-silver-mist mb-1">
                          Order Number (Optional)
                        </label>
                        <input
                          type="text"
                          id="contact-order"
                          value={formData.orderId}
                          onChange={(e) => setFormData({ ...formData, orderId: e.target.value })}
                          placeholder="e.g. TL-8821"
                          className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow placeholder:text-smoke focus:border-phosphor-green focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-device" className="block text-xs font-medium text-silver-mist mb-1">
                          Device Type
                        </label>
                        <select
                          id="contact-device"
                          value={formData.device}
                          onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                          className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow focus:border-phosphor-green focus:outline-none"
                        >
                          <option value="Firestick">Amazon Firestick / Fire TV</option>
                          <option value="Smart TV">Smart TV (Samsung / LG / Sony)</option>
                          <option value="Android Box">Android TV Box / Shield</option>
                          <option value="Apple">Apple TV / iPhone / iPad</option>
                          <option value="Windows/Mac">PC / Mac / Laptop</option>
                          <option value="MAG/Enigma">MAG / Formuler / Enigma2</option>
                          <option value="Other">Other Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-medium text-silver-mist mb-1">
                        How can we help you?
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your issue or question in detail..."
                        className="w-full rounded-lg border border-charcoal bg-obsidian/80 px-3.5 py-2.5 text-xs text-snow placeholder:text-smoke focus:border-phosphor-green focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-green w-full text-xs flex items-center justify-center gap-2 py-3"
                    >
                      <Send className="size-4" />
                      Send Support Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
