import { LegacyWomensHealthContent } from '../types';

export const calciumVitaminD: LegacyWomensHealthContent = {
  id: 'concept-calcium-vitamin-d',
  type: 'concept',
  name: 'Calcium and Vitamin D',
  alternateNames: ['Bone nutrients', 'Vitamin D supplementation', 'Calcium intake'],

  levels: {
    1: {
      level: 1,
      summary: 'Calcium and vitamin D work together to keep your bones strong. Getting enough of both through food, sunlight, and supplements when needed helps prevent weak bones.',
      explanation: `**Why You Need Calcium:**
- Calcium is the main mineral that makes bones strong
- Your body can't make calcium - you must get it from food
- If you don't get enough, your body takes it from your bones

**Why You Need Vitamin D:**
- Helps your body absorb calcium
- Made by your skin when exposed to sunlight
- Hard to get enough from food alone

**How Much You Need:**

*Calcium:*
- Ages 19-50: 1,000 mg/day
- Women over 50: 1,200 mg/day

*Vitamin D:*
- Most adults: 600-800 IU/day
- May need more if deficient

**Best Food Sources:**

*Calcium:*
- Dairy products (milk, yogurt, cheese)
- Fortified plant milks
- Leafy greens (kale, broccoli)
- Canned fish with bones

*Vitamin D:*
- Fatty fish (salmon, tuna)
- Fortified milk and cereals
- Egg yolks
- Sunlight exposure

**Tips:**
- Food sources are preferred over supplements
- If you need supplements, take calcium in divided doses
- Vitamin D needs fat for absorption - take with a meal`,
      keyTerms: [
        { term: 'calcium', definition: 'A mineral that makes up most of your bone structure' },
        { term: 'vitamin D', definition: 'A vitamin that helps your body absorb and use calcium' },
        { term: 'fortified', definition: 'Foods with added vitamins or minerals' },
      ],
      analogies: ['Think of calcium as the bricks for building a house (your bones), and vitamin D as the construction workers who put the bricks in place.'],
      examples: ['Having a glass of milk with breakfast (300 mg calcium)', 'Taking a 10-minute walk in the sun for vitamin D'],
    },
    2: {
      level: 2,
      summary: 'Adequate calcium and vitamin D intake is essential for bone health, with specific recommendations varying by age and risk factors, and supplementation considered when dietary intake is insufficient.',
      explanation: `**Calcium Recommendations:**

*Daily Requirements:*
- Ages 9-18: 1,300 mg
- Ages 19-50: 1,000 mg
- Women 51+: 1,200 mg
- Pregnant/lactating: 1,000-1,300 mg

*Dietary Sources (per serving):*
- Milk (8 oz): 300 mg
- Yogurt (6 oz): 250-300 mg
- Cheese (1 oz): 200 mg
- Fortified orange juice (8 oz): 350 mg
- Tofu (4 oz): 250-400 mg
- Sardines (3 oz): 325 mg

**Vitamin D Recommendations:**

*Daily Requirements:*
- Ages 1-70: 600 IU (15 mcg)
- Ages 71+: 800 IU (20 mcg)
- May need more if deficient

*Dietary Sources:*
- Salmon (3 oz): 400-600 IU
- Fortified milk (8 oz): 100-120 IU
- Fortified cereals: Variable
- Egg yolk: 40 IU

*Sunlight:*
- Skin synthesis varies by latitude, season, skin color
- 10-15 minutes midday sun may suffice
- Sunscreen limits production

**Supplementation:**

*Calcium:*
- Calcium carbonate: Take with food
- Calcium citrate: Take any time, better for older adults
- Max per dose: 500 mg for best absorption

*Vitamin D:*
- D3 (cholecalciferol) preferred
- D2 (ergocalciferol) also effective
- Fat-soluble - take with food

**Interactions:**
- High calcium may reduce iron absorption
- Vitamin D toxicity rare but possible at very high doses
- Some medications affect absorption`,
      keyTerms: [
        { term: 'cholecalciferol', definition: 'Vitamin D3, the form made by skin and preferred in supplements' },
        { term: 'calcium carbonate', definition: 'Common calcium supplement requiring stomach acid for absorption' },
        { term: 'calcium citrate', definition: 'Calcium supplement absorbed without stomach acid, better for older adults' },
        { term: 'fortification', definition: 'Adding vitamins or minerals to foods during processing' },
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical management of calcium and vitamin D requires understanding of absorption physiology, assessment of adequacy, treatment of deficiency, and awareness of special populations and potential harms.',
      explanation: `**Calcium Physiology:**

*Absorption:*
- Primarily in small intestine
- Efficiency decreases with increasing intake
- Enhanced by vitamin D, reduced pH
- Inhibited by oxalates, phytates, high fiber

*Regulation:*
- PTH released when serum calcium low
- PTH increases renal reabsorption, bone resorption
- 1,25-OH vitamin D increases intestinal absorption

**Vitamin D Physiology:**

*Metabolism:*
- Skin: 7-dehydrocholesterol → vitamin D3 (via UV-B)
- Liver: Vitamin D → 25-OH vitamin D (storage form)
- Kidney: 25-OH → 1,25-OH vitamin D (active form)

*Factors Affecting Levels:*
- Latitude and season
- Skin pigmentation
- Sunscreen use
- Obesity (sequestered in fat)
- Age (reduced skin synthesis)
- Malabsorption

**Assessment:**

*Vitamin D Status:*
- 25-OH vitamin D is the measure
- Deficient: <20 ng/mL
- Insufficient: 20-29 ng/mL
- Adequate: ≥30 ng/mL

*When to Test:*
- Osteoporosis
- Malabsorption syndromes
- Chronic kidney disease
- Medications affecting metabolism
- Symptoms of deficiency

**Treatment of Deficiency:**

*Vitamin D:*
- Deficiency: 50,000 IU weekly x 8 weeks, then maintenance
- Maintenance: 1,000-2,000 IU daily
- Recheck level after repletion

*Calcium with Deficiency:*
- Optimize vitamin D first
- Dietary sources preferred
- Supplement if diet insufficient

**Special Populations:**

*Postmenopausal Women:*
- Higher requirements (1,200 mg calcium)
- More likely deficient in vitamin D
- Essential for osteoporosis prevention/treatment

*Pregnancy/Lactation:*
- Fetal/infant needs
- Calcium: 1,000-1,300 mg
- Vitamin D: 600 IU (many experts recommend more)

*Elderly:*
- Reduced skin synthesis
- Reduced intestinal absorption
- Higher fall and fracture risk
- Calcium citrate preferred`,
      keyTerms: [
        { term: '25-OH vitamin D', definition: 'Storage form of vitamin D measured to assess status' },
        { term: '1,25-OH vitamin D', definition: 'Active form of vitamin D; regulated by PTH and calcium' },
        { term: 'PTH', definition: 'Parathyroid hormone; regulates calcium and vitamin D metabolism' },
        { term: 'oxalates', definition: 'Compounds in some foods that reduce calcium absorption' },
      ],
      clinicalNotes: 'Vitamin D deficiency is common (40% of adults). Treat deficiency before assessing for osteoporosis - low vitamin D affects DEXA results. High-dose vitamin D repletion is safe and necessary for deficiency.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of calcium and vitamin D involves understanding the evolving evidence on supplementation benefits and harms, individualized recommendations, and management of complex clinical scenarios.',
      explanation: `**Controversies in Supplementation:**

*Calcium and Cardiovascular Risk:*
- Some studies suggested increased CV events with calcium supplements
- Meta-analyses mixed results
- Current consensus: Food sources preferred, supplements safe at recommended doses
- Avoid doses >1,000-1,200 mg/day

*Vitamin D Supplementation Beyond Bones:*
- Inconsistent evidence for falls prevention
- No clear benefit for cancer, CVD prevention in general population
- May benefit specific deficient populations
- Avoid mega-doses

**Individualized Recommendations:**

*Who Benefits Most from Supplementation:*
- Documented deficiency
- Osteoporosis or high fracture risk
- Malabsorption
- Limited dietary intake
- Limited sun exposure
- Older adults in institutions

*Who May Not Need Supplements:*
- Adequate dietary intake
- Normal vitamin D levels
- No bone disease
- Young, healthy individuals

**Complex Clinical Scenarios:**

*Chronic Kidney Disease:*
- Impaired 1-alpha hydroxylation
- May need active vitamin D (calcitriol)
- Monitor calcium and phosphorus
- Secondary hyperparathyroidism management

*Malabsorption:*
- Celiac disease, IBD, gastric bypass
- Higher doses often needed
- Monitor levels more frequently
- Consider intramuscular vitamin D

*Primary Hyperparathyroidism:*
- Often vitamin D deficient
- Safe to replete vitamin D
- May unmask severity of hypercalcemia

*Sarcoidosis and Granulomatous Disease:*
- Activated vitamin D produced by granulomas
- Risk of hypercalcemia with supplementation
- Lower vitamin D doses if needed

**Vitamin D Toxicity:**
- Rare, requires very high doses (>10,000 IU/day long-term)
- Causes hypercalcemia, hypercalciuria
- Symptoms: Nausea, weakness, kidney stones
- Stop supplements, supportive care

**Testing Considerations:**
- Not recommended for routine screening in general population
- Test if risk factors or clinical indication
- 25-OH vitamin D is standard test
- Free vitamin D may be useful in some situations`,
      keyTerms: [
        { term: 'calcitriol', definition: 'Active 1,25-OH vitamin D; used when 1-alpha hydroxylation impaired' },
        { term: 'hypercalcemia', definition: 'Elevated blood calcium; potential complication of excessive supplementation' },
        { term: 'secondary hyperparathyroidism', definition: 'Elevated PTH due to low calcium or vitamin D' },
        { term: 'free vitamin D', definition: 'Unbound fraction of vitamin D; may better reflect bioavailable status' },
      ],
      clinicalNotes: 'In CKD stages 4-5, active vitamin D (calcitriol or analogs) often needed rather than cholecalciferol. Post-bariatric surgery patients often need much higher vitamin D doses. Monitor calcium when repleting vitamin D in hyperparathyroidism.',
    },
    5: {
      level: 5,
      summary: 'Expert management of calcium and vitamin D integrates evolving guideline recommendations, addresses screening controversies, understands the full spectrum of vitamin D effects, and personalizes recommendations based on individual risk.',
      explanation: `**Guideline Controversies:**

*USPSTF Recommendations:*
- Insufficient evidence to recommend vitamin D screening in general population
- Against low-dose vitamin D + calcium for fracture prevention in community-dwelling postmenopausal women
- Notes: Applies to low doses (400 IU D, 1000 mg Ca), not deficient individuals

*Endocrine Society Guidelines:*
- More aggressive screening and treatment thresholds
- Target 30-50 ng/mL for at-risk groups
- Higher supplementation doses

*Reconciling Differences:*
- Population-based vs. individual patient approach
- Different outcomes considered
- Risk-stratified recommendations most appropriate

**Beyond Bone Health:**

*Muscle Function:*
- Vitamin D receptors in muscle
- Deficiency associated with weakness
- Supplementation may improve function in elderly

*Immune Function:*
- Vitamin D modulates immune responses
- Epidemiologic links to infections, autoimmune disease
- Intervention data mixed

*Pregnancy Outcomes:*
- Deficiency associated with preeclampsia, GDM
- Supplementation trials ongoing
- Most experts recommend 1,000-2,000 IU in pregnancy

**Personalized Approach:**

*Risk Assessment:*
- Evaluate dietary intake
- Sun exposure history
- Risk factors for deficiency
- Bone health status
- Comorbidities affecting metabolism

*Targeted Supplementation:*
- Not "one size fits all"
- Higher doses for deficient, high-risk
- May not need supplements if replete

*Monitoring Strategy:*
- Annual testing if on high-dose supplements
- Recheck after repletion
- Monitor calcium if risk of hypercalcemia

**Emerging Research:**

*Genetic Variations:*
- VDR polymorphisms affect response
- GC gene affects binding protein
- May explain variable response to supplementation

*Optimal Levels:*
- Debate continues (20 vs. 30 ng/mL)
- May vary by outcome and population
- Toxicity concern argues against very high targets

*Free Vitamin D:*
- May better predict outcomes
- Not widely available
- Research ongoing`,
      keyTerms: [
        { term: 'VDR', definition: 'Vitamin D receptor; genetic variants may affect response to vitamin D' },
        { term: 'VDBP', definition: 'Vitamin D binding protein; genetic variants affect total vitamin D levels' },
        { term: 'personalized nutrition', definition: 'Tailoring nutrient recommendations to individual characteristics' },
        { term: 'treat to target', definition: 'Adjusting supplementation to achieve specific vitamin D level' },
      ],
      clinicalNotes: 'USPSTF recommendations are population-based and don\'t preclude individual testing/treatment. Most clinical guidelines support treating deficiency and ensuring adequacy in those with bone disease. The "optimal" level debate continues, but most agree <20 ng/mL is deficient.',
    }
  },
  media: [],
  citations: [
    {
      id: 'endocrine-society-vitamin-d',
      type: 'article',
      title: 'Endocrine Society Clinical Practice Guideline: Vitamin D',
      source: 'Endocrine Society',
      license: 'Copyright Endocrine Society',
    },
    {
      id: 'iom-calcium-vitamin-d',
      type: 'article',
      title: 'Dietary Reference Intakes for Calcium and Vitamin D',
      source: 'Institute of Medicine',
      license: 'Public domain',
    }
  ],
  crossReferences: [
    { targetId: 'concept-osteoporosis-prevention', targetType: 'concept', relationship: 'related', label: 'Osteoporosis Prevention' },
    { targetId: 'concept-bone-density-testing', targetType: 'concept', relationship: 'related', label: 'Bone Density Testing' },
  ],
  tags: {
    systems: ['musculoskeletal', 'endocrine'],
    topics: ['womens-health', 'patient-education', 'nutrition', 'bone-health'],
    keywords: ['calcium', 'vitamin D', 'supplements', 'bone health', 'nutrition'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['medicine'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
