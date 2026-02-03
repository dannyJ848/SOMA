import { EBMContent } from '../types';

export const pValuesContent: EBMContent = {
  id: 'ebm-p-values',
  title: 'P-Values in Medical Research',
  category: 'evidence-based-medicine',
  description: 'Understanding the meaning and limitations of p-values',

  levels: [
    {
      level: 1,
      title: 'What is a P-Value?',
      content: `
        **P-Value: Probability Value**


        A p-value tells us how surprising the study results would be if there were really no true effect (null hypothesis).


        **Simple Definition:**
        The probability of getting results at least as extreme as what was observed, assuming the null hypothesis is true.


        **What "Small" Means:**
        - p < 0.05: Results would occur <5% of the time by chance alone
        - p < 0.01: Results would occur <1% of the time by chance alone
        - p ≥ 0.05: Results could easily occur by chance


        **Example:**
        Testing whether Drug A is better than placebo for lowering blood pressure
        - Null hypothesis: Drug A is no different from placebo
        - Result: p = 0.03
        - Interpretation: If the drug truly had no effect, we'd see results this extreme only 3% of the time


        **Key Concept:** Small p-values suggest the observed effect is unlikely to be due to random chance alone.


        **Important:** A p-value does NOT tell you the probability that the null hypothesis is true or that your result is correct.
      `,
      keyPoints: [
        'P-value measures how surprising results are under null hypothesis',
        'P < 0.05 is the traditional threshold for statistical significance',
        'P-values do not measure the probability that a hypothesis is true',
        'Small p-values suggest effects are unlikely due to chance alone'
      ],
      quiz: [
        {
          question: 'A study reports p = 0.04. What is the correct interpretation?',
          options: [
            'There is a 4% chance the null hypothesis is true',
            'There is a 96% chance the treatment works',
            'If the null hypothesis were true, results this extreme would occur 4% of the time',
            'The treatment effect is clinically important'
          ],
          correctAnswer: 2,
          explanation: 'The p-value tells us the probability of getting these results (or more extreme) if the null hypothesis were true, not the probability that the hypothesis is true.'
        }
      ]
    },
    {
      level: 2,
      title: 'Statistical Significance',
      content: `
        **Statistical Significance: The p < 0.05 Threshold**


        The conventional threshold for statistical significance is p < 0.05. But what does this really mean?


        **Statistical Significance:**
        - Results are unlikely to be due to chance alone
        - We "reject the null hypothesis"
        - We call the difference "statistically significant"


        **The Logic:**
        1. Assume no true difference (null hypothesis)
        2. Calculate how extreme our results would be under this assumption
        3. If p < 0.05, we reject the null hypothesis
        4. Conclude there is evidence of a real effect


        **Why 0.05?**
        - Historical convention from R.A. Fisher (1920s)
        - Arbitrary threshold that became standard
        - Balances Type I and Type II errors
        - Some fields use stricter thresholds (e.g., p < 0.01 in physics)


        **Statistical vs. Clinical Significance:**

        **Statistical:** Unlikely due to chance
        **Clinical:** Meaningful impact on patient care


        **Example:**
        - Drug lowers blood pressure by 1 mmHg
        - Large study: p = 0.001 (statistically significant)
        - Clinically: 1 mmHg is not meaningful
        - Conclusion: Statistically significant but not clinically important


        **Key Point:** Statistical significance does not equal clinical importance.
      `,
      keyPoints: [
        'p < 0.05 is the conventional threshold for significance',
        'The threshold is historical and somewhat arbitrary',
        'Statistical significance does not equal clinical importance',
        'Large samples can detect tiny, unimportant differences'
      ],
      quiz: [
        {
          question: 'A large study finds a treatment extends life by 2 days with p = 0.01. Is this clinically significant?',
          options: [
            'Yes, because p < 0.05',
            'No, statistical significance does not guarantee clinical importance',
            'Yes, any life extension is clinically important',
            'Cannot determine without confidence intervals'
          ],
          correctAnswer: 1,
          explanation: 'While statistically significant, a 2-day extension may not be clinically meaningful. Clinical significance depends on the magnitude of effect, not just p-values.'
        }
      ]
    },
    {
      level: 3,
      title: 'Hypothesis Testing and Errors',
      content: `
        **Hypothesis Testing Framework**


        **Two Competing Hypotheses:**

        **Null Hypothesis (H₀):** No true difference, effect is due to chance
        **Alternative Hypothesis (H₁):** True difference exists


        **Type I Error (False Positive):**
        - Concluding there is an effect when there isn't
        - Rejecting a true null hypothesis
        - Probability = α (usually 0.05)
        - "Alpha error"


        **Type II Error (False Negative):**
        - Concluding there is no effect when there is
        - Failing to reject a false null hypothesis
        - Probability = β
        - "Beta error"


        **Power:**
        - Probability of detecting a true effect
        - Power = 1 - β
        - Typically aim for 80-90% power


        **The Decision Matrix:**

        | | Null is True | Null is False |
        |---|---|---|
        | **Reject Null** | Type I Error (α) | Correct (Power = 1-β) |
        | **Fail to Reject** | Correct (1-α) | Type II Error (β) |


        **One-Tailed vs. Two-Tailed Tests:**

        **Two-Tailed (conservative):**
        - Tests for difference in either direction
        - Treatment could be better OR worse
        - More commonly used


        **One-Tailed:**
        - Tests for difference in one direction only
        - Only interested if treatment is better
        - Requires justification, rarely used


        **Multiple Testing Problem:**
        - When conducting many tests, some will be significant by chance
        - With 20 tests at α = 0.05, expect 1 false positive
        - Corrections: Bonferroni, False Discovery Rate
      `,
      keyPoints: [
        'Type I error is a false positive conclusion',
        'Type II error is a false negative conclusion',
        'Power is the probability of detecting a true effect',
        'Two-tailed tests are more conservative and commonly used',
        'Multiple comparisons require statistical correction'
      ],
      quiz: [
        {
          question: 'A test with 80% power has what probability of Type II error?',
          options: ['0.20', '0.80', '0.05', '0.95'],
          correctAnswer: 0,
          explanation: 'Power = 1 - β. If power is 80% (0.80), then β (Type II error rate) is 0.20 or 20%.'
        }
      ]
    },
    {
      level: 4,
      title: 'Interpreting P-Values Correctly',
      content: `
        **Common Misinterpretations of P-Values**


        **What P-Values Do NOT Mean:**

        ❌ **NOT:** The probability that the null hypothesis is true
        ❌ **NOT:** The probability that your results are due to chance
        ❌ **NOT:** The probability that the alternative hypothesis is false
        ❌ **NOT:** A measure of effect size or clinical importance
        ❌ **NOT:** A statement about replicability of results


        **What P-Values DO Mean:**

        ✓ **The probability of obtaining results at least as extreme as observed, if the null hypothesis were true**
        ✓ **A measure of incompatibility between observed data and null hypothesis**
        ✓ **A continuous measure of evidence (not binary significant/non-significant)**


        **The Gray Zone:**
        - p = 0.049: barely significant
        - p = 0.051: not significant
        - These are essentially the same evidence
        - Don't treat the 0.05 threshold as magical


        **P-Value Dependence:**
        - P-values depend on sample size
        - P-values depend on effect size
        - Large samples → small p for tiny effects
        - Small samples → large p even for large effects


        **Example:**

        **Study A (n=1000):**
        - Effect: 5% improvement
        - p = 0.03 (significant)


        **Study B (n=100):**
        - Effect: 5% improvement
        - p = 0.25 (not significant)


        Same effect size, different p-values due to sample size


        **P-Value Fallacies:**

        **P-hacking:**
        - Analyzing data multiple ways until finding significance
        - Selective reporting of significant outcomes
        - Creates false-positive results


        **HARKing (Hypothesizing After Results Known):**
        - Presenting post-hoc findings as pre-specified
        - Inflates Type I error rate


        **Garden of Forking Paths:**
        - Multiple analysis decisions create multiple possible p-values
        - Reported p-value depends on the path taken
      `,
      keyPoints: [
        'P-values do not give the probability that hypotheses are true',
        'P-values depend on sample size, not just effect',
        'The 0.05 threshold is not magical—p is continuous',
        'P-hacking and HARKing create false positive results',
        'Always interpret p-values with effect sizes and confidence intervals'
      ],
      quiz: [
        {
          question: 'Why might two studies with identical effect sizes have different p-values?',
          options: [
            'One used a one-tailed test',
            'They had different sample sizes',
            'One had Type I error',
            'The p-value must be identical'
          ],
          correctAnswer: 1,
          explanation: 'P-values depend on both effect size AND sample size. Larger studies yield smaller p-values for the same effect.'
        }
      ]
    },
    {
      level: 5,
      title: 'Beyond P-Values: Modern Approaches',
      content: `
        **The Replication Crisis and P-Value Problems**


        Concerns about p-value interpretation have led to calls for reform:


        **ASA Statement on P-Values (2016):**
        1. P-values can indicate how incompatible data are with null hypothesis
        2. P-values do NOT measure probability that hypothesis is true
        3. Scientific conclusions should not be based only on whether p < 0.05
        4. Proper inference requires full reporting and transparency
        5. P-values do not indicate the size of an effect
        6. P-values alone do not provide evidence for a model or hypothesis


        **Alternatives and Supplements to P-Values:**


        **Confidence Intervals:**
        - Provide range of plausible values
        - Show precision of estimate
        - More informative than single p-value
        - Can assess clinical importance


        **Effect Sizes:**
        - Magnitude of difference or association
        - Measures: Cohen's d, odds ratio, risk ratio
        - Independent of sample size
        - Essential for clinical interpretation


        **Bayesian Approaches:**
        - Calculate probability that hypothesis is true
        - Update beliefs with new evidence
        - Provides more intuitive interpretations
        - Example: "95% probability that treatment reduces mortality"


        **False Discovery Rate (FDR):**
        - Expected proportion of false positives among significant results
        - More appropriate than p-values for multiple testing
        - q-value: FDR analog to p-value


        **Minimum Effect Size:**
        - Pre-specify smallest clinically meaningful effect
        - Only consider significance if effect exceeds threshold
        - Prevents declaring trivial effects significant


        **S-Values (Shannon Information):**
        - Convert p-values to bits of information
        - More intuitive for evidence strength
        - Example: p = 0.05 = 4.3 bits of information against null


        **Statistical Significance Reform:**

        **"Abandon Statistical Significance" (McShane et al.):**
        - Don't dichotomize into significant/non-significant
        - Report exact p-values and confidence intervals
        - Focus on effect sizes and practical importance


        **"Redefine Statistical Significance" (Benjamin et al.):**
        - Use p < 0.005 as threshold
        - Reduces false positive rate
        - Call p = 0.005-0.05 "suggestive evidence"


        **Best Practices:**
        1. Pre-register analysis plans
        2. Report exact p-values (not just <0.05)
        3. Always include confidence intervals
        4. Report effect sizes
        5. Focus on clinical importance
        6. Replicate important findings
        7. Share data and code
      `,
      keyPoints: [
        'ASA warns against over-reliance on p-values',
        'Confidence intervals provide more information than p-values',
        'Bayesian methods give direct probability statements',
        'Statistical significance should not be the only criterion',
        'Pre-registration and replication are essential for trust',
        'Effect sizes matter more than statistical significance'
      ],
      quiz: [
        {
          question: 'Which approach is recommended by modern statistical reformers?',
          options: [
            'Use p < 0.005 as significance threshold',
            'Focus only on statistical significance',
            'Abandon dichotomous thinking, report CIs and effect sizes',
            'Use only Bayesian methods'
          ],
          correctAnswer: 2,
          explanation: 'Modern approaches emphasize moving beyond dichotomous significant/non-significant thinking, reporting confidence intervals, effect sizes, and focusing on clinical importance.'
        }
      ]
    }
  ]
};
