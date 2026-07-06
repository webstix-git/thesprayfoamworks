import type { Metadata } from 'next';
import { GetAQuotePage } from '@/components/GetAQuotePage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get a Quote | The Sprayfoam Works',
  description:
    'Request a free insulation quote from The Sprayfoam Works. Spray foam and fiberglass for homes, pole barns, and commercial builds across Dane County, WI.',
  alternates: { canonical: `${siteConfig.url}/get-a-quote` },
  openGraph: {
    title: 'Get a Quote | The Sprayfoam Works',
    description:
      'Tell us about your project and get direct pricing on spray foam and fiberglass insulation.',
    url: `${siteConfig.url}/get-a-quote`,
  },
};

export default function GetAQuote() {
  return <GetAQuotePage />;
}
