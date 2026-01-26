import { EducationalContent } from '../../types';

export const spinalStenosisContent: EducationalContent = {
  id: 'ortho-patient-spinal-stenosis',
  type: 'condition',
  name: 'Spinal Stenosis',
  alternateNames: ['Lumbar stenosis', 'Cervical stenosis', 'Narrowing of the spine'],

  levels: {
    1: {
      level: 1,
      summary: 'Spinal stenosis is when the spaces in your spine narrow and put pressure on the nerves, causing pain, numbness, or weakness in your legs or arms.',
      explanation: `Your spine has a tunnel that protects your spinal cord and nerves. Spinal stenosis happens when this tunnel gets too narrow, squeezing the nerves inside.

**Why It Happens:**
- Normal aging (most common cause)
- Arthritis in the spine
- Thickening of ligaments
- Bone spurs growing into the canal
- Sometimes from injury or other conditions

**Common Symptoms:**
- Pain in your back, legs, or arms
- Legs feel tired or heavy when walking
- Need to stop and rest frequently when walking
- Pain gets better when you sit or lean forward
- Numbness or tingling in legs or feet

**The Shopping Cart Sign:**
Many people feel better leaning forward (like on a shopping cart) because it opens up space for the nerves.

**Treatment Options:**
- Physical therapy to strengthen muscles
- Pain medications
- Epidural injections
- Surgery if other treatments don't work

**When to See a Doctor Right Away:**
- Can't control bladder or bowels
- Severe weakness in legs
- Numbness in groin area

**Living Well with Stenosis:**
- Stay active with low-impact exercises (swimming, biking)
- Maintain healthy weight
- Use assistive devices if needed
- Physical therapy exercises at home`,
      keyTerms: [
        { term: 'stenosis', definition: 'Abnormal narrowing of a passage in the body' },
        { term: 'spinal canal', definition: 'The tunnel in your spine that contains and protects your nerves' },
        { term: 'nerve compression', definition: 'When something presses on a nerve, causing pain or numbness' },
      ],
      analogies: [
        'The spinal canal is like a tunnel for nerves - when the tunnel gets too narrow, traffic (nerve signals) backs up.',
        'Leaning forward is like opening a squeezed garden hose - it lets more flow through.',
      ],
      examples: [
        'Someone with spinal stenosis might feel fine sitting but have leg pain after walking a block.',
        'Riding a bicycle may feel easier than walking because the forward-bent position opens up the spine.',
      ],
    },
    2: {
      level: 2,
      summary: 'Spinal stenosis involves narrowing of the spinal canal or neural foramina, typically from degenerative changes, causing neurogenic claudication in lumbar stenosis or myelopathy in cervical stenosis.',
      explanation: `Spinal stenosis is a common condition, especially in people over 50. The narrowing puts pressure on nerves, causing characteristic symptoms.

**Types of Stenosis:**

*By Location:*
- **Central stenosis**: Narrowing of the main spinal canal
- **Foraminal stenosis**: Narrowing where nerves exit the spine
- **Lateral recess stenosis**: Narrowing of nerve pathways within canal

*By Region:*
- **Lumbar stenosis**: Most common; affects lower back
- **Cervical stenosis**: Affects neck; more serious due to spinal cord

**Causes:**
- **Degenerative** (most common): Disc bulging, facet arthritis, ligament thickening
- **Congenital**: Born with a smaller canal
- **Acquired**: Trauma, tumors, Paget's disease

**Symptoms:**

*Lumbar Stenosis - Neurogenic Claudication:*
- Leg pain, heaviness, or fatigue with walking
- Pain radiates down both legs
- Relief with sitting or bending forward
- Can walk further pushing a shopping cart
- Different from vascular claudication

*Cervical Stenosis - Myelopathy:*
- Balance problems, unsteady gait
- Clumsiness with hands
- Numbness in hands/arms
- May have neck pain
- More serious - involves spinal cord

**Diagnosis:**
- History and physical exam key
- MRI: Shows canal narrowing, nerve compression
- CT: Better bone detail
- Standing X-rays: May show instability

**Treatment:**

*Conservative:*
- Physical therapy (flexion-based exercises)
- NSAIDs, acetaminophen
- Epidural steroid injections
- Activity modification

*Surgical (if conservative fails):*
- Decompression (laminectomy): Remove bone/tissue compressing nerves
- Fusion: Added if instability present
- 70-80% have significant improvement with surgery`,
      keyTerms: [
        { term: 'neurogenic claudication', definition: 'Leg symptoms from nerve compression that worsen with walking and improve with rest or bending forward', pronunciation: 'klah-dih-KAY-shun' },
        { term: 'myelopathy', definition: 'Spinal cord dysfunction causing weakness, balance problems, and coordination issues', pronunciation: 'my-eh-LOP-uh-thee' },
        { term: 'laminectomy', definition: 'Surgery to remove the back part of vertebra to create more space for nerves' },
        { term: 'neural foramen', definition: 'Opening where nerves exit the spine', pronunciation: 'for-AY-men' },
      ],
      analogies: [
        'Neurogenic claudication is like a traffic jam in your nerve highway - rest lets the traffic clear.',
        'The spinal canal is like a pipe around wires - when the pipe narrows, the wires get pinched.',
      ],
    },
    3: {
      level: 3,
      summary: 'Degenerative lumbar stenosis results from disc degeneration, facet hypertrophy, and ligamentum flavum thickening, causing neurogenic claudication, while cervical stenosis may cause myelopathy requiring more urgent intervention.',
      explanation: `Spinal stenosis is a cascade of degenerative changes affecting the spinal canal and its contents.

**Pathophysiology:**

*Degenerative cascade:*
1. Disc dehydration and height loss
2. Increased facet joint loading
3. Facet joint hypertrophy and osteophyte formation
4. Ligamentum flavum hypertrophy/buckling
5. Canal narrowing

*Contributing factors:*
- Central canal: Disc bulge, facet osteophytes, ligamentum flavum
- Lateral recess: Superior articular process hypertrophy
- Foraminal: Disc height loss, foraminal ligaments, osteophytes

**Clinical Syndromes:**

*Neurogenic Claudication:*
- Distinguished from vascular claudication:
  | Feature | Neurogenic | Vascular |
  |---------|------------|----------|
  | Onset | Variable distance | Fixed distance |
  | Relief | Sitting/flexion | Standing rest |
  | Pulses | Normal | May be diminished |
  | Position | Improved flexed | Position doesn't matter |
  | Skin | Normal | May be atrophic |

*Cervical Myelopathy:*
- Upper motor neuron signs: Hyperreflexia, Hoffmann's, Babinski
- Gait disturbance: Wide-based, spastic
- Hand dysfunction: Clumsiness, loss of dexterity
- May progress if untreated
- Surgical decompression generally recommended

**Physical Examination:**
- Lumbar: Reproduction of symptoms with extension, relief with flexion
- Romberg test: May be positive with myelopathy
- Gait assessment: Wide-based, shuffling
- Neurological exam: Motor, sensory, reflexes
- Vascular exam: Rule out peripheral vascular disease

**Imaging:**

*MRI findings:*
- Canal diameter: <10mm severe, 10-13mm moderate
- Nerve root compression
- Ligamentum flavum thickness (>4mm abnormal)
- T2 cord signal change (myelomalacia) in cervical myelopathy

*Dynamic imaging:*
- Standing/weight-bearing MRI
- Flexion/extension X-rays for instability

**Management:**

*Conservative (lumbar stenosis):*
- Physical therapy: Flexion-based, core strengthening
- Epidural injections: 50% short-term improvement
- Calcitonin: Limited evidence
- Activity modification

*Surgical:*
- Decompression alone: Stable spine
- Decompression with fusion: Instability, spondylolisthesis
- SPORT trial: Surgery superior to conservative at 2-4 years
- 80% good-excellent outcomes`,
      keyTerms: [
        { term: 'ligamentum flavum', definition: 'Yellow ligament connecting vertebral laminae; hypertrophy contributes to stenosis', pronunciation: 'lig-ah-MEN-tum FLAY-vum' },
        { term: 'lateral recess', definition: 'Area between central canal and neural foramen where nerve roots travel' },
        { term: 'Hoffmann sign', definition: 'Upper motor neuron sign: flicking middle finger causes thumb flexion' },
        { term: 'myelomalacia', definition: 'Softening of spinal cord from chronic compression, seen as T2 signal change' },
      ],
      clinicalNotes: 'Cervical myelopathy may be progressive and generally warrants surgical intervention. Lumbar stenosis has a more benign natural history, with many patients remaining stable or improving with conservative care.',
    },
    4: {
      level: 4,
      summary: 'Spinal stenosis management requires differentiation of central, lateral, and foraminal stenosis, assessment of dynamic factors, and individualized treatment balancing surgical efficacy against procedural risks.',
      explanation: `Advanced management of spinal stenosis requires understanding of natural history, surgical decision-making, and outcomes optimization.

**Pathoanatomy:**

*Central stenosis:*
- Congenitally small canal (<12mm AP diameter)
- Degenerative: Disc bulge, facet/ligamentum hypertrophy
- Combined congenital + degenerative: Earlier symptoms

*Lateral recess stenosis:*
- Height <2mm diagnostic
- Superior articular process main contributor
- Affects traversing nerve root

*Foraminal stenosis:*
- Disc height loss primary factor
- Foraminal height <15mm, width <7mm significant
- Affects exiting nerve root

**Dynamic Considerations:**
- Extension narrows canal 11%
- Weight-bearing may change canal dimensions
- Spondylolisthesis: Dynamic instability
- Positional component important

**Natural History:**
- Lumbar stenosis generally slowly progressive
- 15-30% worsen over 4 years
- Many remain stable or improve
- Cervical myelopathy: More likely to progress

**Diagnostic Workup:**

*Electrodiagnostics:*
- EMG: Paraspinal denervation suggests radiculopathy
- Distinguishes from peripheral neuropathy
- Helps correlate imaging with clinical syndrome

*Diagnostic injections:*
- Selective nerve root blocks: Identify symptomatic level
- Epidural: Therapeutic and diagnostic value

**Surgical Options:**

*Decompression techniques:*
- Laminectomy: Traditional; complete removal
- Laminotomy: Partial removal; less destabilizing
- Laminoplasty: Cervical; expand canal, preserve motion
- Minimally invasive: Tubular, endoscopic approaches

*Fusion indications:*
- Spondylolisthesis
- Scoliosis
- Instability after decompression
- Significant facet resection required
- Recurrent stenosis

**Evidence:**

*SPORT Trial (Lumbar Stenosis):*
- Surgery vs. conservative; significant crossover
- As-treated: Surgery superior at 4 years
- Intent-to-treat: Still favors surgery

*Cochrane Review:*
- Decompression effective vs. conservative
- Limited evidence for fusion vs. decompression alone
- Interspinous devices: Limited/uncertain benefit

**Outcomes Predictors:**

*Favorable:*
- Predominant leg symptoms
- Neurogenic claudication pattern
- Short symptom duration
- Good walking tolerance at baseline

*Unfavorable:*
- Predominant back pain
- Depression
- Cardiovascular comorbidity
- Previous lumbar surgery
- Smoking

**Complications:**
- Dural tear: 5-15%
- Infection: 1-3%
- Instability requiring fusion: 5-10%
- Adjacent segment disease: 2-3% per year
- Recurrent stenosis: Rare`,
      keyTerms: [
        { term: 'laminoplasty', definition: 'Surgical technique expanding cervical canal while preserving laminae' },
        { term: 'interspinous process device', definition: 'Implant between spinous processes limiting extension; mixed evidence' },
        { term: 'SPORT trial', definition: 'Spine Patient Outcomes Research Trial; landmark study on stenosis treatment' },
        { term: 'dynamic instability', definition: 'Abnormal motion between vertebrae, often with position changes' },
      ],
      clinicalNotes: 'Selection of decompression alone vs. decompression with fusion remains controversial. Current evidence does not strongly support routine fusion for stenosis without instability. Patient factors, surgeon experience, and individual anatomy guide decisions.',
    },
    5: {
      level: 5,
      summary: 'Contemporary stenosis management integrates precision diagnostics, motion-preserving techniques, and personalized surgical planning while addressing the challenges of an aging population with multiple comorbidities.',
      explanation: `Expert management of spinal stenosis requires integration of evidence, surgical expertise, and patient-centered decision-making.

**Advanced Diagnostics:**

*Quantitative MRI:*
- Morphometric analysis: Canal area, dural sac cross-sectional area
- Dural sac area <100mm2 correlates with symptoms
- Machine learning for stenosis grading

*Functional assessment:*
- Walking capacity: Self-paced walking test, 6-minute walk
- Objective claudication distance
- Patient-reported outcomes: ODI, ZCQ, SF-36

*Electrodiagnostics:*
- Somatosensory evoked potentials: Myelopathy assessment
- Intraoperative monitoring: Complex cases

**Evidence Synthesis:**

*Surgery vs. Conservative:*
- SPORT: Surgery maintains advantage at 8 years
- Cochrane: Surgery more effective than conservative
- Effect size modest; patient selection crucial

*Decompression vs. Fusion:*
- SSSS trial (Swedish): No benefit of fusion over decompression alone for stenosis without spondylolisthesis
- Fusion adds cost, complications, no improvement in outcomes
- Fusion indicated for: Instability, spondylolisthesis, deformity

*Minimally Invasive Techniques:*
- Similar outcomes to open in systematic reviews
- Potentially faster recovery
- Learning curve considerations

**Surgical Planning:**

*Preoperative optimization:*
- Frailty assessment: Modified frailty index
- Nutritional status: Albumin, prealbumin
- Glycemic control: HbA1c <8%
- Smoking cessation: 4 weeks minimum
- Medical optimization: Cardiopulmonary clearance

*Technique selection:*
- Single-level central: Laminectomy/laminotomy
- Multi-level: Consider bilateral approach, laminoplasty (cervical)
- Foraminal: Foraminotomy; may require lateral approach
- With instability: Instrumented fusion

*Motion preservation:*
- Interspinous spacers: X-STOP, Superion (mixed evidence)
- May delay/avoid larger surgery in selected patients
- Limitations: Central stenosis, instability contraindications

**Special Populations:**

*Elderly/Frail:*
- Higher complication rates but still benefit
- Limited decompression strategies
- Extended recovery times
- Consider goals of care discussions

*Cervical Myelopathy:*
- Generally recommend surgery for moderate-severe
- Mild myelopathy: Close monitoring vs. surgery
- Anterior vs. posterior approach based on pathology
- Japanese Orthopedic Association (JOA) score for assessment

*Tandem Stenosis:*
- Cervical + lumbar stenosis
- Address cervical first typically
- May affect lumbar exam findings

**Emerging Approaches:**

*Biologics:*
- Epidural platelet-rich plasma: Limited evidence
- Stem cells: Not established

*Technology:*
- Navigation and robotics: Improved accuracy
- Endoscopic techniques: Expanding indications
- Augmented reality: Surgical planning

*Prediction models:*
- Machine learning for outcomes prediction
- Risk calculators for complications

**Outcomes and Quality:**

*Meaningful improvement thresholds:*
- ODI: 12.8 point improvement
- ZCQ: Specific to stenosis
- Walking capacity: 30% improvement

*Long-term results:*
- 5-year satisfaction: 60-70%
- Reoperation rates: 10-15% at 10 years
- Adjacent segment issues: 2-3% per year

**Cost-Effectiveness:**
- Surgery cost-effective for appropriately selected patients
- QALY gains justify intervention
- Interspinous devices: Cost-effectiveness uncertain`,
      keyTerms: [
        { term: 'Zurich Claudication Questionnaire (ZCQ)', definition: 'Disease-specific outcome measure for lumbar stenosis' },
        { term: 'modified frailty index', definition: 'Tool predicting postoperative complications in elderly patients' },
        { term: 'tandem stenosis', definition: 'Coexisting cervical and lumbar stenosis' },
        { term: 'SSSS trial', definition: 'Swedish Spinal Stenosis Study comparing fusion to decompression alone' },
      ],
      clinicalNotes: `**Practice Points:**
- The SSSS trial suggests fusion adds little benefit for stenosis without spondylolisthesis
- Frailty assessment predicts complications better than age alone
- Walking capacity correlates with surgical benefit
- Cervical myelopathy generally warrants intervention due to progressive nature
- Patient expectations strongly influence satisfaction
- Minimally invasive approaches have similar long-term outcomes to open surgery

**Shared Decision-Making:**
- Present natural history: Many stable without surgery
- Discuss surgical benefits: Faster, more complete improvement
- Address risks: Age-appropriate, comorbidity-adjusted
- Set realistic expectations: 60-70% satisfied long-term
- Consider patient goals: Walking distance, independence, pain relief`,
    },
  },

  media: [
    {
      id: 'stenosis-anatomy',
      type: 'diagram',
      filename: 'spinal-stenosis-anatomy.svg',
      title: 'Spinal Stenosis Anatomy',
      description: 'Comparison of normal spinal canal vs. stenotic canal',
    },
  ],
  citations: [
    {
      id: 'sport-stenosis',
      type: 'article',
      title: 'Surgical vs Nonoperative Treatment for Lumbar Spinal Stenosis',
      source: 'New England Journal of Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-spine-anatomy', targetType: 'structure', relationship: 'related', label: 'Spine Anatomy' },
    { targetId: 'ortho-patient-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain' },
    { targetId: 'ortho-patient-spine-surgery-decision', targetType: 'topic', relationship: 'related', label: 'When Surgery Is Needed' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['spine', 'stenosis', 'surgery'],
    keywords: ['spinal stenosis', 'neurogenic claudication', 'laminectomy', 'decompression'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spinalStenosisContent;
