/**
 * Pulmonary Embolism (PE) - Comprehensive Educational Content
 *
 * Covers pathophysiology, risk stratification, diagnosis, and treatment
 * of pulmonary embolism including massive, submassive, and low-risk PE.
 */

import { EducationalContent } from '../../types';

export const pulmonaryEmbolism: EducationalContent = {
  id: 'condition-pulmonary-embolism',
  type: 'condition',
  name: 'Pulmonary Embolism',
  alternateNames: ['PE', 'Lung Clot', 'Pulmonary Thromboembolism', 'Blood Clot in Lung'],
  hpoId: 'HP:0002204',

  levels: {
    1: {
      level: 1,
      summary: 'A pulmonary embolism is a blood clot that travels to your lungs and blocks blood flow, making it hard to breathe and potentially life-threatening.',
      explanation: `A pulmonary embolism (PE) happens when a blood clot gets stuck in the blood vessels of your lungs. Usually, this clot started somewhere else in your body - most often in the deep veins of your legs (a condition called deep vein thrombosis or DVT).

**How does a PE happen?**
1. A blood clot forms in a vein (usually in your leg)
2. Part or all of the clot breaks loose
3. The clot travels through your bloodstream
4. It gets stuck in a blood vessel in your lung
5. Blood cannot flow past the clot to pick up oxygen

**Warning signs of a PE:**
- Sudden shortness of breath (most common)
- Sharp chest pain, especially when breathing deeply
- Coughing, sometimes with blood
- Rapid heartbeat
- Feeling lightheaded or fainting
- Leg pain or swelling (from the original clot)

**Why is PE dangerous?**
- Your lungs cannot get blood to exchange oxygen
- Your heart has to work harder to pump blood
- A large clot can cause the heart to fail suddenly
- Without treatment, it can be fatal

**Who is at risk?**
- Recent surgery (especially hip or knee)
- Long bed rest or sitting (like long flights)
- Cancer
- Pregnancy
- Birth control pills or hormone therapy
- Previous blood clots
- Obesity
- Smoking

**How is PE treated?**
- Blood thinners (most important - prevent more clots)
- Clot-busting medicine (for severe cases)
- Procedures to remove the clot (rare, for life-threatening cases)

**Prevention:**
- Move around after surgery as soon as allowed
- Get up and walk during long trips
- Wear compression stockings if recommended
- Take blood thinners if prescribed`,
      keyTerms: [
        { term: 'pulmonary embolism', definition: 'A blood clot that blocks a blood vessel in your lungs' },
        { term: 'embolus', definition: 'A blood clot that travels through your bloodstream' },
        { term: 'blood thinner', definition: 'Medicine that prevents blood clots from forming or getting bigger' },
        { term: 'oxygen', definition: 'A gas in the air that your body needs to live; your lungs put it into your blood' },
      ],
      analogies: [
        'A PE is like a plug getting stuck in a pipe - blood cannot flow past it to deliver oxygen.',
        'When a clot travels from your leg to your lung, it is like a cork floating through pipes until it gets stuck in a narrow spot.',
        'Your lungs are like a gas station for your blood - if the road is blocked by a clot, the blood cannot get refueled with oxygen.',
      ],
      examples: [
        'A woman suddenly has trouble breathing and chest pain one week after knee surgery. Tests show she has blood clots in both lungs.',
        'A man feels lightheaded and his heart races after a long international flight. He also has a swollen, painful calf. He is found to have both DVT and PE.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary embolism occurs when a blood clot, typically from deep leg veins, lodges in pulmonary arteries, causing ventilation-perfusion mismatch and potentially right heart strain, requiring risk stratification to guide treatment from anticoagulation to thrombolysis.',
      explanation: `## Understanding Pulmonary Embolism

### What Happens in PE

1. **Clot Formation**: Usually in deep veins of legs/pelvis (DVT)
2. **Embolization**: Clot breaks loose and travels through venous system
3. **Right Heart Transit**: Clot passes through right atrium and ventricle
4. **Pulmonary Artery Occlusion**: Clot lodges in pulmonary arteries
5. **Consequences**:
   - Blocked blood cannot receive oxygen
   - Increased pulmonary vascular resistance
   - Right heart strain

### Risk Factors (Same as DVT - Virchow Triad)

**Stasis:**
- Immobility, bed rest
- Long travel
- Paralysis

**Vessel Injury:**
- Surgery
- Trauma
- Central venous catheters

**Hypercoagulability:**
- Cancer
- Pregnancy
- Oral contraceptives
- Inherited clotting disorders

### Clinical Presentation

**Symptoms:**
- Dyspnea (most common, 80%)
- Pleuritic chest pain (sharp, worse with breathing)
- Cough
- Hemoptysis (coughing blood)
- Syncope (fainting - suggests large PE)
- Leg symptoms (50% have DVT)

**Signs:**
- Tachypnea (rapid breathing)
- Tachycardia (rapid heart rate)
- Low oxygen saturation
- Hypotension (in massive PE)
- Elevated JVP
- Leg swelling/tenderness

### Diagnosis

**Clinical Probability: Wells Score for PE**

| Criteria | Points |
|----------|--------|
| Clinical signs of DVT | 3 |
| PE is most likely diagnosis | 3 |
| Heart rate >100 | 1.5 |
| Immobilization or surgery in past 4 weeks | 1.5 |
| Previous VTE | 1.5 |
| Hemoptysis | 1 |
| Active cancer | 1 |

- PE Unlikely: ≤4 points → D-dimer testing
- PE Likely: >4 points → CT pulmonary angiogram (CTPA)

**Diagnostic Tests:**

- **D-dimer**: Sensitive but not specific; rules out PE if negative in low-probability patients
- **CT Pulmonary Angiography (CTPA)**: Gold standard; shows clot in pulmonary arteries
- **V/Q Scan**: Alternative if contrast or CT contraindicated
- **Echocardiogram**: Shows right heart strain; useful for risk stratification
- **Lower extremity ultrasound**: Confirms DVT source

### Risk Stratification

| Category | Definition | Mortality | Treatment |
|----------|------------|-----------|-----------|
| High-Risk (Massive) | Hypotension, cardiac arrest | 30-50% | Thrombolysis, intervention |
| Intermediate-High (Submassive) | RV dysfunction + elevated troponin | 5-15% | Close monitoring ± thrombolysis |
| Intermediate-Low | RV dysfunction OR elevated troponin | 3-5% | Anticoagulation, monitoring |
| Low-Risk | No RV dysfunction, normal troponin | <1% | Outpatient anticoagulation |

### Treatment

**Anticoagulation (All patients without contraindication):**
- DOACs (rivaroxaban, apixaban) - first line
- LMWH + warfarin (alternative)
- Duration: Same as DVT (typically 3+ months)

**Thrombolysis:**
- Systemic tPA for high-risk PE
- Consider for intermediate-high risk PE with deterioration
- Significant bleeding risk

**Interventional Options:**
- Catheter-directed thrombolysis
- Mechanical thrombectomy
- Surgical embolectomy (rare)

**IVC Filter:**
- If anticoagulation absolutely contraindicated
- Retrievable preferred

### Prevention

- VTE prophylaxis in hospitalized patients
- Extended prophylaxis after high-risk surgery
- Early mobilization`,
      keyTerms: [
        { term: 'CTPA', definition: 'CT pulmonary angiography; the primary imaging test for diagnosing pulmonary embolism' },
        { term: 'right ventricular dysfunction', definition: 'Strain on the right side of the heart from blocked pulmonary arteries; indicates more severe PE' },
        { term: 'thrombolysis', definition: 'Using medication to dissolve blood clots quickly; reserved for severe PE' },
        { term: 'V/Q scan', definition: 'Ventilation-perfusion scan; nuclear medicine test comparing air and blood flow in lungs' },
        { term: 'submassive PE', definition: 'Pulmonary embolism with right heart strain but stable blood pressure' },
      ],
      analogies: [
        'Risk stratification in PE is like triage - we need to quickly identify who needs aggressive treatment and who can be treated safely at home.',
        'The right ventricle in massive PE is like a pump trying to push water through a clogged pipe - it strains and can fail.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary embolism causes acute pulmonary hypertension and right ventricular pressure overload, with clinical severity determined by hemodynamic status, RV dysfunction markers, and biomarkers; management ranges from outpatient anticoagulation for low-risk PE to systemic thrombolysis or catheter-directed intervention for high-risk hemodynamically unstable PE.',
      explanation: `## Pathophysiology

### Hemodynamic Effects

**Mechanical Obstruction:**
- Pulmonary vascular resistance increases acutely
- RV afterload increases
- RV dilation and dysfunction
- Interventricular septum shifts toward LV
- Reduced LV preload → decreased cardiac output

**Vasoconstriction:**
- Platelet-derived mediators (thromboxane A2, serotonin)
- Hypoxia-induced vasoconstriction
- Neural reflexes

**Thrombus Burden Threshold:**
- >30-50% obstruction typically causes RV dysfunction
- Pre-existing cardiopulmonary disease lowers this threshold

### Gas Exchange Abnormalities

- V/Q mismatch (perfusion defects with maintained ventilation)
- Increased dead space ventilation
- Hypoxemia (multifactorial)
- Hypocapnia from hyperventilation

### RV Failure Cascade

1. Acute pressure overload
2. RV dilation
3. Increased RV wall tension → RV ischemia
4. Decreased RV contractility
5. Tricuspid regurgitation (further volume overload)
6. Interventricular dependence → LV compression
7. Decreased cardiac output → shock

## Clinical Assessment

### PESI and sPESI Scores

**PESI (Pulmonary Embolism Severity Index):**
- Age, sex, cancer, heart failure, COPD
- Vital signs (HR, BP, RR, temperature, O2 sat)
- Mental status

**Simplified PESI (sPESI):**

| Criteria | Points |
|----------|--------|
| Age >80 | 1 |
| Cancer history | 1 |
| Chronic cardiopulmonary disease | 1 |
| Heart rate ≥110 | 1 |
| SBP <100 mmHg | 1 |
| O2 saturation <90% | 1 |

- Score 0: Low risk (1% 30-day mortality)
- Score ≥1: Not low risk (>10% complications)

### Biomarkers

**Troponin:**
- Elevated in 30-50% of PE patients
- Indicates RV myocardial strain/injury
- Prognostic marker

**BNP/NT-proBNP:**
- Elevated with RV wall stress
- Prognostic marker
- High negative predictive value if normal

### Imaging Markers of RV Dysfunction

**CT Findings:**
- RV/LV diameter ratio >1.0 (or >0.9 by some criteria)
- Septal bowing toward LV
- Contrast reflux into IVC/hepatic veins

**Echocardiography:**
- RV dilation
- RV hypokinesis with apical sparing (McConnell's sign)
- Tricuspid regurgitation
- Septal flattening ("D-shaped" LV)
- Elevated PASP
- TAPSE <16 mm (reduced RV longitudinal function)

## Diagnosis Algorithm

### Clinical Probability Assessment

**Three-Tier Model (Wells):**
- Low (<2): D-dimer first
- Moderate (2-6): D-dimer or CTPA
- High (>6): CTPA

**Two-Tier Model:**
- PE unlikely (≤4): D-dimer first
- PE likely (>4): CTPA

### PERC Rule (Pulmonary Embolism Rule-Out Criteria)

For very low-risk patients (gestalt <15%), if ALL criteria negative, PE excluded without D-dimer:
- Age <50
- HR <100
- O2 sat ≥95%
- No hemoptysis
- No estrogen use
- No prior DVT/PE
- No unilateral leg swelling
- No surgery/trauma requiring hospitalization in past 4 weeks

### D-Dimer Application

**Age-Adjusted D-Dimer:**
- Age >50: Threshold = Age × 10 µg/L
- Improves specificity
- Validated in PE diagnosis

**YEARS Algorithm:**
- Three criteria: Clinical DVT signs, hemoptysis, PE most likely diagnosis
- 0 criteria: D-dimer <1000 ng/mL rules out PE
- ≥1 criteria: D-dimer <500 ng/mL rules out PE
- Reduces CTPA by ~15%

## Treatment Strategies

### Anticoagulation

**Initial Therapy:**
- Apixaban: 10 mg BID × 7 days, then 5 mg BID
- Rivaroxaban: 15 mg BID × 21 days, then 20 mg daily
- Edoxaban: After 5+ days parenteral anticoagulation, 60 mg daily
- LMWH + warfarin: INR target 2-3

**Duration:**
- First provoked event: 3 months
- Unprovoked: Extended (with periodic reassessment)
- Recurrent: Long-term

### Reperfusion Therapy

**Systemic Thrombolysis:**
- Indication: High-risk PE (hypotensive, cardiac arrest)
- Alteplase: 100 mg over 2 hours (or 50 mg bolus in arrest)
- Absolute contraindications: Active bleeding, recent hemorrhagic stroke, intracranial lesion
- Reduces mortality in high-risk PE

**Catheter-Directed Therapy:**
- Lower dose thrombolytics
- Mechanical thrombectomy
- Consider for intermediate-high risk with deterioration
- ULTIMA, SEATTLE II, OPTALYSE trials

**Surgical Embolectomy:**
- High-risk PE with thrombolysis contraindication
- Failure of thrombolysis
- Right atrial/ventricular thrombus
- Requires cardiopulmonary bypass

### Outpatient Treatment

**Hestia Criteria for Outpatient Eligibility:**
- Hemodynamically stable
- No active bleeding or high bleeding risk
- No need for O2 or IV pain control
- Adequate renal function for DOACs
- No DVT requiring intervention
- Not pregnant with complications

**PERT (Pulmonary Embolism Response Team):**
- Multidisciplinary approach for intermediate and high-risk PE
- Rapid assessment and treatment decisions
- Improves outcomes in complex cases`,
      keyTerms: [
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; validated score for risk stratification and mortality prediction in PE' },
        { term: 'McConnell sign', definition: 'Echocardiographic finding of RV free wall hypokinesis with preserved apical contractility; suggestive of acute PE' },
        { term: 'PERC rule', definition: 'Eight clinical criteria that, if all absent, can exclude PE without D-dimer in very low-risk patients' },
        { term: 'catheter-directed thrombolysis', definition: 'Delivery of thrombolytic medication directly into pulmonary arteries via catheter, allowing lower doses' },
        { term: 'PERT', definition: 'Pulmonary Embolism Response Team; multidisciplinary group for rapid assessment of intermediate/high-risk PE' },
      ],
      clinicalNotes: 'For intermediate-high risk PE, escalation to thrombolysis should be considered if there is hemodynamic deterioration despite anticoagulation. The PEITHO trial showed systemic thrombolysis in normotensive PE with RV dysfunction reduced hemodynamic decompensation but increased bleeding, including intracranial hemorrhage. Catheter-directed therapy may offer a safer alternative.',
    },
    4: {
      level: 4,
      summary: 'PE management requires integration of clinical probability assessment, validated diagnostic algorithms, comprehensive risk stratification incorporating hemodynamics, RV imaging, and biomarkers, with treatment decisions spanning outpatient anticoagulation, hospital monitoring, and advanced reperfusion strategies based on evidence from trials including PEITHO, ULTIMA, and OPTALYSE.',
      explanation: `## Advanced Pathophysiology

### RV Failure Mechanisms

**Oxygen Supply-Demand Mismatch:**
- RV coronary perfusion primarily in diastole
- Elevated RV pressure compresses coronary arteries
- RV oxygen demand increases with wall stress
- Subendocardial ischemia even without CAD

**Neurohormonal Activation:**
- Catecholamine surge
- RAAS activation
- Natriuretic peptide release
- Inflammatory cytokines

**Interventricular Dependence:**
- Shared interventricular septum
- RV dilation shifts septum leftward
- LV geometry altered → impaired filling
- Pericardial constraint exacerbates

### Clot Characteristics

**Thrombus Composition:**
- Red clot: RBC-rich, older
- White clot: Platelet-rich, newer
- Mixed composition

**Clot-in-Transit:**
- Thrombus visualized in right heart chambers
- High mortality
- Emergency treatment indicated

**Chronic vs Acute:**
- Acute: Eccentric filling defect, acute angle with vessel wall
- Chronic: Laminated, calcified, web-like

## Diagnostic Refinements

### CTPA Technical Considerations

**Optimal Technique:**
- Bolus tracking at main PA
- Adequate contrast opacification
- Breath-hold to minimize motion

**Subsegmental PE:**
- Improved detection with modern CT
- Clinical significance debated
- Consider clinical context before treating isolated subsegmental PE

**RV Assessment on CT:**
- RV/LV ratio >0.9-1.0 indicates RV dysfunction
- Septal bowing
- IVC contrast reflux
- Azygos vein dilation

### Echocardiography in PE

**RV Dysfunction Criteria:**
- RV dilation (RV:LV >1.0)
- TAPSE <16 mm
- RV S' <9.5 cm/s
- McConnell's sign
- 60/60 sign (PASP <60 mmHg with pulmonary acceleration time <60 ms)

**Prognostic Value:**
- RV dysfunction predicts adverse outcomes
- Combined with biomarkers for risk stratification

### Advanced Biomarkers

**High-Sensitivity Troponin:**
- More sensitive for RV myocardial injury
- Threshold depends on assay

**Heart-Type Fatty Acid Binding Protein (H-FABP):**
- Earlier marker of myocardial injury
- Additive to troponin

**Lactate:**
- Marker of tissue hypoperfusion
- Elevated in severe PE

## Risk Stratification Models

### ESC 2019 Risk Classification

| Risk | Features | Early Mortality |
|------|----------|-----------------|
| High | Hemodynamic instability | >15% |
| Intermediate-High | sPESI ≥1 + RV dysfunction + elevated troponin | 5-15% |
| Intermediate-Low | sPESI ≥1 + RV dysfunction OR elevated troponin | 3-5% |
| Low | sPESI = 0 | <1% |

### Bova Score

| Parameter | Points |
|-----------|--------|
| SBP 90-100 mmHg | 2 |
| Elevated troponin | 2 |
| RV dysfunction (echo or CT) | 2 |
| HR ≥110 | 1 |

- Stage I (0-2): 4% 30-day complication rate
- Stage II (3-4): 18% complication rate
- Stage III (>4): 42% complication rate

## Treatment Evidence

### Anticoagulation Trials

**EINSTEIN-PE:**
- Rivaroxaban non-inferior to standard therapy
- Less major bleeding

**AMPLIFY:**
- Apixaban non-inferior to standard therapy
- Significantly less bleeding

**Hokusai-VTE:**
- Edoxaban non-inferior after heparin lead-in
- Less bleeding

### Thrombolysis Evidence

**PEITHO Trial (2014):**
- Intermediate-risk PE
- Tenecteplase + heparin vs heparin alone
- Reduced hemodynamic decompensation (1.6% vs 5%)
- Increased major bleeding (6.3% vs 1.2%) and stroke (2.4% vs 0.2%)
- No mortality difference

**Implications:**
- Routine thrombolysis not recommended for intermediate-risk PE
- Reserve for deterioration or carefully selected cases

### Catheter-Directed Therapy

**ULTIMA Trial (2013):**
- Ultrasound-assisted CDT vs anticoagulation
- Improved RV/LV ratio at 24 hours
- No major bleeding difference

**SEATTLE II (2015):**
- Single-arm study of ultrasound-assisted CDT
- Reduced RV/LV ratio and PA pressure
- Low major bleeding (10%)

**OPTALYSE PE (2018):**
- Tested varying tPA doses and durations
- Lowest dose regimen (4 mg over 2 hours per catheter) effective
- Minimized bleeding

### Surgical Embolectomy

**Indications:**
- Massive PE with thrombolysis contraindication
- Failed thrombolysis
- Clot-in-transit through patent foramen ovale
- Free-floating right heart thrombus

**Outcomes:**
- Mortality 20-30% in experienced centers
- Better outcomes when performed before cardiac arrest

## Special Situations

### PE in Pregnancy

**Diagnosis:**
- D-dimer often elevated (less useful)
- Start with lower extremity ultrasound
- V/Q scan preferred over CTPA (less fetal radiation)
- CTPA acceptable if needed

**Treatment:**
- LMWH (DOACs contraindicated)
- Weight-adjusted dosing
- Continue through delivery and postpartum

### Cancer-Associated PE

- LMWH or DOACs (edoxaban, rivaroxaban)
- Apixaban in CARAVAGGIO
- Higher bleeding with GI/GU cancers on DOACs
- Longer/indefinite treatment

### Chronic Thromboembolic Pulmonary Hypertension (CTEPH)

**Development:**
- 0.5-4% of PE patients
- Incomplete thrombus resolution
- Organized fibrotic material
- Progressive pulmonary hypertension

**Screening:**
- Echo at 3 months if persistent symptoms
- V/Q scan more sensitive than CTPA for CTEPH

**Treatment:**
- Pulmonary endarterectomy (curative)
- Balloon pulmonary angioplasty
- Riociguat (medical therapy)

### Subsegmental PE

**Considerations:**
- May be artifact or clinically insignificant
- SSPE without proximal DVT in low-risk patient → consider observation
- SSPE with DVT or high-risk features → treat
- Shared decision-making`,
      keyTerms: [
        { term: 'PEITHO trial', definition: 'Landmark trial showing thrombolysis in intermediate-risk PE reduced decompensation but increased bleeding without mortality benefit' },
        { term: 'clot-in-transit', definition: 'Thrombus visualized passing through right heart chambers; associated with high mortality and need for urgent intervention' },
        { term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension; persistent organized thrombus causing progressive pulmonary hypertension after PE' },
        { term: 'Bova score', definition: 'Risk stratification score for normotensive PE using SBP, HR, troponin, and RV dysfunction' },
        { term: 'ultrasound-assisted thrombolysis', definition: 'Catheter-directed thrombolysis using high-frequency ultrasound to enhance clot penetration by thrombolytics' },
      ],
      clinicalNotes: 'The intermediate-risk PE population is heterogeneous. For intermediate-high risk (RV dysfunction + elevated troponin), admit for monitoring and consider catheter-directed therapy if deterioration occurs. The PEITHO data caution against routine systemic thrombolysis. For intermediate-low risk, hospital observation with anticoagulation is appropriate. Low-risk PE (sPESI = 0, no RV dysfunction, normal troponin) can often be managed as outpatients using Hestia criteria.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PE management integrates precision diagnostics with point-of-care algorithms, multimodal risk stratification, and individualized reperfusion strategies ranging from catheter-based interventions to surgical embolectomy, with evolving evidence on outpatient management, PERT team implementation, and long-term sequelae including CTEPH and post-PE syndrome.',
      explanation: `## Precision Diagnostics

### Novel Diagnostic Approaches

**Machine Learning for PE Diagnosis:**
- AI interpretation of CTPA
- Automated clot detection
- Risk stratification algorithms

**Point-of-Care Ultrasound:**
- RV dilation assessment
- DVT screening
- Integration with clinical algorithms

**Dual-Energy CT:**
- Perfusion defects visualization
- Parenchymal blood volume mapping
- May identify subsegmental abnormalities

### Optimized Diagnostic Strategies

**YEARS Algorithm Validation:**
- Prospective validation in >3000 patients
- Safely reduces CTPA by 14%
- Applicable in pregnancy with modified D-dimer thresholds

**PEGeD Study:**
- Age-adjusted D-dimer
- Combined with Wells score
- Safe and effective rule-out strategy

**PROPER Study:**
- Direct CTPA vs structured algorithm
- No difference in missed VTE
- Algorithm-based approach reduces unnecessary CTPA

### Biomarker Optimization

**High-Sensitivity Troponin:**
- Earlier detection of RV injury
- Rule-out value if undetectable

**Copeptin:**
- Marker of hemodynamic stress
- Additive to troponin and NT-proBNP

**Growth Differentiation Factor-15 (GDF-15):**
- Stress-responsive cytokine
- Prognostic in PE

## Advanced Therapeutics

### Catheter-Directed Interventions

**Device Categories:**

| Type | Examples | Mechanism |
|------|----------|-----------|
| Ultrasound-assisted CDT | EKOS | Ultrasound + tPA |
| Aspiration thrombectomy | FlowTriever, Indigo | Mechanical aspiration |
| Rheolytic thrombectomy | AngioVac | Suction with circulation |
| Rotational thrombectomy | Cleaner | Fragmentation |

**FLASH Registry:**
- FlowTriever for acute PE
- Rapid RV recovery
- Low bleeding rates

**FLAME Study:**
- FlowTriever vs EKOS
- Non-inferior for RV/LV ratio reduction
- No systemic thrombolytics needed

### Anticoagulation Nuances

**Factor XI Inhibitors:**
- Potential for safer anticoagulation
- Phase 2 data in VTE
- May reduce bleeding risk

**Extended vs Standard Treatment:**
- Risk-benefit calculation
- Use prediction models (Vienna, DASH, HERDOO2)
- Patient preference integration

### Half-Dose Thrombolysis

**MOPETT Trial:**
- Half-dose tPA (50 mg) in moderate PE
- Reduced PA pressure and recurrence
- Less bleeding than full-dose

**Considerations:**
- Not widely adopted
- May be intermediate option
- Further studies needed

## PERT Implementation

### PERT Structure

**Core Team Members:**
- Interventional cardiology/radiology
- Pulmonary/critical care
- Hematology
- Cardiothoracic surgery
- Emergency medicine
- Vascular medicine

**Activation Criteria:**
- Hemodynamic instability
- Intermediate-high risk PE
- Massive clot burden
- RV failure
- Treatment uncertainty

### PERT Outcomes

**Registry Data:**
- Improved treatment decisions
- Reduced time to intervention
- Better outcomes in some studies

**Implementation Challenges:**
- Resource intensive
- Variable availability
- Need for standardization

## Long-Term Outcomes

### Post-PE Syndrome

**Clinical Features:**
- Persistent dyspnea (>50% at 6 months)
- Exercise intolerance
- Reduced quality of life
- Not fully explained by CTEPH

**Pathophysiology:**
- RV dysfunction persistence
- Pulmonary vascular remodeling
- Deconditioning
- Anxiety/depression component

**Management:**
- Cardiopulmonary exercise testing
- Cardiac rehabilitation
- Psychological support

### CTEPH

**Epidemiology:**
- 0.5-4% of acute PE survivors
- Underdiagnosed
- May occur without documented acute PE

**Pathophysiology:**
- Organized fibrotic thrombus
- Secondary arteriopathy
- Progressive RV failure

**Diagnosis:**
- V/Q scan: Mismatched perfusion defects
- CTPA: Wall-adherent thrombus, webs, bands
- Right heart catheterization: Elevated mPAP, PVR
- Pulmonary angiography: Gold standard

**Treatment Options:**

| Treatment | Indication | Outcome |
|-----------|------------|---------|
| Pulmonary endarterectomy | Proximal disease, operable | Curative potential |
| Balloon pulmonary angioplasty | Distal disease, inoperable | Improved hemodynamics |
| Riociguat | Inoperable or residual PH post-surgery | 30% improvement in 6MWD |
| Combination therapy | Severe disease | Individualized |

## Special Populations

### PE in COVID-19

**Epidemiology:**
- Increased PE incidence in hospitalized patients
- Often in situ thrombosis
- Associated with worse outcomes

**Management:**
- Standard anticoagulation
- Higher-intensity prophylaxis debated
- Intermediate-dose LMWH in some trials

### Incidental PE

**Frequency:**
- 1-5% of oncologic CT scans
- Increasing with imaging use

**Management:**
- Symptomatic: Treat as acute PE
- Asymptomatic: Individualize
- Cancer patients: Generally anticoagulate

### Pregnancy-Associated PE

**Diagnosis:**
- Modified YEARS for pregnancy
- Higher D-dimer thresholds
- V/Q preferred if chest X-ray normal

**Treatment:**
- LMWH throughout pregnancy
- Peripartum management
- Transition to warfarin/DOAC postpartum if breastfeeding

## Quality and Research

### PE Quality Metrics

- Time to anticoagulation
- Appropriate risk stratification
- VTE prophylaxis adherence
- 30-day mortality
- Readmission rates
- Appropriate diagnostic testing

### Ongoing Research

**PEERLESS Trial:**
- FlowTriever vs anticoagulation alone in intermediate-risk PE
- Primary endpoint: Composite of death, ICU, escalation

**HI-PEITHO:**
- Reduced-dose systemic thrombolysis
- Intermediate-high risk PE

**PE-SURF:**
- Surfactant-enhanced thrombolysis
- Novel approach to clot penetration

### Future Directions

**Personalized Medicine:**
- Genetic risk stratification
- Biomarker-guided duration
- Clot composition analysis

**Device Innovation:**
- Smaller profile thrombectomy devices
- Combined imaging-intervention platforms
- AI-guided catheter navigation

**Prevention:**
- Improved risk prediction
- Extended prophylaxis optimization
- Post-discharge VTE prevention`,
      keyTerms: [
        { term: 'FlowTriever', definition: 'Mechanical aspiration thrombectomy device for large-bore catheter-based clot removal in PE without systemic thrombolytics' },
        { term: 'post-PE syndrome', definition: 'Persistent dyspnea and exercise intolerance after PE not explained by CTEPH or other causes' },
        { term: 'pulmonary endarterectomy', definition: 'Surgical removal of organized thromboembolic material from pulmonary arteries; potentially curative for CTEPH' },
        { term: 'riociguat', definition: 'Soluble guanylate cyclase stimulator approved for inoperable CTEPH and PAH' },
        { term: 'balloon pulmonary angioplasty', definition: 'Catheter-based intervention for CTEPH using serial balloon dilations of obstructed pulmonary vessels' },
        { term: 'YEARS algorithm', definition: 'Diagnostic strategy using three clinical criteria and adjusted D-dimer thresholds to safely reduce CTPA utilization' },
      ],
      clinicalNotes: `Key clinical pearls for advanced PE management:

1. **PERT adds value for complex cases**: For intermediate-high risk and massive PE, multidisciplinary PERT assessment leads to better treatment decisions. Implement if available.

2. **Catheter-directed therapy is evolving**: For intermediate-high risk PE with deterioration or massive PE with thrombolysis contraindication, consider CDT or mechanical thrombectomy. FlowTriever data are promising.

3. **Half-dose thrombolysis merits consideration**: In settings with limited CDT access, half-dose tPA may be an option for submassive PE with lower bleeding risk.

4. **Screen for CTEPH**: Patients with persistent dyspnea after PE should undergo echocardiography. If PASP elevated, proceed to V/Q scan and right heart catheterization.

5. **Post-PE syndrome is real**: Many patients have persistent symptoms despite anatomic resolution. Consider rehabilitation and psychological support.

6. **Subsegmental PE is nuanced**: Isolated subsegmental PE without DVT in low-risk patients may not require anticoagulation. Shared decision-making is key.

7. **YEARS algorithm reduces CTPAs**: Validated approach that safely rules out PE with fewer imaging studies, reducing radiation and contrast exposure.

8. **Long-term outcomes matter**: Follow patients for CTEPH and post-PE syndrome. Anticoagulation duration should be individualized using risk prediction tools.`,
    },
  },

  media: [
    {
      id: 'pe-risk-stratification',
      type: 'diagram',
      filename: 'pe-risk-stratification.svg',
      title: 'PE Risk Stratification Algorithm',
      description: 'ESC-based risk stratification for pulmonary embolism management',
    },
    {
      id: 'pe-diagnostic-algorithm',
      type: 'diagram',
      filename: 'pe-diagnostic-algorithm.svg',
      title: 'PE Diagnostic Algorithm',
      description: 'Wells score-based approach to PE diagnosis using D-dimer and CTPA',
    },
    {
      id: 'rv-dysfunction-echo',
      type: 'diagram',
      filename: 'rv-dysfunction-echo.svg',
      title: 'RV Dysfunction in PE',
      description: 'Echocardiographic findings of right ventricular strain in acute PE',
    },
  ],

  citations: [
    {
      id: 'esc-pe-2019',
      type: 'article',
      title: '2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism',
      authors: ['Konstantinides SV', 'Meyer G', 'Becattini C', 'et al.'],
      source: 'European Heart Journal',
      url: 'https://doi.org/10.1093/eurheartj/ehz405',
    },
    {
      id: 'peitho-trial',
      type: 'article',
      title: 'Fibrinolysis for Patients with Intermediate-Risk Pulmonary Embolism',
      authors: ['Meyer G', 'Vicaut E', 'Danays T', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1302097',
    },
    {
      id: 'years-study',
      type: 'article',
      title: 'YEARS algorithm for ruling out pulmonary embolism',
      source: 'Lancet',
    },
  ],

  crossReferences: [
    { targetId: 'condition-deep-vein-thrombosis', targetType: 'condition', relationship: 'related', label: 'Deep Vein Thrombosis' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
    { targetId: 'structure-lungs', targetType: 'structure', relationship: 'related', label: 'Lungs' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory'],
    topics: ['pulmonology', 'critical care', 'emergency medicine', 'thrombosis'],
    keywords: ['pulmonary embolism', 'PE', 'VTE', 'thrombolysis', 'anticoagulation', 'DVT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryEmbolism;
