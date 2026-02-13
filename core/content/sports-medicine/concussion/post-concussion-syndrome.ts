/**
 * Post-Concussion Syndrome - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const postconcussionSyndrome: EducationalContent = {
  id: 'sports-med-post-concussion-syndrome',
  type: 'condition',
  name: 'Post-Concussion Syndrome',
  alternateNames: ['Persistent Post-Concussion Symptoms', 'PPCS', 'Prolonged Concussion Recovery'],

  levels: {
    1: {
      level: 1,
      summary: 'Post-concussion syndrome is when symptoms from a concussion last longer than expected, usually more than a few weeks.',
      explanation: `## What is Post-Concussion Syndrome?

Most people recover from a concussion in 2-4 weeks, but some people have symptoms that last much longer.

**Symptoms That May Continue**
- Headaches
- Dizziness
- Trouble concentrating
- Memory problems
- Feeling tired
- Mood changes

**Why It Happens**
- Every brain heals differently
- Some people are more likely to have longer recovery
- Stress and worry can make symptoms worse

**Getting Help**
- See a doctor who specializes in concussion
- Physical therapy for dizziness
- Counseling for mood changes
- Gradual return to activities

**What Helps**
- Good sleep
- Light exercise when safe
- Reducing stress
- Following your doctor's advice`,
      keyTerms: [
        { term: 'post-concussion syndrome', definition: 'When concussion symptoms last longer than expected, usually more than 2-4 weeks' },
        { term: 'persistent symptoms', definition: 'Symptoms that continue for a long time without going away' },
      ],
      analogies: [
        'It is like a sprained ankle that takes longer to heal than normal and needs extra care.',
      ],
    },
    2: {
      level: 2,
      summary: 'Post-concussion syndrome refers to persistent symptoms beyond typical recovery time, involving physical, cognitive, emotional, and sleep domains, managed with multimodal treatment approaches.',
      explanation: `## Understanding Post-Concussion Syndrome

### Definition
Symptoms persisting beyond expected recovery timeframe:
- Adults: >10-14 days
- Children: >4 weeks
- Term increasingly replaced by "persistent post-concussion symptoms"

### Symptom Domains
**Physical:**
- Headache
- Dizziness
- Fatigue
- Light/noise sensitivity
- Sleep disturbance

**Cognitive:**
- Difficulty concentrating
- Memory problems
- Mental fogginess
- Slowed processing

**Emotional:**
- Irritability
- Anxiety
- Depression
- Mood changes

### Risk Factors
- Previous concussions
- History of migraine
- Mental health history
- Female sex
- High acute symptom burden
- Delayed treatment initiation

### Diagnosis
- Clinical diagnosis
- Symptom inventories
- Neuropsychological testing
- Rule out other conditions

### Management
**Physical Symptoms:**
- Targeted rehabilitation (vestibular, cervical)
- Headache management
- Sleep optimization

**Cognitive Symptoms:**
- Cognitive rehabilitation
- Compensatory strategies
- Gradual return to mental activities

**Emotional Symptoms:**
- Counseling/therapy
- Education and reassurance
- Medication if indicated

### Prognosis
- Most improve with appropriate treatment
- 10-15% may have prolonged symptoms
- Multidisciplinary approach beneficial`,
      keyTerms: [
        { term: 'persistent post-concussion symptoms', definition: 'Current preferred term for symptoms lasting beyond expected recovery' },
        { term: 'multimodal treatment', definition: 'Treatment approach using multiple strategies to address different symptoms' },
      ],
    },
    3: {
      level: 3,
      summary: 'Persistent post-concussion symptoms represent a heterogeneous condition requiring comprehensive evaluation to identify treatable components including vestibular, cervical, psychological, and migraine contributors.',
      explanation: `## Clinical Management of Persistent Symptoms

### Diagnostic Framework
**Differential Considerations:**
- Vestibular dysfunction
- Cervical injury
- Sleep disorder
- Migraine/headache disorder
- Mood disorder
- Post-traumatic stress

**Evaluation:**
- Detailed history
- Physical examination
- Vestibular testing
- Neuropsychological assessment
- Imaging if indicated (usually normal)

### Subtype Assessment
**Vestibular:**
- VOMS testing
- BPPV evaluation
- Balance assessment
- VOR testing

**Cervical:**
- Range of motion
- Palpation
- Cervical flexion rotation test
- Joint position error

**Migraine:**
- Headache characteristics
- Associated symptoms
- Triggers
- Previous history

**Psychological:**
- Screening tools (PHQ-9, GAD-7)
- PTSD screening
- Sleep assessment
- Coping patterns

### Treatment Approaches
**Vestibular Rehabilitation:**
- Gaze stabilization
- Balance training
- Habituation exercises
- Canalith repositioning if BPPV

**Cervical Treatment:**
- Manual therapy
- Therapeutic exercise
- Postural training
- Motor control exercises

**Headache Management:**
- Acute treatment
- Prophylaxis if chronic
- Trigger management
- Lifestyle modification

**Psychological Treatment:**
- CBT approaches
- Gradual exposure
- Education
- Medication when indicated

### Exercise Therapy
**Sub-symptom Threshold Exercise:**
- Aerobic conditioning
- Controlled intensity
- May improve symptoms
- Evidence base growing`,
      keyTerms: [
        { term: 'BPPV', definition: 'Benign paroxysmal positional vertigo, can occur with or be exacerbated by concussion' },
        { term: 'VOR', definition: 'Vestibulo-ocular reflex, often affected in concussion-related vestibular dysfunction' },
        { term: 'cervical flexion rotation test', definition: 'Physical examination test for upper cervical dysfunction' },
      ],
      clinicalNotes: 'Most persistent symptoms have identifiable, treatable causes. Comprehensive evaluation essential. Vestibular rehabilitation effective for vestibular symptoms. Cervical component often underrecognized. Aerobic exercise may help when appropriately prescribed.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of persistent symptoms integrates understanding of overlapping pathophysiologies, targeted interventions, and multidisciplinary care addressing the complex biopsychosocial factors affecting recovery.',
      explanation: `## Advanced Concepts

### Pathophysiology
**Ongoing Neurophysiology:**
- Autonomic dysregulation
- Cerebrovascular dysfunction
- Neuroinflammation (research phase)
- Altered neural connectivity

**Contributing Conditions:**
- Cervicogenic contributions
- Vestibular dysfunction
- Visual processing issues
- Sleep disruption effects

**Psychological Factors:**
- Fear-avoidance behavior
- Catastrophizing
- Illness beliefs
- Secondary gain considerations

### Specialized Assessment
**Autonomic Testing:**
- Heart rate variability
- Orthostatic intolerance
- Exercise tolerance testing

**Advanced Vestibular:**
- Rotary chair
- Posturography
- VNG/ENG

**Neuroimaging Research:**
- fMRI studies
- DTI findings
- Not routine clinical use

### Complex Treatment
**Pharmacotherapy:**
- Headache prophylaxis (amitriptyline, topiramate)
- Sleep medications
- Antidepressants/anxiolytics
- Caution with polypharmacy

**Injection Therapy:**
- Nerve blocks for headache
- Trigger point injections
- Occipital nerve blocks

**Rehabilitation Intensity:**
- Daily vestibular exercises
- Progressive aerobic training
- Cognitive rehabilitation
- Return to activity programming

### Multidisciplinary Team
- Sports medicine physician
- Physical therapist
- Neuropsychologist
- Mental health provider
- Vestibular specialist
- Headache specialist`,
      keyTerms: [
        { term: 'autonomic dysregulation', definition: 'Impaired control of heart rate, blood pressure, and other automatic functions' },
        { term: 'fear-avoidance', definition: 'Behavior pattern where fear of symptoms leads to activity avoidance, potentially prolonging recovery' },
        { term: 'neurovascular coupling', definition: 'Relationship between neural activity and blood flow, may be impaired post-concussion' },
      ],
      clinicalNotes: 'Multidisciplinary approach yields best outcomes. Identify modifiable contributing factors. Address psychological factors without dismissing symptoms. Exercise therapy when appropriate. Consider specialty referrals for refractory cases.',
    },
    5: {
      level: 5,
      summary: 'Research in persistent post-concussion symptoms explores biomarkers of delayed recovery, mechanisms of chronification, and novel therapeutic approaches including neuromodulation.',
      explanation: `## Research Directions

### Biomarkers of Prolonged Recovery
**Blood-Based:**
- Inflammatory markers
- Neuronal injury markers
- Genetic predictors
- Proteomic profiles

**Physiologic:**
- Autonomic metrics
- Cerebrovascular reactivity
- Heart rate variability
- Exercise response

### Neuroimaging Research
**Advanced Techniques:**
- Functional connectivity MRI
- Diffusion tensor imaging
- Magnetic resonance spectroscopy
- PET imaging

**Findings:**
- Altered default mode network
- White matter changes
- Metabolic abnormalities
- Clinical significance debated

### Novel Treatments
**Neuromodulation:**
- Transcranial magnetic stimulation
- Transcranial direct current stimulation
- Research stage
- Promising early results

**Pharmacologic Research:**
- Anti-inflammatory approaches
- Neuroprotective agents
- Symptom-targeted medications

**Technology:**
- Virtual reality rehabilitation
- Biofeedback
- Mobile health monitoring
- Telehealth delivery

### Long-term Outcomes
**Research Questions:**
- Natural history of symptoms
- Cumulative injury effects
- Risk factors for chronification
- Intervention timing effects

### Prevention of Persistence
**Early Intervention:**
- Optimal acute management
- Early rehabilitation referral
- Psychological support
- Activity guidance

**Modifiable Factors:**
- Sleep optimization
- Stress reduction
- Exercise prescription
- Education and expectations`,
      keyTerms: [
        { term: 'chronification', definition: 'Process by which acute symptoms become chronic, involving neural and psychological factors' },
        { term: 'default mode network', definition: 'Brain network active during rest and self-reflection, may be altered after concussion' },
        { term: 'neuromodulation', definition: 'Techniques using electrical or magnetic stimulation to alter brain activity' },
      ],
      clinicalNotes: 'Early active rehabilitation may prevent symptom persistence. Multiple factors contribute to chronification. Biomarkers may help predict and monitor recovery. Novel treatments showing promise but need validation.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-concussion-management', targetType: 'concept', relationship: 'related', label: 'Concussion Management' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['concussion', 'brain-injury', 'sports-medicine', 'chronic-symptoms'],
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

export default postconcussionSyndrome;
