import { ServiceGroupsSection } from "@/components/sections/ServiceGroupsSection";
import { ELEKTRIK_SERVICE_GROUPS } from "@/lib/elektrik-service-groups";

interface ElektrikServiceGroupsProps {
  formAnchor?: string;
}

export function ElektrikServiceGroups({ formAnchor = "#lead-form" }: ElektrikServiceGroupsProps) {
  return (
    <ServiceGroupsSection
      badge="Услуги"
      title="Группы электромонтажных работ"
      subtitle="Выберите нужную услугу — у каждой популярной задачи есть отдельная страница с ценами"
      groups={ELEKTRIK_SERVICE_GROUPS}
      formAnchor={formAnchor}
    />
  );
}
