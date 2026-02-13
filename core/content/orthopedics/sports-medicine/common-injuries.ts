import { EducationalContent } from '../../types';

export const commonSportsInjuriesContent: EducationalContent = {
  id: 'ortho-patient-common-sports-injuries',
  type: 'topic',
  name: 'Common Sports Injuries',
  alternateNames: ['Athletic injuries', 'Sports trauma', 'Exercise injuries'],

  levels: {
    1: {
      level: 1,
      summary: 'Sports injuries happen when you hurt yourself during physical activity. Most are minor and heal with rest, ice, and time, but some need medical attention.',
      explanation: `Playing sports and exercising is great for your health, but sometimes injuries happen. Knowing what to do can help you heal faster.

**Most Common Sports Injuries:**

*Sprains:*
- Stretched or torn ligaments (bands connecting bones)
- Ankle sprains are most common
- Symptoms: Pain, swelling, bruising

*Strains:*
- Stretched or torn muscles or tendons
- Hamstring and back strains are common
- Symptoms: Pain, muscle spasm, weakness

*Knee Injuries:*
- ACL tears (ligament in knee)
- Meniscus tears (cartilage cushion)
- Runner's knee (pain around kneecap)

*Shoulder Injuries:*
- Rotator cuff problems
- Shoulder dislocations
- Common in throwing sports

*Fractures:*
- Broken bones
- Stress fractures from overuse

**RICE Treatment (First 48-72 Hours):**
- **R**est: Stop the activity
- **I**ce: 20 minutes on, 20 minutes off
- **C**ompression: Wrap with elastic bandage
- **E**levation: Raise above heart level

**When to See a Doctor:**
- Severe pain or swelling
- Can't put weight on leg
- Joint feels unstable or gives way
- Numbness or tingling
- Visible deformity
- Pain doesn't improve after a few days

**Prevention Tips:**
- Warm up before activity
- Use proper equipment
- Learn correct technique
- Don't push through pain
- Allow time for recovery between activities`,
      keyTerms: [
        { term: 'sprain', definition: 'Injury to a ligament from stretching or tearing' },
        { term: 'strain', definition: 'Injury to a muscle or tendon from stretching or tearing' },
        { term: 'RICE', definition: 'Rest, Ice, Compression, Elevation - first aid for injuries' },
      ],
      analogies: [
        'A sprain is like stretching a rubber band too far - it can stretch or snap.',
        'Your ACL is like a seatbelt for your knee - it keeps things from moving too much.',
      ],
      examples: [
        'Rolling your ankle while running can cause an ankle sprain.',
        'Pulling your hamstring while sprinting is a muscle strain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sports injuries range from acute traumatic events to chronic overuse conditions, with treatment guided by injury severity, tissue involved, and functional demands of the athlete.',
      explanation: `Understanding injury types helps guide appropriate treatment and set realistic recovery expectations.

**Injury Classification:**

*By Onset:*
- **Acute**: Sudden event (tackle, fall, collision)
- **Overuse**: Gradual onset from repetitive stress

*By Tissue:*
- **Bone**: Fractures, stress fractures
- **Ligament**: Sprains (grades 1-3)
- **Muscle/Tendon**: Strains (grades 1-3)
- **Cartilage**: Meniscus tears, chondral injuries

**Common Injuries by Sport:**

| Sport | Common Injuries |
|-------|-----------------|
| Running | Stress fractures, IT band, plantar fasciitis |
| Soccer | ACL tears, ankle sprains, hamstring strains |
| Basketball | Ankle sprains, ACL tears, finger injuries |
| Baseball/Softball | Shoulder/elbow overuse, UCL injuries |
| Football | Concussion, knee ligament, ankle sprains |
| Tennis | Tennis elbow, shoulder problems, ankle sprains |

**Sprain Grading:**
- **Grade 1**: Mild stretching, minimal swelling, stable joint
- **Grade 2**: Partial tear, moderate swelling, some instability
- **Grade 3**: Complete tear, significant swelling, unstable joint

**Treatment Principles:**

*Acute Phase (0-72 hours):*
- RICE protocol (now often POLICE: Protection, Optimal Loading, Ice, Compression, Elevation)
- NSAIDs for pain and inflammation
- Immobilization if needed

*Subacute Phase (72 hours - 6 weeks):*
- Gradual return to movement
- Physical therapy
- Strengthening exercises
- Maintain cardiovascular fitness

*Return to Sport:*
- Full range of motion
- Strength equal to uninjured side
- Sport-specific drills without pain
- Confidence in the injured area

**When Surgery May Be Needed:**
- Complete ligament tears in active individuals (ACL)
- Displaced fractures
- Locked joints (meniscus)
- Significant instability
- Failed conservative treatment`,
      keyTerms: [
        { term: 'ACL', definition: 'Anterior cruciate ligament; key stabilizer in the knee', pronunciation: 'A-C-L' },
        { term: 'overuse injury', definition: 'Injury from repetitive stress rather than single event' },
        { term: 'meniscus', definition: 'C-shaped cartilage cushion in the knee', pronunciation: 'men-IS-kus' },
        { term: 'POLICE', definition: 'Protection, Optimal Loading, Ice, Compression, Elevation - updated first aid protocol' },
      ],
      analogies: [
        'Overuse injuries are like a rope fraying from repeated use rather than snapping at once.',
        'The meniscus works like a shock absorber in your car, cushioning impact.',
      ],
    },
    3: {
      level: 3,
      summary: 'Sports injuries involve complex interactions between intrinsic and extrinsic risk factors, with management guided by tissue healing biology, functional demands, and evidence-based rehabilitation protocols.',
      explanation: `Comprehensive sports injury management requires understanding of injury mechanisms, healing timelines, and return-to-play criteria.

**Risk Factors:**

*Intrinsic:*
- Previous injury (strongest predictor)
- Age and sex
- Anatomical factors (alignment, laxity)
- Muscle imbalances
- Fatigue and conditioning
- Psychological factors

*Extrinsic:*
- Playing surface
- Equipment
- Training load (acute:chronic workload ratio)
- Environmental conditions
- Rules and officiating

**Tissue Healing Biology:**

*Phases:*
1. Inflammatory (0-7 days): Pain, swelling, protection
2. Proliferative (7-21 days): Tissue repair, collagen deposition
3. Remodeling (21 days - months/years): Maturation, strengthening

*Healing Timelines:*
| Tissue | Approximate Healing Time |
|--------|-------------------------|
| Muscle | 2-4 weeks (mild-moderate) |
| Tendon | 6-12 weeks |
| Ligament | 6-12 weeks (longer for remodeling) |
| Bone | 6-12 weeks |
| Cartilage | Limited healing capacity |

**Key Injury Categories:**

*Knee Injuries:*
- ACL: Non-contact mechanism common; consider reconstruction in active individuals
- MCL: Usually heals without surgery
- Meniscus: Consider patient age, tear pattern, symptoms

*Ankle Injuries:*
- Lateral ankle sprain: Most common sports injury
- High ankle sprain: Longer recovery
- Achilles tendinopathy/rupture: Consider surgical vs. nonoperative

*Shoulder Injuries:*
- Rotator cuff: Tendinopathy, partial/full tears
- Labral tears: SLAP, Bankart
- Instability: Anterior most common

**Return-to-Play Criteria:**

*Objective measures:*
- Range of motion: Equal to contralateral
- Strength: >90% of uninjured side
- Functional testing: Hop tests, agility drills
- Sport-specific skills: Without compensation

*Psychological readiness:*
- Confidence in injured area
- Fear-avoidance addressed
- Re-injury anxiety managed

**Prevention Programs:**
- FIFA 11+: Soccer injury prevention
- PEP Program: ACL prevention
- Warm-up protocols
- Load management
- Neuromuscular training`,
      keyTerms: [
        { term: 'acute:chronic workload ratio', definition: 'Comparison of recent training load to longer-term load; used to predict injury risk' },
        { term: 'SLAP tear', definition: 'Superior labrum anterior-posterior tear in the shoulder', pronunciation: 'slap' },
        { term: 'hop test', definition: 'Functional test comparing single-leg hopping distance or symmetry' },
        { term: 'neuromuscular training', definition: 'Exercises targeting balance, agility, and muscle coordination' },
      ],
      clinicalNotes: 'Previous injury is the strongest predictor of future injury. Rehabilitation should address not only tissue healing but also neuromuscular control and psychological readiness to reduce re-injury risk.',
    },
    4: {
      level: 4,
      summary: 'Advanced sports injury management integrates biomechanical assessment, imaging interpretation, evidence-based treatment algorithms, and individualized return-to-sport protocols based on objective criteria.',
      explanation: `Expert-level sports injury care requires synthesis of clinical assessment, advanced diagnostics, and individualized treatment planning.

**Biomechanical Assessment:**

*Movement analysis:*
- Landing mechanics (knee valgus)
- Running gait analysis
- Throwing mechanics
- Sport-specific movement patterns

*Strength assessment:*
- Isokinetic dynamometry
- Hand-held dynamometry
- Functional strength tests

**Advanced Imaging:**

*MRI applications:*
- Ligament integrity (ACL, UCL)
- Meniscal tears: Pattern and location
- Cartilage assessment
- Bone stress injury grading

*Ultrasound:*
- Dynamic assessment
- Tendon evaluation
- Guided injections

**Evidence-Based Treatment:**

*ACL Injury:*
- Reconstruction vs. conservative: Active individuals benefit from reconstruction
- Graft options: Patellar tendon, hamstring, quadriceps, allograft
- Rehabilitation: 9-12 months minimum for return to sport
- Re-tear rates: 6-25%; higher with earlier return

*Meniscus:*
- Repair vs. partial meniscectomy: Repair when possible
- Root repairs: Preserve meniscal function
- Partial meniscectomy: 4x increased OA risk

*Rotator Cuff:*
- Physical therapy first for most tendinopathy
- Surgery for acute full-thickness tears in active individuals
- Outcomes: 80-90% good results with surgery when indicated

**Return-to-Sport Testing:**

*Objective criteria:*
- Limb symmetry index >90% for strength and hop tests
- Quality of movement (single-leg squat, landing)
- Sport-specific agility and cutting
- Psychological readiness (ACL-RSI scale)

*Clearance considerations:*
- Time since injury/surgery (biological healing)
- Achievement of objective milestones
- Successful completion of sport-specific progressions
- Athlete confidence

**Emerging Approaches:**

*Biologics:*
- PRP: Variable evidence by indication
- Stem cells: Limited high-quality evidence

*Technology:*
- Wearable load monitoring
- GPS tracking
- Video analysis

*Prevention:*
- ACL prevention programs: 50%+ reduction in injuries
- Load management algorithms
- Neuromuscular training integration`,
      keyTerms: [
        { term: 'limb symmetry index', definition: 'Comparison of injured to uninjured limb performance; >90% typically required' },
        { term: 'ACL-RSI', definition: 'ACL Return to Sport after Injury scale; measures psychological readiness' },
        { term: 'isokinetic dynamometry', definition: 'Machine-based strength testing at controlled speeds' },
        { term: 'kinetic chain', definition: 'Linked body segments working together during movement' },
      ],
      clinicalNotes: 'Return to sport based on time alone is insufficient. Objective criteria-based return reduces re-injury risk. Psychological readiness is increasingly recognized as critical for safe return.',
    },
    5: {
      level: 5,
      summary: 'Contemporary sports injury management integrates precision diagnostics, personalized treatment algorithms, advanced rehabilitation technologies, and data-driven return-to-performance protocols.',
      explanation: `Expert management of sports injuries requires integration of evolving evidence, advanced technologies, and individualized care within the context of athlete-specific demands.

**Precision Diagnostics:**

*Advanced imaging:*
- 3D MRI reconstruction
- T2 mapping for cartilage assessment
- MR arthrography for labral pathology
- Stress MRI/ultrasound

*Biomechanical analysis:*
- 3D motion capture
- Force plate analysis
- EMG analysis
- Markerless motion capture emerging

*Biomarkers:*
- Collagen turnover markers
- Inflammatory markers for load response
- Genetic risk profiling (emerging)

**Treatment Evidence:**

*ACL Reconstruction:*
- Anatomic single vs. double bundle: No clear superiority
- Augmentation techniques: ALL, lateral tenodesis
- Rehabilitation accelerated vs. traditional: Traditional safer for graft
- Return to sport: 9-12 months; criteria-based

*Cartilage Repair:*
- Microfracture: First-line for small lesions
- OATS: For contained lesions
- ACI/MACI: For larger lesions
- Outcomes depend on lesion characteristics and patient factors

*Tendon:*
- Eccentric loading programs: Strong evidence
- Shockwave therapy: Moderate evidence
- PRP: Variable by indication and preparation
- Surgery: Reserved for failed conservative care

**Return-to-Performance Framework:**

*Phases:*
1. Rehabilitation: Restore tissue, ROM, strength
2. Return to training: Sport-specific progressions
3. Return to competition: Full clearance
4. Return to performance: Achieve pre-injury level

*Monitoring:*
- Wearable technology
- Load-response assessment
- Fatigue monitoring
- Psychological assessment

**Prevention Science:**

*Evidence-based programs:*
- FIFA 11+: Reduces injuries 30-50%
- ACL prevention: NNT = 108 to prevent one ACL injury
- Load management: 10% week-over-week rule

*Implementation challenges:*
- Compliance critical for effectiveness
- Coach/athlete buy-in required
- Integration into training programs

**Emerging Technologies:**

*Rehabilitation:*
- Blood flow restriction training
- Anti-gravity treadmills
- Virtual reality for return-to-sport readiness

*Monitoring:*
- Real-time load tracking
- Sleep and recovery metrics
- AI for injury risk prediction

*Treatment:*
- Orthobiologics (PRP, stem cells)
- Tissue engineering
- Personalized rehabilitation algorithms

**System Considerations:**

*Multidisciplinary care:*
- Physicians, PT, athletic trainers, psychologists
- Team communication critical
- Shared decision-making

*Ethical considerations:*
- Pressure to return early
- Athlete autonomy vs. safety
- Long-term health vs. short-term performance

**Research Directions:**
- Personalized prevention
- Biomarker-guided treatment
- Regenerative approaches
- Optimal return-to-sport timing`,
      keyTerms: [
        { term: 'ALL', definition: 'Anterolateral ligament; augmentation target in ACL reconstruction' },
        { term: 'MACI', definition: 'Matrix-induced autologous chondrocyte implantation for cartilage repair' },
        { term: 'blood flow restriction training', definition: 'Training with partial vascular occlusion to enhance muscle adaptation' },
        { term: 'NNT', definition: 'Number needed to treat; number of patients who need intervention for one to benefit' },
      ],
      clinicalNotes: `**Key Practice Points:**
- Prevention programs (FIFA 11+, ACL prevention) significantly reduce injuries when implemented consistently
- Return-to-sport decisions should be criteria-based, not time-based
- Psychological readiness is a modifiable risk factor for re-injury
- Previous injury remains the strongest predictor of future injury
- Load management using acute:chronic workload ratios helps guide training

**Decision Framework:**
1. Accurate diagnosis with appropriate imaging
2. Evidence-based treatment selection
3. Individualized rehabilitation addressing all deficits
4. Objective return-to-sport testing
5. Psychological readiness assessment
6. Gradual return with monitoring
7. Secondary prevention integration`,
    },
  },

  media: [
    {
      id: 'sports-injuries-overview',
      type: 'diagram',
      filename: 'common-sports-injuries.svg',
      title: 'Common Sports Injuries by Location',
      description: 'Body diagram showing frequent sports injury sites',
    },
  ],
  citations: [
    {
      id: 'fifa11-review',
      type: 'article',
      title: 'FIFA 11+ Injury Prevention Program Efficacy',
      source: 'British Journal of Sports Medicine',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-sprains-strains', targetType: 'condition', relationship: 'related', label: 'Sprains and Strains' },
    { targetId: 'ortho-patient-ligament-tears', targetType: 'condition', relationship: 'related', label: 'Ligament Tears' },
    { targetId: 'ortho-patient-injury-prevention', targetType: 'topic', relationship: 'related', label: 'Injury Prevention' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['sports medicine', 'injuries', 'rehabilitation'],
    keywords: ['sports injuries', 'athletic injuries', 'ACL', 'sprains', 'strains'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] },
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default commonSportsInjuriesContent;
