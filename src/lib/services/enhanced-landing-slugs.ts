/** Основные страницы направлений с расширенным шаблоном (trust-strip, прайс вместо видов работ, группы услуг). */
export const ENHANCED_LANDING_SLUGS = ["santehnik", "elektrik", "remont-kvartir"] as const;

export type EnhancedLandingSlug = (typeof ENHANCED_LANDING_SLUGS)[number];

export function isEnhancedLandingSlug(slug: string): slug is EnhancedLandingSlug {
  return (ENHANCED_LANDING_SLUGS as readonly string[]).includes(slug);
}
