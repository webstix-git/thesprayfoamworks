export const serviceNavLinks = [
  { label: 'Spray Foam', href: '/spray-foam-insulation' },
  { label: 'Retrofitting', href: '/retrofitting' },
  { label: 'Pole Barns', href: '/pole-barns' },
  { label: 'Remodels', href: '/remodels' },
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Insulation Removal', href: '/insulation-removal' },
  { label: 'Fiberglass', href: '/fiberglass' },
];

export const aboutNavLinks = [
  { label: 'About SFW', href: '/about' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'History', href: '/history' },
  { label: 'Mission', href: '/mission' },
  { label: 'Testimonials', href: '/testimonials' },
];

export const residentialNavLinks = [
  { label: 'Retrofit', href: '/retrofitting' },
  { label: 'Remodels', href: '/remodels' },
  { label: 'New Construction', href: '/new-construction' },
];

export const locationNavLinks = [
  { label: 'Madison', href: '/madison' },
  { label: 'Cottage Grove', href: '/cottage-grove' },
  { label: 'Sun Prairie', href: '/sun-prairie' },
  { label: 'Middleton', href: '/middleton' },
  { label: 'Verona', href: '/verona' },
  { label: 'Fitchburg', href: '/fitchburg' },
];

export const footerCompanyLinks = [
  { label: 'About SFW', href: '/about' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Our History', href: '/history' },
  { label: 'Mission & Values', href: '/mission' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
];

/** Label → route mapa for HTML page link auto-wiring */
export const htmlLinkRoutes: Record<string, string> = {
  'Spray Foam': '/spray-foam-insulation',
  Services: '/services',
  'All Services': '/services',
  Gallery: '/gallery',
  Locations: '/locations',
  'All Locations': '/locations',
  Retrofitting: '/retrofitting',
  Retrofit: '/retrofitting',
  'Pole Barns': '/pole-barns',
  Remodels: '/remodels',
  'New Construction': '/new-construction',
  'Insulation Removal': '/insulation-removal',
  Fiberglass: '/fiberglass',
  Residential: '/residential',
  Commercial: '/commercial',
  Madison: '/madison',
  'Cottage Grove': '/cottage-grove',
  'Sun Prairie': '/sun-prairie',
  Middleton: '/middleton',
  Verona: '/verona',
  Fitchburg: '/fitchburg',
  'About SFW': '/about',
  'Our Team': '/our-team',
  History: '/history',
  'Our History': '/history',
  Mission: '/mission',
  'Mission & Values': '/mission',
  Testimonials: '/testimonials',
  'Contact SFW': '/contact',
  'Contact Us': '/contact',
};
