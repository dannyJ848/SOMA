import { EducationalContent } from '../../types';

export const spinalSurgeryOverviewContent: EducationalContent = {
  id: 'ortho-patient-spinal-surgery-overview',
  type: 'concept',
  name: 'Spinal Surgery Overview',
  alternateNames: ['Back surgery', 'Spine surgery', 'Neck surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Spine surgery can help when there is pressure on nerves or instability causing pain, numbness, or weakness that has not improved with other treatments.',
      explanation: `Most spine problems do NOT need surgery. But when other treatments haven't worked and you have significant symptoms, spine surgery can be very helpful.

**Types of Spine Surgery:**

*Decompression:*
- Removes bone or tissue pressing on nerves
- Relieves leg or arm pain, numbness, weakness
- Examples: Laminectomy, discectomy

*Fusion:*
- Connects two or more vertebrae together
- Stops painful motion between bones
- Used for instability or after decompression

*Disc Replacement:*
- Artificial disc replaces damaged disc
- Preserves motion at that level
- Alternative to fusion in some cases

**What Surgery Can Help:**

*Good for:*
- Herniated disc pressing on nerve (leg pain, arm pain)
- Spinal stenosis (leg tiredness, pain with walking)
- Unstable spine (slipping vertebrae)
- Some spinal deformities

*Less successful for:*
- Back pain alone without nerve symptoms
- Mild symptoms that don't limit your life
- Pain without a clear cause on imaging

**Before Surgery:**
- Complete medical evaluation
- Optimize health conditions
- Stop smoking (very important!)
- Understand what surgery can and cannot do
- Prepare your home for recovery

**After Surgery:**

*In the hospital:*
- Usually 1-3 days (varies by surgery type)
- Pain management
- Start walking soon
- Physical therapy instruction

*At home:*
- Follow activity restrictions
- Take care of your incision
- Take medications as prescribed
- Gradually increase activity
- Physical therapy when recommended

**Recovery Time:**
- Return to desk work: 4-8 weeks
- Driving: When off pain medications
- Full recovery: 3-12 months depending on surgery type`,
      keyTerms: [
        { term: 'decompression', definition: 'Surgery to take pressure off nerves' },
        { term: 'fusion', definition: 'Surgery to join two or more vertebrae together permanently' },
        { term: 'laminectomy', definition: 'Removing part of the vertebra to create space for nerves' },
      ],
      analogies: [
        'Decompression is like opening a door to let people through - it makes more room for nerves.',
        'Fusion is like welding two train cars together - they move as one unit.',
      ],
      examples: [
        'Someone with severe leg pain from a herniated disc may have a discectomy to remove the bulging disc material.',
        'Spinal stenosis causing leg tiredness with walking may be treated with a laminectomy.',
      ],
    },
    2: {
      level: 2,
      summary: 'Spinal surgery encompasses decompression procedures to relieve neural compression and fusion procedures to address instability, with surgical approach and technique determined by pathology location and patient factors.',
      explanation: `Spine surgery has evolved significantly, with many conditions now treated through minimally invasive techniques.

**Decompression Procedures:**

*Discectomy/Microdiscectomy:*
- Remove herniated disc material
- Relieves nerve root compression
- High success rate for leg/arm pain (85-90%)
- Usually outpatient or short stay

*Laminectomy/Laminotomy:*
- Remove lamina (back of vertebra)
- Treats spinal stenosis
- Creates space for nerves
- May be combined with fusion

*Foraminotomy:*
- Enlarges nerve exit opening
- Treats foraminal stenosis
- Preserves more bone

**Fusion Procedures:**

*Anterior (front) approaches:*
- ACDF: Anterior cervical discectomy and fusion
- ALIF: Anterior lumbar interbody fusion
- Direct access to disc space
- Good fusion rates

*Posterior (back) approaches:*
- PLF: Posterolateral fusion
- PLIF: Posterior lumbar interbody fusion
- TLIF: Transforaminal lumbar interbody fusion
- Can combine decompression and fusion

*Lateral approaches:*
- XLIF/LLIF: Lateral lumbar interbody fusion
- Access from the side
- Large implant placement possible

**Instrumentation:**
- Pedicle screws and rods
- Interbody cages (spacers)
- Plates (especially cervical)
- Provide stability during healing

**Outcomes by Procedure:**

| Procedure | Success Rate | Typical Recovery |
|-----------|--------------|------------------|
| Microdiscectomy | 85-90% | 4-6 weeks |
| Cervical fusion | 80-90% | 6-12 weeks |
| Lumbar decompression | 70-80% | 6-12 weeks |
| Lumbar fusion | 60-80% | 3-6 months |

**Complications:**

*General:*
- Infection: 1-3%
- Blood clots: 1-2%
- Nerve injury: <1%
- Dural tear: 1-5%

*Fusion-specific:*
- Nonunion (pseudarthrosis)
- Adjacent segment disease
- Hardware problems`,
      keyTerms: [
        { term: 'ACDF', definition: 'Anterior Cervical Discectomy and Fusion; common neck surgery' },
        { term: 'pedicle screw', definition: 'Screw placed through vertebra to anchor fusion instrumentation' },
        { term: 'interbody cage', definition: 'Spacer placed in disc space to maintain height and promote fusion' },
        { term: 'adjacent segment disease', definition: 'Degeneration of spine levels next to a fusion' },
      ],
      analogies: [
        'An interbody cage is like a spacer that keeps two vertebrae the right distance apart.',
        'Pedicle screws and rods are like internal scaffolding holding bones while fusion heals.',
      ],
    },
    3: {
      level: 3,
      summary: 'Spinal surgery decision-making requires correlation of clinical syndrome with imaging findings, understanding of biomechanics, and appropriate procedure selection based on pathology, patient factors, and evidence.',
      explanation: `Spine surgery selection integrates clinical assessment, imaging correlation, and evidence-based decision-making.

**Surgical Indications:**

*Strong indications:*
- Cauda equina syndrome (emergency)
- Progressive neurological deficit
- Cervical myelopathy
- Radiculopathy with correlating imaging, failed conservative care

*Moderate indications:*
- Neurogenic claudication limiting function
- Symptomatic spondylolisthesis
- Refractory radiculopathy

*Weak indications:*
- Axial back pain alone
- Minimal symptoms
- Non-correlating imaging

**Procedure Selection:**

*Decompression alone:*
- Central stenosis without instability
- Herniated disc without instability
- Adequate bone remaining after decompression

*Decompression + Fusion:*
- Instability present or anticipated
- Spondylolisthesis
- Significant facet resection needed
- Recurrent stenosis

*Motion preservation:*
- Cervical disc replacement
- Specific patient selection
- Single level disease typically
- No significant facet arthritis

**Technical Considerations:**

*Cervical spine:*
- Anterior approach: Disc pathology, 1-2 levels
- Posterior approach: Multi-level, stenosis, laminoplasty
- Combined: Severe multilevel disease

*Lumbar spine:*
- Approach based on pathology location
- Minimally invasive vs. open
- Interbody fusion approach selection
- Number of levels

**Evidence Summary:**

*SPORT trials:*
- Surgery faster improvement than conservative
- Long-term outcomes similar for disc herniation
- Surgery favored for stenosis at 4-8 years

*Fusion evidence:*
- Superior to non-operative for spondylolisthesis
- Decompression alone may be adequate for stenosis without instability (Swedish Stenosis Study)
- Adjacent segment disease: 2-3% per year

**Outcomes Predictors:**

*Favorable:*
- Predominant limb symptoms
- Clear imaging correlation
- Shorter symptom duration
- Good psychological status

*Unfavorable:*
- Predominant axial pain
- Non-correlating imaging
- Chronic symptoms
- Psychological factors (depression, catastrophizing)
- Workers' compensation`,
      keyTerms: [
        { term: 'SPORT trials', definition: 'Spine Patient Outcomes Research Trials; major studies of spine surgery outcomes' },
        { term: 'pseudarthrosis', definition: 'Failure of fusion to heal solidly' },
        { term: 'cervical laminoplasty', definition: 'Procedure enlarging cervical canal while preserving laminae' },
        { term: 'spondylolisthesis', definition: 'Forward slippage of one vertebra on another' },
      ],
      clinicalNotes: 'The Swedish Spinal Stenosis Study suggests that adding fusion to decompression for stenosis without spondylolisthesis does not improve outcomes and adds risk and cost. Patient selection for fusion is critical.',
    },
    4: {
      level: 4,
      summary: 'Spinal surgery requires integration of clinical assessment, advanced imaging interpretation, biomechanical principles, and evidence-based practice to optimize patient selection and technical execution.',
      explanation: `Advanced spine surgery practice requires comprehensive assessment, appropriate procedure selection, and technical excellence.

**Preoperative Assessment:**

*Clinical correlation:*
- Syndrome identification (radiculopathy, myelopathy, claudication)
- Imaging-clinical correlation mandatory
- Provocative testing if uncertain
- Psychological screening for fusion candidates

*Imaging interpretation:*
- MRI: Primary for soft tissue, nerve assessment
- CT: Bone detail, fusion assessment
- Standing X-rays: Alignment, instability
- Dynamic imaging: Flexion/extension

*Risk stratification:*
- Frailty assessment
- Nutritional status
- Diabetes control
- Smoking cessation

**Biomechanical Principles:**

*Cervical:*
- Balance maintenance
- Kyphosis avoidance
- Sagittal alignment

*Lumbar:*
- Pelvic incidence - lumbar lordosis mismatch
- Sagittal vertical axis
- Pelvic tilt as compensation mechanism

**Evidence-Based Decision-Making:**

*Decompression vs. fusion:*
- SSSS: No benefit of fusion for stenosis without listhesis
- Fusion indicated for: Instability, spondylolisthesis, deformity

*Motion preservation:*
- Cervical arthroplasty: Non-inferior to fusion at 7+ years
- Lumbar arthroplasty: Specific indications, limited adoption
- Avoid in: Facet arthritis, instability, multi-level

*Minimally invasive:*
- Similar outcomes to open in systematic reviews
- Potentially faster recovery, less blood loss
- Learning curve, specific complications

**Surgical Execution:**

*Decompression technique:*
- Complete neural decompression
- Preserve stability when possible
- Tubular vs. open technique selection

*Fusion technique:*
- Adequate surface preparation
- Appropriate graft selection
- Instrumentation placement accuracy
- Interbody cage sizing and position

**Complications Prevention:**

*Infection:*
- Prophylactic antibiotics (timing)
- Technique optimization
- Risk factor modification

*Neurological:*
- Intraoperative monitoring
- Careful technique
- Irrigation and visualization

*Fusion failure:*
- Adequate preparation
- Smoking cessation (critical)
- Graft selection
- Rigid fixation

**Outcomes Optimization:**

*Patient selection:*
- Clear surgical indication
- Imaging-clinical correlation
- Optimized medical status
- Realistic expectations

*Rehabilitation:*
- Early mobilization
- Protocol-driven PT
- Activity progression
- Return-to-work planning`,
      keyTerms: [
        { term: 'pelvic incidence', definition: 'Fixed anatomic parameter affecting required lumbar lordosis' },
        { term: 'sagittal vertical axis', definition: 'Measure of global sagittal balance; C7 plumb line to sacrum' },
        { term: 'neuromonitoring', definition: 'Intraoperative monitoring of spinal cord and nerve function' },
        { term: 'SSSS', definition: 'Swedish Spinal Stenosis Study comparing fusion to decompression alone' },
      ],
      clinicalNotes: 'Sagittal balance is increasingly recognized as critical for outcomes. Failure to maintain or restore appropriate lordosis leads to higher rates of adjacent segment disease, persistent pain, and poor outcomes.',
    },
    5: {
      level: 5,
      summary: 'Contemporary spine surgery integrates precision diagnostics, personalized treatment algorithms, advanced techniques, and outcome-driven care within an evidence-based framework addressing complex pathology.',
      explanation: `Expert spine surgery practice requires synthesis of evolving evidence, technical innovation, and patient-centered care.

**Precision Diagnostics:**

*Advanced imaging:*
- Standing/weight-bearing MRI
- Kinetic MRI for instability
- CT myelogram for complex cases
- EOS imaging for alignment

*Diagnostic injections:*
- Selective nerve root blocks
- Facet blocks/medial branch blocks
- Discography (controversial)

**Evidence Synthesis:**

*Key trials informing practice:*
- SPORT: Disc, stenosis, spondylolisthesis
- SSSS: Fusion vs. decompression for stenosis
- Cervical arthroplasty RCTs: Non-inferiority to fusion
- FUSE: Fusion for chronic LBP (limited benefit)

*Current evidence summary:*
- Decompression effective for appropriate indications
- Fusion adds value for instability/spondylolisthesis
- Fusion for axial pain alone: Limited evidence
- Motion preservation: Non-inferior for selected patients

**Technical Advances:**

*Navigation and robotics:*
- Improved pedicle screw accuracy
- Reduced radiation exposure
- Learning curve considerations

*Minimally invasive:*
- Tubular decompression
- MIS-TLIF
- Endoscopic procedures
- Similar outcomes, specific complications

*Biologics:*
- BMP-2: Efficacy and complications (off-label use issues)
- Bone graft substitutes
- Stem cells: Limited evidence

**Complex Pathology:**

*Adult deformity:*
- Sagittal imbalance assessment
- Pelvic incidence matching
- Osteotomies when needed
- Complication rates significant

*Revision surgery:*
- Higher complication rates
- Careful indication assessment
- Adjacent segment disease management
- Pseudarthrosis treatment

*Tumor and infection:*
- Oncologic principles
- Staging and prognosis
- Reconstruction considerations
- Multidisciplinary approach

**Outcome Optimization:**

*Patient selection:*
- Appropriate indication identification
- Psychological screening
- Preoperative optimization
- Shared decision-making

*Quality metrics:*
- Patient-reported outcomes (ODI, NDI)
- Complication rates
- Reoperation rates
- Fusion rates

*Registries and databases:*
- QOD (Quality Outcomes Database)
- N2QOD
- Track outcomes, inform practice

**Value-Based Care:**

*Appropriate use:*
- Evidence-based indications
- Avoid low-value procedures
- Patient selection optimization
- Cost-effectiveness consideration

*Bundled care:*
- Episode-based payment
- Quality incentives
- Efficiency improvement

**Research Priorities:**
- Optimal surgical indications
- Motion preservation long-term outcomes
- Biologic enhancement
- Technology value assessment
- Personalized treatment selection`,
      keyTerms: [
        { term: 'EOS imaging', definition: 'Low-dose full-body standing X-ray for alignment assessment' },
        { term: 'osteotomy', definition: 'Bone-cutting procedure to correct spinal alignment' },
        { term: 'QOD', definition: 'Quality Outcomes Database; national registry tracking spine surgery outcomes' },
        { term: 'BMP-2', definition: 'Bone Morphogenetic Protein-2; growth factor promoting bone healing' },
      ],
      clinicalNotes: `**Key Practice Principles:**

1. **Patient selection is paramount:**
   - Clear surgical indication
   - Imaging-clinical correlation
   - Psychological assessment
   - Shared decision-making

2. **Evidence-based procedure selection:**
   - Decompression alone when appropriate
   - Fusion for clear indications (instability, spondylolisthesis)
   - Motion preservation in selected patients
   - Avoid surgery for axial pain alone

3. **Technical excellence:**
   - Adequate decompression
   - Appropriate alignment
   - Rigid fixation when fusing
   - Minimize complications

4. **Optimization strategy:**
   - Smoking cessation (mandatory for fusion)
   - Diabetes control
   - Nutrition
   - Psychological preparation

5. **Outcomes focus:**
   - Track patient-reported outcomes
   - Registry participation
   - Continuous improvement
   - Value-based care

**Decision Algorithm:**
1. Confirm surgical indication
2. Correlate imaging and clinical findings
3. Select appropriate procedure
4. Optimize patient preoperatively
5. Execute with technical precision
6. Protocol-driven rehabilitation
7. Track outcomes`,
    },
  },

  media: [
    {
      id: 'spinal-surgery-types',
      type: 'diagram',
      filename: 'spinal-surgery-approaches.svg',
      title: 'Spinal Surgery Approaches',
      description: 'Illustration of anterior, posterior, and lateral approaches',
    },
  ],
  citations: [
    {
      id: 'sport-summary',
      type: 'article',
      title: 'SPORT Trials Summary',
      source: 'Journal of Bone and Joint Surgery',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-spine-anatomy', targetType: 'structure', relationship: 'related', label: 'Spine Anatomy' },
    { targetId: 'ortho-patient-spine-surgery-decision', targetType: 'topic', relationship: 'related', label: 'When Surgery Is Needed' },
    { targetId: 'ortho-patient-herniated-disc', targetType: 'condition', relationship: 'related', label: 'Herniated Disc' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['spine', 'surgery', 'procedures'],
    keywords: ['spine surgery', 'fusion', 'decompression', 'laminectomy', 'discectomy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spinalSurgeryOverviewContent;
