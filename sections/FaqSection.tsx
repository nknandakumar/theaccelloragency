"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";
import AnimatedTextMask from "@/components/AnimatedTextMask";
import RevealOnScroll from "@/components/RevealOnScroll";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Usually 2–4 weeks, depending on scope. We prioritize quality and speed without cutting corners.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Yes. And we fix what's actually broken — not just apply a fresh coat of paint. We analyze, strategize, then redesign for results.",
  },
  {
    q: "Will my site work on mobile?",
    a: "Absolutely. Mobile-first, always. Every site we build is responsive and optimized for all devices and screen sizes.",
  },
  {
    q: "Do you help with Google presence?",
    a: "Yes — website + Google Business Profile setup included. We make sure you're found when customers search.",
  },
  {
    q: "What if I need changes after launch?",
    a: "We offer ongoing support and maintenance. We don't disappear after launch — your success is our success.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,2fr] items-start">
          <div className="lg:pt-4">
            <AnimatedTextMask
              as="h2"
              className="text-4xl lg:text-8xl lg:leading-tight  mx-auto text-start uppercase tracking-tight font-extrabold text-black dark:text-white"
              lines={["FAQ"]}
            />
            <AnimatedTextMask
              as="p"
              className="mt-4 text-sm text-white/60"
              lineClassName="block"
              lines={[
                "Got specific questions?",
                <Link
                  key="faq_contact"
                  href="/contact"
                  className="text-[#FF4A03] hover:underline underline-offset-4"
                >
                  Contact Us
                </Link>,
              ]}
            />
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <RevealOnScroll key={item.q} x={60} y={0} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-semibold text-white/70">
                        {item.q}
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-[#FF4A03] transition-transform duration-200 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </button>

                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 px-5 sm:px-6 ${
                        isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0 pb-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
