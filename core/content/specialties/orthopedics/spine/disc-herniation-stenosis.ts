import { EducationalContent } from '../../../types';

export const discHerniationStenosis: EducationalContent = {
  id: 'ortho-disc-herniation-stenosis',
  type: 'condition',
  name: 'Disc Herniation and Spinal Stenosis',
  nameEs: 'Hernia de disco y estenosis espinal',
  alternateNames: ['Slipped disc', 'Ruptured disc', 'Lumbar stenosis', 'Neurogenic claudication'],

  levels: {
    1: {
      level: 1,
      summary: 'A herniated disc happens when a cushion between spine bones pushes out and presses on nerves. Spinal stenosis is a narrowing of the spinal canal that squeezes the nerves inside.',
      explanation: `**Herniated Disc:**
Between each bone in your spine is a disc that acts as a cushion. Think of it like a jelly donut — if you squeeze it, the jelly (soft center) can push out through the outer shell and press on nearby nerves.

**Symptoms:**
- Pain shooting down the leg (sciatica) or arm
- Numbness or tingling
- Weakness in a leg or arm
- Worse with sitting, bending, or coughing

**Spinal Stenosis:**
As we age, the spinal canal (the tunnel that holds the spinal cord and nerves) can become narrow. This squeezes the nerves.

**Symptoms:**
- Leg pain or heaviness when walking
- Better when sitting or bending forward (like leaning on a shopping cart)
- Back stiffness
- Balance problems

**Good News:**
- 90% of herniated discs improve without surgery in 6-12 weeks
- Walking, swimming, and gentle stretching help both conditions
- Surgery is an option when other treatments fail

**When to Seek Emergency Care:**
- Loss of bladder or bowel control
- Progressive weakness in both legs
- Numbness in the groin area`,
      keyTerms: [
        { term: 'herniated disc', definition: 'When the soft center of a spinal disc pushes out through the outer layer' },
        { term: 'stenosis', definition: 'Narrowing of the spinal canal that squeezes the nerves' },
        { term: 'sciatica', definition: 'Pain that travels from the lower back down the leg, caused by nerve irritation' },
      ],
      analogies: ['A herniated disc is like a jelly donut being squeezed until the filling leaks out.', 'Spinal stenosis is like a garden hose being pinched — the flow (nerve signals) is restricted.'],
      patientCounselingPoints: ['Most herniated discs improve without surgery.', 'Walking is one of the best exercises for both conditions.', 'Seek emergency care if you lose bladder or bowel control.'],
    },
    2: {
      level: 2,
      summary: 'Lumbar disc herniation causes radiculopathy by compressing nerve roots. Spinal stenosis causes neurogenic claudication from narrowing of the central canal, lateral recesses, or foramina.',
      explanation: `**Disc Herniation:**
The intervertebral disc has a soft nucleus pulposus surrounded by a tough annulus fibrosus. Herniation occurs when the nucleus pushes through the annulus and compresses an adjacent nerve root. Most common levels: L4-L5 (compresses L5 root) and L5-S1 (compresses S1 root).

**Herniation Types:**
- Protrusion: disc bulges but annulus intact
- Extrusion: nucleus pushes through annulus but still connected
- Sequestration: free fragment separates completely

**Nerve Root Findings:**
| Root | Pain Pattern | Weakness | Reflex |
|------|-------------|----------|--------|
| L4 | Anterior thigh, medial leg | Knee extension (quad) | Patellar |
| L5 | Lateral leg, dorsum of foot | Great toe dorsiflexion | None reliable |
| S1 | Posterior calf, lateral foot | Plantarflexion, toe walk | Achilles |

**Spinal Stenosis:**
Degenerative narrowing from disc bulging, facet hypertrophy, ligamentum flavum thickening, and spondylolisthesis. Key symptom is neurogenic claudication: bilateral leg pain/heaviness with walking, relieved by sitting or leaning forward.

**Distinguishing from Vascular Claudication:**
- Neurogenic: worse with walking AND standing, better with sitting/bending forward, bicycle test normal
- Vascular: worse with walking only, better with standing still, absent pulses, abnormal ABI

**Treatment:**
Conservative (both): Physical therapy, NSAIDs, epidural steroid injections. Surgery for herniated disc: microdiscectomy. Surgery for stenosis: laminectomy with or without fusion.`,
      keyTerms: [
        { term: 'radiculopathy', definition: 'Pain, numbness, or weakness from compression or irritation of a nerve root' },
        { term: 'neurogenic claudication', definition: 'Leg pain and heaviness with walking caused by spinal stenosis, relieved by sitting or leaning forward' },
        { term: 'microdiscectomy', definition: 'Minimally invasive surgery to remove the herniated portion of a disc pressing on a nerve' },
        { term: 'spondylolisthesis', definition: 'Slipping of one vertebra forward over the one below it' },
      ],
    },
    3: {
      level: 3,
      summary: 'Advanced management of disc herniation and stenosis requires understanding of imaging interpretation, injection techniques, surgical indications, and evidence-based outcome prediction.',
      explanation: `**MRI Interpretation:**
Disc herniation: T2-weighted sagittal and axial images show disc material extending beyond the disc space. Differentiate from bulge (>50% circumference, diffuse vs. focal herniation). Nerve root compression best seen on axial cuts. Note: 30% of asymptomatic individuals have disc herniations on MRI — clinical correlation is essential.

**Epidural Steroid Injections (ESI):**
- Interlaminar: posterior approach, best for central stenosis and bilateral symptoms
- Transforaminal: target-specific nerve root sleeve, best for foraminal herniation/stenosis
- Caudal: through sacral hiatus, useful for post-surgical patients
Efficacy: 50-70% short-term relief (2-6 weeks), diminishing over time. Evidence supports transforaminal for radiculopathy, less robust for central stenosis.

**Surgical Decision-Making:**
Herniated disc: SPORT trial showed surgery (discectomy) provides faster relief than conservative treatment, but outcomes equalize by 4 years for most patients. Surgery clearly superior for patients with progressive neurological deficit or cauda equina syndrome.

Spinal stenosis: SPORT trial showed laminectomy provides sustained benefit over nonoperative treatment at 8 years for moderate-to-severe stenosis. Fusion added when instability or spondylolisthesis is present.

**Cauda Equina Syndrome:**
Surgical emergency. Compression of the cauda equina (nerve roots below the conus medullaris at L1-L2) causing: saddle anesthesia, urinary retention (most consistent finding), bowel incontinence, bilateral leg weakness. Emergency MRI and surgical decompression within 24-48 hours — delay worsens prognosis.

**Degenerative Spondylolisthesis:**
Most common at L4-L5. Graded by Meyerding (I: <25% slip, II: 25-50%, III: 50-75%, IV: >75%). Symptomatic: decompression alone vs. decompression + fusion. SLIP trial: decompression + fusion superior to decompression alone at 4 years for grade I degenerative spondylolisthesis with stenosis.`,
      keyTerms: [
        { term: 'SPORT trial', definition: 'Spine Patient Outcomes Research Trial — landmark RCT/observational study comparing surgical vs. conservative treatment for herniated disc and stenosis' },
        { term: 'cauda equina syndrome', definition: 'Surgical emergency from compression of nerve roots below the conus medullaris causing saddle anesthesia, urinary retention, and bilateral weakness' },
        { term: 'Meyerding classification', definition: 'Grading system for spondylolisthesis based on percentage of vertebral body slip' },
        { term: 'transforaminal ESI', definition: 'Epidural steroid injection targeting a specific nerve root through the neural foramen under fluoroscopic guidance' },
      ],
    },
    4: {
      level: 4,
      summary: 'Complex spinal pathology management includes multi-level decompression strategies, fusion vs. motion-preservation decisions, adjacent segment disease, and minimally invasive techniques.',
      explanation: `**Fusion vs. Motion Preservation:**
Lumbar fusion (PLIF, TLIF, ALIF, lateral interbody) eliminates motion at the treated segment but increases stress on adjacent levels (adjacent segment disease — 2-4% per year requiring surgery). Total disc replacement (TDR) preserves motion — FDA-approved for single-level lumbar (L3-S1) and cervical disease without facet arthropathy, instability, or spondylolisthesis. ProDisc-L and Mobi-C trials show non-inferiority to fusion at 5-7 years.

**Adjacent Segment Disease (ASD):**
Radiographic changes above or below a fusion develop in 50-100% of patients; 15-30% become symptomatic requiring revision. Risk factors: multi-level fusion, sagittal imbalance, pre-existing degeneration at adjacent levels, older age.

**Minimally Invasive Spine Surgery (MIS):**
- MIS tubular discectomy: smaller incision, less muscle damage, faster recovery
- MIS-TLIF: percutaneous pedicle screws with tubular interbody fusion
- Endoscopic spine surgery: full-endoscopic discectomy and decompression through 8mm working channel
- Advantages: reduced blood loss, shorter hospital stay, less postoperative pain
- Disadvantages: steeper learning curve, limited visualization for complex pathology

**Cervical Spine:**
Anterior cervical discectomy and fusion (ACDF) is the gold standard for cervical radiculopathy and myelopathy. Cervical disc replacement (Prestige, Mobi-C) preserves motion at treated level. Posterior approaches (laminoplasty, laminectomy + fusion) for multi-level myelopathy.

**Cervical Myelopathy:**
Progressive spinal cord compression causing gait imbalance, hand clumsiness, hyperreflexia, Hoffman sign, and Babinski sign. Surgical decompression recommended even for mild myelopathy — natural history is progressive deterioration. MRI T2 signal change within the cord (myelomalacia) indicates chronic injury and worse prognosis.

**Spinal Infections:**
Discitis/osteomyelitis: most commonly S. aureus. Present with severe back pain, fever, elevated ESR/CRP. MRI with gadolinium: T1 hypointense, T2 hyperintense disc and endplates with enhancement. CT-guided biopsy for culture before antibiotics (6-12 weeks IV). Epidural abscess requires emergency decompression if neurological deficit.`,
      keyTerms: [
        { term: 'adjacent segment disease', definition: 'Accelerated degeneration above or below a spinal fusion from increased mechanical stress' },
        { term: 'TLIF', definition: 'Transforaminal lumbar interbody fusion — posterior approach placing interbody cage through the foramen' },
        { term: 'cervical myelopathy', definition: 'Progressive spinal cord dysfunction from cervical canal compression causing gait, hand, and reflex abnormalities' },
        { term: 'Hoffman sign', definition: 'Upper motor neuron sign: flicking the middle finger nail causes reflexive thumb and index finger flexion' },
      ],
      clinicalNotes: 'Cervical myelopathy with progressive symptoms warrants surgical decompression regardless of severity — the natural history is stepwise deterioration with poor prognosis if delayed.',
    },
    5: {
      level: 5,
      summary: 'Professional-level spine management integrates evidence from landmark trials, sagittal balance principles, complex deformity correction, and emerging technologies in biologics and navigation.',
      explanation: `**Landmark Spine Evidence:**
- **SPORT (disc herniation):** At 8 years, surgical patients had greater improvement than non-operative, but crossover rates were high (43% non-op crossed to surgery).
- **SPORT (stenosis):** Laminectomy showed sustained superiority over nonoperative treatment at 8 years for moderate-severe stenosis.
- **SLIP trial:** Decompression + fusion superior to decompression alone for grade I degenerative spondylolisthesis with stenosis at 4 years.
- **FLEX trial:** Fusion did not improve outcomes compared to PT for non-radicular chronic low back pain and Modic changes.
- **N-FLEX (ongoing):** Evaluating fusion vs. non-operative for discogenic low back pain.

**Sagittal Balance:**
Pelvic incidence (PI) is a fixed anatomic parameter. Lumbar lordosis should match PI within 10 degrees (PI-LL mismatch). Sagittal vertical axis (SVA) <5cm from C7 plumb line to posterior S1 is acceptable. SVA >9.5cm correlates with severe disability. Pelvic tilt (PT) is a compensatory mechanism — PT >25 degrees indicates decompensation. These parameters guide surgical planning for deformity correction.

**Adult Spinal Deformity:**
Classification: SRS-Schwab system based on coronal curve, PI-LL mismatch, SVA, and PT. Surgical planning targets alignment restoration. Techniques: posterior column osteotomies (Ponte), pedicle subtraction osteotomy (PSO, 30-35 degrees correction), vertebral column resection (VCR, most powerful but highest complication rate). Complication rates for adult deformity surgery: 20-40%.

**Biologics for Spinal Fusion:**
- Autologous iliac crest bone graft (ICBG): gold standard but donor-site morbidity in 30%
- BMP-2 (INFUSE): FDA-approved for ALIF. Off-label use common but associated with complications (heterotopic ossification, radiculitis, potential oncologic concerns from high-dose use)
- Demineralized bone matrix (DBM): osteoconductive and variably osteoinductive
- Cellular bone allograft: contains viable osteoprogenitor cells, increasingly used

**Navigation and Robotics:**
Intraoperative CT navigation (O-arm + StealthStation) and robotic systems (Mazor, ROSA) improve pedicle screw placement accuracy to >98% (vs. 85-90% freehand). Reduce malposition-related revision rates. Radiation exposure considerations.

**Spinal Cord Monitoring:**
Intraoperative neuromonitoring (IONM): somatosensory evoked potentials (SSEPs) monitor dorsal columns, motor evoked potentials (MEPs) monitor corticospinal tracts, EMG monitors nerve roots. Alert criteria: >50% amplitude decrease in MEPs or >10% latency increase in SSEPs. False-negative rate <1% for detecting new neurological deficit.`,
      keyTerms: [
        { term: 'sagittal vertical axis', definition: 'Distance from C7 plumb line to posterior superior S1 corner — measure of global sagittal alignment' },
        { term: 'pelvic incidence', definition: 'Fixed anatomic parameter measuring the relationship between sacral endplate and femoral heads; determines required lumbar lordosis' },
        { term: 'pedicle subtraction osteotomy', definition: 'Powerful osteotomy removing posterior elements and vertebral body wedge to correct sagittal imbalance (30-35 degrees per level)' },
        { term: 'IONM', definition: 'Intraoperative neuromonitoring using SSEPs and MEPs to detect spinal cord and nerve root injury in real time' },
      ],
      clinicalNotes: 'In adult deformity surgery, PI-LL mismatch is the most important radiographic parameter to correct. Under-correction of sagittal alignment is the most common cause of persistent pain and functional limitation after deformity surgery.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-sport-disc', type: 'article', title: 'SPORT: Surgical vs. Nonoperative Treatment for Lumbar Disc Herniation', source: 'JAMA. 2006;296(20):2441-2450', license: 'Proprietary' },
    { id: 'cit-slip', type: 'article', title: 'SLIP Trial: Fusion vs. Decompression Alone for Degenerative Spondylolisthesis', source: 'N Engl J Med. 2016;374(15):1413-1423', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-scoliosis-deformity', targetType: 'condition', relationship: 'sibling', label: 'Scoliosis and Spinal Deformity' },
    { targetId: 'ortho-spinal-stenosis', targetType: 'condition', relationship: 'related', label: 'Spinal Stenosis (Database Entry)' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['orthopedics', 'spine', 'neurosurgery'],
    keywords: ['disc herniation', 'spinal stenosis', 'sciatica', 'laminectomy', 'fusion', 'cauda equina', 'myelopathy'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default discHerniationStenosis;
