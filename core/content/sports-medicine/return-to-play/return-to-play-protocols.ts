/**
 * Return to Play Protocols - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const returnToPlayProtocols: EducationalContent = {
  id: 'sports-med-return-to-play-protocols',
  type: 'concept',
  name: 'Return to Play Protocols',
  alternateNames: ['RTP Protocols', 'Graduated Return', 'Sport-Specific Return'],

  levels: {
    1: {
      level: 1,
      summary: 'Return to play protocols are step-by-step plans to safely get back to sports after different types of injuries.',
      explanation: `## Getting Back to Sports Safely

Different injuries need different plans to return to sports.

**General Steps**
1. Light activity (walking, easy exercises)
2. Running and sport movements
3. Practice with the team
4. Full contact/game play

**Important Rules**
- Complete each step before moving on
- If pain returns, go back a step
- Each step takes at least 1 day
- Doctor gives final approval

**Common Protocols**
- Concussion: Special brain rest protocol
- ACL surgery: 9-12 months
- Ankle sprain: 2-6 weeks
- Muscle strain: 2-8 weeks`,
      keyTerms: [
        { term: 'protocol', definition: 'A step-by-step plan to follow' },
        { term: 'progression', definition: 'Moving from easier to harder activities over time' },
      ],
    },
    2: {
      level: 2,
      summary: 'Injury-specific return to play protocols provide structured progression through phases based on tissue healing and functional milestones.',
      explanation: `## Common RTP Protocols

### Concussion Return to Sport
| Stage | Activity | Minimum Duration |
|-------|----------|-----------------|
| 1 | Symptom-limited activity | 24 hours |
| 2 | Light aerobic exercise | 24 hours |
| 3 | Sport-specific exercise | 24 hours |
| 4 | Non-contact training | 24 hours |
| 5 | Full contact practice | 24 hours |
| 6 | Return to competition | - |

### ACL Reconstruction
**Phase 1 (0-2 weeks):**
- ROM exercises
- Quadriceps activation
- Weight-bearing as tolerated

**Phase 2 (2-6 weeks):**
- Progressive ROM
- Gait training
- Closed chain exercises

**Phase 3 (6-12 weeks):**
- Strengthening progression
- Balance training
- Light jogging (end of phase)

**Phase 4 (3-6 months):**
- Running progression
- Agility drills
- Sport-specific drills

**Phase 5 (6-9+ months):**
- Full training
- Testing for clearance
- Return to competition

### Ankle Sprain
**Grade I (1-2 weeks):**
- Protected weight-bearing
- ROM exercises
- Progression to normal activity

**Grade II (2-4 weeks):**
- Progressive weight-bearing
- Strengthening
- Balance training

**Grade III (4-6+ weeks):**
- Extended protection
- Comprehensive rehabilitation
- May need bracing for return`,
      keyTerms: [
        { term: 'phase-based rehabilitation', definition: 'Dividing recovery into stages with specific goals' },
        { term: 'closed chain exercise', definition: 'Exercise where foot/hand is fixed (like squats)' },
      ],
    },
    3: {
      level: 3,
      summary: 'Clinical protocols integrate evidence-based timelines with criteria-based progression, individualized to injury severity, sport demands, and patient factors.',
      explanation: `## Clinical Protocol Implementation

### Protocol Components
**Time Considerations:**
- Minimum tissue healing time
- Not maximum - criteria drive progression
- Individualized timeline

**Criteria for Progression:**
- Specific measurable goals
- Objective testing
- Functional milestones

### ACL Protocol Details
**Criteria for Running (3-4 months):**
- Full extension
- Flexion >120°
- Minimal effusion
- 70% quad strength LSI
- Good single-leg control

**Criteria for Sport Training (6+ months):**
- 80% quad/hamstring LSI
- Hop test >80% LSI
- Good movement quality

**Clearance Criteria (9+ months):**
- >90% LSI all tests
- Hop tests passing
- Movement quality assessment
- Psychological readiness

### Hamstring Strain Protocol
**Phase 1 (Acute):**
- Protection
- Pain-free ROM
- Isometrics

**Phase 2 (Subacute):**
- Progressive strengthening
- Lengthening exercises
- Low-load running

**Phase 3 (Remodeling):**
- Eccentric loading
- Sprint progression
- Sport-specific drills

**Clearance Criteria:**
- Full strength
- Pain-free sprinting
- Full sport-specific function

### Shoulder (Post-Surgery)
**General Timeline:**
- 0-6 weeks: Protection, passive ROM
- 6-12 weeks: Active ROM, early strength
- 3-6 months: Progressive strengthening
- 6+ months: Sport-specific return`,
      keyTerms: [
        { term: 'LSI', definition: 'Limb Symmetry Index, comparing injured to uninjured side' },
        { term: 'criteria-based progression', definition: 'Advancing based on meeting specific goals, not time alone' },
      ],
      clinicalNotes: 'Protocols provide framework but must be individualized. Criteria more important than time. Regular reassessment needed. Communicate expectations clearly.',
    },
    4: {
      level: 4,
      summary: 'Advanced protocols incorporate detailed testing batteries, sport-specific programming, and integration of psychological preparation alongside physical rehabilitation.',
      explanation: `## Advanced Protocol Considerations

### Comprehensive Testing
**ACL Testing Battery:**
- Isokinetic strength (quad, hamstring)
- Single-leg hop tests (4 tests)
- Balance measures (Y-balance)
- Movement quality (drop jump, cutting)
- Psychological (ACL-RSI)

**Passing Criteria:**
- Each test >90% LSI
- All tests passing
- Quality assessment passing

### Sport-Specific Modifications
**Cutting Sports:**
- Cutting progression protocol
- Direction-specific training
- Reactive drills

**Throwing Sports:**
- Interval throwing program
- Pitch count progression
- Velocity milestones

**Contact Sports:**
- Contact confidence progression
- Protective equipment use
- Game simulation

### Psychological Integration
**Throughout Protocol:**
- Education and expectation setting
- Goal setting
- Confidence building
- Visualization

**Before Clearance:**
- Fear of re-injury assessment
- Mental rehearsal
- Graded exposure to game situations

### Risk Stratification
**Higher Risk Athletes:**
- Younger age
- Previous injuries
- High-level competition
- Inadequate rehabilitation

**Modified Approach:**
- Extended timeline
- Additional testing
- Closer monitoring`,
      keyTerms: [
        { term: 'interval throwing program', definition: 'Structured throwing progression after shoulder/elbow injury' },
        { term: 'reactive training', definition: 'Drills requiring response to unexpected stimuli' },
      ],
      clinicalNotes: 'Testing battery should match sport demands. Psychological readiness is independent factor. Young athletes may need longer protocols. Quality of movement as important as quantity.',
    },
    5: {
      level: 5,
      summary: 'Research in RTP protocols explores optimal progression parameters, technology-enhanced monitoring, and personalized approaches based on individual healing and performance characteristics.',
      explanation: `## Research and Innovation

### Protocol Optimization
**Key Questions:**
- Optimal progression rate
- Minimum effective timeline
- Critical testing elements
- Re-injury predictors

### Technology Integration
**Monitoring Tools:**
- Wearables for load tracking
- Force plates for assessment
- Motion capture for quality
- App-based symptom tracking

**Decision Support:**
- Algorithm-driven progression
- Real-time feedback
- Automated testing

### Personalization
**Individual Factors:**
- Healing characteristics
- Sport demands
- Competition timeline
- Risk tolerance

**Adaptive Protocols:**
- Response-based progression
- Continuous monitoring
- Dynamic adjustment

### Emerging Evidence
**ACL Research:**
- Optimal timing for return
- Re-injury prediction
- Second injury prevention
- Long-term outcomes

**Concussion Research:**
- Exercise therapy protocols
- Symptom-targeted approach
- Subtype-specific protocols

### Future Directions
- Biomarker-guided protocols
- AI-assisted decision making
- Personalized timelines
- Outcome optimization`,
      keyTerms: [
        { term: 'adaptive protocol', definition: 'Protocol that adjusts based on individual response' },
        { term: 'response-based progression', definition: 'Advancing based on how individual responds to previous phase' },
      ],
      clinicalNotes: 'Technology enables more precise monitoring. Personalization improving but research ongoing. Evidence base strongest for ACL and concussion. Continuous reassessment remains essential.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'parent', label: 'RTP Principles' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['return-to-play', 'protocols', 'sports-medicine'],
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

export default returnToPlayProtocols;
