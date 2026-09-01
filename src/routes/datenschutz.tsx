import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/catalog";

export const Route = createFileRoute("/datenschutz")({ component: Datenschutz });

function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-display text-5xl">Datenschutzerklärung</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
        <p>
          Verantwortlich: {SITE.owner}, {SITE.street}, {SITE.zip} {SITE.city},{" "}
          <a className="underline text-fg" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          , Tel. {SITE.phoneDisplay}.
        </p>
        <h2 className="font-display text-2xl text-fg">Welche Daten wir speichern</h2>
        <p>
          Dieser Shop speichert im Browser (localStorage): den Warenkorb, die Cookie-Auswahl
          und – wenn du den Newsletter abonnierst – deine E-Mail plus den Gutscheincode WALD5.
          Es gibt keine Nutzerkonten, kein Tracking, keine Werbenetzwerke, keine KI-Suche.
        </p>
        <h2 className="font-display text-2xl text-fg">Cookies</h2>
        <p>
          Beim ersten Besuch fragen wir um Einwilligung. „Nur notwendige“ und „Akzeptieren“
          setzen denselben technischen Marker, weil wir keine Analyse-Cookies einsetzen.
          Die Auswahl kannst du löschen, indem du die Website-Daten im Browser leerst.
        </p>
        <h2 className="font-display text-2xl text-fg">Bestellungen</h2>
        <p>
          Bestellungen in dieser Vorschau werden nur lokal in deinem Browser abgelegt und
          nicht an einen Server gesendet. Für echte Bestellungen schreib uns an {SITE.email}.
        </p>
        <h2 className="font-display text-2xl text-fg">Deine Rechte</h2>
        <p>
          Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Beschwerde bei
          einer Aufsichtsbehörde stehen dir zu. Weil wir keine Server-Datenbank führen,
          genügt das Leeren des Browserspeichers für die lokalen Daten.
        </p>
        <h2 className="font-display text-2xl text-fg">Karte</h2>
        <p>
          Die Kontaktseite bettet eine OpenStreetMap-Karte ein. Beim Laden können
          Verbindungsdaten an die OSM-Server gehen. Alternativ erreichst du uns über
          die Adresse ohne Karte.
        </p>
      </div>
    </main>
  );
}
