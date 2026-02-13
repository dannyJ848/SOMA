/**
 * Wheelchairs and Scooters - Educational Content
 */

import { EducationalContent } from '../../types';

export const wheelchairsAndScooters: EducationalContent = {
  id: 'rehab-wheelchairs-and-scooters',
  type: 'concept',
  name: 'Wheelchairs and Scooters',
  alternateNames: ['Wheeled Mobility', 'Power Mobility'],

  levels: {
    1: {
      level: 1,
      summary: 'Wheelchairs and scooters help people who cannot walk or have difficulty walking to get around independently.',
      explanation: `If walking is too hard or not possible, a wheelchair or scooter can help you stay active and independent.

**Types:**
- **Manual wheelchair**: You push the wheels yourself
- **Power wheelchair**: Uses a motor and joystick
- **Scooter**: Like a small vehicle with a seat

**Choosing the right one depends on:**
- How well you can use your arms
- Where you need to go
- Your home and community`,
      keyTerms: [
        { term: 'manual wheelchair', definition: 'Wheelchair moved by pushing the wheels by hand' },
        { term: 'power wheelchair', definition: 'Wheelchair with motor controlled by joystick' },
        { term: 'scooter', definition: 'Battery-powered device with handlebars for steering' },
      ],
      analogies: ['A wheelchair is like having a car for short distances when your legs cannot drive you.'],
      examples: ['Using a power wheelchair to get around work after a spinal cord injury.'],
    },
    2: {
      level: 2,
      summary: 'Wheelchair and scooter selection depends on physical abilities, functional needs, environment, and lifestyle to optimize mobility and independence.',
      explanation: `Proper wheelchair selection requires comprehensive assessment of individual needs.

**Manual Wheelchairs:**
- Standard: basic, heavier
- Lightweight: easier to propel
- Ultra-lightweight: active users
- Rigid frame vs. folding

**Power Wheelchairs:**
- Rear-wheel drive: outdoor stability
- Front-wheel drive: indoor maneuverability
- Mid-wheel drive: tight turning
- Standing, reclining, tilt functions available

**Scooters:**
- 3-wheel: more maneuverable
- 4-wheel: more stable
- Travel scooters: portable
- Full-size: more range and features

**Assessment Considerations:**
- Upper body strength and endurance
- Trunk control
- Cognitive function
- Vision
- Home accessibility
- Transportation needs
- Community access goals`,
      keyTerms: [
        { term: 'seating assessment', definition: 'Evaluation to determine best wheelchair seat and positioning' },
        { term: 'tilt-in-space', definition: 'Wheelchair feature allowing the seat to tilt while maintaining position' },
        { term: 'pressure mapping', definition: 'Technology to assess pressure distribution for cushion selection' },
      ],
      analogies: ['Choosing a wheelchair is like buying a car - you need the right features for your needs and lifestyle.'],
    },
    3: {
      level: 3,
      summary: 'Wheelchair prescription integrates seating biomechanics, pressure management, and functional mobility assessment to optimize posture, comfort, and independence.',
      explanation: `## Comprehensive Assessment

**Physical Evaluation:**
- Strength and ROM
- Sensation
- Trunk control
- Balance
- Coordination

**Functional Assessment:**
- Current mobility
- Transfer ability
- ADL performance
- Community participation

**Environmental Assessment:**
- Home accessibility
- Community barriers
- Transportation
- Funding sources

## Seating and Positioning

**Goals:**
- Postural support
- Pressure distribution
- Function optimization
- Comfort
- Secondary prevention

**Components:**
- Seat cushion
- Back support
- Armrests
- Leg rests
- Head support if needed

## Pressure Management

**Risk Factors:**
- Sensation loss
- Immobility
- Poor nutrition
- Medical conditions

**Prevention:**
- Appropriate cushion selection
- Weight shifts/pressure relief
- Skin monitoring
- Positioning adjustments

## Power Mobility Considerations

**Drive Configuration:**
| Type | Indoor | Outdoor | Turning |
|------|--------|---------|---------|
| Rear | Good | Excellent | Large radius |
| Front | Excellent | Good | Moderate |
| Mid | Excellent | Good | Smallest |

**Alternative Controls:**
- Head control
- Chin control
- Sip and puff
- Eye gaze`,
      keyTerms: [
        { term: 'pressure relief', definition: 'Techniques to reduce prolonged pressure on skin' },
        { term: 'sip and puff', definition: 'Wheelchair control using breath for those with limited arm function' },
        { term: 'seating biomechanics', definition: 'Science of body positioning and support in wheelchairs' },
      ],
      clinicalNotes: 'Pressure ulcers are a significant risk in wheelchair users. Appropriate cushion selection and teaching pressure relief techniques are essential components of wheelchair prescription.',
    },
    4: {
      level: 4,
      summary: 'Advanced wheelchair prescription addresses complex seating needs, specialized mobility requirements, and technology integration to maximize function and quality of life.',
      explanation: `## Complex Seating

**Postural Deformities:**
- Fixed vs. flexible deformities
- Accommodation vs. correction
- Custom molded seating
- Secondary complications prevention

**Specialized Needs:**
- Ventilator accommodation
- Communication device mounting
- Power positioning (tilt, recline, elevate)
- Standing wheelchairs

## Mobility Training

**Skills Training:**
- Propulsion efficiency
- Transfer techniques
- Community navigation
- Vehicle transfer

**Safety:**
- Fall prevention
- Environmental awareness
- Emergency procedures

## Outcomes

**Measures:**
- Functioning Everyday with a Wheelchair (FEW)
- Quebec User Evaluation (QUEST)
- Wheelchair Skills Test
- Community participation measures

## Funding and Access

**Coverage:**
- Medicare/Medicaid requirements
- Documentation needs
- Prior authorization
- Appeals process

**Barriers:**
- Coverage limitations
- Geographic access
- Wait times
- Training availability`,
      keyTerms: [
        { term: 'custom molded seating', definition: 'Individually shaped seating surfaces for complex positioning needs' },
        { term: 'standing wheelchair', definition: 'Power wheelchair with ability to bring user to standing position' },
        { term: 'FEW', definition: 'Functioning Everyday with a Wheelchair - outcome measure for wheelchair function' },
      ],
      clinicalNotes: 'Power tilt and recline features allow pressure redistribution and postural changes that can prevent skin breakdown and manage tone. These features may be medically necessary for complex patients.',
    },
    5: {
      level: 5,
      summary: 'Contemporary wheelchair research explores smart technologies, personalized prescription models, and design innovation to enhance mobility, independence, and community participation.',
      explanation: `## Technology Advances

**Smart Wheelchairs:**
- Obstacle avoidance
- Navigation assistance
- Automated driving modes
- Environmental control integration

**Monitoring:**
- Activity tracking
- Pressure monitoring
- Usage data
- Maintenance alerts

## Research Directions

**Design Innovation:**
- Ultralight materials
- Improved propulsion efficiency
- Stair-climbing capabilities
- Modular designs

**Control Interfaces:**
- Brain-computer interface
- Eye tracking improvements
- Voice control
- Gesture recognition

## Implementation

**Access:**
- Policy advocacy
- Coverage improvements
- Global access disparities
- Sustainable design

**Outcomes:**
- Participation focus
- Quality of life
- Long-term health
- Cost-effectiveness`,
      keyTerms: [
        { term: 'brain-computer interface', definition: 'Technology allowing direct brain control of devices' },
        { term: 'smart wheelchair', definition: 'Wheelchair with integrated sensors and navigation technology' },
      ],
      clinicalNotes: 'Prototype wheelchairs with stair-climbing and standing capabilities are in development, potentially expanding where wheelchair users can access in the future.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-mobility-aids-overview', targetType: 'topic', relationship: 'parent', label: 'Mobility Aids Overview' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['rehabilitation', 'wheelchair', 'mobility', 'assistive technology'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default wheelchairsAndScooters;
