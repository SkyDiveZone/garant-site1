"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TESTIMONIALS } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Section id="reviews">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Отзывы"
            title="1 200+ клиентов уже оценили нас"
            subtitle="Читайте, что говорят жители Екатеринбурга о нашей работе"
          />
        </MotionItem>

        <MotionItem>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="w-[340px] shrink-0 snap-start rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm"
              >
                <Quote className="h-8 w-8 text-brand-200" />
                <div className="mt-4 flex gap-0.5">
                  {[...Array(item.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500">{item.date}</div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
