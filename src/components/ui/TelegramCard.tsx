import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TelegramCardProps {
  className?: string;
}

export function TelegramCard({ className }: TelegramCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm",
        className
      )}
    >
      <p className="font-display text-base font-bold text-slate-900">💬 Есть вопросы?</p>
      <p className="mt-2 text-sm font-medium text-slate-800">Напишите нам в Telegram</p>
      <p className="mt-1 text-sm text-slate-600">
        Отвечаем ежедневно
        <br />
        в течение 5 минут.
      </p>
      <Button
        href={SITE.telegram.url}
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        className="mt-4 w-full"
      >
        Написать в Telegram
      </Button>
    </div>
  );
}
