import { createMarketingPage, createPageMetadata } from '@/lib/create-page';

export const metadata = createPageMetadata('residential');

export default function ResidentialPage() {
  return createMarketingPage('residential');
}
