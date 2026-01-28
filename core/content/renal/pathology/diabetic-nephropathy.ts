/**
 * Diabetic Nephropathy - Pathology Educational Content
 *
 * Covers kidney disease secondary to diabetes mellitus,
 * including pathophysiology, histology, and management.
 */

import { EducationalContent } from '../../types';

export const diabeticNephropathy: EducationalContent = {
  id: 'pathology-diabetic-nephropathy',
  type: 'condition',
  name: 'Diabetic Nephropathy',
  alternateNames: ['Diabetic Kidney Disease', 'DKD', 'Diabetic Glomerulosclerosis', 'Kimmelstiel-Wilson Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetic nephropathy is kidney damage caused by diabetes that can lead to kidney failure over time.',
      explanation: `Diabetic nephropathy is a complication of diabetes that affects the kidneys. High blood sugar levels over many years can damage the tiny filters in your kidneys.

**How Diabetes Damages Kidneys:**
- High blood sugar damages blood vessels in the kidneys
- The filters (glomeruli) become scarred
- Protein leaks into urine
- Kidneys slowly lose function
- May eventually lead to kidney failure

**Who Gets It:**
- About 1 in 3 adults with diabetes develops kidney disease
- More common in people who have had diabetes for many years
- Higher risk with poor blood sugar control
- More common in type 1 diabetes, but also occurs in type 2

**Early Signs:**
- Protein in urine (microalbumin)
- High blood pressure
- Swelling in legs
- No symptoms in early stages

**Prevention:**
- Good blood sugar control
- Blood pressure control
- ACE inhibitors or ARBs
- Regular kidney check-ups

**Treatment:**
- Medications to protect kidneys
- Blood pressure control
- Diabetes management
- May eventually need dialysis or transplant

Finding it early and treating it can slow or stop the damage.`,
      keyTerms: [
        { term: 'diabetic nephropathy', definition: 'Kidney disease caused by diabetes' },
        { term: 'glomeruli', definition: 'Tiny filters in the kidneys' },
        { term: 'microalbumin', definition: 'Small amounts of protein in urine; early sign of kidney damage' },
        { term: 'ACE inhibitor', definition: 'Medication that protects kidneys and lowers blood pressure' },
        { term: 'proteinuria', definition: 'Protein in the urine; sign of kidney damage' },
      ],
      analogies: [
        'High blood sugar is like sand in the gears of a machine - it slowly wears down the kidney\'s filters.',
        'The glomeruli are like coffee filters - diabetes makes them leaky so protein slips through.',
        'Diabetic kidney disease is like a slow leak in a dam - it takes years but can eventually cause failure if not fixed.',
      ],
      examples: [
        'A person with type 1 diabetes for 20 years has about a 50% chance of developing kidney disease.',
        'Urine tests can find tiny amounts of protein years before kidney function drops.',
        'Good blood sugar control can reduce the risk of kidney disease by up to 50%.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetic nephropathy is a microvascular complication of diabetes characterized by albuminuria, progressive decline in glomerular filtration rate, and specific histopathological changes including mesangial expansion and glomerulosclerosis.',
      explanation: `**Natural History:**

**Type 1 Diabetes:**
- Hyperfiltration (early)
- Microalbuminuria (5-15 years)
- Overt proteinuria (15-25 years)
- Renal failure (25-30 years)

**Type 2 Diabetes:**
- Variable; may present at diagnosis
- Often with other comorbidities
- May have non-diabetic kidney disease

**Stages:**
1. **Stage 1:** Hyperfiltration (GFR increased)
2. **Stage 2:** Silent (normal GFR, structural changes)
3. **Stage 3:** Microalbuminuria (30-300 mg/day)
4. **Stage 4:** Macroalbuminuria (> 300 mg/day), declining GFR
5. **Stage 5:** End-stage renal disease

**Clinical Features:**
- Albuminuria (earliest marker)
- Hypertension
- Progressive renal insufficiency
- Edema (nephrotic range proteinuria)
- Retinopathy (strongly associated)

**Histological Features:**

**Glomerular:**
- Mesangial expansion (earliest)
- Basement membrane thickening
- Nodular glomerulosclerosis (Kimmelstiel-Wilson nodules)
- Diffuse glomerulosclerosis
- Capsular drop lesions
- Fibrin cap lesions

**Tubulointerstitial:**
- Tubular atrophy
- Interstitial fibrosis
- Inflammation

**Vascular:**
- Hypertensive changes
- Atherosclerosis
- Arteriolosclerosis

**Risk Factors:**
- Poor glycemic control
- Hypertension
- Duration of diabetes
- Genetic predisposition
- Smoking
- Obesity
- Hyperlipidemia

**Screening:**
- Annual urine albumin-to-creatinine ratio (UACR)
- eGFR measurement
- Earlier/more frequent if abnormal`,
      keyTerms: [
        { term: 'albuminuria', definition: 'Albumin in urine; marker of glomerular injury in diabetes' },
        { term: 'hyperfiltration', definition: 'Increased GFR early in diabetes; may contribute to progression' },
        { term: 'mesangial expansion', definition: 'Accumulation of matrix in mesangial areas of glomerulus' },
        { term: 'Kimmelstiel-Wilson nodules', definition: 'Spherical mesangial nodules pathognomonic for diabetic nephropathy' },
        { term: 'UACR', definition: 'Urine albumin-to-creatinine ratio; screening test for albuminuria' },
      ],
      analogies: [
        'Mesangial expansion is like packing peanuts filling up the space in the glomerulus, crowding out the filtering surface.',
        'Basement membrane thickening is like adding extra layers to a filter - it gets clogged and does not work as well.',
        'Kimmelstiel-Wilson nodules are like scar tissue balls that form as the glomerulus tries to heal from chronic damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetic nephropathy involves complex pathophysiology including hemodynamic changes, metabolic pathways, growth factor activation, and inflammatory responses leading to progressive glomerular and tubulointerstitial damage.',
      explanation: `**Pathophysiology:**

**Hemodynamic Factors:**
- Glomerular hyperfiltration
- Elevated glomerular capillary pressure
- Afferent arteriole dilation (prostaglandins, NO)
- Efferent arteriole constriction (Ang II)
- Shear stress on endothelium

**Metabolic Pathways:**

**Advanced Glycation End Products (AGEs):**
- Non-enzymatic glycation of proteins
- Cross-link collagen
- Activate RAGE receptors
- Promote inflammation and fibrosis

**Polyol Pathway:**
- Aldose reductase converts glucose to sorbitol
- Sorbitol to fructose
- NADPH consumption
- Oxidative stress

**Protein Kinase C (PKC):**
- Activated by diacylglycerol
- Vasoconstriction
- VEGF production
- Extracellular matrix expansion

**Hexosamine Pathway:**
- GFAT activation
- O-GlcNAcylation of proteins
- Altered gene expression

**Oxidative Stress:**
- Mitochondrial superoxide production
- NADPH oxidase activation
- Lipid peroxidation
- DNA damage

**Growth Factors and Cytokines:**
- TGF-beta: Key fibrogenic cytokine
- VEGF: Angiogenesis, permeability
- CTGF: Connective tissue growth
- PDGF: Mesangial cell proliferation
- IL-6, TNF-alpha: Inflammation

**Hemodynamic-Metabolic Interaction:**
- Hyperglycemia + hyperfiltration synergistic
- ACE inhibitors reduce both pressure and metabolic effects

**Histological Progression:**

**Class I:** Thickening of GBM only
**Class II:** Mesangial expansion, mild (IIa) or severe (IIb)
**Class III:** Nodular sclerosis (Kimmelstiel-Wilson)
**Class IV:** Advanced diabetic glomerulosclerosis (> 50% global glomerulosclerosis)

**Tubulointerstitial Changes:**
- Interstitial fibrosis correlates with prognosis
- Tubular atrophy
- Inflammatory infiltrate

**Non-Diabetic Kidney Disease in Diabetics:**

**Prevalence:**
- 15-50% of type 2 diabetics with kidney disease
- Must exclude other causes

**Clues to Non-Diabetic Disease:**
- Absence of retinopathy
- Rapid decline in GFR
- Active urine sediment (RBC casts)
- Rapid onset proteinuria
- Significant hematuria
- Systemic symptoms

**Types:**
- Hypertensive nephrosclerosis
- Glomerulonephritis
- Renovascular disease
- Obstructive uropathy

**Biopsy Indications:**
- Atypical features
- Rapid progression
- Active sediment
- Diagnostic uncertainty

**Treatment:**

**Glycemic Control:**
- Target HbA1c < 7% (individualize)
- Metformin (eGFR > 30)
- SGLT2 inhibitors (cardiorenal protection)
- GLP-1 agonists (CV benefit)
- Insulin as needed

**Blood Pressure Control:**
- Target < 130/80 mmHg
- ACE inhibitors or ARBs (first-line)
- Add dihydropyridine CCB or thiazide

**Additional Measures:**
- Statin therapy
- Smoking cessation
- Weight loss
- Sodium restriction
- Protein restriction (controversial)

**SGLT2 Inhibitors:**
- Canagliflozin, dapagliflozin, empagliflozin
- Reduce progression independent of glucose
- Mechanism: Restore TGF, reduce hyperfiltration
- Now first-line for CKD with diabetes`,
      keyTerms: [
        { term: 'advanced glycation end products', definition: 'Proteins or lipids damaged by sugar; accumulate in diabetes and cause inflammation' },
        { term: 'TGF-beta', definition: 'Transforming growth factor-beta; key cytokine driving fibrosis in diabetic kidney' },
        { term: 'polyol pathway', definition: 'Metabolic pathway converting glucose to sorbitol; contributes to oxidative stress' },
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter 2 inhibitor; reduces hyperfiltration and protects kidneys' },
        { term: 'RAGE', definition: 'Receptor for advanced glycation end products; activation promotes inflammation' },
      ],
      clinicalNotes: 'SGLT2 inhibitors have revolutionized diabetic kidney disease management - they slow progression independent of glucose lowering. KDIGO 2022 guidelines recommend SGLT2 inhibitors as first-line therapy for diabetes with CKD, even before ACE inhibitors/ARBs. Always consider non-diabetic kidney disease in atypical presentations - up to 50% of type 2 diabetics with kidney disease may have another cause.',
    },
    4: {
      level: 4,
      summary: 'Clinical management of diabetic nephropathy requires comprehensive risk factor modification, recognition of atypical presentations, biopsy decision-making, and management of complications including cardiovascular disease and anemia.',
      explanation: `**Diagnosis and Monitoring:**

**Screening:**
- Type 1: Begin 5 years after diagnosis, then annually
- Type 2: At diagnosis, then annually
- UACR and eGFR

**Confirming Albuminuria:**
- 2 of 3 elevated UACR over 3-6 months
- Exclude UTI, menstruation, exercise
- Consider orthostatic proteinuria

**Classification by KDIGO:**
- GFR categories: G1-G5
- Albuminuria categories: A1 (normal), A2 (moderate), A3 (severe)
- Heat map for risk stratification

**Biopsy Decision-Making:**

**Indications:**
- Atypical presentation
- Rapid progression (> 5 mL/min/year decline)
- Active urine sediment
- Absence of retinopathy (type 1)
- Rapid onset nephrotic syndrome
- Signs of systemic disease

**Findings:**
- Pure diabetic nephropathy
- Superimposed NDKD
- NDKD only

**Common NDKD in Diabetics:**
- Hypertensive nephrosclerosis
- IgA nephropathy
- Membranous nephropathy
- Minimal change disease
- FSGS

**Treatment Strategies:**

**Intensive Risk Factor Control:**
- BP < 130/80 (if tolerated)
- HbA1c ~7% (individualize)
- Statins (regardless of baseline LDL)
- Smoking cessation
- Weight management

**Renin-Angiotensin System Blockade:**
- ACE inhibitor or ARB (not both)
- Titrate to max tolerated dose
- Monitor potassium and creatinine
- Accept 30% creatinine rise if stable

**SGLT2 Inhibitors:**
- eGFR > 20-25: Start (unless contraindicated)
- Continue until dialysis/transplant
- Monitor for DKA, genital infections

**Finerenone:**
- Non-steroidal mineralocorticoid receptor antagonist
- Reduces CKD progression and CV events
- Add-on to ACEi/ARB
- Monitor potassium

**GLP-1 Receptor Agonists:**
- Cardiovascular risk reduction
- Weight loss
- Some renal benefit

**Complication Management:**

**Cardiovascular Disease:**
- Leading cause of death
- Aspirin primary prevention (controversial)
- Aggressive risk factor modification
- Heart failure common

**Anemia:**
- EPO deficiency + iron deficiency
- Target Hgb 11-12 g/dL
- Iron repletion first
- ESA if symptomatic

**Bone and Mineral Disorder:**
- Secondary hyperparathyroidism
- Vitamin D deficiency
- Calcium/phosphate management
- Avoid hypercalcemia

**Acidosis:**
- Bicarbonate < 22 mEq/L treat
- Sodium bicarbonate or citrate

**Hyperkalemia:**
- Dietary counseling
- Potassium binders (patiromer, SZC)
- Adjust ACEi/ARB if needed

**Transition to ESRD:**

**Preparation:**
- Education about modalities
- Vascular access planning (AVF preferred)
- Transplant evaluation
- Timing of dialysis initiation

**Modality Selection:**
- Hemodialysis
- Peritoneal dialysis
- Transplant (best outcomes)

**Transplant Considerations:**
- Simultaneous kidney-pancreas (type 1)
- Living donor preferred
- Immunosuppression may worsen glucose
- CVD risk high

**Special Populations:**

**Elderly:**
- Higher risk of hypoglycemia
- May benefit less from tight control
- Conservative management option

**Pregnancy:**
- ACEi/ARB contraindicated
- Tight glucose control essential
- Pre-eclampsia risk high
- May worsen proteinuria

**Ethnic Disparities:**
- Higher rates in certain populations
- APOL1 risk variants (African ancestry)
- Access to care issues
- Social determinants of health`,
      keyTerms: [
        { term: 'orthostatic proteinuria', definition: 'Proteinuria only when upright; benign condition' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist approved for diabetic kidney disease' },
        { term: 'heat map', definition: 'KDIGO color-coded risk stratification based on GFR and albuminuria categories' },
        { term: 'simultaneous kidney-pancreas', definition: 'Combined transplant for type 1 diabetics with kidney failure' },
        { term: 'APOL1', definition: 'Apolipoprotein L1; risk variants common in African ancestry increase CKD risk' },
      ],
      clinicalNotes: 'KDIGO 2022 guidelines: SGLT2 inhibitors are first-line for diabetes with CKD, independent of glucose control or HbA1c. Finerenone (nsMRA) is approved as add-on therapy for diabetic kidney disease. Do not combine ACE inhibitors with ARBs - no benefit and increased harm. Accept up to 30% creatinine rise when starting RAS blockade if stable and not hyperkalemic.',
    },
    5: {
      level: 5,
      summary: 'Advanced diabetic nephropathy management includes precision medicine approaches targeting inflammation and fibrosis, novel therapeutics in development, genetic risk stratification, and integration of digital health technologies for disease monitoring.',
      explanation: `**Precision Medicine Approaches:**

**Genetic Risk Stratification:**
- APOL1 genotyping (African ancestry)
- Risk variants: G1, G2
- Two risk alleles: Increased DKD risk
- High-risk kidney donors

**Pharmacogenomics:**
- ACE/ARB response variation
- SGLT2 inhibitor efficacy
- Metformin transport (OCT)

**Transcriptomic Signatures:**
- Renal biopsy gene expression
- Predict progression
- Guide therapy

**Emerging Therapeutics:**

**Anti-Inflammatory Agents:**
- Pentoxifylline: TNF-alpha inhibition
- Baricitinib: JAK inhibitor (phase 2 trials)
- Chemokine receptor antagonists

**Anti-Fibrotic Agents:**
- Pirfenidone: Anti-fibrotic (phase 2)
- Anti-TGF-beta antibodies
- CTGF inhibitors

**Endothelin Antagonists:**
- Atrasentan: Endothelin A antagonist
- Reduces proteinuria
- Fluid retention risk

**Antioxidant Therapies:**
- Bardoxolone methyl
- Nrf2 activator
- Improves eGFR but may increase CV events
- Not approved for DKD

**Advanced Glycation End Product Inhibitors:**
- Pyridoxamine
- Aminoguanidine (safety concerns)
- Alagebrium (ALT-711)

**Advanced SGLT2 Inhibitor Science:**

**Mechanisms Beyond Glucose:**
- Restore tubuloglomerular feedback
- Reduce glomerular pressure
- Improve oxygen delivery to medulla
- Anti-inflammatory effects
- Ketone body metabolism

**Cardiorenal Protection:**
- EMPA-REG OUTCOME
- CANVAS Program
- DECLARE-TIMI 58
- CREDENCE (CKD population)
- DAPA-CKD (non-diabetic CKD)

**Molecular Subtyping:**

**Proteomic Classification:**
- Kidney biopsies analyzed by proteomics
- Identify distinct disease subtypes
- Predict treatment response

**Metabolomic Profiling:**
- Serum and urine metabolites
- Mitochondrial dysfunction markers
- Gut microbiome contributions

**Urinary Biomarkers:**

**Established:**
- Albumin/creatinine ratio
- Alpha-1 microglobulin
- NGAL

**Emerging:**
- Podocyte proteins (podocin, nephrin)
- Inflammatory markers (TNF, IL-6)
- Fibrosis markers (TIMP-2, IGFBP7)

**Digital Health Technologies:**

**Remote Monitoring:**
- Home blood pressure monitoring
- Connected glucometers
- Telemedicine visits
- Medication adherence apps

**Artificial Intelligence:**
- Retinal screening for retinopathy
- Predictive models for DKD progression
- Image analysis for albuminuria quantification
- Risk stratification algorithms

**Continuous Glucose Monitors:**
- Time in range optimization
- Reduce glycemic variability
- May improve kidney outcomes

**Implementation Science:**

**Care Delivery Models:**
- Integrated diabetes-kidney clinics
- Pharmacist involvement
- Nurse care managers
- Community health workers

**Disparities Research:**
- Social determinants
- Food insecurity
- Health literacy
- Access to SGLT2 inhibitors

**Clinical Trial Innovation:**

**Adaptive Trial Design:**
- Platform trials
- Basket trials
- Real-world evidence integration

**Surrogate Endpoints:**
- UACR reduction
- eGFR slope
- Regulatory acceptance

**Patient-Reported Outcomes:**
- Quality of life measures
- Fatigue scales
- Treatment burden assessment

**Future Directions:**

**Regenerative Medicine:**
- Mesenchymal stem cells
- Exosome therapies
- Kidney organoids for drug testing

**Gene Therapy:**
- Monogenic forms rare
- Podocyte-specific delivery

**Bioartificial Kidney:**
- Implantable device
- Glucose-responsive
- Endocrine function restoration

**Prevention Strategies:**

**Very Early Intervention:**
- Prediabetes management
- Bariatric surgery outcomes
- Intensive lifestyle intervention

**Artificial Pancreas:**
- Closed-loop insulin delivery
- Improved glycemic control
- Impact on complications

**Population Health:**
- Screening programs
- Public health policies
- Sugar taxation effects
- Food environment changes`,
      keyTerms: [
        { term: 'APOL1', definition: 'Apolipoprotein L1; high-risk variants explain much of excess CKD in African Americans' },
        { term: 'baricitinib', definition: 'JAK inhibitor being studied for diabetic kidney disease' },
        { term: 'Nrf2', definition: 'Nuclear factor erythroid 2-related factor 2; transcription factor regulating antioxidant response' },
        { term: 'EMPA-REG OUTCOME', definition: 'Landmark trial showing SGLT2 inhibitor cardiovascular and renal benefits' },
        { term: 'time in range', definition: 'Percentage of time glucose is in target range; emerging metric beyond HbA1c' },
      ],
      clinicalNotes: `Advanced DKD management pearls:
1. SGLT2 inhibitors are now first-line for DKD regardless of HbA1c - the CREDENCE and DAPA-CKD trials established this paradigm shift
2. Finerenone adds to SGLT2 inhibitors and ACEi/ARB for additional cardiorenal protection
3. APOL1 high-risk genotype testing should be considered for African American patients and potential donors
4. JAK inhibitors (baricitinib) show promise in phase 2 trials for DKD - targeting inflammation
5. Time-in-range from CGM may be more relevant than HbA1c for kidney outcomes - glycemic variability matters
6. The combination of SGLT2 inhibitor + GLP-1 RA + nsMRA provides comprehensive protection for high-risk patients`,
    },
  },

  media: [
    {
      id: 'diabetic-nephropathy-biopsy',
      type: 'histology',
      filename: 'diabetic-nephropathy-biopsy.jpg',
      title: 'Diabetic Nephropathy Biopsy',
      description: 'Light microscopy showing mesangial expansion and Kimmelstiel-Wilson nodules',
    },
  ],

  citations: [
    {
      id: 'kdigo-diabetes',
      type: 'article',
      title: 'KDIGO 2022 Clinical Practice Guideline for Diabetes Management in CKD',
      source: 'Kidney International',
    },
    {
      id: 'credits-trial',
      type: 'article',
      title: 'Canagliflozin and Renal Outcomes in Type 2 Diabetes and Nephropathy',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'structure-nephron', targetType: 'structure', relationship: 'parent', label: 'Nephron Structure' },
    { targetId: 'pathology-chronic-kidney-disease', targetType: 'condition', relationship: 'related', label: 'Chronic Kidney Disease' },
    { targetId: 'pathology-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis' },
  ],

  tags: {
    systems: ['renal', 'endocrine'],
    topics: ['pathology', 'clinical', 'chronic-disease'],
    keywords: ['diabetic nephropathy', 'DKD', 'diabetes', 'albuminuria', 'SGLT2 inhibitor'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pathology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diabeticNephropathy;
