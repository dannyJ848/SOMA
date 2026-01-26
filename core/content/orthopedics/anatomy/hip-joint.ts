import { EducationalContent } from '../../types';

export const hipJointAnatomy: EducationalContent = {
  id: 'ortho-patient-hip-joint',
  type: 'structure',
  name: 'Hip Joint Anatomy',
  alternateNames: ['Hip', 'Coxofemoral joint', 'Acetabulofemoral joint'],

  levels: {
    1: {
      level: 1,
      summary: 'Your hip is a ball-and-socket joint where your thigh bone meets your pelvis, allowing you to walk, run, and move your leg in many directions.',
      explanation: `Your hip joint connects your leg to your body. It's one of the largest and strongest joints, designed to support your body weight and allow movement.

**Parts of Your Hip:**
- **Ball (femoral head)**: Round top of your thigh bone
- **Socket (acetabulum)**: Cup-shaped part of your pelvis
- **Cartilage**: Smooth covering that lets bones glide
- **Labrum**: Soft rim around the socket that helps hold the ball in place

**What Your Hip Does:**
- Supports your body weight when standing
- Lets you walk, run, and climb stairs
- Allows you to bend, twist, and rotate your leg

**Keeping Your Hips Healthy:**
- Stay active with low-impact exercise
- Maintain a healthy weight
- Stretch your hip muscles regularly
- Don't ignore hip pain`,
      keyTerms: [
        { term: 'ball-and-socket joint', definition: 'Type of joint that allows movement in many directions' },
        { term: 'femoral head', definition: 'The ball-shaped top of your thigh bone' },
        { term: 'acetabulum', definition: 'The socket in your pelvis that holds the thigh bone' },
      ],
      analogies: [
        'Your hip works like a joystick, allowing movement in almost any direction.',
        'The labrum is like a rubber gasket that helps seal the joint.',
      ],
      examples: [
        'When you kick a soccer ball, your hip allows your leg to swing forward.',
        'When you sit cross-legged, your hip rotates outward.',
      ],
    },
    2: {
      level: 2,
      summary: 'The hip is a synovial ball-and-socket joint formed by the femoral head and acetabulum, stabilized by a strong capsule, labrum, and multiple ligaments.',
      explanation: `The hip joint balances mobility with stability, supporting body weight while allowing multiplanar movement.

**Bony Anatomy:**
- **Femoral head**: Covered by articular cartilage except at fovea
- **Acetabulum**: Formed by ilium, ischium, and pubis
- **Acetabular labrum**: Fibrocartilage rim deepening socket

**Ligaments:**
- **Iliofemoral (Y ligament)**: Strongest ligament, limits extension
- **Pubofemoral**: Limits abduction and extension
- **Ischiofemoral**: Limits internal rotation

**Blood Supply:**
- Medial and lateral circumflex femoral arteries
- Artery of ligamentum teres (minor contribution)

**Movements:**
- Flexion: 120 degrees
- Extension: 30 degrees
- Abduction: 45 degrees
- Adduction: 30 degrees
- Internal rotation: 35 degrees
- External rotation: 45 degrees

**Muscles Acting on Hip:**
- Flexors: Iliopsoas, rectus femoris
- Extensors: Gluteus maximus, hamstrings
- Abductors: Gluteus medius and minimus
- Adductors: Adductor group
- Rotators: Deep external rotators`,
      keyTerms: [
        { term: 'iliofemoral ligament', definition: 'Y-shaped ligament on front of hip; strongest in body', pronunciation: 'il-ee-oh-FEM-or-al' },
        { term: 'labrum', definition: 'Fibrocartilage rim that deepens the hip socket', pronunciation: 'LAY-brum' },
        { term: 'iliopsoas', definition: 'Main hip flexor muscle', pronunciation: 'il-ee-oh-SOH-as' },
      ],
      analogies: [
        'The labrum is like the lip of a suction cup, helping hold the joint together.',
        'The ligaments are like guy wires on a tent, stabilizing from multiple directions.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hip joint stability derives from bony congruence, labral seal, ligamentous constraints, and dynamic muscular control, with predictable patterns of pathology based on anatomic vulnerability.',
      explanation: `Comprehensive hip anatomy requires understanding of contributors to stability and common sites of pathology.

**Acetabular Coverage:**
- Center-edge angle (Wiberg): Normal >25 degrees
- Acetabular version: 15-20 degrees anteversion
- Dysplasia: Insufficient coverage predisposes to OA

**Labral Anatomy:**
- Attaches to acetabular rim and transverse ligament
- Creates suction seal (contributes 28N of stability)
- Anterosuperior zone most commonly torn
- Vascular supply: Capsular side only

**Capsular Anatomy:**
- Zona orbicularis: Circular fibers around femoral neck
- Attachment: Acetabular rim to intertrochanteric line
- Synovial membrane lines inner capsule

**Vascular Considerations:**
- Femoral head blood supply critical for AVN
- MFCA primary supply via lateral epiphyseal vessels
- Disruption: Femoral neck fractures, hip dislocation

**Nerve Supply:**
- Femoral nerve (anterior)
- Obturator nerve (medial)
- Sciatic nerve (posterior)
- Superior gluteal nerve
- Hilton's Law: Nerves crossing joint supply joint

**FAI Morphologies:**
- CAM: Aspherical femoral head (alpha angle >50)
- Pincer: Acetabular overcoverage
- Combined: Most common pattern

**Snapping Hip Syndromes:**
- External: IT band over greater trochanter
- Internal: Iliopsoas over iliopectineal eminence
- Intra-articular: Labral tear, loose body`,
      keyTerms: [
        { term: 'femoroacetabular impingement', definition: 'Abnormal contact between femoral head and acetabulum', pronunciation: 'fem-or-oh-as-eh-TAB-yoo-lar' },
        { term: 'CAM lesion', definition: 'Aspherical femoral head causing FAI' },
        { term: 'center-edge angle', definition: 'Measure of acetabular coverage of femoral head' },
      ],
      clinicalNotes: 'Hip arthroscopy has expanded treatment options for labral tears and FAI. Patient selection is critical; presence of significant arthritis predicts poor outcomes.',
    },
    4: {
      level: 4,
      summary: 'Hip joint biomechanics involve complex force transmission, with joint reaction forces exceeding body weight and muscular forces creating significant compressive loads relevant to implant design and rehabilitation.',
      explanation: `Advanced hip anatomy integrates structural concepts with biomechanical principles.

**Joint Reaction Forces:**
- Single-leg stance: 2.5-3x body weight
- Walking: 3-4x body weight
- Running: 5-6x body weight
- Rising from chair: 3-4x body weight

**Moment Arms and Leverage:**
- Abductor moment arm: 5-7 cm
- Body weight moment arm: 10-15 cm
- Mechanical disadvantage requires strong abductors
- Trendelenburg gait: Abductor insufficiency

**Capsular Mechanics:**
- Spiral arrangement tightens in extension
- Contributes to "screw-home" mechanism
- Resting position: 30 degrees flexion, abduction, external rotation

**Labral Biomechanics:**
- Contributes 28N of suction stability
- Distributes contact stress
- Hydrodynamic lubrication
- Resection increases contact stress 92%

**Cartilage Loading:**
- Thickest superolaterally (2.5-3mm)
- Contact area varies with position
- Cartilage consolidation under sustained load
- Importance of motion for nutrition

**Soft Tissue Balancing:**
- Leg length considerations
- Offset restoration
- Abductor tension
- Impingement avoidance

**Surgical Approaches:**
- Anterior: Internervous plane (femoral/superior gluteal)
- Anterolateral: Splits gluteus medius
- Posterior: Through short external rotators
- Each has distinct advantages and complications`,
      keyTerms: [
        { term: 'Trendelenburg gait', definition: 'Pelvis drop due to abductor weakness on stance side' },
        { term: 'offset', definition: 'Distance from hip center to femoral shaft; affects abductor moment arm' },
        { term: 'leg length discrepancy', definition: 'Unequal limb lengths; important in hip replacement' },
      ],
      clinicalNotes: 'Restoration of offset and leg length is critical in hip arthroplasty. Inadequate offset reduces abductor function; excessive length causes nerve stretch and patient dissatisfaction.',
    },
    5: {
      level: 5,
      summary: 'Contemporary hip surgery integrates advanced imaging, computer navigation, and evidence-based approaches to optimize outcomes in arthroplasty, arthroscopy, and hip preservation procedures.',
      explanation: `Expert hip care requires comprehensive understanding of surgical options and outcome optimization.

**Hip Preservation Surgery:**
- Periacetabular osteotomy: Reorients dysplastic acetabulum
- Femoral osteotomy: Corrects deformity
- Surgical hip dislocation: Safe approach for complex pathology
- Combined procedures for mixed pathology

**FAI Treatment Evidence:**
- Arthroscopic outcomes favorable for isolated labral/CAM pathology
- Degree of cartilage damage predicts outcome
- PT vs. surgery: UK FASHIoN, Australian FIRST trials
- Progression to THA: 5-10% at 10 years after scope

**Arthroplasty Considerations:**

*Bearing Surfaces:*
- Metal-on-polyethylene: Current standard
- Ceramic-on-ceramic: Low wear, squeaking risk
- Highly crosslinked polyethylene: Reduced wear vs. conventional

*Fixation:*
- Cemented vs. cementless
- Patient age, bone quality, activity level considerations
- Dual mobility for instability risk

**Outcomes Data:**
- 10-year survivorship: >95% for primary THA
- Patient-reported outcomes: HOOS, Oxford Hip Score
- Satisfaction rates: 90-95% good/excellent

**Complications:**
- Dislocation: 1-3% (approach-dependent)
- Infection: <1% (risk factors: diabetes, obesity)
- VTE: Prophylaxis protocols variable
- Periprosthetic fracture: Increasing concern

**Emerging Technologies:**
- Robotic assistance
- Navigation and PSI
- Advanced bearing surfaces
- Dual mobility constructs

**Registry Data:**
- NJR, AOANJRR, SHAR inform practice
- Real-world outcomes data
- Implant surveillance`,
      keyTerms: [
        { term: 'periacetabular osteotomy', definition: 'Surgical reorientation of acetabulum for dysplasia' },
        { term: 'dual mobility', definition: 'Arthroplasty design with two articulating surfaces to reduce dislocation' },
        { term: 'HOOS', definition: 'Hip disability and Osteoarthritis Outcome Score; patient-reported outcome measure' },
      ],
      clinicalNotes: 'Anterior approach arthroplasty has lower dislocation rates but learning curve considerations. Patient selection and surgeon experience remain key determinants of outcome.',
    },
  },

  media: [
    {
      id: 'hip-anatomy',
      type: 'diagram',
      filename: 'hip-joint-anatomy.svg',
      title: 'Hip Joint Anatomy',
      description: 'Ball-and-socket structure of the hip',
    },
  ],
  citations: [
    {
      id: 'hip-anatomy-ref',
      type: 'textbook',
      title: 'Hip Joint Anatomy and Biomechanics',
      source: 'Orthopedic Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-bones-joints-overview', targetType: 'concept', relationship: 'parent', label: 'Bones and Joints Overview' },
    { targetId: 'ortho-patient-joint-replacement', targetType: 'concept', relationship: 'related', label: 'Joint Replacement' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['anatomy', 'orthopedics', 'hip'],
    keywords: ['hip', 'femur', 'acetabulum', 'joint'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hipJointAnatomy;
