/**
 * Anchoring Bias in Clinical Diagnosis
 *
 * Educational content explaining how initial impressions can
 * inappropriately influence diagnostic reasoning.
 */

import { EducationalContent } from "../../types";

export const ANCHORING_BIAS_CONTENT: EducationalContent = {
  id: "cognitive-bias-anchoring",
  type: "concept",
  name: "Anchoring Bias in Clinical Diagnosis",
  alternateNames: [
    "Anchoring Heuristic",
    "Focalism",
    "First Impression Bias",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Anchoring bias happens when a doctor gets stuck on their first idea about what is wrong, even when new information suggests something different.",
      explanation: `Imagine you are doing a puzzle, and you start by putting a piece in the wrong spot. If you keep trying to build around that wrong piece instead of moving it, you will have trouble finishing the puzzle. That is similar to anchoring bias in medicine.

**How It Happens:**

When a doctor first meets you, they quickly form an idea about what might be wrong. This first idea becomes an "anchor." The problem is that this anchor can be hard to let go of, even when new clues suggest it might be wrong.

**Example:**
You come to the doctor with chest pain after lifting heavy boxes. The doctor thinks, "This is probably a muscle strain from lifting." That becomes the anchor. Later, when an ECG shows some unusual readings, the doctor might think, "That is probably nothing - this is just muscle strain." But those ECG changes might actually be important!

**Why This Matters for You:**

If you feel like something important is being overlooked:
- Speak up! Say, "I am worried this could be something else"
- Ask, "What else could be causing my symptoms?"
- Mention if your symptoms are changing or getting worse
- Share information the doctor might not know about

**Signs Your Doctor Might Be Anchored:**
- They seem very certain very quickly
- They dismiss new information that does not fit
- They do not seem to reconsider when things change
- They repeat the same diagnosis despite new findings

**Good Doctors Prevent Anchoring By:**
- Keeping an open mind
- Asking "what else could this be?"
- Taking new information seriously
- Being willing to change their minds`,
      keyTerms: [
        {
          term: "anchor",
          definition:
            "A first impression or piece of information that strongly influences later thinking",
        },
        {
          term: "bias",
          definition:
            "A tendency to think in a certain way that might not be accurate",
        },
        {
          term: "reconsider",
          definition:
            "To think about something again, especially with the possibility of changing your mind",
        },
      ],
      analogies: [
        "Anchoring is like getting a song stuck in your head - even when you try to think of other songs, you keep coming back to the first one.",
        "It is like shopping and seeing the first price as the 'real' price - you judge everything else as cheap or expensive compared to that anchor.",
        "Think of it like autocorrect on your phone - once it decides what word you meant, it is hard to get it to change even if it is wrong.",
      ],
      examples: [
        "A patient is told by urgent care that they have a stomach bug. When they come to the ER still sick, doctors might anchor on 'stomach bug' and miss that it is actually appendicitis.",
        "An elderly person who drinks alcohol comes in confused. The anchor 'intoxication' might cause doctors to miss that they actually had a stroke.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Anchoring bias is a cognitive error where clinicians give too much weight to initial diagnostic impressions and fail to adequately adjust their thinking when new information becomes available.",
      explanation: `Anchoring bias is one of the most common and dangerous cognitive errors in medicine. Understanding it can help you be a better advocate for your health care.

**How Anchoring Develops:**

**Step 1: An anchor is set**
This can happen through:
- The patient's own words ("I think I have strep throat")
- A previous diagnosis ("History of anxiety")
- Transfer information ("Sent from urgent care for bronchitis")
- First clinical impression

**Step 2: Insufficient adjustment**
Even when new information comes in, the mind tends to stay close to the anchor:
- Confirmatory findings are given extra weight
- Contradictory findings are dismissed or minimized
- The anchor becomes the "default" diagnosis

**Common Sources of Anchors in Medicine:**

| Source | Example |
|--------|---------|
| Patient self-diagnosis | "I know this is just my allergies acting up" |
| Prior records | "History of drug-seeking behavior" |
| Referring provider | "Sending for evaluation of panic attacks" |
| Triage assessment | "Chief complaint: back pain" |
| Obvious finding | Intoxicated patient (may have other problems too) |

**Why Anchoring Is Dangerous:**

1. **Missed diagnoses**: The correct diagnosis may never be considered
2. **Delayed treatment**: Patients get sicker while wrong diagnosis is pursued
3. **Unnecessary testing**: Tests keep being ordered to "confirm" the wrong diagnosis
4. **Patient harm**: Wrong treatments may be given

**Factors That Worsen Anchoring:**

- Time pressure (no time to reconsider)
- Fatigue (harder to think flexibly)
- Confirmation from others (everyone agrees with the anchor)
- Overconfidence
- Complex patients (cognitive overload)

**How Good Clinicians Combat Anchoring:**

- **Diagnostic timeout**: Pausing to ask "What am I missing?"
- **Devil's advocate**: Actively arguing against their own diagnosis
- **Consider the opposite**: "What if I am completely wrong?"
- **Fresh eyes**: Getting another opinion from a colleague
- **Listen to nurses**: Bedside nurses often notice things doctors miss`,
      keyTerms: [
        {
          term: "cognitive error",
          definition:
            "A mistake in thinking that leads to wrong conclusions, often without the person realizing it",
        },
        {
          term: "insufficient adjustment",
          definition:
            "Not changing your estimate enough when you learn new information",
        },
        {
          term: "diagnostic timeout",
          definition:
            "A deliberate pause to reconsider the diagnosis before making important decisions",
        },
        {
          term: "confirmation",
          definition:
            "When others agree with an idea, making it feel more certain even if it is wrong",
        },
      ],
      analogies: [
        "Anchoring is like a ship dropping anchor - even as conditions change, the ship stays roughly in the same place unless the anchor is deliberately pulled up.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Anchoring bias represents the cognitive phenomenon where initial diagnostic hypotheses disproportionately influence subsequent reasoning, leading to insufficient probability revision despite disconfirming evidence.",
      explanation: `## Understanding Anchoring Bias

### Cognitive Science Foundation

Anchoring was first described by Tversky and Kahneman (1974) in their seminal work on judgment under uncertainty. In medicine, it manifests as over-reliance on initial clinical impressions.

**Mechanisms of Anchoring:**

1. **Selective attention**: Information consistent with anchor is noticed more
2. **Biased interpretation**: Ambiguous findings interpreted to support anchor
3. **Confirmatory hypothesis testing**: Questions asked that confirm rather than refute
4. **Memory distortion**: Recall biased toward anchor-consistent information

### Clinical Manifestations

**Anchoring on Patient Labels:**
- "Frequent flyer" - miss new serious problem
- "Anxiety disorder" - miss cardiac or pulmonary disease
- "Drug seeker" - miss fracture, infection, or other pathology
- "Chronic pain patient" - miss new acute cause

**Anchoring on Initial Presentation:**
- Focus on chief complaint despite contradictory vitals
- Accept working diagnosis from prior provider without verification
- Over-weight presenting symptom, under-weight associated symptoms

**Anchoring on Salient Features:**
- Obvious intoxication obscures trauma
- Dramatic psychiatric presentation masks medical illness
- Known history dominates despite new presentation

### Quantifying Anchoring

Research demonstrates:
- Initial probability estimates are often 2-3x too high
- Adjustment from anchor typically only 20-30% of what should be
- Even extreme disconfirming evidence may not break anchor

**Example:**
Initial estimate of MI: 80%
Negative troponin x 2, non-ischemic ECG
Appropriate post-test probability: <5%
Anchored estimate: Often still 30-50%

### Clinical Decision Points Vulnerable to Anchoring

| Decision Point | Anchoring Risk |
|---------------|----------------|
| ED disposition | Anchored on "not sick" despite objective abnormalities |
| Diagnostic workup | Continue testing for anchor diagnosis despite negative results |
| Treatment selection | Treat anchor diagnosis despite poor response |
| Reassessment | Maintain anchor despite clinical deterioration |

### Debiasing Strategies

**Individual Level:**
1. **Consider the opposite**: Explicitly argue against your leading diagnosis
2. **Diagnostic checklist**: Ensure systematic consideration of alternatives
3. **Probability calibration**: Force explicit probability estimates and revision
4. **Fresh perspective**: Describe case to colleague without sharing your diagnosis

**System Level:**
1. **Structured sign-out**: Require discussion of alternatives
2. **Diagnostic timeout**: Built-in pause before critical decisions
3. **Second reads**: Independent review of imaging/pathology
4. **Decision support**: Alerts for missed diagnoses

### Integration with Bayesian Reasoning

Proper Bayesian updating should revise probabilities proportionally:

\`\`\`
Anchored reasoning:
  Prior: 70% → Negative test → Post-test: 50% (insufficient adjustment)

Proper Bayesian reasoning:
  Prior: 70% → Negative test (LR- = 0.1) → Post-test: ~20% (appropriate adjustment)
\`\`\`

The failure to appropriately apply likelihood ratios is the mathematical expression of anchoring bias.`,
      keyTerms: [
        {
          term: "selective attention",
          definition:
            "The tendency to notice information that fits expectations while missing contradictory information",
        },
        {
          term: "confirmatory hypothesis testing",
          definition:
            "Asking questions designed to confirm rather than refute a hypothesis",
        },
        {
          term: "probability calibration",
          definition:
            "The accuracy with which stated confidence matches actual probability of being correct",
        },
        {
          term: "debiasing",
          definition:
            "Strategies designed to reduce the influence of cognitive biases on decision-making",
        },
      ],
      clinicalNotes:
        "Anchoring bias is particularly dangerous when the anchor is set by someone else (referring provider, triage, patient self-diagnosis) because the receiving clinician may not recognize it as a hypothesis requiring verification.",
    },
    4: {
      level: 4,
      summary:
        "Anchoring bias in clinical reasoning reflects fundamental limitations in probabilistic adjustment, requiring sophisticated metacognitive strategies and system-level interventions for mitigation in high-stakes diagnostic environments.",
      explanation: `## Advanced Understanding of Anchoring Bias

### Neuropsychological Basis

Anchoring appears to involve:

**1. Dual-process interaction:**
- System 1 generates anchor rapidly and automatically
- System 2 adjustment requires effortful processing
- Under cognitive load, System 2 adjustment is inadequate

**2. Memory mechanisms:**
- Anchor creates retrieval cues biased toward confirmatory information
- Anchor-consistent memories more accessible
- Anchor-inconsistent memories harder to retrieve

**3. Neural correlates:**
- fMRI studies show reduced prefrontal activity during anchored reasoning
- Suggests reduced analytic processing when anchor is present

### Quantifying Anchoring in Clinical Settings

**Anchoring Index:**
\`\`\`
AI = (Final estimate - Appropriate estimate) / (Anchor - Appropriate estimate)
\`\`\`

Where AI = 1 indicates complete anchoring, AI = 0 indicates appropriate adjustment.

Studies show:
- Average AI in clinical settings: 0.3-0.5
- AI increases with time pressure: 0.5-0.7
- AI increases with cognitive load: 0.6-0.8
- AI decreases with explicit probability training: 0.2-0.3

### High-Risk Anchoring Scenarios

**1. Diagnostic Momentum**

When diagnosis passes between providers, each iteration reinforces the anchor:

\`\`\`
Patient presents → ED: "probable UTI" →
  Admission: "UTI" → Hospital day 2: "UTI not improving" →
  Reality: Appendicitis all along
\`\`\`

Each provider anchored on prior provider's assessment.

**2. Label-Induced Anchoring**

Diagnostic labels in medical records create persistent anchors:

| Label | Anchoring Effect |
|-------|-----------------|
| "Somatization" | Miss organic disease |
| "Malingering" | Miss genuine pathology |
| "Chronic pain" | Miss acute pathology |
| "Borderline" | Miss medical emergency |

**3. Dramatic Presentation Anchoring**

Salient features create powerful anchors:
- Psychiatric symptoms → Miss metabolic encephalopathy
- Intoxication → Miss subdural hematoma
- Obvious injury → Miss second injury

### Advanced Debiasing Techniques

**1. Forced Probability Revision**

Require explicit probability estimates before and after each piece of information:
- Initial estimate: ____%
- After ECG: ____%
- After troponin: ____%
- Forces conscious adjustment

**2. Pre-commitment Strategy**

Before information gathering, commit to what would change your mind:
- "If troponin is negative, my probability of MI will drop by ____"
- "If CT is negative, I will discharge unless ____"

**3. Diagnostic Dissent**

Structured process for challenging diagnoses:
- Designated "devil's advocate" role
- Required articulation of alternatives
- Protected time for reconsideration

**4. Cognitive Autopsy**

Retrospective analysis of diagnostic reasoning:
- What was the anchor?
- What information should have broken the anchor?
- Why was adjustment insufficient?
- What system changes could prevent recurrence?

### System-Level Interventions

**1. Structured Communication**
- Require transfer of uncertainty, not just diagnosis
- "Working diagnosis is X, but consider Y because of Z"
- Explicit articulation of alternatives

**2. Diagnostic Time-Outs**
- Mandatory pause before disposition decisions
- Structured reconsideration of alternatives
- Checklist of high-risk diagnoses

**3. Independent Re-evaluation**
- Fresh eyes consultation
- Admit note by different provider than ED
- Second read protocols

**4. Technology Augmentation**
- Decision support suggesting alternatives
- Pattern recognition for common missed diagnoses
- Automated alerts for anchor-inconsistent findings`,
      keyTerms: [
        {
          term: "diagnostic momentum",
          definition:
            "The tendency for a diagnosis to become increasingly accepted as it passes between providers without verification",
        },
        {
          term: "anchoring index",
          definition:
            "A quantitative measure of how much final estimates remain influenced by the initial anchor",
        },
        {
          term: "cognitive autopsy",
          definition:
            "Retrospective analysis of the cognitive processes that led to a diagnostic error",
        },
        {
          term: "pre-commitment strategy",
          definition:
            "Deciding in advance what evidence would change one's mind before receiving that evidence",
        },
      ],
      clinicalNotes:
        "Anchoring is particularly insidious because it operates unconsciously. Clinicians who believe they are not anchoring are often the most anchored. Explicit probability estimation and structured debiasing protocols are more effective than relying on self-awareness.",
    },
    5: {
      level: 5,
      summary:
        "Expert management of anchoring bias requires understanding its ubiquity and resistance to awareness-based interventions, implementing validated debiasing strategies, designing systems that interrupt diagnostic momentum, and fostering a culture of diagnostic humility.",
      explanation: `## Expert Perspectives on Anchoring Bias

### The Intractability Problem

Research consistently shows:
- Awareness of anchoring bias does not eliminate it
- Expert clinicians are susceptible despite training
- Even when warned, anchoring persists
- Motivation to be accurate does not prevent anchoring

**Implications:**
- Individual debiasing strategies have limited effectiveness
- System-level interventions are essential
- Humility about one's own susceptibility is crucial

### Ecological Analysis of Anchoring

**When anchoring might be adaptive:**
- When anchors are highly accurate (expert pattern recognition)
- When adjustment costs exceed error costs
- When time pressure requires rapid decisions

**When anchoring is maladaptive:**
- When anchors come from unreliable sources
- When stakes of error are high
- When contradictory evidence is strong
- When time permits full analysis

### Interpersonal Anchoring Dynamics

**Hierarchy effects:**
- Junior clinicians anchor on senior opinions
- Difficult to challenge anchors from authority figures
- Psychological safety required for anchor-breaking

**Group dynamics:**
- Social confirmation amplifies anchors
- Groupthink perpetuates diagnostic momentum
- Diverse perspectives can break anchors

**Patient-provider dynamics:**
- Patient self-diagnosis creates powerful anchors
- Shared decision-making may reinforce patient anchors
- How to respectfully consider alternatives

### Cultural and Systemic Factors

**Factors promoting anchoring:**
- Time pressure
- Production metrics
- Fear of overtesting/defensive medicine pendulum
- Electronic record "copy forward" perpetuating labels
- Fragmented care with multiple handoffs

**Factors mitigating anchoring:**
- Culture of diagnostic safety
- Non-punitive error reporting
- Protected time for reasoning
- Structural support for second opinions
- Learning from diagnostic errors

### Implementation Science

**Evidence-based interventions:**

| Intervention | Evidence Level | Effect Size |
|--------------|---------------|-------------|
| Checklists for high-risk diagnoses | Moderate | Variable |
| Structured diagnostic timeout | Low-moderate | Promising |
| Consider-the-opposite instruction | Low | Small effect |
| Probability calibration training | Moderate | Modest effect |
| System-level independent re-evaluation | Moderate | Moderate effect |

**Implementation challenges:**
- Competing time demands
- Intervention fatigue
- Sustainability over time
- Measuring effectiveness

### Integration with Patient Safety

**Anchoring-related harm:**
- Diagnostic errors are leading cause of malpractice claims
- Anchoring implicated in ~20% of diagnostic errors
- Harm often occurs when anchor leads to premature closure

**Safety systems:**
- Trigger tools for identifying anchor-related errors
- Near-miss reporting focused on anchoring
- Root cause analysis methodology
- Quality improvement targeting high-risk scenarios

### Research Frontiers

**1. Technology-assisted debiasing:**
- AI suggesting alternatives
- Automated detection of anchor-inconsistent data
- Real-time prompts for reconsideration

**2. Simulation-based training:**
- Deliberate practice recognizing anchoring
- Feedback on anchoring in simulated cases
- Calibration of metacognitive monitoring

**3. Team-based diagnosis:**
- Optimal team composition for anchor-breaking
- Structured diagnostic deliberation
- Crowd-sourced diagnosis for difficult cases

**4. System redesign:**
- EHR modifications to reduce anchoring
- Communication tools that preserve uncertainty
- Workflow that builds in reconsideration

### Expert Recommendations

1. **Accept susceptibility**: You are not immune to anchoring
2. **Externalize reasoning**: Write out alternatives explicitly
3. **Seek disconfirmation**: Ask "What would prove me wrong?"
4. **Welcome disagreement**: Different opinions are data, not threats
5. **Build systems**: Personal vigilance is insufficient alone
6. **Learn from errors**: Every diagnostic error is a learning opportunity
7. **Maintain humility**: Uncertainty is honest, overconfidence is dangerous`,
      keyTerms: [
        {
          term: "diagnostic safety",
          definition:
            "The field focused on preventing diagnostic errors and their associated patient harm",
        },
        {
          term: "diagnostic momentum",
          definition:
            "The tendency for diagnoses to gain apparent certainty as they are transmitted between providers",
        },
        {
          term: "trigger tool",
          definition:
            "Automated flags in medical records that identify cases potentially involving diagnostic error",
        },
        {
          term: "diagnostic humility",
          definition:
            "Recognition that diagnostic certainty is rarely absolute and that reconsideration should remain possible",
        },
      ],
      clinicalNotes: `Key expert insights:
1. Anchoring bias is ubiquitous - assume you are susceptible
2. Awareness alone is insufficient - structured interventions are required
3. System-level changes are more effective than individual debiasing
4. Diagnostic labels in records create persistent anchors - use with caution
5. Welcoming disagreement and maintaining humility are protective
6. Every diagnostic error investigation should ask "Where was the anchor?"`,
    },
  },

  media: [],
  citations: [
    {
      id: "tversky-kahneman-1974",
      type: "article",
      title: "Judgment under Uncertainty: Heuristics and Biases",
      authors: ["Tversky A", "Kahneman D"],
      source: "Science",
      url: "https://science.sciencemag.org/content/185/4157/1124",
    },
    {
      id: "croskerry-cognitive-errors",
      type: "article",
      title: "The Importance of Cognitive Errors in Diagnosis and Strategies to Minimize Them",
      authors: ["Croskerry P"],
      source: "Academic Medicine",
    },
    {
      id: "saposnik-cognitive-biases",
      type: "article",
      title: "Cognitive Biases Associated with Medical Decisions",
      authors: ["Saposnik G", "et al."],
      source: "BMC Medical Informatics and Decision Making",
    },
  ],
  crossReferences: [
    {
      targetId: "cognitive-bias-confirmation-bias",
      targetType: "concept",
      relationship: "sibling",
      label: "Confirmation Bias",
    },
    {
      targetId: "cognitive-bias-availability-heuristic",
      targetType: "concept",
      relationship: "sibling",
      label: "Availability Heuristic",
    },
    {
      targetId: "diagnostic-framework-bayesian-reasoning",
      targetType: "concept",
      relationship: "related",
      label: "Bayesian Reasoning",
    },
  ],
  tags: {
    systems: ["general"],
    topics: ["clinical-reasoning", "cognitive-bias", "patient-safety"],
    keywords: [
      "anchoring",
      "cognitive bias",
      "diagnostic error",
      "heuristic",
      "clinical reasoning",
    ],
    clinicalRelevance: "critical",
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

export default ANCHORING_BIAS_CONTENT;
