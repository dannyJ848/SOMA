/**
 * Spine Post-Surgical Rehabilitation - Educational Content
 */

import { EducationalContent } from '../../types';

export const spinePostSurgicalRehab: EducationalContent = {
  id: 'rehab-spine-post-surgical-rehab',
  type: 'concept',
  name: 'Spine Post-Surgical Rehabilitation',
  alternateNames: ['Spinal Surgery Recovery', 'Back Surgery Rehabilitation'],

  levels: {
    1: {
      level: 1,
      summary: 'After spine surgery, rehabilitation helps protect your back while building strength and returning to normal activities.',
      explanation: `After back or neck surgery, you need special care to protect the surgical area while getting stronger.

**What to expect:**
- Following movement precautions
- Learning safe ways to move
- Gradual return to activities
- Building core strength

**Common precautions:**
- No bending, lifting, or twisting at first
- Using a brace if prescribed
- Proper posture when sitting and standing
- Getting up from bed correctly`,
      keyTerms: [
        { term: 'spine', definition: 'The column of bones in your back' },
        { term: 'core muscles', definition: 'Muscles in your trunk that support your spine' },
        { term: 'precautions', definition: 'Movements to avoid to protect your healing' },
      ],
      analogies: ['Your healing spine is like a stack of blocks - you need to be careful not to shift it.'],
      examples: ['Log-rolling out of bed to avoid twisting the spine.'],
    },
    2: {
      level: 2,
      summary: 'Spine surgery rehabilitation follows procedure-specific protocols focusing on spine protection, progressive mobilization, and core stabilization training.',
      explanation: `Spine rehabilitation varies significantly based on the type of surgery performed.

**Types of Spine Surgery:**
- Discectomy/microdiscectomy
- Laminectomy
- Spinal fusion
- Disc replacement
- Decompression procedures

**General Principles:**
- Spine protection during healing
- Early mobilization for circulation
- Progressive activity increase
- Core stabilization focus

**Common Precautions (Fusion):**
- Limit bending, lifting, twisting (BLT)
- Brace wear if prescribed
- No heavy lifting (often >10 lbs initially)
- Duration varies (6-12 weeks typical)

**Rehabilitation Progression:**
- Phase 1: Protection and gentle mobility
- Phase 2: Progressive strengthening
- Phase 3: Functional training
- Phase 4: Return to full activity

**Key Concepts:**
- Core stability vs. core strength
- Neutral spine maintenance
- Body mechanics education
- Activity modification`,
      keyTerms: [
        { term: 'spinal fusion', definition: 'Surgery that joins two or more vertebrae together' },
        { term: 'discectomy', definition: 'Surgical removal of herniated disc material' },
        { term: 'neutral spine', definition: 'Natural alignment of the spine with normal curves' },
      ],
      analogies: ['Core muscles are like a natural back brace - strong muscles support the spine.'],
    },
    3: {
      level: 3,
      summary: 'Post-spine surgery rehabilitation balances protection of surgical site with progressive loading to promote bone healing (fusion) and neuromuscular reconditioning based on procedure-specific considerations.',
      explanation: `## Procedure-Specific Rehabilitation

**Microdiscectomy:**
- Often minimal restrictions
- Early return to activity
- Core stabilization emphasis
- Usually no fusion concerns

**Laminectomy:**
- Similar to discectomy approach
- Extent of surgery matters
- Stability assessment important

**Spinal Fusion:**
- Fusion healing requires 3-6+ months
- BLT restrictions during fusion
- Brace often prescribed
- Adjacent segment considerations

**Disc Replacement:**
- Motion preservation surgery
- Different rehab than fusion
- Earlier mobility often allowed
- Manufacturer guidelines vary

## Rehabilitation Components

**Phase I (0-6 weeks):**
- Protection of surgical site
- Walking program
- Gentle ROM within precautions
- Core activation (isometric)
- Patient education

**Phase II (6-12 weeks):**
- Progress strengthening
- Reduce precautions as cleared
- Functional training
- Endurance building

**Phase III (12+ weeks):**
- Advanced strengthening
- Sport/work-specific training
- Full function restoration
- Prevention focus

## Outcome Measures

- Oswestry Disability Index
- Neck Disability Index
- Visual Analog Scale (pain)
- SF-36 quality of life
- Return to work status`,
      keyTerms: [
        { term: 'BLT restrictions', definition: 'Bending, lifting, twisting limitations after spine surgery' },
        { term: 'adjacent segment', definition: 'Spine levels next to the fusion that may be affected' },
        { term: 'Oswestry Disability Index', definition: 'Questionnaire measuring low back disability' },
      ],
      clinicalNotes: 'Fusion healing timelines vary by patient factors (smoking, diabetes, bone quality) and surgical factors (levels fused, instrumentation). Protocols should be individualized based on surgeon guidance.',
    },
    4: {
      level: 4,
      summary: 'Advanced spine rehabilitation integrates motor control retraining, fear-avoidance management, and evidence-based exercise progression to optimize functional outcomes and prevent recurrence.',
      explanation: `## Motor Control Dysfunction

**Altered Patterns:**
- Multifidus atrophy
- Altered recruitment patterns
- Proprioceptive deficits
- Movement system changes

**Retraining Principles:**
- Isolated activation before integration
- Low-load precision training
- Progressive complexity
- Functional integration

## Psychosocial Factors

**Fear-Avoidance:**
- Common after spine surgery
- Limits recovery
- Requires specific intervention
- Graded exposure approaches

**Catastrophizing:**
- Associated with poor outcomes
- May need psychological support
- Education and reassurance
- Cognitive-behavioral techniques

## Evidence-Based Exercise

**Core Stabilization:**
- Local stabilizers (multifidus, transversus)
- Global stabilizers
- Motor control emphasis
- Functional integration

**Progression:**
- Static to dynamic
- Stable to unstable
- Simple to complex
- Low to high load

## Return to Activity

**Work:**
- Job demands analysis
- Functional capacity evaluation
- Work conditioning
- Ergonomic modifications

**Sport:**
- Sport-specific demands
- Progressive return
- Strength and conditioning
- Risk management`,
      keyTerms: [
        { term: 'multifidus', definition: 'Deep back muscle important for spine stability' },
        { term: 'fear-avoidance', definition: 'Behavior where fear of pain leads to activity avoidance' },
        { term: 'motor control', definition: 'The ability to regulate movement patterns' },
      ],
      clinicalNotes: 'Multifidus atrophy occurs rapidly after spine surgery and may persist. Specific motor control exercises targeting multifidus activation are important for recovery.',
    },
    5: {
      level: 5,
      summary: 'Contemporary spine rehabilitation research explores optimal movement restoration strategies, biologics for fusion enhancement, and precision rehabilitation to improve outcomes and reduce chronic pain development.',
      explanation: `## Emerging Research

**Movement System:**
- Classification-based treatment
- Subgroup identification
- Targeted intervention
- Outcome optimization

**Biologics:**
- Bone morphogenetic proteins
- Stem cell applications
- Growth factor enhancement
- Accelerated fusion

**Technology:**
- Wearable monitoring
- Movement analysis
- Biofeedback training
- Remote supervision

## Chronic Pain Prevention

**Risk Factors:**
- Preoperative chronic pain
- Psychological factors
- Surgical factors
- Rehabilitation quality

**Prevention:**
- Early aggressive treatment
- Psychosocial screening
- Multimodal intervention
- Long-term follow-up

## Future Directions

- Personalized protocols
- Outcome prediction models
- Technology integration
- Value-based care alignment`,
      keyTerms: [
        { term: 'movement system', definition: 'Integrated system of muscles, joints, and neurological control' },
        { term: 'biologics', definition: 'Biological substances used to enhance healing' },
      ],
      clinicalNotes: 'Failed back surgery syndrome remains a significant challenge. Preoperative identification of risk factors and comprehensive rehabilitation may help reduce this outcome.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [
    { targetId: 'rehab-post-surgical-rehab-principles', targetType: 'topic', relationship: 'parent', label: 'Post-Surgical Rehab Principles' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological'],
    topics: ['rehabilitation', 'spine surgery', 'back pain'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spinePostSurgicalRehab;
