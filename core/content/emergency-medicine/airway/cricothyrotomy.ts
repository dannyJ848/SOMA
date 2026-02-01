/**
 * Cricothyrotomy - Emergency Surgical Airway
 *
 * Comprehensive content on emergency surgical airway access via cricothyrotomy,
 * including indications, technique, anatomy, and alternatives.
 */

import { EducationalContent } from '../../types';

export const cricothyrotomy: EducationalContent = {
  id: 'emergency-airway-cricothyrotomy',
  type: 'topic',
  name: 'Cricothyrotomy',
  nameEs: 'Cricotirotomia',
  alternateNames: ['Surgical Airway', 'Emergency Cricothyroidotomy', 'Cric', 'Surgical Cricothyrotomy'],

  levels: {
    1: {
      level: 1,
      summary: 'A cricothyrotomy is an emergency procedure where doctors make a small cut in the neck to create an opening for a breathing tube when the normal airway is completely blocked.',
      explanation: `## What Is a Cricothyrotomy?

A cricothyrotomy is a life-saving emergency procedure. When a person cannot breathe and doctors cannot place a regular breathing tube through the mouth, they make a small cut in the front of the neck to create a new airway.

### When Is It Needed?

This procedure is only done when:
- The person **cannot breathe at all**
- A regular breathing tube **cannot be placed** through the mouth
- A face mask **cannot deliver enough air**
- The person **will die** without immediate action

### How It Works

1. The doctor finds a small soft spot on the front of the neck (between two pieces of cartilage)
2. A small cut is made through the skin and the membrane underneath
3. A short breathing tube is placed through the opening
4. The tube is connected to oxygen and a breathing device

### Important Facts

- This procedure takes less than a minute in experienced hands
- It is only done when ALL other options have failed
- It is a temporary measure - the patient will later get a proper breathing tube or tracheostomy
- The scar is small and usually heals well

### What Is the Cricothyroid Membrane?

If you put your finger on the front of your throat, you can feel a hard bump (the Adam's apple). Just below it is a small soft spot - that is the cricothyroid membrane. This is where the procedure is performed because:
- It is close to the surface of the skin
- There are very few blood vessels in this area
- It provides direct access to the airway`,
      keyTerms: [
        { term: 'cricothyrotomy', definition: 'An emergency surgery to create a breathing hole in the neck when the normal airway is blocked', pronunciation: 'cry-koh-thy-ROT-oh-mee' },
        { term: 'cricothyroid membrane', definition: 'The soft tissue between the thyroid and cricoid cartilages in the neck where the procedure is performed' },
        { term: 'tracheostomy', definition: 'A planned surgical opening in the windpipe below the throat, more permanent than a cricothyrotomy', pronunciation: 'tray-kee-OS-toh-mee' },
        { term: 'airway obstruction', definition: 'When something blocks the path air takes to reach the lungs, preventing breathing' },
      ],
      analogies: [
        'A cricothyrotomy is like an emergency exit in a building - you only use it when all the normal doors are blocked.',
        'The cricothyroid membrane is like a thin window into the airway - easy to find and quick to open.',
        'Think of it as creating an emergency doorway for air when the front door (mouth) and back door (nose) are both locked.',
      ],
      examples: [
        'A person has a severe allergic reaction and their throat swells shut. No breathing tube can be passed. The doctor performs a cricothyrotomy in under 60 seconds, and the person can breathe again.',
        'After a car accident, a patient has severe facial injuries blocking the airway. After two failed intubation attempts, the trauma surgeon performs an emergency cricothyrotomy.',
      ],
      patientCounselingPoints: [
        'A cricothyrotomy is a rare but life-saving procedure',
        'The opening is temporary and will be converted to a different type of airway when safe',
        'The scar is usually small and fades over time',
        'Recovery from the procedure itself is generally quick',
      ],
    },

    2: {
      level: 2,
      summary: 'Cricothyrotomy is the emergency surgical airway performed when endotracheal intubation and supraglottic ventilation have failed (CICV), involving incision through the cricothyroid membrane.',
      explanation: `## Indications

**Primary indication:** Can't Intubate, Can't Ventilate (CICV)
- Failed oral/nasal intubation (multiple attempts)
- Failed supraglottic airway (LMA, i-gel)
- Patient desaturating with no other options

**Specific scenarios:**
- Massive facial trauma preventing oral intubation
- Severe angioedema/anaphylaxis with complete airway obstruction
- Upper airway tumor or abscess
- Foreign body lodged above the vocal cords
- Failed awake intubation

**Relative contraindication:** Age <12 (needle cricothyrotomy preferred)

## Anatomy

**Surface landmarks:**
- **Thyroid cartilage:** Prominent "Adam's apple" (larger in males)
- **Cricothyroid membrane:** Depression below thyroid cartilage, above cricoid
- **Cricoid cartilage:** Complete ring below the membrane
- Membrane is approximately 9mm tall x 30mm wide
- Located ~2-3 cm below skin surface

**Key relationships:**
- Superior: Thyroid cartilage
- Inferior: Cricoid cartilage
- Lateral: Superior cricothyroid arteries (near upper border - cut low)
- Posterior: Tracheal mucosa and posterior tracheal wall
- Anterior: Skin, subcutaneous fat, pretracheal fascia

## Surgical Technique (Standard Open)

### Step-by-Step

1. **Identify landmarks:** Palpate thyroid cartilage, slide finger inferiorly to membrane
2. **Stabilize larynx:** Non-dominant hand stabilizes thyroid cartilage
3. **Vertical skin incision:** 3-4 cm midline over membrane (vertical reduces vessel injury)
4. **Identify membrane:** Blunt dissect through subcutaneous tissue
5. **Horizontal (transverse) stab:** Through membrane (lower half to avoid superior artery)
6. **Dilate opening:** Tracheal hook or finger, or turn scalpel handle 90 degrees
7. **Insert bougie:** Advance caudally (toward lungs)
8. **Thread tube:** 6.0 cuffed tracheostomy tube or ETT over bougie
9. **Inflate cuff, ventilate**
10. **Confirm placement:** Capnography, bilateral breath sounds, chest rise
11. **Secure tube**

### Alternative: Seldinger (Percutaneous) Technique

1. Identify membrane
2. Insert needle with attached syringe (aspiration of air confirms tracheal entry)
3. Thread guidewire through needle
4. Dilate over wire
5. Pass tube over wire/dilator
6. Confirm placement

## Equipment Options

| Method | Equipment | Time | Reliability |
|--------|-----------|------|-------------|
| Standard surgical | Scalpel, bougie, 6.0 tube | 30-60 sec | Highest |
| Commercial kit (Melker) | Seldinger kit with dilator | 60-90 sec | Good |
| Needle cricothyrotomy | 14G catheter, jet ventilation | 15-30 sec | Temporary only |

## Complications

- **Hemorrhage:** Usually minor; major vessel injury rare with proper technique
- **False passage:** Tube placed outside trachea (pre-tracheal space)
- **Posterior wall perforation:** From over-aggressive incision
- **Subglottic stenosis:** Long-term complication, especially if not converted
- **Infection:** Wound infection or mediastinitis (rare)
- **Tube displacement:** Early complication requiring immediate recognition

## Post-Procedure Care

- Convert to formal tracheostomy within 24-72 hours
- Secure tube with sutures and ties
- Chest X-ray to confirm tube position
- Humidified oxygen through tube
- Suction as needed`,
      keyTerms: [
        { term: 'CICV', definition: 'Can\'t Intubate, Can\'t Ventilate - the emergency indication for cricothyrotomy' },
        { term: 'cricothyroid membrane', definition: 'Fibrous membrane connecting thyroid and cricoid cartilages; the target for surgical airway' },
        { term: 'bougie', definition: 'Flexible introducer used to guide the tube through the cricothyrotomy into the trachea', pronunciation: 'BOO-zhee' },
        { term: 'Seldinger technique', definition: 'A method using a guidewire placed through a needle to insert a tube, rather than direct surgical exposure' },
        { term: 'jet ventilation', definition: 'High-pressure oxygen delivery through a narrow cannula; temporary rescue with needle cricothyrotomy' },
      ],
      analogies: [
        'The cricothyroid membrane is the "soft spot" of the airway - like a window in an otherwise rigid structure.',
        'The Seldinger technique is like threading a bead on a string - the wire goes first, then the tube follows.',
        'A cricothyrotomy is the "break glass in case of emergency" option for the airway.',
      ],
      examples: [
        'Anaphylaxis with complete upper airway obstruction. Two intubation attempts fail. LMA fails. CICV declared. Scalpel cricothyrotomy performed in 45 seconds. 6.0 tube placed. Patient ventilated successfully.',
        'Gunshot wound to face with massive hemorrhage. Oral intubation impossible due to anatomy disruption. Surgical cricothyrotomy performed at bedside. Patient transferred to OR.',
      ],
      patientCounselingPoints: [
        'The cricothyrotomy incision will be converted to a formal tracheostomy within a few days',
        'Voice may be temporarily affected but usually recovers',
        'The procedure is done only when absolutely necessary to save a life',
      ],
    },

    3: {
      level: 3,
      summary: 'Emergency cricothyrotomy requires rapid identification of CICV, knowledge of neck anatomy, proficiency in the scalpel-bougie-tube technique, and management of complications.',
      explanation: `## Decision to Perform Cricothyrotomy

### When to Declare CICV

**Triggers:**
- 3 failed intubation attempts with optimal technique
- Failed supraglottic airway (2 attempts recommended)
- Inability to maintain SpO2 >90%
- Cannot maintain bag-mask ventilation

**The cognitive challenge:**
- Decision paralysis: Most common cause of delayed surgical airway
- Team must verbalize: "This is a CICV situation - we need a surgical airway"
- Pre-designated team member should be identified before RSI
- Explicit escalation criteria agreed upon before attempt

### Technique Comparison

**Scalpel-Bougie-Tube (preferred in emergencies):**
- Fastest reliable technique in emergency settings
- Studies show higher success rate than Seldinger in emergencies
- Uses standard equipment (scalpel, bougie, 6.0 tube)
- FONA (Front of Neck Access) standardized by DAS and NAP4

**Seldinger (commercial kits):**
- Melker, Portex, Cook kits
- More steps = more failure points
- May be better for elective/semi-elective situations
- Advantage: Potentially less bleeding

**Needle cricothyrotomy + jet ventilation:**
- 14G IV catheter through membrane
- Connect to jet ventilation source (50 psi)
- Ventilate: 1 second on, 4 seconds off
- TEMPORARY: Maximum 30-45 minutes
- Risk: Barotrauma, inadequate ventilation, catheter kink
- Use: Bridge to definitive airway, pediatric patients <12

### Anatomical Considerations

**Difficult neck anatomy:**
- Obesity: Deeper landmarks, more subcutaneous tissue
- Short neck: Compressed anatomy
- Prior neck surgery or radiation: Altered landmarks, fibrosis
- Neck hematoma: Distorted anatomy

**Ultrasound for cricothyrotomy:**
- Pre-procedural identification of membrane
- Mark location before draping
- Identify aberrant vessels
- Especially useful in obese/short necks
- Increasingly part of pre-RSI preparation

### Anatomical Variants

- Thyroid isthmus may overlie membrane (2-3% of cases)
- High-riding brachiocephalic artery (rare but catastrophic if injured)
- Pre-tracheal thyroid tissue
- Calcified membrane in elderly

## NAP4 Findings (UK National Audit)

**Key findings from 4th National Audit Project:**
- CICV situations: Cricothyrotomy often performed too late
- Success rate in emergencies: ~60-70% (lower than expected)
- Most common failure: Hesitation and delay
- Recommendation: Standardized scalpel technique, regular training

**Improving success:**
- Scalpel-bougie-tube is the recommended technique (NAP4, DAS)
- Regular simulation training (at least annually)
- Cognitive aids at every airway cart
- Pre-identification of team member for surgical airway before RSI

## Conversion to Tracheostomy

**Timing:** Within 24-72 hours (prevents subglottic stenosis)

**Tracheostomy vs leaving cricothyrotomy:**
- Cricothyrotomy through membrane: Higher subglottic stenosis risk long-term
- Formal tracheostomy below cricoid: Lower long-term complications
- If short-term ventilation needed (<7 days): Cricothyrotomy may be adequate
- If prolonged ventilation anticipated: Convert early`,
      keyTerms: [
        { term: 'NAP4', definition: '4th National Audit Project (UK); landmark study of major airway complications showing frequent delays in surgical airway' },
        { term: 'FONA', definition: 'Front of Neck Access; standardized term for emergency surgical airway (cricothyrotomy)' },
        { term: 'DAS guidelines', definition: 'Difficult Airway Society guidelines recommending scalpel-bougie-tube as the emergency surgical airway technique' },
        { term: 'decision paralysis', definition: 'Cognitive failure to declare CICV and proceed to surgical airway; the most common cause of delay and death' },
        { term: 'subglottic stenosis', definition: 'Narrowing of the airway below the vocal cords; long-term complication of cricothyrotomy if not converted' },
      ],
      analogies: [
        'Decision paralysis in CICV is like freezing at a fork in the road - the delay itself is the danger, not the choice.',
        'The scalpel-bougie-tube technique is like a simple three-step recipe - the fewer the steps, the fewer things can go wrong.',
        'Pre-identifying the cric performer is like pre-designating a fire escape leader - when the alarm sounds, everyone knows their role.',
      ],
      examples: [
        'Failed RSI in obese patient. 3 VL attempts fail. i-gel placed but cannot ventilate. SpO2 72%. Team lead declares CICV. Ultrasound-marked membrane. Scalpel-bougie-tube in 50 seconds. SpO2 recovers to 98%.',
        'Epiglottitis with complete obstruction. Awake intubation fails. Apneic. Immediate cricothyrotomy. Tube placed. Converted to tracheostomy next day. Patient extubated after antibiotics on day 5.',
      ],
      clinicalNotes: 'The biggest killer in CICV is hesitation, not technical failure. Verbalize escalation triggers before RSI. NAP4 showed ~60-70% emergency cric success - this improves with training and standardized technique. Scalpel-bougie-tube is the recommended technique. Ultrasound marking of the membrane before RSI should be standard in difficult airway patients. Convert to formal tracheostomy within 72 hours to prevent stenosis.',
    },

    4: {
      level: 4,
      summary: 'Advanced cricothyrotomy practice integrates ultrasound-guided techniques, cognitive performance optimization, simulation-based training evidence, and surgical airway alternatives for complex anatomy.',
      explanation: `## Advanced Surgical Airway Techniques

### Ultrasound-Guided Cricothyrotomy

**Pre-procedural scanning:**
- Linear probe, transverse orientation
- Identify thyroid cartilage (inverted V, bright hyperechoic lines)
- Slide caudally to cricothyroid membrane (air-mucosal interface)
- Identify cricoid ring below
- Mark midline over membrane with skin marker

**Advantages:**
- Identifies membrane in 95% of patients (vs 72% palpation in obese)
- Identifies aberrant vessels
- Reduces false passage risk
- Time: ~30 seconds for identification

**Intra-procedural guidance:**
- Real-time US guidance is technically feasible but not yet standard
- Most centers use pre-procedural marking only
- Research ongoing for AR-overlay approaches

### Bougie-First Surgical Airway

**Modified technique (Levitan):**
1. Vertical skin incision
2. Palpate membrane through incision
3. Bougie inserted directly through membrane (without scalpel stab)
4. Tube threaded over bougie
5. Advantages: Reduced false passage risk, eliminates step

**SMART technique (Scalpel-Finger-Bougie):**
1. Large vertical incision (5cm)
2. Blunt dissection with finger to membrane
3. Palpate membrane with finger IN the wound
4. Scalpel puncture through membrane while finger guides
5. Bougie through incision
6. Tube over bougie

### Percutaneous Tracheostomy (Elective)

**For ICU patients requiring prolonged ventilation:**
- Ciaglia technique: Sequential dilational (most common)
- Griggs technique: Guide wire dilating forceps
- PercuTwist: Threaded dilator
- Timing: Day 7-14 of mechanical ventilation (earlier if anticipated)
- Ultrasound-guided: Standard of care for percutaneous approach

### Pediatric Considerations

**Age <12:** Needle cricothyrotomy only (surgical cricothyrotomy risks subglottic damage)
- 14-16G IV catheter through membrane
- Jet ventilation: 1 sec on, 4 sec off, 50 psi (adjusted for size)
- Maximum duration: 30-45 minutes
- Bridge to definitive surgical tracheostomy

**Age 8-12:** Some debate; smaller tube surgical cricothyrotomy may be acceptable in extremis

**Neonates/infants:** Emergency tracheostomy preferred (very small anatomy)

### Cognitive Performance Under Stress

**Performance degradation:**
- Fine motor skills decline 40% under stress
- Decision-making time increases 2-3x
- Perceptual narrowing (tunnel vision)
- Team communication breaks down

**Countermeasures:**
- Overlearned procedural skills (automaticity through repetition)
- Cognitive aids and checklists
- Verbalized decision triggers ("if SpO2 <70%, we perform cric")
- Pre-assigned roles (one person designated for FONA)
- Stress inoculation training (high-fidelity simulation)

**Simulation evidence:**
- Annual simulation training maintains competency
- Cadaver labs superior to mannequins for tactile feedback
- In-situ simulation (in actual resuscitation bay) improves team dynamics
- Debriefing is the most important component of simulation training

### Complications and Management

**Immediate:**
- False passage: Most dangerous; tube in pre-tracheal space. Prevention: Bougie with tracheal clicks, capnography confirmation
- Hemorrhage: Usually minor. Severe if superior cricothyroid artery injured. Management: Direct pressure, surgical exploration
- Posterior wall perforation: Over-aggressive incision. Prevention: Controlled scalpel depth

**Early (hours-days):**
- Tube displacement: High risk due to short tube length. Prevention: Suture + tape, avoid neck flexion
- Subcutaneous emphysema: Air tracking from around tube or false passage
- Infection: Clean technique reduces risk

**Late (weeks-months):**
- Subglottic stenosis: Most significant long-term risk (2-3% if converted early)
- Voice changes: Rare with proper technique
- Tracheomalacia: From prolonged tube presence`,
      keyTerms: [
        { term: 'SMART technique', definition: 'Scalpel-finger-bougie surgical airway approach using large incision and finger palpation for tactile guidance' },
        { term: 'stress inoculation', definition: 'Simulation training under realistic stress conditions to improve performance in actual emergencies' },
        { term: 'automaticity', definition: 'Ability to perform procedural skills without conscious thought, achieved through deliberate repetition' },
        { term: 'percutaneous dilational tracheostomy', definition: 'Bedside ICU procedure using Seldinger technique for elective tracheostomy in ventilated patients' },
        { term: 'false passage', definition: 'Tube placed outside the trachea in the pre-tracheal soft tissue; most dangerous cricothyrotomy complication' },
      ],
      analogies: [
        'Automaticity through simulation is like a basketball player making free throws - practice until muscle memory takes over when pressure is high.',
        'The SMART technique uses your finger like a GPS beacon - palpating the membrane directly guides the scalpel and bougie.',
        'Pre-procedural ultrasound is like checking a map before driving into unfamiliar territory.',
      ],
      examples: [
        'BMI 55 patient. Unable to palpate landmarks. Pre-RSI ultrasound identifies and marks membrane 3cm below skin. After failed VL x3 and failed SGA, cricothyrotomy at marked site. Successful first attempt despite difficult anatomy.',
        'Simulation training: Team practices CICV scenario. First attempt: 180 seconds to tube placement. After 6 monthly sessions: 55 seconds. Confidence surveys show marked improvement.',
      ],
      clinicalNotes: 'Ultrasound marking before RSI should be standard for patients with difficult neck anatomy. The finger-in-the-wound technique (SMART) provides tactile confirmation in any body habitus. Pediatric cricothyrotomy: needle only below age 12. Simulation training at least annually; cadaver labs provide the best tactile experience. Pre-assigned roles and verbalized triggers are more important than individual skill level.',
    },

    5: {
      level: 5,
      summary: 'Expert surgical airway practice synthesizes evidence from national audits, simulation science, novel technologies, and systems-level approaches to minimize CICV deaths through preparedness and performance optimization.',
      explanation: `## Expert Surgical Airway Practice

### National Audit Evidence

**NAP4 (UK, 2011):**
- 184 major airway events reported over 1 year
- 38% of ICU events involved emergency surgical airway
- 60% of deaths were potentially avoidable
- Key finding: Surgical airway performed too late or not at all
- Led to DAS 2015 guidelines emphasizing FONA

**NEAR (National Emergency Airway Registry):**
- Emergency cricothyrotomy rate: 0.3-1% of emergency intubations
- First-pass success: ~90% when performed by experienced operators
- Higher failure rate in training settings

**Lessons from military medicine:**
- Combat surgical airway rate: 1-2% of airway interventions
- Success rate >95% with scalpel technique
- Training intensity much higher than civilian
- Standardized equipment kits (CRIC-Key, TCCC surgical airway)

### Systems Approach to CICV Prevention

**Pre-RSI preparation:**
1. Formal airway assessment (LEMON, HEAVEN)
2. Ultrasound landmark identification if any concern
3. Backup plan verbalized to team
4. FONA performer identified and equipment open
5. Explicit number of attempts before escalation

**Equipment standardization:**
- Surgical airway kit on every airway cart
- Kit checked on every shift
- Standardized contents across institution
- Single-use commercial kits vs custom kits
- Bougie included in every airway kit

### Novel Technologies

**3D-printed airway trainers:**
- Patient-specific anatomy from CT data
- Allows rehearsal for known difficult airways
- Pre-surgical planning for predicted surgical airway

**VR/AR training:**
- Virtual reality cricothyrotomy simulators
- Augmented reality overlay for anatomic guidance
- Haptic feedback systems simulating tissue resistance
- Remote expert guidance through AR platforms

**Robotics (investigational):**
- Robotic-assisted percutaneous tracheostomy
- Automated landmark identification
- Potential for teleoperated surgical airway (austere environments)

### Special Circumstances

**Anterior neck pathology:**
- Prior tracheostomy site: May use existing stoma
- Neck radiation: Fibrotic tissue, altered anatomy
- Thyroid goiter: Enlarged thyroid may overlie membrane
- Approach: Ultrasound essential, larger incision, prepared for bleeding

**Coagulopathic patients:**
- Not a contraindication in CICV (the alternative is death)
- Expect more bleeding
- Have hemostatic agents available (topical TXA, surgicel)
- Notify surgery for possible exploration

**Morbid obesity:**
- Landmarks may be impalpable
- Ultrasound identification is essential
- Larger incision (vertical 5-8cm)
- Longer instruments may be needed
- Consider extended-length tracheostomy tube

### Quality and Accountability

**Mandatory reporting:**
- All CICV events should be reported and reviewed
- Root cause analysis for each occurrence
- Track time from CICV declaration to tube placement
- Identify system vs individual factors

**Training standards (proposed):**
- Annual simulation (minimum)
- Cadaver lab every 2-3 years
- Minimum of 1 supervised surgical airway per training period
- Competency assessment with checklists
- Maintenance of certification requirements

**Research priorities:**
- Optimal technique for different populations (obese, pediatric)
- AI-assisted real-time anatomy identification
- Outcomes comparison of techniques in true emergencies
- Impact of training frequency on performance
- Development of non-invasive emergency oxygenation alternatives`,
      keyTerms: [
        { term: 'NAP4', definition: 'UK national audit revealing that delayed or absent surgical airway was the leading preventable cause of death in CICV' },
        { term: 'DAS 2015', definition: 'Difficult Airway Society guidelines that standardized FONA as scalpel-bougie-tube technique' },
        { term: 'TCCC', definition: 'Tactical Combat Casualty Care; military guidelines with high surgical airway proficiency standards' },
        { term: 'haptic feedback', definition: 'Technology providing tactile sensation in simulators to replicate tissue resistance during training' },
      ],
      clinicalNotes: 'The single most important factor in CICV survival is the decision to perform cricothyrotomy - not the technique used. NAP4 demonstrated that hesitation kills. Systems approach: pre-RSI preparation, verbalized backup plans, and pre-assigned roles. Annual simulation at minimum; cadaver labs are the gold standard for training. Ultrasound for landmark identification in every patient with any concern about neck anatomy. Military data shows >95% success is achievable with adequate training intensity. The goal is to make CICV so rare through upstream prevention (VL, bougie, SGA) that when it occurs, the team is mentally prepared to act without hesitation.',
    },
  },

  media: [
    {
      id: 'cricothyrotomy-anatomy',
      type: 'diagram',
      filename: 'cricothyroid-membrane-anatomy.svg',
      title: 'Cricothyroid Membrane Anatomy',
      description: 'Surface anatomy landmarks for cricothyrotomy',
    },
    {
      id: 'scalpel-bougie-tube-technique',
      type: 'diagram',
      filename: 'scalpel-bougie-tube-steps.svg',
      title: 'Scalpel-Bougie-Tube Technique',
      description: 'Step-by-step surgical cricothyrotomy procedure',
    },
  ],

  citations: [
    {
      id: 'nap4-report',
      type: 'article',
      title: 'NAP4: Major Complications of Airway Management in the UK',
      authors: ['Cook TM', 'et al.'],
      source: 'British Journal of Anaesthesia',
      accessedDate: '2026-01-30',
    },
    {
      id: 'das-2015-guidelines',
      type: 'article',
      title: 'Difficult Airway Society 2015 Guidelines for Management of Unanticipated Difficult Intubation',
      authors: ['Frerk C', 'et al.'],
      source: 'British Journal of Anaesthesia',
      accessedDate: '2026-01-30',
    },
  ],

  crossReferences: [
    { targetId: 'emergency-airway-intubation', targetType: 'topic', relationship: 'sibling', label: 'Intubation' },
    { targetId: 'emergency-trauma-primary-survey', targetType: 'topic', relationship: 'related', label: 'Primary Survey' },
    { targetId: 'emergency-cardiac-arrest', targetType: 'condition', relationship: 'related', label: 'Cardiac Arrest' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['emergency medicine', 'surgery', 'anesthesiology', 'airway management'],
    keywords: ['cricothyrotomy', 'surgical airway', 'CICV', 'FONA', 'emergency airway', 'cricothyroid membrane'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['emergency medicine', 'surgery', 'anesthesiology'] },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cricothyrotomy;
