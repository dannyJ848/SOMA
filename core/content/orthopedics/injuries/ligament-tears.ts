import { EducationalContent } from '../../types';

export const ligamentTearsContent: EducationalContent = {
  id: 'ortho-patient-ligament-tears',
  type: 'condition',
  name: 'Ligament Tears',
  alternateNames: ['Ligament rupture', 'Ligament injury', 'Torn ligament'],

  levels: {
    1: {
      level: 1,
      summary: 'Ligaments are strong bands that connect bones at joints. When they tear, the joint may become unstable. Treatment depends on which ligament and how badly it is torn.',
      explanation: `Ligaments are like strong rubber bands that hold your bones together at joints. When you twist or turn suddenly, these bands can stretch too far and tear.

**Common Ligament Tears:**
- ACL (knee) - Common in sports with cutting and pivoting
- MCL (knee) - Often from hits to the outer knee
- Ankle ligaments - From rolling your ankle
- Shoulder ligaments - From falls or dislocations

**Signs of a Ligament Tear:**
- Pop or snap at the time of injury
- Swelling (often rapid)
- Pain
- Joint feels loose or unstable
- Difficulty bearing weight

**Treatment:**
- Minor tears: Rest, ice, physical therapy
- Severe tears: May need surgery to repair or reconstruct
- All tears: Rehabilitation to regain strength and stability

**Recovery:**
- Minor tears: 4-6 weeks
- Severe tears with surgery: 6-12 months
- Physical therapy is essential for all`,
      keyTerms: [
        { term: 'ligament', definition: 'Strong band that connects bones together at a joint' },
        { term: 'ACL', definition: 'Anterior cruciate ligament - key stabilizer in the knee' },
        { term: 'instability', definition: 'When a joint feels loose or gives way' },
      ],
      analogies: [
        'Ligaments are like the straps on a backpack - they keep things held together.',
        'A torn ACL is like a broken hinge on a gate - it swings freely instead of staying stable.',
      ],
      examples: [
        'An ACL tear often happens when landing from a jump or cutting to change direction.',
        'An MCL tear might happen when a football player is tackled from the side.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ligament injuries range from mild sprains to complete ruptures. Treatment decisions depend on injury severity, patient factors, and functional demands.',
      explanation: `Ligament injuries are classified by degree of disruption and resulting instability.

**Injury Classification:**
- **Grade I**: Stretched fibers, no laxity
- **Grade II**: Partial tear, mild laxity
- **Grade III**: Complete rupture, significant laxity

**Major Knee Ligaments:**

*ACL:*
- Prevents anterior tibial translation
- Important for pivoting sports
- Usually requires reconstruction in active patients

*PCL:*
- Prevents posterior tibial translation
- Dashboard injury mechanism
- Often treated non-operatively

*MCL:*
- Resists valgus stress
- Usually heals without surgery
- Bracing and therapy

*LCL/Posterolateral Corner:*
- Resists varus stress
- Often combined with other injuries
- Surgical repair usually needed

**Other Key Ligaments:**
- Ankle: ATFL, CFL, deltoid
- Shoulder: Glenohumeral ligaments, labrum
- Thumb: UCL (gamekeeper's/skier's)

**Treatment Principles:**
- Isolated MCL: Non-operative
- Isolated ACL: Depends on patient factors
- Combined injuries: Often surgical
- Reconstruction vs. repair decision`,
      keyTerms: [
        { term: 'laxity', definition: 'Looseness or instability of a joint from ligament damage' },
        { term: 'reconstruction', definition: 'Surgery using graft tissue to replace a torn ligament' },
        { term: 'posterolateral corner', definition: 'Complex of structures on outer back of knee including LCL' },
      ],
      analogies: [
        'ACL reconstruction is like replacing a broken cable with a new one.',
        'The knee ligaments work together like the cables on a suspension bridge.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ligament healing potential varies by location and blood supply. Understanding biomechanical function guides reconstruction techniques and rehabilitation progression.',
      explanation: `Comprehensive ligament care requires understanding of healing biology and joint stability.

**Healing Potential:**

*Good Healing (Extra-articular):*
- MCL
- Ankle lateral ligaments
- Acromioclavicular ligaments

*Poor Healing (Intra-articular):*
- ACL
- PCL
- Meniscus (inner zones)

**Factors Affecting Healing:**
- Blood supply
- Synovial fluid environment
- Mechanical loading
- Gap between torn ends

**ACL Injury:**

*Natural History:*
- Does not heal spontaneously
- Instability leads to meniscal/cartilage damage
- Increased OA risk regardless of treatment

*Reconstruction Considerations:*
- Graft choice (BPTB, hamstring, quad, allograft)
- Tunnel positioning
- Concurrent injuries
- Timing of surgery

**PCL Injury:**

*Non-Operative Management:*
- Isolated Grade I-II
- Quadriceps strengthening key
- Many return to sport without surgery

*Surgical Indications:*
- Grade III with symptoms
- Combined ligament injuries
- Failed conservative treatment

**Multiligament Knee:**
- KD classification
- Associated vascular/nerve injury
- Staged vs. acute treatment
- Extended rehabilitation

**Return to Sport Criteria:**
- Time from surgery (minimum 9 months ACL)
- Strength (LSI >90%)
- Hop tests (LSI >90%)
- Movement quality
- Psychological readiness`,
      keyTerms: [
        { term: 'extra-articular', definition: 'Outside the joint cavity; better blood supply and healing' },
        { term: 'intra-articular', definition: 'Inside the joint cavity; bathed in synovial fluid, poor healing' },
        { term: 'KD classification', definition: 'Knee dislocation classification based on ligaments injured' },
      ],
      clinicalNotes: 'ACL reconstruction reduces but does not eliminate long-term OA risk. Meniscal preservation at time of ACL reconstruction improves outcomes. Combined injuries require comprehensive evaluation.',
    },
    4: {
      level: 4,
      summary: 'Ligament reconstruction biomechanics address graft selection, tunnel positioning, and fixation to replicate native function. Understanding native anatomy and kinematics guides surgical technique.',
      explanation: `Advanced ligament surgery integrates anatomical and biomechanical principles.

**ACL Reconstruction Biomechanics:**

*Native ACL:*
- Two bundles: AM and PL
- AM: Tight in flexion
- PL: Tight in extension
- Ultimate load: ~2200N

*Graft Considerations:*
- BPTB: Bone-to-bone healing, anterior knee pain
- Hamstring: Less morbidity, slower incorporation
- Quadriceps: Emerging option, strong graft
- Allograft: No donor morbidity, higher failure in young athletes

*Tunnel Position:*
- Anatomic placement preferred
- Footprint restoration
- Isometry vs. anatomic debate
- Femoral tunnel: Anteromedial portal or transtibial

*Fixation:*
- Interference screws
- Suspensory fixation
- Must exceed rehabilitation forces

**PCL Reconstruction:**
- Single vs. double bundle
- Transtibial vs. inlay
- Graft options: Achilles allograft, BTB, quad

**Multiligament Reconstruction:**
- Staging considerations
- Allograft often necessary
- Address all pathology
- ROM preservation critical

**Biomechanical Testing:**
- Lachman (ACL)
- Posterior drawer (PCL)
- Varus/valgus stress (collaterals)
- Dial test (posterolateral corner)
- Pivot shift (rotatory instability)

**Rehabilitation Biomechanics:**
- Open vs. closed kinetic chain
- Quadriceps loading and graft strain
- Progressive loading principles
- Neuromuscular training`,
      keyTerms: [
        { term: 'anteromedial bundle', definition: 'ACL bundle taut in flexion, tested by Lachman' },
        { term: 'posterolateral bundle', definition: 'ACL bundle taut in extension, contributes to rotational stability' },
        { term: 'interference screw', definition: 'Fixation device securing graft in bone tunnel' },
      ],
      clinicalNotes: 'Anatomic ACL reconstruction aims to restore native footprints. Single-bundle reconstruction addresses most functional instability. Double-bundle may improve rotational control but is technically demanding.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ligament surgery integrates evidence on graft choice, rehabilitation protocols, and return-to-sport criteria. Ongoing research addresses graft healing optimization and injury prevention.',
      explanation: `Expert ligament care requires understanding of current evidence and optimization strategies.

**Evidence-Based ACL Management:**

*Graft Selection Evidence:*
- BPTB vs. hamstring: Similar outcomes, different complication profiles
- Allograft: Higher failure in young, active patients
- Quadriceps: Emerging evidence favorable

*Return to Sport:*
- Criteria-based not time-based
- Psychological factors important
- Re-tear risk: 5-15% ipsilateral, similar contralateral
- Early return increases re-tear risk

**MOON and MARS Cohorts:**
- Large prospective studies
- Graft choice outcomes
- Risk factor identification
- Meniscus treatment outcomes

**Emerging Concepts:**

*Bridge-Enhanced ACL Repair (BEAR):*
- Scaffold + suture repair
- Stimulates healing
- Early clinical trials
- May preserve native ligament

*Anterolateral Ligament:*
- Contribution to rotational stability
- ALL reconstruction for high-risk patients
- Combined with ACL reconstruction

**Biological Augmentation:**
- PRP: Variable evidence
- Stem cells: Investigational
- Growth factors: Graft healing optimization

**Prevention Programs:**
- FIFA 11+
- PEP program
- Reduce ACL injuries 50-80%
- Neuromuscular focus
- Implementation challenges

**Long-Term Outcomes:**
- OA development common
- 50% radiographic OA at 10-15 years
- Functional outcomes generally good
- Meniscal status affects outcomes

**Multiligament Evidence:**
- Timing of surgery debated
- Nerve recovery with early surgery
- Staged treatment for severe injuries
- Outcomes depend on injury pattern`,
      keyTerms: [
        { term: 'BEAR procedure', definition: 'Bridge-enhanced ACL repair; scaffold technique to stimulate healing' },
        { term: 'anterolateral ligament', definition: 'Secondary stabilizer whose reconstruction may improve rotational control' },
        { term: 'MOON cohort', definition: 'Multicenter Orthopaedic Outcomes Network; large ACL study group' },
      ],
      clinicalNotes: 'Prevention programs are highly effective but underutilized. ACL reconstruction reduces instability but does not prevent OA. Meniscal preservation is critical for long-term outcomes.',
    },
  },

  media: [
    {
      id: 'ligament-tear-grades',
      type: 'diagram',
      filename: 'ligament-injury-grades.svg',
      title: 'Ligament Injury Grades',
      description: 'Grade I, II, and III ligament injuries',
    },
  ],
  citations: [
    {
      id: 'ligament-ref',
      type: 'textbook',
      title: 'Ligament Injuries and Reconstruction',
      source: 'Sports Medicine Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-knee-joint', targetType: 'structure', relationship: 'related', label: 'Knee Anatomy' },
    { targetId: 'ortho-patient-sprains-strains', targetType: 'condition', relationship: 'related', label: 'Sprains and Strains' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'sports medicine', 'ligaments'],
    keywords: ['ligament', 'ACL', 'MCL', 'tear', 'reconstruction'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ligamentTearsContent;
