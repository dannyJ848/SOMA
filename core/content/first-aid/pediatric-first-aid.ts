/**
 * Pediatric First Aid
 *
 * Comprehensive guide to first aid for infants and children, including
 * age-specific techniques, common pediatric emergencies, and when to seek help.
 */

import { EducationalContent } from '../types';

export const pediatricFirstAidContent: EducationalContent = {
  id: 'topic-pediatric-first-aid',
  type: 'topic',
  name: 'Pediatric First Aid',
  nameEs: 'Primeros Auxilios Pediatricos',
  alternateNames: ['Child First Aid', 'Infant First Aid', 'Kids Emergency Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Babies and kids are not just small adults — they need special first-aid steps because their bodies work differently. Learning these steps can help you keep a child safe until a doctor arrives.',
      explanation: `Helping a baby or child who is hurt or sick can feel scary, but knowing a few simple steps can make a huge difference. Children's bodies are smaller and still growing, so the way you help them is a little different from helping an adult.

**Why kids need different first aid:**
Think of it like the difference between a small bicycle and a big one. They both work the same way, but you would not use the same size wrench to fix both. A baby's body is delicate, so you need gentler, more careful movements.

**Checking if a child is okay:**
- For a baby: Tap the bottom of their foot gently and call their name loudly. If they do not respond, they need help right away.
- For an older child: Tap their shoulder and ask "Are you okay?" in a loud voice.
- Always look for breathing — watch the chest rise and fall.

**Common things that happen to kids:**
1. **Fever** — A child feels very hot. Use a thermometer to check. A fever over 100.4 degrees F in a baby under 3 months is an emergency.
2. **Falls** — Kids fall a lot while playing. Check for bumps on the head, and watch for vomiting or sleepiness afterward.
3. **Cuts and scrapes** — Wash the area with clean water, apply gentle pressure if bleeding, and cover with a bandage.
4. **Choking** — Babies choke on small objects easily. For a baby, hold them face-down on your arm and give 5 back slaps, then flip and give 5 chest thrusts.
5. **Burns** — Run cool (not cold) water over the burned area for at least 10 minutes. Do not use ice.

**When to call 911:**
- The child is not breathing or not waking up
- There is heavy bleeding that will not stop
- The child had a seizure (shaking all over)
- The child swallowed something dangerous like medicine or a battery
- A baby under 3 months has a high fever

**Keeping kids safe:**
- Put small objects out of reach of babies
- Keep medicines and cleaning supplies locked up
- Always watch children near water
- Make sure car seats and helmets are used properly`,
      keyTerms: [
        { term: 'pediatric', definition: 'Relating to the medical care of babies, children, and teenagers' },
        { term: 'fever', definition: 'When the body temperature goes above normal (98.6 degrees F), usually because the body is fighting an illness' },
        { term: 'responsive', definition: 'When a person reacts to touch or sound, meaning they are awake or can be woken up' },
        { term: 'seizure', definition: 'When a person shakes uncontrollably because of unusual electrical activity in the brain' },
        { term: 'choking', definition: 'When something gets stuck in the throat and blocks the airway, making it hard or impossible to breathe' },
        { term: 'first responder', definition: 'The first person to arrive and help at an emergency scene, before professional help comes' },
      ],
      analogies: [
        'A child\'s body is like a small plant — it needs gentler handling than a fully grown tree.',
        'Checking on a baby is like checking if a phone is turned on — you tap it and see if there is a response.',
        'A fever is like an alarm system — the body is telling you something is wrong inside.',
      ],
      patientCounselingPoints: [
        'Always keep emergency numbers posted where everyone in the house can see them.',
        'Take a pediatric first aid class — practicing on mannequins builds confidence.',
        'Keep a basic first aid kit at home with child-sized bandages and a thermometer.',
        'When in doubt, always call your pediatrician or 911. It is better to be safe.',
        'Stay calm — children sense fear, and your calm voice helps them feel safer.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pediatric first aid requires age-specific techniques because children have unique anatomical and physiological characteristics. Understanding the differences between infant, child, and adolescent emergency care is essential for effective response.',
      explanation: `## Pediatric First Aid Fundamentals

Children are physiologically distinct from adults in ways that directly affect emergency care. Their higher metabolic rate, smaller airways, proportionally larger heads, and limited ability to communicate symptoms all require adapted first-aid approaches.

### Age Categories in Pediatric First Aid
- **Infant**: Birth to 12 months
- **Child**: 1 year to onset of puberty (approximately 12 years)
- **Adolescent**: Puberty to 18 years (treated more like adults)

### Key Anatomical Differences
- **Airway**: Infants and young children have narrower airways that obstruct more easily. The tongue is proportionally larger relative to the mouth.
- **Head**: Proportionally larger and heavier, making head injuries more common in falls.
- **Skin**: Thinner skin means burns can be more severe at lower temperatures.
- **Bones**: More flexible (greenstick fractures are common), and growth plates can be injured.

### Primary Assessment (Pediatric Assessment Triangle)
The Pediatric Assessment Triangle (PAT) is a rapid visual tool used within the first 30 seconds:
1. **Appearance**: Tone, interactiveness, consolability, look/gaze, speech/cry
2. **Work of Breathing**: Abnormal sounds, positioning, retractions, nasal flaring
3. **Circulation to Skin**: Pallor, mottling, cyanosis

### Common Pediatric Emergencies

**Febrile Seizures:**
- Occur in children 6 months to 5 years old
- Triggered by rapidly rising fever
- Usually last less than 5 minutes
- Place child on side, do not restrain, time the seizure
- Call 911 if seizure lasts longer than 5 minutes

**Dehydration:**
- Common with vomiting, diarrhea, or fever
- Signs: fewer wet diapers, dry mouth, no tears when crying, sunken eyes
- Offer small sips of oral rehydration solution frequently
- Seek medical care if child cannot keep fluids down

**Croup:**
- Barking cough, usually worse at night
- Take child into cool night air or a steamy bathroom
- Seek emergency care if child has stridor (high-pitched breathing sound) at rest

**Choking (Infant vs. Child):**
- Infant: 5 back blows alternating with 5 chest thrusts
- Child (over 1 year): Abdominal thrusts (Heimlich maneuver)
- Never do a blind finger sweep in the mouth

### Medication Safety
- Never give aspirin to children (risk of Reye syndrome)
- Dosing is weight-based — always use the correct measuring device
- Keep all medications in child-resistant containers out of reach

### Psychological Considerations
- Use simple, honest language appropriate to the child's age
- Allow a parent or caregiver to stay close when possible
- Comfort items (stuffed animal, blanket) can reduce anxiety`,
      keyTerms: [
        { term: 'Pediatric Assessment Triangle', definition: 'A rapid visual tool used in the first 30 seconds to evaluate a child\'s appearance, breathing effort, and skin circulation' },
        { term: 'febrile seizure', definition: 'A convulsion triggered by a rapid rise in body temperature, common in young children between 6 months and 5 years' },
        { term: 'greenstick fracture', definition: 'An incomplete bone break where one side bends but does not fully separate, common in children because their bones are more flexible' },
        { term: 'Reye syndrome', definition: 'A rare but serious condition causing swelling in the liver and brain, linked to aspirin use in children during viral illness' },
        { term: 'croup', definition: 'A respiratory infection that causes swelling near the vocal cords, producing a distinctive barking cough, common in children under 5' },
        { term: 'dehydration', definition: 'A condition where the body loses more fluids than it takes in, which can be dangerous in small children due to their smaller fluid reserves' },
      ],
      patientCounselingPoints: [
        'Keep a written list of your child\'s allergies and medications with you at all times.',
        'Learn infant and child CPR — the technique differs from adult CPR.',
        'Childproof your home by securing furniture, covering outlets, and locking cabinets with chemicals.',
        'Know the signs of dehydration and keep oral rehydration solution at home.',
        'Never leave a child unattended near water, even in a bathtub.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pediatric first aid integrates knowledge of developmental anatomy, age-specific vital sign ranges, weight-based interventions, and recognition of conditions unique to childhood. The Pediatric Assessment Triangle and systematic primary survey form the backbone of initial evaluation.',
      explanation: `## Pediatric First Aid: Intermediate Depth

### Developmental Anatomy and Its Impact on First Aid

Children undergo continuous anatomical changes that affect how emergencies present and how interventions are performed:

**Airway Considerations:**
- The infant larynx sits higher (C3-C4 vs. C4-C6 in adults), and the epiglottis is omega-shaped and floppy.
- The narrowest portion of the pediatric airway is at the cricoid ring (subglottic region) in children under 8, versus the glottis in adults.
- The relatively large tongue and occiput can cause airway obstruction in the supine position. A "sniffing position" (slight neck extension with a towel roll under the shoulders for infants) optimizes the airway.

**Cardiovascular Differences:**
- Cardiac output in children is primarily heart-rate dependent (limited stroke volume reserve).
- Tachycardia is often the first sign of shock in children; hypotension is a late and ominous finding.
- Normal vital signs vary by age:
  - Newborn: HR 120-160, RR 30-60, SBP 60-80
  - Infant: HR 100-150, RR 25-40, SBP 70-90
  - Preschool (3-5 yr): HR 80-120, RR 20-30, SBP 80-100
  - School age (6-12 yr): HR 70-110, RR 18-25, SBP 90-110

**Respiratory Differences:**
- Infants are obligate nasal breathers until approximately 4-6 months.
- Respiratory failure is the most common pathway to cardiac arrest in children (unlike adults, where cardiac etiology predominates).

### Systematic Assessment

**ABCDE Approach (Adapted for Pediatrics):**
- **A (Airway)**: Assess patency; use jaw-thrust if trauma suspected. Suction with appropriate-sized devices.
- **B (Breathing)**: Assess rate, depth, effort, and symmetry. Look for retractions (subcostal, intercostal, suprasternal), nasal flaring, and grunting.
- **C (Circulation)**: Assess heart rate, capillary refill (normal less than 2 seconds), skin color, pulse quality. Palpate brachial pulse in infants, carotid or femoral in children.
- **D (Disability)**: Use AVPU scale (Alert, Voice, Pain, Unresponsive) or pediatric Glasgow Coma Scale. Check pupils and blood glucose.
- **E (Exposure)**: Fully expose to look for injuries but prevent hypothermia. Children lose heat rapidly due to high body surface area-to-mass ratio.

### Weight Estimation and Dosing
- Broselow Tape: Color-coded, length-based system to estimate weight and guide medication dosing and equipment sizing.
- Formulas: Weight (kg) = (Age in years + 4) x 2 (for children 1-10 years — approximation only).

### Injury Patterns by Age
- **Under 1 year**: Non-accidental injury must always be considered. Look for inconsistent history, bruising in non-mobile infants, retinal hemorrhages.
- **Toddlers (1-3 years)**: Poisoning, falls, drowning, button battery ingestion, foreign body aspiration.
- **School age (6-12 years)**: Bicycle injuries, sports injuries, fractures.
- **Adolescents**: Motor vehicle trauma, sports injuries, substance experimentation.

### Thermal Regulation
Children are vulnerable to both hypothermia and hyperthermia because of their high body surface area-to-mass ratio. In any pediatric emergency:
- Remove wet clothing promptly
- Apply warm blankets
- Minimize time of full body exposure during assessment
- Monitor temperature as a vital sign

### Fluid Resuscitation Basics
- Initial bolus for shock: 20 mL/kg isotonic crystalloid (normal saline or lactated Ringer's)
- Reassess after each bolus
- Avoid rapid large-volume infusion in neonates — risk of intraventricular hemorrhage`,
      keyTerms: [
        { term: 'obligate nasal breather', definition: 'An infant who breathes primarily through the nose rather than the mouth, making nasal obstruction a significant respiratory threat' },
        { term: 'Broselow Tape', definition: 'A color-coded, length-based tool used to estimate a child\'s weight and guide medication dosing and equipment sizing in emergencies' },
        { term: 'capillary refill time', definition: 'The time it takes for color to return to a blanched nail bed, normally under 2 seconds; prolonged refill suggests poor perfusion' },
        { term: 'cricoid ring', definition: 'The complete cartilage ring at the base of the larynx that forms the narrowest point of the pediatric airway in children under 8 years' },
        { term: 'AVPU scale', definition: 'A rapid neurological assessment: Alert, responds to Voice, responds to Pain, Unresponsive — used as a quick alternative to the Glasgow Coma Scale' },
        { term: 'greenstick fracture', definition: 'An incomplete fracture in which the bone bends and cracks but does not break completely through, common in the flexible bones of children' },
      ],
    },
    4: {
      level: 4,
      summary: 'Pediatric emergency assessment requires nuanced understanding of age-specific pathophysiology, recognition of compensated versus decompensated shock, and familiarity with evidence-based resuscitation protocols including PALS algorithms, targeted temperature management, and the unique pharmacokinetics of drug metabolism in children.',
      explanation: `## Pediatric First Aid: Graduate-Level Detail

### Pathophysiology of Pediatric Shock

Children compensate for hypovolemia and sepsis differently than adults. The primary compensatory mechanism is tachycardia and increased systemic vascular resistance, maintaining blood pressure until 25-30% of blood volume is lost.

**Compensated Shock:**
- Tachycardia with normal blood pressure
- Prolonged capillary refill (>2 seconds)
- Cool, mottled extremities with warm central trunk
- Decreased urine output (<1 mL/kg/hr in infants)
- Irritability or altered mental status

**Decompensated Shock:**
- Hypotension (SBP < 70 + [2 x age in years] for children 1-10)
- Weak or absent peripheral pulses
- Markedly delayed capillary refill
- Altered consciousness progressing to lethargy
- This represents a pre-arrest state requiring immediate intervention

**Distributive Shock in Children:**
- Anaphylaxis: Epinephrine 0.01 mg/kg IM (max 0.3 mg in children, 0.15 mg in infants) using 1:1000 concentration. Autoinjector dosing: 0.15 mg for 10-25 kg, 0.3 mg for >25 kg.
- Septic shock: Early goal-directed therapy with fluid boluses (up to 60 mL/kg in the first hour) and vasopressors if fluid-refractory.

### Pediatric Airway Management

**Bag-Valve-Mask (BVM) Ventilation:**
- Appropriate mask sizing: Bridge of nose to cleft of chin
- E-C clamp technique for mask seal
- Ventilation rate: 12-20 breaths/min (1 breath every 3-5 seconds)
- Avoid excessive ventilation — gastric distension reduces diaphragmatic excursion and increases aspiration risk
- Use a pop-off valve with caution; high-resistance conditions may require disabling it

**Advanced Airway Considerations:**
- Uncuffed endotracheal tubes historically used for children under 8; current evidence supports cuffed tubes in all ages with appropriate cuff pressure monitoring (<20-25 cmH2O)
- Tube size estimation: (Age/4) + 3.5 for cuffed tubes
- Depth of insertion: Tube size x 3 at the lip (e.g., 4.0 tube inserted to 12 cm)

### Pediatric Cardiac Arrest

Unlike adults, pediatric cardiac arrest is predominantly caused by respiratory failure and shock rather than primary cardiac events.

**PALS Cardiac Arrest Algorithm:**
- Shockable rhythms (VF/pVT): Defibrillation at 2 J/kg, escalate to 4 J/kg, then consider higher doses up to 10 J/kg
- Non-shockable (asystole/PEA): Epinephrine 0.01 mg/kg IV/IO every 3-5 minutes
- High-quality CPR: Rate 100-120/min; depth at least 1/3 AP diameter (4 cm in infants, 5 cm in children)
- Compression-to-ventilation ratio: 15:2 with two rescuers, 30:2 with single rescuer

**Targeted Temperature Management (TTM):**
- For comatose children after cardiac arrest: target 32-34 degrees C for 48 hours or normothermia (36-37.5 degrees C)
- Avoid hyperthermia post-arrest

### Pharmacokinetic Considerations
- Higher volume of distribution per kg for many drugs
- Immature hepatic enzyme systems in neonates and young infants alter drug metabolism (CYP450 enzymes reach adult levels by age 1-3)
- Renal clearance proportionally higher in children after infancy
- Intramuscular absorption varies with muscle mass and perfusion state
- Rectal and intranasal routes may be preferred when IV access is difficult (e.g., rectal diazepam, intranasal midazolam for seizures)

### Non-Accidental Trauma (NAT) Recognition
- Bruising in pre-mobile infants (those who do not roll, crawl, or cruise) is highly suspicious
- Patterned injuries (loop marks, cigarette burns, immersion lines)
- Metaphyseal corner fractures ("bucket-handle") and posterior rib fractures are pathognomonic
- Retinal hemorrhages with subdural hematoma suggest abusive head trauma
- All healthcare providers are mandatory reporters — document objectively and report to child protective services`,
      keyTerms: [
        { term: 'compensated shock', definition: 'An early stage of circulatory failure where the body maintains blood pressure through increased heart rate and vasoconstriction despite inadequate perfusion' },
        { term: 'PALS', definition: 'Pediatric Advanced Life Support — a standardized set of algorithms and protocols for managing critically ill or injured children, maintained by the American Heart Association' },
        { term: 'intraosseous access', definition: 'Emergency vascular access achieved by inserting a needle into the bone marrow cavity (typically proximal tibia), used when peripheral IV access cannot be rapidly obtained' },
        { term: 'E-C clamp technique', definition: 'A bag-valve-mask ventilation hand position where the thumb and index finger form a C around the mask while the remaining fingers form an E along the mandible to maintain seal and airway positioning' },
        { term: 'targeted temperature management', definition: 'Controlled cooling or maintenance of normothermia after cardiac arrest to reduce neurological injury by decreasing cerebral metabolic demand' },
        { term: 'metaphyseal corner fracture', definition: 'A small avulsion fracture at the corner of a long bone metaphysis, highly specific for non-accidental trauma in infants and toddlers' },
      ],
      clinicalNotes: `Key clinical pearls for pediatric first aid and emergency management:

1. **Hypotension is a late sign** — by the time a child becomes hypotensive, they have lost 25-30% of their blood volume and are in decompensated shock.
2. **Respiratory failure precedes cardiac arrest** in the vast majority of pediatric cases. Prioritize oxygenation and ventilation.
3. **Weight-based dosing is critical** — always use a Broselow tape or verified weight. Estimation errors are a leading cause of medication adverse events in children.
4. **Consider non-accidental trauma** in any child with an injury that is inconsistent with the reported mechanism or developmental stage.
5. **Fever management**: Acetaminophen 15 mg/kg or ibuprofen 10 mg/kg (>6 months only). Alternating is common practice but evidence is mixed. Never use aspirin in children.
6. **Post-resuscitation care** is as important as the resuscitation itself — avoid hyperthermia, hyperoxia, and hypoglycemia.`,
    },
    5: {
      level: 5,
      summary: 'Pediatric emergency medicine encompasses the integration of developmental physiology, evidence-based resuscitation science, injury prevention epidemiology, and systems-based approaches to optimizing outcomes. Contemporary practice emphasizes PALS 2020 guideline updates, point-of-care ultrasound, balanced resuscitation, and family-centered care during critical events.',
      explanation: `## Pediatric First Aid: Professional-Level Comprehensive Review

### Current Evidence and Guideline Updates (AHA 2020 PALS)

The 2020 AHA Guidelines introduced several key changes in pediatric resuscitation:

1. **Epinephrine timing**: Administration of the initial dose of epinephrine for non-shockable rhythms within the first 5 minutes of cardiac arrest is associated with improved outcomes (ROSC and survival to discharge). Prior data from the GWTG-R registry demonstrates a 7% decrease in survival for each 1-minute delay in epinephrine for non-shockable rhythms.

2. **Vasopressor-refractory septic shock**: For fluid-refractory shock, epinephrine or norepinephrine are recommended as first-line vasopressors. The SQUEEZE trial and subsequent analyses suggest that outcomes are similar between the two agents, though practice patterns vary by institution.

3. **Targeted temperature management**: The THAPCA trials (Therapeutic Hypothermia After Pediatric Cardiac Arrest) demonstrated no significant difference in neurobehavioral outcomes between therapeutic hypothermia (32-34 degrees C) and normothermia (36-37.5 degrees C) for out-of-hospital or in-hospital cardiac arrest. Current recommendation is to actively prevent fever while either approach remains acceptable.

4. **Balanced resuscitation in hemorrhagic shock**: Emerging pediatric data extrapolated from adult trauma (PROPPR trial) supports balanced blood product resuscitation (1:1:1 ratio of RBC:FFP:platelets) in pediatric hemorrhagic shock. TXA (tranexamic acid) administration within 3 hours of injury reduces mortality in adult trauma (CRASH-2) with growing pediatric adoption.

### Point-of-Care Ultrasound (POCUS) in Pediatric Emergencies

POCUS has transformed the rapid assessment of critically ill children:
- **E-FAST (Extended Focused Assessment with Sonography in Trauma)**: Detects free fluid in the abdomen, pericardium, and thorax. Sensitivity in children is lower than adults due to less intraperitoneal fat.
- **Cardiac assessment**: Rapid evaluation of cardiac activity, pericardial effusion, and gross contractility during arrest or shock.
- **Lung ultrasound**: B-lines for pulmonary edema, lung sliding for pneumothorax, consolidation for pneumonia. Increasingly replacing chest X-ray for first-line assessment.
- **Vascular access**: Ultrasound-guided peripheral and central venous access improves first-attempt success rates.

### Pediatric Traumatic Brain Injury (TBI)

Pediatric TBI assessment follows specific protocols:
- **PECARN rules** (Pediatric Emergency Care Applied Research Network): Evidence-based clinical decision rules for identifying children at very low risk of clinically important TBI who may not require CT imaging.
  - Age <2: High-risk features include altered mental status, palpable skull fracture, scalp hematoma (non-frontal), loss of consciousness >5 seconds, severe mechanism, not acting normally per parent.
  - Age ≥2: High-risk features include altered mental status, signs of basilar skull fracture, LOC, vomiting, severe headache, severe mechanism.
- PECARN identifies approximately 25% of minor head injury patients as very low risk (<0.05% risk of ciTBI), in whom CT imaging can be safely deferred.

### Injury Prevention as a Public Health Strategy

The epidemiology of pediatric injury drives evidence-based prevention:
- **Drowning**: Leading cause of death in ages 1-4. Fencing all four sides of pools reduces drowning by approximately 80%. Active adult supervision is more effective than any flotation device.
- **Motor vehicle injuries**: Leading cause of death in ages 5-19. Rear-facing car seats until age 2 (or until exceeding seat limits), forward-facing harness until outgrown, then booster seat until proper seat belt fit (usually 4'9").
- **Poisoning**: 83% of pediatric poisoning occurs in children under 6. Single-dose packets of laundry detergent are a growing concern. Poison control center (1-800-222-1222) should be called for all exposures regardless of symptom status.
- **Burns**: Hot water heater set to 120 degrees F prevents most scald burns. Working smoke alarms reduce fire death risk by 50%.

### Family-Centered Care in Pediatric Emergencies

Current evidence supports family presence during resuscitation:
- The 2020 AHA guidelines recommend offering family members the opportunity to be present during CPR and invasive procedures.
- Studies demonstrate that family presence does not negatively impact resuscitation quality, and families who are present report less anxiety and depression at follow-up.
- A designated team member should be assigned to support the family member, explain procedures, and ensure they are not interfering with care.

### Ethical Considerations
- **Termination of resuscitation**: No universally agreed-upon criteria for children. Factors include duration of arrest, etiology, response to interventions, and core temperature (especially in hypothermic arrests where "you're not dead until you're warm and dead").
- **Organ donation**: Should be considered in all pediatric deaths. Early involvement of the organ procurement organization is recommended.
- **Medical decision-making**: Parents are surrogate decision-makers, but mature minor doctrine and emancipated minor status affect consent in adolescents.`,
      keyTerms: [
        { term: 'PECARN', definition: 'Pediatric Emergency Care Applied Research Network — a federally funded research network whose clinical decision rules guide CT imaging decisions for pediatric head trauma based on risk stratification' },
        { term: 'E-FAST', definition: 'Extended Focused Assessment with Sonography in Trauma — a bedside ultrasound protocol to rapidly detect free fluid in the abdomen, pericardium, and thorax, adapted for pediatric use with modified sensitivity considerations' },
        { term: 'THAPCA trial', definition: 'Therapeutic Hypothermia After Pediatric Cardiac Arrest — a landmark trial comparing hypothermia versus normothermia in pediatric cardiac arrest, showing no significant difference in neurobehavioral outcomes at one year' },
        { term: 'balanced resuscitation', definition: 'A hemorrhagic shock management strategy using blood products in ratios approximating whole blood (1:1:1 RBC:FFP:platelets) rather than crystalloid-heavy approaches, adapted from adult trauma evidence for pediatric use' },
        { term: 'mature minor doctrine', definition: 'A legal principle recognizing that some adolescents have sufficient understanding and maturity to provide informed consent for medical treatment without parental involvement' },
        { term: 'POCUS', definition: 'Point-of-Care Ultrasound — bedside ultrasonography performed and interpreted by the treating clinician to answer specific clinical questions in real time, increasingly integral to pediatric emergency assessment' },
      ],
      clinicalNotes: `Professional-level clinical notes:

1. **PECARN application**: Strictly adhere to PECARN criteria for pediatric head CT decisions. Observation with serial neurological checks is appropriate for intermediate-risk patients. Document shared decision-making with families.

2. **Sepsis-3 adaptation**: The adult-derived Sepsis-3 definitions (qSOFA) have limited applicability in pediatrics. The Phoenix Sepsis Score (2024) provides a pediatric-specific organ dysfunction scoring system. Early antibiotic administration (<1 hour) remains a cornerstone.

3. **Resuscitation endpoints**: Lactate clearance, capillary refill normalization, and hepatic venous Doppler (assessed via POCUS) are emerging markers of adequate resuscitation in pediatric shock.

4. **Medication errors**: The most common source of preventable harm in pediatric emergencies. Implement standardized weight-based dosing checklists. Broselow tape accuracy decreases in obese children — use ideal body weight for resuscitation medications.

5. **Post-arrest prognostication**: No single variable reliably predicts neurological outcome. Serial neurological examinations, EEG monitoring, and neuroimaging (MRI at 3-5 days) contribute to prognostic assessment. Avoid premature withdrawal of life-sustaining therapy.

6. **Telemedicine and pediatric emergencies**: Rural and community EDs increasingly use telemedicine consultation with pediatric emergency specialists to guide management of critically ill children.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'cite-ped-fa-1',
      type: 'guideline',
      title: 'American Heart Association Guidelines for CPR and Emergency Cardiovascular Care — Pediatric Life Support',
      authors: ['Topjian, A.A.', 'Raymond, T.T.', 'Atkins, D.'],
      source: 'American Heart Association',
      url: 'https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-ped-fa-2',
      type: 'guideline',
      title: 'Pediatric First Aid/CPR/AED Ready Reference Guide',
      authors: ['American Red Cross'],
      source: 'American Red Cross',
      url: 'https://www.redcross.org/take-a-class/first-aid/pediatric-first-aid',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cite-ped-fa-3',
      type: 'guideline',
      title: 'Injury Prevention and Control: Data and Statistics',
      source: 'Centers for Disease Control and Prevention (CDC)',
      url: 'https://www.cdc.gov/injury/',
      accessedDate: '2025-01-15',
    },
  ],

  crossReferences: [
    {
      targetId: 'topic-choking-all-ages',
      targetType: 'topic',
      relationship: 'related',
      label: 'Choking Response for All Ages',
    },
    {
      targetId: 'topic-cpr-basics-simple',
      targetType: 'topic',
      relationship: 'related',
      label: 'CPR Basics',
    },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'neurological'],
    topics: ['first-aid', 'pediatrics', 'emergency-care', 'injury-prevention'],
    keywords: ['pediatric', 'children', 'infant', 'choking', 'fever', 'seizure', 'CPR', 'PALS'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
