import { SITE } from "@/lib/data";
import { serializeJsonLd } from "@/lib/json-ld";
import type { ServiceOfferPage } from "@/lib/service-catalog/types";

interface ServiceOfferJsonLdProps {
  offer: ServiceOfferPage;
  path: string;
}

export function ServiceOfferJsonLd({ offer, path }: ServiceOfferJsonLdProps) {
  const url = `${SITE.url}${path}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: offer.categoryLabel,
        item: `${SITE.url}${offer.categoryHref}`,
      },
      { "@type": "ListItem", position: 3, name: offer.serviceName, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: offer.serviceName,
    description: offer.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phoneRaw,
      url: SITE.url,
    },
    areaServed: { "@type": "City", name: "Екатеринбург" },
    offers: {
      "@type": "Offer",
      priceCurrency: "RUB",
      price: offer.priceFrom,
      description: "Ориентировочная стоимость от. Итоговая цена после осмотра.",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: offer.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      {[breadcrumb, serviceSchema, faqSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
    </>
  );
}
