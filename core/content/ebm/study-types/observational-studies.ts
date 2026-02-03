import { EBMContent } from '../types';

export const observationalStudiesContent: EBMContent = {
  id: 'ebm-observational-studies',
  title: 'Observational Study Designs',
  category: 'evidence-based-medicine',
  description: 'Understanding cohort, case-control, and cross-sectional study designs',

  levels: [
    {
      level: 1,
      title: 'Introduction to Observational Studies',
      content: `
        **Observational Studies: Watching Without Interfering**


        In observational studies, researchers observe and measure variables without assigning interventions. Participants are not randomized—they are studied based on their natural exposures or outcomes.


        **Key Characteristic:** The investigator does NOT control who gets which exposure. This contrasts with RCTs where assignment is random.


        **When Are Observational Studies Useful?**
        - When randomization is unethical (e.g., studying smoking)
        - When randomization is impractical (e.g., rare diseases)
        - For studying long-term effects (e.g., environmental exposures)
        - For generating hypotheses to test in RCTs
        - For studying real-world effectiveness


        **Main Types:**
        1. **Cohort studies:** Follow groups forward in time
        2. **Case-control studies:** Compare those with/without condition
        3. **Cross-sectional studies:** Snapshot at one point in time


        **Key Limitation:** Confounding—other factors may explain the association
        - Example: Coffee drinkers may have different lifestyle factors than non-drinkers
        - These factors, not coffee, might affect outcomes
      `,
      keyPoints: [
        'Observational studies do not assign treatments',
        'Researchers observe but do not interfere',
        'Useful when RCTs are impossible or unethical',
        'Confounding is a major limitation',
        'Cannot prove causation as strongly as RCTs'
      ],
      quiz: [
        {
          question: 'What is the key difference between observational studies and RCTs?',
          options: [
            'Sample size',
            'Duration of follow-up',
            'Whether the investigator controls exposure assignment',
            'Cost of the study'
          ],
          correctAnswer: 2,
          explanation: 'In observational studies, the investigator observes without controlling assignment. In RCTs, the investigator randomly assigns exposures.'
        }
      ]
    },
    {
      level: 2,
      title: 'Cohort Studies',
      content: `
        **Cohort Studies: Following Groups Forward**


        A cohort study follows two or more groups (cohorts) who differ in exposure status over time to see who develops the outcome.


        **Design Structure:**
        - Start with people who do NOT have the outcome
        - Classify by exposure status (exposed vs. unexposed)
        - Follow forward in time (prospective) or from past data (retrospective)
        - Compare outcome incidence between groups


        **Types:**

        **Prospective Cohort:**
        - Start with exposure classification
        - Follow participants forward
        - Wait for outcomes to occur
        - More expensive but less recall bias


        **Retrospective Cohort:**
        - Use existing records
        - Classify exposures from past
        - Identify outcomes that already occurred
        - Faster and less expensive


        **Ambidirectional Cohort:**
        - Combines retrospective and prospective data
        - Uses historical data then continues follow-up


        **Example:**
        - Exposed: 10,000 smokers
        - Unexposed: 10,000 non-smokers
        - Follow for 20 years
        - Compare lung cancer incidence


        **Measures:**
        - **Relative Risk (RR):** Incidence in exposed / Incidence in unexposed
        - **Attributable Risk (AR):** Incidence in exposed - Incidence in unexposed
      `,
      keyPoints: [
        'Cohort studies follow groups forward in time',
        'Participants are free of outcome at start',
        'Can calculate incidence and relative risk directly',
        'Good for studying multiple outcomes from one exposure',
        'Can study rare exposures but not rare outcomes'
      ],
      quiz: [
        {
          question: 'A cohort study finds that 20% of smokers develop lung cancer compared to 2% of non-smokers. What is the relative risk?',
          options: ['0.10', '2', '10', '18'],
          correctAnswer: 2,
          explanation: 'RR = 20% / 2% = 10. Smokers have 10 times the risk of developing lung cancer compared to non-smokers.'
        }
      ]
    },
    {
      level: 3,
      title: 'Case-Control Studies',
      content: `
        **Case-Control Studies: Looking Backward**


        A case-control study starts with people who already have the outcome (cases) and compares them to similar people without the outcome (controls), looking back at past exposures.


        **Design Structure:**
        - Start with outcome (cases with disease, controls without)
        - Look backward in time
        - Compare past exposures between groups
        - Cannot directly calculate incidence or risk


        **Key Features:**
        - Efficient for rare diseases
        - Faster and cheaper than cohort studies
        - Prone to recall and selection bias
        - Cannot calculate relative risk directly


        **Selection of Controls:**
        - Must come from same source population as cases
        - Should be representative of those who would become cases
        - Common sources: hospital patients, community registries
        - **Matching:** Controls matched to cases on key confounders (age, sex, etc.)


        **Example:**
        - Cases: 100 patients with rare cancer
        - Controls: 100 similar patients without cancer
        - Compare past exposure to suspected chemical
        - If 70% of cases vs. 30% of controls were exposed → association


        **Measures:**
        - **Odds Ratio (OR):** Approximates RR when outcome is rare
        - OR = (Odds of exposure in cases) / (Odds of exposure in controls)
        - OR = (a/c) / (b/d) = ad/bc (in 2x2 table)


        **When OR ≈ RR:**
        - When outcome is rare (<10% incidence)
        - Case-control studies cannot measure true incidence
      `,
      keyPoints: [
        'Case-control studies start with outcome and look back',
        'Efficient for studying rare diseases',
        'Cannot calculate incidence directly',
        'Odds ratio is the main measure of association',
        'Control selection is critical for validity'
      ],
      quiz: [
        {
          question: 'In a case-control study of a rare disease, if 60% of cases and 30% of controls were exposed, what is the odds ratio?',
          options: ['2', '2.5', '3', '3.5'],
          correctAnswer: 3,
          explanation: 'OR = (0.60/0.40) / (0.30/0.70) = 1.5 / 0.429 = 3.5. The odds of exposure are 3.5 times higher in cases.'
        }
      ]
    },
    {
      level: 4,
      title: 'Cross-Sectional and Other Designs',
      content: `
        **Cross-Sectional Studies: A Snapshot in Time**


        A cross-sectional study measures exposure and outcome simultaneously at a single point in time.


        **Key Features:**
        - Exposure and outcome measured together
        - Cannot establish temporal relationship
        - Good for prevalence studies
        - Relatively quick and inexpensive


        **Uses:**
        - Determining disease prevalence
        - Identifying associations for further study
        - Health surveys and surveillance
        - Diagnostic accuracy studies


        **Limitation:** Cannot determine if exposure preceded outcome
        - Example: Finding depression in people with insomnia
        - Does depression cause insomnia or insomnia cause depression?
        - Cross-sectional design cannot answer this


        **Ecological Studies:**
        - Compare groups rather than individuals
        - Exposure and outcome measured at population level
        - Prone to ecological fallacy (group ≠ individual)
        - Example: Countries with high fat intake have higher heart disease rates


        **Case Series and Case Reports:**
        - Describe individual cases or small series
        - Useful for rare conditions or new diseases
        - Cannot prove causation or estimate prevalence
        - Lowest level of evidence


        **Nested Case-Control:**
        - Case-control study within a cohort
        - Controls sampled from cohort at time each case occurs
        - Efficient for biomarker studies
        - Preserves some advantages of cohort design


        **Case-Crossover:**
        - Each participant serves as own control
        - Compare exposure just before outcome to other times
        - Useful for studying triggers with transient effects
        - Example: Cell phone use and motor vehicle crashes
      `,
      keyPoints: [
        'Cross-sectional studies measure exposure and outcome simultaneously',
        'Cannot establish temporal relationships',
        'Ecological studies compare populations, not individuals',
        'Case reports are hypothesis-generating only',
        'Nested case-control studies combine features of both designs'
      ],
      quiz: [
        {
          question: 'Why are cross-sectional studies limited for establishing causation?',
          options: [
            'They are too expensive',
            'They cannot establish temporal relationships',
            'They have too many participants',
            'They cannot use statistical tests'
          ],
          correctAnswer: 1,
          explanation: 'Because exposure and outcome are measured simultaneously, cross-sectional studies cannot determine if exposure preceded the outcome.'
        }
      ]
    },
    {
      level: 5,
      title: 'Bias and Confounding in Observational Studies',
      content: `
        **Major Threats to Validity**


        **Selection Bias:**
        - Systematic differences between groups at baseline
        - **Self-selection:** Participants choose their group
        - **Healthy user effect:** People who take medications may be healthier
        - **Berkson bias:** Hospital-based studies select different populations
        - **Loss to follow-up:** Differential dropout between groups


        **Information (Measurement) Bias:**
        - **Recall bias:** Cases remember exposures differently than controls
        - **Interviewer bias:** Knowledge of status affects questioning
        - **Surveillance bias:** More intensive monitoring in exposed group
        - **Misclassification:** Errors in measuring exposure or outcome


        **Confounding:**
        A confounder is associated with both exposure AND outcome but is not on the causal pathway.


        **Example - Coffee and Pancreatic Cancer:**
        - Coffee drinkers have higher pancreatic cancer rates
        - But coffee drinkers are also more likely to smoke
        - Smoking causes pancreatic cancer
        - Smoking is the confounder, not coffee


        **Controlling for Confounding:**

        **Study Design:**
        - Randomization (not possible in observational studies)
        - Restriction (limit study to one level of confounder)
        - Matching (ensure balance on confounders)


        **Analysis:**
        - Stratification (analyze within subgroups)
        - Regression adjustment (statistical control)
        - Propensity scores (balance groups using probability of exposure)


        **Directed Acyclic Graphs (DAGs):**
        - Visual tool for identifying confounders
        - Shows causal relationships between variables
        - Helps determine which variables to adjust for
        - Avoids over-adjustment (adjusting for mediators)


        **STROBE Statement:**
        - Standards for reporting observational studies
        - Checklist ensures complete reporting
        - Improves transparency and reproducibility


        **Causal Criteria:**
        Even with perfect observational studies, causation requires:
        1. **Strength:** Strong association (less likely due to confounding)
        2. **Consistency:** Found in different studies/populations
        3. **Specificity:** One cause → one effect
        4. **Temporality:** Exposure precedes outcome
        5. **Biological gradient:** Dose-response relationship
        6. **Plausibility:** Biological mechanism makes sense
        7. **Coherence:** Fits with existing knowledge
        8. **Experiment:** Removing exposure reduces outcome
        9. **Analogy:** Similar to other known cause-effect relationships
      `,
      keyPoints: [
        'Selection bias creates systematic differences between groups',
        'Recall bias is common in case-control studies',
        'Confounders are associated with both exposure and outcome',
        'Matching and regression can control for confounding',
        'DAGs help identify appropriate confounders for adjustment',
        'Causal inference requires multiple criteria beyond association'
      ],
      quiz: [
        {
          question: 'A study finds that people who drink wine have better heart health. However, wine drinkers also tend to have higher income and better diets. What is this an example of?',
          options: [
            'Selection bias',
            'Recall bias',
            'Confounding',
            'Information bias'
          ],
          correctAnswer: 2,
          explanation: 'Income and diet are confounders—associated with both wine consumption and heart health, but not on the causal pathway.'
        }
      ]
    }
  ]
};
