export const SITE_URL = "https://www.thewoodlandhotels.com";

export const HOTEL = {
  name: "The Woodland Kandaghat",
  phone: "+91 94180 21100",
  telephone: "+919418021100",
  address: {
    streetAddress: "Silhari, NH 5",
    addressLocality: "Kandaghat",
    addressRegion: "Himachal Pradesh",
    postalCode: "173215",
    addressCountry: "IN",
  },
} as const;

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function pageHead({
  title,
  description,
  path,
  image,
  type = "website",
  breadcrumbs,
  faq,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  type?: "website" | "article";
  breadcrumbs?: Array<{ name: string; path: string }>;
  faq?: Array<{ question: string; answer: string }>;
}) {
  const url = absoluteUrl(path);
  const scripts = [] as Array<{ type: string; children: string }>;

  if (breadcrumbs) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(breadcrumbs)) });
  }

  if (faq) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }),
    });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: image.startsWith("http") ? image : absoluteUrl(image) },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    ...(scripts.length > 0 ? { scripts } : {}),
  };
}

export function hotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LocalBusiness"],
    "@id": `${SITE_URL}/#hotel`,
    name: HOTEL.name,
    url: SITE_URL,
    telephone: HOTEL.telephone,
    address: {
      "@type": "PostalAddress",
      ...HOTEL.address,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
