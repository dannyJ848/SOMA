/**
 * Activity Tracking - Wearables/Fitness Trackers
 *
 * Methods, accuracy, and applications of physical
 * activity monitoring through wearable devices.
 */

import { EducationalContent } from '../../types';

export const activityTracking: EducationalContent = {
  id: 'wearables-activity-tracking',
  type: 'concept',
  name: 'Activity Tracking',
  alternateNames: ['Physical Activity Monitoring', 'Movement Tracking', 'Exercise Detection'],

  levels: {
    1: {
      level: 1,
      summary: 'Activity tracking uses wearable devices to count your steps, measure how much you move, and record your exercise throughout the day to help you stay active and healthy.',
      explanation: `## What Is Activity Tracking?

Activity tracking is when wearable devices like fitness bands and smartwatches count how much you move during the day. They help you see if you are getting enough exercise and encourage you to be more active!

**What Activity Trackers Count:**

1. **Steps:**
   - Every time you take a step, it counts
   - Goal is usually 10,000 steps per day
   - Walking, running, and climbing stairs all count

2. **Distance:**
   - How far you walk or run
   - Measured in miles or kilometers
   - Uses GPS or step counting to figure out

3. **Active Minutes:**
   - Time spent moving enough to count as exercise
   - Brisk walking, running, dancing, sports
   - Goal is usually 30 minutes per day

4. **Calories Burned:**
   - Estimate of energy used
   - Includes calories burned just being alive
   - Plus extra from exercise

5. **Floors Climbed:**
   - Counts stairs you go up
   - Uses barometer to detect altitude change
   - Good for tracking vertical activity

**How Activity Tracking Helps:**

- **See Your Progress:** Know exactly how active you are
- **Set Goals:** Work toward daily step or activity targets
- **Get Reminders:** Devices buzz when you have been sitting too long
- **Stay Motivated:** Celebrate when you reach goals
- **Track Over Time:** See if you are getting more active

**Types of Exercise Trackers Recognize:**
- Walking and running
- Cycling
- Swimming
- Dancing
- Sports like tennis or basketball
- Gym workouts

**Why Being Active Matters:**
- Stronger heart and muscles
- Better mood and energy
- Healthy weight
- Better sleep
- Lower risk of diseases

Activity tracking makes it fun and easy to make sure you are moving enough every day!`,
      keyTerms: [
        { term: 'activity tracking', definition: 'Using devices to measure how much you move and exercise' },
        { term: 'steps', definition: 'Unit of measurement for walking and running' },
        { term: 'GPS', definition: 'Global Positioning System - satellite navigation for location' },
        { term: 'barometer', definition: 'Sensor that measures air pressure and altitude' },
      ],
      analogies: [
        'Activity tracking is like having a pedometer that can also recognize different types of movement.',
        'It is a personal scoreboard showing how much you moved each day.',
        'Think of it as a movement detective that figures out what kind of exercise you are doing.',
      ],
      examples: [
        'A fitness band counts steps during a walk to school and shows 5,000 steps at lunch time',
        'A smartwatch automatically detects when someone starts running and begins tracking the workout',
        'An activity tracker buzzes every hour to remind someone to stand up and move around',
        'A device shows that dancing at a party burned 300 calories',
      ],
      patientCounselingPoints: [
        'Start with a step goal you can achieve, then gradually increase it',
        'Wear the device on your non-dominant wrist for better accuracy',
        'Do not worry about perfect numbers - focus on moving more than yesterday',
        'Use the data to find patterns, like when you are most active during the day',
      ],
    },
    2: {
      level: 2,
      summary: 'Activity tracking uses accelerometer and gyroscope sensors in wearable devices to detect and quantify physical movement including steps, distance, active minutes, and exercise type through algorithmic pattern recognition, providing feedback for behavior change and health promotion.',
      explanation: `## Activity Tracking

Activity tracking utilizes wearable sensors to objectively measure physical movement, providing quantified data on daily activity patterns, exercise engagement, and energy expenditure to support health behavior change and fitness goals.

**Sensor Technology:**

**Accelerometers:**
- 3-axis MEMS sensors detect motion in three dimensions
- Measure acceleration forces (gravity and movement)
- Sample rates typically 10-100 Hz
- Primary sensor for step counting and activity detection

**Gyroscopes:**
- Detect rotational movement and orientation
- Improve activity classification accuracy
- Help distinguish activity types
- Combined with accelerometer in sensor fusion algorithms

**Additional Sensors:**
- **GPS:** Location, distance, pace, route mapping
- **Barometer:** Altitude change for floor counting
- **Heart Rate:** Exercise intensity estimation

**Activity Metrics:**

**Step Counting:**
- Peak detection algorithms identify step patterns
- Threshold-based filtering reduces false positives
- Individual calibration improves accuracy
- Typical goal: 10,000 steps/day (arbitrary but useful benchmark)

**Distance Estimation:**
- Step count x stride length (calibrated or estimated)
- GPS for outdoor activities
- Accuracy: +/- 5-10% typically

**Active Minutes:**
- Moderate-to-vigorous physical activity (MVPA)
- Heart rate or movement intensity thresholds
- WHO recommendation: 150 minutes/week moderate or 75 minutes vigorous

**Calorie Estimation:**
- Basal metabolic rate (BMR) based on demographics
- Activity-based calorie addition
- Heart rate-based intensity adjustment
- Accuracy: +/- 20-40%

**Activity Classification:**

**Automatic Exercise Recognition:**
- Machine learning algorithms classify movement patterns
- Common recognized activities: walking, running, cycling, swimming
- Classification accuracy varies by activity and device
- User confirmation often requested

**Activity Intensity:**
- Light: <40% heart rate reserve
- Moderate: 40-59% heart rate reserve
- Vigorous: 60-85% heart rate reserve
- METs (Metabolic Equivalents of Task)`,
      keyTerms: [
        { term: 'MEMS', definition: 'Micro-Electro-Mechanical Systems - miniature sensors' },
        { term: 'sensor fusion', definition: 'Combining data from multiple sensors for improved accuracy' },
        { term: 'MVPA', definition: 'Moderate-to-Vigorous Physical Activity' },
        { term: 'BMR', definition: 'Basal Metabolic Rate - calories burned at rest' },
        { term: 'heart rate reserve', definition: 'Difference between max and resting heart rate' },
        { term: 'MET', definition: 'Metabolic Equivalent of Task - energy cost of physical activity' },
      ],
      analogies: [
        'Activity tracking is like having an automated exercise diary that never forgets to record.',
        'It functions as a movement accountant, tracking deposits and withdrawals from your activity bank.',
        'Think of it as a personal trainer who monitors your effort throughout the day.',
      ],
      examples: [
        'Fitbit SmartTrack automatically recognizing and recording a 30-minute bike ride',
        'Apple Watch closing activity rings for movement, exercise, and standing',
        'Garmin tracking swimming laps and stroke type in a pool',
        'WHOOP calculating daily strain based on cardiovascular load',
      ],
    },
    3: {
      level: 3,
      summary: 'Activity tracking employs MEMS accelerometers and gyroscopes with machine learning algorithms for step detection, activity classification, and intensity estimation, providing metrics including steps, distance, active minutes, and calories with variable accuracy, supporting behavior change through goal-setting, feedback, and gamification while aligning with WHO physical activity guidelines.',
      explanation: `## Activity Tracking: Technical and Behavioral Science

Activity tracking combines sensor technology with behavioral psychology to promote physical activity, with growing evidence base for effectiveness and increasing integration with clinical care and public health initiatives.

**Algorithmic Processing:**

**Step Detection:**
- **Peak Detection:** Identifying local maxima in accelerometer signals
- **Threshold-Based:** Minimum acceleration required to count
- **Cadence Filtering:** Step rate must be within walking/running range
- **False Positive Reduction:** Filtering non-step movements

**Activity Classification:**
- **Feature Extraction:** Statistical measures from raw sensor data
- **Machine Learning:** Supervised classification algorithms
- **Hierarchical Models:** Activity type, intensity, posture
- **Personalization:** Individual calibration improves accuracy

**Energy Expenditure Estimation:**
---
Total Calories = BMR + Activity Calories

Activity Calories = f(METs, duration, body weight)

MET Estimation = f(heart rate, accelerometer features)
---

**Behavioral Science Integration:**

**Behavior Change Techniques:**

| Technique | Implementation | Evidence |
|-----------|----------------|----------|
| Goal Setting | Step targets, activity minutes | Strong |
| Self-Monitoring | Real-time feedback, history | Strong |
| Feedback | Notifications, summaries | Moderate |
| Rewards | Badges, achievements | Moderate |
| Social Support | Challenges, sharing | Moderate |
| Prompts | Stand reminders, move alerts | Moderate |

**Gamification Elements:**
- Achievement badges
- Streaks and consistency tracking
- Leaderboards and competitions
- Progress visualization
- Virtual rewards

**Evidence Base:**

**Systematic Review Findings:**
- Activity tracker use associated with increased physical activity
- Small-to-moderate effect sizes
- Effectiveness enhanced with additional behavior change support
- Long-term adherence challenging

**Clinical Applications:**
- Cardiac rehabilitation
- Diabetes management
- Weight management programs
- Physical therapy
- Cancer survivorship

**Integration with Healthcare:**

**Remote Patient Monitoring:**
- Activity as vital sign
- Functional status assessment
- Fall risk monitoring
- Recovery tracking

**Clinical Decision Support:**
- Activity thresholds for interventions
- Trend analysis for deterioration
- Medication timing optimization
- Rehabilitation progress tracking`,
      keyTerms: [
        { term: 'cadence', definition: 'Step rate - steps per minute' },
        { term: 'feature extraction', definition: 'Deriving meaningful measurements from raw data' },
        { term: 'gamification', definition: 'Applying game elements to non-game contexts' },
        { term: 'behavior change technique', definition: 'Observable, replicable component of intervention' },
        { term: 'streak', definition: 'Consecutive days achieving activity goal' },
        { term: 'functional status', definition: 'Ability to perform activities of daily living' },
      ],
    },
    4: {
      level: 4,
      summary: 'Activity tracking combines sensor signal processing with machine learning for movement detection and classification, integrating behavioral change techniques including goal setting, self-monitoring, and gamification with demonstrated efficacy for increasing physical activity, clinical applications in chronic disease management and rehabilitation, and emerging use as a digital biomarker for functional status and health outcomes, while addressing limitations in long-term adherence and accuracy across diverse populations.',
      explanation: `## Activity Tracking: Clinical Applications and Evidence

Activity tracking has evolved from consumer wellness to clinical tool with applications in chronic disease management, rehabilitation, population health, and digital clinical trial endpoints, supported by a growing evidence base while addressing challenges in accuracy, equity, and sustained engagement.

**Clinical Evidence Summary:**

**Cardiovascular Health:**
- Step count inversely associated with cardiovascular mortality
- 8,000-12,000 steps/day associated with lowest mortality risk
- Activity tracker interventions show modest BP improvements
- Post-MI activity tracking improves cardiac rehabilitation adherence

**Metabolic Health:**
- Activity tracking associated with weight loss when combined with diet
- Step count correlates with improved glycemic control in diabetes
- Sedentary time reduction improves insulin sensitivity
- NEAT (non-exercise activity thermogenesis) tracking for weight management

**Oncology:**
- Physical activity improves cancer-related fatigue
- Activity tracking in survivorship programs
- Prehabilitation before surgery
- Monitoring for functional decline

**Musculoskeletal:**
- Rehabilitation progress tracking
- Return-to-activity protocols
- Osteoarthritis activity management
- Fall prevention programs

**Digital Endpoints:**

**Clinical Trial Applications:**
- Objective physical activity measurement
- Real-world activity patterns
- Patient-reported outcome complement
- Remote monitoring between visits

**Regulatory Considerations:**
- FDA Digital Health Center guidance
- Validation requirements for endpoints
- Fit-for-purpose qualification
- Context of use specifications

**Accuracy and Validation:**

**Standardized Testing:**
- Laboratory-based validation studies
- Free-living validation with reference devices
- Population-specific accuracy assessment
- Algorithm transparency

**Factors Affecting Accuracy:**
- Walking speed (better at moderate speeds)
- Device placement (wrist vs hip vs pocket)
- Body composition
- Gait patterns
- Upper body activity

**Health Equity Considerations:**

**Access Disparities:**
- Cost barriers to device ownership
- Smartphone requirement
- Digital literacy needs
- Language and cultural adaptation

**Accuracy Disparities:**
- Validation predominantly in younger, white populations
- Gait pattern variations
- Body composition effects
- Skin tone effects on associated sensors

**Intervention Adaptation:**
- Cultural tailoring of goals and messaging
- Community-based delivery models
- Addressing environmental barriers
- Social determinants integration

**Implementation Science:**

**Adoption and Adherence:**
- Early novelty effect (first 3-6 months)
- Sustained use challenges
- Intervention intensity requirements
- Personalization for engagement

**Healthcare Integration:**
- EHR integration workflows
- Provider training and buy-in
- Reimbursement pathways
- Population health programs`,
      keyTerms: [
        { term: 'mortality risk', definition: 'Probability of death over specified time period' },
        { term: 'prehabilitation', definition: 'Preoperative preparation to improve outcomes' },
        { term: 'NEAT', definition: 'Non-Exercise Activity Thermogenesis - calories from non-exercise movement' },
        { term: 'digital endpoint', definition: 'Outcome measure derived from digital technology' },
        { term: 'fit-for-purpose', definition: 'Validation appropriate to intended use' },
        { term: 'novelty effect', definition: 'Initial increased engagement with new technology' },
      ],
      clinicalNotes: `Activity tracking offers clinical utility as an objective measure of physical behavior complementary to self-report. When prescribing activity tracking, set individualized goals rather than default 10,000 steps - some patients may benefit from 5,000 steps, others from 12,000. Consider baseline activity level and health status when goal-setting. Use activity data for trending rather than absolute values, as accuracy varies between devices and individuals. Address health equity by considering device access and validation across diverse populations. For sustained behavior change, activity tracking works best combined with coaching, social support, or other behavior change techniques. Monitor for signs of obsessive tracking or negative psychological effects. In clinical trials, activity endpoints require validation appropriate to the specific context of use.`,
    },
    5: {
      level: 5,
      summary: 'Activity tracking has matured into a clinical tool with validated applications in cardiovascular, metabolic, oncologic, and rehabilitative care, serving as a digital biomarker and clinical trial endpoint while confronting challenges in sustained adherence, health equity across diverse populations, healthcare workflow integration, and the need for sophisticated behavior change interventions beyond simple self-monitoring, with future evolution toward AI-powered personalization and integration with precision health approaches.',
      explanation: `## Activity Tracking: Advanced Topics and Future Directions

Activity tracking is advancing through artificial intelligence, precision health integration, and sophisticated behavior change science, while addressing fundamental challenges in personalization, equity, and clinical integration that will determine its long-term impact on population health.

**Artificial Intelligence Applications:**

**Activity Pattern Recognition:**
- Deep learning for activity classification
- Anomaly detection for health changes
- Predictive models for behavior lapse
- Context-aware activity recommendations

**Personalized Interventions:**
- Just-in-time adaptive interventions (JITAI)
- Reinforcement learning for optimal messaging
- Individualized goal-setting algorithms
- Precision behavior change matching

**Digital Biomarkers:**
- Frailty detection through gait patterns
- Depression screening through activity changes
- Cognitive decline early indicators
- Infection detection through resting patterns

**Precision Health Integration:**

**Genomic Integration:**
- Exercise response genomics
- Personalized activity prescriptions
- Gene-activity interaction monitoring
- Polygenic risk-informed goals

**Multi-Omics Approaches:**
- Activity and metabolomics
- Proteomic response to exercise
- Microbiome-activity interactions
- Integrated digital-omic phenotyping

**Pharmacogenomics:**
- Exercise-drug interactions
- Optimal timing of medication and activity
- Personalized rehabilitation protocols

**Advanced Behavioral Science:**

**Ecological Momentary Interventions:**
- Context-aware prompts
- Receptivity detection
- Micro-randomized trials for optimization
- Dynamic treatment regimes

**Social Network Approaches:**
- Network contagion for activity behavior
- Social norm interventions
- Community-level behavior change
- Peer support matching

**Gamification Evolution:**
- Narrative-based engagement
- Virtual reality integration
- Financial incentives (behavioral economics)
- Loss aversion framing

**Population Health Applications:**

**Surveillance and Public Health:**
- Population activity monitoring
- Built environment assessment
- Policy evaluation
- Health disparity tracking

**Environmental Health:**
- Activity-weather relationships
- Air quality effects on activity
- Urban design impact
- Climate change adaptation

**Global Health:**
- Low-cost activity tracking
- mHealth in LMICs
- Cultural adaptation
- Task shifting applications

**Clinical Integration Advances:**

**Automated Risk Stratification:**
- Activity-based readmission prediction
- Functional decline early warning
- Frailty assessment automation
- Mortality risk prediction

**Closed-Loop Systems:**
- Activity-responsive insulin delivery
- Automated physical therapy progression
- AI-driven rehabilitation
- Precision coaching systems

**Challenges and Future Directions:**

**Sustainability of Behavior Change:**
- Habit formation science
- Intrinsic motivation development
- Long-term adherence strategies
- Maintenance interventions

**Health Equity:**
- Universal design principles
- Reducing digital divides
- Algorithmic fairness
- Community-partnered research

**Regulatory and Ethical:**
- Activity data in insurance and employment
- Surveillance concerns
- Autonomy and manipulation
- Data governance frameworks

**Emerging Modalities:**
- Ambient activity monitoring
- Radar-based movement detection
- Computer vision activity recognition
- Smart environment integration`,
      keyTerms: [
        { term: 'JITAI', definition: 'Just-in-Time Adaptive Intervention - contextually triggered behavior change' },
        { term: 'micro-randomized trial', definition: 'Trial randomizing interventions within individuals over time' },
        { term: 'loss aversion', definition: 'Behavioral economics principle - losses loom larger than gains' },
        { term: 'built environment', definition: 'Human-made surroundings for human activity' },
        { term: 'intrinsic motivation', definition: 'Drive from internal satisfaction rather than external rewards' },
        { term: 'closed-loop', definition: 'Automated system with feedback for self-regulation' },
      ],
      clinicalNotes: `The future of activity tracking lies in AI-powered personalization that moves beyond one-size-fits-all recommendations to precision behavior change matched to individual characteristics, preferences, and contexts. When implementing activity tracking programs, consider intrinsic motivation development rather than reliance on extrinsic rewards. Address equity proactively through community-engaged approaches and algorithmic fairness validation. The integration of activity data with other omics data streams will enable truly personalized health optimization. However, remain vigilant about surveillance risks and data governance as continuous monitoring becomes ubiquitous. The goal should be empowering individuals with insight and agency rather than automated control. Activity tracking is most powerful when combined with environmental and policy changes that make healthy choices easier. Advocate for built environment modifications that support active lifestyles alongside individual-level interventions.`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],

  tags: {
    systems: [],
    topics: ['digital-health'],
    keywords: ['activity-tracking', 'physical-activity', 'exercise-monitoring', 'step-counting', 'fitness-tracking'],
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
