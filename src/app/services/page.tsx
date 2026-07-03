import type { Metadata } from 'next';
import { ServicesPage } from '@/components/ServicesPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Insulation Services | The Sprayfoam Works',
  description:
    'Spray foam and fiberglass insulation, retrofitting, pole barns, remodels, new construction, and insulation removal across Madison and Dane County, WI.',
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: 'Insulation Services | The Sprayfoam Works',
    description:
      'Residential and commercial insulation services across Madison, Cottage Grove, and greater Dane County.',
    url: `${siteConfig.url}/services`,
  },
};

export default function Services() {
  return <ServicesPage />;
}
