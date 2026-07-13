import { PHONES, SITE } from "@/lib/data";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    sameAs: [SITE.telegram.url],
    contactPoint: PHONES.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.raw,
      contactType: "customer service",
      areaServed: "RU",
      availableLanguage: "Russian",
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Шефская ул., 1А",
      addressLocality: "Екатеринбург",
      addressRegion: "Сверdловская область",
      addressCountry: "RU",
    },
    openingHours: "Mo-Su 08:00-00:00",
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

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/android-chrome-512x512.png`,
    email: SITE.email,
    telephone: SITE.phoneRaw,
    sameAs: [SITE.telegram.url],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Шефская ул., 1А",
      addressLocality: "Екатеринбург",
      addressCountry: "RU",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  return (
    <>
      {[localBusiness, organization, website].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
