'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

export type GalleryItem = {
  src: string;
  caption: string;
  tall?: boolean;
};

function ZoomIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const show = useCallback(
    (next: number) => setActive(((next % items.length) + items.length) % items.length),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      else if (event.key === 'ArrowRight')
        setActive((i) => (i === null ? i : (i + 1) % items.length));
      else if (event.key === 'ArrowLeft')
        setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, items.length]);

  return (
    <>
      <div className="sfw-gal-grid">
        {items.map((item, index) => (
          <button
            type="button"
            key={`${item.caption}-${index}`}
            className={`sfw-gal-cell${item.tall ? ' tall' : ''}`}
            onClick={() => show(index)}
            aria-label={`View ${item.caption}`}
          >
            <Image src={item.src} alt={item.caption} fill sizes="(max-width: 720px) 50vw, 25vw" />
            <span className="sfw-gal-shade" />
            <span className="sfw-gal-cap">{item.caption}</span>
            <span className="sfw-gal-zoom">
              <ZoomIcon />
            </span>
          </button>
        ))}
      </div>

      <div
        className={`sfw-lightbox${active !== null ? ' open' : ''}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        aria-hidden={active === null}
      >
        <button
          type="button"
          className="sfw-lightbox-btn sfw-lightbox-close"
          onClick={close}
          aria-label="Close"
        >
          ×
        </button>
        <button
          type="button"
          className="sfw-lightbox-btn sfw-lightbox-nav sfw-lightbox-prev"
          onClick={() => active !== null && show(active - 1)}
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          className="sfw-lightbox-btn sfw-lightbox-nav sfw-lightbox-next"
          onClick={() => active !== null && show(active + 1)}
          aria-label="Next image"
        >
          ›
        </button>
        {active !== null && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="sfw-lightbox-img" src={items[active].src} alt={items[active].caption} />
        )}
        <div className="sfw-lightbox-cap">{active !== null ? items[active].caption : ''}</div>
      </div>
    </>
  );
}
