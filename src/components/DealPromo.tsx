import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";
import { deal } from "../data/site";

export default function DealPromo() {
  return (
    <section className="section-y border-y border-charcoal" aria-labelledby="deal-heading">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Copy */}
        <Reveal className="order-1">
          <div className="max-w-[500px]">
            <p className="label-mono flex items-center gap-2 text-smoke">
              <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
              24-Hour Evaluation Pass
            </p>
            <h2 id="deal-heading" className="t-h2 mt-4 text-balance">
              Start Your <Accent>IPTV Free Trial</Accent>
            </h2>
            <p className="t-body-sm mt-5 font-medium text-snow leading-relaxed">
              Test Teleview with a risk-free 24-hour IPTV free trial before subscribing. Stream 25,000+ live channels, 4K live sports where available, and extensive on-demand movies on your Firestick, Smart TV, or Android device.
            </p>
            
            <p className="mt-4 flex items-baseline gap-3">
              <span className="t-heading-sm font-bold text-phosphor-green">Free Test Pass</span>
              <span className="text-sm font-normal text-smoke">5–15 Min WhatsApp Dispatch</span>
            </p>

            <p className="t-caption mt-3 text-xs text-smoke">
              No credit card required. Experience consistent streaming stability, fluid channel switching, and app responsiveness before purchasing any plan.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <GreenButton href="/iptv-free-trial">
                Start 24-Hour Free Trial
              </GreenButton>
              <a
                href="/iptv-subscription"
                className="inline-flex items-center justify-center rounded-full border border-charcoal bg-ash/40 px-5 py-2.5 text-xs font-semibold text-silver-mist hover:text-snow hover:border-graphite transition-all"
              >
                Explore Subscription Plans
              </a>
            </div>
          </div>
        </Reveal>

        {/* Arch visual — graphite line-work treatment */}
        <Reveal className="order-2" delay={0.08}>
          <div className="relative mx-auto w-[min(400px,86%)]">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-b-[40px] rounded-t-[999px] border-[1.5px] border-graphite"
            />
            <picture>
              <source srcSet="/images/teleview-couple.webp" type="image/webp" />
              <img
                src="/images/teleview-couple.jpg"
                alt="Couple watching TV together with Teleview"
                className="media-mono relative z-10 h-[380px] w-full rounded-b-[24px] rounded-t-[999px] object-cover object-top sm:h-[440px]"
                width={400}
                height={440}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <span aria-hidden="true" className="absolute -right-4 top-16 z-20 size-2.5 translate-x-1/2 rounded-full bg-phosphor-green" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
