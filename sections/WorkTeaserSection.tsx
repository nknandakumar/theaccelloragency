import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkTeaserSection() {
  const featured = projects.filter((p) => !!p.teaser).slice(0, 3);

  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-12 sm:mb-14">
          
          <h2 className="mt-3 text-3xl sm:text-7xl uppercase md:text-5xl font-extrabold">
            Featured Works
          </h2>
        </header>

        <div className="space-y-8 sm:space-y-10">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col lg:flex-row gap-6 sm:gap-8 rounded-3xl bg-[#0b0b0b] border border-white/5 overflow-hidden"
            >
              <div className="order-2 lg:order-1 flex-1 px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between">
                <div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-semibold ${project.teaser?.badgeBg ?? "bg-white/10"}`}
                    >
                      {project.teaser?.badgeIcon}
                    </div>
                    <span className="text-2xl uppercase  font-extrabold text-white/50">
                      {project.teaser?.label}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-4xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm sm:text-xl text-white/70 max-w-md">
                    {project.teaser?.description ?? project.overview}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center justify-center rounded-xl bg-white text-black px-8 py-3 text-sm sm:text-base font-medium shadow-[0_18px_40px_rgba(0,0,0,0.45)] hover:bg-neutral-100 transition w-full sm:w-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative lg:w-1/2 min-h-[220px] sm:min-h-[460px]">
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.teaser?.image ?? ""}
                    alt={project.name}
                    className="h-full w-full object-cover rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/work"
            className="text-sm uppercase font-bold sm:text-base text-[#FF4A03] hover:text-[#FF7A1E] border border-white/50 px-12 py-4 rounded-xl w-full sm:w-auto text-center"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
