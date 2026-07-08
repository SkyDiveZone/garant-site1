import { Section, SectionHeader } from "@/components/ui/Section";
import { Camera } from "lucide-react";
import Image from "next/image";

interface WorkGalleryProps {
  label: string;
  images?: readonly { src: string; alt: string }[];
}

const PLACEHOLDERS = [
  { caption: "До / после", tone: "from-brand-500/20 to-brand-600/5" },
  { caption: "Процесс работы", tone: "from-cyan-500/20 to-cyan-600/5" },
  { caption: "Готовый результат", tone: "from-emerald-500/20 to-emerald-600/5" },
];

export function WorkGallery({ label, images }: WorkGalleryProps) {
  return (
    <Section>
      <SectionHeader badge="Фото работ" title={label} subtitle="Примеры выполненных заказов" />
      <div className="grid gap-4 sm:grid-cols-3">
        {images
          ? images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            ))
          : PLACEHOLDERS.map((item) => (
              <div
                key={item.caption}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br ${item.tone}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-500">
                  <Camera className="h-8 w-8 opacity-40" />
                  <span className="text-sm font-medium">{item.caption}</span>
                  <span className="text-xs opacity-70">Фото скоро</span>
                </div>
              </div>
            ))}
      </div>
    </Section>
  );
}
