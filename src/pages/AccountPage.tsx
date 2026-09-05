import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import Breadcrumbs from "../components/Breadcrumbs";
import { Accent, GreenButton, WhatsAppIcon } from "../components/ui";
import { site } from "../data/site";
import {
  User,
  Search,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  RefreshCw,
  Clock,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Mail,
  Zap,
} from "lucide-react";

export default function AccountPage() {
  const [lookupInput, setLookupInput] = useState("");
  const [searched, setSearched] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (lookupInput.trim().length > 0) {
      setSearched(true);
    }
  };

  const copyDemoXtream = () => {
    navigator.clipboard.writeText("http://teleview-tv.me:8080");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "My Account", url: "/my-account" },
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-obsidian font-sans text-snow antialiased">
      <Header />
      <main className="pb-20 pt-12 sm:pb-24 sm:pt-16">
        <div className="container-x max-w-[960px]">
          {/* Breadcrumb */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Hero Header */}
          <Reveal className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-phosphor-green/20 bg-phosphor-green/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-phosphor-green">
              <User className="size-3.5" aria-hidden="true" />
              <span>Subscriber Self-Service Portal</span>
            </div>

            <h1 className="t-h1 mt-4 text-balance">
              My Account &amp; <Accent>Subscription Status</Accent>
            </h1>

            <p className="t-body mt-3 max-w-[680px] text-silver-mist">
              Look up your active subscription details, resend credentials to your email, check expiration status, or renew your service in seconds.
            </p>
          </Reveal>

          {/* Subscription Lookup Card */}
          <Reveal className="mb-12">
            <div className="card p-6 sm:p-8 border border-charcoal/80 bg-ash/30">
              <h2 className="t-h3 text-base sm:text-lg text-snow flex items-center gap-2">
                <Search className="size-4 text-phosphor-green" />
                Subscription Status &amp; Credentials Lookup
              </h2>
              <p className="text-xs text-silver-mist mt-1">
                Enter your registered checkout email address or Teleview order reference (e.g. TL-2026-XXXX).
              </p>

              <form onSubmit={handleLookup} className="mt-5 flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={lookupInput}
                  onChange={(e) => setLookupInput(e.target.value)}
                  placeholder="Enter email address or order ID..."
                  required
                  className="flex-1 rounded-xl border border-charcoal bg-obsidian/80 px-4 py-3 text-xs sm:text-sm text-snow placeholder:text-smoke focus:border-phosphor-green focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn-green text-xs sm:text-sm py-3 px-6 whitespace-nowrap flex items-center justify-center gap-2"
                >
                  <Search className="size-4" />
                  Check Status
                </button>
              </form>

              {searched && (
                <div className="mt-6 border-t border-charcoal/60 pt-6 animate-fadeIn">
                  <div className="rounded-xl border border-phosphor-green/40 bg-phosphor-green/5 p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-phosphor-green/20 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-full bg-phosphor-green/20 text-phosphor-green">
                          <CheckCircle2 className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-snow">Active Subscription Found</h3>
                          <span className="text-xs text-silver-mist">Account: {lookupInput}</span>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-phosphor-green/20 px-3 py-1 text-xs font-mono font-medium text-phosphor-green w-fit">
                        <span className="size-1.5 rounded-full bg-phosphor-green animate-pulse" />
                        STATUS: ACTIVE
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 mt-4 text-xs">
                      <div className="bg-ash/40 p-3 rounded-lg border border-charcoal/40">
                        <span className="text-smoke block">Live Channels</span>
                        <span className="font-semibold text-snow mt-1 block">25,000+ Active</span>
                      </div>
                      <div className="bg-ash/40 p-3 rounded-lg border border-charcoal/40">
                        <span className="text-smoke block">Concurrent Lines</span>
                        <span className="font-semibold text-snow mt-1 block">1 Connection (Active)</span>
                      </div>
                      <div className="bg-ash/40 p-3 rounded-lg border border-charcoal/40">
                        <span className="text-smoke block">Edge CDN Status</span>
                        <span className="font-semibold text-phosphor-green mt-1 block">Online &amp; Optimal</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 pt-2">
                      <a
                        href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi Teleview support, I need credentials for ${lookupInput}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-green text-xs flex items-center gap-1.5"
                      >
                        <WhatsAppIcon className="size-3.5" />
                        Resend Credentials via WhatsApp
                      </a>
                      <a
                        href="/iptv-subscription"
                        className="btn-ghost text-xs flex items-center gap-1.5"
                      >
                        <RefreshCw className="size-3.5" />
                        Renew / Extend Subscription
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>

          {/* Quick Extend Options */}
          <Reveal delay={0.2} className="space-y-4">
            <h2 className="t-h3 text-base sm:text-lg text-snow flex items-center gap-2">
              <Clock className="size-4 text-phosphor-green" />
              Quick Renew &amp; Extend Options
            </h2>
            <p className="text-xs sm:text-sm text-silver-mist">
              Need to extend your subscription? Choose a duration below for instant activation on your existing account credentials:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <a
                href={`https://wa.me/447848197761?text=${encodeURIComponent("Hello, I would like to order the 1 Month plan ($16)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/50 transition-all text-center group"
              >
                <span className="text-xs text-smoke font-mono block">1 MONTH</span>
                <span className="text-xl font-bold text-snow mt-1 block">$16</span>
                <span className="text-[11px] text-silver-mist block mt-1">Monthly Billing</span>
                <span className="mt-3 inline-flex items-center justify-center gap-1.5 rounded bg-ash/60 px-2 py-1 text-[10px] text-snow group-hover:bg-phosphor-green group-hover:text-obsidian transition-colors">
                  <WhatsAppIcon className="size-3" />
                  Order via WhatsApp
                </span>
              </a>

              <a
                href={`https://wa.me/447848197761?text=${encodeURIComponent("Hello, I would like to order the 3 Months plan ($39)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/50 transition-all text-center group"
              >
                <span className="text-xs text-smoke font-mono block">3 MONTHS</span>
                <span className="text-xl font-bold text-snow mt-1 block">$39</span>
                <span className="text-[11px] text-phosphor-green block mt-1">Save 19%</span>
                <span className="mt-3 inline-flex items-center justify-center gap-1.5 rounded bg-ash/60 px-2 py-1 text-[10px] text-snow group-hover:bg-phosphor-green group-hover:text-obsidian transition-colors">
                  <WhatsAppIcon className="size-3" />
                  Order via WhatsApp
                </span>
              </a>

              <a
                href={`https://wa.me/447848197761?text=${encodeURIComponent("Hello, I would like to order the 6 Months plan ($60)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 border border-charcoal/70 bg-ash/20 hover:border-phosphor-green/50 transition-all text-center group"
              >
                <span className="text-xs text-smoke font-mono block">6 MONTHS</span>
                <span className="text-xl font-bold text-snow mt-1 block">$60</span>
                <span className="text-[11px] text-phosphor-green block mt-1">Save 37.5%</span>
                <span className="mt-3 inline-flex items-center justify-center gap-1.5 rounded bg-ash/60 px-2 py-1 text-[10px] text-snow group-hover:bg-phosphor-green group-hover:text-obsidian transition-colors">
                  <WhatsAppIcon className="size-3" />
                  Order via WhatsApp
                </span>
              </a>

              <a
                href={`https://wa.me/447848197761?text=${encodeURIComponent("Hello, I would like to order the 12 Months plan ($90)")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-4 border border-phosphor-green/40 bg-phosphor-green/5 hover:border-phosphor-green transition-all text-center group relative overflow-hidden"
              >
                <span className="text-[9px] font-bold uppercase bg-phosphor-green text-obsidian absolute top-0 right-0 px-2 py-0.5 rounded-bl">
                  POPULAR
                </span>
                <span className="text-xs text-smoke font-mono block">12 MONTHS</span>
                <span className="text-xl font-bold text-snow mt-1 block">$90</span>
                <span className="text-[11px] text-phosphor-green font-semibold block mt-1">Save $102</span>
                <span className="mt-3 inline-flex items-center justify-center gap-1.5 rounded bg-phosphor-green text-obsidian font-semibold px-2 py-1 text-[10px]">
                  <WhatsAppIcon className="size-3" />
                  Order via WhatsApp
                </span>
              </a>
            </div>
          </Reveal>

          {/* Xtream API Connection Guide */}
          <div className="card p-6 sm:p-8 border border-charcoal/80 bg-ash/20">
            <h2 className="t-h3 text-base sm:text-lg text-snow flex items-center gap-2">
              <Zap className="size-4 text-phosphor-green" />
              Standard Connection Format Reference
            </h2>
            <p className="text-xs text-silver-mist mt-1 leading-relaxed">
              When configuring players like TiviMate, IPTV Smarters Pro, or IBO Player, use the standard Xtream Codes API parameters provided in your activation dispatch:
            </p>

            <div className="mt-4 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between rounded-lg bg-obsidian/80 p-3 border border-charcoal/60">
                <span className="text-smoke">Server URL:</span>
                <span className="text-phosphor-green font-semibold">Provided in Activation Email</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-obsidian/80 p-3 border border-charcoal/60">
                <span className="text-smoke">Username:</span>
                <span className="text-snow">Your Unique Username</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-obsidian/80 p-3 border border-charcoal/60">
                <span className="text-smoke">Password:</span>
                <span className="text-snow">Your Unique Password</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-smoke">
              Need assistance retrieving your credentials? Contact our WhatsApp desk anytime with your order email, or consult our{" "}
              <a href="/setup#xtream-codes" className="text-phosphor-green hover:underline">
                Xtream Codes Setup Guide
              </a>{" "}
              and{" "}
              <a href="/help-center" className="text-phosphor-green hover:underline">
                Help Center
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
