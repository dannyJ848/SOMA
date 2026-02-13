/**
 * Prosthetic Devices - Educational Content
 */

import { EducationalContent } from '../../types';

export const prostheticDevices: EducationalContent = {
  id: 'rehab-prosthetic-devices',
  type: 'concept',
  name: 'Prosthetic Devices',
  alternateNames: ['Prostheses', 'Artificial Limbs'],

  levels: {
    1: {
      level: 1,
      summary: 'Prosthetic devices are artificial limbs that replace arms or legs that have been lost to help people walk, work, and do daily activities.',
      explanation: `A prosthesis is an artificial body part made to replace one that is missing. Modern prostheses help people do many activities.

**Types:**
- **Leg prosthesis**: Helps with walking
- **Arm prosthesis**: Helps with reaching and grasping
- **Partial prostheses**: Replace part of a limb

**What to expect:**
- Custom fitting by a prosthetist
- Learning to use the prosthesis
- Regular adjustments as needed`,
      keyTerms: [
        { term: 'prosthesis', definition: 'An artificial device replacing a missing body part' },
        { term: 'prosthetist', definition: 'A specialist who designs and fits prosthetic devices' },
        { term: 'amputation', definition: 'Surgical removal of a limb or part of a limb' },
      ],
      analogies: ['A prosthesis is like a replacement tool that lets you do things your missing limb would do.'],
      examples: ['A runner with a leg prosthesis competing in races.'],
    },
    2: {
      level: 2,
      summary: 'Prosthetic rehabilitation involves pre-operative planning, surgical considerations, prosthetic fitting, and comprehensive training to restore function after amputation.',
      explanation: `Prosthetic care is a team effort involving surgeons, prosthetists, therapists, and the patient.

**Lower Limb Levels:**
- Partial foot
- Below knee (transtibial)
- Above knee (transfemoral)
- Hip disarticulation

**Upper Limb Levels:**
- Partial hand
- Below elbow (transradial)
- Above elbow (transhumeral)
- Shoulder disarticulation

**Prosthetic Components:**
- Socket: custom-fitted interface
- Suspension: keeps prosthesis on
- Joints: knee, ankle, elbow, wrist
- Terminal device: hand or hook

**Rehabilitation Process:**
1. Pre-prosthetic: wound healing, conditioning
2. Fitting: prosthesis creation and adjustment
3. Training: learning to use prosthesis
4. Long-term: maintenance and follow-up`,
      keyTerms: [
        { term: 'transtibial', definition: 'Below-knee amputation level' },
        { term: 'transfemoral', definition: 'Above-knee amputation level' },
        { term: 'socket', definition: 'The part of the prosthesis that fits over the residual limb' },
      ],
      analogies: ['The socket is like a custom shoe for your residual limb - fit is critical for comfort and function.'],
    },
    3: {
      level: 3,
      summary: 'Prosthetic prescription integrates amputation level, patient factors, and component selection to optimize biomechanical function and achieve mobility and independence goals.',
      explanation: `## Pre-Prosthetic Phase

**Goals:**
- Wound healing
- Edema control
- Pain management
- Strength and flexibility
- Psychological adjustment

**Shaping:**
- Compression wrapping or shrinker
- Prepares limb for socket

## Component Selection

**Lower Limb:**
- Feet: SACH, dynamic response, microprocessor
- Knees: single-axis, polycentric, microprocessor
- Sockets: PTB, TSB, suction

**Upper Limb:**
- Terminal devices: hook, hand
- Control: body-powered, myoelectric

## Training

**Lower Limb:**
- Static balance
- Weight shifting
- Gait training
- Community ambulation
- Stairs and obstacles

**Upper Limb:**
- Controls training
- Functional tasks
- Bilateral activities

## Outcomes

**K-Levels (Medicare):**
- K0: Non-ambulatory
- K1: Household ambulator
- K2: Limited community
- K3: Unlimited community
- K4: High activity/athlete`,
      keyTerms: [
        { term: 'microprocessor knee', definition: 'Computer-controlled prosthetic knee for improved safety and function' },
        { term: 'myoelectric', definition: 'Prosthesis controlled by electrical signals from muscles' },
        { term: 'K-level', definition: 'Medicare functional classification for prosthetic prescription' },
      ],
      clinicalNotes: 'K-level determination guides prosthetic component coverage. Higher K-levels qualify for more advanced (and expensive) components like microprocessor knees.',
    },
    4: {
      level: 4,
      summary: 'Advanced prosthetics combines biomechanical optimization, microprocessor technology, and osseointegration to achieve near-normal function for appropriately selected patients.',
      explanation: `## Advanced Technologies

**Microprocessor Components:**
- Real-time gait adaptation
- Stumble recovery
- Variable cadence response
- Improved safety and efficiency

**Myoelectric Upper Limb:**
- Multiple grip patterns
- Proportional control
- Pattern recognition
- Targeted muscle reinnervation

**Osseointegration:**
- Direct bone attachment
- Eliminates socket issues
- Improved proprioception
- Select patients

## Complex Rehabilitation

**Bilateral Amputation:**
- Modified training approach
- Energy expenditure considerations
- Equipment modifications

**Multiple Limb Loss:**
- Priority setting
- Adaptive strategies
- Comprehensive team approach

## Special Applications

**Sports:**
- Activity-specific prostheses
- Running blades
- Sport-specific terminal devices

**High-Level Function:**
- Targeted reinnervation
- Pattern recognition
- Sensory feedback research`,
      keyTerms: [
        { term: 'osseointegration', definition: 'Prosthetic attachment directly to bone through implant' },
        { term: 'targeted muscle reinnervation', definition: 'Surgery redirecting nerves to improve prosthetic control' },
        { term: 'pattern recognition', definition: 'Myoelectric control using muscle signal patterns for intuitive control' },
      ],
      clinicalNotes: 'Targeted muscle reinnervation (TMR) improves prosthetic control and may reduce phantom limb pain. It is increasingly performed at the time of amputation when indicated.',
    },
    5: {
      level: 5,
      summary: 'Contemporary prosthetics research pursues bionic integration, neural interfaces, and sensory restoration to approach or exceed natural limb function.',
      explanation: `## Emerging Technologies

**Neural Interfaces:**
- Peripheral nerve recording
- Brain-machine interfaces
- Bidirectional communication
- Sensory feedback

**Sensory Restoration:**
- Pressure feedback
- Proprioception
- Temperature sensing
- Texture discrimination

## Research Frontiers

**Regenerative:**
- Limb regeneration research
- Tissue engineering
- Nerve regeneration

**Integration:**
- Closer human-machine interface
- Embodiment of prosthesis
- Reduced cognitive load

## Implementation

**Barriers:**
- Cost
- Access globally
- Training requirements
- Insurance coverage

**Future:**
- Affordable advanced tech
- Global access
- Customization
- Continuous improvement`,
      keyTerms: [
        { term: 'neural interface', definition: 'Direct connection between nervous system and prosthesis' },
        { term: 'embodiment', definition: 'Psychological sense that prosthesis is part of one\'s body' },
      ],
      clinicalNotes: 'Research prostheses with sensory feedback are showing promise in laboratory settings, allowing users to feel pressure and texture through their prosthesis.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-mobility-aids-overview', targetType: 'topic', relationship: 'related', label: 'Mobility Aids Overview' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['rehabilitation', 'prosthetics', 'amputation'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default prostheticDevices;
