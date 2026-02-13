/**
 * Tooth Extractions - Comprehensive Educational Content
 *
 * Covers tooth removal including simple and surgical extractions,
   indications, contraindications, and postoperative care.
 */

import { EducationalContent } from '../types';

export const extractions: EducationalContent = {
  id: 'procedure-tooth-extraction',
  type: 'topic',
  name: 'Tooth Extractions',
  nameEs: 'Extracciones Dentales',
  alternateNames: [
    'Dental Extraction',
    'Tooth Removal',
    'Dental Exodontia',
    'Pulling Teeth',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'A tooth extraction is the removal of a tooth from its socket in the bone. Dentists try to save teeth, but sometimes extraction is necessary when a tooth is too damaged or diseased to be saved.',
      explanation: `**Why Would a Tooth Need to Be Extracted?**

**Common Reasons:**

**Severe Decay**
- Cavity too large to fill
- Decay reaches below gum line
- Tooth cannot be restored

**Gum Disease**
- Bone supporting tooth is destroyed
- Tooth becomes loose
- Infection around tooth

**Crowding**
- Teeth are overcrowded
- Removal for orthodontics (braces)
- Wisdom teeth problems

**Infection**
- Abscess that cannot be saved
- Infection spreads to other teeth
- Risk of serious infection

**Broken Tooth**
- Tooth breaks below gum line
- Cannot be restored with crown
- Vertical crack through tooth

**Impacted Teeth**
- Wisdom teeth stuck in bone
- No room to come in
- Causing pain or damage

**Types of Extractions:**

**Simple Extraction**
- Tooth visible in mouth
- Can be grasped with forceps
- Usually quick procedure

**Surgical Extraction**
- Tooth not fully erupted
- Bone must be removed
- More complicated procedure
- Wisdom teeth often require this

**The Extraction Procedure:**

**Before:**
- X-rays to see tooth position
- Discuss medical history
- Anesthesia to numb area

**During:**
- Loosen tooth with instruments
- Grasp tooth with forceps
- Rock tooth gently
- Remove from socket
- May need stitches

**After:**
- Gauze placed to stop bleeding
- Bite on gauze for 30-45 minutes
- Care instructions given

**Healing:**
- First 24 hours: Blood clot forms
- First week: Gum tissue heals
- 1-2 months: Bone fills in socket

**Aftercare Instructions:**
- Bite on gauze until bleeding stops
- Avoid rinsing for 24 hours
- No straw for 24 hours
- Soft foods first day
- No smoking
- Take pain medicine as directed
- Keep area clean

**When to Call the Dentist:**
- Bleeding that won't stop after several hours
- Severe pain not helped by medicine
- Fever
- Swelling that gets worse after 3 days
- Numbness that doesn't go away`,
      keyTerms: [
        { term: 'extraction', definition: 'Removal of a tooth from its socket' },
        { term: 'impacted tooth', definition: 'Tooth that cannot erupt because it\'s blocked by bone or other teeth' },
        { term: 'wisdom teeth', definition: 'Third molars at the back of the mouth' },
        { term: 'socket', definition: 'The hole in bone where the tooth was' },
      ],
      analogies: [
        'An extraction is like pulling a weed - you have to loosen the roots before it comes out.',
        'The blood clot is like a scab - it protects the bone while it heals.',
      ],
      examples: [
        'Wisdom teeth often need to be extracted because there isn\'t enough room for them.',
        'A severely broken tooth may need to be extracted if it cannot be restored.',
      ],
      patientCounselingPoints: [
        'Smoking after extraction is a major cause of problems - avoid for at least 48 hours',
        'The first 24 hours are critical for healing - follow instructions carefully',
        'Replacing the extracted tooth helps prevent shifting of other teeth',
        'Most people feel back to normal within a week',
      ],
    },
    2: {
      level: 2,
      summary: 'Tooth extraction is the removal of a tooth from its alveolar socket. Indications include caries, periodontal disease, impaction, orthodontics, and trauma. Postoperative care focuses on healing and preventing complications.',
      explanation: `## Indications for Extraction

**Caries-Related:**
- Tooth non-restorable with filling or crown
- Vertical root fracture
- Crown-root fracture unrestorable
- Pulp necrosis in tooth not restorable

**Periodontal:**
- Advanced periodontitis with bone loss
- Mobility compromising function
- Class III furcation involvement
- Periodontal-endodontic lesions

**Orthodontic:**
- Severe crowding
- Serial extraction
- Asymptomatic impacted teeth
- Supernumerary teeth

**Impaction:**
- Third molars (wisdom teeth)
- Canines
- Premolars
- Associated pathology

**Prophylactic:**
- Risk of pathology (cysts, tumors)
- Radiation therapy field
- Organ transplantation (if infection risk)
- Immunocompromised patient

**Other:**
- Supernumerary teeth
- Teeth interfering with prosthesis
- Pre-prosthetic extractions
- Trauma

## Contraindications

**Absolute:**
- Malignancy (refer for evaluation)
- Radiation osteonecrosis in field
- Bisphosphonate-related osteonecrosis risk
- Uncontrolled medical condition

**Relative:**
- Coagulation defects
- Anticoagulant therapy
- Uncontrolled diabetes
- Pregnancy (elective extractions deferred)
- Severe anxiety (may require sedation)

## Extraction Types

**Simple Extraction:**
- Tooth visible in mouth
- Root systems straightforward
- Forceps and elevators used
- No bone removal required

**Surgical Extraction:**
- Tooth not accessible
- Bone removal required
- Sectioning of tooth
- Flap reflection
- Suturing required

## Procedure

**Preoperative Assessment:**
- Medical history
- Medications (especially anticoagulants)
- Allergies
- Bleeding disorders
- Previous extractions

**Imaging:**
- Periapical radiograph (minimum)
- Panoramic for impacted teeth
- CBCT for complex cases

**Anesthesia:**
- Local anesthesia: Lidocaine, Articaine
- Inferior alveolar nerve block (mandibular)
- Infiltration (maxillary)
- Sedation for anxious patients

**Extraction Technique:**

1. **Elevator use:** Loosen tooth, break PDL fibers
2. **Forceps selection:** Appropriate for tooth
3. **Luxation:** Rocking tooth buccolingually
4. **Traction:** Deliver tooth from socket
5. **Socket inspection:** Remove debris, root tips
6. **Hemostasis:** Gauze pressure, suturing if needed

**Surgical Extraction:**
- Flap reflection
- Bone removal (burs, chisels)
- Tooth sectioning
- Root removal
- Socket debridement
- Flap closure with sutures

## Postoperative Care

**Immediate (0-24 hours):**
- Bite on gauze 30-45 minutes
- No rinsing, spitting, straw use
- No vigorous mouth rinsing
- Soft diet
- Avoid hot liquids
- Rest
- Pain medication as prescribed

**24-72 hours:**
- Gentle salt water rinses
- Continue soft diet
- Gradual return to normal foods
- Maintain oral hygiene (avoid extraction site)
- Swelling peaks at 48 hours
- Ice for first 24 hours

**After 72 hours:**
- Normal diet as tolerated
- Normal oral hygiene
- Resume all activities
- Healing continues

## Complications

**Bleeding:**
- Immediate: Socket packing, suturing
- Delayed: Evaluate for coagulopathy
- Anticoagulant management

**Dry Socket (Alveolar Osteolysis):**
- Incidence: 2-20%
- Pain 3-4 days post-extraction
- Empty socket with exposed bone
- Risk factors: Smoking, oral contraceptives, trauma
- Treatment: Irrigation, medicated dressing, analgesics

**Infection:**
- Delayed healing
- Pain, swelling, fever
- Purulent exudate
- Treatment: Irrigation, antibiotics

**Fractured Root:**
- During extraction
- Remove fragment if possible
- Surgical removal if needed
- Refer if inaccessible

**Displacement:**
- Maxillary tooth into sinus
- Mandibular into fascial spaces
- Surgical retrieval needed

**Nerve Injury:**
- Inferior alveolar nerve (mandibular)
- Lingual nerve
- Mental nerve
- Paresthesia: Usually temporary, sometimes permanent

**TMJ Injury:**
- Trauma from opening
- Muscle spasm
- Trismus
- Usually self-limiting

## Healing Process

**Socket Healing Timeline:**
- 0-24 hours: Blood clot forms
- 1 week: Granulation tissue
- 2-6 weeks: Connective tissue
- 3-6 months: Bone fill

**Socket Healing Types:**
- Primary healing: No flap, clot fills
- Secondary healing: Large defect, granulation
- Healing by second intention

**Radiographic Appearance:**
- Immediate: Empty socket
- 2 weeks: Ill-defined radiolucency
- 6-12 weeks: Trabecular pattern
- 6-12 months: Normal bone density`,
      keyTerms: [
        { term: 'alveolar osteitis', definition: 'Inflammation of socket after extraction; dry socket' },
        { term: 'furcation involvement', definition: 'Bone loss between roots of multi-rooted teeth' },
        { term: 'luxation', definition: 'Rocking tooth to loosen it from socket' },
        { term: 'paresthesia', definition: 'Abnormal sensation (numbness, tingling) from nerve injury' },
      ],
      analogies: [
        'Dry socket is like a scab falling off too early - raw bone is exposed and painful.',
        'The elevator is like a lever - it uses gentle pressure to loosen the tooth.',
      ],
      clinicalNotes: 'Dry socket most common complication; smoking increases risk 4-fold. Inferior alveolar nerve injury possible with mandibular extractions. Maxillary tuberosity fracture possible with upper molar extraction. Antibiotics not indicated routinely. Anticoagulants generally NOT stopped for extractions.',
      patientCounselingPoints: [
        'No smoking for at least 48 hours - greatly increases risk of dry socket',
        'Bite on gauze firmly for 30-45 minutes after extraction',
        'Start salt water rinses 24 hours after extraction',
        'Call if bleeding persists, severe pain develops, or you have fever',
      ],
    },
    3: {
      level: 3,
      summary: 'Tooth extraction requires understanding of alveolar anatomy, biomechanics of tooth removal, and healing processes. Complications can be minimized with proper technique and postoperative care.',
      explanation: `## Anatomic Considerations

**Maxillary:**
- Thin buccal bone (especially molars)
- Proximity to sinus floor
- Risk of oroantral communication
- Tuberosity fracture risk

**Mandibular:**
- Denser buccal bone
- Inferior alveolar nerve
- Mental nerve (anterior)
- Lingual nerve proximity
- Submandibular gland fossa

**Root Morphology:**
- Number of roots varies
- Curved roots (dilaceration)
- Hypercementosis
- Root fusion
- Accessory roots

**Forceps Selection:**

*Maxillary:*
- Universal forceps (150, 151)
- Upper molar forceps (87, 88)
- Upper premolar forceps (150)
- Upper anterior forceps (150)

*Mandibular:*
- Universal forceps (151)
- Lower molar forceps (17, 18)
- Lower premolar forceps (151)
- Lower anterior forceps (151)

**Elevators:**
- Straight elevators (301, 1)
- Periotome
- Cryer elevators (posterior)
- Winter elevators (crossed bar)

## Biomechanics of Extraction

**Principles:**
- Expand socket buccolingually
- Preserve buccal plate
- Use slow, steady force
- Luxation before traction
- Alternating buccal and lingual force
- Avoid excessive force

**Expansion:**
- Bone elastic property
- Movement creates space
- Prevents fracture
- More in maxilla than mandible

**Axial vs. Rotational:**
- Axial: Straight pull out
- Rotational: Rotating around long axis
- Multi-rooted: Section roots

## Surgical Extraction

**Indications:**
- Tooth not accessible with forceps
- Root tip retrieval
- Impacted teeth
- Ankylosed teeth
- Hypercementosis

**Flap Design:**
- Envelope flap
- Triangular flap
- Semilunar flap
- Pedicle flap
- Principles: Base wider than height, adequate blood supply

**Bone Removal:**
- Burs (round, fissure)
- Chisels/mallet
- Bone files
- Remove minimal bone

**Tooth Sectioning:**
- Multi-rooted teeth
- Convergent roots
- Dilacerated roots
- Facilitates removal

## Impacted Third Molars

**Classification:**

*Pell & Gregory (Ramus):*
- Class I: Adequate space
- Class II: Reduced space
- Class III: No space

*Pell & Gregory (Impaction):*
- Position relative to second molar
- A: At occlusal plane
- B: Between occlusal plane and amelocemental junction
- C: Below amelocemental junction

*Winter (Angulation):*
- Vertical
- Mesioangular (most common)
- Horizontal
- Distoangular
- Inverted (rare)

**Complications:**

*Intraoperative:*
- Bleeding
- Fractured root
- Displacement into sinus (maxillary)
- Displacement into submandibular space (mandibular)
- Inferior alveolar nerve injury
- Lingual nerve injury

*Postoperative:*
- Trismus
- Swelling
- Pain
- Infection
- Paresthesia
- Oroantral communication

## Management of Complications

**Bleeding:**
- Local measures first
- Gauze pressure
- Topical hemostatics
- Suturing
- Consider reversal of anticoagulation if severe

**Dry Socket:**
- Incidence: 2-20%
- Peak incidence: Day 3-4
- Diagnosis: Exposed bone, pain
- Treatment: Irrigation, socket dressing, analgesics
- Prevention: Avoid smoking, gentle irrigation

**Infection:**
- Cellulitis vs abscess
- Antibiotics for cellulitis
- Drainage for abscess
- Culture if appropriate

**Oroantral Communication:**
- Risk: 0.2-0.9% upper molar extractions
- Diagnosis: Valsalva test, nose blow
- Immediate closure if <2mm
- Delayed closure if larger

**Nerve Injury:**
- Inferior alveolar nerve: Mandibular extractions
- Lingual nerve: Third molar surgery
- Mental nerve: Premolar extractions
- Most injuries: Temporary (<6 months)
- Persistent: Rare

## Healing and Ridge Preservation

**Normal Healing:**
- Blood clot → Granulation → Connective tissue → Bone
- Ridge resorption: 40-60% width in first year
- Greater resorption in buccal plate

**Socket Preservation:**
- Bone graft into socket
- Membrane coverage
- Reduces ridge resorption
- Facilitates future prosthesis

**Soft Tissue Considerations:**
- Primary closure vs. secondary intention
- Kissing vermilion
- Buccal vestibule depth
- Scar formation

## Special Considerations

**Medically Complex Patients:**
- Antibiotic prophylaxis (cardiac, joint)
- Anticoagulant management
- Bisphosphonate risk
- Radiation history
- Diabetes control

**Pregnancy:**
- Second trimester best for urgent extractions
- Elective extractions deferred
- Radiographs with shielding

**Geriatric Patients:**
- Brittle bones, fracture risk
- Slower healing
- Medication interactions
- Comorbidities

**Pediatric Patients:**
- Primary tooth extraction
- Space maintenance
- Supernumerary teeth
- Ectopic eruption

**Anticoagulant/Antiplatelet Therapy:**
- Warfarin: Continue if INR <3.5
- DOACs: Continue for simple extractions
- Antiplatelets: Continue
- Consult physician for complex cases

## Replacement Options

**Why Replace Extracted Teeth:**
- Prevent drift, supraeruption
- Maintain function
- Prevent bone loss
- Esthetics

**Options:**
- Implant
- Bridge
- Partial denture
- No replacement (sometimes appropriate)`,
      keyTerms: [
        { term: 'ankylosis', definition: 'Fusion of tooth to bone without periodontal ligament' },
        { term: 'oroantral communication', definition: 'Opening between mouth and maxillary sinus' },
        { term: 'DOACs', definition: 'Direct oral anticoagulants; novel anticoagulants' },
        { term: 'supraeruption', definition: 'Eruption of opposing tooth into extraction space' },
      ],
      analogies: [
        'The alveolar bone is like an egg shell - thin in some places, easy to fracture',
        'Root sectioning is like cutting a tree into logs before removing - easier removal',
      ],
      clinicalNotes: 'Maxillary sinus proximity to roots - risk of oroantral communication. Inferior alveolar nerve risk with mandibular extractions. Dry socket most common complication. Anticoagulants generally continued. Socket preservation reduces ridge resorption for future implants.',
      patientCounselingPoints: [
        'Wisdom teeth often cause problems - extraction often recommended even if asymptomatic',
        'Postoperative instructions are critical for healing - follow them carefully',
        'Some discomfort is normal for several days after extraction',
        'Replacing extracted teeth prevents shifting of other teeth',
      ],
    },
    4: {
      level: 4,
      summary: 'Modern exodontia incorporates piezoelectric surgery, PRF for enhanced healing, ridge preservation techniques, and advanced imaging for surgical planning. Complications are minimized with proper technique.',
      explanation: `## Advanced Techniques

**Piezoelectric Surgery:**
- Ultrasonic bone removal
- Selective for mineralized tissue
- Soft tissue preservation
- Reduced trauma
- Faster healing

**Platelet-Rich Fibril (PRF):**
- Autologous concentrate
- Accelerates healing
- Reduces complications
- Decreased pain
- Placed in socket after extraction

**Ridge Preservation:**
- Bone graft into socket
- Barrier membrane
- Reduces resorption
- Facilitates implant placement
- Cost-benefit considerations

**Computer-Guided Surgery:**
- CBCT planning
- Surgical guides
- Precise removal
- Nerve avoidance
- Minimally invasive

**Botox for Bruxism:**
- Post-extraction muscle relaxation
- Prevents trauma
- Facilitates healing
- Reduces trismus

## Complex Extractions

**Ankylosed Teeth:**
- Difficult to remove
- Bone removal required
- Sectioning may help
- Risk of fracture

**Supernumerary Teeth:**
- Mesiodens
- Distomolars
- Paramolars
- Surgical removal

**Root Canal Treated Teeth:**
- Brittle roots
- Fracture risk
- May section roots
- Preserve buccal plate

**Teeth with Crowns:**
- Fracture risk
- Crown separation
- Periotome useful
- Crown may be removed first

**Hypercementosis:**
- Excess cementum
- Wedge-shaped roots
- Difficult removal
- Bone removal needed

## Prevention of Complications

**Preoperative Planning:**
- CBCT for complex cases
- Identify risk factors
- Medical optimization
- Patient counseling

**Intraoperative Techniques:**
- Minimally traumatic
- Preserve buccal plate
- Proper flap design
- Careful bone removal

**Postoperative Care:**
- Medications: NSAIDs, analgesics
- Chlorhexidine rinses
- Patient education
- Follow-up appointments

## Evidence-Based Practice

**Antibiotics:**
- Not indicated for routine extractions
- Indicated for: Immunocompromised, acute infection, extensive surgery
- Single dose vs. multi-day varies

**Antibiotic Prophylaxis:**
- High-risk cardiac conditions: Amoxicillin 2g pre-op
- Prosthetic joints: Not routinely recommended (2017 AHA guidelines)
- Individualized based on risk

**Pain Management:**
- NSAIDs first-line
- Preemptive analgesia
- Opioids rarely needed
- Multimodal approach

**Suturing:**
- Not always needed for simple extractions
- Indicated for: Surgical extractions, soft tissue manipulation
- Materials: Chromic gut, vicryl, nylon

## Special Populations

**Bisphosphonate Patients:**
- MRONJ risk
- Conservative approach
- Avoid extraction if possible
- Antibiotic prophylaxis
- Refer to oral surgeon

**Radiation Therapy:**
- Osteoradionecrosis risk
- Extractions in field: High risk
- Preventive extractions pre-radiation
- Hyperbaric oxygen may help

**Organ Transplant:**
- Infection risk to patient
- Evaluate oral health pre-transplant
- Treat infections aggressively
- May extract compromised teeth

**Anticoagulant Therapy:**
- Warfarin: Continue if INR <3.5
- DOACs: Continue for simple
- Bridge therapy rarely needed
- Local hemostasis usually sufficient`,
      keyTerms: [
        { term: 'MRONJ', definition: 'Medication-related osteonecrosis of the jaw' },
        { term: 'osteoradionecrosis', definition: 'Bone necrosis from radiation therapy' },
      ],
      clinicalNotes: 'PRF improves healing outcomes. Piezoelectric surgery reduces trauma. Ridge preservation valuable for implant sites. Antibiotics not routinely indicated. Anticoagulants usually continued. MRONJ: avoid extractions if possible.',
    },
    5: {
      level: 5,
      summary: 'The future of exodontia includes regenerative approaches, socket engineering, minimally invasive techniques, and AI-driven surgical planning. Tissue engineering may enable predictable ridge regeneration.',
      explanation: `## Emerging Technologies

**Socket Engineering:**
- Scaffold materials
- Growth factor delivery
- Stem cell applications
- Predictable regeneration

**Minimally Invasive Techniques:**
- Piezoelectric advancement
- Laser applications
- Flapless surgery
- Reduced morbidity

**Healing Enhancement:**
- PRF, CGF, L-PRF
- Growth factors
- Stem cell recruitment
- Biological mediators

**Digital Integration:**
- 3D planning
- Surgical guides
- Navigation
- Outcome prediction

## Clinical Practice Evolution

**Preventive Extractions:**
- Risk assessment
- Prophylactic removal
- Pathology prevention
- Evidence-based decisions

**Interprofessional Care:**
- Medical management
- Anesthesia considerations
- Specialist referral
- Team-based treatment

## Research Directions**

**Regenerative Approaches:**
- Socket preservation
- Ridge augmentation
- Soft tissue engineering
- Biological mediators

**Technique Refinement:**
- Minimally traumatic
- Faster healing
- Reduced complications
- Patient comfort

**Evidence-Based Protocols:**
- Medication protocols
- Follow-up schedules
- Complication management
- Refinement based on outcomes`,
      keyTerms: [],
      clinicalNotes: `Future practice:
1. PRF will become standard for socket healing
2. Ridge preservation more common for implant sites
3. Digital planning for complex cases
4. Minimally invasive techniques reduce morbidity`,
    },
  },

  media: [
    {
      id: 'extraction-instrument',
      type: 'diagram',
      filename: 'extraction-instruments.svg',
      title: 'Extraction Instruments',
      description: 'Forceps and elevators used for tooth extraction',
    },
  ],

  citations: [
    {
      id: 'peterson-extractions',
      type: 'textbook',
      title: 'Contemporary Oral and Maxillofacial Surgery',
      authors: ['Peterson, L.J.', 'Ellis, E.', 'Hupp, J.R.'],
      source: 'Elsevier',
      chapter: 'Chapters 8-10',
    },
  ],

  crossReferences: [
    { targetId: 'procedure-root-canal-therapy', targetType: 'topic', relationship: 'related', label: 'Root Canal' },
    { targetId: 'procedure-dental-implants', targetType: 'topic', relationship: 'related', label: 'Dental Implants' },
    { targetId: 'topic-dental-emergencies', targetType: 'topic', relationship: 'related', label: 'Dental Emergencies' },
  ],

  tags: {
    systems: ['dental'],
    structures: ['alveolar-bone', 'teeth', 'sinus'],
    topics: ['oral-surgery', 'treatment', 'healing'],
    keywords: ['extraction', 'exodontia', 'impaction', 'wisdom teeth', 'dry socket', 'complications'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: false,
      nbme: false,
      shelf: [],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default extractions;
