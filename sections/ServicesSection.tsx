const services = [
  "Website Design",
  "Website Development",
  "Business Websites",
  "Landing Pages",
  "Google Business Setup",
  "Performance & SEO Basics",
];

export default function ServicesSection() {
  return (
    <section className="py-24 sm:py-28 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white/90">
            What we
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A03] to-[#FF7A1E]">
              build for you
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Built for speed. Designed for clarity. Optimized for growth.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service}
              className="group relative rounded-2xl border border-white/10 bg-[#0b0b0b] p-8 transition-all duration-300 hover:border-[#FF4A03]/30 hover:bg-[#0b0b0b]/80"
            >
              {/* Number indicator */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Service content */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#FF4A03]/10 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-[#FF4A03]" />
                </div>
                
                <h3 className="text-xl font-semibold text-white/90 mb-3">
                  {service}
                </h3>
                
                <p className="text-sm text-white/50 leading-relaxed">
                  Professional solutions tailored to your business needs with modern best practices and cutting-edge technology.
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FF4A03]/20 to-[#FF7A1E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
