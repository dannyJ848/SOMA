/**
 * Spine Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const spineExam: EducationalContent = {
  id: 'musculoskeletal-spine-exam',
  type: 'process',
  name: 'Spine Examination',
  alternateNames: ['Back Examination', 'Spinal Assessment', 'Vertebral Column Exam'],

  levels: {
    1: {
      level: 1,
      summary: 'A spine examination checks your back for pain, alignment problems, movement limitations, and nerve compression.',
      explanation: `## Checking Your Spine

A spine examination looks at your back from your neck to your tailbone. It helps doctors find causes of back pain and check for nerve problems.

### Parts of the Spine

**Neck (Cervical):**
- 7 vertebrae
- Supports your head
- Allows looking up, down, and side to side

**Upper Back (Thoracic):**
- 12 vertebrae
- Attached to your ribs
- Less movement than other areas

**Lower Back (Lumbar):**
- 5 vertebrae
- Bears most body weight
- Common source of back pain

**Tailbone (Sacrum/Coccyx):**
- Fused bones at bottom
- Connects spine to pelvis

### What Doctors Check

**Appearance:**
- Are shoulders level?
- Is spine straight from behind?
- Any curves when viewed from side?
- Any visible deformities?

**Movement:**
- Can you bend forward, backward, sideways?
- Can you twist your spine?
- Does movement cause pain?
- How far can you move?

**Tenderness:**
- Pain when pressing on bones?
- Pain in muscles?
- Pain along spine?

**Nerves:**
- Strength in arms and legs
- Sensation (feeling)
- Reflexes
- Signs of nerve compression

### Common Spine Problems

**Poor posture:**
- Slouching, rounded shoulders
- Forward head position
- Can cause muscle pain

**Scoliosis:**
- Side-to-side curve of spine
- Usually starts in childhood
- Most cases are mild

**Herniated disc:**
- Cushion between vertebrae bulges out
- Can press on nerves
- Causes pain, numbness, weakness

**Muscle strain:**
- Overstretched muscles
- Common cause of back pain
- Usually heals with time

**Arthritis:**
- Wear and tear of spine joints
- More common with age
- Causes stiffness and pain`,

      keyTerms: [
        { term: 'vertebrae', definition: 'The bones that make up the spine' },
        { term: 'disc', definition: 'Cushion between vertebrae' },
        { term: 'scoliosis', definition: 'Side-to-side curvature of the spine' },
        { term: 'alignment', definition: 'How the bones line up' },
        { term: 'nerve root', definition: 'Nerve as it exits the spinal cord' },
      ],

      analogies: [
        'The spine is like a stack of blocks - each one needs to be aligned for stability.',
        'Spinal discs are like jelly donuts - they cushion the bones but can bulge if pressed.',
        'The spinal cord is like a highway - nerves exit at each level like off-ramps.',
      ],

      examples: [
        'Back pain going down the leg suggests a pinched nerve from a herniated disc.',
        'A sideways curve visible when bending forward suggests scoliosis.',
        'Pain worse in the morning that improves with movement suggests arthritis.',
      ],

      patientCounselingPoints: [
        'Most back pain improves with time and conservative treatment.',
        'Staying active helps back pain heal faster than bed rest.',
        'Good posture reduces strain on your spine.',
        'Tell your doctor if you have numbness, weakness, or problems with bladder/bowel.',
      ],
    },

    2: {
      level: 2,
      summary: 'Spine examination systematically evaluates alignment, range of motion, neurological function, and specific pathological signs to diagnose back and neck conditions.',
      explanation: `## Examination Components

### Inspection
- Standing posture from anterior, posterior, lateral
- Spinal curves (lordosis, kyphosis, scoliosis)
- Shoulder height symmetry
- Pelvic level
- Skin changes, hairy patches, dimples
- Gait assessment

### Palpation
- Spinous processes
- Paraspinal muscles
- Sacroiliac joints
- Tender points
- Muscle spasm
- Step-offs (spondylolisthesis)

### Range of Motion

**Cervical:**
- Flexion (chin to chest): 45 degrees
- Extension: 45 degrees
- Lateral bending: 45 degrees each
- Rotation: 80 degrees each

**Thoracolumbar:**
- Flexion (fingers to floor): 90 degrees
- Extension: 30 degrees
- Lateral bending: 20-30 degrees each
- Rotation: 30 degrees each

**Schober Test (lumbar flexibility):**
- Mark 10 cm above and 5 cm below L5
- Measure increase with flexion
- Normal: >5 cm increase

### Neurological Examination

**Myotomes:**
- C5: Shoulder abduction
- C6: Wrist extension
- C7: Elbow extension
- C8: Finger flexion
- L2: Hip flexion
- L3: Knee extension
- L4: Ankle dorsiflexion
- L5: Great toe extension
- S1: Ankle plantarflexion

**Dermatomes:**
- Map sensory level
- Compare bilaterally
- Pinprick and light touch

**Reflexes:**
- Biceps (C5-6)
- Brachioradialis (C6)
- Triceps (C7)
- Patellar (L3-4)
- Achilles (S1)

### Special Tests

**Straight Leg Raise (SLR):**
- Supine, raise leg straight
- Positive if reproduces radicular pain <60 degrees
- Indicates nerve root irritation

**Crossed SLR:**
- Raise opposite leg
- Positive if reproduces affected side pain
- Highly specific for disc herniation

**Femoral Nerve Stretch:**
- Prone, flex knee
- Reproduces anterior thigh pain
- L2-4 radiculopathy

**Spurling Test (cervical):**
- Extend and rotate head
- Axial compression
- Reproduces radicular symptoms
- Foraminal stenosis`,

      keyTerms: [
        { term: 'spondylolisthesis', definition: 'One vertebra slips forward on another' },
        { term: 'radiculopathy', definition: 'Nerve root compression' },
        { term: 'myelopathy', definition: 'Spinal cord compression' },
        { term: 'lordosis', definition: 'Inward curve of spine' },
        { term: 'kyphosis', definition: 'Outward curve of spine' },
      ],

      analogies: [
        'A herniated disc is like a jelly donut squeezed too hard - the filling comes out.',
        'Spinal stenosis is like a tunnel getting narrower - less room for the nerve traffic.',
      ],

      examples: [
        'Positive straight leg raise at 30 degrees suggests L5-S1 disc herniation.',
        'Hyperreflexia with Babinski sign indicates upper motor neuron pathology.',
        'Cervical myelopathy causes gait disturbance and hand clumsiness.',
      ],

      clinicalNotes: 'Always test for saddle anesthesia and evaluate bowel/bladder function - indicates cauda equina syndrome requiring emergency surgery.',
    },

    3: {
      level: 3,
      summary: 'Advanced spine examination identifies specific pathologies including disc herniation, spinal stenosis, and spondylolisthesis through specialized maneuvers.',
      explanation: `## Specific Conditions

### Cervical Radiculopathy

**C5:** Shoulder pain, deltoid weakness
**C6:** Thumb pain, wrist extensor weakness
**C7:** Middle finger pain, triceps weakness
**C8:** Little finger pain, intrinsic hand weakness

**Provocative Tests:**
- Spurling: extension + rotation + compression
- Shoulder abduction: relieves pain
- Neck distraction: relieves pain

### Lumbar Disc Herniation

**L4-L5 (L5 root):**
- Back and leg pain
- Weakness: great toe extension, foot drop
- Numbness: dorsal foot, big toe
- Reflexes usually preserved

**L5-S1 (S1 root):**
- Back and leg pain (sciatica)
- Weakness: ankle plantarflexion
- Numbness: lateral foot, little toe
- Decreased Achilles reflex

**Cauda Equina Syndrome (Emergency):**
- Saddle anesthesia
- Bladder/bowel dysfunction
- Bilateral leg weakness
- Urgent surgical decompression

### Spinal Stenosis

**Neurogenic Claudication:**
- Leg pain with walking/standing
- Relieved by sitting or flexion
- "Shopping cart sign"
- Normal pedal pulses (vs vascular)

**Physical Exam:**
- Often normal
- May have hyperreflexia/myelopathy
- Extension worsens symptoms
- Flexion improves

### Spondylolisthesis

**Grading:**
- Grade I: <25% slip
- Grade II: 25-50%
- Grade III: 50-75%
- Grade IV: 75-100%

**Exam:**
- Step-off palpable
- Hamstring tightness
- Hyperlordosis
- May have neurological deficits

### Inflammatory Back Disease

**Ankylosing Spondylitis:**
- Onset <40 years
- Insidious onset
- Morning stiffness >30 minutes
- Improves with exercise
- Alternating buttock pain
- Reduced chest expansion

**Modified Schober:**
- Measure lumbar flexion
- <5 cm increase abnormal

**Chest Expansion:**
- <5 cm expansion at xiphoid abnormal`,

      keyTerms: [
        { term: 'claudication', definition: 'Pain with walking' },
        { term: 'neurogenic', definition: 'Originating from nerves' },
        { term: 'spondylolysis', definition: 'Stress fracture of pars interarticularis' },
        { term: 'pars interarticularis', definition: 'Part of vertebra between facet joints' },
      ],

      analogies: [
        'Spinal stenosis is like a tunnel at rush hour - it gets crowded and painful.',
        'Cauda equina means "horse tail" - describes the bundle of nerves at the end of the spinal cord.',
      ],

      examples: [
        'Positive Spurling test suggests cervical foraminal stenosis.',
        'Gait improvement with forward flexion suggests spinal stenosis.',
        'Reduced chest expansion with back pain suggests ankylosing spondylitis.',
      ],

      clinicalNotes: 'Cauda equina syndrome is a surgical emergency - do not delay imaging and consultation.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of spine examination with imaging interpretation and management decisions for surgical and non-surgical spine conditions.',
      explanation: `## Imaging Correlation

**X-ray:**
- Alignment
- Fractures
- Degenerative changes
- Instability on flexion/extension
- Scoliosis measurement

**CT:**
- Bony detail
- Fracture characterization
- Surgical planning
- Stenosis assessment

**MRI:**
- Disc herniation
- Stenosis
- Cord compression
- Tumor/infection
- Modic changes (endplate)

**Myelography:**
- Patients who cannot have MRI
- Dynamic compression
- CSF leak localization

### Red Flags

**Require urgent workup:**
- Cancer history + new back pain
- Unexplained weight loss
- Failure to improve with 6 weeks treatment
- Age >50 or <20 with first episode
- Night pain
- Fever
- IV drug use
- Immunosuppression
- Trauma

### Conservative Management

**Acute Low Back Pain:**
- Stay active
- NSAIDs if appropriate
- Heat/cold
- Avoid bed rest >48 hours
- Gradual return to activity

**Physical Therapy:**
- McKenzie method
- Core strengthening
- Flexibility
- Posture education

**Injections:**
- Epidural steroid
- Selective nerve root
- Facet joint
- Medial branch block

### Surgical Indications

**Absolute:**
- Cauda equina syndrome
- Progressive neurological deficit
- Instability with fracture
- Infection with cord compression

**Relative:**
- Failed conservative treatment (6-12 weeks)
- Recurrent episodes
- Significant functional limitation
- Confirmatory imaging matching symptoms

### Procedures

**Discectomy:**
- Removes herniated disc fragment
- Microdiscectomy preferred
- Good outcomes for radiculopathy

**Laminectomy:**
- Removes lamina
- Decompresses stenosis
- May include fusion

**Fusion:**
- Stabilizes segment
- Indications: instability, deformity, spondylolisthesis
- Adjacent segment disease risk

**Disc Replacement:**
- Preserves motion
- Cervical and lumbar
- Limited long-term data`,

      keyTerms: [
        { term: 'modic changes', definition: 'MRI signal changes in vertebral endplates' },
        { term: 'radiculopathy', definition: 'Nerve root dysfunction' },
        { term: 'myelopathy', definition: 'Spinal cord dysfunction' },
        { term: 'microdiscectomy', definition: 'Minimally invasive disc removal' },
      ],

      clinicalNotes: 'Clinical correlation with imaging is essential - many asymptomatic people have abnormal spine imaging.',
    },

    5: {
      level: 5,
      summary: 'Expert spine care including complex deformity, minimally invasive surgery, and multidisciplinary pain management.',
      explanation: `## Complex Deformity

**Adult Scoliosis:**
- Degenerative vs pre-existing
- Coronal/sagittal imbalance
- Often painful
- Surgery: long fusions, osteotomies

**Sagittal Balance:**
- PI-LL mismatch
- SVA (sagittal vertical axis)
- PT (pelvic tilt)
- Goals: SVA <5 cm, PI-LL <10

**Pedicle Subtraction Osteotomy:**
- Corrects rigid deformity
- Significant blood loss
- Neurological risk

## Minimally Invasive Surgery

**TLIF/PLIF:**
- Transforaminal/posterior lumbar interbody fusion
- Muscle-sparing
- Smaller incisions
- Faster recovery

**XLIF/DLIF:**
- Lateral approaches
- Avoids major muscles
- Coronal correction
- Limited levels

**Endoscopic Surgery:**
- Disc herniation
- Stenosis
- Very small incisions
- Rapid recovery

## Chronic Pain Management

**Multidisciplinary Approach:**
- Physical therapy
- Psychology
- Interventional procedures
- Medication management
- Complementary therapies

**Spinal Cord Stimulation:**
- Failed back surgery syndrome
- Complex regional pain syndrome
- Neuropathic pain
- High-frequency, burst programming

**Intrathecal Pumps:**
- Refractory pain
- Baclofen for spasticity
- Morphine/ziconotide
- Implantable device

### Research Frontiers

**Biologics:**
- Growth factors for fusion
- Disc regeneration
- Stem cells
- Limited evidence currently

**Navigation/Robotics:**
- Improved accuracy
- Less invasive
- Better outcomes data needed

**Motion Preservation:**
- Disc replacement
- Interspinous spacers
- Facet replacement`,

      keyTerms: [
        { term: 'PI', definition: 'Pelvic incidence' },
        { term: 'LL', definition: 'Lumbar lordosis' },
        { term: 'SVA', definition: 'Sagittal vertical axis' },
        { term: 'osteotomy', definition: 'Surgical cutting of bone' },
      ],

      clinicalNotes: 'Sagittal balance is more important than coronal balance for patient-reported outcomes in adult deformity.',
    },
  },

  media: [],

  citations: [
    {
      id: 'aaos-spine',
      type: 'textbook',
      title: 'Orthopaedic Knowledge Update: Spine',
      source: 'AAOS',
    },
  ],

  crossReferences: [
    { targetId: 'musculoskeletal-joint-examination', targetType: 'process', relationship: 'sibling', label: 'Joint Examination' },
    { targetId: 'orthopedics-spine', targetType: 'topic', relationship: 'related', label: 'Spine Disorders' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['physical-examination', 'orthopedics'],
    keywords: ['spine', 'back', 'neck', 'vertebrae', 'disc'],
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

export default spineExam;
