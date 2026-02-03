/**
 * Pulmonary Vascular Diseases
 *
 * Comprehensive content covering pulmonary embolism (PE),
 * pulmonary hypertension (PH), and right ventricular failure.
 */

import { EducationalContent } from '../types';

export const pulmonaryVascularContent: EducationalContent = {
  id: 'pulmonology-pulmonary-vascular',
  type: 'topic',
  name: 'Pulmonary Vascular Diseases',
  nameEs: 'Enfermedades Vasculares Pulmonares',
  alternateNames: [
    'Pulmonary Vascular Disorders',
    'Pulmonary Circulation Diseases',
    'PE and Pulmonary Hypertension',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Pulmonary vascular diseases affect the blood vessels in the lungs. The two main conditions are pulmonary embolism (a blood clot that travels to the lungs) and pulmonary hypertension (high blood pressure in lung arteries).',
      explanation: `## Blood Vessels in Your Lungs

Your heart pumps blood to your lungs through blood vessels called pulmonary arteries. In the lungs, blood picks up oxygen and releases carbon dioxide. When something goes wrong with these blood vessels, it can be very serious.

## Pulmonary Embolism (PE) - A Blood Clot in the Lungs

### What Happens
- A blood clot forms somewhere in the body, usually in the legs (deep vein thrombosis or DVT)
- The clot breaks loose and travels through the bloodstream
- It gets stuck in a blood vessel in the lung
- This blocks blood flow and makes it hard for the lung to work

### Warning Signs
- Sudden shortness of breath
- Sharp chest pain (worse when breathing in)
- Rapid heartbeat
- Coughing (sometimes with blood)
- Feeling dizzy or faint
- Leg swelling or pain (from the original clot)

### Who Is at Risk?
- People who sit still for a long time (long flights, bed rest after surgery)
- After surgery, especially hip or knee replacement
- Cancer patients
- Pregnant women
- People taking birth control pills
- Overweight individuals
- Smokers

### Treatment
- Blood thinners (anticoagulants) to prevent more clots
- Clot-busting medicine (thrombolytics) for severe cases
- Sometimes a filter placed in a vein to catch clots

## Pulmonary Hypertension (PH) - High Pressure in Lung Arteries

### What Happens
- Blood pressure in the lung arteries becomes too high
- The right side of the heart has to work much harder to pump blood through the lungs
- Over time, the right heart gets weak and can fail

### Symptoms
- Shortness of breath (especially with activity)
- Fatigue and weakness
- Swollen ankles and legs
- Chest pain
- Dizziness or fainting during activity
- Blue lips or fingers

### Causes
- Can happen on its own (rare, called PAH)
- Left heart disease (most common cause overall)
- Lung diseases like COPD or pulmonary fibrosis
- Blood clots that do not dissolve (chronic thromboembolic PH)
- Other medical conditions

### Treatment
- Medications to open up blood vessels and reduce pressure
- Oxygen therapy
- Treatment of the underlying cause
- In severe cases, lung transplant`,

      keyTerms: [
        {
          term: 'Pulmonary Embolism (PE)',
          definition: 'A blood clot that travels to the lungs and blocks a blood vessel',
        },
        {
          term: 'DVT (Deep Vein Thrombosis)',
          definition: 'A blood clot that forms in a deep vein, usually in the leg',
        },
        {
          term: 'Pulmonary Hypertension',
          definition: 'Abnormally high blood pressure in the blood vessels of the lungs',
        },
        {
          term: 'Anticoagulant',
          definition: 'A medicine that thins the blood and prevents clots from forming',
        },
      ],
      analogies: [
        'A pulmonary embolism is like a roadblock on the highway to your lungs - it stops blood from getting through to pick up oxygen.',
        'Pulmonary hypertension is like trying to pump water through a garden hose that someone is stepping on - the pressure builds up and the pump (your heart) has to work harder and harder.',
        'DVT traveling to the lungs is like a piece of debris floating down a river until it gets stuck at a narrow point.',
      ],
      examples: [
        'A woman who develops sudden chest pain and shortness of breath after a long flight (PE)',
        'A man who notices he cannot walk as far as he used to and his ankles are always swollen (pulmonary hypertension)',
        'A person recovering from knee surgery who develops calf pain and then sudden breathlessness (DVT leading to PE)',
      ],
      patientCounselingPoints: [
        'If you develop sudden shortness of breath or chest pain, seek emergency care immediately.',
        'Move around regularly during long flights or car rides to prevent blood clots.',
        'If prescribed blood thinners, take them exactly as directed and watch for unusual bleeding.',
        'Compression stockings can help prevent blood clots in the legs.',
        'Tell your doctor about any family history of blood clots.',
      ],
    },

    2: {
      level: 2,
      summary:
        'PE diagnosis uses clinical prediction rules (Wells, Geneva), D-dimer, and CTPA. Management stratifies by hemodynamic severity. PH is classified into 5 WHO groups based on etiology, with mean pulmonary arterial pressure >20 mmHg on RHC defining disease.',
      explanation: `## Pulmonary Embolism: Diagnosis

### Clinical Prediction Rules

**Wells Score (Original):**
| Criterion | Points |
|-----------|--------|
| Clinical signs of DVT | 3.0 |
| PE most likely diagnosis | 3.0 |
| Heart rate >100 bpm | 1.5 |
| Immobilization/surgery in prior 4 weeks | 1.5 |
| Previous DVT/PE | 1.5 |
| Hemoptysis | 1.0 |
| Active cancer | 1.0 |

- Score ≤4: PE unlikely → D-dimer
- Score >4: PE likely → CTPA

**Revised Geneva Score:**
- Uses objective clinical variables (age, heart rate, surgery, prior VTE, cancer, unilateral leg pain/edema, hemoptysis)
- Similar performance to Wells
- Less subjective (no "PE most likely" criterion)

### Diagnostic Algorithm
1. **Assess pre-test probability** (Wells or Geneva)
2. **Low/Intermediate probability**: D-dimer
   - D-dimer negative (<500 ng/mL, or age-adjusted <age × 10 for patients >50): PE excluded
   - D-dimer positive: Proceed to CTPA
3. **High probability**: CTPA directly (do not wait for D-dimer)
4. **CTPA (CT Pulmonary Angiography)**: Gold standard imaging
   - Sensitivity >95%, specificity >95%
   - Shows clot location and RV strain
5. **Alternatives**: V/Q scan if contrast allergy or renal failure; lower-extremity ultrasound if DVT suspected

### Hemodynamic Classification
- **Massive (High-risk)**: Sustained hypotension (SBP <90 mmHg) or cardiac arrest
- **Submassive (Intermediate-risk)**: Hemodynamically stable with RV dysfunction (echo or CT) and/or elevated troponin/BNP
- **Low-risk**: Hemodynamically stable, no RV dysfunction, normal biomarkers

## Pulmonary Embolism: Management

### Anticoagulation (All PE)
- **Initial**: Heparin (UFH or LMWH) or direct oral anticoagulants (DOACs)
- **DOACs preferred** for most patients:
  - Rivaroxaban: 15 mg BID × 21 days, then 20 mg daily
  - Apixaban: 10 mg BID × 7 days, then 5 mg BID
- **LMWH preferred**: Active cancer (or DOAC: edoxaban, rivaroxaban)
- **Duration**: 3 months minimum; indefinite if unprovoked or recurrent

### Risk-Stratified Treatment
- **Low-risk**: Anticoagulation; consider outpatient treatment (HESTIA criteria, sPESI = 0)
- **Submassive**: Anticoagulation + close monitoring; consider thrombolysis if deterioration
- **Massive**: Systemic thrombolysis (alteplase 100 mg IV over 2 hours) or catheter-directed therapy or surgical embolectomy

### Special Situations
- **IVC filter**: Only if anticoagulation absolutely contraindicated; retrievable filters preferred
- **Pregnancy**: LMWH (DOACs contraindicated); V/Q scan over CTPA if possible
- **HIT**: Argatroban or fondaparinux

## Pulmonary Hypertension: Classification

### WHO Groups (6th World Symposium, 2018 updated 2022)

**Group 1: Pulmonary Arterial Hypertension (PAH)**
- Idiopathic PAH (IPAH)
- Heritable PAH (BMPR2 mutations)
- Drug/toxin-induced (methamphetamine, anorexigens)
- Associated: CTD (scleroderma), HIV, portal hypertension, CHD
- PVOD/PCH (pulmonary veno-occlusive disease)

**Group 2: PH due to Left Heart Disease** (most common)
- HFrEF, HFpEF, valvular disease
- Combined pre- and post-capillary PH

**Group 3: PH due to Lung Disease/Hypoxia**
- COPD, ILD, sleep-disordered breathing
- Chronic altitude exposure

**Group 4: Chronic Thromboembolic PH (CTEPH)**
- Organized thrombi in pulmonary arteries
- Potentially curable with pulmonary endarterectomy (PEA)

**Group 5: Multifactorial/Unclear Mechanisms**
- Hematologic disorders, systemic diseases, metabolic disorders

### Hemodynamic Definition (RHC)
- mPAP >20 mmHg (updated from >25 mmHg in 2022)
- Pre-capillary: PAWP ≤15 mmHg, PVR >2 WU
- Post-capillary: PAWP >15 mmHg
- Combined: PAWP >15 mmHg AND PVR >2 WU

## Right Ventricular Failure

### Pathophysiology
- RV is thin-walled, volume-adapted; poorly tolerates pressure overload
- Increased afterload → RV dilation → tricuspid regurgitation → decreased CO
- RV ischemia from decreased coronary perfusion (RV pressure > aortic diastolic)
- Interventricular dependence: RV dilation impairs LV filling (D-shaped septum)

### Clinical Signs
- JVD, peripheral edema, hepatomegaly, ascites
- Pulsatile liver, right-sided S3
- Low cardiac output: Fatigue, syncope, hypotension
- ECG: Right axis deviation, RV hypertrophy, P pulmonale`,

      keyTerms: [
        {
          term: 'Wells Score',
          definition: 'Clinical prediction rule that estimates the probability of PE using 7 criteria; guides whether to obtain D-dimer vs. proceed directly to CTPA',
        },
        {
          term: 'CTPA',
          definition: 'CT Pulmonary Angiography - gold standard imaging test for PE; shows clot location and right ventricular strain',
        },
        {
          term: 'D-dimer',
          definition: 'Blood test for fibrin degradation products; high sensitivity but low specificity; negative result rules out PE in low-probability patients',
        },
        {
          term: 'mPAP',
          definition: 'Mean Pulmonary Arterial Pressure - measured by right heart catheterization; >20 mmHg defines pulmonary hypertension',
        },
        {
          term: 'PAWP',
          definition: 'Pulmonary Artery Wedge Pressure - estimates left atrial pressure; distinguishes pre-capillary (≤15) from post-capillary (>15) PH',
        },
        {
          term: 'Pulmonary endarterectomy',
          definition: 'Surgical removal of organized clot from pulmonary arteries in CTEPH; potentially curative',
        },
      ],
      analogies: [
        'The Wells score is like a checklist that helps doctors decide how worried they should be about a blood clot before ordering expensive tests.',
        'D-dimer is like a smoke detector - it is great at telling you there is no fire (negative = no clot), but it goes off for many reasons besides fire (positive does not always mean clot).',
        'The right ventricle failing from pulmonary hypertension is like a small water pump being asked to push water through a pipe with ever-increasing resistance - eventually the pump burns out.',
        'WHO PH groups are like sorting patients by which part of the plumbing is broken: the small arteries (Group 1), the left-side pump (Group 2), or the lung tissue around the vessels (Group 3).',
      ],
      examples: [
        'A patient with Wells score of 6 (likely PE) goes directly to CTPA, which shows bilateral PE with RV enlargement (submassive PE)',
        'A post-surgical patient with Wells score of 2 (unlikely PE) has negative age-adjusted D-dimer; PE effectively ruled out',
        'A scleroderma patient with progressive dyspnea undergoes RHC showing mPAP 38 mmHg, PAWP 12 mmHg, PVR 5.2 WU (Group 1 PAH)',
        'A patient with history of recurrent PE develops chronic dyspnea; V/Q scan shows mismatched defects, diagnosed with CTEPH (Group 4)',
      ],
      clinicalNotes:
        'Age-adjusted D-dimer (age × 10 for patients >50) reduces false positives without missing PE. DOACs have replaced warfarin as first-line for most PE patients. The hemodynamic definition of PH was lowered from mPAP >25 to >20 mmHg in 2022, capturing earlier disease. CTEPH is the only potentially curable form of PH - always screen with V/Q scan in unexplained PH (CTPA can miss chronic clot).',
    },

    3: {
      level: 3,
      summary:
        'PE risk stratification uses PESI/sPESI scores, echocardiography, and cardiac biomarkers to guide management intensity. PAH treatment targets three pathways (endothelin, nitric oxide, prostacyclin) with upfront combination therapy. CTEPH evaluation requires V/Q scanning and expert center referral.',
      explanation: `## PE: Advanced Risk Stratification

### Prognostic Scores
**PESI (Pulmonary Embolism Severity Index):**
- Age, sex, cancer, heart failure, chronic lung disease, HR, SBP, RR, temperature, mental status, SpO2
- Class I-II (low risk): 30-day mortality <3.5%
- Class III-V (intermediate-high risk): 30-day mortality 3.5-25%

**Simplified PESI (sPESI):**
- Age >80, cancer, chronic cardiopulmonary disease, HR ≥110, SBP <100, SpO2 <90%
- Score 0: Low risk (1% 30-day mortality) → consider outpatient management
- Score ≥1: Higher risk → inpatient management

### ESC Risk Stratification (2019 Guidelines)
- **High-risk**: Hemodynamic instability → thrombolysis/intervention
- **Intermediate-high**: Stable + RV dysfunction (echo/CT) + elevated troponin → ICU monitoring, rescue thrombolysis if deterioration
- **Intermediate-low**: Stable + RV dysfunction OR elevated biomarkers (not both) → ward monitoring
- **Low-risk**: sPESI 0 + no RV dysfunction + normal biomarkers → consider outpatient

### RV Dysfunction Assessment
**Echocardiography:**
- RV dilation (RV/LV ratio >1.0)
- RV free wall hypokinesis with apical sparing (McConnell sign)
- TAPSE <16 mm (tricuspid annular plane systolic excursion)
- Tricuspid regurgitation velocity >2.7 m/s
- 60/60 sign: Pulmonary acceleration time <60 ms + TR gradient <60 mmHg

**CT (at time of CTPA):**
- RV/LV diameter ratio >1.0
- Interventricular septum bowing toward LV
- Contrast reflux into IVC/hepatic veins
- Pulmonary artery diameter >29 mm

### Advanced PE Treatment
**Catheter-Directed Therapy:**
- Catheter-directed thrombolysis (CDT): Lower-dose tPA via catheter (ULTIMA, SEATTLE II trials)
- Aspiration thrombectomy (FlowTriever: FLARE trial; Indigo: EXTRACT-PE)
- Reduced bleeding risk compared to systemic thrombolysis
- Expanding indications: Submassive PE with RV dysfunction

**PE Response Team (PERT):**
- Multidisciplinary rapid-response team (pulmonology, cardiology, interventional radiology, cardiac surgery)
- Coordinates risk stratification and treatment decisions
- Growing model at academic centers

## Pulmonary Arterial Hypertension: Treatment

### Three Therapeutic Pathways

**Endothelin Pathway:**
- Endothelin-1 is a potent vasoconstrictor and proliferative mediator
- **Endothelin receptor antagonists (ERAs):**
  - Ambrisentan (Letairis): Selective ET-A; 5-10 mg daily
  - Bosentan (Tracleer): Non-selective ET-A/B; 125 mg BID; hepatotoxicity monitoring
  - Macitentan (Opsumit): Non-selective, tissue-targeting; 10 mg daily; SERAPHIN trial showed morbidity/mortality benefit

**Nitric Oxide Pathway:**
- NO activates guanylate cyclase → cGMP → vasodilation
- **PDE-5 inhibitors** (prevent cGMP breakdown):
  - Sildenafil (Revatio): 20 mg TID
  - Tadalafil (Adcirca): 40 mg daily
- **Soluble guanylate cyclase (sGC) stimulator:**
  - Riociguat (Adempas): 2.5 mg TID; do NOT combine with PDE-5i
  - Also approved for CTEPH

**Prostacyclin Pathway:**
- Prostacyclin (PGI2) is a vasodilator and anti-proliferative
- **Prostacyclin analogs:**
  - Epoprostenol (Flolan/Veletri): IV continuous; most potent; improves survival
  - Treprostinil: SC, IV, inhaled (Tyvaso), or oral (Orenitram)
  - Iloprost (Ventavis): Inhaled, 6-9 times daily
- **IP receptor agonist:**
  - Selexipag (Uptravi): Oral; 200-1600 mcg BID; GRIPHON trial

### Treatment Strategy

**Risk Assessment Tools:**
- REVEAL 2.0 score, ESC/ERS risk assessment
- Stratify into low, intermediate, or high risk based on: WHO FC, 6MWD, BNP/NT-proBNP, hemodynamics, echo, cardiopulmonary exercise testing

**Upfront Combination Therapy (Standard of Care):**
- Low/intermediate risk: Oral dual combination (ERA + PDE-5i)
  - AMBITION trial: Upfront ambrisentan + tadalafil superior to monotherapy
- High risk: Triple including IV/SC prostacyclin
  - Consider IV epoprostenol as part of initial regimen

**Follow-up Strategy:**
- Reassess at 3-6 months
- Goal: Low-risk profile (WHO FC I-II, 6MWD >440 m, BNP <50, RAP <8, CI ≥2.5)
- Escalate if not at low-risk target
- Consider transplant if failing maximal medical therapy

## CTEPH: Specialized Management

### Diagnosis
- V/Q scan: Screening test of choice (>97% sensitivity); mismatched perfusion defects
- CTPA: May miss chronic organized thrombus; shows webs, bands, intimal irregularity
- Right heart catheterization: Confirms hemodynamic severity
- Pulmonary angiography: Gold standard for surgical planning

### Treatment Options
1. **Pulmonary endarterectomy (PEA)**: Surgery of choice for proximal disease; potentially curative; operative mortality 2-5% at expert centers
2. **Balloon pulmonary angioplasty (BPA)**: For inoperable distal disease; serial sessions; improving outcomes
3. **Riociguat**: Only medication approved specifically for inoperable CTEPH or persistent PH post-PEA
4. **Lifelong anticoagulation**: All CTEPH patients

### Operability Assessment
- Requires expert CTEPH center (UCSD, Papworth, Vienna, etc.)
- Accessible organized thrombus on imaging
- PVR not disproportionately elevated relative to clot burden
- Acceptable surgical risk`,

      keyTerms: [
        {
          term: 'PESI/sPESI',
          definition:
            'Pulmonary Embolism Severity Index - prognostic scores predicting 30-day mortality; sPESI score of 0 identifies low-risk patients suitable for outpatient management',
        },
        {
          term: 'McConnell sign',
          definition:
            'Echocardiographic finding of RV free wall hypokinesis with preserved apical contractility; relatively specific for acute PE',
        },
        {
          term: 'Endothelin receptor antagonist (ERA)',
          definition:
            'Drug class blocking endothelin-1 receptors to reduce vasoconstriction and vascular proliferation in PAH (ambrisentan, bosentan, macitentan)',
        },
        {
          term: 'Prostacyclin pathway',
          definition:
            'Vasodilatory and anti-proliferative pathway targeted by prostacyclin analogs (epoprostenol, treprostinil) and IP receptor agonists (selexipag)',
        },
        {
          term: 'Riociguat',
          definition:
            'Soluble guanylate cyclase stimulator that enhances NO signaling; approved for PAH and inoperable CTEPH',
        },
        {
          term: 'PE Response Team (PERT)',
          definition:
            'Multidisciplinary rapid-response team that coordinates risk stratification and treatment decisions for acute PE',
        },
        {
          term: 'Balloon pulmonary angioplasty (BPA)',
          definition:
            'Catheter-based intervention for inoperable CTEPH using serial balloon dilations of organized thrombus in distal pulmonary arteries',
        },
      ],
      analogies: [
        'The three PAH treatment pathways are like three different keys to unlock constricted blood vessels: endothelin blockers remove the lock (block vasoconstrictor), NO pathway drugs grease the hinge (enhance vasodilator), and prostacyclin provides an entirely new door (direct vasodilation + anti-proliferative).',
        'Upfront dual combination therapy in PAH is like attacking an enemy from two fronts simultaneously rather than trying one approach at a time.',
        'CTEPH pulmonary endarterectomy is like a plumber removing old calcified buildup from inside a pipe to restore flow - it is technically demanding but can restore near-normal function.',
        'Catheter-directed therapy for PE is like delivering firefighters directly to the fire rather than spraying water from a distance (systemic thrombolysis).',
      ],
      examples: [
        'A submassive PE patient with sPESI 2, RV/LV ratio 1.3 on CT, and troponin 0.15 managed with anticoagulation and ICU monitoring; PERT consulted',
        'A newly diagnosed PAH patient (WHO FC III, 6MWD 310 m, BNP 450) started on upfront ambrisentan + tadalafil per AMBITION protocol',
        'A CTEPH patient with mPAP 42 and proximal organized thrombus referred to expert center for PEA; post-operative mPAP normalizes to 18',
        'A PAH patient failing dual oral therapy escalated to IV epoprostenol with improvement to low-risk profile at 3 months',
      ],
      clinicalNotes:
        'Key paradigm shifts: (1) Upfront combination therapy (ERA + PDE-5i) is now standard for PAH based on AMBITION trial. (2) Catheter-directed therapies for PE are rapidly expanding, with growing data for submassive PE (FlowTriever, Indigo systems). (3) PERT model improves PE outcomes through rapid multidisciplinary decision-making. (4) V/Q scan remains mandatory for CTEPH screening - CTPA misses up to 50% of chronic thrombus. (5) BPA has transformed outcomes for inoperable CTEPH with experienced centers achieving hemodynamic results approaching PEA.',
    },

    4: {
      level: 4,
      summary:
        'Advanced pathophysiology includes the Virchow triad mechanisms in VTE, pulmonary vascular remodeling (intimal/medial/adventitial changes) in PAH, RV-pulmonary artery coupling, thromboinflammation in PE, and molecular genetics of heritable PAH (BMPR2 signaling).',
      explanation: `## VTE Pathophysiology: Beyond Virchow

### Virchow Triad Revisited
1. **Stasis**: Venous stasis activates endothelium, upregulates P-selectin and von Willebrand factor; promotes neutrophil extracellular trap (NET) formation
2. **Endothelial injury/dysfunction**: Surgery, trauma, catheters; also chronic: obesity, smoking, aging; reduces thrombomodulin and protein C activation
3. **Hypercoagulability**:
   - Inherited: Factor V Leiden (most common), prothrombin G20210A, protein C/S deficiency, antithrombin deficiency
   - Acquired: Cancer (tissue factor, mucin), antiphospholipid syndrome, myeloproliferative neoplasms, nephrotic syndrome, OCP/HRT

### Thromboinflammation in PE
- Thrombus is not just passive obstruction; it activates inflammatory cascades
- Platelet-neutrophil interactions → NET formation → further thrombosis
- Complement activation (C3a, C5a) → endothelial damage
- Right ventricular inflammation: Troponin elevation reflects myocardial injury from both pressure overload AND inflammatory mediators
- Residual vascular inflammation may drive chronic thromboembolic disease (CTEPH)

### Resolution vs. Organization
- **Normal resolution**: Fibrinolysis, macrophage-mediated remodeling → complete resolution
- **Incomplete resolution**: Organized thrombus → intimal fibrosis → CTEPH
- Risk factors for CTEPH: Large PE burden, recurrent PE, splenectomy, infected VP shunts, antiphospholipid syndrome, blood group non-O
- CTEPH develops in 2-4% of acute PE survivors

## Pulmonary Vascular Remodeling in PAH

### Three-Layer Pathology

**Intimal changes:**
- Endothelial proliferation and fibrosis
- In-situ thrombosis (loss of anti-thrombotic endothelial function)
- Plexiform lesions: Glomeruloid-like endothelial proliferation at branch points (pathognomonic for PAH)
- Plexiform lesions contain monoclonal endothelial proliferation (tumor-like biology)

**Medial changes:**
- Smooth muscle cell hypertrophy and hyperplasia
- Muscularization of previously non-muscularized arterioles
- Increased elastin and collagen deposition
- Vasoconstriction from endothelial dysfunction (decreased NO and PGI2, increased ET-1 and TXA2)

**Adventitial changes:**
- Fibroblast proliferation and matrix deposition
- Vasa vasorum neovascularization
- Inflammatory cell infiltration (T cells, B cells, macrophages, mast cells, dendritic cells)
- Adventitial fibroblasts as key drivers of vascular remodeling

### Endothelial Dysfunction: The Core Defect
- **Decreased**: Nitric oxide (eNOS uncoupling), prostacyclin (PGI2 synthase downregulation)
- **Increased**: Endothelin-1, thromboxane A2, serotonin, PDGF, FGF
- **Metabolic shift**: Warburg effect (glycolysis even in normoxia) → anti-apoptotic phenotype in PASMC and endothelium
- **Epigenetic**: DNA methylation and histone modifications alter gene expression in pulmonary vascular cells

### BMPR2 Signaling
- **BMPR2 mutations**: Present in 70-80% of heritable PAH, 10-20% of IPAH
- BMPR2 is a TGF-β superfamily receptor; signals via Smad1/5/8
- Loss of BMPR2 → impaired apoptosis of PASMC → proliferative vasculopathy
- Only 20% penetrance: Modifier genes and second hits required
- BMPR2 reduction also occurs in non-heritable PAH (epigenetic silencing)
- **Sotatercept**: Novel therapy targeting BMP pathway imbalance (see Level 5)

## RV-Pulmonary Artery Coupling

### Concept
- RV must generate sufficient stroke work to overcome PA impedance
- Coupling ratio: Ees/Ea (RV end-systolic elastance / arterial elastance)
- Coupled: Ees/Ea >0.8 → RV adapts to afterload (compensated)
- Uncoupled: Ees/Ea <0.8 → RV failure (decompensated)

### RV Adaptation Sequence
1. **Homeometric adaptation**: Increased contractility (Anrep effect) → maintains CO
2. **RV hypertrophy**: Concentric remodeling → pressure-generating capacity increases
3. **Neurohormonal activation**: RAAS, sympathetic activation → maintains perfusion
4. **Dilation (transition to failure)**: Eccentric remodeling → TR → decreased CO
5. **RV ischemia**: Increased wall stress + decreased coronary perfusion → RV MI

### Assessment of RV Function
- **Echo**: TAPSE, RV fractional area change (FAC), RV free wall strain (GLS), 3D RV EF
- **Cardiac MRI**: Gold standard for RV volumes and EF; RV mass, T1 mapping for fibrosis
- **Right heart catheterization**: Cardiac output (thermodilution/Fick), RAP, RVSWI
- **Cardiopulmonary exercise testing**: Peak VO2, VE/VCO2 slope → prognostic

### RV Failure Management
- **Volume optimization**: Diuretics (avoid overdiuresis → preload dependence)
- **Afterload reduction**: PAH-specific therapies; avoid systemic vasodilators that drop SVR
- **Contractile support**: Dobutamine, milrinone (also reduces PVR); avoid norepinephrine (increases PVR)
- **Maintain coronary perfusion**: Vasopressin preferred if systemic hypotension (maintains SVR without increasing PVR)
- **Mechanical support**: VA-ECMO as bridge to transplant or recovery; emerging RV-specific devices (Protek Duo, Impella RP)`,

      keyTerms: [
        {
          term: 'Plexiform lesion',
          definition:
            'Glomeruloid-like proliferation of endothelial cells at pulmonary arteriole branch points; pathognomonic for PAH; contains monoclonal endothelial cells suggesting tumor-like biology',
        },
        {
          term: 'BMPR2',
          definition:
            'Bone Morphogenetic Protein Receptor type 2; mutations present in 70-80% of heritable PAH; loss impairs PASMC apoptosis and promotes proliferative vasculopathy',
        },
        {
          term: 'RV-PA coupling',
          definition:
            'Relationship between RV contractility (Ees) and pulmonary arterial load (Ea); ratio <0.8 indicates uncoupling and transition to RV failure',
        },
        {
          term: 'Neutrophil extracellular traps (NETs)',
          definition:
            'Web-like structures of DNA and antimicrobial proteins released by neutrophils; promote thrombosis in VTE through thromboinflammation',
        },
        {
          term: 'Warburg effect in PAH',
          definition:
            'Metabolic shift to glycolysis even in oxygen-rich conditions, conferring an anti-apoptotic and proliferative phenotype to pulmonary vascular cells',
        },
        {
          term: 'Thromboinflammation',
          definition:
            'Bidirectional interaction between coagulation and inflammation in VTE; thrombus activates complement, NETs, and inflammatory cascades that worsen endothelial damage',
        },
        {
          term: 'Sotatercept',
          definition:
            'Activin receptor IIA-Fc fusion protein that rebalances BMP signaling in PAH by trapping activins; restores anti-proliferative BMPR2 pathway function',
        },
      ],
      analogies: [
        'Plexiform lesions in PAH are like tiny tumors growing at blood vessel branch points - they share the monoclonal proliferation and metabolic reprogramming of cancer cells.',
        'RV-PA coupling is like a bicycle chain on gears: when coupled, pedaling (RV contraction) efficiently turns the wheel (blood flow); when uncoupled, you pedal harder and harder but the wheel barely turns.',
        'Thromboinflammation turns a simple blood clot into a self-amplifying inflammatory bomb - the clot creates inflammation, which creates more clot, which creates more inflammation.',
        'BMPR2 mutation in PAH is like removing a key brake on blood vessel muscle growth: normally BMPR2 tells smooth muscle cells to stop dividing, and without it, the vessels progressively narrow.',
      ],
      examples: [
        'A heritable PAH patient with BMPR2 mutation, family screening identifies an asymptomatic carrier daughter with mildly elevated RVSP on echo - early PAH detected',
        'An acute massive PE patient with evidence of thromboinflammation (elevated CRP, complement activation) develops CTEPH at 6-month follow-up',
        'An advanced PAH patient with TAPSE 12 mm, RV GLS -8%, and Ees/Ea 0.5 indicating RV-PA uncoupling; started on milrinone and IV epoprostenol, listed for transplant',
        'A PAH patient on triple therapy with persistent RV dilation placed on VA-ECMO as bridge to bilateral lung transplant',
      ],
      clinicalNotes:
        'Key advanced concepts: (1) Thromboinflammation explains why some PE patients develop CTEPH - the inflammatory milieu prevents normal thrombus resolution. (2) RV-PA uncoupling (Ees/Ea <0.8) is a better predictor of clinical deterioration than mPAP alone. (3) BMPR2 mutations have low penetrance (20%), meaning genetic counseling must address incomplete penetrance and variable expressivity. (4) The Warburg effect in PAH opens potential metabolic therapeutic targets (dichloroacetate in trials). (5) RV failure management: avoid volume overload AND underload - optimal preload is narrow. Vasopressin is preferred vasopressor because it maintains SVR without increasing PVR.',
    },

    5: {
      level: 5,
      summary:
        'Cutting-edge developments include sotatercept rebalancing BMP/activin signaling in PAH, CAR-T approaches to pulmonary vascular remodeling, AI-assisted PE diagnosis, extended VTE prophylaxis strategies, and novel targets in the PAH pipeline (ralinepag, seralutinib, rodatristat ethyl).',
      explanation: `## Sotatercept: Paradigm Shift in PAH

### Mechanism
- Activin receptor type IIA-Fc fusion protein (activin trap)
- Activins (activin A, GDF8/11) are TGF-β superfamily ligands that promote PASMC proliferation and vascular remodeling
- BMPR2 loss in PAH tips the balance toward activin/GDF signaling
- Sotatercept sequesters activins → rebalances toward BMPR2 anti-proliferative signaling
- First therapy targeting the "reverse remodeling" concept

### Clinical Evidence
**STELLAR Trial (Phase 3):**
- 323 patients with PAH on background therapy (≥ dual combination)
- Sotatercept 0.7 mg/kg SC every 3 weeks
- Primary endpoint: 6MWD improvement of 40.8 meters vs. placebo (p<0.001)
- Secondary endpoints: Improved PVR, NT-proBNP, WHO FC, time to clinical worsening
- All endpoints met with robust statistical significance

**ZENITH Trial (Phase 3):**
- High-risk PAH patients (WHO FC III-IV)
- Assessing impact on mortality and morbidity
- Results support benefit in the most advanced patients

**FDA Approval:**
- Winrevair (sotatercept) approved March 2024 for PAH (WHO Group 1)
- First-in-class; added to background PAH therapy
- Monitoring: Polycythemia (erythropoiesis stimulation), thrombocytopenia, bleeding

### Implications
- First disease-modifying therapy concept in PAH (beyond vasodilation)
- May reverse vascular remodeling rather than just dilate vessels
- Combination with existing triple therapy creates quadruple combination era
- Open questions: Long-term durability, optimal patient selection, sequencing

## Novel PAH Pipeline

### Late-Stage Candidates
**Ralinepag:**
- Non-prostanoid IP receptor agonist (oral)
- Longer half-life than selexipag
- Phase 3 ADVANCE CAPACITY trial ongoing
- Potential for simplified oral prostacyclin pathway therapy

**Seralutinib:**
- Inhaled PDGFR/CSF1R/c-KIT inhibitor
- Targets anti-remodeling and anti-inflammatory pathways simultaneously
- Phase 2 TORREY showed PVR reduction
- Inhaled delivery minimizes systemic effects
- Phase 3 PROSERA ongoing

**Rodatristat Ethyl:**
- Tryptophan hydroxylase 1 (TPH1) inhibitor
- Blocks peripheral serotonin synthesis
- Serotonin drives PASMC proliferation and vasoconstriction
- Phase 2 showed PVR improvement
- Novel mechanism addressing serotonin axis

### Emerging Approaches
- **Anti-inflammatory**: Rituximab (B cell depletion) for PAH with autoimmune features
- **Metabolic**: Dichloroacetate (PDK inhibitor, reverses Warburg effect) Phase 1b
- **Epigenetic**: BET inhibitors, HDAC inhibitors in preclinical studies
- **Gene therapy**: BMPR2 gene delivery via AAV vectors (preclinical)
- **Cell therapy**: Endothelial progenitor cells, iPSC-derived ECs (early clinical)

## Advanced VTE Management

### Extended Anticoagulation Decision-Making
**Risk of Recurrence Without Anticoagulation:**
- Provoked (surgery): ~1% per year → 3 months sufficient
- Provoked (non-surgical transient): ~5% per year → consider extended
- Unprovoked: ~10% per year → strongly consider extended
- Cancer-associated: ~15% per year → continue while cancer active

**Extended-Dose Anticoagulation:**
- AMPLIFY-EXT: Apixaban 2.5 mg BID (reduced dose) prevents recurrence with minimal bleeding
- EINSTEIN CHOICE: Rivaroxaban 10 mg daily (reduced dose) similar benefit
- Aspirin alone inferior to reduced-dose DOAC (EINSTEIN CHOICE, ASPIRE)

**Biomarkers for Decision-Making:**
- D-dimer after stopping anticoagulation: Positive → higher recurrence risk
- Residual DVT on ultrasound: Persistent → higher recurrence
- HERDOO2 rule (women only): Men generally need indefinite anticoagulation
- Post-PE risk assessment: V/Q scan at 3-6 months to screen for CTEPH

### AI-Assisted PE Diagnosis
- Deep learning algorithms applied to CTPA: Automated clot detection
- FDA-cleared tools (Aidoc, Viz.ai): Prioritize worklist, flag positive studies
- Performance: Sensitivity 90-95%, specificity >95% in validation studies
- Augments (does not replace) radiologist interpretation
- Reduces time to diagnosis, especially during off-hours

### Catheter-Directed Therapies: Evolving Landscape
**Current Options:**
- CDT with low-dose tPA: Standard catheter-directed approach
- FlowTriever (Inari Medical): Large-bore aspiration; FLASH registry >1500 patients
- Indigo system (Penumbra): Continuous aspiration; EXTRACT-PE data
- EKOS (Boston Scientific): Ultrasound-assisted catheter-directed thrombolysis

**Ongoing Trials:**
- HI-PEITHO: CDT vs. anticoagulation alone in intermediate-high risk PE
- PEERLESS: FlowTriever vs. CDT
- Comparative effectiveness data still maturing

## Chronic Thromboembolic Disease Spectrum

### CTED (Chronic Thromboembolic Disease without PH)
- Organized thrombus without meeting PH hemodynamic criteria
- Exercise limitation, dyspnea, reduced exercise capacity
- Normal resting hemodynamics but abnormal exercise response
- May benefit from PEA or BPA at expert centers
- Represents the "pre-PH" end of the CTEPH spectrum

### BPA Advancements
- Wire-guided balloon dilation of organized distal thrombus
- Typically 3-6 sessions over months
- Refined techniques: Pressure wire guidance, OCT/IVUS for lesion characterization
- Complications: Reperfusion pulmonary edema (most common), vessel injury
- Combined BPA + riociguat in inoperable CTEPH: Additive benefits
- BPA expertise expanding from Japan globally

## Right Heart Failure: Cutting Edge

### Mechanical Circulatory Support
- **VA-ECMO**: Bridge to transplant or recovery; cannulation strategy affects outcomes
- **Protek Duo**: Percutaneous RV support device (RA to PA); allows ambulation
- **Impella RP**: Percutaneous microaxial pump (IVC to PA); 22Fr
- **Total artificial heart**: For biventricular failure; bridge to transplant

### Regenerative Approaches
- RV-specific gene therapy: Targeting SERCA2a, β-adrenergic signaling
- Cardiac progenitor cells for RV repair: Early-phase trials
- Reverse remodeling with sotatercept: May improve RV function through afterload reduction

### Precision Medicine in PAH
- Whole-genome sequencing panels: Beyond BMPR2 to include TBX4, SOX17, AQP1, GDF2, ATP13A3, EIF2AK4 (PVOD)
- Proteomic and metabolomic profiling: Identify responder phenotypes
- Digital biomarkers: Wearable activity monitors, remote hemodynamic monitoring (CardioMEMS)
- Machine learning risk prediction: Integrating clinical, hemodynamic, imaging, and molecular data for personalized prognostication`,

      keyTerms: [
        {
          term: 'Sotatercept (Winrevair)',
          definition:
            'Activin receptor IIA-Fc fusion protein approved for PAH in 2024; rebalances BMP/activin signaling to reverse pulmonary vascular remodeling; first disease-modifying PAH therapy',
          pronunciation: 'so-TAT-er-sept',
        },
        {
          term: 'STELLAR trial',
          definition:
            'Phase 3 trial demonstrating sotatercept improved 6MWD by 40.8 meters, PVR, NT-proBNP, and time to clinical worsening in PAH on background therapy',
        },
        {
          term: 'Seralutinib',
          definition:
            'Inhaled PDGFR/CSF1R/c-KIT inhibitor targeting anti-remodeling and anti-inflammatory pathways in PAH; inhaled delivery minimizes systemic toxicity',
        },
        {
          term: 'CTED',
          definition:
            'Chronic Thromboembolic Disease - organized thrombus causing exercise limitation without meeting hemodynamic criteria for PH; represents pre-CTEPH spectrum',
        },
        {
          term: 'FlowTriever',
          definition:
            'Large-bore percutaneous aspiration thrombectomy system for acute PE; removes clot without thrombolytics; FLASH registry data in >1500 patients',
        },
        {
          term: 'Protek Duo',
          definition:
            'Percutaneous dual-lumen cannula for RV mechanical circulatory support (RA to PA); allows patient ambulation while on support',
        },
        {
          term: 'CardioMEMS',
          definition:
            'Implantable wireless pulmonary artery pressure sensor enabling remote hemodynamic monitoring in PH; allows proactive therapy adjustment',
        },
        {
          term: 'Quadruple combination therapy',
          definition:
            'Emerging PAH treatment paradigm adding sotatercept to background triple therapy (ERA + PDE-5i/sGC stimulator + prostacyclin); addresses four distinct pathways',
        },
      ],
      analogies: [
        'Sotatercept is like restoring the balance on a seesaw: in PAH, activins weigh down the pro-remodeling side while BMPR2 is too weak on the anti-remodeling side. Sotatercept removes weight from the activin side, letting the seesaw tip back toward normal.',
        'The evolution from triple to quadruple combination therapy in PAH is like adding a fourth engine to an aircraft - each engine targets a different problem (vasoconstriction, proliferation, thrombosis, remodeling), and now we finally have a way to address the structural damage itself.',
        'AI-assisted PE diagnosis is like having a tireless co-reader who flags every suspicious CTPA for the radiologist - it does not replace clinical judgment but ensures no clot goes unnoticed, especially at 3 AM.',
        'BPA in CTEPH is like performing angioplasty for coronary disease but in the lung vessels - carefully opening up organized clot that has become part of the vessel wall.',
      ],
      examples: [
        'A PAH patient on ambrisentan + tadalafil + treprostinil (triple therapy) with persistent WHO FC III symptoms started on sotatercept (quadruple therapy); 6MWD improves by 55 meters at 6 months',
        'An AI algorithm flags a subtle segmental PE on overnight CTPA that was initially missed; patient receives timely anticoagulation',
        'A woman with unprovoked PE completes 6 months of apixaban 5 mg BID, then transitions to extended therapy with apixaban 2.5 mg BID based on AMPLIFY-EXT data',
        'An inoperable CTEPH patient undergoes 5 sessions of BPA with PVR reduction from 8.5 to 3.8 WU, combined with riociguat; exercise capacity significantly improved',
        'A PAH patient with SOX17 mutation identified on comprehensive genetic panel; family screening initiated; enrolled in prospective genotype-phenotype registry',
      ],
      clinicalNotes:
        'Key frontiers: (1) Sotatercept is the most important PAH therapeutic advance in decades - the first agent that may reverse vascular remodeling. Monitor for polycythemia and thrombocytopenia. (2) The PAH treatment paradigm is shifting from "vasodilate" to "vasodilate + reverse remodel." Quadruple therapy (ERA + NO pathway + prostacyclin + sotatercept) is becoming reality. (3) Catheter-directed PE therapies are expanding rapidly, but comparative effectiveness data (HI-PEITHO, PEERLESS) are needed before they become standard for submassive PE. (4) Extended reduced-dose DOAC (apixaban 2.5 mg BID or rivaroxaban 10 mg daily) has excellent efficacy-safety profile for indefinite VTE prevention. (5) CTED (thrombus without PH) is an emerging entity - symptomatic patients may benefit from intervention. (6) Remote hemodynamic monitoring (CardioMEMS) in PAH may enable proactive therapy adjustment and prevent decompensation. (7) Genetic testing in PAH should now include expanded panels beyond BMPR2: SOX17, TBX4, GDF2, AQP1, ATP13A3, EIF2AK4.',
    },
  },

  media: [],
  citations: [
    {
      id: 'esc-pe-2019',
      type: 'article',
      title: '2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism',
      authors: ['Konstantinides, S.V.', 'Meyer, G.', 'Becattini, C.'],
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehz405',
    },
    {
      id: 'esc-ph-2022',
      type: 'article',
      title: '2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension',
      authors: ['Humbert, M.', 'Kovacs, G.', 'Hoeper, M.M.'],
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehac237',
    },
    {
      id: 'stellar-2023',
      type: 'article',
      title: 'Sotatercept for the Treatment of Pulmonary Arterial Hypertension (STELLAR)',
      authors: ['Hoeper, M.M.', 'Badesch, D.B.', 'Ghofrani, H.A.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa2213558',
    },
    {
      id: 'ambition-2015',
      type: 'article',
      title: 'Initial Use of Ambrisentan plus Tadalafil in Pulmonary Arterial Hypertension (AMBITION)',
      authors: ['Galie, N.', 'Barbera, J.A.', 'Frost, A.E.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1413687',
    },
  ],
  crossReferences: [
    {
      targetId: 'pulmonology-obstructive-diseases',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Obstructive Lung Diseases',
    },
    {
      targetId: 'pulmonology-restrictive-diseases',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Restrictive Lung Diseases',
    },
    {
      targetId: 'cardiology-heart-failure',
      targetType: 'topic',
      relationship: 'related',
      label: 'Heart Failure (RV Failure)',
    },
  ],
  tags: {
    systems: ['respiratory', 'cardiovascular'],
    topics: [
      'pulmonology',
      'pulmonary embolism',
      'pulmonary hypertension',
      'VTE',
      'CTEPH',
      'PAH',
      'right ventricular failure',
    ],
    keywords: [
      'Wells score',
      'D-dimer',
      'CTPA',
      'anticoagulation',
      'thrombolysis',
      'sotatercept',
      'endothelin',
      'prostacyclin',
      'nitric oxide',
      'BMPR2',
      'RV-PA coupling',
      'catheter-directed therapy',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology', 'emergency medicine'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
};
