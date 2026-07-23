import type { ReviewAdminReply } from "@/lib/reviews/types";
import { cn } from "@/lib/utils";
import { Building2, MessageSquare } from "lucide-react";

interface ReviewAdminReplyBlockProps {
  reply: ReviewAdminReply;
  className?: string;
}

export function ReviewAdminReplyBlock({ reply, className }: ReviewAdminReplyBlockProps) {
  const paragraphs = reply.text.split(/\n{2,}/).filter(Boolean);

  return (
    <div
      className={cn(
        "mt-5 rounded-xl border border-brand-100/80 bg-gradient-to-br from-brand-50/90 to-slate-50 p-4 shadow-sm sm:p-5",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm">
          <Building2 className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <MessageSquare className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
            <p className="font-display text-sm font-bold text-brand-800 sm:text-base">
              💬 Ответ Гарант Мастер
            </p>
          </div>

          <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-[15px]">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            С уважением,
            <br />
            Команда «Гарант Мастер»
          </p>
        </div>
      </div>
    </div>
  );
}
