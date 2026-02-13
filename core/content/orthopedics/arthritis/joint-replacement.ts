import { EducationalContent } from '../../types';

export const jointReplacementContent: EducationalContent = {
  id: 'ortho-patient-joint-replacement-arthritis',
  type: 'concept',
  name: 'Joint Replacement for Arthritis',
  alternateNames: ['Arthroplasty', 'Total joint replacement', 'Joint surgery'],

  levels: {
    1: {
      level: 1,
      summary: 'Joint replacement surgery removes damaged joint surfaces and replaces them with artificial parts. It can dramatically reduce pain and improve movement when other treatments no longer work.',
      explanation: `When arthritis severely damages a joint and other treatments don't help, joint replacement may be an option.

**What Happens:**
- Damaged bone and cartilage are removed
- Metal and plastic parts replace the joint
- The new joint works like the natural one

**Common Replacements:**
- Hip replacement
- Knee replacement
- Shoulder replacement
- Ankle, elbow, and others less common

**When to Consider:**
- Severe pain affecting daily activities
- Pain not relieved by medications
- Difficulty walking, climbing stairs, or working
- Joint stiffness limiting motion

**Benefits:**
- Pain relief (usually significant)
- Improved mobility
- Better quality of life
- Most people very satisfied

**What to Expect:**
- Hospital stay: 1-3 days
- Recovery: Several weeks to months
- Physical therapy is essential
- Most return to normal activities`,
      keyTerms: [
        { term: 'joint replacement', definition: 'Surgery replacing a damaged joint with artificial parts' },
        { term: 'prosthesis', definition: 'The artificial joint implant' },
        { term: 'arthroplasty', definition: 'Medical term for joint replacement surgery' },
      ],
      analogies: [
        'A joint replacement is like replacing a worn-out hinge on a door with a new one.',
        'The prosthesis is like new ball bearings replacing old, worn ones.',
      ],
      examples: [
        'Someone with severe knee arthritis who can barely walk may get a new knee.',
        'After hip replacement, many patients return to golf, swimming, and hiking.',
      ],
    },
    2: {
      level: 2,
      summary: 'Arthroplasty replaces arthritic joint surfaces with prosthetic components. Success depends on appropriate patient selection, surgical technique, and rehabilitation.',
      explanation: `Joint replacement is one of the most successful operations in medicine.

**Indications:**
- End-stage arthritis
- Failed conservative management
- Significant functional limitation
- Adequate bone quality

**Joint-Specific Considerations:**

*Total Hip:*
- Ball and socket prosthesis
- Various surgical approaches
- Weight-bearing usually same day
- Excellent outcomes

*Total Knee:*
- Resurfaces femur, tibia, patella
- Ligament-balancing important
- More rehabilitation than hip
- Good outcomes but more variable satisfaction

*Total Shoulder:*
- Standard or reverse design
- Reverse for rotator cuff deficiency
- More complex rehabilitation

**Implant Fixation:**
- Cemented: Immediate stability
- Cementless: Bone grows into implant
- Hybrid: Combination

**Potential Complications:**
- Infection (1%)
- Blood clots
- Dislocation (hip)
- Implant loosening
- Nerve injury
- Leg length difference

**Recovery Timeline:**
- Weeks 1-2: Basic mobility, pain management
- Weeks 2-6: Increase activity, physical therapy
- 3-6 months: Most function restored
- 1 year: Maximum improvement`,
      keyTerms: [
        { term: 'cemented', definition: 'Implant fixed with bone cement' },
        { term: 'cementless', definition: 'Implant designed for bone to grow into surface' },
        { term: 'dislocation', definition: 'Ball coming out of socket; risk after hip replacement' },
      ],
      analogies: [
        'Cemented fixation is like gluing parts together; cementless is like letting a plant root take hold.',
        'Physical therapy after replacement is like breaking in new shoes - essential for comfort.',
      ],
    },
    3: {
      level: 3,
      summary: 'Arthroplasty success depends on patient optimization, surgical technique, and implant selection. Evidence-based protocols improve outcomes and reduce complications.',
      explanation: `Modern arthroplasty integrates patient optimization with surgical precision.

**Preoperative Optimization:**
- Medical clearance
- Glycemic control (HbA1c <8%)
- Smoking cessation
- Weight optimization (BMI considerations)
- Anemia correction
- Dental clearance
- Nasal decolonization

**Surgical Approaches:**

*Hip:*
- Anterior: Muscle-sparing, faster recovery
- Posterior: Familiar anatomy, extensile
- Lateral: Good exposure, abductor concerns

*Knee:*
- Medial parapatellar: Standard
- Subvastus: Faster quad recovery
- Midvastus: Compromise option

**Implant Selection:**

*Bearing Surfaces:*
- Metal on polyethylene: Standard
- Ceramic on ceramic: Low wear
- Highly crosslinked polyethylene

*Fixation:*
- Patient age and bone quality guide selection
- Cementless in younger, active patients
- Cemented in older or osteoporotic patients

**Enhanced Recovery Protocols:**
- Multimodal analgesia
- Early mobilization
- Blood conservation
- DVT prophylaxis
- Patient education

**Outcome Measures:**
- HOOS-JR, KOOS-JR
- Oxford Hip/Knee Score
- Patient satisfaction
- Complication rates`,
      keyTerms: [
        { term: 'enhanced recovery', definition: 'Protocol integrating best practices to optimize surgical outcomes' },
        { term: 'multimodal analgesia', definition: 'Using multiple pain medications to reduce opioid use' },
        { term: 'bearing surface', definition: 'The articulating surfaces of the prosthesis' },
      ],
      clinicalNotes: 'Modifiable risk factors should be optimized preoperatively. HbA1c >8%, active smoking, and morbid obesity increase complication risk. Patient expectations should be managed.',
    },
    4: {
      level: 4,
      summary: 'Arthroplasty biomechanics inform implant design, surgical technique, and rehabilitation. Understanding of tribology, fixation, and kinematic considerations guides clinical decision-making.',
      explanation: `Advanced arthroplasty requires integration of biomechanical principles with clinical practice.

**Hip Arthroplasty Biomechanics:**

*Head Size:*
- Larger heads: Greater stability, increased ROM
- Trade-off: Volumetric wear, metal ion release (MoM)
- 32-36mm common with modern poly

*Offset and Leg Length:*
- Offset affects abductor moment arm
- Restore native anatomy
- Templates and navigation

*Cup Position:*
- Lewinnek safe zone: 40+/-10 degrees inclination, 15+/-10 anteversion
- Combined anteversion concept
- Impingement avoidance

**Knee Arthroplasty Biomechanics:**

*Alignment Philosophy:*
- Mechanical alignment: Traditional
- Kinematic alignment: Restore constitutional alignment
- Ongoing debate

*Implant Design:*
- CR: Retains PCL
- PS: PCL substituting
- CCK: Constrained, for instability

*Balancing:*
- Flexion-extension gap matching
- Collateral ligament tension
- Patellofemoral tracking

**Tribology:**
- Wear mechanisms: Adhesive, abrasive, fatigue
- Polyethylene: Cross-linking reduces wear
- Third-body wear concerns
- Importance of surface finish

**Fixation Science:**
- Cemented: Immediate stability, cement mantle quality
- Cementless: Micromotion <150 microns for ingrowth
- Press-fit vs. line-to-line

**Robotic and Navigation:**
- Improved accuracy vs. jigs
- Component positioning precision
- Soft tissue balancing feedback
- Outcomes data accumulating`,
      keyTerms: [
        { term: 'tribology', definition: 'Science of wear and friction; important for implant longevity' },
        { term: 'kinematic alignment', definition: 'TKA technique restoring patient\'s natural alignment' },
        { term: 'combined anteversion', definition: 'Sum of femoral and acetabular version for hip stability' },
      ],
      clinicalNotes: 'Robotic assistance may improve component positioning accuracy. Clinical outcome advantage still being studied. Surgeon experience remains critical factor.',
    },
    5: {
      level: 5,
      summary: 'Contemporary arthroplasty integrates registry data, evidence-based protocols, and emerging technologies. Outcome optimization requires understanding of patient, surgical, and implant factors.',
      explanation: `Expert arthroplasty practice requires comprehensive understanding of outcomes and optimization.

**Registry Data:**

*Major Registries:*
- AOANJRR (Australia)
- NJR (UK)
- SHAR (Sweden)
- AJRR (US)

*Key Findings:*
- 10-year survival >95%
- Cemented fixation durable
- Large head CoC may have issues
- Patient factors affect outcomes

**Evidence-Based Protocols:**

*Infection Prevention:*
- Preoperative optimization
- Laminar flow (controversial)
- Antibiotic prophylaxis
- Careful soft tissue handling

*VTE Prevention:*
- Aspirin vs. anticoagulation debate
- Risk stratification
- Duration of prophylaxis

*Blood Management:*
- Tranexamic acid
- Preoperative anemia correction
- Restrictive transfusion triggers

**Persistent Pain:**
- 10-20% after TKA
- Infection workup
- Mechanical factors
- Neuropathic component
- Patient selection important

**Revision Surgery:**
- Increasing volume
- Complex undertaking
- Bone loss management
- Outcomes inferior to primary

**Emerging Technologies:**
- Robotics: Precision, consistency
- 3D printing: Custom implants
- Cementless designs evolving
- Bearing surfaces improving

**Value-Based Care:**
- Bundled payments
- Outcomes reporting
- Patient-reported outcomes
- Cost-effectiveness studies`,
      keyTerms: [
        { term: 'AJRR', definition: 'American Joint Replacement Registry; tracks implant outcomes' },
        { term: 'tranexamic acid', definition: 'Medication reducing surgical bleeding; standard in arthroplasty' },
        { term: 'bundled payment', definition: 'Single payment for episode of care including complications' },
      ],
      clinicalNotes: 'Registry data informs implant selection and identifies outliers. Patient-reported outcomes increasingly important for quality assessment. Persistent unexplained pain after TKA requires systematic evaluation.',
    },
  },

  media: [
    {
      id: 'joint-replacement-types',
      type: 'diagram',
      filename: 'arthroplasty-options.svg',
      title: 'Joint Replacement Options',
      description: 'Hip, knee, and shoulder replacement implants',
    },
  ],
  citations: [
    {
      id: 'arthroplasty-ref',
      type: 'textbook',
      title: 'Joint Replacement Surgery',
      source: 'Orthopedic Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
    { targetId: 'ortho-patient-joint-replacement-procedure', targetType: 'concept', relationship: 'related', label: 'Joint Replacement Procedure' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'surgery', 'arthroplasty'],
    keywords: ['joint replacement', 'arthroplasty', 'hip', 'knee'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default jointReplacementContent;
