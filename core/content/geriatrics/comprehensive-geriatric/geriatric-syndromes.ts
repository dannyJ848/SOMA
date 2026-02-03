import { EducationalContent } from '../../types';

export const geriatricSyndromesContent: EducationalContent = {
  id: 'geriatric-syndromes',
  type: 'concept',
  name: 'Geriatric Syndromes',
  levels: {
    1: {
      level: 1,
      summary: 'Geriatric syndromes are multifactorial health conditions that occur when accumulated deficits in multiple systems make an older adult vulnerable to situational challenges.',
      explanation: `Geriatric syndromes are multifactorial health conditions that occur when accumulated deficits in multiple systems make an older adult vulnerable to situational challenges.

**Key Points:**

- Geriatric syndromes have multiple contributing factors
- They are highly prevalent in older adults
- Common examples include falls, incontinence, and pressure ulcers
- Traditional disease-oriented approaches are often inadequate
- They significantly impact quality of life and independence

**Important Terms:**

- **Multifactorial**: Caused by many factors rather than a single disease
- **Vulnerability**: Reduced ability to cope with stressors due to limited physiological reserve
- **Iatrogenic**: Harm caused by medical treatment or diagnostic procedures

**Clinical Pearls:**

- Geriatric syndromes often share common risk factors
- Addressing one syndrome may improve others
- Prevention is more effective than treatment`,
      keyTerms: [
        { term: 'Multifactorial', definition: 'Caused by many factors rather than a single disease' },
        { term: 'Vulnerability', definition: 'Reduced ability to cope with stressors due to limited physiological reserve' },
        { term: 'Iatrogenic', definition: 'Harm caused by medical treatment or diagnostic procedures' }
      ],
      clinicalNotes: 'Geriatric syndromes often share common risk factors. Addressing one syndrome may improve others. Prevention is more effective than treatment.'
    },
    2: {
      level: 2,
      summary: 'The major geriatric syndromes include falls, urinary incontinence, pressure injuries, delirium, polypharmacy adverse effects, and failure to thrive.',
      explanation: `The major geriatric syndromes include falls, urinary incontinence, pressure injuries, delirium, polypharmacy adverse effects, and failure to thrive.

**Key Points:**

- Falls affect 30-40% of community-dwelling adults over 65 annually
- Urinary incontinence affects 15-30% of community-dwelling older adults
- Pressure injuries develop in immobilized or frail patients
- Delirium is a medical emergency requiring immediate evaluation
- Polypharmacy increases risk of adverse drug events

**Important Terms:**

- **Urge Incontinence**: Sudden intense urge to void followed by involuntary urine loss, often due to detrusor overactivity
- **Functional Incontinence**: Incontinence due to physical or cognitive impairment preventing timely toileting
- **Failure to Thrive**: Syndrome of weight loss, decreased appetite, poor nutrition, and inactivity

**Clinical Pearls:**

- Always inquire about incontinence; patients rarely volunteer it
- Bed alarms reduce falls but don't replace comprehensive assessment
- Pressure injury risk assessment (Braden scale) should be performed on admission`,
      keyTerms: [
        { term: 'Urge Incontinence', definition: 'Sudden intense urge to void followed by involuntary urine loss, often due to detrusor overactivity' },
        { term: 'Functional Incontinence', definition: 'Incontinence due to physical or cognitive impairment preventing timely toileting' },
        { term: 'Failure to Thrive', definition: 'Syndrome of weight loss, decreased appetite, poor nutrition, and inactivity' }
      ],
      clinicalNotes: 'Always inquire about incontinence; patients rarely volunteer it. Bed alarms reduce falls but don\'t replace comprehensive assessment. Pressure injury risk assessment (Braden scale) should be performed on admission.'
    },
    3: {
      level: 3,
      summary: 'Geriatric syndromes result from impairments in multiple domains that interact to create vulnerability; understanding these interactions guides comprehensive assessment.',
      explanation: `Geriatric syndromes result from impairments in multiple domains that interact to create vulnerability; understanding these interactions guides comprehensive assessment.

**Key Points:**

- Impaired homeostatic reserve contributes to syndrome development
- Shared risk factors include cognitive impairment, functional limitation, and multimorbidity
- The "geriatric giants" concept (immobility, instability, incontinence, intellectual impairment) remains relevant
- Syndromes often cluster together in affected individuals
- Medications frequently contribute to or exacerbate syndromes

**Important Terms:**

- **Homeostenosis**: Diminished physiologic reserve limiting ability to maintain homeostasis under stress
- **Multimorbidity**: Coexistence of two or more chronic conditions
- **Cascade Iatrogenesis**: Chain of adverse events triggered by an initial intervention, especially common in geriatric syndromes

**Clinical Pearls:**

- Treating one component of a syndrome may improve overall function
- Depression can masquerade as failure to thrive
- Constipation can contribute to delirium, falls, and urinary symptoms`,
      keyTerms: [
        { term: 'Homeostenosis', definition: 'Diminished physiologic reserve limiting ability to maintain homeostasis under stress' },
        { term: 'Multimorbidity', definition: 'Coexistence of two or more chronic conditions' },
        { term: 'Cascade Iatrogenesis', definition: 'Chain of adverse events triggered by an initial intervention, especially common in geriatric syndromes' }
      ],
      clinicalNotes: 'Treating one component of a syndrome may improve overall function. Depression can masquerade as failure to thrive. Constipation can contribute to delirium, falls, and urinary symptoms.'
    },
    4: {
      level: 4,
      summary: 'Expert management requires addressing multiple contributing factors simultaneously, often requiring interdisciplinary coordination and targeted interventions.',
      explanation: `Expert management requires addressing multiple contributing factors simultaneously, often requiring interdisciplinary coordination and targeted interventions.

**Key Points:**

- Non-pharmacologic interventions should be first-line for most syndromes
- Deprescribing medications that contribute to syndromes is essential
- Caregiver education and support improve outcomes
- Environmental modifications reduce risk factors
- Specialized geriatric services provide the best outcomes

**Important Terms:**

- **Deprescribing**: Systematic process of identifying and discontinuing medications where harms outweigh benefits
- **Multicomponent Intervention**: Addressing multiple risk factors simultaneously with coordinated strategies
- **Transitional Care**: Activities ensuring continuity and coordination as patients move between care settings

**Clinical Pearls:**

- Exercise programs simultaneously prevent falls, improve mobility, and reduce depression
- Treating constipation may improve urinary incontinence, delirium risk, and comfort
- Anticholinergic burden contributes to multiple geriatric syndromes`,
      keyTerms: [
        { term: 'Deprescribing', definition: 'Systematic process of identifying and discontinuing medications where harms outweigh benefits' },
        { term: 'Multicomponent Intervention', definition: 'Addressing multiple risk factors simultaneously with coordinated strategies' },
        { term: 'Transitional Care', definition: 'Activities ensuring continuity and coordination as patients move between care settings' }
      ],
      clinicalNotes: 'Exercise programs simultaneously prevent falls, improve mobility, and reduce depression. Treating constipation may improve urinary incontinence, delirium risk, and comfort. Anticholinergic burden contributes to multiple geriatric syndromes.'
    },
    5: {
      level: 5,
      summary: 'Ongoing research explores the biological mechanisms of geriatric syndromes, preventive strategies, and innovative interventions including technology-based approaches.',
      explanation: `Ongoing research explores the biological mechanisms of geriatric syndromes, preventive strategies, and innovative interventions including technology-based approaches.

**Key Points:**

- Inflammatory pathways may underlie multiple geriatric syndromes
- Microbiome alterations are linked to several syndromes including delirium
- Machine learning models predict syndrome development
- Telehealth and remote monitoring expand access to preventive care
- Precision geriatrics aims to match interventions to individual risk profiles

**Important Terms:**

- **Inflammaging**: Chronic low-grade inflammation associated with aging and geriatric syndromes
- **Precision Geriatrics**: Individualized approach based on genetic, biomarker, and phenotypic characteristics
- **Ecological Momentary Assessment**: Repeated real-time measurement of symptoms and behaviors in natural environment

**Clinical Pearls:**

- Biomarkers like IL-6 and CRP correlate with syndrome burden
- Gait variability predicts falls beyond traditional risk factors
- Synthetic biology approaches may lead to novel preventive strategies`,
      keyTerms: [
        { term: 'Inflammaging', definition: 'Chronic low-grade inflammation associated with aging and geriatric syndromes' },
        { term: 'Precision Geriatrics', definition: 'Individualized approach based on genetic, biomarker, and phenotypic characteristics' },
        { term: 'Ecological Momentary Assessment', definition: 'Repeated real-time measurement of symptoms and behaviors in natural environment' }
      ],
      clinicalNotes: 'Biomarkers like IL-6 and CRP correlate with syndrome burden. Gait variability predicts falls beyond traditional risk factors. Synthetic biology approaches may lead to novel preventive strategies.'
    }
  },
  media: [],
  citations: [],
  crossReferences: [],
  tags: {},
  createdAt: '2025-01-25',
  updatedAt: '2025-01-25',
  version: 1,
  status: 'published'
};
