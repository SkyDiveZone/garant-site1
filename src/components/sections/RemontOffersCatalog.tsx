import { CategoryOffersCatalog } from "@/components/sections/CategoryOffersCatalog";

interface CatalogProps {
  formAnchor?: string;
  className?: string;
  headerAlign?: "left" | "center";
}

export function RemontOffersCatalog(props: CatalogProps) {
  return (
    <CategoryOffersCatalog category="remont-kvartir" title="Все услуги ремонта квартир" {...props} />
  );
}
