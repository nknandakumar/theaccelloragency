import type { Metadata } from "next";
import { Inter_Tight, Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import FinalCtaSection from "@/sections/FinalCtaSection";
import FooterSection from "@/sections/FooterSection";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheAccellor – Design. Development. Growth.",
  description: "Websites designed to grow your business.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "TheAccellor – Design. Development. Growth.",
    description: "Websites designed to grow your business.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "TheAccellor" }],
  },
  twitter: {
    card: "summary",
    title: "TheAccellor – Design. Development. Growth.",
    description: "Websites designed to grow your business.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${interTight.variable} ${inter.variable} antialiased min-h-dvh bg-[#050505]`}
      >
        <header className="sticky top-0 z-50 ">
          <div className="mx-auto max-w-6xl px-4 py-12 flex justify-center">
            <nav className="flex w-full items-center justify-between gap-4 rounded-full border border-white/15 bg-black/80 px-6 py-3 text-sm text-white/80 shadow-lg shadow-black/40">
              <a
                href="/"
                className="flex h-9 w-9 items-center justify-center rounded-full  overflow-hidden"
                aria-label="TheAccellor home"
              >
                <Image
                  src="/logo.png"
                  alt="TheAccellor"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                  priority
                />
              </a>
              <div className="hidden md:flex items-center gap-8">
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
                <a href="/work" className="hover:text-white transition-colors">
                  Work
                </a>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
                
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-1.5 text-xs sm:text-sm font-medium text-black shadow-md hover:bg-zinc-100 transition-colors"
              >
                
                <span className="whitespace-nowrap">Start a Project</span>
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <FinalCtaSection />
        <FooterSection />

      </body>
    </html>
  );
}
