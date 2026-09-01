import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/catalog";

export const Route = createFileRoute("/agb")({ component: Agb });

function Agb() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-5xl">AGB</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
        <p>Vertragspartnerin ist {SITE.owner}, {SITE.street}, {SITE.zip} {SITE.city}.</p>
        <h2 className="font-display text-2xl text-fg">1. Geltung</h2>
        <p>
          Diese Bedingungen gelten für Bestellungen im Onlineshop fraukopp.de. Abweichende
          Bedingungen des Käufers gelten nicht.
        </p>
        <h2 className="font-display text-2xl text-fg">2. Vertragsschluss</h2>
        <p>
          Die Darstellung der Produkte ist unverbindlich. Der Vertrag kommt zustande, wenn
          wir die Bestellung per E-Mail annehmen oder die Ware versenden.
        </p>
        <h2 className="font-display text-2xl text-fg">3. Preise & Versand</h2>
        <p>
          Preise in Euro inkl. gesetzlicher MwSt. Versand innerhalb Deutschlands ab 4,90 €,
          ab 80 € Warenwert kostenfrei. Der Destillier-Workshop ist eine Dienstleistung vor
          Ort und wird nicht versandt.
        </p>
        <h2 className="font-display text-2xl text-fg">4. Widerruf</h2>
        <p>
          Verbraucher haben ein 14-tägiges Widerrufsrecht. Ausgenommen sind schnell
          verderbliche Waren und aus Hygienegründen versiegelte Waren, sobald das Siegel
          entfernt wurde. Workshops: Rücktritt bis 7 Tage vorher kostenfrei.
        </p>
        <h2 className="font-display text-2xl text-fg">5. Nahrungsergänzung</h2>
        <p>
          Tinkturen und Kuren sind keine Arzneimittel. Sie ersetzen keine ausgewogene
          Ernährung und keine ärztliche Beratung.
        </p>
      </div>
    </main>
  );
}
