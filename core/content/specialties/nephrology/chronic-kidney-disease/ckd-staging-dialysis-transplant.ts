/**
 * Chronic Kidney Disease - Staging, Dialysis, and Transplant
 */
import { EducationalContent } from '../../../types';

export const ckdStagingDialysisTransplant: EducationalContent = {
  id: 'nephro-chronic-kidney-disease',
  type: 'condition',
  name: 'Chronic Kidney Disease',
  nameEs: 'Enfermedad Renal Cronica',
  alternateNames: ['CKD', 'Chronic Renal Failure', 'CRF', 'Chronic Renal Insufficiency'],
  hpoId: 'HP:0012622',
  levels: {
    1: {
      level: 1,
      summary: 'Chronic kidney disease means your kidneys have been damaged for 3 months or more and are gradually losing their ability to filter blood and make urine properly.',
      explanation: `Your kidneys filter your blood, remove waste and extra water, and help control blood pressure. In CKD, they slowly lose this ability over months to years.

**Stages:** Doctors measure how well your kidneys work using a number called GFR. Higher is better.
- Stage 1-2: Mild damage, kidneys still work well
- Stage 3: Moderate -- you may start to feel tired
- Stage 4: Severe -- planning for dialysis or transplant begins
- Stage 5: Kidney failure -- you need dialysis or a transplant to stay alive

**Common causes:** Diabetes (#1), high blood pressure (#2), and glomerulonephritis.

**Treatment options when kidneys fail:**
- **Dialysis:** A machine cleans your blood (hemodialysis) or fluid cleans inside your belly (peritoneal dialysis)
- **Transplant:** Receiving a healthy kidney from a donor`,
      keyTerms: [
        { term: 'GFR', definition: 'A number that shows how well your kidneys are filtering; normal is about 90 or higher' },
        { term: 'dialysis', definition: 'A treatment that does the work of kidneys when they fail' },
        { term: 'transplant', definition: 'Surgery to put a healthy kidney from another person into your body' },
      ],
      analogies: ['CKD is like a car engine slowly wearing out -- at first you don\'t notice, but eventually it can\'t run without help (dialysis or transplant).'],
      patientCounselingPoints: ['Control blood sugar and blood pressure to slow kidney damage.', 'Avoid NSAIDs (ibuprofen, naproxen) as they can worsen kidney function.'],
    },
    2: {
      level: 2,
      summary: 'CKD is defined as kidney damage or GFR <60 mL/min/1.73m2 for 3+ months, staged 1-5 by GFR and albuminuria, with management focused on slowing progression and treating complications including anemia, bone disease, and cardiovascular risk.',
      explanation: `## CKD Staging (KDIGO)
| Stage | GFR (mL/min) | Description |
|-------|-------------|-------------|
| G1 | >=90 | Normal GFR with kidney damage (proteinuria, structural) |
| G2 | 60-89 | Mildly decreased |
| G3a | 45-59 | Mild-moderate decrease |
| G3b | 30-44 | Moderate-severe decrease |
| G4 | 15-29 | Severely decreased |
| G5 | <15 | Kidney failure (ESKD) |

**Albuminuria categories:** A1 (<30 mg/g), A2 (30-300), A3 (>300) -- higher = worse prognosis

## Complications by Stage
- **Anemia:** EPO production decreases (stage 3+); treat with ESAs and iron
- **Bone disease (CKD-MBD):** Low calcium, high phosphorus, high PTH, low vitamin D
- **Metabolic acidosis:** HCO3 falls; treat when <22
- **Hyperkalemia:** Worsens as GFR declines
- **Cardiovascular disease:** #1 cause of death in CKD

## Renal Replacement Therapy
- **Hemodialysis (HD):** 3x/week for 3-4 hours; access via fistula, graft, or catheter
- **Peritoneal dialysis (PD):** Daily exchanges via peritoneal catheter; home-based
- **Transplant:** Best outcomes; preemptive transplant (before dialysis) is ideal`,
      keyTerms: [
        { term: 'eGFR', definition: 'Estimated glomerular filtration rate; calculated from creatinine (and/or cystatin C), age, and sex' },
        { term: 'ESKD', definition: 'End-stage kidney disease; stage 5 CKD requiring dialysis or transplant' },
        { term: 'CKD-MBD', definition: 'Chronic kidney disease - mineral and bone disorder; calcium/phosphorus/PTH/vitamin D abnormalities' },
        { term: 'AV fistula', definition: 'Surgical connection between artery and vein in the arm; best hemodialysis access' },
      ],
    },
    3: {
      level: 3,
      summary: 'CKD management centers on RAAS inhibition, SGLT2 inhibitors, blood pressure control, and treatment of complications (anemia, CKD-MBD, acidosis), with timely preparation for renal replacement therapy including preemptive transplant as the preferred modality.',
      explanation: `## Slowing CKD Progression -- Evidence-Based Therapies

**Four Pillars of CKD Management:**
1. **RAAS inhibition:** ACEi or ARB for proteinuric CKD; reduce proteinuria by 30-50%; do NOT combine ACEi+ARB (ONTARGET)
2. **SGLT2 inhibitors:** Dapagliflozin (DAPA-CKD) and empagliflozin (EMPA-KIDNEY) reduce CKD progression by 30-40% regardless of diabetes; now standard of care
3. **Blood pressure:** Target <120/80 (SPRINT); <130/80 in proteinuric CKD
4. **GLP-1 receptor agonists:** Semaglutide (FLOW trial) reduces kidney composite endpoint in DKD

**Finerenone:** Non-steroidal MRA; FIDELIO-DKD/FIGARO-DKD showed reduced CKD progression and CV events in diabetic kidney disease

## CKD-MBD Management
- Phosphate restriction + phosphate binders (calcium-based vs non-calcium: sevelamer, lanthanum)
- Vitamin D: Calcitriol or activated analogues if PTH rising despite 25-OH-D repletion
- PTH targets: 2-9x upper normal in dialysis (KDIGO)
- Calcimimetics (cinacalcet, etelcalcetide) for secondary hyperparathyroidism on dialysis

## Anemia
- Target Hb: 10-11.5 g/dL (avoid >13: increased events per TREAT, CHOIR trials)
- Iron first: IV iron if TSAT <30% and ferritin <500
- ESAs (epoetin, darbepoetin): Use lowest dose; HIF-PHIs (roxadustat, daprodustat) are oral alternatives

## Dialysis Modalities
| Feature | Hemodialysis | Peritoneal Dialysis |
|---------|-------------|-------------------|
| Frequency | 3x/week in-center | Daily (CAPD) or nightly (APD) |
| Access | AV fistula > graft > catheter | Tenckhoff catheter |
| Advantage | Efficient; social support | Home-based; preserves residual function |
| KT/V target | >=1.4 per session | >=1.7 per week |`,
      keyTerms: [
        { term: 'SGLT2 inhibitor', definition: 'Sodium-glucose cotransporter 2 inhibitor; provides kidney and heart protection independent of diabetes; now cornerstone of CKD therapy' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist; reduces CKD progression and CV events in diabetic kidney disease' },
        { term: 'HIF-PHI', definition: 'Hypoxia-inducible factor prolyl hydroxylase inhibitor; oral EPO-stimulating agent (roxadustat, daprodustat)' },
        { term: 'KT/V', definition: 'Dialysis adequacy measure; K=urea clearance, T=time, V=urea distribution volume' },
      ],
      clinicalNotes: 'SGLT2 inhibitors should be started in all CKD patients with eGFR 20-90 and albuminuria, regardless of diabetes. Initial eGFR dip is expected and not a reason to discontinue. Prepare vascular access when eGFR <20; refer for transplant evaluation at eGFR <20 or when dialysis is anticipated within 1-2 years.',
    },
    4: {
      level: 4,
      summary: 'Advanced CKD care integrates multi-drug nephroprotective regimens, personalized dialysis prescriptions, transplant immunology, and management of uremic complications including cardiovascular calcification and dialysis-related amyloidosis.',
      explanation: `## Nephroprotective Polypharmacy -- Additive Benefits
Optimal regimen for proteinuric CKD with diabetes:
1. ACEi/ARB (RAAS blockade)
2. SGLT2 inhibitor (DAPA-CKD, EMPA-KIDNEY)
3. Finerenone (FIDELIO/FIGARO)
4. GLP-1 RA (FLOW: semaglutide)
Combined risk reduction may approach 60-70% for CKD progression

## Transplant Medicine
**Immunosuppression:**
- Induction: Basiliximab (low risk) or thymoglobulin (high immunologic risk)
- Maintenance: Tacrolimus + mycophenolate + steroids (standard triple therapy)
- HLA matching: 6-antigen match ideal; DSA monitoring post-transplant
- Rejection: T-cell-mediated (treat with steroids/thymoglobulin) vs antibody-mediated (plasmapheresis, IVIG, rituximab)

**Outcomes:**
- Kidney transplant: 95% 1-year graft survival (living donor), 92% (deceased)
- Median graft survival: 15-20 years (living) vs 10-15 years (deceased)
- Cardiovascular disease remains leading cause of death with functioning graft

**Living Donor Evaluation:**
- GFR >80 mL/min, no proteinuria, no diabetes, controlled BP
- APOL1 genotyping recommended for African-ancestry donors
- Donor nephrectomy: <0.03% mortality; long-term ESKD risk slightly elevated but absolute risk remains low

## Dialysis Complications
- **Cardiovascular:** LVH, accelerated atherosclerosis, intradialytic hypotension
- **Access:** Stenosis, thrombosis, steal syndrome, infection (catheter-related bacteremia)
- **Dialysis-related amyloidosis:** Beta-2-microglobulin deposition; carpal tunnel, bone cysts
- **Calciphylaxis:** Calcific uremic arteriolopathy; painful skin necrosis; high mortality`,
      keyTerms: [
        { term: 'donor-specific antibodies', definition: 'Anti-HLA antibodies directed against donor antigens; risk factor for antibody-mediated rejection' },
        { term: 'calciphylaxis', definition: 'Calcification of small blood vessels in skin/subcutaneous tissue in ESKD; painful necrosis with >50% mortality' },
        { term: 'thymoglobulin', definition: 'Anti-thymocyte globulin; T-cell depleting agent for transplant induction or acute rejection' },
        { term: 'FLOW trial', definition: 'Landmark trial of semaglutide showing reduced kidney composite endpoint in type 2 DKD' },
      ],
      clinicalNotes: 'Preemptive kidney transplant (before initiating dialysis) has the best outcomes and should be the goal for eligible patients. Living donor transplant is preferred over deceased donor. Early referral for transplant evaluation (eGFR <20) is critical.',
    },
    5: {
      level: 5,
      summary: 'Contemporary CKD management leverages precision nephrology, multi-target nephroprotective strategies, advances in transplant immunology (desensitization, xenotransplantation), and novel dialysis technologies, with research focused on kidney regeneration and biomarker-guided individualization.',
      explanation: `## Paradigm Shifts in CKD Therapy

**Multi-Target Nephroprotection:**
- DAPA-CKD/EMPA-KIDNEY: SGLT2i reduces ESKD/death by 30-40% in CKD G2-G4
- FLOW: Semaglutide 24% reduction in kidney composite in DKD
- FIDELIO/FIGARO pooled (FIDELITY): Finerenone reduces CKD progression by 23% and CV events by 14%
- Combining all agents: Potential >60% risk reduction (modeling studies)

**Race-Free eGFR:**
- 2021 CKD-EPI creatinine equation without race coefficient now standard
- Cystatin C-based or combined creatinine-cystatin C equations improve accuracy
- Impact: Earlier CKD diagnosis in Black patients, earlier referral and transplant listing

## Transplant Frontiers
- **Desensitization protocols:** HLA-incompatible transplant with plasmapheresis, IVIG, rituximab, bortezomib
- **Imlifidase (IdeS):** IgG-cleaving enzyme for rapid desensitization; enables transplant in highly sensitized patients
- **Belatacept:** Costimulation blocker; calcineurin inhibitor-free immunosuppression (BENEFIT trial)
- **Xenotransplantation:** Genetically modified pig kidneys; first human trials (2024-2025); 10-gene-edited pig model
- **Organoid/bioengineered kidneys:** Preclinical stage; iPSC-derived kidney organoids advancing

## Innovative Dialysis
- **Incremental dialysis:** Start with 2x/week and increase as residual function declines (preserves quality of life)
- **Extended/frequent HD:** Nocturnal HD, short daily HD show improved outcomes (FHN trials)
- **Wearable artificial kidney:** Miniaturized dialysis devices in clinical trials
- **Bioartificial kidney:** Combining hemofilter with renal tubule cell bioreactor (Kidney Project)

## Precision Nephrology
- KPMP (Kidney Precision Medicine Project): Single-cell atlas of kidney disease
- Genetic testing: APOL1, PKD1/PKD2, COL4A3-5, complement genes
- Biomarker panels: KIM-1, NGAL, MCP-1, EGF for prognostication and treatment response
- AI-driven CKD progression prediction and intervention optimization`,
      keyTerms: [
        { term: 'xenotransplantation', definition: 'Transplantation of genetically modified animal (pig) organs into humans; kidney trials underway' },
        { term: 'imlifidase', definition: 'IgG-cleaving enzyme enabling rapid desensitization for highly sensitized transplant candidates' },
        { term: 'KPMP', definition: 'Kidney Precision Medicine Project; NIH consortium creating single-cell atlas of kidney disease for targeted therapy' },
        { term: 'incremental dialysis', definition: 'Starting dialysis at reduced frequency (2x/week) to preserve residual kidney function and quality of life' },
      ],
      clinicalNotes: 'The nephrology therapeutic landscape has transformed: SGLT2i + RAAS inhibitor + finerenone + GLP-1 RA is the emerging standard for diabetic CKD. Race-free eGFR equations are now mandatory. Xenotransplantation and bioengineered kidneys may address organ shortage within the next decade.',
    },
  },
  media: [],
  citations: [
    { id: 'kdigo-ckd-2024', type: 'article', title: 'KDIGO 2024 Clinical Practice Guideline for CKD', source: 'Kidney International' },
    { id: 'dapa-ckd', type: 'article', title: 'Dapagliflozin in CKD (DAPA-CKD)', authors: ['Heerspink HJL', 'et al.'], source: 'New England Journal of Medicine' },
    { id: 'flow-trial', type: 'article', title: 'Semaglutide and Kidney Outcomes in Type 2 Diabetes (FLOW)', source: 'New England Journal of Medicine' },
  ],
  crossReferences: [
    { targetId: 'nephro-glomerulonephritis', targetType: 'condition', relationship: 'related', label: 'Glomerulonephritis' },
    { targetId: 'nephro-hyperkalemia', targetType: 'condition', relationship: 'see-also', label: 'Hyperkalemia' },
    { targetId: 'nephro-hyponatremia', targetType: 'condition', relationship: 'see-also', label: 'Hyponatremia' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
  ],
  tags: {
    systems: ['renal'],
    topics: ['pathology', 'therapeutics', 'transplant', 'dialysis'],
    keywords: ['CKD', 'dialysis', 'hemodialysis', 'transplant', 'SGLT2', 'finerenone', 'anemia', 'CKD-MBD'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ckdStagingDialysisTransplant;
