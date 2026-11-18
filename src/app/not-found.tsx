import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import {
  aboutNavLinks,
  commercialNavLinks,
  residentialNavLinks,
  serviceNavLinks,
} from '@/lib/nav-links';
import { siteConfig } from '@/lib/site';

const helpfulGroups: { heading: string; links: { label: string; href: string }[] }[] = [
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

export default function NotFound() {
  return (
    <LegalPage title="Page Not Found">
      <title>Page Not Found | The Sprayfoam Works</title>
      <p>
        The page you&apos;re looking for doesn&apos;t exist or may have moved. Use the links below
        to keep browsing, or visit our{' '}
        <Link href="/sitemap">full sitemap</Link> and{' '}
        <Link href="/contact">contact us</Link> if you need help.
      </p>

      <div className="sfw-sitemap-grid">
        {helpfulGroups.map((group) => (
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
