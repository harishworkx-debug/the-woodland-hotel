import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: Array<{ label: string; to?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="container-luxe py-5">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[color:var(--muted-foreground)]">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight aria-hidden="true" className="h-3 w-3 text-[color:var(--gold)]" />
            )}
            {item.to ? (
              <Link to={item.to} className="hover:text-[color:var(--forest)]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[color:var(--forest)]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
