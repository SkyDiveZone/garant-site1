export const CONVERSION_LANDING_SLUGS = ["elektrik", "master-na-chas"] as const;

export type ConversionLandingSlug = (typeof CONVERSION_LANDING_SLUGS)[number];

export function isConversionLandingSlug(slug: string): slug is ConversionLandingSlug {
  return (CONVERSION_LANDING_SLUGS as readonly string[]).includes(slug);
}
