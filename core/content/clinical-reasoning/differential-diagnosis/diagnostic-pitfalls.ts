/**
 * Diagnostic Pitfalls
 *
 * Common errors and traps in clinical reasoning that lead to diagnostic mistakes
 * and how to avoid them.
 */

import { EducationalContent } from '../../types';

export const diagnosticPitfallsContent: EducationalContent = {
  id: 'diagnostic-pitfalls',
  type: 'concept',
  name: 'Diagnostic Pitfalls',
  alternateNames: ['Diagnostic Errors', 'Cognitive Traps', 'Reasoning Errors'],

  levels: {
    1: {
      level: 1,
      summary: 'Diagnostic pitfalls are common mistakes that can happen when doctors try to figure out what is wrong, and knowing about them helps prevent errors.',
      explanation: `Even good doctors sometimes make mistakes when figuring out what is wrong with a patient. These mistakes are called diagnostic pitfalls. Learning about them helps doctors avoid them.

**Common Pitfalls:**

**1. Jumping to Conclusions**
When a doctor decides on a diagnosis too quickly without considering other possibilities.

Example: Thinking chest pain is just heartburn when it could be a heart attack.

**2. Sticking with First Impression**
When a doctor keeps believing their first guess even when new information suggests something else.

Example: Continuing to treat someone for "anxiety" when tests show a real physical problem.

**3. Missing Rare Causes**
When doctors only think of common causes and miss unusual ones.

Example: Not considering that a child\'s symptoms could be from a rare genetic condition.

**4. Over-Reliance on Tests**
When doctors trust test results more than the patient\'s story, even when they do not match.

Example: Believing a "normal" test result even when the patient is clearly very sick.

**5. Not Updating Thinking**
When doctors do not change their diagnosis even when the patient is not getting better.

Example: Keeping someone on antibiotics for "pneumonia" when they actually have heart failure.

**How to Avoid Pitfalls:**
- Take time to listen to the full story
- Consider multiple possibilities
- Pay attention when things do not add up
- Be willing to change your mind
- Ask for help when needed`,
      keyTerms: [
        { term: 'pitfall', definition: 'A hidden or unsuspected danger or difficulty; a trap' },
        { term: 'diagnosis', definition: 'The process of figuring out what disease or condition is causing someone\'s symptoms' },
        { term: 'assumption', definition: 'Something accepted as true without proof; a guess' },
        { term: 'bias', definition: 'A tendency to think or act in a particular way that may not be fair or accurate' },
      ],
      analogies: [
        'Diagnostic pitfalls are like potholes on a road - experienced drivers know where they are and how to avoid them, but new drivers might hit them unexpectedly.',
        'They are like optical illusions for the brain - your mind sees what it expects to see, not always what is really there.',
      ],
      examples: [
        'A doctor assumes abdominal pain in a young woman is just menstrual cramps, missing appendicitis.',
        'Attributing an older person\'s confusion to "normal aging" when they actually have a severe infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diagnostic pitfalls are systematic errors in clinical reasoning that can lead to missed or delayed diagnoses; understanding common cognitive biases helps clinicians avoid these traps.',
      explanation: `Diagnostic errors are unfortunately common in medicine and often stem from predictable patterns of cognitive error. Understanding these pitfalls is essential for improving diagnostic accuracy.

**Major Categories of Diagnostic Error:**

**1. Cognitive Errors**
Mistakes in thinking and reasoning:
- Premature closure (stopping too soon)
- Anchoring bias (over-relying on first impression)
- Availability bias (overestimating familiar diagnoses)
- Confirmation bias (seeking confirming evidence)

**2. System Errors**
Problems with the healthcare system:
- Communication failures
- Technical test errors
- Workflow issues
- Time pressures

**3. No-Fault Errors**
When disease presents atypically:
- Silent MIs (no chest pain)
- Atypical infections
- Rare diseases with common symptoms

**Common Cognitive Biases:**

**Anchoring Bias:**
Fixating on initial information and failing to adjust adequately.
- Example: Patient labeled with "anxiety" continues to be treated as such despite new cardiac symptoms.

**Availability Bias:**
Overestimating likelihood of diagnoses that come easily to mind.
- Example: Recently seeing a rare disease makes it seem more common than it is.

**Confirmation Bias:**
Seeking evidence that supports a hypothesis while ignoring contradictory evidence.
- Example: Focusing on findings that support "pneumonia" while discounting signs of pulmonary embolism.

**Premature Closure:**
Accepting a diagnosis before it has been fully verified.
- Example: Diagnosing MI in chest pain patient without ruling out aortic dissection.

**Diagnostic Momentum:**
Accepting a previous diagnosis without independent verification.
- Example: Transferring patient with "seizure" diagnosis without considering syncope.

**Strategies to Avoid Pitfalls:**

1. **Metacognition:** Think about your thinking
2. **Consider alternatives:** Force generation of differential
3. **Rule out worst case:** Prioritize dangerous diagnoses
4. **Seek disconfirming evidence:** Actively look for findings that contradict your diagnosis
5. **Time outs:** Pause and reconsider complex cases`,
      keyTerms: [
        { term: 'cognitive bias', definition: 'Systematic pattern of deviation from rational judgment' },
        { term: 'premature closure', definition: 'Accepting a diagnosis before it has been fully verified' },
        { term: 'anchoring bias', definition: 'Over-relying on the first piece of information encountered' },
        { term: 'availability bias', definition: 'Overestimating the likelihood of events based on how easily examples come to mind' },
        { term: 'metacognition', definition: 'Awareness and understanding of one\'s own thought processes' },
      ],
      analogies: [
        'Cognitive biases are like wearing tinted glasses - they color everything you see, but you may not realize the tint is there.',
        'Anchoring bias is like a ship dropping anchor - once set, it is hard to move to a new location even when conditions change.',
      ],
      examples: [
        'A resident anchors on "gastroenteritis" for vomiting, missing the early signs of diabetic ketoacidosis.',
        'Availability bias after seeing one case of tick-borne illness leads to over-testing for rare vector-borne diseases in patients with non-specific symptoms.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diagnostic errors result from complex interactions between cognitive biases, system failures, and knowledge gaps; systematic approaches including cognitive forcing strategies and diagnostic timeouts can reduce error rates.',
      explanation: `## Understanding Diagnostic Errors

### Magnitude of the Problem

Diagnostic errors affect approximately 12 million Americans annually:
- 5% of outpatient diagnoses are incorrect
- 10-20% of autopsies reveal missed diagnoses
- Diagnostic errors contribute to 10% of patient deaths
- Leading cause of malpractice claims

### Taxonomy of Diagnostic Error

**Process Failures:**
1. Faulty data collection
   - Incomplete history
   - Inadequate examination
   - Wrong tests ordered

2. Faulty data interpretation
   - Misinterpreting test results
   - Ignoring relevant findings
   - Overweighting irrelevant findings

3. Faulty data synthesis
   - Cognitive biases
   - Knowledge deficits
   - Faulty reasoning

**System-Related Failures:**
- Communication breakdowns
- Equipment malfunction
- Time pressures
- Fatigue and burnout
- Supervision issues

### Cognitive Biases in Detail

**1. Anchoring (and Adjustment) Bias**
- Relying too heavily on initial information
- Insufficient adjustment with new data
- **Mitigation:** Actively consider alternatives; "what else could this be?"

**2. Availability Bias**
- Judging probability by ease of recall
- Influenced by recency and emotional impact
- **Mitigation:** Reference base rates; consider prevalence

**3. Confirmation Bias**
- Seeking evidence that confirms hypotheses
- Ignoring contradictory findings
- **Mitigation:** Actively seek disconfirming evidence

**4. Premature Closure**
- Stopping diagnostic process too early
- Accepting first reasonable diagnosis
- **Mitigation:** Mandated differential; diagnostic timeouts

**5. Representativeness Bias**
- Judging by similarity to prototype
- Ignoring base rates
- **Mitigation:** Consider pre-test probability

**6. Framing Effects**
- Decision influenced by how information presented
- Loss vs. gain framing
- **Mitigation:** Standardize information presentation

**7. Feedback Bias**
- Learning from successes more than failures
- Attribution errors
- **Mitigation:** Systematic outcome tracking

### Cognitive Forcing Strategies

**Definition:** Conscious strategies to overcome cognitive biases

**Specific Strategies:**

1. **Rule Out Worst-Case Scenario**
   - For every presentation, consider life-threatening causes first
   - Forces consideration of serious alternatives

2. **The 5-Minute Differential**
   - Before finalizing diagnosis, spend 5 minutes generating alternatives
   - Especially for high-stakes diagnoses

3. **Diagnostic Timeout**
   - Pause before finalizing diagnosis
   - Review: What fits? What does not fit? What else could this be?

4. **Consider the Opposite**
   - Actively search for evidence against your diagnosis
   - Strongest test of a hypothesis

5. **Reference Class Forecasting**
   - Use statistical base rates rather than intuition
   - "How common is this diagnosis in similar patients?"

6. **The Pre-Mortem**
   - Imagine the diagnosis is wrong
   - How could that happen? What would we have missed?

### System Approaches to Error Reduction

**Diagnostic Safety Teams:**
- Regular review of diagnostic errors
- Root cause analysis
- System improvements

**Technology Solutions:**
- Clinical decision support
- Differential diagnosis generators
- AI-assisted pattern recognition

**Education and Training:**
- Explicit teaching of diagnostic reasoning
- Feedback on diagnostic performance
- Simulation training

**Communication Improvements:**
- Structured handoffs
- Closed-loop communication
- Patient engagement in diagnosis`,
      keyTerms: [
        { term: 'diagnostic error', definition: 'The failure to establish an accurate and timely explanation of the patient\'s health problem' },
        { term: 'cognitive forcing strategy', definition: 'Conscious approach to overcome cognitive biases in decision making' },
        { term: 'diagnostic timeout', definition: 'Structured pause to reconsider a diagnosis before finalizing it' },
        { term: 'representativeness heuristic', definition: 'Judging probability by how similar an event is to a prototype' },
        { term: 'root cause analysis', definition: 'Systematic process for identifying fundamental causes of problems' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of diagnostic pitfalls involves sophisticated analysis of error mechanisms, development of resilient diagnostic systems, and integration of cognitive science with quality improvement methodologies.',
      explanation: `## Advanced Diagnostic Error Analysis

### The Cognitive Autopsy

**Structured Analysis of Diagnostic Errors:**

When a diagnostic error occurs, systematic review helps identify causes:

**1. Data Collection Review:**
- Was the history adequate?
- Was the examination complete?
- Were appropriate tests ordered?
- Was data accurately recorded?

**2. Data Processing Review:**
- What hypotheses were considered?
- How was differential diagnosis generated?
- What cognitive biases may have played a role?
- Was the reasoning process appropriate?

**3. Knowledge Assessment:**
- Were there knowledge deficits?
- Was the diagnosis within the clinician\'s expertise?
- Were appropriate resources consulted?

**4. System Analysis:**
- Were there time pressures?
- Was workload appropriate?
- Were there communication failures?
- Was technology helpful or harmful?

### Cognitive Debiasing Strategies

**Tiered Approach:**

**Tier 1: Awareness and Education**
- Teaching about cognitive biases
- Case-based learning
- Error disclosure training

**Tier 2: Cognitive Forcing Strategies**
- Checklists and mnemonics
- Diagnostic timeouts
- Mandatory differentials

**Tier 3: Environmental Changes**
- Reducing interruptions
- Optimizing decision environment
- Fatigue management

**Tier 4: System Interventions**
- Clinical decision support
- Second opinion requirements
- Diagnostic safety huddles

### Specific High-Risk Situations

**High Cognitive Load:**
- Multiple complex patients
- Interruptions and multitasking
- Fatigue and sleep deprivation
- **Mitigation:** Protected diagnostic time; workload limits

**Atypical Presentations:**
- Elderly patients (altered physiology)
- Immunocompromised patients
- Patients with multiple comorbidities
- **Mitigation:** Broadened differential; lower threshold for testing

**High-Stakes Decisions:**
- Life-threatening conditions
- Irreversible interventions
- **Mitigation:** Mandatory verification; second opinions

**Rare Diseases:**
- Prevalence insufficient for pattern recognition
- Knowledge deficits
- **Mitigation:** Diagnostic decision support; specialist consultation

### Measuring Diagnostic Quality

**Quality Metrics:**

**Process Measures:**
- Timeliness of diagnosis
- Appropriate test utilization
- Differential diagnosis completeness
- Consultation appropriateness

**Outcome Measures:**
- Diagnostic accuracy (when known)
- Time to correct diagnosis
- Patient harm from delay
- Mortality and morbidity

**Balancing Measures:**
- Over-testing rates
- Cost implications
- Patient experience
- Clinician burnout

**The Safer Diagnosis Framework:**

1. **Timely:** Diagnosis made within appropriate timeframe
2. **Accurate:** Correct diagnosis established
3. **Communicated:** Patient and team informed
4. **Coordinated:** Appropriate follow-up arranged
5. **Patient-centered:** Patient engaged in process

### Improving the Diagnostic Process

**Individual Level:**
- Reflective practice
- Continuing education
- Feedback on performance
- Mindfulness training

**Team Level:**
- Diagnostic safety huddles
- Case conferences
- Morbidity and mortality reviews
- Interprofessional collaboration

**Organizational Level:**
- Diagnostic safety as priority
- Non-punitive error reporting
- Systematic error analysis
- Resource allocation for safety

**Societal Level:**
- Research funding for diagnostic safety
- Education reform
- Technology standards
- Policy support`,
      keyTerms: [
        { term: 'cognitive autopsy', definition: 'Structured analysis of the thought processes that led to a diagnostic error' },
        { term: 'resilient diagnostic system', definition: 'A system designed to detect and recover from diagnostic errors before harm occurs' },
        { term: 'diagnostic safety huddle', definition: 'Brief team meeting to discuss diagnostic uncertainty and safety concerns' },
        { term: 'debiasing', definition: 'Strategies to reduce the influence of cognitive biases on decision making' },
        { term: 'diagnostic calibration', definition: 'The accuracy of a clinician\'s confidence in their diagnoses' },
      ],
      clinicalNotes: 'Diagnostic errors are rarely due to simple knowledge gaps; more often they result from cognitive biases, system failures, or complex interactions between multiple factors. Effective error reduction requires multipronged approaches addressing individual cognition, team dynamics, and system design.',
    },
    5: {
      level: 5,
      summary: 'Expert-level understanding of diagnostic pitfalls encompasses sophisticated error taxonomy, resilience engineering, implementation science, and the development of high-reliability diagnostic organizations that continuously learn and improve.',
      explanation: `## Expert-Level Diagnostic Safety

### Advanced Error Taxonomy

**The Dual Process Theory of Diagnostic Error:**

**System 1 Errors (Intuitive):**
- Pattern recognition failures
- Cognitive bias influence
- Premature closure
- Misapplication of illness scripts

**System 2 Errors (Analytical):**
- Knowledge deficits
- Faulty probability estimation
- Incorrect application of decision rules
- Computational errors

**Mixed Errors:**
- Failure to engage System 2 when needed
- Inappropriate reliance on System 1
- Over-riding appropriate intuition with flawed analysis

**The Diagnostic Error Matrix:**

| | Knowledge Adequate | Knowledge Inadequate |
|---|---|---|
| **Process Appropriate** | Correct diagnosis | Knowledge gap error |
| **Process Faulty** | Cognitive error | Knowledge + Process error |

### Resilience Engineering for Diagnosis

**Beyond Error Prevention:**

Traditional approach: Prevent errors through standardization
Resilience approach: Build capacity to detect and recover from errors

**Four Capabilities of Resilient Systems:**

1. **Responding:**
   - Detecting deviations from expected course
   - Adapting to changing conditions
   - Mobilizing resources when needed

2. **Monitoring:**
   - Tracking diagnostic process
   - Identifying potential failures
   - Assessing system performance

3. **Learning:**
   - Analyzing errors and near misses
   - Sharing lessons learned
   - Implementing improvements

4. **Anticipating:**
   - Forecasting potential problems
   - Preparing for contingencies
   - Maintaining margins of safety

**Designing for Resilience:**

**Layered Defenses:**
- Multiple independent checks
- Redundancy in critical processes
- Defense in depth

**Adaptive Capacity:**
- Flexible protocols
- Discretionary authority for clinicians
- Resource buffers

**Error Detection:**
- Automated surveillance
- Peer review
- Patient follow-up systems

### Implementation Science in Diagnostic Safety

**Translating Evidence to Practice:**

**Implementation Strategies:**
- Audit and feedback
- Reminder systems
- Educational outreach
- Opinion leader engagement
- Multifaceted interventions

**Barriers to Implementation:**
- Cultural resistance
- Time constraints
- Resource limitations
- Competing priorities
- Lack of incentives

**Facilitators:**
- Leadership support
- Engaged champions
- Relevant data
- Alignment with values
- Practical tools

### High-Reliability Diagnostic Organizations

**Characteristics:**

1. **Preoccupation with Failure:**
   - Constant vigilance for diagnostic errors
   - Near-miss reporting valued
   - Learning from every mistake

2. **Reluctance to Simplify:**
   - Acknowledging diagnostic complexity
   - Avoiding oversimplification
   - Embracing uncertainty

3. **Sensitivity to Operations:**
   - Awareness of frontline realities
   - Real-time problem solving
   - Adaptive capacity

4. **Commitment to Resilience:**
   - Building recovery capacity
   - Training for crisis management
   - Supporting second victim

5. **Deference to Expertise:**
   - Authority based on knowledge
   - Flattened hierarchy for safety
   - Speaking up encouraged

### The Future of Diagnostic Safety

**Emerging Approaches:**

**Artificial Intelligence:**
- Automated differential generation
- Pattern recognition support
- Error detection algorithms
- Risk stratification

**Advanced Analytics:**
- Natural language processing of notes
- Predictive models for diagnostic delay
- Population-level error detection

**Patient Engagement:**
- Patient-reported diagnostic concerns
- Shared decision making
- Diagnostic uncertainty communication

**Learning Health Systems:**
- Real-time data feedback
- Continuous learning from practice
- Rapid implementation of improvements

### Measuring and Improving Diagnostic Culture

**Safety Culture Assessment:**
- Survey tools (AHRQ, SAQ)
- Diagnostic-specific measures
- Focus groups and interviews

**Improvement Interventions:**
- Team training
- Communication protocols
- Diagnostic timeouts
- Second opinion programs

**The Journey to Excellence:**

Diagnostic safety is not a destination but a continuous journey of:
1. Understanding current performance
2. Identifying opportunities for improvement
3. Implementing evidence-based interventions
4. Measuring impact
5. Spreading successful practices

**Leadership Imperatives:**
- Make diagnostic safety a strategic priority
- Allocate resources appropriately
- Create psychological safety
- Model learning behavior
- Celebrate improvement`,
      keyTerms: [
        { term: 'resilience engineering', definition: 'Designing systems to detect, adapt to, and recover from errors before harm occurs' },
        { term: 'high-reliability organization', definition: 'Organization that operates in complex, hazardous environments with consistently low error rates' },
        { term: 'second victim', definition: 'Healthcare provider traumatized by involvement in an unanticipated patient event' },
        { term: 'implementation science', definition: 'Study of methods to promote systematic uptake of evidence into practice' },
        { term: 'learning health system', definition: 'System in which science, informatics, incentives, and culture align for continuous improvement' },
      ],
      clinicalNotes: `Expert-level diagnostic safety requires:
1. Deep understanding of cognitive and system factors in error
2. Commitment to resilience and error recovery
3. Implementation of evidence-based safety practices
4. Creation of high-reliability organizational culture
5. Continuous measurement and improvement

The goal is not zero errors (impossible) but rapid detection and recovery before patient harm occurs, combined with continuous organizational learning.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'iom-improving-diagnosis-2015',
      type: 'textbook',
      title: 'Improving Diagnosis in Health Care',
      authors: ['National Academies of Sciences, Engineering, and Medicine'],
      source: 'National Academy Press',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK338596/',
      accessedDate: '2026-01-28',
    },
    {
      id: 'croskerry-diagnostic-error-2017',
      type: 'article',
      title: 'Diagnosis: Cognitive and Affective Factors',
      authors: ['Croskerry P'],
      source: 'BMJ Quality and Safety',
    },
    {
      id: 'graber-diagnostic-error-2013',
      type: 'article',
      title: 'The Incidence of Diagnostic Error in Medicine',
      authors: ['Graber ML'],
      source: 'BMJ Quality and Safety',
    },
  ],

  crossReferences: [
    { targetId: 'diagnostic-framework', targetType: 'concept', relationship: 'related', label: 'Diagnostic Framework' },
    { targetId: 'probabilistic-reasoning', targetType: 'concept', relationship: 'related', label: 'Probabilistic Reasoning' },
    { targetId: 'pattern-recognition', targetType: 'concept', relationship: 'related', label: 'Pattern Recognition' },
  ],

  tags: {
    systems: ['general'],
    topics: ['clinical-reasoning', 'patient-safety', 'quality-improvement'],
    keywords: ['diagnostic error', 'cognitive bias', 'patient safety', 'quality improvement', 'cognition'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'surgery', 'emergency-medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default diagnosticPitfallsContent;
