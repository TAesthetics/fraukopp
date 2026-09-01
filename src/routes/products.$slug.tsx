import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, byCategory, NEM_HINT } from "@/lib/catalog";
import { useCart } from "@/lib/cart";
import { formatEuro } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/products/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const add = useCart((s) => s.add);
  if (!product) throw notFound();
  const related = byCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs text-muted">
        <Link to="/" className="hover:underline">
          Start
        </Link>
        <span className="mx-2">/</span>
        <Link
          to={product.category === "tinktur" ? "/tinkturen" : product.category === "kur" ? "/kuren" : "/manufaktur"}
          className="hover:underline"
        >
          {product.category === "tinktur" ? "Tinkturen" : product.category === "kur" ? "Kuren" : "Manufaktur"}
        </Link>
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg bg-bg-warm">
          <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-leaf">{product.kicker}</p>
          <h1 className="mt-2 font-display text-4xl">{product.name}</h1>
          <p className="mt-3 text-muted">{product.excerpt}</p>
          <p className="mt-6 font-display text-3xl">
            {formatEuro(product.price)}
            <span className="ml-2 text-base text-muted">{product.unit}</span>
          </p>
          <Button className="mt-6" size="lg" onClick={() => add(product.slug)}>
            In den Warenkorb
          </Button>
          <div className="mt-10 space-y-4 text-sm leading-relaxed text-muted">
            <p>{product.description}</p>
            <p>
              <strong className="text-fg">Zutaten. </strong>
              {product.ingredients}
            </p>
            <p>
              <strong className="text-fg">Anwendung. </strong>
              {product.usage}
            </p>
            <p className="text-xs">{product.legal}</p>
            {product.legal === NEM_HINT ? null : null}
          </div>
        </div>
      </div>
      {related.length ? (
        <section className="mt-16">
          <h2 className="font-display text-3xl">Passt dazu</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
