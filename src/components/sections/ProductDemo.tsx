"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Droplets,
  Hammer,
  Paintbrush,
  Zap,
} from "lucide-react";

const mockupItems = [
  { icon: Droplets, label: "Сантехника", color: "bg-cyan-500" },
  { icon: Zap, label: "Электрика", color: "bg-amber-500" },
  { icon: Paintbrush, label: "Отделка", color: "bg-violet-500" },
  { icon: Hammer, label: "Мастер на час", color: "bg-emerald-500" },
];

export function ProductDemo() {
  return (
    <Section className="overflow-hidden bg-slate-950 text-white">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Как мы работаем"
            title="Один сервис — все виды ремонта"
            subtitle="Не нужно искать разных мастеров. Мы закрываем любую бытовую задачу"
            className="[&_h2]:text-white [&_p]:text-slate-400 [&_span]:border-white/20 [&_span]:bg-white/10 [&_span]:text-brand-300"
          />
        </MotionItem>

        <MotionItem>
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-brand-600/20 via-cyan-500/10 to-brand-600/20 blur-2xl" />

            <div className="glass-dark relative overflow-hidden rounded-3xl border border-white/10 p-1">
              <div className="rounded-[20px] bg-slate-900 p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <span className="ml-4 text-xs text-slate-500">
                    garantekb.ru — панель заявок
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {mockupItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 transition-colors hover:bg-white/10"
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.label}</div>
                        <div className="text-sm text-slate-400">от 200 ₽</div>
                      </div>
                      <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-400" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-brand-500/30 bg-brand-600/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-brand-300">Новая заявка</div>
                      <div className="mt-1 font-semibold">
                        Замена смесителя — ул. Шефская
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
                      Мастер через 45 мин
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
