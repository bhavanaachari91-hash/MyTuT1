import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mytut.in';

  const routes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/faq',
    '/learning-hub',
    '/learning-hub/contest',
    '/learning-hub/parent',
    '/learning-hub/planner',
    '/learning-hub/quick-bite',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/blog' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/learning-hub') ? 0.8 : 0.7,
  }));
}
