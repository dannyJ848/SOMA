import { EducationalContent } from '../../../types';

export const fractureManagementContent: EducationalContent = {
  id: 'ortho-fracture-management',
  type: 'topic',
  name: 'Fracture Management',
  alternateNames: ['Fracture treatment', 'Bone fixation', 'Fracture surgery', 'Osteosynthesis'],
  hpoId: 'HP:0020110',

  levels: {
    1: {
      level: 1,
      summary: 'Fracture management involves aligning broken bones and keeping them stable while they heal, either with casts and splints or with surgery using metal plates, screws, or rods.',
      explanation: `When a bone breaks, doctors help it heal by making sure the pieces are lined up properly and held still. How this is done depends on which bone is broken and how bad the break is.

**Goals of Treatment:**
- Line up the bone pieces (alignment)
- Keep the bones from moving (stability)
- Let the bone heal naturally
- Get you moving again safely

**Non-Surgical Treatment:**

*Casts:*
- Hard shell (plaster or fiberglass)
- Keeps bone from moving
- Usually 4-8 weeks
- Can't get wet

*Splints:*
- Removable, adjustable
- Used for swelling
- Often used first, then cast

*Slings/Braces:*
- Support without rigid immobilization
- Used for some shoulder and arm fractures

**Surgical Treatment:**

*When Surgery Is Needed:*
- Bones won't stay aligned
- Break goes into a joint
- Bone poking through skin (open fracture)
- Multiple injuries

*Types of Fixation:*

*Plates and Screws:*
- Metal plate on bone surface
- Screws hold plate to bone
- Common for arm and leg fractures

*Rods (Intramedullary Nails):*
- Metal rod inside the bone
- Good for long bones (thigh, shin)
- Often allows walking sooner

*Pins and Wires:*
- Smaller fixation
- Used for hand, wrist, ankle fractures
- Sometimes stick out through skin

*External Fixator:*
- Pins in bone connected to frame outside body
- Used for severe injuries
- Temporary or definitive

**Healing Time:**
- Depends on which bone and fracture type
- Usually 6-12 weeks for most fractures
- Some take longer (months)
- Smoking slows healing significantly

**Recovery:**
- Physical therapy often needed
- Gradual return to activities
- Follow-up X-rays to check healing`,
      keyTerms: [
        { term: 'fracture', definition: 'A break in a bone' },
        { term: 'cast', definition: 'A hard shell that holds a broken bone in place while it heals' },
        { term: 'plate and screws', definition: 'Metal hardware used in surgery to hold broken bones together' },
        { term: 'external fixator', definition: 'A frame outside the body connected to pins in the bone' },
      ],
      analogies: [
        'A cast is like a protective shell around the bone, keeping it still like packaging protects a fragile item.',
        'A plate and screws are like a splint held on with bolts, keeping the bone pieces from moving.',
        'An intramedullary nail is like a support beam running through the center of the bone.',
      ],
      examples: [
        'A broken wrist treated with a cast for 6 weeks.',
        'A leg fracture fixed with a rod placed inside the bone.',
        'A severely broken ankle with plates and screws to hold the pieces together.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fracture management follows principles of reduction, immobilization, and rehabilitation, with treatment selection based on fracture pattern, stability, and patient factors.',
      explanation: `Fracture treatment principles guide decision-making for optimal healing and functional outcomes.

**Treatment Principles:**

*Reduction:*
- Restoring alignment
- Closed: Manipulation without surgery
- Open: Surgical exposure and reduction

*Immobilization:*
- Maintaining reduction during healing
- Non-operative or operative
- Duration based on fracture type

*Rehabilitation:*
- Restoring function
- Range of motion
- Strength
- Return to activities

**Fracture Classification:**

*Open vs. Closed:*
- Open: Communication with external environment
- Gustilo-Anderson classification (Type I, II, IIIA/B/C)
- Open fractures are surgical emergencies

*Stability:*
- Stable: Likely to maintain alignment with non-op
- Unstable: Will displace without fixation

*Location:*
- Diaphyseal (shaft)
- Metaphyseal (flared region)
- Epiphyseal (joint)
- Intra-articular

**Non-Operative Treatment:**

*Indications:*
- Stable, minimally displaced fractures
- Acceptable alignment achieved
- Patient factors favoring non-operative

*Methods:*
- Casting (circumferential)
- Splinting (non-circumferential)
- Functional bracing
- Sling/swathe

*Monitoring:*
- Serial X-rays
- Watch for displacement
- Adjust as swelling resolves

**Operative Indications:**

*Absolute:*
- Open fractures
- Vascular injury
- Compartment syndrome
- Floating joints

*Relative:*
- Unstable fractures
- Intra-articular involvement
- Polytrauma
- Failure of closed treatment

**Fixation Methods:**

*Internal Fixation:*
- Plates and screws
- Intramedullary nails
- Screws alone
- Wires/pins

*External Fixation:*
- Temporary (damage control)
- Definitive
- Used for soft tissue compromise

**Plate Fixation:**

*Types:*
- Compression plates
- Locking plates
- Bridge plates

*Principles:*
- Absolute stability (compression) or
- Relative stability (bridge, indirect healing)

**Intramedullary Nailing:**

*Indications:*
- Long bone diaphyseal fractures
- Femur, tibia most common

*Advantages:*
- Load-sharing
- Early weight bearing
- Preserves soft tissue envelope

**Healing:**

*Primary (Direct):*
- Absolute stability (compression)
- Haversian remodeling
- No visible callus

*Secondary (Indirect):*
- Relative stability
- Callus formation
- Most common healing type

*Timeline:*
- Inflammatory: Days
- Soft callus: 2-3 weeks
- Hard callus: 6-12 weeks
- Remodeling: Months to years`,
      keyTerms: [
        { term: 'reduction', definition: 'Restoring bone alignment; closed (manipulation) or open (surgical)' },
        { term: 'Gustilo-Anderson', definition: 'Classification system for open fractures based on wound size and contamination' },
        { term: 'intramedullary nail', definition: 'Metal rod placed inside bone canal for fixation; load-sharing device' },
        { term: 'locking plate', definition: 'Plate with threaded screw holes creating fixed-angle construct' },
        { term: 'callus', definition: 'New bone that forms around a healing fracture' },
        { term: 'compartment syndrome', definition: 'Emergency: Increased pressure in muscle compartment causing ischemia' },
      ],
      analogies: [
        'Compression plating is like clamping two pieces of wood together with glue.',
        'Bridge plating is like a splint that spans the fracture without compressing it.',
        'An intramedullary nail is like a stake supporting a broken tree branch from the inside.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fracture management integrates biomechanical principles of fixation, biology of bone healing, and understanding of complications to optimize treatment selection and outcomes.',
      explanation: `Evidence-based fracture care requires understanding biomechanics, biology, and surgical principles.

**Biomechanical Principles:**

*Stability:*
- Absolute: No motion, compression
- Relative: Controlled motion, callus healing

*Construct Factors:*
- Working length
- Screw placement
- Plate length
- Material properties

*Load Sharing vs. Load Bearing:*
- Nail: Load sharing with bone
- Plate: Can be load bearing
- Implications for weight bearing

**Reduction Techniques:**

*Closed Reduction:*
- Traction
- Manipulation
- Ligamentotaxis
- Fluoroscopic guidance

*Open Reduction:*
- Direct manipulation
- Reduction clamps
- Provisional fixation
- Minimize soft tissue stripping

*Indirect Reduction:*
- Use of implant to achieve reduction
- Distractor techniques
- Preserves biology

**Plate Principles:**

*Compression Plating:*
- Absolute stability
- Primary bone healing
- Simple fracture patterns
- Interfragmentary compression

*Locking Plates:*
- Fixed-angle stability
- No bone-plate compression
- Osteoporotic bone
- Periarticular fractures

*Bridge Plating:*
- Relative stability
- Secondary healing
- Comminuted fractures
- Length, alignment, rotation

**Intramedullary Nailing:**

*Entry Points:*
- Femur: Piriformis, trochanteric
- Tibia: Infrapatellar, suprapatellar

*Reaming:*
- Increases nail diameter
- Better mechanical stability
- May affect blood supply

*Locking Screws:*
- Control rotation
- Control length
- Static vs. dynamic

**Open Fractures:**

*Gustilo Classification:*
- Type I: <1cm wound, clean
- Type II: 1-10cm wound, moderate contamination
- Type IIIA: Adequate soft tissue coverage
- Type IIIB: Requires flap coverage
- Type IIIC: Vascular injury requiring repair

*Management Principles:*
1. Antibiotics (within 1 hour)
2. Tetanus prophylaxis
3. Irrigation and debridement
4. Stabilization
5. Soft tissue coverage

*Antibiotic Protocol:*
- Type I/II: Cefazolin
- Type III: Add aminoglycoside
- Farm/contaminated: Add penicillin

**Bone Healing Biology:**

*Stages:*
1. Hematoma/Inflammation: Cytokines, growth factors
2. Soft Callus: Cartilage formation
3. Hard Callus: Endochondral ossification
4. Remodeling: Wolff's law

*Factors Affecting Healing:*
- Blood supply
- Stability
- Nutritional status
- Smoking (50% increased nonunion)
- Diabetes
- NSAIDs (controversial)

**Complications:**

*Nonunion:*
- Failure to heal by 9 months
- Atrophic vs. hypertrophic
- Treatment based on type

*Malunion:*
- Healed in unacceptable alignment
- Angular, rotational, length

*Infection:*
- Higher risk in open fractures
- May require hardware removal
- Suppressive antibiotics

*Hardware Failure:*
- Usually indicates nonunion
- Fatigue failure
- May need revision`,
      keyTerms: [
        { term: 'working length', definition: 'Distance between proximal and distal fixation points; affects construct stiffness' },
        { term: 'ligamentotaxis', definition: 'Using soft tissue attachments to indirectly reduce fracture fragments' },
        { term: 'endochondral ossification', definition: 'Bone formation through cartilage intermediate; occurs in fracture healing' },
        { term: 'nonunion', definition: 'Fracture that fails to heal; defined as no progress at 9 months' },
        { term: 'atrophic nonunion', definition: 'Nonunion with poor blood supply; requires bone graft' },
        { term: 'hypertrophic nonunion', definition: 'Nonunion with good biology but insufficient stability; needs better fixation' },
      ],
      clinicalNotes: 'Smoking cessation is the most modifiable factor for fracture healing. Open fracture antibiotics should be given within 1 hour of injury. Hypertrophic nonunion needs stability; atrophic needs biology (bone graft). NSAIDs effect on healing is controversial but avoid if possible in high-risk fractures.',
    },
    4: {
      level: 4,
      summary: 'Advanced fracture management addresses complex injuries, periarticular fractures, nonunion treatment, and polytrauma with understanding of damage control orthopedics and reconstruction techniques.',
      explanation: `Complex fracture care requires expertise in challenging patterns, reconstruction, and management of complications.

**Periarticular Fractures:**

*Principles:*
- Anatomic articular reduction
- Stable fixation of articular surface
- Bridge metaphysis if comminuted
- Early motion

*Distal Femur:*
- Articular reconstruction first
- Locking plate standard
- Consider nail for appropriate patterns
- Avoid varus malreduction

*Tibial Plateau:*
- Schatzker classification (I-VI)
- CT scan essential
- Lateral vs. medial vs. dual plating
- Staged approach for high-energy

*Pilon (Distal Tibia):*
- Ruedi-Allgower protocol
- Staged treatment (span → fix)
- Fibula first (restore length)
- Minimize soft tissue complications

**Polytrauma:**

*Damage Control Orthopedics:*
- Initial temporary stabilization
- Minimize second hit
- Definitive fixation when stable

*Indications for DCO:*
- ISS >40
- Polytrauma with thoracic injury
- Bilateral femur fractures
- Hypothermia, coagulopathy, acidosis

*Early Total Care vs. DCO:*
- Patient-specific decision
- Femur nail within 24 hours if stable
- External fixation if unstable

**Complex Diaphyseal Fractures:**

*Segmental Fractures:*
- Nail preferred
- Bridge plate alternative
- Protect vascularity of segment

*Bone Loss:*
- Acute shortening + lengthening
- Bone transport
- Induced membrane (Masquelet)
- Free vascularized bone graft

**Nonunion Treatment:**

*Evaluation:*
- Rule out infection
- Assess biology and mechanics
- CT scan for healing assessment

*Atrophic:*
- Bone graft (autogenous iliac crest)
- BMP consideration
- Improve stability

*Hypertrophic:*
- Exchange nailing (increase size)
- Compression plating
- Dynamization

*Infected Nonunion:*
- Staged approach usually
- Debridement + antibiotic cement
- Reconstruction after infection control

**Malunion Correction:**

*Planning:*
- Assess deformity (angular, rotational, length)
- CORA (Center of Rotation of Angulation)
- Osteotomy planning

*Techniques:*
- Opening wedge osteotomy
- Closing wedge osteotomy
- Dome osteotomy
- Gradual correction (external fixation)

**Bone Grafting:**

*Autograft:*
- Iliac crest: Gold standard
- Local bone
- RIA (Reamer Irrigator Aspirator)

*Allograft:*
- Structural or morselized
- Osteoconductive only
- Disease transmission risk (minimal)

*Substitutes:*
- Calcium phosphate/sulfate
- Ceramics
- BMP (osteoinductive)

**Limb Salvage vs. Amputation:**

*MESS Score:*
- Mangled Extremity Severity Score
- Not fully predictive
- Patient factors important

*Considerations:*
- Nerve injury (tibial nerve in leg)
- Warm ischemia time
- Soft tissue damage
- Patient goals and resources`,
      keyTerms: [
        { term: 'damage control orthopedics', definition: 'Temporary stabilization in polytrauma to prevent secondary physiologic insult' },
        { term: 'Masquelet technique', definition: 'Induced membrane technique for bone defects: Cement spacer, then membrane + graft' },
        { term: 'CORA', definition: 'Center of Rotation of Angulation; planning point for corrective osteotomy' },
        { term: 'Schatzker classification', definition: 'System for classifying tibial plateau fractures (Types I-VI)' },
        { term: 'RIA', definition: 'Reamer Irrigator Aspirator; harvests bone graft from intramedullary canal' },
        { term: 'MESS score', definition: 'Mangled Extremity Severity Score; guides amputation vs. salvage decision' },
      ],
      clinicalNotes: 'Damage control orthopedics prevents "second hit" in polytrauma - temporary external fixation. Articular fractures need anatomic reduction to prevent post-traumatic arthritis. Infected nonunion requires staged approach - control infection before reconstruction. Tibial nerve function is key prognostic factor in mangled extremity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary fracture care encompasses biologics, advanced fixation techniques, limb lengthening/reconstruction, and outcome optimization with focus on preventing long-term sequelae.',
      explanation: `State-of-the-art fracture management integrates technology, biologics, and outcomes science.

**Biologics:**

*Bone Morphogenetic Proteins:*
- BMP-2: FDA-approved for tibia fractures, spine
- BMP-7: Limited availability
- Off-label use common
- Complications: Heterotopic ossification, edema

*Stem Cells:*
- Bone marrow aspirate concentrate
- Adipose-derived cells
- Research ongoing

*Growth Factors:*
- PDGF
- PTH analogs (teriparatide for fracture healing)
- Limited clinical data

**Advanced Fixation:**

*Angle-Stable Locking:*
- Variable angle locking
- Polyaxial screws
- Optimized construct stiffness

*Intramedullary Technology:*
- Antimicrobial coating
- Biodegradable implants (research)
- Motorized lengthening nails

*Navigation/Robotics:*
- Percutaneous fixation
- Reduction assistance
- Complex deformity correction

**Limb Lengthening:**

*Principles:*
- Ilizarov technique
- Distraction osteogenesis
- 1mm/day (0.25mm x4)

*Indications:*
- Limb length discrepancy
- Bone defect reconstruction
- Deformity correction

*Modern Techniques:*
- Motorized intramedullary nails (PRECICE, STRYDE)
- Reduced external fixation time
- Improved patient tolerance

**Bone Transport:**

*Technique:*
- Corticotomy + gradual transport
- Docking site management
- Often combined with internal fixation

*Alternatives:*
- Masquelet (induced membrane)
- Vascularized fibula
- Mega-prosthesis

**Infection Prevention:**

*Strategies:*
- Antibiotic-coated implants
- Silver/iodine coatings
- Local antibiotic delivery
- Optimized prophylaxis timing

*Novel Approaches:*
- Biofilm disruption
- Phage therapy (research)
- Immunomodulation

**Outcome Optimization:**

*Patient Factors:*
- Smoking cessation (critical)
- Nutritional status
- Glycemic control
- Vitamin D optimization

*Rehabilitation:*
- Early motion protocols
- Weight-bearing progression
- Functional outcomes focus

*Measuring Outcomes:*
- SMFA, DASH, LEFS
- Return to work/activity
- Quality of life

**Geriatric Fractures:**

*Challenges:*
- Osteoporotic bone
- Comorbidities
- Cognitive impairment
- High mortality

*Principles:*
- Early surgery (<24-48 hours)
- Co-management models
- Weight bearing as tolerated
- Fall prevention

*Hip Fracture:*
- Mortality: 20-30% at 1 year
- Comanagement reduces complications
- Early surgery improves outcomes

**Post-Traumatic Arthritis:**

*Prevention:*
- Anatomic articular reduction
- Early motion
- Address alignment

*Management:*
- Activity modification
- Injections
- Arthrodesis vs. arthroplasty

**Research Frontiers:**

*Tissue Engineering:*
- Scaffolds + cells + signals
- Vascularized constructs
- Functional bone generation

*Gene Therapy:*
- Growth factor gene delivery
- Local expression
- Research phase

*Personalized Medicine:*
- Genetic healing predictors
- Treatment selection optimization
- Biomarker development`,
      keyTerms: [
        { term: 'distraction osteogenesis', definition: 'Ilizarov principle: Gradual separation of bone segments stimulates new bone formation' },
        { term: 'motorized lengthening nail', definition: 'Implantable device allowing controlled internal bone lengthening without external fixator' },
        { term: 'induced membrane', definition: 'Masquelet technique: Membrane forms around cement spacer, provides vascular osteogenic environment' },
        { term: 'biofilm', definition: 'Bacterial community on implant surface resistant to antibiotics and immune system' },
        { term: 'comanagement', definition: 'Collaborative care model with medicine/hospitalist service for perioperative optimization' },
        { term: 'SMFA', definition: 'Short Musculoskeletal Function Assessment; patient-reported outcome measure' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Open fracture antibiotics within 1 hour
- Gustilo IIIC = vascular injury requiring repair
- Smoking: 50% increased nonunion risk
- Hip fracture mortality: 20-30% at 1 year
- Articular fractures: Anatomic reduction required

**Emerging Evidence:**
- Motorized lengthening nails transforming limb reconstruction
- BMP effective but complications limit use
- Geriatric comanagement improves outcomes
- Early surgery for hip fractures saves lives

**Practice Considerations:**
- Multidisciplinary approach for complex cases
- Patient optimization modifiable factors
- Outcome measurement drives quality
- Post-traumatic arthritis is common long-term sequela`,
    },
  },

  media: [
    {
      id: 'fracture-fixation-types',
      type: 'diagram',
      filename: 'fracture-fixation-types.svg',
      title: 'Types of Fracture Fixation',
      description: 'Plates, nails, external fixators, and screws',
    },
    {
      id: 'bone-healing-stages',
      type: 'diagram',
      filename: 'bone-healing-stages.svg',
      title: 'Stages of Bone Healing',
      description: 'Inflammation, soft callus, hard callus, remodeling',
    },
  ],
  citations: [
    {
      id: 'rockwood-greens',
      type: 'textbook',
      title: 'Rockwood and Green\'s Fractures in Adults',
      source: 'Wolters Kluwer',
      license: 'Copyright Wolters Kluwer',
    },
    {
      id: 'ao-principles',
      type: 'textbook',
      title: 'AO Principles of Fracture Management',
      source: 'AO Foundation',
      url: 'https://www.aofoundation.org/',
      license: 'Copyright AO Foundation',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-fracture-types', targetType: 'condition', relationship: 'related', label: 'Fracture Types' },
    { targetId: 'ortho-bone-anatomy', targetType: 'structure', relationship: 'related', label: 'Bone Anatomy' },
    { targetId: 'ortho-physical-therapy', targetType: 'topic', relationship: 'related', label: 'Physical Therapy' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'surgery'],
    keywords: ['fracture', 'fixation', 'plate', 'nail', 'bone healing', 'trauma surgery'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fractureManagementContent;
