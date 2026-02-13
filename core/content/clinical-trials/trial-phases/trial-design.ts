import { ClinicalTrialsEducationalContent } from '../types';

export const trialDesignContent: ClinicalTrialsEducationalContent = {
  id: 'trial-design',
  type: 'topic',
  name: 'Clinical Trial Design',
  levels: {
    1: {
      level: 1,
      summary: 'Clinical trial design is the blueprint for conducting fair and reliable medical research studies to test new treatments.',
      explanation: '# Clinical Trial Design\n\nClinical trial design is like planning a science fair project, but for testing new medicines and treatments. Just as you need a clear plan to make sure your science experiment is fair, scientists need a carefully designed plan to test if new medical treatments work safely.\n\n## What Is Trial Design?\n\nTrial design means planning every part of a medical study before it starts. Scientists decide:\n- Who can participate in the study\n- What treatments will be tested\n- How participants will be assigned to different groups\n- What results will be measured\n- How long the study will last\n\n## Why Planning Matters\n\nGood planning ensures:\n- The results are trustworthy and reliable\n- Participants stay safe throughout the study\n- Resources (time, money, people) are used wisely\n- The study follows important rules and guidelines\n\n## Basic Parts of a Trial\n\n**Treatment Groups**: Different groups of participants receiving different treatments\n\n**Control Group**: Participants who do not receive the experimental treatment, for comparison\n\n**Random Assignment**: Using chance (like flipping a coin) to decide which treatment each person gets\n\n**Blinding**: Keeping participants and/or doctors from knowing who got which treatment\n\n**Endpoints**: The specific outcomes being measured (like "Did symptoms improve?")\n\n## Key Principles\n\n1. **Scientific Validity**: The design must be able to answer the research question\n2. **Ethical Conduct**: Participant rights and safety come first\n3. **Feasibility**: The study must be practical to conduct\n4. **Following Rules**: Must meet all ethical and legal guidelines',
      keyTerms: [
        {
          term: 'Protocol',
          definition: 'The written plan for a clinical trial that describes everything that will happen in the study',
          pronunciation: 'PROH-toh-kawl'
        },
        {
          term: 'Control Group',
          definition: 'Participants in a study who do not receive the experimental treatment, so their results can be compared with those who do'
        },
        {
          term: 'Endpoint',
          definition: 'The specific result or outcome being measured in a clinical trial to determine if the treatment works'
        },
        {
          term: 'Randomization',
          definition: 'A method used to assign participants to different treatment groups by chance, like flipping a coin, to prevent bias',
          pronunciation: 'ran-dum-ih-ZAY-shun'
        }
      ],
      analogies: [
        'Clinical trial design is like creating the rules for a fair competition - everyone needs to agree on the rules beforehand so the results are meaningful',
        'A control group is like having a "no treatment" comparison group in a plant experiment - some plants get fertilizer, some do not, so you can see if the fertilizer actually made a difference',
        'Random assignment is like shuffling a deck of cards before dealing - it ensures no one can predict or control who gets which cards',
        'Blinding is like a taste test where you do not know which soda you are drinking - this prevents your opinions from changing your judgment'
      ],
      examples: [
        'Testing a new headache medicine: one group gets the new pill, another group gets a fake pill (placebo), and researchers compare which group has fewer headaches',
        'A cancer drug trial where participants are randomly assigned to receive either the standard treatment or a new experimental treatment',
        'A vaccine study where neither the participants nor the doctors know who receives the real vaccine and who receives a placebo shot'
      ],
      patientCounselingPoints: [
        'Clinical trials follow carefully designed plans to protect participant safety',
        'Not all participants receive the active treatment - some may receive placebo for comparison',
        'You will always be told before joining what to expect from the study',
        'You can leave a clinical trial at any time, for any reason'
      ]
    },
    2: {
      level: 2,
      summary: 'Clinical trial design encompasses structured methodologies including parallel group, crossover, and factorial designs to establish treatment efficacy safely.',
      explanation: '# Clinical Trial Design\n\nClinical trial design provides the framework for conducting rigorous medical research. Well-designed trials ensure that results are scientifically valid, ethically sound, and capable of answering the research question.\n\n## Common Trial Designs\n\n### Parallel Group Design\n\nThe most frequently used clinical trial design:\n\n- Participants are randomly assigned to one of two or more treatment groups\n- Each group receives a different treatment for the study duration\n- Outcomes are compared between groups at the end\n\nExample: 200 patients with diabetes are randomly assigned to receive either Drug A or a placebo\n\n### Crossover Design\n\nEach participant receives multiple treatments in sequence:\n\n- Period 1: Group 1 receives Treatment A, Group 2 receives Treatment B\n- Washout period: No treatment to allow effects to wear off\n- Period 2: Groups switch treatments\n\n**Advantages:**\n- Each participant serves as their own control\n- Requires fewer total participants\n- Reduces variability between participants\n\n**Limitations:**\n- Only works for chronic, stable conditions\n- Requires significant time commitment\n- Carryover effects may confound results\n\n### Factorial Design\n\nTests two or more interventions simultaneously:\n\nExample: Testing diet and exercise for heart disease prevention\n\n|                | No Exercise | Exercise |\n|----------------|-------------|----------|\n| Normal Diet    | Group A     | Group B  |\n| Special Diet   | Group C     | Group D  |\n\n**Advantages:**\n- Efficiently tests multiple factors\n- Can detect interactions between treatments\n\n**Disadvantages:**\n- Complex to analyze and interpret\n- Requires larger sample sizes\n\n## Control Groups\n\nControl groups provide a baseline for comparison. Without a control, it is impossible to know if observed effects are due to the treatment or other factors.\n\n### Types of Control\n\n**Placebo Control:** Inactive treatment that looks identical to active treatment\n\n**Active Control:** Comparison against an established effective treatment\n\n**Historical Control:** Using data from previous studies or medical records\n\n## Blinding Methods\n\n**Single-blind:** Participants do not know which treatment they receive\n\n**Double-blind:** Neither participants nor researchers know who receives which treatment\n\nBlinding prevents bias from influencing study results.',
      keyTerms: [
        {
          term: 'Washout Period',
          definition: 'A period during a clinical trial when participants receive no treatment to allow effects from previous treatments to wear off before starting a new treatment'
        },
        {
          term: 'Carryover Effect',
          definition: 'The lingering effect of a treatment from one study period that continues into the next period, potentially confounding results in crossover trials'
        },
        {
          term: 'Placebo',
          definition: 'An inactive substance or procedure designed to resemble the active treatment, used in clinical trials as a control to compare against the experimental treatment'
        },
        {
          term: 'Double-blind',
          definition: 'A study design in which neither the participants nor the researchers know who is receiving the experimental treatment and who is receiving the control'
        }
      ],
      analogies: [
        'A crossover design is like two people trying each other\'s favorite foods - each person tries both foods, so you get a better comparison with fewer people',
        'Factorial design is like testing both fertilizer and sunlight on plant growth simultaneously - you can see if each factor works alone and if they work better together',
        'Double-blinding is like masked judges in a competition - neither the performers nor the judges know which performer belongs to which school until after scores are given'
      ],
      examples: [
        'A blood pressure study testing Drug A versus placebo with 100 participants in each group (parallel design)',
        'An asthma study where participants use an inhaler for 6 weeks, then after a 2-week washout, switch to a different inhaler for 6 weeks (crossover design)',
        'A heart disease prevention study testing both low-fat diet and exercise programs in four groups (factorial design)'
      ],
      patientCounselingPoints: [
        'Understanding the study design helps you know what to expect during participation',
        'In crossover studies, you will receive multiple treatments at different times',
        'Placebo-controlled trials mean you might receive inactive treatment for comparison purposes',
        'Your doctor can explain why a particular study design was chosen for your condition'
      ]
    },
    3: {
      level: 3,
      summary: 'Clinical trial design incorporates sophisticated methodologies including randomization, blinding, control groups, and statistical considerations to establish treatment efficacy and safety.',
      explanation: '# Clinical Trial Design\n\nClinical trial design is the systematic planning of studies to evaluate medical interventions. Proper design ensures that conclusions about treatment efficacy and safety are scientifically valid and clinically meaningful.\n\n## Phase I-IV Trial Designs\n\n### Phase I Trials\n- Primary goal: Assess safety and tolerability\n- Small sample size (20-100 participants)\n- Often conducted in healthy volunteers\n- Determines dose range and identifies adverse effects\n\n### Phase II Trials\n- Primary goal: Assess efficacy and further evaluate safety\n- Moderate sample size (100-300 participants)\n- Conducted in patients with the target condition\n- Provides preliminary evidence of effectiveness\n\n### Phase III Trials\n- Primary goal: Confirm efficacy and monitor adverse reactions\n- Large sample size (300-3,000+ participants)\n- Randomized controlled design\n- Provides definitive evidence for regulatory approval\n\n### Phase IV Trials\n- Post-marketing surveillance\n- Identifies rare or long-term adverse effects\n- Conducted after regulatory approval\n- Large population studies\n\n## Randomized Controlled Trials (RCTs)\n\nRandomization is the cornerstone of clinical trial methodology:\n\n**Simple Randomization:** Each participant has equal chance of assignment to any group\n\n**Stratified Randomization:** Balance specific prognostic factors across groups\n\n**Block Randomization:** Ensures approximately equal group sizes throughout enrollment\n\n## Blinding Methods\n\n**Open-label:** No blinding - all parties know treatment assignments\n\n**Single-blind:** Participants are blinded to treatment assignment\n\n**Double-blind:** Both participants and investigators are blinded\n\n**Triple-blind:** Participants, investigators, and data analysts are blinded\n\n## Trial Endpoints\n\n### Primary Endpoint\n- The main outcome measure that drives sample size calculation\n- Must be clinically meaningful and scientifically justified\n- Typically one primary endpoint per trial\n\n### Secondary Endpoints\n- Additional outcome measures\n- Provide supporting evidence\n- Exploratory in nature\n\n### Surrogate Endpoints\n- Substitute measures for direct clinical benefit\n- Examples: blood pressure, tumor size, laboratory values\n- Must be validated as predictors of clinical outcomes\n\n## Sample Size Calculation\n\nSample size depends on:\n\n1. **Effect size:** The clinically meaningful difference to detect\n2. **Variability:** Standard deviation of the outcome measure\n3. **Alpha (Type I error):** Typically 0.05\n4. **Power (1 - Type II error):** Typically 80-90%\n5. **Attrition rate:** Expected dropout percentage\n\nLarger effect sizes allow smaller sample sizes. Greater variability requires larger sample sizes.',
      keyTerms: [
        {
          term: 'Randomization',
          definition: 'The process of assigning clinical trial participants to treatment groups using a random process, minimizing selection bias and ensuring groups are comparable'
        },
        {
          term: 'Stratified Randomization',
          definition: 'Randomization within defined strata (subgroups) to ensure balance of important prognostic factors across treatment groups'
        },
        {
          term: 'Primary Endpoint',
          definition: 'The most important outcome measure in a clinical trial, used to determine the success or failure of the intervention and drive sample size calculations'
        },
        {
          term: 'Surrogate Endpoint',
          definition: 'A biomarker or clinical sign intended to substitute for a direct measure of clinical benefit, used when direct clinical outcomes would require prolonged follow-up'
        },
        {
          term: 'Statistical Power',
          definition: 'The probability that a study will correctly detect a true effect of a specified size, typically set at 80-90% in clinical trials'
        },
        {
          term: 'Type I Error',
          definition: 'The error of concluding a treatment is effective when it is not (false positive), with probability represented by alpha, typically set at 0.05'
        },
        {
          term: 'Type II Error',
          definition: 'The error of concluding a treatment is not effective when it actually is (false negative), with probability represented by beta'
        }
      ],
      analogies: [
        'A Phase I trial is like dipping your toe in a pool to check the temperature before swimming - testing safety before broader use',
        'Randomization is like shuffling cards before dealing - it ensures no predictable pattern in who receives which treatment',
        'A surrogate endpoint is like using a thermometer to measure fever instead of asking how sick someone feels - an objective measure that predicts the actual outcome of interest'
      ],
      examples: [
        'A Phase I oncology trial testing escalating doses of a new chemotherapy drug to determine the maximum tolerated dose',
        'A Phase II trial of a new antidepressant evaluating symptom reduction scores in 200 patients with major depressive disorder',
        'A Phase III randomized trial comparing a new diabetes medication to standard treatment in 2,000 patients with hemoglobin A1c as the primary endpoint',
        'Using blood pressure as a surrogate endpoint for stroke prevention in a hypertension treatment trial'
      ]
    },
    4: {
      level: 4,
      summary: 'Clinical trial design employs rigorous methodologies including randomization techniques, blinding strategies, control group selection, and statistical power calculations to establish evidence-based medicine.',
      explanation: '# Clinical Trial Design\n\nClinical trial design represents the methodological foundation of evidence-based medicine. Sophisticated design features minimize bias, control for confounding, and ensure that observed treatment effects can be attributed to the intervention rather than chance or systematic error.\n\n## Randomization Techniques\n\n### Simple Randomization\n- Equal probability of assignment to each group\n- Analogous to coin flipping\n- Advantages: Simple, unbiased\n- Disadvantages: May create imbalance, especially in small trials\n\n### Permuted Block Randomization\n- Blocks of size k containing all possible combinations\n- Ensures balance at the end of each block\n- Block sizes are often varied to maintain blinding\n- Prevents temporal trends from causing imbalance\n\n### Stratified Randomization\n- Separate randomization lists within strata\n- Balances known prognostic factors\n- Essential for multicenter trials\n- Limited by number of strata possible\n\n### Minimization\n- Dynamic assignment to minimize imbalance\n- Can incorporate multiple prognostic factors\n- Deterministic rather than truly random\n- May introduce predictability\n\n## Control Group Selection\n\n### Placebo-Controlled Design\n- Gold standard for efficacy demonstration\n- Controls for placebo effect and natural history\n- Ethical considerations when effective treatments exist\n- Requires informed consent about placebo possibility\n\n### Active-Control Superiority Design\n- New treatment compared to established therapy\n- All participants receive active treatment\n- Demonstrates incremental benefit\n- Requires larger sample size than placebo-controlled trials\n\n### Non-Inferiority Design\n- Tests whether new treatment is not unacceptably worse than active control\n- Non-inferiority margin (delta) must be pre-specified\n- Margin based on clinical judgment and historical data\n- Constancy assumption: active control effect remains constant\n\n### Historical Control Design\n- Uses data from previous trials as comparison\n- All current participants receive experimental treatment\n- Limited by potential bias from temporal changes\n- Generally not acceptable for pivotal trials\n\n## Blinding Implementation\n\n### Double-Dummy Technique\n- Each participant receives two treatments\n- Maintains blinding when treatments have different appearances\n- Example: matching placebo pills and injections\n\n### Unblinding Procedures\n- Emergency unblinding must be available\n- Unblinding should be documented and minimized\n- Statisticians often remain blinded until database lock\n\n## Sample Size Determination\n\n### Key Components\n\n**Effect Size (Delta):**\n- Minimal clinically important difference\n- Must be justified clinically\n- Smaller effect requires larger sample size\n\n**Variability (Sigma):**\n- Standard deviation of outcome measure\n- Estimated from previous studies or pilot data\n- Continuous outcomes typically have greater variability\n\n**Significance Level (Alpha):**\n- Probability of Type I error\n- Typically 0.05 (two-sided)\n- More stringent levels (0.01) require larger samples\n\n**Power (1 - Beta):**\n- Probability of detecting true effect\n- Typically 80-90%\n- Higher power requires larger sample size\n\n### Sample Size Formula\n\nFor two-group comparison of means:\n\nn per group = 2 × (Z_alpha + Z_beta)² × sigma² / delta²\n\nWhere:\n- Z_alpha = 1.96 for alpha = 0.05 (two-sided)\n- Z_beta = 0.84 for 80% power\n- Sigma = standard deviation\n- Delta = effect size\n\n### Adjustment for Attrition\n\nPlanned sample size must be inflated for dropouts:\n\nAdjusted n = Calculated n / (1 - dropout rate)',
      keyTerms: [
        {
          term: 'Permuted Block Randomization',
          definition: 'A randomization technique that ensures equal group sizes after every block of participants, maintaining balance throughout enrollment'
        },
        {
          term: 'Non-Inferiority Margin',
          definition: 'The maximum acceptable difference between experimental and control treatments, specified in advance for non-inferiority trials, representing a clinically acceptable loss of efficacy'
        },
        {
          term: 'Constancy Assumption',
          definition: 'The assumption in non-inferiority trials that the active control effect has remained constant from historical trials to the current trial'
        },
        {
          term: 'Double-Dummy Technique',
          definition: 'A method for maintaining blinding when treatments have different appearances, where each participant receives both active and placebo versions'
        },
        {
          term: 'Database Lock',
          definition: 'The point in a clinical trial when the database is finalized and no further data changes are permitted, typically before unblinding for analysis'
        },
        {
          term: 'Intention-to-Treat Analysis',
          definition: 'Analysis strategy that includes all randomized participants in the groups to which they were assigned, regardless of protocol adherence or treatment received'
        }
      ],
      analogies: [
        'Block randomization is like dealing cards - after every complete round (block), each player has received the same number of cards',
        'The constancy assumption in non-inferiority trials is like assuming a sports team performs just as well this season as they did historically - an assumption that may or may not be valid',
        'Sample size calculation is like planning how many people to survey to predict an election - you need more people to detect small differences, and you must account for people who do not respond'
      ],
      examples: [
        'A non-inferiority trial comparing a new oral anticoagulant to warfarin with a margin of 2% for stroke prevention',
        'Using stratified randomization by site in a 50-center international trial to ensure balance across geographic regions',
        'Double-dummy design in a trial comparing oral vs. injectable medication where all participants receive both pills and injections (one active, one placebo)',
        'Sample size calculation for a blood pressure trial targeting a 5 mmHg difference with standard deviation of 10 mmHg, requiring approximately 64 participants per group for 80% power'
      ],
      clinicalNotes: 'Intention-to-treat analysis preserves the benefits of randomization and is the preferred analytic approach for superiority trials. Per-protocol analysis may be appropriate for non-inferiority trials as a conservative sensitivity analysis.'
    },
    5: {
      level: 5,
      summary: 'Clinical trial design encompasses advanced methodologies including adaptive designs, enrichment strategies, multiplicity adjustments, and sophisticated statistical considerations to establish treatment efficacy while maintaining scientific rigor.',
      explanation: '# Advanced Clinical Trial Design\n\nContemporary clinical trial design incorporates complex adaptive features, biomarker-driven enrichment strategies, and sophisticated statistical methods to efficiently evaluate therapeutic interventions while maintaining scientific integrity and regulatory acceptance.\n\n## Adaptive Design Features\n\n### Adaptive Randomization\n- Response-adaptive randomization assigns more participants to better-performing arms\n- Requires continuous monitoring and rapid data availability\n- Raises ethical and statistical concerns\n- Regulatory acceptance requires extensive pre-specification\n\n### Sample Size Re-estimation\n- Unblinded interim analysis assesses treatment effect\n- Sample size may be increased if conditional power falls below threshold\n- Must preserve Type I error rate through appropriate alpha allocation\n- Two types: treatment-effect estimation and promising zone approaches\n\n### Group Sequential Design\n- Interim analyses at planned intervals\n- Early stopping for efficacy, futility, or harm\n- Alpha-spending functions allocate error across analyses\n- O\'Brien-Fleming boundaries are conservative early, liberal late\n- Pocock boundaries use constant boundaries across analyses\n\n### Seamless Phase II/III Design\n- Single trial combining phases without separate analysis\n- Operational characteristics preserve blinding and independence\n- Inferentially seamless allows borrowing of Phase II data\n- Operationally seamless maintains separate analyses\n\n## Enrichment Strategies\n\n### Prospective Enrichment\n- Pre-specified selection based on biomarker or clinical characteristics\n- Increases effect size by enriching for likely responders\n- Requires validated predictive biomarker\n- Regulatory pathway may require companion diagnostic\n\n### Adaptive Enrichment\n- Pre-planned modification of enrollment criteria based on interim analysis\n- May drop non-responsive subpopulations\n- Complex statistical considerations for Type I error control\n- Requires extensive simulation for validation\n\n### Examples of Enrichment\n- HER2-positive breast cancer: trastuzumab only in HER2-overexpressing tumors\n- EGFR mutations: EGFR inhibitors in NSCLC with activating mutations\n- LDL cholesterol: PCSK9 inhibitors in patients with very high LDL\n\n## Multiplicity and Multiple Testing\n\n### The Problem\n- Multiple comparisons inflate family-wise error rate\n- With k independent tests at alpha = 0.05, FWER = 1 - (1 - 0.05)^k\n- 20 tests yield 64% chance of at least one false positive\n\n### Hierarchical Testing\n- Pre-specified testing sequence\n- Test secondary endpoints only if primary is significant\n- Preserves alpha without penalizing individual tests\n- Logical ordering of endpoints is critical\n\n### Gatekeeping Procedures\n- Serial gatekeeping: sequential testing with barriers\n- Parallel gatekeeping: multiple families of hypotheses\n- Tree-structured gatekeeping: complex logical relationships\n\n### Alpha Adjustment Methods\n- Bonferroni: alpha / number of tests (conservative, simple)\n- Holm: step-down approach (more powerful, controls FWER)\n- Hochberg: step-up approach (more powerful under independence)\n- Benjamini-Hochberg: controls false discovery rate\n\n## Non-Inferiority Considerations\n\n### Assay Sensitivity\n- Trial must be able to detect differences between treatments\n- Requires demonstration that active control would have shown superiority to placebo\n- Historical evidence of active control effect must be reliable\n- Trial conduct must be similar to historical studies\n\n### Non-Inferiority Margin Selection\n- Clinically acceptable margin based on expert judgment\n- Statistically justified based on historical effect of active control\n- Typically 50-80% of active control effect over placebo\n- Smaller margins require larger sample sizes\n\n### Analysis Challenges\n- Intention-to-treat analysis may bias toward non-inferiority\n- Per-protocol analysis may bias toward superiority\n- Both analyses typically required\n- Conservative approach favors null hypothesis of inferiority\n\n## Cluster Randomized Trials\n\n### Design Considerations\n- Clusters (hospitals, communities, practices) are randomized\n- Intraclass correlation coefficient (ICC) measures within-cluster similarity\n- Design effect = 1 + (m - 1) × ICC, where m is cluster size\n- Effective sample size reduced by design effect\n\n### Analysis Approaches\n- Generalized estimating equations (GEE) with cluster-robust SE\n- Mixed-effects models with random cluster effects\n- Must account for clustering in analysis regardless of randomization\n\n## Master Protocols\n\n### Basket Trials\n- Single targeted therapy tested across multiple disease types\n- All patients share biomarker of interest\n- Example: larotrectinib for NTRK fusion-positive tumors\n\n### Umbrella Trials\n- Multiple therapies tested within single disease type\n- Patients assigned based on biomarker profile\n- Example: Lung-MAP for squamous cell lung cancer\n\n### Platform Trials\n- Multiple therapies compared to common control\n- Arms enter and leave over time\n- Shared control improves efficiency\n- Example: REMAP-CAP for COVID-19 treatments\n\n## Pragmatic-Explanatory Continuum\n\n### PRECIS-2 Framework\nNine domains characterize position on pragmatic-explanatory spectrum:\n1. Eligibility criteria\n2. Recruitment\n3. Setting\n4. Organization\n5. Flexibility (delivery)\n6. Flexibility (adherence)\n7. Follow-up\n8. Primary outcome\n9. Primary analysis\n\n### Explanatory Trials\n- Maximizes internal validity\n- Narrow eligibility, intensive monitoring\n- Ideal conditions, protocol-driven\n- Establishs efficacy under optimal conditions\n\n### Pragmatic Trials\n- Maximizes external validity\n- Broad eligibility, usual care setting\n- Real-world conditions\n- Establishs effectiveness in practice',
      keyTerms: [
        {
          term: 'Alpha-Spending Function',
          definition: 'A function that allocates the Type I error rate across interim analyses in group sequential designs, allowing flexibility in the number and timing of analyses'
        },
        {
          term: 'Conditional Power',
          definition: 'The probability of achieving statistical significance at trial completion given the current interim data, used in adaptive sample size re-estimation decisions'
        },
        {
          term: 'Family-Wise Error Rate (FWER)',
          definition: 'The probability of making at least one Type I error among a family of hypothesis tests, controlled in multiplicity adjustments'
        },
        {
          term: 'Assay Sensitivity',
          definition: 'The ability of a clinical trial to distinguish between effective and ineffective treatments, critical for the validity of non-inferiority trials'
        },
        {
          term: 'Intraclass Correlation Coefficient (ICC)',
          definition: 'A measure of the similarity of outcomes within clusters in cluster-randomized trials, used to calculate design effect and adjust sample size'
        },
        {
          term: 'Design Effect',
          definition: 'The inflation factor in sample size required for cluster-randomized trials due to within-cluster correlation, calculated as 1 + (m - 1) × ICC'
        },
        {
          term: 'False Discovery Rate (FDR)',
          definition: 'The expected proportion of false positives among all rejected hypotheses, less conservative than family-wise error rate control'
        },
        {
          term: 'Companion Diagnostic',
          definition: 'A medical device, often an in vitro diagnostic, that provides information essential for the safe and effective use of a corresponding therapeutic product'
        }
      ],
      analogies: [
        'A master protocol is like a multi-lane highway where different vehicles (treatments) can enter and exit over time while sharing the same infrastructure',
        'The pragmatic-explanatory continuum is like a spectrum from laboratory conditions (explanatory) to real-world use (pragmatic), with most trials falling somewhere between',
        'Multiplicity adjustment is like lowering the threshold for conviction when evaluating multiple defendants - you need stronger evidence to avoid accidentally convicting any innocent person'
      ],
      examples: [
        'I-SPY 2 trial: Adaptive neoadjuvant breast cancer trial with multiple agents and adaptive randomization based on biomarker signatures',
        'REMAP-CAP: Platform trial for COVID-19 treatments with multiple interventions and shared control group allowing arms to enter and leave based on interim analyses',
        'Non-inferiority margin of 1.5% for cardiovascular events in the ARISTOTLE trial comparing apixaban to warfarin',
        'PRECIS-2 guided design of the ATLAS trial comparing anticoagulation durations, positioned toward pragmatic end for real-world applicability'
      ],
      clinicalNotes: 'Adaptive designs require extensive pre-specification in protocols and statistical analysis plans. Regulatory guidance (FDA Adaptive Design Guidance 2019, EMA Reflection Paper 2007) emphasizes that simulations should support design choices and that Data Monitoring Committees play critical roles in interim decision-making.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    topics: ['clinical-trials', 'research-methodology', 'biostatistics', 'evidence-based-medicine'],
    keywords: ['randomization', 'blinding', 'placebo', 'RCT', 'sample-size', 'trial-phases', 'adaptive-design', 'non-inferiority'],
    clinicalRelevance: 'high'
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published'
};
