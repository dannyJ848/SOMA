import { EducationalContent } from '../../types';

export const growthAndNutrition: EducationalContent = {
  id: 'pediatrics-growth-nutrition',
  type: 'concept',
  name: 'Growth and Nutrition',
  alternateNames: ['Pediatric Growth', 'Child Nutrition', 'Feeding and Growth', 'Pediatric Nutrition'],

  levels: {
    1: {
      level: 1,
      summary: 'Children grow fastest in their first few years of life and need the right foods to help their bodies and brains develop properly.',
      explanation: `Watching your child grow is exciting! Good nutrition helps them grow strong and healthy.

**How Fast Do Children Grow?**

*First Year - Super Fast!*
- Birth weight doubles by 4-5 months
- Birth weight triples by 12 months
- Length increases by 50% (about 10 inches)
- Head grows rapidly (brain is developing!)

*Toddler Years (1-3 years):*
- Slower growth than first year
- Gain about 4-5 pounds per year
- Grow about 3-4 inches taller per year

*School Age (4-10 years):*
- Steady, gradual growth
- About 2-3 inches and 4-6 pounds per year

*Puberty:*
- Growth spurt! Fast growth again
- Girls: Usually 10-14 years
- Boys: Usually 12-16 years

**Feeding Your Child:**

**Newborns (0-6 months):**
- Breast milk or formula ONLY
- Breast milk is best if possible
- Feed on demand (8-12 times per day at first)
- No water, juice, or solid foods yet

**Starting Solids (4-6 months):**
- Baby can hold head up and sit with support
- Shows interest in food
- Start with iron-fortified baby cereal or pureed foods
- One new food at a time (wait 3-5 days between new foods)

**6-12 Months:**
- Continue breast milk or formula
- Gradually add more textures
- Soft finger foods when ready
- Avoid honey (risk of botulism)

**Toddlers (1-3 years):**
- Can drink whole milk (important for brain!)
- Table foods, cut into small pieces
- It's normal to be picky - keep offering variety
- Let child decide how much to eat

**Healthy Eating Tips:**

*The Plate Method for Kids:*
- Half the plate: Fruits and vegetables
- Quarter: Grains (whole grains are best)
- Quarter: Protein (meat, beans, eggs)
- Add dairy on the side

*Things to Limit:*
- Sugary drinks and sodas
- Juice (max 4 oz/day for 1-3 years)
- Candy and sweets
- Processed/fast food

**Signs Your Child Is Growing Well:**
- Following their growth curve at checkups
- Active and energetic
- Meeting developmental milestones
- Healthy appetite (varies day to day - that's normal!)`,
      keyTerms: [
        { term: 'growth chart', definition: 'A graph showing how a child\'s height, weight, and head size compare to other children' },
        { term: 'percentile', definition: 'A ranking comparing your child to 100 other children (50th percentile = middle)' },
        { term: 'formula', definition: 'A special milk made for babies who aren\'t breastfeeding' },
        { term: 'solid foods', definition: 'Foods other than breast milk or formula, started around 4-6 months' },
      ],
      analogies: [
        'Growth charts are like a road map - as long as your child is following their own path (curve), they\'re doing great!',
        'Picky eating in toddlers is like trying on clothes - they need to try things many times before they decide they like it.',
      ],
      examples: [
        'A baby born at 7 pounds might weigh about 21 pounds by their first birthday.',
        'A toddler who eats a lot one day and barely anything the next is completely normal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pediatric growth assessment uses standardized growth charts to monitor patterns over time, with nutrition requirements varying by age and special considerations for breastfeeding, formula feeding, and introduction of complementary foods.',
      explanation: `Understanding normal growth patterns and nutritional needs helps identify problems early.

**Growth Monitoring:**

**Growth Charts:**
- WHO charts: Birth to 2 years (based on breastfed infants)
- CDC charts: 2-20 years
- Plot: Weight-for-age, length/height-for-age, weight-for-length, head circumference

**Normal Growth Patterns:**

| Period | Weight Gain | Length/Height Gain |
|--------|-------------|-------------------|
| 0-3 months | 25-30 g/day | 3.5 cm/month |
| 3-6 months | 15-20 g/day | 2 cm/month |
| 6-12 months | 10-15 g/day | 1.5 cm/month |
| 1-2 years | 2.5 kg/year | 12 cm/year |
| 2-puberty | 2-3 kg/year | 6-8 cm/year |
| Puberty | Variable | 8-12 cm/year (girls), 10-14 cm/year (boys) |

**Interpreting Growth Charts:**
- Children usually follow their percentile curves
- Crossing percentile lines (up or down) warrants evaluation
- Pattern matters more than single measurement
- Consider genetic potential (parental heights)

**Infant Nutrition:**

**Breastfeeding:**
- Exclusive breastfeeding recommended for 6 months
- Benefits: Immune protection, bonding, reduced infections
- Vitamin D supplementation: 400 IU daily
- Continue through at least 12 months (longer is fine)

**Formula Feeding:**
- Iron-fortified formula from birth
- ~20 kcal/oz standard concentration
- Volume: 2-3 oz per feeding initially, increasing with age
- No vitamin supplementation needed if formula-fed

**Complementary Foods (Starting at 4-6 months):**

*Readiness Signs:*
- Good head control
- Sits with support
- Loss of tongue thrust reflex
- Shows interest in food

*Introduction Guidelines:*
- Start with iron-rich foods (fortified cereal, pureed meats)
- Add variety gradually
- Common allergens can be introduced early (reduces allergy risk)
- No honey until age 1 (botulism risk)

**Toddler and Childhood Nutrition:**

**Daily Requirements (1-3 years):**
- Calories: ~1,000-1,400 kcal/day
- Protein: 1.1 g/kg/day
- Fat: 30-40% of calories (important for brain!)
- Whole milk until age 2, then can switch to lower fat

**Iron Needs:**
- Rapid growth depletes iron stores
- Iron-deficiency anemia common at 9-24 months
- Sources: Meat, fortified cereals, beans
- Screen at 12 months (hemoglobin)

**Obesity Prevention:**
- No sugar-sweetened beverages
- Limited screen time
- Family meals together
- Let child self-regulate hunger/fullness

**Common Nutritional Concerns:**

*Failure to Thrive (FTT):*
- Weight <5th percentile or crossing 2 major percentile lines down
- Causes: Inadequate intake, malabsorption, increased needs
- Often related to feeding difficulties or psychosocial factors

*Picky Eating:*
- Common in toddlers (neophobia)
- Continue offering variety
- Takes 10-15 exposures to accept new food
- Don't force or pressure`,
      keyTerms: [
        { term: 'WHO growth chart', definition: 'Growth standard based on breastfed infants; used for 0-2 years' },
        { term: 'failure to thrive', definition: 'Poor weight gain; weight <5th percentile or falling across 2+ major percentile lines' },
        { term: 'complementary foods', definition: 'Foods given in addition to breast milk or formula starting around 4-6 months' },
        { term: 'neophobia', definition: 'Fear of new foods; normal developmental phase in toddlers' },
      ],
      analogies: [
        'Growth velocity is like speed on a highway - babies start fast, slow down, then speed up again at puberty.',
        'Introducing solids is like teaching swimming - you start in the shallow end and gradually go deeper.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive growth assessment integrates anthropometric measurements with clinical evaluation, understanding growth velocity, mid-parental height, and bone age, while nutritional management addresses micronutrient requirements, feeding disorders, and conditions affecting growth.',
      explanation: `Evidence-based growth and nutrition assessment enables early identification of abnormalities.

**Growth Assessment Principles:**

**Anthropometric Measurements:**
- Weight: Most sensitive early indicator
- Length/height: Reflects chronic nutritional status
- Head circumference: Brain growth (until age 3)
- BMI: Weight/height² - assess starting at age 2

**Z-Scores vs. Percentiles:**
- Z-score: Standard deviations from mean
- More useful for extreme values
- -2 to +2 Z-scores = 3rd to 97th percentile

**Growth Velocity:**
- More sensitive than single measurements
- Slow velocity crosses percentiles downward
- Height velocity <25th percentile for age requires evaluation

**Mid-Parental Height:**
- Boys: (Mother's height + 13 cm + Father's height) / 2
- Girls: (Father's height - 13 cm + Mother's height) / 2
- Target range: ± 8.5 cm
- Compare child's predicted adult height to target

**Bone Age:**
- Left hand/wrist radiograph compared to standards
- Delayed bone age: Constitutional delay, malnutrition, hypothyroidism
- Advanced bone age: Precocious puberty, obesity

**Nutritional Requirements by Age:**

**Macronutrients:**

| Age | Calories (kcal/kg/day) | Protein (g/kg/day) |
|-----|------------------------|-------------------|
| 0-6 mo | 100-120 | 1.5-2.0 |
| 6-12 mo | 80-100 | 1.2-1.5 |
| 1-3 yr | 80-90 | 1.1 |
| 4-8 yr | 60-70 | 0.95 |
| 9-13 yr | 40-50 | 0.95 |

**Micronutrients:**

*Iron:*
- Term infants: Iron sufficient until 4-6 months
- Preterm infants: Supplement from 2 weeks
- 9-24 months: High-risk period for deficiency
- Requirements: 11 mg/day (7-12 mo), 7 mg/day (1-3 yr)

*Vitamin D:*
- All breastfed infants: 400 IU/day
- Formula-fed: Usually sufficient if >32 oz/day
- Deficiency common in dark-skinned, northern latitude

*Calcium:*
- Critical for bone development
- Requirements increase through adolescence
- Sources: Dairy, fortified foods, leafy greens

**Breastfeeding - Clinical Considerations:**

*Assessment of Adequate Intake:*
- 6+ wet diapers/day after day 4
- 3-4 stools/day in first month
- Weight regain to birth weight by day 10-14
- Following growth curve

*Common Problems:*
- Insufficient milk supply
- Poor latch, nipple pain
- Jaundice (need to rule out breastfeeding vs. breast milk jaundice)

*Breastfeeding Contraindications:*
- Absolute: HIV (in developed countries), active TB, certain medications
- Relative: Herpes lesions on breast, substance abuse

**Formula Selection:**

| Type | Indication |
|------|------------|
| Cow's milk-based | Standard, most infants |
| Partially hydrolyzed | Fussiness, mild intolerance |
| Extensively hydrolyzed | Cow's milk protein allergy |
| Amino acid-based | Severe allergy, multiple food allergy |
| Soy | Galactosemia, lactose intolerance (not for CMPA) |

**Special Growth Considerations:**

*Premature Infants:*
- Use corrected age until 24-36 months
- Higher caloric needs (22-30 kcal/oz)
- Fenton charts for NICU, then transition to WHO

*Catch-Up Growth:*
- After illness or malnutrition
- Weight gains first, then height, then head circumference
- Can be excessive - monitor for obesity

*Organic vs. Non-Organic FTT:*
- Organic: Medical cause (malabsorption, cardiac disease, etc.)
- Non-organic: Psychosocial factors, inadequate intake
- Often mixed etiology`,
      keyTerms: [
        { term: 'bone age', definition: 'Skeletal maturation assessed by hand/wrist radiograph; helps evaluate growth disorders' },
        { term: 'mid-parental height', definition: 'Calculated target height based on parent heights; used to assess genetic growth potential' },
        { term: 'growth velocity', definition: 'Rate of growth over time; more sensitive indicator than single measurements' },
        { term: 'corrected age', definition: 'Chronological age minus weeks of prematurity; used for growth assessment in preterm infants' },
      ],
      clinicalNotes: 'Screen all infants for iron deficiency at 12 months with hemoglobin. Consider earlier screening in preterm infants, low birth weight, or exclusive breastfeeding beyond 6 months without iron supplementation.',
    },
    4: {
      level: 4,
      summary: 'Advanced growth evaluation integrates endocrine, genetic, and systemic disease considerations with understanding of GH-IGF-1 axis, differential diagnosis of short stature and obesity, and management of complex nutritional disorders including eating disorders and inborn errors of metabolism.',
      explanation: `Complex growth and nutritional disorders require systematic diagnostic approaches and multidisciplinary management.

**Endocrine Regulation of Growth:**

**GH-IGF-1 Axis:**
- Growth hormone (GH): Pituitary release, pulsatile (especially during sleep)
- IGF-1: Liver production stimulated by GH
- IGF-1 mediates most growth-promoting effects
- IGFBP-3: Major binding protein, stabilizes IGF-1

**Thyroid and Growth:**
- T4 essential for normal growth and development
- Hypothyroidism causes short stature with delayed bone age
- Congenital hypothyroidism: Screened at birth

**Cortisol and Growth:**
- Excess cortisol inhibits growth (Cushing syndrome)
- Suppresses GH secretion and action
- Exogenous steroids common cause

**Sex Steroids:**
- Estrogen triggers growth plate fusion
- Androgen excess accelerates growth but advances bone age
- Aromatase inhibitors used to delay fusion in some conditions

**Short Stature - Systematic Approach:**

**Definition:**
- Height <3rd percentile or <-2 SD
- Height >2 SD below mid-parental height
- Decreased growth velocity

**Classification:**

*Normal Variants:*
1. Familial (genetic) short stature:
   - Short parents, normal growth velocity
   - Bone age = chronological age
   - Adult height short but consistent with genetic potential

2. Constitutional delay of growth and puberty:
   - Delayed bone age
   - Delayed puberty
   - Normal adult height (catches up)
   - Often family history

*Pathological Short Stature:*

| Category | Examples | Key Features |
|----------|----------|--------------|
| Endocrine | GH deficiency, hypothyroidism | Low IGF-1 or TSH/T4 abnormal |
| Chromosomal | Turner syndrome, Down syndrome | Dysmorphic features |
| Skeletal dysplasia | Achondroplasia | Disproportionate short stature |
| Chronic disease | IBD, celiac, CKD | Other symptoms present |
| Psychosocial | Neglect, deprivation | Improves with environment change |

**Evaluation:**
1. History: Growth velocity, birth size, family heights, pubertal status
2. Physical exam: Proportions, dysmorphology, pubertal staging
3. Labs: CBC, CMP, ESR, TFTs, IGF-1, celiac antibodies
4. Bone age
5. Consider: Karyotype (girls), GH stimulation testing

**Growth Hormone Deficiency:**
- Confirmed by GH stimulation testing (<10 ng/mL on two tests)
- MRI of pituitary
- Treatment: Recombinant GH injections
- Other FDA-approved indications: Turner syndrome, SGA, ISS, PWS

**Obesity - Clinical Approach:**

**Classification:**
- Overweight: BMI 85th-95th percentile
- Obesity: BMI ≥95th percentile
- Severe obesity: BMI ≥120% of 95th percentile

**Medical Evaluation:**
- History: Diet, activity, family history, medications, psychosocial
- Physical: Acanthosis nigricans, striae, hepatomegaly
- Labs: Lipid panel, glucose, ALT, consider HbA1c

**Comorbidities:**
- Type 2 diabetes, prediabetes
- Dyslipidemia
- NAFLD/NASH
- Hypertension
- Sleep apnea
- PCOS (girls)
- SCFE (orthopedic)
- Psychological: Depression, bullying

**Management:**
- Family-based lifestyle intervention (cornerstone)
- Intensive behavioral therapy
- Pharmacotherapy (12+ years): Metformin, orlistat, newer agents
- Bariatric surgery: Severe obesity with comorbidities (select cases)

**Eating Disorders:**

*Anorexia Nervosa:*
- Medical complications: Bradycardia, hypotension, electrolyte abnormalities
- Refeeding syndrome risk with rapid nutritional rehabilitation
- Bone density loss
- Multidisciplinary treatment essential

*Avoidant/Restrictive Food Intake Disorder (ARFID):*
- Not driven by body image concerns
- May present as FTT in younger children
- Nutritional deficiencies common

**Inborn Errors of Metabolism:**
- Present with failure to thrive, developmental delay
- Consider in unexplained poor growth
- Specific dietary interventions (PKU, galactosemia)
- Metabolic dietitian involvement essential`,
      keyTerms: [
        { term: 'IGF-1', definition: 'Insulin-like growth factor 1; mediates growth hormone effects on linear growth' },
        { term: 'constitutional delay', definition: 'Normal variant of delayed growth and puberty with eventual catch-up to normal adult height' },
        { term: 'acanthosis nigricans', definition: 'Velvety hyperpigmentation of neck and axillae; marker of insulin resistance' },
        { term: 'refeeding syndrome', definition: 'Dangerous fluid and electrolyte shifts during rapid nutritional rehabilitation; can cause cardiac arrhythmias' },
      ],
      clinicalNotes: 'All short girls should have karyotype to rule out Turner syndrome, even without classic phenotype. Growth failure may be the only presenting sign. Early diagnosis allows for growth hormone therapy and monitoring for associated conditions.',
    },
    5: {
      level: 5,
      summary: 'Contemporary growth and nutrition science integrates genomics, epigenetics, and understanding of the gut-brain axis with precision medicine approaches to growth disorders, while nutritional programming concepts and emerging therapies reshape management paradigms.',
      explanation: `State-of-the-art growth and nutrition management reflects advances in molecular medicine and systems biology.

**Genomics of Growth:**

**Genetic Architecture:**
- Height: Highly polygenic (thousands of variants)
- GWAS studies identify >700 loci affecting height
- Rare variants: Greater individual effect (SHOX, FGFR3)

**Genetic Causes of Short Stature:**
- SHOX deficiency: X chromosome, Leri-Weill dyschondrosteosis
- FGFR3 mutations: Achondroplasia, hypochondroplasia
- ACAN mutations: Short stature with accelerated bone age
- NPR2 mutations: Proportionate short stature

**Genetic Testing Approaches:**
- Chromosomal microarray: CNVs causing syndromic short stature
- Targeted gene panels: Known skeletal dysplasia genes
- Exome sequencing: Unexplained syndromic presentations

**Epigenetics and Developmental Programming:**

**Fetal Programming:**
- Barker hypothesis: In utero exposures program later disease
- Small for gestational age: Increased metabolic syndrome risk
- Mechanisms: DNA methylation, histone modification

**Early Nutritional Programming:**
- First 1000 days concept (conception to age 2)
- Rapid early weight gain: Increased obesity risk
- Breastfeeding duration affects metabolic programming

**Epigenetic Modifications:**
- Prenatal nutrition affects offspring gene expression
- Transgenerational effects documented
- Potential therapeutic targets

**Gut Microbiome and Growth:**

**Microbiome-Growth Connection:**
- Germ-free animals have stunted growth
- Microbiome influences IGF-1 levels
- Short-chain fatty acids affect metabolism

**Malnutrition and Microbiome:**
- Altered microbiome in severe acute malnutrition
- Microbiome immaturity associated with stunting
- Microbiome-directed therapeutic foods emerging

**Clinical Applications:**
- Probiotics for growth optimization (limited evidence)
- Fecal microbiota transplantation (research stage)
- Prebiotic/synbiotic formulations

**Advanced Growth Hormone Therapeutics:**

**Long-Acting GH Preparations:**
- Once-weekly formulations (somapacitan, lonapegsomatropin)
- Improved compliance
- Similar efficacy to daily injections

**Novel Therapies:**
- Vosoritide (C-type natriuretic peptide analog) for achondroplasia
- FGFR3 pathway modulators
- Anti-myostatin therapies for muscle disorders

**Emerging Indications:**
- Noonan syndrome
- Hypochondroplasia
- Idiopathic short stature (ISS) - nuanced decisions

**Precision Nutrition:**

**Metabolomics Applications:**
- Individual nutrient requirements identification
- Disease risk prediction
- Monitoring nutritional interventions

**Nutrigenomics:**
- Genetic variants affecting nutrient metabolism
- MTHFR and folate metabolism
- FTO and obesity risk

**Personalized Dietary Interventions:**
- Tailored macronutrient ratios
- Microbiome-based dietary recommendations
- Continuous glucose monitoring guiding diet

**Obesity - Emerging Therapeutics:**

**GLP-1 Receptor Agonists:**
- Liraglutide FDA-approved for adolescents
- Semaglutide trials in adolescents ongoing
- Significant weight loss efficacy

**Other Agents:**
- Setmelanotide: MC4R pathway, rare genetic obesity
- Combination therapies under investigation

**Pharmacogenomics:**
- Genetic predictors of response
- Adverse effect prediction
- Personalized weight management

**Severe Acute Malnutrition (SAM):**

**Pathophysiology:**
- Metabolic adaptation to starvation
- Reductive adaptation: Decreased metabolic rate
- Immune dysfunction, increased infection risk

**Management Evolution:**
- Ready-to-use therapeutic food (RUTF)
- Community-based management
- Microbiome-targeted approaches emerging

**Research Frontiers:**
- Gut barrier function therapies
- Environmental enteric dysfunction
- Aflatoxin and growth impairment

**Future Directions:**

**AI and Growth Prediction:**
- Machine learning models for growth trajectory
- Early detection of growth disorders
- Treatment response prediction

**Gene Therapy:**
- Potential for monogenic growth disorders
- Skeletal dysplasia targeting
- Ethical considerations

**Wearable Technology:**
- Continuous growth monitoring
- Activity and sleep tracking
- Integrated nutritional apps

**Systems Approaches:**
- Multi-omics integration
- Network analysis of growth regulation
- Precision medicine frameworks

**Global Health Perspectives:**

**Stunting:**
- Affects 149 million children globally
- Multifactorial: Nutrition, infection, environment
- First 1000 days interventions critical

**Overnutrition and Globalization:**
- Double burden: Undernutrition and obesity
- Nutrition transition in developing countries
- Policy interventions needed`,
      keyTerms: [
        { term: 'developmental programming', definition: 'Concept that early life exposures (fetal, infant) influence lifelong disease risk through epigenetic mechanisms' },
        { term: 'nutrigenomics', definition: 'Study of how genetic variation affects response to nutrients and dietary interventions' },
        { term: 'vosoritide', definition: 'C-type natriuretic peptide analog FDA-approved for achondroplasia; promotes bone growth' },
        { term: 'RUTF', definition: 'Ready-to-use therapeutic food; energy-dense paste for treating severe acute malnutrition' },
        { term: 'systems biology', definition: 'Approach studying biological systems as integrated networks rather than individual components' },
      ],
      clinicalNotes: `**Current Practice Pearls:**
- Long-acting GH formulations (weekly) now available and may improve adherence
- Vosoritide represents first disease-modifying therapy for achondroplasia
- GLP-1 agonists (liraglutide) approved for adolescent obesity; consider for BMI ≥95th with comorbidities
- All short stature evaluations should consider genetic etiologies; targeted panels available
- First 1000 days nutrition (conception to age 2) has lasting impact on growth and metabolic health`,
    },
  },

  media: [
    {
      id: 'growth-charts-interpretation',
      type: 'diagram',
      filename: 'growth-chart-interpretation.svg',
      title: 'Growth Chart Interpretation Guide',
      description: 'Visual guide to interpreting pediatric growth charts and common patterns',
    },
    {
      id: 'short-stature-algorithm',
      type: 'diagram',
      filename: 'short-stature-evaluation.svg',
      title: 'Short Stature Evaluation Algorithm',
      description: 'Systematic approach to evaluating short stature in children',
    },
  ],
  citations: [
    {
      id: 'aap-breastfeeding',
      type: 'article',
      title: 'Breastfeeding and the Use of Human Milk',
      authors: ['American Academy of Pediatrics Section on Breastfeeding'],
      source: 'Pediatrics',
    },
    {
      id: 'who-growth-standards',
      type: 'website',
      title: 'WHO Child Growth Standards',
      source: 'World Health Organization',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      id: 'nelson-growth',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman RM', 'St. Geme JW'],
      source: 'Elsevier',
      chapter: 'Growth, Development, and Behavior',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-well-child-visits', targetType: 'topic', relationship: 'parent', label: 'Well-Child Visits' },
    { targetId: 'pediatrics-developmental-milestones', targetType: 'topic', relationship: 'related', label: 'Developmental Milestones' },
    { targetId: 'endocrine-system', targetType: 'system', relationship: 'related', label: 'Endocrine System' },
  ],
  tags: {
    systems: ['endocrine', 'gastrointestinal'],
    topics: ['pediatrics', 'nutrition', 'endocrinology', 'growth'],
    keywords: ['growth', 'nutrition', 'breastfeeding', 'formula', 'obesity', 'short stature', 'failure to thrive'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default growthAndNutrition;
