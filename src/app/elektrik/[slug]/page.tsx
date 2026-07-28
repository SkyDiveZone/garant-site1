import { ServiceOfferLanding } from "@/components/landing/ServiceOfferLanding";
import { ServiceOfferJsonLd } from "@/components/seo/ServiceOfferJsonLd";
import { getServiceOffer, getServiceOfferPath } from "@/lib/service-catalog";
import { getAllElektrikOfferSlugs } from "@/lib/service-catalog/categories/elektrik";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllElektrikOfferSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getServiceOffer("elektrik", slug);
  if (!offer) return {};

  return createPageMetadata({
    title: offer.title,
    description: offer.description,
    path: getServiceOfferPath("elektrik", slug),
    keywords: [...offer.keywords],
  });
}

export default async function ElektrikOfferPage({ params }: PageProps) {
  const { slug } = await params;
  const offer = getServiceOffer("elektrik", slug);

  if (!offer) notFound();

  const path = getServiceOfferPath("elektrik", slug);

  return (
    <>
      <ServiceOfferJsonLd offer={offer} path={path} />
      <ServiceOfferLanding offer={offer} />
    </>
  );
}
