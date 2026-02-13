/**
 * Cancer Surgery Rehabilitation - Educational Content
 */

import { EducationalContent } from '../../types';

export const cancerSurgeryRehab: EducationalContent = {
  id: 'rehab-cancer-surgery-rehab',
  type: 'concept',
  name: 'Cancer Surgery Rehabilitation',
  alternateNames: ['Oncologic Surgery Recovery', 'Post-Cancer Surgery Rehab'],

  levels: {
    1: {
      level: 1,
      summary: 'After cancer surgery, rehabilitation helps you heal, manage side effects, and return to your daily activities.',
      explanation: `Cancer surgery can affect your body in many ways. Rehabilitation helps you recover and deal with any changes from the surgery.

**Why rehabilitation helps:**
- Regain strength and energy
- Manage pain and swelling
- Learn to do daily activities
- Return to work and hobbies

**Common needs after cancer surgery:**
- Exercises to prevent stiffness
- Managing swelling (lymphedema)
- Building back strength
- Emotional support`,
      keyTerms: [
        { term: 'lymphedema', definition: 'Swelling from fluid buildup after lymph nodes are removed' },
        { term: 'range of motion', definition: 'How far you can move a joint' },
        { term: 'fatigue', definition: 'Extreme tiredness that rest does not fully fix' },
      ],
      analogies: ['Rehabilitation after cancer surgery is like rebuilding after a storm - it takes time and support.'],
      examples: ['Gentle arm exercises after breast surgery to prevent stiffness.'],
    },
    2: {
      level: 2,
      summary: 'Cancer surgery rehabilitation addresses procedure-specific impairments including lymphedema, deconditioning, pain, and functional limitations through targeted interventions.',
      explanation: `Rehabilitation needs vary based on cancer type and surgical procedure.

**Common Cancer Surgeries and Rehabilitation Needs:**

**Breast Cancer:**
- Shoulder mobility after mastectomy
- Lymphedema prevention and management
- Chest wall tightness
- Core and upper body strengthening

**Head and Neck Cancer:**
- Swallowing therapy
- Speech therapy
- Neck and shoulder mobility
- Lymphedema management

**Abdominal/Pelvic Cancer:**
- Core strengthening
- Bowel and bladder function
- Pelvic floor rehabilitation
- Deconditioning management

**Lung Cancer:**
- Breathing exercises
- Pulmonary rehabilitation
- Shoulder mobility after thoracotomy
- Endurance training

**Key Rehabilitation Components:**
- Early mobilization
- Range of motion exercises
- Strengthening
- Lymphedema education and management
- Fatigue management
- Return to function planning`,
      keyTerms: [
        { term: 'mastectomy', definition: 'Surgical removal of breast tissue' },
        { term: 'thoracotomy', definition: 'Surgical incision into the chest wall' },
        { term: 'pelvic floor', definition: 'Muscles supporting the bladder, bowel, and reproductive organs' },
      ],
      analogies: ['Each type of cancer surgery needs a custom rehabilitation recipe based on what was affected.'],
    },
    3: {
      level: 3,
      summary: 'Oncologic rehabilitation integrates procedure-specific interventions with cancer rehabilitation principles addressing the unique needs of cancer survivors including lymphedema, deconditioning, and cancer-related fatigue.',
      explanation: `## Cancer Rehabilitation Framework

**Prehabilitation:**
- Optimize function before surgery
- Improve surgical outcomes
- Reduce complications
- Psychological preparation

**Acute Rehabilitation:**
- Immediate post-surgical care
- Complication prevention
- Early mobilization
- Education

**Ongoing Rehabilitation:**
- Address persistent impairments
- Manage late effects
- Survivorship support
- Return to function

## Lymphedema Management

**Risk Reduction:**
- Education about risk factors
- Skin care
- Activity modification
- Compression when appropriate

**Treatment:**
- Complete decongestive therapy (CDT)
- Manual lymphatic drainage
- Compression bandaging/garments
- Exercise with compression

## Cancer-Related Fatigue

**Characteristics:**
- Most common cancer symptom
- Multifactorial etiology
- Exercise is first-line treatment
- Persistent in survivors

**Management:**
- Aerobic exercise
- Energy conservation
- Sleep hygiene
- Medical management of contributing factors

## Exercise in Cancer Survivors

**Evidence:**
- Safe during and after treatment
- Improves fatigue, function, quality of life
- May improve survival (emerging evidence)
- Guidelines recommend 150 min/week moderate activity

**Considerations:**
- Bone metastases: modify weight-bearing
- Cytopenias: infection and bleeding risk
- Lymphedema: exercise with compression
- Fatigue: adjust intensity as needed`,
      keyTerms: [
        { term: 'complete decongestive therapy', definition: 'Comprehensive treatment for lymphedema including drainage, compression, exercise, and skin care' },
        { term: 'cancer-related fatigue', definition: 'Persistent exhaustion related to cancer and its treatment' },
        { term: 'cytopenias', definition: 'Low blood cell counts from cancer treatment' },
      ],
      clinicalNotes: 'Exercise is safe and beneficial during and after cancer treatment. Guidelines recommend oncology rehabilitation assessment for all cancer patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced oncologic rehabilitation addresses complex impairments through multidisciplinary care, evidence-based exercise prescription, and integration with oncology treatment to optimize function and quality of life.',
      explanation: `## Multidisciplinary Approach

**Team Members:**
- Physiatrist (cancer rehabilitation specialist)
- Physical therapist
- Occupational therapist
- Speech-language pathologist
- Lymphedema therapist
- Psychologist/counselor

**Coordination:**
- Oncology team communication
- Treatment timing considerations
- Side effect management
- Survivorship planning

## Complex Impairments

**Chemotherapy-Induced Peripheral Neuropathy:**
- Common and often permanent
- Balance and fall risk
- Hand function impairment
- Sensory retraining, strengthening, compensation

**Radiation Fibrosis:**
- Progressive tissue changes
- Range of motion limitations
- Pain
- Stretching, soft tissue work

**Post-Mastectomy Pain Syndrome:**
- Chronic pain after breast surgery
- Multifactorial
- Multimodal treatment
- Rehabilitation role

## Exercise Prescription

**Safety Screening:**
- Bone metastases assessment
- Cardiovascular clearance
- Blood count considerations
- Treatment timing

**Evidence-Based Guidelines:**
- ACSM roundtable recommendations
- Cancer-specific considerations
- Individualized prescription
- Supervision as needed

## Survivorship

**Long-Term Issues:**
- Persistent fatigue
- Cognitive changes
- Secondary prevention
- Late effects monitoring

**Rehabilitation Role:**
- Ongoing assessment
- Maintenance programs
- Self-management support
- Quality of life optimization`,
      keyTerms: [
        { term: 'CIPN', definition: 'Chemotherapy-induced peripheral neuropathy - nerve damage from chemotherapy' },
        { term: 'radiation fibrosis', definition: 'Scarring and stiffening of tissues from radiation therapy' },
        { term: 'survivorship', definition: 'Period of life after cancer treatment focused on recovery and health' },
      ],
      clinicalNotes: 'Bone metastases require careful rehabilitation assessment. Weight-bearing and high-impact activities may need modification, but immobility increases other risks. Individualized approach with oncology communication is essential.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cancer rehabilitation research explores prehabilitation optimization, exercise-oncology integration, and precision survivorship care to improve outcomes across the cancer continuum.',
      explanation: `## Prehabilitation Research

**Trimodal Approach:**
- Exercise training
- Nutritional optimization
- Psychological preparation

**Evidence:**
- Improved surgical outcomes
- Reduced complications
- Faster recovery
- Growing adoption

## Exercise-Oncology

**Mechanistic Research:**
- Immune function effects
- Tumor microenvironment
- Cachexia prevention
- Survival pathways

**Precision Exercise:**
- Individual response variability
- Biomarker guidance
- Optimal dosing
- Treatment integration

## Implementation

**Barriers:**
- Awareness among oncologists
- Access to specialized care
- Insurance coverage
- Patient factors

**Solutions:**
- Prospective surveillance model
- Embedded rehabilitation
- Telehealth options
- Advocacy and education

## Future Directions

- Biomarker-guided rehabilitation
- Technology integration
- Implementation science
- Health equity focus`,
      keyTerms: [
        { term: 'trimodal prehabilitation', definition: 'Prehabilitation combining exercise, nutrition, and psychological support' },
        { term: 'prospective surveillance model', definition: 'Systematic monitoring of function to detect impairments early' },
        { term: 'cachexia', definition: 'Severe muscle wasting and weight loss in cancer' },
      ],
      clinicalNotes: 'The prospective surveillance model recommends routine functional assessments at key time points to identify rehabilitation needs early, improving outcomes compared to impairment-driven referral.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-post-surgical-rehab-principles', targetType: 'topic', relationship: 'parent', label: 'Post-Surgical Rehab Principles' },
  ],

  tags: {
    systems: ['musculoskeletal', 'oncologic'],
    topics: ['rehabilitation', 'cancer', 'oncology', 'surgery'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cancerSurgeryRehab;
