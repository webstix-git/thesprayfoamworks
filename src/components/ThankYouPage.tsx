import Link from 'next/link';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/lib/site';

type ThankYouPageProps = {
  form: 'contact' | 'quote';
};

const copy = {
  contact: {
    title: 'Contact Us',
    parentLabel: 'Contact Us',
    parentHref: '/contact',
    messageTitle: 'Thanks for contacting us!',
    message: 'We have received your message and will be in touch shortly.',
    returnLabel: 'Contact Us Again',
  },
  quote: {
    title: 'Get a Quote',
    parentLabel: 'Get a Quote',
    parentHref: '/get-a-quote',
    messageTitle: 'Thanks for requesting a quote!',
    message: 'We have received your project details and will contact you shortly to discuss your insulation needs.',
    returnLabel: 'Request Another Quote',
  },
} as const;

export function ThankYouPage({ form }: ThankYouPageProps) {
  const content = copy[form];

  return (
    <div className="sfw-project-page sfw-thank-you-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <section className="sfw-project-hero sfw-thank-you-hero" aria-labelledby="thank-you-heading">
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise sfw-thank-you-content">
            <h1 id="thank-you-heading">
              {content.title} <span className="sfw-project-accent">– Thank You</span>
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
              <Link href={content.parentHref} className="navlink">
                {content.parentLabel}
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
            <h2>{content.messageTitle}</h2>
            <p>{content.message}</p>
          </div>
        </section>

        <section className="sfw-project-final-cta sfw-thank-you-cta">
          <div className="sfw-project-final-inner">
            <div>
              <h2>Need help with your next project?</h2>
              <p>
                Call our team directly and we&apos;ll help you with the next step for your insulation
                project.
              </p>
            </div>
            <div className="sfw-project-final-actions">
              <Link href={content.parentHref} className="btnfx sfw-project-final-primary">
                {content.returnLabel}
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
