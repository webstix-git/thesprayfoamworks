export const serviceNavLinks = [
  { label: 'Spray Foam Insulation', href: '/spray-foam-insulation' },
  { label: 'Fiberglass & Blow-in Insulation', href: '/fiberglass' },
  { label: 'Insulation Removal', href: '/insulation-removal' },
];

export const residentialNavLinks = [
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Existing Homes', href: '/retrofitting' },
  { label: 'Remodels & Additions', href: '/remodels' },
];

export const commercialNavLinks = [
  { label: 'Commercial Buildings', href: '/commercial' },
  { label: 'Pole barns & Agricultural Buildings', href: '/pole-barns' },
  { label: 'Post-frame Construction', href: '/pole-barns' },
];

export const aboutNavLinks = [
  { label: 'Our Story', href: '/about#our-story' },
  { label: 'Customer Reviews', href: '/about#customer-reviews' },
  { label: 'Areas We Serve', href: '/about#areas-we-serve' },
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
  { label: 'Our Story', href: '/about#our-story' },
  { label: 'Our Team', href: '/our-team' },
  { label: 'Our History', href: '/history' },
  { label: 'Mission & Values', href: '/mission' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Customer Reviews', href: '/about#customer-reviews' },
  { label: 'Areas We Serve', href: '/about#areas-we-serve' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact Us', href: '/contact' },
];

/** Label → route mapa for HTML page link auto-wiring */
export const htmlLinkRoutes: Record<string, string> = {
  'Spray Foam': '/spray-foam-insulation',
  'Spray Foam Insulation': '/spray-foam-insulation',
  Services: '/services',
  'All Services': '/services',
  Gallery: '/gallery',
  Locations: '/locations',
  'All Locations': '/locations',
  Retrofitting: '/retrofitting',
  Retrofit: '/retrofitting',
  'Existing Homes': '/retrofitting',
  'Pole Barns': '/pole-barns',
  'Pole barns & Agricultural Buildings': '/pole-barns',
  'Post-frame Construction': '/pole-barns',
  Remodels: '/remodels',
  'Remodels & Additions': '/remodels',
  'New Construction': '/new-construction',
  'Insulation Removal': '/insulation-removal',
  Fiberglass: '/fiberglass',
  'Fiberglass Insulation': '/fiberglass',
  'Fiberglass & Blow-in Insulation': '/fiberglass',
  Residential: '/residential',
  Commercial: '/commercial',
  'Commercial Buildings': '/commercial',
  Madison: '/madison',
  'Cottage Grove': '/cottage-grove',
  'Sun Prairie': '/sun-prairie',
  Middleton: '/middleton',
  Verona: '/verona',
  Fitchburg: '/fitchburg',
  'About SFW': '/about',
  About: '/about',
  'Our Story': '/about#our-story',
  'Our Team': '/our-team',
  History: '/history',
  'Our History': '/history',
  Mission: '/mission',
  'Mission & Values': '/mission',
  Testimonials: '/testimonials',
  'Customer Reviews': '/about#customer-reviews',
  'Areas We Serve': '/about#areas-we-serve',
  FAQs: '/faqs',
  FAQ: '/faqs',
  Contact: '/contact',
  'Contact SFW': '/contact',
  'Contact Us': '/contact',
  'Get a Free Quote': '/documents/request-a-quote-form.docx',
  'Get a Quote': '/documents/request-a-quote-form.docx',
  'Request a Quote': '/documents/request-a-quote-form.docx',
  'Request Your Free Quote': '/documents/request-a-quote-form.docx',
  'Free Quote': '/documents/request-a-quote-form.docx',
  'Meet the Team': '/our-team',
  Privacy: '/privacy-policy',
  Home: '/',
};
