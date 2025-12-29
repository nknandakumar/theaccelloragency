import type { Metadata } from "next";
import { Inter_Tight, Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import FinalCtaSection from "@/sections/FinalCtaSection";
import FooterSection from "@/sections/FooterSection";
import MobileBottomNav from "@/components/MobileBottomNav";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
        className={`${interTight.variable} ${inter.variable} antialiased min-h-dvh bg-[#050505] pb-24 md:pb-0`}
      >
        <header className="sticky top-0 z-50 ">
          <div className="mx-auto max-w-5xl px-2 py-2 flex justify-center">
            <nav className="flex w-full items-center justify-between gap-4 rounded-xl border border-white/15 bg-black/80 px-3 py-2 text-sm text-white/80 shadow-lg shadow-black/40">
              <a
                href="/"
                className="flex sm:h-12 sm:w-12 h-10 w-10 items-center justify-center rounded-lg  overflow-hidden"
                aria-label="TheAccellor home"
              >
                <Image
                  src="/logo.png"
                  alt="TheAccellor"
                  width={36}
                  height={36}
                  className="h-12 w-12 object-contain"
                  priority
                />
              </a>
              <div className="hidden md:flex text-xl items-center gap-8">
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
                className="inline-flex items-center gap-3 rounded-lg bg-white sm:px-4 sm:py-3 px-2 py-2 text-sm sm:text-lg font-medium text-black shadow-md hover:bg-zinc-100 transition-colors"
              >
                
                <span className="whitespace-nowrap">Start a Project</span>
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <FinalCtaSection />
        <FooterSection />

        <MobileBottomNav />

      </body>
    </html>
  );
}
