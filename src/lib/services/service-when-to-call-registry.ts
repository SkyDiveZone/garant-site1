import type { ServiceWhenToCallConfig } from "@/lib/service-when-to-call";
import { SANTEHNIK_WHEN_TO_CALL } from "@/lib/services/santehnik-when-to-call";

const SERVICE_WHEN_TO_CALL: Record<string, ServiceWhenToCallConfig> = {
  santehnik: SANTEHNIK_WHEN_TO_CALL,
};

export function getServiceWhenToCallConfig(
  slug: string | null | undefined
): ServiceWhenToCallConfig | undefined {
  if (!slug) return undefined;
  return SERVICE_WHEN_TO_CALL[slug];
}
