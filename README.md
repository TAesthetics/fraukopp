# Frau Kopp — Schwarzwälder Kräuter-Manufaktur

Shop-Website für **fraukopp.de**: Tinkturen, Kuren und Hydrolate aus Horben am Schauinsland.

## Stack

- React 19, TanStack Start / Router, Tailwind v4
- Warenkorb lokal im Browser, Suche ohne KI
- Impressum, Kontakt und Datenschutzerklärung nach den Angaben der Manufaktur

## Lokal starten

```bash
npm install
npm run dev
```

Produktion:

```bash
NITRO_PRESET=node npm run build
npm start
```

## Railway

Das Repo ist für Railway vorkonfiguriert (`railway.json`, `nixpacks.toml`, Node 22).

- **Build:** `npm run build` (setzt intern `NITRO_PRESET=node`)
- **Start:** `node scripts/start-prod.mjs` (hört auf `$PORT`)
- **Variablen:** `VITE_AUTH_ENABLED=false`, `HOST=0.0.0.0`

Falls im Dashboard noch `node dist/server/server.js` steht: nach dem nächsten Deploy existiert diese Datei als Starter, oder Startkommando auf `npm start` stellen.

Domain `fraukopp.de` unter Railway → Settings → Networking als Custom Domain eintragen.

## Hinweise

- Gutscheincode der Newsletter-Anmeldung: `WALD5`
- Keine Kundenbewertungen, keine Heilversprechen
- Platzhaltertexte bei Story und Team bitte durch echte Inhalte ersetzen
