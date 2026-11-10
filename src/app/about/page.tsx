import type { Metadata } from 'next';
import { AboutPage } from '@/components/AboutPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Our Story | The Sprayfoam Works',
  description:
    'Locally owned and owner-operated since 2015, The Sprayfoam Works brings nearly 20 years of insulation experience to homes, businesses, and agricultural buildings across Greater Dane County.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: 'Our Story | The Sprayfoam Works',
    description:
      'Meet Aaron Hastings and The Sprayfoam Works - local spray foam and fiberglass insulation with direct communication from estimate to installation.',
    url: `${siteConfig.url}/about`,
  },
};

export default function About() {
  return <AboutPage />;
}
