import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AnimatedTextMask from "@/components/AnimatedTextMask";
import MobileHeroPreviewSection from "@/sections/MobileHeroPreviewSection";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      
      <div  className="relative z-20 mx-auto max-w-6xl  px-4 pt-12 sm:pt-18 text-center max-[375px]:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mx-auto max-[375px]:mx-0">
          <span className="inline-block h-1.5 w-1.5 text-6xl rounded-full bg-[#FF4A03]" />
          Where Design Meets Results
        </div>
        <AnimatedTextMask
          as="h1"
          className="mt-6 text-3xl sm:text-7xl font-semibold tracking-tight tracking-wide max-w-3xl mx-auto max-[375px]:mx-0"
          lines={[
            <>
              Websites designed to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A03] to-[#FF7A1E]  ">
                Grow
              </span>{" "}
              your business.
            </>,
          ]}
        />
        <AnimatedTextMask
          as="p"
          className="mt-6 text-base text-white/70 max-w-2xl mx-auto max-[375px]:mx-0"
          lines={["We design and build websites that attract visitors and turn them into customers, and grow your business."]}
        />
        <div className="mt-8 flex flex-row gap-4 justify-center max-[375px]:flex-col max-[375px]:items-stretch max-[375px]:justify-start">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#FF4A03]  px-4 py-2  sm:px-6 sm:py-3  text-white shadow-lg shadow-orange-500/20 max-[375px]:w-full max-[375px]:justify-between max-[375px]:px-6 max-[375px]:py-4">
            Discuss you Idea
            
          </Link>
          <Link href="/work" className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition max-[375px]:w-full max-[375px]:px-6 max-[375px]:py-4">
            See Real Results
          </Link>
        </div>

      </div>
      <MobileHeroPreviewSection />
      <div className="relative z-10 pointer-events-none hidden md:block">
        <ContainerScroll />
      </div>
    </section>
  );
}
