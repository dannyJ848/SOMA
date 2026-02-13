import { EducationalContent } from '../../types';

export const spineAnatomy: EducationalContent = {
  id: 'ortho-patient-spine-anatomy',
  type: 'structure',
  name: 'Spine Anatomy',
  alternateNames: ['Vertebral column', 'Backbone', 'Spinal column'],

  levels: {
    1: {
      level: 1,
      summary: 'Your spine is a column of 33 bones called vertebrae that protects your spinal cord and allows you to bend and twist.',
      explanation: `Your spine runs from the base of your skull to your tailbone. It has three main jobs: support your body, protect your spinal cord, and let you move.

**Parts of Your Spine:**
- **Cervical (neck)**: 7 vertebrae - lets you turn and nod your head
- **Thoracic (mid-back)**: 12 vertebrae - connects to your ribs
- **Lumbar (lower back)**: 5 vertebrae - carries most of your body weight
- **Sacrum and Coccyx**: Fused bones at the base

**What's Between the Bones:**
- **Discs**: Soft cushions between vertebrae that act like shock absorbers
- **Spinal cord**: Bundle of nerves running through the spine
- **Nerves**: Branch out from the spinal cord to the rest of your body

**Keeping Your Spine Healthy:**
- Maintain good posture
- Lift with your legs, not your back
- Stay active and maintain a healthy weight
- Use proper support when sitting`,
      keyTerms: [
        { term: 'vertebra', definition: 'One of the bones that makes up your spine' },
        { term: 'disc', definition: 'Soft cushion between the bones in your spine' },
        { term: 'spinal cord', definition: 'Bundle of nerves inside your spine that connects your brain to your body' },
      ],
      analogies: [
        'Your spine is like a stack of building blocks with cushions between them.',
        'Discs are like jelly donuts - soft on the inside with a tougher outside.',
        'The spinal cord is like a telephone cable running through a protective tube.',
      ],
      examples: [
        'When you nod your head yes, the top two vertebrae in your neck are moving.',
        'When you bend to pick something up, your lower back vertebrae flex.',
      ],
    },
    2: {
      level: 2,
      summary: 'The vertebral column consists of 33 vertebrae organized into five regions, with intervertebral discs providing cushioning and the spinal canal protecting the spinal cord.',
      explanation: `The spine provides structural support, protects the nervous system, and enables movement through its segmented design.

**Spinal Regions:**
- **Cervical (C1-C7)**: Most mobile, supports head
- **Thoracic (T1-T12)**: Articulates with ribs, less mobile
- **Lumbar (L1-L5)**: Largest vertebrae, weight-bearing
- **Sacrum (S1-S5)**: Fused, connects to pelvis
- **Coccyx**: 4 fused vertebrae (tailbone)

**Vertebral Structure:**
- **Body**: Weight-bearing front portion
- **Vertebral arch**: Forms the spinal canal
- **Spinous process**: The bump you can feel
- **Transverse processes**: Side projections for muscle attachment
- **Facet joints**: Connect vertebrae and guide movement

**Intervertebral Discs:**
- **Nucleus pulposus**: Gel-like center
- **Annulus fibrosus**: Tough outer ring
- Functions: Shock absorption, spacing, flexibility

**Spinal Curves:**
- Cervical: Lordosis (curves inward)
- Thoracic: Kyphosis (curves outward)
- Lumbar: Lordosis (curves inward)
- These curves distribute load and maintain balance`,
      keyTerms: [
        { term: 'lordosis', definition: 'Inward curve of the spine, normal in neck and lower back', pronunciation: 'lor-DOH-sis' },
        { term: 'kyphosis', definition: 'Outward curve of the spine, normal in mid-back', pronunciation: 'ky-FOH-sis' },
        { term: 'nucleus pulposus', definition: 'Gel-like center of an intervertebral disc', pronunciation: 'NOO-klee-us pul-POH-sus' },
        { term: 'facet joint', definition: 'Small joints connecting vertebrae that guide movement' },
      ],
      analogies: [
        'The spinal curves work like springs to absorb forces during walking and running.',
        'The nucleus pulposus is like a water balloon that distributes pressure evenly.',
      ],
    },
    3: {
      level: 3,
      summary: 'The vertebral column demonstrates regional specialization with distinct vertebral morphology, complex ligamentous support, and segmental innervation patterns critical for clinical localization.',
      explanation: `Understanding spinal anatomy requires knowledge of regional variations, supporting structures, and neurological organization.

**Regional Vertebral Characteristics:**

*Cervical:*
- Smallest bodies, largest canal
- Transverse foramen (vertebral artery)
- Bifid spinous processes (C2-C6)
- C1 (atlas): No body, ring-shaped
- C2 (axis): Dens/odontoid process

*Thoracic:*
- Costal facets for rib articulation
- Heart-shaped bodies
- Long, inferiorly-directed spinous processes

*Lumbar:*
- Largest bodies
- Short, horizontal spinous processes
- No transverse foramen or costal facets

**Ligamentous Support:**
- Anterior longitudinal ligament
- Posterior longitudinal ligament
- Ligamentum flavum
- Interspinous and supraspinous ligaments
- Intertransverse ligaments

**Spinal Canal Contents:**
- Spinal cord (ends at L1-L2 in adults)
- Cauda equina (below cord termination)
- Meninges and CSF
- Epidural space (fat and veins)

**Nerve Root Organization:**
- 31 pairs of spinal nerves
- Cervical: Exit above same-numbered vertebra (except C8)
- Thoracic/Lumbar: Exit below same-numbered vertebra
- Dermatome and myotome patterns for clinical testing`,
      keyTerms: [
        { term: 'cauda equina', definition: 'Bundle of nerve roots below the spinal cord termination', pronunciation: 'KAW-dah ee-KWY-nah' },
        { term: 'dermatome', definition: 'Skin area supplied by a single spinal nerve' },
        { term: 'myotome', definition: 'Muscle group supplied by a single spinal nerve' },
        { term: 'ligamentum flavum', definition: 'Yellow ligament connecting vertebral arches', pronunciation: 'lig-ah-MEN-tum FLAY-vum' },
      ],
      clinicalNotes: 'Dermatomal and myotomal testing helps localize nerve root compression. L5 radiculopathy presents with foot drop; S1 affects ankle reflex and plantar flexion.',
    },
    4: {
      level: 4,
      summary: 'Spinal biomechanics involve the functional spinal unit concept, load transmission through anterior and posterior columns, and motion segment behavior critical for understanding pathology and surgical planning.',
      explanation: `Advanced spinal anatomy integrates structural components with biomechanical function.

**Functional Spinal Unit (Motion Segment):**
- Two adjacent vertebrae
- Intervertebral disc
- Facet joints
- Supporting ligaments
- Functions as fundamental biomechanical unit

**Three-Column Concept (Denis):**
- Anterior column: Anterior half of body and disc, ALL
- Middle column: Posterior half of body and disc, PLL
- Posterior column: Posterior elements, posterior ligament complex
- Two-column disruption = instability

**Disc Biomechanics:**
- Nucleus: 70-90% water, Type II collagen, proteoglycans
- Annulus: Concentric lamellae, Type I collagen
- Load distribution: Nucleus pressurizes, annulus contains
- Diurnal variation: 1-2 cm height loss during day

**Facet Joint Orientation:**
- Cervical: 45 degrees, allows rotation
- Thoracic: 60-70 degrees, coronal orientation
- Lumbar: Sagittal orientation, limits rotation

**Blood Supply:**
- Segmental arteries from aorta
- Anterior and posterior spinal arteries
- Artery of Adamkiewicz (T9-L2): Major supply to lower cord

**Spinal Cord Tracts:**
- Corticospinal: Motor (lateral)
- Spinothalamic: Pain and temperature (anterolateral)
- Dorsal columns: Proprioception, vibration, fine touch

**Instability Criteria (White and Panjabi):**
- Sagittal translation >3.5mm
- Sagittal rotation >11 degrees
- Clinical context determines significance`,
      keyTerms: [
        { term: 'functional spinal unit', definition: 'Two adjacent vertebrae with disc and ligaments; smallest functional unit of spine' },
        { term: 'artery of Adamkiewicz', definition: 'Major blood supply to lower spinal cord; vulnerability during surgery', pronunciation: 'ah-dahm-KEE-vich' },
        { term: 'three-column theory', definition: 'Spine stability concept based on anterior, middle, and posterior columns' },
      ],
      clinicalNotes: 'Understanding column involvement guides treatment. Compression fractures (anterior column only) often stable; burst fractures (anterior + middle) may require stabilization.',
    },
    5: {
      level: 5,
      summary: 'Contemporary spinal surgery planning integrates advanced imaging with biomechanical principles, considering sagittal balance parameters, motion preservation options, and evidence-based outcomes for degenerative and traumatic conditions.',
      explanation: `Expert-level spinal care requires understanding of global alignment, surgical approaches, and outcome optimization.

**Sagittal Balance Parameters:**
- Sagittal vertical axis (SVA): C7 plumb line to S1
- Pelvic incidence (PI): Fixed anatomic parameter
- Lumbar lordosis (LL): Should approximate PI within 10 degrees
- Pelvic tilt (PT): Compensatory mechanism
- PI-LL mismatch: Strong predictor of disability

**Spinal Alignment Classification:**
- Roussouly classification: Type 1-4 based on PI and LL
- SRS-Schwab classification for adult deformity
- Global alignment targets for surgical planning

**Degenerative Cascade (Kirkaldy-Willis):**
1. Dysfunction: Early degeneration
2. Instability: Abnormal motion
3. Restabilization: Osteophyte formation

**Surgical Approaches:**
- Anterior: Direct disc access, avoids posterior muscles
- Posterior: Versatile, familiar anatomy
- Lateral (XLIF, DLIF): Minimal muscle disruption
- Oblique (OLIF): Avoids psoas muscle

**Motion Preservation:**
- Total disc replacement: Indicated for single-level disease
- Posterior dynamic stabilization: Limited evidence
- Interspinous spacers: Stenosis treatment

**Fusion Considerations:**
- Indications: Instability, deformity correction, tumor
- Approaches affect fusion rates and complications
- Adjacent segment disease: 2-3% per year
- Sagittal balance restoration critical for outcomes

**Outcome Measures:**
- ODI (Oswestry Disability Index)
- VAS pain scores
- SF-36/EQ-5D quality of life
- MCID (Minimal Clinically Important Difference)

**Evidence Synthesis:**
- SPORT trial: Surgery vs. conservative for stenosis/herniation
- Fusion vs. conservative for chronic LBP: Modest benefit
- Multilevel fusion: Higher complication rates`,
      keyTerms: [
        { term: 'sagittal vertical axis', definition: 'C7 plumb line distance from S1; key balance parameter' },
        { term: 'pelvic incidence', definition: 'Fixed anatomic parameter relating sacral slope to pelvic anatomy' },
        { term: 'PI-LL mismatch', definition: 'Difference between pelvic incidence and lumbar lordosis; predictor of disability' },
        { term: 'adjacent segment disease', definition: 'Degeneration above or below spinal fusion' },
      ],
      clinicalNotes: 'Sagittal balance restoration is the primary goal in deformity surgery. Patients tolerate kyphosis poorly; compensatory mechanisms (knee flexion, hip extension) increase energy expenditure and disability.',
    },
  },

  media: [
    {
      id: 'spine-regions',
      type: 'diagram',
      filename: 'spine-regions.svg',
      title: 'Spinal Regions',
      description: 'Cervical, thoracic, lumbar, sacral, and coccygeal regions',
    },
  ],
  citations: [
    {
      id: 'spine-anatomy-ref',
      type: 'textbook',
      title: 'Clinical Anatomy of the Spine',
      source: 'Orthopedic Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-bones-joints-overview', targetType: 'concept', relationship: 'parent', label: 'Bones and Joints Overview' },
    { targetId: 'ortho-patient-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['anatomy', 'orthopedics', 'spine'],
    keywords: ['vertebrae', 'spine', 'disc', 'spinal cord'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spineAnatomy;
