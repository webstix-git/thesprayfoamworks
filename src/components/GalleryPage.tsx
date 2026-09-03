import Link from 'next/link';
import Image from 'next/image';
import { GalleryGrid } from '@/components/GalleryGrid';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { galleryPhotos, photos } from '@/lib/project-photos';
import { siteConfig } from '@/lib/site';

export function GalleryPage() {
  return (
    <div className="sfw-project-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-project-hero">
          <Image
            src={photos.vaultedTruss}
            alt="SFW project gallery"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise">
            <span className="sfw-project-eyebrow">Our Work</span>
            <h1>
              Straight from
              <br />
              the <span className="sfw-project-accent">job site</span>
            </h1>
            <p>
              A look at spray foam, fiberglass, pole barn, and commercial insulation projects
              completed across Dane County.
            </p>
            <div className="sfw-project-hero-actions">
              <Link href="/get-a-quote" className="btnfx sfw-project-cta-primary">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btnfx sfw-project-cta-ghost">
                View Services
              </Link>
            </div>
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
              <span className="sfw-project-crumb-current">Gallery</span>
            </span>
          </div>
        </div>

        <section className="sfw-gal-wrap">
          <GalleryGrid items={galleryPhotos} />
        </section>

        <TrustStatsBar />

        <section id="quote" className="sfw-project-final-cta">
          <div className="sfw-project-final-inner">
            <div>
              <h2>Want your project to look like these?</h2>
              <p>Get direct pricing on spray foam &amp; fiberglass, no middleman, no pressure.</p>
            </div>
            <div className="sfw-project-final-actions">
              <Link href="/get-a-quote" className="btnfx sfw-project-final-primary">
                Request a Quote
              </Link>
              <a href={siteConfig.phoneTel} className="btnfx sfw-project-final-secondary">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
