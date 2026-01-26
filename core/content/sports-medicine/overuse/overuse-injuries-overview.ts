/**
 * Overuse Injuries Overview - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const overuseInjuriesOverview: EducationalContent = {
  id: 'sports-med-overuse-injuries-overview',
  type: 'concept',
  name: 'Overuse Injuries Overview',
  alternateNames: ['Repetitive Strain Injuries', 'Cumulative Trauma Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Overuse injuries happen when you repeat the same movement too many times without enough rest, causing pain and damage over time.',
      explanation: `## What Are Overuse Injuries?

Overuse injuries happen slowly over time, not from one sudden accident.

**How They Happen**
- Repeating the same movement over and over
- Not taking enough rest between activities
- Doing too much too soon
- Using improper technique

**Common Overuse Injuries**
- Runner's knee
- Tennis elbow
- Shin splints
- Swimmer's shoulder

**Warning Signs**
- Pain that starts during activity
- Pain that gets worse over time
- Swelling
- Stiffness

**Prevention**
- Increase activity slowly
- Take rest days
- Use proper form
- Stretch and warm up`,
      keyTerms: [
        { term: 'overuse injury', definition: 'Damage that happens from repeating movements too often without enough rest' },
        { term: 'repetitive motion', definition: 'Doing the same movement over and over again' },
      ],
      analogies: [
        'An overuse injury is like bending a paper clip back and forth - eventually it weakens and breaks.',
      ],
    },
    2: {
      level: 2,
      summary: 'Overuse injuries result from repetitive microtrauma exceeding tissue capacity for repair, presenting as gradual-onset pain and dysfunction, managed through activity modification and addressing causative factors.',
      explanation: `## Understanding Overuse Injuries

### Pathophysiology
- Repetitive submaximal loading
- Microtrauma accumulation
- Tissue breakdown exceeds repair capacity
- Gradual onset of symptoms

### Types
**Tendinopathy:**
- Tendinitis (inflammatory phase)
- Tendinosis (degenerative changes)
- Common sites: Achilles, patellar, rotator cuff

**Stress Fractures:**
- Bone microdamage accumulation
- Common in runners, dancers

**Apophysitis:**
- Traction injury at growth plates
- Osgood-Schlatter, Sever's disease

### Risk Factors
**Training Errors:**
- Too much, too soon, too fast
- Inadequate recovery
- Sudden increase in volume/intensity

**Biomechanical:**
- Poor technique
- Muscle imbalances
- Joint malalignment

**Equipment:**
- Worn footwear
- Improper fit
- Playing surface

### Clinical Presentation
| Stage | Symptoms |
|-------|----------|
| 1 | Pain after activity only |
| 2 | Pain during activity, doesn't limit |
| 3 | Pain limits activity |
| 4 | Pain at rest, unable to perform |

### Management
**Relative Rest:**
- Modify, don't completely stop
- Cross-train
- Maintain fitness

**Address Causes:**
- Training modifications
- Technique correction
- Equipment changes

**Rehabilitation:**
- Progressive loading
- Eccentric exercises
- Sport-specific return`,
      keyTerms: [
        { term: 'tendinopathy', definition: 'Umbrella term for tendon pain and dysfunction from overuse' },
        { term: 'microtrauma', definition: 'Small amounts of damage that accumulate over time' },
        { term: 'eccentric exercise', definition: 'Muscle lengthening under load, used in tendon rehabilitation' },
      ],
    },
    3: {
      level: 3,
      summary: 'Overuse injuries represent failure of tissue adaptation to applied stress, involving complex interactions of load, recovery, and individual factors, with management focused on load optimization and tissue capacity building.',
      explanation: `## Overuse Injury Pathophysiology

### Tissue Response to Loading
**Healthy Adaptation:**
- Tissue exposed to appropriate stress
- Recovery allows adaptation
- Tissue capacity increases

**Injury Pathway:**
- Load exceeds capacity
- Insufficient recovery
- Cumulative microtrauma
- Tissue breakdown

### Continuum Model of Tendinopathy
| Stage | Pathology | Presentation |
|-------|-----------|--------------|
| Reactive | Acute overload, swelling | Pain after load, resolves |
| Dysrepair | Failed healing, matrix changes | Persistent symptoms |
| Degenerative | Structural changes, cell death | Chronic pain, weakness |

### Risk Factor Categories
**Intrinsic:**
- Age
- Previous injury
- Flexibility
- Muscle strength
- Anatomic alignment

**Extrinsic:**
- Training load
- Surface
- Equipment
- Environment

### Load Management
**Key Principles:**
- Total load matters
- Rate of load increase critical
- Recovery essential
- Individual variation

**Training Errors:**
- >10% weekly increase in volume
- Spike in intensity
- Inadequate periodization
- Insufficient cross-training

### Assessment
**History:**
- Training log review
- Load quantification
- Technique changes
- Equipment changes

**Examination:**
- Specific tissue palpation
- Functional testing
- Biomechanical assessment
- Movement quality

### Treatment Principles
**Load Modification:**
- Reduce provocative load
- Maintain tolerable activity
- Progressive return

**Capacity Building:**
- Progressive strengthening
- Eccentric training
- Plyometric progression
- Sport-specific training`,
      keyTerms: [
        { term: 'continuum model', definition: 'Framework describing tendinopathy as progression through reactive, dysrepair, and degenerative stages' },
        { term: 'load management', definition: 'Strategic modification of training volume and intensity to prevent injury' },
        { term: 'periodization', definition: 'Planned variation in training to optimize adaptation and prevent overtraining' },
      ],
      clinicalNotes: 'Training load errors are the most common cause. "10% rule" is a guideline, not absolute. Early intervention prevents progression. Complete rest is rarely indicated.',
    },
    4: {
      level: 4,
      summary: 'Advanced overuse injury management integrates biomechanical analysis, quantitative load monitoring, and progressive rehabilitation targeting specific tissue adaptations.',
      explanation: `## Advanced Concepts

### Tissue-Specific Responses
**Tendon:**
- Collagen disruption
- Increased ground substance
- Neovascularization
- Neurogenic changes

**Bone:**
- Microdamage accumulation
- Stress reaction spectrum
- Site-specific risk

**Cartilage:**
- Chondrocyte dysfunction
- Matrix breakdown
- Limited healing capacity

### Load Monitoring
**External Load:**
- Training volume
- Intensity metrics
- GPS data
- Power output

**Internal Load:**
- RPE (rating of perceived exertion)
- Heart rate response
- Recovery markers
- Wellbeing scores

**Acute:Chronic Workload Ratio:**
- Compares recent to chronic training load
- "Sweet spot" for adaptation
- High ratio increases injury risk

### Biomechanical Analysis
**Running Gait:**
- Cadence, strike pattern
- Hip/knee mechanics
- Loading rate

**Throwing Mechanics:**
- Arm path
- Timing
- Force generation

**Movement Quality:**
- Single-leg control
- Core stability
- Regional interdependence

### Advanced Rehabilitation
**Progressive Loading:**
- Isometric → Isotonic → Eccentric → Plyometric
- Sport-specific integration
- Return to performance

**Adjunct Treatments:**
- Shockwave therapy
- Injection therapies (caution)
- Manual therapy
- Dry needling`,
      keyTerms: [
        { term: 'acute:chronic workload ratio', definition: 'Comparison of recent training load to longer-term average, used to guide load progression' },
        { term: 'regional interdependence', definition: 'Concept that dysfunction in one body region affects function elsewhere' },
        { term: 'neovascularization', definition: 'Growth of new blood vessels in tendon, often associated with pain' },
      ],
      clinicalNotes: 'Load monitoring helps identify risk before injury. Biomechanical assessment guides intervention. Progressive loading essential for tissue adaptation. Multi-factorial approach most effective.',
    },
    5: {
      level: 5,
      summary: 'Research in overuse injuries explores molecular mechanisms of tissue failure, biomarkers of maladaptation, and individualized prevention strategies based on genetic and biomechanical profiling.',
      explanation: `## Research Frontiers

### Molecular Mechanisms
**Tendinopathy:**
- Collagen crosslink disruption
- MMP/TIMP imbalance
- Growth factor dysregulation
- Inflammatory vs. degenerative debate

**Bone Stress:**
- Osteoclast/osteoblast balance
- RANK/RANKL pathway
- Mechanical signaling

### Biomarkers
**Blood-Based:**
- COMP
- CTX-I, P1NP
- Inflammatory markers
- Research stage

**Imaging:**
- Ultrasound tissue characterization
- MRI T2 mapping
- Early detection potential

### Genetic Factors
**Identified Variants:**
- COL5A1
- Tenascin-C
- MMP3
- GDF5

**Clinical Utility:**
- Risk stratification (research)
- Personalized prevention (future)

### Wearable Technology
**Current Applications:**
- Load quantification
- Movement quality
- Recovery monitoring

**Future Directions:**
- Real-time feedback
- Predictive algorithms
- Automated load management

### Prevention Research
**Team-Based Programs:**
- FIFA 11+
- Nordic hamstring program
- Eccentric training effectiveness

**Individualized Approaches:**
- Risk factor profiling
- Targeted interventions
- Adaptive programs`,
      keyTerms: [
        { term: 'MMP/TIMP imbalance', definition: 'Disrupted ratio of matrix metalloproteinases and their inhibitors in tendon pathology' },
        { term: 'mechanotransduction', definition: 'Cellular conversion of mechanical signals to biological responses' },
      ],
      clinicalNotes: 'Prevention is more effective than treatment. Load monitoring technology evolving rapidly. Genetic testing not yet clinically validated. Multi-factorial intervention models most promising.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-tendinopathy', targetType: 'concept', relationship: 'child', label: 'Tendinopathy' },
    { targetId: 'sports-med-stress-fractures', targetType: 'concept', relationship: 'child', label: 'Stress Fractures' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['overuse-injury', 'sports-medicine', 'prevention'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default overuseInjuriesOverview;
