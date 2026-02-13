/**
 * Diabetes Complications
 *
 * Comprehensive content on acute and chronic complications of diabetes mellitus.
 */

import { EducationalContent } from '../../../types';

export const DIABETES_COMPLICATIONS: EducationalContent = {
  id: 'endocrine-diabetes-complications',
  type: 'condition',
  name: 'Diabetes Complications',
  alternateNames: ['Diabetic complications', 'Sequelae of diabetes'],

  levels: {
    1: {
      level: 1,
      summary: 'Diabetes can cause problems in many parts of your body if blood sugar stays too high for too long, but these problems can often be prevented or slowed down with good care.',
      explanation: `When blood sugar stays high for a long time, it can hurt different parts of your body. Think of it like leaving too much sugar in water - eventually it causes damage.

**Parts of the body that can be affected:**

*Eyes:*
- High sugar can damage tiny blood vessels in your eyes
- This can cause blurry vision or even blindness
- Getting regular eye exams helps catch problems early

*Kidneys:*
- Your kidneys filter your blood
- High sugar makes them work too hard and can damage them
- Kidney damage can lead to needing dialysis

*Nerves:*
- Nerves carry messages around your body
- High sugar can damage nerves, especially in your feet and hands
- This can cause numbness, tingling, or pain

*Heart and Blood Vessels:*
- High blood sugar can damage blood vessels
- This increases risk of heart attacks and strokes
- It can also cause poor circulation in your legs

*Feet:*
- Nerve damage + poor circulation = foot problems
- Small cuts may not heal well and can get infected
- Daily foot checks are important

**Good news:**
Keeping blood sugar, blood pressure, and cholesterol under control can prevent or slow down these problems!`,
      keyTerms: [
        { term: 'complications', definition: 'Health problems that develop because of another condition' },
        { term: 'blood vessels', definition: 'Tubes that carry blood throughout your body' },
        { term: 'nerves', definition: 'Special cells that send messages between your body and brain' },
        { term: 'dialysis', definition: 'A treatment that filters your blood when kidneys stop working' },
      ],
      analogies: [
        'High blood sugar is like rust in pipes - over time it causes damage and blockages.',
        'Nerves are like electrical wires. High sugar damages the coating, causing short circuits (pain or numbness).',
        'The kidneys are like a coffee filter. Too much sugar clogs and damages the filter over time.',
      ],
      examples: [
        'A person notices their feet feel numb and tingly - this could be nerve damage from diabetes.',
        'Someone with diabetes gets their eyes checked every year to catch any damage early.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diabetes complications are divided into microvascular (small blood vessels: eyes, kidneys, nerves) and macrovascular (large blood vessels: heart, brain, legs). Good glycemic control and risk factor management can prevent or delay these complications.',
      explanation: `Chronic hyperglycemia leads to progressive damage throughout the body. Complications are categorized by the size of blood vessels affected.

**Microvascular Complications** (Small blood vessels)

*Diabetic Retinopathy:*
- Leading cause of blindness in working-age adults
- Stages: Non-proliferative (mild→severe) → Proliferative
- Symptoms: Often none until advanced; then floaters, vision loss
- Prevention: Annual dilated eye exams, glycemic control
- Treatment: Laser photocoagulation, anti-VEGF injections

*Diabetic Nephropathy:*
- Leading cause of end-stage kidney disease
- Progression: Microalbuminuria → Macroalbuminuria → Declining GFR → ESRD
- Symptoms: Often none until advanced; then swelling, fatigue
- Prevention: Blood pressure control, ACE inhibitors/ARBs
- Monitoring: Annual urine albumin/creatinine ratio, eGFR

*Diabetic Neuropathy:*
- Most common complication (affects ~50% of patients)
- Types:
  - Peripheral (most common): Numbness, tingling, pain in feet/hands
  - Autonomic: Gastroparesis, orthostatic hypotension, bladder dysfunction
  - Mononeuropathy: Sudden weakness in one nerve area
- Prevention: Glycemic control
- Treatment: Pain management, foot care

**Macrovascular Complications** (Large blood vessels)

*Cardiovascular Disease:*
- Diabetes increases heart disease risk 2-4 fold
- Includes: Coronary artery disease, heart failure
- Often "silent" heart attacks in diabetes
- Prevention: Blood pressure, cholesterol, smoking cessation

*Cerebrovascular Disease:*
- 2-4x increased stroke risk
- Both ischemic and hemorrhagic

*Peripheral Arterial Disease:*
- Poor circulation to legs
- Symptoms: Claudication (leg pain with walking), poor wound healing
- Severe: Non-healing ulcers, gangrene, amputation

**Risk Factors for Complications:**
- Poor glycemic control (high HbA1c)
- Duration of diabetes
- Hypertension
- Dyslipidemia
- Smoking
- Obesity`,
      keyTerms: [
        { term: 'microvascular', definition: 'Affecting small blood vessels (capillaries)' },
        { term: 'macrovascular', definition: 'Affecting large blood vessels (arteries)' },
        { term: 'retinopathy', definition: 'Damage to the blood vessels in the retina of the eye' },
        { term: 'nephropathy', definition: 'Kidney damage or disease' },
        { term: 'neuropathy', definition: 'Nerve damage causing pain, numbness, or weakness' },
        { term: 'microalbuminuria', definition: 'Small amounts of protein in urine; early sign of kidney damage' },
      ],
      analogies: [
        'Microvascular damage is like sugar slowly clogging tiny pipes, while macrovascular disease is like cholesterol and sugar building up in the main pipelines.',
        'The progression of nephropathy is like a leaky faucet - first just a few drops (microalbuminuria), then a steady drip (macroalbuminuria), then flooding (kidney failure).',
      ],
    },
    3: {
      level: 3,
      summary: 'Diabetes complications result from chronic hyperglycemia through multiple pathogenic pathways including polyol pathway activation, advanced glycation end-products, PKC activation, and hexosamine pathway flux. Evidence-based screening and multifactorial risk reduction are essential.',
      explanation: `**Pathophysiology of Hyperglycemic Damage:**

*Four Major Pathways:*

1. **Polyol Pathway:**
   - Excess glucose → sorbitol (via aldose reductase) → fructose
   - Sorbitol accumulation → osmotic stress, decreased Na+/K+ ATPase
   - Depletes NADPH → reduced glutathione → oxidative stress
   - Major contributor to neuropathy, cataracts

2. **Advanced Glycation End-Products (AGEs):**
   - Non-enzymatic glycation of proteins
   - AGEs cross-link matrix proteins → vascular stiffness
   - RAGE activation → inflammation, oxidative stress
   - Major contributor to all microvascular complications

3. **Protein Kinase C (PKC) Activation:**
   - Hyperglycemia → increased diacylglycerol → PKC activation
   - Effects: Altered blood flow, basement membrane thickening
   - Increased VEGF → permeability, angiogenesis
   - Increased TGF-beta → fibrosis

4. **Hexosamine Pathway:**
   - Glucose → glucosamine-6-P → UDP-GlcNAc
   - Modifies transcription factors (O-GlcNAcylation)
   - Increases TGF-beta, PAI-1

*Unifying Mechanism (Brownlee):*
Hyperglycemia → Mitochondrial superoxide overproduction → Activates all four pathways

**Diabetic Retinopathy:**

*Classification (ETDRS):*
| Stage | Findings | Management |
|-------|----------|------------|
| Mild NPDR | Microaneurysms only | Annual exam |
| Moderate NPDR | + Hemorrhages, hard exudates | 6-12 month exam |
| Severe NPDR | 4-2-1 rule (hemorrhages, venous beading, IRMA) | PRP consideration |
| PDR | Neovascularization (disc or elsewhere) | PRP, anti-VEGF |
| DME | Macular edema (any stage) | Anti-VEGF, laser |

*4-2-1 Rule:* Hemorrhages in 4 quadrants, OR venous beading in 2+ quadrants, OR IRMA in 1+ quadrant = Severe NPDR

**Diabetic Kidney Disease:**

*Staging:*
| Stage | UACR (mg/g) | GFR (mL/min/1.73m2) |
|-------|-------------|---------------------|
| Normal | <30 | ≥90 |
| Moderately increased | 30-300 | Variable |
| Severely increased | >300 | Usually declining |
| CKD G3-5 | Variable | <60 |

*Treatment:*
- ACE inhibitor or ARB: First-line for albuminuria
- SGLT2 inhibitors: Significant renoprotection (CREDENCE, DAPA-CKD)
- Finerenone (MRA): Additional reduction in progression
- BP target: <130/80 mmHg
- Avoid NSAIDs, contrast dye

**Diabetic Neuropathy:**

*Distal Symmetric Polyneuropathy (DPN):*
- "Stocking-glove" distribution
- Sensory > motor
- Loss of protective sensation → foot ulcers
- Screening: 10g monofilament, vibration (128 Hz tuning fork)

*Diabetic Autonomic Neuropathy:*
| System | Manifestation | Evaluation |
|--------|---------------|------------|
| Cardiovascular | Resting tachycardia, orthostatic hypotension | Heart rate variability |
| Gastrointestinal | Gastroparesis, diarrhea/constipation | Gastric emptying study |
| Genitourinary | Erectile dysfunction, neurogenic bladder | Urodynamics |
| Sudomotor | Anhidrosis (feet), gustatory sweating | Sudomotor tests |

*Neuropathic Pain Management:*
- First-line: Pregabalin, duloxetine, gabapentin
- Second-line: TCAs, tapentadol, capsaicin
- Avoid opioids if possible

**Cardiovascular Risk Management:**

*Recommended Interventions:*
| Target | Intervention |
|--------|--------------|
| Blood pressure | <130/80; ACEi/ARB preferred |
| Lipids | Statin for all >40 years or with risk factors |
| Antiplatelet | Aspirin for established CVD; consider for primary prevention |
| Glucose | GLP-1 RA or SGLT2i with CV benefit if ASCVD/HF/CKD |
| Smoking | Cessation essential |`,
      keyTerms: [
        { term: 'polyol pathway', definition: 'Metabolic pathway converting glucose to sorbitol; implicated in diabetic complications' },
        { term: 'AGEs', definition: 'Advanced glycation end-products; proteins modified by glucose that accumulate and cause damage' },
        { term: 'RAGE', definition: 'Receptor for AGEs; triggers inflammatory signaling when activated' },
        { term: 'NPDR', definition: 'Non-proliferative diabetic retinopathy; early stage without new vessel growth' },
        { term: 'PDR', definition: 'Proliferative diabetic retinopathy; advanced stage with neovascularization' },
        { term: 'IRMA', definition: 'Intraretinal microvascular abnormalities; dilated vessels within retina (not neovascularization)' },
      ],
      clinicalNotes: 'Annual screening for complications should include: dilated eye exam (or validated retinal imaging), urine albumin/creatinine ratio, eGFR, foot exam with monofilament, and lipid panel. SGLT2 inhibitors have transformed DKD management with proven reduction in progression to ESRD. The STENO-2 study demonstrated that intensive multifactorial intervention reduces microvascular and macrovascular events by ~50%.',
    },
    4: {
      level: 4,
      summary: 'Diabetic complications arise from interrelated metabolic, hemodynamic, and inflammatory disturbances. Contemporary management integrates intensive glucose control with targeted organ protection using agents with demonstrated outcome benefits. Emerging biomarkers and imaging enhance risk stratification.',
      explanation: `**Integrated Pathophysiology:**

*Cellular Mechanisms:*

Endothelial Dysfunction:
- Decreased NO bioavailability (↓eNOS, ↑ROS quenching NO)
- Increased endothelin-1 and angiotensin II
- Altered barrier function and permeability
- Procoagulant state (↓thrombomodulin, ↑PAI-1, ↑vWF)

Inflammation:
- Monocyte/macrophage activation
- NF-κB pathway activation
- Elevated CRP, IL-6, TNF-α
- NLRP3 inflammasome involvement

Mitochondrial Dysfunction:
- Superoxide overproduction
- Altered dynamics (fission/fusion imbalance)
- mtDNA damage
- Reduced ATP production

*Tissue-Specific Pathology:*

Retina:
- Pericyte loss → microaneurysms
- Capillary dropout → ischemia → VEGF → neovascularization
- Blood-retinal barrier breakdown → macular edema
- Neurodegeneration may precede vascular changes

Kidney:
- Glomerular hyperfiltration (early)
- Mesangial expansion (Kimmelstiel-Wilson nodules)
- Podocyte injury → proteinuria
- Tubulointerstitial fibrosis
- Altered tubuloglomerular feedback

Nerve:
- Schwann cell dysfunction
- Axonal degeneration
- Segmental demyelination
- Reduced nerve blood flow

**Advanced Retinopathy Management:**

*Anti-VEGF Therapy:*
| Agent | Mechanism | Key Trials |
|-------|-----------|------------|
| Ranibizumab | Anti-VEGF-A fragment | RISE/RIDE, DRCR.net Protocol T |
| Aflibercept | VEGF trap (A+B + PlGF) | VISTA/VIVID |
| Bevacizumab | Full anti-VEGF antibody | DRCR.net (off-label, cost-effective) |
| Faricimab | Bispecific (VEGF-A + Ang-2) | YOSEMITE/RHINE (longer intervals) |

*Surgical Intervention:*
- Vitrectomy for: Non-clearing vitreous hemorrhage, tractional retinal detachment
- Timing: Earlier intervention often better outcomes

**Diabetic Kidney Disease - Advanced Management:**

*SGLT2 Inhibitors - Renoprotection:*

Trial Evidence:
| Trial | Drug | Population | Renal Outcome Reduction |
|-------|------|------------|------------------------|
| CREDENCE | Canagliflozin | DKD, eGFR 30-90 | 30% (composite endpoint) |
| DAPA-CKD | Dapagliflozin | CKD (±diabetes) | 39% |
| EMPA-KIDNEY | Empagliflozin | CKD (±diabetes) | 28% |

Mechanisms:
- Reduced intraglomerular pressure (tubuloglomerular feedback restoration)
- Decreased hyperfiltration
- Anti-inflammatory effects
- Metabolic effects (ketone utilization)

*Finerenone (Non-steroidal MRA):*
- FIDELIO-DKD: 18% reduction in kidney composite
- FIGARO-DKD: 13% reduction in CV composite
- Less hyperkalemia than steroidal MRAs
- Additive to ACEi/ARB and SGLT2i

*GLP-1 Receptor Agonists:*
- FLOW trial (semaglutide): 24% reduction in kidney events
- Predominantly reduce albuminuria
- May have direct renal protective effects

**Neuropathy - Emerging Understanding:**

*Biomarkers:*
- Corneal confocal microscopy: Non-invasive small fiber assessment
- Skin biopsy: Intraepidermal nerve fiber density
- Nerve conduction studies: Large fiber function

*Small Fiber Neuropathy:*
- Often precedes large fiber damage
- Pain, autonomic symptoms predominant
- Standard NCS may be normal
- Diagnosis: Skin biopsy, QST, corneal microscopy

*Disease-Modifying Approaches (investigational):*
- Aldose reductase inhibitors: Disappointing results historically
- C-peptide: May restore Na+/K+ ATPase function
- Erythropoietin analogs: Neuroprotective
- Actovegin: Some evidence in DPN

**Cardiovascular Risk - Comprehensive Approach:**

*Glucose-Lowering with CV Benefit:*

| Agent | MACE Reduction | HF Benefit | Notes |
|-------|----------------|------------|-------|
| Empagliflozin | 14% | 35% HHF reduction | CV death reduced |
| Liraglutide | 13% | Neutral | All-cause mortality reduced |
| Semaglutide | 26% | Neutral | Stroke reduction |
| Dulaglutide | 12% | Neutral | Stroke reduction |
| Tirzepatide | Awaiting dedicated CVOT | - | SURPASS showed reduction |

*Residual Inflammatory Risk:*
- CANTOS trial: Anti-IL-1β (canakinumab) reduced CV events
- COLCOT: Colchicine reduced events post-MI
- Implications for diabetes: Inflammation is modifiable target

**Diabetic Foot:**

*Classification (Wagner):*
| Grade | Description |
|-------|-------------|
| 0 | At-risk foot, no ulcer |
| 1 | Superficial ulcer |
| 2 | Deep ulcer (tendon, bone, joint) |
| 3 | Deep infection, osteomyelitis, abscess |
| 4 | Forefoot gangrene |
| 5 | Whole foot gangrene |

*Charcot Neuroarthropathy:*
- Devastating complication of severe neuropathy
- Acute phase: Hot, swollen foot; may mimic infection
- Chronic: Bony deformity ("rocker-bottom" foot)
- Treatment: Non-weight bearing, total contact casting`,
      keyTerms: [
        { term: 'pericyte', definition: 'Support cells surrounding retinal capillaries; first cells lost in diabetic retinopathy' },
        { term: 'Kimmelstiel-Wilson nodules', definition: 'Nodular glomerulosclerosis; pathognomonic histological finding in diabetic nephropathy' },
        { term: 'tubuloglomerular feedback', definition: 'Mechanism linking distal tubule sodium sensing to afferent arteriole tone; normalized by SGLT2i' },
        { term: 'finerenone', definition: 'Non-steroidal mineralocorticoid receptor antagonist with proven renal and CV benefits in DKD' },
        { term: 'faricimab', definition: 'Bispecific antibody targeting VEGF-A and angiopoietin-2; allows extended dosing intervals' },
        { term: 'Charcot foot', definition: 'Neuropathic arthropathy causing bone/joint destruction and deformity in severely neuropathic foot' },
      ],
      clinicalNotes: 'The cardiorenal metabolic syndrome concept recognizes the interconnection of diabetes, heart failure, and CKD. SGLT2 inhibitors benefit all three conditions regardless of starting point. Current guidelines recommend SGLT2i for all patients with DKD (eGFR ≥20, albuminuria) and HF. GLP-1 RAs are preferred for those with ASCVD. Combination therapy (SGLT2i + GLP-1 RA + finerenone) may provide additive cardiorenal protection.',
    },
    5: {
      level: 5,
      summary: 'The pathogenesis of diabetic complications involves epigenetic modifications, metabolic memory, organelle dysfunction, and complex cell-type specific responses. Precision medicine approaches using omics biomarkers and imaging phenotypes are emerging, alongside novel therapeutic targets.',
      explanation: `**Advanced Molecular Mechanisms:**

*Epigenetics and Metabolic Memory:*
- DCCT/EDIC: Intensive control during DCCT → lasting benefit despite subsequent convergence
- Mechanisms:
  - Histone modifications: H3K9ac, H3K4me1 at inflammatory genes
  - DNA methylation: TXNIP hypomethylation → increased oxidative stress
  - Non-coding RNAs: miR-200b, miR-146a regulate inflammation
- Therapeutic implications: Early intervention critical; epigenetic modifiers under study

*Mitochondrial Dysfunction:*
- Excessive fission (DRP1 upregulation)
- Impaired mitophagy
- mtDNA damage and mutation accumulation
- Metabolic inflexibility
- Target: Mitochondrial-directed antioxidants (MitoQ), fusion promoters

*ER Stress and UPR:*
- Glucolipotoxicity activates unfolded protein response
- PERK, IRE1α, ATF6 pathways
- If unresolved → apoptosis
- Beta cells, podocytes particularly vulnerable

*Autophagy Dysregulation:*
- Impaired autophagic flux in diabetes
- Accumulation of damaged organelles
- mTOR overactivation (nutrient excess)
- AMPK activators (metformin) restore autophagy

**Systems Biology Perspectives:**

*Single-Cell Transcriptomics:*
- Identifying vulnerable cell populations
- Podocyte subpopulations with different injury responses
- Retinal cell type-specific pathology
- Novel therapeutic targets from cell atlas data

*Proteomics/Metabolomics Biomarkers:*
| Biomarker | Application | Status |
|-----------|-------------|--------|
| KIM-1 | Tubular injury | Validated predictor of DKD progression |
| TNFR1/TNFR2 | Inflammation | Strong predictor of ESRD |
| Urinary proteomics (CKD273) | DKD diagnosis/prognosis | CE-marked in EU |
| Serum metabolites | Risk stratification | Emerging (acylcarnitines, etc.) |

*Genetic Risk:*
- DKD GWAS: UMOD, APOL1 (African ancestry), ELMO1
- Polygenic risk scores under development
- Pharmacogenomics: Response to ACEi, SGLT2i

**Retinopathy - Frontier Concepts:**

*Neurodegeneration-First Hypothesis:*
- Retinal ganglion cell loss precedes visible vascular changes
- Detected by: OCT (RNFL thinning), ERG
- Neuroprotective strategies may prevent subsequent vasculopathy

*Artificial Intelligence:*
- Deep learning for retinopathy screening (FDA-approved: IDx-DR)
- Automated grading comparable to specialists
- Predicting progression, treatment response
- Retinal imaging predicting systemic risk (CV, kidney)

*Novel Targets:*
- Tie2 activation (angiopoietin pathway)
- Kallikrein-kinin system
- Complement inhibition
- Neurotrophin support

**Nephropathy - Precision Approaches:**

*Kidney Biopsy Findings:*
- Heterogeneity: Some patients have minimal diabetic changes despite proteinuria
- Non-diabetic disease common (up to 30% in biopsied T2DM)
- Predictive of response to treatment

*Novel Therapeutic Targets:*
| Target | Mechanism | Development Stage |
|--------|-----------|-------------------|
| Endothelin receptor | Vasoconstriction, fibrosis | Atrasentan (phase 3, liver safety concerns) |
| ASK1 inhibitor | Apoptosis, inflammation | Selonsertib (phase 2) |
| Nrf2 activator | Antioxidant response | Bardoxolone (failed phase 3, CV safety) |
| PKC-β inhibitor | Multiple pathways | Ruboxistaurin (phase 3, modest effect) |
| Apoptosis inhibitors | Podocyte survival | Preclinical |

*Genetic Kidney Diseases Mimicking DKD:*
- Alport syndrome
- APOL1-associated nephropathy
- Fabry disease
- Importance of genetic testing in atypical presentations

**Neuropathy - Advanced Understanding:**

*Sodium Channel Dysfunction:*
- Nav1.7, Nav1.8 variants influence pain phenotype
- Gain-of-function → painful neuropathy
- Loss-of-function → insensitivity to pain
- Target for personalized pain management

*Regenerative Approaches:*
- Neurotrophic factors (NGF, BDNF)
- Gene therapy for neurotrophin delivery
- Schwann cell transplantation
- Challenges: Blood-nerve barrier, delivery

*Metabolic Syndrome Neuropathy:*
- Prediabetes/metabolic syndrome can cause neuropathy
- Independent of hyperglycemia
- Dyslipidemia, inflammation contribute
- Lifestyle intervention may reverse

**Cardiovascular - Beyond Traditional Risk:**

*Heart Failure in Diabetes:*

Diabetic Cardiomyopathy:
- Exists independent of CAD, hypertension
- Mechanisms: Lipotoxicity, AGEs, mitochondrial dysfunction
- Phenotype: HFpEF predominant
- Diagnosis: Echocardiography, biomarkers, CMR

SGLT2i Mechanisms in HF:
- Not fully explained by glucose, BP, weight effects
- Ketone hypothesis: Shift to efficient fuel
- Hemodynamic: Reduced preload, afterload
- Cellular: Improved calcium handling, reduced fibrosis

*Residual Risk:*
- Optimal risk factor control still leaves substantial CVD risk
- Triglyceride-rich lipoproteins (icosapent ethyl: REDUCE-IT)
- Inflammation (colchicine)
- Lp(a) (emerging therapies)

**Future Directions:**

*Prevention vs Treatment:*
- Biomarkers enabling earlier intervention
- Can we reverse early pathological changes?
- Disease modification in established complications

*Combination Organ Protection:*
- SGLT2i + GLP-1 RA + Finerenone
- Maximal cardiorenal protection
- Additive or synergistic effects

*Precision Medicine:*
- Phenotyping for treatment selection
- Genetic risk stratification
- AI-guided personalization

*Regenerative Medicine:*
- Islet cell replacement for microvascular prevention
- Kidney organoids
- Retinal cell therapy
- Still largely experimental`,
      keyTerms: [
        { term: 'metabolic memory', definition: 'Lasting effects of early glycemic exposure on complication risk; mediated by epigenetic changes' },
        { term: 'KIM-1', definition: 'Kidney injury molecule-1; biomarker of tubular injury predicting DKD progression' },
        { term: 'TNFR1/TNFR2', definition: 'Tumor necrosis factor receptors; elevated levels strongly predict ESRD in diabetes' },
        { term: 'CKD273', definition: 'Urinary peptide panel using capillary electrophoresis-mass spectrometry for DKD risk prediction' },
        { term: 'IDx-DR', definition: 'FDA-cleared AI system for autonomous diabetic retinopathy screening without specialist oversight' },
        { term: 'diabetic cardiomyopathy', definition: 'Myocardial dysfunction in diabetes independent of CAD/hypertension; characterized by diastolic dysfunction and HFpEF' },
      ],
      clinicalNotes: 'The field is moving from complication detection to prediction and prevention. Multi-biomarker panels (KIM-1, TNFR, urinary proteomics) can identify high-risk patients years before clinical events. AI-based retinal imaging may predict systemic risk. The therapeutic armamentarium has expanded dramatically with SGLT2i, GLP-1 RA, and finerenone providing proven organ protection beyond glucose control. Clinicians should consider maximal cardio-reno-protective therapy for high-risk patients.',
    },
  },

  media: [
    {
      id: 'dm-complications-overview-1',
      type: 'diagram',
      filename: 'diabetes-complications-overview.svg',
      title: 'Overview of Diabetic Complications',
      description: 'Microvascular and macrovascular complications of diabetes',
    },
    {
      id: 'dm-retinopathy-stages-1',
      type: 'diagram',
      filename: 'diabetic-retinopathy-stages.svg',
      title: 'Diabetic Retinopathy Staging',
      description: 'Progression from NPDR to PDR with clinical findings',
    },
  ],

  citations: [
    {
      id: 'dcct-edic-2014',
      type: 'article',
      title: 'Intensive Diabetes Treatment and Cardiovascular Outcomes in T1DM',
      authors: ['DCCT/EDIC Research Group'],
      source: 'N Engl J Med 2005;353:2643-53',
      license: 'Copyrighted',
    },
    {
      id: 'brownlee-2001',
      type: 'article',
      title: 'Biochemistry and molecular cell biology of diabetic complications',
      authors: ['Brownlee M'],
      source: 'Nature 2001;414:813-820',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'endocrine-diabetes-type1', targetType: 'condition', relationship: 'related', label: 'Type 1 Diabetes' },
    { targetId: 'endocrine-diabetes-type2', targetType: 'condition', relationship: 'related', label: 'Type 2 Diabetes' },
    { targetId: 'endocrine-dka', targetType: 'condition', relationship: 'see-also', label: 'Diabetic Ketoacidosis' },
    { targetId: 'endocrine-hhs', targetType: 'condition', relationship: 'see-also', label: 'Hyperosmolar State' },
  ],

  tags: {
    systems: ['endocrine', 'cardiovascular', 'renal', 'nervous', 'ophthalmologic'],
    topics: ['diabetes', 'complications', 'microvascular', 'macrovascular'],
    keywords: ['retinopathy', 'nephropathy', 'neuropathy', 'cardiovascular disease', 'diabetic foot'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'ophthalmology', 'nephrology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
