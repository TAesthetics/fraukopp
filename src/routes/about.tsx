import { createFileRoute } from "@tanstack/react-router";
import { SITE, STORY, TEAM } from "@/lib/catalog";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/about")({ component: About });

function About() {
  return (
    <main>
      <header className="relative h-[52vh] min-h-[300px] overflow-hidden bg-forest">
        <img src="/images/garten.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-10 text-primary-fg">
          <p className="text-xs uppercase tracking-[0.18em] text-leaf">Über uns</p>
          <h1 className="mt-2 font-display text-5xl">Die Manufaktur in Horben</h1>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <img src={STORY.image} alt="Wald am Untersberg" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-12">
          <p className="text-xs uppercase tracking-[0.18em] text-leaf">{STORY.kicker}</p>
          <h2 className="mt-3 font-display text-4xl">{STORY.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{STORY.body}</p>
          <p className="mt-4 text-sm text-muted">
            {SITE.owner} · {SITE.street} · {SITE.zip} {SITE.city}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-4xl">Drei, die den Hof tragen</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.role} delay={i * 80}>
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-bg-warm">
                <img src={m.image} alt="" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
              <p className="text-xs uppercase tracking-[0.14em] text-leaf">{m.role}</p>
              <p className="mt-2 text-sm text-muted">{m.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
