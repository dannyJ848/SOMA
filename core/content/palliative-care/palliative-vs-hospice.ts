/**
 * Palliative Care vs Hospice Care - Educational Content
 *
 * Explains the key differences between palliative care and hospice care,
 * helping patients and families understand their options.
 */

import { EducationalContent } from '../types';

export const palliativeVsHospiceCare: EducationalContent = {
  id: 'concept-palliative-vs-hospice',
  type: 'concept',
  name: 'Palliative Care vs Hospice Care',
  alternateNames: ['Comfort Care Options', 'End-of-Life Care Types', 'Supportive Care'],

  levels: {
    1: {
      level: 1,
      summary: 'Palliative care helps with serious illness at any stage, while hospice care is for when treatments to cure the illness are no longer being tried.',
      explanation: `When someone has a serious illness, there are special types of care that focus on making them feel better and helping with difficult symptoms. Two important types are palliative care and hospice care.

**Palliative Care** is like having an extra team of helpers who focus on making you feel as good as possible while you are sick. You can have palliative care even if you are still trying treatments to get better. The goal is to help with pain, tiredness, worry, and other hard parts of being sick.

**Hospice Care** is a special kind of care for when the illness is very serious and treatments to cure it are no longer working or wanted. Hospice focuses completely on comfort and spending quality time with family. Most hospice care happens at home.

Both types of care are about:
- Helping with pain and other symptoms
- Supporting the whole family
- Making each day as good as possible

The main difference is that palliative care can happen alongside treatment, while hospice is for when the focus shifts entirely to comfort.`,
      keyTerms: [
        { term: 'palliative care', definition: 'Extra care focused on feeling better while dealing with a serious illness' },
        { term: 'hospice care', definition: 'Special care for comfort when cure is no longer the goal' },
        { term: 'symptom', definition: 'Something that shows you are sick, like pain or tiredness' },
        { term: 'comfort care', definition: 'Care that focuses on feeling as good as possible' },
      ],
      analogies: [
        'Palliative care is like having a pit crew during a race - they help you keep going while you are still racing. Hospice is like when the race is ending and the focus is on crossing the finish line peacefully.',
        'Think of palliative care as an umbrella that protects you from the rain while you keep walking. Hospice is like finding a warm, dry shelter when you are ready to rest.',
      ],
      examples: [
        'A person with cancer might have palliative care to help with pain while still getting chemotherapy.',
        'When treatments are no longer helping and someone wants to be comfortable at home, they might choose hospice care.',
      ],
    },
    2: {
      level: 2,
      summary: 'Palliative care is specialized medical care for people with serious illnesses that can be provided at any stage, while hospice care specifically serves patients with a prognosis of six months or less who have chosen to focus on comfort rather than cure.',
      explanation: `**Palliative Care: Comfort Throughout Illness**

Palliative care is a specialty focused on improving quality of life for people facing serious illness. Key features include:

- **Timing**: Can start at diagnosis and continue alongside curative treatments
- **Goals**: Relief from symptoms, pain, and stress of illness
- **Team**: Doctors, nurses, social workers, chaplains work together
- **Settings**: Hospitals, outpatient clinics, or at home
- **Insurance**: Covered like other medical care (regular insurance, Medicare, Medicaid)

**Hospice Care: Comfort at End of Life**

Hospice care is a specific type of palliative care for patients nearing the end of life:

- **Timing**: Typically when prognosis is 6 months or less if disease runs its natural course
- **Goals**: Comfort, dignity, and quality of life rather than cure
- **Team**: Similar to palliative care, plus volunteers and bereavement support
- **Settings**: Usually at home, but also nursing homes, hospice facilities
- **Insurance**: Medicare, Medicaid, and most private insurance cover hospice fully

**Key Differences**

| Aspect | Palliative Care | Hospice Care |
|--------|-----------------|--------------|
| Stage of illness | Any stage | End of life (6 months or less) |
| Curative treatment | Can continue | Typically stops |
| Location | Hospital, clinic, home | Primarily home |
| Certification | None needed | Doctor certifies prognosis |

Both share the philosophy that managing symptoms and supporting patients and families is essential to good medical care.`,
      keyTerms: [
        { term: 'prognosis', definition: 'A prediction about how an illness will likely progress and the expected outcome', pronunciation: 'prog-NOH-sis' },
        { term: 'quality of life', definition: 'How good or satisfying daily life feels, including physical comfort and emotional well-being' },
        { term: 'curative treatment', definition: 'Treatment aimed at curing or eliminating a disease' },
        { term: 'bereavement', definition: 'The period of grief and mourning after someone dies', pronunciation: 'bih-REEV-ment' },
      ],
      analogies: [
        'Palliative care is like a GPS that helps you navigate through illness with the best possible route, whether you reach your destination or need to change course. Hospice is when you have arrived at the final destination and want to make it as peaceful as possible.',
      ],
    },
    3: {
      level: 3,
      summary: 'Palliative care addresses physical, psychological, social, and spiritual needs throughout serious illness, while hospice is a Medicare/Medicaid benefit requiring terminal prognosis certification and typically involves foregoing disease-modifying treatments.',
      explanation: `## Palliative Care: Comprehensive Supportive Care

**Definition and Scope**
Palliative care is specialized medical care focused on providing relief from symptoms, pain, and stress of serious illness. The World Health Organization defines it as an approach that improves quality of life through prevention and relief of suffering via early identification, assessment, and treatment of physical, psychological, social, and spiritual problems.

**Key Components**
1. **Symptom Management**: Pain, dyspnea, nausea, fatigue, anxiety, depression
2. **Communication**: Goals of care discussions, prognostic awareness
3. **Care Coordination**: Integration with disease-directed therapies
4. **Psychosocial Support**: Addressing emotional, social, spiritual needs
5. **Advance Care Planning**: Documenting preferences and values

**Clinical Settings**
- Inpatient consultation services
- Outpatient palliative care clinics
- Community-based palliative care
- Integration into primary care and specialty practices

**Evidence Base**
Studies demonstrate that early palliative care:
- Improves quality of life
- Reduces depression and anxiety
- May extend survival in some cancers
- Decreases healthcare utilization
- Improves caregiver outcomes

## Hospice Care: End-of-Life Specialty

**Eligibility and Certification**
- Two physicians must certify life expectancy of 6 months or less
- Patient elects hospice benefit (forgoing curative treatment)
- Regular recertification required (day 90, 90, then every 60 days)

**Medicare Hospice Benefit (established 1982)**
Four levels of care:
1. **Routine Home Care**: Standard daily rate (~$200/day)
2. **Continuous Home Care**: Crisis management (up to 24-hour nursing)
3. **General Inpatient Care**: Acute symptom management in facility
4. **Inpatient Respite Care**: Temporary caregiver relief (up to 5 days)

**Hospice Services Include**
- Physician services
- Nursing care
- Medical equipment and supplies
- Medications for symptom management
- Home health aide services
- Physical, occupational, speech therapy
- Social work and chaplaincy
- Bereavement support for 13 months after death

**Choosing Between Palliative Care and Hospice**

Transition to hospice is appropriate when:
- Prognosis is 6 months or less
- Goals shift from disease-directed therapy to comfort
- Patient and family are ready
- Symptoms are better managed with hospice resources

Many patients benefit from palliative care first, transitioning to hospice when appropriate.`,
      keyTerms: [
        { term: 'disease-modifying treatment', definition: 'Therapy aimed at changing the course of illness rather than just managing symptoms' },
        { term: 'prognostic awareness', definition: 'Understanding and acknowledgment of the likely course and outcome of an illness' },
        { term: 'hospice benefit', definition: 'Medicare/Medicaid coverage for comprehensive end-of-life care' },
        { term: 'general inpatient care', definition: 'Hospice level of care providing acute symptom management in a facility setting' },
        { term: 'respite care', definition: 'Temporary relief for family caregivers through short-term facility placement' },
      ],
      clinicalNotes: 'Early palliative care referral is recommended for all patients with serious illness. The Temel study (2010) showed lung cancer patients receiving early palliative care had better quality of life, less depression, and survived 2.7 months longer than usual care.',
    },
    4: {
      level: 4,
      summary: 'Palliative medicine is an interdisciplinary specialty addressing multidimensional suffering through systematic symptom assessment, prognostic communication, and care coordination, while hospice operates as a regulated benefit with specific eligibility criteria and care delivery models.',
      explanation: `## Palliative Care: Clinical Framework

### Assessment Frameworks

**Edmonton Symptom Assessment System (ESAS)**
Nine symptoms rated 0-10:
- Pain, tiredness, drowsiness, nausea, appetite, dyspnea, depression, anxiety, wellbeing

**Palliative Performance Scale (PPS)**
Functional assessment tool (0-100%) evaluating:
- Ambulation, activity, self-care, intake, consciousness

**IPOS (Integrated Palliative Care Outcome Scale)**
Patient-reported outcomes measuring physical and psychological symptoms

### Prognostic Tools

**Palliative Prognostic Score (PaP)**
Factors: Karnofsky PS, clinical prediction of survival, dyspnea, anorexia, WBC, lymphocyte %
- Groups into 30-day survival probability categories

**Palliative Prognostic Index (PPI)**
Uses: PPS, oral intake, edema, dyspnea at rest, delirium
- Predicts 3-week and 6-week survival

**Surprise Question**
"Would I be surprised if this patient died in the next 12 months?"
- Negative answer (no surprise) suggests palliative care referral

### Specialty Palliative Care Indications

**Primary Criteria (CAPC)**
- Difficult to control symptoms
- Complex psychosocial issues
- Uncertainty regarding goals of care
- Need for care coordination
- Limited prognosis with ongoing curative therapy

**Secondary Triggers**
- Multiple hospitalizations (>2 in 6 months)
- ICU admission with multiorgan failure
- Prolonged mechanical ventilation
- Difficult-to-manage symptoms
- Conflict regarding goals of care

## Hospice Care: Regulatory and Clinical Framework

### Eligibility Determination

**General Guidelines**
Life-limiting prognosis of 6 months if disease runs its normal course, based on:
1. Disease-specific criteria (LCD guidelines)
2. Functional decline trajectory
3. Nutritional compromise
4. Recurring infections or hospitalizations

**Disease-Specific Criteria Examples**

**Heart Failure**
- NYHA Class IV symptoms at rest
- EF <20%
- Optimal medical therapy
- History of cardiac arrest or arrhythmias

**COPD/Pulmonary Disease**
- Dyspnea at rest
- FEV1 <30% predicted
- Cor pulmonale/right heart failure
- Unintentional weight loss >10%
- Resting tachycardia >100

**Dementia**
- FAST Stage 7 (unable to speak, ambulate, sit independently)
- Recurrent aspiration or infection
- Eating difficulties despite feeding assistance

**Cancer**
- Distant metastases at presentation
- Progression through first-line therapy
- Declining performance status
- Weight loss, declining albumin

### Hospice Care Delivery Models

**Routine Home Care**
- Intermittent visits by hospice team
- Family/caregivers provide day-to-day care
- 24/7 on-call support available

**Continuous Home Care (CHC)**
- Minimum 8 hours nursing/aide in 24-hour period
- For acute symptom crisis
- Must document symptoms requiring continuous care

**General Inpatient (GIP)**
- Short-term acute management
- Symptoms not manageable at home
- Clear documentation of symptom control need

**Inpatient Respite**
- Up to 5 consecutive days
- Caregiver relief
- Can be in SNF, hospital, or hospice facility

### Quality Metrics

**Hospice Quality Reporting Program (HQRP)**
- CAHPS Hospice Survey
- Hospice Item Set (HIS) measures
- Visits in last days of life
- Pain screening and assessment`,
      keyTerms: [
        { term: 'Local Coverage Determination (LCD)', definition: 'Medicare guidelines specifying disease-specific hospice eligibility criteria' },
        { term: 'FAST Stage', definition: 'Functional Assessment Staging Tool for dementia, stages 1-7', pronunciation: 'fast' },
        { term: 'Karnofsky Performance Status', definition: 'Scale 0-100 assessing functional impairment, with 100 being normal function' },
        { term: 'continuous home care', definition: 'Hospice benefit level with 8+ hours nursing/aide for symptom crisis' },
        { term: 'Surprise Question', definition: 'Prognostic screening tool asking if death within 12 months would be surprising' },
      ],
      clinicalNotes: 'Median hospice length of stay is only 17 days nationally, with many patients referred in final days of life. Late referrals are associated with worse outcomes including more emergency visits, less bereavement support, and family distress. Palliative care consultation can improve hospice timing.',
    },
    5: {
      level: 5,
      summary: 'Palliative medicine integration requires systems-level implementation across care settings, while hospice optimization involves understanding regulatory compliance, quality metrics, and the evolving landscape of value-based serious illness care.',
      explanation: `## Palliative Care: Systems Integration

### Implementation Models

**Consultative Model**
- Inpatient consultation team
- Outpatient clinic
- Triggered by primary team or automatic criteria

**Integrative Model**
- Primary palliative care by all clinicians
- Specialty palliative care for complex cases
- Education and capacity building

**Co-Management Model**
- Ongoing shared care between oncology/specialty and palliative medicine
- Regular joint clinics or embedded services

### Quality and Outcomes Research

**Key Studies**

*Temel et al., NEJM 2010*
- Early palliative care in metastatic NSCLC
- Improved QOL, less depression, fewer aggressive EOL treatments
- Median survival: 11.6 vs 8.9 months (p=0.02)

*Bakitas et al., JAMA 2009 (ENABLE)*
- Nurse-led telehealth palliative care
- Improved QOL and mood

*Zimmermann et al., Lancet 2014*
- Cluster RCT of early palliative care
- Improved satisfaction and symptom control

**Cost Effectiveness**
- Morrison et al., 2008: Hospital palliative care consultation reduced costs by $1,696-4,908/admission
- Medicare beneficiaries with serious illness: Palliative care associated with reduced costs without affecting mortality

### Workforce and Training

**Board Certification**
- Subspecialty certification in Hospice and Palliative Medicine
- ABMS recognized since 2006
- 1-year fellowship after primary specialty

**Core Competencies**
- Symptom assessment and management
- Communication skills (SPIKES, NURSE, serious illness conversations)
- Ethical decision-making
- Care coordination
- Grief and bereavement
- Team leadership

## Hospice Care: Advanced Topics

### Regulatory Landscape

**Conditions of Participation (CoPs)**
CMS requirements for Medicare-certified hospices:
- Governing body and administrator
- Medical director oversight
- Interdisciplinary team composition
- QAPI program
- Plan of care requirements

**OIG Focus Areas**
- GIP appropriateness and documentation
- Lengthy stays with recertification
- Live discharges and revocations
- Related-party transactions

### Financial Considerations

**Payment Models**
- Per diem rates (adjusted by geographic area)
- FY 2024 rates: Routine ~$211, CHC ~$1,057, GIP ~$1,045, Respite ~$483
- Aggregate cap (~$33,494/patient/year)

**Hospice Ownership Trends**
- Increasing for-profit ownership (>70%)
- Private equity involvement
- Consolidation of smaller hospices

### Quality Improvement

**Hospice Compare Measures**
1. Beliefs/values addressed
2. Treatment preferences
3. Pain screening
4. Pain assessment
5. Dyspnea screening
6. Dyspnea treatment
7. Visits in last 3 days

**CAHPS Hospice Survey Domains**
- Communication
- Timeliness of care
- Respect
- Emotional and spiritual support
- Help for symptoms
- Training for family caregivers
- Rating and willingness to recommend

### Emerging Models

**Palliative Care and Hospice Integration**
- "Bridge" palliative care programs
- Concurrent care demonstrations
- CMMI value-based models

**Hospital-Based Palliative Care**
- Mandated in some states (California SB 1004)
- Accreditation standards (JC, ACHC)

**Community-Based Serious Illness Care**
- Accountable care arrangements
- Serious illness care programs
- Home-based primary care integration

### Ethical Considerations

**Common Challenges**
1. Prognostic uncertainty and "6-month" criterion
2. Medication management (opioids, sedation)
3. Artificial nutrition/hydration decisions
4. Voluntary stopping eating and drinking (VSED)
5. Cultural and religious considerations
6. Pediatric hospice and perinatal palliative care

**Palliative Sedation**
- Defined as sedation to unconsciousness for refractory symptoms
- Requires informed consent, symptom refractoriness, imminent death
- Distinguished from euthanasia by intent and proportionality`,
      keyTerms: [
        { term: 'QAPI', definition: 'Quality Assessment and Performance Improvement program required for hospice certification' },
        { term: 'aggregate cap', definition: 'Maximum Medicare payment per patient per year for hospice services' },
        { term: 'ENABLE', definition: 'Educate, Nurture, Advise Before Life Ends - evidence-based telehealth palliative care model' },
        { term: 'palliative sedation', definition: 'Use of sedatives to reduce consciousness for refractory symptoms at end of life' },
        { term: 'VSED', definition: 'Voluntary stopping eating and drinking - patient choice to hasten death by refusing nutrition/hydration' },
        { term: 'concurrent care', definition: 'Model allowing disease-directed treatment alongside hospice care' },
      ],
      clinicalNotes: `Critical considerations for clinicians:
1. Document "surprise question" and prognostic discussions in the medical record
2. Use validated tools (PPS, PPI, disease-specific criteria) for hospice eligibility
3. Understand GIP documentation requirements to avoid audit risk
4. Early palliative care referral improves outcomes - dont wait for "hospice-appropriate"
5. Quality hospices have high CAHPS scores and appropriate length of stay (avoid very short stays)
6. Be aware of state-specific hospice regulations and requirements`,
    },
  },

  media: [
    {
      id: 'palliative-hospice-comparison-diagram',
      type: 'diagram',
      filename: 'palliative-hospice-comparison.svg',
      title: 'Palliative Care vs Hospice Care',
      description: 'Visual comparison of timing, services, and goals of palliative and hospice care',
    },
    {
      id: 'care-trajectory-diagram',
      type: 'diagram',
      filename: 'serious-illness-care-trajectory.svg',
      title: 'Serious Illness Care Trajectory',
      description: 'Timeline showing how palliative care and hospice fit into the illness journey',
    },
  ],

  citations: [
    {
      id: 'temel-nejm-2010',
      type: 'article',
      title: 'Early Palliative Care for Patients with Metastatic Non-Small-Cell Lung Cancer',
      authors: ['Temel, J.S.', 'Greer, J.A.', 'Muzikansky, A.', 'et al.'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMoa1000678',
    },
    {
      id: 'who-palliative-care',
      type: 'website',
      title: 'Palliative Care Fact Sheet',
      source: 'World Health Organization',
      url: 'https://www.who.int/news-room/fact-sheets/detail/palliative-care',
    },
    {
      id: 'nhpco-facts-figures',
      type: 'website',
      title: 'NHPCO Facts and Figures',
      source: 'National Hospice and Palliative Care Organization',
      url: 'https://www.nhpco.org/research',
    },
  ],

  crossReferences: [
    { targetId: 'concept-when-to-consider-palliative', targetType: 'concept', relationship: 'related', label: 'When to Consider Palliative Care' },
    { targetId: 'concept-advance-directives', targetType: 'concept', relationship: 'related', label: 'Advance Directives' },
    { targetId: 'concept-goals-of-care', targetType: 'concept', relationship: 'related', label: 'Goals of Care Conversations' },
    { targetId: 'concept-comfort-care', targetType: 'concept', relationship: 'related', label: 'Comfort Care Measures' },
  ],

  tags: {
    systems: ['palliative-care', 'end-of-life'],
    topics: ['palliative medicine', 'hospice', 'supportive care', 'serious illness'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default palliativeVsHospiceCare;
