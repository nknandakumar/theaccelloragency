"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    let lenis: any;
    let tickerFn: ((time: number) => void) | undefined;
    let gsapRef: any;
    let scrollTriggerRef: any;

    const setup = async () => {
      const { default: Lenis } = await import("lenis");
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsapRef = gsap;
      scrollTriggerRef = ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        duration: 1.2,
        lerp: 0.1,
        smoothWheel: true,
        smoothTouch: false,
      });

      const onLenisScroll = () => {
        ScrollTrigger.update();
      };

      lenis.on("scroll", () => {
        onLenisScroll();
      });

      tickerFn = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerFn);

      gsap.ticker.lagSmoothing(0);

      lenis.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh(true);
    };

    setup();

    return () => {
      if (gsapRef && tickerFn) gsapRef.ticker.remove(tickerFn);
      if (lenis?.destroy) lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
