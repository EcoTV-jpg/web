export interface StepConnectorProps {
  steps: { number: string; title: string; href?: string }[];
}

export default function StepConnector({ steps }: StepConnectorProps) {
  return (
    <div className="my-6 overflow-x-auto pb-2" aria-label="Workflow progress overview">
      <ol className="flex items-center gap-2 text-xs font-mono min-w-max">
        {steps.map((s, i) => (
          <li key={s.number} className="flex items-center gap-2">
            {s.href ? (
              <a
                href={s.href}
                className="flex items-center gap-1.5 rounded-md border border-charcoal bg-ash/50 px-2.5 py-1 text-silver-mist hover:border-graphite hover:text-snow transition-colors"
              >
                <span className="text-phosphor-green font-semibold">{s.number}</span>
                <span>{s.title}</span>
              </a>
            ) : (
              <div className="flex items-center gap-1.5 rounded-md border border-charcoal bg-ash/50 px-2.5 py-1 text-silver-mist">
                <span className="text-phosphor-green font-semibold">{s.number}</span>
                <span>{s.title}</span>
              </div>
            )}
            {i < steps.length - 1 && (
              <span className="text-smoke font-sans" aria-hidden="true">
                &rarr;
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
