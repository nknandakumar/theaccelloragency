import Image from "next/image";

const services = [
  {
    title: "Website & Landing Page",
    image: "/website1.png",
    cardClassName: "bg-[#bfc6ff]",
    items: [
      "Launch-ready, conversion-focused builds.",
      "High-velocity GTM landing pages.",
      "Funnel pages for campaigns.",
    ],
  },
  {
    title: "Brand System",
    image: "/branding.png",
    cardClassName: "bg-[#f3efe6]",
    items: [
      "Visual identity and brand guidelines.",
      "Consistent typography and color system.",
      "Assets for web and social.",
    ],
  },
  {
    title: "Product Design",
    image: "/web2.png",
    cardClassName: "bg-[#e9eaec]",
    items: [
      "UX flows and wireframes.",
      "High-fidelity UI design.",
      "Design system components.",
    ],
  },
  {
    title: "Growth Assets",
    image: "/leads.png",
    cardClassName: "bg-[#eef1ff]",
    items: [
      "Ad creatives and campaign assets.",
      "Social templates that stay on-brand.",
      "Email and lead-magnet layouts.",
    ],
  },
  {
    title: "Development",
    image: "/website1.png",
    cardClassName: "bg-[#e9f2ff]",
    items: [
      "Fast, accessible frontends.",
      "Clean, scalable codebase.",
      "Performance + SEO best practices.",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white/90">
              What We Create
            </h2>
            <p className="md:pt-3 text-sm sm:text-base text-white/55 max-w-md md:text-right">
              Everything your business needs to move faster, convert clearer, and scale profitably.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-[32px] ${service.cardClassName} text-black border border-black/10`}
              >
                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-5xl font-semibold text-black/10 transition-colors duration-300 group-hover:text-black/20">
                  01
                </div>

                {/* Service content */}
                <div className="relative p-6 sm:p-7">
                  <div className="text-sm font-semibold text-black/75">
                    {service.title}
                  </div>
                </div>

                <div className="relative h-[280px] sm:h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-black/80" />
                  <div className="relative h-full w-full p-6 sm:p-7 flex flex-col justify-end">
                    <div className="text-xl sm:text-2xl font-semibold text-white">
                      {service.title}
                    </div>
                    <div className="mt-4 space-y-3 text-white/90">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white" />
                          <span className="text-sm sm:text-base leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {services.slice(3, 5).map((service) => (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-[32px] ${service.cardClassName} text-black border border-black/10`}
              >
                {/* Number indicator */}
                <div className="absolute top-4 right-4 text-5xl font-semibold text-black/10 transition-colors duration-300 group-hover:text-black/20">
                  01
                </div>

                {/* Service content */}
                <div className="relative p-6 sm:p-7">
                  <div className="text-sm font-semibold text-black/75">
                    {service.title}
                  </div>
                </div>

                <div className="relative h-[280px] sm:h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-black/80" />
                  <div className="relative h-full w-full p-6 sm:p-7 flex flex-col justify-end">
                    <div className="text-xl sm:text-2xl font-semibold text-white">
                      {service.title}
                    </div>
                    <div className="mt-4 space-y-3 text-white/90">
                      {service.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white" />
                          <span className="text-sm sm:text-base leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] text-white">
              {/* Number indicator */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-2xl text-white/70">
                +
              </div>

              {/* Service content */}
              <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center px-6 text-center">
                <div className="mt-16 text-sm font-semibold text-white/80">Stay tuned!</div>
                <div className="mt-1 text-xs text-white/45">More services coming soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
