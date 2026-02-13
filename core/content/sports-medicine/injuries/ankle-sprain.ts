/**
 * Ankle Sprain - Comprehensive Educational Content
 *
 * Covers lateral ankle sprain pathophysiology, grading, management,
 * rehabilitation, and prevention strategies.
 */

import { EducationalContent } from '../../types';
import { SportsInjuryContent } from '../types';

export const ankleSprain: EducationalContent = {
  id: 'sports-med-ankle-sprain',
  type: 'condition',
  name: 'Ankle Sprain',
  alternateNames: ['Lateral Ankle Sprain', 'Inversion Ankle Injury', 'Rolled Ankle'],

  levels: {
    1: {
      level: 1,
      summary: 'An ankle sprain happens when you twist or roll your ankle, stretching or tearing the bands (ligaments) that hold the bones together.',
      explanation: `## What is an Ankle Sprain?

An ankle sprain is one of the most common injuries in sports and everyday life!

**What Happens**
- You twist, roll, or turn your ankle in an awkward way
- The stretchy bands (ligaments) that hold your ankle bones together get stretched too far
- This causes pain, swelling, and bruising

**How It Usually Happens**
- Landing wrong after a jump
- Stepping on someone's foot during sports
- Walking on uneven ground
- Tripping or falling

**Signs You Might Have a Sprain**
- Your ankle hurts, especially when you touch it or try to walk
- It swells up (sometimes a lot!)
- You might see bruising (blue/purple colors)
- It's hard to put weight on your foot

**Grades of Sprains**
- **Mild (Grade 1):** Stretched ligaments, little swelling, can still walk
- **Moderate (Grade 2):** Partially torn ligaments, more swelling and pain
- **Severe (Grade 3):** Completely torn ligaments, lots of swelling, very painful

**What To Do Right Away (RICE)**
- **R**est - Stay off it
- **I**ce - Put ice on it (with a towel between ice and skin)
- **C**ompress - Wrap it with a bandage
- **E**levate - Prop it up higher than your heart`,
      keyTerms: [
        { term: 'sprain', definition: 'An injury where ligaments get stretched or torn' },
        { term: 'ligament', definition: 'Strong bands that connect bones to each other' },
        { term: 'swelling', definition: 'When a body part gets puffy and bigger because of injury' },
      ],
      analogies: [
        'Ligaments are like rubber bands holding your bones together - they can stretch or even snap.',
        'A sprained ankle is like overstretching a rubber band - it might not bounce back right away.',
      ],
      examples: [
        'A basketball player lands on another player\'s foot after jumping and rolls their ankle outward.',
        'Someone steps in a hole while hiking and their ankle turns inward.',
      ],
    },
    2: {
      level: 2,
      summary: 'Ankle sprains involve injury to the lateral ligament complex (most commonly the anterior talofibular ligament) from an inversion mechanism, classified by grade based on structural damage and clinical presentation, and managed with protection, rehabilitation, and gradual return to activity.',
      explanation: `## Understanding Ankle Sprains

### Anatomy Involved
**Lateral Ligament Complex:**
- Anterior Talofibular Ligament (ATFL) - Most commonly injured
- Calcaneofibular Ligament (CFL)
- Posterior Talofibular Ligament (PTFL) - Rarely injured alone

**Medial Ligament:**
- Deltoid ligament complex - Stronger, less commonly injured

### Mechanism of Injury
**Inversion Sprain (Most Common - 85%):**
- Foot rolls inward
- Body weight over lateral ankle
- ATFL injured first, then CFL

**Eversion Sprain (Less Common):**
- Foot rolls outward
- Deltoid ligament injury
- Often with syndesmosis injury

### Grading System

| Grade | Damage | Symptoms | Function |
|-------|--------|----------|----------|
| I | Microscopic tears, stretched | Mild pain/swelling | Can walk |
| II | Partial tear | Moderate pain/swelling | Difficulty walking |
| III | Complete rupture | Severe pain/swelling | Unable to bear weight |

### Clinical Presentation
**Symptoms:**
- Pain (worse with movement)
- Swelling (can be significant)
- Bruising (appears within 24-48 hours)
- Instability feeling

**Physical Exam Findings:**
- Point tenderness over injured ligaments
- Positive anterior drawer test (in Grade II-III)
- Positive talar tilt test (in Grade II-III)
- Decreased range of motion

### Initial Management (RICE)
1. **Rest:** Avoid activities that cause pain
2. **Ice:** 15-20 minutes every 2-3 hours
3. **Compression:** Elastic bandage wrap
4. **Elevation:** Above heart level

### Rehabilitation Phases
**Phase 1 (0-1 week):** Protection, reduce swelling
**Phase 2 (1-2 weeks):** Restore range of motion
**Phase 3 (2-4 weeks):** Strengthen, proprioception
**Phase 4 (4-6+ weeks):** Sport-specific training

### Return to Sport
- Full pain-free range of motion
- Normal strength
- Balance/proprioception restored
- Sport-specific movements without pain
- Bracing may be recommended initially`,
      keyTerms: [
        { term: 'ATFL', definition: 'Anterior talofibular ligament - the most commonly injured ankle ligament' },
        { term: 'inversion', definition: 'Movement where the sole of the foot turns inward' },
        { term: 'proprioception', definition: 'The body\'s sense of joint position and movement' },
        { term: 'anterior drawer test', definition: 'Physical exam test to assess ATFL integrity' },
        { term: 'syndesmosis', definition: 'The ligaments connecting the tibia and fibula above the ankle joint' },
      ],
      analogies: [
        'The ATFL is like a door hinge - it\'s the first thing to get damaged when the ankle is forced beyond its normal range.',
        'Proprioception is like your ankle\'s GPS - it tells your brain where your foot is positioned.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lateral ankle sprains involve sequential failure of the lateral ligament complex (ATFL, then CFL, rarely PTFL) under supination-inversion loading, with clinical assessment guided by the Ottawa Ankle Rules, grading by structural integrity, and evidence-based rehabilitation emphasizing early mobilization and neuromuscular training.',
      explanation: `## Pathomechanics of Ankle Sprain

### Biomechanical Considerations
**Loading Pattern:**
- Combined plantarflexion + inversion
- ATFL taut in plantarflexion (first to fail)
- CFL taut in dorsiflexion (fails with continued inversion)
- Sequential ligament failure based on foot position

**Risk Factors:**
- Previous ankle sprain (strongest predictor)
- Inadequate rehabilitation
- Poor proprioception
- Limb dominance
- Sport type (cutting, jumping sports)

### Clinical Assessment

**Ottawa Ankle Rules - When to X-ray:**
Imaging indicated if:
- Bone tenderness at posterior 6cm of malleoli
- Bone tenderness at navicular or base of 5th metatarsal
- Inability to bear weight for 4 steps

**Physical Examination:**
| Test | Technique | Positive Finding |
|------|-----------|------------------|
| Anterior Drawer | Stabilize tibia, translate talus forward | >3mm translation or soft endpoint |
| Talar Tilt | Invert foot with ankle in neutral | >10° or asymmetry >5° |
| Squeeze Test | Compress mid-calf | Pain at syndesmosis |
| External Rotation | Externally rotate foot | Syndesmosis pain |

### Grading Classification

**Grade I:**
- Microscopic tears
- No mechanical instability
- Minimal functional loss
- Negative stress tests

**Grade II:**
- Partial macroscopic tear
- Mild-moderate instability
- Moderate functional loss
- Positive stress tests with endpoint

**Grade III:**
- Complete rupture
- Gross instability
- Severe functional loss
- Positive stress tests without endpoint

### Imaging

**Radiographs:**
- AP, lateral, mortise views
- Rule out fracture
- Assess joint congruity

**MRI (when indicated):**
- Persistent symptoms
- Suspected osteochondral lesion
- Syndesmosis injury evaluation
- Surgical planning

### Evidence-Based Management

**Acute Phase (0-72 hours):**
- POLICE > RICE (Protection, Optimal Loading, Ice, Compression, Elevation)
- NSAIDs for short-term pain (controversial for healing)
- Controlled weightbearing as tolerated

**Functional Rehabilitation:**
- Early mobilization superior to immobilization
- Progressive loading
- Neuromuscular training essential
- Balance/proprioceptive exercises

**Rehabilitation Protocol:**
| Phase | Goals | Interventions |
|-------|-------|---------------|
| I (1-2 wks) | Protect, reduce swelling | Brace, ROM, isometrics |
| II (2-4 wks) | Restore ROM, begin strength | Theraband, balance board |
| III (4-6 wks) | Functional strength | Single-leg exercises, agility |
| IV (6+ wks) | Return to sport | Sport-specific drills |

### Complications
- Chronic ankle instability (20-40%)
- Osteochondral lesions
- Peroneal tendon injury
- Syndesmosis injury (high ankle sprain)
- Sinus tarsi syndrome`,
      keyTerms: [
        { term: 'Ottawa Ankle Rules', definition: 'Validated clinical decision rules to determine need for radiography after ankle injury; high sensitivity for fracture' },
        { term: 'mechanical instability', definition: 'Objective ligamentous laxity demonstrable on examination or stress radiographs' },
        { term: 'functional instability', definition: 'Subjective sensation of giving way despite intact ligaments; neuromuscular deficit' },
        { term: 'osteochondral lesion', definition: 'Damage to articular cartilage and underlying bone, often of the talar dome' },
        { term: 'POLICE principle', definition: 'Protection, Optimal Loading, Ice, Compression, Elevation - updated acute injury management' },
        { term: 'sinus tarsi syndrome', definition: 'Persistent lateral ankle pain following sprain due to subtalar joint pathology' },
      ],
      clinicalNotes: 'Ottawa Ankle Rules have 98-100% sensitivity for fracture but ~40% specificity. Early mobilization and functional treatment result in faster return to activity than immobilization. Neuromuscular training reduces recurrence risk by 50%.',
    },
    4: {
      level: 4,
      summary: 'Ankle sprain pathophysiology involves mechanoreceptor disruption and altered neuromuscular control beyond structural ligament damage, with chronic ankle instability representing a spectrum of mechanical laxity and sensorimotor deficits, requiring comprehensive rehabilitation targeting proprioceptive, strength, and postural control deficits.',
      explanation: `## Advanced Pathophysiology

### Ligament Injury Cascade
**Structural Damage:**
- Collagen fiber disruption (Type I predominant in ligaments)
- Microvasculature disruption
- Inflammatory response initiation
- Proprioceptive nerve ending damage

**Healing Phases:**
| Phase | Timeline | Characteristics |
|-------|----------|-----------------|
| Inflammatory | 0-72 hours | Vasodilation, edema, cell infiltration |
| Proliferative | 72 hrs-6 wks | Fibroblast proliferation, Type III collagen |
| Remodeling | 6 wks-12 mos | Type I collagen, cross-linking |

**Ligament Healing Limitations:**
- Healed ligament: 50-70% normal tensile strength at 6 months
- Altered collagen organization
- Incomplete restoration of mechanical properties
- May explain recurrence susceptibility

### Neuromuscular Deficits

**Mechanoreceptor Disruption:**
- Ruffini endings, Pacinian corpuscles in ligaments
- Altered afferent signaling
- Disrupted proprioceptive feedback loop

**Central Adaptations:**
- Altered cortical representation
- Modified H-reflex responses
- Delayed peroneal reaction time
- Impaired feed-forward motor control

**Postural Control Deficits:**
- Increased postural sway
- Altered center of pressure patterns
- Deficits persist despite ligament healing
- Time-to-boundary measures sensitive

### Chronic Ankle Instability (CAI)

**Diagnostic Criteria:**
- History of significant sprain
- Recurrent sprains (≥2) OR episodes of giving way
- Self-reported instability (questionnaires)
- >12 months from initial sprain

**Mechanical CAI:**
- Pathological laxity on examination
- Positive stress radiographs
- Structural ligament incompetence
- May exist without functional deficits

**Functional CAI:**
- Proprioceptive deficits
- Neuromuscular control impairment
- Strength deficits (especially eversion)
- May exist without mechanical laxity

**Combined Mechanical + Functional:**
- Most common presentation
- Requires comprehensive rehabilitation
- May benefit from surgical stabilization

### Biomechanical Analysis

**Gait Alterations:**
- Increased inversion at heel strike
- Altered muscle activation timing
- Modified force attenuation strategies
- Hip and trunk compensations

**Landing Mechanics:**
- Increased lateral displacement
- Reduced knee flexion
- Altered ground reaction forces
- Modified anticipatory strategies

### Imaging Advanced Concepts

**Stress Radiographs:**
- Talar tilt >10° or asymmetry >5°
- Anterior drawer >10mm or asymmetry >3mm
- Sensitivity/specificity limitations

**MRI Protocol:**
- Proton density sequences optimal for ligaments
- High signal intensity in acute injury
- Assessment of associated injuries
- Cartilage evaluation

**Ultrasound:**
- Dynamic assessment possible
- Operator-dependent
- ATFL well visualized
- Useful for guided injections

### Surgical Considerations

**Indications:**
- Failed comprehensive conservative treatment (3-6 months)
- Mechanical instability on examination
- Recurrent instability episodes
- High-demand athletes (controversial)

**Procedures:**
- Modified Brostrom (anatomic repair)
- Augmentation procedures (if tissue quality poor)
- Anatomic reconstruction (chronic cases)
- Arthroscopy for associated pathology`,
      keyTerms: [
        { term: 'chronic ankle instability (CAI)', definition: 'Condition characterized by recurrent ankle sprains and/or persistent symptoms of instability >12 months following initial sprain' },
        { term: 'feed-forward motor control', definition: 'Anticipatory muscle activation based on expected perturbation; impaired in ankle instability' },
        { term: 'H-reflex', definition: 'Electrically evoked monosynaptic reflex used to assess spinal excitability; altered following ankle sprain' },
        { term: 'time-to-boundary', definition: 'Measure of postural control assessing how quickly center of pressure approaches stability limits' },
        { term: 'modified Brostrom procedure', definition: 'Surgical anatomic repair of lateral ankle ligaments using direct suture with reinforcement from extensor retinaculum' },
        { term: 'peroneal reaction time', definition: 'Time from perturbation to peroneal muscle activation; delayed in ankle instability as protective response' },
      ],
      clinicalNotes: 'CAI affects 20-40% of sprain patients. Key rehabilitation targets: peroneal strength, single-leg balance, reactive training. Questionnaires (CAIT, IdFAI) help identify functional instability. Surgical repair shows good outcomes but rehabilitation essential for success.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ankle sprain research integrates ligament mechanobiology, sensorimotor systems neuroscience, and movement science to understand the transition from acute injury to chronic instability, informing targeted interventions addressing structural healing, cortical reorganization, and motor control rehabilitation.',
      explanation: `## Mechanobiology of Ligament Injury and Healing

### Cellular Response to Mechanical Loading
**Mechanotransduction in Ligaments:**
- Integrins sense mechanical strain
- Focal adhesion kinase (FAK) signaling
- Cytoskeletal reorganization
- Gene expression modulation

**Optimal Loading Concept:**
- Mechanical stress stimulates healing
- Complete immobilization detrimental
- Collagen organization influenced by loading direction
- Balance protection with controlled stress

### Inflammatory and Healing Mediators
**Early Response:**
- DAMPs release (damage-associated molecular patterns)
- IL-1β, TNF-α, IL-6 upregulation
- MMP activation (matrix degradation)
- Neutrophil, macrophage infiltration

**Resolution Phase:**
- M1 to M2 macrophage transition
- TGF-β: Fibrosis regulation
- Growth factors: PDGF, VEGF, IGF-1
- Collagen synthesis upregulation

**Clinical Implications:**
- NSAIDs may impair early healing (controversial)
- PRP: Theoretical benefit, limited clinical evidence
- Healing optimization through controlled loading

## Sensorimotor System Contributions

### Proprioceptive Neural Pathways
**Peripheral Mechanoreceptors:**
- Ruffini endings: Joint position sense
- Pacinian corpuscles: Movement detection
- Golgi tendon-like endings: Tension
- Free nerve endings: Pain, inflammation

**Spinal Level Processing:**
- Monosynaptic reflex arcs
- Polysynaptic pathways
- Reciprocal inhibition
- Pre-synaptic inhibition modulation

**Supraspinal Integration:**
- Somatosensory cortex representation
- Cerebellum: Timing, coordination
- Basal ganglia: Movement selection
- Motor cortex reorganization after injury

### Neuroplasticity Following Injury
**Cortical Changes:**
- Altered somatosensory maps
- Modified motor planning regions
- Increased reliance on visual feedback
- Reduced ankle representation

**Functional Implications:**
- Delayed automatic responses
- Altered movement strategies
- Cognitive compensation
- Fatigue vulnerability

### Assessment of Sensorimotor Function
**Balance Measures:**
- Force plate center of pressure analysis
- SEBT/Y-Balance Test
- Time-to-boundary calculations
- Balance Error Scoring System (BESS)

**Neuromuscular Assessment:**
- EMG activation patterns
- Perturbation response protocols
- Force sense testing
- Joint position sense

## Evidence-Based Rehabilitation Advances

### Targeted Neuromuscular Training
**Principles:**
- Progressive challenge to postural control
- Reactive and anticipatory training
- Sport-specific movement patterns
- External focus of attention

**Evidence Summary:**
- Neuromuscular training reduces recurrence by ~50%
- Balance training effective for prevention
- Strength alone insufficient
- Dose-response under investigation

### Return to Sport Decision Making
**Criteria-Based Progression:**
| Category | Assessment | Criteria |
|----------|------------|----------|
| Impairment | ROM, strength | >90% limb symmetry |
| Function | SEBT/Y-Balance | <4cm asymmetry |
| Performance | Hop tests | >90% limb symmetry |
| Psychological | TSK-11, ACL-RSI* | Appropriate confidence |
*Adapted questionnaires

**Objective Testing:**
- Single-leg hop tests
- Figure-8 hop
- Side-hop test
- Landing biomechanics

### Prevention Programs
**FIFA 11+:**
- Warm-up program including balance
- Reduces ankle injuries ~35%
- Structured, progressive

**Neuromuscular Training Elements:**
- Single-leg stance progressions
- Perturbation training
- Landing technique
- Core stability

## Emerging Research Frontiers

### Biomarkers of Injury and Healing
**Serum/Synovial Markers:**
- COMP (cartilage oligomeric matrix protein)
- MMP-3
- CTX-II (cartilage degradation)
- Research stage, clinical utility undefined

### Imaging Advances
**Quantitative MRI:**
- T2* mapping of cartilage
- Delayed enhancement dGEMRIC
- Compositional assessment

**Weight-Bearing CT:**
- Functional joint assessment
- Syndesmosis evaluation
- 3D reconstructions

### Biologics and Regenerative Approaches
**Current Evidence:**
| Intervention | Mechanism | Evidence Level |
|--------------|-----------|----------------|
| PRP | Growth factor delivery | Limited/mixed RCTs |
| Prolotherapy | Inflammatory stimulation | Limited evidence |
| Stem cells | Regenerative potential | Preclinical mostly |
| Scaffold-based | Structural support | Investigational |

### Precision Medicine Approaches
**Individual Response Prediction:**
- Genetic variants (COL5A1, COL1A1)
- Biomarker profiles
- Movement phenotyping
- Risk stratification models

**Personalized Rehabilitation:**
- Deficit-based programming
- Real-time feedback systems
- Wearable monitoring
- Adaptive protocols`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Cellular process converting mechanical stimuli into biochemical signals; critical for ligament adaptation to loading' },
        { term: 'DAMPs', definition: 'Damage-associated molecular patterns; endogenous molecules released from injured cells that initiate inflammatory response' },
        { term: 'cortical reorganization', definition: 'Neuroplastic changes in brain mapping following injury; affects motor control and sensory processing' },
        { term: 'time-to-boundary', definition: 'Spatiotemporal measure calculating how quickly center of pressure approaches stability limits; sensitive to postural control deficits' },
        { term: 'external focus of attention', definition: 'Directing attention to movement effects rather than body movements; enhances motor learning in rehabilitation' },
        { term: 'COL5A1 gene', definition: 'Collagen type V alpha-1 gene; variants associated with ligament injury susceptibility' },
      ],
      clinicalNotes: `Key clinical integration:
1. Early mobilization with controlled loading superior to immobilization
2. NSAIDs: Short-term pain control acceptable; prolonged use may impair healing
3. Neuromuscular training is the most effective intervention for preventing recurrence
4. Y-Balance Test/SEBT can identify athletes at increased injury risk
5. Criteria-based return-to-sport superior to time-based protocols
6. CAI patients require comprehensive rehabilitation addressing mechanical and sensorimotor deficits
7. Surgical outcomes improve with post-operative neuromuscular rehabilitation
8. Prevention programs (FIFA 11+) should be implemented team-wide`,
    },
  },

  media: [
    {
      id: 'lateral-ligament-anatomy',
      type: 'diagram',
      filename: 'ankle-lateral-ligaments.svg',
      title: 'Lateral Ankle Ligament Complex',
      description: 'Anatomy of ATFL, CFL, and PTFL',
    },
    {
      id: 'ankle-sprain-grading',
      type: 'diagram',
      filename: 'ankle-sprain-grades.svg',
      title: 'Ankle Sprain Grading Classification',
      description: 'Visual representation of Grade I, II, and III ankle sprains',
    },
  ],

  citations: [
    {
      id: 'gribble-cai-2016',
      type: 'article',
      title: 'Selection criteria for patients with chronic ankle instability in controlled research',
      authors: ['Gribble, P.A.', 'Delahunt, E.', 'et al.'],
      source: 'British Journal of Sports Medicine',
    },
    {
      id: 'doherty-prevention-2017',
      type: 'article',
      title: 'Treatment and prevention of acute and recurrent ankle sprain',
      source: 'Clinical Journal of Sport Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-rice-protocol', targetType: 'concept', relationship: 'related', label: 'RICE Protocol' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play Principles' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['ankle-injury', 'ligament-sprain', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'family-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ankleSprain;
