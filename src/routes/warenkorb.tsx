import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { cartTotals, useCart } from "@/lib/cart";
import { formatEuro } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/warenkorb")({ component: CartPage });

function CartPage() {
  const lines = useCart((s) => s.lines);
  const setQty = useCart((s) => s.setQty);
  const clear = useCart((s) => s.clear);
  const { items, subtotal, shipping, total } = cartTotals(lines);
  const [done, setDone] = useState(false);
  const [coupon, setCoupon] = useState("");
  const discount = coupon.trim().toUpperCase() === "WALD5" || readCoupon() === "WALD5" ? 500 : 0;
  const pay = Math.max(0, total - discount);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const prev = JSON.parse(localStorage.getItem("fraukopp-orders") || "[]");
      prev.push({ at: Date.now(), data, items: items.map((i) => ({ slug: i.product.slug, qty: i.qty })), total: pay });
      localStorage.setItem("fraukopp-orders", JSON.stringify(prev));
    } catch {
      /* ignore */
    }
    clear();
    setDone(true);
  };

  if (done) {
    return (
      <main className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Danke</h1>
        <p className="mt-3 text-muted">
          Die Bestellung liegt in diesem Browser. Für die echte Lieferung schreib uns –
          diese Vorschau sendet noch keine E-Mails an die Manufaktur.
        </p>
        <Link to="/" className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm text-primary-fg">
          Weiter einkaufen
        </Link>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-lg px-4 py-24 text-center">
        <h1 className="font-display text-4xl">Warenkorb</h1>
        <p className="mt-3 text-muted">Noch leer.</p>
        <Link to="/tinkturen" className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm text-primary-fg">
          Zu den Tinkturen
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto grid max-w-6xl gap-12 px-4 py-12 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <h1 className="font-display text-4xl">Warenkorb</h1>
        <ul className="mt-8 divide-y divide-border border-y border-border">
          {items.map(({ product, qty, line }) => (
            <li key={product.slug} className="flex gap-4 py-4">
              <img src={product.image} alt="" className="size-20 rounded-sm object-cover" />
              <div className="flex-1">
                <p className="font-medium">{product.name}</p>
                <p className="text-xs text-muted">{product.unit}</p>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <label>
                    Menge{" "}
                    <input
                      type="number"
                      min={1}
                      value={qty}
                      onChange={(e) => setQty(product.slug, Number(e.target.value))}
                      className="ml-1 w-16 rounded-sm border border-border bg-surface px-2 py-1"
                    />
                  </label>
                  <span className="ml-auto tabular-nums">{formatEuro(line)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <aside className="lg:col-span-2">
        <div className="rounded-lg border border-border bg-surface p-6">
          <h2 className="font-display text-2xl">Kasse</h2>
          <div className="mt-4 flex justify-between text-sm">
            <span>Zwischensumme</span>
            <span>{formatEuro(subtotal)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span>Versand</span>
            <span>{shipping === 0 ? "kostenfrei" : formatEuro(shipping)}</span>
          </div>
          {discount ? (
            <div className="mt-2 flex justify-between text-sm text-leaf">
              <span>Gutschein WALD5</span>
              <span>−{formatEuro(discount)}</span>
            </div>
          ) : null}
          <div className="mt-3 flex justify-between font-medium">
            <span>Gesamt</span>
            <span>{formatEuro(pay)}</span>
          </div>
          <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
            <Input name="name" required placeholder="Name" />
            <Input name="email" type="email" required placeholder="E-Mail" />
            <Input name="street" required placeholder="Straße" />
            <div className="grid grid-cols-3 gap-2">
              <Input name="zip" required placeholder="PLZ" />
              <Input name="city" required placeholder="Ort" className="col-span-2" />
            </div>
            <Input
              name="coupon"
              placeholder="Gutschein (WALD5)"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <p className="text-xs text-muted">Zahlung per Rechnung. Kein Online-Payment in dieser Vorschau.</p>
            <Button type="submit" className="mt-2">
              Bestellung absenden
            </Button>
          </form>
        </div>
      </aside>
    </main>
  );
}

function readCoupon() {
  try {
    return localStorage.getItem("fraukopp-coupon");
  } catch {
    return null;
  }
}
