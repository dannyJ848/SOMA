/**
 * Risk Factor Modification in Cardiac Rehabilitation - Educational Content
 */

import { EducationalContent } from '../../types';

export const riskFactorModificationCardiac: EducationalContent = {
  id: 'rehab-risk-factor-modification-cardiac',
  type: 'concept',
  name: 'Risk Factor Modification in Cardiac Rehabilitation',
  alternateNames: ['Cardiovascular Risk Reduction', 'Secondary Prevention'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac rehabilitation helps you change habits like smoking, poor diet, and not exercising to prevent future heart problems.',
      explanation: `After a heart problem, it is important to change things in your life that can harm your heart. Cardiac rehabilitation helps you make these changes.

**Risk factors you can change:**
- **Smoking**: Quitting smoking is the most important thing you can do
- **Diet**: Eating healthier foods
- **Exercise**: Being more active
- **Weight**: Reaching a healthy weight
- **Stress**: Learning to manage stress better

**Why does this matter?**
These changes can:
- Prevent another heart attack
- Help you live longer
- Make you feel better

**How does cardiac rehab help?**
- Classes teach you about healthy choices
- Staff help you set goals
- Support groups keep you motivated`,
      keyTerms: [
        { term: 'risk factor', definition: 'Something that increases your chance of getting a disease' },
        { term: 'lifestyle change', definition: 'Making different choices about how you live' },
        { term: 'prevention', definition: 'Stopping something bad from happening' },
      ],
      analogies: [
        'Risk factors are like warning lights on a car dashboard - they tell you something needs attention.',
      ],
      examples: [
        'Someone quits smoking after their heart attack and lowers their risk of another one.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac rehabilitation provides structured education and support to modify cardiovascular risk factors including smoking, diet, obesity, hypertension, diabetes, and hyperlipidemia.',
      explanation: `Risk factor modification is a core component of cardiac rehabilitation, aiming to slow disease progression and prevent future events.

**Major Modifiable Risk Factors:**

**Smoking Cessation:**
- Single most important intervention
- 50% risk reduction within 1 year of quitting
- Counseling and medication support offered
- Includes secondhand smoke avoidance

**Diet and Nutrition:**
- Mediterranean or DASH diet recommended
- Reduce saturated and trans fats
- Increase fruits, vegetables, whole grains
- Limit sodium to <2300 mg/day
- Individualized counseling by dietitian

**Physical Activity:**
- 150 minutes moderate or 75 minutes vigorous per week
- Reduce sedentary time
- Include resistance training
- Continue activity after program ends

**Weight Management:**
- Target BMI 18.5-24.9 kg/m2
- Waist circumference targets
- Behavioral strategies
- Consider referral for severe obesity

**Blood Pressure:**
- Target <130/80 mmHg for most
- Medication adherence
- Lifestyle modifications (DASH diet, sodium restriction)
- Home monitoring education

**Cholesterol:**
- LDL targets based on risk
- Statin therapy for most cardiac patients
- Diet modifications
- Medication adherence support

**Diabetes Management:**
- Blood sugar control
- HbA1c targets
- Medication management
- Diabetes education

**Psychosocial Factors:**
- Depression and anxiety screening
- Stress management
- Social support
- Mental health referral if needed`,
      keyTerms: [
        { term: 'secondary prevention', definition: 'Preventing recurrence or progression of existing disease' },
        { term: 'DASH diet', definition: 'Dietary Approaches to Stop Hypertension - eating plan to lower blood pressure' },
        { term: 'LDL cholesterol', definition: 'Low-density lipoprotein - the "bad" cholesterol that builds up in arteries' },
        { term: 'HbA1c', definition: 'Hemoglobin A1c - blood test showing average blood sugar over 3 months' },
      ],
      analogies: [
        'Managing risk factors is like maintaining a car - regular care prevents bigger problems.',
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive risk factor modification in cardiac rehabilitation targets multiple cardiovascular risk factors simultaneously through evidence-based behavioral interventions and medication optimization.',
      explanation: `## Evidence for Risk Factor Modification

**Impact on Outcomes:**
- 50% reduction in mortality with comprehensive secondary prevention
- Each risk factor addressed provides incremental benefit
- Combined lifestyle interventions more effective than single changes

## Smoking Cessation

**Intervention Strategies:**
- Brief advice (effective even if brief)
- Behavioral counseling (individual or group)
- Pharmacotherapy:
  - Nicotine replacement (patch, gum, lozenge)
  - Varenicline (Chantix)
  - Bupropion

**Success Rates:**
- Combination behavioral + pharmacological: 30-40% at 1 year
- Most patients require multiple quit attempts
- Relapse prevention important

## Dietary Intervention

**Mediterranean Diet Evidence:**
- PREDIMED trial: 30% CVD event reduction
- Olive oil and nuts as key components
- Anti-inflammatory effects

**Recommendations:**
| Component | Target |
|-----------|--------|
| Saturated fat | <7% of calories |
| Trans fat | 0% |
| Sodium | <2300 mg/day (or <1500 if HTN) |
| Fiber | 25-30 g/day |
| Fish | 2+ servings/week |

## Lipid Management

**Statin Therapy:**
- High-intensity for most ASCVD patients
- Target 50% LDL reduction or LDL <70 mg/dL
- Address adherence barriers
- Manage side effects

**Additional Therapies:**
- Ezetimibe if LDL not at goal
- PCSK9 inhibitors for high-risk patients
- Omega-3 fatty acids (icosapent ethyl)

## Blood Pressure Management

**Lifestyle Modifications:**
- DASH diet: 11 mmHg SBP reduction
- Sodium restriction: 5-6 mmHg reduction
- Weight loss: 1 mmHg per kg lost
- Physical activity: 4-9 mmHg reduction
- Alcohol moderation: 2-4 mmHg reduction

**Medication Optimization:**
- Multiple classes often needed
- ACE inhibitors preferred for CAD
- Beta-blockers post-MI
- Adherence support critical

## Diabetes Management

**Targets:**
- HbA1c <7% for most (individualized)
- Consider SGLT2 inhibitors and GLP-1 agonists (CV benefit)
- Statin therapy regardless of lipid levels
- BP <130/80 mmHg

## Behavioral Strategies

**Motivational Interviewing:**
- Patient-centered approach
- Explore ambivalence
- Support self-efficacy
- Develop discrepancy

**Goal Setting:**
- SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)
- Patient-selected priorities
- Progressive targets`,
      keyTerms: [
        { term: 'ASCVD', definition: 'Atherosclerotic cardiovascular disease - includes coronary artery disease, stroke, PAD' },
        { term: 'PREDIMED', definition: 'Prevention with Mediterranean Diet trial demonstrating CVD reduction' },
        { term: 'PCSK9 inhibitors', definition: 'Injectable medications that significantly lower LDL cholesterol' },
        { term: 'motivational interviewing', definition: 'Counseling approach that enhances motivation for behavior change' },
      ],
      clinicalNotes: 'High-intensity statin therapy (atorvastatin 40-80mg, rosuvastatin 20-40mg) is recommended for all patients with clinical ASCVD regardless of baseline LDL. The 2018 ACC/AHA guidelines emphasize LDL thresholds for adding non-statin therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced risk factor management in cardiac rehabilitation integrates precision medicine approaches, polypharmacy optimization, and behavioral science to maximize individual risk reduction and address therapeutic inertia.',
      explanation: `## Precision Risk Assessment

**Risk Calculators:**
- ASCVD Pooled Cohort Equations
- SMART-REACH for secondary prevention
- Limitations in diverse populations
- May underestimate risk in recent ACS

**Risk-Enhancing Factors:**
- Lipoprotein(a)
- hs-CRP
- Coronary calcium score
- Ankle-brachial index
- Family history refinement

**Emerging Biomarkers:**
- Apolipoprotein B
- Oxidized LDL
- Inflammatory markers
- Genetic risk scores

## Lipid Management Advances

**Residual Risk:**
- Persistent risk despite optimal LDL
- Triglyceride-rich lipoproteins
- Lp(a) contribution
- Inflammation (CANTOS trial)

**Treatment Intensification:**
- Ezetimibe addition (IMPROVE-IT)
- PCSK9 inhibitors (FOURIER, ODYSSEY)
- Icosapent ethyl (REDUCE-IT)
- Bempedoic acid for statin intolerance

**Very Low LDL Targets:**
- LDL <55 mg/dL for very high risk
- LDL <40 mg/dL studied (no safety concerns)
- European guidelines more aggressive

## Blood Pressure Refinement

**Measurement Quality:**
- Out-of-office measurement importance
- White coat vs masked hypertension
- 24-hour ambulatory monitoring
- Home BP monitoring protocols

**Individualized Targets:**
- SPRINT trial: <120 mmHg systolic intensive target beneficial
- Post-ACS: careful with hypotension
- Elderly: individualized approach
- CKD: target considerations

## Diabetes in CVD

**Cardioprotective Agents:**
- SGLT2 inhibitors (empagliflozin, dapagliflozin)
  - CV death reduction
  - HF hospitalization reduction
  - Renal protection
- GLP-1 receptor agonists (liraglutide, semaglutide)
  - CV event reduction
  - Weight loss benefits

**Glycemic Targets:**
- Individualized HbA1c targets
- Avoid hypoglycemia
- Address weight with agent selection

## Polypharmacy Management

**Common Medications Post-ACS:**
- Dual antiplatelet therapy
- High-intensity statin
- ACE inhibitor or ARB
- Beta-blocker
- Additional based on comorbidities

**Adherence Strategies:**
- Pill organizers
- Simplified regimens
- Cost considerations
- Education on importance

## Behavioral Science Applications

**Social Cognitive Theory:**
- Self-efficacy enhancement
- Outcome expectations
- Observational learning
- Social support

**Health Belief Model:**
- Perceived susceptibility
- Perceived severity
- Perceived benefits/barriers
- Cues to action

**Implementation Intentions:**
- "When-then" planning
- Specific action plans
- Environmental restructuring`,
      keyTerms: [
        { term: 'therapeutic inertia', definition: 'Failure to intensify treatment when targets are not met' },
        { term: 'Lipoprotein(a)', definition: 'Genetically determined lipoprotein associated with CVD risk, not lowered by statins' },
        { term: 'residual risk', definition: 'Cardiovascular risk remaining after standard treatment' },
        { term: 'implementation intentions', definition: 'Specific plans linking situational cues to goal-directed behaviors' },
      ],
      clinicalNotes: 'SGLT2 inhibitors and GLP-1 agonists have demonstrated cardiovascular benefit independent of glucose lowering and should be prioritized in diabetic patients with ASCVD. This represents a paradigm shift in diabetes management for cardiac patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiovascular risk modification research explores genetic risk stratification, novel therapeutic targets, digital health interventions, and health systems approaches to optimize secondary prevention at individual and population levels.',
      explanation: `## Precision Medicine Approaches

**Polygenic Risk Scores:**
- Genome-wide association studies integration
- Risk stratification beyond traditional factors
- Potential to identify high-risk individuals
- Clinical implementation challenges

**Pharmacogenomics:**
- Clopidogrel metabolism (CYP2C19)
- Statin-induced myopathy risk (SLCO1B1)
- Warfarin dosing
- Clinical utility evolving

**Metabolomics and Proteomics:**
- Novel biomarker discovery
- Risk prediction refinement
- Treatment response prediction
- Research applications currently

## Novel Therapeutic Targets

**Inflammation:**
- CANTOS: IL-1beta inhibition reduced events
- COLCOT: Colchicine post-MI
- Low-dose colchicine emerging
- Targeted anti-inflammatory approaches

**Lipoprotein(a):**
- Inherited, minimally modifiable with lifestyle
- Antisense oligonucleotides in trials
- PCSK9 inhibitors provide modest reduction
- Lp(a) >50 mg/dL increases risk

**Triglycerides:**
- REDUCE-IT: Icosapent ethyl benefit
- Mechanism: anti-inflammatory beyond TG lowering
- Role of omega-3s refined

## Digital Health Interventions

**Mobile Applications:**
- Medication reminders
- Dietary tracking
- Physical activity monitoring
- Symptom reporting

**Wearables Integration:**
- Continuous activity data
- Heart rate trends
- Sleep monitoring
- Feedback loops

**Remote Monitoring:**
- Home BP transmission
- Weight monitoring for HF
- Glucose data sharing
- Telehealth integration

**Evidence:**
- Mixed results for mHealth interventions
- Engagement challenges
- Combination with coaching more effective
- Implementation barriers

## Health Systems Approaches

**Quality Improvement:**
- Registry-based care (NCDR)
- Audit and feedback
- Clinical decision support
- Performance metrics

**Care Coordination:**
- Transition care models
- Nurse care managers
- Pharmacist involvement
- Primary care integration

**Population Health:**
- Risk stratification tools
- Proactive outreach
- Social determinants consideration
- Value-based care alignment

## Disparities in Secondary Prevention

**Observed Gaps:**
- Lower statin use in women
- Racial/ethnic disparities in risk factor control
- Socioeconomic gradient in outcomes
- Rural access limitations

**Interventions:**
- Community health workers
- Culturally tailored programs
- Transportation assistance
- Medication assistance programs

## Future Directions

**Research Priorities:**
- Optimal polypill approaches
- Cost-effective interventions
- Long-term maintenance strategies
- Real-world effectiveness studies

**Implementation Science:**
- Scaling evidence-based interventions
- Addressing healthcare system barriers
- Policy implications
- Health equity focus`,
      keyTerms: [
        { term: 'polygenic risk score', definition: 'Composite genetic risk estimate based on many genetic variants' },
        { term: 'CANTOS', definition: 'Canakinumab Anti-inflammatory Thrombosis Outcomes Study - showed inflammation as CV target' },
        { term: 'SLCO1B1', definition: 'Gene affecting statin transport, variants increase myopathy risk' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
      ],
      clinicalNotes: 'The CANTOS trial demonstrated that targeting inflammation (IL-1beta) reduces cardiovascular events independent of lipid lowering, validating inflammation as a therapeutic target. Low-dose colchicine (COLCOT, LoDoCo2 trials) offers a practical, affordable anti-inflammatory option post-MI.',
    },
  },

  media: [
    {
      id: 'cv-risk-factors-diagram',
      type: 'diagram',
      filename: 'cv-risk-factors.svg',
      title: 'Modifiable Cardiovascular Risk Factors',
      description: 'Visual overview of cardiovascular risk factors addressed in rehabilitation',
    },
  ],

  citations: [
    {
      id: 'acc-aha-secondary-prevention',
      type: 'article',
      title: 'ACC/AHA Guideline on the Primary Prevention of Cardiovascular Disease',
      authors: ['Arnett, D.K.', 'et al.'],
      source: 'Circulation',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-cardiac-rehabilitation-program', targetType: 'topic', relationship: 'parent', label: 'Cardiac Rehabilitation Program' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['rehabilitation', 'risk factors', 'secondary prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default riskFactorModificationCardiac;
