/**
 * Evidence-Based Medicine Database
 *
 * Comprehensive database of EBM concepts for the SOMA medical education app.
 * Covers study designs, statistical concepts, critical appraisal, levels of
 * evidence, clinical guidelines, systematic reviews, diagnostic testing,
 * treatment analysis, and research methodology.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type EBMCategory =
  | 'study-design'
  | 'statistical-concepts'
  | 'critical-appraisal'
  | 'levels-of-evidence'
  | 'clinical-guidelines'
  | 'systematic-review'
  | 'diagnostic-testing'
  | 'treatment-analysis'
  | 'research-methodology';

export interface EBMEntry {
  id: string;
  name: string;
  category: EBMCategory;
  description: string;
  conceptExplanation: string;
  clinicalApplication: string;
  calculations?: string[];
  examples: string[];
  pitfalls: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database Entries
// ---------------------------------------------------------------------------

export const EBM_DATABASE: readonly EBMEntry[] = [
  // ==========================================================================
  // STUDY DESIGNS
  // ==========================================================================
  {
    id: 'ebm-rct',
    name: 'Randomized Controlled Trial (RCT)',
    category: 'study-design',
    description: 'Experimental study where participants are randomly allocated to intervention or control groups.',
    conceptExplanation:
      'The RCT is considered the gold standard for evaluating treatment efficacy. Random allocation minimizes selection bias and distributes known and unknown confounders equally between groups. Blinding (single, double, or triple) further reduces bias. The control group may receive placebo, standard care, or an active comparator.',
    clinicalApplication:
      'RCTs form the basis of most drug approvals and clinical guideline recommendations. When reading an RCT, assess the randomization method, allocation concealment, blinding, sample size justification, and intention-to-treat analysis.',
    calculations: [
      'Sample size = (Z_alpha/2 + Z_beta)^2 * 2 * sigma^2 / delta^2 for continuous outcomes',
      'Sample size = (Z_alpha/2 + Z_beta)^2 * [p1(1-p1) + p2(1-p2)] / (p1 - p2)^2 for proportions',
    ],
    examples: [
      'The SPRINT trial randomized patients to intensive vs standard blood pressure control, showing reduced cardiovascular events with a target SBP < 120 mmHg.',
      'The Women\'s Health Initiative randomized postmenopausal women to hormone replacement therapy vs placebo.',
    ],
    pitfalls: [
      'Volunteer bias: participants in RCTs may not represent the general population.',
      'Ethical limitations prevent randomizing to known harmful exposures (e.g., smoking).',
      'Loss to follow-up can introduce attrition bias and compromise randomization balance.',
      'Per-protocol analyses can re-introduce confounding eliminated by randomization.',
    ],
    keyPearls: [
      'Randomization addresses both known and unknown confounders, which no observational design can do.',
      'Allocation concealment is distinct from blinding and equally important for internal validity.',
      'CONSORT checklist is the standard for reporting RCTs.',
    ],
    references: [
      'Schulz KF, et al. CONSORT 2010 statement. BMJ. 2010;340:c332.',
      'Moher D, et al. CONSORT 2010 explanation and elaboration. BMJ. 2010;340:c869.',
    ],
  },
  {
    id: 'ebm-cohort-study',
    name: 'Cohort Study',
    category: 'study-design',
    description: 'Observational study following a group of individuals over time to assess exposure-outcome relationships.',
    conceptExplanation:
      'Cohort studies follow a defined group (cohort) over time, comparing those exposed to a factor against those not exposed. Prospective cohorts recruit participants and follow them forward; retrospective cohorts use existing records to look back. They can measure incidence, relative risk, and temporal sequence of exposure and outcome.',
    clinicalApplication:
      'Ideal for studying disease incidence, natural history, and risk factors. The Framingham Heart Study is a landmark prospective cohort that identified major cardiovascular risk factors. Useful when randomization is unethical or impractical.',
    calculations: [
      'Relative Risk (RR) = Incidence in exposed / Incidence in unexposed',
      'Attributable Risk = Incidence in exposed - Incidence in unexposed',
    ],
    examples: [
      'The Framingham Heart Study has followed participants since 1948, identifying risk factors for cardiovascular disease.',
      'The Nurses\' Health Study tracked diet, lifestyle, and disease outcomes in over 120,000 nurses.',
    ],
    pitfalls: [
      'Loss to follow-up can bias results if those who drop out differ from those who remain.',
      'Prospective cohorts are expensive and time-consuming for diseases with long latency.',
      'Cannot prove causation, only association, due to potential unmeasured confounders.',
    ],
    keyPearls: [
      'Cohort studies can calculate incidence and relative risk directly, unlike case-control studies.',
      'Retrospective cohorts are faster and cheaper but depend on data quality from existing records.',
      'STROBE checklist guides transparent reporting of cohort studies.',
    ],
    references: [
      'Dawber TR, et al. Epidemiological approaches to heart disease: The Framingham Study. Am J Public Health. 1951;41(3):279-286.',
      'von Elm E, et al. The STROBE statement. Ann Intern Med. 2007;147(8):573-577.',
    ],
  },
  {
    id: 'ebm-case-control',
    name: 'Case-Control Study',
    category: 'study-design',
    description: 'Observational study comparing individuals with a disease (cases) to those without (controls) to identify associated exposures.',
    conceptExplanation:
      'Case-control studies start with the outcome and look backward for exposures. Cases are individuals with the disease; controls are similar individuals without it. Because participants are selected based on outcome rather than exposure, incidence cannot be directly calculated. Instead, the odds ratio (OR) is used to estimate association.',
    clinicalApplication:
      'Especially useful for rare diseases or conditions with long latency periods. The study design that first linked thalidomide to birth defects and smoking to lung cancer was case-control. Efficient when studying multiple potential exposures for a single outcome.',
    calculations: [
      'Odds Ratio (OR) = (a * d) / (b * c), where a = exposed cases, b = exposed controls, c = unexposed cases, d = unexposed controls',
      'For rare diseases, OR approximates the Relative Risk.',
    ],
    examples: [
      'Doll and Hill\'s case-control study linking smoking to lung cancer (1950) was pivotal in tobacco control.',
      'A case-control study comparing women with ovarian cancer (cases) to women without (controls) to assess oral contraceptive use as a protective factor.',
    ],
    pitfalls: [
      'Recall bias: cases may remember exposures differently than controls.',
      'Selection of appropriate controls is critical and often the most challenging aspect.',
      'Cannot determine incidence or prevalence from a case-control design.',
      'Temporal sequence may be difficult to establish with certainty.',
    ],
    keyPearls: [
      'Case-control studies are the most efficient design for rare diseases.',
      'Matching controls on key variables (age, sex) reduces confounding but requires matched analysis.',
      'Nested case-control studies within a cohort combine strengths of both designs.',
    ],
    references: [
      'Doll R, Hill AB. Smoking and carcinoma of the lung. BMJ. 1950;2(4682):739-748.',
      'Schulz KF, Grimes DA. Case-control studies: research in reverse. Lancet. 2002;359(9304):431-434.',
    ],
  },
  {
    id: 'ebm-cross-sectional',
    name: 'Cross-Sectional Study',
    category: 'study-design',
    description: 'Observational study measuring exposure and outcome simultaneously at a single point in time.',
    conceptExplanation:
      'Cross-sectional studies provide a "snapshot" of a population at one moment. They measure the prevalence of disease and exposure simultaneously. Useful for public health planning and generating hypotheses, but cannot establish temporal sequence or causation.',
    clinicalApplication:
      'Commonly used in epidemiological surveys (e.g., NHANES). Helpful for assessing disease burden, healthcare needs, and prevalence of risk factors in a population. Often serves as the starting point for further analytic studies.',
    calculations: [
      'Prevalence = Number of cases at a point in time / Total population at that time',
      'Prevalence Odds Ratio can be calculated but does not imply causation.',
    ],
    examples: [
      'NHANES surveys assess the prevalence of obesity, diabetes, and other conditions in the US population.',
      'A survey of medical students measuring burnout prevalence and associated factors at a single time point.',
    ],
    pitfalls: [
      'Cannot establish cause-and-effect (chicken-or-egg problem).',
      'Prevalence-incidence bias: long-duration diseases are over-represented.',
      'Non-response bias can distort prevalence estimates.',
    ],
    keyPearls: [
      'Cross-sectional studies measure prevalence, not incidence.',
      'They are relatively quick and inexpensive to conduct.',
      'Useful for generating hypotheses that can be tested with analytic designs.',
    ],
    references: [
      'Levin KA. Study design III: Cross-sectional studies. Evid Based Dent. 2006;7(1):24-25.',
    ],
  },
  {
    id: 'ebm-case-series',
    name: 'Case Series',
    category: 'study-design',
    description: 'Descriptive report of characteristics or outcomes observed in a group of patients with a similar condition.',
    conceptExplanation:
      'A case series describes a collection of patients with a similar diagnosis, treatment, or outcome without a comparison group. It sits near the bottom of the evidence hierarchy but plays an important role in identifying new diseases, adverse drug reactions, and generating hypotheses for further study.',
    clinicalApplication:
      'Case series are often the first signal of a new disease or treatment complication. The initial reports of AIDS in 1981 and vaping-associated lung injury (EVALI) in 2019 were case series. They are valuable for rare conditions where controlled studies are impractical.',
    examples: [
      'The original 1981 MMWR report describing five cases of Pneumocystis pneumonia in young men (first recognized AIDS cases).',
      'A case series of patients developing myocarditis after mRNA vaccination helped characterize this rare adverse event.',
    ],
    pitfalls: [
      'No control group means no ability to compare or attribute causation.',
      'Subject to selection bias: cases may be cherry-picked.',
      'Cannot calculate incidence, prevalence, or risk ratios.',
    ],
    keyPearls: [
      'Case series are hypothesis-generating, not hypothesis-testing.',
      'They are essential for initial recognition of new diseases and drug adverse effects.',
      'A case series with >3 cases is generally needed for publication.',
    ],
    references: [
      'Abu-Zidan FM, et al. Clinical judgement in the era of evidence-based medicine. J Emerg Trauma Shock. 2012;5(4):353.',
    ],
  },
  {
    id: 'ebm-ecological-study',
    name: 'Ecological Study',
    category: 'study-design',
    description: 'Observational study using population-level (aggregate) data rather than individual-level data.',
    conceptExplanation:
      'Ecological studies compare exposures and outcomes at the group or population level (e.g., countries, states). They use aggregate data such as per-capita alcohol consumption and liver disease rates. While efficient and useful for hypothesis generation, they are highly susceptible to the ecological fallacy.',
    clinicalApplication:
      'Often used in public health to examine geographic or temporal patterns. Can prompt further investigation but should never be used alone to guide individual clinical decisions.',
    examples: [
      'Comparing national fat intake per capita with breast cancer mortality rates across countries.',
      'Correlating fluoride levels in water supply with dental caries rates across communities.',
    ],
    pitfalls: [
      'Ecological fallacy: associations at the group level may not hold at the individual level.',
      'Cannot control for confounders at the individual level.',
      'Aggregation can mask within-group variation.',
    ],
    keyPearls: [
      'Ecological fallacy is the cardinal sin of ecological studies: never infer individual risk from group data.',
      'These studies are hypothesis-generating only and sit low on the evidence hierarchy.',
      'Useful for identifying large-scale patterns that warrant further investigation.',
    ],
    references: [
      'Morgenstern H. Ecologic studies in epidemiology: concepts, principles, and methods. Annu Rev Public Health. 1995;16:61-81.',
    ],
  },
  {
    id: 'ebm-meta-analysis',
    name: 'Meta-Analysis',
    category: 'study-design',
    description: 'Statistical technique combining results from multiple studies to produce a pooled estimate of effect.',
    conceptExplanation:
      'Meta-analysis uses quantitative methods to combine data from individual studies, increasing statistical power and precision. Studies are weighted (typically by inverse variance) and combined using fixed-effect or random-effects models. Heterogeneity is assessed with I-squared and Cochran Q statistics. Results are displayed in a forest plot.',
    clinicalApplication:
      'Meta-analyses sit at the top of the evidence hierarchy when based on well-conducted RCTs. They inform clinical guidelines and formulary decisions. Always assess the quality of included studies, heterogeneity, and publication bias (funnel plot, Egger test).',
    calculations: [
      'Pooled effect = sum of (weight_i * effect_i) / sum of weight_i',
      'Weight_i = 1 / variance_i (inverse variance weighting)',
      'I-squared = [(Q - df) / Q] * 100%, where Q = Cochran Q statistic',
    ],
    examples: [
      'A Cochrane meta-analysis of RCTs showing statins reduce major cardiovascular events by about 25% relative risk reduction.',
      'Meta-analysis pooling data from 10 RCTs to assess the effect of CBT on depression outcomes.',
    ],
    pitfalls: [
      'Garbage in, garbage out: a meta-analysis of low-quality studies produces unreliable results.',
      'Publication bias inflates pooled effects because negative studies are less likely to be published.',
      'High heterogeneity (I-squared > 75%) may mean studies should not be combined.',
      'Combining fundamentally different studies (apples and oranges) can be misleading.',
    ],
    keyPearls: [
      'A forest plot visually displays individual and pooled effect sizes with confidence intervals.',
      'Always check the I-squared value: < 25% low, 25-50% moderate, 50-75% substantial, > 75% considerable heterogeneity.',
      'Funnel plot asymmetry suggests publication bias.',
      'Random-effects models are more conservative and account for between-study variability.',
    ],
    references: [
      'Higgins JPT, et al. Cochrane Handbook for Systematic Reviews of Interventions. Version 6.3. 2022.',
      'DerSimonian R, Laird N. Meta-analysis in clinical trials. Control Clin Trials. 1986;7(3):177-188.',
    ],
  },

  // ==========================================================================
  // STATISTICAL CONCEPTS
  // ==========================================================================
  {
    id: 'ebm-p-value',
    name: 'P-Value',
    category: 'statistical-concepts',
    description: 'The probability of observing results as extreme as the data, assuming the null hypothesis is true.',
    conceptExplanation:
      'The p-value quantifies the strength of evidence against the null hypothesis. It is NOT the probability that the null hypothesis is true, nor the probability that findings are due to chance. A p-value < 0.05 is conventionally considered statistically significant, but this threshold is arbitrary. P-values do not measure effect size or clinical importance.',
    clinicalApplication:
      'When reading a study, never rely on the p-value alone. Always examine the effect size and confidence interval. A very large study can produce a statistically significant (small p) but clinically trivial result. Conversely, a small study may miss a clinically important effect (non-significant p).',
    calculations: [
      'Calculated from the test statistic (t, z, chi-squared, F) under the null distribution.',
      'P = P(observed data or more extreme | H0 is true)',
    ],
    examples: [
      'A study finds mean blood pressure is 2 mmHg lower with drug A vs placebo (p = 0.001). Statistically significant but clinically meaningless.',
      'A trial reports 5% absolute mortality reduction with a new treatment (p = 0.08). Not "significant" at 0.05 but potentially clinically meaningful.',
    ],
    pitfalls: [
      'P-hacking: testing multiple comparisons and selectively reporting significant ones.',
      'A p-value does NOT indicate the probability that the null hypothesis is true.',
      'Statistical significance does not equal clinical significance.',
      'The 0.05 threshold is arbitrary and should not be treated as a binary cutoff.',
    ],
    keyPearls: [
      'Always report and interpret p-values alongside confidence intervals and effect sizes.',
      'A p-value of 0.05 means there is a 5% chance of seeing this data if the null hypothesis were true, NOT a 5% chance the result is wrong.',
      'The ASA statement on p-values (2016) warns against over-reliance on statistical significance.',
    ],
    references: [
      'Wasserstein RL, Lazar NA. The ASA statement on p-values. Am Stat. 2016;70(2):129-133.',
      'Greenland S, et al. Statistical tests, P values, confidence intervals, and power. Eur J Epidemiol. 2016;31(4):337-350.',
    ],
  },
  {
    id: 'ebm-confidence-intervals',
    name: 'Confidence Intervals',
    category: 'statistical-concepts',
    description: 'A range of values within which the true population parameter is expected to lie at a given confidence level.',
    conceptExplanation:
      'A 95% confidence interval means that if the study were repeated many times, 95% of the calculated intervals would contain the true population parameter. It conveys both the estimated effect and the precision of that estimate. Wider intervals indicate less precision (smaller sample or greater variability); narrower intervals indicate more precision.',
    clinicalApplication:
      'Confidence intervals are more informative than p-values alone because they show the range of plausible effect sizes. If the CI for a relative risk excludes 1.0 (or for a mean difference excludes 0), the result is statistically significant at the corresponding alpha level.',
    calculations: [
      '95% CI for a mean = mean +/- 1.96 * (SD / sqrt(n))',
      '95% CI for a proportion = p +/- 1.96 * sqrt[p(1-p)/n]',
    ],
    examples: [
      'A drug reduces LDL cholesterol by 30 mg/dL (95% CI: 25-35). The true effect is very likely between 25 and 35 mg/dL.',
      'Relative risk of death = 0.85 (95% CI: 0.70-1.03). The CI crosses 1.0, so the result is not statistically significant.',
    ],
    pitfalls: [
      'A 95% CI does NOT mean there is a 95% probability the true value lies within this specific interval.',
      'Confidence intervals can be misleadingly narrow with very large samples despite trivial effects.',
      'Overlapping CIs between groups do not necessarily mean no significant difference exists.',
    ],
    keyPearls: [
      'Always interpret CIs in context of clinical significance, not just statistical significance.',
      'If the entire CI falls within a clinically meaningful range, the finding is both statistically and clinically significant.',
      'CIs provide a range of plausible values, giving more information than a dichotomous p-value.',
    ],
    references: [
      'Gardner MJ, Altman DG. Confidence intervals rather than P values: estimation rather than hypothesis testing. BMJ. 1986;292(6522):746-750.',
    ],
  },
  {
    id: 'ebm-statistical-power',
    name: 'Statistical Power',
    category: 'statistical-concepts',
    description: 'The probability that a study will detect a true effect when one exists (1 minus beta error).',
    conceptExplanation:
      'Power = 1 - beta, where beta is the probability of a Type II error (false negative). Conventionally, studies aim for 80% power (beta = 0.20). Power depends on sample size, effect size, alpha level, and variance. An underpowered study may fail to detect a real treatment effect, leading to a false conclusion of "no difference."',
    clinicalApplication:
      'Before conducting a study, a power analysis determines the required sample size. When reading a negative study, check if it was adequately powered. A study with only 40% power has a 60% chance of missing a true effect, so a negative result is uninformative.',
    calculations: [
      'Power = 1 - beta',
      'Power increases with larger sample size, larger effect size, higher alpha, and lower variance.',
      'Sample size formula incorporates desired power (typically 80-90%).',
    ],
    examples: [
      'A trial with 50 patients per arm has 40% power to detect a 10% difference, meaning it is more likely to miss the effect than find it.',
      'Increasing sample size from 100 to 400 per arm increases power from 60% to 95% for detecting the same effect.',
    ],
    pitfalls: [
      'Underpowered studies are a waste of resources and can be misleading.',
      'Post-hoc power calculations are circular and should not be performed.',
      'A non-significant result in an underpowered study does NOT mean there is no effect.',
    ],
    keyPearls: [
      'Always verify that a negative study was adequately powered before accepting the null conclusion.',
      'The most common reason for a negative trial is insufficient sample size.',
      'Power analysis should be performed a priori and reported in the methods section.',
    ],
    references: [
      'Cohen J. Statistical Power Analysis for the Behavioral Sciences. 2nd ed. Lawrence Erlbaum; 1988.',
    ],
  },
  {
    id: 'ebm-alpha-beta-error',
    name: 'Type I and Type II Errors (Alpha and Beta)',
    category: 'statistical-concepts',
    description: 'Type I (alpha) error is a false positive; Type II (beta) error is a false negative.',
    conceptExplanation:
      'Alpha (Type I) error occurs when a true null hypothesis is incorrectly rejected, detecting an effect that does not exist. Conventionally set at 0.05. Beta (Type II) error occurs when a false null hypothesis is not rejected, failing to detect an effect that does exist. Conventionally set at 0.20 (80% power). There is an inherent trade-off: decreasing alpha increases beta and vice versa, unless sample size is increased.',
    clinicalApplication:
      'The acceptable alpha depends on the clinical context. Screening tests tolerate higher alpha (more false positives) to avoid missing disease. Confirmatory drug trials use strict alpha (0.05 or 0.01) because false positives lead to inappropriate treatments.',
    examples: [
      'Alpha error: Concluding a drug works when it actually does not, leading to adoption of an ineffective treatment.',
      'Beta error: Concluding a drug does not work when it actually does, missing a potentially life-saving therapy.',
    ],
    pitfalls: [
      'Multiple comparisons inflate alpha error unless corrections (e.g., Bonferroni) are applied.',
      'Setting alpha too low without increasing sample size inflates beta error.',
      'Researchers often focus on alpha while neglecting beta, leading to underpowered studies.',
    ],
    keyPearls: [
      'Alpha is the probability of a false positive; beta is the probability of a false negative.',
      'The Bonferroni correction adjusts alpha for multiple comparisons: alpha_adjusted = alpha / number of tests.',
      'Think of alpha error as a "false alarm" and beta error as a "missed detection."',
    ],
    references: [
      'Banerjee A, et al. Hypothesis testing, type I and type II errors. Ind Psychiatry J. 2009;18(2):127-131.',
    ],
  },
  {
    id: 'ebm-nnt-nnh',
    name: 'Number Needed to Treat / Number Needed to Harm (NNT/NNH)',
    category: 'statistical-concepts',
    description: 'NNT is the number of patients who need to be treated for one additional patient to benefit; NNH is the equivalent for harm.',
    conceptExplanation:
      'NNT = 1 / Absolute Risk Reduction (ARR). It translates abstract statistical results into a concrete, patient-centered metric. NNH = 1 / Absolute Risk Increase (ARI) and quantifies treatment harms. Lower NNT indicates greater treatment efficacy. The benefit-harm ratio (NNT vs NNH) helps clinicians weigh treatment decisions.',
    clinicalApplication:
      'NNT is one of the most practical statistics for clinical decision-making and shared decision-making with patients. For example, telling a patient "we need to treat 20 people like you for one person to benefit" is far more transparent than "this drug reduces your relative risk by 25%."',
    calculations: [
      'NNT = 1 / ARR = 1 / (Control Event Rate - Treatment Event Rate)',
      'NNH = 1 / ARI = 1 / (Treatment Event Rate - Control Event Rate) for harms',
      'NNT should always be rounded up to the next whole number.',
    ],
    examples: [
      'Statins for primary prevention: NNT of ~50 over 5 years to prevent one major cardiovascular event.',
      'Aspirin after MI: NNT of ~40 to prevent one death over 2 years.',
      'NSAIDs for GI bleeding: NNH of ~100 per year (1 in 100 patients will have a GI bleed).',
    ],
    pitfalls: [
      'NNT is time-dependent: always specify the follow-up duration.',
      'NNT calculated from relative risk reduction without baseline risk is misleading.',
      'NNT applies to the specific population studied and may not generalize to all patients.',
    ],
    keyPearls: [
      'NNT = 1 is the perfect treatment (every treated patient benefits).',
      'Always compare NNT for benefit against NNH for harm when making treatment decisions.',
      'NNT is most useful when communicating risk-benefit with patients.',
    ],
    references: [
      'Laupacis A, et al. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med. 1988;318(26):1728-1733.',
    ],
  },
  {
    id: 'ebm-absolute-vs-relative-risk',
    name: 'Absolute vs Relative Risk Reduction',
    category: 'statistical-concepts',
    description: 'Absolute risk reduction is the arithmetic difference between event rates; relative risk reduction is the proportional reduction.',
    conceptExplanation:
      'Absolute Risk Reduction (ARR) = Control Event Rate (CER) - Experimental Event Rate (EER). Relative Risk Reduction (RRR) = ARR / CER. RRR can be misleadingly large when baseline risk is low. For example, reducing risk from 2% to 1% is an RRR of 50% but an ARR of only 1%. Pharmaceutical marketing often uses RRR because it sounds more impressive.',
    clinicalApplication:
      'Always ask for absolute numbers when presented with relative risk statistics. Shared decision-making tools like fact boxes present absolute risks side by side for intervention and control groups, facilitating informed patient choices.',
    calculations: [
      'ARR = CER - EER',
      'RRR = ARR / CER = (CER - EER) / CER',
      'NNT = 1 / ARR',
    ],
    examples: [
      'Drug X reduces stroke from 4% to 3%: ARR = 1%, RRR = 25%, NNT = 100.',
      'Drug Y reduces stroke from 40% to 30%: ARR = 10%, RRR = 25%, NNT = 10. Same RRR, very different clinical impact.',
    ],
    pitfalls: [
      'Relative risk reduction is identical (25%) in both examples above, but absolute benefit differs 10-fold.',
      'Media and pharma often report RRR to make effects appear larger.',
      'Without knowing baseline risk, RRR alone is uninformative.',
    ],
    keyPearls: [
      'Always convert RRR to ARR using baseline risk: ARR = RRR * baseline risk.',
      'The higher the baseline risk, the greater the absolute benefit of treatment.',
      'RRR is constant across baseline risks; ARR is not.',
    ],
    references: [
      'Barratt A, et al. Tips for learners of evidence-based medicine: 1. Relative risk reduction, absolute risk reduction and number needed to treat. CMAJ. 2004;171(4):353-358.',
    ],
  },

  // ==========================================================================
  // CRITICAL APPRAISAL
  // ==========================================================================
  {
    id: 'ebm-selection-bias',
    name: 'Selection Bias',
    category: 'critical-appraisal',
    description: 'Systematic error arising from the way participants are selected or allocated, making groups non-comparable.',
    conceptExplanation:
      'Selection bias occurs when the study sample does not represent the target population, or when comparison groups differ systematically at baseline. Subtypes include sampling bias, volunteer bias, non-response bias, Berkson bias (hospital-based), and allocation bias. Randomization is the primary defense in experimental studies.',
    clinicalApplication:
      'When appraising a study, assess how participants were recruited and allocated. Were randomization and allocation concealment used? Was the sample representative? High selection bias undermines internal validity, making results unreliable regardless of statistical significance.',
    examples: [
      'A study recruiting patients only from a tertiary referral center may overestimate disease severity (Berkson bias).',
      'Volunteers for a wellness trial are likely healthier than non-volunteers, biasing results in favor of the intervention.',
    ],
    pitfalls: [
      'Selection bias cannot be corrected in analysis once it has occurred.',
      'Self-selection into treatment groups in observational studies is a major source.',
      'Healthy worker effect: employed individuals are generally healthier, biasing occupational studies.',
    ],
    keyPearls: [
      'Randomization with allocation concealment is the strongest protection against selection bias.',
      'Selection bias threatens internal validity and can make results entirely invalid.',
      'In observational studies, propensity score matching can partially mitigate selection bias.',
    ],
    references: [
      'Hernan MA, Robins JM. Causal Inference: What If. Chapman & Hall/CRC; 2020.',
    ],
  },
  {
    id: 'ebm-information-bias',
    name: 'Information Bias (Measurement Bias)',
    category: 'critical-appraisal',
    description: 'Systematic error in how exposure or outcome data are collected, leading to incorrect classification.',
    conceptExplanation:
      'Information bias occurs when data collection is flawed, leading to misclassification of exposure, outcome, or both. Types include recall bias (cases remember exposures differently), interviewer bias (unblinded investigators probe differently), detection/surveillance bias (one group monitored more closely), and misclassification (differential or non-differential).',
    clinicalApplication:
      'Blinding of participants, investigators, and outcome assessors minimizes information bias. When reading a study, check if outcomes were assessed objectively, who collected the data, and whether assessors were blinded to group assignment.',
    examples: [
      'Mothers of children with birth defects recall medication use during pregnancy more completely than mothers of healthy children (recall bias).',
      'Patients in the treatment group receive more frequent follow-up visits, leading to earlier detection of outcomes (surveillance bias).',
    ],
    pitfalls: [
      'Recall bias is particularly problematic in case-control studies.',
      'Non-differential misclassification biases toward the null (can mask true effects).',
      'Differential misclassification can bias in either direction.',
    ],
    keyPearls: [
      'Blinding (double or triple) is the strongest defense against information bias.',
      'Use objective, validated measurement tools wherever possible.',
      'Non-differential misclassification reduces power to detect true associations.',
    ],
    references: [
      'Delgado-Rodriguez M, Llorca J. Bias. J Epidemiol Community Health. 2004;58(8):635-641.',
    ],
  },
  {
    id: 'ebm-confounding',
    name: 'Confounding',
    category: 'critical-appraisal',
    description: 'A third variable associated with both the exposure and outcome that distorts the apparent relationship between them.',
    conceptExplanation:
      'A confounder must satisfy three criteria: (1) associated with the exposure, (2) independently associated with the outcome, and (3) not on the causal pathway between exposure and outcome. Confounding can exaggerate, diminish, or reverse the apparent effect. Control methods include randomization, restriction, matching, stratification, and multivariable regression.',
    clinicalApplication:
      'Confounding is the primary threat to causal inference in observational studies. When an observational study reports an association, always ask: could a confounder explain this? For example, the association between coffee drinking and lung cancer is confounded by smoking.',
    examples: [
      'Coffee drinking appears associated with lung cancer, but this is confounded by smoking (coffee drinkers are more likely to smoke).',
      'Alcohol appears protective for heart disease, but this may be confounded by socioeconomic status and lifestyle factors.',
    ],
    pitfalls: [
      'Residual confounding persists even after adjustment if confounders are measured imprecisely.',
      'Unmeasured confounders cannot be adjusted for in analysis.',
      'Over-adjustment (adjusting for variables on the causal pathway) introduces bias rather than removing it.',
    ],
    keyPearls: [
      'Randomization is the only method that addresses both known AND unknown confounders.',
      'Directed acyclic graphs (DAGs) help identify confounders and avoid over-adjustment.',
      'Simpson paradox: confounding can reverse the direction of an association.',
    ],
    references: [
      'Greenland S, Morgenstern H. Confounding in health research. Annu Rev Public Health. 2001;22:189-212.',
    ],
  },
  {
    id: 'ebm-internal-external-validity',
    name: 'Internal and External Validity',
    category: 'critical-appraisal',
    description: 'Internal validity is whether results are accurate for the study population; external validity is whether results generalize to other populations.',
    conceptExplanation:
      'Internal validity (freedom from bias) asks: are the results true for the participants studied? External validity (generalizability) asks: do the results apply to my patient or population? Strict inclusion/exclusion criteria improve internal validity but may reduce external validity. A study must have internal validity before external validity is relevant.',
    clinicalApplication:
      'When applying evidence to a patient, first assess internal validity (was the study well-conducted?), then external validity (is my patient similar to study participants?). A perfectly conducted trial in a narrow population may not apply to your elderly, multimorbid patient.',
    examples: [
      'A drug trial excluding patients over 75 has high internal validity but limited external validity for geriatric populations.',
      'A pragmatic trial in community settings has high external validity but may have lower internal validity due to less strict controls.',
    ],
    pitfalls: [
      'Chasing internal validity with overly strict criteria creates "efficacy-effectiveness gap."',
      'External validity cannot be assessed statistically; it requires clinical judgment.',
      'A study lacking internal validity has no external validity, regardless of how representative the sample.',
    ],
    keyPearls: [
      'Internal validity is a prerequisite: without it, external validity is meaningless.',
      'Pragmatic trials sacrifice some internal validity for greater external validity.',
      'The PRECIS-2 tool helps assess where a trial falls on the explanatory-pragmatic spectrum.',
    ],
    references: [
      'Rothwell PM. External validity of randomised controlled trials. Lancet. 2005;365(9453):82-93.',
    ],
  },

  // ==========================================================================
  // LEVELS OF EVIDENCE
  // ==========================================================================
  {
    id: 'ebm-evidence-hierarchy',
    name: 'Levels of Evidence Hierarchy',
    category: 'levels-of-evidence',
    description: 'A ranking system that classifies evidence from strongest (systematic reviews of RCTs) to weakest (expert opinion).',
    conceptExplanation:
      'The evidence hierarchy ranks study designs by their ability to minimize bias. From top to bottom: (1) Systematic reviews and meta-analyses of RCTs, (2) Individual RCTs, (3) Cohort studies, (4) Case-control studies, (5) Cross-sectional studies, (6) Case series/case reports, (7) Expert opinion. However, a well-conducted cohort study may provide better evidence than a poorly conducted RCT. Quality within each level matters.',
    clinicalApplication:
      'Use the hierarchy as a starting framework when searching for evidence. Begin with systematic reviews, then individual trials, then observational studies. But always appraise quality: a biased RCT is worse than a well-conducted cohort study.',
    examples: [
      'A Cochrane systematic review of 20 RCTs provides Level 1 evidence for a drug\'s efficacy.',
      'A single large observational cohort study provides Level 3 evidence but may be the best available for a rare exposure.',
    ],
    pitfalls: [
      'The hierarchy is a guide, not a rigid rule. Study quality within each level varies enormously.',
      'Some clinical questions (prognosis, harm, etiology) are best answered by observational designs.',
      'Expert opinion at the bottom does not mean expert opinion is worthless, only that it is more prone to bias.',
    ],
    keyPearls: [
      'Quality trumps hierarchy level: a high-quality cohort study beats a low-quality RCT.',
      'Different clinical questions may be best answered by different study designs.',
      'The Oxford Centre for Evidence-Based Medicine provides a detailed levels-of-evidence table.',
    ],
    references: [
      'OCEBM Levels of Evidence Working Group. The Oxford Levels of Evidence 2. Oxford CEBM. 2011.',
      'Burns PB, et al. The levels of evidence and their role in evidence-based medicine. Plast Reconstr Surg. 2011;128(1):305-310.',
    ],
  },
  {
    id: 'ebm-oxford-levels',
    name: 'Oxford Centre for Evidence-Based Medicine Levels',
    category: 'levels-of-evidence',
    description: 'A detailed classification system matching evidence levels to different types of clinical questions.',
    conceptExplanation:
      'The Oxford CEBM system classifies evidence into 5 levels for different question types: therapy, prognosis, diagnosis, differential diagnosis, and economic analysis. Level 1: systematic reviews; Level 2: individual studies with dramatic effect; Level 3: non-randomized controlled studies; Level 4: case series; Level 5: mechanism-based reasoning or expert opinion. Each clinical question type has its own optimal study design.',
    clinicalApplication:
      'Match the question type to the appropriate evidence level. For therapy questions, look for RCTs. For diagnostic questions, look for cross-sectional studies with blinded comparison to a gold standard. For prognosis questions, look for cohort studies.',
    examples: [
      'Therapy question "Does drug X reduce mortality?": Best evidence is a systematic review of RCTs (Level 1).',
      'Diagnosis question "How accurate is troponin for MI?": Best evidence is a cross-sectional study with blinded comparison to angiography (Level 1 for diagnosis).',
    ],
    pitfalls: [
      'Applying therapy evidence levels to diagnostic or prognostic questions is inappropriate.',
      'The system is meant to guide, not replace, critical appraisal of individual studies.',
    ],
    keyPearls: [
      'Different clinical questions have different "gold standard" study designs.',
      'For prognosis, cohort studies (not RCTs) are the ideal design.',
      'For diagnosis, the ideal study is a blinded comparison against an independent reference standard.',
    ],
    references: [
      'Howick J, et al. The 2011 Oxford CEBM Evidence Levels of Evidence. OCEBM Table of Evidence. 2011.',
    ],
  },

  // ==========================================================================
  // CLINICAL GUIDELINES
  // ==========================================================================
  {
    id: 'ebm-grade-system',
    name: 'GRADE System',
    category: 'clinical-guidelines',
    description: 'Grading of Recommendations Assessment, Development and Evaluation - a systematic framework for rating certainty of evidence and strength of recommendations.',
    conceptExplanation:
      'GRADE rates evidence certainty as high, moderate, low, or very low. RCTs start as high and are downgraded for risk of bias, inconsistency, indirectness, imprecision, or publication bias. Observational studies start as low and can be upgraded for large effect, dose-response gradient, or confounders that would reduce the effect. Recommendations are strong or weak/conditional based on certainty, balance of benefits and harms, patient values, and resource use.',
    clinicalApplication:
      'GRADE is used by WHO, UpToDate, ACP, and many guideline organizations. When reading a guideline, look for the GRADE rating. A "strong recommendation, moderate certainty" means the panel is fairly confident the benefits outweigh harms for most patients.',
    examples: [
      'GRADE rates the evidence for prophylactic anticoagulation in hospitalized COVID patients as moderate certainty, with a strong recommendation.',
      'A weak recommendation with low certainty evidence suggests clinicians should discuss options with patients and consider individual preferences.',
    ],
    pitfalls: [
      'A strong recommendation does not always mean high-certainty evidence; the benefit-harm balance is also considered.',
      'Weak recommendations are not "inferior" -- they signal that patient preferences should play a larger role.',
      'GRADE is a framework, not an algorithm; judgment is still required at each step.',
    ],
    keyPearls: [
      'Five factors downgrade evidence: bias, inconsistency, indirectness, imprecision, publication bias.',
      'Three factors upgrade observational evidence: large effect, dose-response, confounders favoring null.',
      'Strong recommendation = most patients should receive the intervention; Weak = individualize decision.',
    ],
    references: [
      'Guyatt GH, et al. GRADE: an emerging consensus on rating quality of evidence. BMJ. 2008;336(7650):924-926.',
      'Andrews JC, et al. GRADE guidelines: Going from evidence to recommendation. J Clin Epidemiol. 2013;66(7):726-735.',
    ],
  },
  {
    id: 'ebm-guideline-development',
    name: 'Clinical Practice Guideline Development',
    category: 'clinical-guidelines',
    description: 'The process by which evidence is synthesized into actionable clinical recommendations.',
    conceptExplanation:
      'Guideline development involves: (1) defining clinical questions (PICO format), (2) systematic literature search, (3) evidence appraisal and synthesis, (4) formulating recommendations with strength ratings, and (5) external review. Conflict of interest management, patient/public involvement, and regular updating are essential for trustworthy guidelines. The IOM (now NAM) and AGREE II tool define quality standards.',
    clinicalApplication:
      'When using a guideline, check: Who produced it? Is it current? Were conflicts of interest managed? Was a systematic review performed? Were patients involved? The AGREE II instrument helps assess guideline quality across 6 domains.',
    examples: [
      'ACC/AHA guidelines for management of heart failure follow a rigorous process with systematic review, GRADE assessment, and public comment.',
      'A low-quality guideline may be produced by a specialty society with unmanaged industry conflicts and no systematic evidence review.',
    ],
    pitfalls: [
      'Industry-funded guidelines may have biased recommendations.',
      'Guidelines become outdated quickly; check the publication date and any updates.',
      'Guidelines designed for average patients may not apply to complex, multimorbid individuals.',
    ],
    keyPearls: [
      'Use AGREE II to assess guideline quality before applying recommendations.',
      'PICO format structures guideline questions: Population, Intervention, Comparison, Outcome.',
      'Trustworthy guidelines require systematic evidence review, conflict management, and patient input.',
    ],
    references: [
      'Institute of Medicine. Clinical Practice Guidelines We Can Trust. National Academies Press; 2011.',
      'Brouwers MC, et al. AGREE II: advancing guideline development, reporting and evaluation. CMAJ. 2010;182(18):E839-842.',
    ],
  },

  // ==========================================================================
  // SYSTEMATIC REVIEW
  // ==========================================================================
  {
    id: 'ebm-systematic-review',
    name: 'Systematic Review',
    category: 'systematic-review',
    description: 'A comprehensive, reproducible synthesis of all available evidence on a specific clinical question using pre-defined methods.',
    conceptExplanation:
      'A systematic review uses explicit, reproducible methods to identify, select, appraise, and synthesize all relevant studies addressing a specific question. Key steps: (1) define PICO question, (2) develop search strategy across multiple databases, (3) screen titles/abstracts and full texts, (4) extract data, (5) assess risk of bias, (6) synthesize findings (narrative or meta-analysis), (7) assess certainty of evidence.',
    clinicalApplication:
      'Systematic reviews represent the highest level of evidence when well-conducted. The Cochrane Library is the premier source. Always check the review date, included databases, risk-of-bias assessment, and whether a meta-analysis was appropriate given heterogeneity.',
    examples: [
      'A Cochrane systematic review on corticosteroids for community-acquired pneumonia identifies 17 RCTs and performs a meta-analysis showing reduced mortality.',
      'A systematic review on acupuncture for chronic pain includes 29 RCTs but finds high heterogeneity, making pooled analysis unreliable.',
    ],
    pitfalls: [
      'A systematic review is only as good as its included studies.',
      'Publication bias can distort findings even in systematic reviews.',
      'A systematic review without meta-analysis may still provide valuable narrative synthesis.',
      'Outdated systematic reviews may miss important recent evidence.',
    ],
    keyPearls: [
      'Pre-registration on PROSPERO reduces risk of selective outcome reporting.',
      'Cochrane reviews are generally considered the gold standard for systematic reviews.',
      'A systematic review can be performed without meta-analysis when studies are too heterogeneous.',
    ],
    references: [
      'Higgins JPT, et al. Cochrane Handbook for Systematic Reviews of Interventions. Version 6.3. 2022.',
    ],
  },
  {
    id: 'ebm-prisma',
    name: 'PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses)',
    category: 'systematic-review',
    description: 'A reporting guideline and flow diagram for transparent reporting of systematic reviews.',
    conceptExplanation:
      'PRISMA 2020 provides a 27-item checklist and 4-phase flow diagram for reporting systematic reviews. The flow diagram shows the number of records identified, screened, excluded (with reasons), and included. It ensures transparency and reproducibility. Key items include registration, search strategy, selection criteria, data extraction process, risk-of-bias assessment, and synthesis methods.',
    clinicalApplication:
      'When reading a systematic review, look for the PRISMA flow diagram to understand how studies were selected. A review that does not follow PRISMA may lack transparency. When conducting a review, use PRISMA to ensure complete reporting.',
    examples: [
      'A PRISMA flow diagram shows: 2,500 records identified, 200 screened full-text, 150 excluded (with reasons), 50 included in qualitative synthesis, 35 in meta-analysis.',
      'A systematic review published without a PRISMA diagram raises concerns about reporting transparency.',
    ],
    pitfalls: [
      'PRISMA is a reporting guideline, not a quality assessment tool.',
      'Adherence to PRISMA does not guarantee the review itself is high quality.',
      'PRISMA 2020 updated the original 2009 statement; ensure use of the current version.',
    ],
    keyPearls: [
      'The PRISMA flow diagram is the most recognizable element and should be in every systematic review.',
      'PRISMA 2020 added items for certainty assessment, protocol registration, and data sharing.',
      'PRISMA-P is the companion guideline for systematic review protocols.',
    ],
    references: [
      'Page MJ, et al. The PRISMA 2020 statement: an updated guideline for reporting systematic reviews. BMJ. 2021;372:n71.',
    ],
  },

  // ==========================================================================
  // DIAGNOSTIC TESTING
  // ==========================================================================
  {
    id: 'ebm-sensitivity',
    name: 'Sensitivity',
    category: 'diagnostic-testing',
    description: 'The ability of a test to correctly identify patients who have the disease (true positive rate).',
    conceptExplanation:
      'Sensitivity = True Positives / (True Positives + False Negatives). A highly sensitive test has few false negatives, making it excellent for ruling OUT disease when negative (SnNOut: Sensitive test, Negative result, rules Out). Sensitivity is an intrinsic property of the test and does not change with disease prevalence.',
    clinicalApplication:
      'Use highly sensitive tests for screening and when missing a diagnosis has serious consequences. A negative result on a highly sensitive test (e.g., sensitivity 99%) is very reassuring. D-dimer (high sensitivity) is used to rule out PE/DVT.',
    calculations: [
      'Sensitivity = TP / (TP + FN)',
      'False Negative Rate = 1 - Sensitivity',
    ],
    examples: [
      'D-dimer has ~95% sensitivity for PE: a negative D-dimer effectively rules out PE in low-risk patients.',
      'HIV ELISA has >99.5% sensitivity: a negative result virtually excludes HIV infection.',
    ],
    pitfalls: [
      'High sensitivity does not mean high positive predictive value, especially in low-prevalence settings.',
      'Sensitivity alone is insufficient; must also consider specificity and prevalence.',
      'Sensitivity can vary across disease severity (spectrum bias).',
    ],
    keyPearls: [
      'SnNOut: Sensitive test, Negative result, rules Out the diagnosis.',
      'Sensitivity is fixed by the test and independent of prevalence.',
      'Use sensitive tests when the cost of missing a diagnosis is high.',
    ],
    references: [
      'Parikh R, et al. Understanding and using sensitivity, specificity and predictive values. Indian J Ophthalmol. 2008;56(1):45-50.',
    ],
  },
  {
    id: 'ebm-specificity',
    name: 'Specificity',
    category: 'diagnostic-testing',
    description: 'The ability of a test to correctly identify patients who do not have the disease (true negative rate).',
    conceptExplanation:
      'Specificity = True Negatives / (True Negatives + False Positives). A highly specific test has few false positives, making it excellent for ruling IN disease when positive (SpPIn: Specific test, Positive result, rules In). Specificity is an intrinsic property of the test and does not change with disease prevalence.',
    clinicalApplication:
      'Use highly specific tests for confirmation when a false positive has serious consequences (e.g., unnecessary surgery, chemotherapy, stigma). Troponin I is highly specific for myocardial injury.',
    calculations: [
      'Specificity = TN / (TN + FP)',
      'False Positive Rate = 1 - Specificity',
    ],
    examples: [
      'Western blot for HIV is highly specific (~99.9%): a positive result confirms HIV infection.',
      'A biopsy showing malignant cells is nearly 100% specific for cancer.',
    ],
    pitfalls: [
      'High specificity does not guarantee high negative predictive value in high-prevalence settings.',
      'A very specific test with low sensitivity may miss many true cases.',
      'Specificity can be affected by the spectrum of non-diseased individuals tested.',
    ],
    keyPearls: [
      'SpPIn: Specific test, Positive result, rules In the diagnosis.',
      'Specificity is fixed by the test and independent of prevalence.',
      'Use specific tests when the cost of a false positive is high.',
    ],
    references: [
      'Parikh R, et al. Understanding and using sensitivity, specificity and predictive values. Indian J Ophthalmol. 2008;56(1):45-50.',
    ],
  },
  {
    id: 'ebm-likelihood-ratios',
    name: 'Likelihood Ratios',
    category: 'diagnostic-testing',
    description: 'The ratio of the probability of a test result in patients with disease to the probability in patients without disease.',
    conceptExplanation:
      'Positive Likelihood Ratio (LR+) = Sensitivity / (1 - Specificity). Negative Likelihood Ratio (LR-) = (1 - Sensitivity) / Specificity. LRs are independent of prevalence and directly modify pretest probability to yield posttest probability. LR+ > 10 or LR- < 0.1 cause large shifts in probability. LRs between 1 and 2 (or 0.5-1) are clinically useless.',
    clinicalApplication:
      'LRs are the most powerful diagnostic test metric because they incorporate both sensitivity and specificity into a single number and can be applied at any pretest probability. Use the Fagan nomogram or the formula: posttest odds = pretest odds * LR.',
    calculations: [
      'LR+ = Sensitivity / (1 - Specificity)',
      'LR- = (1 - Sensitivity) / Specificity',
      'Posttest odds = Pretest odds * LR',
      'Convert probability to odds: odds = probability / (1 - probability)',
      'Convert odds to probability: probability = odds / (1 + odds)',
    ],
    examples: [
      'A test with sensitivity 90% and specificity 95%: LR+ = 0.90/0.05 = 18, LR- = 0.10/0.95 = 0.105.',
      'For a patient with 30% pretest probability and LR+ of 18: pretest odds = 0.43, posttest odds = 7.7, posttest probability = 88%.',
    ],
    pitfalls: [
      'LRs near 1.0 provide no useful diagnostic information.',
      'LRs assume test performance is constant across disease severity (spectrum bias).',
      'Interval LRs for multilevel tests are more informative than dichotomous LRs.',
    ],
    keyPearls: [
      'LR+ > 10 is strong evidence for ruling in disease; LR- < 0.1 is strong evidence for ruling out.',
      'LRs are independent of prevalence, making them transferable across populations.',
      'Successive independent tests can be combined by multiplying their LRs.',
    ],
    references: [
      'McGee S. Simplifying likelihood ratios. J Gen Intern Med. 2002;17(8):646-649.',
      'Deeks JJ, Altman DG. Diagnostic tests 4: likelihood ratios. BMJ. 2004;329(7458):168-169.',
    ],
  },
  {
    id: 'ebm-pretest-posttest-probability',
    name: 'Pretest and Posttest Probability',
    category: 'diagnostic-testing',
    description: 'Pretest probability is the estimated likelihood of disease before testing; posttest probability is the revised likelihood after the test result.',
    conceptExplanation:
      'Pretest probability is estimated from prevalence, clinical findings, and clinical gestalt. Applying the likelihood ratio to the pretest probability yields the posttest probability. This Bayesian approach is the foundation of rational diagnostic reasoning. A test is most useful when pretest probability is intermediate (20-80%); at extremes, even good tests add little information.',
    clinicalApplication:
      'Before ordering a test, estimate the pretest probability. If pretest probability is very low, even a positive result on a moderately specific test likely represents a false positive (low PPV). If pretest probability is very high, a negative result on a moderately sensitive test may still be a false negative.',
    calculations: [
      'Pretest odds = pretest probability / (1 - pretest probability)',
      'Posttest odds = pretest odds * likelihood ratio',
      'Posttest probability = posttest odds / (1 + posttest odds)',
    ],
    examples: [
      'A 25-year-old with atypical chest pain has ~5% pretest probability for CAD. Even a positive stress test (LR+ ~3) yields only ~14% posttest probability.',
      'A 65-year-old smoker with typical angina has ~90% pretest probability. A negative stress test (LR- ~0.15) still leaves ~58% posttest probability.',
    ],
    pitfalls: [
      'Ordering a test without estimating pretest probability leads to misinterpretation of results.',
      'Tests are least useful at probability extremes (very high or very low pretest probability).',
      'Base rate neglect: ignoring prevalence when interpreting a positive test result.',
    ],
    keyPearls: [
      'Always estimate pretest probability before ordering a test.',
      'Tests have the greatest impact on clinical decision-making at intermediate pretest probabilities.',
      'The Fagan nomogram is a visual tool for converting pretest to posttest probability using LRs.',
    ],
    references: [
      'Fagan TJ. Nomogram for Bayes theorem. N Engl J Med. 1975;293(5):257.',
      'Sox HC, et al. Medical Decision Making. 2nd ed. Wiley-Blackwell; 2013.',
    ],
  },
  {
    id: 'ebm-fagan-nomogram',
    name: 'Fagan Nomogram',
    category: 'diagnostic-testing',
    description: 'A graphical tool for applying Bayes theorem to convert pretest probability to posttest probability using a likelihood ratio.',
    conceptExplanation:
      'The Fagan nomogram consists of three vertical scales: pretest probability (left), likelihood ratio (center), and posttest probability (right). Drawing a straight line from the pretest probability through the likelihood ratio gives the posttest probability on the right scale. It provides a quick visual method for Bayesian reasoning at the bedside without calculations.',
    clinicalApplication:
      'Use the nomogram in clinical teaching and at the bedside to demonstrate how test results modify disease probability. It illustrates why the same positive test result means different things for different patients depending on their pretest probability.',
    examples: [
      'Pretest probability 50%, LR+ of 10: draw a line from 50% through 10 to read ~91% posttest probability.',
      'Pretest probability 10%, LR+ of 5: posttest probability ~36%. Same test, different clinical impact.',
    ],
    pitfalls: [
      'The nomogram assumes test independence; serial tests that assess similar pathology may not be independent.',
      'Precision is limited by the scale of the nomogram; use calculation for exact values.',
    ],
    keyPearls: [
      'The nomogram visually demonstrates that pretest probability is as important as the test itself.',
      'Two tests can be applied sequentially: the posttest probability of the first becomes the pretest for the second.',
      'The Fagan nomogram makes Bayesian reasoning intuitive and accessible.',
    ],
    references: [
      'Fagan TJ. Nomogram for Bayes theorem. N Engl J Med. 1975;293(5):257.',
    ],
  },
  {
    id: 'ebm-ppv-npv',
    name: 'Positive and Negative Predictive Values (PPV/NPV)',
    category: 'diagnostic-testing',
    description: 'PPV is the probability that a positive test result is a true positive; NPV is the probability that a negative result is a true negative.',
    conceptExplanation:
      'PPV = TP / (TP + FP); NPV = TN / (TN + FN). Unlike sensitivity and specificity, predictive values depend heavily on disease prevalence. In low-prevalence settings, PPV is low (most positives are false positives) even with excellent sensitivity and specificity. In high-prevalence settings, NPV decreases (more false negatives). This is why population screening for rare diseases generates many false positives.',
    clinicalApplication:
      'Predictive values answer the clinician\'s practical question: "Given this test result, what is the probability my patient has the disease?" Always consider prevalence when interpreting PPV and NPV. A positive mammogram in a 40-year-old has much lower PPV than in a 70-year-old with a palpable mass.',
    calculations: [
      'PPV = TP / (TP + FP)',
      'NPV = TN / (TN + FN)',
      'PPV = (Sensitivity * Prevalence) / [(Sensitivity * Prevalence) + (1-Specificity) * (1-Prevalence)]',
    ],
    examples: [
      'A test with 95% sensitivity and 95% specificity in a population with 1% prevalence: PPV = only 16% (most positives are false).',
      'The same test in a population with 50% prevalence: PPV = 95%.',
    ],
    pitfalls: [
      'PPV and NPV cannot be directly transferred between populations with different prevalences.',
      'A test with excellent sensitivity and specificity can still have poor PPV in low-prevalence settings.',
      'Confusing predictive values with sensitivity/specificity is a common error.',
    ],
    keyPearls: [
      'Prevalence is the key driver of predictive values.',
      'Low prevalence + positive test = likely false positive (low PPV).',
      'Likelihood ratios are preferred over predictive values because they are prevalence-independent.',
    ],
    references: [
      'Altman DG, Bland JM. Diagnostic tests 2: Predictive values. BMJ. 1994;309(6947):102.',
    ],
  },

  // ==========================================================================
  // TREATMENT ANALYSIS
  // ==========================================================================
  {
    id: 'ebm-intention-to-treat',
    name: 'Intention-to-Treat (ITT) Analysis',
    category: 'treatment-analysis',
    description: 'Analyzing participants according to their originally assigned group, regardless of adherence, crossover, or withdrawal.',
    conceptExplanation:
      'In ITT analysis, all randomized participants are included in the analysis in their originally assigned groups, even if they did not receive the intervention, switched groups, or dropped out. This preserves the balance created by randomization and provides a pragmatic estimate of treatment effect in real-world conditions. It tends to be conservative, potentially underestimating efficacy.',
    clinicalApplication:
      'ITT is the gold standard for analyzing RCTs and should be the primary analysis. It answers the practical question: "What happens when we offer this treatment?" rather than "What happens when patients perfectly adhere?" Modified ITT (mITT) excludes patients who never received any treatment but should be clearly defined.',
    examples: [
      'In a surgery vs medication trial, 15% of patients randomized to surgery refused. ITT still analyzes them in the surgery group, preserving randomization.',
      'A drug trial where 20% of participants discontinue treatment: ITT includes all patients, giving a real-world effectiveness estimate.',
    ],
    pitfalls: [
      'ITT can underestimate efficacy in explanatory trials with high non-adherence.',
      'Modified ITT definitions vary across studies and can introduce bias.',
      'Handling missing data in ITT analysis requires careful imputation methods (e.g., multiple imputation, LOCF).',
    ],
    keyPearls: [
      'ITT preserves randomization and provides a real-world effectiveness estimate.',
      'Always look for ITT as the primary analysis in RCTs.',
      'ITT answers: "What is the effect of assigning treatment?" Per-protocol answers: "What is the effect of receiving treatment?"',
    ],
    references: [
      'Gupta SK. Intention-to-treat concept: A review. Perspect Clin Res. 2011;2(3):109-112.',
    ],
  },
  {
    id: 'ebm-per-protocol',
    name: 'Per-Protocol Analysis',
    category: 'treatment-analysis',
    description: 'Analyzing only participants who completed the study as planned, adhering to the assigned intervention.',
    conceptExplanation:
      'Per-protocol (PP) analysis includes only participants who adhered to the treatment protocol, received the correct intervention, and completed follow-up. It excludes dropouts, crossovers, and non-adherers. PP analysis estimates biological efficacy (what happens with perfect adherence) but breaks randomization and introduces selection bias.',
    clinicalApplication:
      'PP analysis is a useful secondary analysis complementing ITT, especially in non-inferiority and equivalence trials where ITT is anti-conservative (biases toward showing no difference). When ITT and PP analyses agree, the result is robust.',
    examples: [
      'In a non-inferiority trial, both ITT and PP analyses should show the new treatment is non-inferior for a convincing result.',
      'A PP analysis showing a large treatment effect that disappears on ITT analysis suggests the effect depends on high adherence.',
    ],
    pitfalls: [
      'PP analysis breaks randomization and can introduce confounding.',
      'Reasons for non-adherence may be related to the treatment itself (e.g., side effects), biasing PP results.',
      'In superiority trials, PP analysis can falsely inflate treatment effects.',
    ],
    keyPearls: [
      'For superiority trials: ITT is the primary analysis (conservative).',
      'For non-inferiority trials: both ITT and PP should be reported (ITT is anti-conservative in this setting).',
      'Concordance between ITT and PP strengthens confidence in the results.',
    ],
    references: [
      'Porta N, et al. Analysis of clinical trials by treatment actually received. Int J Epidemiol. 2007;36(5):1098-1106.',
    ],
  },
  {
    id: 'ebm-kaplan-meier',
    name: 'Kaplan-Meier Survival Analysis',
    category: 'treatment-analysis',
    description: 'A non-parametric method for estimating time-to-event probabilities, accounting for censored data.',
    conceptExplanation:
      'The Kaplan-Meier (KM) method estimates the probability of surviving (or remaining event-free) beyond each time point. It handles censored observations (patients lost to follow-up or event-free at study end). The KM curve is a step function that decreases at each event time. The log-rank test compares KM curves between groups. Median survival is the time at which 50% of the cohort has experienced the event.',
    clinicalApplication:
      'KM curves are the standard for presenting time-to-event data in clinical trials (overall survival, progression-free survival, time to relapse). When reading KM curves, check: number at risk at each time point, censoring pattern, median survival, and whether curves cross (which violates proportional hazards assumptions).',
    calculations: [
      'S(t) = product of [(n_i - d_i) / n_i] for all time points up to t',
      'Where n_i = number at risk, d_i = number of events at time i',
      'Log-rank test compares observed vs expected events in each group.',
    ],
    examples: [
      'A KM curve shows median overall survival of 24 months with immunotherapy vs 12 months with chemotherapy, with curves separating after 3 months.',
      'The SPRINT trial KM curves for primary composite outcome showed early and sustained separation favoring intensive BP control.',
    ],
    pitfalls: [
      'Crossing KM curves suggest the proportional hazards assumption is violated.',
      'Heavy censoring near the tail makes late survival estimates unreliable.',
      'The number at risk should always be displayed below the KM curve.',
      'Median survival requires at least 50% of the group to have experienced the event.',
    ],
    keyPearls: [
      'Always look at the number at risk below KM curves; sparse numbers at late time points mean unreliable estimates.',
      'Crossing curves violate the proportional hazards assumption, making the log-rank test and hazard ratios problematic.',
      'KM curves provide more information than summary statistics like median survival alone.',
    ],
    references: [
      'Kaplan EL, Meier P. Nonparametric estimation from incomplete observations. J Am Stat Assoc. 1958;53(282):457-481.',
      'Rich JT, et al. A practical guide to understanding Kaplan-Meier curves. Otolaryngol Head Neck Surg. 2010;143(3):331-336.',
    ],
  },
  {
    id: 'ebm-hazard-ratio',
    name: 'Hazard Ratio',
    category: 'treatment-analysis',
    description: 'The ratio of the hazard rates between two groups, representing the instantaneous risk of the event at any time point.',
    conceptExplanation:
      'The hazard ratio (HR) is derived from Cox proportional hazards regression. HR = hazard in treatment group / hazard in control group. HR < 1 indicates lower hazard (protective); HR > 1 indicates higher hazard; HR = 1 indicates no difference. The proportional hazards assumption requires that the HR is constant over time (curves should not cross on the KM plot).',
    clinicalApplication:
      'HR is the standard effect measure for time-to-event outcomes in clinical trials. An HR of 0.70 means the treatment group has 30% lower instantaneous risk of the event at any given time. Always check the proportional hazards assumption and report the HR with its 95% confidence interval.',
    calculations: [
      'HR = hazard in treatment / hazard in control',
      'Derived from Cox proportional hazards model: h(t) = h0(t) * exp(beta * X)',
      'Approximate conversion: HR ~= (1 - median survival ratio) for specific scenarios',
    ],
    examples: [
      'An oncology trial reports HR for death = 0.65 (95% CI: 0.50-0.85, p = 0.001), meaning 35% lower risk of death with the new treatment.',
      'HR for cardiovascular events = 1.25 (95% CI: 0.98-1.60): increased risk but CI crosses 1, not statistically significant.',
    ],
    pitfalls: [
      'HR assumes proportional hazards; if curves cross, the HR is misleading as a single summary.',
      'HR is a relative measure and does not convey absolute benefit without baseline event rates.',
      'HR and odds ratio are different measures and should not be used interchangeably.',
    ],
    keyPearls: [
      'HR < 1 favors the treatment group; HR > 1 favors the control group (for harmful outcomes).',
      'If KM curves cross, the proportional hazards assumption is violated and restricted mean survival time (RMST) may be more appropriate.',
      'Cox regression allows adjustment for covariates while estimating the HR.',
    ],
    references: [
      'Cox DR. Regression models and life-tables. J R Stat Soc Series B. 1972;34(2):187-220.',
    ],
  },

  // ==========================================================================
  // RESEARCH METHODOLOGY
  // ==========================================================================
  {
    id: 'ebm-blinding',
    name: 'Blinding (Masking)',
    category: 'research-methodology',
    description: 'Concealing group assignment from participants, investigators, or outcome assessors to reduce bias.',
    conceptExplanation:
      'Single-blind: participants unaware of assignment. Double-blind: participants and investigators unaware. Triple-blind: participants, investigators, and outcome assessors/data analysts unaware. Blinding prevents placebo effect, performance bias, and detection/assessment bias. Blinding is not always possible (surgical vs medical interventions) but should be used wherever feasible.',
    clinicalApplication:
      'When appraising a trial, determine who was blinded and assess whether blinding was maintained. Unblinded studies with subjective outcomes (pain, quality of life) are at particularly high risk of bias. Use objective outcomes (death, lab values) when blinding is impossible.',
    examples: [
      'A drug vs placebo trial uses identical-appearing pills (double-blind).',
      'A surgery vs medical therapy trial cannot blind patients but can blind outcome assessors (single-blind at assessor level).',
    ],
    pitfalls: [
      'Side effects can unblind participants (e.g., dry mouth revealing active drug assignment).',
      'Unblinding inflates treatment effects, especially for subjective outcomes.',
      'Terms like "double-blind" are used inconsistently; always check who exactly was blinded.',
    ],
    keyPearls: [
      'Blinding is most critical for subjective outcomes; less important for hard outcomes like mortality.',
      'Use the terms single-blind, double-blind, and triple-blind with specification of who is blinded.',
      'When blinding is impossible, blinded outcome assessment (PROBE design) is the best alternative.',
    ],
    references: [
      'Karanicolas PJ, et al. Blinding: Who, what, when, why, how? Can J Surg. 2010;53(5):345-348.',
    ],
  },
  {
    id: 'ebm-randomization-methods',
    name: 'Randomization Methods',
    category: 'research-methodology',
    description: 'Techniques for randomly allocating participants to study groups to minimize selection bias and confounding.',
    conceptExplanation:
      'Simple randomization (coin flip) ensures unpredictability but can create imbalanced groups in small trials. Block randomization creates balanced groups at regular intervals. Stratified randomization ensures balance on key prognostic factors. Adaptive randomization (minimization) dynamically balances multiple factors. Cluster randomization assigns groups (hospitals, clinics) rather than individuals.',
    clinicalApplication:
      'When appraising a trial, check the randomization method and allocation concealment. Computer-generated random sequences with central allocation are the gold standard. Opaque sealed envelopes are acceptable but inferior. Alternation or date-based allocation is NOT true randomization.',
    examples: [
      'A multicenter trial uses stratified block randomization by site and disease severity with central computer allocation.',
      'A cluster-randomized trial assigns entire hospitals to intervention vs control for an infection prevention protocol.',
    ],
    pitfalls: [
      'Simple randomization in small trials (<100) can create unbalanced groups by chance.',
      'Block randomization with small, fixed block sizes can be predicted, compromising concealment.',
      'Allocation concealment is separate from randomization method: both must be adequate.',
    ],
    keyPearls: [
      'Randomization removes confounding from both known AND unknown variables.',
      'Allocation concealment prevents foreknowledge of upcoming assignments.',
      'Block randomization ensures balanced groups but block size should vary to prevent prediction.',
    ],
    references: [
      'Suresh K. An overview of randomization techniques: An unbiased assessment of outcome in clinical research. J Hum Reprod Sci. 2011;4(1):8-11.',
    ],
  },
  {
    id: 'ebm-pico-framework',
    name: 'PICO Framework',
    category: 'research-methodology',
    description: 'A structured format for formulating clinical questions: Population, Intervention, Comparison, Outcome.',
    conceptExplanation:
      'PICO breaks a clinical question into four components: P (Patient/Population/Problem), I (Intervention), C (Comparison/Control), O (Outcome). This structure guides literature searches, study design, and evidence appraisal. Variants include PICOT (adding Time) and PICOS (adding Study design). A well-formed PICO question is the foundation of evidence-based practice.',
    clinicalApplication:
      'Before searching the literature, formulate the clinical question in PICO format. This ensures a focused, searchable question and helps identify the appropriate study design. PICO terms directly map to search strategy components.',
    examples: [
      'In adults with type 2 diabetes (P), does metformin (I) compared to sulfonylurea (C) reduce cardiovascular mortality (O)?',
      'In hospitalized COVID patients (P), does dexamethasone (I) compared to standard care (C) reduce 28-day mortality (O)?',
    ],
    pitfalls: [
      'Overly broad PICO yields unmanageable search results.',
      'Overly narrow PICO may miss relevant evidence.',
      'Not all clinical questions fit neatly into PICO (e.g., qualitative research questions).',
    ],
    keyPearls: [
      'PICO is the foundation of formulating an answerable clinical question.',
      'Each PICO element maps to search terms for a systematic literature search.',
      'Background questions (What is X?) do not require PICO; foreground questions (Is X better than Y?) do.',
    ],
    references: [
      'Richardson WS, et al. The well-built clinical question: a key to evidence-based decisions. ACP J Club. 1995;123(3):A12-A13.',
    ],
  },
  {
    id: 'ebm-washout-period',
    name: 'Washout Period',
    category: 'research-methodology',
    description: 'A period during which a previous treatment is discontinued to eliminate its residual effects before starting a new intervention.',
    conceptExplanation:
      'In crossover trials, a washout period between treatment phases ensures that the effect of the first treatment does not carry over into the second phase. The washout duration depends on the pharmacokinetic half-life of the drug (typically 5-7 half-lives for complete elimination). Inadequate washout leads to carryover effects that confound results.',
    clinicalApplication:
      'Washout periods are critical in crossover trial design. When reviewing such trials, check whether the washout was long enough given the drug\'s half-life and whether carryover was tested statistically.',
    examples: [
      'A crossover trial comparing two antihypertensives uses a 2-week washout between phases to allow BP to return to baseline.',
      'A trial studying analgesics with short half-lives may need only 24-48 hours of washout.',
    ],
    pitfalls: [
      'Insufficient washout period leads to carryover effects that bias the second treatment period.',
      'Some drug effects (e.g., disease-modifying agents) may persist beyond pharmacokinetic elimination.',
      'Patients may deteriorate during washout, raising ethical concerns.',
    ],
    keyPearls: [
      'Washout should be at least 5-7 half-lives of the first treatment.',
      'Carryover effects can be tested by comparing outcomes in the first vs second period.',
      'Washout periods are primarily relevant to crossover trial designs.',
    ],
    references: [
      'Wellek S, Blettner M. On the proper use of the crossover design in clinical trials. Dtsch Arztebl Int. 2012;109(15):276-281.',
    ],
  },
  {
    id: 'ebm-surrogate-endpoints',
    name: 'Surrogate Endpoints',
    category: 'research-methodology',
    description: 'Biomarkers or intermediate outcomes used in place of clinically meaningful endpoints to shorten study duration or reduce sample size.',
    conceptExplanation:
      'A surrogate endpoint is a measurable biomarker (e.g., HbA1c, tumor shrinkage, viral load) that is expected to predict a clinical outcome (e.g., diabetic complications, survival, AIDS progression). Using surrogates allows faster and smaller trials. However, a surrogate must be validated: changes in the surrogate must reliably predict changes in the clinical outcome. The Prentice criteria define formal surrogate validation.',
    clinicalApplication:
      'Many drug approvals rely on surrogate endpoints (accelerated approval pathway). Clinicians should understand whether the surrogate has been validated for the specific condition and treatment. An improvement in a surrogate does not guarantee clinical benefit.',
    examples: [
      'HbA1c is an accepted surrogate for diabetic complications, but some drugs that lower HbA1c (rosiglitazone) increased cardiovascular events.',
      'Viral load suppression is a validated surrogate for clinical outcomes in HIV treatment.',
      'Tumor shrinkage (response rate) is a surrogate for overall survival in oncology but does not always correlate.',
    ],
    pitfalls: [
      'Surrogates can be misleading: improving the biomarker may not improve clinical outcomes.',
      'The rosiglitazone case demonstrates that surrogate-based approval can miss serious harms.',
      'Regulatory accelerated approvals based on surrogates require post-marketing confirmatory trials.',
    ],
    keyPearls: [
      'A valid surrogate must lie on the causal pathway between treatment and clinical outcome.',
      'Not all biomarkers are valid surrogates; formal validation requires showing the treatment effect on the surrogate predicts the effect on the clinical outcome.',
      'Always prioritize studies with patient-centered clinical endpoints over surrogate endpoints.',
    ],
    references: [
      'Fleming TR, Powers JH. Biomarkers and surrogate endpoints in clinical trials. Stat Med. 2012;31(25):2973-2984.',
      'Prentice RL. Surrogate endpoints in clinical trials: definition and operational criteria. Stat Med. 1989;8(4):431-440.',
    ],
  },
  {
    id: 'ebm-crossover-trial',
    name: 'Crossover Trial',
    category: 'research-methodology',
    description: 'A trial where each participant receives both the intervention and control in sequential periods, serving as their own control.',
    conceptExplanation:
      'In a crossover design, participants are randomized to a sequence (AB or BA) of two treatments with a washout period between them. Each participant serves as their own control, eliminating between-subject variability and increasing statistical power. This design requires fewer participants but is only suitable for chronic, stable conditions and treatments with reversible effects.',
    clinicalApplication:
      'Crossover designs are ideal for symptomatic treatments (analgesics, antihypertensives, bronchodilators) in stable chronic conditions. They are unsuitable for curative treatments, diseases that change over time, or treatments with long-lasting effects.',
    examples: [
      'A crossover trial comparing two inhaled bronchodilators in stable COPD patients, with a 1-week washout between treatments.',
      'An n-of-1 trial (single-patient crossover) to determine whether a specific patient responds to a treatment.',
    ],
    pitfalls: [
      'Carryover effects invalidate the design if the washout is inadequate.',
      'Period effects (disease changes over time) can confound results.',
      'Higher dropout rates due to longer study duration.',
      'Not appropriate for conditions that can be cured or that change over time.',
    ],
    keyPearls: [
      'Each participant serves as their own control, dramatically reducing required sample size.',
      'Only appropriate for stable, chronic conditions with reversible treatments.',
      'N-of-1 trials are the ultimate crossover design for individual patient decision-making.',
    ],
    references: [
      'Sibbald B, Roberts C. Understanding controlled trials: Crossover trials. BMJ. 1998;316(7146):1719-1720.',
    ],
  },
  {
    id: 'ebm-lead-time-bias',
    name: 'Lead-Time Bias',
    category: 'critical-appraisal',
    description: 'Apparent improvement in survival due to earlier detection without actual prolongation of life.',
    conceptExplanation:
      'Lead-time bias occurs when screening detects a disease earlier in its course, making it appear that patients survive longer after diagnosis even if the disease course is unchanged. The "lead time" is the interval between screen detection and when the disease would have presented clinically. Survival from diagnosis appears longer, but survival from disease onset is unchanged.',
    clinicalApplication:
      'Lead-time bias is critical when evaluating cancer screening programs. Improved 5-year survival after screening does not prove that screening saves lives. Only reduction in disease-specific mortality in a randomized screening trial proves true benefit.',
    examples: [
      'A cancer normally detected at age 65 (death at 70) is now screen-detected at age 60. Five-year survival improves from 0% to 100%, but the patient still dies at 70.',
      'Prostate cancer screening with PSA leads to earlier detection but has not clearly reduced overall mortality, partly due to lead-time bias.',
    ],
    pitfalls: [
      'Using 5-year survival to evaluate screening effectiveness is misleading due to lead-time bias.',
      'Lead-time bias makes every screening program look beneficial even if it has no effect on mortality.',
      'Only disease-specific or overall mortality in randomized trials can overcome lead-time bias.',
    ],
    keyPearls: [
      'Lead-time bias artificially inflates survival statistics without actually extending life.',
      'Mortality (not survival) is the correct outcome for evaluating screening programs.',
      'Length-time bias is a related concept: screening preferentially detects slower-growing tumors.',
    ],
    references: [
      'Duffy SW, et al. Overdiagnosis and overtreatment of breast cancer. Breast Cancer Res. 2010;12(Suppl 4):S6.',
    ],
  },
  {
    id: 'ebm-publication-bias',
    name: 'Publication Bias',
    category: 'critical-appraisal',
    description: 'The tendency for studies with positive or significant results to be published more often than those with negative or null results.',
    conceptExplanation:
      'Publication bias distorts the available evidence because studies showing positive results are more likely to be submitted, accepted, and published than negative studies. This leads to overestimation of treatment effects in systematic reviews and meta-analyses. Detection methods include funnel plot analysis, Egger test, and Begg test. Trial registries (ClinicalTrials.gov) help by documenting all initiated studies.',
    clinicalApplication:
      'When reading a meta-analysis, always look for assessment of publication bias (funnel plot, Egger test). An asymmetric funnel plot suggests missing small negative studies. Prospective trial registration reduces publication bias by making initiated studies publicly visible.',
    examples: [
      'A meta-analysis of antidepressants showed an asymmetric funnel plot, suggesting unpublished negative trials. When FDA data including unpublished trials were analyzed, the effect was much smaller.',
      'A funnel plot showing all small studies on the positive side of the mean suggests publication bias.',
    ],
    pitfalls: [
      'Funnel plot asymmetry can result from other causes besides publication bias (e.g., genuine heterogeneity).',
      'Publication bias is difficult to definitively prove.',
      'Grey literature searching (conference abstracts, dissertations) only partially mitigates the problem.',
    ],
    keyPearls: [
      'Prospective trial registration on ClinicalTrials.gov is the strongest defense against publication bias.',
      'Funnel plot + Egger test is the standard approach for detecting publication bias in meta-analyses.',
      'Selective outcome reporting (reporting only significant outcomes) is a related form of bias.',
    ],
    references: [
      'Dickersin K. The existence of publication bias and risk factors for its occurrence. JAMA. 1990;263(10):1385-1389.',
      'Turner EH, et al. Selective publication of antidepressant trials. N Engl J Med. 2008;358(3):252-260.',
    ],
  },
] as const;

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Search entries by query string across id, name, description, and conceptExplanation. */
export const searchEBMEntries = (query: string): EBMEntry[] => {
  const q = query.toLowerCase();
  return EBM_DATABASE.filter(
    (e) =>
      e.id.toLowerCase().includes(q) ||
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.conceptExplanation.toLowerCase().includes(q)
  ) as unknown as EBMEntry[];
};

/** Filter entries by one or more categories. */
export const filterByCategory = (categories: EBMCategory[]): EBMEntry[] =>
  EBM_DATABASE.filter((e) =>
    categories.includes(e.category)
  ) as unknown as EBMEntry[];

/** Get a single entry by its id. Returns undefined if not found. */
export const getEntryById = (id: string): EBMEntry | undefined =>
  EBM_DATABASE.find((e) => e.id === id) as EBMEntry | undefined;
