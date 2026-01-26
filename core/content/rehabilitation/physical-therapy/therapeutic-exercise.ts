/**
 * Therapeutic Exercise - Comprehensive Educational Content
 *
 * Covers the principles and application of therapeutic exercise including
 * strength training, flexibility, endurance, and functional exercises.
 */

import { EducationalContent } from '../../types';

export const therapeuticExercise: EducationalContent = {
  id: 'rehab-therapeutic-exercise',
  type: 'concept',
  name: 'Therapeutic Exercise',
  alternateNames: ['Exercise Therapy', 'Rehabilitation Exercise', 'Corrective Exercise'],

  levels: {
    1: {
      level: 1,
      summary: 'Therapeutic exercise uses special movements and activities to help your body get stronger and move better.',
      explanation: `Therapeutic exercise is like having a prescription for movement. Just like medicine can help your body heal, the right exercises can help you get better when you're hurt or weak.

**Why do we use therapeutic exercise?**
- To make weak muscles stronger
- To help stiff joints move better
- To improve balance so you don't fall
- To build stamina so you don't get tired easily
- To help you do everyday activities more easily

**Types of therapeutic exercises:**

**1. Stretching exercises** help muscles and joints move more freely, like when you reach your arms overhead.

**2. Strengthening exercises** make muscles stronger, like lifting light weights or pushing against resistance.

**3. Balance exercises** help you stay steady on your feet, like standing on one leg.

**4. Endurance exercises** help you not get tired as quickly, like walking or riding a bike.

**How it works:**
Your therapist picks exercises just for you based on what you need. You start easy and do more as you get stronger. The key is practicing regularly, both in therapy and at home!`,
      keyTerms: [
        { term: 'therapeutic exercise', definition: 'Special exercises prescribed to help heal injuries or improve how your body works' },
        { term: 'stretching', definition: 'Movements that help muscles and joints become more flexible' },
        { term: 'strengthening', definition: 'Exercises that make muscles bigger and stronger' },
        { term: 'balance', definition: 'The ability to stay steady and not fall over' },
        { term: 'endurance', definition: 'How long you can do an activity without getting too tired' },
      ],
      analogies: [
        'Therapeutic exercise is like a recipe for healing - the therapist picks exactly the right ingredients (exercises) to help your body get better.',
        'Building strength through exercise is like adding bricks to a wall - each repetition adds a little more until you have something strong.',
      ],
      examples: [
        'After a knee injury, doing leg lifts and gentle bends helps rebuild the muscles around your knee.',
        'If your shoulder is stiff, stretching exercises help you reach higher and farther without pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Therapeutic exercise encompasses prescribed physical activities designed to restore function, improve strength, flexibility, endurance, and coordination following injury or illness.',
      explanation: `Therapeutic exercise is the foundation of physical therapy treatment. It includes any prescribed physical activity designed to correct impairments, restore function, and maintain optimal health.

**Categories of Therapeutic Exercise:**

**1. Range of Motion (ROM) Exercises**
- Passive ROM: therapist moves your joint for you
- Active-assisted ROM: you move with help
- Active ROM: you move independently
- Used to maintain or restore joint mobility

**2. Strengthening Exercises**
- Isometric: muscle contracts without movement (pushing against a wall)
- Isotonic: muscle contracts with movement (lifting weights)
- Concentric: muscle shortens (bicep curl lifting phase)
- Eccentric: muscle lengthens under tension (lowering the weight)

**3. Flexibility Exercises**
- Static stretching: holding a position
- Dynamic stretching: controlled movements through range
- PNF stretching: contract-relax techniques

**4. Cardiovascular/Endurance Training**
- Walking, cycling, swimming
- Builds heart and lung fitness
- Improves ability to sustain activity

**5. Balance and Coordination**
- Static balance: standing still on unstable surfaces
- Dynamic balance: maintaining balance while moving
- Proprioception training: body awareness exercises

**6. Functional Training**
- Exercises that mimic daily activities
- Getting up from chairs, climbing stairs
- Work-related movements

**Exercise Prescription Components:**
- Frequency: how often (e.g., 3 times per week)
- Intensity: how hard (e.g., moderate effort)
- Time: how long (e.g., 30 minutes)
- Type: what kind of exercise

**Principles of Progression:**
- Start with what you can safely do
- Gradually increase difficulty
- Allow recovery time between sessions`,
      keyTerms: [
        { term: 'range of motion', definition: 'How far a joint can move in different directions', pronunciation: 'raynj of MOH-shun' },
        { term: 'isometric exercise', definition: 'Muscle contraction without joint movement', pronunciation: 'eye-so-MET-rik' },
        { term: 'isotonic exercise', definition: 'Muscle contraction with joint movement', pronunciation: 'eye-so-TON-ik' },
        { term: 'proprioception', definition: 'Your body\'s sense of position and movement in space', pronunciation: 'pro-pree-oh-SEP-shun' },
        { term: 'progression', definition: 'Gradually making exercises more challenging as you improve' },
      ],
      analogies: [
        'Exercise progression is like climbing a ladder - you start on the lowest rung and move up only when you\'re stable.',
        'ROM exercises are like oiling a rusty hinge - they keep joints moving smoothly.',
      ],
    },
    3: {
      level: 3,
      summary: 'Therapeutic exercise applies systematic physical training principles to address neuromuscular, musculoskeletal, and cardiopulmonary impairments using evidence-based dosage parameters and progression criteria.',
      explanation: `## Foundational Principles

Therapeutic exercise is grounded in exercise physiology and tissue adaptation principles:

**SAID Principle (Specific Adaptation to Imposed Demands)**
- Tissues adapt specifically to the stresses placed upon them
- Training must match the demands of functional goals
- Guides exercise selection and progression

**Overload Principle**
- Tissues must be stressed beyond normal levels to adapt
- Progressive increase in demands drives improvement
- Balance between adequate stress and recovery

**Reversibility Principle**
- Gains are lost when training stops
- Maintenance programs needed for long-term benefits
- Detraining occurs faster than training adaptations

## Strength Training Parameters

| Goal | Load (% 1RM) | Reps | Sets | Rest |
|------|--------------|------|------|------|
| Endurance | <67% | >12 | 2-4 | <30 sec |
| Hypertrophy | 67-85% | 6-12 | 3-6 | 30-90 sec |
| Strength | >85% | <6 | 2-6 | 2-5 min |
| Power | 30-60% | 1-5 | 3-5 | 2-5 min |

**Muscle Contraction Types:**
- Concentric: shortening (positive work)
- Eccentric: lengthening (negative work) - greater force production, more tissue stress
- Isometric: static (no joint movement)
- Isokinetic: constant velocity (requires special equipment)

## Flexibility Training

**Stretching Mechanisms:**
- Viscoelastic creep: gradual tissue lengthening
- Neurological relaxation: decreased muscle tone
- Sarcomere addition: long-term structural change

**Stretching Protocols:**
- Static: 15-60 second holds, 2-4 repetitions
- Dynamic: controlled movement through range, 10-15 repetitions
- PNF (Proprioceptive Neuromuscular Facilitation):
  - Contract-relax: 6-second isometric, then stretch
  - Hold-relax with agonist contraction
  - Produces greatest acute flexibility gains

## Balance and Proprioception Training

**Progression Hierarchy:**
1. Static (eyes open → eyes closed)
2. Dynamic (stable surface → unstable surface)
3. Perturbation training (anticipated → unanticipated)
4. Task-specific functional training

**Neurophysiological Basis:**
- Mechanoreceptors in joints, muscles, skin
- Vestibular system integration
- Visual-proprioceptive weighting
- Central processing and motor planning

## Cardiovascular Training

**Energy Systems:**
- Phosphagen (ATP-CP): <10 seconds, high intensity
- Glycolytic: 30 sec - 2 min, moderate-high intensity
- Oxidative: >2 min, lower intensity sustained activity

**Training Zones:**
- Zone 1 (Recovery): 50-60% max HR
- Zone 2 (Aerobic base): 60-70% max HR
- Zone 3 (Tempo): 70-80% max HR
- Zone 4 (Threshold): 80-90% max HR
- Zone 5 (VO2 max): 90-100% max HR

## Periodization

**Linear Periodization:**
- Progressive increase in intensity
- Concurrent decrease in volume
- Traditional approach for beginners

**Undulating Periodization:**
- Varied intensity within training weeks
- May produce superior gains in some populations
- Better suited for rehabilitation settings`,
      keyTerms: [
        { term: 'SAID principle', definition: 'Specific Adaptation to Imposed Demands - tissues adapt specifically to training stresses', pronunciation: 'said' },
        { term: '1RM', definition: 'One repetition maximum - the most weight you can lift once with proper form' },
        { term: 'PNF stretching', definition: 'Proprioceptive Neuromuscular Facilitation - stretching technique using muscle contractions' },
        { term: 'periodization', definition: 'Systematic planning of training variables over time to optimize adaptation' },
        { term: 'eccentric contraction', definition: 'Muscle lengthening while producing force, important for strength and tendon healing' },
        { term: 'VO2 max', definition: 'Maximum oxygen consumption - measure of cardiovascular fitness' },
      ],
      clinicalNotes: 'Eccentric training produces superior strength gains but increases DOMS. Consider tissue healing phases when prescribing intensity. Early rehabilitation typically emphasizes isometric and concentric loading before eccentric.',
    },
    4: {
      level: 4,
      summary: 'Therapeutic exercise prescription integrates tissue-specific loading protocols, motor learning principles, and biopsychosocial considerations with individualized dosage based on clinical assessment and response monitoring.',
      explanation: `## Tissue-Specific Exercise Prescription

**Muscle Rehabilitation:**

*Early Phase (Inflammation/Early Proliferation)*
- Pain-free isometric exercise
- Multiple angle isometric contractions
- Subthreshold activation to maintain neural pathways
- Frequency: 5-6x/week, short sessions

*Mid Phase (Late Proliferation/Early Remodeling)*
- Progressive isotonic exercise
- Controlled concentric/eccentric loading
- Gradual increase in ROM and resistance
- Introduce functional movements

*Late Phase (Maturation)*
- Sport/activity-specific training
- Plyometric progression if indicated
- Eccentric emphasis for strength optimization
- Periodized programming

**Tendon Rehabilitation:**

| Phase | Protocol | Load | Frequency |
|-------|----------|------|-----------|
| Reactive | Isometric | Heavy (70% MVC) | 4-5x/day |
| Dysrepair | Slow eccentric | Moderate-heavy | Daily-EOD |
| Degenerative | Heavy slow resistance | Progressive | 3x/week |

- Avoid compression and stretch at end range
- Monitor load tolerance (24-hour pain response)
- Energy storage exercises in late rehab

**Bone Loading:**
- Wolff's Law application
- Strain magnitude and rate important
- Odd-impact loading (novel directions)
- 50 high-impact loads/day may be sufficient
- Progressive weight-bearing protocols

**Cartilage:**
- Requires cyclic loading for nutrition
- Avoid excessive shear forces
- Low-load, high-repetition beneficial
- Unloaded motion (aquatic therapy) useful

## Motor Learning Integration

**Stages of Motor Learning:**

1. **Cognitive Stage**
   - High attentional demands
   - Frequent feedback
   - Blocked practice
   - Simple environments

2. **Associative Stage**
   - Refining movement patterns
   - Faded feedback
   - Varied practice introduction
   - Error detection developing

3. **Autonomous Stage**
   - Automatic execution
   - Summary feedback
   - Random practice
   - Complex environments

**Practice Variables:**
- Massed vs. distributed: Distributed superior for retention
- Constant vs. variable: Variable improves generalization
- Blocked vs. random: Random improves transfer (contextual interference)
- Part vs. whole: Complex tasks may benefit from part practice initially

**Feedback Optimization:**
- Knowledge of Results (KR): outcome information
- Knowledge of Performance (KP): movement quality
- Bandwidth feedback: provide only when outside acceptable range
- Summary feedback: provide after multiple trials
- External focus: direct attention to movement effects, not body parts

## Advanced Exercise Strategies

**Blood Flow Restriction (BFR) Training:**
- Partial venous occlusion with low-load exercise
- Achieves hypertrophy at 20-30% 1RM
- Useful when high loads contraindicated
- Metabolic stress drives adaptation
- Prescription: 30-15-15-15 rep scheme

**Neuromuscular Electrical Stimulation (NMES):**
- Adjunct to voluntary exercise
- Muscle re-education post-surgery
- Strength maintenance during immobilization
- Parameters: 35-50 Hz, 200-400 μs pulse width

**Aquatic Exercise:**
- Buoyancy reduces joint loading
- Viscosity provides resistance
- Hydrostatic pressure decreases edema
- Thermal effects on tissue extensibility

## Biopsychosocial Considerations

**Fear-Avoidance Integration:**
- Graded exposure to feared movements
- Pain neuroscience education
- Cognitive restructuring
- Self-efficacy building through mastery experiences

**Dosage Individualization:**
- Tissue irritability assessment
- 24-hour symptom response monitoring
- Patient-specific exercise tolerance
- Psychosocial readiness for activity

**Adherence Optimization:**
- Exercise selection matching preferences
- Goal-setting collaboration
- Progress visualization
- Barrier identification and problem-solving`,
      keyTerms: [
        { term: 'blood flow restriction training', definition: 'Training with partial vascular occlusion to achieve muscle adaptations at low loads' },
        { term: 'contextual interference', definition: 'Motor learning phenomenon where random practice conditions improve long-term retention despite slower initial acquisition' },
        { term: 'bandwidth feedback', definition: 'Providing feedback only when performance falls outside an acceptable error range' },
        { term: 'graded exposure', definition: 'Progressive confrontation with feared movements to reduce avoidance behavior' },
        { term: 'tissue irritability', definition: 'Responsiveness of injured tissue to loading, guides exercise intensity selection' },
        { term: 'MVC', definition: 'Maximum Voluntary Contraction - highest force output achievable' },
      ],
      clinicalNotes: 'Monitor 24-hour response to determine if exercise dosage is appropriate. Increased pain/swelling lasting >24 hours suggests excessive loading. For tendons, the "traffic light" model: green (<3/10 during activity, normalizes within 24h) proceed; yellow (3-5/10, normalizes by next session) proceed cautiously; red (>5/10 or not normalizing) reduce load.',
    },
    5: {
      level: 5,
      summary: 'Contemporary therapeutic exercise integrates precision rehabilitation approaches, emerging mechanobiological evidence, technology-enhanced delivery, and patient-centered outcome optimization within healthcare systems.',
      explanation: `## Precision Exercise Prescription

**Responder Phenotyping:**
- Genetic factors affecting exercise response (ACE, ACTN3 polymorphisms)
- Baseline characteristics predicting response
- Personalized dosage based on individual adaptation rates
- N-of-1 trial approaches for optimal prescription

**Biomarker-Guided Progression:**
- Serum markers of muscle damage (CK, myoglobin)
- Inflammatory markers (CRP, IL-6)
- Tendon imaging changes
- Emerging proteomics and metabolomics applications

## Mechanobiology and Exercise

**Mechanotransduction Pathways:**
- Integrins: mechanical signal transmission
- FAK signaling: force-induced gene expression
- YAP/TAZ: mechanosensitive transcriptional regulators
- mTOR pathway: protein synthesis regulation

**Cellular Responses to Loading:**

*Muscle:*
- Satellite cell activation and fusion
- Myofibrillar protein synthesis upregulation
- Mitochondrial biogenesis (endurance training)
- Angiogenesis and capillarization

*Tendon:*
- Tenocyte activation and collagen synthesis
- Cross-link formation and maturation
- Matrix metalloproteinase balance
- Glycosaminoglycan content changes

*Bone:*
- Osteocyte mechanosensing
- RANKL/OPG balance regulation
- Sclerostin suppression
- Wnt signaling pathway activation

**Optimal Loading Windows:**
- Tendon: 5-8% strain optimal for adaptation
- Bone: 1500-3000 microstrain threshold
- Muscle: ~60% tension for maximal protein synthesis
- Timing: circadian influences on exercise response

## Emerging Technologies

**Wearable-Guided Exercise:**
- Real-time kinematic feedback
- Force/load monitoring
- Adherence tracking
- Automatic progression algorithms

**Virtual/Augmented Reality:**
- Immersive exercise environments
- Motor imagery enhancement
- Gamification for engagement
- Telerehabilitation delivery

**Artificial Intelligence Applications:**
- Computer vision movement analysis
- Personalized exercise recommendation
- Outcome prediction models
- Natural language coaching interfaces

**Robotics in Therapeutic Exercise:**
- Exoskeletons for assisted gait training
- Upper extremity end-effector devices
- High-intensity repetitive practice
- Standardized dosage delivery

## Healthcare System Considerations

**Value-Based Exercise Prescription:**
- Outcomes per dollar spent
- Episode-of-care efficiency
- Prevention of expensive complications
- Long-term cost-effectiveness

**Implementation Science:**
- Barriers to evidence-based prescription
- Knowledge translation strategies
- Clinical decision support tools
- Quality improvement initiatives

**Population Health Approaches:**
- Exercise as medicine initiatives
- Community-based programs
- Digital health delivery
- Health equity considerations

## Research Frontiers

**Mechanistic Studies:**
- Optimal loading parameters for specific tissues
- Time-under-tension vs. load relationships
- Eccentric exercise mechanisms
- Blood flow restriction physiological basis

**Clinical Effectiveness:**
- Comparative effectiveness of exercise approaches
- Dose-response relationships
- Long-term outcomes and durability
- Combination therapy optimization

**Implementation Research:**
- Adherence enhancement strategies
- Technology-enhanced delivery
- Cost-effectiveness analyses
- Healthcare system integration models

## Expert Clinical Considerations

**Complex Patient Management:**
- Multi-morbidity exercise programming
- Polypharmacy interactions with exercise
- Aging-related adaptation differences
- Cognitive impairment accommodations

**High-Performance Applications:**
- Return-to-sport progressions
- Performance optimization
- Injury prevention programming
- Monitoring athlete readiness

**Chronic Disease Exercise Prescription:**
- Exercise oncology protocols
- Metabolic disease management
- Neurodegenerative conditions
- Cardiovascular risk management`,
      keyTerms: [
        { term: 'mechanotransduction', definition: 'Process by which cells convert mechanical signals into biochemical responses' },
        { term: 'satellite cells', definition: 'Muscle stem cells that activate in response to loading to facilitate hypertrophy and repair' },
        { term: 'sclerostin', definition: 'Protein that inhibits bone formation; suppressed by mechanical loading' },
        { term: 'mTOR', definition: 'Mammalian target of rapamycin - key regulator of protein synthesis and cell growth' },
        { term: 'exercise oncology', definition: 'Application of exercise as therapy in cancer treatment and survivorship' },
        { term: 'implementation science', definition: 'Study of methods to promote integration of evidence into clinical practice' },
      ],
      clinicalNotes: `Key considerations for advanced practice:
1. Individualize based on tissue response, not just time-based protocols
2. Consider mechanobiological principles in loading progression
3. Integrate technology for precision monitoring and feedback
4. Address psychosocial factors as integral to exercise prescription
5. Monitor emerging evidence on optimal dosage parameters
6. Consider healthcare system context in program design
7. Account for genetic and phenotypic variation in response`,
    },
  },

  media: [
    {
      id: 'exercise-progression-pyramid',
      type: 'diagram',
      filename: 'exercise-progression-pyramid.svg',
      title: 'Therapeutic Exercise Progression Pyramid',
      description: 'Visual hierarchy of exercise progression from basic to advanced',
    },
    {
      id: 'muscle-adaptation-flowchart',
      type: 'diagram',
      filename: 'muscle-adaptation-flowchart.svg',
      title: 'Muscle Adaptation to Exercise',
      description: 'Cellular mechanisms of muscle adaptation to resistance training',
    },
  ],

  citations: [
    {
      id: 'acsm-exercise-guidelines',
      type: 'textbook',
      title: 'ACSM\'s Guidelines for Exercise Testing and Prescription',
      authors: ['American College of Sports Medicine'],
      source: 'Wolters Kluwer',
    },
    {
      id: 'kisner-therapeutic-exercise',
      type: 'textbook',
      title: 'Therapeutic Exercise: Foundations and Techniques',
      authors: ['Kisner, C.', 'Colby, L.A.'],
      source: 'F.A. Davis',
    },
  ],

  crossReferences: [
    { targetId: 'rehab-physical-therapy-principles', targetType: 'topic', relationship: 'parent', label: 'Physical Therapy Principles' },
    { targetId: 'rehab-gait-training', targetType: 'topic', relationship: 'sibling', label: 'Gait Training' },
    { targetId: 'rehab-manual-therapy', targetType: 'topic', relationship: 'sibling', label: 'Manual Therapy' },
  ],

  tags: {
    systems: ['musculoskeletal', 'neurological', 'cardiovascular'],
    topics: ['rehabilitation', 'exercise', 'strength training', 'flexibility'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default therapeuticExercise;
