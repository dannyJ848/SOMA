/**
 * Understanding Risk - Comprehensive Educational Content
 *
 * Covers how to interpret risk statistics in medical research and clinical practice,
 * including absolute vs relative risk, NNT, NNH, and communicating risk to patients.
 */

import { EducationalContent } from '../types';

export const understandingRisk: EducationalContent = {
  id: 'concept-understanding-risk',
  type: 'concept',
  name: 'Understanding Risk',
  alternateNames: ['Risk Interpretation', 'Risk Statistics', 'Absolute vs Relative Risk'],

  levels: {
    1: {
      level: 1,
      summary: 'Risk tells us how likely something is to happen, but the way we describe risk can make it sound bigger or smaller than it really is.',
      explanation: `When doctors talk about risk, they're talking about chances - like how likely you are to catch a cold or how well a medicine works. But here's the tricky part: the same information can sound very different depending on how it's said!

**An Example:**
Imagine a new medicine is tested. Without the medicine, 2 out of 100 people get better. With the medicine, 4 out of 100 people get better.

- **One way to say it (Relative Risk)**: "The medicine DOUBLES your chance of getting better!" (2 to 4 is double - 100% increase!)
- **Another way to say it (Absolute Risk)**: "The medicine helps 2 extra people out of every 100." (4 minus 2 = 2 extra people helped)

Both are true, but they feel very different! The first way makes it sound amazing, but the second way shows you that most people (96 out of 100) still don't get better with the medicine.

**Why This Matters:**
When you hear about a treatment that "cuts your risk in half" or "doubles your protection," always ask: "What does that mean in real numbers?" A medicine that cuts your risk from 4 in 10,000 to 2 in 10,000 has cut your risk in half - but the actual change is very small.

**Number Needed to Treat (NNT):**
This is a helpful number that tells you: "How many people need to take this treatment for ONE person to benefit?"
- If NNT is 10, it means 10 people need to take the medicine for 1 person to benefit
- Lower NNT = treatment helps more people
- Higher NNT = you need to treat more people to see a benefit`,
      keyTerms: [
        { term: 'risk', definition: 'The chance that something will happen' },
        { term: 'relative risk', definition: 'A comparison that shows how much bigger or smaller one risk is compared to another' },
        { term: 'absolute risk', definition: 'The actual number or percentage of people something happens to' },
        { term: 'NNT', definition: 'Number Needed to Treat - how many people need treatment for one to benefit' },
      ],
      analogies: [
        'If a lottery doubles your chance of winning from 1 in a million to 2 in a million, it sounds amazing ("doubled!"), but your chance is still almost zero.',
        'NNT is like asking: "How many raffle tickets do I need to buy for one to probably be a winner?"',
      ],
      examples: [
        'A news headline says "New drug cuts heart attack risk by 50%!" But if the risk went from 2% to 1%, only 1 in 100 extra people is actually helped.',
        'If a flu shot prevents the flu in 1 of every 100 people who get it, the NNT is 100.',
      ],
    },
    2: {
      level: 2,
      summary: 'Understanding the difference between relative and absolute risk is essential for interpreting medical research and making informed health decisions.',
      explanation: `## Types of Risk Measures

### Absolute Risk (AR)
The probability of an event occurring in a specific group.
- Expressed as a percentage or fraction
- Example: "3% of people in this group developed diabetes over 5 years"

### Relative Risk (RR)
How much more (or less) likely an event is in one group compared to another.
- RR = Risk in exposed group / Risk in unexposed group
- RR > 1: Increased risk
- RR < 1: Decreased risk
- RR = 1: No difference

**Example Calculation:**
- Drug group: 10% develop side effect
- Placebo group: 20% develop side effect
- Relative Risk = 10% / 20% = 0.5 (50% lower risk with drug)

### Absolute Risk Reduction (ARR)
The difference in absolute risks between groups.
- ARR = Control group risk - Treatment group risk
- Example: 20% - 10% = 10% absolute risk reduction

### Relative Risk Reduction (RRR)
The percentage decrease in risk compared to the control group.
- RRR = (Control risk - Treatment risk) / Control risk
- Example: (20% - 10%) / 20% = 50% relative risk reduction

## Why Relative Risk Can Be Misleading

Both scenarios below have a 50% relative risk reduction:
| Scenario | Control | Treatment | RRR | ARR |
|----------|---------|-----------|-----|-----|
| A | 80% | 40% | 50% | 40% |
| B | 2% | 1% | 50% | 1% |

Same relative reduction, vastly different absolute impact!

## Number Needed to Treat (NNT)
How many patients must be treated for one to benefit.
- NNT = 1 / ARR
- Scenario A: 1 / 0.40 = 2.5 (treat 3 people to help 1)
- Scenario B: 1 / 0.01 = 100 (treat 100 people to help 1)

## Number Needed to Harm (NNH)
How many patients treated before one experiences harm.
- NNH = 1 / Absolute Risk Increase
- Higher NNH = safer treatment
- Compare NNT to NNH for benefit-risk assessment`,
      keyTerms: [
        { term: 'absolute risk', definition: 'The probability of an event occurring, expressed as a percentage or proportion', pronunciation: 'AB-suh-loot' },
        { term: 'relative risk', definition: 'The ratio of event risk in one group compared to another', pronunciation: 'REL-uh-tiv' },
        { term: 'absolute risk reduction', definition: 'The arithmetic difference in event rates between groups (ARR)' },
        { term: 'relative risk reduction', definition: 'The proportional decrease in risk compared to the control group (RRR)' },
        { term: 'NNT', definition: 'Number Needed to Treat: how many patients must receive treatment for one to benefit (1/ARR)' },
        { term: 'NNH', definition: 'Number Needed to Harm: how many patients treated before one experiences an adverse event' },
      ],
      analogies: [
        'Relative risk is like comparing sale discounts - "50% off" sounds great, but 50% off $10 vs $1000 is very different.',
        'NNT is like asking how many seeds you need to plant to grow one successful flower.',
      ],
    },
    3: {
      level: 3,
      summary: 'Risk communication requires understanding multiple metrics (RR, AR, ARR, RRR, NNT, NNH, OR) and their appropriate applications in different study designs and clinical contexts.',
      explanation: `## Risk Metrics in Detail

### Relative Risk vs. Odds Ratio

**Relative Risk (Risk Ratio):**
- Used in cohort studies and RCTs
- RR = (a/(a+b)) / (c/(c+d))
- Directly interpretable as "X times more likely"

**Odds Ratio:**
- Used in case-control studies
- OR = (a/c) / (b/d) = (a*d) / (b*c)
- When outcome is rare (<10%), OR approximates RR
- For common outcomes, OR exaggerates effect

| | Disease+ | Disease- |
|---|---|---|
| Exposed | a | b |
| Unexposed | c | d |

### Hazard Ratio
Used for time-to-event data:
- HR = 1.5 means 50% higher instantaneous risk of event at any given time
- Assumes proportional hazards (constant ratio over time)
- From Cox regression or survival analysis

### Confidence Intervals for Risk Measures
Interpret the precision of estimates:
- RR or OR: If 95% CI crosses 1, not statistically significant
- ARR/NNT: If 95% CI crosses 0, not statistically significant
- Narrow CI = more precise estimate

## Applying Risk Metrics

### Baseline Risk Matters
A 50% RRR has different clinical significance at different baseline risks:

| Baseline Risk | RRR | ARR | NNT |
|---------------|-----|-----|-----|
| 50% | 50% | 25% | 4 |
| 10% | 50% | 5% | 20 |
| 1% | 50% | 0.5% | 200 |

**Clinical implication**: High-risk patients benefit more from same relative reduction.

### Calculating NNT with Confidence Intervals
- NNT = 1/ARR
- 95% CI for NNT: 1/(upper CI of ARR) to 1/(lower CI of ARR)
- If ARR CI crosses zero, NNT CI extends to infinity (includes harm)

### NNT Over Time
NNT typically decreases with longer follow-up:
- 1-year NNT might be 100
- 5-year NNT might be 25
- Report time frame with NNT

## Communicating Risk Effectively

### Icon Arrays / Pictographs
Visual display showing affected individuals out of 100 or 1000
- More intuitive than percentages
- Shows both treated and untreated scenarios

### Framing Effects
Same information, different perception:
- "90% survival rate" vs "10% mortality rate"
- Positive framing increases treatment acceptance
- Present both perspectives for balanced communication

### Incremental Risk
For patients on baseline therapy:
- "Adding Drug B to Drug A reduces events from 8% to 6%"
- ARR = 2%, NNT = 50
- This is the relevant NNT, not compared to placebo`,
      keyTerms: [
        { term: 'odds ratio', definition: 'Ratio of odds of exposure in cases vs controls; approximates RR when outcome rare' },
        { term: 'hazard ratio', definition: 'Ratio of instantaneous event rates between groups in survival analysis; interpretation differs from RR', pronunciation: 'HAZ-ard' },
        { term: 'proportional hazards', definition: 'Assumption that hazard ratio remains constant over time; required for Cox regression' },
        { term: 'baseline risk', definition: 'The underlying probability of an outcome in a specific population without intervention' },
        { term: 'icon array', definition: 'Visual tool showing affected individuals as icons out of a total (e.g., 100 figures)' },
        { term: 'framing effect', definition: 'Phenomenon where presentation format (gain vs loss) influences perception and decisions' },
      ],
      clinicalNotes: 'Always consider baseline risk when counseling patients. A treatment with NNT=20 in a high-risk patient may have NNT=200 in a low-risk patient. Risk calculators (e.g., ASCVD, Framingham) help individualize these conversations.',
    },
    4: {
      level: 4,
      summary: 'Advanced risk interpretation requires integrating epidemiological measures with individual patient factors, understanding statistical nuances, and applying decision-analytic frameworks.',
      explanation: `## Advanced Risk Concepts

### Attributable Risk Measures

**Attributable Risk (AR) in Exposed:**
- AR = Risk(exposed) - Risk(unexposed)
- Amount of disease attributable to exposure in exposed group
- Useful for individual patient counseling

**Population Attributable Risk (PAR):**
- PAR = Risk(population) - Risk(unexposed)
- Disease burden in population due to exposure
- Relevant for public health decisions

**Population Attributable Fraction (PAF):**
- PAF = (P_exposure × (RR-1)) / (1 + P_exposure × (RR-1))
- Proportion of disease in population attributable to exposure
- Used to estimate impact of exposure elimination

### Risk in Different Metrics

**Absolute Risk Difference vs. Ratio Measures:**
- Difference measures (ARR): Additive scale, preferred for clinical decisions
- Ratio measures (RR, OR): Multiplicative scale, often more consistent across populations

**The Risk Paradox:**
Relative measures often more transportable between populations, but absolute measures more clinically meaningful.

### Survival and Competing Risks

**Kaplan-Meier Estimates:**
- Accounts for censoring
- 1 - KM estimate = cumulative incidence (if no competing risks)

**Competing Risks:**
- Multiple potential outcomes (e.g., death from cancer vs. heart disease)
- KM may overestimate event probability when competing risks present
- Use cumulative incidence functions (CIF) instead
- Fine-Gray regression for subdistribution hazards

### Lead Time and Length Bias

**Lead Time Bias:**
- Screening advances diagnosis without changing outcome
- Survival appears longer even if death date unchanged
- Important for interpreting cancer screening benefits

**Length Bias:**
- Screening preferentially detects slow-growing disease
- Screen-detected cases appear to have better prognosis
- Confounds evaluation of screening programs

### NNT in Context

**NNT Time Horizon:**
- NNT = 1/(ARR over specific time period)
- 1-year NNT ≠ lifetime NNT
- Some report person-years NNT

**NNT for Preventing Events:**
- NNT for preventing one MI ≠ NNT for preventing one death
- Distinguish surrogate from patient-important outcomes

**Adjusted NNT:**
- Account for non-adherence: NNT_adjusted = NNT × adherence rate
- Account for competing mortality: NNT increases in elderly

### Decision Analysis Framework

**Expected Value Calculation:**
EV = Σ (probability × outcome value)

For treatment decision:
- EV(treat) = P(benefit) × benefit - P(harm) × harm - cost
- EV(no treat) = status quo value

**Incremental NNT and Cost-Effectiveness:**
- ICER = (Cost_A - Cost_B) / (Effect_A - Effect_B)
- Cost per QALY gained
- Compare to willingness-to-pay threshold

### Presenting Uncertainty

**Probabilistic Sensitivity Analysis:**
- Vary all parameters according to distributions
- Generate probability of cost-effectiveness at different thresholds
- Cost-effectiveness acceptability curves`,
      keyTerms: [
        { term: 'population attributable fraction', definition: 'Proportion of disease in a population attributable to an exposure; the reduction if exposure eliminated' },
        { term: 'competing risks', definition: 'Alternative events that preclude the outcome of interest (e.g., death from other cause)' },
        { term: 'cumulative incidence function', definition: 'Probability of an event by a given time, properly accounting for competing risks' },
        { term: 'lead time bias', definition: 'Apparent survival improvement from earlier diagnosis without actual life extension' },
        { term: 'length bias', definition: 'Overrepresentation of slow-growing disease in screening-detected cases' },
        { term: 'QALY', definition: 'Quality-Adjusted Life Year: combines quantity and quality of life; 1 QALY = 1 year in perfect health' },
        { term: 'ICER', definition: 'Incremental Cost-Effectiveness Ratio: cost per unit of health outcome gained' },
      ],
      clinicalNotes: 'When using risk prediction models (e.g., ASCVD risk score), recognize: (1) Models may not apply to your patient population, (2) Calibration may drift over time, (3) Individual risk factors not in model may modify risk. Risk communication should acknowledge uncertainty.',
    },
    5: {
      level: 5,
      summary: 'Expert risk interpretation integrates methodological considerations, causal inference frameworks, behavioral economics, and health equity perspectives into clinical and policy decision-making.',
      explanation: `## Methodological Considerations

### Measures of Association vs. Measures of Impact

**Measures of Association (Etiologic):**
- RR, OR, HR: Strength of exposure-outcome relationship
- Used for causal inference
- Compare exposed to unexposed

**Measures of Impact (Public Health):**
- PAF, AF, excess risk: Burden attributable to exposure
- Used for resource allocation
- Requires causal assumption

### Causal Interpretation Requirements
Association measures are causal estimates only when:
1. Confounding controlled (randomization or adequate adjustment)
2. Selection bias absent
3. Measurement error non-differential
4. No reverse causation

### The Table 2 Fallacy
- In multivariable models, only effect of interest is adjusted for confounders
- Other variables in model have different causal structures
- Cannot interpret all coefficients as causal effects
- Use DAGs to define adjustment sets for each variable of interest

### Effect Modification vs. Confounding

**Effect Modification (Interaction):**
- Effect of exposure differs across strata of modifier
- Describes biology/mechanism
- Report stratum-specific estimates
- Additive vs multiplicative scale determines public health vs etiologic relevance

**Confounding:**
- Third variable distorts exposure-outcome association
- Does not represent biology
- Control through design or analysis

### Measures on Additive vs. Multiplicative Scale

**Additive Interaction:**
- Examines whether combined effect exceeds sum of individual effects
- RERI (Relative Excess Risk due to Interaction)
- Relevant for identifying high-risk subgroups for intervention

**Multiplicative Interaction:**
- Examines whether combined effect exceeds product of individual effects
- Ratio of risk ratios
- Often statistical artifact of scale choice

Public health relevance typically on additive scale; biomedical mechanism may be multiplicative.

## Behavioral Perspectives on Risk

### Risk Perception Psychology
- Probability neglect: Focus on outcome severity, not likelihood
- Affect heuristic: Emotional response overrides probability
- Optimism bias: Underestimate personal risk
- Anchoring: Rely heavily on first information received

### Framing and Nudges
- Default effect: Opt-out vs opt-in
- Reference point: Status quo bias
- Loss aversion: Losses loom larger than gains
- Mental accounting: Separate considerations for different domains

### Shared Decision Making Integration
- Elicit patient values and risk tolerance
- Present natural frequencies (1 in 100 vs 1%)
- Use visual aids (icon arrays, risk ladders)
- Allow time for deliberation
- Document decision quality indicators

## Health Equity Considerations

### Risk Score Bias
Risk prediction models may:
- Underperform in underrepresented populations
- Embed historical disparities (e.g., race correction)
- Fail to capture social determinants
- Perpetuate unequal allocation of preventive care

**Example:** Removing race from eGFR calculations changed CKD staging for Black patients.

### Contextualizing Individual Risk
- Same absolute risk may warrant different decisions based on:
  - Access to care
  - Competing health priorities
  - Social support structures
  - Life context and goals

### Population vs. Individual Perspective
- High-risk strategy: Target interventions to high-risk individuals
- Population strategy: Shift entire risk distribution
- Both approaches may be needed
- Equity implications differ

## Contemporary Issues

### Personalized Risk Estimates
- Genetic risk scores (polygenic risk scores)
- Biomarker integration
- Machine learning risk models
- Dynamic risk (updated with new information)

Challenges: Validation across populations, clinical actionability, health equity implications

### Communicating Uncertainty
- Quantify model uncertainty (confidence intervals)
- Acknowledge unknowns (model transportability)
- Present range of scenarios
- Distinguish aleatory (random) from epistemic (knowledge-limited) uncertainty

### Risk in the Era of AI
- Algorithm transparency and explainability
- Calibration across populations
- Fairness definitions and tradeoffs
- Human-AI collaboration in risk communication`,
      keyTerms: [
        { term: 'Table 2 fallacy', definition: 'Erroneous causal interpretation of all coefficients in a multivariable model; each requires its own adjustment strategy' },
        { term: 'RERI', definition: 'Relative Excess Risk due to Interaction: measure of additive interaction on relative risk scale' },
        { term: 'probability neglect', definition: 'Cognitive tendency to focus on outcome severity while underweighting probability' },
        { term: 'polygenic risk score', definition: 'Aggregate score combining many genetic variants to estimate disease susceptibility' },
        { term: 'aleatory uncertainty', definition: 'Irreducible randomness inherent in a system' },
        { term: 'epistemic uncertainty', definition: 'Uncertainty due to limited knowledge that could be reduced with more information' },
      ],
      clinicalNotes: `Key practice points:
1. Report both relative and absolute measures; ensure patients understand the absolute impact
2. Contextualize NNT with time horizon and comparator
3. Use validated, calibrated risk tools appropriate for your patient population
4. Acknowledge limitations of risk prediction in individual decisions
5. Address health equity: consider whether tools apply to and benefit all patient populations equally
6. Employ evidence-based risk communication: natural frequencies, visual aids, checking understanding`,
    },
  },

  media: [
    {
      id: 'risk-icon-array',
      type: 'diagram',
      filename: 'risk-icon-array.svg',
      title: 'Icon Array for Risk Communication',
      description: 'Visual representation of 100 individuals showing treatment effect',
    },
    {
      id: 'nnt-calculator',
      type: 'diagram',
      filename: 'nnt-calculation.svg',
      title: 'NNT Calculation Guide',
      description: 'Step-by-step visual for calculating Number Needed to Treat',
    },
  ],

  citations: [
    {
      id: 'gigerenzer-risk',
      type: 'textbook',
      title: 'Calculated Risks: How to Know When Numbers Deceive You',
      authors: ['Gigerenzer, G.'],
      source: 'Simon & Schuster',
    },
    {
      id: 'stacey-decision-aids',
      type: 'article',
      title: 'Decision aids for people facing health treatment or screening decisions',
      source: 'Cochrane Database of Systematic Reviews',
      url: 'https://www.cochrane.org/CD001431/COMMUN_decision-aids-help-people-who-are-facing-health-treatment-or-screening-decisions',
    },
    {
      id: 'trevena-risk-communication',
      type: 'article',
      title: 'Presenting quantitative information about decision outcomes: a risk communication primer',
      source: 'BMC Medical Informatics and Decision Making',
    },
  ],

  crossReferences: [
    { targetId: 'concept-understanding-statistics', targetType: 'concept', relationship: 'related', label: 'Understanding Statistics' },
    { targetId: 'concept-shared-decision-making', targetType: 'concept', relationship: 'related', label: 'Shared Decision Making' },
    { targetId: 'concept-study-design-types', targetType: 'concept', relationship: 'related', label: 'Study Design Types' },
  ],

  tags: {
    systems: ['evidence-based-medicine'],
    topics: ['risk communication', 'biostatistics', 'clinical decision making'],
    keywords: ['NNT', 'NNH', 'relative risk', 'absolute risk', 'risk reduction'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default understandingRisk;
