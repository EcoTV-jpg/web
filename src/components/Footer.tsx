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
        <div className="lg:justify-self-end">
          <h3 className="text-sm font-semibold text-snow uppercase tracking-wider">Explore &amp; Support</h3>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-silver-mist">
            <li><a href="/setup" className="hover:text-snow transition-colors">Setup Guide</a></li>
            <li><a href="/devices" className="hover:text-snow transition-colors">Supported Devices</a></li>
            <li><a href="/faq" className="hover:text-snow transition-colors">FAQ &amp; Support</a></li>
            <li><a href="/#pricing" className="hover:text-snow transition-colors">IPTV Plans</a></li>
          </ul>
          <div className="mt-6">
            <h4 className="text-xs font-medium text-snow">Newsletter</h4>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal">
        <div className="container-x t-caption flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between text-xs text-smoke">
          <p>&copy; {new Date().getFullYear()} Teleview. All rights reserved.</p>
          <p className="max-w-[560px] text-left sm:text-right">
            <strong>Important:</strong> Teleview is intended for access to content you are authorized to view. Content and channel availability varies by region and may change over time.
          </p>
        </div>
      </div>
    </footer>
  );
}
