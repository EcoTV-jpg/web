import { useState } from "react";
import { Check, ShieldCheck, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GhostButton, GreenButton } from "./ui";
import { plans, pricingHeader } from "../data/site";

const deviceOptions = [
  { count: 1, label: "1 Device" },
  { count: 2, label: "2 Devices" },
  { count: 3, label: "3 Devices" },
  { count: 4, label: "4 Devices" },
];

/* Pricing multipliers for device connections */
const devicePricing: Record<number, Record<string, { price: string; billing: string; save?: string }>> = {
  1: {
    "1 Month": { price: "$16", billing: "/ 1 month" },
    "3 Months": { price: "$39", billing: "/ 3 months" },
    "6 Months": { price: "$60", billing: "/ 6 months" },
    "12 Months": { price: "$90", billing: "/ 12 months", save: "Best Value — Save $102" },
  },
  2: {
    "1 Month": { price: "$26", billing: "/ 1 month" },
    "3 Months": { price: "$59", billing: "/ 3 months" },
    "6 Months": { price: "$89", billing: "/ 6 months" },
    "12 Months": { price: "$139", billing: "/ 12 months", save: "Best Value — Save $173" },
  },
  3: {
    "1 Month": { price: "$36", billing: "/ 1 month" },
    "3 Months": { price: "$79", billing: "/ 3 months" },
    "6 Months": { price: "$119", billing: "/ 6 months" },
    "12 Months": { price: "$189", billing: "/ 12 months", save: "Best Value — Save $243" },
  },
  4: {
    "1 Month": { price: "$46", billing: "/ 1 month" },
    "3 Months": { price: "$99", billing: "/ 3 months" },
    "6 Months": { price: "$149", billing: "/ 6 months" },
    "12 Months": { price: "$239", billing: "/ 12 months", save: "Best Value — Save $313" },
  },
};

/* Monochrome payment marks */
function PaymentMarks() {
  return (
    <div
      className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-smoke"
      aria-label="Accepted payment methods"
    >
      <span className="text-[14px] font-medium italic tracking-wide">VISA</span>
      <svg viewBox="0 0 40 22" className="h-[18px] w-auto" aria-hidden="true">
        <circle cx="15" cy="11" r="9" fill="var(--color-graphite)" />
        <circle cx="25" cy="11" r="9" fill="var(--color-smoke)" fillOpacity="0.75" />
      </svg>
      <span className="rounded-[4px] border border-charcoal px-2 py-1 text-[10px] font-medium tracking-wider">AMEX</span>
      <span className="text-[13px] font-medium italic">PayPal</span>
      <span className="flex items-center gap-1.5 text-[12px] font-medium lowercase tracking-tight">
        <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
          <circle cx="10" cy="10" r="8.5" fill="none" stroke="currentColor" strokeWidth={2} />
          <path d="M10 5.2c2.7 0 4.8 2.1 4.8 4.8h-2.4a2.4 2.4 0 1 0 0 0zM14.8 10c0 2.7-2.1 4.8-4.8 4.8z" fill="currentColor" />
        </svg>
        Crypto
      </span>
    </div>
  );
}

export default function Pricing() {
  const [selectedDevices, setSelectedDevices] = useState(1);

  return (
    <section id="pricing" className="section-y relative scroll-mt-16" aria-labelledby="pricing-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {pricingHeader.kicker || "Teleview Pricing"}
          </p>
          <h2 id="pricing-heading" className="t-h2 mt-4 text-balance">
            Teleview IPTV <Accent>Subscription Plans</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[620px] text-silver-mist leading-relaxed">
            {pricingHeader.subhead}
          </p>

          {/* Interactive Device Selector */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {deviceOptions.map((opt) => {
              const isActive = selectedDevices === opt.count;
              return (
                <button
                  key={opt.count}
                  type="button"
                  onClick={() => setSelectedDevices(opt.count)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-phosphor-green text-obsidian font-semibold shadow-[0_0_16px_rgba(62,207,142,0.35)]"
                      : "border border-charcoal bg-ash text-silver-mist hover:border-graphite hover:text-snow"
                  }`}
                  aria-pressed={isActive}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => {
            const activeData = devicePricing[selectedDevices]?.[plan.name] || {
              price: plan.price,
              billing: plan.billingText,
              save: plan.save,
            };

            return (
              <Reveal key={plan.name} delay={i * 0.07} className="h-full">
                <article
                  className={`card card-hover relative flex h-full flex-col p-6 sm:p-7 ${
                    plan.mostValue ? "border-phosphor-green/50 shadow-[0_0_24px_-8px_rgba(62,207,142,0.15)]" : ""
                  }`}
                >
                  {/* High Performance Server badge */}
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-phosphor-green/15 border border-phosphor-green/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-phosphor-green">
                      {plan.badge || "High Performance Server"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-snow">{plan.name}</h3>
                    <span className="text-[11px] font-medium text-smoke">
                      {selectedDevices} {selectedDevices === 1 ? "Device" : "Devices"}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="mt-3 flex items-baseline gap-2.5">
                    <span className="t-heading-sm leading-none text-snow">{activeData.price}</span>
                    {plan.originalPrice && selectedDevices === 1 && (
                      <span className="text-base font-normal text-smoke line-through">{plan.originalPrice}</span>
                    )}
                    {activeData.save && (
                      <span className="text-xs font-semibold text-phosphor-green">{activeData.save}</span>
                    )}
                  </div>

                  {/* Billing subtext */}
                  <p className="t-caption mt-1.5 text-xs text-silver-mist">{activeData.billing}</p>

                  {/* Divider */}
                  <div className="relative my-4 flex items-center justify-center">
                    <div className="h-px w-full bg-charcoal" aria-hidden="true" />
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="t-body-sm flex items-start gap-2 text-xs sm:text-[13px] text-silver-mist">
                        <Check className="mt-[2px] size-3.5 shrink-0 text-phosphor-green" strokeWidth={2.5} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Footer */}
                  <div className="mt-auto pt-6 space-y-2.5">
                    {(() => {
                      const deviceNote = selectedDevices > 1 ? ` (${selectedDevices} Devices)` : "";
                      const msg = `Hello, I would like to order the ${plan.name} plan (${activeData.price}) for all pack${deviceNote}`;
                      const waUrl = `https://wa.me/447848197761?text=${encodeURIComponent(msg)}`;

                      return plan.mostValue ? (
                        <GreenButton
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold shadow-lg shadow-phosphor-green/10"
                        >
                          <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
                          <span>Order on WhatsApp</span>
                        </GreenButton>
                      ) : (
                        <GhostButton
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold hover:border-phosphor-green/50"
                        >
                          <MessageCircle className="size-4 shrink-0 text-phosphor-green" aria-hidden="true" />
                          <span>Order on WhatsApp</span>
                        </GhostButton>
                      );
                    })()}

                    {plan.slug && (
                      <a
                        href={`/iptv-subscription/${plan.slug}`}
                        className="block text-center text-[11px] text-silver-mist hover:text-snow hover:underline transition-colors pt-1"
                      >
                        View {plan.name} features &amp; details &rarr;
                      </a>
                    )}

                    {/* Guarantee sub-notes */}
                    <div className="pt-2 text-center text-[11px] text-smoke">
                      <p className="flex items-center justify-center gap-1.5">
                        <ShieldCheck className="size-3.5 text-phosphor-green shrink-0" aria-hidden="true" />
                        <span>{plan.guaranteeText || "14-day money-back guarantee"}</span>
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <PaymentMarks />
        </Reveal>
      </div>
    </section>
  );
}
