import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { PopularServices } from "@/components/sections/PopularServices";
import { WhyTrust } from "@/components/sections/WhyTrust";
import { ForWhom } from "@/components/sections/ForWhom";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { MidPageCTA } from "@/components/sections/MidPageCTA";
import { Stats } from "@/components/sections/Stats";
import { FinalCTA } from "@/components/sections/FinalCTA";

const ProductDemo = dynamic(
  () => import("@/components/sections/ProductDemo").then((m) => m.ProductDemo),
  { loading: () => <SectionPlaceholder /> }
);
const Cases = dynamic(
  () => import("@/components/sections/Cases").then((m) => m.Cases),
  { loading: () => <SectionPlaceholder /> }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials").then((m) => m.Testimonials),
  { loading: () => <SectionPlaceholder /> }
);
const Pricing = dynamic(
  () => import("@/components/sections/Pricing").then((m) => m.Pricing),
  { loading: () => <SectionPlaceholder /> }
);
const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection").then((m) => m.FAQSection),
  { loading: () => <SectionPlaceholder /> }
);

function SectionPlaceholder() {
  return <div className="section-padding animate-pulse bg-slate-50/50" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <PopularServices />
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
