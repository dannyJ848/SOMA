import { EBMContent } from '../types';

export const statisticalSignificanceContent: EBMContent = {
  id: 'ebm-statistical-significance',
  title: 'Statistical Significance in Medical Research',
  category: 'evidence-based-medicine',
  description: 'Understanding statistical significance, power, and clinical relevance',

  levels: [
    {
      level: 1,
      title: 'Introduction to Statistical Significance',
      content: `
        **Statistical Significance: What Does It Mean?**


        Statistical significance tells us whether a result is likely due to chance or reflects a real effect.


        **The Core Concept:**
        If we observe a difference between groups, statistical significance helps us determine if this difference is:
        - A real effect (statistically significant)
        - Just random variation (not statistically significant)


        **The Threshold:**
        The conventional threshold is p < 0.05
        - p < 0.05 = "statistically significant"
        - p ≥ 0.05 = "not statistically significant"


        **Example:**
        Testing a new drug for lowering blood pressure:
        - Treatment group: Average reduction of 8 mmHg
        - Placebo group: Average reduction of 3 mmHg
        - Difference: 5 mmHg
        - p = 0.02
        - Conclusion: Statistically significant (unlikely due to chance)


        **Key Points:**
        - Statistical significance does NOT mean "important"
        - Statistical significance does NOT prove causation
        - Statistical significance is affected by sample size
        - Clinical importance is separate from statistical significance


        **Analogy:**
        Finding a statistically significant result is like finding a signal that's distinguishable from background noise. But the signal might still be weak or unimportant.
      `,
      keyPoints: [
        'Statistical significance indicates results unlikely due to chance',
        'p < 0.05 is the conventional threshold',
        'Statistical significance ≠ clinical importance',
        'Sample size affects statistical significance'
      ],
      quiz: [
        {
          question: 'A study finds a treatment causes a "statistically significant" 1 mmHg reduction in blood pressure (p=0.04). Is this clinically important?',
          options: [
            'Yes, because p < 0.05',
            'No, clinical importance is separate from statistical significance',
            'Cannot be determined',
            'Yes, any reduction is important'
          ],
          correctAnswer: 1,
          explanation: 'A 1 mmHg reduction, while statistically significant, may not be clinically meaningful. Clinical importance depends on the magnitude of effect.'
        }
      ]
    },
    {
      level: 2,
      title: 'Statistical Power',
      content: `
        **Statistical Power: The Ability to Detect a Real Effect**


        Power is the probability that a study will detect a real effect if one exists.


        **Key Definition:**
        Power = 1 - β (where β is the Type II error rate)


        **What Affects Power:**

        1. **Sample Size:**
        - Larger samples = more power
        - Small samples may miss real effects
        - Most common way to increase power

        2. **Effect Size:**
        - Larger effects = easier to detect = more power
        - Small effects require larger samples

        3. **Significance Level (α):**
        - Higher α (e.g., 0.10) = more power
        - Lower α (e.g., 0.01) = less power
        - Standard is α = 0.05

        4. **Variability:**
        - Less variability = more power
        - More variability = less power


        **Power Standards:**
        - 80% power: Standard minimum
        - 90% power: Preferred for important studies
        - < 80%: Underpowered study


        **Example - Underpowered Study:**
        - True effect: Treatment reduces mortality by 10%
        - Study size: Only 50 patients per group
        - Power: 30%
        - Result: p = 0.25 (not significant)
        - Problem: Study was too small to detect the real effect


        **Power Calculations:**
        Done BEFORE the study to determine required sample size:
        - Specify desired power (usually 80-90%)
        - Specify expected effect size
        - Calculate required sample size


        **Post-hoc Power:**
        - Calculated after study completion
        - Generally not recommended
        - Confidence intervals are more informative
      `,
      keyPoints: [
        'Power is the probability of detecting a real effect',
        'Sample size is the primary factor affecting power',
        '80% power is the conventional minimum',
        'Underpowered studies may miss real effects',
        'Power calculations should be done before studies'
      ],
      quiz: [
        {
          question: 'If a study has 50% power to detect a clinically important effect, what does this mean?',
          options: [
            'The study will definitely find the effect',
            'The study has a 50% chance of missing a real effect',
            'The study has a 50% chance of finding a false positive',
            'The study needs twice as many participants'
          ],
          correctAnswer: 1,
          explanation: '50% power means there is a 50% chance of failing to detect a real effect if one exists (Type II error rate of 50%).'
        }
      ]
    },
    {
      level: 3,
      title: 'Type I and Type II Errors',
      content: `
        **Two Types of Statistical Errors**


        **Type I Error (False Positive):**
        - Concluding there is an effect when there isn't
        - Rejecting a true null hypothesis
        - "Alpha error" or "α"
        - Probability: Usually set at 0.05 (5%)


        **Type II Error (False Negative):**
        - Concluding there is no effect when there is
        - Failing to reject a false null hypothesis
        - "Beta error" or "β"
        - Probability: Related to power (1 - power)


        **The Decision Matrix:**

        | Truth | No Effect (H₀ True) | Effect Exists (H₀ False) |
        |-------|---------------------|--------------------------|
        | **Result: Not Significant** | Correct (1-α) | Type II Error (β) |
        | **Result: Significant** | Type I Error (α) | Correct (Power = 1-β) |


        **Clinical Examples:**

        **Type I Error:**
        - Concluding a drug works when it doesn't
        - Patient takes ineffective drug
        - Waste of money, potential side effects
        - Future research misled

        **Type II Error:**
        - Concluding a drug doesn't work when it does
        - Effective treatment abandoned
        - Patients miss out on benefit
        - True effect never discovered


        **Balancing the Errors:**
        - Type I error rate (α) is usually set at 0.05
        - We accept 5% chance of false positive
        - Type II error rate is usually set higher (β = 0.20)
        - We accept 20% chance of false negative


        **Why This Balance?**
        - False negatives generally considered less harmful
        - But depends on clinical context
        - For life-saving treatments, Type II errors may be worse


        **Trade-off Relationship:**
        - Decreasing α (stricter significance) → Increases β (less power)
        - Increasing power → Requires larger sample or higher α


        **Example:**
        - α = 0.05, β = 0.20 (Power = 80%): Standard balance
        - α = 0.01, β = 0.40 (Power = 60%): Stricter α, less power
        - α = 0.10, β = 0.10 (Power = 90%): Relaxed α, more power
      `,
      keyPoints: [
        'Type I error is a false positive conclusion',
        'Type II error is a false negative conclusion',
        'Type I error rate is typically set at 5%',
        'Type II error rate is typically set at 20% (80% power)',
        'There is a trade-off between Type I and Type II errors'
      ],
      quiz: [
        {
          question: 'A study with α = 0.05 and 80% power has what Type II error rate?',
          options: ['0.05', '0.20', '0.80', '0.95'],
          correctAnswer: 1,
          explanation: 'Type II error rate (β) = 1 - Power. With 80% power, β = 1 - 0.80 = 0.20 or 20%.'
        }
      ]
    },
    {
      level: 4,
      title: 'Effect Sizes and Clinical Significance',
      content: `
        **Statistical vs. Clinical Significance**


        **Statistical Significance:**
        - p < 0.05: Unlikely due to chance
        - Tells us an effect exists
        - Does not tell us how big or important it is


        **Clinical Significance:**
        - Effect large enough to matter to patients
        - Affects clinical decision-making
        - Independent of p-value


        **Effect Size Measures:**

        **For Binary Outcomes:**

        **Risk Ratio (RR):**
        - RR = 1.5: 50% increase in risk
        - RR = 0.7: 30% decrease in risk

        **Absolute Risk Reduction (ARR):**
        - ARR = 10%: 10% fewer events with treatment
        - More clinically intuitive than RR

        **Number Needed to Treat (NNT):**
        - NNT = 10: Treat 10 patients, 1 benefits
        - NNT = 100: Treat 100 patients, 1 benefits
        - Lower NNT = more effective


        **For Continuous Outcomes:**

        **Mean Difference:**
        - Direct clinical interpretation
        - Example: 5 mmHg reduction in blood pressure

        **Standardized Mean Difference (Cohen's d):**
        - Effect size in standard deviation units
        - d = 0.2: Small effect
        - d = 0.5: Medium effect
        - d = 0.8: Large effect


        **Examples: Clinical vs. Statistical**

        **Example 1: Statistically Significant, Clinically Doubtful**
        - Large study: n = 10,000
        - Weight loss: 0.5 kg more with drug
        - p < 0.001 (very significant)
        - But 0.5 kg is not clinically meaningful

        **Example 2: Not Statistically Significant, Clinically Important Trend**
        - Small study: n = 30
        - Mortality: 20% vs 40% (50% relative reduction)
        - p = 0.15 (not significant)
        - But effect is large and clinically important
        - Needs larger study to confirm


        **Clinical Significance Thresholds:**
        - Must be determined before the study
        - Based on patient outcomes and values
        - Example: "At least 5 mmHg reduction in BP matters"
        - Example: "NNT < 25 is acceptable"


        **Minimal Clinically Important Difference (MCID):**
        - Smallest effect patients perceive as beneficial
        - Can be determined from patient reports
        - Guides interpretation of trial results


        **Framework for Interpretation:**

        1. Is it statistically significant? (p-value, CI)
        2. What is the effect size? (RR, ARR, NNT)
        3. Is it clinically meaningful? (MCID, patient impact)
        4. Are benefits worth harms/costs?
      `,
      keyPoints: [
        'Clinical significance is separate from statistical significance',
        'ARR and NNT provide clinically intuitive effect measures',
        'Large samples can detect tiny, unimportant effects',
        'Small samples may miss large, important effects',
        'MCID helps determine clinical importance'
      ],
      quiz: [
        {
          question: 'A study reports NNT = 100, p < 0.001. Is this result clinically significant?',
          options: [
            'Yes, because p < 0.001',
            'No, NNT of 100 means treating 100 patients to benefit one',
            'Cannot determine without more information',
            'Yes, any benefit is clinically important'
          ],
          correctAnswer: 1,
          explanation: 'While statistically significant, an NNT of 100 means you need to treat 100 patients for one to benefit. This may not be clinically meaningful depending on the condition and treatment burden.'
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced Topics and Modern Approaches',
      content: `
        **Beyond Traditional Significance Testing**


        **Problems with p < 0.05:**

        1. **Dichotomous Thinking:**
        - "Significant" vs. "Not significant"
        - Ignores that evidence is a continuum
        - p = 0.049 and p = 0.051 are essentially the same

        2. **Sample Size Dependence:**
        - Large samples: Everything becomes significant
        - Small samples: Nothing is significant
        - p-value depends on n, not just effect size

        3. **File Drawer Problem:**
        - Significant results get published
        - Non-significant results stay in file drawer
        - Publication bias inflates Type I error rate

        4. **P-hacking:**
        - Analyzing data multiple ways until finding significance
        - Selective reporting of outcomes
        - Creates false positive results


        **Solutions and Alternatives:**


        **1. Confidence Intervals:**
        - Provide range of plausible values
        - Show precision of estimate
        - Allow assessment of clinical importance
        - More informative than single p-value


        **2. Effect Sizes:**
        - Report magnitude of effect
        - Independent of sample size
        - Facilitate meta-analysis
        - Enable clinical interpretation


        **3. False Discovery Rate (FDR):**
        - Expected proportion of false positives
        - More appropriate for multiple testing
        - q-value is the FDR analog to p-value
        - Widely used in genomics


        **4. Bayesian Approaches:**
        - Direct probability statements
        - "95% probability treatment is beneficial"
        - Incorporates prior information
        - Updates beliefs with new evidence
        - More intuitive for clinicians


        **5. Minimum Clinically Important Effect:**
        - Pre-specify smallest meaningful effect
        - Only claim significance if CI excludes MCID
        - Prevents trivial effects from being "significant"


        **6. "New Statistics" Movement:**
        - Emphasize estimation over testing
        - Focus on effect sizes and CIs
        - Replication is key
        - Meta-analysis over single studies


        **Reform Proposals:**


        **Abandon "Statistical Significance":**
        - Don't dichotomize at p < 0.05
        - Report exact p-values
        - Interpret in context of effect size
        - Use confidence intervals


        **Redefine Significance Threshold:**
        - Use p < 0.005 instead of p < 0.05
        - Reduces false positive rate
        - Call p = 0.005-0.05 "suggestive"
        - More stringent, lower false discovery


        **Practical Recommendations:**

        1. **Pre-register studies:** Declare analysis plan beforehand
        2. **Report exact p-values:** Not just < 0.05
        3. **Always include CIs:** Show precision
        4. **Report effect sizes:** Magnitude matters
        5. **Focus on clinical importance:** Not just p-values
        6. **Replicate findings:** One study is not enough
        7. **Share data and code:** Transparency


        **Sample Size Reconsidered:**
        - Calculate for power to detect MCID
        - Not just any effect
        - Consider cost/benefit of larger samples
        - Clustered trials require larger samples


        **Reporting Standards:**
        - CONSORT (trials)
        - STROBE (observational)
        - PRISMA (reviews)
        - All emphasize CIs over p-values
      `,
      keyPoints: [
        'Dichotomous significant/non-significant thinking is problematic',
        'P-hacking and publication bias inflate false positive rates',
        'Confidence intervals are more informative than p-values',
        'Bayesian methods provide direct probability statements',
        'Pre-registration helps prevent p-hacking',
        'Clinical importance should be the focus, not just p-values'
      ],
      quiz: [
        {
          question: 'What is the main argument of the "abandon statistical significance" movement?',
          options: [
            'Statistics should never be used',
            'Stop dichotomizing results into significant/non-significant',
            'Always use p < 0.005',
            'Only use Bayesian methods',
          ],
          correctAnswer: 1,
          explanation: 'The movement argues against treating p < 0.05 as a magical threshold, emphasizing instead effect sizes, confidence intervals, and clinical importance.'
        }
      ]
    }
  ]
};
