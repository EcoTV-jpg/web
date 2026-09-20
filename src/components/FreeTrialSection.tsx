import { CheckCircle2, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";
import { freeTrialSection } from "../data/site";

export default function FreeTrialSection() {
  return (
    <section id="trial" className="section-y border-y border-charcoal/40 bg-ash/20 scroll-mt-16" aria-labelledby="trial-heading">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy & Checklist */}
        <Reveal>
          <div>
            <p className="label-mono flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
              {freeTrialSection.kicker}
            </p>
            <h2 id="trial-heading" className="t-h2 mt-4 text-balance">
              Don't Take Our Word for It. <Accent>Test It Yourself</Accent>.
            </h2>
            <p className="t-body-sm mt-4 text-silver-mist leading-relaxed">
              {freeTrialSection.subhead}
            </p>

            <div className="mt-6 space-y-2.5">
              {freeTrialSection.checklist.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-snow font-medium">
                  <CheckCircle2 className="size-4 text-phosphor-green shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-smoke">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5 text-phosphor-green" aria-hidden="true" />
                24-Hour Evaluation Duration
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-phosphor-green" aria-hidden="true" />
                No Credit Card Required
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <GreenButton href="/iptv-free-trial">
                {freeTrialSection.ctaPrimary}
              </GreenButton>
              <a
                href="/iptv-subscription"
                className="inline-flex items-center justify-center rounded-full border border-charcoal bg-ash/40 px-5 py-2.5 text-xs font-semibold text-silver-mist hover:text-snow hover:border-graphite transition-all"
              >
                {freeTrialSection.ctaSecondary} <ArrowRight className="size-3 ml-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Media visual with arched portrait */}
        <Reveal delay={0.1}>
          <div className="relative mx-auto w-[min(420px,88%)]">
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
