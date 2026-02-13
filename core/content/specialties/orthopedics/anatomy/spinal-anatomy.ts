import { EducationalContent } from '../../../types';

export const spinalAnatomyContent: EducationalContent = {
  id: 'ortho-spinal-anatomy',
  type: 'structure',
  name: 'Spinal Anatomy',
  alternateNames: ['Vertebral column', 'Backbone anatomy', 'Spine structure'],
  fmaId: 'FMA:13478',

  levels: {
    1: {
      level: 1,
      summary: 'Your spine is a stack of bones called vertebrae that protects your spinal cord and lets you bend, twist, and stand upright.',
      explanation: `Your spine (backbone) runs down the middle of your back and is one of the most important parts of your body!

**What Your Spine Does:**
- **Protects your spinal cord**: The spinal cord carries messages between your brain and body
- **Holds you up**: Without it, you'd be like a jellyfish!
- **Lets you move**: Bend forward, twist around, look up at the sky

**Parts of Your Spine:**

*The Bones (Vertebrae):*
Your spine has 33 bones stacked on top of each other:
- **Neck (Cervical)**: 7 small bones that let you nod and shake your head
- **Upper back (Thoracic)**: 12 bones connected to your ribs
- **Lower back (Lumbar)**: 5 big, strong bones (most back pain happens here!)
- **Sacrum**: 5 bones fused together, connects to your hips
- **Tailbone (Coccyx)**: 4 tiny bones at the very bottom

*The Cushions (Discs):*
Between each bone is a soft, squishy disc:
- Works like a shock absorber (like the springs in your mattress)
- Has a jelly-like center
- Keeps bones from rubbing together

*The Holes (Spinal Canal):*
- A tunnel running through the center of the bones
- Protects your spinal cord (the main nerve highway)

**Common Spine Problems:**
- **Herniated disc**: When the jelly center pushes out and presses on nerves
- **Scoliosis**: When the spine curves sideways like an S
- **Poor posture**: Slouching puts extra stress on your spine`,
      keyTerms: [
        { term: 'spine', definition: 'The column of bones running down your back' },
        { term: 'vertebra', definition: 'One of the bones in your spine (plural: vertebrae)' },
        { term: 'spinal cord', definition: 'The bundle of nerves inside your spine that carries messages between brain and body' },
        { term: 'disc', definition: 'The soft cushion between bones in your spine' },
      ],
      analogies: [
        'Your spine is like a stack of donuts (vertebrae) with jelly in between (discs).',
        'The spinal cord is like a telephone cable carrying messages up and down your body.',
        'Vertebrae are like building blocks stacked up with cushions between them.',
      ],
      examples: [
        'When you look up at the ceiling, your neck vertebrae are bending backward.',
        'Carrying a heavy backpack puts pressure on your lower back (lumbar) vertebrae.',
        'Athletes often strain their back because the lumbar spine handles the most weight.',
      ],
    },
    2: {
      level: 2,
      summary: 'The vertebral column consists of 33 vertebrae organized into five regions, with intervertebral discs between most vertebrae, providing protection for the spinal cord while allowing flexibility.',
      explanation: `The spine is a complex structure balancing mobility with protection of the neural elements.

**Vertebral Regions:**

1. **Cervical Spine (C1-C7)**
   - Most mobile region
   - C1 (Atlas): Supports skull, nodding motion
   - C2 (Axis): Has dens (odontoid), rotation
   - C3-C7: Standard cervical vertebrae
   - Vertebral arteries pass through transverse foramina

2. **Thoracic Spine (T1-T12)**
   - Least mobile due to rib attachments
   - Kyphotic curve (convex posteriorly)
   - Costovertebral and costotransverse joints
   - Narrowest spinal canal

3. **Lumbar Spine (L1-L5)**
   - Largest vertebrae (weight-bearing)
   - Lordotic curve (concave posteriorly)
   - Most disc herniations occur here
   - Spinal cord ends at L1-L2 (conus medullaris)

4. **Sacrum (S1-S5 fused)**
   - Triangular bone
   - Articulates with pelvis (SI joints)
   - Contains sacral nerve roots

5. **Coccyx (3-5 fused)**
   - Vestigial tailbone
   - Muscle and ligament attachment

**Vertebral Anatomy:**

*Typical Vertebra Components:*
- **Vertebral body**: Anterior, weight-bearing
- **Vertebral arch**: Posterior, protects spinal cord
  - Pedicles (lateral connections to body)
  - Laminae (posterior roof)
- **Processes**:
  - Spinous process (posterior, you can feel these)
  - Transverse processes (lateral)
  - Articular processes (superior/inferior, form facet joints)
- **Foramina**:
  - Vertebral foramen (spinal canal)
  - Intervertebral foramina (nerve root exit)

**Intervertebral Discs:**
- **Nucleus pulposus**: Gelatinous center (high water content)
- **Annulus fibrosus**: Outer ring of fibrocartilage
- 25% of spinal height
- Absorb shock, allow motion
- Disc height decreases with age (you get shorter!)

**Spinal Ligaments:**
- Anterior longitudinal ligament (ALL): Front of bodies
- Posterior longitudinal ligament (PLL): Back of bodies
- Ligamentum flavum: Between laminae (yellow, elastic)
- Interspinous and supraspinous ligaments

**Spinal Curves:**
- Primary curves: Thoracic, sacral (present at birth)
- Secondary curves: Cervical, lumbar (develop with mobility)
- S-shaped when viewed from side`,
      keyTerms: [
        { term: 'nucleus pulposus', definition: 'The gel-like center of an intervertebral disc', pronunciation: 'NOO-klee-us pul-POH-sus' },
        { term: 'annulus fibrosus', definition: 'The tough outer ring of an intervertebral disc', pronunciation: 'AN-yoo-lus fy-BRO-sus' },
        { term: 'vertebral foramen', definition: 'The opening in each vertebra that together forms the spinal canal' },
        { term: 'facet joint', definition: 'Joints between articular processes of adjacent vertebrae' },
        { term: 'intervertebral foramen', definition: 'Opening between adjacent vertebrae where spinal nerves exit' },
        { term: 'conus medullaris', definition: 'The tapered end of the spinal cord, usually at L1-L2 level', pronunciation: 'KOH-nus med-yoo-LAIR-is' },
      ],
      analogies: [
        'The nucleus pulposus is like jelly in a donut - it can squeeze out if the outer ring is damaged.',
        'Facet joints are like the hinges on a door, guiding and limiting motion.',
        'The spinal canal is like a protective tunnel for the spinal cord highway.',
      ],
    },
    3: {
      level: 3,
      summary: 'The spine exhibits regional variation in vertebral morphology, motion segment biomechanics, and neural element relationships, with the motion segment concept integrating disc, facets, and ligaments into a functional unit.',
      explanation: `Spinal anatomy requires understanding the three-dimensional relationships between osseous, discal, and neural structures within functional motion segments.

**Motion Segment Concept:**

The functional spinal unit (motion segment) includes:
- Two adjacent vertebrae
- Intervertebral disc
- Facet joints (zygapophyseal joints)
- Associated ligaments
- Surrounding muscles

*Three-Column Model (Denis):*
1. **Anterior column**: Anterior vertebral body, ALL, anterior annulus
2. **Middle column**: Posterior body, PLL, posterior annulus
3. **Posterior column**: Pedicles, facets, laminae, spinous processes, posterior ligaments

*Stability:* Disruption of 2+ columns = unstable

**Regional Vertebral Characteristics:**

*Cervical:*
- Bifid spinous processes (C3-C6)
- Transverse foramina (vertebral arteries C1-C6)
- Uncovertebral joints (Luschka) - unique to cervical
- Largest vertebral canal relative to cord
- Facet orientation: ~45° (allows flexion/extension + rotation)

*Thoracic:*
- Costal facets on body and transverse processes
- Heart-shaped vertebral body
- Long, inferiorly angled spinous processes
- Facet orientation: ~60° (limits flexion, allows rotation)
- Rib cage stabilization

*Lumbar:*
- Largest vertebral bodies
- Short, quadrangular spinous processes
- Mammillary processes (muscle attachment)
- Facet orientation: ~90° sagittal (allows flexion/extension, limits rotation)
- Cauda equina below L1-L2

**Intervertebral Disc Biomechanics:**

*Disc Structure:*
- Annulus: 15-25 concentric lamellae
- Collagen orientation alternates 30° between layers
- Nucleus: 70-90% water in youth, decreases with age
- Avascular after age 8-10 (relies on diffusion)

*Load Distribution:*
- Nucleus distributes load centrifugally
- Annulus resists tension
- Endplates: Hyaline cartilage, nutrient pathway

*Disc Degeneration:*
- Water loss → height loss
- Fissures in annulus
- Nuclear migration → herniation
- Endplate changes → Modic changes

**Neural Anatomy:**

*Spinal Cord:*
- Ends at L1-L2 (conus medullaris)
- 31 pairs of spinal nerves
- Cervical: 8 pairs (C1 exits above C1)
- Thoracic, lumbar, sacral, coccygeal

*Cauda Equina:*
- "Horse's tail" - lumbar/sacral nerve roots
- Below conus medullaris
- L2-S5 nerve roots in thecal sac

*Dermatomal/Myotomal Organization:*
- C5: Deltoid, biceps (elbow flexion)
- C6: Wrist extensors, brachioradialis
- C7: Triceps, wrist flexors (largest root)
- C8: Finger flexors
- L4: Quadriceps, ankle dorsiflexion
- L5: EHL, hip abduction
- S1: Gastrocnemius, ankle plantarflexion

**Spinal Blood Supply:**
- Anterior spinal artery (single, anterior 2/3 cord)
- Posterior spinal arteries (paired, posterior 1/3)
- Segmental arteries → radicular arteries
- Artery of Adamkiewicz (T9-L2): Major feeder to lower cord`,
      keyTerms: [
        { term: 'motion segment', definition: 'Functional spinal unit consisting of two adjacent vertebrae and intervening soft tissues' },
        { term: 'cauda equina', definition: 'Collection of lumbar and sacral nerve roots below the conus medullaris', pronunciation: 'KAW-da eh-KWY-na' },
        { term: 'uncovertebral joint', definition: 'Joint of Luschka; unique cervical articulation between uncinate process and vertebral body above' },
        { term: 'artery of Adamkiewicz', definition: 'Major radicular artery supplying anterior spinal artery in lower thoracic/lumbar region', pronunciation: 'ah-dam-KEE-vich' },
        { term: 'Modic changes', definition: 'MRI signal changes in vertebral endplates associated with disc degeneration' },
        { term: 'dermatomal', definition: 'Relating to the skin area supplied by a single spinal nerve' },
      ],
      clinicalNotes: 'Most disc herniations occur posterolaterally due to the stronger PLL centrally. L4-L5 and L5-S1 are the most common levels. A far lateral disc herniation at L4-L5 affects the L4 root (exiting root), while a posterolateral herniation affects L5 (traversing root).',
    },
    4: {
      level: 4,
      summary: 'Advanced spinal anatomy integrates segmental biomechanics, neural compression syndromes, vascular considerations, and the degenerative cascade affecting disc, facet, and ligamentous structures with age and pathology.',
      explanation: `Clinical spinal anatomy requires understanding the complex interplay of degeneration, instability, and neural compromise.

**Degenerative Cascade (Kirkaldy-Willis):**

*Phase 1: Dysfunction*
- Disc desiccation begins
- Annular fissures
- Facet cartilage softening
- Hypermobility
- Pain from inflamed structures

*Phase 2: Instability*
- Progressive disc height loss
- Facet degeneration, laxity
- Abnormal motion patterns
- Spondylolisthesis risk
- Neural compromise possible

*Phase 3: Stabilization*
- Osteophyte formation
- Facet hypertrophy
- Ligament thickening
- Natural fusion tendency
- Stenosis common

**Spinal Stenosis:**

*Central Stenosis:*
- Trefoil-shaped canal
- Ligamentum flavum hypertrophy
- Facet hypertrophy
- Disc bulge
- Neurogenic claudication

*Lateral Recess Stenosis:*
- Medial to pedicle
- Superior articular process hypertrophy
- Radiculopathy pattern

*Foraminal Stenosis:*
- Disc height loss
- Osteophytes
- Affects exiting nerve root
- Dynamic with extension

**Cervical Spine Considerations:**

*Cervical Myelopathy:*
- Cord compression signs
- Long tract signs (hyperreflexia, Hoffman's, Babinski)
- Gait disturbance
- Hand clumsiness
- Bladder dysfunction (late)

*Sagittal Balance:*
- C2-C7 SVA (sagittal vertical axis)
- Chin-brow vertical angle
- T1 slope minus cervical lordosis

*Instability Criteria (White & Panjabi):*
- >3.5mm translation
- >11° angulation difference
- Disc space narrowing
- Facet widening

**Thoracolumbar Junction:**

*Unique Characteristics:*
- Transition zone (T10-L2)
- Changed facet orientation
- Increased injury risk
- Conus location

*TLICS Classification:*
- Morphology (compression, burst, translation, distraction)
- Neurological status
- PLC integrity

**Lumbosacral Spine:**

*Isthmic Spondylolisthesis:*
- Pars interarticularis defect
- Common at L5-S1
- Scottie dog sign on oblique X-ray
- Grading: Meyerding (I-IV) or % slip

*Degenerative Spondylolisthesis:*
- No pars defect
- Facet incompetence
- Common at L4-L5
- Associated with stenosis

**Sacropelvic Parameters:**

*Key Measurements:*
- Pelvic incidence (PI): Fixed anatomic parameter
- Sacral slope (SS): Sacral endplate angle
- Pelvic tilt (PT): Sacral position relative to femoral heads
- PI = SS + PT

*Clinical Significance:*
- High PI requires greater lordosis
- Loss of lordosis → compensatory PT increase
- Flatback syndrome: Inadequate lordosis

**Surgical Corridors:**

*Anterior Approaches:*
- ACDF: Anterior cervical discectomy and fusion
- ACCF: Corpectomy
- ALIF: Anterior lumbar interbody fusion

*Lateral/Oblique:*
- LLIF/XLIF: Lateral lumbar interbody fusion (through psoas)
- OLIF: Oblique (anterior to psoas)

*Posterior:*
- Laminectomy, laminoplasty
- PLIF: Posterior lumbar interbody fusion
- TLIF: Transforaminal lumbar interbody fusion
- Pedicle screw fixation`,
      keyTerms: [
        { term: 'degenerative cascade', definition: 'Kirkaldy-Willis description of progressive spinal degeneration: dysfunction → instability → stabilization' },
        { term: 'neurogenic claudication', definition: 'Leg pain and weakness with walking due to spinal stenosis, relieved by sitting/flexion' },
        { term: 'pelvic incidence', definition: 'Fixed anatomic parameter relating sacral endplate to femoral head axis; determines required lumbar lordosis' },
        { term: 'spondylolisthesis', definition: 'Forward slippage of one vertebra relative to another', pronunciation: 'spon-dih-loh-lis-THEE-sis' },
        { term: 'pars interarticularis', definition: 'Portion of vertebra between superior and inferior articular processes; fracture causes isthmic spondylolisthesis' },
        { term: 'TLIF', definition: 'Transforaminal lumbar interbody fusion; posterior approach interbody fusion technique' },
      ],
      clinicalNotes: 'Cauda equina syndrome is a surgical emergency: bilateral radiculopathy, saddle anesthesia, bowel/bladder dysfunction, and sexual dysfunction. Delayed decompression (>48 hours) worsens prognosis. MRI is imaging of choice. The artery of Adamkiewicz location varies (T9-L2); thoracic aortic surgery risks cord ischemia.',
    },
    5: {
      level: 5,
      summary: 'Contemporary spinal anatomy research integrates advanced imaging, finite element modeling, motion preservation technologies, and precision surgical navigation with evolving understanding of sagittal balance and its impact on outcomes.',
      explanation: `State-of-the-art spinal surgery and research incorporate biomechanical modeling, advanced imaging, and alignment-based surgical planning.

**Sagittal Alignment Paradigm:**

*Global Spinal Balance:*
- C7 plumb line relative to sacral endplate
- SVA (Sagittal Vertical Axis): <5cm considered normal
- T1 Pelvic Angle (TPA): Single parameter including both thoracic and pelvic parameters
- PI-LL mismatch: PI - LL should be <10°

*Roussouly Classification:*
- Type 1: Low SS, flat lumbar spine
- Type 2: Flat lower lumbar, thoracolumbar kyphosis
- Type 3: Moderate curves (normal)
- Type 4: High SS, hyperlordosis
- Surgical planning based on native alignment

*Compensation Mechanisms:*
- Pelvic retroversion (increased PT)
- Hip extension
- Knee flexion
- Thoracic hypokyphosis
- Cervical hyperlordosis

*Clinical Outcomes Correlation:*
- SVA correlates with disability (Oswestry)
- Every 1cm SVA increase = decreased ODI
- Restoration of alignment improves outcomes
- Under-correction leads to ASD (adjacent segment disease)

**Motion Preservation Technology:**

*Cervical Disc Arthroplasty:*
- Indication: Single/two-level DDD with radiculopathy/myelopathy
- Contraindications: Instability, facet arthropathy, ossification
- Outcomes: Non-inferior to ACDF at 7-10 years
- Reduced adjacent segment degeneration vs. fusion

*Lumbar Disc Arthroplasty:*
- More limited application
- Strict indications: Discogenic pain, no facet disease
- Learning curve considerations
- Long-term data still emerging

*Posterior Dynamic Stabilization:*
- Interspinous spacers (limited evidence)
- Pedicle-based systems
- Load-sharing concept

**Advanced Imaging Applications:**

*Quantitative MRI:*
- T1rho/T2 mapping of disc degeneration
- Diffusion tensor imaging (DTI) of spinal cord
- Cord tractography
- Predict myelopathy recovery

*Standing/Dynamic Imaging:*
- EOS (low-dose standing X-ray): Full spine, 3D reconstruction
- Cone beam CT: Weight-bearing, motion analysis
- Dynamic MRI: Instability detection

**Surgical Navigation:**

*CT-Based Navigation:*
- Pedicle screw accuracy >95%
- Reduced radiation to surgeon
- 3D visualization

*Robotic-Assisted Surgery:*
- Mazor, Globus, Medtronic systems
- Improved accuracy in complex deformity
- Learning curve and setup time

*AR/VR Applications:*
- Surgical planning
- Intraoperative visualization
- Training simulation

**Biologics in Spine Surgery:**

*Bone Graft Options:*
- Autograft: Gold standard (iliac crest)
- Allograft: DBM, structural
- Synthetics: Ceramics, HA-TCP
- Growth factors: BMP-2, BMP-7

*BMP Considerations:*
- FDA approved: ALIF (BMP-2)
- Off-label use widespread
- Complications: Swelling, heterotopic bone, radiculitis
- Cost-benefit analysis

**Emerging Concepts:**

*Disc Regeneration:*
- Cell therapy (MSCs, NPCs)
- Gene therapy
- Growth factor delivery
- Hydrogel scaffolds

*Spinal Cord Injury:*
- Neuroprotective agents
- Cellular transplantation
- Epidural stimulation
- Exoskeletons

*AI in Spine Care:*
- Automated image analysis
- Outcome prediction
- Surgical planning optimization
- Natural language processing for notes

**Outcome Measures:**

*Patient-Reported Outcomes (PROs):*
- ODI (Oswestry Disability Index)
- NDI (Neck Disability Index)
- SF-36/SF-12
- VAS pain scores
- PROMIS

*MCID (Minimal Clinically Important Difference):*
- ODI: 12-15 points
- VAS: 2-3 points
- NDI: 7-10 points`,
      keyTerms: [
        { term: 'PI-LL mismatch', definition: 'Difference between pelvic incidence and lumbar lordosis; >10° associated with poor outcomes' },
        { term: 'SVA', definition: 'Sagittal Vertical Axis; horizontal distance from C7 plumb line to posterior superior corner of S1' },
        { term: 'TPA', definition: 'T1 Pelvic Angle; single value encompassing both spinal and pelvic sagittal parameters' },
        { term: 'ASD', definition: 'Adjacent segment disease; degeneration at levels adjacent to spinal fusion' },
        { term: 'MCID', definition: 'Minimal Clinically Important Difference; smallest change in outcome measure that patients perceive as beneficial' },
        { term: 'DTI', definition: 'Diffusion tensor imaging; MRI technique for visualizing white matter tracts including spinal cord' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- PI-LL mismatch >10° requires surgical correction
- BMP-2 anterior cervical spine contraindicated (airway swelling risk)
- Cervical disc arthroplasty: Maintain motion, may reduce ASD
- CES decompression within 48 hours improves outcomes
- Navigation improves pedicle screw accuracy, especially in deformity

**Surgical Considerations:**
- Age-adjusted alignment targets (older patients tolerate less SVA)
- L5-S1 ALIF has highest fusion rates
- 3-column osteotomy for fixed sagittal imbalance (PSO, VCR)
- Rod contouring affects stress distribution (PJK risk)
- Multilevel constructs: Consider prophylactic cement augmentation in osteoporotic spine`,
    },
  },

  media: [
    {
      id: 'vertebral-regions',
      type: 'diagram',
      filename: 'vertebral-column-regions.svg',
      title: 'Vertebral Column Regions',
      description: 'Cervical, thoracic, lumbar, sacral, and coccygeal regions',
    },
    {
      id: 'vertebra-anatomy',
      type: 'diagram',
      filename: 'typical-vertebra-anatomy.svg',
      title: 'Typical Vertebra Anatomy',
      description: 'Body, arch, processes, and foramina',
    },
    {
      id: 'intervertebral-disc',
      type: 'diagram',
      filename: 'intervertebral-disc-structure.svg',
      title: 'Intervertebral Disc Structure',
      description: 'Nucleus pulposus, annulus fibrosus, and endplates',
    },
  ],
  citations: [
    {
      id: 'openstax-ap-ch7',
      type: 'textbook',
      title: 'Axial Skeleton',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '7',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/7-introduction',
      license: 'CC BY 4.0',
    },
    {
      id: 'schwab-2006',
      type: 'article',
      title: 'Adult spinal deformity-postoperative standing imbalance',
      authors: ['Schwab F', 'Lafage V', 'Patel A', 'Farcy JP'],
      source: 'Spine',
      url: 'https://doi.org/10.1097/01.brs.0000231008.68142.8b',
      license: 'Copyright Lippincott Williams & Wilkins',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain' },
    { targetId: 'ortho-spinal-conditions', targetType: 'condition', relationship: 'related', label: 'Spinal Conditions' },
    { targetId: 'ortho-bone-anatomy-healing', targetType: 'structure', relationship: 'sibling', label: 'Bone Anatomy' },
  ],
  tags: {
    systems: ['musculoskeletal', 'skeletal', 'nervous'],
    structures: ['FMA:13478'],
    topics: ['anatomy', 'orthopedics', 'neurosurgery', 'spine'],
    keywords: ['spine', 'vertebra', 'disc', 'spinal cord', 'stenosis', 'spondylolisthesis'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'neurology'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spinalAnatomyContent;
