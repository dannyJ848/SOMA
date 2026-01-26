/**
 * Pulmonary Embolism - Comprehensive Educational Content
 *
 * Covers pathophysiology, risk factors, diagnosis (Wells criteria, D-dimer, CT-PA),
 * and management including anticoagulation and thrombolysis.
 */

import { EducationalContent } from '../../types';

export const pulmonaryEmbolism: EducationalContent = {
  id: 'condition-pulmonary-embolism',
  type: 'condition',
  name: 'Pulmonary Embolism',
  alternateNames: ['PE', 'Lung Clot', 'Pulmonary Thromboembolism', 'PTE'],

  levels: {
    1: {
      level: 1,
      summary: 'A pulmonary embolism (PE) happens when a blood clot travels to the lungs and blocks blood flow, making it hard to breathe and potentially life-threatening.',
      explanation: `**What is a Pulmonary Embolism?**

Imagine your blood vessels are like highways that carry blood around your body. Sometimes, a blood clot can form (usually in your leg) and break loose. This clot travels through your bloodstream like a car on the highway until it reaches the blood vessels in your lungs, where the "roads" get smaller and smaller. Eventually, the clot gets stuck and blocks blood flow.

**Why is this dangerous?**
When blood can't flow through part of your lung:
- That part of the lung can't give oxygen to your blood
- Your heart has to work much harder to push blood past the blockage
- In severe cases, the heart can fail

**Warning signs:**
- Sudden shortness of breath (the most common symptom)
- Sharp chest pain, especially when breathing deeply
- Coughing (sometimes with blood)
- Rapid heartbeat
- Feeling dizzy or lightheaded
- Leg pain or swelling (from the original clot)

**Who is at risk?**
Blood clots are more likely to form when:
- You sit still for a long time (long flights, bed rest after surgery)
- You've had surgery, especially on hips or knees
- You have cancer
- You're pregnant or recently had a baby
- You take birth control pills or hormone replacement
- You're overweight
- You have a family history of blood clots

**How is it diagnosed?**
- Blood test (D-dimer) to check for signs of clotting
- CT scan of the lungs to see the clot

**Treatment:**
- **Blood thinners (anticoagulants):** Medicine that prevents new clots from forming and lets your body dissolve the existing clot
- **Clot busters:** For very serious cases, medicine that dissolves clots quickly
- Most people take blood thinners for at least 3 months

**Prevention:**
- Move around during long trips
- Get up and walk after surgery when your doctor says it's okay
- Wear compression stockings if recommended
- Take blood thinners if prescribed before surgery`,
      keyTerms: [
        { term: 'blood clot', definition: 'A clump of blood that has changed from liquid to a gel-like solid' },
        { term: 'embolism', definition: 'When something (usually a blood clot) travels through blood vessels and gets stuck', pronunciation: 'EM-boh-liz-um' },
        { term: 'anticoagulant', definition: 'Medicine that prevents blood clots from forming (blood thinner)', pronunciation: 'an-tee-koh-AG-yoo-lant' },
        { term: 'DVT', definition: 'Deep vein thrombosis - a blood clot in a deep vein, usually in the leg' },
      ],
      analogies: [
        'A pulmonary embolism is like a clog in the drain of a sink - water (blood) can\'t flow through properly.',
        'Blood thinners are like making the blood more "slippery" so clots can\'t form as easily.',
        'A clot traveling to the lungs is like a log floating down a river until it gets stuck at a narrow point.',
      ],
      examples: [
        'A person who develops sudden shortness of breath and chest pain 5 days after knee replacement surgery.',
        'Someone who has leg pain and swelling after a 12-hour flight, then develops difficulty breathing.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary embolism is the obstruction of pulmonary arteries by thrombi originating from deep veins, most commonly the lower extremities, causing ventilation-perfusion mismatch and potentially right heart failure.',
      explanation: `## What is Pulmonary Embolism?

Pulmonary embolism (PE) occurs when a blood clot (thrombus) travels through the venous system and lodges in the pulmonary arteries, blocking blood flow to part of the lung.

### Connection to Deep Vein Thrombosis (DVT)

PE and DVT are both part of "venous thromboembolism" (VTE):
- Most PEs originate from DVTs in the legs (90%)
- Upper extremity DVTs can also embolize
- Together they represent a spectrum of the same disease

### Virchow's Triad - Why Clots Form

Three factors increase clot risk:
1. **Stasis:** Slow blood flow (immobility, bed rest, long travel)
2. **Endothelial injury:** Damage to blood vessel walls (surgery, trauma)
3. **Hypercoagulability:** Blood that clots more easily (cancer, hormones, genetic conditions)

### Risk Factors

**Strong risk factors (OR >10):**
- Recent major surgery (especially orthopedic)
- Hospitalization
- Leg fracture
- Prior VTE

**Moderate risk factors (OR 2-10):**
- Cancer
- Oral contraceptives or hormone therapy
- Pregnancy and postpartum
- Obesity
- Thrombophilia (inherited clotting disorders)
- Central venous catheter

**Weak risk factors (OR <2):**
- Age >40
- Prolonged sitting (travel >4 hours)
- Varicose veins

### Pathophysiology

When a clot lodges in the pulmonary artery:

1. **Blocked blood flow:** Part of the lung has no blood supply
2. **V/Q mismatch:** Ventilated alveoli aren't perfused → hypoxemia
3. **Dead space:** Air reaches alveoli but can't exchange gases
4. **Pulmonary hypertension:** Pressure backs up in pulmonary arteries
5. **Right heart strain:** RV must pump against higher resistance
6. **In severe cases:** RV failure → cardiogenic shock → death

### Clinical Presentation

**Symptoms:**
- Dyspnea (shortness of breath) - most common (80%)
- Pleuritic chest pain (sharp, worse with breathing) - 50%
- Cough - 20%
- Hemoptysis (coughing blood) - 10%
- Syncope (fainting) - suggests massive PE
- Leg pain/swelling (concurrent DVT)

**Signs:**
- Tachycardia (rapid heart rate)
- Tachypnea (rapid breathing)
- Hypoxemia (low oxygen)
- Hypotension (in massive PE)
- Elevated JVP
- Loud P2 (pulmonic component of S2)
- Signs of DVT (leg swelling, tenderness)

### Diagnosis

**Step 1: Assess pretest probability**
Wells Score for PE:
| Criteria | Points |
|----------|--------|
| Clinical signs of DVT | 3 |
| PE is #1 diagnosis (or equally likely) | 3 |
| Heart rate >100 | 1.5 |
| Immobilization or surgery in past 4 weeks | 1.5 |
| Previous PE or DVT | 1.5 |
| Hemoptysis | 1 |
| Active cancer | 1 |

**Interpretation:**
- ≤4 points: PE unlikely → D-dimer
- >4 points: PE likely → CT-PA

**Step 2: Diagnostic tests**

**D-dimer:**
- Fibrin degradation product
- Sensitive but not specific
- Negative D-dimer with low pretest probability rules out PE
- Not useful if high clinical suspicion (proceed to imaging)

**CT Pulmonary Angiography (CT-PA):**
- Gold standard imaging
- Shows clot directly in pulmonary arteries
- Also shows right heart strain
- Contraindicated: Severe renal failure, contrast allergy

**V/Q Scan:**
- Alternative when CT-PA contraindicated
- Compares ventilation to perfusion
- "High probability" scan = PE likely

**Echocardiogram:**
- Shows RV dysfunction in massive PE
- Useful at bedside when patient unstable

### Classification by Severity

| Type | Blood Pressure | RV Function | Treatment |
|------|---------------|-------------|-----------|
| Massive | Hypotensive (SBP <90) | Abnormal | Thrombolysis or embolectomy |
| Submassive | Normal | Abnormal | Anticoagulation ± thrombolysis |
| Low-risk | Normal | Normal | Anticoagulation |

### Treatment

**Anticoagulation (all patients unless contraindicated):**
1. **Direct oral anticoagulants (DOACs):** Rivaroxaban, apixaban, edoxaban
   - First-line for most patients
   - No monitoring needed
2. **Warfarin:** Older option, requires INR monitoring
3. **Heparin/LMWH:** Often used initially, required for cancer patients

**Duration:**
- Provoked PE (surgery, immobility): 3 months
- Unprovoked PE: At least 3 months, often indefinite
- Cancer-associated: Indefinite while cancer active

**Advanced therapies (massive PE):**
- Systemic thrombolysis: tPA to dissolve clot
- Catheter-directed therapy: Local tPA delivery
- Surgical embolectomy: Last resort

### Prevention

- Early mobilization after surgery
- Pharmacologic prophylaxis (heparin, enoxaparin) in hospitalized patients
- Mechanical prophylaxis (compression devices)
- DOACs after hip/knee surgery`,
      keyTerms: [
        { term: 'VTE', definition: 'Venous thromboembolism - umbrella term for DVT and PE' },
        { term: 'Virchow\'s triad', definition: 'Three factors that increase clot risk: stasis, endothelial injury, hypercoagulability', pronunciation: 'VIR-koz' },
        { term: 'D-dimer', definition: 'Blood test measuring fibrin breakdown products; elevated when blood clots are being degraded' },
        { term: 'CT-PA', definition: 'CT pulmonary angiography - CT scan with contrast to visualize pulmonary arteries and detect clots' },
        { term: 'V/Q scan', definition: 'Ventilation-perfusion scan - nuclear medicine test comparing airflow to blood flow in lungs' },
        { term: 'thrombolysis', definition: 'Treatment using medications to dissolve blood clots', pronunciation: 'throm-BOL-ih-sis' },
      ],
      analogies: [
        'The Wells score is like a checklist to decide how worried to be about PE before doing tests.',
        'D-dimer is like checking for debris in the water after a crash - if there\'s none, there probably wasn\'t a crash (clot).',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary embolism diagnosis requires integration of clinical probability assessment, biomarkers, and imaging, with risk stratification guiding treatment intensity from anticoagulation to catheter-directed therapy or systemic thrombolysis.',
      explanation: `## Pathophysiology

### Hemodynamic Consequences

**Acute RV pressure overload:**
1. Clot obstruction increases pulmonary vascular resistance (PVR)
2. RV wall stress increases (Law of Laplace)
3. RV dilates and becomes dysfunctional
4. Interventricular septum shifts leftward
5. LV filling impaired (ventricular interdependence)
6. Cardiac output falls
7. Coronary perfusion decreases → RV ischemia
8. Spiral of RV failure

**Degree of obstruction matters:**
- <25% obstruction: Often minimal hemodynamic impact
- 25-50%: RV may be stressed but compensated
- >50%: Significant hemodynamic compromise
- >75%: Usually fatal without intervention

### Gas Exchange Abnormalities

**Hypoxemia mechanisms:**
1. **V/Q mismatch:** Primary mechanism
   - Blocked perfusion to ventilated areas
   - Redistribution of blood flow to smaller vascular bed
2. **Shunt:** Atelectasis distal to clot (loss of surfactant)
3. **Low mixed venous O2:** From decreased cardiac output
4. **Right-to-left shunt:** Via patent foramen ovale (PFO) if present

**Hypocapnia:**
- Tachypnea leads to hyperventilation
- PaCO2 often low
- Respiratory alkalosis common

**Increased dead space:**
- Ventilated but non-perfused alveoli
- VD/VT ratio increases

## Diagnostic Algorithm

### Pretest Probability

**Wells Criteria (simplified):**
- PE likely: >4 points
- PE unlikely: ≤4 points

**PERC Rule (can use if low clinical suspicion):**
If ALL negative, PE can be excluded without D-dimer:
- Age <50
- HR <100
- SpO2 >94%
- No hemoptysis
- No estrogen use
- No prior DVT/PE
- No unilateral leg swelling
- No surgery/trauma requiring hospitalization within 4 weeks

### D-dimer

**Interpretation:**
- Standard cutoff: 500 ng/mL
- Age-adjusted cutoff: Age × 10 (if >50 years)
- Example: 70 y/o → threshold 700 ng/mL
- Increases specificity without losing sensitivity

**When NOT to use:**
- High pretest probability → proceed to imaging
- Hospitalized patients (often elevated)
- Known malignancy (often elevated)
- Pregnancy (normally elevated)

### Imaging

**CT Pulmonary Angiography:**
- Sensitivity 83%, Specificity 96%
- Can detect clots to segmental level
- Additional findings: RV/LV ratio, reflux into IVC/hepatic veins
- Incidental findings: Lymphadenopathy, lung nodules

**V/Q Scan:**
- Use when CT contraindicated (renal failure, contrast allergy)
- Best in patients with normal CXR
- Results: Normal, low probability, intermediate, high probability
- High probability scan with high pretest probability = PE diagnosed

**Pulmonary Angiography:**
- Historical gold standard
- Rarely used now (invasive)
- Reserved for therapeutic intervention planning

**Lower extremity ultrasound:**
- Can confirm DVT if clinically suspected
- Positive DVT + PE symptoms = treat for VTE

## Risk Stratification

### ESC Classification (2019)

**High-risk (formerly "massive"):**
- Hemodynamic instability: SBP <90 for >15 min, requiring vasopressors, or cardiac arrest
- Mortality 15-25%
- Immediate reperfusion indicated

**Intermediate-high risk:**
- Hemodynamically stable
- PESI Class III-V OR sPESI ≥1
- RV dysfunction on imaging (CT or echo)
- Elevated troponin
- Mortality 3-15%
- Consider escalated therapy

**Intermediate-low risk:**
- Hemodynamically stable
- PESI Class III-V OR sPESI ≥1
- Normal RV function OR normal troponin (not both abnormal)
- Mortality ~3%
- Anticoagulation, close monitoring

**Low risk:**
- PESI Class I-II OR sPESI = 0
- Consider outpatient treatment
- Mortality <1%

### sPESI (Simplified PESI)

Score 1 point for each:
- Age >80
- Cancer history
- Chronic cardiopulmonary disease
- Heart rate ≥110
- Systolic BP <100
- O2 saturation <90%

Score = 0: Low risk (mortality ~1%)
Score ≥1: Higher risk

### Biomarkers

**Troponin:**
- Elevated in RV strain/ischemia
- Associated with higher mortality
- Part of intermediate-risk stratification

**BNP/NT-proBNP:**
- Elevated with RV dysfunction
- Normal BNP has good negative predictive value
- Less specific than troponin

## Treatment

### Anticoagulation

**Initial therapy:**
| Agent | Dosing | Notes |
|-------|--------|-------|
| Apixaban | 10 mg BID × 7 days, then 5 mg BID | No parenteral lead-in needed |
| Rivaroxaban | 15 mg BID × 21 days, then 20 mg daily | No parenteral lead-in needed |
| Edoxaban | 60 mg daily | Requires 5 days heparin lead-in |
| LMWH (enoxaparin) | 1 mg/kg BID | Preferred in cancer |
| UFH | Weight-based, target aPTT | For massive PE/intervention |

**Duration:**
| Scenario | Duration | Extended therapy |
|----------|----------|-----------------|
| Major transient risk | 3 months | No |
| Minor transient risk | 3 months | Consider |
| Unprovoked | 3 months minimum | Likely indefinite |
| Active cancer | Duration of cancer | LMWH or edoxaban |
| Recurrent VTE | Indefinite | Yes |

### Reperfusion Therapy

**Systemic thrombolysis:**
- Indication: High-risk PE (hemodynamic instability)
- Agent: Alteplase 100 mg over 2 hours
- Alternative: Tenecteplase (weight-based bolus)
- Contraindications: Recent surgery, stroke, active bleeding

**Catheter-directed therapy:**
- Growing use in intermediate-high risk
- Lower systemic tPA dose
- Options: Ultrasound-assisted (EKOS), aspiration, fragmentation
- Evidence: SEATTLE II, ULTIMA, OPTALYSE

**Surgical embolectomy:**
- Rare, for massive PE when thrombolysis fails/contraindicated
- Requires cardiac surgery capability

### IVC Filters

**Indications:**
- Contraindication to anticoagulation
- Recurrent PE despite adequate anticoagulation
- Massive PE with residual DVT (controversial)

**Note:** Retrievable filters should be removed when anticoagulation can resume`,
      keyTerms: [
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; risk stratification tool predicting 30-day mortality', pronunciation: 'PEE-see' },
        { term: 'RV/LV ratio', definition: 'Right ventricle to left ventricle diameter ratio on CT; >0.9-1.0 suggests RV strain' },
        { term: 'PERC rule', definition: 'Pulmonary Embolism Rule-out Criteria; 8 clinical criteria that, if all absent, exclude PE without testing' },
        { term: 'age-adjusted D-dimer', definition: 'Using age × 10 as D-dimer threshold in patients >50 to improve specificity' },
        { term: 'catheter-directed thrombolysis', definition: 'Delivery of thrombolytic directly to pulmonary arteries via catheter, reducing systemic bleeding risk' },
        { term: 'ventricular interdependence', definition: 'Phenomenon where RV dilation impairs LV filling by shifting the interventricular septum' },
      ],
      clinicalNotes: 'Age-adjusted D-dimer cutoffs significantly increase specificity with minimal loss of sensitivity - use Age × 10 for patients >50. PERC criteria should only be applied when gestalt clinical suspicion is <15%.',
    },
    4: {
      level: 4,
      summary: 'Pulmonary embolism management has evolved toward individualized care incorporating advanced imaging biomarkers, outpatient treatment pathways, catheter-based interventions for intermediate-high risk patients, and extended anticoagulation strategies based on bleeding-adjusted risk-benefit analysis.',
      explanation: `## Advanced Pathophysiology

### Molecular Mechanisms of Thrombosis

**Coagulation cascade activation:**
- Tissue factor exposure from vascular injury
- Factor VIIa complex formation
- Factor Xa generation → thrombin burst
- Fibrin network formation with platelet aggregation

**Natural anticoagulants:**
- Protein C/S pathway (inactivates Va, VIIIa)
- Antithrombin III (inhibits thrombin, Xa)
- Tissue factor pathway inhibitor (TFPI)
- Deficiencies create hypercoagulable states

**Fibrinolysis:**
- Plasminogen → plasmin (by tPA)
- Plasmin degrades fibrin → D-dimer
- PAI-1 inhibits tPA (elevated in metabolic syndrome)

### RV Adaptation and Failure

**Acute RV response to PE:**
1. RV end-diastolic pressure rises
2. RV dilates to maintain stroke volume (Frank-Starling)
3. Wall stress increases (afterload mismatch)
4. RV free wall ischemia (supply-demand mismatch)
5. RV contractility declines
6. TR develops → further RV volume overload

**McConnell's sign:**
- RV free wall akinesia with apical sparing
- Apex tethered to normally contracting LV
- Specific for acute PE (vs chronic pulmonary hypertension)

**60/60 sign:**
- Pulmonary acceleration time <60 ms
- Peak tricuspid gradient ≤60 mmHg
- Suggests acute (not chronic) pulmonary hypertension

### Chronic Thromboembolic Disease

**Post-PE syndrome:**
- Persistent dyspnea/exercise limitation after PE
- Occurs in up to 50% of patients
- Mechanisms: Incomplete clot resolution, vascular remodeling

**CTEPH (Chronic Thromboembolic Pulmonary Hypertension):**
- 2-4% of PE survivors
- Organized thrombus becomes fibrous tissue
- Progressive pulmonary hypertension and RV failure
- Potentially curable with pulmonary endarterectomy

## Risk Stratification Refinement

### Imaging Biomarkers

**CT-PA findings of RV dysfunction:**
- RV/LV ratio >0.9 (axial) or >1.0 (4-chamber)
- Septal bowing toward LV
- Contrast reflux into IVC/hepatic veins
- Main PA diameter >30 mm

**Clot burden scoring:**
- Qanadli score: % obstruction by segment
- Higher scores correlate with RV dysfunction
- Research use; not standard clinical practice

### Laboratory Biomarkers

**High-sensitivity troponin:**
- More sensitive than conventional troponin
- Elevated in >50% of intermediate-risk PE
- hs-TnI >100 pg/mL associated with worse outcomes

**Lactate:**
- Elevated with tissue hypoperfusion
- Predictor of in-hospital mortality
- Part of BOVA score

**Heart-type fatty acid binding protein (H-FABP):**
- Early marker of myocardial injury
- May improve risk prediction (research setting)

### Integrated Risk Models

**BOVA Score:**
| Variable | Points |
|----------|--------|
| SBP 90-100 | 2 |
| Elevated troponin | 2 |
| RV dysfunction | 2 |
| HR ≥110 | 1 |

- Score 0-2: Low risk
- Score 3-4: Intermediate (10% complication rate)
- Score >4: High (25% complication rate)

**Hestia Criteria (outpatient eligibility):**
Rule out for home treatment if ANY present:
- Hemodynamically unstable
- Thrombolysis or embolectomy needed
- Active bleeding or high bleeding risk
- Oxygen needed to maintain SpO2 >90%
- PE diagnosed while on anticoagulation
- Severe pain requiring IV opioids
- Creatinine clearance <30
- Severe liver impairment
- Pregnant
- Documented HIT
- Social reasons preventing home treatment

## Advanced Treatment Strategies

### Catheter-Directed Interventions

**Ultrasound-assisted catheter-directed thrombolysis (UACDT):**
- EKOS system
- Low-energy ultrasound accelerates fibrinolysis
- Typical tPA dose: 10-24 mg over 12-24 hours
- SEATTLE II: Reduced RV/LV ratio, no ICH

**Mechanical thrombectomy:**
| Device | Mechanism | Evidence |
|--------|-----------|----------|
| AngioVac | Aspiration | Case series |
| FlowTriever | Mechanical extraction | FLARE trial |
| Inari ClotTriever | Aspiration | PE-TRACT trial |
| Indigo | Aspiration | EXTRACT-PE |

**Patient selection for CDT:**
- Intermediate-high risk (stable but RV dysfunction + biomarkers)
- Contraindication to systemic thrombolysis
- Failure to improve with anticoagulation
- Availability of expertise

### Extended Anticoagulation

**Risk-benefit assessment:**

*Recurrence risk without treatment:*
- Provoked (major transient): 1-3%/year
- Provoked (minor transient): 5%/year
- Unprovoked: 10%/year
- Second unprovoked: 15%/year

*Bleeding risk on anticoagulation:*
- Major bleeding: 1-2%/year on DOACs
- HAS-BLED, VTE-BLEED scores help estimate

**Extended therapy options:**
- Full-dose DOAC continuation
- Reduced-dose DOAC:
  - Apixaban 2.5 mg BID (AMPLIFY-EXT)
  - Rivaroxaban 10 mg daily (EINSTEIN-CHOICE)
- Aspirin (inferior to reduced-dose DOAC)

### Special Populations

**Cancer-associated VTE:**
- LMWH historically preferred (CLOT trial)
- Edoxaban non-inferior (Hokusai VTE-Cancer)
- Apixaban may be option (CARAVAGGIO)
- Avoid DOACs with GI/GU cancers (higher bleeding)

**Pregnancy:**
- LMWH throughout pregnancy (DOACs contraindicated)
- Continue for 6 weeks postpartum (minimum 3 months total)
- Consider thrombophilia workup

**Obesity:**
- Standard DOAC dosing appears effective (limited data BMI >40)
- Consider LMWH with anti-Xa monitoring for extreme obesity

**Renal impairment:**
- CrCl <30: Avoid edoxaban, use apixaban cautiously
- CrCl <15 or dialysis: Warfarin or reduced-dose apixaban

### Subsegmental PE

**Diagnostic challenge:**
- Detected more frequently with improved CT technology
- Clinical significance debated
- May represent:
  - True thromboembolic disease
  - In situ pulmonary artery thrombosis
  - Artifact

**Management approach:**
- If symptomatic with DVT: Treat as PE
- If isolated, asymptomatic, low-risk: Consider serial imaging
- Current guidelines suggest anticoagulation for most

## CTEPH

### Screening and Diagnosis

**When to suspect:**
- Persistent dyspnea/exercise limitation 3 months after PE
- Unexplained pulmonary hypertension

**Workup:**
1. V/Q scan (most sensitive screening)
2. RHC confirms pulmonary hypertension
3. Pulmonary angiography/CT defines anatomy

### Treatment

**Pulmonary endarterectomy (PEA):**
- Potentially curative
- Removes organized thrombus and fibrotic tissue
- Requires hypothermic circulatory arrest
- Operative mortality 2-5% in expert centers

**Balloon pulmonary angioplasty (BPA):**
- For inoperable CTEPH
- Serial sessions, staged approach
- Emerging alternative/complement to PEA

**Medical therapy:**
- Riociguat (soluble guanylate cyclase stimulator) - FDA approved
- Other PAH therapies may be used`,
      keyTerms: [
        { term: 'McConnell sign', definition: 'Echo finding of RV free wall hypokinesis with apical sparing, specific for acute PE' },
        { term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension; organized thrombus causing pulmonary hypertension, potentially curable with surgery', pronunciation: 'C-TEPH' },
        { term: 'UACDT', definition: 'Ultrasound-assisted catheter-directed thrombolysis; delivers low-dose tPA locally with ultrasound enhancement' },
        { term: 'subsegmental PE', definition: 'Clot limited to subsegmental pulmonary arteries; clinical significance and treatment approach remain debated' },
        { term: 'Hestia criteria', definition: 'Clinical criteria identifying PE patients eligible for outpatient treatment' },
        { term: 'BOVA score', definition: 'Risk score integrating hemodynamics, troponin, RV dysfunction, and heart rate for PE prognosis' },
      ],
      clinicalNotes: 'Catheter-directed therapy is increasingly used for intermediate-high risk PE. Patient selection is key - look for RV dysfunction + elevated biomarkers + ability to tolerate procedure. Pulmonary embolism response teams (PERTs) facilitate multidisciplinary decision-making.',
    },
    5: {
      level: 5,
      summary: 'Contemporary PE management integrates clinical decision tools, advanced imaging, biomarker profiles, and multidisciplinary pulmonary embolism response teams (PERTs) to deliver risk-stratified care ranging from outpatient DOACs to catheter-based interventions and surgical embolectomy.',
      explanation: `## Precision Risk Stratification

### Machine Learning and Risk Prediction

**Novel approaches:**
- Deep learning on CT-PA images for automated RV/LV measurement
- Neural networks integrating clinical, laboratory, imaging data
- Automated clot burden quantification
- Real-time risk calculators integrated into EHR

**Limitations:**
- External validation often lacking
- Model drift with population changes
- "Black box" nature limits clinical adoption

### Biomarker Combinations

**Contemporary risk panels:**
| Marker | What It Reflects | Prognostic Value |
|--------|-----------------|------------------|
| hs-Troponin | RV myocardial injury | Intermediate mortality |
| NT-proBNP | RV wall stress | Short-term outcomes |
| Lactate | Tissue hypoperfusion | In-hospital mortality |
| Copeptin | Stress response | Adds to troponin |
| GDF-15 | Inflammation/stress | Long-term outcomes |

**Integrated interpretation:**
- All biomarkers normal → excellent prognosis
- Any elevated → requires imaging assessment
- Multiple elevated → consider escalated therapy

### RV Strain Assessment

**Echocardiographic parameters:**
| Parameter | Abnormal | Interpretation |
|-----------|----------|---------------|
| TAPSE | <16 mm | RV systolic dysfunction |
| RV S' | <9.5 cm/s | RV longitudinal function |
| FAC | <35% | RV fractional area change |
| RVSP | >35 mmHg | Elevated PA pressure |
| RA pressure | Elevated | Advanced RV failure |

**Strain imaging:**
- RV free wall longitudinal strain
- <-20% indicates dysfunction
- May detect subclinical dysfunction

## Pulmonary Embolism Response Teams (PERTs)

### Structure and Function

**Core team:**
- Interventional cardiology/radiology
- Pulmonary/critical care
- Cardiothoracic surgery
- Hematology
- Emergency medicine
- Pharmacy

**Activation criteria:**
- High-risk (hemodynamically unstable) PE
- Intermediate-high risk with clinical deterioration
- Contraindication to anticoagulation
- Treatment failure
- Complex clinical scenarios

### PERT Outcomes Data

**Registry data:**
- PERT consortium: >20,000 patients
- 30-day mortality 5-15% depending on risk
- Catheter-based intervention in 10-25%
- Surgical embolectomy <5%
- Major bleeding 2-5%

**Impact on care:**
- Reduced time to treatment decision
- More appropriate use of advanced therapies
- Standardized risk stratification
- Quality improvement initiatives

## Catheter-Based Therapies: Evidence and Technique

### Clinical Trial Evidence

**SEATTLE II (UACDT):**
- 150 patients, intermediate-risk PE
- 24-hour UACDT with tPA (24 mg total)
- RV/LV ratio decreased 0.42
- Major bleeding 10% (mostly access site)
- No ICH

**OPTALYSE PE (UACDT dose optimization):**
- Lower doses (4-12 mg) over shorter times (2-6 hours)
- Effective RV improvement
- May allow reduced lytic exposure

**FLARE (FlowTriever):**
- Large-bore aspiration thrombectomy
- No thrombolytics
- RV/LV ratio improved 0.38
- No major bleeding or ICH

**HI-PEITHO (ongoing):**
- UACDT vs anticoagulation alone
- Intermediate-high risk PE
- Primary outcome: All-cause death, cardiorespiratory decompensation, recurrent VTE

### Technical Considerations

**UACDT technique:**
1. Venous access (femoral or internal jugular)
2. Position catheter(s) in main/lobar PA
3. Confirm position with angiography
4. Infuse tPA at 1-2 mg/hour (typically 24 mg total)
5. Monitor in ICU
6. Repeat imaging at 12-24 hours

**Aspiration thrombectomy:**
1. Large-bore catheter (20-24 Fr)
2. Direct aspiration of thrombus
3. No lytic requirement
4. Real-time visualization
5. May combine with thrombolysis

### Patient Selection

**Ideal candidates for CDT:**
- Intermediate-high risk PE
- RV dysfunction on imaging
- Elevated biomarkers
- Adequate vascular access
- No contraindications to procedure
- PERT review supports intervention

**Relative contraindications:**
- Very high bleeding risk
- Recent neurosurgery
- Inaccessible anatomy
- Severe chronic RV dysfunction

## Extended and Secondary Prevention

### Risk-Benefit Decision Analysis

**Recurrence risk factors:**
- Unprovoked presentation
- Male sex
- Elevated D-dimer off anticoagulation
- Residual vein thrombosis
- Thrombophilia
- Obesity

**Bleeding risk assessment:**
| Factor | Impact |
|--------|--------|
| Age >75 | Major |
| Prior bleeding | Major |
| Active cancer | Major |
| Renal impairment | Moderate |
| Concurrent antiplatelet | Moderate |
| Anemia | Moderate |

**HERDOO2 rule (women only):**
Can safely stop anticoagulation if ≤1 of:
- HER: Hyperpigmentation, Edema, Redness in leg
- D: D-dimer ≥250 while on anticoagulation
- O: Obesity (BMI ≥30)
- O: Older age (≥65)

### Post-PE Follow-Up Protocol

**3-month assessment:**
- Symptom evaluation
- Consider echocardiogram
- D-dimer (if stopping anticoagulation considered)
- Discuss extended therapy

**6-12 month and beyond:**
- Assess for post-PE syndrome
- Screen for CTEPH if symptomatic
- Thrombophilia testing if indicated
- Cancer screening if unprovoked

### CTEPH Surveillance

**Who to screen:**
- Persistent dyspnea after PE
- Risk factors: Large PE, recurrent VTE, idiopathic presentation

**Screening approach:**
1. V/Q scan (most sensitive)
2. If mismatched defects → RHC
3. If PH confirmed → pulmonary angiography
4. Evaluate for PEA vs BPA

## Special Scenarios

### Pregnancy-Associated PE

**Diagnostic approach:**
- D-dimer often elevated (limited utility)
- Lower extremity ultrasound first (if positive, treat)
- V/Q scan preferred (lower fetal radiation than CT)
- CT-PA if V/Q non-diagnostic

**Treatment:**
- LMWH throughout pregnancy
- Switch to UFH near delivery
- Epidural: Hold LMWH 24 hours prior
- Resume anticoagulation 4-6 hours post-delivery
- Continue 6 weeks postpartum (minimum 3 months total)

### Thrombolysis in Cardiac Arrest

**PEA arrest with suspected PE:**
- Thrombolysis may be beneficial
- Limited evidence, observational data
- Alteplase 50 mg bolus during CPR
- Continue CPR for 60-90 minutes post-lytic

### Right Heart Thrombus

**Thrombus-in-transit:**
- Clot visualized in RA/RV or across PFO
- High mortality (>40%)
- Treatment controversial:
  - Systemic thrombolysis
  - Surgical embolectomy
  - Catheter intervention
- PERT consultation recommended

## Quality Metrics and Outcomes

### Performance Measures

**Process measures:**
- Time to anticoagulation
- Appropriate risk stratification documentation
- VTE prophylaxis compliance
- 30-day follow-up rate

**Outcome measures:**
- 30-day mortality
- Recurrent VTE rate
- Major bleeding rate
- Readmission rate
- CTEPH development

### Systems of Care

**Comprehensive PE program elements:**
- 24/7 PERT availability
- Standardized risk stratification protocol
- Catheter-based therapy capability
- Cardiothoracic surgery backup
- Anticoagulation management service
- Outpatient follow-up pathway
- Quality dashboard

## Clinical Pearls for Practice

1. **PERC rule** should only be applied when gestalt PE probability is <15%. If any PERC criteria present, proceed to D-dimer.

2. **Age-adjusted D-dimer** (age × 10 for patients >50) increases specificity without losing sensitivity - adopt as standard practice.

3. **Outpatient treatment** is safe for low-risk PE (sPESI 0, Hestia criteria negative). Consider when appropriate resources available.

4. **Intermediate-high risk** is the gray zone - RV dysfunction + elevated troponin but hemodynamically stable. These patients benefit most from PERT consultation.

5. **CDT evidence** is strongest for UACDT. Mechanical thrombectomy data are emerging. Reserve for intermediate-high risk patients who can receive intervention within 12-24 hours.

6. **Extended anticoagulation** decision should be individualized. Reduced-dose DOACs (apixaban 2.5 mg BID, rivaroxaban 10 mg daily) are effective with lower bleeding risk.

7. **CTEPH screening** should be considered at 3-6 months if persistent dyspnea. V/Q scan is the screening test of choice.

8. **Subsegmental PE** management remains controversial. If no DVT and patient is low-risk, serial imaging may be reasonable alternative to anticoagulation.`,
      keyTerms: [
        { term: 'PERT', definition: 'Pulmonary Embolism Response Team; multidisciplinary team for rapid consultation on complex PE cases' },
        { term: 'TAPSE', definition: 'Tricuspid Annular Plane Systolic Excursion; echo measure of RV function, <16mm indicates dysfunction' },
        { term: 'HERDOO2', definition: 'Risk score for women to identify those who can safely discontinue anticoagulation after unprovoked VTE' },
        { term: 'thrombus-in-transit', definition: 'Mobile thrombus visualized in the right heart, often crossing PFO, with high mortality risk' },
        { term: 'BPA', definition: 'Balloon pulmonary angioplasty; percutaneous treatment for inoperable CTEPH' },
        { term: 'FlowTriever', definition: 'Large-bore aspiration catheter for mechanical PE thrombectomy without thrombolytics' },
      ],
      clinicalNotes: `Key practice recommendations:

1. **PERT activation:** Intermediate-high risk PE, massive PE, complex scenarios, failed anticoagulation, contraindications to standard therapy.

2. **CDT patient selection:** Stable patients with RV dysfunction + biomarker elevation + symptom onset <14 days + accessible for intervention. PERT decision.

3. **Extended anticoagulation:** Use shared decision-making tools. For unprovoked PE, lean toward extended therapy unless high bleeding risk. Reduced-dose DOACs are an attractive option.

4. **Outpatient PE treatment:** Low-risk patients (sPESI 0), able to adhere to treatment, adequate social support, available follow-up. Use DOAC without parenteral lead-in.

5. **Follow-up:** All PE patients need 3-month follow-up. Screen for post-PE syndrome and CTEPH. Consider repeat echo if dyspneic. D-dimer can guide extended anticoagulation decisions.`,
    },
  },

  media: [
    {
      id: 'pe-pathophysiology',
      type: 'diagram',
      filename: 'pe-pathophysiology.svg',
      title: 'PE Pathophysiology',
      description: 'Hemodynamic consequences of pulmonary embolism including RV failure cascade',
    },
    {
      id: 'pe-diagnostic-algorithm',
      type: 'diagram',
      filename: 'pe-diagnostic-algorithm.svg',
      title: 'PE Diagnostic Algorithm',
      description: 'Clinical probability assessment and testing strategy for suspected PE',
    },
    {
      id: 'pe-risk-stratification',
      type: 'diagram',
      filename: 'pe-risk-stratification.svg',
      title: 'PE Risk Stratification',
      description: 'ESC risk classification and treatment selection algorithm',
    },
  ],

  citations: [
    {
      id: 'esc-pe-2019',
      type: 'article',
      title: '2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism',
      authors: ['Konstantinides SV', 'Meyer G', 'Becattini C', 'et al.'],
      source: 'Eur Heart J',
      url: 'https://doi.org/10.1093/eurheartj/ehz405',
    },
    {
      id: 'chest-vte-2021',
      type: 'article',
      title: 'Antithrombotic Therapy for VTE Disease: CHEST Guideline and Expert Panel Report',
      authors: ['Stevens SM', 'Woller SC', 'Kreuziger LB', 'et al.'],
      source: 'Chest',
      url: 'https://doi.org/10.1016/j.chest.2021.07.055',
    },
    {
      id: 'seattle-ii',
      type: 'article',
      title: 'A Prospective, Single-Arm, Multicenter Trial of Ultrasound-Facilitated, Catheter-Directed Thrombolysis for Acute Intermediate-Risk PE',
      authors: ['Piazza G', 'Hohlfelder B', 'Jaff MR', 'et al.'],
      source: 'JACC Cardiovasc Interv',
      url: 'https://doi.org/10.1016/j.jcin.2015.04.020',
    },
  ],

  crossReferences: [
    { targetId: 'condition-dvt', targetType: 'condition', relationship: 'related', label: 'Deep Vein Thrombosis' },
    { targetId: 'topic-anticoagulation', targetType: 'topic', relationship: 'related', label: 'Anticoagulation Therapy' },
    { targetId: 'condition-heart-failure', targetType: 'condition', relationship: 'related', label: 'Heart Failure' },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'hematologic'],
    topics: ['pulmonology', 'hematology', 'emergency medicine', 'critical care'],
    keywords: ['pulmonary embolism', 'PE', 'VTE', 'anticoagulation', 'thrombolysis', 'DVT'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'emergency medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryEmbolism;
