import Link from 'next/link';
import Image from 'next/image';
import { GoogleReviewIcon } from '@/components/GoogleReviewIcon';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import {
  GOOGLE_REVIEWS_URL,
  googleReviews,
  historyTimeline,
  missionValues,
  teamMembers,
  type CompanyPageData,
  type CompanyPageSlug,
  type ValueCard,
} from '@/lib/company-pages';
import { siteConfig } from '@/lib/site';

function ValueIcon({ icon }: { icon: ValueCard['icon'] }) {
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
    case 'pricing':
      return (
        <svg {...props}>
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case 'equipment':
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.6-.6-2.5 2.6-2.5z" />
        </svg>
      );
    case 'health':
      return (
        <svg {...props}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1.1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      );
    case 'learning':
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case 'integrity':
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="6" />
          <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
        </svg>
      );
    case 'scale':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
  }
}

function PageHero({ page }: { page: CompanyPageData }) {
  return (
    <div className="sfw-company-hero">
      <Image
        src={page.hero.image}
        alt={page.hero.imageAlt}
        fill
        priority
        className="sfw-company-hero-image"
        sizes="100vw"
      />
      <div className="sfw-company-hero-overlay" />
      <div className="sfw-company-hero-content hero-rise">
        <h1>
          {page.hero.title}
          {page.hero.titleAccent ? (
            <>
              <br />
              <span className="sfw-company-accent">{page.hero.titleAccent}</span>
            </>
          ) : null}
        </h1>
      </div>
    </div>
  );
}

