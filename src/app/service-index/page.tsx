import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import {
  commercialNavLinks,
  residentialNavLinks,
  serviceNavLinks,
} from '@/lib/nav-links';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Index | The Sprayfoam Works',
  description:
    'Index of insulation services from The Sprayfoam Works: spray foam, fiberglass, retrofitting, pole barns, remodels, new construction, and insulation removal.',
  alternates: { canonical: `${siteConfig.url}/service-index` },
};

export default function ServiceIndex() {
  return (
    <LegalPage title="Service Index">
      <p>
        Browse every insulation service offered by The Sprayfoam Works across Madison, Cottage Grove,
        and greater Dane County. For an overview of how we work, visit our{' '}
        <Link href="/services">services page</Link>.
      </p>

      <div className="sfw-sitemap-grid sfw-service-index-grid">
        <div className="sfw-sitemap-group">
          <h2>Insulation Services</h2>
          <ul>
            <li>
              <Link href="/services">All Services</Link>
            </li>
            {serviceNavLinks.map((service) => (
              <li key={service.href}>
                <Link href={service.href}>{service.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sfw-sitemap-group">
          <h2>Residential</h2>
          <ul>
            <li>
              <Link href="/residential">All Residential</Link>
            </li>
            {residentialNavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sfw-sitemap-group">
          <h2>Commercial</h2>
          <ul>
            {commercialNavLinks.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </LegalPage>
  );
}
