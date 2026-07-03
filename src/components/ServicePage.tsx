import Link from 'next/link';
import Image from 'next/image';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import type { ServicePageData } from '@/lib/service-pages';
import { siteConfig } from '@/lib/site';

export function ServicePage({ page }: { page: ServicePageData }) {
  return (
    <>
      <SiteEnhancements />
      <div className="sfw-page sfw-service-page">
        <SiteHeader />

        <main>
          <section className="sfw-service-hero sfw-hero">
            <Image src={page.heroImage} alt={page.imageAlt} fill priority sizes="100vw" />
            <div className="sfw-hero-overlay" />
            <div className="sfw-service-hero-content hero-rise sfw-hero-content">
              <h1 className="sfw-h1">
                {page.title} <span>{page.accent}</span>
              </h1>
            </div>
          </section>

          <section className="sfw-service-breadcrumb">
            <div>
              <Link href="/" className="navlink">
                Home
              </Link>
              <span>/</span>
              <span className="sfw-breadcrumb-muted">Services</span>
              <span>/</span>
              <span className="sfw-breadcrumb-current">
                {page.title} {page.accent}
              </span>
            </div>
          </section>

          <TrustStatsBar />

          <section className="sfw-service-intro sfw-section sfw-grid sfw-grid-2">
            <div>
              <span className="sfw-section-label">{page.intro.eyebrow}</span>
              <h2 className="sfw-h2">{page.intro.title}</h2>
              {page.intro.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="sfw-check-list">
                {page.intro.bullets.map((bullet) => (
                  <div key={bullet}>
                    <span>✓</span>
                    <strong>{bullet}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="sfw-service-image-card">
              <Image src={page.intro.image} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </section>

          <section className="sfw-service-benefits sfw-section">
            <div className="sfw-centered-heading">
              <span className="sfw-section-label">Why It Works</span>
              <h2 className="sfw-h2">Built around comfort, value, and trust</h2>
            </div>
            <div className="sfw-card-grid sfw-grid sfw-grid-4">
              {page.benefits.map((benefit) => (
                <article className="scard" key={benefit.title}>
                  <div className="sfw-card-icon">◆</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="sfw-service-applications sfw-section">
            <div className="sfw-split-heading sfw-flex-between">
              <div>
                <span className="sfw-section-label">Where It Fits</span>
                <h2 className="sfw-h2">Practical applications</h2>
              </div>
              <a href={siteConfig.phoneTel} className="navlink">
                Ask what fits your project →
              </a>
            </div>
            <div className="sfw-image-grid sfw-grid sfw-grid-3">
              {page.applications.map((application) => (
                <article className="scard lift" key={application.title}>
                  <Image
                    src={application.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="gimg"
                  />
                  <div>
                    <h3>{application.title}</h3>
                    <p>{application.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="sfw-service-process sfw-section sfw-grid sfw-grid-2">
            <div>
              <span className="sfw-section-label">Our Process</span>
              <h2 className="sfw-h2">Straightforward from first call to cleanup</h2>
              <p>
                Every project gets scoped with the same priorities: the right material, a clear
                install window, and direct communication from a local crew.
              </p>
            </div>
            <div className="sfw-process-list">
              {page.process.map((step, index) => (
                <article key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="sfw-service-faq sfw-section">
            <div className="sfw-centered-heading">
              <span className="sfw-section-label">Questions</span>
              <h2 className="sfw-h2">What homeowners ask us</h2>
            </div>
            <div className="sfw-faq-list">
              {page.faq.map((item) => (
                <article key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="sfw-service-cta">
            <div>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaBody}</p>
            </div>
            <div>
              <a href={siteConfig.phoneTel} className="btnfx">
                Request a Quote
              </a>
              <a href={siteConfig.phoneTel} className="btnfx">
                {siteConfig.phone}
              </a>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
