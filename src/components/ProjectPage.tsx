import Link from 'next/link';
import Image from 'next/image';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import type { ProjectFeatureIcon, ProjectPageData } from '@/lib/project-pages';
import { siteConfig } from '@/lib/site';

function FeatureIcon({ icon }: { icon: ProjectFeatureIcon }) {
  const props = {
    width: 26,
    height: 26,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (icon) {
    case 'comfort':
      return (
        <svg {...props}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case 'savings':
      return (
        <svg {...props}>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'clean':
      return (
        <svg {...props}>
          <path d="M3 3l18 18" />
          <path d="M20 12a8 8 0 0 0-8-8" />
          <path d="M4 12a8 8 0 0 0 8 8" />
        </svg>
      );
    case 'local':
      return (
        <svg {...props}>
          <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'sound':
      return (
        <svg {...props}>
          <path d="M11 5 6 9H2v6h4l5 4z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M19 5a9 9 0 0 1 0 14" />
        </svg>
      );
    case 'structure':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </svg>
      );
    case 'schedule':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 'quality':
      return (
        <svg {...props}>
          <path d="M12 2l2.9 6 6.6.6-5 4.3 1.5 6.5L12 16.9 5.9 19.4 7.4 13l-5-4.3L9 8z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case 'leaf':
      return (
        <svg {...props}>
          <path d="M11 20A7 7 0 0 1 4 13c0-5 5-9 16-9 0 8-4 13-9 13z" />
          <path d="M4 20c3-4 6-6 10-7" />
        </svg>
      );
  }
}

function Hero({ page }: { page: ProjectPageData }) {
  return (
    <div className="sfw-project-hero">
      <Image
        src={page.hero.image}
        alt={page.hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="sfw-project-hero-image"
      />
      <div className="sfw-project-hero-overlay" />
      <div className="sfw-project-hero-content hero-rise">
        <h1>
          {page.hero.title} <span className="sfw-project-accent">{page.hero.titleAccent}</span>
        </h1>
      </div>
    </div>
  );
}

function Breadcrumb({ items }: { items: ProjectPageData['breadcrumb'] }) {
  return (
    <div className="sfw-project-breadcrumb">
      <div className="sfw-project-breadcrumb-inner">
        {items.map((item, index) => (
          <span key={item.label} className="sfw-project-crumb">
            {index > 0 ? <span className="sfw-project-crumb-sep">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="navlink">
                {item.label}
              </Link>
            ) : (
              <span className="sfw-project-crumb-current">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProjectPage({ page }: { page: ProjectPageData }) {
  return (
    <div className="sfw-project-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <Hero page={page} />
        <Breadcrumb items={page.breadcrumb} />
        <TrustStatsBar />

        <section className="sfw-project-section sfw-project-section-light">
          <div className="sfw-project-inner sfw-project-intro">
            <div className="sfw-project-intro-copy">
              <span className="sfw-project-label">{page.intro.eyebrow}</span>
              <h2>{page.intro.title}</h2>
              {page.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="sfw-project-checklist">
                {page.intro.bullets.map((bullet) => (
                  <div key={bullet} className="sfw-project-check">
                    <span className="sfw-project-check-mark">✓</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="sfw-project-intro-media">
              <div className="sfw-project-intro-image">
                <Image
                  src={page.intro.image}
                  alt={page.intro.imageAlt}
                  fill
                  className="sfw-project-image-fill"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="sfw-project-badge">
                <strong>{page.intro.badgeValue}</strong>
                <span>{page.intro.badgeLabel}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="sfw-project-section sfw-project-section-dark">
          <div className="sfw-project-inner">
            <div className="sfw-project-heading">
              <span className="sfw-project-label">{page.features.eyebrow}</span>
              <h2>{page.features.title}</h2>
              <p>{page.features.subtitle}</p>
            </div>
            <div className="sfw-project-feature-grid">
              {page.features.items.map((item) => (
                <article key={item.title} className="sfw-project-feature-card">
                  <div className="sfw-project-feature-icon">
                    <FeatureIcon icon={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sfw-project-section sfw-project-section-light">
          <div className="sfw-project-inner">
            <div className="sfw-project-heading">
              <span className="sfw-project-label">{page.projectTypes.eyebrow}</span>
              <h2>{page.projectTypes.title}</h2>
              <p>{page.projectTypes.subtitle}</p>
            </div>
            <div className="sfw-project-type-grid">
              {page.projectTypes.items.map((item) => (
                <article key={item.title} className="sfw-project-type-card">
                  <div className="sfw-project-type-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="sfw-project-image-fill"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="sfw-project-type-tag">{item.title}</span>
                  </div>
                  <div className="sfw-project-type-body">
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sfw-project-section sfw-project-section-muted">
          <div className="sfw-project-inner sfw-project-process">
            <div className="sfw-project-process-intro">
              <span className="sfw-project-label">{page.process.eyebrow}</span>
              <h2>{page.process.title}</h2>
              <p>
                Every project runs on the same three priorities: the right material, a clean
                install window, and direct communication from a local crew.
              </p>
              <a href={siteConfig.phoneTel} className="btnfx sfw-project-button">
                Talk to us →
              </a>
            </div>
            <div className="sfw-project-steps">
              {page.process.steps.map((step, index) => (
                <article key={step.title} className="sfw-project-step">
                  <span className="sfw-project-step-num">{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sfw-project-section sfw-project-section-dark">
          <div className="sfw-project-inner sfw-project-testimonial">
            <span className="sfw-project-quote-mark">&ldquo;</span>
            <blockquote>{page.testimonial.quote}</blockquote>
            <div className="sfw-project-testimonial-author">
              <span className="sfw-project-stars">★★★★★</span>
              <strong>{page.testimonial.name}</strong>
              <span className="sfw-project-testimonial-role">{page.testimonial.role}</span>
            </div>
          </div>
        </section>

        <section className="sfw-project-section sfw-project-section-light">
          <div className="sfw-project-inner">
            <div className="sfw-project-heading">
              <span className="sfw-project-label">{page.faq.eyebrow}</span>
              <h2>{page.faq.title}</h2>
            </div>
            <div className="sfw-project-faq">
              {page.faq.items.map((item) => (
                <article key={item.question} className="sfw-project-faq-item">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="sfw-project-final-cta">
          <div className="sfw-project-final-inner">
            <div>
              <h2>{page.cta.title}</h2>
              <p>{page.cta.body}</p>
            </div>
            <div className="sfw-project-final-actions">
              <a href={siteConfig.phoneTel} className="btnfx sfw-project-final-primary">
                Request a Quote
              </a>
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
