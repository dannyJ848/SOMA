import { EBMContent } from '../types';

export const studyHierarchyContent: EBMContent = {
  id: 'ebm-study-hierarchy',
  title: 'Evidence Hierarchy',
  category: 'evidence-based-medicine',
  description: 'Understanding the hierarchy of evidence in medical research',

  levels: [
    {
      level: 1,
      title: 'Introduction to Evidence Levels',
      content: `
        **Evidence Hierarchy: A Pyramid of Knowledge**


        The evidence hierarchy organizes study types by the strength and reliability of their findings. Think of it as a pyramid - the higher you go, the stronger the evidence.


        **Key Concept:** Not all evidence is created equal. A well-designed randomized trial provides stronger evidence than a series of case reports.


        **The Pyramid Levels (Bottom to Top):**
        - Level 5: Expert opinion
        - Level 4: Case series/case reports
        - Level 3: Case-control studies
        - Level 2: Cohort studies
        - Level 1: Randomized controlled trials
        - Systematic reviews/meta-analyses (apex)


        **Clinical Question:** When you search for evidence to answer a clinical question, start at the top of the pyramid for the most reliable answers.
      `,
      keyPoints: [
        'Evidence hierarchy ranks study types by reliability',
        'Systematic reviews provide the strongest evidence',
        'Expert opinion alone is the weakest evidence',
        'Higher levels reduce bias and confounding'
      ],
      quiz: [
        {
          question: 'Which type of evidence is considered strongest?',
          options: ['Case series', 'Expert opinion', 'Systematic review', 'Case-control study'],
          correctAnswer: 2,
          explanation: 'Systematic reviews synthesize all available evidence on a topic, making them the strongest form of evidence.'
        }
      ]
    },
    {
      level: 2,
      title: 'Understanding Study Design Quality',
      content: `
        **Why Hierarchy Matters**


        The position of a study type in the hierarchy reflects its ability to minimize bias and confounding.


        **Primary Sources of Bias:**
        - **Selection bias:** Who gets into the study
        - **Information bias:** How data is collected
        - **Confounding:** Other factors that affect results


        **Study Design Features That Strengthen Evidence:**
        1. **Randomization** - Eliminates selection bias
        2. **Control groups** - Provides comparison
        3. **Blinding** - Reduces measurement bias
        4. **Large sample sizes** - Reduces random error
        5. **Follow-up completeness** - Reduces attrition bias


        **Important Caveat:** A poorly conducted RCT can provide worse evidence than a well-designed observational study. Always consider study quality, not just position in hierarchy.
      `,
      keyPoints: [
        'Hierarchy reflects ability to minimize bias',
        'Randomization is the most important feature',
        'Study quality matters more than position',
        'Blinding reduces measurement and reporting bias'
      ],
      quiz: [
        {
          question: 'What is the primary advantage of randomization?',
          options: ['Reduces cost', 'Eliminates selection bias', 'Speeds up recruitment', 'Simplifies analysis'],
          correctAnswer: 1,
          explanation: 'Randomization ensures both known and unknown confounders are equally distributed between groups.'
        }
      ]
    },
    {
      level: 3,
      title: 'Detailed Hierarchy Breakdown',
      content: `
        **The Oxford Centre for Evidence-Based Medicine Levels**


        **Level 1a: Systematic Reviews of RCTs**
        - Highest quality evidence
        - Pool results from multiple studies
        - Use statistical methods to combine data
        - Example: Cochrane Reviews


        **Level 1b: Individual RCTs**
        - Random allocation to treatment groups
        - Controlled comparison
        - The gold standard for single studies


        **Level 2: Cohort Studies**
        - Follow groups over time
        - Can study multiple outcomes
        - Good for rare exposures
        - Prone to confounding


        **Level 3: Case-Control Studies**
        - Compare people with/without condition
        - Look back at exposures
        - Efficient for rare diseases
        - High risk of recall bias


        **Level 4: Case Series/Reports**
        - Describe individual cases
        - Useful for new conditions
        - Cannot prove causation
        - Prone to publication bias


        **Level 5: Expert Opinion**
        - Based on experience, not systematic data
        - Should supplement, not replace, evidence
      `,
      keyPoints: [
        'Systematic reviews are the apex of evidence',
        'RCTs are the gold standard for single studies',
        'Observational studies have important limitations',
        'Case reports generate hypotheses but cannot test them'
      ],
      quiz: [
        {
          question: 'A study comparing patients who developed a disease to those who did not, looking back at their exposures, is what type?',
          options: ['Cohort study', 'Case-control study', 'RCT', 'Case series'],
          correctAnswer: 1,
          explanation: 'Case-control studies start with the outcome and look back at exposures, making them efficient for studying rare diseases.'
        }
      ]
    },
    {
      level: 4,
      title: 'CEBM Evidence Levels Framework',
      content: `
        **Oxford Centre for Evidence-Based Medicine (CEBM) Levels of Evidence**


        The CEBM framework provides detailed levels based on study design AND the type of clinical question.


        **For Treatment Questions:**
        - Level 1a: SR of homogenous RCTs
        - Level 1b: Individual RCT with narrow CI
        - Level 1c: All-or-none (all died before treatment, some survive with it)
        - Level 2a: SR of cohort studies
        - Level 2b: Individual cohort study
        - Level 3a: SR of case-control studies
        - Level 3b: Individual case-control study
        - Level 4: Case series
        - Level 5: Expert opinion


        **For Diagnosis Questions:**
        - Level 1a: SR of Level 1 diagnostic studies
        - Level 1b: Independent blind comparison to gold standard
        - Level 2: Good quality cohort but < independent blind
        - Level 3: Non-consecutive cases or poor standardization
        - Level 4: Case-control studies
        - Level 5: Expert opinion


        **Key Principle:** Different study designs are strongest for different types of questions. For prognosis, cohort studies may be the strongest available design.
      `,
      keyPoints: [
        'CEBM provides question-specific evidence levels',
        'Different questions require different study designs',
        'Homogeneity of studies is crucial for systematic reviews',
        'The "all-or-none" scenario provides strong causal evidence'
      ],
      quiz: [
        {
          question: 'For a diagnostic accuracy question, what is Level 1b evidence?',
          options: [
            'Cohort study',
            'Independent blind comparison to gold standard',
            'Case-control study',
            'Expert opinion'
          ],
          correctAnswer: 1,
          explanation: 'For diagnostic questions, Level 1b requires an independent, blind comparison of the test to a valid gold standard.'
        }
      ]
    },
    {
      level: 5,
      title: 'Advanced Applications and GRADE Approach',
      content: `
        **GRADE: Grading of Recommendations Assessment, Development and Evaluation**


        GRADE is the modern framework for evaluating evidence quality and making recommendations.


        **Four Categories of Evidence Quality:**
        1. **High** - Confident that true effect lies close to estimate
        2. **Moderate** - True effect is likely close to estimate, but could be substantially different
        3. **Low** - True effect may be substantially different from estimate
        4. **Very Low** - True effect is probably substantially different from estimate


        **Factors That Downgrade Evidence:**
        - Risk of bias (study limitations)
        - Inconsistency (heterogeneity)
        - Indirectness (population, intervention, comparator)
        - Imprecision (wide confidence intervals)
        - Publication bias


        **Factors That Upgrade Evidence:**
        - Large effect size (RR > 2 or < 0.5)
        - Dose-response gradient
        - All plausible confounding would reduce effect


        **Strength of Recommendation:**
        - **Strong:** Most patients should receive the intervention
        - **Weak/Conditional:** Different choices for different patients


        **Clinical Application:** When applying evidence, consider:
        1. Quality of evidence (GRADE)
        2. Balance of benefits vs harms
        3. Patient values and preferences
        4. Resource use and cost
        5. Feasibility and acceptability
      `,
      keyPoints: [
        'GRADE categorizes evidence as high, moderate, low, or very low quality',
        'Evidence can be downgraded for bias, inconsistency, or indirectness',
        'Large effects can upgrade observational studies to moderate quality',
        'Recommendation strength differs from evidence quality',
        'Patient values are critical in applying evidence'
      ],
      quiz: [
        {
          question: 'Which factor would cause evidence to be downgraded in GRADE?',
          options: [
            'Large effect size',
            'Dose-response relationship',
            'Inconsistency between studies',
            'All plausible confounding would reduce effect'
          ],
          correctAnswer: 2,
          explanation: 'Inconsistency (unexplained heterogeneity) is one of the five factors that can downgrade evidence quality in GRADE.'
        }
      ]
    }
  ]
};
