import { ServiceOfferLanding } from "@/components/landing/ServiceOfferLanding";
import { ServiceOfferJsonLd } from "@/components/seo/ServiceOfferJsonLd";
import { getServiceOffer, getServiceOfferPath } from "@/lib/service-catalog";
import { getAllMasterNaChasOfferSlugs } from "@/lib/service-catalog/categories/master-na-chas";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMasterNaChasOfferSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getServiceOffer("master-na-chas", slug);
  if (!offer) return {};

  return createPageMetadata({
    title: offer.title,
    description: offer.description,
    path: getServiceOfferPath("master-na-chas", slug),
    keywords: [...offer.keywords],
  });
}

export default async function MasterNaChasOfferPage({ params }: PageProps) {
  const { slug } = await params;
  const offer = getServiceOffer("master-na-chas", slug);

  if (!offer) notFound();

  const path = getServiceOfferPath("master-na-chas", slug);

  return (
    <>
      <ServiceOfferJsonLd offer={offer} path={path} />
      <ServiceOfferLanding offer={offer} />
    </>
  );
}
