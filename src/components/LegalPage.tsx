import Image from 'next/image';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { photos } from '@/lib/project-photos';

export function LegalPage({
  title,
  children,
  bannerImage = photos.vaultedTruss,
  bannerAlt = 'Spray foam insulation project',
  showBanner = true,
}: {
  title: string;
  children: React.ReactNode;
  bannerImage?: string;
  bannerAlt?: string;
  showBanner?: boolean;
}) {
  return (
    <div className="sfw-company-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <section className={`sfw-legal-hero${showBanner ? '' : ' sfw-legal-hero-plain'}`}>
          {showBanner ? (
            <>
              <Image
                src={bannerImage}
                alt={bannerAlt}
                fill
                priority
                className="sfw-legal-hero-image"
                sizes="100vw"
              />
              <div className="sfw-legal-hero-overlay" />
            </>
          ) : null}
          <div className="sfw-legal-hero-inner hero-rise">
            <h1>{title}</h1>
          </div>
        </section>

        <section className="sfw-company-section sfw-company-section-light">
          <div className="sfw-company-section-inner">
            <div className="sfw-legal-body">{children}</div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
