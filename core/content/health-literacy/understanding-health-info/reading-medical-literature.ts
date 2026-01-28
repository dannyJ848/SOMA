/**
 * Reading Medical Literature - How to Read and Understand Medical Research
 *
 * Covers the structure of medical papers, critical appraisal skills,
 * understanding study designs, and extracting clinically relevant information.
 */

import { EducationalContent } from '../../types';

export const readingMedicalLiterature: EducationalContent = {
  id: 'health-literacy-reading-medical-literature',
  type: 'concept',
  name: 'Reading Medical Literature',
  alternateNames: ['Understanding Medical Research', 'Reading Research Papers', 'Medical Journal Literacy'],

  levels: {
    1: {
      level: 1,
      summary: 'Learning to read medical research helps you understand new health discoveries and have better conversations with your doctor.',
      explanation: `Scientists share what they learn by writing papers (called "studies" or "research articles"). Here is how to understand them better:

**Parts of a Research Study:**

1. **Title** - What the study is about
2. **Abstract** - A short summary of the whole thing (like a movie preview)
3. **Introduction** - Why they did the study
4. **Methods** - How they did it
5. **Results** - What they found
6. **Discussion** - What it means

**Questions to Ask About Any Study:**

- How many people were in the study?
- Who were these people? (Age, health conditions, etc.)
- What exactly did they test?
- What did they compare it to?
- How long did they follow people?

**Understanding News About Research:**

When you see health news, remember:
- News often makes things sound bigger than they are
- One study does not prove anything for sure
- "May" and "might" are important words - they mean we are not sure yet
- Animal studies do not always apply to humans

**Red Flags:**

- Very small number of people studied
- Funded by a company selling the product
- Only one study with no others supporting it
- Claims that sound too good to be true

**Remember:** New research is exciting but needs to be confirmed by more studies before we know for sure!`,
      keyTerms: [
        { term: 'study', definition: 'A careful investigation to learn new facts about something' },
        { term: 'research', definition: 'The work scientists do to discover new information' },
        { term: 'abstract', definition: 'A short summary at the beginning of a research paper' },
      ],
      analogies: [
        'Reading research is like being a detective - you look for clues about whether the findings are trustworthy',
        'An abstract is like a movie trailer - it gives you the highlights without all the details',
      ],
      examples: [
        'A study tested a new cold medicine on 500 people and compared it to a sugar pill to see if it really works',
        'Scientists followed 1000 people for 10 years to see if eating vegetables helped them stay healthy',
      ],
      patientCounselingPoints: [
        'Ask your doctor to help you understand research you have read',
        'Be cautious of health news headlines - they often exaggerate',
        'One study is just the beginning - look for patterns across many studies',
        'It is okay to not understand everything - even experts specialize in certain areas',
      ],
    },
    2: {
      level: 2,
      summary: 'Reading medical literature involves understanding study designs, recognizing limitations, and evaluating whether findings apply to your situation.',
      explanation: `## Why Read Medical Research?

- Stay informed about health topics
- Have more informed discussions with healthcare providers
- Evaluate health claims in the media
- Understand your own test results and treatments

## Structure of a Medical Research Paper

**1. Abstract**
- Brief summary of entire study
- Usually 200-300 words
- Includes: Background, Methods, Results, Conclusions
- Good starting point but lacks detail

**2. Introduction**
- Background information
- Why the research question matters
- What is already known
- Study objectives/hypothesis

**3. Methods**
- Who was studied (population)
- What was done (intervention or exposure)
- How outcomes were measured
- Statistical methods used

**4. Results**
- Data and findings
- Tables and figures
- Statistical significance
- Main outcomes

**5. Discussion**
- What results mean
- Comparison to other studies
- Limitations
- Future directions

**6. Conclusion**
- Summary of key findings
- Clinical implications

## Types of Studies

**Observational Studies:**
- Researchers watch but do not interfere
- Can show associations but not causation
- Types: Cohort, case-control, cross-sectional

**Experimental Studies:**
- Researchers actively intervene
- Randomized controlled trials (RCTs) are strongest
- Can show cause and effect

**Systematic Reviews:**
- Combine results from multiple studies
- More reliable than single studies
- Look for "Cochrane reviews" as gold standard

## Questions to Ask

1. **What was the research question?**
2. **How was the study designed?**
3. **Who was included and excluded?**
4. **What were the main findings?**
5. **Could other factors explain the results?**
6. **Who funded the study?**
7. **Do the conclusions match the results?**

## Understanding Results

**Statistical Significance:**
- p < 0.05 means results probably not due to chance
- Does not mean the effect is large or important

**Confidence Intervals:**
- Range where true value likely falls
- Narrow = more precise; Wide = less certain

**Effect Size:**
- How big was the difference?
- Even small effects can be "significant" with large samples`,
      keyTerms: [
        { term: 'randomized controlled trial', definition: 'A study where participants are randomly assigned to treatment or control groups' },
        { term: 'cohort study', definition: 'A study that follows a group of people over time to see who develops a condition' },
        { term: 'systematic review', definition: 'A study that combines and analyzes results from multiple research studies on the same topic' },
        { term: 'peer review', definition: 'Process where other experts evaluate research before publication' },
        { term: 'placebo', definition: 'An inactive treatment used for comparison in studies' },
        { term: 'control group', definition: 'Participants who do not receive the treatment being studied, used for comparison' },
      ],
      patientCounselingPoints: [
        'Start with the abstract to decide if an article is relevant to you',
        'Look for systematic reviews when researching a health topic',
        'Consider whether study participants are similar to you',
        'One study rarely provides definitive answers - look for consistent findings across studies',
      ],
    },
    3: {
      level: 3,
      summary: 'Critical appraisal of medical literature requires understanding research methodology, assessing validity and bias, interpreting statistical findings, and evaluating applicability to clinical practice.',
      explanation: `## Framework for Critical Appraisal

**Three Fundamental Questions:**
1. Are the results valid? (Internal validity)
2. What are the results? (Magnitude and precision)
3. How can I apply the results? (External validity/applicability)

## Evaluating Different Study Designs

**Randomized Controlled Trials:**

Validity Questions:
- Was randomization truly random and concealed?
- Were groups similar at baseline?
- Were participants and assessors blinded?
- Was follow-up complete?
- Was analysis by intention-to-treat?
- Were all important outcomes measured?

**Cohort Studies:**

Validity Questions:
- Were groups similar except for exposure?
- Were exposures and outcomes measured similarly?
- Was follow-up sufficient and complete?
- Were potential confounders identified and controlled?

**Case-Control Studies:**

Validity Questions:
- Were cases and controls from same population?
- Were cases clearly defined?
- Were exposures measured the same way in both groups?
- Were potential confounders controlled?

**Diagnostic Studies:**

Validity Questions:
- Was there an independent, blind comparison with reference standard?
- Did all patients get both tests?
- Was the reference standard appropriate?
- Was the patient spectrum representative?

## Understanding Bias

**Selection Bias:**
- Non-random selection of participants
- Loss to follow-up differs between groups
- Volunteer bias

**Information Bias:**
- Recall bias: Differential memory of exposures
- Observer bias: Assessors influenced by knowledge of groups
- Reporting bias: Selective outcome reporting

**Confounding:**
- Third variable affects both exposure and outcome
- Can create spurious associations
- Control through design or analysis

## Statistical Interpretation

**Beyond P-Values:**
- Effect estimates (mean difference, risk ratio, odds ratio)
- Confidence intervals for precision
- Clinical vs. statistical significance
- Absolute vs. relative effects

**Sample Size and Power:**
- Underpowered studies may miss real effects
- Overpowered studies may find trivial effects
- Look for power calculations in methods

**Multiple Testing:**
- Multiple comparisons inflate false positive rate
- Look for appropriate corrections
- Pre-specified vs. exploratory analyses

## Assessing Applicability

**PICO Framework:**
- **P**atient/Population: Similar to my patient?
- **I**ntervention: Feasible in my setting?
- **C**omparison: Relevant alternative?
- **O**utcome: Meaningful to patients?

**Generalizability Considerations:**
- Inclusion/exclusion criteria
- Setting (academic center vs. community)
- Intervention fidelity
- Outcome relevance

## Quality of Medical Journals

**Peer Review:**
- Expert evaluation before publication
- Varies in rigor across journals
- Not a guarantee of quality

**Impact Factor:**
- Measure of citation frequency
- Higher generally indicates more prestigious
- Not a direct measure of study quality

**Predatory Journals:**
- Publish without proper review
- Focus on profit over quality
- Check for warning signs`,
      keyTerms: [
        { term: 'internal validity', definition: 'Degree to which study results accurately reflect what happened in the study population' },
        { term: 'external validity', definition: 'Degree to which study results can be generalized to other populations and settings' },
        { term: 'intention-to-treat analysis', definition: 'Analysis including all randomized participants in their original groups, regardless of adherence' },
        { term: 'allocation concealment', definition: 'Keeping group assignment hidden until moment of randomization to prevent selection bias' },
        { term: 'blinding', definition: 'Keeping participants, providers, or assessors unaware of group assignment' },
        { term: 'PICO', definition: 'Framework for clinical questions: Patient, Intervention, Comparison, Outcome' },
      ],
      clinicalNotes: 'Use standardized critical appraisal tools (CASP checklists, CONSORT for RCTs, STROBE for observational studies) to systematically evaluate literature. Focus teaching on the most relevant question types for the learner level.',
    },
    4: {
      level: 4,
      summary: 'Advanced medical literature interpretation involves nuanced understanding of research methodology, causal inference principles, synthesis of evidence, and translation of findings into clinical recommendations.',
      explanation: `## Advanced Critical Appraisal

**Hierarchy of Evidence in Context:**
- RCTs are not always superior
- Well-designed observational studies may be appropriate for:
  - Rare outcomes
  - Long-term effects
  - Harmful exposures
  - Real-world effectiveness

**Pragmatic vs. Explanatory Trials:**
- Explanatory: Can the intervention work under ideal conditions?
- Pragmatic: Does it work in real-world practice?
- PRECIS-2 tool for assessment

**Composite Endpoints:**
- Combining multiple outcomes
- Advantages: Increased power, efficiency
- Limitations: Components may have different importance, directions
- Assess component contributions

## Causal Inference Considerations

**Counterfactual Framework:**
- What would have happened without intervention?
- Fundamental problem of causal inference
- Randomization addresses this through balance

**Confounding Control:**
- Randomization (if successful)
- Matching
- Stratification
- Multivariable adjustment
- Propensity scores
- Instrumental variables

**Mediation and Moderation:**
- Mediators: Mechanisms through which effects occur
- Moderators: Factors that change the effect
- Direct vs. indirect effects

**Sensitivity Analyses:**
- How robust are results to assumptions?
- What level of unmeasured confounding would change conclusions?
- E-values for unmeasured confounding

## Evidence Synthesis

**Systematic Review Methodology:**
- Protocol development (PROSPERO registration)
- Comprehensive search strategy
- Explicit inclusion/exclusion criteria
- Standardized data extraction
- Quality assessment
- Appropriate synthesis

**Meta-Analysis Interpretation:**
- Forest plots: Individual and pooled estimates
- Heterogeneity: I², tau-squared, prediction intervals
- Publication bias: Funnel plots, trim-and-fill
- Subgroup and sensitivity analyses
- GRADE for certainty of evidence

**Network Meta-Analysis:**
- Indirect comparisons
- Assumptions: Consistency, transitivity
- Ranking treatments
- Interpretation cautions

## From Evidence to Recommendations

**GRADE Framework:**
- Quality of evidence: High, Moderate, Low, Very Low
- Factors downgrading: Risk of bias, inconsistency, indirectness, imprecision, publication bias
- Factors upgrading: Large effect, dose-response, confounding

**Evidence-to-Decision Considerations:**
- Balance of benefits and harms
- Patient values and preferences
- Resource implications
- Equity considerations
- Feasibility

**Guideline Development:**
- Systematic evidence review
- Expert panel composition
- Conflict of interest management
- Transparent methodology
- Implementation considerations

## Special Topics

**Non-Inferiority Trials:**
- Demonstrating new treatment not worse
- Margin selection critical
- Intention-to-treat and per-protocol both important
- Assay sensitivity concerns

**Adaptive Trials:**
- Pre-planned modifications based on interim data
- Efficiency gains
- Complexity in interpretation
- Sample size re-estimation, arm dropping

**Real-World Evidence:**
- Data from routine practice
- Complements RCT evidence
- Limitations in confounding control
- Regulatory applications expanding

**Patient-Reported Outcomes:**
- Direct from patients without interpretation
- Validation of instruments
- Minimal clinically important difference
- Missing data challenges`,
      keyTerms: [
        { term: 'GRADE', definition: 'Grading of Recommendations Assessment, Development and Evaluation; framework for rating evidence quality and recommendation strength' },
        { term: 'heterogeneity', definition: 'Variability in results across studies beyond chance; quantified by I² and tau-squared' },
        { term: 'non-inferiority trial', definition: 'Study designed to show new treatment is not worse than standard by more than a pre-specified margin' },
        { term: 'pragmatic trial', definition: 'RCT designed to test effectiveness in routine practice conditions' },
        { term: 'sensitivity analysis', definition: 'Analysis testing robustness of conclusions to changes in assumptions or methods' },
        { term: 'E-value', definition: 'Minimum strength of unmeasured confounding needed to explain away observed association' },
      ],
      clinicalNotes: `Key appraisal checklists:
- CONSORT: RCT reporting
- STROBE: Observational studies
- PRISMA: Systematic reviews
- STARD: Diagnostic studies
- TRIPOD: Prediction models

Consider using structured journal club formats (e.g., JAMA Users' Guides) to build appraisal skills systematically.`,
    },
    5: {
      level: 5,
      summary: 'Expert-level engagement with medical literature requires mastery of methodological nuances, understanding of emerging research designs, ability to synthesize across bodies of evidence, and skill in translating evidence into practice and policy.',
      explanation: `## Methodological Mastery

**Advanced Trial Design:**
- Cluster randomized trials: Unit of randomization, ICC, analysis considerations
- Stepped-wedge designs: Sequential rollout, time effects
- Factorial designs: Testing multiple interventions, interactions
- Platform trials: Master protocol, multiple treatments
- Adaptive designs: Response-adaptive randomization, sample size re-estimation

**Causal Inference Methods:**
- Instrumental variables: Mendelian randomization, regression discontinuity
- Difference-in-differences: Policy evaluation, parallel trends
- Synthetic control methods: Single-unit interventions
- Target trial emulation: Observational data mimicking RCTs

**Time-to-Event Analysis:**
- Competing risks: Cause-specific hazards, subdistribution hazards
- Recurrent events: Andersen-Gill, marginal, shared frailty models
- Cure models: When some never experience event
- Landmark analysis: Dynamic predictions

## Emerging Evidence Sources

**Real-World Data/Evidence:**
- Electronic health records
- Claims databases
- Registries
- Patient-generated data
- Regulatory perspectives and frameworks

**Individual Patient Data Meta-Analysis:**
- Advantages over aggregate data
- One-stage vs. two-stage approaches
- Subgroup and interaction analyses
- Challenges in data harmonization

**Machine Learning Applications:**
- Prediction model development
- Variable selection
- Heterogeneous treatment effects
- Validation requirements
- Interpretability vs. performance

**Bayesian Methods:**
- Prior specification and sensitivity
- Posterior interpretation
- Dynamic borrowing
- Sequential analysis
- Probability of benefit calculations

## Evidence Ecosystem

**Pre-Registration and Registered Reports:**
- ClinicalTrials.gov requirements
- OSF registrations
- Reduce selective reporting
- Distinguish confirmatory and exploratory

**Data Sharing and Reproducibility:**
- Individual participant data availability
- Analysis code sharing
- Replication studies
- Open science movement

**Living Evidence:**
- Living systematic reviews
- Continuous updating
- Evidence surveillance
- Rapid reviews for emerging questions

**Research Waste:**
- Avoidable waste in research
- Underpowered studies
- Poor reporting
- Non-publication
- Irrelevant questions

## Translation and Implementation

**Implementation Science Frameworks:**
- CFIR: Contextual factors
- RE-AIM: Reach, effectiveness, adoption, implementation, maintenance
- Knowledge-to-action cycle

**De-Implementation:**
- Low-value care identification
- Overuse and overdiagnosis
- Choosing Wisely initiatives

**Precision Medicine Integration:**
- Biomarker-driven treatment
- Basket and umbrella trials
- N-of-1 trial applications
- Heterogeneous treatment effects

## Leadership in Evidence Appraisal

**Teaching Critical Appraisal:**
- Graduated complexity
- Case-based learning
- Journal club facilitation
- Assessment methods

**Guideline Development Leadership:**
- Panel composition
- Evidence review oversight
- Consensus methods
- Conflict management

**Research Quality Improvement:**
- Methodology consultation
- Protocol review
- Analysis plan development
- Reporting standards

**Policy Translation:**
- Evidence briefs
- Health technology assessment
- Coverage decisions
- Population health impact

## Ethical Considerations

**Research Integrity:**
- Questionable research practices
- Research misconduct
- Whistleblowing considerations
- Institutional responsibilities

**Publication Ethics:**
- Authorship criteria
- Redundant publication
- Retraction and correction
- Predatory publishing

**Conflict of Interest:**
- Disclosure requirements
- Management strategies
- Reader interpretation
- Institutional policies`,
      keyTerms: [
        { term: 'target trial emulation', definition: 'Framework for designing observational studies to answer causal questions by explicitly emulating a hypothetical RCT' },
        { term: 'stepped-wedge design', definition: 'Cluster randomized trial where clusters sequentially cross over from control to intervention' },
        { term: 'Mendelian randomization', definition: 'Using genetic variants as instrumental variables to assess causal effects of modifiable exposures' },
        { term: 'competing risks', definition: 'Analysis situation where multiple mutually exclusive events can occur, requiring special methods' },
        { term: 'living systematic review', definition: 'Systematic review continuously updated as new evidence emerges' },
        { term: 'implementation science', definition: 'Study of methods to promote integration of research findings into routine practice' },
      ],
      clinicalNotes: `Key resources for advanced appraisal:
1. Cochrane Handbook for Systematic Reviews
2. JAMA Users' Guides to the Medical Literature
3. Guyatt et al. Users' Guides textbook
4. EQUATOR Network reporting guidelines
5. IOM Standards for Systematic Reviews

Teaching approach:
- Model critical appraisal in clinical discussions
- Supervise resident research projects
- Lead methodology-focused journal clubs
- Participate in guideline development
- Contribute to research quality improvement`,
    },
  },

  media: [],

  citations: [
    {
      id: 'guyatt-users-guides',
      type: 'textbook',
      title: "Users' Guides to the Medical Literature: A Manual for Evidence-Based Clinical Practice",
      authors: ['Guyatt, G.', 'Rennie, D.', 'Meade, M.O.', 'Cook, D.J.'],
      source: 'McGraw-Hill Education',
    },
    {
      id: 'cochrane-handbook',
      type: 'website',
      title: 'Cochrane Handbook for Systematic Reviews of Interventions',
      source: 'Cochrane Collaboration',
      url: 'https://training.cochrane.org/handbook',
    },
    {
      id: 'equator-network',
      type: 'website',
      title: 'EQUATOR Network: Enhancing the QUAlity and Transparency Of health Research',
      source: 'EQUATOR Network',
      url: 'https://www.equator-network.org/',
    },
    {
      id: 'casp-checklists',
      type: 'website',
      title: 'CASP Checklists',
      source: 'Critical Appraisal Skills Programme',
      url: 'https://casp-uk.net/casp-tools-checklists/',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-evaluating-sources', targetType: 'concept', relationship: 'sibling', label: 'Evaluating Health Sources' },
    { targetId: 'health-literacy-understanding-statistics', targetType: 'concept', relationship: 'sibling', label: 'Understanding Statistics' },
    { targetId: 'ebm-principles', targetType: 'concept', relationship: 'related', label: 'Evidence-Based Medicine Principles' },
  ],

  tags: {
    systems: ['health-literacy'],
    topics: ['medical literature', 'critical appraisal', 'evidence-based medicine', 'research methodology'],
    keywords: ['research', 'studies', 'clinical trials', 'systematic review', 'meta-analysis', 'GRADE', 'critical appraisal'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default readingMedicalLiterature;
