import Link from 'next/link';
import Image from 'next/image';
import { footerCompanyLinks, locationNavLinks, serviceNavLinks } from '@/lib/nav-links';
import { siteConfig } from '@/lib/site';

function FollowUsLink() {
  return (
    <a
      href="https://www.facebook.com/sprayfoamworks/"
      target="_blank"
      rel="noopener noreferrer"
      className="navlink sfw-social-link sfw-follow-link"
      aria-label="Follow us on Facebook"
    >
      Follow us on
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="sfw-site-footer">
      <div className="sfw-footer-grid sfw-grid-footer">
        <div>
          <Image
            src="/images/27633300-827f-4026-863c-34f1493e0f4e.png"
            alt={siteConfig.name}
            width={200}
            height={80}
            className="sfw-footer-logo"
          />
          <div className="sfw-footer-contact">
            <div>
              <svg
                className="sfw-footer-contact-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={siteConfig.phoneTel}>{siteConfig.phone}</a>
            </div>
            <div>
              <svg
                className="sfw-footer-contact-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div>
              <FollowUsLink />
            </div>
          </div>
        </div>

        <div>
          <h3>Services</h3>
          <div className="sfw-footer-links">
            {serviceNavLinks.map((service) => (
              <Link key={service.href} href={service.href} className="navlink">
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Company</h3>
          <div className="sfw-footer-links">
            {footerCompanyLinks.map((link) => (
              <Link key={link.label} href={link.href} className="navlink">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div hidden>
          <h3>Locations</h3>
          <div className="sfw-footer-links">
            {locationNavLinks.map((location) => (
              <Link key={location.label} href={location.href} className="navlink">
                {location.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>Sectors</h3>
          <div className="sfw-footer-links">
            <Link href="/residential" className="navlink">
              Residential
            </Link>
            <Link href="/retrofitting" className="navlink">
              Retrofit
            </Link>
            <Link href="/commercial" className="navlink">
              Commercial
            </Link>
          </div>
        </div>
      </div>

      <div className="sfw-footer-bottom">
        <div className="sfw-footer-bottom-left">
          <span>© 2026 The Sprayfoam Works, Inc.</span>
          <span className="sfw-footer-legal-sep" aria-hidden="true">
            ·
          </span>
          <div className="sfw-footer-legal">
            <Link href="/sitemap" className="navlink">
              Sitemap
            </Link>
            <span className="sfw-footer-legal-sep" aria-hidden="true">
              |
            </span>
            <Link href="/service-index" className="navlink">
              Service Index
            </Link>
            <span className="sfw-footer-legal-sep" aria-hidden="true">
              |
            </span>
            <Link href="/ai-policy" className="navlink">
              AI Policy
            </Link>
            <span className="sfw-footer-legal-sep" aria-hidden="true">
              |
            </span>
            <Link href="/privacy-policy" className="navlink">
              Privacy Policy
            </Link>
          </div>
        </div>
        <a
          href="https://webstix.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="sfw-footer-credit"
          aria-label="Designed by Webstix"
        >
          <span className="sfw-footer-credit-label">Designed by</span>
          <Image
            src="/images/webstix-footer-logo.png"
            alt="Webstix"
            width={88}
            height={22}
            className="sfw-footer-credit-logo"
          />
        </a>
      </div>
    </footer>
  );
}
