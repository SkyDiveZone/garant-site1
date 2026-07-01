import { SITE } from "@/lib/data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Шефская ул., 1А",
      addressLocality: "Екатеринбург",
      addressCountry: "RU",
    },
    openingHours: "Mo-Su 08:00-21:00",
    priceRange: "₽₽",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1200",
    },
    areaServed: {
      "@type": "City",
      name: "Екатеринбург",
    },
    serviceType: [
      "Ремонт квартир",
      "Сантехнические работы",
      "Электромонтажные работы",
      "Мастер на час",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
