import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** Inertia on the document scroll — keeps sticky, view-timelines and nested overflow intact. */
export function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let destroyed = false;
    let instance: { destroy: () => void; stop: () => void; start: () => void } | null = null;

    (async () => {
      const [{ default: Lenis }] = await Promise.all([
        import("lenis"),
        import("lenis/dist/lenis.css"),
      ]);
      if (destroyed) return;
      instance = new Lenis({
        autoRaf: true,
        duration: 1.12,
        lerp: 0.09,
        smoothWheel: true,
        wheelMultiplier: 0.92,
        touchMultiplier: 1,
        syncTouch: false,
      });
      window.__lenis = instance;
    })();

    return () => {
      destroyed = true;
      if (window.__lenis === instance) delete window.__lenis;
      instance?.destroy();
    };
  }, []);

  return null;
}
