/**
 * Joint Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const jointExamination: EducationalContent = {
  id: 'musculoskeletal-joint-examination',
  type: 'process',
  name: 'Joint Examination',
  alternateNames: ['Musculoskeletal Joint Exam', 'Arthrology Exam', 'Joint Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'A joint examination checks your knees, shoulders, hips, and other joints for pain, swelling, stiffness, or movement problems.',
      explanation: `## Checking Your Joints

Joints are where two bones meet, like your knees, elbows, and shoulders. When doctors examine your joints, they are checking for problems that might cause pain or limit movement.

### What Doctors Look For

**Appearance:**
- Is the joint swollen or red?
- Does it look different from the other side?
- Are there any visible lumps or bumps?
- Is the skin normal over the joint?

**Movement:**
- Can you move the joint fully?
- Does it feel stiff?
- Does movement cause pain?
- Is movement smooth or jerky?

**Feel:**
- Is the joint warm?
- Is there swelling (fluid in the joint)?
- Are there tender spots when pressed?
- Do you feel grinding or clicking?

### Common Joint Problems

**Arthritis:**
- Pain and stiffness in joints
- Can cause swelling
- More common as people age
- Many different types

**Injuries:**
- Sprains (stretched ligaments)
- Strains (stretched muscles/tendons)
- Torn cartilage
- Dislocations (joint out of place)

**Bursitis:**
- Inflammation of fluid-filled sacs
- Causes pain with movement
- Common in shoulders and hips

### How the Exam Is Done

1. **Look** - Compare both sides for symmetry
2. **Feel** - Check for warmth, swelling, tenderness
3. **Move** - Test range of motion
4. **Special tests** - Specific tests for each joint
5. **Function** - Watch you use the joint

### Why This Matters

Joint problems can affect:
- Walking and climbing stairs
- Reaching and lifting
- Daily activities
- Sports and exercise
- Quality of life

Early treatment helps prevent long-term damage and keeps you moving.`,

      keyTerms: [
        { term: 'joint', definition: 'Where two bones meet and allow movement' },
        { term: 'arthritis', definition: 'Inflammation of a joint causing pain and stiffness' },
        { term: 'range of motion', definition: 'How far a joint can move in different directions' },
        { term: 'ligament', definition: 'Strong tissue connecting bones at a joint' },
        { term: 'cartilage', definition: 'Smooth tissue covering ends of bones in joints' },
        { term: 'bursa', definition: 'Fluid-filled sac that cushions a joint' },
      ],

      analogies: [
        'A joint is like a door hinge - it needs to move smoothly without squeaking.',
        'Cartilage is like a shock absorber in a car - it cushions the bones.',
        'Ligaments are like strong ropes holding bones together at the joint.',
      ],

      examples: [
        'A swollen, warm knee might be from an injury or infection.',
        'Stiff, painful finger joints in the morning suggests rheumatoid arthritis.',
        'A clicking shoulder with pain might be a rotator cuff problem.',
      ],

      patientCounselingPoints: [
        'Keep moving - gentle exercise helps keep joints healthy.',
        'Ice can reduce swelling; heat can help stiffness.',
        'Losing weight reduces stress on weight-bearing joints like knees and hips.',
        'Tell your doctor if joint pain affects your daily activities.',
      ],
    },

    2: {
      level: 2,
      summary: 'Joint examination uses inspection, palpation, and range of motion testing to assess joint integrity, identify pathology, and guide treatment.',
      explanation: `## General Approach to Joint Exam

**Look:**
- Symmetry comparison
- Alignment
- Swelling (intra-articular vs periarticular)
- Erythema
- Atrophy
- Deformity

**Feel:**
- Temperature
- Synovial thickening
- Effusion (fluid)
- Tenderness (joint line, specific structures)
- Crepitus

**Move:**
- Active range of motion (AROM)
- Passive range of motion (PROM)
- Compare sides
- Note pain and limitations

**Special Tests:**
- Ligament stability
- Specific maneuvers by joint

### Documentation

**GALS Screening (Gait, Arms, Legs, Spine):**
- Quick screening exam
- Observe gait
- Check hands, wrists, elbows
- Check hips, knees, ankles, feet
- Assess spine

### Common Findings

| Finding | Description | Significance |
|---------|-------------|--------------|
| Effusion | Fluid in joint | Inflammation, injury |
| Synovitis | Inflamed synovium | Inflammatory arthritis |
| Tenderness | Pain with pressure | Inflammation, injury |
| Crepitus | Grinding sensation | Cartilage damage |
| Instability | Excessive movement | Ligament injury |
| Contracture | Fixed limitation | Chronic disease, scarring |
| Deformity | Abnormal alignment | Chronic arthritis, injury |

### Pattern Recognition

**Inflammatory Arthritis:**
- Morning stiffness >30 minutes
- Soft tissue swelling
- Warmth
- Multiple joints
- Symmetrical

**Osteoarthritis:**
- Brief morning stiffness
- Hard bony enlargement
- End-range pain
- Weight-bearing joints
- Asymmetrical

**Crystal Arthritis (Gout/Pseudogout):**
- Acute onset
- Single joint common
- Severe pain
- May see tophi (gout)

**Fibromyalgia:**
- Diffuse tenderness
- Normal joint exam
- Tender points
- Fatigue, sleep disturbance`,

      keyTerms: [
        { term: 'effusion', definition: 'Fluid accumulation in a joint' },
        { term: 'synovitis', definition: 'Inflammation of the joint lining' },
        { term: 'crepitus', definition: 'Grinding or crackling sensation' },
        { term: 'contracture', definition: 'Fixed limitation of joint movement' },
        { term: 'tophi', definition: 'Deposits of uric acid crystals in gout' },
      ],

      analogies: [
        'Synovial fluid is like oil in a machine - it lubricates the joint.',
        'Inflammatory arthritis is like a fire in the joint - hot, swollen, painful.',
      ],

      examples: [
        'Knee effusion with inability to fully extend suggests Baker cyst.',
        'First MTP joint inflammation suggests gout.',
        'DIP joint bony nodules are Heberden nodes in osteoarthritis.',
      ],

      clinicalNotes: 'Always compare with contralateral joint. Normal joints should be symmetric.',
    },

    3: {
      level: 3,
      summary: 'Detailed joint examination techniques for specific joints including knee, shoulder, hip, and hand with special tests for ligament and cartilage integrity.',
      explanation: `## Specific Joint Examinations

### Knee Examination

**Inspection:**
- Alignment (varus/valgus)
- Quadriceps atrophy
- Swelling (suprapatellar pouch)
- Skin changes

**Palpation:**
- Temperature
- Joint line tenderness (meniscus)
- Patellar facets
- Collateral ligaments

**Tests:**
- Bulge sign (effusion)
- Patellar tap (large effusion)
- McMurray test (meniscus)
- Lachman test (ACL)
- Anterior/posterior drawer (cruciates)
- Valgus/varus stress (collaterals)

**McMurray Test:**
- Flex knee fully
- Rotate tibia internally/externally
- Extend while maintaining rotation
- Pain/click suggests meniscal tear

**Lachman Test (most sensitive for ACL):**
- Knee flexed 20-30 degrees
- Stabilize femur, pull tibia forward
- Compare laxity side to side

### Shoulder Examination

**Inspection:**
- Muscle atrophy
- Scapular position
- Swelling
- Deformity

**Range of Motion:**
- Forward flexion
- Abduction
- Internal/external rotation
- Cross-body adduction

**Special Tests:**
- Neer impingement sign
- Hawkins test
- Empty can test (supraspinatus)
- Lift-off test (subscapularis)
- Speed test (biceps)
- Apprehension test (instability)

### Hip Examination

**Gait:**
- Antalgic (pain avoidance)
- Trendelenburg (weakness)
- Short leg gait

**Range of Motion:**
- Flexion (knee to chest)
- Extension
- Abduction/adduction
- Internal/external rotation

**Special Tests:**
- FABER (Patrick test) - hip/SI joint
- FADIR - impingement
- Thomas test - flexion contracture
- Trendelenburg test - abductor strength

### Hand and Wrist

**Inspection:**
- Alignment
- Muscle atrophy
- Nodules
- Swelling patterns

**Tests:**
- Phalen test (carpal tunnel)
- Tinel sign (nerve compression)
- Finkelstein test (de Quervain)
- Allen test (vascular)`,

      keyTerms: [
        { term: 'ACL', definition: 'Anterior cruciate ligament of knee' },
        { term: 'meniscus', definition: 'Cartilage cushion in knee' },
        { term: 'impingement', definition: 'Compression of soft tissue between bones' },
        { term: 'FABER', definition: 'Flexion, ABduction, External Rotation test' },
        { term: 'Trendelenburg sign', definition: 'Pelvic drop indicating hip abductor weakness' },
      ],

      analogies: [
        'The meniscus is like a washer - it cushions and stabilizes the joint.',
        'Ligaments are like seatbelts - they keep bones in proper position.',
      ],

      examples: [
        'Positive Lachman with endpoint suggests ACL tear.',
        'Painful arc 60-120 degrees abduction suggests impingement.',
        'Positive Finkelstein suggests de Quervain tenosynovitis.',
      ],

      clinicalNotes: 'Lachman test is more sensitive than anterior drawer for ACL injury.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of joint examination with imaging correlation, arthrocentesis, and management of inflammatory and degenerative joint disease.',
      explanation: `## Synovial Fluid Analysis

**Indications for Arthrocentesis:**
- New effusion of unknown cause
- Suspected infection
- Suspected crystal arthritis
- Therapeutic drainage

**Fluid Classification:**

| Type | Appearance | WBC | Glucose | Findings |
|------|------------|-----|---------|----------|
| Normal | Clear, viscous | <200 | Equal to serum | None |
| Non-inflammatory | Clear, viscous | 200-2000 | Normal | OA, trauma |
| Inflammatory | Cloudy | 2000-50,000 | Low | RA, gout, infection |
| Septic | Turbid/purulent | >50,000 | Very low | Bacterial infection |
| Hemorrhagic | Bloody | Variable | Normal | Trauma, bleeding disorder |

**Crystal Analysis:**
- Monosodium urate (gout): needle-shaped, negative birefringence
- Calcium pyrophosphate (CPPD): rhomboid, weak positive birefringence

### Imaging Correlation

**X-ray:**
- Joint space narrowing
- Osteophytes
- Erosions
- Chondrocalcinosis
- Fractures

**Ultrasound:**
- Effusion
- Synovitis
- Tendon pathology
- Guided injections

**MRI:**
- Soft tissue detail
- Meniscal tears
- Ligament injuries
- Cartilage assessment
- Bone marrow edema

### Common Diagnoses

**Osteoarthritis:**
- Gradual onset
- Activity-related pain
- Brief stiffness
- Bony enlargement
- Radiographic joint space narrowing

**Rheumatoid Arthritis:**
- Symmetrical small joints
- Morning stiffness >1 hour
- Synovitis
- Erosions on x-ray
- Autoantibodies (RF, CCP)

**Gout:**
- Acute severe attacks
- First MTP common
- Tophi
- Hyperuricemia
- Crystal confirmation

**Septic Arthritis:**
- Emergency
- Monoarticular
- Systemic symptoms
- Urgent drainage required`,

      keyTerms: [
        { term: 'arthrocentesis', definition: 'Aspiration of fluid from a joint' },
        { term: 'birefringence', definition: 'Property of crystals under polarized light' },
        { term: 'chondrocalcinosis', definition: 'Calcification of cartilage' },
        { term: 'CCP antibodies', definition: 'Anti-cyclic citrullinated peptide in RA' },
      ],

      clinicalNotes: 'Septic arthritis is a medical emergency requiring urgent joint drainage and antibiotics.',
    },

    5: {
      level: 5,
      summary: 'Expert joint examination for complex cases, post-surgical assessment, sports medicine applications, and advanced diagnostic techniques.',
      explanation: `## Complex Joint Pathology

**Periprosthetic Joint Infection:**
- Pain after joint replacement
- Elevated inflammatory markers
- Joint aspiration
- Multiple positive cultures
- Two-stage revision often needed

**Avascular Necrosis:**
- Corticosteroid or alcohol history
- Sickle cell disease
- MRI diagnostic
- Joint collapse late finding

**Inflammatory Spondyloarthropathies:**
- Ankylosing spondylitis
- Psoriatic arthritis
- Reactive arthritis
- IBD-associated arthritis
- Sacroiliitis on imaging

### Sports Medicine

**ACL Injury:**
- Pivot-shift mechanism
- Lachman diagnostic
- MRI confirms
- Reconstruction in active patients

**Rotator Cuff:**
- Supraspinatus most common
- Empty can test
- MRI or ultrasound
- Repair if full thickness

**Meniscal Tears:**
- Twisting injury
- Joint line pain
- Mechanical symptoms
- Repair vs partial meniscectomy

### Arthroscopy

**Diagnostic:**
- Direct visualization
- Biopsy
- Assessment of cartilage

**Therapeutic:**
- Meniscectomy/repair
- Ligament reconstruction
- Synovectomy
- Cartilage procedures
- Loose body removal

### Emerging Techniques

**Biologics:**
- Platelet-rich plasma (PRP)
- Stem cell therapy
- Viscosupplementation
- Evidence still evolving

**Joint Preservation:**
- Osteochondral grafting
- Meniscal transplantation
- Hip resurfacing
- Osteotomy for alignment`,

      keyTerms: [
        { term: 'periprosthetic', definition: 'Around a joint replacement implant' },
        { term: 'avascular necrosis', definition: 'Bone death from loss of blood supply' },
        { term: 'spondyloarthropathy', definition: 'Arthritis involving spine and joints' },
        { term: 'viscosupplementation', definition: 'Injection of hyaluronic acid into joint' },
      ],

      clinicalNotes: 'PRP and stem cell therapies show promise but high-quality evidence is still limited.',
    },
  },

  media: [],

  citations: [
    {
      id: 'hopkins-joint',
      type: 'textbook',
      title: 'Hopkins Rheumatology',
      source: 'Oxford',
    },
  ],

  crossReferences: [
    { targetId: 'musculoskeletal-muscle-strength', targetType: 'process', relationship: 'sibling', label: 'Muscle Strength Testing' },
    { targetId: 'orthopedics-joints', targetType: 'topic', relationship: 'related', label: 'Joint Disorders' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['physical-examination', 'orthopedics'],
    keywords: ['joint', 'arthritis', 'orthopedic', 'musculoskeletal'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'orthopedics'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default jointExamination;
