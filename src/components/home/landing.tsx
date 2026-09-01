import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BadgeCheck, ShieldCheck, Truck, Undo2 } from "lucide-react";
import { featuredProducts, faqs, STORY, TEAM } from "@/lib/catalog";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { Input } from "@/components/ui/input";
import {
  clamp,
  lerp,
  onFrame,
  pinProgress,
  prefersReducedMotion,
  smoothstep,
  viewProgress,
} from "@/lib/motion";

export function Landing() {
  return (
    <main>
      <Hero />
      <Marks />
      <Bestsellers />
      <Pioneer />
      <Pillars />
      <ManufakturSplit />
      <Marquee />
      <Why />
      <QuoteExpand />
      <Story />
      <Team />
      <FaqHome />
      <Newsletter />
      <Trust />
    </main>
  );
}

function Hero() {
  return (
    <section className="grid min-h-[78vh] lg:grid-cols-2">
      <div className="relative flex min-h-[52vh] flex-col justify-end overflow-hidden bg-forest p-8 text-primary-fg sm:p-12 lg:min-h-0 lg:p-16">
        <img
          src="/images/moos-dunkel.jpg"
          alt=""
          className="scroll-drift opacity-55"
        />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative max-w-lg">
          <p className="hero-in hero-in-d1 text-xs uppercase tracking-[0.18em] text-leaf">
            Aus europäischen Wäldern – direkt zu dir nach Hause
          </p>
          <h1 className="hero-in hero-in-d2 mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Bereit für die Kraft der Kräuter?
          </h1>
          <Link
            to="/tinkturen"
            className="hero-in hero-in-d3 mt-8 inline-flex h-12 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-fg transition-transform duration-150 hover:bg-leaf active:scale-[0.96]"
          >
            Jetzt entdecken
          </Link>
        </div>
      </div>
      <div className="relative min-h-[42vh] overflow-hidden lg:min-h-0">
        <img
          src="/images/schwarzwald.jpg"
          alt="Nebeliger Schwarzwald"
          className="absolute inset-0 h-full w-full object-cover hero-ken"
        />
      </div>
    </section>
  );
}

