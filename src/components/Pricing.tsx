import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GhostButton, GreenButton, WhatsAppIcon } from "./ui";
import { plans, pricingHeader } from "../data/site";

const deviceOptions = [
  { count: 1, label: "1 Connection (1 Screen)" },
  { count: 2, label: "2 Connections (2 Screens)" },
  { count: 3, label: "3 Connections (3 Screens)" },
  { count: 4, label: "4 Connections (4 Screens)" },
];

/* Multipliers for simultaneous device connections */
const devicePricing: Record<number, Record<string, { price: string; billing: string; effective?: string; save?: string }>> = {
  1: {
    "1 Month": { price: "$16", billing: "/ 1 month", effective: "$16.00/mo" },
    "3 Months": { price: "$39", billing: "/ 3 months", effective: "$13.00/mo", save: "Save 19%" },
    "6 Months": { price: "$60", billing: "/ 6 months", effective: "$10.00/mo", save: "Save 38%" },
    "12 Months": { price: "$90", billing: "/ 12 months", effective: "$7.50/mo", save: "Best Value — Save $102" },
  },
  2: {
    "1 Month": { price: "$26", billing: "/ 1 month" },
    "3 Months": { price: "$59", billing: "/ 3 months" },
    "6 Months": { price: "$89", billing: "/ 6 months" },
    "12 Months": { price: "$139", billing: "/ 12 months", save: "Save $173" },
  },
  3: {
    "1 Month": { price: "$36", billing: "/ 1 month" },
    "3 Months": { price: "$79", billing: "/ 3 months" },
    "6 Months": { price: "$119", billing: "/ 6 months" },
    "12 Months": { price: "$189", billing: "/ 12 months", save: "Save $243" },
  },
  4: {
    "1 Month": { price: "$46", billing: "/ 1 month" },
    "3 Months": { price: "$99", billing: "/ 3 months" },
    "6 Months": { price: "$149", billing: "/ 6 months" },
    "12 Months": { price: "$239", billing: "/ 12 months", save: "Save $313" },
  },
};

/* Neutral payment notice complying with directive 1 */
function PaymentNotice() {
  return (
    <div className="mt-8 text-center text-xs text-smoke max-w-[620px] mx-auto space-y-1.5">
      <p className="font-semibold text-silver-mist">
        Available payment options are confirmed during ordering.
      </p>
      <p className="text-[11px] text-smoke">
        Prepaid plans. No automatic renewal. Subscriptions are one-time payments with zero recurring charges.
      </p>
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
            <Accent>IPTV Subscription Plans</Accent> for Worldwide Streaming
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
          <p className="mt-3 text-[11px] text-smoke max-w-[520px] mx-auto">
            Install credentials on any number of personal devices; the connection count determines how many screens can stream simultaneously.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => {
            const activeData = devicePricing[selectedDevices]?.[plan.name] || {
              price: plan.price,
              billing: plan.billingText,
              effective: undefined,
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
                      {selectedDevices} {selectedDevices === 1 ? "Active Screen" : "Active Screens"}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="mt-3 flex items-baseline gap-2.5">
                    <span className="t-heading-sm leading-none text-snow">{activeData.price}</span>
                    {activeData.effective && (
                      <span className="text-xs font-semibold text-phosphor-green font-mono">{activeData.effective}</span>
                    )}
                    {activeData.save && (
                      <span className="text-xs font-semibold text-silver-mist">{activeData.save}</span>
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
                      const msg = `Hello, I would like to order the ${plan.name} plan (${activeData.price})${deviceNote}`;
                      const waUrl = `https://wa.me/447848197761?text=${encodeURIComponent(msg)}`;

                      return plan.mostValue ? (
                        <GreenButton
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold shadow-lg shadow-phosphor-green/10"
                        >
                          <WhatsAppIcon className="size-4.5 shrink-0" />
                          <span>Order on WhatsApp</span>
                        </GreenButton>
                      ) : (
                        <GhostButton
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold hover:border-phosphor-green/50"
                        >
                          <WhatsAppIcon className="size-4.5 shrink-0" />
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

        {/* Plan Selection Guidance & Detailed Comparison Links */}
        <Reveal delay={0.12} className="mt-10 max-w-[840px] mx-auto">
          <div className="rounded-2xl border border-charcoal bg-ash/30 p-6 text-center">
            <h3 className="text-sm sm:text-base font-bold text-snow">Which Plan Should You Choose?</h3>
            <p className="mt-2 text-xs sm:text-sm text-silver-mist leading-relaxed max-w-[680px] mx-auto">
              If you are new to Teleview, start with the <strong className="text-snow">1-Month plan ($16)</strong> for flexible testing on your home setup. When you are ready for maximum savings, the <strong className="text-snow">12-Month plan ($90)</strong> reduces your effective rate to <strong className="text-phosphor-green font-mono">$7.50/mo</strong>. Every plan includes the identical full catalog, 50/60 FPS sports, and 14-day technical guarantee.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
              <a
                href="/iptv-subscription"
                className="text-phosphor-green hover:underline inline-flex items-center gap-1"
              >
                Compare All Plan Features &rarr;
              </a>
              <span className="text-smoke" aria-hidden="true">&bull;</span>
              <a
                href="/iptv-pricing"
                className="text-phosphor-green hover:underline inline-flex items-center gap-1"
              >
                Complete IPTV Pricing &amp; Economics Guide &rarr;
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <PaymentNotice />
        </Reveal>
      </div>
    </section>
  );
}
