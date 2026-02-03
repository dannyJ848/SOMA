import { EducationalContent } from '../../types';

export const dislocationsContent: EducationalContent = {
  id: 'ortho-patient-dislocations',
  type: 'condition',
  name: 'Dislocations',
  alternateNames: ['Joint dislocation', 'Luxation', 'Joint displacement'],

  levels: {
    1: {
      level: 1,
      summary: 'A dislocation happens when bones in a joint are forced out of their normal position. It needs prompt medical attention to put the joint back in place.',
      explanation: `A dislocation is when a bone slips out of its joint. This is different from a fracture (broken bone), though sometimes both happen together.

**Common Dislocated Joints:**
- Shoulder (most common)
- Fingers
- Kneecap (patella)
- Elbow
- Hip (usually from major trauma)

**Signs of Dislocation:**
- Obvious deformity (looks out of place)
- Intense pain
- Unable to move the joint
- Swelling and bruising

**What to Do:**
- Don't try to put it back yourself
- Keep the joint still
- Apply ice to reduce swelling
- Get medical help immediately

**Treatment:**
- Doctor will put the joint back in place (reduction)
- X-rays to check for fractures
- Splint or sling to protect the joint
- Physical therapy to regain strength and motion

**Recovery:**
- Depends on which joint and severity
- Risk of it happening again
- Strengthening exercises help prevent recurrence`,
      keyTerms: [
        { term: 'dislocation', definition: 'When a bone is forced out of its normal position in a joint' },
        { term: 'reduction', definition: 'Medical procedure to put a dislocated joint back in place' },
        { term: 'recurrence', definition: 'When a dislocation happens again in the same joint' },
      ],
      analogies: [
        'A dislocation is like a door that has popped off its hinges.',
        'Putting a dislocation back is like snapping a lid back onto its container.',
      ],
      examples: [
        'A shoulder can dislocate when you fall with your arm stretched out.',
        'Fingers can dislocate when a ball hits the tip while it\'s straight.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dislocations are classified by direction and completeness. Treatment involves closed reduction when possible, followed by immobilization and rehabilitation to prevent instability.',
      explanation: `Dislocations occur when joint surfaces lose their normal relationship, requiring reduction and stabilization.

**Classification:**
- **Complete**: Total loss of contact between surfaces
- **Subluxation**: Partial displacement

**Direction-Based Classification:**
- Anterior (forward)
- Posterior (backward)
- Inferior (downward)
- Lateral/Medial (sideways)

**Common Dislocations:**

*Shoulder:*
- Anterior (95%): Arm forced into abduction/external rotation
- Posterior (rare): Seizure, electric shock

*Hip:*
- Posterior (90%): Dashboard injury
- Anterior: Less common
- Emergency due to blood supply risk

*Patella:*
- Lateral most common
- Often recurrent
- Associated with anatomy/alignment

**Reduction Techniques:**
- Procedural sedation often required
- Joint-specific maneuvers
- Post-reduction imaging to confirm

**Complications:**
- Associated fractures
- Nerve injury
- Vascular injury (hip)
- Recurrent instability
- Arthritis long-term

**Post-Reduction Care:**
- Immobilization period varies by joint
- Physical therapy critical
- Activity modification
- Bracing for return to sport`,
      keyTerms: [
        { term: 'subluxation', definition: 'Partial dislocation where joint surfaces partially lose contact' },
        { term: 'closed reduction', definition: 'Relocating a dislocation without surgery' },
        { term: 'avascular necrosis', definition: 'Bone death from loss of blood supply; risk with hip dislocation' },
      ],
      analogies: [
        'A subluxation is like a drawer that\'s partly open, while a dislocation is completely pulled out.',
        'Hip dislocation urgency is like a plant without water - the longer it goes, the more damage occurs.',
      ],
    },
    3: {
      level: 3,
      summary: 'Dislocation management requires understanding of associated injuries, reduction techniques, and factors predicting recurrent instability. Time-sensitive injuries require emergent management.',
      explanation: `Comprehensive dislocation care addresses both acute management and long-term stability.

**Shoulder Dislocation:**

*Associated Injuries:*
- Bankart lesion: Labral avulsion
- Hill-Sachs lesion: Humeral head impaction
- Rotator cuff tear (age >40)
- Greater tuberosity fracture
- Nerve injury (axillary most common)

*Reduction Techniques:*
- External rotation method
- Cunningham technique
- Stimson technique
- Traction-countertraction

*Recurrence Risk Factors:*
- Age <20: 80-90% recurrence
- Age >40: 10-15% recurrence
- Contact sports
- Hyperlaxity
- Bone loss

**Hip Dislocation:**

*Emergency Considerations:*
- Reduce within 6 hours (AVN risk)
- Assess sciatic nerve
- Associated acetabular fractures
- CT post-reduction

*Posterior:*
- Hip flexed, adducted, internally rotated
- Allis maneuver for reduction

*Anterior:*
- Hip extended, abducted, externally rotated
- Less common but similar urgency

**Patella Dislocation:**

*Risk Factors:*
- Trochlear dysplasia
- Patella alta
- Increased TT-TG distance
- Valgus alignment

*MPFL:*
- Primary medial restraint
- Usually tears with dislocation
- Reconstruction for recurrent instability

**Elbow Dislocation:**
- Terrible triad: Dislocation + radial head + coronoid
- Stability assessment critical
- Early motion when stable`,
      keyTerms: [
        { term: 'Bankart lesion', definition: 'Avulsion of anteroinferior labrum from glenoid; classic instability lesion' },
        { term: 'Hill-Sachs lesion', definition: 'Impaction fracture of posterolateral humeral head from dislocation' },
        { term: 'MPFL', definition: 'Medial patellofemoral ligament; primary restraint to lateral patellar dislocation' },
      ],
      clinicalNotes: 'First-time anterior shoulder dislocation in young athletes may warrant early surgical stabilization given high recurrence rates. Shared decision-making essential.',
    },
    4: {
      level: 4,
      summary: 'Biomechanical understanding of joint stability guides surgical decision-making for recurrent instability. Bone loss quantification and soft tissue assessment direct reconstruction strategy.',
      explanation: `Advanced dislocation management integrates biomechanics with surgical planning.

**Shoulder Instability Biomechanics:**

*Static Restraints:*
- Glenoid concavity
- Labrum (deepens 50%)
- Capsule and glenohumeral ligaments
- IGHL primary restraint at 90 degrees abduction

*Dynamic Restraints:*
- Rotator cuff compression
- Periscapular muscle control
- Proprioceptive feedback

**Bone Loss Assessment:**

*Glenoid:*
- CT with 3D reconstruction
- Best-fit circle method
- >13-20% critical threshold
- Inverted pear appearance

*Humeral (Hill-Sachs):*
- Glenoid track concept
- On-track vs. off-track
- Engaging vs. non-engaging

**Surgical Options:**

*Soft Tissue:*
- Arthroscopic Bankart repair
- Capsular plication
- Best for minimal bone loss

*Bony Procedures:*
- Latarjet (coracoid transfer)
- Bone block (iliac crest, allograft)
- Remplissage (Hill-Sachs fill)

**Patellofemoral Instability:**

*Assessment:*
- TT-TG distance (>20mm abnormal)
- Trochlear depth (Dejour classification)
- Patella height (CDI, Insall-Salvati)

*Surgical Options:*
- MPFL reconstruction (first-line)
- Tibial tubercle osteotomy
- Trochleoplasty (severe dysplasia)

**Hip Stability After Dislocation:**
- Assess under anesthesia
- Posterior wall fractures affect stability
- Surgical fixation if unstable
- Protected weight-bearing protocol`,
      keyTerms: [
        { term: 'glenoid track', definition: 'Contact area of humeral head on glenoid; determines if Hill-Sachs engages' },
        { term: 'Latarjet procedure', definition: 'Coracoid transfer to anterior glenoid for bone loss' },
        { term: 'TT-TG distance', definition: 'Tibial tubercle to trochlear groove distance; measure of patellar tracking' },
      ],
      clinicalNotes: 'Glenoid track concept guides treatment. Off-track lesions require bony procedure. On-track lesions may be addressed with soft tissue repair alone.',
    },
    5: {
      level: 5,
      summary: 'Contemporary instability surgery integrates evidence-based approaches with emerging techniques. Patient-specific factors, bone loss patterns, and functional demands guide individualized treatment algorithms.',
      explanation: `Expert management requires understanding of current evidence and personalized treatment.

**Evidence Base:**

*First-Time Dislocation:*
- Immobilization: External rotation vs. internal rotation
- Surgery vs. conservative in young athletes
- Risk prediction models

*Recurrent Instability:*
- Arthroscopic vs. open Bankart
- Bone block procedures for bone loss
- Failed arthroscopic repair management

**Latarjet Evidence:**
- Lower recurrence than Bankart for bone loss
- Contact athlete benefit
- Complications: Graft malposition, nonunion, nerve injury
- Learning curve considerations

**Emerging Techniques:**

*Arthroscopic Latarjet:*
- Technically demanding
- Comparable outcomes to open
- Surgeon experience critical

*Eden-Hybinette Variants:*
- Iliac crest autograft
- Distal tibia allograft
- 3D-printed guides

**Outcome Measures:**
- WOSI (Western Ontario Shoulder Instability)
- Recurrence rates
- Return to sport
- Patient satisfaction

**Revision Surgery:**
- Failure analysis critical
- Bone loss reassessment
- Graft options for revision

**Hip Dislocation Outcomes:**
- AVN risk correlates with reduction time
- Post-traumatic arthritis common
- THA may be needed long-term
- Associated fracture patterns affect prognosis

**Patellar Instability Evidence:**
- MPFL reconstruction gold standard
- Role of alignment correction
- Trochleoplasty for severe dysplasia
- Combined procedures when indicated

**Research Directions:**
- Biologic augmentation of repairs
- 3D printing for patient-specific guides
- Navigation and robotics
- Predictive models for recurrence`,
      keyTerms: [
        { term: 'WOSI', definition: 'Western Ontario Shoulder Instability Index; disease-specific outcome measure' },
        { term: 'Eden-Hybinette', definition: 'Bone block procedure using iliac crest graft' },
        { term: 'trochleoplasty', definition: 'Surgical deepening of trochlear groove for severe dysplasia' },
      ],
      clinicalNotes: 'Treatment algorithms should be individualized. Young contact athletes with bone loss benefit from primary Latarjet. Careful patient selection and surgical expertise drive outcomes.',
    },
  },

  media: [
    {
      id: 'dislocation-types',
      type: 'diagram',
      filename: 'joint-dislocations.svg',
      title: 'Common Dislocations',
      description: 'Illustration of common joint dislocations',
    },
  ],
  citations: [
    {
      id: 'dislocation-ref',
      type: 'textbook',
      title: 'Joint Dislocations and Instability',
      source: 'Orthopedic Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-shoulder-joint', targetType: 'structure', relationship: 'related', label: 'Shoulder Anatomy' },
    { targetId: 'ortho-patient-hip-joint', targetType: 'structure', relationship: 'related', label: 'Hip Anatomy' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'trauma', 'instability'],
    keywords: ['dislocation', 'instability', 'reduction', 'Bankart'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default dislocationsContent;
