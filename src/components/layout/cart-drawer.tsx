import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { cartTotals, useCart, useCartCount } from "@/lib/cart";
import { formatEuro } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const count = useCartCount();
  const { items, subtotal, shipping, total } = cartTotals(lines);
  const [shown, setShown] = useState(open);

  useEffect(() => {
    if (open) setShown(true);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    window.__lenis?.stop();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!shown && !open) return null;

  return (
    <div className={cn("fixed inset-0 z-50", !open && "pointer-events-none")}>
      <button
        type="button"
        className={cn("drawer-scrim", open && "is-open")}
        aria-label="Warenkorb schließen"
        onClick={onClose}
      />
      <aside
        data-lenis-prevent
        onTransitionEnd={(e) => {
          if (e.propertyName === "transform" && !open) setShown(false);
        }}
        className={cn(
          "drawer-panel absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-surface shadow-[-8px_0_40px_rgba(28,36,28,0.18)]",
          open && "is-open",
        )}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="font-display text-2xl">Warenkorb {count ? `(${count})` : ""}</p>
          <button type="button" onClick={onClose} className="grid size-11 place-items-center" aria-label="Schließen">
            <X className="size-5" />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-muted">
              <ShoppingBag className="size-8" />
              <p>Dein Warenkorb ist leer.</p>
              <Button variant="outline" onClick={onClose}>
                Weiter einkaufen
              </Button>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map(({ product, qty, line }) => (
                <li key={product.slug} className="flex gap-3">
                  <img
                    src={product.image}
                    alt=""
                    className="size-20 rounded-sm object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{product.name}</p>
                    <p className="text-xs text-muted">{product.unit}</p>
                    <p className="mt-1 text-sm">{formatEuro(line)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        className="grid size-11 place-items-center rounded-sm border border-border"
                        onClick={() => setQty(product.slug, qty - 1)}
                        aria-label="Weniger"
                      >
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-sm tabular-nums">{qty}</span>
                      <button
                        type="button"
                        className="grid size-11 place-items-center rounded-sm border border-border"
                        onClick={() => setQty(product.slug, qty + 1)}
                        aria-label="Mehr"
                      >
                        <Plus className="size-3" />
                      </button>
                      <button
                        type="button"
                        className="ml-auto min-h-11 text-xs text-muted underline"
                        onClick={() => remove(product.slug)}
                      >
                        Entfernen
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {items.length > 0 ? (
          <footer className="border-t border-border px-5 py-4">
            <div className="mb-3 flex justify-between text-sm text-muted">
              <span>Zwischensumme</span>
              <span>{formatEuro(subtotal)}</span>
            </div>
            <div className="mb-3 flex justify-between text-sm text-muted">
              <span>Versand</span>
              <span>{shipping === 0 ? "kostenfrei" : formatEuro(shipping)}</span>
            </div>
            <div className="mb-4 flex justify-between font-medium">
              <span>Gesamt</span>
              <span>{formatEuro(total)}</span>
            </div>
            <Link
              to="/warenkorb"
              onClick={onClose}
              className="flex h-11 w-full items-center justify-center rounded-md bg-primary text-sm font-medium text-primary-fg hover:bg-leaf"
            >
              Zur Kasse
            </Link>
            <p className="mt-2 text-center text-xs text-faint">Kostenfreier Versand ab 80 €</p>
          </footer>
        ) : null}
      </aside>
    </div>
  );
}
