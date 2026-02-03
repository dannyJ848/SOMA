import { EducationalContent } from '../../../types';

export const fractureTypesContent: EducationalContent = {
  id: 'ortho-fracture-types',
  type: 'condition',
  name: 'Fracture Types and Classification',
  alternateNames: ['Broken bones', 'Bone fractures', 'Fracture patterns'],
  hpoId: 'HP:0020110',

  levels: {
    1: {
      level: 1,
      summary: 'A fracture is a broken bone that can happen in different ways, from a small crack to a bone breaking completely into pieces.',
      explanation: `When a bone breaks, doctors call it a fracture. Bones can break in many different ways depending on how the injury happened.

**Common Types of Fractures:**

*By How the Bone Breaks:*
- **Simple (Closed) fracture**: Bone breaks but skin is not broken - the break is inside
- **Compound (Open) fracture**: Bone pokes through the skin - this is more serious and needs surgery
- **Hairline (Stress) fracture**: Tiny crack in the bone, often from overuse
- **Complete fracture**: Bone breaks all the way through into two pieces
- **Greenstick fracture**: Bone bends and cracks but doesn't break completely (like a green twig)

*By the Pattern of the Break:*
- **Transverse**: Breaks straight across
- **Oblique**: Breaks at an angle
- **Spiral**: Twisting break that spirals around the bone
- **Comminuted**: Bone shatters into multiple pieces

**How Fractures Happen:**
- Falling down
- Sports injuries
- Car accidents
- Bones weakened by disease (like osteoporosis)

**Signs of a Fracture:**
- Pain that gets worse when you move
- Swelling and bruising
- Part looks bent or out of place
- You can't use the injured part
- Sometimes you hear a snap or crack

**Getting Help:**
If you think you broke a bone:
1. Don't move the injured part
2. Put ice on it (wrapped in cloth)
3. Go to the doctor or emergency room
4. You'll probably need an X-ray`,
      keyTerms: [
        { term: 'fracture', definition: 'A break or crack in a bone' },
        { term: 'closed fracture', definition: 'A broken bone where the skin is not broken' },
        { term: 'open fracture', definition: 'A broken bone that breaks through the skin' },
        { term: 'X-ray', definition: 'A picture that shows your bones so doctors can see if they are broken' },
      ],
      analogies: [
        'A greenstick fracture is like when you try to break a fresh twig - it bends and splinters but doesn\'t snap in two.',
        'A comminuted fracture is like dropping a plate - it shatters into many pieces.',
        'A stress fracture is like cracks in a sidewalk - small lines that can get bigger if not fixed.',
      ],
      examples: [
        'A soccer player who gets kicked might get a transverse fracture - a clean break straight across the shin.',
        'Twisting your ankle while it\'s stuck can cause a spiral fracture in the leg bone.',
        'Runners who train too hard can get stress fractures in their feet.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fractures are classified by the break pattern, soft tissue involvement, displacement, and anatomic location, which guides treatment decisions.',
      explanation: `Fracture classification helps doctors communicate and plan treatment. Multiple classification systems exist based on different characteristics.

**Basic Fracture Descriptors:**

*By Skin Integrity:*
- **Closed (Simple)**: Skin intact
- **Open (Compound)**: Skin broken, bone exposed
  - Gustilo-Anderson Classification (I, II, IIIA, IIIB, IIIC)

*By Completeness:*
- **Complete**: Bone separated into two fragments
- **Incomplete**: Bone partially broken
  - Greenstick: Pediatric, one cortex broken
  - Torus (buckle): Compression of one cortex

*By Fracture Line Pattern:*
- **Transverse**: Perpendicular to long axis
- **Oblique**: Angled across bone
- **Spiral**: Rotational injury pattern
- **Comminuted**: More than two fragments
- **Segmental**: Two separate fractures isolating a segment

*By Displacement:*
- **Non-displaced**: Fragments aligned
- **Displaced**: Fragments separated
  - Translation (shift sideways)
  - Angulation (tilt)
  - Rotation (twist)
  - Shortening (overlap)

**Location-Based Classification:**

*Long Bones:*
- Diaphyseal: Shaft
- Metaphyseal: Flared ends
- Epiphyseal: Joint surface (articular)
- Physis: Growth plate (pediatric)

*Specific Fracture Names:*
- **Colles fracture**: Distal radius with dorsal displacement (fall on outstretched hand)
- **Smith fracture**: Distal radius with volar displacement
- **Boxer's fracture**: 5th metacarpal neck
- **Jones fracture**: 5th metatarsal base
- **Maisonneuve fracture**: Proximal fibula with ankle syndesmosis injury

**Special Fracture Types:**

*Pathologic Fracture:*
- Through abnormal bone (tumor, osteoporosis)
- Minimal or no trauma

*Stress Fracture:*
- Repetitive microtrauma
- Common in athletes, military
- May not show on initial X-ray

*Avulsion Fracture:*
- Tendon or ligament pulls off bone fragment
- Common at muscle attachments

**Pediatric-Specific:**
- Salter-Harris classification for growth plate injuries (I-V)
- Plastic deformation (bowing)
- Greenstick and torus fractures`,
      keyTerms: [
        { term: 'displaced fracture', definition: 'Fracture where bone fragments have moved out of alignment' },
        { term: 'comminuted fracture', definition: 'Fracture with bone broken into three or more fragments', pronunciation: 'KOM-ih-noo-ted' },
        { term: 'pathologic fracture', definition: 'Fracture through bone weakened by disease, occurring with minimal trauma' },
        { term: 'Salter-Harris', definition: 'Classification system for pediatric growth plate fractures (Types I-V)' },
        { term: 'Gustilo-Anderson', definition: 'Classification system for open fractures based on wound size and soft tissue damage' },
        { term: 'avulsion fracture', definition: 'Fracture where a fragment is pulled off by a tendon or ligament', pronunciation: 'ah-VUL-shun' },
      ],
      analogies: [
        'Describing fracture displacement is like giving directions: how far, which way, and is it rotated?',
        'The Salter-Harris classification goes through the growth plate like a road through a toll booth - the path matters.',
        'A pathologic fracture is like a weakened floorboard breaking under normal weight.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive fracture classification integrates the AO/OTA system for long bones, specific eponymous and anatomic classifications, and considers mechanism, stability, and associated injuries.',
      explanation: `Advanced fracture classification guides treatment algorithms and outcome research through standardized descriptors.

**AO/OTA Fracture Classification:**

The AO (Arbeitsgemeinschaft fur Osteosynthesefragen) / OTA (Orthopaedic Trauma Association) system provides comprehensive alphanumeric coding.

*Structure:*
- **Bone**: Number (1=humerus, 2=radius/ulna, 3=femur, 4=tibia/fibula)
- **Segment**: Number (1=proximal, 2=diaphysis, 3=distal)
- **Type**: Letter (A=simple, B=wedge, C=complex)
- **Group/Subgroup**: Numbers for specific patterns

*Example:* 42-A3 = Femur, diaphyseal, simple transverse

*Type Definitions:*
- Type A: Simple fractures
  - A1: Spiral
  - A2: Oblique (>30°)
  - A3: Transverse (<30°)
- Type B: Wedge (butterfly fragment)
  - B1: Spiral wedge
  - B2: Bending wedge
  - B3: Fragmented wedge
- Type C: Complex/Comminuted
  - C1: Spiral
  - C2: Segmental
  - C3: Irregular

**Open Fracture Classification (Gustilo-Anderson):**

*Type I:*
- Wound <1 cm
- Clean
- Minimal soft tissue damage
- Simple fracture pattern

*Type II:*
- Wound 1-10 cm
- Moderate soft tissue damage
- No extensive tissue loss

*Type III:*
- Extensive soft tissue damage
- Subclassified:
  - IIIA: Adequate soft tissue coverage
  - IIIB: Requires flap coverage
  - IIIC: Vascular injury requiring repair

**Growth Plate Fractures (Salter-Harris):**

*SALTR mnemonic:*
- Type I: **S**traight across (physis only)
- Type II: **A**bove (metaphysis + physis) - most common
- Type III: **L**ower (epiphysis + physis)
- Type IV: **T**hrough all (meta + physis + epi)
- Type V: **R**ammed/crushed (compression)

*Prognosis:* Higher number = higher risk of growth disturbance

**Anatomic Classifications:**

*Proximal Femur:*
- Femoral neck: Subcapital, transcervical, basicervical
- Garden Classification: I-IV (displacement)
- Intertrochanteric: Stable vs unstable

*Distal Radius:*
- Frykman: Intra-articular involvement, ulnar styloid
- Fernandez: Mechanism-based
- AO/OTA: Most comprehensive

*Ankle (Danis-Weber/AO):*
- Type A: Below syndesmosis (stable)
- Type B: At syndesmosis (variable stability)
- Type C: Above syndesmosis (unstable)

**Fracture Stability Concepts:**

*Inherently Unstable Patterns:*
- Comminuted
- Segmental
- Spiral with butterfly
- Pathologic bone

*Stability Assessment:*
- Ability to maintain reduction
- Soft tissue hinge (periosteum)
- Fracture pattern
- Bone quality`,
      keyTerms: [
        { term: 'AO/OTA classification', definition: 'Standardized alphanumeric system for classifying fractures by location, morphology, and complexity' },
        { term: 'Garden classification', definition: 'Classification of femoral neck fractures (I-IV) based on displacement and trabecular alignment' },
        { term: 'Danis-Weber classification', definition: 'Classification of ankle fractures based on fibula fracture level relative to syndesmosis' },
        { term: 'butterfly fragment', definition: 'Triangular wedge-shaped bone fragment in a fracture, indicating higher energy injury' },
        { term: 'syndesmosis', definition: 'Fibrous joint between tibia and fibula above the ankle; injury indicates instability', pronunciation: 'sin-dez-MOH-sis' },
      ],
      clinicalNotes: 'Open fractures require emergent irrigation and debridement, typically within 6 hours. Gustilo IIIB and IIIC fractures have high complication rates including infection and amputation. Salter-Harris fractures involving the epiphysis (Types III and IV) require anatomic reduction to preserve joint surface.',
    },
    4: {
      level: 4,
      summary: 'Fracture classification informs evidence-based treatment algorithms, considering injury mechanism, associated injuries, patient factors, and implant selection based on fracture morphology and stability.',
      explanation: `Clinical fracture management integrates classification with treatment planning, biomechanical principles, and outcome optimization.

**Mechanism-Based Understanding:**

*Low-Energy vs. High-Energy:*
- Low-energy: Simple patterns, minimal soft tissue injury
- High-energy: Comminution, significant soft tissue damage
- Treatment strategy differs significantly

*Loading Patterns:*
- Tension: Transverse fracture
- Compression: Impaction, shortening
- Bending: Transverse with butterfly
- Torsion: Spiral
- Combined: Complex patterns

**Treatment Algorithm Integration:**

*Fracture Pattern → Fixation Choice:*
- Simple transverse: Compression plating, lag screws
- Oblique/spiral: Lag screws, protection plate
- Comminuted: Bridge plating (relative stability)
- Articular: Anatomic reduction, absolute stability

*Soft Tissue Considerations:*
- Open fractures: External fixation often initial treatment
- Closed with swelling: Delayed definitive fixation
- Polytrauma: Damage control orthopedics

**Specific Fracture Management:**

*Proximal Femur:*
- Femoral neck:
  - Non-displaced: Internal fixation (screws or DHS)
  - Displaced, young: Reduction + fixation
  - Displaced, elderly: Arthroplasty (hemi vs. total)
- Intertrochanteric:
  - Stable: Sliding hip screw (DHS)
  - Unstable: Intramedullary nail (cephalomedullary)
- Subtrochanteric: Long cephalomedullary nail

*Distal Radius:*
- Non-displaced: Cast immobilization
- Displaced: Closed reduction + cast vs. ORIF
- Unstable patterns: Volar locking plate
- High-energy/open: External fixation ± staged ORIF

*Tibial Shaft:*
- Closed, stable: Casting possible
- Displaced: Intramedullary nailing (gold standard)
- Open: External fixation → nail conversion
- Severe soft tissue: Ring fixator

*Ankle:*
- Stable: Non-operative (boot/cast)
- Unstable: ORIF (restore anatomic alignment)
- Syndesmosis injury: Screw or suture button fixation

**Associated Injury Patterns:**

*Polytrauma Assessment:*
- Life over limb priorities
- Compartment syndrome risk
- Vascular injury evaluation
- Damage control orthopedics protocol

*Mechanism-Related Injuries:*
- Dashboard injury: Acetabular fracture, knee dislocation
- FOOSH: Distal radius, scaphoid, supracondylar humerus
- Twisting: Ankle fracture-dislocation, tibial torsion injury

**Bone Quality Considerations:**

*Osteoporotic Fractures:*
- Low-energy mechanism
- Poor fixation purchase
- Augmentation strategies (cement, locked plates)
- Shorter weight-bearing restrictions

*Pathologic Fractures:*
- Biopsy before fixation (unless obvious primary)
- Consider metastatic workup
- May need adjuvant therapy
- Different fixation goals (palliation vs. cure)

**Outcomes and Complications:**

*Classification-Predicted Outcomes:*
- Higher Gustilo grade → higher infection rate
- Garden III/IV → higher AVN rate
- Salter-Harris IV/V → higher growth arrest

*Complication Surveillance:*
- Infection (especially open fractures)
- Nonunion (risk factors: smoking, diabetes, infection)
- Malunion (accepting vs. correcting)
- Avascular necrosis (femoral neck, scaphoid, talus)
- Compartment syndrome (tibial shaft, forearm)`,
      keyTerms: [
        { term: 'damage control orthopedics', definition: 'Staged fracture management in polytrauma: initial stabilization with definitive fixation delayed until patient stabilized' },
        { term: 'relative stability', definition: 'Fixation allowing controlled micromotion leading to secondary (callus) bone healing' },
        { term: 'absolute stability', definition: 'Rigid fixation eliminating motion, allowing primary bone healing without callus' },
        { term: 'bridge plating', definition: 'Plate fixation spanning a comminuted zone without attempting to reduce each fragment' },
        { term: 'cephalomedullary nail', definition: 'Intramedullary nail with screws extending into femoral head for proximal femur fractures' },
        { term: 'FOOSH', definition: 'Fall On OutStretched Hand; common mechanism for wrist and upper extremity fractures' },
      ],
      clinicalNotes: 'Compartment syndrome risk is highest in tibial shaft fractures; maintain high index of suspicion. Femoral neck fractures in young adults require urgent reduction (<6-12 hours) to minimize AVN risk. Open fractures: antibiotics within 1 hour, tetanus prophylaxis, I&D within 6 hours (though recent data supports within 24 hours for less severe wounds).',
    },
    5: {
      level: 5,
      summary: 'Contemporary fracture care integrates classification systems with evidence-based protocols, advanced imaging, biomechanical optimization, and patient-specific factors including biologic modulation and precision surgical techniques.',
      explanation: `Modern fracture management synthesizes classification, biomechanics, and patient optimization for evidence-based care.

**Evidence-Based Classification Utility:**

*Reliability Studies:*
- Inter-observer reliability varies by system
- CT improves classification accuracy
- 3D reconstructions enhance understanding
- Machine learning classification emerging

*Classification and Outcomes:*
- Some classifications predict outcomes better than others
- Garden classification: Moderate reliability, variable predictive value
- AO/OTA: High granularity but complexity limits clinical utility
- Newer scores incorporate patient factors (HFRS, NHFS)

**Advanced Imaging Integration:**

*CT Applications:*
- Articular fracture characterization
- Comminution assessment
- Preoperative planning
- 3D printing for complex cases

*MRI Role:*
- Occult fractures (stress, insufficiency)
- Soft tissue injury assessment
- Bone marrow edema patterns
- Cartilage involvement

*Intraoperative Imaging:*
- 3D fluoroscopy (O-arm, iso-C)
- Navigation systems
- Quality of reduction assessment

**Biomechanical Optimization:**

*Implant Selection Science:*
- Working length concepts
- Plate strain distribution
- Nail fitting and biomechanics
- Locking vs. non-locking constructs

*Fixation Principles:*
- Simple patterns: Interfragmentary compression
- Comminuted: Bridge/spanning fixation
- Osteoporotic: Augmentation strategies
- Periarticular: Anatomic reduction priority

*Load-Sharing vs. Load-Bearing:*
- Comminution degree determines construct demands
- Bone healing restores load sharing
- Implant failure if healing delayed

**Biological Optimization:**

*Patient Factors:*
- Smoking cessation (most modifiable risk)
- Diabetes control
- Nutritional optimization (vitamin D, protein)
- Medication review (steroids, NSAIDs)

*Augmentation Strategies:*
- Bone graft: Autograft, allograft, synthetics
- BMP for high-risk nonunion
- Bone marrow aspirate
- PRP (variable evidence)

*Timing Considerations:*
- Immediate: Femoral neck in young
- Delayed: Soft tissue swelling
- Staged: Polytrauma, open fractures

**Specific Advanced Topics:**

*Periprosthetic Fractures:*
- Vancouver classification (femur)
- Unified Classification System
- Stem stability assessment
- Revision vs. fixation algorithms

*Atypical Femoral Fractures:*
- ASBMR criteria
- Bisphosphonate association
- Prodromal thigh pain
- Contralateral prophylaxis discussion

*Fragility Fracture Care:*
- FLS (Fracture Liaison Services)
- Secondary prevention
- Risk assessment tools (FRAX)
- Treatment initiation post-fracture

**Outcomes Research:**

*Patient-Reported Outcomes:*
- DASH (upper extremity)
- LEFS (lower extremity)
- SF-36/SF-12 (general health)
- PROMIS (NIH initiative)

*Functional Outcomes:*
- Return to work
- Return to sport
- Activity level restoration
- Quality of life measures

*Complication Metrics:*
- Infection rates (SSI, deep infection)
- Nonunion/malunion rates
- Hardware removal rates
- Reoperation rates

**Emerging Technologies:**

*3D Printing:*
- Patient-specific guides
- Pre-contoured implants
- Surgical planning models
- Custom implants

*Navigation and Robotics:*
- Fracture reduction assistance
- Screw trajectory optimization
- Articular surface restoration

*Biodegradable Implants:*
- Pediatric applications
- Removal avoidance
- Material advances

*Remote Monitoring:*
- Smart implants
- Activity tracking
- Early complication detection`,
      keyTerms: [
        { term: 'FLS', definition: 'Fracture Liaison Service; coordinated care model for secondary fracture prevention' },
        { term: 'Vancouver classification', definition: 'Classification for periprosthetic femur fractures based on location, stem stability, and bone quality' },
        { term: 'FRAX', definition: 'Fracture Risk Assessment Tool; WHO algorithm predicting 10-year fracture probability' },
        { term: 'atypical femoral fracture', definition: 'Subtrochanteric or diaphyseal fracture associated with bisphosphonate use; transverse pattern, lateral cortex thickening' },
        { term: 'working length', definition: 'Portion of implant spanning fracture zone; affects construct stiffness and strain' },
        { term: 'DASH score', definition: 'Disabilities of Arm, Shoulder and Hand; validated patient-reported outcome measure' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Open fracture antibiotics: 1st gen cephalosporin for all; add aminoglycoside for Gustilo III; add penicillin for farm/contamination
- Femoral neck blood supply: Medial femoral circumflex → retinacular vessels; displaced fracture disrupts
- Scaphoid blood supply: Retrograde from distal; proximal pole AVN risk
- Compartment syndrome: Pain with passive stretch is earliest sign; do not wait for pulselessness
- Growth arrest: Asymmetric physeal bar → angular deformity; complete arrest → shortening

**Surgical Pearls:**
- Intra-articular fractures: Reduction accuracy determines arthritis risk
- Comminuted diaphyseal: Nail length should span bone for stress distribution
- Osteoporotic distal femur: Consider locked plating with augmentation
- Tibial plateau: Depression >2mm and instability >10° are surgical indications`,
    },
  },

  media: [
    {
      id: 'fracture-patterns',
      type: 'diagram',
      filename: 'fracture-line-patterns.svg',
      title: 'Fracture Line Patterns',
      description: 'Transverse, oblique, spiral, comminuted, and segmental patterns',
    },
    {
      id: 'ao-classification',
      type: 'diagram',
      filename: 'ao-ota-classification-overview.svg',
      title: 'AO/OTA Classification Overview',
      description: 'Alphanumeric coding system for fracture classification',
    },
    {
      id: 'salter-harris',
      type: 'diagram',
      filename: 'salter-harris-classification.svg',
      title: 'Salter-Harris Classification',
      description: 'Types I-V growth plate fractures',
    },
  ],
  citations: [
    {
      id: 'ao-foundation',
      type: 'website',
      title: 'AO/OTA Fracture and Dislocation Classification',
      source: 'AO Foundation',
      url: 'https://www.aofoundation.org/trauma/clinical-library-and-tools/ao-ota-fracture-classification',
      license: 'Proprietary',
    },
    {
      id: 'rockwood-green',
      type: 'textbook',
      title: 'Rockwood and Green\'s Fractures in Adults',
      source: 'Wolters Kluwer',
      chapter: 'Multiple',
      license: 'Copyright Wolters Kluwer',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-bone-anatomy-healing', targetType: 'structure', relationship: 'related', label: 'Bone Healing' },
    { targetId: 'ortho-fracture-management', targetType: 'topic', relationship: 'related', label: 'Fracture Management' },
    { targetId: 'ortho-osteoporosis', targetType: 'condition', relationship: 'related', label: 'Osteoporosis' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'fractures'],
    keywords: ['fracture', 'classification', 'AO', 'Gustilo', 'Salter-Harris', 'trauma'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fractureTypesContent;
