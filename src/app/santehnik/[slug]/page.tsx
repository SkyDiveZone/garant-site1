import { ServiceOfferLanding } from "@/components/landing/ServiceOfferLanding";
import { ServiceOfferJsonLd } from "@/components/seo/ServiceOfferJsonLd";
import { getServiceOffer, getServiceOfferPath } from "@/lib/service-catalog";
import { getAllSantehnikOfferSlugs } from "@/lib/service-catalog/categories/santehnik";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSantehnikOfferSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getServiceOffer("santehnik", slug);
  if (!offer) return {};

  return createPageMetadata({
    title: offer.title,
    description: offer.description,
    path: getServiceOfferPath("santehnik", slug),
    keywords: [...offer.keywords],
  });
}

export default async function SantehnikOfferPage({ params }: PageProps) {
  const { slug } = await params;
  const offer = getServiceOffer("santehnik", slug);

  if (!offer) notFound();

  const path = getServiceOfferPath("santehnik", slug);

  return (
    <>
      <ServiceOfferJsonLd offer={offer} path={path} />
      <ServiceOfferLanding offer={offer} />
    </>
  );
}
