import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/catalog";

export const Route = createFileRoute("/kontakt")({ component: Kontakt });

function Kontakt() {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${SITE.lng - 0.08}%2C${SITE.lat - 0.05}%2C${SITE.lng + 0.08}%2C${SITE.lat + 0.05}&layer=mapnik&marker=${SITE.lat}%2C${SITE.lng}`;
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-5xl">Kontakt</h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="text-lg leading-relaxed">
            <p>{SITE.owner}</p>
            <p>{SITE.street}</p>
            <p>
              {SITE.zip} {SITE.city}
            </p>
            <p className="mt-4">
              Tel.{" "}
              <a className="underline" href={`tel:${SITE.phone}`}>
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs text-muted">Verwende Strg+Scrollen zum Zoomen der Karte</p>
            <iframe
              title="Karte Horben"
              src={src}
              className="h-[360px] w-full rounded-lg border border-border"
            />
            <p className="mt-2 text-xs">
              <a
                className="underline"
                href={`https://www.openstreetmap.org/?mlat=${SITE.lat}&mlon=${SITE.lng}#map=13/${SITE.lat}/${SITE.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                In OpenStreetMap öffnen
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bg-warm py-10 text-center text-sm text-muted">
        {SITE.owner}, {SITE.street}, {SITE.zip} {SITE.city}. Tel. {SITE.phoneDisplay}
      </div>
    </main>
  );
}
