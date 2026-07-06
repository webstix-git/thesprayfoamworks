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
    <header
      id="siteHeader"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'linear-gradient(180deg,rgba(6,6,7,.55) 0%,rgba(6,6,7,0) 100%)',
        transition: 'background .3s ease,box-shadow .3s ease,backdrop-filter .3s ease',
      }}
    >
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
          <div className="has-dd">
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
          <Link href="/get-a-quote" className="btnfx sfw-nav-cta">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
