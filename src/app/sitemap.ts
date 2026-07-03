import type { MetadataRoute } from 'next';
import { getAllPages, siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllPages().map((page) => ({
    url: `${siteConfig.url}${page.route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page.route === '/' ? 1 : 0.8,
  }));
}
