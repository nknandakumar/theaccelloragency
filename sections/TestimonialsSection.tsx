import { Star } from "lucide-react";
import AnimatedTextMask from "@/components/AnimatedTextMask";
import RevealOnScroll from "@/components/RevealOnScroll";

const testimonials = [
  {
    name: "Mario Baskoro",
    title: "CTO of Arjuna",
    quote:
      "Our socials used to feel scattered and inconsistent. Now, everything is on-brand, engaging, and performing better.",
    avatar: "MB",
  },
  {
    name: "Evelyn Widjaja",
    title: "Marketing Lead at Bima",
    quote:
      "From branding to the website to social—everything was cohesive, strategic, and done with serious care.",
    avatar: "EW",
  },
  {
    name: "Karina Wulandari",
    title: "Founder at Batavia",
    quote:
      "Working with them felt like having an in-house team that just gets it.",
    avatar: "KW",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex  items-start justify-between gap-6 ">
          <div className="flex items-start justify-center lg:justify-start">
            <div className="text-left">
              <div className="flex items-end gap-3">
                <Star className="h-7 w-7 text-[#FF4A03] fill-[#FF4A03]" />
                <div className="leading-none">
                  <div className="text-4xl sm:text-5xl font-semibold">
                    4.9<span className="text-white/60 text-xl sm:text-2xl">/5</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="text-right  lg:pl-6">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              (TESTIMONIALS)
            </p>
            <AnimatedTextMask
              as="h2"
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white/90"
              lines={["Hear what people say about us."]}
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <RevealOnScroll key={t.name} delay={idx * 0.12}>
              <article className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.45)] flex flex-col min-h-[340px]">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-sm font-semibold text-white/80">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-xl text-white/90 leading-tight">{t.name}</div>
                    <div className="text-lg text-white/60 mt-0.5">{t.title}</div>
                  </div>
                </div>

                <div className="mt-auto pt-10">
                  <div className="text-[#FF4A03] text-xl font-semibold leading-none">“</div>
                  <p className="mt-3 text-xl sm:text-2xl font-semibold leading-snug text-white/85">
                    {t.quote}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
