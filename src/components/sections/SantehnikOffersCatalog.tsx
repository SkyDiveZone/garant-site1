import { CategoryOffersCatalog } from "@/components/sections/CategoryOffersCatalog";

interface CatalogProps {
  formAnchor?: string;
  className?: string;
  headerAlign?: "left" | "center";
}

export function SantehnikOffersCatalog(props: CatalogProps) {
  return <CategoryOffersCatalog category="santehnik" title="Все услуги сантехника" {...props} />;
}
