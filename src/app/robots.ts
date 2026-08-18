import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mytut.in';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/auth/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
