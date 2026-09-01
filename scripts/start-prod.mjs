#!/usr/bin/env node
/**
 * Production entry for Railway (and any Node host).
 *
 * Nitro's node preset emits `.output/server/index.mjs`. Some Railway templates
 * still start `dist/server/server.js` — railway-postbuild.mjs copies this
 * launcher there so both commands work.
 */
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

process.env.HOST ??= "0.0.0.0";
process.env.NITRO_HOST ??= process.env.HOST;
if (!process.env.PORT && !process.env.NITRO_PORT) {
  process.env.PORT = "8080";
}

const candidates = [
  ".output/server/index.mjs",
  ".output/server/index.js",
  "dist/server/index.mjs",
  "dist/server/index.js",
];

let entry = null;
for (const rel of candidates) {
  const abs = join(root, rel);
  if (existsSync(abs)) {
    entry = abs;
    break;
  }
}

if (!entry) {
  console.error(
    "[start] Kein Server-Bundle gefunden. Erwartet .output/server/index.mjs nach `NITRO_PRESET=node npm run build`.",
  );
  process.exit(1);
}

console.log(`[start] ${entry}  PORT=${process.env.PORT}  HOST=${process.env.HOST}`);
await import(pathToFileURL(entry).href);
