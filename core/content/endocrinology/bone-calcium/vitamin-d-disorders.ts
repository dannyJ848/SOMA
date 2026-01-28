/**
 * Vitamin D Disorders - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const vitaminDDisorders: EducationalContent = {
  id: 'condition-vitamin-d-disorders',
  type: 'condition',
  name: 'Vitamin D Disorders',
  alternateNames: ['Vitamin D Deficiency', 'Rickets', 'Osteomalacia', 'Hypovitaminosis D'],
  hpoId: 'HP:0100512',

  levels: {
    1: {
      level: 1,
      summary: 'Vitamin D is essential for bone health. Deficiency causes weak bones in children (rickets) and bone pain in adults (osteomalacia).',
      explanation: `Vitamin D helps your body absorb calcium from food. Without enough vitamin D, your bones cannot get strong and hard.

**Why we need vitamin D:**
- Helps absorb calcium from food
- Keeps bones strong
- Supports immune system
- Helps muscles work

**Getting vitamin D:**
- Sunlight exposure (skin makes vitamin D)
- Fatty fish (salmon, tuna)
- Fortified milk and cereals
- Supplements

**Who is at risk for deficiency:**
- People who avoid sun or use sunscreen
- Those with dark skin
- Older adults
- People with certain diseases
- Breastfed infants (if mother is deficient)

**Signs of deficiency:**
- Children: Bowed legs, delayed growth
- Adults: Bone pain, muscle weakness

**Treatment:**
- Vitamin D supplements
- Calcium supplements if needed
- More sun exposure (safely)`,
      keyTerms: [
        { term: 'vitamin D', definition: 'A vitamin your body needs to absorb calcium' },
        { term: 'rickets', definition: 'Soft bones in children from vitamin D deficiency' },
        { term: 'osteomalacia', definition: 'Soft bones in adults from vitamin D deficiency' },
      ],
      analogies: [
        'Vitamin D is like a delivery truck that brings calcium to your bones. Without enough trucks, the calcium cannot get where it needs to go.',
      ],
      examples: [
        'A child with bowed legs who does not play outside may have rickets from vitamin D deficiency.',
      ],
    },
    2: {
      level: 2,
      summary: 'Vitamin D deficiency is defined as 25(OH)D <20 ng/mL, causing secondary hyperparathyroidism, bone loss, and increased fracture risk. Treated with supplementation based on severity.',
      explanation: `## Vitamin D Metabolism

**Sources:**
- D3 (cholecalciferol): Skin synthesis, animal sources
- D2 (ergocalciferol): Plant sources

**Activation Pathway:**
1. Skin/ingestion → Vitamin D3/D2
2. Liver 25-hydroxylase → 25(OH)D (calcidiol) - storage form
3. Kidney 1-alpha-hydroxylase → 1,25(OH)2D (calcitriol) - active form

**Regulation:**
- PTH stimulates 1-alpha-hydroxylase
- Calcium, phosphate, FGF-23 inhibit it

## Classification of Status

| Level | 25(OH)D Concentration |
|-------|----------------------|
| Severe deficiency | <10 ng/mL (<25 nmol/L) |
| Deficiency | <20 ng/mL (<50 nmol/L) |
| Insufficiency | 20-29 ng/mL (50-72 nmol/L) |
| Sufficiency | 30-50 ng/mL (75-125 nmol/L) |
| Potential toxicity | >150 ng/mL (>375 nmol/L) |

## Risk Factors

**Nutritional:**
- Malabsorption (celiac, Crohn, cystic fibrosis)
- Bariatric surgery
- Liver disease
- Infants (exclusively breastfed)

**Decreased Synthesis:**
- Limited sun exposure
- Dark skin (melanin blocks UV)
- Sunscreen use
- Latitude/geography
- Season (winter)
- Aging (less efficient skin synthesis)

**Increased Loss:**
- Nephrotic syndrome
- Certain medications (anticonvulsants, glucocorticoids)

## Clinical Manifestations

**Children (Rickets):**
- Growth retardation
- Bone deformities (bowed legs, rachitic rosary)
- Delayed fontanelle closure
- Muscle weakness
- Seizures (hypocalcemia)

**Adults (Osteomalacia):**
- Diffuse bone pain
- Proximal muscle weakness
- Increased fracture risk
- Waddling gait`,
      keyTerms: [
        { term: '25(OH)D', definition: '25-hydroxyvitamin D; best measure of vitamin D status' },
        { term: 'calcitriol', definition: 'Active form of vitamin D (1,25-dihydroxyvitamin D)' },
        { term: 'FGF-23', definition: 'Fibroblast growth factor 23; regulates phosphate and vitamin D' },
      ],
    },
    3: {
      level: 3,
      summary: 'Vitamin D deficiency diagnosis requires measurement of 25(OH)D, evaluation for secondary hyperparathyroidism, and investigation of underlying causes. Treatment protocols vary by severity and underlying condition.',
      explanation: `## Diagnosis

**Laboratory Findings:**
| Parameter | Finding |
|-----------|---------|
| 25(OH)D | Low (<20 ng/mL) |
| PTH | Elevated (secondary hyperparathyroidism) |
| Calcium | Low-normal |
| Phosphate | Low or low-normal |
| Alkaline phosphatase | Elevated |
| 1,25(OH)2D | Variable (may be low or normal) |

**Radiographic Findings:**
- Children: Cupping/fraying of metaphyses, rachitic rosary
- Adults: Looser zones (pseudofractures), osteopenia
- DXA: Low BMD

## Treatment

**Repletion Protocols:**

*Severe Deficiency (<10 ng/mL):*
- D2 or D3: 50,000 IU weekly x 6-8 weeks
- Then maintenance

*Moderate Deficiency (10-20 ng/mL):*
- 6,000-10,000 IU daily x 8-12 weeks
- Or 50,000 IU weekly x 4-8 weeks

*Maintenance:*
- 1,000-2,000 IU daily
- Or 50,000 IU every 2-4 weeks

**Special Populations:**
- Obesity: Higher doses needed (sequestration in fat)
- Malabsorption: Higher doses, or calcitriol
- CKD: Active vitamin D (calcitriol)

**Monitoring:**
- Recheck 25(OH)D in 8-12 weeks
- Target: >30 ng/mL
- Check calcium (risk of hypercalcemia)
- PTH should normalize

## Vitamin D Resistance

**Hereditary Vitamin D-Resistant Rickets (HVDRR):**
- Vitamin D receptor mutations
- Autosomal recessive
- Severe rickets, alopecia
- Requires high-dose calcium

**Vitamin D-Dependent Rickets Type 1:**
- 1-alpha-hydroxylase deficiency
- Treat with calcitriol

**Vitamin D-Dependent Rickets Type 2:**
- VDR mutations (same as HVDRR)
- Calcitriol ineffective, requires IV calcium`,
      keyTerms: [
        { term: 'secondary hyperparathyroidism', definition: 'Elevated PTH in response to low calcium/vitamin D' },
        { term: 'HVDRR', definition: 'Hereditary vitamin D-resistant rickets' },
        { term: 'rachitic rosary', definition: 'Beading of ribs at costochondral junctions in rickets' },
      ],
      clinicalNotes: 'Check PTH along with vitamin D - secondary hyperparathyroidism indicates significant deficiency with bone effects.',
    },
    4: {
      level: 4,
      summary: 'Advanced vitamin D management includes recognition of extraskeletal effects, treatment of deficiency in specific populations (CKD, malabsorption, obesity), and understanding of vitamin D toxicity and its management.',
      explanation: `## Extraskeletal Effects

**Immune System:**
- Modulates innate and adaptive immunity
- Deficiency associated with increased infections
- Autoimmune disease correlation
- May influence COVID-19 outcomes (controversial)

**Cardiovascular:**
- RAAS modulation
- Endothelial function
- Deficiency associated with hypertension, CVD
- Supplementation trials mixed results

**Cancer:**
- Colorectal cancer: Strongest evidence for benefit
- Other cancers: Inconsistent data
- VITAL trial showed no reduction

**Diabetes:**
- Beta cell function
- Insulin sensitivity
- Prevention trials ongoing

**Neurological:**
- Depression association
- Cognitive function
- Multiple sclerosis risk

## Special Populations

**Chronic Kidney Disease:**
- Decreased 1-alpha-hydroxylation
- Treat with active vitamin D (calcitriol, paricalcitol)
- Monitor calcium, phosphate, PTH

**Obesity:**
- Vitamin D sequestered in adipose tissue
- Require 2-3x higher doses
- May need 6,000-10,000 IU daily

**Malabsorption:**
- Bariatric surgery patients
- Celiac, IBD, CF
- Higher doses needed
- Consider calcitriol

**Pregnancy:**
- Important for fetal bone development
- 4,000-6,000 IU daily may be needed
- Reduces preeclampsia risk (some studies)

## Vitamin D Toxicity

**Mechanism:**
- Excess vitamin D → hypercalcemia
- Usually from over-supplementation
- Very difficult from sun exposure alone

**Manifestations:**
- Hypercalcemia symptoms
- Nausea, vomiting, confusion
- Nephrolithiasis
- Nephrocalcinosis
- Vascular calcification

**Treatment:**
- Stop vitamin D
- Hydration
- Glucocorticoids (reduce calcium absorption)
- Bisphosphonates (if severe)
- Calcitonin (short-term)

**Prevention:**
- Do not exceed 4,000 IU daily long-term without monitoring
- Check 25(OH)D if taking high doses
- Monitor calcium`,
      keyTerms: [
        { term: 'vitamin D toxicity', definition: 'Hypercalcemia from excessive vitamin D intake' },
        { term: 'calcitriol', definition: 'Active 1,25-dihydroxyvitamin D used in CKD' },
        { term: 'VITAL trial', definition: 'Large RCT of vitamin D supplementation' },
      ],
      clinicalNotes: 'Vitamin D toxicity is rare but can occur with prolonged high-dose supplementation. Always check 25(OH)D and calcium in patients taking >4,000 IU daily.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vitamin D research addresses optimal levels controversy, pharmacogenomics of vitamin D metabolism, novel assays for measurement, and precision supplementation strategies based on individual factors.',
      explanation: `## Optimal Level Controversy

**Debate:**
- Institute of Medicine: >20 ng/mL sufficient
- Endocrine Society: >30 ng/mL optimal
- Evidence for bone health supports >20 ng/mL
- Extraskeletal benefits unclear

**Individual Variation:**
- Response to supplementation varies 2-3 fold
- Factors: BMI, genetics, baseline level, adherence

## Pharmacogenomics

**GC Gene:**
- Codes for vitamin D binding protein (DBP)
- Variants affect total 25(OH)D levels
- May affect bioavailable vitamin D

**CYP2R1:**
- Hepatic 25-hydroxylase
- Variants affect conversion efficiency

**CYP27B1:**
- Renal 1-alpha-hydroxylase
- Variants affect active hormone production

**VDR Polymorphisms:**
- BsmI, FokI, TaqI, ApaI
- May affect bone response
- Results inconsistent

## Measurement Advances

**LC-MS/MS:**
- Gold standard for 25(OH)D measurement
- Separates D2 and D3
- Detects C3-epimer interference

**Free/Bioavailable Vitamin D:**
- Calculation based on DBP and albumin
- May better reflect tissue availability
- Research ongoing

**1,25(OH)2D Measurement:**
- Not useful for deficiency (normal until severe)
- Useful for:
  - Granulomatous disease (elevated)
  - 1-alpha-hydroxylase deficiency
  - VDR disorders

## Precision Supplementation

**Tailored Dosing:**
- Baseline level
- Target level
- Body weight
- Absorption capacity
- Genetic factors (emerging)

**Formulations:**
- D2 vs D3 (D3 slightly more effective)
- Daily vs weekly vs monthly (comparable)
- Oil-based vs dry (oil better for malabsorption)

## Research Frontiers

**Analog Development:**
- Non-calcemic analogs for immune effects
- Tissue-specific activators

**Drug Interactions:**
- Enzyme inducers (anticonvulsants, rifampin)
- Glucocorticoids
- Orlistat, cholestyramine

**Future Directions:**
- Individualized supplementation algorithms
- Integration with microbiome research
- Long-term outcome studies
- Combination therapies for osteoporosis`,
      keyTerms: [
        { term: 'vitamin D binding protein', definition: 'Protein transporting vitamin D in blood; genetic variants affect levels' },
        { term: 'LC-MS/MS', definition: 'Liquid chromatography-mass spectrometry; gold standard vitamin D assay' },
        { term: 'C3-epimer', definition: 'Isomer that can interfere with some vitamin D assays' },
      ],
      clinicalNotes: 'The optimal vitamin D level remains controversial. For bone health, >20 ng/mL is sufficient; >30 ng/mL may be preferred for extraskeletal effects but evidence is weaker.',
    },
  },

  media: [],
  citations: [
    {
      id: 'holick-vitamin-d-2007',
      type: 'article',
      title: 'Vitamin D Deficiency',
      source: 'New England Journal of Medicine',
      authors: ['Holick MF'],
    },
    {
      id: 'iom-vitamin-d-2011',
      type: 'article',
      title: 'Dietary Reference Intakes for Calcium and Vitamin D',
      source: 'Institute of Medicine',
      authors: ['Ross AC', 'Manson JE', 'Abrams SA', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
    { targetId: 'condition-hyperparathyroidism', targetType: 'condition', relationship: 'related', label: 'Hyperparathyroidism' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'nutrition'],
    keywords: ['vitamin D', 'rickets', 'osteomalacia', '25-OH vitamin D', 'calcium'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pediatrics', 'endocrinology'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default vitaminDDisorders;
