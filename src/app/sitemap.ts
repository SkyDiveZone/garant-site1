import { SITE } from "@/lib/data";
import { getAllServiceSlugs } from "@/lib/services";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${SITE.url}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
  ];
}
