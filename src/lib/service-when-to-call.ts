import type { LucideIcon } from "lucide-react";

export interface ServiceWhenToCallItem {
  title: string;
  description: string;
  icon: LucideIcon;
  iconStyle: string;
}

export interface ServiceWhenToCallCta {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel?: string;
}

export interface ServiceWhenToCallConfig {
  badge?: string;
  title: string;
  subtitle: string;
  items: ServiceWhenToCallItem[];
  bottomCta: ServiceWhenToCallCta;
}
