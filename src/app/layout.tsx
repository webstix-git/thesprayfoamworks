import type { Metadata } from 'next';
import { Anton, Archivo, Hanken_Grotesk, Oswald } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-hanken',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

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
      className={`${anton.variable} ${archivo.variable} ${hanken.variable} ${oswald.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
