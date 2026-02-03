/**
 * Global Diabetes
 *
 * Educational content about diabetes mellitus worldwide.
 */

import { EducationalContent } from '../../types';

export const DIABETES_GLOBAL: EducationalContent = {
  id: 'diabetes-global',
  type: 'concept',
  name: 'Global Diabetes',
  alternateNames: ['Diabetes Worldwide', 'Global Diabetes Epidemic'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes is a disease where your body can\'t properly use sugar from food for energy. It affects over 500 million people worldwide and is becoming more common everywhere.',
      explanation: `When you eat food, your body turns it into sugar (glucose) for energy. Insulin is a hormone that helps sugar get into your cells. In diabetes, this process doesn't work properly.

**Types of Diabetes:**

**Type 1:**
- Body can't make insulin
- Usually starts in childhood
- Must take insulin shots every day
- Not caused by lifestyle

**Type 2:**
- Body doesn't use insulin well
- Most common type (90%+)
- Often develops in adults (but kids are getting it now)
- Linked to being overweight and inactive

**Gestational:**
- Happens during pregnancy
- Usually goes away after birth
- Increases risk for type 2 later

**Why Is Diabetes Dangerous?**

High blood sugar damages your body over time:
- **Eyes:** Can cause blindness
- **Kidneys:** Can lead to kidney failure
- **Nerves:** Numbness and pain in feet and hands
- **Heart:** Higher risk of heart attack and stroke
- **Feet:** Wounds don't heal well, may need amputation

**The Diabetes Epidemic:**
- 537 million adults have diabetes (2021)
- Expected to reach 783 million by 2045
- Many people don't know they have it
- Low and middle-income countries hit hardest

**Prevention (for Type 2):**
- Maintain healthy weight
- Exercise regularly
- Eat healthy foods
- Limit sugary drinks and processed foods`,
      keyTerms: [
        { term: 'diabetes', definition: 'A disease where the body can\'t properly control blood sugar levels' },
        { term: 'insulin', definition: 'A hormone that helps sugar get from blood into cells for energy' },
        { term: 'blood sugar', definition: 'The amount of glucose (sugar) in your blood' },
      ],
      analogies: [
        'Insulin is like a key that unlocks cells so sugar can get in. In diabetes, either there\'s no key (Type 1) or the lock is broken (Type 2).',
      ],
      examples: [
        'Someone with uncontrolled diabetes might feel very thirsty and need to urinate often because their body is trying to get rid of extra sugar.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes mellitus affects 537 million adults globally with prevalence rising rapidly, especially in LMICs. Type 2 diabetes comprises 90%+ of cases and is driven by obesity, physical inactivity, and dietary changes. Complications cause significant morbidity and mortality.',
      explanation: `Diabetes represents a global health emergency, with prevalence more than tripling in the past 40 years, driven largely by the obesity epidemic and aging populations.

**Global Epidemiology (IDF 2021):**
- 537 million adults (20-79) with diabetes
- 1 in 10 adults affected
- 6.7 million deaths annually
- $966 billion health expenditure

**Regional Prevalence:**
| Region | Adults with Diabetes |
|--------|---------------------|
| Middle East/North Africa | 16.2% |
| North America | 14.0% |
| Southeast Asia | 8.7% |
| Africa | 5.3% |

**Types:**
- Type 1: ~5-10% (autoimmune destruction of beta cells)
- Type 2: ~90% (insulin resistance + relative deficiency)
- Gestational: Variable (often undiagnosed)
- Other: MODY, drug-induced, etc.

**Risk Factors for Type 2:**
| Factor | Impact |
|--------|--------|
| Overweight/obesity | 7x risk |
| Physical inactivity | 2-3x risk |
| Family history | 2-3x risk |
| Prediabetes | 5-15% annual progression |
| Gestational diabetes history | 50% 10-year risk |

**Complications:**
- Cardiovascular disease (2-4x risk)
- Nephropathy (leading cause of kidney failure)
- Retinopathy (leading cause of blindness in working-age)
- Neuropathy (50% of people with diabetes)
- Foot disease (lower limb amputation)

**Prevention Evidence:**
Lifestyle intervention reduces Type 2 incidence by 58%:
- 5-7% weight loss
- 150 min/week moderate activity
- Dietary modification

**Management Goals:**
- HbA1c <7% (individualized)
- Blood pressure <130/80
- LDL <100 mg/dL (or <70 if CVD)
- Annual screening for complications`,
      keyTerms: [
        { term: 'HbA1c', definition: 'Glycated hemoglobin - measure of average blood sugar over 2-3 months', pronunciation: 'hemoglobin A-one-C' },
        { term: 'insulin resistance', definition: 'When cells don\'t respond normally to insulin, requiring more to control blood sugar' },
        { term: 'prediabetes', definition: 'Blood sugar higher than normal but not yet diabetes - high risk for progression' },
        { term: 'diabetic nephropathy', definition: 'Kidney damage caused by diabetes', pronunciation: 'nef-ROP-ah-thee' },
      ],
      analogies: [
        'Prediabetes is like a yellow warning light - the problem can still be reversed if you take action, but ignore it and you\'ll break down.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes pathophysiology involves defects in insulin secretion, insulin action, or both. Global burden includes direct complications and increased cardiovascular risk. Management requires glycemic control, cardiovascular risk factor management, and complication screening within health systems.',
      explanation: `Diabetes represents a heterogeneous group of metabolic disorders characterized by hyperglycemia, with complex pathophysiology and multifaceted management requirements.

**Pathophysiology:**

**Type 1:**
- Autoimmune destruction of pancreatic beta cells
- HLA associations (DR3, DR4)
- Environmental triggers (viral infections, early diet)
- Complete insulin deficiency
- Ketosis-prone

**Type 2:**
- Insulin resistance in muscle, liver, adipose
- Progressive beta-cell dysfunction
- Incretin defect
- Glucagon dysregulation
- Multiple organ involvement

**"Ominous Octet" (Type 2):**
1. Muscle (insulin resistance)
2. Liver (increased glucose production)
3. Adipose (lipolysis)
4. Beta-cell (impaired secretion)
5. Alpha-cell (excess glucagon)
6. Gut (decreased incretin effect)
7. Brain (neurotransmitter dysfunction)
8. Kidney (increased glucose reabsorption)

**Diagnostic Criteria:**
| Test | Diabetes | Prediabetes |
|------|----------|-------------|
| Fasting glucose | >=126 mg/dL | 100-125 mg/dL |
| 2-hr OGTT | >=200 mg/dL | 140-199 mg/dL |
| HbA1c | >=6.5% | 5.7-6.4% |
| Random glucose | >=200 + symptoms | - |

**Complications Pathophysiology:**

**Microvascular:**
- Polyol pathway activation
- Advanced glycation end products (AGEs)
- Protein kinase C activation
- Oxidative stress
- Endothelial dysfunction

**Macrovascular:**
- Accelerated atherosclerosis
- Dyslipidemia pattern
- Prothrombotic state
- Hypertension synergy

**Management Algorithm:**

**Lifestyle Foundation:**
- Medical nutrition therapy
- Physical activity (150+ min/week)
- Weight management (5-15% loss)
- Smoking cessation

**Pharmacotherapy (Type 2):**
| Step | Options |
|------|---------|
| First-line | Metformin |
| Add-on | GLP-1 RA, SGLT2i (if CVD/CKD), DPP-4i, TZD, insulin |
| CVD established | Prefer SGLT2i or GLP-1 RA with CVD benefit |

**Targets:**
| Parameter | General | Elderly/Frail |
|-----------|---------|---------------|
| HbA1c | <7% | <8% |
| Fasting glucose | 80-130 mg/dL | 90-150 mg/dL |
| Post-prandial | <180 mg/dL | <200 mg/dL |

**Complication Screening:**
| Complication | Screening | Frequency |
|--------------|-----------|-----------|
| Retinopathy | Dilated eye exam | Annual |
| Nephropathy | Urine albumin, eGFR | Annual |
| Neuropathy | Foot exam, monofilament | Annual |
| CVD | BP, lipids, risk assessment | Annual |`,
      keyTerms: [
        { term: 'diabetic ketoacidosis', definition: 'Serious complication with high glucose, ketones, and acidosis, mainly in Type 1', pronunciation: 'kee-toh-ass-ih-DOH-sis' },
        { term: 'SGLT2 inhibitors', definition: 'Drugs that lower glucose by blocking kidney reabsorption', pronunciation: 'sodium-glucose cotransporter 2' },
        { term: 'GLP-1 receptor agonist', definition: 'Drug mimicking incretin hormone, improving glucose control and causing weight loss' },
        { term: 'AGEs', definition: 'Advanced glycation end products - proteins damaged by glucose contributing to complications' },
      ],
      clinicalNotes: 'Individualize HbA1c targets. Consider SGLT2i or GLP-1 RA for cardiovascular/kidney benefits independent of glycemic need. Annual comprehensive complication screening essential. Address hypoglycemia risk.',
    },
    4: {
      level: 4,
      summary: 'Diabetes epidemiology reveals rapid increases driven by demographic, epidemiologic, and nutrition transitions. Novel therapeutics offer cardiorenal benefits beyond glucose lowering. Global response requires health systems strengthening for chronic care delivery alongside policy addressing upstream determinants.',
      explanation: `**Global Epidemiological Trends:**

**Projections (IDF):**
- 2021: 537 million
- 2030: 643 million
- 2045: 783 million
- Fastest increases in Africa, Middle East

**Undiagnosed Burden:**
- ~240 million undiagnosed
- Higher in LMICs (50%+ unaware)
- Delayed diagnosis increases complications
- Screening strategies needed

**Health Systems Response:**

**WHO Package of Essential NCD Interventions:**
- Diabetes risk assessment
- Diagnosis (glucose, HbA1c)
- Lifestyle counseling
- Metformin, other essential medicines
- Complication management
- Referral pathways

**Implementation Challenges:**
| Challenge | Manifestation |
|-----------|--------------|
| Access | Insulin costs, medicine availability |
| Quality | Diagnostic capacity, guidelines adherence |
| Continuity | Follow-up, chronic care models |
| Integration | PHC-specialty linkage |

**Therapeutic Advances:**

**SGLT2 Inhibitors:**
- CV benefit (EMPA-REG, CANVAS, DECLARE)
- HF benefit (DAPA-HF, EMPEROR)
- Kidney benefit (CREDENCE, DAPA-CKD)
- Independent of glycemic effect

**GLP-1 Receptor Agonists:**
- CV benefit (LEADER, SUSTAIN-6, REWIND)
- Weight loss effect
- Once-weekly formulations
- Oral semaglutide

**Combination Approaches:**
- Tirzepatide (GIP/GLP-1)
- Fixed-dose combinations
- Simplified regimens

**Precision Diabetes:**
- Genetic subtypes
- C-peptide guided therapy
- Autoantibody testing
- Pharmacogenomics

**Policy Approaches:**

**Prevention:**
- Sugar-sweetened beverage taxes
- Front-of-pack labeling
- Urban planning for physical activity
- School and workplace programs

**Access to Care:**
- Essential medicines lists
- Insulin pricing interventions
- Universal health coverage
- Community health workers

**Monitoring:**
- Surveillance systems
- Registry development
- Quality indicators
- Accountability mechanisms

**Insulin Access Crisis:**

**Global Challenge:**
- 1 in 2 needing insulin don't have access
- Prices unaffordable in many LMICs
- Three companies dominate (90% of market)
- Biosimilar potential underrealized

**Solutions:**
- WHO prequalification of biosimilars
- Pooled procurement
- Local production
- Reference pricing`,
      keyTerms: [
        { term: 'cardiorenal benefit', definition: 'Protective effects on heart and kidney independent of glucose lowering' },
        { term: 'tirzepatide', definition: 'Dual GIP and GLP-1 receptor agonist with potent glucose lowering and weight loss' },
        { term: 'insulin biosimilar', definition: 'Biologic product highly similar to approved reference insulin' },
        { term: 'precision diabetes', definition: 'Tailoring diabetes treatment based on disease subtype and individual characteristics' },
      ],
      clinicalNotes: 'Select therapies considering cardiorenal profile. Advocate for insulin access. Participate in quality improvement. Address treatment inertia.',
    },
    5: {
      level: 5,
      summary: 'Diabetes represents a paradigm of NCD complexity requiring precision approaches, novel therapeutics targeting multiple pathophysiologic pathways, health systems transformation for chronic care, and policy addressing commercial and structural determinants within planetary health frameworks.',
      explanation: `**Pathophysiologic Complexity:**

**Heterogeneity:**
| Subtype | Features | Implications |
|---------|----------|--------------|
| SIDD | Severe insulin-deficient | Early insulin, DKA risk |
| SIRD | Severe insulin-resistant | Nephropathy risk, metformin + TZD |
| MOD | Mild obesity-related | Weight loss priority |
| MARD | Mild age-related | Less intensive Rx acceptable |

**Novel Mechanisms:**
- Beta-cell dedifferentiation
- Islet amyloid
- Incretin resistance
- Lipotoxicity
- Glucotoxicity
- Inflammasome activation

**Therapeutic Frontiers:**

**Novel Targets:**
| Target | Drug Class | Mechanism |
|--------|-----------|-----------|
| GLP-1/GIP/glucagon | Triple agonists | Multiple metabolic effects |
| Beta-cell regeneration | Various | Restore beta-cell mass |
| Glucokinase activators | GK activators | Enhance glucose sensing |
| Mitochondrial uncouplers | DNP analogs | Increase energy expenditure |

**Technology:**
- Continuous glucose monitoring (CGM)
- Automated insulin delivery (AID)
- Digital therapeutics
- AI-based decision support

**Cell-Based Therapy:**
- Stem cell-derived islets
- Encapsulation approaches
- Immunomodulation
- Clinical trials ongoing

**Research Priorities:**

**Key Questions:**
1. What determines beta-cell trajectory?
2. How to achieve durable remission?
3. What precision approaches work?
4. How to implement evidence-based care globally?

**Methods:**
- Large cohort studies
- Genomic studies
- Implementation science
- Health systems research

**Political Economy:**

**Commercial Determinants:**
- Food industry (ultra-processed foods)
- Pharmaceutical industry (pricing)
- Medical device industry
- Digital health governance

**Equity:**
- Structural determinants
- Social gradients
- Indigenous populations
- Racial/ethnic disparities

**Planetary Health:**

**Climate-Diabetes Nexus:**
- Heat and glucose metabolism
- Food system sustainability
- Active transport
- Co-benefits approach`,
      keyTerms: [
        { term: 'SIDD', definition: 'Severe Insulin-Deficient Diabetes - subtype with poor insulin secretion' },
        { term: 'automated insulin delivery', definition: 'Closed-loop system linking CGM to insulin pump' },
        { term: 'beta-cell dedifferentiation', definition: 'Loss of beta-cell identity and function under metabolic stress' },
      ],
      clinicalNotes: 'Consider diabetes subtyping. Use technology appropriately. Engage with research. Advocate for access and equity.',
    },
  },

  media: [],
  citations: [
    {
      id: 'idf-atlas',
      type: 'website',
      title: 'IDF Diabetes Atlas',
      source: 'International Diabetes Federation',
      url: 'https://diabetesatlas.org/',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'ncd-epidemic', targetType: 'topic', relationship: 'parent', label: 'NCD Epidemic' },
    { targetId: 'cardiovascular-disease-global', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Disease Global' },
  ],

  tags: {
    systems: ['endocrine', 'public-health'],
    topics: ['global-health', 'diabetes', 'metabolic-disease'],
    keywords: ['diabetes', 'insulin', 'hyperglycemia', 'metabolic syndrome'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
