/**
 * Hypothetico-Deductive Method in Clinical Diagnosis
 *
 * Educational content explaining the systematic approach of generating
 * hypotheses and testing them through targeted data collection.
 */

import { EducationalContent } from "../../types";

export const HYPOTHETICO_DEDUCTIVE_CONTENT: EducationalContent = {
  id: "diagnostic-framework-hypothetico-deductive",
  type: "concept",
  name: "Hypothetico-Deductive Method in Clinical Diagnosis",
  alternateNames: [
    "Hypothesis-Driven Diagnosis",
    "Analytic Reasoning",
    "Systematic Diagnostic Method",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "The hypothetico-deductive method is when doctors come up with possible explanations for your symptoms, then do tests to figure out which one is right.",
      explanation: `When you tell a doctor about your symptoms, they immediately start thinking of possible causes. This is like being a detective solving a mystery.

**How It Works:**

**Step 1: Make a list of possibilities**
When you say "I have a sore throat," your doctor might think:
- Common cold (most likely)
- Strep throat
- Allergies
- Other infections

**Step 2: Look for clues**
The doctor then asks questions and examines you to narrow down the list:
- Do you have a fever? (Suggests infection)
- Are there white patches on your throat? (Suggests strep)
- Is your nose stuffy and itchy? (Suggests cold or allergies)

**Step 3: Test the ideas**
If still uncertain, the doctor might order tests:
- A strep test checks specifically for that bacteria
- If negative, strep becomes less likely

**Step 4: Reach a conclusion**
The doctor picks the explanation that best fits all the evidence.

**Why This Method Helps:**

- Makes sure nothing important is missed
- Gives structure to the diagnostic process
- Helps doctors explain their reasoning to you
- Works even for unusual problems

**Your Role:**

When you understand this process, you can help by:
- Telling all your symptoms, even ones that seem unrelated
- Mentioning when symptoms started and what makes them better or worse
- Asking why certain tests are being done`,
      keyTerms: [
        {
          term: "hypothesis",
          definition:
            "An educated guess about what might be causing a problem",
        },
        {
          term: "eliminate",
          definition:
            "To rule out or remove from the list of possibilities",
        },
        {
          term: "evidence",
          definition:
            "Information that helps prove or disprove an idea",
        },
      ],
      analogies: [
        "It is like playing a guessing game where you ask yes/no questions to figure out what someone is thinking of.",
        "Think of it like a detective show where the investigator makes a list of suspects, then gathers clues to narrow it down.",
        "It is similar to troubleshooting why your car will not start - you check one thing at a time until you find the problem.",
      ],
      examples: [
        "A child has stomach pain. The doctor considers appendicitis, constipation, and stomach flu. Pressing on the belly and asking about bowel movements helps narrow it down.",
        "Someone has a persistent cough. The doctor thinks about asthma, reflux, allergies, or infection, then asks specific questions about each possibility.",
      ],
    },
    2: {
      level: 2,
      summary:
        "The hypothetico-deductive method is a structured diagnostic approach where clinicians generate multiple diagnostic hypotheses early, then systematically gather information to test and refine them.",
      explanation: `The hypothetico-deductive method is the formal, step-by-step approach doctors use when the diagnosis is not immediately obvious. It complements the faster pattern recognition approach.

**The Four Steps:**

**1. Hypothesis Generation**
Within minutes of meeting a patient, doctors generate a list of possible diagnoses (the "differential diagnosis"):
- Based on the chief complaint
- Considering the patient's age, gender, and medical history
- Prioritized by likelihood and seriousness

**2. Hypothesis Testing (Information Gathering)**
Each hypothesis makes predictions about what should be found:
- If it is strep throat, there should be fever and swollen glands
- If it is appendicitis, there should be pain in the lower right abdomen
- If it is a heart attack, the ECG should show specific changes

**3. Hypothesis Revision**
As information is gathered, some hypotheses become more likely and others are ruled out:
- Finding: No fever → Bacterial infection less likely
- Finding: Pain worse with breathing → Consider lung or chest wall problems
- Finding: Normal ECG → Heart attack less likely (but not ruled out)

**4. Diagnosis Confirmation**
Eventually, one hypothesis fits the evidence best and becomes the working diagnosis.

**When This Method Is Used:**

| Situation | Primary Method |
|-----------|---------------|
| Common, typical presentation | Pattern recognition |
| Unusual presentation | Hypothetico-deductive |
| Complex case | Hypothetico-deductive |
| High-stakes situation | Hypothetico-deductive (to verify) |

**The Importance of the Differential Diagnosis:**

A good differential includes:
- Most likely diagnoses (common things are common)
- Most dangerous diagnoses (cannot miss life-threatening conditions)
- Most treatable diagnoses (things that would change with treatment)

**Example: Chest Pain in a 55-Year-Old Man**

Initial hypotheses:
1. Heart attack (dangerous, cannot miss)
2. Angina (common in this age group)
3. Muscle strain (very common)
4. GERD/acid reflux (common)
5. Pulmonary embolism (dangerous, cannot miss)

Testing proceeds in order of urgency and likelihood.`,
      keyTerms: [
        {
          term: "differential diagnosis",
          definition:
            "A list of possible diagnoses that could explain a patient's symptoms, ranked by likelihood",
          pronunciation: "dif-er-EN-shul",
        },
        {
          term: "working diagnosis",
          definition:
            "The most likely diagnosis based on current information, which may change as more is learned",
        },
        {
          term: "rule out",
          definition:
            "To exclude a diagnosis from consideration based on evidence that makes it very unlikely",
        },
        {
          term: "hypothesis",
          definition:
            "A proposed explanation for observed symptoms that can be tested",
          pronunciation: "hy-POTH-eh-sis",
        },
      ],
      analogies: [
        "The differential diagnosis is like a bracket in a tournament - possibilities compete against each other, and evidence eliminates the losers.",
      ],
    },
    3: {
      level: 3,
      summary:
        "The hypothetico-deductive method represents analytic diagnostic reasoning, involving explicit generation of competing hypotheses, prediction of expected findings, strategic information gathering, and iterative hypothesis revision based on Bayesian principles.",
      explanation: `## The Hypothetico-Deductive Framework

### Theoretical Foundation

The hypothetico-deductive method derives from the scientific method:
1. Observation leads to questions
2. Hypotheses are generated to answer questions
3. Predictions are deduced from hypotheses
4. Predictions are tested against new observations
5. Hypotheses are supported, refuted, or modified

### Clinical Implementation

**Phase 1: Initial Cue Acquisition**
- Chief complaint
- Demographic information
- Vital signs
- General appearance

**Phase 2: Hypothesis Generation**
Typically 3-5 hypotheses generated within first 30-60 seconds:
- Cannot miss diagnoses (dangerous conditions)
- Most likely diagnoses (based on presentation and epidemiology)
- Treatable diagnoses (where diagnosis changes management)

**Phase 3: Hypothesis-Directed Inquiry**

Each hypothesis generates specific questions:

| Hypothesis | Predicted Findings |
|------------|-------------------|
| Acute MI | Exertional chest pressure, radiation to arm/jaw, diaphoresis, ECG changes |
| Pulmonary embolism | Sudden dyspnea, pleuritic pain, risk factors (immobility, malignancy) |
| GERD | Burning pain, postprandial, relief with antacids |
| Musculoskeletal | Reproducible with palpation, worse with movement |

**Phase 4: Iterative Refinement**

\`\`\`
Initial hypotheses → Gather data → Update probabilities →
  → Generate new hypotheses if needed → Gather more data →
  → Continue until sufficient certainty
\`\`\`

### Hypothesis Revision Strategies

**1. Elimination**
Evidence inconsistent with a hypothesis reduces its probability:
- Chest pain not reproducible with palpation → MSK less likely
- D-dimer negative → PE essentially ruled out (in low-risk patient)

**2. Confirmation**
Evidence consistent with a hypothesis increases its probability:
- ST elevation on ECG → MI very likely
- Positive troponin → Myocardial injury confirmed

**3. Discrimination**
Seeking findings that distinguish between hypotheses:
- "Is the pain worse with breathing?" (PE vs MI)
- "Does it occur with exertion?" (Angina vs GERD)

### Integration with Test Ordering

Tests should be ordered based on hypothesis-testing logic:

**Before ordering a test, ask:**
1. Which hypothesis will this test address?
2. How will a positive result change management?
3. How will a negative result change management?
4. Is there a less invasive/expensive test that would work?

### Common Errors in Hypothetico-Deductive Reasoning

| Error | Description | Mitigation |
|-------|-------------|------------|
| Premature closure | Stopping search after first plausible hypothesis | Force generation of alternatives |
| Confirmation bias | Seeking only evidence supporting favored hypothesis | Actively seek disconfirming evidence |
| Anchoring | Over-weighting initial hypothesis | Revise probabilities explicitly |
| Search satisfying | Missing second diagnosis after finding first | Always ask "what else could this be?" |`,
      keyTerms: [
        {
          term: "analytic reasoning",
          definition:
            "Slow, deliberate, step-by-step thinking that consciously evaluates evidence and alternatives",
        },
        {
          term: "hypothesis-directed inquiry",
          definition:
            "Asking questions specifically designed to test particular diagnostic hypotheses",
        },
        {
          term: "iterative refinement",
          definition:
            "The process of repeatedly updating hypotheses as new information is obtained",
        },
        {
          term: "search satisfying",
          definition:
            "The cognitive error of stopping the diagnostic search after finding one abnormality",
        },
      ],
      clinicalNotes:
        "The hypothetico-deductive method is particularly important when pattern recognition fails or when the stakes are high. It forces explicit consideration of alternatives and structured information gathering.",
    },
    4: {
      level: 4,
      summary:
        "Advanced hypothetico-deductive reasoning requires sophisticated hypothesis generation, strategic test sequencing to maximize information gain, recognition of cognitive limitations, and seamless integration with pattern recognition in dual-process diagnostic frameworks.",
      explanation: `## Advanced Hypothetico-Deductive Reasoning

### Sophisticated Hypothesis Generation

**Problem Representation:**
The way a problem is framed influences hypothesis generation:

\`\`\`
"55-year-old diabetic man with chest pain"
    vs.
"55-year-old man with atypical chest pain and normal ECG"
\`\`\`

Different problem representations activate different hypothesis sets.

**Semantic Qualifiers:**
Key descriptors that trigger specific hypotheses:
- Sudden onset → Vascular events, pneumothorax
- Gradual onset → Inflammatory, neoplastic
- Exertional → Cardiac, pulmonary insufficiency
- Positional → Musculoskeletal, pericardial
- Migratory → Appendicitis (visceral to somatic)

**Hypothesis Space Management:**

Too few hypotheses:
- Risk missing correct diagnosis
- Confirmation bias toward limited options

Too many hypotheses:
- Cognitive overload
- Inefficient testing
- Decision paralysis

Optimal: 3-5 active hypotheses with flexibility to add more.

### Strategic Test Sequencing

**Information Theory Approach:**
Order tests that maximize information gain:

Information gain = Pre-test uncertainty - Post-test uncertainty

Tests that discriminate between leading hypotheses provide most value.

**Test Characteristics to Consider:**

| Factor | Consideration |
|--------|--------------|
| Sensitivity | High sensitivity rules OUT (SnOUT) |
| Specificity | High specificity rules IN (SpIN) |
| Invasiveness | Non-invasive before invasive |
| Cost | Cost-effective approaches first |
| Time | Rapid results for urgent decisions |
| Safety | Risk-benefit must favor testing |

**Parallel vs. Sequential Testing:**

Sequential (typical):
- Test 1 result influences Test 2 selection
- More efficient use of resources
- Longer time to diagnosis

Parallel (when urgent):
- Multiple tests simultaneously
- Faster time to diagnosis
- May include unnecessary tests

### Dual-Process Integration

Expert clinicians fluidly alternate between System 1 (pattern recognition) and System 2 (hypothetico-deductive):

\`\`\`
Presentation → Pattern recognition attempt
    ↓
Pattern recognized?
    YES → Verify with targeted testing
    NO → Shift to hypothetico-deductive
    ↓
Discrepant findings?
    YES → Shift to hypothetico-deductive
    NO → Accept pattern-based diagnosis
\`\`\`

**Triggers for Shifting to Analytic Mode:**
- Features inconsistent with recognized pattern
- Low confidence in pattern match
- High-stakes decision
- Novel or unusual presentation
- Multiple competing patterns

### Handling Diagnostic Uncertainty

**Epistemic uncertainty** (knowledge gaps):
- More information could resolve
- Address with targeted testing
- May require consultation or referral

**Aleatory uncertainty** (inherent randomness):
- Cannot be resolved with more testing
- Must make decisions despite uncertainty
- Communicate uncertainty to patient

**Strategies for uncertainty:**
1. Probabilistic thinking (explicit probabilities)
2. Threshold-based decisions (testing/treatment thresholds)
3. Test of time (watchful waiting with safety net)
4. Empiric therapy with reassessment

### Diagnostic Verification

Before finalizing diagnosis, verify:

**Coherence check:**
- Does the diagnosis explain all findings?
- Is the time course consistent?
- Does the severity match?

**Completeness check:**
- Could there be a second diagnosis?
- Are there findings not explained?
- What would change my mind?

**Plausibility check:**
- Is this diagnosis plausible given the context?
- Have I considered common mimics?
- Am I ignoring any red flags?`,
      keyTerms: [
        {
          term: "problem representation",
          definition:
            "The mental framing of a clinical problem that influences which hypotheses are generated",
        },
        {
          term: "semantic qualifier",
          definition:
            "Descriptive terms (sudden, gradual, exertional) that help categorize presentations and suggest diagnoses",
        },
        {
          term: "information gain",
          definition:
            "The reduction in diagnostic uncertainty provided by a test or finding",
        },
        {
          term: "epistemic uncertainty",
          definition:
            "Uncertainty due to lack of knowledge that could theoretically be resolved with more information",
        },
      ],
      clinicalNotes:
        "The best diagnosticians know when to trust pattern recognition and when to shift to systematic analysis. High stakes and atypical features should trigger analytic verification of intuitive diagnoses.",
    },
    5: {
      level: 5,
      summary:
        "Expert hypothetico-deductive reasoning requires metacognitive awareness, recognition of cognitive limitations, sophisticated management of uncertainty, and integration with team-based and technology-assisted diagnosis in complex clinical environments.",
      explanation: `## Expert-Level Hypothetico-Deductive Reasoning

### Metacognition in Diagnostic Reasoning

Expert diagnosticians actively monitor their own thinking:

**Self-questioning:**
- "What am I assuming that might not be true?"
- "What would I expect to see that I am not seeing?"
- "Am I anchored on my first impression?"
- "What is my confidence level and is it justified?"

**Calibration monitoring:**
- Awareness of personal diagnostic accuracy
- Recognition of blind spots and biases
- Adjustment of confidence based on context

**Process monitoring:**
- "Am I being thorough enough?"
- "Am I being efficient enough?"
- "Should I seek consultation?"

### Complex Hypothesis Structures

**Multiple simultaneous conditions:**
- Comorbidity patterns (diabetes + CAD + CKD)
- Syndrome complexes (primary condition + complications)
- Occam's razor limitations (sometimes multiple diagnoses required)

**Hierarchical hypotheses:**
- Syndrome level: Heart failure
- Etiology level: Ischemic vs. non-ischemic
- Mechanism level: HFrEF vs. HFpEF

**Temporal evolution:**
- Dynamic diseases change over time
- Early presentation may not fit any pattern
- Serial assessment reveals diagnosis

### Managing Cognitive Limitations

**Working memory constraints:**
- Limited to ~4 chunks of information
- Complex cases exceed capacity
- External aids (notes, problem lists) essential

**Attention limitations:**
- Cannot attend to everything simultaneously
- Salient features capture attention
- Subtle findings may be missed

**Mitigation strategies:**
- Structured data collection (checklists)
- Deliberate attention to "quiet" findings
- Team-based diagnosis (multiple perspectives)

### Diagnostic Teamwork

**Distributed cognition:**
- Diagnosis often involves multiple clinicians
- Information distributed across team
- Synthesis requires communication

**Effective diagnostic teams:**
- Shared mental models
- Explicit communication of uncertainty
- Psychological safety for speaking up
- Structured handoffs

**Consultation and referral:**
- Know limitations of personal expertise
- Low threshold for consultation in unfamiliar territory
- Frame questions to maximize consultant value

### Technology-Assisted Diagnosis

**Decision support systems:**
- Differential diagnosis generators
- Clinical prediction rules
- Alert systems for missed diagnoses

**Optimal human-computer teaming:**
- Technology for comprehensive hypothesis generation
- Human for contextual interpretation
- Technology for probability calculation
- Human for values-based decision making

**Limitations of current technology:**
- Garbage in, garbage out (depends on input quality)
- Limited contextual understanding
- May increase cognitive load
- Alert fatigue risk

### System-Level Diagnostic Quality

**Diagnostic process reliability:**
- Standardized approaches for common presentations
- Checklists for high-risk diagnoses
- Structured diagnostic timeouts

**Learning from diagnostic errors:**
- Morbidity and mortality review
- Near-miss reporting
- Root cause analysis
- System redesign to prevent recurrence

**Measurement and improvement:**
- Diagnostic accuracy tracking
- Time-to-diagnosis monitoring
- Patient outcome correlation
- Continuous improvement cycles

### Ethical Considerations

**Uncertainty communication:**
- Patients deserve to know when diagnosis is uncertain
- Shared decision-making in gray zones
- Informed consent for diagnostic testing

**Resource stewardship:**
- Avoid unnecessary testing
- Consider societal cost-benefit
- Choosing Wisely principles

**Diagnostic equity:**
- Awareness of disparities in diagnosis
- Implicit bias in hypothesis generation
- System-level approaches to equity`,
      keyTerms: [
        {
          term: "metacognition",
          definition:
            "Awareness and understanding of one's own thought processes, enabling self-monitoring and correction",
        },
        {
          term: "distributed cognition",
          definition:
            "The concept that cognitive processes are distributed across individuals, artifacts, and environments rather than contained in a single mind",
        },
        {
          term: "diagnostic timeout",
          definition:
            "A structured pause to reconsider the diagnosis, especially before high-stakes decisions",
        },
        {
          term: "Occam's razor",
          definition:
            "The principle that the simplest explanation (fewest diagnoses) is preferred, though not always correct in medicine",
        },
      ],
      clinicalNotes: `Key expert insights:
1. The best diagnosticians are metacognitively aware - they think about their thinking
2. Complex cases often require multiple diagnoses - do not force parsimony
3. Diagnosis is increasingly a team sport - communicate uncertainty and reasoning
4. Technology augments but does not replace clinical judgment
5. Diagnostic errors are often system failures, not just individual failures
6. Uncertainty is inherent - learn to make good decisions despite it`,
    },
  },

  media: [],
  citations: [
    {
      id: "clinical-problem-solving",
      type: "textbook",
      title: "Clinical Problem Solving and Diagnostic Decision Making",
      authors: ["Kassirer JP", "Wong JB", "Kopelman RI"],
      source: "Lippincott Williams & Wilkins",
    },
    {
      id: "improving-diagnosis-healthcare",
      type: "article",
      title: "Improving Diagnosis in Health Care",
      authors: ["National Academies of Sciences, Engineering, and Medicine"],
      source: "National Academies Press",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK338596/",
    },
  ],
  crossReferences: [
    {
      targetId: "diagnostic-framework-bayesian-reasoning",
      targetType: "concept",
      relationship: "sibling",
      label: "Bayesian Reasoning",
    },
    {
      targetId: "diagnostic-framework-pattern-recognition",
      targetType: "concept",
      relationship: "sibling",
      label: "Pattern Recognition",
    },
    {
      targetId: "cognitive-bias-confirmation-bias",
      targetType: "concept",
      relationship: "related",
      label: "Confirmation Bias",
    },
  ],
  tags: {
    systems: ["general"],
    topics: ["clinical-reasoning", "diagnostic-methods", "medical-education"],
    keywords: [
      "hypothetico-deductive",
      "diagnostic reasoning",
      "differential diagnosis",
      "hypothesis testing",
      "clinical method",
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

export default HYPOTHETICO_DEDUCTIVE_CONTENT;
