/**
 * Metabolic Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const metabolicSyndrome: EducationalContent = {
  id: 'condition-metabolic-syndrome',
  type: 'condition',
  name: 'Metabolic Syndrome',
  alternateNames: ['Syndrome X', 'Insulin Resistance Syndrome', 'Dysmetabolic Syndrome'],
  hpoId: 'HP:0000855',

  levels: {
    1: {
      level: 1,
      summary: 'Metabolic syndrome is a group of conditions that occur together, increasing your risk of heart disease, stroke, and type 2 diabetes.',
      explanation: `Metabolic syndrome is when you have several health problems at the same time. These problems are connected and make each other worse.

**The five main problems:**
1. Large waistline (belly fat)
2. High blood sugar
3. High blood pressure
4. High triglycerides (a type of fat in blood)
5. Low HDL cholesterol ("good" cholesterol)

**Having metabolic syndrome means:**
- Higher risk of heart attack and stroke
- Higher risk of type 2 diabetes
- Increased risk of fatty liver disease

**How to prevent or improve:**
- Lose weight (even 5-10% helps)
- Exercise regularly
- Eat healthy foods
- Quit smoking
- Manage stress

**Treatment:**
- Lifestyle changes are most important
- Medications for specific problems
- Regular health checkups`,
      keyTerms: [
        { term: 'metabolic syndrome', definition: 'A group of conditions that increase disease risk when they occur together' },
        { term: 'insulin resistance', definition: 'When your body does not use insulin properly' },
        { term: 'triglycerides', definition: 'A type of fat found in your blood' },
      ],
      analogies: [
        'Metabolic syndrome is like a car with multiple problems - the engine (insulin) is not working right, the fuel (sugar and fat) is not being processed correctly, and the pressure (blood pressure) is too high.',
      ],
      examples: [
        'A person with a large belly, blood pressure of 140/90, and blood sugar of 110 has metabolic syndrome.',
      ],
    },
    2: {
      level: 2,
      summary: 'Metabolic syndrome is defined by having at least three of five criteria: elevated waist circumference, triglycerides >=150, HDL <40/50, BP >=130/85, fasting glucose >=100. Associated with insulin resistance and increased cardiovascular risk.',
      explanation: `## Diagnostic Criteria (ATP III/NCEP)

Need 3 of 5:
| Criterion | Threshold |
|-----------|-----------|
| Waist circumference | Men >40 in (102 cm); Women >35 in (88 cm) |
| Triglycerides | >=150 mg/dL |
| HDL cholesterol | Men <40; Women <50 mg/dL |
| Blood pressure | >=130/85 mmHg |
| Fasting glucose | >=100 mg/dL |

**IDF Criteria (similar):**
- Requires elevated waist circumference PLUS 2 others
- Ethnic-specific waist cutoffs

## Pathophysiology

**Central Obesity:**
- Visceral adipose tissue is metabolically active
- Releases inflammatory cytokines
- Associated with insulin resistance

**Insulin Resistance:**
- Reduced glucose uptake in muscle
- Increased hepatic glucose production
- Compensatory hyperinsulinemia
- Beta-cell dysfunction over time

**Dyslipidemia:**
- Elevated triglycerides
- Low HDL
- Small dense LDL particles

**Pro-inflammatory State:**
- Elevated CRP, IL-6, TNF-alpha
- Endothelial dysfunction

**Pro-thrombotic State:**
- Elevated fibrinogen, PAI-1

## Risk and Associations

**Cardiovascular Risk:**
- 2-fold increased risk of CVD
- 5-fold increased risk of type 2 diabetes

**Associated Conditions:**
- Non-alcoholic fatty liver disease (NAFLD)
- Obstructive sleep apnea
- Polycystic ovary syndrome (PCOS)
- Chronic kidney disease
- Certain cancers`,
      keyTerms: [
        { term: 'visceral fat', definition: 'Fat stored around internal organs; more metabolically active' },
        { term: 'insulin resistance', definition: 'Reduced tissue response to insulin action' },
        { term: 'non-alcoholic fatty liver disease', definition: 'Fat accumulation in liver not due to alcohol' },
      ],
    },
    3: {
      level: 3,
      summary: 'Metabolic syndrome management focuses on weight loss and exercise as foundation, with aggressive cardiovascular risk factor modification including statins, blood pressure control, and metformin for diabetes prevention.',
      explanation: `## Lifestyle Intervention

**Weight Loss:**
- Goal: 7-10% reduction
- Even 5% improves metabolic parameters
- Mediterranean or DASH diet patterns
- Caloric restriction

**Physical Activity:**
- 150 min/week moderate intensity
- Resistance training 2x/week
- Reduces visceral fat
- Improves insulin sensitivity

**Dietary Specifics:**
- Limit refined carbohydrates
- Reduce saturated fat
- Increase fiber
- Moderate alcohol
- Avoid trans fats

## Pharmacologic Management

**Aspirin:**
- Consider for CVD prevention
- If 10-year risk >10%

**Blood Pressure:**
- Target <130/80 (ACC/AHA)
- ACE inhibitors or ARBs preferred
- Thiazide diuretics
- Calcium channel blockers

**Lipids:**
- Statins first-line
- Goal: LDL reduction per risk
- Add ezetimibe or PCSK9 if needed
- Fibrates for high triglycerides

**Diabetes Prevention:**
- Metformin for high-risk (IFG, GDM history, BMI >35)
- Pioglitazone (alternative)
- Acarbose
- GLP-1 agonists for weight + glucose

**Specific Components:**
| Problem | Medication Options |
|---------|-------------------|
| High triglycerides | Fibrates, high-dose omega-3 |
| Low HDL | Niacin (limited use), statins |
| Glucose elevation | Metformin, SGLT2i, GLP-1 RA |

## Screening and Monitoring

**Who to Screen:**
- Overweight/obese adults
- Those with family history
- Sedentary individuals
- Certain ethnic groups (Hispanic, Asian, African American)

**Follow-up:**
- Monitor weight, BP, glucose
- Lipid panel annually
- Assess for diabetes development
- Screen for NAFLD`,
      keyTerms: [
        { term: 'Mediterranean diet', definition: 'Diet pattern rich in vegetables, fruits, whole grains, olive oil' },
        { term: 'metformin', definition: 'Medication that improves insulin sensitivity' },
        { term: 'impaired fasting glucose', definition: 'Fasting glucose 100-125 mg/dL; prediabetes' },
      ],
      clinicalNotes: 'Metabolic syndrome is not just about glucose - address all cardiovascular risk factors. Statins are indicated for most patients with metabolic syndrome regardless of baseline LDL.',
    },
    4: {
      level: 4,
      summary: 'Advanced metabolic syndrome management addresses aggressive LDL targets, emerging therapies including SGLT2 inhibitors and GLP-1 receptor agonists, NAFLD screening and management, and personalized risk stratification.',
      explanation: `## Cardiovascular Risk Stratification

**10-Year Risk Assessment:**
- Use ASCVD Risk Calculator
- Metabolic syndrome = risk enhancer
- Coronary artery calcium (CAC) scoring if uncertain

**LDL Targets:**
| Risk Category | LDL Goal |
|---------------|----------|
| High risk | <100 mg/dL |
| Very high risk | <70 mg/dL |

**Beyond LDL:**
- ApoB measurement (particle number)
- Lp(a) screening once
- Non-HDL cholesterol target

## Novel Pharmacologic Approaches

**GLP-1 Receptor Agonists:**
- Liraglutide, semaglutide, tirzepatide
- Weight loss 10-20%
- Improves glucose, BP, lipids
- Cardiovascular benefit
- Consider for BMI >30 or >27 with risk

**SGLT2 Inhibitors:**
- Empagliflozin, dapagliflozin
- Weight loss 2-3 kg
- Cardiovascular and renal protection
- Consider even without diabetes

**Dual GIP/GLP-1 Agonists:**
- Tirzepatide
- Superior weight loss and glucose control
- Emerging role in metabolic syndrome

## NAFLD/NASH Management

**Screening:**
- Fibrosis-4 (FIB-4) score
- Liver enzymes (ALT, AST)
- Ultrasound if elevated

**Management:**
- Weight loss (7-10%) is primary treatment
- Avoid alcohol
- Control diabetes
- Consider vitamin E (non-diabetic NASH)
- Pioglitazone (diabetic NASH)
- GLP-1 agonists showing benefit
- Resmetirom (thyroid hormone analog) - emerging

## Sleep Apnea Consideration

**Screening:**
- STOP-BANG questionnaire
- High prevalence in metabolic syndrome

**Treatment:**
- CPAP improves BP and insulin sensitivity
- Weight loss also helps

## Special Populations

**Postmenopausal Women:**
- Higher risk
- Accelerated after menopause
- Hormone therapy not for prevention

**Older Adults:**
- Less aggressive BP targets
- Consider frailty
- Fall risk with polypharmacy

**Ethnic Variations:**
- South Asians: Lower BMI thresholds
- Different waist circumference cutoffs
- Higher diabetes risk at lower BMI`,
      keyTerms: [
        { term: 'NAFLD', definition: 'Non-alcoholic fatty liver disease' },
        { term: 'NASH', definition: 'Non-alcoholic steatohepatitis; inflammatory form of NAFLD' },
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease' },
      ],
      clinicalNotes: 'GLP-1 receptor agonists and SGLT2 inhibitors are transforming metabolic syndrome management by addressing multiple components simultaneously with cardiovascular benefit.',
    },
    5: {
      level: 5,
      summary: 'Contemporary metabolic syndrome research focuses on adipose tissue biology, precision medicine approaches, microbiome contributions, and novel therapeutic targets including browning of white fat and inflammatory pathways.',
      explanation: `## Adipose Tissue Biology

**Adipokines:**
- Leptin: Regulates appetite
- Adiponectin: Insulin sensitizing (low in obesity)
- Resistin: Insulin resistance
- Visfatin: Metabolic effects

**Inflammation:**
- Macrophage infiltration of adipose tissue
- Crown-like structures
- IL-6, TNF-alpha production
- Link to systemic insulin resistance

**Ectopic Fat:**
- Hepatic steatosis
- Intramyocellular lipid
- Pancreatic fat infiltration
- All contribute to metabolic dysfunction

## Precision Medicine

**Genetic Risk Scores:**
- Polygenic scores for diabetes
- Tailored prevention strategies
- Not yet clinically established

**Pharmacogenomics:**
- Statin response variability
- Metformin pharmacokinetics
- Personalized drug selection

**Omics Approaches:**
- Metabolomics
- Proteomics
- Lipidomics
- Multi-omics integration

## Microbiome

**Dysbiosis:**
- Altered gut microbiota in obesity
- Reduced diversity
- Increased Firmicutes/Bacteroidetes ratio

**Mechanisms:**
- Short-chain fatty acid production
- Bile acid metabolism
- Endotoxemia
- Metabolite production

**Therapeutic Potential:**
- Probiotics
- Prebiotics
- Fecal microbiota transplant
- Postbiotics

## Emerging Therapies

**Browning Agents:**
- Promote beige adipocyte formation
- Increase energy expenditure
- Beta-3 adrenergic agonists
- FGF21 analogs

**Anti-inflammatory:**
- IL-1 beta inhibitors (canakinumab)
- Colchicine for residual risk
- Methotrexate (investigational)

**AMPK Activators:**
- Metabolic master regulator
- PPAR modulators

**Setmelanotide:**
- MC4R agonist
- For genetic obesity syndromes

## Future Directions

- Integrated digital health monitoring
- Continuous glucose monitoring for non-diabetics
- AI-based risk prediction
- Combination drug development
- Health systems approaches to population health
- Addressing social determinants of health`,
      keyTerms: [
        { term: 'browning', definition: 'Converting white adipose tissue to energy-burning beige fat' },
        { term: 'FGF21', definition: 'Fibroblast growth factor 21; metabolic regulator therapeutic target' },
        { term: 'adiponectin', definition: 'Protective adipokine with insulin-sensitizing properties' },
      ],
      clinicalNotes: 'The future of metabolic syndrome management lies in personalized approaches addressing the underlying adipose tissue dysfunction and inflammation, not just treating individual risk factors.',
    },
  },

  media: [],
  citations: [
    {
      id: 'atp-iii-2001',
      type: 'article',
      title: 'Executive Summary of the Third Report of the NCEP Expert Panel',
      source: 'JAMA',
      authors: ['Expert Panel on Detection, Evaluation, and Treatment of High Blood Cholesterol in Adults'],
    },
    {
      id: ' Grundy-2015',
      type: 'article',
      title: 'Diagnosis and Management of the Metabolic Syndrome',
      source: 'Circulation',
      authors: ['Grundy SM', 'Cleeman JI', 'Daniels SR', 'et al.'],
    },
  ],
  crossReferences: [
    { targetId: 'condition-type-2-diabetes', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'condition-obesity', targetType: 'condition', relationship: 'related', label: 'Obesity' },
  ],
  tags: {
    systems: ['endocrine', 'cardiovascular'],
    topics: ['endocrinology', 'cardiology', 'primary care'],
    keywords: ['metabolic syndrome', 'insulin resistance', 'obesity', 'cardiovascular risk', 'diabetes'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family medicine'] },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default metabolicSyndrome;
