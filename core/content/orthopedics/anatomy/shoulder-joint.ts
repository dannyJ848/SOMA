import { EducationalContent } from '../../types';

export const shoulderJointAnatomy: EducationalContent = {
  id: 'ortho-patient-shoulder-joint',
  type: 'structure',
  name: 'Shoulder Joint Anatomy',
  alternateNames: ['Shoulder', 'Glenohumeral joint', 'Shoulder complex'],

  levels: {
    1: {
      level: 1,
      summary: 'Your shoulder is the most flexible joint in your body, allowing your arm to move in almost any direction.',
      explanation: `Your shoulder is a ball-and-socket joint, but unlike your hip, it trades stability for mobility. This is why shoulders can dislocate more easily.

**Parts of Your Shoulder:**
- **Ball (humeral head)**: Round top of your upper arm bone
- **Socket (glenoid)**: Shallow cup on your shoulder blade
- **Rotator cuff**: Four muscles that hold the ball in the socket
- **Labrum**: Soft rim that makes the socket deeper

**What Your Shoulder Does:**
- Lets you reach overhead
- Allows throwing motions
- Helps you push and pull
- Enables you to rotate your arm

**Common Shoulder Problems:**
- Rotator cuff tears
- Dislocations
- Frozen shoulder
- Impingement

**Keeping Your Shoulders Healthy:**
- Strengthen rotator cuff muscles
- Maintain good posture
- Warm up before activities
- Don't ignore shoulder pain`,
      keyTerms: [
        { term: 'rotator cuff', definition: 'Four muscles that stabilize your shoulder' },
        { term: 'glenoid', definition: 'The shallow socket of your shoulder blade' },
        { term: 'labrum', definition: 'Soft cartilage rim that deepens the shoulder socket' },
      ],
      analogies: [
        'Your shoulder is like a golf ball sitting on a tee - mobile but not very stable.',
        'The rotator cuff muscles work like guy wires on a tent pole, keeping the ball centered.',
      ],
      examples: [
        'When you throw a ball, your shoulder rotates through a wide range of motion.',
        'When you reach for something on a high shelf, your shoulder allows that overhead movement.',
      ],
    },
    2: {
      level: 2,
      summary: 'The shoulder complex includes four joints, with the glenohumeral joint as the primary articulation, stabilized by the rotator cuff, labrum, and capsular ligaments.',
      explanation: `The shoulder achieves its remarkable mobility through coordinated movement of multiple joints.

**Shoulder Complex Joints:**
- **Glenohumeral**: Ball-and-socket (main shoulder joint)
- **Acromioclavicular**: Clavicle to acromion
- **Sternoclavicular**: Clavicle to sternum
- **Scapulothoracic**: Scapula gliding on thorax

**Rotator Cuff Muscles (SITS):**
- **Supraspinatus**: Initiates abduction
- **Infraspinatus**: External rotation
- **Teres Minor**: External rotation
- **Subscapularis**: Internal rotation

**Static Stabilizers:**
- Glenoid labrum (deepens socket 50%)
- Glenohumeral ligaments (superior, middle, inferior)
- Joint capsule

**Dynamic Stabilizers:**
- Rotator cuff (compresses humeral head)
- Long head of biceps
- Periscapular muscles

**Shoulder Movements:**
- Flexion: 180 degrees
- Abduction: 180 degrees
- External rotation: 90 degrees
- Internal rotation: 70 degrees

**Scapulohumeral Rhythm:**
- 2:1 ratio (glenohumeral:scapulothoracic)
- For every 3 degrees of abduction: 2 at GH, 1 at ST`,
      keyTerms: [
        { term: 'glenohumeral joint', definition: 'Primary shoulder joint between humerus and glenoid' },
        { term: 'scapulohumeral rhythm', definition: 'Coordinated motion between shoulder blade and arm bone' },
        { term: 'acromion', definition: 'Bony projection of shoulder blade forming roof over shoulder' },
      ],
      analogies: [
        'The labrum acts like a suction cup, helping hold the humeral head in place.',
        'The scapula and humerus move together like partners in a dance.',
      ],
    },
    3: {
      level: 3,
      summary: 'Shoulder stability depends on concavity compression, adhesion-cohesion, and coordinated rotator cuff activation, with pathology patterns reflecting anatomic vulnerability.',
      explanation: `Understanding shoulder anatomy requires appreciation of static and dynamic stability mechanisms.

**Glenoid Anatomy:**
- Pear-shaped, 5 degrees retroversion
- Articular surface: 35mm x 25mm
- Bare area centrally (no cartilage)
- Version affects stability

**Labral Anatomy:**
- Fibrocartilage attached to glenoid rim
- Increases depth 50%, area 75%
- Superior labrum: Variable attachment (SLAP lesions)
- Anteroinferior: Bankart lesion site

**Capsular Ligaments:**
- SGHL: Superior, resists inferior translation at 0 degrees
- MGHL: Variable, resists anterior translation at 45 degrees
- IGHL: Primary restraint at 90 degrees abduction
  - Anterior band: Most important for stability
  - Axillary pouch: Permits motion

**Rotator Cuff Details:**
- Crescent: Avascular zone prone to tears
- Footprint: Insertion on greater tuberosity
- Force couple: Coronal (SS/infraspinatus vs. subscapularis)
- Force couple: Transverse (deltoid vs. rotator cuff)

**Subacromial Space:**
- Contains subacromial bursa
- Rotator cuff passes through
- Impingement: Compression of cuff against acromion
- Acromion morphology: Type I, II, III (Bigliani)

**Blood Supply:**
- Anterior and posterior humeral circumflex
- Suprascapular artery
- Thoracoacromial artery
- Critical zone: Relative avascularity at supraspinatus insertion

**Nerve Supply:**
- Suprascapular: Supraspinatus, infraspinatus
- Axillary: Deltoid, teres minor
- Subscapular nerves: Subscapularis`,
      keyTerms: [
        { term: 'IGHL', definition: 'Inferior glenohumeral ligament; primary restraint to anterior dislocation' },
        { term: 'Bankart lesion', definition: 'Avulsion of anteroinferior labrum; classic instability lesion' },
        { term: 'concavity compression', definition: 'Mechanism of stability where muscles compress humeral head into glenoid' },
      ],
      clinicalNotes: 'Anterior instability is most common (95%). Bankart repair restores labral bumper. Bone loss (glenoid or Hill-Sachs) affects surgical planning.',
    },
    4: {
      level: 4,
      summary: 'Shoulder biomechanics involve complex force couples, instantaneous centers of rotation, and glenohumeral contact mechanics critical for understanding pathology and surgical reconstruction.',
      explanation: `Advanced shoulder anatomy integrates structural concepts with biomechanical function.

**Force Couples:**

*Coronal Plane:*
- Deltoid: Primary abductor, superior/lateral vector
- Rotator cuff: Inferior/compressive vector
- Balance centers humeral head on glenoid

*Transverse Plane:*
- Subscapularis: Anterior
- Infraspinatus/teres minor: Posterior
- Creates centered rotation

**Glenohumeral Mechanics:**
- Joint reaction force: 0.89x body weight
- Throwing: 1.5x body weight distraction
- Instantaneous center of rotation moves with position

**Rotator Cuff Pathomechanics:**
- Tensile failure from load
- Impingement (external or internal)
- Hypovascular zone vulnerability
- Fatty infiltration with chronic tears

**Instability Biomechanics:**
- Circle concept (O'Brien)
- Anteroinferior instability most common
- Bone loss threshold: 13-20% glenoid, 25% Hill-Sachs
- Glenoid track concept

**SLAP Lesion Biomechanics:**
- Peel-back mechanism
- Biceps anchor pathology
- Dead arm syndrome in throwers
- Type II most clinically significant

**Throwing Biomechanics:**
- Six phases of throwing
- Late cocking: Maximum external rotation, ABER position
- Maximum internal rotation velocity: 7000 deg/sec
- Valgus stress at elbow: 120 Nm

**Scapular Kinematics:**
- Upward rotation
- Posterior tilting
- External rotation
- Dyskinesis patterns`,
      keyTerms: [
        { term: 'circle concept', definition: 'Shoulder stability model showing anterior-posterior and superior-inferior stability' },
        { term: 'glenoid track', definition: 'Contact path of humeral head on glenoid; relates Hill-Sachs to instability' },
        { term: 'SLAP lesion', definition: 'Superior Labrum Anterior to Posterior tear; often involves biceps anchor' },
      ],
      clinicalNotes: 'Glenoid track concept guides treatment of bipolar bone loss. On-track Hill-Sachs lesions may not require treatment; off-track lesions need bony procedure.',
    },
    5: {
      level: 5,
      summary: 'Contemporary shoulder surgery integrates advanced imaging, biomechanical principles, and evidence-based approaches to optimize outcomes in rotator cuff repair, instability surgery, and arthroplasty.',
      explanation: `Expert shoulder care requires comprehensive understanding of surgical options and outcome optimization.

**Rotator Cuff Surgery:**

*Prognostic Factors:*
- Tear size and retraction
- Fatty infiltration (Goutallier)
- Muscle atrophy
- Age and tissue quality
- Chronicity

*Repair Techniques:*
- Single vs. double row
- Transosseous equivalent
- Medially-based failures common
- Biologic augmentation

*Outcomes:*
- Pain relief: 85-90%
- Retear rates: 20-70% (size-dependent)
- Clinical success possible despite retear
- Superior capsular reconstruction for irreparable tears

**Instability Surgery:**

*Soft Tissue Repair:*
- Arthroscopic Bankart
- Capsular plication
- Recurrence: 5-15%

*Bony Procedures:*
- Latarjet: Coracoid transfer
- Iliac crest bone block
- Distal tibial allograft

*Evidence:*
- First-time dislocation: Non-operative vs. surgery debate
- Young athletes: Higher recurrence, consider early surgery
- Contact athletes: Latarjet may have better outcomes

**Arthroplasty:**

*Options:*
- Total shoulder: Intact rotator cuff
- Hemiarthroplasty: Young patients, specific indications
- Reverse shoulder: Deficient rotator cuff

*Reverse TSA:*
- Grammont design principles
- Medialized center of rotation
- Deltoid as prime mover
- Expanding indications

**Emerging Technologies:**
- Superior capsular reconstruction
- Balloon spacer for irreparable RCT
- Biologic augmentation (PRP, stem cells)
- Navigation and robotics

**Outcomes Measures:**
- ASES score
- Constant score
- WOSI (instability)
- VAS, ROM, strength`,
      keyTerms: [
        { term: 'Latarjet procedure', definition: 'Coracoid transfer for anterior shoulder instability with bone loss' },
        { term: 'reverse total shoulder', definition: 'Arthroplasty design for deficient rotator cuff; ball on glenoid, socket on humerus' },
        { term: 'superior capsular reconstruction', definition: 'Graft reconstruction for irreparable rotator cuff tears' },
      ],
      clinicalNotes: 'Reverse TSA has transformed treatment of cuff tear arthropathy. Indications expanding but complications exist. Patient selection remains critical for optimal outcomes.',
    },
  },

  media: [
    {
      id: 'shoulder-anatomy',
      type: 'diagram',
      filename: 'shoulder-joint-anatomy.svg',
      title: 'Shoulder Joint Anatomy',
      description: 'Structures of the shoulder including rotator cuff',
    },
  ],
  citations: [
    {
      id: 'shoulder-anatomy-ref',
      type: 'textbook',
      title: 'Shoulder Joint Anatomy and Biomechanics',
      source: 'Orthopedic Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-bones-joints-overview', targetType: 'concept', relationship: 'parent', label: 'Bones and Joints Overview' },
    { targetId: 'ortho-patient-dislocations', targetType: 'condition', relationship: 'related', label: 'Dislocations' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['anatomy', 'orthopedics', 'shoulder'],
    keywords: ['shoulder', 'rotator cuff', 'glenoid', 'labrum'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default shoulderJointAnatomy;
