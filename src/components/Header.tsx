import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GhostButton, GreenButton, Logo } from "./ui";
import { site } from "../data/site";

const navLinks = [
  { label: "Subscription", href: "/iptv-subscription" },
  { label: "Stream", href: "/#highlights" },
  { label: "Coverage", href: "/#coverage" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Setup", href: "/setup" },
];

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

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-normal text-silver-mist transition-colors duration-200 hover:text-snow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <GhostButton href={site.emailHref} className="text-[13px]">
            Need Help
          </GhostButton>
          <GreenButton href="#pricing" className="text-[13px]">
            Get It Now!
          </GreenButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-slate text-snow lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-charcoal bg-obsidian lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/60 py-3.5 text-sm text-silver-mist last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <GhostButton href={site.emailHref} className="flex-1">
                Need Help
              </GhostButton>
              <GreenButton href="#pricing" className="flex-1">
                Get It Now!
              </GreenButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
