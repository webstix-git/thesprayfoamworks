export const serviceNavLinks = [
  { label: 'Spray Foam Insulation', href: '/spray-foam-insulation' },
  { label: 'Fiberglass & Blow-in Insulation', href: '/fiberglass-blow-in-insulation' },
  { label: 'Insulation Removal', href: '/insulation-removal' },
];

export const residentialNavLinks = [
  { label: 'New Construction', href: '/new-construction' },
  { label: 'Existing Homes', href: '/existing-homes' },
  { label: 'Remodels & Additions', href: '/remodels-additions' },
];

export const commercialNavLinks = [
  { label: 'Commercial Buildings', href: '/commercial-buildings' },
  { label: 'Pole barns & Agricultural Buildings', href: '/pole-barns-agricultural-buildings' },
  { label: 'Post-frame Construction', href: '/post-frame-construction' },
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
  Retrofitting: '/existing-homes',
  Retrofit: '/existing-homes',
  'Existing Homes': '/existing-homes',
  'Pole Barns': '/pole-barns-agricultural-buildings',
  'Pole barns & Agricultural Buildings': '/pole-barns-agricultural-buildings',
  'Post-frame Construction': '/post-frame-construction',
  Remodels: '/remodels-additions',
  'Remodels & Additions': '/remodels-additions',
  'New Construction': '/new-construction',
  'Insulation Removal': '/insulation-removal',
  Fiberglass: '/fiberglass-blow-in-insulation',
  'Fiberglass Insulation': '/fiberglass-blow-in-insulation',
  'Fiberglass & Blow-in Insulation': '/fiberglass-blow-in-insulation',
  Residential: '/residential',
  Commercial: '/commercial-buildings',
  'Commercial Buildings': '/commercial-buildings',
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
  'Get a Free Quote': '/get-a-quote',
  'Get a Quote': '/get-a-quote',
  'Request a Quote': '/get-a-quote',
  'Request Your Free Quote': '/get-a-quote',
  'Free Quote': '/get-a-quote',
  'Meet the Team': '/our-team',
  Privacy: '/privacy-policy',
  Home: '/',
};
