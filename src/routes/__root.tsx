import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE } from "@/lib/catalog";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE.full },
      {
        name: "description",
        content:
          "Frau Kopp – Schwarzwälder Kräuter-Manufaktur in Horben. Tinkturen, Kuren und Hydrolate. Handverlesen, schonend verarbeitet.",
      },
      { name: "theme-color", content: "#1a2e22" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootShell,
  notFoundComponent: NotFound,
});

function RootShell() {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.16em] text-leaf">404</p>
      <h1 className="mt-3 font-display text-4xl">Seite nicht gefunden</h1>
      <p className="mt-3 text-muted">Dieser Pfad führt nicht in den Wald zurück.</p>
      <a href="/" className="mt-8 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-fg">
        Zur Startseite
      </a>
    </main>
  );
}
