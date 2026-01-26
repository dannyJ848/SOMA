/**
 * Deep Vein Thrombosis (DVT) - Comprehensive Educational Content
 *
 * Covers pathophysiology, risk factors, diagnosis, treatment, and prevention
 * of deep vein thrombosis.
 */

import { EducationalContent } from '../../types';

export const deepVeinThrombosis: EducationalContent = {
  id: 'condition-deep-vein-thrombosis',
  type: 'condition',
  name: 'Deep Vein Thrombosis',
  alternateNames: ['DVT', 'Deep Venous Thrombosis', 'Venous Thromboembolism', 'Blood Clot in Leg'],
  hpoId: 'HP:0002625',

  levels: {
    1: {
      level: 1,
      summary: 'Deep vein thrombosis (DVT) is a blood clot that forms in a deep vein, usually in your leg, which can be dangerous if the clot breaks loose and travels to your lungs.',
      explanation: `Blood normally flows smoothly through your veins back to your heart. Sometimes, blood can clump together and form a clot in the deep veins of your legs. This is called a deep vein thrombosis or DVT.

**Why do blood clots form?**
Clots can form when:
- Blood flows too slowly (like when you sit still for a long time)
- Something damages the inside of a blood vessel
- Your blood is thicker than normal or clots too easily

**Who is at risk?**
- People who sit for long periods (long flights, bed rest)
- People who recently had surgery
- Pregnant women
- People taking birth control pills or hormone therapy
- People with cancer
- People who are overweight
- Older adults
- People with a family history of blood clots

**What are the warning signs?**
- Swelling in one leg
- Pain or tenderness in your leg (often in the calf)
- Warm skin
- Red or discolored skin
- Leg feels heavy

Many people have no symptoms at all!

**Why is DVT dangerous?**
The biggest danger is if the clot breaks loose and travels through your bloodstream to your lungs. This is called a pulmonary embolism (PE) and can be life-threatening.

**Warning signs of PE:**
- Sudden shortness of breath
- Chest pain that gets worse when you breathe deeply
- Coughing up blood
- Rapid heartbeat
- Feeling lightheaded

**Treatment:**
- Blood thinners (anticoagulants) to prevent the clot from growing
- Compression stockings to reduce swelling
- Moving around as soon as safe after surgery
- In severe cases, procedures to remove the clot

**Prevention:**
- Move around during long trips
- Exercise regularly
- Maintain a healthy weight
- Stay hydrated
- Follow your doctor's advice before and after surgery`,
      keyTerms: [
        { term: 'blood clot', definition: 'A clump of blood that has changed from liquid to a gel-like solid' },
        { term: 'vein', definition: 'A blood vessel that carries blood back to your heart' },
        { term: 'pulmonary embolism', definition: 'A blood clot that travels to and blocks an artery in your lungs' },
        { term: 'blood thinner', definition: 'Medicine that helps prevent blood clots from forming or growing' },
      ],
      analogies: [
        'A DVT is like a traffic jam in your blood vessel - blood backs up behind it and cannot flow properly.',
        'When a clot breaks loose and travels to the lungs, it is like a boulder rolling down a river and blocking a dam.',
        'Compression stockings work like gentle squeezing to keep blood moving, like squeezing a tube of toothpaste from the bottom up.',
      ],
      examples: [
        'A woman notices one leg is more swollen and painful than the other a few days after a long international flight.',
        'A man who had hip surgery develops calf pain and swelling despite walking around. His doctor orders an ultrasound that shows a DVT.',
      ],
    },
    2: {
      level: 2,
      summary: 'Deep vein thrombosis is a blood clot in the deep venous system, most commonly in the legs, caused by venous stasis, endothelial injury, or hypercoagulability (Virchow triad), requiring anticoagulation to prevent clot propagation and pulmonary embolism.',
      explanation: `## Understanding DVT

Deep veins are located within muscles, as opposed to superficial veins which are close to the skin surface. DVT most commonly occurs in the leg veins (iliac, femoral, popliteal, and calf veins).

### Virchow's Triad

This classic triad describes the three main factors that lead to blood clots:

1. **Venous Stasis (Slow Blood Flow)**
   - Prolonged immobility (bed rest, long travel)
   - Paralysis
   - Heart failure
   - Venous obstruction

2. **Endothelial Injury (Vessel Wall Damage)**
   - Surgery
   - Trauma
   - Prior DVT
   - IV catheters

3. **Hypercoagulability (Blood Clots Too Easily)**
   - Inherited clotting disorders (Factor V Leiden, prothrombin mutation)
   - Cancer
   - Pregnancy
   - Estrogen therapy
   - Obesity
   - Inflammatory conditions

### Risk Factors

**Major Risk Factors:**
- Major surgery (especially orthopedic)
- Hospitalization
- Cancer (especially pancreatic, lung, GI)
- Prior VTE
- Lower extremity paralysis

**Moderate Risk Factors:**
- Pregnancy and postpartum
- Estrogen-containing contraceptives
- Obesity (BMI >30)
- Long-distance travel (>4 hours)
- Older age

### Clinical Presentation

**Symptoms:**
- Unilateral leg swelling
- Pain (often in calf)
- Warmth
- Redness or discoloration
- Prominent superficial veins
- Homan's sign (calf pain with foot dorsiflexion) - unreliable

**Location matters:**
- Proximal DVT (above the knee): Higher PE risk
- Distal DVT (below the knee): Lower PE risk but can extend

### Diagnosis

**Clinical Probability Scoring (Wells Score for DVT):**

| Criteria | Points |
|----------|--------|
| Active cancer | +1 |
| Paralysis or recent leg cast | +1 |
| Recently bedridden >3 days or major surgery | +1 |
| Localized tenderness along deep veins | +1 |
| Entire leg swollen | +1 |
| Calf swelling >3 cm vs other leg | +1 |
| Pitting edema (affected leg only) | +1 |
| Collateral superficial veins | +1 |
| Previously documented DVT | +1 |
| Alternative diagnosis as likely as DVT | -2 |

- Low probability: 0 points
- Moderate probability: 1-2 points
- High probability: ≥3 points

**Diagnostic Tests:**
- **D-dimer**: Blood test that detects clot breakdown products; sensitive but not specific
- **Compression ultrasound**: First-line imaging; shows non-compressible vein
- **CT or MR venography**: For iliac or pelvic vein DVT

### Treatment

**Anticoagulation (Blood Thinners):**
- DOACs (apixaban, rivaroxaban): First-line for most patients
- Low molecular weight heparin (LMWH): Alternative, preferred in cancer
- Warfarin: Older option requiring INR monitoring
- Duration: 3 months minimum; longer if unprovoked or recurrent

**Additional Measures:**
- Compression stockings (controversial for preventing post-thrombotic syndrome)
- Early ambulation (safe and recommended)

**Severe Cases:**
- Catheter-directed thrombolysis for massive iliofemoral DVT
- IVC filter if anticoagulation contraindicated

### Prevention

**Hospitalized Patients:**
- Pharmacologic: LMWH, unfractionated heparin, DOACs
- Mechanical: Sequential compression devices, graduated compression stockings
- Early mobilization

**Surgical Patients:**
- Risk stratification
- Extended prophylaxis after major orthopedic surgery (up to 35 days)`,
      keyTerms: [
        { term: 'Virchow triad', definition: 'Three factors that predispose to blood clot formation: venous stasis, endothelial injury, and hypercoagulability' },
        { term: 'Wells score', definition: 'Clinical scoring system to estimate the probability of DVT and guide diagnostic testing' },
        { term: 'D-dimer', definition: 'Blood test measuring breakdown products of blood clots; elevated in DVT but also in many other conditions' },
        { term: 'anticoagulation', definition: 'Treatment with blood-thinning medications to prevent clot growth and new clots' },
        { term: 'proximal DVT', definition: 'Blood clot in veins above the knee (femoral, iliac), carrying higher risk of pulmonary embolism' },
      ],
      analogies: [
        'Virchow triad is like a three-legged stool - any one leg can tip the balance toward clotting.',
        'D-dimer is like a smoke detector - it goes off when there is a clot, but also goes off for many other reasons (false alarms).',
      ],
    },
    3: {
      level: 3,
      summary: 'Deep vein thrombosis pathogenesis involves the coagulation cascade activation within the context of Virchow triad factors, with diagnosis relying on pre-test probability scoring combined with D-dimer and compression ultrasonography, and treatment focused on therapeutic anticoagulation with DOACs or LMWH with attention to extended thromboprophylaxis.',
      explanation: `## Pathophysiology

### Thrombus Formation

**Initiation:**
- Endothelial injury or activation exposes tissue factor
- Tissue factor binds Factor VIIa
- Activation of extrinsic coagulation pathway

**Propagation:**
- Thrombin generation on platelet surface
- Fibrin mesh formation
- Red blood cells and platelets incorporated
- Clot propagates proximally with blood flow

**Resolution:**
- Fibrinolysis by plasmin
- Inflammation and organization
- Recanalization (often incomplete)
- Residual vein damage → post-thrombotic syndrome

### Venous Hemodynamics

**Valve Damage:**
- Thrombus adherent to valve leaflets
- Inflammatory damage to valves
- Valve incompetence → reflux
- Chronic venous hypertension

### Inherited Thrombophilias

| Condition | Prevalence | VTE Risk Increase |
|-----------|------------|-------------------|
| Factor V Leiden (heterozygous) | 5% Caucasian | 3-8x |
| Factor V Leiden (homozygous) | 0.02% | 50-80x |
| Prothrombin G20210A (heterozygous) | 2-3% | 2-4x |
| Protein C deficiency | 0.2-0.4% | 7-10x |
| Protein S deficiency | 0.1-0.2% | 5-10x |
| Antithrombin deficiency | 0.02% | 10-40x |

### Acquired Hypercoagulable States

**Cancer-Associated Thrombosis:**
- Tissue factor expression by tumor cells
- Cancer procoagulant (cysteine protease)
- Mucin interaction with selectins
- Chemotherapy effects

**Antiphospholipid Syndrome:**
- Lupus anticoagulant
- Anticardiolipin antibodies
- Anti-β2-glycoprotein I antibodies
- Requires clinical event + lab positivity x2, 12 weeks apart

## Diagnostic Algorithms

### Pre-Test Probability Assessment

**Wells Score Interpretation:**
- Unlikely (≤1): D-dimer first
  - Negative D-dimer: DVT excluded
  - Positive D-dimer: Proceed to ultrasound
- Likely (≥2): Ultrasound first
  - Positive ultrasound: DVT confirmed
  - Negative ultrasound: Consider D-dimer or repeat ultrasound

### D-Dimer Considerations

**Age-Adjusted D-Dimer:**
- Cutoff: Age × 10 µg/L (for age >50)
- Improves specificity in elderly
- Maintains sensitivity

**D-Dimer Limitations:**
- Elevated in: Pregnancy, cancer, surgery, infection, inflammation, hospitalization
- Not useful in high pre-test probability
- Not useful for ruling out recurrent DVT

### Ultrasound Findings

**Compression Ultrasound:**
- Primary finding: Non-compressibility of vein
- Secondary: Echogenic material in lumen
- Augmentation abnormalities

**Whole-Leg vs Limited Ultrasound:**
- Limited (proximal only): Requires repeat in 1 week if negative
- Whole-leg: Single study, detects isolated calf DVT

## Treatment Details

### Anticoagulation Selection

**DOACs for VTE:**

| Drug | Dose | Considerations |
|------|------|----------------|
| Rivaroxaban | 15 mg BID × 3 weeks, then 20 mg daily | No lead-in heparin needed |
| Apixaban | 10 mg BID × 7 days, then 5 mg BID | No lead-in heparin needed |
| Edoxaban | 60 mg daily (after 5+ days of parenteral) | Requires lead-in heparin |
| Dabigatran | 150 mg BID (after 5+ days of parenteral) | Requires lead-in heparin |

**LMWH Preferred:**
- Cancer-associated thrombosis (edoxaban, rivaroxaban also acceptable)
- Pregnancy
- Severe renal impairment (use with caution)

**Duration of Anticoagulation:**
- Provoked DVT (surgery, immobilization): 3 months
- Unprovoked DVT: ≥3 months, consider extended
- Recurrent unprovoked: Extended/indefinite
- Cancer-associated: Until cancer resolved or indefinitely

### Thrombolysis and Intervention

**Catheter-Directed Thrombolysis (CDT):**
- Consider for: Iliofemoral DVT with severe symptoms, low bleeding risk
- ATTRACT trial: Reduced post-thrombotic syndrome but increased bleeding
- Not routine; case-by-case

**Pharmacomechanical CDT:**
- Combines mechanical thrombectomy with thrombolytics
- Faster clot removal
- Still not proven to improve long-term outcomes

**IVC Filters:**
- Indication: Contraindication to anticoagulation with acute proximal DVT/PE
- Retrievable filters preferred
- Should be removed when anticoagulation can resume

### Post-Thrombotic Syndrome Prevention

**Compression Therapy:**
- SOX trial: Compression stockings did not prevent PTS
- Current guidelines: Not routinely recommended
- May help with symptom relief

**Risk Factors for PTS:**
- Proximal DVT location
- Recurrent ipsilateral DVT
- Obesity
- Inadequate initial anticoagulation

## Special Situations

### Upper Extremity DVT

**Causes:**
- Central venous catheters (most common)
- Paget-Schroetter syndrome (effort-related, thoracic outlet)
- Cancer

**Management:**
- Anticoagulation similar to lower extremity
- Consider thrombolysis for severe Paget-Schroetter
- Thoracic outlet decompression may be needed

### Superficial Vein Thrombosis

- Close to deep system: Higher risk of DVT
- Treatment: Anticoagulation (prophylactic or therapeutic dose) for 45 days
- NSAID and compression for symptom relief

### Isolated Distal DVT

- Lower PE risk than proximal
- Options: Serial ultrasound vs anticoagulation
- Anticoagulate if: Symptomatic, risk factors for extension, close to popliteal`,
      keyTerms: [
        { term: 'thrombophilia', definition: 'Inherited or acquired condition that increases the tendency to form blood clots' },
        { term: 'Factor V Leiden', definition: 'Most common inherited thrombophilia; mutation causing resistance to activated protein C' },
        { term: 'antiphospholipid syndrome', definition: 'Acquired autoimmune hypercoagulable state characterized by antibodies against phospholipid-binding proteins' },
        { term: 'catheter-directed thrombolysis', definition: 'Delivery of clot-dissolving medication directly into the thrombus via catheter' },
        { term: 'post-thrombotic syndrome', definition: 'Chronic leg symptoms (swelling, pain, skin changes) following DVT due to venous valve damage' },
        { term: 'age-adjusted D-dimer', definition: 'D-dimer threshold adjusted for patient age to improve test specificity in elderly patients' },
      ],
      clinicalNotes: 'For cancer-associated VTE, LMWH has traditionally been preferred, but DOACs (edoxaban, rivaroxaban) are acceptable alternatives per CLOT, Hokusai-VTE Cancer, and SELECT-D trials, though caution is needed with GI/GU cancers due to increased bleeding. For isolated distal DVT, clinical judgment guides whether to anticoagulate immediately or monitor with serial ultrasound.',
    },
    4: {
      level: 4,
      summary: 'DVT management encompasses risk stratification using clinical probability scores and biomarkers, therapeutic anticoagulation with careful selection among DOACs, LMWH, and VKAs based on patient characteristics and comorbidities, and individualized decisions regarding extended therapy duration, thrombophilia testing, and advanced interventions for iliofemoral disease.',
      explanation: `## Advanced Pathophysiology

### Thrombus Composition and Evolution

**Initial Thrombus:**
- Platelet-fibrin nidus at valve pockets
- Red blood cell incorporation
- Propagation in direction of flow

**Thrombus Organization:**
- Inflammatory cell infiltration
- Neovascularization
- Collagen deposition
- Partial recanalization

**Residual Vein Obstruction:**
- Persistent intraluminal material
- Fibrotic scarring
- Collateral formation
- Predictor of recurrence

### Molecular Mechanisms

**Tissue Factor Pathway:**
- Circulating microparticles bearing tissue factor
- Monocyte TF expression in inflammation
- Cancer cell TF expression

**NETs (Neutrophil Extracellular Traps):**
- Chromatin released by activated neutrophils
- Provide scaffold for thrombus
- Incorporate von Willebrand factor
- Target for novel therapies (DNase)

**Platelet Activation:**
- Collagen-GPVI interaction
- VWF-GPIb interaction
- Thrombin-PAR receptors
- Platelet-leukocyte aggregates

## Risk Stratification

### Predicting Recurrence

**HERDOO2 Score (for women):**
- Hyperpigmentation, Edema, Redness (either leg): +1
- D-dimer ≥250 during anticoagulation: +1
- Obesity (BMI ≥30): +1
- Older age (≥65): +1
- Score 0-1: Low recurrence risk, can stop after 3 months

**Vienna Prediction Model:**
- Incorporates sex, location, D-dimer
- Predicts recurrence probability

**DASH Score:**
- D-dimer after stopping anticoagulation
- Age
- Sex (male)
- Hormone use at DVT onset

### Thrombophilia Testing

**When to Test:**
- Unprovoked VTE in young patients (<50)
- Recurrent unprovoked VTE
- VTE at unusual sites
- Strong family history
- Considering extended anticoagulation

**When NOT to Test:**
- Acute VTE (protein C/S, antithrombin affected)
- On anticoagulation (DOACs affect lupus anticoagulant, protein C/S)
- Provoked VTE that won't change management
- Elderly patients

**Testing Panel:**
- Factor V Leiden
- Prothrombin G20210A
- Antithrombin activity
- Protein C activity
- Protein S activity (free)
- Antiphospholipid antibodies

## Treatment Nuances

### DOAC Selection in VTE

**Rivaroxaban/Apixaban (Single-Drug Approach):**
- Simpler (no lead-in heparin)
- EINSTEIN-DVT, AMPLIFY trials
- Consider for outpatient treatment

**Edoxaban/Dabigatran (After Heparin Lead-In):**
- Require 5+ days of LMWH/UFH
- Hokusai-VTE, RE-COVER trials
- Established efficacy

### Extended Anticoagulation

**Reduced-Dose DOACs:**
- Apixaban 2.5 mg BID: AMPLIFY-EXT
- Rivaroxaban 10 mg daily: EINSTEIN-CHOICE
- Lower bleeding risk with maintained efficacy

**Aspirin Alternative:**
- ASPIRE, WARFASA: ~30% reduction vs placebo
- Less effective than anticoagulation
- Consider if anticoagulation contraindicated

### Cancer-Associated VTE

**CLOT Trial:**
- LMWH superior to warfarin for cancer VTE

**DOACs in Cancer VTE:**
- SELECT-D: Rivaroxaban vs dalteparin
- Hokusai-VTE Cancer: Edoxaban vs dalteparin
- CARAVAGGIO: Apixaban vs dalteparin (no excess GI bleeding)

**Current Approach:**
- DOACs acceptable for most cancer patients
- LMWH preferred for GI/GU malignancies (higher bleeding)
- Individualize based on drug interactions, GI absorption

### Interventional Approaches

**ATTRACT Trial (2017):**
- Pharmacomechanical CDT vs anticoagulation alone
- Primary endpoint (PTS at 2 years): No difference
- Reduced PTS in iliofemoral subgroup
- Increased major bleeding with CDT

**CAVA Trial (2019):**
- Ultrasound-accelerated CDT vs anticoagulation
- No reduction in PTS

**Current Recommendations:**
- CDT not routine for acute DVT
- Consider for iliofemoral DVT with severe symptoms, <14 days old, low bleeding risk
- Anticoagulation alone is appropriate for most

### IVC Filters

**Indications:**
- Absolute contraindication to anticoagulation with acute VTE
- VTE despite therapeutic anticoagulation

**Retrieval:**
- Target retrieval when anticoagulation can resume
- Retrieval rates often low
- Complications: Filter migration, IVC thrombosis, penetration

## Post-Thrombotic Syndrome

### Clinical Manifestations

**Villalta Score Components:**
- Pain, cramps, heaviness, pruritus, paresthesias
- Pretibial edema, skin induration, hyperpigmentation
- Venous ectasia, redness, calf compression pain
- Ulceration (defines severe PTS)

### Prevention Strategies

**Compression Stockings:**
- SOX trial: 30-40 mmHg stockings did not prevent PTS
- Placebo-controlled, blinded trial
- Shifted practice away from routine compression

**Optimal Anticoagulation:**
- Adequate initial anticoagulation intensity
- Extended duration may reduce recurrence → PTS

### Management of Established PTS

- Compression therapy for symptom relief
- Leg elevation
- Exercise therapy
- Pharmacologic (not well established)
- Venous stenting for iliac obstruction
- Ulcer care (compression, wound management)

## Special Populations

### Pregnancy

**Diagnosis:**
- D-dimer elevated in pregnancy (less useful)
- Compression ultrasound first-line
- MRV for iliac vein evaluation if needed

**Treatment:**
- LMWH (DOACs contraindicated)
- Weight-adjusted dosing
- Continue throughout pregnancy and 6 weeks postpartum (minimum 3 months total)
- Switch to LMWH or warfarin for breastfeeding

### Obesity

**Dosing Considerations:**
- LMWH: Fixed-dose may underdose; weight-based preferred
- DOACs: Limited data >120 kg or BMI >40
- Rivaroxaban pharmacokinetics acceptable up to 160 kg
- Apixaban: Less renal clearance, may be preferred

### Renal Impairment

| CrCl | DOAC Considerations |
|------|---------------------|
| 30-50 mL/min | All DOACs usable (adjust edoxaban, dabigatran) |
| 15-30 mL/min | Apixaban, rivaroxaban with caution; avoid dabigatran |
| <15 mL/min | Avoid all DOACs; use warfarin or LMWH |`,
      keyTerms: [
        { term: 'NETs', definition: 'Neutrophil extracellular traps; chromatin structures released by neutrophils that promote thrombosis' },
        { term: 'HERDOO2', definition: 'Clinical score for women with unprovoked VTE to identify those at low recurrence risk who may safely stop anticoagulation' },
        { term: 'residual vein obstruction', definition: 'Persistent thrombus or fibrosis in vein after DVT; associated with higher recurrence risk' },
        { term: 'Villalta score', definition: 'Clinical scoring system for diagnosing and grading post-thrombotic syndrome severity' },
        { term: 'ATTRACT trial', definition: 'Randomized trial showing pharmacomechanical CDT did not reduce overall PTS rates compared to anticoagulation alone' },
      ],
      clinicalNotes: 'Thrombophilia testing rarely changes acute management. Reserve for specific scenarios where results would influence duration (e.g., young patient with unprovoked VTE considering lifelong anticoagulation). For cancer-associated VTE, CARAVAGGIO showed apixaban is a reasonable alternative to LMWH without the excess GI bleeding seen with other DOACs. The SOX trial changed practice - routine compression stockings are no longer recommended to prevent PTS.',
    },
    5: {
      level: 5,
      summary: 'Contemporary DVT management integrates precision diagnostics including point-of-care testing and advanced imaging, personalized anticoagulation strategies considering pharmacogenomics and biomarkers, risk prediction models for recurrence and bleeding, catheter-based interventions for selected iliofemoral disease, and emerging therapies targeting novel pathways in thromboinflammation.',
      explanation: `## Precision Diagnostics

### Advanced Biomarkers

**D-Dimer Refinements:**
- High-sensitivity assays
- Point-of-care testing
- Quantitative thresholds for prognosis
- Elevated D-dimer after stopping anticoagulation predicts recurrence

**Thrombin Generation Assays:**
- Endogenous thrombin potential
- Peak thrombin
- May better assess hypercoagulability
- Research tool currently

**Microparticles:**
- Tissue factor-bearing microparticles
- Platelet-derived microparticles
- Predictive of recurrence (research)

### Imaging Advances

**MR Direct Thrombus Imaging:**
- Methemoglobin signal in acute thrombus
- Differentiates acute vs chronic
- Does not require contrast

**CT Venography:**
- Combined with CTPA for comprehensive VTE assessment
- May detect incidental pelvic DVT/tumors

**Intravascular Ultrasound:**
- Assess iliac vein obstruction
- Guide stent sizing
- Detect May-Thurner anatomy

### Point-of-Care Algorithms

**YEARS Algorithm:**
- Three clinical items: DVT signs, hemoptysis, PE most likely
- D-dimer thresholds vary by clinical features
- Reduces CTPA utilization

**PEGeD Study:**
- Age-adjusted D-dimer in DVT diagnosis
- Safely excludes DVT with fewer ultrasounds

## Anticoagulation: Precision Approaches

### Pharmacogenomics

**Warfarin Pharmacogenomics:**
- CYP2C9, VKORC1 polymorphisms
- Dosing algorithms available
- COAG, EU-PACT trials: Limited clinical benefit
- Consider for difficult-to-control INR

**DOAC Considerations:**
- P-glycoprotein, CYP3A4 polymorphisms less clinically relevant
- Drug-drug interactions more important
- No routine pharmacogenomic testing recommended

### Biomarker-Guided Therapy

**D-Dimer for Duration:**
- PROLONG studies: Elevated D-dimer after stopping → continue therapy
- DULCIS: Serial D-dimer to guide resumption
- Practical approach for extended therapy decisions

**Residual Vein Occlusion:**
- Higher recurrence if RVO present
- May influence duration decision
- Not a strong predictor alone

### Novel Anticoagulants in Development

**Factor XI Inhibitors:**
- Abelacimab, asundexian, milvexian
- Uncouple thrombosis from hemostasis
- Phase 3 trials ongoing
- May provide safer anticoagulation

**Factor XIIa Inhibitors:**
- Target contact pathway
- Garadacimab in HAE (also affects clotting)
- VTE application in development

## Interventional Approaches

### Patient Selection for CDT/PCDT

**Optimal Candidates:**
- Iliofemoral DVT
- Symptom duration <14 days
- Good functional status
- Low bleeding risk
- Long life expectancy

**ATTRACT Subgroup Findings:**
- Iliofemoral DVT: Reduced PTS with CDT
- Femoral-popliteal: No benefit
- Supports selective use

### Venous Stenting

**May-Thurner Syndrome:**
- Left iliac vein compression by right common iliac artery
- Consider stenting after thrombus clearance
- Dedicated venous stents preferred

**Chronic Iliofemoral Obstruction:**
- IVUS-guided stenting
- High patency rates
- Symptom improvement in most

### Mechanical Thrombectomy Devices

**ClotTriever:**
- Large-bore mechanical aspiration
- Single-session clot removal
- CLOUT registry: High thrombus removal

**AngioVac:**
- Veno-venous bypass circuit
- Aspiration of thrombus
- Complex setup

**FlowTriever:**
- Aspiration-based system
- Originally for PE, used in DVT

## Risk Prediction Models

### Recurrence Risk

**Vienna Prediction Model:**
- Sex, location, D-dimer
- Nomogram for individualized risk

**DASH Score:**
- D-dimer (abnormal = +2)
- Age ≤50 (+1)
- Sex male (+1)
- Hormone use at VTE event (-2)
- Score ≤1: Low recurrence, stop at 3 months

**HERDOO2 (Women Only):**
- Validated in REVERSE II
- Score 0-1: 3% annual recurrence (stop)
- Score ≥2: Consider extended therapy

### Bleeding Risk

**VTE-BLEED Score:**
- Bleeding at anticoagulation start
- Renal impairment
- Age ≥60
- Cancer
- Anemia
- Prior bleeding
- Guides extended anticoagulation safety

**HAS-BLED:**
- Originally for AF
- Applied to VTE
- Identifies modifiable risks

## Emerging Therapies

### Thrombus Resolution

**DNase Therapies:**
- Target NETs in thrombus
- Preclinical studies
- May accelerate resolution

**Factor XIa Inhibitors:**
- May improve recanalization
- Reduce residual occlusion
- Clinical trials ongoing

### Anti-Inflammatory Approaches

**Statins:**
- JUPITER secondary analysis: Reduced VTE with rosuvastatin
- Anti-inflammatory mechanism
- Not proven as VTE treatment

**Colchicine:**
- Reduce inflammation post-VTE
- No clinical trial data
- Theoretical benefit

### Digital Health

**Wearable Monitoring:**
- Leg sensors for edema
- Activity tracking for mobilization
- Medication adherence apps

**AI Applications:**
- Ultrasound interpretation assistance
- Risk prediction algorithms
- Clinical decision support

## Quality Improvement

### VTE Prevention Bundles

**Hospital-Acquired VTE Prevention:**
- Risk assessment on admission
- Appropriate prophylaxis
- Early mobilization
- Surveillance

**Surgical VTE Prevention:**
- Extended prophylaxis after high-risk surgery
- Risk-adapted duration
- Patient education

### Transitions of Care

**Discharge Planning:**
- Anticoagulation reconciliation
- Patient education
- Follow-up arranged
- Pharmacy involvement

**Anticoagulation Clinics:**
- Pharmacist-led management
- Improve adherence and safety
- Reduce recurrence

## Guideline Integration

### ASH 2020 VTE Guidelines

**Key Recommendations:**
- DOACs over warfarin for VTE treatment (most patients)
- LMWH over DOACs for cancer-associated VTE (conditional)
- Against routine compression stockings for PTS prevention
- Extended anticoagulation for unprovoked VTE (shared decision)

### ACCP Guidelines

**Duration Recommendations:**
- Provoked by surgery: 3 months
- Provoked by non-surgical factor: 3 months
- Unprovoked: Extended (if low bleeding risk)
- Recurrent unprovoked: Extended/indefinite`,
      keyTerms: [
        { term: 'Factor XI inhibitor', definition: 'Novel anticoagulant class targeting Factor XI to potentially provide safer antithrombotic therapy with preserved hemostasis' },
        { term: 'YEARS algorithm', definition: 'Clinical decision rule using three criteria and adjusted D-dimer thresholds to safely exclude PE with fewer CTPAs' },
        { term: 'May-Thurner syndrome', definition: 'Iliac vein compression by the overlying iliac artery causing left leg DVT; treated with stenting' },
        { term: 'HERDOO2', definition: 'Validated clinical prediction rule for women with unprovoked VTE to identify low recurrence risk and safely discontinue anticoagulation' },
        { term: 'thrombus organization', definition: 'Process of inflammatory cell infiltration, neovascularization, and fibrosis that transforms acute thrombus to chronic residual material' },
        { term: 'mechanical thrombectomy', definition: 'Catheter-based devices for physical removal or aspiration of venous thrombus' },
      ],
      clinicalNotes: `Key clinical pearls for advanced DVT management:

1. **Duration decisions are individualized**: Use risk prediction models (Vienna, DASH, HERDOO2) combined with patient preferences and bleeding risk to guide extended anticoagulation.

2. **D-dimer is multifunctional**: Age-adjusted for diagnosis, monitors therapy success, and predicts recurrence when checked after stopping anticoagulation.

3. **CDT has a limited role**: Based on ATTRACT, reserve for iliofemoral DVT with severe symptoms, <14 days old, low bleeding risk. Not routine.

4. **Compression stockings paradigm shifted**: SOX trial showed no PTS prevention benefit. Use for symptom relief, not routine prevention.

5. **Cancer VTE nuanced**: Apixaban (CARAVAGGIO) appears safe for most; LMWH still preferred for GI/GU cancers or significant drug interactions.

6. **Factor XI inhibitors are coming**: May offer safer anticoagulation by separating thrombosis from hemostasis. Watch for Phase 3 results.

7. **Thrombophilia testing is limited**: Rarely changes management. Reserve for young patients with unprovoked events when result might influence lifelong therapy decision.

8. **Quality metrics matter**: VTE prevention bundles, discharge reconciliation, and anticoagulation clinics improve outcomes.`,
    },
  },

  media: [
    {
      id: 'virchow-triad',
      type: 'diagram',
      filename: 'virchow-triad.svg',
      title: 'Virchow Triad',
      description: 'Three factors predisposing to thrombosis: stasis, endothelial injury, hypercoagulability',
    },
    {
      id: 'dvt-diagnostic-algorithm',
      type: 'diagram',
      filename: 'dvt-diagnostic-algorithm.svg',
      title: 'DVT Diagnostic Algorithm',
      description: 'Wells score-based approach to DVT diagnosis using D-dimer and ultrasound',
    },
    {
      id: 'dvt-treatment-algorithm',
      type: 'diagram',
      filename: 'dvt-treatment-algorithm.svg',
      title: 'DVT Treatment Algorithm',
      description: 'Anticoagulation selection and duration based on provoked vs unprovoked DVT',
    },
  ],

  citations: [
    {
      id: 'ash-vte-2020',
      type: 'article',
      title: 'American Society of Hematology 2020 guidelines for management of venous thromboembolism',
      authors: ['Ortel TL', 'Neumann I', 'Ageno W', 'et al.'],
      source: 'Blood Advances',
      url: 'https://doi.org/10.1182/bloodadvances.2020001830',
    },
    {
      id: 'attract-trial',
      type: 'article',
      title: 'Pharmacomechanical Catheter-Directed Thrombolysis for Deep-Vein Thrombosis',
      authors: ['Vedantham S', 'Goldhaber SZ', 'Julian JA', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1615066',
    },
    {
      id: 'sox-trial',
      type: 'article',
      title: 'Compression Stockings to Prevent Post-Thrombotic Syndrome',
      authors: ['Kahn SR', 'Shapiro S', 'Wells PS', 'et al.'],
      source: 'Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
    { targetId: 'condition-peripheral-artery-disease', targetType: 'condition', relationship: 'related', label: 'Peripheral Artery Disease' },
    { targetId: 'structure-veins', targetType: 'structure', relationship: 'related', label: 'Venous System' },
  ],

  tags: {
    systems: ['cardiovascular', 'hematologic'],
    topics: ['hematology', 'vascular medicine', 'anticoagulation', 'thrombosis'],
    keywords: ['DVT', 'blood clot', 'anticoagulation', 'VTE', 'thrombosis', 'pulmonary embolism'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default deepVeinThrombosis;
