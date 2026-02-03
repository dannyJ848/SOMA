import { EBMContent } from '../types';

export const confidenceIntervalsContent: EBMContent = {
  id: 'ebm-confidence-intervals',
  title: 'Confidence Intervals',
  category: 'evidence-based-medicine',
  description: 'Understanding and interpreting confidence intervals in medical research',

  levels: [
    {
      level: 1,
      title: 'What is a Confidence Interval?',
      content: `
        **Confidence Interval: A Range of Uncertainty**


        A confidence interval (CI) gives us a range of values within which we are reasonably confident the true value lies.


        **Simple Definition:**
        A range around a study result that shows the precision of the estimate.


        **Key Features:**
        - Provides an upper and lower bound
        - Usually reported as 95% confidence interval
        - Wider intervals = less precise
        - Narrower intervals = more precise


        **Example:**
        - Study reports: "Treatment reduced mortality by 20% (95% CI: 10% to 30%)"
        - Interpretation: We are 95% confident the true reduction is between 10% and 30%
        - Best estimate: 20%
        - Range: 10% to 30%


        **Why Confidence Intervals Matter:**
        - Show the uncertainty in our estimate
        - Help us understand the range of plausible effects
        - Allow us to assess clinical importance
        - More informative than p-values alone


        **Key Point:** The 95% refers to the confidence in the METHOD, not the probability that the specific interval contains the true value.
      `,
      keyPoints: [
        'CI provides a range of plausible values for the true effect',
        '95% is the conventional confidence level',
        'Width of CI indicates precision of the estimate',
        'CIs are more informative than p-values alone'
      ],
      quiz: [
        {
          question: 'A study reports a risk ratio of 1.5 with a 95% CI of 1.2 to 1.8. What does this mean?',
          options: [
            'There is a 95% chance the true risk ratio is between 1.2 and 1.8',
            'The risk ratio is statistically significant',
            'We are 95% confident the method produces intervals containing the true value',
            'Both A and B'
          ],
          correctAnswer: 2,
          explanation: 'The 95% refers to the long-run performance of the method. Also, since the CI (1.2-1.8) does not include 1.0 (no effect), the result is statistically significant.'
        }
      ]
    },
    {
      level: 2,
      title: 'Interpreting Confidence Intervals',
      content: `
        **How to Read and Interpret CIs**


        **Three Important Questions:**

        1. **Is it statistically significant?**
        - Look at whether the CI includes the null value
        - For ratios (RR, OR): Does it include 1?
        - For differences: Does it include 0?


        2. **What is the magnitude?**
        - The point estimate (center of CI)
        - The best single estimate of the true effect


        3. **How precise is it?**
        - Width of the interval
        - Narrow = precise, Wide = imprecise


        **Interpreting Different CIs:**

        **RR = 1.5, 95% CI: 1.2 to 1.8**
        - Statistically significant (no overlap with 1)
        - Effect size: 50% increase
        - Narrow interval = precise estimate


        **RR = 1.2, 95% CI: 0.9 to 1.5**
        - Not statistically significant (includes 1)
        - Point estimate suggests benefit
        - But could be no effect or even harm


        **RR = 2.0, 95% CI: 0.5 to 3.5**
        - Not statistically significant
        - Very wide interval = imprecise
        - True effect could be large benefit OR large harm


        **Clinical vs. Statistical Significance:**

        Even when statistically significant, ask if the effect is clinically important:
        - Small effect: RR = 1.1, CI: 1.05 to 1.15
        - Significant but maybe not clinically meaningful


        **Rule of Thumb:** Focus first on the CI boundaries. The worst-case plausible scenario (lower bound for benefit) is often most important for clinical decisions.
      `,
      keyPoints: [
        'Statistical significance: CI does not include null value (1 for ratios, 0 for differences)',
        'Point estimate is the best single estimate of effect',
        'CI width indicates precision',
        'Clinical importance is separate from statistical significance'
      ],
      quiz: [
        {
          question: 'For a risk ratio, which 95% CI indicates statistical significance?',
          options: ['0.95 to 1.10', '0.85 to 0.95', '0.90 to 1.25', '0.98 to 1.02'],
          correctAnswer: 1,
          explanation: 'A CI is statistically significant when it does not include 1.0 (the null value for ratios). Only 0.85-0.95 does not include 1.'
        }
      ]
    },
    {
      level: 3,
      title: 'Factors Affecting Confidence Interval Width',
      content: `
        **What Makes Confidence Intervals Wider or Narrower?**


        **Sample Size:**
        - Larger samples → narrower CIs
        - Smaller samples → wider CIs
        - More data = more precise estimates


        **Example:**
        - n=100: RR 1.5, CI: 0.8 to 2.2 (wide, not significant)
        - n=1000: RR 1.5, CI: 1.3 to 1.7 (narrow, significant)


        **Variability in Data:**
        - More variability → wider CIs
        - Less variability → narrower CIs
        - Standard deviation affects precision


        **Confidence Level:**
        - Higher confidence → wider intervals
        - 99% CI wider than 95% CI
        - 90% CI narrower than 95% CI


        **Example:**
        - 95% CI: 1.2 to 1.8
        - 99% CI: 1.1 to 1.9 (wider)
        - 90% CI: 1.3 to 1.7 (narrower)


        **Event Rate:**
        - Rare events → wider CIs
        - Common events → narrower CIs
        - Binary outcomes depend on event frequency


        **Visualizing CI Width:**

        | Study | n | Point Estimate | 95% CI | Width |
        |-------|---|----------------|--------|-------|
        | Small | 50 | 1.5 | 0.6 to 2.4 | 1.8 |
        | Medium | 200 | 1.5 | 1.1 to 1.9 | 0.8 |
        | Large | 1000 | 1.5 | 1.3 to 1.7 | 0.4 |


        **Clinical Implications:**
        - Wide CI: "We need more data to be confident"
        - Narrow CI: "We have a precise estimate"
        - Very wide CI: Results may not be useful for decision-making


        **The Confidence Interval Formula (simplified):**
        CI = Point Estimate ± (Multiplier × Standard Error)


        Where multiplier depends on confidence level (≈2 for 95% CI)
      `,
      keyPoints: [
        'Larger sample sizes produce narrower CIs',
        'More variability in data produces wider CIs',
        'Higher confidence levels produce wider CIs',
        'Rare events produce wider CIs than common events',
        'CI width helps assess the usefulness of results'
      ],
      quiz: [
        {
          question: 'A study has a 95% CI of 0.8 to 2.2. If the researchers want a 99% CI, what happens to the interval?',
          options: [
            'Becomes narrower',
            'Becomes wider',
            'Stays the same',
            'Cannot be determined'
          ],
          correctAnswer: 1,
          explanation: 'Higher confidence levels require wider intervals to be more confident that the true value is contained within the range.'
        }
      ]
    },
    {
      level: 4,
      title: 'CIs for Different Measures',
      content: `
        **Confidence Intervals for Different Statistical Measures**


        **Risk Ratios (Relative Risk):**
        - Null value: 1.0 (no difference)
        - RR > 1: Increased risk
        - RR < 1: Decreased risk
        - Example: RR 1.5, 95% CI: 1.2 to 1.9


        **Odds Ratios:**
        - Similar interpretation to risk ratios
        - Null value: 1.0
        - Example: OR 0.7, 95% CI: 0.5 to 0.98


        **Mean Differences:**
        - Null value: 0 (no difference)
        - Direct clinical interpretation
        - Example: Mean diff -5 mmHg, 95% CI: -8 to -2
        - Interpretation: 5 mmHg reduction, true effect between 2-8 mmHg reduction


        **Risk Differences (Absolute Risk Reduction):**
        - Null value: 0
        - Most clinically intuitive
        - Example: ARD 10%, 95% CI: 5% to 15%
        - Interpretation: 10% absolute reduction, between 5-15%


        **Proportions/Prevalence:**
        - CI for percentages
        - Example: Prevalence 25%, 95% CI: 20% to 30%
        - More precise with larger samples


        **Diagnostic Tests:**

        **Sensitivity:**
        - Example: 90%, 95% CI: 85% to 94%
        - Important: Lower bound matters most clinically

        **Specificity:**
        - Example: 85%, 95% CI: 80% to 89%
        - Lower bound matters most clinically


        **Diagnostic Accuracy (LR+ and LR-):**
        - LR+: 5.0, 95% CI: 3.0 to 8.3
        - LR-: 0.3, 95% CI: 0.2 to 0.5


        **Correlation Coefficients:**
        - Null value: 0
        - Example: r = 0.6, 95% CI: 0.4 to 0.74
        - Significant (does not include 0)
        - Strong positive correlation


        **Number Needed to Treat (NNT):**
        - NNT = 10, 95% CI: 6 to 25
        - Lower NNT = better treatment
        - Important: CIs for NNT are asymmetric
        - When CI includes infinity, not significant


        **Hazard Ratios (Time-to-Event):**
        - Similar to risk ratios
        - Accounts for time
        - Example: HR 0.8, 95% CI: 0.7 to 0.9
        - Interpretation: 20% reduction in hazard over time
      `,
      keyPoints: [
        'Null value is 1 for ratios, 0 for differences',
        'ARR provides most clinically intuitive interpretation',
        'Diagnostic test CIs: focus on lower bound',
        'NNT CIs are asymmetric',
        'Hazard ratios account for time in analysis'
      ],
      quiz: [
        {
          question: 'A diagnostic test reports sensitivity = 95% with 95% CI: 85% to 99%. Which bound is most clinically important?',
          options: [
            'The upper bound (99%)',
            'The lower bound (85%)',
            'The point estimate (95%)',
            'All are equally important'
          ],
          correctAnswer: 1,
          explanation: 'For sensitivity, the lower bound is most important because it tells us the worst-case scenario for the test\'s ability to detect disease.'
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced CI Concepts and Applications',
      content: `
        **Advanced Confidence Interval Applications**


        **Non-Overlapping CIs:**
        - If two CIs don't overlap, groups are significantly different
        - But overlapping CIs don't necessarily mean no difference
        - Example: Group A (1.5, CI: 1.3-1.7) vs Group B (1.8, CI: 1.6-2.0)
        - Overlap exists, but still may be significant


        **Confidence Intervals vs. Prediction Intervals:**

        **Confidence Interval:**
        - Where the true mean/proportion lies
        - Accounts for sampling error only
        - Narrower

        **Prediction Interval:**
        - Where a future observation will lie
        - Accounts for sampling error + individual variation
        - Wider than CI


        **CIs in Meta-Analysis:**

        **Forest Plot Display:**
        - Each study: point estimate and CI
        - Pooled estimate: diamond (width = CI)
        - Heterogeneity: I² statistic


        **Prediction Interval in Meta-Analysis:**
        - Range of expected effects in future studies
        - Accounts for between-study heterogeneity
        - Much wider than confidence interval
        - Example: Effect 0.5, 95% CI: 0.4-0.6, PI: 0.2-0.8


        **One-Sided Confidence Intervals:**
        - Upper or lower bound only
        - Used when only one direction matters
        - Example: "No more than 5% increase in adverse events"


        **Bootstrap Confidence Intervals:**
        - Computer-intensive resampling method
        - Does not assume normal distribution
        - Useful for complex statistics
        - Percentile method, bias-corrected method


        **Credible Intervals (Bayesian):**
        - Similar to CIs but different interpretation
        - "95% probability parameter lies in interval"
        - More intuitive for many users
        - Incorporates prior information


        **CI Reporting Standards:**
        - Always report CIs for key outcomes
        - Don't just report p-values
        - Report exact bounds, not just point estimate
        - Use consistent confidence level (usually 95%)


        **Sample Size Calculations:**
        - CIs used to determine required sample size
        - Specify desired CI width
        - Calculate n needed to achieve precision
        - Example: "To achieve CI width of ±5%, need n=400"


        **Multiplicity Adjustments:**
        - When making multiple comparisons
        - CIs need to be wider to maintain family-wise error rate
        - Bonferroni: Use 99% CI for 5 comparisons
        - False discovery rate approaches also available


        **Practical Framework for Interpretation:**

        1. **Check significance:** Does CI include null value?
        2. **Assess direction:** Benefit or harm?
        3. **Evaluate magnitude:** Lower and upper bounds
        4. **Consider precision:** Width of interval
        5. **Clinical relevance:** Even if significant, is it important?
        6. **Compare to alternatives:** Overlap with other treatment CIs?
      `,
      keyPoints: [
        'Prediction intervals account for both sampling and individual variation',
        'Meta-analyses use both CIs and prediction intervals',
        'Bootstrap methods don\'t assume normal distributions',
        'Bayesian credible intervals have more intuitive interpretation',
        'Sample size can be calculated based on desired CI width',
        'Always report CIs with p-values'
      ],
      quiz: [
        {
          question: 'In a meta-analysis, the prediction interval is wider than the confidence interval because:',
          options: [
            'Prediction intervals use higher confidence level',
            'Prediction intervals account for between-study heterogeneity',
            'Confidence intervals are calculated incorrectly',
            'Prediction intervals include more studies'
          ],
          correctAnswer: 1,
          explanation: 'Prediction intervals account for variation between studies (heterogeneity), making them wider than confidence intervals which only account for sampling error.'
        }
      ]
    }
  ]
};
