import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="bg-[#050505] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/35 to-[#FF4A03]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-[#FF7A1E]/30" />
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute -bottom-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#FF4A03]/45 blur-3xl" />

          <div className="relative px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
     

            <h2 className="mx-auto mt-7 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-white">
              Still thinking?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-white/60">
              Have a project in mind? We'd love to hear about it.
              <br />
              Let's create something great together!
            </p>

            <div className="mt-9 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Let's Build It Right
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
