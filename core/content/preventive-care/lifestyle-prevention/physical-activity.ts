/**
 * Physical Activity for Disease Prevention
 *
 * Comprehensive education on exercise recommendations for preventing
 * chronic diseases and maintaining optimal health.
 */

import { EducationalContent } from '../../types';

export const PHYSICAL_ACTIVITY: EducationalContent = {
  id: 'preventive-physical-activity',
  type: 'concept',
  name: 'Physical Activity for Disease Prevention',
  alternateNames: ['Exercise recommendations', 'Physical fitness', 'Active lifestyle', 'Exercise prescription'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular physical activity helps prevent heart disease, diabetes, and many other health problems while improving mood and energy.',
      explanation: `Moving your body regularly is one of the best things you can do for your health. Exercise helps your heart, muscles, bones, and even your mood.

**Why Exercise Matters:**
- Makes your heart stronger
- Helps control weight
- Lowers blood sugar
- Strengthens bones and muscles
- Improves sleep
- Reduces stress and anxiety
- Boosts energy levels

**How Much Exercise Do You Need?**

*Adults should aim for:*
- At least 150 minutes of moderate activity per week (like brisk walking)
- OR 75 minutes of vigorous activity (like running)
- PLUS muscle-strengthening exercises 2 days a week

*Breaking it down:*
- 150 minutes = about 20-30 minutes daily
- Can be split into 10-minute chunks
- Any movement counts

**Types of Exercise:**

*Aerobic (Cardio):*
- Gets your heart pumping
- Examples: walking, swimming, biking, dancing
- Helps heart and lungs

*Strength Training:*
- Builds muscle
- Examples: lifting weights, using resistance bands, bodyweight exercises
- Helps bones and metabolism

*Flexibility:*
- Stretches muscles
- Examples: yoga, stretching
- Prevents injury

*Balance:*
- Prevents falls
- Examples: tai chi, standing on one foot
- Important for older adults

**Easy Ways to Be More Active:**
- Take the stairs instead of elevator
- Park farther from entrances
- Walk during lunch breaks
- Do household chores actively
- Play with kids or pets
- Take phone calls while walking

**Starting Safely:**
- Start slow if you are new to exercise
- Warm up before and cool down after
- Drink water
- Wear comfortable shoes
- Stop if you feel pain or chest discomfort`,
      keyTerms: [
        { term: 'aerobic exercise', definition: 'Activity that gets your heart rate up and improves heart and lung fitness' },
        { term: 'strength training', definition: 'Exercises that build muscle strength using resistance like weights or bands' },
        { term: 'moderate activity', definition: 'Exercise where you can talk but not sing while doing it' },
        { term: 'vigorous activity', definition: 'Exercise where you can only say a few words before needing to breathe' },
      ],
      analogies: [
        'Think of exercise like charging your phone - regular activity keeps your body\'s battery full and working well.',
        'Your body is like a car - it runs better when used regularly. Sitting too long is like leaving a car parked for months.',
      ],
      examples: [
        'Maria started walking 20 minutes during her lunch break. After 3 months, she had more energy and her doctor said her blood pressure improved.',
        'James took the stairs at work instead of the elevator. Over a year, this added up to significant extra activity.',
      ],
      patientCounselingPoints: [
        'You do not need a gym membership to be active - everyday activities count',
        'Start with small amounts and gradually increase',
        'Find activities you enjoy so you will stick with them',
        'Any movement is better than no movement',
        'Check with your doctor before starting if you have health conditions',
      ],
    },
    2: {
      level: 2,
      summary: 'Evidence-based physical activity guidelines recommend specific amounts of aerobic and resistance exercise to reduce risk of cardiovascular disease, diabetes, cancer, and premature mortality.',
      explanation: `Physical inactivity is a major modifiable risk factor for chronic disease. Understanding the evidence behind exercise recommendations helps optimize health outcomes.

**Current Guidelines (WHO/CDC):**

*Adults (18-64 years):*
- 150-300 minutes moderate-intensity OR 75-150 minutes vigorous-intensity aerobic activity per week
- Muscle-strengthening activities involving all major muscle groups on 2+ days per week
- Minimize sedentary time

*Older Adults (65+ years):*
- Same as adults plus:
- Balance training to prevent falls
- Adjust intensity based on fitness level

**Dose-Response Relationship:**

*Health Benefits Increase With Activity:*
| Activity Level | Relative Risk Reduction |
|----------------|------------------------|
| Sedentary | Baseline (highest risk) |
| Some activity | 20-30% risk reduction |
| Meeting guidelines | 30-40% risk reduction |
| Exceeding guidelines | Up to 50% risk reduction |

*Diminishing Returns:*
- Greatest benefit from sedentary to some activity
- Benefits continue but at slower rate with more exercise
- No upper limit identified for health benefits

**Disease-Specific Prevention:**

*Cardiovascular Disease:*
- 30% risk reduction with regular activity
- Improves blood pressure, lipids, endothelial function
- Both aerobic and resistance training beneficial

*Type 2 Diabetes:*
- 40-50% risk reduction
- Improves insulin sensitivity
- Helps maintain healthy weight
- 150 min/week plus resistance training optimal

*Cancer Prevention:*
- Colon cancer: 20-30% risk reduction
- Breast cancer: 20-30% risk reduction
- Endometrial cancer: 20-30% risk reduction
- Mechanisms: hormone regulation, immune function, weight control

*Mental Health:*
- Reduces depression and anxiety symptoms
- Comparable effect to medication for mild-moderate depression
- Improves cognitive function and sleep quality

**Types of Exercise and Benefits:**

*Moderate-Intensity Activities:*
- Brisk walking (3-4 mph)
- Recreational swimming
- Biking on flat terrain
- Dancing
- Yard work
- Target heart rate: 50-70% maximum

*Vigorous-Intensity Activities:*
- Running/jogging
- Swimming laps
- Biking fast or uphill
- Jumping rope
- Singles tennis
- Target heart rate: 70-85% maximum

*Resistance Training:*
- 2-3 sets of 8-12 repetitions per exercise
- Work all major muscle groups
- Rest 48 hours between sessions
- Progressive overload principle

**Barriers and Solutions:**
| Barrier | Solution |
|---------|----------|
| Time constraints | Break into 10-minute chunks |
| Cost | Walking, bodyweight exercises free |
| Motivation | Find enjoyable activities, exercise buddy |
| Safety concerns | Start low intensity, proper equipment |
| Weather | Indoor alternatives, mall walking |

**Special Considerations:**
- Pregnancy: Generally safe, modify as needed
- Chronic conditions: Benefits usually outweigh risks
- Post-surgical: Follow rehabilitation protocols`,
      keyTerms: [
        { term: 'METs', definition: 'Metabolic equivalents; measure of exercise intensity where 1 MET is resting energy expenditure' },
        { term: 'moderate-intensity', definition: 'Exercise at 3-6 METs where you can talk but not sing' },
        { term: 'vigorous-intensity', definition: 'Exercise at >6 METs where speaking is difficult' },
        { term: 'progressive overload', definition: 'Gradually increasing exercise stress to continue improving fitness' },
        { term: 'sedentary behavior', definition: 'Sitting or reclining with low energy expenditure during waking hours' },
      ],
      analogies: [
        'Exercise is like compound interest for your health - small consistent investments yield large long-term returns.',
        'Your cardiovascular system is like a highway - regular exercise keeps traffic flowing smoothly and prevents blockages.',
      ],
      examples: [
        'A 45-year-old with prediabetes started walking 30 minutes daily and doing resistance training twice weekly. After 6 months, their A1c returned to normal range.',
      ],
    },
    3: {
      level: 3,
      summary: 'Physical activity recommendations are based on extensive epidemiological evidence demonstrating dose-dependent reductions in all-cause mortality and specific diseases, with mechanisms including improved cardiovascular function, metabolic regulation, inflammatory modulation, and neuroplasticity.',
      explanation: `**Evidence Base for Physical Activity:**

*Epidemiological Studies:*
- Lee et al. Lancet 2012: Physical inactivity causes 9% of premature deaths worldwide
- Moore et al. JAMA 2012: 7-hour/week walking associated with 40% lower mortality
- Large cohorts: NHS, HPFS, ACLS consistently show inverse relationships

*Meta-Analyses:*
- Warburton et al. CMAJ 2006: Physical activity reduces all-cause mortality by 33%
- Moderate activity shows greatest benefit per unit time
- Benefits observed across all BMI categories

**Mechanisms of Protection:**

*Cardiovascular:*
- Improved endothelial function and nitric oxide bioavailability
- Reduced arterial stiffness
- Favorable lipid profile changes (increased HDL, decreased triglycerides)
- Reduced resting blood pressure (5-10 mmHg average)
- Improved cardiac efficiency and stroke volume

*Metabolic:*
- Enhanced insulin sensitivity through GLUT4 translocation
- Increased skeletal muscle glucose uptake
- Improved mitochondrial function and biogenesis
- Adiponectin increase and leptin optimization
- Reduced visceral adiposity

*Anti-inflammatory Effects:*
- Reduced CRP, IL-6, TNF-alpha
- Increased anti-inflammatory cytokines (IL-10)
- Reduced systemic inflammation
- Modulation of immune function

*Neurobiological:*
- BDNF (brain-derived neurotrophic factor) elevation
- Neurogenesis in hippocampus
- Improved cerebral blood flow
- Reduced cortisol and stress response
- Endorphin and endocannabinoid release

**Prescription Framework:**

*FITT-VP Principles:*
- Frequency: How often
- Intensity: How hard
- Time: How long
- Type: What kind
- Volume: Total amount (MET-minutes)
- Progression: How to advance

*Aerobic Prescription:*
| Component | General Health | Fitness Improvement |
|-----------|----------------|---------------------|
| Frequency | 5 days/week | 3-5 days/week |
| Intensity | 50-70% HRR | 70-85% HRR |
| Time | 30 min | 20-60 min |
| Type | Any rhythmic | Sport-specific |

*Resistance Prescription:*
- Frequency: 2-3 days/week
- Intensity: 60-80% 1RM (8-12 RM)
- Volume: 2-4 sets, 8-12 reps
- Rest: 2-3 minutes between sets
- Exercise all major muscle groups

**Clinical Applications:**

*Primary Prevention:*
- Screen for physical activity (exercise vital sign)
- Counsel on benefits
- Provide specific recommendations
- Refer to exercise programs when appropriate

*Secondary Prevention (Post-MI, CVD):*
- Cardiac rehabilitation referral
- Graduated exercise prescription
- Monitoring during initial phases
- Home-based programs for access

*Diabetes Management:*
- Both aerobic and resistance training
- Post-meal walks improve glycemic control
- Reduce medication requirements
- Monitor for hypoglycemia

**Measuring Physical Activity:**

*Objective Measures:*
- Accelerometry (gold standard for research)
- Pedometers (10,000 steps heuristic)
- Heart rate monitors
- Doubly labeled water (energy expenditure)

*Subjective Measures:*
- IPAQ (International Physical Activity Questionnaire)
- Exercise vital sign (minutes per week)
- Activity logs/diaries

**Sedentary Behavior Research:**

*Independent Risk Factor:*
- Prolonged sitting increases risk even if meeting exercise guidelines
- Mechanisms: Reduced lipoprotein lipase activity, impaired glucose uptake
- Interruption strategies: Standing every 30 minutes, walking breaks

*Recommendations:*
- Break up sitting every 30-60 minutes
- Stand for portions of workday if possible
- Walking meetings
- Reduce screen time`,
      keyTerms: [
        { term: 'HRR', definition: 'Heart rate reserve; difference between maximum and resting heart rate, used for exercise prescription' },
        { term: 'MET-minutes', definition: 'Measure of exercise volume; MET value times duration in minutes' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor; protein supporting neuron survival and growth, increased by exercise' },
        { term: 'lipoprotein lipase', definition: 'Enzyme breaking down triglycerides; activity suppressed during prolonged sitting' },
        { term: '1RM', definition: 'One-repetition maximum; maximum weight liftable for one repetition' },
      ],
      clinicalNotes: 'Screen all patients for physical activity using exercise vital sign (minutes/week). Prescribe specific exercise using FITT-VP framework. For sedentary patients, emphasize that some activity is better than none. Consider cardiac rehab referral for CVD patients. Address barriers specific to patient circumstances.',
    },
    4: {
      level: 4,
      summary: 'Advanced exercise prescription integrates physiological testing, training periodization, and population-specific considerations while addressing implementation strategies for healthcare systems and the translation of sports science research to clinical populations.',
      explanation: `**Exercise Physiology Foundations:**

*Energy Systems:*
- Phosphagen system: Immediate, high-intensity (<10 seconds)
- Glycolytic system: Moderate duration, high intensity (30 sec - 2 min)
- Oxidative system: Prolonged activity (aerobic)
- Training adaptations specific to system stressed

*Cardiovascular Adaptations:*
- Cardiac remodeling: Increased chamber volume, wall thickness
- Improved stroke volume and cardiac output
- Lower resting and submaximal heart rate
- Enhanced oxygen extraction (a-vO2 difference)

*Skeletal Muscle Adaptations:*
- Increased capillary density
- Increased mitochondrial density and function
- Improved oxidative enzyme activity
- Muscle fiber type transitions (limited)
- Enhanced fat oxidation capacity

**Clinical Exercise Testing:**

*Indications:*
- Diagnostic: Symptoms evaluation, ischemia detection
- Prognostic: Risk stratification post-MI
- Therapeutic: Exercise prescription, rehabilitation
- Functional: Disability assessment

*Protocols:*
- Bruce protocol (most common)
- Modified Bruce (lower fitness)
- Ramp protocols (continuous increase)
- Protocol selection based on patient

*Key Measurements:*
- Peak VO2 (gold standard for fitness)
- MET level achieved
- Heart rate and BP response
- ECG changes (ST segments, arrhythmias)
- Symptoms

*Interpretation:*
| Peak METs | Prognostic Category |
|-----------|---------------------|
| <5 | Poor prognosis |
| 5-8 | Fair prognosis |
| 8-10 | Good prognosis |
| >10 | Excellent prognosis |

**Training Periodization:**

*Principles:*
- Progressive overload
- Specificity
- Individualization
- Reversibility (detraining)
- Periodization (planned variation)

*Periodization Models:*
- Linear: Gradual intensity increase, volume decrease
- Undulating: Daily/weekly variation
- Block: Focused training blocks
- Concurrent: Multiple qualities simultaneously

*For Clinical Populations:*
- Conservative progression
- Longer adaptation phases
- Monitoring for adverse events
- Maintenance phases important

**Population-Specific Considerations:**

*Older Adults (>65 years):*
- Greater relative benefit from exercise
- Emphasize balance and fall prevention
- Consider sarcopenia and frailty
- Resistance training especially important
- Functional fitness focus

*Pregnancy:*
- Generally safe if no contraindications
- Avoid supine positions after first trimester
- Monitor for warning signs
- Pelvic floor exercises
- Postpartum gradual return

*Cancer Survivors:*
- Safe during and after treatment
- Reduces fatigue, improves QOL
- May reduce recurrence risk
- Lymphedema precautions
- Bone health after certain treatments

*Mental Health Conditions:*
- Exercise as adjunctive treatment
- Consider social components
- Address motivation challenges
- Mind-body exercises beneficial
- Consistency over intensity

**Healthcare System Implementation:**

*Exercise is Medicine (EIM):*
- Screen all patients
- Assess physical activity
- Provide brief counseling
- Refer to qualified professionals
- Track in medical record

*Behavior Change Strategies:*
- Motivational interviewing
- Goal setting (SMART goals)
- Self-monitoring
- Social support
- Environmental restructuring

*Technology Integration:*
- Wearable devices for monitoring
- Smartphone apps for tracking
- Telehealth exercise counseling
- Virtual reality for engagement
- AI-based personalization

**Emerging Research:**

*High-Intensity Interval Training (HIIT):*
- Time-efficient alternative
- Superior to MICT for some outcomes
- May be better adherence
- Considerations for clinical populations

*Exercise Mimetics:*
- Pharmacological activation of exercise pathways
- Potential for those unable to exercise
- Research stage only
- Not replacement for exercise

*Personalized Exercise Genomics:*
- Genetic variants affecting response
- ACTN3 and power/strength
- ACE and endurance
- Limited clinical utility currently`,
      keyTerms: [
        { term: 'VO2 max', definition: 'Maximum oxygen uptake; gold standard measure of cardiovascular fitness' },
        { term: 'periodization', definition: 'Systematic planning of training with planned variation in volume and intensity' },
        { term: 'a-vO2 difference', definition: 'Arteriovenous oxygen difference; measure of oxygen extraction by tissues' },
        { term: 'sarcopenia', definition: 'Age-related loss of muscle mass and function' },
        { term: 'HIIT', definition: 'High-intensity interval training; alternating short bursts of intense activity with recovery' },
      ],
      clinicalNotes: 'Consider exercise stress testing for high-risk patients before vigorous programs. Use periodization principles for athletic patients. Implement EIM framework in practice. Screen for fall risk in older adults. Consider cardiac rehab referral. Use behavior change techniques for adherence.',
    },
    5: {
      level: 5,
      summary: 'Expert exercise prescription requires integrating molecular exercise physiology, precision exercise approaches, systems implementation science, and health equity considerations to maximize population-level impact on chronic disease prevention.',
      explanation: `**Molecular Exercise Physiology:**

*Signaling Pathways:*
- AMPK: Cellular energy sensor, promotes catabolism
- mTOR: Anabolic signaling, muscle protein synthesis
- PGC-1alpha: Mitochondrial biogenesis master regulator
- Sirtuins: NAD+-dependent deacetylases, longevity
- MAPK: Stress response, adaptation

*Exercise Factors (Myokines):*
- IL-6: Dual role (inflammatory vs metabolic)
- Irisin: Browning of white adipose tissue
- Myostatin: Negative regulator of muscle growth
- BDNF: Neuroprotection and cognition
- FGF21: Metabolic regulation

*Epigenetic Modifications:*
- DNA methylation changes with exercise
- Histone modifications
- miRNA expression alterations
- Transgenerational effects proposed
- Tissue-specific patterns

**Precision Exercise:**

*Individual Response Variability:*
- High responders vs low responders
- Genetic factors account for ~50% of variance
- Non-responders rare (need higher dose)
- Adverse responders exist (rare)

*Predictive Factors:*
| Factor | Exercise Response |
|--------|-------------------|
| Genetics | VO2 max trainability |
| Baseline fitness | Ceiling effects |
| Sex | Some differential responses |
| Age | Attenuated but present |
| Training history | Diminishing returns |

*Personalization Approaches:*
- Exercise prescription algorithms
- Biomarker-guided training
- Artificial intelligence optimization
- Multi-omic integration

**Implementation Science:**

*Health System Strategies:*
- Electronic health record integration
- Automated risk stratification
- Best practice alerts
- Registry-based management
- Quality metrics tracking

*Population Health Models:*
| Model | Description | Effectiveness |
|-------|-------------|---------------|
| Referral to facilities | Community programs | Moderate |
| Home-based programs | Telehealth supported | Good |
| Built environment | Policy changes | Population-level |
| Workplace wellness | Employer programs | Mixed |
| Digital health | Apps, wearables | Emerging |

*Cost-Effectiveness:*
- Physical activity counseling: Highly cost-effective
- Exercise referral schemes: Favorable ICERs
- Community programs: Good value
- Workplace programs: Mixed evidence

**Health Equity Considerations:**

*Disparities in Physical Activity:*
- Lower activity in low-income populations
- Racial/ethnic disparities
- Geographic variation (rural vs urban)
- Built environment inequities
- Safety concerns

*Social Determinants:*
- Neighborhood walkability
- Access to facilities
- Time constraints
- Cultural factors
- Historical disinvestment

*Equity-Focused Interventions:*
- Community-based participatory research
- Culturally tailored programs
- Addressing structural barriers
- Financial subsidies
- Safe spaces for activity

**Special Populations - Advanced:**

*Athletes with Medical Conditions:*
- Cardiac conditions (HCM, ARVC, channelopathies)
- Diabetes in athletes
- Athletes with disabilities
- Return to play decisions

*Chronic Disease Management:*
| Condition | Exercise Considerations |
|-----------|------------------------|
| Heart failure | Need for hemodynamic monitoring |
| COPD | Oxygen saturation monitoring |
| CKD | Volume status, electrolytes |
| Cancer | Treatment timing, immune status |
| Autoimmune | Flare management |

**Future Directions:**

*Technology Integration:*
- Continuous glucose monitoring + exercise
- AI-powered coaching
- Virtual reality exercise environments
- Implantable sensors (research)
- Exoskeletons for mobility limitations

*Exercise as Medicine 3.0:*
- Prescription specificity matching pharmaceuticals
- Dose optimization for specific outcomes
- Combination therapies (exercise + drug)
- Preventive exercise in youth

*Research Priorities:*
1. Optimal exercise for cognitive health
2. Exercise in cancer prevention (primary)
3. Microbiome-exercise interactions
4. Longevity effects
5. Immune function modulation
6. Health equity interventions

**Clinical Excellence Framework:**

*Individual Level:*
- Comprehensive fitness assessment
- Personalized exercise prescription
- Behavior change support
- Monitoring and adjustment
- Long-term adherence strategies

*System Level:*
- Exercise vital sign in all encounters
- Automated referral pathways
- Community partnership development
- Quality improvement cycles
- Health equity monitoring

*Professional Development:*
- Exercise physiology knowledge
- Behavior change expertise
- Cultural competence
- Technology proficiency
- Advocacy skills`,
      keyTerms: [
        { term: 'AMPK', definition: 'AMP-activated protein kinase; cellular energy sensor activated by exercise, regulates metabolism' },
        { term: 'PGC-1alpha', definition: 'Peroxisome proliferator-activated receptor gamma coactivator 1-alpha; master regulator of mitochondrial biogenesis' },
        { term: 'myokine', definition: 'Cytokine or peptide produced and released by muscle fibers during contraction' },
        { term: 'exercise mimetics', definition: 'Pharmaceutical compounds designed to activate exercise-induced pathways without physical activity' },
        { term: 'ICER', definition: 'Incremental cost-effectiveness ratio; measure of cost-effectiveness comparing intervention to alternative' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Understand molecular mechanisms to optimize prescriptions
- Recognize and address response variability
- Lead health system implementation of exercise medicine
- Champion health equity in physical activity access
- Stay current on technology integration
- Consider exercise as first-line therapy for many conditions
- Develop community partnerships
- Track quality metrics
- Mentor trainees in exercise prescription
- Engage in research on exercise implementation`,
    },
  },

  media: [
    {
      id: 'exercise-guidelines-infographic',
      type: 'diagram',
      filename: 'exercise-guidelines-infographic.svg',
      title: 'Physical Activity Guidelines Summary',
      description: 'Visual summary of WHO/CDC physical activity recommendations by age group',
    },
  ],

  citations: [
    {
      id: 'who-guidelines-2020',
      type: 'website',
      title: 'WHO Guidelines on Physical Activity and Sedentary Behaviour',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789240015128',
      accessedDate: '2025-01-28',
    },
    {
      id: 'piercy-2018',
      type: 'article',
      title: 'The Physical Activity Guidelines for Americans',
      authors: ['Piercy KL', 'Troiano RP', 'Ballard RM', 'et al.'],
      source: 'JAMA',
      accessedDate: '2025-01-28',
    },
    {
      id: 'warburton-2006',
      type: 'article',
      title: 'Health benefits of physical activity: the evidence',
      authors: ['Warburton DE', 'Nicol CW', 'Bredin SS'],
      source: 'CMAJ',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'preventive-diet-prevention', targetType: 'concept', relationship: 'related', label: 'Diet and Nutrition Prevention' },
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
  ],

  tags: {
    systems: ['preventive-care', 'cardiovascular', 'musculoskeletal'],
    topics: ['preventive medicine', 'exercise physiology', 'chronic disease prevention'],
    keywords: ['physical activity', 'exercise', 'fitness', 'cardiovascular health', 'diabetes prevention', 'aerobic exercise', 'resistance training'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
