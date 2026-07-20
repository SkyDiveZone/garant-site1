import type { ServicePage } from "@/lib/services";
import { PHONES, SITE } from "@/lib/data";

interface ServiceJsonLdProps {
  service: ServicePage;
}

export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  const url = `${SITE.url}/${service.slug}`;

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: SITE.url,
      },
      ...(service.parent
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: service.parent.label,
              item: `${SITE.url}${service.parent.href}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: service.categoryLabel,
              item: url,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: service.categoryLabel,
              item: url,
            },
          ]),
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: service.description,
    url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    sameAs: [SITE.telegram.url, SITE.max.url],
    contactPoint: PHONES.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.raw,
      contactType: "customer service",
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Шефская ул., 1А",
      addressLocality: "Екатеринбург",
      addressCountry: "RU",
    },
    openingHours: "Mo-Su 00:00-23:59",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.categoryLabel,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phoneRaw,
    },
    areaServed: {
      "@type": "City",
      name: "Екатеринбург",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const schemas = [breadcrumb, localBusiness, serviceSchema, faqSchema];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
