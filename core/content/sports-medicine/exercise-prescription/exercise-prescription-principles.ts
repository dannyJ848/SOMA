/**
 * Exercise Prescription Principles - Comprehensive Educational Content
 *
 * Covers the fundamental principles and methodology for prescribing
 * exercise for health, fitness, and chronic disease management.
 */

import { EducationalContent } from '../../types';

export const exercisePrescriptionPrinciples: EducationalContent = {
  id: 'sports-med-exercise-prescription-principles',
  type: 'concept',
  name: 'Exercise Prescription Principles',
  alternateNames: ['Exercise Programming', 'Physical Activity Prescription'],

  levels: {
    1: {
      level: 1,
      summary: 'Exercise prescription is like a doctor\'s plan for physical activity that tells you what type of exercise to do, how hard, how long, and how often to help you get healthier and stronger.',
      explanation: `## What Is Exercise Prescription?

Just like a doctor gives you medicine in specific amounts, exercise can also be "prescribed" to help your body. An exercise prescription is a plan that tells you exactly how to exercise to get the best results.

## The FITT Principle

There are four main parts to any exercise plan. We call them FITT:

**F - Frequency**
- How often you exercise
- Example: 3 days a week, or every day

**I - Intensity**
- How hard you exercise
- Example: Walking slowly vs. running fast

**T - Time**
- How long each exercise session lasts
- Example: 30 minutes, 1 hour

**T - Type**
- What kind of exercise you do
- Examples: Swimming, biking, weight lifting, soccer

## Types of Exercise

**Cardio (Aerobic)**
- Gets your heart pumping
- Examples: Running, swimming, dancing

**Strength**
- Makes your muscles stronger
- Examples: Push-ups, lifting weights

**Flexibility**
- Helps you bend and stretch
- Examples: Yoga, stretching

**Balance**
- Helps you stay steady
- Examples: Standing on one foot, tai chi

## Why Does This Matter?

Everyone needs different amounts of exercise:
- A kid who plays soccer needs different exercise than grandma
- Someone recovering from injury needs a special plan
- Athletes need more intense training

The right exercise plan helps you:
- Get stronger and healthier
- Avoid getting hurt
- Reach your goals`,
      keyTerms: [
        { term: 'exercise prescription', definition: 'A plan that tells you what exercise to do, how hard, how long, and how often' },
        { term: 'FITT', definition: 'Stands for Frequency, Intensity, Time, and Type - the four parts of an exercise plan' },
        { term: 'aerobic exercise', definition: 'Exercise that gets your heart beating faster, like running or swimming' },
      ],
      analogies: [
        'An exercise prescription is like a recipe - it tells you the ingredients (type), amounts (intensity), and cooking time (duration) to get the result you want.',
        'FITT is like the settings on a video game - you can adjust each one to make the challenge just right for you.',
      ],
      examples: [
        'A basic prescription for a kid might be: Play actively for 60 minutes every day (that\'s the frequency and time), do activities that make you breathe hard sometimes (intensity), and include running games, climbing, and swimming (types).',
      ],
    },
    2: {
      level: 2,
      summary: 'Exercise prescription involves systematic application of the FITT-VP principle (Frequency, Intensity, Time, Type, Volume, Progression) to create individualized physical activity programs that safely optimize health and fitness outcomes.',
      explanation: `## The Exercise Prescription Framework

### FITT-VP Principle

**Frequency:**
- Aerobic: 3-5 days/week
- Resistance: 2-3 days/week (non-consecutive for same muscle group)
- Flexibility: 2-3 days/week minimum, daily is better

**Intensity:**
- Light: Can talk easily, <3 METs
- Moderate: Can talk but not sing, 3-6 METs
- Vigorous: Can only say a few words, >6 METs

**Time (Duration):**
- Aerobic: 20-60 minutes per session
- Resistance: 1-3 sets per exercise
- Flexibility: Hold stretches 10-30 seconds

**Type (Mode):**
- Match to goals and preferences
- Consider medical conditions
- Include variety for adherence

**Volume:**
- Total amount of exercise
- Aerobic: 150 min/week moderate OR 75 min/week vigorous
- Resistance: Sets × reps × load

**Progression:**
- Gradual increase over time
- 10% rule: Don't increase more than 10% per week
- Progress one variable at a time

### General Health Guidelines

**Adults:**
- 150-300 min/week moderate aerobic, OR
- 75-150 min/week vigorous aerobic
- Muscle strengthening 2+ days/week
- Reduce sedentary time

**Children/Adolescents:**
- 60 minutes/day moderate-to-vigorous
- Include vigorous 3+ days/week
- Muscle and bone strengthening 3+ days/week

### Principles of Training

**Overload:**
- Must stress body beyond current capacity
- Leads to adaptation

**Specificity:**
- Adaptations are specific to the training stimulus
- Train how you want to perform

**Reversibility:**
- Adaptations are lost when training stops
- "Use it or lose it"

**Individuality:**
- Everyone responds differently
- Personalize the prescription

### Exercise Intensity Methods

**Heart Rate-Based:**
- Target HR = [(HRmax - HRrest) × %intensity] + HRrest
- Common ranges: 50-85% of HRmax

**Rating of Perceived Exertion (RPE):**
- 6-20 Borg scale
- 12-13 = moderate
- 14-16 = vigorous

**Talk Test:**
- Moderate: Can talk but not sing
- Vigorous: Can only say a few words

### Pre-Exercise Screening

Before starting a program:
- Identify health conditions
- Assess current activity level
- Check for symptoms during exercise
- Determine if medical clearance needed`,
      keyTerms: [
        { term: 'MET', definition: 'Metabolic Equivalent; 1 MET = resting energy expenditure; used to measure exercise intensity' },
        { term: 'overload principle', definition: 'The body must be stressed beyond its current capacity to stimulate adaptation' },
        { term: 'specificity', definition: 'Training adaptations are specific to the type of exercise performed' },
        { term: 'RPE', definition: 'Rating of Perceived Exertion; a subjective scale for measuring exercise intensity' },
      ],
      analogies: [
        'The overload principle is like studying for a test - you have to challenge yourself with harder material to learn more.',
        'Specificity is like practicing a musical instrument - you get better at what you practice, not at other instruments.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise prescription integrates evidence-based guidelines, individual assessment, and progressive training principles to create comprehensive programs addressing cardiorespiratory fitness, muscular fitness, flexibility, and neuromotor function while managing chronic disease risk.',
      explanation: `## Evidence-Based Exercise Guidelines

### ACSM/AHA Recommendations for Adults

**Cardiorespiratory Exercise:**
- Frequency: 3-5 days/week
- Intensity: Moderate (40-59% VO2R) to vigorous (60-89% VO2R)
- Time: 30-60 min/day (150-300 min/week moderate)
- Type: Rhythmic, continuous, large muscle group activities

**Resistance Training:**
- Frequency: 2-3 days/week per muscle group
- Intensity: 60-80% 1RM for strength; 40-60% for endurance
- Volume: 2-4 sets, 8-12 repetitions (strength); 15-25 (endurance)
- Type: Multi-joint and single-joint exercises

**Flexibility Training:**
- Frequency: ≥2-3 days/week, daily preferred
- Intensity: To point of mild discomfort
- Time: 10-30 sec/stretch, 2-4 repetitions
- Type: Static, dynamic, PNF

**Neuromotor Exercise:**
- Frequency: 2-3 days/week
- Time: 20-30 minutes
- Type: Balance, agility, coordination, gait training

## Intensity Prescription Methods

### Heart Rate Reserve (Karvonen Method)
Target HR = [(HRmax - HRrest) × %intensity] + HRrest

Example: 40-year-old, HRrest = 70 bpm
- HRmax = 220 - 40 = 180 bpm
- Target 60%: [(180-70) × 0.60] + 70 = 136 bpm

### VO2 Reserve Method
VO2R = (VO2max - VO2rest) × %intensity + VO2rest
- VO2rest ≈ 3.5 mL/kg/min (1 MET)
- %HRR ≈ %VO2R

### Metabolic Equations
**Walking:**
VO2 = 3.5 + (0.1 × speed) + (1.8 × speed × grade)

**Running:**
VO2 = 3.5 + (0.2 × speed) + (0.9 × speed × grade)

Where speed in m/min, grade as decimal

### Rating of Perceived Exertion
| Borg Scale | Intensity | %HRmax | Description |
|-----------|-----------|--------|-------------|
| 9-10 | Very light | <50% | Minimal effort |
| 11-12 | Light | 50-63% | Easy conversation |
| 13-14 | Somewhat hard | 64-76% | Can talk, not sing |
| 15-16 | Hard | 77-93% | Difficult to talk |
| 17-19 | Very hard | ≥94% | Cannot maintain |

## Pre-Participation Screening

### ACSM Pre-Participation Screening Algorithm
1. Current exercise participation
2. Known cardiovascular, metabolic, or renal disease
3. Signs/symptoms of disease

**Low Risk:** No disease, no symptoms
- May begin light-moderate without clearance
- Medical clearance for vigorous if previously sedentary

**At Risk:** Known disease or symptoms
- Medical clearance recommended before exercise
- May need supervised exercise initially

### Exercise Testing Indications
- Diagnostic: Suspected CAD
- Prognostic: Known heart disease
- Functional: Determine exercise capacity
- Prescription: Individualize intensity

## Program Design Considerations

### Periodization
**Linear Progression:**
- Gradual increase over time
- Good for beginners

**Undulating/Non-linear:**
- Varied intensity within week
- May prevent plateaus

**Block Periodization:**
- Concentrated training blocks
- Sport-specific phases

### Special Populations Considerations
| Population | Key Modification |
|------------|------------------|
| Older adults | Lower intensity, longer warm-up, balance focus |
| Pregnant | Avoid supine after 1st trimester, thermoregulation |
| Cardiac patients | ECG monitoring, lower intensity, symptoms |
| Diabetics | Blood glucose monitoring, timing, hypoglycemia prevention |
| Obese | Non-weight-bearing options, gradual progression |

### Monitoring Progress
- Fitness assessments every 8-12 weeks
- Training logs
- Subjective feedback (RPE, symptoms)
- Adjust prescription based on response`,
      keyTerms: [
        { term: 'VO2 reserve (VO2R)', definition: 'Difference between maximal and resting oxygen consumption; preferred method for prescribing exercise intensity' },
        { term: 'HRmax', definition: 'Maximum heart rate; commonly estimated as 220 - age, though individual variation exists' },
        { term: '1RM', definition: 'One repetition maximum; the maximum weight that can be lifted once; used to prescribe resistance training intensity' },
        { term: 'periodization', definition: 'Systematic variation of training variables over time to optimize adaptations and prevent overtraining' },
        { term: 'PNF stretching', definition: 'Proprioceptive neuromuscular facilitation; advanced flexibility technique using muscle contraction before stretch' },
      ],
      clinicalNotes: 'Pre-participation screening using ACSM algorithm is essential for identifying individuals who need medical clearance. Exercise testing may be indicated for diagnostic, prognostic, or prescription purposes. Always consider contraindications and modify prescription for special populations.',
    },
    4: {
      level: 4,
      summary: 'Advanced exercise prescription encompasses dose-response relationships, molecular mechanisms of adaptation, precision programming using physiological markers, and integrated management of complex medical conditions through targeted exercise interventions.',
      explanation: `## Dose-Response Relationships

### Cardiorespiratory Fitness and Mortality
**Evidence Synthesis:**
- Strong inverse relationship between CRF and mortality
- Each 1 MET increase: 12-15% mortality reduction
- Benefit continues across fitness spectrum
- May plateau at very high fitness levels

**Minimum Effective Dose:**
- 150 min/week moderate: ~30% mortality reduction
- Additional benefits with higher volumes
- Some benefit from any amount above zero

### Exercise Volume Considerations
**Optimal Range:**
- Mortality benefit: Linear up to 3-5x guidelines
- Cardiovascular health: May see J-curve at very high volumes
- Musculoskeletal injury: Increases with volume

**MET-Minutes:**
- Combines intensity and duration
- 500-1000 MET-min/week = significant health benefits
- Example: 30 min × 5 days × 4 METs = 600 MET-min/week

## Physiological Markers for Prescription

### Ventilatory Thresholds
**VT1 (Aerobic Threshold):**
- Point of non-linear ventilation increase
- Lactate begins to accumulate
- ~50-60% VO2max in untrained
- Training below VT1: Fat oxidation, base building

**VT2 (Respiratory Compensation Point):**
- Hyperventilation to compensate for acidosis
- ~70-80% VO2max
- Training between VT1-VT2: Tempo, lactate clearance
- Training above VT2: High-intensity intervals

### Lactate Thresholds
**Blood Lactate Responses:**
- LT1: ~2 mmol/L, corresponds to VT1
- LT2/MLSS: ~4 mmol/L, maximal lactate steady state
- Used for precise intensity prescription

### Heart Rate Variability
**Resting HRV:**
- Indicator of autonomic balance
- Low HRV: May indicate fatigue, need recovery
- High HRV: May indicate readiness for training

**Training Applications:**
- Guide training load decisions
- Individualize recovery periods
- Potential for real-time intensity adjustment

## Molecular Basis of Training Adaptations

### Endurance Training Signaling
**AMPK Pathway:**
- Activated by: AMP/ATP ratio, calcium, exercise
- Downstream effects:
  - PGC-1α activation → Mitochondrial biogenesis
  - GLUT4 expression → Glucose uptake
  - Fat oxidation enzyme expression

**PGC-1α Master Regulator:**
- Coactivates transcription factors
- NRF-1/2: Nuclear mitochondrial genes
- TFAM: Mitochondrial DNA replication
- Results: Increased mitochondrial density and function

### Resistance Training Signaling
**mTORC1 Pathway:**
- Activated by: Mechanical tension, amino acids, growth factors
- Downstream effects:
  - S6K1 activation → Ribosomal biogenesis
  - 4E-BP1 phosphorylation → Translation initiation
  - Net result: Muscle protein synthesis

**Satellite Cell Activation:**
- Exercise triggers proliferation
- Myogenic regulatory factors
- Fusion into existing myofibers
- Myonuclear addition

### Interference Phenomenon
**Concurrent Training:**
- Simultaneous endurance and resistance training
- AMPK may inhibit mTORC1
- Potential for blunted strength adaptations
- Strategies: Separate sessions, prioritize goals

## Advanced Programming Strategies

### Threshold Training
| Zone | Intensity | Purpose |
|------|-----------|---------|
| Zone 1 | <VT1 | Recovery, fat oxidation |
| Zone 2 | VT1-VT2 | Aerobic development |
| Zone 3 | At VT2 | Threshold improvement |
| Zone 4 | >VT2 | VO2max development |
| Zone 5 | Maximal | Anaerobic capacity |

### Polarized Training Model
**Distribution:**
- 75-80% low intensity (Zone 1-2)
- 15-20% high intensity (Zone 4-5)
- Minimal moderate intensity (Zone 3)

**Evidence:**
- Elite endurance athletes use this distribution
- May be superior to threshold-focused training
- Allows for recovery between hard sessions

### High-Intensity Interval Training (HIIT)
**Protocols:**
- Short intervals: 30 sec work, 30 sec rest
- Long intervals: 4 min work, 3-4 min rest
- Sprint interval training: 30 sec all-out, 4 min rest

**Physiological Benefits:**
- Rapid VO2max improvements
- Mitochondrial adaptations
- Insulin sensitivity
- Time-efficient

### Resistance Training Advanced Variables
**Volume-Load:**
- Sets × Reps × Load
- Primary driver of hypertrophy

**Mechanical Tension:**
- Time under tension
- Eccentric emphasis
- Full ROM

**Metabolic Stress:**
- Lighter loads, higher reps
- Blood flow restriction (BFR)
- Short rest periods

## Precision Exercise Medicine

### Individualized Response
**Responder Variation:**
- VO2max response ranges from 0% to 50%+ improvement
- Genetic factors explain ~50% of response
- Non-responders to one modality may respond to another

**Personalization Strategies:**
- Match training to individual response
- Adjust based on monitoring data
- Consider genetic/biomarker profiling (emerging)

### Integration with Medical Management
**Chronic Disease:**
- Exercise as co-treatment with medications
- Timing considerations (relative to medications)
- Monitoring for adverse events
- Collaboration with medical team

**Prehabilitation:**
- Exercise before surgery
- Improve functional capacity
- Reduce complications
- Faster recovery`,
      keyTerms: [
        { term: 'MET-minutes', definition: 'Product of metabolic equivalents and exercise duration; measure of total exercise dose' },
        { term: 'VT1/VT2', definition: 'First and second ventilatory thresholds; physiological markers used for precise intensity prescription' },
        { term: 'MLSS', definition: 'Maximal lactate steady state; highest intensity where lactate production equals clearance; training landmark' },
        { term: 'polarized training', definition: 'Training distribution emphasizing high proportions of low and high intensity with minimal moderate intensity' },
        { term: 'interference effect', definition: 'Potential attenuation of strength adaptations when combined with endurance training; mediated by AMPK-mTORC1 crosstalk' },
      ],
      clinicalNotes: 'Threshold-based training zones provide more precise prescription than heart rate alone. Consider polarized training model for endurance athletes. Concurrent training interference can be minimized by separating modalities (6+ hours) or prioritizing one adaptation. Monitor HRV for training load management.',
    },
    5: {
      level: 5,
      summary: 'Elite exercise prescription integrates systems biology, multi-omics biomarkers, machine learning algorithms, and precision medicine frameworks to create dynamically adaptive programming that accounts for genomic variation, circadian rhythms, and real-time physiological feedback.',
      explanation: `## Systems Biology of Exercise Adaptation

### Integrated Molecular Response
**Temporal Gene Expression:**
- Immediate early genes: c-fos, c-jun (minutes)
- Metabolic genes: PGC-1α, GLUT4 (hours)
- Structural genes: Myosin, collagen (days-weeks)
- Epigenetic modifications: DNA methylation, histone acetylation

**Multi-Tissue Crosstalk:**
- Myokines: Muscle-derived signaling molecules
- IL-6: Metabolic effects, anti-inflammatory
- Irisin: Brown fat activation (disputed)
- Myostatin: Negative regulator of muscle growth

**Exerkines:**
- Exercise-induced circulating factors
- Mediate systemic benefits
- Brain (BDNF), liver, adipose cross-talk
- Potential therapeutic targets

### Epigenetic Modifications
**DNA Methylation:**
- Exercise alters promoter methylation
- PGC-1α promoter hypomethylation with exercise
- Effects may persist (muscle memory)

**Histone Modifications:**
- Acetylation promotes gene expression
- HDAC activity reduced post-exercise
- HAT activity increased

**Non-coding RNAs:**
- microRNAs (miRNAs) altered by exercise
- Regulate gene expression post-transcriptionally
- Circulating miRNAs as biomarkers

## Precision Exercise Prescription

### Genomic Profiling
**Performance Genes:**
| Gene | Variant | Implication |
|------|---------|-------------|
| ACTN3 | R577X | XX: Endurance; RR: Power |
| ACE | I/D | I: Endurance; D: Power |
| PPARGC1A | Gly482Ser | Endurance trainability |
| COL1A1 | Sp1 binding site | Injury risk |

**Clinical Utility:**
- Currently limited for prescription
- May guide training emphasis
- Injury risk stratification emerging
- Polygenic scores under development

### Metabolomic Monitoring
**Exercise Metabolites:**
- Lactate, pyruvate ratios
- Acylcarnitine profiles
- Amino acid dynamics
- Lipid mobilization markers

**Applications:**
- Training status assessment
- Recovery monitoring
- Nutrition optimization
- Overtraining detection

### Continuous Physiological Monitoring
**Wearable Technologies:**
- Heart rate and HRV
- Movement (accelerometry)
- Sleep architecture
- Skin temperature, sweat composition

**Machine Learning Integration:**
- Pattern recognition in physiological data
- Predictive models for performance/injury
- Automated prescription adjustment
- Personalized recovery recommendations

## Circadian Optimization

### Chronobiology of Exercise
**Diurnal Variation:**
- Core temperature peak: Late afternoon
- Hormonal rhythms: Testosterone AM, cortisol AM
- Neuromuscular function: Peak 4-8 PM
- VO2max: May vary 2-3% across day

**Chronotype Considerations:**
- Morning types: May perform better early
- Evening types: May prefer later training
- Shift workers: Disrupted rhythms, modified approach

### Optimal Timing Strategies
**Performance:**
- Strength: Often higher in afternoon/evening
- Endurance: Less time-of-day variation
- Competition timing: Train at competition time

**Metabolic Health:**
- Morning exercise: May enhance fat oxidation
- Post-meal exercise: Improved glucose control
- Consistency may matter more than timing

**Sleep Considerations:**
- Avoid vigorous exercise close to bedtime
- Morning exercise may enhance sleep quality
- Evening exercise tolerance is individual

## Adaptive Programming Algorithms

### Real-Time Prescription Adjustment
**Input Variables:**
- Continuous physiological monitoring
- Subjective readiness assessments
- External load data
- Environmental conditions

**Algorithm Components:**
- Acute:chronic workload ratio
- Training stress balance
- Recovery status indicators
- Performance trajectory

**Output Adjustments:**
- Daily training intensity/volume
- Session structure modification
- Recovery day insertion
- Long-term load progression

### AI-Assisted Prescription
**Machine Learning Applications:**
- Individual response prediction
- Injury risk modeling
- Optimal stimulus identification
- Recovery time estimation

**Current Limitations:**
- Data quality and quantity requirements
- Validation in diverse populations
- Integration with clinical judgment
- Regulatory considerations

## Complex Medical Management

### Multi-Morbidity Exercise Prescription
**Integrated Approach:**
- Identify all conditions and medications
- Prioritize based on risk and benefit
- Consider drug-exercise interactions
- Monitor for adverse events across systems

**Example: Diabetes + Heart Disease + Osteoarthritis**
- CV: ECG monitoring initial sessions, gradual progression
- Metabolic: Blood glucose monitoring, timing with medications
- Musculoskeletal: Low-impact options, joint protection
- Integration: Aquatic exercise may address all three

### Cancer Exercise Prescription
**Evidence Base:**
- Improves quality of life
- Reduces fatigue
- May improve survival in some cancers
- Safe during and after treatment

**Prescription Considerations:**
- Treatment phase (active, recovery, survivorship)
- Side effects (neuropathy, cardiac, bone)
- Immune function considerations
- Psychological benefits paramount

### Frailty and Sarcopenia
**Multicomponent Intervention:**
- Resistance training: Primary for muscle mass/strength
- Power training: Functional performance
- Balance training: Fall prevention
- Aerobic: Cardiometabolic health

**Prescription Specifics:**
- Higher protein synergy (1.2-1.5 g/kg/day)
- Progressive overload despite age
- Functional movements emphasis
- Monitor for adverse events

## Future Directions

### Emerging Technologies
- Real-time molecular monitoring
- Closed-loop exercise systems
- Virtual reality training
- Gamification for adherence

### Precision Medicine Integration
- Multi-omics profiling
- Digital twins (computational models)
- N-of-1 trials in exercise
- Personalized polypills (exercise as component)

### Population-Level Implementation
- Automated prescription systems
- Community-based delivery
- Healthcare system integration
- Policy and reimbursement evolution`,
      keyTerms: [
        { term: 'myokines', definition: 'Cytokines and peptides secreted by muscle during contraction; mediate systemic exercise benefits through cross-tissue signaling' },
        { term: 'exerkines', definition: 'Broad term for exercise-induced circulating factors from multiple tissues that contribute to health benefits' },
        { term: 'acute:chronic workload ratio', definition: 'Ratio of recent training load to longer-term average; used for injury risk assessment and load management' },
        { term: 'chronotype', definition: 'Individual biological preference for sleep-wake timing; influences optimal training time' },
        { term: 'polygenic score', definition: 'Aggregate genetic risk or trait prediction from multiple genetic variants; emerging for exercise response prediction' },
      ],
      clinicalNotes: `Elite-level considerations:
1. Genomic profiling for exercise prescription not yet validated for clinical use - use as adjunct only
2. HRV-guided training shows promise but requires individual baseline establishment
3. Concurrent training interference can be mitigated with 6-24 hour separation or carbohydrate availability manipulation
4. For complex patients, interdisciplinary collaboration essential
5. Machine learning algorithms require validation before clinical implementation
6. Exercise prescription should integrate with, not replace, medical management of chronic disease`,
    },
  },

  media: [
    {
      id: 'fitt-principle-diagram',
      type: 'diagram',
      filename: 'fitt-principle.svg',
      title: 'FITT-VP Principle',
      description: 'Visual representation of exercise prescription components',
    },
  ],

  citations: [
    {
      id: 'acsm-guidelines',
      type: 'textbook',
      title: 'ACSM\'s Guidelines for Exercise Testing and Prescription',
      source: 'American College of Sports Medicine',
    },
    {
      id: 'aha-exercise-statement',
      type: 'article',
      title: 'Physical Activity and Public Health',
      source: 'American Heart Association / American College of Sports Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-exercise-physiology-basics', targetType: 'concept', relationship: 'related', label: 'Exercise Physiology Basics' },
    { targetId: 'sports-med-exercise-for-diabetes', targetType: 'concept', relationship: 'child', label: 'Exercise for Diabetes' },
    { targetId: 'sports-med-exercise-for-cardiovascular', targetType: 'concept', relationship: 'child', label: 'Exercise for Cardiovascular Disease' },
  ],

  tags: {
    systems: ['cardiovascular', 'musculoskeletal', 'respiratory'],
    topics: ['sports-medicine', 'exercise-prescription', 'preventive-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default exercisePrescriptionPrinciples;
