import type { ProjectPageData } from '@/lib/project-pages';

export type LocationPageSlug =
  | 'cottage-grove'
  | 'sun-prairie'
  | 'middleton'
  | 'verona'
  | 'fitchburg';

const img = {
  attic: '/images/8771310d-a8c4-4f6a-990d-295c3376faa9.jpg',
  wall: '/images/55880224-e572-4cf2-8156-f9aacb587114.jpg',
  barn: '/images/02d84b2a-3938-456f-9253-60e2dfaeb254.jpg',
  install: '/images/e521596f-176e-48b0-84d8-6b7b614ac354.jpg',
  fiberglass: '/images/461db213-76cf-42ce-834c-676cd8799b94.jpg',
  remodel: '/images/992ac372-2add-4a21-a5e1-5b1143f7651a.jpg',
  crew: '/images/73ac49d9-3c3c-4436-bc98-d506b89106b6.jpg',
  hero1: '/images/e623003f-d8fb-486c-9d38-70a8d134bc6a.jpg',
  hero2: '/images/24e3b785-3caa-4c8c-a281-2512afdab1ff.jpg',
};

type LocationInput = {
  slug: LocationPageSlug;
  name: string;
  heroImage: string;
  distanceLine: string;
  introParagraphs: [string, string];
  badgeValue: string;
  badgeLabel: string;
  testimonial: { quote: string; name: string; role: string };
};

function buildLocation(input: LocationInput): ProjectPageData {
  const { name, slug } = input;

  return {
    slug: slug as unknown as ProjectPageData['slug'],
    route: `/${slug}`,
    metaTitle: `Spray Foam Insulation in ${name}, WI | The Sprayfoam Works`,
    metaDescription: `Spray foam and fiberglass insulation for ${name}, Wisconsin homes and businesses. Direct pricing from a local, licensed Dane County crew — free quotes.`,
    hero: {
      eyebrow: 'Service Area',
      title: name,
      titleAccent: 'Insulation',
      subtitle: `${input.distanceLine} We bring spray foam and fiberglass insulation to ${name} homes, shops, and businesses — with direct pricing and a crew that treats your project like it's next door.`,
      image: input.heroImage,
      imageAlt: `Insulation work near ${name}, Wisconsin`,
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Locations', href: '/locations' },
      { label: name },
    ],
    intro: {
      eyebrow: `Serving ${name}`,
      title: `Your local insulation team in ${name}`,
      paragraphs: input.introParagraphs,
      bullets: [
        'Closed-cell & open-cell spray foam',
        'Batt and blown-in fiberglass',
        'Attics, walls, rim joists, and shops',
        'Free, no-pressure quotes',
      ],
      image: img.wall,
      imageAlt: `Spray foam insulation installed for a ${name} home`,
      badgeValue: input.badgeValue,
      badgeLabel: input.badgeLabel,
    },
    features: {
      eyebrow: 'Why Neighbors Choose Us',
      title: `The local advantage in ${name}`,
      subtitle:
        'We are based right here in Dane County — not a franchise routing your call three states away.',
      items: [
        {
          icon: 'shield',
          title: 'Direct, honest pricing',
          body: 'You deal with us, not a chain of middlemen. Fair quotes with no inflated markups.',
        },
        {
          icon: 'quality',
          title: 'Licensed, bonded & insured',
          body: 'Fully covered on every project, whether it is one room or a full building.',
        },
        {
          icon: 'comfort',
          title: 'Top-tier equipment',
          body: 'We reinvest in the best spray technology so every application cures clean and consistent.',
        },
        {
          icon: 'local',
          title: 'Genuinely local',
          body: `Fast scheduling and quick follow-up because ${name} is right in our backyard.`,
        },
      ],
    },
    projectTypes: {
      eyebrow: 'What We Install',
      title: `Insulation services for ${name}`,
      subtitle:
        'From drafty older homes to brand-new builds and cold pole barns, we match the material to the job.',
      items: [
        {
          title: 'Homes & Attics',
          body: 'Air seal and insulate attics, walls, and rim joists to cut drafts and energy bills.',
          image: img.attic,
        },
        {
          title: 'Shops & Pole Barns',
          body: 'Turn a cold metal or post-frame building into a comfortable, usable space year-round.',
          image: img.barn,
        },
        {
          title: 'Remodels & New Builds',
          body: 'Insulation installed at the right stage, before the walls close up for good.',
          image: img.remodel,
        },
      ],
    },
    process: {
      eyebrow: 'How It Works',
      title: 'Simple, from hello to handshake',
      steps: [
        {
          title: 'Reach Out',
          body: `Call, text, or send a few photos. Tell us what is going on in your ${name} home or building.`,
        },
        {
          title: 'Free Assessment',
          body: 'We review the space, talk through your options, and give you a clear, honest quote — no pressure.',
        },
        {
          title: 'Clean Install',
          body: 'Our crew shows up on schedule, protects the space, installs the right material, and cleans up after.',
        },
      ],
    },
    faq: {
      eyebrow: 'Good To Know',
      title: `Insulation questions from ${name}`,
      items: [
        {
          question: `Do you really serve ${name}?`,
          answer: `Yes — ${name} is well within our regular service area. We are based in Cottage Grove and Madison and cover the greater Dane County region every week.`,
        },
        {
          question: 'Spray foam or fiberglass — which is right for me?',
          answer:
            'It depends on the space and your goals. Spray foam is unbeatable for air sealing and tough spots; fiberglass is a great value in standard framed cavities. We will recommend what actually makes sense.',
        },
        {
          question: 'How do I get a quote?',
          answer:
            'Give us a call or text at (608) 279-0088, or use our contact page. We will set up a quick assessment and get you a straightforward price.',
        },
      ],
    },
    testimonial: input.testimonial,
    cta: {
      title: `Need insulation in ${name}?`,
      body: `Reach out for a free, no-pressure quote. We will help you find the right plan for your ${name} project.`,
    },
  };
}

