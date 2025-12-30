import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import AnimatedTextMask from "@/components/AnimatedTextMask";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Our Work | TheAccellor",
  description: "Real businesses. Real problems. Real solutions.",
};

export default function WorkPage() {
  return (
    <main className="bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <header className="text-center">
          <AnimatedTextMask
            as="h1"
            className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white/75"
            lines={["OUR WORKS"]}
          />
        </header>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {projects.map((p, idx) => (
            <RevealOnScroll key={p.slug} delay={idx * 0.08}>
              <article className="group">
                <Link
                  href={`/work/${p.slug}`}
                  className="block relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={p.teaser?.image ?? p.cover ?? "/images/work/midnight.svg"}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>
                </Link>

                <div className="mt-4">
                  <Link href={`/work/${p.slug}`} className="block">
                    <AnimatedTextMask
                      as="h2"
                      className="text-xl sm:text-4xl font-semibold text-white/90"
                      lines={[p.name]}
                    />
                    <AnimatedTextMask
                      as="p"
                      className="mt-1 text-lg text-white/55"
                      lines={[p.overview]}
                    />
                  </Link>

                  <div className="mt-6">
                    <Link
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center justify-center rounded-xl bg-white text-black px-8 py-3 text-sm sm:text-base font-medium shadow-[0_18px_40px_rgba(0,0,0,0.45)] hover:bg-neutral-100 transition w-full sm:w-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
}
