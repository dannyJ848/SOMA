/**
 * Cardiac Surgery Rehabilitation - Educational Content
 */

import { EducationalContent } from '../../types';

export const cardiacSurgeryRehab: EducationalContent = {
  id: 'rehab-cardiac-surgery-rehab',
  type: 'concept',
  name: 'Cardiac Surgery Rehabilitation',
  alternateNames: ['Heart Surgery Recovery', 'Post-CABG Rehabilitation'],

  levels: {
    1: {
      level: 1,
      summary: 'After heart surgery, rehabilitation helps your heart get stronger and gets you back to normal activities safely.',
      explanation: `After heart surgery like bypass or valve replacement, you need special care and exercises to recover well.

**What to expect:**
- Following sternal (breastbone) precautions
- Starting to walk soon after surgery
- Gradually increasing activity
- Attending cardiac rehabilitation

**Sternal precautions:**
- No pushing, pulling, or lifting heavy things
- Keep arms close to body
- Use a pillow when coughing
- Usually for 6-8 weeks`,
      keyTerms: [
        { term: 'sternum', definition: 'The breastbone that is opened during heart surgery' },
        { term: 'bypass surgery', definition: 'Surgery to create new routes for blood around blocked arteries' },
        { term: 'sternal precautions', definition: 'Rules to protect your healing breastbone' },
      ],
      analogies: ['Sternal precautions protect your healing breastbone like a cast protects a broken arm.'],
      examples: ['Holding a pillow against the chest when coughing after heart surgery.'],
    },
    2: {
      level: 2,
      summary: 'Cardiac surgery rehabilitation combines sternal precautions, progressive mobilization, and cardiac rehabilitation to optimize recovery and prevent complications.',
      explanation: `Recovery after cardiac surgery requires attention to wound healing, cardiac recovery, and gradual return to function.

**Types of Cardiac Surgery:**
- Coronary artery bypass grafting (CABG)
- Valve repair or replacement
- Combined procedures
- Minimally invasive approaches

**Sternal Precautions:**
- Duration: typically 6-8 weeks
- Avoid lifting >10 lbs
- No pushing/pulling with arms
- Support chest when coughing
- Modified precautions for minimally invasive

**Rehabilitation Phases:**

**Phase I (Hospital):**
- Early mobilization
- Breathing exercises
- Progressive walking
- Education

**Phase II (Outpatient):**
- Supervised cardiac rehabilitation
- Progressive exercise
- Risk factor modification
- Psychosocial support

**Key Concerns:**
- Wound healing
- Sternal stability
- Cardiac function
- Deconditioning
- Depression and anxiety`,
      keyTerms: [
        { term: 'CABG', definition: 'Coronary artery bypass grafting - heart bypass surgery' },
        { term: 'Phase I cardiac rehab', definition: 'In-hospital rehabilitation immediately after cardiac event or surgery' },
        { term: 'incentive spirometry', definition: 'Breathing device to help expand lungs after surgery' },
      ],
      analogies: ['Recovery is like building a house - you need a strong foundation (wound healing) before adding weight (activity).'],
    },
    3: {
      level: 3,
      summary: 'Post-cardiac surgery rehabilitation addresses sternal healing, cardiac function optimization, and prevention of complications through evidence-based protocols integrating early mobilization and comprehensive cardiac rehabilitation.',
      explanation: `## Sternal Healing

**Biology:**
- Bone healing takes 6-8 weeks
- Wire or plate fixation
- Factors affecting healing: age, diabetes, obesity, steroids

**Precaution Evidence:**
- Traditional precautions largely opinion-based
- Modern evidence supports earlier mobilization
- Individualized based on surgical factors
- Keep it Moving study supports modified approach

## Early Mobilization

**Benefits:**
- Reduced pulmonary complications
- Shorter length of stay
- Improved functional outcomes
- Enhanced recovery pathways

**Progression:**
- Day 0-1: Sit at edge of bed
- Day 1-2: Transfer to chair, short walks
- Day 2-4: Increasing ambulation
- Discharge: Independent ambulation

## Cardiac Rehabilitation

**Phase I Components:**
- Education about surgery and recovery
- Breathing exercises, incentive spirometry
- Progressive mobilization
- Referral for outpatient rehab

**Phase II Benefits:**
- Improved exercise capacity
- Reduced mortality
- Better quality of life
- Risk factor management

## Complications

**Pulmonary:**
- Atelectasis prevention
- Pneumonia risk
- Pleural effusion
- Breathing exercises critical

**Cardiac:**
- Arrhythmias common
- Heart failure symptoms
- Activity limitations based on function

**Wound:**
- Infection monitoring
- Sternal instability detection
- Healing optimization`,
      keyTerms: [
        { term: 'atelectasis', definition: 'Collapse of lung tissue, common after surgery' },
        { term: 'sternal instability', definition: 'Movement or clicking of the healing breastbone' },
        { term: 'enhanced recovery', definition: 'Evidence-based perioperative care pathways' },
      ],
      clinicalNotes: 'Traditional strict sternal precautions are being modified based on evidence. Keep it Moving approach allows upper extremity use for light ADLs while protecting against high-force activities.',
    },
    4: {
      level: 4,
      summary: 'Advanced cardiac surgery rehabilitation integrates evidence-based sternal management, individualized exercise prescription, and comprehensive secondary prevention within enhanced recovery frameworks.',
      explanation: `## Evidence-Based Sternal Management

**Keep it Moving:**
- Allows light upper extremity activities
- Avoids only high-force activities
- Earlier functional recovery
- Safe with proper education

**Risk Stratification:**
- High-risk: obesity, diabetes, bilateral IMA harvest, reoperation
- Modified precautions based on risk
- Surgeon communication essential

## Exercise Prescription

**Considerations:**
- Surgical factors
- Cardiac function (EF)
- Comorbidities
- Baseline fitness

**Upper Extremity:**
- Modified initially for sternal precautions
- Progress after clearance (6-8 weeks)
- Important for ADL function

**Aerobic Training:**
- Begin in Phase I
- Progress intensity in Phase II
- Target HR and RPE based

## Psychological Care

**Depression:**
- Common post-surgery (15-20%)
- Associated with worse outcomes
- Screening important
- Treatment improves prognosis

**Anxiety:**
- Fear of activity
- Cardiac anxiety syndrome
- Graded exposure
- Reassurance and education

## Special Populations

**TAVR/TAVI:**
- Less invasive valve replacement
- Faster recovery typical
- Still benefits from cardiac rehab
- Individual assessment

**Ventricular Assist Devices:**
- Specialized protocols
- Device-specific considerations
- Exercise with device
- Transplant candidacy`,
      keyTerms: [
        { term: 'bilateral IMA harvest', definition: 'Using both internal mammary arteries for bypass grafts' },
        { term: 'TAVR', definition: 'Transcatheter aortic valve replacement - minimally invasive valve procedure' },
        { term: 'cardiac anxiety syndrome', definition: 'Excessive fear and monitoring of cardiac symptoms' },
      ],
      clinicalNotes: 'Depression screening (PHQ-9) should be routine post-cardiac surgery. Treatment of depression improves cardiac outcomes and quality of life.',
    },
    5: {
      level: 5,
      summary: 'Contemporary cardiac surgery rehabilitation research explores optimal recovery pathways, sternal precaution evidence, and extended rehabilitation benefits to improve long-term cardiovascular outcomes.',
      explanation: `## Research Directions

**Sternal Precautions:**
- Biomechanical studies
- Optimal duration questions
- Individual risk factors
- Alternative fixation techniques

**Enhanced Recovery:**
- Prehabilitation benefits
- Multimodal approaches
- Reduced length of stay
- Complication prevention

**Technology:**
- Remote monitoring
- Wearable integration
- Telerehabilitation
- Activity tracking

## Long-Term Outcomes

**Rehabilitation Impact:**
- Mortality reduction
- Hospitalization prevention
- Quality of life
- Cost-effectiveness

**Secondary Prevention:**
- Risk factor control
- Medication adherence
- Lifestyle modification
- Disease progression prevention

## Implementation

**Barriers:**
- Referral rates
- Patient participation
- Access
- Insurance coverage

**Solutions:**
- Automatic referral
- Alternative delivery models
- Patient engagement
- Policy advocacy`,
      keyTerms: [
        { term: 'prehabilitation', definition: 'Rehabilitation before surgery to optimize outcomes' },
        { term: 'enhanced recovery after surgery', definition: 'Evidence-based perioperative care protocols' },
      ],
      clinicalNotes: 'Automatic referral to cardiac rehabilitation significantly improves enrollment rates post-cardiac surgery and is a Class I recommendation.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-cardiac-rehabilitation-program', targetType: 'topic', relationship: 'related', label: 'Cardiac Rehabilitation Program' },
  ],

  tags: {
    systems: ['cardiovascular'],
    topics: ['rehabilitation', 'cardiac surgery', 'CABG'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cardiacSurgeryRehab;
