/**
 * Public Health & Epidemiology Database
 *
 * Comprehensive database of public health and epidemiology concepts
 * for medical education, covering epidemiology measures, biostatistics,
 * study designs, screening, health policy, social determinants,
 * vaccine epidemiology, outbreak investigation, and environmental health.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PublicHealthCategory =
  | 'epidemiology'
  | 'biostatistics'
  | 'infectious-disease-epi'
  | 'chronic-disease-epi'
  | 'environmental-health'
  | 'health-policy'
  | 'global-health'
  | 'social-determinants'
  | 'screening';

export interface PublicHealthEntry {
  id: string;
  name: string;
  category: PublicHealthCategory;
  description: string;
  conceptExplanation: string;
  clinicalRelevance: string;
  examples: string[];
  calculations?: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const publicHealthDatabase: PublicHealthEntry[] = [
  // =========================================================================
  // EPIDEMIOLOGY
  // =========================================================================
  {
    id: 'incidence',
    name: 'Incidence',
    category: 'epidemiology',
    description: 'Number of NEW cases of disease occurring in a population over a specified time period.',
    conceptExplanation:
      'Incidence measures the rate at which new cases develop. Cumulative incidence (risk) is the proportion of an at-risk population that develops the disease during a fixed time. Incidence rate (person-time) accounts for varying follow-up durations. Incidence requires knowing disease-free status at baseline.',
    clinicalRelevance:
      'Used to assess disease risk, evaluate prevention programs, and identify emerging outbreaks. A rising incidence signals a growing public health problem. Incidence data drive resource allocation for screening and treatment.',
    examples: [
      '500 new cases of lung cancer diagnosed in a city of 100,000 in one year = cumulative incidence of 0.5%',
      'Incidence rate of HIV in a cohort: 20 new infections per 1,000 person-years',
      'Attack rate during a foodborne outbreak: 30 of 100 attendees became ill = 30%',
    ],
    calculations: [
      'Cumulative incidence = (New cases during period) / (Population at risk at start)',
      'Incidence rate = (New cases) / (Total person-time at risk)',
    ],
    keyPearls: [
      'Incidence captures only NEW cases; prevalence captures all existing cases',
      'Requires a disease-free cohort at baseline to accurately measure',
      'Attack rate is a type of cumulative incidence used in outbreak settings',
    ],
    references: [
      'Gordis L. Epidemiology. 6th ed. Elsevier; 2019.',
      'Rothman KJ. Epidemiology: An Introduction. 2nd ed. Oxford; 2012.',
    ],
  },
  {
    id: 'prevalence',
    name: 'Prevalence',
    category: 'epidemiology',
    description: 'Proportion of a population that HAS a disease at a given point or period in time.',
    conceptExplanation:
      'Point prevalence measures disease burden at a single moment; period prevalence measures during a defined interval. Prevalence depends on both incidence and disease duration: P ≈ I x D. High prevalence may reflect high incidence, long duration, or both.',
    clinicalRelevance:
      'Guides healthcare resource planning, helps estimate PPV/NPV of screening tests, and assesses chronic disease burden. A disease with low incidence but long duration (e.g., diabetes) will have high prevalence.',
    examples: [
      'Point prevalence of diabetes in the US: approximately 11% of the adult population',
      'Period prevalence of depression over 12 months: ~8% of US adults',
      'Prevalence of HIV globally: approximately 39 million people living with HIV',
    ],
    calculations: [
      'Point prevalence = (Existing cases at a point in time) / (Total population at that time)',
      'Period prevalence = (Existing cases during a period) / (Average population during period)',
      'Prevalence ≈ Incidence x Duration (for steady-state conditions)',
    ],
    keyPearls: [
      'Prevalence = incidence x duration (in steady state)',
      'Improved treatment increases prevalence by prolonging survival without curing disease',
      'Prevalence is used to calculate positive/negative predictive values',
    ],
    references: [
      'Gordis L. Epidemiology. 6th ed. Elsevier; 2019.',
      'CDC. Principles of Epidemiology in Public Health Practice. 3rd ed.',
    ],
  },
  {
    id: 'relative-risk',
    name: 'Relative Risk (Risk Ratio)',
    category: 'epidemiology',
    description: 'Ratio of the probability of disease in the exposed group versus the unexposed group.',
    conceptExplanation:
      'RR compares cumulative incidence (risk) between exposed and unexposed groups. RR = 1 means no association; RR > 1 indicates increased risk with exposure; RR < 1 indicates decreased risk (protective). RR is calculated from cohort studies or RCTs where incidence can be directly measured.',
    clinicalRelevance:
      'Quantifies the strength of association between exposure and disease. RR of 2.0 means exposed individuals have twice the risk. Essential for evaluating treatment efficacy and harmful exposures.',
    examples: [
      'Smokers have RR = 15-30 for lung cancer compared to non-smokers',
      'RR of MI with statin use = 0.70, indicating a 30% risk reduction',
      'RR of cervical cancer with HPV infection ≈ 100',
    ],
    calculations: [
      'RR = (Incidence in exposed) / (Incidence in unexposed)',
      'RR = [a/(a+b)] / [c/(c+d)] in a 2x2 table',
    ],
    keyPearls: [
      'Can only be directly calculated from cohort studies and RCTs',
      'Cannot be calculated from case-control studies (use OR instead)',
      'RR approaches OR when disease is rare (rare disease assumption)',
    ],
    references: [
      'Rothman KJ. Epidemiology: An Introduction. 2nd ed. Oxford; 2012.',
      'Szklo M, Nieto FJ. Epidemiology: Beyond the Basics. 4th ed. Jones & Bartlett; 2019.',
    ],
  },
  {
    id: 'odds-ratio',
    name: 'Odds Ratio',
    category: 'epidemiology',
    description: 'Ratio of the odds of exposure among cases to the odds of exposure among controls.',
    conceptExplanation:
      'The OR compares the odds of exposure in disease cases versus controls. In case-control studies, incidence cannot be calculated directly, so OR approximates RR. When disease prevalence is low (<10%), OR ≈ RR. OR is also the measure of association produced by logistic regression.',
    clinicalRelevance:
      'Primary measure of association in case-control studies and logistic regression. Used when disease is rare and a cohort study would be impractical. Frequently encountered in clinical literature.',
    examples: [
      'OR of 3.5 for oral contraceptive use and DVT in case-control study',
      'OR of 6.1 for asbestos exposure and mesothelioma',
      'OR of 0.5 for aspirin use and colorectal cancer (protective)',
    ],
    calculations: [
      'OR = (a x d) / (b x c) in a 2x2 table (cross-product ratio)',
      'OR = (Odds of exposure in cases) / (Odds of exposure in controls)',
    ],
    keyPearls: [
      'OR is the primary measure in case-control studies',
      'OR ≈ RR when disease prevalence is < 10% (rare disease assumption)',
      'OR always overestimates RR for RR > 1 and underestimates for RR < 1',
      'Logistic regression outputs are expressed as ORs',
    ],
    references: [
      'Gordis L. Epidemiology. 6th ed. Elsevier; 2019.',
      'Rothman KJ. Epidemiology: An Introduction. 2nd ed. Oxford; 2012.',
    ],
  },
  {
    id: 'nnt',
    name: 'Number Needed to Treat (NNT)',
    category: 'epidemiology',
    description: 'Number of patients that must be treated for one additional patient to benefit.',
    conceptExplanation:
      'NNT is the inverse of the absolute risk reduction (ARR). It translates relative measures into a clinically intuitive metric. Lower NNT means more effective treatment. An ideal NNT is 1 (every patient benefits). NNT is specific to the time frame and population studied.',
    clinicalRelevance:
      'Essential for clinical decision-making and shared decision-making with patients. Helps compare treatments across different studies. A statin NNT of 50 over 5 years means treating 50 patients for 5 years prevents one cardiovascular event.',
    examples: [
      'Statins for primary prevention of MI: NNT ≈ 50 over 5 years',
      'Antibiotics for acute otitis media resolution at 7 days: NNT ≈ 7',
      'Thrombolytics for acute MI mortality: NNT ≈ 56',
    ],
    calculations: [
      'NNT = 1 / ARR',
      'ARR = |Risk in control - Risk in treatment|',
      'NNT = 1 / |CER - EER| where CER = control event rate, EER = experimental event rate',
    ],
    keyPearls: [
      'Always specify time frame when reporting NNT',
      'Lower NNT = more effective treatment',
      'NNT is population-specific; higher baseline risk lowers NNT',
      'NNT of infinity means no treatment effect',
    ],
    references: [
      'Laupacis A et al. An assessment of clinically useful measures of the consequences of treatment. NEJM. 1988;318:1728-33.',
      'Citrome L. Number needed to treat: what it is and what it isn\'t. Evidence Based Mental Health. 2011;14:66-68.',
    ],
  },
  {
    id: 'nnh',
    name: 'Number Needed to Harm (NNH)',
    category: 'epidemiology',
    description: 'Number of patients exposed to a treatment before one additional adverse event occurs.',
    conceptExplanation:
      'NNH is the inverse of the absolute risk increase (ARI). It quantifies how many patients must receive a treatment for one additional patient to experience an adverse outcome. Higher NNH indicates a safer treatment. NNH is used alongside NNT for risk-benefit analysis.',
    clinicalRelevance:
      'Balances treatment decisions by quantifying harm alongside benefit. Comparing NNT vs NNH for a medication helps determine whether benefits outweigh risks. Critical for informed consent discussions.',
    examples: [
      'NSAIDs and GI bleeding: NNH ≈ 100-200 per year',
      'Warfarin and major bleeding: NNH ≈ 50 per year',
      'SSRIs and sexual dysfunction: NNH ≈ 5-10',
    ],
    calculations: [
      'NNH = 1 / ARI',
      'ARI = Risk in treatment group - Risk in control group (when treatment increases harm)',
    ],
    keyPearls: [
      'Higher NNH = safer treatment',
      'Compare NNT/NNH ratio: treatment is favorable when NNH >> NNT',
      'Must consider severity of harm, not just frequency',
    ],
    references: [
      'Citrome L. Quantifying risk: the role of absolute and relative measures. Acta Psychiatr Scand. 2010;122:5-13.',
    ],
  },
  {
    id: 'attack-rate',
    name: 'Attack Rate',
    category: 'epidemiology',
    description: 'Proportion of an at-risk population that develops disease during an outbreak over a defined period.',
    conceptExplanation:
      'Attack rate is a form of cumulative incidence used in outbreak investigations. It measures the fraction of people who become ill after exposure. Secondary attack rate measures spread among contacts of primary cases. Useful for comparing attack rates across exposure groups to identify the source.',
    clinicalRelevance:
      'Central to outbreak investigation. Comparing food-specific attack rates identifies the implicated vehicle. Secondary attack rate guides infection control measures and quarantine decisions.',
    examples: [
      'Foodborne outbreak: 45/60 people who ate potato salad became ill = 75% attack rate',
      'Secondary attack rate of measles in unvaccinated household contacts: ~90%',
      'COVID-19 household secondary attack rate: approximately 10-20%',
    ],
    calculations: [
      'Attack rate = (Number of new cases) / (Population at risk) x 100',
      'Secondary attack rate = (New cases among contacts) / (Total susceptible contacts) x 100',
    ],
    keyPearls: [
      'Technically a proportion (risk), not a true rate',
      'Used in acute outbreak settings with defined exposure periods',
      'Food-specific attack rates help identify the contaminated food item',
    ],
    references: [
      'CDC. Principles of Epidemiology in Public Health Practice. 3rd ed.',
      'Gregg MB. Field Epidemiology. 3rd ed. Oxford; 2008.',
    ],
  },

  // =========================================================================
  // BIOSTATISTICS
  // =========================================================================
  {
    id: 'p-value',
    name: 'P-value',
    category: 'biostatistics',
    description: 'Probability of obtaining results at least as extreme as observed, assuming the null hypothesis is true.',
    conceptExplanation:
      'A p-value quantifies the strength of evidence against the null hypothesis. It is NOT the probability that the null hypothesis is true. A small p-value (conventionally < 0.05) indicates the observed data would be unlikely under the null hypothesis. P-values do not measure effect size or clinical significance.',
    clinicalRelevance:
      'Used in virtually all clinical research to determine statistical significance. A statistically significant p-value does not guarantee clinical relevance; large studies can produce tiny p-values for trivially small effects.',
    examples: [
      'Drug trial: p = 0.03 means there is a 3% chance of seeing this result (or more extreme) if the drug had no effect',
      'p = 0.001 for a 0.5 mmHg blood pressure difference may be statistically but not clinically significant',
      'p = 0.06 does not mean the treatment "almost worked"',
    ],
    keyPearls: [
      'P-value is NOT the probability that H0 is true',
      'Statistical significance does not equal clinical significance',
      'Influenced by sample size: large n can make trivial differences significant',
      'A threshold of 0.05 is arbitrary convention, not a biological truth',
    ],
    references: [
      'Wasserstein RL, Lazar NA. The ASA Statement on p-Values. Am Stat. 2016;70:129-133.',
      'Greenland S et al. Statistical tests, P values, confidence intervals, and power. Eur J Epidemiol. 2016;31:337-350.',
    ],
  },
  {
    id: 'confidence-interval',
    name: 'Confidence Interval',
    category: 'biostatistics',
    description: 'Range of values that is likely to contain the true population parameter with a specified level of confidence.',
    conceptExplanation:
      'A 95% CI means that if we repeated the study many times, 95% of computed intervals would contain the true value. Narrower intervals indicate more precision. CI width depends on sample size, variability, and confidence level. CIs provide more information than p-values alone because they show both effect size and precision.',
    clinicalRelevance:
      'If a 95% CI for RR includes 1.0, the result is not statistically significant at alpha = 0.05. CIs help determine whether an effect is clinically meaningful by showing the range of plausible values.',
    examples: [
      'RR = 0.75 (95% CI: 0.60-0.93) — statistically significant risk reduction',
      'Mean difference = 5 mmHg (95% CI: -1 to 11) — not statistically significant',
      'OR = 2.1 (95% CI: 1.4-3.2) — significant and clinically meaningful association',
    ],
    calculations: [
      '95% CI ≈ estimate ± 1.96 x standard error',
      'Wider CI with smaller sample size or greater variability',
    ],
    keyPearls: [
      'CI conveys both effect size and precision in one metric',
      'If CI for RR or OR includes 1, or for mean difference includes 0, result is not significant',
      'Preferred over p-values by many journals and guidelines',
      'Increasing sample size narrows the CI',
    ],
    references: [
      'Gardner MJ, Altman DG. Confidence intervals rather than P values. BMJ. 1986;292:746-750.',
    ],
  },
  {
    id: 'statistical-power',
    name: 'Statistical Power',
    category: 'biostatistics',
    description: 'Probability that a study will correctly detect a true effect (reject a false null hypothesis).',
    conceptExplanation:
      'Power = 1 - beta, where beta is the probability of Type II error. Conventionally set at 80% or higher. Power depends on sample size, effect size, alpha level, and variability. Power analysis is performed before a study to determine needed sample size.',
    clinicalRelevance:
      'An underpowered study may miss a real treatment effect (false negative). Negative results from underpowered studies should be interpreted cautiously. Power calculations are required in most grant applications and trial protocols.',
    examples: [
      'A trial with 80% power has a 20% chance of missing a true treatment effect',
      'Doubling sample size increases power when a study is underpowered',
      'Post-hoc power analysis of a negative trial showing only 40% power',
    ],
    calculations: [
      'Power = 1 - beta (probability of Type II error)',
      'Increasing sample size, effect size, or alpha increases power',
    ],
    keyPearls: [
      'Standard target is power >= 80%',
      'Negative study with low power is inconclusive, not proof of no effect',
      'Power analysis should be done a priori, not post hoc',
      'Four determinants: sample size, effect size, alpha level, variability',
    ],
    references: [
      'Cohen J. Statistical Power Analysis for the Behavioral Sciences. 2nd ed. Lawrence Erlbaum; 1988.',
    ],
  },
  {
    id: 'type-i-error',
    name: 'Type I Error (Alpha)',
    category: 'biostatistics',
    description: 'False positive: rejecting the null hypothesis when it is actually true.',
    conceptExplanation:
      'Type I error (alpha) is the probability of concluding there is an effect when none exists. Conventionally set at 0.05 (5%). Multiple comparisons inflate the Type I error rate, requiring corrections (e.g., Bonferroni). Alpha is chosen before the study and determines the significance threshold.',
    clinicalRelevance:
      'Approving an ineffective drug (false positive) wastes resources and exposes patients to side effects without benefit. Multiple testing in genomics or subgroup analyses inflates false positive rates.',
    examples: [
      'Declaring a drug effective when it actually has no benefit (false positive)',
      'Testing 20 outcomes at alpha = 0.05: expect 1 significant result by chance',
      'Bonferroni correction: testing 10 hypotheses at alpha = 0.05/10 = 0.005 each',
    ],
    keyPearls: [
      'Alpha is conventionally set at 0.05',
      'Multiple comparisons require correction (Bonferroni, Holm, FDR)',
      'Type I error = false positive = alpha',
      'More conservative alpha reduces Type I error but increases Type II error',
    ],
    references: [
      'Bland JM, Altman DG. Multiple significance tests: the Bonferroni method. BMJ. 1995;310:170.',
    ],
  },
  {
    id: 'type-ii-error',
    name: 'Type II Error (Beta)',
    category: 'biostatistics',
    description: 'False negative: failing to reject the null hypothesis when it is actually false.',
    conceptExplanation:
      'Type II error (beta) is the probability of missing a true effect. Conventionally accepted at 0.20 (20%), corresponding to 80% power. Underpowered studies have high beta. Reducing alpha increases beta for a given sample size (tradeoff).',
    clinicalRelevance:
      'Failing to detect an effective treatment means patients miss beneficial therapies. Small studies are prone to Type II error. A non-significant result does not prove no effect.',
    examples: [
      'A small trial finds no significant benefit of a new drug, but the study had only 50% power',
      'Missing a true survival benefit because the sample size was too small',
      'Absence of evidence is not evidence of absence',
    ],
    keyPearls: [
      'Beta is conventionally accepted at 0.20 (power = 80%)',
      'Power = 1 - beta',
      'Increasing sample size decreases beta',
      'Non-significant result in underpowered study is inconclusive',
    ],
    references: [
      'Freiman JA et al. The importance of beta, the type II error, and sample size in clinical trials. NEJM. 1978;299:690-694.',
    ],
  },
  {
    id: 'sensitivity',
    name: 'Sensitivity',
    category: 'biostatistics',
    description: 'Ability of a test to correctly identify those WITH the disease (true positive rate).',
    conceptExplanation:
      'Sensitivity = TP / (TP + FN). A highly sensitive test has few false negatives. If a sensitive test is negative, the disease is very unlikely (SnNout: Sensitive test, Negative result, rules Out disease). Sensitivity is a fixed property of the test, independent of prevalence.',
    clinicalRelevance:
      'High-sensitivity tests are ideal for screening because they minimize missed cases. A negative result on a highly sensitive test is reassuring. Examples: troponin for MI, D-dimer for PE.',
    examples: [
      'D-dimer for PE: sensitivity ~95-97%; a negative D-dimer effectively rules out PE in low-risk patients',
      'HIV ELISA screening: sensitivity ~99.5%',
      'Sensitivity of mammography for breast cancer: ~75-90%',
    ],
    calculations: [
      'Sensitivity = TP / (TP + FN)',
      'Sensitivity = True positive rate = 1 - False negative rate',
    ],
    keyPearls: [
      'SnNout: Sensitive test, Negative result rules Out disease',
      'High sensitivity = few false negatives',
      'Used for screening tests where missing disease is costly',
      'Sensitivity is intrinsic to the test, not affected by prevalence',
    ],
    references: [
      'Altman DG, Bland JM. Diagnostic tests 1: sensitivity and specificity. BMJ. 1994;308:1552.',
    ],
  },
  {
    id: 'specificity',
    name: 'Specificity',
    category: 'biostatistics',
    description: 'Ability of a test to correctly identify those WITHOUT the disease (true negative rate).',
    conceptExplanation:
      'Specificity = TN / (TN + FP). A highly specific test has few false positives. If a specific test is positive, the disease is very likely (SpPin: Specific test, Positive result, rules In disease). Specificity is a fixed property of the test, independent of prevalence.',
    clinicalRelevance:
      'High-specificity tests are ideal for confirmatory testing because false positives are minimized. A positive result on a highly specific test is convincing. Examples: Western blot for HIV, tissue biopsy.',
    examples: [
      'HIV Western blot: specificity ~99.9%',
      'Anti-CCP antibodies for RA: specificity ~95%',
      'Pathological biopsy as gold standard: specificity approaches 100%',
    ],
    calculations: [
      'Specificity = TN / (TN + FP)',
      'Specificity = True negative rate = 1 - False positive rate',
    ],
    keyPearls: [
      'SpPin: Specific test, Positive result rules In disease',
      'High specificity = few false positives',
      'Used for confirmatory tests where false positives are costly',
      'Specificity is intrinsic to the test, not affected by prevalence',
    ],
    references: [
      'Altman DG, Bland JM. Diagnostic tests 2: predictive values. BMJ. 1994;309:102.',
    ],
  },
  {
    id: 'ppv',
    name: 'Positive Predictive Value (PPV)',
    category: 'biostatistics',
    description: 'Probability that a person with a positive test result truly has the disease.',
    conceptExplanation:
      'PPV = TP / (TP + FP). Unlike sensitivity/specificity, PPV depends on disease prevalence. As prevalence decreases, PPV drops even with an excellent test. This is why screening low-prevalence populations produces many false positives.',
    clinicalRelevance:
      'Clinicians use PPV to interpret positive test results for individual patients. Screening rare diseases in healthy populations yields low PPV. Pre-test probability (prevalence) is critical for test interpretation.',
    examples: [
      'A 99% sensitive and 99% specific test for a disease with 1% prevalence has PPV of only ~50%',
      'PSA screening for prostate cancer in general population: PPV ~25-40%',
      'PPV of rapid strep test: approximately 95%',
    ],
    calculations: [
      'PPV = TP / (TP + FP)',
      'PPV = (Sensitivity x Prevalence) / [(Sensitivity x Prevalence) + ((1-Specificity) x (1-Prevalence))]',
    ],
    keyPearls: [
      'PPV increases with increasing disease prevalence',
      'Even excellent tests have low PPV in low-prevalence settings',
      'PPV is what clinicians actually need to interpret test results for patients',
      'Bayes theorem formalizes the relationship between prevalence and PPV',
    ],
    references: [
      'Altman DG, Bland JM. Diagnostic tests 2: predictive values. BMJ. 1994;309:102.',
    ],
  },
  {
    id: 'npv',
    name: 'Negative Predictive Value (NPV)',
    category: 'biostatistics',
    description: 'Probability that a person with a negative test result truly does NOT have the disease.',
    conceptExplanation:
      'NPV = TN / (TN + FN). NPV depends on prevalence: as prevalence decreases, NPV increases. In low-prevalence settings, a negative test is very reliable. In high-prevalence settings, NPV drops and false negatives become more common.',
    clinicalRelevance:
      'A high NPV reassures clinicians that a negative result is a true negative. In low-risk populations, even moderately sensitive tests provide high NPV.',
    examples: [
      'NPV of D-dimer in low-risk PE patients: >99%',
      'NPV of negative troponin at 6 hours for MI: approximately 95-99%',
      'High NPV in low-prevalence setting allows effective disease rule-out',
    ],
    calculations: [
      'NPV = TN / (TN + FN)',
      'NPV = (Specificity x (1-Prevalence)) / [(Specificity x (1-Prevalence)) + ((1-Sensitivity) x Prevalence)]',
    ],
    keyPearls: [
      'NPV increases as prevalence decreases',
      'Complementary to PPV in test interpretation',
      'High NPV most useful for ruling out disease',
      'Like PPV, NPV depends on the clinical context (prevalence)',
    ],
    references: [
      'Altman DG, Bland JM. Diagnostic tests 2: predictive values. BMJ. 1994;309:102.',
    ],
  },
  {
    id: 'roc-curves',
    name: 'ROC Curves',
    category: 'biostatistics',
    description: 'Receiver Operating Characteristic curve plotting sensitivity vs. (1 - specificity) across all thresholds.',
    conceptExplanation:
      'The ROC curve visualizes diagnostic test performance across all possible cutoff values. The area under the curve (AUC) quantifies overall discriminative ability: AUC = 0.5 is no better than chance; AUC = 1.0 is perfect discrimination. ROC analysis helps select optimal cutoff values balancing sensitivity and specificity.',
    clinicalRelevance:
      'Used to compare diagnostic tests (higher AUC = better test). Helps clinicians choose test thresholds based on clinical priorities (maximize sensitivity vs. specificity). AUC is a standard metric in machine learning and clinical prediction models.',
    examples: [
      'AUC of troponin for MI diagnosis: ~0.95',
      'AUC of PSA for prostate cancer: ~0.68 (moderate)',
      'Comparing two biomarkers for sepsis: CRP AUC 0.72 vs. procalcitonin AUC 0.85',
    ],
    keyPearls: [
      'AUC = 0.5 is no discrimination (diagonal line); AUC = 1.0 is perfect',
      'AUC 0.7-0.8 = acceptable, 0.8-0.9 = excellent, >0.9 = outstanding',
      'Youden index (sensitivity + specificity - 1) identifies the optimal cutoff point',
      'ROC analysis is threshold-independent, unlike single sensitivity/specificity values',
    ],
    references: [
      'Hanley JA, McNeil BJ. The meaning and use of the area under a ROC curve. Radiology. 1982;143:29-36.',
    ],
  },

  // =========================================================================
  // STUDY DESIGNS
  // =========================================================================
  {
    id: 'rct',
    name: 'Randomized Controlled Trial (RCT)',
    category: 'epidemiology',
    description: 'Experimental study where participants are randomly assigned to intervention or control groups.',
    conceptExplanation:
      'RCTs are the gold standard for establishing causality. Randomization minimizes confounding by distributing known and unknown variables equally. Blinding reduces bias from knowledge of assignment. Intention-to-treat analysis preserves randomization benefits.',
    clinicalRelevance:
      'Forms the basis for evidence-based treatment guidelines and drug approval. Level 1 evidence in the evidence hierarchy. Results from well-designed RCTs have the strongest influence on clinical practice.',
    examples: [
      'SPRINT trial: intensive vs. standard BP control in hypertension',
      'RECOVERY trial: dexamethasone in COVID-19 hospitalized patients',
      'WHI trial: hormone replacement therapy in postmenopausal women',
    ],
    keyPearls: [
      'Gold standard for establishing causality',
      'Randomization controls for both known and unknown confounders',
      'Double-blinding reduces information and performance bias',
      'Intention-to-treat analysis preserves benefits of randomization',
      'Expensive, time-consuming, and may have limited external validity',
    ],
    references: [
      'Schulz KF et al. CONSORT 2010 Statement. BMJ. 2010;340:c332.',
    ],
  },
  {
    id: 'cohort-study',
    name: 'Cohort Study',
    category: 'epidemiology',
    description: 'Observational study following groups with and without exposure over time to compare outcomes.',
    conceptExplanation:
      'Prospective cohorts follow subjects forward in time; retrospective cohorts use historical data. Cohort studies can calculate incidence and relative risk directly. They establish temporal sequence (exposure before disease). Susceptible to loss to follow-up and confounding.',
    clinicalRelevance:
      'Used when RCTs are unethical or impractical (e.g., studying smoking). Framingham Heart Study is the classic example. Can study multiple outcomes from a single exposure.',
    examples: [
      'Framingham Heart Study: identified cardiovascular risk factors over decades',
      'Nurses Health Study: diet, lifestyle, and disease in women',
      'Retrospective cohort of EMR data linking statin use to diabetes risk',
    ],
    keyPearls: [
      'Can calculate incidence and relative risk directly',
      'Establishes temporal relationship between exposure and outcome',
      'Prospective is stronger than retrospective but more expensive',
      'Vulnerable to loss to follow-up and confounding',
      'Good for rare exposures; poor for rare diseases',
    ],
    references: [
      'Song JW, Chung KC. Observational studies: cohort and case-control studies. Plast Reconstr Surg. 2010;126:2234-42.',
    ],
  },
  {
    id: 'case-control',
    name: 'Case-Control Study',
    category: 'epidemiology',
    description: 'Observational study comparing exposure histories of people with disease (cases) vs. without (controls).',
    conceptExplanation:
      'Starts with outcome and looks backward at exposure. Efficient for rare diseases. Cannot calculate incidence or RR directly; uses odds ratio instead. Susceptible to recall bias and selection bias. Matching on confounders improves validity.',
    clinicalRelevance:
      'Ideal for studying rare diseases or outbreaks. Quick and inexpensive. The study design that first linked smoking to lung cancer (Doll and Hill).',
    examples: [
      'Doll and Hill study linking smoking to lung cancer',
      'Case-control study of thalidomide and birth defects',
      'Investigating a meningitis outbreak by comparing cases to healthy controls',
    ],
    keyPearls: [
      'Efficient for rare diseases and outbreak investigation',
      'Calculates odds ratio, not relative risk',
      'Susceptible to recall bias (cases remember exposures better)',
      'Selection of appropriate controls is critical',
      'Cannot determine incidence or prevalence',
    ],
    references: [
      'Schulz KF, Grimes DA. Case-control studies: research in reverse. Lancet. 2002;359:431-34.',
    ],
  },
  {
    id: 'cross-sectional',
    name: 'Cross-Sectional Study',
    category: 'epidemiology',
    description: 'Observational study measuring exposure and disease status simultaneously at one point in time.',
    conceptExplanation:
      'A "snapshot" of the population. Measures prevalence, not incidence. Cannot establish temporal sequence or causality. Quick and inexpensive. Useful for assessing disease burden and generating hypotheses. Often used in survey research.',
    clinicalRelevance:
      'NHANES (National Health and Nutrition Examination Survey) is a major cross-sectional study guiding US health policy. Useful for health needs assessment and resource planning.',
    examples: [
      'NHANES survey measuring diabetes prevalence in the US',
      'Survey measuring HIV prevalence and knowledge in a community',
      'Cross-sectional study of lead exposure and blood levels in children',
    ],
    keyPearls: [
      'Measures prevalence, not incidence',
      'Cannot establish causality or temporal sequence',
      'Quick, inexpensive, good for hypothesis generation',
      'Subject to prevalence-incidence bias (Neyman bias)',
      'Useful for health services planning',
    ],
    references: [
      'Levin KA. Study design III: Cross-sectional studies. Evid Based Dent. 2006;7:24-25.',
    ],
  },
  {
    id: 'meta-analysis',
    name: 'Meta-Analysis',
    category: 'epidemiology',
    description: 'Statistical method combining results from multiple studies to produce an overall estimate.',
    conceptExplanation:
      'Meta-analysis pools data from multiple studies to increase statistical power and precision. Requires systematic review to identify all relevant studies. Assesses heterogeneity between studies (I-squared). Produces forest plots showing individual and pooled effect estimates. Publication bias is assessed with funnel plots.',
    clinicalRelevance:
      'Considered the highest level of evidence when based on well-conducted RCTs. Cochrane Reviews are the gold standard. Results guide clinical practice guidelines and policy decisions.',
    examples: [
      'Cochrane review of statins for cardiovascular prevention pooling 20+ RCTs',
      'Meta-analysis of mask efficacy for respiratory virus prevention',
      'Forest plot showing pooled OR for aspirin and colorectal cancer across 8 studies',
    ],
    keyPearls: [
      'Highest level of evidence when based on RCTs',
      'I-squared measures heterogeneity: >75% is high heterogeneity',
      'Funnel plot asymmetry suggests publication bias',
      'Garbage in, garbage out: quality depends on included studies',
      'Random-effects model when heterogeneity is expected',
    ],
    references: [
      'Higgins JPT et al. Cochrane Handbook for Systematic Reviews of Interventions. Cochrane; 2019.',
    ],
  },

  // =========================================================================
  // SCREENING
  // =========================================================================
  {
    id: 'screening-criteria',
    name: 'Wilson-Jungner Screening Criteria',
    category: 'screening',
    description: 'Classic criteria for evaluating whether a screening program should be implemented.',
    conceptExplanation:
      'The 1968 WHO criteria specify 10 conditions for effective screening: important health problem, accepted treatment available, facilities for diagnosis/treatment, recognizable latent or early symptomatic stage, suitable test, test acceptable to the population, natural history understood, agreed policy on treatment, economically balanced cost, and case-finding should be a continuing process.',
    clinicalRelevance:
      'Framework used by USPSTF, WHO, and other organizations to decide which screening programs to recommend. Understanding these criteria helps evaluate the appropriateness of new screening proposals.',
    examples: [
      'Cervical cancer screening meets all criteria: common, detectable precursor (CIN), effective treatment, acceptable test (Pap/HPV)',
      'Universal screening for pancreatic cancer fails: no good early test, poor prognosis even when detected early',
      'Newborn screening for PKU: treatable condition, simple blood test, early detection prevents intellectual disability',
    ],
    keyPearls: [
      'Disease must have a detectable preclinical phase (lead time)',
      'Effective treatment must exist that improves outcomes when caught early',
      'Test must be acceptable, safe, and affordable',
      'Lead-time bias and length-time bias can make screening falsely appear effective',
      'Overdiagnosis is a major harm of screening (detecting indolent disease)',
    ],
    references: [
      'Wilson JMG, Jungner G. Principles and practice of screening for disease. WHO; 1968.',
      'Andermann A et al. Revisiting Wilson and Jungner in the genomic age. Bull WHO. 2008;86:317-319.',
    ],
  },
  {
    id: 'lead-time-bias',
    name: 'Lead-Time Bias',
    category: 'screening',
    description: 'Apparent improvement in survival time due to earlier detection rather than actual prolonged life.',
    conceptExplanation:
      'Screening detects disease earlier, so survival time from diagnosis appears longer even if the patient dies at the same time they would have without screening. True benefit requires mortality reduction, not just earlier diagnosis. Lead-time bias is the most common pitfall in evaluating screening programs.',
    clinicalRelevance:
      'Explains why 5-year survival rates are misleading for evaluating screening. Mortality rate reduction is the proper endpoint. Must compare screened vs. unscreened populations using mortality as the outcome.',
    examples: [
      'Lung cancer detected by screening at age 60 vs. symptoms at age 63, patient dies at 65: 5-year survival appears better with screening but death occurs at same time',
      'Neuroblastoma screening in infants increased incidence and survival rates but did not reduce mortality',
    ],
    keyPearls: [
      'Survival from diagnosis does not equal survival from disease onset',
      'Only mortality reduction proves screening effectiveness',
      'Five-year survival rates are susceptible to lead-time bias',
      'Must be addressed in any screening program evaluation',
    ],
    references: [
      'Welch HG et al. Overdiagnosed: Making People Sick in the Pursuit of Health. Beacon Press; 2011.',
    ],
  },
  {
    id: 'length-time-bias',
    name: 'Length-Time Bias',
    category: 'screening',
    description: 'Screening preferentially detects slower-growing, less aggressive diseases, making outcomes appear better.',
    conceptExplanation:
      'Slow-growing tumors have longer preclinical phases and are more likely to be found during periodic screening. Aggressive tumors progress rapidly between screens (interval cancers). This creates the illusion that screening finds "better" cancers, when in reality aggressive cases are missed.',
    clinicalRelevance:
      'Contributes to the apparent effectiveness of screening by enriching detected cases with indolent disease. Must be considered alongside overdiagnosis when evaluating screening programs.',
    examples: [
      'Prostate cancer screening disproportionately detects slow-growing Gleason 6 cancers',
      'Breast cancer screening finds more ductal carcinoma in situ (DCIS) which may never progress',
    ],
    keyPearls: [
      'Screening overdetects slow-growing disease and misses aggressive disease',
      'Contributes to apparent survival benefit without true mortality reduction',
      'Related to but distinct from overdiagnosis',
      'Randomized controlled trials of screening can overcome this bias',
    ],
    references: [
      'Gates TJ. Screening for cancer: evaluating the evidence. Am Fam Physician. 2001;63:513-522.',
    ],
  },

  // =========================================================================
  // INFECTIOUS DISEASE EPIDEMIOLOGY
  // =========================================================================
  {
    id: 'basic-reproduction-number',
    name: 'Basic Reproduction Number (R0)',
    category: 'infectious-disease-epi',
    description: 'Average number of secondary infections produced by one infected individual in a fully susceptible population.',
    conceptExplanation:
      'R0 determines whether an outbreak will grow (R0 > 1) or die out (R0 < 1). It depends on transmissibility, contact rate, and duration of infectiousness. The effective reproduction number (Re or Rt) accounts for immunity in the population. Herd immunity threshold = 1 - 1/R0.',
    clinicalRelevance:
      'Guides public health response to outbreaks. High R0 diseases require higher vaccination coverage for herd immunity. R0 of measles (~12-18) requires ~92-95% vaccination coverage for herd immunity.',
    examples: [
      'Measles R0 = 12-18 (highly contagious)',
      'Influenza R0 = 2-3',
      'COVID-19 original strain R0 ≈ 2.5-3; Omicron variant R0 ≈ 8-15',
      'Ebola R0 = 1.5-2.5',
    ],
    calculations: [
      'R0 = beta x c x d (transmission probability x contact rate x duration of infectiousness)',
      'Herd immunity threshold = 1 - (1/R0)',
      'Effective R (Re) = R0 x proportion susceptible',
    ],
    keyPearls: [
      'R0 > 1: epidemic grows; R0 < 1: epidemic declines; R0 = 1: endemic steady state',
      'Herd immunity threshold = 1 - 1/R0',
      'R0 is context-dependent (varies by population density, behavior, environment)',
      'Re accounts for existing immunity and interventions',
    ],
    references: [
      'Delamater PL et al. Complexity of the basic reproduction number (R0). Emerg Infect Dis. 2019;25:1-4.',
    ],
  },
  {
    id: 'herd-immunity',
    name: 'Herd Immunity',
    category: 'infectious-disease-epi',
    description: 'Indirect protection from infection when a sufficient proportion of a population is immune.',
    conceptExplanation:
      'When enough individuals are immune (through vaccination or prior infection), transmission chains are interrupted, protecting susceptible individuals. The threshold depends on R0: higher R0 requires higher coverage. Does not require 100% immunity but demands sufficient coverage above the threshold.',
    clinicalRelevance:
      'Protects vulnerable individuals who cannot be vaccinated (immunocompromised, infants). Vaccination campaigns aim to exceed herd immunity thresholds. Declining vaccination rates can drop populations below herd immunity, causing outbreaks.',
    examples: [
      'Measles requires ~95% population immunity for herd protection',
      'Polio requires ~80-85% immunity',
      'Pertussis outbreaks in communities with vaccination rates below 92%',
    ],
    keyPearls: [
      'Threshold = 1 - 1/R0',
      'Protects immunocompromised and unvaccinated individuals',
      'Vaccine refusal communities are vulnerable to outbreaks',
      'Does not mean zero cases; means sustained transmission is unlikely',
    ],
    references: [
      'Fine P et al. Herd immunity: a rough guide. Clin Infect Dis. 2011;52:911-916.',
    ],
  },
  {
    id: 'outbreak-investigation',
    name: 'Outbreak Investigation Steps',
    category: 'infectious-disease-epi',
    description: 'Systematic approach to identifying, characterizing, and controlling disease outbreaks.',
    conceptExplanation:
      'The CDC 10-step approach: (1) Prepare for fieldwork, (2) Verify diagnosis, (3) Confirm outbreak existence, (4) Define a case, (5) Find cases systematically, (6) Perform descriptive epidemiology (person/place/time), (7) Develop hypotheses, (8) Evaluate hypotheses, (9) Implement control measures, (10) Communicate findings. Steps often occur simultaneously.',
    clinicalRelevance:
      'Framework used by epidemiologists to respond to outbreaks from foodborne illness to pandemic threats. Clinicians play a role in early detection, case reporting, and implementing control measures.',
    examples: [
      '1993 Jack in the Box E. coli O157:H7 outbreak: traced to undercooked hamburgers',
      '2014 West Africa Ebola outbreak investigation and response',
      'Legionnaires disease cluster traced to contaminated cooling tower',
    ],
    keyPearls: [
      'Verify the diagnosis and confirm an outbreak exists before extensive investigation',
      'Epidemic curve shape suggests point-source vs. propagated vs. continuous outbreak',
      'Case definition must be specific enough to exclude non-cases but sensitive enough to capture true cases',
      'Control measures should not wait for complete investigation',
    ],
    references: [
      'CDC. Principles of Epidemiology in Public Health Practice. 3rd ed.',
      'Gregg MB. Field Epidemiology. 3rd ed. Oxford; 2008.',
    ],
  },
  {
    id: 'vaccine-efficacy',
    name: 'Vaccine Efficacy and Effectiveness',
    category: 'infectious-disease-epi',
    description: 'Measures of how well a vaccine prevents disease under ideal (efficacy) and real-world (effectiveness) conditions.',
    conceptExplanation:
      'Vaccine efficacy is measured in RCTs under controlled conditions. Vaccine effectiveness is measured in observational studies in real-world settings. VE = (ARU - ARV) / ARU x 100, where ARU is attack rate in unvaccinated and ARV in vaccinated. Effectiveness is usually lower than efficacy due to real-world factors.',
    clinicalRelevance:
      'Guides vaccination policy and individual counseling. Effectiveness may differ from efficacy due to storage issues, population differences, and waning immunity. Booster recommendations are based on declining effectiveness over time.',
    examples: [
      'Pfizer COVID-19 vaccine efficacy: 95% in initial RCT',
      'Influenza vaccine effectiveness: 40-60% in typical seasons',
      'MMR vaccine efficacy for measles: 97% after two doses',
    ],
    calculations: [
      'VE = [(Attack rate unvaccinated - Attack rate vaccinated) / Attack rate unvaccinated] x 100',
      'VE = (1 - RR) x 100, where RR = risk in vaccinated / risk in unvaccinated',
    ],
    keyPearls: [
      'Efficacy (RCT) vs. effectiveness (real-world) distinction is critical',
      'Waning immunity reduces effectiveness over time',
      'Effectiveness varies by age, immune status, and circulating strains',
      'Even partially effective vaccines provide population-level benefit',
    ],
    references: [
      'Weinberg GA, Szilagyi PG. Vaccine epidemiology: efficacy, effectiveness, and the translational research roadmap. J Infect Dis. 2010;201:1607-10.',
    ],
  },

  // =========================================================================
  // CHRONIC DISEASE EPIDEMIOLOGY
  // =========================================================================
  {
    id: 'attributable-risk',
    name: 'Attributable Risk (Risk Difference)',
    category: 'chronic-disease-epi',
    description: 'Excess risk of disease in the exposed group compared to the unexposed group.',
    conceptExplanation:
      'AR = incidence in exposed - incidence in unexposed. Represents the additional risk due to exposure. Population attributable risk (PAR) estimates the proportion of disease in the entire population due to the exposure. PAR depends on both the strength of association and the prevalence of exposure.',
    clinicalRelevance:
      'Quantifies the public health impact of eliminating an exposure. Smoking has a high PAR for lung cancer because it is both strongly associated and highly prevalent. Guides priority setting for prevention programs.',
    examples: [
      'Lung cancer risk: 200/100K in smokers vs. 10/100K in non-smokers; AR = 190/100K',
      'PAR of smoking for lung cancer: approximately 85-90%',
      'PAR of physical inactivity for CHD: approximately 12%',
    ],
    calculations: [
      'AR = Incidence in exposed - Incidence in unexposed',
      'PAR = [Prevalence of exposure x (RR - 1)] / [1 + Prevalence x (RR - 1)]',
      'PAR% = PAR / Incidence in total population x 100',
    ],
    keyPearls: [
      'AR is an absolute measure; RR is a relative measure',
      'PAR depends on both the RR and prevalence of exposure',
      'High PAR means eliminating exposure would prevent many cases',
      'Different from RR: a strong RR with low prevalence has low PAR',
    ],
    references: [
      'Rockhill B et al. Use and misuse of population attributable fractions. Am J Public Health. 1998;88:15-19.',
    ],
  },
  {
    id: 'chronic-disease-prevention',
    name: 'Levels of Prevention',
    category: 'chronic-disease-epi',
    description: 'Framework categorizing prevention strategies as primary, secondary, or tertiary.',
    conceptExplanation:
      'Primary prevention prevents disease onset (vaccination, smoking cessation). Secondary prevention detects disease early (screening mammography, Pap smears). Tertiary prevention reduces complications of established disease (cardiac rehab, diabetic foot care). Primordial prevention addresses upstream social/environmental determinants.',
    clinicalRelevance:
      'Organizes clinical preventive services and public health interventions. USPSTF recommendations are structured around prevention levels. Cost-effectiveness varies by prevention level and disease.',
    examples: [
      'Primary: HPV vaccination to prevent cervical cancer',
      'Secondary: Colonoscopy screening for colorectal cancer',
      'Tertiary: ACE inhibitors to slow diabetic nephropathy progression',
      'Primordial: Tobacco tax policy to reduce smoking initiation',
    ],
    keyPearls: [
      'Primary = prevent disease occurrence',
      'Secondary = detect and treat early disease',
      'Tertiary = minimize disease consequences',
      'Primordial = prevent risk factor development through policy/environment changes',
    ],
    references: [
      'Leavell HR, Clark EG. Preventive Medicine for the Doctor in His Community. McGraw-Hill; 1965.',
    ],
  },

  // =========================================================================
  // HEALTH POLICY
  // =========================================================================
  {
    id: 'aca',
    name: 'Affordable Care Act (ACA)',
    category: 'health-policy',
    description: 'Landmark 2010 US healthcare reform law expanding insurance coverage and regulating health insurance practices.',
    conceptExplanation:
      'Key provisions: individual mandate (later zeroed), insurance marketplaces, Medicaid expansion, coverage for pre-existing conditions, young adults on parents\' plans until 26, essential health benefits mandate, preventive care without cost-sharing, and closure of Medicare Part D donut hole. Reduced uninsured rate from ~16% to ~9%.',
    clinicalRelevance:
      'Significantly increased patient access to care. Physicians must understand insurance landscape to navigate patient care. Preventive services coverage influences clinical recommendations and patient adherence.',
    examples: [
      'Patient with diabetes gaining coverage through Medicaid expansion',
      'Young adult staying on parent insurance until age 26',
      'Preventive screenings (colonoscopy, mammography) covered without copays',
    ],
    keyPearls: [
      'Pre-existing conditions cannot be used to deny coverage',
      'Essential health benefits include mental health and prescription drugs',
      'Medicaid expansion was made optional by Supreme Court ruling (NFIB v. Sebelius)',
      'Reduced the uninsured rate significantly but coverage gaps remain',
    ],
    references: [
      'Patient Protection and Affordable Care Act, Pub L No. 111-148, 124 Stat 119 (2010).',
      'Sommers BD et al. Changes in utilization and health among ACA Medicaid expansion enrollees. JAMA Intern Med. 2016.',
    ],
  },
  {
    id: 'medicare-medicaid',
    name: 'Medicare and Medicaid',
    category: 'health-policy',
    description: 'Two foundational US government health insurance programs established in 1965.',
    conceptExplanation:
      'Medicare: federal program for adults >= 65, certain disabilities, and ESRD. Part A (hospital), Part B (outpatient/physician), Part C (Medicare Advantage), Part D (prescription drugs). Medicaid: joint federal-state program for low-income individuals; eligibility and benefits vary by state. CHIP covers children in families above Medicaid thresholds.',
    clinicalRelevance:
      'Medicare and Medicaid are the largest US payers. Understanding coverage determines appropriate referrals, medication choices, and post-discharge planning. Dual-eligible patients (both Medicare and Medicaid) have complex coverage.',
    examples: [
      'Medicare Part A covering inpatient hospitalization after a hip fracture',
      'Medicaid covering prenatal care for low-income pregnant women',
      'Medicare Part D gap in coverage ("donut hole") affecting medication adherence',
    ],
    keyPearls: [
      'Medicare = elderly/disabled (federal); Medicaid = low-income (federal-state)',
      'Medicare Part A = hospital; Part B = outpatient; Part C = managed care; Part D = drugs',
      'Medicaid is the largest payer for long-term care in the US',
      'CMS (Centers for Medicare & Medicaid Services) administers both programs',
    ],
    references: [
      'Oberlander J. The political life of Medicare. University of Chicago Press; 2003.',
      'Kaiser Family Foundation. Medicare and Medicaid program data.',
    ],
  },
  {
    id: 'value-based-care',
    name: 'Value-Based Care',
    category: 'health-policy',
    description: 'Healthcare delivery model rewarding quality and outcomes rather than volume of services.',
    conceptExplanation:
      'Shifts from fee-for-service to payment models rewarding quality, outcomes, and cost-efficiency. Models include ACOs (accountable care organizations), bundled payments, pay-for-performance, and capitation. MACRA/MIPS legislation ties Medicare physician payment to quality measures.',
    clinicalRelevance:
      'Physicians are increasingly evaluated and compensated based on quality metrics, patient outcomes, and cost efficiency. Understanding value-based models is essential for practice management and policy advocacy.',
    examples: [
      'ACO sharing savings with Medicare for reducing hospitalizations',
      'Bundled payment for total joint replacement covering surgery through 90-day recovery',
      'MIPS quality measures affecting physician Medicare reimbursement',
    ],
    keyPearls: [
      'Shifts incentives from volume to value',
      'ACOs coordinate care across settings to reduce costs and improve outcomes',
      'Quality measures include patient experience, outcomes, and process metrics',
      'MACRA/MIPS is the primary Medicare physician payment reform legislation',
    ],
    references: [
      'Porter ME, Teisberg EO. Redefining Health Care. Harvard Business Review Press; 2006.',
    ],
  },

  // =========================================================================
  // SOCIAL DETERMINANTS OF HEALTH
  // =========================================================================
  {
    id: 'social-determinants-overview',
    name: 'Social Determinants of Health (SDOH)',
    category: 'social-determinants',
    description: 'Non-medical factors influencing health outcomes, including conditions in which people are born, grow, work, live, and age.',
    conceptExplanation:
      'SDOH account for 30-55% of health outcomes. Five key domains (Healthy People 2030): economic stability, education access and quality, healthcare access and quality, neighborhood and built environment, and social and community context. Addressing SDOH requires cross-sector collaboration.',
    clinicalRelevance:
      'Physicians must screen for social needs (food insecurity, housing instability, transportation barriers) as they directly affect health. ICD-10 Z-codes document social determinants. Addressing SDOH improves treatment adherence and outcomes.',
    examples: [
      'Food desert resident with poorly controlled diabetes due to limited access to healthy food',
      'Patient missing appointments due to lack of transportation',
      'Higher asthma rates in neighborhoods near highways or industrial sites',
    ],
    keyPearls: [
      'SDOH account for 30-55% of health outcomes; medical care accounts for ~10-20%',
      'Five domains: economic stability, education, healthcare access, neighborhood, social/community context',
      'Z-codes (ICD-10) allow documentation of social determinants',
      'Health equity requires addressing SDOH, not just providing equal healthcare',
    ],
    references: [
      'Healthy People 2030. Social Determinants of Health. US DHHS.',
      'Braveman P, Gottlieb L. The social determinants of health. Public Health Rep. 2014;129(Suppl 2):19-31.',
    ],
  },
  {
    id: 'health-disparities',
    name: 'Health Disparities',
    category: 'social-determinants',
    description: 'Preventable differences in health outcomes linked to social, economic, or environmental disadvantage.',
    conceptExplanation:
      'Health disparities reflect systemic inequities in access, treatment, and outcomes across racial, ethnic, socioeconomic, and geographic lines. Structural racism, implicit bias, and unequal resource distribution contribute. Health equity means everyone has a fair opportunity to attain their full health potential.',
    clinicalRelevance:
      'Black women have 2-3x higher maternal mortality than white women. Rural populations have less access to specialty care. Understanding disparities informs culturally competent care, policy advocacy, and research priorities.',
    examples: [
      'Black Americans have higher age-adjusted mortality for heart disease, cancer, and stroke',
      'Native American/Alaska Native populations have highest diabetes prevalence',
      'Rural-urban gap in cancer mortality due to screening and treatment access differences',
    ],
    keyPearls: [
      'Disparity = difference; inequity = unjust/avoidable difference',
      'Structural determinants (racism, policy) drive many disparities',
      'Implicit bias affects clinical decision-making',
      'Disaggregated data are essential for identifying and addressing disparities',
    ],
    references: [
      'IOM. Unequal Treatment: Confronting Racial and Ethnic Disparities in Health Care. National Academies Press; 2003.',
    ],
  },
  {
    id: 'poverty-health',
    name: 'Poverty and Health',
    category: 'social-determinants',
    description: 'Income and socioeconomic status as fundamental determinants of health outcomes.',
    conceptExplanation:
      'Poverty affects health through multiple pathways: limited access to healthcare, unhealthy housing, food insecurity, chronic stress, hazardous work environments, and reduced health literacy. The socioeconomic gradient in health is continuous; each step up in income/education is associated with better health outcomes.',
    clinicalRelevance:
      'Screening for food insecurity, housing instability, and financial strain should be part of clinical practice. Social work referrals and community resource connections improve outcomes for low-income patients.',
    examples: [
      'Life expectancy gap of 10-15 years between richest and poorest US populations',
      'Low-income children have higher rates of asthma, obesity, and developmental delays',
      'Cost-related medication non-adherence in uninsured and underinsured patients',
    ],
    keyPearls: [
      'Poverty is the strongest single predictor of poor health outcomes',
      'The socioeconomic gradient means health improves at every income level, not just above/below poverty',
      'Intergenerational transmission of poverty perpetuates health disparities',
      'Addressing poverty requires structural interventions, not just individual behavior change',
    ],
    references: [
      'Adler NE, Newman K. Socioeconomic disparities in health. Health Aff. 2002;21:60-76.',
    ],
  },

  // =========================================================================
  // GLOBAL HEALTH
  // =========================================================================
  {
    id: 'global-burden-disease',
    name: 'Global Burden of Disease',
    category: 'global-health',
    description: 'Framework quantifying health loss from diseases, injuries, and risk factors worldwide using DALYs.',
    conceptExplanation:
      'The GBD study measures disability-adjusted life years (DALYs) = years of life lost (YLL) + years lived with disability (YLD). Leading global causes of DALYs include ischemic heart disease, neonatal disorders, stroke, lower respiratory infections, and COPD. The epidemiologic transition describes the shift from infectious to chronic diseases as countries develop.',
    clinicalRelevance:
      'Guides global health priorities, research funding, and resource allocation. Understanding DALYs helps compare the burden of diverse conditions (e.g., depression vs. malaria). Non-communicable diseases now cause more deaths globally than infectious diseases.',
    examples: [
      'Ischemic heart disease: leading cause of DALYs globally',
      'Depression: leading cause of disability (YLD) worldwide',
      'Malaria: major contributor to DALYs in sub-Saharan Africa',
    ],
    calculations: [
      'DALY = YLL + YLD',
      'YLL = Number of deaths x Standard life expectancy at age of death',
      'YLD = Number of cases x Disability weight x Average duration',
    ],
    keyPearls: [
      'DALYs combine mortality (YLL) and morbidity (YLD) into a single metric',
      'Non-communicable diseases now dominate global burden even in LMICs',
      'Mental health conditions are leading causes of disability globally',
      'Epidemiologic transition: infectious diseases → chronic diseases as nations develop',
    ],
    references: [
      'GBD 2019 Diseases and Injuries Collaborators. Lancet. 2020;396:1204-1222.',
    ],
  },
  {
    id: 'epidemiologic-transition',
    name: 'Epidemiologic Transition',
    category: 'global-health',
    description: 'Shift in leading causes of death from infectious to chronic diseases as populations develop.',
    conceptExplanation:
      'Omran\'s theory describes three stages: (1) Age of Pestilence and Famine (high mortality from infections), (2) Age of Receding Pandemics (declining infectious disease mortality), (3) Age of Degenerative and Man-Made Diseases (chronic diseases dominate). Many LMICs face a "double burden" of both infectious and chronic diseases simultaneously.',
    clinicalRelevance:
      'Developing countries face dual burden: persistent infectious diseases plus rising NCDs (diabetes, cardiovascular disease). Health systems must address both simultaneously. Understanding transition stage guides resource allocation.',
    examples: [
      'Sub-Saharan Africa: HIV/malaria burden alongside rising diabetes/hypertension',
      'India: declining infectious disease mortality with rapidly rising cardiovascular disease',
      'US historical transition from tuberculosis to heart disease as leading cause of death',
    ],
    keyPearls: [
      'Three stages: pestilence/famine → receding pandemics → degenerative diseases',
      'Many LMICs experience "double burden" of infectious + chronic diseases',
      'Transition driven by improved sanitation, nutrition, and medical advances',
      'Non-communicable diseases now cause ~71% of global deaths',
    ],
    references: [
      'Omran AR. The epidemiologic transition: a theory of the epidemiology of population change. Milbank Q. 1971;49:509-538.',
    ],
  },

  // =========================================================================
  // ENVIRONMENTAL HEALTH
  // =========================================================================
  {
    id: 'lead-exposure',
    name: 'Lead Exposure and Health',
    category: 'environmental-health',
    description: 'Environmental lead exposure as a preventable cause of neurodevelopmental and systemic toxicity.',
    conceptExplanation:
      'Lead exposure occurs through paint (pre-1978 housing), contaminated water, soil, and occupational sources. Children are most vulnerable due to developing nervous systems and hand-to-mouth behavior. No safe blood lead level has been identified. CDC reference value is 3.5 mcg/dL. Lead causes neurocognitive deficits, anemia, nephropathy, and abdominal pain.',
    clinicalRelevance:
      'Screening blood lead levels in at-risk children (ages 1-2, Medicaid-enrolled). Environmental remediation is the primary intervention. Chelation therapy for severely elevated levels. Lead exposure disproportionately affects low-income and minority communities.',
    examples: [
      'Flint, Michigan water crisis: lead-contaminated water supply affecting thousands of children',
      'Child in pre-1978 housing with blood lead level of 15 mcg/dL and developmental delays',
      'Occupational lead exposure in battery manufacturing workers',
    ],
    keyPearls: [
      'No safe blood lead level; CDC reference value is 3.5 mcg/dL',
      'Children absorb 40-50% of ingested lead vs. 10% in adults',
      'Primary prevention (removing lead sources) is far more effective than chelation',
      'Environmental justice issue: disproportionately affects low-income minority communities',
    ],
    references: [
      'CDC. Childhood Lead Poisoning Prevention Program.',
      'Lanphear BP et al. Low-level environmental lead exposure and children\'s intellectual function. Environ Health Perspect. 2005;113:894-899.',
    ],
  },
  {
    id: 'air-pollution-health',
    name: 'Air Pollution and Health',
    category: 'environmental-health',
    description: 'Health effects of ambient and household air pollution from particulate matter, ozone, and other pollutants.',
    conceptExplanation:
      'Particulate matter (PM2.5, PM10), ozone, nitrogen dioxide, and sulfur dioxide are major air pollutants. PM2.5 penetrates deep into lungs and enters the bloodstream. Air pollution causes respiratory disease (asthma, COPD), cardiovascular disease, lung cancer, and adverse birth outcomes. WHO estimates 4.2 million premature deaths annually from ambient air pollution.',
    clinicalRelevance:
      'Counsel patients with respiratory and cardiovascular conditions about air quality. AQI (Air Quality Index) guides activity recommendations. Indoor air pollution from cooking fuels is a major global health issue.',
    examples: [
      'Asthma exacerbations correlated with high PM2.5 days in urban areas',
      'Indoor air pollution from biomass cookstoves causing 3.8 million deaths/year globally',
      'Increased cardiovascular events during wildfire smoke episodes',
    ],
    keyPearls: [
      'PM2.5 is the most harmful common air pollutant due to deep lung penetration',
      'Air pollution is the 4th leading risk factor for death globally',
      'Indoor air pollution from biomass fuels kills more people than outdoor pollution globally',
      'Children, elderly, and those with cardiopulmonary disease are most vulnerable',
    ],
    references: [
      'WHO. Ambient air pollution: Health impacts.',
      'Cohen AJ et al. Estimates of global mortality associated with air pollution. Lancet. 2017;389:1907-1918.',
    ],
  },
  {
    id: 'climate-change-health',
    name: 'Climate Change and Health',
    category: 'environmental-health',
    description: 'Health consequences of global climate change including direct and indirect effects on populations.',
    conceptExplanation:
      'Climate change affects health through: heat-related illness and death, extreme weather events, vector-borne disease expansion (malaria, dengue spreading to new regions), food and water insecurity, air quality degradation, population displacement, and mental health effects. The Lancet Countdown tracks indicators linking climate change to health annually.',
    clinicalRelevance:
      'Physicians increasingly see climate-related health effects: heat stroke, respiratory illness from wildfires, expanded Lyme disease range, and climate anxiety. Healthcare sector contributes ~4.4% of global CO2 emissions and has a role in mitigation.',
    examples: [
      'European heat wave of 2003: estimated 70,000 excess deaths',
      'Expansion of Aedes mosquito range bringing dengue to previously unaffected regions',
      'Increased kidney disease in agricultural workers due to heat stress and dehydration',
    ],
    keyPearls: [
      'Climate change is a "threat multiplier" for existing health vulnerabilities',
      'Most impacts fall disproportionately on low-income countries and communities',
      'Healthcare sector must both adapt to and mitigate climate change',
      'WHO calls climate change the greatest health threat of the 21st century',
    ],
    references: [
      'Lancet Countdown on Health and Climate Change. Annual reports.',
      'Watts N et al. The 2020 report of The Lancet Countdown. Lancet. 2021;397:129-170.',
    ],
  },

  // =========================================================================
  // ADDITIONAL EPIDEMIOLOGY & BIOSTATISTICS
  // =========================================================================
  {
    id: 'confounding',
    name: 'Confounding',
    category: 'epidemiology',
    description: 'Distortion of an exposure-outcome association caused by a third variable related to both.',
    conceptExplanation:
      'A confounder is associated with both the exposure and the outcome, is not on the causal pathway, and is unequally distributed between comparison groups. Confounding can make an association appear stronger, weaker, or change direction. Control methods: randomization, restriction, matching, stratification, and multivariable adjustment.',
    clinicalRelevance:
      'Failure to address confounding leads to incorrect conclusions. Example: the apparent association between coffee and lung cancer is confounded by smoking. Understanding confounding is essential for critically appraising clinical literature.',
    examples: [
      'Coffee drinking and lung cancer confounded by smoking',
      'Alcohol use and liver cancer confounded by hepatitis C status',
      'Age as a confounder in most epidemiologic studies',
    ],
    keyPearls: [
      'Confounder must be associated with both exposure and outcome',
      'Confounder must NOT be on the causal pathway (that is a mediator)',
      'Randomization is the best method to control for known and unknown confounders',
      'Multivariable regression adjusts for measured confounders in observational studies',
    ],
    references: [
      'Rothman KJ. Epidemiology: An Introduction. 2nd ed. Oxford; 2012.',
    ],
  },
  {
    id: 'bias-epidemiology',
    name: 'Bias in Epidemiology',
    category: 'epidemiology',
    description: 'Systematic error in study design, conduct, or analysis leading to incorrect estimates of association.',
    conceptExplanation:
      'Selection bias: systematic differences in who enters the study (e.g., Berkson bias, healthy worker effect, non-response bias). Information bias: systematic differences in how data are collected (e.g., recall bias, misclassification, observer bias). Bias cannot be corrected by increasing sample size; it requires design-level prevention.',
    clinicalRelevance:
      'Bias undermines study validity. Recognizing bias types helps critically appraise literature. Design features (blinding, standardized measurements, representative sampling) prevent bias.',
    examples: [
      'Recall bias: mothers of children with birth defects recall exposures more than controls',
      'Healthy worker effect: employed populations appear healthier than the general population',
      'Berkson bias: hospital-based case-control studies overrepresent comorbid patients',
    ],
    keyPearls: [
      'Bias is systematic (not random) error; increasing sample size does not fix it',
      'Selection bias and information bias are the two major categories',
      'Blinding prevents observer and reporting bias',
      'Validation studies and standardized data collection prevent information bias',
    ],
    references: [
      'Sackett DL. Bias in analytic research. J Chronic Dis. 1979;32:51-63.',
    ],
  },
  {
    id: 'likelihood-ratios',
    name: 'Likelihood Ratios',
    category: 'biostatistics',
    description: 'Ratio of the probability of a test result in patients with disease vs. without disease.',
    conceptExplanation:
      'LR+ = sensitivity / (1 - specificity); the odds of a positive result in disease vs. no disease. LR- = (1 - sensitivity) / specificity; the odds of a negative result in disease vs. no disease. LRs are independent of prevalence and can be used to update pre-test to post-test probability using Fagan nomogram.',
    clinicalRelevance:
      'LR+ > 10 or LR- < 0.1 generate large shifts in probability. LRs allow stepwise updating of disease probability as test results come in. More informative than sensitivity/specificity alone because they incorporate both.',
    examples: [
      'Positive troponin for MI: LR+ ≈ 10-15',
      'Negative D-dimer for PE: LR- ≈ 0.05-0.10',
      'Positive monospot for infectious mononucleosis: LR+ ≈ 40',
    ],
    calculations: [
      'LR+ = Sensitivity / (1 - Specificity)',
      'LR- = (1 - Sensitivity) / Specificity',
      'Post-test odds = Pre-test odds x LR',
    ],
    keyPearls: [
      'LR+ > 10 strongly rules in; LR- < 0.1 strongly rules out',
      'LRs are prevalence-independent (unlike PPV/NPV)',
      'Can be applied sequentially with multiple independent tests',
      'Fagan nomogram converts pre-test probability to post-test probability using LR',
    ],
    references: [
      'McGee S. Simplifying Likelihood Ratios. J Gen Intern Med. 2002;17:646-649.',
    ],
  },
  {
    id: 'survival-analysis',
    name: 'Survival Analysis (Kaplan-Meier)',
    category: 'biostatistics',
    description: 'Statistical methods for analyzing time-to-event data, accounting for censored observations.',
    conceptExplanation:
      'Kaplan-Meier curves estimate survival probability over time. Log-rank test compares survival between groups. Cox proportional hazards regression produces hazard ratios while adjusting for covariates. Censoring occurs when subjects are lost to follow-up or the study ends before the event occurs.',
    clinicalRelevance:
      'Standard method for reporting time-to-event outcomes in clinical trials (overall survival, progression-free survival). Kaplan-Meier curves are ubiquitous in oncology and cardiology literature. Hazard ratios are the primary effect measure in survival analysis.',
    examples: [
      'Kaplan-Meier curve showing overall survival: chemotherapy A vs. B in lung cancer',
      'HR = 0.65 for new drug vs. standard therapy (35% lower hazard of death)',
      'Median overall survival of 14 months in treatment arm vs. 10 months in control',
    ],
    calculations: [
      'Hazard ratio = hazard in treatment group / hazard in control group',
      'HR < 1 favors the treatment group',
    ],
    keyPearls: [
      'Kaplan-Meier curves handle censored data appropriately',
      'Log-rank test compares survival curves between groups',
      'Hazard ratio is the primary measure from Cox regression',
      'Median survival is read where the KM curve crosses 50%',
      'Curves crossing suggest non-proportional hazards',
    ],
    references: [
      'Bland JM, Altman DG. Survival probabilities (the Kaplan-Meier method). BMJ. 1998;317:1572.',
    ],
  },
  {
    id: 'intention-to-treat',
    name: 'Intention-to-Treat Analysis',
    category: 'biostatistics',
    description: 'Analyzing participants in the groups to which they were randomized, regardless of adherence or crossover.',
    conceptExplanation:
      'ITT analysis includes all randomized subjects in their original groups, even if they did not complete treatment, crossed over, or were lost to follow-up. This preserves the benefits of randomization and provides a conservative (real-world) estimate of treatment effect. Per-protocol analysis excludes non-adherent subjects but introduces selection bias.',
    clinicalRelevance:
      'ITT is the primary analysis in RCTs and required by regulatory agencies. Yields a pragmatic estimate of treatment effectiveness. Per-protocol analysis may overestimate efficacy. Modified ITT excludes patients who never received any treatment.',
    examples: [
      'Patient randomized to surgery who refuses and receives medical management is still analyzed in the surgery group (ITT)',
      'Drug trial where 20% of treatment arm discontinues medication: ITT keeps them in the treatment group',
    ],
    keyPearls: [
      'ITT preserves randomization and prevents selection bias',
      'Provides a conservative, real-world effectiveness estimate',
      'Per-protocol analysis may overestimate treatment efficacy',
      'Regulatory agencies require ITT as the primary analysis',
    ],
    references: [
      'Hollis S, Campbell F. What is meant by intention to treat analysis? BMJ. 1999;319:670-674.',
    ],
  },

  // =========================================================================
  // ADDITIONAL SCREENING & POLICY
  // =========================================================================
  {
    id: 'overdiagnosis',
    name: 'Overdiagnosis',
    category: 'screening',
    description: 'Detection of disease that would never have caused symptoms or harm during a person\'s lifetime.',
    conceptExplanation:
      'Overdiagnosis occurs when screening finds true pathology that is non-progressive or so slow-growing it never becomes clinically relevant. It leads to overtreatment with associated side effects, anxiety, and cost. Overdiagnosis is distinct from false positives (wrong diagnosis). Most relevant for cancer screening.',
    clinicalRelevance:
      'Estimated 15-25% of screen-detected breast cancers and up to 50% of screen-detected prostate cancers may be overdiagnosed. Shared decision-making about screening must include discussion of overdiagnosis as a harm.',
    examples: [
      'Thyroid cancer "epidemic" from ultrasound screening: 3x increase in diagnosis with no mortality change',
      'DCIS detected on mammography that may never have become invasive cancer',
      'Low-grade prostate cancer detected by PSA that would never cause symptoms',
    ],
    keyPearls: [
      'Overdiagnosis is the most important harm of screening',
      'Cannot be identified at the individual level; only at the population level',
      'Rising incidence without rising mortality suggests overdiagnosis',
      'Active surveillance is a strategy to manage overdiagnosed conditions',
    ],
    references: [
      'Welch HG, Black WC. Overdiagnosis in cancer. J Natl Cancer Inst. 2010;102:605-613.',
    ],
  },
  {
    id: 'uspstf-grades',
    name: 'USPSTF Recommendation Grades',
    category: 'screening',
    description: 'Grading system used by the US Preventive Services Task Force for clinical preventive services.',
    conceptExplanation:
      'Grade A: high certainty of substantial net benefit (recommend). Grade B: high certainty of moderate or moderate certainty of substantial net benefit (recommend). Grade C: moderate certainty of small net benefit (offer selectively). Grade D: moderate/high certainty of no benefit or harms outweigh benefits (discourage). Grade I: insufficient evidence. ACA requires insurance coverage of A and B recommendations.',
    clinicalRelevance:
      'USPSTF grades drive insurance coverage requirements, clinical guidelines, and quality metrics. Grade A/B services must be covered without cost-sharing under ACA. Understanding grades helps prioritize preventive care.',
    examples: [
      'Grade A: cervical cancer screening (Pap + HPV) in women 21-65',
      'Grade B: colorectal cancer screening ages 45-75',
      'Grade D: PSA screening in men >70 (discouraged)',
      'Grade I: routine vitamin D screening in asymptomatic adults',
    ],
    keyPearls: [
      'A and B: recommend (mandatory ACA coverage)',
      'C: offer selectively based on individual circumstances',
      'D: recommend against (evidence of harm or no benefit)',
      'I: insufficient evidence (not "no benefit")',
    ],
    references: [
      'USPSTF. Grade Definitions. https://uspreventiveservicestaskforce.org',
    ],
  },
  {
    id: 'ecological-study',
    name: 'Ecological Study',
    category: 'epidemiology',
    description: 'Observational study analyzing data at the population or group level rather than the individual level.',
    conceptExplanation:
      'Ecological studies compare aggregate data across populations (countries, states, time periods). Quick and inexpensive using existing data. Cannot infer individual-level associations from group-level data (ecological fallacy). Useful for generating hypotheses and examining contextual effects.',
    clinicalRelevance:
      'Commonly used in environmental and nutritional epidemiology. Country-level comparisons of diet and disease generate hypotheses tested in individual-level studies. Must be cautious about ecological fallacy.',
    examples: [
      'Comparing per capita saturated fat consumption and heart disease mortality across countries',
      'Fluoride in water supply and dental caries rates by county',
      'National alcohol consumption and liver disease mortality across countries',
    ],
    keyPearls: [
      'Unit of analysis is the group/population, not the individual',
      'Ecological fallacy: group-level associations may not apply to individuals',
      'Quick, inexpensive, uses existing data',
      'Best for hypothesis generation, not causal inference',
    ],
    references: [
      'Morgenstern H. Ecologic studies in epidemiology. Annu Rev Public Health. 1995;16:61-81.',
    ],
  },
  {
    id: 'case-series-report',
    name: 'Case Series and Case Report',
    category: 'epidemiology',
    description: 'Descriptive accounts of clinical experiences with individual patients or small patient groups.',
    conceptExplanation:
      'Case reports describe a single patient; case series describe a group of patients with similar diagnoses or treatments. No comparison group, so cannot test hypotheses about associations. Lowest level of evidence but valuable for identifying new diseases, unusual presentations, and adverse drug reactions.',
    clinicalRelevance:
      'First recognition of AIDS, vaping-associated lung injury (EVALI), and many rare drug reactions came from case reports/series. Important for pharmacovigilance and rare disease identification.',
    examples: [
      'Initial report of 5 cases of Pneumocystis pneumonia in young gay men (1981) that first identified AIDS',
      'Case series of EVALI cases leading to identification of vitamin E acetate',
      'Case report of new adverse drug reaction prompting FDA safety alert',
    ],
    keyPearls: [
      'Lowest level of evidence but highest for hypothesis generation',
      'No comparison group; cannot calculate measures of association',
      'Critical for identifying new diseases and adverse drug effects',
      'Often the first signal of emerging health threats',
    ],
    references: [
      'Nissen T, Wynn R. The clinical case report: a review of its merits and limitations. BMC Res Notes. 2014;7:264.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Search entries by query matching id, name, description, conceptExplanation, or keyPearls. */
export const searchPublicHealthEntries = (query: string): PublicHealthEntry[] => {
  const q = query.toLowerCase();
  return publicHealthDatabase.filter((e) => {
    const haystack = [e.id, e.name, e.description, e.conceptExplanation, ...e.keyPearls]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
};

/** Filter entries by one or more categories. */
export const filterByCategory = (categories: PublicHealthCategory[]): PublicHealthEntry[] =>
  publicHealthDatabase.filter((e) => categories.includes(e.category));

/** Get a single entry by its id. */
export const getEntryById = (id: string): PublicHealthEntry | undefined =>
  publicHealthDatabase.find((e) => e.id === id);
