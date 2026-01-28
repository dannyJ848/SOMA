/**
 * Pattern Recognition
 *
 * Understanding how clinicians recognize disease patterns through illness scripts,
re prototypes, and clinical experience.
 */

import { EducationalContent } from '../../types';

export const patternRecognitionContent: EducationalContent = {
  id: 'pattern-recognition',
  type: 'concept',
  name: 'Pattern Recognition in Diagnosis',
  alternateNames: ['Clinical Pattern Recognition', 'Illness Scripts', 'Diagnostic Patterns'],

  levels: {
    1: {
      level: 1,
      summary: 'Pattern recognition is how doctors use their experience to quickly recognize diseases by matching what they see to patterns they have learned.',
      explanation: `When experienced doctors look at a patient, they often "see" the diagnosis quickly. This is called pattern recognition, and it is like recognizing a friend\'s face in a crowd.

**How Pattern Recognition Works:**

Think about how you recognize things in everyday life:
- You recognize your dog because you know his shape, colors, and how he moves
- You recognize your favorite song from just a few notes
- You recognize your house by its look and location

Doctors do the same thing with diseases:
- They learn what different diseases look like
- When they see a patient, they compare to patterns they know
- If it matches, they recognize the disease

**Example - Recognizing a Cold:**
When you have:
- Runny nose
- Sore throat
- Cough
- No fever or mild fever
- Lasts about a week

This pattern says "common cold" because doctors have seen this pattern many times.

**Learning Patterns:**
- Medical students learn patterns from books and teachers
- Doctors add to their patterns with each patient they see
- The more patterns you know, the faster you can recognize diseases

**When Patterns Help:**
- Common conditions (doctors see them often)
- Classic presentations (textbook cases)
- Emergencies (need quick recognition)

**When Patterns Can Mislead:**
- Unusual cases (pattern looks different)
- Rare diseases (doctor hasn\'t seen the pattern before)
- Multiple problems at once (patterns mixed together)`,
      keyTerms: [
        { term: 'pattern', definition: 'A repeated arrangement of features that forms a recognizable design or picture' },
        { term: 'recognition', definition: 'Identifying something because you have seen or learned about it before' },
        { term: 'presentation', definition: 'The way symptoms and signs of a disease appear in a patient' },
        { term: 'classic', definition: 'The typical or most common way something appears' },
      ],
      analogies: [
        'Pattern recognition in medicine is like recognizing your grandmother\'s apple pie - you know it from the smell, look, and taste without having to analyze each ingredient.',
        'It is like a chess master seeing a board and immediately knowing the best move from having seen similar positions thousands of times before.',
      ],
      examples: [
        'A doctor recognizes appendicitis when someone has right lower belly pain, fever, and nausea - this is the classic pattern.',
        'Recognizing chickenpox from the pattern of itchy blisters in different stages on the body.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pattern recognition is a rapid cognitive process where clinicians match patient presentations to stored mental representations called illness scripts, enabling quick diagnosis of familiar conditions.',
      explanation: `Pattern recognition is one of the fundamental ways clinicians make diagnoses. It relies on matching what is observed to mental templates developed through education and experience.

**Illness Scripts:**

An illness script is a mental representation of a disease that includes:
- **Predisposing conditions:** Risk factors and patient characteristics
- **Pathophysiology:** What is happening in the body
- **Clinical features:** Symptoms, signs, and their typical pattern
- **Expected course:** How the disease typically progresses

**Example - Pneumonia Illness Script:**
- Predisposing: Elderly, chronic lung disease, recent viral illness
- Pathophysiology: Infection causing inflammation in lung air sacs
- Features: Fever, cough, shortness of breath, crackles on exam
- Course: Symptoms worsen over days, improve with antibiotics

**Prototypes and Exemplars:**

**Prototype:** The "ideal" or average case of a disease
- Classic MI: Crushing chest pain, radiation to arm, diaphoresis
- Most real cases differ somewhat from the prototype

**Exemplars:** Specific memorable cases stored in memory
- "The 45-year-old woman whose heart attack presented only as nausea"
- These help recognize atypical presentations

**Pattern Recognition Process:**

1. **Data gathering:** History, physical exam, initial tests
2. **Pattern matching:** Compare to stored illness scripts
3. **Activation:** Similar patterns become active in memory
4. **Recognition:** Best match identified as likely diagnosis
5. **Verification:** Conscious checking of the hypothesis

**When Pattern Recognition Works Well:**

- Common conditions seen frequently
- Classic presentations
- Time pressure (emergencies)
- Pattern is distinctive and memorable

**Limitations of Pattern Recognition:**

- Misses atypical presentations
- Subject to cognitive biases
- Requires extensive experience
- Can lead to premature closure
- Less effective for rare conditions`,
      keyTerms: [
        { term: 'illness script', definition: 'Mental representation of a disease including predisposing conditions, pathophysiology, and clinical features' },
        { term: 'prototype', definition: 'An abstract mental representation of the typical or average case of a disease' },
        { term: 'exemplar', definition: 'A specific, concrete memory of a particular patient case used for pattern matching' },
        { term: 'premature closure', definition: 'Accepting a diagnosis before it has been fully verified; stopping diagnostic consideration too early' },
        { term: 'cognitive bias', definition: 'Systematic error in thinking that affects decision-making' },
      ],
      analogies: [
        'An illness script is like a character profile in a novel - it describes the background, personality traits, and typical behaviors that help you recognize the character.',
        'Pattern recognition is like facial recognition software - it compares features against a database to find the best match.',
      ],
      examples: [
        'A doctor immediately recognizes shingles from the pattern of painful blisters following a nerve pathway on one side of the body.',
        'Recognizing Cushing\'s syndrome from the pattern of moon face, buffalo hump, purple striae, and central obesity.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pattern recognition operates through dual-process cognitive architecture, integrating illness scripts, semantic qualifiers, and exemplar memory within a framework that includes both rapid System 1 processing and analytical System 2 verification.',
      explanation: `## Pattern Recognition Theory

### Dual-Process Theory

Clinical reasoning involves two distinct cognitive systems:

**System 1: Pattern Recognition (Intuitive)**
- Fast, automatic, effortless
- Based on pattern matching to illness scripts
- Experiential, relies on memory
- Susceptible to cognitive biases
- Essential for efficient practice

**System 2: Analytical Reasoning**
- Slow, deliberate, effortful
- Uses probability and logic
- Rule-based, systematic
- More accurate for complex cases
- Resource-intensive

**Integration:**
Most clinical reasoning involves both:
- System 1 generates initial hypothesis
- System 2 verifies and considers alternatives
- Expertise involves knowing when to override System 1

### Illness Scripts in Detail

**Components of an Illness Script:**

1. **Enabling Conditions (Constraints)**
   - Epidemiologic: Age, sex, risk factors
   - Clinical context: Setting, acuity
   - Example: MI more likely in older smokers with diabetes

2. **Fault (Pathophysiology)**
   - The underlying mechanism
   - Links to clinical findings
   - Example: Coronary occlusion -> myocardial ischemia -> pain

3. **Consequences (Clinical Features)**
   - Symptoms and signs
   - Typical course and complications
   - Example: Chest pain, diaphoresis, nausea, dyspnea

**Script Activation:**
- Partial matching activates related scripts
- Context constrains which scripts are considered
- Competition between activated scripts
- Best match guides initial diagnosis

### Semantic Qualifiers

Abstract patterns that help categorize presentations:

| Qualifier | Examples |
|-----------|----------|
| Acuity | Acute vs. chronic vs. episodic |
| Location | Localized vs. diffuse vs. referred |
| Pain quality | Sharp, dull, burning, colicky |
| Timing | Constant vs. intermittent vs. progressive |
| Severity | Mild, moderate, severe, excruciating |

Recognizing patterns of semantic qualifiers helps distinguish diseases:
- MI: Acute, crushing, substernal, radiating
- Pericarditis: Acute, sharp, positional, pleuritic

### Problem Representation

Abstracting clinical data into semantic terms facilitates pattern matching:

**Case:** 65-year-old male with crushing substernal chest pain radiating to left arm, associated with diaphoresis

**Problem Representation:**
"Older patient with coronary risk factors presents with typical anginal symptoms"

This abstract representation:
- Strips away non-essential details
- Matches to MI illness script
- Activates appropriate differential

### From Novice to Expert

**Novice:**
- Relies heavily on System 2 (analytical)
- Uses pathophysiologic reasoning
- Slow, effortful
- Many errors from knowledge gaps

**Intermediate:**
- Developing illness scripts
- Mix of analytical and pattern recognition
- Beginning to see patterns
- Still makes errors from premature closure

**Expert:**
- Rich library of illness scripts
- Rapid pattern recognition for familiar cases
- Appropriate use of System 2 for complex cases
- Better calibration of uncertainty
- Recognizes when pattern matching may fail`,
      keyTerms: [
        { term: 'semantic qualifier', definition: 'Abstract descriptor of clinical findings (e.g., acute vs. chronic, localized vs. diffuse) that helps categorize diseases' },
        { term: 'problem representation', definition: 'Abstract summary of a clinical case that captures essential features for pattern matching' },
        { term: 'enabling condition', definition: 'Factor that makes a disease more or less likely; epidemiologic or clinical context' },
        { term: 'fault', definition: 'The pathophysiologic abnormality underlying a disease; the central component of an illness script' },
        { term: 'competence-induced error', definition: 'Error that occurs when expertise in one area leads to overapplication of familiar patterns' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced pattern recognition involves sophisticated illness script development, exemplar-based learning, and strategic deployment of analytical override mechanisms to optimize diagnostic accuracy while minimizing cognitive errors.',
      explanation: `## Advanced Pattern Recognition

### Illness Script Development

**Building Rich Scripts:**

Experts develop complex, multidimensional scripts:

**Hierarchical Organization:**
- Core features (present in most cases)
- Typical features (common but not universal)
- Associated features (may or may not be present)
- Atypical features (unusual presentations)

**Contextual Variation:**
- How presentation varies by age, sex, comorbidities
- Population-specific patterns
- Geographic and epidemiologic variation

**Example - MI Script Enrichment:**
- Core: Chest discomfort, cardiac risk factors
- Typical: Diaphoresis, dyspnea, nausea, radiation to arm/jaw
- Associated: Anxiety, sense of doom, palpitations
- Atypical: Dyspnea only, epigastric pain, fatigue (especially women, elderly, diabetics)

### Exemplar-Based Learning

**Role of Memorable Cases:**

Specific cases serve as powerful learning tools:
- "The classic case" reinforces the prototype
- "The diagnostic challenge" expands script boundaries
- "The missed case" teaches caution

**Case Library Development:**
- Quantity: Volume of experience
- Quality: Breadth of exposure
- Organization: Categorical and associative links
- Retrieval: Context-appropriate activation

**Deliberate Practice:**
- Case conferences and morbidity/mortality reviews
- Radiology "unknowns"
- Dermatology atlases
- Simulations with feedback

### Analytical Override Strategies

**When to Override System 1:**

1. **Case complexity:** Multiple problems, unusual combinations
2. **Atypical features:** Presentation does not fit well
3. **High stakes:** Potential for serious harm if wrong
4. **Diagnostic uncertainty:** Low confidence in pattern match
5. **Treatment failure:** Expected course not occurring

**Override Mechanisms:**

**Structured reflection:**
- "What is the evidence for my diagnosis?"
- "What findings do not fit?"
- "What else could this be?"

**Differential generation:**
- Force consideration of alternatives
- Use diagnostic frameworks (VINDICATE)
- Consider worst-case scenarios

**Probability estimation:**
- Explicit pre-test probability
- Likelihood ratios for key findings
- Bayesian updating

### Pattern Recognition Failures

**Types of Errors:**

**Overgeneralization:**
- Applying pattern too broadly
- Missing important distinctions
- Example: Calling all chest pain "musculoskeletal"

**Undergeneralization:**
- Failing to recognize pattern variation
- Missing diagnosis due to atypical features
- Example: Missing MI because patient is young

**Thematic thinking:**
- Focusing on one aspect while missing others
- Incomplete pattern matching
- Premature closure

**Diagnostic Momentum:**
- Accepting previous diagnosis without verification
- Failure to reconsider when new information emerges

### Teaching Pattern Recognition

**Effective Strategies:**

1. **Progressive disclosure:**
   - Present case incrementally
   - Pause for hypothesis generation
   - Reveal more data, refine hypothesis

2. **Compare and contrast:**
   - Similar diseases side-by-side
   - Highlight distinguishing features
   - Pattern discrimination practice

3. **Error-based learning:**
   - Review diagnostic errors
   - Understand why pattern matching failed
   - Identify system improvements

4. **Visual pattern recognition:**
   - Dermatology lesions
   - Radiology images
   - ECG patterns
   - Pathology slides

**Competency-Based Education:**
- Define pattern recognition milestones
- Assess with standardized cases
- Provide specific feedback
- Track improvement over time`,
      keyTerms: [
        { term: 'exemplar', definition: 'Specific remembered case that serves as a reference point for pattern recognition' },
        { term: 'diagnostic momentum', definition: 'The tendency for a diagnosis to persist even when new information suggests alternatives' },
        { term: 'analytical override', definition: 'Conscious activation of System 2 thinking to verify or correct System 1 pattern recognition' },
        { term: 'progressive disclosure', definition: 'Teaching method where case information is revealed sequentially to build diagnostic reasoning' },
        { term: 'thematic thinking', definition: 'Focusing on one aspect of a case while neglecting others; incomplete data synthesis' },
      ],
      clinicalNotes: 'Expert clinicians develop extensive illness script libraries that enable rapid diagnosis of common conditions. However, expertise requires knowing when pattern recognition may be misleading and consciously engaging analytical reasoning. The transition from novice to expert involves not just accumulating patterns but developing sophisticated metacognitive awareness of their limitations.',
    },
    5: {
      level: 5,
      summary: 'Expert-level pattern recognition encompasses sophisticated mental model construction, adaptive expertise, and the integration of artificial intelligence with human cognition to optimize diagnostic performance across diverse clinical contexts.',
      explanation: `## Expert-Level Pattern Recognition

### Advanced Illness Script Architecture

**Multidimensional Scripts:**

Expert illness scripts contain rich, interconnected knowledge:

**Epidemiologic Dimensions:**
- Prevalence by demographics
- Geographic and seasonal variation
- Population risk stratification
- Temporal trends

**Clinical Dimensions:**
- Classic presentations (80% of cases)
- Atypical presentations (15% of cases)
- Rare presentations (5% of cases)
- Mimics and chameleons

**Prognostic Dimensions:**
- Typical course with treatment
- Natural history without treatment
- Complications and their patterns
- Predictors of outcome

**Contextual Dimensions:**
- Primary care presentations
- Emergency department presentations
- Inpatient presentations
- Special population variations

### Adaptive Expertise

**Beyond Routine Expertise:**

**Routine Expertise:**
- Efficient handling of typical cases
- Pattern recognition for familiar situations
- May struggle with novel problems

**Adaptive Expertise:**
- Flexible application of knowledge
- Innovation in unfamiliar situations
- Effective when patterns do not fit

**Developing Adaptive Expertise:**
1. Diverse case exposure
2. Reflection on practice
3. Deliberate problem-solving
4. Learning from failure
5. Cross-disciplinary learning

### Pattern Recognition and Uncertainty

**Managing Diagnostic Uncertainty:**

**When Patterns Are Unclear:**
- Multiple competing hypotheses
- Insufficient distinguishing features
- Conflicting clinical data
- Atypical presentations

**Strategic Approaches:**
1. **Differential expansion:** Generate broader differential
2. **Diagnostic testing:** Selective use of high-value tests
3. **Therapeutic trial:** Treatment as diagnostic test
4. **Observation:** Time as diagnostic tool
5. **Consultation:** Expert pattern recognition

**The Threshold of Uncertainty:**
Experts develop calibrated sense of:
- When they are confident
- When they need more information
- When to seek help
- How to communicate uncertainty

### Human-AI Collaboration

**Complementary Strengths:**

**Human Pattern Recognition:**
- Contextual understanding
- Integration of non-clinical factors
- Ethical reasoning
- Communication and empathy

**AI Pattern Recognition:**
- Processing vast datasets
- Consistent application
- Quantitative precision
- No fatigue or bias (algorithmic)

**Collaborative Models:**

1. **AI as screener:**
   - Flag potential findings
   - Human verification and integration
   - Example: AI for diabetic retinopathy screening

2. **AI as differential generator:**
   - Suggest diagnostic possibilities
   - Provide probability estimates
   - Human final decision

3. **AI as pattern tutor:**
   - Show similar cases
   - Highlight key features
   - Reinforce learning

**The Future of Clinical Pattern Recognition:**

**Deep Learning Applications:**
- Image recognition (radiology, pathology, dermatology)
- Natural language processing (clinical notes)
- Multi-modal data integration
- Predictive analytics

**Challenges:**
- Explainability and trust
- Generalizability across populations
- Integration into workflow
- Maintaining human expertise

### The Science of Expertise

**Research on Diagnostic Excellence:**

**What Makes an Expert Diagnostician?**

1. **Knowledge organization:**
   - Illness script richness
   - Appropriate categorization
   - Effective retrieval

2. **Data gathering:**
   - Selective attention to key features
   - Efficient history taking
   - Targeted examination

3. **Problem solving:**
   - Appropriate use of analytical reasoning
   - Effective hypothesis generation
   - Strategic testing

4. **Metacognition:**
   - Awareness of uncertainty
   - Recognition of bias
   - Self-monitoring

**Measuring Expertise:**
- Diagnostic accuracy
- Time to diagnosis
- Appropriate test utilization
- Calibration of confidence
- Error recognition and recovery

**Developing Expertise:**
- Deliberate practice (10,000+ hours)
- Diverse case exposure
- Feedback on performance
- Reflection on practice
- Continuous learning`,
      keyTerms: [
        { term: 'adaptive expertise', definition: 'The ability to apply knowledge flexibly to novel and complex problems beyond routine situations' },
        { term: 'routine expertise', definition: 'Efficient performance within familiar contexts using well-developed patterns' },
        { term: 'multi-modal data integration', definition: 'Combining information from multiple sources (imaging, labs, text, genomics) for diagnosis' },
        { term: 'explainable AI', definition: 'Artificial intelligence systems whose decisions can be understood and interpreted by humans' },
        { term: 'calibration of confidence', definition: 'The alignment between subjective confidence and objective accuracy' },
      ],
      clinicalNotes: `Expert-level pattern recognition represents the pinnacle of clinical skill, combining extensive illness script libraries with sophisticated metacognitive awareness and adaptive expertise. The future of diagnosis likely lies in effective human-AI collaboration, where each contributes their strengths to achieve diagnostic excellence that neither could achieve alone.

Key attributes of expert diagnosticians:
1. Rich, multidimensional illness scripts
2. Calibrated confidence and uncertainty awareness
3. Appropriate balance of pattern recognition and analytical reasoning
4. Adaptive expertise for novel situations
5. Commitment to continuous learning and improvement`,
    },
  },

  media: [],

  citations: [
    {
      id: 'schmidt-illness-scripts',
      type: 'article',
      title: 'On the Nature and Use of Stored Knowledge in Clinical Reasoning',
      authors: ['Schmidt HG', 'Norman GR', 'Boshuizen HP'],
      source: 'Academic Medicine',
    },
    {
      id: 'croskerry-cognitive-approaches',
      type: 'article',
      title: 'Achieving Quality in Clinical Decision Making: Cognitive Strategies and Detection of Bias',
      authors: ['Croskerry P'],
      source: 'Academic Emergency Medicine',
    },
    {
      id: 'evans-dual-processing',
      type: 'article',
      title: 'Dual-Processing Accounts of Reasoning, Judgment, and Social Cognition',
      authors: ['Evans JS'],
      source: 'Annual Review of Psychology',
    },
  ],

  crossReferences: [
    { targetId: 'diagnostic-framework', targetType: 'concept', relationship: 'related', label: 'Diagnostic Framework' },
    { targetId: 'probabilistic-reasoning', targetType: 'concept', relationship: 'related', label: 'Probabilistic Reasoning' },
    { targetId: 'diagnostic-pitfalls', targetType: 'concept', relationship: 'related', label: 'Diagnostic Pitfalls' },
  ],

  tags: {
    systems: ['general'],
    topics: ['clinical-reasoning', 'cognition', 'diagnosis', 'education'],
    keywords: ['pattern recognition', 'illness scripts', 'clinical reasoning', 'expertise', 'dual process'],
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

export default patternRecognitionContent;