export const locationPages: ProjectPageData[] = [
  buildLocation({
    slug: 'cottage-grove',
    name: 'Cottage Grove',
    heroImage: img.hero1,
    distanceLine: 'Cottage Grove is our home base.',
    introParagraphs: [
      'This is where it all started. The Sprayfoam Works is rooted in Cottage Grove, and it is where owner Aaron Hastings learned the trade before founding the company in 2009. When you hire us for a Cottage Grove project, you are working with the crew that lives and works right here.',
      'From older homes that need a comfort upgrade to new builds and shops going up around town, we handle spray foam and fiberglass insulation with the same care we would put into our own homes.',
    ],
    badgeValue: 'Home Base',
    badgeLabel: 'Where The Sprayfoam Works began',
    testimonial: {
      quote:
        'Aaron did an excellent job on our project that included spray foam in our exterior walls and attic. Pleasant to work with, high quality, and timely — all for a good price. Highly recommend!',
      name: 'Abby Sporel',
      role: 'Homeowner · Cottage Grove area',
    },
  }),
  buildLocation({
    slug: 'sun-prairie',
    name: 'Sun Prairie',
    heroImage: img.hero2,
    distanceLine: 'Just up the road from our shop.',
    introParagraphs: [
      'Sun Prairie is one of the fastest-growing communities in Dane County, with plenty of established neighborhoods and steady new construction. Both keep us busy — retrofitting older homes for comfort and insulating brand-new builds before the drywall goes up.',
      'Whether your Sun Prairie home has a drafty upstairs, a cold basement, or you are adding on, we will help you get the envelope right with the best material for the job.',
    ],
    badgeValue: 'Fast',
    badgeLabel: 'Quick scheduling for Sun Prairie',
    testimonial: {
      quote:
        'Spray Foam Works did an excellent job in my attic. Aaron was thorough and timely. I would highly recommend them to anyone considering spray foam.',
      name: 'Jim Koski',
      role: 'Homeowner · Sun Prairie area',
    },
  }),
  buildLocation({
    slug: 'middleton',
    name: 'Middleton',
    heroImage: img.hero1,
    distanceLine: 'A quick trip west for our crew.',
    introParagraphs: [
      'Middleton blends charming older homes with newer, high-end construction — and both deserve an insulation system that performs. We help Middleton homeowners cut drafts and energy waste, and we work with builders getting the envelope right from day one.',
      'Spray foam for air sealing and tricky spots, fiberglass where it makes sense on budget — we scope every Middleton project around how you actually use the space.',
    ],
    badgeValue: '100%',
    badgeLabel: 'Licensed, bonded & insured',
    testimonial: {
      quote:
        'Love the spray foam! Aaron does amazing work. Quality materials, done right, and easy to work with from start to finish.',
      name: 'Steve Reupert',
      role: 'Homeowner · Middleton area',
    },
  }),
  buildLocation({
    slug: 'verona',
    name: 'Verona',
    heroImage: img.hero2,
    distanceLine: 'Right in our regular service loop.',
    introParagraphs: [
      'Verona has grown fast, and with growth comes plenty of new homes, additions, and shops that need to be insulated right. We also help longtime Verona homeowners fix the comfort problems that come with older housing stock — cold rooms, drafts, and high heating bills.',
      'As a local, direct-to-customer contractor, we give Verona homeowners and builders fair pricing and a standard of work we stand behind on every job.',
    ],
    badgeValue: 'Direct',
    badgeLabel: 'No-middleman pricing in Verona',
    testimonial: {
      quote:
        'Quality work! Definitely recommend them to anyone. Professional from the first call to the finished job.',
      name: 'Arianna',
      role: 'Homeowner · Verona area',
    },
  }),
  buildLocation({
    slug: 'fitchburg',
    name: 'Fitchburg',
    heroImage: img.hero1,
    distanceLine: 'A short hop south of Madison.',
    introParagraphs: [
      'Fitchburg sits right between our two locations, so it is an easy area for us to serve quickly. From residential retrofits and remodels to commercial shells and pole barns, we bring spray foam and fiberglass insulation to Fitchburg projects of every size.',
      'We will help you choose the right assembly, keep the job clean, and deliver comfort that lasts — all with the direct pricing that comes from cutting out the middleman.',
    ],
    badgeValue: 'Any Size',
    badgeLabel: 'Homes to commercial in Fitchburg',
    testimonial: {
      quote:
        'Reliable insulation partner for our project. Consistent quality, easy to work with, and priced right. Would use them again.',
      name: 'Isthmus Wellness',
      role: 'Commercial · Fitchburg area',
    },
  }),
];

export function getLocationPage(slug: LocationPageSlug): ProjectPageData | undefined {
  return locationPages.find((page) => page.route === `/${slug}`);
}
