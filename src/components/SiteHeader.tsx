import Link from 'next/link';
import Image from 'next/image';
import {
  aboutNavLinks,
  locationNavLinks,
  residentialNavLinks,
  serviceNavLinks,
} from '@/lib/nav-links';
import { siteConfig } from '@/lib/site';

export function SiteHeader() {
  return (
    <header id="siteHeader" className="sfw-site-header">
      <div className="sfw-nav-shell">
        <div className="site-nav-logo">
          <Link href="/">
            <Image
              src="/images/f1b7b10f-ca37-4942-a74f-5c9d9b53e0e1.png"
              alt={siteConfig.name}
              width={220}
              height={120}
              className="sfw-logo"
            />
          </Link>
        </div>

        <nav className="sfw-nav-links" aria-label="Primary navigation">
          <Link href="/" className="navlink">
            Home
          </Link>
          <div className="has-dd">
            <Link href="/services" className="navlink">
              Services <span className="sfw-dd-caret">▼</span>
            </Link>
            <div className="dd">
              <Link href="/services" className="ddlink sfw-dd-parent">
                All Services
              </Link>
              {serviceNavLinks.map((item) => (
                <Link key={item.href} href={item.href} className="ddlink">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="has-dd">
            <Link href="/about" className="navlink">
              About SFW <span className="sfw-dd-caret">▼</span>
            </Link>
            <div className="dd">
              <Link href="/about" className="ddlink sfw-dd-parent">
                About SFW
              </Link>
              {aboutNavLinks
                .filter((item) => item.href !== '/about')
                .map((item) => (
                  <Link key={item.href} href={item.href} className="ddlink">
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="has-dd">
            <Link href="/residential" className="navlink">
              Residential <span className="sfw-dd-caret">▼</span>
            </Link>
            <div className="dd">
              <Link href="/residential" className="ddlink sfw-dd-parent">
                All Residential
              </Link>
              {residentialNavLinks.map((item) => (
                <Link key={item.href} href={item.href} className="ddlink">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/commercial" className="navlink">
            Commercial
          </Link>
          <Link href="/gallery" className="navlink">
            Gallery
          </Link>
          <Link href="/contact" className="navlink">
            Contact
          </Link>
          <div className="has-dd" hidden>
            <Link href="/locations" className="navlink">
              Locations <span className="sfw-dd-caret">▼</span>
            </Link>
            <div className="dd">
              <Link href="/locations" className="ddlink sfw-dd-parent">
                All Locations
              </Link>
              {locationNavLinks.map((item) => (
                <Link key={item.label} href={item.href} className="ddlink">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <a
            href={siteConfig.quoteForm.href}
            download={siteConfig.quoteForm.download}
            className="btnfx sfw-nav-cta"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
