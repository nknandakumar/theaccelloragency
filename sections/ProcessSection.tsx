"use client";

import { useEffect, useRef, useState } from 'react';

export default function ProcessSection() {
  const steps = [
    {
      step: "STEP 1.",
      title: "Understand",
      desc: "Your business & audience",
    },
    {
      step: "STEP 2.",
      title: "Design",
      desc: "Clear, conversion-focused layouts",
    },
    {
      step: "STEP 3.",
      title: "Develop",
      desc: "Fast, responsive, scalable",
    },
    {
      step: "STEP 4.",
      title: "Launch",
      desc: "Ready for real users",
    },
    {
      step: "STEP 5.",
      title: "Support",
      desc: "We don't disappear",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section
      const progress = Math.max(0, Math.min(1, (scrollTop - sectionTop + windowHeight) / (sectionHeight + windowHeight)));
      setScrollProgress(progress);

      // Calculate active step based on progress
      const stepIndex = Math.min(Math.floor(progress * steps.length), steps.length - 1);
      setActiveIndex(stepIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="bg-[#050505] text-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Fixed left side */}
          <div className="relative sticky pt-12 top-24 h-fit">
            <div className="absolute left-[260px] top-2 hidden lg:block text-[10px] uppercase tracking-[0.35em] text-white/40">
              (PROCESS)
            </div>

            <h2 className="text-6xl sm:text-7xl md:text-8xl font-semibold leading-[0.9] tracking-tight text-white/80">
              <span className="block">HOW WE</span>
              <span className="block">WORK</span>
            </h2>

            <p className="mt-6 text-sm text-white/50 max-w-xs">
              A clear, milestone-driven process that keeps you in the loop and moves fast.
            </p>

            {/* Progress indicator */}
            <div className="mt-12 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.step}
                  className={`flex items-center gap-3 transition-all duration-300 ${
                    index <= activeIndex ? 'opacity-100' : 'opacity-40'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#FF4A03] w-8'
                        : index < activeIndex
                        ? 'bg-[#FF4A03]'
                        : 'bg-white/20'
                    }`}
                  />
                  <span className="text-xs font-medium text-white/60">
                    {index === activeIndex ? step.step : `0${index + 1}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable right side - all cards here */}
          <div className="relative space-y-[2vh] py-[10vh] max-w-3xl">
            {steps.map((step, index) => (
              <div
                key={step.step}
              >
                <div className="rounded-3xl border border-white/10 bg-[#0b0b0b] backdrop-blur-sm p-8 sm:p-12">
                  <div className="text-xs font-semibold tracking-wide text-white/55">
                    {step.step}
                    <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#FF4A03]" />
                  </div>

                  <div className="mt-10">
                    <h3 className="text-4xl sm:text-5xl font-semibold leading-tight text-white/90">
                      {step.title}
                    </h3>
                    <p className="mt-6 text-lg leading-relaxed text-white/50 max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
