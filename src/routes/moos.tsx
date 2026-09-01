import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/moos")({ component: Moos });

function Moos() {
  return (
    <main>
      <header className="relative h-[70vh] min-h-[380px] overflow-hidden bg-forest">
        <img src="/images/moos.jpg" alt="Waldmoos" className="scroll-drift" />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-end px-4 pb-12 text-primary-fg">
          <p className="hero-in text-xs uppercase tracking-[0.2em] text-leaf">Moos</p>
          <h1 className="hero-in hero-in-d1 mt-3 font-display text-5xl sm:text-6xl">Der Boden, auf dem alles wächst</h1>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted">
            Moos speichert Wasser, dämpft den Schritt, hält den Wald kühl. Am Schauinsland
            und am Untersberg liegt es wie ein Teppich über Stein und Wurzel. Für uns ist
            es kein Produkt – es ist die Stimmung der Manufaktur: langsam, feucht, lebendig.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Wer bei Frau Kopp bestellt, bestellt nicht Moos. Sondern das, was daneben wächst:
            Thymian auf der Halde, Brennnessel am Rain, Johanniskraut im Juni.
          </p>
          <Link
            to="/tinkturen"
            className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-fg"
          >
            Zu den Tinkturen
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <img src="/images/untersberg.jpg" alt="Wald am Untersberg" className="h-[380px] w-full rounded-lg object-cover" />
        </Reveal>
      </section>
      <section className="grid md:grid-cols-2">
        <img src="/images/moos-dunkel.jpg" alt="" className="h-[360px] w-full object-cover" />
        <img src="/images/canopy.jpg" alt="" className="h-[360px] w-full object-cover" />
      </section>
    </main>
  );
}
