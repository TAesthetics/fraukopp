#!/usr/bin/env node
/**
 * After vite build: if Nitro emitted a Node server, also drop a launcher at
 * `dist/server/server.js` so Railway templates that start that path still work.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const nitroEntry = join(root, ".output/server/index.mjs");
const altEntry = join(root, "dist/server/index.mjs");
const hasNodeServer = existsSync(nitroEntry) || existsSync(altEntry);

if (!hasNodeServer) {
  console.log("[postbuild] no Nitro node server — skip dist/server/server.js shim");
  process.exit(0);
}

const destDir = join(root, "dist/server");
mkdirSync(destDir, { recursive: true });
writeFileSync(
  join(destDir, "server.js"),
  `import "../../scripts/start-prod.mjs";\n`,
  "utf8",
);
console.log("[postbuild] wrote dist/server/server.js → scripts/start-prod.mjs");
