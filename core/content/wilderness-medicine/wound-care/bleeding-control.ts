/**
 * Bleeding Control - Educational Content
 *
 * IMPORTANT: This content is for educational purposes only.
 */

import { EducationalContent } from '../../types';

export const bleedingControl: EducationalContent = {
  id: 'wilderness-bleeding-control',
  type: 'concept',
  name: 'Bleeding Control',
  alternateNames: ['Hemorrhage Control', 'Stop the Bleed'],

  levels: {
    1: {
      level: 1,
      summary: 'Controlling bleeding is one of the most important first aid skills. Apply firm pressure, keep pressing, and call for help with serious bleeding.',
      explanation: `## How to Stop Bleeding

Bleeding can be scary, but you can help control it with simple steps.

## The Basic Steps
1. **Apply pressure**: Press firmly on the wound with a clean cloth
2. **Keep pressing**: Don't lift up to look - keep constant pressure
3. **Don't give up**: It may take 10-15 minutes for bleeding to stop
4. **Call for help**: Get emergency help for serious bleeding

## When Pressure Isn't Enough
- If blood soaks through, add more cloth on top
- Don't remove the first cloth
- For arms or legs, you can also wrap a bandage tightly

## When Is Bleeding Serious?
- Blood spurting or flowing quickly
- Pool of blood forming
- Bleeding won't stop with pressure
- Person feels dizzy or weak`,
      keyTerms: [
        { term: 'hemorrhage', definition: 'Heavy or serious bleeding' },
        { term: 'pressure', definition: 'Pushing firmly on a wound to stop bleeding' },
      ],
    },
    2: {
      level: 2,
      summary: 'Bleeding control follows a stepwise approach: direct pressure, wound packing, and tourniquet for life-threatening extremity bleeding. Recognizing shock signs and acting quickly saves lives.',
      explanation: `## Types of Bleeding

### Arterial (Spurting)
- Bright red blood
- Spurts with heartbeat
- Most dangerous
- Requires immediate action

### Venous (Flowing)
- Dark red blood
- Steady flow
- Serious but slower

### Capillary (Oozing)
- Slow ooze
- Usually stops on its own

## Step-by-Step Control

### 1. Direct Pressure
- Apply firm pressure with gauze/cloth
- Maintain for 10-15 minutes
- Don't peek or release early

### 2. Wound Packing
- For deep wounds
- Pack gauze into wound
- Apply pressure over packing

### 3. Tourniquet (Extremity)
- Life-threatening arm/leg bleeding
- Apply 2-3 inches above wound
- Tighten until bleeding stops
- Note time applied

## Signs of Shock (Blood Loss)
- Pale, cool, clammy skin
- Rapid, weak pulse
- Altered consciousness
- Thirst

## When to Use Tourniquet
- Pressure not controlling bleeding
- Multiple injuries
- Need hands free
- Amputation`,
      keyTerms: [
        { term: 'tourniquet', definition: 'A band tightened around a limb to stop bleeding' },
        { term: 'shock', definition: 'Dangerous condition when body isn\'t getting enough blood' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hemorrhage control utilizes direct pressure, wound packing, and tourniquet application in a stepwise approach. Understanding hemorrhage classification guides resuscitation. Tourniquets are safe and effective for extremity hemorrhage.',
      explanation: `## Hemorrhage Classification

| Class | Blood Loss | Heart Rate | BP | Mental Status |
|-------|-----------|------------|-----|---------------|
| I | <15% | Normal | Normal | Normal |
| II | 15-30% | 100-120 | Normal | Anxious |
| III | 30-40% | 120-140 | Decreased | Confused |
| IV | >40% | >140 | Severely low | Lethargic |

## Control Techniques

### Direct Pressure
- Concentrated focal pressure
- Maintain minimum 10 minutes
- Works for most wounds

### Wound Packing
- Deep, cavity wounds
- Pack tightly to wound base
- Apply pressure over packing
- Hemostatic gauze if available

### Tourniquet Application
- Extremity hemorrhage not controlled by pressure
- 2-3 inches above wound
- Tighten until bleeding stops
- Time and document
- Do not release in field

### Pressure Points
- Adjunct to direct pressure
- Brachial artery (arm)
- Femoral artery (leg)
- Temporal artery (scalp)

## Hemostatic Agents
- QuikClot, Celox, etc.
- Accelerate clotting
- Pack into wound
- Apply pressure after

## Special Situations
- Scalp: pressure dressing, consider closure
- Neck: direct pressure, avoid airway compromise
- Junctional: difficult, specialized devices`,
      keyTerms: [
        { term: 'wound packing', definition: 'Filling a deep wound with gauze to control bleeding' },
        { term: 'hemostatic agent', definition: 'Material that promotes blood clotting' },
      ],
      clinicalNotes: 'Tourniquets are safe for several hours and save lives. The risk of not using a tourniquet far outweighs limb loss risk. Wound packing is underutilized but very effective.',
    },
    4: {
      level: 4,
      summary: 'Hemorrhage control integrates direct pressure, wound packing with hemostatic agents, and tourniquet application. Evidence supports early tourniquet use for extremity hemorrhage. Junctional hemorrhage poses unique challenges. Damage control resuscitation principles guide management.',
      explanation: `## Pathophysiology of Hemorrhage

### Coagulation Response
- Vasoconstriction
- Platelet aggregation
- Coagulation cascade
- Fibrin clot formation

### Hemorrhagic Shock
- Volume depletion
- Inadequate oxygen delivery
- Anaerobic metabolism
- Acidosis, coagulopathy, hypothermia (lethal triad)

## Evidence-Based Interventions

### Tourniquet Evidence
- Military data: dramatic mortality reduction
- Safe application time: 2+ hours
- Complication rate low
- Early use associated with survival

### Hemostatic Agents
| Agent | Mechanism | Notes |
|-------|-----------|-------|
| Kaolin (QuikClot) | Factor XII activation | Current military standard |
| Chitosan (Celox) | Direct hemostasis | Works in hypothermia, anticoag |
| Fibrinogen-based | Clot formation | Most physiologic |

### Wound Packing Technique
1. Control bleeding point identified
2. Pack gauze to wound depth
3. Tight packing to bleeding source
4. Maintain pressure 3 minutes
5. Apply pressure dressing

## Junctional Hemorrhage
- Axilla, groin, neck
- Not amenable to tourniquet
- Options:
  - Wound packing + pressure
  - Junctional devices (JETT, SAM-JT)
  - Foley catheter tamponade

## Damage Control Resuscitation
- Permissive hypotension (SBP 80-90)
- Minimize crystalloid
- Balanced blood product resuscitation
- Warm fluids
- Avoid acidosis worsening`,
      keyTerms: [
        { term: 'lethal triad', definition: 'Hypothermia, acidosis, coagulopathy - each worsens the others' },
        { term: 'permissive hypotension', definition: 'Accepting lower blood pressure to prevent clot disruption' },
      ],
      clinicalNotes: 'Early tourniquet use (within 30 min of injury) has highest survival benefit. Junctional hemorrhage requires creative solutions. The lethal triad must be recognized and addressed simultaneously.',
    },
    5: {
      level: 5,
      summary: 'Hemorrhage control represents the most impactful intervention in trauma. Evidence from military experience has transformed civilian practice. Tourniquet safety is well-established. Damage control resuscitation addresses the physiologic derangements of massive hemorrhage.',
      explanation: `## Coagulation Biology

### Normal Hemostasis
- Vascular phase: vasoconstriction
- Platelet phase: adhesion, activation, aggregation
- Coagulation phase: factor cascade, fibrin
- Fibrinolysis: clot remodeling

### Acute Coagulopathy of Trauma
- Tissue injury releases TF
- Protein C activation
- Hyperfibrinolysis
- Factor consumption
- Acidosis impairs enzyme function
- Hypothermia slows reactions

## Evidence for Interventions

### Tourniquet Meta-Analysis
- Prehospital: OR 1.7 for survival
- Safe duration: >2 hours established
- Conversion timing: when able, not urgent
- Nerve injury rare, usually transient

### Hemostatic Dressings
- RCT data limited
- Military experience extensive
- Kaolin: most evidence
- Chitosan: works in anticoagulated patients

### TXA (Tranexamic Acid)
- CRASH-2: reduced mortality in trauma
- Effective within 3 hours
- 1g IV bolus, 1g infusion
- Consider in wilderness if available

## Special Populations

### Anticoagulated Patients
- Hemorrhage more difficult to control
- May need reversal agents
- Chitosan-based products effective despite anticoag
- Lower threshold for hospital transport

### Pediatric Considerations
- Smaller blood volume
- Earlier shock signs
- Tourniquet width considerations
- Weight-based fluid resuscitation

## Wilderness Context
- Limited resuscitation capability
- Evacuation time critical factor
- Hemorrhage control buys time
- Decision framework for tourniquet use`,
      keyTerms: [
        { term: 'TXA', definition: 'Tranexamic acid - antifibrinolytic that reduces bleeding mortality' },
        { term: 'acute coagulopathy of trauma', definition: 'Impaired clotting from trauma and shock' },
      ],
      clinicalNotes: 'TXA should be considered for significant hemorrhage if available. Tourniquet conversion is not urgent - hours are safe. Chitosan-based hemostatics work in hypothermia and anticoagulated patients, which kaolin does not.',
    },
  },

  media: [],
  citations: [
    {
      id: 'stop-the-bleed',
      type: 'article',
      title: 'Stop the Bleed Guidelines',
      source: 'Journal of Trauma and Acute Care Surgery',
    },
  ],
  crossReferences: [
    { targetId: 'wilderness-wound-care', targetType: 'concept', relationship: 'related', label: 'Wound Care' },
  ],
  tags: {
    systems: ['cardiovascular', 'hematologic'],
    topics: ['wilderness-medicine', 'emergency-medicine', 'trauma'],
    keywords: ['bleeding', 'hemorrhage', 'tourniquet', 'wound packing'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default bleedingControl;
