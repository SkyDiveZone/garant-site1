import { ConversionServiceLanding } from "@/components/landing/ConversionServiceLanding";
import { EkbCategoryPage } from "@/components/ekb2/EkbCategoryPage";
import { ServiceLanding } from "@/components/landing/ServiceLanding";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { isEkbCategoryKey } from "@/lib/ekb2/pages";
import { createPageMetadata } from "@/lib/seo";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { isConversionLandingSlug } from "@/lib/services/conversion-slugs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/${slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  if (isEkbCategoryKey(slug)) {
    return (
      <>
        <ServiceJsonLd service={service} />
        <EkbCategoryPage category={slug} />
      </>
    );
  }

  return (
    <>
      <ServiceJsonLd service={service} />
      {isConversionLandingSlug(slug) ? (
        <ConversionServiceLanding service={service} />
      ) : (
        <ServiceLanding service={service} />
      )}
    </>
  );
}
