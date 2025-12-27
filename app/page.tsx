import HeroSection from "@/sections/HeroSection";

//import Hero3Section from "@/sections/Hero3Section";
import ComparisonSection from "@/sections/ComparisonSection";
import PresenceSection from "@/sections/PresenceSection";
import NowImagineSection from "@/sections/NowImagineSection";
import ServicesSection from "@/sections/ServicesSection";
import WorkTeaserSection from "@/sections/WorkTeaserSection";
//import WhySection from "@/sections/WhySection";
import ProcessSection from "@/sections/ProcessSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FaqSection from "@/sections/FaqSection";
//import SelfCheckSection from "@/sections/SelfCheckSection";

export const metadata = {
  title: "TheAccellor - Website Designed to Accelarate you business",
  description:
    "We design and build websites that attract visitors and turn them into customers, and grow your business.",
};

export default function Home() {
  return (
    <>

      <HeroSection />
      
      <ComparisonSection />
      <PresenceSection />
      <NowImagineSection />
      <WorkTeaserSection />
      <ServicesSection />

      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
