import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { GhostButton, GreenButton, Logo } from "./ui";
import { site } from "../data/site";

/* ── Dropdown data ───────────────────────────────────────────────── */
const navGroups = [
  {
    label: "Learn",
    items: [
      { label: "What Is IPTV?", href: "/what-is-iptv", desc: "How IPTV works" },
      { label: "Setup Guide", href: "/setup", desc: "Installation & configuration" },
      { label: "FAQ", href: "/faq", desc: "Common questions answered" },
    ],
  },
  {
    label: "Devices",
    items: [
      { label: "All Devices", href: "/devices", desc: "Device compatibility hub" },
      { label: "Amazon Firestick", href: "/devices/firestick", desc: "Fire TV setup guide" },
      { label: "Samsung Smart TV", href: "/devices/samsung-smart-tv", desc: "Tizen OS guide" },
      { label: "LG Smart TV", href: "/devices/lg-smart-tv", desc: "webOS guide" },
      { label: "Android TV", href: "/devices/android-tv", desc: "Nvidia Shield, Mi Box" },
      { label: "Apple TV", href: "/devices/apple-tv", desc: "tvOS 4K guide" },
      { label: "Google TV", href: "/devices/google-tv", desc: "Chromecast guide" },
      { label: "Roku", href: "/devices/roku", desc: "Casting & mirroring" },
      { label: "Formuler", href: "/devices/formuler", desc: "Z-Series MYTVOnline" },
    ],
  },
  {
    label: "Players",
    items: [
      { label: "Compare Players", href: "/best-iptv", desc: "Editorial comparison guide" },
      { label: "Apps Directory", href: "/iptv-players", desc: "Technical protocol index" },
      { label: "TiviMate", href: "/iptv-players/tivimate", desc: "Android TV & Firestick" },
      { label: "IPTV Smarters Pro", href: "/iptv-players/iptv-smarters-pro", desc: "Multi-platform" },
      { label: "IBO Player", href: "/iptv-players/ibo-player", desc: "Samsung & LG Smart TVs" },
      { label: "SmartOne", href: "/iptv-players/smartone", desc: "Tizen, webOS & Vidaa" },
      { label: "GSE Smart IPTV", href: "/iptv-players/gse-smart-iptv", desc: "iOS & Apple TV" },
      { label: "VLC Media Player", href: "/iptv-players/vlc", desc: "Desktop & diagnostics" },
      { label: "OTT Navigator", href: "/iptv-players/ott-navigator", desc: "Android TV power user" },
    ],
  },
  {
    label: "Help",
    items: [
      { label: "Help Center", href: "/help-center", desc: "Troubleshooting knowledge base" },
      { label: "Contact Us", href: "/contact", desc: "WhatsApp & email support" },
      { label: "IPTV Not Working", href: "/help-center/not-working", desc: "Diagnostic checklist" },
      { label: "Fix Buffering", href: "/help-center/buffering", desc: "Stream quality fixes" },
      { label: "FAQ", href: "/faq", desc: "Common questions" },
    ],
  },
];

/* ── Desktop dropdown ────────────────────────────────────────────── */
function DesktopDropdown({ group }: { group: (typeof navGroups)[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-normal text-silver-mist transition-colors duration-200 hover:text-snow"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown
          className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-charcoal bg-obsidian shadow-xl">
          <ul className="py-2">
            {group.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="flex flex-col px-4 py-2.5 transition-colors hover:bg-ash/60 group"
                >
                  <span className="text-sm font-medium text-snow group-hover:text-phosphor-green transition-colors">
                    {item.label}
                  </span>
                  <span className="mt-0.5 text-[11px] text-smoke">{item.desc}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Mobile accordion group ──────────────────────────────────────── */
function MobileGroup({
  group,
  onNavigate,
}: {
  group: (typeof navGroups)[number];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between border-b border-charcoal/60 py-3.5 text-sm text-silver-mist"
        aria-expanded={open}
      >
        <span>{group.label}</span>
        <ChevronDown
          className={`size-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="pb-1">
          {group.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onNavigate}
                className="flex items-center gap-2 py-2.5 pl-4 text-sm text-silver-mist transition-colors hover:text-snow"
              >
                <span className="size-1 shrink-0 rounded-full bg-phosphor-green/60" aria-hidden="true" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* ── Main Header ─────────────────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open ? "border-b border-charcoal bg-obsidian" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          <a
            href="/iptv-subscription"
            className="text-sm font-normal text-silver-mist transition-colors duration-200 hover:text-snow"
          >
            Plans
          </a>
          {navGroups.map((group) => (
            <DesktopDropdown key={group.label} group={group} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <GhostButton href={site.emailHref} className="text-[13px]">
            Need Help
          </GhostButton>
          <GreenButton href="/iptv-subscription" className="text-[13px]">
            Get It Now!
          </GreenButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 min-h-[44px] min-w-[44px] place-items-center rounded-full border border-slate text-snow lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div id="mobile-nav" className="border-t border-charcoal bg-obsidian lg:hidden">
          <nav className="container-x py-4" aria-label="Mobile">
            <ul>
              <li>
                <a
                  href="/iptv-subscription"
                  onClick={() => setOpen(false)}
                  className="block border-b border-charcoal/60 py-3.5 text-sm text-silver-mist transition-colors hover:text-snow"
                >
                  Plans
                </a>
              </li>
              {navGroups.map((group) => (
                <MobileGroup key={group.label} group={group} onNavigate={() => setOpen(false)} />
              ))}
            </ul>
            <div className="flex gap-3 pt-5">
              <GhostButton href={site.emailHref} className="flex-1">
                Need Help
              </GhostButton>
              <GreenButton href="/iptv-subscription" className="flex-1">
                Get It Now!
              </GreenButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
