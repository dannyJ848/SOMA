/**
 * Secondary Survey - Comprehensive Trauma Assessment
 *
 * Head-to-toe evaluation performed after the primary survey stabilizes
 * life-threatening injuries. Includes detailed physical exam, history, and diagnostics.
 */

import { EducationalContent } from '../../types';

export const secondarySurvey: EducationalContent = {
  id: 'emergency-trauma-secondary-survey',
  type: 'topic',
  name: 'Secondary Survey',
  nameEs: 'Evaluacion Secundaria',
  alternateNames: ['Head-to-Toe Assessment', 'Secondary Trauma Assessment', 'Detailed Trauma Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'The secondary survey is the detailed head-to-toe exam doctors do after fixing the most dangerous injuries. It helps find problems that were not obvious at first.',
      explanation: `## What Is the Secondary Survey?

After the trauma team finishes the primary survey (the quick A-B-C-D-E check), they do a much more detailed exam called the **secondary survey**. This is a complete check of the entire body from head to toe.

**When does it happen?**
- Only AFTER all life-threatening problems from the primary survey are treated
- The patient must be stable enough for a thorough exam
- If the patient becomes unstable again, go back to the primary survey

## Head-to-Toe Exam

**Head and Face:**
- Check the scalp for cuts or bumps
- Look at the eyes, ears, nose, and mouth
- Feel the facial bones for fractures

**Neck:**
- Look for swelling, bruising, or wounds
- Check if the trachea (windpipe) is centered
- Feel the spine for tenderness

**Chest:**
- Listen to the heart and lungs again more carefully
- Feel for broken ribs
- Check for pain with breathing

**Abdomen:**
- Press gently on the belly to check for pain
- Look for bruising or swelling
- Listen for bowel sounds

**Pelvis and Limbs:**
- Check for broken bones
- Feel pulses in the arms and legs
- Check for feeling and movement in all limbs

**Back:**
- Carefully roll the patient to one side (log-roll)
- Check the entire spine
- Look for wounds or bruising

## Getting the Full Story

Doctors also ask (or find out from family/paramedics):
- **What happened?** (How the injury occurred)
- **Medical history** (allergies, medications, past surgeries)
- **When did they last eat?** (important if surgery is needed)`,
      keyTerms: [
        { term: 'secondary survey', definition: 'A detailed head-to-toe exam done after the primary survey to find all injuries' },
        { term: 'log-roll', definition: 'A special way of rolling a patient onto their side while keeping the spine straight and protected' },
        { term: 'palpation', definition: 'Pressing gently on the body to check for pain, swelling, or broken bones' },
        { term: 'stable', definition: 'When a patient is not in immediate danger - their breathing, heart, and blood pressure are okay' },
      ],
      analogies: [
        'If the primary survey is like checking for fires in a building, the secondary survey is like a complete home inspection afterward.',
        'The secondary survey is like going through every room in a house after making sure the house is not about to collapse.',
        'Think of it as reading a book carefully after skimming the important chapters first.',
      ],
      examples: [
        'After stabilizing a car accident victim, the doctor discovers a broken wrist and a small cut on the back during the secondary survey that were missed in the rush to fix more serious injuries.',
        'A patient who fell off a ladder had his broken leg fixed first. During the secondary survey, the doctor finds tenderness over his left kidney area and orders a CT scan.',
      ],
      patientCounselingPoints: [
        'The secondary survey may take longer than the initial assessment - this is thorough, not slow',
        'You may be asked to move certain body parts to check for injuries',
        'Tell the doctor about ALL pain, even areas that seem minor compared to the main injury',
        'CT scans and X-rays are often ordered during the secondary survey',
      ],
    },

    2: {
      level: 2,
      summary: 'The secondary survey is a systematic head-to-toe examination with complete history and targeted imaging, performed only after primary survey stabilization of life threats.',
      explanation: `## Secondary Survey Principles

**Prerequisites:**
- Primary survey complete with life threats addressed
- Patient hemodynamically stable (or being stabilized)
- Airway secured if needed
- Resuscitation in progress

**If patient destabilizes: Return to primary survey immediately**

## Complete History (AMPLE)

| Letter | Meaning | Why It Matters |
|--------|---------|----------------|
| A | Allergies | Drug reactions, latex allergy |
| M | Medications | Blood thinners, insulin, steroids |
| P | Past medical/surgical history | Prior surgeries, implants, conditions |
| L | Last meal | Aspiration risk if surgery needed |
| E | Events/Environment | Mechanism of injury details |

## Head-to-Toe Examination

### Head
- Scalp lacerations, hematomas (feel entire scalp)
- Skull depression or step-offs
- Battle sign (bruising behind ear = basilar skull fracture, may take hours)
- Raccoon eyes (periorbital bruising = anterior fossa fracture)
- CSF leak from nose (rhinorrhea) or ear (otorrhea)

### Eyes
- Visual acuity (can they see?)
- Pupil size and reactivity
- Eye movements (extraocular muscles)
- Foreign bodies, hyphema (blood in anterior chamber)

### Face
- Stability of midface (LeFort fractures)
- Dental exam (loose or missing teeth)
- Mandible range of motion
- Nasal septum for septal hematoma

### Neck
- Cervical spine tenderness
- Tracheal position (midline?)
- Jugular venous distension
- Carotid pulses
- Subcutaneous emphysema

### Chest
- Rib tenderness, crepitus
- Sternal tenderness
- Heart sounds (muffled = tamponade?)
- Breath sounds in all fields
- Chest wall stability

### Abdomen
- Inspection: distension, bruising, seatbelt sign
- Auscultation: bowel sounds
- Palpation: tenderness, guarding, rigidity
- Special signs: Kehr sign (left shoulder pain = splenic injury)

### Pelvis
- Gentle compression (once only - do not repeat)
- Urethral meatus for blood (before catheter placement)
- Perineal hematoma
- Rectal exam: tone, blood, prostate position

### Extremities
- Deformity, swelling, ecchymosis
- Range of motion
- Distal pulses, sensation, motor function
- Compartment syndrome signs: pain with passive stretch, tense compartment

### Back (with log-roll)
- Spinal tenderness, step-offs, deformity
- Flank bruising (retroperitoneal hemorrhage)
- Posterior wounds
- Rectal tone (spinal cord injury assessment)

### Neurologic
- Complete GCS reassessment
- Cranial nerves
- Motor and sensory exam of all extremities
- Reflexes
- Peripheral nerve injuries

## Imaging in the Secondary Survey

**CT scan (whole-body/pan-scan):**
- Head: Intracranial hemorrhage, skull fractures
- C-spine: Fractures, ligamentous injury
- Chest: Aortic injury, pulmonary contusion
- Abdomen/pelvis: Solid organ injury, free fluid, fractures

**X-rays:** Extremity fractures, chest (if not already done)

**Specific imaging:** CT angiography for vascular injury, cystogram for bladder injury`,
      keyTerms: [
        { term: 'Battle sign', definition: 'Bruising behind the ear (mastoid area) that suggests a basilar skull fracture; may take 12-24 hours to appear' },
        { term: 'raccoon eyes', definition: 'Bruising around both eyes suggesting anterior basilar skull fracture' },
        { term: 'Kehr sign', definition: 'Left shoulder pain from diaphragmatic irritation, suggesting splenic injury or blood in the abdomen' },
        { term: 'compartment syndrome', definition: 'Dangerous pressure buildup in a muscle compartment that can cut off blood flow and damage nerves' },
        { term: 'pan-scan', definition: 'CT scan of the head, neck, chest, abdomen, and pelvis used in significant trauma' },
        { term: 'CSF leak', definition: 'Leaking of cerebrospinal fluid from the nose or ear, indicating a skull base fracture' },
      ],
      analogies: [
        'The secondary survey is like a detective investigating a crime scene after the emergency responders have secured the area.',
        'Pan-scan CT is like using a photocopier to scan the entire body for hidden injuries you cannot feel from the outside.',
        'Compartment syndrome is like swelling inside a tight sock - the pressure builds up with nowhere to go.',
      ],
      examples: [
        'A 22-year-old in an MVC has primary survey completed. Secondary survey reveals Battle sign behind right ear, suggesting basilar skull fracture. CT head confirms temporal bone fracture.',
        'A 40-year-old fall victim had a broken femur splinted. Secondary survey finds left upper quadrant tenderness with Kehr sign. CT shows grade III splenic laceration.',
      ],
      patientCounselingPoints: [
        'Multiple imaging studies are often necessary to find all injuries',
        'Some injuries may not be found until follow-up visits as swelling and bruising develop',
        'Report any new or worsening pain after the initial evaluation',
      ],
    },

    3: {
      level: 3,
      summary: 'The secondary survey provides comprehensive injury identification through systematic examination, AMPLE history, and targeted diagnostics, guiding definitive management and disposition.',
      explanation: `## Secondary Survey Framework

### Timing and Decision Points

- Begins only after primary survey completion with hemodynamic stability
- May be interrupted for OR if instability develops
- "Pan-scan" CT increasingly replaces portions of physical exam in major trauma
- Tertiary survey (repeat exam at 24h) catches 10-15% of initially missed injuries

### Mechanism-Based Injury Patterns

**Motor vehicle collision:**
- Frontal: C-spine, sternal fracture, cardiac contusion, knee/femur/hip
- Lateral: C-spine, lateral rib fractures, splenic/hepatic injury, pelvic fracture
- Rear: C-spine hyperextension
- Rollover: Unpredictable; pan-scan recommended
- Ejection: Highest mortality; assume multisystem injury

**Falls:**
- Height determines severity (>3x body height = significant)
- Calcaneal fractures associated with lumbar burst fractures
- Wrist fractures associated with concurrent injuries

**Penetrating trauma:**
- Track the trajectory mentally
- Gunshots: Assume cavitation and energy transfer
- Stab wounds: Depth determines organ involvement

### Focused Examination Details

**Cervical spine clearance (NEXUS criteria):**
1. No midline tenderness
2. No focal neurologic deficit
3. Normal alertness
4. No intoxication
5. No distracting injury
All five met = can clear clinically without imaging

**Canadian C-Spine Rule:**
- High-risk factors mandate imaging (age >65, dangerous mechanism, paresthesias)
- Low-risk factors allow ROM assessment
- If able to actively rotate 45 degrees bilaterally = clear

**Abdominal assessment:**
- Serial exams more reliable than single exam
- Peritoneal signs: Involuntary guarding, rebound tenderness, rigidity
- Seatbelt sign: 8x increased risk of bowel injury
- CT with IV contrast is standard; oral contrast rarely needed acutely
- Delayed bowel injury (24-72h) may present after initial negative imaging

**Solid organ injury grading (AAST):**

| Grade | Liver | Spleen | Kidney |
|-------|-------|--------|--------|
| I | Subcapsular <10% | Subcapsular <10% | Subcapsular hematoma |
| II | Laceration 1-3cm | Laceration 1-3cm | Laceration <1cm |
| III | Laceration >3cm | Laceration >3cm | Laceration >1cm |
| IV | 25-75% lobe disruption | Hilar vessel injury | Main renal vessel |
| V | >75% disruption | Shattered spleen | Shattered/avulsed kidney |

**Non-operative management (NOM):** Standard for most grades I-III solid organ injuries in hemodynamically stable patients. Higher grades require close monitoring and interventional radiology availability.

### Extremity Assessment

**Fracture assessment:** Neurovascular status before and after reduction. Open fractures require antibiotics within 1 hour and OR washout.

**Gustilo classification (open fractures):**
- Type I: Clean wound <1cm
- Type II: Wound 1-10cm, moderate contamination
- Type IIIA: Adequate soft tissue coverage
- Type IIIB: Requires flap coverage
- Type IIIC: Vascular injury requiring repair

**Compartment syndrome:**
- 6 P's: Pain (with passive stretch), Pressure, Paresthesias, Paralysis (late), Pulselessness (very late), Poikilothermia
- Diagnosis: Clinical + compartment pressure >30 mmHg or within 30 mmHg of diastolic (delta pressure)
- Treatment: Emergent fasciotomy

### Spinal Cord Injury Assessment

**ASIA Impairment Scale:**
- A: Complete (no motor/sensory below level)
- B: Sensory incomplete (sensation but no motor below)
- C: Motor incomplete (motor function <3/5 majority below)
- D: Motor incomplete (motor function >=3/5 majority below)
- E: Normal

**Neurogenic shock vs spinal shock:**
- Neurogenic: Loss of sympathetic tone, hypotension + bradycardia (treat with vasopressors)
- Spinal shock: Temporary loss of reflexes below injury level, may last days to weeks

### Tertiary Survey

- Repeat head-to-toe exam at 24 hours
- Review all imaging with radiology
- Catches 10-15% of missed injuries
- Especially important in intubated/obtunded patients`,
      keyTerms: [
        { term: 'tertiary survey', definition: 'Repeat head-to-toe exam at 24 hours to catch missed injuries; finds 10-15% additional injuries' },
        { term: 'NEXUS criteria', definition: 'Five clinical criteria for cervical spine clearance without imaging' },
        { term: 'Gustilo classification', definition: 'Grading system for open fractures based on wound size, contamination, and soft tissue injury' },
        { term: 'compartment syndrome', definition: 'Elevated pressure within a fascial compartment compromising perfusion; requires emergent fasciotomy' },
        { term: 'ASIA scale', definition: 'American Spinal Injury Association impairment scale grading spinal cord injury completeness' },
        { term: 'neurogenic shock', definition: 'Distributive shock from loss of sympathetic tone after spinal cord injury; hypotension with bradycardia' },
      ],
      analogies: [
        'The tertiary survey is like a final proofread of an important document - catching errors missed in the first two reviews.',
        'Non-operative management of solid organ injuries is like letting a bruise heal on its own rather than cutting it open.',
        'Compartment syndrome is like overfilling a water balloon inside a rigid box - the pressure has nowhere to go.',
      ],
      examples: [
        'Fall from height: Calcaneal fractures found bilaterally. Secondary survey includes lumbar spine X-ray revealing L1 burst fracture (associated injury pattern).',
        'MVC with seatbelt sign across abdomen. CT initially negative. Re-examined at 24h with increasing pain; repeat CT shows delayed small bowel perforation requiring surgery.',
      ],
      clinicalNotes: 'Never skip the tertiary survey - missed injuries are a leading cause of malpractice claims. Seatbelt sign = 8x bowel injury risk; consider repeat imaging if symptoms evolve. Compartment pressures: treat the patient, not the number - clinical exam is paramount. Open fractures need antibiotics within 1 hour (cefazolin +/- gentamicin for type III).',
    },

    4: {
      level: 4,
      summary: 'Advanced secondary survey integrates mechanism-specific injury prediction, evidence-based imaging protocols, organ injury scoring, and nuanced management algorithms for complex multitrauma patients.',
      explanation: `## Advanced Secondary Survey

### Evidence-Based Imaging Protocols

**Pan-scan CT controversy:**
- Liberal CT approach: Detects occult injuries in 38% of blunt trauma
- Selective CT approach: Reduces radiation, cost, and incidental findings
- Current evidence: Pan-scan associated with lower mortality in severe trauma (ISS >15)
- Pediatric considerations: PECARN criteria to limit unnecessary head CTs

**CT angiography indications:**
- Blunt cerebrovascular injury (BCVI): Modified Denver criteria
  - LeFort II/III fractures, cervical spine fractures (C1-C3, subluxation), skull base fractures through carotid canal
  - Screening: CT angiography of neck
  - Incidence: 1-2% of blunt trauma
  - Stroke risk without treatment: 20-50%
  - Treatment: Antiplatelet or anticoagulation

**Aortic injury (BTAI):**
- Mechanism: Rapid deceleration
- CXR: Widened mediastinum (>8cm), loss of aortic knob, apical cap
- CT angiography: Gold standard
- Grading: Intimal tear (Grade I) to rupture (Grade IV)
- Management: Grade I/II may be conservative with BP control; Grade III/IV require endovascular repair (TEVAR preferred)

### Complex Organ Injury Management

**Liver injury (non-operative management):**
- 80-90% managed non-operatively if hemodynamically stable
- Grade IV-V: Consider angioembolization for active extravasation
- Complications: Biloma, abscess, delayed hemorrhage
- Follow-up imaging: Controversial; symptom-based approach gaining favor

**Splenic injury management algorithm:**
- Hemodynamically stable: NOM with ICU monitoring
- Active extravasation on CT: Angioembolization (proximal vs distal)
- Failure of NOM: Splenectomy
- Post-splenectomy: Vaccination (pneumococcal, meningococcal, Haemophilus)
- OPSI risk: Overwhelming post-splenectomy infection (lifelong risk)

**Renal injury:**
- Grade I-III: NOM with monitoring
- Grade IV: Selective angioembolization for vascular injury
- Grade V: Consider nephrectomy vs repair based on stability
- Urinoma: Percutaneous drainage + ureteral stent

### Missed Injury Prevention

**High-risk patterns for missed injuries:**
- Obtunded/intubated patients: Cannot report symptoms
- Distracting injuries: Major fractures overshadow subtle findings
- Intoxication: Altered pain perception
- Pediatric patients: Difficulty with exam cooperation

**Most commonly missed injuries:**
1. Extremity fractures (most frequent)
2. Thoracolumbar spine fractures
3. Small pneumothorax
4. Hollow viscus injury (small bowel)
5. Tendon/ligament injuries

**Risk reduction strategies:**
- Mandatory tertiary survey protocols
- Standardized documentation checklists
- Repeat imaging for evolving symptoms
- Trauma registry tracking of missed injuries

### Damage Control Orthopedics (DCO)

**Concept:** Temporary skeletal stabilization followed by definitive fixation after physiologic optimization

**Indications:**
- Hemodynamically unstable with fractures
- Polytrauma with ISS >25
- Bilateral femur fractures
- Hypothermia, acidosis, coagulopathy

**Temporary stabilization:**
- External fixation for long bones and pelvis
- Traction for femur fractures
- Splinting for extremity fractures

**Definitive fixation:** When patient physiologically optimized (48-72 hours)
- Early total care (ETC) vs DCO: DCO reduces pulmonary complications in polytrauma

### Forensic Considerations

- Document all injuries with photographs
- Preserve clothing and belongings as evidence
- Chain of custody for specimens (blood alcohol, drug screen)
- Report gunshot wounds and suspected abuse per local laws
- Non-accidental trauma screening in pediatric patients`,
      keyTerms: [
        { term: 'BCVI', definition: 'Blunt Cerebrovascular Injury; carotid/vertebral artery injury from blunt trauma with 20-50% stroke risk if untreated' },
        { term: 'BTAI', definition: 'Blunt Thoracic Aortic Injury; deceleration mechanism, CT angiography diagnostic, TEVAR preferred repair' },
        { term: 'TEVAR', definition: 'Thoracic Endovascular Aortic Repair; minimally invasive treatment for aortic injury replacing open repair' },
        { term: 'damage control orthopedics', definition: 'Temporary fracture stabilization with external fixation, followed by definitive fixation after physiologic optimization' },
        { term: 'OPSI', definition: 'Overwhelming Post-Splenectomy Infection; lifelong risk requiring vaccination and patient education' },
        { term: 'PECARN', definition: 'Pediatric Emergency Care Applied Research Network; clinical decision rules for pediatric head CT' },
      ],
      analogies: [
        'Damage control orthopedics: put a temporary cast on to stabilize, then do the proper surgery when the body can handle it.',
        'BCVI screening: like checking the pipes in a wall after earthquake damage - invisible from outside but can cause major problems.',
        'TEVAR vs open repair: fixing a pipe from inside rather than tearing out the wall.',
      ],
      examples: [
        'High-speed MVC, seatbelt sign, initial CT negative. 48h: worsening pain, fever, WBC elevation. Repeat CT: free air consistent with small bowel perforation. Exploratory laparotomy confirms mesenteric avulsion with bowel ischemia.',
        'Fall from height: bilateral calcaneal fractures, L1 burst fracture, grade III splenic laceration. DCO approach: external fixation of calcanei, TLSO brace, splenic angioembolization. Definitive calcaneal ORIF at day 5.',
      ],
      clinicalNotes: 'Pan-scan CT justified for ISS >15 or significant mechanism. BCVI screening saves lives - stroke risk is 20-50% untreated. Hollow viscus injury has delayed presentation; maintain high suspicion with seatbelt sign. DCO reduces ARDS/MOF in polytrauma compared to early definitive fixation. Tertiary survey is a patient safety requirement, not optional.',
    },

    5: {
      level: 5,
      summary: 'Expert secondary survey leverages advanced imaging protocols, AI-assisted injury detection, precision organ injury management, and system-wide quality metrics to minimize missed injuries and optimize outcomes.',
      explanation: `## Expert-Level Secondary Survey

### Advanced Imaging Interpretation

**Whole-body CT (WBCT) evidence:**
- REACT-2 trial: Immediate WBCT vs conventional imaging in severe trauma
- No overall mortality difference, but faster diagnosis and treatment decisions
- Subgroup benefit in patients with TBI component
- Radiation considerations: 20-40 mSv per WBCT; ALARA principle
- Dual-energy CT: Improved hemorrhage detection, reduced artifacts

**MRI in acute trauma:**
- Spinal cord injury: MRI gold standard for cord compression, hemorrhage
- SCIWORA (Spinal Cord Injury Without Radiographic Abnormality): MRI essential
- Ligamentous cervical injury: MRI if CT negative but high suspicion
- Timing: Within 72 hours for prognostic value in SCI

**AI-assisted imaging:**
- Automated fracture detection (emerging)
- Hemorrhage quantification algorithms
- Midline shift measurement
- Integration with clinical decision support

### Precision Organ Injury Management

**AAST 2018 revised grading:**
- Incorporates vascular injury (active bleeding, pseudoaneurysm, AV fistula)
- Vascular component changes grade and management
- CT arterial phase with delayed phase for solid organs

**Splenic management evolution:**
- Proximal splenic artery embolization (SAE): Reduces NOM failure for grades III-V
- Contrast blush on CT: 70-80% failure of NOM without angioembolization
- Immunologic considerations: NOM preserves splenic function
- Post-SAE: Still immunocompetent (unlike splenectomy)

**Hepatic injury updates:**
- High-grade (IV-V): Angioembolization + NOM success rate 80-90%
- Damage control perihepatic packing if angioembolization fails
- Hepatic vein/IVC injury: Highest mortality, consider atriocaval shunt
- Delayed complications: Biliary fistula (ERCP/percutaneous drainage)

### Hollow Viscus Injury Detection

**Challenge:** 5-15% of blunt abdominal trauma; often delayed diagnosis

**CT findings (sensitivity 90-95%):**
- Free air (pneumoperitoneum)
- Bowel wall thickening
- Mesenteric stranding
- Free fluid without solid organ injury

**Serial exam protocol:**
- Repeat abdominal exam q4-6 hours for 24 hours
- WBC trend, lactate trend
- Low threshold for repeat CT at 6-8 hours if clinical concern

### Special Considerations

**Occult pneumothorax:**
- Detected on CT but not CXR in 2-10% of trauma
- Small (<1cm) in ventilated patients: 6% progression rate
- Management: Observation vs chest tube based on size and ventilation status
- If positive pressure ventilation: Lower threshold for tube thoracostomy

**Blunt cardiac injury (BCI):**
- Spectrum: Commotio cordis to cardiac rupture
- Screening: ECG + troponin
- Significant if: Arrhythmia, troponin elevation, wall motion abnormality
- Echo: For hemodynamic instability or significant ECG/troponin abnormality
- Monitoring: 24-48 hours telemetry if positive screening

### Quality Metrics and Systems

**Missed injury tracking:**
- Definition: Injury discovered after initial assessment completion
- Rate: 1.3-39% depending on definition and population
- Clinically significant missed injuries: 1-5%
- Most impactful: Cervical spine fractures, small bowel injury

**Process improvement:**
- Standardized secondary survey checklists
- Mandatory tertiary survey at 24 hours
- Radiology over-read within 12 hours
- Trauma case review for all missed injuries

**Outcome measures:**
- Time to diagnosis of all injuries
- Missed injury rate with severity classification
- Unplanned return to OR rate
- Length of stay and complication rates`,
      keyTerms: [
        { term: 'SCIWORA', definition: 'Spinal Cord Injury Without Radiographic Abnormality; requires MRI diagnosis, more common in pediatric patients' },
        { term: 'REACT-2', definition: 'Trial comparing immediate whole-body CT vs conventional imaging in trauma; showed faster diagnosis but no overall mortality benefit' },
        { term: 'splenic artery embolization', definition: 'Endovascular technique to reduce bleeding from splenic injury while preserving splenic immunologic function' },
        { term: 'ALARA', definition: 'As Low As Reasonably Achievable; radiation safety principle applied to trauma CT decisions' },
        { term: 'blunt cardiac injury', definition: 'Spectrum from contusion to rupture; screened with ECG and troponin' },
      ],
      clinicalNotes: 'WBCT justified in severe trauma but apply ALARA. AI-assisted imaging is emerging but not yet replacing clinical judgment. Contrast blush = high NOM failure; angioembolize. Hollow viscus injury: serial exams and low threshold for repeat CT. Missed injury is a quality metric - mandatory tertiary survey and radiology over-read reduce rates. SCIWORA requires MRI; normal CT does not exclude cord injury.',
    },
  },

  media: [
    {
      id: 'secondary-survey-algorithm',
      type: 'diagram',
      filename: 'secondary-survey-head-to-toe.svg',
      title: 'Secondary Survey Algorithm',
      description: 'Head-to-toe examination sequence',
    },
    {
      id: 'organ-injury-grading',
      type: 'diagram',
      filename: 'aast-organ-injury-scale.svg',
      title: 'AAST Organ Injury Scale',
      description: 'Grading system for solid organ injuries',
    },
  ],

  citations: [
    {
      id: 'atls-secondary',
      type: 'textbook',
      title: 'ATLS Student Course Manual, 10th Edition - Secondary Survey Chapter',
      authors: ['ACS Committee on Trauma'],
      source: 'American College of Surgeons',
      accessedDate: '2026-01-30',
    },
    {
      id: 'react-2-trial',
      type: 'article',
      title: 'Immediate Total-Body CT Scanning Versus Conventional Imaging',
      authors: ['Sierink JC', 'et al.'],
      source: 'Lancet',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-trauma-primary-survey', targetType: 'topic', relationship: 'sibling', label: 'Primary Survey' },
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'nervous', 'musculoskeletal', 'gastrointestinal'],
    topics: ['emergency medicine', 'trauma', 'surgery', 'radiology'],
    keywords: ['secondary survey', 'head-to-toe', 'ATLS', 'tertiary survey', 'missed injuries', 'organ injury'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'surgery'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default secondarySurvey;
