import Image from "next/image";
import AnimatedTextMask from "@/components/AnimatedTextMask";
import RevealOnScroll from "@/components/RevealOnScroll";

type ServiceCard = {
  title: string;
  image?: string;
  bgClassName: string;
  details?: string[];
  isComingSoon?: boolean;
};

const services: ServiceCard[] = [
  {
    title: "Web Design & Landing Pages",
    image: "https://cdn.dribbble.com/userupload/17139406/file/original-d4b51e9be9976803bfa1bd41239412f8.jpg",
    bgClassName: "bg-[#bfc4f3]",
    details: [
      "Modern, responsive designs",
      "User-centric interfaces",
      "Brand-aligned aesthetics",
    ],
  },
  {
    title: "Web Development",
    image: "https://d2pas86kykpvmq.cloudfront.net/images/mockups/preview/MacBook+Pro+Mockups+vol.3/scene-12.avif",
    bgClassName: "bg-[#f0efe8]",
    details: [
      "Custom web applications",
      "E-commerce solutions",
      "API integrations",
    ],
  },

  {
    title: "Google Business Profile & SEO",
    image: "https://d2pas86kykpvmq.cloudfront.net/images/mockups/preview/MacBook+Pro+Mockups+(vol.2)/scene-4.avif",
    bgClassName: "bg-[#e6e6e6]",
    details: [
      "Optimized business listings",
      "Consistent information across platforms",
      "Local SEO optimization",
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
        <div className="">
          <AnimatedTextMask
            as="h2"
            className="text-4xl lg:text-7xl lg:leading-tight max-w-5xl mx-auto text-start uppercase tracking-tight font-extrabold text-black dark:text-white"
            lines={["What We Create"]}
          />
          
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.title} delay={idx * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
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

                  <div className="absolute inset-0 z-30 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
                    <div className="absolute inset-0 bg-black/65" />

                    <div className="relative flex h-full w-full flex-col justify-end p-6">
                      {service.details?.length ? (
                        <div className="space-y-4 text-white/90">
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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
