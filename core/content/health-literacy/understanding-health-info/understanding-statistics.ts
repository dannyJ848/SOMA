/**
 * Understanding Statistics - Making Sense of Numbers in Health Information
 *
 * Covers health numeracy, interpreting statistics in medical contexts,
 * understanding risk communication, and avoiding common statistical misunderstandings.
 */

import { EducationalContent } from '../../types';

export const understandingStatistics: EducationalContent = {
  id: 'health-literacy-understanding-statistics',
  type: 'concept',
  name: 'Understanding Health Statistics',
  alternateNames: ['Health Numeracy', 'Medical Statistics Basics', 'Understanding Medical Numbers'],

  levels: {
    1: {
      level: 1,
      summary: 'Understanding numbers in health helps you know what test results mean and make better choices about your care.',
      explanation: `Doctors use lots of numbers to talk about health. Learning what these numbers mean helps you make better decisions!

**Common Health Numbers:**

1. **Blood Pressure:** Two numbers like 120/80
   - First number: Pressure when heart beats
   - Second number: Pressure when heart rests
   - Lower is usually better (but not too low!)

2. **Temperature:** Normal is about 98.6 degrees F
   - Above 100.4 usually means a fever

3. **Percentages:** Out of 100
   - "90% effective" means it works for 90 out of 100 people
   - "10% chance of rain" means 10 out of 100 days like this would have rain

**Understanding Risk:**

When doctors say something is "risky" or "safe," ask:
- How many people does this affect?
- What are the actual numbers?

**Example:**
"The treatment doubles your risk" sounds scary! But:
- If your risk was 1 in 1000, now it is 2 in 1000
- That is still very small!

**Questions to Ask Your Doctor:**

- "What do these numbers mean for ME?"
- "How many people out of 100 would this help?"
- "What happens if I do nothing?"

**Remember:** It is okay to ask your doctor to explain numbers in a way you understand!`,
      keyTerms: [
        { term: 'percentage', definition: 'A number out of 100, shown with a % sign' },
        { term: 'risk', definition: 'The chance that something might happen' },
        { term: 'average', definition: 'The typical or middle amount when you add up numbers and divide' },
      ],
      analogies: [
        'Risk is like weather forecasts - a 30% chance of rain means you might want an umbrella, but you probably will not need it',
        'Percentages are like pizza slices - 50% is half the pizza, 25% is a quarter',
      ],
      examples: [
        'Your doctor says a medicine works for 80% of people - that means 80 out of 100 people feel better',
        'A test is 95% accurate - it gives the right answer 95 times out of 100',
      ],
      patientCounselingPoints: [
        'Ask your doctor to explain numbers using simple examples',
        'It is okay to say "I do not understand what that number means"',
        'Ask "How many people out of 100?" to understand percentages better',
        'Write down important numbers so you can look at them later',
      ],
    },
    2: {
      level: 2,
      summary: 'Health statistics help us understand treatment effectiveness, test accuracy, and health risks, but they need to be interpreted carefully to avoid common misunderstandings.',
      explanation: `## Why Health Statistics Matter

Numbers in healthcare help you:
- Understand how well treatments work
- Know what test results mean
- Compare different options
- Make informed decisions

## Key Statistical Concepts

**Percentages and Proportions:**
- Percentages express parts per 100
- 50% = 50 out of 100 = half
- Can describe risks, effectiveness, or populations

**Averages (Mean, Median, Mode):**
- **Mean:** Add all numbers, divide by count (can be skewed by outliers)
- **Median:** Middle value when sorted (better for skewed data)
- **Mode:** Most common value

**Example:** In a group where most people wait 10 minutes but one waits 3 hours:
- Mean wait: 30 minutes (misleading)
- Median wait: 10 minutes (more accurate for most people)

## Understanding Risk

**Absolute Risk:**
- Your actual chance of something happening
- Example: 5 out of 1000 people get this condition = 0.5% absolute risk

**Relative Risk:**
- Compares risk between two groups
- "Doubles your risk" compares to something else
- Example: If risk goes from 1% to 2%, it doubled (100% increase) but only went up 1 percentage point

**Risk Reduction:**
- **Absolute risk reduction:** Actual difference (2% to 1% = 1% reduction)
- **Relative risk reduction:** Percentage decrease (2% to 1% = 50% reduction)

Headlines often use relative risk because bigger numbers sound more impressive!

## Test Accuracy

**Sensitivity:** How good is the test at finding disease?
- High sensitivity = catches most cases
- "If you have the disease, the test will probably be positive"

**Specificity:** How good is the test at ruling out disease?
- High specificity = few false alarms
- "If you don't have the disease, the test will probably be negative"

**False Positives and False Negatives:**
- False positive: Test says yes, but you do not have it
- False negative: Test says no, but you actually have it

## Common Mistakes to Avoid

1. **Confusing relative and absolute risk**
   - "50% reduction" means different things depending on starting risk

2. **Ignoring base rates**
   - A "rare" side effect in millions of users = many actual cases

3. **Assuming correlation = causation**
   - Just because two things happen together does not mean one causes the other

4. **Focusing on single numbers**
   - Always ask for context and comparison`,
      keyTerms: [
        { term: 'absolute risk', definition: 'The actual probability of an event occurring, expressed as a percentage or fraction' },
        { term: 'relative risk', definition: 'The ratio of risk in one group compared to another group' },
        { term: 'sensitivity', definition: 'The ability of a test to correctly identify people who have a condition (true positive rate)' },
        { term: 'specificity', definition: 'The ability of a test to correctly identify people who do not have a condition (true negative rate)' },
        { term: 'false positive', definition: 'A test result that incorrectly indicates a condition is present when it is not' },
        { term: 'false negative', definition: 'A test result that incorrectly indicates a condition is absent when it is actually present' },
      ],
      patientCounselingPoints: [
        'When you hear about risk, ask if it is absolute or relative risk',
        'Ask your doctor what test results mean for you personally',
        'Be cautious of headlines that use dramatic-sounding percentages',
        'Request information in terms of natural frequencies (X out of 100 people)',
      ],
    },
    3: {
      level: 3,
      summary: 'Health statistics interpretation requires understanding probability concepts, diagnostic test properties, risk communication principles, and the limitations of statistical inference in medical decision-making.',
      explanation: `## Probability and Statistics in Medicine

**Frequentist Interpretation:**
- Probability as long-run frequency
- "5% risk" means in many similar situations, approximately 5 out of 100 would experience the outcome

**Conditional Probability:**
- Probability of A given B: P(A|B)
- Critical for understanding diagnostic tests
- Common error: confusing P(Disease|Positive test) with P(Positive test|Disease)

## Diagnostic Test Interpretation

**Sensitivity and Specificity:**
- Sensitivity = True Positives / (True Positives + False Negatives)
- Specificity = True Negatives / (True Negatives + False Positives)
- These are properties of the TEST

**Predictive Values:**
- Positive Predictive Value (PPV) = P(Disease|Positive test)
- Negative Predictive Value (NPV) = P(No Disease|Negative test)
- These depend on PREVALENCE (how common the condition is)

**Bayes' Theorem in Action:**
- PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1-Specificity) x (1-Prevalence))]
- When prevalence is low, even specific tests have low PPV

**Example: Screening Test**
- Sensitivity: 95%, Specificity: 95%, Prevalence: 1%
- PPV = only about 16%
- Most positive results are false positives!

## Risk Communication

**Natural Frequencies:**
- "3 out of 100 people" vs. "3%"
- Easier to understand and visualize
- Reduces errors in interpretation

**Number Needed to Treat (NNT):**
- Number of patients who need treatment for one to benefit
- NNT = 1 / Absolute Risk Reduction
- Example: If treatment reduces mortality from 4% to 3%, NNT = 100

**Number Needed to Harm (NNH):**
- Number of patients treated before one experiences harm
- NNH = 1 / Absolute Risk Increase
- Useful for comparing benefits and harms

**Framing Effects:**
- Same information, different perception:
  - "90% survival rate" vs. "10% mortality rate"
  - Both describe identical outcomes
  - Framing affects decisions

## Statistical Significance vs. Clinical Significance

**P-values:**
- Probability of seeing results this extreme if null hypothesis is true
- p < 0.05 is convention, not magic threshold
- Does NOT tell you probability hypothesis is true
- Does NOT tell you effect size

**Confidence Intervals:**
- Range where true value likely falls (e.g., 95% CI)
- Provides more information than p-value alone
- Width indicates precision
- If CI includes no effect, not statistically significant

**Clinical Significance:**
- Is the effect size meaningful in practice?
- Large studies can find tiny, meaningless differences "significant"
- Small differences in outcomes may not matter to patients

## Common Statistical Errors

**Simpson's Paradox:**
- Trends in subgroups can reverse when combined
- Always consider stratified data

**Lead-time Bias:**
- Earlier detection can appear to improve survival without changing outcomes
- Important in cancer screening discussions

**Selection Bias:**
- Non-random samples can produce misleading results
- Healthy user bias in observational studies`,
      keyTerms: [
        { term: 'positive predictive value', definition: 'Probability of having disease given a positive test result; depends on prevalence' },
        { term: 'negative predictive value', definition: 'Probability of not having disease given a negative test result; depends on prevalence' },
        { term: 'number needed to treat', definition: 'Number of patients who must be treated to prevent one adverse outcome' },
        { term: 'confidence interval', definition: 'Range of values within which the true population parameter likely falls with specified probability' },
        { term: 'p-value', definition: 'Probability of observing results as extreme or more extreme than observed, assuming null hypothesis is true' },
        { term: 'Bayes theorem', definition: 'Formula relating conditional probabilities; used to update probability estimates with new evidence' },
      ],
      clinicalNotes: 'Use visual aids like icon arrays to communicate risk. Express risks as natural frequencies. Present both relative and absolute risk reduction. Use consistent denominators when comparing options.',
    },
    4: {
      level: 4,
      summary: 'Advanced health statistics comprehension involves understanding study design implications, regression methods, survival analysis, and sophisticated risk communication strategies for shared decision-making.',
      explanation: `## Study Design and Statistical Inference

**Observational vs. Experimental:**
- RCTs support causal inference through randomization
- Observational studies subject to confounding
- Quasi-experimental designs bridge the gap

**Confounding and Bias:**
- Confounding: Third variable affects both exposure and outcome
- Control methods: Stratification, matching, regression adjustment, propensity scores
- Residual confounding always possible in observational studies

**Effect Modification (Interaction):**
- Effect varies across subgroups
- Different from confounding
- Important for personalizing treatment decisions

## Regression Analysis

**Linear Regression:**
- Models continuous outcomes
- Beta coefficients represent change in outcome per unit change in predictor
- Adjusted models control for covariates

**Logistic Regression:**
- Models binary outcomes
- Produces odds ratios
- Odds ratio approximates relative risk when outcome is rare

**Cox Proportional Hazards:**
- Time-to-event outcomes
- Hazard ratios compare instantaneous risk
- Proportional hazards assumption

**Interpretation Cautions:**
- Adjusted vs. unadjusted effects
- Model specification affects results
- Overfitting with many variables
- Ecological fallacy in aggregate data

## Survival Analysis

**Key Concepts:**
- Survival function: Probability of surviving beyond time t
- Hazard function: Instantaneous rate of event at time t
- Censoring: Incomplete follow-up information

**Kaplan-Meier Curves:**
- Visual representation of survival over time
- Accounts for censoring
- Log-rank test compares groups

**Interpreting Survival Statistics:**
- Median survival: Time by which 50% have experienced event
- 5-year survival rate: Proportion alive at 5 years
- Note: These do not tell individual prognosis

**Immortal Time Bias:**
- Time during which outcome cannot occur
- Common in observational pharmacoepidemiology
- Can make treatments appear more effective

## Advanced Risk Communication

**Shared Decision-Making Tools:**
- Decision aids with visual risk displays
- Icon arrays (pictographs)
- Bar charts and pie charts
- Interactive risk calculators

**Absolute Risk Visualization:**
- 1000-person diagrams
- Comparison across options
- Timeframe specification
- Outcome specification (mortality, morbidity, QoL)

**Uncertainty Communication:**
- Communicating confidence intervals
- Discussing evidence quality
- Acknowledging knowledge gaps
- Individual variation in response

**Cognitive Heuristics:**
- Availability heuristic: Recent/vivid events overweighted
- Representativeness: Stereotypes affect probability judgments
- Anchoring: First numbers disproportionately influence
- Affect heuristic: Emotions influence risk perception

## Special Populations

**Personalized Risk Estimates:**
- Risk calculators (Framingham, ASCVD)
- Limitations of population-based estimates
- Calibration for individual characteristics
- Communication of model uncertainty

**Competing Risks:**
- Multiple possible outcomes
- Cumulative incidence function
- Important for older patients with comorbidities

**Benefit-Harm Trade-offs:**
- Quality-adjusted outcomes
- Value-based decisions
- Patient preference elicitation
- Regret minimization`,
      keyTerms: [
        { term: 'odds ratio', definition: 'Ratio of odds of outcome in exposed vs. unexposed groups; approximates relative risk when outcome is rare' },
        { term: 'hazard ratio', definition: 'Ratio of hazard rates between groups; represents relative risk of event at any given time point' },
        { term: 'Kaplan-Meier curve', definition: 'Step function showing proportion surviving over time; accounts for censored observations' },
        { term: 'competing risks', definition: 'Situation where multiple mutually exclusive events can occur; affects interpretation of individual event probabilities' },
        { term: 'propensity score', definition: 'Probability of receiving treatment given observed covariates; used to balance groups in observational studies' },
        { term: 'effect modification', definition: 'Variation in effect size across subgroups; indicates different treatment effects in different populations' },
      ],
      clinicalNotes: `Risk communication strategies:
1. Use absolute numbers with consistent denominators
2. Present both benefits and harms
3. Use visual aids appropriate for patient literacy
4. Frame information neutrally (survival AND mortality rates)
5. Allow time for processing and questions
6. Document the shared decision-making process`,
    },
    5: {
      level: 5,
      summary: 'Expert-level health statistics mastery encompasses advanced biostatistical methods, causal inference frameworks, Bayesian approaches, and the translation of statistical findings into clinical practice and policy.',
      explanation: `## Causal Inference Frameworks

**Counterfactual Reasoning:**
- Potential outcomes framework (Rubin)
- Individual causal effect = Y(1) - Y(0)
- Fundamental problem: Only observe one potential outcome
- Average treatment effect estimation

**Directed Acyclic Graphs (DAGs):**
- Visualize causal assumptions
- Identify confounders, colliders, mediators
- Guide covariate selection
- Identify minimal sufficient adjustment sets

**Target Trial Emulation:**
- Observational studies mimicking RCT design
- Explicit specification of:
  - Eligibility criteria
  - Treatment strategies
  - Assignment procedures
  - Follow-up period
  - Outcomes
  - Causal contrasts
  - Analysis plan

**Instrumental Variables:**
- Addresses unmeasured confounding
- Requirements: Association with exposure, no direct effect on outcome, no confounded path
- Examples: Mendelian randomization, geographic variation

## Advanced Statistical Methods

**Bayesian Statistics:**
- Prior + Likelihood = Posterior
- Posterior probability of hypothesis
- Credible intervals (probability of containing true value)
- Decision-theoretic framework
- Sequential updating with new evidence

**Meta-Analysis Methods:**
- Fixed effects vs. random effects models
- Heterogeneity assessment (I², tau-squared)
- Meta-regression for effect modifiers
- Network meta-analysis for indirect comparisons
- Individual patient data meta-analysis

**Machine Learning in Medicine:**
- Prediction vs. inference
- Cross-validation and external validation
- Calibration and discrimination (AUC-ROC, calibration plots)
- Overfitting and regularization
- Interpretability challenges

## Precision and Personalization

**Subgroup Analysis:**
- Pre-specified vs. exploratory
- Multiple comparison problem
- Interaction tests vs. subgroup-specific estimates
- Credibility criteria for subgroup effects

**Heterogeneity of Treatment Effect:**
- Individual response variation
- Predictive vs. prognostic factors
- Risk-based treatment effect
- Treatment effect heterogeneity models

**N-of-1 Trials:**
- Individual patient as their own control
- Multiple crossovers
- Aggregation across patients
- Bayesian analysis approaches

## Statistical Issues in Practice

**Multiplicity and False Discovery:**
- Family-wise error rate control
- False discovery rate (Benjamini-Hochberg)
- Pre-registration importance
- Distinguishing exploratory and confirmatory

**Missing Data:**
- MCAR, MAR, MNAR mechanisms
- Multiple imputation
- Sensitivity analyses
- Inverse probability weighting

**Measurement Error:**
- Regression dilution bias
- Measurement error models
- Validation studies
- Sensitivity to misclassification

## Translating Statistics to Practice

**Clinical Prediction Rules:**
- Development, validation, impact studies
- Discrimination and calibration metrics
- Decision curve analysis
- Implementation considerations

**Practice Guidelines Statistics:**
- GRADE evidence rating
- Recommendation strength factors
- Values and preferences integration
- Resource considerations

**Health Policy Applications:**
- Cost-effectiveness analysis
- Decision modeling
- Value of information analysis
- Population health impact

## Teaching Statistics

**Effective Communication:**
- Natural frequency formats
- Visual representations
- Analogies and comparisons
- Acknowledging uncertainty

**Common Misunderstandings:**
- P-value misconceptions
- Confidence interval interpretations
- Causation from correlation
- Sample size and significance confusion

**Building Numeracy:**
- Graduated exposure to complexity
- Practical applications
- Interactive tools
- Repetition and reinforcement`,
      keyTerms: [
        { term: 'directed acyclic graph', definition: 'Visual representation of causal assumptions showing variables and their relationships; guides confounding control' },
        { term: 'instrumental variable', definition: 'Variable affecting outcome only through treatment; allows causal inference with unmeasured confounding' },
        { term: 'Mendelian randomization', definition: 'Using genetic variants as instrumental variables; exploits random allocation of genes at meiosis' },
        { term: 'false discovery rate', definition: 'Expected proportion of rejected null hypotheses that are false rejections; alternative to family-wise error control' },
        { term: 'calibration', definition: 'Agreement between predicted probabilities and observed frequencies; essential for prediction model validity' },
        { term: 'decision curve analysis', definition: 'Method evaluating clinical utility of prediction models across range of threshold probabilities' },
        { term: 'value of information', definition: 'Expected benefit from obtaining additional data; guides research prioritization' },
      ],
      clinicalNotes: `Key considerations for evidence-based practice:
1. Consider study design hierarchy and potential biases
2. Evaluate both statistical and clinical significance
3. Assess applicability to your patient population
4. Incorporate patient values in risk communication
5. Document decision rationale including uncertainty
6. Update practice as new evidence emerges

Resources:
- JAMA Users' Guides series
- BMJ Statistics Notes
- Cochrane Handbook statistical methods chapters
- EQUATOR Network reporting guidelines`,
    },
  },

  media: [],

  citations: [
    {
      id: 'gigerenzer-risk',
      type: 'article',
      title: 'Helping Doctors and Patients Make Sense of Health Statistics',
      authors: ['Gigerenzer, G.', 'Gaissmaier, W.', 'Kurz-Milcke, E.', 'Schwartz, L.M.', 'Woloshin, S.'],
      source: 'Psychological Science in the Public Interest',
    },
    {
      id: 'schwartz-numbers',
      type: 'article',
      title: 'The Role of Numeracy in Understanding the Benefit of Screening Mammography',
      authors: ['Schwartz, L.M.', 'Woloshin, S.', 'Black, W.C.', 'Welch, H.G.'],
      source: 'Annals of Internal Medicine',
    },
    {
      id: 'trevena-risk-communication',
      type: 'article',
      title: 'Presenting quantitative information about decision outcomes: a risk communication primer for patient decision aid developers',
      authors: ['Trevena, L.J.', 'Zikmund-Fisher, B.J.', 'Edwards, A.', 'et al.'],
      source: 'BMC Medical Informatics and Decision Making',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-basics', targetType: 'concept', relationship: 'parent', label: 'Health Literacy Basics' },
    { targetId: 'health-literacy-numeracy', targetType: 'concept', relationship: 'sibling', label: 'Health Numeracy' },
    { targetId: 'health-literacy-evaluating-sources', targetType: 'concept', relationship: 'sibling', label: 'Evaluating Health Sources' },
    { targetId: 'health-literacy-reading-medical-literature', targetType: 'concept', relationship: 'sibling', label: 'Reading Medical Literature' },
  ],

  tags: {
    systems: ['health-literacy'],
    topics: ['statistics', 'numeracy', 'risk communication', 'evidence interpretation'],
    keywords: ['statistics', 'probability', 'risk', 'NNT', 'sensitivity', 'specificity', 'p-value', 'confidence interval'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

export default understandingStatistics;
