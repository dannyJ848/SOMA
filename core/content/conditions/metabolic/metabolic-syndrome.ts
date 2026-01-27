/**
 * Metabolic Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const metabolicSyndrome: EducationalContent = {
  id: 'condition-metabolic-syndrome',
  type: 'condition',
  name: 'Metabolic Syndrome',
  alternateNames: ['Syndrome X', 'Insulin Resistance Syndrome', 'Dysmetabolic Syndrome'],
  hpoId: 'HP:0000825',

  levels: {
    1: {
      level: 1,
      summary: 'Metabolic syndrome is a group of health problems that occur together, increasing your risk of heart disease, stroke, and diabetes.',
      explanation: `Metabolic syndrome is not a single disease but a cluster of conditions that happen together. When you have several of these problems, your risk of serious health issues increases significantly.

**The five parts of metabolic syndrome:**
- Large waist size (belly fat)
- High blood pressure
- High blood sugar
- High triglycerides (a type of fat in blood)
- Low HDL cholesterol ("good" cholesterol)

**Why it matters:**
Having three or more of these conditions means you are at much higher risk for:
- Heart attacks
- Stroke
- Developing type 2 diabetes

**What you can do:**
- Lose weight if overweight
- Exercise regularly
- Eat a healthy diet
- Quit smoking
- Take prescribed medications`,
      keyTerms: [
        { term: 'HDL cholesterol', definition: '"Good" cholesterol that helps remove other cholesterol from your body' },
        { term: 'triglycerides', definition: 'A type of fat found in your blood that stores excess energy' },
        { term: 'blood pressure', definition: 'The force of blood pushing against blood vessel walls' },
      ],
      analogies: [
        'Metabolic syndrome is like a car with multiple warning lights on—each problem makes the others worse and increases the chance of a breakdown.',
      ],
      examples: [
        'A man with a waist over 40 inches, high blood pressure, and high blood sugar has metabolic syndrome and needs lifestyle changes to prevent diabetes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Metabolic syndrome is defined by three of five criteria (central obesity, hypertension, hyperglycemia, high triglycerides, low HDL) and confers increased cardiovascular and diabetes risk requiring aggressive lifestyle intervention.',
      explanation: `## Diagnostic Criteria (NCEP ATP III)

Need **3 or more** of the following:

| Criterion | Cutoff |
|-----------|--------|
| Waist circumference | Men: >40 in (102 cm), Women: >35 in (88 cm) |
| Triglycerides | ≥150 mg/dL or on treatment |
| HDL cholesterol | Men: <40 mg/dL, Women: <50 mg/dL or on treatment |
| Blood pressure | ≥130/85 mmHg or on treatment |
| Fasting glucose | ≥100 mg/dL or on treatment |

## Pathophysiology

**Core defect:** Insulin resistance
- Excess abdominal fat releases inflammatory chemicals
- Liver produces too much glucose and triglycerides
- Blood vessels become stiff and narrowed

## Cardiovascular Risk

Metabolic syndrome confers:
- **2x** risk of cardiovascular disease
- **5x** risk of developing type 2 diabetes
- Increased risk of fatty liver disease

## Management

**Lifestyle (first-line):**
- Weight loss (7-10% of body weight)
- 150 minutes/week moderate activity
- DASH or Mediterranean diet
- Limit processed foods and added sugars

**Medical management:**
- Treat each component individually
- Statins for dyslipidemia
- Antihypertensives for BP
- Metformin for prediabetes`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'When cells do not respond properly to insulin, causing higher blood sugar' },
        { term: 'central obesity', definition: 'Excess fat around the abdomen, associated with metabolic dysfunction' },
        { term: 'NCEP ATP III', definition: 'National Cholesterol Education Program Adult Treatment Panel III guidelines' },
      ],
    },
    3: {
      level: 3,
      summary: 'Metabolic syndrome represents a prothrombotic, proinflammatory state driven by visceral adiposity and insulin resistance, with hepatic steatosis, endothelial dysfunction, and dysregulated adipokine secretion contributing to cardiometabolic risk.',
      explanation: `## Pathophysiology

**Visceral Adiposity as Endocrine Organ:**
- Increased free fatty acid flux to liver
- Adipokine dysregulation:
  - ↓ Adiponectin (anti-inflammatory, insulin sensitizer)
  - ↑ Leptin (resistance develops)
  - ↑ TNF-α, IL-6 (pro-inflammatory cytokines)

**Insulin Resistance Cascade:**
- Hepatic: Increased gluconeogenesis, VLDL overproduction
- Muscle: Decreased glucose uptake
- Adipose: Increased lipolysis, more free fatty acids

**Endothelial Dysfunction:**
- Reduced nitric oxide bioavailability
- Increased endothelin-1 (vasoconstriction)
- Prothrombotic state (PAI-1, fibrinogen)

## Clinical Consequences

**Cardiovascular:**
- Accelerated atherosclerosis
- Increased plaque vulnerability
- Heart failure with preserved EF

**Metabolic:**
- NAFLD progression to NASH
- Impaired fasting glucose → T2DM
- Hyperuricemia (gout)

## Risk Assessment

**Framingham Risk Score adjustment:**
- Metabolic syndrome adds equivalent risk as smoking

**Reynolds Risk Score:**
- Includes family history and hs-CRP

## Treatment Approach

**Lifestyle intervention remains cornerstone:**
- Diabetes Prevention Program: 58% risk reduction with lifestyle
- Look AHEAD trial: Significant weight loss and CV benefit

**Pharmacotherapy targets each component:**
- No single drug treats the syndrome`,
      keyTerms: [
        { term: 'adipokines', definition: 'Signaling proteins secreted by adipose tissue regulating metabolism and inflammation' },
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease; fat accumulation in liver unrelated to alcohol' },
        { term: 'PAI-1', definition: 'Plasminogen activator inhibitor-1; promotes clot formation, elevated in metabolic syndrome' },
      ],
      clinicalNotes: 'Screen for NAFLD with liver enzymes in metabolic syndrome. Consider fibroscan for advanced fibrosis risk assessment.',
    },
    4: {
      level: 4,
      summary: 'Contemporary management of metabolic syndrome emphasizes lifestyle medicine as foundational therapy, with individualized risk assessment incorporating coronary artery calcium scoring, biomarkers like hs-CRP and Lp(a), and aggressive treatment of emerging cardiometabolic risk factors.',
      explanation: `## Risk Stratification Beyond Traditional Factors

**Advanced Biomarkers:**
- hs-CRP: Inflammatory risk marker
- Lp(a): Genetic risk factor, treat with PCSK9 inhibitors if elevated
- ApoB: Superior to LDL for particle number
- Lipoprotein insulin resistance score

**Imaging:**
- CAC scoring: Reclassify risk in intermediate patients
- Carotid IMT: Assess subclinical atherosclerosis

## Controversies and Nuances

**Ethnicity-Sific Waist Criteria:**
- South Asian: Men >90 cm, Women >80 cm
- East Asian: Men >85 cm, Women >80 cm
- European: Men >94 cm, Women >80 cm

**Diagnostic Debate:**
- Is metabolic syndrome better than individual risk assessment?
- Some argue it adds little beyond Framingham
- Value in identifying patients for intensive lifestyle

## Pharmacotherapy Considerations

**Statins:** First-line regardless of LDL level
**Metformin:** May prevent diabetes, not CV outcomes
**GLP-1 RA/SGLT2i:** Emerging role in syndrome treatment
**Pioglitazone:** Improves insulin resistance, weight gain concern

## Prevention Strategy

**Primordial Prevention:**
- Prevent risk factors from developing
- Population-level interventions (sugar taxes, food labeling)
- Focus on childhood obesity

**Primary Prevention:**
- Identify and treat prehypertension, prediabetes
- Aggressive lifestyle before pharmacotherapy`,
      keyTerms: [
        { term: 'CAC', definition: 'Coronary artery calcium; CT-based measure of atherosclerotic plaque burden' },
        { term: 'hs-CRP', definition: 'High-sensitivity C-reactive protein; marker of systemic inflammation' },
        { term: 'primordial prevention', definition: 'Preventing risk factors from developing in the first place' },
      ],
      clinicalNotes: 'Consider CAC scoring in patients aged 40-75 with intermediate 10-year risk to guide statin therapy decisions. Ethnicity-specific waist cutoffs improve sensitivity in non-white populations.',
    },
    5: {
      level: 5,
      summary: 'Metabolic syndrome research focuses on the gut microbiome role, ectopic fat depot phenotyping, precision nutrition, and novel therapeutics targeting inflammation and fibrosis while addressing socioeconomic and environmental determinants of cardiometabolic health.',
      explanation: `## Precision Medicine Approaches

**Metabolic Phenotyping:**
- Ectopic fat distribution vs subcutaneous
- Hepatic vs muscle insulin resistance
- Genetic polygenic risk scores
- Epigenetic modifications

**Gut Microbiome:**
- Dysbiosis contributes to insulin resistance
- Short-chain fatty acid production
- Bile acid metabolism and FXR signaling
- Therapeutic potential of microbiome modulation

**Ectopic Fat Depots:**
- Visceral adipose tissue (VAT)
- Epicardial fat
- Pancreatic fat
- Intermuscular fat
- Each depot has distinct metabolic impact

## Novel Therapeutic Targets

**Inflammation:**
- IL-1β inhibition (canakinumab): CANTOS trial
- NLRP3 inflammasome inhibitors
- Colchicine for secondary prevention

**Fibrosis:**
- NAFLD/NASH therapies (semaglutide, obeticholic acid)
- Galectin-3 inhibitors
- Thyroid hormone receptor-beta agonists

**Metabolic Surgery:**
- Mechanisms beyond restriction/malabsorption
- Gut hormone changes (GLP-1, PYY)
- Microbiome alterations
- Bile acid signaling changes

## Social Determinants

**Food Environment:**
- Food deserts and swamps
- Ultra-processed food prevalence
- Sugar-sweetened beverage consumption

**Built Environment:**
- Walkability
- Green space access
- Transportation policy

## Future Directions

- Multi-omics integration for risk prediction
- AI-driven dietary recommendations
- Population health interventions
- Health equity focus`,
      keyTerms: [
        { term: 'dysbiosis', definition: 'Imbalance in gut microbial communities contributing to metabolic disease' },
        { term: 'NLRP3 inflammasome', definition: 'Intracellular protein complex activating IL-1β, linking metabolism to inflammation' },
        { term: 'FXR', definition: 'Farnesoid X receptor; bile acid sensor regulating glucose and lipid metabolism' },
      ],
      clinicalNotes: 'IL-1β inhibition reduces CV events but increases infection risk. The relationship between metabolic syndrome and CVD may be mediated more by inflammation than traditional risk factors alone.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ncep-atp-iii-2001',
      type: 'article',
      title: 'Executive Summary of the Third Report of the National Cholesterol Education Program',
      source: 'JAMA',
    },
    {
      id: 'aha-metabolic-2023',
      type: 'article',
      title: 'Diagnosis and Management of Metabolic Syndrome: A Scientific Statement',
      source: 'Circulation',
    },
  ],
  crossReferences: [
    { targetId: 'condition-type2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'condition-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' },
  ],
  tags: {
    systems: ['endocrine', 'metabolic', 'cardiovascular'],
    topics: ['endocrinology', 'cardiology', 'primary care'],
    keywords: ['metabolic syndrome', 'insulin resistance', 'cardiovascular risk', 'dyslipidemia'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default metabolicSyndrome;
