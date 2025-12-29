import Image from "next/image";

type ServiceCard = {
  title: string;
  image?: string;
  bgClassName: string;
  details?: string[];
  isComingSoon?: boolean;
};

const services: ServiceCard[] = [
  {
    title: "Web Design",
    image: "https://cdn.dribbble.com/userupload/17139406/file/original-d4b51e9be9976803bfa1bd41239412f8.jpg",
    bgClassName: "bg-[#bfc4f3]",
    details: [
      "SaaS websites that convert",
      "High-velocity GTM landing pages",
      "Funnel pages for campaigns",
    ],
  },
  {
    title: "Web Development",
    image: "https://d2pas86kykpvmq.cloudfront.net/images/mockups/preview/MacBook+Pro+Mockups+vol.3/scene-12.avif",
    bgClassName: "bg-[#f0efe8]",
    details: [
      "Brand identity & guidelines",
      "Social + marketing templates",
      "Consistent visual language",
    ],
  },

  {
    title: "Development",
    image: "https://d2pas86kykpvmq.cloudfront.net/images/mockups/preview/MacBook+Pro+Mockups+(vol.2)/scene-4.avif",
    bgClassName: "bg-[#e6e6e6]",
    details: [
      "Fast, responsive builds",
      "SEO-ready structure",
      "Smooth animations & polish",
    ],
  },
  {
    title: "Stay tuned!",
    bgClassName: "bg-[#070707]",
    isComingSoon: true,
    details: ["More services coming soon.."],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white/90">
            What We Create
          </h2>
          <p className="text-sm sm:text-base text-white/55 max-w-md sm:text-right">
            Everything a business needs to move faster, convert cleaner, and scale profitably.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <div className={`relative h-[460px] `}>
                <div className="absolute left-6 top-6 z-20 text-xl font-semibold text-white/85">
                  {service.isComingSoon ? (
                    <span className="text-white/70">{service.title}</span>
                  ) : (
                    service.title
                  )}
                </div>

                {service.isComingSoon ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5">
                      <div className="text-3xl leading-none text-white/60">+</div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0">
                    <div className="relative h-full w-full">
                      <Image
                        src={service.image ?? "/website1.png"}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

                <div className="absolute inset-0 z-30 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-black/65" />

                  <div className="relative h-full w-full p-6">
                    

                    {service.details?.length ? (
                      <div className="mt-6 space-y-4 text-white/90">
                        {service.details.map((d) => (
                          <div key={d} className="flex items-start gap-3">
                            <div className="mt-1 h-4 w-4 shrink-0 rounded-md bg-white/10 text-white/80 flex items-center justify-center">
                              <span className="text-xs">•</span>
                            </div>
                            <div className="text-base font-medium">{d}</div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
