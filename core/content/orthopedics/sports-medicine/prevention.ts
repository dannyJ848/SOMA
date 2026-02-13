import { EducationalContent } from '../../types';

export const injuryPreventionContent: EducationalContent = {
  id: 'ortho-patient-injury-prevention',
  type: 'topic',
  name: 'Injury Prevention',
  alternateNames: ['Sports injury prevention', 'Exercise safety', 'Avoiding injuries'],

  levels: {
    1: {
      level: 1,
      summary: 'Most sports injuries can be prevented with proper warm-up, good technique, appropriate equipment, and listening to your body.',
      explanation: `Staying active is important for your health, but injuries can set you back. Here are simple ways to prevent them.

**Warm Up Properly:**
- Start with 5-10 minutes of light activity
- Get your blood flowing before intense exercise
- Do dynamic stretches (moving stretches, not holding still)
- Practice sport movements at low intensity first

**Use Proper Technique:**
- Learn correct form for your activity
- Get coaching or instruction when starting new activities
- Don't sacrifice form to lift heavier or go faster
- Watch videos or use mirrors to check your form

**Wear the Right Equipment:**
- Proper footwear for your activity
- Protective gear (helmets, pads, guards)
- Equipment that fits correctly
- Replace worn-out gear

**Build Up Gradually:**
- Don't increase activity too quickly
- Follow the 10% rule (increase weekly activity by no more than 10%)
- Allow recovery days between intense workouts
- Cross-train with different activities

**Listen to Your Body:**
- Pain is a warning sign - don't ignore it
- Rest when tired
- Stop if something doesn't feel right
- Get enough sleep

**Stay Strong and Flexible:**
- Include strength training 2-3 times per week
- Stretch after exercise when muscles are warm
- Work on balance exercises
- Keep your core strong

**Stay Hydrated and Nourished:**
- Drink water before, during, and after activity
- Eat enough to fuel your activities
- Get adequate calcium and vitamin D for bone health`,
      keyTerms: [
        { term: 'warm-up', definition: 'Light activity before exercise to prepare your body' },
        { term: 'dynamic stretching', definition: 'Stretches done while moving, rather than holding still' },
        { term: 'cross-training', definition: 'Doing different types of exercise to prevent overuse' },
      ],
      analogies: [
        'Warming up is like letting your car engine warm up before driving fast.',
        'The 10% rule is like gradually turning up the volume instead of blasting it right away.',
      ],
      examples: [
        'Jogging for 5 minutes before a soccer game is a good warm-up.',
        'If your knee hurts when running, stopping and getting it checked can prevent a worse injury.',
      ],
    },
    2: {
      level: 2,
      summary: 'Injury prevention combines modifiable risk factor management, evidence-based warm-up protocols, progressive training loads, and sport-specific neuromuscular programs.',
      explanation: `Effective injury prevention addresses multiple factors through structured programs and smart training practices.

**Risk Factor Management:**

*Modifiable factors:*
- Muscle strength and balance
- Flexibility and mobility
- Movement quality and technique
- Training load and recovery
- Equipment and playing surface
- Nutrition and hydration

*Non-modifiable factors (require awareness):*
- Previous injury history
- Age and sex
- Anatomical variations
- Weather conditions

**Evidence-Based Warm-Up:**

*Components of effective warm-up:*
1. General cardio (5 min jogging)
2. Dynamic stretching
3. Balance and stability exercises
4. Sport-specific movements
5. Progressive intensity

*FIFA 11+ Program example:*
- Proven to reduce injuries 30-50%
- Takes about 20 minutes
- Includes running, strength, balance, agility
- Most effective when done regularly

**Training Load Management:**

*10% Rule:*
- Increase weekly training by no more than 10%
- Applies to distance, duration, or intensity
- Allows tissues to adapt

*Acute:Chronic Workload Ratio:*
- Compare recent training (1 week) to longer-term (4 weeks)
- Ratio of 0.8-1.3 is "sweet spot"
- Too high (>1.5) = increased injury risk
- Too low (<0.8) = detraining, also risky

**Sport-Specific Prevention:**

*ACL Injury Prevention:*
- Neuromuscular training programs
- Landing and cutting technique
- Hip and core strengthening
- Reduces ACL injuries by 50%+

*Running Injuries:*
- Gradual mileage increases
- Proper footwear
- Strength training
- Running form assessment

*Throwing Injuries:*
- Pitch count limits
- Rest between appearances
- Proper mechanics
- Shoulder and hip flexibility

**Recovery as Prevention:**
- Adequate sleep (7-9 hours)
- Rest days built into training
- Nutrition for tissue repair
- Active recovery activities`,
      keyTerms: [
        { term: 'FIFA 11+', definition: 'Evidence-based warm-up program proven to reduce soccer injuries' },
        { term: 'acute:chronic workload ratio', definition: 'Comparison of recent training load to longer-term average' },
        { term: 'neuromuscular training', definition: 'Exercises targeting coordination, balance, and muscle activation patterns' },
        { term: 'progressive overload', definition: 'Gradually increasing training demands to allow adaptation' },
      ],
      analogies: [
        'Training load is like filling a bucket - add water too fast and it overflows.',
        'Neuromuscular training is like updating the software that controls your movements.',
      ],
    },
    3: {
      level: 3,
      summary: 'Injury prevention science integrates biomechanical risk factor identification, validated prevention programs, load monitoring, and neuromuscular interventions targeting modifiable risk factors.',
      explanation: `Evidence-based injury prevention requires understanding of risk factors, program implementation, and monitoring strategies.

**Risk Factor Framework:**

*Injury causation model:*
- Internal risk factors (strength, flexibility, previous injury)
- External risk factors (equipment, surface, weather)
- Inciting event (mechanism)
- Susceptible athlete + situation = injury

*Strongest predictors:*
- Previous injury (2-6x increased risk)
- Age and sex (sport-specific patterns)
- Fatigue and workload spikes
- Movement quality deficits

**Evidence-Based Prevention Programs:**

*ACL Prevention:*
- Programs: FIFA 11+, PEP, Sportsmetrics
- Components: Plyometrics, balance, strength, cutting technique
- Efficacy: 50-67% reduction in ACL injuries
- NNT: ~108 athletes for one ACL injury prevented
- Key: Compliance determines effectiveness

*General Injury Prevention:*
- FIFA 11+: 30-50% reduction in injuries
- Neuromuscular warm-up: Consistent benefits across sports
- Nordic hamstring program: Reduces hamstring injuries 50%+
- Copenhagen adductor: Reduces groin injuries

**Load Management:**

*Acute:Chronic Workload Ratio (ACWR):*
- Calculation: 1-week load / 4-week rolling average
- Sweet spot: 0.8-1.3
- High risk: >1.5 (spike relative to preparation)
- Also consider absolute loads

*Training load metrics:*
- External load: Distance, speed, accelerations
- Internal load: Heart rate, RPE (rate of perceived exertion)
- sRPE method: Session RPE x duration

*Periodization:*
- Planned variation in training load
- Allows adaptation and recovery
- Reduces overuse injury risk

**Biomechanical Screening:**

*Movement assessments:*
- Functional Movement Screen (FMS)
- Landing Error Scoring System (LESS)
- Single-leg squat quality
- Drop jump analysis

*Targeted interventions:*
- Address identified deficits
- Improve movement quality
- Sport-specific corrections

**Implementation Science:**

*Barriers to adoption:*
- Time constraints
- Coach buy-in
- Athlete compliance
- Perceived effectiveness

*Successful implementation:*
- Coach education critical
- Team-based approach
- Integration into regular training
- Monitoring compliance`,
      keyTerms: [
        { term: 'FMS', definition: 'Functional Movement Screen; seven-test screening for movement quality' },
        { term: 'LESS', definition: 'Landing Error Scoring System; assesses jump-landing technique' },
        { term: 'sRPE', definition: 'Session rating of perceived exertion; training load measure' },
        { term: 'Nordic hamstring exercise', definition: 'Eccentric hamstring strengthening shown to reduce hamstring injuries' },
      ],
      clinicalNotes: 'Prevention programs are only effective if actually implemented. Compliance is the major determinant of program effectiveness. Coach education and team buy-in are critical for successful implementation.',
    },
    4: {
      level: 4,
      summary: 'Advanced injury prevention integrates individualized risk profiling, technology-enhanced monitoring, mechanistic understanding of injury causation, and systematic implementation of evidence-based interventions.',
      explanation: `Expert-level prevention requires integration of assessment, monitoring, intervention, and implementation science.

**Risk Profiling:**

*Comprehensive assessment:*
- Injury history analysis
- Movement screening (FMS, Y-balance)
- Strength testing (isokinetic, hand-held)
- Biomechanical analysis (3D motion capture)
- Psychosocial factors

*Individualized risk:*
- Risk factor interactions
- Sport-specific demands
- Position-specific requirements
- Training age and development

**Technology-Enhanced Monitoring:**

*Wearable technology:*
- GPS: Distance, speed, accelerations
- Accelerometers: Impacts, jumps, change of direction
- Heart rate: Internal load, recovery
- Sleep tracking

*Data analysis:*
- Machine learning for risk prediction
- Pattern recognition
- Trend analysis
- Threshold alerts

*Limitations:*
- Data overload
- Interpretation challenges
- False positives/negatives
- Cost and practicality

**Mechanistic Prevention:**

*ACL injury mechanism:*
- Dynamic knee valgus at landing
- Hip internal rotation, adduction
- Quadriceps dominant landing
- Trunk position effects

*Targeted interventions:*
- Strengthen hip external rotators and abductors
- Improve landing mechanics
- Trunk control training
- Feedback (verbal, visual, haptic)

*Hamstring injury mechanism:*
- Terminal swing phase of running
- Eccentric loading at long muscle length
- Fatigue effects

*Nordic hamstring prevention:*
- Increases fascicle length
- Improves eccentric strength
- Shifts force-length relationship
- 50%+ reduction in hamstring injuries

**Implementation Framework:**

*RE-AIM model:*
- Reach: Who participates
- Effectiveness: Does it work
- Adoption: Who implements
- Implementation: Fidelity to protocol
- Maintenance: Sustained over time

*Best practices:*
- Coach education mandatory
- Integrate into regular training
- Monitor compliance
- Adapt to context
- Track outcomes

**Evidence Synthesis:**

*Systematic reviews:*
- Neuromuscular training reduces ACL injuries 50%+
- Eccentric training reduces hamstring injuries 50%+
- Multi-component programs more effective
- Compliance is key moderator

*Number needed to treat:*
- ACL prevention: ~108 athletes
- Hamstring prevention: ~13 athletes
- General injury prevention: Variable by sport`,
      keyTerms: [
        { term: 'RE-AIM', definition: 'Framework for evaluating implementation: Reach, Effectiveness, Adoption, Implementation, Maintenance' },
        { term: 'dynamic knee valgus', definition: 'Inward collapse of knee during weight-bearing; risk factor for ACL injury' },
        { term: 'fascicle length', definition: 'Length of muscle fiber bundles; longer fascicles may protect against strain' },
        { term: 'NNT', definition: 'Number needed to treat to prevent one adverse event' },
      ],
      clinicalNotes: 'The effectiveness of prevention programs in research settings often exceeds real-world effectiveness due to compliance differences. Implementation strategies that increase compliance are as important as the exercises themselves.',
    },
    5: {
      level: 5,
      summary: 'Contemporary injury prevention science integrates precision risk assessment, personalized interventions, digital health technologies, and implementation science to optimize athlete health and performance.',
      explanation: `Expert-level injury prevention requires synthesis of current evidence, technology integration, and systematic implementation approaches.

**Precision Prevention:**

*Risk modeling:*
- Machine learning algorithms
- Multivariable risk prediction
- Dynamic risk assessment
- Individual threshold identification

*Personalized interventions:*
- Targeted based on risk profile
- Adapted to sport and position
- Adjusted for development stage
- Modified by response to training

*Biomarkers:*
- Collagen turnover (PICP, PINP)
- Inflammatory markers (IL-6, CRP)
- Recovery markers
- Genetic profiling (emerging)

**Digital Health Integration:**

*Wearable ecosystem:*
- Real-time load monitoring
- Recovery tracking
- Sleep quantification
- Fatigue assessment

*Decision support:*
- Automated threshold alerts
- Risk visualization dashboards
- Training load recommendations
- Recovery optimization

*Challenges:*
- Data validity and reliability
- Information overload
- Clinical interpretation
- Privacy considerations

**Implementation Science:**

*Translational gap:*
- Efficacy (controlled trials) vs. effectiveness (real world)
- Prevention programs often underutilized
- Coach and athlete barriers

*Implementation strategies:*
- Coach education mandatory (increases adoption 3x)
- Team-based accountability
- Progress tracking and feedback
- Incentivization and competition

*Quality improvement:*
- Monitor injury rates
- Track compliance
- Adjust protocols
- Continuous improvement

**Prevention Program Evidence:**

*Systematic review findings:*
| Program | Injury Reduction | NNT |
|---------|------------------|-----|
| ACL prevention | 50-67% | 108 |
| FIFA 11+ | 30-50% | Variable |
| Nordic hamstring | 50%+ | 13 |
| Copenhagen adductor | 40%+ | Variable |

*Key moderators:*
- Compliance (dose-response relationship)
- Supervision quality
- Integration into training
- Athlete buy-in

**Emerging Directions:**

*Technology:*
- AI-driven risk prediction
- Real-time biofeedback
- Virtual reality training
- Exoskeletons for load management

*Biology:*
- Genetic risk profiling
- Tissue-specific biomarkers
- Personalized nutrition
- Circadian optimization

*System approaches:*
- Policy-level interventions
- Rule changes
- Equipment regulations
- Environmental modifications

**Ethical Considerations:**

*Risk communication:*
- How to present probabilistic information
- Avoiding over-medicalization
- Balancing caution with participation

*Genetic testing:*
- Predictive value uncertain
- Privacy and discrimination concerns
- Psychological impact

*Workload management:*
- Athlete autonomy
- Selection decisions
- Career implications`,
      keyTerms: [
        { term: 'precision prevention', definition: 'Individualized prevention strategies based on personal risk factors' },
        { term: 'translational gap', definition: 'Difference between research efficacy and real-world effectiveness' },
        { term: 'PICP/PINP', definition: 'Collagen synthesis biomarkers potentially indicating tissue adaptation' },
        { term: 'dose-response', definition: 'Relationship between amount of intervention and magnitude of effect' },
      ],
      clinicalNotes: `**Implementation Priorities:**

1. **High-value interventions:**
   - Neuromuscular warm-ups (FIFA 11+, PEP)
   - Nordic hamstring exercise
   - Progressive load management

2. **Implementation essentials:**
   - Coach education is mandatory
   - Monitor compliance
   - Integrate into regular training
   - Track injury outcomes

3. **Individual considerations:**
   - Previous injury history
   - Sport and position demands
   - Development stage
   - Psychosocial factors

4. **System considerations:**
   - Team culture
   - Resource availability
   - Time constraints
   - Competing priorities

**Quality Metrics:**
- Injury incidence rates
- Training load exposures
- Prevention program compliance
- Severity measures (time loss)
- Return-to-sport success`,
    },
  },

  media: [
    {
      id: 'prevention-principles',
      type: 'diagram',
      filename: 'injury-prevention-principles.svg',
      title: 'Injury Prevention Principles',
      description: 'Overview of key injury prevention strategies',
    },
  ],
  citations: [
    {
      id: 'fifa11-evidence',
      type: 'article',
      title: 'Efficacy of injury prevention programs',
      source: 'British Journal of Sports Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-common-sports-injuries', targetType: 'topic', relationship: 'related', label: 'Common Sports Injuries' },
    { targetId: 'ortho-patient-return-to-activity', targetType: 'topic', relationship: 'related', label: 'Return to Activity' },
    { targetId: 'ortho-patient-physical-therapy-role', targetType: 'topic', relationship: 'related', label: 'Physical Therapy Role' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['sports medicine', 'prevention', 'exercise'],
    keywords: ['injury prevention', 'warm-up', 'training load', 'neuromuscular training'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: false, nbme: false, shelf: [] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default injuryPreventionContent;
