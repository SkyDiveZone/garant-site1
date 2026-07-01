import { Benefits } from "@/components/sections/Benefits";
import { Cases } from "@/components/sections/Cases";
import { FAQSection } from "@/components/sections/FAQSection";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ForWhom } from "@/components/sections/ForWhom";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MidPageCTA } from "@/components/sections/MidPageCTA";
import { Pricing } from "@/components/sections/Pricing";
import { ProductDemo } from "@/components/sections/ProductDemo";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyTrust } from "@/components/sections/WhyTrust";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyTrust />
      <ForWhom />
      <Benefits />
      <ProductDemo />
      <HowItWorks />
      <Features />
      <Cases />
      <MidPageCTA />
      <Testimonials />
      <Stats />
      <Pricing />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
