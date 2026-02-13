/**
 * Venous Thromboembolism (DVT and PE) - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const dvtPE: EducationalContent = {
  id: 'condition-dvt-pe',
  type: 'condition',
  name: 'Venous Thromboembolism',
  nameEs: 'Tromboembolismo Venoso',
  alternateNames: ['VTE', 'Deep Vein Thrombosis', 'Pulmonary Embolism', 'Blood Clot'],
  hpoId: 'HP:0002625',

  levels: {
    1: {
      level: 1,
      summary: 'Venous thromboembolism (VTE) includes deep vein thrombosis (DVT) - a blood clot in the deep veins, usually in the legs - and pulmonary embolism (PE) - when the clot travels to the lungs.',
      explanation: `Venous thromboembolism (VTE) is a condition that includes two related problems:

**Deep Vein Thrombosis (DVT):**
- Blood clot forms in a deep vein, usually in the leg
- Can cause pain, swelling, and redness
- May have no symptoms at all

**Pulmonary Embolism (PE):**
- Happens when a DVT clot breaks loose
- Travels through the bloodstream to the lungs
- Can be life-threatening
- Causes sudden shortness of breath and chest pain

**Risk Factors:**
- Long periods of not moving (long flights, bed rest)
- Recent surgery
- Cancer
- Pregnancy
- Birth control pills
- Family history of blood clots
- Smoking
- Obesity

**Warning Signs - DVT:**
- Swelling in one leg
- Pain or tenderness in the leg (often calf)
- Warmth and redness
- Leg feels heavy

**Warning Signs - PE:**
- Sudden shortness of breath
- Sharp chest pain (worse with breathing)
- Coughing (may cough up blood)
- Rapid heartbeat
- Feeling lightheaded or fainting

**Treatment:**
- Blood thinners (anticoagulants)
- Sometimes clot-dissolving medications
- Compression stockings
- In severe cases, procedures to remove the clot

**Prevention:**
- Move around during long trips
- Exercise regularly
- Maintain healthy weight
- Take blood thinners if prescribed
- Wear compression stockings if recommended`,
      keyTerms: [
        { term: 'DVT', definition: 'Deep vein thrombosis; blood clot in a deep vein, usually in the leg' },
        { term: 'PE', definition: 'Pulmonary embolism; blood clot that travels to and blocks an artery in the lungs' },
        { term: 'anticoagulant', definition: 'Blood thinner medication that prevents or treats blood clots' },
      ],
      analogies: ['VTE is like a traffic jam in your blood vessels - clots block flow and pieces can break off and travel to the lungs like boulders in a river.'],
      examples: ['Someone who develops sudden shortness of breath and chest pain a week after hip surgery may have a pulmonary embolism from a DVT.'],
    },
    2: {
      level: 2,
      summary: 'VTE encompasses DVT and PE, diagnosed using clinical probability scores (Wells), D-dimer, and imaging; treatment with anticoagulation (DOACs preferred) for minimum 3 months, with duration based on provoked vs unprovoked etiology.',
      explanation: `## Overview

**Deep Vein Thrombosis (DVT):**
- Clot in deep veins (leg most common)
- Can embolize to lungs → PE

**Pulmonary Embolism (PE):**
- Clot lodged in pulmonary arteries
- Spectrum: subclinical to massive/death

## Risk Factors (Virchow Triad)

1. **Venous Stasis:**
   - Immobility, bed rest, travel
   - Paralysis, heart failure

2. **Endothelial Injury:**
   - Surgery, trauma
   - IV catheters, prior DVT

3. **Hypercoagulability:**
   - Cancer, pregnancy
   - Estrogen therapy, inherited thrombophilia

## Clinical Presentation

**DVT Symptoms:**
- Unilateral leg swelling
- Calf pain or tenderness
- Warmth, erythema
- Prominent superficial veins

**PE Symptoms:**
- Dyspnea (most common)
- Pleuritic chest pain
- Cough, hemoptysis
- Tachycardia, hypoxia
- Hypotension (massive PE)

## Diagnosis

**Wells Score for DVT:**

| Criteria | Points |
|----------|--------|
| Active cancer | +1 |
| Paralysis/cast | +1 |
| Bedridden >3 days/major surgery | +1 |
| Localized tenderness | +1 |
| Entire leg swollen | +1 |
| Calf swelling >3 cm | +1 |
| Pitting edema | +1 |
| Collateral veins | +1 |
| Alternative diagnosis likely | -2 |

Interpretation:
- ≤0: Low (D-dimer first)
- 1-2: Moderate
- ≥3: High (ultrasound first)

**Wells Score for PE:**

| Criteria | Points |
|----------|--------|
| DVT symptoms | +3 |
| PE #1 diagnosis | +3 |
| HR >100 | +1.5 |
| Immobilization/surgery | +1.5 |
| Prior VTE | +1.5 |
| Hemoptysis | +1 |
| Cancer | +1 |

Interpretation:
- ≤4: PE unlikely (D-dimer)
- >4: PE likely (CTPA)

**Diagnostic Tests:**
- D-dimer: Rule-out if low probability
- Compression ultrasound: DVT diagnosis
- CTPA: PE diagnosis (gold standard)
- V/Q scan: If CT contraindicated

## Treatment

**Anticoagulation (All patients):**

| Agent | Dose | Notes |
|-------|------|-------|
| Apixaban | 10 mg BID × 7d, then 5 mg BID | Single drug |
| Rivaroxaban | 15 mg BID × 21d, then 20 mg daily | Single drug |
| Edoxaban | 60 mg daily | After 5d LMWH |
| Dabigatran | 150 mg BID | After 5d LMWH |
| LMWH | Weight-based | Renal adjustment |

**Duration:**
- Provoked: 3 months
- Unprovoked: ≥3 months, consider extended
- Recurrent: Long-term/indefinite
- Cancer: Until resolved or indefinite

**Thrombolysis:**
- Massive PE with hypotension
- Catheter-directed or systemic
- Significant bleeding risk

**IVC Filter:**
- Contraindication to anticoagulation
- Retrievable preferred`,
      keyTerms: [
        { term: 'Virchow triad', definition: 'Three factors causing thrombosis: stasis, endothelial injury, hypercoagulability' },
        { term: 'DOAC', definition: 'Direct oral anticoagulant; apixaban, rivaroxaban, edoxaban, dabigatran' },
        { term: 'CTPA', definition: 'CT pulmonary angiography; imaging test to diagnose PE' },
        { term: 'provoked VTE', definition: 'VTE with identifiable transient risk factor like surgery or immobilization' },
      ],
      clinicalNotes: 'Age-adjusted D-dimer (age × 10 ng/mL for patients >50) improves specificity without losing sensitivity. DOACs are preferred over warfarin for most patients. DOACs should not be used in antiphospholipid syndrome (triple positive) or severe renal impairment (CrCl <15).',
    },
    3: {
      level: 3,
      summary: 'VTE pathogenesis involves thrombus formation via Virchow triad, with diagnosis using pre-test probability scoring, D-dimer, and imaging; treatment includes DOACs, LMWH, or warfarin with duration based on risk factors, and advanced therapies for extensive disease.',
      explanation: `## Pathophysiology

**Thrombus Formation:**
1. Endothelial injury → tissue factor exposure
2. Activation of coagulation cascade
3. Thrombin generation
4. Fibrin formation
5. Platelet-fibrin clot propagation

**DVT Progression:**
- Starts in valve cusp (deep calf veins)
- Propagates proximally with flow
- Proximal DVT: Higher PE risk
- Distal DVT: Lower risk

**PE Consequences:**
- Mechanical obstruction
- Vasoconstriction (humoral)
- V/Q mismatch
- Increased pulmonary vascular resistance
- RV strain, potential failure

## Risk Stratification - PE

**PESI (Pulmonary Embolism Severity Index):**

| Parameter | Points |
|-----------|--------|
| Age | +age |
| Male | +10 |
| Cancer | +30 |
| Heart failure | +10 |
| Chronic lung disease | +10 |
| Pulse ≥110 | +20 |
| SBP <100 | +30 |
| RR <30 | +20 |
| Temperature <36°C | +20 |
| Altered mental status | +60 |
| O2 sat <90% | +20 |

- Class I-II: Low risk (mortality <2%)
- Class III-V: Higher risk

**sPESI (Simplified):**
- Age >80, cancer, cardiopulmonary disease
- HR ≥110, SBP <100, O2 sat <90%
- Score 0: Low risk (1% mortality)
- Score ≥1: Not low risk

**Hemodynamic Status:**
- Massive: Hypotensive (SBP <90 or drop ≥40)
- Submassive: Normotensive + RV dysfunction
- Low-risk: Normotensive, no RV dysfunction

## Advanced Diagnosis

**D-Dimer Utility:**
- High sensitivity, poor specificity
- Age-adjusted: Age × 10 µg/L if >50 years
- Negative in low probability → rules out
- Not useful in high pre-test probability

**Compression Ultrasound:**
- Non-compressibility diagnostic
- Proximal vs distal
- Whole-leg vs limited

**CTPA Findings:**
- Filling defect in pulmonary artery
- RV/LV diameter ratio >1 suggests strain
- Reflux into IVC suggests severe

**V/Q Scan:**
- Indicated if:
  - Renal failure (contrast risk)
  - Contrast allergy
  - Pregnancy
- High probability + clinical = PE diagnosis

## Anticoagulation Selection

**DOACs vs Warfarin:**

| Factor | DOAC | Warfarin |
|--------|------|----------|
| Efficacy | Similar or better | - |
| Bleeding | Lower | Higher |
| Monitoring | None | INR required |
| Reversal | Limited | Vitamin K, PCC |
| Renal | Dose adjustment | Not affected |
| APS | Inferior | Preferred |
| Cost | Higher | Lower |

**LMWH Indications:**
- Cancer-associated VTE (preferred)
- Pregnancy
- Severe renal impairment
- Initial therapy before DOAC

**DOAC Selection:**
- Rivaroxaban/apixaban: Single drug approach
- Edoxaban/dabigatran: Require parenteral lead-in
- Apixaban: Least renal clearance
- Rivaroxaban: Once daily after acute phase

## Extended Anticoagulation

**When to Consider Extended:**
- Unprovoked VTE
- Recurrent VTE
- Strong risk factors (thrombophilia)
- High-risk cancer

**Recurrence Risk Factors:**
- Male sex
- Obesity
- Post-thrombotic syndrome
- Elevated D-dimer after treatment
- Residual vein thrombosis

**Bleeding Risk Assessment:**
- HAS-BLED score
- Age, renal function
- Prior bleeding
- Concomitant medications
- Alcohol use

## Special Situations

**Cancer-Associated VTE:**
- LMWH traditional standard
- DOACs now options (edoxaban, rivaroxaban)
- Avoid DOACs with GI/GU malignancies
- Continue as long as cancer active

**Pregnancy:**
- LMWH (weight-adjusted) throughout
- Continue 6 weeks postpartum (min 3 months total)
- DOACs contraindicated
- Warfarin contraindated (teratogenic)

**Antiphospholipid Syndrome:**
- Warfarin preferred
- DOACs inferior (especially triple positive)
- Target INR 2.5-3.5 if arterial events

## Thrombolysis

**Systemic:**
- Massive PE with hypotension
- Alteplase 100 mg over 2 hours
- Reduces mortality but increases bleeding

**Catheter-Directed:**
- Lower dose, local delivery
- For submassive PE with deterioration
- Ultrasound-assisted (EKOS)
- Reduced bleeding vs systemic`,
      keyTerms: [
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; validated mortality risk score for PE' },
        { term: 'submassive PE', definition: 'PE with RV dysfunction but normal blood pressure' },
        { term: 'APS', definition: 'Antiphospholipid syndrome; autoimmune thrombophilia requiring warfarin over DOACs' },
        { term: 'post-thrombotic syndrome', definition: 'Chronic venous insufficiency after DVT causing pain, swelling, skin changes' },
      ],
      clinicalNotes: 'For cancer-associated VTE, LMWH has traditionally been preferred, but DOACs (edoxaban, rivaroxaban) are now acceptable alternatives except in GI/GU cancers where bleeding risk is higher. DOACs are inferior to warfarin in antiphospholipid syndrome, particularly triple-positive patients.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive VTE management integrates risk prediction models for recurrence and bleeding, individualized anticoagulation duration, thrombophilia testing indications, cancer-associated thrombosis management, catheter-directed interventions, and special populations.',
      explanation: `## Risk Prediction Models

**Recurrence Risk:**

**Vienna Prediction Model:**
- Sex, location, D-dimer
- Predicts recurrence after stopping

**DASH Score:**
- D-dimer (abnormal = +2)
- Age ≤50 (+1)
- Sex male (+1)
- Hormone use at VTE (-2)
- Score ≤1: Low recurrence (stop at 3 months)

**HERDOO2 (Women only):**
- Hyperpigmentation, edema, redness (+1)
- D-dimer ≥250 during AC (+1)
- Obesity BMI ≥30 (+1)
- Age ≥65 (+1)
- Score 0-1: Low risk

**Bleeding Risk:**

**VTE-BLEED:**
- Active bleeding (+2)
- Renal impairment (+1.5)
- Age ≥60 (+1.5)
- Cancer (+1)
- Anemia (+1)
- Prior bleeding (+1.5)

**HAS-BLED:**
- Hypertension, abnormal renal/liver
- Stroke, bleeding history
- Labile INR, elderly, drugs/alcohol

## Thrombophilia Testing

**When to Test:**
- Unprovoked VTE in age <50
- Recurrent unprovoked VTE
- Strong family history
- VTE at unusual site
- Consider extended anticoagulation

**When NOT to Test:**
- Provoked VTE (won't change management)
- On anticoagulation (inaccurate)
- Elderly patients
- Acute VTE (protein C/S affected)

**Testing Panel:**
- Factor V Leiden
- Prothrombin G20210A
- Antithrombin activity
- Protein C activity
- Protein S activity (free)
- Antiphospholipid antibodies

**Influence on Management:**
- May favor extended anticoagulation
- Strong (AT deficiency, homozygous FVL): Extended
- Weak (heterozygous FVL): May not change

## Cancer-Associated Thrombosis

**Risk Factors:**
- Pancreatic, brain, gastric cancer
- Metastatic disease
- Chemotherapy
- Hospitalization
- Central venous catheters

**Treatment Evolution:**

| Trial | Comparison | Finding |
|-------|------------|---------|
| CLOT | Dalteparin vs Warfarin | LMWH superior |
| SELECT-D | Rivaroxaban vs Dalteparin | Rivaroxaban non-inferior |
| Hokusai-VTE Cancer | Edoxaban vs Dalteparin | Edoxaban non-inferior |
| CARAVAGGIO | Apixaban vs Dalteparin | Apixaban non-inferior, less bleeding |

**Current Approach:**
- DOACs acceptable for most
- LMWH preferred for GI/GU cancers
- Individualize based on:
  - Drug interactions
  - GI absorption
  - Bleeding risk
  - Patient preference

## Catheter-Directed Interventions

**Indications:**
- Massive iliofemoral DVT
- Submassive PE with deterioration
- High bleeding risk precluding systemic lytics
- Low risk of complications

**Evidence:**

| Trial | Population | Finding |
|-------|------------|---------|
| ATTRACT | DVT | No difference in PTS |
| CAVAL | DVT | No difference in PTS |
| ULTIMA | PE | Improved RV/LV ratio |
| SEATTLE II | PE | Low bleeding, improved RV |

**Current Recommendations:**
- Not routine for DVT (ATTRACT negative)
- Consider for iliofemoral DVT
- Consider for submassive PE with deterioration
- Individualize based on expertise

## IVC Filters

**Indications:**
- Absolute contraindication to anticoagulation
- VTE despite therapeutic anticoagulation
- Poor cardiopulmonary reserve
- Massive PE with residual DVT
- Pre-PE thrombectomy

**Retrieval:**
- Plan retrieval when anticoagulation can resume
- Retrieval rates often low (20-30%)
- Complications: Filter migration, IVC thrombosis

## Post-Thrombotic Syndrome

**Prevention:**
- Compression stockings: SOX trial showed no benefit for prevention
- Not routinely recommended
- May use for symptom relief

**Risk Factors:**
- Proximal DVT
- Recurrent ipsilateral DVT
- Obesity
- Inadequate initial anticoagulation

**Management:**
- Compression therapy
- Leg elevation
- Exercise
- Venous stenting for obstruction

## Special Populations

**Pregnancy:**
- LMWH throughout
- Weight-adjusted dosing
- Continue 6 weeks postpartum
- Switch from warfarin before conception

**Obesity:**
- Weight-based LMWH (may underdose with fixed)
- DOACs: Limited data >120 kg
- Rivaroxaban PK acceptable to 160 kg

**Renal Impairment:**

| CrCl | DOAC Options |
|------|--------------|
| 30-50 | All DOACs (adjust edoxaban, dabigatran) |
| 15-30 | Apixaban, rivaroxaban with caution |
| <15 | Avoid all DOACs; use warfarin or LMWH |`,
      keyTerms: [
        { term: 'Vienna Prediction Model', definition: 'Clinical prediction model for VTE recurrence using sex, location, and D-dimer' },
        { term: 'HERDOO2', definition: 'Clinical rule for women with unprovoked VTE to identify low recurrence risk' },
        { term: 'post-thrombotic syndrome', definition: 'Chronic venous insufficiency after DVT causing pain, swelling, skin changes, ulcers' },
      ],
      clinicalNotes: 'Thrombophilia testing rarely changes acute management. Reserve for scenarios where results would influence duration of anticoagulation (e.g., young patient with unprovoked VTE considering lifelong therapy). The SOX trial changed practice—routine compression stockings are not recommended to prevent PTS. CARAVAGGIO showed apixaban is a reasonable alternative to LMWH for cancer VTE without the excess GI bleeding seen with other DOACs.',
    },
    5: {
      level: 5,
      summary: 'Contemporary VTE care integrates precision diagnostics with age-adjusted and YEARS algorithm D-dimer strategies, novel anticoagulants targeting factor XI, individualized duration using recurrence prediction models, catheter-based interventions for select patients, and emerging approaches for post-PE syndrome.',
      explanation: `## Precision Diagnostics

**YEARS Algorithm:**
- Three clinical criteria: DVT signs, hemoptysis, PE most likely
- 0 criteria: D-dimer <1000 rules out PE
- ≥1 criteria: D-dimer <500 rules out PE
- Reduces CTPA by ~15%

**PEGeD Study:**
- Age-adjusted D-dimer with Wells score
- Safely excludes PE with fewer CTPAs

**D-Dimer for Duration:**
- PROLONG studies: Elevated after stopping predicts recurrence
- DULCIS: Serial D-dimer guides resumption
- Practical for extended therapy decisions

**Residual Vein Thrombosis:**
- Persistent thrombus on ultrasound
- Higher recurrence risk
- Controversial independent predictor

## Novel Anticoagulants

**Factor XI Inhibitors:**

| Agent | Status | Potential Advantage |
|-------|--------|-------------------|
| Abelacimab | Phase 3 | Monthly subcutaneous |
| Asundexian | Phase 3 | Daily oral |
| Milvexian | Phase 3 | Twice daily oral |

**Rationale:**
- Factor XI involved in thrombosis
- Less important for hemostasis
- Potential: Thrombosis protection without bleeding

**Clinical Implications:**
- May enable long-term VTE prevention
- Safer for perioperative use
- Cancer-associated thrombosis

**Factor XII Inhibitors:**
- Even more upstream
- Earlier development
- May reduce catheter thrombosis

## Risk Stratification Evolution

**PERT (Pulmonary Embolism Response Team):**
- Multidisciplinary rapid assessment
- Improves complex PE management
- Standardizes care
- May improve outcomes

**Biomarker Refinement:**
- High-sensitivity troponin
- NT-proBNP trends
- Lactate for tissue hypoperfusion
- Combined biomarker strategies

**Imaging Advances:**
- Dual-energy CT for perfusion
- CT strain analysis
- 4D flow MRI
- Point-of-care ultrasound

## Individualized Duration

**Prediction Model Integration:**

| Model | Inputs | Best For |
|-------|--------|----------|
| Vienna | Sex, location, D-dimer | Recurrence probability |
| DASH | D-dimer, age, sex, hormones | Stop vs continue |
| HERDOO2 | Clinical signs, D-dimer | Women with unprovoked VTE |
| VTE-BLEED | Multiple bleeding risk factors | Extended safety |

**Clinical Approach:**
- Calculate recurrence and bleeding risk
- Patient preferences
- Periodic reassessment
- Shared decision-making

## Interventional Advances

**Mechanical Thrombectomy:**

| Device | Status | Indication |
|--------|--------|------------|
| FlowTriever | FDA approved | PE |
| Indigo | FDA approved | DVT/PE |
| ClotTriever | FDA approved | DVT |
| AngioVac | Limited use | DVT |

**Catheter-Directed Therapy Evolution:**
- Lower dose thrombolytics (OPTALYSE PE)
- Ultrasound-assisted lysis
- Mechanical aspiration without lytics
- Combination approaches

**PEITHO Trial Implications:**
- Systemic thrombolysis in intermediate-risk PE
- Reduced decompensation but increased bleeding
- Catheter-directed alternative

## Post-PE Syndrome

**Clinical Recognition:**
- Persistent dyspnea (>50% at 6 months)
- Exercise intolerance
- Reduced quality of life
- Not explained by CTEPH

**Pathophysiology:**
- RV dysfunction persistence
- Pulmonary vascular remodeling
- Deconditioning
- Psychological factors

**Management:**
- Cardiopulmonary exercise testing
- Cardiac rehabilitation
- Psychological support
- Consider CTEPH evaluation

## CTEPH Management

**Screening:**
- Echocardiography at 3 months if symptoms
- V/Q scan more sensitive than CTPA

**Treatment:**
- Pulmonary endarterectomy (curative)
- Balloon pulmonary angioplasty
- Riociguat (medical therapy)
- Combination approaches

## Cancer VTE Precision

**Risk-Adapted Prophylaxis:**
- Khorana score for high-risk ambulatory cancer
- DOACs for primary prevention (selected)
- Risk/benefit individualization

**Treatment Selection:**
- Tumor type considerations
- Drug interactions
- GI absorption
- Bleeding risk profile

## Quality and Outcomes

**Performance Measures:**
- VTE prophylaxis appropriateness
- Time to therapeutic anticoagulation
- Appropriateness of diagnostic testing
- Duration based on risk assessment
- Patient education

**Readmission Prevention:**
- Transitions of care
- Anticoagulation clinic follow-up
- Patient education
- Medication reconciliation`,
      keyTerms: [
        { term: 'YEARS algorithm', definition: 'Diagnostic strategy using three clinical criteria and adjusted D-dimer to reduce CTPA utilization' },
        { term: 'Factor XI inhibitor', definition: 'Novel anticoagulant targeting factor XI to potentially separate thrombosis prevention from bleeding risk' },
        { term: 'PERT', definition: 'Pulmonary Embolism Response Team; multidisciplinary group for rapid assessment of complex PE' },
        { term: 'post-PE syndrome', definition: 'Persistent dyspnea and exercise intolerance after PE not explained by CTEPH or other causes' },
        { term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension; organized thrombus causing progressive PH after PE' },
      ],
      clinicalNotes: 'Factor XI inhibitors represent a paradigm shift—potentially offering VTE prevention with minimal bleeding impact. Phase 3 trials will define their role. YEARS algorithm safely reduces CTPA utilization by 14%. The PEITHO trial showed systemic thrombolysis reduces hemodynamic decompensation but increases bleeding—catheter-directed approaches may offer better risk-benefit. Post-PE syndrome is increasingly recognized as a distinct entity affecting quality of life.',
    },
  },

  media: [],
  citations: [
    { id: 'ash-vte-2020', type: 'article', title: 'ASH 2020 Guidelines for Management of Venous Thromboembolism', source: 'Blood Advances' },
    { id: 'esc-pe-2019', type: 'article', title: '2019 ESC Guidelines for Acute Pulmonary Embolism', source: 'European Heart Journal' },
    { id: 'chest-guidelines', type: 'article', title: 'CHEST Guidelines for VTE Disease', source: 'Chest' },
  ],
  crossReferences: [
    { targetId: 'condition-pulmonary-embolism', targetType: 'condition', relationship: 'related', label: 'Pulmonary Embolism' },
    { targetId: 'condition-deep-vein-thrombosis', targetType: 'condition', relationship: 'related', label: 'Deep Vein Thrombosis' },
  ],
  tags: { systems: ['hematologic', 'cardiovascular'], topics: ['hematology', 'vascular medicine', 'thrombosis'], keywords: ['VTE', 'DVT', 'PE', 'anticoagulation', 'DOAC', 'pulmonary embolism'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dvtPE;
