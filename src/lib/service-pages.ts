export type ServicePageData = {
  slug: string;
  route: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  metaDescription: string;
  heroImage: string;
  imageAlt: string;
  stats: Array<{ value: string; label: string }>;
  intro: {
    eyebrow: string;
    title: string;
    body: string[];
    bullets: string[];
    image: string;
  };
  benefits: Array<{ title: string; body: string }>;
  applications: Array<{ title: string; body: string; image: string }>;
  process: Array<{ title: string; body: string }>;
  faq: Array<{ question: string; answer: string }>;
  ctaTitle: string;
  ctaBody: string;
};

const sharedImages = {
  attic: '/images/8771310d-a8c4-4f6a-990d-295c3376faa9.jpg',
  wall: '/images/55880224-e572-4cf2-8156-f9aacb587114.jpg',
  barn: '/images/02d84b2a-3938-456f-9253-60e2dfaeb254.jpg',
  install: '/images/e521596f-176e-48b0-84d8-6b7b614ac354.jpg',
  fiberglass: '/images/461db213-76cf-42ce-834c-676cd8799b94.jpg',
  remodel: '/images/992ac372-2add-4a21-a5e1-5b1143f7651a.jpg',
  crew: '/images/73ac49d9-3c3c-4436-bc98-d506b89106b6.jpg',
};

