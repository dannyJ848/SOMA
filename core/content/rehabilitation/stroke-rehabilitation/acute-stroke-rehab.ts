/**
 * Acute Stroke Rehabilitation - Comprehensive Educational Content
 *
 * Covers early rehabilitation interventions in the acute stroke setting.
 */

import { EducationalContent } from '../../types';

export const acuteStrokeRehab: EducationalContent = {
  id: 'rehab-acute-stroke-rehab',
  type: 'concept',
  name: 'Acute Stroke Rehabilitation',
  alternateNames: ['Early Stroke Rehabilitation', 'Inpatient Stroke Rehab'],

  levels: {
    1: {
      level: 1,
      summary: 'Right after a stroke, doctors and therapists start helping you move and do things safely as soon as possible.',
      explanation: `When someone has a stroke, getting moving again quickly is very important. Even while still in the hospital, therapists will help you start doing simple activities.

**Why start so early?**
- Moving helps prevent other problems like blood clots
- Your brain starts learning right away
- Lying in bed too long can make muscles weak

**What happens in early rehab?**
- Sitting up in bed
- Moving to a chair
- Starting to stand with help
- Beginning to walk short distances

**Safety first!**
The therapy team makes sure you are medically stable before starting exercises. They watch your heart rate and blood pressure to keep you safe.`,
      keyTerms: [
        { term: 'acute', definition: 'The early period right after something happens' },
        { term: 'mobilization', definition: 'Starting to move and get out of bed' },
        { term: 'stable', definition: 'When your body is working well enough to do activities safely' },
      ],
      analogies: [
        'Starting rehab early is like starting physical therapy right after surgery - the sooner you begin, the better your recovery.',
      ],
      examples: [
        'A patient might sit on the edge of the bed on the first day after their stroke.',
        'A therapist helps someone stand up for the first time two days after a stroke.',
      ],
    },
    2: {
      level: 2,
      summary: 'Acute stroke rehabilitation begins within 24-48 hours when medically stable, focusing on early mobilization, prevention of complications, and assessment for rehabilitation needs.',
      explanation: `Acute stroke rehabilitation takes place in the first days after a stroke, typically in a hospital setting. The goals are to start recovery as early as safely possible while preventing complications.

**Early Mobilization:**
- Sitting up in bed within 24 hours (if stable)
- Sitting in a chair
- Standing with assistance
- Walking short distances with support

**Preventing Complications:**
- Deep vein thrombosis (blood clots in legs)
- Pneumonia (from lying flat or swallowing problems)
- Pressure ulcers (bed sores)
- Muscle contractures (stiffening)

**Initial Assessments:**
- Swallowing evaluation (before eating or drinking)
- Movement and strength testing
- Speech and language assessment
- Cognitive screening

**Discharge Planning:**
The team determines the best next step:
- Inpatient rehabilitation facility (intensive therapy)
- Skilled nursing facility
- Home with outpatient therapy
- Home with home health services

**Who is involved?**
- Physicians (neurologist, hospitalist)
- Physical therapist
- Occupational therapist
- Speech-language pathologist
- Nursing staff
- Case manager`,
      keyTerms: [
        { term: 'early mobilization', definition: 'Getting patients moving soon after stroke to prevent complications' },
        { term: 'dysphagia screening', definition: 'Testing swallowing ability to prevent choking and pneumonia' },
        { term: 'deep vein thrombosis', definition: 'Blood clots that form in the legs from inactivity', pronunciation: 'throm-BOH-sis' },
        { term: 'inpatient rehabilitation facility', definition: 'Hospital-like setting providing intensive daily therapy' },
      ],
      analogies: [
        'Acute stroke care is like the emergency response phase - stabilize first, then start rebuilding.',
      ],
    },
    3: {
      level: 3,
      summary: 'Acute stroke rehabilitation integrates early mobilization protocols, standardized assessments, and complication prevention within a stroke unit model to optimize outcomes and determine appropriate rehabilitation pathways.',
      explanation: `## Stroke Unit Care

Evidence strongly supports organized stroke unit care:
- 14% reduction in death or dependency
- Benefits from coordinated, specialized care
- Early rehabilitation is a key component

## Early Mobilization Evidence

**AVERT Trial Findings:**
- Very early mobilization (within 24 hours) is safe
- Higher dose early mobilization may reduce favorable outcomes
- Optimal timing and intensity still being defined

**Current Recommendations:**
- Mobilization within 24-48 hours if medically stable
- Avoid prolonged bedrest
- Gradual increase in activity intensity
- Monitor for orthostatic hypotension

## Assessments in Acute Phase

**Neurological:**
- NIH Stroke Scale (NIHSS)
- Glasgow Coma Scale
- Cranial nerve examination
- Motor and sensory testing

**Functional:**
- Barthel Index
- Modified Rankin Scale
- FIM (for rehabilitation planning)

**Swallowing:**
- Bedside swallow screening (water test)
- Modified barium swallow study if indicated
- Fiberoptic endoscopic evaluation of swallowing (FEES)

**Cognitive:**
- Montreal Cognitive Assessment (MoCA)
- Orientation and attention screening
- Depression screening (PHQ-9)

## Complication Prevention

| Complication | Prevention Strategy |
|--------------|---------------------|
| DVT/PE | Pharmacological prophylaxis, compression devices, early mobilization |
| Aspiration pneumonia | NPO until swallow screen, modified diet textures, positioning |
| Pressure ulcers | Regular repositioning, pressure-relieving surfaces, skin assessment |
| Contractures | Range of motion, positioning, splinting |
| Shoulder subluxation | Proper handling, arm positioning, sling consideration |

## Rehabilitation Disposition

**Criteria for Inpatient Rehabilitation:**
- Medical stability
- Ability to tolerate 3 hours of therapy daily
- Rehabilitation goals achievable
- Safe discharge plan

**Criteria for Skilled Nursing:**
- Lower therapy tolerance
- Complex medical needs
- No safe home environment`,
      keyTerms: [
        { term: 'NIHSS', definition: 'NIH Stroke Scale - standardized assessment of stroke severity' },
        { term: 'stroke unit', definition: 'Specialized hospital unit with coordinated stroke care and early rehabilitation' },
        { term: 'DVT prophylaxis', definition: 'Preventive treatment to avoid blood clots in the legs' },
        { term: 'shoulder subluxation', definition: 'Partial dislocation of the shoulder common after stroke affecting the arm' },
      ],
      clinicalNotes: 'All patients with acute stroke should receive DVT prophylaxis. Pharmacological prophylaxis with low-dose heparin or LMWH is generally started 24-48 hours after stroke onset in patients without hemorrhagic transformation.',
    },
    4: {
      level: 4,
      summary: 'Acute stroke rehabilitation requires individualized mobilization protocols, comprehensive complication prevention, and systematic assessment using validated tools to optimize early recovery and determine appropriate rehabilitation intensity and setting.',
      explanation: `## Early Mobilization Protocols

**AVERT-Informed Practice:**
- Dose: Frequency and duration of out-of-bed activity
- Higher doses (>50 minutes/day) in first 24 hours may be harmful
- Moderate, frequent mobilization appears optimal
- Blood pressure management during activity

**Physiological Considerations:**
- Cerebral autoregulation impairment
- Blood pressure variability effects on penumbra
- Positional changes and cerebral perfusion
- Cardiac complications (arrhythmias, MI)

## Dysphagia Management

**Screening Tools:**
- Toronto Bedside Swallowing Screening Test (TOR-BSST)
- Gugging Swallowing Screen (GUSS)
- 3-oz water test

**Instrumental Assessment Indications:**
- Failed screening with unclear etiology
- Silent aspiration suspected
- Complex neurological presentation
- Guiding diet texture decisions

**Aspiration Risk Stratification:**
- Bedside predictors: cough, voice quality, gag reflex (poor sensitivity)
- Penetration-Aspiration Scale from VFSS
- FEES findings

## Venous Thromboembolism Prevention

**Risk Factors in Stroke:**
- Immobility
- Limb paresis
- Advanced age
- Prior VTE
- Cancer

**Prophylaxis Options:**
- Intermittent pneumatic compression (all patients)
- Low-molecular-weight heparin (after 24-48 hours for ischemic stroke)
- Unfractionated heparin (if renal impairment)
- IVC filter consideration for DVT with contraindication to anticoagulation

## Rehabilitation Intensity Determination

**Assessment of Therapy Tolerance:**
- Endurance during evaluation sessions
- Cognitive participation
- Medical complexity
- Progress in acute setting

**Insurance and Regulatory Considerations:**
- CMS 60% rule for IRF admission
- Qualifying stroke diagnosis requirements
- Documentation of therapy potential
- Length of stay expectations

## Prognostic Assessment

**Predictors of Functional Outcome:**
- Stroke severity (NIHSS)
- Age
- Prestroke function
- Lesion location and size
- Comorbidities
- Early functional gains

**Predicting Discharge Destination:**
- Initial FIM score
- Cognitive status
- Social support
- Home environment`,
      keyTerms: [
        { term: 'cerebral autoregulation', definition: 'Brain\'s ability to maintain constant blood flow despite blood pressure changes' },
        { term: 'penumbra', definition: 'Brain tissue surrounding stroke core that is at risk but potentially salvageable' },
        { term: 'TOR-BSST', definition: 'Toronto Bedside Swallowing Screening Test - validated dysphagia screening tool' },
        { term: 'CMS 60% rule', definition: 'Medicare regulation requiring 60% of IRF patients have qualifying diagnoses including stroke' },
      ],
      clinicalNotes: 'The AVERT trial showed that higher-dose very early mobilization (within 24 hours) was associated with reduced odds of favorable outcome at 3 months. Current practice emphasizes frequent, shorter mobilization sessions rather than prolonged early activity.',
    },
    5: {
      level: 5,
      summary: 'Acute stroke rehabilitation research is advancing toward precision early intervention approaches, with ongoing investigation of optimal mobilization parameters, neuroprotective rehabilitation strategies, and biomarker-guided treatment intensification.',
      explanation: `## Neuroprotection and Early Rehabilitation

**Theoretical Concerns:**
- Metabolic demand of activity in acute period
- Blood pressure variability and perfusion
- Inflammation modulation
- Excitotoxicity and activity

**Emerging Evidence:**
- Exercise-induced neuroprotection in animal models
- Preconditioning effects of physical activity
- Growth factor release with early activity
- Optimal timing relative to stroke evolution

## AVERT and Beyond

**AVERT Trial Analysis:**
- 2104 patients randomized
- Very early mobilization (<24 hours) safe
- Higher dose associated with worse outcomes
- Spawned numerous secondary analyses

**Unanswered Questions:**
- Optimal timing of first mobilization
- Dose-response relationship
- Patient selection for early intensive mobilization
- Stroke subtype considerations

**Ongoing Research:**
- AVERT-DOSE study
- Timing of mobilization studies
- Enriched rehabilitation environments

## Acute Dysphagia Interventions

**Emerging Treatments:**
- Pharyngeal electrical stimulation
- Transcranial direct current stimulation
- Transcranial magnetic stimulation
- Intensive swallowing exercises

**Research Questions:**
- Optimal timing of intervention
- Candidacy for device-based treatments
- Long-term outcomes of early intervention

## Biomarkers in Acute Rehabilitation

**Potential Applications:**
- Inflammatory markers for rehabilitation timing
- Neuroimaging for mobilization decisions
- Genetic factors affecting early recovery
- Blood-based markers of neuroplasticity

## Systems of Care

**Stroke Center Certification:**
- Rehabilitation requirements in certification
- Variability in acute rehabilitation provision
- Quality metrics for early rehabilitation

**Telemedicine in Acute Stroke:**
- Telestroke for rural settings
- Remote rehabilitation consultation
- Early discharge with telerehabilitation support

## Implementation Science

**Barriers to Evidence-Based Practice:**
- Staffing and resource constraints
- Protocol adherence challenges
- Variability in stroke unit models
- Measurement of rehabilitation intensity

**Quality Improvement:**
- Process metrics for early mobilization
- Swallow screening compliance
- DVT prophylaxis adherence
- Rehabilitation assessment timing

## Economic Considerations

**Cost-Effectiveness:**
- Stroke unit care value
- Early rehabilitation investment
- Complication prevention savings
- Discharge disposition impact

**Value-Based Care Implications:**
- Bundled payments for stroke
- Quality penalties for complications
- Readmission reduction incentives
- Post-acute care optimization`,
      keyTerms: [
        { term: 'enriched environment', definition: 'Rehabilitation setting providing enhanced sensory, cognitive, and motor stimulation' },
        { term: 'pharyngeal electrical stimulation', definition: 'Device-based treatment for dysphagia using electrical stimulation of the pharynx' },
        { term: 'telestroke', definition: 'Telemedicine consultation for acute stroke management in remote locations' },
        { term: 'implementation science', definition: 'Study of methods to promote adoption of evidence-based practices' },
      ],
      clinicalNotes: 'The optimal dose and timing of early mobilization remain under investigation. Current evidence suggests avoiding very high doses of mobilization in the first 24 hours while still preventing complications of immobility. Individualized approaches based on stroke severity, medical stability, and physiological response may be necessary.',
    },
  },

  media: [
    {
      id: 'early-mobilization-protocol',
      type: 'diagram',
      filename: 'early-mobilization-protocol.svg',
      title: 'Early Mobilization Protocol',
      description: 'Flowchart for safe early mobilization after acute stroke',
    },
  ],

  citations: [
    {
      id: 'avert-trial',
      type: 'article',
      title: 'Efficacy and safety of very early mobilisation within 24 h of stroke onset (AVERT)',
      authors: ['AVERT Trial Collaboration group'],
      source: 'Lancet',
    },
    {
      id: 'stroke-unit-trialists',
      type: 'article',
      title: 'Organised inpatient (stroke unit) care for stroke',
      authors: ['Stroke Unit Trialists\' Collaboration'],
      source: 'Cochrane Database of Systematic Reviews',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-stroke-rehabilitation-overview', targetType: 'topic', relationship: 'parent', label: 'Stroke Rehabilitation Overview' },
    { targetId: 'rehab-motor-recovery-stroke', targetType: 'topic', relationship: 'sibling', label: 'Motor Recovery After Stroke' },
  ],

  tags: {
    systems: ['neurological'],
    topics: ['rehabilitation', 'stroke', 'acute care'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default acuteStrokeRehab;
