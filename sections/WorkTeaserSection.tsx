import Link from "next/link";

const projects = [
  {
    id: "noto-cafe",
    label: "01",
    name: "Noto Café",
    description:
      "A cozy digital home for a neighborhood café, featuring seasonal menus, event updates, and warm visual storytelling.",
    badgeBg: "bg-[#FF4A03]",
    badgeIcon: "✴",
    image:
      "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "aurora-legal",
    label: "02",
    name: "Aurora Legal",
    description:
      "A modern, trustworthy website for a boutique law firm, designed to convey professionalism with a human touch.",
    badgeBg: "bg-[#f5c744]",
    badgeIcon: "◎",
    image:
      "https://images.pexels.com/photos/37347/office-freelancer-computer-business-37347.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "stride-fitness",
    label: "03",
    name: "Stride Fitness",
    description:
      "A bold landing experience for a boutique fitness studio, focused on sessions, schedules, and easy class booking.",
    badgeBg: "bg-[#22c55e]",
    badgeIcon: "▢",
    image:
      "https://images.pexels.com/photos/7991650/pexels-photo-7991650.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function WorkTeaserSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-12 sm:mb-14">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/40">
            (03) Featured Works
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold">
            Featured Works
          </h2>
        </header>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col lg:flex-row gap-6 sm:gap-8 rounded-3xl bg-[#0b0b0b] border border-white/5 overflow-hidden"
            >
              <div className="flex-1 px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between">
                <div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-semibold ${project.badgeBg}`}
                    >
                      {project.badgeIcon}
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/50">
                      {project.label}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-white/70 max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm sm:text-base font-medium shadow-[0_18px_40px_rgba(0,0,0,0.45)] hover:bg-neutral-100 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="relative lg:w-1/2 min-h-[220px] sm:min-h-[460px]">
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
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
            className="text-sm sm:text-base text-white/60 hover:text-white underline-offset-4 hover:underline"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
