import fs from "fs";
import path from "path";

let cachedCssHrefs: string[] | null = null;

/** Список CSS-бандлов из .next/static/css (для preload в <head>). */
export function getCssAssetHrefs(): string[] {
  if (cachedCssHrefs) {
    return cachedCssHrefs;
  }

  try {
    const cssDir = path.join(process.cwd(), ".next/static/css");
    cachedCssHrefs = fs
      .readdirSync(cssDir)
      .filter((file) => file.endsWith(".css"))
      .sort()
      .map((file) => `/_next/static/css/${file}`);
  } catch {
    cachedCssHrefs = [];
  }

  return cachedCssHrefs;
}
