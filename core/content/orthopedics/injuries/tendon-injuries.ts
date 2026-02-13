import { EducationalContent } from '../../types';

export const tendonInjuriesContent: EducationalContent = {
  id: 'ortho-patient-tendon-injuries',
  type: 'condition',
  name: 'Tendon Injuries',
  alternateNames: ['Tendinopathy', 'Tendon tear', 'Tendinitis', 'Tendon rupture'],

  levels: {
    1: {
      level: 1,
      summary: 'Tendons connect muscles to bones. They can be injured from overuse (tendinitis) or sudden force (tears). Most tendon problems improve with rest and physical therapy.',
      explanation: `Tendons are strong cords that connect your muscles to your bones. When you move, your muscles pull on tendons to move your bones.

**Types of Tendon Problems:**
- **Tendinitis**: Irritation and inflammation from overuse
- **Tendinosis**: Chronic wear and tear without much inflammation
- **Partial tear**: Some tendon fibers are torn
- **Complete tear (rupture)**: Tendon is completely torn

**Common Locations:**
- Shoulder (rotator cuff)
- Elbow (tennis elbow, golfer's elbow)
- Wrist (De Quervain's)
- Knee (patellar tendon)
- Achilles (back of ankle)

**Symptoms:**
- Pain during activity
- Stiffness in the morning
- Tenderness when touched
- Swelling
- Weakness (especially with tears)

**Treatment:**
- Rest from painful activities
- Ice
- Anti-inflammatory medications
- Physical therapy
- Surgery for complete tears`,
      keyTerms: [
        { term: 'tendon', definition: 'Strong cord connecting muscle to bone' },
        { term: 'tendinitis', definition: 'Irritation and inflammation of a tendon' },
        { term: 'rupture', definition: 'Complete tear of a tendon' },
      ],
      analogies: [
        'A tendon is like a rope connecting a sail (muscle) to a boat (bone).',
        'Tendinitis is like a frayed rope that needs time to repair.',
      ],
      examples: [
        'Achilles tendon rupture often feels like being kicked in the back of the leg.',
        'Tennis elbow causes pain when gripping or lifting objects.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tendon injuries exist on a spectrum from overuse tendinopathy to acute rupture. Treatment depends on severity, location, patient factors, and functional demands.',
      explanation: `Tendon pathology involves a continuum from reactive changes to complete failure.

**Tendinopathy Continuum:**
1. **Reactive tendinopathy**: Acute overload, reversible
2. **Tendon dysrepair**: Failed healing, structural changes
3. **Degenerative tendinopathy**: Cell death, matrix breakdown

**Common Tendinopathies:**

*Upper Extremity:*
- Rotator cuff tendinopathy
- Lateral epicondylitis (tennis elbow)
- Medial epicondylitis (golfer's elbow)
- De Quervain's tenosynovitis

*Lower Extremity:*
- Patellar tendinopathy (jumper's knee)
- Achilles tendinopathy
- Gluteal tendinopathy
- Hamstring tendinopathy

**Acute Ruptures:**
- Achilles tendon
- Quadriceps tendon
- Patellar tendon
- Distal biceps

**Diagnosis:**
- History and examination
- Imaging (ultrasound, MRI)
- Specific provocative tests

**Treatment Principles:**

*Tendinopathy:*
- Load management
- Eccentric exercise
- Addressing contributing factors
- Rarely surgical

*Ruptures:*
- Surgical repair often indicated
- Non-operative for some patients
- Rehabilitation critical either way`,
      keyTerms: [
        { term: 'tendinopathy', definition: 'Umbrella term for tendon disease including tendinitis and tendinosis' },
        { term: 'eccentric exercise', definition: 'Exercise where muscle lengthens under load; beneficial for tendons' },
        { term: 'lateral epicondylitis', definition: 'Tennis elbow; tendinopathy at outer elbow' },
      ],
      analogies: [
        'Tendinopathy is like a worn tire - it develops gradually and needs proper care.',
        'Eccentric exercises are like slowly lowering a heavy box - controlled lengthening.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tendon healing biology differs from ligament healing, with implications for treatment. Load-based rehabilitation is the cornerstone of tendinopathy management, while ruptures require individualized surgical decision-making.',
      explanation: `Understanding tendon biology guides evidence-based treatment approaches.

**Tendon Structure:**
- Type I collagen (95%)
- Tenocytes produce and maintain matrix
- Hierarchical organization (fibrils, fibers, fascicles)
- Paratenon or sheath depending on location

**Tendinopathy Pathophysiology:**
- Increased proteoglycans, water content
- Disorganized collagen
- Neovascularization
- Nerve ingrowth (pain source)
- Failed healing response

**Load-Based Rehabilitation:**

*Isometric Loading:*
- Pain relief mechanism
- Starting point for painful tendons
- Muscle activation without length change

*Isotonic Progression:*
- Eccentric emphasis
- Heavy slow resistance training
- Progressive loading based on symptoms

*Energy Storage/Release:*
- Plyometrics
- Sport-specific drills
- Final rehabilitation phase

**Achilles Rupture:**

*Non-Operative:*
- Functional bracing
- Early weight-bearing
- Outcomes comparable to surgery in many patients
- Higher re-rupture rate (5-10% vs 2-3%)

*Surgical:*
- Open vs. percutaneous
- Earlier return to function
- Lower re-rupture rate
- Wound complications

**Rotator Cuff Tears:**

*Factors in Treatment:*
- Full-thickness vs. partial
- Acute vs. chronic
- Tear size and retraction
- Fatty infiltration
- Patient age and demands

*Outcomes:*
- Many tears can be managed conservatively
- Surgery for failed conservative treatment
- Retear rates significant but clinical success possible`,
      keyTerms: [
        { term: 'tenocyte', definition: 'Cell type in tendons responsible for matrix production and maintenance' },
        { term: 'neovascularization', definition: 'New blood vessel formation; associated with chronic tendinopathy' },
        { term: 'fatty infiltration', definition: 'Fat replacement of muscle; affects rotator cuff repair outcomes' },
      ],
      clinicalNotes: 'Achilles rupture treatment should be individualized. High-level athletes may benefit from surgery. Non-operative management with functional rehabilitation is acceptable alternative.',
    },
    4: {
      level: 4,
      summary: 'Tendon biomechanics and healing biology inform surgical technique and rehabilitation progression. Repair construct mechanics must balance fixation strength with tendon biology.',
      explanation: `Advanced tendon management integrates mechanical and biological principles.

**Tendon Biomechanics:**

*Mechanical Properties:*
- Viscoelastic behavior
- Stress-strain curve with toe region
- Ultimate tensile strength: 50-100 MPa
- Strain to failure: 8-10%

*Function:*
- Force transmission
- Energy storage and release
- Load attenuation

**Healing Biology:**

*Phases:*
1. Inflammatory (days 1-7)
2. Proliferative (weeks 1-4)
3. Remodeling (weeks 4-12+)

*Intrinsic vs. Extrinsic:*
- Intrinsic: Tenocyte-mediated
- Extrinsic: Inflammatory cell-mediated
- Both contribute to healing

**Repair Techniques:**

*Suture Configuration:*
- Core suture (strength)
- Epitendinous suture (gliding)
- Locking vs. grasping
- 2-strand vs. 4-strand core

*Fixation Strength:*
- Must exceed forces during rehabilitation
- Gap formation correlates with failure
- Early motion protocols require strong repairs

**Flexor Tendon Zones:**
- Zone II (no man's land): Most challenging
- Pulley preservation critical
- Early active motion protocols

**Rotator Cuff Repair:**

*Single vs. Double Row:*
- Footprint coverage
- Contact pressure
- Clinical outcomes similar in many studies
- Retear rates may favor double row for large tears

*Biologic Augmentation:*
- PRP: Mixed evidence
- Scaffolds and patches
- Stem cells (investigational)

**Achilles Repair:**
- End-to-end (Krackow technique)
- Augmentation options
- Minimally invasive techniques`,
      keyTerms: [
        { term: 'viscoelastic', definition: 'Material properties dependent on both time and loading rate' },
        { term: 'Krackow stitch', definition: 'Locking tendon suture technique for secure fixation' },
        { term: 'epitendinous suture', definition: 'Peripheral suture improving gliding and gap resistance' },
      ],
      clinicalNotes: 'Early active motion protocols improve tendon gliding but require strong repair constructs. Zone II flexor tendon repairs particularly challenging due to sheath and pulley constraints.',
    },
    5: {
      level: 5,
      summary: 'Contemporary tendon management integrates evidence-based rehabilitation with emerging biologic and surgical innovations. Outcome optimization requires understanding of healing biology, patient factors, and functional demands.',
      explanation: `Expert tendon care requires comprehensive understanding of current evidence and emerging approaches.

**Evidence-Based Tendinopathy Management:**

*Load Management:*
- Progressive loading is cornerstone
- Heavy slow resistance effective
- Isometric for pain management
- Sport-specific loading progression

*Adjuncts:*
- Shockwave therapy: Moderate evidence
- Injection therapies: Variable evidence
- Glyceryl trinitrate patches: Some evidence for Achilles/tennis elbow

**Biological Augmentation:**

*PRP:*
- Tendinopathy: Better evidence than ruptures
- Preparation methods affect results
- Leukocyte content controversial

*Stem Cells:*
- Preclinical promise
- Limited clinical evidence
- Regulatory and cost considerations

*Growth Factors:*
- PDGF, TGF-beta, IGF-1 studied
- Delivery challenges
- Combined approaches emerging

**Rotator Cuff Evidence:**

*Non-Operative Success:*
- Many tears remain asymptomatic
- PT comparable to surgery for many
- Tear progression variable

*Surgical Outcomes:*
- Pain relief common
- Retear rates 20-70%
- Clinical improvement possible despite retear
- Patient selection critical

**Achilles Evidence:**

*KATA Trial:*
- Non-operative comparable to surgery
- Functional rehabilitation key
- Higher re-rupture non-operative

*Return to Sport:*
- Prolonged timeline
- Performance decrements common
- Position-specific considerations

**Emerging Technologies:**
- Tissue engineering
- 3D-printed scaffolds
- Gene therapy
- Enhanced repair constructs

**Outcome Measures:**
- VISA scores (tendinopathy-specific)
- ASES, Constant (shoulder)
- AOFAS (foot/ankle)
- Return to sport metrics`,
      keyTerms: [
        { term: 'heavy slow resistance', definition: 'Rehabilitation approach using high loads with slow controlled movements' },
        { term: 'VISA score', definition: 'Victorian Institute of Sport Assessment; tendinopathy outcome measure' },
        { term: 'extracorporeal shockwave therapy', definition: 'Non-invasive treatment using acoustic waves' },
      ],
      clinicalNotes: 'Tendinopathy management requires patience - tissue remodeling takes months. Quick-fix injections may provide short-term relief but don\'t address underlying pathology. Progressive loading remains the most evidence-based treatment.',
    },
  },

  media: [
    {
      id: 'tendon-anatomy',
      type: 'diagram',
      filename: 'tendon-structure.svg',
      title: 'Tendon Structure',
      description: 'Hierarchical organization of tendon',
    },
  ],
  citations: [
    {
      id: 'tendon-ref',
      type: 'textbook',
      title: 'Tendon Pathology and Treatment',
      source: 'Sports Medicine Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-shoulder-joint', targetType: 'structure', relationship: 'related', label: 'Shoulder Anatomy' },
    { targetId: 'ortho-patient-physical-therapy-role', targetType: 'concept', relationship: 'related', label: 'Physical Therapy' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'sports medicine', 'tendons'],
    keywords: ['tendon', 'tendinopathy', 'rupture', 'rotator cuff', 'Achilles'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default tendonInjuriesContent;
