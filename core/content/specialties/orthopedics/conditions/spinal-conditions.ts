import { EducationalContent } from '../../../types';

export const spinalConditionsContent: EducationalContent = {
  id: 'ortho-spinal-conditions',
  type: 'condition',
  name: 'Spinal Conditions',
  alternateNames: ['Spine disorders', 'Vertebral pathology', 'Spinal disease'],
  hpoId: 'HP:0000925',

  levels: {
    1: {
      level: 1,
      summary: 'Spinal conditions are problems with your backbone that can cause pain, stiffness, or nerve symptoms like tingling in your arms or legs.',
      explanation: `Your spine is made of 33 bones called vertebrae, stacked on top of each other with cushions (discs) in between. Many things can go wrong with this complex structure.

**Common Spinal Problems:**

*Herniated Disc ("Slipped Disc"):*
- The cushion between bones bulges or breaks open
- Can press on nerves
- Causes pain that may travel down your leg or arm
- Often gets better without surgery

*Spinal Stenosis (Narrowing):*
- The space around the spinal cord gets smaller
- More common as we age
- Causes leg pain when walking
- Feels better when bending forward or sitting

*Scoliosis (Curved Spine):*
- Spine curves side to side
- Often noticed in teenagers
- May need a brace or sometimes surgery
- Many cases are mild and don't cause problems

*Spondylolisthesis (Slipped Vertebra):*
- One bone slips forward on the one below
- Can cause back pain and leg symptoms
- Common in athletes who bend backward a lot

**Warning Signs to See a Doctor:**
- Pain that doesn't improve after a few weeks
- Numbness or weakness in arms or legs
- Trouble walking or balance problems
- Loss of bladder or bowel control (emergency!)

**What Helps:**
- Physical therapy and exercises
- Maintaining a healthy weight
- Good posture
- Sometimes medication or injections
- Surgery only when really needed`,
      keyTerms: [
        { term: 'vertebrae', definition: 'The individual bones that make up your spine' },
        { term: 'herniated disc', definition: 'When the soft center of a spinal disc pushes through the outer ring' },
        { term: 'spinal stenosis', definition: 'Narrowing of the spaces in your spine, putting pressure on nerves' },
        { term: 'scoliosis', definition: 'An abnormal sideways curve of the spine' },
      ],
      analogies: [
        'Your spine is like a stack of checkers with jelly donuts between them - if a donut squishes out, that\'s a herniated disc.',
        'Spinal stenosis is like a garden hose that gets kinked - it makes it harder for signals to flow through.',
        'Scoliosis is like a tower of blocks that leans to one side instead of going straight up.',
      ],
      examples: [
        'A person who bends over and feels a sudden "pop" followed by leg pain (herniated disc).',
        'An older adult whose legs get tired and numb after walking a block (spinal stenosis).',
        'A teenager whose shoulders appear uneven when standing straight (scoliosis).',
      ],
    },
    2: {
      level: 2,
      summary: 'Spinal conditions encompass disc disease, stenosis, deformity, and instability, each with characteristic presentations that guide diagnosis and management.',
      explanation: `Understanding spinal conditions requires knowledge of anatomy and how structural problems cause symptoms.

**Disc Disease:**

*Herniated Nucleus Pulposus (HNP):*
- Nucleus pulposus extrudes through annulus fibrosus
- Most common at L4-L5 and L5-S1
- Radicular symptoms follow dermatomal pattern
- Natural history: 90% improve without surgery

*Degenerative Disc Disease:*
- Loss of disc height and hydration
- Part of normal aging
- May or may not cause symptoms
- "Black disc" on MRI

**Spinal Stenosis:**

*Central Stenosis:*
- Narrowing of spinal canal
- Neurogenic claudication: leg pain with walking
- Relieved by sitting or bending forward
- Differs from vascular claudication

*Foraminal Stenosis:*
- Narrowing of nerve root exit hole
- Causes radiculopathy
- Often from disc/facet degeneration

**Spinal Deformity:**

*Scoliosis:*
- Lateral curvature >10 degrees
- Adolescent idiopathic most common
- Cobb angle measures severity
- Treatment based on curve magnitude, skeletal maturity

*Kyphosis:*
- Excessive forward curvature
- Scheuermann's disease in adolescents
- Compression fractures in elderly

**Instability:**

*Spondylolysis:*
- Pars interarticularis defect
- Common in young athletes
- May progress to spondylolisthesis

*Spondylolisthesis:*
- Forward slippage of vertebra
- Graded I-IV by percentage
- May cause stenosis symptoms

**Red Flags:**
- Cauda equina syndrome
- Progressive neurologic deficit
- Fever with back pain
- History of cancer
- Trauma`,
      keyTerms: [
        { term: 'nucleus pulposus', definition: 'The gel-like center of an intervertebral disc', pronunciation: 'NOO-klee-us pul-PO-sus' },
        { term: 'radiculopathy', definition: 'Nerve root dysfunction causing pain, numbness, or weakness in a dermatomal pattern' },
        { term: 'neurogenic claudication', definition: 'Leg symptoms with walking due to spinal stenosis, relieved by rest or flexion' },
        { term: 'Cobb angle', definition: 'Standard measurement of spinal curve severity in scoliosis' },
        { term: 'spondylolysis', definition: 'Defect or stress fracture in the pars interarticularis of the vertebra' },
        { term: 'spondylolisthesis', definition: 'Forward slippage of one vertebra on another', pronunciation: 'spon-di-lo-lis-THEE-sis' },
      ],
      analogies: [
        'Neurogenic claudication is like a shopping cart syndrome - people feel better leaning forward on a cart.',
        'Spondylolysis is like a crack in a chain link that might eventually let the chain slip.',
        'The Cobb angle is like measuring how far a leaning tower tilts from vertical.',
      ],
    },
    3: {
      level: 3,
      summary: 'Spinal pathology involves complex interplay between mechanical, inflammatory, and neural factors, requiring systematic evaluation and evidence-based treatment selection.',
      explanation: `Comprehensive understanding of spinal conditions integrates pathophysiology, imaging interpretation, and treatment algorithms.

**Disc Pathophysiology:**

*Degeneration Cascade:*
1. Dysfunction phase: Circumferential tears, instability
2. Instability phase: Disc resorption, facet arthropathy
3. Stabilization phase: Osteophyte formation, stiffness

*Disc Herniation Types:*
- Protrusion: Base wider than dome
- Extrusion: Dome wider than base
- Sequestration: Free fragment
- Location: Central, paracentral, foraminal, far lateral

*Chemical vs. Mechanical Pain:*
- Inflammatory mediators (PGE2, IL-6, TNF-alpha)
- Mechanical compression
- Often combination of both

**Stenosis Pathophysiology:**

*Contributing Factors:*
- Disc bulging
- Facet hypertrophy
- Ligamentum flavum thickening
- Osteophytes
- Spondylolisthesis

*Neurogenic vs. Vascular Claudication:*
| Feature | Neurogenic | Vascular |
|---------|------------|----------|
| Relief | Sitting/flexion | Standing still |
| Pulses | Normal | Decreased |
| Skin changes | None | Present |
| Walking uphill | Better | Worse |

**Scoliosis Evaluation:**

*Classification (Lenke):*
- Curve types 1-6
- Lumbar modifier (A, B, C)
- Sagittal thoracic modifier

*Treatment Thresholds:*
- <25 degrees: Observation
- 25-40 degrees: Bracing (if growing)
- >40-50 degrees: Consider surgery

**Imaging Interpretation:**

*MRI Findings:*
- Disc degeneration: T2 signal loss
- Modic changes:
  - Type 1: Edema (inflammation)
  - Type 2: Fatty (stable)
  - Type 3: Sclerosis (endplate)
- Nerve root compression
- Cord signal changes

*Dynamic Instability:*
- Flexion-extension X-rays
- Translation >4mm
- Angulation >10 degrees

**Treatment Algorithms:**

*Disc Herniation:*
- Conservative first (6-12 weeks)
- Epidural injections
- Surgery for refractory or progressive neuro

*Stenosis:*
- Physical therapy, NSAIDs
- Epidural injections
- Decompression surgery
- Fusion if instability

*Scoliosis:*
- Observation, bracing, or fusion
- Based on curve magnitude, progression risk
- Skeletal maturity (Risser sign)`,
      keyTerms: [
        { term: 'Modic changes', definition: 'MRI vertebral endplate changes indicating inflammation, fatty replacement, or sclerosis' },
        { term: 'Lenke classification', definition: 'Comprehensive scoliosis classification system guiding surgical planning' },
        { term: 'Risser sign', definition: 'Iliac crest ossification indicator of skeletal maturity (0-5 scale)' },
        { term: 'ligamentum flavum', definition: 'Yellow ligament connecting laminae, thickens in stenosis', pronunciation: 'lig-ah-MEN-tum FLAY-vum' },
        { term: 'sequestered disc', definition: 'Free fragment of disc material separated from parent disc' },
        { term: 'dynamic instability', definition: 'Abnormal vertebral motion demonstrated on flexion-extension imaging' },
      ],
      clinicalNotes: 'Imaging findings must correlate with clinical presentation - many asymptomatic individuals have "abnormal" MRIs. Modic Type 1 changes may predict better response to fusion. Neurogenic claudication differs from vascular by relief with flexion, not just rest.',
    },
    4: {
      level: 4,
      summary: 'Advanced spinal care integrates biomechanical principles, surgical decision-making algorithms, and understanding of surgical complications and adjacent segment pathology.',
      explanation: `Comprehensive spinal management requires sophisticated understanding of biomechanics, surgical techniques, and outcome predictors.

**Biomechanical Principles:**

*Load Sharing:*
- Anterior column: 80% of axial load
- Posterior elements: Rotation, extension
- Three-column theory (Denis)

*Instantaneous Axis of Rotation:*
- Changes with degeneration
- Affects motion segment kinematics
- Influences surgical planning

*Sagittal Balance:*
- C7 plumb line
- Pelvic incidence = Lumbar lordosis + Sacral slope
- Mismatch predicts poor outcomes

**Surgical Decision-Making:**

*Disc Herniation:*
- Microdiscectomy standard
- Recurrence rate: 5-15%
- Predictors: Larger annular defect, modic changes
- Same-level fusion for recurrence

*Stenosis:*
- Laminectomy vs. laminotomy
- Fusion indications:
  - Instability
  - Spondylolisthesis
  - Deformity correction
- Minimally invasive options

*Fusion Approaches:*
- ALIF: Best lordosis restoration
- PLIF/TLIF: Single position
- Lateral (XLIF/DLIF): Access to L1-L5
- Combined anterior-posterior for deformity

**Adjacent Segment Disease:**

*Pathophysiology:*
- Increased stress at adjacent levels
- Natural progression vs. surgical effect
- Incidence: 2-3% per year requiring surgery

*Risk Factors:*
- Pre-existing degeneration
- Sagittal imbalance
- Older age
- Multiple levels fused

*Prevention Strategies:*
- Motion preservation (controversial)
- Proper sagittal alignment
- Avoid over-fusion

**Complications:**

*Dural Tear:*
- Incidence: 1-17%
- Primary repair when possible
- CSF leak, pseudomeningocele

*Nerve Root Injury:*
- Transient: 1-10%
- Permanent: <1%
- Higher risk in revision surgery

*Pseudarthrosis:*
- Non-union of fusion
- Risk factors: Smoking, NSAIDs, multilevel
- May require revision

*Hardware Failure:*
- Screw loosening, rod fracture
- Often indicates pseudarthrosis
- May be asymptomatic

**Special Populations:**

*Degenerative Scoliosis:*
- Adult de novo or progressive adolescent
- Sagittal imbalance common
- Long fusion with pelvic fixation often needed

*Cervical Myelopathy:*
- Cord compression
- Progressive without surgery
- Anterior vs. posterior approach
- OPLL considerations

*Osteoporotic Spine:*
- Vertebral augmentation (kyphoplasty/vertebroplasty)
- Cement-augmented screws
- PMMA or expandable screws`,
      keyTerms: [
        { term: 'sagittal balance', definition: 'Alignment of spine in sagittal plane; C7 plumb line relative to sacrum' },
        { term: 'pelvic incidence', definition: 'Fixed pelvic parameter relating sacral endplate to hip axis; determines lumbar lordosis needs' },
        { term: 'TLIF', definition: 'Transforaminal Lumbar Interbody Fusion; posterior approach to disc space' },
        { term: 'adjacent segment disease', definition: 'Degeneration at levels next to fusion, potentially requiring additional surgery' },
        { term: 'pseudarthrosis', definition: 'Failed fusion; non-union at intended fusion site' },
        { term: 'OPLL', definition: 'Ossification of Posterior Longitudinal Ligament; causes myelopathy' },
      ],
      clinicalNotes: 'Sagittal balance is critical - every 1cm of positive sagittal vertical axis increases ODI by ~2 points. Smoking cessation mandatory before fusion (doubles pseudarthrosis risk). Adjacent segment disease is inevitable to some degree; minimize by maintaining alignment and avoiding unnecessary fusion levels.',
    },
    5: {
      level: 5,
      summary: 'Contemporary spine care encompasses precision diagnostics, motion-preservation technology, biologics for fusion enhancement, and value-based outcome metrics with emerging evidence for personalized approaches.',
      explanation: `State-of-the-art spine management integrates advanced technology, biological approaches, and outcomes science.

**Precision Diagnostics:**

*Advanced Imaging:*
- Quantitative MRI (T2 mapping, diffusion)
- Standing/dynamic MRI
- EOS imaging for whole-spine alignment
- Nuclear medicine for infection/tumor

*Electrodiagnostics:*
- EMG/NCS for radiculopathy
- SSEP for cord function
- MEP intraoperatively

*Diagnostic Injections:*
- Selective nerve root blocks
- Facet blocks (medial branch)
- Discography (controversial)
- Specificity improved with controlled blocks

**Motion Preservation:**

*Lumbar Disc Arthroplasty:*
- Indications: Single-level DDD, no facet arthritis
- Contraindications: Instability, stenosis, deformity
- Long-term data emerging
- Adjacent segment protection debated

*Interspinous Spacers:*
- For mild-moderate stenosis
- High reoperation rates
- Limited long-term data

*Posterior Dynamic Stabilization:*
- Pedicle-based systems
- Limited evidence
- Not widely adopted

**Biologics and Fusion Enhancement:**

*Bone Graft Options:*
- Autograft (iliac crest): Gold standard
- Allograft: No donor site morbidity
- Ceramics: Osteoconductive scaffolds
- BMP-2: Osteoinductive, but complications

*Emerging Biologics:*
- Stem cell therapy
- Platelet-rich plasma
- Growth factors
- Gene therapy (research)

*Stimulators:*
- Electrical bone stimulation
- DC stimulation for pseudarthrosis
- Limited evidence

**Minimally Invasive Advances:**

*Endoscopic Techniques:*
- Transforaminal endoscopic discectomy
- Interlaminar endoscopic decompression
- Steep learning curve
- Reduced tissue trauma

*Robotic Surgery:*
- Pedicle screw accuracy
- Navigation integration
- Radiation reduction
- Cost considerations

*Tubular Retractors:*
- MIS-TLIF
- Lateral interbody fusion
- Reduced muscle damage

**Outcomes and Value:**

*Patient-Reported Outcomes:*
- ODI, NDI for disability
- VAS for pain
- EQ-5D for quality of life
- PROMIS instruments

*MCID and SCB:*
- MCID ODI: 10-15 points
- Substantial Clinical Benefit: 18.8 points
- Guides treatment success definition

*Value-Based Spine Care:*
- Episode-based payments
- Risk stratification
- Outcome registries
- Comparative effectiveness

**Special Topics:**

*Spinal Cord Injury:*
- NASCIS protocols (controversial)
- Timing of decompression
- Neuroprotective strategies
- Rehabilitation optimization

*Spine Tumors:*
- Weinstein-Boriani-Biagini staging
- SINS score for stability
- Separation surgery + radiation
- En bloc vs. intralesional

*Infection:*
- Pyogenic vs. TB
- MRI with contrast
- Biopsy for culture
- Prolonged antibiotics
- Surgical debridement indications`,
      keyTerms: [
        { term: 'MCID', definition: 'Minimal Clinically Important Difference; smallest change meaningful to patients' },
        { term: 'BMP-2', definition: 'Bone Morphogenetic Protein-2; potent osteoinductive growth factor for fusion' },
        { term: 'EOS imaging', definition: 'Low-dose biplanar X-ray for full-spine standing alignment assessment' },
        { term: 'SINS score', definition: 'Spinal Instability Neoplastic Score; guides surgical stabilization for tumors' },
        { term: 'transforaminal endoscopic', definition: 'Minimally invasive approach through foramen for disc/nerve decompression' },
        { term: 'separation surgery', definition: 'Creating space between tumor and cord to allow safe radiation therapy' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Disc arthroplasty contraindicated with facet arthropathy or instability
- BMP-2 associated with heterotopic ossification, radiculitis (especially anterior cervical)
- NASCIS steroids controversial - most centers no longer use routinely
- Cauda equina syndrome: Decompress within 48 hours for best outcomes

**Emerging Evidence:**
- Robotic accuracy >95% for pedicle screws
- MIS approaches reduce blood loss but similar long-term outcomes
- Biologics have not replaced iliac crest autograft for high-risk fusions
- Outcome registries driving evidence-based practice

**Practice Considerations:**
- Shared decision-making essential for elective spine surgery
- Preoperative optimization (smoking, diabetes, nutrition) improves outcomes
- Multimodal pain management reduces opioid requirements
- Early mobilization and enhanced recovery protocols`,
    },
  },

  media: [
    {
      id: 'disc-herniation-types',
      type: 'diagram',
      filename: 'disc-herniation-types.svg',
      title: 'Types of Disc Herniation',
      description: 'Protrusion, extrusion, and sequestration patterns',
    },
    {
      id: 'spinal-stenosis-anatomy',
      type: 'diagram',
      filename: 'spinal-stenosis-anatomy.svg',
      title: 'Spinal Stenosis',
      description: 'Central and foraminal stenosis illustration',
    },
  ],
  citations: [
    {
      id: 'nass-guidelines',
      type: 'article',
      title: 'Clinical Guidelines for Lumbar Disc Herniation',
      source: 'North American Spine Society',
      url: 'https://www.spine.org/Research-Clinical-Care/Quality-Improvement/Clinical-Guidelines',
      license: 'Copyright NASS',
    },
    {
      id: 'spine-journal',
      type: 'article',
      title: 'Evidence-Based Clinical Guidelines for Multidisciplinary Spine Care',
      source: 'The Spine Journal',
      license: 'Copyright Elsevier',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-spinal-anatomy', targetType: 'structure', relationship: 'related', label: 'Spinal Anatomy' },
    { targetId: 'ortho-back-pain', targetType: 'condition', relationship: 'sibling', label: 'Back Pain' },
    { targetId: 'ortho-physical-therapy', targetType: 'topic', relationship: 'related', label: 'Physical Therapy' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['orthopedics', 'spine', 'neurosurgery'],
    keywords: ['spinal stenosis', 'disc herniation', 'scoliosis', 'spondylolisthesis', 'degenerative disc disease'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'neurology'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spinalConditionsContent;
