import { EducationalContent } from '../../types';

export const fractureFixationContent: EducationalContent = {
  id: 'ortho-patient-fracture-fixation',
  type: 'concept',
  name: 'Fracture Fixation',
  alternateNames: ['Broken bone surgery', 'ORIF', 'Internal fixation', 'Fracture repair'],

  levels: {
    1: {
      level: 1,
      summary: 'When a broken bone cannot heal properly on its own, surgery uses metal plates, screws, rods, or pins to hold the bone pieces together while they heal.',
      explanation: `Sometimes a broken bone needs surgery to heal correctly. Fracture fixation surgery holds the broken pieces in the right position so they can heal together.

**Why Surgery Might Be Needed:**
- Bones are not lined up correctly
- Bones moved out of place
- Bone came through the skin (open fracture)
- Joint is involved
- Bone would not heal well in a cast

**Types of Fixation:**

*Plates and Screws:*
- Metal plate attached to bone surface
- Screws hold plate to bone
- Common for arm and leg fractures

*Rods/Nails:*
- Metal rod placed inside the bone
- Common for thigh and shin fractures
- Allows early weight bearing sometimes

*Pins and Wires:*
- Smaller pieces to hold bone fragments
- Often used for fingers, toes, wrist

*External Fixators:*
- Metal frame outside the body
- Pins go through skin into bone
- Used for severe injuries or while waiting for swelling to decrease

**After Surgery:**

*What to expect:*
- Some pain and swelling (normal)
- Wound care instructions
- Activity restrictions
- Physical therapy when appropriate
- Follow-up X-rays to check healing

*Healing time:*
- Most fractures: 6-12 weeks
- Some complex fractures: 3-6 months
- Follow your doctor's instructions carefully

**Will the Hardware Be Removed?**
- Usually stays in permanently
- Only removed if causing problems
- Removal is another surgery

**Signs of Problems (Call Your Doctor):**
- Increasing pain or swelling
- Fever
- Wound redness, drainage, or opening
- Numbness or tingling that's new
- Inability to move fingers or toes`,
      keyTerms: [
        { term: 'fracture', definition: 'A broken bone' },
        { term: 'fixation', definition: 'Using metal hardware to hold broken bones in place' },
        { term: 'open fracture', definition: 'A break where the bone comes through the skin' },
      ],
      analogies: [
        'Plates and screws work like a splint inside your body, holding the bone still while it heals.',
        'A rod inside the bone is like a support beam in a building, providing internal strength.',
      ],
      examples: [
        'A badly broken ankle often needs plates and screws to heal in the correct position.',
        'A broken thigh bone (femur) is usually fixed with a metal rod placed down the center of the bone.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fracture fixation encompasses various surgical techniques including plates, intramedullary nails, and external fixation, selected based on fracture pattern, location, patient factors, and goals of treatment.',
      explanation: `Surgical fracture treatment aims to restore anatomy, provide stability for healing, and allow early function when possible.

**Indications for Surgery:**
- Displacement that cannot be maintained in cast
- Articular (joint) involvement
- Open fractures
- Multiple injuries (polytrauma)
- Patient factors favoring early mobilization

**Fixation Methods:**

*Plates and Screws (ORIF):*
- Open reduction: Surgically exposing the fracture
- Internal fixation: Applying hardware
- Plates: Locking vs. non-locking designs
- Anatomic reduction of joint surfaces
- Common locations: Distal radius, ankle, proximal humerus

*Intramedullary Nailing:*
- Rod placed in medullary canal
- Load-sharing device
- Often allows early weight bearing
- Common: Femur, tibia shaft fractures
- Locked vs. unlocked nails

*External Fixation:*
- Pins/wires connected to external frame
- Temporary: Damage control, soft tissue recovery
- Definitive: Some fractures, limb lengthening
- Can adjust alignment after placement

*Percutaneous Pinning:*
- Small incisions, wire/pin fixation
- Less soft tissue disruption
- Common: Pediatric fractures, some wrist fractures

**Choosing a Method:**

| Fracture Type | Common Method |
|---------------|---------------|
| Long bone shaft | Intramedullary nail |
| Periarticular | Plate fixation |
| Severe soft tissue | External fixation |
| Pediatric | Closed reduction, pins |

**Bone Healing Biology:**
- Inflammatory phase: Days 1-7
- Soft callus: Weeks 2-3
- Hard callus: Weeks 4-16
- Remodeling: Months to years

**Complications:**

*Early:*
- Infection
- Hardware failure
- Nerve or vessel injury
- Compartment syndrome

*Late:*
- Nonunion (bone doesn't heal)
- Malunion (heals in wrong position)
- Hardware prominence
- Post-traumatic arthritis`,
      keyTerms: [
        { term: 'ORIF', definition: 'Open Reduction Internal Fixation; surgery to realign and fix fractures' },
        { term: 'intramedullary', definition: 'Within the bone marrow cavity', pronunciation: 'in-truh-MED-yoo-lar-ee' },
        { term: 'nonunion', definition: 'When a fracture fails to heal after expected time' },
        { term: 'malunion', definition: 'When a fracture heals in an incorrect position' },
      ],
      analogies: [
        'Intramedullary nails work like tent poles inside the bone.',
        'External fixators are like scaffolding around a building under construction.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fracture fixation principles balance anatomic reduction, stable fixation, and soft tissue preservation, with implant selection guided by fracture personality, bone quality, and patient factors.',
      explanation: `Fracture management integrates mechanical and biological principles to optimize healing and functional outcomes.

**AO Principles of Fracture Fixation:**
1. Anatomic reduction (especially for articular fractures)
2. Stable fixation appropriate to fracture and patient
3. Preservation of blood supply to bone and soft tissues
4. Early, safe mobilization

**Fixation Biomechanics:**

*Absolute stability:*
- Interfragmentary compression
- No motion at fracture site
- Primary bone healing (direct remodeling)
- Achieved with lag screws, compression plates

*Relative stability:*
- Controlled motion at fracture site
- Secondary healing (callus formation)
- Bridge plating, nailing
- Appropriate for diaphyseal fractures

**Plate Technology:**

*Conventional plates:*
- Friction-based stability
- Require bone-plate contact
- Periosteal compression

*Locking plates:*
- Fixed-angle screws
- No need for bone-plate contact
- Better in osteoporotic bone
- Acts as internal external fixator

*Applications:*
- Periarticular fractures: Locking plates
- Diaphyseal: Either, depending on fracture
- Poor bone quality: Locking plates preferred

**Intramedullary Nailing:**

*Principles:*
- Load-sharing device
- Preserves fracture hematoma (biology)
- Often closed or mini-open insertion
- Interlocking screws control rotation, length

*Reaming:*
- Enlarged canal fits larger nail
- May compromise endosteal blood supply
- Reamed: Better for delayed union
- Unreamed: Less biological damage

**Open Fracture Management:**

*Gustilo classification:*
- Type I: <1cm wound, clean
- Type II: 1-10cm wound, minimal contamination
- Type III: >10cm, high energy, contamination
  - IIIA: Adequate soft tissue coverage
  - IIIB: Requires flap coverage
  - IIIC: Vascular injury requiring repair

*Principles:*
- Urgent irrigation and debridement
- Antibiotics (timing critical)
- Stabilization (often external fixation initially)
- Soft tissue coverage plan
- Definitive fixation when safe

**Implant Selection:**

| Factor | Consideration |
|--------|---------------|
| Fracture location | Joint vs. shaft |
| Fracture pattern | Simple vs. comminuted |
| Bone quality | Osteoporosis affects choice |
| Soft tissue | Extensive damage may limit options |
| Patient factors | Activity, compliance |`,
      keyTerms: [
        { term: 'lag screw', definition: 'Screw technique providing interfragmentary compression' },
        { term: 'bridge plating', definition: 'Plate spanning comminuted fracture without reducing fragments' },
        { term: 'Gustilo classification', definition: 'Grading system for open fractures based on wound and injury severity' },
        { term: 'callus', definition: 'New bone formed during fracture healing' },
      ],
      clinicalNotes: 'The treatment principle is "fracture personality" - simple fractures may benefit from absolute stability, while comminuted fractures often heal better with relative stability preserving the blood supply to fragments.',
    },
    4: {
      level: 4,
      summary: 'Fracture fixation requires integration of biomechanical principles, soft tissue assessment, and patient-specific factors to select optimal constructs and prevent complications including infection and nonunion.',
      explanation: `Advanced fracture management requires synthesis of mechanical principles, biology, and clinical decision-making.

**Fracture Personality Assessment:**

*Mechanical factors:*
- Energy of injury
- Fracture pattern (simple, wedge, comminuted)
- Articular involvement
- Bone quality
- Associated injuries

*Soft tissue factors:*
- Open vs. closed
- Degloving, contusion
- Timing for surgery
- Coverage requirements

**Biomechanical Constructs:**

*Absolute stability indications:*
- Articular fractures requiring anatomic reduction
- Simple diaphyseal patterns
- Achieved by:
  - Lag screws
  - Compression plating
  - Results in primary healing

*Relative stability indications:*
- Comminuted diaphyseal fractures
- Metaphyseal-diaphyseal junction
- Achieved by:
  - Bridge plating
  - Intramedullary nailing
  - External fixation
  - Results in secondary healing (callus)

**Advanced Techniques:**

*Minimally invasive plate osteosynthesis (MIPO):*
- Submuscular plate insertion
- Small incisions proximally and distally
- Preserves fracture biology
- Indirect reduction techniques

*Percutaneous screw fixation:*
- Image-guided screw placement
- Minimal soft tissue disruption
- Appropriate for specific fracture patterns

*Damage control orthopedics:*
- Temporary external fixation
- Polytrauma patients
- Allows resuscitation
- Definitive fixation when stable

**Complications Management:**

*Infection:*
- Prevention: Antibiotics, technique, soft tissue care
- Early recognition crucial
- Treatment: Debridement, antibiotics, possibly hardware removal
- Deep infection: May require staged treatment

*Nonunion:*
- Definition: No healing by 9 months
- Types: Hypertrophic, atrophic
- Risk factors: Smoking, diabetes, NSAID use, inadequate fixation
- Treatment: Address cause, revise fixation, bone graft

*Malunion:*
- Healing in unacceptable position
- May require corrective osteotomy
- Prevention through adequate reduction

**Decision-Making Framework:**

*Timing:*
- Open fractures: Urgent surgery
- Hip fractures: Within 24-48 hours
- Closed fractures: When soft tissues permit
- Polytrauma: Damage control vs. definitive

*Implant selection:*
- Fracture pattern guides choice
- Bone quality affects screw purchase
- Soft tissues may limit approach
- Patient factors (compliance, activity)`,
      keyTerms: [
        { term: 'MIPO', definition: 'Minimally Invasive Plate Osteosynthesis; submuscular plate insertion' },
        { term: 'damage control orthopedics', definition: 'Temporary stabilization in polytrauma before definitive surgery' },
        { term: 'hypertrophic nonunion', definition: 'Nonunion with adequate biology but insufficient stability' },
        { term: 'atrophic nonunion', definition: 'Nonunion with poor biology requiring bone grafting' },
      ],
      clinicalNotes: 'The decision between absolute and relative stability is crucial. Attempting anatomic reduction of comminuted fractures often damages blood supply and leads to nonunion. Bridge plating or nailing with length/alignment/rotation restoration is preferred.',
    },
    5: {
      level: 5,
      summary: 'Contemporary fracture fixation integrates precision reduction techniques, biologically friendly implants, and multimodal healing enhancement while addressing complex scenarios and optimizing outcomes through evidence-based protocols.',
      explanation: `Expert fracture management requires synthesis of evolving technology, biological principles, and complex clinical decision-making.

**Evolution of Fixation Philosophy:**

*Historical:*
- Absolute stability paradigm
- Anatomic reduction emphasized
- Extensive exposure

*Current:*
- Biology prioritized for shaft fractures
- Minimally invasive techniques
- Fracture-specific approach
- Relative vs. absolute stability based on fracture type

**Advanced Constructs:**

*Variable angle locking:*
- Polyaxial screw placement
- Improved periarticular fixation
- Better capture of small fragments

*Angle-stable nails:*
- Address angular instability
- Useful in metaphyseal fractures
- Expanding indications

*Fragment-specific fixation:*
- Address each articular fragment
- Wrist fracture applications
- Allows early motion

**Biologics Integration:**

*Bone grafting:*
- Autograft: Gold standard (iliac crest)
- Allograft: No donor site morbidity
- Bone substitutes: Synthetic options
- BMP: Indications and controversies

*Augmentation:*
- Cement augmentation for poor bone
- Calcium phosphate cements
- Screw purchase enhancement

**Complex Fracture Management:**

*Periarticular fractures:*
- Anatomic articular reduction essential
- Metaphyseal component may be bridged
- Staged protocols for severe soft tissue

*Geriatric fractures:*
- Often osteoporotic bone
- Locking plates preferred
- Consider augmentation
- Early mobilization priority

*Polytrauma:*
- Damage control orthopedics
- Lactate-guided decision-making
- Inflammatory response management
- Staged definitive care

*Periprosthetic fractures:*
- Around implants
- Unique classification systems
- May require revision arthroplasty
- Specialized plates available

**Infection Prevention:**

*Bundle approach:*
- Prophylactic antibiotics (timing)
- Chlorhexidine prep
- Laminar flow (evidence debated)
- Normothermia maintenance
- Glycemic control

**Outcome Optimization:**

*Predictive factors:*
- Injury severity
- Patient factors (smoking, diabetes)
- Soft tissue compromise
- Reduction quality
- Implant choice

*Monitoring:*
- Radiographic union
- Clinical assessment
- Patient-reported outcomes
- Return to function

**Research Directions:**

*Current:*
- Optimal timing of surgery
- Minimally invasive vs. open
- Locking vs. conventional plates
- Nail vs. plate for specific fractures

*Emerging:*
- Smart implants (load sensing)
- Biodegradable implants
- Tissue engineering
- AI for surgical planning`,
      keyTerms: [
        { term: 'fragment-specific fixation', definition: 'Strategy addressing individual articular fragments with specific implants' },
        { term: 'periprosthetic fracture', definition: 'Fracture occurring around a joint replacement implant' },
        { term: 'BMP', definition: 'Bone Morphogenetic Protein; growth factor promoting bone healing' },
        { term: 'damage control orthopedics', definition: 'Staged approach with temporary fixation in polytrauma' },
      ],
      clinicalNotes: `**Key Practice Principles:**

1. **Assess fracture personality:**
   - Energy of injury
   - Fracture pattern
   - Soft tissue status
   - Bone quality
   - Patient factors

2. **Match fixation to fracture:**
   - Articular: Anatomic reduction, absolute stability
   - Shaft comminuted: Bridge, relative stability
   - Simple shaft: Either approach can work
   - Consider soft tissues in planning

3. **Respect biology:**
   - Minimize soft tissue stripping
   - Consider MIPO techniques
   - Preserve fracture hematoma when possible
   - Avoid unnecessary exposure

4. **Optimize for patient:**
   - Early mobilization when possible
   - Consider bone quality in implant selection
   - Address comorbidities (smoking, diabetes)
   - Set realistic expectations

5. **Prevent complications:**
   - Antibiotic timing
   - Infection bundles
   - DVT prophylaxis
   - Compartment syndrome awareness

**Decision Framework:**
1. Classify fracture
2. Assess soft tissues
3. Select fixation principle (absolute vs. relative)
4. Choose optimal implant
5. Plan approach and timing
6. Execute with attention to biology
7. Protocol-driven rehabilitation`,
    },
  },

  media: [
    {
      id: 'fixation-types',
      type: 'diagram',
      filename: 'fracture-fixation-types.svg',
      title: 'Types of Fracture Fixation',
      description: 'Illustration of plates, screws, nails, and external fixation',
    },
  ],
  citations: [
    {
      id: 'ao-principles',
      type: 'textbook',
      title: 'AO Principles of Fracture Management',
      source: 'AO Foundation',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-fractures', targetType: 'condition', relationship: 'related', label: 'Fractures' },
    { targetId: 'ortho-patient-recovery-timelines', targetType: 'topic', relationship: 'related', label: 'Recovery Timelines' },
    { targetId: 'ortho-patient-physical-therapy-expectations', targetType: 'topic', relationship: 'related', label: 'Physical Therapy' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['surgery', 'fractures', 'trauma'],
    keywords: ['fracture fixation', 'ORIF', 'plates', 'screws', 'nailing'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fractureFixationContent;
