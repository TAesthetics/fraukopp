import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/catalog";

export const Route = createFileRoute("/impressum")({ component: Impressum });

function Impressum() {
  return (
    <main className="bg-leaf text-primary-fg">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="font-display text-5xl tracking-wide">IMPRESSUM</h1>
        <p className="mt-8 text-lg leading-relaxed">
          {SITE.owner}
          <br />
          {SITE.street}
          <br />
          {SITE.zip} {SITE.city}
          <br />
          <a className="underline" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          <br />
          Tel. {SITE.phoneDisplay}
        </p>
        <h2 className="mt-16 font-display text-4xl tracking-wide">WEBDESIGN FREIBURG</h2>
        <p className="mt-6 text-lg leading-relaxed">
          {SITE.webdesign.name}
          <br />
          {SITE.webdesign.street}
          <br />
          {SITE.webdesign.zip} {SITE.webdesign.city}
          <br />
          <a className="underline" href={SITE.webdesign.url} rel="noreferrer" target="_blank">
            {SITE.webdesign.url}
          </a>
        </p>
        <p className="mt-16 max-w-lg text-sm text-primary-fg/80">
          Angaben gemäß § 5 DDG. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          {SITE.owner}, {SITE.street}, {SITE.zip} {SITE.city}.
        </p>
      </div>
    </main>
  );
}
