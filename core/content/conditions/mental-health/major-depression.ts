/**
 * Major Depressive Disorder - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const majorDepression: EducationalContent = {
  id: 'condition-major-depressive-disorder',
  type: 'condition',
  name: 'Major Depressive Disorder',
  nameEs: 'Trastorno Depresivo Mayor',
  alternateNames: ['MDD', 'Clinical Depression', 'Major Depression'],
  hpoId: 'HP:0000716',

  levels: {
    1: {
      level: 1,
      summary: 'Major depression is a serious mood disorder causing persistent sadness and loss of interest that affects how you feel, think, and handle daily activities.',
      explanation: `Depression is more than just feeling sad—it is a medical condition that affects your brain and can make everyday life very difficult.

**Symptoms (lasting 2+ weeks):**
- Feeling sad or empty most of the day
- Loss of interest in activities you used to enjoy
- Changes in appetite and weight
- Trouble sleeping or sleeping too much
- Feeling tired all the time
- Trouble concentrating
- Thoughts of death or suicide

**Treatment:**
- Talk therapy (counseling)
- Antidepressant medications
- Lifestyle changes (exercise, sleep, social support)
- Combination of above often most effective`,
      keyTerms: [
        { term: 'depression', definition: 'A mood disorder causing persistent sadness and loss of interest' },
        { term: 'antidepressant', definition: 'Medication that helps treat depression' },
      ],
      analogies: ['Depression is like a heavy fog that makes everything harder to see and do.'],
      examples: ['Someone who has lost interest in friends, work, and hobbies, and feels hopeless for weeks may have clinical depression.'],
    },
    2: {
      level: 2,
      summary: 'MDD is characterized by depressed mood and/or anhedonia with neurovegetative symptoms lasting ≥2 weeks, treated with psychotherapy and/or pharmacotherapy based on severity.',
      explanation: `## Diagnosis (DSM-5)
≥5 symptoms for ≥2 weeks (must include depressed mood OR anhedonia):
- Depressed mood
- Anhedonia (loss of interest/pleasure)
- Weight/appetite change
- Sleep disturbance
- Psychomotor changes
- Fatigue
- Worthlessness/guilt
- Concentration difficulties
- Suicidal ideation

## Severity
- Mild: Few symptoms, minor functional impairment
- Moderate: More symptoms, moderate impairment
- Severe: Most symptoms, marked impairment, may have psychotic features

## Treatment
**Mild:** Psychotherapy (CBT, IPT) alone may be sufficient
**Moderate-Severe:** Antidepressants +/- psychotherapy
**First-line medications:** SSRIs (sertraline, escitalopram), SNRIs (venlafaxine, duloxetine)`,
      keyTerms: [
        { term: 'anhedonia', definition: 'Inability to feel pleasure in normally enjoyable activities' },
        { term: 'SSRI', definition: 'Selective serotonin reuptake inhibitor; common antidepressant class' },
        { term: 'CBT', definition: 'Cognitive behavioral therapy; evidence-based psychotherapy for depression' },
      ],
    },
    3: {
      level: 3,
      summary: 'MDD pathophysiology involves monoamine dysfunction, HPA axis dysregulation, and neuroplasticity changes, with treatment response requiring 4-6 weeks and addressing residual symptoms for remission.',
      explanation: `## Pathophysiology
- **Monoamine hypothesis:** Decreased serotonin, norepinephrine, dopamine
- **HPA axis dysregulation:** Elevated cortisol, dexamethasone non-suppression
- **Neuroplasticity:** Decreased BDNF, hippocampal volume reduction
- **Inflammation:** Elevated pro-inflammatory cytokines

## Pharmacotherapy
| Class | Examples | Key Features |
|-------|----------|--------------|
| SSRI | Sertraline, escitalopram | First-line, well-tolerated |
| SNRI | Venlafaxine, duloxetine | Pain comorbidity |
| Bupropion | - | Activating, weight neutral, no sexual SE |
| Mirtazapine | - | Sedating, appetite stimulating |
| TCA | Amitriptyline, nortriptyline | Second-line, overdose risk |
| MAOI | Phenelzine, tranylcypromine | Dietary restrictions |

## Treatment Principles
- 4-6 weeks for adequate trial
- Goal is remission, not just response
- Continue 6-12 months after remission
- Address residual symptoms`,
      keyTerms: [
        { term: 'BDNF', definition: 'Brain-derived neurotrophic factor; growth factor reduced in depression' },
        { term: 'HPA axis', definition: 'Hypothalamic-pituitary-adrenal axis; stress response system dysregulated in depression' },
        { term: 'remission', definition: 'Minimal or no depressive symptoms; goal of treatment' },
      ],
      clinicalNotes: 'Screen for bipolar disorder before starting antidepressants—antidepressant monotherapy can trigger mania. Always assess suicide risk.',
    },
    4: {
      level: 4,
      summary: 'Treatment-resistant depression requires systematic evaluation, optimization, and consideration of augmentation strategies, ketamine/esketamine, neuromodulation, and addressing comorbidities.',
      explanation: `## Treatment-Resistant Depression (TRD)
**Definition:** Failure to respond to ≥2 adequate antidepressant trials

**Evaluation:**
- Confirm diagnosis (rule out bipolar, medical causes)
- Assess adherence
- Address comorbidities (anxiety, substance use, personality)
- Optimize current treatment

## Augmentation Strategies
- Lithium augmentation
- Atypical antipsychotics (aripiprazole, quetiapine)
- Thyroid hormone (T3)
- Bupropion addition

## Ketamine/Esketamine
- Rapid-acting antidepressant
- NMDA receptor antagonism
- Esketamine (Spravato): FDA-approved for TRD
- Requires monitoring for dissociation, BP

## Neuromodulation
- ECT: Most effective for severe/refractory depression
- TMS: FDA-approved, non-invasive
- VNS: Implantable for chronic TRD
- DBS: Experimental`,
      keyTerms: [
        { term: 'treatment-resistant depression', definition: 'Depression not responding to ≥2 adequate medication trials' },
        { term: 'esketamine', definition: 'Nasal spray ketamine derivative FDA-approved for TRD' },
        { term: 'ECT', definition: 'Electroconvulsive therapy; most effective treatment for severe depression' },
      ],
      clinicalNotes: 'ECT is highly effective and underutilized due to stigma. Consider early for severe depression with psychotic features, catatonia, or acute suicidality.',
    },
    5: {
      level: 5,
      summary: 'Precision psychiatry in MDD integrates biomarkers for treatment selection, novel rapid-acting antidepressants, psychedelic-assisted therapy, and understanding depression as a heterogeneous syndrome.',
      explanation: `## Biomarkers and Precision Medicine
**Potential Biomarkers:**
- EEG-based predictions (alpha asymmetry)
- Inflammatory markers (CRP, IL-6)
- Genetic predictors (pharmacogenomics)
- Neuroimaging signatures

**Pharmacogenomics:**
- CYP2D6, CYP2C19 for metabolism
- SLC6A4 (serotonin transporter) polymorphisms
- Limited clinical utility currently

## Novel Therapeutics
**Psychedelics:**
- Psilocybin: Phase 3 trials ongoing
- MDMA: Approved for PTSD, studied for depression
- Neuroplasticity enhancement mechanism

**Rapid-Acting Antidepressants:**
- Zuranolone: Oral neurosteroid, GABA modulator
- Novel NMDA modulators in development

## Depression Subtypes
- Melancholic, atypical, anxious, mixed features
- May predict treatment response
- Move toward dimensional approach

## Digital Therapeutics
- App-based CBT
- Smartphone monitoring
- Digital phenotyping (passive data)`,
      keyTerms: [
        { term: 'psilocybin', definition: 'Psychedelic compound under investigation for treatment-resistant depression' },
        { term: 'zuranolone', definition: 'Oral neurosteroid GABA modulator; rapid-acting antidepressant' },
        { term: 'digital phenotyping', definition: 'Using smartphone data to monitor mental health' },
      ],
      clinicalNotes: 'Psilocybin-assisted therapy shows promise but requires specialized setting. Pharmacogenomics can guide dosing but does not reliably predict response. Depression heterogeneity limits one-size-fits-all approaches.',
    },
  },

  media: [],
  citations: [{ id: 'apa-depression-2019', type: 'article', title: 'APA Practice Guideline for Treatment of Depression', source: 'American Psychiatric Association' }],
  crossReferences: [{ targetId: 'condition-anxiety', targetType: 'condition', relationship: 'related', label: 'Generalized Anxiety Disorder' }],
  tags: { systems: ['neurological'], topics: ['psychiatry', 'mental health'], keywords: ['depression', 'MDD', 'antidepressants', 'SSRI'], clinicalRelevance: 'critical', examRelevance: { usmle: true, nbme: true, shelf: ['psychiatry'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default majorDepression;
