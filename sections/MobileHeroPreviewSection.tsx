import { CONTAINER_SCROLL_PREVIEW_SRC } from "@/components/ui/container-scroll-animation";

export default function MobileHeroPreviewSection() {
  return (
    <div className="relative z-10 mx-auto max-w-6xl  mt-10 md:hidden">
      <div className="relative overflow-hidden rounded-3xl  bg-black/10">
        <div className="relative aspect-[4/5] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CONTAINER_SCROLL_PREVIEW_SRC}
            alt="Website preview"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
      </div>
    </div>
  );
}
