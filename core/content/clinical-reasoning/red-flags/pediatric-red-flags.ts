/**
 * Pediatric Red Flags
 *
 * Warning signs indicating serious illness in children requiring urgent evaluation.
 */

import { EducationalContent } from '../../types';

export const pediatricRedFlagsContent: EducationalContent = {
  id: 'pediatric-red-flags',
  type: 'concept',
  name: 'Pediatric Red Flags',
  alternateNames: ['Pediatric Warning Signs', 'Childhood Emergency Signs', 'Serious Pediatric Symptoms'],

  levels: {
    1: {
      level: 1,
      summary: 'Pediatric red flags are warning signs in babies and children that mean something serious might be wrong and they need medical help right away.',
      explanation: `Children are not just small adults - they have special warning signs that tell us when something serious is wrong. Parents and caregivers should know these signs.

**Call 911 or Go to Emergency Room Immediately For:**

**Trouble Breathing**
If your child is:
- Breathing very fast
- Making grunting sounds
- Pulling in chest with each breath
- Blue color around lips or face
- Cannot speak or cry

**Extreme Sleepiness or Unresponsiveness**
If your child is:
- Hard to wake up
- Not responding normally
- Floppy like a rag doll
- Not making eye contact

**High Fever in Young Babies**
- Any fever (100.4F or higher) in babies under 3 months is an emergency
- Very high fever in older children with other symptoms

**Signs of Dehydration**
- No tears when crying
- Very dry mouth
- No wet diapers for 8+ hours (babies)
- Sunken soft spot on baby\'s head

**Stiff Neck with Fever**
A stiff neck along with high fever and headache can mean meningitis.

**Seizure**
If your child has shaking that they cannot control, especially if it is their first seizure.

**Purple Rash That Does Not Fade**
A rash that looks like bruises and does not turn white when you press on it.

**Severe Belly Pain**
Especially if the belly is hard and very tender to touch.

**In Children of Any Age:**
- Severe headache with vomiting
- Swelling of face, lips, or tongue (allergic reaction)
- Poisoning or swallowed dangerous substance
- Serious injury or accident

**Trust Your Instincts:**
You know your child best. If something seems very wrong, seek help immediately.`,
      keyTerms: [
        { term: 'dehydration', definition: 'When the body does not have enough water to work properly' },
        { term: 'meningitis', definition: 'Serious infection around the brain and spinal cord' },
        { term: 'seizure', definition: 'Abnormal electrical activity in the brain causing shaking or convulsions' },
        { term: 'rash', definition: 'A change in the skin that affects its color, appearance, or texture' },
      ],
      analogies: [
        'Pediatric red flags are like the check engine light for your child - you know your child best, and when the warning light goes on, it is time to see a professional.',
        'They are like a smoke detector for your home - when it sounds, you need to investigate immediately, even if it turns out to be a false alarm.',
      ],
      examples: [
        'A 2-month-old baby with a temperature of 101F needs immediate evaluation - fever in young infants is always serious.',
        'A child who is very lethargic, not drinking, and has not urinated in 12 hours may be dangerously dehydrated.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pediatric red flags are clinical signs indicating potentially life-threatening conditions in infants and children, requiring prompt recognition and urgent medical intervention due to children\'s unique physiology and rapid clinical deterioration.',
      explanation: `Children have distinct physiological differences from adults that make recognition of serious illness challenging but critical. Their ability to compensate for illness is remarkable, but decompensation can be sudden and catastrophic.

**Pediatric-Specific Red Flags:**

**Respiratory Distress:**
- Tachypnea (elevated respiratory rate for age)
- Nasal flaring
- Grunting
- Intercostal/subcostal retractions
- Head bobbing
- Cyanosis (central > peripheral)
- Altered mental status from hypoxia
- Tripod positioning

**Circulatory Compromise:**
- Tachycardia (first sign of shock in children)
- Delayed capillary refill (>2 seconds)
- Mottled or cool extremities
- Weak peripheral pulses
- Hypotension (late sign in children!)
- Altered consciousness

**Neurological Concerns:**
- Altered mental status
- Seizures
- Bulging fontanelle (infants)
- Meningismus (older children)
- Unequal pupils
- Abnormal posturing
- Absent cry (infants)

**Fever Considerations:**

**Age-Specific Fever Thresholds:**
- Under 28 days: >38.0C (100.4F) - always emergency
- 1-3 months: >38.0C - high risk
- 3-6 months: >39.0C - concerning
- Any age: >40.0C or fever >5 days

**Febrile Seizure Red Flags:**
- First seizure requires evaluation
- Focal features
- Prolonged (>15 minutes)
- Status epilepticus
- Incomplete recovery

**Dehydration Assessment:**
- Mild: Thirsty, alert, moist mucous membranes
- Moderate: Tachycardia, sunken eyes, decreased tears, decreased urine
- Severe: Altered mental status, hypotension, skin tenting, anuria

**Sepsis Recognition:**

**Pediatric Septic Shock:**
- Hypothermia or hyperthermia
- Tachycardia or bradycardia
- Altered mental status
- Poor perfusion
- Hypotension (late finding)

**Age-Specific Vital Signs:**

| Age | Heart Rate (awake) | Respiratory Rate |
|-----|-------------------|------------------|
| 0-3 mo | 100-205 | 30-60 |
| 3-6 mo | 100-180 | 30-50 |
| 6-12 mo | 100-170 | 24-40 |
| 1-2 yr | 90-155 | 20-30 |
| 2-5 yr | 80-140 | 18-25 |
| 6-12 yr | 70-120 | 14-22 |
| >12 yr | 60-100 | 12-20 |

**Specific Pediatric Emergencies:**

**Intussusception:**
- Paroxysmal abdominal pain
- Vomiting (often bilious)
- "Currant jelly" stool
- "Dance sign" (sausage-shaped mass)

**Pyloric Stenosis:**
- Non-bilious projectile vomiting
- 3-8 weeks old
- Dehydration
- Olive-shaped mass in RUQ

**Malrotation with Volvulus:**
- Bilious vomiting (neonate/infant)
- Abdominal distension
- Bloody stools
- Surgical emergency

**Testicular Torsion:**
- Acute scrotal pain
- High-riding testis
- Absent cremasteric reflex
- Time-critical (6-hour window)`,
      keyTerms: [
        { term: 'fontanelle', definition: 'Soft spot on baby\'s skull where bones have not yet fused', pronunciation: 'fon-tah-NEL' },
        { term: 'meningismus', definition: 'Signs of irritation of meninges; neck stiffness', pronunciation: 'men-in-JIZ-mus' },
        { term: 'intussusception', definition: 'Telescoping of one portion of intestine into another', pronunciation: 'in-tuh-suh-SEP-shun' },
        { term: 'capillary refill', definition: 'Time for color to return after pressing on skin; assesses perfusion' },
        { term: 'cremasteric reflex', definition: 'Elevation of testis with stimulation of inner thigh; lost in torsion' },
      ],
      analogies: [
        'Children are like small boats - they can weather storms better than expected but can capsize suddenly without warning when they reach their limit.',
        'Pediatric vital signs are like a car\'s tachometer - what is normal depends entirely on the age (engine size) of the child.',
      ],
      examples: [
        'A 6-week-old with projectile vomiting after every feed and weight loss has red flags for pyloric stenosis.',
        'An infant with bilious vomiting and abdominal distension has red flags for malrotation with volvulus, a surgical emergency.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pediatric red flags represent clinical indicators of serious childhood illness requiring systematic assessment using age-appropriate parameters, recognition of unique pediatric disease presentations, and urgent intervention to prevent clinical decompensation.',
      explanation: `## Systematic Pediatric Assessment

### Pediatric Assessment Triangle (PAT)

Rapid visual assessment of:
1. **Appearance:** Tone, interactiveness, consolability, look/gaze, speech/cry
2. **Work of Breathing:** Retractions, positioning, audible sounds, respiratory rate
3. **Circulation to Skin:** Color, mottling, pallor, cyanosis

### Age-Specific Red Flags by System

**Neonates (0-28 days):**
- Any fever (>38C) - sepsis workup indicated
- Poor feeding, vomiting (especially bilious)
- Lethargy or irritability
- Respiratory distress
- Cyanosis
- Failure to pass meconium (>48 hours)
- Jaundice within first 24 hours
- Abdominal distension

**Infants (1-12 months):**
- Fever >39C
- Inconsolable crying
- Poor feeding
- Vomiting (projectile or bilious)
- Failure to thrive
- Seizures
- Bulging fontanelle
- Petechial/purpuric rash

**Toddlers (1-3 years):**
- Altered mental status
- Respiratory distress
- Dehydration
- Unexplained limp
- Foreign body aspiration/ingestion
- Toxic ingestion
- Burns
- Head injury

**Children (3-12 years):**
- Severe headache
- Altered mental status
- Respiratory distress
- Chest pain
- Severe abdominal pain
- Joint swelling with fever
- Unexplained bruising/bleeding

**Adolescents (12-18 years):**
- Chest pain
- Syncope
- Mental health crisis
- Substance use
- Eating disorders
- Pregnancy complications
- Suicidal ideation

### Serious Bacterial Infection (SBI) Risk Stratification

**Infants 0-60 Days:**

**Low Risk (can consider outpatient):**
- Previously healthy
- Normal exam
- Normal labs (WBC 5-15K, normal UA, normal procalcitonin/CRP)
- Reliable follow-up
- Appropriate parental understanding

**High Risk (admit and treat):**
- Ill appearance
- Fever >38.5C
- Abnormal labs
- Invasive bacterial infection risk

**The Step-by-Step Approach:**
- 0-21 days: Full sepsis workup (blood, urine, CSF cultures), empiric antibiotics
- 22-28 days: Selective workup based on appearance and labs
- 29-60 days: Selective workup, consider outpatient with close follow-up if low risk

### Specific Pediatric Conditions

**Febrile Infant Evaluation:**

**Urinary Tract Infection:**
- Most common SBI in febrile infants
- Urinalysis and culture required
- Treat if positive

**Bacteremia:**
- Blood culture essential
- Pneumococcus historically common
- Empiric ceftriaxone if ill-appearing

**Meningitis:**
- LP indicated if ill-appearing
- Consider if high-risk or abnormal neuro exam
- Empiric antibiotics if delayed LP

**Pneumonia:**
- CXR if respiratory symptoms
- Clinical diagnosis often sufficient

**Meningococcemia:**
- Rapid progression
- Petechial/purpuric rash
- Multi-organ failure
- Vaccine preventable

**Kawasaki Disease:**
- Fever >5 days plus 4/5 criteria:
  - Conjunctivitis
  - Oral changes (strawberry tongue)
  - Rash
  - Extremity changes
  - Cervical lymphadenopathy
- IVIG and aspirin
- Risk: Coronary artery aneurysms

**Anaphylaxis:**
- Acute onset, skin/mucosal involvement
- Plus respiratory compromise or hypotension
- Epinephrine first-line
- Adjuncts: H1/H2 blockers, steroids

### Pediatric Pain Assessment

**Preverbal Children:**
- FLACC scale (Face, Legs, Activity, Cry, Consolability)
- CRIES scale (neonates)

**Verbal Children:**
- Faces pain scale
- Numeric rating scale (>7 years)

**Key Principle:**
- Undertreatment of pain is common
- Weight-based dosing essential
- Reassessment mandatory`,
      keyTerms: [
        { term: 'procalcitonin', definition: 'Biomarker that rises with bacterial infection; helps differentiate from viral illness' },
        { term: 'meconium', definition: 'First stool of newborn; green-black, tarry' },
        { term: 'Kawasaki disease', definition: 'Systemic vasculitis of childhood causing coronary artery aneurysms' },
        { term: 'meningococcemia', definition: 'Severe bloodstream infection with Neisseria meningitidis', pronunciation: 'muh-ning-goh-kok-SEE-mee-uh' },
        { term: 'anaphylaxis', definition: 'Severe, life-threatening allergic reaction', pronunciation: 'an-uh-fuh-LAK-sis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced pediatric emergency care requires sophisticated interpretation of age-specific vital signs, recognition of atypical presentations of serious illness, and evidence-based approaches to risk stratification for serious bacterial infection.',
      explanation: `## Advanced Pediatric Emergency Assessment

### Pediatric Shock Recognition

**Compensated Shock:**
- Tachycardia (earliest sign)
- Tachypnea
- Normal blood pressure
- Narrow pulse pressure
- Delayed capillary refill
- Cool extremities

**Decompensated Shock:**
- Hypotension (late sign!)
- Altered mental status
- Weak/absent pulses
- Anuria
- Significant acidosis

**Pediatric Hypotension Definition:**

| Age | Hypotension (SBP) |
|-----|------------------|
| 0-1 month | <60 mmHg |
| 1-12 months | <70 mmHg |
| 1-10 years | <70 + (2 x age) mmHg |
| >10 years | <90 mmHg |

### Fluid Resuscitation

**Septic Shock:**
- 20 mL/kg bolus (isotonic crystalloid)
- Reassess after each bolus
- Up to 60 mL/kg in first hour
- Watch for fluid overload

**Hemorrhagic Shock:**
- 10-20 mL/kg blood products
- Massive transfusion protocol
- Damage control resuscitation

### Specific Emergencies

**Pediatric Airway Management:**

**Anatomical Differences:**
- Large tongue, small mandible
- High, anterior larynx (C3-4 vs C5-6 in adults)
- Large occiput (sniffing position natural)
- Cricoid ring narrowest portion

**Equipment Selection:**
- Blade: Miller (straight) for infants
- Tube size: (Age/4) + 4 (uncuffed <8 years)
- Depth: (Age/2) + 12 or tube size x 3

**Bronchiolitis:**
- RSV most common cause
- Peak age 2-6 months
- Supportive care
- Apnea risk in young infants
- ICU criteria: Apnea, respiratory failure, poor feeding

**Croup:**
- Parainfluenza virus
- Barking cough, stridor
- Mild-moderate: Dexamethasone
- Severe: Epinephrine (racemic or IM)

**Epiglottitis:**
- Haemophilus influenzae type b (Hib)
- Hib vaccine decreased incidence
- "Tripod" positioning
- Drooling, dysphagia
- Do NOT examine throat!
- Emergency airway management

**Foreign Body Aspiration:**
- Acute choking episode
- Unilateral wheeze or decreased breath sounds
- CXR may be normal
- Bronchoscopy for removal
- "Café coronary" - silent aspiration

### Pediatric Trauma

**Primary Survey (ABCDE):**

**Airway:**
- C-spine immobilization
- Jaw thrust (avoid head tilt in trauma)
- Clear secretions

**Breathing:**
- Ventilation
- Oxygenation
- Tension pneumothorax decompression

**Circulation:**
- Hemorrhage control
- Vascular access (IO if needed)
- Fluid resuscitation

**Disability:**
- GCS (pediatric version)
- Pupils
- Blood glucose

**Exposure:**
- Remove clothing
- Prevent hypothermia

**Pediatric GCS Modifications:**
- Verbal response adjusted for age
- Infant cry scored

**Trauma Centers:**
- Pediatric-capable vs. pediatric-designated
- Volume-outcome relationship
- Transfer protocols

### Pediatric Pharmacology

**Weight-Based Dosing:**
- Essential for safety
- Double-check calculations
- Broselow tape for emergency dosing

**Pharmacokinetic Differences:**
- Higher volume of distribution
- Different metabolism
- Renal function maturation

**Common Emergency Medications:**

| Medication | Dose | Indication |
|------------|------|------------|
| Epinephrine (IM) | 0.01 mg/kg (0.01 mL/kg of 1:1000) | Anaphylaxis |
| Adenosine | 0.1 mg/kg IV (max 6mg) | SVT |
| Adenosine (2nd) | 0.2 mg/kg IV (max 12mg) | SVT |
| Amiodarone | 5 mg/kg IV/IO | VT/VF |
| Atropine | 0.02 mg/kg (min 0.1mg) | Bradycardia |
| Dextrose | D10 5 mL/kg | Hypoglycemia |
| Midazolam | 0.1 mg/kg IN/IV | Seizure |

### Child Abuse Recognition

**Red Flags:**
- Delayed presentation
- Inconsistent history
- Pattern injuries
- Bruises in non-ambulatory infants
- Burns (stocking/glove, immersion)
- Fractures (metaphyseal, rib, scapular)
- Head injury (shaken baby)

**Mandated Reporting:**
- Legal obligation
- Report suspicion, not proof
- Documentation critical`,
      keyTerms: [
        { term: 'Broselow tape', definition: 'Color-coded tape measuring length to estimate weight and emergency drug doses' },
        { term: 'intussusception', definition: 'Telescoping of intestine; common cause of obstruction in infants' },
        { term: 'pyloric stenosis', definition: 'Hypertrophy of pylorus causing gastric outlet obstruction' },
        { term: 'croup', definition: 'Viral upper airway infection causing subglottic swelling', pronunciation: 'kroop' },
        { term: 'RSV', definition: 'Respiratory Syncytial Virus; common cause of bronchiolitis' },
      ],
      clinicalNotes: 'Pediatric patients decompensate later but faster than adults. Tachycardia is the earliest sign of shock in children; hypotension is a pre-arrest sign. Maintain a high index of suspicion for serious bacterial infection in febrile young infants.',
    },
    5: {
      level: 5,
      summary: 'Expert-level pediatric emergency care encompasses family-centered care, pediatric-specific procedures, disaster preparedness for children, quality improvement, and advocacy for pediatric emergency systems.',
      explanation: `## Expert-Level Pediatric Emergency Care

### Family-Centered Care

**Communication:**
- Age-appropriate explanations
- Parental involvement
- Cultural sensitivity
- Interpreter services
- Shared decision-making

**Pain Management:**
- Developmentally appropriate
- Non-pharmacologic: Distraction, positioning
- Pharmacologic: Weight-based dosing
- Procedural sedation protocols

**Procedural Support:**
- Child life specialists
- Comfort positioning
- Topical anesthetics
- Anxiolysis when appropriate

### Pediatric-Specific Procedures

**Intraosseous Access:**
- Indications: Failed IV access, cardiac arrest, shock
- Sites: Proximal tibia, distal tibia, proximal humerus
- All medications/fluids can be given IO
- Complications: Compartment syndrome, osteomyelitis (rare)

**Lumbar Puncture:**
- Position: Lateral decubitus or sitting
- Interspinous space: L3-L4 or L4-L5
- Opening pressure measurement
- Traumatic tap interpretation

**Thoracentesis/Chest Tube:**
- Landmarks different in children
- Tube size: (Age/4) + 4 (French)
- Pigtail catheters for simple effusions
- Sedation/analgesia essential

**Fracture Management:**
- Growth plate injuries (Salter-Harris)
- Remodeling potential
- Reduction techniques
- Casting considerations

### Pediatric Disaster Preparedness

**Unique Considerations:**
- Dosing calculations under stress
- Different injury patterns
- Psychological impact
- Family reunification
- Decontamination

**Surge Capacity:**
- Pediatric-specific supplies
- Age-appropriate equipment
- Space for families
- Child life support
- Mental health resources

**Family Reunification:**
- Tracking systems
- Photo identification
- Communication with families
- Social work involvement

### Quality and Safety

**Pediatric Readiness:**
- Equipment checklists
- Weight-based dosing systems
- Pediatric-specific protocols
- Continuing education
- Transfer agreements

**Medication Safety:**
- Double-check high-risk medications
- Milliliter-only dosing
- Computerized physician order entry
- Smart pump technology

**Patient Safety Indicators:**
- Preventable adverse events
- Medication errors
- Healthcare-associated infections
- Falls
- Unplanned readmissions

### Research and Advocacy

**Evidence Gaps:**
- Many medications not studied in children
- Off-label use common
- Pediatric trial networks (PEDSnet)

**Advocacy Priorities:**
- Injury prevention
- Vaccine education
- Mental health access
- Health disparities
- Emergency medical services for children

### Education and Training

**Pediatric Emergency Medicine Fellowship:**
- 3-year training
- Clinical, research, administrative
- Board certification

**Simulation Training:**
- High-fidelity pediatric manikins
- Team training
- Crisis resource management
- Procedural skills

**Maintenance of Certification:**
- Continuing medical education
- Quality improvement projects
- Assessment programs

### Ethical Considerations

**Consent and Assent:**
- Parental permission required
- Child assent when appropriate
- Emergencies: Presumed consent
- Adolescent rights (varying by state)

**End-of-Life Care:**
- Palliative care involvement
- Hospice services
- Family support
- Bereavement resources

**Resource Allocation:**
- Disaster triage
- Organ transplantation
- Research ethics
- Healthcare disparities

### Future Directions

**Precision Medicine:**
- Pharmacogenomics
- Biomarkers for sepsis
- Personalized risk stratification

**Technology:**
- Telemedicine for rural areas
- Artificial intelligence for diagnosis
- Wearable monitors
- Mobile health applications

**Systems of Care:**
- Regionalized pediatric emergency care
- Transport optimization
- Quality collaboratives
- Global health initiatives`,
      keyTerms: [
        { term: 'family-centered care', definition: 'Partnership approach recognizing family as constant in child\'s life' },
        { term: 'child life specialist', definition: 'Professional who helps children cope with medical experiences' },
        { term: 'procedural sedation', definition: 'Administration of sedatives/analgesics for painful procedures' },
        { term: 'Salter-Harris', definition: 'Classification system for growth plate fractures' },
        { term: 'surge capacity', definition: 'Ability to manage sudden increase in patient volume' },
      ],
      clinicalNotes: `Expert pediatric emergency care requires:
1. Age-specific knowledge and skills
2. Family-centered approach
3. Recognition of subtle presentations
4. Appropriate procedural expertise
5. Quality and safety focus
6. Advocacy for children\'s health needs

Children are not small adults - their unique physiology, developmental needs, and disease presentations require specialized expertise and systems of care.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'pals-guidelines-2020',
      type: 'article',
      title: 'Pediatric Advanced Life Support Guidelines',
      authors: ['American Heart Association'],
      source: 'Circulation',
    },
    {
      id: 'pecarn-febrile-infant',
      type: 'article',
      title: 'Clinical Prediction Rule for Serious Bacterial Infections in Febrile Infants',
      authors: ['Kuppermann N', 'et al.'],
      source: 'Lancet',
    },
    {
      id: 'pediatric-readiness',
      type: 'article',
      title: 'Guidelines for Care of Children in the Emergency Department',
      authors: ['American Academy of Pediatrics'],
      source: 'Pediatrics',
    },
  ],

  crossReferences: [
    { targetId: 'chest-pain-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Chest Pain Red Flags' },
    { targetId: 'neurological-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Neurological Red Flags' },
    { targetId: 'abdominal-red-flags', targetType: 'concept', relationship: 'sibling', label: 'Abdominal Red Flags' },
    { targetId: 'psychiatric-emergencies', targetType: 'concept', relationship: 'related', label: 'Psychiatric Emergencies' },
  ],

  tags: {
    systems: ['general'],
    topics: ['emergency-medicine', 'pediatrics', 'critical-care'],
    keywords: ['pediatrics', 'children', 'red flags', 'emergency', 'fever', 'sepsis', 'dehydration'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pediatricRedFlagsContent;
