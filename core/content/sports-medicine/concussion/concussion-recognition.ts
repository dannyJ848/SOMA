/**
 * Concussion Recognition - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const concussionRecognition: EducationalContent = {
  id: 'sports-med-concussion-recognition',
  type: 'concept',
  name: 'Concussion Recognition',
  alternateNames: ['Identifying Concussion', 'Concussion Signs and Symptoms'],

  levels: {
    1: {
      level: 1,
      summary: 'A concussion is a brain injury that happens when your head gets hit or shaken, and it is important to recognize the signs so you can get proper care.',
      explanation: `## What is a Concussion?

A concussion is when your brain gets shaken inside your skull, usually from a hit to the head or body.

**How It Happens**
- A blow to the head
- A fall
- A hit to the body that shakes the head
- Whiplash motion

**Warning Signs to Watch For**
- Headache
- Feeling dizzy or off-balance
- Confusion or memory problems
- Feeling foggy or groggy
- Nausea or vomiting

**Red Flags - Get Help Right Away**
- Loss of consciousness
- Repeated vomiting
- Seizures
- One pupil larger than the other
- Severe headache that gets worse
- Slurred speech

**What To Do**
- Stop playing or activity immediately
- Tell a parent, coach, or adult
- See a doctor
- Rest your brain and body`,
      keyTerms: [
        { term: 'concussion', definition: 'A brain injury caused by a bump, blow, or jolt to the head' },
        { term: 'symptoms', definition: 'Signs that something is wrong, like headache or dizziness' },
      ],
      analogies: [
        'Your brain is like jello in a bowl - if the bowl gets shaken hard, the jello bounces around inside.',
      ],
    },
    2: {
      level: 2,
      summary: 'Concussion is a functional brain injury presenting with a constellation of physical, cognitive, emotional, and sleep symptoms, recognized through sideline assessment and requiring removal from play.',
      explanation: `## Recognizing Concussion

### Definition
A concussion is a brain injury induced by biomechanical forces resulting in functional disturbance rather than structural injury.

### Mechanism
- Direct blow to head, face, neck
- Impulsive force transmitted to head
- Rotational acceleration most damaging

### Signs vs. Symptoms
**Observable Signs:**
- Loss of consciousness (10%)
- Amnesia
- Balance problems
- Disorientation
- Slow responses
- Behavior changes

**Reported Symptoms:**
- Headache (most common)
- Dizziness
- Nausea
- Visual problems
- Feeling "foggy"
- Memory problems
- Sensitivity to light/noise

### Symptom Categories
| Category | Examples |
|----------|----------|
| Physical | Headache, nausea, balance, fatigue |
| Cognitive | Confusion, memory, concentration |
| Emotional | Irritability, sadness, anxiety |
| Sleep | Drowsiness, sleeping more/less |

### Sideline Assessment
**Maddocks Questions:**
- What venue are we at?
- Which half is it?
- Who scored last?
- What team did we play last?

**Recognition Tools:**
- SCAT5 (Sport Concussion Assessment Tool)
- Balance assessment
- Symptom checklist

### Red Flags Requiring Emergency Care
- Deteriorating consciousness
- Neck pain or tenderness
- Seizures
- Repeated vomiting
- Increasing confusion
- Weakness or sensory changes
- Unusual behavior`,
      keyTerms: [
        { term: 'SCAT5', definition: 'Standardized tool for evaluating athletes with suspected concussion' },
        { term: 'post-traumatic amnesia', definition: 'Memory loss for events after the injury' },
        { term: 'retrograde amnesia', definition: 'Memory loss for events before the injury' },
      ],
    },
    3: {
      level: 3,
      summary: 'Concussion diagnosis relies on clinical recognition of characteristic symptom patterns and neurocognitive changes, with standardized assessment tools guiding sideline and clinical evaluation.',
      explanation: `## Clinical Concussion Recognition

### Pathophysiology Overview
- Neurometabolic cascade following injury
- Ionic flux, energy crisis
- Inflammatory response
- Functional, not structural injury (standard imaging negative)

### Assessment Framework
**Immediate Assessment:**
- Rule out cervical spine injury
- Evaluate for more serious brain injury
- Assess orientation and memory
- Check for red flags

**SCAT5 Components:**
1. Red flags screening
2. Observable signs
3. Memory assessment (Maddocks)
4. Symptom checklist (22 items)
5. Cognitive screening (SAC)
6. Neurological screen
7. Balance examination (BESS)

### Cognitive Assessment
**Standardized Assessment of Concussion (SAC):**
- Orientation (5 points)
- Immediate memory (15 points)
- Concentration (5 points)
- Delayed recall (5 points)

### Balance Assessment
**Balance Error Scoring System (BESS):**
- Three stances: double, single, tandem
- Two surfaces: firm, foam
- 20 seconds each, count errors

### Sideline Decision Making
**Remove from Play if:**
- Any observed signs of concussion
- Any reported symptoms
- Mechanism concerning for concussion
- When in doubt, sit them out

**Do NOT Return Same Day:**
- Current consensus: no same-day return
- Even if symptoms resolve quickly

### Differential Diagnosis
- Cervical spine injury
- Intracranial hemorrhage
- Vestibular injury
- Migraine
- Heat illness
- Dehydration`,
      keyTerms: [
        { term: 'SAC', definition: 'Standardized Assessment of Concussion, cognitive component of SCAT' },
        { term: 'BESS', definition: 'Balance Error Scoring System for postural stability assessment' },
        { term: 'neurometabolic cascade', definition: 'Sequence of cellular and metabolic dysfunction following concussion' },
      ],
      clinicalNotes: 'No single test diagnoses concussion. Use combination of symptom report, cognitive testing, and balance assessment. Baseline testing improves comparison but not required. When in doubt, sit them out.',
    },
    4: {
      level: 4,
      summary: 'Advanced concussion recognition integrates understanding of injury biomechanics, neurometabolic dysfunction, and multi-domain assessment including emerging objective measures.',
      explanation: `## Advanced Concussion Assessment

### Injury Biomechanics
**Head Impact Dynamics:**
- Linear acceleration: Translational injury
- Angular acceleration: Rotational injury
- Angular velocity correlates with concussion risk
- Impact location variability

**Threshold Concept:**
- No absolute threshold for injury
- Individual susceptibility varies
- Cumulative exposure considerations

### Neurometabolic Cascade
**Acute Phase:**
1. Mechanical membrane disruption
2. Ionic flux (K+ out, Ca2+ in)
3. Glutamate release
4. Energy crisis (increased glucose demand, decreased supply)
5. Mitochondrial dysfunction
6. Inflammation initiation

### Advanced Assessment Tools
**Vestibular-Ocular:**
- Vestibular ocular motor screening (VOMS)
- King-Devick test
- Smooth pursuits, saccades

**Neurocognitive:**
- ImPACT
- Immediate Post-Concussion Assessment (ImPACT)
- Computerized testing batteries

**Blood Biomarkers (Emerging):**
- GFAP, UCH-L1
- FDA-cleared for ruling out CT need
- Not for diagnosis of concussion per se

### Objective Measures Research
**Emerging Technologies:**
- Eye tracking
- Balance quantification
- EEG analysis
- Neuroimaging research (DTI, fMRI)

### Special Populations
**Youth Athletes:**
- Longer recovery typical
- More conservative management
- School accommodations important

**Females:**
- Higher incidence in comparable sports
- More symptoms reported
- Possible hormonal factors`,
      keyTerms: [
        { term: 'VOMS', definition: 'Vestibular/Ocular Motor Screening for concussion-related vestibular dysfunction' },
        { term: 'King-Devick test', definition: 'Rapid number naming test assessing saccadic eye movements' },
        { term: 'GFAP', definition: 'Glial fibrillary acidic protein, blood biomarker for brain injury' },
      ],
      clinicalNotes: 'Vestibular and ocular motor symptoms common. Blood biomarkers useful for ruling out structural injury, not diagnosing concussion. Youth require longer recovery and return-to-learn protocols.',
    },
    5: {
      level: 5,
      summary: 'Contemporary concussion recognition research explores objective biomarkers, advanced imaging, machine learning algorithms, and physiological profiling to improve diagnostic accuracy.',
      explanation: `## Research Frontiers

### Blood Biomarkers
**Currently Available:**
- GFAP + UCH-L1 (Banyan BTI)
- Indicates need for CT imaging
- Research expanding panel

**Research Targets:**
- Tau
- NFL (neurofilament light)
- S100B
- microRNAs

### Advanced Neuroimaging
**Research Applications:**
- Diffusion tensor imaging (DTI)
- Functional MRI
- Magnetic resonance spectroscopy
- Not yet clinical standard

### Wearable Technology
**Head Impact Sensors:**
- Accelerometers in helmets
- Mouthguard sensors
- Challenges: Accuracy, false positives

**Real-Time Monitoring:**
- Alert systems
- Impact exposure tracking
- Research vs. clinical utility

### Machine Learning
**Predictive Models:**
- Symptom pattern recognition
- Multimodal data integration
- Outcome prediction

### Physiological Profiling
**Concussion Subtype Classification:**
- Vestibular
- Ocular motor
- Cognitive-fatigue
- Anxiety/mood
- Migraine
- Cervical

**Targeted Treatment:**
- Subtype guides intervention
- Personalized rehabilitation

### Prevention Research
**Modifiable Risk Factors:**
- Neck strength
- Anticipation
- Rule enforcement
- Equipment design`,
      keyTerms: [
        { term: 'neurofilament light', definition: 'Axonal protein released after injury, potential blood biomarker' },
        { term: 'diffusion tensor imaging', definition: 'MRI technique visualizing white matter tracts, research tool in concussion' },
        { term: 'concussion subtype', definition: 'Classification of predominant clinical profile to guide treatment' },
      ],
      clinicalNotes: 'Blood biomarkers showing promise but not yet standard for diagnosis. Subtype classification emerging as treatment framework. Prevention strategies focusing on multiple levels.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-concussion-management', targetType: 'concept', relationship: 'child', label: 'Concussion Management' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['concussion', 'brain-injury', 'sports-medicine'],
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

export default concussionRecognition;
