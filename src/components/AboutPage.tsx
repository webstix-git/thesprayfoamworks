import Link from 'next/link';
import Image from 'next/image';
import { GoogleReviewIcon } from '@/components/GoogleReviewIcon';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { photos } from '@/lib/project-photos';
import { testimonialReviews } from '@/lib/testimonials';

const featuredReviewNames = ['Michael Drews', 'Abby Spoerl', 'Mike Kenig', 'Dan B.'];

const featuredReviews = featuredReviewNames
  .map((name) => testimonialReviews.find((review) => review.name === name))
  .filter((review): review is (typeof testimonialReviews)[number] => Boolean(review));

export function AboutPage() {
  return (
    <div className="sfw-company-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-company-hero">
          <Image
            src={photos.vaultedNewBuild}
            alt="Spray foam insulation project"
            fill
            priority
            className="sfw-company-hero-image"
            sizes="100vw"
          />
          <div className="sfw-company-hero-overlay" />
          <div className="sfw-company-hero-content hero-rise">
            <span className="sfw-company-eyebrow">About</span>
            <h1>
              Local Service. Proven Experience.
              <br />
              <span className="sfw-company-accent">Insulation Done Right.</span>
            </h1>
          </div>
        </div>

        <div className="sfw-company-breadcrumb">
          <div className="sfw-company-breadcrumb-inner">
            <span className="sfw-company-crumb">
              <Link href="/" className="navlink">
                Home
              </Link>
            </span>
            <span className="sfw-company-crumb">
              <span className="sfw-company-crumb-sep">/</span>
              <span className="sfw-company-crumb-current">About</span>
            </span>
          </div>
        </div>

        <section id="our-story" className="sfw-company-section sfw-company-section-light">
          <div className="sfw-company-section-inner sfw-company-about-copy">
            <span className="sfw-company-label">Our Story</span>
            <h2>Local Service. Proven Experience. Insulation Done Right.</h2>
            <p>
              At The Sprayfoam Works, Inc., we believe insulation should do more than fill a wall
              cavity. Done right, it can improve comfort, increase energy efficiency, protect against
              moisture, and help create buildings that perform better for years to come.
            </p>
            <p>
              With nearly 20 years in the insulation industry, owner Aaron Hastings helps homeowners,
              builders, businesses, and agricultural customers choose insulation solutions that meet
              their needs and perform for years to come.
            </p>
            <p>
              After years in the industry, Aaron founded The Sprayfoam Works, Inc. in 2015 with a
              simple goal: provide high-quality insulation services backed by honest communication,
              dependable workmanship, and personal attention to every project.
            </p>
            <p>
              As a locally owned and owner-operated business, Aaron believes that good service starts
              with relationships. Customers work directly with him from estimate to installation,
              ensuring clear communication, accountability, and attention to detail throughout the
              entire process.
            </p>
            <p>
              Whether the project involves a new home, an existing building, a pole barn, an
              agricultural structure, or a commercial facility, customers can expect quality
              workmanship, straightforward pricing, and professional results.
            </p>
            <p>
              We&apos;re proud to serve the Greater Dane County area and South-Central Wisconsin with
              insulation solutions designed to create comfortable, durable, and energy-efficient
              buildings.
            </p>
          </div>
        </section>

        <section id="customer-reviews" className="sfw-company-section sfw-company-section-dark">
          <div className="sfw-company-section-inner">
            <div className="sfw-company-section-heading sfw-company-section-heading-center">
              <span className="sfw-company-label">Customer Reviews</span>
              <h2>Why Customers Trust Us</h2>
              <p>
                Our reputation is built one project at a time. These reviews reflect our commitment to
                quality workmanship, honest communication, and dependable service.
              </p>
              <p>We&apos;re grateful for the trust our customers place in us.</p>
            </div>

            <div className="sfw-about-review-grid">
              {featuredReviews.map((review) => (
                <article key={review.name} className="sfw-company-review sfw-about-review-card">
                  <span className="sfw-company-review-mark">&ldquo;</span>
                  <div className="sfw-company-review-stars">★★★★★</div>
                  <p>{review.text}</p>
                  <div className="sfw-company-review-author">
                    <div className="sfw-company-review-avatar" aria-hidden="true">
                      {review.initials}
                    </div>
                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.role}</span>
                    </div>
                    <GoogleReviewIcon size={18} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="areas-we-serve" className="sfw-company-section sfw-company-section-light">
          <div className="sfw-company-section-inner sfw-company-about-copy">
            <span className="sfw-company-label">Areas We Serve</span>
            <h2>Areas We Serve</h2>
            <p>
              The Sprayfoam Works, Inc. provides spray foam and fiberglass insulation services
              throughout the Greater Dane County area and South-Central Wisconsin.
            </p>
            <p>
              Whether you&apos;re building a new home, remodeling an existing structure, insulating a
              commercial facility, or improving a pole barn or agricultural building, we&apos;re
              committed to delivering the professional service and quality workmanship on every
              project.
            </p>
            <p>
              If you have questions about your project or its location, please{' '}
              <Link href="/contact">contact us</Link>.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
