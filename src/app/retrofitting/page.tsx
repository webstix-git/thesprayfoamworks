import type { Metadata } from 'next';
import { ProjectPage } from '@/components/ProjectPage';
import { getProjectPage } from '@/lib/project-pages';
import { siteConfig } from '@/lib/site';

const page = getProjectPage('retrofitting')!;

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

export default function RetrofittingPage() {
  return <ProjectPage page={page} />;
}
