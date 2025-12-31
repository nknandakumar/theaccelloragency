"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PreloaderOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);

    const t = window.setTimeout(() => {
      setVisible(false);
    }, 650);

    return () => window.clearTimeout(t);
  }, [pathname]);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] transition-opacity duration-500 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-white/80 text-xl sm:text-2xl font-semibold tracking-wide">TheAccellor</div>
    </div>
  );
}
