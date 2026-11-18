import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { SiteSearch } from '@/components/SiteSearch';
import { searchPages } from '@/lib/search-pages';
import { siteConfig } from '@/lib/site';

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const params = await searchParams;
  const raw = Array.isArray(params.q) ? params.q[0] : params.q;
  const query = raw?.trim() ?? '';

  return {
    title: query ? `Search results for “${query}”` : 'Search',
    description:
      'Search The Sprayfoam Works website for insulation services, project types, service areas, and company pages.',
    alternates: { canonical: `${siteConfig.url}/search` },
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const raw = Array.isArray(params.q) ? params.q[0] : params.q;
  const query = raw?.trim() ?? '';
  const results = query ? searchPages(query) : [];

  return (
    <LegalPage title="Search" showBanner={false}>
      <SiteSearch defaultQuery={query} autoFocus={!query} />

      {query ? (
        <p className="sfw-search-summary">
          {results.length === 1
            ? `1 result for “${query}”`
            : `${results.length} results for “${query}”`}
        </p>
      ) : (
        <p className="sfw-search-summary">Enter a keyword to find matching pages.</p>
      )}

      {query && results.length === 0 ? (
        <div className="sfw-search-empty">
          <p>
            No pages matched “{query}”. Try a broader term like “spray foam”, “pole barn”, “Madison”,
            or “quote”, or browse our <Link href="/services">services</Link> and{' '}
            <Link href="/contact">contact</Link> pages.
          </p>
        </div>
      ) : null}

      {results.length > 0 ? (
        <ul className="sfw-search-results">
          {results.map((result) => (
            <li key={result.href} className="sfw-search-result">
              <Link href={result.href}>{result.title}</Link>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </LegalPage>
  );
}
