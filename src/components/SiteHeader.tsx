import Link from 'next/link';
import Image from 'next/image';
import { HeaderSearch } from '@/components/SiteSearch';
import { dropdownMenuItems, headerDropdowns } from '@/lib/nav-links';
import { siteConfig } from '@/lib/site';

function NavDropdown({
  dropdown,
}: {
  dropdown: (typeof headerDropdowns)[number];
}) {
  return (
    <div className="has-dd">
      <button type="button" className="navlink" aria-haspopup="true" aria-expanded="false">
        {dropdown.label} <span className="sfw-dd-caret">▼</span>
      </button>
      <div className="dd">
        {dropdownMenuItems(dropdown).map((item, index) => (
          <Link
            key={`${item.label}-${item.href}`}
            href={item.href}
            className={index === 0 ? 'ddlink sfw-dd-parent' : 'ddlink'}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [services, residential, commercial, about] = headerDropdowns;

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

        <HeaderSearch className="sfw-header-search-mobile" />

        <nav className="sfw-nav-links" aria-label="Primary navigation">
          <Link href="/" className="navlink">
            Home
          </Link>
          <NavDropdown dropdown={services} />
          <NavDropdown dropdown={residential} />
          <NavDropdown dropdown={commercial} />
          <Link href="/faqs" className="navlink">
            FAQs
          </Link>
          <Link href="/gallery" className="navlink">
            Gallery
          </Link>
          <NavDropdown dropdown={about} />
          <Link href="/contact" className="navlink">
            Contact
          </Link>
          <HeaderSearch className="sfw-header-search-desktop" />
          <Link href={siteConfig.quotePage.href} className="btnfx sfw-nav-cta">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
