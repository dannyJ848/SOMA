/**
 * Probabilistic Reasoning
 *
 * Understanding how probability and statistics inform clinical decision making
 * and diagnostic accuracy.
 */

import { EducationalContent } from '../../types';

export const probabilisticReasoningContent: EducationalContent = {
  id: 'probabilistic-reasoning',
  type: 'concept',
  name: 'Probabilistic Reasoning in Medicine',
  alternateNames: ['Medical Probability', 'Bayesian Reasoning', 'Diagnostic Probability'],

  levels: {
    1: {
      level: 1,
      summary: 'Probabilistic reasoning helps doctors figure out how likely it is that someone has a certain disease based on symptoms and test results.',
      explanation: `When doctors try to figure out what is wrong with someone, they think about probabilities - how likely different explanations are. This is called probabilistic reasoning.

**What Does Probability Mean?**

Probability is a way of talking about how likely something is to happen. We use percentages:
- 0% means it will never happen
- 50% means it might or might not happen
- 100% means it will definitely happen

**How Doctors Use Probability:**

1. **Before Testing:** Doctors estimate how likely someone is to have a disease based on:
   - Their age and gender
   - Their symptoms
   - Their risk factors
   - How common the disease is in their community

2. **After Testing:** Tests change the probability:
   - A positive test makes disease more likely
   - A negative test makes disease less likely
   - But tests are never perfect!

**Example:**
Imagine 100 people with chest pain come to the hospital:
- Maybe 15 of them are having a heart attack (15% probability)
- A blood test might help figure out which 15
- If the test is positive, the probability goes up
- If the test is negative, the probability goes down

**Why This Matters:**
Understanding probability helps doctors:
- Decide which tests to do
- Know when to worry
- Avoid unnecessary treatments
- Make better decisions`,
      keyTerms: [
        { term: 'probability', definition: 'How likely something is to happen, expressed as a percentage or fraction' },
        { term: 'risk factor', definition: 'Something that increases the chance of getting a disease' },
        { term: 'false positive', definition: 'When a test says you have a disease but you actually do not' },
        { term: 'false negative', definition: 'When a test says you do not have a disease but you actually do' },
      ],
      analogies: [
        'Medical probability is like weather forecasting - meteorologists use data to predict a 30% chance of rain, and doctors use data to predict a 30% chance of disease.',
        'It is like a detective calculating odds - given the clues, how likely is each suspect to be the culprit?',
      ],
      examples: [
        'If a disease affects 1 in 100 people in a community, a random person has a 1% probability of having it.',
        'A mammogram might detect 85% of breast cancers, meaning 15 out of 100 cancers might be missed (false negatives).',
      ],
    },
    2: {
      level: 2,
      summary: 'Probabilistic reasoning in medicine uses statistics to estimate disease likelihood before testing and update those estimates based on test results and clinical findings.',
      explanation: `Clinical medicine relies heavily on understanding and applying probability. Healthcare providers must estimate the likelihood of diseases and interpret test results within a probabilistic framework.

**Pre-Test Probability:**

Before ordering tests, clinicians estimate the probability of disease based on:
- **Prevalence:** How common is the disease in the population?
- **Risk factors:** Patient characteristics that increase likelihood
- **Clinical presentation:** Symptoms and signs that suggest the disease

**Test Characteristics:**

No test is perfect. Important concepts include:

**Sensitivity:** The percentage of people WITH the disease who test positive
- High sensitivity = few false negatives
- Good for ruling OUT disease when negative

**Specificity:** The percentage of people WITHOUT the disease who test negative  
- High specificity = few false positives
- Good for ruling IN disease when positive

**Predictive Values:**

**Positive Predictive Value (PPV):** If the test is positive, what is the probability the person has the disease?

**Negative Predictive Value (NPV):** If the test is negative, what is the probability the person does NOT have the disease?

**Important:** PPV and NPV depend on pre-test probability! The same test has different predictive values in high-risk vs. low-risk populations.

**Bayesian Reasoning:**

This is the mathematical framework for updating probabilities:
- Start with pre-test probability
- Apply likelihood ratios from test results
- Calculate post-test probability

**Likelihood Ratio (LR):**
- LR+ = How much a positive test increases disease probability
- LR- = How much a negative test decreases disease probability`,
      keyTerms: [
        { term: 'sensitivity', definition: 'Proportion of true positives correctly identified; true positive rate' },
        { term: 'specificity', definition: 'Proportion of true negatives correctly identified; true negative rate' },
        { term: 'prevalence', definition: 'The proportion of a population found to have a condition at a specific time' },
        { term: 'positive predictive value', definition: 'Probability that a positive test result truly indicates disease (PPV)' },
        { term: 'likelihood ratio', definition: 'The ratio of the probability of a test result in diseased persons to that in non-diseased persons (LR)' },
      ],
      analogies: [
        'Pre-test probability is like the starting bet in poker - your initial assessment based on visible cards (patient factors) before seeing community cards (test results).',
        'Sensitivity and specificity are like a fisherman\'s net - sensitivity is how well the net catches fish (catches all the disease), specificity is how well it avoids catching trash (avoids healthy people).',
      ],
      examples: [
        'A highly sensitive test (99%) for heart attack might still miss 1 in 100 heart attacks, which is why serial testing is often used.',
        'A screening mammogram might have 90% specificity, meaning 10% of women without cancer will have false positive results requiring additional testing.',
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical probability assessment integrates epidemiologic data with Bayesian mathematics to systematically update disease probability based on clinical findings and diagnostic test results.',
      explanation: `## Probabilistic Reasoning in Clinical Practice

### Bayesian Framework

Thomas Bayes developed the mathematical framework for updating probabilities based on new evidence:

**Bayes' Theorem:**
---
P(Disease|Finding) = P(Finding|Disease) x P(Disease) / P(Finding)
---

In clinical practice:
- **Prior probability** (pre-test): Initial estimate based on epidemiology and presentation
- **Likelihood ratio**: How much the finding changes the probability
- **Posterior probability** (post-test): Updated estimate after considering the finding

### Calculating Post-Test Probability

**Using Likelihood Ratios:**

1. Convert pre-test probability to odds:
   - Odds = Probability / (1 - Probability)

2. Multiply by likelihood ratio:
   - Post-test odds = Pre-test odds x LR

3. Convert back to probability:
   - Probability = Odds / (Odds + 1)

**Example - D-dimer for PE:**
- Pre-test probability: 20% (0.20)
- Pre-test odds: 0.20 / 0.80 = 0.25
- D-dimer negative, LR- = 0.10
- Post-test odds: 0.25 x 0.10 = 0.025
- Post-test probability: 0.025 / 1.025 = 2.4%

### Clinical Prediction Rules

Systematic tools that quantify pre-test probability:

**Wells Score for PE:**
- Clinical signs of DVT: +3
- PE most likely diagnosis: +3
- Heart rate >100: +1.5
- Immobilization/surgery: +1.5
- Prior DVT/PE: +1.5
- Hemoptysis: +1
- Malignancy: +1

Interpretation:
- 0-1: Low probability (1.3% prevalence)
- 2-6: Moderate probability (16% prevalence)
- >6: High probability (37% prevalence)

**HEART Score for ACS:**
- History: 0-2 points
- ECG: 0-2 points
- Age: 0-2 points
- Risk factors: 0-2 points
- Troponin: 0-2 points

Score correlates with 30-day MACE risk.

### Test Threshold and Treatment Threshold

**Diagnostic Testing Decision Framework:**

---
0%                                     100%
|----------|--------------|------------|
        Test        Treatment
      Threshold     Threshold
---

- Below test threshold: No testing needed, rule out disease
- Between thresholds: Diagnostic testing indicated
- Above treatment threshold: Treat without further testing

These thresholds depend on:
- Test characteristics
- Treatment risks and benefits
- Disease severity

### Spectrum Bias and Verification Bias

**Spectrum Bias:**
- Test characteristics vary by disease severity
- Studies in tertiary centers may overestimate sensitivity

**Verification Bias:**
- Only patients with positive tests get the gold standard
- Can inflate sensitivity and deflate specificity`,
      keyTerms: [
        { term: 'Bayes theorem', definition: 'Mathematical formula for calculating conditional probabilities; foundation of diagnostic reasoning' },
        { term: 'prior probability', definition: 'The initial probability of disease before considering new evidence' },
        { term: 'posterior probability', definition: 'The updated probability of disease after considering new evidence' },
        { term: 'clinical prediction rule', definition: 'Decision tool combining clinical findings to predict probability of disease or outcome (CPR)' },
        { term: 'number needed to treat', definition: 'Number of patients who must be treated to prevent one adverse outcome (NNT)' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced probabilistic reasoning incorporates nuanced understanding of diagnostic test performance across disease spectrums, hierarchical likelihood ratios, and sophisticated approaches to clinical uncertainty.',
      explanation: `## Advanced Probabilistic Clinical Reasoning

### Refining Test Performance Understanding

**Interval Likelihood Ratios:**

Rather than single LR values, different test result levels have different LRs:

**Example - NT-proBNP for Heart Failure:**
- <300 pg/mL: LR- = 0.10 (rules out HF)
- 300-450: LR = 0.5
- 450-900: LR = 1.0
- 900-1800: LR = 3.0
- >1800: LR = 10+ (rules in HF)

This provides more granular probability updates than simple positive/negative.

**Hierarchical Testing Strategies:**

**Sequential Rule-Out/Rule-In:**

**High-Sensitivity Troponin Protocol:**
1. Initial troponin (0-hour)
2. Repeat at 1 or 3 hours
3. Calculate delta (change)
4. Rule-out: Very low baseline OR small delta
5. Rule-in: Elevated baseline OR large delta
6. Observe: All others

This strategy achieves >99% NPV for rule-out with single test in some protocols.

### Probabilistic Thinking in Clinical Gestalt

**Calibrating Clinical Judgment:**

Studies show physicians often poorly calibrated:
- Overestimate probability of rare diseases
- Underestimate probability of common diseases
- Overconfidence in extreme probabilities

**Calibration Improvement:**
- Explicit probability estimation practice
- Feedback on predictions
- Tracking prediction accuracy

**The Funnel of Uncertainty:**

At each diagnostic step, uncertainty should narrow:
---
Wide differential
      |
  History/Exam
      |
Narrowed differential
      |
   Testing
      |
Focused differential
      |
  Treatment/
  Observation
---

### Multi-Variable Probability Models

**Logistic Regression Models:**

Many clinical prediction rules use logistic regression:
---
Probability = 1 / (1 + e^-(b0 + b1x1 + b2x2 + ...))
---

Examples:
- APACHE score (ICU mortality)
- CHA2DS2-VASc (stroke risk in AF)
- ASCVD risk calculator

**Machine Learning Approaches:**
- Random forests for non-linear interactions
- Neural networks for pattern recognition
- Validation challenges: overfitting, generalizability

### Diagnostic Testing Thresholds - Advanced

**Expected Value of Information:**

Should you order another test?

Calculate expected utility with and without test:
---
EVI = (Utility with test information) - (Utility without test)
---

If EVI > cost (financial, time, risk), test is indicated.

**NNT and Number Needed to Harm (NNH):**

Treatment decision thresholds incorporate:
- NNT: How many need treatment for one to benefit
- NNH: How many need treatment for one to be harmed
- Treatment threshold = 1 / (1 + NNT/NNH)

### Communicating Probability

**Numerical vs. Verbal Probability:**

| Verbal Term | Numerical Range |
|-------------|-----------------|
| Almost certain | 93-99% |
| Probable | 64-89% |
| Likely | 62-79% |
| Possible | 14-48% |
| Unlikely | 10-25% |
| Rare | 2-6% |

**Framing Effects:**
- "90% survival" vs "10% mortality" - different emotional impact
- Natural frequencies more intuitive than percentages

**Shared Decision Making:**
- Present probabilities clearly
- Check patient understanding
- Incorporate patient values`,
      keyTerms: [
        { term: 'interval likelihood ratio', definition: 'Likelihood ratio calculated for specific ranges of test results rather than binary positive/negative' },
        { term: 'calibration', definition: 'The degree to which predicted probabilities match observed frequencies' },
        { term: 'expected value of information', definition: 'The expected improvement in decision quality from obtaining additional information (EVI)' },
        { term: 'natural frequency', definition: 'Probability expressed as counts in a defined population (e.g., 1 in 1000) rather than percentages' },
        { term: 'overfitting', definition: 'When a statistical model describes random error rather than true relationships, reducing generalizability' },
      ],
      clinicalNotes: 'Experienced clinicians develop calibrated intuition for probability estimation, but explicit calculation using validated tools often outperforms clinical gestalt, particularly for rare conditions. Combining clinical judgment with formal prediction rules typically yields optimal results.',
    },
    5: {
      level: 5,
      summary: 'Expert probabilistic reasoning integrates sophisticated Bayesian methods, decision theory, uncertainty quantification, and cognitive science to optimize diagnostic and therapeutic decision making under uncertainty.',
      explanation: `## Expert-Level Probabilistic Reasoning

### Advanced Bayesian Methods

**Multi-Variable Bayesian Networks:**

Complex models that account for conditional dependencies:
- Nodes represent variables (symptoms, tests, diseases)
- Edges represent probabilistic relationships
- Belief propagation updates all probabilities simultaneously

Example: Acute abdominal pain network
- Prior: Appendicitis prevalence by age/sex
- Evidence: RLQ pain (LR+ 4.0), fever (LR+ 2.0), anorexia (LR+ 3.0)
- Posterior: Combined probability after integrating all findings

**Markov Chain Monte Carlo (MCMC):**

Methods for complex probability distributions when closed-form solutions are intractable:
- Gibbs sampling
- Metropolis-Hastings algorithm
- Applications in decision analysis

**Hierarchical Bayesian Models:**

Account for multiple levels of uncertainty:
---
Patient-level variation
       |
Provider-level variation
       |
Hospital-level variation
       |
Population-level parameters
---

### Decision Theory in Medicine

**Expected Utility Theory:**

Optimal decisions maximize expected utility:
---
EU(Action) = Sum over all outcomes of:
  [P(Outcome|Action) x Utility(Outcome)]
---

**Application to Testing Strategy:**

Test if:
---
EU(Test) - Cost(Test) > EU(No Test)
---

Where EU(Test) incorporates:
- Potential for improved diagnosis
- Potential for improved treatment selection
- Test risks and costs

**Threshold Analysis:**

**Testing Threshold:**
---
P_test = (C x FN) / [(C x FN) + (B x FP)]
---
Where C=cost of missing disease, B=benefit of catching it

**Treatment Threshold:**
---
P_treat = Harm / (Harm + Benefit)
---

### Uncertainty and Diagnostic Confidence

**Second-Order Uncertainty:**

Uncertainty about the probability itself:
- "I'm 70% confident the probability is 60-80%"
- Important for shared decision making
- Reflects limited evidence or expertise

**Confidence Intervals for Probabilities:**

Bayesian credible intervals:
- 95% credible interval for disease probability
- Incorporates both sampling variation and prior uncertainty

**Imperfect Gold Standards:**

Most reference standards have error:
- Latent class analysis for test validation
- Accounting for disease verification bias
- Composite reference standards

### Cognitive Aspects of Probability

**Dual-Process Probability Estimation:**

**System 1 (Intuitive):**
- Fast, pattern-based
- Subject to heuristics and biases
- Representative, availability, anchoring

**System 2 (Analytical):**
- Slow, calculation-based
- More accurate but cognitively demanding
- Formal prediction rules

**Optimal Integration:**
- System 1 for pattern recognition
- System 2 for probability quantification
- Metacognitive awareness of bias

**Heuristics and Biases in Probability:**

**Representativeness Heuristic:**
- Judging probability by similarity to prototype
- Ignoring base rates
- Conjunction fallacy

**Availability Heuristic:**
- Judging probability by ease of recall
- Recent cases, memorable cases
- Media influence on perceived risk

**Anchoring and Adjustment:**
- Starting from initial value (anchor)
- Insufficient adjustment
- Order effects in information presentation

**Debiasing Strategies:**

1. **Consider the opposite:** Actively seek disconfirming evidence
2. **Reference class forecasting:** Use statistical base rates
3. **Explicit probability estimation:** Force quantification
4. **Feedback:** Track prediction accuracy
5. **Pre-mortem analysis:** Imagine diagnosis is wrong, why?

### The Limits of Certainty

**Irreducible Uncertainty:**

Some diagnostic uncertainty cannot be eliminated:
- Idiopathic conditions
- Atypical presentations
- Testing limitations
- Biological variation

**Managing Uncertainty:**
- Diagnostic observation
- Therapeutic trials
- Shared decision making
- Appropriate follow-up

**The Ethics of Uncertainty:**
- Honest communication
- Avoiding false certainty
- Balancing action with uncertainty
- Informed consent under uncertainty`,
      keyTerms: [
        { term: 'Bayesian network', definition: 'Probabilistic graphical model representing conditional dependencies between variables' },
        { term: 'Markov chain Monte Carlo', definition: 'Computational algorithm for sampling from probability distributions using Markov chains (MCMC)' },
        { term: 'expected utility', definition: 'The probability-weighted average of utilities for all possible outcomes' },
        { term: 'latent class analysis', definition: 'Statistical method for identifying unobserved subgroups when gold standard is imperfect' },
        { term: 'credible interval', definition: 'Bayesian equivalent of confidence interval; interval containing the parameter with specified probability' },
      ],
      clinicalNotes: `Expert-level probabilistic reasoning involves:
1. Understanding the limits of diagnostic certainty
2. Communicating uncertainty effectively to patients
3. Using formal methods when clinical intuition may fail
4. Continuous calibration of probability estimates
5. Recognizing when uncertainty is irreducible

The goal is not perfect certainty (which is often unattainable) but optimal decisions given available information and acceptable risk tolerance.`,
    },
  },

  media: [],

  citations: [
    {
      id: 'jaeschke-clinical-epidemiology',
      type: 'textbook',
      title: 'Users\' Guides to the Medical Literature: A Manual for Evidence-Based Clinical Practice',
      authors: ['Guyatt G', 'Rennie D', 'Meade MO', 'Cook DJ'],
      source: 'JAMA Network',
    },
    {
      id: 'mcgee-probabilistic-reasoning',
      type: 'article',
      title: 'Simplifying Likelihood Ratios',
      authors: ['McGee S'],
      source: 'Journal of General Internal Medicine',
    },
    {
      id: 'kahneman-thinking-fast-slow',
      type: 'textbook',
      title: 'Thinking, Fast and Slow',
      authors: ['Kahneman D'],
      source: 'Farrar, Straus and Giroux',
    },
  ],

  crossReferences: [
    { targetId: 'diagnostic-framework', targetType: 'concept', relationship: 'related', label: 'Diagnostic Framework' },
    { targetId: 'pattern-recognition', targetType: 'concept', relationship: 'related', label: 'Pattern Recognition' },
    { targetId: 'diagnostic-pitfalls', targetType: 'concept', relationship: 'related', label: 'Diagnostic Pitfalls' },
  ],

  tags: {
    systems: ['general'],
    topics: ['clinical-reasoning', 'epidemiology', 'diagnosis'],
    keywords: ['probability', 'Bayesian', 'likelihood ratio', 'sensitivity', 'specificity', 'diagnostic testing'],
    clinicalRelevance: 'high',
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

export default probabilisticReasoningContent;
