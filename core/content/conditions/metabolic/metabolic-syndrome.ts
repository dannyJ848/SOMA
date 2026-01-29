/**
 * Metabolic Syndrome - Comprehensive Educational Content
 *
 * Covers diagnostic criteria, pathophysiology, and cardiovascular risk management.
 */

import { EducationalContent } from '../../types';

export const metabolicSyndrome: EducationalContent = {
  id: 'condition-metabolic-syndrome',
  type: 'condition',
  name: 'Metabolic Syndrome',
  alternateNames: ['Insulin Resistance Syndrome', 'Syndrome X', 'Dysmetabolic Syndrome'],
  hpoId: 'HP:0000831',

  levels: {
    1: {
      level: 1,
      summary: 'Metabolic syndrome is a group of conditions that increase the risk of heart disease, stroke, and diabetes.',
      explanation: `Metabolic syndrome is not a single disease but a collection of health problems that often occur together. When you have several of these conditions, your risk of serious health problems increases.

**The five main components:**
1. **Large waist size** - carrying extra weight around the belly
2. **High blood sugar** - higher than normal glucose levels
3. **High blood pressure** - force of blood against artery walls too high
4. **High triglycerides** - a type of fat in the blood
5. **Low HDL cholesterol** - the "good" cholesterol is too low

**Why it matters:**
- Increases risk of heart attack and stroke
- Increases risk of Type 2 diabetes
- Affects about 1 in 3 American adults

**What you can do:**
- Lose weight (even 5-10% helps)
- Exercise regularly
- Eat a healthy diet
- Do not smoke
- Take prescribed medications

**Risk factors:**
- Age (risk increases as you get older)
- Family history
- Obesity
- Sedentary lifestyle
- Poor diet`,
      keyTerms: [
        { term: 'triglycerides', definition: 'A type of fat found in your blood' },
        { term: 'HDL cholesterol', definition: 'Good cholesterol that helps remove bad cholesterol from arteries' },
        { term: 'insulin resistance', definition: 'When your body does not respond well to insulin' },
        { term: 'waist circumference', definition: 'Measurement around your waist; indicates belly fat' },
      ],
      analogies: [
        'Metabolic syndrome is like having multiple warning lights on your car dashboard - each one signals a problem that needs attention.',
        'Think of your body as a factory; metabolic syndrome means several systems are not working efficiently together.',
      ],
      examples: [
        'A person with a large belly, high blood pressure, and high blood sugar likely has metabolic syndrome.',
        'Someone who is inactive, eats processed foods, and has a family history of diabetes is at risk.',
      ],
    },
    2: {
      level: 2,
      summary: 'Metabolic syndrome is a clustering of cardiovascular risk factors including central obesity, hypertension, dyslipidemia, and insulin resistance, associated with increased risk of cardiovascular disease and Type 2 diabetes.',
      explanation: `## Understanding Metabolic Syndrome

**Diagnostic Criteria (need 3 of 5):**

| Risk Factor | Threshold |
|-------------|-----------|
| Elevated waist circumference | Men >40 in (102 cm), Women >35 in (88 cm) |
| Elevated triglycerides | >=150 mg/dL or on therapy |
| Reduced HDL-C | Men <40 mg/dL, Women <50 mg/dL or on therapy |
| Elevated blood pressure | >=130/85 mmHg or on therapy |
| Elevated fasting glucose | >=100 mg/dL or on therapy |

## Pathophysiology

**Central obesity as driver:**
- Visceral adipose tissue is metabolically active
- Releases inflammatory cytokines (adipokines)
- Promotes insulin resistance
- Contributes to dyslipidemia

**Insulin resistance:**
- Impaired glucose uptake in muscle
- Unsuppressed hepatic glucose production
- Hyperinsulinemia develops
- Leads to beta-cell exhaustion over time

**Pro-inflammatory state:**
- TNF-alpha, IL-6, CRP elevated
- Endothelial dysfunction
- Pro-thrombotic state

## Associated Conditions

**Cardiovascular:**
- Coronary artery disease
- Stroke
- Peripheral artery disease
- Heart failure

**Metabolic:**
- Type 2 diabetes
- Non-alcoholic fatty liver disease (NAFLD)
- Polycystic ovary syndrome (PCOS)
- Obstructive sleep apnea

**Other:**
- Chronic kidney disease
- Certain cancers (colon, breast, prostate)
- Dementia risk increased`,
      keyTerms: [
        { term: 'visceral adipose tissue', definition: 'Fat stored deep inside the abdomen around organs' },
        { term: 'adipokines', definition: 'Hormones and cytokines released by fat tissue' },
        { term: 'endothelial dysfunction', definition: 'Impaired function of blood vessel lining' },
        { term: 'dyslipidemia', definition: 'Abnormal levels of lipids in the blood' },
      ],
      analogies: [
        'Visceral fat is like a misbehaving organ factory that pumps out inflammatory chemicals into your bloodstream.',
        'Insulin resistance is like a door with rusty hinges - the key (insulin) has trouble opening it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Metabolic syndrome involves ectopic fat deposition, chronic low-grade inflammation, and endothelial dysfunction creating a pro-atherogenic and pro-thrombotic state, requiring comprehensive lifestyle intervention and targeted pharmacotherapy for individual risk factors.',
      explanation: `## Pathophysiology

### Adipose Tissue Dysfunction
**Visceral vs subcutaneous fat:**
- Visceral fat drains directly to portal circulation
- More metabolically active and inflammatory
- Associated with "apple-shaped" obesity

**Adipokine imbalance:**
| Adipokine | Change in Obesity | Effect |
|-----------|-------------------|--------|
| Leptin | Increased | Leptin resistance, appetite dysregulation |
| Adiponectin | Decreased | Reduced insulin sensitivity, anti-inflammatory |
| TNF-alpha | Increased | Insulin resistance, inflammation |
| IL-6 | Increased | Hepatic insulin resistance, CRP induction |
| PAI-1 | Increased | Impaired fibrinolysis, thrombosis risk |

### Lipid Abnormalities
**Atherogenic dyslipidemia:**
- Elevated triglycerides
- Low HDL cholesterol
- Small dense LDL particles
- Increased apolipoprotein B

**Mechanism:**
- Insulin resistance increases lipolysis
- Increased hepatic VLDL production
- CETP-mediated HDL cholesterol ester depletion

### Insulin Resistance Mechanisms
**Molecular level:**
- Serine phosphorylation of IRS-1 (vs tyrosine)
- Lipid metabolite accumulation (DAG, ceramides)
- Mitochondrial dysfunction
- Oxidative stress
- ER stress

### Cardiovascular Risk
**Framingham risk score enhancement:**
- Metabolic syndrome approximately doubles CVD risk
- Risk increases with number of components
- Lifetime risk for CVD is significantly elevated

## Management Approach

**Lifestyle intervention (first-line):**
- 7-10% weight loss goal
- 150 min/week moderate exercise
- Mediterranean or DASH diet
- Smoking cessation
- Limit alcohol

**Pharmacologic targets:**
| Component | First-line | Considerations |
|-----------|------------|----------------|
| Obesity | GLP-1 RA, SGLT2i | Orlistat, phentermine |
| Hypertension | ACEi/ARB preferred | Thiazides, CCBs |
| Dyslipidemia | Statin | Add fenofibrate if TG >500 |
| Hyperglycemia | Metformin | Consider early insulin |
| Prothrombotic | Aspirin (high risk) | Bleeding risk assessment |`,
      keyTerms: [
        { term: 'ectopic fat', definition: 'Fat deposited in organs like liver, muscle, pancreas (not subcutaneous)' },
        { term: 'CETP', definition: 'Cholesteryl ester transfer protein; mediates HDL remodeling' },
        { term: 'PAI-1', definition: 'Plasminogen activator inhibitor-1; promotes thrombosis' },
        { term: 'IRS-1', definition: 'Insulin receptor substrate-1; key signaling molecule for insulin action' },
      ],
      clinicalNotes: 'Metabolic syndrome represents a state of heightened cardiovascular risk requiring aggressive management. Weight loss of 5-10% can significantly improve all components. Consider screening for NAFLD and sleep apnea. Aspirin primary prevention is controversial; use shared decision-making.',
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of metabolic syndrome encompasses the lipotoxicity hypothesis, hepatic insulin resistance pathways, role of gut microbiome, and application of advanced imaging for cardiovascular risk stratification beyond traditional risk calculators.',
      explanation: `## Advanced Pathophysiology

### Lipotoxicity and Ectopic Lipid Storage
**Mechanism:**
- Adipose tissue storage capacity exceeded
- Lipids "spill over" to liver, muscle, pancreas, heart
- Lipid intermediates cause cellular dysfunction:
  - Diacylglycerol (DAG) -> PKC activation -> insulin resistance
  - Ceramides -> apoptosis, inflammation
  - Acylcarnitines -> mitochondrial stress

### Hepatic Insulin Resistance
**Two-hit hypothesis for NAFLD/NASH:**
1. Insulin resistance -> hepatic steatosis
2. Oxidative stress, inflammation -> steatohepatitis, fibrosis

**Mechanisms:**
- Uninhibited gluconeogenesis (FoxO1, PEPCK)
- Increased DNL (SREBP-1c activation)
- Decreased VLDL export
- Inflammation (Kupffer cells, hepatocyte injury)

### Gut Microbiome
**Dysbiosis in metabolic syndrome:**
- Reduced diversity
- Increased Firmicutes/Bacteroidetes ratio
- Increased gut permeability ("leaky gut")
- LPS translocation -> metabolic endotoxemia

**Mechanisms:**
- Short-chain fatty acid production changes
- Bile acid metabolism alterations
- TMAO production (cardiovascular risk)

### Advanced Lipid Assessment
**Beyond standard lipid panel:**
- Apolipoprotein B (atherogenic particle count)
- LDL particle number (NMR spectroscopy)
- Lipoprotein(a) - genetic CVD risk
- Oxidized LDL
- Small dense LDL concentration

**LDL heterogeneity:**
- Pattern A: Large buoyant LDL (less atherogenic)
- Pattern B: Small dense LDL (more atherogenic)
- Metabolic syndrome typically Pattern B

### Imaging for Risk Stratification
**Coronary artery calcium (CAC) scoring:**
- CT-based quantification of coronary calcification
- Strong predictor of CVD events
- Guides statin intensity decisions

**Carotid intima-media thickness:**
- Subclinical atherosclerosis marker
- Predicts stroke and MI risk

**Hepatic steatosis assessment:**
- Ultrasound (qualitative)
- CAP (controlled attenuation parameter) on FibroScan
- MRI-PDFF (most accurate)`,
      keyTerms: [
        { term: 'lipotoxicity', definition: 'Cellular dysfunction caused by excessive lipid accumulation' },
        { term: 'TMAO', definition: 'Trimethylamine N-oxide; gut microbiome-derived metabolite linked to CVD' },
        { term: 'CAC score', definition: 'Coronary artery calcium score; Agatston units quantify calcified plaque' },
        { term: 'DNL', definition: 'De novo lipogenesis; synthesis of fatty acids from carbohydrates' },
      ],
      clinicalNotes: 'CAC scoring can help guide statin therapy in intermediate-risk patients with metabolic syndrome. Zero CAC does not exclude non-calcified plaque. Consider advanced lipid testing when standard panel does not match apparent risk. NAFLD is the hepatic manifestation of metabolic syndrome - screen with ultrasound and fibrosis assessment.',
    },
    5: {
      level: 5,
      summary: 'Precision medicine approaches to metabolic syndrome include genetic risk stratification, targeted therapies addressing specific pathophysiologic mechanisms, and population-level interventions addressing social determinants of health to reduce the global burden of cardiometabolic disease.',
      explanation: `## Precision Medicine in Metabolic Syndrome

### Genetic Risk Stratification
**Polygenic risk scores:**
- Aggregate thousands of SNPs for CVD and diabetes risk
- May improve risk prediction beyond traditional factors
- Clinical utility still being evaluated

**Monogenic forms to consider:**
- Familial combined hyperlipidemia (USF1, LPL)
- Familial hypertriglyceridemia
- Lipodystrophy syndromes (LMNA, PPARG)
- PCSK9 mutations

### Novel Therapeutic Targets

**Anti-inflammatory approaches:**
- Canakinumab (IL-1beta antibody) - CANTOS trial
  - Reduced CVD events independent of lipids
  - Expensive, infection risk
- Colchicine - repurposed for CVD prevention
  - Low dose (0.5 mg daily)
  - Reduces inflammation and events

**Triglyceride-lowering beyond fibrates:**
- Icosapent ethyl (pure EPA) - REDUCE-IT trial
  - 4g daily reduces CVD events in high-TG patients
  - Mechanism: membrane stabilization, anti-inflammatory
- Volanesorsen (APOC3 antisense) - familial chylomicronemia
- ANGPTL3 and APOC3 inhibitors (evolocumab pathway)

**GLP-1 receptor agonists:**
- Semaglutide 2.4 mg (Wegovy) - weight loss and CVD benefit
- Tirzepatide (GIP/GLP-1 dual agonist) - superior glycemic and weight effects

**SGLT2 inhibitors:**
- Expanding indications: heart failure, CKD
- Mechanisms: hemodynamic, metabolic, anti-fibrotic

### Population Health Strategies

**Social determinants:**
- Food insecurity and metabolic syndrome
- Built environment (walkability, food access)
- Healthcare access disparities
- Socioeconomic status and chronic stress

**Interventions:**
- Sugar-sweetened beverage taxes
- Front-of-package labeling
- Urban planning for physical activity
- Workplace wellness programs
- Community health worker models

### Future Directions

**Digital health:**
- Continuous glucose monitoring for prediabetes
- Wearable devices for activity tracking
- AI-powered dietary assessment
- Telemedicine for rural access

**Microbiome therapeutics:**
- Fecal microbiota transplantation
- Precision probiotics
- Postbiotics and metabolite supplementation

**Bariatric/metabolic surgery:**
- Expanding to lower BMI thresholds
- Mechanisms beyond restriction/malabsorption
- Gut hormone effects
- Long-term durability data`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Aggregate measure of genetic risk based on multiple variants' },
        { term: 'CANTOS trial', definition: 'Landmark study proving inflammation reduction lowers CVD risk' },
        { term: 'REDUCE-IT', definition: 'Trial demonstrating icosapent ethyl CVD benefit' },
        { term: 'postbiotics', definition: 'Bioactive compounds produced by gut bacteria' },
      ],
      clinicalNotes: 'The CANTOS trial established inflammation as a CVD target. Consider colchicine for residual inflammatory risk in patients with metabolic syndrome and established CVD. Icosapent ethyl is indicated for CVD risk reduction in patients with TG 135-499 mg/dL on statins. Bariatric surgery should be considered earlier in the disease course for metabolic syndrome with obesity.',
    },
  },

  media: [
    {
      id: 'metabolic-syndrome-diagram',
      type: 'diagram',
      filename: 'metabolic-syndrome-components.svg',
      title: 'Metabolic Syndrome Components',
      description: 'The five components and their interrelationships',
    },
  ],

  citations: [
    {
      id: 'aha-metabolic-syndrome',
      type: 'article',
      title: 'Diagnosis and Management of the Metabolic Syndrome',
      source: 'Circulation',
    },
  ],

  crossReferences: [
    { targetId: 'condition-diabetes', targetType: 'condition', relationship: 'related', label: 'Diabetes' },
  ],

  tags: {
    systems: ['metabolic', 'cardiovascular'],
    topics: ['cardiology', 'endocrinology', 'preventive medicine'],
    keywords: ['metabolic syndrome', 'insulin resistance', 'obesity', 'cardiovascular risk'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default metabolicSyndrome;
