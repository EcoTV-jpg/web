import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Brand mark — phosphor bolt + lowercase wordmark, green X
------------------------------------------------------------------- */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Teleview home" className={`flex select-none items-center gap-2 ${className}`}>
      <svg viewBox="0 0 20 20" className="size-[18px]" aria-hidden="true">
        <path
          d="M13.4 1.6 5.2 10.4h3.9L6.4 18.4l8.2-8.8h-3.9l2.7-8Z"
          fill="var(--color-phosphor-green)"
        />
      </svg>
      <span className="text-[15px] font-medium tracking-[-0.007em] text-snow">
        Teleview
      </span>
    </a>
  );
}

/* ------------------------------------------------------------------
   Accent — emphasized keyword in phosphor green (color does the work)
------------------------------------------------------------------- */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="text-phosphor-green">{children}</span>;
}

/* ------------------------------------------------------------------
   Buttons — pill vocabulary only
------------------------------------------------------------------- */
export function GreenButton({
  children,
  href = "#pricing",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={`btn-green ${className}`}>
      {children}
    </a>
  );
}

export function GhostButton({
  children,
  href = "#pricing",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={`btn-ghost ${className}`}>
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------
   Decorative graphite wire-frame accent used inside cards
------------------------------------------------------------------- */
export function WireDeco() {
  return (
    <svg viewBox="0 0 72 72" className="wire-deco size-[60px]" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="48" cy="48" r="22" />
        <circle cx="48" cy="48" r="13" />
        <circle cx="48" cy="48" r="5" />
        <path d="M8 24v-16h16" />
        <path d="M8 8l14 10" />
      </g>
      <circle cx="48" cy="48" r="1.8" fill="var(--color-phosphor-green)" stroke="none" />
    </svg>
  );
}
