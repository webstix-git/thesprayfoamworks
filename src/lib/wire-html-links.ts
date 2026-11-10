import { htmlLinkRoutes, locationNavLinks } from './nav-links';

const PHONE_TEL = 'tel:6082790088';

/** Card / section titles that differ from nav label keys */
const titleRoutes: Record<string, string> = {
  'Spray Foam Insulation': '/spray-foam-insulation',
  'Fiberglass Insulation': '/fiberglass',
};

/** Button copy → route (checked as substring of link text) */
const QUOTE_FORM_HREF = '/documents/request-a-quote-form.docx';

const buttonPhrases: [string, string][] = [
  ['Get a Free Quote', QUOTE_FORM_HREF],
  ['Get a Quote', QUOTE_FORM_HREF],
  ['Request a Quote', QUOTE_FORM_HREF],
  ['Request Your Free Quote', QUOTE_FORM_HREF],
  ['Free Quote', QUOTE_FORM_HREF],
  ['Meet the Team', '/our-team'],
  ['Ask about your space', QUOTE_FORM_HREF],
  ['Get a commercial quote', QUOTE_FORM_HREF],
  ['Explore Residential', '/residential'],
  ['Explore Retrofit', '/retrofitting'],
  ['Explore Commercial', '/commercial'],
  ['View all services', '/services'],
  ['View more photos', '/gallery'],
  ['View all locations', '/about#areas-we-serve'],
  ['Areas we serve', '/about#areas-we-serve'],
  ['Privacy', '/privacy-policy'],
];

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, '');
}

export function resolveLinkRoute(innerHtml: string, linkText?: string): string | null {
  const h3Match = innerHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  if (h3Match) {
    const title = stripTags(h3Match[1]).trim();
    if (titleRoutes[title]) return titleRoutes[title];
    if (htmlLinkRoutes[title]) return htmlLinkRoutes[title];
  }

  for (const { label, href } of locationNavLinks) {
    if (innerHtml.includes(`>${label}<`)) return href;
  }

  const text = (linkText ?? stripTags(innerHtml)).replace(/→/g, '').replace(/✆/g, '').trim();

  if (htmlLinkRoutes[text]) return htmlLinkRoutes[text];

  for (const [phrase, route] of buttonPhrases) {
    if (text.includes(phrase)) return route;
  }

  if (/\(?608\)?\s*279[- ]?0088/.test(text)) return PHONE_TEL;

  return null;
}

/** Replace placeholder `href="#"` anchors with real routes in exported HTML. */
export function wireHtmlLinks(html: string): string {
  return html.replace(
    /<a(\s[^>]*?)href=["']#["']([^>]*>)([\s\S]*?)<\/a>/gi,
    (full, before, afterOpen, inner) => {
      const route = resolveLinkRoute(inner);
      if (!route) return full;
      return `<a${before}href="${route}"${afterOpen}${inner}</a>`;
    },
  );
}
