import { EducationalContent } from '../../types';

export const fracturesContent: EducationalContent = {
  id: 'ortho-patient-fractures',
  type: 'condition',
  name: 'Fractures',
  alternateNames: ['Broken bone', 'Bone fracture', 'Osseous fracture'],

  levels: {
    1: {
      level: 1,
      summary: 'A fracture is a broken bone that happens when too much force is applied to the bone. Most fractures heal well with proper treatment.',
      explanation: `A fracture means your bone is broken. Bones are strong but can break when hit hard, twisted, or stressed repeatedly.

**Common Causes:**
- Falls
- Car accidents
- Sports injuries
- Overuse (stress fractures)

**Signs of a Fracture:**
- Pain that gets worse with movement
- Swelling and bruising
- Deformity (looks bent or out of place)
- Unable to use the injured area
- Tenderness when touched

**Types of Fractures:**
- **Simple**: Bone breaks but skin is intact
- **Open (compound)**: Bone breaks through skin - emergency!
- **Stress**: Small cracks from repetitive use

**Treatment:**
- Keeping the bone still (cast, splint, brace)
- Sometimes surgery with plates, screws, or rods
- Pain management
- Physical therapy during recovery

**Healing Time:**
- Most fractures heal in 6-8 weeks
- Some take longer depending on location and severity`,
      keyTerms: [
        { term: 'fracture', definition: 'A break in a bone' },
        { term: 'cast', definition: 'Hard covering that keeps a broken bone still while it heals' },
        { term: 'open fracture', definition: 'A break where bone comes through the skin' },
      ],
      analogies: [
        'A fracture is like a crack in a tree branch - it needs time and the right conditions to heal.',
        'A cast is like scaffolding around a building being repaired.',
      ],
      examples: [
        'A wrist fracture often happens when you fall and catch yourself with your hand.',
        'Stress fractures in the foot are common in runners who increase their mileage too quickly.',
      ],
    },
    2: {
      level: 2,
      summary: 'Fractures are classified by pattern, displacement, and soft tissue involvement. Treatment depends on stability, alignment, and patient factors.',
      explanation: `Fractures occur when bone stress exceeds bone strength. Classification guides treatment decisions.

**Fracture Patterns:**
- **Transverse**: Straight across the bone
- **Oblique**: Angled break
- **Spiral**: Twisting injury pattern
- **Comminuted**: Multiple fragments
- **Segmental**: Two breaks isolating a segment
- **Compression**: Crushed bone (common in spine)

**Descriptive Terms:**
- Displaced vs. non-displaced
- Open vs. closed
- Stable vs. unstable
- Intra-articular vs. extra-articular

**Healing Process:**
1. Inflammation (days 1-7)
2. Soft callus (weeks 2-3)
3. Hard callus (weeks 4-12)
4. Remodeling (months to years)

**Treatment Principles:**
- Reduction: Restoring alignment
- Immobilization: Maintaining position
- Rehabilitation: Restoring function

**Non-operative Treatment:**
- Casting/splinting
- Functional bracing
- Sling/protective weight-bearing

**Operative Indications:**
- Unstable fractures
- Displaced intra-articular fractures
- Open fractures
- Failed closed treatment`,
      keyTerms: [
        { term: 'reduction', definition: 'Realigning broken bone fragments to their normal position' },
        { term: 'callus', definition: 'New bone that forms during fracture healing' },
        { term: 'intra-articular', definition: 'Fracture extending into a joint surface' },
        { term: 'comminuted', definition: 'Fracture with multiple bone fragments', pronunciation: 'COM-ih-noo-ted' },
      ],
      analogies: [
        'Fracture healing is like welding - first you get a rough connection, then it refines over time.',
        'Callus formation is like patching a pothole - it overfills initially then smooths out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Fracture management requires understanding of healing biology, stability principles, and complication recognition. Treatment balances fracture stability with soft tissue preservation.',
      explanation: `Comprehensive fracture care requires understanding of biological and mechanical factors.

**Fracture Healing Biology:**
- Primary (direct): Rigid fixation, cutting cone remodeling
- Secondary (indirect): Motion permitted, callus formation
- Most fractures heal by secondary healing

**Factors Affecting Healing:**
*Patient:*
- Age, nutrition, smoking
- Diabetes, vascular disease
- Medications (NSAIDs, steroids)

*Fracture:*
- Location (metaphyseal > diaphyseal)
- Blood supply disruption
- Degree of soft tissue injury

*Treatment:*
- Stability of fixation
- Reduction quality
- Timing of surgery

**Stability Concepts:**
- Absolute stability: Compression plating, lag screws
- Relative stability: Bridging plates, intramedullary nails
- Match stability to fracture pattern and biology

**Open Fracture Management:**
- Gustilo-Anderson classification
- Antibiotics within 1 hour
- Tetanus prophylaxis
- Irrigation and debridement
- Soft tissue coverage timing

**Common Complications:**
- Nonunion (failure to heal)
- Malunion (heals in poor position)
- Infection
- Compartment syndrome
- Hardware failure
- Complex regional pain syndrome

**Rehabilitation Principles:**
- Early motion when stable
- Progressive weight-bearing
- Strengthen surrounding muscles
- Prevent stiffness`,
      keyTerms: [
        { term: 'nonunion', definition: 'Fracture that fails to heal; typically defined as no progress at 9 months' },
        { term: 'malunion', definition: 'Fracture that heals in unacceptable position' },
        { term: 'Gustilo-Anderson', definition: 'Classification system for open fractures based on wound size and contamination' },
        { term: 'compartment syndrome', definition: 'Increased pressure in muscle compartment compromising blood flow' },
      ],
      clinicalNotes: 'Compartment syndrome is a surgical emergency. The 6 Ps (pain with passive stretch most sensitive) indicate need for urgent fasciotomy.',
    },
    4: {
      level: 4,
      summary: 'Fracture fixation applies mechanical principles to achieve stability while preserving blood supply. Understanding working length, construct stiffness, and load sharing guides implant selection and technique.',
      explanation: `Advanced fracture management integrates biomechanics with surgical technique.

**Biomechanical Principles:**

*Fixation Constructs:*
- Plates: Neutralization, compression, bridging, buttress
- Intramedullary nails: Load-sharing, allows controlled motion
- External fixation: Temporary or definitive, preserves soft tissue

*Construct Stiffness:*
- Working length: Distance between fixed points
- Shorter working length = stiffer construct
- Affects strain at fracture site

*Strain Theory:*
- Strain = Deformation / Gap
- Bone tolerates 2-10% strain
- Too much motion: Nonunion
- Too little motion: Atrophic healing

**Plate Biomechanics:**
- Plate length ratio: Minimum 2-3x fracture length
- Screw density: Balance stability vs. blood supply
- Locking vs. non-locking screws
- Plate position affects bending strength

**Intramedullary Nailing:**
- Reams vs. unreamed
- Static vs. dynamic locking
- Nail diameter and working length
- Starting point affects alignment

**Articular Fractures:**
- Anatomic reduction critical
- Step-off >2mm increases arthritis risk
- Lag screw technique
- Buttress plating for metaphyseal extension

**Special Considerations:**
- Pathologic fractures: Stabilization vs. healing
- Periprosthetic fractures: Vancouver classification
- Pediatric fractures: Growth plate considerations`,
      keyTerms: [
        { term: 'working length', definition: 'Distance between nearest fixation points to fracture' },
        { term: 'strain', definition: 'Deformation relative to original length; affects healing type' },
        { term: 'lag screw', definition: 'Screw technique that compresses fracture fragments together' },
        { term: 'locking plate', definition: 'Plate with threaded screw holes creating fixed-angle construct' },
      ],
      clinicalNotes: 'Long span bridging plates with limited screws near fracture preserve biology while providing stability. Locking plates function as internal external fixators.',
    },
    5: {
      level: 5,
      summary: 'Contemporary fracture care integrates evidence-based protocols, biological enhancement strategies, and outcome-focused rehabilitation. Challenges include optimization of healing environment and management of complex injuries.',
      explanation: `Expert fracture management requires understanding of current evidence and emerging technologies.

**Evidence-Based Protocols:**

*Timing of Surgery:*
- Open fractures: Early debridement (6 hours)
- Femur fractures: Early fixation reduces complications
- Polytrauma: Damage control orthopedics vs. early total care

*Antibiotic Protocols:*
- Open fractures: Cephalosporin +/- aminoglycoside
- Duration based on grade and soft tissue coverage

**Biological Enhancement:**

*Bone Graft Options:*
- Autograft: Gold standard, limited quantity
- Allograft: No donor morbidity, slower incorporation
- Synthetics: Osteoconductive scaffolds

*Biologics:*
- BMP-2: FDA approved for tibial fractures, spine
- PRP: Variable evidence
- Stem cells: Investigational

**Complex Fracture Patterns:**

*Periarticular Fractures:*
- Tibial plateau: Schatzker classification
- Distal femur: Retrograde nail vs. plating
- Distal radius: Volar plating standard

*Polytrauma:*
- DCO principles
- Staged treatment
- Optimize resuscitation

**Outcome Measures:**
- DASH, SMFA for function
- SF-36 for quality of life
- Return to work/sport

**Complications Management:**

*Nonunion:*
- Hypertrophic: Mechanical problem
- Atrophic: Biological problem
- Treatment: Address underlying cause

*Infection:*
- Staged treatment often required
- Biofilm considerations
- Antibiotic-impregnated cement spacers

**Emerging Concepts:**
- 3D-printed implants
- Navigation and robotics
- Biologics optimization
- Fragility fracture programs`,
      keyTerms: [
        { term: 'damage control orthopedics', definition: 'Staged treatment prioritizing patient physiology over definitive fracture fixation' },
        { term: 'BMP-2', definition: 'Bone morphogenetic protein-2; biologic agent promoting bone formation' },
        { term: 'biofilm', definition: 'Bacterial community on implant surface resistant to antibiotics' },
      ],
      clinicalNotes: 'Fragility fracture after age 50 indicates need for osteoporosis workup. FLS (Fracture Liaison Services) reduce secondary fracture risk by 30-40%.',
    },
  },

  media: [
    {
      id: 'fracture-types',
      type: 'diagram',
      filename: 'fracture-patterns.svg',
      title: 'Fracture Patterns',
      description: 'Common fracture pattern types',
    },
  ],
  citations: [
    {
      id: 'fracture-ref',
      type: 'textbook',
      title: 'Fracture Management and Healing',
      source: 'Orthopedic Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-fracture-fixation', targetType: 'concept', relationship: 'related', label: 'Fracture Fixation' },
    { targetId: 'ortho-patient-recovery-timelines', targetType: 'concept', relationship: 'related', label: 'Recovery Timelines' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'fractures'],
    keywords: ['fracture', 'broken bone', 'healing', 'fixation'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default fracturesContent;
