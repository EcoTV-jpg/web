import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
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
  ChevronRight,
  ChevronDown,
  MessageCircle,
  Mail,
  CheckCircle2,
  ExternalLink,
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
];

const categories = [
  "All Categories",
  "Account & Activation",
  "Setup Guides",
  "Streaming & Buffering",
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

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[960px]">
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
                <span className="text-smoke">Support</span>
              </li>
              <li>
                <ChevronRight className="size-3 text-smoke" aria-hidden="true" />
              </li>
              <li>
                <span className="text-phosphor-green font-medium">Help Center</span>
              </li>
            </ol>
          </nav>

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
          <div className="mt-14 grid sm:grid-cols-3 gap-4">
            <a href="/setup" className="card p-5 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/40 transition-colors group">
              <Tv className="size-5 text-phosphor-green mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-snow">Installation Guide</h3>
              <p className="text-xs text-silver-mist mt-1">Step-by-step setup guides for all streaming platforms.</p>
            </a>

            <a href="/my-account" className="card p-5 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/40 transition-colors group">
              <Shield className="size-5 text-phosphor-green mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-snow">My Account</h3>
              <p className="text-xs text-silver-mist mt-1">Check subscription status and playlist credentials.</p>
            </a>

            <a href="/faq" className="card p-5 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/40 transition-colors group">
              <HelpCircle className="size-5 text-phosphor-green mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-semibold text-snow">General FAQ</h3>
              <p className="text-xs text-silver-mist mt-1">Quick answers to billing and trial questions.</p>
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
