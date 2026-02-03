/**
 * Generalized Anxiety Disorder - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const anxiety: EducationalContent = {
  id: 'condition-generalized-anxiety-disorder',
  type: 'condition',
  name: 'Generalized Anxiety Disorder',
  alternateNames: ['GAD', 'Chronic Anxiety', 'Anxiety Disorder'],
  hpoId: 'HP:0000739',

  levels: {
    1: {
      level: 1,
      summary: 'Generalized anxiety disorder is when you feel worried and anxious most days about many different things, even when there is little reason to worry.',
      explanation: `Everyone feels anxious sometimes, but GAD is when worry takes over your daily life.

**Symptoms:**
- Constant worry about many things
- Feeling restless or on edge
- Trouble concentrating
- Muscle tension
- Sleep problems
- Fatigue
- Irritability

**Treatment:**
- Talk therapy (especially CBT)
- Medications (antidepressants, buspirone)
- Relaxation techniques
- Exercise and healthy lifestyle`,
      keyTerms: [
        { term: 'anxiety', definition: 'A feeling of worry, nervousness, or unease' },
        { term: 'GAD', definition: 'Generalized anxiety disorder; chronic excessive worry about many things' },
      ],
      analogies: ['GAD is like having a worry alarm that goes off constantly, even when there is no real danger.'],
      examples: ['Someone who constantly worries about health, money, family, and work—and cannot stop even when everything is fine—may have GAD.'],
    },
    2: {
      level: 2,
      summary: 'GAD is characterized by excessive worry about multiple areas of life occurring more days than not for ≥6 months, with associated somatic and cognitive symptoms.',
      explanation: `## Diagnosis (DSM-5)
- Excessive anxiety/worry about multiple events/activities
- Occurring more days than not for ≥6 months
- Difficulty controlling worry
- ≥3 of: restlessness, fatigue, concentration difficulty, irritability, muscle tension, sleep disturbance

## Treatment
**First-Line:**
- SSRIs (escitalopram, sertraline)
- SNRIs (venlafaxine, duloxetine)
- CBT

**Second-Line:**
- Buspirone
- Pregabalin (not FDA-approved for GAD in US)
- TCAs

**Avoid:** Benzodiazepines long-term (dependence, tolerance)`,
      keyTerms: [
        { term: 'CBT', definition: 'Cognitive behavioral therapy; addresses thought patterns driving anxiety' },
        { term: 'buspirone', definition: '5-HT1A agonist anxiolytic without dependence potential' },
        { term: 'SNRI', definition: 'Serotonin-norepinephrine reuptake inhibitor; treats anxiety and depression' },
      ],
    },
    3: {
      level: 3,
      summary: 'GAD pathophysiology involves amygdala hyperactivity, prefrontal-limbic dysconnection, and GABA/glutamate imbalance, with treatment aiming for both symptom control and cognitive restructuring.',
      explanation: `## Pathophysiology
- **Amygdala hyperactivity:** Exaggerated threat response
- **Prefrontal-limbic dysconnection:** Poor top-down regulation
- **GABA deficiency:** Reduced inhibitory tone
- **HPA axis:** Elevated cortisol in some patients
- **Genetics:** 30% heritability

## Pharmacotherapy Details
| Medication | Onset | Notes |
|------------|-------|-------|
| SSRIs/SNRIs | 2-4 weeks | First-line; same doses as depression |
| Buspirone | 2-4 weeks | No sedation, no dependence |
| Hydroxyzine | Immediate | PRN, antihistamine, sedating |
| Benzodiazepines | Immediate | Short-term bridge only |

## CBT Components
- Psychoeducation about anxiety
- Cognitive restructuring (challenging catastrophic thinking)
- Relaxation training
- Exposure to avoided situations
- Worry time technique`,
      keyTerms: [
        { term: 'amygdala', definition: 'Brain region processing fear and threat responses' },
        { term: 'cognitive restructuring', definition: 'CBT technique to identify and change unhelpful thought patterns' },
        { term: 'worry time', definition: 'Scheduling specific time for worry to reduce pervasive anxiety' },
      ],
      clinicalNotes: 'SSRIs may transiently worsen anxiety initially—start low, go slow. Benzodiazepines should not be first-line; reserve for short-term bridging.',
    },
    4: {
      level: 4,
      summary: 'Treatment-refractory GAD requires augmentation strategies, addressing comorbidities, and consideration of novel therapeutics while understanding GAD as part of broader anxiety-mood spectrum.',
      explanation: `## Treatment Resistance
**Evaluation:**
- Confirm diagnosis (rule out medical causes, substance use)
- Assess comorbid depression, other anxiety disorders
- Evaluate treatment adequacy (dose, duration)
- Address personality factors

**Augmentation:**
- Quetiapine (low-dose)
- Pregabalin addition
- Buspirone to SSRI/SNRI
- Second medication from different class

## Comorbidity
- Depression (50-60% lifetime)
- Other anxiety disorders (panic, social anxiety)
- Substance use disorders
- Somatic symptom disorders

## Novel Approaches
- Mindfulness-based therapies
- Acceptance and commitment therapy (ACT)
- Digital CBT platforms
- Cannabidiol (limited evidence)`,
      keyTerms: [
        { term: 'ACT', definition: 'Acceptance and commitment therapy; focuses on accepting anxiety rather than eliminating it' },
        { term: 'pregabalin', definition: 'GABA analog used for anxiety in some countries' },
        { term: 'transdiagnostic approach', definition: 'Treating common processes across anxiety disorders rather than specific diagnoses' },
      ],
      clinicalNotes: 'Comorbid depression is common—most SSRIs/SNRIs treat both. Consider personality factors and developmental history in treatment-resistant cases.',
    },
    5: {
      level: 5,
      summary: 'Precision approaches in GAD incorporate neuroimaging biomarkers, fear circuitry modulation, and novel therapeutics targeting glutamate, endocannabinoids, and the gut-brain axis.',
      explanation: `## Neuroimaging
- Amygdala reactivity predicts SSRI response
- Prefrontal-amygdala connectivity as treatment target
- Default mode network alterations

## Novel Therapeutics
**Glutamate Modulators:**
- Riluzole (glutamate modulator)
- mGluR modulators in development

**Endocannabinoid System:**
- FAAH inhibitors
- CBD (mixed evidence)

**Gut-Brain Axis:**
- Probiotics ("psychobiotics")
- Microbiome-targeted approaches

## Dimensional Approaches
- RDoC framework (Research Domain Criteria)
- Anxiety as spectrum
- Transdiagnostic treatments
- Personalized medicine based on biomarkers`,
      keyTerms: [
        { term: 'RDoC', definition: 'Research Domain Criteria; NIH framework for dimensional mental health research' },
        { term: 'FAAH', definition: 'Fatty acid amide hydrolase; enzyme degrading endocannabinoids' },
        { term: 'psychobiotics', definition: 'Probiotics potentially affecting mental health through gut-brain axis' },
      ],
      clinicalNotes: 'Biomarker-guided treatment selection is a research goal but not yet clinical reality. Transdiagnostic approaches like Unified Protocol may be more efficient than disorder-specific treatments.',
    },
  },

  media: [],
  citations: [{ id: 'nice-gad-2019', type: 'article', title: 'NICE Guidelines on GAD', source: 'National Institute for Health and Care Excellence' }],
  crossReferences: [{ targetId: 'condition-major-depressive-disorder', targetType: 'condition', relationship: 'related', label: 'Major Depression' }],
  tags: { systems: ['neurological'], topics: ['psychiatry', 'mental health'], keywords: ['anxiety', 'GAD', 'worry', 'CBT', 'SSRI'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default anxiety;
