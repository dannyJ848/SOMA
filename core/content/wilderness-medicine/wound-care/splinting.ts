/**
 * Splinting - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const splinting: EducationalContent = {
  id: 'wilderness-splinting',
  type: 'concept',
  name: 'Splinting',
  alternateNames: ['Fracture Immobilization', 'Extremity Splinting'],

  levels: {
    1: {
      level: 1,
      summary: 'Splinting keeps an injured arm or leg still to prevent more damage and reduce pain. Splints can be made from many materials and should immobilize the joints above and below the injury.',
      explanation: `## What Is Splinting?

A splint is something that keeps a hurt arm, leg, or joint from moving. This helps with pain and prevents more damage.

## When to Use a Splint
- Suspected broken bone
- Bad sprains
- Dislocated joints
- Need to move an injured person

## How to Make a Splint
1. Find something rigid (board, sticks, trekking pole)
2. Add padding (clothing, sleeping pad)
3. Secure with bandages, straps, or tape
4. Include the joints above and below the injury
5. Check that fingers/toes still have feeling and color

## Materials You Can Use
- Sticks or branches
- Trekking poles
- Rolled newspapers/magazines
- Sleeping pad
- Backpack frame
- Another body part (tape injured finger to healthy one)`,
      keyTerms: [
        { term: 'splint', definition: 'Something that holds an injured body part still' },
        { term: 'immobilize', definition: 'To keep from moving' },
      ],
    },
    2: {
      level: 2,
      summary: 'Splinting immobilizes fractures and injuries to reduce pain, prevent further injury, and facilitate transport. Proper technique includes padding, joint immobilization, and circulation checks.',
      explanation: `## Splinting Principles

### Goals
- Reduce pain
- Prevent further injury
- Protect blood vessels and nerves
- Facilitate transport

### General Technique
1. Assess circulation before and after
2. Splint in position found (usually)
3. Include joint above and below injury
4. Pad bony prominences
5. Secure firmly but not too tight
6. Check circulation frequently

## Types of Splints

### Rigid Splints
- SAM splint (moldable)
- Board splints
- Improvised (sticks, trekking poles)

### Soft Splints
- Pillow splints
- Sling and swathe
- Blanket rolls

### Anatomical Splints
- Buddy taping (fingers/toes)
- Body splinting (arm to chest)

## Location-Specific

### Arm/Forearm
- Sling and swathe
- Rigid splint
- Position of function

### Lower Leg
- Rigid splint both sides
- Pillow splint
- Include knee and ankle

### Ankle/Foot
- Pillow splint
- SAM splint in stirrup

## Circulation Check (5 Ps)
- Pain
- Pallor (pale color)
- Pulse
- Paresthesias (numbness/tingling)
- Paralysis (can't move)`,
      keyTerms: [
        { term: 'SAM splint', definition: 'A moldable, padded aluminum splint' },
        { term: 'sling and swathe', definition: 'Method of supporting arm against body' },
      ],
    },
    3: {
      level: 3,
      summary: 'Effective splinting requires understanding of anatomy, proper technique, and recognition of complications. Splints should immobilize joints above and below the injury in a position of function. Neurovascular status must be assessed before and after application.',
      explanation: `## Anatomical Considerations

### Position of Function
- Wrist: slight extension (20-30 degrees)
- Hand: intrinsic plus position
- Ankle: 90 degrees (neutral)
- Knee: slight flexion (15-20 degrees)

### Structures at Risk
- Nerves (compression, stretching)
- Blood vessels
- Skin (pressure points)

## Splinting Technique Details

### Preparation
- Expose and assess injury
- Check neurovascular status
- Gather materials
- Plan application

### Application
1. Measure and prepare splint
2. Pad bony prominences
3. Position extremity
4. Apply splint
5. Secure with circumferential wrap
6. Recheck neurovascular status

### Circumferential Bandaging
- Apply without constriction
- Allow for swelling
- Avoid tape directly on skin
- Leave digits exposed for monitoring

## Specific Injuries

### Suspected Fracture
- Splint in position found
- Gentle traction if angulated
- Include joints above and below
- Do not reduce in field (usually)

### Dislocation
- Splint in position found
- May attempt reduction (trained providers)
- Assess neurovascular before/after
- Urgent evacuation if compromise

### Open Fracture
- Cover wound with sterile dressing
- Splint as for closed fracture
- Antibiotics if available
- Urgent evacuation

## Complications
- Compartment syndrome (pain, tight compartment)
- Pressure injury
- Neurovascular compromise
- Loss of reduction`,
      keyTerms: [
        { term: 'position of function', definition: 'Optimal joint position that preserves function if stiffness occurs' },
        { term: 'compartment syndrome', definition: 'Dangerous pressure buildup in muscle compartment' },
      ],
      clinicalNotes: 'Increasing pain out of proportion, especially with passive stretch, suggests compartment syndrome. Splints should be firm but allow for swelling. Frequent neurovascular checks are essential.',
    },
    4: {
      level: 4,
      summary: 'Evidence-based splinting integrates biomechanical principles with practical application. Position of function minimizes functional loss. Traction splints have specific indications for femur fractures. Wilderness modifications address resource limitations while maintaining principles.',
      explanation: `## Biomechanical Principles

### Immobilization Goals
- Prevent motion at fracture site
- Distribute forces across larger area
- Maintain alignment
- Allow for swelling

### Three-Point Pressure
- Proximal and distal forces
- Counterforce at fracture site
- Creates stabilization

### Position of Function Rationale
- Minimizes tendon shortening
- Preserves joint capsule length
- Optimal position if stiffness develops

## Specific Splint Applications

### Upper Extremity
| Injury | Splint Type | Position |
|--------|-------------|----------|
| Clavicle | Sling and swathe | Arm supported |
| Humerus | Coaptation splint | Elbow 90 degrees |
| Forearm | Sugar tong | Neutral rotation |
| Wrist | Volar splint | 20-30 deg extension |

### Lower Extremity
| Injury | Splint Type | Position |
|--------|-------------|----------|
| Hip | Long board | As found |
| Femur | Traction splint | Traction applied |
| Tibia | Long leg splint | Knee slight flex |
| Ankle | Posterior splint | 90 degrees |

## Traction Splints

### Indications
- Mid-shaft femur fractures
- Reduces pain significantly
- Reduces blood loss
- Facilitates transport

### Contraindications
- Hip injury
- Pelvic fracture
- Knee injury
- Ankle/foot injury ipsilateral

### Application
1. Manual traction
2. Apply device
3. Secure proximal and distal
4. Apply mechanical traction
5. Reassess neurovascular

## Wilderness Adaptations
- Improvised materials
- Limited equipment
- Extended transport times
- Evacuation decision making`,
      keyTerms: [
        { term: 'traction splint', definition: 'Device applying longitudinal pull for femur fracture stabilization' },
        { term: 'coaptation splint', definition: 'Splint surrounding limb providing circumferential support' },
      ],
      clinicalNotes: 'Traction splints significantly reduce pain and blood loss in femur fractures. Do not apply traction splint if there is concomitant hip, pelvis, or ipsilateral knee injury. Improvised traction can be applied with appropriate technique.',
    },
    5: {
      level: 5,
      summary: 'Splinting science integrates orthopedic biomechanics, soft tissue management, and wilderness logistics. Evidence supports specific techniques for optimal outcomes. Field reduction has defined indications and risks. Wilderness protocols address extended care scenarios.',
      explanation: `## Advanced Biomechanics

### Fracture Stability
- Stable: cortical contact, intrinsic stability
- Unstable: comminution, no cortical contact
- Implications for splinting security

### Force Distribution
- Splint width affects pressure
- Longer splints = better immobilization
- Padding reduces point pressure
- Three-point fixation principle

## Evidence Base

### Splint Effectiveness
- Reduces pain consistently
- Reduces soft tissue injury
- May reduce blood loss
- Facilitates safe transport

### Material Comparison
- SAM splint: versatile, lightweight
- Vacuum splints: conforming, stable
- Improvised: effective if principles followed

## Field Reduction Considerations

### Indications for Reduction
- Vascular compromise
- Severe deformity preventing splinting
- Prolonged transport anticipated
- Joint dislocations with experience

### Risks of Reduction
- Soft tissue interposition
- Neurovascular injury
- Fat embolism
- Incomplete reduction

### Technique Principles
- Adequate analgesia
- Longitudinal traction
- Recreate mechanism in reverse
- Gentle manipulation
- Reassess neurovascular immediately

## Prolonged Field Care

### Monitoring
- Neurovascular checks every 2-4 hours
- Skin under splint daily
- Pain trajectory
- Signs of infection (open fractures)

### Splint Adjustment
- Loosen if swelling significant
- Rewrap if loosened
- Padding adjustment for comfort
- Position changes as tolerated

## Special Situations

### Pediatric
- Growth plate considerations
- Higher remodeling potential
- Lower threshold for evacuation

### Open Fractures
- Gustilo-Anderson classification
- Antibiotic timing critical
- Wound coverage
- Urgent evacuation

### Compartment Syndrome
- Time-critical emergency
- Release constrictive dressings
- Emergent evacuation
- Fasciotomy may be indicated`,
      keyTerms: [
        { term: 'Gustilo-Anderson classification', definition: 'Grading system for open fractures guiding management' },
        { term: 'fasciotomy', definition: 'Surgical release of muscle compartment for compartment syndrome' },
      ],
      clinicalNotes: 'Field reduction should only be attempted by trained providers with clear indications. Open fractures require antibiotics within 6 hours ideally. Compartment syndrome requires emergent intervention - if suspected, do not delay evacuation.',
    },
  },

  media: [],
  citations: [
    {
      id: 'splinting-guidelines',
      type: 'article',
      title: 'Wilderness Medical Society Practice Guidelines for Splinting',
      source: 'Wilderness & Environmental Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-wound-care', targetType: 'concept', relationship: 'related', label: 'Wound Care' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['wilderness-medicine', 'emergency-medicine', 'orthopedics'],
    keywords: ['splinting', 'fracture', 'immobilization', 'first aid'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default splinting;
