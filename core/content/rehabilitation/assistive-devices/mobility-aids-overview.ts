/**
 * Mobility Aids Overview - Educational Content
 */

import { EducationalContent } from '../../types';

export const mobilityAidsOverview: EducationalContent = {
  id: 'rehab-mobility-aids-overview',
  type: 'concept',
  name: 'Mobility Aids Overview',
  alternateNames: ['Walking Aids', 'Ambulatory Devices'],

  levels: {
    1: {
      level: 1,
      summary: 'Mobility aids like canes, walkers, and wheelchairs help people move around safely when walking is difficult.',
      explanation: `If you have trouble walking because of weakness, pain, or balance problems, mobility aids can help you get around safely.

**Types of mobility aids:**
- **Cane**: Provides light support and balance
- **Walker**: More support than a cane
- **Wheelchair**: For when walking is not possible
- **Scooter**: Powered device for longer distances

**Why use a mobility aid?**
- Prevent falls
- Walk with less pain
- Feel more confident
- Stay independent`,
      keyTerms: [
        { term: 'mobility aid', definition: 'A device that helps you move around' },
        { term: 'balance', definition: 'The ability to stay steady when standing or moving' },
        { term: 'walker', definition: 'A frame you push that provides support when walking' },
      ],
      analogies: ['A mobility aid is like training wheels - it gives you support while you move.'],
      examples: ['Using a cane to walk after a knee injury.'],
    },
    2: {
      level: 2,
      summary: 'Mobility aids are selected based on the user\'s strength, balance, and functional needs, ranging from canes providing minimal support to wheelchairs for those unable to walk.',
      explanation: `Mobility aids are prescribed based on individual assessment of needs and abilities.

**Selection Factors:**
- Balance ability
- Arm and leg strength
- Cognitive function
- Environment (home, community)
- Activity level
- Insurance coverage

**Types and Uses:**

**Canes:**
- Standard cane: mild balance impairment
- Quad cane: more stability
- Offset cane: better weight distribution
- Hold on opposite side of problem

**Walkers:**
- Standard walker: maximum stability, pick up
- Rolling walker: wheels in front
- Four-wheel walker (rollator): continuous movement

**Wheelchairs:**
- Manual: self-propelled or pushed
- Power: battery-operated
- Transport: pushed by another person

**Proper Fit:**
- Height adjustment important
- Arms should bend slightly
- Prevents strain and improves function`,
      keyTerms: [
        { term: 'quad cane', definition: 'Cane with four-point base for more stability' },
        { term: 'rollator', definition: 'Walker with four wheels, brakes, and often a seat' },
        { term: 'gait pattern', definition: 'The pattern of steps used when walking with a device' },
      ],
      analogies: ['Choosing a mobility aid is like choosing shoes - fit and function matter for comfort and safety.'],
    },
    3: {
      level: 3,
      summary: 'Mobility device prescription requires assessment of strength, balance, cognition, and environment to select appropriate devices and optimize gait patterns for safety and efficiency.',
      explanation: `## Assessment for Device Selection

**Physical Evaluation:**
- Muscle strength (especially lower extremities, grip)
- Range of motion
- Balance (static and dynamic)
- Endurance
- Coordination

**Functional Assessment:**
- Current mobility status
- Fall history
- Home environment
- Community access needs
- ADL requirements

**Cognitive Assessment:**
- Ability to learn device use
- Safety awareness
- Memory for precautions

## Device Hierarchy

**Least to Most Support:**
1. No device
2. Single-point cane
3. Quad cane
4. Front-wheeled walker
5. Four-wheeled walker (rollator)
6. Standard walker
7. Wheelchair

## Gait Patterns

**Two-Point Pattern:**
- Cane and opposite leg together
- Most normal-appearing gait

**Three-Point Pattern:**
- Device first, then legs
- For non-weight-bearing

**Weight-Bearing Designations:**
- Full weight-bearing (FWB)
- Weight-bearing as tolerated (WBAT)
- Partial weight-bearing (PWB)
- Touch-down weight-bearing (TDWB)
- Non-weight-bearing (NWB)

## Fitting Guidelines

**Cane Height:**
- Top of cane at wrist crease
- Elbow flexion 20-30 degrees

**Walker Height:**
- Handgrip at wrist level
- Elbow flexion 20-30 degrees`,
      keyTerms: [
        { term: 'two-point gait', definition: 'Walking pattern with cane and opposite leg moving together' },
        { term: 'three-point gait', definition: 'Walking pattern where device advances first, then legs' },
        { term: 'PWB', definition: 'Partial weight-bearing - only some weight allowed on affected leg' },
      ],
      clinicalNotes: 'Proper device selection and fit significantly impact safety and function. Devices that are too advanced may reduce independence, while inadequate devices increase fall risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced mobility device prescription integrates biomechanical analysis, functional outcomes research, and technology advances to optimize mobility, safety, and quality of life.',
      explanation: `## Biomechanical Considerations

**Load Distribution:**
- Cane reduces ipsilateral hip load by 25%
- Walker reduces bilateral hip load
- Proper technique essential for benefit

**Energy Expenditure:**
- Mobility aids increase energy cost of walking
- Device efficiency varies
- Balance with support needs

## Evidence-Based Selection

**Fall Prevention:**
- Appropriate device reduces falls
- Over-prescription may increase falls
- Regular reassessment needed

**Functional Outcomes:**
- Community ambulation goals
- Quality of life considerations
- Social acceptance factors

## Advanced Devices

**Smart Canes:**
- Navigation assistance
- Fall detection
- GPS tracking

**Powered Mobility:**
- Indoor vs. outdoor use
- Funding considerations
- Training requirements

## Special Populations

**Neurological Conditions:**
- Cognitive considerations
- Progressive needs
- Specialized devices

**Pediatric:**
- Growth considerations
- Developmental stage
- School needs

## Outcomes Assessment

**Measures:**
- Gait speed
- Functional ambulation
- Falls
- Community participation
- Patient satisfaction`,
      keyTerms: [
        { term: 'community ambulation', definition: 'Walking ability sufficient for outdoor and community activities' },
        { term: 'smart mobility device', definition: 'Assistive device with integrated technology features' },
      ],
      clinicalNotes: 'Cane use on the opposite side of hip pathology reduces joint loading by up to 25% during the stance phase. This biomechanical principle guides cane prescription for hip osteoarthritis.',
    },
    5: {
      level: 5,
      summary: 'Contemporary mobility device research explores smart technologies, personalized prescription algorithms, and environmental integration to optimize mobility outcomes and participation.',
      explanation: `## Technology Integration

**Sensor-Based Devices:**
- Gait monitoring
- Fall prediction
- Activity tracking
- Data for clinical decisions

**Navigation Systems:**
- GPS for orientation
- Obstacle detection
- Route guidance
- Emergency alerts

## Precision Prescription

**Predictive Models:**
- Outcome prediction
- Device optimization
- Individual factors
- Machine learning applications

## Implementation

**Barriers:**
- Cost and funding
- Stigma
- Access to assessment
- Training quality

**Solutions:**
- Policy advocacy
- Technology cost reduction
- Community programs
- Telehealth options

## Future Directions

- Exoskeletons for ambulation
- AI-guided device selection
- Integrated smart home
- Universal design`,
      keyTerms: [
        { term: 'exoskeleton', definition: 'Wearable robotic device that assists with movement' },
        { term: 'universal design', definition: 'Design approach creating environments usable by all people' },
      ],
      clinicalNotes: 'Robotic exoskeletons are emerging as assistive devices for individuals with paralysis, though cost and practicality remain barriers to widespread use.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-wheelchairs-and-scooters', targetType: 'topic', relationship: 'child', label: 'Wheelchairs and Scooters' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['rehabilitation', 'mobility', 'assistive devices'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mobilityAidsOverview;
