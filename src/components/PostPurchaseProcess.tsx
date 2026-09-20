import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Accent } from "./ui";
import { postPurchaseProcess } from "../data/site";

export default function PostPurchaseProcess() {
  return (
    <section id="process" className="section-y scroll-mt-20" aria-labelledby="process-heading">
      <div className="container-x">
        <Reveal className="text-center max-w-[700px] mx-auto">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {postPurchaseProcess.kicker}
          </p>
          <h2 id="process-heading" className="t-h2 mt-4 text-balance">
            What Happens After You <Accent>Order</Accent>?
          </h2>
          <p className="t-body-sm mx-auto mt-4 text-silver-mist leading-relaxed">
            {postPurchaseProcess.subhead}
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {postPurchaseProcess.steps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.07} className="h-full">
              <article className="card card-hover h-full p-5 sm:p-6 flex flex-col border-charcoal bg-ash/40">
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-phosphor-green/10 border border-phosphor-green/30 text-[11px] font-mono font-bold text-phosphor-green">
                  {step.step}
                </span>
                <h3 className="mt-3.5 text-sm sm:text-base font-semibold text-snow tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed flex-1">
                  {step.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs text-silver-mist">
            <CheckCircle2 className="size-3.5 text-phosphor-green shrink-0" aria-hidden="true" />
            <span>Need step-by-step instructions for your specific streaming box or television?</span>
            <a href="/setup" className="font-semibold text-phosphor-green hover:underline inline-flex items-center gap-1 min-h-[44px] sm:min-h-0 py-2 sm:py-0">
              Read Complete Setup Guide <ArrowRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
