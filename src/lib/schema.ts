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
