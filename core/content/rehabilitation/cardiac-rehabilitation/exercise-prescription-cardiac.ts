/**
 * Exercise Prescription in Cardiac Rehabilitation - Educational Content
 */

import { EducationalContent } from '../../types';

export const exercisePrescriptionCardiac: EducationalContent = {
  id: 'rehab-exercise-prescription-cardiac',
  type: 'concept',
  name: 'Exercise Prescription in Cardiac Rehabilitation',
  alternateNames: ['Cardiac Exercise Prescription', 'Heart Disease Exercise Guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Doctors create a special exercise plan for people with heart problems, telling them exactly how much and what type of exercise is safe.',
      explanation: `When you have a heart problem, you need a special plan for exercise. This is called an exercise prescription - like a prescription for medicine, but for physical activity!

**What does the exercise prescription include?**
- **How often**: Usually 3-5 days per week
- **How hard**: At a level that is safe for your heart
- **How long**: Usually 20-60 minutes
- **What type**: Walking, biking, or other activities

**How do they know what is safe?**
Before starting, you may have a test where you exercise while the doctor watches your heart. This helps them know how much you can do safely.

**Warning signs to stop:**
- Chest pain or pressure
- Feeling very dizzy
- Trouble breathing
- Feeling sick to your stomach`,
      keyTerms: [
        { term: 'exercise prescription', definition: 'A specific plan for physical activity designed by healthcare providers' },
        { term: 'intensity', definition: 'How hard you are working during exercise' },
        { term: 'warm-up', definition: 'Light activity before exercising to prepare your body' },
      ],
      analogies: [
        'An exercise prescription is like a recipe - it tells you exactly what to do for the best results.',
      ],
      examples: [
        'Walking on a treadmill for 30 minutes at a pace where you can still talk.',
      ],
    },
    2: {
      level: 2,
      summary: 'Exercise prescription in cardiac rehabilitation uses the FITT principle (Frequency, Intensity, Time, Type) to create individualized programs that safely improve cardiovascular fitness.',
      explanation: `Exercise prescription for cardiac patients is based on scientific principles to maximize benefit while minimizing risk.

**The FITT Principle:**

**Frequency:**
- Aerobic: 3-5 days per week
- Resistance: 2-3 non-consecutive days per week

**Intensity:**
- Determined by exercise test results
- Often based on percentage of maximum heart rate
- Should be able to talk during exercise (talk test)

**Time (Duration):**
- Aerobic: 20-60 minutes per session
- Can be accumulated in 10-minute bouts
- Gradual progression from shorter to longer

**Type:**
- Aerobic: Walking, cycling, swimming, elliptical
- Resistance: Weight machines, resistance bands, body weight
- Flexibility: Stretching exercises

**How Is Intensity Determined?**
- Exercise stress test measures maximum capacity
- Target heart rate zone calculated (usually 50-80% of max)
- Rating of Perceived Exertion (RPE) scale used
- Adjustments made for medications that affect heart rate

**Safety Considerations:**
- Always include warm-up and cool-down
- Monitor symptoms during exercise
- Know warning signs to stop
- Report any concerns to staff`,
      keyTerms: [
        { term: 'FITT principle', definition: 'Frequency, Intensity, Time, and Type - components of exercise prescription' },
        { term: 'target heart rate', definition: 'The ideal heart rate range for exercise based on fitness goals' },
        { term: 'RPE', definition: 'Rating of Perceived Exertion - a scale to measure how hard exercise feels' },
        { term: 'exercise stress test', definition: 'Test that monitors the heart while exercising to assess function' },
      ],
      analogies: [
        'Target heart rate is like a speed limit - it keeps you in a safe zone.',
      ],
    },
    3: {
      level: 3,
      summary: 'Cardiac exercise prescription integrates graded exercise test results, hemodynamic response patterns, and ischemic thresholds to establish individualized training parameters within safe physiological limits.',
      explanation: `## Exercise Testing for Prescription

**Standard Protocol:**
- Symptom-limited maximal test preferred
- Treadmill or cycle ergometer
- ECG monitoring throughout
- Blood pressure measurement
- Symptoms assessment

**Key Measurements:**
- Peak VO2 or metabolic equivalents (METs)
- Heart rate at anaerobic threshold
- Blood pressure response
- ECG changes (ST depression, arrhythmias)
- Symptoms onset

## Intensity Prescription Methods

**Heart Rate Methods:**
1. Percentage of HR max: Target = (HRmax - HRrest) x 40-80% + HRrest (Karvonen)
2. Percentage of peak HR: 55-90% of peak HR achieved
3. Heart rate at ventilatory threshold

**RPE Method:**
- Borg 6-20 scale: Target 11-16 ("light" to "hard")
- Useful when HR response is affected by medications

**MET Method:**
- Based on functional capacity from exercise test
- Target 40-80% of measured METs
- Useful for activity counseling

## Exercise Prescription Components

**Warm-up (5-10 minutes):**
- Low-intensity aerobic activity
- Dynamic stretching
- Gradual heart rate increase

**Conditioning (20-60 minutes):**
- Aerobic training at target intensity
- May include intervals
- Resistance training as tolerated

**Cool-down (5-10 minutes):**
- Gradual intensity reduction
- Prevents post-exercise hypotension
- Allows gradual heart rate recovery

## Special Considerations

| Condition | Modification |
|-----------|--------------|
| Beta-blocker use | Use RPE, not HR targets |
| Pacemaker | Consider rate-responsive features |
| ICD | Stay 10-15 bpm below ICD threshold |
| Atrial fibrillation | RPE-based prescription |
| Heart failure | Lower intensity, longer duration |

## Progression Guidelines

**Phase II (Weeks 1-4):**
- Lower intensity (40-50% HRR)
- Shorter duration (15-20 min)
- Emphasis on technique

**Phase II (Weeks 5-12):**
- Progressive intensity increase
- Duration progression to 30-45 min
- Add resistance training

**Phase III (Maintenance):**
- Goal intensity (60-80% HRR)
- 45-60 minutes aerobic
- 2-3 days resistance training`,
      keyTerms: [
        { term: 'Karvonen formula', definition: 'Method calculating target HR using heart rate reserve' },
        { term: 'METs', definition: 'Metabolic equivalents - measure of energy expenditure, 1 MET = resting metabolism' },
        { term: 'HRR', definition: 'Heart rate reserve - difference between max and resting heart rate' },
        { term: 'ventilatory threshold', definition: 'Exercise intensity where ventilation increases disproportionately' },
      ],
      clinicalNotes: 'Beta-blockers blunt the heart rate response to exercise, making HR-based prescription unreliable. RPE (targeting 11-14 on the Borg scale) or percentage of HR reserve from an on-medication exercise test should be used.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac exercise prescription utilizes cardiopulmonary exercise testing data, interval training protocols, and disease-specific modifications to optimize physiological adaptations while managing risk.',
      explanation: `## Cardiopulmonary Exercise Testing (CPET)

**Additional Measurements:**
- Peak VO2 and VO2 at AT (anaerobic threshold)
- VE/VCO2 slope (ventilatory efficiency)
- Oxygen pulse (VO2/HR)
- Respiratory exchange ratio (RER)
- Exercise oscillatory ventilation

**Prognostic Value:**
- Peak VO2 <14 ml/kg/min indicates poor prognosis
- VE/VCO2 slope >34 associated with increased mortality
- Used for heart transplant listing decisions

## Advanced Prescription Methods

**First Ventilatory Threshold (VT1):**
- Aerobic threshold
- Target for moderate intensity training
- Approximately 50-60% peak VO2

**Second Ventilatory Threshold (VT2):**
- Anaerobic threshold
- Target for high-intensity intervals
- Approximately 80-90% peak VO2

## High-Intensity Interval Training (HIIT)

**Protocol Example:**
- 4x4 intervals (4 min at 85-95% peak HR)
- 3 min active recovery at 60-70%
- Warm-up and cool-down included
- Total session ~40 minutes

**Evidence:**
- Greater VO2 peak improvements vs moderate continuous
- Improved endothelial function
- Enhanced cardiac remodeling
- Safe in selected patients
- Growing use in cardiac rehab

## Disease-Specific Prescriptions

**Heart Failure (HFrEF):**
- Lower starting intensity
- Emphasis on interval approach
- Monitor for decompensation
- RPE-guided preferred

**Post-PCI:**
- Can progress quickly if uncomplicated
- Stent-specific considerations minimal
- Focus on secondary prevention

**Post-CABG:**
- Sternal precautions initial 6-8 weeks
- Upper extremity restrictions early
- Progressive arm exercise after healing

**Ventricular Arrhythmias/ICD:**
- Stay 10-20 bpm below ICD rate threshold
- Avoid activities with sudden HR spikes
- Psychological support important

## Resistance Training Prescription

**Parameters:**
- 8-10 exercises, major muscle groups
- 10-15 repetitions per set
- 1-3 sets
- RPE 11-13 (fairly light to somewhat hard)
- Avoid Valsalva maneuver

**Progression:**
- Begin after 2-3 weeks of aerobic training
- Start with minimal resistance
- Progress load before repetitions
- Monitor blood pressure response

## Monitoring and Adjustment

**Session Monitoring:**
- ECG telemetry (high-risk patients)
- Blood pressure pre/post and during
- Symptom assessment
- RPE documentation

**Progression Criteria:**
- Appropriate HR and BP response
- No adverse symptoms
- RPE at target
- Demonstrated exercise tolerance`,
      keyTerms: [
        { term: 'CPET', definition: 'Cardiopulmonary exercise testing - comprehensive assessment including gas exchange analysis' },
        { term: 'VE/VCO2 slope', definition: 'Ratio of ventilation to CO2 production, measure of ventilatory efficiency' },
        { term: 'oxygen pulse', definition: 'VO2 divided by heart rate, estimate of stroke volume during exercise' },
        { term: 'Valsalva maneuver', definition: 'Bearing down while holding breath, causes dangerous BP fluctuations' },
      ],
      clinicalNotes: 'HIIT has shown superior improvements in peak VO2 compared to moderate continuous training in several trials including SAINTEX-CAD and SMARTEX-HF. However, patient selection is important, and moderate intensity remains appropriate for many cardiac patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiac exercise prescription research addresses precision dosing, wearable-guided intensity regulation, and phenotype-specific protocols to optimize individual training adaptations and clinical outcomes.',
      explanation: `## Precision Exercise Prescription

**Individual Response Variability:**
- Wide variation in training response
- ~15-20% may be "non-responders"
- Genetic factors (ACE, ACTN3 polymorphisms)
- Need for personalized approaches

**Biomarker-Guided Exercise:**
- High-sensitivity troponin response to exercise
- NT-proBNP changes with training
- Inflammatory markers
- Endothelial function assessment

## Dose-Response Relationships

**RACER Trial Findings:**
- Higher volume superior for VO2 peak
- 30 MET-hours/week > 24 MET-hours/week
- No increased adverse events
- Supports dose-response relationship

**Minimum Effective Dose:**
- Uncertain lower threshold
- Some benefit even with low doses
- Adherence considerations
- Real-world applicability

## Wearable Technology

**Continuous Monitoring:**
- Heart rate during exercise
- Activity tracking outside sessions
- Sleep quality assessment
- Arrhythmia detection (Apple Watch, Kardia)

**Prescription Integration:**
- Real-time intensity feedback
- Target zone alerts
- Exercise summaries
- Trend analysis

**Challenges:**
- Accuracy validation
- Data integration
- Alert fatigue
- Privacy concerns

## Novel Training Approaches

**Blood Flow Restriction Training:**
- Low-load resistance with tourniquet
- Muscle hypertrophy with lower loads
- Potential cardiac applications
- Safety data emerging

**Eccentric Exercise:**
- Muscle lengthening contractions
- Lower cardiovascular demand
- Higher mechanical load
- May benefit frail patients

**Respiratory Muscle Training:**
- Inspiratory muscle training devices
- Improved dyspnea perception
- Enhanced exercise tolerance
- HF-specific benefits

## Phenotype-Specific Protocols

**HFpEF:**
- Peripheral adaptations important
- Interval training may be beneficial
- Address diastolic dysfunction
- Manage comorbidities

**Cardiac Amyloidosis:**
- Low-intensity programs
- Autonomic dysfunction consideration
- Limited data available
- Individualized approach essential

**ACHD (Adult Congenital Heart Disease):**
- Lesion-specific restrictions
- Many can exercise safely
- Expert guidance recommended
- Growing evidence base

## Future Directions

**Research Priorities:**
- Optimal HIIT protocols
- Dose optimization studies
- Non-responder strategies
- Long-term outcomes data

**Technology Integration:**
- AI-driven prescription adjustment
- Predictive analytics
- Remote supervision platforms
- Virtual reality applications

**Implementation:**
- Scalable delivery models
- Cost-effectiveness optimization
- Health equity considerations
- Policy and reimbursement alignment`,
      keyTerms: [
        { term: 'exercise non-responder', definition: 'Individual who does not show expected physiological adaptations to training' },
        { term: 'blood flow restriction training', definition: 'Exercise with partial vascular occlusion to enhance muscle adaptations at lower loads' },
        { term: 'ACHD', definition: 'Adult congenital heart disease - grown-ups living with heart defects present from birth' },
        { term: 'HFpEF', definition: 'Heart failure with preserved ejection fraction' },
      ],
      clinicalNotes: 'The concept of exercise "non-response" is controversial. Some apparent non-responders may benefit from different exercise parameters (HIIT vs continuous, different volume). Individual response assessment and prescription modification may convert non-responders to responders.',
    },
  },

  media: [
    {
      id: 'fitt-principle-diagram',
      type: 'diagram',
      filename: 'fitt-principle.svg',
      title: 'FITT Principle for Exercise Prescription',
      description: 'Visual representation of Frequency, Intensity, Time, Type components',
    },
  ],

  citations: [
    {
      id: 'acsm-exercise-prescription',
      type: 'textbook',
      title: 'ACSM Guidelines for Exercise Testing and Prescription',
      authors: ['American College of Sports Medicine'],
      source: 'Wolters Kluwer',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-cardiac-rehabilitation-program', targetType: 'topic', relationship: 'parent', label: 'Cardiac Rehabilitation Program' },
    { targetId: 'rehab-therapeutic-exercise', targetType: 'topic', relationship: 'related', label: 'Therapeutic Exercise' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['rehabilitation', 'exercise prescription', 'cardiac'],
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

export default exercisePrescriptionCardiac;
