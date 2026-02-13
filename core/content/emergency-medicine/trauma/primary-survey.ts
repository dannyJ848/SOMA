/**
 * Primary Survey (ABCDE) - Trauma Assessment
 *
 * Comprehensive content on the systematic initial assessment of trauma patients
 * using the ABCDE approach: Airway, Breathing, Circulation, Disability, Exposure.
 */

import { EducationalContent } from '../../types';

export const primarySurvey: EducationalContent = {
  id: 'emergency-trauma-primary-survey',
  type: 'topic',
  name: 'Primary Survey (ABCDE)',
  nameEs: 'Evaluacion Primaria (ABCDE)',
  alternateNames: ['ABCDE Assessment', 'Initial Trauma Assessment', 'ATLS Primary Survey'],

  levels: {
    1: {
      level: 1,
      summary: 'The primary survey is the first check doctors do when someone is seriously hurt. They follow A-B-C-D-E to find life-threatening problems fast.',
      explanation: `## What Is a Primary Survey?

When someone is badly injured, doctors check for the most dangerous problems first using **ABCDE**:

**A - Airway:** Can the person breathe? Is anything blocking their throat?
- Doctors check if the person can talk
- They look for blood, broken teeth, or swelling blocking breathing
- They protect the neck in case it is injured

**B - Breathing:** Are the lungs working properly?
- Listen to both sides of the chest with a stethoscope
- Watch the chest rise and fall
- Check oxygen levels

**C - Circulation:** Is blood flowing properly?
- Check the pulse and blood pressure
- Look for heavy bleeding and try to stop it
- Feel if the skin is cold or clammy (a sign of blood loss)

**D - Disability:** Is the brain working?
- Check if the person is awake and alert
- Shine a light in the eyes to check the pupils
- Ask simple questions or check for movement

**E - Exposure:** What else could be wrong?
- Carefully remove clothing to look for hidden injuries
- Check the entire body, front and back
- Keep the person warm with blankets

## Why This Order Matters

- **If you can't breathe, nothing else matters** - airway comes first
- **Even if you can breathe, you need blood flow** - circulation is next
- **The brain needs both air and blood** - checked after A, B, and C are stable

Once the primary survey is done, doctors do a more detailed **secondary survey** to find other injuries.`,
      keyTerms: [
        { term: 'primary survey', definition: 'The first quick check of a trauma patient to find and treat life-threatening problems' },
        { term: 'airway', definition: 'The path air takes from your mouth and nose to your lungs' },
        { term: 'circulation', definition: 'The flow of blood through your body, pumped by your heart' },
        { term: 'disability', definition: 'In trauma medicine, this means checking how well the brain is working' },
        { term: 'exposure', definition: 'Removing clothing to look for hidden injuries on the whole body' },
      ],
      analogies: [
        'The primary survey is like a pilot checklist before takeoff - check the most important systems first.',
        'ABCDE is like reading a word letter by letter - you must go in order, and each letter matters.',
        'Think of the body like a house: first check if the doors are open (airway), then ventilation (breathing), then plumbing (circulation).',
      ],
      examples: [
        'A teenager in a car accident is brought to the ER. The team checks his airway first - he is talking, so air is getting through. They listen to lungs, check pulse, shine a light in his eyes, and look over his whole body.',
        'A worker falls from a height. Paramedics start A-B-C-D-E. He is not breathing well (B), so they give oxygen before moving to check circulation.',
      ],
      patientCounselingPoints: [
        'If you see someone seriously injured, call 911 immediately',
        'Do not move someone with a possible neck or back injury unless in immediate danger',
        'In the ER, the trauma team works quickly - this means they are being thorough',
      ],
    },

    2: {
      level: 2,
      summary: 'The ATLS primary survey is a systematic rapid assessment using the ABCDE framework to identify and immediately treat life-threatening injuries in trauma patients.',
      explanation: `## ATLS Primary Survey Overview

Advanced Trauma Life Support (ATLS) provides a standardized approach to trauma. The primary survey identifies and treats life-threatening conditions in priority order.

### A - Airway with Cervical Spine Protection
- **Assess:** Can the patient speak? Look for obstruction (blood, vomit, foreign bodies)
- **Maintain:** Jaw thrust (preferred in trauma) or chin lift
- **Protect:** Cervical spine immobilization until cleared
- **Definitive airway:** Intubation if patient cannot protect airway

### B - Breathing and Ventilation
- **Inspect:** Chest wall movement, symmetry, wounds
- **Auscultate:** Breath sounds bilaterally
- **Percuss:** Dull (hemothorax) vs hyperresonant (pneumothorax)

**Life-threatening conditions:**
| Condition | Signs | Treatment |
|-----------|-------|-----------|
| Tension pneumothorax | Absent breath sounds, tracheal deviation | Needle decompression |
| Open pneumothorax | Sucking chest wound | Three-sided dressing |
| Massive hemothorax | Dull percussion, shock | Chest tube |
| Flail chest | Paradoxical movement | Intubation if needed |

### C - Circulation with Hemorrhage Control
- **Assess:** Pulse, BP, skin color and temperature
- **Control bleeding:** Direct pressure, tourniquets
- **IV access:** Two large-bore (16-gauge) IVs
- **Fluids:** Warm crystalloid, then blood products

**Blood loss classes:**
| Class | Loss | HR | BP | Mental Status |
|-------|------|----|----|---------------|
| I | <15% | Normal | Normal | Normal |
| II | 15-30% | >100 | Normal | Anxious |
| III | 30-40% | >120 | Decreased | Confused |
| IV | >40% | >140 | Very low | Lethargic |

### D - Disability
- **GCS:** Eye (1-4) + Verbal (1-5) + Motor (1-6) = 3-15
- **Pupils:** Size, symmetry, reactivity
- GCS 8 or less = severe brain injury, intubate

### E - Exposure
- Remove all clothing, log-roll to inspect back
- Prevent hypothermia with warm blankets and fluids

## Adjuncts
- Pulse oximetry, cardiac monitor
- Urinary catheter, nasogastric tube
- Labs: Type and screen, CBC, metabolic panel, lactate
- FAST exam: Ultrasound for free fluid in abdomen and pericardium`,
      keyTerms: [
        { term: 'ATLS', definition: 'Advanced Trauma Life Support; standardized training for trauma management', pronunciation: 'A-T-L-S' },
        { term: 'Glasgow Coma Scale', definition: 'Scoring system (3-15) assessing consciousness via eye, verbal, and motor responses' },
        { term: 'tension pneumothorax', definition: 'Air trapped under pressure in the chest cavity, pushing heart and lungs to the other side' },
        { term: 'FAST exam', definition: 'Focused Assessment with Sonography for Trauma; ultrasound to detect internal bleeding' },
        { term: 'tourniquet', definition: 'A tight band placed around a limb to stop severe bleeding' },
      ],
      analogies: [
        'The primary survey is like firefighters handling the biggest fires first before checking smaller problems.',
        'GCS is like a report card for the brain - higher score means better function.',
        'The FAST exam is like a flashlight in a dark room - quickly shows where problems are.',
      ],
      examples: [
        'A 35-year-old motorcyclist: A: moaning (airway open). B: Decreased left breath sounds - hemothorax drained. C: HR 130, BP 85/60 - blood products started.',
        'Pedestrian hit by car: A: Gurgling, suctioned. B: Clear. C: Stable. D: GCS 8, intubated. E: Scalp laceration found on log-roll.',
      ],
      patientCounselingPoints: [
        'Trauma teams have specific roles for each member',
        'Cervical collars protect the spine until imaging clears it',
        'CT scans are commonly done after the initial assessment',
      ],
    },

    3: {
      level: 3,
      summary: 'The ATLS primary survey integrates rapid clinical assessment with targeted interventions, using the ABCDE paradigm with adjuncts including eFAST, imaging, and damage control resuscitation.',
      explanation: `## Systematic Primary Survey

### Pre-Hospital Handoff

**MIST** from EMS: Mechanism, Injuries, Signs, Treatment
**AMPLE** history: Allergies, Medications, Past history, Last meal, Events

### A - Airway with C-Spine Protection

**Assessment hierarchy:**
1. Speaking clearly = patent airway
2. Stridor/gurgling = compromised
3. Apnea/obtunded = at risk

**Difficult airway predictors:** LeFort fractures, expanding neck hematoma, laryngotracheal injury, inhalation burns

**Definitive airway indications:** GCS <=8, inability to maintain patency, need for ventilation

### B - Breathing

**Tension pneumothorax:** One-way valve mechanism, mediastinal shift. Clinical diagnosis - do NOT wait for X-ray. Needle decompression then chest tube.

**Massive hemothorax:** >1500 mL initial or >200 mL/hr. Thoracotomy if initial >1500 mL or ongoing >200 mL/hr for 2-4h.

**Flail chest:** >=3 consecutive ribs fractured in >=2 places. Underlying pulmonary contusion is the real problem.

### C - Circulation

**Damage Control Resuscitation:**
- Permissive hypotension: SBP 80-90 (NOT in TBI)
- Balanced transfusion: 1:1:1 RBC:FFP:platelets
- Limit crystalloid to avoid dilutional coagulopathy
- TXA 1g IV within 3 hours (CRASH-2)
- Early MTP activation

**Hemorrhage sources:** External, thorax, abdomen/pelvis, retroperitoneum, long bones (femur 1-1.5L per side)

**eFAST:** RUQ (Morrison pouch - most sensitive), LUQ, subxiphoid, suprapubic, bilateral anterior thorax

### D - Disability

**Herniation signs:** Fixed dilated pupil, Cushing triad (HTN, bradycardia, irregular respirations), posturing

**Immediate management:** HOB 30 degrees, brief hyperventilation (PaCO2 30-35), mannitol 1g/kg or hypertonic saline, emergent neurosurgery

### E - Exposure

**Lethal triad:** Hypothermia + acidosis + coagulopathy
- Active warming: Bair Hugger, warm fluids, warm environment
- Target temp >36 degrees C`,
      keyTerms: [
        { term: 'damage control resuscitation', definition: 'Strategy emphasizing permissive hypotension, balanced transfusion, and limiting crystalloid to prevent the lethal triad' },
        { term: 'massive transfusion protocol', definition: 'Rapid delivery of balanced blood products in 1:1:1 ratio for major hemorrhage' },
        { term: 'tranexamic acid', definition: 'Antifibrinolytic reducing mortality when given within 3 hours of traumatic hemorrhage', pronunciation: 'tran-ex-AM-ik' },
        { term: 'lethal triad', definition: 'Hypothermia, acidosis, and coagulopathy - self-perpetuating cycle leading to death' },
        { term: 'eFAST', definition: 'Extended FAST adding thoracic views for pneumothorax detection' },
      ],
      analogies: [
        'Damage control resuscitation: fix a sinking ship by plugging holes first, not pouring more water in.',
        'The lethal triad is a vicious cycle: cold blood does not clot, unclotted blood bleeds more, more bleeding cools further.',
      ],
      examples: [
        'Stabbing victim, BP 70/40, HR 140. Chest tube yields 1800 mL. MTP activated, TXA given. Emergent thoracotomy.',
        'Restrained driver, rollover MVC. GCS 6, intubated. Left pupil 6mm fixed. Mannitol given, CT shows epidural hematoma.',
      ],
      clinicalNotes: 'Penetrating trauma with instability goes directly to OR. Positive FAST + instability does not need CT. TXA after 3 hours may increase mortality. Permissive hypotension contraindicated in TBI (SBP >100).',
    },

    4: {
      level: 4,
      summary: 'Advanced primary survey integrates resuscitation physiology, damage control surgery, evidence-based transfusion, and POCUS-guided interventions.',
      explanation: `## Advanced Concepts

### Resuscitation Physiology

**Hemorrhagic shock:** Decreased preload, compensatory tachycardia/vasoconstriction, decompensation at 30-40% volume loss. Endotheliopathy of trauma causes glycocalyx degradation and auto-anticoagulation.

**Shock index (SI = HR/SBP):** Normal 0.5-0.7. SI >0.9: significant hemorrhage. SI >1.3: massive hemorrhage. More sensitive than vitals alone.

**Base deficit:** 0 to -2 normal, -2 to -6 mild (~10% mortality), -6 to -10 moderate (~25%), < -10 severe (~50%)

### Advanced Airway

**RSI in trauma:** Apneic oxygenation (NC 15 L/min), ketamine 1-2 mg/kg (hemodynamically favorable), succinylcholine 1.5 mg/kg or rocuronium 1.2 mg/kg. Video laryngoscopy preferred.

**Surgical airway:** Can't intubate, can't oxygenate. Cricothyrotomy: vertical skin incision, horizontal membrane incision, bougie, 6.0 tube. Contraindicated <12 years.

### Damage Control Surgery

**Principles:** Abbreviated surgery (hemorrhage/contamination control only), ICU resuscitation, planned return to OR.

**Indications:** pH <7.2, temp <35C, INR >1.5, base deficit < -15, >10u pRBC/24h, EBL >4L

### Advanced Hemorrhage

**REBOA:** Zone I (supraceliac) for abdominal hemorrhage, Zone III (infrarenal) for pelvic. Partial occlusion preferred. Bridge to definitive control.

**TEG/ROTEM:** R-time (factors), K/alpha (fibrinogen), MA (platelets), LY30 (fibrinolysis). Guides targeted product administration.

**Resuscitative thoracotomy:** Penetrating thoracic <15min, penetrating other <5min, blunt <10min (controversial). Release tamponade, control hemorrhage, cross-clamp aorta. Survival: penetrating cardiac 10-35%, blunt <2%.

### Neurologic Management

**ICP tiers:** Tier 0 (positioning, sedation), Tier 1 (CSF drainage, osmotherapy), Tier 2 (hyperventilation, CPP optimization), Tier 3 (craniectomy, barbiturate coma)

### Pelvic Trauma

**Young-Burgess:** LC (most common), APC (open book), VS (high mortality). Algorithm: binder, MTP, angioembolization (arterial) or preperitoneal packing (venous).`,
      keyTerms: [
        { term: 'REBOA', definition: 'Resuscitative Endovascular Balloon Occlusion of Aorta; temporary occlusion for non-compressible torso hemorrhage', pronunciation: 'ree-BOH-ah' },
        { term: 'shock index', definition: 'HR/SBP; more sensitive than traditional vitals. >0.9 = significant hemorrhage' },
        { term: 'damage control surgery', definition: 'Abbreviated surgery for hemorrhage/contamination control, ICU resuscitation, then planned definitive repair' },
        { term: 'viscoelastic assay', definition: 'TEG/ROTEM testing for targeted transfusion guidance' },
        { term: 'resuscitative thoracotomy', definition: 'Emergency thoracotomy for traumatic arrest; best survival in penetrating cardiac injury' },
      ],
      analogies: [
        'REBOA: clamping a garden hose upstream of a leak while preparing the repair.',
        'DCS: emergency roof patches in a storm, full renovation when weather clears.',
        'TEG/ROTEM: real-time blueprint of clot formation showing which materials are missing.',
      ],
      examples: [
        'GSW abdomen, SBP 60, HR 150 (SI=2.5). MTP, TXA, FAST positive. DCS laparotomy with liver packing. ICU: pH 7.15, temp 34.2, INR 2.1.',
        'MCC unstable pelvis, binder applied, FAST negative. Hypotensive despite 4u pRBC. Zone III REBOA bridges to angioembolization.',
      ],
      clinicalNotes: 'Hemorrhage control is the priority for preventable trauma death. REBOA max ~60min Zone I. TBI+hemorrhage: hemorrhage control priority but maintain SBP >100. Geriatric on beta-blockers: use SI, lactate, base deficit.',
    },

    5: {
      level: 5,
      summary: 'Expert primary survey management incorporates cutting-edge resuscitation evidence, novel hemostatic strategies, AI-assisted triage, and systems-level quality improvement.',
      explanation: `## Evidence-Based Updates

### Resuscitation Trials

**PROPPR (2015):** 1:1:1 vs 1:1:2, greater hemostasis with 1:1:1 (86% vs 78%), widely adopted.

**PAMPer (2018):** Prehospital plasma, 30-day mortality 23.2% vs 33.0% (NNT ~10).

**Whole blood:** LTOWB expanding. Cold-stored platelets maintain hemostatic function. Military data supports warm fresh whole blood in austere settings.

### Hemostatic Advances

**TXA:** CRASH-2 reduced mortality <3h. CRASH-3 mild-moderate TBI benefit. Topical and nebulized TXA emerging.

**Calcium:** iCa <1.0 increases mortality. CaCl2 1g per 4u blood products. Citrate chelation depletes calcium.

**Factor concentrates:** Fibrinogen concentrate for level <1.5 g/L. PCC for warfarin reversal. Factor VIIa salvage only.

### REBOA Controversies

**UK-REBOA (2023):** First large RCT, no mortality benefit, higher complications. Partial REBOA (pREBOA) reduces ischemia-reperfusion. EVTM expanding. System-dependent benefit.

### AI and Analytics

**Predictive models:** ML for massive transfusion prediction, NLP of EMS reports, automated injury detection. ABC Score, TASH Score outperformed by ML in some studies.

### Special Populations

**Anticoagulated:** Warfarin: 4F-PCC + Vitamin K. DOACs: Idarucizumab (dabigatran), andexanet (Xa inhibitors).

**Geriatric:** Frailty more predictive than ISS. Pre-injury anticoagulants increase TBI mortality 4-5x.

**Pregnant:** Left lateral decubitus, perimortem cesarean <5min if >24wk. Kleihauer-Betke for fetomaternal hemorrhage.

### Systems Quality

**Metrics:** Time to OR <60min, MTP activation <10min, undertriage <5%.

**Innovation:** Handheld analyzers, freeze-dried plasma, drone blood delivery, prehospital telemedicine.`,
      keyTerms: [
        { term: 'endotheliopathy of trauma', definition: 'Systemic endothelial dysfunction causing anticoagulation, hyperfibrinolysis, and capillary leak' },
        { term: 'pREBOA', definition: 'Partial REBOA; incomplete occlusion reducing ischemia while maintaining proximal perfusion' },
        { term: 'LTOWB', definition: 'Low-Titer Group O Whole Blood; resuscitation fluid containing all blood components' },
        { term: 'trauma-induced coagulopathy', definition: 'Early coagulopathy from tissue injury and shock, distinct from dilutional coagulopathy' },
        { term: 'ABC score', definition: 'Bedside score predicting massive transfusion: mechanism, SBP, HR, FAST' },
      ],
      clinicalNotes: 'Goal-directed resuscitation (lactate clearance >20%/2h) superior to fixed volumes. Replace fibrinogen early (<1.5 g/L). Calcium replacement aggressive during MTP. UK-REBOA negative but may benefit delayed-OR systems. Undertriage <5% saves more lives than reducing overtriage.',
    },
  },

  media: [
    {
      id: 'primary-survey-abcde-algorithm',
      type: 'diagram',
      filename: 'primary-survey-abcde.svg',
      title: 'ATLS Primary Survey Algorithm',
      description: 'Flowchart of the ABCDE approach',
    },
    {
      id: 'hemorrhage-classification',
      type: 'diagram',
      filename: 'hemorrhage-classification.svg',
      title: 'ATLS Hemorrhage Classification',
      description: 'Classes I-IV hemorrhage with clinical parameters',
    },
  ],

  citations: [
    {
      id: 'atls-10th',
      type: 'textbook',
      title: 'ATLS Student Course Manual, 10th Edition',
      authors: ['ACS Committee on Trauma'],
      source: 'American College of Surgeons',
      accessedDate: '2026-01-30',
    },
    {
      id: 'proppr-trial',
      type: 'article',
      title: 'Transfusion of Plasma, Platelets, and RBCs in a 1:1:1 vs 1:1:2 Ratio',
      authors: ['Holcomb JB', 'et al.'],
      source: 'JAMA',
      accessedDate: '2026-01-30',
    },
    {
      id: 'crash-2',
      type: 'article',
      title: 'Effects of TXA on Death and Transfusion in Trauma',
      authors: ['CRASH-2 Collaborators'],
      source: 'Lancet',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-trauma-secondary-survey', targetType: 'topic', relationship: 'sibling', label: 'Secondary Survey' },
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
    { targetId: 'emergency-airway-intubation', targetType: 'topic', relationship: 'related', label: 'Intubation' },
  ],

  tags: {
    systems: ['cardiovascular', 'respiratory', 'nervous', 'musculoskeletal'],
    topics: ['emergency medicine', 'trauma', 'resuscitation', 'surgery'],
    keywords: ['primary survey', 'ABCDE', 'ATLS', 'trauma', 'hemorrhage', 'FAST', 'REBOA'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'surgery'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default primarySurvey;
