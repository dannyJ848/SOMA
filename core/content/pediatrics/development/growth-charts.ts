/**
 * Growth Charts Explained
 *
 * Understanding pediatric growth charts, percentiles, and growth
 * monitoring for tracking child health and development.
 */

import { EducationalContent } from '../../types';

export const GROWTH_CHARTS_EXPLAINED: EducationalContent = {
  id: 'concept-growth-charts',
  type: 'concept',
  name: 'Growth Charts Explained',
  alternateNames: ['Pediatric growth curves', 'Growth percentiles', 'Height and weight charts'],

  levels: {
    1: {
      level: 1,
      summary: 'Growth charts show how your child\'s height and weight compare to other children the same age. They help doctors check that your child is growing well.',
      explanation: `Growth charts are tools that help track how children grow over time.

**What Is a Growth Chart?**
A growth chart is like a map that shows the typical growth patterns for children at different ages. When your doctor measures your child, they can see where your child fits on this map.

**What Gets Measured:**
- **Weight** - How heavy your child is
- **Length/Height** - How tall your child is
- **Head size** - How big around the head is (important for babies)
- **BMI** - A number that compares weight to height (for older kids)

**Understanding Percentiles:**
Percentiles tell you how your child compares to 100 other kids the same age:
- 50th percentile = Right in the middle
- 90th percentile = Taller or heavier than 90 out of 100 kids
- 10th percentile = Taller or heavier than 10 out of 100 kids

**Important Points:**
- Being at a high or low percentile is usually NORMAL
- What matters most is staying on YOUR child's curve
- Children come in all sizes - that's healthy!
- Genetics plays a big role (tall parents often have tall kids)

**Why Doctors Track Growth:**
- To make sure your child is getting enough nutrition
- To catch any health problems early
- To see patterns over time
- To check that development is on track

**When to Be Concerned:**
Your doctor will watch for:
- Sudden drops in percentile
- Crossing many lines on the chart
- Not gaining weight or height over time
- Head growing too fast or too slow

Talk to your pediatrician if you have questions about your child's growth!`,
      keyTerms: [
        { term: 'percentile', definition: 'A number showing how your child compares to 100 other children the same age' },
        { term: 'growth chart', definition: 'A graph showing normal height and weight ranges for children at each age' },
        { term: 'BMI', definition: 'Body Mass Index - a number that shows if weight is healthy for a certain height' },
      ],
      analogies: [
        'Growth charts are like a road with many lanes - it\'s okay to be in any lane, as long as you stay in your lane.',
        'Percentiles are like being in a race with 100 kids - 50th percentile means 50 kids are ahead and 50 are behind.',
      ],
      examples: [
        'A baby in the 25th percentile for weight is lighter than average but perfectly healthy.',
        'A toddler who was always at the 75th percentile suddenly dropping to the 25th would concern the doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Growth charts plot children\'s measurements against population norms using percentile curves. Consistent tracking identifies concerning growth patterns that may indicate nutritional, endocrine, or other health issues.',
      explanation: `**Types of Growth Charts:**

**WHO Growth Standards (0-2 years):**
- Based on healthy breastfed infants worldwide
- Describes how children SHOULD grow
- Used in the US for children under 2

**CDC Growth Reference (2-20 years):**
- Based on US population data
- Describes how children DO grow
- Used for children 2 and older

**What's Measured and When:**

| Measurement | Birth-2 years | 2-20 years |
|-------------|---------------|------------|
| Weight | Every visit | Every visit |
| Length/Height | Every visit | Every visit |
| Head circumference | Every visit | Not routine |
| BMI | Not calculated | Every visit (2+) |

**Understanding Percentile Curves:**

The chart shows curves for:
- 3rd percentile (near bottom)
- 5th percentile
- 10th percentile
- 25th percentile
- 50th percentile (median)
- 75th percentile
- 90th percentile
- 95th percentile
- 97th percentile (near top)

**Normal Growth Patterns:**

*Infants (0-12 months):*
- Most rapid growth period
- Birth weight doubles by 4-5 months
- Birth weight triples by 12 months
- Length increases by 50% in first year

*Toddlers (1-3 years):*
- Growth rate slows
- Weight gain: 4-6 pounds/year
- Height gain: 2-3 inches/year
- Appetite often decreases (normal!)

*School Age (3-10 years):*
- Steady, predictable growth
- Weight gain: 4-7 pounds/year
- Height gain: 2-2.5 inches/year

*Puberty:*
- Growth spurt begins
- Girls: typically 10-14 years
- Boys: typically 12-16 years
- Can gain 3-4 inches/year during peak

**Patterns of Concern:**

| Pattern | Possible Causes |
|---------|-----------------|
| Weight crossing down 2+ percentile lines | Inadequate intake, malabsorption, chronic illness |
| Height crossing down 2+ percentile lines | Endocrine issues, chronic disease, genetic conditions |
| Head circumference too large | Hydrocephalus, familial macrocephaly |
| Head circumference too small | Microcephaly, developmental concerns |
| BMI >95th percentile | Obesity |
| BMI >85th percentile | Overweight |
| BMI <5th percentile | Underweight, failure to thrive |

**Growth Velocity:**
- More informative than single measurements
- Should stay relatively constant for age
- Expected ranges differ by age
- Slowing velocity often precedes percentile drop

**Genetic Potential:**
- Mid-parental height prediction:
  - Girls: (father's height - 5" + mother's height) ÷ 2
  - Boys: (father's height + mother's height + 5") ÷ 2
- Actual height typically within 2 inches of prediction`,
      keyTerms: [
        { term: 'WHO growth standards', definition: 'International growth charts based on healthy breastfed infants, showing optimal growth' },
        { term: 'CDC growth reference', definition: 'US-based growth charts for ages 2-20, describing how American children grow' },
        { term: 'growth velocity', definition: 'Rate of growth over time, measured in inches or cm per year' },
        { term: 'mid-parental height', definition: 'Calculated target height based on parents\' heights' },
        { term: 'failure to thrive', definition: 'Poor weight gain or weight loss in young children' },
      ],
      analogies: [
        'Growth velocity is like checking your car\'s speedometer - the measurement tells you how fast you\'re going, not just where you are.',
      ],
    },
    3: {
      level: 3,
      summary: 'Growth chart interpretation requires understanding statistical distributions, recognizing normal variants, differentiating organic from non-organic causes of growth abnormalities, and initiating appropriate workup when indicated.',
      explanation: `**Statistical Basis of Growth Charts:**

**Normal Distribution:**
- Growth parameters follow Gaussian distribution
- Percentiles represent standard deviations from mean
- 3rd-97th percentile contains ~94% of population
- Values outside this range warrant evaluation

**Z-Scores vs Percentiles:**
| Percentile | Z-Score | Interpretation |
|------------|---------|----------------|
| 97th | +1.88 | High normal |
| 95th | +1.64 | High normal |
| 90th | +1.28 | High normal |
| 75th | +0.67 | Above average |
| 50th | 0 | Average |
| 25th | -0.67 | Below average |
| 10th | -1.28 | Low normal |
| 5th | -1.64 | Low normal |
| 3rd | -1.88 | Low normal |
| <3rd | <-1.88 | Warrants evaluation |

*Z-score advantages:*
- Allows tracking at extremes
- Better for research/comparison
- Can quantify change over time

**Growth Parameters Interpretation:**

**Weight for Age:**
- Most sensitive to acute changes
- Affected by hydration, recent illness
- First to change with nutritional issues

**Length/Height for Age:**
- More stable, reflects chronic nutrition
- Affected by endocrine disorders
- Genetic factors significant

**Weight for Length/Height:**
- Best indicator of nutritional status
- Differentiates stunting from wasting
- Basis for WHO acute malnutrition classification

**Head Circumference:**
- Reflects brain growth
- Fastest growth in first year
- Affected by:
  - Familial variation
  - Hydrocephalus
  - Craniosynostosis
  - Microcephaly syndromes

**BMI Interpretation (Children):**

| BMI Percentile | Category |
|----------------|----------|
| <5th | Underweight |
| 5th-84th | Healthy weight |
| 85th-94th | Overweight |
| ≥95th | Obesity |
| ≥120% of 95th | Severe obesity |

**Differential Diagnosis by Growth Pattern:**

**Short Stature (<3rd percentile or >2 SD below mean):**

*Proportionate Short Stature:*
| Category | Features |
|----------|----------|
| Familial short stature | Normal velocity, short parents |
| Constitutional delay | Delayed bone age, family history |
| GH deficiency | Slow velocity, central fat |
| Hypothyroidism | Slow velocity, delayed bone age |
| Chronic disease | Associated symptoms |
| Psychosocial | Adverse environment |

*Disproportionate Short Stature:*
| Category | Features |
|----------|----------|
| Skeletal dysplasias | Abnormal limb/trunk ratio |
| Rickets | Bowing, metaphyseal changes |
| Spinal abnormalities | Shortened trunk |

**Failure to Thrive (Weight <3rd or crossing >2 lines):**

*Organic Causes:*
- GI: Celiac, IBD, GERD, malabsorption
- Cardiac: CHD with failure
- Pulmonary: Cystic fibrosis, chronic lung disease
- Renal: CKD, RTA
- Endocrine: Hypothyroid, adrenal insufficiency
- Neurologic: Cerebral palsy (feeding difficulty)
- Genetic: Chromosomal abnormalities

*Non-organic Causes:*
- Inadequate intake (feeding technique, poverty)
- Neglect
- Feeding behavior problems
- Psychosocial stress

**Initial Workup Algorithm:**

*Short Stature:*
1. Bone age (left wrist radiograph)
2. CBC, CMP, celiac panel
3. TSH, free T4
4. IGF-1, IGFBP-3
5. Karyotype (girls with unexplained short stature - Turner)

*Failure to Thrive:*
1. Detailed feeding history
2. CBC, CMP
3. Urinalysis
4. Lead level
5. Celiac screen
6. Consider sweat chloride, stool studies

**Special Populations:**

*Preterm Infants:*
- Use WHO preterm charts or Fenton charts
- Plot by corrected age until 2-3 years
- Catch-up growth expected in first 2-3 years

*Down Syndrome:*
- Use DS-specific growth charts
- Different normal ranges
- Monitor for obesity tendency`,
      keyTerms: [
        { term: 'z-score', definition: 'Number of standard deviations from the mean, used to quantify growth parameters' },
        { term: 'bone age', definition: 'Skeletal maturity assessed by wrist X-ray, compared to chronological age' },
        { term: 'constitutional delay', definition: 'Variant of normal growth with delayed puberty and bone age, eventual normal height' },
        { term: 'stunting', definition: 'Low height-for-age reflecting chronic undernutrition' },
        { term: 'wasting', definition: 'Low weight-for-height reflecting acute undernutrition' },
      ],
      clinicalNotes: 'Always calculate and plot growth velocity. Single measurements are less informative than trends. Consider bone age for any child with growth concerns. Girls with unexplained short stature need karyotype to rule out Turner syndrome.',
    },
    4: {
      level: 4,
      summary: 'Advanced growth assessment integrates endocrine physiology, genetic syndromes, and targeted interventions while recognizing the complex interplay between nutrition, hormones, and chronic disease affecting childhood growth.',
      explanation: `**Endocrine Regulation of Growth:**

**Growth Hormone Axis:**

\`\`\`
Hypothalamus
    ↓ GHRH (+) / Somatostatin (-)
Anterior Pituitary
    ↓ GH
Liver (and other tissues)
    ↓ IGF-1
Growth Plates → Linear Growth
\`\`\`

*Regulatory Factors:*
| Stimulatory | Inhibitory |
|-------------|------------|
| Sleep (deep) | Hyperglycemia |
| Exercise | Elevated IGF-1 |
| Hypoglycemia | Cortisol excess |
| Fasting | Hypothyroidism |
| Stress (acute) | Psychosocial deprivation |
| Estrogen (low dose) | Estrogen (high dose) |

**GH Deficiency Evaluation:**

*Clinical Features:*
- Height velocity <4-5 cm/year (prepubertal)
- Bone age delayed >2 years
- Relative adiposity (central)
- Characteristic facies (frontal bossing, midface hypoplasia)
- Micropenis, hypoglycemia in infancy

*Diagnostic Algorithm:*
1. IGF-1, IGFBP-3 screening (age/sex-adjusted)
2. GH stimulation testing if IGF-1 low
   - Arginine, clonidine, glucagon, insulin tolerance test
   - Peak GH <10 ng/mL (traditional) or <5-7 ng/mL (newer)
3. Brain MRI (pituitary evaluation)
4. Assess other pituitary hormones

*Conditions with GH Deficiency:*
| Congenital | Acquired |
|------------|----------|
| Septo-optic dysplasia | Craniopharyngioma |
| Pituitary hypoplasia | Radiation therapy |
| Transcription factor defects (PROP1, POU1F1) | Trauma/surgery |
| Midline defects | Langerhans cell histiocytosis |

**Genetic Causes of Short Stature:**

*Syndromic Short Stature:*
| Syndrome | Gene/Cause | Features |
|----------|------------|----------|
| Turner | 45,X or variants | Female, lymphedema, cardiac, streak gonads |
| Noonan | PTPN11, others | Cardiac, facial features, cryptorchidism |
| Silver-Russell | 11p15 / chr 7 | SGA, asymmetry, triangular face |
| Prader-Willi | 15q11 paternal | Hypotonia, hyperphagia, hypogonadism |
| SHOX deficiency | SHOX | Madelung deformity, short forearms |

*Primary Growth Plate Disorders:*
| Gene | Condition | Features |
|------|-----------|----------|
| FGFR3 | Achondroplasia | Rhizomelic shortening, macrocephaly |
| COL2A1 | SED congenita | Short trunk, eye abnormalities |
| COMP | Pseudoachondroplasia | Normal facies, limb shortening |
| SHOX | Léri-Weill | Madelung, mild short stature |

**Growth Hormone Treatment:**

*FDA-Approved Indications:*
- GH deficiency
- Turner syndrome
- Chronic kidney disease
- Prader-Willi syndrome
- Small for gestational age (SGA) without catch-up
- Idiopathic short stature (height <-2.25 SD)
- SHOX deficiency
- Noonan syndrome

*Expected Response:*
| Condition | First-Year Velocity Gain |
|-----------|-------------------------|
| GH deficiency | +4-6 cm/year |
| Turner syndrome | +2-4 cm/year |
| Idiopathic short stature | +1-3 cm/year |
| SGA | +2-3 cm/year |

*Monitoring on GH:*
- Height velocity q3-6 months
- IGF-1 levels (target upper normal)
- Bone age annually
- Glucose monitoring (GH → insulin resistance)
- Scoliosis monitoring (Prader-Willi)

**Advanced Nutritional Growth Assessment:**

*Catch-Up Growth:*
| Setting | Expected Pattern |
|---------|------------------|
| Preterm | 40 weeks - 2 years for weight, up to 3 years for head |
| Post-illness | Rapid, exceeds baseline velocity |
| Post-malnutrition | Weight first, then height |
| Post-celiac treatment | Significant in first 1-2 years |

*Refeeding Considerations:*
- Avoid refeeding syndrome in severe malnutrition
- Gradual caloric increase
- Monitor phosphorus, potassium, magnesium
- Thiamine supplementation

**Obesity Evaluation:**

*Screening for Comorbidities:*
| Test | When to Screen |
|------|----------------|
| Lipid panel | All with BMI ≥85th at age 10+ |
| Fasting glucose, HbA1c | BMI ≥85th + risk factors, or ≥95th |
| ALT | BMI ≥85th, annually |
| Sleep study | Symptoms of OSA |
| BP | Every visit |

*Obesity Requiring Further Workup:*
- Rapid onset obesity
- Hyperphagia
- Developmental delay
- Height deceleration with weight gain → endocrine
- Dysmorphic features → genetic syndrome`,
      keyTerms: [
        { term: 'IGF-1', definition: 'Insulin-like Growth Factor 1, mediator of GH effects; used for screening' },
        { term: 'bone age delay', definition: 'Skeletal maturity younger than chronological age, seen in GH deficiency and constitutional delay' },
        { term: 'GH stimulation test', definition: 'Provocative testing using pharmacologic agents to assess GH secretion capacity' },
        { term: 'SGA', definition: 'Small for Gestational Age, birth weight <10th percentile for gestational age' },
        { term: 'catch-up growth', definition: 'Accelerated growth velocity following period of growth restriction' },
      ],
      clinicalNotes: 'GH deficiency diagnosis requires two failed stimulation tests. Always evaluate for Turner syndrome in short girls before extensive workup. IGF-1 alone is insufficient for diagnosis. Consider SHOX deficiency in short children with Madelung deformity or disproportionate shortening.',
    },
    5: {
      level: 5,
      summary: 'Contemporary growth assessment integrates precision diagnostics including advanced genetics, epigenetics, and growth plate biology with emerging therapeutics and evidence-based management algorithms for complex growth disorders.',
      explanation: `**Molecular Biology of Growth:**

**Growth Plate Physiology:**

*Zones of Growth Plate:*
| Zone | Function | Key Regulators |
|------|----------|----------------|
| Resting | Stem cell reserve | PTHrP, SOX9 |
| Proliferative | Chondrocyte division | IHH, FGF |
| Hypertrophic | Matrix production, signaling | VEGF, MMP13 |
| Calcification | Mineralization, vascular invasion | Type X collagen |

*Molecular Regulation:*
- IHH-PTHrP feedback loop controls proliferation
- GH/IGF-1 axis promotes proliferation and hypertrophy
- Thyroid hormone essential for hypertrophic differentiation
- Sex steroids → proliferation initially, then fusion

**Genetic Testing Approaches:**

*Testing Algorithm:*
1. Chromosomal microarray (if dysmorphic/ID)
2. Targeted gene panels (skeletal dysplasia, short stature)
3. Whole exome sequencing (unexplained)
4. Whole genome sequencing (research/complex cases)

*Gene Panels for Short Stature:*
| Panel Type | Genes | Yield |
|------------|-------|-------|
| GH axis | GH1, GHR, GHRHR, IGF1, IGF1R, STAT5B | 5-10% idiopathic |
| SHOX analysis | SHOX deletions/mutations | 2-3% idiopathic |
| Skeletal dysplasia | >100 genes | Variable |
| Comprehensive short stature | 100+ genes | 15-25% |

*Emerging Genetic Discoveries:*
| Gene | Discovery | Clinical Impact |
|------|-----------|-----------------|
| ACAN | Aggrecan mutations | Short stature + early OA |
| NPR2 | Natriuretic peptide receptor | Mild skeletal dysplasia |
| IHH | Indian hedgehog | Brachydactyly + short stature |
| FGFR3 activating | Beyond achondroplasia | Hypochondroplasia spectrum |

**Advanced Endocrine Evaluation:**

*GH-IGF1 Axis Defects:*
| Level | Defect | IGF-1 | GH |
|-------|--------|-------|-----|
| Hypothalamus | GHRH deficiency | Low | Low/normal (to stim) |
| Pituitary | GH gene defect | Low | Low |
| GH action | GHR mutation (Laron) | Low | High |
| IGF-1 | IGF1 gene defect | Low | High |
| IGF-1 action | IGF1R mutation | High | High |

*Testing Refinements:*
- Spontaneous GH sampling vs. stimulation tests
- ALS (acid-labile subunit) deficiency
- GHBP (GH binding protein) for GHR assessment
- IGF-1 generation test

**Novel Therapeutics:**

*Growth Hormone Formulations:*
| Product | Type | Dosing |
|---------|------|--------|
| Standard rhGH | Daily injection | 0.025-0.05 mg/kg/day |
| Long-acting (somapacitan) | Weekly | Once weekly |
| Long-acting (lonapegsomatropin) | Weekly | Once weekly |

*Targeted Therapies:*
| Drug | Mechanism | Indication |
|------|-----------|------------|
| Vosoritide | C-type natriuretic peptide analog | Achondroplasia |
| Mecasermin | Recombinant IGF-1 | Severe primary IGF deficiency |
| Setmelanotide | MC4R agonist | Genetic obesity syndromes |

**Population Health and Growth:**

*Secular Trends:*
- Height increase plateauing in developed countries
- Obesity epidemic affecting growth patterns
- Earlier puberty timing
- Environmental endocrine disruptors concerns

*Growth Monitoring Systems:*
| System | Coverage | Function |
|--------|----------|----------|
| WIC | Low-income | Nutrition support, growth monitoring |
| School health | School-age | Annual BMI screening |
| EHR systems | Clinical | Automatic percentile calculation |
| Growth calculator apps | Parent | Home tracking (variable quality) |

**Research Frontiers:**

*Biomarkers for Growth Prediction:*
- Bone age AI interpretation
- Growth plate imaging (MRI)
- Circulating microRNAs
- Metabolomic signatures

*Interventions Under Investigation:*
| Intervention | Target | Status |
|--------------|--------|--------|
| CNP analogs | Achondroplasia | Approved (vosoritide) |
| Anti-FGFR3 | Achondroplasia | Phase 2-3 trials |
| Gene therapy | GH deficiency | Preclinical |
| Stem cell approaches | Growth plate | Research |

**Special Circumstances:**

*Transition of Care:*
| Condition | Adult Considerations |
|-----------|---------------------|
| GH deficiency | Retesting, adult GH replacement decision |
| Turner syndrome | Cardiovascular surveillance, estrogen replacement |
| Achondroplasia | Spinal stenosis, orthopedic issues |
| Obesity | Metabolic syndrome, bariatric candidacy |

*Growth in Cancer Survivors:*
- Cranial radiation → GH deficiency (>30 Gy dose-dependent)
- Spinal radiation → Sitting height loss
- TBI → Multiple hormone deficiencies
- Chemotherapy → Potential ovarian/testicular effects
- Surveillance guidelines for endocrine screening

**Ethical Considerations:**

*Growth Hormone Treatment Ethics:*
| Issue | Considerations |
|-------|----------------|
| Idiopathic short stature | Medical vs. enhancement |
| Cost-benefit | High cost, modest gains |
| Child assent | Age-appropriate discussion |
| Outcome expectations | Managing unrealistic hopes |
| Height bias | Societal vs. medical |`,
      keyTerms: [
        { term: 'vosoritide', definition: 'C-type natriuretic peptide analog approved for achondroplasia, acts on growth plate' },
        { term: 'IHH-PTHrP loop', definition: 'Indian hedgehog-PTH related peptide feedback system regulating growth plate proliferation' },
        { term: 'ACAN mutations', definition: 'Aggrecan gene defects causing short stature with early osteoarthritis' },
        { term: 'Laron syndrome', definition: 'GH receptor deficiency causing severe short stature with high GH, low IGF-1' },
        { term: 'secular trend', definition: 'Long-term generational changes in growth patterns of a population' },
      ],
      clinicalNotes: `**Clinical Integration:**
- Comprehensive genetic testing increasingly valuable
- Long-acting GH formulations improving adherence
- Vosoritide changing achondroplasia management
- Monitor adult height outcomes for treatment efficacy
- Consider transition planning early for chronic conditions
- Stay current on emerging targeted therapies
- Address ethical considerations in enhancement vs treatment`,
    },
  },

  media: [
    {
      id: 'growth-chart-boys',
      type: 'diagram',
      filename: 'growth-chart-boys-0-36.svg',
      title: 'WHO Growth Chart Boys 0-36 Months',
      description: 'Length-for-age and weight-for-age percentiles for boys',
    },
    {
      id: 'growth-chart-girls',
      type: 'diagram',
      filename: 'growth-chart-girls-0-36.svg',
      title: 'WHO Growth Chart Girls 0-36 Months',
      description: 'Length-for-age and weight-for-age percentiles for girls',
    },
  ],

  citations: [
    {
      id: 'who-growth-standards',
      type: 'website',
      title: 'WHO Child Growth Standards',
      source: 'World Health Organization',
      url: 'https://www.who.int/tools/child-growth-standards',
      accessedDate: '2025-01-24',
    },
    {
      id: 'cdc-growth-charts',
      type: 'website',
      title: 'CDC Growth Charts',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/growthcharts/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-developmental-milestones', targetType: 'concept', relationship: 'related', label: 'Developmental Milestones' },
    { targetId: 'concept-childhood-obesity', targetType: 'condition', relationship: 'related', label: 'Childhood Obesity' },
    { targetId: 'concept-failure-to-thrive', targetType: 'condition', relationship: 'related', label: 'Failure to Thrive' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['pediatrics', 'growth', 'nutrition', 'endocrinology'],
    keywords: ['growth charts', 'percentiles', 'height', 'weight', 'BMI', 'failure to thrive', 'short stature'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
