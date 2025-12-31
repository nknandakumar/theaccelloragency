"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let rafId = 0;
    let mounted = true;

    const setup = async () => {
      try {
        const LenisModule: any = await import("lenis");
        const gsapModule = await import("gsap");
        const scrollTriggerModule = await import("gsap/ScrollTrigger");

        if (!mounted) return;

        const Lenis = LenisModule.default;
        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
          lerp: 0.08,
          smoothWheel: true,
          smoothTouch: false,
        });

        lenisRef.current = lenis;

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = window.requestAnimationFrame(raf);
        };

        rafId = window.requestAnimationFrame(raf);

        ScrollTrigger.refresh();
      } catch {
        // no-op
      }
    };

    setup();

    return () => {
      mounted = false;
      if (rafId) window.cancelAnimationFrame(rafId);
      try {
        if (lenisRef.current) lenisRef.current.destroy();
      } catch {
        // no-op
      }
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    try {
      if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    } catch {
      // no-op
    }
  }, [pathname]);

  return <>{children}</>;
}
