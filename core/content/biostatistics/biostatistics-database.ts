/**
 * Biostatistics Database
 *
 * Comprehensive database of biostatistics concepts for the SOMA medical
 * education app. Covers diagnostic accuracy, measures of effect, hypothesis
 * testing, regression analysis, survival analysis, study design, meta-analysis
 * methodology, and bias assessment.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type BiostatisticsCategory =
  | 'diagnostic-accuracy'
  | 'measures-of-effect'
  | 'hypothesis-testing'
  | 'regression'
  | 'survival-analysis'
  | 'study-design'
  | 'meta-analysis'
  | 'bias-assessment';

export interface BiostatisticsEntry {
  id: string;
  name: string;
  category: BiostatisticsCategory;
  definition: string;
  formula?: string;
  interpretation: string;
  clinicalExample: string;
  commonPitfalls: string[];
}

// ---------------------------------------------------------------------------
// Database Entries
// ---------------------------------------------------------------------------

export const BIOSTATISTICS_ENTRIES: Record<string, BiostatisticsEntry> = {
  // ==========================================================================
  // DIAGNOSTIC ACCURACY
  // ==========================================================================
  sensitivity: {
    id: 'sensitivity',
    name: 'Sensitivity',
    category: 'diagnostic-accuracy',
    definition: 'The proportion of true positives correctly identified by a test. Also called the true positive rate.',
    formula: 'Sensitivity = TP / (TP + FN)',
    interpretation: 'A highly sensitive test, when negative, effectively rules OUT disease (SnNOut). Sensitivity is an intrinsic test property unaffected by prevalence.',
    clinicalExample: 'D-dimer has ~95% sensitivity for PE. A negative D-dimer in a low-risk patient effectively excludes pulmonary embolism.',
    commonPitfalls: [
      'High sensitivity does not guarantee high PPV, especially with low prevalence.',
      'Sensitivity may vary with disease severity (spectrum bias).',
      'A sensitive test is chosen for screening, not confirmation.',
    ],
  },
  specificity: {
    id: 'specificity',
    name: 'Specificity',
    category: 'diagnostic-accuracy',
    definition: 'The proportion of true negatives correctly identified by a test. Also called the true negative rate.',
    formula: 'Specificity = TN / (TN + FP)',
    interpretation: 'A highly specific test, when positive, effectively rules IN disease (SpPIn). Specificity is an intrinsic test property unaffected by prevalence.',
    clinicalExample: 'Western blot for HIV has ~99.9% specificity. A positive result confirms infection with near certainty.',
    commonPitfalls: [
      'High specificity does not guarantee high NPV in high-prevalence settings.',
      'Specificity may be affected by the spectrum of non-diseased individuals.',
      'A specific test is chosen for confirmation, not screening.',
    ],
  },
  ppv: {
    id: 'ppv',
    name: 'Positive Predictive Value (PPV)',
    category: 'diagnostic-accuracy',
    definition: 'The probability that a patient with a positive test result truly has the disease.',
    formula: 'PPV = TP / (TP + FP) = (Sens * Prev) / [(Sens * Prev) + (1 - Spec) * (1 - Prev)]',
    interpretation: 'PPV depends heavily on disease prevalence. In low-prevalence populations, even excellent tests yield many false positives and low PPV.',
    clinicalExample: 'A test with 95% sensitivity and 95% specificity at 1% prevalence has a PPV of only ~16%. Most positive results are false positives.',
    commonPitfalls: [
      'PPV cannot be transferred between populations with different prevalences.',
      'Confusing PPV with sensitivity is a common exam error.',
      'Low-prevalence screening programs inherently produce low PPV.',
    ],
  },
  npv: {
    id: 'npv',
    name: 'Negative Predictive Value (NPV)',
    category: 'diagnostic-accuracy',
    definition: 'The probability that a patient with a negative test result truly does not have the disease.',
    formula: 'NPV = TN / (TN + FN)',
    interpretation: 'NPV is high when prevalence is low. A negative result on any reasonable test in a low-prevalence setting is very reassuring.',
    clinicalExample: 'In a low-prevalence primary care setting, a negative rapid strep test (NPV ~95%) reliably excludes streptococcal pharyngitis.',
    commonPitfalls: [
      'NPV decreases as prevalence increases, meaning more false negatives.',
      'High NPV in low-prevalence settings may give false reassurance about test quality.',
      'NPV is population-dependent and not generalizable across settings.',
    ],
  },
  likelihood_ratio_positive: {
    id: 'likelihood_ratio_positive',
    name: 'Positive Likelihood Ratio (LR+)',
    category: 'diagnostic-accuracy',
    definition: 'The ratio of the probability of a positive test in diseased individuals to the probability of a positive test in non-diseased individuals.',
    formula: 'LR+ = Sensitivity / (1 - Specificity)',
    interpretation: 'LR+ > 10 causes a large shift toward confirming disease. LR+ between 1 and 2 is clinically useless. LRs are prevalence-independent.',
    clinicalExample: 'A test with 90% sensitivity and 95% specificity yields LR+ = 18. For a patient with 30% pretest probability, posttest probability rises to ~88%.',
    commonPitfalls: [
      'LR+ near 1.0 provides no diagnostic information.',
      'LRs assume constant test performance across disease severity.',
      'Interval LRs for multilevel tests are more informative than dichotomous ones.',
    ],
  },
  likelihood_ratio_negative: {
    id: 'likelihood_ratio_negative',
    name: 'Negative Likelihood Ratio (LR-)',
    category: 'diagnostic-accuracy',
    definition: 'The ratio of the probability of a negative test in diseased individuals to the probability of a negative test in non-diseased individuals.',
    formula: 'LR- = (1 - Sensitivity) / Specificity',
    interpretation: 'LR- < 0.1 causes a large shift toward excluding disease. Values near 1.0 are non-informative. Lower LR- means better rule-out capacity.',
    clinicalExample: 'Troponin with sensitivity 95% and specificity 90% gives LR- = 0.056. A negative troponin dramatically reduces the probability of MI.',
    commonPitfalls: [
      'LR- near 1.0 means a negative result does not change clinical probability.',
      'Early testing may produce false negatives before biomarker elevation.',
      'Serial testing can improve overall LR- when a single test is suboptimal.',
    ],
  },
  pretest_probability: {
    id: 'pretest_probability',
    name: 'Pretest Probability',
    category: 'diagnostic-accuracy',
    definition: 'The estimated probability of disease before a diagnostic test is performed, based on prevalence, clinical findings, and clinical judgment.',
    interpretation: 'Pretest probability is the starting point for Bayesian diagnostic reasoning. Tests are most informative at intermediate pretest probabilities (20-80%). At extremes, even good tests add little.',
    clinicalExample: 'A 25-year-old with atypical chest pain has ~5% pretest probability for CAD. A positive stress test (LR+ ~3) yields only ~14% posttest probability.',
    commonPitfalls: [
      'Ordering tests without estimating pretest probability leads to misinterpretation.',
      'Base rate neglect: ignoring prevalence when interpreting a positive test.',
      'Clinical decision rules (Wells score, HEART score) formalize pretest probability estimation.',
    ],
  },
  posttest_probability: {
    id: 'posttest_probability',
    name: 'Post-test Probability',
    category: 'diagnostic-accuracy',
    definition: 'The revised probability of disease after obtaining a test result, calculated by applying the likelihood ratio to the pretest probability.',
    formula: 'Posttest odds = Pretest odds x LR; Convert odds to probability: P = odds / (1 + odds)',
    interpretation: 'Post-test probability determines clinical action. If it crosses the treatment threshold, treat. If below the test threshold, no further workup is needed.',
    clinicalExample: 'A 65-year-old smoker with typical angina (90% pretest) and a negative stress test (LR- 0.15) still has ~58% posttest probability, warranting further evaluation.',
    commonPitfalls: [
      'The Fagan nomogram provides a visual shortcut but has limited precision.',
      'Sequential tests must be conditionally independent for multiplicative LR application.',
      'Posttest probability depends on both the test quality and the pretest probability.',
    ],
  },
  roc_curve: {
    id: 'roc_curve',
    name: 'ROC Curve (Receiver Operating Characteristic)',
    category: 'diagnostic-accuracy',
    definition: 'A plot of sensitivity (y-axis) vs 1 - specificity (x-axis) across all possible cutoff thresholds for a continuous diagnostic test.',
    interpretation: 'The area under the ROC curve (AUC) summarizes overall diagnostic accuracy: 0.5 = no discrimination (coin flip), 1.0 = perfect discrimination. AUC 0.7-0.8 is acceptable, 0.8-0.9 is excellent, >0.9 is outstanding.',
    clinicalExample: 'Comparing two biomarkers for sepsis: procalcitonin AUC 0.85 vs CRP AUC 0.72 indicates procalcitonin has superior overall diagnostic accuracy.',
    commonPitfalls: [
      'AUC does not indicate the optimal cutoff threshold for clinical use.',
      'Two tests can have the same AUC but different clinical utility at specific thresholds.',
      'AUC is insensitive to clinically important portions of the curve.',
    ],
  },

  // ==========================================================================
  // MEASURES OF EFFECT
  // ==========================================================================
  nnt: {
    id: 'nnt',
    name: 'Number Needed to Treat (NNT)',
    category: 'measures-of-effect',
    definition: 'The number of patients who must be treated for one additional patient to benefit compared to the control.',
    formula: 'NNT = 1 / ARR = 1 / (CER - EER)',
    interpretation: 'Lower NNT indicates greater treatment efficacy. NNT = 1 is a perfect treatment. Always specify the follow-up duration and outcome.',
    clinicalExample: 'Statins for primary prevention: NNT ~50 over 5 years to prevent one major cardiovascular event. Aspirin after MI: NNT ~40 over 2 years to prevent one death.',
    commonPitfalls: [
      'NNT is time-dependent; always specify the treatment duration.',
      'NNT derived from RRR without baseline risk is misleading.',
      'NNT should always be rounded UP to the next whole number.',
    ],
  },
  nnh: {
    id: 'nnh',
    name: 'Number Needed to Harm (NNH)',
    category: 'measures-of-effect',
    definition: 'The number of patients who must be treated for one additional patient to experience an adverse event compared to the control.',
    formula: 'NNH = 1 / ARI = 1 / (EER - CER) for harms',
    interpretation: 'Higher NNH indicates safer treatment. Comparing NNT for benefit against NNH for harm frames the risk-benefit trade-off for clinical decisions.',
    clinicalExample: 'NSAIDs for GI bleeding: NNH ~100 per year, meaning 1 in 100 patients per year will develop a GI bleed attributable to NSAID use.',
    commonPitfalls: [
      'NNH must be contextualized alongside NNT for the same treatment.',
      'NNH varies by patient risk profile and comorbidities.',
      'Rare but severe harms may have very high NNH but devastating consequences.',
    ],
  },
  arr: {
    id: 'arr',
    name: 'Absolute Risk Reduction (ARR)',
    category: 'measures-of-effect',
    definition: 'The arithmetic difference in event rates between the control and experimental groups.',
    formula: 'ARR = CER - EER (Control Event Rate - Experimental Event Rate)',
    interpretation: 'ARR directly quantifies the clinical benefit in absolute terms. It is prevalence-dependent and reflects the actual impact on patients. NNT = 1 / ARR.',
    clinicalExample: 'A drug reduces stroke from 4% to 3%: ARR = 1%, NNT = 100. Another reduces stroke from 40% to 30%: ARR = 10%, NNT = 10. Same RRR (25%), vastly different clinical impact.',
    commonPitfalls: [
      'ARR depends on baseline risk; the same treatment has different ARR in different populations.',
      'Media and pharma often report RRR instead of ARR to inflate perceived benefit.',
      'Without knowing baseline risk, ARR cannot be calculated from RRR alone.',
    ],
  },
  relative_risk: {
    id: 'relative_risk',
    name: 'Relative Risk (Risk Ratio)',
    category: 'measures-of-effect',
    definition: 'The ratio of the probability of an event in the exposed/treatment group to the probability in the unexposed/control group.',
    formula: 'RR = (a / (a + b)) / (c / (c + d)) = Risk in exposed / Risk in unexposed',
    interpretation: 'RR > 1 indicates increased risk with exposure; RR < 1 indicates decreased risk (protective); RR = 1 indicates no association. Calculated directly from cohort studies and RCTs.',
    clinicalExample: 'Smokers have RR = 15-30 for lung cancer compared to non-smokers, meaning they are 15-30 times more likely to develop lung cancer.',
    commonPitfalls: [
      'RR cannot be calculated from case-control studies; use odds ratio instead.',
      'RR does not convey absolute risk; RR = 2 could mean 1% vs 2% or 30% vs 60%.',
      'RRR = 1 - RR for protective exposures, but always report ARR alongside RRR.',
    ],
  },
  odds_ratio: {
    id: 'odds_ratio',
    name: 'Odds Ratio (OR)',
    category: 'measures-of-effect',
    definition: 'The ratio of the odds of exposure in cases to the odds of exposure in controls, or equivalently the ratio of the odds of the outcome in exposed vs unexposed.',
    formula: 'OR = (a * d) / (b * c) from the 2x2 table',
    interpretation: 'OR approximates RR when disease prevalence is low (<10%, the rare disease assumption). OR is the natural output of logistic regression and case-control studies.',
    clinicalExample: 'A case-control study finds OR = 3.5 for oral contraceptive use and deep vein thrombosis, meaning the odds of DVT are 3.5 times higher with OCP use.',
    commonPitfalls: [
      'OR overestimates RR when the outcome is common (>10% prevalence).',
      'OR from case-control studies cannot be converted to RR without knowing prevalence.',
      'OR is symmetric: OR for disease given exposure = OR for exposure given disease.',
    ],
  },
  hazard_ratio: {
    id: 'hazard_ratio',
    name: 'Hazard Ratio (HR)',
    category: 'measures-of-effect',
    definition: 'The ratio of hazard rates between two groups, representing the instantaneous risk of an event at any given time point.',
    formula: 'HR = hazard in treatment / hazard in control; derived from Cox regression: h(t) = h0(t) * exp(beta * X)',
    interpretation: 'HR < 1 favors treatment (lower event rate); HR > 1 favors control. The proportional hazards assumption requires a constant HR over time.',
    clinicalExample: 'An oncology trial reports HR for death = 0.65 (95% CI: 0.50-0.85), meaning 35% lower instantaneous risk of death with the new treatment at any time.',
    commonPitfalls: [
      'HR assumes proportional hazards; crossing Kaplan-Meier curves violate this assumption.',
      'HR is relative and does not convey absolute benefit without baseline event rates.',
      'HR and OR are different measures and should not be used interchangeably.',
    ],
  },
  confidence_interval: {
    id: 'confidence_interval',
    name: 'Confidence Interval',
    category: 'measures-of-effect',
    definition: 'A range of values within which the true population parameter is expected to fall at a specified confidence level (typically 95%).',
    formula: '95% CI for mean = mean +/- 1.96 * (SD / sqrt(n)); 95% CI for proportion = p +/- 1.96 * sqrt[p(1-p)/n]',
    interpretation: 'If the study were repeated many times, 95% of calculated intervals would contain the true parameter. Wider CIs indicate less precision. For RR/OR, a CI crossing 1.0 means not statistically significant.',
    clinicalExample: 'A drug reduces LDL by 30 mg/dL (95% CI: 25-35). The narrow CI indicates high precision and the true effect likely lies between 25 and 35.',
    commonPitfalls: [
      'A 95% CI does NOT mean 95% probability the true value is within this specific interval.',
      'Overlapping CIs between groups do not necessarily mean no significant difference.',
      'Very large samples can produce narrow CIs around trivial effects.',
    ],
  },

  // ==========================================================================
  // HYPOTHESIS TESTING
  // ==========================================================================
  p_value: {
    id: 'p_value',
    name: 'P-Value',
    category: 'hypothesis-testing',
    definition: 'The probability of observing results as extreme as (or more extreme than) the data, assuming the null hypothesis is true.',
    interpretation: 'A p-value is NOT the probability that the null hypothesis is true. It quantifies evidence against H0. P < 0.05 is conventional but arbitrary. Always interpret alongside effect size and CI.',
    clinicalExample: 'A trial finds 2 mmHg BP reduction (p = 0.001): statistically significant but clinically meaningless. A 5% mortality reduction (p = 0.08): not significant but potentially clinically important.',
    commonPitfalls: [
      'P-hacking: testing multiple comparisons and selectively reporting significant ones.',
      'Statistical significance does not equal clinical significance.',
      'The 0.05 threshold is arbitrary; the ASA (2016) warns against binary interpretation.',
    ],
  },
  type_i_error: {
    id: 'type_i_error',
    name: 'Type I Error (Alpha)',
    category: 'hypothesis-testing',
    definition: 'A false positive: rejecting a true null hypothesis, concluding an effect exists when it does not.',
    formula: 'Alpha (typically set at 0.05)',
    interpretation: 'Alpha = 0.05 means accepting a 5% chance of a false positive. Multiple comparisons inflate alpha unless corrections (Bonferroni, Holm) are applied.',
    clinicalExample: 'Concluding a drug works when it actually does not, leading to adoption of an ineffective treatment. This is a "false alarm."',
    commonPitfalls: [
      'Multiple testing inflates familywise error rate exponentially.',
      'Bonferroni correction (alpha / number of tests) is simple but overly conservative.',
      'In screening contexts, higher alpha may be acceptable to avoid missing disease.',
    ],
  },
  type_ii_error: {
    id: 'type_ii_error',
    name: 'Type II Error (Beta)',
    category: 'hypothesis-testing',
    definition: 'A false negative: failing to reject a false null hypothesis, concluding no effect exists when one does.',
    formula: 'Beta (typically set at 0.20, meaning 80% power)',
    interpretation: 'Beta = 0.20 means a 20% chance of missing a real effect. Power = 1 - beta. An underpowered study may fail to detect a clinically meaningful treatment effect.',
    clinicalExample: 'A trial with 50 patients per arm and 40% power concludes "no difference" between treatments. The study was more likely to miss the effect than detect it.',
    commonPitfalls: [
      'Non-significant results in underpowered studies do NOT prove absence of effect.',
      'Researchers focus on alpha while neglecting beta, leading to underpowered studies.',
      'Absence of evidence is not evidence of absence.',
    ],
  },
  power_analysis: {
    id: 'power_analysis',
    name: 'Power Analysis',
    category: 'hypothesis-testing',
    definition: 'A calculation to determine the sample size needed to detect a specified effect size with a given probability (power), typically performed before starting a study.',
    formula: 'Power = 1 - beta; depends on sample size, effect size, alpha level, and variance',
    interpretation: 'Studies conventionally target 80% power (beta = 0.20). Power increases with larger sample size, larger effect size, higher alpha, and lower variance.',
    clinicalExample: 'A trial planning to detect a 10% difference in response rates (50% vs 60%) with 80% power at alpha 0.05 requires approximately 400 patients per arm.',
    commonPitfalls: [
      'Post-hoc power calculations are circular and statistically inappropriate.',
      'Power analysis should be performed a priori and reported in the methods section.',
      'Underpowered studies waste resources and provide inconclusive results.',
    ],
  },
  sample_size_calculation: {
    id: 'sample_size_calculation',
    name: 'Sample Size Calculation',
    category: 'hypothesis-testing',
    definition: 'A method to determine the minimum number of participants required to detect a clinically meaningful effect with adequate statistical power.',
    formula: 'n = (Z_alpha/2 + Z_beta)^2 * 2 * sigma^2 / delta^2 (continuous); n = (Z_alpha/2 + Z_beta)^2 * [p1(1-p1) + p2(1-p2)] / (p1 - p2)^2 (proportions)',
    interpretation: 'Sample size depends on desired power, alpha, expected effect size, and outcome variance. Larger expected effect or lower variance requires fewer participants.',
    clinicalExample: 'To detect a 5 mmHg BP difference (SD = 10) with 80% power and alpha 0.05, approximately 64 patients per group are needed.',
    commonPitfalls: [
      'Overestimating effect size leads to underpowered studies.',
      'Must account for expected dropout rate (inflate sample size by 10-20%).',
      'Cluster-randomized designs require inflation for intracluster correlation.',
    ],
  },
  t_test: {
    id: 't_test',
    name: 'Student\'s t-Test',
    category: 'hypothesis-testing',
    definition: 'A parametric test comparing means between two groups (independent t-test) or within one group at two time points (paired t-test).',
    formula: 't = (mean1 - mean2) / SE_difference; df = n1 + n2 - 2 (independent)',
    interpretation: 'Assumes normally distributed continuous data and equal variances (Welch t-test relaxes equal variance). Appropriate for comparing two groups only; use ANOVA for three or more.',
    clinicalExample: 'Comparing mean hemoglobin levels between treatment and control groups at 12 weeks yields t = 3.2, p = 0.002, indicating a significant difference.',
    commonPitfalls: [
      'Not appropriate for non-normal data; use Mann-Whitney U instead.',
      'Multiple pairwise t-tests inflate Type I error; use ANOVA with post-hoc tests.',
      'Paired t-test requires matched or repeated-measures data, not independent groups.',
    ],
  },
  chi_square: {
    id: 'chi_square',
    name: 'Chi-Square Test',
    category: 'hypothesis-testing',
    definition: 'A non-parametric test comparing observed vs expected frequencies in categorical data to assess association between two categorical variables.',
    formula: 'chi^2 = sum of [(O - E)^2 / E]; df = (rows - 1) * (cols - 1)',
    interpretation: 'Tests whether the distribution of categorical outcomes differs between groups. Requires expected cell counts >= 5. For 2x2 tables with small counts, use Fisher exact test.',
    clinicalExample: 'Comparing cure rates (cured/not cured) between Drug A and Drug B in a 2x2 table: chi^2 = 6.4, df = 1, p = 0.011.',
    commonPitfalls: [
      'Invalid when expected cell counts are < 5; use Fisher exact test instead.',
      'Chi-square tests association, not causation or magnitude of effect.',
      'Yates continuity correction is sometimes applied for 2x2 tables but is controversial.',
    ],
  },
  anova: {
    id: 'anova',
    name: 'ANOVA (Analysis of Variance)',
    category: 'hypothesis-testing',
    definition: 'A parametric test comparing means across three or more groups by analyzing variance between and within groups.',
    formula: 'F = MS_between / MS_within; MS = SS / df',
    interpretation: 'A significant F-test indicates at least one group mean differs but does not identify which. Post-hoc tests (Tukey, Bonferroni) determine pairwise differences.',
    clinicalExample: 'Comparing mean pain scores across three treatment arms (placebo, low-dose, high-dose): F = 8.5, p < 0.001, followed by Tukey post-hoc to identify differing pairs.',
    commonPitfalls: [
      'ANOVA assumes normality, homogeneity of variances, and independence.',
      'A significant F-test requires post-hoc testing to identify which groups differ.',
      'Repeated-measures ANOVA is needed for within-subject designs; otherwise use mixed models.',
    ],
  },
  mann_whitney: {
    id: 'mann_whitney',
    name: 'Mann-Whitney U Test',
    category: 'hypothesis-testing',
    definition: 'A non-parametric test comparing distributions of a continuous or ordinal variable between two independent groups using ranks.',
    interpretation: 'The non-parametric alternative to the independent t-test. Used when data are ordinal, non-normal, or have outliers. Compares medians/ranks rather than means.',
    clinicalExample: 'Comparing length of hospital stay (skewed distribution) between surgical techniques: Mann-Whitney U = 245, p = 0.03, indicating significantly shorter stay with technique B.',
    commonPitfalls: [
      'Less powerful than the t-test when parametric assumptions are met.',
      'Tests whether one distribution is stochastically greater, not just median difference.',
      'For paired non-parametric data, use the Wilcoxon signed-rank test instead.',
    ],
  },
  fisher_exact: {
    id: 'fisher_exact',
    name: 'Fisher Exact Test',
    category: 'hypothesis-testing',
    definition: 'An exact test of association in 2x2 contingency tables, preferred over chi-square when expected cell counts are small (<5).',
    interpretation: 'Computes the exact probability of the observed (or more extreme) table configuration under the null hypothesis. No minimum sample size requirement.',
    clinicalExample: 'A study with 15 patients comparing adverse event rates (2 events in treatment vs 0 in control): Fisher exact p = 0.48, not significant given the tiny sample.',
    commonPitfalls: [
      'Computationally intensive for large tables but standard software handles it easily.',
      'For larger tables (>2x2), use the Freeman-Halton extension of the Fisher test.',
      'Fisher exact test is always valid; chi-square is an approximation that can fail with small counts.',
    ],
  },

  // ==========================================================================
  // REGRESSION
  // ==========================================================================
  linear_regression: {
    id: 'linear_regression',
    name: 'Linear Regression',
    category: 'regression',
    definition: 'A method modeling the linear relationship between a continuous outcome variable and one or more predictor variables.',
    formula: 'Y = beta_0 + beta_1*X_1 + ... + beta_n*X_n + epsilon',
    interpretation: 'Beta coefficients represent the change in the outcome for a one-unit change in the predictor, holding other variables constant. R-squared indicates the proportion of variance explained.',
    clinicalExample: 'Modeling systolic BP as a function of age, BMI, and sodium intake: each 1-unit increase in BMI is associated with a 1.5 mmHg increase in SBP (beta = 1.5, p < 0.001).',
    commonPitfalls: [
      'Assumes linearity, independence, homoscedasticity, and normally distributed residuals.',
      'Multicollinearity between predictors inflates standard errors and destabilizes coefficients.',
      'Correlation does not imply causation; regression adjusts for confounders but cannot prove causality.',
    ],
  },
  logistic_regression: {
    id: 'logistic_regression',
    name: 'Logistic Regression',
    category: 'regression',
    definition: 'A method modeling the probability of a binary outcome as a function of one or more predictor variables using the logit link function.',
    formula: 'ln(p / (1-p)) = beta_0 + beta_1*X_1 + ... + beta_n*X_n; OR = exp(beta)',
    interpretation: 'Exponentiated coefficients yield odds ratios. Used for binary outcomes (disease yes/no, death yes/no). The c-statistic (AUC) measures discrimination.',
    clinicalExample: 'Predicting 30-day mortality after MI using age, troponin, and ejection fraction. Age OR = 1.04 per year means 4% higher odds of death for each additional year of age.',
    commonPitfalls: [
      'Requires adequate events per variable (typically >= 10 events per predictor).',
      'OR from logistic regression overestimates RR when outcome prevalence > 10%.',
      'Hosmer-Lemeshow test assesses calibration but has limited power in large samples.',
    ],
  },
  cox_regression: {
    id: 'cox_regression',
    name: 'Cox Proportional Hazards Regression',
    category: 'regression',
    definition: 'A semi-parametric regression model for time-to-event data that estimates hazard ratios while adjusting for covariates.',
    formula: 'h(t) = h_0(t) * exp(beta_1*X_1 + ... + beta_n*X_n)',
    interpretation: 'Exponentiated coefficients yield adjusted hazard ratios. The baseline hazard h_0(t) is left unspecified (semi-parametric). Assumes proportional hazards (constant HR over time).',
    clinicalExample: 'Adjusting for age and stage, a new chemotherapy has HR = 0.72 (95% CI: 0.58-0.89) for death, meaning 28% lower hazard compared to standard therapy.',
    commonPitfalls: [
      'Proportional hazards assumption must be checked (Schoenfeld residuals, log-log plots).',
      'Crossing Kaplan-Meier curves indicate violation; consider time-varying coefficients or RMST.',
      'Informative censoring (patients lost due to illness) violates the independent censoring assumption.',
    ],
  },

  // ==========================================================================
  // SURVIVAL ANALYSIS
  // ==========================================================================
  kaplan_meier: {
    id: 'kaplan_meier',
    name: 'Kaplan-Meier Survival Analysis',
    category: 'survival-analysis',
    definition: 'A non-parametric method estimating the probability of surviving (remaining event-free) beyond successive time points, accounting for censored observations.',
    formula: 'S(t) = product of [(n_i - d_i) / n_i] for all event times up to t',
    interpretation: 'The KM curve is a step function decreasing at each event. Median survival is where the curve crosses 50%. The log-rank test compares curves between groups.',
    clinicalExample: 'A KM curve shows median overall survival of 24 months with immunotherapy vs 12 months with chemotherapy. Curves separate at 3 months and remain separated.',
    commonPitfalls: [
      'Heavy censoring near the tail makes late estimates unreliable; check numbers at risk.',
      'Crossing curves violate proportional hazards; log-rank test becomes problematic.',
      'Median survival requires at least 50% of participants to have experienced the event.',
    ],
  },

  // ==========================================================================
  // STUDY DESIGN
  // ==========================================================================
  rct_design: {
    id: 'rct_design',
    name: 'Randomized Controlled Trial (RCT) Design',
    category: 'study-design',
    definition: 'An experimental study where participants are randomly allocated to intervention or control groups to minimize bias and establish causation.',
    interpretation: 'The gold standard for evaluating treatment efficacy. Randomization addresses both known and unknown confounders. Assess randomization method, allocation concealment, blinding, and ITT analysis.',
    clinicalExample: 'The SPRINT trial randomized patients to intensive vs standard BP control, demonstrating reduced cardiovascular events with SBP target < 120 mmHg.',
    commonPitfalls: [
      'Volunteer bias: RCT participants may not represent the general population.',
      'Ethical constraints prevent randomizing to known harmful exposures.',
      'Loss to follow-up compromises randomization balance and introduces attrition bias.',
    ],
  },
  intention_to_treat: {
    id: 'intention_to_treat',
    name: 'Intention-to-Treat (ITT) Analysis',
    category: 'study-design',
    definition: 'Analyzing all randomized participants in their originally assigned groups regardless of adherence, crossover, or withdrawal.',
    interpretation: 'ITT preserves randomization balance and provides a pragmatic real-world effectiveness estimate. It is the gold standard primary analysis for superiority RCTs.',
    clinicalExample: 'In a surgery vs medication trial, 15% randomized to surgery refused. ITT analyzes them in the surgery group, preserving the integrity of randomization.',
    commonPitfalls: [
      'ITT can underestimate efficacy when non-adherence is high.',
      'Modified ITT definitions vary across studies and can introduce bias.',
      'Missing data handling (multiple imputation, LOCF) is critical for valid ITT analysis.',
    ],
  },
  per_protocol: {
    id: 'per_protocol',
    name: 'Per-Protocol Analysis',
    category: 'study-design',
    definition: 'Analysis including only participants who completed the study as planned, adhering to the assigned intervention throughout.',
    interpretation: 'Estimates biological efficacy under perfect adherence but breaks randomization. In non-inferiority trials, PP analysis is the more conservative approach and should be reported alongside ITT.',
    clinicalExample: 'A PP analysis showing a large treatment effect that disappears on ITT suggests the benefit depends on strict adherence, which may not occur in practice.',
    commonPitfalls: [
      'PP breaks randomization and reintroduces confounding.',
      'Reasons for non-adherence may be treatment-related (side effects), biasing results.',
      'For superiority trials, PP can falsely inflate treatment effects.',
    ],
  },
  crossover_design: {
    id: 'crossover_design',
    name: 'Crossover Design',
    category: 'study-design',
    definition: 'A study where each participant receives both treatments in sequential periods, serving as their own control, with a washout period between phases.',
    interpretation: 'Eliminates between-subject variability, increasing power with fewer participants. Only suitable for stable chronic conditions with reversible, non-curative treatments.',
    clinicalExample: 'A crossover trial comparing two inhaled bronchodilators in stable COPD, with a 1-week washout. Each patient receives both drugs, allowing within-patient comparison.',
    commonPitfalls: [
      'Carryover effects invalidate the design if washout is insufficient (need 5-7 half-lives).',
      'Period effects (disease progression) can confound results.',
      'Not appropriate for conditions that resolve or treatments that cure.',
    ],
  },
  case_control: {
    id: 'case_control',
    name: 'Case-Control Study',
    category: 'study-design',
    definition: 'An observational study comparing individuals with a disease (cases) to those without (controls), looking backward to identify associated exposures.',
    interpretation: 'The most efficient design for rare diseases. Cannot calculate incidence or RR directly; uses odds ratio instead. OR approximates RR when disease is rare (<10%).',
    clinicalExample: 'Doll and Hill\'s case-control study linking smoking to lung cancer (1950) compared lung cancer patients to hospital controls, finding markedly higher smoking rates in cases.',
    commonPitfalls: [
      'Recall bias: cases remember exposures differently than controls.',
      'Selection of appropriate controls is the most challenging methodological aspect.',
      'Cannot establish incidence, prevalence, or temporal sequence with certainty.',
    ],
  },
  cohort_study: {
    id: 'cohort_study',
    name: 'Cohort Study',
    category: 'study-design',
    definition: 'An observational study following a defined group over time, comparing exposed vs unexposed individuals to assess the exposure-outcome relationship.',
    formula: 'RR = Incidence in exposed / Incidence in unexposed; Attributable Risk = Incidence_exposed - Incidence_unexposed',
    interpretation: 'Can directly calculate incidence and relative risk. Prospective cohorts are the strongest observational design for establishing temporal sequence. Retrospective cohorts use existing records.',
    clinicalExample: 'The Framingham Heart Study has followed participants since 1948, identifying major cardiovascular risk factors including hypertension, cholesterol, smoking, and diabetes.',
    commonPitfalls: [
      'Loss to follow-up can bias results if dropouts differ systematically.',
      'Prospective cohorts are expensive and slow for diseases with long latency.',
      'Cannot prove causation due to potential unmeasured confounders.',
    ],
  },
  systematic_review: {
    id: 'systematic_review',
    name: 'Systematic Review',
    category: 'study-design',
    definition: 'A comprehensive, reproducible synthesis of all available evidence on a specific clinical question using pre-defined, transparent methods.',
    interpretation: 'The highest level of evidence when well-conducted. Uses explicit methods for search, selection, appraisal, and synthesis. May or may not include meta-analysis depending on heterogeneity.',
    clinicalExample: 'A Cochrane review on corticosteroids for community-acquired pneumonia identifies 17 RCTs and shows reduced mortality, informing international guideline recommendations.',
    commonPitfalls: [
      'A systematic review is only as good as its included studies (garbage in, garbage out).',
      'Publication bias can distort findings even in comprehensive reviews.',
      'Outdated reviews may miss important recent evidence; check the search date.',
    ],
  },

  // ==========================================================================
  // META-ANALYSIS
  // ==========================================================================
  meta_analysis: {
    id: 'meta_analysis',
    name: 'Meta-Analysis',
    category: 'meta-analysis',
    definition: 'A statistical method combining results from multiple studies to produce a single pooled estimate of effect with greater precision and power.',
    formula: 'Pooled effect = sum(weight_i * effect_i) / sum(weight_i); Weight_i = 1 / variance_i (inverse variance)',
    interpretation: 'Fixed-effect models assume one true effect; random-effects models assume a distribution of true effects. Heterogeneity (I-squared) indicates consistency across studies.',
    clinicalExample: 'A meta-analysis of 10 RCTs shows statins reduce major cardiovascular events by 25% RRR (pooled RR = 0.75, 95% CI: 0.70-0.80), informing primary prevention guidelines.',
    commonPitfalls: [
      'High heterogeneity (I-squared > 75%) may mean studies should not be pooled.',
      'Combining fundamentally different studies (apples and oranges) is misleading.',
      'Publication bias inflates pooled effects because negative studies are underrepresented.',
    ],
  },
  forest_plot: {
    id: 'forest_plot',
    name: 'Forest Plot',
    category: 'meta-analysis',
    definition: 'A graphical display of individual study effect sizes and confidence intervals alongside the pooled meta-analytic estimate.',
    interpretation: 'Each study is represented by a square (size proportional to weight) with a horizontal CI line. The pooled estimate is a diamond at the bottom. A vertical line of no effect (RR/OR = 1 or mean diff = 0) aids interpretation.',
    clinicalExample: 'A forest plot of 8 RCTs shows most studies favor treatment (squares left of 1.0), with the pooled diamond entirely to the left, confirming benefit.',
    commonPitfalls: [
      'Visual inspection can be misleading; always check I-squared and the pooled CI.',
      'Studies with wider CIs contribute less weight (smaller squares) to the pooled estimate.',
      'Subgroup analyses displayed in forest plots are exploratory and hypothesis-generating.',
    ],
  },
  funnel_plot: {
    id: 'funnel_plot',
    name: 'Funnel Plot',
    category: 'meta-analysis',
    definition: 'A scatter plot of study effect sizes (x-axis) vs a measure of study precision, typically standard error (y-axis, inverted), used to detect publication bias.',
    interpretation: 'A symmetric, inverted funnel shape suggests no publication bias. Asymmetry (missing bottom-left corner, i.e., small negative studies) suggests publication bias. Egger test formalizes this assessment.',
    clinicalExample: 'A funnel plot for antidepressant trials shows asymmetry: small studies with negative results are missing, suggesting publication bias and an inflated pooled effect.',
    commonPitfalls: [
      'Asymmetry can result from genuine heterogeneity, not just publication bias.',
      'Funnel plots require at least 10 studies to be informative.',
      'The Egger test has low power with few studies and should be interpreted cautiously.',
    ],
  },

  // ==========================================================================
  // BIAS ASSESSMENT
  // ==========================================================================
  selection_bias: {
    id: 'selection_bias',
    name: 'Selection Bias',
    category: 'bias-assessment',
    definition: 'Systematic error from the way participants are selected or allocated, making study groups non-comparable at baseline.',
    interpretation: 'Occurs when the sample does not represent the target population or comparison groups differ systematically. Subtypes: sampling, volunteer, Berkson, healthy worker, and allocation bias.',
    clinicalExample: 'A study recruiting only from a tertiary center overestimates disease severity (Berkson bias). Volunteers for wellness trials tend to be healthier (volunteer bias).',
    commonPitfalls: [
      'Selection bias cannot be corrected in analysis once it has occurred.',
      'Self-selection into treatment groups in observational studies is a major source.',
      'Propensity score matching only partially mitigates selection bias in observational studies.',
    ],
  },
  recall_bias: {
    id: 'recall_bias',
    name: 'Recall Bias',
    category: 'bias-assessment',
    definition: 'Systematic error arising from differential recall of past exposures between cases and controls, with cases typically remembering exposures more completely.',
    interpretation: 'A subtype of information bias especially problematic in case-control studies. Participants with disease search their memory more thoroughly for possible exposures.',
    clinicalExample: 'Mothers of children with birth defects recall medication use during pregnancy more completely than mothers of healthy children, inflating the association with drug exposure.',
    commonPitfalls: [
      'Recall bias inflates odds ratios in case-control studies.',
      'Using objective records (pharmacy databases, medical charts) instead of self-report reduces recall bias.',
      'Blinding participants to the study hypothesis can partially mitigate recall bias.',
    ],
  },
  attrition_bias: {
    id: 'attrition_bias',
    name: 'Attrition Bias',
    category: 'bias-assessment',
    definition: 'Systematic error from differential loss to follow-up between study groups, potentially breaking the balance achieved by randomization.',
    interpretation: 'If patients who drop out differ from those who remain (e.g., sicker patients stop treatment due to side effects), results become biased. ITT analysis partially addresses this.',
    clinicalExample: 'In a drug trial, 25% of the treatment arm drops out due to side effects vs 5% in placebo. PP analysis overestimates efficacy because the sickest patients left the treatment group.',
    commonPitfalls: [
      'Differential attrition > 5-10% raises serious concerns about validity.',
      'ITT analysis mitigates attrition bias but requires imputation for missing outcomes.',
      'Always compare baseline characteristics of completers vs dropouts.',
    ],
  },
  publication_bias: {
    id: 'publication_bias',
    name: 'Publication Bias',
    category: 'bias-assessment',
    definition: 'The tendency for studies with positive or significant results to be published more frequently than those with negative or null results.',
    interpretation: 'Leads to overestimation of treatment effects in systematic reviews. Detected via funnel plot asymmetry and Egger test. Trial registries (ClinicalTrials.gov) help by documenting all initiated studies.',
    clinicalExample: 'A meta-analysis of antidepressants showed inflated effects. When FDA data including unpublished negative trials were analyzed, the pooled effect was substantially smaller.',
    commonPitfalls: [
      'Funnel plot asymmetry alone does not prove publication bias.',
      'Grey literature (conference abstracts, dissertations) only partially mitigates the problem.',
      'Selective outcome reporting (reporting only significant outcomes) is a related bias.',
    ],
  },
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Get all entry keys as an array. */
export const getAllEntryIds = (): string[] => Object.keys(BIOSTATISTICS_ENTRIES);

