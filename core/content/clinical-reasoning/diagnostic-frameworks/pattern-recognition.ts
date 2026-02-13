/**
 * Pattern Recognition in Clinical Diagnosis
 *
 * Educational content explaining how healthcare providers use pattern
 * recognition to rapidly identify diseases and conditions based on
 * characteristic clinical presentations.
 */

import { EducationalContent } from "../../types";

export const PATTERN_RECOGNITION_CONTENT: EducationalContent = {
  id: "diagnostic-framework-pattern-recognition",
  type: "concept",
  name: "Pattern Recognition in Clinical Diagnosis",
  alternateNames: [
    "Illness Script Matching",
    "Gestalt Diagnosis",
    "Non-Analytic Reasoning",
  ],

  levels: {
    1: {
      level: 1,
      summary:
        "Pattern recognition is how doctors quickly recognize diseases by matching what they see to patterns they have learned from experience.",
      explanation: `Experienced doctors can often tell what is wrong very quickly - sometimes within seconds of meeting a patient. This is not magic; it is pattern recognition.

**How It Works:**

Think about how you recognize a friend in a crowd. You do not analyze their height, then their hair color, then their nose shape. You just "see" them immediately. Doctors develop similar abilities for diseases.

**Building Patterns:**

Doctors learn patterns through:
- **Medical school**: Learning textbook descriptions
- **Training**: Seeing hundreds of patients with similar conditions
- **Experience**: Building a mental library of cases

**What Makes a Pattern:**

Each disease has a "typical picture" that includes:
- Who gets it (age, gender, health history)
- What symptoms they have
- What the examination shows
- How it develops over time

**Example - Recognizing Appendicitis:**
When a doctor sees:
- Young person
- Pain that started around the belly button
- Pain that moved to the lower right side
- Fever and loss of appetite
They immediately think "this looks like appendicitis!"

**Why This Matters for You:**

Understanding that doctors use pattern recognition helps explain:
- Why they ask certain questions
- Why they may have a diagnosis in mind quickly
- Why unusual presentations can be harder to diagnose

**The Downside:**

Pattern recognition works best for common, typical presentations. When your situation is unusual, doctors need to think more carefully.`,
      keyTerms: [
        {
          term: "pattern",
          definition:
            "A recognizable combination of features that tend to go together",
        },
        {
          term: "presentation",
          definition:
            "How a disease shows itself - the combination of symptoms and signs",
        },
        {
          term: "typical",
          definition:
            "The most common or expected way something appears",
        },
      ],
      analogies: [
        "Pattern recognition is like identifying a song from the first few notes - you do not need to hear the whole thing to know what it is.",
        "It is similar to how a car mechanic can often diagnose a problem just by listening to the engine sound.",
        "Think of how you can recognize a dog breed at a glance without measuring each feature.",
      ],
      examples: [
        "A doctor sees an elderly patient who fell and now cannot put weight on their leg, with the leg turned outward and looking shorter. They immediately suspect a hip fracture.",
        "A child comes in with a barking cough that sounds like a seal. The doctor recognizes this as croup before doing any tests.",
      ],
    },
    2: {
      level: 2,
      summary:
        "Pattern recognition is a rapid, intuitive diagnostic process where clinicians match patient presentations to stored mental templates called illness scripts, enabling fast and efficient diagnosis of familiar conditions.",
      explanation: `Pattern recognition is the dominant diagnostic strategy used by experienced physicians, especially for common conditions. It operates largely automatically and unconsciously.

**The Science Behind It:**

Research shows that expert diagnosticians:
- Make accurate diagnoses within seconds for typical cases
- Use pattern matching rather than step-by-step analysis
- Recognize patterns even when they cannot explain exactly how

**Illness Scripts:**

An "illness script" is a mental template for a disease that includes:

| Component | Description | Example (Heart Attack) |
|-----------|-------------|----------------------|
| Enabling conditions | Who gets this disease | Older adult, diabetic, smoker, family history |
| Fault | What goes wrong | Blocked coronary artery |
| Consequences | Symptoms and signs | Chest pressure, sweating, shortness of breath |
| Time course | How it develops | Sudden onset, may wax and wane |

**How Scripts Are Built:**

1. **Initial learning**: Medical school teaches the "classic" presentation
2. **Case exposure**: Each patient adds variations to the script
3. **Refinement**: The script becomes richer and more nuanced
4. **Prototypes**: Memorable cases become reference points

**When Pattern Recognition Works Best:**

- Common diseases with typical presentations
- Conditions with distinctive features
- Situations where the doctor has extensive experience
- Time-pressured environments (emergency room)

**When It Can Fail:**

- Atypical presentations of common diseases
- Rare diseases
- Multiple overlapping conditions
- Patients who differ from the "typical" population
- Early in a disease course before the pattern is complete

**The "Aunt Minnie" Phenomenon:**

Some conditions are so distinctive they are immediately recognizable:
- The rash of shingles (herpes zoster)
- The face of Down syndrome
- The joint deformities of advanced rheumatoid arthritis

These are called "Aunt Minnie" diagnoses - like recognizing your aunt in a crowd.`,
      keyTerms: [
        {
          term: "illness script",
          definition:
            "A mental template containing typical features of a disease including who gets it, what goes wrong, and what symptoms result",
        },
        {
          term: "prototype",
          definition:
            "A specific memorable case that serves as a reference point for recognizing similar future cases",
        },
        {
          term: "Aunt Minnie",
          definition:
            "A presentation so distinctive that the diagnosis is immediately obvious, like recognizing a family member",
        },
        {
          term: "gestalt",
          definition:
            "The overall impression or pattern, more than the sum of individual parts",
          pronunciation: "geh-SHTALT",
        },
      ],
      analogies: [
        "Illness scripts are like character profiles in your head - you know the typical heart attack patient the way you know a character in a movie.",
      ],
    },
    3: {
      level: 3,
      summary:
        "Pattern recognition represents a non-analytic cognitive process utilizing mental representations (illness scripts, prototypes, exemplars) to achieve rapid diagnosis through automatic, parallel processing of clinical information.",
      explanation: `## Pattern Recognition Theory

### Cognitive Framework

Pattern recognition operates through **System 1 thinking** (Kahneman):
- Fast, automatic, effortless
- Operates in parallel (processes multiple features simultaneously)
- Does not require working memory
- Produces intuitive "recognition" rather than reasoned conclusions

### Mental Representations

**1. Illness Scripts**
Structured knowledge containing:
- Enabling conditions (epidemiology, risk factors)
- Pathophysiological fault
- Clinical consequences (symptoms, signs, lab findings)
- Temporal evolution

**2. Prototypes**
Abstract, idealized representations of disease:
- The "average" or "typical" patient with a condition
- Features weighted by diagnostic importance
- Used for similarity comparison

**3. Exemplars**
Specific stored cases from experience:
- Actual patients the clinician has seen
- Include atypical features and individual variation
- Enable recognition of unusual presentations

### Pattern Recognition Process

\`\`\`
Clinical presentation → Feature extraction → Pattern matching →
  → Script activation → Recognition/diagnosis
\`\`\`

**Feature extraction** is often automatic:
- Experienced clinicians notice salient features without deliberate attention
- Visual patterns (facies, rashes, gait)
- Auditory patterns (heart murmurs, lung sounds, speech)
- Temporal patterns (symptom evolution)

### Expertise and Pattern Recognition

Studies comparing novices and experts show:

| Aspect | Novices | Experts |
|--------|---------|---------|
| Scripts | Few, textbook-based | Many, experience-refined |
| Prototypes | Idealized | Includes variants |
| Exemplars | Limited | Thousands of cases |
| Speed | Slow, deliberate | Fast, automatic |
| Accuracy (typical) | Moderate | High |
| Accuracy (atypical) | May be similar | May be worse (bias) |

### Key Patterns by Specialty

**Emergency Medicine:**
- Acute coronary syndrome: Pressure, radiation, diaphoresis, dyspnea
- Stroke: Sudden focal neurological deficit
- Ruptured AAA: Hypotensive elderly male with abdominal/back pain

**Internal Medicine:**
- Heart failure exacerbation: Orthopnea, PND, JVD, edema
- COPD exacerbation: Increased dyspnea, sputum, wheeze in smoker
- Diabetic ketoacidosis: Polyuria, polydipsia, abdominal pain, Kussmaul breathing

**Pediatrics:**
- Intussusception: Episodic crying, currant jelly stool, sausage mass
- Kawasaki disease: Fever >5 days, conjunctivitis, rash, lymphadenopathy
- Pyloric stenosis: Projectile vomiting, olive mass, hungry infant

### Limitations and Safeguards

**Cognitive biases in pattern recognition:**
- Premature closure: Stopping at first recognized pattern
- Availability: Overweighting recently seen patterns
- Representativeness: Ignoring base rates
- Anchoring: First pattern dominates thinking

**Safeguards:**
1. Actively consider alternatives after initial recognition
2. Look for features that do not fit the pattern
3. Use analytic reasoning to verify intuitive diagnoses
4. Maintain calibrated confidence`,
      keyTerms: [
        {
          term: "System 1 thinking",
          definition:
            "Fast, automatic, intuitive cognitive processing that operates without conscious effort",
        },
        {
          term: "premature closure",
          definition:
            "The cognitive error of accepting a diagnosis before it has been fully verified",
        },
        {
          term: "exemplar",
          definition:
            "A specific stored case from memory used as a reference for recognizing similar presentations",
        },
        {
          term: "feature extraction",
          definition:
            "The automatic process of identifying salient clinical features from a presentation",
        },
      ],
      clinicalNotes:
        "Expert pattern recognition appears effortless but is built on thousands of hours of deliberate practice and case exposure. The key skill is knowing when to trust intuition and when to shift to analytic reasoning.",
    },
    4: {
      level: 4,
      summary:
        "Advanced pattern recognition integrates visual, auditory, and temporal patterns with contextual knowledge, requiring deliberate practice for skill development and metacognitive awareness for appropriate deployment.",
      explanation: `## Advanced Pattern Recognition

### Multi-Modal Pattern Integration

Expert pattern recognition integrates multiple information streams:

**1. Visual Patterns**
- Facies: Cushingoid, acromegalic, myxedematous
- Skin: Color, texture, lesion morphology and distribution
- Body habitus: Marfanoid, truncal obesity
- Movement: Gait abnormalities, tremor, posturing

**2. Auditory Patterns**
- Cardiac: Murmur timing, quality, radiation
- Pulmonary: Wheeze, crackles, stridor
- Voice: Hoarseness, dysarthria, word-finding difficulty
- Breathing: Kussmaul, Cheyne-Stokes

**3. Temporal Patterns**
- Symptom evolution: Typical time courses
- Vital sign trends: Patterns of deterioration
- Response to treatment: Expected versus unexpected
- Disease progression: Characteristic phases

### Contextual Modulation

Pattern recognition is modulated by context:

**Epidemiological context:**
- Season (influenza in winter)
- Geography (Valley fever in Southwest)
- Recent exposures (travel, sick contacts)
- Population (age, gender, comorbidities)

**Clinical context:**
- Setting (ED vs. clinic vs. hospital)
- Acuity (stable vs. deteriorating)
- Prior workup (what has already been ruled out)

### Deliberate Practice for Pattern Development

Anders Ericsson's deliberate practice framework applied to diagnosis:

**1. Focused attention on specific patterns**
- Study characteristic presentations
- Review typical and atypical cases
- Practice with unknowns (diagnostic teaching files)

**2. Immediate feedback**
- Compare diagnosis to gold standard
- Analyze errors (what features were missed?)
- Update mental representations

**3. Repetition with variation**
- See many cases of each condition
- Encounter diverse presentations
- Build robust, flexible scripts

**4. Progressive challenge**
- Start with classic presentations
- Progress to atypical cases
- Master diagnostic mimics

### Script Activation and Competition

Multiple scripts may be activated simultaneously:

\`\`\`
Clinical presentation
    ├── Script A (activation strength: 0.8)
    ├── Script B (activation strength: 0.6)
    └── Script C (activation strength: 0.3)
\`\`\`

The script with highest activation "wins" unless:
- Discrepant features trigger analytic review
- Metacognitive monitoring detects low confidence
- Clinical stakes warrant systematic verification

### Metacognitive Monitoring

Expert clinicians monitor their own reasoning:

**Confidence calibration:**
- "How confident am I in this pattern match?"
- "Is this a typical or atypical presentation?"
- "Have I seen this pattern before?"

**Uncertainty recognition:**
- Low confidence triggers analytic backup
- Novel features trigger deeper consideration
- High-stakes situations warrant verification

**Error detection:**
- "Something does not fit"
- Features inconsistent with recognized pattern
- Expected findings that are absent

### Pattern Recognition in the Era of AI

**Comparison with machine pattern recognition:**

| Human | AI |
|-------|-----|
| Learns from small datasets | Requires large datasets |
| Generalizes from few examples | May overfit to training data |
| Explains reasoning (sometimes) | Often opaque |
| Handles novel contexts | Limited to training distribution |
| Susceptible to cognitive bias | Susceptible to dataset bias |

**Integration opportunity:**
- AI for systematic screening (dermoscopy, radiology)
- Human for contextual interpretation
- AI to flag potential diagnoses for human review
- Human to handle atypical presentations`,
      keyTerms: [
        {
          term: "deliberate practice",
          definition:
            "Structured practice with immediate feedback, designed to improve specific aspects of performance",
        },
        {
          term: "metacognitive monitoring",
          definition:
            "The process of evaluating one's own thinking, including confidence and potential errors",
        },
        {
          term: "script activation",
          definition:
            "The cognitive process by which clinical features trigger retrieval of relevant illness scripts from memory",
        },
        {
          term: "contextual modulation",
          definition:
            "How environmental and situational factors influence the interpretation of clinical patterns",
        },
      ],
      clinicalNotes:
        "The hallmark of expertise is knowing the limits of pattern recognition. When a case feels unusual or high-stakes, expert clinicians deliberately shift to slower, analytic reasoning.",
    },
    5: {
      level: 5,
      summary:
        "Expert pattern recognition represents a sophisticated cognitive skill requiring continuous refinement through deliberate case review, understanding of cognitive limitations, integration with analytic reasoning, and appropriate deployment based on clinical context and stakes.",
      explanation: `## Expert Pattern Recognition

### The Nature of Clinical Expertise

Research on expertise (Ericsson, Chi, Charness) reveals that expert pattern recognition:

**Is domain-specific:**
- Expertise does not transfer across domains
- A cardiology expert is not automatically better at dermatology
- Expertise is in the patterns, not general reasoning ability

**Requires extensive experience:**
- 10,000+ cases for robust pattern libraries
- Continued exposure to maintain and refine scripts
- Deliberate attention to atypical cases

**Can be unconscious:**
- Experts often cannot explain how they know
- Recognition precedes ability to articulate features
- Intuition reflects implicit pattern matching

### The Script Mismatch Problem

Expert pattern recognition fails when:

**1. Script does not exist:**
- Novel diseases (emerging infections)
- Rare conditions outside experience
- New presentations of known diseases

**2. Wrong script is activated:**
- Look-alike presentations (mimics)
- Multiple conditions with overlapping features
- Atypical presentations triggering wrong script

**3. Script is outdated:**
- Disease presentations change over time
- Treatment effects modify presentations
- Population demographics shift

### Strategies for Expert Diagnosticians

**1. Productive skepticism of intuition:**
- "What would have to be true for this to be wrong?"
- "What findings would I expect that are absent?"
- "What is the worst thing this could be?"

**2. Diagnostic timeout:**
- Pause before committing to diagnosis
- Systematically review features
- Consider alternatives explicitly

**3. Pre-mortem analysis:**
- "If this diagnosis is wrong, why would that be?"
- Identify vulnerabilities in reasoning
- Plan for diagnostic failure

**4. Forcing function for alternatives:**
- Always generate differential diagnosis
- Assign explicit probabilities
- Identify key distinguishing features

### Teaching Pattern Recognition

**Challenges:**
- Difficult to articulate implicit knowledge
- Risk of teaching pattern without understanding
- Variability in case exposure during training

**Effective approaches:**
- Case-based learning with diverse presentations
- Comparing similar conditions side-by-side
- Explicit teaching of illness scripts
- Visual diagnosis exercises with feedback
- "Parsing" cases to identify key features

### Pattern Recognition and Diagnostic Error

Studies of diagnostic error show:

**Premature closure** is the most common cognitive error:
- First pattern recognized is accepted without verification
- Alternative possibilities not considered
- Driven by cognitive ease and time pressure

**Contributing factors:**
- Fatigue (pattern matching is resource-intensive)
- Cognitive load (too many simultaneous tasks)
- Time pressure (no time for verification)
- Overconfidence in expertise

**Mitigation strategies:**
- Structured diagnostic checklists for high-risk presentations
- Mandatory timeout before critical decisions
- Second-read protocols (radiology)
- Diagnostic team discussions

### Integration of Pattern Recognition and Analytic Reasoning

Expert diagnosis requires both:

\`\`\`
Initial presentation
      ↓
Pattern recognition → Hypothesis
      ↓
Analytic verification → Confirmed or rejected
      ↓
If rejected → More deliberate analysis
      ↓
Refined diagnosis
\`\`\`

**When to trust pattern recognition:**
- Typical presentation of common condition
- High-volume, well-calibrated experience
- Low stakes (easily reversible)
- Time pressure requiring rapid action

**When to invoke analytic reasoning:**
- Atypical features present
- High stakes (irreversible consequences)
- Low confidence in pattern match
- Novel or unusual context
- Multiple competing hypotheses

### Future Directions

**1. Augmented pattern recognition:**
- AI flagging potential diagnoses
- Decision support surfacing relevant patterns
- Automated feature extraction

**2. Simulation training:**
- Virtual patients with diverse presentations
- Immediate feedback on diagnostic accuracy
- Safe practice with rare conditions

**3. Collective intelligence:**
- Crowdsourced diagnosis for challenging cases
- Expert networks for rare diseases
- Pattern libraries built from aggregated experience`,
      keyTerms: [
        {
          term: "productive skepticism",
          definition:
            "A deliberate mental stance of questioning initial diagnoses while remaining action-oriented",
        },
        {
          term: "diagnostic timeout",
          definition:
            "A structured pause to verify diagnosis before proceeding, especially for high-stakes decisions",
        },
        {
          term: "pre-mortem analysis",
          definition:
            "Imagining the diagnosis is wrong and identifying what might have led to error",
        },
        {
          term: "forcing function",
          definition:
            "A procedure that requires completion of a cognitive step that might otherwise be skipped",
        },
      ],
      clinicalNotes: `Key expert insights:
1. Trust pattern recognition for common conditions with typical presentations, but verify when stakes are high
2. The feeling that "something doesn't fit" is valuable data - investigate it
3. Expert intuition is only as good as the cases it was built on - actively seek disconfirming cases
4. Teach pattern recognition explicitly rather than hoping it develops implicitly
5. Use checklists and structured approaches for high-risk presentations even when diagnosis seems obvious`,
    },
  },

  media: [],
  citations: [
    {
      id: "how-doctors-think",
      type: "textbook",
      title: "How Doctors Think",
      authors: ["Groopman J"],
      source: "Houghton Mifflin",
    },
    {
      id: "thinking-fast-slow",
      type: "textbook",
      title: "Thinking, Fast and Slow",
      authors: ["Kahneman D"],
      source: "Farrar, Straus and Giroux",
    },
    {
      id: "clinical-reasoning-health-professions",
      type: "textbook",
      title: "Clinical Reasoning in the Health Professions",
      authors: ["Higgs J", "Jones MA", "Loftus S", "Christensen N"],
      source: "Elsevier",
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
      targetId: "diagnostic-framework-hypothetico-deductive",
      targetType: "concept",
      relationship: "sibling",
      label: "Hypothetico-Deductive Method",
    },
    {
      targetId: "cognitive-bias-availability-heuristic",
      targetType: "concept",
      relationship: "related",
      label: "Availability Heuristic",
    },
  ],
  tags: {
    systems: ["general"],
    topics: ["clinical-reasoning", "cognitive-psychology", "medical-education"],
    keywords: [
      "pattern recognition",
      "illness script",
      "clinical expertise",
      "gestalt",
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

export default PATTERN_RECOGNITION_CONTENT;
