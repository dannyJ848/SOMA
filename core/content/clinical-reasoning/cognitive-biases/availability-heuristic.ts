/**
 * Availability Heuristic in Clinical Diagnosis
 *
 * Educational content explaining how recent or memorable cases
 * can inappropriately influence diagnostic thinking.
 */

import { EducationalContent } from "../../types";

export const AVAILABILITY_HEURISTIC_CONTENT: EducationalContent = {
  id: "cognitive-bias-availability-heuristic",
  type: "concept",
  name: "Availability Heuristic in Clinical Diagnosis",
  alternateNames: [
    "Availability Bias",
    "Recency Bias",
    "Memorable Case Effect",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "The availability heuristic happens when doctors think something is more likely because they recently saw a similar case or because a case was very memorable.",
      explanation: `Have you ever noticed that after hearing about a car accident, you drive more carefully for a few days? That is because the accident is fresh in your mind. Doctors can have the same experience with diseases.

**How It Works:**

When a doctor tries to figure out what is wrong with you, their brain automatically thinks of diseases they have seen recently or cases that made a big impression. These "available" memories feel more common than they actually are.

**Example:**
If a doctor just had a patient with meningitis last week:
- Meningitis is now "available" in their mind
- When they see a new patient with a headache, they might think more about meningitis
- This could be helpful (they will not miss it) or harmful (they might order unnecessary tests)

**Why This Can Be a Problem:**

- **Overestimating**: Diseases they have seen recently seem more common
- **Underestimating**: Diseases they have not seen in a while seem rare
- **Missing patterns**: A string of similar cases might be coincidence, not an outbreak

**When Availability Helps:**
- Staying alert for seasonal diseases (flu in winter)
- Remembering rare but dangerous conditions after a memorable case
- Learning from recent experiences

**When Availability Hurts:**
- Ordering unnecessary tests based on recent scares
- Missing common diagnoses while looking for rare ones
- Letting dramatic cases distort judgment

**What You Can Do:**

If you feel like your doctor is either too focused on or ignoring a particular diagnosis:
- Ask: "What are the most common causes of my symptoms?"
- Share: "I read about [disease] - should we check for that?"
- Clarify: "Why do you think it is [diagnosis] versus something else?"`,
      keyTerms: [
        {
          term: "heuristic",
          definition:
            "A mental shortcut that helps make decisions quickly but can sometimes lead to errors",
          pronunciation: "hyoo-RIS-tik",
        },
        {
          term: "available",
          definition:
            "Easy to remember or bring to mind, especially recent or dramatic events",
        },
        {
          term: "overestimate",
          definition:
            "To think something is more likely or more common than it really is",
        },
      ],
      analogies: [
        "The availability heuristic is like judging how common sharks are based on Shark Week - just because you saw a lot of shark attacks on TV does not mean they happen often.",
        "It is like thinking plane crashes are common right after you see one on the news, even though flying is very safe.",
        "Imagine if you judged all restaurants by the one bad meal you had last week - that recent experience would overshadow all your other dining experiences.",
      ],
      examples: [
        "A doctor who just diagnosed a rare heart problem might think of that condition first when the next patient comes in with chest pain, even though muscle strain is much more likely.",
        "After treating several patients with a particular infection, a doctor might start testing everyone for it, even when the symptoms do not really fit.",
      ],
    },
    2: {
      level: 2,
      summary:
        "The availability heuristic is a cognitive shortcut where the ease of recalling similar cases influences probability estimates, causing clinicians to overestimate the likelihood of recently encountered or emotionally impactful diagnoses.",
      explanation: `The availability heuristic was described by psychologists Tversky and Kahneman. In medicine, it means that how easily a diagnosis comes to mind affects how likely a doctor thinks it is.

**The Psychology Behind It:**

When we estimate how common something is, our brain does not calculate actual statistics. Instead, it asks: "How easily can I think of examples?" If examples come to mind quickly, we assume the thing is common.

**Factors That Make Diagnoses "Available":**

| Factor | Effect |
|--------|--------|
| Recency | Cases from last week feel more common than cases from last year |
| Emotional impact | Dramatic or disturbing cases are more memorable |
| Personal involvement | Your own patients are more memorable than textbook cases |
| Outcome | Cases with bad outcomes are remembered more clearly |
| Media exposure | Diseases in the news feel more common |

**Clinical Examples:**

**Helpful availability:**
- During flu season, thinking about influenza when a patient has fever and body aches
- After a missed diagnosis, being more vigilant for that condition
- Remembering rare emergencies that require quick action

**Harmful availability:**
- After a lawsuit for missed pulmonary embolism, ordering CT scans on everyone with shortness of breath
- Diagnosing everyone with the "disease of the week" after a conference
- Missing common diagnoses while chasing rare ones from recent memory

**The "Recency Effect":**

Studies show doctors are significantly more likely to:
- Diagnose a condition if they diagnosed it in their last few patients
- Order a specific test if it was recently positive
- Consider a rare diagnosis after recently seeing one

**Balancing Availability:**

Good clinicians:
- Recognize when a recent case might be influencing their thinking
- Actively consider base rates (how common is this condition actually?)
- Use decision support tools and guidelines
- Seek second opinions when uncertain

**For Patients:**

Understanding availability can help you:
- Know why your doctor might be particularly worried (or not worried) about certain conditions
- Ask about the actual statistics for diseases you are concerned about
- Understand that doctors are human and affected by their experiences`,
      keyTerms: [
        {
          term: "base rate",
          definition:
            "The actual frequency or probability of a condition in a population, as opposed to perceived probability",
        },
        {
          term: "recency effect",
          definition:
            "The tendency to give more weight to recent events compared to older ones",
        },
        {
          term: "probability estimate",
          definition:
            "A judgment about how likely something is to occur",
        },
        {
          term: "cognitive shortcut",
          definition:
            "A mental process that allows quick decisions but may sacrifice accuracy",
        },
      ],
      analogies: [
        "Base rates are like knowing that most people who buy lottery tickets lose - just because you saw someone win on TV does not mean winning is likely.",
      ],
    },
    3: {
      level: 3,
      summary:
        "The availability heuristic represents a systematic deviation from Bayesian reasoning where subjective probability estimates are influenced by the retrievability of exemplars rather than actual base rates, leading to both over- and under-diagnosis depending on recent clinical experience.",
      explanation: `## The Availability Heuristic in Clinical Reasoning

### Theoretical Framework

The availability heuristic operates through the substitution of an objective judgment (true probability) with a subjective assessment (ease of retrieval):

\`\`\`
True probability → [Should inform diagnosis]
    ↓
Ease of retrieval → [Actually informs diagnosis]
\`\`\`

This substitution is automatic and often unconscious.

### Factors Affecting Availability

**Retrieval Cues:**

| Factor | Mechanism | Clinical Impact |
|--------|-----------|-----------------|
| Recency | Temporal proximity enhances retrieval | Last week's cases dominate thinking |
| Frequency | Multiple exposures strengthen memory traces | Common diagnoses more available |
| Salience | Distinctive features enhance encoding | Unusual presentations remembered |
| Emotional intensity | Amygdala involvement strengthens memory | Bad outcomes highly available |
| Self-relevance | Personal involvement enhances encoding | Own patients more memorable |

**Environmental Factors:**

- Media coverage of diseases
- Malpractice concerns
- Peer discussions
- Conference presentations
- Outbreak alerts

### Quantifying Availability Effects

Research demonstrates:
- 30-50% increase in specific diagnoses following a related case
- Effect persists for 3-5 subsequent patients
- Stronger effect for rare diagnoses
- Effect partly countered by clinical decision support

**Example: Pulmonary Embolism Diagnosis**

Following a missed PE:
- CT pulmonary angiography ordering increases 30-40%
- Effect peaks in first week, decays over 2-3 weeks
- Returns to baseline unless reinforced

### Availability and Base Rate Neglect

The availability heuristic contributes to base rate neglect:

\`\`\`
Appropriate reasoning:
  P(Disease|Symptoms) ∝ P(Disease) × P(Symptoms|Disease)
  [Must consider base rate]

Availability-biased reasoning:
  P(Disease|Symptoms) ∝ Ease of retrieving Disease
  [Base rate ignored]
\`\`\`

### Clinical Manifestations

**Over-diagnosis patterns:**
- "Diagnosis du jour" - condition recently presented at conference
- "Outbreak illusion" - perceiving pattern where none exists
- "Post-miss vigilance" - excessive testing after missing a diagnosis

**Under-diagnosis patterns:**
- "Out of sight, out of mind" - forgetting rare but important conditions
- "Common things are common" taken too far - anchoring on usual suspects
- "Been there, done that" - missing new presentation of familiar disease

### Debiasing Strategies

**Individual Level:**

1. **Explicit probability estimation**
   - Force consideration of actual base rates
   - Use clinical prediction rules when available
   - Compare intuition to guidelines

2. **Differential diagnosis discipline**
   - Always generate multiple hypotheses
   - Include both recently seen and "textbook" diagnoses
   - Consider "worst case" regardless of recent experience

3. **Metacognitive awareness**
   - Ask: "Am I thinking of this because I saw it recently?"
   - Ask: "Am I missing something because I have not seen it lately?"

**System Level:**

1. **Clinical decision support**
   - Automated differential diagnosis generators
   - Base rate information in EHR
   - Risk calculators for common presentations

2. **Structured diagnostic processes**
   - Checklists for high-risk presentations
   - Required documentation of alternatives considered
   - Diagnostic timeout protocols`,
      keyTerms: [
        {
          term: "base rate neglect",
          definition:
            "The tendency to ignore the underlying frequency of a condition when making probability judgments",
        },
        {
          term: "retrieval cue",
          definition:
            "A stimulus that triggers the recall of information from memory",
        },
        {
          term: "salience",
          definition:
            "The quality of standing out and capturing attention, making something more memorable",
        },
        {
          term: "substitution",
          definition:
            "Answering an easier question (ease of recall) instead of a harder one (actual probability)",
        },
      ],
      clinicalNotes:
        "The availability heuristic is not always harmful - it keeps dangerous diagnoses in mind. The key is recognizing when it is helping (maintaining vigilance) versus when it is distorting judgment (chasing recent cases).",
    },
    4: {
      level: 4,
      summary:
        "Advanced understanding of the availability heuristic requires recognizing its interaction with other cognitive biases, its role in both diagnostic errors and appropriate vigilance, and implementing evidence-based debiasing strategies while preserving beneficial aspects of experiential learning.",
      explanation: `## Advanced Analysis of the Availability Heuristic

### Interaction with Other Cognitive Biases

The availability heuristic rarely operates in isolation:

**Availability + Anchoring:**
\`\`\`
Recent case → Available diagnosis → Anchor →
  → Confirmatory testing → Insufficient revision
\`\`\`

**Availability + Confirmation Bias:**
- Available diagnosis becomes hypothesis
- Confirmation bias leads to selective evidence gathering
- Compound effect on diagnostic accuracy

**Availability + Representativeness:**
- Patient resembles recent memorable case
- Both availability and representativeness suggest same diagnosis
- Multiplied effect on probability estimate

### The Dual Role of Availability

**Adaptive Function:**
Availability reflects actual learning from experience:
- Recent exposure updates mental database
- Pattern recognition builds on available exemplars
- Vigilance for recently encountered dangers

**Maladaptive Consequences:**
- Idiosyncratic experience creates idiosyncratic practice
- Random variation in case mix distorts probability estimates
- Emotional weight of bad outcomes distorts risk assessment

### Calibration of Availability

**Well-calibrated availability:**
- Personal experience matches epidemiological reality
- Practice setting provides representative case mix
- Feedback loops correct misperceptions

**Miscalibrated availability:**
- Specialty practice creates skewed experience
- Referral bias distorts perceived disease frequency
- Selection effects (only see sick patients) distort estimates

**Example: Referral Bias**
A cardiologist sees:
- All positive stress tests referred for catheterization
- High proportion have significant CAD
- Develops calibration: "Most positive stress tests mean real disease"

Reality:
- Many positive stress tests are false positives
- Most were never referred to this cardiologist
- Cardiologist's "availability" is misleading

### Availability in the Information Age

**New sources of availability:**
- Online case reports
- Social media medical discussions
- News coverage of outbreaks
- Medico-legal developments

**Implications:**
- Vicarious availability (things one reads about, not sees)
- Shared availability across clinicians (viral medical stories)
- Amplification of rare events through media

### Advanced Debiasing Approaches

**1. Structured Reflection:**

Before finalizing diagnosis, explicitly consider:
- "What have I diagnosed recently that might be biasing me?"
- "What have I NOT seen recently that I should consider?"
- "Am I applying population-level or personal experience base rates?"

**2. Environmental Restructuring:**

| Intervention | Mechanism |
|--------------|-----------|
| Base rate displays | Counter retrieval-based estimates |
| Differential diagnosis prompts | Expand consideration set |
| Historical data access | Ground estimates in actual frequencies |
| Peer consultation | Pool experience across clinicians |

**3. Feedback Systems:**

- Track diagnostic accuracy over time
- Identify patterns of over/under-diagnosis
- Compare personal practice to benchmarks
- Learn from diagnostic discrepancies

### Group-Level Availability Effects

**Shared availability:**
- Morning conference case discussion influences entire team
- Morbidity and mortality cases create department-wide vigilance
- Media coverage creates population-level availability

**Implications for training:**
- Case-based learning creates shared mental models
- May perpetuate biases across generations
- Need balance of individual experience and evidence-based practice

### Availability and Clinical Expertise

**Expert pattern recognition:**
- Built on extensive case exposure
- Availability of relevant cases enables rapid diagnosis
- More cases = more nuanced availability

**Expert availability biases:**
- Overconfidence in pattern matching
- May miss novel presentations
- Specialty-specific availability distortions

**Optimal expertise:**
- Large, representative case library
- Continuous calibration through feedback
- Integration of evidence with experience`,
      keyTerms: [
        {
          term: "referral bias",
          definition:
            "Distortion in perceived disease frequency due to seeing only cases referred for specialty evaluation",
        },
        {
          term: "calibration",
          definition:
            "The accuracy with which subjective probability estimates match actual frequencies",
        },
        {
          term: "vicarious availability",
          definition:
            "Availability of cases learned about through media or discussion rather than direct experience",
        },
        {
          term: "environmental restructuring",
          definition:
            "Modifying the decision environment to promote better choices",
        },
      ],
      clinicalNotes:
        "The availability heuristic is paradoxically both a source of expertise (learning from cases) and error (biased by non-representative samples). The goal is to optimize learning while debiasing judgment.",
    },
    5: {
      level: 5,
      summary:
        "Expert management of the availability heuristic requires understanding its neurobiological basis, optimizing the balance between experiential learning and evidence-based practice, implementing system-level interventions, and recognizing the limits of individual debiasing in complex healthcare environments.",
      explanation: `## Expert Perspectives on the Availability Heuristic

### Neurobiological Underpinnings

**Memory systems involved:**
- Episodic memory: Stores specific cases
- Semantic memory: Stores disease knowledge
- Emotional memory: Amygdala-mediated encoding
- Procedural memory: Pattern recognition routines

**Retrieval mechanisms:**
- Cue-dependent retrieval: Symptoms trigger case memories
- Spreading activation: One memory activates related memories
- Fluency: Ease of processing interpreted as frequency

**Implications:**
- Availability operates automatically at neural level
- Cannot be eliminated through awareness alone
- Structural interventions needed to counteract

### The Expertise Paradox

**More experience → More availability:**
- Larger case library
- More nuanced pattern matching
- Faster retrieval

**More experience → More availability bias:**
- Idiosyncratic case mix
- Overweighting of memorable cases
- Decreased reliance on guidelines

**Resolution:**
Expertise should combine:
- Rich case experience (availability)
- Explicit knowledge of base rates (Bayesian)
- Structured diagnostic processes (debiasing)
- Continuous calibration (feedback)

### Availability in Diagnostic Ecosystems

**Systems perspective:**
Availability operates at multiple levels simultaneously:

\`\`\`
Individual → Team → Institution → Profession → Society
    ↓          ↓          ↓            ↓           ↓
Personal    Shared     Practice    Training    Media
experience  cases      patterns    emphasis    coverage
\`\`\`

**Implications:**
- Individual debiasing insufficient
- Team-level interventions needed
- Institutional cultures matter
- Professional education shapes availability
- Public health messaging affects societal availability

### Optimizing Learning from Experience

**Evidence-informed case learning:**
- Deliberately seek representative case exposure
- Weight cases by epidemiological importance
- Calibrate with outcome feedback
- Integrate with evidence-based guidelines

**Simulation and deliberate practice:**
- Expose trainees to rare conditions
- Create artificial "availability" for important diagnoses
- Control for random variation in case mix
- Standardize experiential learning

### System-Level Interventions

**1. Information Architecture:**
- EHR displays of base rates
- Differential diagnosis generators
- Risk calculator integration
- Alert systems for under-considered diagnoses

**2. Workflow Design:**
- Structured diagnostic processes
- Mandatory differential documentation
- Timeout before disposition decisions
- Second-read protocols

**3. Team Structures:**
- Diverse teams pool availability
- Handoff structures that preserve uncertainty
- Consultation culture that seeks alternative perspectives
- Learning systems that distribute experience

**4. Feedback Systems:**
- Track diagnostic outcomes
- Compare to benchmarks
- Identify patterns of bias
- Close learning loops

### Research Frontiers

**1. Quantifying availability in real-time:**
- EHR-based measurement of diagnosis patterns
- Correlation with recent case exposure
- Identification of high-risk situations

**2. Personalized debiasing:**
- Individual bias profiles
- Targeted interventions
- Adaptive decision support

**3. AI-assisted diagnosis:**
- Machine learning not subject to human availability bias
- But may have analogous biases from training data
- Human-AI teaming to leverage complementary strengths

### Ethical Considerations

**Disclosure:**
- Should patients know about availability effects?
- How to communicate diagnostic uncertainty?
- Implications for informed consent

**Equity:**
- Availability biases may affect different populations differently
- Stereotypes and implicit biases interact with availability
- System-level approaches needed for equity

**Resource allocation:**
- Availability-driven over-testing has costs
- Under-diagnosis from low availability has costs
- Stewardship requires calibrated availability

### Expert Recommendations

1. **Accept the reality**: Availability bias is ubiquitous and automatic
2. **Seek calibration**: Continuously compare experience to evidence
3. **Use structures**: Checklists, algorithms, and decision support
4. **Pool experience**: Team-based diagnosis diversifies availability
5. **Embrace uncertainty**: Availability creates false confidence
6. **Design systems**: Individual debiasing is insufficient
7. **Learn continuously**: Every diagnostic outcome is feedback`,
      keyTerms: [
        {
          term: "spreading activation",
          definition:
            "A cognitive process where activating one memory triggers related memories in a network",
        },
        {
          term: "expertise paradox",
          definition:
            "The phenomenon where greater experience can create both expertise and systematic biases",
        },
        {
          term: "fluency",
          definition:
            "The subjective ease of cognitive processing, often mistaken for truth or frequency",
        },
        {
          term: "diagnostic ecosystem",
          definition:
            "The network of individuals, teams, institutions, and systems that collectively influence diagnostic processes",
        },
      ],
      clinicalNotes: `Key expert insights:
1. Availability is the mechanism of experiential learning - cannot eliminate it without losing expertise
2. The goal is calibration, not elimination
3. System-level interventions more effective than individual debiasing
4. Teams with diverse experience have more balanced availability
5. Feedback is essential for calibration - track diagnostic outcomes
6. AI may help by providing non-human availability, but comes with own biases`,
    },
  },

  media: [],
  citations: [
    {
      id: "tversky-kahneman-availability",
      type: "article",
      title: "Availability: A Heuristic for Judging Frequency and Probability",
      authors: ["Tversky A", "Kahneman D"],
      source: "Cognitive Psychology",
    },
    {
      id: "mamede-availability",
      type: "article",
      title: "Effect of Availability Bias and Reflective Reasoning on Diagnostic Accuracy Among Internal Medicine Residents",
      authors: ["Mamede S", "et al."],
      source: "JAMA",
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
      targetId: "cognitive-bias-confirmation-bias",
      targetType: "concept",
      relationship: "sibling",
      label: "Confirmation Bias",
    },
    {
      targetId: "diagnostic-framework-pattern-recognition",
      targetType: "concept",
      relationship: "related",
      label: "Pattern Recognition",
    },
  ],
  tags: {
    systems: ["general"],
    topics: ["clinical-reasoning", "cognitive-bias", "medical-education"],
    keywords: [
      "availability heuristic",
      "cognitive bias",
      "base rate",
      "recency",
      "diagnostic reasoning",
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

export default AVAILABILITY_HEURISTIC_CONTENT;
