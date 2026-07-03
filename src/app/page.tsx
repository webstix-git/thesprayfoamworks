import type { Metadata } from 'next';
import { PageContent } from '@/components/PageContent';
import { getPageBySlug, readPageHtml, siteConfig } from '@/lib/site';

const page = getPageBySlug('home')!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: page.title,
    description: page.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  const html = readPageHtml('home');

  return <PageContent html={html} stickyHeader />;
}
