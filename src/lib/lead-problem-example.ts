const CATEGORY_EXAMPLES: Record<string, string> = {
  santehnik: "Например: течёт смеситель на кухне, нужна замена",
  elektrik: "Например: не работает розетка, нужна замена",
  "master-na-chas": "Например: нужно собрать шкаф и повесить полку",
  "remont-kvartir": "Например: нужен косметический ремонт комнаты",
};

const DEFAULT_EXAMPLE = "Например: течёт кран или не работает розетка";

export function problemExampleForService(serviceName: string): string {
  const short = serviceName.replace(/\s*\([^)]*\)/g, "").trim();
  const lower = short.charAt(0).toLocaleLowerCase("ru") + short.slice(1);
  return `Например: ${lower}`;
}

export function problemExampleForPath(pathname: string): string {
  const category = pathname.split("/").filter(Boolean)[0];
  if (!category) return DEFAULT_EXAMPLE;
  return CATEGORY_EXAMPLES[category] ?? DEFAULT_EXAMPLE;
}
