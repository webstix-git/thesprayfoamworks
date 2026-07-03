import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { getServicePage } from '@/lib/service-pages';
import { siteConfig } from '@/lib/site';

const page = getServicePage('fiberglass')!;

export const metadata: Metadata = {
  title: 'Fiberglass Insulation | The Sprayfoam Works',
  description: page.metaDescription,
  alternates: { canonical: `${siteConfig.url}${page.route}` },
  openGraph: {
    title: 'Fiberglass Insulation | The Sprayfoam Works',
    description: page.metaDescription,
    url: `${siteConfig.url}${page.route}`,
  },
};

export default function FiberglassPage() {
  return <ServicePage page={page} />;
}
