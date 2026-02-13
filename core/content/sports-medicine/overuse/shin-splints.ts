/**
 * Shin Splints - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const shinsplints: EducationalContent = {
  id: 'sports-med-shin-splints',
  type: 'condition',
  name: 'Shin Splints',
  alternateNames: ['Medial Tibial Stress Syndrome', 'MTSS', 'Tibial Periostitis'],

  levels: {
    1: {
      level: 1,
      summary: 'Shin splints cause pain along the front or inside of your shin bone, usually from running or jumping too much.',
      explanation: `## What Are Shin Splints?

Shin splints are a common injury that causes pain in the lower leg.

**What Happens**
- Pain develops along the shin bone
- Usually from running or jumping activities
- Often happens when starting a new exercise program

**Symptoms**
- Pain along the inside of your shin
- Pain during and after exercise
- Tenderness when touching the shin
- Sometimes mild swelling

**Common Causes**
- Starting too much activity too quickly
- Running on hard surfaces
- Worn-out shoes
- Flat feet or overpronation

**Treatment**
- Rest from running/jumping
- Ice the shin
- Stretch and strengthen calf muscles
- Gradually return to activity`,
      keyTerms: [
        { term: 'shin splints', definition: 'Pain along the shin bone from overuse' },
        { term: 'tibia', definition: 'The shin bone, the larger bone in your lower leg' },
      ],
    },
    2: {
      level: 2,
      summary: 'Medial tibial stress syndrome (shin splints) is an overuse injury of the posteromedial tibia presenting with exercise-induced pain, managed with load modification and addressing biomechanical factors.',
      explanation: `## Understanding Shin Splints

### Definition
Medial Tibial Stress Syndrome (MTSS) is:
- Exercise-induced pain over the posteromedial tibia
- Diffuse tenderness (>5cm)
- Pain with activity, improves with rest

### Pathophysiology
- Traction injury at tibial periosteum
- Involves soleus, tibialis posterior, FDL
- Possible early bone stress response
- Spectrum with tibial stress fracture

### Risk Factors
**Training:**
- Rapid increase in activity
- Running on hard surfaces
- Inadequate footwear

**Biomechanical:**
- Pronation
- Navicular drop
- Hip weakness
- Limited ankle dorsiflexion

**Other:**
- Previous MTSS
- Female sex
- High BMI
- Low fitness level

### Clinical Presentation
- Gradual onset
- Pain with activity
- Diffuse tenderness (>5cm along tibia)
- Minimal swelling

### Differential Diagnosis
- Tibial stress fracture
- Chronic exertional compartment syndrome
- Nerve entrapment
- Popliteal artery entrapment

### Diagnosis
**Clinical:**
- History and exam often sufficient
- Stress fracture has focal tenderness

**Imaging:**
- MRI if not improving or focal tenderness
- Differentiate from stress fracture

### Management
**Acute:**
- Reduce training load
- Cross-train (low impact)
- Ice, NSAIDs

**Rehabilitation:**
- Calf stretching and strengthening
- Hip strengthening
- Gradual return to running

**Prevention:**
- Gradual training progression
- Shock-absorbing insoles
- Gait assessment`,
      keyTerms: [
        { term: 'MTSS', definition: 'Medial tibial stress syndrome, medical term for shin splints' },
        { term: 'navicular drop', definition: 'Measure of foot pronation, drop of navicular from seated to standing' },
        { term: 'chronic exertional compartment syndrome', definition: 'Condition causing leg pain from pressure buildup during exercise' },
      ],
    },
    3: {
      level: 3,
      summary: 'MTSS represents a continuum of tibial overload, requiring differentiation from stress fracture and compartment syndrome, with management targeting load modification and biomechanical factors.',
      explanation: `## Clinical Management

### Continuum Model
MTSS may represent early bone stress:
- Periosteal inflammation/edema
- Bone marrow edema
- Stress reaction
- Stress fracture

### Differentiating MTSS from Stress Fracture
| Feature | MTSS | Stress Fracture |
|---------|------|-----------------|
| Tenderness | Diffuse (>5cm) | Focal (<5cm) |
| Pain pattern | Improves with warmup | May worsen |
| Hop test | Negative | Often positive |
| MRI | Periosteal edema | Bone marrow edema, fracture line |

### Chronic Exertional Compartment Syndrome
- Pain develops with exercise
- Resolves with rest (minutes)
- Tightness, weakness, numbness
- Requires pressure testing for diagnosis

### Comprehensive Assessment
**Biomechanical:**
- Foot posture (FPI-6)
- Navicular drop test
- Single-leg squat quality
- Hip strength testing

**Training Analysis:**
- Running volume/intensity
- Terrain
- Footwear

### Evidence-Based Treatment
**Strong Evidence:**
- Load management
- Progressive return

**Moderate Evidence:**
- Shock-absorbing insoles
- Calf exercises
- Gait retraining

**Weak/No Evidence:**
- Orthoses (for treatment)
- Stretching alone
- Modalities

### Prevention
**Primary:**
- Gradual training progression
- Shock-absorbing insoles
- Appropriate footwear

**Secondary:**
- Address biomechanical factors
- Hip/core strengthening
- Gait modification if indicated`,
      keyTerms: [
        { term: 'FPI-6', definition: 'Foot Posture Index, 6-item measure of foot position' },
        { term: 'periosteal edema', definition: 'Fluid/inflammation at bone surface, seen on MRI in MTSS' },
      ],
      clinicalNotes: 'MTSS and tibial stress fracture may represent a spectrum. Diffuse vs. focal tenderness helps differentiate. Load modification is key. Insoles may help prevention. Biomechanical assessment guides intervention.',
    },
    4: {
      level: 4,
      summary: 'Advanced MTSS management integrates biomechanical analysis, graduated return-to-running protocols, and consideration of surgical intervention for refractory cases.',
      explanation: `## Advanced Concepts

### Pathophysiology Details
**Potential Mechanisms:**
- Periosteal traction
- Bone bending stress
- Muscle fatigue → increased bone load
- Regional acceleratory phenomenon

**Imaging Findings:**
- MRI: Periosteal edema, possible bone marrow edema
- Bone scan: Linear uptake (vs. focal in stress fracture)

### Biomechanical Analysis
**Running Gait:**
- Cadence (steps/minute)
- Stride length
- Foot strike pattern
- Loading rate

**Kinematics:**
- Rearfoot eversion
- Knee/hip motion
- Trunk position

### Gait Retraining
**Options:**
- Increase cadence 5-10%
- Softer landing (reduce loading rate)
- Transition to forefoot strike (controversial)

**Evidence:**
- May reduce tibial loading
- Individual response varies
- Best for those with high loading rates

### Return to Running
**Protocol:**
- Start walk/run intervals
- Increase running time gradually
- Monitor symptoms
- Progress based on response

**Criteria:**
- Pain-free walking
- Minimal tenderness
- Adequate calf strength/endurance

### Surgical Options (Rare)
**Indications:**
- Refractory to 6+ months conservative care
- Significant activity limitation

**Procedures:**
- Fasciotomy
- Periosteal stripping
- Limited evidence`,
      keyTerms: [
        { term: 'regional acceleratory phenomenon', definition: 'Localized increase in bone remodeling in response to injury' },
        { term: 'loading rate', definition: 'Rate of force application during running, potentially modifiable with gait retraining' },
      ],
      clinicalNotes: 'Gait retraining may help selected patients. Cadence increase is simplest intervention. Surgery rarely indicated. Most respond to load management and graduated return. Prevention more effective than treatment.',
    },
    5: {
      level: 5,
      summary: 'Research explores bone stress response mechanisms, biomarkers for monitoring, and optimal prevention strategies including gait modification and training load management.',
      explanation: `## Research Frontiers

### Bone Stress Continuum
**Spectrum Concept:**
- MTSS → Stress reaction → Stress fracture
- Common underlying mechanisms
- Individual susceptibility varies

**Mechanobiology:**
- Cortical porosity with overload
- Periosteal reaction
- Bone remodeling kinetics

### Biomarkers
**Bone Turnover:**
- May reflect bone stress
- Not yet clinically validated for MTSS
- Potential monitoring tool

### Prevention Research
**Training Load:**
- Acute:chronic workload ratio
- Rate of progression
- Recovery adequacy

**Biomechanical Interventions:**
- Gait retraining efficacy
- Footwear effects
- Insole optimization

### Imaging Advances
**Quantitative MRI:**
- Bone quality assessment
- Early change detection

**Ultrasound:**
- Periosteal changes
- Accessible monitoring

### Risk Factor Research
**Genetic:**
- Bone density genes
- Collagen variants
- Not yet clinical application

**Neuromuscular:**
- Fatigue effects on loading
- Motor control deficits`,
      keyTerms: [
        { term: 'cortical porosity', definition: 'Small holes in cortical bone that increase with excessive remodeling' },
        { term: 'acute:chronic workload ratio', definition: 'Training load monitoring metric comparing recent to chronic load' },
      ],
      clinicalNotes: 'Prevention through gradual training progression is most practical. Biomarkers may help identify at-risk athletes in future. Gait modification shows promise but needs more research. Load management remains cornerstone of prevention.',
    },
  },

  media: [],
  citations: [],

  crossReferences: [
    { targetId: 'sports-med-overuse-injuries-overview', targetType: 'concept', relationship: 'parent', label: 'Overuse Injuries' },
    { targetId: 'sports-med-stress-fractures', targetType: 'concept', relationship: 'related', label: 'Stress Fractures' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['running-injury', 'overuse-injury', 'sports-medicine'],
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

export default shinsplints;
