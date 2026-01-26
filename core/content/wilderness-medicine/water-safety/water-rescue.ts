/**
 * Water Rescue - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const waterRescue: EducationalContent = {
  id: 'wilderness-water-rescue',
  type: 'concept',
  name: 'Water Rescue',
  alternateNames: ['Aquatic Rescue', 'Drowning Response'],

  levels: {
    1: {
      level: 1,
      summary: 'Water rescue means helping someone who is in trouble in the water. The safest way is to stay on shore and throw or reach something to them. Never jump in unless you are a trained lifeguard.',
      explanation: `## How to Help Someone in the Water

If you see someone struggling in the water, you can help without putting yourself in danger.

## The Safe Way: Reach, Throw, Row, Go
1. **Reach** - Hold out a pole, branch, or your arm
2. **Throw** - Toss a life ring, rope, or anything that floats
3. **Row** - Use a boat to get to them
4. **Go** - Only swim to them if you are trained

## Important Rules
- Always call for help (911)
- Never jump in unless you are trained
- Stay calm and encourage the person
- When they are out, keep them warm`,
      keyTerms: [
        { term: 'rescue', definition: 'Saving someone from danger' },
        { term: 'flotation device', definition: 'Something that floats and helps keep a person above water' },
      ],
    },
    2: {
      level: 2,
      summary: 'Water rescue involves getting a person in distress out of the water safely. The order of priority is Reach-Throw-Row-Go, emphasizing rescuer safety. Untrained individuals should never attempt in-water rescues.',
      explanation: `## Water Rescue Principles

Rescuing someone from water is dangerous. Drowning people often panic and can pull rescuers underwater. The approach should prioritize rescuer safety.

## Reach-Throw-Row-Go

### 1. Reach
- Extend arm, leg, branch, or pole
- Lie down for stability
- Pull person to safety

### 2. Throw
- Throw anything that floats
- Ring buoys, coolers, kickboards
- Aim beyond the person, pull toward you

### 3. Row
- Use any available watercraft
- Approach from the side
- Have person hold onto the boat

### 4. Go (Trained Rescuers Only)
- Use a flotation device
- Approach from behind
- Never let person grab you directly

## After Rescue
- Call emergency services
- Check breathing
- Begin CPR if needed
- Treat for hypothermia`,
      keyTerms: [
        { term: 'distress', definition: 'Being in danger or difficulty' },
        { term: 'hypothermia', definition: 'Dangerous drop in body temperature' },
      ],
    },
    3: {
      level: 3,
      summary: 'Water rescue requires systematic approach prioritizing rescuer safety. The Reach-Throw-Row-Go hierarchy minimizes rescuer risk. In-water rescues require training and equipment. Post-rescue care includes assessment for submersion injury and hypothermia.',
      explanation: `## Rescue Approach

### Scene Assessment
- Identify number of victims
- Assess environmental hazards
- Plan approach and exit
- Call for backup

### Reach-Throw-Row-Go Hierarchy
- Each step minimizes rescuer risk
- Progress only if safer methods fail
- In-water rescue is last resort

## In-Water Rescue Techniques

### Approach
- Take rescue flotation device
- Approach from behind when possible
- Maintain visual contact

### Contact
- Extend flotation device first
- Avoid direct contact with panicked victim
- Control victim from behind if necessary

### Extrication
- Horizontal extraction preferred
- Minimize spinal movement if trauma suspected
- Support head and neck

## Post-Rescue Assessment
- Airway, breathing, circulation
- Level of consciousness
- Core temperature
- Submersion injury signs
- Need for CPR`,
      keyTerms: [
        { term: 'extrication', definition: 'Removing someone from a dangerous situation' },
        { term: 'rescue flotation device', definition: 'Buoyant equipment used to support victim and rescuer' },
      ],
      clinicalNotes: 'Untrained rescuers attempting in-water rescues frequently become drowning victims themselves. Drowning victims may appear calm and not wave for help.',
    },
    4: {
      level: 4,
      summary: 'Water rescue integrates risk assessment, systematic approach, and specialized techniques. Professional rescue involves in-water skills, equipment use, and team coordination. Medical management begins immediately with focus on oxygenation and temperature management.',
      explanation: `## Professional Water Rescue

### Risk Assessment
- Water conditions (current, temperature)
- Victim behavior (active vs passive)
- Available resources
- Environmental hazards

### In-Water Techniques

#### Approach Methods
- Front approach (compliant victim)
- Rear approach (distressed victim)
- Underwater approach (submerged victim)

#### Victim Control
- Level off technique
- Arm-over-arm tow
- Cross-chest carry
- Rescue tube techniques

### Submerged Victim Rescue
- Surface dive techniques
- Underwater search patterns
- Breath-hold limitations
- Victim recovery

## Medical Management at Scene

### Initial Assessment
- Response to stimulation
- Breathing quality
- Pulse presence
- Need for rescue breathing or CPR

### Resuscitation Considerations
- Ventilation priority in drowning
- 5 initial rescue breaths
- Modified CPR in water (trained rescuers)
- Hypothermia considerations

### Spinal Precautions
- Indicated only with trauma mechanism
- In-line stabilization
- Extrication techniques`,
      keyTerms: [
        { term: 'passive drowning', definition: 'Drowning victim who is unconscious and not struggling' },
        { term: 'active drowning', definition: 'Drowning victim who is conscious and struggling' },
      ],
      clinicalNotes: 'Active drowning victims have approximately 60 seconds before submersion. Routine spinal immobilization is not indicated without trauma mechanism.',
    },
    5: {
      level: 5,
      summary: 'Advanced water rescue encompasses risk-stratified response, specialized equipment deployment, and integrated medical management. Evidence-based protocols guide scene operations, resuscitation priorities, and prognostication. Multi-agency coordination is essential for complex rescues.',
      explanation: `## Advanced Rescue Operations

### Risk-Benefit Analysis
- Dynamic risk assessment
- Probability of survival
- Rescuer capability
- Resource availability

### Specialized Equipment
- Personal watercraft
- Rescue swimmers
- Helicopter rescue
- Swift water equipment
- Dive teams

## Evidence-Based Resuscitation

### In-Water Rescue Breathing
- Feasibility by trained rescuers
- Improves outcomes in cardiac arrest
- 10 breaths before removal if possible

### CPR Considerations
- Ventilation priority (hypoxia is cause)
- 5 initial rescue breaths
- 30:2 ratio once started
- Early advanced airway

### Extended Resuscitation
- Hypothermia: resuscitate until warm
- Cold water: improved neurological outcomes
- ECMO consideration

## Prognostication
| Factor | Impact |
|--------|--------|
| Submersion <5 min | Favorable |
| Submersion >25 min | Very poor |
| Witnessed event | Better outcomes |
| Cold water | May be protective |
| Immediate CPR | Critical |

## Prevention Focus
- Supervision
- Barriers and alarms
- Swimming competence
- Life jacket use
- Alcohol avoidance`,
      keyTerms: [
        { term: 'swift water rescue', definition: 'Specialized rescue in moving water' },
        { term: 'ECMO', definition: 'Extracorporeal membrane oxygenation for rewarming and support' },
      ],
      clinicalNotes: 'Prevention is far more effective than rescue. 80% of drowning deaths occur in unsupervised settings. In cold water drowning, extended resuscitation is warranted as hypothermia may be neuroprotective.',
    },
  },

  media: [],
  citations: [
    {
      id: 'water-rescue-guidelines',
      type: 'article',
      title: 'Drowning Prevention and Rescue',
      source: 'International Life Saving Federation',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-drowning', targetType: 'condition', relationship: 'related', label: 'Drowning' },
  ],
  tags: {
    systems: [],
    topics: ['wilderness-medicine', 'emergency-medicine', 'rescue'],
    keywords: ['water rescue', 'drowning', 'lifesaving', 'CPR'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default waterRescue;
