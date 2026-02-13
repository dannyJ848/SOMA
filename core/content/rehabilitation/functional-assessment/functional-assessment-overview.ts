/**
 * Functional Assessment Overview - Educational Content
 */

import { EducationalContent } from '../../types';

export const functionalAssessmentOverview: EducationalContent = {
  id: 'rehab-functional-assessment-overview',
  type: 'concept',
  name: 'Functional Assessment Overview',
  alternateNames: ['Disability Assessment', 'Functional Evaluation'],

  levels: {
    1: {
      level: 1,
      summary: 'Functional assessment measures how well you can do everyday activities like walking, dressing, and taking care of yourself.',
      explanation: `Functional assessment helps healthcare providers understand what you can and cannot do in daily life.

**What is measured:**
- Walking and moving around
- Getting dressed
- Taking care of personal needs
- Doing household tasks
- Communication

**Why it matters:**
- Helps plan your rehabilitation
- Tracks your progress
- Determines what help you need`,
      keyTerms: [
        { term: 'functional assessment', definition: 'Evaluation of ability to perform daily activities' },
        { term: 'independence', definition: 'Ability to do something without help' },
        { term: 'assistance', definition: 'Help needed from another person or device' },
      ],
      analogies: ['Functional assessment is like a report card for daily life activities.'],
      examples: ['A therapist observes how well you can get dressed to assess function.'],
    },
    2: {
      level: 2,
      summary: 'Functional assessment uses standardized measures to evaluate abilities in self-care, mobility, and other domains to guide rehabilitation planning and measure outcomes.',
      explanation: `Functional assessments provide objective data about a person's abilities.

**Domains Assessed:**
- **Self-care**: Eating, bathing, dressing, toileting
- **Mobility**: Walking, transfers, wheelchair use, stairs
- **Cognition**: Memory, problem-solving, safety awareness
- **Communication**: Understanding, expression
- **Social**: Interaction, community participation

**Common Measures:**
- Functional Independence Measure (FIM)
- Barthel Index
- Katz ADL Index
- Lawton IADL Scale

**Rating Levels:**
- Independent
- Modified independence (device)
- Supervision
- Minimal assist
- Moderate assist
- Maximal assist
- Total assist/dependent`,
      keyTerms: [
        { term: 'FIM', definition: 'Functional Independence Measure - comprehensive function assessment tool' },
        { term: 'Barthel Index', definition: 'Simple measure of basic ADL independence' },
        { term: 'IADL', definition: 'Instrumental activities of daily living - complex tasks like cooking, managing money' },
      ],
      analogies: ['Functional assessment is like a detailed skills checklist for everyday life.'],
    },
    3: {
      level: 3,
      summary: 'Functional assessment integrates standardized instruments, clinical observation, and patient report to comprehensively evaluate disability across ICF domains and guide rehabilitation interventions.',
      explanation: `## ICF Framework

The WHO International Classification of Functioning provides the conceptual framework:
- Body functions and structures
- Activities
- Participation
- Environmental factors
- Personal factors

## Assessment Methods

**Standardized Instruments:**
- Performance-based measures
- Self-report questionnaires
- Proxy report
- Chart review

**Clinical Observation:**
- Task performance
- Quality of movement
- Safety
- Strategy use

## Common Instruments

| Measure | Domains | Use |
|---------|---------|-----|
| FIM | 18 items, motor/cognitive | Inpatient rehab |
| Barthel | 10 items, basic ADL | Stroke, general |
| Katz ADL | 6 basic ADLs | Geriatric |
| Lawton IADL | 8 instrumental ADLs | Community function |

## Measurement Properties

**Reliability:**
- Inter-rater reliability
- Test-retest reliability

**Validity:**
- Content validity
- Construct validity
- Criterion validity

**Responsiveness:**
- Ability to detect change
- Minimal clinically important difference (MCID)`,
      keyTerms: [
        { term: 'ICF', definition: 'International Classification of Functioning, Disability and Health' },
        { term: 'MCID', definition: 'Minimal clinically important difference - smallest meaningful change' },
        { term: 'ceiling effect', definition: 'When measure cannot detect improvement at high function levels' },
      ],
      clinicalNotes: 'The FIM is required for Medicare inpatient rehabilitation reporting. It has known ceiling effects for higher-functioning patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced functional assessment uses specialized instruments, computerized adaptive testing, and ecological approaches to capture function across the full spectrum of disability and life contexts.',
      explanation: `## Advanced Instruments

**PROMIS (Patient-Reported Outcomes Measurement Information System):**
- Item response theory-based
- Computerized adaptive testing
- Domain-specific measures
- Minimal patient burden

**AM-PAC (Activity Measure for Post-Acute Care):**
- Three mobility stages
- Daily activity and cognition domains
- Applicable across settings

**Performance Measures:**
- Timed Up and Go
- 6-Minute Walk Test
- Berg Balance Scale
- Performance-oriented mobility assessment

## Ecological Assessment

**Community-Based:**
- Real-world observation
- Simulated environments
- Wearable sensor data
- Environmental assessment

## Specialty Assessments

**Neurological:**
- NIH Stroke Scale
- Fugl-Meyer Assessment
- Modified Ashworth Scale
- FMA upper extremity

**Orthopedic:**
- WOMAC
- KOOS/HOOS
- DASH

**Spinal Cord Injury:**
- ASIA Impairment Scale
- SCIM (Spinal Cord Independence Measure)

## Prognostic Use

- Predict discharge destination
- Estimate recovery potential
- Guide goal setting
- Resource allocation`,
      keyTerms: [
        { term: 'PROMIS', definition: 'NIH-developed patient-reported outcome measure system' },
        { term: 'computerized adaptive testing', definition: 'Dynamic test adjusting questions based on responses' },
        { term: 'item response theory', definition: 'Statistical framework for measuring latent traits' },
      ],
      clinicalNotes: 'Computerized adaptive testing (CAT) using item banks like PROMIS can provide precise measurement with fewer questions, reducing patient burden while maintaining or improving measurement quality.',
    },
    5: {
      level: 5,
      summary: 'Contemporary functional assessment research explores sensor-based measurement, real-world outcomes capture, and precision assessment to characterize function across populations and inform value-based rehabilitation care.',
      explanation: `## Technology-Enhanced Assessment

**Wearable Sensors:**
- Continuous activity monitoring
- Gait analysis
- Fall detection
- Free-living behavior capture

**Digital Health:**
- Smartphone-based assessment
- Remote monitoring
- Ecological momentary assessment
- Big data analytics

## Real-World Outcomes

**Participation Focus:**
- Life Habits (LIFE-H)
- Craig Handicap Assessment (CHART)
- Participation measures
- Quality of life integration

**Long-Term Outcomes:**
- Community reintegration
- Return to work
- Health-related quality of life
- Healthcare utilization

## Precision Assessment

**Phenotyping:**
- Individual patterns
- Recovery trajectories
- Responsive subgroups
- Personalized benchmarks

**Predictive Analytics:**
- Machine learning
- Outcome prediction
- Resource optimization
- Quality improvement

## Implementation

**Quality Metrics:**
- Function-based quality measures
- Value-based care alignment
- Benchmarking
- Public reporting

**Research:**
- Measurement innovation
- Ecological validity
- Patient-centered outcomes
- Health equity`,
      keyTerms: [
        { term: 'ecological momentary assessment', definition: 'Real-time assessment in natural environment using technology' },
        { term: 'free-living assessment', definition: 'Measurement of function in everyday life outside clinical settings' },
        { term: 'phenotyping', definition: 'Characterizing individual patterns of function and recovery' },
      ],
      clinicalNotes: 'Sensor-based measures of real-world activity are increasingly being used to complement clinical assessments, providing information about actual function in daily life rather than capacity measured in clinic.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-functional-capacity-evaluation', targetType: 'topic', relationship: 'child', label: 'Functional Capacity Evaluation' },
  ],

  tags: {
    systems: ['functional'],
    topics: ['rehabilitation', 'assessment', 'disability', 'outcomes'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default functionalAssessmentOverview;
