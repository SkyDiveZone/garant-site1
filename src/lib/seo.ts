import { SITE } from "@/lib/data";
import type { Metadata } from "next";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogImage = "/logo.svg",
}: PageMetaOptions): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    keywords,
    alternates: { canonical: url },
    manifest: "/site.webmanifest",
    openGraph: {
      title,
      description,
      url,
      locale: "ru_RU",
      type: "website",
      siteName: SITE.name,
      images: [
        {
          url: ogImage,
          width: 320,
          height: 88,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export const HOME_METADATA = createPageMetadata({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  keywords: [
    "ремонт квартир екатеринбург",
    "сантехник екатеринбург",
    "электрик екатеринбург",
    "мастер на час",
    "вызов мастера",
    "гарант мастер",
  ],
});
