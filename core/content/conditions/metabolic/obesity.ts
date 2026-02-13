/**
 * Obesity - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const obesity: EducationalContent = {
  id: 'condition-obesity',
  type: 'condition',
  name: 'Obesity',
  nameEs: 'Obesidad',
  alternateNames: ['Overweight', 'Adiposity', 'Excess Body Fat'],
  hpoId: 'HP:0001513',

  levels: {
    1: {
      level: 1,
      summary: 'Obesity is when your body has too much fat, which can lead to health problems like diabetes, heart disease, and joint pain.',
      explanation: `Obesity happens when you take in more calories than your body uses, causing excess fat to build up. It is a complex condition influenced by genes, behavior, and environment.

**Health risks:**
- Type 2 diabetes
- Heart disease and stroke
- High blood pressure
- Sleep apnea
- Joint problems
- Some cancers

**Treatment approaches:**
- Healthy eating
- Regular physical activity
- Behavioral changes
- Medications in some cases
- Surgery for severe obesity`,
      keyTerms: [
        { term: 'BMI', definition: 'Body Mass Index; a measure of body fat based on height and weight' },
        { term: 'calories', definition: 'A measure of energy from food' },
      ],
      analogies: [
        'Your body is like a bank account—if you deposit more calories than you withdraw, the balance (fat) grows.',
      ],
      examples: [
        'A person with a BMI of 35 may develop knee pain and sleep apnea related to their weight.',
      ],
    },
    2: {
      level: 2,
      summary: 'Obesity is defined as BMI ≥30 kg/m², classified by severity, and associated with numerous cardiometabolic complications requiring comprehensive management including lifestyle, pharmacotherapy, and surgery.',
      explanation: `## Classification

| BMI (kg/m²) | Category |
|-------------|----------|
| 18.5-24.9 | Normal |
| 25-29.9 | Overweight |
| 30-34.9 | Class I Obesity |
| 35-39.9 | Class II Obesity |
| ≥40 | Class III (Severe) Obesity |

## Complications

**Metabolic:** T2DM, dyslipidemia, NAFLD, metabolic syndrome
**Cardiovascular:** HTN, CAD, HF, stroke
**Respiratory:** OSA, obesity hypoventilation syndrome
**Mechanical:** OA, back pain, GERD
**Cancer:** Breast, colon, endometrial

## Treatment

**Lifestyle:**
- Caloric deficit (500-750 kcal/day reduction)
- Physical activity (150+ min/week)
- Behavioral counseling

**Medications:**
- Semaglutide, tirzepatide (most effective)
- Phentermine-topiramate
- Orlistat, naltrexone-bupropion

**Surgery:**
- Consider if BMI ≥40 or ≥35 with comorbidities
- Sleeve gastrectomy, gastric bypass`,
      keyTerms: [
        { term: 'metabolic syndrome', definition: 'Cluster of obesity, hypertension, dyslipidemia, and insulin resistance' },
        { term: 'bariatric surgery', definition: 'Surgical procedures to help with weight loss' },
        { term: 'semaglutide', definition: 'GLP-1 agonist medication for weight loss and diabetes' },
      ],
    },
    3: {
      level: 3,
      summary: 'Obesity pathophysiology involves energy imbalance mediated by hypothalamic regulation, adipokine signaling, and genetic susceptibility, with pharmacotherapy targeting appetite and satiety pathways and metabolic surgery offering durable weight loss and metabolic benefits.',
      explanation: `## Pathophysiology

**Energy Homeostasis:**
- Hypothalamic integration of hunger/satiety signals
- Leptin resistance in obesity
- Ghrelin elevation with weight loss (promotes regain)

**Adipose Tissue as Endocrine Organ:**
- Leptin, adiponectin secretion
- Pro-inflammatory state (TNF-α, IL-6)
- Ectopic fat deposition (liver, muscle, heart)

## Pharmacotherapy

| Medication | Mechanism | Weight Loss |
|------------|-----------|-------------|
| Semaglutide 2.4mg | GLP-1 agonist | ~15-17% |
| Tirzepatide | GIP/GLP-1 agonist | ~20-22% |
| Phentermine-topiramate | Appetite/CNS | ~10% |
| Naltrexone-bupropion | Reward pathway | ~5-6% |

## Metabolic Surgery

**Procedures:**
- Roux-en-Y gastric bypass (RYGB)
- Sleeve gastrectomy (most common)
- Adjustable gastric banding (rare now)
- Biliopancreatic diversion

**Outcomes:**
- 25-35% total body weight loss
- T2DM remission in 50-80%
- Reduced CVD events and mortality`,
      keyTerms: [
        { term: 'leptin', definition: 'Hormone from fat cells signaling satiety to the brain' },
        { term: 'GLP-1', definition: 'Glucagon-like peptide-1; incretin hormone regulating appetite and glucose' },
        { term: 'sleeve gastrectomy', definition: 'Surgical removal of 80% of stomach to reduce capacity' },
      ],
      clinicalNotes: 'GLP-1 agonists require slow dose titration to minimize GI side effects. Weight regain is common after medication discontinuation—long-term treatment is often needed.',
    },
    4: {
      level: 4,
      summary: 'Obesity treatment is evolving with potent incretin-based therapies, precision phenotyping, attention to weight-centric versus glucose-centric approaches in diabetes, and recognition of the chronic, relapsing nature of the disease.',
      explanation: `## Incretin Revolution

**Tirzepatide:**
- Dual GIP/GLP-1 agonist
- Up to 22% weight loss in trials
- FDA approved for obesity and T2DM

**Pipeline:**
- Retatrutide (triple agonist): Up to 24% weight loss
- Cagrilintide/semaglutide (CagriSema)
- Orforglipron (oral small molecule GLP-1)

## Phenotype-Based Approach

**Phenotypes:**
- Hungry brain (hedonic eating)
- Emotional/stress eating
- Hungry gut (slow satiation)
- Slow metabolism

**Targeted Interventions:**
- Match therapy to phenotype
- Behavioral interventions for emotional eating
- GLP-1 for hungry gut/slow satiation

## Post-Bariatric Care

**Long-Term Issues:**
- Nutritional deficiencies (B12, iron, calcium)
- Dumping syndrome
- Alcohol use disorder
- Weight regain (10-15% at 10 years)
- Gallstones`,
      keyTerms: [
        { term: 'tirzepatide', definition: 'Dual GIP/GLP-1 receptor agonist with highest weight loss efficacy to date' },
        { term: 'hedonic eating', definition: 'Eating for pleasure rather than hunger, driven by reward pathways' },
        { term: 'dumping syndrome', definition: 'Rapid gastric emptying post-surgery causing nausea, cramping, diarrhea' },
      ],
      clinicalNotes: 'Consider obesity as a chronic disease requiring long-term management. Stopping medications typically leads to weight regain. Metabolic surgery has best long-term data for sustained weight loss.',
    },
    5: {
      level: 5,
      summary: 'Future obesity management integrates precision medicine with polygenic risk scores, multi-target pharmacotherapy, CNS-targeted interventions, and recognition of weight cycling risks, while addressing health equity and access disparities.',
      explanation: `## Precision Medicine

**Genetic Insights:**
- Polygenic risk scores for obesity
- Monogenic obesity (MC4R, LEPR mutations)
- Setmelanotide for POMC/LEPR deficiency

**Biomarkers:**
- Metabolomic signatures
- Gut microbiome profiles
- Predictors of treatment response

## Novel Targets

**CNS Targets:**
- NPY/AgRP antagonists
- Melanocortin pathway modulators
- Endocannabinoid system

**Peripheral Targets:**
- GDF15 analogs (nausea pathway)
- Glucagon receptor agonists (combination)
- Activin receptor inhibitors (muscle preservation)

## Challenges

**Weight Cycling:**
- "Yo-yo" dieting risks
- Metabolic adaptation
- Psychological burden

**Access and Equity:**
- Cost of medications ($1000+/month)
- Insurance coverage gaps
- Disparities in surgery access

## Emerging Paradigms

- Anti-obesity medications as standard care
- Weight-centric diabetes management
- Obesity as chronic disease, not lifestyle failure
- Integration with mental health care`,
      keyTerms: [
        { term: 'setmelanotide', definition: 'MC4R agonist for rare genetic obesity syndromes (POMC, LEPR deficiency)' },
        { term: 'GDF15', definition: 'Growth differentiation factor 15; hormone inducing weight loss through nausea pathway' },
        { term: 'metabolic adaptation', definition: 'Decrease in metabolic rate with weight loss that promotes regain' },
      ],
      clinicalNotes: 'Emerging GLP-1/GIP/glucagon triple agonists may achieve weight loss approaching bariatric surgery. Access and affordability remain major barriers to equitable obesity care.',
    },
  },

  media: [],
  citations: [
    {
      id: 'endocrine-obesity-2022',
      type: 'article',
      title: 'Pharmacological Management of Obesity: An Endocrine Society Clinical Practice Guideline',
      source: 'Journal of Clinical Endocrinology & Metabolism',
    },
  ],
  crossReferences: [
    { targetId: 'condition-type2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'condition-metabolic-syndrome', targetType: 'condition', relationship: 'related', label: 'Metabolic Syndrome' },
  ],
  tags: {
    systems: ['endocrine', 'metabolic'],
    topics: ['endocrinology', 'primary care', 'surgery'],
    keywords: ['obesity', 'BMI', 'weight loss', 'GLP-1', 'bariatric surgery'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default obesity;
