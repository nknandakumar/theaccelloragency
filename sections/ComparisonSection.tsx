import { ChevronRight } from "lucide-react";
import AnimatedTextMask from "@/components/AnimatedTextMask";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ComparisonSection() {
  return (
    <section className="py-24 md:-mt-66 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-start">
        <AnimatedTextMask
          as="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto"
          lineClassName="block"
          lines={["We know choosing the right agency", "is tough because few truly deliver."]}
        />

        <AnimatedTextMask
          as="p"
          className="mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-neutral-300"
          lineClassName="block"
          lines={[
            <>
              So we made it simple to <span className="font-semibold text-white">compare</span>
              <br/><span className="inline-flex items-center justify-center text-sm font-semibold uppercase tracking-wide rounded-full bg-[#FF4A03] px-3 py-1 mr-2 align-middle">
                versus
              </span>
              what you usually get <span className="text-[#FF4A03] font-semibold">in the market.</span>
            </>,
          ]}
        />

        <div className="mt-14 grid gap-6 sm:gap-8 sm:grid-cols-2 items-stretch">
          <RevealOnScroll>
            <div className="rounded-3xl bg-white text-left text-neutral-900 shadow-xl overflow-hidden flex flex-col">
              <div className="px-8 py-5 border-b border-neutral-200 font-semibold text-lg sm:text-xl">
                Other agencies
              </div>
              <ul className="flex-1 divide-y divide-neutral-200 text-base sm:text-lg">
                {[
                  "Slow delivery",
                  "Vague timelines",
                  "Extra charges",
                  "No real process",
                  "Complex, hard builds",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 px-8 py-4">
                    <ChevronRight className="h-5 w-5 text-neutral-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <div className="rounded-3xl bg-gradient-to-b from-[#FF7A1E] to-[#FF4A03] text-left text-white shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col">
              <div className="px-8 py-5 border-b border-white/20 font-semibold text-lg sm:text-xl">
                TheAccellor agency
              </div>
              <ul className="flex-1 divide-y divide-white/15 text-base sm:text-lg">
                {[
                  "Fast execution",
                  "Clear milestones",
                  "Transparent pricing",
                  "Structured workflow",
                  "Clean, scalable builds",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 px-8 py-4">
                    <ChevronRight className="h-5 w-5 text-white/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
