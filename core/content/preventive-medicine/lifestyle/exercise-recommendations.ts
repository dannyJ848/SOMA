/**
 * Exercise Recommendations
 *
 * Evidence-based physical activity guidelines for health promotion
 * and disease prevention across all age groups.
 */

import { EducationalContent } from '../../types';

export const EXERCISE_RECOMMENDATIONS: EducationalContent = {
  id: 'concept-exercise-recommendations',
  type: 'concept',
  name: 'Exercise Recommendations',
  alternateNames: ['Physical activity guidelines', 'Fitness recommendations', 'Exercise prescription'],

  levels: {
    1: {
      level: 1,
      summary: 'Moving your body regularly helps keep you healthy. Try to be active for at least 30 minutes most days.',
      explanation: `Exercise is one of the best things you can do for your health!

**Why Exercise Matters:**
- Keeps your heart strong
- Helps you maintain a healthy weight
- Gives you more energy
- Helps you sleep better
- Makes you feel happier
- Keeps your bones and muscles strong

**How Much Exercise Do You Need?**

**For Adults:**
- At least 30 minutes of moderate activity most days
- "Moderate" means you can talk but not sing during the activity
- Walking briskly, dancing, gardening all count!

**For Kids:**
- 60 minutes of activity every day
- Should include running, jumping, and playing

**Types of Exercise:**

**Cardio (Aerobic):**
- Gets your heart pumping
- Examples: Walking, swimming, biking, dancing
- Helps your heart and lungs

**Strength Training:**
- Makes your muscles stronger
- Examples: Push-ups, lifting weights, climbing
- Try to do this 2 times per week

**Flexibility:**
- Keeps you limber
- Examples: Stretching, yoga
- Do after exercise when muscles are warm

**Easy Ways to Get Started:**
- Take a 10-minute walk after meals
- Use stairs instead of elevators
- Park farther away from stores
- Dance while doing chores
- Play with kids or pets

Remember: Some activity is always better than none!`,
      keyTerms: [
        { term: 'aerobic exercise', definition: 'Activities that get your heart pumping faster, like walking or swimming' },
        { term: 'strength training', definition: 'Exercises that make your muscles stronger' },
        { term: 'moderate intensity', definition: 'Exercise where you can talk but not sing' },
      ],
      analogies: [
        'Your body is like a car - it needs regular use to run well. Just sitting still lets everything get rusty.',
        'Exercise is like charging your battery - it gives you more energy, not less.',
      ],
      examples: [
        'A 30-minute brisk walk burns about 150 calories and improves your heart health.',
        'Taking 10,000 steps a day is about 5 miles of walking.',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical activity guidelines recommend 150-300 minutes of moderate aerobic activity weekly plus muscle-strengthening activities twice weekly for optimal health benefits.',
      explanation: `Regular physical activity is one of the most important things you can do for health. Guidelines are based on scientific evidence.

**Current Guidelines (Adults 18-64):**

**Aerobic Activity:**
- Minimum: 150 minutes/week of moderate-intensity OR
- 75 minutes/week of vigorous-intensity OR
- Equivalent combination
- More benefits with 300 minutes moderate/150 minutes vigorous

**Muscle Strengthening:**
- At least 2 days per week
- All major muscle groups (legs, hips, back, chest, abdomen, shoulders, arms)
- 8-12 repetitions per exercise to the point of fatigue

**Intensity Levels:**

| Intensity | Heart Rate | Perceived Exertion | Examples |
|-----------|------------|-------------------|----------|
| Light | <50% max HR | Can sing | Casual walking, stretching |
| Moderate | 50-70% max HR | Can talk, not sing | Brisk walking, doubles tennis |
| Vigorous | 70-85% max HR | Can only say few words | Running, swimming laps |

*Max Heart Rate estimate: 220 - age*

**Guidelines by Life Stage:**

**Children (6-17 years):**
- 60 minutes daily moderate-to-vigorous activity
- Include vigorous intensity at least 3 days/week
- Include muscle and bone strengthening 3 days/week

**Older Adults (65+):**
- Same as adults when able
- Add balance training for fall prevention
- Adapt intensity to abilities and conditions
- Be as active as conditions allow

**Pregnant Women:**
- 150 minutes moderate aerobic activity weekly
- Avoid contact sports and activities with fall risk
- Continue activity if healthy pregnancy

**Health Benefits by Amount:**

| Activity Level | Health Benefits |
|----------------|-----------------|
| Any activity | Better than none |
| Below guidelines | Some benefits |
| Meeting guidelines | Substantial benefits |
| Exceeding guidelines | Additional benefits |

**Reducing Sedentary Time:**
- Sitting for long periods is harmful even if you exercise
- Break up sitting every 30-60 minutes
- Standing desks, walking meetings help`,
      keyTerms: [
        { term: 'moderate-intensity exercise', definition: 'Activity at 50-70% maximum heart rate; can hold conversation' },
        { term: 'vigorous-intensity exercise', definition: 'Activity at 70-85% maximum heart rate; difficult to hold conversation' },
        { term: 'sedentary behavior', definition: 'Any waking activity with energy expenditure ≤1.5 METs while sitting or reclining' },
        { term: 'MET', definition: 'Metabolic Equivalent of Task; ratio of working metabolic rate to resting rate' },
      ],
      analogies: [
        'Think of exercise like a bank account - you can make small deposits (10-minute walks) that add up to significant savings (health benefits).',
      ],
    },
    3: {
      level: 3,
      summary: 'Physical activity guidelines integrate dose-response evidence, physiological adaptations, and chronic disease prevention data to provide population-level recommendations with flexibility for individual application.',
      explanation: `**Evidence Base for Physical Activity Guidelines:**

**Dose-Response Relationships:**

*Mortality Risk Reduction:*
- Greatest benefit: Moving from sedentary to some activity
- 150 min/week moderate: ~30% mortality risk reduction
- 300 min/week moderate: ~40% mortality risk reduction
- Benefits plateau around 50-60 MET-hours/week
- No upper threshold identified for harms

*Cardiovascular Disease:*
- 150 min/week: 14% CVD risk reduction
- 300 min/week: 20% CVD risk reduction
- Both aerobic and resistance training beneficial

*Cancer Prevention:*
- Moderate-vigorous activity reduces risk of 13+ cancer types
- Breast, colon, endometrial cancers: strongest evidence
- Dose-response: More activity = more protection

**Exercise Physiology:**

*Aerobic Adaptations:*
- Increased cardiac output (stroke volume)
- Improved mitochondrial density and function
- Enhanced capillary density
- Improved insulin sensitivity
- Favorable lipid profile changes
- Blood pressure reduction

*Resistance Training Adaptations:*
- Muscle hypertrophy
- Increased bone mineral density
- Improved metabolic rate
- Glucose uptake enhancement
- Functional capacity preservation

**Specific Recommendations:**

*Cardiovascular Disease Prevention:*

| Parameter | Target | Evidence Level |
|-----------|--------|----------------|
| Aerobic activity | 150-300 min/week moderate | Strong |
| Intensity | Include some vigorous | Moderate |
| Resistance training | 2-3 sessions/week | Strong |
| Sitting breaks | Every 30 minutes | Moderate |

*Type 2 Diabetes Prevention/Management:*
- Aerobic: ≥150 min/week moderate-vigorous
- Resistance: 2-3 sessions/week
- Reduce sedentary time
- Both types reduce HbA1c by ~0.5-0.7%

*Osteoporosis Prevention:*
- Weight-bearing aerobic (walking, jogging)
- Resistance training (progressive loading)
- Balance exercises (falls prevention)
- High-impact activities if appropriate (jumping)

*Mental Health:*
- Aerobic activity reduces depression symptoms
- 90-300 min/week for anxiety benefit
- Acute and chronic effects on mood
- Social component may contribute

**Exercise Prescription Components (FITT-VP):**

| Component | Description |
|-----------|-------------|
| Frequency | Days per week |
| Intensity | % max HR, RPE, METs |
| Time | Duration per session |
| Type | Mode of exercise |
| Volume | Total amount (e.g., MET-minutes) |
| Progression | How to advance over time |

**Special Populations:**

*Chronic Conditions:*
- Most chronic conditions: Exercise is beneficial
- May need modification, not avoidance
- Benefits generally outweigh risks
- Medical clearance when appropriate

*Pregnancy:*
- Avoid: Contact sports, scuba diving, hot yoga, altitude >6000 ft (unacclimatized)
- Warning signs to stop: Vaginal bleeding, contractions, amniotic fluid leakage`,
      keyTerms: [
        { term: 'dose-response relationship', definition: 'Graded association between amount of activity and health benefit' },
        { term: 'FITT-VP', definition: 'Exercise prescription framework: Frequency, Intensity, Time, Type, Volume, Progression' },
        { term: 'RPE', definition: 'Rating of Perceived Exertion; subjective intensity scale (6-20 Borg scale or 0-10 modified)' },
        { term: 'MET-hours', definition: 'Total exercise volume; MET level multiplied by hours of activity' },
        { term: 'progressive overload', definition: 'Gradually increasing exercise stimulus to continue adaptation' },
      ],
      clinicalNotes: 'Most adults can begin moderate exercise without medical clearance. Pre-exercise screening focuses on current symptoms and cardiovascular risk. Use PARQ+ questionnaire for self-screening.',
    },
    4: {
      level: 4,
      summary: 'Exercise prescription requires integration of exercise physiology, cardiopulmonary function, musculoskeletal capacity, and chronic disease considerations to optimize individualized recommendations within population-level framework.',
      explanation: `**Advanced Exercise Physiology:**

**Cardiovascular Adaptations:**

*Central Adaptations:*
- Left ventricular hypertrophy (eccentric, aerobic)
- Increased plasma volume
- Enhanced vagal tone (lower resting HR)
- Improved myocardial contractility
- Cardiac output: Sedentary 5L/min → Trained 25-40 L/min max

*Peripheral Adaptations:*
- Arterial remodeling (larger, more compliant)
- Endothelial function improvement (NO bioavailability)
- Capillary density increase (muscle)
- Mitochondrial biogenesis
- Improved oxygen extraction (a-vO2 difference)

**Metabolic Adaptations:**

*Substrate Utilization:*
- Increased fat oxidation at given intensity
- Glycogen sparing
- Improved insulin sensitivity (GLUT4 translocation)
- Enhanced AMPK signaling

*Metabolic Health Impact:*
| Parameter | Change with Training |
|-----------|---------------------|
| Fasting glucose | ↓ 5-10% |
| HbA1c | ↓ 0.5-0.7% |
| Triglycerides | ↓ 10-20% |
| HDL-C | ↑ 5-10% |
| LDL-C | ↓ 0-5% |
| Blood pressure | ↓ 5-7 mmHg systolic |

**Pre-Participation Evaluation:**

*ACSM Risk Stratification:*
- Eliminated complex algorithm in recent guidelines
- Focus on: Current symptoms, known CV/metabolic/renal disease
- Most can begin light-moderate exercise without clearance
- Medical clearance for: Symptomatic individuals, high-intensity in those with disease

*Contraindications to Exercise:*

| Absolute | Relative |
|----------|----------|
| Recent MI (2 days) | Severe hypertension |
| Unstable angina | Hypertrophic cardiomyopathy |
| Uncontrolled arrhythmia | High-grade AV block |
| Symptomatic severe aortic stenosis | Known electrolyte abnormalities |
| Acute myocarditis/pericarditis | Mental impairment affecting cooperation |
| Acute PE/DVT | |

**Exercise Testing:**

*Maximal vs. Submaximal:*
- Maximal: Gold standard for VO2max; requires motivation
- Submaximal: Practical; extrapolates to max
- Pharmacologic stress: For those unable to exercise

*VO2max Interpretation:*
| Classification | VO2max (mL/kg/min) Men | Women |
|----------------|------------------------|-------|
| Superior | >55 | >47 |
| Excellent | 49-55 | 42-47 |
| Good | 40-48 | 35-41 |
| Fair | 32-39 | 28-34 |
| Poor | <32 | <28 |

**Chronic Disease-Specific Prescriptions:**

*Heart Failure:*
- Aerobic: 3-5 days/week, 20-40 min, 40-80% VO2 reserve
- Interval training increasingly supported
- Resistance: 2-3 days, 10-15 reps, avoid Valsalva
- Cardiac rehabilitation referral

*Chronic Kidney Disease:*
- Regular aerobic + resistance training
- Start low, progress slowly
- Benefits: BP reduction, cardiorespiratory fitness, quality of life
- Monitor for orthostatic hypotension, electrolyte shifts

*Cancer (during/after treatment):*
- Avoid sedentary behavior; be as active as possible
- Aerobic: 90+ min/week moderate during treatment
- Resistance: 2 days/week when possible
- Precautions: Low platelets (bleeding), low ANC (infection), bone metastases (fracture)

*Osteoarthritis:*
- Low-impact aerobic: Walking, cycling, aquatics
- Resistance: Quadriceps strengthening critical
- Range of motion exercises
- Weight loss if overweight

**High-Intensity Interval Training (HIIT):**

*Protocol Examples:*
- 4x4: 4 min at 90-95% HRmax, 3 min active recovery, repeat 4x
- 10x1: 1 min at 90% HRmax, 1 min recovery, repeat 10x
- Tabata: 20 sec all-out, 10 sec rest, 8 cycles

*Evidence:*
- Greater improvement in VO2max vs. continuous training
- Time-efficient
- Similar metabolic benefits
- May have higher dropout rates
- Appropriate for many chronic conditions with modification`,
      keyTerms: [
        { term: 'VO2max', definition: 'Maximum oxygen consumption; gold standard for cardiorespiratory fitness' },
        { term: 'VO2 reserve', definition: 'Difference between VO2max and resting VO2; used for exercise intensity prescription' },
        { term: 'AMPK', definition: 'AMP-activated protein kinase; master metabolic regulator activated by exercise' },
        { term: 'eccentric hypertrophy', definition: 'Cardiac remodeling with increased chamber size; seen with endurance training' },
        { term: 'a-vO2 difference', definition: 'Arteriovenous oxygen difference; reflects peripheral oxygen extraction' },
      ],
      clinicalNotes: 'Refer cardiac patients to cardiac rehabilitation. Use RPE when HR response is blunted (beta-blockers, transplant). Progress exercise slowly in deconditioned patients. Consider supervised exercise programs for complex patients.',
    },
    5: {
      level: 5,
      summary: 'Precision exercise prescription integrates genomics, biomarkers, wearable technology, and emerging evidence on exercise as medicine to optimize individual outcomes while addressing population-level physical inactivity through systems-based interventions.',
      explanation: `**Precision Exercise Medicine:**

**1. Genomics and Exercise Response:**

*Genetic Variability:*
- VO2max trainability: 10-60% heritable
- HERITAGE Family Study: Wide response variability
- Responders vs. non-responders (metabolic, fitness)

*Key Genetic Variants:*
| Gene | Variant | Association |
|------|---------|-------------|
| ACE | I/D | Endurance (I) vs. power (D) |
| ACTN3 | R577X | Sprint/power performance |
| PPARGC1A | rs8192678 | Mitochondrial biogenesis |
| ADRB2 | Arg16Gly | Lipolysis, bronchodilation |
| APOE | ε4 | Exercise-Alzheimer's interaction |

*Clinical Utility:*
- Currently limited
- Panel testing available but not guideline-recommended
- Research moving toward polygenic scores
- May explain non-responders; guide alternative approaches

**2. Biomarkers of Exercise Response:**

*Acute Response Markers:*
- IL-6 (myokine; anti-inflammatory cascade)
- Cortisol, epinephrine, norepinephrine
- Lactate clearance
- Heart rate recovery

*Chronic Adaptation Markers:*
| Marker | Change with Training |
|--------|---------------------|
| VO2max | ↑ 15-20% (average) |
| Resting HR | ↓ 5-10 bpm |
| HRV (RMSSD) | ↑ (parasympathetic) |
| hs-CRP | ↓ |
| Adiponectin | ↑ |
| BDNF | ↑ (cognition) |

**3. Wearable Technology Integration:**

*Available Metrics:*
- Heart rate and HRV (continuous)
- Step count and movement
- GPS pace and distance
- Sleep stages
- Oxygen saturation (SpO2)
- ECG (some devices)
- Continuous glucose monitoring

*Clinical Applications:*
- Activity tracking and goal setting
- Exercise intensity monitoring
- Recovery assessment (HRV)
- Sleep optimization
- Arrhythmia detection

*Limitations:*
- Accuracy varies by device and metric
- Data overload for patients and providers
- Privacy and data security concerns
- Overreliance on metrics vs. subjective feedback

**4. Exercise as Medicine:**

*Exercise is Medicine (EIM) Initiative:*
- Global health initiative
- Assess and prescribe exercise as vital sign
- Referral pathways to certified professionals
- Healthcare system integration

*Exercise Oncology:*
| Phase | Goals | Evidence |
|-------|-------|----------|
| Prehabilitation | Optimize fitness pre-surgery | Moderate |
| During treatment | Maintain function, reduce fatigue | Strong |
| Survivorship | Reduce recurrence, improve QOL | Strong |
| Palliative | Maintain independence | Emerging |

*Clinical Implementation:*
1. Assess current activity (vital sign)
2. Provide brief counseling
3. Write exercise prescription
4. Refer to qualified professional (if complex)
5. Follow up at subsequent visits

**5. Molecular Mechanisms:**

*Myokine Signaling:*
- IL-6: Acute anti-inflammatory, insulin sensitizing
- Irisin: Browning of white adipose tissue
- BDNF: Neuroplasticity, cognition
- Myonectin: Fatty acid uptake
- SPARC: Colon cancer protection

*Signaling Pathways:*
- AMPK: Energy sensor, metabolic switch
- PGC-1α: Mitochondrial biogenesis master regulator
- mTOR: Muscle protein synthesis (resistance)
- HIF-1α: Hypoxia response, angiogenesis

**6. Sedentary Behavior Science:**

*Distinct from Physical Inactivity:*
- Sedentary behavior: Low energy expenditure sitting/reclining
- Physical inactivity: Not meeting activity guidelines
- Both independently harmful

*Mechanistic Pathways:*
- Lipoprotein lipase suppression (low muscle activity)
- Postprandial glucose and lipid dysmetabolism
- Reduced AMPK signaling
- Endothelial dysfunction

*Intervention Evidence:*
| Strategy | Effect |
|----------|--------|
| Frequent breaks | Improved glucose metabolism |
| Standing desks | Marginal metabolic benefit |
| Treadmill desks | Improved cardiometabolic markers |
| Activity prompts | Increased movement |

**7. Implementation Science:**

*Barriers to Physical Activity:*
- Individual: Time, motivation, self-efficacy, injury
- Environmental: Safety, access, walkability
- Policy: Urban planning, workplace policies

*Effective Interventions:*
| Level | Intervention | Effect Size |
|-------|-------------|-------------|
| Individual | Counseling + follow-up | Small-moderate |
| Environmental | Parks, trails, walkability | Moderate |
| Policy | School PE requirements | Moderate |
| Healthcare | EIM implementation | Small |

*Policy Opportunities:*
- Built environment modification
- Workplace wellness programs (mixed evidence)
- School-based interventions
- Healthcare integration
- Transportation policy (active commuting)

**8. Future Directions:**

- AI-driven personalized prescriptions
- Digital therapeutics (app-based interventions)
- Exergaming and virtual reality
- Microbiome-exercise interactions
- Circadian timing optimization
- Pharmacological exercise mimetics (research)`,
      keyTerms: [
        { term: 'myokine', definition: 'Cytokine or peptide produced and released by muscle fibers in response to contraction' },
        { term: 'HERITAGE study', definition: 'Landmark family study demonstrating genetic influence on exercise training response' },
        { term: 'PGC-1α', definition: 'Peroxisome proliferator-activated receptor gamma coactivator 1-alpha; master regulator of mitochondrial biogenesis' },
        { term: 'Exercise is Medicine (EIM)', definition: 'Global initiative promoting exercise assessment and prescription in clinical care' },
        { term: 'HRV (RMSSD)', definition: 'Heart rate variability; RMSSD measures parasympathetic activity and recovery status' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Treat physical inactivity as a modifiable risk factor like smoking
- Brief counseling (3-5 minutes) can increase activity levels
- Pedometers/fitness trackers increase activity ~2000 steps/day
- Consider referral to exercise physiologist for complex patients
- Non-responders may benefit from alternative exercise modes
- Sedentary breaks provide metabolic benefit independent of total activity
- Integrate activity assessment into EHR as vital sign`,
    },
  },

  media: [
    {
      id: 'activity-guidelines-infographic',
      type: 'diagram',
      filename: 'physical-activity-guidelines.svg',
      title: 'Physical Activity Guidelines Summary',
      description: 'Visual summary of recommended activity levels by age group',
    },
  ],

  citations: [
    {
      id: 'physical-activity-guidelines',
      type: 'website',
      title: 'Physical Activity Guidelines for Americans, 2nd Edition',
      source: 'U.S. Department of Health and Human Services',
      url: 'https://health.gov/paguidelines/',
      accessedDate: '2025-01-24',
    },
    {
      id: 'acsm-guidelines',
      type: 'website',
      title: 'ACSM\'s Guidelines for Exercise Testing and Prescription',
      source: 'American College of Sports Medicine',
      url: 'https://www.acsm.org/',
      accessedDate: '2025-01-24',
    },
  ],

  crossReferences: [
    { targetId: 'concept-diet-nutrition', targetType: 'concept', relationship: 'related', label: 'Diet and Nutrition' },
    { targetId: 'concept-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'concept-weight-management', targetType: 'concept', relationship: 'related', label: 'Weight Management' },
  ],

  tags: {
    systems: ['cardiovascular', 'musculoskeletal', 'metabolic'],
    topics: ['preventive medicine', 'lifestyle', 'exercise'],
    keywords: ['physical activity', 'exercise prescription', 'fitness', 'aerobic', 'strength training'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
