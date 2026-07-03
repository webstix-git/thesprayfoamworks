import Link from 'next/link';
import Image from 'next/image';
import { TrustStatsBar } from '@/components/TrustStatsBar';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/lib/site';

const img = {
  install: '/images/e521596f-176e-48b0-84d8-6b7b614ac354.jpg',
  fiberglass: '/images/461db213-76cf-42ce-834c-676cd8799b94.jpg',
  hero: '/images/e623003f-d8fb-486c-9d38-70a8d134bc6a.jpg',
};

const coreServices = [
  {
    href: '/spray-foam-insulation',
    title: 'Spray Foam Insulation',
    image: img.install,
    alt: 'Spray foam insulation being applied',
    body: 'Open & closed-cell foam that air-seals and insulates in a single step for the tightest, highest-performing envelope.',
  },
  {
    href: '/fiberglass',
    title: 'Fiberglass Insulation',
    image: img.fiberglass,
    alt: 'Fiberglass batt insulation installed in a wall',
    body: 'Cost-effective batt & blown-in coverage for attics, walls, and floors, expertly and evenly installed.',
  },
];

type SpecIcon = 'retrofit' | 'barn' | 'remodel' | 'new' | 'removal' | 'help';

const specialties: { href: string; title: string; body: string; icon: SpecIcon }[] = [
  {
    href: '/retrofitting',
    title: 'Retrofitting',
    body: 'Upgrade existing homes and buildings without tearing them apart.',
    icon: 'retrofit',
  },
  {
    href: '/pole-barns',
    title: 'Pole Barns',
    body: 'Climate-control shops, barns, and steel buildings year-round.',
    icon: 'barn',
  },
  {
    href: '/remodels',
    title: 'Remodels',
    body: 'Insulation dialed in during your renovation or addition.',
    icon: 'remodel',
  },
  {
    href: '/new-construction',
    title: 'New Construction',
    body: 'Built-in efficiency engineered from the framing stage up.',
    icon: 'new',
  },
  {
    href: '/insulation-removal',
    title: 'Insulation Removal',
    body: 'Old, damaged, or contaminated material cleared out cleanly.',
    icon: 'removal',
  },
  {
    href: '/contact',
    title: 'Not sure what you need?',
    body: 'Tell us about your space and we will recommend the right fit.',
    icon: 'help',
  },
];

const steps = [
  {
    num: '1',
    title: 'Free assessment',
    body: 'We inspect the space and recommend the right material, no pressure.',
  },
  {
    num: '2',
    title: 'Direct quote',
    body: 'Transparent, middleman-free pricing you can plan around.',
  },
  {
    num: '3',
    title: 'Clean install',
    body: 'Masked, sprayed or set, and tidied up with pro-grade equipment.',
  },
  {
    num: '4',
    title: 'Enjoy the savings',
    body: 'A tighter, quieter, cheaper-to-run building from day one.',
  },
];

function SpecIconSvg({ icon }: { icon: SpecIcon }) {
  const props = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (icon) {
    case 'retrofit':
      return (
        <svg {...props}>
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15" />
        </svg>
      );
    case 'barn':
      return (
        <svg {...props}>
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M3 21h18" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case 'remodel':
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.6-.6-2.5 2.6-2.5z" />
        </svg>
      );
    case 'new':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      );
    case 'removal':
      return (
        <svg {...props}>
          <path d="M3 6h18" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6M14 11v6M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
        </svg>
      );
    case 'help':
      return (
        <svg {...props}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    default:
      return null;
  }
}

export function ServicesPage() {
  return (
    <div className="sfw-project-page">
      <SiteHeader />
      <SiteEnhancements sticky />

      <main>
        <div className="sfw-project-hero">
          <Image
            src={img.hero}
            alt="Insulation services"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="sfw-project-hero-overlay" />
          <div className="sfw-project-hero-content hero-rise">
            <span className="sfw-project-eyebrow">Our Services</span>
            <h1>
              Insulation done
              <br />
              <span className="sfw-project-accent">every way</span>
            </h1>
            <p>
              From spray foam to full insulation removal, residential and commercial, across
              Madison, Cottage Grove, and greater Dane County.
            </p>
            <div className="sfw-project-hero-actions">
              <a href={siteConfig.phoneTel} className="btnfx sfw-project-cta-primary">
                Get a Free Quote
              </a>
              <Link href="/gallery" className="btnfx sfw-project-cta-ghost">
                See Our Work
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
              <span className="sfw-project-crumb-current">Services</span>
            </span>
          </div>
        </div>

        <TrustStatsBar />

        <section className="sfw-project-section sfw-project-section-light">
          <div className="sfw-project-inner">
            <div className="sfw-srv-head">
              <div className="sfw-srv-eyebrow">What We Do</div>
              <h2>Core insulation services</h2>
              <p>
                The two materials we install most, chosen and applied to fit your building and
                budget.
              </p>
            </div>
            <div className="sfw-srv-core-grid">
              {coreServices.map((service) => (
                <Link key={service.href} href={service.href} className="sfw-srv-core-card">
                  <div className="sfw-srv-core-img">
                    <Image src={service.image} alt={service.alt} width={640} height={420} />
                  </div>
                  <div className="sfw-srv-core-body">
                    <div className="sfw-srv-tag">CORE SERVICE</div>
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                    <span className="sfw-srv-learn">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sfw-project-section sfw-project-section-white">
          <div className="sfw-project-inner">
            <div className="sfw-srv-head">
              <div className="sfw-srv-eyebrow">Specialties</div>
              <h2>Specialized applications</h2>
              <p>Whatever the building or stage of construction, we have the right approach.</p>
            </div>
            <div className="sfw-srv-spec-grid">
              {specialties.map((item) => (
                <Link key={item.title} href={item.href} className="sfw-srv-spec-card">
                  <div className="sfw-srv-icon">
                    <SpecIconSvg icon={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="sfw-srv-section-dark">
          <div className="sfw-project-inner">
            <div className="sfw-srv-head">
              <div className="sfw-srv-eyebrow">How It Works</div>
              <h2>A simple path to a tighter building</h2>
            </div>
            <div className="sfw-srv-process-grid">
              {steps.map((step) => (
                <div key={step.num} className="sfw-srv-step">
                  <div className="sfw-srv-step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="sfw-project-final-cta">
          <div className="sfw-project-final-inner">
            <div>
              <h2>Not sure which service you need?</h2>
              <p>
                Tell us about your project and we will point you to the right fit, with direct
                pricing.
              </p>
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
