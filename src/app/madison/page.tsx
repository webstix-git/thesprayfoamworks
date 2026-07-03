import { createMarketingPage, createPageMetadata } from '@/lib/create-page';

export const metadata = createPageMetadata('madison');

export default function MadisonPage() {
  return createMarketingPage('madison');
}
