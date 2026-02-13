/**
 * Health Numeracy - Numbers, Statistics, and Risk Communication
 *
 * Covers health numeracy skills, risk communication strategies,
 * and helping patients understand numerical health information.
 */

import { EducationalContent } from '../types';

export const healthNumeracy: EducationalContent = {
  id: 'health-literacy-numeracy',
  type: 'concept',
  name: 'Health Numeracy',
  alternateNames: ['Health Math Skills', 'Risk Communication', 'Understanding Medical Numbers', 'Quantitative Health Literacy'],

  levels: {
    1: {
      level: 1,
      summary: 'Health numeracy is the ability to understand numbers in healthcare - like medicine doses, test results, and risk - so you can make good health decisions.',
      explanation: `**What is Health Numeracy?**

Health numeracy means understanding numbers that are important for your health. It includes:
- Reading medicine labels correctly
- Understanding test results
- Knowing what "risk" means
- Comparing treatment choices

**Why Numbers in Healthcare Matter:**

When you understand health numbers:
- You take the right amount of medicine
- You know when to be worried about test results
- You can make good choices about treatments
- You understand your real risk for health problems

**Examples of Health Numbers:**

**Medicine Numbers:**
- "Take 2 pills, 3 times a day" = 6 pills total each day
- "Take 1 teaspoon" = use a measuring spoon, not any spoon
- "Refills: 3" = you can get this medicine 3 more times

**Test Result Numbers:**
- Blood pressure: 120/80 is normal
- Blood sugar: 100 or less is normal (when fasting)
- Cholesterol: Below 200 is good
- Temperature: 98.6°F is normal

**Risk Numbers:**
- "1 in 10 people" means out of 100 people, 10 will have it
- "5% chance" means 5 out of 100 people
- "Doubles your risk" means 2 times more likely

**Tips for Understanding Health Numbers:**

1. **Ask for examples**: "What does this number mean in real life?"

2. **Ask them to show you**: "Can you show me what this amount looks like?"

3. **Use pictures**: Ask for a chart or diagram

4. **Bring help**: Have a family member come to appointments

5. **Write it down**: Ask the doctor to write down important numbers

**Important Questions to Ask:**

- "What do these numbers mean for my health?"
- "Is this number good or bad?"
- "What would you do if this was your family member?"
- "Can you explain this number in a different way?"

**Remember:** It's okay to ask for help understanding numbers! Doctors and nurses want you to understand your health information.`,
      keyTerms: [
        { term: 'health numeracy', definition: 'The ability to understand and use numbers in health information and decisions' },
        { term: 'risk', definition: 'The chance that something will happen' },
        { term: 'test results', definition: 'Numbers from medical tests that show how your body is working' },
      ],
      analogies: [
        'Understanding health numbers is like understanding the score in a game - it tells you how you are doing',
        'Risk is like weather forecasting - there a chance of rain, but it might not happen',
      ],
      examples: [
        'If medicine says "take 5 mL twice daily," you need to know 5 mL is about one teaspoon',
        'If your risk is "1 in 100," it means out of 100 people, 99 will be fine and 1 will have the problem',
      ],
      patientCounselingPoints: [
        'Always use specific examples: "out of 100 people like you..."',
        'Use visual aids for numbers (charts, diagrams)',
        'Ask patients to explain back what the numbers mean',
        'Give written instructions with numbers clearly written',
      ],
    },
    2: {
      level: 2,
      summary: 'Health numeracy is the ability to understand and use numerical information for health decisions, including medication dosing, interpreting test results, and understanding risk.',
      explanation: `## What is Health Numeracy?

Health numeracy is the ability to:
- Understand numbers and probabilities
- Perform basic calculations
- Interpret numerical health information
- Use numbers to make health decisions

**Why Health Numeracy Matters:**

Many patients struggle with health-related numbers:
- Only about 50% of adults can correctly interpret a 5% risk
- Difficulty understanding medication dosing
- Confusion about test results
- Challenges comparing treatment options

## Types of Numeracy Skills

**1. Basic Arithmetic**
- Addition and subtraction
- Multiplication and division
- Understanding decimals and fractions
- Calculating doses and timing

**2. Understanding Probabilities**
- Percentages
- Fractions
- "1 in X" format
- Chance and risk

**3. Interpreting Data**
- Reading charts and graphs
- Understanding normal ranges
- Comparing values over time
- Recognizing trends

**4. Time-Based Calculations**
- Medication schedules
- Timing of doses
- Duration of treatment
- Follow-up intervals

## Medication Numeracy

**Common Challenges:**

*Dosage Calculations:*
- "Take 2 tablets twice daily" = 4 tablets total
- "5 mL" = 1 teaspoon (not a household spoon)
- "Take every 8 hours" = 3 times per day
- "Take with food" = eat something when taking medicine

*Refills and Duration:*
- "30-day supply" with "1 tablet daily" = 30 tablets
- "2 refills" = can get medicine 3 times total (original + 2 refills)
- "Take until gone" vs "take for 10 days"

*Conversions:*
- 1 teaspoon = 5 mL
- 1 tablespoon = 15 mL
- 1 ounce = 30 mL
- 1 cup = 240 mL

## Test Results

**Understanding Reference Ranges:**

Blood Pressure:
- Normal: Less than 120/80
- Elevated: 120-129 / less than 80
- High: 130/80 or higher

Blood Sugar (Glucose):
- Fasting normal: Less than 100 mg/dL
- Fasting prediabetes: 100-125 mg/dL
- Fasting diabetes: 126 mg/dL or higher

Cholesterol:
- Total normal: Less than 200 mg/dL
- LDL "bad" normal: Less than 100 mg/dL
- HDL "good": 60 mg/dL or higher

**Understanding "Normal" Ranges:**
- Labs show the reference range
- Your result is compared to this range
- Slightly outside range may be okay for you
- Context matters (age, health conditions)

## Risk Communication

**Formats Matter:**

| Format | Example | Understanding |
|--------|---------|---------------|
| Percentage | "5% risk" | Many find this abstract |
| "1 in X" | "1 in 20" | More concrete |
| Natural frequency | "5 out of 100" | Easiest to understand |
| Visual | 5 red in 100 figures | Most effective |

**Common Risk Confusion:**

*Absolute vs Relative Risk:*
- Drug reduces risk from 4% to 2%
- Relative: "Cuts risk by 50%" (sounds amazing!)
- Absolute: "Helps 2 extra people out of 100" (less impressive)
- Both true, but very different meanings!

*Number Needed to Treat (NNT):*
- How many people must take treatment for ONE to benefit
- NNT of 10 = treat 10 people to help 1 person
- NNT of 50 = treat 50 people to help 1 person
- Lower NNT = more effective treatment

## Communication Strategies

**Use Natural Frequencies:**
- Instead of: "20% risk"
- Say: "20 out of 100 people"

**Use Visual Aids:**
- Icon arrays (100 people figures)
- Risk ladders (comparing risks)
- Bar charts
- Pie charts (carefully)

**Provide Context:**
- Compare to familiar risks
- Show timeframe (over 5 years vs lifetime)
- Use concrete examples

**Avoid Confusion:**
- Don't use both fractions and percentages
- Don't switch between formats
- Be consistent with denominators
- Avoid decimals when possible

## Checking Numeracy Understanding

**Teach-Back for Numbers:**
- "If you need to take 2 pills twice a day, how many will you take each day?"
- "If your dose is 5 mL, how many teaspoons is that?"
- "What does this 5% risk mean to you?"

**Demonstration:**
- Have patient measure out liquid medication
- Show with pill organizer
- Draw on calendar or clock
- Use actual medication device

## Common Numeracy Tasks Patients Face

**Managing Diabetes:**
- Blood glucose numbers (target ranges)
- Carbohydrate counting
- Insulin dose calculations
- A1c interpretation

**Blood Pressure Monitoring:**
- Reading the monitor
- Understanding two numbers
- Tracking over time
- Knowing when to call doctor

**Medication Management:**
- Timing of doses
- Calculating refills needed
- Splitting pills (if appropriate)
- Understanding strength changes

**Understanding Statistics:**
- Survival rates
- Response rates
- Side effect frequencies
- Screening test accuracy`,
      keyTerms: [
        { term: 'health numeracy', definition: 'Ability to understand and use numerical information for health decisions', pronunciation: 'NOO-mer-see' },
        { term: 'absolute risk', definition: 'The actual chance of something happening, expressed as a percentage or count' },
        { term: 'relative risk', definition: 'Comparison of risks between two groups; can be misleading' },
        { term: 'natural frequency', definition: 'Expressing probability as "X out of Y people" rather than percentage' },
        { term: 'NNT', definition: 'Number Needed to Treat; how many people treated for one to benefit' },
        { term: 'reference range', definition: 'The set of values considered normal for a lab test' },
      ],
      analogies: [
        'Absolute risk is like telling you exactly how many people are in a room',
        'Relative risk is like saying "twice as many" without telling you the starting number',
        'Natural frequencies are like showing people rather than giving percentages',
      ],
      patientCounselingPoints: [
        'Always use the same number format (don mix percentages and fractions)',
        'Use "out of 100 people" rather than percentages',
        'Provide visual aids for numerical information',
        'Check understanding with teach-back focused on numbers',
      ],
    },
    3: {
      level: 3,
      summary: 'Health numeracy encompasses the skills to understand, interpret, and apply numerical information in healthcare contexts, including probability, data interpretation, and risk communication.',
      explanation: `## Definition and Scope

**Health Numeracy:**
"The degree to which individuals have the capacity to access, process, interpret, communicate, and act on numerical, quantitative, graphical, biostatistical, and probabilistic health information needed to make effective health decisions."

**Key Components:**
1. Computational skills (basic math)
2. Inferential skills (drawing conclusions)
3. Evaluative skills (assessing credibility)
4. Communication skills (talking about numbers)

## Prevalence and Impact

**Numeracy in the Population:**
- Only about 30% of adults are proficient in numeracy
- Nearly 50% have difficulty with basic probability tasks
- Numeracy often lower than literacy
- Mathematical anxiety common

**Clinical Impact:**
- Poorer understanding of test results
- Difficulty managing medications
- Challenges with risk-benefit decisions
- Worse chronic disease management
- Lower preventive care utilization

## Probability and Risk Concepts

**Understanding Probability:**

*Formats:*
- Percentage: 5% (common but abstract)
- Decimal: 0.05 (confusing for many)
- Fraction: 1/20 (requires calculation)
- Natural frequency: 5 out of 100 (most intuitive)

*Conversion Examples:*
- 1% = 1 in 100 = 10 in 1000
- 10% = 1 in 10 = 10 in 100 = 100 in 1000
- 0.1% = 1 in 1000 (very small risk)
- 50% = 1 in 2 = 50 in 100

**Risk Communication Challenges:**

*Single-Event Probabilities:*
- "You have a 20% risk of side effects"
- Confusing: Which event? Over what time?
- Better: "20 out of 100 people experience..."

*Conditional Probabilities:*
- False positive rate vs positive predictive value
- Sensitivity vs specificity
- Often misunderstood even by clinicians
- Use natural frequencies instead

## Data Interpretation

**Reading Tables and Charts:**
- Understanding axes and labels
- Interpreting trends over time
- Comparing values
- Recognizing normal vs abnormal

**Laboratory Values:**
- Reference ranges and what they mean
- Unit conversions (mg/dL vs mmol/L)
- Within vs outside normal range
- Clinical significance of abnormalities

**Growth Charts:**
- Percentiles (5th, 50th, 95th)
- Tracking over time
- Comparing to norms
- Crossing percentiles

**Blood Pressure Readings:**
- Systolic (top number) vs diastolic (bottom)
- Categories and thresholds
- Variability and home monitoring
- White coat effect

## Medication Numeracy

**Dose Calculations:**

*Solid Medications:*
- Tablets/capsules per dose
- Doses per day = tablets per day
- Supply duration = total tablets / tablets per day
- Example: 2 tablets × twice daily = 4 tablets/day
- 30 tablets ÷ 4 tablets/day = 7.5 days supply

*Liquid Medications:*
- Volume measurements (mL, teaspoons, tablespoons)
- Concentration (mg/mL)
- Dose in mL = desired dose (mg) / concentration (mg/mL)
- Example: Need 250mg, have 125mg/5mL → 10mL needed

**Insulin Calculations:**
- Insulin-to-carb ratio
- Correction factor/sensitivity
- Total daily dose calculations
- Carbohydrate counting

**Medication Timing:**
- Every 8 hours = 3 times/day
- Every 12 hours = twice daily
- "Take with food" = within 30 minutes of eating
- "On empty stomach" = 1 hour before or 2 hours after eating

## Statistical Literacy

**Understanding Screening Tests:**

*Sensitivity:*
- True positive rate
- "Of people WITH the condition, how many test positive?"
- High sensitivity = good at ruling out (SNOUT)

*Specificity:*
- True negative rate
- "Of people WITHOUT the condition, how many test negative?"
- High specificity = good at ruling in (SPIN)

*False Positives:*
- Test says positive but condition absent
- Common in screening (low prevalence)
- Can cause anxiety and unnecessary testing

*Positive Predictive Value:*
- Probability that positive test is correct
- Depends on prevalence and test characteristics
- Often lower than people expect

**Understanding Study Results:**

*Relative Risk (RR):*
- Risk in exposed/risk in unexposed
- RR=2 means twice the risk
- Doesn't tell you absolute risk

*Absolute Risk Reduction (ARR):*
- Difference in risk between groups
- More clinically meaningful
- Used to calculate NNT

*Number Needed to Treat (NNT):*
- NNT = 1/ARR
- How many treated for one to benefit
- Context needed for interpretation

## Communication Strategies

**Best Practices:**

1. **Use Consistent Denominators**
   - "15 out of 100" and "5 out of 100" (both out of 100)
   - Not: "15%" and "1 in 20"

2. **Provide Context**
   - Compare to familiar risks
   - Show timeframe clearly
   - Use relevant population

3. **Use Visual Aids**
   - Icon arrays (100 people)
   - Bar charts
   - Risk ladders
   - Before/after graphics

4. **Avoid Confusing Formats**
   - Don't use percentages and decimals together
   - Don't mix fractions and percentages
   - Avoid "times more likely" without baseline

**Evaluating Understanding:**

- Ask patient to interpret numbers
- Use teach-back for numerical concepts
- Have patient perform calculations
- Demonstrate with actual devices

## Special Situations

**Diabetes Management:**
- Blood glucose targets
- A1c as average blood sugar
- Carbohydrate counting
- Insulin dose calculations

**Anticoagulation:**
- INR target range
- Dose adjustments based on INR
- Diet interactions (vitamin K)
- Missed dose protocols

**Asthma:**
- Peak flow zones
- Percentage of personal best
- When to use rescue inhaler
- Spirometry interpretation

**Cardiovascular Risk:**
- 10-year risk scores
- Absolute vs relative risk reduction
- NNT for statins
- Lifestyle impact numbers`,
      keyTerms: [
        { term: 'natural frequency', definition: 'Expressing probability as "X out of Y" rather than percentage or decimal' },
        { term: 'sensitivity', definition: 'Proportion of people with condition who test positive; true positive rate' },
        { term: 'specificity', definition: 'Proportion of people without condition who test negative; true negative rate' },
        { term: 'positive predictive value', definition: 'Probability that a person with positive test actually has the condition' },
        { term: 'absolute risk reduction', definition: 'Difference in event rates between treatment and control groups' },
        { term: 'relative risk', definition: 'Ratio of risk in exposed vs unexposed groups' },
        { term: 'NNT', definition: 'Number Needed to Treat; patients treated for one to benefit (1/ARR)' },
        { term: 'SNOUT', definition: 'When Sensitivity is high, Negative test rules OUT condition' },
        { term: 'SPIN', definition: 'When Specificity is high, Positive test rules IN condition' },
      ],
      clinicalNotes: `Key principles for numerical communication:

1. Use natural frequencies (X out of 100)
2. Keep denominators consistent
3. Always provide absolute risk, not just relative
4. Use visual aids (icon arrays, risk ladders)
5. Provide context and timeframe
6. Check understanding with teach-back
7. Be precise with timing instructions
8. Demonstrate calculations with real examples

Remember: Numeracy skills are independent of intelligence and education. Many highly educated people struggle with numerical concepts.`,
    },
    4: {
      level: 4,
      summary: 'Health numeracy requires understanding probability, data interpretation, and risk communication strategies. Clinicians must use evidence-based approaches to help patients comprehend and act on numerical health information.',
      explanation: `## Theoretical Framework

**Cognitive Psychology of Numeracy:**

*Number Sense:*
- Innate ability to approximate quantities
- Exact numerical processing requires learned skills
- Magnitude representation (numerical distance effect)
- Ratio processing abilities

*Dual Systems of Thinking:*
- System 1: Fast, intuitive, approximate
- System 2: Slow, deliberate, exact
- Numeracy requires System 2 engagement
- System 1 often leads to numerical biases

*Frequency Format Hypothesis:*
- Humans evolved to process natural frequencies
- Percentages and probabilities are recent inventions
- Natural frequencies more easily processed
- Reduces computational complexity

**Numeracy-Related Biases:**

*Denominator Neglect:*
- Focus on numerator, ignore denominator
- "1 in 100" vs "10 in 1000" (same) perceived differently
- More likely to choose larger numerator
- Affects treatment decisions

*Base Rate Neglect:*
- Ignore underlying prevalence
- Overestimate individual probability
- Critical for understanding screening tests
- Affects risk perception

*Conjunction Fallacy:*
- Believe combined events more likely than components
- "Pneumonia and low oxygen" perceived as more likely than "pneumonia"
- Violates probability rules
- Affects diagnostic reasoning

*Framing Effects:*
- "90% survival" vs "10% mortality"
- Different presentations, different decisions
- Losses loom larger than gains
- Affects treatment choices

## Advanced Risk Communication

**Visual Risk Display:**

*Icon Arrays:*
- Most effective evidence-based format
- Use 100 or 1000 icons
- Affected individuals highlighted
- Reduces denominator neglect
- Works across numeracy levels

*Risk Ladders:*
- Order risks from low to high
- Include familiar reference risks
- Show magnitude context
- Can be personal or population

*Survival Curves:*
- Time-to-event display
- Cumulative incidence over time
- Can show treatment effects
- Requires explanation

*Forest Plots:*
- Multiple study comparisons
- Confidence intervals
- Heterogeneity visualization
- Too complex for many patients

**Communicating Uncertainty:**

*Confidence Intervals:*
- Range of plausible values
- Narrower = more precise
- Can be shown graphically
- "Best guess plus/minus uncertainty"

*Probability Words:*
- "Likely," "possible," "rare" are ambiguous
- Different people interpret differently
- Use numerical ranges when possible
- Calibrate with examples

## Test Characteristics

**Screening Test Math:**

*2x2 Table:*
| | Disease+ | Disease- |
|---|---|---|
| Test+ | True Positive (a) | False Positive (b) |
| Test- | False Negative (c) | True Negative (d) |

*Definitions:*
- Sensitivity = a/(a+c) (TP rate)
- Specificity = d/(b+d) (TN rate)
- PPV = a/(a+b) (probability disease if test+)
- NPV = d/(c+d) (probability healthy if test-)
- Prevalence = (a+c)/(a+b+c+d)

*Using Natural Frequencies:*
"Out of 1000 people tested:"
- 100 have disease (10% prevalence)
- Of those 100: 90 test positive (90% sensitivity)
- Of the 900 healthy: 90 test positive (90% specificity)
- So: 90 true positives, 90 false positives
- PPV = 90/180 = 50% (only half of positive tests are true!)

**Likelihood Ratios:**
- LR+ = Sensitivity/(1-Specificity)
- LR- = (1-Sensitivity)/Specificity
- Pre-test odds × LR = Post-test odds
- Useful for sequential testing

## Numeracy Assessment

**Subjective Numeracy Scale:**
- Self-report measure
- 4-8 questions
- Correlates with objective measures
- Less threatening than testing

**Objective Measures:**

*Expanded Numeracy Scale (Schapira et al.):*
- Percentage to frequency conversion
- Probability comparisons
- Probability to frequency
- Relative vs absolute risk
- Baseline risk understanding

*Berlin Numeracy Test:*
- Adaptive difficulty
- Efficient assessment
- Strongly predictive of risk comprehension
- Translated to multiple languages

## Clinical Applications

**Cardiovascular Risk:**
- ASCVD risk calculator output
- 10-year risk percentage
- Relative vs absolute risk reduction
- NNT for statins
- Lifetime risk context

**Cancer Screening:**
- Sensitivity and specificity
- False positive rate
- Number needed to screen
- Overdiagnosis
- Lead-time bias

**Genetic Risk:**
- Penetrance (probability of disease if carrier)
- Relative risk from mutations
- Absolute risk with and without mutation
- Family history impact
- Risk-reducing interventions

**Treatment Decisions:**
- ARR and NNT
- NNH (number needed to harm)
- Likelihood of benefit vs harm
- Time frame for benefit
- Quality of life impact

## Special Populations

**Low Numeracy:**
- Use only natural frequencies
- Always provide visual aids
- Avoid percentages and decimals
- Consistent denominators
- Check understanding thoroughly

**High Numeracy:**
- Can handle more complex formats
- Want detailed statistics
- Appreciate confidence intervals
- Benefit from decision aids
- Still need clear framing

**Math Anxiety:**
- Common and affects performance
- Can interfere with learning
- Create supportive environment
- Emphasize understanding over calculation
- Provide tools and aids

## Communication Challenges

**What Clinicians Get Wrong:**

*Focusing on Relative Risk:*
- "50% reduction" sounds amazing
- But what's absolute risk?
- May mislead patients
- Always provide both

*Using Small Denominators:*
- "1 in 3" sounds more frequent than "33 in 100"
- Affects perception
- Use consistent, preferably 100 or 1000

*Ignoring Time Frame:*
- "Risk of side effect is 10%"
- Over what period? Lifetime? Year? Single dose?
- Always specify timeframe

*Omitting Context:*
- "Your risk is 20%"
- Compared to what?
- Higher or lower than average?
- Context essential for interpretation

**Effective Strategies:**

*Event Rates:*
"Out of 100 people like you:"
- X will have the outcome untreated
- Y will have the outcome treated
- So X-Y people benefit from treatment

*Visual Context:*
Show:
- Your risk on a risk ladder
- Icon array showing affected people
- Your risk compared to familiar risks

*Personalized:*
- Use patient-specific data when possible
- Show patient's values over time
- Compare to patient's previous results

## Implementation

**Workflow Integration:**
- Pre-visit: Risk calculators, personalized reports
- During visit: Visual aids, teach-back on numbers
- Post-visit: Written summary with numerical information
- Patient portal: Trend displays, risk assessments

**Documentation:**
- Numerical information provided
- Patient understanding demonstrated
- Visual aids used
- Questions asked and answered

**Quality Improvement:**
- Use of natural frequency language
- Visual aid utilization
- Teach-back for numerical concepts
- Patient understanding assessments`,
      keyTerms: [
        { term: 'denominator neglect', definition: 'Cognitive bias of focusing on numerators while ignoring denominators' },
        { term: 'base rate neglect', definition: 'Tendency to ignore population prevalence when judging probabilities' },
        { term: 'conjunction fallacy', definition: 'Erroneous belief that combined events are more likely than individual events' },
        { term: 'frequency format hypothesis', definition: 'Theory that natural frequencies are more easily processed than probabilities' },
        { term: 'likelihood ratio', definition: 'Ratio of test probability in diseased vs healthy patients; used in Bayesian reasoning' },
        { term: 'pre-test odds', definition: 'Probability of having condition before test result, expressed as odds' },
        { term: 'post-test odds', definition: 'Probability of having condition after test result, expressed as odds' },
      ],
      clinicalNotes: `Evidence-based practices:

1. Always use natural frequencies (X out of 100)
2. Provide both absolute and relative risk
3. Use icon arrays for risk communication
4. Check numerical understanding with teach-back
5. Consistent denominators
6. Always specify time frames
7. Provide context and comparisons
8. Use visual aids for all numerical information

Remember: Even highly educated patients often struggle with numerical concepts. Clear, visualized communication benefits everyone.`,
    },
    5: {
      level: 5,
      summary: 'Health numeracy requires sophisticated understanding of probability, statistics, and risk communication, with evidence-based approaches to mitigate cognitive biases and support informed decision-making.',
      explanation: `## Comprehensive Theoretical Framework

**Cognitive Science of Numeracy:**

*Evolutionary Perspective:*
- Approximate number system (ANS) is innate
- Exact number processing is cultural invention
- Humans evolved to process small, concrete quantities
- Abstract probabilities (0.037) are evolutionarily novel

*Dual Process Theory Application:*
- System 1: Heuristic, fast, approximate (natural frequencies)
- System 2: Analytic, slow, exact (probabilities, calculations)
- Numeracy tasks require System 2 engagement
- System 1 heuristics often lead to errors in numerical reasoning

*Fuzzy-Trace Theory:*
- People store both verbatim and gist representations
- Gist (simple meaning) often drives decisions
- Risk communication should emphasize meaningful patterns
- Categorical gist (some vs none) often more useful than exact numbers

**Numeracy and Decision Theory:**

*Expected Utility Theory:*
- Rational choice maximizes expected utility
- Requires accurate probability assessment
- Numeracy affects ability to calculate expected value
- Low numeracy leads to suboptimal decisions

*Prospect Theory:*
- Reference points matter (losses loom larger than gains)
- Diminishing sensitivity to changes
- Probability weighting function (small probabilities overweighted)
- Numeracy moderates these effects

**Bayesian Reasoning:**

*Natural Frequency Advantage:*
Standard Bayesian format:
P(D|+) = P(+|D)×P(D) / [P(+|D)×P(D) + P(+|~D)×P(~D)]

Natural frequency format:
- Out of 1000 people: 100 have disease
- Of 100 with disease: 90 test positive
- Of 900 without disease: 90 test positive
- P(D|+) = 90/(90+90) = 0.5

The computation is identical but format matters tremendously!

## Advanced Numeracy Concepts

**Risk Perception and Communication:**

*Affect Heuristic:*
- Emotions drive risk perception
- "Dread risk" vs "unknown risk"
- Affect-rich risks are overestimated
- Numeracy may moderate but not eliminate

*Availability Heuristic:*
- Easier-recalled events seem more frequent
- Media coverage affects perception
- Personal experience dominates
- Affects statistical reasoning

*Optimism Bias:*
- People underestimate personal risk
- "Other people, not me"
- Affects preventive behavior
- Challenging to address with statistics

*Confirmation Bias:*
- Notice information confirming beliefs
- Ignore contradictory statistics
- Numeracy may increase motivated reasoning
- Statistics used to support prior beliefs

**Statistical Literacy in Medicine:**

*P Values and Statistical Significance:*
- P < 0.05 is arbitrary threshold
- Does not indicate clinical importance
- Often misinterpreted
- Confidence intervals more informative

*Confidence Intervals:*
- Range of plausible values
- Narrower = more precise
- 95% CI means 95% would contain true value if repeated
- Overlapping CIs may not mean non-significant difference

*Number Needed to Treat (NNT) Nuances:*
- Time-dependent (1-year NNT vs 5-year NNT)
- Context-dependent (baseline risk matters)
- Comparison-dependent (vs placebo vs active)
- Should report with confidence intervals

*Hazard Ratios:*
- Instantaneous risk ratio
- Assumes proportional hazards
- Different from risk ratio
- Time-to-event data

## Screening and Diagnostic Test Interpretation

**Bayesian Reasoning in Practice:**

*Positive Predictive Value Formula:*
PPV = (Sensitivity × Prevalence) / [Sensitivity × Prevalence + (1-Specificity) × (1-Prevalence)]

*Key Insight:*
- Low prevalence → Low PPV even with good tests
- High prevalence → Higher PPV
- Why screening rare diseases yields many false positives

*Clinical Example:*
Test: 99% sensitive, 99% specific (sounds great!)
Prevalence: 1 in 1000

Out of 100,000 people screened:
- 100 have disease, 99,900 don't
- True positives: 100 × 0.99 = 99
- False positives: 99,900 × 0.01 = 999
- PPV = 99/(99+999) = 9%

Only 9% of positive tests are true!

**Lead-Time and Length Bias:**

*Lead-Time Bias:*
- Screening advances diagnosis
- Survival appears longer
- But death time unchanged
- Important for understanding screening benefits

*Length Bias:*
- Screening detects slow-growing disease
- Screen-detected cases have better prognosis
- Survival advantage artifact
- Affects screening effectiveness assessment

**Overdiagnosis:**
- Detection of disease that would never cause symptoms
- Varies by condition and test
- Hard to quantify
- Critical for informed consent

## Evidence-Based Communication Strategies

**Format Effects:**

*Visual Aids Evidence:*
- Icon arrays: Effect size g ~0.5-0.7
- Risk ladders: Particularly effective for comparisons
- Bar charts: Good for comparisons
- Pie charts: Generally poor for precise values
- Avoid: 3D effects, unnecessary decoration

*Framing Effects:*
- Survival vs mortality framing matters
- Losses loom larger than gains
- Framing inconsistent across people
- Present both perspectives when possible

*Social Norm Comparisons:*
- "Most people like you..."
- Can motivate behavior change
- Can backfire if norm is unhealthy
- Requires careful use

**Debiasing Strategies:**

*For Denominator Neglect:*
- Always use consistent denominators
- Prefer 100 or 1000
- Visual displays with all icons shown
- Explicit denominator focus

*For Base Rate Neglect:*
- Emphasize prevalence clearly
- Use natural frequencies showing base rate
- Provide population context
- Show both incidence and prevalence

*For Conjunction Fallacy:*
- Explain that combined events less likely
- Use numerical demonstrations
- Show that more specific ≠ more likely

## Specialized Contexts

**Genomic Risk Communication:**

*Penetrance:*
- Probability of disease given mutation
- Varies by gene and condition
- Often overestimated
- Lifetime vs age-specific

*Polygenic Risk Scores:*
- Aggregate genetic risk
- Population-derived percentiles
- Clinical actionability varies
- Communication challenges

*Family Implications:*
- Cascade testing implications
- Reproductive decision-making
- Genetic discrimination concerns
- Insurance implications

**Predictive Analytics and Machine Learning:**

*Risk Score Communication:*
- Black-box model concerns
- Calibration vs discrimination
- Dynamic vs static risk
- Individualization vs generalization

*Explainable AI:*
- Feature importance displays
- Case-based reasoning
- Counterfactual explanations
- Visual decision aids

**Public Health Numeracy:**

*Population Risk Communication:*
- Absolute vs relative risk for populations
- Attributable risk
- Population attributable fraction
- Prevention paradox

*Epidemiological Concepts:*
- Incidence vs prevalence
- Mortality vs case-fatality
- Years of potential life lost
- Quality-adjusted life years

## Implementation Science

**Numeracy-Sensitive Health Systems:**

*Design Principles:*
- Assume limited numeracy
- Default to simplest appropriate format
- Always provide visual aids
- Use consistent conventions
- Test with target population

*Clinical Decision Support:*
- Risk calculators with visual output
- Natural frequency displays
- Threshold notifications
- Ordering aids

*Patient Education Materials:*
- Numeracy assessment
- Plain language numbers
- Visual aids integrated
- Teach-back prompts

**Measurement and Evaluation:**

*Assessment Instruments:*
- Expanded Numeracy Scale
- Berlin Numeracy Test
- Subjective Numeracy Scale
- Lipkus numeracy scale
- Domain-specific measures

*Outcome Measures:*
- Understanding assessments
- Decision quality measures
- Behavioral adherence
- Clinical outcomes
- Satisfaction with communication

## Research Frontiers

**Numeracy Interventions:**
- Can numeracy be improved?
- Effective training strategies
- Long-term retention
- Transfer to health contexts
- Technology-enhanced learning

**Personalized Risk Communication:**
- Tailoring to numeracy level
- Adaptive information presentation
- Just-in-time information delivery
- Mobile health applications

**Equity Considerations:**
- Numeracy disparities by SES, race/ethnicity
- Cumulative disadvantage
- Impact on health disparities
- Interventions to reduce gaps

**Emerging Challenges:**
- Direct-to-consumer genetic testing
- Quantified self movement
- Personal health devices
- Infodemic and health misinformation
- AI-generated health information`,
      keyTerms: [
        { term: 'approximate number system', definition: 'Innate cognitive system for estimating quantities without exact counting' },
        { term: 'fuzzy-trace theory', definition: 'Theory that people store both verbatim details and gist representations; gist often drives decisions' },
        { term: 'prospect theory', definition: 'Behavioral economic theory describing how people make decisions under risk' },
        { term: 'hazard ratio', definition: 'Ratio of hazard rates between groups; measures instantaneous risk over time' },
        { term: 'lead-time bias', definition: 'Apparent survival improvement from earlier diagnosis without actual life extension' },
        { term: 'length bias', definition: 'Overrepresentation of slow-growing cases in screening-detected disease' },
        { term: 'overdiagnosis', definition: 'Detection of disease that would never cause symptoms or death' },
        { term: 'penetrance', definition: 'Proportion of individuals with a specific genetic variant who exhibit associated symptoms' },
      ],
      clinicalNotes: `Advanced practice recommendations:

1. Use natural frequencies (X out of 100) for all probability communication
2. Provide icon arrays for any risk discussion
3. Always show absolute risk, not just relative
4. Check understanding of numerical concepts with teach-back
5. Be aware of common cognitive biases that affect numerical reasoning
6. Use consistent denominators (preferably 100 or 1000)
7. Always specify timeframe for risks
8. Use visual displays for any numerical information
9. Provide context and comparisons for risk magnitude
10. Document numerical information provided and patient understanding

Remember: Numeracy skills are independent of intelligence and education. Even highly educated professionals often struggle with numerical concepts in healthcare contexts.`,
    },
  },

  media: [
    {
      id: 'icon-array-risk-communication',
      type: 'diagram',
      filename: 'icon-array-risk-communication.svg',
      title: 'Icon Array for Risk Communication',
      description: '100-person icon array with 15 individuals highlighted in red to show 15% risk',
    },
    {
      id: 'absolute-vs-relative-risk',
      type: 'diagram',
      filename: 'absolute-vs-relative-risk.svg',
      title: 'Absolute vs Relative Risk Comparison',
      description: 'Visual comparison showing same relative risk reduction with different absolute risks',
    },
  ],

  citations: [
    {
      id: 'lipkus-numeracy',
      type: 'article',
      title: 'Numeric, Verbal, and Visual Formats of Conveying Health Risks: Survey of Medical and Lay Perceptions',
      authors: ['Lipkus, I.M.', 'Samsa, G.', 'Rimer, B.K.'],
      source: 'Medical Decision Making',
    },
    {
      id: 'gigerenzer-calculated-risks',
      type: 'textbook',
      title: 'Calculated Risks: How to Know When Numbers Deceive You',
      authors: ['Gigerenzer, G.'],
      source: 'Simon & Schuster',
    },
    {
      id: 'peters-numeracy-decisions',
      type: 'article',
      title: 'Numeracy and Decision Making: A Systematic Review',
      authors: ['Peters, E.', 'Hibbard, J.', 'Slovic, P.', 'et al.'],
      source: 'Medical Decision Making',
    },
    {
      id: 'wiss-communicating-risk',
      type: 'article',
      title: 'Communicating Risk: The Influence of Numeracy and Domain on the Interpretation of Graph Formats',
      authors: ['Wiss, J.', 'Meilleur, L.'],
      source: 'Risk Analysis',
    },
  ],

  crossReferences: [
    { targetId: 'health-literacy-basics', targetType: 'concept', relationship: 'related', label: 'Health Literacy Basics' },
    { targetId: 'health-literacy-visual-aids', targetType: 'concept', relationship: 'related', label: 'Visual Aids' },
    { targetId: 'concept-understanding-risk', targetType: 'concept', relationship: 'related', label: 'Understanding Risk' },
    { targetId: 'health-literacy-informed-consent', targetType: 'concept', relationship: 'related', label: 'Informed Consent' },
  ],

  tags: {
    systems: ['communication-skills'],
    topics: ['health literacy', 'numeracy', 'risk communication', 'statistics', 'patient understanding'],
    keywords: ['numeracy', 'risk communication', 'statistics', 'probability', 'health numbers', 'icon arrays'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default healthNumeracy;
