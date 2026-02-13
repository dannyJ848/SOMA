import { EducationalContent } from '../../types';

export const cgaContent: EducationalContent = {
  id: 'comprehensive-geriatric-assessment',
  type: 'concept',
  name: 'Comprehensive Geriatric Assessment',
  levels: {
    1: {
      level: 1,
      summary: 'Comprehensive Geriatric Assessment (CGA) is a multidimensional, interdisciplinary diagnostic process to determine the medical, psychological, and functional capabilities of an older adult.',
      explanation: `Comprehensive Geriatric Assessment (CGA) is a multidimensional, interdisciplinary diagnostic process to determine the medical, psychological, and functional capabilities of an older person.

**Key Points:**

- CGA evaluates multiple domains of health
- It involves a team of healthcare professionals
- CGA helps create personalized care plans
- It can improve outcomes and independence
- Often performed in hospital or clinic settings

**Important Terms:**

- **Multidimensional**: Addressing multiple aspects of health including medical, functional, psychological, and social domains
- **Interdisciplinary**: Involving professionals from different healthcare disciplines working together
- **Activities of Daily Living (ADLs)**: Basic self-care tasks like bathing, dressing, eating, toileting, and mobility

**Clinical Pearls:**

- CGA is more effective than standard medical assessment in older adults
- The process typically takes 1-2 hours to complete
- Family members or caregivers should be included when possible`,
      keyTerms: [
        { term: 'Multidimensional', definition: 'Addressing multiple aspects of health including medical, functional, psychological, and social domains' },
        { term: 'Interdisciplinary', definition: 'Involving professionals from different healthcare disciplines working together' },
        { term: 'Activities of Daily Living (ADLs)', definition: 'Basic self-care tasks like bathing, dressing, eating, toileting, and mobility' }
      ],
      clinicalNotes: 'CGA is more effective than standard medical assessment in older adults. The process typically takes 1-2 hours to complete. Family members or caregivers should be included when possible.'
    },
    2: {
      level: 2,
      summary: 'A thorough CGA covers eight essential domains and requires coordination among various healthcare providers to develop an individualized care plan.',
      explanation: `A thorough CGA covers eight essential domains and requires coordination among various healthcare providers to develop an individualized care plan.

**Key Points:**

- Medical assessment includes chronic diseases and medications
- Functional status evaluates ADLs and instrumental ADLs
- Cognitive assessment screens for dementia and delirium
- Emotional health screens for depression and anxiety
- Social support evaluates living situation and caregiver availability

**Important Terms:**

- **Instrumental ADLs (IADLs)**: Complex tasks necessary for independent living: managing finances, medications, cooking, shopping, housekeeping, and transportation
- **Geriatric Syndromes**: Conditions like falls, incontinence, and frailty that have multiple causes and are prevalent in older adults
- **Care Plan**: A written document outlining the patient's needs, goals, and interventions from the assessment

**Clinical Pearls:**

- Always ask about alcohol use and potential substance misuse
- Visual and hearing impairment often go undetected without screening
- Advance care planning should be initiated during CGA`,
      keyTerms: [
        { term: 'Instrumental ADLs (IADLs)', definition: 'Complex tasks necessary for independent living: managing finances, medications, cooking, shopping, housekeeping, and transportation' },
        { term: 'Geriatric Syndromes', definition: 'Conditions like falls, incontinence, and frailty that have multiple causes and are prevalent in older adults' },
        { term: 'Care Plan', definition: 'A written document outlining the patient\'s needs, goals, and interventions from the assessment' }
      ],
      clinicalNotes: 'Always ask about alcohol use and potential substance misuse. Visual and hearing impairment often go undetected without screening. Advance care planning should be initiated during CGA.'
    },
    3: {
      level: 3,
      summary: 'CGA has been shown to reduce mortality, institutionalization, and functional decline when applied to appropriate populations and followed by targeted interventions.',
      explanation: `CGA has been shown to reduce mortality, institutionalization, and functional decline when applied to appropriate populations and followed by targeted interventions.

**Key Points:**

- CGA is most beneficial for patients over 75 with functional decline
- Hospital-based CGA units (geriatric wards) show the strongest evidence
- Home-based CGA reduces nursing home admissions
- CGA followed by intervention is essential; assessment alone has limited value
- Team composition varies based on setting and patient needs

**Important Terms:**

- **Number Needed to Treat (NNT)**: For CGA preventing institutionalization, approximately 10-20 older adults need assessment to prevent one admission
- **Acute Care for Elders (ACE) Unit**: Hospital ward designed specifically for older adults using CGA principles
- **Geriatric Evaluation and Management (GEM)**: Inpatient or outpatient programs providing coordinated CGA and treatment

**Clinical Pearls:**

- Target patients who are frail or have multiple comorbidities for greatest benefit
- Reassessment should occur periodically or after significant health changes
- CGA can identify previously unrecognized conditions in up to 50% of patients`,
      keyTerms: [
        { term: 'Number Needed to Treat (NNT)', definition: 'For CGA preventing institutionalization, approximately 10-20 older adults need assessment to prevent one admission' },
        { term: 'Acute Care for Elders (ACE) Unit', definition: 'Hospital ward designed specifically for older adults using CGA principles' },
        { term: 'Geriatric Evaluation and Management (GEM)', definition: 'Inpatient or outpatient programs providing coordinated CGA and treatment' }
      ],
      clinicalNotes: 'Target patients who are frail or have multiple comorbidities for greatest benefit. Reassessment should occur periodically or after significant health changes. CGA can identify previously unrecognized conditions in up to 50% of patients.'
    },
    4: {
      level: 4,
      summary: 'Expert application of CGA involves adapting the assessment to specific clinical scenarios, understanding the limitations of current evidence, and implementing innovative delivery models.',
      explanation: `Expert application of CGA involves adapting the assessment to specific clinical scenarios, understanding the limitations of current evidence, and implementing innovative delivery models.

**Key Points:**

- Oncologic geriatrics uses CGA to determine chemotherapy tolerance
- Preoperative CGA predicts surgical complications and recovery
- Emergency department brief geriatric assessment can identify vulnerable patients
- Telehealth and remote CGA delivery expand access to care
- CGA combined with biomarkers improves risk stratification

**Important Terms:**

- **Chemotherapy Toxicity Risk Score**: Predicts grade 3-5 toxicity from regimens based on CGA findings and lab values
- **Frailty Index**: Quantitative measure based on accumulating deficits; higher scores predict mortality and institutionalization
- **Share Care Plan**: CGA model integrating medical and social services with shared accountability

**Clinical Pearls:**

- Brief CGA tools (4-6 items) maintain reasonable sensitivity for screening
- CGA findings often alter cancer treatment plans in 20-30% of cases
- Integration of CGA into electronic health records improves documentation and follow-through`,
      keyTerms: [
        { term: 'Chemotherapy Toxicity Risk Score', definition: 'Predicts grade 3-5 toxicity from regimens based on CGA findings and lab values' },
        { term: 'Frailty Index', definition: 'Quantitative measure based on accumulating deficits; higher scores predict mortality and institutionalization' },
        { term: 'Share Care Plan', definition: 'CGA model integrating medical and social services with shared accountability' }
      ],
      clinicalNotes: 'Brief CGA tools (4-6 items) maintain reasonable sensitivity for screening. CGA findings often alter cancer treatment plans in 20-30% of cases. Integration of CGA into electronic health records improves documentation and follow-through.'
    },
    5: {
      level: 5,
      summary: 'Ongoing research examines CGA implementation in diverse populations, integration with technology, and development of more efficient assessment tools.',
      explanation: `Ongoing research examines CGA implementation in diverse populations, integration with technology, and development of more efficient assessment tools.

**Key Points:**

- Machine learning algorithms can help identify patients who benefit most from CGA
- Biomarker panels (inflammatory markers, genetic risk scores) may enhance CGA prognostication
- Implementation science focuses on barriers to CGA adoption in non-geriatric settings
- Cost-effectiveness analyses support CGA in high-risk populations
- International harmonization of CGA tools is an ongoing effort

**Important Terms:**

- **Implementation Science**: Study of methods to promote adoption of evidence-based practices into routine care
- **Cost-utility Analysis**: Economic evaluation comparing costs and quality-adjusted life years gained
- **Geroscience**: Field studying biological mechanisms of aging to target fundamental aging processes

**Clinical Pearls:**

- CGA research has shifted from efficacy to effectiveness in real-world settings
- Personalized interventions based on CGA phenotype show promise
- Future CGA may include epigenetic clocks and other aging biomarkers`,
      keyTerms: [
        { term: 'Implementation Science', definition: 'Study of methods to promote adoption of evidence-based practices into routine care' },
        { term: 'Cost-utility Analysis', definition: 'Economic evaluation comparing costs and quality-adjusted life years gained' },
        { term: 'Geroscience', definition: 'Field studying biological mechanisms of aging to target fundamental aging processes' }
      ],
      clinicalNotes: 'CGA research has shifted from efficacy to effectiveness in real-world settings. Personalized interventions based on CGA phenotype show promise. Future CGA may include epigenetic clocks and other aging biomarkers.'
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
