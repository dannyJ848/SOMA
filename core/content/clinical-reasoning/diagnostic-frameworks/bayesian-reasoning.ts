/**
 * Bayesian Reasoning in Clinical Diagnosis
 *
 * Educational content explaining how healthcare providers use probability
 * to update their diagnostic thinking as new information becomes available.
 */

import { EducationalContent } from "../../types";

export const BAYESIAN_REASONING_CONTENT: EducationalContent = {
  id: "diagnostic-framework-bayesian-reasoning",
  type: "concept",
  name: "Bayesian Reasoning in Clinical Diagnosis",
  alternateNames: [
    "Probabilistic Reasoning",
    "Pre-test/Post-test Probability",
    "Likelihood Ratio Approach",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Bayesian reasoning helps doctors update their best guess about what is wrong with you as they learn more information.",
      explanation: `When you visit a doctor, they start with an idea about what might be causing your symptoms. As they ask questions, examine you, and get test results, they update their thinking.

**How It Works - A Simple Example:**

Imagine you have a headache. Before knowing anything else, your doctor thinks:
- Most likely: Tension headache or dehydration (very common)
- Less likely: Migraine (less common)
- Unlikely: Something serious (rare)

Then they learn new information:
- You say the headache is the worst of your life → Now they are much more worried
- You mention you have had similar headaches before → Now they are less worried
- You have a fever and stiff neck → Now they are very worried

**Why This Matters:**

Every piece of information changes how likely different diagnoses are. Good doctors:
- Start with what is most common (the "base rate")
- Update their thinking with each new fact
- Order tests that will most change their thinking
- Do not jump to rare diagnoses without good reason

**Think of It Like a Detective:**
A detective does not assume the butler did it just because butlers are sometimes guilty. They start with who was most likely there, then update their suspicions as they find clues.`,
      keyTerms: [
        {
          term: "probability",
          definition:
            "How likely something is to happen, like a percentage or chance",
        },
        {
          term: "diagnosis",
          definition:
            "Figuring out what illness or condition is causing your symptoms",
        },
        {
          term: "update",
          definition:
            "Changing your thinking based on new information",
        },
      ],
      analogies: [
        "Bayesian reasoning is like a weather forecast that gets more accurate as the storm gets closer - each new measurement updates the prediction.",
        "Think of it like guessing who will win a basketball game. Your prediction changes as you learn about injuries, home court, and how each team has been playing lately.",
      ],
      examples: [
        "A doctor hears you have chest pain. Initially, they think muscle strain (common). When they learn you also have shortness of breath and sweating, they become more concerned about your heart.",
        "Your child has a runny nose. Most likely it is a cold. But if the runny nose has lasted 3 weeks and is only on one side, the doctor starts thinking about other causes.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Bayesian reasoning is a systematic method doctors use to calculate and update the probability of diagnoses as they gather clinical information from history, examination, and testing.",
      explanation: `Bayesian reasoning is named after Thomas Bayes, an 18th-century mathematician. It provides a formal way to update probability estimates when new evidence is obtained.

**Key Concepts:**

**Pre-test Probability:**
Before any testing, what is the chance this patient has a particular condition? This is based on:
- How common the disease is (prevalence)
- The patient's symptoms
- Risk factors (age, gender, habits, family history)

**Post-test Probability:**
After getting test results, what is the updated chance of disease? This depends on:
- The pre-test probability
- How good the test is (sensitivity and specificity)
- Whether the test was positive or negative

**How Tests Change Probability:**

| Pre-test Probability | Positive Test Result | Post-test Probability |
|---------------------|---------------------|----------------------|
| Very Low (1%) | Positive | Still might be low (false positive common) |
| Moderate (50%) | Positive | Now high |
| High (90%) | Negative | Still might be high (false negative possible) |

**Important Principles:**

1. **Start with the right prior**: Common things are common. A headache in a 25-year-old is almost never a brain tumor.

2. **Tests are not perfect**: Every test has false positives and false negatives. A "positive" test does not mean you definitely have the disease.

3. **Context matters**: The same test result means different things in different patients.

**Example: Chest Pain**
- 25-year-old athletic woman with sharp, reproducible chest pain: Pre-test probability of heart disease is very low (<5%)
- 65-year-old diabetic man with exertional pressure and shortness of breath: Pre-test probability is high (>80%)
- The same positive stress test means very different things in these two patients`,
      keyTerms: [
        {
          term: "pre-test probability",
          definition:
            "The estimated chance of having a disease before any testing, based on symptoms and risk factors",
          pronunciation: "pree-test prob-ah-BIL-ih-tee",
        },
        {
          term: "post-test probability",
          definition:
            "The updated chance of having a disease after test results are known",
        },
        {
          term: "prevalence",
          definition:
            "How common a disease is in a population",
          pronunciation: "PREV-ah-lens",
        },
        {
          term: "false positive",
          definition:
            "When a test incorrectly says you have a disease that you do not actually have",
        },
      ],
      analogies: [
        "Pre-test probability is like the odds a sports team will win before the game starts, based on their record. Post-test probability is like updating those odds after seeing the first quarter.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Bayesian diagnostic reasoning applies probability theory to clinical decision-making, using likelihood ratios to systematically update disease probability from pre-test to post-test estimates based on clinical findings and test results.",
      explanation: `## Bayesian Reasoning Framework

### Mathematical Foundation

Bayes' theorem:
\`\`\`
P(Disease|Finding) = P(Finding|Disease) × P(Disease) / P(Finding)
\`\`\`

In clinical terms:
- P(Disease|Finding) = Post-test probability
- P(Disease) = Pre-test probability (prior)
- P(Finding|Disease) = Sensitivity (for positive findings)
- P(Finding) = Overall probability of the finding

### Likelihood Ratios

Likelihood ratios (LR) provide a practical way to update probabilities:

**Positive Likelihood Ratio (LR+):**
\`\`\`
LR+ = Sensitivity / (1 - Specificity)
     = True positive rate / False positive rate
\`\`\`

**Negative Likelihood Ratio (LR-):**
\`\`\`
LR- = (1 - Sensitivity) / Specificity
     = False negative rate / True negative rate
\`\`\`

### Interpreting Likelihood Ratios

| LR+ | Interpretation | LR- | Interpretation |
|-----|---------------|-----|----------------|
| >10 | Large increase in probability | <0.1 | Large decrease |
| 5-10 | Moderate increase | 0.1-0.2 | Moderate decrease |
| 2-5 | Small increase | 0.2-0.5 | Small decrease |
| 1-2 | Minimal change | 0.5-1 | Minimal change |

### Using the Fagan Nomogram

The Fagan nomogram allows visual conversion:
1. Mark pre-test probability on left axis
2. Mark likelihood ratio on middle axis
3. Draw line through both points
4. Read post-test probability on right axis

### Clinical Application

**Example: D-dimer for Pulmonary Embolism**

- Patient with low clinical probability (Wells score <2): Pre-test probability ~10%
- D-dimer has LR+ ~2 and LR- ~0.1 for PE
- Negative D-dimer: Post-test probability drops to ~1% → Safe to rule out
- Positive D-dimer: Post-test probability rises to ~18% → Still need CT

**Example: Troponin for MI**

- Patient with typical chest pain, ECG changes: Pre-test probability ~70%
- High-sensitivity troponin: LR+ ~20, LR- ~0.02
- Positive troponin: Post-test probability >95% → MI confirmed
- Negative troponin: Post-test probability ~5% → MI essentially ruled out

### Common Pitfalls

1. **Base rate neglect**: Ignoring prevalence and focusing only on test characteristics
2. **Binary thinking**: Treating probability as certain when it reaches a threshold
3. **Ignoring spectrum bias**: Test performance varies by disease severity
4. **Verification bias**: Only testing those you suspect of having disease`,
      keyTerms: [
        {
          term: "likelihood ratio",
          definition:
            "A measure of how much a test result changes the probability of disease; calculated from sensitivity and specificity",
          pronunciation: "LIKE-lee-hood RAY-shee-oh",
        },
        {
          term: "sensitivity",
          definition:
            "The probability that a test is positive when disease is present (true positive rate)",
        },
        {
          term: "specificity",
          definition:
            "The probability that a test is negative when disease is absent (true negative rate)",
        },
        {
          term: "Fagan nomogram",
          definition:
            "A graphical tool for converting pre-test probability to post-test probability using likelihood ratios",
          pronunciation: "FAY-gan NOM-oh-gram",
        },
      ],
      clinicalNotes:
        "The most useful tests are those with very high LR+ (to rule in) or very low LR- (to rule out). A test with LR between 0.5 and 2 provides minimal diagnostic value.",
    },
    4: {
      level: 4,
      summary:
        "Advanced Bayesian reasoning incorporates sequential testing strategies, conditional independence assumptions, and calibration assessment to optimize diagnostic pathways while acknowledging the limitations of probability-based reasoning in complex clinical scenarios.",
      explanation: `## Advanced Bayesian Applications

### Sequential Testing

When multiple tests are performed, each updates the probability:

\`\`\`
Post-test probability after Test 2 =
  Result of applying LR2 to post-test probability from Test 1
\`\`\`

**Key Assumption: Conditional Independence**

Sequential Bayesian updating assumes tests provide independent information. This is often violated:
- Symptoms caused by the same pathophysiology are not independent
- Tests measuring related physiological parameters are correlated
- Clinical gestalt incorporates findings that "count twice"

**Example: Multiple findings in pneumonia**
- Fever, productive cough, and rales are not independent
- Cannot simply multiply likelihood ratios
- Clinical prediction rules (like CURB-65) address this by using derived weights

### Threshold Approach to Decision Making

**Testing Threshold (Tt):**
Below this probability, disease is unlikely enough that testing is not warranted.

**Treatment Threshold (Tx):**
Above this probability, disease is likely enough to treat without further testing.

**Test-Treatment Zone:**
Between Tt and Tx, testing can meaningfully change management.

\`\`\`
If P(disease) < Tt → No testing needed, unlikely diagnosis
If Tt ≤ P(disease) ≤ Tx → Testing indicated
If P(disease) > Tx → Treat empirically, testing may not change management
\`\`\`

### Calibration and Overconfidence

**Physician calibration studies show:**
- Systematic overconfidence in diagnoses
- When physicians say they are 90% certain, they are correct ~75% of the time
- Overconfidence increases with experience (more knowledge, same biases)

**Improving calibration:**
- Explicit probability estimation rather than gestalt
- Feedback on diagnostic accuracy
- Use of validated clinical prediction rules

### Bayesian Reasoning vs. Pattern Recognition

Expert clinicians use both:

| Bayesian (Analytic) | Pattern Recognition (Intuitive) |
|--------------------|---------------------------------|
| Slow, deliberate | Fast, automatic |
| Data-driven | Experience-driven |
| Handles novel presentations | Handles familiar presentations |
| Resource-intensive | Efficient |
| Less prone to bias | More prone to bias |

**Dual-process theory suggests:**
- Initial diagnosis often via pattern recognition (System 1)
- Bayesian reasoning for verification (System 2)
- Experts shift between modes based on case complexity

### Information Value Analysis

Before ordering a test, consider:

1. **Will the result change management?**
   - If probability is already above treatment threshold, positive test does not matter
   - If probability is below testing threshold, do not test

2. **What is the value of the information?**
   - Value = (Probability of positive × benefit of acting on true positive) - (Cost of false positive) - (Cost of false negative)

3. **Is there a better test?**
   - Compare LR profiles of available tests
   - Consider patient burden, cost, time delay`,
      keyTerms: [
        {
          term: "conditional independence",
          definition:
            "The assumption that two findings provide separate, non-overlapping diagnostic information when disease status is known",
        },
        {
          term: "testing threshold",
          definition:
            "The probability below which testing is not indicated because disease is sufficiently unlikely",
        },
        {
          term: "treatment threshold",
          definition:
            "The probability above which empiric treatment is indicated without further testing",
        },
        {
          term: "calibration",
          definition:
            "The accuracy of probability estimates - how well stated confidence matches actual correctness",
        },
      ],
      clinicalNotes:
        "The threshold approach explains why the same test may be indicated for one patient but not another with the same symptom. Pre-test probability determines whether a test can move you across a decision threshold.",
    },
    5: {
      level: 5,
      summary:
        "Expert application of Bayesian reasoning requires understanding its theoretical limitations, integration with heuristic reasoning, recognition of when formal probability estimation fails, and awareness of emerging computational approaches to diagnostic probability.",
      explanation: `## Expert Perspectives on Bayesian Reasoning

### Theoretical Limitations

**1. The Reference Class Problem**
- Which population defines the prior probability?
- A 50-year-old male with chest pain: Compare to all chest pain? All males? All 50-year-olds? All with his risk factors?
- Different reference classes yield different base rates
- No theoretically "correct" choice exists

**2. The Problem of Priors**
- Subjective prior selection influences conclusions
- "Uninformative" priors are not truly uninformative
- Clinical intuition encoded in priors may perpetuate biases

**3. Rare Disease Paradox**
- For very rare diseases, even excellent tests yield mostly false positives
- Positive predictive value approaches zero as prevalence approaches zero
- This is mathematically correct but clinically uncomfortable

### When Bayesian Reasoning Fails

**1. Completely Novel Presentations**
- No prior probability estimate available
- Cannot calculate LR for unprecedented findings
- Must rely on mechanism-based reasoning

**2. Complex, Interacting Conditions**
- Multiple diseases with overlapping presentations
- Probability of Disease A changes probability of Disease B
- Standard Bayesian updating assumes single disease

**3. Dynamic Disease States**
- Probability changes over time independent of new information
- Evolving MI, developing sepsis
- Static probability estimates become invalid

**4. Black Swan Events**
- Cannot assign probability to events never conceived
- Bayesian framework cannot handle "unknown unknowns"

### Integration with Mechanistic Reasoning

Expert diagnosticians blend probabilistic and mechanistic thinking:

**Probabilistic (Bayesian):**
- What is the likelihood given the base rates and test results?
- Statistical pattern matching

**Mechanistic (Pathophysiologic):**
- How do the findings fit together causally?
- Does a proposed diagnosis explain all findings?
- Are there inconsistencies suggesting an alternative diagnosis?

**Example: Chest pain with elevated troponin**
- Bayesian: High probability of MI given risk factors, symptoms, biomarker
- Mechanistic: But why is troponin pattern atypical? Why no ECG changes? Could this be demand ischemia from occult sepsis?

### Computational Bayesian Approaches

**Bayesian Networks:**
- Graphical models representing conditional dependencies
- Handle multiple correlated findings
- Encode causal structure
- Used in diagnostic decision support systems

**Machine Learning Integration:**
- Deep learning models learn implicit probability distributions
- May outperform explicit Bayesian calculation for complex problems
- "Black box" nature limits clinical interpretability
- Current research: Hybrid systems combining ML with explicit reasoning

### Practical Expert Recommendations

1. **Use explicit probability ranges** rather than vague terms
   - Replace "possible" with "5-20% probability"
   - Reduces communication errors

2. **Document reasoning**, not just conclusions
   - "Pre-test probability 30% based on ___. After negative CT, post-test probability <5%."
   - Enables audit and learning

3. **Recognize when to abandon Bayesian thinking**
   - Atypical presentations requiring mechanistic reasoning
   - Rare diseases requiring different decision rules
   - Emergency situations requiring action under uncertainty

4. **Use decision support appropriately**
   - Clinical prediction rules for well-defined questions
   - Recognize limitations of rules outside derivation population
   - Update personal calibration through feedback`,
      keyTerms: [
        {
          term: "reference class problem",
          definition:
            "The philosophical challenge of selecting which comparison group to use when estimating base rates",
        },
        {
          term: "Bayesian network",
          definition:
            "A probabilistic graphical model representing conditional dependencies among variables",
        },
        {
          term: "positive predictive value",
          definition:
            "The probability that a person with a positive test truly has the disease; heavily influenced by prevalence",
        },
        {
          term: "dual-process theory",
          definition:
            "Cognitive model proposing two systems: fast/intuitive (System 1) and slow/analytical (System 2)",
        },
      ],
      clinicalNotes: `Key expert insights:
1. Bayesian reasoning is a tool, not a complete decision framework
2. Pre-test probability estimation is often the most difficult and most important step
3. Serial testing violates independence assumptions - use clinical prediction rules when available
4. Rare diseases require different thresholds - probability of missing a catastrophic diagnosis may warrant testing even at low probability
5. Communicate uncertainty to patients - they deserve to know when diagnoses are probabilistic`,
    },
  },

  media: [],
  citations: [
    {
      id: "sox-medical-decision-making",
      type: "textbook",
      title: "Medical Decision Making",
      authors: ["Sox HC", "Higgins MC", "Owens DK"],
      source: "Wiley-Blackwell",
      chapter: "Probability: Quantifying Uncertainty",
    },
    {
      id: "evidence-based-diagnosis",
      type: "textbook",
      title: "Evidence-Based Diagnosis",
      authors: ["Knottnerus JA", "Buntinx F"],
      source: "BMJ Books",
    },
  ],
  crossReferences: [
    {
      targetId: "diagnostic-framework-pattern-recognition",
      targetType: "concept",
      relationship: "sibling",
      label: "Pattern Recognition",
    },
    {
      targetId: "diagnostic-framework-hypothetico-deductive",
      targetType: "concept",
      relationship: "sibling",
      label: "Hypothetico-Deductive Method",
    },
    {
      targetId: "cognitive-bias-anchoring",
      targetType: "concept",
      relationship: "related",
      label: "Anchoring Bias",
    },
  ],
  tags: {
    systems: ["general"],
    topics: ["clinical-reasoning", "diagnostic-methods", "medical-education"],
    keywords: [
      "Bayesian",
      "probability",
      "likelihood ratio",
      "pre-test probability",
      "post-test probability",
      "clinical decision making",
    ],
    clinicalRelevance: "high",
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ["medicine", "family-medicine"],
    },
  },

  createdAt: "2026-01-24T00:00:00.000Z",
  updatedAt: "2026-01-24T00:00:00.000Z",
  version: 1,
  status: "published",
};

export default BAYESIAN_REASONING_CONTENT;
