import type { Metadata } from 'next';
import { PageContent } from '@/components/PageContent';
import { getPageBySlug, readPageHtml, siteConfig } from '@/lib/site';

export function createPageMetadata(slug: string): Metadata {
  const page = getPageBySlug(slug)!;
  const url = `${siteConfig.url}${page.route}`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
    },
  };
}

export function createMarketingPage(slug: string) {
  const html = readPageHtml(slug);
  return <PageContent html={html} stickyHeader />;
}
