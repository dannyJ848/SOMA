import { EducationalContent } from '../../types';

export const backPainContent: EducationalContent = {
  id: 'ortho-patient-back-pain',
  type: 'condition',
  name: 'Back Pain',
  alternateNames: ['Low back pain', 'Lumbar pain', 'Backache'],

  levels: {
    1: {
      level: 1,
      summary: 'Back pain is very common and usually gets better on its own within a few weeks with simple treatments like rest, ice, and gentle movement.',
      explanation: `Almost everyone will have back pain at some point in their life. The good news is that most back pain is not serious and will get better with time and simple care.

**Common Causes:**
- Muscle strain from lifting or twisting
- Poor posture (especially sitting at a desk)
- Being overweight
- Not exercising enough
- Sleeping on a worn-out mattress

**What Helps:**
- Stay active (bed rest can make it worse!)
- Use ice for the first few days, then heat
- Over-the-counter pain relievers
- Gentle stretching
- Good posture

**When to See a Doctor:**
- Pain that doesn't improve after 2 weeks
- Pain that travels down your leg
- Numbness or tingling in your legs
- Trouble controlling your bladder or bowels (go immediately!)
- Pain after a fall or injury

**Prevention Tips:**
- Exercise regularly to strengthen back muscles
- Maintain a healthy weight
- Lift with your legs, not your back
- Take breaks when sitting for long periods
- Use good posture`,
      keyTerms: [
        { term: 'strain', definition: 'A muscle that has been pulled or torn from overuse' },
        { term: 'posture', definition: 'The way you hold your body when sitting or standing' },
        { term: 'chronic', definition: 'Pain that lasts more than 3 months' },
      ],
      analogies: [
        'Your spine is like a stack of building blocks with cushions in between - when the muscles around it are weak, the stack becomes unstable.',
        'Back muscles are like guy wires on a tent - they need to be strong to keep everything in place.',
      ],
      examples: [
        'Lifting a heavy box with a bent back can strain the muscles.',
        'Sitting hunched over a computer all day can cause back pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Back pain affects the lumbar spine and surrounding muscles, with most cases being mechanical in nature and responding well to conservative treatment including activity modification, physical therapy, and time.',
      explanation: `Back pain is one of the most common reasons people see a doctor. Understanding the types and causes helps guide appropriate treatment.

**Types of Back Pain:**
- **Acute**: Lasts less than 6 weeks
- **Subacute**: Lasts 6-12 weeks
- **Chronic**: Lasts more than 12 weeks

**Common Causes:**
- **Muscle strain/spasm**: Most common, from overuse or injury
- **Disc problems**: Bulging or herniated discs pressing on nerves
- **Arthritis**: Wear and tear of spinal joints
- **Spinal stenosis**: Narrowing of the spinal canal
- **Poor posture**: Prolonged positions that stress the spine

**Red Flags Requiring Immediate Care:**
- Loss of bladder or bowel control
- Progressive leg weakness
- Severe pain after trauma
- Unexplained weight loss with back pain
- Pain that wakes you from sleep

**Treatment Approach:**
1. **First 2 weeks**: Ice/heat, gentle activity, OTC pain relievers
2. **2-6 weeks**: Physical therapy, continued activity
3. **Beyond 6 weeks**: Further evaluation if not improving

**Diagnostic Tests (when needed):**
- X-rays: Show bone structure and alignment
- MRI: Shows soft tissues including discs and nerves
- CT scan: Detailed bone imaging

**Prevention:**
- Core strengthening exercises
- Proper lifting technique (bend knees, keep back straight)
- Ergonomic workspace setup
- Regular breaks from sitting
- Maintain healthy weight`,
      keyTerms: [
        { term: 'lumbar spine', definition: 'The lower back region consisting of 5 vertebrae' },
        { term: 'mechanical back pain', definition: 'Pain caused by the structures of the spine (muscles, discs, joints) rather than disease' },
        { term: 'radiculopathy', definition: 'Pain that travels down the leg due to nerve irritation', pronunciation: 'rad-ik-yoo-LOP-uh-thee' },
        { term: 'core muscles', definition: 'Deep muscles of the abdomen and back that stabilize the spine' },
      ],
      analogies: [
        'Spinal discs are like jelly donuts - the soft center can push out if the outer layer weakens.',
        'Core muscles work like a natural back brace, supporting the spine from all sides.',
      ],
    },
    3: {
      level: 3,
      summary: 'Low back pain involves complex interactions between spinal structures, neural elements, and psychosocial factors, with evidence-based treatment emphasizing active approaches and avoiding unnecessary imaging or interventions.',
      explanation: `Low back pain (LBP) is a leading cause of disability worldwide. Modern management emphasizes a biopsychosocial approach.

**Anatomy Review:**
- Lumbar vertebrae (L1-L5) and sacrum
- Intervertebral discs with nucleus pulposus and annulus fibrosus
- Facet joints (zygapophyseal joints)
- Paraspinal muscles, ligaments
- Spinal cord ends at L1-L2; cauda equina below

**Pain Generators:**
- Disc (discogenic pain): Internal disc disruption, herniation
- Facet joints: Arthropathy, inflammation
- Sacroiliac joint: Dysfunction, inflammation
- Muscles/ligaments: Strain, spasm
- Neural elements: Radiculopathy, central sensitization

**Clinical Classification:**
1. **Nonspecific LBP** (85-90%): No identifiable pathoanatomic cause
2. **Radiculopathy** (~5%): Nerve root compression with dermatomal symptoms
3. **Serious spinal pathology** (<1%): Fracture, tumor, infection, cauda equina

**Red Flags:**
- Cauda equina: Saddle anesthesia, urinary retention, bilateral weakness
- Malignancy: History of cancer, unexplained weight loss, age >50
- Infection: Fever, IV drug use, immunosuppression
- Fracture: Significant trauma, osteoporosis, steroid use

**Evidence-Based Management:**

*Acute LBP:*
- Education and reassurance (most important)
- Avoid bed rest; stay active
- NSAIDs or acetaminophen for pain
- Heat may help
- Imaging NOT indicated without red flags

*Chronic LBP:*
- Exercise therapy (most evidence)
- Cognitive behavioral therapy
- Multidisciplinary rehabilitation
- Medications: NSAIDs, duloxetine; avoid opioids long-term
- Consider spinal manipulation, massage
- Imaging if surgery being considered

**Prognosis:**
- 90% of acute LBP resolves within 6 weeks
- 2-7% develop chronic LBP
- Psychosocial factors predict chronicity more than imaging findings`,
      keyTerms: [
        { term: 'biopsychosocial model', definition: 'Framework recognizing biological, psychological, and social factors all contribute to pain' },
        { term: 'cauda equina', definition: 'Bundle of nerve roots at the end of the spinal cord, below L1-L2', pronunciation: 'KAW-duh eh-KWY-nuh' },
        { term: 'radiculopathy', definition: 'Nerve root dysfunction causing pain, weakness, or sensory changes in a dermatomal pattern' },
        { term: 'central sensitization', definition: 'Amplification of pain signals within the central nervous system' },
        { term: 'yellow flags', definition: 'Psychosocial risk factors for developing chronic pain (fear-avoidance, catastrophizing)' },
      ],
      clinicalNotes: 'Imaging findings (disc bulges, degeneration) are common in asymptomatic individuals and often do not correlate with symptoms. Over-reliance on imaging can lead to unnecessary interventions and worse outcomes.',
    },
    4: {
      level: 4,
      summary: 'Management of low back pain requires integration of clinical assessment, appropriate imaging, and evidence-based interventions while addressing psychosocial factors that influence pain persistence and functional outcomes.',
      explanation: `Advanced management of LBP requires understanding pain mechanisms, appropriate use of diagnostics, and multimodal treatment strategies.

**Pain Mechanisms:**

*Nociceptive:*
- Tissue damage activating peripheral nociceptors
- Inflammatory mediators sensitize nerve endings
- Usually correlates with tissue pathology

*Neuropathic:*
- Nerve damage or dysfunction
- Radicular pain: Sharp, shooting, dermatomal
- Characterized by allodynia, hyperalgesia

*Nociplastic:*
- Altered nociceptive function without tissue damage
- Central sensitization
- Associated with chronic widespread pain
- Poor correlation with imaging

**Physical Examination:**
- Observation: Posture, gait, guarding
- Range of motion: Flexion, extension, lateral bending
- Palpation: Tenderness, spasm
- Neurological: Strength, sensation, reflexes
- Special tests: SLR, femoral stretch, FABER

**Imaging Guidelines:**
- No routine imaging for nonspecific LBP
- Indications: Red flags, radiculopathy not responding to conservative care, surgical candidacy
- MRI preferred for soft tissue/neural assessment
- X-ray for bony pathology, instability
- Findings must correlate with clinical presentation

**Interventional Options:**
- Epidural steroid injections: Short-term relief for radiculopathy
- Facet joint interventions: Diagnostic blocks, radiofrequency ablation
- SI joint injections: Diagnostic and therapeutic
- Trigger point injections: Limited evidence

**Surgical Indications:**
- Cauda equina syndrome (emergency)
- Progressive neurological deficit
- Radiculopathy with correlating imaging, failed 6-12 weeks conservative care
- Spinal instability
- Severe stenosis limiting function

**Rehabilitation Principles:**
- Pain education decreases fear-avoidance
- Graded exercise exposure
- Functional restoration goals
- Address sleep, mood, social factors
- Return to work as able

**Pharmacology:**
- First-line: NSAIDs, acetaminophen
- Neuropathic: Gabapentinoids, duloxetine, TCAs
- Muscle relaxants: Short-term use only
- Opioids: Avoid for chronic LBP; limited short-term if necessary`,
      keyTerms: [
        { term: 'nociplastic pain', definition: 'Pain arising from altered nociceptive function without clear tissue damage' },
        { term: 'allodynia', definition: 'Pain from a stimulus that does not normally cause pain' },
        { term: 'straight leg raise (SLR)', definition: 'Test for lumbar radiculopathy; positive if leg pain reproduced 30-70 degrees' },
        { term: 'radiofrequency ablation', definition: 'Procedure using heat to disrupt pain-transmitting nerves' },
        { term: 'fear-avoidance', definition: 'Behavioral pattern of avoiding activity due to fear of pain/reinjury' },
      ],
      clinicalNotes: 'The STarT Back Tool and similar instruments can stratify patients by risk of chronicity and guide treatment intensity. High-risk patients benefit from early psychological intervention combined with physical therapy.',
    },
    5: {
      level: 5,
      summary: 'Contemporary low back pain management integrates precision diagnostics, targeted interventions, and personalized rehabilitation while addressing the complex interplay of structural, neurophysiological, and psychosocial factors.',
      explanation: `Expert-level LBP management requires synthesis of current evidence, clinical judgment, and individualized care planning.

**Diagnostic Precision:**

*Advanced Imaging:*
- MRI sequences: T2 for disc hydration, STIR for edema, T1 for marrow
- Modic changes: Type 1 (edema) may predict discogenic pain
- High-intensity zones: Annular tears
- Pfirrmann grading: Disc degeneration severity
- Functional imaging: Dynamic/weight-bearing studies

*Diagnostic Injections:*
- Discography: Controversial; provocation testing
- Medial branch blocks: Facet pain confirmation (>80% relief for diagnosis)
- SI joint blocks: Comparative local anesthetic blocks
- Selective nerve root blocks: Identify symptomatic level

**Evidence Synthesis:**

*Exercise:*
- Motor control exercises effective for recurrent LBP
- No single exercise type superior
- Adherence more important than specific type
- Yoga, Pilates show moderate evidence

*Psychological Interventions:*
- CBT effective for chronic LBP
- Acceptance and commitment therapy (ACT) emerging evidence
- Pain neuroscience education reduces disability
- Multidisciplinary programs: Best evidence for chronic LBP

*Manual Therapy:*
- Spinal manipulation: Short-term benefit, no long-term advantage
- Massage: Short-term relief
- Combine with active approaches

*Interventional:*
- Epidural steroids: NNT ~6 for short-term radicular pain relief
- Facet RFA: 50% pain reduction in 50-60% of selected patients
- Regenerative therapies: PRP, stem cells - limited quality evidence

**Surgical Considerations:**

*Fusion Indications:*
- Instability (spondylolisthesis with motion)
- Deformity correction
- Following decompression where instability anticipated
- Highly selected discogenic pain (controversial)

*Outcomes Data:*
- Discectomy for herniation: Good outcomes in 80-90%
- Fusion for degenerative conditions: 50-70% satisfaction
- Adjacent segment disease: 2-3% per year
- Revision rates: 10-20% at 10 years

**Emerging Approaches:**
- Phenotyping: Classify by mechanism for targeted treatment
- Biomarkers: MCP-1, IL-6 for disc degeneration
- Stem cell therapy: Early clinical trials
- Intradiscal therapies: Biologics, annular repair
- Digital therapeutics: App-based rehabilitation

**Prevention Research:**
- Exercise reduces LBP incidence (RR 0.65)
- Education alone not protective
- Lumbar supports: No evidence for primary prevention
- Ergonomic interventions: Limited evidence

**Cost-Effectiveness:**
- Stepped care models cost-effective
- Surgery cost-effective in selected populations
- Opioids not cost-effective for chronic LBP
- Multidisciplinary care cost-effective for chronic LBP

**Quality Metrics:**
- Opioid prescribing rates
- Imaging appropriateness
- Time to physical therapy
- Patient-reported outcomes (ODI, RMDQ)
- Return to work rates`,
      keyTerms: [
        { term: 'Modic changes', definition: 'MRI signal changes in vertebral endplates associated with disc degeneration' },
        { term: 'Oswestry Disability Index (ODI)', definition: 'Validated questionnaire measuring low back pain disability' },
        { term: 'phenotyping', definition: 'Classifying patients by pain mechanism to guide targeted treatment' },
        { term: 'motor control exercises', definition: 'Exercises targeting deep stabilizing muscles (multifidus, transverse abdominis)' },
        { term: 'NNT', definition: 'Number needed to treat; patients needed to treat for one to benefit' },
      ],
      clinicalNotes: `**Evidence-Based Practice Points:**
- Early PT access associated with lower costs and opioid use
- MRI within 6 weeks of onset associated with worse outcomes (nocebo effect)
- Opioids not superior to NSAIDs for acute LBP in trials
- Multidisciplinary programs reduce disability more than single interventions
- Patient expectations strongly predict outcomes
- Surgery for nonspecific LBP not supported by evidence

**Shared Decision-Making:**
- Present evidence on natural history (favorable)
- Discuss imaging limitations and risks of labeling
- Involve patient in treatment choices
- Set realistic functional goals
- Address return-to-work planning early`,
    },
  },

  media: [
    {
      id: 'lumbar-spine-anatomy',
      type: 'diagram',
      filename: 'lumbar-spine-anatomy.svg',
      title: 'Lumbar Spine Anatomy',
      description: 'Basic anatomy of the lower spine',
    },
  ],
  citations: [
    {
      id: 'acp-lbp-guidelines',
      type: 'article',
      title: 'Noninvasive Treatments for Acute, Subacute, and Chronic Low Back Pain',
      authors: ['Qaseem A', 'Wilt TJ', 'McLean RM', 'Forciea MA'],
      source: 'Annals of Internal Medicine',
      url: 'https://www.acpjournals.org/doi/10.7326/M16-2367',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-spine-anatomy', targetType: 'structure', relationship: 'related', label: 'Spine Anatomy' },
    { targetId: 'ortho-patient-herniated-disc', targetType: 'condition', relationship: 'related', label: 'Herniated Disc' },
    { targetId: 'ortho-patient-sciatica', targetType: 'condition', relationship: 'related', label: 'Sciatica' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['spine', 'pain', 'rehabilitation'],
    keywords: ['back pain', 'lumbar', 'spine', 'conservative treatment'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default backPainContent;
