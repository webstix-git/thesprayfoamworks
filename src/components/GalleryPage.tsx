import Link from 'next/link';
import Image from 'next/image';
import { GalleryGrid, type GalleryItem } from '@/components/GalleryGrid';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { siteConfig } from '@/lib/site';

const img = {
  wall: '/images/55880224-e572-4cf2-8156-f9aacb587114.jpg',
  attic: '/images/8771310d-a8c4-4f6a-990d-295c3376faa9.jpg',
  barn: '/images/02d84b2a-3938-456f-9253-60e2dfaeb254.jpg',
  remodel: '/images/992ac372-2add-4a21-a5e1-5b1143f7651a.jpg',
  install: '/images/e521596f-176e-48b0-84d8-6b7b614ac354.jpg',
  fiberglass: '/images/461db213-76cf-42ce-834c-676cd8799b94.jpg',
  hero1: '/images/e623003f-d8fb-486c-9d38-70a8d134bc6a.jpg',
  hero2: '/images/24e3b785-3caa-4c8c-a281-2512afdab1ff.jpg',
};

const items: GalleryItem[] = [
  { src: img.wall, caption: 'Closed-cell wall foam', tall: true },
  { src: img.attic, caption: 'Attic air-sealing' },
  { src: img.barn, caption: 'Steel building' },
  { src: img.remodel, caption: 'Remodel insulation' },
  { src: img.hero1, caption: 'New construction', tall: true },
  { src: img.fiberglass, caption: 'Blown-in attic' },
  { src: img.barn, caption: 'Pole barn shop', tall: true },
  { src: img.install, caption: 'Rim joist seal' },
  { src: img.remodel, caption: 'Basement remodel' },
  { src: img.hero2, caption: 'New build framing' },
  { src: img.barn, caption: 'Warehouse deck' },
  { src: img.wall, caption: 'Cathedral ceiling' },
];

export function GalleryPage() {
  return (
    <div className="sfw-project-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-project-hero">
          <Image
            src={img.hero2}
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
          <GalleryGrid items={items} />
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
