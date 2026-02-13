/**
 * Lightning Injury - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const lightningInjury: EducationalContent = {
  id: 'wilderness-lightning-injury',
  type: 'condition',
  name: 'Lightning Injury',
  alternateNames: ['Lightning Strike', 'Keraunopathy'],

  levels: {
    1: {
      level: 1,
      summary: 'Lightning strikes can cause serious injuries including burns, heart problems, and brain injury. If someone is struck by lightning, call 911 and start CPR if they are not breathing. You will not get shocked by touching them.',
      explanation: `## Lightning Strike Injuries

Lightning is very dangerous but many people survive being struck.

## Important Fact
- It is SAFE to touch someone who has been struck by lightning
- They do not hold an electrical charge
- Do not delay helping them

## What Happens
- Burns on the skin
- Heart may stop (cardiac arrest)
- Confusion or unconsciousness
- Hearing or vision problems
- Muscle pain

## What to Do
1. Make sure area is safe (storm may continue)
2. Call 911 immediately
3. Check if person is breathing
4. Start CPR if not breathing and no pulse
5. Treat any burns

## Prevention
- Get inside during thunderstorms
- Avoid tall trees, open fields, water
- If caught outside: crouch low, feet together`,
      keyTerms: [
        { term: 'lightning', definition: 'Electrical discharge from clouds, extremely powerful' },
        { term: 'cardiac arrest', definition: 'When the heart stops beating' },
      ],
    },
    2: {
      level: 2,
      summary: 'Lightning injury causes cardiac, neurological, and skin effects through various mechanisms. Cardiac arrest is the primary cause of death but is often reversible with immediate CPR. Reverse triage prioritizes victims in cardiac arrest.',
      explanation: `## How Lightning Injures

### Mechanisms
- Direct strike (most severe)
- Side flash (from nearby object)
- Ground current (spreads through ground)
- Contact injury (touching struck object)
- Upward streamer (pre-strike)

### Injury Patterns

**Cardiac**
- Asystole (heart stops)
- Often reversible with CPR
- Arrhythmias

**Neurological**
- Loss of consciousness
- Confusion
- Paralysis (temporary "keraunoparalysis")
- Seizures

**Skin**
- Lichtenberg figures (fern-like pattern)
- Linear burns
- Punctate burns
- Clothing ignition burns

## Emergency Response

### Reverse Triage
- Prioritize those in cardiac arrest (different from normal triage)
- Lightning cardiac arrest often reversible
- Those breathing will usually survive

### CPR
- Start immediately if not breathing
- Continue prolonged resuscitation
- Survival possible even with delayed CPR

### Scene Safety
- Storm may continue
- Move victims if safe to do so
- Avoid becoming a victim yourself`,
      keyTerms: [
        { term: 'Lichtenberg figures', definition: 'Fern-like skin markings unique to lightning strike' },
        { term: 'keraunoparalysis', definition: 'Temporary paralysis following lightning strike' },
      ],
    },
    3: {
      level: 3,
      summary: 'Lightning injury involves massive electrical discharge causing cardiac arrhythmia, neurological effects, and thermal injury. Cardiac arrest from lightning is often reversible with prompt CPR due to automaticity recovery. Management prioritizes resuscitation and addresses multi-organ effects.',
      explanation: `## Pathophysiology

### Electrical Effects
- DC countershock to heart
- Asystole more common than VF
- Respiratory arrest from brainstem stunning
- Autonomic dysfunction

### Neurological Injury
- Direct CNS injury
- Hypoxic injury (if cardiac arrest)
- Keraunoparalysis: transient paralysis with mottling
- Autonomic instability

### Thermal Injury
- Brief exposure (<1ms)
- Flashover phenomenon (current over skin surface)
- Burns typically superficial
- Internal burns less common than electrical injuries

## Clinical Features

### Pathognomonic Signs
- Lichtenberg figures (disappear in hours)
- Linear burns in sweat-containing areas
- Ruptured tympanic membranes (50%)
- Cataracts (delayed)

### Cardiac Manifestations
- Asystole (primary cause of death)
- VF less common
- ST changes, arrhythmias
- Myocardial injury

### Neurological Sequelae
- Immediate: LOC, confusion, amnesia
- Keraunoparalysis: paralysis + mottling
- Delayed: cognitive deficits, chronic pain

## Management

### Field Management
- Scene safety priority
- Reverse triage
- Immediate CPR for cardiac arrest
- Prolonged resuscitation warranted
- C-spine precautions if indicated

### Hospital Management
- Cardiac monitoring
- ECG
- CK, troponin
- CT if neurological symptoms
- Hearing and vision evaluation`,
      keyTerms: [
        { term: 'flashover', definition: 'Current traveling over body surface rather than through it' },
        { term: 'reverse triage', definition: 'Prioritizing cardiac arrest victims first, opposite of standard triage' },
      ],
      clinicalNotes: 'Lichtenberg figures are pathognomonic but transient. Cardiac arrest from lightning has better prognosis than other causes due to automaticity recovery. Fixed, dilated pupils should not stop resuscitation.',
    },
    4: {
      level: 4,
      summary: 'Lightning pathophysiology involves massive DC discharge causing cardiac asystole and respiratory arrest. The flashover phenomenon limits internal injury compared to industrial electrocution. Evidence supports prolonged resuscitation with good neurological outcomes possible.',
      explanation: `## Detailed Pathophysiology

### Energy Characteristics
- 300 million volts
- 30,000 amperes
- Duration: 0.0002 seconds
- Compared to industrial: higher voltage, shorter duration

### Flashover Phenomenon
- Current travels over body surface
- Internal current path limited
- External burns > internal injury
- Different from industrial electrical injury

### Cardiac Effects
- DC countershock
- Depolarizes entire myocardium
- Asystole typical
- Automaticity usually returns
- Respiratory arrest may persist longer

## Injury Mechanism by Type

| Mechanism | Voltage | Current Path | Severity |
|-----------|---------|--------------|----------|
| Direct strike | Highest | Through body | Most severe |
| Side flash | High | Surface | Severe |
| Contact | Moderate | Arm to arm | Moderate |
| Ground current | Lower | Legs | Variable |
| Upward streamer | Low | Partial | Usually minor |

## Resuscitation Considerations

### Why Reverse Triage?
- Cardiac arrest = potentially reversible
- Respiratory arrest may persist
- Breathing victims usually survive
- Cardiac arrest without CPR = death

### Duration of Resuscitation
- Prolonged attempts reasonable
- Young, healthy victims
- No underlying cardiac disease
- Hypothermia from cold water/rain
- Fixed pupils unreliable

## Long-term Sequelae
- Neuropsychological: memory, attention, mood
- Chronic pain syndromes
- Cataracts (30-50%, may be delayed months)
- Hearing loss (permanent in some)
- PTSD`,
      keyTerms: [
        { term: 'automaticity', definition: 'Ability of cardiac cells to spontaneously generate impulses' },
        { term: 'side flash', definition: 'Lightning jumping from nearby struck object to person' },
      ],
      clinicalNotes: 'Unlike industrial electrical injury, lightning rarely causes internal burns due to flashover. Cataracts may develop months after strike. Neuropsychological effects are common and persistent.',
    },
    5: {
      level: 5,
      summary: 'Lightning injury represents unique electrical trauma with characteristic cardiac, neurological, and dermatological patterns. Biophysics of lightning discharge explains the flashover phenomenon and organ injury patterns. Evidence supports aggressive resuscitation with favorable outcomes possible.',
      explanation: `## Biophysics of Lightning

### Electrical Parameters
- 1-5 coulombs charge
- 10^8 watts power
- 30,000K temperature (channel)
- Impulse duration: 0.0002 seconds

### Energy Deposition
- Most energy in external flashover
- Skin resistance creates barrier
- Wet skin: lower resistance, more internal current
- Sweat lines: preferential current path

### Acoustic Injury
- Thunder: rapid air expansion
- Barotrauma to ears
- Can cause tympanic membrane rupture
- Hearing loss common

## Electrophysiology

### Cardiac
- DC shock causes simultaneous depolarization
- Asystole from complete depolarization
- Pacemaker cells recover automaticity
- VF less common (short duration shock)
- Respiratory center more susceptible

### Neurological
- Direct neuronal injury
- Autonomic dysfunction
- Keraunoparalysis mechanism unclear
- Possible transient sympathetic hyperactivity

## Evidence Base

### Resuscitation Outcomes
| Factor | Better Prognosis | Worse Prognosis |
|--------|------------------|-----------------|
| Arrest type | Respiratory | Cardiac |
| Bystander CPR | Yes | No |
| Duration | Short | Prolonged |
| Age | Young | Elderly |

### Long-term Studies
- 70% have persistent symptoms at 1 year
- Cognitive deficits common
- Depression and PTSD prevalent
- Return to baseline function: ~50%

## Special Considerations

### Multiple Casualties
- Mass casualty event possible
- Side flash and ground current
- Reverse triage essential
- Scene safety challenging

### Pregnancy
- Fetal mortality ~50%
- Maternal survival usually good
- Emergency C-section if viable fetus
- Fetal monitoring if survived

### Prevention
- 30/30 rule: inside if thunder <30 seconds after flash
- Stay inside 30 minutes after last thunder
- Lightning position if caught outside (crouch, feet together)
- No perfect safe position outdoors`,
      keyTerms: [
        { term: 'keraunoparalysis', definition: 'Transient limb paralysis with mottling after lightning strike' },
        { term: '30/30 rule', definition: 'Safety guideline for seeking shelter during thunderstorms' },
      ],
      clinicalNotes: 'Fetal mortality is high even when mother survives. Lightning victims often have persistent neuropsychological effects requiring long-term follow-up. Prevention education is critical as no position outdoors is truly safe.',
    },
  },

  media: [],
  citations: [
    {
      id: 'lightning-injury-review',
      type: 'article',
      title: 'Lightning Injuries',
      source: 'Emergency Medicine Clinics of North America',
    },
  ],
  crossReferences: [],
  tags: {
    systems: ['cardiovascular', 'neurological', 'integumentary'],
    topics: ['wilderness-medicine', 'emergency-medicine', 'environmental-medicine'],
    keywords: ['lightning', 'electrical injury', 'cardiac arrest', 'Lichtenberg'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lightningInjury;
