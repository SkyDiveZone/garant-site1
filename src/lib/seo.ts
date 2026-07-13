import { SITE } from "@/lib/data";
import type { Metadata } from "next";

const FAVICON_VERSION = "2";

const SITE_ICONS: Metadata["icons"] = {
  icon: [
    { url: `/favicon.ico?v=${FAVICON_VERSION}`, sizes: "48x48" },
    { url: `/favicon-16x16.png?v=${FAVICON_VERSION}`, sizes: "16x16", type: "image/png" },
    { url: `/favicon-32x32.png?v=${FAVICON_VERSION}`, sizes: "32x32", type: "image/png" },
    { url: `/icon.png?v=${FAVICON_VERSION}`, sizes: "192x192", type: "image/png" },
  ],
  apple: [
    {
      url: `/apple-touch-icon.png?v=${FAVICON_VERSION}`,
      sizes: "180x180",
      type: "image/png",
    },
  ],
  shortcut: `/favicon.ico?v=${FAVICON_VERSION}`,
};

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
    manifest: `/site.webmanifest?v=${FAVICON_VERSION}`,
    icons: SITE_ICONS,
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
  title:
    "Гарант Мастер — сантехник, электрик, мастер на час и ремонт квартир в Екатеринбурге",
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
