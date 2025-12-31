"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ACTIVE_CLASS = "bg-white/8 text-white";

export default function DesktopNavLinks() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isWork = pathname === "/work" || pathname.startsWith("/work/");
  const isContact = pathname === "/contact";

  const linkClass = (active: boolean) =>
    cn(
      "rounded-lg px-4 py-2 transition-colors",
      active ? ACTIVE_CLASS : "text-white/80 hover:text-white hover:bg-white/5"
    );

  return (
    <div className="hidden md:flex text-xl items-center gap-3">
      <Link href="/" className={linkClass(isHome)}>
        Home
      </Link>
      <Link href="/work" className={linkClass(isWork)}>
        Work
      </Link>
      <Link href="/contact" className={linkClass(isContact)}>
        Contact
      </Link>
    </div>
  );
}
