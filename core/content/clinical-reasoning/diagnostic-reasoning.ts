/**
 * Diagnostic Reasoning Educational Content
 *
 * How doctors think through diagnoses - the cognitive processes,
 * frameworks, and mental models clinicians use to move from
 * symptoms to accurate diagnosis.
 */

import { EducationalContent } from '../types';

export const diagnosticReasoningContent: EducationalContent = {
  id: 'clinical-reasoning-diagnostic-reasoning',
  type: 'concept',
  name: 'Diagnostic Reasoning',
  alternateNames: ['Clinical Reasoning', 'Diagnostic Thinking', 'Clinical Problem Solving'],

  levels: {
    1: {
      level: 1,
      summary: 'Diagnostic reasoning is how doctors figure out what is making you sick by gathering clues, thinking about possibilities, and finding the best answer.',
      explanation: `# How Doctors Figure Out What's Wrong

When you go to the doctor feeling sick, they have to figure out what's wrong. This is called diagnostic reasoning - it's like being a detective.

## The Detective Process

### Step 1: Gathering Clues

Doctors collect information just like detectives:
- **Listen to your story:** When did you start feeling sick? What does it feel like?
- **Look at your body:** Check your temperature, feel your belly, listen to your heart
- **Ask questions:** About your family, your habits, your medicines

Each piece of information is a clue.

### Step 2: Making a List

Doctors don't guess - they make a list of ALL the possible causes:

*Example: If you have a stomach ache, the doctor thinks about:*
- Did you eat something bad?
- Do you have a stomach bug?
- Is it appendicitis?
- Could it be something else?

### Step 3: Narrowing Down

Then they use more clues to cross things off their list:
- New information
- Physical examination
- Sometimes medical tests

### Step 4: Finding the Answer

The answer that fits ALL the clues is usually the right one.

## Two Ways Doctors Think

### Fast Thinking (Pattern Recognition)

Experienced doctors have seen thousands of patients. When they see you, they might recognize the pattern right away.

*It's like when you see a dog - you know it's a dog instantly because you've seen dogs before.*

### Slow Thinking (Step-by-Step)

For tricky problems, doctors use slow, careful thinking:
- Make a list of possibilities
- Look at each one carefully
- Weigh the evidence
- Make a careful decision

## Why Doctors Sometimes Get It Wrong

Even good doctors can make mistakes because:

| Reason | Example |
|--------|---------|
| Not enough information | You forgot to tell them something important |
| Rare conditions | They haven't seen it before |
| Tricky symptoms | Your sickness looks like something else |
| Too much focus | They get stuck on one idea |

## How You Can Help

You're part of the detective team! Help your doctor by:
- Tell them EVERYTHING, even if it seems embarrassing
- Be specific about when things started
- Mention all your symptoms, even the small ones
- Tell them about medicines you take
- Ask questions if you don't understand`,
      keyTerms: [
        { term: 'diagnosis', definition: 'The name of what is making you sick' },
        { term: 'symptom', definition: 'Something you feel that shows you might be sick' },
        { term: 'sign', definition: 'Something the doctor can see or measure, like a fever or rash' },
        { term: 'pattern recognition', definition: 'Recognizing something because it looks like things you have seen before' },
      ],
      analogies: [
        'Diagnostic reasoning is like solving a mystery - the doctor is the detective, your symptoms are the clues, and the diagnosis is whodunit.',
        'It\'s like when your car makes a weird noise - the mechanic listens, thinks about all the things that could cause that noise, and investigates to find the real problem.',
        'Think of it like a puzzle - each piece of information helps complete the picture of what\'s happening in your body.',
      ],
      examples: [
        'If you have fever, cough, and trouble breathing, the doctor recognizes the pattern of pneumonia because they\'ve seen it many times before.',
        'If you have stomach pain, the doctor asks WHERE it hurts. Pain in the lower right side might mean appendicitis. Pain in the center might mean heartburn.',
        'When a child has a barking cough, the doctor recognizes croup - a pattern they\'ve learned from seeing many sick kids.',
      ],
      patientCounselingPoints: [
        'Tell your doctor all your symptoms, even ones that seem unrelated - they might be important clues.',
        'Be honest about your habits, even if you\'re embarrassed - doctors need accurate information.',
        'Ask "What else could this be?" if your doctor seems too focused on one possibility.',
        'If you\'re not getting better, tell your doctor - it might mean the diagnosis needs to be reconsidered.',
      ],
    },
    2: {
      level: 2,
      summary: 'Diagnostic reasoning is the systematic cognitive process clinicians use to evaluate symptoms, generate possible explanations, and determine the most likely diagnosis.',
      explanation: `# Understanding Diagnostic Reasoning

Diagnostic reasoning is the mental process doctors use to move from a patient's symptoms to an accurate diagnosis. It combines both fast, intuitive thinking and slow, analytical thinking.

## The Diagnostic Process

### Information Gathering

**History Taking:**
- Chief complaint: The main reason for your visit
- History of present illness: Detailed story of your symptoms
- Past medical history: Your previous health problems
- Medications: All drugs you take, including supplements
- Family history: Health problems that run in your family
- Social history: Smoking, alcohol, work, travel

**Physical Examination:**
- Vital signs: Temperature, blood pressure, heart rate, breathing rate
- Focused exam: Looking at specific body systems related to your symptoms
- General appearance: How you look overall can provide clues

### Hypothesis Generation

Doctors create hypotheses (educated guesses) about what might be wrong:

**Sources of hypotheses:**
1. **Pattern recognition:** "I've seen this before"
2. **Anatomical reasoning:** Which body parts could cause this symptom?
3. **Pathophysiological reasoning:** What disease processes could explain this?

### Hypothesis Refinement

The doctor then refines their list by:
- Gathering more specific information
- Performing targeted physical examination
- Ordering diagnostic tests when needed
- Weighing the evidence for each possibility

## Two Modes of Thinking

### System 1: Fast, Intuitive Thinking

**Characteristics:**
- Automatic and quick
- Based on pattern recognition
- Uses mental shortcuts (heuristics)
- Draws on experience
- Efficient for common problems

**Example:**
Seeing a patient with fever, sore throat, and swollen glands and immediately thinking "strep throat" because you've seen it 100 times.

### System 2: Slow, Analytical Thinking

**Characteristics:**
- Deliberate and careful
- Step-by-step reasoning
- Weighs pros and cons
- Uses systematic approaches
- Necessary for complex or unusual cases

**Example:**
A patient with confusing symptoms - you make a list of all possibilities, research each one, and carefully consider the evidence.

## Common Diagnostic Tools

### Mnemonics and Frameworks

**OLDCARTS** for describing symptoms:
- **O**nset: When did it start?
- **L**ocation: Where is it?
- **D**uration: How long does it last?
- **C**haracteristics: What does it feel like?
- **A**ggravating factors: What makes it worse?
- **R**elieving factors: What makes it better?
- **T**iming: Is it constant or comes and goes?
- **S**everity: How bad is it?

**VINDICATE** for generating possibilities:
- **V**ascular
- **I**nfection
- **N**eoplasm (cancer)
- **D**egenerative
- **I**ntoxication
- **C**ongenital
- **A**utoimmune
- **T**rauma
- **E**ndocrine

## Common Pitfalls in Diagnostic Reasoning

| Pitfall | Description | Example |
|---------|-------------|---------|
| Premature closure | Settling on one diagnosis too early | Diagnosing "flu" without considering pneumonia |
| Anchoring | Getting stuck on the first idea | Focusing on heart attack and missing anxiety |
| Availability bias | Recent cases influence thinking | Diagnosing rare disease you just read about |
| Confirmation bias | Only looking for supporting evidence | Ignoring symptoms that don't fit your diagnosis |
| Representativeness | Expecting classic presentations | Missing atypical heart attack in women |

## The Role of Testing

Diagnostic tests are tools to refine hypotheses:

**When tests help:**
- To confirm a likely diagnosis
- To rule out dangerous possibilities
- When the diagnosis is unclear

**When tests may not help:**
- When results won't change treatment
- When pre-test probability is very high or low
- When tests have high false positive rates

## Improving Diagnostic Accuracy

**Strategies doctors use:**
1. **Sleep on it:** Delay final decision when possible
2. **Get a second opinion:** Fresh perspective helps
3. **Ask "What else could this be?":** Force consideration of alternatives
4. **Look for disconfirming evidence:** Actively seek data that doesn't fit
5. **Admit uncertainty:** It's okay to say "I'm not sure yet"`,
      keyTerms: [
        { term: 'diagnostic reasoning', definition: 'The cognitive process of moving from symptoms to diagnosis' },
        { term: 'hypothesis', definition: 'A tentative explanation that can be tested; a possible diagnosis' },
        { term: 'pattern recognition', definition: 'Identifying a diagnosis based on similarity to previously seen cases' },
        { term: 'heuristic', definition: 'Mental shortcut that speeds up decision-making' },
        { term: 'pre-test probability', definition: 'How likely a diagnosis is BEFORE doing a test' },
        { term: 'premature closure', definition: 'Settling on a diagnosis before fully considering alternatives' },
      ],
      analogies: [
        'Diagnostic reasoning is like detective work - symptoms are clues, tests are forensic evidence, and the diagnosis is the solution.',
        'Pattern recognition in medicine is like recognizing a song from just the first few notes.',
        'Hypothesis refinement is like editing a rough draft - you keep improving it until it fits the evidence.',
      ],
      examples: [
        'A 30-year-old with chest pain: The doctor considers heart attack, pneumonia, collapsed lung, and rib injury - then uses history, exam, and tests to determine which is most likely.',
        'A child with fever and rash: The doctor recognizes the pattern of chickenpox from having seen it many times before.',
        'An elderly person with confusion: The doctor generates many possibilities (infection, dehydration, medication side effects, stroke) and systematically tests each one.',
      ],
    },
    3: {
      level: 3,
      summary: 'Diagnostic reasoning employs dual-process cognition, integrating rapid pattern recognition with analytical hypothesis testing to navigate from presenting symptoms to accurate diagnosis.',
      explanation: `# Diagnostic Reasoning: The Cognitive Science of Medical Diagnosis

## Dual-Process Theory of Diagnostic Reasoning

Diagnostic reasoning involves two complementary cognitive systems that work together:

### System 1: Intuitive Reasoning (Type 1 Thinking)

**Characteristics:**
- Fast, automatic, unconscious
- Pattern recognition and matching
- Heuristic-based (mental shortcuts)
- Minimal cognitive load
- Emotional/intuitive aspects

**Strengths:**
- Rapid diagnosis of common conditions
- Efficient use of cognitive resources
- Effective for familiar presentations
- Draws on extensive clinical experience

**Limitations:**
- Prone to cognitive biases
- May fail with atypical presentations
- Difficult to articulate reasoning
- Can be overconfident

**Mechanism:**
Pattern matching through "illness scripts" - mental templates containing:
- Epidemiology (who gets it, when)
- Pathophysiology (what goes wrong)
- Clinical manifestations (what you see/find)

### System 2: Analytical Reasoning (Type 2 Thinking)

**Characteristics:**
- Slow, deliberate, conscious
- Step-by-step processing
- Hypothesis generation and testing
- Weighing evidence systematically
- Explicit reasoning chains

**Strengths:**
- More thorough evaluation
- Better for complex/unknown cases
- Less susceptible to bias
- Can be taught explicitly

**Limitations:**
- Time and resource intensive
- May generate too many possibilities
- Can lead to analysis paralysis
- Not always necessary for routine cases

**Mechanism:**
- Generate differential diagnosis
- Apply probabilistic reasoning
- Use diagnostic frameworks
- Test hypotheses systematically

## The Diagnostic Process: A Stepwise Model

### Phase 1: Initial Encounter

1. **Problem Identification**
   - Patient presents with symptom
   - Clarify the chief complaint
   - Begin hypothesis generation (often immediate, System 1)

2. **Information Gathering**
   - Focused history using structured approach
   - Physical examination
   - Initial hypothesis refinement begins

### Phase 2: Hypothesis Generation and Refinement

3. **Differential Diagnosis Construction**
   - Broad initial list
   - Categorize by: urgency, likelihood, treatability
   - Apply anatomical and pathophysiological frameworks

4. **Hypothesis Refinement**
   - Targeted history for key discriminating features
   - Focused physical exam
   - Consider pre-test probabilities
   - Select diagnostic tests strategically

### Phase 3: Working Diagnosis

5. **Diagnostic Confirmation**
   - Test interpretation
   - Response to treatment (sometimes diagnostic)
   - Consider if diagnosis adequately explains ALL findings

6. **Diagnostic Verification**
   - Monitor response to therapy
   - Reconsider if expected response not seen
   - Be willing to revise diagnosis

## Illness Script Development

**Components of an illness script:**

| Component | Content | Example (Pneumonia) |
|-----------|---------|---------------------|
| Epidemiology | Age, sex, risk factors, season | Elderly, winter, smokers, immunocompromised |
| Pathophysiology | Disease mechanism | Infection causes alveolar inflammation and fluid accumulation |
| Clinical | Symptoms, signs, labs, imaging | Fever, cough, dyspnea, crackles, infiltrate on CXR |

**Script acquisition:**
- Novices: Have few, incomplete scripts
- Experts: Have thousands of refined scripts
- Script quality improves with deliberate practice and feedback

## Heuristics and Biases

### Common Diagnostic Heuristics

**1. Representativeness Heuristic**
- Judging probability based on similarity to prototype
- Can be helpful: Recognizing classic presentations
- Can cause errors: Overlooking atypical presentations

**2. Availability Heuristic**
- Judging probability based on ease of recall
- Can be helpful: Recent memorable cases come to mind
- Can cause errors: Recent unusual cases unduly influence thinking

**3. Anchoring Heuristic**
- Initial impressions heavily influence final judgment
- Can be helpful: Efficient when initial impression is accurate
- Can cause errors: Failure to adjust with new information

### Cognitive Forcing Strategies

Techniques to counteract bias:

| Strategy | Purpose | Application |
|----------|---------|-------------|
| Diagnostic time-out | Prevent premature closure | Pause before finalizing diagnosis |
| Consider the worst case | Ensure safety | Always ask: "What's dangerous here?" |
| Generate differentials | Prevent anchoring | Make list BEFORE seeing old records |
| Seek disconfirming evidence | Prevent confirmation bias | Look for what doesn't fit |
| Second opinion | Fresh perspective | Consult colleague for stuck cases |

## Probabilistic Reasoning

### Pre-Test Probability

Definition: Likelihood of disease BEFORE testing

**Sources:**
- Clinical gestalt (experience-based estimate)
- Clinical prediction rules (validated tools)
- Published prevalence data
- Patient's specific risk factors

### Test Characteristics

**Sensitivity:** True positive rate
- High sensitivity = good for ruling OUT (SnOUT)
- Negative result rules disease out

**Specificity:** True negative rate
- High specificity = good for ruling IN (SpIN)
- Positive result rules disease in

**Likelihood Ratios:**
- LR+: How much a positive result increases probability
- LR-: How much a negative result decreases probability

## Diagnostic Frameworks

### Anatomical Approach

Structure-based differential generation:
- Consider anatomical structures in region
- Generate diagnoses for each structure

*Example: Chest pain*
- Cardiac: MI, pericarditis
- Pulmonary: PE, pneumonia, pneumothorax
- Gastrointestinal: GERD, esophageal spasm
- Musculoskeletal: Costochondritis, muscle strain
- Other: Herpes zoster, anxiety

### Pathophysiological Approach

Disease-category based generation using VINDICATE or similar:
- Ensures comprehensive coverage
- Helpful when anatomical approach not applicable

### Epidemiological Approach

Demographics-based generation:
- Age-specific considerations
- Sex-specific conditions
- Geographic/occupational exposures
- Comorbidity-associated conditions

## Common Diagnostic Errors

### Cognitive Errors

| Error | Mechanism | Prevention |
|-------|-----------|------------|
| Premature closure | Stopping at first diagnosis | Force consideration of alternatives |
| Anchoring | Failure to adjust from initial impression | Actively seek disconfirming evidence |
| Availability | Overweighting recent experience | Use systematic frameworks |
| Confirmation bias | Seeking only supporting evidence | Actively look for contradictory data |
| Framing effect | How information is presented affects decision | Re-frame the problem |
| Diagnosis momentum | Previous diagnoses accepted without question | Re-evaluate each encounter independently |

### System-Related Errors

- Inadequate information gathering
- Faulty data synthesis
- Inefficient or incorrect testing
- Communication failures
- Follow-up failures`,
      keyTerms: [
        { term: 'dual-process theory', definition: 'Framework describing fast, intuitive (System 1) and slow, analytical (System 2) thinking in diagnostic reasoning' },
        { term: 'illness script', definition: 'Mental representation of a disease containing epidemiology, pathophysiology, and clinical manifestations' },
        { term: 'heuristic', definition: 'Mental shortcut that simplifies decision-making, often useful but can lead to bias' },
        { term: 'anchoring bias', definition: 'Cognitive error of over-relying on initial information when making decisions' },
        { term: 'premature closure', definition: 'Diagnostic error of accepting a diagnosis before adequately verifying it or considering alternatives' },
        { term: 'likelihood ratio', definition: 'Measure of how much a test result changes the probability of disease; LR+ >10 significantly increases probability, LR- <0.1 significantly decreases it' },
        { term: 'SnOUT', definition: 'When a test has high Sensitivity, a Negative result rules OUT the disease' },
        { term: 'SpIN', definition: 'When a test has high Specificity, a Positive result rules IN the disease' },
      ],
      clinicalNotes: 'Effective diagnostic reasoning requires seamless integration of both System 1 (pattern recognition) and System 2 (analytical) thinking. Experts use pattern recognition efficiently but know when to engage analytical verification. The key is knowing when to trust your intuition and when to slow down and think systematically.',
    },
    4: {
      level: 4,
      summary: 'Advanced diagnostic reasoning integrates sophisticated pattern recognition, Bayesian probability revision, metacognitive awareness, and illness script refinement to achieve diagnostic accuracy in complex clinical scenarios.',
      explanation: `# Advanced Diagnostic Reasoning

## Expert-Novice Differences in Diagnostic Reasoning

### Knowledge Organization

**Novice organization:**
- Diseases organized by categories
- Limited cross-referencing
- Incomplete illness scripts
- Difficulty with atypical presentations

**Expert organization:**
- Diseases organized around clinical problems
- Richly interconnected knowledge
- Sophisticated illness scripts with exceptions
- Flexible pattern recognition

### Pattern Recognition Capability

**Expert advantages:**
1. **Rapid script activation:** Faster recognition of patterns
2. **Script refinement:** Better-tuned scripts through experience
3. **Exception knowledge:** Knows when patterns don't fit
4. **Script flexibility:** Can apply scripts to atypical cases

**Script matching process:**
- Input: Patient features (symptoms, signs, context)
- Process: Parallel comparison to stored scripts
- Output: Ranked differential by similarity match
- Verification: Analytical confirmation when needed

## Bayesian Reasoning in Clinical Practice

### Formal Bayesian Updating

**Formula:**
Post-test odds = Pre-test odds × Likelihood ratio

**Stepwise application:**
1. Convert pre-test probability to odds: P/(1-P)
2. Multiply by likelihood ratio
3. Convert back to probability: O/(1+O)

**Clinical example - Pulmonary Embolism:**
- Pre-test probability: 20% (based on Wells score)
- Pre-test odds: 0.20/(1-0.20) = 0.25
- D-dimer LR- (sensitive test): 0.05
- Post-test odds: 0.25 × 0.05 = 0.0125
- Post-test probability: 0.0125/(1+0.0125) = 1.2%

### Threshold Model of Decision-Making

**Testing threshold:**
- Pre-test probability below which no testing indicated
- Disease sufficiently unlikely that false positives outweigh benefits

**Treatment threshold:**
- Pre-test probability above which treat without testing
- Disease sufficiently likely that treatment outweighs risk of confirmation

**Testing zone:**
- Between testing and treatment thresholds
- Results will meaningfully change management
- Where diagnostic tests are most valuable

**Threshold calculation:**
\`\`\`
Testing Threshold = [Specificity × (Harm of treating non-disease)] /
                  [Specificity × (Harm of treating non-disease) +
                   Sensitivity × (Harm of not treating disease)]

Treatment Threshold = [Sensitivity × (Harm of not treating disease)] /
                     [Sensitivity × (Harm of not treating disease) +
                      (1-Specificity) × (Harm of treating non-disease)]
\`\`\`

## Cognitive Debiasing Strategies

### Primary Prevention (Before Bias Occurs)

**Cognitive forcing strategies:**

1. **Universal antidote**
   - Always ask "What else could this be?"
   - Simple but effective for premature closure

2. **Pre-commitment to differential**
   - Generate differential BEFORE reviewing records
   - Prevents anchoring on previous diagnoses

3. **Structured case representation**
   - Use semantic qualifiers consistently
   - Reduces framing effects

### Secondary Prevention (During Reasoning)

**Real-time bias detection:**

1. **Metacognitive awareness**
   - Monitor own thinking process
   - Recognize when using heuristics
   - Question automatic conclusions

2. **Red flag recognition**
   - Feeling of cognitive strain
   - Multiple competing hypotheses
   - Discrepant findings
   - Atypical features

3. **Strategic slowing**
   - Recognize situations requiring System 2
   - Deliberately engage analytical reasoning
   - Allocate time for careful consideration

### Tertiary Prevention (After Initial Conclusion)

**Reconsideration strategies:**

1. **Diagnostic time-out**
   - Structured pause before disposition
   - Review of reasoning process
   - Final consideration of alternatives

2. **Adverse diagnosis**
   - "What if this is wrong?"
   - Identify features that don't fit
   - Plan for unexpected outcomes

3. **Second opinion mechanisms**
   - Formal consultation for difficult cases
   - Peer review of diagnostic decisions
   - Morbidity and mortality conferences

## Problem Representation

### Semantic Qualifiers

Structured way to describe clinical problems:

**Categories:**
- Temporal: acute vs. chronic, episodic vs. continuous
- Anatomic: localized vs. generalized, unilateral vs. bilateral
- Severity: mild vs. severe, stable vs. progressive
- Content: fluid vs. solid, inflammatory vs. non-inflammatory

**Example:**
"A 45-year-old woman with [acute onset], [severe], [unilateral] [right-sided] [throbbing] headache, [progressive over 3 hours], [associated with nausea] and [photophobia]."

### The One-Liner Summary

**Purpose:**
- Efficient communication
- Highlights key features
- Guides diagnostic thinking

**Structure:**
"[Age/Sex] with [temporal pattern], [anatomic location], [severity], [quality] [symptom], [timing], [associated features], [pertinent negatives], [relevant context]."

**Example:**
"68-year-old hypertensive male with sudden onset severe tearing chest pain radiating to back, with unequal arm blood pressures and pulse deficit."

## Diagnostic Uncertainty

### Types of Uncertainty

**1. Aleatory uncertainty**
- Inherent randomness in disease expression
- Cannot be eliminated with more information
- Managed through probabilistic reasoning

**2. Epistemic uncertainty**
- Knowledge gaps about specific case
- Can be reduced with testing
- Managed through information gathering

**3. Conceptual uncertainty**
- Limitations in medical knowledge
- Gaps in understanding of disease
- Managed through best available evidence

### Strategies for Uncertainty

**Explicit acknowledgment:**
- "I'm not certain what's causing this yet"
- "There are several possibilities"
- "We need more information"

**Probabilistic communication:**
- Quantify likelihood when possible
- Use natural language appropriately
- Avoid false precision

**Safety netting:**
- Clear return precautions
- Specific worsening symptoms
- Follow-up arrangements

## Domain-Specific Reasoning

### Ambulatory Care

**Characteristics:**
- Lower prevalence of serious disease
- More time-pressured
- Longitudinal relationships
- Higher value on history taking

**Strategies:**
- Higher threshold for testing
- Greater reliance on watchful waiting
- Use of trial of therapy
- Follow-up as diagnostic tool

### Emergency Care

**Characteristics:**
- Higher prevalence of serious disease
- Time-critical decisions
- Limited information
- One-time encounters

**Strategies:**
- Rule out dangerous conditions first
- Broader differentials initially
- Lower threshold for testing
- Admit for observation when uncertain

### Inpatient Care

**Characteristics:**
- Complex, multisystem problems
- Comorbidities clouding presentation
- Access to extensive testing
- Ability to observe over time

**Strategies:**
- Hickam's dictum (multiple diagnoses) often applies
- Daily diagnostic refinement
- Multidisciplinary input
- Response to therapy as diagnostic tool`,
      keyTerms: [
        { term: 'testing threshold', definition: 'Pre-test probability below which testing is not indicated because disease is sufficiently unlikely that false positives would outweigh benefits' },
        { term: 'treatment threshold', definition: 'Pre-test probability above which empirical treatment should proceed without further diagnostic confirmation' },
        { term: 'semantic qualifiers', definition: 'Structured terms used to describe clinical features (temporal, anatomic, qualitative) that facilitate systematic problem representation' },
        { term: 'aleatory uncertainty', definition: 'Irreducible uncertainty from inherent randomness in disease expression and patient factors' },
        { term: 'epistemic uncertainty', definition: 'Uncertainty from gaps in knowledge about a specific case that can potentially be reduced with more information' },
        { term: 'safety netting', definition: 'Providing patients with clear instructions about what symptoms should prompt them to seek follow-up care' },
      ],
      clinicalNotes: 'Diagnostic expertise involves more than knowledge - it requires metacognitive awareness, the ability to recognize uncertainty, and knowledge of when pattern recognition is sufficient versus when analytical reasoning is required. Experts are distinguished by their calibrated confidence - they know when to be confident and when to be uncertain.',
    },
    5: {
      level: 5,
      summary: 'Expert diagnostic reasoning integrates automated pattern recognition, Bayesian decision analysis, cognitive debiasing, metacognitive calibration, and system-level optimization to achieve diagnostic excellence in the face of uncertainty.',
      explanation: `# Expert Diagnostic Reasoning: Mastery and Metacognition

## The Architecture of Expertise

### Acquisition of Diagnostic Expertise

**Stages of development:**

1. **Knowledge acquisition phase (medical student)**
   - Accumulating facts and concepts
   - Learning basic illness scripts
   - Understanding pathophysiology
   - Limited pattern recognition

2. **Knowledge organization phase (resident)**
   - Restructuring knowledge around clinical problems
   - Building script library through exposure
   - Learning to differentiate similar conditions
   - Developing clinical pattern recognition

3. **Pattern compilation phase (early career)**
   - Refining scripts with real-world experience
   - Calibrating clinical intuition
   - Learning atypical presentations
   - Developing metacognitive awareness

4. **Expertise phase (experienced clinician)**
   - Sophisticated, nuanced scripts
   - Efficient pattern recognition
   - Superior calibration
   - Effective metacognition

### Expert-Novice Differences: Cognitive Neuroscience

**Chunking capacity:**
- Experts process larger "chunks" of clinical information
- See patterns rather than isolated findings
- More efficient working memory use

**Script activation:**
- Experts: Faster, more automatic activation
- Experts: Better discrimination between similar scripts
- Experts: More sophisticated matching with partial information

**Metacognitive monitoring:**
- Experts: Better at knowing what they don't know
- Experts: More accurate confidence calibration
- Experts: More likely to recognize when analytical thinking is needed

## Bayesian Mastery

### Probability Theory in Practice

**Formal Bayesian updating:**

For expert-level probabilistic reasoning:

1. **Pre-test probability assessment**
   - Use clinical prediction rules when available
   - Calibrate personal heuristics against outcomes
   - Adjust for atypical features

2. **Likelihood ratio application**
   - Know high-impact LRs for common tests
   - Understand conditional dependencies
   - Account for spectrum bias

3. **Post-test probability calculation**
   - Formal calculation for high-stakes decisions
   - Intuitive for routine cases
   - Understand confidence intervals

### Advanced Test Interpretation

**Spectrum effects:**
- Test performance varies by disease severity
- Sensitivity higher for severe disease
- Specificity lower for mild/atypical disease
- Adjust interpretation accordingly

**Conditional dependence:**
- Tests are rarely independent
- Positive results on correlated tests don't provide as much new information
- Bayesian updating assumes independence - often violated

**Verification bias:**
- Gold standard applied preferentially
- Overestimates test accuracy in literature
- Adjust real-world expectations downward

### Decision Analysis Framework

**Expected value decision making:**

When stakes are high and uncertainty significant:

1. **Define decision nodes** (test, treat, wait)
2. **Assign probabilities** to outcomes
3. **Assign utilities** (patient preference-weighted)
4. **Calculate expected value** for each option
5. **Perform sensitivity analysis** on key variables

**Clinical applications:**
- Whether to anticoagulate in PE with high bleed risk
- Whether to operate on borderline surgical candidate
- Whether to pursue aggressive diagnosis vs. empiric treatment

## Cognitive Science and Debiasing

### Dual-Process Theory: Advanced Integration

**Optimal System 1/System 2 integration:**

| Situation | Appropriate Mode | Rationale |
|-----------|------------------|-----------|
| Common condition, classic presentation | System 1 | Efficient, accurate |
| Uncommon condition | System 1 → System 2 verification | Pattern recognition with safety check |
| Atypical presentation | System 2 | Pattern recognition unreliable |
| High-stakes diagnosis | System 2 | Error cost too high |
| Information overload | System 2 | System 1 prone to bias |
| Fatigue, distraction | System 2 | System 1 less reliable |

**Calibration of confidence:**
- Well-calibrated clinicians know when they're likely right
- Overconfidence leads to premature closure
- Underconfidence leads to over-testing
- Tracking outcomes improves calibration

### Comprehensive Cognitive Bias Management

**Primary debiasing (design):**

1. **Cognitive forcing strategies**
   - Universal antidote: "What else could this be?"
   - Diagnostic time-out before disposition
   - Structured differential generation

2. **Environmental design**
   - Reduce cognitive load
   - Minimize interruptions during reasoning
   - Optimize information presentation

**Secondary debiasing (process):**

1. **Metacognitive monitoring**
   - Watch for feeling of strain
   - Recognize when pattern doesn't fit
   - Monitor emotional reactions

2. **Strategic slowing**
   - Recognize situations requiring System 2
   - Allocate time for deliberate reasoning
   - Use decision aids when appropriate

**Tertiary debiasing (outcome):**

1. **Outcome feedback**
   - Track diagnostic accuracy
   - Review discrepant cases
   - Learn from errors

2. **Quality improvement**
   - Morbidity and mortality review
   - Diagnostic error reporting systems
   - Peer review of difficult cases

## Metacognitive Expertise

### Types of Metacognition

**Metacognitive knowledge:**
- Knowing what one knows and doesn't know
- Understanding personal bias patterns
- Recognizing limitations of knowledge

**Metacognitive regulation:**
- Planning: Setting diagnostic approach
- Monitoring: Checking reasoning during process
- Evaluating: Judging adequacy of conclusion

**Metacognitive experiences:**
- Feeling of knowing (or not knowing)
- Feeling of difficulty
- Judgment of learning

### Calibration Development

**Confidence-accuracy alignment:**

Expert clinicians are distinguished by:
- Appropriate confidence in certain diagnoses
- Appropriate uncertainty in uncertain situations
- Recognition of when pattern recognition may fail
- Willingness to acknowledge ignorance

**Calibration improvement:**
- Seek outcome data systematically
- Compare predictions to actual outcomes
- Reflect on diagnostic successes and failures
- Adjust confidence based on feedback

## System-Level Diagnostic Excellence

### Organizational Factors

**Diagnostic safety infrastructure:**

1. **Diagnostic support systems**
   - Clinical decision support
   - Differential diagnosis generators
   - Test interpretation guidance

2. **Communication systems**
   - Structured handoffs
   - Consultation mechanisms
   - Result notification systems

3. **Learning systems**
   - Morbidity and mortality conferences
   - Diagnostic error review
   - Outcome tracking and feedback

### Team-Based Diagnosis

**Collective intelligence:**
- Diverse perspectives reduce individual bias
- Team discussion exposes reasoning
- Cross-disciplinary input broadens differential
- Shared mental models improve coordination

**Effective consultation:**
- Clear question formulation
- Efficient information transfer
- Explicit diagnostic reasoning
- Collaborative problem-solving

### Diagnostic Technology Integration

**Artificial intelligence applications:**

Current and emerging uses:
- Diagnostic pattern recognition (imaging, ECG)
- Differential diagnosis generation
- Clinical prediction rule application
- Risk stratification

**Human-AI collaboration principles:**
- AI as tool, not replacement
- Understanding AI limitations
- Maintaining human oversight
- Using AI to augment, not replace, clinical judgment

## Managing Uncertainty at the Expert Level

### Uncertainty Taxonomy

**Epistemic uncertainty** (reducible):
- Knowledge about specific case
- Can be decreased with testing
- Diagnostic workup targets this

**Aleatory uncertainty** (irreducible):
- Randomness in disease expression
- Cannot be eliminated
- Managed probabilistically

**Ontological uncertainty** (fundamental):
- Limits of medical knowledge
- Unknown disease mechanisms
- Accepted as inherent to medicine

### Advanced Uncertainty Management

**Communication strategies:**

1. **Quantitative when possible**
   - Use numerical probabilities
   - Explain confidence intervals
   - Use natural frequency formats

2. **Qualitative when necessary**
   - Use calibrated language ("very unlikely" vs. "unlikely")
   - Explicitly acknowledge uncertainty
   - Avoid false precision

3. **Shared decision-making**
   - Present options honestly
   - Explore patient values
   - Incorporate patient preferences
   - Document shared decisions

### Diagnostic Time-Out Protocol

**Structured pause before final diagnosis:**

1. **Stop**: Before finalizing, pause deliberately
2. **Review**: What else could this be?
3. **Verify**: Does diagnosis explain ALL findings?
4. **Consider**: What diagnoses cannot be missed?
5. **Plan**: What if this diagnosis is wrong?

## Continuous Improvement

### Deliberate Practice

**Components:**
- Focused, systematic practice
- Immediate, informative feedback
- Repetitive performance
- Correction of errors

**Applications:**
- Case-based learning
- Simulation exercises
- Outcome tracking
- Reflection on practice

### Feedback Loops

**Essential feedback sources:**

1. **Patient outcomes**
   - Follow-up on diagnoses
   - Treatment response
   - Pathology/surgical confirmation

2. **Peer feedback**
   - Case conferences
   - Consultations
   - Morbidity and mortality review

3. **Self-monitoring**
   - Track diagnostic accuracy
   - Identify common errors
   - Reflect on difficult cases

### Knowledge Maintenance

**Staying current:**
- New disease understanding
- Changing epidemiology
- Novel diagnostic technologies
- Updated clinical prediction rules
- Evolving diagnostic criteria`,
      keyTerms: [
        { term: 'chunking', definition: 'Cognitive process of grouping individual pieces of information into larger, meaningful units; experts process clinical information in larger chunks than novices' },
        { term: 'calibration', definition: 'Alignment between confidence and accuracy; well-calibrated clinicians are as confident as they are correct' },
        { term: 'metacognition', definition: 'Thinking about thinking; includes knowledge about one\'s cognitive processes and regulation of those processes' },
        { term: 'spectrum bias', definition: 'Variation in test performance across disease severity spectrum; tests often perform better in severe disease than in mild or atypical disease' },
        { term: 'conditional dependence', definition: 'Statistical relationship between diagnostic tests; violates assumption of independence needed for simple Bayesian updating' },
        { term: 'verification bias', definition: 'Systematic error in test performance studies when gold standard is applied preferentially to those with positive index test' },
        { term: 'diagnostic time-out', definition: 'Structured pause before finalizing diagnosis to deliberately reconsider alternatives and verify reasoning' },
        { term: 'shared decision-making', definition: 'Collaborative process where clinician and patient make decisions together, incorporating best available evidence and patient values' },
      ],
      clinicalNotes: 'Diagnostic excellence is not about infallibility. Experts make errors too, but they: (1) recognize situations prone to error, (2) employ strategies to reduce errors, (3) know when they\'re uncertain, (4) seek appropriate verification, and (5) learn systematically from experience. The mark of expertise is not perfection but calibrated confidence coupled with effective metacognition.',
      patientCounselingPoints: [
        'Your doctor uses both fast pattern recognition and careful analytical thinking to diagnose you - ask them to explain their reasoning.',
        'Sometimes the diagnosis isn\'t immediately clear - this uncertainty is normal in medicine, not a sign of incompetence.',
        'A "watch and wait" approach can be medically appropriate - it doesn\'t mean your doctor isn\'t taking you seriously.',
        'Getting a second opinion is reasonable when facing serious or uncertain diagnoses.',
        'Tell your doctor if you feel they\'ve stopped considering other possibilities too quickly.',
      ],
    },
  },

  media: [],
  citations: [
    {
      id: 'cite-croskerry-2009',
      type: 'article',
      title: 'A Universal Model of Diagnostic Reasoning',
      authors: ['Croskerry P'],
      source: 'Academic Medicine',
      url: 'https://journals.lww.com/academicmedicine/Abstract/2009/08000/A_Universal_Model_of_Diagnostic_Reasoning.13.aspx',
      license: 'Journal Article',
    },
    {
      id: 'cite-kahneman-2011',
      type: 'textbook',
      title: 'Thinking, Fast and Slow',
      authors: ['Kahneman D'],
      source: 'Farrar, Straus and Giroux',
      license: 'Book',
    },
    {
      id: 'cite-graber-2017',
      type: 'article',
      title: 'The incidence of diagnostic error in medicine',
      authors: ['Graber ML', 'Tamariz L', 'Chapman WW', 'Eva KW'],
      source: 'BMJ Quality & Safety',
      url: 'https://qualitysafety.bmj.com/content/26/1/21',
      license: 'Journal Article',
    },
    {
      id: 'cite-norman-2007',
      type: 'article',
      title: 'Expertise and Diagnostic Reasoning',
      authors: ['Norman G'],
      source: 'Medical Education',
      url: 'https://onlinelibrary.wiley.com/doi/10.1111/j.1365-2923.2007.02880.x',
      license: 'Journal Article',
    },
    {
      id: 'cite-pauker-1980',
      type: 'article',
      title: 'The Threshold Model in Clinical Decision Making',
      authors: ['Pauker SG', 'Kassirer JP'],
      source: 'New England Journal of Medicine',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJM198003063021005',
      license: 'Journal Article',
    },
  ],
  crossReferences: [
    {
      targetId: 'clinical-reasoning-differential-diagnosis',
      targetType: 'concept',
      relationship: 'related',
      label: 'Differential Diagnosis',
    },
    {
      targetId: 'clinical-reasoning-red-flags',
      targetType: 'concept',
      relationship: 'related',
      label: 'Red Flags',
    },
  ],
  tags: {
    systems: [],
    topics: ['clinical-reasoning', 'diagnostic-reasoning', 'cognitive-science', 'medical-education'],
    keywords: ['diagnostic reasoning', 'clinical reasoning', 'cognitive bias', 'pattern recognition', 'Bayesian reasoning', 'metacognition', 'diagnostic error'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      shelf: ['medicine', 'surgery', 'pediatrics', 'psychiatry', 'family-medicine'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
