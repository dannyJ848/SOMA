/**
 * Type 2 Diabetes Mellitus - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const type2Diabetes: EducationalContent = {
  id: 'condition-type2-diabetes',
  type: 'condition',
  name: 'Type 2 Diabetes Mellitus',
  nameEs: 'Diabetes Mellitus Tipo 2',
  alternateNames: ['T2DM', 'Adult-Onset Diabetes', 'Non-Insulin Dependent Diabetes'],
  hpoId: 'HP:0005978',

  levels: {
    1: {
      level: 1,
      summary: 'Type 2 diabetes is when your body cannot use insulin properly, causing high blood sugar levels that can damage your body over time.',
      explanation: `Type 2 diabetes happens when your body has trouble using a hormone called insulin. Insulin helps sugar from food get into your cells for energy. In diabetes, sugar builds up in your blood instead.

**Common symptoms:**
- Feeling very thirsty
- Urinating frequently
- Feeling tired
- Blurry vision
- Slow-healing cuts
- Tingling in hands or feet

**Risk factors:**
- Being overweight
- Not exercising enough
- Family history of diabetes
- Age over 45
- Having prediabetes

**Treatment:**
- Healthy eating
- Regular exercise
- Losing weight if overweight
- Medications or insulin if needed
- Checking blood sugar regularly`,
      keyTerms: [
        { term: 'insulin', definition: 'A hormone that helps sugar get into your cells' },
        { term: 'blood sugar', definition: 'The amount of sugar (glucose) in your blood' },
        { term: 'glucose', definition: 'A type of sugar your body uses for energy' },
      ],
      analogies: [
        'Insulin is like a key that unlocks your cells so sugar can get in. In diabetes, the lock is rusty.',
      ],
      examples: [
        'A person with uncontrolled diabetes might feel very tired because their cells cannot get enough sugar for energy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type 2 diabetes is characterized by insulin resistance and relative insulin deficiency, leading to hyperglycemia and increased risk of microvascular and macrovascular complications.',
      explanation: `## Understanding Type 2 Diabetes

**Key Features:**
- Insulin resistance: Cells do not respond well to insulin
- Beta cell dysfunction: Pancreas cannot produce enough insulin to overcome resistance
- Progressive disease that worsens over time

## Diagnosis

| Test | Diabetes Diagnosis |
|------|-------------------|
| Fasting glucose | ≥126 mg/dL |
| 2-hour glucose (OGTT) | ≥200 mg/dL |
| HbA1c | ≥6.5% |
| Random glucose + symptoms | ≥200 mg/dL |

## Complications

**Microvascular:**
- Retinopathy (eye damage)
- Nephropathy (kidney damage)
- Neuropathy (nerve damage)

**Macrovascular:**
- Heart disease
- Stroke
- Peripheral artery disease

## Treatment Goals
- HbA1c <7% for most adults
- Blood pressure <130/80
- LDL cholesterol on statin therapy`,
      keyTerms: [
        { term: 'HbA1c', definition: 'Hemoglobin A1c; measures average blood sugar over 2-3 months' },
        { term: 'insulin resistance', definition: 'When cells do not respond properly to insulin' },
        { term: 'microvascular', definition: 'Related to small blood vessels' },
      ],
    },
    3: {
      level: 3,
      summary: 'T2DM pathophysiology involves hepatic glucose overproduction, peripheral insulin resistance, and progressive beta-cell failure, managed with lifestyle intervention and pharmacotherapy guided by comorbidities and complications.',
      explanation: `## Pathophysiology

**The Ominous Octet (DeFronzo):**
1. Decreased insulin secretion (beta-cell)
2. Increased glucagon secretion (alpha-cell)
3. Increased hepatic glucose production
4. Decreased muscle glucose uptake
5. Increased lipolysis (adipocyte)
6. Decreased incretin effect
7. Increased renal glucose reabsorption
8. Neurotransmitter dysfunction

## Pharmacotherapy

**First-Line:** Metformin
- Reduces hepatic glucose production
- Weight neutral
- CV neutral to beneficial

**SGLT2 Inhibitors:** Empagliflozin, dapagliflozin
- CV and renal benefits
- Preferred with HF or CKD

**GLP-1 Receptor Agonists:** Semaglutide, liraglutide
- CV benefits
- Weight loss
- Preferred with ASCVD or high risk

**Other Agents:**
- DPP-4 inhibitors
- Thiazolidinediones
- Sulfonylureas
- Insulin`,
      keyTerms: [
        { term: 'SGLT2 inhibitor', definition: 'Drug blocking glucose reabsorption in kidney, promoting glucosuria' },
        { term: 'GLP-1 agonist', definition: 'Incretin mimetic enhancing glucose-dependent insulin secretion' },
        { term: 'metformin', definition: 'First-line oral agent reducing hepatic gluconeogenesis' },
      ],
      clinicalNotes: 'Prioritize SGLT2i in patients with HF or CKD. Prioritize GLP-1 RA in patients with established ASCVD or high CV risk. Both provide benefits independent of glycemic control.',
    },
    4: {
      level: 4,
      summary: 'Contemporary T2DM management emphasizes cardiorenal protection through SGLT2 inhibitors and GLP-1 receptor agonists, with individualized glycemic targets, comprehensive complication screening, and attention to beta-cell preservation.',
      explanation: `## Drug Selection by Comorbidity

| Comorbidity | Preferred Agent |
|-------------|-----------------|
| ASCVD | GLP-1 RA or SGLT2i |
| Heart failure | SGLT2i |
| CKD | SGLT2i (if eGFR ≥20) or GLP-1 RA |
| Obesity | GLP-1 RA (semaglutide, tirzepatide) |
| Need to avoid hypoglycemia | GLP-1 RA, SGLT2i, DPP-4i |

## Key Trials

**EMPA-REG OUTCOME:** Empagliflozin reduced CV death, HF hospitalization
**LEADER:** Liraglutide reduced CV events
**CREDENCE/DAPA-CKD:** SGLT2i renal protection
**SURPASS/SURMOUNT:** Tirzepatide for diabetes and obesity

## Complication Screening

- **Retinopathy:** Dilated eye exam at diagnosis, then annually
- **Nephropathy:** Annual eGFR and UACR
- **Neuropathy:** Annual foot exam, monofilament testing
- **CV disease:** Lipid panel, BP, consider statin and aspirin`,
      keyTerms: [
        { term: 'tirzepatide', definition: 'Dual GIP/GLP-1 receptor agonist with potent glucose-lowering and weight loss effects' },
        { term: 'UACR', definition: 'Urine albumin-to-creatinine ratio; screens for diabetic nephropathy' },
        { term: 'cardiorenal protection', definition: 'CV and kidney benefits of SGLT2i and GLP-1 RA beyond glucose lowering' },
      ],
      clinicalNotes: 'SGLT2i provide HF and CKD benefits even in patients without diabetes. Tirzepatide produces greatest weight loss of approved diabetes medications (up to 20%+ of body weight).',
    },
    5: {
      level: 5,
      summary: 'Precision medicine in T2DM integrates genetic risk scores, metabolic phenotyping, and emerging therapies including dual and triple agonists, with focus on disease modification, beta-cell preservation, and holistic cardiometabolic risk management.',
      explanation: `## Emerging Therapies

**Dual/Triple Agonists:**
- Tirzepatide (GIP/GLP-1): Up to 2.4% HbA1c reduction
- Retatrutide (GIP/GLP-1/glucagon): Phase 3 ongoing
- May achieve diabetes remission in subset

**Precision Approaches:**
- Genetic subtypes affecting treatment response
- Metabolic phenotyping (insulin resistant vs deficient)
- Polygenic risk scores for complications

**Beta-Cell Preservation:**
- Early intensive therapy
- GLP-1 RA may preserve function
- Stem cell approaches in development

## Diabetes Remission

**Definition:** HbA1c <6.5% for ≥3 months off medications

**Strategies:**
- Metabolic surgery (bariatric)
- Intensive lifestyle intervention
- Very low calorie diets

## Technology Integration

- Continuous glucose monitoring (CGM)
- Insulin pumps and hybrid closed-loop systems
- Digital therapeutics and coaching apps`,
      keyTerms: [
        { term: 'diabetes remission', definition: 'Sustained normoglycemia without diabetes medications' },
        { term: 'retatrutide', definition: 'Triple agonist (GIP/GLP-1/glucagon) in development for diabetes and obesity' },
        { term: 'metabolic surgery', definition: 'Bariatric surgery achieving diabetes remission in substantial proportion' },
      ],
      clinicalNotes: 'Consider CGM in patients on insulin or with hypoglycemia unawareness. Metabolic surgery is an option for BMI ≥40 (≥35 with comorbidities). Early intensive therapy may preserve beta-cell function.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-standards-2024',
      type: 'website',
      title: 'Standards of Care in Diabetes—2024',
      source: 'American Diabetes Association',
      url: 'https://diabetesjournals.org/care',
    },
  ],
  crossReferences: [
    { targetId: 'condition-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
  ],
  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['endocrinology', 'primary care', 'chronic disease'],
    keywords: ['diabetes', 'insulin resistance', 'hyperglycemia', 'SGLT2', 'GLP-1'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default type2Diabetes;
