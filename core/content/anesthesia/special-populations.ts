/**
 * Special Populations in Anesthesia
 *
 * Pediatric, geriatric, obstetric, and other special patient
* populations with unique anesthetic considerations.
 */

import { EducationalContent } from '../types';

export const specialPopulationsContent: EducationalContent = {
  id: 'anesthesia-special-populations',
  type: 'concept',
  name: 'Special Populations in Anesthesia',
  alternateNames: ['Special Patient Populations', 'High-Risk Groups', 'Vulnerable Populations'],

  levels: {
    1: {
      level: 1,
      summary: 'Some groups of people need special care with anesthesia, including children, older adults, pregnant women, and people with certain health conditions.',
      explanation: `Anesthesia is safe for most people, but some groups need special attention. Their bodies work differently, so the anesthesia team adjusts their approach.

**Pediatric Patients (Children)**

Children are not just small adults - their bodies work differently:
- Higher heart rate and breathing rate
- Different responses to medicines
- Get scared easily - need gentle approach
- Parents may help them feel calm

Special considerations:
- Doses based on weight (not age)
- Special equipment made for children
- Mask induction often used (no IV start while awake)
- Higher risk of breathing problems after anesthesia
- Recover faster than adults

**Geriatric Patients (Older Adults)**

Adults over 65 have special needs:
- More sensitive to anesthesia (less medicine needed)
- Slower recovery from anesthesia
- May have confusion after surgery
- More likely to have health problems
- Need smaller doses of many medicines

Special considerations:
- More thorough health evaluation before surgery
- May need extra tests
- Careful dosing of medicines
- Watch for confusion after surgery
- Need more time to recover fully

**Obstetric Patients (Pregnant Women)**

Pregnant women having anesthesia need special care for both mom and baby:
- Baby's safety is very important
- Body changes affect how anesthesia works
- Some medicines safer than others
- Position changes help protect the baby

Special considerations:
- Labor epidurals are very common and safe
- C-sections need special anesthesia
- Left side lying position helps blood flow to baby
- Avoid medicines that could hurt the baby
- Baby's heartbeat may be monitored

**Obese Patients**

People with obesity face special challenges:
- Higher risk of breathing problems
- Harder to place breathing tube
- Need different medicine doses
- Higher risk of complications

Special considerations:
- Special equipment (larger beds, gowns)
- May need special positioning
- Screening for sleep apnea
- Careful dosing of medicines

**People with Special Health Conditions**

**Heart Disease:**
- Need extra heart monitoring
- Special medicine choices
- May need special tests before surgery

**Lung Disease (Asthma, COPD):**
- Higher risk of breathing problems
- May need breathing treatments
- Special monitoring of breathing

**Diabetes:**
- Blood sugar needs careful control
- May need insulin during surgery
- Special medicine adjustments

**Kidney Disease:**
- Medicines may build up in body
- Need different medicine doses
- May need dialysis around surgery time

**Liver Disease:**
- Some medicines don't work properly
- Higher bleeding risk
- May have lower blood counts

**People with Special Needs**

**Developmental Disabilities:**
- Need extra time and patience
- May need special communication approaches
- Parents or caregivers may help

**Anxiety About Surgery:**
- Very common in children and adults
- Medicine can help (not make you sleep, just calmer)
- Talking about fears helps

**Previous Problems with Anesthesia:**
- Tell your doctor about any past problems
- Family history of problems important
- May need special medicines or tests

The anesthesia team plans carefully for each person's unique needs!`,
      keyTerms: [
        { term: 'pediatric', definition: 'Related to children and their medical care' },
        { term: 'geriatric', definition: 'Related to elderly people and their medical care' },
        { term: 'obstetric', definition: 'Related to pregnancy and childbirth' },
        { term: 'obesity', definition: 'Having too much body weight; can affect anesthesia and surgery' },
        { term: 'comorbidities', definition: 'Other medical conditions a person has at the same time', pronunciation: 'co-mor-bid-it-ees' },
      ],
      analogies: [
        'Children are like miniature cars with different engines - they look similar but work very differently inside.',
        'Elderly patients are like older cars - they need more careful maintenance and run differently than newer models.',
      ],
      examples: [
        'A 5-year-old having tonsils removed: Special mask induction, smaller breathing tube, parents present at start.',
        'A 75-year-old with heart disease having hip surgery: Lower medication doses, extra heart monitoring, careful recovery.',
        'A pregnant woman having C-section: Spinal anesthesia, left tilt position, baby monitored throughout.',
      ],
      patientCounselingPoints: [
        'Tell your anesthesia doctor about all health problems, not just the one you\'re having surgery for.',
        'Children often do better when parents are calm and supportive before surgery.',
        'Older adults may have some confusion after surgery - this usually goes away in a few days.',
      ],
    },
    2: {
      level: 2,
      summary: 'Special populations require tailored anesthetic approaches due to physiologic differences, altered pharmacokinetics, and unique risk profiles.',
      explanation: `Special populations have unique anesthetic considerations based on age, physiologic state, or comorbidities. Standard protocols must be modified to ensure safety.

## Pediatric Anesthesia

**Age Classifications:**
- **Neonates**: 0-1 month
- **Infants**: 1-12 months
- **Toddlers**: 1-3 years
- **Preschool**: 3-5 years
- **School-age**: 5-12 years
- **Adolescent**: 12-18 years

**Pediatric Physiologic Differences:**
- Higher oxygen consumption (6-8 mL/kg/min vs. 3 mL/kg/min adults)
- Higher cardiac output relative to size
- Lower functional residual capacity → faster desaturation
- Higher body water content → changes drug distribution
- Immature organ systems → altered drug metabolism
- Temperature regulation less efficient

**Airway Differences:**
- Larger head and occiput (neck flexed in neutral position)
- Larger tongue relative to mouth size
- Larynx more anterior and superior (C3 vs. C5 in adults)
- Epiglottis larger and omega-shaped
- Narrowest part at cricoid cartilage (not vocal cords)
- Trachea shorter → risk of bronchial intubation

**Induction Techniques:**
- **Mask induction**: Most common for children <8 years
  - Sevoflurane preferred (pleasant smell, rapid)
  - Parental presence controversial
- **IV induction**: Older children, emergencies

**Dosing Considerations:**
- Weight-based dosing essential
- Higher mg/kg doses for many drugs (water distribution)
- Lower MAC for volatile anesthetics in neonates
- Prolonged recovery in neonates (immature metabolism)

## Geriatric Anesthesia (Age >65)

**Physiologic Changes of Aging:**
- **Cardiovascular**: Decreased beta-receptor sensitivity, stiff arteries
- **Respiratory**: Decreased chest wall compliance, reduced FRC
- **Renal**: Decreased GFR, decreased renal reserve
- **Hepatic**: Decreased liver mass, decreased blood flow
- **Nervous**: Decreased brain mass, increased sensitivity to anesthetics

**Altered Pharmacokinetics:**
- Increased fat → increased volume of distribution for lipophilic drugs
- Decreased lean body mass → decreased distribution
- Decreased renal clearance → prolonged drug effect
- Decreased protein binding → more free drug

**Anesthetic Implications:**
- **Reduced anesthetic requirements**: MAC decreases ~6% per decade after 40
- **Prolonged drug effect**: Especially with repeated dosing
- **Increased sensitivity to side effects**: Hypotension, sedation
- **Temperature regulation**: Impaired → hypothermia risk

**Geriatric-Specific Concerns:**
- **Postoperative delirium**: 10-50% incidence
- **POCD (Postoperative cognitive dysfunction)**: May persist weeks-months
- **Falls risk**: Increased after discharge
- **Functional decline**: Loss of independence

## Obstetric Anesthesia

**Physiologic Changes of Pregnancy:**
- **Cardiovascular**: Cardiac output ↑50%, HR ↑15-20 bpm
- **Respiratory**: Tidal volume ↑, RR ↑, respiratory alkalosis compensated
- **Gastrointestinal**: Gastric emptying delayed, lower esophageal sphincter tone ↓
- **Hematologic**: Blood volume ↑50%, hypercoagulable state

**Anesthetic Considerations:**
- **Aspiration risk**: Increased (NPO status important)
- **Aortocaval compression**: Left uterine displacement after 20 weeks
- **Reduced MAC**: Up to 40% reduction at term
- **Airway edema**: More difficult airway, especially in labor

**Labor Analgesia:**
- **Neuraxial analgesia**: Epidural or CSE (combined spinal-epidural)
- **Epidural catheter**: Continuous infusion for prolonged labor
- **Local anesthetics**: Bupivacaine or ropivacaine with opioid
- **Side effects**: Hypotension, pruritus, motor block

**C-Section Anesthesia:**
- **Neuraxial preferred**: Spinal or epidural for most
- **General anesthesia**: For emergencies or contraindications to neuraxial
- **Concerns**: Difficult airway, aspiration, hemorrhage

## Obesity (BMI >30)

**Anatomic and Physiologic Changes:**
- **Airway**: Limited neck mobility, large neck circumference, Mallampati III-IV
- **Respiratory**: Decreased FRC, increased O2 consumption, OSA common
- **Cardiovascular**: Increased blood volume, hypertension, LV hypertrophy
- **Gastrointestinal**: Increased gastric volume, faster emptying

**Anesthetic Challenges:**
- **Airway management**: Higher failure rate, consider video laryngoscopy
- **Dosing**: Weight-based dosing controversial
  - Succinylobine: Use actual body weight
  - Induction agents: Use lean body weight
  - Volatile anesthetics: Reduced MAC
- **Positioning**: Ramped position for airway management
- **Postoperative**: OSA screening, CPAP if home user

**Obstructive Sleep Apnea:**
- STOP-BANG screening: ≥3 = high risk
- Higher perioperative respiratory complications
- Consider extended PACU monitoring
- Resume home CPAP as soon as possible

## Patients with Comorbidities

**Cardiovascular Disease:**
- **CAD**: Stress testing if poor functional capacity
- **Heart failure**: Optimize, continue beta-blockers
- **Valvular disease**: Consider echo if symptomatic
- **Arrhythmias**: Continue antiarrhythmics

**Pulmonary Disease:**
- **COPD**: PFTs if undiagnosed, avoid histamine-releasing drugs
- **Asthma**: Continue bronchodilators, avoid triggers
- **Pulmonary hypertension**: High-risk, hemodynamic monitoring

**Renal Disease:**
- **Dose adjustments**: For renally cleared drugs
- **Avoid nephrotoxins**: NSAIDs, ACE inhibitors perioperatively
- **Electrolyte management**: Hyperkalemia risk
- **Dialysis**: Schedule around surgery

**Hepatic Disease:**
- **Coagulopathy**: Check INR, platelets
- **Drug metabolism**: Reduced for hepatically cleared drugs
- **Ascites**: Affects ventilation, positioning
- **Encephalopathy**: Avoid sedatives that worsen`,
      keyTerms: [
        { term: 'MAC', definition: 'Minimum Alveolar Concentration - measure of volatile anesthetic potency; decreases with age' },
        { term: 'FRC', definition: 'Functional Residual Capacity - volume of air in lungs at end of normal exhalation; decreased in obesity and pregnancy' },
        { term: 'STOP-BANG', definition: 'OSA screening tool: Snoring, Tiredness, Observed apnea, Pressure, BMI, Age, Neck, Gender' },
        { term: 'neuraxial', definition: 'Anesthesia involving spinal cord - includes spinal and epidural techniques' },
        { term: 'CSE', definition: 'Combined Spinal-Epidural - technique combining both spinal and epidural anesthesia' },
      ],
      analogies: [
        'Pediatric airway is like a funnel - narrowest at the bottom (cricoid), unlike adults which are cylindrical.',
        'Geriatric patients are like vintage cars - beautiful but need specialized care and maintenance.',
      ],
      examples: [
        'A 2-year-old: Sevoflurane mask induction, uncuffed ET tube, weight-based dosing.',
        'An 80-year-old: 50% reduction in induction dose, careful temperature monitoring, delirium prevention.',
        'A woman in labor: Epidural catheter for continuous pain relief, left uterine displacement.',
        'A patient with BMI 50: Video laryngoscopy for intubation, OSA screening, CPAP in PACU.',
      ],
    },
    3: {
      level: 3,
      summary: 'Special populations require understanding of unique physiology, altered pharmacokinetics, and disease-specific considerations to provide safe anesthetic care.',
      explanation: `## Pediatric Anesthesia - Advanced

**Age-Specific Pharmacokinetics:**

**Neonates (0-30 days):**
- Higher body water (85% vs. 60% adults)
- Decreased fat (1% vs. 20% adults)
- Immature blood-brain barrier
- Decreased plasma protein binding
- Immature hepatic enzymes (especially phase I)
- Reduced renal clearance

**Infants (1-12 months):**
- Glomerular filtration rate approaches adult values by 6-12 months
- Hepatic metabolism still immature
- Relative blood volume higher than adults

**Children (>1 year):**
- Pharmacokinetics approach adult values by 2-3 years
- Higher cardiac output → more rapid induction

**Cuffed vs. Uncuffed Tubes:**
- Cuffed tubes now standard for all ages (including infants)
- High-volume, low-pressure cuffs minimize tracheal injury
- Allow better seal, reduce need for tube changes
- Uncuffed tubes still used for neonates <3 kg

**Emergence Agitation:**
- Incidence: 10-40% (higher with sevoflurane, younger age)
- Treatment: Reassurance, parental presence, fentanyl 1 mcg/kg
- Prevention: Propofol at end, dexmedetomidine 0.3-0.5 mcg/kg

## Geriatric Anesthesia - Advanced

**Pharmacologic Changes:**

**Reduced Initial Dose Requirements:**
- Propofol: 30-50% reduction
- Thiopental: 30-50% reduction
- Midazolam: 50% reduction
- Fentanyl: 50% reduction
- Neuromuscular blockers: 20-30% reduction

**Prolonged Duration:**
- Context-sensitive half-time increased
- Redosing causes cumulative effects
- Longer time to discharge eligibility

**Frailty Assessment:**
- **Clinical Frailty Scale**: 1 (very fit) to 9 (terminally ill)
- **Fried Phenotype**: Weight loss, exhaustion, low activity, slowness, weakness
- **Timed Up-and-Go**: >12 seconds = frailty
- Frail patients have 2-3x increased morbidity/mortality

**Postoperative Delirium Prevention:**
- **Multimodal approach**:
  - Avoid benzodiazepines
  - Minimize anticholinergics
  - Adequate analgesia with minimal opioids
  - Reorientation frequently
  - Sensory aids (glasses, hearing aids)
  - Early mobilization
  - Sleep hygiene
  - Proper hydration and nutrition

## Obstetric Anesthesia - Advanced

**Maternal Physiology:**
- **Cardiac output**: Peaks at 40-50% above baseline
- **Blood pressure**: Lowest in second trimester
- **Hematocrit**: Decreases to ~32% (physiologic anemia)
- **Coagulation**: Hypercoagulable (factor VII, VIII, fibrinogen increased)

**Neuraxial Analgesia for Labor:**
- **Combined Spinal-Epidural (CSE)**:
  - Rapid onset (spinal component)
  - Catheter for continued analgesia
  - Less motor block than traditional epidural
- **Patient-controlled epidural analgesia (PCEA)**:
  - Patient controls dosing within limits
  - Higher satisfaction, less medication use

**Epidural Complications:**
- **Hypotension**: 10-30% (treat with phenylephrine)
- **Paresthesias**: Usually transient
- **PDPH**: <1% with pencil-point needles
- **High spinal**: Requires immediate supportive care

**C-Section Considerations:**
- **Sp anesthesia**: Most common, rapid, dense block
- **Epidural**: If labor epidural in place, can dose for C-section
- **General anesthesia**: For emergencies, failed neuraxial, patient refusal
  - High aspiration risk
  - Difficult airway (Mallampati III-IV common)
  - Hemorrhage risk

## Obesity - Advanced

**Pulmonary Considerations:**
- **Reduced FRC**: Desaturation within minutes of apnea
- **Increased O2 consumption**: Rapid desaturation
- **Obstructive sleep apnea**: Incidence increases with BMI
- **Obesity hypoventilation syndrome**: Hypercapnia, hypoxemia

**Airway Management:**
- **Difficult airway predictors**:
  - Mallampati III-IV
  - Neck circumference >50 cm
  - Thyromental distance <6 cm
  - Limited neck mobility
  - Obstructive sleep apnea
- **Ramped position**: Ear aligned with sternal notch
- **Video laryngoscopy**: First-line for anticipated difficult airway
- **Supraglottic airway**: Higher failure rate in obesity

**Dosing Strategies:**
- **Induction agents**: Lean body weight or ideal body weight
- **Succinylcholine**: Actual body weight
- **Rocuronium**: Ideal body weight (IBW) + 20%
- **Opioids**: Lean body weight
- **Volatile anesthetics**: Reduced MAC (up to 25% lower)

**Postoperative Considerations:**
- **OSA screening**: STOP-BANG ≥3 = high risk
- **CPAP**: Resume as soon as possible
- **Extended monitoring**: For high-risk OSA patients
- **Opioid-sparing**: Minimize respiratory depression

## Special Comorbidities

**Diabetes Mellitus:**
- **HbA1c target**: <8% for elective surgery
- **Hold oral agents**: Morning of surgery
- **Insulin**: Continue basal (reduce dose)
- **Target glucose**: 140-180 mg/dL intraoperative
- **Complications**: Delayed wound healing, infection, neuropathy

**Chronic Kidney Disease:**
- **Staging**: Based on GFR
- **Dose adjustments**: For renally cleared drugs
- **Avoid**: NSAIDs, ACE inhibitors perioperatively
- **Electrolytes**: Monitor K+, Ca2+, phosphate
- **Dialysis**: Schedule perioperatively

**Liver Disease:**
- **Child-Pugh classification**:
  - Class A: Mild disease
  - Class B: Moderate disease
  - Class C: Severe disease
- **Coagulopathy**: Check INR, platelets
- **Encephalopathy**: Avoid sedatives, ammonia control
- **Albumin**: Hypoalbuminemia → more free drug
- **Avoid**: Hepatotoxic drugs, extensive metabolism

**Thyroid Disease:**
- **Hypothyroid**: Myxedema coma risk, stress dose steroids
- **Hyperthyroid**: Thyroid storm risk, beta-blockers
- **Thyroid storm**: Tachycardia, hyperthermia, heart failure`,
      keyTerms: [
        { term: 'cuffed tube', definition: 'Endotracheal tube with a balloon cuff that inflates to seal the airway; now standard for all ages in pediatrics' },
        { term: 'frailty', definition: 'Biologic syndrome of decreased reserve and resistance to stressors; predicts surgical outcomes' },
        { term: 'PCEA', definition: 'Patient-Controlled Epidural Analgesia - allows patient to self-administer epidural medication within preset limits' },
        { term: 'ideal body weight', definition: 'Estimated healthy weight based on height; used for drug dosing in obesity' },
        { term: 'Child-Pugh', definition: 'Scoring system for severity of chronic liver disease based on bilirubin, albumin, INR, ascites, encephalopathy' },
      ],
      clinicalNotes: 'Neonates desaturate in seconds versus minutes for adults due to higher oxygen consumption and lower FRC. Cuffed endotracheal tubes are now preferred in children for better seal and fewer tube changes. Geriatric patients exhibit increased sensitivity to both anesthetics and side effects - dose reductions of 30-50% are standard.',
    },
    4: {
      level: 4,
      summary: 'Special populations require sophisticated understanding of age-related physiology, organ dysfunction, and pregnancy-related changes to optimize outcomes.',
      explanation: `## Advanced Pediatric Considerations

**Pulmonary Physiology in Children:**
- **Closing capacity**: Exceeds FRC in infants → airway closure at rest
- **Oxygen consumption**: 6-8 mL/kg/min (double adults)
- **Alveolar ventilation**: Double relative to body weight
- **Work of breathing**: Higher due to compliant chest wall

**Congenital Heart Disease:**
- **Left-to-right shunts** (VSD, ASD, PDA):
  - Pulmonary overcirculation
  - Risk of pulmonary hypertension
  - Avoid air bubbles (paradoxical embolism)
- **Right-to-left shunts** (TOF, TGA):
  - Cyanosis
  - Polycythemia
  - Avoid increases in PVR

**Premature Ex-Preemies:**
- Post-conceptual age <60 weeks at higher risk of apnea
- Consider postoperative monitoring
- Cautious with spinal anesthesia (apnea risk)

## Advanced Geriatric Considerations

**Physiologic Reserve Assessment:**
- **Cardiopulmonary Exercise Testing (CPET)**:
  - VO2 max <15 mL/kg/min = high risk
  - Anaerobic threshold <11 mL/kg/min = very high risk
- **Biomarkers**: NT-proBNP for cardiac risk
- **Frailty metrics**: Grip strength, gait speed

**Pharmacogenomics in Elderly:**
- **CYP polymorphisms**: Affect drug metabolism
- **Reduced renal clearance**: Even with normal creatinine
- **Reduced protein binding**: More free active drug

**Delirium Risk Stratification:**
- **Risk factors**: Age >80, dementia, vision/hearing impairment
- **Prevention bundle**: Multimodal approach most effective
- **Treatment**: First identify precipitating causes

## Advanced Obstetric Considerations

**Uteroplacental Circulation:**
- **Autoregulation absent**: Flow depends on maternal perfusion pressure
- **Aortocaval compression**: Can reduce cardiac output 30%
- **Left uterine displacement**: Essential after 20 weeks

**Neuraxial Hemodynamics:**
- **Sympathectomy**: Vasodilation → hypotension
- **Treatment**: Phenylephrine preferred (maintains uterine flow)
- **Ephedrine**: Alternative, crosses placenta

**Obstetric Hemorrhage:**
- **Causes**: Atony, laceration, retained placenta, abruption, placenta previa
- **PPH risk factors**: Multiple gestation, macrosomia, prolonged labor
- **Treatment**: Uterotonics, uterine massage, tranexamic acid, blood products

**Anesthetic for C-Section:**
- **Spinal**: Most common, rapid onset
- **CSE**: Rapid onset with catheter option
- **General**: Failed neuraxial, emergency, fetal distress, patient refusal
  - RSI essential (higher aspiration risk)
  - ETT 6.0-7.0 usually (airway edema)
  - Avoid N2O (expands bowel gas)

## Advanced Obesity Considerations

**Pulmonary Physiology:**
- **Restrictive pattern**: Reduced lung volumes
- **Obstructive pattern**: OSA, obesity hypoventilation
- **V/Q mismatch**: Atelectasis, shunting
- **Increased work of breathing**

**Obstructive Sleep Apnea:**
- **STOP-BANG score**: ≥3 = high risk
- **Home sleep testing**: For diagnosis
- **PAP therapy**: Resume postoperatively ASAP
- **Perioperative complications**: Atelectasis, respiratory failure, cardiac events

**Pharmacokinetics in Obesity:**
- **Lipophilic drugs** (propofol, fentanyl): Vd increased
- **Hydrophilic drugs** (neuromuscular blockers): Dose based on IBW
- **Dosing strategies**:
  - IBW: Succinylcholine, rocuronium
  - Adjusted body weight: Propofol, fentanyl
  - Actual body weight: Rarely appropriate

**Obstructive Sleep Apnea Management:**
- **Preoperative**: PAP compliance assessment
- **Intraoperative**: Regional when possible, minimize opioids
- **Postoperative**: Extended monitoring, PAP when awake

## Special Comorbidities - Advanced

**Diabetes Management:**
- **HbA1c >8%**: Consider postponing elective surgery
- **Perioperative glucose**: Target 140-180 mg/dL
- **Insulin pump**: Continue basal rate intraoperatively
- **DKA/HHS risk**: Stress, infection, insulin omission

**Chronic Kidney Disease (Stages 1-5):**
| Stage | GFR | Considerations |
|-------|-----|----------------|
| 1 | >90 | Standard |
| 2 | 60-89 | Some dose adjustments |
| 3 | 30-59 | Significant dose adjustments |
| 4 | 15-29 | Major dose adjustments, avoid nephrotoxins |
| 5 | <15 | Dialysis-dependent |

**Liver Failure (Child-Pugh Class C):**
- **Encephalopathy risk**: Avoid sedatives
- **Coagulopathy**: FFP, platelets, vitamin K
- **Hypoglycemia**: Monitor glucose closely
- **Infection risk**: High

**Neuromuscular Disease:**
- **Muscular dystrophy**: Avoid succinylcholine (hyperkalemia)
- **Multiple sclerosis**: Regional anesthesia acceptable
- **Myasthenia gravis**: Sensitivity to NMBAs, reduced dose

**Malignant Hyperthermia:**
- **RYR1, CACNA1S mutations**: Autosomal dominant
- **Triggers**: Volatiles, succinylcholine
- **Treatment**: Dantrolene 2.5 mg/kg IV
- **Testing**: Muscle contracture testing, genetic testing

**Pseudocholinesterase Deficiency:**
- **BCHE gene mutations**: Autosomal recessive
- **Prolonged paralysis**: After succinylcholine
- **Treatment**: Supportive ventilation until recovery`,
      keyTerms: [
        { term: 'VSD', definition: 'Ventricular Septal Defect - congenital heart defect with hole between ventricles' },
        { term: 'PDA', definition: 'Patent Ductus Arteriosus - failure of fetal shunt between aorta and pulmonary artery to close' },
        { term: 'TOF', definition: 'Tetralogy of Fallot - congenital heart defect with four abnormalities' },
        { term: 'uterotonics', definition: 'Medications that cause uterine contractions; used to treat postpartum hemorrhage' },
        { term: 'adjusted body weight', definition: 'IBW + 0.4(actual - IBW); used for dosing some medications in obesity' },
      ],
      clinicalNotes: 'Premature infants under 60 weeks post-conceptual age are at risk for postoperative apnea. Cuffed ETTs now standard in pediatrics - improved seal, fewer tube changes. Phenylephrine preferred over ephedrine for treating hypotension in obstetrics (maintains uterine blood flow).',
    },
    5: {
      level: 5,
      summary: 'Contemporary practice for special populations incorporates evidence-based protocols, individualized risk assessment, and multidisciplinary care to optimize outcomes.',
      explanation: `## State of the Art: Special Populations 2024

**Special population care** requires specialized knowledge, protocols, and often multidisciplinary teams.

## Pediatric Updates

**Pediatric Difficult Airway:**
- **Video laryngoscopy**: First-line for anticipated difficult airway
- **Supraglottic airways**: Higher success rates in children
- **Fiberoptic intubation**: Awake technique in selected older children
- **Surgical airway**: Rare but essential skill

**Preoperative Anxiety:**
- **Pharmacologic**: Midazolam 0.5 mg/kg PO (max 20 mg)
- **Non-pharmacologic**: Distraction, parental presence, child life specialists
- **Tablet/smartphone**: Interactive distraction increasingly used

**Postoperative Outcomes:**
- **Enhanced Recovery After Surgery (ERAS)**: Applied to pediatric surgery
- **Early feeding**: Reduces complications, faster recovery
- **Multimodal analgesia**: Reduces opioid requirements

## Geriatric Updates

**Perioperative Medicine:**
- **Comprehensive Geriatric Assessment**: Preoperative optimization
- **Prehabilitation**: Exercise, nutrition, psychological preparation
- **Geriatric co-management**: Medical specialist involvement

**Delirium Prevention (2023 Guidelines):**
- **Multicomponent interventions**: Most effective
- **Avoid**: Benzodiazepines, anticholinergics
- **Ensure**: Vision/hearing aids, hydration, mobility, sleep hygiene
- **Pharmacologic prevention**: Not routinely recommended

**Surgical Decision-Making:**
- **Frailty assessment**: Essential for major surgery
- **Risk vs. benefit**: Shared decision-making
- **Goals of care**: Align treatment with patient values
- **Advance directives**: Important preoperative discussion

## Obstetric Updates

**Labor Analgesia Advances:**
- **Dural puncture epidural (DPE)**: Improved sacral spread
- **Programmable intermittent epidural bolus**: Better analgesia, less medication
- **Low-dose combined spinal-epidural**: Earlier ambulation

**C-Section Anesthesia:**
- **Spinal preferred**: Most cases
- **General anesthesia**: Declining use (<5% in many centers)
- **Early skin-to-skin**: Even with neuraxial anesthesia

**Postpartum Tubal Ligation:**
- **Timing**: Can be done immediately postpartum or later
- **Anesthesia**: Neuraxial still effective postpartum
- **Considerations**: Difficulty if failed neuraxial for delivery

## Obesity Updates

**Bariatric Surgery Anesthesia:**
- **Preoperative**: OSA screening universal
- **Intraoperative**: Ramp positioning, video laryngoscopy
- **Postoperative**: CPAP immediately, multimodal analgesia
- **ERAS protocols**: Significantly improve outcomes

**Pharmacologic Updates:**
- **Propofol**: Dosing based on lean body weight
- **Succinylcholine**: Actual body weight
- **Rocuronium**: Ideal body weight + 20%
- **Opioids**: Lean body weight
- **Volatile agents**: Reduced MAC

**Postoperative Complications:**
- **Respiratory failure**: Most common serious complication
- **Surgical site infection**: Higher in obese
- **VTE**: Higher risk, extended prophylaxis

## Multidisciplinary Care

**Pediatric Cardiac Anesthesia:**
- **Specialized training**: Fellowships available
- **Multidisciplinary teams**: Cardiac surgery, cardiology, ICU
- **Complex physiology**: Shunts, single ventricle physiology

**Obstetric Anesthesia Team:**
- **24/7 coverage**: Standard at most hospitals
- **Emergency response**: Available for obstetric emergencies
- **Quality improvement**: Regular M&M, protocol development

**Geriatric Fracture Care:**
- **Orthopedic-geriatric co-management**: Improved outcomes
- **Regional anesthesia**: Preferred for hip fracture
- **Early surgery**: Within 24-48 hours when possible

## Quality and Safety

**Standardized Protocols:**
- **Difficult airway algorithms**: Pediatric, obstetric, obesity
- **Rapid response teams**: For postoperative deterioration
- **Checklists**: Pre-procedure, timeout, sign-out

**Outcome Measurement:**
- **Pediatric**: Perioperative cardiac arrest registry
- **Obstetric**: Maternal mortality review committees
- **Geriatric**: Frailty-adjusted outcomes

## Future Directions

**Genetic Testing:**
- **Malignant hyperthermia**: Preoperative genetic testing
- **Pseudocholinesterase deficiency**: Genetic confirmation
- **Pharmacogenomics**: Individualized drug selection

**Enhanced Recovery:**
- **Pediatric ERAS**: Growing evidence base
- **Geriatric ERAS**: Tailored to elderly patients
- **Bariatric ERAS**: Well-established protocols

**Technology:**
- **Point-of-care ultrasound**: Airway assessment, gastric volume
- **Telemedicine**: Preoperative assessment, postoperative follow-up
- **Wearables**: Remote monitoring post-discharge`,
      keyTerms: [
        { term: 'DPE', definition: 'Dural Puncture Epidural - technique combining dural puncture with epidural catheter placement for improved sacral spread' },
        { term: 'prehabilitation', definition: 'Preoperative optimization through exercise, nutrition, and psychological preparation to improve surgical outcomes' },
        { term: 'co-management', definition: 'Collaborative management by multiple specialists (e.g., geriatrician and surgeon) for complex patients' },
        { term: 'M&M', definition: 'Morbidity and Mortality conference - review of complications and deaths to identify systems issues for improvement' },
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - evidence-based perioperative care protocols' },
      ],
      clinicalNotes: `2024 Practice Updates:
1. Cuffed ETTs now standard for all ages in pediatrics - better seal, fewer tube changes
2. Multicomponent non-pharmacologic interventions most effective for delirium prevention in elderly
3. Dural puncture epidural (DPE) improves sacral spread for labor analgesia
4. Programmed intermittent epidural bolus (PIEB) superior to continuous infusion
5. Prehabilitation (exercise + nutrition) reduces complications in geriatric surgery
6. Multimodal opioid-sparing analgesia standard for all special populations
7. Genetic testing available for MH susceptibility, pseudocholinesterase deficiency`,
    },
  },

  media: [
    {
      id: 'pediatric-airway',
      type: 'diagram',
      filename: 'pediatric-vs-adult-airway.svg',
      title: 'Pediatric vs. Adult Airway Anatomy',
      description: 'Diagram comparing pediatric and adult airway anatomical differences',
    },
    {
      id: 'obstetric-physiology',
      type: 'diagram',
      filename: 'pregnancy-physiologic-changes.svg',
      title: 'Pregnancy Physiologic Changes',
      description: 'Diagram showing cardiovascular and respiratory changes in pregnancy',
    },
  ],

  citations: [
    {
      id: 'asa-pediatric',
      type: 'website',
      title: 'Practice Guidelines for Pediatric Anesthesia',
      source: 'American Society of Anesthesiologists',
      url: 'https://www.asahq.org/standards-and-guidelines',
    },
    {
      id: 'soap-obstetric',
      type: 'website',
      title: 'Obstetric Anesthesia Practice Guidelines',
      source: 'Society for Obstetric Anesthesia and Perinatology',
      url: 'https://soap.org/',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-risks', targetType: 'topic', relationship: 'related', label: 'Anesthesia Risks' },
    { targetId: 'obgyn-anatomy-female-reproductive', targetType: 'structure', relationship: 'related', label: 'Female Reproductive System' },
  ],

  tags: {
    systems: ['nervous', 'respiratory', 'cardiovascular'],
    topics: ['anesthesia', 'pediatrics', 'geriatrics', 'obstetrics', 'high-risk patients'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'pediatrics', 'obgyn', 'geriatrics'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default specialPopulationsContent;
