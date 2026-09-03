import { Check, ShieldCheck, Zap } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GhostButton, GreenButton } from "./ui";
import { plans, pricingHeader } from "../data/site";

/* Monochrome payment marks */
function PaymentMarks() {
  return (
    <div
      className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-smoke"
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
        coinbase
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-y relative scroll-mt-16" aria-labelledby="pricing-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            pricing
          </p>
          <h2 id="pricing-heading" className="t-h2 mt-4 text-balance">
            IPTV Plans <Accent>Made Simple</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[560px] text-silver-mist leading-relaxed">
            {pricingHeader.subhead}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.07} className="h-full">
              <article
                className={`card card-hover relative flex h-full flex-col p-6 sm:p-7 ${
                  plan.mostValue ? "border-phosphor-green/50 shadow-[0_0_24px_-8px_rgba(62,207,142,0.15)]" : ""
                }`}
              >
                {/* Badge if present */}
                {plan.badge && (
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-phosphor-green/15 border border-phosphor-green/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-phosphor-green">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-sm font-semibold uppercase tracking-[0.06em] text-snow">{plan.name}</h3>

                {/* Price Display */}
                <div className="mt-3 flex items-baseline gap-2.5">
                  <span className="t-heading-sm leading-none text-snow">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-base font-normal text-smoke line-through">{plan.originalPrice}</span>
                  )}
                  {plan.save && (
                    <span className="text-xs font-semibold text-phosphor-green">{plan.save}</span>
                  )}
                </div>

                {/* Billing subtext */}
                <p className="t-caption mt-1.5 text-xs text-silver-mist">{plan.billingText}</p>

                {/* Description */}
                <p className="t-body-sm mt-3 text-xs text-smoke leading-relaxed">{plan.description}</p>

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
                <div className="mt-auto pt-6">
                  {plan.mostValue ? (
                    <GreenButton className="w-full">{plan.ctaText || "Order Now"}</GreenButton>
                  ) : (
                    <GhostButton className="w-full">{plan.ctaText || "Order Now"}</GhostButton>
                  )}

                  {/* Guarantee & Delivery sub-notes */}
                  <div className="mt-4 space-y-1.5 text-center text-[11px] text-smoke">
                    <p className="flex items-center justify-center gap-1.5">
                      <ShieldCheck className="size-3.5 text-phosphor-green shrink-0" aria-hidden="true" />
                      <span>{plan.guaranteeText || "14-day money-back guarantee"}</span>
                    </p>
                    {plan.deliveryNote && (
                      <p className="flex items-center justify-center gap-1.5 text-[10px] text-silver-mist">
                        <Zap className="size-3 text-phosphor-green shrink-0" aria-hidden="true" />
                        <span>{plan.deliveryNote}</span>
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <PaymentMarks />
        </Reveal>
      </div>
    </section>
  );
}
