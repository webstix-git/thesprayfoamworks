import Link from 'next/link';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { QuoteRequestForm } from '@/components/QuoteRequestForm';
import { ContactSidebar } from '@/components/ContactSidebar';

export function GetAQuotePage() {
  return (
    <div className="sfw-project-page sfw-contact-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-project-hero sfw-contact-hero">
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise sfw-contact-hero-content">
            <h1>Get a Quote</h1>
          </div>
        </div>

        <div className="sfw-project-breadcrumb">
          <div className="sfw-project-breadcrumb-inner">
            <span className="sfw-project-crumb">
              <Link href="/" className="navlink">
                Home
              </Link>
            </span>
            <span className="sfw-project-crumb">
              <span className="sfw-project-crumb-sep">/</span>
              <span className="sfw-project-crumb-current">Get a Quote</span>
            </span>
          </div>
        </div>

        <TrustStatsBar />

        <section className="sfw-project-section sfw-project-section-light">
          <div className="sfw-project-inner sfw-contact-grid">
            <div className="sfw-contact-form-card">
              <QuoteRequestForm />
            </div>
            <ContactSidebar />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
