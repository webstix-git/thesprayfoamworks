import type { Metadata } from 'next';
import { ProjectPage } from '@/components/ProjectPage';
import { getProjectPage } from '@/lib/project-pages';
import { siteConfig } from '@/lib/site';

const page = getProjectPage('remodels')!;

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

export default function RemodelsPage() {
  return <ProjectPage page={page} />;
}
