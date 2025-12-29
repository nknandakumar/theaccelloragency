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
      "https://d2pas86kykpvmq.cloudfront.net/images/mockups/preview/MacBook+Pro+Mockups+(vol.2)/scene-9.avif",
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
      "https://cdn.dribbble.com/userupload/17139777/file/original-cc9960997a23ed0b3a994ed0a5409abe.jpg?resize=1504x1128&vertical=center",
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
      "https://cdn.dribbble.com/userupload/21067234/file/original-e8583d2cd5501b27f57711323d7c4e69.jpg?resize=1504x1003&vertical=center",
  },
];

export default function WorkTeaserSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-12 sm:mb-14">
          
          <h2 className="mt-3 text-3xl sm:text-7xl uppercase md:text-5xl font-extrabold">
            Featured Works
          </h2>
        </header>

        <div className="space-y-8 sm:space-y-10">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col lg:flex-row gap-6 sm:gap-8 rounded-3xl bg-[#0b0b0b] border border-white/5 overflow-hidden"
            >
              <div className="order-2 lg:order-1 flex-1 px-6 sm:px-8 py-6 sm:py-8 flex flex-col justify-between">
                <div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-semibold ${project.badgeBg}`}
                    >
                      {project.badgeIcon}
                    </div>
                    <span className="text-2xl uppercase  font-extrabold text-white/50">
                      {project.label}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-4xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm sm:text-xl text-white/70 max-w-md">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    href="/work"
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
            className="text-sm uppercase font-bold sm:text-base text-[#FF4A03] hover:text-[#FF7A1E] border border-white/50 px-12 py-4 rounded-xl w-full sm:w-auto text-center"
          >
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
