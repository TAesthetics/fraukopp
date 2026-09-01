import { Link } from "@tanstack/react-router";
import { type Category, byCategory, categories } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";

export function CategoryPage({
  id,
  image,
  intro,
}: {
  id: Category;
  image: string;
  intro: string;
}) {
  const meta = categories.find((c) => c.id === id)!;
  const list = byCategory(id);
  return (
    <main>
      <header className="relative h-[42vh] min-h-[260px] overflow-hidden bg-forest">
        <img src={image} alt="" className="scroll-drift opacity-70" />
        <div className="absolute inset-0 bg-forest/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-10 text-primary-fg">
          <p className="hero-in text-xs uppercase tracking-[0.18em] text-leaf">{meta.teaser}</p>
          <h1 className="hero-in hero-in-d1 mt-2 font-display text-5xl">{meta.label}</h1>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="max-w-2xl text-muted">{intro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
        <p className="mt-12 text-sm text-muted">
          Zurück zur{" "}
          <Link to="/" className="underline">
            Startseite
          </Link>
        </p>
      </div>
    </main>
  );
}
