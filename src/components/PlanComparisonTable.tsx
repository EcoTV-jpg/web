import { ArrowRight, Tv } from "lucide-react";
import { allSubscriptionPlans } from "../data/products";
import { createWhatsAppOrderUrl } from "../config/site";
import { GreenButton, WhatsAppIcon } from "./ui";

interface PlanComparisonTableProps {
  activeSlug?: string;
  title?: string;
  subhead?: string;
}

export default function PlanComparisonTable({
  activeSlug,
  title = "Compare All Subscription Tiers",
  subhead = "See total cost, effective monthly pricing, and savings across all 4 available durations.",
}: PlanComparisonTableProps) {
  return (
    <section className="mt-14 scroll-mt-16" aria-labelledby="plan-comparison-heading">
      <div className="text-center mb-8">
        <h2 id="plan-comparison-heading" className="text-xl sm:text-2xl font-bold text-snow">
          {title}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-silver-mist max-w-[600px] mx-auto">
          {subhead}
        </p>
      </div>

      {/* Desktop / Tablet Semantic Comparison Table */}
      <div className="hidden md:block overflow-x-auto rounded-2xl border border-charcoal bg-ash/40">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-charcoal bg-ink-800/80 text-xs uppercase tracking-wider text-smoke">
              <th scope="col" className="p-4 sm:p-5 font-semibold">Plan Duration</th>
              <th scope="col" className="p-4 sm:p-5 font-semibold">Total Price</th>
              <th scope="col" className="p-4 sm:p-5 font-semibold">Monthly Equivalent</th>
              <th scope="col" className="p-4 sm:p-5 font-semibold">Savings &amp; Tier</th>
              <th scope="col" className="p-4 sm:p-5 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-charcoal text-xs sm:text-sm">
            {allSubscriptionPlans.map((plan) => {
              const isCurrent = plan.slug === activeSlug;
              return (
                <tr
                  key={plan.slug}
                  className={`transition-colors ${
                    isCurrent
                      ? "bg-phosphor-green/10 border-l-4 border-l-phosphor-green font-medium"
                      : "hover:bg-ash/60"
                  }`}
                >
                  <td className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-snow">{plan.duration}</span>
                      {isCurrent && (
                        <span className="rounded bg-phosphor-green/20 px-2 py-0.5 text-[11px] font-semibold text-phosphor-green">
                          Current Plan
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-smoke">{plan.tagline}</p>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-snow text-base">
                    {plan.priceFormatted}
                  </td>
                  <td className="p-4 sm:p-5 font-semibold text-phosphor-green">
                    {plan.monthlyFormatted}
                  </td>
                  <td className="p-4 sm:p-5 text-silver-mist text-xs">
                    <span className="inline-block rounded border border-charcoal bg-black/40 px-2.5 py-1 text-silver-mist">
                      {plan.badge || "Standard Tier"}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-right">
                    {isCurrent ? (
                      <GreenButton
                        href={createWhatsAppOrderUrl(plan.duration, plan.priceFormatted)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5"
                      >
                        <WhatsAppIcon className="size-3.5 shrink-0" />
                        Order on WhatsApp
                      </GreenButton>
                    ) : (
                      <a
                        href={`/iptv-subscription/${plan.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-phosphor-green hover:underline"
                      >
                        View {plan.duration} Plan
                        <ArrowRight className="size-3" aria-hidden="true" />
                      </a>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Plan Comparison Cards */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {allSubscriptionPlans.map((plan) => {
          const isCurrent = plan.slug === activeSlug;
          return (
            <article
              key={plan.slug}
              className={`rounded-xl border p-5 ${
                isCurrent
                  ? "border-phosphor-green bg-phosphor-green/10"
                  : "border-charcoal bg-ash/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-snow">{plan.duration}</span>
                {isCurrent && (
                  <span className="rounded bg-phosphor-green/20 px-2 py-0.5 text-[10px] font-semibold text-phosphor-green">
                    Selected
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-snow">{plan.priceFormatted}</span>
                <span className="text-xs text-phosphor-green font-semibold">({plan.monthlyFormatted})</span>
              </div>
              <p className="mt-2 text-xs text-silver-mist">{plan.tagline}</p>
              <div className="mt-4 pt-3 border-t border-charcoal/60">
                {isCurrent ? (
                  <GreenButton
                    href={createWhatsAppOrderUrl(plan.duration, plan.priceFormatted)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center text-xs py-2 flex items-center justify-center gap-1.5"
                  >
                    <WhatsAppIcon className="size-3.5 shrink-0" />
                    Order on WhatsApp
                  </GreenButton>
                ) : (
                  <a
                    href={`/iptv-subscription/${plan.slug}`}
                    className="block w-full rounded-lg border border-charcoal bg-ink-800 py-2 text-center text-xs font-semibold text-silver-mist hover:text-snow"
                  >
                    View {plan.duration} Plan &rarr;
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Concurrency & Multi-Screen Clarification */}
      <aside className="mt-6 rounded-xl border border-charcoal bg-ash/40 p-4 sm:p-5 text-xs text-silver-mist">
        <div className="flex items-start gap-3">
          <Tv className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold text-snow">
              How Concurrent Streams &amp; Multiple Device Connections Work
            </p>
            <p className="text-xs text-silver-mist leading-relaxed">
              Standard Teleview subscriptions include <strong className="text-snow">1 active concurrent connection</strong> by default, allowing you to configure your playlist credentials on multiple personal devices for non-simultaneous viewing. If your household requires simultaneous streaming across 2 or 3 screens at the same time, additional device lines can be selected directly during your WhatsApp order checkout or added at any time via our 24/7 technical support desk.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}
