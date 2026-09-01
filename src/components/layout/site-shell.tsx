import { type ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { CookieBanner } from "./cookie-banner";
import { SmoothScroll } from "@/components/smooth-scroll";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col bg-bg text-fg">
      <SmoothScroll />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <CookieBanner />
    </div>
  );
}
