/** Reserved for special conversion landings. Empty: master-na-chas uses ServiceLanding like elektrik/santehnik. */
export const CONVERSION_LANDING_SLUGS = [] as const;

export type ConversionLandingSlug = (typeof CONVERSION_LANDING_SLUGS)[number];

export function isConversionLandingSlug(slug: string): slug is ConversionLandingSlug {
  return (CONVERSION_LANDING_SLUGS as readonly string[]).includes(slug);
}
