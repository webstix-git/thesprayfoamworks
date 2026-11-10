import { QuoteFormLink } from '@/components/QuoteFormLink';
import { siteConfig } from '@/lib/site';

export function ContactSidebar() {
  return (
    <aside className="sfw-contact-sidebar">
      <div className="sfw-contact-sidebar-block sfw-contact-sidebar-about">
        <h3>Have a question or ready to request a quote?</h3>
        <p>
          Contact us through our online <QuoteFormLink>Get a Quote</QuoteFormLink> form
          (preferred), email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, or
          call/text{' '}
          <a href={siteConfig.phoneTel} className="sfw-contact-sidebar-phone-inline">
            {siteConfig.phone}
          </a>
          .
        </p>
        <p>We look forward to discussing your project.</p>
      </div>
    </aside>
  );
}
