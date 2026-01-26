/**
 * Functional Testing Criteria - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const functionalTestingCriteria: EducationalContent = {
  id: 'sports-med-functional-testing-criteria',
  type: 'concept',
  name: 'Functional Testing Criteria',
  alternateNames: ['RTP Testing', 'Performance Testing', 'Clearance Testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Functional tests check if you can do the movements needed for your sport safely before returning to play.',
      explanation: `## Testing Before You Return to Sports

Before going back to sports, doctors and trainers test if your body is ready.

**What They Check**
- Strength in both legs/arms
- Balance and stability
- Jumping and landing
- Running and cutting

**Common Tests**
- Hopping on one leg
- Jumping tests
- Balance tests
- Sport-specific drills

**Passing the Tests**
- Injured side should be almost as good as healthy side
- Usually need to be at least 90% as strong
- Should have no pain
- Should move correctly

**Why Testing Matters**
- Makes sure you're really ready
- Reduces chance of getting hurt again
- Gives confidence to return`,
      keyTerms: [
        { term: 'functional test', definition: 'A test that checks how well you can do specific movements' },
        { term: 'limb symmetry', definition: 'How similar your injured side is to your healthy side' },
      ],
    },
    2: {
      level: 2,
      summary: 'Functional testing batteries objectively measure strength, power, and movement quality to determine readiness for return to sport using limb symmetry indices and quality criteria.',
      explanation: `## Functional Testing Framework

### Purpose
- Objective measurement of function
- Comparison to uninjured side
- Identify residual deficits
- Inform clearance decision

### Common Tests
**Strength Testing:**
- Isokinetic dynamometry
- Handheld dynamometry
- 1RM testing

**Hop Tests:**
- Single hop for distance
- Triple hop for distance
- Crossover hop for distance
- 6-meter timed hop

**Balance Tests:**
- Y-Balance Test
- Star Excursion Balance Test
- Single-leg stance

**Agility:**
- T-test
- Pro-agility
- Sport-specific drills

### Limb Symmetry Index
**Calculation:**
LSI = (Injured/Uninjured) x 100%

**Common Cutoffs:**
- >90% for most tests
- >85% minimum
- Quality also assessed

### Hop Test Battery
| Test | Measurement |
|------|-------------|
| Single hop | Distance |
| Triple hop | Total distance |
| Crossover hop | Distance |
| 6m timed hop | Time |

### Passing Criteria
- LSI >90% each test
- All tests in battery
- No pain during testing
- Good movement quality`,
      keyTerms: [
        { term: 'LSI', definition: 'Limb Symmetry Index, percentage comparison of sides' },
        { term: 'hop test battery', definition: 'Set of 4 hopping tests for lower extremity function' },
        { term: 'isokinetic testing', definition: 'Strength testing at controlled movement speed' },
      ],
    },
    3: {
      level: 3,
      summary: 'Comprehensive functional testing integrates quantitative performance measures with qualitative movement assessment, using established cutoffs and clinical interpretation.',
      explanation: `## Clinical Testing Implementation

### Test Selection
**Based on:**
- Injury type and location
- Sport demands
- Position requirements
- Available equipment

### Strength Testing
**Isokinetic:**
- Quadriceps 60°/sec and 180°/sec
- Hamstring testing
- H:Q ratio

**Isometric:**
- Handheld dynamometry
- Fixed position testing
- Practical alternative

**Cutoffs:**
- >90% LSI
- H:Q ratio considerations

### Hop Test Protocol
**Standardization:**
- 3 practice trials
- 3 test trials (best used)
- Hands on hips
- Stick the landing

**Quality Observation:**
- Landing mechanics
- Knee valgus
- Confidence

### Y-Balance Test
**Procedure:**
- Single-leg stance
- Three directions (anterior, posteromedial, posterolateral)
- Normalize to leg length

**Interpretation:**
- Composite score
- Asymmetry <4cm
- Compare to norms

### Movement Quality
**Assessment:**
- Single-leg squat
- Drop vertical jump
- Lateral step-down

**Criteria:**
- Knee alignment
- Trunk control
- Smooth motion

### Composite Interpretation
- All tests passing
- No pain
- Good quality
- Psychological readiness`,
      keyTerms: [
        { term: 'H:Q ratio', definition: 'Hamstring to quadriceps strength ratio, typically 50-80%' },
        { term: 'Y-Balance Test', definition: 'Dynamic balance test in 3 directions on single leg' },
        { term: 'drop vertical jump', definition: 'Jump test assessing landing mechanics' },
      ],
      clinicalNotes: 'LSI alone is insufficient - quality matters. Battery approach more informative than single test. Standardization critical for reliability. Interpret in context of patient and sport.',
    },
    4: {
      level: 4,
      summary: 'Advanced functional testing incorporates biomechanical analysis, reactive testing, and integration of multiple domains to comprehensively assess readiness.',
      explanation: `## Advanced Testing Concepts

### Biomechanical Assessment
**Motion Capture:**
- 3D kinematics
- Kinetic analysis
- Joint moments

**Force Plates:**
- Landing forces
- Asymmetry
- Rate of loading

**Practical Measures:**
- 2D video analysis
- Movement screens
- Clinical observation

### Reactive Testing
**Unanticipated Demands:**
- Reactive agility
- Decision-making
- Cognitive load

**Importance:**
- More sport-specific
- Reveals hidden deficits
- Predicts performance

### Fatigue Considerations
**Testing Under Fatigue:**
- May reveal deficits
- More realistic conditions
- Movement quality changes

### Sport-Specific Testing
**Examples:**
- Cutting in sport direction
- Position-specific demands
- Game simulation

### Psychological Measures
**Integration:**
- ACL-RSI
- KOOS (confidence)
- Behavioral observation

### Composite Scoring
**Multi-Domain:**
- Strength metrics
- Hop performance
- Balance scores
- Movement quality
- Psychological readiness

**Decision Framework:**
- All domains passing
- Clinical judgment
- Shared decision-making`,
      keyTerms: [
        { term: 'reactive agility', definition: 'Agility testing with unanticipated direction changes' },
        { term: 'kinematic analysis', definition: 'Assessment of movement patterns using motion capture' },
      ],
      clinicalNotes: 'Reactive testing adds sport specificity. Fatigue may unmask deficits. Biomechanics reveals quality not captured by outcome measures. Multi-domain assessment is gold standard.',
    },
    5: {
      level: 5,
      summary: 'Research in functional testing explores optimal test batteries, predictive validity, technology-enhanced assessment, and integration with machine learning for clearance decisions.',
      explanation: `## Research Frontiers

### Test Validity
**Predictive Value:**
- Which tests predict re-injury?
- Optimal cutoffs
- Sensitivity/specificity

**Current Evidence:**
- Hop tests moderately predictive
- Psychological factors important
- Quality may matter more than quantity

### Technology Advances
**Wearable Sensors:**
- Accelerometry
- Gyroscopes
- Field-based assessment

**Markerless Motion Capture:**
- Practical biomechanics
- AI-driven analysis
- Real-time feedback

### Machine Learning
**Applications:**
- Multi-variable analysis
- Outcome prediction
- Pattern recognition

### Standardization
**Challenges:**
- Protocol variation
- Equipment differences
- Interpretation variability

**Solutions:**
- Consensus guidelines
- Reporting standards
- Reference databases

### Novel Approaches
**Emerging Tests:**
- Neurocognitive-motor
- Dual-task assessment
- VR-based testing

### Outcome Research
**Key Questions:**
- What defines "passed"?
- Optimal test timing
- Long-term outcomes
- Return to performance vs. participation`,
      keyTerms: [
        { term: 'markerless motion capture', definition: 'Video-based movement analysis without physical markers' },
        { term: 'dual-task assessment', definition: 'Testing with simultaneous physical and cognitive demands' },
      ],
      clinicalNotes: 'Predictive validity of current tests is moderate. Technology enabling more accessible biomechanics. Machine learning may improve prediction. Consensus on optimal protocols still developing.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'parent', label: 'RTP Principles' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['testing', 'return-to-play', 'sports-medicine'],
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

export default functionalTestingCriteria;
