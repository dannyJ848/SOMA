import { EducationalContent } from '../../../types';

export const commonFractureTypes: EducationalContent = {
  id: 'ortho-common-fracture-types',
  type: 'condition',
  name: 'Common Fracture Types and Classification',
  nameEs: 'Tipos comunes de fracturas y clasificacion',
  alternateNames: ['Bone fractures', 'Fracture classification', 'AO/OTA classification'],

  levels: {
    1: {
      level: 1,
      summary: 'Bones can break in different patterns depending on how the injury happens. Doctors classify fractures to decide the best treatment.',
      explanation: `A fracture is a break in a bone. There are many types:

**Simple (Closed) Fracture:** The bone breaks but does not come through the skin.
**Open (Compound) Fracture:** The bone breaks through the skin — this is an emergency.
**Stress Fracture:** A tiny crack from repeated use, common in runners.
**Hairline Fracture:** A very thin crack that may not show up on the first X-ray.
**Greenstick Fracture:** The bone bends and cracks on one side (mostly in children).
**Comminuted Fracture:** The bone shatters into three or more pieces.

**When to go to the ER:**
- You cannot move the injured area
- The bone is poking through the skin
- The area looks crooked or deformed
- Severe swelling or numbness below the injury`,
      keyTerms: [
        { term: 'fracture', definition: 'A break or crack in a bone' },
        { term: 'closed fracture', definition: 'A broken bone that stays under the skin' },
        { term: 'open fracture', definition: 'A broken bone that pokes through the skin' },
      ],
      analogies: ['Think of bones like a dry stick — they can snap cleanly, splinter, or bend and crack depending on how force is applied.'],
      patientCounselingPoints: ['Seek emergency care if the bone is visible through the skin or the limb looks deformed.', 'Most fractures heal well with proper treatment, usually within 6-8 weeks.'],
    },
    2: {
      level: 2,
      summary: 'Fractures are classified by their pattern, location, and whether the skin is broken. Classification guides treatment decisions.',
      explanation: `Fractures are described by several features:

**By pattern:** Transverse (straight across), oblique (angled), spiral (twisting), comminuted (shattered), segmental (two breaks creating a free fragment), avulsion (tendon pulls off bone chip).

**By displacement:** Non-displaced (bones still aligned) vs. displaced (bone fragments shifted). Displacement is measured in millimeters or percentage of bone width.

**By skin integrity:** Closed (skin intact) vs. open/compound (bone exposed). Open fractures are graded I-III (Gustilo-Anderson) by wound size and contamination.

**By stability:** Stable fractures maintain alignment; unstable fractures tend to shift.

**Special types:**
- **Pathologic fracture:** Bone breaks through a weak spot (tumor, osteoporosis)
- **Stress fracture:** Overuse injury from repetitive loading
- **Growth plate fracture (Salter-Harris):** In children, classified Types I-V`,
      keyTerms: [
        { term: 'comminuted', definition: 'A fracture where bone breaks into three or more pieces' },
        { term: 'displaced', definition: 'When broken bone ends are not aligned properly' },
        { term: 'Gustilo-Anderson', definition: 'Classification system for open fractures based on wound severity' },
        { term: 'avulsion fracture', definition: 'A fragment of bone pulled away by a tendon or ligament' },
      ],
      examples: ['A spiral fracture of the tibia from a skiing injury where the foot is fixed while the body rotates.'],
    },
    3: {
      level: 3,
      summary: 'Fracture classification systems (AO/OTA, Gustilo-Anderson, Salter-Harris) provide standardized descriptions that guide management and predict outcomes.',
      explanation: `**AO/OTA Classification:**
The most widely used system. Fractures are coded by bone (1=humerus, 2=radius/ulna, 3=femur, 4=tibia/fibula), segment (1=proximal, 2=diaphysis, 3=distal), and type (A=simple, B=wedge, C=complex). Example: 42-B1 is a tibial shaft wedge fracture.

**Gustilo-Anderson Open Fracture Classification:**
- Type I: Clean wound <1 cm, minimal soft tissue damage
- Type II: Wound 1-10 cm, moderate soft tissue injury
- Type IIIA: Adequate soft tissue coverage despite extensive injury
- Type IIIB: Extensive soft tissue loss requiring flap coverage
- Type IIIC: Arterial injury requiring repair

**Fracture Healing Phases:**
1. Inflammatory (days 1-7): Hematoma formation, cytokine release
2. Soft callus (weeks 2-3): Cartilaginous callus forms
3. Hard callus (weeks 3-12): Woven bone replaces cartilage
4. Remodeling (months to years): Wolff's law reshapes bone along stress lines

**Factors affecting healing:** Blood supply, fracture stability, infection, smoking, diabetes, NSAIDs (controversial), nutritional status.`,
      keyTerms: [
        { term: 'AO/OTA classification', definition: 'Alphanumeric system for classifying fractures by bone, segment, and pattern' },
        { term: 'Wolff\'s law', definition: 'Bone remodels along lines of mechanical stress' },
        { term: 'callus', definition: 'New bone tissue that forms at a fracture site during healing' },
        { term: 'nonunion', definition: 'Failure of a fracture to heal, typically defined as no progress after 9 months' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced fracture management requires understanding of biomechanical principles, fixation strategies, and complication prevention including compartment syndrome and fat embolism.',
      explanation: `**Biomechanical Principles of Fixation:**
- Absolute stability (compression plating): anatomic reduction with rigid fixation for articular fractures — primary bone healing without callus
- Relative stability (intramedullary nailing, bridge plating): allows micro-motion promoting secondary healing with callus formation
- Locking plates: fixed-angle devices acting as internal external fixators, ideal for osteoporotic bone and periarticular fractures

**Emergency Fracture Complications:**
- **Compartment syndrome:** Pressure within a fascial compartment exceeds perfusion pressure. The 6 P's (Pain out of proportion, Pain with passive stretch, Pressure, Paresthesias, Pallor, Pulselessness — late). Diagnosis is clinical; compartment pressure >30 mmHg or within 30 mmHg of diastolic (delta pressure) requires emergent fasciotomy.
- **Fat embolism syndrome:** 24-72 hours post long bone fracture. Classic triad: respiratory distress, neurological changes, petechial rash. Supportive treatment.
- **Neurovascular injury:** Assess distal pulses and sensation. Midshaft humerus fracture risks radial nerve; supracondylar humerus risks brachial artery and median nerve.

**Delayed Union and Nonunion:**
Risk factors include smoking, infection, insufficient blood supply, inadequate fixation, and gap at fracture site. Treatment: revision fixation, bone grafting, or biologics (BMP-2, BMP-7).`,
      keyTerms: [
        { term: 'compartment syndrome', definition: 'Elevated pressure within a closed fascial compartment compromising tissue perfusion' },
        { term: 'fat embolism syndrome', definition: 'Systemic release of fat globules after long bone fracture causing respiratory and neurological compromise' },
        { term: 'delta pressure', definition: 'Diastolic blood pressure minus compartment pressure; <30 mmHg suggests compartment syndrome' },
        { term: 'locking plate', definition: 'Fixed-angle construct where screws lock into the plate, functioning as an internal external fixator' },
      ],
      clinicalNotes: 'Compartment syndrome is a clinical diagnosis — do not delay fasciotomy waiting for pressure measurements if clinical suspicion is high.',
    },
    5: {
      level: 5,
      summary: 'Fracture management at the professional level integrates AO principles, damage control orthopedics, biologics, and evidence-based protocols for polytrauma and complex reconstruction.',
      explanation: `**Damage Control Orthopedics (DCO):**
In polytrauma patients, early total care (definitive fixation within 24h) may trigger a "second hit" inflammatory response. DCO uses temporary external fixation to stabilize long bone and pelvic fractures, converting to definitive fixation when the patient is physiologically optimized (typically day 5-10). Indications: ISS >20, bilateral femur fractures, pulmonary contusion, hemodynamic instability.

**Periprosthetic Fractures:**
Increasingly common with aging population. Vancouver classification (femur around hip prosthesis): Type A (trochanteric), B1 (around stem, prosthesis stable), B2 (around stem, prosthesis loose), B3 (loose prosthesis with poor bone stock), C (below prosthesis). B2 and B3 typically require revision arthroplasty.

**Biologics and Augmentation:**
- Autologous bone graft (iliac crest): gold standard, provides osteogenic, osteoinductive, and osteoconductive properties
- BMP-2 (INFUSE): FDA-approved for open tibial fractures and spinal fusion; off-label use controversial
- Platelet-rich plasma: equivocal evidence for fracture healing acceleration
- Low-intensity pulsed ultrasound (LIPUS): modest evidence for delayed unions

**Current Evidence and Controversies:**
- SPRINT trial: reamed IM nailing superior to unreamed for closed tibial shaft fractures
- FAITH trial: sliding hip screw vs. cancellous screws for femoral neck fractures — no significant difference in revision rates
- NSAIDs and fracture healing: animal data shows impairment, human data is less clear; short-course (<2 weeks) likely safe`,
      keyTerms: [
        { term: 'damage control orthopedics', definition: 'Staged approach using temporary fixation in polytrauma, converting to definitive fixation when physiologically stable' },
        { term: 'Vancouver classification', definition: 'System for classifying periprosthetic femur fractures based on location and prosthesis stability' },
        { term: 'osteoinductive', definition: 'Ability to recruit and stimulate mesenchymal stem cells to differentiate into osteoblasts' },
        { term: 'second hit', definition: 'Additional inflammatory insult from major surgery compounding the initial trauma response' },
      ],
      clinicalNotes: 'In polytrauma, coordinate with trauma surgery for DCO timing. The "window of opportunity" for definitive fixation is typically days 5-10 after initial resuscitation.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-ao-principles', type: 'textbook', title: 'AO Principles of Fracture Management', source: 'Ruedi TP, Buckley RE, Moran CG. Thieme, 3rd ed.', license: 'Proprietary' },
    { id: 'cit-rockwood', type: 'textbook', title: 'Rockwood and Green\'s Fractures in Adults', source: 'Bucholz RW et al. Wolters Kluwer, 9th ed.', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-fracture-management', targetType: 'topic', relationship: 'related', label: 'Fracture Management Approaches' },
    { targetId: 'ortho-compartment-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Compartment Syndrome' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'fractures'],
    keywords: ['AO classification', 'Gustilo-Anderson', 'compartment syndrome', 'fracture healing', 'damage control orthopedics'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default commonFractureTypes;
