/**
 * Chronic Kidney Disease - Comprehensive Educational Content
 *
 * Covers CKD staging, pathophysiology, and management.
 */

import { EducationalContent } from '../../types';

export const chronicKidneyDisease: EducationalContent = {
  id: 'condition-ckd',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  alternateNames: ['CKD', 'Chronic Renal Failure', 'Chronic Kidney Failure', 'Renal Insufficiency'],
  hpoId: 'HP:0012622',

  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease is a long-term condition where the kidneys gradually lose their ability to filter waste and excess fluid from the blood.',
      explanation: `Chronic kidney disease (CKD) is a condition where your kidneys are damaged and cannot filter blood the way they should. This causes waste to build up in your body.

**What kidneys do:**
- Filter waste and extra water from blood to make urine
- Help control blood pressure
- Make hormones that keep bones strong
- Make red blood cells
- Balance minerals in your body

**Causes of CKD:**
- Diabetes (most common cause)
- High blood pressure
- Glomerulonephritis (kidney inflammation)
- Polycystic kidney disease
- Repeated urinary infections
- Long-term use of certain medications

**Symptoms (often none in early stages):**
- Fatigue
- Swelling in legs, ankles, or feet
- Shortness of breath
- Nausea
- Loss of appetite
- Itchy skin
- Changes in urination

**Stages:**
- Stage 1-2: Early CKD (mild damage)
- Stage 3: Moderate CKD
- Stage 4: Severe CKD
- Stage 5: Kidney failure (dialysis or transplant needed)

**Treatment:**
- Control blood sugar and blood pressure
- Medications to protect kidneys
- Special diet
- Treating complications
- Dialysis or transplant for kidney failure`,
      keyTerms: [
        { term: 'kidneys', definition: 'Two bean-shaped organs that filter blood and make urine' },
        { term: 'glomerular filtration rate', definition: 'Measure of how well kidneys filter blood (GFR)' },
        { term: 'dialysis', definition: 'Treatment that filters blood when kidneys fail' },
        { term: 'nephron', definition: 'Tiny filtering unit of the kidney' },
      ],
      analogies: [
        'Kidneys are like the body\'s water treatment plant, constantly cleaning the blood and removing waste.',
        'CKD is like a filter getting clogged over time - eventually it cannot clean effectively.',
      ],
      examples: [
        'A person with long-standing diabetes who develops swelling in their legs may have diabetic kidney disease.',
        'Someone with high blood pressure for many years may develop CKD as a complication.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chronic kidney disease is defined by abnormalities of kidney structure or function present for >3 months with implications for health, staged by GFR and albuminuria, with diabetes and hypertension being leading causes.',
      explanation: `## Definition and Staging (KDIGO)

**Definition (any of following for >3 months):**
- Markers of kidney damage (albuminuria, urine sediment, imaging, histology)
- GFR <60 mL/min/1.73m2

**GFR Categories:**
| GFR | Stage | Description |
|-----|-------|-------------|
| >=90 | G1 | Normal or high |
| 60-89 | G2 | Mildly decreased |
| 45-59 | G3a | Mildly to moderately decreased |
| 30-44 | G3b | Moderately to severely decreased |
| 15-29 | G4 | Severely decreased |
| <15 | G5 | Kidney failure |

**Albuminuria Categories (ACR mg/g):**
- A1: <30 (normal to mildly increased)
- A2: 30-300 (moderately increased)
- A3: >300 (severely increased)

**Risk stratification:**
- Combine GFR and albuminuria (heat map)
- Higher risk with lower GFR and higher albuminuria

## Etiology

**Diabetes mellitus (most common):**
- Diabetic nephropathy
- Glomerular hyperfiltration -> basement membrane thickening -> mesangial expansion -> glomerulosclerosis

**Hypertension:**
- Nephrosclerosis
- Arteriolar hyalinosis
- Tubular atrophy, interstitial fibrosis

**Glomerular diseases:**
- Glomerulonephritis (IgA, membranous, FSGS)
- Secondary (lupus, vasculitis, infections)

**Tubulointerstitial diseases:**
- Polycystic kidney disease
- Reflux nephropathy
- Obstructive uropathy
- Drug-induced (NSAIDs, lithium)

**Vascular:**
- Ischemic nephropathy
- Atheroembolic disease

## Pathophysiology

**Progressive mechanisms:**
- Glomerular hyperfiltration (remnant nephrons)
- Proteinuria toxicity
- Oxidative stress
- Inflammation and fibrosis
- RAAS activation

**Consequences:**
- Uremic toxin retention
- Electrolyte abnormalities
- Acid-base disturbances
- Endocrine dysfunction (EPO, vitamin D)

## Clinical Manifestations

**Early (stages 1-3):**
- Often asymptomatic
- May have edema (nephrotic syndrome)
- Hypertension

**Late (stages 4-5):**
- Fatigue, weakness
- Anorexia, nausea, vomiting
- Pruritus
- Uremic fetor
- Confusion, seizures (uremic encephalopathy)
- Bleeding tendency
- Pericarditis

**Physical findings:**
- Hypertension
- Edema
- Pallor (anemia)
- Excoriations (pruritus)
- Uremic frost (rare)`,
      keyTerms: [
        { term: 'GFR', definition: 'Glomerular filtration rate; best overall measure of kidney function' },
        { term: 'albuminuria', definition: 'Albumin in urine; marker of kidney damage' },
        { term: 'uremia', definition: 'Syndrome caused by retention of waste products in kidney failure' },
        { term: 'nephron', definition: 'Functional unit of kidney containing glomerulus and tubule' },
      ],
      analogies: [
        'GFR is like the horsepower of your kidney engine - it tells you how much filtering power remains.',
        'Protein in the urine is like smoke from a fire - it signals damage occurring in the kidney.',
      ],
    },
    3: {
      level: 3,
      summary: 'CKD management focuses on slowing progression through RAAS inhibition and blood pressure control, managing complications including anemia, mineral bone disorder, and cardiovascular risk, with preparation for renal replacement therapy in advanced disease.',
      explanation: `## Slowing CKD Progression

**Blood pressure control:**
- Target <130/80 mmHg (KDIGO)
- ACE inhibitors or ARBs (first-line)
  - Reduce proteinuria
  - Slow progression
  - Monitor potassium and creatinine
- Add other agents as needed

**Diabetes management:**
- A1C target individualized (often 7%)
- SGLT2 inhibitors (reduces progression independent of glucose)
- GLP-1 receptor agonists (renal benefit)
- Avoid hypoglycemia risk

**Protein restriction:**
- 0.6-0.8 g/kg/day in select patients
- Requires dietitian supervision

**Other:**
- Smoking cessation
- Avoid nephrotoxins (NSAIDs, contrast)
- Treat infections promptly

## Complications and Management

### Cardiovascular Disease
**High risk:**
- Leading cause of death in CKD
- Traditional and uremia-related risk factors

**Management:**
- Aggressive BP control
- Statins (for age >50, not on dialysis)
- Aspirin for secondary prevention

### Anemia of CKD
**Etiology:**
- EPO deficiency
- Iron deficiency (functional and absolute)
- Decreased RBC survival

**Treatment:**
- Iron repletion (oral vs IV based on stage and response)
- ESAs (erythropoiesis-stimulating agents)
- Target Hgb 10-11.5 g/dL (avoid >13)

### Mineral Bone Disorder (CKD-MBD)
**Pathophysiology:**
- Phosphate retention
- Low calcium
- Secondary hyperparathyroidism
- Vitamin D deficiency
- Vascular calcification

**Management:**
- Phosphate binders (calcium-based, non-calcium-based)
- Vitamin D analogs
- Calcimimetics (cinacalcet)
- Avoid hypercalcemia

### Acidosis
- Supplement with sodium bicarbonate
- Target serum bicarbonate 22-26 mEq/L

### Hyperkalemia
- Dietary restriction
- Loop diuretics
- Potassium binders (patiromer, sodium zirconium cyclosilicate)
- Avoid ACEI/ARB if severe (balance benefits)

### Volume Overload
- Sodium restriction (<2g/day)
- Loop diuretics
- Ultrafiltration (refractory cases)

## Drug Dosing

**Principles:**
- Check renal dosing for all medications
- Adjust based on GFR
- Avoid nephrotoxins
- Monitor levels when indicated

**Commonly adjusted:**
- Antibiotics (vancomycin, aminoglycosides)
- Low molecular weight heparins
- Metformin (contraindicated GFR <30)
- NSAIDs (avoid)

## Preparation for ESRD

**Patient education:**
- Treatment options (hemodialysis, peritoneal dialysis, transplant)
- Timely referral to nephrology

**Vascular access:**
- AV fistula creation (GFR 15-20, anticipated dialysis within year)
- Maturation takes 2-3 months
- Preferred over grafts and catheters

**Transplant evaluation:**
- Early referral
- Living donor identification
- Contraindications assessment

**Advance care planning:**
- Conservative management option
- Goals of care discussions
- Palliative care referral

## Renal Replacement Therapy

**Hemodialysis:**
- 3 times weekly, 3-4 hours
- Requires vascular access
- In-center or home
- Efficient but hemodynamic stress

**Peritoneal dialysis:**
- Daily, continuous
- Peritoneal membrane as filter
- Home-based
- More gentle, preserves residual function

**Transplantation:**
- Best outcomes and quality of life
- Immunosuppression required
- Living or deceased donor
- Recurrence of disease possible`,
      keyTerms: [
        { term: 'RAAS', definition: 'Renin-angiotensin-aldosterone system; target for kidney protection' },
        { term: 'ESRD', definition: 'End-stage renal disease; kidney failure requiring dialysis or transplant' },
        { term: 'CKD-MBD', definition: 'CKD mineral and bone disorder' },
        { term: 'AV fistula', definition: 'Arteriovenous fistula; preferred vascular access for hemodialysis' },
      ],
      clinicalNotes: 'SGLT2 inhibitors are now standard of care for diabetic kidney disease regardless of glycemic control. ACEi/ARBs reduce progression but monitor for hyperkalemia. Start planning dialysis access when GFR <30. Transplant is the best renal replacement therapy when available.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD management includes management of resistant complications, pregnancy considerations, genetic kidney diseases, and understanding the complex cardiovascular-kidney-metabolic interactions in this population.',
      explanation: `## Resistant Complications

### Resistant Hypertension
**Evaluation:**
- Medication adherence
- Volume status
- Secondary causes (renal artery stenosis, primary aldosteronism)
- Sleep apnea

**Treatment:**
- Optimize diuretic therapy
- Chlorthalidone (superior to HCTZ)
- Mineralocorticoid receptor antagonists (spironolactone, careful with K+)
- Sodium restriction

### Refractory Anemia
**Evaluation:**
- Iron status (TSAT, ferritin)
- EPO levels
- Blood loss
- Hemolysis
- Bone marrow disorders

**Approach:**
- IV iron supplementation
-ESA dose adjustment
- Androgens (rarely used)
- Transfusion for symptomatic

### Secondary Hyperparathyroidism
**Medical:**
- Phosphate control
- Vitamin D analogs
- Calcimimetics

**Surgical:**
- Parathyroidectomy for refractory cases
- Subtotal vs total with autotransplantation

### Pruritus
**Pathophysiology:**
- Multifactorial (uremic toxins, inflammation, neuropathic)

**Treatment:**
- Optimize dialysis
- Gabapentin
- Antihistamines (limited benefit)
- UV light therapy
- Difelikefalin (kappa-opioid agonist) for dialysis patients

## Special Populations

### Pregnancy in CKD
**Risks:**
- Preeclampsia
- Preterm delivery
- Disease progression

**Management:**
- Pre-conception counseling
- Multidisciplinary care
- BP control (safe agents: labetalol, nifedipine, methyldopa)
- Avoid ACEi/ARB

### Elderly with CKD
**Considerations:**
- Competing mortality risks
- Frailty
- Polypharmacy
- Conservative management may be appropriate
- Individualized treatment goals

### Genetic Kidney Diseases
**Polycystic kidney disease:**
- ADPKD (most common)
- Tolvaptan (slows progression in early disease)
- Management of complications

**Alport syndrome:**
- X-linked, autosomal recessive
- Hearing loss, ocular abnormalities
- ACEi/ARB to slow progression

**Fabry disease:**
- X-linked lysosomal storage
- Enzyme replacement therapy

## Cardiorenal Syndrome

**Type 1 (acute cardiorenal):**
- Acute heart failure -> AKI
- Treatment: decongestion, preserve perfusion

**Type 2 (chronic cardiorenal):**
- Chronic heart failure -> progressive CKD
- Management: optimize cardiac function, nephroprotection

**Type 3 (acute renocardiac):**
- AKI -> acute cardiac dysfunction
- Treatment: address kidney injury

**Type 4 (chronic renocardiac):**
- CKD -> cardiac disease
- Management: cardiovascular risk reduction

**Type 5 (secondary):**
- Systemic condition affecting both
- Sepsis, diabetes, amyloidosis

## Acute Kidney Injury on CKD

**Common precipitants:**
- Volume depletion
- Nephrotoxins (contrast, NSAIDs)
- Infections
- Heart failure
- Urinary obstruction

**Management:**
- Identify and treat cause
- Avoid further injury
- Adjust medications
- May not return to baseline

## Conservative Management

**Approach:**
- For patients who decline dialysis or are not candidates
- Focus on symptom management
- Advance care planning
- Palliative care integration

**Survival:**
- Median survival months to years depending on age and comorbidities
- Better than dialysis in some elderly/frail patients

**Symptom control:**
- Pain management
- Nausea
- Pruritus
- Restless legs
- Psychological support`,
      keyTerms: [
        { term: 'cardiorenal syndrome', definition: 'Bidirectional relationship between heart and kidney dysfunction' },
        { term: 'difelikefalin', definition: 'Kappa-opioid agonist for CKD-associated pruritus' },
        { term: 'ADPKD', definition: 'Autosomal dominant polycystic kidney disease' },
        { term: 'conservative management', definition: 'Non-dialysis supportive care for kidney failure' },
      ],
      clinicalNotes: 'Resistant hypertension in CKD often responds to spironolactone but monitor potassium closely. Tolvaptan for ADPKD requires monitoring for liver toxicity. Difelikefalin significantly improves pruritus in dialysis patients. Conservative management is a valid option for elderly/frail patients.',
    },
    5: {
      level: 5,
      summary: 'Frontier CKD care includes SGLT2 inhibitors transforming diabetic and non-diabetic CKD management, novel potassium binders, wearable dialysis technologies, xenotransplantation, and precision medicine approaches to slow progression and manage complications.',
      explanation: `## Novel Therapeutics

### SGLT2 Inhibitors Revolution
**Benefits beyond glucose:**
- Reduced CKD progression (DAPA-CKD, EMPA-KIDNEY)
- Cardiovascular protection
- Benefits in non-diabetic CKD
- Mechanisms: hemodynamic, metabolic, anti-inflammatory, anti-fibrotic

**Agents:**
- Dapagliflozin, empagliflozin, canagliflozin
- Continue until dialysis or transplant

### Non-Steroidal MRA
**Finerenone:**
- More selective than steroidal MRAs
- Reduced hyperkalemia risk
- Cardiovascular and renal benefits in diabetic CKD (FIDELIO, FIGARO)

### Novel Potassium Binders
**Patiromer:**
- Non-absorbed polymer
- Once daily
- Reduces hyperkalemia risk with RAAS inhibition

**Sodium zirconium cyclosilicate (SZC):**
- Rapid onset
- Can be used for acute and chronic

### Hypoxia-Inducible Factor Prolyl Hydroxylase Inhibitors (HIF-PHIs)
**New class for anemia:**
- Roxadustat, daprodustat, vadadustat
- Oral, stimulates endogenous EPO
- Iron mobilization
- Comparable to ESAs
- Vascular safety concerns in some trials

## Wearable and Implantable Technologies

### Wearable Dialysis
**Investigational devices:**
- Wearable artificial kidney
- Continuous renal replacement
- Freedom from dialysis centers

### Bioartificial Kidney
**Implantable device:**
- Silicon filters plus kidney cells
- No immunosuppression needed
- Preclinical and early clinical trials

## Transplantation Advances

### Xenotransplantation
**Genetically modified pigs:**
- Knockout of carbohydrate antigens
- Human transgene insertion
- First clinical trials underway
- Addressing organ shortage

### Organ Preservation
**Machine perfusion:**
- Extends preservation time
- Assesses organ viability
- Reduces delayed graft function
- Normothermic vs hypothermic

### Desensitization Protocols
- For highly sensitized patients
- IVIG, rituximab, plasma exchange
- Improves transplant access

## Precision Medicine

### Genetic Risk Stratification
**APOL1:**
- High-risk variants in African ancestry
- Increased CKD risk
- May guide counseling and monitoring

### Pharmacogenomics
**Drug metabolism:**
- Immunosuppressant levels (CYP3A)
- Individualized dosing
- Avoid toxicity

### Proteomics and Metabolomics
**Biomarker panels:**
- Predict progression
- Identify pathways
- Guide targeted therapy

### Artificial Intelligence
**Risk prediction:**
- Progression to ESRD
- Cardiovascular events
- Hospitalization risk

**Clinical decision support:**
- Medication dosing
- Alert for nephrotoxins
- Optimal referral timing

## Future Directions

### Regenerative Medicine
**Stem cell therapy:**
- Mesenchymal stem cells
- Anti-inflammatory, anti-fibrotic
- Clinical trials ongoing

**Kidney organoids:**
- Lab-grown mini-kidneys
- Disease modeling
- Drug screening
- Future transplantation potential

### Prevention Strategies
**Population health:**
- Diabetes prevention
- Hypertension control
- Early detection programs
- Reduce health disparities

**Environmental factors:**
- Heat stress and AKI/CKD (agricultural workers)
- Water quality
- Air pollution

### Policy and Access
**Global burden:**
- Rising incidence worldwide
- Disparities in access to care
- Workforce shortages
- Telemedicine expansion

**Sustainable dialysis:**
- Home therapies
- Peritoneal dialysis first
- Conservative management when appropriate
- Green dialysis initiatives`,
      keyTerms: [
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter 2 inhibitor; revolutionized CKD management' },
        { term: 'HIF-PHI', definition: 'Hypoxia-inducible factor prolyl hydroxylase inhibitor; new anemia treatment' },
        { term: 'xenotransplantation', definition: 'Transplantation of organs between species' },
        { term: 'organoid', definition: 'Miniature organ grown in laboratory from stem cells' },
      ],
      clinicalNotes: 'SGLT2 inhibitors are now foundational therapy for CKD progression regardless of diabetes status. Finerenone adds cardiovascular and renal protection in diabetic kidney disease. HIF-PHIs offer oral alternative to injectable ESAs. Xenotransplantation may address organ shortage in coming decade.',
    },
  },

  media: [
    {
      id: 'ckd-staging',
      type: 'diagram',
      filename: 'ckd-staging-chart.svg',
      title: 'CKD Classification by GFR and Albuminuria',
      description: 'Heat map showing risk stratification',
    },
  ],

  citations: [
    {
      id: 'kdigo-ckd-2012',
      type: 'article',
      title: 'KDIGO Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
      source: 'Kidney International Supplements',
    },
  ],

  crossReferences: [
    { targetId: 'condition-diabetes', targetType: 'condition', relationship: 'related', label: 'Diabetes' },
    { targetId: 'condition-hypertension', targetType: 'condition', relationship: 'related', label: 'Hypertension' },
  ],

  tags: {
    systems: ['renal'],
    topics: ['nephrology', 'internal medicine'],
    keywords: ['CKD', 'kidney', 'renal failure', 'dialysis', 'transplant'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default chronicKidneyDisease;
