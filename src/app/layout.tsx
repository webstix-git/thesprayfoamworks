import type { Metadata } from 'next';
import './globals.css';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'The Sprayfoam Works | Spray Foam Insulation Madison, WI',
    template: '%s | The Sprayfoam Works',
  },
  description:
    'Professional spray foam and fiberglass insulation in Madison and Cottage Grove, Wisconsin. 17 years of hands-on experience.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="site-fonts"
    >
      <body>{children}</body>
    </html>
  );
}
