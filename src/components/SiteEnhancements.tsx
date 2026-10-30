'use client';

import { useEffect } from 'react';
import { setupGalleryLightbox } from '@/lib/gallery-lightbox';
import { resolveLinkRoute } from '@/lib/wire-html-links';

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
  page.querySelectorAll('a[href="#"]').forEach((link) => {
    const route = resolveLinkRoute(link.innerHTML, link.textContent ?? undefined);
    if (route) link.setAttribute('href', route);
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
    '[style*="min-height: 980px"], [style*="min-height:980px"], [style*="min-height: 890px"], [style*="min-height:890px"], [style*="min-height: 520px"], [style*="min-height:520px"]',
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
    if (hero && !heroStyle.includes('890px') && !heroStyle.includes('980px')) {
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

function setupHeroSlideshow(page: HTMLElement) {
  const hero = page.querySelector('.sfw-hero-slideshow') as HTMLElement | null;
  if (!hero || hero.dataset.slideshowReady === 'true') return;

  const slides = Array.from(hero.querySelectorAll('.sfw-hero-slide'));
  const dots = Array.from(hero.querySelectorAll('.sfw-hero-dot'));
  if (slides.length < 2 || slides.length !== dots.length) return;

  hero.dataset.slideshowReady = 'true';

  let index = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
  let timer: number | undefined;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const show = (next: number) => {
    index = ((next % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => {
      const active = i === index;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  };

  const stop = () => {
    if (timer !== undefined) {
      window.clearInterval(timer);
      timer = undefined;
    }
  };

  const start = () => {
    if (reduceMotion) return;
    stop();
    timer = window.setInterval(() => show(index + 1), 5500);
  };

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      show(i);
      start();
    });
  });

  hero.addEventListener('mouseenter', stop);
  hero.addEventListener('mouseleave', start);
  start();
}

export function SiteEnhancements({ sticky = true }: SiteEnhancementsProps) {
  useEffect(() => {
    const header = document.getElementById('siteHeader');
    const page = document.querySelector('.sfw-page') as HTMLElement | null;

    if (page && !page.dataset.enhanced) {
      page.dataset.enhanced = 'true';
      markResponsiveTargets(page);
      setupGalleryLightbox(page);
      setupHeroSlideshow(page);
    } else if (page) {
      setupHeroSlideshow(page);
    }

    if (header) {
      setupMobileNav(header);

      header.style.position = sticky ? 'sticky' : 'absolute';
      header.style.background = '';
      header.style.backdropFilter = '';
      header.style.boxShadow = '';
      (header.style as CSSStyleDeclaration & { webkitBackdropFilter?: string }).webkitBackdropFilter = '';
      if (!sticky) {
        header.style.left = '0';
        header.style.right = '0';
      }

      const HEADER_SCROLL_ON = 100;
      const HEADER_SCROLL_OFF = 36;

      const onScroll = () => {
        if (document.body.classList.contains('mobile-nav-open')) return;

        const y = window.scrollY;
        const isScrolled = header.classList.contains('sfw-header-scrolled');

        if (!isScrolled && y > HEADER_SCROLL_ON) {
          header.classList.add('sfw-header-scrolled');
        } else if (isScrolled && y < HEADER_SCROLL_OFF) {
          header.classList.remove('sfw-header-scrolled');
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
