import type { Metadata } from 'next';
import { ThankYouPage } from '@/components/ThankYouPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get a Quote – Thank You | The Sprayfoam Works',
  description: 'Thank you for requesting a quote from The Sprayfoam Works. We will be in touch shortly.',
  alternates: { canonical: `${siteConfig.url}/get-a-quote/thank-you` },
  robots: { index: false, follow: false },
};

export default function QuoteThankYou() {
  return <ThankYouPage form="quote" />;
}
