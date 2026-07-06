import Link from 'next/link';
import Image from 'next/image';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { locationNavLinks } from '@/lib/nav-links';
import { siteConfig } from '@/lib/site';

const img = {
  hero: '/images/e623003f-d8fb-486c-9d38-70a8d134bc6a.jpg',
  cottageGrove: '/images/e623003f-d8fb-486c-9d38-70a8d134bc6a.jpg',
  madison: '/images/24e3b785-3caa-4c8c-a281-2512afdab1ff.jpg',
  community: '/images/992ac372-2add-4a21-a5e1-5b1143f7651a.jpg',
  local: '/images/992ac372-2add-4a21-a5e1-5b1143f7651a.jpg',
};

const offices = [
  {
    name: 'Cottage Grove',
    href: '/cottage-grove',
    image: img.cottageGrove,
    badge: 'Home Base',
  },
  {
    name: 'Madison',
    href: '/madison',
    image: img.madison,
    badge: 'Second Location',
  },
];

const communityCards = locationNavLinks.map((location) => ({
  ...location,
  image: img.community,
}));

const localBenefits = [
  {
    title: 'Faster local scheduling',
    body: 'We are minutes away, not routed from another state.',
  },
  {
    title: 'Knows the local climate',
    body: 'Insulation specced for Wisconsin winters and summers.',
  },
  {
    title: 'Direct, local pricing',
    body: 'No middleman markup. You deal with us directly.',
  },
];

function PinIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function LocationsPage() {
  return (
    <div className="sfw-project-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-loc-hero">
          <Image src={img.hero} alt="Dane County service area" fill priority sizes="100vw" />
          <div className="sfw-loc-hero-overlay" />
          <div className="sfw-loc-hero-content hero-rise">
            <span className="sfw-loc-eyebrow">Service Areas</span>
            <h1>
              Proudly serving
              <br />
              <span className="sfw-loc-accent">Dane County</span>
            </h1>
            <p>
              Local, direct-priced spray foam and fiberglass insulation across the greater Madison
              area, from two home bases right here in Dane County.
            </p>
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
              <span className="sfw-project-crumb-current">Locations</span>
            </span>
          </div>
        </div>

        <TrustStatsBar />

        <section className="sfw-loc-offices">
          <div className="sfw-loc-offices-inner">
            <div className="sfw-loc-offices-copy">
              <span className="sfw-loc-label">Where We Work</span>
              <h2>Two locations, one local team</h2>
              <p>
                The Sprayfoam Works is a genuinely local contractor, not a franchise routing your
                call out of state. With offices in Cottage Grove and Madison, we cover homes and
                commercial buildings throughout Dane County and the surrounding communities.
              </p>
              <p>
                If you are nearby and do not see your town listed, reach out anyway. Chances are we
                serve your area too.
              </p>
            </div>

            <div className="sfw-loc-office-grid">
              {offices.map((office) => (
                <Link key={office.name} href={office.href} className="sfw-loc-office-card scard lift">
                  <div className="sfw-loc-office-image">
                    <Image src={office.image} alt={office.name} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="sfw-loc-office-body">
                    <div className="sfw-loc-office-title">
                      <span className="sfw-loc-pin">
                        <PinIcon />
                      </span>
                      <h3>{office.name}</h3>
                    </div>
                    <span className="sfw-loc-office-badge">{office.badge}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sfw-loc-communities">
          <div className="sfw-loc-communities-heading">
            <span className="sfw-loc-label">Service Areas</span>
            <h2>Communities we cover</h2>
            <p>Click a city to see local services, or call us to confirm coverage for your address.</p>
          </div>

          <div className="sfw-loc-community-grid">
            {communityCards.map((location) => (
              <Link key={location.href} href={location.href} className="sfw-loc-community-card scard lift">
                <Image src={location.image} alt={location.label} fill sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="sfw-loc-community-shade" />
                <div className="sfw-loc-community-body">
                  <div className="sfw-loc-community-title">
                    <span className="sfw-loc-pin">
                      <PinIcon />
                    </span>
                    <h3>{location.label}</h3>
                  </div>
                  <span className="sfw-loc-community-link">View area page →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="sfw-loc-why">
          <div className="sfw-loc-why-inner">
            <div className="sfw-loc-why-image">
              <Image src={img.local} alt="Local insulation crew at work" fill sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div>
              <span className="sfw-loc-label">Why Local Matters</span>
              <h2>A neighbor, not a call center</h2>
              <p>
                Hiring local means faster scheduling, someone who knows Dane County housing stock and
                code, and a team that stands behind its work because our reputation lives right here.
              </p>
              <div className="sfw-loc-benefits">
                {localBenefits.map((benefit) => (
                  <div key={benefit.title} className="sfw-loc-benefit">
                    <span>✓</span>
                    <div>
                      <strong>{benefit.title}</strong>
                      <p>{benefit.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quote" className="sfw-project-final-cta">
          <div className="sfw-project-final-inner">
            <div>
              <h2>
                Not sure if we
                <br />
                cover your area?
              </h2>
              <p>
                Give us a call. If you are in or near Dane County, we can almost certainly help.
              </p>
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
