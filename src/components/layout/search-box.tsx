import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { searchAll, type SearchHit } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function SearchBox({
  className,
  autoFocus = false,
  onPick,
}: {
  className?: string;
  autoFocus?: boolean;
  onPick?: () => void;
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const hits = useMemo(() => searchAll(q), [q]);

  useEffect(() => {
    if (autoFocus) input.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const go = (hit: SearchHit) => {
    router.history.push(hit.href);
    setQ("");
    setOpen(false);
    onPick?.();
  };

  return (
    <div ref={wrap} className={cn("relative w-full", className)}>
      <label className="sr-only" htmlFor="site-search">
        Suche
      </label>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
      <input
        id="site-search"
        ref={input}
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Tinkturen, Kuren, Hilfe…"
        className="h-10 w-full rounded-md border border-border bg-surface pl-9 pr-8 text-sm text-fg placeholder:text-faint focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        autoComplete="off"
        role="combobox"
        aria-expanded={open && hits.length > 0}
        aria-controls="search-results"
      />
      {q ? (
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-fg"
          onClick={() => {
            setQ("");
            input.current?.focus();
          }}
          aria-label="Suche leeren"
        >
          <X className="size-4" />
        </button>
      ) : null}
      {open && q.trim() ? (
        <ul
          id="search-results"
          data-lenis-prevent
          className="absolute z-50 mt-1 max-h-80 w-full overflow-auto rounded-lg border border-border bg-surface shadow-[0_12px_40px_rgba(28,36,28,0.12)]"
        >
          {hits.length === 0 ? (
            <li className="px-3 py-3 text-sm text-muted">Keine Treffer für „{q}“</li>
          ) : (
            hits.map((hit) => (
              <li key={hit.kind + hit.href + hit.title}>
                <button
                  type="button"
                  onClick={() => go(hit)}
                  className="flex min-h-11 w-full flex-col items-start gap-0.5 px-3 py-2.5 text-left hover:bg-bg-warm"
                >
                  <span className="text-[10px] uppercase tracking-[0.14em] text-leaf">{hit.kind}</span>
                  <span className="text-sm font-medium text-fg">{hit.title}</span>
                  <span className="line-clamp-1 text-xs text-muted">{hit.snippet}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
