export type FaqItem = {
  question: string;
  answer: string[];
  list?: string[];
  afterList?: string;
};

export const faqPageIntro =
  'Answers to common questions about closed-cell spray foam insulation from The Sprayfoam Works.';

export const faqItems: FaqItem[] = [
  {
    question: 'What Makes Spray Foam Different from Other Insulation?',
    answer: [
      'Spray foam works because it doesn’t just insulate - it seals. It expands to fill cracks, gaps, and hard-to-reach spaces, creating a tight barrier that fiberglass and cellulose can’t match. This air-sealing is one of the key reasons many property owners experience improved comfort and lower energy costs.',
    ],
  },
  {
    question: 'Where Can Spray Foam be Used?',
    answer: ['Spray foam is ideal for:'],
    list: [
      'Homes (new builds and remodels)',
      'Pole barns and workshops',
      'Commercial buildings',
      'Metal buildings',
      'Agricultural structures',
      'Garages and outbuildings',
      'Crawl spaces and basements',
      'Attics and roof decks',
    ],
    afterList:
      'If comfort, moisture control, energy efficiency, or building performance are important, spray foam may be an excellent insulation solution.',
  },
  {
    question: 'Why Does The Sprayfoam Works Only Use Closed-Cell Insulation?',
    answer: [
      'We use closed-cell spray foam because it provides exceptional insulation, air sealing, moisture resistance, and structural strength. When properly installed as part of a well-designed building system, it helps improve energy efficiency, comfort, and building durability.',
      'Bottom line: Closed-cell spray foam offers the best combination of insulation, air sealing, moisture protection, and structural strength, helping our customers save energy and protect their investment for years to come.',
    ],
  },
  {
    question: 'How Much Can Spray Foam Reduce My Heating and Cooling Costs?',
    answer: [
      'Spray foam is designed to improve energy efficiency by reducing air leakage and providing high-performance insulation. While many customers report lower heating and cooling costs, actual results vary from building to building.',
    ],
  },
  {
    question: 'Is Spray Foam Good for Wisconsin’s Climate?',
    answer: [
      'Yes. Spray foam performs exceptionally well in hot, humid summers and long, cold winters. It reduces heat loss, controls moisture, and keeps indoor temperatures more stable year-round.',
    ],
  },
  {
    question: 'Is Spray Foam Safe for Barns, Stables, and Agricultural Buildings?',
    answer: [
      'Yes. Spray foam is widely used in agricultural buildings because it helps maintain steadier temperatures, reduces drafts, and minimizes moisture and condensation - all of which support healthier, more comfortable environments for livestock and poultry. It also protects equipment, feed, and building materials from moisture damage.',
    ],
  },
  {
    question: 'Does Spray Foam Help with Moisture or Condensation Issues?',
    answer: [
      'Yes. Closed-cell spray foam acts as a moisture barrier, helping prevent condensation, mold, and mildew. This is especially important in pole barns, metal buildings, and agricultural structures.',
    ],
  },
  {
    question: 'How Long Does Spray Foam Installation Take?',
    answer: [
      'Most residential projects can be completed in one to two days, while larger commercial, agricultural, and new construction projects may take longer. Project timelines depend on the size, complexity, and accessibility of the building.',
    ],
  },
  {
    question: 'How Long Does Spray Foam Insulation Last?',
    answer: [
      "Closed-cell spray foam is extremely durable. It doesn't sag, settle, or lose its insulating properties like some traditional insulation materials. When properly installed and protected within a well-maintained building, it can provide effective performance for 30 years or more.",
    ],
  },
  {
    question: 'Can Spray Foam Strengthen My Building?',
    answer: [
      'Yes. Closed-cell spray foam adds rigidity to walls and roofs, improving structural strength and wind resistance - a major benefit for large agricultural or commercial buildings.',
    ],
  },
  {
    question: 'Is Spray Foam Worth the Investment?',
    answer: [
      'Many homeowners, builders, and farmers choose spray foam for its energy efficiency, improved comfort, moisture control, and long-term durability. It’s one of the few upgrades that improves performance and lowers costs for decades.',
    ],
  },
];

export const faqEnergyTips = {
  title: 'Need More Energy-saving Tips?',
  body: 'The Federal Energy Management Program (FEMP) offers checklists to help people conserve energy in their homes and businesses. You can also find low-cost tips on how to save energy and money on the U.S. Department of Energy’s Energy Saver website.',
  links: [
    {
      label: 'Federal Energy Management Program',
      href: 'https://www.energy.gov/femp/federal-energy-management-program',
    },
    {
      label: 'Energy Saver',
      href: 'https://www.energy.gov/energysaver/energy-saver',
    },
  ],
};
