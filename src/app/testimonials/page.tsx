import type { Metadata } from 'next';
import { TestimonialsShowcase } from '@/components/TestimonialsShowcase';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Testimonials | The Sprayfoam Works',
  description:
    'Read what Dane County homeowners and contractors say about The Sprayfoam Works. Real 5-star Google reviews from Madison, Cottage Grove, and beyond.',
  alternates: { canonical: `${siteConfig.url}/testimonials` },
  openGraph: {
    title: 'Testimonials | The Sprayfoam Works',
    description:
      'Real 5-star reviews from Dane County homeowners and contractors who trusted The Sprayfoam Works.',
    url: `${siteConfig.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  return <TestimonialsShowcase />;
}
