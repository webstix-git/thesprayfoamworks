import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { photos } from '@/lib/project-photos';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Service Index | The Sprayfoam Works',
  description:
    'Complete index of insulation services from The Sprayfoam Works, Inc. in Madison and Dane County, WI: spray foam, fiberglass, insulation removal, residential, commercial, pole barns, and post-frame projects.',
  alternates: { canonical: `${siteConfig.url}/service-index` },
};

type IndexEntry = {
  label: string;
  href: string;
  summary: string;
};

const coreServices: IndexEntry[] = [
  {
    label: 'Spray Foam Insulation',
    href: '/spray-foam-insulation',
    summary:
      'Open-cell and closed-cell spray foam that air-seals and insulates in one step. Used in attics, walls, rim joists, pole barns, shops, and commercial buildings for high-performance thermal and moisture control.',
  },
  {
    label: 'Fiberglass & Blow-in Insulation',
    href: '/fiberglass-blow-in-insulation',
    summary:
      'Batt and blown-in fiberglass for attics, framed walls, ceilings, and sound control. A cost-effective option that can stand alone or pair with spray foam in a hybrid system.',
  },
  {
    label: 'Insulation Removal',
    href: '/insulation-removal',
    summary:
      'Clean removal of old, damaged, wet, contaminated, or underperforming insulation so the space can be air-sealed and reinsulated correctly.',
  },
];

const residentialServices: IndexEntry[] = [
  {
    label: 'Residential Insulation Overview',
    href: '/residential',
    summary:
      'Insulation for Dane County homes, from new builds to older houses that need comfort and efficiency upgrades.',
  },
  {
    label: 'New Construction',
    href: '/new-construction',
    summary:
      'Spray foam, fiberglass, and hybrid insulation packages installed at the right stage of framing for new homes and additions.',
  },
  {
    label: 'Existing Homes',
    href: '/existing-homes',
    summary:
      'Retrofit insulation for drafty or inefficient homes without a full remodel. Common work includes attic air sealing, rim joists, wall cavities, and cold-room fixes.',
  },
  {
    label: 'Remodels & Additions',
    href: '/remodels-additions',
    summary:
      'Insulation timed with kitchen, basement, attic, and whole-home renovations so cavities are sealed before finishes go back up.',
  },
];

const commercialServices: IndexEntry[] = [
  {
    label: 'Commercial Buildings',
    href: '/commercial-buildings',
    summary:
      'Insulation for warehouses, offices, shops, and other commercial spaces that need a tighter envelope and more even temperatures.',
  },
  {
    label: 'Pole barns & Agricultural Buildings',
    href: '/pole-barns-agricultural-buildings',
    summary:
      'Year-round insulation for pole barns, livestock buildings, machine sheds, steel buildings, and heated shops across Dane County farms and properties.',
  },
  {
    label: 'Post-frame Construction',
    href: '/post-frame-construction',
    summary:
      'Insulation planned with your builder for new post-frame shops, garages, offices, and farm buildings, installed before liners and finishes.',
  },
];

function ServiceList({ entries }: { entries: IndexEntry[] }) {
  return (
    <ul className="sfw-service-index-list">
      {entries.map((entry) => (
        <li key={entry.href} className="sfw-service-index-entry">
          <Link href={entry.href}>{entry.label}</Link>
          <p>{entry.summary}</p>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceIndex() {
  return (
    <LegalPage
      title="Service Index"
      bannerImage={photos.foamAndFiberglass}
      bannerAlt="Spray foam and fiberglass insulation installed in framing"
    >
      <p>
        This page is a plain-language index of every insulation service offered by{' '}
        <strong>The Sprayfoam Works, Inc.</strong>, a locally owned contractor serving Madison,
        Cottage Grove, and greater Dane County / South-Central Wisconsin. Use it to understand what
        we install, which building types we work on, and where to find full details on this website.
      </p>
      <p>
        We specialize in direct-to-customer spray foam and fiberglass insulation for homes, pole
        barns, post-frame buildings, and commercial projects. For a visual overview, see our{' '}
        <Link href="/services">services page</Link>. To request pricing, use the{' '}
        <Link href="/get-a-quote">Get a Quote</Link> form.
      </p>

      <h2>Company snapshot</h2>
      <ul className="sfw-service-index-facts">
        <li>
          <strong>Business name:</strong> The Sprayfoam Works, Inc.
        </li>
        <li>
          <strong>Primary services:</strong> spray foam insulation, fiberglass &amp; blow-in
          insulation, insulation removal
        </li>
        <li>
          <strong>Project types:</strong> residential new construction, existing-home retrofits,
          remodels &amp; additions, commercial buildings, pole barns, agricultural buildings, and
          post-frame construction
        </li>
        <li>
          <strong>Service area:</strong> Madison, Cottage Grove, Sun Prairie, Middleton, Verona,
          Fitchburg, and surrounding Dane County communities
        </li>
        <li>
          <strong>Contact:</strong>{' '}
          <a href={siteConfig.phoneTel}>{siteConfig.phone}</a> ·{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> ·{' '}
          <Link href="/contact">Contact page</Link>
        </li>
      </ul>

      <h2>Core insulation services</h2>
      <p>
        These are the main materials and work types we install. Each linked page explains benefits,
        applications, process, and common questions.
      </p>
      <ServiceList entries={coreServices} />

      <h2>Residential projects</h2>
      <p>
        Residential work covers new homes, older Dane County housing stock, and renovation projects
        where insulation needs to be planned around existing finishes or open framing.
      </p>
      <ServiceList entries={residentialServices} />

      <h2>Commercial &amp; agricultural projects</h2>
      <p>
        Commercial and agricultural insulation focuses on larger open spans, steel and post-frame
        assemblies, condensation control, and buildings that need to stay usable year-round.
      </p>
      <ServiceList entries={commercialServices} />

      <h2>Where we work</h2>
      <p>
        The Sprayfoam Works is based in Dane County, Wisconsin, with work across Madison, Cottage
        Grove, Sun Prairie, Middleton, Verona, Fitchburg, and nearby communities. Learn more on our{' '}
        <Link href="/about#areas-we-serve">Areas We Serve</Link> section and the{' '}
        <Link href="/about">About</Link> page.
      </p>

      <h2>How to get a quote</h2>
      <p>
        The preferred way to start a project is our online{' '}
        <Link href="/get-a-quote">Get a Quote</Link> form. You can also email{' '}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call/text{' '}
        <a href={siteConfig.phoneTel}>{siteConfig.phone}</a>. Final pricing, scheduling, and project
        scope are always confirmed by our team after we understand the building and goals.
      </p>

      <h2>Related site pages</h2>
      <ul className="sfw-service-index-related">
        <li>
          <Link href="/gallery">Project Gallery</Link> — photos from completed job sites
        </li>
        <li>
          <Link href="/faqs">FAQs</Link> — common questions about spray foam, fiberglass, and the
          install process
        </li>
        <li>
          <Link href="/about#customer-reviews">Customer Reviews</Link> — what local customers say
          about our work
        </li>
        <li>
          <Link href="/sitemap">Sitemap</Link> — every page linked from the main site navigation
        </li>
      </ul>
    </LegalPage>
  );
}
