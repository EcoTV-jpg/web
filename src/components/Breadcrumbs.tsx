import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-xs text-silver-mist flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.url} className="flex items-center gap-2">
              {idx > 0 && <ChevronRight className="size-3 text-smoke shrink-0" aria-hidden="true" />}
              {isLast ? (
                <span className="text-snow font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a href={item.url} className="hover:text-snow transition-colors">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
