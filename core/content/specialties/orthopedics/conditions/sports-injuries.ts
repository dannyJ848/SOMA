import { EducationalContent } from '../../../types';

export const sportsInjuriesContent: EducationalContent = {
  id: 'ortho-sports-injuries',
  type: 'condition',
  name: 'Sports Injuries',
  alternateNames: ['Athletic injuries', 'Sports medicine conditions', 'Exercise-related injuries'],
  hpoId: 'HP:0001367',

  levels: {
    1: {
      level: 1,
      summary: 'Sports injuries happen when playing sports or exercising, affecting muscles, bones, joints, and ligaments, and most can heal well with proper rest and treatment.',
      explanation: `Sports and exercise are great for your health, but sometimes injuries happen. Understanding common injuries helps you know when to rest and when to see a doctor.

**Common Sports Injuries:**

*Sprains:*
- Stretching or tearing of ligaments (connect bones to bones)
- Most common: Ankle sprains
- Symptoms: Pain, swelling, bruising
- Treatment: Rest, ice, compression, elevation (RICE)

*Strains:*
- Stretching or tearing of muscles or tendons
- Common: Hamstring, groin, back muscles
- Often from sudden movements or overuse

*Knee Injuries:*
- ACL tear: Ligament in the middle of your knee
- Meniscus tear: Cartilage that cushions your knee
- Common in sports with jumping and cutting

*Shoulder Injuries:*
- Rotator cuff: Muscles that move your shoulder
- Dislocation: Shoulder pops out of place
- Common in throwing and overhead sports

*Fractures (Broken Bones):*
- Stress fractures: Small cracks from overuse
- Acute fractures: From falls or impacts

**When to See a Doctor:**
- Can't put weight on the injured area
- Severe swelling or deformity
- Popping sound at time of injury
- Numbness or tingling
- Pain that doesn't improve with rest

**RICE Treatment:**
- Rest: Stop the activity
- Ice: 20 minutes on, 20 minutes off
- Compression: Wrap with bandage
- Elevation: Raise above heart level

**Prevention:**
- Warm up before playing
- Use proper equipment
- Don't play through pain
- Build strength gradually
- Stay hydrated`,
      keyTerms: [
        { term: 'sprain', definition: 'An injury where ligaments are stretched or torn' },
        { term: 'strain', definition: 'An injury where muscles or tendons are stretched or torn' },
        { term: 'ACL', definition: 'Anterior cruciate ligament - a major ligament in your knee' },
        { term: 'RICE', definition: 'Rest, Ice, Compression, Elevation - first aid for injuries' },
      ],
      analogies: [
        'Ligaments are like strong rubber bands holding your bones together - if you stretch them too far, they can tear.',
        'Your rotator cuff is like a group of ropes that help move your arm - if one frays, it hurts to lift things.',
        'A stress fracture is like a crack in a tree branch that bends too many times.',
      ],
      examples: [
        'A basketball player who lands awkwardly and twists their ankle (sprain).',
        'A runner who feels a pop in the back of their thigh while sprinting (hamstring strain).',
        'A soccer player who hears a pop and their knee gives way when changing direction (ACL tear).',
      ],
    },
    2: {
      level: 2,
      summary: 'Sports injuries are classified by tissue type, mechanism, and severity, with treatment ranging from conservative management to surgical reconstruction based on injury characteristics and functional demands.',
      explanation: `Understanding sports injury classification and management helps guide appropriate treatment and return-to-sport decisions.

**Injury Classification:**

*By Tissue:*
- Bone: Fractures, stress reactions
- Ligament: Sprains (Grade I-III)
- Muscle/tendon: Strains (Grade I-III)
- Cartilage: Meniscus tears, chondral injury

*By Mechanism:*
- Acute traumatic
- Overuse/repetitive
- Contact vs. non-contact

**Knee Injuries:**

*ACL Tear:*
- Mechanism: Pivot, deceleration, landing
- Pop + immediate swelling
- Lachman test, pivot shift test
- MRI for confirmation
- Reconstruction usually needed for athletes

*Meniscus Tear:*
- Medial more common
- Mechanical symptoms (locking, catching)
- McMurray test
- Treatment based on location (red vs. white zone)

*MCL Injury:*
- Valgus stress mechanism
- Usually heals without surgery
- Grade I-III classification

**Shoulder Injuries:**

*Rotator Cuff:*
- SITS muscles: Supraspinatus, Infraspinatus, Teres minor, Subscapularis
- Impingement vs. tear
- Supraspinatus most commonly injured
- Treatment: PT first, surgery for full tears in young/active

*Shoulder Instability:*
- Anterior most common (95%)
- Bankart lesion (labral tear)
- Hill-Sachs lesion (humeral head compression)
- High recurrence in young athletes

*SLAP Tear:*
- Superior labrum anterior-posterior
- Overhead athletes (baseball pitchers)
- Often treated non-operatively now

**Ankle Injuries:**

*Lateral Ankle Sprain:*
- ATFL injured first, then CFL
- Ottawa rules for X-ray
- Most heal with conservative care
- Chronic instability in 10-20%

*High Ankle Sprain (Syndesmosis):*
- Longer recovery than lateral sprain
- Squeeze test, external rotation test
- May need fixation if unstable

**Stress Fractures:**
- Overuse injury
- Common sites: Metatarsals, tibia, femoral neck
- High-risk vs. low-risk locations
- Treatment: Activity modification, sometimes NWB

**Return to Play:**
- Criteria-based progression
- Sport-specific testing
- Psychological readiness
- Re-injury prevention`,
      keyTerms: [
        { term: 'Lachman test', definition: 'Physical exam test for ACL integrity; anterior tibial translation at 20-30 degrees flexion' },
        { term: 'McMurray test', definition: 'Rotational test for meniscus tears; pain/click with rotation' },
        { term: 'SLAP tear', definition: 'Superior Labrum Anterior-Posterior tear of the shoulder labrum' },
        { term: 'ATFL', definition: 'Anterior Talofibular Ligament - most commonly injured ankle ligament' },
        { term: 'Ottawa ankle rules', definition: 'Clinical criteria determining need for X-ray after ankle injury' },
        { term: 'syndesmosis', definition: 'Ligaments connecting tibia and fibula above the ankle joint' },
      ],
      analogies: [
        'The meniscus is like a shock absorber in a car - when it tears, you feel every bump.',
        'ACL reconstruction uses a tendon graft like replacing a broken rope with a new one.',
        'The labrum is like a suction cup that helps keep the shoulder in its socket.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sports injury management integrates biomechanical analysis, advanced imaging, and evidence-based treatment algorithms with consideration of sport-specific demands and long-term joint health.',
      explanation: `Comprehensive sports medicine requires understanding injury mechanisms, tissue healing biology, and rehabilitation science.

**ACL Injury:**

*Biomechanics:*
- Dynamic valgus collapse
- Internal rotation
- Anterior tibial translation
- Risk factors: Female sex, neuromuscular control, hormonal

*Treatment Decision:*
- Factors: Age, activity level, associated injuries
- "Coper" vs. "non-coper" phenotype
- Early vs. delayed reconstruction debate

*Graft Choices:*
- Bone-patellar tendon-bone: Gold standard, strong fixation
- Hamstring autograft: Less anterior knee pain
- Quadriceps tendon: Emerging option
- Allograft: Higher failure in young athletes

*Associated Injuries:*
- Meniscus tears (50-70%)
- Bone bruising
- Posterolateral corner
- Ramp lesions

**Meniscus:**

*Zones:*
- Red-red (peripheral): Vascular, can heal
- Red-white: Variable healing
- White-white (central): Avascular, limited healing

*Repair vs. Meniscectomy:*
- Preserve meniscus when possible
- Root tears require repair to prevent arthritis
- Partial meniscectomy for irreparable tears

**Rotator Cuff:**

*Pathophysiology:*
- Intrinsic: Degeneration, poor vascularity
- Extrinsic: Impingement, instability
- Critical zone of supraspinatus

*Imaging:*
- Ultrasound: Dynamic, operator dependent
- MRI: Gold standard
- MR arthrogram for labral pathology

*Treatment Algorithm:*
- PT for 3-6 months first (most cases)
- Surgery for: Full-thickness tears in active patients
  - Young patients with acute tears
  - Failure of conservative treatment

**Shoulder Instability:**

*First-time Dislocation:*
- Age <20: 90% recurrence without surgery
- Age >40: 50% rotator cuff tear
- Consider early surgery in young athletes

*Surgical Options:*
- Arthroscopic Bankart repair
- Open Latarjet for: Bone loss >25%, contact athletes, revision

**Stress Fractures:**

*Risk Assessment:*
- High risk: Femoral neck, anterior tibia, navicular, 5th metatarsal
- Low risk: Posterior tibia, fibula, metatarsal shaft

*Imaging:*
- X-ray often negative early
- MRI most sensitive
- Bone scan for multiple sites

*Treatment:*
- Low risk: Activity modification, gradual return
- High risk: Non-weight bearing, possible surgery`,
      keyTerms: [
        { term: 'dynamic valgus collapse', definition: 'Knee movement pattern associated with ACL injury; inward knee motion with internal rotation' },
        { term: 'Latarjet procedure', definition: 'Coracoid transfer for shoulder instability with significant bone loss' },
        { term: 'ramp lesion', definition: 'Meniscocapsular tear at posterior horn of medial meniscus; associated with ACL tears' },
        { term: 'coper', definition: 'ACL-deficient individual who can return to activity without instability' },
        { term: 'meniscal root tear', definition: 'Tear at meniscus attachment to tibia; functionally equivalent to total meniscectomy' },
        { term: 'bone-patellar tendon-bone', definition: 'ACL graft using central third of patellar tendon with bone blocks' },
      ],
      clinicalNotes: 'Meniscus preservation is crucial for long-term knee health - partial meniscectomy increases arthritis risk. Young athletes (<25) with ACL tears have high failure rates with allograft. Shoulder bone loss >25% requires bony procedure (Latarjet). MRI arthrogram superior to standard MRI for labral pathology.',
    },
    4: {
      level: 4,
      summary: 'Advanced sports medicine integrates biomechanical analysis, biologics, return-to-sport testing, and injury prevention programs with understanding of sport-specific demands and long-term articular consequences.',
      explanation: `Comprehensive sports medicine practice requires integration of surgical technique, rehabilitation science, and performance optimization.

**ACL Surgery - Advanced:**

*Anatomic Reconstruction:*
- Single vs. double bundle
- Femoral tunnel: Anatomic footprint
- Anteromedial portal technique
- Graft tensioning at 20-30 degrees

*Revision ACL:*
- Failure rate 5-15%
- Causes: Surgical error, biologic failure, trauma
- Staging for bone loss
- Graft selection: Allograft, contralateral autograft

*Pediatric ACL:*
- Physeal-sparing vs. transphyseal
- All-epiphyseal techniques
- Higher revision rates in young patients

*Concomitant Procedures:*
- Meniscus repair
- Cartilage restoration
- Posterolateral corner reconstruction
- High tibial osteotomy (varus alignment)

**Cartilage Restoration:**

*Options:*
- Microfracture: Fibrocartilage
- OATS/mosaicplasty: Small defects
- ACI/MACI: Larger defects
- Osteochondral allograft: Massive defects

*Selection Criteria:*
- Defect size and location
- Patient age and activity
- Alignment and stability
- Meniscus status

**Biologics in Sports Medicine:**

*PRP:*
- Leukocyte-poor vs. leukocyte-rich
- Variable evidence by condition
- Best evidence: Lateral epicondylitis, knee OA

*Stem Cells:*
- Bone marrow aspirate concentrate
- Adipose-derived
- Limited high-quality evidence

*Growth Factors:*
- BMP for fracture healing
- PDGF for tendon
- Regulatory considerations

**Return to Sport Testing:**

*ACL Criteria:*
- Time (minimum 9 months, often longer)
- Strength: Limb symmetry index >90%
- Hop testing: Limb symmetry >90%
- Quality of movement
- Psychological readiness (ACL-RSI)

*Phases:*
- Running program
- Agility
- Sport-specific drills
- Return to practice
- Return to competition

**Injury Prevention:**

*ACL Prevention Programs:*
- FIFA 11+
- PEP program
- Neuromuscular training
- 50-70% reduction in ACL injuries

*Components:*
- Plyometrics
- Strengthening
- Agility
- Proprioception
- Education

**Concussion Management:**

*Diagnosis:*
- Clinical evaluation
- SCAT5
- No imaging unless red flags

*Return to Play:*
- Symptom-limited activity
- Graduated return protocol
- Medical clearance required

*Chronic Effects:*
- Post-concussion syndrome
- CTE concerns
- Repeat injury risk`,
      keyTerms: [
        { term: 'limb symmetry index', definition: 'Ratio of injured to uninjured limb performance; target >90% for return to sport' },
        { term: 'ACL-RSI', definition: 'ACL Return to Sport after Injury scale; psychological readiness assessment' },
        { term: 'MACI', definition: 'Matrix-induced Autologous Chondrocyte Implantation for cartilage restoration' },
        { term: 'FIFA 11+', definition: 'Evidence-based warm-up program for ACL injury prevention' },
        { term: 'SCAT5', definition: 'Sport Concussion Assessment Tool; standardized concussion evaluation' },
        { term: 'physeal-sparing', definition: 'ACL reconstruction technique avoiding growth plate injury in children' },
      ],
      clinicalNotes: 'Return to sport before 9 months post-ACL reconstruction associated with increased re-injury. Limb symmetry index alone insufficient - quality of movement equally important. ACL prevention programs are evidence-based and should be routine for at-risk sports. Biologics show promise but high-quality evidence still limited for many applications.',
    },
    5: {
      level: 5,
      summary: 'Contemporary sports medicine research encompasses personalized rehabilitation, advanced biomechanics, tissue engineering, and long-term outcomes focus with emerging understanding of genetic risk factors and precision medicine approaches.',
      explanation: `State-of-the-art sports medicine integrates emerging science, technology, and personalized approaches to optimize outcomes and prevent long-term sequelae.

**Biomechanical Analysis:**

*Motion Capture:*
- 3D kinematics
- Force plates
- Wearable sensors
- Real-time feedback systems

*Risk Identification:*
- Landing mechanics
- Knee valgus angle
- Trunk position
- Hip strength ratios

*Performance Optimization:*
- Pitch mechanics
- Running gait analysis
- Sport-specific movement patterns

**Tissue Engineering:**

*Meniscus:*
- Scaffolds (collagen, synthetic)
- Cell-seeded constructs
- Meniscal allograft transplant
- Gene therapy approaches

*Cartilage:*
- Next-generation MACI
- Scaffold technologies
- Growth factor delivery
- iPSC-derived chondrocytes

*Ligament:*
- Tissue-engineered ACL
- Enhanced healing approaches
- Bridge-enhanced ACL repair

**Personalized Medicine:**

*Genetic Risk:*
- COL1A1, COL5A1 variants
- ACL injury susceptibility
- Tendinopathy risk
- Pharmacogenomics for recovery

*Biomarkers:*
- Cartilage degradation products
- Inflammatory markers
- Healing assessment
- Return-to-sport prediction

*Machine Learning:*
- Injury risk prediction
- Outcome modeling
- Treatment selection
- Image analysis

**Long-term Outcomes:**

*Post-traumatic OA:*
- 50% develop OA 10-20 years after ACL
- Meniscectomy accelerates arthritis
- Prevention strategies critical

*Quality of Life:*
- Return to sport rates: 65-85%
- Same level performance: 55-65%
- Psychological impact
- Career-ending injury

*Registry Data:*
- MOON consortium
- STABILITY trial
- MARS group
- Long-term follow-up importance

**Emerging Technologies:**

*Rehabilitation:*
- Blood flow restriction training
- Anti-gravity treadmills
- Virtual reality
- Gamification

*Imaging:*
- Quantitative MRI for healing
- T1rho/T2 mapping
- Ultrashort echo time
- Cartilage sodium imaging

*Wearables:*
- Load monitoring
- Recovery tracking
- Real-time feedback
- Injury prevention algorithms

**Special Populations:**

*Female Athletes:*
- 2-8x ACL injury risk
- Anatomic, hormonal, neuromuscular factors
- Targeted prevention programs
- Sex-specific research gaps

*Youth Athletes:*
- Specialization concerns
- Overuse injury epidemic
- Growth plate considerations
- Long-term development

*Adaptive Athletes:*
- Sport-specific injuries
- Prosthetic/equipment considerations
- Classification systems
- Emerging research

**Prevention Science:**

*Implementation:*
- Program adoption barriers
- Coach education
- System-level interventions
- Policy implications

*Effectiveness:*
- Number needed to treat
- Cost-effectiveness
- Population impact
- Sustainability`,
      keyTerms: [
        { term: 'COL1A1', definition: 'Collagen gene variant associated with ACL injury risk and tendinopathy' },
        { term: 'MOON consortium', definition: 'Multicenter Orthopaedic Outcomes Network; large ACL research database' },
        { term: 'blood flow restriction', definition: 'Training method using tourniquet to enhance strength gains with lower loads' },
        { term: 'T1rho mapping', definition: 'MRI technique sensitive to proteoglycan content in cartilage' },
        { term: 'bridge-enhanced ACL repair', definition: 'Emerging technique using scaffold to enhance native ACL healing' },
        { term: 'post-traumatic OA', definition: 'Osteoarthritis developing after joint injury; major long-term concern' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Meniscus preservation is protective against OA
- Young female athletes at highest ACL risk
- Prevention programs reduce ACL injuries by 50-70%
- Return to sport rates after ACL: ~80%, same level: ~65%
- Post-traumatic OA affects 50% after ACL injury

**Emerging Evidence:**
- ACL repair showing promise in selected patients
- Tissue engineering approaching clinical application
- Genetic risk profiling may guide prevention
- Machine learning improving outcome prediction

**Practice Considerations:**
- Comprehensive return-to-sport testing essential
- Psychological readiness often overlooked
- Prevention programs are underutilized
- Long-term outcomes must inform shared decision-making`,
    },
  },

  media: [
    {
      id: 'acl-injury-mechanism',
      type: 'diagram',
      filename: 'acl-injury-mechanism.svg',
      title: 'ACL Injury Mechanism',
      description: 'Dynamic valgus collapse pattern leading to ACL rupture',
    },
    {
      id: 'meniscus-zones',
      type: 'diagram',
      filename: 'meniscus-vascular-zones.svg',
      title: 'Meniscus Vascular Zones',
      description: 'Red-red, red-white, and white-white zones',
    },
  ],
  citations: [
    {
      id: 'aossm-guidelines',
      type: 'article',
      title: 'ACL Reconstruction Consensus Statement',
      source: 'American Orthopaedic Society for Sports Medicine',
      url: 'https://www.aossm.org/',
      license: 'Copyright AOSSM',
    },
    {
      id: 'moon-acl',
      type: 'article',
      title: 'MOON ACL Cohort Study',
      source: 'Journal of Bone and Joint Surgery',
      license: 'Copyright JBJS',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-joint-anatomy', targetType: 'structure', relationship: 'related', label: 'Joint Anatomy' },
    { targetId: 'ortho-physical-therapy', targetType: 'topic', relationship: 'related', label: 'Physical Therapy' },
    { targetId: 'ortho-fracture-types', targetType: 'condition', relationship: 'sibling', label: 'Fractures' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'sports medicine', 'rehabilitation'],
    keywords: ['ACL', 'meniscus', 'rotator cuff', 'ankle sprain', 'sports medicine', 'athletic injury'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sportsInjuriesContent;
