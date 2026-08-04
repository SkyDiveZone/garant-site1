import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { formatPriceFrom } from "@/lib/format-price";
import { getCategoryOffersGrouped, getServiceOfferPath } from "@/lib/service-catalog";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RemontOffersCatalogProps {
  formAnchor?: string;
  className?: string;
  headerAlign?: "left" | "center";
}

export function RemontOffersCatalog({
  formAnchor = "#lead-form",
  className,
  headerAlign = "center",
}: RemontOffersCatalogProps) {
  const groups = getCategoryOffersGrouped("remont-kvartir");

  return (
    <Section id="service-catalog" className={cn("bg-white", className)}>
      <SectionHeader
        badge="Услуги"
        title="Все услуги ремонта квартир"
        subtitle="Выберите услугу — у каждой есть отдельная страница с ценами и описанием"
        align={headerAlign}
      />

      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 font-display text-xl font-bold text-slate-900">{group.title}</h3>
            <ul className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              {group.offers.map((offer) => {
                const href = getServiceOfferPath("remont-kvartir", offer.slug);

                return (
                  <li
                    key={offer.slug}
                    className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0 flex-1">
                      <Link href={href} className="text-sm font-semibold text-slate-900 hover:text-brand-600">
                        {offer.serviceName}
                      </Link>
                      <p className="mt-1 text-sm font-bold text-brand-700">
                        {formatPriceFrom(offer.priceFrom)}
                        {offer.priceUnit && (
                          <span className="ml-1 text-xs font-normal text-slate-400">
                            {offer.priceUnit}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                      <Button href={href} variant="outline" size="sm" className="w-full sm:w-auto">
                        Подробнее
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button href={`${href}${formAnchor}`} size="sm" className="w-full sm:w-auto">
                        Заказать
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
