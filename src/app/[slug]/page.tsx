import { ServiceLanding } from "@/components/landing/ServiceLanding";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import { SITE } from "@/lib/data";
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

  const url = `${SITE.url}/${slug}`;

  return {
    title: service.title,
    description: service.description,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      locale: "ru_RU",
      type: "website",
      siteName: SITE.name,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd service={service} />
      <ServiceLanding service={service} />
    </>
  );
}
