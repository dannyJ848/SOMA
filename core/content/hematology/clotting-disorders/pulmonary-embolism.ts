import { EducationalContent } from '../types';

export const pulmonaryEmbolism: EducationalContent = {
  id: 'hematology-pulmonary-embolism',
  type: 'condition',
  name: 'Pulmonary Embolism',
  alternateNames: ['PE', 'Lung Clot', 'Pulmonary Thromboembolism', 'Blood Clot in Lung'],
  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary embolism (PE) is a serious condition where a blood clot travels to the lungs and blocks blood flow, making it hard to breathe and potentially life-threatening.',
      explanation: `A pulmonary embolism, or PE, happens when a blood clot travels through your bloodstream and gets stuck in a blood vessel in your lungs. Most of these clots start in the deep veins of the legs (called deep vein thrombosis or DVT) and then break off and travel to the lungs.

**Why is PE dangerous?**
When a clot blocks blood flow in the lungs:
- Oxygen cannot get into your blood properly
- Your heart has to work harder to pump blood through the blocked area
- In severe cases, it can cause heart failure or death

**What are the warning signs?**
The most common symptoms are:
- Sudden shortness of breath (the most common symptom)
- Sharp chest pain, especially when breathing deeply
- Rapid heartbeat
- Cough (sometimes with blood)
- Feeling lightheaded or fainting
- Anxiety or sense of dread

**Seek emergency care immediately if you have these symptoms, especially if you also have:**
- Recent surgery or long period of not moving
- Known blood clot in your leg
- Cancer
- Previous blood clots

**How is PE treated?**
- Blood thinners are the main treatment to prevent more clots
- In severe cases, clot-dissolving medicines may be used
- Some patients may need surgery to remove the clot
- Long-term blood thinner treatment prevents future clots

**Prevention:**
Many of the same strategies that prevent DVT also prevent PE:
- Move around regularly during long trips
- Get up and walk after surgery as soon as allowed
- Wear compression stockings if recommended
- Take blood thinners if prescribed`,
      keyTerms: [
        { term: 'Pulmonary embolism', definition: 'A blood clot that has traveled to and blocked a blood vessel in the lungs' },
        { term: 'Deep vein thrombosis', definition: 'A blood clot in a deep vein, usually in the leg, that can travel to the lungs' },
        { term: 'Blood thinner', definition: 'Medicine that helps prevent blood clots from forming or growing' },
        { term: 'Thrombolytic', definition: 'A powerful medicine that dissolves blood clots in emergencies' },
      ],
      analogies: [
        'Think of a PE like a blockage in the air vents of a building - fresh air cannot get through to where it is needed',
        'The lung blood vessels are like a delivery route - a clot is like a traffic jam blocking the trucks',
        'Your heart trying to push blood past a PE is like trying to blow through a blocked straw',
      ],
      examples: [
        'A woman who just had hip surgery suddenly becomes short of breath and has chest pain',
        'A traveler who just got off a long flight feels his heart racing and cannot catch his breath',
        'A person with a history of leg clots develops sharp chest pain when breathing deeply',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary embolism results when venous thrombi embolize to the pulmonary circulation, causing ventilation-perfusion mismatch, right heart strain, and potentially cardiovascular collapse, requiring rapid diagnosis with CT angiography and anticoagulation therapy.',
      explanation: `**Pathophysiology:**

PE occurs when a thrombus (usually from DVT) embolizes to the pulmonary arterial system.

*Consequences:*
1. **V/Q Mismatch**: Ventilated alveoli not perfused leads to hypoxemia
2. **Dead Space Ventilation**: Wasted ventilation to non-perfused lung
3. **Right Heart Strain**: Increased pulmonary vascular resistance causes RV pressure overload
4. **Hemodynamic Collapse**: Massive PE can cause cardiogenic shock and death

**Risk Factors:**
Same as DVT (Virchow's triad):
- Stasis: Immobility, travel, bed rest
- Endothelial injury: Surgery, trauma, catheters
- Hypercoagulability: Cancer, pregnancy, thrombophilia, estrogen use

**Clinical Presentation:**

*Symptoms:*
- Dyspnea (most common, 80%)
- Pleuritic chest pain (50%)
- Cough (20%)
- Hemoptysis (uncommon)
- Syncope (suggests massive PE)

*Signs:*
- Tachypnea
- Tachycardia
- Hypoxemia
- Hypotension (in massive PE)
- Elevated JVP, RV heave (right heart strain)
- Unilateral leg swelling (concurrent DVT)

**Diagnosis:**

*Clinical Prediction Rules:*
- Wells Score for PE: Estimates pretest probability
- PERC Rule: If all criteria negative in low-risk patient, PE excluded without testing

*D-dimer:*
- High sensitivity, low specificity
- Use age-adjusted cutoff (age x 10 if >50 years)
- If negative and low probability, PE ruled out

*Imaging:*
- CT Pulmonary Angiography (CTPA): Test of choice
- Shows filling defects in pulmonary arteries
- V/Q Scan: Alternative when CTPA contraindicated (contrast allergy, renal failure, pregnancy)

*Additional Studies:*
- ECG: Sinus tachycardia most common; S1Q3T3 classic but uncommon
- Troponin: Elevated suggests RV strain (worse prognosis)
- BNP/NT-proBNP: Elevated indicates right heart strain
- Echocardiography: RV dilation and dysfunction

**Treatment:**
- Anticoagulation: Same agents as DVT (DOACs, LMWH, warfarin)
- Thrombolysis: For massive PE with hemodynamic instability
- IVC filter: When anticoagulation absolutely contraindicated
- Surgical embolectomy: Last resort for massive PE`,
      keyTerms: [
        { term: 'V/Q mismatch', definition: 'Imbalance between ventilation and blood flow in the lungs causing low oxygen' },
        { term: 'Right heart strain', definition: 'Increased workload on the right ventricle due to blocked lung vessels' },
        { term: 'CTPA', definition: 'CT pulmonary angiography; the primary imaging test to diagnose PE' },
        { term: 'Wells Score', definition: 'Clinical prediction tool estimating the probability of PE' },
        { term: 'PERC rule', definition: 'Criteria that, if all negative, safely exclude PE without further testing' },
        { term: 'Massive PE', definition: 'PE causing sustained low blood pressure or requiring medications to maintain BP' },
      ],
      analogies: [
        'V/Q mismatch is like having a room with air conditioning but no air vents - the air is there but cannot get where it needs to go',
        'The right ventricle struggling against PE is like trying to pump water through a partially blocked pipe',
        'CTPA is like a 3D map showing exactly where the traffic jam is in the lung blood vessels',
      ],
      examples: [
        'A patient post-hip surgery with sudden dyspnea, tachycardia, and hypoxemia is found to have bilateral PE on CTPA',
        'A young woman on oral contraceptives presents with pleuritic chest pain and a positive D-dimer',
        'An elderly patient with syncope and hypotension is diagnosed with massive PE causing right heart strain',
      ],
    },
    3: {
      level: 3,
      summary: 'PE management requires rapid risk stratification to identify patients needing advanced therapies, with severity classification guiding decisions about thrombolysis, catheter-directed therapy, and intensity of monitoring.',
      explanation: `**Risk Stratification:**

*Hemodynamic Status:*
- **High-risk (Massive) PE**: Sustained hypotension (SBP <90 mmHg for >15 min), need for vasopressors, or cardiac arrest
- **Intermediate-risk (Submassive) PE**: Normotensive with RV dysfunction or biomarker elevation
- **Low-risk PE**: Normotensive without RV dysfunction or biomarker elevation

*Prognostic Scores:*
- PESI (Pulmonary Embolism Severity Index): Predicts 30-day mortality
- sPESI (Simplified PESI): Age >80, cancer, heart failure, pulse >=110, SBP <100, O2 sat <90%
- sPESI = 0: Low risk, outpatient management may be appropriate

*Markers of RV Dysfunction:*
- Echo: RV dilation (RV:LV ratio >0.9), McConnell sign (RV free wall hypokinesis with apical sparing)
- CTPA: RV enlargement, septal bowing
- BNP/NT-proBNP elevation

*Markers of Myocardial Injury:*
- Troponin elevation indicates worse prognosis
- Combined with RV dysfunction defines intermediate-high risk

**Treatment by Risk:**

*Low-Risk PE:*
- Anticoagulation with DOAC (preferred) or LMWH/warfarin
- Consider early discharge or outpatient management if:
  - sPESI = 0
  - No severe comorbidities
  - Adequate support system
  - Follow-up ensured

*Intermediate-Low Risk:*
- Anticoagulation
- Hospital admission
- Monitoring for deterioration

*Intermediate-High Risk:*
- Anticoagulation
- ICU or step-down admission
- Close monitoring
- Consider escalation if deterioration:
  - "Rescue" thrombolysis if develops hemodynamic instability
  - Catheter-directed therapy at experienced centers

*High-Risk (Massive) PE:*
- Immediate resuscitation
- Systemic thrombolysis: Alteplase 100 mg over 2 hours (or accelerated regimen)
- If contraindication to lysis: Surgical embolectomy or catheter-based intervention
- Massive transfusion and ECMO as bridge in extremis

**Thrombolysis Considerations:**

*Systemic Thrombolysis:*
- Indicated for high-risk PE
- Controversial for intermediate-high risk (PEITHO trial: reduced hemodynamic decompensation but increased major bleeding/stroke)

*Contraindications:*
- Absolute: Prior intracranial hemorrhage, ischemic stroke within 3 months, active bleeding, brain tumor
- Relative: Recent surgery, uncontrolled hypertension, pregnancy, recent non-hemorrhagic stroke

*Catheter-Directed Therapy (CDT):*
- Lower thrombolytic doses may reduce bleeding
- Options: EKOS (ultrasound-accelerated), aspiration thrombectomy
- Consider for intermediate-high risk at experienced centers
- May be preferred when systemic lysis contraindicated`,
      keyTerms: [
        { term: 'Submassive PE', definition: 'Normotensive PE with right ventricular dysfunction or elevated cardiac biomarkers' },
        { term: 'PESI', definition: 'Pulmonary Embolism Severity Index; validated score predicting 30-day mortality' },
        { term: 'McConnell sign', definition: 'Echo finding of RV free wall hypokinesis with preserved apex, suggestive of acute PE' },
        { term: 'Systemic thrombolysis', definition: 'IV administration of clot-dissolving drugs for life-threatening PE' },
        { term: 'Rescue thrombolysis', definition: 'Thrombolysis given when initially stable patient deteriorates' },
        { term: 'EKOS', definition: 'Ultrasound-assisted catheter-directed thrombolysis system' },
      ],
      clinicalNotes: 'Do not delay anticoagulation for definitive imaging if clinical suspicion is high. Troponin and BNP help stratify risk even with normal blood pressure. Low-risk patients (sPESI = 0) may be candidates for outpatient treatment after initial observation. The decision for thrombolysis in intermediate-high risk PE requires careful benefit-risk assessment. Catheter-directed therapy is increasingly available but requires specialized centers and expertise.',
    },
    4: {
      level: 4,
      summary: 'Contemporary PE management integrates multimodal risk assessment, individualized anticoagulation strategies, emerging catheter-based interventions, and systematic approaches to chronic thromboembolic complications.',
      explanation: `**Advanced Risk Assessment:**

*Multimodal Approach:*
1. Clinical: PESI/sPESI for mortality prediction
2. Imaging: RV dysfunction on echo or CTPA
3. Biomarkers: Troponin, BNP/NT-proBNP
4. Clot burden: Central vs. peripheral location

*Combined Risk Categories (ESC 2019):*
| Category | Hemodynamics | PESI/sPESI | RV Dysfunction | Troponin | Management |
|----------|--------------|------------|----------------|----------|------------|
| High | Unstable | - | + | + | Thrombolysis/intervention |
| Intermediate-High | Stable | III-V or >=1 | + | + | Anticoag + close monitoring |
| Intermediate-Low | Stable | III-V or >=1 | + OR + | Not both | Anticoagulation + observation |
| Low | Stable | I-II or 0 | - | - | Consider outpatient |

**Catheter-Based Interventions:**

*Technologies:*
- Ultrasound-assisted thrombolysis (EKOS): Accelerates fibrinolysis with lower doses
- Aspiration thrombectomy: AngioVac, Indigo, FlowTriever
- Mechanical fragmentation with or without local thrombolysis

*Evidence:*
- ULTIMA trial: EKOS + heparin improved RV function vs. heparin alone
- SEATTLE II: EKOS reduced RV dilation in massive/submassive PE
- OPTALYSE PE: Lower dose/shorter duration EKOS effective
- EXTRACT-PE: FlowTriever mechanical thrombectomy reduced RV/LV ratio

*Patient Selection:*
- Intermediate-high risk with contraindication to systemic lysis
- Intermediate-high risk as alternative to systemic lysis
- High-risk PE when systemic lysis fails or contraindicated

*Multidisciplinary PE Response Teams (PERT):*
- Rapid convening of specialists (pulmonary, cardiology, interventional, surgery, hematology)
- Standardized assessment and treatment protocols
- Improved outcomes in some studies

**Special Populations:**

*Cancer-Associated PE:*
- LMWH traditionally preferred (CLOT trial)
- DOACs now acceptable for non-GI cancers (Hokusai-VTE Cancer, SELECT-D)
- Consider bleeding risk with GI/GU malignancies

*Pregnancy:*
- Diagnosis: D-dimer elevated in pregnancy; ultrasound for DVT first
- V/Q preferred over CTPA (less fetal radiation)
- CTPA if V/Q indeterminate or unavailable
- Treatment: LMWH throughout (dose-adjusted)

*Renal Impairment:*
- Avoid DOACs if CrCl <30 (except apixaban at reduced dose)
- LMWH requires dose adjustment and monitoring
- UFH or warfarin alternatives

**Chronic Thromboembolic Pulmonary Hypertension (CTEPH):**

*Pathophysiology:*
- Incomplete resolution of acute PE
- Organized thrombus causes chronic pulmonary vascular obstruction
- Progressive pulmonary hypertension and right heart failure
- Incidence: 2-4% of acute PE survivors

*Diagnosis:*
- Suspect if persistent dyspnea despite anticoagulation
- V/Q scan: Mismatched perfusion defects (screening)
- Right heart catheterization: Confirms pulmonary hypertension
- Pulmonary angiography: Defines surgical anatomy

*Treatment:*
- Anticoagulation (lifelong)
- Pulmonary thromboendarterectomy (PTE): Potentially curative
- Balloon pulmonary angioplasty: For non-surgical candidates
- Riociguat: Medical therapy for inoperable CTEPH or residual PH post-surgery`,
      keyTerms: [
        { term: 'PERT', definition: 'Pulmonary Embolism Response Team; multidisciplinary group for rapid PE management decisions' },
        { term: 'FlowTriever', definition: 'Mechanical aspiration thrombectomy device for PE treatment' },
        { term: 'CTEPH', definition: 'Chronic thromboembolic pulmonary hypertension; long-term complication of PE' },
        { term: 'Pulmonary thromboendarterectomy', definition: 'Surgical removal of organized chronic pulmonary thrombus; curative for CTEPH' },
        { term: 'Riociguat', definition: 'Soluble guanylate cyclase stimulator approved for CTEPH treatment' },
        { term: 'Balloon pulmonary angioplasty', definition: 'Catheter-based treatment for inoperable CTEPH' },
      ],
      clinicalNotes: 'PERT activation improves systematic evaluation and appropriate therapy selection. Catheter-directed therapies are increasingly favored for intermediate-high risk PE, especially with systemic lysis contraindications. Monitor PE survivors for CTEPH symptoms (dyspnea, exercise intolerance) - early referral to PH center if suspected. Extended anticoagulation decisions require assessment of both recurrence and bleeding risk using validated tools.',
    },
    5: {
      level: 5,
      summary: 'Expert PE management encompasses complex resuscitation strategies, nuanced decisions on advanced interventions, precision approaches to anticoagulation, and comprehensive longitudinal care for PE survivors.',
      explanation: `**Critical Care Management of Massive PE:**

*Initial Resuscitation:*
- Avoid excessive fluid resuscitation (worsens RV dilation)
- Conservative fluid challenge (250-500 mL) if hypotensive
- Vasopressors: Norepinephrine preferred (supports systemic and coronary perfusion)
- Consider inotropes: Dobutamine if RV failure (use cautiously - may worsen hypotension)

*Mechanical Support:*
- VA-ECMO: Bridge to thrombolysis, embolectomy, or recovery
- Indications: Refractory cardiogenic shock, cardiac arrest
- Right-sided support (Impella RP, Protek Duo) emerging
- Requires specialized centers and expertise

*Cardiac Arrest:*
- Standard ACLS with consideration of PE etiology
- Thrombolysis can be given during CPR
- tPA 50 mg bolus; continue CPR for 60-90 minutes after lysis
- ECPR (ECMO-CPR) where available

**Advanced Intervention Selection:**

*Systemic vs. Catheter-Directed Thrombolysis:*

| Factor | Systemic | CDT |
|--------|----------|-----|
| Speed | Faster to administer | Requires cath lab |
| Bleeding | Higher ICH risk | Possibly lower (reduced dose) |
| Efficacy | Proven mortality benefit in massive PE | Improving RV function data |
| Availability | Universal | Requires expertise |

*Surgical Embolectomy:*
- Indications: Failed thrombolysis, contraindication to lysis, clot-in-transit
- Mortality declining with improved surgical techniques
- Requires cardiopulmonary bypass
- May be combined with ECMO support

*Clot-in-Transit:*
- Thrombus seen in right heart chambers or crossing patent foramen ovale
- High mortality without treatment
- Treatment: Systemic thrombolysis, surgical embolectomy, or catheter intervention
- No randomized data; management individualized

**Precision Anticoagulation:**

*Duration Decision Framework:*
1. First provoked VTE with major transient risk: 3 months
2. First provoked VTE with minor transient risk: Consider extended
3. First unprovoked VTE: Minimum 3 months, then assess for extended
4. Recurrent VTE: Extended/indefinite (high recurrence risk)
5. Cancer-associated: Continue while cancer active

*Extended Therapy Options:*
- Full-dose anticoagulation: Maximum recurrence protection
- Reduced-dose DOAC: Balance of efficacy and safety
  - Apixaban 2.5 mg BID (AMPLIFY-EXT)
  - Rivaroxaban 10 mg daily (EINSTEIN-CHOICE)
- Aspirin: Inferior to anticoagulants but option if declining continued anticoagulation

*Recurrence and Bleeding Risk Assessment:*
- DASH score, Vienna model for recurrence
- HAS-BLED for bleeding
- Shared decision-making essential

**Longitudinal Care:**

*Post-PE Syndrome:*
- Persistent symptoms (dyspnea, exercise intolerance) in 50% at 6 months
- Causes: Deconditioning, RV dysfunction, pulmonary vascular remodeling, anxiety
- Evaluation: PFTs, echocardiography, cardiopulmonary exercise testing
- Treatment: Rehabilitation, optimization of comorbidities, psychological support

*CTEPH Surveillance:*
- All PE survivors should be assessed at 3-6 months
- Persistent dyspnea: Echocardiography, consider V/Q scan
- Early referral to CTEPH expert center if suspected
- Timing of PTE surgery: After 3 months anticoagulation (some acute PE)

*Quality Metrics:*
- Anticoagulation initiated within 24 hours
- Appropriate risk stratification documented
- Duration decision explicitly addressed
- Follow-up arranged for all PE survivors
- CTEPH screening at follow-up visit

**Emerging Areas:**

*Artificial Intelligence:*
- Automated PE detection on CTPA
- Risk stratification algorithms
- Outcome prediction models

*Novel Therapies:*
- Factor XI inhibitors: Reduced bleeding potential
- Extended half-life heparins
- Reversal agents expanding (andexanet alfa for factor Xa inhibitors)

*Patient-Reported Outcomes:*
- PE-QoL instruments
- Functional recovery assessment
- Shared decision-making tools`,
      keyTerms: [
        { term: 'VA-ECMO', definition: 'Veno-arterial extracorporeal membrane oxygenation; mechanical circulatory support for cardiogenic shock' },
        { term: 'ECPR', definition: 'Extracorporeal cardiopulmonary resuscitation; ECMO initiated during cardiac arrest' },
        { term: 'Clot-in-transit', definition: 'Mobile thrombus in right heart chambers, high mortality without treatment' },
        { term: 'Post-PE syndrome', definition: 'Persistent symptoms and functional impairment after PE despite anticoagulation' },
        { term: 'PE-QoL', definition: 'Pulmonary Embolism Quality of Life; patient-reported outcome measure for PE survivors' },
      ],
      clinicalNotes: `**Emergency Management Pearls:**
- Do not delay anticoagulation for imaging if strong suspicion
- Hypotension from PE: Cautious fluids, early vasopressors
- Cardiac arrest with suspected PE: Consider empiric thrombolysis
- PERT activation streamlines complex decision-making

**Intervention Decision-Making:**
- Massive PE: Systemic thrombolysis first-line unless contraindicated
- Intermediate-high risk: CDT increasingly favored, especially with lysis contraindications
- Surgical embolectomy: Requires experienced center; mortality improving

**Long-Term Care:**
- All PE survivors need duration decision documented
- Assess for CTEPH at 3-6 month follow-up
- Address post-PE syndrome with rehabilitation and psychological support
- Extended anticoagulation with reduced-dose DOACs offers favorable risk-benefit

**Documentation Requirements:**
- Risk stratification category
- Anticoagulation choice rationale
- Duration decision and reassessment plan
- Patient education on warning signs`,
    },
  },
  media: [
    {
      id: 'pe-risk-stratification',
      type: 'diagram',
      filename: 'pe-risk-stratification.svg',
      title: 'PE Risk Stratification Algorithm',
      description: 'Flow diagram for classifying PE severity and guiding treatment intensity',
    },
    {
      id: 'pe-ctpa-findings',
      type: 'image',
      filename: 'pe-ctpa-example.jpg',
      title: 'CTPA Findings in PE',
      description: 'Example of filling defects in pulmonary arteries on CT angiography',
    },
  ],
  citations: [
    'Konstantinides SV, Meyer G, Becattini C, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41(4):543-603.',
    'Stevens SM, Woller SC, Kreuziger LB, et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline and Expert Panel Report. Chest. 2021;160(6):e545-e608.',
    'Meyer G, Vicaut E, Danays T, et al. Fibrinolysis for Patients with Intermediate-Risk Pulmonary Embolism. N Engl J Med. 2014;370(15):1402-1411.',
    'Piazza G, Hohlfelder B, Jaff MR, et al. A Prospective, Single-Arm, Multicenter Trial of Ultrasound-Facilitated, Catheter-Directed, Low-Dose Fibrinolysis for Acute Massive and Submassive Pulmonary Embolism: The SEATTLE II Study. JACC Cardiovasc Interv. 2015;8(10):1382-1392.',
  ],
  crossReferences: [
    'hematology-deep-vein-thrombosis',
    'hematology-thrombophilia',
    'hematology-anticoagulation',
    'hematology-coagulation-studies',
  ],
  tags: {
    systems: ['hematology', 'pulmonary', 'cardiovascular'],
    topics: ['thrombosis', 'PE', 'anticoagulation', 'critical care'],
    keywords: ['pulmonary embolism', 'PE', 'blood clot', 'thrombolysis', 'CTPA', 'anticoagulation', 'CTEPH'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default pulmonaryEmbolism;
