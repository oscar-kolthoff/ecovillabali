/** Renders a single JSON-LD structured data block. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = "https://ecovillabali.com";

/** Builds a BreadcrumbList schema from Home down to the given page. */
export function buildBreadcrumbSchema(pageName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: SITE_URL + path,
      },
    ],
  };
}
