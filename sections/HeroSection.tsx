import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      
      <div  className="mx-auto max-w-6xl  px-4 pt-20 sm:pt-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mx-auto">
          <span className="inline-block h-1.5 w-1.5 text-6xl rounded-full bg-[#FF4A03]" />
          Where Design Meets Results
        </div>
        <h1 className="mt-6 text-4xl sm:text-7xl font-semibold tracking-tight tracking-wide max-w-3xl mx-auto">
          Websites designed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A03] to-[#FF7A1E]  ">Grow</span> your business.
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          We design and build websites that attract visitors and turn them into customers, and grow your business.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#FF4A03] to-[#FF7A1E] px-6 py-3 text-white shadow-lg shadow-orange-500/20">
            Discuss you Idea
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/work" className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition">
            See Real Results
          </Link>
        </div>

      </div>
      <ContainerScroll />
    </section>
  );
}
