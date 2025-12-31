"use client";

import React, { useEffect, useRef } from "react";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
  scale?: number;
  blur?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
  start?: string;
};

export default function RevealOnScroll({
  children,
  className,
  x = 0,
  y = 56,
  scale = 0.94,
  blur = 10,
  duration = 1.05,
  delay = 0,
  once = true,
  start = "top 80%",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: any;

    const setup = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, x, y, scale, filter: blur ? `blur(${blur}px)` : "none" },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: once ? "play none none none" : "play none none reverse",
            },
          }
        );
      }, el);
    };

    setup();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [blur, delay, duration, once, scale, start, x, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
