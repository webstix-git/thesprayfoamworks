import type { Metadata } from 'next';
import { LocationsPage } from '@/components/LocationsPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Areas & Locations | The Sprayfoam Works',
  description:
    'Spray foam and fiberglass insulation across Dane County, WI. Serving Madison, Cottage Grove, Sun Prairie, Middleton, Verona, Fitchburg, and surrounding communities.',
  alternates: { canonical: `${siteConfig.url}/locations` },
  openGraph: {
    title: 'Service Areas & Locations | The Sprayfoam Works',
    description:
      'Local insulation services across Madison, Cottage Grove, and greater Dane County, Wisconsin.',
    url: `${siteConfig.url}/locations`,
  },
};

export default function Locations() {
  return <LocationsPage />;
}
