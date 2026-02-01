import { EducationalContent } from '../../../types';

export const fractureManagementPrinciples: EducationalContent = {
  id: 'ortho-fracture-management-principles',
  type: 'topic',
  name: 'Fracture Management Principles',
  nameEs: 'Principios de manejo de fracturas',
  alternateNames: ['Fracture fixation', 'Orthopedic reduction', 'Casting and splinting'],

  levels: {
    1: {
      level: 1,
      summary: 'Broken bones are treated by putting them back in the right position and keeping them still so they can heal. This may use a cast, splint, or sometimes surgery.',
      explanation: `When you break a bone, the doctor needs to do two things:
1. **Put the bones back in place** (reduction)
2. **Keep them still while they heal** (immobilization)

**Non-Surgical Treatment:**
- **Splints:** A half-cast that allows for swelling, used right after injury
- **Casts:** A full wrap that holds the bone firmly in place for weeks
- **Slings and braces:** For some shoulder, elbow, or wrist fractures

**When Surgery Is Needed:**
- The bones cannot be lined up from the outside
- The fracture goes into a joint
- The bone came through the skin (open fracture)
- Blood vessels or nerves are damaged

**What to Expect During Healing:**
- Most fractures take 6-8 weeks to heal
- You will have follow-up X-rays to check progress
- Physical therapy helps you regain strength and movement`,
      keyTerms: [
        { term: 'reduction', definition: 'Putting broken bone pieces back in the right position' },
        { term: 'cast', definition: 'A hard shell that keeps a broken bone from moving while it heals' },
        { term: 'splint', definition: 'A partial cast that supports the bone but allows for swelling' },
      ],
      patientCounselingPoints: ['Keep the cast dry and elevated above your heart to reduce swelling.', 'Wiggle your fingers or toes to maintain circulation.', 'Call your doctor if you have increasing pain, numbness, or the cast feels too tight.'],
    },
    2: {
      level: 2,
      summary: 'Fracture management follows a principle of reduction, immobilization, and rehabilitation. Treatment choice depends on fracture pattern, location, and patient factors.',
      explanation: `**Closed Reduction:** The doctor manipulates the bone back into position without surgery, often under local or conscious sedation. Success depends on the fracture pattern — transverse fractures hold reduction better than oblique or spiral fractures.

**Immobilization Methods:**
- Sugar-tong splints (allows swelling, used acutely)
- Short arm/leg casts (below joint)
- Long arm/leg casts (above and below the joint)
- Functional bracing (allows some motion)

**Surgical Fixation Types:**
- **Plates and screws:** Metal plate screwed to the bone surface
- **Intramedullary nail:** Metal rod placed inside the bone canal
- **External fixator:** Pins through skin connected to an external frame
- **Wires and pins (K-wires):** Thin metal wires for small bones or temporary fixation

**Rehabilitation Principles:**
- Early motion of unaffected joints prevents stiffness
- Weight bearing progresses from non-weight bearing to partial to full
- Physical therapy restores range of motion, strength, and function`,
      keyTerms: [
        { term: 'closed reduction', definition: 'Realigning a broken bone without surgery by manipulation' },
        { term: 'ORIF', definition: 'Open reduction internal fixation — surgery to realign and stabilize a fracture with hardware' },
        { term: 'intramedullary nail', definition: 'A metal rod placed inside the hollow center of a long bone to stabilize a fracture' },
        { term: 'external fixator', definition: 'A frame outside the body connected to bone by pins for temporary stabilization' },
      ],
    },
    3: {
      level: 3,
      summary: 'Fracture management decisions are guided by stability assessment, soft tissue condition, patient physiology, and biomechanical principles of fixation.',
      explanation: `**Decision-Making Framework:**
The choice between operative and nonoperative management depends on: fracture pattern and stability, articular involvement, soft tissue integrity, patient age and activity level, comorbidities (diabetes, smoking, osteoporosis), and associated injuries.

**Principles of Operative Fixation:**
- **Absolute stability** (lag screw, compression plate): No motion at fracture site. Required for intra-articular fractures. Primary bone healing without visible callus.
- **Relative stability** (IM nail, bridge plate, external fixator): Allows controlled micro-motion. Promotes secondary healing with callus. Used for diaphyseal fractures.

**Casting Science:**
- Three-point molding maintains reduction
- Appropriate padding prevents pressure sores
- Cast index (width/depth on lateral X-ray) predicts maintenance of reduction — ideal <0.8
- Fiberglass vs. plaster: fiberglass is lighter and stronger, plaster molds better initially

**Weight-Bearing Protocols:**
- TDWB (touch-down): 10-15% body weight
- PWB (partial): 25-50% body weight
- WBAT (weight bearing as tolerated): patient-guided
- FWB (full weight bearing): no restrictions

**Complications of Treatment:**
- Hardware failure, infection, malunion, nonunion, stiffness, complex regional pain syndrome (CRPS), DVT/PE`,
      keyTerms: [
        { term: 'absolute stability', definition: 'Fixation that eliminates motion at the fracture site, promoting primary bone healing' },
        { term: 'relative stability', definition: 'Fixation that allows controlled micro-motion, promoting secondary healing with callus' },
        { term: 'malunion', definition: 'Fracture that heals in a non-anatomic position with angulation, rotation, or shortening' },
        { term: 'cast index', definition: 'Ratio of cast width to depth on lateral X-ray; values >0.8 predict loss of reduction' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced fracture management integrates biomechanical constructs, biologic optimization, and complication prevention strategies including VTE prophylaxis and infection control.',
      explanation: `**Biomechanical Construct Design:**
Working length (distance between closest fixation points on either side of fracture) determines construct stiffness. Shorter working length = stiffer construct. Locking plates create a fixed-angle device acting as an internal external fixator — ideal for metaphyseal and osteoporotic bone where screw purchase is poor.

**Open Fracture Management Protocol (Gustilo-Anderson):**
1. IV antibiotics within 1 hour: cefazolin for Type I/II, add aminoglycoside for Type III, add penicillin if farm contamination
2. Tetanus prophylaxis
3. Wound irrigation and debridement (I&D) — urgently, within 6-24 hours (FLOW trial showed low-pressure lavage with saline equivalent to soap)
4. Skeletal stabilization (external fixation for severe, definitive fixation for mild)
5. Soft tissue coverage: primary closure for Type I, flap coverage for Type IIIB within 72 hours
6. Serial debridements every 48-72 hours as needed

**VTE Prophylaxis:**
Lower extremity and pelvic fractures carry high DVT risk. LMWH (enoxaparin 30mg BID or 40mg daily), aspirin 81mg BID (PREVENT trial showed non-inferiority to LMWH for fracture patients), or mechanical prophylaxis if anticoagulation contraindicated.

**Infection Prevention:**
Perioperative antibiotics (cefazolin within 60 min of incision, redose at 3-4 hours). Surgical site infection rates: closed fractures 1-2%, open Type I 2%, open Type IIIB 10-50%.`,
      keyTerms: [
        { term: 'working length', definition: 'Distance between closest points of fixation on each side of a fracture, determining construct stiffness' },
        { term: 'FLOW trial', definition: 'Landmark trial showing low-pressure lavage with saline is equivalent to castile soap for open fracture irrigation' },
        { term: 'PREVENT trial', definition: 'RCT demonstrating aspirin non-inferior to LMWH for VTE prophylaxis in orthopedic trauma' },
      ],
      clinicalNotes: 'Open fractures: give antibiotics in the ED immediately. The FLOW trial changed practice — low-pressure normal saline is the current standard for wound irrigation.',
    },
    5: {
      level: 5,
      summary: 'Professional-level fracture management encompasses evidence-based fixation selection, damage control strategies, limb salvage decisions, and integration of emerging technologies.',
      explanation: `**Evidence-Based Fixation Decisions:**
- **Tibial shaft:** Reamed IM nail for closed fractures (SPRINT trial); unreamed nail or external fixation for open IIIB/C. Plate fixation for proximal/distal metaphyseal extension.
- **Femoral shaft:** Antegrade reamed femoral nail is gold standard. Timing controversial in polytrauma — ETC (early total care) within 24h vs. DCO. EAST guidelines support early fixation when physiologically appropriate.
- **Distal radius:** Volar locking plate for unstable fractures (DRAFFT2 trial showed casting non-inferior for dorsally displaced fractures in patients >60).
- **Hip fractures:** Femoral neck — hemiarthroplasty vs. THA vs. cannulated screws based on age, activity, displacement. Intertrochanteric — cephalomedullary nail (FAITH-2 ongoing).

**Limb Salvage vs. Amputation:**
MESS (Mangled Extremity Severity Score) and LEAP study guide decisions. MESS >7 historically predicted amputation, but LEAP showed MESS alone has poor predictive value. Functional outcomes at 2 years similar for salvage and amputation. Decision involves vascular status, soft tissue injury, skeletal injury pattern, and patient factors.

**Emerging Technologies:**
- Patient-specific 3D-printed implants for complex periarticular fractures
- Navigation-assisted percutaneous screw placement (pelvis, acetabulum)
- Antibiotic-eluting implant coatings (silver, gentamicin) for infection prevention
- Virtual surgical planning for complex malunion correction with pre-bent plates

**Fragility Fracture Liaison Service (FLS):**
Secondary fracture prevention program. After any fragility fracture: DEXA scan, fall risk assessment, initiate osteoporosis treatment (bisphosphonate, denosumab, teriparatide). Reduces subsequent fracture risk by 30-40%.`,
      keyTerms: [
        { term: 'LEAP study', definition: 'Landmark trial comparing outcomes of limb salvage vs. amputation for severe lower extremity trauma' },
        { term: 'DRAFFT2', definition: 'UK trial comparing volar locking plate vs. casting for distal radius fractures in older adults' },
        { term: 'fragility fracture', definition: 'Fracture from standing height or less, indicating underlying osteoporosis' },
        { term: 'FLS', definition: 'Fracture Liaison Service — coordinated program for secondary fracture prevention after fragility fracture' },
      ],
      clinicalNotes: 'Every fragility fracture is an opportunity for secondary prevention. Initiate FLS referral, DEXA, and osteoporosis treatment to reduce future fracture risk by 30-40%.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-sprint', type: 'article', title: 'SPRINT: Reamed vs. Unreamed IM Nailing for Tibial Shaft Fractures', source: 'J Bone Joint Surg Am. 2008;90(12):2567-2578', license: 'Proprietary' },
    { id: 'cit-flow', type: 'article', title: 'FLOW: Fluid Lavage of Open Wounds', source: 'N Engl J Med. 2015;373(27):2629-2641', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-common-fracture-types', targetType: 'condition', relationship: 'sibling', label: 'Common Fracture Types' },
    { targetId: 'ortho-compartment-syndrome', targetType: 'condition', relationship: 'see-also', label: 'Compartment Syndrome' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'fracture management', 'surgical fixation'],
    keywords: ['ORIF', 'IM nail', 'casting', 'open fracture', 'damage control orthopedics', 'VTE prophylaxis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default fractureManagementPrinciples;
