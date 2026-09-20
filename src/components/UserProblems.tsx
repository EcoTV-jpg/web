import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Accent, GreenButton } from "./ui";
import { userProblemsAndSolution } from "../data/site";

export default function UserProblems() {
  return (
    <section id="why-teleview" className="section-y scroll-mt-20 bg-ash/10 border-y border-charcoal/40" aria-labelledby="problems-heading">
      <div className="container-x">
        {/* Part 1: Problems & Agitate */}
        <Reveal className="text-center max-w-[760px] mx-auto">
          <p className="label-mono flex items-center justify-center gap-2">
            <span className="size-1.5 rounded-full bg-phosphor-green" aria-hidden="true" />
            {userProblemsAndSolution.kicker}
          </p>
          <h2 id="problems-heading" className="t-h2 mt-4 text-balance">
            IPTV Shouldn't Mean <Accent>Constant Troubleshooting</Accent>
          </h2>
          <p className="t-body-sm mx-auto mt-4 text-silver-mist leading-relaxed">
            {userProblemsAndSolution.problemsSubhead}
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {userProblemsAndSolution.problemItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <article className="card h-full p-6 flex flex-col border-charcoal bg-ash/40">
                <div className="size-9 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
                  <AlertTriangle className="size-4.5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-snow">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-silver-mist leading-relaxed flex-1">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Part 2: The Solution Bridge */}
        <div className="mt-12 sm:mt-14 rounded-3xl border border-phosphor-green/30 bg-gradient-to-br from-ash/80 via-ash/50 to-obsidian p-6 sm:p-10 shadow-[0_0_40px_-15px_rgba(62,207,142,0.12)]">
          <Reveal className="text-center max-w-[680px] mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-snow">
              {userProblemsAndSolution.solutionHeading}
            </h3>
            <p className="t-body-sm mt-3 text-silver-mist">
              {userProblemsAndSolution.solutionSubhead}
            </p>
          </Reveal>

          <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {userProblemsAndSolution.solutionSteps.map((step, idx) => (
              <div key={step.step} className="flex flex-col">
                <span className="text-xs font-mono font-bold text-phosphor-green">
                  STEP {step.step}
                </span>
                <h4 className="mt-2 text-sm sm:text-base font-semibold text-snow">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs text-silver-mist leading-relaxed">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-charcoal/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-silver-mist">
              <CheckCircle2 className="size-4 text-phosphor-green shrink-0" aria-hidden="true" />
              <span>Evaluate live performance with zero upfront payment commitment.</span>
            </div>
            <div className="flex items-center gap-3">
              <GreenButton href="/iptv-free-trial" className="py-2.5 px-5 text-xs">
                Request 24-Hour Trial Pass
              </GreenButton>
              <a
                href="/setup"
                className="text-xs font-semibold text-silver-mist hover:text-snow hover:underline inline-flex items-center gap-1 min-h-[44px] sm:min-h-0 py-2 sm:py-0"
              >
                Installation Overview <ArrowRight className="size-3" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
