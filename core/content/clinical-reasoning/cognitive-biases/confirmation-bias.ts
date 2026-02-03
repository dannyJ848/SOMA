/**
 * Confirmation Bias in Clinical Diagnosis
 *
 * Educational content explaining how the tendency to seek confirming
 * evidence can lead to diagnostic errors.
 */

import { EducationalContent } from "../../types";

export const CONFIRMATION_BIAS_CONTENT: EducationalContent = {
  id: "cognitive-bias-confirmation-bias",
  type: "concept",
  name: "Confirmation Bias in Clinical Diagnosis",
  alternateNames: [
    "Confirmatory Bias",
    "Myside Bias",
    "Selective Evidence Gathering",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Confirmation bias happens when doctors focus on information that supports what they already think is wrong with you and ignore information that suggests something else.",
      explanation: `Imagine you already decided your friend is upset with you. You might notice every time they do not smile at you (which seems to confirm they are upset) but ignore all the times they are friendly (which would suggest they are not upset). This is confirmation bias.

**How It Happens in Medicine:**

When a doctor thinks they know what is wrong:
- They notice findings that fit their idea
- They might dismiss findings that do not fit
- They ask questions expecting certain answers
- They may order tests to "prove" their guess

**Example:**
A doctor thinks a patient has anxiety. They might:
- Focus on the patient seeming nervous (confirms anxiety)
- Notice the fast heart rate (fits with anxiety)
- Overlook that the patient also has weight loss and tremor (could mean thyroid problem)
- Order fewer tests because "it is just anxiety"

**Why This Is a Problem:**

- The real problem might get missed
- Treatment for the wrong condition does not help
- The patient might get sicker
- Trust between patient and doctor can be damaged

**Signs Your Doctor Might Have Confirmation Bias:**

- They seem very sure of the diagnosis very quickly
- They dismiss your concerns that do not fit their idea
- They do not seem interested in symptoms that do not match their diagnosis
- They get frustrated when you bring up other possibilities

**What You Can Do:**

1. **Share all your symptoms**, even ones that seem unrelated
2. **Ask questions** like "What else could this be?"
3. **Voice concerns**: "I am worried because my symptom of [X] does not fit"
4. **Request**: "Can we make sure this is not [other condition]?"
5. **Get a second opinion** if you are not satisfied

**Good doctors prevent confirmation bias by:**
- Actively looking for evidence AGAINST their first guess
- Asking "What if I am wrong?"
- Staying open to new information
- Taking patient concerns seriously`,
      keyTerms: [
        {
          term: "confirm",
          definition:
            "To support or prove that something is true",
        },
        {
          term: "dismiss",
          definition:
            "To decide that something is not important and ignore it",
        },
        {
          term: "bias",
          definition:
            "A tendency to think in a certain way that might not be fair or accurate",
        },
      ],
      analogies: [
        "Confirmation bias is like only reading reviews that agree with a purchase you already made - you are looking for reasons you were right, not for the truth.",
        "It is like a detective who already thinks someone is guilty and only looks for evidence against them, ignoring anything that might prove innocence.",
        "Think of it like choosing to only look at sunny weather forecasts when planning a picnic, ignoring the ones that predict rain.",
      ],
      examples: [
        "A doctor decides a patient has the flu. They notice the fever and body aches (fits flu) but overlook the stiff neck (could be meningitis).",
        "A teenager is labeled as 'just being dramatic.' Doctors might dismiss their pain complaints, missing that they actually have appendicitis.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Confirmation bias is the tendency to favor information that supports an existing hypothesis while discounting contradictory evidence, leading to premature diagnostic closure and potentially missed diagnoses.",
      explanation: `Confirmation bias is one of the most common and dangerous thinking errors in medicine. It affects even experienced clinicians and can be difficult to recognize in yourself.

**The Three Parts of Confirmation Bias:**

**1. Selective Information Seeking**
Doctors may ask questions designed to confirm their hypothesis:
- "Is the pain worse with stress?" (confirms anxiety)
- Rather than: "Is the pain worse with exertion?" (might suggest heart disease)

**2. Biased Interpretation**
The same finding can be interpreted differently based on existing beliefs:
- Rapid heart rate: "Confirms anxiety" vs. "Could indicate thyroid disease"
- Weight loss: "Just stress" vs. "Requires workup"

**3. Selective Recall**
Doctors may remember findings that fit their diagnosis better than findings that do not:
- Remember: Patient said pain is worse with stress
- Forget: Patient also mentioned pain with walking upstairs

**When Confirmation Bias Is Most Likely:**

| Situation | Why More Susceptible |
|-----------|---------------------|
| Time pressure | No time to consider alternatives |
| High confidence | Feel certain, so stop looking |
| Confirming "known" diagnoses | Prior labels accepted without question |
| Complex patients | Simplify by sticking with one explanation |
| Emotional cases | Strong feelings affect judgment |

**Real Clinical Examples:**

**Example 1: The "Anxious" Patient**
- 28-year-old woman with racing heart and anxiety
- Labeled as panic attacks
- Doctors interpret all symptoms through anxiety lens
- Months later: Diagnosed with hyperthyroidism

**Example 2: The "Frequent Flyer"**
- Patient known for many ED visits with vague complaints
- Labeled as drug-seeking or somatization
- New chest pain dismissed
- Turns out: Had a heart attack

**How Good Clinicians Fight Confirmation Bias:**

1. **Consider the opposite**: "What if it is NOT anxiety?"
2. **Seek disconfirming evidence**: "What findings would prove me wrong?"
3. **Take contradictory symptoms seriously**: "Why does not this fit?"
4. **Get fresh eyes**: Ask a colleague for their opinion
5. **Use checklists**: Structured approaches prevent shortcuts

**For Patients:**

You can help by:
- Insisting on explaining symptoms that do not fit the diagnosis
- Asking: "What else could cause these symptoms?"
- Requesting: "Can we do a test to make sure it is not [X]?"
- Seeking a second opinion if you feel unheard`,
      keyTerms: [
        {
          term: "hypothesis",
          definition:
            "An idea or explanation that can be tested, like a guess about what is causing symptoms",
          pronunciation: "hy-POTH-eh-sis",
        },
        {
          term: "premature closure",
          definition:
            "Deciding on a diagnosis too early, before enough information has been gathered",
        },
        {
          term: "disconfirming evidence",
          definition:
            "Information that suggests a hypothesis or diagnosis is wrong",
        },
        {
          term: "diagnostic label",
          definition:
            "A name given to a patient's condition that may influence future care",
        },
      ],
      analogies: [
        "Confirmation bias is like a prosecutor who only presents evidence of guilt and hides evidence of innocence - they are trying to win, not find the truth.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Confirmation bias in clinical reasoning involves systematic preferential treatment of hypothesis-confirming evidence through selective acquisition, biased interpretation, and distorted memory, contributing significantly to diagnostic error.",
      explanation: `## Confirmation Bias in Clinical Reasoning

### Theoretical Framework

Confirmation bias operates through multiple cognitive mechanisms:

**1. Positive Test Strategy**
Clinicians tend to seek information expected to confirm the hypothesis:
- Asking "Is the pain worse with stress?" (expected YES for anxiety)
- Rather than "Is the pain worse with exertion?" (might reveal cardiac cause)

This is efficient when the hypothesis is correct but dangerous when wrong.

**2. Biased Assimilation**
Same evidence interpreted differently based on prior beliefs:

| Finding | If Believing Anxiety | If Believing Thyroid Disease |
|---------|---------------------|------------------------------|
| Tachycardia | Confirms anxiety | Suggests hyperthyroidism |
| Weight loss | Stress-related | Concerning for pathology |
| Tremor | Nervous tremor | Thyroid sign |

**3. Belief Perseverance**
Once formed, beliefs resist change even with contradictory evidence:
- Negative test: "Probably a false negative"
- Contradictory finding: "Does not really change things"
- Alternative explanation: "Not as likely"

### Clinical Manifestations

**Confirmation in History-Taking:**
- Questions framed to elicit confirming answers
- Leading questions: "The pain is worse with stress, right?"
- Incomplete review of systems for non-confirming findings
- Selective documentation of confirming elements

**Confirmation in Physical Examination:**
- Focused exam on expected findings
- Subtle abnormalities in unexpected areas missed
- Findings interpreted to support hypothesis
- "Negative" findings not adequately documented

**Confirmation in Test Ordering:**
- Tests ordered to confirm, not to discriminate
- Positive results weighted heavily
- Negative results discounted ("need more sensitive test")
- Test results fitting hypothesis recalled better

### Interaction with Other Biases

**Confirmation + Anchoring:**
\`\`\`
Initial hypothesis (anchor) →
  Confirmatory evidence seeking →
  Biased interpretation →
  Strengthened anchor →
  Resistant to disconfirmation
\`\`\`

**Confirmation + Availability:**
- Available diagnoses become hypotheses
- Confirmation bias maintains them
- Double effect on probability distortion

### Research Evidence

Studies demonstrate:
- Clinicians seek confirming evidence 2-4x more than disconfirming
- Identical cases with different framing lead to different diagnoses
- Diagnostic confidence increases with confirming evidence but does not decrease appropriately with disconfirming evidence
- Experienced clinicians equally susceptible as novices

### Debiasing Strategies

**Individual Approaches:**

1. **Consider the opposite**
   - Force explicit consideration of alternative diagnoses
   - Ask: "What would I expect if this were NOT [diagnosis]?"
   - Actively seek disconfirming evidence

2. **Pre-mortem analysis**
   - Before finalizing: "If this diagnosis is wrong, why would that be?"
   - Identify vulnerabilities in reasoning
   - Plan for diagnostic failure

3. **Devil's advocate thinking**
   - Deliberately argue against your own diagnosis
   - List all findings that do not fit
   - Consider how a skeptic would view the case

**Structural Approaches:**

1. **Diagnostic checklists**
   - Ensure consideration of alternatives
   - Force documentation of disconfirming evidence
   - Standardize thoroughness

2. **Required differential diagnosis**
   - Mandate consideration of alternatives
   - Document why alternatives were rejected
   - Track diagnostic accuracy

3. **Second opinions**
   - Fresh perspective without same hypothesis
   - Structured disagreement protocols
   - M&M review for diagnostic errors`,
      keyTerms: [
        {
          term: "positive test strategy",
          definition:
            "The tendency to seek information that would confirm a hypothesis rather than refute it",
        },
        {
          term: "biased assimilation",
          definition:
            "Interpreting new evidence in ways that support existing beliefs",
        },
        {
          term: "belief perseverance",
          definition:
            "The tendency to maintain beliefs even when confronted with contradictory evidence",
        },
        {
          term: "pre-mortem analysis",
          definition:
            "Imagining the diagnosis is wrong and identifying potential reasons before the error actually occurs",
        },
      ],
      clinicalNotes:
        "Confirmation bias is particularly dangerous because it feels like rational evidence gathering. The clinician believes they are being thorough when they are actually selectively building a case for their preferred hypothesis.",
    },
    4: {
      level: 4,
      summary:
        "Advanced understanding of confirmation bias requires recognition of its ubiquity, its interaction with motivated reasoning and identity-protective cognition, and implementation of both individual metacognitive strategies and system-level interventions to mitigate its effects on diagnostic accuracy.",
      explanation: `## Advanced Analysis of Confirmation Bias

### Deep Cognitive Mechanisms

**Motivated Reasoning:**
Confirmation bias is amplified when clinicians have stakes in a particular diagnosis:
- Ego involvement: "I am an expert, my diagnosis must be right"
- Efficiency motive: "I do not have time to reconsider"
- Cognitive ease: "This explanation is simple and satisfying"
- Accountability avoidance: "If I keep the same diagnosis, I cannot be blamed"

**Identity-Protective Cognition:**
When diagnostic decisions become tied to identity:
- "A good doctor would recognize anxiety"
- "I am not the kind of doctor who orders unnecessary tests"
- Diagnosis becomes about self-image, not patient data

**Asymmetric Scrutiny:**
- Confirming evidence: Accepted readily, minimal criticism
- Disconfirming evidence: Scrutinized heavily, reasons found to dismiss
- Result: Unequal evidence threshold for competing hypotheses

### Confirmation Bias in Clinical Teams

**Group Confirmation:**
- Team members seek consensus
- Dissenting opinions suppressed
- Shared hypothesis becomes "fact"
- Confirmation bias amplified at group level

**Hierarchy Effects:**
- Senior clinician's hypothesis becomes team anchor
- Junior team members seek confirming evidence
- Challenging the diagnosis feels like challenging authority
- Psychological safety needed for dissent

**Communication Patterns:**
- Sign-out emphasizes confirming narrative
- Contradictory findings minimized in handoff
- Diagnosis gains certainty through repetition

### Measurement and Detection

**Indicators of confirmation bias:**
- Diagnostic confidence increases without new evidence
- Time to diagnosis much shorter than complexity warrants
- Documentation emphasizes confirming findings
- Contradictory findings absent or minimized in notes
- Questions asked are predominantly confirmatory

**Quantitative assessment:**
\`\`\`
Confirmation Index = (Confirming questions asked) / (Total diagnostic questions)
Well-calibrated reasoning: ~0.5
Confirmation-biased reasoning: >0.7
\`\`\`

### Advanced Debiasing

**Metacognitive Strategies:**

1. **Cognitive forcing functions**
   - Mandatory documentation of disconfirming evidence
   - Required listing of alternative diagnoses
   - Structured pause before finalizing diagnosis

2. **Perspective-taking**
   - "What would a skeptical consultant think?"
   - "How would this look in M&M review?"
   - "What would I think if this were my family member?"

3. **Probability calibration**
   - Explicit probability estimates for competing hypotheses
   - Force updating with each new piece of evidence
   - Track calibration over time

**Environmental Restructuring:**

1. **Information presentation**
   - Present contradictory findings prominently
   - Flag findings inconsistent with working diagnosis
   - Decision support highlighting alternatives

2. **Workflow design**
   - Built-in reconsideration points
   - Structured diagnostic timeout
   - Fresh eyes consultation protocols

3. **Feedback systems**
   - Track diagnostic accuracy
   - Analyze patterns of confirmation bias
   - Close learning loops

### The Tension with Clinical Efficiency

**The paradox:**
- Confirmation bias exists because focused reasoning is efficient
- Truly unbiased information seeking is impractical
- Some degree of hypothesis-directed inquiry is necessary

**Optimal balance:**
- Focused inquiry for likely diagnoses
- BUT active consideration of dangerous alternatives
- AND deliberate search for disconfirming evidence
- WITH calibrated confidence that allows revision

### When Confirmation Bias is Adaptive

**Appropriate contexts:**
- Testing highly likely hypothesis
- Low-stakes decisions
- Time-critical situations requiring action
- Follow-up of established diagnoses

**Dangerous contexts:**
- Initial evaluation of undifferentiated symptoms
- High-stakes diagnostic decisions
- Patients with prior diagnostic labels
- Cases where confirmation feels "too easy"`,
      keyTerms: [
        {
          term: "motivated reasoning",
          definition:
            "Cognitive process where desired conclusions influence the evaluation of evidence",
        },
        {
          term: "identity-protective cognition",
          definition:
            "The tendency to interpret evidence in ways that protect one's self-concept and group identity",
        },
        {
          term: "asymmetric scrutiny",
          definition:
            "Applying different standards of evidence evaluation to information that supports versus contradicts one's beliefs",
        },
        {
          term: "cognitive forcing function",
          definition:
            "A procedural requirement designed to interrupt automatic biased reasoning",
        },
      ],
      clinicalNotes:
        "The most sophisticated form of confirmation bias occurs when clinicians believe they are being appropriately evidence-based while actually engaging in biased evidence evaluation. Metacognitive monitoring is essential but insufficient - structural interventions are required.",
    },
    5: {
      level: 5,
      summary:
        "Expert management of confirmation bias requires understanding its deep roots in human cognition, implementing multi-level interventions combining individual metacognition with system redesign, fostering cultures of diagnostic humility, and recognizing the inherent tension between efficiency and thoroughness in clinical reasoning.",
      explanation: `## Expert Perspectives on Confirmation Bias

### Fundamental Nature of Confirmation Bias

**Evolutionary origins:**
- Confirmation bias may be adaptive for quick decisions
- Revising beliefs is cognitively costly
- In ancestral environments, first hypothesis often correct
- Modern medicine creates mismatch: complexity exceeds heuristics

**Cognitive architecture:**
- Belief revision requires effortful System 2 processing
- Confirmation uses automatic System 1 pathways
- Under load, System 1 dominates
- Confirmation bias is the "default" mode

**Implication:**
Confirmation bias cannot be eliminated through awareness or motivation alone. It requires structural intervention.

### The Illusion of Evidence-Based Reasoning

**Sophisticated confirmation:**
Expert clinicians can engage in confirmation bias while believing they are being rigorous:
- "I am ordering this test to rule out alternatives" (but interpreted to confirm)
- "I considered the differential" (superficially)
- "The evidence supports my diagnosis" (selectively evaluated evidence)

**Confidence calibration failure:**
- Diagnostic confidence often exceeds accuracy
- Confirming evidence increases confidence appropriately
- Disconfirming evidence does not decrease confidence appropriately
- Result: Overconfident wrong diagnoses

### System-Level Analysis

**Electronic Health Record effects:**
- Copy-forward perpetuates diagnostic labels
- Diagnosis becomes more certain with each repetition
- Original reasoning lost, only conclusion remains
- Subsequent providers inherit confirmed bias

**Production pressure:**
- Time pressure favors confirmatory shortcuts
- Efficiency metrics discourage thoroughness
- Volume incentives compete with accuracy
- System design enables bias

**Training effects:**
- Role models transmit confirmation patterns
- Cases presented with confirmed diagnoses
- "Teaching pearls" emphasize pattern matching
- Limited exposure to diagnostic error review

### Organizational Interventions

**Culture change:**

1. **Diagnostic humility**
   - Acknowledge uncertainty explicitly
   - Model reconsideration of diagnoses
   - Celebrate diagnostic revision, not just confirmation

2. **Psychological safety**
   - Enable questioning of diagnoses
   - Protect those who voice concerns
   - Reward constructive disagreement

3. **Learning from error**
   - Non-punitive error reporting
   - Root cause analysis for diagnostic failures
   - Share lessons learned

**Structural interventions:**

1. **Diagnostic timeout**
   - Mandatory pause before high-stakes decisions
   - Structured reconsideration of alternatives
   - Documented consideration of disconfirming evidence

2. **Second opinion protocols**
   - Fresh evaluation without prior diagnosis
   - Structured disagreement resolution
   - Tracking of diagnostic discrepancies

3. **Feedback systems**
   - Track diagnostic accuracy by clinician
   - Identify patterns of confirmation bias
   - Individual and aggregate data for improvement

### Integration with Diagnostic Excellence

**Diagnostic excellence framework:**
- Right diagnosis
- Right time
- Right communication
- Continuous improvement

**Confirmation bias threatens all dimensions:**
- Wrong diagnosis through biased reasoning
- Delayed diagnosis through perseveration
- Poor communication when contradictions ignored
- No improvement without recognizing bias

### Ethical Dimensions

**Patient autonomy:**
- Patients deserve unbiased diagnostic reasoning
- Confirmation bias may violate duty of care
- Informed consent requires honest uncertainty communication

**Equity implications:**
- Certain populations more likely to receive diagnostic labels
- Labels trigger confirmation bias in subsequent encounters
- Systematic under-diagnosis of certain groups
- Confirmation bias perpetuates health disparities

**Professional responsibility:**
- Obligation to minimize bias
- Duty to maintain competence
- Responsibility for system improvement
- Accountability for diagnostic quality

### Research Frontiers

**1. Real-time detection:**
- Natural language processing of clinical notes
- Identification of confirmation patterns
- Just-in-time prompts for reconsideration

**2. AI-assisted diagnosis:**
- Algorithms without human confirmation bias
- But may have analogous biases from training data
- Optimal human-AI collaboration

**3. Personalized debiasing:**
- Individual confirmation bias profiles
- Tailored interventions
- Adaptive decision support

### Expert Recommendations

1. **Assume you are biased**: Confirmation bias affects everyone
2. **Seek disconfirmation**: Actively look for evidence against your hypothesis
3. **Welcome disagreement**: Different opinions are data, not threats
4. **Use structures**: Checklists, timeouts, and required documentation
5. **Design systems**: Individual efforts are insufficient
6. **Model humility**: Leaders must demonstrate diagnostic uncertainty
7. **Learn from errors**: Every missed diagnosis is an opportunity
8. **Protect dissenters**: Those who question diagnoses should be valued`,
      keyTerms: [
        {
          term: "diagnostic excellence",
          definition:
            "A framework for optimizing diagnostic accuracy, timeliness, communication, and continuous improvement",
        },
        {
          term: "diagnostic humility",
          definition:
            "Recognition that diagnostic certainty is rarely absolute and reconsideration should remain possible",
        },
        {
          term: "psychological safety",
          definition:
            "A team climate where individuals feel safe to voice concerns, disagree, and admit uncertainty without fear of reprisal",
        },
        {
          term: "diagnostic label",
          definition:
            "A diagnosis recorded in the medical record that can persist and influence future clinical reasoning",
        },
      ],
      clinicalNotes: `Key expert insights:
1. Confirmation bias is not a personal failing - it is how human cognition works
2. Awareness alone does not prevent confirmation bias
3. Structural interventions are more effective than individual debiasing
4. Diagnostic labels in medical records are powerful sources of confirmation bias
5. Team culture and psychological safety are essential for questioning diagnoses
6. Healthcare systems must be designed to interrupt confirmation bias
7. Diagnostic equity requires attention to how confirmation bias perpetuates disparities`,
    },
  },

  media: [],
  citations: [
    {
      id: "nickerson-confirmation-bias",
      type: "article",
      title: "Confirmation Bias: A Ubiquitous Phenomenon in Many Guises",
      authors: ["Nickerson RS"],
      source: "Review of General Psychology",
    },
    {
      id: "croskerry-cognitive-autopsy",
      type: "article",
      title: "A Universal Model of Diagnostic Reasoning",
      authors: ["Croskerry P"],
      source: "Academic Medicine",
    },
    {
      id: "improving-diagnosis-nas",
      type: "textbook",
      title: "Improving Diagnosis in Health Care",
      authors: ["National Academies of Sciences, Engineering, and Medicine"],
      source: "National Academies Press",
    },
  ],
  crossReferences: [
    {
      targetId: "cognitive-bias-anchoring",
      targetType: "concept",
      relationship: "sibling",
      label: "Anchoring Bias",
    },
    {
      targetId: "cognitive-bias-availability-heuristic",
      targetType: "concept",
      relationship: "sibling",
      label: "Availability Heuristic",
    },
    {
      targetId: "diagnostic-framework-hypothetico-deductive",
      targetType: "concept",
      relationship: "related",
      label: "Hypothetico-Deductive Method",
    },
  ],
  tags: {
    systems: ["general"],
    topics: ["clinical-reasoning", "cognitive-bias", "patient-safety"],
    keywords: [
      "confirmation bias",
      "cognitive bias",
      "diagnostic error",
      "clinical reasoning",
      "hypothesis testing",
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

export default CONFIRMATION_BIAS_CONTENT;
