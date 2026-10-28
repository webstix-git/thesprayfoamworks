import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Thank You | The Sprayfoam Works',
  description:
    'Thank you for contacting The Sprayfoam Works. We will be in touch shortly about your insulation project.',
  alternates: { canonical: `${siteConfig.url}/thank-you` },
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <div className="sfw-project-page sfw-thank-you-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <section className="sfw-project-hero sfw-thank-you-hero" aria-labelledby="thank-you-heading">
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise sfw-thank-you-content">
            <h1 id="thank-you-heading">
              Contact Us <span className="sfw-project-accent">– Thank You</span>
            </h1>
          </div>
        </section>

        <div className="sfw-project-breadcrumb">
          <div className="sfw-project-breadcrumb-inner">
            <span className="sfw-project-crumb">
              <Link href="/" className="navlink">
                Home
              </Link>
            </span>
            <span className="sfw-project-crumb">
              <span className="sfw-project-crumb-sep">/</span>
              <Link href="/contact" className="navlink">
                Contact Us
              </Link>
            </span>
            <span className="sfw-project-crumb">
              <span className="sfw-project-crumb-sep">/</span>
              <span className="sfw-project-crumb-current">Thank You</span>
            </span>
          </div>
        </div>

        <section className="sfw-project-section sfw-project-section-light sfw-thank-you-section">
          <div className="sfw-project-inner sfw-thank-you-message">
            <span className="sfw-project-label">Request received</span>
            <h2>Thanks for contacting us!</h2>
            <p>We have received your request and will be in touch shortly.</p>
          </div>
        </section>

        <section className="sfw-project-final-cta sfw-thank-you-cta">
          <div className="sfw-project-final-inner">
            <div>
              <h2>Need help with your next project?</h2>
              <p>Call our team directly and we&apos;ll help you with the next step for your insulation project.</p>
            </div>
            <div className="sfw-project-final-actions">
              <Link href="/contact" className="btnfx sfw-project-final-primary">
                Contact Us Again
              </Link>
              <a href={siteConfig.phoneTel} className="btnfx sfw-project-final-secondary">
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
