import Header from "../components/Header";
import Footer from "../components/Footer";
import { GreenButton, GhostButton } from "../components/ui";
import { AlertCircle, Home, HelpCircle, ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 flex-1 flex items-center" aria-labelledby="not-found-heading">
        <div className="container-x max-w-[800px] text-center mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-glow/10 border border-crimson-glow/30 text-crimson-glow text-xs font-mono font-medium mb-6" aria-hidden="true">
            <AlertCircle className="size-4" />
            <span>HTTP 404 — Not Found</span>
          </div>

          {/* Heading — exactly one H1 per spec */}
          <h1
            id="not-found-heading"
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-snow font-display"
          >
            Page Not Found
          </h1>

          <p className="text-silver-mist text-base sm:text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
            The page you're looking for may have moved, been removed, or the address may have been entered incorrectly.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            <GreenButton href="/" className="inline-flex items-center gap-2">
              <Home className="size-4" aria-hidden="true" />
              <span>Go to Homepage</span>
            </GreenButton>
            <GhostButton href="/help-center" className="inline-flex items-center gap-2">
              <HelpCircle className="size-4" aria-hidden="true" />
              <span>Help Center</span>
            </GhostButton>
          </div>

          {/* Quick Navigation */}
          <nav
            aria-label="Useful pages"
            className="rounded-xl border border-glass-edge bg-glass-surface/50 p-6 sm:p-8 text-left max-w-[640px] mx-auto"
          >
            <p className="text-sm font-semibold text-snow mb-4">
              You may be looking for one of these pages:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li>
                <a
                  href="/iptv-subscription"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-phosphor-green rounded"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green flex-shrink-0" aria-hidden="true" />
                  <span>IPTV Subscription</span>
                </a>
              </li>
              <li>
                <a
                  href="/iptv-pricing"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-phosphor-green rounded"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green flex-shrink-0" aria-hidden="true" />
                  <span>IPTV Pricing</span>
                </a>
              </li>
              <li>
                <a
                  href="/iptv-free-trial"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-phosphor-green rounded"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green flex-shrink-0" aria-hidden="true" />
                  <span>Free Trial</span>
                </a>
              </li>
              <li>
                <a
                  href="/devices"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-phosphor-green rounded"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green flex-shrink-0" aria-hidden="true" />
                  <span>Devices</span>
                </a>
              </li>
              <li>
                <a
                  href="/iptv-players"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-phosphor-green rounded"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green flex-shrink-0" aria-hidden="true" />
                  <span>IPTV Players</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-phosphor-green rounded"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green flex-shrink-0" aria-hidden="true" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          <p className="mt-6 text-silver-mist text-sm">
            Need help?{" "}
            <a
              href="/help-center"
              className="text-phosphor-green hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-phosphor-green rounded"
            >
              Visit our Help Center
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

