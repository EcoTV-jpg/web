import Reveal from "./Reveal";
import { Accent } from "./ui";
import { steps, stepsSection } from "../data/site";

export default function Steps() {
  return (
    <section id="steps" className="section-y scroll-mt-16" aria-labelledby="steps-heading">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {stepsSection.kicker || "how to get your IPTV?"}
          </p>
          <h2 id="steps-heading" className="t-h2 text-balance max-w-[700px] mx-auto mt-4">
            3 Easy Steps to <Accent>Ultimate Entertainment!</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 max-w-[500px] text-silver-mist">
            {stepsSection.subhead}
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-[1060px] gap-10 text-center md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.09}>
              <div className="card h-full p-8 flex flex-col items-center">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-phosphor-green/10 border border-phosphor-green/30 text-xs font-semibold text-phosphor-green">
                  {step.label}
                </span>
                <h3 className="t-card-title mt-4 text-base text-snow font-semibold">
                  {step.title}
                </h3>
                <p className="t-body-sm mt-3 text-silver-mist text-xs sm:text-sm leading-relaxed">{step.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <a
            href="/setup"
            className="text-xs sm:text-sm font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1.5"
          >
            Need device-specific installation help? Read our Complete IPTV Setup Guide &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
