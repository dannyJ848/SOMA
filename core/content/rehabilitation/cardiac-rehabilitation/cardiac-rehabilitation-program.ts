/**
 * Cardiac Rehabilitation Program - Comprehensive Educational Content
 *
 * Covers the fundamentals of cardiac rehabilitation programs.
 */

import { EducationalContent } from '../../types';

export const cardiacRehabilitationProgram: EducationalContent = {
  id: 'rehab-cardiac-rehabilitation-program',
  type: 'concept',
  name: 'Cardiac Rehabilitation Program',
  alternateNames: ['Cardiac Rehab', 'Heart Rehabilitation'],

  levels: {
    1: {
      level: 1,
      summary: 'Cardiac rehabilitation is a supervised exercise and education program that helps your heart get stronger after a heart problem.',
      explanation: `If you have had a heart attack, heart surgery, or other heart problems, cardiac rehabilitation (cardiac rehab) can help you recover and stay healthy.

**What is cardiac rehab?**
A program where you:
- Exercise safely with trained staff watching
- Learn about keeping your heart healthy
- Get support for making lifestyle changes

**What happens in the program?**
- **Exercise sessions**: Walking, biking, or other activities while your heart is monitored
- **Education classes**: Learning about healthy eating, stress, and medications
- **Support**: Meeting others going through similar experiences

**Why is it helpful?**
- Makes your heart stronger
- Gives you more energy
- Helps you feel confident about being active
- Reduces the chance of future heart problems

**Is it safe?**
Yes! Trained staff watch you closely and can help if any problems occur. The exercises are designed just for you.`,
      keyTerms: [
        { term: 'cardiac', definition: 'Related to the heart' },
        { term: 'rehabilitation', definition: 'Treatment to help you recover and get stronger' },
        { term: 'monitored', definition: 'Watched carefully to make sure you are safe' },
      ],
      analogies: [
        'Cardiac rehab is like having a personal trainer who specializes in heart health.',
        'Your heart is a muscle, and cardiac rehab helps it get stronger like exercising any other muscle.',
      ],
      examples: [
        'After a heart attack, someone attends cardiac rehab three times a week to exercise on a treadmill while nurses monitor their heart.',
        'A person who had bypass surgery learns about heart-healthy foods in a cardiac rehab class.',
      ],
    },
    2: {
      level: 2,
      summary: 'Cardiac rehabilitation is a comprehensive program including supervised exercise, education, and counseling designed to improve cardiovascular health and reduce the risk of future cardiac events.',
      explanation: `Cardiac rehabilitation is a medically supervised program for people with heart disease. It combines exercise training, education, and psychological support.

**Who Should Attend Cardiac Rehab?**
- Heart attack survivors
- After coronary artery bypass surgery
- After angioplasty or stent placement
- Heart failure patients (stable)
- After heart valve repair or replacement
- After heart transplant
- Stable angina

**Core Components:**

**1. Medical Evaluation**
- Assessment of cardiovascular status
- Risk stratification
- Exercise capacity testing

**2. Physical Activity Counseling**
- Individualized exercise prescription
- Supervised exercise sessions
- Progress monitoring

**3. Nutritional Counseling**
- Heart-healthy eating patterns
- Weight management
- Sodium and fat reduction

**4. Risk Factor Management**
- Blood pressure control
- Cholesterol management
- Diabetes management
- Smoking cessation

**5. Psychosocial Support**
- Stress management
- Depression and anxiety screening
- Support groups

**Benefits of Cardiac Rehab:**
- 20-30% reduction in death rate
- Fewer hospital readmissions
- Improved quality of life
- Better exercise capacity
- Lower depression and anxiety
- Return to work and activities

**Program Duration:**
- Typically 12-36 sessions
- 3 sessions per week
- Each session 30-60 minutes of exercise
- Total program 6-12 weeks`,
      keyTerms: [
        { term: 'risk stratification', definition: 'Assessing how likely someone is to have a problem, to guide treatment' },
        { term: 'exercise prescription', definition: 'A specific exercise plan designed for an individual\'s needs' },
        { term: 'coronary artery bypass', definition: 'Heart surgery that creates new routes for blood to flow around blocked arteries' },
        { term: 'angioplasty', definition: 'Procedure using a balloon to open blocked arteries' },
      ],
      analogies: [
        'Cardiac rehab is like a one-stop shop for heart health - you get exercise, education, and support all in one place.',
        'Risk stratification is like a weather forecast for your heart health - it helps predict problems so you can prepare.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac rehabilitation delivers secondary prevention through structured exercise training, patient education, and psychosocial intervention, with strong evidence for mortality reduction and cost-effectiveness.',
      explanation: `## Evidence Base

**Mortality Reduction:**
- Meta-analyses show 20-30% reduction in all-cause mortality
- Similar reduction in cardiac mortality
- Reduced hospital readmissions
- Improved quality of life measures

**Cochrane Review Findings:**
- Exercise-based cardiac rehab reduces cardiovascular mortality
- Reduces hospital admissions
- Improves quality of life
- Benefits independent of diagnosis or program type

## Program Phases

**Phase I: Inpatient**
- Begins in hospital after cardiac event
- Early mobilization
- Patient education
- Discharge planning

**Phase II: Outpatient (Early)**
- Supervised exercise (typically 36 sessions)
- ECG monitoring
- Structured education
- Risk factor modification begins

**Phase III: Maintenance**
- Continued exercise (often less supervised)
- Long-term lifestyle modification
- Community-based programs
- Ongoing risk factor management

## Risk Stratification

| Risk Level | Criteria | Monitoring |
|------------|----------|------------|
| Low | Normal EF, no ischemia, no arrhythmias | Minimal |
| Moderate | EF 40-49%, mild ischemia | Intermittent |
| High | EF <40%, significant ischemia, arrhythmias | Continuous |

## Exercise Training Specifics

**Components:**
- Aerobic training (primary focus)
- Resistance training (important adjunct)
- Flexibility training
- Warm-up and cool-down

**Aerobic Prescription:**
- Frequency: 3-5 days/week
- Intensity: 40-80% VO2 peak or HR reserve
- Duration: 20-60 minutes
- Mode: Walking, cycling, arm ergometry

**Resistance Training:**
- 2-3 days/week (non-consecutive)
- 8-10 exercises
- 10-15 repetitions
- Low-moderate intensity

## Education Topics

- Heart disease pathophysiology
- Medication management
- Symptom recognition
- Diet and nutrition
- Physical activity guidelines
- Stress management
- Smoking cessation
- Return to work and sexual activity`,
      keyTerms: [
        { term: 'secondary prevention', definition: 'Interventions to prevent recurrence or worsening of existing disease' },
        { term: 'ejection fraction', definition: 'Percentage of blood pumped out of the heart with each beat, measure of heart function', pronunciation: 'ee-JEK-shun FRAK-shun' },
        { term: 'VO2 peak', definition: 'Maximum oxygen consumption, measure of cardiovascular fitness' },
        { term: 'heart rate reserve', definition: 'Difference between maximum and resting heart rate, used for exercise prescription' },
      ],
      clinicalNotes: 'Despite strong evidence, cardiac rehabilitation is underutilized. Referral rates are around 50% and participation rates are even lower, particularly among women, elderly, and minority populations. Automatic referral systems can improve utilization.',
    },
    4: {
      level: 4,
      summary: 'Cardiac rehabilitation programs optimize cardiovascular outcomes through individualized, ECG-monitored exercise prescription, comprehensive secondary prevention, and attention to barriers to participation and adherence.',
      explanation: `## Exercise Physiology in Cardiac Disease

**Adaptations to Training:**
- Improved endothelial function
- Enhanced autonomic balance (increased HRV)
- Reduced myocardial oxygen demand
- Improved skeletal muscle oxidative capacity
- Anti-inflammatory effects
- Improved collateral circulation

**Mechanisms of Mortality Benefit:**
- Reduced arrhythmia risk
- Improved plaque stability
- Better risk factor control
- Psychosocial benefits
- Enhanced fibrinolysis

## Advanced Exercise Prescription

**Determining Exercise Intensity:**
- Cardiopulmonary exercise testing (gold standard)
- HR at ventilatory threshold
- Heart rate reserve method (Karvonen)
- Rating of perceived exertion (Borg scale)
- Talk test

**Interval Training:**
- High-intensity interval training (HIIT)
- Greater VO2 peak improvements
- Superior endothelial function gains
- Increasingly used in cardiac rehab
- Appropriate patient selection important

**Special Populations:**
- Heart failure with reduced EF (HFrEF)
- Heart failure with preserved EF (HFpEF)
- Post-transplant
- Ventricular assist devices
- Pulmonary hypertension

## Psychosocial Assessment and Intervention

**Depression:**
- Prevalence 15-20% post-MI
- Associated with poor outcomes
- Screening with PHQ-9
- Treatment improves prognosis

**Anxiety:**
- Common post-cardiac event
- May limit physical activity
- Addressed through education and support
- Referral for severe cases

**Sexual Counseling:**
- Often neglected component
- Return to sexual activity guidance
- Typically safe when can climb two flights of stairs
- Medication interactions (nitrates and PDE5 inhibitors)

## Barriers and Solutions

**Patient Barriers:**
- Transportation
- Work obligations
- Lack of understanding of benefits
- Comorbidities
- Depression/low motivation

**System Barriers:**
- Lack of referral
- Geographic distance
- Insurance coverage
- Limited program availability

**Solutions:**
- Automatic referral systems
- Home-based alternatives
- Telehealth/virtual programs
- Hybrid models
- Patient navigators

## Outcomes Assessment

**Functional:**
- 6-minute walk test
- Cardiopulmonary exercise test
- Duke Activity Status Index

**Quality of Life:**
- SF-36
- HeartQoL
- MacNew Heart Disease Questionnaire

**Clinical:**
- Mortality
- Hospitalization
- Revascularization
- Risk factor targets`,
      keyTerms: [
        { term: 'heart rate variability', definition: 'Beat-to-beat variation in heart rate, marker of autonomic function' },
        { term: 'ventilatory threshold', definition: 'Exercise intensity where breathing increases disproportionately to oxygen uptake' },
        { term: 'Karvonen method', definition: 'Exercise intensity formula using percentage of heart rate reserve' },
        { term: 'HIIT', definition: 'High-intensity interval training - alternating high and moderate intensity exercise' },
      ],
      clinicalNotes: 'Home-based cardiac rehabilitation has been shown to be as effective as center-based programs in meta-analyses, with similar improvements in exercise capacity, quality of life, and cardiac risk factors. This offers an important alternative for patients with access barriers.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiac rehabilitation research focuses on precision approaches, novel delivery models, integration with digital health, and extending benefits to underserved populations and broader cardiovascular disease phenotypes.',
      explanation: `## Precision Cardiac Rehabilitation

**Phenotype-Based Approaches:**
- Frailty-adapted programs
- HFpEF-specific protocols
- Cognitive impairment considerations
- Sarcopenia-focused interventions

**Biomarker-Guided Exercise:**
- High-sensitivity troponin monitoring
- NT-proBNP guided intensity
- Inflammatory marker assessment
- Genetic factors in training response

## Alternative Delivery Models

**Home-Based Programs:**
- Equal efficacy to center-based
- Remote monitoring options
- Lower cost
- Better accessibility
- MULTIFIT, Heart Manual models

**Telehealth/Virtual:**
- Video-supervised exercise
- Wearable-based monitoring
- Mobile applications
- Accelerated during COVID-19

**Hybrid Models:**
- Combination of center and home-based
- Graduated transition
- Flexible scheduling
- Technology-enhanced

## Digital Health Integration

**Wearables:**
- Continuous heart rate monitoring
- Activity tracking
- ECG monitoring (Apple Watch, Kardia)
- Sleep quality assessment

**Mobile Applications:**
- Exercise guidance
- Medication reminders
- Symptom tracking
- Educational content

**Data Analytics:**
- Machine learning for risk prediction
- Personalized feedback
- Population health management
- Quality improvement

## Emerging Research Questions

**Exercise Dose:**
- Minimum effective dose
- Dose-response relationship
- Volume vs. intensity
- Long-term maintenance requirements

**Timing:**
- Early vs. delayed initiation
- Duration of programs
- Frequency of sessions
- Timing relative to revascularization

**Novel Interventions:**
- Mind-body interventions (yoga, tai chi)
- Cognitive training integration
- Social prescribing
- Environmental interventions

## Health Services Research

**Cost-Effectiveness:**
- Highly cost-effective intervention
- $4,950 per life-year gained
- Healthcare utilization reduction
- Productivity benefits

**Quality Metrics:**
- Participation rates
- Completion rates
- Risk factor achievement
- Patient-reported outcomes

**Policy Implications:**
- Reimbursement models
- Coverage expansion (ICM-CR, HFrEF)
- Performance measures
- Accreditation standards

## Disparities and Access

**Underrepresented Groups:**
- Women (lower referral and participation)
- Elderly
- Racial/ethnic minorities
- Rural populations
- Low socioeconomic status

**Strategies to Improve Equity:**
- Culturally tailored programs
- Community-based delivery
- Transportation solutions
- Language-appropriate materials
- Peer support programs

## Future Directions

**Research Priorities:**
- HFpEF-specific programs
- Very elderly/frail populations
- Digital health integration
- Maintenance of benefits
- Implementation science

**Program Evolution:**
- Risk-stratified intensity
- Personalized duration
- Technology-enhanced monitoring
- Value-based care models`,
      keyTerms: [
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction - common HF type where heart contracts normally but fills poorly' },
        { term: 'ICM-CR', definition: 'Intensive Cardiac Rehabilitation - extended program covered by Medicare for eligible patients' },
        { term: 'social prescribing', definition: 'Referral to non-medical community services to improve health and wellbeing' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
      ],
      clinicalNotes: 'Recent Medicare expansion has improved coverage for intensive cardiac rehabilitation (ICM-CR) and cardiac rehab for HFrEF patients. Automatic referral systems have been shown to increase enrollment by 50-80% and are recommended by ACC/AHA guidelines as a Class I intervention.',
    },
  },

  media: [
    {
      id: 'cardiac-rehab-phases',
      type: 'diagram',
      filename: 'cardiac-rehab-phases.svg',
      title: 'Phases of Cardiac Rehabilitation',
      description: 'Timeline showing phases I through III of cardiac rehabilitation',
    },
  ],

  citations: [
    {
      id: 'anderson-cochrane-cardiac-rehab',
      type: 'article',
      title: 'Exercise-based cardiac rehabilitation for coronary heart disease: Cochrane systematic review',
      authors: ['Anderson, L.', 'et al.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-exercise-prescription-cardiac', targetType: 'topic', relationship: 'child', label: 'Exercise Prescription in Cardiac Rehab' },
    { targetId: 'rehab-cardiac-rehab-phases', targetType: 'topic', relationship: 'child', label: 'Cardiac Rehab Phases' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['rehabilitation', 'cardiac', 'exercise', 'secondary prevention'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'cardiology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacRehabilitationProgram;
