import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";

interface WorkGalleryProps {
  label: string;
  images?: readonly { src: string; alt: string }[];
}

export function WorkGallery({ label, images }: WorkGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <Section id="gallery" className="bg-white">
      <SectionHeader badge="Фото" title={label} subtitle="Примеры выполненных работ" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
