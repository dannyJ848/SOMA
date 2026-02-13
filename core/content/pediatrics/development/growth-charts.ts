/**
 * Growth Charts
 *
 * Educational content on pediatric growth monitoring including WHO and CDC
 * growth charts, percentile interpretation, z-scores, failure to thrive,
 * obesity screening, and growth velocity assessment.
 */

import { EducationalContent } from '../../types';

export const GROWTH_CHARTS_EXPLAINED: EducationalContent = {
  id: 'pediatrics-growth-charts-comprehensive',
  type: 'concept',
  name: 'Growth Charts',
  nameEs: 'Tablas de Crecimiento',
  alternateNames: [
    'Pediatric growth charts',
    'Growth monitoring',
    'Anthropometric assessment',
    'Growth percentiles',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Growth charts show how your child is growing compared to other children the same age and sex. Doctors use them at every checkup to track height, weight, and head size.',
      explanation: `Doctors measure your child at every checkup and plot these numbers on a special chart called a growth chart. This helps them see if your child is growing in a healthy pattern.

**What Gets Measured**
- **Weight:** How heavy your child is
- **Length/Height:** How tall your child is (lying down for babies, standing up for older children)
- **Head circumference:** The size of your child's head (measured until age 2-3)
- **BMI (Body Mass Index):** A number that compares weight to height (used for children 2 and older)

**What the Lines Mean**
Growth charts have curved lines called percentiles. If your child is at the 50th percentile for weight, it means half of children the same age weigh more and half weigh less. There is no single "perfect" percentile.

**What Matters Most**
- **Staying on their curve:** A child who follows the same percentile line over time is growing well
- **Crossing lines:** If a child's measurements suddenly jump up or drop down across percentile lines, the doctor will want to look into why
- **Head growth in babies:** The head grows quickly in the first year because the brain is growing fast

**When Doctors Are Concerned**
- Weight dropping across two or more percentile lines
- Very rapid weight gain compared to height
- Head growing too fast or too slowly
- Not gaining enough weight in the first few months of life`,
      keyTerms: [
        {
          term: 'percentile',
          definition:
            'A number that shows where your child falls compared to other children. The 75th percentile means your child is bigger than 75 out of 100 children the same age.',
        },
        {
          term: 'growth chart',
          definition:
            'A special graph that doctors use to track a child\'s height, weight, and head size over time',
        },
        {
          term: 'BMI',
          definition:
            'Body Mass Index; a number calculated from height and weight that helps determine if a child is at a healthy weight',
        },
      ],
      analogies: [
        'A growth chart is like a road map for your child\'s growth. It shows the expected path and helps the doctor spot any detours.',
        'Percentiles are like lanes on a highway. What matters is staying in your lane, not which lane you are in.',
      ],
      patientCounselingPoints: [
        'A child at the 25th percentile is not "too small." What matters is consistent growth along their own curve.',
        'Breastfed babies often grow differently than formula-fed babies in the first year.',
        'If your child\'s growth crosses percentile lines, the doctor may want to investigate further.',
        'Head circumference is measured because rapid or slow head growth can signal brain problems.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Pediatric growth monitoring uses WHO growth standards (birth to 2 years) and CDC growth references (2-20 years) to track weight, length/height, head circumference, and BMI.',
      explanation: `**Types of Growth Charts**

| Chart | Ages | Standard | Best For |
|-------|------|----------|----------|
| WHO Growth Standards | 0-24 months | International, breastfed-infant based | All children birth to 2 |
| CDC Growth References | 2-20 years | US population-based | Children and adolescents 2-20 |
| Specialized charts | Variable | Condition-specific | Down syndrome, Turner syndrome, premature infants |

**Growth Parameters**
| Measurement | Ages | Chart Type |
|------------|------|-----------|
| Weight-for-age | 0-20 years | WHO (0-2), CDC (2-20) |
| Length-for-age (recumbent) | 0-36 months | WHO |
| Stature-for-age (standing) | 2-20 years | CDC |
| Weight-for-length | 0-36 months | WHO |
| Head circumference-for-age | 0-36 months | WHO |
| BMI-for-age | 2-20 years | CDC |

**Key Percentile Cutoffs**
| Percentile | Interpretation |
|-----------|---------------|
| <3rd | Underweight or short stature (evaluate) |
| 3rd-85th | Normal range |
| 85th-95th | Overweight (BMI) |
| >95th | Obese (BMI); tall stature (height) |

**Failure to Thrive (FTT)**
- Weight <3rd percentile OR weight crossing down through 2 major percentile lines
- Most common cause: Inadequate caloric intake
- Other causes: Malabsorption (celiac, cystic fibrosis), chronic illness, neglect
- Initial workup: Dietary history, CBC, CMP, celiac screen, urinalysis, thyroid function

**Growth Patterns to Recognize**
| Pattern | Suggests |
|---------|---------|
| Weight dropping, length preserved | Nutritional deficiency (FTT) |
| Weight and length both dropping | Chronic illness or endocrine disorder |
| Weight crossing up, length normal | Excess caloric intake, developing obesity |
| Head circumference crossing up | Hydrocephalus (evaluate urgently) |
| Head circumference crossing down | Microcephaly (evaluate for genetic/infectious cause) |

**Mid-Parental Height (Target Height)**
- Boys: (Mother's height + 5 inches + Father's height) / 2
- Girls: (Father's height - 5 inches + Mother's height) / 2
- Expected adult height within +/- 2 inches of mid-parental height`,
      keyTerms: [
        {
          term: 'WHO growth standards',
          definition:
            'International growth charts based on healthy breastfed infants from 6 countries, used for children birth to 24 months',
        },
        {
          term: 'CDC growth references',
          definition:
            'US population-based growth charts used for children and adolescents ages 2-20 years',
        },
        {
          term: 'failure to thrive',
          definition:
            'Poor weight gain defined as weight below the 3rd percentile or crossing down through 2 major percentile lines',
        },
        {
          term: 'BMI-for-age',
          definition:
            'Body Mass Index plotted on age- and sex-specific charts for children 2-20 years; screens for overweight and obesity',
        },
        {
          term: 'mid-parental height',
          definition:
            'Estimate of expected adult height calculated from parents\' heights; helps determine if short stature is familial',
        },
      ],
      analogies: [
        'WHO charts describe how children SHOULD grow (the ideal), while CDC charts describe how a large group of US children DID grow (a reference).',
        'Failure to thrive is like a plant that stops growing. The first thing to check is whether it is getting enough water and sunlight.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Clinical growth assessment integrates z-scores, growth velocity, bone age, and endocrine evaluation to differentiate normal variants from pathological growth disorders.',
      explanation: `**Z-Scores vs. Percentiles**

Z-scores express distance from the median in standard deviations:
| Z-Score | Approx. Percentile | Significance |
|---------|-------------------|-------------|
| -3 | 0.1st | Severe growth failure |
| -2 | 2.3rd | Growth failure (WHO definition) |
| -1 | 15.9th | Low normal |
| 0 | 50th | Median |
| +1 | 84.1th | High normal |
| +2 | 97.7th | Above normal |
| +3 | 99.9th | Significantly above normal |

Z-scores are preferred for severe growth abnormalities because they provide linear scaling at the extremes.

**Growth Velocity**

Growth velocity (cm/year) is more sensitive than single measurements:
| Age | Expected Velocity |
|-----|------------------|
| 0-12 months | 25 cm/year |
| 1-2 years | 12.5 cm/year |
| 2-4 years | 7-8 cm/year |
| 4-puberty | 5-6 cm/year |
| Pubertal spurt (girls) | 8-12 cm/year (peak ~12 years) |
| Pubertal spurt (boys) | 10-14 cm/year (peak ~14 years) |

Declining velocity warrants investigation even if absolute height is within normal percentiles.

**Short Stature Evaluation**

| Category | Features | Bone Age | Growth Velocity |
|----------|----------|----------|-----------------|
| Familial short stature | Short parents, normal velocity | Normal | Normal |
| Constitutional delay | Late puberty, family history | Delayed | Normal (slow peri-pubertal) |
| GH deficiency | Cherubic facies, central adiposity | Delayed | Decreased (<4 cm/yr) |
| Hypothyroidism | Fatigue, constipation | Delayed | Decreased |
| Turner syndrome (45,X) | Girls: webbed neck, amenorrhea | Delayed | Decreased |
| Celiac disease | GI symptoms or asymptomatic | Delayed | Decreased |
| Cushing syndrome | Central obesity, striae | Delayed | Severely decreased |

*Short Stature Workup:*
1. Growth velocity (minimum 6-month interval)
2. Bone age (left hand/wrist X-ray, Greulich-Pyle atlas)
3. Labs: CBC, CMP, ESR/CRP, celiac screen (tTG-IgA), IGF-1, free T4/TSH
4. If female: karyotype (Turner syndrome)
5. If low IGF-1 and low velocity: GH stimulation testing

**Bone Age Interpretation**
| Finding | Interpretation |
|---------|---------------|
| Bone age = chronologic age | Familial short stature |
| Bone age < chronologic age | Constitutional delay or pathology |
| Bone age > chronologic age | Precocious puberty, obesity, hyperthyroidism |

**Obesity Assessment**
| BMI Percentile | Classification |
|---------------|---------------|
| 85th-94th | Overweight |
| 95th-99th | Class I obesity |
| 120-139% of 95th | Class II (severe) |
| >140% of 95th | Class III (severe) |`,
      keyTerms: [
        {
          term: 'z-score',
          definition:
            'Standard deviation score expressing distance from the median; preferred for tracking severe growth abnormalities due to linear scaling',
        },
        {
          term: 'growth velocity',
          definition:
            'Rate of growth over time (cm/year); declining velocity warrants investigation even if height percentile appears normal',
        },
        {
          term: 'bone age',
          definition:
            'Radiographic skeletal maturity assessment using left hand/wrist X-ray and Greulich-Pyle atlas; indicates remaining growth potential',
        },
        {
          term: 'constitutional delay',
          definition:
            'Normal variant with delayed puberty and growth spurt; bone age delayed; adult height typically normal',
        },
        {
          term: 'IGF-1',
          definition:
            'Insulin-like Growth Factor 1; liver-produced mediator of growth hormone; screening test for GH deficiency',
        },
        {
          term: 'Turner syndrome',
          definition:
            '45,X chromosomal condition in females causing short stature, ovarian failure, and characteristic features',
          pronunciation: 'TUR-ner',
        },
      ],
      clinicalNotes:
        'Growth velocity is the most important parameter. A normal percentile with declining velocity will be missed without serial measurements. Always obtain bone age for short stature. In girls with unexplained short stature, obtain karyotype to rule out Turner syndrome even without classic features. The 2023 AAP obesity guidelines endorse pharmacotherapy including GLP-1 agonists for adolescents 12+ with severe obesity.',
    },
    4: {
      level: 4,
      summary:
        'Advanced growth assessment encompasses GH-IGF1 axis physiology, stimulation testing protocols, genetic short stature syndromes, and evolving pharmacologic interventions.',
      explanation: `**GH-IGF1 Axis Physiology**

- Pulsatile GH release from anterior pituitary somatotrophs
- Hypothalamic regulation: GHRH (stimulatory) vs. somatostatin (inhibitory)
- GH binds hepatic GH receptors, stimulating IGF-1 production
- IGF-1 mediates growth-promoting effects at the epiphyseal growth plate
- Negative feedback: IGF-1 inhibits GH secretion

*Growth Plate Biology:*
| Zone | Function |
|------|----------|
| Resting (germinal) | Stem cell reservoir |
| Proliferative | Chondrocyte division (GH-dependent) |
| Hypertrophic | Chondrocyte enlargement (IGF-1-dependent) |
| Calcification | Mineralization and vascular invasion |

Epiphyseal fusion occurs under estrogen influence (in both sexes).

**GH Stimulation Testing**
| Test | Stimulus | GH Cutoff |
|------|----------|-----------|
| Insulin tolerance | Hypoglycemia | <10 ng/mL (gold standard) |
| Arginine | Amino acid | <10 ng/mL |
| Clonidine | Alpha-2 agonist | <10 ng/mL |
| Glucagon | Counterregulatory | <10 ng/mL |

Two failed tests required for diagnosis. Must prime with sex steroids in peripubertal children. MRI of pituitary mandatory if confirmed.

**Genetic Short Stature Syndromes**
| Syndrome | Gene | Features | Treatment |
|----------|------|----------|-----------|
| Turner (45,X) | Monosomy X | Short stature, ovarian failure, cardiac | GH + estrogen |
| Noonan | PTPN11, SOS1 | Pulmonary stenosis, webbed neck | GH approved |
| Silver-Russell | IGF2, 11p15 | SGA, limb asymmetry | GH approved |
| Prader-Willi | 15q11 deletion | Hypotonia, obesity | GH (body composition) |
| SHOX deficiency | SHOX | Madelung deformity | GH approved |
| Achondroplasia | FGFR3 | Rhizomelic short limbs | Vosoritide approved |

**FDA-Approved GH Indications**
| Indication | Dose (mg/kg/day) |
|-----------|-----------------|
| GH deficiency | 0.024-0.034 |
| Turner syndrome | 0.045-0.050 |
| Chronic renal insufficiency | 0.045-0.050 |
| Prader-Willi syndrome | 0.024 |
| SGA without catch-up | 0.048 |
| Idiopathic short stature (<-2.25 SD) | 0.037-0.047 |
| Noonan syndrome | 0.066 |

**Pediatric Obesity Pharmacotherapy (AAP 2023)**
| Agent | Age | Mechanism | BMI Reduction |
|-------|-----|-----------|--------------|
| Orlistat | >12 yr | Lipase inhibitor | ~3% |
| Liraglutide | >12 yr | GLP-1 agonist | 4-5% |
| Semaglutide | >12 yr | GLP-1 agonist | 16% |
| Setmelanotide | >6 yr | MC4R agonist | Genetic obesity only |
| Bariatric surgery | Tanner 4-5 | Sleeve, RYGB | 25-30% |`,
      keyTerms: [
        {
          term: 'GH-IGF1 axis',
          definition:
            'Neuroendocrine pathway: GHRH stimulates pituitary GH, which stimulates hepatic IGF-1 production mediating growth plate effects',
        },
        {
          term: 'GH stimulation test',
          definition:
            'Provocative test assessing pituitary GH secretory capacity; two failed tests with different stimuli required for diagnosis',
        },
        {
          term: 'epiphyseal fusion',
          definition:
            'Growth plate closure under estrogen influence marking end of linear growth; earlier in precocious puberty',
        },
        {
          term: 'vosoritide',
          definition:
            'C-type natriuretic peptide analog approved for achondroplasia; modulates FGFR3 signaling to promote bone growth',
        },
        {
          term: 'idiopathic short stature',
          definition:
            'Height below -2.25 SD without identifiable cause; FDA-approved GH indication though cost-effectiveness is debated',
        },
        {
          term: 'sex steroid priming',
          definition:
            'Estrogen or testosterone given before GH stimulation testing in peripubertal children to reduce false-positive results',
        },
      ],
      clinicalNotes:
        'Sex steroid priming is essential in peripubertal children to avoid false GH deficiency diagnosis. Ectopic posterior pituitary on MRI strongly predicts permanent GH deficiency. Semaglutide showed 16% BMI reduction in STEP TEENS. The combination of GH + aromatase inhibitors for height augmentation remains controversial due to uncertain long-term safety.',
    },
    5: {
      level: 5,
      summary:
        'Expert growth assessment incorporates genomic diagnostics, next-generation GH therapies, epigenetic programming, and global nutrition surveillance.',
      explanation: `**Genomics of Short Stature**

| Gene | Pathway | Phenotype |
|------|---------|-----------|
| SHOX | Growth plate development | Leri-Weill dyschondrosteosis, ISS |
| NPR2 | Natriuretic peptide signaling | Heterozygous = ISS; homozygous = acromesomelic dysplasia |
| ACAN | Aggrecan (cartilage matrix) | Short stature with advanced bone age, early-onset OA |
| IHH | Indian Hedgehog signaling | Brachydactyly type A1 |
| FGFR3 | Growth plate regulation | Achondroplasia spectrum |

Exome sequencing identifies monogenic cause in 20-40% of severe unexplained short stature.

**Next-Generation Growth Therapies**
| Agent | Mechanism | Advantage | Status |
|-------|-----------|-----------|--------|
| Somapacitan | Long-acting GH (albumin-binding) | Weekly injection | FDA approved (adults) |
| Lonapegsomatropin (Skytrofa) | PEGylated GH | Weekly injection | FDA approved (pediatric GHD) |
| Somatrogon | GH fusion protein | Weekly | Approved (some countries) |
| Vosoritide | CNP analog | 1.6 cm/yr additional growth | Approved (achondroplasia) |
| TransCon GH | Prodrug GH | Weekly, sustained release | Phase 3 |

**Epigenetic Influences on Growth**
| Factor | Mechanism | Significance |
|--------|-----------|-------------|
| Genomic imprinting (IGF2, H19) | Parent-of-origin expression | Silver-Russell, Beckwith-Wiedemann |
| Maternal nutrition | Fetal programming | SGA, metabolic risk (Barker hypothesis) |
| Early-life microbiome | GH-IGF1 axis modulation | Microbial metabolites influence IGF-1 |
| Psychosocial deprivation | Functional GH suppression | Reversible with environmental change |

**Global Growth Surveillance**
- WHO MGRS: 8,440 children from 6 countries; prescriptive standard
- Stunting (length/height-for-age <-2 SD): 149 million children globally
- Wasting (weight-for-length <-2 SD): 45 million globally
- Double burden of malnutrition: simultaneous undernutrition and obesity in LMICs

**Emerging Frontiers**
| Topic | Status |
|-------|--------|
| AI bone age assessment | FDA-cleared; concordant with expert reads |
| Pharmacogenomics of GH response | GHR d3-polymorphism predicts better response |
| Machine learning height prediction | Serial measurements + genetic data |
| Aromatase inhibitors for height | Off-label; long-term safety unclear |
| Catch-up growth tension in SGA | Prevents short stature vs. increases metabolic risk |`,
      keyTerms: [
        {
          term: 'ACAN',
          definition:
            'Aggrecan gene; heterozygous mutations cause short stature with advanced bone age and early-onset osteoarthritis; common monogenic cause of ISS',
        },
        {
          term: 'lonapegsomatropin',
          definition:
            'FDA-approved weekly PEGylated growth hormone for pediatric GH deficiency; reduces injection burden from daily to weekly',
        },
        {
          term: 'Barker hypothesis',
          definition:
            'Developmental origins of disease; fetal undernutrition programs lifelong metabolic risk, explaining increased cardiovascular risk in SGA individuals',
        },
        {
          term: 'stunting',
          definition:
            'Chronic undernutrition (height-for-age <-2 SD); affects 149 million children globally; largely irreversible after age 2',
        },
        {
          term: 'double burden of malnutrition',
          definition:
            'Coexistence of undernutrition and obesity within the same population or household; growing challenge in LMICs',
        },
      ],
      clinicalNotes: `**Expert Integration:**
- ACAN mutations are among the most common monogenic causes of short stature; short stature with ADVANCED bone age should prompt ACAN testing.
- Weekly GH formulations are transforming adherence but raise questions about sustained vs. pulsatile GH exposure.
- Vosoritide for achondroplasia is the first targeted skeletal dysplasia therapy.
- AI bone age is FDA-cleared and concordant with expert reads.
- For SGA: tension between promoting catch-up (prevent short stature) and limiting it (reduce metabolic programming risk) remains unresolved.`,
    },
  },

  media: [
    {
      id: 'who-growth-chart-sample',
      type: 'diagram',
      filename: 'who-weight-for-age-boys.svg',
      title: 'WHO Weight-for-Age Growth Chart (Boys)',
      description: 'WHO growth chart showing percentile curves for weight-for-age boys birth to 24 months',
    },
    {
      id: 'gh-igf1-axis-diagram',
      type: 'diagram',
      filename: 'gh-igf1-axis-diagram.svg',
      title: 'GH-IGF1 Axis',
      description: 'Growth hormone signaling pathway from hypothalamus through pituitary to growth plate',
    },
  ],

  citations: [
    {
      id: 'who-growth-standards',
      type: 'website',
      title: 'WHO Child Growth Standards',
      source: 'World Health Organization',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      id: 'aap-obesity-2023',
      type: 'article',
      title: 'Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents With Obesity',
      authors: ['Hampl, S.E.', 'Hassink, S.G.', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2022-060640',
    },
    {
      id: 'nelson-growth',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier',
      chapter: 'Assessment of Growth',
      license: 'Proprietary',
    },
  ],

  crossReferences: [
    { targetId: 'pediatrics-dev-milestones', targetType: 'topic', relationship: 'sibling', label: 'Developmental Milestones' },
    { targetId: 'pediatrics-newborn-screening', targetType: 'topic', relationship: 'related', label: 'Newborn Screening' },
  ],

  tags: {
    systems: ['endocrine', 'musculoskeletal'],
    topics: ['pediatrics', 'endocrinology', 'nutrition', 'genetics'],
    keywords: ['growth charts', 'percentiles', 'z-score', 'failure to thrive', 'short stature', 'obesity', 'BMI', 'growth hormone', 'IGF-1', 'bone age', 'Turner syndrome'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'endocrinology', 'family medicine'] },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
