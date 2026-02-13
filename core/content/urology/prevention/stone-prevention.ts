/**
 * Stone Prevention - Educational Content
 */

import { EducationalContent } from '../../types';

export const stonePrevention: EducationalContent = {
  id: 'prevention-stone-prevention',
  type: 'topic',
  name: 'Stone Prevention',
  alternateNames: ['Kidney Stone Prevention', 'Nephrolithiasis Prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Kidney stones can often be prevented by drinking enough water, eating less salt, and following your doctor\'s dietary advice.',
      explanation: `If you've had a kidney stone, you're at higher risk for another one. Prevention is key.

**Stay Hydrated (Most Important):**
- Drink 2.5-3 liters of fluids daily
- Goal: Make 2+ liters of urine per day
- Urine should be light yellow or clear
- Water is best, but lemonade also helps

**Watch Your Diet:**
- Reduce salt (sodium) intake
- Limit animal protein (meat)
- Eat plenty of fruits and vegetables
- Get enough calcium (from food, not supplements)
- Limit high-oxalate foods if needed

**Foods High in Oxalate:**
- Spinach, rhubarb, beets
- Nuts (especially almonds)
- Chocolate
- Tea

**Medications May Help:**
- Thiazides (reduce calcium in urine)
- Potassium citrate (makes urine less acidic)
- Allopurinol (for uric acid stones)

**Pass Stones for Analysis:**
- Strain your urine when passing a stone
- Knowing the type helps with prevention`,
      keyTerms: [
        { term: 'hydration', definition: 'Drinking enough fluids to keep urine dilute' },
        { term: 'oxalate', definition: 'Substance in foods that can form stones with calcium' },
        { term: 'stone analysis', definition: 'Laboratory test to identify stone composition' },
      ],
      analogies: [
        'Diluting urine is like adding water to salt water - less likely to form crystals.',
      ],
      examples: [
        'Adding lemon to water provides citrate, which helps prevent calcium stones.',
      ],
    },
    2: {
      level: 2,
      summary: 'Stone prevention is based on metabolic evaluation, targeting specific abnormalities through fluid intake, dietary modifications, and pharmacotherapy.',
      explanation: `## Universal Recommendations

**Fluid Intake:**
- Goal: >2.5 L urine output daily
- Evenly distributed throughout day
- Include fluids at bedtime

**Dietary Sodium:**
- <2300 mg/day (ideally <1500 mg)
- Reduces urinary calcium
- Read food labels carefully

**Protein Intake:**
- Moderate animal protein (0.8-1.0 g/kg/day)
- Reduces acid load
- Consider plant proteins

**Calcium Intake:**
- 1000-1200 mg/day FROM FOOD
- Binds oxalate in gut
- Supplements may increase risk

## 24-Hour Urine Analysis

**Key Measurements:**
- Urine volume (>2.5 L goal)
- Calcium (>250 mg women, >300 mg men = hypercalciuria)
- Oxalate (>40 mg = hyperoxaluria)
- Citrate (<320 mg = hypocitraturia)
- Uric acid (>800 mg women, >750 mg men)
- Sodium (marker of salt intake)
- pH

## Targeted Treatment

**Hypercalciuria:**
- Low sodium diet
- Thiazide diuretics

**Hyperoxaluria:**
- Low oxalate diet
- Calcium with meals
- Pyridoxine (primary hyperoxaluria)

**Hypocitraturia:**
- Potassium citrate 30-60 mEq/day
- Increase fruits and vegetables

**Low Urine Volume:**
- Increase fluid intake
- Set reminders

**Acidic Urine (Uric Acid Stones):**
- Potassium citrate to raise pH to 6.0-6.5
- Reduce purine intake`,
      keyTerms: [
        { term: 'hypercalciuria', definition: 'Excess calcium in urine, most common stone risk factor' },
        { term: 'hypocitraturia', definition: 'Low citrate in urine, reduces stone inhibition' },
        { term: '24-hour urine', definition: 'Test measuring all urine components over a day' },
      ],
      analogies: [
        'Citrate is like a security guard that prevents calcium from forming crystals.',
      ],
    },
    3: {
      level: 3,
      summary: 'Metabolic stone prevention requires understanding supersaturation concepts, stone type-specific interventions, and medication mechanisms.',
      explanation: `## Supersaturation Concept

**Relative Supersaturation:**
- Calculated from 24-hour urine
- Goal: <1 for relevant salt
- Accounts for inhibitors and promoters

**Target Values:**
| Parameter | Goal |
|-----------|------|
| CaOx SS | <4 |
| CaP SS | <1 |
| Uric acid SS | <1 |
| Volume | >2.5 L |
| Citrate | >600 mg |

## Stone Type-Specific Prevention

**Calcium Oxalate:**
- Increase fluids and citrate
- Moderate oxalate reduction
- Calcium with meals
- Thiazides if hypercalciuric

**Calcium Phosphate:**
- Address hyperparathyroidism
- Avoid over-alkalinization
- Treat RTA if present

**Uric Acid:**
- Alkalinize to pH 6.0-6.5
- Reduce purines
- Allopurinol if hyperuricemia

**Cystine:**
- Massive hydration (>3L urine)
- Alkalinize to pH 7.0-7.5
- Thiol drugs (tiopronin, D-penicillamine)

**Struvite:**
- Eradicate infection
- Remove all stone fragments
- Acetohydroxamic acid (rarely)

## Medication Details

**Thiazides:**
- HCTZ 25-50 mg daily
- Chlorthalidone 25 mg daily
- Indapamide 2.5 mg daily
- Monitor K+, Mg++

**Potassium Citrate:**
- 30-60 mEq/day divided
- Take with meals
- GI side effects common
- Wax matrix formulation better tolerated

**Allopurinol:**
- 100-300 mg daily
- Also for hyperuricosuric calcium stones
- Watch for hypersensitivity

## Monitoring

**Follow-Up 24-Hour Urine:**
- 3-6 months after starting therapy
- Annually thereafter
- Adjust based on results`,
      keyTerms: [
        { term: 'supersaturation', definition: 'Measure of crystallization risk in urine' },
        { term: 'thiol drugs', definition: 'Medications that bind cystine to increase solubility' },
        { term: 'acetohydroxamic acid', definition: 'Urease inhibitor for struvite stone prevention' },
      ],
      clinicalNotes: 'Potassium citrate should be avoided in patients with renal insufficiency due to hyperkalemia risk. Use sodium bicarbonate alternative with caution.',
    },
    4: {
      level: 4,
      summary: 'Advanced stone prevention includes complex metabolic disorders, medication optimization, and management of difficult cases.',
      explanation: `## Complex Metabolic Disorders

**Primary Hyperparathyroidism:**
- Elevated PTH and calcium
- Definitive: Parathyroidectomy
- >95% cure rate
- Prevents new stones

**Renal Tubular Acidosis:**
- Type 1 (distal): High urine pH, low citrate
- Potassium citrate replacement
- Treat underlying cause if secondary

**Enteric Hyperoxaluria:**
- Post-bariatric surgery
- Inflammatory bowel disease
- Fat malabsorption
- Treatment: Calcium with meals, low oxalate, oxalate binders

**Primary Hyperoxaluria:**
- Genetic disorders
- Type 1: AGXT deficiency
- Type 2: GRHPR deficiency
- Pyridoxine response (some Type 1)
- May need combined liver-kidney transplant

## Medication Optimization

**When Initial Therapy Fails:**
- Verify compliance
- Check 24-hour urine
- Increase doses
- Add complementary agents

**Combination Therapy:**
- Thiazide + potassium citrate
- Allopurinol + citrate
- Address multiple abnormalities

## Dietary Counseling

**Nutritionist Referral:**
- Complex dietary modifications
- Oxalate restriction details
- Sodium reduction strategies
- Personalized plans

**Dietary Oxalate:**
- Not all high-oxalate foods equal
- Bioavailability varies
- Cooking may reduce oxalate
- Pair with calcium foods

## Special Populations

**Pediatric:**
- Metabolic evaluation mandatory
- Consider genetic causes
- Lifelong prevention

**Pregnancy:**
- Avoid medications if possible
- Hydration focus
- Dietary modifications
- Potassium citrate if needed (safe)

**Chronic Kidney Disease:**
- Avoid potassium citrate (hyperkalemia)
- Adjust medication doses
- Balance stone prevention with CKD management`,
      keyTerms: [
        { term: 'parathyroidectomy', definition: 'Surgical removal of parathyroid gland for hyperparathyroidism' },
        { term: 'enteric hyperoxaluria', definition: 'Increased oxalate absorption due to fat malabsorption' },
        { term: 'primary hyperoxaluria', definition: 'Genetic disorder of oxalate metabolism' },
      ],
      clinicalNotes: 'Bariatric surgery patients have significantly increased stone risk. Ensure aggressive hydration and calcium supplementation with meals.',
    },
    5: {
      level: 5,
      summary: 'Expert stone prevention encompasses emerging therapies, genetic considerations, and optimization of long-term outcomes.',
      explanation: `## Genetic Testing

**Indications:**
- Pediatric stones
- Strong family history
- Recurrent cystine stones
- Primary hyperoxaluria suspected
- 2,8-DHA stones

**Actionable Findings:**
- Primary hyperoxaluria: Lumasiran (RNAi therapy)
- Cystinuria: Aggressive hydration, thiol drugs
- Dent disease: Early intervention

## Emerging Therapies

**Lumasiran:**
- RNAi targeting HAO1
- For primary hyperoxaluria type 1
- Reduces oxalate production
- FDA approved

**Oxalate-Degrading Enzymes:**
- Reloxaliase
- Degrades dietary oxalate
- For enteric hyperoxaluria
- Clinical trials ongoing

**SGLT2 Inhibitors:**
- Incidental stone reduction observed
- Mechanism unclear
- Under investigation

## Microbiome Approaches

**Oxalobacter formigenes:**
- Oxalate-degrading bacterium
- Absent in some stone formers
- Probiotic supplementation studied
- Limited evidence currently

## Long-Term Outcomes

**Prevention Success Metrics:**
- Stone event rate reduction
- 24-hour urine improvements
- Quality of life maintenance
- Medication adherence

**Failures Analysis:**
- Identify non-compliance
- Reassess diagnosis
- Consider rare etiologies

## Comprehensive Programs

**Kidney Stone Prevention Clinics:**
- Multidisciplinary approach
- Dietitian support
- Nurse educators
- Follow-up systems

**Patient Engagement:**
- Mobile apps for tracking
- Hydration reminders
- Diet logging
- Telehealth follow-up

## Research Directions

**Precision Prevention:**
- Genetic risk profiles
- Personalized recommendations
- Biomarker-guided therapy

**Novel Targets:**
- Crystal growth inhibitors
- Adhesion prevention
- Dissolution therapies

**Lifestyle Research:**
- Exercise effects
- Sleep and stone risk
- Comprehensive interventions`,
      keyTerms: [
        { term: 'lumasiran', definition: 'RNAi therapy reducing hepatic oxalate production in PH1' },
        { term: 'reloxaliase', definition: 'Enzyme therapy degrading dietary oxalate in the gut' },
        { term: 'Oxalobacter formigenes', definition: 'Gut bacterium that degrades oxalate' },
      ],
      clinicalNotes: 'Lumasiran has transformed primary hyperoxaluria management, reducing urinary oxalate by >50%. Consider genetic testing for unexplained recurrent stones.',
    },
  },

  media: [],
  citations: [
    {
      id: 'aua-stones-medical',
      type: 'article',
      title: 'Medical Management of Kidney Stones',
      source: 'AUA Guidelines',
    },
  ],
  crossReferences: [
    { targetId: 'condition-kidney-stones', targetType: 'condition', relationship: 'parent', label: 'Kidney Stones' },
  ],
  tags: {
    systems: ['urinary', 'renal'],
    topics: ['prevention', 'stones'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default stonePrevention;
