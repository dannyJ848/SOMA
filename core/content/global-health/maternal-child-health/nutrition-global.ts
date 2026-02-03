/**
 * Global Nutrition
 *
 * Educational content about nutrition and malnutrition worldwide,
 * including undernutrition, micronutrient deficiencies, and overnutrition.
 */

import { EducationalContent } from '../../types';

export const NUTRITION_GLOBAL: EducationalContent = {
  id: 'nutrition-global',
  type: 'concept',
  name: 'Global Nutrition',
  alternateNames: ['Worldwide Nutrition', 'Global Malnutrition', 'Nutrition Security'],

  levels: {
    1: {
      level: 1,
      summary: 'Global nutrition is about making sure everyone in the world has enough healthy food to eat. Sadly, many people don\'t get enough food or the right kind of food, which makes them sick.',
      explanation: `Good nutrition means eating the right amount of healthy foods that your body needs. Around the world, nutrition is a big problem in two very different ways.

**Two Types of Nutrition Problems:**

**1. Not Enough Food (Undernutrition):**
- Millions of children don't get enough to eat
- They become very thin and weak
- They don't grow as tall as they should
- Their bodies can't fight off diseases

**2. Too Much Unhealthy Food (Overnutrition):**
- Some people eat too much, especially junk food
- This leads to being overweight or obese
- It causes diseases like diabetes and heart problems

**Why Nutrition Matters:**

**For Children:**
- Brains need good food to develop properly
- Malnourished children have trouble learning
- Poor nutrition in babies can affect them their whole lives
- Good food helps fight off infections

**For Everyone:**
- Food gives us energy to work and play
- Nutrients build strong bones and muscles
- Vitamins keep our bodies working properly
- Good nutrition helps prevent many diseases

**Important Nutrients People Often Lack:**

**Iron:**
- Helps blood carry oxygen
- Without it, people feel tired and weak
- Many pregnant women and children don't get enough

**Vitamin A:**
- Keeps eyes healthy
- Helps fight infections
- Children can go blind without enough

**Iodine:**
- Helps the brain develop
- Found in seafood and iodized salt
- Lack of it can cause learning problems

**What Helps:**
- Growing more nutritious foods
- Fortifying foods (adding vitamins to flour, rice, salt)
- Teaching people about healthy eating
- School feeding programs
- Breastfeeding babies`,
      keyTerms: [
        { term: 'nutrition', definition: 'Getting the right foods and nutrients your body needs to be healthy' },
        { term: 'malnutrition', definition: 'When someone doesn\'t get the right amount or type of food they need' },
        { term: 'fortification', definition: 'Adding vitamins and minerals to foods to make them healthier' },
      ],
      analogies: [
        'Food is like fuel for a car - without the right fuel, the car won\'t run properly, and without the right food, our bodies can\'t work properly.',
        'Vitamins and minerals are like tiny helpers in your body - each one has a special job to do.',
      ],
      examples: [
        'Adding iodine to salt has helped prevent millions of children from having learning problems.',
        'A child who doesn\'t get enough food in the first two years of life may never reach their full height or brain potential.',
      ],
    },
    2: {
      level: 2,
      summary: 'Global nutrition encompasses undernutrition, micronutrient deficiencies, and overnutrition. Approximately 45 million children under 5 suffer from wasting, while 149 million are stunted. Simultaneously, obesity is rising in all countries, creating a "double burden" of malnutrition.',
      explanation: `Nutrition is fundamental to health, development, and human potential. Malnutrition in all its forms remains a leading cause of poor health globally.

**Forms of Malnutrition:**

**1. Undernutrition:**

*Wasting (Acute Malnutrition):*
- Low weight-for-height
- 45 million children affected
- Results from recent food shortage or illness
- Increases mortality risk 11-fold

*Stunting (Chronic Malnutrition):*
- Low height-for-age
- 149 million children affected
- Results from prolonged inadequate nutrition
- Affects cognitive development permanently

*Underweight:*
- Low weight-for-age
- Combines wasting and stunting effects

**2. Micronutrient Deficiencies ("Hidden Hunger"):**

| Deficiency | People Affected | Consequences |
|------------|----------------|--------------|
| Iron | 2 billion | Anemia, fatigue, impaired development |
| Vitamin A | 250 million children | Blindness, increased infection risk |
| Iodine | 2 billion at risk | Intellectual impairment, goiter |
| Zinc | 1.2 billion | Growth problems, weak immunity |

**3. Overnutrition:**

*Overweight/Obesity:*
- 39 million children under 5 overweight
- 2 billion adults overweight/obese
- Rising in all countries, including low-income
- Leads to NCDs: diabetes, heart disease, cancer

**The Double Burden:**
Many countries now face both undernutrition and overnutrition:
- Same community or even same household
- Mother may be overweight, child stunted
- Requires dual strategies

**Critical Periods:**

**First 1,000 Days:**
From conception to age 2:
- Rapid brain and body development
- Damage during this period often irreversible
- Window of opportunity for intervention

**Key Interventions:**

**Nutrition-Specific:**
- Breastfeeding promotion (exclusive for 6 months)
- Complementary feeding education
- Micronutrient supplementation
- Treatment of acute malnutrition

**Nutrition-Sensitive:**
- Agriculture and food systems
- Social protection programs
- Water, sanitation, hygiene (WASH)
- Women's education and empowerment

**Global Nutrition Targets (2025):**
- 40% reduction in stunting
- 50% reduction in anemia in reproductive-age women
- 30% reduction in low birth weight
- No increase in childhood overweight
- Increase exclusive breastfeeding to 50%
- Reduce wasting to <5%`,
      keyTerms: [
        { term: 'wasting', definition: 'Acute malnutrition shown by low weight-for-height, often from recent illness or food shortage', pronunciation: 'WAY-sting' },
        { term: 'stunting', definition: 'Chronic malnutrition shown by low height-for-age, often irreversible', pronunciation: 'STUN-ting' },
        { term: 'double burden', definition: 'When a population suffers from both undernutrition and overnutrition' },
        { term: 'hidden hunger', definition: 'Micronutrient deficiencies that may not be visible but harm health' },
      ],
      analogies: [
        'The first 1,000 days are like building the foundation of a house - problems at this stage affect everything built on top.',
      ],
    },
    3: {
      level: 3,
      summary: 'Global nutrition involves complex interactions between food systems, socioeconomic factors, and biological processes. The burden includes protein-energy malnutrition, micronutrient deficiencies, and diet-related NCDs, with the first 1,000 days representing a critical intervention window for long-term outcomes.',
      explanation: `Nutrition science has evolved to understand the multifactorial determinants of nutritional status and the interconnections between different forms of malnutrition.

**Conceptual Framework (UNICEF):**

**Immediate Causes:**
- Inadequate dietary intake
- Disease

**Underlying Causes:**
- Household food insecurity
- Inadequate care for mothers and children
- Unhealthy household environment and inadequate health services

**Basic Causes:**
- Poverty
- Inequality
- Governance failures
- Social norms

**Anthropometric Assessment:**

**Z-scores (Standard Deviations from median):**
| Indicator | Measure | Threshold for Malnutrition |
|-----------|---------|---------------------------|
| WAZ | Weight-for-age | <-2 SD (underweight) |
| HAZ | Height-for-age | <-2 SD (stunted) |
| WHZ | Weight-for-height | <-2 SD (wasted) |
| MUAC | Mid-upper arm circumference | <115mm (severe) |

**Severity Classification:**
- Moderate: -3 SD to <-2 SD
- Severe: <-3 SD

**Pathophysiology of Undernutrition:**

**Metabolic Adaptations:**
- Reduced basal metabolic rate
- Decreased protein synthesis
- Impaired immune function
- Hormonal changes (reduced growth hormone, IGF-1)

**Organ-Specific Effects:**
| System | Effects |
|--------|---------|
| Brain | Reduced myelination, neuronal development |
| Gut | Villous atrophy, impaired absorption |
| Immune | T-cell dysfunction, barrier impairment |
| Muscle | Wasting, weakness |
| Cardiac | Reduced mass, output |

**Refeeding Syndrome:**
Risk in severe malnutrition:
- Hypophosphatemia
- Cardiac arrhythmias
- Fluid shifts
- Requires careful nutritional rehabilitation

**Micronutrient Deficiency Pathophysiology:**

**Iron:**
- Component of hemoglobin and myoglobin
- Required for cellular respiration
- Deficiency causes microcytic hypochromic anemia

**Vitamin A:**
- Essential for visual cycle (rhodopsin)
- Epithelial integrity
- Immune function
- Deficiency: Xerophthalmia, Bitot's spots, night blindness

**Iodine:**
- Required for thyroid hormone synthesis
- Deficiency in pregnancy causes cretinism
- Endemic goiter in iodine-deficient regions

**Therapeutic Approaches:**

**Severe Acute Malnutrition (SAM):**

*Community-Based Management (CMAM):*
- Ready-to-use therapeutic food (RUTF)
- Outpatient treatment for uncomplicated cases
- Weekly follow-up
- 80%+ recovery rates

*Inpatient Care:*
- For complicated SAM (infection, shock, no appetite)
- Stabilization phase (F-75 formula)
- Rehabilitation phase (F-100, RUTF)
- Careful refeeding protocol

**Micronutrient Supplementation:**

| Intervention | Target | Schedule |
|-------------|--------|----------|
| Vitamin A | Children 6-59 months | Every 6 months |
| Iron-folic acid | Pregnant women | Daily through pregnancy |
| Multiple micronutrient powders | Children 6-23 months | Daily |
| Zinc | Diarrhea treatment | 10-14 days |

**Fortification Programs:**
- Salt iodization (universal)
- Flour fortification (iron, folic acid)
- Oil fortification (vitamin A)
- Rice fortification (multiple)`,
      keyTerms: [
        { term: 'MUAC', definition: 'Mid-Upper Arm Circumference - simple measurement for screening acute malnutrition', pronunciation: 'mew-AK' },
        { term: 'RUTF', definition: 'Ready-to-Use Therapeutic Food - energy-dense paste for treating severe acute malnutrition' },
        { term: 'refeeding syndrome', definition: 'Metabolic complications from nutritional restoration in malnourished individuals' },
        { term: 'CMAM', definition: 'Community-based Management of Acute Malnutrition - outpatient treatment approach' },
      ],
      clinicalNotes: 'Assess nutritional status at every contact using anthropometry. Screen for micronutrient deficiencies. Follow protocols for SAM treatment including refeeding precautions. Integrate nutrition counseling with clinical care.',
    },
    4: {
      level: 4,
      summary: 'Nutrition operates within complex food systems shaped by political economy, environmental factors, and sociocultural determinants. Evidence-based interventions span nutrition-specific and nutrition-sensitive domains, with growing recognition of the triple burden encompassing undernutrition, micronutrient deficiencies, and diet-related NCDs.',
      explanation: `**Food Systems Perspective:**

**Food System Components:**
| Component | Elements |
|-----------|----------|
| Food supply chains | Production, processing, distribution, retail |
| Food environments | Availability, affordability, promotion, quality |
| Consumer behavior | Purchasing, preparation, consumption |
| Outcomes | Diets, nutrition, health |

**Drivers of Food Systems:**
- Climate and environment
- Technology and infrastructure
- Political economy
- Sociocultural factors
- Demographics

**Triple Burden Framework:**

The nutrition transition manifests as:
1. Persistent undernutrition
2. Widespread micronutrient deficiencies
3. Rising overnutrition and NCDs

**Commercial Determinants:**
- Ultra-processed food marketing
- Sugar-sweetened beverage promotion
- Industry influence on policy
- Food environment transformation

**Advanced Nutritional Science:**

**Gut Microbiome:**
- Malnutrition alters microbiome composition
- Microbiome affects nutrient absorption
- Environmental enteric dysfunction (EED)
- Therapeutic potential of microbiome interventions

**Nutrigenomics:**
- Genetic variation in nutrient metabolism
- Single nucleotide polymorphisms affecting response
- Personalized nutrition potential
- Epigenetic effects of early nutrition

**Growth Faltering:**
- Complex etiology (infection, diet, environment)
- Aflatoxin exposure contributing
- Subclinical inflammation
- Multi-sectoral determinants

**Implementation Evidence:**

**Nutrition-Specific Interventions:**
| Intervention | Effect Size | Quality of Evidence |
|-------------|-------------|---------------------|
| Breastfeeding counseling | +43% exclusive BF | High |
| Complementary feeding education | -0.25 HAZ | Moderate |
| Vitamin A supplementation | -24% mortality | High |
| Zinc supplementation | -18% diarrhea | High |
| CMAM for SAM | 80%+ recovery | High |

**Nutrition-Sensitive Interventions:**
| Sector | Intervention | Evidence |
|--------|-------------|----------|
| Agriculture | Biofortification, homestead production | Moderate |
| Social protection | Cash transfers, food assistance | Moderate |
| WASH | Sanitation, water treatment | Limited for nutrition |
| Health | Family planning, malaria prevention | Moderate |
| Education | Girls' education, nutrition education | Strong ecological |

**Programmatic Approaches:**

**Scaling Up Nutrition (SUN) Movement:**
- Multi-stakeholder platform
- Country-led approach
- 65 countries participating
- Tracking progress on targets

**Program Platforms:**
- Health system integration (ANC, immunization)
- Community-based approaches
- Social safety nets
- Agricultural extension

**Research Frontiers:**

**Emerging Interventions:**
- Small-quantity lipid-based nutrient supplements (SQ-LNS)
- Egg supplementation
- Psychosocial stimulation integration
- Gut microbiome therapies

**Implementation Research:**
- Context adaptation
- Scale-up strategies
- Sustainability mechanisms
- Cost-effectiveness

**Overnutrition and NCDs:**

**Dietary Risk Factors (GBD):**
- High sodium intake
- Low whole grain intake
- Low fruit intake
- Low nuts/seeds intake
- Low vegetables
- High processed meat

**Policy Approaches:**
- Sugar-sweetened beverage taxes
- Front-of-pack labeling
- Marketing restrictions
- Reformulation incentives
- School food standards`,
      keyTerms: [
        { term: 'environmental enteric dysfunction', definition: 'Subclinical intestinal inflammation from repeated enteric infections, impairing nutrient absorption' },
        { term: 'SQ-LNS', definition: 'Small-quantity lipid-based nutrient supplements - fortified spreads for young children' },
        { term: 'SUN Movement', definition: 'Scaling Up Nutrition - global movement uniting stakeholders in nutrition' },
        { term: 'biofortification', definition: 'Breeding crops to increase nutrient content' },
      ],
      clinicalNotes: 'Consider environmental enteric dysfunction in persistent growth faltering. Assess dietary diversity. Integrate nutrition into chronic disease management. Advocate for policy changes affecting food environments.',
    },
    5: {
      level: 5,
      summary: 'Nutrition represents a nexus of food systems, political economy, environmental sustainability, and human rights, requiring transformative approaches that address root causes while implementing evidence-based interventions. Contemporary frameworks emphasize sustainable food systems, equity, and addressing commercial determinants.',
      explanation: `**Theoretical Frameworks:**

**Political Economy of Nutrition:**
- Power dynamics in food systems
- Trade and agriculture policies
- Corporate capture of policy
- Fiscal policies for nutrition

**Sustainable Development:**
- Food-health-environment nexus
- Planetary boundaries
- Sustainable diets concept
- Climate-nutrition interactions

**Human Rights:**
- Right to food
- Right to adequate nutrition
- State obligations
- Accountability mechanisms

**Systems Analysis:**

**Food System Transformation:**
| Lever | Mechanism | Example |
|-------|-----------|---------|
| Governance | Policy coherence | Multi-sectoral planning |
| Markets | Price incentives | Taxes, subsidies |
| Environment | Regulation | Marketing restrictions |
| Behavior | Social norms | Communication campaigns |

**Complex Systems Thinking:**
- Feedback loops
- Non-linear dynamics
- Unintended consequences
- Leverage points

**Advanced Science:**

**Developmental Origins:**
- DOHaD framework for nutrition
- Intergenerational transmission
- Epigenetic mechanisms
- Critical windows

**Precision Nutrition:**
- Individual variation in response
- Microbiome mediation
- Genetic susceptibility
- Biomarker-guided therapy

**Research Methods:**
- Large-scale efficacy trials
- Implementation science
- Systems modeling
- Mixed methods

**Global Governance:**

**Normative Framework:**
- WHO guidelines and recommendations
- Codex Alimentarius standards
- International Code on Marketing of Breastmilk Substitutes
- Global nutrition targets

**Financing:**
- Nutrition for Growth (N4G) commitments
- Power of Nutrition
- Domestic resource mobilization
- Official development assistance

**Accountability:**
- Global Nutrition Report
- Countdown to 2030
- SUN Movement monitoring
- Civil society monitoring

**Critical Perspectives:**

**Commercial Determinants:**
- Ultra-processed food industry practices
- Conflicts of interest
- Public-private partnerships tensions
- Regulatory capture

**Equity:**
- Intersecting inequalities
- Gender and nutrition
- Indigenous food sovereignty
- Migration and nutrition

**Decolonization:**
- Local food systems knowledge
- Cultural appropriateness
- Power in research
- Community-led approaches

**Emerging Challenges:**

**Climate Change:**
- Crop yields and nutrient content
- Food price volatility
- Supply chain disruptions
- Migration and food security

**COVID-19 Impact:**
- Food system disruptions
- Increased food insecurity
- Health service disruptions
- Economic impacts on households

**Transformation Pathways:**

**Food System Change:**
- Agroecology and diversification
- Local food system strengthening
- Reduction in food loss and waste
- Shift toward sustainable diets

**Policy Innovation:**
- Double-duty actions (addressing multiple forms of malnutrition)
- Fiscal policies for nutrition
- Regulatory approaches
- Social protection expansion

**Research Priorities:**

**Key Questions:**
1. How to achieve behavior change at scale?
2. What enables sustainable food systems?
3. How to address commercial determinants effectively?
4. What integrated approaches work best?
5. How to measure and track progress?

**Methods:**
- Randomized trials at scale
- Natural experiments
- Systems modeling
- Implementation research
- Community-based participatory research`,
      keyTerms: [
        { term: 'double-duty actions', definition: 'Interventions addressing multiple forms of malnutrition simultaneously' },
        { term: 'planetary boundaries', definition: 'Earth system thresholds within which humanity can safely operate' },
        { term: 'commercial determinants of health', definition: 'Private sector activities affecting health including marketing, lobbying, and supply chains' },
        { term: 'sustainable diets', definition: 'Dietary patterns with low environmental impact that contribute to nutrition security' },
      ],
      clinicalNotes: 'Integrate clinical nutrition with food systems perspective. Advocate for policy change. Address social determinants affecting patients\' nutrition. Consider environmental sustainability of dietary recommendations. Engage with nutrition research.',
    },
  },

  media: [
    {
      id: 'malnutrition-forms',
      type: 'diagram',
      filename: 'malnutrition-forms-diagram.svg',
      title: 'Forms of Malnutrition',
      description: 'Visual overview of undernutrition, micronutrient deficiencies, and overnutrition',
    },
    {
      id: 'stunting-map',
      type: 'diagram',
      filename: 'global-stunting-prevalence.svg',
      title: 'Global Stunting Prevalence',
      description: 'World map showing rates of childhood stunting by country',
    },
  ],

  citations: [
    {
      id: 'lancet-nutrition-series',
      type: 'article',
      title: 'Maternal and Child Nutrition Lancet Series',
      source: 'The Lancet',
      license: 'Open Access',
    },
    {
      id: 'unicef-nutrition-data',
      type: 'website',
      title: 'UNICEF Data: Nutrition',
      source: 'UNICEF',
      url: 'https://data.unicef.org/topic/nutrition/',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'child-health-global', targetType: 'topic', relationship: 'related', label: 'Child Health Global' },
    { targetId: 'maternal-health-global', targetType: 'topic', relationship: 'related', label: 'Maternal Health Global' },
    { targetId: 'poverty-and-health', targetType: 'topic', relationship: 'related', label: 'Poverty and Health' },
  ],

  tags: {
    systems: ['public-health', 'digestive'],
    topics: ['global-health', 'nutrition', 'food-security'],
    keywords: ['malnutrition', 'stunting', 'wasting', 'micronutrients', 'food systems'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
