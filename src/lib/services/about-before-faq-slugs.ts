/** Страницы, где блок «Чем занимается…» рендерится перед FAQ, а не под формой. */
export const ABOUT_BEFORE_FAQ_SLUGS = ["santehnik", "elektrik", "master-na-chas"] as const;

export type AboutBeforeFaqSlug = (typeof ABOUT_BEFORE_FAQ_SLUGS)[number];

export function isAboutBeforeFaqSlug(slug: string): slug is AboutBeforeFaqSlug {
  return (ABOUT_BEFORE_FAQ_SLUGS as readonly string[]).includes(slug);
}
