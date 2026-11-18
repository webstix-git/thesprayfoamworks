import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import {
  aboutNavLinks,
  commercialNavLinks,
  residentialNavLinks,
  serviceNavLinks,
} from '@/lib/nav-links';
import { photos } from '@/lib/project-photos';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sitemap | The Sprayfoam Works',
  description:
    'Browse every page linked from The Sprayfoam Works site navigation: services, residential, commercial, about, and more.',
  alternates: { canonical: `${siteConfig.url}/sitemap` },
};

const sitemapGroups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Residential', href: '/residential' },
      { label: 'Commercial', href: '/commercial-buildings' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Get a Quote', href: siteConfig.quotePage.href },
    ],
  },
  {
    heading: 'Services',
    links: serviceNavLinks,
  },
  {
    heading: 'Residential',
    links: residentialNavLinks,
  },
  {
    heading: 'Commercial',
    links: commercialNavLinks,
  },
  {
    heading: 'About',
    links: aboutNavLinks,
  },
];

export default function Sitemap() {
  return (
    <LegalPage
      title="Sitemap"
      bannerImage={photos.commercialWall}
      bannerAlt="Spray foam insulation on a commercial wall"
    >
      <div className="sfw-sitemap-grid">
        {sitemapGroups.map((group) => (
          <div key={group.heading} className="sfw-sitemap-group">
            <h2>{group.heading}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LegalPage>
  );
}
