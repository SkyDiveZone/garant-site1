"use client";

import {
  AlertTriangle,
  Award,
  Briefcase,
  Building2,
  Clock,
  Droplets,
  Home,
  KeyRound,
  Package,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Award,
  Clock,
  Users,
  Package,
  Sparkles,
  Home,
  KeyRound,
  Building2,
  AlertTriangle,
  Briefcase,
  Timer,
  Paintbrush,
  Droplets,
  Zap,
  Wrench,
};

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? ShieldCheck;
  return <Icon className={className} aria-hidden="true" />;
}
