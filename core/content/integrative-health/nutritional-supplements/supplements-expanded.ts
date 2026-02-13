import { EducationalContent } from '../../types';

export const supplementsExpanded: EducationalContent = {
  id: 'supplements-expanded',
  type: 'topic',
  name: 'Nutritional Supplements Guide',
  alternateNames: ['Dietary Supplements', 'Vitamins and Minerals', 'Nutritional Supplements'],
  levels: {
    1: {
      level: 1,
      summary: 'Dietary supplements are products intended to supplement the diet, containing one or more dietary ingredients including vitamins, minerals, herbs, amino acids, and other substances. They complement, not replace, a healthy diet.',
      explanation: `What Are Supplements:
Dietary supplements are products intended to supplement the diet, containing one or more dietary ingredients including vitamins, minerals, herbs, amino acids, and other substances.
Supplements are not intended to treat, diagnose, cure, or prevent disease
They complement, not replace, a healthy diet
Quality varies significantly between brands
Regulation differs from pharmaceutical drugs

Supplement Regulation:
Understanding the regulatory landscape.
DSHEA Act of 1994 governs supplements in the US
FDA doesn't approve supplements for safety/efficacy before marketing
Manufacturers responsible for safety and label accuracy
Third-party testing provides quality assurance

Who Needs Supplements:
Identifying who may benefit from supplementation.
Pregnant and breastfeeding women have specific needs
Older adults may need B12, calcium, and vitamin D
Restricted diets may require supplementation
Certain medical conditions increase requirements
Geographic factors affect some nutrient needs (e.g., vitamin D)

Supplement Forms and Bioavailability:
Not all supplements are created equal.
Different forms of nutrients have different absorption rates
Magnesium glycinate better absorbed than oxide
Vitamin D3 (cholecalciferol) more effective than D2
Some nutrients require co-factors for optimal absorption`,
      keyTerms: [
        { term: 'DSHEA', definition: 'Dietary Supplement Health and Education Act of 1994 - governs supplements in the US' },
        { term: 'bioavailability', definition: 'Proportion of a nutrient that is absorbed and available for use' },
        { term: 'RDA', definition: 'Recommended Dietary Allowance - average daily intake sufficient for most people' },
      ],
      analogies: [
        'Supplements are like insurance policies for potential nutrient gaps.',
      ],
      examples: [
        'A pregnant woman taking folic acid to prevent birth defects',
        'An elderly person taking vitamin B12 supplements',
        'Someone in northern climates taking vitamin D in winter',
      ],
      patientCounselingPoints: [
        'Consult healthcare provider before starting supplements',
        'Research brands for third-party testing (USP, NSF, ConsumerLab)',
        'Start with one supplement at a time to assess effects',
        'Blood testing can identify specific deficiencies',
      ],
    },
    2: {
      level: 2,
      summary: 'Essential vitamins include Vitamin D (sunshine vitamin), B Complex (energy vitamins), Vitamin C (antioxidant), Vitamin A (vision/immune), Vitamin E (antioxidant), and Vitamin K (calcium regulation/blood clotting).',
      explanation: `Vitamin D:
The sunshine vitamin with widespread health implications.
Deficiency affects over 40% of US population
Essential for bone health, immune function, and mood
Difficult to obtain adequate amounts from food alone
Optimal levels may be higher than standard lab ranges

B Complex Vitamins:
The energy and nervous system vitamins.
B12 deficiency common in vegetarians, older adults
Folate critical before and during pregnancy
B6 involved in neurotransmitter synthesis
B vitamins work synergistically

Vitamin C:
Antioxidant and immune support.
Essential for collagen production and wound healing
Potent antioxidant supporting immune function
High doses may reduce duration of colds
Bioavailability decreases with very high single doses

Vitamin A:
Vision, immune, and skin health.
Retinol (preformed A) from animal sources
Beta-carotene (provitamin A) from plant sources
Excess preformed vitamin A can be toxic
Beta-carotene conversion varies by genetics

Vitamin E:
Fat-soluble antioxidant.
Actually a family of compounds (tocopherols and tocotrienols)
Most supplements only contain alpha-tocopherol
Mixed tocopherols may be more beneficial
High doses may interfere with blood clotting

Vitamin K:
Calcium regulation and blood clotting.
K1 (phylloquinone) from leafy greens
K2 (menaquinone) from fermented foods and animal products
K2 directs calcium to bones, away from arteries
Important complement to vitamin D supplementation`,
      keyTerms: [
        { term: '25(OH)D', definition: 'Blood test form of vitamin D used to assess status' },
        { term: 'methylated', definition: 'Form of B vitamins (methylcobalamin, methylfolate) that some people absorb better' },
        { term: 'menaquinone', definition: 'Form of vitamin K2 (MK-4, MK-7) from fermented foods and animal products' },
      ],
      analogies: [
        'Vitamin D is more like a hormone than a vitamin in how it functions.',
      ],
      examples: [
        'Test 25(OH)D levels to determine appropriate dose',
        'Take D3 (cholecalciferol) rather than D2',
        'Include vitamin K2 for optimal calcium utilization',
      ],
      patientCounselingPoints: [
        'Test 25(OH)D levels to determine appropriate dose',
        'Take D3 (cholecalciferol) rather than D2',
        'Include vitamin K2 for optimal calcium utilization',
        'Typical maintenance: 1000-4000 IU daily',
        'Choose methylated forms (methylcobalamin, methylfolate) if you have MTHFR mutation',
        'Take B vitamins in the morning for energy',
        'Consider B complex if taking individual B vitamins',
        'Split doses when taking more than 500mg',
        'Take with food to minimize digestive upset',
        'Avoid high-dose preformed vitamin A unless prescribed',
        'Choose mixed tocopherols rather than alpha alone',
        'Be cautious with high doses if on blood thinners',
        'Take K2 if supplementing vitamin D',
      ],
    },
    3: {
      level: 3,
      summary: 'Essential minerals include Magnesium (300+ reactions), Calcium (bone health), Zinc (immune/wound healing), Iron (only if deficient), Selenium (thyroid), Iodine (thyroid), and Trace Minerals.',
      explanation: `Magnesium:
Involved in over 300 biochemical reactions.
Deficiency very common due to soil depletion and diet
Essential for sleep, stress response, muscle function
Different forms serve different purposes
Menstruating women often benefit from supplementation

Calcium:
Bone health and beyond.
Best obtained from food when possible
Requires vitamin D and K2 for proper utilization
Calcium supplements may increase cardiovascular risk
Balance with magnesium is important

Zinc:
Immune function and wound healing.
Essential for immune system function
Supports skin health and wound healing
Competition with copper for absorption
Zinc lozenges may reduce cold duration

Iron:
Only supplement if deficient.
Excess iron is oxidative and harmful
Deficiency common in menstruating women
Heme iron (animal) better absorbed than non-heme (plant)
Iron supplements cause constipation in many

Selenium:
Thyroid and antioxidant support.
Essential for thyroid hormone conversion
Important antioxidant glutathione peroxidase
Soil content varies dramatically by region
Narrow window between adequate and toxic

Iodine:
Thyroid function and development.
Essential for thyroid hormone production
Iodized salt dramatically reduced goiter
Both deficiency and excess cause thyroid problems
Seaweed can provide very high amounts

Trace Minerals:
Chromium, manganese, molybdenum, and others.
Needed in smaller amounts than major minerals
Often obtained easily from diet
Specific deficiencies rare except in certain conditions
Best obtained from food sources when possible`,
      keyTerms: [
        { term: 'heme iron', definition: 'Iron from animal sources, better absorbed than non-heme iron from plants' },
        { term: 'glutathione peroxidase', definition: 'Antioxidant enzyme that requires selenium to function' },
        { term: 'goiter', definition: 'Enlargement of thyroid gland often caused by iodine deficiency' },
      ],
      analogies: [
        'Minerals are like the nuts and bolts of your body\'s machinery.',
      ],
      examples: [
        'Magnesium glycinate for relaxation and sleep',
        'Magnesium citrate for constipation',
        'Zinc picolinate well-absorbed form',
      ],
      patientCounselingPoints: [
        'Magnesium glycinate for relaxation and sleep',
        'Magnesium citrate for constipation',
        'Magnesium threonate for cognitive benefits',
        'Start with 200-400mg daily, increase gradually',
        'Prioritize dietary calcium sources',
        'If supplementing, choose calcium citrate',
        'Take with meals for better absorption',
        'Split doses if taking more than 500mg',
        'Take with copper if using long-term',
        'Zinc picolinate well-absorbed form',
        'Can cause nausea on empty stomach',
        'Only supplement after confirming deficiency',
        'Take with vitamin C to enhance absorption',
        '200mcg daily typical safe upper limit',
      ],
    },
    4: {
      level: 4,
      summary: 'Specialized supplements include Omega-3 fatty acids, Probiotics (gut microbiome), Coenzyme Q10, Curcumin, Melatonin, and Glucosamine & Chondroitin for joint health.',
      explanation: `Omega-3 Fatty Acids:
Essential fats for brain, heart, and joint health.
EPA and DHA from fish oil; ALA from plant sources
Most people don't consume adequate amounts
Anti-inflammatory effects throughout body
Important for fetal brain development

Probiotics:
Beneficial bacteria for gut microbiome.
Support digestive and immune health
Strain-specific effects (not all probiotics are equal)
Antibiotics disrupt gut flora
Prebiotics feed beneficial bacteria

Coenzyme Q10 (CoQ10):
Cellular energy and antioxidant.
Essential for mitochondrial energy production
Natural production decreases with age
Statins deplete CoQ10 levels
Ubiquinol (active form) better absorbed than ubiquinone

Curcumin:
Active compound in turmeric.
Powerful anti-inflammatory and antioxidant
Poor bioavailability alone
Enhanced with piperine (black pepper extract)
Effective for joint pain and arthritis

Melatonin:
Sleep hormone and antioxidant.
Regulates sleep-wake cycle
Production decreases with age
Powerful antioxidant properties
Useful for jet lag and shift work

Glucosamine & Chondroitin:
Joint health supplements.
Components of cartilage and joint fluid
Research mixed but positive for some individuals
Most effective for moderate knee pain
Takes 2-3 months to assess benefits`,
      keyTerms: [
        { term: 'probiotics', definition: 'Live beneficial bacteria that support digestive and immune health' },
        { term: 'prebiotics', definition: 'Non-digestible fibers that feed beneficial gut bacteria' },
        { term: 'ubiquinol', definition: 'Active, reduced form of CoQ10 that is better absorbed' },
      ],
      analogies: [
        'Probiotics are like adding good troops to your gut army.',
      ],
      examples: [
        'Aim for 1-2g combined EPA/DHA daily',
        'Choose triglyceride form over ethyl esters',
        'Look for purity certifications (IFOS, GOED)',
      ],
      patientCounselingPoints: [
        'Aim for 1-2g combined EPA/DHA daily',
        'Choose triglyceride form over ethyl esters',
        'Look for purity certifications (IFOS, GOED)',
        'Diverse strains may be more beneficial',
        'Take consistently for at least 3 months before evaluating',
        'Take with fat-containing meal',
        'Ubiquinol preferred form for older adults',
        '100-200mg daily typical dose',
        'Choose formulations enhanced for absorption',
        'Take with meals containing fat',
        'May interact with blood thinners',
        'Start with low dose (0.5-1mg) 1 hour before bed',
        'Glucosamine sulfate preferred form',
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced strategies include Personalized Supplementation (genetic variations), Nutrient Interactions (competition/synergy), Supplement Quality Assessment, Life Stage Considerations, and Integrating with Diet.',
      explanation: `Personalized Supplementation:
Tailoring to individual genetics and biochemistry.
Genetic variations affect nutrient needs (e.g., MTHFR, VDR)
Blood testing can identify specific deficiencies
Individual responses vary significantly
Re-testing guides dosage adjustments

Nutrient Interactions:
Understanding how supplements affect each other.
Some nutrients compete for absorption (zinc/copper, calcium/iron)
Some nutrients work synergistically (vitamin D/K2, calcium/vitamin D)
Timing affects absorption and utilization
Balance important for long-term safety

Supplement Quality Assessment:
Evaluating supplement brands and products.
Third-party testing verifies content and purity
Manufacturing standards affect quality
Label claims may not match actual contents
Price doesn't always correlate with quality

Life Stage Considerations:
Supplement needs change throughout life.
Pregnancy: increased need for folate, iron, choline
Children: different needs and dose considerations
Older adults: B12, calcium, vitamin D, CoQ10
Athletes: increased needs for some nutrients

Integrating with Diet:
Supplements as complement to optimal nutrition.
Food provides nutrients in optimal forms and combinations
Whole food contains beneficial compounds beyond isolated nutrients
Supplements can't compensate for poor diet
Focus on food first, supplements second`,
      keyTerms: [
        { term: 'MTHFR', definition: 'Gene mutation affecting folate metabolism, requiring methylated B vitamins' },
        { term: 'VDR', definition: 'Vitamin D receptor gene affecting vitamin D requirements' },
        { term: 'chelate', definition: 'Mineral bound to organic molecule for better absorption' },
      ],
      analogies: [
        'Personalized supplements are like a tailored suit versus off-the-rack.',
      ],
      examples: [
        'Consider genetic testing for personalized insights',
        'Regular blood testing monitors effects',
        'Work with knowledgeable practitioner',
      ],
      patientCounselingPoints: [
        'Consider genetic testing for personalized insights',
        'Regular blood testing monitors effects',
        'Work with knowledgeable practitioner',
        'One person\'s optimal dose may be another\'s toxic dose',
        'Research potential interactions before starting combinations',
        'Space competing nutrients by several hours',
        'Look for USP, NSF, or ConsumerLab verification',
        'Adjust supplementation for different life stages',
        'Use supplements to fill gaps, not replace nutritious foods',
      ],
    },
  },
  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'integrative-health-overview', targetType: 'topic', relationship: 'parent', label: 'Integrative Health' },
  ],
  tags: {
    systems: [],
    topics: ['supplements', 'vitamins', 'minerals', 'nutritional-health'],
    keywords: ['supplements', 'vitamins', 'minerals', 'omega-3', 'probiotics', 'vitamin-d'],
    clinicalRelevance: 'low',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default supplementsExpanded;
