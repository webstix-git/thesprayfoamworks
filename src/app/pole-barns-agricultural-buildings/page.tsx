import type { Metadata } from 'next';
import { ServicePage } from '@/components/ServicePage';
import { getServicePage } from '@/lib/service-pages';
import { siteConfig } from '@/lib/site';

const page = getServicePage('pole-barns-agricultural-buildings')!;

export const metadata: Metadata = {
  title: 'Pole Barn & Agricultural Building Insulation',
  description: page.metaDescription,
  alternates: { canonical: `${siteConfig.url}${page.route}` },
  openGraph: {
    title: 'Pole Barn & Agricultural Building Insulation | The Sprayfoam Works',
    description: page.metaDescription,
    url: `${siteConfig.url}${page.route}`,
  },
};

export default function PoleBarnsAgriculturalBuildingsPage() {
  return <ServicePage page={page} />;
}
