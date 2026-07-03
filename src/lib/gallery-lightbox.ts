const CAPTIONS: Record<string, string> = {
  '/images/3ce463c3-81a1-428b-8839-3d576094c84e.jpg': 'Spray foam installation',
  '/images/461db213-76cf-42ce-834c-676cd8799b94.jpg': 'Blown-in attic',
  '/images/7755b2ba-adfb-484a-a8dc-2ad98bab80fa.jpg': 'Wall insulation',
  '/images/73ac49d9-3c3c-4436-bc98-d506b89106b6.jpg': 'Rim joist seal',
  '/images/992ac372-2add-4a21-a5e1-5b1143f7651a.jpg': 'Remodel insulation',
};

type LightboxState = {
  root: HTMLDivElement;
  img: HTMLImageElement;
  cap: HTMLDivElement;
  items: { src: string; caption: string }[];
  active: number | null;
};

let lightbox: LightboxState | null = null;

function getCaption(src: string, alt: string | null) {
  if (alt && alt.trim()) return alt.trim();
  return CAPTIONS[src] ?? 'Project photo';
}

function closeLightbox() {
  if (!lightbox || lightbox.active === null) return;
  lightbox.active = null;
  lightbox.root.classList.remove('open');
  lightbox.root.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showLightbox(index: number) {
  const lb = ensureLightbox();
  if (!lb.items.length) return;
  const next = ((index % lb.items.length) + lb.items.length) % lb.items.length;
  lb.active = next;
  const item = lb.items[next];
  lb.img.src = item.src;
  lb.img.alt = item.caption;
  lb.cap.textContent = item.caption;
  lb.root.classList.add('open');
  lb.root.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function ensureLightbox(): LightboxState {
  if (lightbox) return lightbox;

  const root = document.createElement('div');
  root.className = 'sfw-lightbox';
  root.setAttribute('aria-hidden', 'true');
  root.innerHTML = `
    <button type="button" class="sfw-lightbox-btn sfw-lightbox-close" aria-label="Close">×</button>
    <button type="button" class="sfw-lightbox-btn sfw-lightbox-nav sfw-lightbox-prev" aria-label="Previous image">‹</button>
    <button type="button" class="sfw-lightbox-btn sfw-lightbox-nav sfw-lightbox-next" aria-label="Next image">›</button>
    <img class="sfw-lightbox-img" alt="" />
    <div class="sfw-lightbox-cap"></div>
  `;

  const img = root.querySelector('.sfw-lightbox-img') as HTMLImageElement;
  const cap = root.querySelector('.sfw-lightbox-cap') as HTMLDivElement;

  root.querySelector('.sfw-lightbox-close')?.addEventListener('click', closeLightbox);
  root.querySelector('.sfw-lightbox-prev')?.addEventListener('click', () => {
    if (lightbox?.active !== null) showLightbox(lightbox.active - 1);
  });
  root.querySelector('.sfw-lightbox-next')?.addEventListener('click', () => {
    if (lightbox?.active !== null) showLightbox(lightbox.active + 1);
  });

  root.addEventListener('click', (event) => {
    if (event.target === root) closeLightbox();
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox || lightbox.active === null) return;
    if (event.key === 'Escape') closeLightbox();
    else if (event.key === 'ArrowRight') showLightbox(lightbox.active + 1);
    else if (event.key === 'ArrowLeft') showLightbox(lightbox.active - 1);
  });

  lightbox = { root, img, cap, items: [], active: null };
  document.body.appendChild(root);
  return lightbox;
}

export function setupGalleryLightbox(page: HTMLElement) {
  const grid = page.querySelector('.sfw-gallery-grid');
  if (!grid || grid.getAttribute('data-lightbox-ready') === 'true') return;

  const cells = Array.from(grid.querySelectorAll('.gcell'));
  if (!cells.length) return;

  const items = cells
    .map((cell) => {
      const image = cell.querySelector('img');
      const src = image?.getAttribute('src') ?? '';
      if (!src) return null;
      return {
        src,
        caption: getCaption(src, image?.getAttribute('alt') ?? null),
      };
    })
    .filter((item): item is { src: string; caption: string } => item !== null);

  if (!items.length) return;

  const lb = ensureLightbox();
  lb.items = items;
  grid.setAttribute('data-lightbox-ready', 'true');

  cells.forEach((cell, index) => {
    const el = cell as HTMLElement;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.setAttribute('aria-label', `View ${items[index]?.caption ?? 'project photo'}`);
    el.classList.add('sfw-home-gal-cell');

    const open = () => showLightbox(index);
    el.addEventListener('click', open);
    el.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}
