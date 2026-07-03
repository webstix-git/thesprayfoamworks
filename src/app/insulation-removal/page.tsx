import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { getServicePage } from '@/lib/service-pages';
import { siteConfig } from '@/lib/site';

const page = getServicePage('insulation-removal')!;

export const metadata: Metadata = {
  title: 'Insulation Removal | The Sprayfoam Works',
  description: page.metaDescription,
  alternates: { canonical: `${siteConfig.url}${page.route}` },
  openGraph: {
    title: 'Insulation Removal | The Sprayfoam Works',
    description: page.metaDescription,
    url: `${siteConfig.url}${page.route}`,
  },
};

export default function InsulationRemovalPage() {
  return <ServicePage page={page} />;
}
