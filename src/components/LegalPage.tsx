import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sfw-company-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <section className="sfw-legal-hero">
          <div className="sfw-legal-hero-inner">
            <h1>{title}</h1>
          </div>
        </section>

        <section className="sfw-company-section sfw-company-section-light">
          <div className="sfw-company-section-inner sfw-legal-body">{children}</div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