/** Get a single entry by its key. Returns undefined if not found. */
export const getEntryById = (id: string): BiostatisticsEntry | undefined =>
  BIOSTATISTICS_ENTRIES[id];

/** Filter entries by one or more categories. */
export const filterByCategory = (
  categories: BiostatisticsCategory[],
): BiostatisticsEntry[] =>
  Object.values(BIOSTATISTICS_ENTRIES).filter((e) =>
    categories.includes(e.category),
  );

/** Search entries by query string across id, name, definition, and interpretation. */
export const searchBiostatisticsEntries = (query: string): BiostatisticsEntry[] => {
  const q = query.toLowerCase();
  return Object.values(BIOSTATISTICS_ENTRIES).filter(
    (e) =>
      e.id.toLowerCase().includes(q) ||
      e.name.toLowerCase().includes(q) ||
      e.definition.toLowerCase().includes(q) ||
      e.interpretation.toLowerCase().includes(q),
  );
};

/** Get all entries for a single category. */
export const getEntriesByCategory = (
  category: BiostatisticsCategory,
): BiostatisticsEntry[] =>
  Object.values(BIOSTATISTICS_ENTRIES).filter((e) => e.category === category);

/** Get the total count of entries. */
export const getEntryCount = (): number => Object.keys(BIOSTATISTICS_ENTRIES).length;
