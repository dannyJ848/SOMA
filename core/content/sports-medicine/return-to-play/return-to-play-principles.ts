/**
 * Return to Play Principles - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const returnToPlayPrinciples: EducationalContent = {
  id: 'sports-med-return-to-play-principles',
  type: 'concept',
  name: 'Return to Play Principles',
  alternateNames: ['RTP Guidelines', 'Return to Sport', 'Athletic Clearance'],

  levels: {
    1: {
      level: 1,
      summary: 'Returning to sports after an injury should be gradual and only when you are fully healed and ready.',
      explanation: `## Going Back to Sports Safely

After an injury, you need to make sure you're ready before playing again.

**When You Might Be Ready**
- No more pain
- Full movement
- Full strength
- Can do all sport movements

**Steps to Return**
1. Start with easy activities
2. Gradually add harder activities
3. Practice sport skills
4. Return to full practice
5. Return to competition

**Signs You're Not Ready**
- Pain during activity
- Swelling after activity
- Feeling weak or unstable
- Fear of getting hurt again

**Important Points**
- Don't rush back
- Follow your doctor's advice
- Build up slowly
- Listen to your body`,
      keyTerms: [
        { term: 'return to play', definition: 'The process of safely going back to sports after injury' },
        { term: 'clearance', definition: 'Permission from a doctor to return to sports' },
      ],
    },
    2: {
      level: 2,
      summary: 'Return to play is a stepwise process based on tissue healing, restoration of physical function, and readiness for sport-specific demands, guided by criteria rather than time alone.',
      explanation: `## Return to Play Framework

### Core Principles
- Tissue healing must be adequate
- Function must be restored
- Risk of re-injury minimized
- Criteria-based, not time-based

### Three-Step Decision Model
1. **Evaluate Health Status**
   - Is tissue healed?
   - Are symptoms resolved?
   - Is function restored?

2. **Evaluate Sport-Specific Risk**
   - Sport demands
   - Position requirements
   - Protective equipment
   - Level of competition

3. **Decision-Making**
   - Balance benefits and risks
   - Patient input
   - Shared decision

### Progression Phases
| Phase | Activity Level |
|-------|---------------|
| 1 | Light activity, symptom-limited |
| 2 | Sport-specific movement |
| 3 | Non-contact training |
| 4 | Full contact practice |
| 5 | Competition |

### Criteria for Progression
**Physical:**
- Pain-free
- Full range of motion
- Adequate strength
- Good balance

**Functional:**
- Sport-specific movements
- Reaction time
- Endurance

**Psychological:**
- Confidence
- No fear of re-injury

### Return to Play Continuum
- Return to participation
- Return to sport
- Return to performance`,
      keyTerms: [
        { term: 'criteria-based progression', definition: 'Advancing based on meeting specific goals, not time' },
        { term: 'shared decision-making', definition: 'Doctor and athlete together deciding on return' },
        { term: 'return to performance', definition: 'Full return to pre-injury competitive level' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based return to play integrates tissue healing timelines, objective functional testing, psychological readiness assessment, and sport-specific risk considerations.',
      explanation: `## Clinical RTP Decision-Making

### Tissue Healing Considerations
**General Timelines:**
- Muscle strain: 3-12 weeks
- Ligament sprain: 2-16 weeks
- Bone: 6-24 weeks
- Tendon: 6-12+ weeks

**Factors Affecting Healing:**
- Injury severity
- Blood supply
- Age
- Nutrition
- Compliance

### Objective Testing
**Strength Testing:**
- Isokinetic testing
- Limb symmetry index (>90%)
- Peak torque

**Hop Tests:**
- Single-leg hop
- Triple hop
- Crossover hop
- Timed hop

**Balance Testing:**
- Y-Balance Test
- SEBT
- Force plate measures

### Psychological Readiness
**Assessment Tools:**
- ACL-RSI (injury-specific)
- TSK-11 (kinesiophobia)
- SIRSI

**Key Factors:**
- Fear of re-injury
- Confidence
- Motivation
- Social support

### Risk Stratification
**Sport Factors:**
- Collision vs. non-contact
- Pivoting demands
- Position requirements

**Player Factors:**
- Age
- Level of competition
- Injury history
- Recovery quality

### Documentation
- Objective measures
- Functional performance
- Medical clearance
- Communication with stakeholders`,
      keyTerms: [
        { term: 'limb symmetry index', definition: 'Comparison of injured to uninjured limb, typically >90% for clearance' },
        { term: 'ACL-RSI', definition: 'ACL Return to Sport after Injury scale for psychological readiness' },
        { term: 'kinesiophobia', definition: 'Fear of movement or re-injury' },
      ],
      clinicalNotes: 'Time since injury is insufficient alone. Objective testing improves decision quality. Psychological factors independently predict outcomes. Multi-criteria approach reduces re-injury risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced RTP frameworks integrate comprehensive testing batteries, biomechanical analysis, and individualized risk-benefit assessment for optimal clearance decisions.',
      explanation: `## Advanced RTP Concepts

### Comprehensive Testing Battery
**Impairment Level:**
- Range of motion
- Strength (isokinetic, isometric)
- Joint laxity

**Functional Level:**
- Hop test battery
- Agility tests
- Balance assessment

**Performance Level:**
- Sport-specific drills
- Game simulation
- Fatigue conditions

### Biomechanical Assessment
**Movement Quality:**
- Landing mechanics
- Cutting technique
- Running gait

**Objective Measures:**
- Force platforms
- Motion capture
- Accelerometry

**Risk Indicators:**
- Asymmetry patterns
- Aberrant mechanics
- Compensation strategies

### Individualized Decision
**Risk Factors:**
- Young age (<25)
- Early return (<9 months for ACL)
- High-level competition
- Residual deficits

**Protective Factors:**
- Completed rehabilitation
- Psychological readiness
- Strong support system

### Implementation
**Team Approach:**
- Physician
- Athletic trainer
- Physical therapist
- Coach
- Athlete

**Communication:**
- Clear expectations
- Written criteria
- Regular reassessment

### Performance Considerations
**Beyond Clearance:**
- Return to participation ≠ return to performance
- Performance monitoring
- Load management
- Ongoing optimization`,
      keyTerms: [
        { term: 'movement quality', definition: 'Assessment of how well movement patterns are executed, not just outcome' },
        { term: 'compensation strategy', definition: 'Alternative movement pattern to protect or work around weakness' },
      ],
      clinicalNotes: 'Testing battery should match sport demands. Biomechanical deficits may persist after strength recovery. Psychological readiness is independent predictor. Return to participation differs from return to performance.',
    },
    5: {
      level: 5,
      summary: 'Research frontiers in RTP explore biomarkers of tissue healing, machine learning prediction models, and personalized protocols based on individual risk profiles.',
      explanation: `## Research Frontiers

### Biomarkers for Healing
**Potential Markers:**
- Collagen synthesis markers
- Inflammatory markers
- Tissue-specific proteins

**Applications:**
- Confirm tissue healing
- Guide progression
- Predict readiness

### Predictive Modeling
**Machine Learning:**
- Multi-factor algorithms
- Outcome prediction
- Re-injury risk

**Variables:**
- Demographics
- Injury characteristics
- Test performance
- Psychological factors

### Wearable Technology
**Monitoring:**
- Training load
- Movement quality
- Recovery metrics

**Applications:**
- Real-time feedback
- Load management
- Performance tracking

### Personalized Protocols
**Individual Factors:**
- Genetic profile
- Tissue healing capacity
- Psychological makeup
- Sport demands

**Adaptive Approach:**
- Response-based progression
- Continuous monitoring
- Dynamic adjustment

### Outcome Optimization
**Research Questions:**
- Optimal testing batteries
- Timing considerations
- Long-term outcomes
- Re-injury prevention

**Quality Metrics:**
- Re-injury rates
- Performance recovery
- Long-term health`,
      keyTerms: [
        { term: 'predictive modeling', definition: 'Using algorithms to predict outcomes based on multiple factors' },
        { term: 'personalized protocol', definition: 'Individualized RTP approach based on specific patient characteristics' },
      ],
      clinicalNotes: 'Biomarkers may objectify tissue healing assessment. Machine learning showing promise for prediction. Wearable technology enabling continuous monitoring. Personalization is future of RTP.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-return-to-play-protocols', targetType: 'concept', relationship: 'child', label: 'RTP Protocols' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['return-to-play', 'sports-medicine', 'rehabilitation'],
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

export default returnToPlayPrinciples;
