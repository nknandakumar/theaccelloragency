import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProject } from "@/lib/projects";
import AnimatedTextMask from "@/components/AnimatedTextMask";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  const gallery = (project.gallery ?? []).length
    ? (project.gallery ?? [])
    : [
      project.cover ?? "/images/work/midnight.svg",
      "/images/work/midnight.svg",
      "/images/work/signalwire.svg",
    ];

  const moreWorks = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main className="bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-28">
        <Link
          href="/work"
          className="text-sm text-white/55 hover:text-white underline underline-offset-4"
        >
          ← Back to Work
        </Link>

        <div className="mt-10 flex flex-col lg:flex-row justify-between items-start">
          <div>
            <AnimatedTextMask
              as="h1"
              className="text-6xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white/85 leading-[0.9]"
              lines={[project.name.toUpperCase()]}
            />
            <AnimatedTextMask
              as="p"
              className="mt-4 text-sm sm:text-base text-white/55 max-w-xl"
              lines={[project.overview]}
            />
          </div>

          <div className="space-y-4 pt-6 sm:pt-0 text-sm">
            <div className="grid grid-cols-[90px,1fr] gap-x-4 gap-y-3">
              <div className="flex gap-18 ">
                <div className="text-white/40 uppercase text-lg ">(year)</div>
                <div className="text-white/75  text-lg md:text-2xl ">{project.year ?? "2024"}</div>
              </div>

              <div className="flex gap-8">
                <div className="text-white/40 uppercase text-lg tracking-wider">(timeline)</div>
              <div className="text-white/75 text-lg md:text-2xl ">{project.timeline ?? "4 Weeks"}</div>
              </div>
              
            <div className="flex gap-8">
              
              <div className="text-white/40 uppercase text-lg tracking-wider">(services)</div>
              <div className="text-white/75 text-lg md:text-2xl ">
                {(project.services ?? ["Website"]).join(" • ")}
              </div>
            </div>
            </div>

            <div>
              <a
                href={project.liveUrl ?? "#"}
                className="inline-flex items-center text-lg md:text-2xl gap-2 text-[#FF4A03] hover:text-[#FF7A1E]"
              >
                Live Website
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="relative aspect-[16/10]">
              <Image
                src={gallery[0]}
                alt={`${project.name} hero`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/11]">
                <Image
                  src={gallery[1]}
                  alt={`${project.name} gallery 1`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative aspect-[16/11]">
                <Image
                  src={gallery[2]}
                  alt={`${project.name} gallery 2`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 space-y-12">
          <div className="flex flex-col md:flex-row   justify-between">
            <div className=" text-3xl text-white/40">Challenges.</div>
            <div className="max-w-3xl text-xl text-right  sm:text-3xl text-white/65 leading-relaxed">
              {project.problem}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-3xl text-white/40">Solutions.</div>
            <div className="max-w-3xl text-xl sm:text-3xl text-white/65 leading-relaxed">
              {project.approach}
            </div>
          </div>



          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-3xl text-white/40">Results.</div>
            <div className="max-w-3xl">
              <div className="text-xl sm:text-3xl text-white/65 leading-relaxed">
                {project.outcome}
              </div>
              <div className="mt-4 text-sm sm:text-base text-white/65">
                <span className="text-white/85 text-xl sm:text-3xl font-medium">Result: </span> <span className="text-xl sm:text-3xl" >{project.result}</span>
              </div>

              {(project.metrics ?? []).length > 0 && (
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  {(project.metrics ?? []).slice(0, 3).map((m) => (
                    <div key={m.label}>
                      <div className="text-7xl font-semibold text-white/85 leading-none">
                        {m.value}
                      </div>
                      <div className="mt-2 text-xl text-white/40">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {project.testimonial && (
          <div className="mt-16 sm:mt-20">
            <div className="max-w-3xl">
              <div className="text-4xl text-[#FF4A03] leading-none">“</div>
              <p className="mt-4 text-2xl sm:text-3xl font-semibold leading-snug text-white/80">
                {project.testimonial.quote}
              </p>
              <div className="mt-6 text-sm text-white/45">
                {project.testimonial.name}
                {project.testimonial.role ? ` — ${project.testimonial.role}` : ""}
              </div>
            </div>
          </div>
        )}

        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between gap-6">
            <AnimatedTextMask
              as="h2"
              className="text-5xl sm:text-6xl font-semibold tracking-tight text-white/75"
              lines={["MORE WORKS"]}
            />
            <Link
              href="/work"
              className="hidden sm:inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            >
              SEE ALL
            </Link>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            {moreWorks.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
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
                  <div className="text-xl sm:text-3xl font-semibold text-white/90">
                    {p.name}
                  </div>
                  <div className="mt-1 text-xl text-white/55">{p.overview}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Link
              href="/work"
              className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs text-white/80 hover:bg-white/10 transition"
            >
              SEE ALL
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
