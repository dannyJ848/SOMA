/**
 * A1C Targets - Diabetes Management
 *
 * Teaching patients about hemoglobin A1C and individualized
 * glycemic targets for diabetes management.
 */

import { EducationalContent } from '../../types';

export const A1C_TARGETS: EducationalContent = {
  id: 'diabetes-a1c-targets',
  type: 'concept',
  name: 'A1C Targets',
  alternateNames: ['Hemoglobin A1C', 'HbA1c', 'Glycated hemoglobin', 'Glycosylated hemoglobin'],

  levels: {
    1: {
      level: 1,
      summary: 'A1C is a blood test that shows your average blood sugar over the past 2-3 months. It helps you and your doctor see how well your diabetes is being managed.',
      explanation: `**What Is A1C?**
A1C (also called hemoglobin A1C or HbA1c) is a simple blood test. It tells you and your doctor what your average blood sugar has been over the past 2-3 months.

**Why Is A1C Important?**
- It shows the "big picture" of your blood sugar control
- High A1C over time can lead to diabetes problems
- It helps your doctor know if your treatment is working
- You can track your progress from test to test

**Understanding Your A1C Number:**

| A1C Level | What It Means |
|-----------|---------------|
| Below 5.7% | Normal (no diabetes) |
| 5.7% - 6.4% | Prediabetes |
| 6.5% or higher | Diabetes |

**A1C Goals for People with Diabetes:**
Most adults with diabetes aim for an A1C of **less than 7%**. But your goal might be different. Your doctor will help you set a target that is right for you.

**How A1C Works:**
Sugar in your blood sticks to a protein in red blood cells called hemoglobin. The more sugar in your blood, the more sticks to the hemoglobin. Since red blood cells live about 3 months, the test shows your average over that time.

**How Often to Get Tested:**
- At least twice a year if your diabetes is stable
- Every 3 months if your treatment changed or you're not meeting your goal

**A1C and Daily Blood Sugar:**

| A1C | Average Blood Sugar |
|-----|---------------------|
| 6% | About 126 mg/dL |
| 7% | About 154 mg/dL |
| 8% | About 183 mg/dL |
| 9% | About 212 mg/dL |

**Tips for Lowering Your A1C:**
- Take your diabetes medicines as prescribed
- Watch your carbohydrate intake
- Stay active
- Check your blood sugar regularly
- Keep your appointments with your doctor

**Remember:** Every percentage point you lower your A1C reduces your risk of diabetes complications!`,
      keyTerms: [
        { term: 'A1C', definition: 'A blood test that shows your average blood sugar over the past 2-3 months' },
        { term: 'hemoglobin', definition: 'A protein in red blood cells that carries oxygen and can have sugar attached to it' },
        { term: 'target', definition: 'The goal number you and your doctor are trying to reach' },
      ],
      analogies: [
        'Think of A1C like a grade on a report card - it shows how well you have been doing overall, not just on one test.',
        'If daily blood sugar checks are like weighing yourself each day, A1C is like your average weight over the whole season.',
      ],
      examples: [
        'Maria has diabetes and her doctor sets her A1C goal at 7%. After making diet changes and taking her medication regularly, her A1C drops from 8.5% to 7.2%.',
        'Tom is 75 years old with heart disease. His doctor sets his A1C goal at 8% to avoid low blood sugar episodes.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemoglobin A1C measures glycated hemoglobin to reflect average blood glucose over 2-3 months, guiding diabetes treatment goals that are individualized based on patient factors and risk of hypoglycemia.',
      explanation: `**Understanding A1C:**

A1C (glycated hemoglobin) forms when glucose in the blood attaches to hemoglobin in red blood cells. Because red blood cells live approximately 120 days, A1C reflects average blood glucose over the preceding 2-3 months.

**A1C Formation:**
- Glucose non-enzymatically attaches to hemoglobin
- Higher blood glucose = more glycation
- Process is continuous throughout RBC lifespan
- Measurement represents integrated glucose exposure

**A1C Categories:**

| A1C Level | Interpretation |
|-----------|----------------|
| <5.7% | Normal |
| 5.7-6.4% | Prediabetes |
| ≥6.5% | Diabetes (diagnostic) |

**A1C Goals in Diabetes:**

*General Target:*
The American Diabetes Association recommends A1C <7% for most non-pregnant adults with diabetes.

*Individualized Targets:*
| Patient Factor | Suggested A1C Target |
|----------------|---------------------|
| Young, newly diagnosed, no complications | <6.5% |
| Most adults with diabetes | <7% |
| History of severe hypoglycemia | 7-8% |
| Limited life expectancy | <8.5% |
| Older adults with multiple conditions | 7.5-8.5% |

**Factors Influencing Target Selection:**

*Consider Tighter Control (<7%) if:*
- Younger age
- Short diabetes duration
- Long life expectancy
- No cardiovascular disease
- Able to achieve without significant hypoglycemia

*Consider Less Stringent Targets (7.5-8%) if:*
- History of severe hypoglycemia
- Hypoglycemia unawareness
- Advanced complications
- Multiple comorbidities
- Limited life expectancy
- Long-standing diabetes

**A1C to Estimated Average Glucose (eAG):**

| A1C | eAG (mg/dL) | eAG (mmol/L) |
|-----|-------------|--------------|
| 6% | 126 | 7.0 |
| 6.5% | 140 | 7.8 |
| 7% | 154 | 8.6 |
| 7.5% | 169 | 9.4 |
| 8% | 183 | 10.2 |

*Formula: eAG (mg/dL) = 28.7 × A1C − 46.7*

**Limitations of A1C:**

*Conditions affecting A1C accuracy:*
- Anemia
- Hemoglobin variants
- Recent blood transfusion
- Chronic kidney disease
- Pregnancy
- HIV treatment
- Age (A1C may underestimate glucose in elderly)

*Alternative markers:*
- Fructosamine (reflects 2-3 weeks)
- Glycated albumin
- Continuous glucose monitoring data

**Monitoring Frequency:**
- Every 3 months if not at goal or after treatment changes
- At least twice yearly if stable and at goal

**Clinical Significance:**

*Benefits of lower A1C:*
- DCCT/UKPDS: Each 1% A1C reduction reduces microvascular complications by ~25%
- Retinopathy, nephropathy, neuropathy risk reduction
- Some macrovascular benefit (especially in newly diagnosed)

*Risks of aggressive lowering:*
- Increased hypoglycemia
- Weight gain
- Polypharmacy
- Reduced quality of life
- ACCORD trial concerns in high-risk patients`,
      keyTerms: [
        { term: 'glycated hemoglobin', definition: 'Hemoglobin with glucose molecules attached, reflecting average blood glucose' },
        { term: 'estimated average glucose (eAG)', definition: 'Blood sugar average calculated from A1C' },
        { term: 'microvascular complications', definition: 'Diabetes damage to small blood vessels affecting eyes, kidneys, and nerves' },
        { term: 'hypoglycemia unawareness', definition: 'Reduced ability to perceive low blood sugar symptoms' },
      ],
      analogies: [
        'A1C is like looking at the average temperature of a city over three months rather than just today\'s weather - it gives you the bigger picture.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hemoglobin A1C serves as the primary metric for glycemic control, guiding individualized treatment targets based on patient characteristics, complication risk, and the balance between glycemic benefits and hypoglycemia risks.',
      explanation: `**A1C in Clinical Practice:**

A1C remains the gold standard for assessing long-term glycemic control and predicting diabetes complications, though it must be interpreted within individual patient context.

**Biochemistry of Glycation:**

*Non-enzymatic Glycation Process:*
1. Glucose enters red blood cells
2. Reversible Schiff base formation with hemoglobin N-terminus
3. Amadori rearrangement to stable ketoamine
4. Accumulation throughout RBC lifespan

*Measurement Methods:*
- High-performance liquid chromatography (HPLC) - reference method
- Immunoassay
- Boronate affinity
- Enzymatic assays

*NGSP Standardization:*
- National Glycohemoglobin Standardization Program
- Traceability to DCCT reference
- CV targets <3%

**Evidence Base for A1C Targets:**

*Landmark Trials:*

| Trial | Population | Key Finding |
|-------|------------|-------------|
| DCCT | Type 1 | Intensive control reduced microvascular complications 50-76% |
| UKPDS | Type 2, newly diagnosed | Each 1% A1C reduction: 37% microvascular risk reduction |
| ACCORD | Type 2, high CVD risk | Intensive control (A1C 6.4%) increased mortality |
| ADVANCE | Type 2, high CVD risk | Intensive control reduced nephropathy |
| VADT | Type 2, poorly controlled | No significant CVD reduction; hypoglycemia risk |

*Meta-analyses Conclusions:*
- Clear microvascular benefit from lower A1C
- Modest macrovascular benefit, especially early in disease
- Hypoglycemia risk increases with intensive control
- Individual risk-benefit assessment essential

**Individualized Target Framework:**

*Patient-Centered Factors:*
\`\`\`
                    Tighter Target        Less Stringent Target
                    (6.0-6.5%)            (7.5-8.5%)
                         ↑                      ↑
Hypoglycemia Risk:    Low                     High
Disease Duration:     Short                   Long
Life Expectancy:      Long                    Limited
Complications:        None                    Advanced
Comorbidities:        Few                     Multiple
Resources/Support:    Available               Limited
Patient Preference:   Motivated               Concerned about burden
\`\`\`

**A1C Limitations and Alternatives:**

*Conditions Affecting A1C:*
| Condition | Effect on A1C |
|-----------|---------------|
| Hemoglobinopathies | Variable |
| Anemia (hemolytic, iron deficiency) | Decreased |
| Chronic kidney disease | Variable |
| Pregnancy | Decreased |
| Recent transfusion | Decreased |
| Splenectomy | Increased |

*Alternative Glycemic Markers:*
- **Fructosamine**: Reflects 2-3 weeks; useful in conditions affecting A1C
- **Glycated albumin**: Reflects 2-3 weeks; useful in dialysis
- **1,5-Anhydroglucitol**: Marker of recent hyperglycemia

**CGM Metrics Complementing A1C:**

| Metric | Target | Relationship to A1C |
|--------|--------|---------------------|
| Time in Range (70-180) | >70% | Correlates with A1C |
| GMI | Individual | Estimated A1C from CGM |
| Glycemic variability (CV) | <36% | Not captured by A1C |

**Clinical Implementation:**

*Shared Decision-Making:*
1. Discuss current A1C and trend
2. Review benefits and risks of targets
3. Assess patient factors affecting target
4. Agree on individualized goal
5. Plan treatment adjustments
6. Schedule follow-up testing

*Treatment Intensification:*
- Consider if A1C above target
- Assess adherence and barriers first
- Add or adjust medications systematically
- Monitor for hypoglycemia
- Reassess target if goals not achievable safely`,
      keyTerms: [
        { term: 'NGSP', definition: 'National Glycohemoglobin Standardization Program ensuring A1C measurement accuracy' },
        { term: 'glycemic legacy', definition: 'Long-term benefit of early intensive glycemic control, persisting even after relaxation of control' },
        { term: 'treat-to-target', definition: 'Approach systematically adjusting therapy to achieve individualized glycemic goals' },
        { term: 'fructosamine', definition: 'Glycated serum protein reflecting shorter-term (2-3 week) glucose control' },
      ],
      clinicalNotes: 'A1C targets should be individualized through shared decision-making. The ACCORD trial demonstrated risks of aggressive A1C lowering in high-risk patients. CGM metrics (Time in Range) increasingly supplement A1C for comprehensive glycemic assessment. Reassess targets periodically as patient circumstances change.',
    },
    4: {
      level: 4,
      summary: 'A1C represents integrated glycemic exposure and remains the cornerstone of diabetes outcome prediction, though optimal targets require integration of patient phenotype, treatment risks, and emerging metrics of glycemic quality beyond average glucose.',
      explanation: `**Glycation Biology:**

*Advanced Glycation:*
The Maillard reaction between glucose and proteins extends beyond hemoglobin, producing advanced glycation end products (AGEs) implicated in vascular complications.

*AGE Formation Pathway:*
\`\`\`
Glucose + Protein → Schiff Base (reversible)
                  → Amadori Product (stable)
                  → AGEs (irreversible cross-links)
                        ↓
            Receptor Activation (RAGE)
                        ↓
         Inflammation, Oxidative Stress
                        ↓
              Vascular Complications
\`\`\`

**A1C and Complications:**

*Continuous Risk Relationship:*
- No threshold below which risk disappears
- Each 1% A1C increase: ~15-30% increased complication risk
- Risk begins below diabetes diagnostic threshold
- Long-term exposure (glycemic memory) affects outcomes

*Pathophysiological Mechanisms:*
| A1C Level | Microvascular | Macrovascular |
|-----------|---------------|---------------|
| <6% | Minimal risk | Optimal |
| 6-7% | Low risk | Near optimal |
| 7-8% | Moderate risk | Increased risk |
| >8% | High risk | Significantly increased |

**Glycemic Variability:**

*Beyond Mean Glucose:*
- A1C reflects average but not variability
- High glycemic variability independently associated with complications
- Oxidative stress from glucose fluctuations
- CGM enables variability assessment

*Metrics of Variability:*
| Metric | Calculation | Target |
|--------|-------------|--------|
| Standard Deviation | √(Σ(xi-x̄)²/n) | <1/3 of mean |
| Coefficient of Variation | SD/Mean × 100 | <36% |
| MAGE | Mean of excursions >1 SD | Minimize |
| MODD | Mean absolute difference of daily profiles | Minimize |

**Glycemic Quality Concept:**

*Components:*
1. Average glucose (A1C)
2. Glycemic variability (CV)
3. Time in range distribution
4. Hypoglycemia frequency/severity
5. Time in hyperglycemia

*Ambulatory Glucose Profile Integration:*
\`\`\`
Comprehensive Glycemic Assessment:
   A1C (average) + TIR (time-based) + CV (variability)
                    ↓
        Complete glycemic phenotype
                    ↓
        Individualized management strategy
\`\`\`

**Phenotype-Specific Targets:**

*Type 1 Diabetes:*
- A1C <7% with TIR >70%
- Minimize time <70 mg/dL (<4%)
- Technology to reduce variability
- Flexible targets based on hypoglycemia risk

*Type 2 Diabetes:*
- Individualized A1C target
- Consider CVD risk reduction
- Balance with hypoglycemia and weight
- Assess treatment sustainability

*Special Populations:*
| Population | Considerations |
|------------|----------------|
| Elderly | Function, cognition, life expectancy |
| Pregnancy | Tight control with hypoglycemia avoidance |
| CKD | A1C limitations, hypoglycemia risk |
| Hospital | Relaxed targets, reduce hypo- and hyperglycemia |

**Treatment Implications:**

*Medication Selection for A1C Target:*
- GLP-1 RA: A1C lowering with CVD/weight benefit
- SGLT2i: A1C lowering with CV/renal protection
- DPP4i: Modest A1C lowering, weight neutral
- Insulin: Potent A1C lowering, hypoglycemia risk
- Metformin: First-line, modest A1C effect

*De-intensification:*
- Consider in overtreatment
- After hypoglycemia events
- Changed patient circumstances
- End-of-life transitions`,
      keyTerms: [
        { term: 'advanced glycation end products (AGEs)', definition: 'Irreversible protein modifications from chronic hyperglycemia that contribute to vascular damage' },
        { term: 'glycemic memory', definition: 'Persistent effect of prior glycemic control on complication risk, even after improved control' },
        { term: 'glycemic quality', definition: 'Comprehensive assessment including average glucose, variability, and time in different ranges' },
        { term: 'treatment de-intensification', definition: 'Reducing medication intensity when glycemic targets are exceeded or risks outweigh benefits' },
        { term: 'MAGE', definition: 'Mean Amplitude of Glycemic Excursions; measure of glucose variability' },
      ],
      clinicalNotes: 'A1C is necessary but not sufficient for complete glycemic assessment. Glycemic variability independently predicts complications. Consider both A1C and CGM metrics when available. Treatment de-intensification is appropriate when targets are exceeded or hypoglycemia risk is elevated.',
    },
    5: {
      level: 5,
      summary: 'Contemporary A1C targeting integrates precision medicine approaches, multi-dimensional glycemic metrics, and individualized risk-benefit analysis to optimize outcomes while minimizing treatment burden in diabetes management.',
      explanation: `**Evolution of Glycemic Targets:**

A1C targeting has evolved from uniform recommendations to individualized, multi-dimensional glycemic goals informed by patient phenotype, treatment characteristics, and emerging evidence.

**Precision Medicine in A1C Targeting:**

*Phenotype-Driven Approach:*
\`\`\`
Patient Assessment
        ↓
Diabetes Phenotype ← Genetic Risk Scores
        ↓          ← Biomarker Panels
Complication Risk  ← Comorbidity Profile
        ↓          ← Social Determinants
Individualized Target
        ↓
Treatment Selection
        ↓
Outcome Monitoring
\`\`\`

*Emerging Phenotyping Tools:*
- Genetic risk variants for complications
- Proteomics/metabolomics profiles
- Retinal imaging AI analysis
- Kidney function trajectories
- Cardiovascular risk algorithms

**Beyond A1C: Comprehensive Glycemic Assessment:**

*Multi-Dimensional Framework:*
| Dimension | Metric | Optimal Target |
|-----------|--------|----------------|
| Average | A1C, GMI | Individualized |
| Time | TIR 70-180 | >70% |
| Variability | CV | <36% |
| Hypoglycemia | TBR <70 | <4% |
| Hyperglycemia | TAR >180 | <25% |

*A1C-TIR Relationship:*
\`\`\`
A1C and TIR are correlated but not interchangeable:

- Same A1C can have different TIR
- TIR captures what A1C misses (variability, hypo)
- Both contribute to complication prediction
- CGM enables TIR assessment
\`\`\`

**Risk-Benefit Framework:**

*Benefit Assessment:*
- Complication risk reduction potential
- Cardiovascular benefit (medication-specific)
- Quality of life impact
- Patient values and goals

*Risk Assessment:*
- Hypoglycemia frequency and severity
- Weight implications
- Medication burden
- Financial impact
- Treatment adherence sustainability

*Decision Analysis:*
\`\`\`
Expected Benefit = Σ(Complication Risk Reduction × Utility)
Expected Harm = Σ(Treatment Risk × Disutility)

Optimal Target: Maximize (Benefit - Harm)
\`\`\`

**Technology Integration:**

*CGM-Informed Target Setting:*
- Real-time glucose data
- Trend analysis
- Pattern identification
- Personalized alerts
- Retrospective review

*Decision Support Systems:*
- Algorithm-generated recommendations
- Patient-specific risk calculators
- Treatment optimization models
- Automated alerts for target deviation

**Special Clinical Scenarios:**

*Discordant A1C and CGM:*
| Situation | Cause | Approach |
|-----------|-------|----------|
| High A1C, good TIR | A1C artifact, hidden hyper | Investigate A1C validity |
| Low A1C, poor TIR | High variability, frequent hypo | Focus on TIR, reduce hypo |
| A1C-GMI mismatch | A1C affecting condition | Use CGM as primary metric |

*Treatment-Specific Considerations:*
- GLP-1 RA: Achieves both A1C and TIR improvement
- SGLT2i: Modest A1C, significant CV/renal benefit
- Closed-loop systems: High TIR with low burden
- Intensive insulin: Potent A1C lowering with hypo risk

**Implementation Science:**

*Barriers to Individualization:*
- Time constraints in clinical encounters
- Guideline rigidity
- Quality metric pressures
- Patient preference assessment difficulty
- Technology access disparities

*Facilitators:*
- Decision support tools
- Pre-visit planning
- Team-based care
- Patient activation
- Policy alignment

**Future Directions:**

*Research Priorities:*
- Optimal TIR targets for outcomes
- Glycemic variability interventions
- AI-driven target optimization
- Long-term CGM outcome data
- Health equity in target achievement

*Emerging Concepts:*
- Continuous A1C monitoring
- Personalized target trajectories
- Adaptive targets over disease course
- Non-glycemic factor integration
- Outcome-based (rather than process-based) goals`,
      keyTerms: [
        { term: 'Glucose Management Indicator (GMI)', definition: 'Estimated A1C calculated from CGM mean glucose, useful when traditional A1C may be inaccurate' },
        { term: 'precision diabetes medicine', definition: 'Individualized treatment approach based on patient-specific biological, behavioral, and social factors' },
        { term: 'glycemic phenotype', definition: 'Characterization of individual glucose patterns, variability, and treatment responses' },
        { term: 'treatment inertia', definition: 'Delay in treatment intensification despite not meeting glycemic targets' },
        { term: 'discordance', definition: 'Mismatch between A1C and CGM-derived metrics suggesting A1C may not accurately reflect glycemia' },
      ],
      clinicalNotes: 'A1C remains essential but increasingly supplemented by CGM metrics. GMI can replace A1C when confounding conditions exist. Time in Range targets complement A1C goals. Treatment selection should consider both glycemic and non-glycemic benefits. Quality metrics based solely on A1C may not capture comprehensive glycemic care quality.',
    },
  },

  media: [
    {
      id: 'a1c-chart',
      type: 'diagram',
      filename: 'a1c-blood-sugar-chart.svg',
      title: 'A1C and Average Blood Sugar',
      description: 'Visual chart showing relationship between A1C and average blood sugar',
    },
    {
      id: 'a1c-target-factors',
      type: 'diagram',
      filename: 'a1c-target-individualization.svg',
      title: 'Factors for A1C Target Individualization',
      description: 'Decision framework for setting personalized A1C goals',
    },
  ],

  citations: [
    {
      id: 'ada-glycemic-targets',
      type: 'article',
      title: 'Glycemic Targets: Standards of Medical Care in Diabetes',
      source: 'Diabetes Care, American Diabetes Association',
    },
    {
      id: 'dcct-ukpds',
      type: 'article',
      title: 'DCCT/EDIC Research Group and UKPDS Group',
      source: 'New England Journal of Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'diabetes-blood-sugar-monitoring', targetType: 'topic', relationship: 'related', label: 'Blood Sugar Monitoring' },
    { targetId: 'diabetes-complication-prevention', targetType: 'topic', relationship: 'related', label: 'Complication Prevention' },
    { targetId: 'diabetes-diet-carb-counting', targetType: 'topic', relationship: 'related', label: 'Diet and Carb Counting' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['diabetes', 'glycemic control', 'treatment targets'],
    keywords: ['A1C', 'hemoglobin A1C', 'glycemic targets', 'diabetes management'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
