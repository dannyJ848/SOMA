/**
 * Orthotic Devices - Educational Content
 */

import { EducationalContent } from '../../types';

export const orthoticDevices: EducationalContent = {
  id: 'rehab-orthotic-devices',
  type: 'concept',
  name: 'Orthotic Devices',
  alternateNames: ['Braces', 'Orthoses', 'Splints'],

  levels: {
    1: {
      level: 1,
      summary: 'Orthotic devices are braces and supports that help protect, support, or improve how your body works.',
      explanation: `Orthotics are devices worn on the outside of your body to support or correct problems with bones, joints, or muscles.

**Common types:**
- Foot orthotics (shoe inserts)
- Ankle-foot orthoses (AFOs)
- Knee braces
- Back braces
- Wrist splints

**They can help:**
- Support weak muscles
- Protect healing injuries
- Correct alignment
- Reduce pain`,
      keyTerms: [
        { term: 'orthotic', definition: 'A device worn to support, align, or improve body function' },
        { term: 'AFO', definition: 'Ankle-foot orthosis - a brace supporting the foot and ankle' },
        { term: 'splint', definition: 'A device that keeps a body part from moving' },
      ],
      analogies: ['An orthotic is like scaffolding for your body - it provides support where you need it.'],
      examples: ['Wearing an ankle brace to prevent sprains during sports.'],
    },
    2: {
      level: 2,
      summary: 'Orthotic devices are prescribed to support, protect, correct, or assist body parts based on assessment of underlying impairments and functional goals.',
      explanation: `Orthotics are categorized by body region and function.

**Functions:**
- Support (prevent collapse)
- Correct (improve alignment)
- Protect (immobilize)
- Assist (aid movement)

**Lower Limb Orthotics:**
- Foot orthoses: arch support, cushioning
- AFOs: ankle stability, foot drop correction
- KAFOs: knee and ankle control
- Hip orthoses

**Upper Limb Orthotics:**
- Hand/wrist splints
- Elbow orthoses
- Shoulder supports

**Spinal Orthotics:**
- Cervical collars
- Thoracolumbosacral (TLSO)
- Lumbosacral (LSO)

**Common Indications:**
- Neurological weakness
- Arthritis
- Post-injury/surgery
- Congenital conditions`,
      keyTerms: [
        { term: 'KAFO', definition: 'Knee-ankle-foot orthosis - brace controlling knee and ankle' },
        { term: 'TLSO', definition: 'Thoracolumbosacral orthosis - back brace' },
        { term: 'foot drop', definition: 'Inability to lift the front of the foot, causing dragging' },
      ],
      analogies: ['Orthotics are like external muscles - they do the work weak muscles cannot.'],
    },
    3: {
      level: 3,
      summary: 'Orthotic prescription requires understanding biomechanics, material properties, and design principles to achieve optimal support, correction, or assistance for specific impairments.',
      explanation: `## Prescription Process

**Assessment:**
- Medical diagnosis
- Range of motion
- Muscle strength
- Sensation
- Functional needs

**Orthotic Goals:**
- Define desired outcome
- Balance support vs. function
- Consider patient factors
- Plan for progression

## Lower Limb Biomechanics

**AFO Types:**
- Solid: Maximum control
- Articulated: Allows some movement
- Posterior leaf spring: Assists push-off
- Ground reaction: Knee extension moment

**Knee Control:**
- Locked: Maximum stability
- Stance control: Locks for stance, free for swing
- Free motion: Training, conditioning

## Upper Limb Orthotics

**Hand Splints:**
- Resting: Position of function
- Functional: Allow some use
- Dynamic: Apply gentle force

**Indications:**
- Fractures
- Nerve injuries
- Tendon repairs
- Arthritis

## Materials

**Thermoplastics:**
- Custom moldable
- Rigid or semi-rigid
- Common for custom orthotics

**Carbon Fiber:**
- Lightweight, strong
- Energy storage/return
- Higher performance applications`,
      keyTerms: [
        { term: 'posterior leaf spring AFO', definition: 'Flexible AFO that assists push-off during walking' },
        { term: 'stance control orthosis', definition: 'Orthosis that locks during standing and unlocks for leg swing' },
        { term: 'ground reaction AFO', definition: 'AFO designed to create knee extension moment during stance' },
      ],
      clinicalNotes: 'AFO design significantly affects gait pattern. Solid AFOs provide maximum stability but prevent ankle motion, while articulated designs allow more natural gait but provide less support.',
    },
    4: {
      level: 4,
      summary: 'Advanced orthotic prescription integrates sophisticated biomechanical analysis, specialized materials, and functional outcome assessment to optimize device design for complex rehabilitation needs.',
      explanation: `## Advanced Analysis

**Gait Laboratory:**
- Motion capture
- Force plate analysis
- EMG
- Oxygen consumption

**Biomechanical Optimization:**
- Alignment correction
- Moment arm modification
- Energy efficiency
- Balance of mobility vs. stability

## Specialized Applications

**Pediatric:**
- Growth considerations
- Developmental needs
- School and play requirements
- Family training

**Neurological:**
- Spasticity management
- Tone considerations
- Progressive conditions
- Functional electrical stimulation hybrid

**Sports:**
- Activity-specific design
- Performance enhancement
- Injury prevention
- Rule compliance

## Evidence and Outcomes

**Effectiveness:**
- Gait improvement
- Fall prevention
- Function
- Quality of life

**Adherence:**
- Fit and comfort
- Cosmesis
- Ease of use
- Patient education`,
      keyTerms: [
        { term: 'FES-orthosis hybrid', definition: 'Combining functional electrical stimulation with orthotic support' },
        { term: 'moment arm', definition: 'Distance from joint to point of force application' },
      ],
      clinicalNotes: 'Hybrid FES-orthotic systems can provide dynamic assistance and potentially promote neuroplasticity while maintaining safety with orthotic support.',
    },
    5: {
      level: 5,
      summary: 'Contemporary orthotics research explores powered assistance, smart materials, and personalized manufacturing to create dynamic, responsive devices that enhance function beyond traditional passive support.',
      explanation: `## Emerging Technologies

**Powered Orthotics:**
- Exoskeletons
- Powered AFOs
- Motor-assisted devices
- Battery and control challenges

**Smart Materials:**
- Variable stiffness
- Responsive properties
- Self-adjusting
- Sensor integration

## Personalized Manufacturing

**3D Printing:**
- Custom design
- Rapid prototyping
- Cost reduction potential
- Material advances

**Digital Workflow:**
- Scanning
- CAD design
- Manufacturing
- Quality control

## Future Directions

- Real-time adaptation
- Neural control integration
- Improved cosmesis
- Affordable access globally`,
      keyTerms: [
        { term: 'powered orthosis', definition: 'Orthotic with motors providing active assistance' },
        { term: 'variable stiffness', definition: 'Materials or designs that change rigidity based on conditions' },
      ],
      clinicalNotes: 'Powered exoskeletons for gait assistance are in various stages of development and commercialization, with applications ranging from rehabilitation to community mobility for paralysis.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-mobility-aids-overview', targetType: 'topic', relationship: 'related', label: 'Mobility Aids Overview' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['rehabilitation', 'orthotics', 'braces'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default orthoticDevices;
