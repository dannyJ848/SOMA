/**
 * Emergency Department Approach and Triage
 *
 * Covers the systematic approach to emergency patients, triage systems,
 * and initial assessment priorities in the emergency department.
 */

import { EducationalContent } from '../types';

export const emergencyApproachContent: EducationalContent = {
  id: 'emergency-approach-triage',
  type: 'topic',
  name: 'Emergency Department Approach and Triage',
  nameEs: 'Enfoque de Emergencias',
  alternateNames: ['ED Approach', 'Emergency Triage', 'Emergency Department Assessment', 'Primary Survey'],

  levels: {
    1: {
      level: 1,
      summary: 'When you arrive at an emergency department, the medical team uses a fast system to figure out who needs help first, like how a coach decides which player is hurt the worst and needs attention immediately.',
      explanation: `Emergency departments are special places where people go when they have serious health problems. Because so many people might need help at once, doctors and nurses use a system called triage to figure out who needs help the most urgently.

Think of it like a sports coach with several injured players. The coach has to quickly check each player to decide who has the most serious injury and needs help first. In the emergency department, this same idea helps save lives.

**What happens when you first arrive:**
- A specially trained nurse called a triage nurse will talk to you first
- They ask about your main problem and check your vital signs (heart rate, breathing, temperature)
- They give you a score that tells the team how quickly you need to be seen
- The sickest patients are always seen first, even if they arrived later than others

**The most important things doctors check first:**
1. Can you breathe properly?
2. Is your heart beating normally?
3. Are you awake and aware?
4. Do you have severe bleeding?
5. Are you in severe pain?

These five things are the most important for keeping you alive. Doctors check these first before worrying about anything else.

**Why the waiting room sometimes seems slow:**
- People with the most serious problems go first
- Some people need tests or treatments that take time
- Sometimes very sick people arrive by ambulance and go straight to treatment areas
- The team is always working as fast as they can safely

**What you can do:**
- Be ready to explain what is wrong
- Tell them about all your medicines
- Let them know if anything changes while you wait
- Ask if you're worried about waiting too long`,
      keyTerms: [
        { term: 'triage', definition: 'A system to sort patients by how sick they are and who needs help first' },
        { term: 'vital signs', definition: 'Important body measurements like heart rate, breathing rate, temperature, and blood pressure' },
        { term: 'emergency department', definition: 'The part of a hospital that treats people with serious and urgent health problems' },
        { term: 'priority', definition: 'Who or what needs attention before others based on how serious it is' },
      ],
      analogies: [
        'Triage is like a teacher deciding which student needs help first when several raise their hands at once.',
        'The emergency department is like a repair shop where they fix the most broken things first.',
      ],
      examples: [
        'Someone having a heart attack would be seen immediately, while someone with a small cut might wait longer.',
        'A person who can\'t breathe gets priority over someone with a sore throat.',
      ],
    },
    2: {
      level: 2,
      summary: 'Emergency department triage is a systematic process that rapidly assesses patients to determine treatment priority based on medical urgency, using standardized scales like the Emergency Severity Index (ESI).',
      explanation: `## The Emergency Department Triage Process

Triage comes from the French word "trier" meaning "to sort." In emergency medicine, it's the process of rapidly assessing patients to determine who needs immediate care and who can safely wait.

### The Triage Nurse's Role

The triage nurse is usually the first medical professional you see. Their job is to:
- Quickly assess your chief complaint
- Measure vital signs (blood pressure, heart rate, breathing rate, oxygen level, temperature)
- Ask about allergies, medications, and past medical history
- Assign a triage level or acuity score
- Start basic interventions if needed (like giving oxygen)

### Emergency Severity Index (ESI)

Most US emergency departments use the 5-level Emergency Severity Index:

**Level 1 - Immediate: Life-threatening**
- Patient needs immediate lifesaving treatment
- Examples: Cardiac arrest, severe respiratory distress, unresponsive
- Seen instantly by a team

**Level 2 - Emergent: High-risk situation**
- Patient could rapidly deteriorate
- Examples: Heart attack, stroke, severe pain, confusion, suicidal thoughts
- Seen rapidly, usually within 10 minutes

**Level 3 - Urgent: Stable but needs care**
- Patient is stable but needs multiple resources
- Examples: Dehydration needing IV fluids, broken bone, moderate pain
- Target: Seen within 30-60 minutes

**Level 4 - Less Urgent: Stable, needs one resource**
- Patient is stable, needs one test or treatment
- Examples: Simple wound care, urinary tract infection
- Target: Seen within 1-2 hours

**Level 5 - Non-urgent: Stable, needs few resources**
- Patient is stable, can safely wait
- Examples: Rash, minor sore throat, medication refill
- Target: Seen within 2-4 hours

## The Primary Survey

When doctors first see a sick patient, they do a "primary survey" to check for immediate threats to life. This follows the ABCDE approach:

**A - Airway**
- Is the airway open? Can air get to the lungs?
- Listen for stridor (a whistling sound when breathing)

**B - Breathing**
- Is the patient breathing adequately?
- Check breathing rate and oxygen level
- Listen to lung sounds

**C - Circulation**
- Check pulse and blood pressure
- Look for signs of shock (pale, clammy skin)
- Check for major bleeding

**D - Disability (Neurologic)**
- Check level of consciousness
- Ask simple questions to assess mental status
- Check pupil response

**E - Exposure/Environment**
- Fully examine the patient (may need to remove clothing)
- Keep patient warm
- Look for rashes, wounds, or other signs

## What Determines How Fast You're Seen

You're seen based on medical urgency, not arrival time. Factors that increase urgency:
- Abnormal vital signs (very high or low blood pressure, fast heart rate, low oxygen)
- Severe pain
- Chest pain or shortness of breath
- Changes in mental status (confusion, difficulty staying awake)
- Signs of infection with fever and low blood pressure
- Active bleeding
- High-risk medical history (previous heart attacks, weakened immune system)

Patients arriving by ambulance with serious conditions bypass the waiting room and go directly to a treatment area.`,
      keyTerms: [
        { term: 'Emergency Severity Index (ESI)', definition: 'A 5-level system used to rate how sick emergency patients are and how quickly they need care' },
        { term: 'acuity', definition: 'How severe or intense a medical condition is; higher acuity means more serious illness' },
        { term: 'primary survey', definition: 'The first quick check doctors do to find and fix life-threatening problems', pronunciation: 'PRI-mare-ee SUR-vay' },
        { term: 'vital signs', definition: 'Measurements of body functions including blood pressure, heart rate, breathing rate, temperature, and oxygen level' },
        { term: 'chief complaint', definition: 'The main symptom or problem that made the patient seek medical help' },
      ],
      analogies: [
        'The ESI system is like a color-coded alert system (red, orange, yellow, green, blue) that tells the team how fast to respond.',
        'The primary survey is like a pilot running through a checklist before takeoff - checking the most critical systems first.',
      ],
    },
    3: {
      level: 3,
      summary: 'Emergency department triage utilizes validated assessment tools to rapidly stratify patients by acuity, with the primary survey serving as a systematic approach to identify and immediately treat life-threatening conditions following the ABCDE mnemonic.',
      explanation: `## Triage Systems and Emergency Department Flow

### Emergency Severity Index (ESI) Algorithm

The ESI is the most widely used triage system in US emergency departments. It considers two key factors:
1. **Acuity** - How sick is the patient right now?
2. **Resource needs** - How many different resources will this patient need?

**ESI Level Determination:**

| Level | Description | Key Criteria | Resource Needs |
|-------|-------------|--------------|----------------|
| 1 | Requires immediate lifesaving intervention | Unresponsive, apnea, pulseless, SpO2 <90% | N/A - immediate |
| 2 | High-risk situation or severe pain/discomfort | Vital sign threats, confusion, active suicidal ideation | N/A - rapid assessment |
| 3 | Requires multiple resources | Need 2+ resources (labs, imaging, IV fluids, consult) | 2 or more |
| 4 | Requires one resource | Need 1 resource (labs, imaging, simple procedure) | 1 |
| 5 | Requires no resources | Physical exam only, maybe prescription | 0 |

**Resource Examples:**
- Lab work (CBC, chemistry panel, blood gases)
- Imaging studies (X-ray, CT, ultrasound)
- IV fluids or medications
- Specialty consultation
- Procedures (wound repair, splinting, Foley catheter)

### Other Triage Systems

**Manchester Triage System (MTS):**
- Uses flowcharts for specific presentations
- 52 separate discriminators for 5 priority levels
- More commonly used in Europe

**Canadian Triage and Acuity Scale (CTAS):**
- 5 levels similar to ESI
- More specific time targets for each level
- Standardized across Canadian EDs

## The Primary Survey: ABCDE Approach

The primary survey is a systematic approach to identify and treat immediate threats to life. Problems are addressed as they're found before moving to the next step.

**A - Airway with C-spine Protection**
- Assess: Is the airway patent? Can the patient speak?
- Listen for: Stridor, gurgling, snoring, hoarseness
- Intervene: Chin lift/jaw thrust, oral airway, intubation
- C-spine: If trauma suspected, maintain immobilization

**B - Breathing and Ventilation**
- Assess: Respiratory rate, effort, symmetry, breath sounds
- Look for: Retractions, accessory muscle use, paradoxical breathing
- Intervene: Oxygen, bag-valve-mask, chest decompression (tension pneumothorax)
- Monitor: Pulse oximetry, capnography

**C - Circulation with Hemorrhage Control**
- Assess: Pulse rate and quality, blood pressure, capillary refill, skin color/temperature
- Look for: Active bleeding, signs of shock (pale, cool, diaphoretic)
- Intervene: IV access, fluid resuscitation, blood products, direct pressure on bleeding
- Monitor: Cardiac rhythm, urine output

**D - Disability (Neurologic Status)**
- Assess: Level of consciousness, pupillary response, motor function
- Use: AVPU scale or Glasgow Coma Scale
- Look for: Focal neurologic deficits (stroke, spinal cord injury)
- Glucose: Check fingerstick blood sugar

**E - Exposure and Environment**
- Fully expose patient for complete examination
- Maintain body temperature (prevent hypothermia)
- Log-roll if back injury suspected
- Look for: Hidden injuries, rashes, wounds, bleeding

## Secondary Survey

After the primary survey is complete and life threats are addressed:
- Complete head-to-toe physical examination
- Detailed medical history (SAMPLE mnemonic)
- Additional diagnostic studies
- Ongoing reassessment

## Vitals and Monitoring

**Minimum Vital Signs for All Patients:**
- Heart rate (normal: 60-100)
- Blood pressure (normal: <120/80)
- Respiratory rate (normal: 12-20)
- Oxygen saturation (normal: ≥95% on room air)
- Temperature (normal: 36.1-37.2°C)
- Pain score (0-10 scale)

**Warning Signs (Abnormal Vitals):**
- Systolic BP <90 or >200
- Heart rate <50 or >120
- Respiratory rate <10 or >24
- Oxygen saturation <92%
- Temperature <35°C or >38.5°C

**Emergency Department Monitors:**
- Cardiac monitor (leads II, V5 most common)
- Continuous pulse oximetry
- Capnography (for intubated patients or procedural sedation)
- Frequent vital sign reassessment based on acuity`,
      keyTerms: [
        { term: 'ABCDE', definition: 'Mnemonic for primary survey: Airway, Breathing, Circulation, Disability, Exposure' },
        { term: 'AVPU', definition: 'Rapid consciousness assessment: Alert, responds to Verbal stimuli, responds to Pain, Unresponsive' },
        { term: 'acuity', definition: 'Severity of a patient\'s condition; higher acuity requires more urgent intervention' },
        { term: 'resource utilization', definition: 'In ESI triage, the number of tests, treatments, or consultations a patient will need' },
        { term: 'capnography', definition: 'Monitoring of exhaled CO2; useful for confirming airway placement and monitoring ventilation' },
        { term: 'accessory muscles', definition: 'Secondary breathing muscles (sternocleidomastoid, intercostals) used during respiratory distress' },
      ],
      clinicalNotes: 'The primary survey should take less than 1 minute for experienced providers. Repeat reassessment is critical - patients can deteriorate rapidly. When in doubt, reassess.',
    },
    4: {
      level: 4,
      summary: 'Emergency department triage employs risk stratification methodologies to optimize patient flow and resource allocation while prioritizing time-sensitive interventions for critically ill patients through systematic primary and secondary survey approaches.',
      explanation: `## Advanced Triage Concepts

### Physiologic Scoring Systems

**Modified Early Warning Score (MEWS):**
| Parameter | 0 | 1 | 2 | 3 |
|-----------|---|---|---|---|
| Systolic BP | 101-199 | 81-100 | ≥200 or 71-80 | ≤70 |
| Heart Rate | 51-100 | 41-50 or 101-110 | ≤40 or 111-129 | ≥130 |
| Respiratory Rate | 9-14 | 15-20 | 21-29 or ≤8 | ≥30 |
| Temperature | 36-38.4°C | | ≥38.5°C or ≤35°C | |
| AVPU | Alert | | Voice | Pain/Unresponsive |

MEWS ≥5 correlates with increased mortality and ICU admission.

**Shock Index (SI):**
- SI = Heart Rate / Systolic Blood Pressure
- Normal: 0.5-0.7
- >0.9: indicates shock, even if BP normal
- Particularly useful in trauma, sepsis, and postpartum hemorrhage

**qSOFA (for sepsis screening):**
- Respiratory rate ≥22
- Altered mentation
- Systolic BP ≤100
- Score ≥2: high risk of poor outcome

## Detailed Primary Survey Management

### Airway Assessment

** predictors of difficult airway:**
- MOANS: Mallampati 3-4, Obstructed, Apnea limited, Neck mobility limited, Snoring
- LEMON: Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility
- RODS: Restricted mouth opening, Obstruction, Decreased thyromental distance, Stiff spine

**Airway interventions:**
- Chin lift/jaw thrust (trauma: jaw thrust only)
- Oropharyngeal airway (OPA): semiconscious patients only
- Nasopharyngeal airway (NPA): can be used with gag reflex
- Supraglottic airways (LMA, King LT): bridge to definitive airway
- Endotracheal intubation: definitive airway
- Surgical airway (cricothyrotomy): when other methods fail

### Breathing Assessment

**Respiratory patterns:**
- Cheyne-Stokes: cyclic waxing-waning (bilateral brain dysfunction, heart failure)
- Biot\'s: irregular with apneic periods (medullary injury)
- Apneustic: prolonged inspiration with gasping (pontine lesion)
- Agonal: irregular, gasping, ineffective (terminal)

**Emergency thoracic decompression:**
- Indication: Tension pneumothorax (tracheal deviation, absent breath sounds, hemodynamic collapse)
- Procedure: 14-16 gauge catheter, 2nd intercostal space, midclavicular line
- Alternative: 4th-5th intercostal, anterior axillary line

### Circulatory Assessment

**Types of Shock:**

| Type | CO | SVR | CVP | Skin | Other findings |
|------|----|-----|-----|------|----------------|
| Hypovolemic | Low | High | Low | Cool, pale | Flat neck veins |
| Cardiogenic | Low | High | High | Cool, pale | Crackles, S3 |
| Distributive (septic) | High | Low | Low | Warm, flush | Warm shock |
| Distributive (anaphylactic) | High | Low | Low | Warm, flushing | Urticaria, wheeze |
| Distributive (neurogenic) | Low | High | Low | Warm, dry | Priapism |
| Obstructive (PE) | Low | High | High | Cool, pale | Loud P2 |
| Obstructive (tamponade) | Low | High | High | Cool, pale | Muffled heart sounds, PEA |

**Fluid resuscitation:**
- Crystalloids: Lactated Ringer\'s, Normal Saline
- Colloids: Albumin (limited use)
- Blood products: PRBCs, Plasma, Platelets (1:1:1 for massive transfusion)
- Vasopressors: Norepinephrine (first line), Vasopressin, Epinephrine, Dopamine (second line)

### Disability Assessment

**Glasgow Coma Scale:**
| Score | Eye Opening | Verbal | Motor |
|-------|-------------|--------|-------|
| 6 | | | Obeys commands |
| 5 | | Oriented | Localizes pain |
| 4 | Spontaneous | Confused | Normal flexion |
| 3 | To speech | Inappropriate | Abnormal flexion |
| 2 | To pain | Incomprehensible | Extension |
| 1 | None | None | None |

**Pupillary assessment:**
- Size: Normal 3-5mm, anisocoria significant if >1mm difference
- Shape: Regular vs irregular
- Reactivity: Direct and consensual light reflex
- CN III palsy: Dilated, fixed (blown pupil), eye down and out

## Emergency Department Operations

**Boarding**: When admitted patients wait in ED for inpatient beds
- Associated with increased mortality, length of stay, and left-without-being-seen rates

**Diversion**: When ED cannot accept ambulance patients
- Usually due to overcrowding or lack of critical care beds
- Should be minimized as it delays care

**Left Without Being Seen (LWBS):**
- Patients who leave before being evaluated
- Associated with long wait times and lack of communication
- Higher acuity patients who LWBS have worse outcomes`,
      keyTerms: [
        { term: 'MEWS', definition: 'Modified Early Warning Score; physiologic scoring system to identify deteriorating patients' },
        { term: 'Shock Index', definition: 'Heart rate divided by systolic BP; >0.9 suggests occult shock' },
        { term: 'qSOFA', definition: 'quick Sepsis-Related Organ Failure Assessment; 3-point bedside tool for sepsis screening' },
        { term: 'tension pneumothorax', definition: 'Life-threatening condition where air accumulates in pleural space, compressing heart and great vessels' },
        { term: 'cricothyrotomy', definition: 'Surgical airway through cricothyroid membrane; definitive rescue airway when intubation fails', pronunciation: 'kray-koe-thie-ROT-uh-mee' },
        { term: 'boarding', definition: 'Extended stay in ED after admission decision when inpatient beds unavailable; contributes to ED crowding' },
      ],
      clinicalNotes: 'Never delay life-saving interventions for comprehensive assessment. The primary survey should be repeated frequently. "Treat what you kill" - reassess after interventions.',
    },
    5: {
      level: 5,
      summary: 'Contemporary emergency medicine practice integrates evidence-based triage methodologies, systematic resuscitation protocols, and quality metrics to optimize patient outcomes while managing operational challenges of ED crowding and boarding.',
      explanation: `## Evidence-Based Triage and Emergency Department Operations

### Triage Accuracy and Reliability

**Inter-rater reliability:**
- ESI demonstrates substantial agreement (kappa 0.6-0.8)
- Higher reliability for Levels 1 and 5
- Lower reliability at intermediate levels (3-4)
- Training improves reliability

**Predictive validity:**
- ESI level correlates with:
  - Hospital admission (higher levels more likely)
  - ICU admission
  - Length of stay
  - Mortality
  - Resource utilization

### Triage in Special Populations

**Pediatric Considerations:**
- Use Pediatric ESI with specific age-based vital sign criteria
- Age-specific vital sign abnormalities:
  - Infants <3 months: fever ≥38°C (100.4°F) = high risk
  - Respiratory rate varies significantly by age
  - Blood pressure lower in children
- Special attention to:
  - Apnea
  - Poor feeding
  - Irritability/lethargy
  - Bulging fontanelle

**Geriatric Considerations:**
- Atypical presentations common
- Blunted physiologic response (may not mount fever or tachycardia)
- Baseline cognitive impairment complicates assessment
- Higher baseline acuity for any given complaint
- Polypharmacy increases adverse drug event risk

**Pregnant Patients:**
- ESI level automatically increased by 1 level for same presentation
- Normal physiologic changes mimic pathology:
  - Heart rate increases 10-15 bpm
  - Blood pressure decreases in 2nd trimester
  - Respiratory rate increases slightly
  - Anatomic changes affect airway management
- Supine hypotensive syndrome after 20 weeks gestation

**Psychiatric Patients:**
- Medical clearance still required
- Cannot assume psychiatric cause until organic etiology ruled out
- Red flags for organic causes:
  - Altered mental status
  - Visual hallucinations (vs auditory in psychiatric)
  - Autonomic instability
  - Focal neurologic findings

## ED Crowding and Patient Flow

**Metrics of ED Crowding:**
- NEDOCS (National Emergency Department Overcrowding Scale)
- EDWIN (Emergency Department Work Index)
- DEM (Demand, Emergency Department, Ward)

**Interventions to Reduce Crowding:**
- Input: Diversion protocols, urgent care centers, telemedicine
- Throughput: Point-of-care testing, bedside ultrasound, rapid assessment zones
- Output: Hospital-wide admission protocols, pull model for admits, discharge lounges

**Impact of Crowding:**
- Increased mortality (up to 10% higher in severely crowded EDs)
- Increased medical errors
- Increased pain management time
- Higher left-without-being-seen rates
- Lower patient satisfaction

**Boarding:**
- Primary contributor to ED crowding
- ACEP policy statement: Boarding "is a hospital-wide problem, not an ED problem"
- Solutions:
  - Full capacity protocol (board in hallways with nurse staffing)
  - hallway beds in ED with proper monitoring
  - Hospital-wide flow coordination
  - Inpatient bed optimization

## Quality Metrics in Emergency Medicine

**Timeliness Metrics:**
- Door-to-needle (thrombolysis): <45 minutes (stroke), <30 minutes (STEMI fibrinolysis)
- Door-to-balloon (PCI): <90 minutes (STEMI)
- Door-to-antibiotic: <3 hours (sepsis)
- Door-to-pain medication: <60 minutes
- Left-without-being-seen rate: <2%
- Time to pain relief: <60 minutes for severe pain

**Process Metrics:**
- Aspirin for ACS: >95%
- Timely reperfusion for STEMI: >95%
- Appropriate prophylaxis for VTE: >95%
- Avoidance of antibiotics for URI: >95%
- CT head within 25 minutes for stroke: >50%
- Admission for syncope with high-risk features: >95%

**Outcome Metrics:**
- ED mortality
- 72-hour return visit rate: <5%
- 7-day return admission rate: <1%
- Patient satisfaction scores
- Medical error rate

## Team-Based Emergency Care

**TeamSTEPPS in Emergency Medicine:**
- SBAR (Situation, Background, Assessment, Recommendation)
- Briefings before shifts
- Debriefings after critical events
- Cross-monitoring among team members
- Standardized handoffs (I-PASS)

**Code Team Leadership:**
- Closed-loop communication
- Role clarity
- Periodic summary of situation
- Inventory of interventions attempted
- Clear decision points

## Trauma Triage

**Field Triage Decision Scheme (CDC):**
- Step 1: Vital signs and level of consciousness (GCS, SBP, RR)
- Step 2: Anatomy of injury (penetrating, crush, amputation)
- Step 3: Mechanism of injury (high-risk auto, fall, ejection)
- Step 4: Special considerations (age, comorbidities, anticoagulation)

**Trauma Team Activation Criteria:**
- GCS ≤8
- SBP <90
- Respiratory compromise or distress
- Gunshot wound to torso, neck, head
- Two or more proximal long bone fractures
- Flail chest
- Amputation proximal to wrist/ankle
- Paralysis
- Major burns

## Disposition Decision-Making

**Clinical Decision Rules:**
- Canadian C-Spine Rule for imaging
- Canadian CT Head Rule for minor head injury
- Ottawa Ankle and Knee Rules
- PERC Rule for pulmonary embolism
- Wells Criteria for DVT/PE

**Social Determinants of Health Impact:**
- Homelessness compels admission for minor issues
- Lack of transportation affects discharge
- Medication affordability affects prescriptions
- Caregiver availability affects discharge plans
- Insurance status affects follow-up and disposition

## Legal and Ethical Considerations

**EMTALA (Emergency Medical Treatment and Labor Act):**
- Medical screening examination for all presenting patients
- Stabilization of emergency medical conditions
- No inappropriate transfer of unstable patients
- No delay in examination or treatment for insurance/financial reasons

**Informed Consent in Emergency:**
- Implied consent for life-threatening emergencies
- Surrogate consent for impaired patients
- Refusal of care capacity assessment`,
      keyTerms: [
        { term: 'NEDOCS', definition: 'National Emergency Department Overcrowding Scale; validated tool to measure ED crowding severity' },
        { term: 'TeamSTEPPS', definition: 'Agency for Healthcare Research and Quality team training program for healthcare; emphasizes communication and teamwork' },
        { term: 'SBAR', definition: 'Structured communication: Situation, Background, Assessment, Recommendation' },
        { term: 'I-PASS', definition: 'Handoff mnemonic: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver' },
        { term: 'EMTALA', definition: 'Federal law requiring ED screening and stabilization regardless of ability to pay' },
        { term: 'closed-loop communication', definition: 'Communication technique where sender verifies receiver understood message through repeat-back' },
      ],
      clinicalNotes: `Key Clinical Pearls for Emergency Department Practice:

1. **Triage is dynamic**: Re-triage patients who deteriorate. A Level 4 can become a Level 2 quickly.
2. **First impressions matter**: Trust your gut feeling when something seems wrong.
3. **Normal vitals don't rule out serious illness**: Elderly, pregnant, and chronically ill patients may not mount typical responses.
4. **Pain is undertreated**: Assess pain, treat it, and reassess. Oligoanalgesia is a persistent problem in EDs.
5. **Diagnostic momentum**: Don't anchor on the first diagnosis. Keep differential diagnosis open.
6. **Completion bias**: Urgent but less dramatic patients (like abdominal pain) can be overlooked in favor of dramatic but stable patients.
7. **Dispo anxiety**: Admission decisions should be based on medical necessity, not social circumstances when possible.
8. **Safety net**: Ensure clear discharge instructions, follow-up, and return precautions.`,
    },
  },

  media: [
    {
      id: 'esi-algorithm',
      type: 'diagram',
      filename: 'esi-algorithm.svg',
      title: 'Emergency Severity Index Algorithm',
      description: 'Flowchart for ESI triage decision-making',
    },
    {
      id: 'primary-survey-abcde',
      type: 'diagram',
      filename: 'abcde-primary-survey.svg',
      title: 'ABCDE Primary Survey',
      description: 'Systematic approach to initial emergency assessment',
    },
    {
      id: 'shock-types-table',
      type: 'diagram',
      filename: 'shock-types-comparison.svg',
      title: 'Types of Shock Comparison',
      description: 'Hemodynamic characteristics of different shock types',
    },
  ],

  citations: [
    {
      id: 'esi-handbook',
      type: 'website',
      title: 'Emergency Severity Index (ESI) Version 4',
      authors: ['Agency for Healthcare Research and Quality'],
      source: 'AHRQ Publication',
      url: 'https://www.ahrq.gov/professionals/systems/hospital/esi/index.html',
    },
    {
      id: 'acep-crowding',
      type: 'article',
      title: 'ACEP Crowding Policy Statement',
      authors: ['American College of Emergency Physicians'],
      source: 'ACEP',
    },
    {
      id: 'tintinalli-emergency',
      type: 'textbook',
      title: 'Tintinalli\'s Emergency Medicine: A Comprehensive Study Guide',
      source: 'McGraw Hill',
      chapter: 'Emergency Department Operations and Triage',
    },
  ],

  crossReferences: [
    { targetId: 'condition-shock', targetType: 'condition', relationship: 'related', label: 'Shock' },
    { targetId: 'condition-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-cardiac', targetType: 'topic', relationship: 'sibling', label: 'Cardiac Emergencies' },
    { targetId: 'emergency-respiratory', targetType: 'topic', relationship: 'sibling', label: 'Respiratory Emergencies' },
    { targetId: 'emergency-trauma', targetType: 'topic', relationship: 'sibling', label: 'Trauma Management' },
  ],

  tags: {
    systems: ['all'],
    topics: ['emergency medicine', 'triage', 'resuscitation', 'clinical assessment'],
    keywords: ['ESI', 'ABCDE', 'primary survey', 'vital signs', 'triage', 'emergency department'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency medicine', 'surgery', 'medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default emergencyApproachContent;
