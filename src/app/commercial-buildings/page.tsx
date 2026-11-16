import { createMarketingPage, createPageMetadata } from '@/lib/create-page';

export const metadata = createPageMetadata('commercial');

export default function CommercialPage() {
  return createMarketingPage('commercial');
}
