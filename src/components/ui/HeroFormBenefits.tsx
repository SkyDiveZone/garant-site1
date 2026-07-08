import { HERO_FORM_BENEFITS } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function HeroFormBenefits() {
  return (
    <ul className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm">
      {HERO_FORM_BENEFITS.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 border-b border-slate-100 py-2.5 text-sm text-slate-700 last:border-0 last:pb-0 first:pt-0"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}
