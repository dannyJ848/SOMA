import { EducationalContent } from '../../types';

export const kneeJointAnatomy: EducationalContent = {
  id: 'ortho-patient-knee-joint',
  type: 'structure',
  name: 'Knee Joint Anatomy',
  alternateNames: ['Knee', 'Tibiofemoral joint', 'Patellofemoral joint'],

  levels: {
    1: {
      level: 1,
      summary: 'Your knee is the largest joint in your body, connecting your thigh bone to your shin bone and allowing you to bend and straighten your leg.',
      explanation: `Your knee is like a door hinge that lets your leg bend and straighten. It's made up of bones, cartilage, ligaments, and tendons working together.

**Parts of Your Knee:**
- **Femur**: Your thigh bone (top part of knee)
- **Tibia**: Your shin bone (bottom part of knee)
- **Patella**: Your kneecap (front of knee)
- **Meniscus**: Rubbery cushions between the bones

**What Holds It Together:**
- **Ligaments**: Strong bands connecting bones to bones
- **Tendons**: Connect muscles to bones
- **Muscles**: Quadriceps (front) and hamstrings (back)

**Common Knee Problems:**
- Ligament tears (like ACL)
- Meniscus tears
- Arthritis (cartilage wear)
- Tendonitis

**Keeping Your Knees Healthy:**
- Strengthen the muscles around your knee
- Warm up before exercise
- Maintain a healthy weight
- Wear proper footwear`,
      keyTerms: [
        { term: 'patella', definition: 'Your kneecap, the small bone in front of your knee' },
        { term: 'meniscus', definition: 'Rubbery cushion in your knee that absorbs shock' },
        { term: 'ligament', definition: 'Strong band that connects bone to bone' },
      ],
      analogies: [
        'Your knee works like a door hinge, opening and closing in one direction.',
        'The meniscus is like a shock absorber in a car.',
        'The patella is like a shield protecting the front of your knee.',
      ],
      examples: [
        'When you climb stairs, your knee bends and straightens with each step.',
        'When you kick a ball, your quadriceps muscle straightens your knee forcefully.',
      ],
    },
    2: {
      level: 2,
      summary: 'The knee is a complex hinge joint composed of the tibiofemoral and patellofemoral articulations, stabilized by four major ligaments and two menisci.',
      explanation: `The knee joint is the largest synovial joint in the body, combining two functional joints.

**Bony Anatomy:**
- **Femoral condyles**: Two rounded surfaces at distal femur
- **Tibial plateau**: Flat surface at proximal tibia
- **Patella**: Sesamoid bone in quadriceps tendon

**Menisci:**
- **Medial meniscus**: C-shaped, attached to MCL
- **Lateral meniscus**: More circular, more mobile
- Functions: Load distribution, shock absorption, stability

**Major Ligaments:**
- **ACL**: Prevents anterior tibial translation
- **PCL**: Prevents posterior tibial translation
- **MCL**: Resists valgus stress
- **LCL**: Resists varus stress

**Knee Movements:**
- Flexion: 0-140 degrees
- Extension: 0 degrees (slight hyperextension normal)
- Internal/external rotation: ~10 degrees when flexed

**Muscles:**
- Quadriceps: Four muscles extending knee
- Hamstrings: Three muscles flexing knee
- Gastrocnemius: Also crosses knee joint`,
      keyTerms: [
        { term: 'ACL', definition: 'Anterior cruciate ligament; prevents forward movement of tibia' },
        { term: 'PCL', definition: 'Posterior cruciate ligament; prevents backward movement of tibia' },
        { term: 'MCL', definition: 'Medial collateral ligament; stabilizes inner knee' },
        { term: 'LCL', definition: 'Lateral collateral ligament; stabilizes outer knee' },
      ],
      analogies: [
        'The ACL and PCL cross inside the knee like an X, providing rotational stability.',
        'The menisci are like washers that distribute the weight evenly across the joint.',
      ],
    },
    3: {
      level: 3,
      summary: 'Knee stability depends on static (ligaments, menisci, geometry) and dynamic (muscular) stabilizers, with injury patterns predictable based on mechanism and anatomic vulnerability.',
      explanation: `Understanding knee anatomy requires appreciation of the interplay between stabilizing structures.

**Ligament Anatomy:**

*ACL:*
- Origin: Lateral femoral condyle (posteromedial)
- Insertion: Anterior tibial spine
- Two bundles: Anteromedial (flexion), Posterolateral (extension)
- Blood supply: Middle geniculate artery

*PCL:*
- Origin: Medial femoral condyle
- Insertion: Posterior tibial surface
- Stronger than ACL
- Anterolateral and posteromedial bundles

*MCL:*
- Superficial: Femur to tibia
- Deep: Femur to meniscus to tibia
- Primary valgus restraint

*LCL:*
- Femur to fibular head
- Primary varus restraint
- Not attached to meniscus

**Meniscal Anatomy:**
- Medial: Less mobile, more commonly torn
- Lateral: More mobile, associated with ACL injury
- Vascular zones: Red-red, red-white, white-white
- Healing potential based on vascularity

**Posterolateral Corner:**
- LCL, popliteus, popliteofibular ligament
- Critical for stability
- Often missed injury

**Extensor Mechanism:**
- Quadriceps tendon
- Patella
- Patellar tendon
- Q-angle: Normal <15-20 degrees

**Patellofemoral Joint:**
- Patellar tracking in trochlear groove
- MPFL primary medial restraint
- Lateral structures (LPFL, ITB)`,
      keyTerms: [
        { term: 'posterolateral corner', definition: 'Complex of structures stabilizing lateral and posterior knee' },
        { term: 'MPFL', definition: 'Medial patellofemoral ligament; primary restraint to lateral patellar displacement' },
        { term: 'Q-angle', definition: 'Angle between quadriceps pull and patellar tendon; measure of alignment' },
      ],
      clinicalNotes: 'Pivot shift test is the most specific for ACL rupture. Combined ACL/MCL injuries common. Posterolateral corner injuries often missed initially and associated with poor outcomes if untreated.',
    },
    4: {
      level: 4,
      summary: 'Knee biomechanics involve complex kinematics with coupled rotation and translation, tibiofemoral contact mechanics, and patellofemoral loading patterns critical for surgical planning and rehabilitation.',
      explanation: `Advanced knee anatomy integrates structural concepts with biomechanical function.

**Knee Kinematics:**
- Not a simple hinge
- "Screw-home" mechanism: External rotation with terminal extension
- Femoral rollback with flexion
- Instantaneous center of rotation varies

**Tibiofemoral Contact:**
- Medial compartment: More congruent
- Lateral compartment: Convex-on-convex
- Contact area increases with load
- Menisci bear 50-70% of load

**Ligament Biomechanics:**

*ACL:*
- Ultimate load: 2200N
- Stiffness: 242 N/mm
- Anterior drawer restraint: 85%
- Most at-risk position: Near extension, valgus, rotation

*PCL:*
- Stronger than ACL (twice as thick)
- Primary restraint to posterior translation

*MCL:*
- Primary restraint to valgus: 0-30 degrees
- Secondary restraint with ACL deficiency

**Patellofemoral Mechanics:**
- Contact begins at 20 degrees flexion
- Contact moves proximally with flexion
- Forces: 0.5x BW level walking, 7-8x BW squatting
- Lateral tracking tendency requires dynamic control

**Meniscal Load Transmission:**
- Hoop stress mechanism
- Radial tears disrupt load transmission
- Total meniscectomy increases contact stress 235%

**Muscle Function:**
- Quadriceps: ACL antagonist (anterior translation force)
- Hamstrings: ACL agonist (protective)
- Gastrocnemius: Posterior translation force
- Co-contraction provides dynamic stability`,
      keyTerms: [
        { term: 'screw-home mechanism', definition: 'External rotation of tibia during terminal knee extension' },
        { term: 'hoop stress', definition: 'Circumferential stress in meniscus that distributes compressive loads' },
        { term: 'femoral rollback', definition: 'Posterior translation of femoral contact point during knee flexion' },
      ],
      clinicalNotes: 'Understanding biomechanics guides rehabilitation. Early quadriceps activation after ACL reconstruction increases graft strain; hamstring strengthening is protective.',
    },
    5: {
      level: 5,
      summary: 'Contemporary knee surgery integrates advanced imaging, biomechanical principles, and evidence-based approaches to optimize outcomes in ligament reconstruction, meniscal surgery, and arthroplasty.',
      explanation: `Expert knee care requires comprehensive understanding of surgical options and outcome optimization.

**ACL Reconstruction:**

*Graft Options:*
- BPTB: Gold standard, donor site morbidity
- Hamstring: Less morbidity, fixation considerations
- Quadriceps: Emerging option
- Allograft: Indicated in revision, older patients

*Tunnel Positioning:*
- Anatomic reconstruction preferred
- Anteromedial portal drilling
- Independent femoral tunnel

*Return to Sport:*
- 9-12 months minimum for graft maturation
- Criteria-based progression
- Re-tear risk: 5-15% (higher in young athletes)

**Meniscal Surgery:**
- Repair vs. resection decision
- All-inside, inside-out, outside-in techniques
- Root repair gaining importance
- MAT for post-meniscectomy syndrome

**Cartilage Restoration:**
- Microfracture: First-line, fibrocartilage result
- OATS: Small focal lesions
- ACI/MACI: Larger lesions
- OCA: Salvage procedure

**Multiligament Knee:**
- KD classification
- Staged vs. acute repair
- Nerve and vascular assessment critical
- Posterolateral corner reconstruction techniques

**TKA Considerations:**
- Alignment: Mechanical vs. kinematic
- Gap balancing vs. measured resection
- Implant design: CR, PS, CCK
- Robotic-assisted surgery

**Outcomes:**
- ACL: 85-90% return to sport at same level
- Meniscal repair: 85-90% healing
- TKA: 15-20% dissatisfied (persistent symptoms)

**Registry Data:**
- Revision rates inform implant selection
- Long-term survivorship data
- Patient-reported outcomes`,
      keyTerms: [
        { term: 'anatomic ACL reconstruction', definition: 'Tunnel placement replicating native ACL footprints' },
        { term: 'kinematic alignment', definition: 'TKA technique preserving constitutional alignment' },
        { term: 'MACI', definition: 'Matrix-induced autologous chondrocyte implantation; cartilage restoration technique' },
      ],
      clinicalNotes: 'ACL graft choice should be individualized. BPTB remains gold standard for high-level athletes. Return-to-sport testing should include strength, hop tests, and psychological readiness.',
    },
  },

  media: [
    {
      id: 'knee-anatomy',
      type: 'diagram',
      filename: 'knee-joint-anatomy.svg',
      title: 'Knee Joint Anatomy',
      description: 'Structures of the knee including ligaments and menisci',
    },
  ],
  citations: [
    {
      id: 'knee-anatomy-ref',
      type: 'textbook',
      title: 'Knee Joint Anatomy and Biomechanics',
      source: 'Orthopedic Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-bones-joints-overview', targetType: 'concept', relationship: 'parent', label: 'Bones and Joints Overview' },
    { targetId: 'ortho-patient-ligament-tears', targetType: 'condition', relationship: 'related', label: 'Ligament Tears' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['anatomy', 'orthopedics', 'knee'],
    keywords: ['knee', 'ACL', 'meniscus', 'ligament'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default kneeJointAnatomy;
