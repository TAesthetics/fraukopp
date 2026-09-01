import { createFileRoute } from "@tanstack/react-router";
import { faqs } from "@/lib/catalog";

export const Route = createFileRoute("/hilfe")({ component: Hilfe });

function Hilfe() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs uppercase tracking-[0.18em] text-leaf">Hilfe</p>
      <h1 className="mt-2 font-display text-5xl">Häufige Fragen</h1>
      <p className="mt-3 text-muted">
        Alles zu Tinkturen, Kuren, Versand und Rechtlichem. Keine KI – die Antworten
        kommen aus der Manufaktur.
      </p>
      <ul className="mt-10 divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <li key={f.q}>
            <details className="group py-4">
              <summary className="cursor-pointer list-none font-medium">
                {f.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
            </details>
          </li>
        ))}
      </ul>
    </main>
  );
}
