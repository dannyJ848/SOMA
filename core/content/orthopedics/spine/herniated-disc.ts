import { EducationalContent } from '../../types';

export const herniatedDiscContent: EducationalContent = {
  id: 'ortho-patient-herniated-disc',
  type: 'condition',
  name: 'Herniated Disc',
  alternateNames: ['Slipped disc', 'Ruptured disc', 'Bulging disc', 'Disc prolapse'],

  levels: {
    1: {
      level: 1,
      summary: 'A herniated disc happens when the soft cushion between your spine bones pushes out and presses on nearby nerves, causing pain that can travel down your arm or leg.',
      explanation: `Between each bone in your spine sits a cushion called a disc. Think of it like a jelly donut - it has a soft center and a tougher outer layer. A herniated disc happens when the soft center pushes through the outer layer.

**What Causes It:**
- Normal wear and tear as we age
- Lifting something heavy the wrong way
- Sudden twisting movements
- Being overweight
- Jobs that require lots of bending or lifting

**Symptoms:**
- Pain in your back, neck, arm, or leg (depending on location)
- Numbness or tingling in arms or legs
- Weakness in affected area
- Pain may be worse when coughing, sneezing, or sitting

**Good News:**
Most herniated discs get better WITHOUT surgery. Treatment usually includes:
- Rest and activity modification
- Over-the-counter pain medication
- Physical therapy
- Time (most improve in 6-12 weeks)

**When to See a Doctor Immediately:**
- Loss of bladder or bowel control
- Numbness in the groin area
- Severe weakness in your legs
- Pain that keeps getting worse despite rest

**Prevention:**
- Use proper lifting technique (bend your knees!)
- Maintain a healthy weight
- Exercise regularly to strengthen your core
- Take breaks from sitting`,
      keyTerms: [
        { term: 'disc', definition: 'Cushion between the bones in your spine' },
        { term: 'herniated', definition: 'When something pushes out of its normal place' },
        { term: 'nerve', definition: 'Body pathway that carries signals for feeling and movement' },
      ],
      analogies: [
        'A spinal disc is like a jelly donut - when squeezed too hard, the jelly can push out.',
        'Nerves are like electrical wires - when something presses on them, the signal gets disrupted.',
      ],
      examples: [
        'A herniated disc in your lower back can cause pain shooting down your leg.',
        'A herniated disc in your neck can cause pain, numbness, or tingling in your arm.',
      ],
    },
    2: {
      level: 2,
      summary: 'Disc herniation occurs when the nucleus pulposus protrudes through the annulus fibrosus, potentially compressing spinal nerves and causing radicular symptoms that often improve with conservative management.',
      explanation: `Intervertebral discs act as shock absorbers between vertebrae. Understanding disc structure helps explain herniation symptoms.

**Disc Anatomy:**
- **Nucleus pulposus**: Gel-like center (high water content)
- **Annulus fibrosus**: Tough outer ring of fibrous tissue
- **Cartilage endplates**: Connect disc to vertebral bodies

**Types of Disc Problems:**
- **Bulge**: Disc extends beyond normal margins but nucleus contained
- **Protrusion**: Nucleus pushes into annulus but doesn't break through
- **Extrusion**: Nucleus breaks through annulus
- **Sequestration**: Fragment separates and migrates

**Most Common Locations:**
- **L4-L5**: Affects L5 nerve root
- **L5-S1**: Affects S1 nerve root
- **C5-C6 and C6-C7**: Most common cervical levels

**Symptoms by Location:**

*Lumbar (lower back):*
- Back pain with leg pain (sciatica)
- Numbness/tingling in specific leg patterns
- Weakness in ankle or foot

*Cervical (neck):*
- Neck pain with arm pain
- Numbness/tingling in specific arm patterns
- Weakness in arm or hand

**Natural History:**
- 90% improve without surgery within 6-12 weeks
- Disc material can shrink and reabsorb over time
- Larger herniations may actually resorb better

**Treatment Progression:**
1. **Weeks 1-6**: Activity modification, NSAIDs, physical therapy
2. **Weeks 6-12**: Continued PT, consider epidural injection if needed
3. **Beyond 12 weeks**: Surgery considered if significant symptoms persist

**Surgical Options:**
- Microdiscectomy: Remove herniated portion (90% success rate)
- Minimally invasive techniques available`,
      keyTerms: [
        { term: 'nucleus pulposus', definition: 'The soft, gel-like center of a spinal disc', pronunciation: 'NOO-klee-us pul-POH-sus' },
        { term: 'annulus fibrosus', definition: 'The tough outer ring of a spinal disc', pronunciation: 'AN-yoo-lus fy-BRO-sus' },
        { term: 'radiculopathy', definition: 'Nerve root dysfunction causing pain, numbness, or weakness', pronunciation: 'rad-ik-yoo-LOP-uh-thee' },
        { term: 'microdiscectomy', definition: 'Minimally invasive surgery to remove herniated disc material' },
      ],
      analogies: [
        'The disc is like a hydraulic cushion - the gel center distributes pressure evenly when healthy.',
        'Nerve compression is like stepping on a garden hose - it blocks the normal flow of signals.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lumbar disc herniation involves displacement of nuclear material through annular defects, causing mechanical compression and chemical irritation of neural structures, with most cases responding to conservative management.',
      explanation: `Disc herniation is a common cause of radicular symptoms. Understanding pathophysiology guides management.

**Pathophysiology:**

*Mechanical factors:*
- Posterior and posterolateral herniation most common (thinner annulus)
- Central herniations may affect multiple levels or cauda equina
- Foraminal/far-lateral herniations affect exiting nerve root

*Chemical factors:*
- Nucleus pulposus is inflammatory
- Phospholipase A2, TNF-alpha, IL-1 released
- Chemical radiculitis can occur without mechanical compression
- Explains symptoms without correlating imaging

**Clinical Presentation:**

*Lumbar radiculopathy:*
| Level | Root | Motor | Sensory | Reflex |
|-------|------|-------|---------|--------|
| L3-L4 | L4 | Quad weakness | Medial leg | Knee jerk |
| L4-L5 | L5 | Dorsiflexion | Lateral leg/dorsum foot | None reliable |
| L5-S1 | S1 | Plantar flexion | Lateral foot | Ankle jerk |

*Cervical radiculopathy:*
| Level | Root | Motor | Sensory | Reflex |
|-------|------|-------|---------|--------|
| C4-C5 | C5 | Deltoid/biceps | Lateral shoulder | Biceps |
| C5-C6 | C6 | Wrist extension | Lateral forearm/thumb | Brachioradialis |
| C6-C7 | C7 | Triceps/wrist flexion | Middle finger | Triceps |

**Physical Examination:**
- Straight leg raise (SLR): Positive 30-70 degrees
- Crossed SLR: High specificity for herniation
- Femoral stretch test: L2-L4 roots
- Spurling test: Cervical radiculopathy

**Imaging:**
- MRI: Study of choice; shows disc, nerve roots, soft tissue
- CT myelogram: If MRI contraindicated
- Imaging findings must correlate with clinical presentation
- Asymptomatic disc herniations common (20-30% of population)

**Conservative Management:**
- Activity modification (not bed rest)
- NSAIDs: First-line pharmacotherapy
- Oral steroids: Short course may help acute radiculopathy
- Physical therapy: McKenzie, core stabilization
- Epidural steroid injections: Consider for persistent radicular symptoms

**Surgical Indications:**
- Cauda equina syndrome (emergency)
- Progressive motor weakness
- Intractable pain despite 6-12 weeks conservative care
- Imaging-clinical correlation required`,
      keyTerms: [
        { term: 'dermatomal', definition: 'Relating to the skin area supplied by a single spinal nerve root' },
        { term: 'myotomal', definition: 'Relating to muscles supplied by a single spinal nerve root' },
        { term: 'chemical radiculitis', definition: 'Nerve root inflammation from disc material without mechanical compression' },
        { term: 'sequestered fragment', definition: 'Disc material that has separated and migrated from parent disc' },
      ],
      clinicalNotes: 'The classic teaching that larger herniations have worse prognosis is incorrect - larger herniations often resorb more completely. Imaging findings should not drive treatment decisions without clinical correlation.',
    },
    4: {
      level: 4,
      summary: 'Disc herniation management requires integration of clinical assessment, imaging interpretation, and evidence-based decision-making to optimize outcomes while avoiding unnecessary interventions.',
      explanation: `Advanced management of disc herniation requires understanding of natural history, proper patient selection for intervention, and evidence-based treatment algorithms.

**Natural History and Prognosis:**
- Spontaneous resorption occurs in majority of herniations
- Larger herniations: 82% resorption
- Extrusions: 70% resorption
- Sequestered: 96% resorption
- Macrophage-mediated phagocytosis and neovascularization
- Timeline: 6-12 months for significant resorption

**Diagnostic Approach:**

*When to image:*
- Red flags present
- Progressive neurological deficit
- Symptoms >6 weeks with radiculopathy
- Preoperative planning

*MRI interpretation:*
- T2-weighted: High signal = hydrated nucleus
- Disc height loss indicates degeneration
- Differentiate protrusion, extrusion, sequestration
- Nerve root compression, deviation, enhancement
- High-intensity zone: Annular tear (controversial significance)

**Evidence-Based Treatment:**

*Conservative care:*
- Avoid bed rest (evidence of harm)
- NSAIDs: Moderate evidence for acute sciatica
- Oral steroids: Mixed evidence; consider for severe acute radiculopathy
- PT: McKenzie method, general exercise programs beneficial
- Traction: No evidence of benefit

*Epidural steroid injections:*
- Short-term pain relief (4-6 weeks)
- Transforaminal approach more targeted
- No long-term benefit vs. natural history
- May avoid or delay surgery in some patients
- Limited to 3-4 per year

*Surgery:*
- Microdiscectomy/discectomy: Standard procedure
- Outcomes: 85-95% improvement in leg pain
- Recurrence: 5-10% at 5 years
- SPORT trial: Surgery faster improvement, similar long-term outcomes
- Timing: Surgery within 6 months may optimize outcomes

**Surgical Decision-Making:**

*Ideal surgical candidate:*
- Radicular pain > back pain
- Correlating imaging findings
- Failed adequate conservative trial (6-12 weeks)
- Motivated, appropriate expectations

*Relative contraindications:*
- Predominant back pain
- Minimal imaging findings
- Central sensitization features
- Secondary gain concerns
- Significant psychological factors

**Postoperative Rehabilitation:**
- Early mobilization
- Activity restrictions: Typically 6 weeks
- Physical therapy: Core stabilization, proper mechanics
- Return to work: 2-6 weeks (desk job) to 3 months (physical labor)

**Complications:**
- Recurrent herniation: 5-10%
- Dural tear: 1-2%
- Nerve root injury: <1%
- Infection: <1%
- Wrong level surgery: Rare with proper imaging`,
      keyTerms: [
        { term: 'SPORT trial', definition: 'Spine Patient Outcomes Research Trial; landmark RCT comparing surgical vs. conservative treatment' },
        { term: 'transforaminal epidural', definition: 'Epidural injection targeting the intervertebral foramen and affected nerve root' },
        { term: 'microdiscectomy', definition: 'Minimally invasive surgical removal of herniated disc material' },
        { term: 'contained herniation', definition: 'Disc bulge or protrusion with intact outer annulus' },
      ],
      clinicalNotes: 'The SPORT trial showed that while surgery provides faster pain relief, long-term outcomes at 2-4 years are similar between surgical and conservative treatment. This supports shared decision-making based on patient preferences and symptom severity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary disc herniation management integrates advanced imaging, precision diagnostics, and individualized treatment algorithms while incorporating emerging biologics and minimally invasive techniques.',
      explanation: `Expert-level management requires synthesis of current evidence, appropriate use of advanced interventions, and shared decision-making.

**Advanced Imaging:**

*MRI techniques:*
- Diffusion tensor imaging: Nerve root integrity
- T2 mapping: Disc water content quantification
- MR neurography: High-resolution nerve imaging
- Axial loading MRI: Dynamic assessment

*Electrodiagnostics:*
- EMG/NCS: Confirm radiculopathy, rule out peripheral neuropathy
- Timing: Optimal 3-6 weeks after symptom onset
- Fibrillation potentials indicate denervation
- Distinguishes acute from chronic changes

**Evidence Synthesis:**

*Conservative vs. surgical:*
- SPORT trial limitations: High crossover rates
- As-treated analysis favors surgery
- Intent-to-treat: Similar long-term outcomes
- Patient selection crucial for optimizing outcomes

*Injection therapies:*
- ESIs: Cochrane reviews show limited/inconsistent evidence
- Transforaminal vs. interlaminar: Transforaminal more targeted
- Particulate vs. non-particulate steroids: Safety considerations
- Diagnostic value may exceed therapeutic benefit

**Surgical Advances:**

*Minimally invasive techniques:*
- Tubular microdiscectomy: Comparable outcomes, possibly faster recovery
- Endoscopic discectomy: Learning curve, appropriate case selection
- Full-endoscopic transforaminal: Selected patients

*Outcomes data:*
- Success rates: 80-95% for leg pain relief
- Back pain improvement less predictable
- Patient satisfaction: 80-85%
- Return to work: 70-90%
- Recurrence requiring reoperation: 5-10%

**Predictors of Outcome:**

*Favorable:*
- Leg pain > back pain
- Dermatomal distribution
- Positive crossed SLR
- Large extruded/sequestered disc
- Shorter symptom duration

*Unfavorable:*
- Predominant axial pain
- Opioid use
- Workers' compensation
- Depression/anxiety
- Previous surgery

**Emerging Therapies:**

*Biologics:*
- PRP intradiscal: Limited evidence
- Stem cell therapy: Early trials, unproven
- Growth factors: Preclinical research

*Annular repair:*
- Annular closure devices: Mixed results
- Aim to reduce recurrence
- Barricaid device: Some evidence for recurrence reduction

*Novel approaches:*
- Pulsed radiofrequency: Limited evidence
- Intradiscal electrothermal therapy (IDET): Largely abandoned
- Percutaneous decompression: Nucleoplasty, dekompressor (limited evidence)

**Complex Cases:**

*Recurrent herniation:*
- Consider repeat discectomy vs. fusion
- Higher fusion rates with recurrence
- Outcomes inferior to primary surgery

*Far-lateral herniation:*
- Different surgical approach required
- Often missed on imaging
- Affects exiting nerve root

*Multilevel disease:*
- Correlate imaging with clinical findings
- Selective nerve root blocks may help localize
- Consider staged approach if multiple levels symptomatic

**Quality Metrics:**
- Patient-reported outcomes (ODI, VAS, SF-36)
- Return to work rates
- Reoperation rates
- Opioid prescribing patterns
- Patient satisfaction scores

**Shared Decision-Making:**
- Present natural history data
- Discuss surgery vs. conservative trade-offs
- Address patient goals and preferences
- Set realistic expectations
- Consider decision aids`,
      keyTerms: [
        { term: 'diffusion tensor imaging', definition: 'MRI technique assessing nerve fiber integrity and orientation' },
        { term: 'annular closure device', definition: 'Implant designed to reduce disc re-herniation after discectomy' },
        { term: 'full-endoscopic discectomy', definition: 'Minimally invasive technique using endoscope for disc removal' },
        { term: 'particulate steroid', definition: 'Steroid formulations that can aggregate and pose embolic risk' },
      ],
      clinicalNotes: `**Practice Points:**
- Surgery provides faster relief but similar long-term outcomes to conservative care
- Patient selection is the key to surgical success
- Large herniations often resorb spontaneously
- Psychosocial factors strongly influence outcomes
- Workers' compensation cases have worse surgical outcomes
- Recurrent herniation rates similar: open vs. minimally invasive techniques
- ESIs may help short-term but do not change natural history

**Red Flags for Urgent Surgery:**
- Cauda equina syndrome: Emergency decompression within 24-48 hours
- Significant or progressive motor weakness (MRC grade 3 or less)
- Rapidly progressive symptoms`,
    },
  },

  media: [
    {
      id: 'disc-herniation-diagram',
      type: 'diagram',
      filename: 'disc-herniation-types.svg',
      title: 'Types of Disc Herniation',
      description: 'Illustration of bulge, protrusion, extrusion, and sequestration',
    },
  ],
  citations: [
    {
      id: 'sport-trial',
      type: 'article',
      title: 'Surgical vs Nonoperative Treatment for Lumbar Disk Herniation',
      source: 'JAMA',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/203218',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-spine-anatomy', targetType: 'structure', relationship: 'related', label: 'Spine Anatomy' },
    { targetId: 'ortho-patient-sciatica', targetType: 'condition', relationship: 'related', label: 'Sciatica' },
    { targetId: 'ortho-patient-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['spine', 'disc', 'radiculopathy'],
    keywords: ['herniated disc', 'disc herniation', 'sciatica', 'radiculopathy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default herniatedDiscContent;
