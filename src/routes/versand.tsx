import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/versand")({ component: Versand });

function Versand() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-5xl">Versand & Rückgabe</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
        <p>In der Regel zwei Werktage innerhalb Deutschlands. Neutrale Verpackung.</p>
        <p>Versandkosten 4,90 €, ab 80 € Warenwert kostenfrei.</p>
        <p>
          Bist du nach 14 Tagen nicht überzeugt, schreib uns. Ungeöffnete Ware erstatten
          wir. Geöffnete Tinkturen nur nach Rücksprache.
        </p>
        <p>Workshops finden in Horben statt und werden nicht versandt.</p>
      </div>
    </main>
  );
}
