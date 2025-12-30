"use client";

import { useEffect, useMemo, useRef } from "react";

type AnimatedTextMaskProps<TTag extends keyof JSX.IntrinsicElements> = {
  as?: TTag;
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
  once?: boolean;
  start?: string;
};

export default function AnimatedTextMask<TTag extends keyof JSX.IntrinsicElements = "div">({
  as,
  lines,
  className,
  lineClassName,
  stagger = 0.08,
  once = true,
  start = "top 80%",
}: AnimatedTextMaskProps<TTag>) {
  const Tag = (as ?? "div") as any;

  const rootRef = useRef<HTMLElement | null>(null);
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const id = useMemo(() => {
    if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
    return `atm_${Math.random().toString(16).slice(2)}`;
  }, []);

  useEffect(() => {
    const el = rootRef.current;
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

      const targets = lineRefs.current.filter(Boolean) as HTMLSpanElement[];
      if (!targets.length) return;

      ctx = gsap.context(() => {
        gsap.set(targets, { yPercent: 120, rotate: 0.001, opacity: 0 });

        gsap.to(targets, {
          yPercent: 0,
          opacity: 1,
          duration: 1.05,
          ease: "power4.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        });
      }, el);
    };

    setup();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [id, once, stagger, start]);

  return (
    <Tag ref={(node: HTMLElement | null) => (rootRef.current = node)} className={className}>
      {lines.map((line, i) => (
        <span key={`${id}_${i}`} className="block overflow-hidden">
          <span
            ref={(node) => {
              lineRefs.current[i] = node;
            }}
            className={lineClassName ?? "block"}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
