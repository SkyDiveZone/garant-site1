import { RemontKvartirLanding } from "@/components/landing/RemontKvartirLanding";
import { ServiceLanding } from "@/components/landing/ServiceLanding";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { createPageMetadata } from "@/lib/seo";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
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

  return (
    <>
      <ServiceJsonLd service={service} />
      {slug === "remont-kvartir" ? (
        <RemontKvartirLanding service={service} />
      ) : (
        <ServiceLanding service={service} />
      )}
    </>
  );
}