export const servicePages: ServicePageData[] = [
  {
    slug: 'retrofitting',
    route: '/retrofitting',
    eyebrow: 'Existing Homes',
    title: 'Retrofitting',
    accent: 'Insulation',
    description:
      'Upgrade comfort and efficiency in an existing home without turning the whole house into a construction zone.',
    metaDescription:
      'Insulation retrofitting for existing homes in Madison and Dane County. Improve comfort, drafts, and energy performance without a major remodel.',
    heroImage: sharedImages.attic,
    imageAlt: 'Retrofitting insulation in an existing attic',
    stats: [
      { value: 'Targeted', label: 'Air leak and comfort fixes' },
      { value: 'Less Mess', label: 'Planned access and containment' },
      { value: 'Older Homes', label: 'Built for real Wisconsin housing stock' },
      { value: 'Direct', label: 'Owner-led pricing and scope' },
    ],
    intro: {
      eyebrow: 'What We Fix',
      title: 'Make an older home feel new again',
      body: [
        'Retrofit insulation is for homes that were built before modern air sealing and energy standards. We find the weak spots that make rooms drafty, noisy, or hard to heat, then build a practical plan around the structure you already have.',
        'That might mean dense attic improvements, rim joist sealing, wall cavity upgrades, or targeted spray foam where air leakage is doing the most damage. The goal is simple: better comfort without unnecessary demolition.',
      ],
      bullets: [
        'Attic air sealing and added insulation',
        'Rim joist and basement leak control',
        'Cold room and hot room troubleshooting',
        'Older home upgrades before HVAC replacement',
      ],
      image: sharedImages.wall,
    },
    benefits: [
      {
        title: 'Stops the hidden drafts',
        body: 'Small leaks around joists, chases, and attic penetrations add up fast. We seal the problem areas instead of only adding more material.',
      },
      {
        title: 'Lower utility waste',
        body: 'Retrofitting keeps conditioned air where you paid for it, helping heating and cooling equipment run less often.',
      },
      {
        title: 'Better room-to-room comfort',
        body: 'Bedrooms, additions, and upstairs spaces become easier to keep consistent through Wisconsin temperature swings.',
      },
      {
        title: 'Planned around your home',
        body: 'We choose materials and access points based on your structure, budget, and the payoff each upgrade can actually deliver.',
      },
    ],
    applications: [
      { title: 'Attics', body: 'Seal bypasses, improve R-value, and stop heat loss at the top of the home.', image: sharedImages.attic },
      { title: 'Rim Joists', body: 'One of the leakiest areas in many homes, sealed tight with foam.', image: sharedImages.wall },
      { title: 'Additions', body: 'Bring bonus rooms and older additions up to the comfort of the rest of the house.', image: sharedImages.remodel },
    ],
    process: [
      { title: 'Inspect', body: 'We look for heat loss patterns, access points, ventilation concerns, and moisture risks.' },
      { title: 'Prioritize', body: 'You get a clear scope focused on the upgrades with the best comfort and efficiency return.' },
      { title: 'Install Cleanly', body: 'Our crew protects the work area, installs the right material, and leaves the space ready to use.' },
    ],
    faq: [
      {
        question: 'Do I need to open walls for retrofit insulation?',
        answer: 'Not always. Many improvements happen in attics, basements, crawl spaces, and rim joists. If wall access is needed, we explain the options before work begins.',
      },
      {
        question: 'Is retrofitting worth it before replacing HVAC?',
        answer: 'Often, yes. Reducing leakage and heat loss can make your existing system perform better and may change what size equipment you actually need.',
      },
    ],
    ctaTitle: 'Ready to fix the drafty rooms?',
    ctaBody: 'Tell us what feels uncomfortable and we will help you find the right retrofit plan.',
  },
  {
    slug: 'pole-barns',
    route: '/pole-barns',
    eyebrow: 'Shops & Outbuildings',
    title: 'Pole Barn',
    accent: 'Insulation',
    description:
      'Turn a cold metal or post-frame building into a usable, efficient shop, storage space, or work area year-round.',
    metaDescription:
      'Pole barn insulation in Dane County. Spray foam and fiberglass options for shops, garages, steel buildings, and post-frame buildings.',
    heroImage: sharedImages.barn,
    imageAlt: 'Insulated pole barn shop',
    stats: [
      { value: 'Year-Round', label: 'Usable shops and workspaces' },
      { value: 'Condensation', label: 'Control for metal buildings' },
      { value: 'Foam + Batts', label: 'Material plans by budget' },
      { value: 'Big Spaces', label: 'Crews equipped for large bays' },
    ],
    intro: {
      eyebrow: 'Built For Wisconsin Shops',
      title: 'Comfortable work space, not just storage',
      body: [
        'Pole barns and metal buildings lose heat quickly when insulation is treated like an afterthought. We build the insulation plan around the way you use the space: heated shop, equipment storage, hobby garage, kennel, or mixed-use building.',
        'Spray foam is often the right answer for roof decks, steel walls, and condensation control. Fiberglass can also be a smart option in framed cavities when the assembly is designed correctly.',
      ],
      bullets: [
        'Closed-cell foam for steel panels and roof decks',
        'Wall and ceiling insulation packages',
        'Condensation and air leakage control',
        'Direct pricing for owner-builders and contractors',
      ],
      image: sharedImages.install,
    },
    benefits: [
      { title: 'Controls condensation', body: 'Closed-cell foam helps stop warm interior air from hitting cold steel and dripping back into the building.' },
      { title: 'Holds heat longer', body: 'A tight envelope makes large open spaces easier and less expensive to heat.' },
      { title: 'Protects what you store', body: 'Better temperature and moisture control helps protect tools, vehicles, equipment, and materials.' },
      { title: 'Built for large areas', body: 'Our equipment and crews are set up for open spans, tall walls, and high-volume insulation work.' },
    ],
    applications: [
      { title: 'Heated Shops', body: 'Insulation packages for workshops, garages, and hobby buildings.', image: sharedImages.barn },
      { title: 'Equipment Storage', body: 'Protect farm equipment, trailers, tools, and seasonal gear.', image: sharedImages.install },
      { title: 'Steel Buildings', body: 'Foam directly to metal panels for air sealing and condensation control.', image: sharedImages.wall },
    ],
    process: [
      { title: 'Confirm Usage', body: 'We ask how the building will be heated, ventilated, and used before recommending materials.' },
      { title: 'Design The Assembly', body: 'Walls, roof decks, ceilings, and liner panels each get considered separately.' },
      { title: 'Spray Or Install', body: 'We coordinate around framing, electrical, and interior finishes so the insulation lands at the right stage.' },
    ],
    faq: [
      {
        question: 'Is spray foam best for pole barns?',
        answer: 'For many heated metal buildings, yes. It air seals, insulates, and helps control condensation in one step. Some projects still benefit from fiberglass in framed areas.',
      },
      {
        question: 'Can you insulate an existing pole barn?',
        answer: 'Yes. Existing buildings can often be upgraded, especially if wall and roof surfaces are accessible.',
      },
    ],
    ctaTitle: 'Make your pole barn usable all year.',
    ctaBody: 'Send us the size, photos, and how you plan to use it. We will help scope the right package.',
  },
  {
    slug: 'remodels',
    route: '/remodels',
    eyebrow: 'Renovations',
    title: 'Remodel',
    accent: 'Insulation',
    description:
      'Insulation upgrades timed with your remodel so walls, ceilings, and additions perform before they get closed back up.',
    metaDescription:
      'Insulation for remodels and renovations in Madison, WI. Spray foam and fiberglass installed during kitchen, basement, attic, and whole-home projects.',
    heroImage: sharedImages.remodel,
    imageAlt: 'Remodel insulation project',
    stats: [
      { value: 'Right Stage', label: 'Installed before drywall and finishes' },
      { value: 'Cleaner', label: 'Coordinated with remodel schedules' },
      { value: 'Comfort', label: 'Fixes rooms while walls are open' },
      { value: 'Local', label: 'Trusted by Dane County remodelers' },
    ],
    intro: {
      eyebrow: 'Before The Walls Close',
      title: 'Use the remodel window wisely',
      body: [
        'A remodel is the best time to fix insulation problems that would be expensive to reach later. Open walls, ceilings, rim joists, and additions give us a chance to air seal properly and install the right material without guessing.',
        'We work with homeowners, remodelers, and general contractors to keep the insulation phase clean, predictable, and ready for inspection or finish work.',
      ],
      bullets: [
        'Kitchen, bath, basement, and attic remodels',
        'Additions and converted living spaces',
        'Sound control between rooms and floors',
        'Coordination with framing, trades, and drywall',
      ],
      image: sharedImages.crew,
    },
    benefits: [
      { title: 'Fixes comfort at the source', body: 'Open assemblies let us seal gaps and cavities before finishes hide them again.' },
      { title: 'Cleaner project flow', body: 'We coordinate around the remodel schedule so insulation does not slow down the next trade.' },
      { title: 'Better sound control', body: 'Interior insulation can reduce noise transfer in bedrooms, offices, basements, and media rooms.' },
      { title: 'Protects the investment', body: 'New finishes deserve a wall system that performs behind the drywall.' },
    ],
    applications: [
      { title: 'Basement Finishing', body: 'Comfortable lower levels with foam, batts, or hybrid assemblies.', image: sharedImages.wall },
      { title: 'Additions', body: 'Efficient new rooms tied into older homes correctly.', image: sharedImages.remodel },
      { title: 'Interior Sound Control', body: 'Quiet bedrooms, offices, bathrooms, and shared walls.', image: sharedImages.fiberglass },
    ],
    process: [
      { title: 'Review Plans', body: 'We look at drawings, photos, or jobsite conditions to plan the right material.' },
      { title: 'Coordinate Timing', body: 'We schedule after rough-ins and before drywall or finishes.' },
      { title: 'Install And Clean Up', body: 'The crew completes the scope and leaves the space ready for the next stage.' },
    ],
    faq: [
      {
        question: 'When should insulation happen during a remodel?',
        answer: 'Usually after framing, rough electrical, plumbing, and mechanical work are complete, but before drywall or finish panels.',
      },
      {
        question: 'Can you help with soundproofing?',
        answer: 'Yes. We can recommend fiberglass, foam, or hybrid approaches depending on the wall or ceiling assembly and the level of sound reduction you want.',
      },
    ],
    ctaTitle: 'Remodeling soon? Plan insulation early.',
    ctaBody: 'Send the scope or photos and we will help time the insulation phase correctly.',
  },
  {
    slug: 'new-construction',
    route: '/new-construction',
    eyebrow: 'Build Right From Day One',
    title: 'New Construction',
    accent: 'Insulation',
    description:
      'High-performance insulation packages for new homes, additions, shops, and commercial spaces across Dane County.',
    metaDescription:
      'New construction insulation in Madison and Dane County. Spray foam, fiberglass, and hybrid insulation packages for efficient new builds.',
    heroImage: sharedImages.install,
    imageAlt: 'New construction insulation installation',
    stats: [
      { value: 'Plan-Based', label: 'Scope matched to assemblies' },
      { value: 'Inspection', label: 'Clean installs for code review' },
      { value: 'Hybrid', label: 'Foam and fiberglass options' },
      { value: 'Efficient', label: 'Comfort built into the shell' },
    ],
    intro: {
      eyebrow: 'Performance First',
      title: 'Build the envelope before you decorate it',
      body: [
        'New construction gives you the chance to get insulation right before comfort problems ever start. We help builders and owners choose the right mix of spray foam, fiberglass, and air sealing for the building type and budget.',
        'From custom homes to commercial interiors and post-frame buildings, our focus is clean coverage, practical scheduling, and assemblies that perform after move-in.',
      ],
      bullets: [
        'Walls, attics, roof decks, rim joists, and ceilings',
        'Hybrid assemblies for performance and budget balance',
        'Builder-friendly scheduling and documentation',
        'Residential and light commercial projects',
      ],
      image: sharedImages.attic,
    },
    benefits: [
      { title: 'Fewer comfort complaints', body: 'A tighter envelope prevents many hot room, cold room, and draft issues before occupancy.' },
      { title: 'Better HVAC performance', body: 'Air sealing and insulation help equipment operate closer to its intended design.' },
      { title: 'Cleaner inspections', body: 'Thoughtful installs make cavity coverage and air sealing details easier to verify.' },
      { title: 'Flexible material choices', body: 'Not every cavity needs the same product. We match the material to the assembly.' },
    ],
    applications: [
      { title: 'Custom Homes', body: 'High-comfort insulation packages for efficient living spaces.', image: sharedImages.remodel },
      { title: 'Additions', body: 'New square footage insulated right before finishes go in.', image: sharedImages.install },
      { title: 'Commercial Shells', body: 'Warehouses, offices, and shop spaces sealed to practical specs.', image: sharedImages.barn },
    ],
    process: [
      { title: 'Plan Review', body: 'We review plans, cavities, roof details, and performance goals.' },
      { title: 'Material Selection', body: 'You get clear options for foam, fiberglass, or hybrid systems.' },
      { title: 'Jobsite Execution', body: 'We arrive at the correct stage and complete the install cleanly for the next trade.' },
    ],
    faq: [
      {
        question: 'Do you work directly with builders?',
        answer: 'Yes. We regularly coordinate with contractors, remodelers, and owner-builders throughout Dane County.',
      },
      {
        question: 'Is a hybrid insulation package a good idea?',
        answer: 'Often. Foam can be used where air sealing matters most, while fiberglass can control cost in standard framed cavities.',
      },
    ],
    ctaTitle: 'Building new? Lock in performance early.',
    ctaBody: 'Share your plans or square footage and we will help build a clean insulation scope.',
  },
  {
    slug: 'insulation-removal',
    route: '/insulation-removal',
    eyebrow: 'Cleanout & Prep',
    title: 'Insulation',
    accent: 'Removal',
    description:
      'Remove old, damaged, contaminated, or underperforming insulation so the space can be sealed and rebuilt correctly.',
    metaDescription:
      'Insulation removal services in Madison and Dane County. Clean out old attic or cavity insulation before air sealing and new insulation.',
    heroImage: sharedImages.crew,
    imageAlt: 'Insulation removal preparation',
    stats: [
      { value: 'Clean Slate', label: 'Old material removed before upgrades' },
      { value: 'Attics', label: 'Common removal and replacement area' },
      { value: 'Prep Work', label: 'Ready for air sealing and new insulation' },
      { value: 'Careful', label: 'Containment-minded jobsite process' },
    ],
    intro: {
      eyebrow: 'Why Removal Matters',
      title: 'Sometimes the best upgrade starts with taking material out',
      body: [
        'Old insulation can be compressed, wet, contaminated, poorly installed, or simply not worth building over. Removal gives us access to air leaks and problem areas that would otherwise stay hidden.',
        'Once the space is clear, we can air seal properly, correct details, and install new insulation that performs the way it should.',
      ],
      bullets: [
        'Attic insulation cleanouts',
        'Wet, damaged, or contaminated material removal',
        'Preparation before spray foam or fiberglass upgrades',
        'Access for air sealing and ventilation corrections',
      ],
      image: sharedImages.attic,
    },
    benefits: [
      { title: 'Finds hidden issues', body: 'Removal can reveal air leaks, moisture stains, pest paths, and gaps buried under old material.' },
      { title: 'Improves new install quality', body: 'New insulation performs better when it is not placed over uneven or damaged old material.' },
      { title: 'Helps indoor air quality', body: 'Getting rid of dusty or contaminated insulation can reduce what gets stirred up during future work.' },
      { title: 'Sets up air sealing', body: 'A clear attic or cavity lets us seal the actual leaks before adding R-value.' },
    ],
    applications: [
      { title: 'Attic Cleanouts', body: 'Remove old blown-in or batt insulation before sealing and replacement.', image: sharedImages.attic },
      { title: 'Water Damage', body: 'Clear wet or compromised material that no longer performs.', image: sharedImages.wall },
      { title: 'Pre-Retrofit Prep', body: 'Create access for a better insulation upgrade.', image: sharedImages.crew },
    ],
    process: [
      { title: 'Assess Condition', body: 'We identify what needs to come out and why.' },
      { title: 'Remove Carefully', body: 'The crew removes old material with attention to containment and cleanup.' },
      { title: 'Prepare For Upgrade', body: 'Once clear, the space is ready for air sealing and new insulation.' },
    ],
    faq: [
      {
        question: 'Do I always need removal before new insulation?',
        answer: 'No. If existing material is dry, clean, and reasonably even, adding over it may be fine. Removal is recommended when old material blocks proper air sealing or is damaged.',
      },
      {
        question: 'Can removal be paired with new insulation?',
        answer: 'Yes. Many projects combine cleanout, air sealing, and a new insulation system in one planned scope.',
      },
    ],
    ctaTitle: 'Need old insulation out first?',
    ctaBody: 'We can inspect the space and tell you whether removal is worth it before replacement.',
  },
  {
    slug: 'fiberglass',
    route: '/fiberglass',
    eyebrow: 'Efficient Coverage',
    title: 'Fiberglass',
    accent: 'Insulation',
    description:
      'A practical, cost-effective insulation option for attics, walls, ceilings, and sound control when installed with care.',
    metaDescription:
      'Fiberglass insulation installation in Madison and Dane County. Batt and blown-in insulation for attics, walls, remodels, and new construction.',
    heroImage: sharedImages.fiberglass,
    imageAlt: 'Fiberglass insulation installed in framing',
    stats: [
      { value: 'Cost-Smart', label: 'Strong value for large areas' },
      { value: 'Batts + Blown', label: 'Options by cavity and access' },
      { value: 'Sound', label: 'Great interior noise control' },
      { value: 'Clean Fit', label: 'Installed to avoid gaps and compression' },
    ],
    intro: {
      eyebrow: 'Classic Material, Better Install',
      title: 'Fiberglass still works when it is installed right',
      body: [
        'Fiberglass is one of the most practical insulation materials available, especially for attics, framed walls, ceilings, and sound control. The difference is workmanship: gaps, compression, and sloppy cuts can erase the value fast.',
        'We install fiberglass with attention to fit, coverage, air movement, and the surrounding assembly. It can stand alone or pair with spray foam in a hybrid system.',
      ],
      bullets: [
        'Batt insulation for framed cavities',
        'Blown-in attic insulation',
        'Interior sound control',
        'Hybrid systems with targeted spray foam',
      ],
      image: sharedImages.wall,
    },
    benefits: [
      { title: 'Budget-friendly coverage', body: 'Fiberglass can cover large areas efficiently while still delivering strong thermal value.' },
      { title: 'Great for sound control', body: 'Interior walls and ceilings benefit from fiberglass density and cavity fill.' },
      { title: 'Flexible installation', body: 'Batts and blown-in products work across attics, walls, floors, and remodel cavities.' },
      { title: 'Pairs well with foam', body: 'Use foam for air sealing and fiberglass for economical R-value where it makes sense.' },
    ],
    applications: [
      { title: 'Attic Top-Offs', body: 'Add blown-in depth where existing insulation is low but clean.', image: sharedImages.attic },
      { title: 'Framed Walls', body: 'Batt installs for new builds, remodels, and additions.', image: sharedImages.fiberglass },
      { title: 'Interior Acoustics', body: 'Reduce sound transfer in bedrooms, offices, and basements.', image: sharedImages.remodel },
    ],
    process: [
      { title: 'Measure The Cavity', body: 'We match product type and thickness to the space and performance goal.' },
      { title: 'Prep The Area', body: 'We look for air sealing needs, access, and obstructions before installing.' },
      { title: 'Install With Fit', body: 'Material is cut, placed, or blown to avoid voids, compression, and uneven coverage.' },
    ],
    faq: [
      {
        question: 'Is fiberglass better than spray foam?',
        answer: 'It depends on the goal. Spray foam is better for air sealing and moisture control. Fiberglass is often better for cost-effective coverage and interior sound control.',
      },
      {
        question: 'Can fiberglass be used in an attic?',
        answer: 'Yes. Blown-in fiberglass is a common attic solution when the space is clean, ventilated correctly, and air sealed where needed.',
      },
    ],
    ctaTitle: 'Need a smart insulation option?',
    ctaBody: 'We will help you decide where fiberglass makes sense and where foam is worth the upgrade.',
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((page) => page.slug === slug);
}
