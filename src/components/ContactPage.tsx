import Link from 'next/link';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { ContactForm } from '@/components/ContactForm';

export function ContactPage() {
  return (
    <div className="sfw-project-page sfw-contact-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-project-hero sfw-contact-hero">
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise sfw-contact-hero-content">
            <h1>Contact Us</h1>
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


        <section className="sfw-project-section sfw-project-section-light">
          <div className="sfw-project-inner sfw-contact-single">
            <div className="sfw-contact-form-card">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
