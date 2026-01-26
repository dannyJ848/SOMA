/**
 * Postoperative Care
 *
 * PACU management, recovery criteria, and postoperative
* complications assessment.
 */

import { EducationalContent } from '../types';

export const postoperativeCareContent: EducationalContent = {
  id: 'anesthesia-postoperative-care',
  type: 'process',
  name: 'Postoperative Care and Recovery',
  alternateNames: ['PACU Care', 'Post-Anesthesia Recovery', 'Recovery Room'],

  levels: {
    1: {
      level: 1,
      summary: 'After surgery, you go to a recovery room where nurses watch you closely until you\'re fully awake and ready to go home or to your hospital room.',
      explanation: `After surgery, you're moved to a special recovery area called the PACU (Post-Anesthesia Care Unit). Nurses watch you very carefully until the anesthesia wears off.

**What Happens in the Recovery Room:**

**Monitoring:**
- A nurse is with you or watching you constantly
- Your heart rate, blood pressure, and breathing are checked often
- You're connected to a monitor that beeps if something needs attention
- You're given oxygen if needed

**Waking Up from Anesthesia:**
- You might feel groggy or confused at first
- This is normal and goes away within 30-60 minutes
- Some people feel emotional or cry - this is also normal
- You may feel cold or shivery

**Pain Management:**
- The nurse asks about your pain regularly
- Pain medicine is given through your IV or by mouth
- It's important to tell the nurse if you're hurting
- Don't wait until pain is severe to speak up

**Managing Side Effects:**

**Nausea (Feeling Sick to Your Stomach):**
- Common after anesthesia and surgery
- Medicine can be given to help
- Tell the nurse if you feel queasy
- Avoid eating right away if you feel sick

**Sore Throat:**
- If you had a breathing tube, your throat might hurt
- Usually goes away in a day or two
- Cold drinks and lozenges can help

**Dry Mouth:**
- Very common because you couldn't drink before surgery
- Ice chips help (when you're allowed)
- Feeling returns when you can drink liquids

**Going Home (Outpatient Surgery):**

**Discharge Criteria:**
- You must be awake and alert
- Your pain is under control with pills
- You can keep liquids down
- You can walk with help
- Someone must be available to drive you
- Someone should stay with you for 24 hours

**Instructions for Home:**
- Rest for the rest of the day
- Take pain medicine as prescribed
- Don't drive for 24 hours
- Don't make important decisions for 24 hours
- Eat light foods at first
- Call your doctor if you have concerns

**Staying in the Hospital:**

If you're staying overnight, you'll go from PACU to your room when:
- You're fully awake
- Your vital signs are stable
- Your pain is controlled
- You can move your arms and legs

**Common Feelings in Recovery:**
- Sleepy or groggy
- Cold or shivering
- Sore throat from breathing tube
- Pain at the surgery site
- Nausea
- Thirsty
- Weak
- Confused (especially older adults)

Remember: These feelings are normal and temporary. The recovery team is there to help you feel better!`,
      keyTerms: [
        { term: 'PACU', definition: 'Post-Anesthesia Care Unit - the recovery room where patients wake up from anesthesia', pronunciation: 'P-A-C-U' },
        { term: 'vital signs', definition: 'Important body measurements that show how well your body is working: blood pressure, heart rate, breathing, temperature' },
        { term: 'discharge', definition: 'When you\'re allowed to leave the hospital or surgical center' },
        { term: 'IV', definition: 'A small tube in a vein that gives medicine and fluids directly into your bloodstream' },
        { term: 'outpatient surgery', definition: 'Surgery where you go home the same day instead of staying overnight' },
      ],
      analogies: [
        'The PACU is like an airport gate after a long flight - you\'re there until you\'re ready for the next part of your journey.',
        'Waking up from anesthesia is like a computer rebooting - everything comes back online step by step.',
      ],
      examples: [
        'After having appendix surgery, a patient spends 1-2 hours in PACU before going to their hospital room.',
        'Someone having knee arthroscopy goes home the same day after 1-2 hours in PACU.',
        'A child having ear tubes wakes up quickly and can go home in 30 minutes.',
      ],
      patientCounselingPoints: [
        'You must have someone drive you home after anesthesia - you cannot drive for 24 hours.',
        'Tell the nurse about pain or nausea right away - don\'t wait until it\'s severe.',
        'You may not remember much from the recovery room - this is normal.',
      ],
    },
    2: {
      level: 2,
      summary: 'Postoperative care in the PACU focuses on monitoring recovery from anesthesia, managing pain and nausea, and ensuring patient safety before discharge.',
      explanation: `The Post-Anesthesia Care Unit (PACU) provides specialized care for patients recovering from anesthesia. The PACU nurse manages the transition from anesthetized to awake state.

## Phases of Post-Anesthesia Care

**Phase I PACU:**
- Immediate postoperative recovery
- Intensive nursing care (1:1 or 1:2 nurse:patient ratio)
- Focus: Maintaining airway, managing hemodynamics, treating complications
- Duration: 1-3 hours typically

**Phase II PACU (Step-down Unit):**
- Less intensive monitoring
- Patient preparing for discharge
- Focus: Oral intake, ambulation, discharge teaching
- Duration: 1-2 hours

## PACU Monitoring Standards

**Required Monitoring:**
- Level of consciousness (every 15-30 minutes)
- Blood pressure (every 5-15 minutes initially)
- Heart rate and rhythm (continuous ECG if indicated)
- Respiratory rate
- Oxygen saturation (continuous pulse oximetry)
- Temperature
- Pain score
- Nausea/vomiting assessment
- Surgical site bleeding

**Airway and Breathing:**
- Maintain patent airway
- Supplemental oxygen as needed (SpO2 ≥92%)
- Monitor for respiratory depression
- Treat airway obstruction (jaw thrust, oral airway)
- Capnography for patients at risk of apnea

## Post-Anesthesia Scoring Systems

**Aldrete Recovery Score (Modified):**
Each category scored 0-2:

| Parameter | 0 | 1 | 2 |
|-----------|---|---|---|
| Activity | Unable to move | Moves 2 extremities | Moves 4 extremities |
| Respiration | Apneic | Limited/dyspneic | Normal, deep breaths |
| Circulation | BP ±50% baseline | BP ±20-49% baseline | BP ±20% baseline |
| Consciousness | Not responsive | Responsive to stimuli | Fully awake |
| O2 Saturation | <90% on room air | >90% with O2 | >92% on room air |

**Discharge from Phase I:** Score ≥8 or ≥9 if starting at 0

**Post-Anesthetic Discharge Scoring System (PADSS):**
Similar to Aldrete but adds pain, nausea/vomiting assessment

## Common PACU Complications

**Nausea and Vomiting:**
- Incidence: 20-30% overall
- Risk factors: Female, nonsmoker, history of PONV, opioids
- Treatment: Ondansetron 4 mg IV, dexamethasone 4-8 mg
- Rescue: Promethazine, dimenhydrinate, metoclopramide

**Pain:**
- Assessed using pain scales (0-10, Faces scale)
- Treatment: Multimodal approach
  - NSAIDs (ketorolac 15-30 mg IV)
  - Acetaminophen 1000 mg IV/PO
  - Opioids (fentanyl 25-50 mcg IV, hydromorphone 0.2-0.4 mg IV)
- Goal: Pain score ≤4 before discharge

**Hypothermia:**
- Core temperature <36°C
- Causes: Anesthesia impairs thermoregulation, cold OR
- Treatment: Forced-air warming blankets, warm IV fluids
- Prevention: Active warming intraoperatively

**Shivering:**
- Incidence: Up to 65%
- Treatment: Meperidine 12.5-25 mg IV (most effective)
- Alternatives: Clonidine, doxapram

**Emergence Agitation:**
- Confusion, thrashing on emergence
- More common in children, sevoflurane anesthesia
- Treatment: Reassurance, benzodiazepines if needed

**Hypotension:**
- MAP <65 mmHg or >20% decrease from baseline
- Causes: Hypovolemia, vasodilation, residual anesthesia
- Treatment: IV fluid bolus, phenylephrine or ephedrine

**Hypertension:**
- >20% increase from baseline
- Causes: Pain, emergence, light anesthesia
- Treatment: Analgesia, beta-blockers (labetalol 5-10 mg IV)

**Bradycardia:**
- HR <50 bpm
- Causes: Vagal stimulation, opioids, spinal anesthesia
- Treatment: Atropine 0.5 mg IV

**Urinary Retention:**
- Inability to void after surgery
- Incidence: Higher with spinal/epidural, pelvic surgery
- Treatment: Catheterization if symptomatic

## Discharge Criteria

**Phase I Discharge (to home or inpatient unit):**
- Aldrete score ≥8 or ≥9 if starting at 0
- Airway patent, adequate breathing
- Stable vital signs for 30 minutes
- Pain controlled with oral medications
- Minimal nausea/vomiting
- Able to move extremities

**Phase II Discharge (home):**
- Aldrete score ≥9 or PADSS ≥9
- Pain controlled with oral meds
- Able to tolerate oral fluids
- Able to ambulate (if applicable)
- Responsible adult available to accompany
- Written discharge instructions given

## Postoperative Instructions

**Diet:**
- Start with clear liquids
- Advance to light foods as tolerated
- Avoid heavy, spicy, greasy foods initially

**Activity:**
- Rest for remainder of day
- No driving for 24 hours
- No alcohol for 24 hours
- No important decisions for 24 hours

**Medications:**
- Take prescribed medications as directed
- Resume home medications as instructed
- Know pain medication schedule

**Warning Signs - Call Doctor If:**
- Severe pain not controlled by meds
- Fever >101°F (38.3°C)
- Redness, swelling, or drainage from incision
- Nausea/vomiting >24 hours
- Inability to urinate within 8 hours
- Chest pain or shortness of breath`,
      keyTerms: [
        { term: 'Aldrete score', definition: 'Scoring system to assess recovery from anesthesia; measures activity, respiration, circulation, consciousness, and color' },
        { term: 'multimodal analgesia', definition: 'Using multiple types of pain medicine together to provide better pain relief with fewer side effects' },
        { term: 'emergence', definition: 'The process of waking up from anesthesia' },
        { term: 'hypothermia', definition: 'Dangerously low body temperature, below 95°F (35°C)' },
        { term: 'urinary retention', definition: 'Inability to empty the bladder; common after anesthesia and surgery' },
      ],
      analogies: [
        'The Aldrete score is like a traffic light - green means you\'re recovering well and can move to the next stage.',
        'Multimodal analgesia is like using multiple tools to fix something - each tool helps a little, and together they work better.',
      ],
      examples: [
        'A patient with Aldrete score 9 can move to Phase II or be discharged to their hospital room.',
        'Someone with PONV gets ondansetron 4 mg IV and reassessed in 30 minutes.',
        'A patient in pain receives a combination of ketorolac and acetaminophen to reduce opioid needs.',
      ],
    },
    3: {
      level: 3,
      summary: 'Postoperative care involves systematic assessment of organ system recovery, aggressive management of pain and nausea, and recognition of evolving complications.',
      explanation: `## Post-Anesthesia Care Unit Standards

**ASA Standards for Post-Anesthesia Care:**
1. Qualified personnel present continuously
2. Oxygen and suction immediately available
3. Monitoring equipment functional and calibrated
4. Pharmacologic antagonists available (naloxone, flumazenil)
5. Emergency equipment available (crash cart, defibrillator)
6. Standardized discharge criteria
7. Transfer of care to qualified personnel

## Physiologic Recovery from Anesthesia

**Pharmacokinetic Recovery:**
- **Redistribution**: Drug moves from brain to muscle/fat
- **Metabolism**: Liver breaks down drugs (amides)
- **Excretion**: Kidneys eliminate metabolites
- **Reversal agents**: Speed recovery but don't eliminate drugs

**Context-sensitive half-time:**
- Time for plasma concentration to decrease 50%
- Increases with longer infusions
- Explains prolonged effects after long cases

**Organ System Recovery:**

**Central Nervous System:**
- Emergence from unconsciousness
- Return of protective reflexes
- Cognitive function recovery
- Memory formation returns

**Cardiovascular System:**
- Autonomic tone returns
- Vasomotor stability
- Heart rate and blood pressure normalization
- May take hours for complete return

**Respiratory System:**
- Respiratory drive returns
- Airway reflexes return
- Adequate spontaneous ventilation
- Response to hypoxia/hypercapnia returns

**Gastrointestinal System:**
- Bowel sounds return
- GI motility recovers (hours to days)
- Ability to tolerate oral intake
- Ileus common after abdominal surgery

**Genitourinary System:**
- Bladder sensation returns
- Detrusor function returns
- Urinary retention risk (especially with neuraxial)

## Postoperative Complications Recognition

**Respiratory Complications:**
- **Hypoxemia**: SpO2 <90%
  - Causes: Atelectasis, aspiration, opioids
  - Treatment: Oxygen, treat underlying cause
- **Hypercapnia**: ETCO2 >45 mmHg
  - Causes: Opioid-induced respiratory depression
  - Treatment: Reduce opioids, consider naloxone
- **Atelectasis**: Most common cause of fever POD #1
  - Treatment: Incentive spirometry, early ambulation

**Cardiovascular Complications:**
- **Hypotension**: MAP <65 mmHg
  - Assess: Bleeding, hypovolemia, vasodilation, sepsis
- **Hypertension**: >20% above baseline
  - Causes: Pain, anxiety, withdrawal from beta-blockers
- **Arrhythmias**: Atrial fibrillation, PVCs
  - Assess: Electrolytes, hypoxia, pain, ischemia

**Neurologic Complications:**
- **Postoperative delirium**: Acute confusion, fluctuating course
  - Risk: Age >70, preoperative cognitive impairment, major surgery
  - Treatment: Identify and treat precipitating causes
- **POCD (Postoperative Cognitive Dysfunction)**: Persistent decline
  - More subtle, may persist for months
- **PONV (Postoperative Nausea/Vomiting)**:
  - Risk scoring: Apfel score (female, nonsmoker, PONV history, opioids)
  - Treatment: Ondansetron, dexamethasone, droperidol, promethazine

**Renal and Metabolic:**
- **Oliguria**: <0.5 mL/kg/hr for 2+ hours
  - Assess: Hypovolemia, low cardiac output, urinary retention
- **Electrolyte abnormalities**: Hyponatremia, hypokalemia
  - Common due to fluid shifts, third-spacing

## Pain Management Principles

**Multimodal Analgesia:**
- **NSAIDs**: Ketorolac, ibuprofen (reduce opioid requirements)
- **Acetaminophen**: 1000 mg IV/PO q6h
- **Gabapentinoids**: Gabapentin, pregabalin (neuropathic pain)
- **Local anesthetics**: Surgical site infiltration, nerve blocks
- **Opioids**: Reserve for breakthrough pain

**Pain Assessment:**
- Numeric rating scale (0-10)
- Faces scale (children, cognitive impairment)
- Critical Care Pain Observation Tool (CPOT) for intubated patients
- Target pain score ≤4 at rest, ≤6 with movement

**Regional Analgesia:**
- **Epidural infusion**: Excellent for abdominal/thoracic surgery
- **Nerve catheters**: Peripheral nerve blocks with catheters
- **Single-shot blocks**: Transient analgesia (6-24 hours)

## Special Populations in PACU

**Pediatrics:**
- Higher risk of laryngospasm, bronchospasm
- Emergence agitation common (especially with sevoflurane)
- Weight-based dosing critical
- Parents may be present in PACU

**Elderly:**
- Higher risk of delirium, POCD
- Delayed recovery from anesthesia
- Multiple comorbidities
- Polypharmacy interactions
- Require lower drug doses

**Obstructive Sleep Apnea:**
- STOP-BANG screening identifies high-risk patients
- Higher respiratory complication risk
- Extended monitoring may be needed
- Resume CPAP as soon as possible
- Consider ICU admission for severe OSA after major surgery

**Morbid Obesity:**
- Higher PONV risk
- Difficult airway management
- Higher pulmonary complication risk
- Drug dosing (IBW vs. actual weight)
- May require bilevel positive airway pressure

**Pregnancy:**
- Fetal monitoring considerations after 20 weeks gestation
- Teratogenic drugs avoided postpartum if breastfeeding
- Pregnancy-induced hypertension persists postpartum
- Thromboembolism prophylaxis

## Discharge Planning

**Postoperative Orders:**
- Activity level
- Diet advancement
- Medications (resume home meds, new prescriptions)
- VTE prophylaxis
- Bowel regimen (if applicable)
- Wound care
- Follow-up

**Patient Education:**
- Wound care instructions
- Activity restrictions
- Medication schedule
- Warning signs and symptoms
- Contact information
- Follow-up appointment`,
      keyTerms: [
        { term: 'context-sensitive half-time', definition: 'Time required for plasma drug concentration to decrease 50% after stopping an infusion; increases with longer infusion duration' },
        { term: 'Apfel score', definition: 'Risk assessment for PONV: female, nonsmoker, history of PONV/motion sickness, postoperative opioids' },
        { term: 'CPOT', definition: 'Critical Care Pain Observation Tool - pain assessment tool for non-communicative patients' },
        { term: 'ileus', definition: 'Temporary lack of bowel motility after abdominal surgery; causes abdominal distension, nausea, inability to pass stool/flatus' },
        { term: 'VTE prophylaxis', definition: 'Venous Thromboembolism prevention - measures to prevent blood clots (compression devices, blood thinners)' },
      ],
      clinicalNotes: 'Opioid-induced respiratory depression is the most serious PACU complication. Narcan (naloxone) should always be immediately available. Hypothermia prolongs drug action, causes coagulopathy, and increases infection risk - active warming should be routine for all but the shortest cases.',
    },
    4: {
      level: 4,
      summary: 'Postoperative care requires comprehensive assessment of multi-system recovery, vigilant monitoring for evolving complications, and sophisticated pain management strategies.',
      explanation: `## Advanced Post-Anesthesia Care

**Enhanced Recovery After Surgery (ERAS) Pathways:**

**ERAS Principles in PACU:**
- Early extubation (operating room or immediate PACU)
- Reduced opioid use (multimodal analgesia)
- Early oral intake (within 4 hours)
- Early mobilization (day of surgery)
- Goal-directed fluid therapy
- Minimized tubes and drains (remove ASAP)

**Outcomes:**
- Reduced length of stay
- Reduced complications
- Faster return of bowel function
- Reduced cost

## Postoperative Delirium Assessment

**Confusion Assessment Method for ICU (CAM-ICU):**
1. **Acute onset** or fluctuating course
2. **Inattention**
3. **Disorganized thinking**
4. **Altered level of consciousness**

Positive delirium: Features 1 + 2 + either 3 or 4

**Risk Factors:**
- Age >65 (risk increases with age)
- Preoperative cognitive impairment
- Major surgery (especially orthopedic, cardiac)
- Preoperative depression
- Visual/hearing impairment
- Alcohol withdrawal

**Prevention Strategies:**
- Avoid benzodiazepines
- Minimize anticholinergics
- Adequate pain control (minimize opioids)
- Early mobilization
- Reorient patient frequently
- Sensory aids (glasses, hearing aids)
- Sleep hygiene
- Hydration, nutrition

**Treatment:**
- Identify and treat precipitating causes
- Hypoxia, infection, urinary retention, constipation
- Pain, dehydration, electrolyte abnormalities
- Low-dose antipsychotics (haloperidol, quetiapine) if needed
- Environmental modifications (quiet room, familiar objects)

## Postoperative Pain Management - Advanced

**Opioid-Sparing Strategies:**

**Regional Techniques:**
- **Epidural analgesia**: Superior for major abdominal/thoracic
- **Paravertebral blocks**: Alternative to epidural for thoracic
- **Transversus abdominis plane (TAP) blocks**: Abdominal wall
- **Liposomal bupivacaine**: Extended duration (up to 72 hours)

**Non-Opioid Adjuncts:**
- **Dexamethasone**: 4-8 mg (antiemetic + analgesic)
- **Ketamine**: Low-dose infusion (opioid-sparing)
- **Lidocaine infusion**: 1-2 mg/kg/hr (abdominal surgery)
- **Gabapentin**: 300-600 mg preop and postop
- **Magnesium**: 30-50 mg/kg (NMDA antagonist)

**Enhanced Recovery Protocols:**
- Scheduled acetaminophen and NSAIDs
- NSAIDs contraindicated in some patients (CKD, bleeding risk)
- Opioids reserved for breakthrough pain
- Early transition to oral analgesics

## Respiratory Complications - Advanced

**Postoperative Hypoxemia Etiologies:**
- **Atelectasis**: Most common POD #1-2
- **Pulmonary embolism**: Consider in sudden hypoxia
- **Pneumonia**: Fever, leukocytosis, infiltrate
- **Pulmonary edema**: Fluid overload, cardiac dysfunction
- **Aspiration**: Delayed presentation up to 24 hours

**Ventilator Weaning:**
- **RSBI** (Rapid Shallow Breathing Index): f/VT <100 predicts success
- **Spontaneous breathing trial**: 30-120 minutes
- **Extubation criteria**: Alert, adequate cough, RSBI <100

**Noninvasive Ventilation:**
- **CPAP**: Prevents atelectasis, treats OSA
- **BiPAP**: Treats hypercapnic respiratory failure
- **High-flow nasal cannula**: Improved oxygenation, comfort

## Cardiovascular Monitoring

**Hemodynamic Optimization:**
- **Stroke volume variation**: Fluid responsiveness
- **Cardiac output monitoring**: High-risk surgery
- **Lactate clearance**: Tissue perfusion marker
- **ScvO2**: Central venous oxygen saturation

**Arrhythmia Management:**
- **Atrial fibrillation**: Rate control (beta-blockers), consider anticoagulation
- **PVCs**: Treat if >6/minute or symptomatic
- **Bradycardia**: Atropine, pacing if hemodynamically significant

**Myocardial Infarction:**
- May be silent (no chest pain)
- Troponin elevation 24-48 hours post-op
- ECG changes (may be nonspecific)
- Higher mortality than non-operative MI

## Fluid and Electrolyte Management

**Goal-Directed Fluid Therapy:**
- Stroke volume variation >13% = fluid responsive
- Stroke volume increases <10% after fluid bolus = not responsive
- Avoid both under- and over-resuscitation

**Postoperative Fluid Shifts:**
- **Third-spacing**: Fluid moves into interstitial space
- **Edema**: Peripheral, pulmonary
- **Weight gain**: Despite fluid restriction
- Resolution over 2-5 days

**Electrolyte Abnormalities:**
- **Hyponatremia**: <135 mEq/L (dilution from free water)
- **Hypokalemia**: <3.5 mEq/L (common with diuretics)
- **Hypomagnesemia**: <1.8 mg/dL (arrhythmia risk)
- **Hypophosphatemia**: <2.5 mg/dL (muscle weakness)

## Gastrointestinal Complications

**Ileus Management:**
- **Prevention**: Multimodal analgesia, early ambulation, alvimopan
- **Diagnosis**: Absent bowel sounds, distension, inability to pass flatus
- **Treatment**: NPO, NGT if vomiting, rectal tube if distended
- **Alvimopan**: Peripherally acting mu-opioid receptor antagonist

**Postoperative Nausea - Treatment Algorithm:**
- **First-line**: Ondansetron 4 mg IV
- **Add**: Dexamethasone 4-8 mg
- **Second-line**: Promethazine 6.25-12.5 mg IV
- **Refractory**: Haloperidol 1-2 mg IV, aprepitant 80 mg

## Renal Considerations

**Acute Kidney Injury (KDIGO criteria):**
- **Stage 1**: Creatinine ↑1.5-1.9x baseline or ↑0.3 mg/dL
- **Stage 2**: Creatinine ↑2.0-2.9x baseline
- **Stage 3**: Creatinine ↑3.0x baseline or ≥4.0 mg/dL

**Prevention:**
- Maintain renal perfusion (avoid hypotension)
- Avoid nephrotoxins (NSAIDs, ACE inhibitors)
- Hydration before contrast
- Monitor urine output (>0.5 mL/kg/hr)`,
      keyTerms: [
        { term: 'CAM-ICU', definition: 'Confusion Assessment Method for ICU - validated tool for diagnosing delirium in critically ill patients' },
        { term: 'RSBI', definition: 'Rapid Shallow Breathing Index - respiratory rate divided by tidal volume; predicts extubation success' },
        { term: 'ScvO2', definition: 'Central venous oxygen saturation - measure of tissue oxygenation and cardiac output' },
        { term: 'alvimopan', definition: 'Peripherally acting mu-opioid receptor antagonist; speeds recovery of GI function without affecting analgesia' },
        { term: 'KDIGO', definition: 'Kidney Disease: Improving Global Outcomes - organization that sets clinical practice guidelines for kidney disease' },
      ],
      clinicalNotes: 'Delirium in the elderly is an independent predictor of mortality, institutionalization, and cognitive decline. Prevention strategies are more effective than treatment. Multimodal analgesia can reduce opioid requirements by 50% or more. Early mobilization (day of surgery) is one of the most effective ERAS interventions.',
    },
    5: {
      level: 5,
      summary: 'Contemporary postoperative care integrates enhanced recovery pathways, individualized pain management, and vigilant monitoring to optimize outcomes and reduce complications.',
      explanation: `## State of the Art: Postoperative Care 2024

**ERAS (Enhanced Recovery After Surgery)** has transformed postoperative care:
- Standardized protocols reduce length of stay 30-50%
- Complication rates reduced by 30-40%
- Patient satisfaction improved
- Cost reduction through efficiency

## Evidence-Based Updates

**Multimodal Opioid-Sparing Analgesia:**

**First-Line Components:**
- Acetaminophen: 1000 mg IV/PO q6h (unless contraindicated)
- NSAID: Ketorolac 15-30 mg IV q6h OR ibuprofen 600 mg PO q6h
- Gabapentin: 300 mg preop and q8h (if not contraindicated)
- Local anesthetic: Wound infiltration or nerve block

**Opioid Use:**
- Reserve for breakthrough pain
- Lowest effective dose
- Shortest duration possible
- Educate on risks and proper disposal

**Prescribing Guidelines (2023):**
- 50% reduction in opioid prescribing achieved without compromising pain control
- Default to 5-10 pills for most procedures
- Use state Prescription Drug Monitoring Programs (PDMP)
- Consider naloxone co-prescribing for high-risk patients

## Postoperative Delirium - 2024 Update

**Prevention Bundle (Evidence-Based):**
- Reorientation protocols (every 4 hours)
- Early mobilization (day 0 or 1)
- Adequate hydration and nutrition
- Sleep promotion (quiet at night, minimize disturbances)
- Sensory aids (glasses, hearing aids)
- Avoid deliriogenic medications (benzodiazepines, anticholinergics)
- Pain control without over-sedation

**Treatment:**
- Identify precipitating cause (infection, urinary retention, constipation)
- Non-pharmacologic first (reorientation, calm environment)
- Antipsychotics only if severe distress or safety concern
- Haloperidol: 0.5-1 mg PO/IV
- Quetiapine: 12.5-25 mg PO (elderly start low)
- Avoid benzodiazepines (worsen delirium)

## Enhanced Recovery After Surgery - 2024 Protocols

**Preoperative:**
- Patient education and expectation setting
- Carbohydrate loading (2 hours pre-op)
- Shortened fasting (clear liquids to 2 hours)
- No prolonged fasting after midnight

**Intraoperative:**
- Short-acting anesthetics (desflurane, propofol TIVA)
- Multimodal analgesia initiation
- Goal-directed fluid therapy
- Minimally invasive technique when possible
- Normothermia maintenance

**Postoperative:**
- Early extubation (OR or immediate PACU)
- Multimodal opioid-sparing analgesia
- Early oral intake (day 0)
- Early mobilization (day 0 or 1)
- Remove drains, tubes, catheters ASAP

## Specialized PACU Populations

**Bariatric Surgery Patients:**
- Obstructive sleep apnea screening mandatory
- BiPAP for OSA patients postoperatively
- Higher PONV risk (aggressive prophylaxis)
- DVT prophylaxis extended 4 weeks post-discharge
- Weight-based dosing (IBW or adjusted body weight)

**Ambulatory Surgery (Same-Day Discharge):**
- Discharge criteria critical to prevent readmission
- Adequate pain control with oral meds
- Tolerating oral fluids
- Responsible adult to accompany home
- Written and verbal discharge instructions
- Follow-up call within 24-48 hours

**Critical Care PACU Admissions:**
- Preoperative ICU admission
- Intraoperative complications
- Unstable comorbidities
- Major blood loss/transfusion
- Complex surgery (cardiac, neurosurgery, major vascular)

## Quality Metrics and Improvement

**PACU Quality Measures:**
- PACU length of stay (excessive stays indicate issues)
- Unexpected ICU admission rate
- PONV incidence (target <10% with prophylaxis)
- Pain scores on discharge (target ≤4)
- Readmission rate (<48 hours)
- Patient satisfaction scores

**Dashboards and Reporting:**
- Real-time quality dashboards
- Provider-specific data
- Benchmarking against peers
- Root cause analysis for outliers
- Plan-Do-Study-Act cycles for improvement

## Future Directions

**Remote Postoperative Monitoring:**
- Wearable devices for continuous monitoring at home
- Patient-reported outcomes via apps
- Early detection of deterioration
- Reduced readmissions

**Telemedicine Follow-up:**
- Virtual visits for postoperative check
- Wound assessment via photos
- Medication reconciliation
- Reduced travel burden

**Artificial Intelligence:**
- Predictive models for complications
- Early warning systems for deterioration
- Automated charting and documentation
- Discharge optimization

**Personalized Pain Management:**
- Pharmacogenomic testing (CYP2D6, OPRM1)
- Predict opioid response and risk
- Tailor analgesic regimens
- Reduce trial-and-error prescribing

## Opioid Stewardship

**Principles:**
- Opioids are not first-line for most postoperative pain
- Multimodal non-opioid approaches preferred
- Lowest effective dose for shortest duration
- Educate patients on risks and proper use
- Safe storage and disposal counseling

**Prescribing Guidelines (2024):**
- Duration limits: 3-7 days for most procedures
- Quantity limits: 5-20 pills depending on procedure
- Mandatory PDMP check
- Consider naloxone for high-risk patients
- Reassessment before refills

## Transition of Care

**Handoff Communication:**
- Standardized tools (IPASS, I-PASS)
- Include: Illness severity, Patient summary, Action list, Situation awareness, Synthesis
- Read-back confirmation
- Written documentation

**Discharge Summary:**
- Procedure performed
- Complications if any
- Discharge medications
- Activity and diet instructions
- Warning signs
- Follow-up plan`,
      keyTerms: [
        { term: 'ERAS', definition: 'Enhanced Recovery After Surgery - evidence-based, multidisciplinary approach to optimize perioperative care' },
        { term: 'PDMP', definition: 'Prescription Drug Monitoring Program - state database tracking controlled substance prescriptions' },
        { term: 'IPASS', definition: 'I-PASS - structured handoff tool: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver' },
        { term: 'multimodal analgesia', definition: 'Using multiple classes of analgesics with different mechanisms to provide superior pain relief while minimizing opioid use' },
        { term: 'opioid stewardship', definition: 'Coordinated interventions promoting appropriate opioid prescribing to improve patient outcomes and reduce misuse' },
      ],
      clinicalNotes: `2024 Practice Updates:
1. Multimodal analgesia is standard - acetaminophen + NSAID + gabapentinoid for most major surgery
2. Opioid prescribing reduced 50% without compromising pain control
3. ERAS protocols reduce complications, length of stay, and cost across surgical specialties
4. Delirium prevention more effective than treatment; avoid benzodacholine anticholinergics
5. Early mobilization (day 0 or 1) one of most effective ERAS interventions
6. Ambulatory surgery comprises >70% of all surgeries - discharge criteria critical
7. Telemedicine follow-up expanding for postoperative care`,
    },
  },

  media: [
    {
      id: 'alldrete-score-table',
      type: 'diagram',
      filename: 'alldrete-recovery-score.svg',
      title: 'Modified Aldrete Recovery Score',
      description: 'Scoring table for post-anesthesia recovery assessment',
    },
    {
      id: 'pacu-algorithm',
      type: 'diagram',
      filename: 'pacu-management-algorithm.svg',
      title: 'PACU Management Algorithm',
      description: 'Decision algorithm for common PACU problems',
    },
  ],

  citations: [
    {
      id: 'asa-pacu-standards',
      type: 'article',
      title: 'Standards for Postanesthesia Care',
      source: 'American Society of Anesthesiologists',
      url: 'https://www.asahq.org/standards-and-guidelines',
    },
    {
      id: 'eras-society',
      type: 'website',
      title: 'Enhanced Recovery After Surgery Society',
      source: 'ERAS Society',
      url: 'https://erassociety.org/',
    },
  ],

  crossReferences: [
    { targetId: 'anesthesia-basics', targetType: 'topic', relationship: 'parent', label: 'Anesthesia Basics' },
    { targetId: 'anesthesia-risks', targetType: 'topic', relationship: 'related', label: 'Anesthesia Risks' },
    { targetId: 'pain-management-acute-vs-chronic', targetType: 'topic', relationship: 'related', label: 'Pain Management' },
  ],

  tags: {
    systems: ['nervous', 'respiratory', 'cardiovascular', 'gastrointestinal'],
    topics: ['anesthesia', 'postoperative care', 'recovery', 'pain management'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['surgery', 'anesthesiology'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default postoperativeCareContent;
