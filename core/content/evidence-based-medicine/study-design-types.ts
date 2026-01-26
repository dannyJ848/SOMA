/**
 * Study Design Types - Comprehensive Educational Content
 *
 * Covers the major research study designs used in medical research,
 * helping patients understand how evidence is generated.
 */

import { EducationalContent } from '../types';

export const studyDesignTypes: EducationalContent = {
  id: 'concept-study-design-types',
  type: 'concept',
  name: 'Study Design Types',
  alternateNames: ['Research Designs', 'Clinical Study Types', 'Research Methodology'],

  levels: {
    1: {
      level: 1,
      summary: 'Medical studies are organized in different ways to answer different questions about health and treatments.',
      explanation: `When doctors and scientists want to learn about a disease or treatment, they do research studies. There are different types of studies, kind of like there are different types of games - each one is good for answering different questions.

**Watching Studies (Observational):**
These are like being a detective - scientists watch and take notes without changing anything.
- **Case Reports**: Like a diary entry about one interesting patient
- **Case-Control Studies**: Looking at people who got sick and comparing them to healthy people to find clues
- **Cohort Studies**: Following a group of people over time to see what happens to them

**Testing Studies (Experimental):**
These are like science fair experiments where scientists actually test something.
- **Clinical Trials**: Testing a new medicine or treatment on real patients
- **Randomized Controlled Trials (RCTs)**: The gold standard! Like flipping a coin to decide who gets the new treatment and who gets the regular treatment

**Why It Matters:**
When you hear about a new health discovery, the type of study it comes from tells you how much to trust it. RCTs are usually the most trustworthy because they're designed to be fair and unbiased.`,
      keyTerms: [
        { term: 'study', definition: 'A scientific investigation to learn about health or treatments' },
        { term: 'trial', definition: 'A test of a new treatment on patients' },
        { term: 'randomized', definition: 'When chance (like flipping a coin) decides who gets which treatment' },
        { term: 'control group', definition: 'The group that doesn\'t get the new treatment, for comparison' },
      ],
      analogies: [
        'An RCT is like a taste test where you don\'t know which cola brand you\'re drinking - this prevents your expectations from affecting your answer.',
        'Observational studies are like being a bird watcher - you watch and record what you see without interfering.',
      ],
      examples: [
        'A scientist follows 1000 people who exercise and 1000 who don\'t for 10 years to see who gets heart disease (cohort study).',
        'A new diabetes medicine is tested by randomly giving half the patients the real drug and half a sugar pill (RCT).',
      ],
    },
    2: {
      level: 2,
      summary: 'Research study designs fall into observational and experimental categories, each with distinct strengths and limitations for answering clinical questions.',
      explanation: `## Major Categories of Study Design

### Observational Studies
Researchers observe without intervening - they don't assign treatments or exposures.

**Descriptive Studies:**
- **Case Report**: Description of a single patient's unusual presentation
- **Case Series**: Collection of similar cases (usually 3+)
- **Cross-sectional Study**: Snapshot of a population at one point in time

**Analytical Studies:**
- **Case-Control Study**:
  - Compares people WITH a disease (cases) to those WITHOUT (controls)
  - Looks backward to find exposures
  - Good for rare diseases
  - Example: Did people with lung cancer smoke more than those without?

- **Cohort Study**:
  - Follows groups WITH and WITHOUT an exposure forward in time
  - Can be prospective (starting now) or retrospective (using past records)
  - Good for determining risk
  - Example: Following smokers and non-smokers to see who develops cancer

### Experimental Studies
Researchers actively assign interventions.

- **Randomized Controlled Trial (RCT)**:
  - Participants randomly assigned to treatment or control group
  - Considered the gold standard for testing treatments
  - Minimizes bias through randomization and blinding
  - Example: Testing a new blood pressure medication

- **Crossover Trial**:
  - Same participants receive both treatments at different times
  - Each person serves as their own control

### The Hierarchy
Generally, RCTs > Cohort Studies > Case-Control Studies > Case Series > Case Reports

However, each design has its place depending on the research question, ethical considerations, and practical constraints.`,
      keyTerms: [
        { term: 'observational study', definition: 'Research where scientists observe without intervening or assigning treatments', pronunciation: 'ob-zur-VAY-shun-al' },
        { term: 'experimental study', definition: 'Research where scientists actively assign interventions to study participants' },
        { term: 'cohort', definition: 'A group of people followed over time in a study', pronunciation: 'KO-hort' },
        { term: 'case-control', definition: 'Study design comparing people with disease (cases) to those without (controls)' },
        { term: 'prospective', definition: 'Looking forward in time from the present', pronunciation: 'proh-SPEK-tiv' },
        { term: 'retrospective', definition: 'Looking backward in time using existing data', pronunciation: 'ret-roh-SPEK-tiv' },
        { term: 'blinding', definition: 'When participants and/or researchers don\'t know who\'s getting which treatment' },
      ],
      analogies: [
        'A cohort study is like planting two gardens - one with fertilizer and one without - and watching which grows better.',
        'A case-control study is like detective work: starting with the crime (disease) and working backward to find what caused it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Study designs are classified by their approach to exposure/intervention assignment and temporal direction, each addressing specific research questions while managing threats to validity.',
      explanation: `## Classification Framework

### By Investigator Role
**Observational**: Exposure determined by nature/patient choice
**Experimental**: Exposure assigned by investigator

### By Temporal Direction
**Prospective**: Follow participants forward from exposure to outcome
**Retrospective**: Look backward from outcome to exposure
**Cross-sectional**: Measure exposure and outcome simultaneously

## Detailed Study Types

### Descriptive Studies
**Purpose**: Generate hypotheses, describe disease patterns

| Type | Description | Strengths | Limitations |
|------|-------------|-----------|-------------|
| Case Report | Single patient narrative | Identifies novel conditions | No comparison group |
| Case Series | Multiple similar cases | Pattern recognition | Selection bias |
| Cross-sectional | Population snapshot | Prevalence data | Cannot establish temporality |
| Ecological | Population-level data | Identifies geographic patterns | Ecological fallacy |

### Analytical Observational Studies

**Case-Control Studies:**
- Selection: Cases from disease registry/hospital; Controls from same population
- Measure: Odds Ratio (OR)
- Advantages: Efficient for rare diseases, multiple exposures
- Disadvantages: Recall bias, selection bias, cannot calculate incidence

**Cohort Studies:**
- Prospective: Follow exposed/unexposed groups forward
- Retrospective: Use existing records to identify exposures and outcomes
- Measure: Relative Risk (RR), Incidence, Attributable Risk
- Advantages: Temporal sequence clear, can study multiple outcomes
- Disadvantages: Loss to follow-up, expensive, time-consuming

### Experimental Studies

**RCT Design Elements:**
1. **Randomization**: Eliminates selection bias and confounding
2. **Control group**: Provides baseline for comparison
3. **Blinding**:
   - Single-blind: Participants don't know allocation
   - Double-blind: Participants AND researchers blinded
   - Triple-blind: Adds outcome assessors
4. **Intention-to-treat analysis**: Analyzes by original assignment

**Trial Phases:**
- Phase I: Safety, dosing (20-100 healthy volunteers)
- Phase II: Efficacy, side effects (100-500 patients)
- Phase III: Large-scale efficacy vs. standard (1000-5000 patients)
- Phase IV: Post-marketing surveillance

**Special RCT Designs:**
- Cluster randomization: Groups (clinics, schools) randomized
- Factorial design: Tests multiple interventions simultaneously
- Non-inferiority trial: Proves new treatment is not worse
- Pragmatic trial: Real-world conditions

### Quasi-Experimental Designs
When true randomization isn't possible:
- Before-after studies
- Interrupted time series
- Regression discontinuity`,
      keyTerms: [
        { term: 'odds ratio', definition: 'Measure of association between exposure and outcome in case-control studies; ratio of odds of exposure in cases vs. controls' },
        { term: 'relative risk', definition: 'Ratio of disease incidence in exposed group to incidence in unexposed group; used in cohort studies' },
        { term: 'intention-to-treat', definition: 'Analysis that includes all randomized participants in their original groups regardless of compliance', pronunciation: 'in-TEN-shun to TREET' },
        { term: 'confounding', definition: 'When a third variable is associated with both exposure and outcome, distorting the true relationship', pronunciation: 'kon-FOUND-ing' },
        { term: 'ecological fallacy', definition: 'Error of inferring individual-level associations from group-level data' },
        { term: 'selection bias', definition: 'Systematic difference between study participants and target population' },
      ],
      clinicalNotes: 'When reading research, first identify the study design. This immediately tells you the level of evidence and potential biases to watch for.',
    },
    4: {
      level: 4,
      summary: 'Study design selection involves balancing internal validity (methodological rigor) against external validity (generalizability), while addressing specific research questions within ethical and practical constraints.',
      explanation: `## Advanced Design Considerations

### Validity Framework

**Internal Validity Threats:**
- Selection bias: Groups differ systematically at baseline
- Information bias: Measurement errors (differential or non-differential)
- Confounding: Third variables distort association
- Reverse causation: Outcome preceded exposure

**External Validity (Generalizability):**
- Sample representativeness
- Setting relevance to clinical practice
- Intervention fidelity in real-world settings

### Complex Observational Designs

**Nested Case-Control:**
- Cases and controls selected from within a cohort study
- Maintains cohort efficiency while reducing measurement costs
- Example: Biomarker analysis in a large cohort

**Case-Cohort:**
- Random subcohort selected at baseline
- All cases throughout follow-up included
- Subcohort provides person-time denominator

**Self-Controlled Designs:**
- Case-crossover: Compare exposure in hazard period vs. control periods within same person
- Self-controlled case series: Compare incidence rates within same person across time windows
- Advantage: Controls for time-invariant confounders

### Advanced Randomization Methods

**Simple Randomization:**
- Pure random allocation (coin flip)
- Risk: Imbalanced groups, especially in small trials

**Stratified Randomization:**
- Separate randomization within strata (e.g., by age, severity)
- Ensures balance on key prognostic factors

**Block Randomization:**
- Randomization in blocks (e.g., blocks of 4 or 6)
- Ensures balanced numbers throughout enrollment

**Minimization:**
- Dynamic allocation balancing multiple factors
- Algorithm assigns to group that minimizes imbalance

**Adaptive Randomization:**
- Response-adaptive: Adjusts allocation based on outcomes
- Covariate-adaptive: Adjusts based on patient characteristics

### Allocation Concealment vs. Blinding
**Allocation concealment**: Preventing foreknowledge of assignment BEFORE randomization
**Blinding**: Preventing knowledge of assignment AFTER randomization

Both are critical but serve different purposes.

### Special Designs

**Mendelian Randomization:**
- Uses genetic variants as instrumental variables
- Natural experiment: Genes randomly allocated at conception
- Avoids confounding and reverse causation for causal inference

**Platform Trials:**
- Master protocol, multiple arms, adaptive design
- Arms can be added/dropped based on interim results
- Example: RECOVERY trial for COVID-19 treatments

**Pragmatic vs. Explanatory Trials:**
| Aspect | Explanatory | Pragmatic |
|--------|-------------|-----------|
| Question | Can it work? | Does it work? |
| Setting | Ideal conditions | Real-world practice |
| Participants | Highly selected | Broad inclusion |
| Intervention | Strictly controlled | Flexible |
| Comparator | Placebo | Usual care |
| Outcomes | Surrogate/short-term | Patient-important |

PRECIS-2 tool: Rates trials on 9 domains from explanatory to pragmatic`,
      keyTerms: [
        { term: 'Mendelian randomization', definition: 'Method using genetic variants as instrumental variables to infer causal relationships, exploiting random assortment of alleles at conception' },
        { term: 'platform trial', definition: 'Adaptive trial design with master protocol allowing multiple interventions to be evaluated simultaneously with shared control group' },
        { term: 'allocation concealment', definition: 'Preventing knowledge of upcoming randomization assignments; distinct from blinding' },
        { term: 'minimization', definition: 'Adaptive randomization method that assigns participants to minimize imbalance across multiple prognostic factors' },
        { term: 'nested case-control', definition: 'Case-control study drawn from within a defined cohort, combining efficiency of case-control with cohort benefits' },
        { term: 'pragmatic trial', definition: 'Trial designed to evaluate intervention effectiveness under real-world conditions with broad eligibility' },
        { term: 'PRECIS-2', definition: 'Tool rating trial design on 9 domains from explanatory to pragmatic orientation' },
      ],
      clinicalNotes: 'Mendelian randomization studies are increasingly used to support causal inferences when RCTs are impractical. However, they require valid genetic instruments and careful interpretation of pleiotropic effects.',
    },
    5: {
      level: 5,
      summary: 'Mastery of study design encompasses methodological nuances, causal inference frameworks, contemporary innovations, and critical evaluation of design choices in the context of specific research questions and therapeutic areas.',
      explanation: `## Causal Inference Frameworks

### Counterfactual Framework (Potential Outcomes)
- Each individual has potential outcomes under each treatment
- Causal effect = Y(treated) - Y(untreated) for same individual
- Fundamental problem: Can only observe one potential outcome
- RCT solution: Groups are exchangeable; average treatment effect estimable

### Directed Acyclic Graphs (DAGs)
Visual tools for causal reasoning:
- Nodes = variables; Arrows = causal relationships
- Identify confounders, mediators, colliders
- Determine sufficient adjustment sets
- Reveal selection bias structures

**Collider bias**: Conditioning on common effect of exposure and outcome creates spurious association

### Target Trial Emulation
Framework for designing observational studies:
1. Specify target RCT protocol
2. Emulate with observational data
3. Explicit: eligibility, treatment strategies, assignment, outcomes, follow-up, causal contrast, analysis

Addresses immortal time bias, selection bias, and confounding systematically.

## Contemporary Design Innovations

### Decentralized Clinical Trials (DCTs)
- Remote consent, monitoring, and data collection
- Wearable devices for continuous outcomes
- Telemedicine assessments
- Improves access and diversity
- Regulatory guidance: FDA December 2023

### Basket and Umbrella Trials
**Basket trial**: Single intervention across multiple tumor types (biomarker-defined)
**Umbrella trial**: Multiple interventions for single disease (biomarker-stratified)

### Synthetic Control Arms
- External controls from historical data or registries
- Matched by propensity score or other methods
- Regulatory acceptance in rare diseases: FDA accelerated approval cases

### Real-World Evidence (RWE)
Sources: EHRs, claims data, registries, wearables
Applications:
- Support label expansions
- Post-marketing safety
- Comparative effectiveness

FDA RWE Program: 21st Century Cures Act mandate

## Critical Design Decisions

### Sample Size and Power
- Balance: Adequate power vs. ethical exposure minimization
- Continuous outcomes: Effect size, variance, alpha, power
- Binary outcomes: Event rates, difference, alpha, power
- Time-to-event: Hazard ratio, event rate, follow-up, accrual

### Multiplicity
Testing multiple hypotheses inflates false positive rate
- Primary endpoint clear a priori
- Gatekeeping procedures (hierarchical testing)
- Closed testing procedures
- Alpha-spending for interim analyses

### Missing Data
- Missing completely at random (MCAR)
- Missing at random (MAR)
- Missing not at random (MNAR)
- Methods: Multiple imputation, inverse probability weighting, sensitivity analyses

### Composite Endpoints
Combine multiple outcomes (e.g., MACE: MI + stroke + CV death)
- Advantages: Power, clinical relevance
- Disadvantages: Heterogeneous component importance, driven by most common event

## Regulatory Perspectives

### ICH E9(R1): Estimands Framework
Defines what treatment effect is targeted:
1. Treatment policy: Include all post-randomization events
2. Composite: Include intercurrent event as failure
3. Hypothetical: Effect if intercurrent event hadn't occurred
4. Principal stratum: Effect in subgroup defined by intercurrent event
5. While on treatment: Effect during treatment period

### FDA Breakthrough Therapy Designation
- Preliminary clinical evidence of substantial improvement
- Intensive FDA guidance on development program
- May lead to accelerated approval, rolling review

### Adaptive Designs: Key Regulatory Considerations
- Pre-specification of adaptations
- Type I error control
- Independence of data monitoring committee
- Statistical analysis plan amendments`,
      keyTerms: [
        { term: 'counterfactual', definition: 'The potential outcome that would have occurred under a treatment not actually received; fundamental to causal inference' },
        { term: 'DAG (directed acyclic graph)', definition: 'Visual representation of causal relationships used to identify confounders and valid adjustment strategies' },
        { term: 'collider', definition: 'Variable that is a common effect of two other variables; conditioning on it creates spurious association' },
        { term: 'target trial emulation', definition: 'Framework for designing observational studies by explicitly specifying the RCT they aim to emulate' },
        { term: 'estimand', definition: 'Precise description of the treatment effect to be estimated, as defined in ICH E9(R1)' },
        { term: 'basket trial', definition: 'Trial testing single intervention across multiple diseases/tumor types based on common biomarker' },
        { term: 'umbrella trial', definition: 'Trial testing multiple interventions within single disease stratified by biomarkers' },
        { term: 'synthetic control arm', definition: 'External comparator constructed from historical data when concurrent randomized control not feasible' },
      ],
      clinicalNotes: `Key considerations for interpreting contemporary evidence:
1. Target trial emulation: Assess whether observational study properly emulates key RCT elements
2. Platform trials: Shared control arms require careful statistical consideration
3. Real-world evidence: Evaluate data quality, unmeasured confounding, and outcome ascertainment
4. Accelerated approval: Based on surrogate endpoints; confirmatory trials required
5. Adaptive designs: Pre-specification critical; look for Type I error control documentation`,
    },
  },

  media: [
    {
      id: 'study-design-flowchart',
      type: 'diagram',
      filename: 'study-design-flowchart.svg',
      title: 'Study Design Decision Flowchart',
      description: 'Visual guide to identifying and selecting appropriate study designs',
    },
    {
      id: 'evidence-pyramid',
      type: 'diagram',
      filename: 'evidence-pyramid.svg',
      title: 'Hierarchy of Evidence Pyramid',
      description: 'Visual representation of evidence levels from case reports to systematic reviews',
    },
  ],

  citations: [
    {
      id: 'gordis-epidemiology',
      type: 'textbook',
      title: 'Epidemiology',
      authors: ['Gordis, L.'],
      source: 'Gordis Epidemiology, 6th Edition',
      license: 'Elsevier',
    },
    {
      id: 'grimes-schulz-lancet',
      type: 'article',
      title: 'An overview of clinical research: the lay of the land',
      authors: ['Grimes, D.A.', 'Schulz, K.F.'],
      source: 'The Lancet',
      url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(02)07283-5/fulltext',
    },
    {
      id: 'consort-statement',
      type: 'article',
      title: 'CONSORT 2010 Statement',
      source: 'BMJ',
      url: 'http://www.consort-statement.org/',
    },
  ],

  crossReferences: [
    { targetId: 'concept-hierarchy-of-evidence', targetType: 'concept', relationship: 'related', label: 'Hierarchy of Evidence' },
    { targetId: 'concept-critical-appraisal', targetType: 'concept', relationship: 'related', label: 'Critical Appraisal' },
    { targetId: 'concept-understanding-statistics', targetType: 'concept', relationship: 'related', label: 'Understanding Statistics' },
  ],

  tags: {
    systems: ['evidence-based-medicine'],
    topics: ['research methodology', 'study design', 'clinical research', 'epidemiology'],
    keywords: ['RCT', 'cohort', 'case-control', 'observational', 'experimental', 'clinical trial'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default studyDesignTypes;
