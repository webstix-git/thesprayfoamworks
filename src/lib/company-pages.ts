export type CompanyPageSlug = 'our-team' | 'history' | 'mission' | 'testimonials';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ValueCard = {
  title: string;
  description: string;
  icon: 'pricing' | 'equipment' | 'health' | 'learning' | 'integrity' | 'scale';
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type TeamMember = {
  id?: string;
  name: string;
  role: string;
  bio: string;
  quote?: string;
  image: string;
  featured?: boolean;
};

export type Testimonial = {
  name: string;
  initials: string;
  location?: string;
  text: string;
};

export type CompanyPageData = {
  slug: CompanyPageSlug;
  route: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  breadcrumb: BreadcrumbItem[];
};

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=The+Spray+Foam+Works,+Inc+Reviews';

export const googleReviews: Testimonial[] = [
  {
    name: 'Abby Sporel',
    initials: 'AS',
    location: 'Homeowner · Dane County',
    text: 'Aaron did an excellent job on our project that included adding spray foam to our exterior walls and attic in a seasonal cottage we are converting to year-round use. He was very pleasant to work with, high quality work and materials and timely in getting the job done, all for a good price. We\'d highly recommend Aaron for any project!!',
  },
  {
    name: 'Jim Koski',
    initials: 'JK',
    location: 'Homeowner · Madison area',
    text: 'Spray Foam Works did an excellent job in my attic. Aaron was thorough and timely. I would highly recommend them to any individual considering spray foam for insulation.',
  },
  {
    name: 'Arianna',
    initials: 'AR',
    text: 'Quality work!! Definitely recommend them to anyone!',
  },
  {
    name: 'Steve Reupert',
    initials: 'SR',
    text: 'Love the spray foam!!! Aaron does amazing work!',
  },
  {
    name: 'Garrett Mohr',
    initials: 'GM',
    text: 'Five-star rating — thank you, Garrett!',
  },
  {
    name: 'Isthmus Wellness',
    initials: 'IW',
    location: 'Commercial · Madison',
    text: 'Five-star rating — thank you, Isthmus Wellness!',
  },
];

export const missionValues: ValueCard[] = [
  {
    title: 'Direct Pricing',
    description:
      'You deal with us, not a chain of middlemen — fair, transparent quotes every time.',
    icon: 'pricing',
  },
  {
    title: 'Top-Tier Equipment',
    description:
      'We reinvest in the latest spray technology so every application is clean and consistent.',
    icon: 'equipment',
  },
  {
    title: 'Healthier Environments',
    description:
      'Air-sealed, well-insulated spaces are more comfortable and better to breathe in.',
    icon: 'health',
  },
  {
    title: 'Continuous Learning',
    description:
      'We keep training on the newest materials and methods so your building gets the best practice.',
    icon: 'learning',
  },
  {
    title: 'Professional Integrity',
    description:
      'The same standard of work on a closet retrofit as on a commercial warehouse.',
    icon: 'integrity',
  },
  {
    title: 'Any Job Size',
    description: 'One room or an entire new build — no project is too big or too small.',
    icon: 'scale',
  },
];

export const historyTimeline: TimelineItem[] = [
  {
    year: '2003',
    title: 'Learning the trade',
    description:
      'Aaron Hastings began working alongside his father at the family insulation company, learning the craft hands-on in Cottage Grove and across Dane County.',
  },
  {
    year: '2009',
    title: 'The Sprayfoam Works is born',
    description:
      'After six years in the industry, Aaron purchased the business and re-branded as The Sprayfoam Works, Inc. — a name rooted in his belief that spray foam is the best insulation choice for homes and commercial buildings.',
  },
  {
    year: '2010s',
    title: 'Built on word of mouth',
    description:
      'For nearly a decade, the company grew organically through referrals from homeowners, remodelers, and contractors who valued honest pricing and quality work.',
  },
  {
    year: 'Today',
    title: '17 years of trusted service',
    description:
      'Now serving Madison and Cottage Grove with direct-to-customer pricing, top-tier equipment, and a crew that treats every job — residential or commercial — with the same care.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'aaron-hastings',
    name: 'Aaron Hastings',
    role: 'Owner · Second-generation installer',
    featured: true,
    image: '/images/e623003f-d8fb-486c-9d38-70a8d134bc6a.jpg',
    bio: 'Aaron grew up in Cottage Grove working alongside his father in the insulation trade. In 2009 he founded The Sprayfoam Works, Inc. with a straightforward goal: help people create homes and buildings that are comfortable, efficient, and built to last. He leads every project with the same hands-on standard he learned growing up in the business.',
    quote:
      'Every job gets the standard of work I\'d want in my own home — that\'s how my dad ran it, and that\'s how we still do.',
  },
  {
    name: 'Field Crew',
    role: 'Licensed spray foam installers',
    image: '/images/3ce463c3-81a1-428b-8839-3d576094c84e.jpg',
    bio: 'Our on-site team brings years of combined experience in spray foam and fiberglass installation. From attic retrofits to pole barns and commercial builds, they show up prepared, work clean, and leave every job site better than they found it.',
  },
  {
    name: 'Project Support',
    role: 'Estimating & scheduling',
    image: '/images/461db213-76cf-42ce-834c-676cd8799b94.jpg',
    bio: 'Behind every install is a team focused on clear communication, fair direct pricing, and getting you scheduled without the runaround. You talk to real people who know insulation — not a call center.',
  },
];

export const companyPages: CompanyPageData[] = [
  {
    slug: 'our-team',
    route: '/our-team',
    metaTitle: 'Our Team | The Sprayfoam Works',
    metaDescription:
      'Meet the team behind The Sprayfoam Works — owner Aaron Hastings and a licensed, local crew serving Madison and Cottage Grove for 17 years.',
    hero: {
      eyebrow: 'Our Team',
      title: 'The people behind',
      titleAccent: 'every insulated wall',
      subtitle:
        'A family-owned crew with multi-generational expertise, direct pricing, and a reputation built one honest job at a time.',
      image: '/images/e623003f-d8fb-486c-9d38-70a8d134bc6a.jpg',
      imageAlt: 'The Sprayfoam Works crew at a job site',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Our Team' },
    ],
  },
  {
    slug: 'history',
    route: '/history',
    metaTitle: 'Our History | The Sprayfoam Works',
    metaDescription:
      'From a father-son apprenticeship to a trusted Dane County insulation contractor — the story of The Sprayfoam Works, Inc.',
    hero: {
      eyebrow: 'Our History',
      title: 'Two generations,',
      titleAccent: 'one standard',
      subtitle:
        'What started as a family trade in Cottage Grove became a trusted name in spray foam and fiberglass across Madison and Dane County.',
      image: '/images/24e3b785-3caa-4c8c-a281-2512afdab1ff.jpg',
      imageAlt: 'Insulation work in progress',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'History' },
    ],
  },
  {
    slug: 'mission',
    route: '/mission',
    metaTitle: 'Mission & Values | The Sprayfoam Works',
    metaDescription:
      'Our mission: healthier, durable, comfortable spaces for every customer. Direct pricing, professional integrity, and top-tier equipment.',
    hero: {
      eyebrow: 'Mission & Values',
      title: 'Built on values,',
      titleAccent: 'not shortcuts',
      subtitle:
        'We help create healthy, durable, comfortable environments — whether it\'s a home, office, shop, or commercial building. No job is too small or too large.',
      image: '/images/7755b2ba-adfb-484a-a8dc-2ad98bab80fa.jpg',
      imageAlt: 'Spray foam insulation application',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Mission' },
    ],
  },
  {
    slug: 'testimonials',
    route: '/testimonials',
    metaTitle: 'Testimonials | The Sprayfoam Works',
    metaDescription:
      'Read what Dane County homeowners and contractors say about The Sprayfoam Works. Real Google reviews from Madison and Cottage Grove customers.',
    hero: {
      eyebrow: 'Testimonials',
      title: 'Neighbors who\'d',
      titleAccent: 'hire us again',
      subtitle:
        'These reviews come directly from our Google customers — homeowners, property owners, and contractors across Dane County.',
      image: '/images/73ac49d9-3c3c-4436-bc98-d506b89106b6.jpg',
      imageAlt: 'Happy homeowner after insulation project',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Testimonials' },
    ],
  },
];

export function getCompanyPage(slug: CompanyPageSlug): CompanyPageData | undefined {
  return companyPages.find((page) => page.slug === slug);
}

export { GOOGLE_REVIEWS_URL };
