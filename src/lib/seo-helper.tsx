import seoSchemaData from '@/config/seo-schema.json';

export type PageKey = keyof typeof seoSchemaData.pages;

export const siteConfig = seoSchemaData.siteConfig;

/**
 * Generate Next.js Metadata for any page key
 */
export function getPageMetadata(pageKey: PageKey) {
  const page = seoSchemaData.pages[pageKey];
  if (!page) {
    return {
      title: `${siteConfig.titleName} | Gamified Learning App`,
      description: "TuT is India's leading gamified study app for Class 6 to 10 students.",
    };
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.url}${page.path}`,
      siteName: siteConfig.titleName,
      images: [
        {
          url: `${siteConfig.url}/logo.png`,
          width: 512,
          height: 512,
          alt: `${siteConfig.titleName} Logo`,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
      images: [`${siteConfig.url}/logo.png`],
    },
  };
}

/**
 * Generate JSON-LD Schema Object for a given page key
 */
export function getPageSchema(pageKey: PageKey) {
  const page = seoSchemaData.pages[pageKey];
  if (!page) return null;
  return page.schema;
}

/**
 * Helper component to render inline JSON-LD script for SEO Schema
 */
export function SchemaScript({ pageKey }: { pageKey: PageKey }) {
  const schema = getPageSchema(pageKey);
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