function Marks() {
  const items = ["Horben am Schauinsland", "Handverlesen", "Kleine Chargen", "Nahrungsergänzung", "Seit 2016"];
  return (
    <div className="border-b border-border bg-surface">
      <p className="pt-6 text-center text-[11px] uppercase tracking-[0.2em] text-faint">
        bekannt aus dem Schwarzwald
      </p>
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-6">
        {items.map((m) => (
          <li key={m} className="font-display text-xl italic text-accent sm:text-2xl">
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Bestsellers() {
  const list = featuredProducts().slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Entdecke unsere Bestseller</h2>
        </Reveal>
        <Link to="/tinkturen" className="hidden text-sm text-muted underline-offset-4 hover:underline sm:inline">
          Alle ansehen
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.slug} delay={i * 110}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Pioneer() {
  const ref = useRef<HTMLElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const current = useRef(0.5);

  useEffect(() => {
    const section = ref.current;
    const picture = img.current;
    const text = copy.current;
    if (!section || !picture) return;
    const reduced = prefersReducedMotion();
    if (reduced) return;

    const tick = () => {
      const target = viewProgress(section);
      current.current = lerp(current.current, target, 0.12);
      const y = (current.current - 0.5) * 110;
      picture.style.transform = `translate3d(0, ${y}px, 0) scale(1.18)`;
      if (text) {
        const enter = clamp((current.current - 0.18) / 0.28, 0, 1);
        const e = smoothstep(enter);
        text.style.opacity = String(e);
        text.style.transform = `translate3d(0, ${(1 - e) * 28}px, 0)`;
      }
    };
    return onFrame(tick);
  }, []);

  return (
    <section ref={ref} className="relative h-[78vh] min-h-[460px] overflow-hidden bg-forest">
      <img
        ref={img}
        src="/images/pioneer.jpg"
        alt="Lichtung im Schwarzwald"
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ transform: "translate3d(0, 0, 0) scale(1.18)" }}
      />
      <div className="absolute inset-0 bg-forest/35" />
      <div
        ref={copy}
        className="pioneer-copy relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-primary-fg"
      >
        <p className="text-sm tracking-wide text-primary-fg/85">
          Handwerk aus Horben · am Fuße des Schauinslands
        </p>
        <h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">
          Vom Pionier zum Marktführer
        </h2>
        <Link
          to="/about"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-surface px-6 text-sm font-medium text-fg transition-transform duration-150 hover:bg-bg-warm active:scale-[0.96]"
        >
          Über uns
        </Link>
      </div>
    </section>
  );
}

function Pillars() {
  const items = [
    {
      title: "Handverlesen & geprüft",
      body: "Unsere Kräuter werden im Garten in Horben und in den Wäldern des Schauinslands von Hand gelesen und schonend getrocknet. Jede Charge prüfen wir vor dem Ansatz.",
    },
    {
      title: "Schneller Support",
      body: "Fragen rund um Bestellung beantworten wir an Werktagen innerhalb von 24 Stunden. Deutschsprachig, direkt aus der Manufaktur – nicht aus einem Callcenter.",
    },
    {
      title: "Strenge Qualitätskontrolle",
      body: "Kleine Chargen, klare Rezepturen, ehrliche Deklaration als Nahrungsergänzung, Lebensmittel oder Kosmetik. Was nicht in die Flasche gehört, bleibt draußen.",
    },
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 110}>
            <h3 className="font-display text-2xl">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{it.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ManufakturSplit() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-[380px] overflow-hidden">
        <img
          src="/images/haengekraeuter.jpg"
          alt="Kräuter zum Trocknen aufgehängt"
          className="scroll-drift"
        />
      </div>
      <div className="flex flex-col justify-center bg-surface px-6 py-14 sm:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-leaf">Schwarzwälder Kräuter</p>
          <h2 className="mt-3 font-display text-4xl">Die Manufaktur</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Jahrhunderte lang wuchsen Heil- und Würzkräuter in den Wäldern über Freiburg.
            In Horben setzen wir sie an: Tinkturen, Kuren, Hydrolate. Kein Labor-Marketing –
            ein Hof, eine Destille, ein Garten.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex h-11 w-fit items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-fg hover:bg-leaf"
          >
            Jetzt erleben
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee() {
  const bits = [
    "naturbelassen",
    "unabhängig geprüft",
    "100% legal",
    "diskreter Versand",
    "Nahrungsergänzung",
    "aus dem Schwarzwald",
  ];
  const line = [...bits, ...bits];
  return (
    <div className="marquee-wrap overflow-hidden border-y border-border bg-bg py-4">
      <div className="marquee-track gap-10 pr-10 text-2xl text-muted sm:text-3xl">
        {line.map((b, i) => (
          <span key={i} className="font-display italic">
            {b}
            <span className="mx-4 text-leaf">–</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Why() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.18em] text-leaf">Ein Weg zurück zu dir</p>
        <h2 className="mt-3 font-display text-4xl">Warum Frau Kopp?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Das moderne Leben verlangt uns viel ab. Ständig neue Reize, kürzere Pausen,
          Unruhe. Meditation hilft – und ehrliche Pflanzen aus dem Wald nebenan.
          Als natürliche Ergänzung erobert sich das Kräuterglas seinen Platz zurück:
          nicht als Flucht, sondern als Werkzeug für einen ruhigeren Alltag.
        </p>
        <Link
          to="/kuren"
          className="mt-8 inline-flex h-11 items-center rounded-md border border-border bg-surface px-5 text-sm hover:bg-bg-warm"
        >
          Jetzt entdecken
        </Link>
      </Reveal>
      <Reveal delay={90}>
        <div className="relative h-[360px] overflow-hidden rounded-lg sm:h-[420px]">
          <img
            src="/images/moos.jpg"
            alt="Lebendiges Waldmoos"
            className="scroll-drift"
            style={{ position: "absolute" }}
          />
        </div>
      </Reveal>
    </section>
  );
}

function QuoteExpand() {
  const pin = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const veil = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLParagraphElement>(null);
  const current = useRef(0);

  useEffect(() => {
    const el = pin.current;
    const box = frame.current;
    if (!el || !box) return;
    const reduced = prefersReducedMotion();

    const apply = (p: number) => {
      const e = smoothstep(p);
      const scale = 0.3 + e * 0.7;
      const radius = 64 * (1 - e);
      const shadow = 0.22 * (1 - e);
      box.style.transform = `translate(-50%, -50%) scale(${scale})`;
      box.style.borderRadius = `${radius}px`;
      box.style.boxShadow = `0 24px 80px rgba(26, 46, 34, ${shadow})`;
      if (veil.current) veil.current.style.opacity = String(0.08 + e * 0.4);
      if (text.current) {
        const ink = Math.round((1 - e) * 100);
        text.current.style.color = `color-mix(in srgb, var(--color-fg) ${ink}%, var(--color-primary-fg))`;
      }
    };

    if (reduced) {
      apply(1);
      return;
    }

    const tick = () => {
      const target = pinProgress(el);
      current.current = lerp(current.current, target, 0.16);
      if (Math.abs(target - current.current) < 0.0006) current.current = target;
      apply(current.current);
    };
    return onFrame(tick);
  }, []);

  return (
    <section ref={pin} className="quote-pin" aria-label="Zitat">
      <div className="quote-sticky">
        <div ref={frame} className="quote-frame">
          <img src="/images/quote.jpg" alt="" />
          <div ref={veil} className="quote-veil" />
        </div>
        <p
          ref={text}
          className="relative z-10 max-w-3xl px-6 text-center font-display text-3xl leading-snug sm:text-5xl"
        >
          Manche stellen Fragen. Andere gehen selbst in den Wald.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 lg:grid-cols-2">
        <div className="relative min-h-[380px] overflow-hidden">
          <img src={STORY.image} alt="Wald am Untersberg" className="scroll-drift" />
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-12">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-leaf">{STORY.kicker}</p>
            <h2 className="mt-3 font-display text-4xl">{STORY.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{STORY.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.18em] text-leaf">Das Team</p>
        <h2 className="mt-2 font-display text-4xl">Drei, die den Hof tragen</h2>
      </Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {TEAM.map((m, i) => (
          <Reveal key={m.role} delay={i * 110}>
            <article>
              <div className="aspect-[4/5] overflow-hidden rounded-lg bg-bg-warm">
                <img src={m.image} alt="" className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.05]" />
              </div>
              <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
              <p className="text-xs uppercase tracking-[0.14em] text-leaf">{m.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FaqHome() {
  const left = faqs.slice(0, 4);
  const right = faqs.slice(4);
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <FaqCol
          title="Kräuter kaufen – was du wissen solltest"
          kicker="Tradition, Handwerk und rechtliche Einordnung"
          items={left}
        />
        <FaqCol
          title="Tinkturen, Mengen, Haltbarkeit & FAQ"
          kicker="Praxis aus der Manufaktur"
          items={right}
        />
      </div>
    </section>
  );
}

function FaqCol({
  title,
  kicker,
  items,
}: {
  title: string;
  kicker: string;
  items: typeof faqs;
}) {
  return (
    <div>
      <Reveal>
        <h2 className="font-display text-3xl">{title}</h2>
        <p className="mt-2 text-sm text-muted">{kicker}</p>
      </Reveal>
      <ul className="mt-8 divide-y divide-border border-y border-border">
        {items.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </ul>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between gap-4 py-3 text-left font-medium"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <span className={open ? "faq-plus is-open" : "faq-plus"} aria-hidden />
      </button>
      <div className={open ? "faq-panel is-open" : "faq-panel"}>
        <div>
          <p className="pb-3 text-sm leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </li>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    try {
      localStorage.setItem("fraukopp-coupon", "WALD5");
      localStorage.setItem("fraukopp-nl", email.trim());
    } catch {
      /* ignore */
    }
    setDone(true);
  };

  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative min-h-[280px] overflow-hidden">
        <img src="/images/canopy.jpg" alt="" className="scroll-drift" />
      </div>
      <div className="flex flex-col justify-center bg-forest px-6 py-14 text-primary-fg sm:px-12">
        <Reveal>
          <h2 className="font-display text-4xl">Erhalte 5 € geschenkt</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-fg/75">
            Spare bei deiner ersten Bestellung und erfahre als Erste von neuen
            Ansätzen und Kuren. Melde dich für unseren kostenfreien Newsletter an.
          </p>
          {done ? (
            <p className="mt-6 text-sm">
              Code <strong>WALD5</strong> liegt in deinem Browser – an der Kasse einlösen.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail"
                className="bg-surface text-fg"
              />
              <Button type="submit" variant="cream">
                Abonnieren
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: Truck, title: "Diskreter Versand", body: "Neutrale Verpackung, in der Regel innerhalb von 2 Werktagen bei dir." },
    { icon: Undo2, title: "Geld-zurück-Garantie", body: "Nach 14 Tagen nicht überzeugt? Schreib uns – ungeöffnete Ware erstatten wir." },
    { icon: BadgeCheck, title: "Kostenfreier Versand", body: "Ab einem Warenwert von 80 € versenden wir innerhalb Deutschlands kostenfrei." },
    { icon: ShieldCheck, title: "100% legal", body: "Als Nahrungsergänzung, Lebensmittel oder Kosmetik deklariert – kein Arzneimittel." },
  ];
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70}>
            <it.icon className="size-5 text-leaf" />
            <h3 className="mt-3 font-medium">{it.title}</h3>
            <p className="mt-1 text-sm text-muted">{it.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
