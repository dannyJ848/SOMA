/**
 * Concussion Management - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const concussionManagement: EducationalContent = {
  id: 'sports-med-concussion-management',
  type: 'concept',
  name: 'Concussion Management',
  alternateNames: ['Concussion Treatment', 'Concussion Care', 'Return to Play after Concussion'],

  levels: {
    1: {
      level: 1,
      summary: 'Managing a concussion means resting, avoiding activities that make symptoms worse, and slowly returning to normal activities when your brain is ready.',
      explanation: `## How to Manage a Concussion

After a concussion, your brain needs time to heal.

**First Steps**
- Stop playing sports immediately
- See a doctor
- Rest your brain and body

**Taking Care of Your Brain**
- Get enough sleep
- Limit screen time (phones, TV, computers)
- Avoid activities that make symptoms worse
- Take breaks from homework

**Gradual Return**
- Slowly add activities back one at a time
- Start with light activities
- If symptoms return, take a step back
- Only return to sports when cleared by a doctor

**Signs You're Getting Better**
- Headaches go away
- Thinking clearly again
- Balance feels normal
- Feeling like yourself

**Important Rules**
- No sports until cleared
- No second concussion before the first heals
- Tell someone if symptoms come back`,
      keyTerms: [
        { term: 'rest', definition: 'Taking a break from activities to let your brain heal' },
        { term: 'gradual return', definition: 'Slowly adding activities back step by step' },
      ],
      analogies: [
        'Healing from a concussion is like letting a sprained ankle heal - you have to take it slow.',
      ],
    },
    2: {
      level: 2,
      summary: 'Concussion management involves initial rest followed by gradual return to activities, with stepwise return-to-learn and return-to-sport protocols guided by symptom resolution.',
      explanation: `## Concussion Management Protocol

### Initial Management
**First 24-48 Hours:**
- Relative rest (not complete isolation)
- Avoid symptom-provoking activities
- Monitor for red flags
- No driving until cleared

**Early Phase:**
- Limit cognitive and physical exertion
- Adequate sleep
- Hydration and nutrition
- Avoid alcohol

### Return-to-Learn Protocol
| Stage | Activity | Duration |
|-------|----------|----------|
| 1 | Daily activities at home | 24-48 hrs minimum |
| 2 | School activities (reduced) | Symptom-dependent |
| 3 | Return to school part-time | Symptom-dependent |
| 4 | Return to school full-time | Before RTS |

**Academic Accommodations:**
- Reduced workload
- Extended time on tests
- Breaks as needed
- Limited screen time

### Return-to-Sport Protocol
| Stage | Exercise | Goal |
|-------|----------|------|
| 1 | Symptom-limited activity | Daily activities |
| 2 | Light aerobic exercise | Increase heart rate |
| 3 | Sport-specific exercise | Add movement |
| 4 | Non-contact training | Coordination, cognition |
| 5 | Full-contact practice | Restore confidence |
| 6 | Return to competition | Normal game play |

**Progression Rules:**
- Minimum 24 hours per stage
- If symptoms recur, drop back one stage
- Medical clearance required before contact

### When to Refer
- Prolonged symptoms (>10-14 days)
- Severe or worsening symptoms
- History of multiple concussions
- Mental health concerns`,
      keyTerms: [
        { term: 'return-to-learn', definition: 'Graduated protocol for resuming academic activities after concussion' },
        { term: 'return-to-sport', definition: 'Stepwise protocol for returning to athletic activity after concussion' },
        { term: 'symptom-limited activity', definition: 'Activities that do not provoke or worsen symptoms' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based concussion management emphasizes early active rehabilitation, targeted treatment of specific symptoms, and stepwise return protocols with appropriate medical oversight.',
      explanation: `## Clinical Concussion Management

### Acute Management
**Initial Period (24-48 hours):**
- Brief rest period (24-48 hours)
- Then gradual return to tolerable activities
- Complete rest NOT recommended long-term

**Current Evidence:**
- Early return to activity improves outcomes
- Prolonged rest may delay recovery
- Sub-symptom threshold exercise beneficial

### Pharmacologic Management
**Headache:**
- Acetaminophen (avoid NSAIDs initially)
- Consider migraine prophylaxis if persistent

**Sleep:**
- Sleep hygiene first
- Melatonin if needed
- Avoid sedating medications

**Vestibular/Ocular:**
- Vestibular rehabilitation
- Vision therapy

**Mood/Anxiety:**
- Counseling
- Medication if indicated

### Rehabilitation
**Vestibular Therapy:**
- Gaze stabilization exercises
- Balance training
- Habituation exercises

**Cervical Rehabilitation:**
- Manual therapy
- Cervical strengthening
- Postural training

**Aerobic Exercise:**
- Sub-threshold aerobic training
- Buffalo Concussion Treadmill Test (BCTT)
- Target intensity below symptom threshold

### Return-to-Sport Decisions
**Medical Clearance Required:**
- Symptom resolution
- Normal examination
- Return-to-learn complete
- Completed graduated protocol

**Risk Factor Considerations:**
- Previous concussion history
- Prolonged recovery
- Type of sport (collision vs. non-contact)
- Age/developmental stage`,
      keyTerms: [
        { term: 'Buffalo Concussion Treadmill Test', definition: 'Standardized exercise test to determine symptom threshold for aerobic exercise prescription' },
        { term: 'vestibular rehabilitation', definition: 'Exercises targeting balance and vestibular dysfunction after concussion' },
        { term: 'sub-symptom threshold exercise', definition: 'Exercise at intensity below level that provokes symptoms' },
      ],
      clinicalNotes: 'Current evidence supports early active recovery over prolonged rest. Sub-symptom threshold aerobic exercise may speed recovery. Vestibular symptoms benefit from targeted rehabilitation. Complete RTP protocol before clearance.',
    },
    4: {
      level: 4,
      summary: 'Advanced concussion management integrates subtype-specific treatment, exercise therapy prescription, and multidisciplinary care addressing the complex interplay of physiological and psychological recovery factors.',
      explanation: `## Advanced Concussion Care

### Subtype-Directed Treatment
**Vestibular Subtype:**
- Vestibular rehabilitation therapy
- Canalith repositioning if BPPV
- Gaze stabilization
- Balance training progression

**Ocular Motor Subtype:**
- Vision therapy
- Prism glasses if indicated
- Convergence exercises
- Smooth pursuit training

**Cervicogenic Subtype:**
- Manual therapy
- Cervical strengthening
- Proprioceptive training
- Postural correction

**Migraine Subtype:**
- Migraine management strategies
- Trigger avoidance
- Prophylaxis if persistent
- Acute treatment protocols

**Anxiety/Mood Subtype:**
- Psychological support
- CBT approaches
- Gradual exposure
- Medication if indicated

### Exercise Prescription
**Buffalo Concussion Treadmill Test:**
- Balke protocol modified
- Stop at symptom exacerbation
- Record heart rate at threshold
- Prescribe 80% of threshold HR

**Aerobic Exercise Program:**
- Daily sub-threshold exercise
- 20-30 minutes
- May speed recovery
- Monitor symptoms

### Persistent Symptoms
**Risk Factors:**
- History of migraine
- Previous concussions
- Mental health history
- Female sex
- High acute symptom burden

**Management Approach:**
- Multidisciplinary team
- Targeted rehabilitation
- Psychological support
- Gradual return to activity
- School/work accommodations

### Return to Sport
**Clearance Considerations:**
- Complete symptom resolution
- Normal neurocognitive testing
- Vestibular-ocular screening normal
- Exercise tolerance established
- Psychological readiness`,
      keyTerms: [
        { term: 'concussion subtype', definition: 'Classification of predominant symptom profile to guide targeted treatment' },
        { term: 'BPPV', definition: 'Benign paroxysmal positional vertigo, inner ear condition that can occur with concussion' },
        { term: 'post-concussion syndrome', definition: 'Persistent symptoms beyond expected recovery timeframe' },
      ],
      clinicalNotes: 'Subtype identification guides treatment approach. Early active rehabilitation preferred over prolonged rest. Multidisciplinary care for persistent symptoms. Exercise threshold testing helps prescribe safe aerobic activity.',
    },
    5: {
      level: 5,
      summary: 'Contemporary concussion management research explores physiologic recovery markers, personalized rehabilitation protocols, and long-term outcome optimization strategies.',
      explanation: `## Research Frontiers

### Physiologic Recovery Markers
**Autonomic Dysfunction:**
- Heart rate variability
- Blood pressure response
- Exercise tolerance testing
- Potential return to baseline marker

**Cerebrovascular Function:**
- Neurovascular coupling
- Cerebral blood flow regulation
- CO2 reactivity
- Recovery timeframe research

### Advanced Exercise Prescription
**Mechanisms:**
- BDNF upregulation
- Improved cerebral blood flow
- Autonomic regulation
- Neuroplasticity promotion

**Research Questions:**
- Optimal timing of initiation
- Intensity prescription
- Duration requirements
- Mode selection

### Biomarker-Guided Return
**Emerging Approaches:**
- Blood biomarker trajectory
- Imaging correlates
- Physiologic testing
- Integrated decision-making

### Long-Term Outcomes
**Factors Influencing Recovery:**
- Acute symptom burden
- Previous injury history
- Pre-existing conditions
- Management approach

**Outcome Measures:**
- Symptom resolution
- Quality of life
- Cognitive function
- Return to activity

### Prevention
**Secondary Prevention:**
- Recovery optimization
- Return-to-play timing
- Education
- Risk modification

**Long-term Brain Health:**
- Cumulative exposure research
- Retirement decisions
- Ongoing monitoring
- Lifestyle factors`,
      keyTerms: [
        { term: 'neurovascular coupling', definition: 'Relationship between neural activity and cerebral blood flow, may be disrupted after concussion' },
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor, protein involved in brain plasticity and recovery' },
        { term: 'autonomic dysfunction', definition: 'Impaired regulation of heart rate and blood pressure, can occur post-concussion' },
      ],
      clinicalNotes: 'Physiologic markers of recovery under investigation. Exercise may promote recovery through multiple mechanisms. Long-term outcome optimization requires individualized approach. Cumulative exposure effects remain area of active research.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-concussion-recognition', targetType: 'concept', relationship: 'parent', label: 'Concussion Recognition' },
    { targetId: 'sports-med-post-concussion-syndrome', targetType: 'concept', relationship: 'related', label: 'Post-Concussion Syndrome' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['concussion', 'brain-injury', 'sports-medicine', 'rehabilitation'],
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

export default concussionManagement;
