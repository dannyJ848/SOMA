/**
 * Obesity (Endocrine Perspective) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const obesityEndocrine: EducationalContent = {
  id: 'condition-obesity-endocrine',
  type: 'condition',
  name: 'Obesity',
  alternateNames: ['Overweight', 'Adiposity', 'Excess Body Weight'],
  hpoId: 'HP:0001513',

  levels: {
    1: {
      level: 1,
      summary: 'Obesity is having too much body fat, which increases your risk of many health problems including diabetes, heart disease, and joint problems.',
      explanation: `Obesity means having excess body fat that can harm your health. It is usually measured by body mass index (BMI), which compares your weight to your height.

**BMI categories:**
- Underweight: less than 18.5
- Normal: 18.5 to 24.9
- Overweight: 25 to 29.9
- Obese: 30 or higher

**Health risks of obesity:**
- Type 2 diabetes
- Heart disease and stroke
- High blood pressure
- Sleep apnea
- Joint problems
- Certain cancers
- Depression

**Causes:**
- Eating more calories than you burn
- Genetics
- Lack of physical activity
- Certain medications
- Medical conditions
- Poor sleep
- Stress

**Treatment approaches:**
- Healthy eating patterns
- Regular physical activity
- Behavioral therapy
- Medications (for some)
- Surgery (for severe obesity)`,
      keyTerms: [
        { term: 'obesity', definition: 'Excess body fat that increases health risks' },
        { term: 'BMI', definition: 'Body mass index; a measure of body fat based on height and weight' },
        { term: 'metabolism', definition: 'How your body converts food into energy' },
      ],
      analogies: [
        'Think of your body like a bank account. If you deposit more calories (food) than you withdraw (activity), your savings account (body fat) grows over time.',
      ],
      examples: [
        'A person who is 5 feet 6 inches tall and weighs 200 pounds has a BMI of 32, which is in the obese range.',
      ],
    },
    2: {
      level: 2,
      summary: 'Obesity is defined as BMI >=30, resulting from energy imbalance with genetic, environmental, and behavioral factors. Associated with insulin resistance, metabolic syndrome, and multiple comorbidities requiring comprehensive management.',
      explanation: `## Classification by BMI

| Category | BMI Range |
|----------|-----------|
| Overweight | 25.0-29.9 |
| Obesity Class I | 30.0-34.9 |
| Obesity Class II | 35.0-39.9 |
| Obesity Class III | >=40 |

## Energy Balance Physiology

**Energy Intake:**
- Calories from food and beverages
- Regulated by appetite, satiety, reward pathways
- Influenced by food composition, palatability

**Energy Expenditure:**
- Basal metabolic rate (60-70%)
- Physical activity (20-30%)
- Thermic effect of food (10%)

**Positive Energy Balance:**
- Small daily surplus accumulates
- 3,500 calories = 1 lb fat
- Weight gain often gradual

## Pathophysiology

**Adipose Tissue Dysfunction:**
- Hypertrophy (enlarged fat cells)
- Inflammation
- Altered adipokine secretion
- Ectopic fat deposition

**Insulin Resistance:**
- Reduced glucose uptake
- Compensatory hyperinsulinemia
- Progresses to type 2 diabetes

**Neuroendocrine Changes:**
- Leptin resistance
- Ghrelin dysregulation
- Reward pathway alterations

## Comorbidities

**Metabolic:**
- Type 2 diabetes
- Dyslipidemia
- Metabolic syndrome
- NAFLD/NASH

**Cardiovascular:**
- Hypertension
- Coronary artery disease
- Heart failure
- Stroke
- Venous thromboembolism

**Respiratory:**
- Obstructive sleep apnea
- Obesity hypoventilation syndrome
- Asthma

**Musculoskeletal:**
- Osteoarthritis
- Back pain
- Gout

**Cancer:**
- Breast, colon, endometrial, prostate, others

**Other:**
- Infertility
- Depression
- GERD
- Gallbladder disease`,
      keyTerms: [
        { term: 'leptin', definition: 'Hormone from fat cells that regulates appetite' },
        { term: 'basal metabolic rate', definition: 'Energy used at rest for basic body functions' },
        { term: 'ectopic fat', definition: 'Fat stored in organs like liver and muscle' },
      ],
    },
    3: {
      level: 3,
      summary: 'Obesity management includes lifestyle modification, evaluation for secondary causes, pharmacotherapy for BMI >=30 or >=27 with comorbidities, and bariatric surgery consideration for BMI >=40 or >=35 with comorbidities.',
      explanation: `## Evaluation

**History:**
- Weight history and triggers
- Dietary habits
- Physical activity
- Sleep patterns
- Medications that cause weight gain
- Psychosocial factors

**Physical Exam:**
- BMI and waist circumference
- Blood pressure
- Signs of secondary causes
- Complications assessment

**Laboratory:**
- Fasting glucose or HbA1c
- Lipid panel
- Thyroid function (TSH)
- Liver enzymes
- Consider: cortisol, prolactin, karyotype (if indicated)

**Secondary Causes to Consider:**
- Hypothyroidism
- Cushing syndrome
- PCOS
- Hypothalamic obesity
- Genetic syndromes
- Medications (antipsychotics, steroids, some antidepressants)

## Lifestyle Management

**Dietary Approaches:**
| Approach | Description |
|----------|-------------|
| Caloric restriction | 500-750 kcal deficit for 1-2 lb/week loss |
| Mediterranean | Emphasis on plants, olive oil, fish |
| Low carbohydrate | <130g carbs/day |
| Very low calorie | 800 kcal/day; medical supervision |
| Intermittent fasting | Time-restricted eating |

**Physical Activity:**
- 150-300 min/week moderate intensity
- Resistance training 2-3x/week
- NEAT (non-exercise activity thermogenesis)

**Behavioral Therapy:**
- Self-monitoring
- Goal setting
- Stimulus control
- Cognitive restructuring
- Social support

## Pharmacotherapy

**Indications:**
- BMI >=30
- BMI >=27 with obesity-related comorbidity

**Approved Medications:**
| Drug | Mechanism | Weight Loss |
|------|-----------|-------------|
| Phentermine | Sympathomimetic | 5-10% |
| Orlistat | Lipase inhibitor | 3-5% |
| Naltrexone/bupropion | Opioid/DA-NE reuptake | 5-10% |
| Liraglutide 3mg | GLP-1 agonist | 10-12% |
| Semaglutide 2.4mg | GLP-1 agonist | 15-18% |
| Tirzepatide | GIP/GLP-1 agonist | 20-22% |
| Phentermine/topiramate | Combo | 10-12% |

**Selection Factors:**
- Comorbidities (diabetes favors GLP-1)
- Side effect profile
- Cost and insurance coverage
- Patient preference

## Bariatric Surgery

**Criteria:**
- BMI >=40
- BMI >=35 with comorbidity
- BMI >=30 with difficult-to-control diabetes (selected cases)

**Procedures:**
- Sleeve gastrectomy (most common)
- Roux-en-Y gastric bypass
- Adjustable gastric band (declining use)
- Biliopancreatic diversion

**Outcomes:**
- 25-35% weight loss maintained
- Diabetes remission in 60-80%
- Reduced mortality`,
      keyTerms: [
        { term: 'bariatric surgery', definition: 'Weight loss surgery for severe obesity' },
        { term: 'GLP-1 agonist', definition: 'Medication that increases satiety and reduces appetite' },
        { term: 'NEAT', definition: 'Non-exercise activity thermogenesis; calories burned through daily movement' },
      ],
      clinicalNotes: 'GLP-1 receptor agonists (semaglutide, tirzepatide) have revolutionized obesity pharmacotherapy with unprecedented weight loss and metabolic benefits.',
    },
    4: {
      level: 4,
      summary: 'Advanced obesity management addresses weight regain after initial success, management of obesity complications, perioperative care for bariatric surgery, and special populations including children, elderly, and those with severe obesity.',
      explanation: `## Weight Regain

**Common and Expected:**
- Biological adaptation to weight loss
- Reduced metabolism
- Increased appetite hormones
- 80-95% regain within 5 years without intervention

**Prevention Strategies:**
- Long-term pharmacotherapy
- Intensive lifestyle intervention
- Regular monitoring
- Early intervention when regain detected
- Consider surgery for eligible patients

**Surgical Options for Failed Lifestyle:**
- Primary bariatric surgery
- Revisional surgery if prior bariatric procedure

## Complication Management

**Obstructive Sleep Apnea:**
- Screen all patients with obesity
- Polysomnography if symptoms
- CPAP treatment
- Weight loss improves/cures

**Obesity Hypoventilation Syndrome:**
- Daytime hypercapnia
- Screen with bicarbonate, ABG
- CPAP or BiPAP
- Weight loss essential

**NAFLD/NASH:**
- Screen with FIB-4 and ultrasound
- Weight loss 7-10% improves steatosis
- 10% improves NASH
- Consider GLP-1 agonists

**PCOS:**
- Weight loss first-line therapy
- Improves ovulation, metabolic parameters
- Metformin and GLP-1 agonists helpful

## Bariatric Surgery Perioperative Care

**Preoperative:**
- Multidisciplinary evaluation
- Nutrition education
- Psychological clearance
- Medical optimization
- Smoking cessation
- Weight loss requirement (varies by center)

**Postoperative:**
- Progressive diet advancement
- Vitamin and mineral supplementation
- Monitor for deficiencies (B12, iron, D, calcium)
- Dumping syndrome education (bypass)
- Long-term follow-up

**Complications:**
- Anastomotic leak
- Stricture
- Nutritional deficiencies
- Gallstones
- Internal hernia (bypass)

## Special Populations

**Pediatric Obesity:**
- Family-based approach
- Intensive lifestyle intervention
- Metformin for prediabetes
- Consider surgery for severe cases (adolescents)
- Address psychosocial factors

**Older Adults:**
- Less aggressive weight loss targets
- Preserve muscle mass
- Consider sarcopenic obesity
- Balance benefits vs risks
- Functional outcomes important

**Class III Obesity (BMI >40):**
- Higher complication risk
- Often requires multimodal approach
- Earlier consideration of surgery
- May need specialized equipment`,
      keyTerms: [
        { term: 'weight regain', definition: 'Return of lost weight, common after initial success' },
        { term: 'sarcopenic obesity', definition: 'Combination of obesity and muscle loss in elderly' },
        { term: 'dumping syndrome', definition: 'Rapid gastric emptying causing symptoms after bypass' },
      ],
      clinicalNotes: 'Obesity is a chronic relapsing disease. Long-term support and often long-term pharmacotherapy are needed to maintain weight loss.',
    },
    5: {
      level: 5,
      summary: 'Contemporary obesity research focuses on neurobiology of appetite regulation, precision medicine approaches, combination drug therapies, and understanding the heterogeneity of obesity as a disease requiring personalized interventions.',
      explanation: `## Neurobiology of Obesity

**Appetite Regulation:**
- Hypothalamic circuits (arcuate nucleus)
- Homeostatic vs hedonic feeding
- Dopamine reward pathways
- Gut-brain signaling

**Hormonal Signals:**
- Ghrelin (orexigenic)
- Leptin (anorexigenic)
- PYY, GLP-1, CCK, amylin
- Insulin (central anorexigenic effect)

**Brain Adaptations:**
- Weight loss increases appetite signals
- Reduced satiety signaling
- Enhanced reward response to food
- Explains difficulty maintaining loss

## Precision Medicine

**Phenotyping:**
- Hungry brain (excessive hunger)
- Emotional hunger
- Slow burn (low metabolism)
- Different approaches for each phenotype

**Genetic Factors:**
- Polygenic obesity
- Monogenic forms (rare)
- MC4R pathway variants
- FTO gene variants

**Pharmacogenomics:**
- Predicting drug response
- Minimizing adverse effects
- Personalized selection

## Combination and Emerging Therapies

**Dual/Triple Agonists:**
- Tirzepatide (GIP/GLP-1): 20%+ weight loss
- Triple agonists (GIP/GLP-1/glucagon) in trials
- Cagrilintide/semaglutide combinations

**Amylin Analogs:**
- Pramlintide
- Cagrilintide (long-acting)
- Satiety enhancement

**Setmelanotide:**
- MC4R agonist
- For genetic obesity syndromes
- POMC, LEPR, PCSK1 deficiencies

**Central Mechanisms:**
- Cannabinoid CB1 inverse agonists (rimonabant - withdrawn)
- Newer peripherally restricted agents in development

## Health Systems Approach

**Environmental Changes:**
- Built environment
- Food environment
- Policy interventions
- Sugar-sweetened beverage taxes

**Clinical Integration:**
- Obesity medicine specialists
- Intensive behavioral programs
- Telemedicine approaches
- Digital health tools

**Insurance Coverage:**
- Expanding coverage for treatments
- Recognizing obesity as disease
- Reducing stigma

## Future Directions

- Brain stimulation techniques
- Gene therapy for monogenic forms
- Microbiome modulation
- Brown adipose tissue activation
- Non-invasive fat reduction
- Improved surgical techniques
- Population-level interventions

## Stigma and Bias

**Weight Stigma:**
- Harms health outcomes
- Reduces care-seeking
- Affects mental health
- Provider bias exists

**Approach:**
- People-first language
- Focus on health, not weight
- Create welcoming environments
- Appropriate equipment`,
      keyTerms: [
        { term: 'MC4R', definition: 'Melanocortin-4 receptor; key regulator of appetite' },
        { term: 'setmelanotide', definition: 'MC4R agonist for genetic obesity syndromes' },
        { term: 'hedonic hunger', definition: 'Eating for pleasure rather than energy needs' },
      ],
      clinicalNotes: 'The future of obesity treatment lies in understanding the heterogeneous nature of the disease and personalizing interventions based on underlying mechanisms and phenotypes.',
    },
  },

  media: [],
  citations: [
    {
      id: 'obesity-guidelines-2013',
      type: 'article',
      title: 'Guidelines for Managing Overweight and Obesity in Adults',
      source: 'Obesity',
      authors: ['Jensen MD', 'Ryan DH', 'Apovian CM', 'et al.'],
    },
    {
      id: 'step-trials-2021',
      type: 'article',
      title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity',
      source: 'New England Journal of Medicine',
      authors: ['Wilding JPH', 'Batterham RL', 'Calanna S', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-metabolic-syndrome', targetType: 'condition', relationship: 'related', label: 'Metabolic Syndrome' },
    { targetId: 'condition-type-2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['endocrinology', 'nutrition'],
    keywords: ['obesity', 'BMI', 'weight loss', 'bariatric surgery', 'GLP-1'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default obesityEndocrine;
