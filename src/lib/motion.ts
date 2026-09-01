type FrameFn = (now: number) => void;

const listeners = new Set<FrameFn>();
let raf = 0;

function pump(now: number) {
  listeners.forEach((fn) => fn(now));
  raf = listeners.size ? requestAnimationFrame(pump) : 0;
}

/** Shared rAF ticker — one loop for all scroll-driven visuals. */
export function onFrame(fn: FrameFn) {
  listeners.add(fn);
  if (!raf) raf = requestAnimationFrame(pump);
  return () => {
    listeners.delete(fn);
    if (!listeners.size && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function clamp(n: number, a: number, b: number) {
  return Math.min(b, Math.max(a, n));
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

declare global {
  interface Window {
    __lenis?: { stop: () => void; start: () => void; destroy: () => void };
  }
}

export function smoothstep(t: number) {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

/** 0 when the element's top hits the viewport, 1 when it has fully scrolled through. */
export function pinProgress(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const total = r.height - window.innerHeight;
  if (total <= 1) return 1;
  return clamp(-r.top / total, 0, 1);
}

/** 0 when the section enters from below, 1 when it leaves above. */
export function viewProgress(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight;
  return clamp((vh - r.top) / (vh + r.height), 0, 1);
}
