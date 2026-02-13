import { EducationalContent } from '../../../types';

export const jointReplacementContent: EducationalContent = {
  id: 'ortho-joint-replacement',
  type: 'topic',
  name: 'Joint Replacement Surgery',
  alternateNames: ['Arthroplasty', 'Total joint replacement', 'TJR', 'Joint reconstruction'],
  hpoId: 'HP:0001367',

  levels: {
    1: {
      level: 1,
      summary: 'Joint replacement surgery is an operation where a damaged joint is removed and replaced with an artificial joint made of metal and plastic, helping people walk and move without pain.',
      explanation: `When arthritis or injury damages a joint so badly that medicine and other treatments don't help anymore, doctors can replace the joint with an artificial one.

**What Gets Replaced:**
- Hip replacement: Most common and successful
- Knee replacement: Also very common
- Shoulder replacement: Less common but growing
- Other joints: Ankle, elbow, finger joints

**Who Needs It:**
- People with severe arthritis
- Joint pain that limits daily activities
- Pain that doesn't improve with other treatments
- X-rays showing bone-on-bone contact

**The Artificial Joint:**
- Made of strong metal (titanium, cobalt-chrome)
- Plastic parts for smooth movement
- Designed to work like your natural joint
- Can last 15-20+ years

**What to Expect:**

*Before Surgery:*
- Medical tests to make sure you're healthy
- Stop certain medications
- Plan for recovery at home
- Learn exercises you'll do after

*The Surgery:*
- Takes 1-2 hours usually
- General anesthesia (asleep) or spinal (numb from waist down)
- Hospital stay: 1-3 days typically

*Recovery:*
- Physical therapy starts right away
- Walker or crutches at first
- Most people walk without support in 4-6 weeks
- Full recovery takes several months

**Benefits:**
- Pain relief (main reason for surgery)
- Better movement
- Return to activities you enjoy
- Improved quality of life

**Risks:**
- Infection (rare but serious)
- Blood clots
- Loosening over time
- Dislocation (hip)

**Results:**
- 90-95% of people have good outcomes
- Most people are very satisfied
- Can return to walking, swimming, golf
- Avoid high-impact sports`,
      keyTerms: [
        { term: 'joint replacement', definition: 'Surgery to replace a damaged joint with an artificial one' },
        { term: 'arthritis', definition: 'A condition where joints become painful and stiff' },
        { term: 'prosthesis', definition: 'The artificial joint that replaces the natural one' },
        { term: 'physical therapy', definition: 'Exercises and treatments to help you recover and get stronger' },
      ],
      analogies: [
        'A joint replacement is like replacing a worn-out car part - the new part lets everything work smoothly again.',
        'The artificial joint is like a high-tech hinge that allows your bones to move freely without grinding together.',
        'Recovery is like learning to ride a bike again - your body needs time to get used to something new.',
      ],
      examples: [
        'A 70-year-old with severe knee arthritis who can barely walk to the mailbox.',
        'A former athlete whose hip was damaged by injury and arthritis.',
        'Someone who tried medications, injections, and physical therapy but still has severe pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Total joint arthroplasty replaces damaged articular surfaces with prosthetic components, providing pain relief and improved function for end-stage joint disease when conservative measures have failed.',
      explanation: `Joint replacement is one of the most successful orthopedic procedures, with well-established indications, techniques, and outcomes.

**Indications:**

*Primary:*
- End-stage osteoarthritis
- Rheumatoid arthritis
- Avascular necrosis
- Post-traumatic arthritis

*Clinical Criteria:*
- Pain limiting function
- Failed conservative treatment
- Radiographic evidence of joint destruction
- Patient motivation for rehabilitation

**Total Hip Arthroplasty (THA):**

*Components:*
- Acetabular cup (metal shell + liner)
- Femoral stem (cemented or press-fit)
- Femoral head (metal or ceramic)

*Approaches:*
- Posterior: Most common
- Anterior: Muscle-sparing, faster recovery
- Lateral: Good visualization

*Bearing Surfaces:*
- Metal-on-polyethylene: Standard
- Ceramic-on-polyethylene: Lower wear
- Ceramic-on-ceramic: Lowest wear, squeaking risk

**Total Knee Arthroplasty (TKA):**

*Components:*
- Femoral component (metal)
- Tibial component (metal tray + polyethylene insert)
- Patellar component (optional)

*Types:*
- Cruciate-retaining (CR)
- Posterior-stabilized (PS)
- Unicompartmental (partial)

*Alignment:*
- Mechanical axis restoration
- Gap balancing vs. measured resection

**Pre-operative Optimization:**

*Medical:*
- Cardiac clearance
- Glycemic control (HbA1c <8%)
- Dental clearance
- Nutritional status

*Surgical Site:*
- MRSA screening and decolonization
- Urinary tract infection treatment
- Skin preparation

**Perioperative Care:**

*Anesthesia:*
- Spinal preferred (lower VTE, less blood loss)
- General if spinal contraindicated
- Regional blocks for pain control

*Blood Management:*
- Tranexamic acid (reduces blood loss)
- Cell saver
- Restrictive transfusion threshold

*VTE Prophylaxis:*
- Aspirin (low risk)
- Enoxaparin or rivaroxaban (higher risk)
- 2-6 weeks post-operative

**Rehabilitation:**

*Early Mobilization:*
- Day of surgery or next day
- Weight bearing as tolerated (most cases)
- Early physical therapy

*Goals:*
- Independence with ambulation
- Safe stair climbing
- Return to activities in 3-6 months`,
      keyTerms: [
        { term: 'arthroplasty', definition: 'Surgical reconstruction or replacement of a joint', pronunciation: 'ar-THRO-plas-tee' },
        { term: 'acetabulum', definition: 'The socket portion of the hip joint in the pelvis' },
        { term: 'cemented vs. uncemented', definition: 'Methods of fixing prosthesis to bone; cemented uses bone cement, uncemented relies on bone ingrowth' },
        { term: 'tranexamic acid', definition: 'Medication that reduces bleeding during surgery' },
        { term: 'mechanical axis', definition: 'The alignment line from hip center to ankle center through the knee' },
        { term: 'unicompartmental', definition: 'Partial knee replacement affecting only one part of the knee' },
      ],
      analogies: [
        'The acetabular cup is like a bowl that holds the ball of the hip.',
        'Cemented fixation is like gluing a post in place; uncemented is like bone growing into a rough surface to hold it.',
        'A unicompartmental knee is like replacing one tire instead of all four when only one is worn out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Total joint arthroplasty requires understanding of biomechanics, implant selection, surgical techniques, and complication management to optimize patient outcomes.',
      explanation: `Comprehensive joint replacement care integrates preoperative planning, surgical technique, and outcomes optimization.

**Biomechanics:**

*Hip:*
- Joint reaction force: 3-4x body weight walking
- Offset: Lever arm for abductors
- Leg length: Must balance with offset
- Version: Anteversion ~15 degrees

*Knee:*
- Loads up to 4-7x body weight with stairs
- Tibiofemoral alignment
- Patellofemoral tracking
- Ligament balance

**Implant Selection:**

*Hip Fixation:*
- Cemented: Older patients, poor bone
- Uncemented: Younger, active patients
- Hybrid: Cemented stem, uncemented cup

*Hip Bearing Surfaces:*
| Surface | Wear Rate | Pros | Cons |
|---------|-----------|------|------|
| Metal-PE | Higher | Established | Wear particles |
| Ceramic-PE | Lower | Durability | Cost |
| Ceramic-ceramic | Lowest | Young active | Squeaking, fracture |

*Knee Design:*
- Cruciate-retaining: Native PCL preserved
- Posterior-stabilized: PCL substitution with cam
- Varus-valgus constrained: Ligament insufficiency
- Hinge: Severe instability

**Surgical Technique:**

*Hip - Posterior Approach:*
- External rotators divided
- Capsule incised
- Hip dislocated posteriorly
- Short external rotator repair important

*Hip - Anterior Approach:*
- Intermuscular (TFL/Sartorius and Rectus)
- Lower dislocation risk
- Positioning challenges
- Learning curve

*Knee:*
- Medial parapatellar arthrotomy
- Bone cuts with jigs
- Gap balancing
- Cement fixation standard

**Computer Navigation/Robotics:**

*Potential Benefits:*
- Improved alignment accuracy
- Reproducible technique
- Smaller incisions (some systems)

*Considerations:*
- Learning curve
- Operative time
- Cost
- Outcome benefits debated

**Complications:**

*Infection (PJI):*
- Incidence: 1-2%
- Risk factors: Diabetes, obesity, immunosuppression
- Diagnosis: Labs (ESR, CRP), aspiration, cultures
- Treatment: Debridement + antibiotics vs. revision

*Instability:*
- Hip: Dislocation (posterior approach higher risk)
- Knee: Flexion/extension gap mismatch

*Aseptic Loosening:*
- Wear debris → osteolysis → loosening
- Most common long-term failure mode

*VTE:*
- DVT: 40-60% without prophylaxis
- Fatal PE: <1% with prophylaxis
- Extended prophylaxis reduces risk

**Outcomes:**

*Survivorship:*
- Hip: 95% at 10 years, 85% at 20 years
- Knee: 90-95% at 15-20 years

*Patient-Reported Outcomes:*
- HOOS, KOOS
- SF-36
- Satisfaction: 85-95%`,
      keyTerms: [
        { term: 'offset', definition: 'Distance from femoral head center to femoral shaft axis; affects abductor function' },
        { term: 'periprosthetic joint infection', definition: 'Infection around an artificial joint; serious complication requiring aggressive treatment' },
        { term: 'aseptic loosening', definition: 'Implant loosening without infection, often from wear particle-induced osteolysis' },
        { term: 'osteolysis', definition: 'Bone resorption around implant caused by wear debris and inflammatory response' },
        { term: 'gap balancing', definition: 'Technique ensuring equal tension in flexion and extension during knee replacement' },
        { term: 'HOOS/KOOS', definition: 'Hip/Knee Osteoarthritis Outcome Scores; validated patient-reported measures' },
      ],
      clinicalNotes: 'Anterior hip approach has lower dislocation rate but higher wound complications and learning curve. Ceramic bearings: Risk of squeaking (up to 10%), rare catastrophic fracture. Navigation improves alignment precision but outcome advantages unclear. PJI diagnosis requires combination of criteria - no single test is definitive.',
    },
    4: {
      level: 4,
      summary: 'Advanced arthroplasty encompasses complex primary cases, revision surgery, and management of complications with understanding of failure mechanisms and reconstructive options.',
      explanation: `Complex joint replacement requires expertise in difficult anatomy, revision techniques, and complication management.

**Complex Primary Cases:**

*Hip:*
- Developmental dysplasia (DDH)
- Post-traumatic
- Protrusio acetabuli
- Ankylosed hip

*DDH Considerations:*
- High hip center
- Deficient acetabulum
- Femoral abnormalities
- Leg length discrepancy

*Knee:*
- Severe deformity (>15 degrees)
- Prior osteotomy
- Stiff knee
- Bone loss
- Ligament insufficiency

**Revision Surgery:**

*Indications:*
- Aseptic loosening
- Infection
- Instability
- Fracture
- Wear/osteolysis

*Hip Revision - Femoral:*
- Paprosky classification
- Options: Long stem, tapered, modular
- Strut grafts for defects

*Hip Revision - Acetabular:*
- Paprosky classification (I, IIA/B/C, IIIA/B)
- Options: Revision shell, cage, custom implant
- Bone graft for defects

*Knee Revision:*
- Anderson Orthopaedic Research Institute (AORI) bone defect classification
- Stems, augments, cones, sleeves
- Constraint level selection

**Periprosthetic Joint Infection:**

*Diagnosis (MSIS Criteria):*
- Major: Sinus tract, two positive cultures
- Minor: Elevated ESR/CRP, elevated synovial WBC, positive histology, single positive culture

*Treatment:*
- Acute (<4 weeks): DAIR (Debridement, Antibiotics, Implant Retention)
- Chronic: Two-stage exchange (most common US)
- One-stage: Growing evidence

*Two-Stage Exchange:*
1. Explant all components
2. Thorough debridement
3. Antibiotic spacer
4. 6+ weeks IV antibiotics
5. Repeat aspiration, labs
6. Reimplantation if resolved

**Periprosthetic Fractures:**

*Hip - Vancouver Classification:*
- Type A: Trochanter
- Type B: Around stem (B1: Stable, B2: Loose, B3: Loose + bone loss)
- Type C: Below stem

*Treatment:*
- B1: ORIF
- B2: Revision stem + fixation
- B3: Revision + reconstruction

*Knee - Classifications:*
- Supracondylar
- Around component
- Below stem

**Instability:**

*Hip:*
- Risk factors: Posterior approach, component malposition, soft tissue laxity
- Treatment: Closed reduction, brace, revision if recurrent
- Constrained liner or dual mobility option

*Knee:*
- Flexion instability: Undersized femur, PCL laxity
- Extension instability: Overresection, MCL injury
- Global: Revision to constrained

**Adverse Local Tissue Reactions:**

*Metal-on-Metal:*
- ALTR (pseudotumor)
- Elevated cobalt/chromium
- Monitor symptomatic patients
- Revision if progressive

**Special Implants:**

*Dual Mobility (Hip):*
- Inner articulation: Small head in polyethylene
- Outer articulation: Polyethylene in shell
- Reduced dislocation risk
- Growing indications

*Hinged Knee:*
- Rotating hinge most common
- Indications: Massive instability, tumor
- Higher loosening rates`,
      keyTerms: [
        { term: 'Paprosky classification', definition: 'System for classifying acetabular and femoral bone defects in revision hip surgery' },
        { term: 'DAIR', definition: 'Debridement, Antibiotics, Implant Retention; treatment for acute PJI' },
        { term: 'two-stage exchange', definition: 'Revision for chronic PJI: Removal, spacer, antibiotics, then reimplantation' },
        { term: 'Vancouver classification', definition: 'System for classifying periprosthetic hip fractures around femoral stem' },
        { term: 'dual mobility', definition: 'Hip bearing design with two articulating surfaces to reduce dislocation risk' },
        { term: 'ALTR', definition: 'Adverse Local Tissue Reaction; soft tissue damage from metal debris' },
      ],
      clinicalNotes: 'Two-stage exchange remains gold standard for chronic PJI in North America - success rates 80-90%. Vancouver B2 fractures (loose stem) require revision, not just fixation. Dual mobility reduces dislocation risk but long-term wear data still emerging. Metal-on-metal surveillance: Monitor serum cobalt/chromium, imaging if symptomatic or levels elevated.',
    },
    5: {
      level: 5,
      summary: 'Contemporary arthroplasty research encompasses personalized implants, biologics, outcome optimization, and value-based care models with focus on joint preservation and longevity.',
      explanation: `State-of-the-art joint replacement integrates emerging technology, biological approaches, and system-level quality optimization.

**Personalized Implants:**

*Custom Implants:*
- 3D-printed acetabular components
- Patient-specific instrumentation
- Custom femoral stems for deformity

*Kinematic Alignment:*
- Restore native alignment rather than mechanical
- Debate: Better function vs. longevity concerns
- Individualized approach

*Robotic Surgery:*
- Mako, ROSA systems
- Consistent bone preparation
- Soft tissue tensioning
- Learning curve considerations

**Materials Science:**

*Bearing Surfaces:*
- Highly cross-linked polyethylene
- Vitamin E-stabilized PE
- Ceramic composites
- PEEK-OPTIMA

*Fixation:*
- Porous metal (trabecular)
- 3D-printed titanium
- Bioactive coatings
- Antibiotic-loaded coatings (research)

**Biologics:**

*PRP/Stem Cells:*
- Limited evidence for joint preservation
- May delay but not prevent arthroplasty
- Research ongoing

*Cartilage Restoration:*
- Pre-arthroplasty alternative
- MACI, osteochondral allograft
- Patient selection critical

**Outpatient/Same-Day:**

*Evolution:*
- Hip and knee increasingly outpatient
- Careful patient selection
- Enhanced recovery protocols
- Cost considerations

*Criteria:*
- ASA I-II
- BMI <40
- Support at home
- No significant comorbidities

**Enhanced Recovery (ERAS):**

*Components:*
- Preoperative education
- Multimodal analgesia
- Regional anesthesia
- Minimizing opioids
- Early mobilization
- Nutritional optimization

*Outcomes:*
- Reduced LOS
- Lower complications
- Higher satisfaction
- Cost savings

**Value-Based Care:**

*Bundled Payments:*
- Episode-based reimbursement
- Includes 90-day complications
- Incentivizes quality

*Quality Metrics:*
- Readmission rates
- Complications
- Patient-reported outcomes
- Cost efficiency

*Registries:*
- AJRR (American Joint Replacement Registry)
- AAOS registries
- Implant performance tracking
- Quality improvement

**Infection Prevention:**

*Novel Approaches:*
- Povidone-iodine irrigation
- Intrawound vancomycin
- Antibiotic-loaded cement (all cases?)
- Silver/iodine coatings

*Decolonization:*
- MRSA/MSSA screening
- Nasal mupirocin
- Chlorhexidine bathing

**Emerging Technologies:**

*Sensors:*
- Intraoperative ligament tension
- Post-op activity monitoring
- Smart implants (research)

*AI/Machine Learning:*
- Outcome prediction
- Risk stratification
- Image analysis
- Treatment optimization

**Longevity and Younger Patients:**

*Challenges:*
- Higher activity demands
- Longer lifespan
- Multiple revisions expected

*Strategies:*
- Bearing surface selection
- Activity modification counseling
- Regular surveillance
- Joint preservation when possible

**Global Considerations:**

*Disparities:*
- Access to surgery
- Outcomes by race/socioeconomic status
- Resource-limited settings

*International Variations:*
- Cemented vs. uncemented preferences
- Hospitalization practices
- Rehabilitation models`,
      keyTerms: [
        { term: 'kinematic alignment', definition: 'Knee replacement philosophy restoring native joint line rather than neutral mechanical axis' },
        { term: 'highly cross-linked polyethylene', definition: 'Radiation-treated PE with improved wear resistance for joint replacement' },
        { term: 'enhanced recovery', definition: 'Multimodal protocol to optimize perioperative care and accelerate recovery' },
        { term: 'bundled payment', definition: 'Reimbursement model covering entire episode of care with shared savings/risk' },
        { term: 'AJRR', definition: 'American Joint Replacement Registry; national database tracking implant outcomes' },
        { term: 'patient-specific instrumentation', definition: 'Custom surgical guides based on preoperative imaging for improved precision' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- THA survivorship: 95% at 10 years
- PJI diagnosis requires combination of criteria
- Two-stage exchange for chronic infection
- DVT prophylaxis: Extended (2-6 weeks)
- Metal-on-metal: Monitor for ALTR

**Emerging Evidence:**
- Outpatient TJA safe in selected patients
- Robotic surgery improves consistency but outcome advantages debated
- Kinematic alignment: Promising but long-term data needed
- Aspirin non-inferior to anticoagulation for VTE prophylaxis in low-risk patients

**Practice Considerations:**
- Enhanced recovery protocols are standard of care
- Registry participation improves outcomes
- Value-based care driving quality focus
- Younger patients need counseling about longevity and activity`,
    },
  },

  media: [
    {
      id: 'hip-replacement-components',
      type: 'diagram',
      filename: 'hip-replacement-components.svg',
      title: 'Total Hip Replacement Components',
      description: 'Acetabular cup, liner, femoral head, and stem',
    },
    {
      id: 'knee-replacement-components',
      type: 'diagram',
      filename: 'knee-replacement-components.svg',
      title: 'Total Knee Replacement Components',
      description: 'Femoral component, tibial tray, polyethylene insert',
    },
  ],
  citations: [
    {
      id: 'aaos-tjr-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline: Management of Osteoarthritis of the Hip and Knee',
      source: 'American Academy of Orthopaedic Surgeons',
      url: 'https://www.aaos.org/',
      license: 'Copyright AAOS',
    },
    {
      id: 'ajrr-report',
      type: 'article',
      title: 'American Joint Replacement Registry Annual Report',
      source: 'AJRR',
      url: 'https://www.aaos.org/registries/registry-program/american-joint-replacement-registry/',
      license: 'Copyright AAOS',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-osteoarthritis', targetType: 'condition', relationship: 'related', label: 'Osteoarthritis' },
    { targetId: 'ortho-joint-anatomy', targetType: 'structure', relationship: 'related', label: 'Joint Anatomy' },
    { targetId: 'ortho-rehabilitation-principles', targetType: 'topic', relationship: 'related', label: 'Rehabilitation' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'surgery', 'arthroplasty'],
    keywords: ['joint replacement', 'hip replacement', 'knee replacement', 'arthroplasty', 'prosthesis'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default jointReplacementContent;
