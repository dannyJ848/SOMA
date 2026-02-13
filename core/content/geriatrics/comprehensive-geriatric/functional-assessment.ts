import { EducationalContent } from '../../types';

export const functionalAssessmentContent: EducationalContent = {
  id: 'functional-assessment-geriatrics',
  type: 'concept',
  name: 'Functional Assessment in Older Adults',
  levels: {
    1: {
      level: 1,
      summary: 'Functional assessment evaluates an older adult\'s ability to perform everyday activities and is crucial for determining independence and care needs.',
      explanation: `Functional assessment evaluates an older adult's ability to perform everyday activities and is crucial for determining independence and care needs.

**Key Points:**

- Functional status is a key indicator of health in older adults
- ADLs are basic self-care activities
- IADLs are more complex tasks for independent living
- Decline in function often precedes other health problems
- Functional assessment guides care planning and interventions

**Important Terms:**

- **ADLs (Activities of Daily Living)**: Basic self-care: bathing, dressing, toileting, transferring, continence, and feeding
- **IADLs (Instrumental Activities of Daily Living)**: Complex activities: managing finances, medications, transportation, shopping, cooking, and housekeeping
- **Functional Decline**: Loss of ability to perform tasks previously capable of doing

**Clinical Pearls:**

- IADLs typically decline before ADLs
- Patients may compensate or hide functional difficulties
- Direct observation is more accurate than self-report`,
      keyTerms: [
        { term: 'ADLs (Activities of Daily Living)', definition: 'Basic self-care: bathing, dressing, toileting, transferring, continence, and feeding' },
        { term: 'IADLs (Instrumental Activities of Daily Living)', definition: 'Complex activities: managing finances, medications, transportation, shopping, cooking, and housekeeping' },
        { term: 'Functional Decline', definition: 'Loss of ability to perform tasks previously capable of doing' }
      ],
      clinicalNotes: 'IADLs typically decline before ADLs. Patients may compensate or hide functional difficulties. Direct observation is more accurate than self-report.'
    },
    2: {
      level: 2,
      summary: 'Validated instruments provide standardized measures of functional status and help track changes over time and response to interventions.',
      explanation: `Validated instruments provide standardized measures of functional status and help track changes over time and response to interventions.

**Key Points:**

- Katz Index of Independence in ADLs measures basic function
- Lawton IADL Scale assesses instrumental activities
- Barthel Index evaluates degree of dependence in ADLs
- Timed Up and Go (TUG) tests mobility and fall risk
- Performance-based measures may detect subtle changes

**Important Terms:**

- **Katz Index**: 6-item scale ranking functional independence from A (independent in all ADLs) to G (dependent in all ADLs)
- **Barthel Index**: 10-item ADL scale scored 0-100, with higher scores indicating greater independence
- **Timed Up and Go Test**: Measures time to stand from chair, walk 3 meters, turn, walk back, and sit; >12 seconds indicates increased fall risk

**Clinical Pearls:**

- Always ask specifically about walking aids and adaptive equipment
- Medication review can reveal drugs contributing to functional decline
- Depression can masquerade as functional impairment`,
      keyTerms: [
        { term: 'Katz Index', definition: '6-item scale ranking functional independence from A (independent in all ADLs) to G (dependent in all ADLs)' },
        { term: 'Barthel Index', definition: '10-item ADL scale scored 0-100, with higher scores indicating greater independence' },
        { term: 'Timed Up and Go Test', definition: 'Measures time to stand from chair, walk 3 meters, turn, walk back, and sit; >12 seconds indicates increased fall risk' }
      ],
      clinicalNotes: 'Always ask specifically about walking aids and adaptive equipment. Medication review can reveal drugs contributing to functional decline. Depression can masquerade as functional impairment.'
    },
    3: {
      level: 3,
      summary: 'Expert functional assessment integrates performance measures, patient-reported outcomes, environmental factors, and caregiver input to create a complete picture.',
      explanation: `Expert functional assessment integrates performance measures, patient-reported outcomes, environmental factors, and caregiver input to create a complete picture.

**Key Points:**

- Short Physical Performance Battery (SPPB) predicts disability and mortality
- Gait speed is a vital sign; speeds <0.8 m/s indicate frailty
- Environmental assessment can identify modifiable barriers to independence
- Caregiver burden assessment is essential when planning interventions
- Goal-setting should incorporate patient priorities and values

**Important Terms:**

- **SPPB**: Three-test battery (balance, gait speed, chair stands) scored 0-12; lower scores predict adverse outcomes
- **Gait Speed**: Walking pace; <0.6 m/s = severe risk, 0.6-1.0 m/s = moderate risk, >1.0 m/s = healthy
- **Rehabilitation Potential**: Likelihood of functional recovery based on medical, cognitive, and motivational factors

**Clinical Pearls:**

- Gait speed is more predictive than chronological age in older adults
- Functional trajectories (improvers, decliners, stable) help prognostication
- Prehabilitation before surgery can improve postoperative functional outcomes`,
      keyTerms: [
        { term: 'SPPB', definition: 'Three-test battery (balance, gait speed, chair stands) scored 0-12; lower scores predict adverse outcomes' },
        { term: 'Gait Speed', definition: 'Walking pace; <0.6 m/s = severe risk, 0.6-1.0 m/s = moderate risk, >1.0 m/s = healthy' },
        { term: 'Rehabilitation Potential', definition: 'Likelihood of functional recovery based on medical, cognitive, and motivational factors' }
      ],
      clinicalNotes: 'Gait speed is more predictive than chronological age in older adults. Functional trajectories (improvers, decliners, stable) help prognostication. Prehabilitation before surgery can improve postoperative functional outcomes.'
    },
    4: {
      level: 4,
      summary: 'Expert-level functional assessment includes understanding phenotypic subtypes, integrating technology-based monitoring, and applying sophisticated predictive models.',
      explanation: `Expert-level functional assessment includes understanding phenotypic subtypes, integrating technology-based monitoring, and applying sophisticated predictive models.

**Key Points:**

- Frailty phenotype distinguishes physical frailty from other causes of decline
- Physical resilience determines ability to recover from stressors
- Wearable technology enables continuous functional monitoring
- Body composition analysis (sarcopenia) enhances risk stratification
- Functional trajectories help distinguish reversible from irreversible decline

**Important Terms:**

- **Fried Frailty Phenotype**: Presence of >=3: unintentional weight loss, exhaustion, low physical activity, slow gait, weak grip
- **Sarcopenia**: Age-related loss of muscle mass and strength associated with functional decline
- **Physical Resilience**: Ability to recover functional capacity following acute illness or stressor

**Clinical Pearls:**

- Handgrip strength is a proxy for overall muscle function and predicts outcomes
- Frail older adults may benefit from adapted rehabilitation approaches
- Cognitive impairment complicates functional assessment and requires adapted tools`,
      keyTerms: [
        { term: 'Fried Frailty Phenotype', definition: 'Presence of >=3: unintentional weight loss, exhaustion, low physical activity, slow gait, weak grip' },
        { term: 'Sarcopenia', definition: 'Age-related loss of muscle mass and strength associated with functional decline' },
        { term: 'Physical Resilience', definition: 'Ability to recover functional capacity following acute illness or stressor' }
      ],
      clinicalNotes: 'Handgrip strength is a proxy for overall muscle function and predicts outcomes. Frail older adults may benefit from adapted rehabilitation approaches. Cognitive impairment complicates functional assessment and requires adapted tools.'
    },
    5: {
      level: 5,
      summary: 'Research focuses on novel biomarkers, digital technologies, and precision approaches to functional assessment and intervention.',
      explanation: `Research focuses on novel biomarkers, digital technologies, and precision approaches to functional assessment and intervention.

**Key Points:**

- Digital phenotyping using smartphone sensors detects functional changes
- Biomarkers (myostatin, GDF15) correlate with muscle function and outcomes
- Multi-omics approaches may identify functional decline mechanisms
- Artificial intelligence predicts functional trajectories from EHR data
- Remote functional monitoring increased during COVID-19 pandemic

**Important Terms:**

- **Digital Phenotyping**: Use of digital device data to characterize health and functional status
- **Myostatin**: Negative regulator of muscle growth; elevated levels associated with sarcopenia
- **GDF15**: Growth differentiation factor 15; biomarker associated with aging and functional decline

**Clinical Pearls:**

- Gait analysis using wearable sensors detects subtle changes before clinical decline
- Home-based sensors can monitor activity patterns and detect health deterioration
- Standardization of digital functional measures remains an ongoing challenge`,
      keyTerms: [
        { term: 'Digital Phenotyping', definition: 'Use of digital device data to characterize health and functional status' },
        { term: 'Myostatin', definition: 'Negative regulator of muscle growth; elevated levels associated with sarcopenia' },
        { term: 'GDF15', definition: 'Growth differentiation factor 15; biomarker associated with aging and functional decline' }
      ],
      clinicalNotes: 'Gait analysis using wearable sensors detects subtle changes before clinical decline. Home-based sensors can monitor activity patterns and detect health deterioration. Standardization of digital functional measures remains an ongoing challenge.'
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
