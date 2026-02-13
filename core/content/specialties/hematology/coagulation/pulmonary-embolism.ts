/**
 * Pulmonary Embolism - Comprehensive Educational Content
 *
 * Obstruction of the pulmonary arterial vasculature by thrombus,
 * most commonly arising from deep vein thrombosis.
 */

import { EducationalContent } from '../../../types';

export const pulmonaryEmbolism: EducationalContent = {
  id: 'condition-pulmonary-embolism',
  type: 'condition',
  name: 'Pulmonary Embolism',
  nameEs: 'Embolia Pulmonar',
  alternateNames: ['PE', 'Pulmonary thromboembolism', 'PTE'],
  hpoId: 'HP:0002204',

  levels: {
    1: {
      level: 1,
      summary: 'A pulmonary embolism is a blood clot that travels to the lungs, blocking blood flow and making it hard to breathe. It can be life-threatening if not treated quickly.',
      explanation: `A pulmonary embolism (PE) happens when a blood clot gets stuck in the blood vessels of your lungs.

**How it happens:**
1. A blood clot usually forms in a vein in your leg (called a deep vein thrombosis or DVT)
2. Part of the clot breaks loose and travels through the bloodstream
3. The clot reaches the lungs and gets stuck, blocking blood flow

**Warning signs:**
- Sudden shortness of breath
- Sharp chest pain, especially when breathing in
- Rapid heartbeat
- Coughing (sometimes with blood)
- Feeling lightheaded or fainting

**Who is at risk:**
- People who sit still for long periods (long flights, bed rest after surgery)
- After major surgery, especially hip or knee replacement
- Cancer patients
- Pregnancy
- Taking birth control pills or hormone therapy
- History of blood clots

**Treatment:**
Blood-thinning medicines prevent the clot from growing and allow the body to dissolve it. In severe cases, clot-busting drugs or surgery may be needed.

**Prevention:**
Moving around after surgery, wearing compression stockings, and taking blood-thinning medicine when at risk can help prevent PE.`,
      keyTerms: [
        { term: 'pulmonary embolism', definition: 'A blood clot that blocks a blood vessel in the lungs' },
        { term: 'DVT', definition: 'Deep vein thrombosis; a blood clot in a deep vein, usually in the leg' },
        { term: 'blood thinners', definition: 'Medicines that prevent blood clots from forming or growing' },
      ],
      analogies: [
        'A PE is like a log jam in a river - a clot from downstream (the legs) floats up and blocks the flow in the lungs.',
      ],
      patientCounselingPoints: [
        'Seek emergency help immediately for sudden shortness of breath or chest pain',
        'Move your legs regularly during long trips or bed rest',
        'Take blood thinners exactly as prescribed if given for prevention',
      ],
    },
    2: {
      level: 2,
      summary: 'PE results from venous thromboembolism (VTE) occluding pulmonary arteries, classified by hemodynamic impact as massive (with shock), submassive (RV strain without shock), or low-risk, with CT pulmonary angiography as the primary diagnostic modality.',
      explanation: `## Pathophysiology

Most PEs originate from DVT in the proximal leg veins (iliac, femoral, popliteal). The thrombus embolizes to the pulmonary vasculature, causing:
- Increased pulmonary vascular resistance
- Right ventricular strain and dilation
- Ventilation-perfusion (V/Q) mismatch
- Hypoxemia

## Risk Factors (Virchow's Triad)

| Category | Examples |
|----------|---------|
| Stasis | Immobilization, long travel, paralysis |
| Endothelial injury | Surgery, trauma, catheters |
| Hypercoagulability | Cancer, pregnancy, OCP, Factor V Leiden |

## Classification by Severity

| Category | Features | Mortality |
|----------|----------|-----------|
| Massive | Hypotension (SBP <90) or cardiac arrest | 25-65% |
| Submassive | RV dysfunction (echo/CT/biomarkers) but stable BP | 3-15% |
| Low-risk | Normal hemodynamics, no RV strain | <1% |

## Diagnosis

**Clinical prediction:** Wells score or Geneva score
- Wells score >=4: PE likely → CT pulmonary angiography (CTPA)
- Wells score <4: PE unlikely → D-dimer; if negative, PE essentially excluded

**Key tests:**
- CTPA: Gold standard imaging (sensitivity ~95%)
- D-dimer: High sensitivity, low specificity; useful to rule out PE
- Echocardiogram: RV dilation, McConnell sign (RV free wall akinesis with apical sparing)
- Troponin/BNP: Markers of RV strain (prognostic, not diagnostic)

## Treatment

**Anticoagulation (all PE):**
- DOACs (rivaroxaban, apixaban) first-line for most patients
- LMWH + warfarin bridge (alternative)
- Duration: 3 months minimum; consider indefinite if unprovoked

**Systemic thrombolysis (massive PE):**
- Alteplase 100 mg IV over 2 hours
- Reduces mortality in massive PE with hemodynamic instability

**Submassive PE management:**
- Anticoagulation + close monitoring
- Consider catheter-directed therapy or systemic thrombolysis if deteriorating`,
      keyTerms: [
        { term: 'Wells score', definition: 'Clinical prediction rule estimating probability of PE based on symptoms, signs, and risk factors' },
        { term: 'CTPA', definition: 'CT pulmonary angiography; contrast-enhanced CT scan that is the gold standard for PE diagnosis' },
        { term: 'massive PE', definition: 'PE causing hemodynamic instability (systolic BP <90 mmHg)' },
        { term: 'McConnell sign', definition: 'RV free wall akinesis with preserved apical contractility on echo; suggestive of acute PE' },
        { term: 'D-dimer', definition: 'Fibrin degradation product; highly sensitive for VTE (negative result helps exclude PE)' },
      ],
    },
    3: {
      level: 3,
      summary: 'PE management requires risk stratification using hemodynamics, RV imaging, and biomarkers to guide escalation from anticoagulation alone to thrombolysis or catheter-directed therapy, with special considerations for subsegmental PE, PE in pregnancy, and chronic thromboembolic disease.',
      explanation: `## Risk Stratification

**Pulmonary Embolism Severity Index (PESI/sPESI):**
- Validated mortality prediction using demographics, vitals, comorbidities
- sPESI = 0: Low risk (<1% 30-day mortality); consider outpatient treatment
- sPESI >= 1: Not low risk; requires further stratification

**RV assessment:**
- CT: RV/LV ratio >0.9 indicates RV dilation
- Echo: RV dilation, hypokinesis, TAPSE <16 mm
- Biomarkers: Troponin elevation, BNP >100 pg/mL

**Risk categories (ESC 2019):**
| Risk | Hemodynamics | PESI/sPESI | RV dysfunction | Troponin |
|------|-------------|------------|----------------|----------|
| High (massive) | Unstable | - | + | + |
| Intermediate-high | Stable | III-V / >=1 | + | + |
| Intermediate-low | Stable | III-V / >=1 | One of the two | |
| Low | Stable | I-II / 0 | - | - |

## Treatment Escalation

**Low risk:** Anticoagulation, consider outpatient (HESTIA criteria)
**Intermediate-low:** Anticoagulation, inpatient monitoring
**Intermediate-high:** Anticoagulation, ICU monitoring, rescue reperfusion if decompensation
**High/massive:** Systemic thrombolysis, catheter-directed therapy, or surgical embolectomy

**Catheter-directed therapy options:**
- CDT with local lytic (alteplase): Lower bleeding risk than systemic
- Ultrasound-assisted (EKOS): May enhance fibrinolysis
- Aspiration thrombectomy (FlowTriever, Indigo): No lytic needed
- Hybrid approaches in development

## Special Populations

**PE in pregnancy:**
- CTPA or V/Q scan acceptable (both low fetal radiation)
- LMWH preferred (does not cross placenta); DOACs contraindicated
- Thrombolysis reserved for massive PE

**Cancer-associated PE:**
- LMWH or DOACs (edoxaban, rivaroxaban) for treatment
- Caution with DOACs in GI/GU malignancies (higher mucosal bleeding)
- Duration: While cancer active or on treatment

**Subsegmental PE:**
- Isolated subsegmental defects on CTPA: Clinical significance debated
- If no DVT on compression ultrasound and low VTE risk: May observe without anticoagulation

## Chronic Thromboembolic Pulmonary Hypertension (CTEPH)
- Develops in ~3-4% of PE survivors
- Organized thrombus in pulmonary arteries → fixed PH
- Diagnosis: V/Q scan (screening), RHC + pulmonary angiography
- Treatment: Pulmonary thromboendarterectomy (PTE, curative), balloon pulmonary angioplasty, riociguat`,
      keyTerms: [
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; clinical score predicting 30-day mortality' },
        { term: 'catheter-directed therapy', definition: 'Minimally invasive approaches to PE including local thrombolysis and mechanical thrombectomy' },
        { term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension; organized thrombus causing fixed pulmonary hypertension after PE' },
        { term: 'HESTIA criteria', definition: 'Checklist for identifying low-risk PE patients safe for outpatient management' },
        { term: 'riociguat', definition: 'Soluble guanylate cyclase stimulator approved for inoperable CTEPH' },
      ],
      clinicalNotes: 'Outpatient PE management is safe for low-risk patients (sPESI 0, HESTIA negative). In intermediate-high risk, have a plan for rescue reperfusion if hemodynamic deterioration occurs. All PE patients should be screened for CTEPH at 3-6 months if persistent dyspnea.',
    },
    4: {
      level: 4,
      summary: 'Advanced PE management includes multidisciplinary pulmonary embolism response teams (PERT), evolving catheter-based interventions, extended thromboprophylaxis decisions, and integration of AI-based diagnostic tools with clinical decision-making.',
      explanation: `## Pulmonary Embolism Response Teams (PERT)

**Multidisciplinary approach:**
- Rapid activation for massive and intermediate-high-risk PE
- Team: interventional radiology/cardiology, CT surgery, pulmonology, hematology, critical care
- Real-time consensus on reperfusion strategy

**Decision matrix:**
- Hemodynamically unstable: Systemic thrombolysis first-line; surgical embolectomy or catheter-directed if contraindicated
- Intermediate-high risk deteriorating: Catheter-directed therapy increasingly preferred (lower bleeding vs. systemic lytic)
- RV failure refractory to treatment: VA-ECMO as bridge to intervention

## Catheter-Based Therapies: Evidence

| Device | Mechanism | Key Trial |
|--------|-----------|-----------|
| EKOS/Acoustic pulse | Ultrasound-assisted CDT | ULTIMA, SEATTLE II |
| FlowTriever | Large-bore aspiration | FLARE trial |
| Indigo | Continuous aspiration | EXTRACT-PE |
| AngioVac | Suction thrombectomy | Registry data |

**Half-dose thrombolysis:**
- MOPETT trial: tPA 50 mg vs. 100 mg showed similar efficacy with less bleeding
- Increasingly used in intermediate-high risk PE
- Not validated in massive PE

## Extended Thromboprophylaxis Decisions

**Duration of anticoagulation:**
| Scenario | Duration |
|----------|----------|
| First provoked PE (transient risk factor) | 3 months |
| First unprovoked PE | Indefinite (reassess annually) |
| Recurrent VTE | Indefinite |
| Cancer-associated | While cancer active |

**Risk-benefit tools:**
- HERDOO2 rule: Identifies low-risk women who can safely stop after first unprovoked VTE
- Vienna prediction model: VTE recurrence risk based on D-dimer after stopping anticoagulation
- Residual DVT on ultrasound: Controversial prognostic value

## PE in Specific Contexts

**Post-operative PE:**
- Highest risk: hip/knee arthroplasty, major cancer surgery
- Extended prophylaxis (35 days post-op for major orthopedic surgery)
- Rivaroxaban 10 mg or LMWH

**PE with concurrent bleeding:**
- IVC filter as bridge if anticoagulation absolutely contraindicated
- Retrieve filter when anticoagulation can resume
- Retrievable filter complications: migration, tilting, fracture, IVC penetration

**Right heart thrombus:**
- Thrombus-in-transit: Mobile clot in RA/RV on echo
- High mortality without treatment
- Systemic thrombolysis, surgical embolectomy, or catheter-based intervention`,
      keyTerms: [
        { term: 'PERT', definition: 'Pulmonary Embolism Response Team; multidisciplinary rapid-response model for high-risk PE' },
        { term: 'FlowTriever', definition: 'Large-bore mechanical aspiration thrombectomy system for PE; no thrombolytic agent required' },
        { term: 'HERDOO2', definition: 'Clinical rule identifying women at low risk for VTE recurrence who can safely stop anticoagulation' },
        { term: 'thrombus-in-transit', definition: 'Mobile clot visualized in the right heart chambers; associated with high mortality if untreated' },
      ],
      clinicalNotes: 'PERT models improve outcomes through rapid multidisciplinary decision-making. Catheter-directed therapy is increasingly used for intermediate-high risk PE as an alternative to systemic lysis. IVC filters should be retrievable and removed as soon as anticoagulation is feasible. Half-dose systemic lysis is gaining acceptance for submassive PE.',
    },
    5: {
      level: 5,
      summary: 'Frontiers in PE include AI-driven diagnostic algorithms, pharmacomechanical device optimization, biomarker-guided treatment duration, and global VTE prevention initiatives targeting post-discharge thromboprophylaxis and health disparities.',
      explanation: `## AI and Imaging Advances

**AI-assisted PE detection:**
- Deep learning algorithms on CTPA: FDA-cleared tools (Aidoc, Viz.ai) for triage notification
- Sensitivity 90-95% for segmental and larger PE; subsegmental detection improving
- Automated RV/LV ratio measurement for risk stratification
- Integration into radiology workflow reducing time-to-diagnosis

**Dual-energy CT:**
- Perfusion mapping without nuclear medicine
- Identifies perfusion defects even without visible clot (chronic disease)
- Quantification of clot burden correlates with outcomes

**4D-flow MRI:**
- Non-contrast assessment of pulmonary hemodynamics
- Research tool for understanding RV-PA coupling in PE recovery

## Evolving Therapeutic Strategies

**Intermediate-risk PE trials:**
- HI-PEITHO: Comparing catheter-directed therapy vs. anticoagulation alone in intermediate-high risk PE
- PEERLESS: FlowTriever vs. catheter-directed thrombolysis head-to-head
- PE-SURF: Low-dose tPA for submassive PE

**Novel anticoagulants:**
- Factor XIa inhibitors (abelacimab, milvexian): VTE treatment with potentially lower bleeding
- Phase III trials for VTE treatment ongoing
- Could enable effective anticoagulation in patients with high bleeding risk

**Post-PE syndrome:**
- ~50% of PE survivors have persistent dyspnea or exercise limitation at 6 months
- Cardiopulmonary exercise testing for objective assessment
- Structured rehabilitation programs showing benefit
- Distinct from CTEPH; may represent persistent RV dysfunction or deconditioning

## Global VTE Prevention

**Hospital-acquired VTE:**
- VTE remains a leading cause of preventable hospital death
- Electronic alerts and mandatory risk assessment improve prophylaxis rates
- Extended post-discharge prophylaxis (rivaroxaban in MARINER, betrixaban in APEX) for medically ill

**Health disparities:**
- Black patients have 30-60% higher VTE incidence than White patients
- Lower access to advanced PE therapies (catheter-directed, ECMO)
- Socioeconomic factors affect anticoagulation adherence and follow-up

## CTEPH Management Advances

- Balloon pulmonary angioplasty: Alternative to surgery in inoperable CTEPH
- Combination medical therapy: Riociguat + PTE for residual PH post-surgery
- Pulmonary thromboendarterectomy remains definitive cure when operable
- Screening algorithms: V/Q scan at 3-6 months for persistent symptoms after PE`,
      keyTerms: [
        { term: 'factor XIa inhibitors', definition: 'Next-generation anticoagulants targeting intrinsic pathway that may reduce bleeding risk compared to DOACs' },
        { term: 'post-PE syndrome', definition: 'Persistent exercise intolerance and dyspnea after PE, even without CTEPH' },
        { term: 'balloon pulmonary angioplasty', definition: 'Catheter-based intervention for inoperable CTEPH using serial balloon dilations' },
        { term: 'Viz.ai', definition: 'AI platform providing automated PE detection and triage notification on CTPA imaging' },
      ],
      clinicalNotes: `Key frontiers:

1. AI-assisted PE detection is reducing time-to-diagnosis; integration into clinical workflow is the current challenge
2. Factor XIa inhibitors may allow effective anticoagulation with dramatically reduced bleeding risk
3. Post-PE syndrome is increasingly recognized; structured rehabilitation shows promise
4. Catheter-directed therapy trials (HI-PEITHO, PEERLESS) will define optimal management of intermediate-risk PE
5. CTEPH screening should be standard follow-up for all PE patients with persistent symptoms`,
    },
  },

  media: [
    { id: 'pe-risk-stratification', type: 'diagram', filename: 'pe-risk-stratification.svg', title: 'PE Risk Stratification Algorithm', description: 'ESC 2019 risk classification and treatment escalation pathway' },
  ],
  citations: [
    { id: 'esc-pe-guidelines', type: 'article', title: '2019 ESC Guidelines for Diagnosis and Management of Acute Pulmonary Embolism', authors: ['Konstantinides SV', 'et al.'], source: 'European Heart Journal' },
    { id: 'kearon-vte-chest', type: 'article', title: 'Antithrombotic Therapy for VTE Disease: CHEST Guideline', authors: ['Kearon C', 'et al.'], source: 'CHEST' },
  ],
  crossReferences: [
    { targetId: 'condition-deep-vein-thrombosis', targetType: 'condition', relationship: 'related', label: 'Deep Vein Thrombosis' },
    { targetId: 'topic-anticoagulation-therapy', targetType: 'topic', relationship: 'related', label: 'Anticoagulation Therapy' },
    { targetId: 'condition-disseminated-intravascular-coagulation', targetType: 'condition', relationship: 'see-also', label: 'DIC' },
    { targetId: 'condition-thrombophilia', targetType: 'condition', relationship: 'related', label: 'Thrombophilia' },
  ],
  tags: {
    systems: ['hematology', 'pulmonary', 'cardiovascular'],
    topics: ['pathology', 'critical care', 'therapeutics', 'radiology'],
    keywords: ['PE', 'VTE', 'thromboembolism', 'anticoagulation', 'thrombolysis', 'CTPA', 'Wells score'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'emergency medicine'] },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryEmbolism;
