import { createMarketingPage, createPageMetadata } from '@/lib/create-page';

export const metadata = createPageMetadata('about');

export default function AboutPage() {
  return createMarketingPage('about');
}
