import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { getServicePage } from '@/lib/service-pages';
import { siteConfig } from '@/lib/site';

const page = getServicePage('post-frame-construction')!;

export const metadata: Metadata = {
  title: 'Post-frame Construction Insulation',
  description: page.metaDescription,
  alternates: { canonical: `${siteConfig.url}${page.route}` },
  openGraph: {
    title: 'Post-frame Construction Insulation | The Sprayfoam Works',
    description: page.metaDescription,
    url: `${siteConfig.url}${page.route}`,
  },
};

export default function PostFrameConstructionPage() {
  return <ServicePage page={page} />;
}
