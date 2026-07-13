import { PhoneList } from "@/components/ui/PhoneList";
import { TelegramLink } from "@/components/ui/TelegramLink";
import { cn } from "@/lib/utils";

interface ServiceContactBlockProps {
  className?: string;
}

/** Блок телефонов и Telegram — как на странице «Мастер на час». */
export function ServiceContactBlock({ className }: ServiceContactBlockProps) {
  return (
    <div className={cn("mt-6 space-y-2", className)}>
      <PhoneList
        variant="stack"
        linkClassName="text-base font-semibold text-brand-600 hover:underline sm:text-lg"
        iconClassName="text-brand-600"
      />
      <TelegramLink className="text-sky-600 hover:text-sky-700" iconSize={18} />
    </div>
  );
}
