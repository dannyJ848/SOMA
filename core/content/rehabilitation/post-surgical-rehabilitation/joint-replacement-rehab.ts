/**
 * Joint Replacement Rehabilitation - Educational Content
 */

import { EducationalContent } from '../../types';

export const jointReplacementRehab: EducationalContent = {
  id: 'rehab-joint-replacement-rehab',
  type: 'concept',
  name: 'Joint Replacement Rehabilitation',
  alternateNames: ['Arthroplasty Rehabilitation', 'Hip and Knee Replacement Recovery'],

  levels: {
    1: {
      level: 1,
      summary: 'After a joint replacement, rehabilitation helps your new joint work well and gets you back to walking and daily activities.',
      explanation: `When you get a new hip or knee joint, you need special exercises to help it work properly. Physical therapy teaches you how to use your new joint safely.

**What to expect:**
- Start moving the day of or after surgery
- Use a walker or crutches at first
- Follow weight-bearing instructions
- Do exercises several times a day

**Goals:**
- Walk without aids
- Climb stairs
- Get in and out of chairs
- Return to normal activities`,
      keyTerms: [
        { term: 'joint replacement', definition: 'Surgery to replace a damaged joint with an artificial one' },
        { term: 'weight-bearing', definition: 'How much weight you can put on your leg' },
        { term: 'range of motion', definition: 'How far the joint can bend and straighten' },
      ],
      analogies: ['A new joint is like a new hinge on a door - it needs to be used properly to work well.'],
      examples: ['Walking in the hospital hallway the day after knee replacement surgery.'],
    },
    2: {
      level: 2,
      summary: 'Joint replacement rehabilitation follows standardized protocols emphasizing early mobilization, range of motion, strengthening, and functional training to optimize outcomes.',
      explanation: `Joint replacement (arthroplasty) rehabilitation has evolved significantly with enhanced recovery protocols.

**Hip Replacement Rehabilitation:**
- Early mobilization within 24 hours
- Precautions depend on surgical approach
- Progressive weight-bearing
- Focus on hip flexor and abductor strength
- Gait training without Trendelenburg

**Knee Replacement Rehabilitation:**
- Early range of motion critical
- Weight-bearing as tolerated typically
- Quadriceps activation and strengthening
- Flexion and extension goals
- Stair training and transfers

**Timeline:**
- Day 1: Out of bed, standing, short walks
- Week 1-2: Independent transfers, bathroom
- Week 2-6: Progress strength and mobility
- Week 6-12: Return to most activities
- 3-6 months: Full recovery

**Key Exercises:**
- Ankle pumps and leg exercises
- Quadriceps and gluteal sets
- Straight leg raises
- Range of motion exercises
- Progressive walking program`,
      keyTerms: [
        { term: 'arthroplasty', definition: 'Surgical reconstruction or replacement of a joint', pronunciation: 'ar-THRO-plas-tee' },
        { term: 'Trendelenburg gait', definition: 'Hip drop when walking due to weak hip muscles' },
        { term: 'quadriceps set', definition: 'Tightening the thigh muscle while keeping the leg straight' },
      ],
      analogies: ['Rehabilitation is like breaking in a new pair of shoes - you need to use them gradually.'],
    },
    3: {
      level: 3,
      summary: 'Total joint arthroplasty rehabilitation integrates rapid recovery protocols, surgical approach-specific precautions, and evidence-based progression to achieve early function while protecting implant integrity.',
      explanation: `## Rapid Recovery Protocols

**Components:**
- Preoperative education and optimization
- Multimodal pain management
- Early mobilization (day of surgery)
- Standardized therapy pathways
- Early discharge planning

**Evidence:**
- Reduced length of stay
- Equivalent or better outcomes
- Cost savings
- Patient satisfaction

## Hip Arthroplasty

**Surgical Approach Considerations:**

| Approach | Precautions | Rationale |
|----------|-------------|-----------|
| Posterior | Avoid flexion >90°, internal rotation, adduction | Posterior capsule disrupted |
| Anterior | Avoid extension, external rotation | Anterior structures at risk |
| Lateral | Variable | Abductor protection |

**Modern Trends:**
- Anterior approach often has fewer precautions
- Surgeon preference varies
- Soft tissue healing still important
- Individual assessment needed

## Knee Arthroplasty

**Range of Motion Goals:**
- Extension: 0° (full)
- Flexion: 120° minimum for function
- Early CPM debated (mixed evidence)
- Active-assisted motion critical

**Quadriceps Function:**
- Preoperative strength predicts recovery
- Arthrogenic muscle inhibition common
- Emphasis on early activation
- NMES may augment recovery

## Outcome Predictors

**Preoperative:**
- Age, BMI, comorbidities
- Baseline function
- Psychological factors
- Pain catastrophizing

**Perioperative:**
- Surgical factors
- Pain control
- Early mobility achievement

**Rehabilitation:**
- Therapy adherence
- Goal achievement
- Complication avoidance`,
      keyTerms: [
        { term: 'arthrogenic muscle inhibition', definition: 'Reflex quadriceps weakness due to knee joint pathology' },
        { term: 'CPM', definition: 'Continuous passive motion - machine that moves the joint' },
        { term: 'NMES', definition: 'Neuromuscular electrical stimulation' },
      ],
      clinicalNotes: 'Anterior approach hip replacement often has minimal or no precautions, but individual surgeon protocols vary. Always confirm specific precautions with the surgical team.',
    },
    4: {
      level: 4,
      summary: 'Advanced joint replacement rehabilitation optimizes outcomes through prehabilitation, individualized progression based on functional milestones, and integration of technology-assisted monitoring and training.',
      explanation: `## Prehabilitation

**Components:**
- Exercise training
- Nutritional optimization
- Medical optimization
- Education and expectation setting

**Evidence:**
- Improved postoperative function
- Faster discharge
- Potential cost savings
- Better patient engagement

## Individualized Progression

**Milestone-Based Criteria:**
- Independence with transfers
- Safe ambulation distance
- ROM achievement
- Pain control
- Wound healing

**Outpatient Phase:**
- Home vs. facility rehabilitation
- Individual vs. group therapy
- Frequency and duration optimization
- Progression criteria

## Technology Integration

**Wearable Monitoring:**
- Activity levels
- Gait parameters
- ROM tracking
- Adherence measurement

**Telerehabilitation:**
- Remote exercise supervision
- Outcome tracking
- Cost-effective alternative
- Equivalent outcomes in studies

## Special Considerations

**Bilateral Arthroplasty:**
- Staged vs. simultaneous
- Modified rehabilitation
- Additional support needs

**Revision Surgery:**
- Extended precautions
- Bone loss considerations
- Prolonged recovery
- Psychological support

**Complex Patients:**
- Obesity: mechanical challenges
- Diabetes: healing concerns
- Neurological conditions: motor control
- Psychological factors: pain, depression

## Long-Term Outcomes

**Implant Longevity:**
- 15-20+ years typical
- Activity modification debates
- High-impact concerns
- Revision rates declining`,
      keyTerms: [
        { term: 'prehabilitation', definition: 'Rehabilitation before surgery to optimize outcomes' },
        { term: 'revision arthroplasty', definition: 'Replacement of a previously implanted artificial joint' },
        { term: 'telerehabilitation', definition: 'Rehabilitation delivered remotely via technology' },
      ],
      clinicalNotes: 'Telerehabilitation has shown equivalent outcomes to in-person therapy for joint replacement in several trials, offering an important alternative for patients with access barriers.',
    },
    5: {
      level: 5,
      summary: 'Contemporary joint arthroplasty rehabilitation research addresses precision rehabilitation approaches, optimal care pathways, and long-term outcomes to maximize value and patient-centered outcomes across diverse populations.',
      explanation: `## Precision Rehabilitation

**Phenotyping:**
- Preoperative function clusters
- Pain phenotypes
- Psychological profiles
- Recovery trajectory prediction

**Personalized Protocols:**
- Risk-stratified intensity
- Adaptive progression
- Targeted interventions
- Resource optimization

## Value-Based Care

**Bundled Payments:**
- Episode of care models
- Quality incentives
- Provider accountability
- Cost containment

**Quality Metrics:**
- Readmission rates
- Complication rates
- Patient-reported outcomes
- Functional achievement

## Research Frontiers

**Optimal Dosing:**
- Therapy frequency and duration
- Home vs. supervised
- High-intensity vs. standard
- Maintenance requirements

**Technology:**
- AI for outcome prediction
- Smart implants
- Remote monitoring
- Virtual reality

## Implementation

**Pathway Standardization:**
- Evidence-based protocols
- Multidisciplinary coordination
- Quality improvement
- Outcome tracking

**Disparities:**
- Access to quality rehabilitation
- Socioeconomic factors
- Geographic variation
- Equity considerations`,
      keyTerms: [
        { term: 'bundled payment', definition: 'Single payment covering entire episode of care' },
        { term: 'precision rehabilitation', definition: 'Individualized therapy based on patient characteristics' },
      ],
      clinicalNotes: 'Patient-reported outcome measures (PROMs) are increasingly used for quality assessment in joint replacement. Common measures include HOOS/KOOS, Oxford Hip/Knee scores, and PROMIS measures.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-post-surgical-rehab-principles', targetType: 'topic', relationship: 'parent', label: 'Post-Surgical Rehab Principles' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['rehabilitation', 'arthroplasty', 'joint replacement'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default jointReplacementRehab;
