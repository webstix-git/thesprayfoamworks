import type { Metadata } from 'next';
import { ProjectPage } from '@/components/ProjectPage';
import { getLocationPage } from '@/lib/location-pages';
import { siteConfig } from '@/lib/site';

const page = getLocationPage('sun-prairie')!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${siteConfig.url}${page.route}` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${siteConfig.url}${page.route}`,
  },
};

export default function SunPrairiePage() {
  return <ProjectPage page={page} />;
}
