/**
 * Type 2 Diabetes Mellitus - Patient Education
 *
 * Comprehensive patient education focusing on lifestyle and self-management.
 */

import { EducationalContent } from '../../types';

export const TYPE_2_DIABETES_PATIENT_ED: EducationalContent = {
  id: 'endocrinology-diabetes-type2-patient',
  type: 'condition',
  name: 'Type 2 Diabetes',
  alternateNames: ['T2DM', 'Adult-onset diabetes', 'Non-insulin-dependent diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Type 2 diabetes is when your body has trouble using insulin properly, causing sugar to build up in your blood.',
      explanation: `**What is Type 2 Diabetes?**

Your body needs insulin to move sugar from your blood into your cells for energy. In Type 2 diabetes, two things happen:
1. Your body does not respond well to insulin (called "insulin resistance")
2. Over time, your body may not make enough insulin

Think of it like a lock and key. Insulin is the key, and your cells have locks. In Type 2 diabetes, the locks become rusty and the keys do not work as well.

**Who Gets Type 2 Diabetes?**

It is more common in people who:
- Are overweight, especially around the belly
- Do not get much exercise
- Have family members with diabetes
- Are over 45 years old
- Have had gestational diabetes

**Warning Signs:**
- Feeling tired
- Being thirsty more than usual
- Needing to urinate often
- Blurry vision
- Cuts that heal slowly
- Tingling in hands or feet

**The Good News:**

Type 2 diabetes can often be managed or even improved with lifestyle changes:
- Eating healthier foods
- Moving more and exercising
- Losing even a little weight (5-10% helps a lot!)
- Taking medications if needed

**Daily Management:**
- Check blood sugar as recommended
- Take medications on time
- Eat regular, balanced meals
- Stay active
- See your doctor regularly`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'When your body does not respond well to insulin, like a rusty lock that does not open easily' },
        { term: 'blood sugar', definition: 'The amount of sugar in your blood; also called glucose' },
        { term: 'lifestyle changes', definition: 'Healthy habits like better eating and more exercise that can improve diabetes' },
      ],
      analogies: [
        'Insulin resistance is like having rusty locks on your cells - the insulin key does not work as smoothly.',
        'Managing diabetes is like maintaining a car - regular check-ups and good fuel keep it running well.',
        'Blood sugar is like fuel - you need the right amount, not too much or too little.',
      ],
      examples: [
        'Someone with Type 2 diabetes might take a pill with breakfast to help their insulin work better.',
        'Walking for 30 minutes after dinner can help lower blood sugar levels.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type 2 diabetes develops when insulin resistance combines with progressive beta cell dysfunction, leading to chronic hyperglycemia. It is often manageable with lifestyle changes and medications.',
      explanation: `**Understanding Type 2 Diabetes**

Type 2 diabetes is the most common form of diabetes (90-95% of cases). It develops gradually as:
1. Cells become resistant to insulin (especially muscle, fat, and liver)
2. The pancreas makes more insulin to compensate
3. Eventually, the pancreas cannot keep up, and blood sugar rises

**Risk Factors:**
- Overweight/obesity (especially central/abdominal)
- Physical inactivity
- Family history (parent or sibling with T2DM)
- Age over 45
- Certain ethnicities (higher risk in Black, Hispanic, Asian, Pacific Islander)
- History of gestational diabetes
- Polycystic ovary syndrome (PCOS)
- Prediabetes

**Diagnosis:**
| Test | Normal | Prediabetes | Diabetes |
|------|--------|-------------|----------|
| Fasting glucose | <100 mg/dL | 100-125 mg/dL | ≥126 mg/dL |
| HbA1c | <5.7% | 5.7-6.4% | ≥6.5% |
| 2-hour OGTT | <140 mg/dL | 140-199 mg/dL | ≥200 mg/dL |

**Symptoms (often subtle or absent):**
- Increased thirst and urination
- Fatigue
- Blurred vision
- Slow-healing wounds
- Numbness/tingling (neuropathy)
- Frequent infections

**Treatment Approach:**

*Lifestyle Modifications (Foundation):*
- Diet: Reduce refined carbs/sugars, increase fiber
- Exercise: 150+ minutes/week moderate activity
- Weight loss: 5-10% improves insulin sensitivity

*Medications:*
- First-line: Metformin (reduces liver glucose production)
- Add-on options: SGLT2 inhibitors, GLP-1 agonists, DPP-4 inhibitors
- Some people eventually need insulin

*Monitoring:*
- Blood sugar checks (frequency varies)
- HbA1c every 3-6 months
- Blood pressure and cholesterol monitoring
- Regular foot and eye exams

**Preventing Complications:**
- Keep blood sugar, blood pressure, and cholesterol in target range
- Do not smoke
- Annual dilated eye exam
- Check feet daily for cuts or sores
- Regular kidney function testing`,
      keyTerms: [
        { term: 'insulin resistance', definition: 'Reduced sensitivity to insulin, requiring more insulin to have the same effect' },
        { term: 'beta cell dysfunction', definition: 'Decreased ability of pancreatic beta cells to produce adequate insulin' },
        { term: 'HbA1c', definition: 'Hemoglobin A1c - shows average blood sugar over 2-3 months', pronunciation: 'H-B-A-one-C' },
        { term: 'metformin', definition: 'First-choice medication that reduces glucose production by the liver' },
        { term: 'prediabetes', definition: 'Blood sugar higher than normal but not yet diabetes; a warning stage' },
      ],
      analogies: [
        'Prediabetes is like a yellow traffic light - a warning to slow down and make changes before diabetes develops.',
        'Insulin resistance makes your pancreas work overtime, like an employee working double shifts until burnout.',
      ],
    },
    3: {
      level: 3,
      summary: 'T2DM results from insulin resistance primarily in skeletal muscle and liver combined with progressive beta cell failure. Management follows a stepwise approach targeting glycemic, cardiovascular, and renal risk.',
      explanation: `**Pathophysiology of Type 2 Diabetes**

The "Ominous Octet" (DeFronzo) describes multiple defects:
1. Decreased muscle glucose uptake (insulin resistance)
2. Increased hepatic glucose production
3. Progressive beta cell failure
4. Increased lipolysis (adipocyte insulin resistance)
5. Decreased incretin effect
6. Increased glucagon secretion
7. Increased renal glucose reabsorption
8. Neurotransmitter dysfunction

**Insulin Resistance Mechanisms:**
- Intracellular lipid accumulation (diacylglycerols, ceramides)
- Inflammatory cytokines (TNF-α, IL-6)
- Impaired insulin receptor signaling (IRS-1 phosphorylation)
- Mitochondrial dysfunction

**Diagnostic Criteria (ADA):**
- Fasting plasma glucose ≥126 mg/dL (7.0 mmol/L)
- 2-hour OGTT glucose ≥200 mg/dL (11.1 mmol/L)
- HbA1c ≥6.5% (48 mmol/mol)
- Random glucose ≥200 mg/dL with classic symptoms

**Pharmacotherapy by Mechanism:**

| Class | Mechanism | HbA1c Reduction | Key Benefits/Risks |
|-------|-----------|-----------------|-------------------|
| Metformin | ↓ Hepatic glucose output | 1.0-1.5% | CV neutral, weight neutral, GI side effects |
| SGLT2i | ↓ Renal glucose reabsorption | 0.5-1.0% | CV/renal benefits, genital infections |
| GLP-1 RA | ↑ Insulin, ↓ glucagon, ↓ appetite | 1.0-1.5% | CV benefit, weight loss, GI side effects |
| DPP-4i | Enhance endogenous incretins | 0.5-0.8% | Weight neutral, well tolerated |
| TZDs | ↑ Insulin sensitivity (PPARγ) | 1.0-1.5% | Edema, weight gain, fractures |
| Sulfonylureas | ↑ Insulin secretion | 1.0-1.5% | Hypoglycemia, weight gain |
| Insulin | Exogenous replacement | Variable | Flexible, hypoglycemia risk |

**Treatment Algorithm (Simplified):**

1. First-line: Metformin + lifestyle (unless contraindicated)
2. If HbA1c not at goal after 3 months, add second agent:
   - ASCVD present → GLP-1 RA or SGLT2i with proven benefit
   - Heart failure → SGLT2i
   - CKD → SGLT2i or GLP-1 RA
   - Need weight loss → GLP-1 RA or SGLT2i
   - Cost concern → Sulfonylurea or TZD

**Glycemic Targets:**
- HbA1c <7% for most adults
- Tighter (<6.5%) if achievable without hypoglycemia
- Less stringent (7.5-8%) for elderly, limited life expectancy, hypoglycemia risk

**Comprehensive Care:**
- Blood pressure goal: <130/80 mmHg
- Lipids: Statin for most patients; LDL <70 for ASCVD
- Aspirin: Secondary prevention; primary if high risk
- Annual: Dilated eye exam, foot exam, kidney function, urine albumin`,
      keyTerms: [
        { term: 'incretin effect', definition: 'Gut hormones (GLP-1, GIP) that enhance insulin secretion after eating' },
        { term: 'SGLT2 inhibitor', definition: 'Medication blocking glucose reabsorption in kidney, causing glucose excretion in urine' },
        { term: 'GLP-1 receptor agonist', definition: 'Injectable mimicking incretin hormone, improving glucose and causing weight loss' },
        { term: 'PPARγ', definition: 'Nuclear receptor regulating insulin sensitivity; target of thiazolidinediones' },
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease - heart attack, stroke, peripheral artery disease' },
      ],
      clinicalNotes: 'Current guidelines prioritize cardiorenal protection over glucose-centric approaches. SGLT2i and GLP-1 RA with proven CV/renal benefits should be considered early in appropriate patients, independent of HbA1c level.',
    },
    4: {
      level: 4,
      summary: 'T2DM pathophysiology involves complex interactions between genetic susceptibility, insulin resistance, beta cell dysfunction, and metabolic inflammation. Treatment paradigms now emphasize disease modification through cardiorenal-protective agents.',
      explanation: `**Advanced Pathophysiology**

*Genetic Architecture:*
- Polygenic inheritance (>100 loci identified)
- TCF7L2: Strongest common variant (OR ~1.4)
- Beta cell-related genes predominate (KCNJ11, ABCC8, SLC30A8)
- Monogenic forms: MODY1-6, neonatal diabetes

*Molecular Mechanisms of Insulin Resistance:*
- IRS-1 serine phosphorylation (inhibits signaling)
- Diacylglycerol accumulation → PKC activation
- Ceramide-induced Akt inhibition
- ER stress and unfolded protein response
- Mitochondrial ROS overproduction

*Beta Cell Failure:*
- Glucotoxicity: Impaired GSIS, decreased insulin gene expression
- Lipotoxicity: ER stress, apoptosis from saturated FFA
- Islet amyloid polypeptide (IAPP) aggregation
- Dedifferentiation to non-insulin producing state
- Progressive loss (~4% beta cell mass/year)

**Cardiorenal Risk in T2DM**

*ASCVD Risk:*
- 2-4x increased CV mortality
- Accelerated atherosclerosis (oxidized LDL, inflammation)
- Endothelial dysfunction (reduced NO bioavailability)
- Platelet hyperreactivity

*Diabetic Kidney Disease:*
- 40% of T2DM develop CKD
- Glomerular hyperfiltration → microalbuminuria → macroalbuminuria → ESRD
- Tubulointerstitial fibrosis and inflammation
- GFR decline ~3-5 mL/min/year without treatment

**Evidence-Based Cardiorenal Protection**

*SGLT2 Inhibitors - Key Trials:*
- EMPA-REG OUTCOME: Empagliflozin ↓ CV death 38%
- CANVAS: Canagliflozin ↓ MACE 14%
- DAPA-HF: Dapagliflozin ↓ HF hospitalization (with/without diabetes)
- CREDENCE: Canagliflozin ↓ renal outcomes 30%

Mechanisms beyond glucose:
- Natriuresis, glycosuria, weight loss
- ↓ Intraglomerular pressure
- ↓ Preload and afterload
- Improved cardiac energetics (ketone metabolism)

*GLP-1 Receptor Agonists - Key Trials:*
- LEADER: Liraglutide ↓ MACE 13%, CV death 22%
- SUSTAIN-6: Semaglutide ↓ MACE 26%
- REWIND: Dulaglutide ↓ MACE 12%
- FLOW: Semaglutide ↓ renal endpoints

Mechanisms:
- Anti-atherosclerotic (reduced inflammation, plaque stability)
- Weight loss and metabolic improvement
- Direct cardiac and renal effects (GLP-1 receptors in heart, kidney)

**Triple Therapy Era: Metformin + SGLT2i + GLP-1 RA**

Emerging data supports early combination:
- Complementary mechanisms
- Enhanced cardiorenal protection
- Weight loss synergy
- Durable glycemic control

**Tirzepatide (Dual GIP/GLP-1 Agonist):**
- SURPASS trials: HbA1c reduction up to 2.5%
- Weight loss 15-20% (approaching bariatric surgery)
- Superior to semaglutide in head-to-head trials
- Mechanism: Dual incretin agonism with enhanced beta cell effects

**Precision Medicine Approaches:**
- Genetic risk scores for beta cell function vs insulin resistance
- Pharmacogenomics (metformin response variants)
- Cluster analysis identifying T2DM subtypes (SIRD, MOD, etc.)`,
      keyTerms: [
        { term: 'TCF7L2', definition: 'Transcription factor 7-like 2 gene - strongest common genetic variant for T2DM risk' },
        { term: 'glucotoxicity', definition: 'Chronic hyperglycemia-induced beta cell dysfunction and death' },
        { term: 'lipotoxicity', definition: 'Cellular damage from excess free fatty acids and lipid metabolites' },
        { term: 'MACE', definition: 'Major adverse cardiovascular events - CV death, MI, stroke composite' },
        { term: 'tirzepatide', definition: 'Dual GIP/GLP-1 receptor agonist with superior glucose and weight effects' },
      ],
      clinicalNotes: 'The T2DM treatment paradigm has shifted from glucocentric to cardiorenal-protective. SGLT2i and GLP-1 RA should be considered for all patients with established ASCVD, HF, or CKD regardless of HbA1c. Early combination therapy is increasingly favored over sequential add-on.',
    },
    5: {
      level: 5,
      summary: 'Contemporary T2DM management integrates molecular phenotyping, cardiorenal-protective pharmacotherapy, and emerging precision medicine approaches including incretin-based weight management and beta cell preservation strategies.',
      explanation: `**T2DM Heterogeneity and Subtyping**

*Data-Driven Clusters (Ahlqvist et al.):*
| Cluster | Characteristics | Treatment Implications |
|---------|-----------------|----------------------|
| SIRD (Severe Insulin Resistant) | High BMI, insulin resistance | Metformin, TZDs, weight loss |
| SIDD (Severe Insulin Deficient) | Low HOMA-B, rapid progression | Earlier insulin, GLP-1 RA |
| MOD (Mild Obesity-Related) | High BMI, metabolic syndrome | Lifestyle, SGLT2i, GLP-1 RA |
| MARD (Mild Age-Related) | Older onset, mild features | Less aggressive targets |

*Clinical Biomarkers for Phenotyping:*
- HOMA-IR, HOMA-B, fasting C-peptide
- Adipokines (adiponectin, leptin)
- Inflammatory markers (hsCRP, IL-6)
- Genetic risk scores

**Incretin-Based Obesity Treatment**

*High-Dose GLP-1 RA for Weight Management:*
- Semaglutide 2.4mg weekly: 15-17% weight loss (STEP trials)
- Tirzepatide 15mg weekly: 20-25% weight loss (SURMOUNT trials)
- Approaching bariatric surgery efficacy

*Mechanistic Synergy in Diabetes + Obesity:*
- Central appetite suppression
- Delayed gastric emptying
- Improved insulin sensitivity from weight loss
- Enhanced beta cell function
- Reduced hepatic steatosis

**Metabolic Surgery (Bariatric) for T2DM**

*Outcomes:*
- 60-80% T2DM remission at 5 years (varies by procedure)
- Superior to medical therapy (STAMPEDE, Swedish Obese Subjects)
- Reduces CV events and mortality

*Mechanisms Beyond Weight Loss:*
- Altered gut hormone secretion (GLP-1 ↑, ghrelin ↓)
- Changed bile acid metabolism
- Gut microbiome alterations
- Intestinal gluconeogenesis changes

*Surgical Options:*
- RYGB: Most durable diabetes remission
- VSG: Simpler, comparable short-term outcomes
- SADI-S/DS: Greatest weight loss, most malabsorption

**Beta Cell Preservation Strategies**

*GLP-1 RA Effects on Beta Cells:*
- Enhanced glucose-stimulated insulin secretion
- Reduced apoptosis (animal models)
- Potential for beta cell mass preservation
- Clinical evidence: RISE, GRADE showing durability

*Investigational Approaches:*
- Anti-inflammatory agents (targeting islet inflammation)
- IAPP aggregation inhibitors
- Dedifferentiation reversal strategies

**Advanced Cardiovascular Risk Management**

*Comprehensive Risk Reduction:*
- SGLT2i: Benefits in HFrEF and HFpEF (EMPEROR, DELIVER trials)
- GLP-1 RA: Atherosclerotic protection, emerging HF data
- Finerenone: Non-steroidal MRA reducing HF and CKD progression

*LDL Management:*
- High-intensity statin for all with ASCVD
- Ezetimibe if LDL not at goal
- PCSK9 inhibitors for high-risk patients
- Bempedoic acid for statin-intolerant

*Blood Pressure:*
- ACEi/ARB for CKD/albuminuria
- Target <130/80 mmHg if tolerated
- Combination often needed

**Precision Diagnostics and Monitoring**

*Continuous Glucose Monitoring in T2DM:*
- GMI replacing sporadic HbA1c
- Time in Range metrics applicable
- Useful for insulin-treated and hypoglycemia-prone patients

*Non-Invasive Fibrosis Assessment:*
- FIB-4, NAFLD fibrosis score
- Vibration-controlled transient elastography
- MASLD/MASH screening in all T2DM

**Future Directions:**
- Triple agonists (GIP/GLP-1/glucagon)
- Oral GLP-1 RA (semaglutide, rybelsus)
- Gene therapy approaches
- Microbiome modulation
- Digital therapeutics integration
- Closed-loop systems adapted for T2DM`,
      keyTerms: [
        { term: 'SIRD', definition: 'Severe Insulin Resistant Diabetes - T2DM cluster characterized by obesity and high insulin resistance' },
        { term: 'HOMA-IR', definition: 'Homeostatic Model Assessment of Insulin Resistance - index from fasting glucose/insulin' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist reducing cardiorenal events in T2DM' },
        { term: 'FIB-4', definition: 'Fibrosis-4 index - non-invasive score estimating liver fibrosis' },
        { term: 'MASLD', definition: 'Metabolic dysfunction-associated steatotic liver disease - new nomenclature for fatty liver' },
      ],
      clinicalNotes: 'T2DM management has become increasingly personalized. Emerging evidence supports early combination with cardiorenal-protective agents. High-dose incretin therapy approaches bariatric surgery for weight loss. Liver disease (MASLD/MASH) is increasingly recognized as a major comorbidity requiring active surveillance. The future lies in precision phenotyping to guide individualized treatment.',
    },
  },

  media: [],
  citations: [
    {
      id: 'ada-standards-2024',
      type: 'article',
      title: 'Standards of Care in Diabetes',
      authors: ['American Diabetes Association Professional Practice Committee'],
      source: 'Diabetes Care',
      url: 'https://diabetesjournals.org/care',
    },
    {
      id: 'defronzo-ominous-octet',
      type: 'article',
      title: 'From the Triumvirate to the Ominous Octet',
      authors: ['DeFronzo RA'],
      source: 'Diabetes 2009;58:1251-1257',
    },
  ],
  crossReferences: [
    { targetId: 'endocrinology-diabetes-type1-patient', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'endocrinology-prediabetes', targetType: 'condition', relationship: 'see-also', label: 'Prediabetes' },
    { targetId: 'endocrinology-metabolic-syndrome', targetType: 'condition', relationship: 'related', label: 'Metabolic Syndrome' },
  ],
  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'insulin resistance', 'metabolic disease', 'self-management'],
    keywords: ['type 2 diabetes', 'T2DM', 'metformin', 'SGLT2 inhibitor', 'GLP-1'],
    clinicalRelevance: 'critical',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
