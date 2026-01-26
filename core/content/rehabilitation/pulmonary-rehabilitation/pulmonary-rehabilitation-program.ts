/**
 * Pulmonary Rehabilitation Program - Educational Content
 */

import { EducationalContent } from '../../types';

export const pulmonaryRehabilitationProgram: EducationalContent = {
  id: 'rehab-pulmonary-rehabilitation-program',
  type: 'concept',
  name: 'Pulmonary Rehabilitation Program',
  alternateNames: ['Lung Rehabilitation', 'Respiratory Rehabilitation'],

  levels: {
    1: {
      level: 1,
      summary: 'Pulmonary rehabilitation is a program of exercise and education that helps people with lung problems breathe easier and be more active.',
      explanation: `If you have lung disease like COPD, emphysema, or other breathing problems, pulmonary rehabilitation can help you feel better and do more.

**What is pulmonary rehab?**
A special program that includes:
- Exercise training to make your body stronger
- Learning about your lung condition
- Breathing techniques to help you breathe easier
- Ways to save energy for daily activities

**Who can benefit?**
- People with COPD (chronic obstructive pulmonary disease)
- People with other lung diseases
- People who get short of breath easily

**What will you learn?**
- How to exercise safely
- Breathing methods that help
- How to use your inhaler correctly
- When to call for help

**Benefits:**
- Less shortness of breath
- More energy for daily activities
- Feeling better overall
- Fewer hospital visits`,
      keyTerms: [
        { term: 'pulmonary', definition: 'Related to the lungs' },
        { term: 'COPD', definition: 'Chronic obstructive pulmonary disease - a lung condition that makes breathing hard' },
        { term: 'shortness of breath', definition: 'Feeling like you cannot get enough air' },
      ],
      analogies: [
        'Pulmonary rehab is like gym class for your lungs - you learn exercises that help your whole body use oxygen better.',
      ],
      examples: [
        'A person with COPD learns to use pursed-lip breathing to catch their breath while walking.',
      ],
    },
    2: {
      level: 2,
      summary: 'Pulmonary rehabilitation combines supervised exercise training, education, and behavioral interventions to improve symptoms, functional capacity, and quality of life in patients with chronic respiratory disease.',
      explanation: `Pulmonary rehabilitation is an evidence-based intervention for patients with chronic lung disease, particularly COPD.

**Core Components:**

**1. Exercise Training**
- Aerobic exercise (walking, cycling)
- Strength training
- Upper extremity exercises
- Flexibility training

**2. Education**
- Understanding lung disease
- Medication management
- Breathing techniques
- Energy conservation
- Nutrition
- Psychosocial support

**3. Behavior Change**
- Smoking cessation
- Physical activity promotion
- Self-management skills
- Action plans for exacerbations

**Who Should Be Referred?**
- COPD (most common)
- Interstitial lung disease
- Pulmonary fibrosis
- Before or after lung surgery
- Asthma (severe)
- Pulmonary hypertension
- Cystic fibrosis

**Benefits Demonstrated by Research:**
- Reduced shortness of breath
- Improved exercise capacity (6-minute walk test)
- Better quality of life
- Reduced hospitalizations
- Decreased anxiety and depression
- Improved survival

**Program Structure:**
- Typically 2-3 sessions per week
- 6-12 weeks duration
- Supervised by respiratory therapists and physical therapists
- Often in hospital outpatient or clinic setting`,
      keyTerms: [
        { term: 'exacerbation', definition: 'A flare-up or worsening of a chronic condition', pronunciation: 'ex-ASS-er-BAY-shun' },
        { term: 'energy conservation', definition: 'Techniques to do activities with less effort' },
        { term: 'pursed-lip breathing', definition: 'Breathing out slowly through slightly closed lips to keep airways open longer' },
        { term: '6-minute walk test', definition: 'Standard test measuring how far someone can walk in 6 minutes' },
      ],
      analogies: [
        'Pulmonary rehab trains your body to be a more efficient car - getting more miles per gallon of oxygen.',
      ],
    },
    3: {
      level: 3,
      summary: 'Pulmonary rehabilitation delivers comprehensive, multidisciplinary interventions that improve exercise tolerance, reduce dyspnea, and decrease healthcare utilization in chronic respiratory disease through physiological and behavioral mechanisms.',
      explanation: `## Evidence Base

**Cochrane Reviews Findings:**
- Clinically significant improvement in dyspnea
- Increased exercise capacity (average 44m improvement in 6MWT)
- Improved health-related quality of life
- Reduced hospitalizations (NNT = 4 to prevent one admission)
- Effects persist beyond program duration

## Physiological Mechanisms

**Peripheral Adaptations:**
- Improved skeletal muscle oxidative capacity
- Increased mitochondrial density
- Enhanced muscle strength and endurance
- Reduced lactic acidosis at submaximal work

**Ventilatory Effects:**
- Improved breathing efficiency
- Reduced dynamic hyperinflation
- Optimized breathing pattern
- Enhanced respiratory muscle function

**Cardiovascular:**
- Improved cardiac output response to exercise
- Better oxygen delivery
- Reduced heart rate at matched workload

## Assessment

**Pre-Program Evaluation:**
- Pulmonary function tests (spirometry, lung volumes)
- Exercise capacity testing (6MWT, CPET)
- Symptom questionnaires (mMRC, CAT)
- Quality of life measures (SGRQ, CRQ)
- Nutritional status
- Psychosocial assessment

**Outcome Measures:**
| Measure | MCID |
|---------|------|
| 6-minute walk distance | 30-54 meters |
| SGRQ score | 4 points |
| CRQ dyspnea domain | 0.5 points |
| CAT score | 2 points |

## Exercise Training Specifics

**Aerobic Training:**
- Walking or cycling (lower extremity focus)
- Intensity: 60-80% of peak work rate
- Duration: 20-60 minutes
- Frequency: 3-5 times per week

**Resistance Training:**
- Major muscle groups
- 2-3 sets of 8-12 repetitions
- Progressive overload
- Particular attention to quadriceps

**Upper Extremity Training:**
- Arm ergometry
- Resistance exercises
- Important for ADL support

## Special Techniques

**Breathing Retraining:**
- Pursed-lip breathing
- Diaphragmatic breathing
- Paced breathing during activities

**Interval Training:**
- High-intensity intervals with rest
- May be better tolerated than continuous
- Similar or superior benefits

**Neuromuscular Electrical Stimulation:**
- For severely deconditioned patients
- Improves muscle strength
- Alternative when exercise not tolerated`,
      keyTerms: [
        { term: 'dynamic hyperinflation', definition: 'Air trapping during exercise causing increased lung volumes and breathlessness' },
        { term: 'SGRQ', definition: 'St. George\'s Respiratory Questionnaire - disease-specific quality of life measure' },
        { term: 'CAT', definition: 'COPD Assessment Test - 8-item symptom questionnaire' },
        { term: 'mMRC', definition: 'Modified Medical Research Council dyspnea scale' },
      ],
      clinicalNotes: 'Pulmonary rehabilitation has the highest level of evidence for improving dyspnea and quality of life in COPD (GOLD guidelines Grade A). Despite this, only ~3-16% of eligible patients are referred, representing a major implementation gap.',
    },
    4: {
      level: 4,
      summary: 'Advanced pulmonary rehabilitation integrates exercise physiology principles, phenotype-based interventions, and adjunctive therapies to optimize outcomes in increasingly complex chronic respiratory disease populations.',
      explanation: `## Exercise Prescription Refinement

**CPET-Based Prescription:**
- Ventilatory threshold identification
- Anaerobic threshold prescription
- Dynamic hyperinflation assessment
- Oxygen supplementation titration

**Intensity Determination:**
- Percentage of peak work rate (60-80%)
- Percentage of peak VO2
- Dyspnea-targeted (Borg 4-6)
- Heart rate methods limited by ventilatory limitation

**Interval vs. Continuous:**
- Interval may be superior for severe disease
- Allows higher training loads
- Better tolerated initially
- Both approaches effective

## Phenotype-Specific Approaches

**Severe COPD (FEV1 <30%):**
- Lower initial intensity
- Interval training preferred
- Consider supplemental oxygen
- NMES as adjunct

**Frequent Exacerbators:**
- Focus on self-management
- Early recognition skills
- Action plan development
- Close follow-up

**Frailty/Sarcopenia:**
- Nutritional intervention critical
- Resistance training emphasis
- Functional training
- Fall prevention

**Pulmonary Hypertension:**
- Careful monitoring
- Lower intensity
- Supervised setting essential
- Specific protocols emerging

## Adjunctive Interventions

**Supplemental Oxygen:**
- During exercise if SpO2 <88%
- May allow higher training intensity
- Effects on long-term outcomes unclear

**Heliox:**
- Reduces work of breathing
- Allows higher exercise intensity
- Limited practical application

**Non-Invasive Ventilation:**
- Unloads respiratory muscles during exercise
- May enhance training in severe disease
- Complex logistics

**Neuromuscular Electrical Stimulation (NMES):**
- Stimulates quadriceps contractions
- For patients unable to exercise conventionally
- Improves strength and function
- Bridge to active exercise

## Comorbidity Management

**Cardiovascular Disease:**
- Common comorbidity
- Integrated monitoring
- Cardiac rehabilitation overlap

**Anxiety/Depression:**
- High prevalence in COPD
- Psychosocial support essential
- Consider cognitive-behavioral approaches

**Musculoskeletal Issues:**
- Joint protection
- Alternative exercise modes
- Pain management

## Maintenance and Long-Term

**Post-Program Decline:**
- Benefits wane without maintenance
- Return to baseline by 12-18 months typical
- Maintenance programs needed

**Maintenance Strategies:**
- Supervised maintenance programs
- Home exercise programs
- Community exercise options
- Repeat rehabilitation courses`,
      keyTerms: [
        { term: 'NMES', definition: 'Neuromuscular electrical stimulation - electrical stimulation to contract muscles' },
        { term: 'heliox', definition: 'Helium-oxygen mixture reducing airway resistance' },
        { term: 'sarcopenia', definition: 'Loss of muscle mass and strength associated with aging or disease' },
        { term: 'ventilatory threshold', definition: 'Exercise intensity where ventilation increases disproportionately' },
      ],
      clinicalNotes: 'The decline in exercise capacity after pulmonary rehabilitation typically occurs within 6-12 months if maintenance exercise is not continued. Strategies to maintain benefits include supervised maintenance programs, home exercise, and repeat rehabilitation courses.',
    },
    5: {
      level: 5,
      summary: 'Contemporary pulmonary rehabilitation research explores precision phenotyping, telehealth delivery models, combination therapies, and implementation strategies to optimize and extend the benefits of this underutilized intervention.',
      explanation: `## Precision Rehabilitation

**Treatable Traits Approach:**
- Identify individual phenotypic characteristics
- Target specific deficits
- Personalized program components
- Optimize resource allocation

**Biomarker-Guided Therapy:**
- Inflammatory markers
- Muscle biomarkers
- Exacerbation prediction
- Response prediction

**Genetic Factors:**
- Alpha-1 antitrypsin deficiency considerations
- Exercise response variability
- Pharmacogenomic interactions

## Novel Delivery Models

**Telerehabilitation:**
- Video-supervised exercise
- Remote monitoring
- Equivalent outcomes in studies
- Improved access

**Home-Based Programs:**
- Unsupervised with structure
- Regular contact with team
- Technology-assisted
- Cost-effective alternative

**Community-Based:**
- Exercise in community settings
- Peer support groups
- Singing for breathing
- Tai chi and yoga adaptations

## Emerging Interventions

**Inspiratory Muscle Training:**
- Specific respiratory muscle conditioning
- Adjunct to whole-body training
- Improvements in dyspnea and exercise tolerance
- Optimal prescription under investigation

**Blood Flow Restriction Training:**
- Low-load exercise with partial occlusion
- Muscle gains with less ventilatory demand
- Emerging evidence in COPD
- Safety data accumulating

**Whole-Body Vibration:**
- Platform-based exercise
- May improve muscle function
- Limited evidence currently
- Ongoing research

## Combination Therapies

**Exercise + Pharmacotherapy:**
- Bronchodilators improve exercise tolerance
- LAMA/LABA during exercise
- Potential synergy

**Exercise + Nutrition:**
- Protein supplementation
- Leucine enrichment
- Essential amino acids
- Vitamin D optimization

**Exercise + Oxygen/NIV:**
- Adjunctive therapies during training
- May allow higher intensity
- Benefits beyond short-term uncertain

## Implementation Science

**Barriers:**
- Low referral rates
- Geographic access
- Patient barriers (transportation, awareness)
- Reimbursement limitations

**Solutions:**
- Automatic referral systems
- Telehealth expansion
- Community partnerships
- Policy advocacy

**Quality Improvement:**
- Registry participation
- Benchmarking outcomes
- Process metrics
- Continuous improvement

## Research Priorities

**Key Questions:**
- Optimal duration and intensity
- Maintenance strategies that work
- Phenotype-based approaches
- Early intervention (hospitalization)
- Long-term outcomes

**Methodological Needs:**
- Pragmatic trials
- Implementation science focus
- Cost-effectiveness studies
- Health equity research

## Global Perspective

**Resource-Limited Settings:**
- Task-shifting approaches
- Low-cost equipment
- Community health workers
- Essential components identification

**Standardization Efforts:**
- Minimum standards development
- Outcome benchmarking
- Quality assurance frameworks
- International collaboration`,
      keyTerms: [
        { term: 'treatable traits', definition: 'Phenotypic characteristics that can be identified and targeted for therapy' },
        { term: 'inspiratory muscle training', definition: 'Specific strengthening of breathing muscles using resistance devices' },
        { term: 'blood flow restriction training', definition: 'Exercise with partial vascular occlusion to enhance muscle adaptations' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
      ],
      clinicalNotes: 'Despite Level 1 evidence supporting pulmonary rehabilitation, referral and utilization rates remain extremely low (<5% of eligible COPD patients). Multiple implementation strategies are needed, including automatic referrals, alternative delivery models, and patient/provider education.',
    },
  },

  media: [
    {
      id: 'pulm-rehab-components',
      type: 'diagram',
      filename: 'pulm-rehab-components.svg',
      title: 'Components of Pulmonary Rehabilitation',
      description: 'Visual overview of pulmonary rehabilitation components',
    },
  ],

  citations: [
    {
      id: 'mccarthy-cochrane-pulm-rehab',
      type: 'article',
      title: 'Pulmonary rehabilitation for chronic obstructive pulmonary disease',
      authors: ['McCarthy, B.', 'et al.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-breathing-exercises', targetType: 'topic', relationship: 'child', label: 'Breathing Exercises' },
    { targetId: 'rehab-airway-clearance', targetType: 'topic', relationship: 'child', label: 'Airway Clearance Techniques' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['rehabilitation', 'pulmonary', 'COPD', 'exercise'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pulmonology'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pulmonaryRehabilitationProgram;
