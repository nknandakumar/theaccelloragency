"use client";

import React, { useEffect, useMemo, useRef } from "react";

type AnimatedTextMaskProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  lineClassName?: string;
  lines?: React.ReactNode[];
  children?: React.ReactNode;
  stagger?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
};

export default function AnimatedTextMask({
  as = "div",
  className,
  lineClassName,
  lines,
  children,
  stagger = 0.08,
  duration = 0.9,
  delay = 0,
  start = "top 85%",
  once = true,
}: AnimatedTextMaskProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const Tag = as as any;

  const effectiveLines = useMemo<React.ReactNode[]>(() => {
    if (Array.isArray(lines)) return lines;
    if (children !== undefined && children !== null) return [children];
    return [];
  }, [children, lines]);

  const renderedLines = useMemo(() => {
    return effectiveLines.map((line, i) => (
      <span key={i} className={"block overflow-hidden"}>
        <span className={lineClassName ?? "block will-change-transform"}>{line}</span>
      </span>
    ));
  }, [effectiveLines, lineClassName]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: any;

    const setup = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const targets = Array.from(root.querySelectorAll<HTMLElement>(":scope > span > span"));

      ctx = gsap.context(() => {
        gsap.fromTo(
          targets,
          { yPercent: 120, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration,
            delay,
            ease: "power4.out",
            stagger,
            scrollTrigger: {
              trigger: root,
              start,
              toggleActions: once ? "play none none none" : "play none none reverse",
            },
          }
        );
      }, root);
    };

    setup();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [delay, duration, once, stagger, start]);

  return (
    <Tag className={className}>
      <span ref={rootRef} className="block">
        {renderedLines}
      </span>
    </Tag>
  );
}
