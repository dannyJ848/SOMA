/**
 * Chronic Kidney Disease (CKD) - Comprehensive Educational Content
 *
 * Covers CKD staging, etiology, complications, and management
 * with pathophysiology, diagnosis, and treatment strategies.
 */

import { EducationalContent } from '../../types';

export const chronicKidneyDisease: EducationalContent = {
  id: 'condition-chronic-kidney-disease',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  alternateNames: ['CKD', 'Chronic Renal Failure', 'CRF', 'Chronic Renal Insufficiency'],

  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease is when your kidneys slowly lose their ability to clean your blood over months or years.',
      explanation: `Your kidneys are like filters that clean your blood 24 hours a day. They remove waste and extra water to make urine. Chronic kidney disease (CKD) happens when these filters slowly get damaged and stop working as well.

**What Causes CKD?**
The two most common causes are:
1. **Diabetes**: High blood sugar damages the tiny blood vessels in your kidneys
2. **High blood pressure**: Puts too much pressure on the delicate filtering units

Other causes include:
- Certain inherited conditions (runs in families)
- Kidney infections that keep coming back
- Some medications if taken for a long time

**How Do You Know If You Have CKD?**
In early stages, most people feel completely normal! That's why it's important to get blood and urine tests if you're at risk.

As CKD gets worse, you might notice:
- Feeling very tired
- Swelling in your legs and feet
- Making less urine
- Feeling sick to your stomach
- Trouble concentrating

**The Good News**
CKD can often be slowed down or even stopped from getting worse if:
- You control your blood sugar (if you have diabetes)
- You control your blood pressure
- You eat a healthy diet
- You avoid medications that can hurt your kidneys`,
      keyTerms: [
        { term: 'chronic', definition: 'Lasting a long time, usually more than 3 months' },
        { term: 'kidney disease', definition: 'When your kidneys are damaged and cannot clean blood properly' },
        { term: 'dialysis', definition: 'A treatment that cleans your blood when kidneys cannot' },
        { term: 'blood pressure', definition: 'The force of blood pushing against your blood vessel walls' },
      ],
      analogies: [
        'Your kidneys are like a water filter in your home. CKD is like when the filter slowly gets clogged and stops working well over time.',
        'Think of your kidneys as two sponges that squeeze out waste. In CKD, these sponges slowly harden and cannot squeeze as well.',
      ],
      examples: [
        'Someone with diabetes for 20 years might develop CKD because high blood sugar has slowly damaged their kidneys.',
        'A person with uncontrolled high blood pressure for many years may gradually lose kidney function.',
      ],
    },
    2: {
      level: 2,
      summary: 'Chronic kidney disease (CKD) is progressive loss of kidney function over 3+ months, staged by eGFR from Stage 1 (mild) to Stage 5 (kidney failure requiring dialysis or transplant).',
      explanation: `Chronic kidney disease (CKD) is defined as kidney damage or reduced kidney function lasting more than 3 months. It's one of the most common chronic conditions, affecting about 15% of adults.

## CKD Staging (Based on eGFR)

| Stage | eGFR (mL/min/1.73m²) | Description |
|-------|---------------------|-------------|
| Stage 1 | ≥90 | Kidney damage with normal function |
| Stage 2 | 60-89 | Mild reduction in function |
| Stage 3a | 45-59 | Mild to moderate reduction |
| Stage 3b | 30-44 | Moderate to severe reduction |
| Stage 4 | 15-29 | Severe reduction |
| Stage 5 | <15 | Kidney failure (ESKD) |

**Note**: Stage 1-2 requires evidence of kidney damage (such as proteinuria or abnormal imaging) since eGFR alone may be normal.

## Major Causes of CKD
1. **Diabetes mellitus** (40-50% of cases) - diabetic nephropathy
2. **Hypertension** (25-30%) - hypertensive nephrosclerosis
3. **Glomerulonephritis** (10-15%) - various inflammatory conditions
4. **Polycystic kidney disease** (5-10%) - inherited cystic disease
5. **Others**: Recurrent infections, obstruction, medications

## Key Laboratory Tests
- **eGFR**: Estimated Glomerular Filtration Rate - measures kidney function
- **Serum creatinine**: Waste product that accumulates when kidneys fail
- **Urinalysis**: Checks for blood and protein in urine
- **Urine albumin-to-creatinine ratio (UACR)**: Measures protein leakage

## Albuminuria Categories
| Category | UACR (mg/g) | Description |
|----------|-------------|-------------|
| A1 | <30 | Normal |
| A2 | 30-300 | Moderately increased |
| A3 | >300 | Severely increased |

## Complications of CKD
- **Cardiovascular disease**: Leading cause of death in CKD
- **Anemia**: Kidneys make less erythropoietin
- **Bone disease**: Abnormal calcium/phosphorus metabolism
- **High potassium**: Can cause dangerous heart rhythms
- **Fluid overload**: Swelling and high blood pressure

## Treatment Goals
1. Treat the underlying cause (control diabetes, blood pressure)
2. Slow progression (ACE inhibitors, SGLT2 inhibitors)
3. Manage complications (anemia, bone disease)
4. Prepare for kidney replacement therapy if needed`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated Glomerular Filtration Rate; a calculation that estimates how well kidneys filter blood', pronunciation: 'ee-GFR' },
        { term: 'creatinine', definition: 'A waste product from muscles that kidneys normally filter; rises when kidneys fail', pronunciation: 'kree-AT-ih-neen' },
        { term: 'proteinuria', definition: 'Protein in the urine; a sign of kidney damage', pronunciation: 'pro-teen-YUR-ee-uh' },
        { term: 'ESKD', definition: 'End-Stage Kidney Disease; when kidneys fail completely and dialysis/transplant is needed' },
        { term: 'diabetic nephropathy', definition: 'Kidney damage caused by diabetes', pronunciation: 'nef-ROP-uh-thee' },
      ],
      analogies: [
        'CKD staging is like grading the condition of a car engine: Stage 1 is like minor wear, while Stage 5 is when the engine completely fails and needs replacement.',
        'eGFR is like a speedometer for your kidneys - it tells you how fast they can filter blood.',
      ],
    },
    3: {
      level: 3,
      summary: 'CKD involves progressive nephron loss with adaptive hyperfiltration, leading to glomerulosclerosis and tubulointerstitial fibrosis, with complications arising from impaired excretory, endocrine, and metabolic functions.',
      explanation: `## Pathophysiology of CKD Progression

### Nephron Loss and Adaptation
When nephrons are damaged, remaining nephrons undergo adaptive changes:
1. **Glomerular hypertrophy**: Remaining glomeruli enlarge
2. **Hyperfiltration**: Increased single-nephron GFR (SNGFR)
3. **Intraglomerular hypertension**: Leads to progressive damage

This adaptation becomes maladaptive over time → glomerulosclerosis → further nephron loss.

### Common Pathway of Progression
Regardless of initial cause, CKD progresses through:
1. **Glomerulosclerosis**: Scarring of glomeruli
2. **Tubulointerstitial fibrosis**: Scarring of tubules and surrounding tissue
3. **Vascular sclerosis**: Damage to renal blood vessels

**Key mediators**: TGF-β, angiotensin II, aldosterone, reactive oxygen species

### Proteinuria as a Progression Factor
- Filtered proteins are toxic to tubular cells
- Protein overload → tubular inflammation → fibrosis
- Proteinuria independently predicts CKD progression

## CKD-Mineral and Bone Disorder (CKD-MBD)

### Pathogenesis
1. **Phosphate retention** (starts when eGFR <60)
2. **Decreased 1,25-dihydroxyvitamin D** (active vitamin D)
3. **Elevated PTH** (secondary hyperparathyroidism)
4. **Elevated FGF-23** (phosphaturic hormone)

### Bone Disease Patterns
- **Osteitis fibrosa cystica**: High-turnover bone disease (high PTH)
- **Adynamic bone disease**: Low-turnover (over-suppressed PTH)
- **Osteomalacia**: Defective mineralization
- **Mixed uremic osteodystrophy**: Combination patterns

### Vascular Calcification
- CKD-MBD promotes arterial calcification
- Contributes to cardiovascular mortality
- Calciphylaxis: Rare, life-threatening skin necrosis

## CKD-Associated Anemia

### Mechanism
1. **Decreased erythropoietin production** by diseased kidneys
2. **Iron deficiency**: Reduced absorption, chronic inflammation
3. **Uremic toxins**: Suppress bone marrow, shorten RBC lifespan
4. **Chronic inflammation**: Hepcidin elevation → iron sequestration

### Treatment
- Iron supplementation (often IV in dialysis patients)
- Erythropoiesis-stimulating agents (ESAs)
- Target hemoglobin: 10-11.5 g/dL (avoid full correction)

## Cardiovascular Disease in CKD

### Traditional Risk Factors (Amplified in CKD)
- Hypertension, diabetes, dyslipidemia

### Non-Traditional Risk Factors
- Uremic toxins (indoxyl sulfate, p-cresyl sulfate)
- Chronic inflammation
- Oxidative stress
- Vascular calcification
- Volume overload
- Anemia

**CKD patients are more likely to die of CVD than reach ESKD.**

## Diagnostic Workup

### Baseline Evaluation
- Creatinine, BUN, electrolytes, calcium, phosphorus
- CBC (for anemia)
- Intact PTH, 25-hydroxyvitamin D
- Lipid panel
- Urinalysis, UACR
- Renal ultrasound (size, echogenicity, cysts)

### Additional Studies
- Serology for glomerulonephritis (ANA, ANCA, complement, hepatitis)
- Serum protein electrophoresis (if myeloma suspected)
- Renal biopsy (if cause unclear and would change management)`,
      keyTerms: [
        { term: 'glomerulosclerosis', definition: 'Scarring of the glomeruli; common final pathway of many kidney diseases', pronunciation: 'gloh-MER-yoo-loh-skleh-ROH-sis' },
        { term: 'hyperfiltration', definition: 'Increased filtration through remaining nephrons; initially adaptive but eventually harmful' },
        { term: 'FGF-23', definition: 'Fibroblast Growth Factor-23; hormone that promotes phosphate excretion, elevated early in CKD' },
        { term: 'CKD-MBD', definition: 'CKD-Mineral and Bone Disorder; systemic disorder of mineral metabolism in CKD' },
        { term: 'erythropoietin', definition: 'Hormone made by kidneys that stimulates red blood cell production', pronunciation: 'eh-RITH-roh-POY-eh-tin' },
        { term: 'uremic toxins', definition: 'Waste products that accumulate when kidneys fail; contribute to many CKD complications' },
      ],
      clinicalNotes: 'Order iron studies (ferritin, TSAT) before starting ESAs. Target ferritin >100 ng/mL and TSAT >20%. Check PTH at least once in Stage 3, more frequently in later stages. Renal ultrasound is essential to rule out obstruction and assess kidney size.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD management requires integrated nephroprotective strategies, precision medicine approaches for progression risk, optimization of cardiovascular risk, and timely preparation for kidney replacement therapy.',
      explanation: `## Nephroprotective Strategies

### RAAS Blockade
**ACE Inhibitors/ARBs:**
- First-line for proteinuric CKD, especially diabetic nephropathy
- Reduce intraglomerular pressure by dilating efferent arteriole
- 30-50% reduction in proteinuria predicts slower progression
- Monitor creatinine and potassium (accept up to 30% creatinine rise)

**Mineralocorticoid Receptor Antagonists:**
- Finerenone: Non-steroidal MRA, reduces CKD progression in DKD
- FIDELIO-DKD/FIGARO-DKD trials: 18% reduction in kidney outcomes
- Lower hyperkalemia risk than steroidal MRAs (spironolactone)

### SGLT2 Inhibitors (Gliflozins)
**Mechanism of nephroprotection:**
- Reduce intraglomerular hypertension (tubuloglomerular feedback)
- Decrease proteinuria
- Anti-inflammatory and antifibrotic effects
- Improve cardiovascular outcomes

**Key trials:**
- CREDENCE: Canagliflozin in diabetic CKD
- DAPA-CKD: Dapagliflozin in CKD (with or without diabetes)
- EMPA-KIDNEY: Empagliflozin across CKD spectrum

**Prescribing:**
- Can initiate down to eGFR 20-25 mL/min/1.73m²
- Expect initial eGFR dip (like ACEi) - continue therapy
- Monitor for euglycemic DKA risk

### Blood Pressure Control
- Target: <120/80 mmHg (SPRINT trial) or <130/80 mmHg in CKD
- Individualize for elderly, orthostatic hypotension
- Diuretics often needed (loop diuretics when eGFR <30)

### Glycemic Control in Diabetic CKD
- A1c target generally <7%, individualize for frailty/hypoglycemia risk
- Many oral agents need dose adjustment or are contraindicated:
  - Metformin: Avoid when eGFR <30 (lactic acidosis risk)
  - Sulfonylureas: Increased hypoglycemia risk
  - SGLT2i: Preferred, see above
  - GLP-1 RA: Safe, cardiovascular/renal benefits

## Management of CKD Complications

### Metabolic Acidosis
- Serum bicarbonate often falls to 18-22 mEq/L in CKD
- Associated with muscle wasting, bone disease, progression
- Treatment: Sodium bicarbonate or sodium citrate to target HCO3 >22 mEq/L

### Hyperkalemia Management
- Dietary restriction (avoid salt substitutes, high-K foods)
- Optimize diuretics, correct acidosis
- Potassium binders: Patiromer, sodium zirconium cyclosilicate
- Allow continuation of ACEi/ARB if K can be controlled

### CKD-MBD Management
**Phosphorus control:**
- Dietary restriction (protein-phosphorus binding)
- Phosphate binders: Calcium-based (risk of vascular calcification), non-calcium (sevelamer, lanthanum, ferric citrate)

**Vitamin D:**
- Correct 25(OH)D deficiency first (target >30 ng/mL)
- Active vitamin D (calcitriol, paricalcitol) for secondary hyperparathyroidism

**PTH targets:** Stage-dependent; avoid over-suppression (adynamic bone)

### Anemia Management
- Iron repletion is first-line (IV iron if oral fails or HD patient)
- ESAs: Start when Hb <10 g/dL after iron replete
- Target Hb 10-11.5 g/dL; higher targets increase CV events (TREAT, CHOIR trials)
- HIF-PHI (roxadustat, daprodustat): Oral alternatives to ESAs

## Preparation for Kidney Replacement Therapy

### Timing of RRT Planning
- Nephrology referral by Stage 4 (eGFR <30)
- Vascular access planning when eGFR 15-20 (lead time for AVF maturation)
- Education on modality options (HD, PD, transplant, conservative care)

### Vascular Access Hierarchy
1. **AV fistula** (preferred): 3-6 months maturation time
2. **AV graft**: 2-4 weeks maturation, higher infection/thrombosis risk
3. **Tunneled catheter**: Immediate use, highest complication rate

### Pre-emptive Transplant
- Best outcomes when transplant occurs before dialysis
- Living donor kidney: Superior survival vs deceased donor
- Referral for transplant evaluation when eGFR ~20

## Progression Risk Stratification

### Risk Factors for Rapid Progression
- Heavy proteinuria (UACR >300)
- Uncontrolled hypertension
- Diabetes with poor glycemic control
- History of AKI episodes
- African ancestry, APOL1 risk variants
- Cardiovascular disease

### Kidney Failure Risk Equation (KFRE)
- Validated tool predicting 2-year and 5-year risk of ESKD
- Variables: Age, sex, eGFR, UACR
- Helps timing of referral and RRT planning`,
      keyTerms: [
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter-2 inhibitor; diabetes drug with major nephroprotective and cardioprotective benefits' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist proven to slow DKD progression' },
        { term: 'HIF-PHI', definition: 'Hypoxia-Inducible Factor Prolyl Hydroxylase Inhibitor; oral agents that stimulate erythropoietin production' },
        { term: 'KFRE', definition: 'Kidney Failure Risk Equation; validated prediction tool for ESKD risk' },
        { term: 'AVF', definition: 'Arteriovenous fistula; preferred vascular access for hemodialysis' },
        { term: 'pre-emptive transplant', definition: 'Kidney transplant performed before dialysis is needed; associated with best outcomes' },
      ],
      clinicalNotes: 'SGLT2i and finerenone should be standard of care for diabetic CKD on top of ACEi/ARB. Monitor for hyperkalemia when combining RAAS blockers. Refer to nephrology by Stage 4 and to transplant surgery when eGFR ~20. Calculate KFRE to guide discussions about RRT timing.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art CKD care integrates genomic risk stratification, novel biomarkers for progression phenotyping, emerging disease-modifying therapies, and multidisciplinary models to optimize patient-centered outcomes across the CKD-to-ESKD continuum.',
      explanation: `## Precision Nephrology in CKD

### Genetic Risk Factors
**APOL1 High-Risk Variants (G1, G2):**
- Present in 13% of African Americans
- 5-29x increased risk of ESKD (variant-dependent)
- Associated conditions: FSGS, HIV-associated nephropathy, hypertensive nephrosclerosis
- Clinical testing increasingly available; implications for prognosis and family screening

**Other Genetic CKD:**
- PKD1/PKD2: Autosomal dominant polycystic kidney disease
- COL4A3/4/5: Alport syndrome
- Complement gene variants: C3 glomerulopathy, aHUS
- Podocyte genes (NPHS1, NPHS2): Congenital nephrotic syndrome

### Biomarkers Beyond eGFR and Albuminuria
**Tubular Injury Markers:**
- KIM-1, NGAL: Indicate ongoing tubular damage
- Alpha-1 microglobulin: Proximal tubular dysfunction

**Inflammation/Fibrosis Markers:**
- Soluble TNF receptors (sTNFR1, sTNFR2): Predict progression in DKD
- Supar (soluble urokinase plasminogen activator receptor)
- MCP-1: Monocyte chemoattractant protein

**Progression Risk Scores:**
- Combining biomarkers with clinical variables improves ESKD prediction
- Research moving toward biomarker-guided therapy intensity

## Emerging Therapeutics

### Endothelin Receptor Antagonists
**Atrasentan, Sparsentan:**
- Reduce proteinuria via efferent arteriolar dilation
- Atrasentan: Significant albuminuria reduction but fluid retention concerns
- Sparsentan: Dual ET/AT1 receptor antagonist; PROTECT trial in IgA nephropathy

### Anti-Fibrotic Agents
**Pirfenidone:**
- TGF-β inhibitor used in IPF
- Early CKD trials ongoing

**Baricitinib:**
- JAK inhibitor; may reduce inflammation-driven progression
- Currently approved for RA, trials in DKD

### ASK1 Inhibitors
**Selonsertib:**
- Targets apoptosis signal-regulating kinase 1
- Phase 2 DKD trials showed proteinuria reduction

### Complement Inhibition
**Avacopan, Iptacopan:**
- Target C5a receptor or Factor B
- Approved/in trials for ANCA vasculitis, C3 glomerulopathy

### Novel Approaches
- **Bardoxolone methyl**: Nrf2 activator; mixed results (BEACON stopped for HF, CARDINAL ongoing)
- **Zibotentan + dapagliflozin**: Combination ERA + SGLT2i in development
- **Atacicept**: APRIL/BLyS inhibitor for IgA nephropathy

## Conservative Kidney Management

### When to Consider Non-Dialytic Care
- Elderly patients with limited life expectancy, significant comorbidities
- Patients with poor functional status (frailty)
- Those who prioritize quality of life over longevity
- Shared decision-making essential

### Conservative Care Components
- Symptom management (uremic symptoms, volume, pain)
- Dietary liberalization as appropriate
- Advanced care planning
- Palliative care integration
- Hospice when appropriate

### Outcomes Data
- Survival without dialysis may be similar to dialysis in elderly with high comorbidity burden
- Quality of life often preserved longer with conservative care in appropriate patients

## Systems-Level Quality Improvement

### CKD Care Models
**Nephrology Comanagement:**
- Collaboration between PCP and nephrologist
- Improves blood pressure, A1c, and CKD-MBD management

**Multidisciplinary CKD Clinics:**
- Include dietitian, social worker, pharmacist, nurse educator
- Reduce unplanned dialysis starts
- Improve AVF placement rates

**Integrated Palliative Care:**
- Early integration improves symptom control and care planning
- Does not hasten death; may improve quality of life

### Digital Health in CKD
- Remote patient monitoring of blood pressure, weight
- Telehealth improves access, especially for rural populations
- Apps for dietary tracking, medication adherence
- AI-driven prediction of progression and AKI risk

## Disparities in CKD Care

### Racial and Ethnic Disparities
- Black patients: Higher ESKD rates, lower transplant access
- Hispanic patients: Higher CKD prevalence, delayed nephrology referral
- Indigenous populations: High diabetes-related CKD burden

### Socioeconomic Factors
- Low SES associated with CKD progression
- Food insecurity limits dietary management
- Transportation barriers to dialysis and appointments

### Addressing Disparities
- Race-free eGFR equations (2021 CKD-EPI refit)
- Community health worker programs
- Policy interventions for dialysis access equity

## Transition to ESKD

### Optimal Timing
- No single eGFR threshold for dialysis initiation
- IDEAL trial: No benefit to early (eGFR 10-14) vs late (eGFR 5-7) start
- Symptom-driven approach preferred

### "Crash" Dialysis Prevention
- Timely nephrology referral (by eGFR 30)
- Vascular access planning (by eGFR 15-20)
- Modality education well before ESKD

### Incident Dialysis Optimization
- Start with AVF (not catheter) when possible
- Optimize volume status before first dialysis
- Transition care plan from predialysis to dialysis team`,
      keyTerms: [
        { term: 'APOL1', definition: 'Apolipoprotein L1 gene; variants G1/G2 markedly increase ESKD risk in individuals of African ancestry' },
        { term: 'sTNFR', definition: 'Soluble TNF receptors; novel biomarkers that predict CKD progression, especially in diabetic nephropathy' },
        { term: 'sparsentan', definition: 'Dual endothelin and angiotensin receptor antagonist; approved for IgA nephropathy' },
        { term: 'conservative kidney management', definition: 'Supportive care without dialysis for patients who choose symptom-focused over life-prolonging treatment' },
        { term: 'race-free eGFR', definition: '2021 CKD-EPI equation that removes race coefficient; recommended by NKF/ASN task force' },
        { term: 'IDEAL trial', definition: 'Landmark trial showing no benefit of early dialysis initiation based on eGFR alone' },
      ],
      clinicalNotes: `Key practice points for CKD specialists:
1. Consider APOL1 testing in African American patients with unexplained CKD/FSGS - implications for prognosis and living donor evaluation
2. SGLT2i + finerenone + ACEi/ARB is emerging standard triple therapy for DKD; monitor potassium closely
3. Initiate conservative kidney management discussions early, not as a "last resort"
4. Use race-free eGFR (2021 CKD-EPI) for all patients
5. Engage multidisciplinary CKD team early to reduce unplanned dialysis starts
6. Novel agents (sparsentan, complement inhibitors) are changing management of glomerular diseases
7. Address social determinants actively - housing, transportation, food security impact CKD outcomes significantly`,
    },
  },

  media: [
    {
      id: 'ckd-staging-diagram',
      type: 'diagram',
      filename: 'ckd-staging.svg',
      title: 'CKD Staging by eGFR and Albuminuria',
      description: 'Heat map showing CKD prognosis based on GFR and albuminuria categories',
    },
    {
      id: 'ckd-mbd-pathway',
      type: 'diagram',
      filename: 'ckd-mbd-pathway.svg',
      title: 'CKD-MBD Pathophysiology',
      description: 'Flowchart of mineral metabolism derangements in CKD',
    },
  ],

  citations: [
    {
      id: 'kdigo-ckd-2024',
      type: 'article',
      title: 'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
      authors: ['KDIGO CKD Work Group'],
      source: 'Kidney International',
      url: 'https://kdigo.org/guidelines/ckd-evaluation-and-management/',
    },
    {
      id: 'dapa-ckd',
      type: 'article',
      title: 'Dapagliflozin in Patients with Chronic Kidney Disease',
      authors: ['Heerspink HJL', 'et al.'],
      source: 'New England Journal of Medicine',
      page: '383:1436-1446',
    },
    {
      id: 'brenner-rector-ckd',
      type: 'textbook',
      title: 'Chronic Kidney Disease',
      source: "Brenner and Rector's The Kidney",
      chapter: '52-58',
    },
  ],

  crossReferences: [
    { targetId: 'condition-acute-kidney-injury', targetType: 'condition', relationship: 'related', label: 'AKI (can cause CKD)' },
    { targetId: 'process-dialysis', targetType: 'process', relationship: 'related', label: 'Dialysis' },
    { targetId: 'process-kidney-transplantation', targetType: 'process', relationship: 'related', label: 'Kidney Transplantation' },
    { targetId: 'condition-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis' },
  ],

  tags: {
    systems: ['urinary', 'renal'],
    topics: ['nephrology', 'chronic disease', 'pathophysiology', 'internal medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default chronicKidneyDisease;
