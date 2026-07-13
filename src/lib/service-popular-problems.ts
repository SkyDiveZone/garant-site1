import type { LucideIcon } from "lucide-react";

export interface ServicePopularProblem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServicePopularProblemsCta {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel?: string;
}

export interface ServicePopularProblemsConfig {
  badge?: string;
  title: string;
  subtitle: string;
  problems: ServicePopularProblem[];
  /** Стили иконки и бейджа (как на HomePopularProblems) */
  iconClass: string;
  badgeClass: string;
  badgeLabel: string;
  situationCta?: ServicePopularProblemsCta;
  bottomCta: ServicePopularProblemsCta;
}
