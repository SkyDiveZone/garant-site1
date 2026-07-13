import { Hero } from "@/components/sections/Hero";
import { PopularServices } from "@/components/sections/PopularServices";
import { WhyTrust } from "@/components/sections/WhyTrust";
import { ForWhom } from "@/components/sections/ForWhom";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HomeGuaranteeSection } from "@/components/sections/HomeGuaranteeSection";
import { HomeFAQSection } from "@/components/sections/HomeFAQSection";
import { Stats } from "@/components/sections/Stats";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularServices />
      <WhyTrust />
      <ForWhom />
      <Benefits />
      <HowItWorks />
      <HomeGuaranteeSection />
      <HomeFAQSection />
      <Stats />
      <ServiceArea />
      <FinalCTA />
    </>
  );
}
