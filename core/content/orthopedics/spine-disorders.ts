import { EducationalContent } from '../types';

export const spineDisordersContent: EducationalContent = {
  id: 'ortho-spine-disorders-medical',
  type: 'topic',
  name: 'Spine Disorders: Disc Herniation, Stenosis, Scoliosis, and Spondylolisthesis',
  nameEs: 'Trastornos de la Columna Vertebral: Hernia Discal, Estenosis, Escoliosis y Espondilolistesis',
  alternateNames: ['Spinal pathology', 'Degenerative spine disease', 'Spinal disorders'],

  levels: {
    1: {
      level: 1,
      summary:
        'The spine can develop several problems including bulging discs that press on nerves, narrowing of the spinal canal, abnormal curvature, and bones that slip forward. Most spine problems improve without surgery.',
      explanation: `Your spine is a column of 33 bones (vertebrae) stacked on top of each other. Between most vertebrae are soft cushions called discs. The spinal cord runs through a tunnel in the middle, and nerves branch out at each level.

**Herniated Disc (Slipped Disc):**
- The soft center of a disc pushes out through a tear in the tough outer ring
- This can press on nearby nerves, causing pain, numbness, or weakness
- Most common in the lower back (lumbar) and neck (cervical)
- Lower back herniation can cause pain shooting down the leg (sciatica)
- Neck herniation can cause pain shooting down the arm
- Most herniated discs improve on their own within 6-12 weeks
- Treatment: Rest (brief), physical therapy, pain medications, sometimes injections
- Surgery only if symptoms are severe, progressive, or do not improve

**Spinal Stenosis (Narrowing):**
- The spinal canal narrows and puts pressure on the spinal cord or nerves
- Most common in people over 60
- Causes: Aging, arthritis, bone spurs, thickened ligaments
- Symptoms: Pain, numbness, or weakness in legs that gets worse with walking
- Key feature: Symptoms improve when bending forward (like leaning on a shopping cart)
- Treatment: Physical therapy, medications, injections, surgery if severe

**Scoliosis (Curved Spine):**
- Abnormal sideways curve of the spine (looks like an S or C shape)
- Most common type: Idiopathic (unknown cause) in adolescents, especially girls
- Often found during school screenings or by parents noticing uneven shoulders/hips
- Mild curves: Observation, monitoring during growth
- Moderate curves: Bracing to prevent worsening during growth
- Severe curves (>40-50 degrees): Surgery may be recommended

**Spondylolisthesis (Slipped Vertebra):**
- One vertebra slips forward over the one below it
- Most common in the lower back
- Can be caused by a stress fracture in young athletes (gymnastics, football) or by wear and tear in older adults
- May cause back pain, leg pain, or tightness in hamstrings
- Treatment: Activity modification, physical therapy, bracing, surgery for severe cases`,
      keyTerms: [
        { term: 'herniated disc', definition: 'When the soft center of a spinal disc pushes through a tear in the outer ring and may press on nerves' },
        { term: 'sciatica', definition: 'Pain that travels from the lower back down the leg, usually caused by a pinched nerve in the spine' },
        { term: 'spinal stenosis', definition: 'Narrowing of the space in the spine that puts pressure on the spinal cord and nerves' },
        { term: 'scoliosis', definition: 'An abnormal sideways curve of the spine' },
        { term: 'spondylolisthesis', definition: 'A condition where one vertebra slips forward over the vertebra below it', pronunciation: 'spon-dih-low-lis-THEE-sis' },
        { term: 'vertebra', definition: 'One of the individual bones that make up the spine' },
      ],
      analogies: [
        'A herniated disc is like a jelly donut being squeezed - the jelly (nucleus) pushes out through a crack in the outer shell (annulus) and can press on nearby nerves.',
        'Spinal stenosis is like a tunnel getting narrower - the nerves inside have less room and get compressed.',
        'Scoliosis is like a tree growing with a sideways curve instead of straight up.',
        'Spondylolisthesis is like a book sliding forward off the top of a stack of books.',
      ],
      examples: [
        'A 35-year-old who bent over to pick up a heavy box and now has sharp pain shooting down the back of their leg likely has a herniated disc causing sciatica.',
        'A 70-year-old who can only walk one block before leg pain forces them to stop and lean forward on their cart likely has spinal stenosis.',
        'A 13-year-old girl whose school nurse noticed one shoulder is higher than the other should be evaluated for scoliosis.',
      ],
      patientCounselingPoints: [
        'Most disc herniations improve without surgery over 6-12 weeks.',
        'Staying active is usually better than bed rest for back pain.',
        'Spinal stenosis symptoms improve with leaning forward because it opens up space in the spinal canal.',
        'Scoliosis in adolescents needs monitoring during growth spurts.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Spine disorders are classified by location, pathology, and neurological involvement. Understanding spinal anatomy, nerve root patterns, and red flag symptoms is essential for appropriate evaluation and management.',
      explanation: `Spinal disorders require systematic evaluation of anatomy, neurology, and symptom patterns.

**Spinal Anatomy Review:**
- Cervical spine: 7 vertebrae (C1-C7), supports head, greatest mobility
- Thoracic spine: 12 vertebrae (T1-T12), attached to ribs, least mobile
- Lumbar spine: 5 vertebrae (L1-L5), bears most weight, common injury site
- Sacrum: 5 fused vertebrae; Coccyx: 3-5 fused vertebrae
- Intervertebral disc: Nucleus pulposus (inner gel) + Annulus fibrosus (outer ring)
- Spinal cord ends at L1-L2 (conus medullaris); below is cauda equina (nerve roots)

**Disc Herniation:**

*Types by Direction:*
- Posterolateral (most common): Compresses traversing nerve root (e.g., L4-L5 disc hits L5 root)
- Foraminal/far lateral: Compresses exiting nerve root (e.g., L4-L5 disc hits L4 root)
- Central: May compress cauda equina - emergency!
- Anterior: Usually asymptomatic

*Nerve Root Patterns (Lumbar):*
- L4 root (L3-L4 disc): Knee extension weakness, decreased patellar reflex, medial leg numbness
- L5 root (L4-L5 disc): Great toe/ankle dorsiflexion weakness (foot drop), lateral leg/dorsal foot numbness
- S1 root (L5-S1 disc): Ankle plantarflexion weakness, decreased Achilles reflex, lateral foot numbness

*Nerve Root Patterns (Cervical):*
- C5 root (C4-C5 disc): Deltoid/biceps weakness, lateral arm numbness
- C6 root (C5-C6 disc): Biceps/wrist extension weakness, decreased brachioradialis reflex, thumb/index finger numbness
- C7 root (C6-C7 disc): Triceps/wrist flexion weakness, decreased triceps reflex, middle finger numbness
- C8 root (C7-T1 disc): Grip/intrinsic hand weakness, ring/little finger numbness

**Spinal Stenosis:**

*Types:*
- Central stenosis: Narrowing of spinal canal; neurogenic claudication
- Lateral recess stenosis: Narrowing where nerve root exits; radiculopathy
- Foraminal stenosis: Narrowing of neural foramen; radiculopathy

*Neurogenic Claudication vs. Vascular Claudication:*
- Neurogenic: Worse with walking AND standing; better bending forward; normal pulses
- Vascular: Worse with walking only; better with rest (any position); decreased pulses
- Shopping cart sign: Patients with neurogenic claudication lean forward while walking

*Causes:*
- Disc degeneration and bulging
- Facet joint hypertrophy and osteophytes
- Ligamentum flavum hypertrophy/buckling
- Spondylolisthesis

**Scoliosis:**

*Classification:*
- Idiopathic (80%): Infantile (<3 years), juvenile (3-10), adolescent (10-18)
- Congenital: Vertebral malformation (hemivertebra, unsegmented bar)
- Neuromuscular: Cerebral palsy, muscular dystrophy, spina bifida
- Degenerative (adult): De novo scoliosis from disc/facet degeneration

*Adolescent Idiopathic Scoliosis (AIS):*
- Female predominance (8:1 for curves >30 degrees)
- Cobb angle measurement: Angle between endplates of most tilted vertebrae above and below apex
- Treatment by Cobb angle:
  - <25 degrees: Observation every 6 months
  - 25-40 degrees (skeletally immature): Bracing
  - >40-50 degrees: Surgical consideration (posterior spinal fusion)
- Risser sign: Iliac apophysis ossification (0-5) indicates skeletal maturity and remaining growth
- Adams forward bend test: Screening test revealing rib hump or lumbar prominence

**Spondylolisthesis:**

*Types (Wiltse Classification):*
- Type I (Dysplastic): Congenital facet abnormality
- Type II (Isthmic): Pars interarticularis defect (spondylolysis); most common at L5-S1
- Type III (Degenerative): Facet arthropathy; most common at L4-L5
- Type IV (Traumatic): Acute fracture of posterior elements
- Type V (Pathologic): Bone disease weakening posterior elements

*Meyerding Grading (% of slip):*
- Grade I: 0-25%; Grade II: 25-50%; Grade III: 50-75%; Grade IV: 75-100%; Grade V (Spondyloptosis): >100%

*Scotty Dog Sign:* On oblique lumbar X-ray, a break in the neck of the scotty dog represents a pars defect (spondylolysis)

**Red Flags Requiring Urgent Evaluation:**
- Cauda equina syndrome: Saddle anesthesia, urinary retention, bilateral leg symptoms
- Progressive neurological deficit
- Bowel or bladder dysfunction
- History of cancer with new back pain (metastatic disease)
- Fever with back pain (infection)
- Significant trauma (fracture)`,
      keyTerms: [
        { term: 'nucleus pulposus', definition: 'Gel-like center of the intervertebral disc that provides cushioning; this is what herniates through the annulus fibrosus' },
        { term: 'annulus fibrosus', definition: 'Tough outer ring of the intervertebral disc made of concentric layers of collagen fibers' },
        { term: 'neurogenic claudication', definition: 'Leg pain and weakness with walking caused by spinal stenosis; improves with bending forward (flexion); worsened by standing and extension' },
        { term: 'cauda equina', definition: 'Bundle of nerve roots below the L1-L2 level (where spinal cord ends); compression is a surgical emergency', pronunciation: 'KAW-dah eh-KWHY-nah' },
        { term: 'Cobb angle', definition: 'Standard measurement of scoliosis severity: angle between endplates of most tilted vertebrae above and below the curve apex' },
        { term: 'spondylolysis', definition: 'Defect (stress fracture) in the pars interarticularis of a vertebra; may lead to spondylolisthesis if bilateral', pronunciation: 'spon-dih-LOL-ih-sis' },
        { term: 'Risser sign', definition: 'Radiographic measure of skeletal maturity based on iliac apophysis ossification (grade 0-5); used to predict growth remaining in scoliosis management' },
        { term: 'radiculopathy', definition: 'Nerve root dysfunction causing pain, numbness, or weakness in the distribution of a specific nerve root' },
      ],
      analogies: [
        'The nucleus pulposus and annulus fibrosus are like a jelly donut - the gel center (nucleus) is surrounded by the firm outer ring (annulus). A herniation is the jelly squeezing out.',
        'Neurogenic claudication is like a garden hose getting kinked when you extend your back - the nerves get pinched. Bending forward unkinks the hose.',
        'The scotty dog on oblique X-ray: the pars interarticularis is the dog\'s neck. A collar on the dog (break in the neck) means spondylolysis.',
      ],
      examples: [
        'A patient with L4-L5 disc herniation compressing the L5 nerve root will have difficulty walking on their heels (dorsiflexion weakness) and numbness on the top of the foot.',
        'A patient with vascular claudication from peripheral arterial disease will have diminished pedal pulses, while a patient with neurogenic claudication will have normal pulses.',
        'A 14-year-old female gymnast with low back pain and an oblique X-ray showing a scotty dog with a collar at L5 has isthmic spondylolysis.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Spine disorders involve complex interactions between degenerative, mechanical, and neurological processes. Dermatome and myotome patterns guide clinical localization, while advanced imaging and electrodiagnostic studies confirm diagnosis.',
      explanation: `Comprehensive spine disorder evaluation requires integration of clinical anatomy, pathophysiology, and diagnostic modalities.

**Disc Herniation - Advanced Pathophysiology:**

*Disc Degeneration Cascade (Kirkaldy-Willis):*
1. Dysfunction phase: Circumferential tears in annulus, facet synovitis
2. Instability phase: Internal disc disruption, facet capsule laxity, segmental hypermobility
3. Stabilization phase: Fibrosis, osteophyte formation, autofusion

*Chemical vs. Mechanical Radiculopathy:*
- Mechanical compression alone is insufficient to cause pain in healthy nerves
- Nucleus pulposus contains phospholipase A2, TNF-alpha, IL-1, IL-6, nitric oxide
- These inflammatory mediators sensitize nerve roots (chemical radiculitis)
- Compressed nerve roots develop intraneural edema, demyelination, and Wallerian degeneration
- This explains why some patients with large herniations are asymptomatic while others with small herniations have severe pain

*Natural History:*
- 90% of lumbar disc herniations improve without surgery within 6-12 weeks
- Sequestered fragments may resorb through macrophage-mediated phagocytosis (neovascularization and inflammatory response)
- SPORT trial: Surgery provides faster improvement at 3 months but similar outcomes at 2-4 years for non-emergent herniations

**Dermatome Map (Key Clinical Landmarks):**
- C4: Cape-like distribution over shoulders
- C5: Lateral arm (regimental badge area)
- C6: Lateral forearm, thumb, index finger
- C7: Middle finger
- C8: Ring and little finger, medial forearm
- T1: Medial arm
- T4: Nipple line
- T10: Umbilicus
- L1: Inguinal region
- L2: Anterior thigh
- L3: Medial knee
- L4: Medial leg, medial malleolus
- L5: Lateral leg, dorsum of foot, great toe
- S1: Lateral foot, sole, posterior calf
- S2-S4: Perianal region (saddle area)

**Myotome Map (Key Motor Testing):**
- C5: Deltoid (shoulder abduction), biceps (elbow flexion)
- C6: Wrist extensors (ECR), brachioradialis
- C7: Triceps (elbow extension), wrist flexors, finger extensors
- C8: Finger flexors (FDP), hand intrinsics
- T1: Interossei (finger abduction)
- L2: Iliopsoas (hip flexion)
- L3: Quadriceps (knee extension)
- L4: Tibialis anterior (ankle dorsiflexion)
- L5: Extensor hallucis longus (great toe extension), gluteus medius (hip abduction)
- S1: Gastrocnemius/soleus (ankle plantarflexion), gluteus maximus (hip extension)
- S2-S4: Bladder and bowel sphincters

**Reflex Testing:**
- C5-C6: Biceps reflex
- C6: Brachioradialis reflex
- C7: Triceps reflex
- L4: Patellar reflex
- S1: Achilles reflex
- Upper motor neuron signs: Hoffmann sign (cervical myelopathy), Babinski sign, clonus, hyperreflexia

**Spinal Stenosis - Advanced Concepts:**

*Cervical Myelopathy:*
- Compression of the spinal cord (not just nerve roots)
- Insidious onset: Hand clumsiness, gait instability, balance problems
- Exam findings: Hyperreflexia, Hoffmann sign, inverted radial reflex, Lhermitte sign, broad-based gait
- Nurick grading and modified JOA (mJOA) score for severity
- Surgical indication: Progressive myelopathy is an indication for surgery; natural history is stepwise deterioration
- Approaches: Anterior cervical discectomy and fusion (ACDF), cervical laminoplasty, posterior laminectomy and fusion

*Lumbar Stenosis:*
- Torg ratio (cervical): AP diameter / vertebral body width; <0.8 suggests congenital stenosis
- Cross-sectional area <100 mm2 at lumbar level suggests absolute stenosis
- Dynamic stenosis: Symptoms change with position due to ligamentum flavum buckling in extension
- Surgical options: Laminectomy +/- fusion, minimally invasive decompression, interspinous spacers

**Scoliosis - Advanced Assessment:**

*Lenke Classification (AIS):*
- Curve type (1-6): Based on which curves are structural vs. compensatory
- Lumbar modifier (A, B, C): Based on relationship of CSVL to lumbar apex
- Sagittal modifier (-, N, +): Based on thoracic kyphosis (hypo, normal, hyper)
- Guides surgical levels and approach (anterior vs. posterior)

*Curve Progression Risk Factors:*
- Skeletal immaturity (Risser 0-1)
- Female sex
- Large initial curve magnitude
- Double curve patterns (less cosmetic deformity but higher progression risk)
- Triradiate cartilage open (significant growth remaining)

*Surgical Principles:*
- Posterior spinal fusion with pedicle screw instrumentation (current standard)
- Vertebral body tethering: Growth modulation technique (FDA approved for immature patients with flexible curves 40-65 degrees)
- Anterior approach: Selective thoracic fusion (shorter fusion, but fewer advantages with modern posterior techniques)
- Goals: Halt progression, achieve coronal and sagittal balance, maximize unfused segments

**Spondylolisthesis - Advanced Concepts:**

*Isthmic vs. Degenerative:*
- Isthmic (Type II): Young patients, L5-S1 most common, pars defect
  - Bilateral pars defects allow forward slip
  - May be stress fracture from repetitive extension loading (gymnasts, football linemen)
  - Single-leg hyperextension test (stork test) reproduces pain
  - SPECT scan most sensitive for active pars stress reaction
- Degenerative (Type III): Older patients, L4-L5 most common, intact pars
  - Facet arthropathy and disc degeneration allow forward slip
  - Associated with spinal stenosis symptoms
  - Rarely progresses beyond Grade II due to intact posterior elements

*Cauda Equina Syndrome:*
- Compression of cauda equina nerve roots (below conus medullaris)
- Causes: Large central disc herniation, tumor, abscess, hematoma, severe stenosis
- Classic presentation: Bilateral leg pain/weakness, saddle anesthesia (S2-S4), urinary retention (overflow incontinence), decreased rectal tone
- Surgical EMERGENCY: Decompression within 24-48 hours to maximize recovery
- Post-void residual >100-200 mL suggests urinary retention
- MRI is imaging modality of choice; if unavailable, CT myelogram`,
      keyTerms: [
        { term: 'dermatome', definition: 'Area of skin innervated by a single spinal nerve root; used to localize the level of nerve root pathology based on sensory symptoms' },
        { term: 'myotome', definition: 'Group of muscles innervated by a single spinal nerve root; used to localize nerve root pathology based on weakness patterns' },
        { term: 'cervical myelopathy', definition: 'Spinal cord compression in the neck causing upper motor neuron signs: hyperreflexia, Hoffmann sign, gait instability, hand clumsiness' },
        { term: 'Hoffmann sign', definition: 'Involuntary flexion of thumb and index finger when the middle finger DIP is flicked; upper motor neuron sign suggesting cervical myelopathy' },
        { term: 'Kirkaldy-Willis cascade', definition: 'Three-phase model of disc degeneration: dysfunction, instability, and restabilization' },
        { term: 'Lenke classification', definition: 'Six-type classification system for adolescent idiopathic scoliosis incorporating curve type, lumbar modifier, and sagittal thoracic modifier to guide surgical planning' },
        { term: 'cauda equina syndrome', definition: 'Surgical emergency from compression of cauda equina roots: bilateral leg symptoms, saddle anesthesia, urinary retention, decreased rectal tone; requires urgent decompression' },
        { term: 'SPORT trial', definition: 'Spine Patient Outcomes Research Trial; landmark study showing surgery provides faster relief for disc herniation but similar long-term outcomes compared to conservative care for non-emergent cases' },
        { term: 'chemical radiculitis', definition: 'Nerve root inflammation caused by inflammatory mediators (TNF-alpha, PLA2, IL-1) from nucleus pulposus, distinct from pure mechanical compression' },
      ],
      clinicalNotes: 'Cauda equina syndrome is a surgical emergency with a narrow window: decompression within 24-48 hours provides the best chance of neurological recovery, particularly bladder function. When evaluating any patient with back pain, ALWAYS ask about urinary retention, saddle numbness, and bowel dysfunction. Post-void residual measurement is an objective screening tool. For cervical myelopathy: flexion-extension cervical radiographs should be obtained before intubation for any surgery. The natural history is stepwise neurological deterioration - surgical decompression should not be delayed once progressive myelopathy is confirmed.',
    },

    4: {
      level: 4,
      summary:
        'Advanced spine disorder management requires understanding of spinal biomechanics, surgical decision-making algorithms, motion preservation strategies, and biologics. Segmental instability, sagittal balance, and adjacent segment disease drive contemporary treatment paradigms.',
      explanation: `Graduate-level spine management integrates biomechanical principles with clinical decision-making.

**Spinal Biomechanics:**

*Functional Spinal Unit (FSU):*
- Two adjacent vertebrae, the intervening disc, and associated ligaments
- Three-column concept (Denis):
  - Anterior column: Anterior longitudinal ligament (ALL), anterior annulus, anterior 2/3 of vertebral body
  - Middle column: Posterior 1/3 of vertebral body, posterior annulus, posterior longitudinal ligament (PLL)
  - Posterior column: Pedicles, facets, laminae, spinous processes, posterior ligament complex
  - Two-column disruption = unstable fracture
- Instantaneous axis of rotation (IAR): Changes with degeneration, affecting load distribution

*Sagittal Balance:*
- Pelvic incidence (PI) = pelvic tilt (PT) + sacral slope (SS) (this is a fixed relationship)
- PI determines ideal lumbar lordosis (LL): PI-LL mismatch >10 degrees correlates with disability
- Sagittal vertical axis (SVA): C7 plumb line relative to S1; positive SVA >5 cm = sagittal imbalance
- T1 pelvic angle (TPA) >20 degrees correlates with poor outcomes
- Compensatory mechanisms for sagittal imbalance: Pelvic retroversion (increased PT), knee flexion, ankle dorsiflexion
- Restoring sagittal balance is the most important predictor of outcomes in adult deformity surgery

*Adjacent Segment Disease (ASD):*
- Accelerated degeneration at levels above/below a spinal fusion
- Radiographic ASD: 25-30% at 10 years; symptomatic ASD: 8-12% at 10 years
- Biomechanical factors: Increased stress at adjacent levels, altered kinematics
- Risk factors: Pre-existing degeneration, rigid constructs, sagittal imbalance, longer fusions
- This has driven interest in motion-preservation technologies

**Disc Herniation - Advanced Surgical Options:**

*Microdiscectomy:*
- Gold standard for surgical treatment of lumbar disc herniation
- Success rate: 85-95% for radiculopathy relief
- Recurrence rate: 5-15% at 5-10 years
- Technique: Small incision, tubular retractor, microscope or loupe magnification
- Preserve as much disc as possible (aggressive disc removal increases recurrence of pain from disc space collapse but may decrease recurrence of herniation)

*Cervical Disc Herniation Surgery:*
- ACDF (Anterior Cervical Discectomy and Fusion): Gold standard
  - Removes disc, decompresses nerve root and cord, fuses segment
  - Allograft or cage with plate fixation
  - Risk: Recurrent laryngeal nerve injury (hoarseness), dysphagia, adjacent segment disease
- Cervical disc replacement (CDR): Motion-preserving alternative
  - FDA-approved devices: Prestige, ProDisc-C, Mobi-C, others
  - 7-10 year data show lower reoperation rates vs. ACDF at adjacent levels
  - Contraindications: Significant facet arthropathy, instability, ossification of PLL

**Spinal Stenosis - Advanced Surgical Decision-Making:**

*Evidence-Based Indications:*
- Lumbar stenosis: SPORT trial showed significant benefit of surgery at 4 years for patients with neurogenic claudication
- Degenerative spondylolisthesis with stenosis: Fusion + decompression superior to decompression alone (SPORT)
- Stenosis without spondylolisthesis: Decompression alone may be adequate (SSSS trial: no benefit of fusion added to decompression)
- Mild myelopathy: Controversial timing; moderate-severe: surgical decompression recommended

*Minimally Invasive Approaches:*
- Tubular decompression: Microdecompression through small tubular retractor
- Endoscopic spine surgery: Full-endoscopic discectomy and decompression
- Interspinous process devices (Superion): Indirect decompression for mild-moderate stenosis
- Lateral interbody fusion (LLIF/OLIF): Indirect decompression via disc height restoration
- Benefits: Less tissue disruption, faster recovery, less blood loss
- Limitations: Learning curve, limited visualization, radiation exposure

**Scoliosis - Advanced Surgical Concepts:**

*Adult Spinal Deformity (ASD):*
- Prevalence: 60% of adults >60 have some degree of scoliosis
- SRS-Schwab classification:
  - Coronal curve type
  - Sagittal modifiers: PI-LL mismatch, SVA, pelvic tilt
  - Sagittal modifiers more predictive of disability than coronal deformity
- Surgical planning: Correct sagittal balance first; coronal correction follows
- Smith-Petersen osteotomy (SPO): 10 degrees correction per level
- Pedicle subtraction osteotomy (PSO): 30-40 degrees correction at single level
- Vertebral column resection (VCR): Most powerful but highest risk (>60 degrees correction)

*Complications of Deformity Surgery:*
- Proximal junctional kyphosis (PJK): 20-40% incidence after long fusions
  - Kyphotic failure at the level above the fusion construct
  - Risk factors: Age, osteoporosis, disruption of posterior ligament complex, overcorrection of SVA
- Rod fracture: 5-15%; more common in pedicle subtraction osteotomy
- Neurological injury: 1-2% with intraoperative monitoring (MEP, SSEP)
- Medical complications: DVT/PE, pneumonia, ileus, wound infection

**Spondylolisthesis - Surgical Considerations:**

*Fusion vs. Decompression:*
- Isthmic spondylolisthesis: Fusion generally recommended (instability from pars defect)
  - Direct pars repair: Option in young patients with low-grade slip and minimal disc degeneration (Buck technique with pars screw, Scott wiring)
- Degenerative spondylolisthesis with stenosis: Decompression + fusion superior to decompression alone
- High-grade spondylolisthesis (Grade III-V):
  - In situ fusion vs. reduction debated
  - Reduction risks L5 root injury (stretched over sacral ala)
  - Partial reduction with restoration of sagittal balance preferred

*Interbody Fusion Techniques:*
- PLIF (Posterior Lumbar Interbody Fusion): Bilateral posterior approach
- TLIF (Transforaminal Lumbar Interbody Fusion): Unilateral approach, less nerve root retraction
- ALIF (Anterior Lumbar Interbody Fusion): Anterior approach, best disc height restoration
- LLIF/OLIF (Lateral/Oblique): Lateral approach, indirect decompression via disc height
- Each approach has specific advantages and complication profiles

**Biologics in Spine Surgery:**
- BMP-2 (rhBMP-2, INFUSE): FDA-approved for single-level ALIF with specific cage
  - Off-label use widespread but controversial
  - Complications in cervical spine: Airway swelling, dysphagia, heterotopic ossification
  - Cancer risk controversy: Meta-analyses suggest possible increased risk (debated)
- Demineralized bone matrix (DBM): Variably osteoinductive
- Iliac crest autograft: Gold standard but donor site morbidity
- Cellular bone matrices: Contain viable MSCs + growth factors (e.g., Osteocel, Trinity)
- Synthetic bone grafts: Calcium phosphate, hydroxyapatite scaffolds`,
      keyTerms: [
        { term: 'sagittal balance', definition: 'Alignment of the spine in the sagittal plane; C7 plumb line should fall near the posterior S1 endplate; positive SVA >5 cm causes increased disability and energy expenditure' },
        { term: 'pelvic incidence', definition: 'Fixed anatomical parameter (PI = PT + SS) that determines ideal lumbar lordosis; PI-LL mismatch >10 degrees correlates with poor clinical outcomes' },
        { term: 'adjacent segment disease', definition: 'Accelerated degeneration at spinal levels adjacent to a fusion; biomechanically driven by increased stress transfer; symptomatic in 8-12% at 10 years' },
        { term: 'cervical disc replacement', definition: 'Motion-preserving alternative to ACDF; artificial disc maintains segmental motion at treated level; may reduce adjacent segment disease risk' },
        { term: 'pedicle subtraction osteotomy', definition: 'Three-column closing wedge osteotomy through the pedicle removing posterior elements and wedge of vertebral body; provides 30-40 degrees of lordosis correction at a single level' },
        { term: 'proximal junctional kyphosis', definition: 'Pathological kyphosis developing above the upper instrumented vertebra of a spinal fusion; 20-40% incidence; major complication of adult deformity surgery' },
        { term: 'Denis three-column model', definition: 'Spinal stability model dividing vertebrae into anterior, middle, and posterior columns; disruption of two or more columns indicates instability' },
        { term: 'TLIF', definition: 'Transforaminal Lumbar Interbody Fusion; unilateral posterior approach for interbody fusion; less nerve root retraction than PLIF while achieving circumferential fusion' },
      ],
      clinicalNotes: 'Sagittal balance is the single most important radiographic parameter correlated with patient-reported outcomes in spine surgery. A PI-LL mismatch >10 degrees must be addressed surgically - failure to restore lordosis leads to poor outcomes and compensatory mechanisms (pelvic retroversion, knee flexion). For cervical disc replacement: strict contraindications include significant facet arthropathy, OPLL, osteoporosis, and instability. The SSSS trial (Swedish Spinal Stenosis Study) demonstrated that adding fusion to decompression for stenosis WITHOUT spondylolisthesis did not improve outcomes - this changed practice regarding routine fusion. When performing lumbar decompression, always assess for concomitant instability (spondylolisthesis, scoliosis, facet incompetence) which would warrant concurrent fusion.',
    },

    5: {
      level: 5,
      summary:
        'State-of-the-art spine care integrates navigation technology, robotic surgery, motion preservation, minimally invasive techniques, and regenerative strategies. Evidence-based protocols guide management of complex deformity, revision surgery, and emerging biologic therapies.',
      explanation: `Expert-level spine management addresses complex clinical scenarios and cutting-edge technologies.

**Surgical Navigation and Robotics:**

*Image-Guided Navigation:*
- CT-based navigation (O-arm, Airo): Intraoperative 3D imaging with real-time tracked instruments
- Pedicle screw accuracy: 95-99% with navigation vs. 85-92% freehand
- Fluoroscopy-based navigation: 2D image registration; less accurate than CT-based
- Augmented reality: Heads-up display overlaying navigation data on surgical field (early adoption)

*Robotic-Assisted Spine Surgery:*
- Systems: Mazor X Stealth (Medtronic), ExcelsiusGPS (Globus Medical), ROSA Spine (Zimmer Biomet)
- Workflow: Preoperative CT planning, intraoperative registration, robotic arm guides trajectory
- Evidence: Meta-analyses show improved pedicle screw accuracy, reduced radiation exposure
- Particularly valuable for: Deformity surgery, revision cases, minimally invasive pedicle screw placement
- Limitations: Setup time, cost, learning curve, registration errors in obese patients

*Endoscopic Spine Surgery:*
- Uniportal endoscopic discectomy: Single 7-8 mm portal with full endoscopic visualization
- Transforaminal vs. interlaminar approach
- Uniportal endoscopic lumbar decompression for stenosis
- Advantages: Outpatient, local/spinal anesthesia, minimal tissue disruption
- Learning curve: 50-100 cases for proficiency; steep but rewarding

**Motion Preservation - Current Evidence:**

*Cervical Disc Replacement (CDR):*
- FDA IDE trials with 7-10 year data:
  - Prestige LP: Superior to ACDF for overall success at 7 years
  - ProDisc-C: Non-inferior to ACDF at 7 years
  - Mobi-C (two-level): Superior to two-level ACDF at 7 years
- Adjacent segment reoperation: Consistently lower with CDR (3-4% vs. 8-12% for ACDF at 7 years)
- Heterotopic ossification: Present in 30-70% but rarely symptomatic or motion-limiting
- Patient selection is critical: No significant facet arthropathy, no OPLL, no instability

*Lumbar Total Disc Replacement:*
- FDA-approved devices: ProDisc-L, activL
- Limited adoption due to: Vascular approach risks (retroperitoneal), revision complexity, narrower indications
- Best indication: Young active patient with single-level discogenic pain, no facet arthropathy, no stenosis
- 5-year data: Non-inferior to fusion for selected patients

*Posterior Dynamic Stabilization:*
- Pedicle screw-based dynamic rods (Dynesys, DSS)
- Concept: Off-load disc while preserving motion
- Mixed results: Some progression to fusion, device failures
- Not widely adopted; clinical benefit over fusion not established

**Adult Spinal Deformity - Comprehensive Management:**

*Preoperative Optimization:*
- Frailty assessment: Modified Frailty Index, ACS-NSQIP risk calculator
- Nutritional optimization: Albumin >3.5, prealbumin >15
- Bone density: DEXA scan; consider anabolic therapy (teriparatide) pre-operatively for osteoporotic patients to improve screw fixation
- Diabetes control: HbA1c <8% reduces infection risk
- Smoking cessation: Minimum 4-6 weeks preoperatively for fusion healing

*Surgical Planning Algorithms:*
- Schwab-SRS age-adjusted alignment targets:
  - SVA: <40 mm (age 45-64), <47 mm (65-74), <94 mm (>75)
  - PT: <20 degrees (young), <25 degrees (elderly)
  - PI-LL: <10 degrees
- Global alignment and proportion (GAP) score: Predicts mechanical complications based on proportional sagittal parameters
- Roussouly classification: Four sagittal phenotypes based on pelvic incidence; determines ideal lordosis distribution

*Three-Column Osteotomies:*
- Ponte/SPO: 5-10 degrees per level; posterior column only
- PSO: 30-40 degrees; three-column closing wedge; high complication rate (30-50%)
- Vertebral column resection (VCR): Complete vertebral removal; 40-60+ degrees correction; highest risk
- Asymmetric PSO (aPSO): Corrects both sagittal and coronal deformity
- Complication rates for three-column osteotomies:
  - Neurological deficit: 5-10%
  - Rod fracture: 10-25%
  - PJK/PJF: 20-40%

**Spinal Cord Injury and Monitoring:**

*Intraoperative Neuromonitoring (IONM):*
- Somatosensory evoked potentials (SSEPs): Monitor dorsal column function (proprioception, vibration)
- Motor evoked potentials (MEPs): Monitor corticospinal tract (motor function) - more sensitive for detecting motor deficits
- Electromyography (EMG): Triggered (screw placement accuracy) and free-running (nerve irritation)
- SSEP + MEP combined: >99% negative predictive value for postoperative neurological deficit
- Wake-up test: Backup when electronic monitoring is unreliable

*Significant Change Criteria:*
- SSEPs: >50% amplitude decrease or >10% latency increase
- MEPs: Complete loss or >80% amplitude decrease
- Actions: Notify surgeon, increase MAP, reverse recent surgical maneuver, consider wake-up test

**Regenerative Spine Medicine:**

*Disc Regeneration:*
- Intradiscal stem cell injection: Phase II trials for discogenic pain (bone marrow-derived MSCs)
- Gene therapy: Injection of growth factor genes (TGF-beta, GDF-5) into degenerative discs (preclinical)
- Tissue-engineered disc: Composite scaffolds with annulus and nucleus regions (preclinical)
- GelStix/hydrogel nucleus replacement: Restoring disc height and biomechanics after discectomy (early clinical)

*Spinal Fusion Enhancement:*
- Electrical stimulation: DC current (implanted) or PEMF (external); adjunct for high-risk fusion patients
- Concentrated bone marrow aspirate (cBMA): Point-of-care MSC concentration; avoids ICBG morbidity
- Platelet-rich plasma: Variable evidence; may enhance cellular bone matrix performance
- 3D-printed titanium interbody cages: Porous architecture promotes bone ingrowth; patient-specific options for complex reconstruction
- Bioabsorbable interbody devices: PEEK alternatives; resorbable polymers (early adoption)

**Spine Infection and Tumor Management:**

*Spinal Infections:*
- Vertebral osteomyelitis/discitis: S. aureus most common; MRI with contrast is diagnostic
- Epidural abscess: Surgical emergency if neurological deficit or failure of antibiotics
- Tuberculosis (Pott disease): Anterior vertebral body involvement, psoas abscess, gibbus deformity
- Postoperative infection: 1-5%; deep infection requires irrigation, debridement, +/- hardware retention

*Metastatic Spine Disease:*
- Most common primary tumors: Lung, breast, prostate, renal, thyroid
- SINS (Spine Instability Neoplastic Score): Guides surgical vs. non-surgical management
- Tokuhashi score: Predicts survival to guide extent of surgery
- Separation surgery + stereotactic radiosurgery: Modern paradigm for epidural compression
- Minimal access decompression + cement augmentation for pathologic fractures`,
      keyTerms: [
        { term: 'robotic-assisted spine surgery', definition: 'Computer-guided systems using preoperative CT planning and intraoperative robotic arm guidance for precise pedicle screw placement; improves accuracy and reduces radiation' },
        { term: 'GAP score', definition: 'Global Alignment and Proportion score; comprehensive sagittal alignment assessment predicting mechanical complications after adult deformity surgery based on proportional parameters' },
        { term: 'intraoperative neuromonitoring', definition: 'Real-time monitoring of spinal cord and nerve root function using SSEPs, MEPs, and EMG during spine surgery; >99% negative predictive value when combined' },
        { term: 'SINS score', definition: 'Spine Instability Neoplastic Score; six-component scoring system determining stability of metastatic spine lesions to guide surgical versus radiation management' },
        { term: 'vertebral column resection', definition: 'Most aggressive spinal osteotomy involving complete vertebral removal; provides >60 degrees correction for severe rigid deformities; highest complication rate among osteotomies' },
        { term: 'endoscopic spine surgery', definition: 'Minimally invasive technique using single 7-8mm portal with full endoscopic visualization for discectomy and decompression; enables outpatient surgery under local anesthesia' },
        { term: 'separation surgery', definition: 'Modern paradigm for metastatic epidural spinal cord compression: surgical decompression creates separation between tumor and cord, followed by stereotactic radiosurgery for tumor control' },
        { term: 'disc regeneration', definition: 'Emerging field using intradiscal stem cell injection, gene therapy, or tissue-engineered constructs to restore degenerated disc biology rather than replacing or fusing the segment' },
      ],
      clinicalNotes: 'Key practice points for the spine surgeon: (1) The GAP score outperforms individual parameters (SVA, PT, PI-LL) in predicting mechanical complications after deformity surgery - incorporate it into preoperative planning. (2) Age-adjusted alignment targets (Lafage 2017) are essential - an SVA of 60mm may be acceptable in a 75-year-old but unacceptable in a 50-year-old. (3) For endoscopic spine surgery: careful patient selection (contained herniations, single-level stenosis) during the learning curve is critical; the learning curve is real (50-100 cases) but conversion rates drop significantly with experience. (4) The separation surgery paradigm for metastatic disease has shifted treatment from extensive en bloc resection to targeted decompression followed by stereotactic radiosurgery - this reduces surgical morbidity while maintaining local tumor control. (5) For spinal cord monitoring: a combined SSEP + MEP protocol is the current standard; MEPs are more sensitive for motor deficits but SSEPs detect dorsal column ischemia. Both should be used in all cases with spinal cord at risk. (6) Prehabilitation and frailty screening (mFI, ACS-NSQIP) for adult deformity patients significantly reduce complication rates - this is as important as surgical technique.',
    },
  },

  media: [
    {
      id: 'spine-anatomy-levels',
      type: 'diagram',
      filename: 'spine-anatomy-levels.svg',
      title: 'Spinal Column Anatomy',
      description: 'Complete spinal column showing cervical, thoracic, lumbar, sacral, and coccygeal regions with disc anatomy',
    },
    {
      id: 'dermatome-map',
      type: 'diagram',
      filename: 'dermatome-map-complete.svg',
      title: 'Dermatome Map',
      description: 'Complete anterior and posterior dermatome map with key clinical landmarks',
    },
    {
      id: 'disc-herniation-types',
      type: 'diagram',
      filename: 'disc-herniation-directions.svg',
      title: 'Disc Herniation Types',
      description: 'Axial and sagittal views of posterolateral, foraminal, and central disc herniations with affected nerve roots',
    },
    {
      id: 'scoliosis-cobb-angle',
      type: 'diagram',
      filename: 'cobb-angle-measurement.svg',
      title: 'Cobb Angle Measurement',
      description: 'Technique for measuring Cobb angle on standing AP radiograph',
    },
    {
      id: 'sagittal-balance-parameters',
      type: 'diagram',
      filename: 'sagittal-balance-parameters.svg',
      title: 'Sagittal Balance Parameters',
      description: 'Pelvic incidence, pelvic tilt, sacral slope, lumbar lordosis, and SVA measurements',
    },
  ],
  citations: [
    {
      id: 'spine-herkowitz',
      type: 'textbook',
      title: 'Rothman-Simeone and Herkowitz\'s The Spine',
      authors: ['Herkowitz, H.N.', 'Garfin, S.R.', 'Eismont, F.J.'],
      source: 'Elsevier',
      chapter: 'Disc Degeneration, Spinal Stenosis, and Deformity',
      license: 'Educational Reference',
    },
    {
      id: 'spine-sport-trial',
      type: 'article',
      title: 'Surgical vs Nonoperative Treatment for Lumbar Disk Herniation: The SPORT Trial',
      authors: ['Weinstein, J.N.', 'Tosteson, T.D.', 'Lurie, J.D.'],
      source: 'JAMA',
      license: 'Educational Reference',
    },
    {
      id: 'spine-lenke-classification',
      type: 'article',
      title: 'Lenke Classification System of Adolescent Idiopathic Scoliosis',
      authors: ['Lenke, L.G.', 'Betz, R.R.', 'Harms, J.'],
      source: 'Journal of Bone and Joint Surgery',
      license: 'Educational Reference',
    },
    {
      id: 'spine-sagittal-alignment',
      type: 'article',
      title: 'Age-Adjusted Alignment Goals for Adult Spinal Deformity',
      authors: ['Lafage, V.', 'Schwab, F.', 'Patel, A.'],
      source: 'Spine Deformity',
      license: 'Educational Reference',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-fractures-medical', targetType: 'topic', relationship: 'related', label: 'Fractures' },
    { targetId: 'ortho-joint-disorders-medical', targetType: 'topic', relationship: 'related', label: 'Joint Disorders' },
    { targetId: 'ortho-patient-herniated-disc', targetType: 'condition', relationship: 'related', label: 'Herniated Disc Patient Education' },
    { targetId: 'ortho-patient-spinal-stenosis', targetType: 'condition', relationship: 'related', label: 'Spinal Stenosis Patient Education' },
    { targetId: 'ortho-patient-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain Patient Education' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['orthopedics', 'spine', 'neurosurgery', 'deformity', 'degenerative disease'],
    keywords: [
      'disc herniation', 'spinal stenosis', 'scoliosis', 'spondylolisthesis',
      'dermatome', 'myotome', 'radiculopathy', 'myelopathy', 'cauda equina',
      'sagittal balance', 'spinal fusion', 'disc replacement', 'deformity correction',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'neurology', 'orthopedics'],
    },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spineDisordersContent;
