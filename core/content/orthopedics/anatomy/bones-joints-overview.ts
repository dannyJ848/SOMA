import { EducationalContent } from '../../types';

export const bonesJointsOverview: EducationalContent = {
  id: 'ortho-patient-bones-joints-overview',
  type: 'concept',
  name: 'Bones and Joints Overview',
  alternateNames: ['Skeletal system basics', 'Musculoskeletal anatomy', 'Bone and joint fundamentals'],

  levels: {
    1: {
      level: 1,
      summary: 'Your body has 206 bones connected by joints that allow you to move, protect your organs, and give you shape.',
      explanation: `Your skeleton is like the frame of a building - it holds everything together and gives your body its shape. Bones and joints work together to let you move around.

**Your Bones:**
- Adults have 206 bones in their body
- Bones are alive and always growing and repairing themselves
- They protect important organs (skull protects brain, ribs protect heart and lungs)
- The inside of some bones makes blood cells

**Your Joints:**
- Joints are where two or more bones meet
- They allow your body to bend and move
- Some joints move a lot (like your shoulder), others barely move at all (like in your skull)

**Main Types of Joints:**
- **Ball-and-socket joints**: Hip and shoulder - can move in circles
- **Hinge joints**: Knee and elbow - bend back and forth like a door
- **Pivot joints**: Neck - lets you turn your head side to side

**What Keeps Joints Working:**
- **Cartilage**: Smooth, slippery coating on bones that lets them glide
- **Ligaments**: Strong bands that connect bones to bones
- **Tendons**: Connect muscles to bones so you can move
- **Synovial fluid**: Slippery liquid that lubricates joints like oil in a machine

**Keeping Bones and Joints Healthy:**
- Get enough calcium and vitamin D
- Exercise regularly (weight-bearing activities build strong bones)
- Maintain a healthy weight
- Avoid smoking
- Don't ignore pain - it's your body's warning signal`,
      keyTerms: [
        { term: 'bone', definition: 'Hard tissue that makes up your skeleton and protects organs' },
        { term: 'joint', definition: 'Place where two or more bones meet and allow movement' },
        { term: 'cartilage', definition: 'Smooth, rubbery tissue covering bones at joints' },
        { term: 'ligament', definition: 'Strong band connecting bone to bone' },
        { term: 'tendon', definition: 'Cord connecting muscle to bone' },
      ],
      analogies: [
        'Your skeleton is like the steel frame of a building - it provides structure and support.',
        'Joints are like door hinges - they allow movement at connection points.',
        'Cartilage is like the Teflon coating on a pan - it makes things slide smoothly.',
        'Synovial fluid is like motor oil - it keeps the moving parts lubricated.',
      ],
      examples: [
        'When you bend your arm, your elbow joint works like a hinge on a door.',
        'When you throw a ball, your shoulder moves in a circle because it is a ball-and-socket joint.',
        'The bones in your skull barely move because they protect your brain.',
      ],
    },
    2: {
      level: 2,
      summary: 'The skeletal system consists of 206 bones classified by shape, connected by joints that vary in structure and mobility, supported by cartilage, ligaments, and synovial fluid.',
      explanation: `The skeletal system provides the structural framework for the body, enabling movement while protecting vital organs and producing blood cells.

**Bone Classification by Shape:**
- **Long bones**: Arms (humerus), legs (femur, tibia) - act as levers for movement
- **Short bones**: Wrist (carpals), ankle (tarsals) - provide stability
- **Flat bones**: Skull, ribs, pelvis - protect organs
- **Irregular bones**: Vertebrae, some facial bones - various functions
- **Sesamoid bones**: Patella (kneecap) - embedded in tendons

**Bone Structure:**
- **Compact bone**: Dense outer layer providing strength
- **Spongy bone**: Internal honeycomb structure, lighter but still strong
- **Periosteum**: Outer membrane with blood vessels and nerves
- **Bone marrow**: Inner cavity (red marrow makes blood cells, yellow marrow stores fat)

**Joint Classifications:**

*By Movement:*
- **Synarthrosis**: Immovable (skull sutures)
- **Amphiarthrosis**: Slightly movable (vertebrae, pubic symphysis)
- **Diarthrosis**: Freely movable (most limb joints)

*Synovial Joint Types:*
- **Ball-and-socket**: Maximum range (hip, shoulder)
- **Hinge**: Single-plane bending (elbow, knee, fingers)
- **Pivot**: Rotation (neck, forearm)
- **Condyloid**: Two-plane movement (wrist)
- **Saddle**: Thumb base (carpometacarpal)
- **Plane/Gliding**: Small sliding movements (between vertebrae)

**Joint Components:**
- **Articular cartilage**: Hyaline cartilage covering bone ends
- **Joint capsule**: Fibrous tissue enclosing the joint
- **Synovial membrane**: Inner lining producing synovial fluid
- **Ligaments**: Stabilize and limit movement
- **Bursae**: Fluid-filled sacs reducing friction

**Common Joint Problems:**
- Arthritis: Cartilage breakdown causing pain and stiffness
- Sprains: Stretched or torn ligaments
- Dislocations: Bones forced out of alignment
- Bursitis: Inflammation of bursae`,
      keyTerms: [
        { term: 'synovial joint', definition: 'Freely movable joint with a fluid-filled cavity', pronunciation: 'sih-NOH-vee-ul' },
        { term: 'diarthrosis', definition: 'Joint classification for freely movable joints', pronunciation: 'dy-ar-THROH-sis' },
        { term: 'articular cartilage', definition: 'Smooth cartilage covering bone surfaces within joints' },
        { term: 'periosteum', definition: 'Membrane covering bones containing blood vessels and nerves', pronunciation: 'peri-OS-tee-um' },
        { term: 'bursa', definition: 'Fluid-filled sac near joints that reduces friction', pronunciation: 'BUR-suh' },
      ],
      analogies: [
        'Spongy bone is like a honeycomb - strong structure with minimal weight.',
        'The joint capsule is like a balloon surrounding the joint, keeping everything contained.',
        'Bursae are like small water pillows that cushion areas of friction.',
      ],
    },
    3: {
      level: 3,
      summary: 'The musculoskeletal system integrates bones, joints, cartilage, and supporting structures, with joint stability determined by bone geometry, ligamentous support, and muscular control.',
      explanation: `Understanding musculoskeletal anatomy requires appreciation of the interplay between passive (bone, ligament) and active (muscle) stabilizers.

**Bone Biology:**
- Cortical bone: 80% of skeleton, dense (5-10% porosity)
- Trabecular bone: 20% of skeleton, porous (50-90% porosity)
- Bone remodeling: Continuous process balancing osteoclasts (resorption) and osteoblasts (formation)
- Peak bone mass achieved by age 25-30

**Bone Mineral Density:**
- Measured by DXA (dual-energy X-ray absorptiometry)
- T-score: Comparison to young adult reference
- Normal: T-score > -1.0
- Osteopenia: T-score -1.0 to -2.5
- Osteoporosis: T-score < -2.5

**Joint Stability Factors:**

*Passive Stabilizers:*
- Bone geometry (socket depth, congruence)
- Articular cartilage
- Ligaments (primary restraints)
- Joint capsule
- Labrum (hip, shoulder)
- Menisci (knee)

*Active Stabilizers:*
- Muscles crossing the joint
- Dynamic stability through co-contraction
- Neuromuscular control

**Cartilage Structure:**
- Hyaline cartilage: Most articular surfaces
  - Type II collagen (tensile strength)
  - Proteoglycans/aggrecan (compressive resistance)
  - 65-80% water content
  - Avascular - nutrition via synovial fluid diffusion
- Fibrocartilage: Menisci, intervertebral discs, labrum
  - Type I collagen predominant
  - More resistant to shear

**Synovial Fluid:**
- Dialysate of plasma + hyaluronic acid
- Functions: Lubrication, shock absorption, nutrient delivery
- Normal: Clear, viscous, <200 WBC/mL
- Abnormal appearance suggests pathology

**Range of Motion Norms:**

| Joint | Movement | Normal Range |
|-------|----------|--------------|
| Shoulder | Flexion | 180 degrees |
| Shoulder | Abduction | 180 degrees |
| Shoulder | External rotation | 90 degrees |
| Elbow | Flexion | 145 degrees |
| Hip | Flexion | 125 degrees |
| Knee | Flexion | 140 degrees |
| Ankle | Dorsiflexion | 20 degrees |
| Ankle | Plantarflexion | 50 degrees |

**Joint Loading:**
- Walking: Hip/knee load = 3-4x body weight
- Running: Up to 5-6x body weight
- Stair climbing: 4-5x body weight
- Excess weight significantly increases joint stress`,
      keyTerms: [
        { term: 'DXA scan', definition: 'Dual-energy X-ray absorptiometry; imaging to measure bone mineral density' },
        { term: 'T-score', definition: 'Bone density comparison to young adult peak; used to diagnose osteoporosis' },
        { term: 'proteoglycan', definition: 'Large molecules in cartilage that attract water and resist compression', pronunciation: 'pro-tee-oh-GLY-can' },
        { term: 'labrum', definition: 'Fibrocartilage rim deepening the hip and shoulder sockets', pronunciation: 'LAY-brum' },
        { term: 'meniscus', definition: 'C-shaped fibrocartilage in the knee that distributes load', pronunciation: 'men-IS-kus' },
      ],
      clinicalNotes: 'Joint stability exists on a spectrum from hypermobility (increased range) to restricted motion. Both extremes can be problematic. Hypermobility increases injury risk; restricted motion affects function and may indicate underlying pathology.',
    },
    4: {
      level: 4,
      summary: 'Joint biomechanics involve complex interactions between articular geometry, soft tissue constraints, and neuromuscular control, with stability governed by the balance between mobility and constraint at each articulation.',
      explanation: `Advanced understanding of musculoskeletal function requires integration of anatomy, biomechanics, and physiology.

**Bone Mechanobiology:**
- Wolff's Law: Bone adapts to loads placed upon it
- Mechanostat theory (Frost): Bone responds to strain magnitude
  - Disuse: <50-100 microstrain leads to resorption
  - Maintenance: 100-1500 microstrain
  - Strengthening: 1500-3000 microstrain
  - Damage: >3000 microstrain
- Bone modeling vs. remodeling
- Stress shielding with implants

**Cartilage Biomechanics:**
- Biphasic material (solid matrix + fluid)
- Viscoelastic properties (time-dependent response)
- Creep under constant load
- Stress relaxation
- Coefficient of friction: 0.001-0.01 (lower than ice on ice)

**Joint Contact Mechanics:**
- Contact stress = Force / Contact area
- Congruent joints: Lower peak stress, larger contact area
- Incongruent joints: Higher peak stress, smaller contact area
- Cartilage deformation redistributes load

**Ligament Properties:**
- Composed of Type I collagen (hierarchical structure)
- Nonlinear stress-strain relationship
- Toe region: Collagen crimp straightening
- Linear region: Fiber loading
- Failure region: Progressive fiber rupture
- Viscoelastic: Strain-rate dependent strength
- Healing: Scar tissue weaker than native ligament

**Joint Stability Paradigm:**
- Passive restraints provide primary stability
- Muscle activation provides dynamic stability
- Proprioceptive feedback modulates response
- Injury disrupts this coordinated system

**Proprioception:**
- Joint position sense
- Kinesthesia (movement sense)
- Receptors: Muscle spindles, GTOs, joint mechanoreceptors
- Deficit after injury contributes to instability
- Rehabilitation must address proprioceptive deficits

**Arthrokinematics:**
- Roll: New points contact each other
- Glide (slide): Same point contacts new points
- Spin: Rotation around axis perpendicular to surface
- Convex-concave rule guides mobilization

**Joint Forces:**
- Compression: Perpendicular to surface (resisted by cartilage)
- Shear: Parallel to surface (resisted by ligaments)
- Tension: Pulling force (resisted by capsule/ligaments)
- Torsion: Twisting force

**Kinetic Chain:**
- Open chain: Distal segment free (leg extension)
- Closed chain: Distal segment fixed (squat)
- Closed chain more functional for lower extremity
- Different muscle activation patterns`,
      keyTerms: [
        { term: 'Wolff\'s Law', definition: 'Principle that bone remodels in response to mechanical stress' },
        { term: 'viscoelastic', definition: 'Material properties dependent on both time and rate of loading' },
        { term: 'proprioception', definition: 'Sense of joint position and movement in space', pronunciation: 'pro-pree-oh-SEP-shun' },
        { term: 'arthrokinematics', definition: 'Movement patterns between articular surfaces (roll, glide, spin)' },
        { term: 'kinetic chain', definition: 'Linkage of body segments transmitting force during movement' },
        { term: 'stress shielding', definition: 'Bone loss due to load being carried by implant rather than bone' },
      ],
      clinicalNotes: 'Understanding biomechanics guides rehabilitation. Closed kinetic chain exercises are often preferred for lower extremity rehabilitation as they more closely replicate functional activities and provide joint compression that may be protective. Open chain exercises allow isolation of specific muscles but generate higher shear forces.',
    },
    5: {
      level: 5,
      summary: 'Contemporary musculoskeletal science integrates molecular biology of bone and cartilage homeostasis, advanced biomechanical modeling, and evidence-based approaches to optimizing joint health and preventing degenerative disease.',
      explanation: `Expert-level understanding encompasses the molecular basis of tissue maintenance, advanced imaging interpretation, and clinical decision-making.

**Bone Remodeling Signaling:**
- RANK/RANKL/OPG system controls osteoclastogenesis
- Wnt/beta-catenin pathway promotes osteoblast differentiation
- Sclerostin (osteocyte-derived) inhibits Wnt signaling
- PTH: Pulsatile = anabolic, continuous = catabolic
- Therapeutic targets: Denosumab (anti-RANKL), Romosozumab (anti-sclerostin)

**Cartilage Homeostasis:**
- Chondrocyte senescence with aging
- MMP/ADAMTS-mediated matrix degradation
- IL-1beta, TNF-alpha inflammatory signaling
- SOX9 transcription factor for chondrogenesis
- No effective regeneration of hyaline cartilage in adults

**Mechanotransduction:**
- Osteocyte lacunocanalicular network senses strain
- Primary cilium acts as mechanosensor
- Piezo channels respond to membrane deformation
- Integrin-cytoskeleton-nucleus signaling cascade
- Modulates bone formation/resorption balance

**Advanced Imaging:**
- MRI for soft tissue assessment
  - T2 mapping: Cartilage water content/collagen integrity
  - T1rho: Proteoglycan content
  - dGEMRIC: Glycosaminoglycan concentration
- CT for bone detail and fracture characterization
- Ultrasound for dynamic soft tissue assessment
- HR-pQCT for bone microarchitecture

**Quantitative Joint Assessment:**
- Radiographic scoring systems (Kellgren-Lawrence for OA)
- MRI semi-quantitative scoring (MOAKS, WORMS)
- Patient-reported outcomes (KOOS, HOOS, DASH)
- Functional testing (single-leg hop, Y-balance)

**Joint Preservation Strategies:**
- Weight management (5% loss improves symptoms)
- Exercise: Strengthening + aerobic + flexibility
- Load modification: Activity modification, orthotics, bracing
- Biologics: PRP, BMAC (evidence variable)
- Viscosupplementation: Variable evidence

**Predictive Modeling:**
- Machine learning for OA progression prediction
- Finite element analysis for joint loading
- Patient-specific surgical planning
- Risk stratification for joint replacement timing

**Prevention Evidence:**

*Primary Prevention:*
- Exercise reduces incident OA
- Weight management
- Injury prevention programs (ACL: >50% reduction)
- Occupational modifications

*Secondary Prevention:*
- Post-injury rehabilitation
- Meniscal preservation over resection
- ACL reconstruction in appropriate candidates
- Alignment correction when indicated

**Research Frontiers:**
- Disease-modifying OA drugs (DMOADs)
- Cell-based cartilage regeneration
- Gene therapy for osteoarthritis
- Wearable sensors for load monitoring
- Personalized medicine approaches

**Clinical Decision Framework:**
- Shared decision-making essential
- Consider patient goals, activity level, comorbidities
- Conservative management first for most conditions
- Surgery when function significantly impaired
- Prevention focus: Injury prevention, weight management, activity modification`,
      keyTerms: [
        { term: 'RANK/RANKL/OPG', definition: 'Cytokine system controlling osteoclast formation and bone resorption' },
        { term: 'sclerostin', definition: 'Osteocyte protein that inhibits bone formation; therapeutic target' },
        { term: 'mechanotransduction', definition: 'Process converting mechanical signals to biochemical responses in cells' },
        { term: 'T2 mapping', definition: 'MRI technique quantifying cartilage water content and collagen integrity' },
        { term: 'DMOAD', definition: 'Disease-Modifying Osteoarthritis Drug; hypothetical treatment to slow/stop OA progression' },
      ],
      clinicalNotes: `**Key Prevention Principles:**
- ACL injury prevention programs (FIFA 11+, PEP) reduce injuries by >50%
- Post-ACL reconstruction: Graft maturation takes 9-12 months; premature return increases re-tear risk
- Meniscal preservation crucial: Partial meniscectomy associated with 4x OA risk vs. repair
- Every 1 pound of weight lost reduces knee joint load by 4 pounds
- Exercise is medicine: Appropriate loading strengthens joint tissues

**Surgical Considerations:**
- Joint replacement: Consider when significant functional limitation despite conservative care
- Timing matters: Severely debilitated patients have worse outcomes
- Infection prevention: Optimize nutrition, diabetes control, smoking cessation
- Realistic expectations: 10-15% persistently dissatisfied after TKA`,
    },
  },

  media: [
    {
      id: 'skeletal-overview',
      type: 'diagram',
      filename: 'skeletal-system-overview.svg',
      title: 'Skeletal System Overview',
      description: 'Major bones of the human skeleton',
    },
    {
      id: 'joint-types',
      type: 'diagram',
      filename: 'synovial-joint-types.svg',
      title: 'Types of Synovial Joints',
      description: 'Ball-and-socket, hinge, pivot, condyloid, saddle, and plane joints',
    },
  ],
  citations: [
    {
      id: 'openstax-ap-skeletal',
      type: 'textbook',
      title: 'Anatomy and Physiology 2e - Bone Tissue and Skeletal System',
      source: 'OpenStax',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/6-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-spine-anatomy', targetType: 'structure', relationship: 'related', label: 'Spine Anatomy' },
    { targetId: 'ortho-patient-hip-joint', targetType: 'structure', relationship: 'related', label: 'Hip Joint' },
    { targetId: 'ortho-patient-knee-joint', targetType: 'structure', relationship: 'related', label: 'Knee Joint' },
    { targetId: 'ortho-patient-shoulder-joint', targetType: 'structure', relationship: 'related', label: 'Shoulder Joint' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['anatomy', 'orthopedics', 'bones', 'joints'],
    keywords: ['skeleton', 'bone', 'joint', 'cartilage', 'ligament', 'anatomy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bonesJointsOverview;
