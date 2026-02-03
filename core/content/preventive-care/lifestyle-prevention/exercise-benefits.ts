/**
 * Exercise Benefits for Disease Prevention
 *
 * Comprehensive education on the health benefits of physical activity
 * and exercise for preventing chronic diseases.
 */

import { EducationalContent } from '../../types';

export const EXERCISE_BENEFITS: EducationalContent = {
  id: 'preventive-exercise-benefits',
  type: 'concept',
  name: 'Exercise Benefits for Disease Prevention',
  alternateNames: ['Physical activity benefits', 'Exercise and health', 'Fitness for disease prevention', 'Physical activity guidelines'],

  levels: {
    1: {
      level: 1,
      summary: 'Regular exercise helps prevent many diseases and makes you feel better both physically and mentally.',
      explanation: `Moving your body regularly is one of the best things you can do for your health. Exercise prevents many diseases and helps you live longer.

**Why Exercise Matters:**
- Makes your heart stronger
- Helps control your weight
- Keeps your bones healthy
- Improves your mood
- Gives you more energy
- Helps you sleep better

**Health Problems Exercise Can Prevent:**

*Heart Disease:*
- Exercise makes your heart pump better
- Lowers blood pressure
- Keeps blood vessels healthy

*Diabetes:*
- Helps your body use sugar better
- Keeps weight under control

*Cancer:*
- May reduce risk of colon, breast, and other cancers
- Helps maintain healthy weight

*Osteoporosis:*
- Weight-bearing exercise keeps bones strong
- Important especially as you get older

*Mental Health:*
- Reduces stress and anxiety
- Helps with depression
- Improves brain function

**How Much Exercise Do You Need?**

*For Adults:*
- 150 minutes per week of moderate activity (like brisk walking)
- OR 75 minutes per week of vigorous activity (like jogging)
- Plus muscle-strengthening 2 days per week

*What Counts as Exercise?*
- Walking quickly
- Swimming
- Biking
- Dancing
- Gardening
- Playing sports

**Getting Started:**

*Tips for Beginners:*
- Start slowly - even 10 minutes helps
- Choose activities you enjoy
- Find a friend to exercise with
- Set small goals
- Make it part of your routine

*Easy Ways to Move More:*
- Take the stairs instead of elevator
- Walk during lunch breaks
- Park farther away
- Do housework actively
- Play with kids or pets

**Important Points:**
- Any movement is better than none
- It is never too late to start
- Talk to your doctor if you have health conditions
- Build up slowly to avoid injury`,
      keyTerms: [
        { term: 'moderate activity', definition: 'Exercise that makes you breathe harder but you can still talk, like brisk walking' },
        { term: 'vigorous activity', definition: 'Exercise that makes you breathe very hard and is difficult to talk, like running' },
        { term: 'weight-bearing exercise', definition: 'Activity where you support your body weight on your feet and legs, which strengthens bones' },
      ],
      analogies: [
        'Your body is like a machine - it works better and lasts longer when you use it regularly.',
        'Exercise is like an investment account for your health - small deposits now pay big dividends later.',
      ],
      examples: [
        'Susan started walking 20 minutes every day after dinner. After 3 months, she lost 10 pounds, her blood pressure went down, and she felt happier.',
      ],
      patientCounselingPoints: [
        'Start with what you can do - any amount of exercise is better than none',
        'Find activities you enjoy so you will stick with them',
        'It is okay to break exercise into shorter sessions throughout the day',
        'Talk to your doctor before starting if you have health concerns',
      ],
    },
    2: {
      level: 2,
      summary: 'Physical activity guidelines recommend 150-300 minutes of moderate aerobic activity weekly plus muscle strengthening, with strong evidence for reducing cardiovascular disease, diabetes, cancer, and all-cause mortality.',
      explanation: `Physical activity is one of the most powerful preventive medicine interventions available. Evidence supports specific recommendations for optimal health benefits.

**Physical Activity Guidelines for Americans (2018):**

**Adults (18-64 years):**
- Aerobic: 150-300 min/week moderate OR 75-150 min/week vigorous
- Muscle-strengthening: 2+ days/week, all major muscle groups
- Additional benefits with more activity
- Some activity better than none

**Older Adults (65+):**
- Same as adults, plus:
- Balance training for fall prevention
- Match activity to abilities
- Chronic conditions may require modification

**Children and Adolescents:**
- 60+ minutes daily of moderate-to-vigorous activity
- Mostly aerobic, with vigorous 3+ days/week
- Muscle and bone strengthening 3+ days/week

**Types of Physical Activity:**

*Aerobic (Cardio):*
| Intensity | Examples | Heart Rate Zone |
|-----------|----------|-----------------|
| Light | Casual walking | <50% max HR |
| Moderate | Brisk walking, swimming | 50-70% max HR |
| Vigorous | Running, cycling fast | 70-85% max HR |

*Muscle Strengthening:*
- Weight training
- Resistance bands
- Body weight exercises (pushups, squats)
- Heavy gardening

*Flexibility:*
- Stretching
- Yoga
- Tai chi

**Health Benefits by Condition:**

**Cardiovascular Disease:**
- 20-35% reduction in CVD risk with recommended activity
- Reduces blood pressure (4-9 mmHg)
- Improves lipid profile (increases HDL, lowers triglycerides)
- Improves endothelial function

**Type 2 Diabetes:**
- 30-50% reduction in diabetes risk
- Improves insulin sensitivity
- Lowers HbA1c in those with diabetes
- Combination of aerobic + resistance most effective

**Cancer:**
- Reduces colon cancer risk by 30-40%
- Reduces breast cancer risk by 20-30%
- May reduce risk of lung, endometrial, other cancers
- Benefits through weight control, hormonal effects, immune function

**Mental Health:**
- Reduces depression symptoms (comparable to medication)
- Reduces anxiety
- Improves cognitive function
- May reduce dementia risk

**Bone Health:**
- Weight-bearing exercise maintains bone density
- Reduces osteoporosis risk
- Reduces fall risk in elderly

**Mortality:**

*Dose-Response Relationship:*
- Even minimal activity reduces mortality vs sedentary
- Optimal benefits around 7000-8000 steps/day
- Additional benefits continue beyond minimum recommendations
- No upper limit for health benefits documented

**Sedentary Behavior:**
- Prolonged sitting is independent risk factor
- Associated with increased mortality
- Break up sitting with movement throughout day
- Stand, stretch every 30-60 minutes

**Special Populations:**

*Chronic Conditions:*
- Most conditions: Exercise safe and beneficial
- Cardiac disease: Supervised programs available
- Diabetes: Monitor blood glucose
- Arthritis: Low-impact activities
- Pregnancy: 150 min/week moderate activity safe

*Starting Exercise After Inactivity:*
- Start slowly, progress gradually
- "Start low and go slow"
- 10% increase per week
- Listen to body, rest when needed`,
      keyTerms: [
        { term: 'MET', definition: 'Metabolic equivalent of task; measure of exercise intensity where 1 MET equals resting energy expenditure' },
        { term: 'aerobic exercise', definition: 'Physical activity that increases heart rate and breathing, using large muscle groups' },
        { term: 'resistance training', definition: 'Exercise using weights or resistance to strengthen muscles' },
        { term: 'sedentary behavior', definition: 'Activities involving little energy expenditure while sitting or lying down' },
        { term: 'dose-response', definition: 'Relationship where more exercise generally provides greater health benefits' },
      ],
      analogies: [
        'Think of exercise like brushing your teeth - it should be a daily habit, not an occasional event.',
      ],
    },
    3: {
      level: 3,
      summary: 'Exercise physiology research demonstrates protective mechanisms including improved cardiorespiratory fitness, metabolic optimization, anti-inflammatory effects, and molecular adaptations, with dose-response relationships guiding prescriptions for primary and secondary prevention across disease states.',
      explanation: `**Mechanisms of Exercise Benefits:**

**Cardiovascular Adaptations:**

*Central Adaptations:*
- Increased stroke volume
- Reduced resting heart rate
- Improved myocardial efficiency
- Enhanced coronary perfusion

*Peripheral Adaptations:*
- Improved endothelial function (NO bioavailability)
- Reduced arterial stiffness
- Capillary density increase
- Improved oxygen extraction

*Metabolic Effects:*
- Increased HDL-C (2-10%)
- Reduced triglycerides (10-20%)
- Improved LDL particle size
- Enhanced lipid oxidation

**Metabolic Adaptations:**

*Glucose Homeostasis:*
- Increased GLUT4 translocation
- Enhanced insulin signaling
- Improved muscle glucose uptake
- Reduced hepatic glucose output

*Insulin Sensitivity:*
- Acute effects: Enhanced 24-48 hours post-exercise
- Chronic effects: Sustained improvement with regular activity
- Combination aerobic + resistance optimal

**Anti-Inflammatory Effects:**

*Myokines:*
- IL-6 release during exercise (anti-inflammatory in this context)
- IL-10 induction
- Reduction of chronic low-grade inflammation
- Decreased CRP with regular training

*Adipose Tissue:*
- Reduced visceral fat
- Decreased adipokine release
- Improved adiponectin levels

**Cardiorespiratory Fitness:**

*VO2max:*
- Single strongest predictor of mortality
- Each 1 MET increase: 12% mortality reduction
- Trainable at any age
- More predictive than traditional risk factors

*Fitness Categories:*
| Category | VO2max (mL/kg/min) | Relative Risk |
|----------|--------------------|---------------|
| Low | <20 | Reference |
| Moderate | 20-30 | 0.5x |
| High | >30 | 0.3x |

**Dose-Response Relationships:**

*Mortality:*
- Greatest benefit: Sedentary to light activity transition
- Continued benefit to ~10,000 steps/day
- No increased harm at very high levels
- Curve shape: Curvilinear with diminishing returns

*Cardiovascular Disease:*
- Minimum effective dose: ~1000 MET-min/week
- Optimal: 3000-4000 MET-min/week
- Running ~10 min/day associated with 30% mortality reduction

**Exercise Prescription Framework:**

*FITT-VP Principle:*
- **F**requency: How often
- **I**ntensity: How hard
- **T**ime: Duration
- **T**ype: Mode of exercise
- **V**olume: Total amount
- **P**rogression: How to advance

*Practical Prescriptions:*
| Goal | Frequency | Intensity | Time | Type |
|------|-----------|-----------|------|------|
| General health | 5 days/week | Moderate | 30-60 min | Aerobic |
| Weight loss | 5-7 days | Moderate-vigorous | 45-60 min | Aerobic + resistance |
| Diabetes prevention | 5 days | Moderate | 30 min | Aerobic + resistance |
| Cardiac rehab | 3-5 days | Prescribed | 30-60 min | Supervised aerobic |

**High-Intensity Interval Training (HIIT):**
- Short bursts of high intensity + recovery
- Time-efficient
- Superior VO2max improvement
- Similar or greater health benefits
- May improve adherence
- Examples: 4x4 Norwegian protocol, Tabata

**Resistance Training Benefits:**

*Beyond Muscle Mass:*
- Glycemic control (independent of aerobic)
- Bone health
- Functional capacity
- Sarcopenia prevention
- Metabolic rate maintenance

*Guidelines:*
- 2-3 sessions per week
- 8-10 exercises, major muscle groups
- 8-12 repetitions per set
- 2-4 sets
- Progressive overload

**Exercise Testing:**

*Indications for Pre-Exercise Evaluation:*
- Symptomatic individuals
- Known cardiovascular disease
- High-risk (multiple risk factors)
- Starting vigorous exercise after sedentary lifestyle

*Risk Stratification:*
- ACSM guidelines
- Exercise preparticipation health screening
- Most can begin moderate activity without clearance

**Adverse Effects:**

*Cardiovascular Events:*
- Acute MI and SCD risk transiently elevated during vigorous exercise
- But regular exercisers have lower absolute risk
- Net benefit strongly positive

*Musculoskeletal Injury:*
- Risk increases with intensity
- Gradual progression reduces risk
- Proper technique important
- Recovery adequate between sessions`,
      keyTerms: [
        { term: 'VO2max', definition: 'Maximum oxygen uptake; gold standard measure of cardiorespiratory fitness' },
        { term: 'myokines', definition: 'Signaling proteins released by muscle during exercise with anti-inflammatory and metabolic effects' },
        { term: 'GLUT4', definition: 'Glucose transporter type 4; protein that enables glucose uptake into muscle cells' },
        { term: 'HIIT', definition: 'High-intensity interval training; alternating periods of intense exercise and recovery' },
        { term: 'FITT-VP', definition: 'Exercise prescription framework: Frequency, Intensity, Time, Type, Volume, Progression' },
      ],
      clinicalNotes: 'Prescribe exercise using FITT-VP framework. Cardiorespiratory fitness is more predictive than traditional risk factors. Most patients can start moderate activity without formal clearance. Consider HIIT for time-efficient fitness gains. Recommend combination aerobic + resistance for optimal metabolic benefits.',
    },
    4: {
      level: 4,
      summary: 'Advanced exercise medicine integrates molecular exercise physiology, precision exercise prescription based on genotype and phenotype, cardiac rehabilitation science, and population health strategies while addressing implementation challenges, special populations, and the translation of exercise trial evidence to clinical practice.',
      explanation: `**Molecular Exercise Adaptations:**

*Signaling Pathways:*
- AMPK activation: Energy sensing, metabolic regulation
- PGC-1α: Mitochondrial biogenesis
- mTOR: Muscle protein synthesis
- VEGF: Angiogenesis

*Mitochondrial Adaptations:*
- Increased mitochondrial density
- Enhanced oxidative capacity
- Improved substrate utilization
- Reduced oxidative stress

*Epigenetic Effects:*
- DNA methylation changes
- Histone modifications
- Gene expression alterations
- Transgenerational effects (emerging evidence)

**Precision Exercise:**

*Genomic Considerations:*
| Gene | Effect | Implication |
|------|--------|-------------|
| ACTN3 | Power vs endurance | Training response |
| ACE | Endurance capacity | VO2max trainability |
| PPARGC1A | Metabolic adaptation | Mitochondrial response |

*Phenotypic Response:*
- High vs low responders to training
- ~15-20% are "low responders"
- May require different prescription
- HIIT may help low responders

*Wearable Integration:*
- Heart rate variability monitoring
- Recovery optimization
- Training load management
- Sleep and readiness

**Cardiac Rehabilitation:**

*Components:*
- Medical evaluation
- Supervised exercise
- Cardiovascular risk modification
- Patient education
- Psychological support

*Outcomes:*
- 20-30% mortality reduction post-MI
- Reduced hospitalizations
- Improved quality of life
- Cost-effective

*Barriers:*
- Underutilization (~20-30% of eligible)
- Geographic access
- Insurance coverage
- Patient awareness
- Referral gaps

*Home-Based CR:*
- Similar outcomes to center-based
- Improves access
- Technology-assisted monitoring
- Expanding utilization

**Exercise in Chronic Disease:**

*Heart Failure:*
- HFrEF: Exercise training improves functional capacity
- HF-ACTION trial: Modest outcomes improvement
- Safety established
- Guideline-recommended

*Chronic Kidney Disease:*
- Improves fitness, quality of life
- Safe across CKD stages
- Intradialytic exercise feasible
- May slow progression

*Cancer:*
- Safe during and after treatment
- Reduces fatigue
- Improves quality of life
- May improve survival (emerging data)

*COPD:*
- Pulmonary rehabilitation cornerstone
- Improves dyspnea, exercise tolerance
- Reduces hospitalizations
- Effects extend beyond lungs

**Sedentary Physiology:**

*Metabolic Consequences:*
- Reduced lipoprotein lipase activity
- Impaired glucose uptake
- Increased insulin resistance
- Enhanced lipogenesis

*Breaking Up Sitting:*
- 2-5 minute breaks every 30 minutes
- Reduces postprandial glucose
- Attenuates triglyceride rise
- Light activity sufficient

*Occupational Considerations:*
- Sit-stand desks
- Walking meetings
- Active commuting
- Workplace wellness programs

**Population Health Strategies:**

*Built Environment:*
- Walkable neighborhoods
- Bike infrastructure
- Park access
- Safe streets

*Policy Interventions:*
- Physical education requirements
- Active transportation funding
- Workplace wellness incentives
- Healthcare integration

*Effective Behavior Change:*
| Intervention | Effect Size | Sustainability |
|--------------|-------------|----------------|
| Provider counseling | Small | Variable |
| Community programs | Moderate | Variable |
| Environmental change | Moderate | High |
| Policy change | Large | High |

**Implementation Challenges:**

*Healthcare System:*
- Brief counseling time
- Lack of reimbursement
- Limited exercise professionals
- Fragmented services

*Patient Barriers:*
- Time constraints
- Access (gym, safe spaces)
- Health conditions
- Motivation
- Cost

*Solutions:*
- Exercise is Medicine initiative
- Brief counseling tools
- Referral pathways
- Community partnerships
- Technology-assisted support

**Emerging Research:**

*Exercise Mimetics:*
- Pharmacological activation of exercise pathways
- AMPK activators (metformin mimics some effects)
- Research stage
- Will not replace exercise

*Precision Dosing:*
- Continuous monitoring
- AI-guided prescriptions
- Individualized optimization

*Microvascular Effects:*
- Capillary density
- Blood-brain barrier
- Cognitive benefits mechanism`,
      keyTerms: [
        { term: 'AMPK', definition: 'AMP-activated protein kinase; cellular energy sensor activated by exercise' },
        { term: 'PGC-1α', definition: 'Peroxisome proliferator-activated receptor gamma coactivator 1-alpha; master regulator of mitochondrial biogenesis' },
        { term: 'cardiac rehabilitation', definition: 'Supervised program of exercise, risk factor management, and education for cardiac patients' },
        { term: 'Exercise is Medicine', definition: 'Global health initiative promoting physical activity assessment and prescription in clinical care' },
        { term: 'intradialytic exercise', definition: 'Physical activity performed during hemodialysis sessions' },
      ],
      clinicalNotes: 'Refer eligible cardiac patients to CR (underutilized intervention). Exercise is safe and beneficial in most chronic diseases with appropriate modifications. Address sedentary behavior as independent risk factor. Implement brief exercise counseling with referral pathways. Consider home-based CR for access barriers.',
    },
    5: {
      level: 5,
      summary: 'Expert exercise medicine practice integrates advanced physiological monitoring, precision prescription algorithms, systems-level implementation strategies, and translational research leadership to maximize the preventive and therapeutic potential of physical activity across populations and health conditions.',
      explanation: `**Advanced Exercise Physiology:**

*Metabolomic Responses:*
- Exercise metabolome profiling
- Individual variation mapping
- Biomarker discovery
- Response prediction

*Exerkines:*
| Molecule | Source | Effect |
|----------|--------|--------|
| Irisin | Muscle | Browning of WAT |
| BDNF | Brain/muscle | Neuroplasticity |
| IL-6 | Muscle | Acute anti-inflammatory |
| Myostatin (decreased) | Muscle | Reduced inhibition |

*Mitochondrial Quality Control:*
- Mitophagy enhancement
- Fusion/fission dynamics
- Electron transport chain efficiency
- ROS signaling optimization

**Precision Exercise Medicine:**

*Multi-Modal Assessment:*
- Cardiopulmonary exercise testing (CPET)
- Metabolic phenotyping
- Genetic profiling
- Wearable data integration

*AI-Driven Prescription:*
- Machine learning optimization
- Real-time adjustment
- Outcome prediction
- Adherence support

*Responder Classification:*
| Phenotype | Characteristics | Prescription Modification |
|-----------|-----------------|---------------------------|
| High responder | Large VO2max gains | Standard progression |
| Low responder | Minimal VO2max gains | HIIT, increased volume |
| Adverse responder | Negative response | Alternative modalities |

**Elite and Extreme Exercise:**

*Ultra-Endurance:*
- Cardiac remodeling (athlete's heart)
- Transient cardiac biomarker elevation
- Atrial fibrillation risk (controversial)
- Long-term benefit vs risk

*Overtraining Syndrome:*
- Parasympathetic overactivity
- Performance decrement
- Mood disturbance
- Recovery requirement

*Monitoring:*
- HRV trends
- Training load metrics
- Biomarker panels
- Sleep quality

**Systems Integration:**

*Health System Redesign:*
- Physical activity vital sign
- Referral-to-exercise programs
- EHR integration
- Quality metrics alignment

*Value-Based Care:*
- Exercise as preventive intervention
- Bundled payments including CR
- Population health contracts
- Total cost of care models

*Workforce Development:*
- Exercise physiologists in primary care
- Physical therapist integration
- Health coaches
- Community partnerships

**Global and Policy Perspectives:**

*WHO Global Action Plan:*
- 15% relative reduction in inactivity by 2030
- Active societies framework
- Intersectoral action
- Monitoring and accountability

*Policy Levers:*
| Level | Intervention | Evidence |
|-------|--------------|----------|
| Individual | Provider counseling | Modest |
| Community | Programs, facilities | Moderate |
| Environment | Built environment | Strong |
| Policy | Active transport, PE | Strong |

**Research Frontiers:**

1. **Exercise-Cognition Nexus**
   - Blood-brain barrier effects
   - Neurogenesis
   - Dementia prevention trials

2. **Exercise-Microbiome Interaction**
   - Gut-muscle axis
   - Metabolite production
   - Immune modulation

3. **Molecular Clocks**
   - Circadian optimization
   - Time-of-day effects
   - Chronotype considerations

4. **Exercise Immunology**
   - Immune senescence delay
   - Vaccine response enhancement
   - Cancer immunosurveillance

5. **Digital Therapeutics**
   - App-based interventions
   - Virtual reality exercise
   - Gamification

**Clinical Excellence Framework:**

*Individual Patient Care:*
- Comprehensive activity assessment
- Evidence-based prescription (FITT-VP)
- Behavior change support
- Appropriate referrals
- Follow-up and adjustment

*Program Development:*
- Exercise oncology services
- Cardiac rehabilitation optimization
- Diabetes prevention programs
- Pulmonary rehabilitation

*Practice Leadership:*
- Workflow integration
- Team training
- Quality monitoring
- Disparity reduction

*Health System Impact:*
- Population activity monitoring
- Community partnerships
- Policy advocacy
- Research participation

**Expert Implementation Strategies:**

*Immediate Impact:*
- Universal activity assessment
- Brief counseling training
- CR referral optimization
- Sedentary behavior counseling

*Infrastructure Development:*
- Exercise professional integration
- Community referral networks
- Technology platforms
- Quality metrics

*Long-Term Transformation:*
- Built environment advocacy
- Policy engagement
- Research translation
- Workforce pipeline

**Key Messages:**

*Clinical:*
- Cardiorespiratory fitness is the strongest predictor of mortality
- Exercise is medicine for nearly all chronic conditions
- Start low, go slow, but start
- Combined aerobic + resistance optimal

*Systems:*
- Exercise must be integrated into healthcare
- Multi-level intervention required
- Environmental and policy change essential
- Health equity focus critical

*Research:*
- Precision approaches emerging but not yet practice-ready
- Implementation science priority
- Molecular mechanisms continue to be elucidated
- Global health priority`,
      keyTerms: [
        { term: 'exerkines', definition: 'Signaling molecules released during exercise that mediate systemic health effects' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor; protein promoting neuronal survival and plasticity, increased by exercise' },
        { term: 'CPET', definition: 'Cardiopulmonary exercise testing; gold standard assessment of cardiorespiratory fitness' },
        { term: 'physical activity vital sign', definition: 'Standardized clinical assessment of patient physical activity levels' },
        { term: 'exercise oncology', definition: 'Specialty integrating exercise into cancer prevention, treatment, and survivorship' },
      ],
      clinicalNotes: `**Expert Practice Points:**
- Champion exercise as medicine in health system
- Lead cardiac rehabilitation utilization improvement
- Integrate activity assessment as vital sign
- Develop referral networks to exercise professionals
- Address health equity in activity promotion
- Engage in built environment and policy advocacy
- Stay current on precision exercise evidence
- Mentor trainees in exercise prescription
- Participate in translational research
- Model active lifestyle professionally`,
    },
  },

  media: [
    {
      id: 'exercise-dose-response',
      type: 'diagram',
      filename: 'exercise-dose-response-curve.svg',
      title: 'Exercise Dose-Response Relationship',
      description: 'Graph showing relationship between physical activity volume and health outcomes',
    },
  ],

  citations: [
    {
      id: 'pag-2018',
      type: 'website',
      title: 'Physical Activity Guidelines for Americans, 2nd Edition',
      source: 'US Department of Health and Human Services',
      url: 'https://health.gov/paguidelines/',
      accessedDate: '2025-01-28',
    },
    {
      id: 'acsm-exercise-testing',
      type: 'textbook',
      title: 'ACSM Guidelines for Exercise Testing and Prescription, 11th Edition',
      authors: ['American College of Sports Medicine'],
      source: 'Wolters Kluwer',
      accessedDate: '2025-01-28',
    },
    {
      id: 'arem-mortality-2015',
      type: 'article',
      title: 'Leisure Time Physical Activity and Mortality: A Detailed Pooled Analysis',
      authors: ['Arem H', 'Moore SC', 'et al.'],
      source: 'JAMA Internal Medicine',
      accessedDate: '2025-01-28',
    },
  ],

  crossReferences: [
    { targetId: 'preventive-cardiovascular-risk', targetType: 'concept', relationship: 'related', label: 'Cardiovascular Risk Assessment' },
    { targetId: 'preventive-diet-prevention', targetType: 'concept', relationship: 'sibling', label: 'Diet Prevention' },
    { targetId: 'concept-cardiac-rehabilitation', targetType: 'concept', relationship: 'child', label: 'Cardiac Rehabilitation' },
  ],

  tags: {
    systems: ['preventive-care', 'cardiovascular', 'musculoskeletal'],
    topics: ['preventive medicine', 'exercise physiology', 'cardiology', 'rehabilitation'],
    keywords: ['exercise', 'physical activity', 'fitness', 'VO2max', 'disease prevention', 'cardiac rehabilitation'],
    clinicalRelevance: 'critical',
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
