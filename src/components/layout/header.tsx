import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, ShoppingBag, X } from "lucide-react";
import { byCategory, categories } from "@/lib/catalog";
import { useCartCount } from "@/lib/cart";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { SearchBox } from "./search-box";
import { CartDrawer } from "./cart-drawer";

const NAV = [
  { label: "Moos", href: "/moos" as const },
  { label: "Tinkturen", href: "/tinkturen" as const, category: "tinktur" as const },
  { label: "Kuren", href: "/kuren" as const, category: "kur" as const },
  { label: "Manufaktur", href: "/manufaktur" as const, category: "manufaktur" as const },
  { label: "Über uns", href: "/about" as const },
  { label: "Hilfe", href: "/hilfe" as const },
];

export function Header() {
  const count = useCartCount();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 18);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-bar text-primary-fg">
        <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-center gap-8 overflow-hidden px-4 py-2 text-[11px] tracking-wide sm:justify-between">
          <span className="shrink-0">Handverlesen im Schwarzwald</span>
          <span className="hidden shrink-0 sm:inline">Kostenlose Lieferung ab 80 €</span>
          <span className="hidden shrink-0 md:inline">Schneller Versand</span>
          <span className="hidden shrink-0 lg:inline">14 Tage Zufriedenheitsgarantie</span>
        </div>
      </div>
      <header className={cn("site-header sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm", scrolled && "is-scrolled")}>
        <div className={cn("header-row mx-auto flex max-w-6xl items-center gap-4 px-4", scrolled ? "py-2" : "py-3")}>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md lg:hidden"
            aria-label={mobile ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <Logo />
          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
              item.category ? (
                <Mega key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="rounded-sm px-3 py-2 text-sm text-fg/90 hover:bg-bg-warm"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="ml-auto hidden w-full max-w-xs md:block">
            <SearchBox />
          </div>
          <button
            type="button"
            className="ml-auto grid size-11 place-items-center rounded-md md:hidden"
            aria-label="Suche"
            onClick={() => setMobileSearch((v) => !v)}
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            className="relative grid size-11 place-items-center rounded-md"
            aria-label="Warenkorb"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute right-1.5 top-1.5 grid min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-fg tabular-nums">
                {count}
              </span>
            ) : null}
          </button>
        </div>
        {mobileSearch ? (
          <div className="border-t border-border px-4 py-3 md:hidden">
            <SearchBox autoFocus onPick={() => setMobileSearch(false)} />
          </div>
        ) : null}
        {mobile ? (
          <div className="border-t border-border bg-bg px-4 py-3 lg:hidden">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block py-3 text-base"
                    onClick={() => setMobile(false)}
                  >
                    {item.label}
                  </Link>
                  {item.category
                    ? byCategory(item.category)
                        .slice(0, 6)
                        .map((p) => (
                          <Link
                            key={p.slug}
                            to="/products/$slug"
                            params={{ slug: p.slug }}
                            className="block py-1.5 pl-3 text-sm text-muted"
                            onClick={() => setMobile(false)}
                          >
                            {p.name}
                          </Link>
                        ))
                    : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

function Mega({
  item,
}: {
  item: { label: string; href: string; category: "tinktur" | "kur" | "manufaktur" };
}) {
  const [open, setOpen] = useState(false);
  const list = byCategory(item.category);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        to={item.href}
        className={cn(
          "inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm text-fg/90 hover:bg-bg-warm",
          open && "bg-bg-warm",
        )}
      >
        {item.label}
        <ChevronDown className={cn("size-3.5 opacity-60 transition-transform duration-200", open && "rotate-180")} />
      </Link>
      {open ? (
        <div className="mega-in absolute left-0 top-full z-50 min-w-64 overflow-hidden rounded-lg border border-border bg-surface py-2 shadow-[0_12px_40px_rgba(28,36,28,0.12)]">
          <Link
            to={item.href}
            className="block px-4 py-2 text-xs uppercase tracking-[0.14em] text-leaf"
          >
            Alle {item.label}
          </Link>
          {list.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="block px-4 py-2 text-sm hover:bg-bg-warm"
            >
              {p.name}
              <span className="ml-2 text-xs text-muted">{p.unit}</span>
            </Link>
          ))}
          <p className="px-4 pt-1 text-[11px] text-faint">{categories.find((c) => c.id === item.category)?.teaser}</p>
        </div>
      ) : null}
    </div>
  );
}
