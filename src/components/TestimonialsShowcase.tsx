import Link from 'next/link';
import { GoogleReviewIcon } from '@/components/GoogleReviewIcon';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/lib/site';

type Review = {
  initials: string;
  name: string;
  role: string;
  text: string;
};

const reviews: Review[] = [
  {
    initials: 'JM',
    name: 'Jenna M.',
    role: 'Homeowner · Madison',
    text: 'Aaron\u2019s crew sealed our attic and the upstairs finally holds heat. Fair quote, no upsell, done in a day.',
  },
  {
    initials: 'S&',
    name: 'Sarah & Ben K.',
    role: 'Homeowners · Sun Prairie',
    text: 'They removed our old, moldy fiberglass and re-foamed the crawl space. The musty smell is completely gone.',
  },
  {
    initials: 'GP',
    name: 'Greg P.',
    role: 'Homeowner · Fitchburg',
    text: 'Professional from the quote to cleanup. You can tell this is a family business that actually cares.',
  },
  {
    initials: 'RT',
    name: 'Rick T.',
    role: 'Property Owner · Cottage Grove',
    text: 'We foamed a 40x60 pole barn shop. Holds temperature through Wisconsin winters now. Highly recommend.',
  },
  {
    initials: 'ML',
    name: 'Marcus L.',
    role: 'Homeowner · Middleton',
    text: 'Direct pricing was noticeably better than the big companies, and the work was cleaner. Couldn\u2019t be happier.',
  },
  {
    initials: 'JH',
    name: 'Jim H.',
    role: 'Commercial Owner · Madison',
    text: 'Our warehouse energy bills dropped noticeably after they spray-foamed the metal roof deck. Great crew.',
  },
  {
    initials: 'DC',
    name: 'Dave C.',
    role: 'Remodeling Contractor',
    text: 'As a remodeler I sub my insulation to SFW on every project. Reliable, clean, and priced right every time.',
  },
  {
    initials: 'TR',
    name: 'Tina R.',
    role: 'New Construction · Verona',
    text: 'Insulated our new build from framing. On schedule, on budget, and the house is dead quiet and efficient.',
  },
  {
    initials: 'AD',
    name: 'Angela D.',
    role: 'Homeowner · Cottage Grove',
    text: 'Quick to respond, honest about what we did and didn\u2019t need. Rare to find a contractor like this.',
  },
];

const googleReviewsUrl = 'https://www.google.com/search?q=The+Sprayfoam+Works+Inc+reviews';

export function TestimonialsShowcase() {
  return (
    <div className="sfw-project-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-project-hero">
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise">
            <span className="sfw-project-eyebrow">Testimonials</span>
            <h1>
              Neighbors who&apos;d
              <br />
              hire us <span className="sfw-project-accent">again</span>
            </h1>
            <p>
              Real reviews from homeowners and contractors across Dane County who trusted The
              Sprayfoam Works with their insulation.
            </p>
            <div className="sfw-project-hero-actions">
              <a href={siteConfig.phoneTel} className="btnfx sfw-project-cta-primary">
                Get a Free Quote
              </a>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener"
                className="btnfx sfw-project-cta-ghost"
              >
                Read Google Reviews
              </a>
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
              <span className="sfw-project-crumb-current">Testimonials</span>
            </span>
          </div>
        </div>

        <TrustStatsBar />

        <section className="sfw-tm-statbar">
          <div className="sfw-tm-statbar-inner">
            <div className="sfw-tm-google">
              <GoogleReviewIcon className="sfw-tm-google-mark" size={24} />
              <div>
                <div className="sfw-tm-google-score">
                  <strong>5.0</strong>
                  <span className="sfw-tm-stars">★★★★★</span>
                </div>
                <small>Rated on Google Reviews</small>
              </div>
            </div>
            <div className="sfw-tm-metric">
              <strong>500+</strong>
              <span>Projects completed</span>
            </div>
            <div className="sfw-tm-metric">
              <strong>17</strong>
              <span>Years of 5-star work</span>
            </div>
          </div>
        </section>

        <section className="sfw-tm-wrap">
          <div className="sfw-tm-grid">
            {reviews.map((review) => (
              <article key={review.name} className="sfw-tm-card">
                <div className="sfw-tm-quote-mark">&ldquo;</div>
                <div className="sfw-tm-card-stars">★★★★★</div>
                <p>{review.text}</p>
                <div className="sfw-tm-person">
                  <div className="sfw-tm-avatar">{review.initials}</div>
                  <div className="sfw-tm-person-meta">
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </div>
                  <GoogleReviewIcon className="sfw-tm-g" size={18} />
                </div>
              </article>
            ))}
          </div>
          <div className="sfw-tm-more">
            <a href={googleReviewsUrl} target="_blank" rel="noopener" className="btnfx">
              <GoogleReviewIcon size={20} /> Read more reviews on Google →
            </a>
          </div>
        </section>

        <section id="quote" className="sfw-project-final-cta">
          <div className="sfw-project-final-inner">
            <div>
              <h2>Ready to join our list of happy neighbors?</h2>
              <p>Get direct pricing on spray foam &amp; fiberglass, no middleman, no pressure.</p>
            </div>
            <div className="sfw-project-final-actions">
              <Link href="/contact" className="btnfx sfw-project-final-primary">
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
