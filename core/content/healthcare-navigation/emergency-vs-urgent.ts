/**
 * Emergency vs Urgent Care - Comprehensive Educational Content
 *
 * Helps patients understand when to seek emergency care versus urgent
* care, including recognizing life-threatening symptoms and appropriate
* care destinations.
 */

import { EducationalContent } from '../types';

export const emergencyVsUrgentContent: EducationalContent = {
  id: 'topic-emergency-vs-urgent',
  type: 'topic',
  name: 'Emergency vs Urgent Care',
  nameEs: 'Emergencia vs Cuidado Urgente',
  alternateNames: ['Where to Go for Care', 'Choosing Emergency or Urgent Care', 'Emergency Room vs Urgent Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Sometimes you need help fast for a health problem. Knowing where to go - the emergency room or urgent care - can help you get the right care quickly.',
      explanation: `When you have a health problem, it's important to go to the right place for help. Two main options are the emergency room (ER) and urgent care.

**Emergency Room (ER)**

The ER is for very serious problems that could hurt you badly or even be life-threatening. The ER is open 24 hours a day, every day.

**Go to the ER or Call 911 for:**
- Chest pain or pressure
- Trouble breathing or can't breathe
- Fainting or passing out
- Severe bleeding that won't stop
- Bad burns (large or deep)
- Severe pain anywhere
- Sudden inability to move or speak (stroke signs)
- Major injuries (car accident, bad fall)
- Severe allergic reaction (trouble breathing, swelling)

**Call 911 if:**
- Someone can't breathe
- Someone is not waking up
- Someone is bleeding very badly
- You think someone's life is in danger

**Urgent Care**

Urgent care is for problems that need help soon but aren't life-threatening. Many urgent cares are open evenings and weekends when your regular doctor may be closed.

**Go to Urgent Care for:**
- Minor injuries like small cuts, sprains
- Fever, sore throat, ear pain
- Stomach pain that's not too bad
- Small burns
- Rash or allergic reaction (not severe)
- Throwing up or diarrhea (not too severe)
- Urinary tract infection (pain when peeing)

**Not Sure?**

**If you're not sure where to go:**
- Call your doctor's office and ask a nurse
- Call the nurse advice line from your insurance
- If it might be an emergency, go to the ER
- It's better to be safe than sorry

**Remember:**
The ER is for the most serious problems. Urgent care is for things that need attention soon but aren't life-threatening. When in doubt, call 911 or go to the ER!`,
      keyTerms: [
        { term: 'emergency', definition: 'A very serious medical problem that needs immediate help to prevent harm or death' },
        { term: 'urgent care', definition: 'A place for medical problems that need help soon but are not life-threatening' },
        { term: 'ER', definition: 'Emergency Room - the part of a hospital for very serious medical problems' },
        { term: '911', definition: 'The phone number to call for emergency help in the United States' },
      ],
      analogies: [
        'The ER is like a fire department - for emergencies when everything is urgent and dangerous.',
        'Urgent care is like an urgent repair - it needs to be fixed soon, but the house isn\'t burning down.',
      ],
      examples: [
        'Your brother can\'t breathe and his face looks swollen. Call 911 - this is an emergency!',
        'You have a bad sore throat and fever. Go to urgent care or call your doctor.',
        'Your child fell and broke their arm. Go to the ER or urgent care depending on how bad it looks.',
      ],
      patientCounselingPoints: [
        'Save the emergency number 911 in your phone',
        'Know where the nearest ER and urgent care centers are to your home and work',
        'If you think it might be an emergency, go to the ER - don\'t wait',
        'It\'s okay to call 911 even if you\'re not sure - the operator can help you decide',
      ],
    },
    2: {
      level: 2,
      summary: 'Choosing between emergency departments and urgent care centers requires recognizing life-threatening symptoms, understanding the capabilities of each setting, and considering factors like wait times and costs.',
      explanation: `## Emergency vs Urgent Care: Making the Right Choice

Knowing where to seek care for medical problems helps you get appropriate treatment quickly and efficiently. Understanding the difference between emergency and urgent care can save time, money, and potentially lives.

## Emergency Department (ED/ER)

**Purpose:**
- For life-threatening and severe conditions
- Open 24 hours, 7 days a week
- Staffed by emergency medicine specialists
- Equipped for serious conditions and resuscitation

**When to Use the Emergency Department:**

**Life-Threatening Symptoms:**
- Chest pain or pressure (sign of heart attack)
- Shortness of breath or difficulty breathing
- Sudden weakness, trouble speaking, or vision changes (signs of stroke)
- Severe bleeding or bleeding that won't stop
- Loss of consciousness or fainting
- Severe burns or large burns
- Sudden, severe pain anywhere
- Severe allergic reaction (trouble breathing, swelling)
- High fever with stiff neck or confusion
- Head injury with passing out or confusion
- Major trauma (car accident, fall from height)
- Possible broken bone with bone visible or limb deformed
- Poisoning or overdose

**Time-Sensitive Conditions:**
- Heart attack symptoms: chest pressure, pain spreading to arm/jaw, shortness of breath, sweating, nausea
- Stroke symptoms: Face drooping, Arm weakness, Speech difficulty, Time to call 911 (FAST)
- Sudden severe headache ("worst headache of your life")

**Getting to the Emergency Department:**
- **Call 911** for ambulance if:
  - Condition might be life-threatening
  - Person's condition could worsen on the way
  - Moving the person could cause harm
  - Traffic or distance might delay care
- **Drive or have someone drive** if:
  - Condition is serious but stable
  - Person can be safely moved
  - ER is reasonably close

## Urgent Care Centers

**Purpose:**
- For conditions needing prompt attention but not life-threatening
- Extended hours (evenings, weekends, holidays)
- No appointment needed (walk-in)
- Less expensive than emergency department
- Staffed by physicians, NPs, PAs

**When to Use Urgent Care:**

**Minor Illnesses:**
- Cold, flu, or fever (without stiff neck or confusion)
- Sore throat
- Ear pain or ear infection
- Pink eye or conjunctivitis
- Sinus infection
- Urinary tract infection (UTI)
- Vomiting or diarrhea (if able to stay hydrated)
- Rash or mild allergic reaction

**Minor Injuries:**
- Small cuts that may need stitches
- Minor burns (small, not deep)
- Sprains and strains
- Simple broken bones (finger, toe)
- Back pain (not traumatic)
- Minor animal or insect bites

**Other Services:**
- Sports physicals
- Vaccinations
- Lab tests (X-rays, basic blood work)
- Prescription refills

**What Urgent Care Cannot Treat:**
- Life-threatening conditions
- Complex medical problems
- Conditions requiring hospitalization
- Serious injuries needing surgery
- Conditions requiring specialists

## Primary Care Provider

**For Non-Urgent Issues:**
- Routine check-ups
- Medication refills for ongoing conditions
- Mild illnesses that can wait a day or two
- Follow-up of known conditions
- Preventive care

**When to Call Your Doctor First:**
- You're unsure if you need urgent care
- You have a chronic condition and symptoms are changing
- You need medical advice but not immediate care

## Decision Guide

**Consider These Questions:**

1. **Is the condition life-threatening or potentially life-threatening?**
   - Yes → Emergency Department or Call 911

2. **Can it wait until your doctor is available?**
   - Yes → Call your doctor for appointment
   - No → Consider urgent care or ED

3. **Do you think you need stitches, X-ray, or immediate treatment?**
   - Yes → Urgent care (if minor) or ED (if major)

4. **What time is it and what services are available?**
   - Doctor's office closed → Urgent care or ED
   - Middle of night → ED (urgent care may have limited hours)

## What to Expect

**Emergency Department:**
- Triage: Nurse assesses severity upon arrival
- Most serious cases seen first
- May wait if your condition is less severe
- Higher cost (especially if admitted)
- More extensive testing and treatment capabilities

**Urgent Care:**
- First come, first served (some reservation systems)
- Generally shorter wait times
- Lower cost than ED
- Limited testing and treatment capabilities
- May refer to ED if condition is more serious than expected

## Cost Considerations

**Emergency Department:**
- Higher copays and costs
- Insurance may require authorization for non-emergency use
- Cost justified for true emergencies

**Urgent Care:**
- Lower copays and costs
- Often accepted by insurance as urgent care
- Still more expensive than office visit

## Special Situations

**Children:**
- Pediatric urgent care centers specialize in children
- Emergency departments treat all ages
- Children's hospitals have pediatric emergency specialists

**Pregnant Women:**
- Contact obstetrician for advice
- Some urgent cares don't see pregnant patients
- Emergency department always an option

**Chronic Conditions:**
- Know your condition's red flags
- Have a plan from your specialist
- Some conditions warrant ED evaluation

**COVID-19 Symptoms:**
- Call your doctor or use telehealth first for mild symptoms
- Emergency warning signs: trouble breathing, persistent pain/pressure, new confusion, inability to stay awake, pale/gray/blue lips
- These warning signs require emergency care

## When in Doubt

**It's Better to Be Safe:**
- If unsure, err on the side of caution
- Call 911 if you think it might be an emergency
- Emergency departments can determine if your condition is truly urgent
- Never delay care for a potentially serious condition

**Poison Control:**
- Call 1-800-222-1222 for poisoning or possible poisoning
- Available 24/7
- Free and confidential
- Can advise if you need emergency care

**Nurse Advice Lines:**
- Many insurance plans offer 24/7 nurse hotlines
- Can help decide where to seek care
- Can provide home care advice
- Free for most insurance plans`,
      keyTerms: [
        { term: 'emergency', definition: 'Medical condition requiring immediate intervention to prevent death or serious harm' },
        { term: 'triage', definition: 'Process of determining priority of treatment based on severity of condition' },
        { term: 'urgent care', definition: 'Walk-in clinic for conditions needing prompt attention but not life-threatening' },
        { term: 'life-threatening', definition: 'Condition that could cause death if not treated immediately' },
        { term: 'emergency department', definition: 'Hospital section for emergency medical care' },
        { term: 'primary care', definition: 'Main healthcare provider for routine and ongoing care' },
      ],
      analogies: [
        'The emergency department is like a trauma center - for the most critical situations.',
        'Urgent care is like a walk-in clinic - for things that need attention soon but aren\'t emergencies.',
        'Your primary care doctor is like your regular mechanic - for routine maintenance and non-urgent repairs.',
      ],
      patientCounselingPoints: [
        'Know the signs of heart attack and stroke - every second counts',
        'Find out where the nearest urgent care centers and emergency departments are',
        'Program important numbers: 911, your doctor, poison control (1-800-222-1222)',
        'Consider saving the locations of nearby ERs and urgent cares in your phone map app',
        'If you have a chronic condition, ask your doctor what symptoms should send you to the ER',
      ],
    },
    3: {
      level: 3,
      summary: 'Appropriate selection of care setting requires understanding clinical severity, resource capabilities of different sites, and the concept of triage. True emergencies require immediate intervention to prevent death or disability.',
      explanation: `## Emergency vs Urgent Care: Clinical Framework

### Emergency Care Principles

**Definition of Emergency:**
Medical condition manifesting by acute symptoms of sufficient severity (including severe pain) such that a prudent layperson could reasonably expect the absence of immediate medical attention to result in:
- Serious jeopardy to health
- Serious impairment to bodily functions
- Serious dysfunction of any bodily organ or part

**Emergency Department Capabilities:**
- Resuscitation equipment and expertise
- Advanced cardiac life support (ACLS)
- Critical care monitoring and support
- Surgical capabilities
- Advanced imaging (CT, MRI, angiography)
- Comprehensive laboratory services
- Specialty consultation availability
- Admission to hospital if needed

**Triage Systems:**
- Emergency Severity Index (ESI) commonly used:
  - Level 1: Immediate (resuscitation needed)
  - Level 2: Emergent (high risk situation)
  - Level 3: Urgent (needs multiple resources)
  - Level 4: Semi-urgent (needs one resource)
  - Level 5: Non-urgent (needs no resources)
- Determines order of treatment
- More severe = seen sooner

### Urgent Care Capabilities

**Scope of Services:**
- Minor acute illness and injury evaluation
- Basic diagnostic testing:
  - Rapid strep, flu, COVID, RSV testing
  - Urinalysis
  - Basic blood work (CBC, BMP)
  - Pregnancy testing
  - X-rays (not all centers)
- Basic procedures:
  - Wound repair and suturing
  - Splinting
  - Incision and drainage of abscesses
  - Nebulizer treatments

**Limitations:**
- Cannot provide comprehensive emergency care
- Limited advanced imaging (may refer for CT/MRI)
- Cannot hospitalize patients
- Limited specialist access
- May transfer to ED for conditions exceeding capabilities

### Condition-Specific Guidance

**Chest Pain:**

**Emergency Department Indications:**
- Pressure, squeezing, fullness in chest
- Pain spreading to arms, neck, jaw, back
- Shortness of breath
- Sweating, nausea, lightheadedness
- Age 40+ with risk factors
- Cardiac history

**Urgent Care May Be Appropriate For:**
- Young, healthy patient
- Clearly reproducible chest wall tenderness
- Normal vitals
- Positional chest pain
- When cardiac causes unlikely

**Abdominal Pain:**

**Emergency Department Indications:**
- Severe pain
- Fever + abdominal pain (appendicitis concern)
- Blood in stool or vomit
- Pregnant with abdominal pain
- History of abdominal surgery
- Unable to pass gas or stool (obstruction concern)

**Urgent Care May Be Appropriate For:**
- Mild, localized pain
- Able to eat and drink
- No fever
- No red flag symptoms
- Young, healthy patient

**Headache:**

**Emergency Department Indications:**
- Worst headache of life (subarachnoid hemorrhage concern)
- Thunderclap onset
- Fever + stiff neck (meningitis concern)
- Neurologic symptoms (weakness, vision changes)
- Head trauma
- Anticoagulation or bleeding disorder
- New onset headache in age 50+

**Urgent Care May Be Appropriate For:**
- Typical migraine or tension headache
- Normal neurologic exam
- Awake and alert
- No red flags

**Shortness of Breath:**

**Emergency Department Indications:**
- Severe difficulty breathing
- Can't speak in full sentences
- Low oxygen saturation (<92%)
- Chest pain
- History of heart or lung disease
- Asthma not responding to rescue inhaler
- PE risk factors (recent surgery, cancer, clotting disorder)

**Urgent Care May Be Appropriate For:**
- Mild shortness of breath
- Normal oxygen saturation
- Can speak in full sentences
- No chest pain
- Young, healthy patient
- Likely upper respiratory infection

**Lacerations (Cuts):**

**Emergency Department Indications:**
- Deep wounds (exposing fat, muscle, bone)
- Wounds over joints
- Wounds with foreign bodies
- Human or animal bites
- Wounds in cosmetically sensitive areas
- Uncontrolled bleeding
- Wounds >6 hours old (in some cases)
- Wounds in patients with bleeding disorders or on anticoagulation

**Urgent Care May Be Appropriate For:**
- Simple, clean, linear lacerations
- <6 hours old (ideally <3 hours)
- Not on face or hands
- Not over joints
- No tendon or nerve involvement suspected

**Fractures:**

**Emergency Department Indications:**
- Open fracture (bone visible)
- Visible deformity
- Compromised neurovascular function
- Joint dislocation
- Hip or pelvic fracture
- Multiple fractures

**Urgent Care May Be Appropriate For:**
- Simple fractures of distal extremities
- Good neurovascular function
- Minimal deformity
- Patient can ambulate (if leg fracture)

### Special Populations

**Pediatrics:**
- Higher risk of respiratory distress
- Dehydration risk
- Different normal vital signs by age
- Consider pediatric urgent care or pediatric ED
- Fever in infants <3 months always emergency

**Geriatrics:**
- Atypical presentations common
- Multiple comorbidities
- Polypharmacy interactions
- Functional decline as symptom
- Lower threshold for ED evaluation

**Pregnancy:**
- Physiologic changes mask or mimic illness
- Two patients (mother and fetus)
- Some urgent cares don't see pregnant patients
- Lower threshold for ED evaluation

**Immunocompromised:**
- Higher infection risk
- Atypical presentations
- Rapid progression
- Lower threshold for ED evaluation
- Consider neutropenic fever (emergency)

### Cost and Resource Considerations

**Appropriate Use:**
- ED for true emergencies
- Urgent care for semi-urgent conditions
- Primary care for non-urgent
- Prevents ED overcrowding
- Reduces healthcare costs
- Ensures appropriate resource utilization

**Inappropriate ED Use:**
- Non-urgent conditions in ED
- Increases wait times
- Higher costs
- May divert resources from true emergencies
- Still, always err on side of caution if unsure

**Insurance Considerations:**
- Many plans waive prior authorization for true emergencies
- "Prudent layperson" standard: if reasonable person would think it's emergency, insurance should cover
- Urgent care typically lower copay than ED
- Some plans require ED use authorization for non-emergency (may deny coverage)

### Communication Strategies

**When Calling 911:**
- State location clearly
- Describe problem briefly
- Don't hang up first
- Follow dispatcher instructions
- Unlock door if possible

**When Presenting to Care:**
- Be clear about symptoms and timing
- Mention chronic conditions
- Bring medication list
- Be honest about substance use

**When Transferring:**
- Urgent care to ED if condition worsens or exceeds capabilities
- ED will accept transfers
- Arrange safe transport`,
      keyTerms: [
        { term: 'triage', definition: 'Process of prioritizing patients based on severity of condition' },
        { term: 'ESI', definition: 'Emergency Severity Index - 5-level triage system used in emergency departments' },
        { term: 'thunderclap headache', definition: 'Sudden onset severe headache reaching peak intensity within seconds' },
        { term: 'neutropenic fever', definition: 'Fever in patient with low white blood cell count, potentially life-threatening' },
        { term: 'prudent layperson standard', definition: 'Insurance coverage standard based on what reasonable person would consider emergency' },
        { term: 'resuscitation', definition: 'Process of correcting physiological disorders in acutely unwell patients' },
      ],
      clinicalNotes: 'Time-sensitive conditions require immediate emergency care. When in doubt, seek emergency care. Urgent care centers have limitations and should transfer unstable or potentially unstable patients to emergency departments.',
      patientCounselingPoints: [
        'For chest pain or stroke symptoms, call 911 immediately - driving yourself delays care',
        'Know your chronic disease red flags: when to go to ED for asthma, heart failure, COPD, etc.',
        'If you have a condition that requires frequent ED visits, work with your doctor on a care plan',
        'Keep a list of your medications and allergies in your phone or wallet for emergencies',
        'Poison control (1-800-222-1222) can help determine if emergency care is needed for poisoning',
      ],
    },
    4: {
      level: 4,
      summary: 'Appropriate care site selection integrates clinical severity assessment, resource capability matching, risk stratification, and consideration of cost and efficiency while ensuring patient safety.',
      explanation: `## Advanced Site Selection for Acute Care

### Emergency Medicine Framework

**Emergency Department Triage:**

**Emergency Severity Index (ESI) Algorithm:**
1. **ESI Level 1**: Unconscious/apneumatic, pulseless, severe respiratory distress, SpO2 <90, acute mental status changes
2. **ESI Level 2**: High risk situation, confusion/lethargy, severe pain, hemodynamic instability
3. **ESI Level 3**: Requires two or more resources (labs, imaging, consults, IV fluids)
4. **ESI Level 4**: Requires one resource
5. **ESI Level 5**: Requires no resources

**Resource Considerations:**
- Blood work
- Imaging (X-ray, CT, ultrasound)
- Complex procedures (lumbar puncture, conscious sedation)
- IV medications or fluids
- Specialty consultation
- Admission

**Overtriage vs Undertriage:**
- Overtriage: Less sick patients classified as sicker (safer, less efficient)
- Undertriage: Sicker patients classified as less sick (dangerous)
- Systems prioritize avoiding undertriage

### Clinical Decision Rules

**Chest Pain Evaluation:**

**HEART Score (for ED risk stratification):**
- **H**istory: Highly suspicious vs slightly suspicious
- **E**CG: Significant ST changes vs normal/nonspecific
- **A**ge: >65 vs <45
- **R**isk factors: >=3 vs 0-1
- **T**roponin: >3x normal vs normal

Score 0-3: Low risk (2% risk of MACE)
Score 4-6: Intermediate risk
Score 7-10: High risk (50%+ risk of MACE)

**ECG Indications for Immediate ED:**
- STEMI criteria: ST elevation >=1mm in two contiguous leads
- New left bundle branch block
- Ischemic changes with symptoms
- Any arrhythmia with hemodynamic compromise

**Headache Red Flags:**

**SNNOOP10 List:**
- **S**ystemic symptoms (fever, weight loss)
- **N**eurologic symptoms or abnormal signs
- **O**nset sudden, abrupt, or explosive
- **O**lder: New onset and progressive >50
- **P**attern change, positional aggravation, precipitated by valsalva, papilledema
- **P**osterior auricular lymphadenopathy
- **P**recipitated by exertion, valsalva
- **P**regnancy or postpartum
- **P**uncture wound (following head trauma)
- **10**: Painkiller overuse (medication overuse headache)

**Abdominal Pain Risk Stratification:**

**Emergency Indicators:**
- Peritoneal signs (rebound, guarding)
- Surgical abdomen (rigid, silent)
- Unstable vitals
- Free air on X-ray (perforation)
- High lactate (ischemia)
- Elderly with abdominal pain (atypical presentations)

**Infectious Disease Concerns:**

**Sepsis Criteria (Sepsis-3):**
- Suspected infection + SOFA score >=2
- qSOFA for rapid screening (2+ of: RR >=22, altered mental status, SBP <=100)
- Sepsis requires emergency care
- Septic shock requires vasopressors

**Meningitis Concerns:**
- Fever + headache + stiff neck
- Altered mental status
- Photophobia
- Petechial rash (meningococcemia)
- Immunocompromised

### Urgent Care Scope and Limitations

**Typical Scope:**
- Minor trauma (simple lacerations, sprains, simple fractures)
- Upper respiratory infections
- Urinary tract infections
- Simple cellulitis
- Back pain (non-traumatic)
- Headache (non-red flag)
- Vomiting/diarrhea (mild to moderate)

**Transfer Criteria:**
- Hemodynamic instability
- Respiratory distress
- Altered mental status
- Acute coronary syndrome
- Stroke symptoms
- Complex trauma
- Conditions exceeding facility capabilities
- Concern for time-sensitive diagnosis

**Decision to Transfer:**
- When patient needs higher level of care
- When testing not available
- When specialist consultation needed
- When monitoring requirements exceed capabilities
- When patient or family requests second opinion

### Special Population Considerations

**Pediatric Specifics:**
- Age-specific vital signs
- Different normal ranges
- Higher risk of respiratory failure
- Dehydration assessment (skin turgor, capillary refill, urine output)
- Fever guidelines:
  - <3 months: always ED evaluation
  - 3-36 months: fever for >3 days or concerning appearance
  - Immunocompromised: lower threshold

**Geriatric Considerations:**
- Atypical presentations common:
  - MI may present as confusion or weakness
  - Infection may present as functional decline
  - No fever despite serious infection
- Polypharmacy interactions
- Multiple comorbidities complicate picture
- Frailty affects outcomes
- Lower threshold for ED evaluation

**Pregnancy:**
- Normal physiologic changes mask disease
- Radiation exposure concerns with imaging
- Certain medications contraindicated
- Ectopic pregnancy always emergency consideration
- Preeclampsia complications (seizures, stroke)
- Lower threshold for ED evaluation

**Psychiatric Emergencies:**

**Emergency Indications:**
- Suicidal or homicidal ideation with plan/intent
- Psychosis with agitation
- Mania with danger to self or others
- Catatonia
- Substance withdrawal with instability
- Neuroleptic malignant syndrome
- Serotonin syndrome

**Observation vs Admission:**
- Some psychiatric conditions warrant observation
- Emergency holds if danger to self/others
- Involuntary commitment if criteria met

### Diagnostic Testing Considerations

**Urgent Care Testing:**
- Rapid point-of-care tests
- Basic blood work
- Urinalysis
- X-rays (not CT/MRI)
- Limited specialist access

**Emergency Department Testing:**
- Comprehensive laboratory
- Advanced imaging (CT, MRI, ultrasound, angiography)
- Interventional radiology
- Respiratory testing (blood gases)
- Toxicology screening
- Immediate specialty consultation

### Time-Sensitive Conditions

**Ischemic Time Windows:**
- STEMI: Door-to-balloon <90 min
- Stroke: tPA within 3-4.5 hours (door-to-needle <60 min)
- Sepsis: Antibiotics within 3 hours
- Trauma: Golden hour first 60 min
- Limb ischemia: 6 hours for viable salvage
- Testicular torsion: 6 hours for viability
- Acute appendicitis: risk of rupture increases after 24-36 hours

### Clinical Prediction Rules

**Used to Determine Disposition:**

**PECARN (Pediatric Head Trauma):**
- Identifies low-risk patients who don't need imaging
- Two rules (one for <2 years, one for 2-18 years)
- Reduces unnecessary CT scans

**Ottawa Ankle Rules:**
- Determines need for X-ray
- Bone tenderness at specific locations
- Inability to bear weight

**Ottawa Knee Rules:**
- Determines need for X-ray
- Specific criteria
- Reduces unnecessary imaging

**PERC Rule (Pulmonary Embolism):**
- Low-risk patients
- Age <50, HR <100, O2 sat >94%, no prior DVT/PE, no hemoptysis, no estrogen
- If low pre-test probability, no D-dimer needed

**Decision Instrument:**
- Used appropriately, can safely reduce testing
- Must be used in correct clinical context
- Never replaces clinical judgment
- Some have medicolegal support

### Costs and Value

**ED Cost Drivers:**
- Facility fee (higher at night, weekends)
- Triage level
- Testing performed
- Treatments provided
- Admission vs discharge

**Urgent Care Value:**
- Lower facility fees
- Lower testing costs
- Shorter stays
- Convenience (extended hours)
- Appropriate for designated conditions

**Value-Based Considerations:**
- Most expensive option is not always best
- Right care, right place, right time
- Avoid underuse (serious conditions in urgent care)
- Avoid overuse (non-emergencies in ED)
- Consider total value, not just cost`,
      keyTerms: [
        { term: 'ESI', definition: 'Emergency Severity Index - 5-level triage system used in most US emergency departments' },
        { term: 'HEART score', definition: 'Risk stratification tool for chest pain patients without known ischemic heart disease' },
        { term: 'SOFA', definition: 'Sequential Organ Failure Assessment - organ dysfunction score used in sepsis' },
        { term: 'qSOFA', definition: 'quick SOFA - bedside clinical criteria of sepsis' },
        { term: 'MACE', definition: 'Major Adverse Cardiac Events - composite endpoint in cardiac risk stratification' },
        { term: 'STEMI', definition: 'ST-Elevation Myocardial Infarction - heart attack requiring immediate reperfusion' },
        { term: 'PECARN', definition: 'Pediatric Emergency Care Applied Research Network - prediction rules for pediatric injuries' },
      ],
      clinicalNotes: `Triage is both an art and science:
1. Use validated decision rules when appropriate
2. Recognize atypical presentations, especially in elderly and immunocompromised
3. When in doubt, higher level of care is safer
4. Time-sensitive conditions (STEMI, stroke, sepsis) require immediate ED care
5. Urgent care should transfer when uncertain or when patient worsens`,
      patientCounselingPoints: [
        'If you have chronic conditions, ask your doctor about specific warning signs',
        'Keep an updated list of medications in your phone for emergency situations',
        'Be aware of closest ED and urgent care to your home, work, and school',
        'When calling 911, know your location and don\'t hang up first',
        'If you\'re unsure after internet searching, call your doctor\'s office or nurse line',
      ],
    },
    5: {
      level: 5,
      summary: 'Acute care site selection integrates risk stratification, clinical prediction rules, resource matching, and systems-based care considerations to optimize outcomes while controlling costs.',
      explanation: `## Advanced Emergency Care Decision-Making

### Risk Stratification Frameworks

**Diagnostic Testing Principles:**

**Bayesian Reasoning:**
- Pre-test probability influences test interpretation
- Negative predictive value depends on disease prevalence
- Positive predictive value varies by population
- Consider post-test probability, not just binary result

**High-Value Testing:**
- Test if result will change management
- Consider test characteristics (sensitivity, specificity, likelihood ratios)
- Avoid low-yield testing
- Consider radiation exposure (especially in younger patients)
- Consider contrast risks (allergy, kidney injury)

**Clinical Decision Rules (CDRs):**

**Well-Validated Rules:**
- Ottawa Ankle/Knee Rules
- Ottawa SAH Rule
- Canadian CT Head Rule
- PECARN (pediatric head trauma)
- PERC Rule (low-risk PE)
- HEART Score (chest pain)
- Wells Criteria (DVT/PE)

**Limitations:**
- Apply only to intended population
- Clinical judgment trumps rules
- Cannot replace clinician gestalt
- Some rules outdated
- Legal implications

**Likelihood Ratios:**
- LR+ >10: Significantly increases probability of disease
- LR- <0.1: Significantly decreases probability of disease
- Fagan nomogram for post-test probability

### Emergency Department Operations

**Overcrowding:**
- Boarding of admitted patients in ED
- Causes access block and ambulance diversion
- Associated with worse outcomes
- Solutions: observation units, hospital flow, intake protocols

**Left Without Being Seen (LWBS):**
- Patients leave before being seen
- Associated with overcrowding
- May have adverse outcomes
- Safety net systems more affected

**Observation Units:**
- Short-stay units (<24-48 hours)
- For selected conditions:
  - Chest pain (rule out ACS)
  - TIA
  - Cellulitis
  - Asthma/COPD
  - Syncope
- Reduce admissions
- Improve patient satisfaction
- Lower costs

### Emergency Medical Services (EMS)

**Activation Criteria:**
- Life-threatening conditions
- Inability to safely transport
- Need for interventions en route
- Traffic or distance concerns

**EMS Capabilities:**
- Basic Life Support (BLS)
- Advanced Life Support (ALS)
- Paramedic interventions
- Field triage
- Pre-notification to ED

**Transport Decision:**
- Private vehicle appropriate for:
  - Stable patients
  - Short distance
  - No interventions needed
- Ambulance appropriate for:
  - Unstable patients
  - Need for monitoring/interventions
  - Traffic/distance concerns

### System-Level Considerations

**Regionalization of Care:**
- Trauma centers (Level I-IV)
- Stroke centers (comprehensive, primary)
- STEMI receiving centers
- Cardiac arrest centers
- Burn centers
- Pediatric specialty centers

**Transport Decisions:**
- Ground ambulance
- Helicopter (for remote areas, time-critical conditions)
- Fixed wing (long distances)
- Drive-through considerations

**Integration with Urgent Care:**
- Diversion of low-acuity patients
- Referral agreements
- Transfer protocols
- Communication systems

### Diagnostic Imaging Considerations

**Radiation Exposure:**
- Cumulative radiation risk
- Higher in younger patients
- CT provides more radiation than X-ray
- MRI and ultrasound no radiation
- ALARA principle (As Low As Reasonably Achievable)

**Contrast Considerations:**
- Iodinated contrast (CT):
  - Allergic reactions
  - Contrast-induced nephropathy
  - Thyroid considerations
- Gadolinium contrast (MRI):
  - NSF risk (rare)
  - Gadolinium deposition

**Appropriate Use Criteria:**
- ACR Appropriateness Criteria
- Choosing Wisely recommendations
- Value-based imaging

### Specialized Emergency Situations

**Time-Critical Diagnoses:**

**STEMI:**
- ECG within 10 minutes of arrival
- Door-to-balloon <90 min
- Door-to-needle <30 min (fibrinolysis)
- Prehospital ECG when available

**Stroke:**
- CT head within 25 minutes
- Door-to-needle <60 min (tPA)
- Door-to-puncture <90 min (thrombectomy)
- Prehospital notification

**Sepsis:**
- Lactate within 3 hours
- Blood cultures before antibiotics
- Antibiotics within 3 hours
- Fluid resuscitation

**Trauma:**
- Primary survey (ABCDE)
- Secondary survey
- Transfer to trauma center if indicated
- Trauma team activation

**Ectopic Pregnancy:**
- Always consider in women of childbearing age with abdominal pain
- Quantitative beta-hCG
- Transvaginal ultrasound
- RUPTURED: Surgical emergency

**Testicular Torsion:**
- Surgical emergency within 6 hours
- Doppler ultrasound
- Clinical diagnosis (don't delay for imaging if high suspicion)

**Acute Aortic Dissection:**
- Consider in tearing chest/back pain
- CT angiography
- TEE alternative
- High mortality if missed

**Mesenteric Ischemia:**
- Severe abdominal pain out of proportion to exam
- Older patients with atrial fibrillation
- CT angiography
- High mortality if delayed

### Toxicology and Overdose

**Common Presentations:**
- Opioid overdose: naloxone
- Acetaminophen: nomogram, NAC
- Salicylates: respiratory alkalosis + metabolic acidosis
- TCA: sodium channel blockade, widening QRS
- Sympathomimetics: agitation, tachycardia, hypertension
- Ethanol withdrawal: CIWA-Ar protocol
- Benzodiazepine withdrawal: seizures, delirium

**Decontamination:**
- Activated charcoal (within 1-2 hours)
- Gastric lavage (rarely)
- Whole bowel irrigation (certain ingestions)
- Enhanced elimination (hemodialysis)

**Toxidromes:**
- Anticholinergic: dry, hot, mad, red
- Cholinergic: SLUDGE/BBB
- Sympathomimetic: agitated, hypertensive, tachycardic
- Opioid: CNS depression, miosis, respiratory depression
- Serotonin: hyperreflexia, clonus, fever, confusion

### Psychiatric Emergencies

**Medical Clearance:**
- Rule out medical causes of psychiatric symptoms
- Consider:
  - Hypoglycemia
  - Hypoxia
  - Intoxication/withdrawal
  - Head trauma
  - Delirium
  - CNS infection

**Suicide Risk Assessment:**
- Ideation, plan, intent, means
- Protective factors
- Prior attempts
- Psychiatric history

**Involuntary Hold:**
- Danger to self
- Danger to others
- Grave disability
- Varies by state

### Geriatric Emergency Medicine

**Atypical Presentations:**
- Infection without fever
- MI without chest pain
- Delirium as only symptom
- Silent conditions (pneumonia, MI)

**Syndromes:**
- Elder abuse (screen for)
- Polypharmacy (medication reconciliation)
- Functional decline
- Failure to thrive
- Social admission

**Discharge Considerations:**
- Can they care for themselves at home?
- Is support available?
- Are services needed?
- Fall risk assessment`,
      keyTerms: [
        { term: 'pre-test probability', definition: 'Likelihood of condition before diagnostic testing' },
        { term: 'likelihood ratio', definition: 'Measure of diagnostic test performance: how much test result changes probability' },
        { term: 'observation unit', definition: 'Short-stay unit for patients requiring <24-48 hours of care' },
        { term: 'LWBS', definition: 'Left Without Being Seen - patients who leave ED before being evaluated' },
        { term: 'ABCDE', definition: 'Primary survey in trauma: Airway, Breathing, Circulation, Disability, Exposure' },
        { term: 'CIWA-Ar', definition: 'Clinical Institute Withdrawal Assessment for Alcohol scale' },
        { term: 'toxidrome', definition: 'Group of signs and symptoms associated with a class of poisons' },
      ],
      clinicalNotes: `Emergency medicine principles:
1. Rule out worst case scenario first
2. Time-sensitive conditions require immediate action
3. Unstable patient stabilizes before diagnosis
4. Diagnostic testing should change management
5. Clinical gestalt complements decision rules
6. When uncertain, err on side of more aggressive evaluation

For urgent care practitioners:
- Recognize limitations
- Have low threshold to transfer or refer
- When patient worsens, reassess and consider higher level of care
- Document transfer reasoning clearly`,
    },
  },

  media: [
    {
      id: 'emergency-vs-urgent-flowchart',
      type: 'diagram',
      filename: 'emergency-vs-urgent-flowchart.svg',
      title: 'Emergency vs Urgent Care Decision Guide',
      description: 'Flowchart for deciding between emergency department and urgent care',
    },
    {
      id: 'fast-stroke',
      type: 'diagram',
      filename: 'fast-stroke.svg',
      title: 'FAST Stroke Recognition',
      description: 'Face, Arms, Speech, Time - stroke symptom recognition',
    },
  ],

  citations: [
    {
      id: 'cdc-emergency',
      type: 'website',
      title: 'Emergency Department Visits',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov',
    },
    {
      id: 'aha-symptoms',
      type: 'website',
      title: 'Heart Attack and Stroke Symptoms',
      source: 'American Heart Association',
      url: 'https://www.heart.org',
    },
  ],

  crossReferences: [
    { targetId: 'topic-healthcare-system-basics', targetType: 'topic', relationship: 'related', label: 'Healthcare System Basics' },
    { targetId: 'topic-hospital-navigation', targetType: 'topic', relationship: 'related', label: 'Hospital Navigation' },
  ],

  tags: {
    systems: ['healthcare-navigation'],
    topics: ['emergency care', 'urgent care', 'triage', 'acute illness'],
    keywords: ['ER', 'emergency room', '911', 'chest pain', 'stroke'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default emergencyVsUrgentContent;
