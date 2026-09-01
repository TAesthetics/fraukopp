import { Link } from "@tanstack/react-router";
import { type Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { formatEuro } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  return (
    <article className="product-card group flex flex-col bg-surface">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden bg-bg-warm"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {product.featured ? (
          <span className="absolute left-3 top-3 rounded-sm bg-surface/95 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-fg">
            Bestseller
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col px-4 py-5 text-center">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted whitespace-nowrap">
          {product.kicker}
        </p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="mt-1 font-display text-xl leading-snug text-fg"
        >
          {product.name}
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{product.excerpt}</p>
        <p className="mt-3 text-sm">
          ab {formatEuro(product.price)}
          <span className="text-muted"> · {product.unit}</span>
        </p>
        <Button
          className="mt-4 w-full"
          variant="outline"
          onClick={() => add(product.slug)}
        >
          In den Warenkorb
        </Button>
      </div>
    </article>
  );
}
