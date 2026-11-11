import { Hero } from "@/components/sections/Hero";
import { PopularServices } from "@/components/sections/PopularServices";
import { PricingCatalog } from "@/components/sections/PricingCatalog";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HomeGuaranteeSection } from "@/components/sections/HomeGuaranteeSection";
import { HomeFAQSection } from "@/components/sections/HomeFAQSection";
import { HomeReviewsPreview } from "@/components/sections/HomeReviewsPreview";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularServices />
      <PricingCatalog />
      <HowItWorks />
      <HomeReviewsPreview />
      <HomeGuaranteeSection />
      <FinalCTA />
      <HomeFAQSection />
      <ServiceArea />
    </>
  );
}
