import Link from 'next/link';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { QuoteRequestForm } from '@/components/QuoteRequestForm';
import { siteConfig } from '@/lib/site';

export function ContactPage() {
  return (
    <div className="sfw-project-page sfw-contact-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-project-hero sfw-contact-hero">
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise sfw-contact-hero-content">
            <h1>Contact Sprayfoam Works</h1>
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
              <span className="sfw-project-crumb-current">Contact</span>
            </span>
          </div>
        </div>

        <TrustStatsBar />

        <section className="sfw-project-section sfw-project-section-light">
          <div className="sfw-project-inner sfw-contact-grid">
            <div className="sfw-contact-form-card">
              <QuoteRequestForm />
            </div>

            <aside className="sfw-contact-sidebar">
              <div className="sfw-contact-sidebar-block">
                <h3>Contact Sprayfoam Works, Inc.</h3>
                <a href={siteConfig.phoneTel} className="sfw-contact-sidebar-phone">
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="sfw-contact-sidebar-email">
                  Email Sprayfoam Works
                </a>
              </div>

              <div className="sfw-contact-sidebar-block sfw-contact-sidebar-about">
                <h3>The Sprayfoam Works, Inc.</h3>
                <p>
                  Founded in 2009, The Sprayfoam Works, Inc. is a preferred insulator in Madison,
                  Wisconsin, Dane County and surrounding areas. We work directly with homeowners as
                  well as with remodeling companies and contractors. Our experts are well versed in
                  insulating both new and existing homes. Additionally, we specialize in insulating
                  steel buildings and other business structures.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
