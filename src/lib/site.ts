import fs from 'fs';
import path from 'path';
import { wireHtmlLinks } from './wire-html-links';

export type PageMeta = {
  slug: string;
  route: string;
  title: string;
  description: string;
  showTrustBar: boolean;
};

const PAGES: PageMeta[] = [
  {
    slug: 'home',
    route: '/',
    title: 'The Sprayfoam Works | Professional Spray Foam Insulation in Madison, WI',
    description:
      'Direct-to-customer spray foam and fiberglass insulation for homes, pole barns, and commercial builds across Madison and Cottage Grove, Wisconsin.',
    showTrustBar: true,
  },
  {
    slug: 'spray-foam-insulation',
    route: '/spray-foam-insulation',
    title: 'Spray Foam Insulation | The Sprayfoam Works',
    description:
      'Professional spray foam insulation services in Dane County. Closed-cell and open-cell foam for attics, walls, pole barns, and commercial buildings.',
    showTrustBar: false,
  },
  {
    slug: 'retrofitting',
    route: '/retrofitting',
    title: 'Retrofitting Insulation | The Sprayfoam Works',
    description:
      'Insulation retrofitting for existing homes in Madison and Dane County. Improve comfort, drafts, and energy performance without a major remodel.',
    showTrustBar: false,
  },
  {
    slug: 'pole-barns',
    route: '/pole-barns',
    title: 'Pole Barn Insulation | The Sprayfoam Works',
    description:
      'Pole barn insulation in Dane County. Spray foam and fiberglass options for shops, garages, steel buildings, and post-frame buildings.',
    showTrustBar: false,
  },
  {
    slug: 'remodels',
    route: '/remodels',
    title: 'Remodel Insulation | The Sprayfoam Works',
    description:
      'Insulation for remodels and renovations in Madison, WI. Spray foam and fiberglass installed during kitchen, basement, attic, and whole-home projects.',
    showTrustBar: false,
  },
  {
    slug: 'new-construction',
    route: '/new-construction',
    title: 'New Construction Insulation | The Sprayfoam Works',
    description:
      'New construction insulation in Madison and Dane County. Spray foam, fiberglass, and hybrid insulation packages for efficient new builds.',
    showTrustBar: false,
  },
  {
    slug: 'insulation-removal',
    route: '/insulation-removal',
    title: 'Insulation Removal | The Sprayfoam Works',
    description:
      'Insulation removal services in Madison and Dane County. Clean out old attic or cavity insulation before air sealing and new insulation.',
    showTrustBar: false,
  },
  {
    slug: 'fiberglass',
    route: '/fiberglass',
    title: 'Fiberglass Insulation | The Sprayfoam Works',
    description:
      'Fiberglass insulation installation in Madison and Dane County. Batt and blown-in insulation for attics, walls, remodels, and new construction.',
    showTrustBar: false,
  },
  {
    slug: 'about',
    route: '/about',
    title: 'About SFW | The Sprayfoam Works',
    description:
      'Meet The Sprayfoam Works, a family-owned Wisconsin insulation contractor serving Dane County for 17 years.',
    showTrustBar: false,
  },
  {
    slug: 'madison',
    route: '/madison',
    title: 'Spray Foam Insulation Madison, WI | The Sprayfoam Works',
    description:
      'Local spray foam and fiberglass insulation for Madison homes and businesses. Direct pricing from a Dane County-based team.',
    showTrustBar: false,
  },
  {
    slug: 'commercial',
    route: '/commercial',
    title: 'Commercial Insulation | The Sprayfoam Works',
    description:
      'Commercial spray foam insulation for warehouses, shops, and new construction across Dane County, Wisconsin.',
    showTrustBar: false,
  },
  {
    slug: 'residential',
    route: '/residential',
    title: 'Residential Insulation | The Sprayfoam Works',
    description:
      'Residential spray foam and fiberglass insulation for homes, remodels, and retrofits in Madison and Cottage Grove.',
    showTrustBar: false,
  },
  {
    slug: 'our-team',
    route: '/our-team',
    title: 'Our Team | The Sprayfoam Works',
    description:
      'Meet the team behind The Sprayfoam Works, owner Aaron Hastings and a licensed, local crew serving Madison and Cottage Grove.',
    showTrustBar: false,
  },
  {
    slug: 'history',
    route: '/history',
    title: 'Our History | The Sprayfoam Works',
    description:
      'From a father-son apprenticeship to a trusted Dane County insulation contractor, the story of The Sprayfoam Works, Inc.',
    showTrustBar: false,
  },
  {
    slug: 'mission',
    route: '/mission',
    title: 'Mission & Values | The Sprayfoam Works',
    description:
      'Our mission: healthier, durable, comfortable spaces for every customer. Direct pricing, professional integrity, and top-tier equipment.',
    showTrustBar: false,
  },
  {
    slug: 'testimonials',
    route: '/testimonials',
    title: 'Testimonials | The Sprayfoam Works',
    description:
      'Read what Dane County homeowners and contractors say about The Sprayfoam Works. Real Google reviews from Madison and Cottage Grove customers.',
    showTrustBar: false,
  },
  {
    slug: 'services',
    route: '/services',
    title: 'Insulation Services | The Sprayfoam Works',
    description:
      'Spray foam and fiberglass insulation, retrofitting, pole barns, remodels, new construction, and insulation removal across Madison and Dane County, WI.',
    showTrustBar: false,
  },
  {
    slug: 'gallery',
    route: '/gallery',
    title: 'Project Gallery | The Sprayfoam Works',
    description:
      'Browse completed spray foam, fiberglass, pole barn, and commercial insulation projects from The Sprayfoam Works across Dane County, WI.',
    showTrustBar: false,
  },
  {
    slug: 'locations',
    route: '/locations',
    title: 'Service Areas & Locations | The Sprayfoam Works',
    description:
      'Spray foam and fiberglass insulation across Dane County, WI. Serving Madison, Cottage Grove, Sun Prairie, Middleton, Verona, Fitchburg, and surrounding communities.',
    showTrustBar: false,
  },
  {
    slug: 'contact',
    route: '/contact',
    title: 'Contact Us | The Sprayfoam Works',
    description:
      'Contact The Sprayfoam Works for spray foam and fiberglass insulation across Dane County, WI. Call or text (608) 279-0088.',
    showTrustBar: false,
  },
  {
    slug: 'get-a-quote',
    route: '/get-a-quote',
    title: 'Get a Quote | The Sprayfoam Works',
    description:
      'Request a free insulation quote from The Sprayfoam Works. Spray foam and fiberglass for homes, pole barns, and commercial builds across Dane County, WI.',
    showTrustBar: false,
  },
  {
    slug: 'cottage-grove',
    route: '/cottage-grove',
    title: 'Spray Foam Insulation in Cottage Grove, WI | The Sprayfoam Works',
    description:
      'Spray foam and fiberglass insulation for Cottage Grove, WI, our home base. Direct pricing from a local, licensed Dane County crew.',
    showTrustBar: false,
  },
  {
    slug: 'sun-prairie',
    route: '/sun-prairie',
    title: 'Spray Foam Insulation in Sun Prairie, WI | The Sprayfoam Works',
    description:
      'Spray foam and fiberglass insulation for Sun Prairie, WI homes and businesses. Free quotes from a local Dane County team.',
    showTrustBar: false,
  },
  {
    slug: 'middleton',
    route: '/middleton',
    title: 'Spray Foam Insulation in Middleton, WI | The Sprayfoam Works',
    description:
      'Spray foam and fiberglass insulation for Middleton, WI homes and new construction. Direct pricing from a local, licensed crew.',
    showTrustBar: false,
  },
  {
    slug: 'verona',
    route: '/verona',
    title: 'Spray Foam Insulation in Verona, WI | The Sprayfoam Works',
    description:
      'Spray foam and fiberglass insulation for Verona, WI homes, additions, and shops. Free, no-pressure quotes from a local Dane County crew.',
    showTrustBar: false,
  },
  {
    slug: 'fitchburg',
    route: '/fitchburg',
    title: 'Spray Foam Insulation in Fitchburg, WI | The Sprayfoam Works',
    description:
      'Spray foam and fiberglass insulation for Fitchburg, WI, residential and commercial. Direct pricing from a local Dane County team.',
    showTrustBar: false,
  },
  {
    slug: 'sitemap',
    route: '/sitemap',
    title: 'Sitemap | The Sprayfoam Works',
    description:
      'Browse every page on The Sprayfoam Works website, services, service areas, company pages, and more.',
    showTrustBar: false,
  },
  {
    slug: 'privacy-policy',
    route: '/privacy-policy',
    title: 'Privacy Policy | The Sprayfoam Works',
    description:
      'Privacy policy for The Sprayfoam Works, Inc. Learn how we collect, use, and protect the information you share with us.',
    showTrustBar: false,
  },
  {
    slug: 'ai-policy',
    route: '/ai-policy',
    title: 'AI Policy | The Sprayfoam Works',
    description:
      'AI policy for The Sprayfoam Works, Inc. Learn how we use artificial intelligence on our website and in customer communications.',
    showTrustBar: false,
  },
  {
    slug: 'service-index',
    route: '/service-index',
    title: 'Service Index | The Sprayfoam Works',
    description:
      'Index of insulation services from The Sprayfoam Works: spray foam, fiberglass, retrofitting, pole barns, remodels, new construction, and insulation removal.',
    showTrustBar: false,
  },
];

export function getAllPages(): PageMeta[] {
  return PAGES;
}

export function getPageBySlug(slug: string): PageMeta | undefined {
  return PAGES.find((p) => p.slug === slug);
}

export function readPageHtml(slug: string): string {
  const filePath = path.join(process.cwd(), 'src', 'content', `${slug}.html`);
  const raw = fs.readFileSync(filePath, 'utf8');
  return wireHtmlLinks(raw);
}

export const siteConfig = {
  name: 'The Sprayfoam Works, Inc.',
  phone: '(608) 279-0088',
  phoneTel: 'tel:6082790088',
  email: 'sprayfoamworks@gmail.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sprayfoamworks.com',
};

export type SiteTrustStat = {
  value: string;
  label: string;
};

export const siteTrustStats: SiteTrustStat[] = [
  { value: '17', label: 'Years of hands-on experience' },
  { value: '100%', label: 'Commitment to Better Results' },
  { value: '2', label: 'Madison & Cottage Grove' },
  { value: '$0', label: 'Middleman markup, direct pricing' },
];
