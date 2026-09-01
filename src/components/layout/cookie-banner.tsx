import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const KEY = "fraukopp-cookies";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY);
      if (!v) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.paddingBottom = visible ? "8rem" : "";
    return () => {
      document.body.style.paddingBottom = "";
    };
  }, [visible]);

  const choose = (value: "accepted" | "necessary") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="cookie-rise fixed inset-x-0 bottom-0 z-[60] p-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-border bg-surface p-5 shadow-[0_16px_50px_rgba(28,36,28,0.18)] sm:flex-row sm:items-end">
        <div className="flex-1">
          <p id="cookie-title" className="font-display text-xl text-fg">
            Cookies auf fraukopp.de
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            Wir speichern nur, was der Shop braucht: deinen Warenkorb und diese Auswahl. Keine
            Tracker, keine Werbung. Details in der{" "}
            <Link to="/datenschutz" className="underline decoration-leaf underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => choose("necessary")}>
            Nur notwendige
          </Button>
          <Button size="sm" onClick={() => choose("accepted")}>
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
