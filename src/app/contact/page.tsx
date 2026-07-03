import type { Metadata } from 'next';
import { ContactPage } from '@/components/ContactPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us | The Sprayfoam Works',
  description:
    'Contact The Sprayfoam Works for spray foam and fiberglass insulation in Madison, Cottage Grove, and across Dane County. Call or text (608) 279-0088 for a free quote.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: 'Contact Us | The Sprayfoam Works',
    description:
      'Get in touch with The Sprayfoam Works for a free insulation quote across Dane County, WI.',
    url: `${siteConfig.url}/contact`,
  },
};

export default function Contact() {
  return <ContactPage />;
}
