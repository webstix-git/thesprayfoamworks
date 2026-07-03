import type { Metadata } from 'next';
import { GalleryPage } from '@/components/GalleryPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Project Gallery | The Sprayfoam Works',
  description:
    'Browse completed spray foam, fiberglass, pole barn, and commercial insulation projects from The Sprayfoam Works across Dane County, WI.',
  alternates: { canonical: `${siteConfig.url}/gallery` },
  openGraph: {
    title: 'Project Gallery | The Sprayfoam Works',
    description:
      'A look at real insulation projects completed across Madison, Cottage Grove, and greater Dane County.',
    url: `${siteConfig.url}/gallery`,
  },
};

export default function Gallery() {
  return <GalleryPage />;
}
