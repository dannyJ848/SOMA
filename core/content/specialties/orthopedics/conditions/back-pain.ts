import { EducationalContent } from '../../../types';

export const backPainContent: EducationalContent = {
  id: 'ortho-back-pain',
  type: 'condition',
  name: 'Back Pain',
  alternateNames: ['Low back pain', 'LBP', 'Lumbago', 'Dorsalgia'],
  hpoId: 'HP:0003418',

  levels: {
    1: {
      level: 1,
      summary: 'Back pain is one of the most common health problems, usually caused by muscle strain or minor injuries, and often gets better on its own with time and self-care.',
      explanation: `Almost everyone will have back pain at some point in their life. The good news is that most back pain is not serious and will get better.

**Why Backs Hurt:**
- **Muscle strain**: Lifting something heavy or moving awkwardly
- **Poor posture**: Slouching at a desk or looking down at your phone
- **Lack of exercise**: Weak muscles don't support your spine well
- **Stress**: Can make muscles tight and painful
- **Normal aging**: Discs get less cushiony over time

**Red Flags - When to See a Doctor RIGHT AWAY:**
- Pain after a fall or accident
- Numbness or tingling in your legs
- Trouble controlling your bladder or bowels
- Fever with back pain
- Pain that wakes you up at night
- Unexplained weight loss

**Types of Back Pain:**

*Acute (Short-term):*
- Lasts less than 6 weeks
- Usually from strain or minor injury
- Gets better with rest and time

*Chronic (Long-term):*
- Lasts more than 3 months
- May need more investigation
- Usually manageable but may not completely go away

**What Helps:**
- Stay as active as possible (don't stay in bed!)
- Apply ice or heat
- Over-the-counter pain medication
- Gentle stretching
- Good posture
- Sleeping with a pillow between your knees

**Prevention:**
- Exercise regularly
- Strengthen your core muscles
- Lift with your legs, not your back
- Maintain a healthy weight
- Set up your workspace properly
- Take breaks from sitting`,
      keyTerms: [
        { term: 'back pain', definition: 'Pain felt in the back, most commonly in the lower back area' },
        { term: 'muscle strain', definition: 'When muscles are stretched or torn, causing pain' },
        { term: 'acute pain', definition: 'Pain that lasts a short time, usually less than 6 weeks' },
        { term: 'chronic pain', definition: 'Pain that lasts a long time, usually more than 3 months' },
      ],
      analogies: [
        'Your back muscles are like rubber bands - if you stretch them too far or too fast, they can get strained.',
        'Your spine is like a stack of blocks with cushions (discs) between them - good posture keeps the stack balanced.',
        'Back pain is like a warning light on your car dashboard - usually it\'s minor, but sometimes it means something needs attention.',
      ],
      examples: [
        'Someone who hurt their back moving furniture and feels better after a few days of rest.',
        'An office worker whose back aches at the end of the day from sitting too long.',
        'A gardener who bends over a lot and develops lower back stiffness.',
      ],
    },
    2: {
      level: 2,
      summary: 'Back pain is classified by duration and etiology, with most cases being mechanical (non-specific), while red flags help identify the minority requiring urgent evaluation for serious pathology.',
      explanation: `Back pain is the leading cause of disability worldwide. Understanding classification and red flags is essential for appropriate management.

**Epidemiology:**
- Lifetime prevalence: 60-80%
- Leading cause of disability globally
- Peak age: 35-55 years
- Recurrence common (50-80% recur within 1 year)

**Classification:**

*By Duration:*
- Acute: <6 weeks
- Subacute: 6-12 weeks
- Chronic: >12 weeks

*By Etiology:*
1. **Mechanical/Non-specific (85%)**: No specific identifiable cause
2. **Radiculopathy (5-10%)**: Nerve root involvement (sciatica)
3. **Specific spinal pathology (1-2%)**:
   - Fracture
   - Malignancy
   - Infection
   - Cauda equina syndrome
4. **Referred pain**: From other organs

**Red Flags:**

*For Cancer:*
- History of cancer
- Unexplained weight loss
- Age >50 or <20
- Pain at night/rest
- Failure to improve after 4-6 weeks

*For Infection:*
- Fever
- IV drug use
- Recent infection
- Immunocompromise

*For Cauda Equina Syndrome (Emergency!):*
- Saddle anesthesia
- Bladder/bowel dysfunction
- Bilateral leg weakness
- Progressive neurologic deficit

*For Fracture:*
- Trauma
- Osteoporosis
- Steroid use
- Age >70

**Clinical Evaluation:**

*History:*
- Character, location, radiation
- Timing and triggers
- Neurologic symptoms
- Red flags
- Functional impact
- Psychosocial factors

*Physical Exam:*
- Inspection (posture, gait)
- Range of motion
- Palpation
- Neurologic exam (if radicular symptoms)
- Straight leg raise test

**Common Causes:**

*Muscular:*
- Strain, spasm
- Usually improves in days to weeks
- No neurologic symptoms

*Disc-Related:*
- Degenerative disc disease
- Disc herniation (may cause radiculopathy)
- Discogenic pain

*Facet Joint:*
- Osteoarthritis
- Pain with extension
- Localized tenderness

*Spinal Stenosis:*
- Neurogenic claudication
- Improves with sitting/bending forward

**When to Image:**
- Red flags present
- Progressive neurologic deficit
- Failure to improve after 4-6 weeks of conservative treatment
- Imaging often NOT needed for acute uncomplicated back pain

**Initial Management:**
- Reassurance and education
- Stay active (avoid bed rest)
- NSAIDs, acetaminophen
- Heat/ice
- Physical therapy if not improving`,
      keyTerms: [
        { term: 'radiculopathy', definition: 'Pain, numbness, or weakness from nerve root compression', pronunciation: 'rad-ik-yoo-LOP-a-thee' },
        { term: 'sciatica', definition: 'Pain radiating down the leg along the sciatic nerve distribution' },
        { term: 'cauda equina syndrome', definition: 'Emergency from compression of nerve roots at the spine base, causing bladder/bowel/leg symptoms', pronunciation: 'KAW-da ee-KWY-na' },
        { term: 'straight leg raise', definition: 'Test for disc herniation; leg raised causes radicular pain' },
        { term: 'neurogenic claudication', definition: 'Leg symptoms with walking due to spinal stenosis, relieved by rest/flexion' },
        { term: 'red flags', definition: 'Warning signs suggesting serious underlying pathology requiring investigation' },
      ],
      analogies: [
        'Red flags are like smoke alarms - they don\'t always mean fire, but they tell you to investigate.',
        'Cauda equina syndrome is like a plumbing emergency - the longer you wait, the worse the damage.',
        'Non-specific back pain is like a cold - usually annoying but gets better on its own.',
      ],
    },
    3: {
      level: 3,
      summary: 'Back pain evaluation integrates pain mechanism classification (nociceptive, neuropathic, nociplastic), imaging correlation with clinical findings, and evidence-based treatment algorithms emphasizing active management.',
      explanation: `Evidence-based back pain management requires understanding pain mechanisms, appropriate imaging use, and avoiding overtreatment of normal age-related findings.

**Pain Mechanism Classification:**

*Nociceptive (Tissue-based):*
- Stimulus-response relationship
- Localized pain
- Examples: Muscle strain, facet arthropathy, fracture
- Responds to rest, NSAIDs, local treatments

*Neuropathic (Nerve-based):*
- Dermatomal distribution
- Burning, shooting, numbness
- Examples: Radiculopathy, post-surgical
- May need neuropathic agents (gabapentin, duloxetine)

*Nociplastic (Central Sensitization):*
- Pain disproportionate to tissue damage
- Widespread symptoms
- Associated with sleep disturbance, fatigue
- Psychological components
- Requires multidisciplinary approach

**Imaging Considerations:**

*When NOT to Image:*
- Acute LBP without red flags
- Non-specific chronic LBP without concerning features
- Imaging can lead to unnecessary interventions

*When to Image:*
- Red flags present
- Progressive neurologic deficit
- Candidate for surgical intervention
- Failure to improve with 6 weeks of conservative care

*Imaging Findings vs. Clinical Significance:*
- Disc degeneration: Present in 40% of asymptomatic 30-year-olds
- Disc bulge: Present in 30% of asymptomatic individuals
- Correlation with symptoms is key

**Clinical Syndromes:**

*Disc Herniation:*
- Radicular pain (leg > back)
- Dermatomal sensory changes
- Myotomal weakness
- Positive SLR (sensitivity 91%, specificity 26%)
- Most improve without surgery (80-90%)

*Lumbar Spinal Stenosis:*
- Neurogenic claudication: Pain/weakness with walking
- Improved with forward flexion (shopping cart sign)
- Wide-based gait
- MRI gold standard for diagnosis

*Spondylolisthesis:*
- Isthmic (pars defect) vs. degenerative
- May be asymptomatic
- Symptoms from stenosis or instability

*Facet Joint Syndrome:*
- Extension-based pain
- Localized paraspinal tenderness
- Referral patterns (buttock, thigh)
- Diagnosis of exclusion (diagnostic blocks)

*Sacroiliac Joint Pain:*
- Posterior hip/buttock pain
- Positive provocative tests (3+ of 6)
- Common post-pregnancy, arthritis
- Diagnostic injection gold standard

**Evidence-Based Treatment:**

*Acute LBP:*
- First-line: Education, reassurance, stay active
- NSAIDs (short course)
- Muscle relaxants (limited evidence)
- Avoid: Bed rest, opioids, early imaging

*Chronic LBP:*
- Exercise therapy (strongest evidence)
- Psychological therapies (CBT)
- Multidisciplinary rehabilitation
- Medications: NSAIDs, duloxetine
- Avoid: Long-term opioids

*Interventional Options:*
- Epidural steroid injections (radiculopathy)
- Facet joint interventions
- Sacroiliac joint injections
- Radiofrequency ablation

*Surgical Indications:*
- Cauda equina syndrome (emergency)
- Progressive neurologic deficit
- Refractory radiculopathy with correlation
- Unstable spondylolisthesis
- Spinal stenosis failing conservative care`,
      keyTerms: [
        { term: 'nociplastic pain', definition: 'Pain from altered nociceptive function without clear tissue or nerve damage; central sensitization' },
        { term: 'dermatomal', definition: 'Following the sensory distribution of a specific spinal nerve root' },
        { term: 'shopping cart sign', definition: 'Lumbar stenosis symptom relief with forward flexion (leaning on shopping cart)' },
        { term: 'radiofrequency ablation', definition: 'Procedure using heat to interrupt nerve signals for pain relief' },
        { term: 'pars defect', definition: 'Fracture of pars interarticularis causing isthmic spondylolisthesis' },
        { term: 'multidisciplinary rehabilitation', definition: 'Combined physical, psychological, and educational treatment for chronic pain' },
      ],
      clinicalNotes: 'Opioids are NOT first-line for chronic LBP and should be avoided when possible. NSAIDs have better evidence than acetaminophen for LBP. Epidural injections may provide short-term relief for radiculopathy but do not change long-term outcomes. Imaging findings often do not correlate with symptoms; treat the patient, not the MRI.',
    },
    4: {
      level: 4,
      summary: 'Advanced back pain management integrates biopsychosocial assessment, targeted procedural diagnostics, surgical decision-making algorithms, and understanding of failed back surgery syndrome prevention and management.',
      explanation: `Comprehensive back pain care requires integration of biological, psychological, and social factors with appropriate use of interventional and surgical options.

**Biopsychosocial Model:**

*Biological Factors:*
- Nociceptive input
- Structural pathology
- Inflammatory mediators
- Genetic predisposition

*Psychological Factors:*
- Fear-avoidance beliefs
- Catastrophizing
- Depression, anxiety
- Expectations and self-efficacy

*Social Factors:*
- Work demands and satisfaction
- Compensation status
- Social support
- Cultural factors

*Yellow Flags (Psychosocial Risk):*
- Belief that pain = harm
- Fear-avoidance behavior
- Low mood, social withdrawal
- Expectation of passive treatment
- Workplace dissatisfaction

**Diagnostic Blocks:**

*Facet Joint:*
- Medial branch blocks (diagnostic)
- Double blocks improve specificity
- If positive: Radiofrequency ablation

*Sacroiliac Joint:*
- Intra-articular injection
- False positive rate high
- Confirm with controlled blocks

*Discography:*
- Controversial
- Concordant pain reproduction
- Only if surgical candidate
- Risk of disc degeneration acceleration

**Surgical Decision-Making:**

*Disc Herniation Surgery:*
- Indications:
  - Progressive neurologic deficit
  - Cauda equina syndrome
  - Refractory radiculopathy (>6-12 weeks)
- Microdiscectomy standard
- 85-90% success for appropriate candidates
- Smoking, depression predict worse outcomes

*Spinal Stenosis Surgery:*
- Laminectomy standard
- Consider fusion if:
  - Instability
  - Spondylolisthesis
  - Scoliosis
- SPORT trial: Surgery better at 4 years (crossover complicates)

*Fusion Indications:*
- Instability
- Deformity correction
- After decompression with listhesis
- Discogenic pain (controversial)

*Emerging Techniques:*
- Endoscopic discectomy
- Minimally invasive fusion
- Motion-preserving surgery (disc replacement)

**Failed Back Surgery Syndrome (FBSS):**

*Definition:*
- Persistent pain after spine surgery
- Prevalence: 10-40% of lumbar surgery patients

*Causes:*
- Wrong diagnosis initially
- Wrong level surgery
- Incomplete decompression
- Recurrent pathology
- Adjacent segment disease
- Epidural fibrosis
- Central sensitization

*Evaluation:*
- Review original indication
- Imaging for structural cause
- Psychological assessment
- Functional evaluation

*Management:*
- Multidisciplinary approach
- Physical rehabilitation
- Psychological intervention
- Spinal cord stimulation
- Revision surgery (selected cases)

**Spinal Cord Stimulation:**

*Mechanism:*
- Modulates pain signaling
- Gate control theory
- Emerging: High-frequency, burst stimulation

*Indications:*
- FBSS with radicular component
- Complex regional pain syndrome
- Peripheral neuropathy

*Trial before permanent:*
- 50% pain reduction threshold

**Outcomes and Prognosis:**

*Acute LBP:*
- 90% improve within 6 weeks
- Recurrence common (30-50% within 1 year)

*Chronic LBP:*
- Complete resolution uncommon
- Focus on function and quality of life
- Multidisciplinary approach most effective

*Predictors of Poor Outcome:*
- Longer duration before treatment
- Higher baseline disability
- Fear-avoidance beliefs
- Depression
- Workers' compensation
- Previous spine surgery`,
      keyTerms: [
        { term: 'fear-avoidance', definition: 'Behavior avoiding activity due to fear of pain or reinjury, leading to disability' },
        { term: 'yellow flags', definition: 'Psychosocial risk factors predicting chronicity and disability in back pain' },
        { term: 'FBSS', definition: 'Failed Back Surgery Syndrome; persistent pain following lumbar spine surgery' },
        { term: 'adjacent segment disease', definition: 'Degeneration at spinal levels next to a fusion, potentially requiring additional surgery' },
        { term: 'spinal cord stimulation', definition: 'Implanted device delivering electrical pulses to spinal cord for pain modulation' },
        { term: 'discography', definition: 'Diagnostic test injecting disc and assessing pain response; controversial' },
      ],
      clinicalNotes: 'Smoking cessation essential before spine surgery (fusion failure risk). Workers compensation patients have worse surgical outcomes; not necessarily malingering but complex psychosocial factors. Multidisciplinary programs are cost-effective for chronic LBP. Spinal cord stimulation: Trial first, 50% pain reduction predicts success. Adjacent segment disease occurs in ~3% per year after lumbar fusion.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art back pain research encompasses precision phenotyping, mechanistic imaging biomarkers, regenerative therapies, and integrated care models with emphasis on preventing chronicity and optimizing surgical outcomes.',
      explanation: `Contemporary spine research focuses on personalized approaches, biological therapies, and systems-level care optimization.

**Precision Medicine Approaches:**

*Phenotyping:*
- Subgroup classification
- Treatment-responder matching
- Biomarker-guided therapy
- Personalized rehabilitation

*Stratified Care:*
- STarT Back Tool: Low/medium/high risk
- Risk-matched treatment intensity
- Cost-effective outcomes
- Implementation studies ongoing

*Genetics:*
- Disc degeneration heritability: 50-70%
- Pain sensitivity variants
- Pharmacogenomics for analgesics
- GWAS findings emerging

**Advanced Imaging:**

*Quantitative MRI:*
- T2 mapping of disc hydration
- T1rho for proteoglycan content
- Diffusion-weighted imaging
- Spectroscopy for disc metabolism

*Functional Imaging:*
- fMRI for central pain processing
- Central sensitization signatures
- Treatment response prediction

*Novel Techniques:*
- UTE MRI for disc structure
- PET for inflammation
- Advanced diffusion for nerve integrity

**Regenerative Therapies:**

*Cell-Based:*
- Intradiscal MSC injection
- Nucleus pulposus cell therapy
- iPSC-derived cells
- Mechanism: Paracrine vs. regeneration

*Biologics:*
- Growth factor delivery
- PRP (variable evidence)
- Intradiscal biologics (trials ongoing)

*Gene Therapy:*
- BMP gene transfer
- Anti-catabolic approaches
- Challenge: Disc avascular environment

*Clinical Trial Status:*
- Phase II trials for MSC injection
- Mixed results to date
- Patient selection critical

**Minimally Invasive Advances:**

*Endoscopic Spine Surgery:*
- Transforaminal approach
- Interlaminar approach
- Learning curve considerations
- Outcomes improving

*Robotic and Navigation:*
- Pedicle screw accuracy
- Minimally invasive techniques
- Real-time imaging integration

*Motion Preservation:*
- Lumbar disc arthroplasty
- Interspinous spacers
- Limited long-term data
- Appropriate patient selection

**Integrated Care Models:**

*Clinical Pathways:*
- Standardized evaluation
- Avoid unnecessary imaging
- Early physical therapy
- Stratified intervention

*Multidisciplinary Teams:*
- Primary care
- Physical therapy
- Pain psychology
- Interventional pain
- Spine surgery

*Value-Based Care:*
- Episode-based payment
- Outcome measures
- Patient-reported outcomes
- Cost-effectiveness focus

**Prevention and Public Health:**

*Workplace Interventions:*
- Ergonomic modifications
- Exercise programs
- Psychosocial interventions
- Return-to-work programs

*Population Health:*
- Obesity reduction
- Physical activity promotion
- Opioid reduction initiatives
- Imaging appropriateness

**Outcome Measures:**

*Patient-Reported:*
- ODI (Oswestry Disability Index)
- RMDQ (Roland-Morris Disability Questionnaire)
- NRS pain scores
- EQ-5D quality of life

*MCID Values:*
- ODI: 10-15 points
- NRS: 2 points
- Guides meaningful improvement

*Composite Outcomes:*
- PROMIS measures
- Functional metrics
- Return to work
- Medication use

**Future Directions:**

*Digital Health:*
- Wearable activity monitoring
- Smartphone-based assessment
- Remote physical therapy
- AI-assisted triage

*Machine Learning:*
- Outcome prediction
- Treatment selection
- Image analysis
- Risk stratification

*Neuroscience Integration:*
- Brain-based targets
- Neuromodulation advances
- Mind-body interventions
- Pain processing understanding`,
      keyTerms: [
        { term: 'STarT Back', definition: 'Stratified care tool categorizing LBP patients by risk of chronicity to match treatment intensity' },
        { term: 'UTE MRI', definition: 'Ultrashort echo time MRI; visualizes short T2 tissues like disc annulus' },
        { term: 'ODI', definition: 'Oswestry Disability Index; standard patient-reported outcome for spine disability' },
        { term: 'MCID', definition: 'Minimal Clinically Important Difference; smallest improvement that is meaningful to patients' },
        { term: 'endoscopic discectomy', definition: 'Minimally invasive disc removal using small scope and specialized instruments' },
        { term: 'intradiscal therapy', definition: 'Injection-based treatments delivered directly into the intervertebral disc' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Cauda equina syndrome: Surgical emergency, decompress within 48 hours
- Imaging for acute LBP without red flags is not recommended
- Disc herniation: 80-90% improve without surgery
- Fusion for isolated discogenic pain: Limited evidence
- Opioids are not first-line for chronic LBP

**Surgical Considerations:**
- SPORT trial: Surgery faster improvement but outcomes converge (high crossover rate)
- Smoking is modifiable risk factor for fusion nonunion
- Adjacent segment disease: ~3% per year, consider motion preservation in young patients
- Minimally invasive approaches: Similar outcomes, potentially less tissue damage

**Emerging Practice:**
- Stratified care based on risk assessment
- Regenerative therapies: Promise but limited current evidence
- Digital health integration for chronic pain management
- Multidisciplinary care for high-risk patients`,
    },
  },

  media: [
    {
      id: 'back-pain-red-flags',
      type: 'diagram',
      filename: 'back-pain-red-flags.svg',
      title: 'Red Flags in Back Pain',
      description: 'Warning signs requiring urgent evaluation',
    },
    {
      id: 'dermatomal-map',
      type: 'diagram',
      filename: 'lumbar-dermatomes.svg',
      title: 'Lumbar Dermatomal Map',
      description: 'Sensory distribution of L3-S1 nerve roots',
    },
  ],
  citations: [
    {
      id: 'hartvigsen-2018',
      type: 'article',
      title: 'What low back pain is and why we need to pay attention',
      authors: ['Hartvigsen J', 'et al.'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(18)30480-X',
      license: 'Copyright Elsevier',
    },
    {
      id: 'acr-imaging-guidelines',
      type: 'article',
      title: 'ACR Appropriateness Criteria: Low Back Pain',
      source: 'American College of Radiology',
      url: 'https://acsearch.acr.org/docs/69483/Narrative/',
      license: 'Copyright ACR',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-spinal-anatomy', targetType: 'structure', relationship: 'related', label: 'Spinal Anatomy' },
    { targetId: 'ortho-spinal-conditions', targetType: 'condition', relationship: 'sibling', label: 'Spinal Conditions' },
    { targetId: 'ortho-physical-therapy', targetType: 'topic', relationship: 'related', label: 'Physical Therapy' },
  ],
  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['orthopedics', 'spine', 'pain management', 'primary care'],
    keywords: ['back pain', 'low back pain', 'sciatica', 'radiculopathy', 'stenosis'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'neurology'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default backPainContent;
