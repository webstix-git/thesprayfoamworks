# The Sprayfoam Works — Next.js Site

Next.js 15 App Router migration of the Sprayfoam Works marketing site (originally exported as bundled HTML from Design Canvas).

## Routes

| Page | Route |
|------|-------|
| Homepage | `/` |
| Spray Foam Insulation | `/spray-foam-insulation` |
| About SFW | `/about` |
| Madison | `/madison` |
| Commercial | `/commercial` |
| Residential | `/residential` |

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Environment variables

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://www.sprayfoamworks.com
```

## Vercel deployment

Deploy the repository root to Vercel with the Next.js framework preset.

## Project structure

```
src/
  app/              # App Router pages + SEO (sitemap, robots)
  components/       # StickyHeader (client), PageContent
  content/          # Page HTML rendered by the app
  lib/              # Site config and page helpers
  styles/site.css   # Original interaction styles (hover, animations)
public/images/      # Site images
```
