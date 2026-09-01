import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "./catalog";

export type CartLine = { slug: string; qty: number };

type CartState = {
  lines: CartLine[];
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (slug, qty = 1) => {
        const lines = [...get().lines];
        const i = lines.findIndex((l) => l.slug === slug);
        if (i >= 0) lines[i] = { slug, qty: lines[i].qty + qty };
        else lines.push({ slug, qty });
        set({ lines });
      },
      setQty: (slug, qty) => {
        if (qty <= 0) {
          set({ lines: get().lines.filter((l) => l.slug !== slug) });
          return;
        }
        set({
          lines: get().lines.map((l) => (l.slug === slug ? { slug, qty } : l)),
        });
      },
      remove: (slug) => set({ lines: get().lines.filter((l) => l.slug !== slug) }),
      clear: () => set({ lines: [] }),
    }),
    { name: "fraukopp-cart" },
  ),
);

export function useCartCount() {
  return useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
}

export function cartTotals(lines: CartLine[]) {
  const items = lines
    .map((l) => {
      const p = getProduct(l.slug);
      if (!p) return null;
      return { product: p, qty: l.qty, line: p.price * l.qty };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);
  const subtotal = items.reduce((n, i) => n + i.line, 0);
  const shipping = subtotal >= 8000 || subtotal === 0 ? 0 : 490;
  return { items, subtotal, shipping, total: subtotal + shipping };
}
