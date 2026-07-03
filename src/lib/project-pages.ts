export type ProjectFeatureIcon =
  | 'comfort'
  | 'savings'
  | 'clean'
  | 'local'
  | 'sound'
  | 'structure'
  | 'schedule'
  | 'quality'
  | 'shield'
  | 'leaf';

export type ProjectPageSlug = 'retrofitting' | 'remodels' | 'new-construction';

export type ProjectPageData = {
  slug: ProjectPageSlug;
  route: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
  breadcrumb: Array<{ label: string; href?: string }>;
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    bullets: string[];
    image: string;
    imageAlt: string;
    badgeValue: string;
    badgeLabel: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ icon: ProjectFeatureIcon; title: string; body: string }>;
  };
  projectTypes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Array<{ title: string; body: string; image: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; body: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
  cta: {
    title: string;
    body: string;
  };
};

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

export const projectPages: ProjectPageData[] = [
  {
    slug: 'retrofitting',
    route: '/retrofitting',
    metaTitle: 'Retrofit Insulation for Existing Homes | The Sprayfoam Works',
    metaDescription:
      'Retrofit insulation in Madison and Dane County. We air seal and add insulation to existing homes to stop drafts and cut energy bills — no full remodel required.',
    hero: {
      eyebrow: 'Existing Homes',
      title: 'Retrofit',
      titleAccent: 'Insulation',
      subtitle:
        'Got an older Dane County home that never quite feels comfortable? We track down the drafts, seal the leaks, and add insulation where it actually counts — no full remodel required.',
      image: img.attic,
      imageAlt: 'Retrofit insulation being added to an existing attic',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Residential', href: '/residential' },
      { label: 'Retrofit' },
    ],
    intro: {
      eyebrow: 'Why Retrofit',
      title: 'Make an older home feel new again',
      paragraphs: [
        'Most homes built before modern energy codes are quietly leaking money through the attic, rim joists, and wall cavities. You feel it as cold floors in January, rooms that never warm up, and a furnace that runs and runs but never quite catches up.',
        'We start by finding the weak spots, then build a practical plan around the house you already have. Usually that means targeted air sealing and added insulation — the upgrades that deliver real, noticeable comfort without tearing your home apart.',
      ],
      bullets: [
        'Attic air sealing and added R-value',
        'Rim joist and basement leak control',
        'Cold-room and hot-room troubleshooting',
        'Smart upgrades before a new furnace or AC',
      ],
      image: img.wall,
      imageAlt: 'Insulation upgrade inside an existing wall cavity',
      badgeValue: '17 yrs',
      badgeLabel: 'Improving Dane County homes',
    },
    features: {
      eyebrow: 'What You Get',
      title: 'Comfort you can feel, savings you can measure',
      subtitle:
        'Retrofitting is about fixing the right things in the right order — not just piling on more material and hoping.',
      items: [
        {
          icon: 'comfort',
          title: 'Even, room-to-room comfort',
          body: 'Bedrooms, additions, and upstairs spaces finally stay consistent through Wisconsin temperature swings.',
        },
        {
          icon: 'savings',
          title: 'Lower heating & cooling bills',
          body: 'Sealing leaks keeps the air you paid to heat or cool inside, so your equipment runs less often.',
        },
        {
          icon: 'clean',
          title: 'Minimal mess and demo',
          body: 'We work through attics, basements, and rim joists whenever we can — with clean containment and careful access.',
        },
        {
          icon: 'shield',
          title: 'Honest, direct pricing',
          body: 'Owner-led scopes with no middleman markup. You only pay for the upgrades that actually earn their keep.',
        },
      ],
    },
    projectTypes: {
      eyebrow: 'Where We Work',
      title: 'The spots that make the biggest difference',
      subtitle:
        'A few key areas are responsible for most of the discomfort in an older home. These are where we focus first.',
      items: [
        {
          title: 'Attics',
          body: 'Seal the hidden bypasses and add R-value to stop heat from escaping at the top of the house.',
          image: img.attic,
        },
        {
          title: 'Rim Joists',
          body: 'One of the leakiest areas in most homes — sealed tight with closed-cell foam.',
          image: img.wall,
        },
        {
          title: 'Additions & Bonus Rooms',
          body: 'Bring older additions and over-garage rooms up to the comfort of the rest of the home.',
          image: img.remodel,
        },
      ],
    },
    process: {
      eyebrow: 'How It Works',
      title: 'Straightforward from first call to cleanup',
      steps: [
        {
          title: 'Inspect',
          body: 'We walk the home and look for heat-loss patterns, air leaks, access points, ventilation, and any moisture concerns.',
        },
        {
          title: 'Prioritize',
          body: 'You get a clear, honest scope focused on the upgrades with the best comfort and efficiency payback for your budget.',
        },
        {
          title: 'Install Cleanly',
          body: 'Our crew protects the space, installs the right material, and leaves the area ready to use — not a mess to clean up.',
        },
      ],
    },
    faq: {
      eyebrow: 'Good To Know',
      title: 'Questions homeowners ask us',
      items: [
        {
          question: 'Do you have to open up my walls?',
          answer:
            'Usually not. Most of the biggest wins happen in attics, basements, crawl spaces, and rim joists. If wall access would genuinely help, we walk you through the options before any work starts.',
        },
        {
          question: 'Is retrofitting worth it before I replace my HVAC?',
          answer:
            'Very often, yes. Cutting air leakage and heat loss first can make your existing system perform better — and may even change the size of the equipment you actually need.',
        },
        {
          question: 'How disruptive is the work?',
          answer:
            'Most retrofit jobs are a day or two with careful containment. We protect floors and finishes and keep the work area tidy from start to finish.',
        },
      ],
    },
    testimonial: {
      quote:
        'Spray Foam Works did an excellent job in my attic. Aaron was thorough and timely. I would highly recommend them to anyone considering spray foam for insulation.',
      name: 'Jim Koski',
      role: 'Homeowner · Madison area',
    },
    cta: {
      title: 'Ready to fix the drafty rooms?',
      body: 'Tell us what feels uncomfortable and we will help you find the right retrofit plan — with straight-up pricing.',
    },
  },
  {
    slug: 'remodels',
    route: '/remodels',
    metaTitle: 'Remodel Insulation in Madison, WI | The Sprayfoam Works',
    metaDescription:
      'Insulation for remodels and renovations in Madison and Dane County. Spray foam and fiberglass installed at the right stage — before drywall and finishes go up.',
    hero: {
      eyebrow: 'Renovations',
      title: 'Remodel',
      titleAccent: 'Insulation',
      subtitle:
        'A remodel is your one clean shot at getting insulation right. While the walls are open, we seal and insulate so your finished space performs for decades — not just looks good on day one.',
      image: img.remodel,
      imageAlt: 'Remodel in progress with open walls ready for insulation',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Residential', href: '/residential' },
      { label: 'Remodels' },
    ],
    intro: {
      eyebrow: 'Timing Matters',
      title: 'Use the remodel window wisely',
      paragraphs: [
        'A remodel is the best — and cheapest — time to fix insulation problems that would cost a fortune to reach later. Open walls, ceilings, rim joists, and new additions give us a real chance to air seal properly and install the right material without guessing.',
        'We work shoulder-to-shoulder with homeowners, remodelers, and general contractors to keep the insulation phase clean, predictable, and ready for inspection or the next trade. No surprises, no schedule blowups.',
      ],
      bullets: [
        'Kitchen, bath, basement, and attic remodels',
        'Additions and converted living spaces',
        'Sound control between rooms and floors',
        'Coordinated with framing, trades, and drywall',
      ],
      image: img.crew,
      imageAlt: 'The Sprayfoam Works crew working a remodel project',
      badgeValue: 'On Time',
      badgeLabel: 'Built around your remodel schedule',
    },
    features: {
      eyebrow: 'Why It Pays Off',
      title: 'Do it once, do it right',
      subtitle:
        'New finishes deserve a wall system that performs behind the drywall. Here is what that gets you.',
      items: [
        {
          icon: 'comfort',
          title: 'Comfort fixed at the source',
          body: 'Open assemblies let us seal gaps and cavities properly before finishes hide them for good.',
        },
        {
          icon: 'sound',
          title: 'Quieter rooms',
          body: 'Interior insulation cuts noise transfer between bedrooms, offices, basements, and media rooms.',
        },
        {
          icon: 'schedule',
          title: 'Clean project flow',
          body: 'We schedule around your other trades so insulation never becomes the thing that holds up drywall.',
        },
        {
          icon: 'quality',
          title: 'Protects your investment',
          body: 'You are paying for a beautiful remodel — the envelope behind it should be just as solid.',
        },
      ],
    },
    projectTypes: {
      eyebrow: 'Project Types',
      title: 'Remodels we insulate every week',
      subtitle:
        'Whether it is one room or a whole-home renovation, we match the material to the assembly and the goal.',
      items: [
        {
          title: 'Basement Finishing',
          body: 'Warm, dry, comfortable lower levels using foam, batts, or a smart hybrid assembly.',
          image: img.wall,
        },
        {
          title: 'Additions',
          body: 'New square footage tied into an older home the right way, so it never feels like the cold room.',
          image: img.remodel,
        },
        {
          title: 'Interior Sound Control',
          body: 'Quiet bedrooms, home offices, bathrooms, and shared walls where privacy matters.',
          image: img.fiberglass,
        },
      ],
    },
    process: {
      eyebrow: 'How It Works',
      title: 'We slot in right where you need us',
      steps: [
        {
          title: 'Review The Plans',
          body: 'We look at drawings, photos, or jobsite conditions to plan the right material and scope for your remodel.',
        },
        {
          title: 'Coordinate Timing',
          body: 'We schedule after rough-ins are done and before drywall or finishes — so the sequence stays clean.',
        },
        {
          title: 'Install & Clean Up',
          body: 'The crew completes the work, passes inspection where required, and leaves the space ready for the next stage.',
        },
      ],
    },
    faq: {
      eyebrow: 'Good To Know',
      title: 'Questions before your remodel',
      items: [
        {
          question: 'When should insulation happen during a remodel?',
          answer:
            'Usually right after framing, rough electrical, plumbing, and mechanical work are complete — but before drywall or finish panels go up. We help you time it so nothing gets held up.',
        },
        {
          question: 'Can you help with soundproofing?',
          answer:
            'Absolutely. Depending on the wall or ceiling assembly and how quiet you want it, we can recommend fiberglass, foam, or a hybrid approach to knock down noise transfer.',
        },
        {
          question: 'Do you work with my contractor?',
          answer:
            'All the time. We coordinate directly with homeowners, remodelers, and GCs across Dane County so the insulation phase is one less thing you have to manage.',
        },
      ],
    },
    testimonial: {
      quote:
        'Aaron did an excellent job adding spray foam to our exterior walls and attic in a seasonal cottage we are converting to year-round use. High quality work and materials, timely, and a good price. We\u2019d highly recommend him for any project!',
      name: 'Abby Sporel',
      role: 'Homeowner · Dane County',
    },
    cta: {
      title: 'Remodeling soon? Plan insulation early.',
      body: 'Send us the scope or a few photos and we will help you time the insulation phase so it goes off without a hitch.',
    },
  },
  {
    slug: 'new-construction',
    route: '/new-construction',
    metaTitle: 'New Construction Insulation | The Sprayfoam Works',
    metaDescription:
      'New construction insulation in Madison and Dane County. Spray foam, fiberglass, and hybrid packages for efficient new homes, additions, and commercial builds.',
    hero: {
      eyebrow: 'Build Right From Day One',
      title: 'New Construction',
      titleAccent: 'Insulation',
      subtitle:
        'The best time to solve comfort and energy problems is before they ever start. We build high-performance insulation into the shell of your new home or building — clean, on schedule, and ready for inspection.',
      image: img.install,
      imageAlt: 'Spray foam insulation being installed in new construction',
    },
    breadcrumb: [
      { label: 'Home', href: '/' },
      { label: 'Residential', href: '/residential' },
      { label: 'New Construction' },
    ],
    intro: {
      eyebrow: 'Performance First',
      title: 'Build the envelope before you decorate it',
      paragraphs: [
        'New construction is your chance to get insulation right the first time — before a single comfort complaint or high energy bill ever shows up. We help builders and owners choose the right mix of spray foam, fiberglass, and air sealing for the building and the budget.',
        'From custom homes to additions, post-frame buildings, and light commercial interiors, our focus is clean coverage, builder-friendly scheduling, and assemblies that keep performing long after move-in day.',
      ],
      bullets: [
        'Walls, attics, roof decks, rim joists, and ceilings',
        'Hybrid assemblies that balance performance and budget',
        'Builder-friendly scheduling and documentation',
        'Residential and light commercial projects',
      ],
      image: img.attic,
      imageAlt: 'New construction attic insulated with spray foam',
      badgeValue: 'Code-Ready',
      badgeLabel: 'Clean installs for inspection',
    },
    features: {
      eyebrow: 'Why Build With Us',
      title: 'Comfort built into the structure',
      subtitle:
        'Get the envelope right and everything downstream — HVAC, comfort, energy bills — gets easier.',
      items: [
        {
          icon: 'comfort',
          title: 'Fewer comfort complaints',
          body: 'A tight, well-insulated envelope heads off hot rooms, cold rooms, and drafts before anyone moves in.',
        },
        {
          icon: 'leaf',
          title: 'Better HVAC performance',
          body: 'Proper air sealing and insulation let mechanical equipment run closer to how it was designed to.',
        },
        {
          icon: 'quality',
          title: 'Cleaner inspections',
          body: 'Thoughtful installs make cavity coverage and air-sealing details easy to verify and sign off.',
        },
        {
          icon: 'structure',
          title: 'The right material per cavity',
          body: 'Not every space needs the same product. We match foam, fiberglass, or hybrid to each assembly.',
        },
      ],
    },
    projectTypes: {
      eyebrow: 'What We Build',
      title: 'From custom homes to commercial shells',
      subtitle:
        'We scope every project around its plans, assemblies, and performance goals — not a one-size-fits-all spec.',
      items: [
        {
          title: 'Custom Homes',
          body: 'High-comfort, high-efficiency insulation packages designed around the way the home is built.',
          image: img.remodel,
        },
        {
          title: 'Additions',
          body: 'New square footage insulated correctly before finishes go in, so it matches the main house.',
          image: img.install,
        },
        {
          title: 'Commercial Shells',
          body: 'Warehouses, offices, and shop spaces air sealed and insulated to practical, real-world specs.',
          image: img.barn,
        },
      ],
    },
    process: {
      eyebrow: 'How It Works',
      title: 'A build partner, not just a sub',
      steps: [
        {
          title: 'Plan Review',
          body: 'We review plans, wall and roof assemblies, rim details, and your performance goals up front.',
        },
        {
          title: 'Material Selection',
          body: 'You get clear options for foam, fiberglass, or a hybrid system — with the trade-offs explained in plain English.',
        },
        {
          title: 'Jobsite Execution',
          body: 'We show up at the right stage, install cleanly, and hand off to the next trade without slowing the build.',
        },
      ],
    },
    faq: {
      eyebrow: 'Good To Know',
      title: 'Questions from builders & owners',
      items: [
        {
          question: 'Do you work directly with builders?',
          answer:
            'Yes — constantly. We coordinate with contractors, remodelers, and owner-builders throughout Dane County and keep our phase predictable and documented.',
        },
        {
          question: 'Is a hybrid insulation package worth it?',
          answer:
            'Often, yes. Foam goes where air sealing matters most, and fiberglass keeps cost in check in standard framed cavities. It is a smart way to hit performance targets on budget.',
        },
        {
          question: 'Can you meet our build schedule?',
          answer:
            'That is the goal. Tell us your framing and drywall dates and we plan our crew and materials around them so insulation never becomes the bottleneck.',
        },
      ],
    },
    testimonial: {
      quote:
        'Love the spray foam! Aaron does amazing work. Quality materials, done right, and easy to work with from start to finish.',
      name: 'Steve Reupert',
      role: 'Property Owner · Dane County',
    },
    cta: {
      title: 'Building new? Lock in performance early.',
      body: 'Share your plans or square footage and we will help you build a clean, code-ready insulation scope.',
    },
  },
];

export function getProjectPage(slug: ProjectPageSlug): ProjectPageData | undefined {
  return projectPages.find((page) => page.slug === slug);
}
