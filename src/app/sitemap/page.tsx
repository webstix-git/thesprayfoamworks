import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import {
  aboutNavLinks,
  commercialNavLinks,
  locationNavLinks,
  residentialNavLinks,
  serviceNavLinks,
} from '@/lib/nav-links';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sitemap | The Sprayfoam Works',
  description:
    'Browse every page on The Sprayfoam Works website, services, service areas, company pages, and more.',
  alternates: { canonical: `${siteConfig.url}/sitemap` },
};

const sitemapGroups: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Main',
    links: [
      { label: 'Home', href: '/' },
      { label: 'All Services', href: '/services' },
      { label: 'Residential', href: '/residential' },
      { label: 'Commercial', href: '/commercial' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Services',
    links: serviceNavLinks,
  },
  {
    heading: 'Residential',
    links: [{ label: 'All Residential', href: '/residential' }, ...residentialNavLinks],
  },
  {
    heading: 'Commercial',
    links: commercialNavLinks,
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      ...aboutNavLinks,
      { label: 'Our Team', href: '/our-team' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    heading: 'Service Areas',
    links: locationNavLinks,
  },
];

export default function Sitemap() {
  return (
    <LegalPage title="Sitemap">
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
