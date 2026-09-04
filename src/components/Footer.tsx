import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { Logo } from "./ui";
import { site } from "../data/site";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
  };

  return (
    <form onSubmit={onSubmit} className="mt-5 flex max-w-[400px] flex-wrap items-center gap-2" aria-label="Newsletter signup">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        className="input-dark flex-1"
      />
      <button type="submit" className="btn-green h-11 shrink-0">
        Subscribe
      </button>
      {done && (
        <p className="mt-1 w-full text-xs text-mint-pulse" role="status">
          Thanks! You are on the list.
        </p>
      )}
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-charcoal">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_0.95fr_1.1fr]">
        {/* Brand */}
        <div>
          <Logo />
          <p className="t-body-sm mt-5 max-w-[320px] text-silver-mist leading-relaxed">
            {site.tagline}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-phosphor-green">
            <ShieldCheck className="size-4 shrink-0" aria-hidden="true" />
            <span>14-Day Money-Back Guarantee Included</span>
          </div>
        </div>

        {/* Contact / Get In Touch */}
        <div>
          <h3 className="text-sm font-semibold text-snow uppercase tracking-wider">Get In Touch</h3>
          <p className="t-body-sm mt-2 text-xs text-smoke">Need help before or after purchasing?</p>
          <ul className="mt-4 space-y-3.5">
            <li>
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                className="t-body-sm flex items-center gap-3 transition-colors hover:text-snow"
              >
                <MessageCircle className="size-4 text-phosphor-green" strokeWidth={1.5} aria-hidden="true" />
                <span>WhatsApp: <strong className="text-snow">{site.whatsappDisplay}</strong></span>
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="t-body-sm flex items-center gap-3 transition-colors hover:text-snow"
              >
                <Mail className="size-4 text-phosphor-green" strokeWidth={1.5} aria-hidden="true" />
                <span>Email: <strong className="text-snow">{site.email}</strong></span>
              </a>
            </li>
          </ul>
          <p className="t-caption mt-4 text-[11px] text-smoke leading-relaxed">
            Our support team is available to help with subscription and setup questions.
          </p>
        </div>

        {/* Newsletter & Links */}
        {/* Newsletter & Links */}
        <div className="lg:justify-self-end">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xs font-semibold text-snow uppercase tracking-wider">Explore</h3>
              <ul className="mt-3 space-y-2 text-xs text-silver-mist">
                <li><a href="/iptv-subscription" className="hover:text-snow transition-colors">Subscription Plans</a></li>
                <li><a href="/devices" className="hover:text-snow transition-colors">Supported Devices</a></li>
                <li><a href="/setup" className="hover:text-snow transition-colors">Installation Guide</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-snow uppercase tracking-wider">Support</h3>
              <ul className="mt-3 space-y-2 text-xs text-silver-mist">
                <li><a href="/help-center" className="hover:text-snow transition-colors">Help Center</a></li>
                <li><a href="/faq" className="hover:text-snow transition-colors">FAQ</a></li>
                <li><a href="/contact" className="hover:text-snow transition-colors">Contact Us</a></li>
                <li><a href="/my-account" className="hover:text-snow transition-colors">My Account</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold text-snow uppercase tracking-wider">Trust &amp; Legal</h3>
              <ul className="mt-3 space-y-2 text-xs text-silver-mist">
                <li><a href="/terms-conditions" className="hover:text-snow transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="/privacy-policy" className="hover:text-snow transition-colors">Privacy Policy</a></li>
                <li><a href="/refund-policy" className="hover:text-snow transition-colors">Refund Policy</a></li>
                <li><a href="/disclaimer" className="hover:text-snow transition-colors">Disclaimer</a></li>
                <li><a href="/dmca" className="hover:text-snow transition-colors">DMCA Notice</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-charcoal/50">
            <span className="text-[11px] font-semibold text-smoke uppercase tracking-wider block mb-2">Subscription Plans</span>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-silver-mist">
              <li><a href="/iptv-subscription/1-month" className="hover:text-phosphor-green transition-colors">1 Month ($16)</a></li>
              <li>&bull;</li>
              <li><a href="/iptv-subscription/3-months" className="hover:text-phosphor-green transition-colors">3 Months ($39)</a></li>
              <li>&bull;</li>
              <li><a href="/iptv-subscription/6-months" className="hover:text-phosphor-green transition-colors">6 Months ($60)</a></li>
              <li>&bull;</li>
              <li><a href="/iptv-subscription/12-months" className="hover:text-phosphor-green transition-colors">12 Months ($90)</a></li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-xs font-medium text-snow">Newsletter</h4>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal">
        <div className="container-x t-caption flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between text-xs text-smoke">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>&copy; {new Date().getFullYear()} Teleview. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-2">
              <a href="/contact" className="hover:text-silver-mist transition-colors">Support</a>
              <span>&bull;</span>
              <a href="/help-center" className="hover:text-silver-mist transition-colors">Help Center</a>
              <span>&bull;</span>
              <a href="/terms-conditions" className="hover:text-silver-mist transition-colors">Terms</a>
              <span>&bull;</span>
              <a href="/privacy-policy" className="hover:text-silver-mist transition-colors">Privacy</a>
              <span>&bull;</span>
              <a href="/refund-policy" className="hover:text-silver-mist transition-colors">Refunds</a>
              <span>&bull;</span>
              <a href="/disclaimer" className="hover:text-silver-mist transition-colors">Disclaimer</a>
              <span>&bull;</span>
              <a href="/dmca" className="hover:text-silver-mist transition-colors">DMCA</a>
            </div>
          </div>
          <p className="max-w-[560px] text-left sm:text-right">
            <strong>Important:</strong> Teleview is intended for access to content you are authorized to view. Content and channel availability varies by region and may change over time.
          </p>
        </div>
      </div>
    </footer>
  );
}