function Breadcrumb({ items }: { items: CompanyPageData['breadcrumb'] }) {
  return (
    <div className="sfw-company-breadcrumb">
      <div className="sfw-company-breadcrumb-inner">
        {items.map((item, index) => (
          <span key={item.label} className="sfw-company-crumb">
            {index > 0 ? <span className="sfw-company-crumb-sep">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="navlink">
                {item.label}
              </Link>
            ) : (
              <span className="sfw-company-crumb-current">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

function StatsBar() {
  return <TrustStatsBar />;
}

function CtaBand() {
  return (
    <section id="quote" className="sfw-company-cta">
      <div className="sfw-company-cta-inner">
        <div>
          <h2>
            Ready to work
            <br />
            with a team you trust?
          </h2>
          <p>Get direct pricing on spray foam & fiberglass, no middleman, no pressure.</p>
        </div>
        <div className="sfw-company-cta-actions">
          <a href={siteConfig.phoneTel} className="btnfx sfw-company-cta-primary">
            Request a Quote
          </a>
          <a href={siteConfig.phoneTel} className="btnfx sfw-company-cta-secondary">
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function OurTeamContent() {
  const aaron = teamMembers.find((m) => m.featured)!;
  const others = teamMembers.filter((m) => !m.featured);

  return (
    <>
      <section className="sfw-company-section sfw-company-section-light">
        <div className="sfw-company-section-inner sfw-company-intro">
          <div>
            <span className="sfw-company-label">Who We Are</span>
            <h2>Local installers you can actually reach</h2>
            <p>
              The Sprayfoam Works is a family-owned insulation contractor based in Cottage Grove
              and Madison. We work directly with homeowners, remodeling companies, and commercial
              contractors, no middleman, no inflated markups.
            </p>
            <p>
              When you call, you talk to people who know your project. When we show up, we bring
              experienced installers, professional equipment, and a standard of work we stand behind
              on every job size.
            </p>
          </div>
          <div className="sfw-company-intro-stats">
            <div className="sfw-company-mini-card">
              <strong>Direct pricing</strong>
              <span>Fair quotes without the middleman markup</span>
            </div>
            <div className="sfw-company-mini-card">
              <strong>17 years experience</strong>
              <span>Hands-on since 2009, still learning on every job</span>
            </div>
            <div className="sfw-company-mini-card">
              <strong>17 years local</strong>
              <span>Trusted across Dane County since 2009</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sfw-company-section sfw-company-section-dark" id={aaron.id}>
        <div className="sfw-company-section-inner sfw-company-profile">
          <div className="sfw-company-profile-image">
            <Image src={aaron.image} alt={aaron.name} fill className="sfw-company-image-fill" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="sfw-company-profile-badge">
              <strong>{aaron.name}</strong>
              <span>{aaron.role}</span>
            </div>
          </div>
          <div>
            <span className="sfw-company-label">Meet the Owner</span>
            <h2>Carrying the family trade forward</h2>
            <p>{aaron.bio}</p>
            {aaron.quote ? <blockquote className="sfw-company-quote">{aaron.quote}</blockquote> : null}
            <p className="sfw-company-note">
              Aaron loves the outdoors and is an avid sportsman. When he is not on a job site, he
              is building the kind of company he would want to hire himself, honest, prepared, and
              easy to reach.
            </p>
            <a href={siteConfig.phoneTel} className="btnfx sfw-company-button">
              Work with our team →
            </a>
          </div>
        </div>
      </section>

      <section className="sfw-company-section sfw-company-section-light">
        <div className="sfw-company-section-inner">
          <div className="sfw-company-section-heading">
            <span className="sfw-company-label">The Crew</span>
            <h2>More than a one-man show</h2>
            <p>
              Aaron leads every project, backed by a trained crew that shares the same commitment
              to clean work sites, clear communication, and insulation done right.
            </p>
          </div>
          <div className="sfw-company-crew-grid">
            {others.map((member) => (
              <article key={member.name} className="sfw-company-crew-card scard lift">
                <span className="sfw-company-card-role">{member.role}</span>
                <h3>{member.name}</h3>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HistoryContent() {
  return (
    <>
      <section className="sfw-company-section sfw-company-section-light">
        <div className="sfw-company-section-inner sfw-company-intro">
          <div>
            <span className="sfw-company-label">Our Story</span>
            <h2>From family trade to local name</h2>
            <p>
              The Sprayfoam Works was built on a simple idea: give homeowners and contractors
              direct access to expert insulation without the middleman markup. What began as a
              father-and-son apprenticeship in Cottage Grove grew into one of Dane County&apos;s
              most trusted insulation teams.
            </p>
            <p>
              Aaron Hastings took the reins from his father and carried forward both the trade and
              the reputation, practical, honest, and obsessed with doing the job right the first
              time.
            </p>
          </div>
          <div className="sfw-company-intro-image">
            <Image
              src="/images/24e3b785-3caa-4c8c-a281-2512afdab1ff.jpg"
              alt="The Sprayfoam Works insulation project"
              fill
              className="sfw-company-image-fill"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="sfw-company-section sfw-company-section-light">
        <div className="sfw-company-section-inner">
          <div className="sfw-company-section-heading">
            <span className="sfw-company-label">Timeline</span>
            <h2>Milestones that shaped who we are</h2>
          </div>
          <div className="sfw-company-timeline">
            {historyTimeline.map((item, index) => (
              <article key={item.year} className="sfw-company-timeline-item">
                <div className="sfw-company-timeline-rail">
                  <span className="sfw-company-timeline-node">{index + 1}</span>
                </div>
                <div className="sfw-company-timeline-card">
                  <span className="sfw-company-timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sfw-company-section sfw-company-section-dark">
        <div className="sfw-company-section-inner sfw-company-quote-block">
          <blockquote>
            &ldquo;I&apos;ve always valued education and learning about the latest insulation and
            building trends. That same curiosity drives how we serve customers today, staying
            current, staying honest, and never cutting corners.&rdquo;
          </blockquote>
          <cite>- Aaron Hastings, Owner</cite>
        </div>
      </section>
    </>
  );
}

function MissionContent() {
  return (
    <>
      <section className="sfw-company-section sfw-company-section-light">
        <div className="sfw-company-section-inner sfw-company-mission-grid">
          <div>
            <span className="sfw-company-label">Our Mission</span>
            <h2>Healthy, durable, comfortable spaces, for everyone</h2>
            <p>
              At The Sprayfoam Works, Inc., our mission is to provide value by helping create a
              healthy, durable, and comfortable environment, whether that space is a home, an
              office, a commercial business, or a small shop or shed.
            </p>
            <p>
              No job is too small or too large. We bring the same professional standard to a single
              attic retrofit as we do to a full commercial build.
            </p>
          </div>
          <aside className="sfw-company-mission-statement">
            <span className="sfw-company-mission-mark">&ldquo;</span>
            <p>
              We&apos;re here to help people create spaces that are healthy, durable, and
              comfortable, and to do it honestly, on every job, at every size.
            </p>
            <div className="sfw-company-mission-sign">
              <strong>Aaron Hastings</strong>
              <span>Owner · The Sprayfoam Works</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="sfw-company-section sfw-company-section-muted">
        <div className="sfw-company-section-inner">
          <div className="sfw-company-section-heading sfw-company-section-heading-center">
            <span className="sfw-company-label">What We Stand For</span>
            <h2>The values behind every job</h2>
            <p>
              Six commitments that shape how we quote, install, and stand behind every project.
            </p>
          </div>
          <div className="sfw-company-card-grid sfw-company-value-grid">
            {missionValues.map((card, index) => (
              <article key={card.title} className="sfw-company-value-card">
                <div className="sfw-company-value-top">
                  <div className="sfw-company-value-icon">
                    <ValueIcon icon={card.icon} />
                  </div>
                  <span className="sfw-company-value-num">
                    {index + 1}
                  </span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialsContent() {
  const [featured, ...rest] = googleReviews;

  return (
    <>
      <section className="sfw-company-section sfw-company-section-light">
        <div className="sfw-company-section-inner">
          <div className="sfw-company-testimonials-header">
            <div>
              <span className="sfw-company-label">Google Reviews</span>
              <h2>What our customers are saying</h2>
              <p>
                The testimonials below reflect real feedback from our Google reviews. We&apos;re
                proud of the relationships we&apos;ve built with homeowners and contractors across
                Dane County.
              </p>
            </div>
            <div className="sfw-company-google-badge">
              <GoogleReviewIcon className="sfw-company-google-g" size={24} />
              <div>
                <div className="sfw-company-google-rating">
                  <strong>5.0</strong>
                  <span>★★★★★</span>
                </div>
                <span className="sfw-company-google-label">Rated on Google Reviews</span>
              </div>
            </div>
          </div>

          <article className="sfw-company-review-featured">
            <div className="sfw-company-review-featured-body">
              <div className="sfw-company-review-stars">★★★★★</div>
              <p>{featured.text}</p>
              <div className="sfw-company-review-author">
                <span className="sfw-company-review-avatar">{featured.initials}</span>
                <div>
                  <strong>{featured.name}</strong>
                  {featured.location ? <span>{featured.location}</span> : null}
                </div>
                <GoogleReviewIcon className="sfw-company-google-g sfw-company-google-g-sm" size={18} />
              </div>
            </div>
            <span className="sfw-company-review-featured-mark">&ldquo;</span>
          </article>

          <div className="sfw-company-review-masonry">
            {rest.map((review) => (
              <article key={review.name} className="sfw-company-review">
                <span className="sfw-company-review-mark">&ldquo;</span>
                <div className="sfw-company-review-stars">★★★★★</div>
                <p>{review.text}</p>
                <div className="sfw-company-review-author">
                  <span className="sfw-company-review-avatar">{review.initials}</span>
                  <div>
                    <strong>{review.name}</strong>
                    {review.location ? <span>{review.location}</span> : null}
                  </div>
                  <GoogleReviewIcon className="sfw-company-google-g sfw-company-google-g-sm" size={18} />
                </div>
              </article>
            ))}
          </div>

          <div className="sfw-company-google-cta">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btnfx sfw-company-google-button"
            >
              <GoogleReviewIcon className="sfw-company-google-g" size={24} />
              Read more reviews on Google →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PageBody({ slug }: { slug: CompanyPageSlug }) {
  switch (slug) {
    case 'our-team':
      return <OurTeamContent />;
    case 'history':
      return <HistoryContent />;
    case 'mission':
      return <MissionContent />;
    case 'testimonials':
      return <TestimonialsContent />;
  }
}

export function CompanyPage({ page }: { page: CompanyPageData }) {
  return (
    <div className="sfw-company-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <PageHero page={page} />
        <Breadcrumb items={page.breadcrumb} />
        <PageBody slug={page.slug} />
        <CtaBand />
      </main>

      <SiteFooter />
    </div>
  );
}
