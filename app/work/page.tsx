import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Our Work | TheAccellor",
  description: "Real businesses. Real problems. Real solutions.",
};

export default function WorkPage() {
  return (
    <main className="bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-24">
        <header className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white/75">
            OUR WORKS
          </h1>
        </header>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.cover ?? "/images/work/midnight.svg"}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-xl sm:text-4xl font-semibold text-white/90">
                  {p.name}
                </h2>
                <p className="mt-1 text-lg text-white/55">
                  {p.overview}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
