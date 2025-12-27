"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What’s your typical process for a new project?",
    a: "We start with a quick discovery call, align on goals and scope, then move through design, development, testing, and launch with clear milestones along the way.",
  },
  {
    q: "How long does a project usually take?",
    a: "Most projects take 2–6 weeks depending on scope, content readiness, and required integrations. We’ll give you a clear timeline before we start.",
  },
  {
    q: "Do you offer packages or custom quotes?",
    a: "Both. If your needs are straightforward, a package works great. If you need something more specific, we’ll provide a custom quote based on scope.",
  },
  {
    q: "What’s included in a branding package?",
    a: "Typically: logo direction, color palette, typography, and basic brand guidelines. We tailor it depending on what you need for consistent marketing and web presence.",
  },
  {
    q: "Can you work with our existing dev or marketing team?",
    a: "Yes. We can plug into your team’s workflow, collaborate on strategy, and deliver design/dev assets that your team can run with.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr,2fr] items-start">
          <div className="lg:pt-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white/80">
              FAQ
            </h2>
            <p className="mt-6 text-sm text-white/60">
              Got specific questions?
              <br />
              <Link href="/contact" className="text-[#FF4A03] hover:underline underline-offset-4">
                Contact Us
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm"
                >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
