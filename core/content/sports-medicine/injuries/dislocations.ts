/**
 * Joint Dislocations - Educational Content
 *
 * Covers joint dislocation pathophysiology, recognition,
 * reduction techniques, and rehabilitation.
 */

import { EducationalContent } from '../../types';

export const dislocationsContent: EducationalContent = {
  id: 'sports-med-dislocations',
  type: 'condition',
  name: 'Joint Dislocations',
  alternateNames: ['Dislocation', 'Joint Luxation'],

  levels: {
    1: {
      level: 1,
      summary: 'A dislocation happens when the bones that form a joint are forced out of their normal position.',
      explanation: `## What is a Dislocation?

When a joint dislocates, the bones that should fit together are separated from their normal alignment.

**Common Sports Dislocations:**
- **Shoulder**: Most common in sports
- **Finger**: Very common in basketball, volleyball
- **Kneecap (Patella)**: Common in cutting sports
- **Elbow**: From falls on outstretched arm

**Signs of a Dislocation:**
- Visible deformity (joint looks wrong)
- Intense pain
- Swelling that develops quickly
- Inability to move the joint
- Joint feels "locked"
- Numbness or tingling beyond the joint

**Immediate Action:**
1. Stop activity immediately
2. Don't try to move or straighten the joint
3. Immobilize the joint in current position
4. Apply ice nearby (not directly on joint)
5. Seek emergency care
6. Do NOT try to pop it back yourself`,
      keyTerms: [
        { term: 'dislocation', definition: 'When joint bones are forced out of normal position' },
        { term: 'deformity', definition: 'Abnormal shape or appearance of the injured area' },
        { term: 'reduce', definition: 'Medical procedure to return dislocated joint to normal position' },
      ],
      analogies: [
        'A dislocation is like a door coming off its hinges - it needs to be put back properly.',
      ],
      examples: [
        'A football player hits their shoulder and it looks deformed.',
        'A basketball player jams their finger and it looks bent.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dislocations involve complete separation of joint surfaces requiring emergency neurovascular assessment, reduction, and appropriate rehabilitation to prevent recurrence.',
      explanation: `## Classification

**Complete vs. Partial Dislocation:**
- Complete dislocation: Joint surfaces completely separated
- Subluxation (partial): Joint surfaces partially separated, often reduces spontaneously

## Common Patterns

**Shoulder Dislocation (95% Anterior):**
- Arm in abduction and external rotation
- Common in football, rugby, hockey
- Can become recurrent problem

**Other Common Dislocations:**
- Finger: Often "popped" back in on field
- Patella: Often reduces spontaneously
- Elbow: Can damage nerves/blood vessels - careful!

## Emergency Assessment

**Vascular Assessment (Critical):**
- Check pulses beyond injury
- Capillary refill time
- Skin temperature and color
- Any sign of vessel injury is emergency

**Neurological Assessment:**
- Sensation distal to injury
- Motor function
- Common nerves at risk:
  - Shoulder: Axillary nerve
  - Elbow: Ulnar, median, radial nerves
  - Knee: Peroneal nerve

## Reduction

**Indications for Immediate Reduction:**
- Neurovascular compromise
- Significant pain
- Joint instability

**Contraindications:**
- No imaging available
- Significant associated fracture
- Inexperienced provider`,
      keyTerms: [
        { term: 'subluxation', definition: 'Partial or incomplete dislocation of a joint' },
        { term: 'capillary refill', definition: 'Time for color to return after pressing skin; assesses circulation' },
        { term: 'anterior dislocation', definition: 'Forward displacement of joint; most common shoulder pattern' },
      ],
      analogies: [
        'Subluxation is like a door that\'s slightly off its hinges but still attached.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dislocations involve specific biomechanical forces causing soft tissue injury requiring systematic evaluation, appropriate reduction technique, and graduated rehabilitation focusing on proprioception and stability.',
      explanation: `## Biomechanics of Dislocation

**Shoulder Dislocation Mechanics:**
- Arm in abduction and external rotation
- Anterior glenoid rim acts as fulcrum
- Humeral head levered over glenoid
- Capsulolabral structures disrupted

**Typical Injury Patterns:**
- Bankart lesion (anterior labrum tear)
- Hill-Sachs lesion (posterolateral humeral head compression)
- Capsular laxity

## Definitive Treatment

**Closed Reduction:**
- Performed in emergency department
- May require sedation or anesthesia
- Confirm with post-reduction X-ray

**Surgical Indications:**
- Recurrent dislocations
- Failed conservative management
- Associated fractures requiring fixation
- Structural damage (labrum, capsule)
- High-level athletes at risk of recurrence

## Rehabilitation Phases

**Phase I: Protection (Weeks 0-2)**
- Immobilization as indicated
- Pendulum exercises
- Grip strengthening
- Pain and inflammation control

**Phase II: Protected Motion (Weeks 2-4)**
- Progressive range of motion
- Isometric strengthening
- Neuromuscular control

**Phase III: Strengthening (Weeks 4-8)**
- Progressive resistance
- Dynamic stabilization
- Core and trunk stability

**Phase IV: Advanced Training (Weeks 8-12+)**
- Plyometric exercises
- Sport-specific drills
- Decision-making under stress`,
      keyTerms: [
        { term: 'Bankart lesion', definition: 'Anterior inferior labral tear associated with anterior shoulder dislocation' },
        { term: 'Hill-Sachs lesion', definition: 'Posterolateral humeral head compression fracture from glenoid impaction' },
        { term: 'proprioception', definition: 'Sense of joint position; essential for stability' },
      ],
      clinicalNotes: 'Age <25 years increases recurrence risk significantly. First-time dislocation in young athletes: consider early stabilization. Post-reduction X-ray is mandatory to confirm successful reduction.',
    },
    4: {
      level: 4,
      summary: 'Dislocation pathophysiology involves complex soft tissue injury patterns including labral tears, capsular disruption, and bony defects that guide surgical decision-making and rehabilitation protocols.',
      explanation: `## Soft Tissue Injury Patterns

**Static Stabilizers (Structures that maintain position):**
- Labrum
- Capsule and ligaments
- Bony anatomy
- Negative pressure in joint

**Dynamic Stabilizers (Active muscles):**
- Rotator cuff (shoulder)
- Dynamic muscle envelope
- Neuromuscular control

**Typical Injuries:**
- Labral tears (Bankart, SLAP)
- Capsular stretching/tearing
- Ligament rupture
- Peri-articular fractures

## Complications

**Acute:**
- Neurovascular injury
- Associated fractures
- Rotator cuff tears (age-dependent)
- Recurrent instability

**Chronic:**
- Chronic instability
- Post-traumatic arthritis
- Avascular necrosis
- Loss of motion

## Recurrence Risk Assessment

**Factors Increasing Recurrence:**
- Age <25 years
- Male sex
- Contact sports participation
- Significant bony lesions
- Ligamentous laxity
- Failure of adequate rehabilitation

**Instability Patterns:**
- Anterior (most common)
- Posterior (5%)
- Multidirectional (atraumatic)`,
      keyTerms: [
        { term: 'SLAP lesion', definition: 'Superior Labrum Anterior Posterior tear; common in throwing athletes' },
        { term: 'avascular necrosis', definition: 'Bone death from blood supply loss; complication of dislocation' },
        { term: 'multidirectional instability', definition: 'Joint instability in multiple directions; often atraumatic' },
      ],
      clinicalNotes: 'Instability Severity Index guides surgical decision-making. Bone loss amount determines open vs. arthroscopic approach. External rotation immobilization may reduce recurrence.',
    },
    5: {
      level: 5,
      summary: 'Contemporary dislocation management integrates advanced imaging, arthroscopic stabilization techniques, individualized return-to-sport criteria, and evolving evidence-based approaches to recurrent instability.',
      explanation: `## Surgical Technique Evolution

**Arthroscopic Stabilization:**
- Suture anchor fixation
- Labral repair and capsular shift
- Remplissage for Hill-Sachs lesions
- Bony augmentation techniques
- Outcomes equivalent to open for many cases

**Open Stabilization:**
- Latarjet procedure (coracoid transfer)
- Bony block procedures
- Revision situations
- Significant bone loss

**Controversy: Arthroscopic vs. Open:**
- Arthroscopic: Less morbidity, better cosmesis
- Open: Traditionally lower recurrence
- Gap narrowing with improved techniques
- Bone loss amount guides decision

## Return to Play Considerations

**Functional Testing:**
- Rotator cuff strength symmetry
- Isokinetic testing
- Sport-specific testing
- Psychological readiness
- Fear of reinjury assessment

**Instability Patterns:**
- Anterior: Most common, TUBS classification
- Posterior: Less common, contact sports
- Multidirectional: AMBRI classification, rehabilitation first-line`,
      keyTerms: [
        { term: 'Latarjet procedure', definition: 'Coracoid process transfer for anterior shoulder instability with bone loss' },
        { term: 'Remplissage', definition: 'Posterior capsulotenodesis to fill Hill-Sachs defect' },
        { term: 'TUBS', definition: 'Traumatic, Unidirectional, Bankart, Surgery - classification for anterior instability' },
      ],
      clinicalNotes: 'Revision surgery has distinct considerations and lower success rates. Bone loss >20% glenoid width requires Latarjet or bony augmentation. Special populations (overhead athletes, collision athletes) require specific approaches.',
    },
  },

  media: [
    {
      id: 'dislocation-types',
      type: 'diagram',
      filename: 'dislocation-types.svg',
      title: 'Common Joint Dislocation Types',
      description: 'Illustration of common dislocation patterns by joint',
    },
  ],

  citations: [
    {
      id: 'dislocation-guidelines',
      type: 'article',
      title: 'Management of Shoulder Instability',
      source: 'Journal of Bone and Joint Surgery',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-shoulder-injuries', targetType: 'topic', relationship: 'related', label: 'Shoulder Injuries' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['dislocation', 'joint-injury', 'sports-medicine', 'orthopedics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'emergency-medicine', 'sports-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dislocationsContent;
