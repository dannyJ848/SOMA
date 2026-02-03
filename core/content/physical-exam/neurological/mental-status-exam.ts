/**
 * Mental Status Examination - Physical Examination
 */

import { EducationalContent } from '../../types';

export const mentalStatusExam: EducationalContent = {
  id: 'neurological-mental-status-exam',
  type: 'process',
  name: 'Mental Status Examination',
  alternateNames: ['MSE', 'Mental Status Assessment', 'Cognitive Examination'],

  levels: {
    1: {
      level: 1,
      summary: 'A mental status exam checks how your brain is working, including your thinking, memory, attention, and mood.',
      explanation: `## Checking Your Mental Function

A mental status exam is when a doctor checks how well your brain is working. It looks at your thinking, memory, feelings, and behavior.

### What Is Checked

**Appearance and Behavior:**
- How do you look and dress?
- Are you calm or agitated?
- Do you make eye contact?
- How do you move and act?

**Mood and Feelings:**
- How do you feel emotionally?
- Are you sad, anxious, or happy?
- Does this match how you look?

**Speech:**
- Is your speech clear?
- Do you speak at a normal speed?
- Can you find the right words?

**Thinking:**
- Are your thoughts organized?
- Do you jump between topics?
- Are you thinking clearly?

**Memory:**
- Can you remember recent events?
- Can you remember past events?
- Can you remember three words?

**Attention:**
- Can you focus on a task?
- Can you follow instructions?
- Can you do simple math?

### Why This Matters

The mental status exam helps doctors:
- Find memory problems
- Check for confusion
- Look for signs of stroke
- Detect depression or anxiety
- Monitor effects of illness
- Track changes over time

### Common Problems Found

**Memory loss:**
- Forgetting recent events
- Repeating questions
- Getting lost in familiar places

**Confusion:**
- Not knowing where you are
- Not knowing the date or time
- Trouble following conversations

**Depression:**
- Persistent sadness
- Loss of interest
- Changes in sleep or appetite

**Anxiety:**
- Excessive worry
- Restlessness
- Difficulty concentrating

The exam is not a test you pass or fail. It helps doctors understand how to help you best.`,

      keyTerms: [
        { term: 'mental status', definition: 'The current state of a person\'s cognitive and emotional functioning' },
        { term: 'cognition', definition: 'Mental processes including thinking, knowing, remembering' },
        { term: 'attention', definition: 'The ability to focus on something' },
        { term: 'orientation', definition: 'Knowing who you are, where you are, and what time it is' },
        { term: 'mood', definition: 'The emotional state a person describes feeling' },
        { term: 'affect', definition: 'The outward expression of emotions' },
      ],

      analogies: [
        'The mental status exam is like checking all the apps on a phone - making sure each one works.',
        'Memory is like a filing system - we check if files are being saved and retrieved.',
        'Attention is like a spotlight - we check if it stays on one thing or jumps around.',
      ],

      examples: [
        'Not knowing the current date might indicate confusion or memory problems.',
        'Difficulty naming common objects might suggest a language problem.',
        'Slowed movements and speech might indicate depression.',
      ],

      patientCounselingPoints: [
        'This exam helps us understand how your brain is working.',
        'There are no right or wrong answers - just do your best.',
        'If you have trouble with some questions, that gives us important information.',
        'We may repeat this exam to track changes over time.',
      ],
    },

    2: {
      level: 2,
      summary: 'The mental status examination systematically assesses cognition, emotion, and behavior through observation and structured tasks.',
      explanation: `## Components of the MSE

### 1. Appearance and Behavior
- General appearance, grooming, hygiene
- Eye contact
- Psychomotor activity
- Involuntary movements
- Cooperation with exam

### 2. Speech
- Rate, volume, articulation
- Prosody (tone, inflection)

### 3. Mood and Affect
- Mood: patient\'s subjective state
- Affect: observable expression
- Range and congruence

### 4. Thought Process
- Logic and coherence
- Goal-directedness
- Associations

### 5. Thought Content
- Delusions
- Suicidal/homicidal ideation
- Obsessions

### 6. Perceptual Disturbances
- Hallucinations
- Illusions

### 7. Cognition
**Orientation:** Person, place, time, situation

**Attention:** Digit span, serial 7s

**Memory:** Immediate, short-term, long-term

**Language:** Fluency, comprehension, naming

**Visuospatial:** Clock drawing

**Executive Function:** Abstraction, problem-solving

### 8. Insight and Judgment
- Awareness of illness
- Decision-making capacity

### Common Screening Tools

**Mini-Mental State Examination (MMSE):**
- 30 points total
- Less than 24 suggests impairment

**Montreal Cognitive Assessment (MoCA):**
- 30 points total
- More sensitive for mild impairment`,

      keyTerms: [
        { term: 'psychomotor', definition: 'Physical activity associated with mental processes' },
        { term: 'tangentiality', definition: 'Replying in unrelated manner' },
        { term: 'circumstantiality', definition: 'Indirect speech with eventual return to point' },
        { term: 'loosening of associations', definition: 'Illogical connections between thoughts' },
        { term: 'perseveration', definition: 'Repetition of words or ideas' },
      ],

      analogies: [
        'Thought disorder is like a train jumping tracks - the connection between ideas is lost.',
        'Executive function is like a CEO - it plans, organizes, and makes decisions.',
      ],

      examples: [
        'Pressured speech suggests mania or anxiety.',
        'Flat affect with reported sadness suggests negative symptoms of schizophrenia.',
        'Disorientation to place suggests delirium or dementia.',
      ],

      clinicalNotes: 'Document specific examples of abnormalities rather than just using labels.',
    },

    3: {
      level: 3,
      summary: 'Advanced mental status assessment differentiates delirium, dementia, and depression while localizing cognitive deficits to specific brain regions.',
      explanation: `## Distinguishing Delirium, Dementia, and Depression

| Feature | Delirium | Dementia | Depression |
|---------|----------|----------|------------|
| Onset | Acute | Insidious | Variable |
| Course | Fluctuating | Progressive | Stable |
| Consciousness | Altered | Clear | Clear |
| Attention | Impaired | Usually intact | Variable |
| Memory | Poor registration | Poor retrieval | Variable |

### Neuroanatomical Correlates

**Frontal Lobe Dysfunction:**
- Disinhibition
- Perseveration
- Impaired judgment
- Abulia (lack of initiative)

**Temporal Lobe Dysfunction:**
- Memory impairment
- Language difficulties
- Emotional changes

**Parietal Lobe Dysfunction:**
- Neglect syndromes
- Constructional apraxia
- Gerstmann syndrome

### Detailed Cognitive Testing

**Memory Testing:**
- Immediate: Digit span, 3 words
- Recent: News events, medications
- Remote: Personal history

**Language Assessment:**
- Spontaneous speech
- Naming
- Repetition
- Comprehension
- Reading and writing

**Executive Function:**
- Trail Making Test
- Wisconsin Card Sorting
- Letter/semantic fluency
- Go/no-go tasks

### Specific Syndromes

**Amnestic Syndrome:**
- Profound memory impairment
- Relatively preserved other functions
- Confabulation

**Frontotemporal Dementia:**
- Behavioral variant: disinhibition
- Language variants: word-finding

**Posterior Cortical Atrophy:**
- Visual-spatial deficits`,

      keyTerms: [
        { term: 'abulia', definition: 'Lack of will or initiative' },
        { term: 'apraxia', definition: 'Inability to perform learned movements' },
        { term: 'agnosia', definition: 'Inability to recognize stimuli' },
        { term: 'confabulation', definition: 'Fabricated memories without intent to deceive' },
      ],

      analogies: [
        'Delirium is like a flickering light - consciousness waxes and wanes.',
        'Dementia is like a dimmer switch slowly turning down - gradual decline.',
      ],

      examples: [
        'Amnestic patient may confabulate when asked about recent events.',
        'Frontal lobe patient may grab objects inappropriately.',
        'Parietal neglect patient may deny ownership of left arm.',
      ],

      clinicalNotes: 'Delirium is a medical emergency - search for underlying cause.',
    },

    4: {
      level: 4,
      summary: 'Clinical integration of mental status findings with neuropsychological testing and management of cognitive disorders.',
      explanation: `## Neuropsychological Testing

**Indications:**
- Characterize cognitive deficits
- Establish baseline
- Differentiate disorders
- Capacity evaluations
- Rehabilitation planning

**Domains Assessed:**
- Intelligence (WAIS-IV)
- Memory (WMS-IV)
- Attention/working memory
- Language
- Visuospatial
- Executive function

### Capacity Assessment

**Four Elements:**
1. Understand information
2. Appreciate how it applies
3. Reason about risks/benefits
4. Express a choice

**Common Scenarios:**
- Medical decision-making
- Financial management
- Driving fitness

### Dementia Evaluation

**Reversible Causes (10%):**
- Normal pressure hydrocephalus
- Vitamin B12 deficiency
- Hypothyroidism
- Depression
- Medication effects

**Workup:**
- Laboratory: B12, TSH, CBC
- Neuroimaging (MRI)
- LP if rapidly progressive

### Management Approaches

**Alzheimer Disease:**
- Cholinesterase inhibitors
- Memantine (moderate-severe)
- Behavioral management
- Caregiver support

**Behavioral Symptoms:**
- Non-pharmacologic first
- Identify triggers
- Antipsychotics only if severe`,

      keyTerms: [
        { term: 'capacity', definition: 'Ability to make a specific decision' },
        { term: 'competency', definition: 'Legal determination of decision-making ability' },
        { term: 'cholinesterase inhibitor', definition: 'Medication that increases acetylcholine' },
      ],

      clinicalNotes: 'Capacity is decision-specific; a person may have capacity for some decisions but not others.',
    },

    5: {
      level: 5,
      summary: 'Expert mental status assessment for complex cases including conversion disorders, malingering, and advanced neurodegenerative conditions.',
      explanation: `## Complex Diagnostic Challenges

**Conversion Disorder:**
- Neurological symptoms without structural cause
- Related to stress
- Not under voluntary control
- Rehabilitation approach

**Malingering:**
- Intentional production of symptoms
- External incentive
- Inconsistent with known disorders

**Factitious Disorder:**
- Intentional symptoms
- No external reward
- Internal need to be sick

### Advanced Assessment

**Performance Validity Testing:**
- Embedded in neuropsych battery
- Detects suboptimal effort

**PET/SPECT:**
- Amyloid PET for Alzheimer
- Dopamine transporter scan

### Specialized Populations

**Pediatric:**
- Developmental considerations
- Age-normed testing
- Learning disability assessment

**Traumatic Brain Injury:**
- Post-concussive syndrome
- Chronic traumatic encephalopathy
- Rehabilitation planning

### Ethical Considerations

**Confidentiality:**
- Limits with danger to self/others
- Tarasoff duty to warn

**Autonomy:**
- Informed consent
- Advance directives`,

      keyTerms: [
        { term: 'malingering', definition: 'Intentional feigning of symptoms for gain' },
        { term: 'factitious disorder', definition: 'Intentional symptoms for psychological gain' },
        { term: 'Tarasoff', definition: 'Duty to warn identifiable victims' },
      ],

      clinicalNotes: 'Functional neurological symptoms are real to the patient and deserve compassionate treatment.',
    },
  },

  media: [],

  citations: [
    {
      id: 'strub-black',
      type: 'textbook',
      title: 'The Mental Status Examination in Neurology',
      source: 'FA Davis',
    },
  ],

  crossReferences: [
    { targetId: 'neurological-cranial-nerves', targetType: 'process', relationship: 'sibling', label: 'Cranial Nerve Exam' },
    { targetId: 'mental-health-cognitive-disorders', targetType: 'topic', relationship: 'related', label: 'Cognitive Disorders' },
  ],

  tags: {
    systems: ['nervous', 'mental-health'],
    topics: ['physical-examination', 'neurology', 'psychiatry'],
    keywords: ['mental status', 'cognition', 'dementia', 'delirium'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'psychiatry', 'neurology'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default mentalStatusExam;
