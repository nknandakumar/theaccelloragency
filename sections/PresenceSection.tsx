import AnimatedTextMask from "@/components/AnimatedTextMask";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Globe, ShieldAlert , EyeOff  } from "lucide-react";
export default function PresenceSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <AnimatedTextMask
          as="h2"
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
          lineClassName="block"
          lines={[
            <>
              From <span className="text-white/60 italic">invisible…</span>
            </>,
            <>
              to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A03] to-[#FF7A1E]">
                impossible to ignore.
              </span>
            </>,
          ]}
        />

        

        <div className="mt-10 grid gap-4 sm:gap-6 sm:grid-cols-3">
          {["No website.", "No Google presence.", "No trust."].map((text, idx) => (
            <RevealOnScroll key={text} delay={idx * 0.06}>
              <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#111111] to-[#111111] sm:from-[#171717] sm:to-[#0b0502] px-6 py-8 flex flex-col items-center justify-center">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4A03] text-white text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
                  {idx === 0 ? <Globe className="h-5 w-5" /> : idx === 1 ? <EyeOff className="h-5 w-5" /> : <ShieldAlert className="h-5 w-5" />}
                </div>
                <p className="text-base sm:text-lg font-medium text-white/90">{text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center  text-white/60 text-xs">
             <span className="block h-10 w-px bg-white/30" />
            <span className="block h-10 w-px bg-white/30" />
            <span className="text-lg">↧</span>
          </div>
        </div>
      </div>
    </section>
  );
}
