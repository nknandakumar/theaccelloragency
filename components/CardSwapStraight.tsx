"use client";

import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

export type CardSwapStraightProps = {
  centered?: boolean;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  children: React.ReactNode;
};

export function Card({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const CardSwapStraight: React.FC<CardSwapStraightProps> = ({
  centered = true,
  width = 400,
  height = 250,
  delay = 3000,
  pauseOnHover = false,
  children,
}) => {
  const cards = useMemo(
    () => React.Children.toArray(children).filter(Boolean),
    [children]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cards.length <= 1) return;
    if (pauseOnHover && isHovered) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, delay);

    return () => window.clearInterval(id);
  }, [cards.length, delay, pauseOnHover, isHovered]);

  if (!cards.length) return null;

  const containerClass = centered
    ? "flex items-center justify-center"
    : "block";

  return (
    <div
      className={containerClass}
      onMouseEnter={pauseOnHover ? () => setIsHovered(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsHovered(false) : undefined}
    >
      <div
        style={{ width, height }}
        className="relative overflow-visible rounded-2xl"
      >
        <AnimatePresence initial={false}>
          {cards.map((card, index) => {
            const total = cards.length;
            const offset = (index - activeIndex + total) % total; // 0 = front, 1,2,... behind

            if (offset > 4) return null;

            const translateY = offset * 18;
            const scale = 1 - offset * 0.04;
            const opacity = offset === 0 ? 1 : 0.9 - offset * 0.1;
            const zIndex = total - offset;

            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
                style={{ zIndex }}
                initial={{ opacity: 0, y: translateY + 24, scale }}
                animate={{ opacity, y: translateY, scale }}
                exit={{ opacity: 0, y: translateY - 24, scale }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-black">
                  {card}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CardSwapStraight;
