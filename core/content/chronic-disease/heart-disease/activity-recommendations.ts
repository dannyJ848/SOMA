/**
 * Activity Recommendations - Heart Disease Management
 *
 * Physical activity guidelines for patients with heart disease.
 */

import { EducationalContent } from '../../types';

export const ACTIVITY_RECOMMENDATIONS: EducationalContent = {
  id: 'heart-disease-activity-recommendations',
  type: 'concept',
  name: 'Activity Recommendations for Heart Disease',
  alternateNames: ['Exercise with heart disease', 'Cardiac exercise', 'Physical activity guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular physical activity is good for your heart and can be done safely with heart disease when you follow your doctor\'s advice.',
      explanation: `**Why Is Exercise Good for Your Heart?**
Exercise helps your heart by:
- Making your heart stronger
- Lowering blood pressure
- Improving cholesterol
- Helping you maintain a healthy weight
- Reducing stress
- Giving you more energy

**Getting Started Safely:**
Before starting exercise:
- Talk to your doctor
- Know your limits
- Start slowly
- Listen to your body

**Recommended Activities:**
- Walking (most popular!)
- Swimming or water aerobics
- Cycling
- Light gardening
- Dancing

**How Much Exercise?**
- Aim for 30 minutes most days
- Can break into 10-minute segments
- Start with what you can do and build up

**Warning Signs to Stop Exercise:**
Stop and rest if you experience:
- Chest pain or pressure
- Unusual shortness of breath
- Dizziness or lightheadedness
- Irregular heartbeat
- Nausea
- Excessive fatigue

**The Talk Test:**
During exercise you should be able to:
- Carry on a conversation
- Not be gasping for breath
- Feel your heart working but not racing

**Before, During, and After Exercise:**

*Before:*
- Warm up for 5-10 minutes
- Take any prescribed medications
- Avoid exercise after heavy meals

*During:*
- Stay hydrated
- Watch for warning signs
- Take breaks if needed

*After:*
- Cool down for 5-10 minutes
- Stretch gently
- Notice how you feel

**Tips for Success:**
1. Find activities you enjoy
2. Exercise with a friend
3. Set realistic goals
4. Keep a simple exercise log
5. Celebrate your progress`,
      keyTerms: [
        { term: 'warm-up', definition: 'Light activity that prepares your body for exercise' },
        { term: 'cool-down', definition: 'Light activity that helps your body recover after exercise' },
        { term: 'moderate intensity', definition: 'Exercise level where you can talk but not sing' },
      ],
      analogies: [
        'Your heart is a muscle - like any muscle, it gets stronger with regular exercise.',
        'Think of exercise as medicine for your heart that doesn\'t come in a pill.',
      ],
      examples: [
        'Tom started with 10-minute walks after dinner. After a month, he worked up to 30 minutes.',
        'Maria joined a water aerobics class because it\'s gentle on her joints while still good for her heart.',
      ],
    },
    2: {
      level: 2,
      summary: 'Structured physical activity, including aerobic exercise and resistance training, improves cardiovascular outcomes in patients with heart disease when appropriately prescribed and monitored.',
      explanation: `**Benefits of Exercise in Heart Disease:**

| Benefit | Mechanism |
|---------|-----------|
| Improved exercise capacity | Enhanced cardiac output, muscle function |
| Lower blood pressure | Reduced vascular resistance |
| Better cholesterol | Increased HDL, lower triglycerides |
| Weight management | Caloric expenditure, metabolism |
| Reduced mortality | Multiple cardiovascular effects |

**Exercise Prescription Guidelines:**

*Aerobic Exercise:*
| Component | Recommendation |
|-----------|----------------|
| Frequency | 3-5 days per week |
| Intensity | Moderate (40-60% heart rate reserve) |
| Time | 30-60 minutes per session |
| Type | Walking, cycling, swimming |

*Resistance Training:*
| Component | Recommendation |
|-----------|----------------|
| Frequency | 2-3 days per week |
| Intensity | Light to moderate |
| Sets/Reps | 1-3 sets, 10-15 reps |
| Type | Major muscle groups |

**Heart Rate Targets:**

*Calculating Target Heart Rate:*
- Maximum heart rate (HRmax) = 220 - age
- Target range: 50-70% of HRmax for moderate intensity

*Using Perceived Exertion:*
| Rating | Description |
|--------|-------------|
| Very light | Can sing while exercising |
| Light | Can talk easily |
| Moderate | Can talk but prefer not to |
| Vigorous | Difficult to talk |

**Cardiac Rehabilitation:**

A supervised program that includes:
- Monitored exercise sessions
- Education about heart disease
- Nutrition counseling
- Risk factor modification
- Psychosocial support

*Benefits:*
- 20-25% reduction in mortality
- Improved exercise capacity
- Better quality of life
- Confidence building

**Condition-Specific Considerations:**

*Heart Failure:*
- Exercise is beneficial and recommended
- Start low, progress slowly
- Monitor symptoms closely
- Adjust based on daily status

*After Heart Attack/Stent:*
- Cardiac rehab highly recommended
- Gradual return to activity
- Usually start 2-6 weeks after event

*Atrial Fibrillation:*
- Exercise recommended
- May need heart rate monitoring
- Avoid extreme exertion initially

**Safety Guidelines:**

*When to Stop:*
- Chest discomfort
- Excessive shortness of breath
- Dizziness
- Irregular heartbeat
- Unusual fatigue

*When to Avoid Exercise:*
- Unstable symptoms
- Recent change in condition
- Fever or acute illness
- Uncontrolled blood pressure
- Recent medication changes affecting heart

**Progression:**
- Increase duration before intensity
- Add 5-10 minutes every 1-2 weeks
- Aim for continuous improvement
- Adjust for daily variability`,
      keyTerms: [
        { term: 'cardiac rehabilitation', definition: 'Supervised program combining exercise, education, and risk factor modification for heart disease patients' },
        { term: 'heart rate reserve', definition: 'Difference between maximum and resting heart rate, used for exercise intensity prescription' },
        { term: 'perceived exertion', definition: 'Subjective rating of exercise intensity' },
        { term: 'FITT', definition: 'Exercise prescription components: Frequency, Intensity, Time, Type' },
      ],
      analogies: [
        'Cardiac rehabilitation is like physical therapy for your heart - guided, progressive exercise to help you recover and get stronger.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise prescription for cardiovascular disease requires risk stratification, individualized programming, and systematic progression based on clinical status, functional capacity, and patient goals.',
      explanation: `**Clinical Framework for Exercise Prescription:**

*Risk Stratification:*
| Risk Level | Criteria | Exercise Setting |
|------------|----------|------------------|
| Low | Stable, asymptomatic, good function | Community-based |
| Moderate | Stable symptoms, moderate function | Monitored initially |
| High | Recent event, unstable, poor function | Supervised cardiac rehab |

**Exercise Testing:**

*Cardiopulmonary Exercise Testing (CPET):*
- Gold standard for functional assessment
- Measures VO2max (maximal oxygen uptake)
- Identifies ventilatory thresholds
- Guides intensity prescription
- Detects ischemia, arrhythmias

*Submaximal Testing:*
- 6-minute walk test
- Shuttle walk test
- Useful when CPET unavailable
- Tracks progress over time

**Individualized Prescription:**

*Intensity Determination Methods:*
| Method | Formula | Notes |
|--------|---------|-------|
| Heart rate reserve | (HRmax - HRrest) × % + HRrest | Most accurate |
| % HRmax | HRmax × % | Simple but less precise |
| Ventilatory threshold | From CPET | Physiologically based |
| RPE | Borg scale 11-14 | Useful adjunct |

*Target Zones:*
| Goal | HR Reserve % | RPE |
|------|--------------|-----|
| Initial/deconditioned | 40-50% | 11-12 |
| Improvement | 50-70% | 12-14 |
| Maintenance | 60-85% | 13-16 |

**Cardiac Rehabilitation Phases:**

*Phase I (Inpatient):*
- Low-level mobility
- Education
- Risk assessment
- Discharge planning

*Phase II (Outpatient):*
- Supervised exercise (36 sessions typical)
- ECG monitoring as needed
- Risk factor management
- Progressive training

*Phase III/IV (Maintenance):*
- Community-based
- Long-term adherence
- Independent exercise
- Periodic reassessment

**Disease-Specific Programming:**

*Heart Failure:*
| Parameter | Recommendation |
|-----------|----------------|
| Intensity | 40-70% VO2peak or RPE 11-14 |
| Duration | 20-45 minutes |
| Frequency | 3-5 days/week |
| Mode | Aerobic + resistance |
| Monitoring | Symptoms, weight, HR |

*Post-PCI/Post-CABG:*
- Cardiac rehab strongly recommended
- Begin within 2-4 weeks typically
- Avoid upper body resistance initially post-sternotomy
- Progress based on healing and symptoms

*Arrhythmias:*
- Consider device settings (ICD, pacemaker)
- Heart rate monitoring
- Avoid extremes initially
- Progress with clinical stability

**Resistance Training Guidelines:**

*Benefits in CV Disease:*
- Improved muscle strength
- Enhanced functional capacity
- Better glucose metabolism
- Complementary to aerobic training

*Prescription:*
| Component | Recommendation |
|-----------|----------------|
| Frequency | 2-3 days/week, non-consecutive |
| Exercises | 8-10 covering major muscle groups |
| Intensity | 30-50% 1RM initially |
| Volume | 1-3 sets, 10-15 reps |
| Progression | Increase reps before weight |

**Monitoring and Safety:**

*Clinical Monitoring:*
- Symptoms before/during/after
- Heart rate and rhythm
- Blood pressure response
- Signs of decompensation

*Contraindications:*
| Absolute | Relative |
|----------|----------|
| Unstable angina | Moderate valve disease |
| Decompensated HF | Severe hypertension |
| Uncontrolled arrhythmia | Hypertrophic cardiomyopathy |
| Acute myocarditis | Complex arrhythmias |
| Severe aortic stenosis | Electrolyte abnormalities |`,
      keyTerms: [
        { term: 'VO2max', definition: 'Maximal oxygen uptake; gold standard measure of cardiorespiratory fitness' },
        { term: 'ventilatory threshold', definition: 'Exercise intensity at which ventilation increases disproportionately to oxygen consumption' },
        { term: 'cardiopulmonary exercise testing', definition: 'Comprehensive assessment of cardiovascular and pulmonary function during exercise' },
        { term: 'METs', definition: 'Metabolic equivalents; measure of energy expenditure (1 MET = resting metabolism)' },
      ],
      clinicalNotes: 'Cardiac rehabilitation reduces all-cause mortality by 20-25% and is underutilized. Exercise testing guides personalized prescription. Heart failure patients benefit from exercise - low functional capacity is not a contraindication. Resistance training is safe and beneficial when properly prescribed.',
    },
    4: {
      level: 4,
      summary: 'Exercise-based cardiac rehabilitation integrates exercise physiology principles, risk stratification algorithms, and precision medicine approaches to optimize cardiovascular outcomes through personalized physical activity programming.',
      explanation: `**Exercise Physiology in Cardiovascular Disease:**

*Hemodynamic Responses:*
\`\`\`
Normal Exercise Response:
- HR ↑ (to meet O2 demand)
- SV ↑ (enhanced venous return)
- CO ↑ (HR × SV)
- SVR ↓ (vasodilation in active muscle)
- BP: SBP ↑, DBP stable

Heart Failure:
- Attenuated HR response
- Limited SV reserve
- Impaired CO augmentation
- Abnormal SVR response
- Early fatigue, dyspnea
\`\`\`

*Skeletal Muscle Adaptations:*
| Adaptation | CV Disease Impact |
|------------|-------------------|
| Mitochondrial density | Impaired → improved with training |
| Capillary density | Reduced → improved |
| Fiber type composition | Type II predominant → shift toward Type I |
| Oxidative enzyme activity | Reduced → enhanced |

**Evidence Base for Exercise:**

*Meta-Analyses:*
| Outcome | Effect | Evidence Level |
|---------|--------|----------------|
| All-cause mortality | ↓20-25% | High |
| CV mortality | ↓26% | High |
| HF hospitalization | ↓30% | High |
| Quality of life | Improved | High |
| Exercise capacity | ↑15-25% | High |

*Key Trials:*
- HF-ACTION (heart failure)
- RAMIT (MI rehabilitation)
- SAINTEX-CAF (heart failure)

**Advanced Exercise Testing:**

*CPET Variables:*
| Parameter | Clinical Significance |
|-----------|----------------------|
| Peak VO2 | Strongest predictor of mortality |
| VE/VCO2 slope | Ventilatory efficiency |
| AT (anaerobic threshold) | Exercise prescription |
| ΔVO2/ΔWR | Cardiac vs peripheral limitation |
| O2 pulse | Surrogate for stroke volume |

*Risk Stratification from CPET:*
| Peak VO2 | Risk Category |
|----------|---------------|
| >20 mL/kg/min | Low risk |
| 14-20 mL/kg/min | Moderate risk |
| <14 mL/kg/min | High risk |
| <10 mL/kg/min | Very high risk (consider transplant evaluation) |

**Precision Exercise Medicine:**

*Individualization Factors:*
\`\`\`
Patient Assessment:
- Disease phenotype
- Comorbidities
- Functional capacity
- Treatment response
- Patient preferences

Exercise Prescription:
- Personalized intensity
- Appropriate modality
- Progressive programming
- Outcome monitoring
\`\`\`

*Phenotype-Specific Approaches:*
| Phenotype | Exercise Focus |
|-----------|----------------|
| HFrEF | Aerobic + resistance, symptom-guided |
| HFpEF | Focus on comorbidities, interval training |
| Post-ACS | Supervised initially, progressive |
| Stable CAD | Community-based, comprehensive |

**Technology Integration:**

*Remote Monitoring:*
- Heart rate monitors
- Activity trackers
- Mobile CPET (emerging)
- Telemedicine sessions

*Digital Cardiac Rehab:*
- Virtual sessions
- App-based programming
- Remote coaching
- Comparable outcomes to center-based

**High-Intensity Interval Training (HIIT):**

*Emerging Evidence:*
- Greater VO2max improvement vs continuous
- Safe in stable CV disease
- Improved adherence for some
- May not be superior in all outcomes

*Protocol Example:*
\`\`\`
4×4 Protocol:
- 4 minutes at 85-95% HRmax
- 3 minutes active recovery at 60-70%
- Repeat 4 times
- Warm-up and cool-down
\`\`\`

**Barriers and Implementation:**

*Participation Barriers:*
| Barrier | Solution |
|---------|----------|
| Access | Home-based, digital options |
| Cost | Insurance coverage advocacy |
| Motivation | Behavioral interventions |
| Fear | Education, supervised start |
| Time | Flexible programming |

*Quality Improvement:*
- Referral optimization
- Enrollment enhancement
- Adherence strategies
- Long-term maintenance`,
      keyTerms: [
        { term: 'peak VO2', definition: 'Highest oxygen consumption achieved during maximal exercise; strongest predictor of CV outcomes' },
        { term: 'VE/VCO2 slope', definition: 'Measure of ventilatory efficiency; elevated in heart failure indicating poor prognosis' },
        { term: 'high-intensity interval training', definition: 'Exercise alternating between high and low intensity periods' },
        { term: 'home-based cardiac rehabilitation', definition: 'Structured exercise program delivered in the patient\'s home with remote support' },
        { term: 'exercise oscillations', definition: 'Periodic breathing patterns during exercise indicating severe heart failure' },
      ],
      clinicalNotes: 'Peak VO2 <14 mL/kg/min is threshold for considering advanced heart failure therapies. HIIT shows promise but evidence for superiority over moderate continuous training is mixed. Home-based and digital cardiac rehab have comparable outcomes to center-based programs. Address barriers systematically to improve participation.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art exercise therapy for cardiovascular disease integrates molecular exercise medicine, precision phenotyping, digital therapeutics, and systems biology to optimize individualized physical activity interventions.',
      explanation: `**Molecular Exercise Medicine:**

*Exercise-Induced Molecular Signaling:*
\`\`\`
Mechanical/Metabolic Stress
         ↓
Signaling Cascades:
- AMPK activation
- PGC-1α induction
- mTOR pathway
- SIRT1 activation
         ↓
Molecular Adaptations:
- Mitochondrial biogenesis
- Angiogenesis
- Metabolic gene expression
- Anti-inflammatory effects
         ↓
Physiological Adaptations:
- Improved exercise capacity
- Reverse remodeling
- Vascular function
\`\`\`

*Exerkines in Cardiovascular Disease:*
| Exerkine | Source | CV Effect |
|----------|--------|-----------|
| Irisin | Muscle | Cardioprotection, metabolism |
| IL-6 (acute) | Muscle | Anti-inflammatory |
| BDNF | Brain | Vascular, neuroplasticity |
| FGF21 | Liver | Metabolic improvement |
| Follistatin | Muscle | Muscle growth, metabolism |

**Exercise and Cardiac Remodeling:**

*Reverse Remodeling in HF:*
\`\`\`
Exercise Training (3-6 months)
         ↓
Molecular Changes:
- Reduced neurohormonal activation
- Improved Ca2+ handling
- Reduced oxidative stress
         ↓
Structural Changes:
- Reduced LV volumes
- Improved geometry
- Enhanced contractility
         ↓
Functional Improvement:
- ↑ Ejection fraction
- ↑ Peak VO2
- ↓ Symptoms
\`\`\`

**Precision Exercise Prescription:**

*Multi-Omics Approach:*
| Data Type | Application |
|-----------|-------------|
| Genomics | Exercise response prediction |
| Transcriptomics | Pathway activation |
| Metabolomics | Metabolic phenotyping |
| Proteomics | Biomarker discovery |

*Exercise Response Variability:*
\`\`\`
Responders vs Non-Responders:

Factors:
- Genetic variants
- Baseline fitness
- Comorbidities
- Adherence
- Exercise dose

Strategies for Non-Responders:
- Modify exercise parameters
- Address limiting factors
- Consider alternative modalities
- Personalized progression
\`\`\`

**Digital Exercise Therapeutics:**

*Technology Integration:*
\`\`\`
Sensing:
- Continuous HR monitoring
- Accelerometry
- GPS tracking
- Physiologic parameters

Analytics:
- Machine learning algorithms
- Pattern recognition
- Risk prediction
- Outcome optimization

Intervention:
- Adaptive programming
- Real-time coaching
- Behavioral support
- Telemedicine integration
\`\`\`

*Evidence:*
- Virtual cardiac rehab comparable to center-based
- Improved access and scalability
- Engagement strategies critical
- Hybrid models emerging

**Advanced Interventions:**

*Exercise with Devices:*
| Device | Consideration |
|--------|---------------|
| ICD | Programming for exercise HR |
| CRT | May enable higher-intensity training |
| LVAD | Modified exercise protocols |
| Heart transplant | Denervation effects on HR response |

*Exercise Prehabilitation:*
- Pre-surgery optimization
- Improved surgical outcomes
- Faster recovery
- Growing evidence base

**Implementation Science:**

*Scaling Effective Programs:*
\`\`\`
Evidence-Based Exercise Intervention
         ↓
Implementation Strategies:
- System redesign
- Technology integration
- Team-based care
- Policy support
         ↓
Population Health Impact:
- Increased participation
- Improved outcomes
- Reduced disparities
\`\`\`

*Health Equity:*
- Address socioeconomic barriers
- Culturally adapted programs
- Community partnerships
- Digital divide considerations

**Future Directions:**

*Research Priorities:*
- Precision exercise prescription trials
- Optimal dose-response relationships
- Long-term adherence strategies
- Implementation effectiveness
- Exercise non-responder management

*Emerging Approaches:*
- Wearable-guided training
- AI coaching systems
- Virtual reality rehabilitation
- Exercise pharmacology synergy
- Blood flow restriction training`,
      keyTerms: [
        { term: 'exerkine', definition: 'Signaling molecule released during exercise with systemic effects' },
        { term: 'reverse remodeling', definition: 'Improvement in cardiac structure and function with therapy' },
        { term: 'exercise non-responder', definition: 'Individual who does not show expected improvements from exercise training' },
        { term: 'digital therapeutics', definition: 'Evidence-based therapeutic interventions delivered through software' },
        { term: 'prehabilitation', definition: 'Exercise intervention before planned surgery to improve outcomes' },
        { term: 'blood flow restriction training', definition: 'Exercise with partial vascular occlusion to enhance adaptations at lower intensities' },
      ],
      clinicalNotes: 'Molecular exercise medicine is revealing therapeutic targets beyond traditional exercise adaptations. Exercise non-responders may benefit from modified protocols or addressing limiting factors. Digital cardiac rehab expands access but engagement strategies are critical. Prehabilitation before cardiac surgery shows promise for improving outcomes.',
    },
  },

  media: [
    {
      id: 'exercise-heart-disease-guide',
      type: 'diagram',
      filename: 'cardiac-exercise-guide.svg',
      title: 'Exercise Guide for Heart Disease',
      description: 'Visual guide to safe exercise with heart disease',
    },
  ],

  citations: [
    {
      id: 'cardiac-rehab-guidelines',
      type: 'article',
      title: 'Exercise-Based Cardiac Rehabilitation',
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'heart-disease-cardiac-warning-signs', targetType: 'topic', relationship: 'related', label: 'Cardiac Warning Signs' },
    { targetId: 'chronic-disease-lifestyle-modifications', targetType: 'topic', relationship: 'related', label: 'Lifestyle Modifications' },
  ],

  tags: {
    systems: ['cardiovascular', 'musculoskeletal'],
    topics: ['heart disease', 'exercise', 'cardiac rehabilitation'],
    keywords: ['cardiac exercise', 'rehabilitation', 'physical activity', 'exercise prescription'],
    clinicalRelevance: 'high',
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
