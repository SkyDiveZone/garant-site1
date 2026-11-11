import { Hero } from "@/components/sections/Hero";
import { PricingCatalog } from "@/components/sections/PricingCatalog";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HomeReviewsPreview } from "@/components/sections/HomeReviewsPreview";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PopularServices } from "@/components/sections/PopularServices";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PricingCatalog />
      <HowItWorks />
      <ServiceArea />
      <HomeReviewsPreview />
      <PopularServices />
      <FinalCTA />
    </>
  );
}
