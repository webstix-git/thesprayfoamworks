import type { Metadata } from 'next';
import { ThankYouPage } from '@/components/ThankYouPage';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Us – Thank You | The Sprayfoam Works',
  description: 'Thank you for contacting The Sprayfoam Works. We will be in touch shortly.',
  alternates: { canonical: `${siteConfig.url}/contact/thank-you` },
  robots: { index: false, follow: false },
};

export default function ContactThankYou() {
  return <ThankYouPage form="contact" />;
}
