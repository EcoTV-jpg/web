import Header from "../components/Header";
import Footer from "../components/Footer";
import { GreenButton, GhostButton } from "../components/ui";
import { AlertCircle, Home, HelpCircle, Tv, ArrowRight, LifeBuoy } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-obsidian text-snow selection:bg-forest-depth selection:text-snow flex flex-col justify-between">
      <Header />

      <main className="pt-28 pb-20 flex-1 flex items-center">
        <div className="container-x max-w-[800px] text-center mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-glow/10 border border-crimson-glow/30 text-crimson-glow text-xs font-mono font-medium mb-6">
            <AlertCircle className="size-4" aria-hidden="true" />
            <span>HTTP 404 — Not Found</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-snow font-display">
            Page Not Found
          </h1>

          <p className="text-silver-mist text-base sm:text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
            The page or dynamic guide you requested does not exist, has been retired, or an invalid address was entered.
          </p>

          {/* Action Hub */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            <GreenButton href="/" className="inline-flex items-center gap-2">
              <Home className="size-4" aria-hidden="true" />
              <span>Return to Homepage</span>
            </GreenButton>
            <GhostButton href="/devices" className="inline-flex items-center gap-2">
              <Tv className="size-4" aria-hidden="true" />
              <span>Supported Devices</span>
            </GhostButton>
            <GhostButton href="/help-center" className="inline-flex items-center gap-2">
              <HelpCircle className="size-4" aria-hidden="true" />
              <span>Help Center</span>
            </GhostButton>
          </div>

          {/* Quick Links Card */}
          <div className="rounded-xl border border-glass-edge bg-glass-surface/50 p-6 sm:p-8 text-left max-w-[640px] mx-auto">
            <div className="flex items-center gap-2 text-sm font-semibold text-snow mb-4">
              <LifeBuoy className="size-4 text-phosphor-green" aria-hidden="true" />
              <span>Popular Resources &amp; Guides</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <li>
                <a
                  href="/iptv-subscription"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  <span>IPTV Subscription Plans</span>
                </a>
              </li>
              <li>
                <a
                  href="/setup"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  <span>Setup &amp; Installation Manual</span>
                </a>
              </li>
              <li>
                <a
                  href="/iptv-players"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  <span>IPTV Players Directory</span>
                </a>
              </li>
              <li>
                <a
                  href="/what-is-iptv"
                  className="inline-flex items-center gap-2 text-silver-mist hover:text-phosphor-green transition-colors"
                >
                  <ArrowRight className="size-3.5 text-phosphor-green" aria-hidden="true" />
                  <span>What Is IPTV?</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
