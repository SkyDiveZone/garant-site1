import { CategoryOffersCatalog } from "@/components/sections/CategoryOffersCatalog";

interface CatalogProps {
  formAnchor?: string;
  className?: string;
  headerAlign?: "left" | "center";
}

export function MasterNaChasOffersCatalog(props: CatalogProps) {
  return (
    <CategoryOffersCatalog category="master-na-chas" title="Все услуги мастера на час" {...props} />
  );
}
