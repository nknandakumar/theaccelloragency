"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function formatTime(d: Date) {
  return d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Europe/London",
  });
}

export default function FooterSection() {
  const [londonTime, setLondonTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setLondonTime(formatTime(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className=" text-white">
      <div className="relative overflow-hidden">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-16">
          <div className="flex items-start justify-between gap-10">
            <div className="grid w-full gap-10 sm:grid-cols-3 max-w-3xl">
              <div>
                <div className="text-lg uppercase tracking-wider text-white/40">{"( Navigation )"}</div>
                <div className="mt-4 space-y-2">
                  <Link className="block text-2xl text-white/80 hover:text-white" href="/about">
                    Works
                  </Link>
                  <Link className="block text-2xl text-white/80 hover:text-white" href="/work">
                    Contact
                  </Link>
                  <Link className="block text-2xl text-white/80 hover:text-white" href="/#services">
                    Services
                  </Link>
                  <Link className="block text-2xl text-white/80 hover:text-white" href="/blog">
                    Blog
                  </Link>
                </div>
              </div>

              <div>
                <div className="text-lg uppercase tracking-wider text-white/40">{"( Social )"}</div>
                <div className="mt-4 space-y-2">
                  <a className="block text-2xl text-white/80 hover:text-white" href="#" rel="noreferrer">
                    Twitter(X)
                  </a>
                  <a className="block text-2xl text-white/80 hover:text-white" href="#" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="block text-2xl text-white/80 hover:text-white" href="#" rel="noreferrer">
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <div className="text-lg uppercase tracking-wider text-white/40">{"( Legals )"}</div>
                <div className="mt-4 space-y-2">
                  <Link className="block text-2xl text-white/80 hover:text-white" href="/legal">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hidden sm:inline-flex text-sm text-[#FF4A03] hover:text-[#FF7A1E]"
            >
              Back to top
            </button>
          </div>

          <div className="mt-12 flex items-center justify-between text-xs text-white/40">
            <div>© {year} TheAccellor. All rights reserved.</div>
           
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="sm:hidden text-[#FF4A03] hover:text-[#FF7A1E]"
            >
              Back to top
            </button>
          </div>

          <div className="relative mt-14 pb-0 sm:pb-0">
            <div className="absolute inset-x-0 -bottom-3 h-28 bg-gradient-to-t from-[#FF4A03]/35 via-[#FF4A03]/10 to-transparent blur-2xl" />
            <div className="relative left-1/2 w-screen -translate-x-1/2">
              <div className="pointer-events-none select-none text-center whitespace-nowrap text-[16vw] leading-[0.85] font-semibold tracking-tight text-white/15 sm:text-[12vw]">
                TheAccellor
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
