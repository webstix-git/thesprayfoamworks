import type { Metadata } from 'next';
import { CompanyPage } from '@/components/CompanyPage';
import { getCompanyPage } from '@/lib/company-pages';
import { siteConfig } from '@/lib/site';

const page = getCompanyPage('our-team')!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `${siteConfig.url}${page.route}` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${siteConfig.url}${page.route}`,
  },
};

export default function OurTeamPage() {
  return <CompanyPage page={page} />;
}
