/**
 * Chronic Kidney Disease - Pathology Educational Content
 *
 * Covers progressive loss of kidney function over time,
 * staging, complications, and management strategies.
 */

import { EducationalContent } from '../../types';

export const chronicKidneyDisease: EducationalContent = {
  id: 'pathology-chronic-kidney-disease',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  alternateNames: ['CKD', 'Chronic Renal Failure', 'Chronic Kidney Failure', 'Kidney Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease is when the kidneys gradually lose their ability to filter blood over months or years.',
      explanation: `Chronic kidney disease (CKD) is a condition where your kidneys slowly stop working properly over a long time. Unlike acute kidney injury which happens suddenly, CKD develops gradually.

**What Happens:**
- Kidneys slowly lose their filtering ability
- Waste products build up in the blood
- The kidneys cannot make enough hormones
- Other health problems can develop

**Common Causes:**
- Diabetes (most common)
- High blood pressure (second most common)
- Inherited conditions
- Repeated kidney infections
- Long-term use of certain medications

**Stages:**
Doctors measure kidney function and divide CKD into 5 stages. Stage 1 is mild, and Stage 5 means kidney failure requiring dialysis or transplant.

**Signs and Symptoms:**
- Often no symptoms in early stages
- Tiredness
- Swelling in legs
- Poor appetite
- Nausea
- Itching
- Changes in urination

**Prevention and Treatment:**
- Control blood sugar (if diabetic)
- Control blood pressure
- Eat a kidney-friendly diet
- Take prescribed medications
- Regular check-ups

Early detection and treatment can slow or stop CKD from getting worse.`,
      keyTerms: [
        { term: 'chronic kidney disease', definition: 'Long-term, gradual loss of kidney function' },
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate; a measure of kidney function' },
        { term: 'dialysis', definition: 'Treatment to filter blood when kidneys fail' },
        { term: 'kidney transplant', definition: 'Surgery to replace a failed kidney with a healthy one' },
        { term: 'uremia', definition: 'Buildup of waste products in the blood when kidneys fail' },
      ],
      analogies: [
        'CKD is like a dimmer switch slowly turning down the lights - kidney function gradually fades over time.',
        'The kidneys are like a water treatment plant - in CKD, the filters slowly get clogged and less efficient.',
        'CKD stages are like floors in a building - the higher the stage number, the closer to kidney failure.',
      ],
      examples: [
        'About 15% of adults in the United States have CKD, but many do not know it.',
        'Diabetes and high blood pressure together cause about two-thirds of all CKD cases.',
        'A person can lose up to 90% of kidney function before feeling sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chronic kidney disease is defined by structural or functional abnormalities of the kidney persisting for more than 3 months, with implications for health, staged by glomerular filtration rate and albuminuria.',
      explanation: `**Definition (KDIGO):**
Abnormalities of kidney structure or function, present for > 3 months, with implications for health, manifested by either:
- Markers of kidney damage (albuminuria, urine sediment abnormalities, electrolyte abnormalities, histological abnormalities, structural abnormalities, history of kidney transplantation), OR
- GFR < 60 mL/min/1.73m²

**Staging (KDIGO 2012):**

**By GFR (G categories):**
- **G1:** >= 90 mL/min (normal/high)
- **G2:** 60-89 (mildly decreased)
- **G3a:** 45-59 (mildly to moderately decreased)
- **G3b:** 30-44 (moderately to severely decreased)
- **G4:** 15-29 (severely decreased)
- **G5:** < 15 (kidney failure)

**By Albuminuria (A categories):**
- **A1:** < 30 mg/g (normal to mildly increased)
- **A2:** 30-300 mg/g (moderately increased)
- **A3:** > 300 mg/g (severely increased)

**"Heat Map":** Combination of G and A categories for risk stratification

**Causes:**
- Diabetes (40-50%)
- Hypertension (25-30%)
- Glomerulonephritis (10-15%)
- Polycystic kidney disease (2-3%)
- Other/unknown (10-15%)

**Epidemiology:**
- Prevalence: 10-15% of population
- More common in elderly
- Higher rates in African Americans, Hispanics, Native Americans
- Underdiagnosed (up to 50% unaware)

**Complications:**
- Cardiovascular disease (leading cause of death)
- Anemia
- Bone and mineral disorder
- Acidosis
- Malnutrition
- Neuropathy
- Decreased immune function

**Risk Factors for Progression:**
- Diabetes
- Proteinuria
- Hypertension
- African American race (APOL1 variants)
- Smoking
- Obesity
- Recurrent AKI
- Certain medications (NSAIDs)

**Evaluation:**
- Serum creatinine/eGFR
- Urine albumin-to-creatinine ratio
- Urinalysis
- Renal ultrasound
- Identify cause
- Assess complications`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate; best measure of kidney function', pronunciation: 'ee-G-F-R' },
        { term: 'albuminuria', definition: 'Albumin in urine; marker of kidney damage' },
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes; international guideline organization' },
        { term: 'APOL1', definition: 'Apolipoprotein L1; risk variants increase CKD in African ancestry' },
        { term: 'heat map', definition: 'Color-coded risk chart combining GFR and albuminuria categories' },
      ],
      analogies: [
        'eGFR is like a speedometer for your kidneys - it tells you how fast they are filtering.',
        'Albuminuria is like a smoke alarm - it warns of kidney damage before function drops.',
        'The CKD heat map is like a weather forecast - red zones mean high risk of storms (kidney failure).',
      ],
    },
    3: {
      level: 3,
      summary: 'Chronic kidney disease pathophysiology involves progressive nephron loss with compensatory hyperfiltration, tubulointerstitial fibrosis, and systemic complications affecting multiple organ systems.',
      explanation: `**Pathophysiology of Progression:**

**Brenner Hypothesis:**
- Nephron loss leads to compensatory hyperfiltration in remaining nephrons
- Increased single-nephron GFR
- Glomerular capillary hypertension
- Podocyte injury
- Progressive sclerosis
- Vicious cycle of further nephron loss

**Mechanisms of Tubulointerstitial Fibrosis:**
- Tubular atrophy
- Interstitial inflammation
- Myofibroblast activation
- ECM deposition
- Capillary rarefaction
- Hypoxia

**Key Mediators:**
- TGF-beta (central fibrogenic cytokine)
- Angiotensin II
- Endothelin
- Inflammatory cytokines (IL-6, TNF-alpha)
- Oxidative stress
- Hypoxia-inducible factors

**Cardiovascular Disease in CKD:**
- Traditional risk factors
- CKD-specific risk factors:
  - Volume overload
  - Anemia
  - Mineral bone disorder
  - Inflammation
  - Oxidative stress
  - Vascular calcification
- Leading cause of mortality

**Anemia of CKD:**
- EPO deficiency (primary)
- Iron deficiency (functional and absolute)
- Reduced RBC lifespan
- Bone marrow suppression
- Target Hgb 11-12 g/dL

**Mineral and Bone Disorder (CKD-MBD):**
- Phosphate retention
- Vitamin D deficiency
- Secondary hyperparathyroidism
- Renal osteodystrophy types:
  - High turnover (osteitis fibrosa)
  - Low turnover (adynamic)
  - Mixed
  - Osteomalacia
- Vascular calcification

**Acidosis:**
- Reduced ammonium excretion
- Reduced bicarbonate regeneration
- Metabolic acidosis
- Contributes to bone disease and muscle wasting

**Malnutrition:**
- Protein-energy wasting
- Inflammation
- Metabolic acidosis
- Anorexia
- Dialysis losses

**Immune Dysfunction:**
- Uremic toxin effects
- Reduced neutrophil function
- Impaired cellular immunity
- Vaccine non-response
- Increased infection risk

**Uremic Toxins:**

**Small, Water-Soluble:**
- Urea
- Creatinine
- Uric acid

**Middle Molecules:**
- Beta-2 microglobulin
- PTH
- FGF-23

**Protein-Bound:**
- Indoxyl sulfate
- p-cresyl sulfate
- Homocysteine
- Advanced glycation end products

**Management Principles:**

**Slow Progression:**
- Blood pressure control (< 130/80)
- ACE inhibitors or ARBs (reduce proteinuria)
- Diabetes control (HbA1c ~7%)
- SGLT2 inhibitors (if applicable)
- Smoking cessation
- Avoid nephrotoxins

**Treat Complications:**
- Anemia: ESA, iron
- Bone disease: Phosphate binders, vitamin D
- Acidosis: Bicarbonate supplementation
- Volume overload: Diuretics
- CVD risk: Statins, aspirin (controversial)

**Preparation for ESRD:**
- Education about modalities
- Vascular access planning
- Transplant evaluation
- Advanced care planning`,
      keyTerms: [
        { term: 'hyperfiltration', definition: 'Increased filtration in remaining nephrons as compensation for nephron loss' },
        { term: 'CKD-MBD', definition: 'Chronic kidney disease-mineral and bone disorder; systemic disorder of mineral metabolism' },
        { term: 'tubulointerstitial fibrosis', definition: 'Scarring of kidney interstitium and tubules; best predictor of progression' },
        { term: 'protein-energy wasting', definition: 'Loss of body protein and energy stores in CKD' },
        { term: 'uremic toxin', definition: 'Compound that accumulates in uremia and causes symptoms' },
      ],
      clinicalNotes: 'The tubulointerstitial changes (fibrosis and atrophy) correlate better with progression than glomerular changes. SGLT2 inhibitors have revolutionized CKD management - they slow progression independent of glucose control. ACE inhibitors and ARBs reduce proteinuria and slow CKD progression but do not combine them.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive CKD management requires multidisciplinary care, precise risk stratification, evidence-based therapy to slow progression, complication management, and timely preparation for renal replacement therapy.',
      explanation: `**Risk Stratification:**

**KDIGO Heat Map:**
- Low risk (green): G1-2, A1
- Moderately increased (yellow): G3a, A2
- High risk (orange): G3b-4, A3
- Very high risk (red): G4-5, A3

**Risk Prediction Tools:**
- Kidney Failure Risk Equation (KFRE)
- 2-year and 5-year ESRD risk
- Incorporates age, sex, eGFR, ACR

**Monitoring Frequency:**
- Based on GFR and ACR category
- G1-2, A1: Annually
- G4-5, A3: Every 1-3 months

**Blood Pressure Management:**

**Target:** < 130/80 mmHg (if tolerated)

**First-Line:**
- ACE inhibitor OR ARB (if albuminuria)
- Thiazide diuretic
- Dihydropyridine CCB

**Combination:**
- ACEi/ARB + CCB preferred
- Avoid ACEi + ARB combination

**SGLT2 Inhibitors:**

**Indications:**
- Type 2 diabetes with CKD
- eGFR > 20-25 mL/min
- Continue until dialysis/transplant

**Benefits:**
- Slow CKD progression
- Reduce cardiovascular events
- Reduce heart failure hospitalizations

**Monitoring:**
- eGFR will initially drop (hemodynamic)
- Monitor for volume depletion
- Genital infections
- Euglycemic DKA (rare)

**Diabetes Management:**

**Targets:**
- HbA1c ~7% (individualize)
- Avoid hypoglycemia
- Metformin if eGFR > 30

**Agents:**
- SGLT2 inhibitors (first-line for CKD)
- GLP-1 agonists (CV benefit)
- Insulin (dose adjust for eGFR)

**Anemia Management:**

**Evaluation:**
- Iron studies (ferritin, TSAT)
- B12, folate
- Rule out other causes

**Iron Therapy:**
- Replete first
- Oral if mild, IV if severe or on dialysis
- Target: Ferritin 200-500, TSAT > 20%

**ESA Therapy:**
- Start when Hgb < 10 and symptomatic
- Target Hgb 11-12
- Darbepoetin, epoetin, Mircera

**CKD-Mineral Bone Disorder:**

**Monitoring:**
- Calcium, phosphate, PTH every 6-12 months (G3-5)
- 25-OH vitamin D

**Phosphate Control:**
- Dietary restriction (800-1000 mg/day)
- Phosphate binders with meals
  - Calcium acetate
  - Sevelamer
  - Lanthanum
  - Iron-based binders

**Vitamin D:**
- Replete deficiency
- Active vitamin D if hyperparathyroidism
- Calcitriol or analogs

**Calcimimetics:**
- Cinacalcet, etelcalcetide
- Lower PTH
- Hypocalcemia risk

**Cardiovascular Risk:**

**Statins:**
- Recommended for all CKD (not dialysis)
- Atorvastatin or rosuvastatin
- Reduce CV events

**Aspirin:**
- Secondary prevention
- Primary prevention controversial

**Lifestyle:**
- Smoking cessation
- Exercise
- Weight management

**Dietary Management:**

**Protein:**
- 0.8 g/kg/day (non-dialysis)
- 1.0-1.2 g/kg/day (dialysis)

**Sodium:**
- < 2 g/day (88 mmol/day)

**Phosphorus:**
- 800-1000 mg/day

**Potassium:**
- Individualize
- Restrict if hyperkalemic

**Preparation for ESRD:**

**Education:**
- Modalities (HD, PD, transplant)
- Conservative management option
- Expected course

**Access Planning:**
- AVF creation when eGFR 15-20
- Permits maturation time
- "Fistula first"

**Transplant Evaluation:**
- Refer when eGFR < 30
- Preemptive preferred
- Living donor identification

**Advance Care Planning:**
- Goals of care discussion
- Advance directives
- Particularly important in elderly/frail`,
      keyTerms: [
        { term: 'KFRE', definition: 'Kidney Failure Risk Equation; predicts 2-year and 5-year risk of ESRD' },
        { term: 'phosphate binder', definition: 'Medication that binds dietary phosphate in the gut' },
        { term: 'ESA', definition: 'Erythropoiesis-stimulating agent; treats anemia of CKD' },
        { term: 'calcimimetic', definition: 'Drug that mimics calcium at parathyroid calcium-sensing receptor' },
        { term: 'preemptive transplant', definition: 'Transplant performed before initiation of dialysis' },
      ],
      clinicalNotes: 'KDIGO 2022 guidelines: SGLT2 inhibitors are first-line for diabetes with CKD regardless of HbA1c. Do not combine ACE inhibitors with ARBs. KFRE can stratify risk and guide referral timing - patients with > 40% 2-year risk should be referred for vascular access. Consider conservative management (no dialysis) for elderly frail patients with poor prognosis.',
    },
    5: {
      level: 5,
      summary: 'Advanced CKD care encompasses precision medicine approaches, novel therapeutics, health equity considerations, integrated care models, and patient-centered decision making for optimal outcomes.',
      explanation: `**Precision Medicine in CKD:**

**Genetic Risk Stratification:**
- APOL1 genotyping (African ancestry)
- Risk variants: G1, G2
- High-risk genotype counseling
- Transplant donor selection

**Pharmacogenomics:**
- ACE inhibitor response
- Warfarin dosing
- Statin myopathy risk

**Proteomics and Metabolomics:**
- CKD273 classifier (urinary proteomics)
- Predicts progression
- Guides therapy

**Novel Therapeutics:**

**Finerenone:**
- Non-steroidal MRA
- Added to ACEi/ARB in diabetic CKD
- Reduces CKD progression and CV events
- Monitor potassium

**Bardoxolone Methyl:**
- Nrf2 activator
- Improves eGFR
- Safety concerns (CV events)
- Alport syndrome approval

**Endothelin Antagonists:**
- Atrasentan (phase 3 trials)
- Reduces proteinuria
- Fluid retention risk

**Anti-Inflammatory Agents:**
- Pentoxifylline
- Baricitinib (diabetic CKD)

**GLP-1 Receptor Agonists:**
- Semaglutide, liraglutide
- Cardiovascular risk reduction
- Some renal benefit
- Weight loss

**Integrated Care Models:**

**Multidisciplinary Clinics:**
- Nephrologist
- Nurse practitioner/physician assistant
- Dietitian
- Social worker
- Pharmacist

**Primary Care Integration:**
- Co-management protocols
- eConsults
- Shared care pathways

**Telemedicine:**
- Remote monitoring
- Virtual visits
- mHealth applications

**Health Equity:**

**Disparities in CKD:**
- Higher prevalence in minorities
- Faster progression
- Less access to transplant
- Social determinants

**Interventions:**
- Community-based screening
- Culturally tailored education
- Transportation assistance
- Insurance navigation

**Patient-Reported Outcomes:**
- KDQOL
- Fatigue scales
- Depression screening
- Treatment burden assessment

**Conservative Management:**

**Appropriate Candidates:**
- Elderly with high comorbidity
- Severe frailty
- Limited life expectancy
- Patient preference

**Components:**
- Symptom management
- Advance care planning
- Palliative care involvement
- Expected survival 6-24 months

**Transplant Innovation:**

**Highly Sensitized Patients:**
- Desensitization protocols
- Paired exchange
- Desensitization vs dialysis outcomes

**Xenotransplantation:**
- Gene-edited pig kidneys
- Clinical trials beginning

**Regenerative Medicine:**
- Stem cell therapies
- Bioengineered kidneys

**Quality Improvement:**

**CKD Recognition:**
- Automated eGFR reporting
- Laboratory alerts
- Primary care education

**Appropriate Referral:**
- eGFR < 30 or ACR > 300
- Rapid progression
- Resistant hypertension
- Glomerulonephritis

**Vascular Access:**
- "Fistula first" initiatives
- Timely referral
- Access monitoring

**Transitions:**
- CKD to ESRD
- Dialysis to transplant
- Hospital to home

**Future Directions:**

**Artificial Intelligence:**
- Risk prediction
- Progression modeling
- Treatment selection

**Digital Health:**
- Wearables for monitoring
- Medication adherence
- Telemedicine expansion

**Biomarker Development:**
- Early detection
- Progression prediction
- Treatment response

**Patient Engagement:**
- Shared decision-making
- Peer support
- Self-management education

**Policy Implications:**
- Organ allocation
- Reimbursement models
- Health system design
- Global CKD burden`,
      keyTerms: [
        { term: 'CKD273', definition: 'Urinary proteomic classifier that predicts CKD progression' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist for diabetic CKD' },
        { term: 'conservative management', definition: 'Non-dialytic care for ESRD focusing on quality of life' },
        { term: 'Nrf2', definition: 'Nuclear factor erythroid 2-related factor 2; transcription factor for antioxidant response' },
        { term: 'KDQOL', definition: 'Kidney Disease Quality of Life; patient-reported outcome measure' },
      ],
      clinicalNotes: `Advanced CKD management pearls:
1. Finerenone is approved as add-on therapy for diabetic CKD - provides additional cardiorenal protection on top of SGLT2 inhibitors and ACEi/ARB
2. APOL1 high-risk genotypes explain much of the excess CKD in African Americans - important for genetic counseling and living donor evaluation
3. CKD273 proteomic classifier can identify high-risk patients who may benefit from more intensive intervention
4. Conservative management (no dialysis) should be offered to elderly frail patients - survival similar to dialysis but better quality of life
5. Multidisciplinary care models improve outcomes - integrating dietitians, pharmacists, and social workers into CKD clinics
6. Xenotransplantation with gene-edited pig kidneys may solve organ shortage in coming years`,
    },
  },

  media: [
    {
      id: 'ckd-staging',
      type: 'diagram',
      filename: 'ckd-staging-heatmap.svg',
      title: 'CKD Staging Heat Map',
      description: 'KDIGO risk stratification by GFR and albuminuria categories',
    },
  ],

  citations: [
    {
      id: 'kdigo-ckd',
      type: 'article',
      title: 'KDIGO 2012 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
      source: 'Kidney International',
    },
    {
      id: 'dapa-ckd-trial',
      type: 'article',
      title: 'Dapagliflozin in Patients with Chronic Kidney Disease',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron Structure' },
    { targetId: 'pathology-diabetic-nephropathy', targetType: 'condition', relationship: 'child', label: 'Diabetic Nephropathy' },
    { targetId: 'pathology-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'Acute Kidney Injury' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['pathology', 'clinical', 'chronic-disease'],
    keywords: ['chronic kidney disease', 'CKD', 'ESRD', 'kidney failure', 'renal disease'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default chronicKidneyDisease;
