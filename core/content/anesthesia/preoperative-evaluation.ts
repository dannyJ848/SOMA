/**
 * Preoperative Evaluation
 *
 * ASA classification, risk assessment, and preoperative
 * optimization for anesthesia and surgery.
 */

import { EducationalContent } from '../types';

export const preoperativeEvaluationContent: EducationalContent = {
  id: 'anesthesia-preoperative-evaluation',
  type: 'process',
  name: 'Preoperative Anesthesia Evaluation',
  alternateNames: ['Pre-Anesthesia Assessment', 'Pre-Op Eval', 'Anesthesia Consultation'],

  levels: {
    1: {
      level: 1,
      summary: 'Before surgery, an anesthesia doctor evaluates your health to make sure you\'re ready for anesthesia and to plan the safest approach.',
      explanation: `Before you have surgery, an anesthesiologist will meet with you to check your health and plan your anesthesia. This helps keep you safe during surgery.

**What the Anesthesia Doctor Does:**

**Reviews Your Health:**
- Asks about any medical problems you have
- Checks what medicines you take
- Asks about allergies, especially to medicines
- Asks if anyone in your family had problems with anesthesia

**Checks Your Heart and Lungs:**
- Listens to your heart and lungs
- Checks your blood pressure
- May order heart tests (EKG)
- May order blood tests

**Examines Your Airway:**
- Looks at your mouth and throat
- Checks how easy it will be to help you breathe during surgery

**Asks Important Questions:**
- Have you had surgery before? How did it go?
- Do you snore or have sleep apnea?
- Do you smoke or use alcohol?
- When did you last eat or drink?

**ASA Classification:**

The ASA system ranks how healthy you are before surgery:

- **ASA I**: Completely healthy person
- **ASA II**: Mild health problems (like controlled high blood pressure)
- **ASA III**: Severe health problems (like heart disease)
- **ASA IV**: Very sick - constant threat to life
- **ASA V**: Not expected to survive without surgery
- **ASA VI**: Brain dead (organ donor)

**Important Instructions:**

**Fasting (No Eating or Drinking):**
- You can\'t eat before surgery (usually 8 hours)
- You may have clear liquids until 2 hours before
- An empty stomach prevents choking during anesthesia

**Medications:**
- Some medicines to take the morning of surgery with a sip of water
- Some medicines to stop before surgery
- Your doctor will give you specific instructions

**What to Bring:**
- List of all your medicines with doses
- Insurance information
- Someone to drive you home
- Comfortable clothes

**Questions to Ask Your Anesthesiologist:**
- What type of anesthesia will I have?
- What are the risks for me?
- How long will I be in the recovery room?
- Will I have pain after surgery? How will it be treated?

**Special Situations:**

**Children:**
- Special considerations for age and size
- Parents may be allowed to stay until child is asleep
- Different dosing for medicines

**Pregnant Women:**
- Extra care for the baby
- Some medicines are safer than others
- Special positioning to protect the baby

**Older Adults:**
- May need more tests
- More sensitive to anesthesia
- May have more health problems to consider

**People with Chronic Illness:**
- Heart disease
- Lung disease (asthma, COPD)
- Diabetes
- Kidney disease
- Liver disease

These people need special planning to stay safe.

This evaluation helps your anesthesia team choose the safest anesthesia for you!`,
      keyTerms: [
        { term: 'anesthesiologist', definition: 'A doctor who specializes in giving anesthesia and keeping patients safe during surgery' },
        { term: 'EKG', definition: 'A test that records the electrical activity of your heart; used to check heart health' },
        { term: 'ASA classification', definition: 'A system that ranks how healthy a patient is before surgery, from ASA I (healthy) to ASA VI (brain dead)' },
        { term: 'fasting', definition: 'Not eating or drinking for a period of time before surgery to prevent complications' },
        { term: 'sleep apnea', definition: 'A condition where breathing stops and starts during sleep; important for anesthesia planning' },
      ],
      analogies: [
        'Preoperative evaluation is like a pilot checking the plane before takeoff - making sure everything is safe and ready.',
        'The ASA classification is like a traffic light system - green means go, yellow means caution, red means high risk.',
      ],
      examples: [
        'A healthy 30-year-old having appendix surgery is ASA I - lowest risk.',
        'A 65-year-old with controlled high blood pressure is ASA II - slightly higher risk but still safe.',
        'Someone with severe heart failure is ASA III or IV - needs special care and planning.',
      ],
      patientCounselingPoints: [
        'Write down all your medicines and doses, including vitamins and supplements.',
        'Follow fasting instructions exactly - having food in your stomach during surgery is dangerous.',
        'Tell your doctor about any previous problems with anesthesia in your family.',
      ],
    },
    2: {
      level: 2,
      summary: 'Preoperative evaluation assesses patient fitness for surgery and anesthesia, identifies risk factors, and plans optimal perioperative management.',
      explanation: `Preoperative evaluation is a systematic assessment to optimize patients for surgery and develop an individualized anesthetic plan.

## Components of Preoperative Evaluation

### Medical History
- Past surgical and anesthetic experiences
- Current medications (prescription, OTC, supplements)
- Allergies (medications, latex, iodine)
- Chronic conditions (CAD, COPD, diabetes, renal disease)
- Bleeding history or coagulation disorders
- Family history of anesthesia complications (malignant hyperthermia)

### Physical Examination
- Vital signs (BP, HR, RR, temperature, SpO2)
- Airway assessment (Mallampati, mouth opening, neck mobility)
- Cardiac examination
- Pulmonary examination
- Assessment of surgical site

### Airway Assessment
- **Mallampati Classification**:
  - Class I: Tonsils, pillars, uvula visible
  - Class II: Uvula, pillars visible
  - Class III: Soft palate, base of uvula visible
  - Class IV: Hard palate only visible
- **Thyromental distance**: <6 cm suggests difficult airway
- **Interincisor distance**: <3 cm suggests limited mouth opening
- **Neck extension**: <35 degrees suggests difficult intubation

### Laboratory Testing
Not all patients need testing. Order based on:
- Type of surgery (minor vs. major)
- Patient age
- Comorbidities
- Medications

**Common tests:**
- CBC: Anemia, infection
- Metabolic panel: Electrolytes, kidney function
- Coagulation studies: Bleeding risk
- EKG: Patients >50 or cardiac disease
- Chest X-ray: Patients with lung disease

### Cardiovascular Risk Assessment
**Revised Cardiac Risk Index (RCRI):**
One point each for:
1. High-risk surgery (intraperitoneal, intrathoracic, suprainguinal vascular)
2. History of ischemic heart disease
3. History of heart failure
4. History of cerebrovascular disease
5. Diabetes requiring insulin
6. Creatinine >2.0 mg/dL

| Score | Cardiac Complications |
|-------|----------------------|
| 0     | 0.4%                 |
| 1     | 1.0%                 |
| 2     | 2.4%                 |
| ≥3    | 5.4%                 |

### Functional Capacity
Can the patient:
- Climb two flights of stairs? (≥4 METs)
- Walk up a hill? (≥4 METs)
- Do heavy housework? (≥4 METs)
- Run a short distance? (≥10 METs)

Poor functional capacity (<4 METs) increases perioperative risk.

## Fasting Guidelines (NPO Status)

- **Clear liquids**: Stop 2 hours before surgery
- **Breast milk**: Stop 4 hours before surgery
- **Light meal**: Stop 6 hours before surgery
- **Full meal**: Stop 8 hours before surgery

Clear liquids include: water, clear juices, coffee/tea without milk, carbonated beverages.

## Medication Management

**Continue:**
- Most cardiac medications (discuss with doctor)
- Anti-hypertensives (with sip of water)
- Asthma inhalers

**Stop before surgery:**
- **Warfarin**: Stop 5 days before (check INR)
- **DOACs**: Stop 2-3 days before
- **NSAIDs**: Stop 3-7 days before (varies by drug)
- **Herbal supplements**: Stop 1-2 weeks before

**Diabetes medications:**
- Oral hypoglycemics: Hold morning of surgery
- Insulin: Dose adjustment needed

## ASA Physical Status Classification

| Class | Description | Example |
|-------|-------------|---------|
| ASA I | Healthy, no systemic disease | Healthy 30-year-old |
| ASA II | Mild systemic disease, no limitation | Controlled HTN, smoker |
| ASA III | Severe systemic disease, definite limitation | CHF, COPD, diabetes |
| ASA IV | Severe disease, constant threat to life | Unstable angina, renal failure |
| ASA V | Moribund, not expected to survive without surgery | Ruptured AAA, severe trauma |
| ASA VI | Brain-dead organ donor | Organ procurement |

Note: ASA classification is NOT a surgical risk score. It describes health status, not procedure risk.

## Special Considerations

**Obstructive Sleep Apnea:**
- Screen all patients (STOP-BANG questionnaire)
- Higher risk of respiratory complications
- May need CPAP postoperatively
- Regional anesthesia when possible

**Pregnancy:**
- First trimester: Avoid non-urgent surgery
- Left uterine displacement
- Avoid drugs teratogenic to fetus
- Lower anesthetic requirements

**Substance Use:**
- Alcohol: Tolerance to anesthetics, withdrawal risk
- Smoking: Delayed wound healing, respiratory risk
- Opioids: Tolerance, hyperalgesia, withdrawal risk
- Stimulants: Cardiovascular instability

**Allergies:**
- True allergies vs. side effects
- Latex allergy: Use latex-free equipment
- Local anesthetic allergy: Use alternatives (ester vs. amide)
- Antibiotic allergies: Choose alternatives`,
      keyTerms: [
        { term: 'Mallampati classification', definition: 'Airway assessment system based on visibility of oral structures; predicts difficult intubation' },
        { term: 'RCRI', definition: 'Revised Cardiac Risk Index - validated tool for predicting cardiac complications after non-cardiac surgery' },
        { term: 'METs', definition: 'Metabolic equivalents - measure of functional capacity; 1 MET = resting energy expenditure' },
        { term: 'NPO', definition: 'Nil per os (Latin) - nothing by mouth; fasting status before surgery' },
        { term: 'DOACs', definition: 'Direct oral anticoagulants - newer blood thinners including apixaban, rivaroxaban, dabigatran' },
      ],
      analogies: [
        'RCRI is like a credit score for your heart - it predicts the likelihood of cardiac complications.',
        'Functional capacity measured in METs is like measuring how much exercise you can do.',
      ],
      examples: [
        'A 70-year-old with diabetes and kidney disease having colon surgery: RCRI score 2-3, cardiac risk 2.4-5.4%.',
        'A patient taking warfarin for atrial fibrillation needs to stop 5 days before surgery and bridge with heparin if high stroke risk.',
        'Someone with severe OSA needs CPAP in recovery and may need to stay in the hospital longer.',
      ],
    },
    3: {
      level: 3,
      summary: 'Preoperative evaluation uses validated risk stratification tools, functional assessment, and targeted testing to optimize patients for surgery and anesthesia.',
      explanation: `## Risk Stratification Tools

**American College of Surgeons NSQIP Risk Calculator:**
- Online tool using 21 patient variables
- Predicts: Discharge destination, complications, mortality
- Patient-specific risk assessment
- Useful for informed consent discussions

**Revised Cardiac Risk Index (RCRI):**
Lee criteria for perioperative cardiac events:
1. High-risk surgery type
2. Ischemic heart disease
3. Congestive heart failure
4. Cerebrovascular disease
5. Diabetes requiring insulin
6. Preoperative creatinine >2 mg/dL

Scores ≥3 have >5% risk of major cardiac event.

**Functional Capacity Assessment:**
Duke Activity Status Index converts activities to METs:
- Can you care for yourself? (2.6 METs)
- Climb a flight of stairs? (4 METs)
- Walk up a hill? (5 METs)
- Run a short distance? (8 METs)
- Do heavy labor? (10+ METs)

Poor functional capacity (<4 METs) warrants further cardiac testing if undergoing vascular surgery or have multiple risk factors.

## Cardiovascular Evaluation

**AHA/ACC Guidelines for Perioperative Cardiovascular Evaluation:**

**Step 1: Determine urgency**
- Emergency: Proceed to OR, manage problems intraoperatively
- Urgent/elective: Continue evaluation

**Step 2: Assess active cardiac conditions**
- Unstable coronary syndrome
- Decompensated heart failure
- Significant arrhythmias
- Severe valvular disease
- If present: Consider postponement and optimization

**Step 3: Evaluate surgical risk**
- Low risk: Superficial surgery, endoscopy
- Intermediate risk: Intraperitoneal, orthopedic, prostate
- High risk: Aortic, major vascular, prolonged surgery

**Step 4: Functional capacity**
- ≥4 METs: No further testing usually needed
- <4 METs + high-risk surgery + ≥1 risk factor: Consider stress testing

**Step 5: Test if indicated**
- Stress test: Exercise or pharmacologic (dobutamine, dipyridamole)
- Coronary angiography: If stress test positive
- Revascularization: Only if would be indicated anyway (not prophylactic)

## Pulmonary Evaluation

**Risk Factors for Postoperative Pulmonary Complications:**
- COPD
- Age >60
- Functional dependence
- ASA class ≥II
- Smoking
- High surgical risk (upper abdominal, thoracic)
- Prolonged surgery (>3 hours)

**Preoperative Pulmonary Testing:**
- Spirometry: Not routine; only if undiagnosed pulmonary disease
- Chest X-ray: Only if cardiopulmonary disease or thoracic surgery
- ABG: Only if severe lung disease

**Smoking Cessation:**
- Ideal: Quit 8 weeks preoperatively
- Any cessation beneficial
- 24-48 hours abstinence reduces carboxyhemoglobin
- Provide counseling and nicotine replacement

## Pulmonary Risk Reduction
- Preoperative smoking cessation
- Incentive spirometry teaching
- Regional anesthesia when possible
- Lung-protective ventilation intraoperatively
- Early ambulation postoperatively

## Renal Evaluation

**Chronic Kidney Disease Staging:**
| Stage | GFR | Anesthetic Considerations |
|-------|-----|--------------------------|
| 1 | >90 | Standard |
| 2 | 60-89 | Dose adjust some drugs |
| 3 | 30-59 | Avoid nephrotoxins, dose adjust |
| 4 | 15-29 | Significant dose adjustment |
| 5 | <15 or dialysis | Dial-dependent, major drug adjustments |

**Anesthetic Implications:**
- Avoid nephrotoxins (NSAIDs, ACE inhibitors)
- Dose adjust renally cleared drugs
- Continue dialysis schedule perioperatively
- Avoid hyperkalemia

## Metabolic and Endocrine Evaluation

**Diabetes:**
- HbA1c target: <7-8% for elective surgery
- Hold oral hypoglycemics morning of surgery
- Continue basal insulin (reduce dose)
- Check glucose every hour intraoperatively
- Target intraoperative glucose: 140-180 mg/dL

**Thyroid Disease:**
- **Hypothyroid**: May need increased dose if severe
- **Hyperthyroid**: Risk of thyroid storm; postpone if uncontrolled
- **Thyroid storm**: Medical emergency; beta-blockers, steroids, iodide

**Adrenal Insufficiency:**
- Stress dose steroids for chronic steroid users
- Hydrocortisone 25-50 mg IV pre-incision, then q8h
- Continue for 24-72 hours then taper

## Hematologic Evaluation

**Anemia:**
- Preoperative Hb target: >10 g/dL for major surgery
- Iron supplementation (ferrous sulfate 325 mg TID)
- EPO for patients refusing transfusion
- Transfuse if symptomatic or Hb <7 g/dL

**Coagulation Assessment:**
- History of abnormal bleeding
- Anticoagulant management:
  - Warfarin: Stop 5 days prior, check INR
  - DOACs: Stop 2-3 days prior
  - Antiplatelets: Varies by drug and procedure
- Bridging: LMWH for high-risk patients

## Specialized Testing

**Echocardiography:**
- Preoperative echo if:
  - Murmur with symptoms
  - Dyspnea of unknown origin
  - Known heart failure with worsening symptoms
  - Severe valve disease without recent evaluation

**Pulmonary Function Tests:**
- Not routine
- Consider if:
  - Undiagnosed respiratory symptoms
  - Lung resection planning
  - Major surgery with severe COPD

**Carotid Duplex:**
- History of stroke/TIA
- Carotid bruit in vascular surgery patient
- Prior to cardiac surgery

## Preoperative Optimization

**Prehabilitation:**
- Exercise training (4-6 weeks pre-op)
- Nutritional optimization
- Psychological preparation
- Smoking cessation
- Evidence for improved outcomes in major surgery

**Anemia Management:**
- Iron supplementation (oral or IV)
- EPO for appropriate patients
- Reduce allogeneic transfusion

**Nutritional Assessment:**
- Albumin <3.0 g/dL increases complications
- Preoperative nutritional support
- Immunonutrition for GI surgery

**Cardiac Optimization:**
- Continue beta-blockers
- Continue statins
- Antiplatelet management
- Revascularization: Only if indicated regardless of surgery`,
      keyTerms: [
        { term: 'NSQIP', definition: 'National Surgical Quality Improvement Program - ACS database and risk calculator for surgical outcomes' },
        { term: 'Duke Activity Status Index', definition: 'Questionnaire converting activities to metabolic equivalents (METs) for functional capacity assessment' },
        { term: 'GFR', definition: 'Glomerular Filtration Rate - measure of kidney function; used to stage chronic kidney disease' },
        { term: 'prehabilitation', definition: 'Pre-surgical optimization through exercise, nutrition, and psychological preparation to improve postoperative outcomes' },
        { term: 'immunonutrition', definition: 'Special nutritional supplements containing arginine, omega-3 fatty acids, and nucleotides to enhance immune function' },
      ],
      clinicalNotes: 'Stress testing rarely changes management - proceed with surgery if functional capacity ≥4 METs unless cardiac symptoms uncontrolled. Routine preoperative testing in healthy patients undergoing low-risk surgery is not indicated. The 2021 AHA/ACC guidelines emphasize that coronary revascularization before non-cardiac surgery rarely improves outcomes.',
    },
    4: {
      level: 4,
      summary: 'Preoperative evaluation integrates multidisciplinary assessment, advanced risk stratification tools, and individualized optimization strategies to minimize perioperative morbidity and mortality.',
      explanation: `## Advanced Risk Assessment

**Multidisciplinary Preoperative Clinics:**
- Anesthesiology, surgery, medicine, nursing collaboration
- Standardized protocols for common conditions
- Reduced day-of-surgery cancellations
- Improved patient satisfaction and outcomes

**Frailty Assessment:**
- **Clinical Frailty Scale**: 1 (very fit) to 9 (terminally ill)
- **Fried Phenotype**: Weight loss, exhaustion, low activity, slowness, weakness
- **Modified Frailty Index**: 11-item assessment
- Frail patients have 2-3x increased complications
- Preoperative identification guides optimization and counseling

**Cardiopulmonary Exercise Testing (CPET):**
- Measures VO2 peak and anaerobic threshold
- VO2 max <15 mL/kg/min: High surgical risk
- Anaerobic threshold <11 mL/kg/min: High morbidity/mortality
- Useful for major abdominal/thoracic surgery in borderline patients
- Expensive, limited availability

## Advanced Cardiovascular Assessment

**Perioperative Beta-Blocker Therapy:**
- **Continue**: Chronic beta-blockers perioperatively
- **Do NOT start** day of surgery (POISE trial: increased stroke, death)
- Consider starting in patients with ≥2 RCRI risk factors (optimization period needed)
- Target HR: 60-70 bpm

**Perioperative Statin Therapy:**
- Continue chronic statins perioperatively
- Consider starting in vascular surgery patients
- Mechanism: Plaque stabilization, anti-inflammatory
- Hold day of surgery if taking with food (unless extended release)

**Aspirin Perioperative Management:**
- **Continue**: For secondary prevention (prior MI, stent)
- **Hold**: For primary prevention unless bleeding risk very low
- **Dual antiplatelet therapy**: Discuss with cardiology
- Drug-eluting stent: DAPT for 6-12 months (delay surgery if possible)

**Bridging Anticoagulation:**
- Warfarin: Assess thrombotic vs. bleeding risk
- High thrombotic risk (mechanical valve, AF with CHADS2 ≥4): Bridge with LMWH
- Low thrombotic risk: Hold warfarin without bridging
- DOACs: Generally no bridging needed (short half-life)

## Advanced Airway Assessment

**Comprehensive Airway Evaluation:**
1. **Mallampati** (oropharyngeal visualization)
2. **Mouth opening**: <3 fingers width = limited
3. **Thyromental distance**: <3 fingerbreadths = limited
4. **Neck mobility**: Extension <35 degrees = limited
5. **Body habitus**: BMI >35, large neck circumference
6. **Upper lip bite test**: Can bite upper lip? (predicts difficult intubation)
7. **History**: Previous difficult intubation, OSA, radiation

**Predictive Models:**
- **Wilson score**: Combines multiple airway factors
- **Naguib model**: Weight, mouth opening, Mallampati
- Sensitivity ~80%, specificity ~80% for difficult intubation

## Pulmonary Evaluation - Advanced

**Postoperative Pulmonary Complications Risk Reduction:**
- **Incentive spirometry**: 10 breaths hourly while awake
- **Early ambulation**: Day 0 or 1
- **Pain management**: Multimodal to reduce opioid respiratory depression
- **CPAP for OSA**: Continue home regimen postoperatively
- **Lung-protective ventilation**: Low tidal volumes (6-8 mL/kg)

**Smoking Cessation:**
- **>8 weeks**: Reverses cardiovascular and ciliary effects
- **4-8 weeks**: Reduces wound complications
- **1-2 weeks**: Reduces sputum and carboxyhemoglobin
- **<1 week**: Still beneficial; never "too late" to quit

## Renal Protection Strategies

**Contrast-Induced Nephropathy Prevention:**
- Preprocedure hydration (NS or bicarbonate)
- N-acetylcysteine 600 mg PO BID (day before and day of)
- Minimize contrast volume
- Avoid multiple contrast studies within 48 hours
- Consider hemodialysis for high-risk patients (controversial)

**Nephrotoxic Avoidance:**
- NSAIDs: Avoid in CKD, use alternative analgesia
- ACE inhibitors/ARBs: Hold 24 hours preoperatively
- Aminoglycosides: Avoid if possible, level monitoring
- Amphotericin: Consider liposomal formulation

## Hematologic Optimization

**Anemia Optimization Timeline:**
- **6-8 weeks pre-op**: Iron studies, identify cause
- **4-6 weeks pre-op**: Start oral iron if indicated
- **2-4 weeks pre-op**: Consider IV iron if oral insufficient
- **2-4 weeks pre-op**: EPO for refusing blood patients
- **1 week pre-op**: Check Hb, consider transfusion if <10 g/dL

**Bleeding Risk Assessment:**
- Personal/family bleeding history
- Medication review (prescription, OTC, supplements)
- Laboratory testing if indicated:
  - Platelet count
  - PT/INR
  - aPTT
- Consider platelet function testing if unexplained bleeding

## Specialized Preoperative Clinics

**Geriatric Preoperative Assessment:**
- Comprehensive geriatric assessment
- Cognitive screening (Mini-Cog, MoCA)
- Delirium risk stratification
- Functional status evaluation
- Medication review (deprescribing inappropriate drugs)
- Goals of care discussion for major surgery

**Obesity Preoperative Assessment:**
- STOP-BANG OSA screening
- Difficult airway anticipation
- Bariatric dosing considerations
- VTE prophylaxis planning
- Equipment planning (bed capacity, OR table weight limit)

**Cardiac Preoperative Assessment:**
- Stress test interpretation
- Cardiac optimization
- Medication management (antiplatelets, anticoagulants)
- Perioperative monitoring planning

## Preoperative Testing Guidelines

**Appropriate Testing:**
- Testing should change management
- Avoid routine testing in healthy patients
- Base testing on comorbidities and surgical risk
- Repeat only if status changed or last test >3 months ago

**ECHO Rationale:**
- New murmur with symptoms
- Worsening dyspnea
- Known systolic dysfunction without recent evaluation
- Severe valvular disease without recent evaluation

**Stress Testing Rationale:**
- Poor functional capacity (<4 METs)
- High-risk surgery + ≥1 cardiac risk factor
- Active cardiac symptoms

**Cardiac Catheterization Rationale:**
- Abnormal stress test or high-risk anatomy on noninvasive imaging
- Would be indicated regardless of surgery (not just "to clear")`,
      keyTerms: [
        { term: 'CPET', definition: 'Cardiopulmonary Exercise Testing - measures VO2 max and anaerobic threshold; gold standard for functional capacity assessment' },
        { term: 'VO2 max', definition: 'Maximum oxygen consumption during exercise; measure of cardiovascular fitness and perioperative risk' },
        { term: 'CHADS2', definition: 'Score estimating stroke risk in atrial fibrillation: Cardiac failure, Hypertension, Age ≥75, Diabetes, Stroke (2 points)' },
        { term: 'POISE trial', definition: 'Perioperative Ischemic Evaluation trial studying perioperative beta-blockers; found harm with starting on day of surgery' },
        { term: 'DAPT', definition: 'Dual Antiplatelet Therapy - combination of aspirin plus another antiplatelet (clopidogrel, ticagrelor, prasugrel)' },
      ],
      clinicalNotes: 'Frailty assessment is increasingly important in surgical risk stratification. Frail patients have worse outcomes across all surgical specialties. Preoperative anemia (Hb <10) is an independent risk factor for complications and mortality. Optimization with iron or transfusion improves outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary preoperative evaluation incorporates precision medicine approaches, multidisciplinary optimization, and evidence-based protocols to individualize perioperative care.',
      explanation: `## State of the Art: Preoperative Assessment 2024

**Perioperative medicine** has evolved from preoperative clearance to comprehensive optimization:

## Evidence-Based Updates

**2023 AHA/ACC Perioperative Guidelines:**

**Biomarker-Guided Risk Stratification:**
- **NT-proBNP**: Preoperative elevation predicts cardiovascular events
  - >300 pg/mL (age <50) or >900 pg/mL (age ≥50): High risk
  - Consider enhanced monitoring, ICU admission
- **High-sensitivity troponin**: Postoperative elevation predicts mortality
  - Check baseline, 24-48 hours post-op for high-risk patients
  - 3rd generation universal definition of MI applies

**Stress Testing:**
- Routine stress testing before non-cardiac surgery NOT recommended
- Test only if results would change management
- Poor functional capacity alone does NOT warrant testing

**Perioperative Statins:**
- Continue chronic statins perioperatively (Class I)
- Consider initiating preoperatively for vascular surgery (Class IIa)
- Mechanism: Plaque stabilization, anti-inflammatory, endothelial function

**Beta-Blocker Initiation:**
- Do NOT start on day of surgery (increased stroke, mortality)
- If initiating, start ≥2 days preoperatively
- Target HR 60-70 bpm
- Consider for patients with ≥3 RCRI risk factors

**Aspirin Perioperatively (POISE-3):**
- Continuing aspirin does NOT increase bleeding complications
- No reduction in mortality or cardiovascular events
- Continue aspirin for secondary prevention
- Discontinue for primary prevention (no clear benefit)

## Enhanced Recovery After Surgery (ERAS)

**ERAS Components:**
1. **Preoperative counseling**: Set expectations
2. **Carbohydrate loading**: Clear carbohydrate drink 2-4 hours pre-op
3. **Shortened fasting**: Clear liquids until 2 hours pre-op
4. **Anesthetic technique**: Regional, short-acting agents, TIVA
5. **Multimodal analgesia**: Opioid-sparing
6. **Early feeding**: Start day of surgery
7. **Early mobilization**: Ambulate day 0 or 1
8. **Goal-directed fluid therapy**: Stroke volume variation guided
9. **Minimize tubes and drains**: Remove ASAP

**Outcomes:**
- 30-50% reduction in length of stay
- Reduced complications
- Lower readmission rates
- Cost savings

## Precision Medicine in Perioperative Care

**Pharmacogenomics:**
- **CYP2D6**: Poor vs. ultra-rapid metabolizers affect codeine/tramadol efficacy
- **SLCO1B1**: Statin metabolism variants
- **RYR1/CACNA1S**: Malignant hyperthermia susceptibility testing
- **PONV genetics**: 5-HT3 receptor variants

**Risk Prediction Models:**
- **NSQIP Risk Calculator**: Patient-specific risk assessment
- **Surgical Outcomes Analysis and Research (SOAR)**
- **Machine learning models**: EHR-based prediction
- Dynamic risk updating

## Prehabilitation Programs

**Core Components:**
- **Exercise training**: Aerobic + resistance, 4-6 weeks
- **Nutritional optimization**: Protein supplementation, address deficiencies
- **Psychological preparation**: Anxiety reduction, coping strategies
- **Substance use**: Smoking cessation, alcohol moderation
- **Anemia correction**: Iron, EPO, transfusion

**Evidence:**
- Improved functional capacity (1-2 MET increase)
- Reduced postoperative complications
- Earlier hospital discharge
- Particularly beneficial for:
  - Major abdominal surgery
  - Thoracic surgery
  - Joint replacement

## Multidisciplinary Optimization Clinics

**Structure:**
- Anesthesiology-led or internal medicine-led
- Standardized protocols by condition
- Preoperative optimization time: 2-6 weeks
- Reduced day-of-surgery cancellations

**Common Optimization Protocols:**
- **Anemia**: Iron studies, ferritin, transferrin saturation
- **Diabetes**: HbA1c target <8%, education, endocrine referral
- **Malnutrition**: Albumin, prealbumin, nutritional supplementation
- **Deconditioning**: Physical therapy referral, exercise prescription

## Shared Decision-Making

**High-Risk Surgery in Elderly:**
- Quantify risks (absolute numbers, not relative)
- Explore patient values and goals
- Discuss alternatives (nonoperative management)
- Consider frailty and life expectancy
- Goals of care alignment

**Advance Care Planning:**
- For patients with limited life expectancy
- Palliative surgery vs. comfort-focused care
- Code status discussions preoperatively
- Family meetings for complex cases

## Quality Metrics

**Preoperative Clinic Quality Measures:**
- Time from referral to surgery
- Cancellation rate (target <5%)
- Unplanned ICU admission rate
- 30-day readmission rate
- Patient satisfaction scores
- Cost savings (reduced testing, complications)

**Optimization Metrics:**
- HbA1c <8% prior to surgery
- Hb >10 g/dL for major surgery
- Smoking cessation confirmed (>4 weeks)
- Functional capacity ≥4 METs or optimized

## Future Directions

**Wearable Technology:**
- Preoperative activity monitoring
- Sleep quality assessment
- Remote vitals monitoring
- Postoperative monitoring at home

**Artificial Intelligence:**
- Predictive risk modeling
- Automated chart review
- Enhanced decision support
- Natural language processing for notes

**Telemedicine Preoperative Assessment:**
- Remote history and counseling
- Appropriate for low-risk patients
- Reduces patient travel burden
- Pandemic-accelerated adoption

**Genomic Risk Profiling:**
- Preoperative genetic testing for:
  - Malignant hyperthermia susceptibility
  - Pseudocholinesterase deficiency
  - Porphyria
  - Pharmacogenomic variants

- Ethical considerations: Privacy, discrimination, cost

## Specialized Populations

**Pregnant Patients:**
- ACOG guidelines: Non-urgent surgery in second trimester if possible
- Avoid first trimester (organogenesis)
- Avoid third trimester (preterm labor risk)
- Left uterine displacement after 20 weeks
- Teratogen avoidance

**Pediatric Patients:**
- Age-specific considerations
- Parental presence for induction (controversial)
- Different dosing based on age and weight
- Unique risks (laryngospasm, bronchospasm)

**Elderly (>80):**
- Comprehensive geriatric assessment
- Cognition screening (delirium risk)
- Functional status evaluation
- Medication deprescribing
- Goals of care discussion for major surgery`,
      keyTerms: [
        { term: 'NT-proBNP', definition: 'N-terminal pro-brain natriuretic peptide - cardiac biomarker for heart failure and perioperative risk stratification' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - evidence-based multimodal perioperative care protocols to improve outcomes' },
        { term: 'TIVA', definition: 'Total Intravenous Anesthesia - maintenance with propofol +/- opioids without volatile anesthetics; associated with reduced PONV' },
        { term: 'POISE-3', definition: 'Perioperative Ischemic Evaluation trial comparing aspirin vs. placebo and clonidine vs. placebo in non-cardiac surgery' },
        { term: 'SOAR', definition: 'Surgical Outcomes Analysis and Research - methodology for analyzing surgical outcomes and risk prediction' },
      ],
      clinicalNotes: `2024 Practice Updates:
1. NT-proBNP recommended for preoperative risk assessment in patients with cardiovascular risk factors
2. Do NOT start beta-blockers day of surgery - associated with increased stroke and mortality
3. Aspirin continuation safe for most patients; discontinue for primary prevention
4. Prehabilitation shows strongest evidence in colorectal and thoracic surgery
5. Frailty assessment should be routine for elderly surgical patients
6. Preoperative anemia (Hb <10) requires optimization; transfusion threshold 7 g/dL for most patients
7. ERAS protocols reduce length of stay by 30-50% across surgical specialties`,
    },
  },

  media: [
    {
      id: 'asa-classification-table',
      type: 'diagram',
      filename: 'asa-classification-table.svg',
      title: 'ASA Physical Status Classification',
      description: 'Table showing ASA classes with descriptions and examples',
    },
    {
      id: 'airway-assessment',
      type: 'diagram',
      filename: 'airway-assessment-examination.svg',
      title: 'Airway Assessment Examination',
      description: 'Diagram showing components of airway assessment',
    },
  ],

  citations: [
    {
      id: 'asa-asa-class',
      type: 'website',
      title: 'ASA Physical Status Classification System',
      source: 'American Society of Anesthesiologists',
      url: 'https://www.asahq.org/standards-and-guidelines/asa-physical-status-classification-system',
    },
    {
      id: 'aha-acc-2022',
      type: 'article',
      title: '2022 AHA/ACC Guideline on Cardiovascular Evaluation and Management of Patients Undergoing Noncardiac Surgery',
      source: 'Circulation',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001105',
    },
    {
      id: 'eras-society',
      type: 'website',
      title: 'ERAS Society Guidelines',
      source: 'Enhanced Recovery After Surgery Society',
      url: 'https://erassociety.org/guidelines/',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-risks', targetType: 'topic', relationship: 'related', label: 'Anesthesia Risks' },
    { targetId: 'cardiovascular-assessment', targetType: 'topic', relationship: 'related', label: 'Cardiovascular Assessment' },
  ],

  tags: {
    systems: ['nervous', 'cardiovascular', 'respiratory'],
    topics: ['anesthesia', 'preoperative assessment', 'risk stratification', 'perioperative medicine'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'internal medicine', 'family medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default preoperativeEvaluationContent;
