"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ACCENT_CLASS = "text-[#FF4A03]";

export default function MobileBottomNav() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isWork = pathname === "/work" || pathname.startsWith("/work/");
  const isContact = pathname === "/contact" || pathname.startsWith("/contact/");

  const linkClass = (active: boolean) =>
    cn(
      "flex-1 rounded-xl px-3 py-2 text-center text-sm font-medium transition-colors",
      active ? ACCENT_CLASS : "text-white/80 hover:text-white"
    );

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl px-4 pb-[max(env(safe-area-inset-bottom),12px)]">
        <nav className="grid grid-cols-3 items-center gap-2 rounded-lg border border-white/15 bg-black/85 backdrop-blur px-2 py-2 shadow-lg shadow-black/40">
          <Link href="/" className={linkClass(isHome)}>
            Home
          </Link>
          <Link href="/work" className={linkClass(isWork)}>
            Work
          </Link>
          <Link href="/contact" className={linkClass(isContact)}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
