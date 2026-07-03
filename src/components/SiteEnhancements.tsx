'use client';

import { useEffect } from 'react';
import { setupGalleryLightbox } from '@/lib/gallery-lightbox';
import { htmlLinkRoutes } from '@/lib/nav-links';

type SiteEnhancementsProps = {
  sticky?: boolean;
};

function setupMobileNav(header: HTMLElement) {
  const navRow =
    (header.querySelector('.sfw-nav-shell') as HTMLElement | null) ??
    (header.children[1] as HTMLElement | undefined);
  if (!navRow) return;

  const logoWrap = navRow.querySelector('.site-nav-logo') ?? navRow.children[0];
  const navPanel =
    (navRow.querySelector('.site-nav-panel') as HTMLElement | null) ??
    (navRow.querySelector('.sfw-nav-links') as HTMLElement | null) ??
    (navRow.children[navRow.children.length - 1] as HTMLElement | undefined);

  navRow.classList.add('site-nav-bar');
  (logoWrap as HTMLElement | undefined)?.classList.add('site-nav-logo');
  navPanel?.classList.add('site-nav-panel');

  navPanel?.querySelectorAll('.has-dd').forEach((dropdown) => {
    dropdown.classList.add('mobile-dd');
    const trigger = dropdown.querySelector(':scope > .navlink');
    trigger?.setAttribute('role', 'button');
    trigger?.setAttribute('tabindex', '0');
  });

  if (navRow.querySelector('.mobile-nav-toggle')) return;

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'mobile-nav-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>';

  const closeMenu = () => {
    document.body.classList.remove('mobile-nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    navPanel?.querySelectorAll('.mobile-dd.is-open').forEach((item) => {
      item.classList.remove('is-open');
      const trigger = item.querySelector(':scope > .navlink');
      trigger?.setAttribute('aria-expanded', 'false');
    });
    header.dispatchEvent(new Event('sfw-header-sync'));
  };

  const openMenu = () => {
    document.body.classList.add('mobile-nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    header.style.background = 'rgba(11,11,12,.98)';
    header.style.backdropFilter = 'blur(10px)';
    header.style.boxShadow = '0 12px 34px rgba(0,0,0,.45)';
  };

  toggle.addEventListener('click', () => {
    if (document.body.classList.contains('mobile-nav-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navPanel?.querySelectorAll('a').forEach((link) => {
    const dropdown = link.closest('.has-dd');
    if (dropdown?.querySelector(':scope > .navlink') === link) return;
    link.addEventListener('click', closeMenu);
  });

  navPanel?.querySelectorAll('.mobile-dd').forEach((dropdown) => {
    const trigger = dropdown.querySelector(':scope > .navlink');
    if (!trigger) return;

    const onToggle = (event: Event) => {
      if (window.innerWidth > 1024) return;
      event.preventDefault();
      event.stopPropagation();
      const isOpen = dropdown.classList.contains('is-open');
      navPanel?.querySelectorAll('.mobile-dd.is-open').forEach((item) => {
        if (item !== dropdown) item.classList.remove('is-open');
      });
      dropdown.classList.toggle('is-open', !isOpen);
      trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    };

    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', onToggle);
    trigger.addEventListener('keydown', (event) => {
      const keyEvent = event as KeyboardEvent;
      if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
        onToggle(event);
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) closeMenu();
  });

  navRow.insertBefore(toggle, navPanel ?? null);
}

function wireServiceLinks(page: HTMLElement) {
  page.querySelectorAll('a').forEach((link) => {
    const label = link.textContent?.replace(/→/g, '').trim();
    if (!label || !(label in htmlLinkRoutes)) return;

    const href = link.getAttribute('href');
    if (!href || href === '#') {
      link.setAttribute('href', htmlLinkRoutes[label]);
    }
  });
}

function markResponsiveTargets(page: HTMLElement) {
  wireServiceLinks(page);

  page.querySelectorAll('[style*="display:grid"]').forEach((node) => {
    const el = node as HTMLElement;
    const style = el.getAttribute('style') ?? '';
    el.classList.add('sfw-grid');

    if (style.includes('repeat(4,1fr)') || style.includes('repeat(4, 1fr)')) {
      el.classList.add('sfw-grid-4');
    }
    if (style.includes('repeat(3,1fr)') || style.includes('repeat(3, 1fr)')) {
      el.classList.add('sfw-grid-3');
    }
    if (style.includes('grid-template-columns:1fr 1fr') || style.includes('grid-template-columns: 1fr 1fr')) {
      el.classList.add('sfw-grid-2');
    }
    if (style.includes('1.4fr')) {
      el.classList.add('sfw-grid-footer');
    }
    if (style.includes('2fr 1fr 1fr')) {
      el.classList.add('sfw-gallery-grid');
    }
    if (style.includes('1fr 1.05fr') || style.includes('1.05fr')) {
      el.classList.add('sfw-split-grid');
    }
  });

  page.querySelectorAll('[style*="display:flex"][style*="space-between"]').forEach((node) => {
    (node as HTMLElement).classList.add('sfw-flex-between');
  });

  page.querySelectorAll(
    '[style*="min-height: 890px"], [style*="min-height:890px"], [style*="min-height: 520px"], [style*="min-height:520px"]',
  ).forEach((node) => {
    const el = node as HTMLElement;
    if (el.querySelector('.hero-rise') || el.querySelector('h1')) {
      el.classList.add('sfw-hero');
    }
  });

  page.querySelectorAll('.hero-rise').forEach((node) => {
    const el = node as HTMLElement;
    el.classList.add('sfw-hero-content');

    const hero = el.closest('.sfw-hero');
    const heroStyle = hero?.getAttribute('style') ?? '';
    if (hero && !heroStyle.includes('890px')) {
      hero.classList.add('sfw-inner-hero');
      el.classList.add('sfw-inner-hero-content');
    }
  });

  page.querySelectorAll('[style*="padding:88px"], [style*="padding: 88px"]').forEach((node) => {
    (node as HTMLElement).classList.add('sfw-section');
  });

  page.querySelectorAll('[style*="padding:80px"], [style*="padding: 80px"]').forEach((node) => {
    (node as HTMLElement).classList.add('sfw-section');
  });

  page.querySelectorAll('h1').forEach((node) => {
    (node as HTMLElement).classList.add('sfw-h1');
  });

  page.querySelectorAll('h2').forEach((node) => {
    (node as HTMLElement).classList.add('sfw-h2');
  });
}

export function SiteEnhancements({ sticky = true }: SiteEnhancementsProps) {
  useEffect(() => {
    const header = document.getElementById('siteHeader');
    const page = document.querySelector('.sfw-page') as HTMLElement | null;

    if (page && !page.dataset.enhanced) {
      page.dataset.enhanced = 'true';
      markResponsiveTargets(page);
      setupGalleryLightbox(page);
    }

    if (header) {
      setupMobileNav(header);

      header.style.position = sticky ? 'sticky' : 'absolute';
      if (!sticky) {
        header.style.left = '0';
        header.style.right = '0';
      }

      const onScroll = () => {
        if (document.body.classList.contains('mobile-nav-open')) return;

        if (window.scrollY > 90) {
          header.classList.add('sfw-header-scrolled');
          header.style.background = 'rgba(11,11,12,.92)';
          header.style.backdropFilter = 'blur(10px)';
          (header.style as CSSStyleDeclaration & { webkitBackdropFilter?: string }).webkitBackdropFilter =
            'blur(10px)';
          header.style.boxShadow = '0 12px 34px rgba(0,0,0,.45)';
        } else {
          header.classList.remove('sfw-header-scrolled');
          header.style.background =
            'linear-gradient(180deg, rgba(6,6,7,.55) 0%, rgba(6,6,7,0) 100%)';
          header.style.backdropFilter = 'none';
          (header.style as CSSStyleDeclaration & { webkitBackdropFilter?: string }).webkitBackdropFilter =
            'none';
          header.style.boxShadow = 'none';
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      header.addEventListener('sfw-header-sync', onScroll);
      onScroll();

      return () => {
        window.removeEventListener('scroll', onScroll);
        header.removeEventListener('sfw-header-sync', onScroll);
      };
    }
  }, [sticky]);

  return null;
}
