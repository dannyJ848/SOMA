import { EducationalContent } from '../../types';

export const spineSurgeryDecisionContent: EducationalContent = {
  id: 'ortho-patient-spine-surgery-decision',
  type: 'topic',
  name: 'When Spine Surgery Is Needed',
  alternateNames: ['Spine surgery decision', 'Do I need back surgery', 'Surgical indications spine'],

  levels: {
    1: {
      level: 1,
      summary: 'Most back and neck problems get better without surgery. Surgery is usually only needed when other treatments have failed or when there are serious warning signs.',
      explanation: `The good news is that most spine problems do NOT require surgery. Your body has an amazing ability to heal, and most back and neck pain improves with time and simple treatments.

**Surgery Is Usually NOT the First Choice:**
- 90% of back problems improve without surgery
- Physical therapy, exercise, and time are often enough
- Surgery is typically considered only after other treatments have been tried

**When Surgery Might Be Needed:**

*Emergencies (need immediate care):*
- Loss of bladder or bowel control
- Severe or rapidly worsening weakness in legs
- Numbness in the groin area (saddle anesthesia)
- Severe trauma with spine injury

*After Conservative Treatment Fails:*
- Pain that doesn't improve after 6-12 weeks of proper treatment
- Symptoms that significantly affect your daily life
- Nerve symptoms (numbness, weakness) that persist

**Questions to Ask Your Doctor:**
- What are all my treatment options?
- What happens if I don't have surgery?
- What are the risks of surgery?
- What results can I realistically expect?
- How long is recovery?

**Things Surgery Can and Cannot Do:**

*Can help:*
- Relieve pressure on nerves
- Stabilize an unstable spine
- Correct certain deformities

*Cannot guarantee:*
- Complete pain relief
- Return to all activities
- No future spine problems

**Making the Decision:**
- Get all the facts from your doctor
- Consider a second opinion for major surgery
- Think about your goals and quality of life
- Remember: You have time to decide (except in emergencies)`,
      keyTerms: [
        { term: 'conservative treatment', definition: 'Non-surgical treatments like physical therapy, medications, and injections' },
        { term: 'decompression', definition: 'Surgery to relieve pressure on nerves' },
        { term: 'fusion', definition: 'Surgery to connect two or more vertebrae together' },
      ],
      analogies: [
        'Conservative treatment is like physical therapy for a sprained ankle - most heal without surgery.',
        'Spine surgery is like the last tool in the toolbox - you try other tools first.',
      ],
      examples: [
        'Someone with back pain for 2 weeks should try physical therapy before considering surgery.',
        'Someone who suddenly cannot control their bladder needs emergency surgery evaluation.',
      ],
    },
    2: {
      level: 2,
      summary: 'Spine surgery indications include emergency conditions (cauda equina, progressive deficit), failed conservative management of 6-12 weeks for radiculopathy or stenosis, and specific instability or deformity patterns.',
      explanation: `Understanding when surgery is appropriate helps patients and clinicians make informed decisions together.

**Emergency Surgical Indications:**

*Cauda Equina Syndrome:*
- Bladder dysfunction (retention or incontinence)
- Saddle anesthesia (numbness around genitals/anus)
- Bilateral leg symptoms
- Progressive weakness
- Requires surgery within 24-48 hours

*Other Emergencies:*
- Progressive neurological deficit
- Spinal cord compression with myelopathy progression
- Unstable spinal fracture
- Spinal infection with neurological involvement

**Elective Surgical Indications:**

*Disc Herniation:*
- Failed 6-12 weeks conservative care
- Radiculopathy with correlating MRI findings
- Significant functional impairment
- Patient preference after informed consent

*Spinal Stenosis:*
- Neurogenic claudication limiting function
- Failed conservative management
- Progressive symptoms
- Surgery often more effective than continued conservative care

*Spondylolisthesis:*
- Symptomatic instability
- Progressive slip
- Neurological symptoms
- Failed conservative management

**When Surgery Is Less Likely to Help:**

- Predominant back pain without leg symptoms
- Symptoms that don't match imaging findings
- Chronic pain syndrome without clear structural cause
- Significant psychological factors unaddressed
- Secondary gain issues

**Decision-Making Process:**

1. Confirm diagnosis with imaging-clinical correlation
2. Trial of appropriate conservative care (6-12 weeks)
3. Discuss surgical and non-surgical options
4. Review expected outcomes and risks
5. Consider patient preferences and goals
6. Shared decision-making

**Success Factors:**
- Clear surgical target (correlating imaging and symptoms)
- Realistic expectations
- Motivated patient
- Optimized medical conditions
- Psychological readiness`,
      keyTerms: [
        { term: 'cauda equina syndrome', definition: 'Emergency condition where nerves at end of spinal cord are severely compressed', pronunciation: 'KAW-duh eh-KWY-nuh' },
        { term: 'radiculopathy', definition: 'Nerve root problem causing pain, numbness, or weakness in arm or leg' },
        { term: 'spondylolisthesis', definition: 'Condition where one vertebra slips forward over another', pronunciation: 'spon-dih-lo-lis-THEE-sis' },
        { term: 'myelopathy', definition: 'Spinal cord dysfunction from compression' },
      ],
      analogies: [
        'Cauda equina syndrome is like a kinked hose blocking multiple streams - it needs immediate attention.',
        'Elective surgery is like planned home renovation - you have time to prepare and decide.',
      ],
    },
    3: {
      level: 3,
      summary: 'Surgical decision-making for spine pathology requires integration of clinical symptoms, imaging correlation, failed conservative management, and assessment of patient-specific factors predicting outcomes.',
      explanation: `Evidence-based surgical indications balance potential benefits against risks, considering natural history and patient factors.

**Absolute Surgical Indications:**

*Cauda Equina Syndrome:*
- Urinary retention or incontinence
- Fecal incontinence
- Saddle anesthesia
- Bilateral motor weakness
- Timing: Surgery within 24-48 hours improves outcomes

*Progressive Neurological Deficit:*
- Worsening motor weakness (MRC grade 3 or below)
- Rapid progression suggests need for urgent decompression
- Document progression with serial exams

*Cervical Myelopathy:*
- Progressive spinal cord dysfunction
- Gait instability, hand clumsiness
- Upper motor neuron signs
- Generally recommend surgery for moderate-severe

**Relative Surgical Indications:**

*Lumbar Radiculopathy/Disc Herniation:*
- Failed 6-12 weeks conservative care
- Correlating imaging findings
- Significant functional impairment
- SPORT trial: Surgery faster improvement, similar long-term outcomes

*Lumbar Stenosis:*
- Neurogenic claudication limiting function
- Walking distance significantly impaired
- Failed conservative management
- SPORT trial: Surgery superior to conservative at 4 years

*Degenerative Spondylolisthesis:*
- With stenosis: Decompression +/- fusion
- Instability: Favors fusion
- SPORT trial: Surgery beneficial

**Factors Predicting Good Surgical Outcomes:**

*Favorable:*
- Predominant limb symptoms (leg > back)
- Dermatomal distribution
- Positive tension signs
- Clear imaging correlation
- Shorter symptom duration
- High functional impairment
- Positive response to injections

*Unfavorable:*
- Predominant axial pain
- Non-dermatomal symptoms
- Workers' compensation
- Depression/anxiety
- Opioid dependence
- Previous failed surgery
- Pending litigation

**Preoperative Optimization:**

- Smoking cessation (minimum 4 weeks)
- Diabetes control (HbA1c <8%)
- Nutrition (albumin >3.5)
- Weight optimization
- Cardiopulmonary clearance
- Address modifiable psychological factors

**Shared Decision-Making:**

*Elements:*
- Present all treatment options
- Discuss expected outcomes with data
- Review risks and complications
- Consider patient values and preferences
- Use decision aids when available

*Key points to discuss:*
- Natural history without surgery
- Expected improvement with surgery
- Timeline for recovery
- Work and activity restrictions
- Risk of complications
- Risk of future surgery`,
      keyTerms: [
        { term: 'SPORT trial', definition: 'Spine Patient Outcomes Research Trial; landmark studies comparing surgery to conservative treatment' },
        { term: 'MRC grade', definition: 'Medical Research Council scale for muscle strength (0-5)' },
        { term: 'tension signs', definition: 'Physical exam findings (SLR, femoral stretch) reproducing radicular symptoms' },
        { term: 'imaging-clinical correlation', definition: 'Match between MRI/CT findings and patient symptoms' },
      ],
      clinicalNotes: 'The decision for surgery should be driven by clinical symptoms, not imaging findings alone. Many asymptomatic individuals have significant imaging abnormalities. Surgery for predominant back pain (without radiculopathy or stenosis) has poor outcomes.',
    },
    4: {
      level: 4,
      summary: 'Spine surgery decision-making integrates clinical assessment, evidence-based indications, patient risk stratification, and shared decision-making to optimize outcomes and minimize unnecessary procedures.',
      explanation: `Advanced surgical decision-making requires synthesis of evidence, clinical judgment, and patient-centered care.

**Evidence Base for Surgical Indications:**

*Disc Herniation (SPORT Trial):*
- Intent-to-treat: No significant difference at 2 years
- As-treated analysis: Surgery superior
- Interpretation: Surgery provides faster, more reliable improvement
- Long-term: Similar outcomes; patient preference important

*Lumbar Stenosis (SPORT Trial):*
- Surgery superior to conservative at 4 years
- As-treated: Greater effect size
- Baseline severity predicts surgical benefit

*Spondylolisthesis (SPORT Trial):*
- Surgery superior with stenosis
- Degenerative > isthmic outcomes
- Fusion vs. decompression alone: Controversial

**Timing Considerations:**

*Disc herniation:*
- Surgery within 6 months: Better outcomes
- Longer delays: Still can benefit but less improvement
- Emergency: Cauda equina, progressive deficit

*Stenosis:*
- Less time-sensitive than disc herniation
- Surgery when conservative fails and function impaired
- Myelopathy: Earlier intervention preferred

**Risk Stratification:**

*Patient factors:*
- Age: Outcomes preserved in elderly; higher complications
- Frailty: Modified frailty index predicts complications
- BMI: Obesity increases complications; still benefits from surgery
- Smoking: 2.5x higher pseudoarthrosis rate
- Diabetes: Higher infection risk; optimize HbA1c

*Surgical factors:*
- Levels: More levels = higher risk
- Fusion vs. decompression alone
- Revision surgery: Higher complication rates
- Surgical approach: Anterior vs. posterior

**Outcome Prediction:**

*Clinical tools:*
- STarT Back Tool: Risk stratification
- PROMIS measures: Patient-reported outcomes
- Predictive models: Machine learning approaches

*Factors in prediction:*
- Baseline disability level
- Symptom duration
- Psychological status
- Social factors (workers' comp, litigation)

**Specific Considerations:**

*Cervical myelopathy:*
- Surgery generally recommended for moderate-severe
- Natural history: May progress
- Mild myelopathy: Consider close monitoring vs. surgery
- JOA score for assessment and prognosis

*Adjacent segment disease:*
- 2-3% per year develop symptoms
- Risk higher with fusion
- Consider motion preservation in appropriate patients

*Failed back surgery syndrome:*
- Careful patient selection critical
- Psychological evaluation
- Revision surgery less successful than primary
- Consider spinal cord stimulation

**Medicolegal Considerations:**

- Document conservative treatment trials
- Ensure informed consent
- Discuss alternatives
- Set realistic expectations
- Document imaging-clinical correlation`,
      keyTerms: [
        { term: 'modified frailty index', definition: 'Tool using patient factors to predict surgical risk and complications' },
        { term: 'failed back surgery syndrome', definition: 'Persistent pain after spine surgery; complex multifactorial condition' },
        { term: 'adjacent segment disease', definition: 'Degeneration of levels above/below spinal fusion' },
        { term: 'JOA score', definition: 'Japanese Orthopaedic Association score; assesses cervical myelopathy severity' },
      ],
      clinicalNotes: 'SPORT trial limitations include high crossover rates, making intent-to-treat analysis difficult to interpret. As-treated analysis favors surgery but introduces selection bias. The trials support shared decision-making based on patient preferences.',
    },
    5: {
      level: 5,
      summary: 'Contemporary spine surgery decision-making integrates precision diagnostics, predictive analytics, value-based care principles, and personalized approaches to optimize patient selection and outcomes.',
      explanation: `Expert-level surgical decision-making requires integration of evidence, clinical expertise, system considerations, and patient values.

**Evidence Synthesis:**

*Key trials informing practice:*
- SPORT (disc, stenosis, spondylolisthesis): Surgery vs. conservative
- SSSS (Swedish Stenosis): Fusion vs. decompression alone
- Multiple RCTs: Motion preservation devices
- Meta-analyses: Minimally invasive vs. open

*Current evidence summary:*
- Surgery effective for appropriate indications
- Patient selection is key determinant of outcomes
- Long-term outcomes often similar to conservative
- Surgery provides faster, more predictable improvement

**Precision Medicine Approaches:**

*Phenotyping:*
- Mechanical vs. inflammatory vs. neuropathic pain
- Treatment response prediction
- Biomarkers for disc degeneration

*Advanced imaging:*
- Quantitative MRI: Disc health assessment
- Dynamic imaging: Instability evaluation
- MR neurography: Nerve assessment

*Predictive analytics:*
- Machine learning models for outcomes
- Complication risk calculators
- Return-to-work prediction

**Value-Based Care:**

*Appropriate use criteria:*
- Choosing Wisely recommendations
- AUC for imaging and procedures
- Evidence-based clinical pathways

*Quality metrics:*
- Patient-reported outcomes (PROMIS, ODI)
- Complication rates
- Reoperation rates
- Return to work
- Opioid prescribing

*Cost-effectiveness:*
- Surgery cost-effective for appropriate indications
- Inappropriate surgery waste resources
- Shared decision-making improves value

**Special Populations:**

*Elderly:*
- Age alone not contraindication
- Frailty more predictive than age
- Optimize medically
- Modified goals (maintain independence)

*Athletes:*
- Return-to-sport expectations
- Activity-specific considerations
- Timing relative to season

*Workers' compensation:*
- Worse outcomes documented
- Careful patient selection
- Address psychosocial factors
- Consider independent medical evaluation

**System Considerations:**

*Practice variation:*
- Significant regional variation in spine surgery rates
- May indicate overuse or underuse
- Quality improvement targets

*High-value care:*
- Conservative care first
- Imaging appropriate use
- Injection judicious use
- Surgery for appropriate indications

**Emerging Paradigms:**

*Motion preservation:*
- Total disc replacement: Selected patients
- Interspinous devices: Mixed results
- Dynamic stabilization: Limited evidence

*Biologics:*
- BMP: Efficacy vs. safety concerns
- Stem cells: Not established
- PRP: Limited evidence

*Technology:*
- Navigation and robotics
- Minimally invasive techniques
- Augmented reality for planning

**Shared Decision-Making Framework:**

*Components:*
1. Present natural history data
2. Review treatment options with evidence
3. Discuss expected outcomes and uncertainties
4. Explore patient values and preferences
5. Incorporate decision aids
6. Reach collaborative decision
7. Document process

*Key messages:*
- Most spine problems improve without surgery
- Surgery for appropriate indications is effective
- Patient selection drives outcomes
- Expectations should be realistic
- Conservative care remains important even with surgery history`,
      keyTerms: [
        { term: 'appropriate use criteria', definition: 'Evidence-based guidelines for when interventions are indicated' },
        { term: 'PROMIS', definition: 'Patient-Reported Outcomes Measurement Information System; standardized outcome measures' },
        { term: 'Choosing Wisely', definition: 'Initiative identifying commonly overused medical tests and procedures' },
        { term: 'phenotyping', definition: 'Classifying patients by predominant pain mechanism to guide treatment' },
      ],
      clinicalNotes: `**Decision Framework Summary:**

*Emergencies - Act immediately:*
- Cauda equina syndrome
- Progressive neurological deficit
- Unstable spine injury

*Strong indications:*
- Cervical myelopathy (moderate-severe)
- Radiculopathy with correlating imaging, failed conservative care
- Stenosis with significant functional limitation

*Consider surgery:*
- Persistent symptoms after adequate conservative trial
- Patient preference after shared decision-making
- Quality of life significantly impacted

*Surgery less likely to help:*
- Predominant axial pain
- Poor imaging-clinical correlation
- Central sensitization features
- Unaddressed psychological factors

**Quality Principles:**
- Document conservative care trials
- Ensure imaging-clinical correlation
- Address modifiable risk factors
- Set realistic expectations
- Use validated outcome measures
- Track complications and reoperation rates`,
    },
  },

  media: [
    {
      id: 'surgery-decision-flowchart',
      type: 'diagram',
      filename: 'spine-surgery-decision-flowchart.svg',
      title: 'Spine Surgery Decision Flowchart',
      description: 'Algorithm for determining when spine surgery is appropriate',
    },
  ],
  citations: [
    {
      id: 'sport-trials-summary',
      type: 'article',
      title: 'SPORT Trials for Spine Surgery Indications',
      source: 'Spine Journal',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-herniated-disc', targetType: 'condition', relationship: 'related', label: 'Herniated Disc' },
    { targetId: 'ortho-patient-spinal-stenosis', targetType: 'condition', relationship: 'related', label: 'Spinal Stenosis' },
    { targetId: 'ortho-patient-back-pain', targetType: 'condition', relationship: 'related', label: 'Back Pain' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['spine', 'surgery', 'decision-making'],
    keywords: ['spine surgery', 'surgical indications', 'back surgery', 'when to operate'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spineSurgeryDecisionContent;
