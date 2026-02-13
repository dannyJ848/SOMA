/**
 * Muscle Strength Testing - Physical Examination
 */

import { EducationalContent } from '../../types';

export const muscleStrengthTesting: EducationalContent = {
  id: 'musculoskeletal-muscle-strength-testing',
  type: 'process',
  name: 'Muscle Strength Testing',
  alternateNames: ['Manual Muscle Testing', 'MMT', 'Strength Assessment'],

  levels: {
    1: {
      level: 1,
      summary: 'Muscle strength testing checks how strong your muscles are by having you push or pull against resistance.',
      explanation: `## Testing Your Muscle Strength

Muscle strength testing helps doctors understand if your muscles are working properly. The test is simple - you use your muscles while the doctor applies gentle resistance.

### How the Test Works

**What you do:**
- Push or pull in a specific direction
- Use your full strength
- Hold the position
- Try not to let the doctor move your arm or leg

**What the doctor does:**
- Holds your arm or leg
- Asks you to push or pull
- Applies gentle resistance
- Compares both sides

### The Strength Scale

Doctors use a 0-5 scale:

**5 - Normal:** Strong as expected
**4 - Weak:** Can move against some resistance but not full strength
**3 - Fair:** Can move against gravity but not against resistance
**2 - Poor:** Can move if gravity is removed
**1 - Trace:** Only a flicker of movement
**0 - No movement:** Cannot contract muscle at all

### Why Test Muscle Strength?

**To find problems like:**
- Nerve injuries
- Stroke effects
- Muscle diseases
- Spinal cord problems
- Recovery from injury

**Common reasons for weakness:**
- Not using muscles (deconditioning)
- Nerve damage
- Stroke
- Muscle diseases
- Injury to muscles or tendons

### Different Muscles Tested

**Arms:**
- Shoulder muscles
- Elbow bending and straightening
- Wrist and hand grip

**Legs:**
- Hip muscles
- Knee bending and straightening
- Ankle and foot muscles

**Core:**
- Neck muscles
- Back muscles
- Stomach muscles

The test is painless and helps doctors plan your treatment.`,

      keyTerms: [
        { term: 'manual muscle testing', definition: 'Using hands to test how strong a muscle is' },
        { term: 'resistance', definition: 'Force that opposes movement' },
        { term: 'gravity', definition: 'The force pulling things toward the ground' },
        { term: 'deconditioning', definition: 'Getting weaker from not using muscles' },
        { term: 'muscle atrophy', definition: 'Muscle wasting or shrinking' },
      ],

      analogies: [
        'Muscle strength testing is like arm wrestling - you push while someone pushes back.',
        'A muscle with nerve damage is like a phone with a bad connection - the signal does not get through properly.',
        'Testing each muscle is like testing each bulb on a string of lights - find which one is not working.',
      ],

      examples: [
        'A stroke patient might have weakness on one side of the body.',
        'A pinched nerve can cause weakness in specific muscles.',
        'After being in a cast, muscles may be weak from not being used.',
      ],

      patientCounselingPoints: [
        'Give your best effort during the test.',
        'Tell the doctor if you have any pain.',
        'Weakness often improves with physical therapy.',
        'Do not worry if one side is stronger - this is normal to some degree.',
      ],
    },

    2: {
      level: 2,
      summary: 'Manual muscle testing uses standardized techniques and grading scales to objectively assess muscle strength and identify neurological or musculoskeletal pathology.',
      explanation: `## MMT Grading Scale (Medical Research Council)

| Grade | Description | Criteria |
|-------|-------------|----------|
| 5 | Normal | Complete ROM against gravity, full resistance |
| 4+ | Good+ | Complete ROM against gravity, moderate resistance |
| 4 | Good | Complete ROM against gravity, some resistance |
| 4- | Good- | Complete ROM against gravity, minimal resistance |
| 3+ | Fair+ | Complete ROM against gravity, holds against minimal resistance |
| 3 | Fair | Complete ROM against gravity |
| 3- | Fair- | Partial ROM against gravity |
| 2+ | Poor+ | Complete ROM with gravity eliminated, minimal resistance |
| 2 | Poor | Complete ROM with gravity eliminated |
| 2- | Poor- | Initiates movement with gravity eliminated |
| 1 | Trace | Muscle contraction visible/palpable, no movement |
| 0 | Zero | No contraction |

### Testing Technique Principles

**Patient Position:**
- Comfortable and stable
- Appropriate for muscle being tested
- Gravity considered

**Examiner Position:**
- Good mechanical advantage
- Support proximal joint
- Apply resistance distally

**Testing Procedure:**
1. Demonstrate movement
2. Patient performs actively
3. Apply resistance at end range
4. Hold for 3-5 seconds
5. Compare bilaterally

### Common Muscle Groups Tested

**Upper Extremity:**
- Shoulder abductors (deltoid - C5)
- Elbow flexors (biceps - C5-6)
- Elbow extensors (triceps - C7)
- Wrist extensors (C6)
- Finger flexors (C8)
- Intrinsic hand muscles (T1)

**Lower Extremity:**
- Hip flexors (L2-3)
- Hip extensors (gluteus maximus - S1)
- Hip abductors (gluteus medius - L5)
- Knee extensors (quadriceps - L3-4)
- Knee flexors (hamstrings - L5-S1)
- Ankle dorsiflexors (tibialis anterior - L4-5)
- Ankle plantarflexors (gastrocnemius - S1-2)

**Trunk:**
- Neck flexors/extensors
- Abdominal muscles
- Back extensors
- Pelvic floor

### Documentation
- Muscle/functional movement
- Grade (0-5)
- Side tested
- Pain with testing
- Fatigability`,

      keyTerms: [
        { term: 'MMT', definition: 'Manual muscle testing' },
        { term: 'MRC scale', definition: 'Medical Research Council strength scale' },
        { term: 'ROM', definition: 'Range of motion' },
        { term: 'myotome', definition: 'Muscles innervated by a single spinal nerve root' },
      ],

      analogies: [
        'The MRC scale is like a ladder - each rung represents a level of strength.',
        'Testing myotomes is like checking which circuit breaker controls which lights.',
      ],

      examples: [
        'C5 myotome weakness suggests C5 radiculopathy or nerve root compression.',
        'Grade 3/5 quadriceps means patient can straighten knee but not against resistance.',
        'Bilateral proximal muscle weakness suggests myopathy rather than neuropathy.',
      ],

      clinicalNotes: 'Always compare sides. A difference of one grade is significant.',
    },

    3: {
      level: 3,
      summary: 'Comprehensive strength testing correlates with neurological examination to localize lesions and differentiate upper from lower motor neuron pathology.',
      explanation: `## Pattern Recognition

**Myotomal Weakness (Radiculopathy):**
- Follows nerve root distribution
- Often painful
- May have sensory changes
- DTR may be diminished

**Peripheral Nerve Pattern:**
- Specific muscles supplied by one nerve
- Example: Wrist drop (radial nerve)
- Example: Foot drop (common peroneal)

**Polyneuropathy Pattern:**
- Distal > proximal
- Symmetric
- Stocking-glove distribution
- Lower > upper extremities

**Myopathy Pattern:**
- Proximal > distal
- Symmetric
- Pelvic girdle > shoulder girdle
- No sensory changes

**Upper Motor Neuron:**
- Pattern: Hemiparesis, paraparesis
- Increased tone (spasticity)
- Hyperreflexia
- No fasciculations

**Lower Motor Neuron:**
- Pattern: Variable, root/nerve distribution
- Decreased tone (flaccidity)
- Hyporeflexia/areflexia
- Fasciculations may be present

### Detailed Testing by Myotome

**C5:** Shoulder abduction, elbow flexion
**C6:** Wrist extension, elbow flexion
**C7:** Elbow extension, wrist flexion
**C8:** Finger flexion, wrist flexion
**T1:** Finger abduction/adduction

**L2:** Hip flexion
**L3:** Knee extension
**L4:** Ankle dorsiflexion
**L5:** Great toe extension, hip abduction
**S1:** Ankle plantarflexion, knee flexion

### Functional Testing

**Grip Strength:**
- Dynamometer measurement
- Compare bilaterally
- Three trials each hand

**Pinch Strength:**
- Key pinch, tip pinch
- Assesses intrinsic hand function

**Functional Movements:**
- Sit-to-stand
- Heel and toe walking
- Single leg stance
- Pushing up from chair
- Lifting arms overhead

### Grading Challenges

**Pain-limited Testing:**
- Document pain
- May underestimate strength
- Test position without pain if possible

**Poor Effort:**
- Give-and-way pattern
- Inconsistent
- Distract patient
- Test repeatedly

**Substitutions:**
- Patient uses other muscles
- Proper positioning prevents
- Stabilize proximal joints`,

      keyTerms: [
        { term: 'radiculopathy', definition: 'Nerve root compression or irritation' },
        { term: 'myopathy', definition: 'Disease of muscle tissue' },
        { term: 'fasciculation', definition: 'Visible muscle twitch from nerve irritation' },
        { term: 'hemiparesis', definition: 'Weakness on one side of body' },
        { term: 'paraparesis', definition: 'Weakness of both legs' },
      ],

      analogies: [
        'Upper motor neuron lesions are like a broken brake - spasticity and increased reflexes.',
        'Lower motor neuron lesions are like a broken wire - flaccidity and decreased reflexes.',
      ],

      examples: [
        'L5 radiculopathy causes weak ankle dorsiflexion and great toe extension.',
        'Myasthenia gravis causes fatigable weakness, worse with repeated testing.',
        'Stroke causes upper motor neuron pattern with spastic hemiparesis.',
      ],

      clinicalNotes: 'Fatigable weakness suggests neuromuscular junction disorder like myasthenia gravis.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of strength testing with electrodiagnostic studies and management of neuromuscular disorders.',
      explanation: `## Electrodiagnostic Correlation

**Nerve Conduction Studies (NCS):**
- Measures nerve function
- Amplitude correlates with axon number
- Conduction velocity assesses demyelination
- F-waves assess proximal nerve

**Electromyography (EMG):**
- Needle examination of muscle
- Detects denervation
- Differentiates myopathic vs neurogenic
- Active vs chronic changes

**Patterns:**

| Condition | NCS | EMG |
|-----------|-----|-----|
| Radiculopathy | Normal | Denervation in myotome |
| Plexopathy | Abnormal in distribution | Denervation |
| Neuropathy | Slowed/absent conduction | Denervation distally |
| Myopathy | Normal | Small, short-duration units |
| Myasthenia | Decrement on repetitive stimulation | Normal |

### Specific Conditions

**Radiculopathy:**
- EMG most sensitive 3-4 weeks after onset
- Paraspinal muscles involved
- Distinguishes from entrapment neuropathy

**ALS:**
- Widespread denervation
- Active and chronic changes
- Multiple myotomes/levels
- Both upper and lower motor neuron signs

**Myopathy:**
- Low-amplitude, short-duration units
- Early recruitment
- No denervation (except inflammatory)
- Normal NCS

**Myasthenia Gravis:**
- Repetitive nerve stimulation: decrement
- Single fiber EMG: jitter
- Normal strength at rest, fatigable

### Functional Assessment Scales

**ALS Functional Rating Scale (ALSFRS-R):**
- 12 items
- Tracks disease progression
- Clinical trials endpoint

**Myasthenia Gravis Composite (MGC):**
- Quantifies weakness
- Assess bulbar, ocular, respiratory, limb
- Treatment response

**Medical Research Council Sum Score:**
- 6 muscle groups each side
- Maximum 60 points
- ICU weakness assessment

### ICU-Acquired Weakness

**Critical Illness Myopathy:**
- Difficult to wean from ventilator
- Flaccid paralysis
- Normal sensation
- EMG: low-amplitude units

**Critical Illness Polyneuropathy:**
- Distal > proximal
- Sensory and motor
- Associated with sepsis
- EMG: axonal loss`,

      keyTerms: [
        { term: 'electromyography', definition: 'Needle recording of muscle electrical activity' },
        { term: 'denervation', definition: 'Loss of nerve supply to muscle' },
        { term: 'myotome', definition: 'Muscles innervated by single spinal root' },
        { term: 'ALS', definition: 'Amyotrophic lateral sclerosis' },
        { term: 'repetitive stimulation', definition: 'Nerve test for neuromuscular junction' },
      ],

      clinicalNotes: 'EMG is most helpful 3-4 weeks after symptom onset - allows time for denervation changes.',
    },

    5: {
      level: 5,
      summary: 'Expert strength assessment in complex neuromuscular disease, rehabilitation, and quantitative muscle testing techniques.',
      explanation: `## Advanced Assessment Techniques

**Quantitative Muscle Testing (QMT):**
- Handheld dynamometry
- Fixed dynamometry (Biodex, KinCom)
- Isometric and isokinetic testing
- Objective, reproducible measures
- Clinical trial endpoints

**Magnetic Stimulation:**
- Transcranial magnetic stimulation (TMS)
- Assesses corticospinal pathways
- Motor evoked potentials
- Central motor conduction time

**Muscle Imaging:**
- MRI: fat infiltration, edema
- CT: muscle atrophy, fat replacement
- Ultrasound: muscle thickness, echogenicity

## Complex Neuromuscular Disease

**Muscular Dystrophies:**
- Genetic testing confirmation
- Pattern of weakness often characteristic
- Cardiac and respiratory monitoring
- Multidisciplinary care

**Channelopathies:**
- Periodic paralysis
- Myotonia
- EMG with cooling/warming
- Genetic diagnosis

**Inflammatory Myopathies:**
- Polymyositis, dermatomyositis
- Elevated CK
- Muscle biopsy
- Autoantibodies

### Rehabilitation Applications

**Outcome Measures:**
- 6-minute walk test
- 10-meter walk test
- Timed up-and-go
- Berg balance scale

**Goal Setting:**
- Functional independence
- Equipment needs
- Home modifications
- Vocational considerations

**Interventions:**
- Strengthening exercises
- Aerobic conditioning
- Adaptive equipment
- Energy conservation

### Research Applications

**Natural History Studies:**
- Track disease progression
- Identify outcome measures
- Plan clinical trials

**Therapeutic Trials:**
- Primary endpoint: strength or function
- Sensitive, reliable measures needed
- Regulatory considerations

**Biomarkers:**
- MRI muscle composition
- Blood-based markers
- Correlate with function`,

      keyTerms: [
        { term: 'dynamometry', definition: 'Measuring force of muscle contraction' },
        { term: 'isokinetic', definition: 'Contraction at constant velocity' },
        { term: 'motor evoked potential', definition: 'Muscle response to brain stimulation' },
        { term: 'channelopathy', definition: 'Disorder of ion channels' },
      ],

      clinicalNotes: 'Handheld dynamometry provides objective, reproducible strength measurements superior to MMT in clinical trials.',
    },
  },

  media: [],

  citations: [
    {
      id: 'kendall-muscles',
      type: 'textbook',
      title: 'Muscles: Testing and Function',
      source: 'Lippincott',
    },
  ],

  crossReferences: [
    { targetId: 'musculoskeletal-joint-examination', targetType: 'process', relationship: 'sibling', label: 'Joint Examination' },
    { targetId: 'neurological-reflex-testing', targetType: 'process', relationship: 'related', label: 'Reflex Testing' },
  ],

  tags: {
    systems: ['musculoskeletal', 'nervous'],
    topics: ['physical-examination', 'neurology'],
    keywords: ['muscle', 'strength', 'MMT', 'weakness'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default muscleStrengthTesting;
