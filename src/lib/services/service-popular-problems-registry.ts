import type { ServicePopularProblemsConfig } from "@/lib/service-popular-problems";
import { MASTER_NA_CHAS_POPULAR_PROBLEMS } from "@/lib/services/master-na-chas-popular-problems";
import { SANTEHNIK_POPULAR_PROBLEMS } from "@/lib/services/santehnik-popular-problems";

const SERVICE_POPULAR_PROBLEMS: Record<string, ServicePopularProblemsConfig> = {
  santehnik: SANTEHNIK_POPULAR_PROBLEMS,
  "master-na-chas": MASTER_NA_CHAS_POPULAR_PROBLEMS,
};

export function getServicePopularProblemsConfig(
  slug: string | null | undefined
): ServicePopularProblemsConfig | undefined {
  if (!slug) return undefined;
  return SERVICE_POPULAR_PROBLEMS[slug];
}
