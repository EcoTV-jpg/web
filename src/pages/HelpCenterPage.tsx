import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton } from "../components/ui";
import { site } from "../data/site";
import {
  Search,
  BookOpen,
  LifeBuoy,
  Tv,
  Wifi,
  Smartphone,
  Shield,
  HelpCircle,
  ChevronDown,
  MessageCircle,
  Mail,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string[];
}

const articles: Article[] = [
  {
    id: "credentials-delivery",
    category: "Account & Activation",
    title: "When and how will I receive my IPTV credentials?",
    excerpt: "Activation details are dispatched automatically to your checkout email.",
    content: [
      "Your subscription details (Username, Password, Server URL, and M3U playlist link) are generated and sent to your email immediately upon confirmed checkout.",
      "Delivery typically takes between 5 to 15 minutes.",
      "If you do not see our email, please check your Spam, Junk, and Promotions folders. You can also message our WhatsApp support with your order number for instant delivery."
    ],
  },
  {
    id: "multiple-devices",
    category: "Account & Activation",
    title: "How many devices can I stream on simultaneously?",
    excerpt: "Understand connection limits and multi-device rules.",
    content: [
      "Standard Teleview subscriptions include 1 active concurrent connection, which can be configured across any number of devices (e.g. TV at home, phone on the go), provided only one streams at any given time.",
      "To stream on multiple TVs or screens simultaneously in the same household, select a multi-screen plan or contact our support team to add additional line licenses."
    ],
  },
  {
    id: "firestick-setup",
    category: "Setup Guides",
    title: "How to set up Teleview on Amazon Firestick 4K & Lite",
    excerpt: "Quick installation walkthrough using Downloader and TiviMate.",
    content: [
      "1. Install the Downloader app from the Amazon Appstore.",
      "2. Enable 'Install Unknown Apps' for Downloader in Fire TV Settings > Developer Options.",
      "3. Enter the quick code or URL for TiviMate or IPTV Smarters Pro.",
      "4. Launch the app, select 'Xtream Codes API', enter your server URL, username, and password from your welcome email, and enjoy!"
    ],
  },
  {
    id: "smart-tv-setup",
    category: "Setup Guides",
    title: "How to install Teleview on Samsung & LG Smart TVs",
    excerpt: "Native installation via IBO Player or SmartOne IPTV.",
    content: [
      "1. Open the Samsung Smart Hub or LG Content Store on your TV.",
      "2. Search for and install 'IBO Player' or 'SmartOne IPTV'.",
      "3. Open the app and note down your TV MAC Address and Device Key displayed on screen.",
      "4. Visit the player's web portal to upload your Teleview M3U link or Xtream API credentials.",
      "5. Reload the app on your TV and all 25,000+ channels and VOD folders will populate."
    ],
  },
  {
    id: "buffering-fix",
    category: "Streaming & Buffering",
    title: "How to eliminate buffering and stream freezing",
    excerpt: "Proven fixes for buffering during marquee sporting events.",
    content: [
      "1. Switch to a 5 GHz Wi-Fi network or use a direct Ethernet cable for optimal stability.",
      "2. Restart your home router and streaming box to clear local DNS caches.",
      "3. Turn on a VPN. Many internet service providers (ISPs) actively throttle live IPTV streams during peak live sports hours; an encrypted VPN bypasses ISP throttling.",
      "4. In your player app settings, set 'Buffer Size' to Normal or Large (1–2 seconds) to absorb packet variance."
    ],
  },
  {
    id: "internet-speed",
    category: "Streaming & Buffering",
    title: "What internet speed is recommended for 4K streaming?",
    excerpt: "Bandwidth guidelines for HD, FHD, and 4K Ultra HD video.",
    content: [
      "Standard Definition (SD): 8 Mbps minimum.",
      "High Definition (HD / 1080p): 15 Mbps stable download speed.",
      "4K Ultra HD & 60 FPS Sports: 30+ Mbps dedicated bandwidth.",
      "Test your real-time connection speed at fast.com before streaming."
    ],
  },
  {
    id: "player-apps-difference",
    category: "Player Applications",
    title: "Why does my player app say expired when my subscription is active?",
    excerpt: "Crucial difference between your IPTV subscription and third-party player apps.",
    content: [
      "Your Teleview subscription provides your content and server stream. The player app (such as IBO Player, Hot Player, or TiviMate) is an independent third-party tool.",
      "Some third-party players offer a 7-day trial before requiring their own software activation fee. This fee belongs to the app developer, not Teleview.",
      "If you do not want to purchase the player app, simply switch to a 100% free player like IPTV Smarters Lite or XCIPTV and log in with your same Teleview credentials!"
    ],
  },
  {
    id: "renew-subscription",
    category: "Account & Activation",
    title: "How do I renew my subscription without changing my playlist?",
    excerpt: "Seamless renewal process keeping your existing login active.",
    content: [
      "You do not need to reconfigure your apps or reload your playlists when renewing. Simply choose your renewal plan on our Pricing page and enter your current registered email.",
      "Our automated system will extend your existing account expiration date without altering your username or password."
    ],
  },
  {
    id: "http-401-error",
    category: "Troubleshooting & Errors",
    title: "How to resolve 'HTTP 401 Unauthorized' (Invalid Credentials Error)",
    excerpt: "What the 401 error means and practical checks to resolve invalid credentials.",
    content: [
      "What the error means: An HTTP 401 Unauthorized status commonly indicates that your IPTV player is submitting invalid or incorrect credentials to the streaming server, or an authentication handshake has failed.",
      "What to check: (1) Verify Username and Password against your Teleview welcome email or WhatsApp delivery (credentials are strictly case-sensitive); (2) Verify the Server URL protocol (http:// vs https://) and port number without an extra trailing slash; (3) Re-enter credentials manually without extra spaces (copying and pasting on mobile or Firestick remotes frequently appends hidden whitespace); (4) If setting up for the first time, follow our step-by-step Setup Guide (/setup) to confirm app configuration.",
      "If credentials are confirmed correct and the error persists, contact Teleview 24/7 support via WhatsApp (+44 7848 197761) with your order ID for an instant authentication status check."
    ],
  },
  {
    id: "http-403-error",
    category: "Troubleshooting & Errors",
    title: "How to resolve 'HTTP 403 Forbidden' (Access Denied Error)",
    excerpt: "What the 403 error means and practical checks to verify account and connection status.",
    content: [
      "What the error means: An HTTP 403 Forbidden status indicates that the streaming server recognized the connection request but access is currently denied by the service or server configuration.",
      "Possible checks: (1) Confirm your subscription and account status to ensure your active period has not expired; (2) Confirm your credentials match your assigned player profile; (3) Restart your player application and streaming device to clear stale background sessions; (4) Test the connection again after restarting.",
      "If the issue persists, contact Teleview support to review your service provisioning. Note: 403 errors can stem from multiple configuration variables; our technical desk can verify your line state immediately."
    ],
  },
  {
    id: "m3u-parsing-error",
    category: "Troubleshooting & Errors",
    title: "How to fix 'Playlist Timeout' or M3U Connection Failures",
    excerpt: "What connection timeouts mean and practical checks to restore stream synchronization.",
    content: [
      "What the error means: A playlist timeout means the player could not complete the network connection to the playlist or server endpoint within the allowed time threshold.",
      "Practical checks: (1) Check your local internet connection speed and stability; (2) Restart your home router and streaming device to clear local routing tables; (3) Try another network if available (such as a temporary mobile hotspot) to isolate local ISP routing issues; (4) Check DNS or network filtering as a possible cause—switch your device DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8) to bypass potential ISP filtering; (5) Re-enter the playlist or server URL information to ensure syntax accuracy; (6) Prefer Xtream Codes API over raw M3U files when possible, as it loads categories dynamically with lower memory overhead.",
      "Contact Teleview support if the connection consistently times out so our technical team can test regional server routing."
    ],
  },
  {
    id: "isp-dns-blocking",
    category: "Streaming & Buffering",
    title: "How to bypass ISP DNS blocking during live sports events",
    excerpt: "Configure secure DNS or VPN to prevent premier sporting event blackouts.",
    content: [
      "1. Change your DNS server: Many major ISPs block IPTV server domains during live Premier League or UEFA matches using DNS interception. Change your streaming device DNS to Cloudflare (Primary: 1.1.1.1, Secondary: 1.0.0.1) or Google (8.8.8.8, 8.8.4.4).",
      "2. Connect a secure VPN: If your ISP uses deep packet inspection (DPI), turn on a reliable VPN (such as ExpressVPN, NordVPN, or Surfshark). Teleview infrastructure is 100% VPN-friendly with zero geo-locking.",
      "3. Use mobile hotspot to diagnose: If streaming instantly works over 4G/5G mobile hotspot, your home ISP is actively throttling your connection."
    ],
  },
];

