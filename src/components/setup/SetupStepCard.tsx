import type { ReactNode } from "react";

export interface SetupStepCardProps {
  id?: string;
  stepNumber: string;
  title: string;
  description: string;
  action?: string;
  tip?: string;
  icon?: ReactNode;
}

export default function SetupStepCard({
  id,
  stepNumber,
  title,
  description,
  action,
  tip,
  icon,
}: SetupStepCardProps) {
  return (
    <div
      id={id}
      className="scroll-mt-20 rounded-xl border border-charcoal bg-ash/40 p-5 sm:p-6 transition-colors hover:border-graphite"
    >
      <div className="flex items-start gap-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-charcoal bg-ash/60 text-phosphor-green">
          {icon ? icon : <span className="font-mono text-sm font-bold">{stepNumber}</span>}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="label-mono text-[11px] text-phosphor-green">Step {stepNumber}</span>
          </div>
          <h3 className="t-card-title mt-1 text-base sm:text-lg">{title}</h3>
          <p className="t-body-sm mt-2 text-silver-mist text-xs sm:text-sm leading-relaxed">{description}</p>

          {action && (
            <div className="mt-3 rounded border border-charcoal/60 bg-obsidian/60 p-2.5 text-xs">
              <span className="text-smoke font-medium">Expected Action: </span>
              <span className="text-snow font-normal">{action}</span>
            </div>
          )}

          {tip && (
            <p className="mt-2.5 text-[11px] text-smoke italic">
              Tip: {tip}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
