/**
 * Differential Diagnosis Educational Content
 *
 * Systematic approaches to building and narrowing differential diagnoses,
 * including common patterns, pitfalls, and the balance between Occam's razor
 * and Hickam's dictum.
 */

import { EducationalContent } from '../types';

export const DIFFERENTIAL_DIAGNOSIS_CONTENT: EducationalContent = {
  id: 'clinical-reasoning-differential-diagnosis',
  type: 'concept',
  name: 'Differential Diagnosis',
  alternateNames: ['DDx', 'Diagnostic Reasoning', 'Clinical Problem Solving'],

  levels: {
    1: {
      level: 1,
      summary: 'When you have symptoms, doctors think of all the possible causes and then figure out which one is most likely.',
      explanation: `# What Is a Differential Diagnosis?

When you go to the doctor with a problem, they don't just guess what's wrong. They make a list of all the possible causes and then figure out which one fits best. This list is called a "differential diagnosis."

## How Doctors Think

Imagine you have a headache. There are many things that could cause it:
- You didn't drink enough water
- You didn't get enough sleep
- You have a cold
- You need glasses
- You ate something that gave you a headache
- And many more...

The doctor's job is to figure out which one is causing YOUR headache.

## The Steps Doctors Follow

### Step 1: Listen to Your Story
- When did the problem start?
- What does it feel like?
- What makes it better or worse?
- What else is happening in your body?

### Step 2: Examine You
- Look at the part of your body that hurts
- Check your vital signs (temperature, blood pressure, etc.)
- Look for clues that point to certain causes

### Step 3: Make a List
- Put the most likely causes at the top
- Include serious causes that need to be ruled out
- Consider common things first

### Step 4: Test and Narrow Down
- Sometimes tests help pick the right answer
- Sometimes watching and waiting helps
- Cross off causes that don't fit

## Two Ways of Thinking

### "One Problem" Thinking (Occam's Razor)
- Try to explain all symptoms with one cause
- The simplest answer is often right
- Example: Tired, weak, and pale? Maybe you're anemic (low blood).

### "Multiple Problems" Thinking (Hickam's Dictum)
- Sometimes people have more than one thing wrong
- This is more common in older people
- Example: An older person might have arthritis AND diabetes causing their symptoms.

## What You Can Do to Help

Tell your doctor:
- ALL your symptoms, even if they seem unrelated
- When each symptom started
- Any medicines you take
- Your family's health history
- What you think might be wrong

The more information you give, the better the doctor can figure out what's happening.`,
      keyTerms: [
        { term: 'differential diagnosis', definition: 'A list of all the possible causes of your symptoms' },
        { term: 'symptom', definition: 'Something you feel or notice that might mean you are sick' },
        { term: 'diagnosis', definition: 'The name of what is wrong with you' },
        { term: 'rule out', definition: 'To decide that something is NOT the cause of your problem' },
      ],
      analogies: [
        'Making a differential diagnosis is like being a detective solving a mystery - you gather clues and figure out what happened.',
        'It is like when your car makes a funny noise. The mechanic thinks of all the things that could cause that noise and checks each one.',
      ],
      examples: [
        'If you have a fever and cough, the doctor might think: Is it a cold? The flu? COVID? Pneumonia? They will ask questions and maybe do tests to find out.',
        'If your belly hurts, the doctor considers: Did you eat something bad? Do you have a stomach bug? Is it your appendix? They narrow it down by where it hurts and other clues.',
      ],
    },
    2: {
      level: 2,
      summary: 'Differential diagnosis is the systematic process of identifying possible causes for a patient\'s symptoms, then using clinical reasoning and testing to determine the correct diagnosis.',
      explanation: `# Understanding Differential Diagnosis

## The Diagnostic Process

When a patient presents with symptoms, physicians develop a list of potential diagnoses and systematically work through them.

### Building the Differential

**Step 1: Gather Information**
- Chief complaint: The main reason for the visit
- History of present illness: Details about current symptoms
- Past medical history: Previous health conditions
- Review of systems: Check for symptoms in other body systems
- Physical examination: Look for signs of disease

**Step 2: Generate Possibilities**
- Consider common causes first (common things are common)
- Include serious conditions that must not be missed
- Think about conditions that are treatable
- Consider the patient's risk factors

**Step 3: Prioritize the List**
- Most likely diagnosis (working diagnosis)
- Dangerous conditions to rule out
- Other reasonable possibilities

### Frameworks for Differential Diagnosis

**Anatomical Approach:**
Think about what structures could cause the symptom.
- Example for chest pain: Heart, lungs, esophagus, chest wall, nerves

**Categories of Disease (VINDICATE):**
- **V**ascular (blood vessel problems)
- **I**nfection
- **N**eoplasm (cancer)
- **D**egenerative
- **I**ntoxication/Iatrogenic (drugs/medical treatments)
- **C**ongenital (born with it)
- **A**utoimmune
- **T**rauma
- **E**ndocrine (hormone problems)

**Organ System Approach:**
Consider which body systems could be involved.

## Occam's Razor vs. Hickam's Dictum

These are two different ways of thinking about diagnoses:

### Occam's Razor
"The simplest explanation is usually correct."
- Try to explain all symptoms with ONE diagnosis
- Works well in younger, healthier patients
- Example: A young person with fatigue, weight loss, and increased thirst probably has diabetes (one condition explains all).

### Hickam's Dictum
"A patient can have as many diseases as they darn well please."
- Sometimes multiple problems exist simultaneously
- More common in elderly patients with many conditions
- Example: An 80-year-old with fatigue might have anemia AND depression AND medication side effects all contributing.

## Common Patterns

### Red Herrings
- Symptoms that distract from the real diagnosis
- Example: Focusing on knee pain when the hip is actually the problem

### Premature Closure
- Settling on a diagnosis too quickly
- Not considering other possibilities
- A common cause of diagnostic errors

### Anchoring
- Getting stuck on the first diagnosis considered
- Not adjusting when new information comes in

## Testing Strategy

**When to test:**
- When results would change management
- To confirm a suspected diagnosis
- To rule out dangerous conditions

**When NOT to test:**
- When results won't change anything
- When pre-test probability is very low or very high
- When risks outweigh benefits

## Narrowing the Differential

| Method | How It Helps |
|--------|--------------|
| More history | New symptoms point toward or away from diagnoses |
| Physical exam | Signs can confirm or exclude possibilities |
| Laboratory tests | Objective data to support or refute diagnoses |
| Imaging | Visualize structures to identify abnormalities |
| Response to treatment | Trial of therapy can be diagnostic |
| Time | Some conditions declare themselves over time |`,
      keyTerms: [
        { term: 'chief complaint', definition: 'The main symptom or reason the patient came to see the doctor', pronunciation: 'cheef kum-PLAYNT' },
        { term: 'working diagnosis', definition: 'The most likely diagnosis that guides initial treatment' },
        { term: 'Occam\'s razor', definition: 'The principle that the simplest explanation (one diagnosis) is usually correct', pronunciation: 'OK-umz RAY-zer' },
        { term: 'Hickam\'s dictum', definition: 'The principle that patients can have multiple diagnoses simultaneously', pronunciation: 'HIK-umz DIK-tum' },
        { term: 'premature closure', definition: 'The error of settling on a diagnosis before adequately considering alternatives' },
      ],
      analogies: [
        'Building a differential is like solving a puzzle - each piece of information helps you see the bigger picture.',
        'Testing in medicine is like using a flashlight in a dark room - you shine it where you think something might be.',
      ],
      examples: [
        'A patient with sudden severe headache: The differential includes migraine (common), tension headache (common), but also subarachnoid hemorrhage (rare but dangerous) that must be ruled out.',
        'A patient with chest pain and shortness of breath: Consider heart attack, pulmonary embolism, pneumonia, anxiety - each requires different evaluation.',
      ],
    },
    3: {
      level: 3,
      summary: 'Differential diagnosis employs systematic clinical reasoning frameworks, probabilistic thinking, and evidence-based testing strategies to efficiently navigate from symptom presentation to accurate diagnosis.',
      explanation: `# Systematic Differential Diagnosis

## Constructing the Differential

### Information Gathering Framework

**History of Present Illness (HPI) - OPQRST:**
- **O**nset: When and how did it start?
- **P**rovocation/Palliation: What makes it worse/better?
- **Q**uality: What does it feel like?
- **R**adiation: Does it spread?
- **S**everity: How bad is it (0-10)?
- **T**iming: Constant vs. intermittent, duration?

**Additional History Elements:**
- Associated symptoms
- Risk factors
- Past medical/surgical history
- Medications (including OTC, supplements)
- Social history (occupation, travel, exposures)
- Family history

### Differential Generation Strategies

**1. Anatomical/Structural Approach**
Consider structures in the region of symptoms:

*Example - Right Upper Quadrant Pain:*
- Hepatobiliary: Cholecystitis, hepatitis, liver abscess
- Gastrointestinal: Peptic ulcer, gastritis
- Pulmonary: Pneumonia, pulmonary embolism
- Cardiac: Inferior MI (referred pain)
- Musculoskeletal: Rib fracture, muscle strain
- Renal: Nephrolithiasis, pyelonephritis

**2. Pathophysiological Categories (VINDICATE-P)**
- **V**ascular: Ischemia, hemorrhage, thrombosis
- **I**nfectious: Bacterial, viral, fungal, parasitic
- **N**eoplastic: Primary, metastatic
- **D**egenerative: Osteoarthritis, dementia
- **I**atrogenic/Intoxication: Drug effects, poisoning
- **C**ongenital: Structural anomalies
- **A**utoimmune/Allergic: Inflammatory conditions
- **T**raumatic: Injury, post-procedural
- **E**ndocrine/Metabolic: Hormone disorders
- **P**sychiatric: Somatization, conversion

**3. Epidemiological Approach**
Consider patient demographics and risk factors:
- Age-specific conditions
- Sex-specific conditions
- Geographic/occupational exposures
- Comorbidity-associated conditions

### Prioritizing the Differential

**Three-Tiered Approach:**

1. **Must-Not-Miss Diagnoses**
   - Life-threatening if delayed
   - Require immediate action
   - Example: MI, PE, meningitis, ectopic pregnancy

2. **Most Likely Diagnoses**
   - Common conditions fitting presentation
   - Working diagnosis for initial management
   - Example: GERD for typical heartburn

3. **Other Considerations**
   - Less common but possible
   - May become more likely with additional information

## Probabilistic Reasoning

### Pre-Test Probability

Before testing, estimate the likelihood of disease based on:
- Clinical presentation
- Risk factors
- Disease prevalence

### Post-Test Probability

After testing, updated probability depends on:
- Pre-test probability
- Test sensitivity and specificity
- Positive/negative likelihood ratios

**Likelihood Ratio Application:**
- LR+ >10: Significantly increases probability
- LR+ 5-10: Moderately increases probability
- LR+ 2-5: Slightly increases probability
- LR- 0.2-0.5: Slightly decreases probability
- LR- 0.1-0.2: Moderately decreases probability
- LR- <0.1: Significantly decreases probability

## Occam's Razor vs. Hickam's Dictum

### When Occam's Razor Applies

**Favored when:**
- Young, previously healthy patient
- Symptom constellation suggests unifying diagnosis
- Classic presentation for known syndrome
- Pathophysiological connection between symptoms

**Example:**
- 25-year-old with fever, pharyngitis, lymphadenopathy, hepatosplenomegaly
- Single diagnosis: Infectious mononucleosis

### When Hickam's Dictum Applies

**Favored when:**
- Elderly patient with multiple comorbidities
- Symptoms from unrelated organ systems
- No clear unifying pathophysiology
- Polypharmacy present

**Example:**
- 75-year-old with fatigue, dyspnea, and confusion
- Multiple diagnoses: Anemia (fatigue), CHF (dyspnea), UTI (confusion)

## Common Cognitive Errors

### Pattern Recognition Failures

| Error Type | Description | Mitigation |
|------------|-------------|------------|
| Anchoring | Fixating on initial impression | Deliberately consider alternatives |
| Availability | Overweighting recent experience | Use systematic frameworks |
| Premature closure | Stopping too early | Ask "What else could this be?" |
| Confirmation bias | Seeking supporting evidence only | Seek disconfirming evidence |
| Representativeness | Expecting classic presentations | Remember atypical presentations |

### Strategies to Avoid Errors

1. **Diagnostic timeout:** Pause before finalizing diagnosis
2. **Worst-case scenario:** Always consider serious diagnoses
3. **Forced consideration:** Deliberately generate alternatives
4. **Second opinion:** Fresh perspective can identify blind spots
5. **Revisit diagnosis:** Reassess if patient not improving

## Testing Strategy

### When to Order Tests

**High-yield situations:**
- Test will meaningfully change post-test probability
- Result will alter management
- Pre-test probability in "testing threshold" range (~10-90%)

**Low-yield situations:**
- Very low pre-test probability (test more likely false positive)
- Very high pre-test probability (test more likely false negative)
- Result won't change management

### Parallel vs. Serial Testing

**Parallel (simultaneous):**
- Used when rapid diagnosis needed
- When missing diagnosis has serious consequences
- Increases sensitivity, decreases specificity

**Serial (sequential):**
- Used when time allows
- Positive result from sensitive test followed by specific test
- More efficient resource use`,
      keyTerms: [
        { term: 'pre-test probability', definition: 'The estimated likelihood of disease before testing, based on clinical information' },
        { term: 'likelihood ratio', definition: 'Indicates how much a test result changes the probability of disease; calculated from sensitivity and specificity' },
        { term: 'anchoring bias', definition: 'Cognitive error of relying too heavily on initial information when making diagnostic decisions' },
        { term: 'diagnostic timeout', definition: 'Deliberate pause in diagnostic process to reconsider the differential and avoid premature closure' },
        { term: 'testing threshold', definition: 'The range of pre-test probability where testing is most valuable, typically 10-90%' },
      ],
      clinicalNotes: 'Effective diagnosis requires balancing thoroughness with efficiency. The goal is not to consider every possible diagnosis, but to systematically identify the most likely and most dangerous possibilities.',
    },
    4: {
      level: 4,
      summary: 'Advanced differential diagnosis integrates Bayesian reasoning, illness script matching, pattern recognition with analytical verification, and metacognitive strategies to optimize diagnostic accuracy while managing cognitive biases.',
      explanation: `# Advanced Diagnostic Reasoning

## Dual-Process Theory

Diagnostic reasoning involves two complementary cognitive systems:

### System 1: Intuitive/Pattern Recognition
- Fast, automatic, effortless
- Pattern matching to illness scripts
- Heuristics and mental shortcuts
- Drives most routine diagnoses
- Prone to bias without oversight

### System 2: Analytical
- Slow, deliberate, effortful
- Systematic differential generation
- Probabilistic reasoning
- Hypothesis testing
- Resource-intensive but thorough

### Optimal Integration
- System 1 generates initial hypotheses
- System 2 verifies and refines
- Calibrated confidence triggers appropriate verification
- Expertise enables better pattern recognition AND better verification

## Illness Scripts and Pattern Recognition

### Illness Script Structure

**Components:**
1. **Enabling conditions:** Epidemiology, risk factors, predisposing features
2. **Fault:** Underlying pathophysiology
3. **Consequences:** Symptoms, signs, laboratory/imaging findings

**Example - Pulmonary Embolism:**
- Enabling: Immobilization, recent surgery, malignancy, hypercoagulable state, OCP use
- Fault: Venous thromboembolism, typically from DVT, lodging in pulmonary vasculature
- Consequences: Dyspnea, pleuritic chest pain, tachycardia, hypoxemia, elevated D-dimer, CT findings

### Pattern Recognition Triggers

**Classic Presentations (high pattern recognition reliability):**
- Crushing substernal chest pain radiating to left arm with diaphoresis → ACS
- Sudden severe headache "worst of life" → Subarachnoid hemorrhage
- Painless jaundice with palpable gallbladder → Periampullary malignancy (Courvoisier's)

**Atypical Presentations (require analytical backup):**
- Diabetic with fatigue and dyspnea → Could be ACS equivalent
- Elderly with confusion → Vast differential including infection, metabolic, cardiac
- Immunocompromised with fever → Atypical pathogens, attenuated response

## Bayesian Reasoning in Practice

### Pre-Test Probability Estimation

**Methods:**
1. **Clinical gestalt:** Experience-based estimate
2. **Clinical prediction rules:** Validated scoring systems
3. **Published prevalence data:** Literature-based estimates
4. **Anchor and adjust:** Start with base rate, modify for clinical features

**Example - Pulmonary Embolism:**

*Wells Score:*
- Clinical signs of DVT: +3
- PE most likely diagnosis: +3
- Heart rate >100: +1.5
- Immobilization/surgery: +1.5
- Previous DVT/PE: +1.5
- Hemoptysis: +1
- Malignancy: +1

*Pre-test probability by score:*
- <2: Low (~3% prevalence)
- 2-6: Intermediate (~20% prevalence)
- >6: High (~67% prevalence)

### Test Threshold Concept

**Definitions:**
- Testing threshold: Pre-test probability below which testing is unnecessary (disease too unlikely)
- Treatment threshold: Pre-test probability above which treatment without further testing is appropriate (disease too likely to require confirmation)

**Testing indicated when:** Testing threshold < Pre-test probability < Treatment threshold

**Threshold Calculation:**
Requires consideration of:
- Test characteristics (sensitivity, specificity)
- Disease severity
- Treatment risks and benefits
- Testing costs and risks

### Sequential Testing

**Positive result effect:** Post-test probability = (Pre-test probability × Sensitivity) / [(Pre-test probability × Sensitivity) + ((1 - Pre-test probability) × (1 - Specificity))]

**Simplified with likelihood ratios:**
Post-test odds = Pre-test odds × Likelihood ratio

**Clinical Application:**
1. Estimate pre-test probability
2. Apply test with known LR
3. Calculate post-test probability
4. Decide: treat, rule out, or further testing

## Occam vs. Hickam: Advanced Application

### Parsimony Assessment

**Factors favoring single diagnosis (Occam):**
- Symptoms cluster temporally
- Pathophysiological links exist
- Single diagnosis explains ALL findings
- Patient demographics favor single disease

**Factors favoring multiple diagnoses (Hickam):**
- Symptoms from unrelated systems
- No unifying pathophysiology apparent
- Elderly with comorbidities
- Symptoms arose at different times
- Partial response to targeted treatment

### Integration Approach

1. Begin with parsimony (seek single explanation)
2. If residual unexplained findings, consider additional diagnoses
3. Avoid both over-simplification and over-diagnosis
4. Consider whether multiple diagnoses share common underlying cause

## Metacognitive Strategies

### Calibration

**Definition:** Accuracy of confidence in diagnostic assessments

**Improving calibration:**
- Track diagnostic outcomes
- Compare confidence to accuracy
- Adjust based on feedback
- Seek outcome information

### Cognitive Forcing Strategies

| Strategy | Application | Example |
|----------|-------------|---------|
| Universal antidote | Always ask "What else could this be?" | Before concluding pneumonia, ask what else causes fever + cough |
| Diagnostic timeout | Pause before finalizing | 60-second reflection before disposition |
| Worst-case scenario | Consider high-stakes diagnoses | "If this patient died, what would the diagnosis be?" |
| Pre-mortem | Imagine diagnosis is wrong, identify why | "If this isn't appendicitis, what did I miss?" |
| Opposite | Argue against leading diagnosis | "What evidence contradicts my working diagnosis?" |

### Debiasing Techniques

**Anchoring:**
- Generate differential BEFORE reviewing prior workup
- Actively consider diagnoses inconsistent with initial impression
- Recalibrate when new information contradicts anchor

**Availability:**
- Use systematic frameworks rather than recall
- Consider base rates, not just recent experience
- Beware emotional salience of recent cases

**Premature closure:**
- Continue differential generation after "diagnosis" identified
- Require specific criteria for case closure
- Maintain problem list, not single diagnosis

## Documentation of Diagnostic Reasoning

### Effective Problem Representation

**Components:**
- Semantic qualifiers (acute vs. chronic, localized vs. diffuse)
- Key clinical features
- Pertinent negatives
- Summary statement

**Example:**
"65-year-old male smoker with acute-onset severe, tearing chest pain radiating to the back, with unequal arm blood pressures."

### Differential Documentation

**Best practice:**
- Document working diagnosis with reasoning
- List serious diagnoses being ruled out
- Explain why alternatives are less likely
- Document planned approach to diagnostic uncertainty`,
      keyTerms: [
        { term: 'dual-process theory', definition: 'Framework describing intuitive (System 1) and analytical (System 2) cognitive processes in diagnostic reasoning' },
        { term: 'illness script', definition: 'Mental representation of a disease including epidemiology, pathophysiology, and clinical features' },
        { term: 'cognitive forcing strategy', definition: 'Deliberate technique to counteract cognitive biases in diagnostic reasoning' },
        { term: 'calibration', definition: 'Accuracy of confidence in diagnostic assessments; well-calibrated clinicians are as accurate as they are confident' },
        { term: 'testing threshold', definition: 'Pre-test probability below which testing is not indicated because disease is sufficiently unlikely' },
        { term: 'treatment threshold', definition: 'Pre-test probability above which treatment should proceed without further testing' },
      ],
      clinicalNotes: 'Diagnostic expertise involves both superior pattern recognition AND superior analytical verification. Experts are characterized not by infallible intuition but by knowing when to trust intuition and when to engage deliberate analysis.',
    },
    5: {
      level: 5,
      summary: 'Expert differential diagnosis integrates pattern recognition expertise, Bayesian decision analysis, cognitive science principles, and system-level factors to achieve diagnostic excellence while managing irreducible uncertainty and resource constraints.',
      explanation: `# Expert Diagnostic Reasoning

## Expertise Development and Expression

### Deliberate Practice in Diagnosis

**Expert characteristics:**
- Rich, well-organized knowledge base
- Extensive illness script library
- Efficient pattern recognition
- Superior problem representation
- Calibrated confidence
- Effective metacognition

**Development pathway:**
1. Knowledge acquisition (medical school)
2. Knowledge organization (clinical experience)
3. Pattern compilation (repeated exposure)
4. Script refinement (feedback and reflection)
5. Metacognitive development (calibration)

### Pattern Recognition Reliability

**High-reliability contexts:**
- Classic presentations
- Common conditions
- Familiar patient populations
- Straightforward clinical scenarios

**Low-reliability contexts:**
- Atypical presentations
- Rare conditions
- Unfamiliar patient characteristics
- High-complexity scenarios
- Fatigue, interruptions, cognitive load

### Expert Calibration

**Well-calibrated reasoning:**
- Appropriate confidence for common diagnoses
- Appropriate uncertainty for atypical cases
- Recognition of pattern recognition limits
- Triggers for analytical backup

**Markers of poor calibration:**
- Overconfidence in complex cases
- Underconfidence in straightforward cases
- Failure to recognize uncertainty
- Inadequate verification of intuition

## Advanced Bayesian Decision Making

### Decision Analysis Framework

**Components:**
1. Decision tree construction
2. Probability assignment
3. Utility/value assignment
4. Expected value calculation
5. Sensitivity analysis

**Application:**
Formally model diagnostic decisions when:
- Stakes are high
- Options have uncertain outcomes
- Trade-offs are complex
- Time allows deliberate analysis

### Threshold Model Refinement

**Testing threshold factors:**
- Test sensitivity and specificity
- Disease prevalence
- Treatment efficacy
- Treatment risks
- Test risks and costs
- Patient preferences

**Threshold calculation:**
\`\`\`
Pt = [Specificity × (Harm of treating non-disease)] /
     [Specificity × (Harm of treating non-disease) +
      Sensitivity × (Harm of not treating disease)]
\`\`\`

### Sequential Testing Strategy

**Principles:**
1. Start with sensitive tests (rule out)
2. Follow with specific tests (rule in)
3. Consider conditional independence
4. Account for disease spectrum effects

**Pitfalls:**
- Assuming test independence (often violated)
- Ignoring spectrum effect (test performance varies by severity)
- Verification bias (gold standard applied differentially)

## Diagnostic Uncertainty Management

### Types of Diagnostic Uncertainty

**Aleatory uncertainty:** Inherent randomness in disease expression
- Cannot be eliminated with more information
- Managed through probabilistic reasoning

**Epistemic uncertainty:** Knowledge gaps
- Can be reduced with testing/time
- Managed through information gathering

**Practical approaches:**
- Acknowledge uncertainty explicitly
- Quantify when possible
- Plan for multiple scenarios
- Safety-net for adverse possibilities

### Disposition Under Uncertainty

**Framework for action:**
1. **High probability of serious disease:** Treat empirically
2. **Moderate probability of serious disease:** Test/observe
3. **Low probability of serious disease:** Safety-net and reassess
4. **High probability of benign disease:** Reassure with return precautions

**Shared decision-making integration:**
- Present uncertainty honestly
- Explore patient risk tolerance
- Discuss trade-offs of testing vs. empiric treatment
- Document shared decision

## System-Level Diagnostic Performance

### Diagnostic Safety

**System factors in diagnostic error:**
- Cognitive load and fatigue
- Interruptions and task-switching
- Information availability
- Team communication
- Follow-up systems
- Test result management

**Organizational strategies:**
- Diagnostic error reporting
- Morbidity and mortality review
- Second-opinion pathways
- Diagnostic checklists
- Feedback loops

### Technology Integration

**Decision support applications:**
- Differential diagnosis generators
- Clinical prediction rule calculators
- Imaging interpretation AI
- Pattern recognition assistance
- Alert systems

**Human-AI integration:**
- AI as cognitive tool, not replacement
- Maintain human oversight
- Understand AI limitations
- Use AI for System 1 enhancement, System 2 verification

### Team-Based Diagnosis

**Collective intelligence:**
- Diverse perspectives reduce bias
- Fresh eyes identify anchoring
- Multidisciplinary input enriches differential
- Structured handoffs preserve reasoning

**Effective consultation:**
- Clear question formulation
- Relevant information transfer
- Diagnostic hypothesis sharing
- Collaborative problem-solving

## Occam vs. Hickam: Expert Integration

### Diagnostic Parsimony as Hypothesis

**Bayesian perspective:**
- Prior probability of single vs. multiple diagnoses varies by context
- Patient characteristics affect prior
- Update based on clinical fit

**Population data:**
- Multiple diagnoses more common in elderly
- Comorbidity patterns are non-random
- Some conditions cluster

### Unifying Diagnosis Approach

**Systematic search for connection:**
1. Identify apparently separate problems
2. Seek pathophysiological links
3. Consider whether one condition causes/predisposes to others
4. Look for unifying underlying diagnosis

**Examples:**
- Multiple autoimmune manifestations → Single systemic disease (SLE)
- Diverse endocrine abnormalities → Single genetic syndrome (MEN)
- Multi-system inflammation → Single infectious etiology

### When Multiple Diagnoses are Parsimonious

**True diagnostic parsimony:**
- Fewest necessary diagnoses
- Not necessarily one diagnosis
- Consider complexity of alternatives

**Example:**
Patient with heart failure AND UTI may be simpler than:
- Single diagnosis requiring convoluted pathophysiology
- Rare syndrome explaining both
- Complex causal chain

## Continuous Improvement

### Feedback-Driven Learning

**Essential elements:**
- Obtain diagnostic outcomes
- Compare to predictions
- Analyze errors
- Adjust mental models

**Barriers:**
- Outcome information often unavailable
- Time delay obscures connection
- Attribution ambiguity
- Defensive processing

### Case-Based Calibration

**Regular practice:**
- Review challenging cases
- Track diagnostic accuracy
- Identify personal bias patterns
- Seek counter-examples

### Knowledge Maintenance

**Staying current:**
- New disease understanding
- Changing epidemiology
- Novel diagnostic tools
- Updated clinical prediction rules`,
      keyTerms: [
        { term: 'deliberate practice', definition: 'Purposeful, systematic practice focused on improvement through feedback and challenge' },
        { term: 'aleatory uncertainty', definition: 'Irreducible uncertainty from inherent randomness in disease expression' },
        { term: 'epistemic uncertainty', definition: 'Uncertainty from knowledge gaps that can potentially be reduced with more information' },
        { term: 'spectrum effect', definition: 'Variation in test performance across disease severity spectrum' },
        { term: 'verification bias', definition: 'Systematic error when gold standard testing is applied differentially based on initial test results' },
        { term: 'problem representation', definition: 'Mental summary of case using semantic qualifiers that facilitates diagnostic reasoning' },
      ],
      clinicalNotes: 'Diagnostic excellence requires both individual skill development and system-level support. Experts continuously refine their reasoning through deliberate reflection, outcome tracking, and engagement with diagnostic uncertainty rather than avoidance of it.',
    },
  },

  media: [],
  citations: [
    {
      id: 'cite-croskerry-clinical-cognition',
      type: 'article',
      title: 'A Universal Model of Diagnostic Reasoning',
      authors: ['Croskerry P'],
      source: 'Academic Medicine',
      url: 'https://journals.lww.com/academicmedicine/Abstract/2009/08000/A_Universal_Model_of_Diagnostic_Reasoning.13.aspx',
      license: 'Journal Article',
    },
    {
      id: 'cite-kahneman-thinking',
      type: 'textbook',
      title: 'Thinking, Fast and Slow',
      authors: ['Kahneman D'],
      source: 'Farrar, Straus and Giroux',
      license: 'Book',
    },
    {
      id: 'cite-graber-diagnostic-error',
      type: 'article',
      title: 'Diagnostic Error in Internal Medicine',
      authors: ['Graber ML', 'Franklin N', 'Gordon R'],
      source: 'Archives of Internal Medicine',
      url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/485604',
      license: 'Journal Article',
    },
    {
      id: 'cite-eva-pattern-recognition',
      type: 'article',
      title: 'What every teacher needs to know about clinical reasoning',
      authors: ['Eva KW'],
      source: 'Medical Education',
      url: 'https://onlinelibrary.wiley.com/journal/13652923',
      license: 'Journal Article',
    },
  ],
  crossReferences: [
    {
      targetId: 'clinical-reasoning-red-flags',
      targetType: 'concept',
      relationship: 'related',
      label: 'Medical Red Flags',
    },
    {
      targetId: 'clinical-reasoning-urgent-referrals',
      targetType: 'concept',
      relationship: 'related',
      label: 'Urgent Specialist Referrals',
    },
  ],
  tags: {
    systems: [],
    topics: ['clinical-reasoning', 'diagnostic-reasoning', 'cognitive-science', 'medical-education'],
    keywords: ['differential diagnosis', 'clinical reasoning', 'Occam\'s razor', 'Hickam\'s dictum', 'cognitive bias', 'diagnostic error', 'Bayesian reasoning'],
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
