import { EducationalContent } from '../../../types';

export const rotatorCuffShoulder: EducationalContent = {
  id: 'ortho-rotator-cuff-sports',
  type: 'condition',
  name: 'Rotator Cuff and Shoulder Sports Injuries',
  nameEs: 'Lesiones deportivas del manguito rotador y hombro',
  alternateNames: ['Rotator cuff tear', 'Shoulder impingement', 'SLAP tear', 'Shoulder instability'],

  levels: {
    1: {
      level: 1,
      summary: 'The rotator cuff is a group of four muscles and tendons that hold the shoulder together. These can be injured from sports, falls, or normal wear over time, causing pain and weakness.',
      explanation: `Your shoulder is the most flexible joint in your body — it can move in many directions. Four muscles called the "rotator cuff" hold the ball of the arm bone in the shoulder socket.

**Common Shoulder Problems:**

**Rotator Cuff Tear:**
- A tear in one of the four shoulder tendons
- Causes pain with reaching overhead and at night
- May happen suddenly (fall) or gradually (wear and tear)

**Impingement:**
- The tendons get pinched when you raise your arm
- Causes pain between 60-120 degrees of arm elevation
- Common in swimmers, tennis players, and painters

**Shoulder Instability:**
- The shoulder slips out of place (dislocation) or feels loose
- Common in young athletes from throwing or contact sports

**Treatment Options:**
- Rest, ice, and anti-inflammatory medication
- Physical therapy to strengthen the shoulder muscles
- Cortisone injection for pain relief
- Surgery if other treatments do not work`,
      keyTerms: [
        { term: 'rotator cuff', definition: 'Four muscles and tendons that hold your shoulder joint together and help you move your arm' },
        { term: 'impingement', definition: 'When shoulder tendons get pinched between bones during arm movement' },
        { term: 'dislocation', definition: 'When the ball of the arm bone slips out of the shoulder socket' },
      ],
      analogies: ['The rotator cuff is like a team of four ropes holding a ball on a golf tee — if one rope breaks, the ball becomes unstable.'],
      patientCounselingPoints: ['Many rotator cuff problems improve with physical therapy alone.', 'Strengthening the muscles around your shoulder blade is just as important as the rotator cuff.', 'Ice after activity and sleep with a pillow under your arm for comfort.'],
    },
    2: {
      level: 2,
      summary: 'Shoulder sports injuries span rotator cuff pathology, labral tears (SLAP, Bankart), impingement, and instability. Treatment depends on the specific diagnosis, patient age, and activity demands.',
      explanation: `**Rotator Cuff Anatomy:**
Four muscles (SITS): Supraspinatus (abduction, most commonly torn), Infraspinatus (external rotation), Teres minor (external rotation), Subscapularis (internal rotation). They compress the humeral head into the glenoid, providing dynamic stability.

**Rotator Cuff Tears:**
- Partial thickness: pain without significant weakness, treated conservatively
- Full thickness: weakness present, surgical repair considered for active patients
- Massive tears (>5 cm or 2+ tendons): may be irreparable, consider superior capsular reconstruction or reverse total shoulder

**SLAP Tear (Superior Labrum Anterior to Posterior):**
- Tear of the superior labrum where the biceps tendon attaches
- Common in overhead athletes (baseball pitchers, volleyball)
- Symptoms: deep shoulder pain, clicking, decreased throwing velocity
- Types I-IV (Snyder classification): Type II most common and clinically significant

**Bankart Lesion:**
- Tear of the anterior-inferior labrum from shoulder dislocation
- Primary dislocation in patients <25 has >70% recurrence rate
- Arthroscopic Bankart repair or open Latarjet procedure for bone loss

**Impingement Spectrum:**
External (subacromial) vs. internal (posterosuperior — in overhead athletes). External impingement treated with PT (scapular stabilization, rotator cuff strengthening). Internal impingement requires addressing posterior capsule tightness (GIRD — glenohumeral internal rotation deficit).`,
      keyTerms: [
        { term: 'SLAP tear', definition: 'Superior labrum anterior to posterior tear — injury to the top of the shoulder socket rim where the biceps attaches' },
        { term: 'Bankart lesion', definition: 'Tear of the anterior-inferior labrum caused by shoulder dislocation' },
        { term: 'GIRD', definition: 'Glenohumeral internal rotation deficit — loss of internal rotation common in overhead athletes' },
        { term: 'supraspinatus', definition: 'The most commonly torn rotator cuff muscle, responsible for initiating arm abduction' },
      ],
    },
    3: {
      level: 3,
      summary: 'Shoulder sports medicine integrates biomechanical analysis, advanced imaging, arthroscopic techniques, and sport-specific rehabilitation for rotator cuff, labral, and instability pathology.',
      explanation: `**Rotator Cuff Tear Classification and Repair:**
Partial tears graded by depth: <25% Grade 1, 25-50% Grade 2, >50% Grade 3. Full-thickness by Cofield: small (<1cm), medium (1-3cm), large (3-5cm), massive (>5cm). Repair techniques: single-row, double-row (suture bridge) provides greater footprint coverage and lower re-tear rates for medium-large tears.

**Factors Affecting Rotator Cuff Healing:**
Fatty infiltration (Goutallier grade 0-4 on MRI/CT), muscle atrophy, tear retraction, age, smoking, and diabetes all negatively affect tendon-to-bone healing. Goutallier grade 3-4 (>50% fatty infiltration) is considered irreversible and predicts poor repair outcomes.

**Shoulder Instability — Decision Algorithm:**
First-time dislocation <25 years + contact/overhead sport = consider early arthroscopic Bankart repair (recurrence without surgery 70-90%). Recurrent instability with bone loss:
- Glenoid bone loss <20%: arthroscopic Bankart repair
- Glenoid bone loss 20-25%: Latarjet procedure (coracoid transfer with conjoint tendon creating dynamic sling)
- Engaging Hill-Sachs lesion: remplissage (infraspinatus tenodesis into defect) or Latarjet
- ISIS score (Instability Severity Index Score) >6: Latarjet preferred over Bankart

**Overhead Athlete Shoulder:**
Thrower's paradox: requires enough laxity for extreme external rotation (cocking phase) but enough stability to resist subluxation. GIRD + increased external rotation = total arc of motion should be preserved. GIRD >20 degrees increases injury risk. Treatment: sleeper stretches, posterior capsule mobilization. Dead arm syndrome: vague shoulder pain/weakness during throwing — evaluate for internal impingement, partial cuff tear, SLAP tear.

**Superior Capsular Reconstruction (SCR):**
For irreparable massive rotator cuff tears. Dermal allograft or fascia lata bridging from glenoid to greater tuberosity, restoring superior restraint. Reduces superior humeral migration. Alternative: reverse total shoulder arthroplasty in patients >70.`,
      keyTerms: [
        { term: 'Goutallier classification', definition: 'Grading system (0-4) for fatty infiltration of rotator cuff muscles; grades 3-4 indicate irreversible changes' },
        { term: 'Latarjet procedure', definition: 'Coracoid transfer to anterior glenoid rim for recurrent instability with significant bone loss' },
        { term: 'remplissage', definition: 'Arthroscopic technique filling a Hill-Sachs lesion with infraspinatus tendon to prevent engagement' },
        { term: 'ISIS score', definition: 'Instability Severity Index Score — predicts recurrence risk after arthroscopic Bankart repair' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced shoulder surgery includes arthroscopic techniques for complex pathology, biologics for healing augmentation, and reverse total shoulder arthroplasty for irreparable cuff tears.',
      explanation: `**Reverse Total Shoulder Arthroplasty (rTSA):**
Reverses the ball-and-socket relationship: a metal ball (glenosphere) is placed on the glenoid and a socket on the humerus. This medializes and distalizes the center of rotation, allowing the deltoid to power arm elevation without the rotator cuff. Indications: cuff tear arthropathy, irreparable massive rotator cuff tear, complex proximal humerus fracture in elderly, revision arthroplasty. Complications: scapular notching (inferior glenoid erosion), instability, acromial stress fracture, infection.

**Biologic Augmentation in Rotator Cuff Repair:**
- PRP: inconsistent evidence for reduced re-tear rates; some RCTs show benefit for small-medium tears
- Dermal allograft patch: augmentation of large/massive tear repairs shows reduced re-tear rates in selected studies
- Bone marrow aspirate concentrate (BMAC): theoretical stem cell benefit, limited clinical evidence
- Subacromial balloon spacer (InSpace): biodegradable balloon placed in subacromial space for massive irreparable tears; provides pain relief and improved function for 12-24 months

**Complex Instability:**
Multidirectional instability (MDI): laxity in 3+ directions, often constitutional. Initial treatment: extensive rehabilitation (6-12 months). Surgical: capsular shift (thermal capsulorrhaphy is contraindicated — high failure rate). Posterior instability: less common, often missed. Reverse Hill-Sachs (McLaughlin lesion): impaction fracture of the anterior humeral head from posterior dislocation — suspect if patient had seizure or electrocution.

**Subscapularis Tears:**
Often missed. Belly-press test and bear-hug test. Associated with anterosuperior escape. Repair is technically demanding due to proximity to brachial plexus and axillary artery. Upper subscapularis tears increasingly recognized as a cause of persistent anterior shoulder pain.

**Acromioclavicular Joint:**
AC separation graded I-VI (Rockwood). Types I-II: conservative (sling, PT). Type III: controversial — evidence supports initial conservative treatment with surgical reconstruction for persistent symptoms. Types IV-VI: surgical (coracoclavicular ligament reconstruction with allograft or synthetic). Distal clavicle osteolysis from repetitive microtrauma (weightlifters) — treated with arthroscopic distal clavicle excision.`,
      keyTerms: [
        { term: 'reverse total shoulder', definition: 'Arthroplasty design that places a ball on the glenoid and socket on the humerus, allowing deltoid-powered elevation without rotator cuff' },
        { term: 'cuff tear arthropathy', definition: 'End-stage shoulder arthritis from massive chronic rotator cuff tear with superior humeral migration' },
        { term: 'McLaughlin lesion', definition: 'Reverse Hill-Sachs impaction fracture of the anteromedial humeral head from posterior dislocation' },
        { term: 'scapular notching', definition: 'Erosion of the inferior scapular neck from impingement of the humeral component in reverse TSA' },
      ],
      clinicalNotes: 'Posterior shoulder dislocations are commonly missed on standard AP X-rays. Always obtain axillary or Velpeau view. Suspect in patients after seizure, electrocution, or significant trauma.',
    },
    5: {
      level: 5,
      summary: 'Professional-level shoulder sports medicine integrates arthroscopic innovation, evidence from landmark trials, outcomes research, and emerging technologies in biologic healing and implant design.',
      explanation: `**Key Evidence:**
- **UK CSAW trial:** Subacromial decompression no better than arthroscopy alone (diagnostic scope) or no treatment for subacromial pain. Challenges the role of routine acromioplasty.
- **FROST trial (ongoing):** RCT of rotator cuff repair vs. non-operative management for atraumatic full-thickness tears — interim results favor surgery for larger tears.
- **MOON Shoulder Instability:** First-time dislocators <25 treated with early Bankart repair had significantly lower recurrence (10-15%) vs. nonoperative (70-80%).
- **Multicenter rTSA registries:** 10-year survivorship 90-94%. Glenoid baseplate loosening remains the primary long-term concern.

**Arthroscopic Innovation:**
- All-arthroscopic Latarjet: reduced soft tissue disruption, requires steep learning curve
- Arthroscopic superior capsular reconstruction with human dermal allograft
- Comprehensive arthroscopic management (CAM) of massive tears: partial repair + SCR + biceps tenodesis + subacromial balloon

**Thrower's Shoulder — Return to Pitching Protocol:**
Progressive long-toss program (120 feet gradually, then mound progression). Pitch count limits based on age (Little League guidelines). Biomechanical analysis for mechanical inefficiencies. UCL stress monitoring (ulnar collateral ligament of elbow often concomitant).

**Nerve Injuries Around the Shoulder:**
- Suprascapular neuropathy: entrapment at spinoglenoid notch (infraspinatus weakness) or suprascapular notch (supraspinatus + infraspinatus). Associated with ganglion cysts from labral tears.
- Axillary nerve: at risk in anterior dislocation and deltopectoral surgical approach. Test deltoid sensation over lateral shoulder (regimental badge area).
- Long thoracic nerve: serratus anterior palsy causing scapular winging. Traction injury from overhead sports.

**Emerging Technologies:**
- 3D-printed patient-specific glenoid guides for anatomic TSA and Latarjet
- Augmented reality for intraoperative guidance in complex instability reconstruction
- Machine learning prediction of rotator cuff re-tear risk based on preoperative MRI features
- Gene therapy and growth factor delivery for tendon-to-bone healing enhancement (preclinical)`,
      keyTerms: [
        { term: 'CSAW trial', definition: 'UK RCT showing subacromial decompression is no better than diagnostic arthroscopy for subacromial pain' },
        { term: 'suprascapular neuropathy', definition: 'Compression of the suprascapular nerve causing rotator cuff weakness, often associated with labral cysts' },
        { term: 'CAM procedure', definition: 'Comprehensive arthroscopic management combining partial repair, SCR, and other techniques for massive irreparable tears' },
        { term: 'scapular winging', definition: 'Prominence of the scapula from serratus anterior weakness due to long thoracic nerve palsy' },
      ],
      clinicalNotes: 'The CSAW trial has shifted practice: routine acromioplasty for impingement should be reconsidered. Focus rehabilitation on posterior capsule stretching and periscapular strengthening before considering surgical decompression.',
    },
  },

  media: [],
  citations: [
    { id: 'cit-csaw', type: 'article', title: 'CSAW Trial: Subacromial Decompression vs. Sham Surgery', source: 'Lancet. 2018;391(10118):329-338', license: 'Proprietary' },
    { id: 'cit-rtsa-review', type: 'article', title: 'Reverse Total Shoulder Arthroplasty: Systematic Review', source: 'J Shoulder Elbow Surg. 2017;26(12):2217-2227', license: 'Proprietary' },
  ],
  crossReferences: [
    { targetId: 'ortho-acl-meniscus-injuries', targetType: 'condition', relationship: 'sibling', label: 'ACL and Meniscus Injuries' },
    { targetId: 'ortho-rotator-cuff-tear', targetType: 'condition', relationship: 'related', label: 'Rotator Cuff Tear (Database Entry)' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'sports medicine', 'shoulder'],
    keywords: ['rotator cuff', 'SLAP', 'Bankart', 'instability', 'impingement', 'reverse TSA', 'arthroscopy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2026-01-30',
  updatedAt: '2026-01-30',
  version: 1,
  status: 'published',
};

export default rotatorCuffShoulder;
