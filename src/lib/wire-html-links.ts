import { htmlLinkRoutes, locationNavLinks } from './nav-links';

const PHONE_TEL = 'tel:6082790088';

/** Card / section titles that differ from nav label keys */
const titleRoutes: Record<string, string> = {
  'Spray Foam Insulation': '/spray-foam-insulation',
  'Fiberglass Insulation': '/fiberglass',
};

/** Button copy → route (checked as substring of link text) */
const buttonPhrases: [string, string][] = [
  ['Get a Free Quote', '/get-a-quote'],
  ['Get a Quote', '/get-a-quote'],
  ['Request a Quote', '/get-a-quote'],
  ['Request Your Free Quote', '/get-a-quote'],
  ['Free Quote', '/get-a-quote'],
  ['Meet the Team', '/our-team'],
  ['Ask about your space', '/get-a-quote'],
  ['Get a commercial quote', '/get-a-quote'],
  ['Explore Residential', '/residential'],
  ['Explore Retrofit', '/retrofitting'],
  ['Explore Commercial', '/commercial'],
  ['View all services', '/services'],
  ['View more photos', '/gallery'],
  ['View all locations', '/locations'],
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