const categories = [
  "All Categories",
  "Account & Activation",
  "Setup Guides",
  "Streaming & Buffering",
  "Troubleshooting & Errors",
  "Player Applications",
];

export default function HelpCenterPage() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>("credentials-delivery");

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = activeCategory === "All Categories" || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.content.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Help Center", url: "/help-center" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[960px]">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Section */}
          <Reveal className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/20 bg-phosphor-green/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-phosphor-green">
              <BookOpen className="size-3.5" aria-hidden="true" />
              <span>Knowledge Base &amp; Documentation</span>
            </div>

            <h1 className="t-h1 mt-4 text-balance">
              Help Center &amp; <Accent>Knowledge Base</Accent>
            </h1>

            <p className="t-body mt-3 max-w-[700px] text-silver-mist">
              Comprehensive walkthroughs, optimization techniques, and instant solutions for your Teleview IPTV streaming service.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs text-silver-mist">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-phosphor-green/30 bg-phosphor-green/10 px-3 py-1 font-medium text-phosphor-green">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                Updated &amp; Fact-Checked for 2026
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-charcoal bg-ash/60 px-3 py-1 text-smoke">
                Reviewed by Teleview Technical Operations Desk
              </span>
            </div>

            {/* Live Search Bar */}
            <div className="relative mt-8 max-w-[620px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-smoke" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search troubleshooting guides, buffering fixes, setup..."
                className="w-full rounded-xl border border-charcoal bg-ash/40 py-3.5 pl-11 pr-4 text-sm text-snow placeholder:text-smoke focus:border-phosphor-green focus:bg-ash/70 focus:outline-none transition-all shadow-inner"
              />
            </div>
          </Reveal>

          {/* Quick Diagnostic Troubleshooting Cards (P0 Priority) */}
          <section className="mb-10" aria-labelledby="diagnostic-cards-heading">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="size-4 text-phosphor-green" aria-hidden="true" />
              <h2 id="diagnostic-cards-heading" className="text-sm sm:text-base font-semibold text-snow">
                Common Connection Error Diagnostics
              </h2>
            </div>
            <p className="text-xs text-silver-mist mb-5">
              Quick answer-first diagnostic steps to resolve authentication, access, and playlist timeout errors:
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Card A: HTTP 401 Unauthorized */}
              <article className="card p-5 border-charcoal bg-ash/30 flex flex-col justify-between">
                <div>
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono font-semibold text-phosphor-green uppercase">
                    Authentication Error
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-snow">
                    HTTP 401 Unauthorized
                  </h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">What it means:</strong> Commonly indicates invalid or incorrect IPTV credentials or an authentication handshake failure.
                  </p>
                  <div className="mt-3 space-y-1.5 text-[11px] text-silver-mist border-t border-charcoal/60 pt-3">
                    <p className="font-semibold text-snow">What to check:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Verify username and password (strictly case-sensitive).</li>
                      <li>Verify server/portal URL protocol and port.</li>
                      <li>Re-enter credentials without extra spaces.</li>
                      <li>Follow the <a href="/setup" className="text-phosphor-green hover:underline">Setup Guide</a> for syntax checks.</li>
                      <li>If service stopped unexpectedly, review our <a href="/help-center/not-working" className="text-phosphor-green hover:underline">Diagnostic Checklist</a>.</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60 text-[11px] text-smoke">
                  If credentials are correct, contact Teleview support.
                </div>
              </article>

              {/* Card B: HTTP 403 Forbidden */}
              <article className="card p-5 border-charcoal bg-ash/30 flex flex-col justify-between">
                <div>
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono font-semibold text-phosphor-green uppercase">
                    Access Denied
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-snow">
                    HTTP 403 Forbidden
                  </h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">What it means:</strong> Access is denied by the service or server configuration.
                  </p>
                  <div className="mt-3 space-y-1.5 text-[11px] text-silver-mist border-t border-charcoal/60 pt-3">
                    <p className="font-semibold text-snow">Possible checks:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Confirm active subscription and account status.</li>
                      <li>Confirm credentials match your assigned profile.</li>
                      <li>Restart the player application and device.</li>
                      <li>Review our <a href="/help-center/connection-problems" className="text-phosphor-green hover:underline">Connection Problems Guide</a>.</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60 text-[11px] text-smoke">
                  Contact Teleview support if the issue persists.
                </div>
              </article>

              {/* Card C: M3U Playlist Timeout */}
              <article className="card p-5 border-charcoal bg-ash/30 flex flex-col justify-between">
                <div>
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono font-semibold text-phosphor-green uppercase">
                    Connection Timeout
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-snow">
                    M3U Playlist Timeout
                  </h3>
                  <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                    <strong className="text-snow">What it means:</strong> The player could not complete the network connection within the time threshold.
                  </p>
                  <div className="mt-3 space-y-1.5 text-[11px] text-silver-mist border-t border-charcoal/60 pt-3">
                    <p className="font-semibold text-snow">Practical checks:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Check internet connection stability.</li>
                      <li>Restart router and streaming device.</li>
                      <li>Try another network (e.g. mobile hotspot).</li>
                      <li>Check DNS/network filtering (try 1.1.1.1 or 8.8.8.8).</li>
                      <li>Read our <a href="/help-center/connection-problems" className="text-phosphor-green hover:underline">Connection Problems Guide</a>.</li>
                      <li>If video fails to open, see <a href="/help-center/channels-not-loading" className="text-phosphor-green hover:underline">Channels Not Loading</a>.</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-charcoal/60 text-[11px] text-smoke">
                  Contact support if connection consistently times out.
                </div>
              </article>
            </div>
          </section>

          {/* Section: Dedicated Troubleshooting & Diagnostic Guides */}
          <section className="mb-12" aria-labelledby="troubleshooting-guides-heading">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 id="troubleshooting-guides-heading" className="text-base sm:text-lg font-bold text-snow">
                  Dedicated Troubleshooting &amp; Diagnostic Manuals
                </h2>
                <p className="text-xs text-silver-mist mt-1">
                  In-depth technical guides with root cause analyses, bandwidth benchmarks, and step-by-step resolution workflows:
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/help-center/buffering"
                className="rounded-xl border border-charcoal bg-ash/30 p-5 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                    Performance Fix
                  </span>
                  <ArrowRight className="size-3.5 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                  Fix IPTV Buffering &amp; Freezing
                </h3>
                <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                  Eliminate stream stuttering, packet jitter, ISP throttling, and cache delays during marquee sports events.
                </p>
              </a>

              <a
                href="/help-center/not-working"
                className="rounded-xl border border-charcoal bg-ash/30 p-5 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                    Complete Checklist
                  </span>
                  <ArrowRight className="size-3.5 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                  IPTV Not Working? Diagnostic Guide
                </h3>
                <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                  A structured 7-step triage from router ping and DNS inspection to subscription status verification.
                </p>
              </a>

              <a
                href="/help-center/epg-not-working"
                className="rounded-xl border border-charcoal bg-ash/30 p-5 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                    EPG Schedule
                  </span>
                  <ArrowRight className="size-3.5 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                  Fix EPG Not Loading or Blank Schedules
                </h3>
                <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                  Resolve missing program info, XMLTV parsing timeouts, and timezone synchronization offsets.
                </p>
              </a>

              <a
                href="/help-center/channels-not-loading"
                className="rounded-xl border border-charcoal bg-ash/30 p-5 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                    Video &amp; Audio
                  </span>
                  <ArrowRight className="size-3.5 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                  Channels Not Loading &amp; Black Screen
                </h3>
                <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                  Fix audio-only playback, hardware decoder mismatches, and H.265/AV1 video codec incompatibilities.
                </p>
              </a>

              <a
                href="/help-center/connection-problems"
                className="rounded-xl border border-charcoal bg-ash/30 p-5 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                    Network &amp; DNS
                  </span>
                  <ArrowRight className="size-3.5 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                  Connection Problems &amp; Network Timeouts
                </h3>
                <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                  Diagnose handshake failures, ISP server blocking, firewall filtering, and secure DNS bypass methods.
                </p>
              </a>

              <a
                href="/help-center/internet-speed"
                className="rounded-xl border border-charcoal bg-ash/30 p-5 hover:border-phosphor-green/40 transition-colors group block"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-phosphor-green/15 border border-phosphor-green/30 px-2 py-0.5 text-[10px] font-mono text-phosphor-green uppercase">
                    Bandwidth Matrix
                  </span>
                  <ArrowRight className="size-3.5 text-smoke group-hover:text-phosphor-green transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-snow group-hover:text-phosphor-green transition-colors">
                  Internet Speed Needed for IPTV
                </h3>
                <p className="mt-1.5 text-xs text-silver-mist leading-relaxed">
                  Bandwidth requirements for SD, Full HD, 4K HDR, multi-screen streaming, and Wi-Fi vs Ethernet benchmarks.
                </p>
              </a>
            </div>
          </section>

          {/* Category Filter Pills */}
          <div className="mb-8 flex flex-wrap gap-2 border-b border-charcoal/60 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-phosphor-green text-obsidian font-semibold shadow-sm"
                    : "bg-ash/30 text-silver-mist hover:bg-ash hover:text-snow border border-charcoal/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Accordion List */}
          <div className="space-y-4">
            {filteredArticles.length === 0 ? (
              <div className="card p-10 text-center text-silver-mist">
                <HelpCircle className="mx-auto size-10 text-smoke mb-3" />
                <p className="text-sm font-medium text-snow">No articles found matching "{searchQuery}"</p>
                <p className="text-xs text-smoke mt-1">Try another search keyword or contact our 24/7 WhatsApp support desk.</p>
              </div>
            ) : (
              filteredArticles.map((article) => {
                const isExpanded = expandedId === article.id;
                return (
                  <div
                    key={article.id}
                    className={`card transition-all border ${
                      isExpanded ? "border-phosphor-green/40 bg-ash/40" : "border-charcoal/70 bg-ash/20 hover:border-charcoal"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : article.id)}
                      className="flex w-full items-center justify-between p-5 text-left"
                      aria-expanded={isExpanded}
                    >
                      <div>
                        <span className="text-[11px] font-mono text-phosphor-green uppercase tracking-wider block mb-1">
                          {article.category}
                        </span>
                        <h2 className="text-sm sm:text-base font-semibold text-snow">{article.title}</h2>
                        <p className="text-xs text-silver-mist mt-1">{article.excerpt}</p>
                      </div>
                      <ChevronDown
                        className={`size-5 text-smoke shrink-0 ml-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-phosphor-green" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="border-t border-charcoal/50 px-5 pb-5 pt-4 text-xs sm:text-sm text-silver-mist space-y-3 leading-relaxed">
                        {article.content.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Quick Hub Navigation Cards */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/setup" className="card p-5 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/40 transition-colors group">
              <Tv className="size-5 text-phosphor-green mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-snow">Installation Guide</h3>
              <p className="text-xs text-silver-mist mt-1">Step-by-step setup guides for all streaming platforms.</p>
            </a>

            <a href="/devices" className="card p-5 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/40 transition-colors group">
              <Smartphone className="size-5 text-phosphor-green mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-snow">Supported Devices</h3>
              <p className="text-xs text-silver-mist mt-1">Hardware requirements and recommended IPTV players.</p>
            </a>

            <a href="/iptv-subscription" className="card p-5 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/40 transition-colors group">
              <LifeBuoy className="size-5 text-phosphor-green mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-snow">Subscription Plans</h3>
              <p className="text-xs text-silver-mist mt-1">Compare 1, 3, 6, and 12-month packages and savings.</p>
            </a>

            <a href="/my-account" className="card p-5 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/40 transition-colors group">
              <Shield className="size-5 text-phosphor-green mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-snow">My Account</h3>
              <p className="text-xs text-silver-mist mt-1">Check subscription status and playlist credentials.</p>
            </a>
          </div>

          {/* Direct Support Contact Bar */}
          <div className="mt-12 card p-7 border border-phosphor-green/20 bg-phosphor-green/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-base font-semibold text-snow">Can't find the answer you need?</h3>
              <p className="text-xs text-silver-mist mt-1">Our technical support engineers are online 24/7 on WhatsApp.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green text-xs"
              >
                <MessageCircle className="mr-2 size-4" />
                Live Chat ({site.whatsappDisplay})
              </a>
              <a href="/contact" className="btn-ghost text-xs">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
