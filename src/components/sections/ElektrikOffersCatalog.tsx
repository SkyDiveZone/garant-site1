import { CategoryOffersCatalog } from "@/components/sections/CategoryOffersCatalog";

interface CatalogProps {
  formAnchor?: string;
  className?: string;
  headerAlign?: "left" | "center";
}

export function ElektrikOffersCatalog(props: CatalogProps) {
  return <CategoryOffersCatalog category="elektrik" title="Все услуги электрика" {...props} />;
}
