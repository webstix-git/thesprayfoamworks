import {
  commercialNavLinks,
  residentialNavLinks,
  serviceNavLinks,
} from '@/lib/nav-links';
import { getAllPages } from '@/lib/site';

export type SearchResult = {
  title: string;
  href: string;
  description: string;
  keywords: string;
};

/** Only pages linked from the main header navigation are searchable. */
const SEARCHABLE_ROUTES = new Set([
  '/',
  '/services',
  '/residential',
  '/commercial-buildings',
  '/faqs',
  '/gallery',
  '/about',
  '/contact',
  '/get-a-quote',
  ...serviceNavLinks.map((link) => link.href),
  ...residentialNavLinks.map((link) => link.href),
  ...commercialNavLinks.map((link) => link.href),
]);

const EXTRA_PAGES: SearchResult[] = [
  {
    title: 'FAQs',
    href: '/faqs',
    description:
      'Answers to common questions about spray foam, fiberglass, R-value, cost, install time, and working with The Sprayfoam Works.',
    keywords: 'faq questions help spray foam cost r-value',
  },
];

const KEYWORD_OVERRIDES: Record<string, string> = {
  '/': 'home homepage sprayfoam works madison cottage grove',
  '/spray-foam-insulation': 'open cell closed cell foam air seal attic wall',
  '/fiberglass-blow-in-insulation': 'batt blown attic sound control hybrid',
  '/insulation-removal': 'remove old attic cleanout contaminated wet',
  '/existing-homes': 'retrofit drafty older homes rim joist residential',
  '/new-construction': 'new build framing builder package residential',
  '/remodels-additions': 'renovation basement kitchen addition remodel residential',
  '/commercial-buildings': 'warehouse office shop steel commercial',
  '/pole-barns-agricultural-buildings': 'barn farm shop agricultural livestock commercial',
  '/post-frame-construction': 'post frame builder shop garage commercial',
  '/residential': 'home house residential living residental residences',
  '/get-a-quote': 'quote pricing estimate free request',
  '/contact': 'phone email call text contact form',
  '/gallery': 'photos pictures projects jobsites',
  '/about': 'our story company aaron hastings reviews areas we serve',
  '/services': 'all services insulation overview',
  '/faqs': 'faq questions help spray foam cost r-value',
};

function cleanTitle(title: string, route: string) {
  if (route === '/') return 'Home';
  const cleaned = title
    .replace(/^The Sprayfoam Works\s*\|\s*/i, '')
    .replace(/\s*\|\s*The Sprayfoam Works.*$/i, '')
    .trim();
  return cleaned || title;
}

function tokenize(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 0);
}

function editDistance(a: string, b: string) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const rows = a.length + 1;
  const cols = b.length + 1;
  const matrix = Array.from({ length: rows }, () => Array<number>(cols).fill(0));

  for (let i = 0; i < rows; i += 1) matrix[i][0] = i;
  for (let j = 0; j < cols; j += 1) matrix[0][j] = j;

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[a.length][b.length];
}

function termMatches(haystack: string, words: string[], term: string) {
  if (haystack.includes(term)) return true;

  return words.some((word) => {
    if (word.startsWith(term) || term.startsWith(word)) return true;
    if (term.length >= 5 && word.length >= 5) {
      const allowed = term.length >= 8 ? 2 : 1;
      return editDistance(term, word) <= allowed;
    }
    return false;
  });
}

export function getSearchIndex(): SearchResult[] {
  const fromMeta = getAllPages()
    .filter((page) => SEARCHABLE_ROUTES.has(page.route))
    .map((page) => ({
      title: cleanTitle(page.title, page.route),
      href: page.route,
      description: page.description,
      keywords: KEYWORD_OVERRIDES[page.route] ?? '',
    }));

  const seen = new Set(fromMeta.map((item) => item.href));
  const extras = EXTRA_PAGES.filter(
    (item) => SEARCHABLE_ROUTES.has(item.href) && !seen.has(item.href),
  );
  return [...fromMeta, ...extras];
}

export function searchPages(query: string): SearchResult[] {
  const terms = tokenize(query);

  if (terms.length === 0) {
    return [];
  }

  return getSearchIndex()
    .map((item) => {
      const title = item.title.toLowerCase();
      const haystack = `${title} ${item.description} ${item.keywords} ${item.href}`.toLowerCase();
      const words = tokenize(haystack);
      let score = 0;

      for (const term of terms) {
        if (!termMatches(haystack, words, term)) {
          return null;
        }
        if (title === term) score += 12;
        else if (title.startsWith(term)) score += 8;
        else if (title.includes(term)) score += 5;
        else if (item.href.toLowerCase().includes(term)) score += 3;
        else score += 1;
      }

      return { item, score };
    })
    .filter((entry): entry is { item: SearchResult; score: number } => entry !== null)
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .map((entry) => entry.item);
}
