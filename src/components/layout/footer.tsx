import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/catalog";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-forest text-primary-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="text-primary-fg [&_.text-leaf]:text-leaf" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-fg/75">
            Seit 2016 bringt Frau Kopp den Schwarzwald zurück in die Küche und die Hausapotheke:
            handverlesen, schonend verarbeitet, direkt vom Hof in Horben.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-leaf">Hauptmenü</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/moos" className="hover:underline">
                Moos
              </Link>
            </li>
            <li>
              <Link to="/tinkturen" className="hover:underline">
                Tinkturen
              </Link>
            </li>
            <li>
              <Link to="/kuren" className="hover:underline">
                Kuren
              </Link>
            </li>
            <li>
              <Link to="/manufaktur" className="hover:underline">
                Manufaktur
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Über uns
              </Link>
            </li>
            <li>
              <Link to="/hilfe" className="hover:underline">
                Hilfe
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-leaf">Hilfe</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/hilfe" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/versand" className="hover:underline">
                Versand & Rückgabe
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:underline">
                Hilfe & Kontakt
              </Link>
            </li>
            <li>
              <Link to="/agb" className="hover:underline">
                AGB
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-leaf">Rechtliches</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/impressum" className="hover:underline">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:underline">
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-fg/10 px-4 py-5 text-center text-xs text-primary-fg/55">
        © {new Date().getFullYear()} {SITE.name} · {SITE.full} · {SITE.street}, {SITE.zip} {SITE.city}
      </div>
    </footer>
  );
}
