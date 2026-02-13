import { EducationalContent } from '../../types';

export const pediatricEmergencies: EducationalContent = {
  id: 'pediatrics-emergencies',
  type: 'concept',
  name: 'Pediatric Emergencies',
  alternateNames: ['Childhood Emergencies', 'Pediatric Urgent Care', 'Emergency Pediatrics'],

  levels: {
    1: {
      level: 1,
      summary: 'Children can have medical emergencies that need immediate help. Knowing warning signs and what to do can save lives.',
      explanation: `Every parent should know when their child needs emergency care and what to do while getting help.

**When to Call 911 (True Emergencies):**

- Not breathing or struggling to breathe
- Lips or skin turning blue or gray
- Unconscious or can't be woken up
- Severe bleeding that won't stop
- Poisoning
- Serious burns
- Seizure lasting more than 5 minutes
- Signs of severe allergic reaction (swelling, can't breathe)
- Major injury (car accident, fall from height)

**Common Pediatric Emergencies:**

**1. Breathing Problems**
*Signs of serious trouble:*
- Breathing very fast
- Ribs showing with each breath
- Nostrils flaring
- Can't talk or cry
- Lips turning blue

*What to do:*
- Stay calm
- Sit child upright
- Call 911 if severe
- Give rescue inhaler if asthma and available

**2. Choking**
*Signs:*
- Can't cough, cry, or breathe
- Face turning red then blue
- Grabbing at throat

*What to do (if child CAN'T cough):*
- Infant (<1 year): 5 back blows, 5 chest thrusts
- Child (>1 year): Heimlich maneuver (abdominal thrusts)
- Call 911 if not improving

**3. Severe Allergic Reaction (Anaphylaxis)**
*Signs:*
- Swelling of face, lips, tongue
- Trouble breathing, wheezing
- Hives all over body
- Vomiting, diarrhea
- Dizziness or passing out

*What to do:*
- Use EpiPen if available (thigh)
- Call 911 immediately
- Lay child flat (unless breathing trouble)

**4. Seizures**
*What it looks like:*
- Body stiffens then shakes
- Eyes roll back
- May lose bladder control
- May stop breathing briefly

*What to do:*
- Protect from injury (nothing in mouth!)
- Turn on side
- Time the seizure
- Call 911 if: First seizure, lasts >5 minutes, breathing problems, or no recovery

**5. Head Injury**
*Warning signs to watch for:*
- Loss of consciousness
- Repeated vomiting
- Severe headache
- Confusion or unusual behavior
- Unequal pupils
- Clear fluid from nose/ear

**6. Dehydration**
*Signs:*
- No wet diapers for 6+ hours (infant)
- No tears when crying
- Sunken eyes or soft spot
- Very sleepy or irritable
- Dry mouth

*What to do:*
- Give small frequent sips of Pedialyte
- Seek care if not keeping fluids down

**7. High Fever with Concerning Signs**
*Go to ER if fever plus:*
- Baby under 3 months
- Purple rash that doesn't fade
- Stiff neck
- Very sleepy, hard to wake
- Severe headache
- Trouble breathing

**General Tips:**
- Keep poison control number handy: 1-800-222-1222
- Learn infant/child CPR
- Have a first aid kit
- Know where nearest ER is
- Stay calm - children pick up on your fear`,
      keyTerms: [
        { term: 'emergency', definition: 'A serious situation that needs help right away' },
        { term: 'anaphylaxis', definition: 'A severe allergic reaction that can be life-threatening' },
        { term: 'seizure', definition: 'When the brain has abnormal electrical activity causing shaking or changes in behavior' },
        { term: 'choking', definition: 'When something blocks the airway and stops breathing' },
        { term: 'EpiPen', definition: 'A medicine injector that treats severe allergic reactions' },
      ],
      analogies: [
        'The body\'s breathing alarm system shows warning signs like a dashboard - blue lips is like a red warning light.',
        'An allergic reaction is like your immune system overreacting to a false alarm, but the response itself is dangerous.',
        'A seizure is like an electrical storm in the brain - you need to wait for it to pass and keep the child safe.',
      ],
      examples: [
        'A toddler who swallowed a small toy and can\'t cough or cry needs choking first aid immediately.',
        'A child who ate peanuts and develops hives plus breathing trouble needs EpiPen and 911.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pediatric emergencies require rapid assessment using the Pediatric Assessment Triangle, recognition of respiratory and cardiovascular distress, and age-appropriate resuscitation techniques.',
      explanation: `Systematic approach to pediatric emergencies improves recognition and outcomes.

**Pediatric Assessment Triangle (PAT):**

Rapid visual assessment without touching:

**1. Appearance (TICLS):**
- Tone: Moving, good muscle tone?
- Interactiveness: Responding to environment?
- Consolability: Can be calmed?
- Look/Gaze: Making eye contact?
- Speech/Cry: Strong cry, appropriate speech?

**2. Work of Breathing:**
- Abnormal positioning (tripod, sniffing)
- Retractions (suprasternal, intercostal, subcostal)
- Nasal flaring
- Audible sounds (stridor, wheezing, grunting)
- Head bobbing (infants)

**3. Circulation to Skin:**
- Pallor
- Mottling
- Cyanosis
- Delayed capillary refill

**PAT Interpretation:**

| Appearance | WOB | Circulation | Assessment |
|------------|-----|-------------|------------|
| Normal | Normal | Normal | Stable |
| Abnormal | Normal | Normal | CNS/metabolic problem |
| Normal | Abnormal | Normal | Respiratory distress |
| Abnormal | Abnormal | Normal | Respiratory failure |
| Normal | Normal | Abnormal | Compensated shock |
| Abnormal | Normal | Abnormal | Decompensated shock |
| Abnormal | Abnormal | Abnormal | Cardiopulmonary failure |

**Respiratory Emergencies:**

**Upper Airway Obstruction:**

*Croup (Laryngotracheobronchitis):*
- Viral (parainfluenza)
- Barking cough, inspiratory stridor
- Worse at night
- Treatment: Dexamethasone, nebulized epinephrine if severe

*Epiglottitis:*
- Bacterial (H. flu decreasing with vaccination)
- Drooling, tripod position, toxic appearance
- DO NOT examine throat
- Emergency airway management

*Foreign Body:*
- Sudden onset, witnessed choking
- Inspiratory stridor if laryngeal/tracheal
- Wheezing if bronchial
- May need bronchoscopy

**Lower Airway:**

*Status Asthmaticus:*
- Severe bronchospasm
- Continuous albuterol, steroids, ipratropium
- Magnesium sulfate IV
- May need intubation

*Bronchiolitis with Respiratory Failure:*
- RSV most common
- Supportive care (oxygen, hydration)
- May need HFNC or intubation

**Cardiovascular Emergencies:**

**Shock Recognition:**

| Type | Mechanism | Signs |
|------|-----------|-------|
| Hypovolemic | Fluid loss (dehydration, bleeding) | Tachycardia, delayed cap refill, dry mucous membranes |
| Distributive | Vasodilation (sepsis, anaphylaxis) | Warm shock early, cold shock late |
| Cardiogenic | Heart failure | Hepatomegaly, JVD, edema |
| Obstructive | Outflow obstruction (PE, tamponade) | Distended neck veins, muffled heart sounds |

**Fluid Resuscitation:**
- Bolus: 20 mL/kg isotonic saline
- Reassess after each bolus
- Repeat up to 60 mL/kg in first hour if needed
- Consider pressors if not responding

**Pediatric CPR (Updates):**

*Infant (<1 year):*
- Compression: 2 fingers or encircling hands
- Depth: 1.5 inches (4 cm)
- Rate: 100-120/min
- Ratio: 30:2 (single rescuer) or 15:2 (two rescuers)

*Child (1 year to puberty):*
- Compression: Heel of hand(s)
- Depth: 2 inches (5 cm)
- Rate: 100-120/min
- Ratio: 30:2 (single) or 15:2 (two rescuers)

**Common Emergencies:**

**Seizures:**
- Most pediatric seizures are febrile and benign
- Treat with benzodiazepines if >5 minutes
- Lorazepam 0.1 mg/kg IV or midazolam 0.2 mg/kg IM/IN

**Anaphylaxis:**
- Epinephrine 0.01 mg/kg IM (max 0.5 mg)
- Repeat every 5-15 min if needed
- Fluids, H1/H2 blockers, steroids adjunctive

**Diabetic Emergencies:**
- DKA: Careful fluid resuscitation, insulin drip, monitor K+
- Hypoglycemia: Glucose 0.5-1 g/kg IV (2-4 mL/kg D25)`,
      keyTerms: [
        { term: 'Pediatric Assessment Triangle', definition: 'Rapid visual assessment tool evaluating appearance, work of breathing, and circulation' },
        { term: 'stridor', definition: 'High-pitched sound on inspiration indicating upper airway narrowing' },
        { term: 'status asthmaticus', definition: 'Severe asthma attack not responding to standard bronchodilator therapy' },
        { term: 'compensated shock', definition: 'Early shock with normal blood pressure but other signs of poor perfusion' },
        { term: 'decompensated shock', definition: 'Late shock with low blood pressure indicating imminent cardiovascular collapse' },
      ],
      analogies: [
        'The PAT is like a traffic light system - abnormal in all three areas is a red light emergency.',
        'Compensated shock is like a car running on fumes - it\'s still moving but about to stall.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive pediatric emergency management integrates systematic primary and secondary assessment, evidence-based resuscitation algorithms, and understanding of age-specific physiological responses and medication dosing.',
      explanation: `Pediatric emergency care requires integration of clinical assessment with age-appropriate interventions.

**Systematic Assessment:**

**Primary Assessment (ABCDE):**

*A - Airway:*
- Patent? Maintainable? Obstructed?
- Interventions: Positioning, suction, airway adjuncts
- Anticipate difficult airway in: Facial trauma, burns, angioedema

*B - Breathing:*
- Rate: Age-appropriate? (Infant 30-60, child 20-30)
- Effort: Retractions, accessory muscles
- Efficacy: Chest rise, breath sounds, SpO2
- Interventions: Oxygen, BVM, intubation

*C - Circulation:*
- Heart rate: Age-appropriate? (Infant 100-160, child 80-120)
- Pulses: Central and peripheral quality
- Perfusion: Cap refill, skin temperature/color
- Blood pressure: Late sign of shock in children
- Interventions: IV/IO access, fluids, pressors

*D - Disability:*
- AVPU: Alert, Voice, Pain, Unresponsive
- Glasgow Coma Scale (modified for children)
- Pupils: Size, reactivity
- Glucose: Always check in altered mental status

*E - Exposure:*
- Full exam for injuries/rashes
- Temperature: Avoid hypothermia

**Pediatric Vital Signs by Age:**

| Age | HR | RR | SBP (5th percentile) |
|-----|----|----|----------------------|
| Infant | 100-160 | 30-60 | 70 |
| Toddler | 90-150 | 24-40 | 70 + (2 x age) |
| Preschool | 80-140 | 22-34 | 70 + (2 x age) |
| School-age | 70-120 | 18-30 | 70 + (2 x age) |
| Adolescent | 60-100 | 12-20 | 90 |

**Respiratory Failure Management:**

**Airway Management:**

*Bag-Valve-Mask (BVM):*
- E-C clamp technique
- Rate: 12-20/min
- Avoid hyperventilation

*Advanced Airway:*

| Equipment | Sizing |
|-----------|--------|
| ETT uncuffed | (Age/4) + 4 |
| ETT cuffed | (Age/4) + 3.5 |
| Laryngoscope blade | 0-1 (infant), 2 (child), 3 (adolescent) |
| Suction catheter | ETT size x 2 |

*RSI Medications:*

| Drug | Dose | Notes |
|------|------|-------|
| Etomidate | 0.3 mg/kg | Hemodynamically neutral |
| Ketamine | 1-2 mg/kg | Bronchodilator, maintains BP |
| Rocuronium | 1 mg/kg | Rapid onset, longer duration |
| Succinylcholine | 1-2 mg/kg | Fastest onset, contraindications |

**Shock Management:**

**Septic Shock Protocol:**
- Recognize early (fever + tachycardia + poor perfusion)
- IV/IO access within 5 minutes
- Fluid bolus 20 mL/kg within 15 minutes
- Repeat boluses (up to 60 mL/kg in first hour)
- Broad-spectrum antibiotics within 1 hour
- Vasopressors if fluid refractory

*Vasopressors:*
- Norepinephrine: First-line for cold shock
- Epinephrine: Alternative, especially if cardiac dysfunction
- Dopamine: No longer first-line

**Cardiac Emergencies:**

**Arrhythmias:**

*SVT:*
- Most common pediatric arrhythmia
- Rate >220 (infant) or >180 (child)
- Narrow complex, regular
- Treatment: Vagal maneuvers → Adenosine 0.1 mg/kg (max 6 mg) → 0.2 mg/kg (max 12 mg) → Cardioversion

*VF/Pulseless VT:*
- Rare in children
- CPR → Defibrillation 2 J/kg → CPR → 4 J/kg → Epinephrine/Amiodarone

**PALS Algorithms:**

*Cardiac Arrest:*
- High-quality CPR
- Rhythm check every 2 minutes
- Shockable: Defibrillation + epinephrine + amiodarone
- Non-shockable: Epinephrine every 3-5 minutes

*Bradycardia with Pulse:*
- If symptomatic with poor perfusion: CPR → Epinephrine → Atropine

**Toxicology:**

*Approach:*
- Supportive care primary
- Identify toxidrome
- Specific antidotes when available
- Decontamination (limited indications)

*Common Pediatric Ingestions:*

| Toxin | Antidote |
|-------|----------|
| Acetaminophen | N-acetylcysteine |
| Opioids | Naloxone |
| Benzodiazepines | Flumazenil (caution) |
| Beta-blockers | Glucagon, high-dose insulin |
| Iron | Deferoxamine |
| Organophosphates | Atropine, pralidoxime |

**Trauma:**

*Primary Survey:* ABCDE with C-spine precautions

*Fluid Resuscitation:*
- Crystalloid: 20 mL/kg boluses
- Blood: 10-20 mL/kg if ongoing hemorrhage

*Head Trauma:*
- GCS assessment
- CT criteria (PECARN): Age <2 high risk features, altered mental status
- Avoid secondary injury: Maintain oxygenation, avoid hypotension`,
      keyTerms: [
        { term: 'RSI', definition: 'Rapid sequence intubation; simultaneous sedation and paralysis for urgent airway control' },
        { term: 'fluid refractory shock', definition: 'Shock not responding to 40-60 mL/kg fluid resuscitation; requires vasopressors' },
        { term: 'PALS', definition: 'Pediatric Advanced Life Support; standardized resuscitation algorithms' },
        { term: 'toxidrome', definition: 'Constellation of signs/symptoms suggesting specific class of toxin' },
        { term: 'PECARN', definition: 'Pediatric Emergency Care Applied Research Network; evidence-based decision rules' },
      ],
      clinicalNotes: 'In pediatric shock, tachycardia is the earliest sign. Hypotension is a late and ominous finding indicating decompensation. Always look for subtle signs of poor perfusion (cap refill, mental status, urine output) before BP drops.',
    },
    4: {
      level: 4,
      summary: 'Advanced pediatric emergency management integrates understanding of age-specific pathophysiology, recognition of life-threatening conditions mimicking common presentations, hemodynamic monitoring, and post-resuscitation care to optimize outcomes.',
      explanation: `Complex pediatric emergencies require nuanced clinical reasoning and advanced management strategies.

**Respiratory Physiology Considerations:**

**Age-Specific Differences:**
- Higher metabolic rate = faster desaturation
- Smaller FRC = less oxygen reserve
- Compliant chest wall = paradoxical breathing
- Large tongue relative to oral cavity
- Anterior/cephalad larynx
- Obligate nasal breathers (infants)

**Apneic Oxygenation:**
- Preoxygenation critical
- Nasal cannula during intubation attempt
- Children desaturate faster than adults

**ARDS in Children:**
- Pediatric-specific definitions (PALICC criteria)
- Oxygenation index: (MAP × FiO2 × 100) / PaO2
- Lung protective ventilation: Low tidal volume, permissive hypercapnia

**Advanced Hemodynamic Management:**

**Point-of-Care Ultrasound:**
- IVC collapsibility: Volume status
- Cardiac function: Ejection fraction, RV strain
- Lung ultrasound: B-lines (pulmonary edema), consolidation

**Vasoactive Medications:**

| Agent | Dose Range | Primary Effect | Notes |
|-------|-----------|----------------|-------|
| Epinephrine | 0.05-0.3 mcg/kg/min | β1, β2, α (high dose) | Inotrope + chronotrope |
| Norepinephrine | 0.05-2 mcg/kg/min | α1 >> β1 | Vasopressor |
| Dopamine | 2-20 mcg/kg/min | Dose-dependent | Variable effects |
| Dobutamine | 2-20 mcg/kg/min | β1, β2 | Pure inotrope |
| Milrinone | 0.25-0.75 mcg/kg/min | PDE inhibitor | Inodilator, load carefully |
| Vasopressin | 0.0003-0.002 U/kg/min | V1 receptor | Catecholamine-resistant shock |

**Goal-Directed Therapy:**
- Target lactate clearance
- ScvO2 >70% (septic shock)
- Adequate urine output (>1 mL/kg/hr)
- Improving mental status

**Life-Threatening Mimics:**

**Sepsis Mimics:**
- Adrenal crisis: Hypoglycemia, hyperkalemia, hyponatremia
- Toxic ingestion: Obtain toxicology history
- Inborn errors of metabolism: Hypoglycemia, acidosis, hyperammonemia
- Myocarditis: Shock + arrhythmia + hepatomegaly

**Respiratory Distress Mimics:**
- Cardiac disease: Heart failure presenting as "asthma"
- Metabolic acidosis: Compensatory tachypnea
- Psychogenic: Hyperventilation syndrome

**Altered Mental Status Differential:**

*AEIOU-TIPS:*
- Alcohol/Abuse
- Epilepsy/Encephalopathy
- Insulin (hypoglycemia)
- Opiates/Overdose
- Uremia
- Trauma
- Infection
- Psychiatric
- Stroke/Shunt malfunction

**Neonatal Emergencies:**

**Ductal-Dependent Lesions:**
- Present at 1-2 weeks when ductus closes
- Cyanosis or shock depending on lesion
- Treatment: Prostaglandin E1 (0.05-0.1 mcg/kg/min)
- Anticipate apnea with PGE1

| Lesion Type | Presentation |
|-------------|--------------|
| Ductal-dependent systemic | Shock, poor pulses, acidosis |
| Ductal-dependent pulmonary | Cyanosis |

**Inborn Errors of Metabolism:**
- Present in first weeks of life
- Lethargy, poor feeding, seizures
- Labs: Glucose, ammonia, lactate, blood gas
- Treatment: Stop protein, IV glucose, specific therapy

**Post-Cardiac Arrest Care:**

**Targeted Temperature Management:**
- Consider for comatose patients after ROSC
- Avoid hyperthermia
- Normothermia or mild hypothermia (32-34°C)
- Duration 24-72 hours

**Neuroprotection:**
- Maintain normoglycemia
- Avoid hypotension (may need pressors)
- Avoid hypoxia and hyperoxia
- Seizure monitoring (consider EEG)

**Prognostication:**
- Clinical exam at 72 hours
- EEG patterns
- MRI findings
- Biomarkers (NSE, S100B)

**Quality and Safety:**

**Weight-Based Dosing:**
- Broselow tape for resuscitation
- Actual weight when available
- Drug dose calculations verified

**Communication:**
- Closed-loop communication
- Clear role assignment
- Family presence considerations
- Debriefing after events

**Pediatric Early Warning Scores:**
- Identify deteriorating patients
- Trigger escalation of care
- Examples: PEWS, Bedside PEWS`,
      keyTerms: [
        { term: 'ductal-dependent lesion', definition: 'Congenital heart defect requiring patent ductus arteriosus for systemic or pulmonary blood flow' },
        { term: 'prostaglandin E1', definition: 'Medication to maintain ductal patency in newborns with ductal-dependent cardiac lesions' },
        { term: 'ROSC', definition: 'Return of spontaneous circulation; restoration of perfusing cardiac rhythm after arrest' },
        { term: 'targeted temperature management', definition: 'Controlled body temperature after cardiac arrest to improve neurological outcomes' },
        { term: 'oxygenation index', definition: 'Measure of oxygenation impairment in mechanical ventilation: (MAP x FiO2 x 100)/PaO2' },
      ],
      clinicalNotes: 'In any infant presenting with shock in the first weeks of life, consider ductal-dependent cardiac lesion. Start prostaglandin E1 empirically while awaiting echocardiography. Be prepared for apnea as common PGE1 side effect.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pediatric emergency medicine integrates precision resuscitation approaches, advanced monitoring technologies, and understanding of post-intensive care syndrome while translational research advances inform novel therapeutic targets and system-level quality improvement.',
      explanation: `State-of-the-art pediatric emergency care reflects advances in resuscitation science and healthcare systems.

**Precision Resuscitation:**

**Individualized Fluid Management:**
- Dynamic assessment over static measures
- Pulse pressure variation (mechanically ventilated)
- Passive leg raise response
- Point-of-care ultrasound guidance

**Balanced Resuscitation:**
- Crystalloid vs. colloid debate continues
- Balanced crystalloids may reduce AKI
- Blood products earlier in hemorrhagic shock
- Damage control resuscitation principles

**Biomarker-Guided Therapy:**
- Lactate clearance as resuscitation endpoint
- Procalcitonin guiding antibiotic duration
- Troponin in suspected myocardial dysfunction
- BNP in distinguishing cardiac from pulmonary disease

**Advanced Monitoring Technologies:**

**Non-Invasive Cardiac Output:**
- Electrical cardiometry
- Ultrasound cardiac output monitoring
- Pulse contour analysis

**Cerebral Oxygenation:**
- Near-infrared spectroscopy (NIRS)
- Regional cerebral oxygen saturation
- May detect cerebral hypoxia before systemic signs

**Tissue Perfusion:**
- Sublingual microcirculation assessment
- Laser Doppler flowmetry
- Research tools becoming clinical

**ECMO (Extracorporeal Membrane Oxygenation):**

**Pediatric Indications:**
- Refractory cardiac failure
- Refractory respiratory failure
- E-CPR (ECMO during CPR)
- Bridge to recovery or transplant

**Considerations:**
- Center expertise critical
- Patient selection important
- Earlier initiation improving outcomes
- Anticoagulation management

**Post-Intensive Care Syndrome (PICS-p):**

**Components:**
- Physical: Weakness, deconditioning
- Cognitive: Memory, attention, executive function
- Psychological: Anxiety, PTSD, depression
- Social: School reintegration, peer relationships

**Family Impact (PICS-F):**
- Caregiver burden
- Mental health effects
- Financial strain
- Sibling effects

**Mitigation Strategies:**
- ABCDEF bundle adaptation
- Early mobilization
- Sleep promotion
- Family engagement
- ICU diaries
- Post-discharge follow-up

**Translational Research:**

**Cardiac Arrest:**
- Epinephrine dosing optimization
- Vasopressin combinations
- Mitochondrial-targeted therapies
- Nano-medicine drug delivery

**Sepsis:**
- Endothelial stabilization
- Glycocalyx preservation
- Immunomodulation timing
- Precision antibiotics based on rapid diagnostics

**Traumatic Brain Injury:**
- Hyperosmolar therapy optimization
- Seizure prophylaxis duration
- Neuromonitoring integration
- Hypothermia protocols

**Systems and Implementation Science:**

**Pediatric Readiness:**
- ED pediatric readiness assessment
- Guidelines and equipment checklists
- Pediatric-specific training
- Quality improvement programs

**Telemedicine:**
- Rural/community hospital support
- Specialist consultation
- Transport coordination
- Disaster response

**Simulation:**
- Team training
- Rare event preparation
- Systems testing
- Debriefing methodology

**Quality Metrics:**
- Time to antibiotic in sepsis
- Time to defibrillation in VF
- CPR quality metrics
- Outcome benchmarking

**Emerging Therapeutics:**

**Hemostatic Agents:**
- Tranexamic acid in trauma
- Factor concentrates
- Whole blood resuscitation

**Neuroprotection:**
- Targeted temperature management optimization
- Seizure prevention/treatment
- Multimodal neuromonitoring
- Cell-based therapies (future)

**Inflammatory Modulation:**
- Timing of immunomodulation in sepsis
- Cytokine adsorption
- Endotoxin removal

**Technology Integration:**

**AI and Decision Support:**
- Early deterioration detection
- Sepsis prediction algorithms
- Dosing calculators
- Image interpretation

**Wearable Monitoring:**
- Continuous vital sign monitoring
- Activity and sleep tracking
- Post-discharge surveillance

**Digital Health:**
- Family communication apps
- Discharge instruction delivery
- Telehealth follow-up
- Connected devices

**Global Health Perspectives:**

**Resource-Limited Settings:**
- ETAT+ (Emergency Triage Assessment and Treatment)
- WHO guidelines adaptation
- Essential equipment availability
- Training programs

**Disparities:**
- Access to pediatric specialty care
- Outcomes variation by facility type
- Social determinants of health
- Quality improvement to reduce disparities

**Pandemic Preparedness:**
- Surge capacity planning
- PPE protocols
- Novel pathogen response
- MIS-C recognition and management`,
      keyTerms: [
        { term: 'E-CPR', definition: 'Extracorporeal CPR; ECMO initiation during ongoing cardiac arrest for refractory patients' },
        { term: 'PICS-p', definition: 'Post-Intensive Care Syndrome in pediatrics; physical, cognitive, and psychological sequelae after critical illness' },
        { term: 'precision resuscitation', definition: 'Individualized approach to fluid and hemodynamic management using advanced monitoring' },
        { term: 'glycocalyx', definition: 'Endothelial surface layer critical for vascular integrity; damaged in sepsis and trauma' },
        { term: 'ABCDEF bundle', definition: 'ICU care bundle: Assess pain, Both SAT/SBT, Choice of sedation, Delirium monitoring, Early mobility, Family engagement' },
      ],
      clinicalNotes: `**Current Practice Pearls:**
- NIRS monitoring may detect cerebral hypoxia before systemic decompensation
- Balanced crystalloids (LR, Plasmalyte) may reduce AKI compared to normal saline in large-volume resuscitation
- Early mobilization and family engagement (ABCDEF bundle) reduce PICS-p
- E-CPR (ECMO during CPR) should be considered in refractory arrest at capable centers
- Quality metrics (time to antibiotics, CPR quality) drive outcome improvement in pediatric emergencies`,
    },
  },

  media: [
    {
      id: 'pat-triangle',
      type: 'diagram',
      filename: 'pediatric-assessment-triangle.svg',
      title: 'Pediatric Assessment Triangle',
      description: 'Visual guide to the rapid assessment using appearance, work of breathing, and circulation',
    },
    {
      id: 'pals-algorithms',
      type: 'diagram',
      filename: 'pals-cardiac-arrest.svg',
      title: 'PALS Cardiac Arrest Algorithm',
      description: 'Pediatric Advanced Life Support algorithm for cardiac arrest',
    },
  ],
  citations: [
    {
      id: 'pals-guidelines',
      type: 'article',
      title: 'Pediatric Basic and Advanced Life Support: 2020 International Consensus on CPR and ECC Science',
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000901',
    },
    {
      id: 'apls',
      type: 'textbook',
      title: 'APLS: The Pediatric Emergency Medicine Resource',
      authors: ['American Academy of Pediatrics'],
      source: 'Jones & Bartlett Learning',
    },
    {
      id: 'nelson-emergency',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman RM', 'St. Geme JW'],
      source: 'Elsevier',
      chapter: 'Pediatric Emergencies',
    },
  ],
  crossReferences: [
    { targetId: 'pediatrics-fever-approach', targetType: 'topic', relationship: 'related', label: 'Pediatric Fever' },
    { targetId: 'pediatrics-asthma', targetType: 'topic', relationship: 'related', label: 'Pediatric Asthma' },
    { targetId: 'cardiovascular-system', targetType: 'system', relationship: 'related', label: 'Cardiovascular System' },
  ],
  tags: {
    systems: ['cardiovascular', 'respiratory', 'nervous'],
    topics: ['pediatrics', 'emergency-medicine', 'critical-care'],
    keywords: ['emergency', 'resuscitation', 'PALS', 'shock', 'respiratory failure', 'cardiac arrest', 'trauma'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'emergency-medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pediatricEmergencies;
