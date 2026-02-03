import { EBMContent } from '../types';

export const rctsContent: EBMContent = {
  id: 'ebm-rcts',
  title: 'Randomized Controlled Trials',
  category: 'evidence-based-medicine',
  description: 'Understanding the design and interpretation of randomized controlled trials',

  levels: [
    {
      level: 1,
      title: 'What is an RCT?',
      content: `
        **Randomized Controlled Trial: The Gold Standard**


        An RCT is a study where participants are randomly assigned to either receive the intervention (treatment group) or not (control group).


        **Key Features:**
        - **Random assignment:** Each participant has an equal chance of being in any group
        - **Control group:** Receives placebo, standard treatment, or no treatment
        - **Parallel groups:** Groups followed simultaneously


        **Why Randomization Works:**
        It ensures that both known AND unknown factors are distributed equally between groups. This creates comparable groups at baseline.


        **Simple Example:**
        Testing a new blood pressure medication:
        - Group A (100 people): New drug
        - Group B (100 people): Placebo
        - Random assignment decides which group each person joins
        - Compare blood pressure after 8 weeks


        **Clinical Bottom Line:** RCTs provide the strongest evidence for cause-and-effect relationships in medical treatments.
      `,
      keyPoints: [
        'RCTs randomly assign participants to treatment or control',
        'Randomization balances known and unknown confounders',
        'Control groups provide comparison for assessing effects',
        'RCTs are the gold standard for treatment questions'
      ],
      quiz: [
        {
          question: 'What is the primary purpose of randomization in an RCT?',
          options: [
            'To make the study faster',
            'To reduce study costs',
            'To create comparable groups at baseline',
            'To ensure all participants receive treatment'
          ],
          correctAnswer: 2,
          explanation: 'Randomization ensures both known and unknown confounders are equally distributed, creating comparable groups.'
        }
      ]
    },
    {
      level: 2,
      title: 'Essential RCT Components',
      content: `
        **Key Design Elements of RCTs**


        **1. Randomization Methods:**
        - **Simple randomization:** Like flipping a coin for each participant
        - **Block randomization:** Ensures equal group sizes throughout
        - **Stratified randomization:** Balances important prognostic factors
        - **Central randomization:** Prevents prediction of next assignment


        **2. Control Group Types:**
        - **Placebo:** Identical in appearance but no active treatment
        - **Active control:** Standard treatment vs. new treatment
        - **No treatment:** Usual care vs. intervention
        - **Waitlist control:** Intervention delayed for control group


        **3. Blinding (Masking):**
        - **Single-blind:** Participant doesn't know treatment
        - **Double-blind:** Neither participant nor investigator knows
        - **Triple-blind:** Participant, investigator, and analyst are blinded
        - **Open-label:** Everyone knows the treatment


        **4. Parallel vs. Crossover:**
        - **Parallel design:** Each participant receives one treatment
        - **Crossover design:** Each participant receives all treatments in different periods
      `,
      keyPoints: [
        'Block randomization ensures balanced group sizes',
        'Stratified randomization balances important prognostic factors',
        'Double-blinding reduces both participant and researcher bias',
        'Crossover designs use participants as their own controls'
      ],
      quiz: [
        {
          question: 'In a double-blind RCT, who is unaware of treatment assignment?',
          options: [
            'Only the participant',
            'Only the investigator',
            'Both participant and investigator',
            'Only the statistician'
          ],
          correctAnswer: 2,
          explanation: 'Double-blinding means neither the participant nor the investigator knows which treatment the participant is receiving.'
        }
      ]
    },
    {
      level: 3,
      title: 'RCT Phases and Design Variations',
      content: `
        **Clinical Trial Phases**


        **Phase I: Safety**
        - Small sample (20-100 healthy volunteers or patients)
        - Determines safety and dosage
        - Not designed to test efficacy
        - Example: Finding maximum tolerated dose


        **Phase II: Efficacy and Safety**
        - Medium sample (100-300 patients)
        - Preliminary effectiveness data
        - Continues safety assessment
        - Example: Does the drug lower blood pressure?


        **Phase III: Comparison**
        - Large sample (300-3,000+ patients)
        - Compares to standard treatment or placebo
        - Definitive efficacy and safety
        - Example: Is new drug better than existing treatment?


        **Phase IV: Post-Marketing Surveillance**
        - After FDA approval
        - Monitors long-term effects and rare adverse events
        - Large population data
        - Example: Tracking rare side effects in millions of users


        **Special RCT Designs:**

        **Factorial Design:** Tests multiple interventions simultaneously
        - 2x2 design: Drug A vs placebo, Drug B vs placebo
        - Four groups: A+B, A only, B only, neither
        - Efficient for testing combinations


        **Cluster Randomization:**
        - Randomizes groups rather than individuals
        - Examples: schools, clinics, communities
        - Accounts for clustering in analysis


        **Non-Inferiority Trials:**
        - Tests if new treatment is NOT worse than standard by a specified margin
        - Active control required
        - Different statistical approach than superiority trials
      `,
      keyPoints: [
        'Phase I assesses safety, Phase II preliminary efficacy',
        'Phase III provides definitive efficacy data',
        'Phase IV monitors post-marketing safety',
        'Factorial designs efficiently test multiple interventions',
        'Non-inferiority trials test equivalence within a margin'
      ],
      quiz: [
        {
          question: 'What is the primary purpose of a Phase II trial?',
          options: [
            'Long-term safety monitoring',
            'Determining maximum tolerated dose',
            'Preliminary efficacy and continued safety',
            'Post-marketing surveillance'
          ],
          correctAnswer: 2,
          explanation: 'Phase II trials provide preliminary efficacy data while continuing safety assessment in a medium-sized patient sample.'
        }
      ]
    },
    {
      level: 4,
      title: 'Analyzing RCT Results',
      content: `
        **Interpreting RCT Outcomes**


        **Primary vs. Secondary Outcomes:**
        - **Primary:** Main question the trial is designed to answer
        - **Secondary:** Additional questions of interest
        - **Exploratory:** Hypothesis-generating analyses
        - *Important:* The primary outcome is the only confirmatory result


        **Intention-to-Treat (ITT) Analysis:**
        - Analyzes all participants as originally randomized
        - Preserves benefits of randomization
        - Conservative estimate (may dilute true effect)
        - **Standard for RCT analysis**


        **Per-Protocol Analysis:**
        - Includes only participants who completed treatment as planned
        - May overestimate true effect
        - Prone to bias from dropouts
        - **Supplemental analysis only**


        **Common Effect Measures:**

        **Relative Risk (RR):**
        - Event rate in treatment / Event rate in control
        - RR = 0.5 means 50% reduction in risk
        - RR = 2.0 means 100% increase in risk


        **Absolute Risk Reduction (ARR):**
        - Event rate in control - Event rate in treatment
        - More clinically meaningful than RR
        - ARR = 10% - 5% = 5%


        **Number Needed to Treat (NNT):**
        - NNT = 1 / ARR
        - Patients needed to treat for one to benefit
        - NNT = 1 / 0.05 = 20
        - Lower NNT = better treatment


        **Number Needed to Harm (NNH):**
        - NNH = 1 / ARI (Absolute Risk Increase)
        - Patients needed to treat for one to be harmed
      `,
      keyPoints: [
        'Primary outcome is the confirmatory result',
        'ITT is the standard analysis method for RCTs',
        'Per-protocol analysis is supplemental only',
        'ARR is more clinically meaningful than RR',
        'NNT helps clinicians communicate benefit to patients'
      ],
      quiz: [
        {
          question: 'A trial shows control group event rate of 20% and treatment group event rate of 10%. What is the NNT?',
          options: ['2', '5', '10', '20'],
          correctAnswer: 2,
          explanation: 'ARR = 20% - 10% = 10% (0.10). NNT = 1/0.10 = 10. You need to treat 10 patients to prevent one event.'
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced RCT Concepts and Limitations',
      content: `
        **Advanced RCT Considerations**


        **Subgroup Analysis:**
        - Examines treatment effects in specific subsets
        - Should be pre-specified and limited in number
        - Prone to false-positive findings
        - **Rule of thumb:** Be skeptical of subgroup effects unless:
          - Pre-specified with hypothesis
          - Large sample size in subgroup
          - Strong statistical evidence
          - Biological plausibility
          - Replicated in other studies


        **Interim Analyses and Stopping Rules:**
        - Planned looks at data while trial is ongoing
        - Requires adjustment of significance level
        - Can stop for:
          - **Efficacy:** Clear benefit established
          - **Futility:** Unlikely to show benefit
          - **Harm:** Clear harm demonstrated
        - Data Monitoring Committee (DMC) oversees


        **Non-Inferiority vs. Superiority:**

        **Superiority:** Tests if treatment is better than control
        - Null hypothesis: Treatments are equal
        - Rejection shows one is superior


        **Non-Inferiority:** Tests if treatment is not worse than active control
        - Null hypothesis: Treatment is worse by margin Δ
        - Rejection shows non-inferiority
        - Margin Δ defines clinically acceptable difference
        - Requires intention-to-treat analysis


        **Limitations of RCTs:**
        - **Costly and time-consuming:** May not be feasible for all questions
        - **Eligibility criteria:** May not represent real-world patients
        - **Protocol-driven care:** May differ from usual practice
        - **Limited follow-up:** Long-term effects may be unknown
        - **Ethical constraints:** Cannot randomize to harmful exposures


        **Pragmatic vs. Explanatory Trials:**

        **Explanatory (Efficacy):**
        - Can it work under ideal conditions?
        - Strict eligibility
        - Intensive monitoring
        - Protocol-driven care


        **Pragmatic (Effectiveness):**
        - Does it work in real practice?
        - Broad eligibility
        - Usual monitoring
        - Flexible protocols


        **CONSORT Statement:** Standard for RCT reporting
        - Checklist for complete reporting
        - Flow diagram showing participant disposition
        - Improves transparency and reproducibility
      `,
      keyPoints: [
        'Subgroup analyses are prone to false positives',
        'Interim analyses require statistical adjustment',
        'Non-inferiority trials require careful margin selection',
        'Pragmatic trials test real-world effectiveness',
        'CONSORT guidelines ensure complete RCT reporting',
        'ITT analysis is essential to preserve randomization benefits'
      ],
      quiz: [
        {
          question: 'Which feature best characterizes a pragmatic trial compared to an explanatory trial?',
          options: [
            'Strict eligibility criteria',
            'Broad eligibility and usual care conditions',
            'Intensive monitoring',
            'Protocol-driven treatment protocols'
          ],
          correctAnswer: 1,
          explanation: 'Pragmatic trials are designed to test effectiveness in real-world conditions, using broad eligibility and usual care practices.'
        }
      ]
    }
  ]
};
