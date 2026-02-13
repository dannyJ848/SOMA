/**
 * Muscle Strains Overview - Comprehensive Educational Content
 *
 * Covers muscle strain pathophysiology, common locations, grading,
 * treatment principles, and rehabilitation.
 */

import { EducationalContent } from '../../types';

export const muscleStrainsOverview: EducationalContent = {
  id: 'sports-med-muscle-strains-overview',
  type: 'condition',
  name: 'Muscle Strains Overview',
  alternateNames: ['Pulled Muscle', 'Muscle Tear', 'Muscle Injury'],

  levels: {
    1: {
      level: 1,
      summary: 'A muscle strain (or "pulled muscle") happens when muscle fibers are stretched too far or torn, usually from sudden movements or overuse.',
      explanation: `## What is a Muscle Strain?

A muscle strain is when the fibers in your muscle get stretched too far or actually tear.

**How It Happens**
- Sudden, quick movements
- Lifting something too heavy
- Not warming up before exercise
- Tired muscles that get pushed too hard

**Common Places for Strains**
- Hamstring (back of thigh) - very common in runners and soccer players
- Calf (back of lower leg) - common in jumping sports
- Quadriceps (front of thigh) - common in kicking sports
- Back muscles - common from lifting wrong

**What It Feels Like**
- Sudden pain that might feel like a "pop" or "snap"
- Pain when using that muscle
- Swelling and sometimes bruising
- Muscle feels weak or stiff

**Grades of Strains**
- **Grade 1 (Mild):** Some fibers stretched, muscle is sore but works okay
- **Grade 2 (Moderate):** Some fibers torn, more pain and weakness
- **Grade 3 (Severe):** Muscle is completely torn, can't use it properly

**What To Do**
- Rest the injured area
- Put ice on it
- Wrap it gently with a bandage
- Keep it elevated if possible
- See a doctor if pain is severe`,
      keyTerms: [
        { term: 'strain', definition: 'An injury to a muscle or its tendon (what attaches muscle to bone)' },
        { term: 'muscle fiber', definition: 'Tiny threads that make up your muscles and help them contract' },
        { term: 'tendon', definition: 'Strong tissue that connects muscles to bones' },
      ],
      analogies: [
        'Muscle fibers are like bundles of rope - a strain is when some strands fray or break.',
        'A pulled muscle is like overstretching a rubber band until some parts start to snap.',
      ],
      examples: [
        'A runner sprints suddenly without warming up and feels a sharp pain in the back of their thigh - that\'s a hamstring strain.',
        'Someone lifts a heavy box with their back instead of their legs and strains their lower back muscles.',
      ],
    },
    2: {
      level: 2,
      summary: 'Muscle strains involve disruption of muscle fibers or the myotendinous junction, classified by severity (Grade I-III), most commonly affecting biarticular muscles during eccentric contraction, and requiring progressive rehabilitation focusing on controlled loading and gradual return to activity.',
      explanation: `## Understanding Muscle Strains

### Anatomy of Muscle Injury
**Structures Involved:**
- Muscle fibers (contractile units)
- Myotendinous junction (muscle-tendon transition)
- Connective tissue (fascia, epimysium)
- Blood vessels and nerves

**High-Risk Muscles (Biarticular):**
- Hamstrings (cross hip and knee)
- Rectus femoris (part of quads)
- Gastrocnemius (calf)
- These muscles are stretched at both ends simultaneously

### Mechanism of Injury
**Eccentric Contraction:**
- Muscle lengthening while trying to contract
- Creates highest forces
- Most strains occur during eccentric phase
- Example: Hamstring during late swing phase of sprinting

**Risk Factors:**
- Previous strain (strongest predictor)
- Muscle fatigue
- Inadequate warm-up
- Muscle imbalances
- Age (decreased flexibility)
- Cold weather

### Grading Classification

| Grade | Structural Damage | Symptoms | Function |
|-------|------------------|----------|----------|
| I | <5% fibers torn | Mild pain, minimal swelling | Near-normal strength |
| II | Partial tear | Moderate pain, swelling, bruising | Significant weakness |
| III | Complete rupture | Severe pain initially, then less | Unable to contract |

### Common Muscle Strains by Sport

**Hamstring Strains:**
- Sprinting, soccer, football
- Two types: High-speed running vs. stretching
- High recurrence rate (15-30%)

**Quadriceps Strains:**
- Kicking sports (soccer, football)
- Rectus femoris most common

**Calf Strains (Tennis Leg):**
- Sudden push-off movements
- Medial gastrocnemius most common
- Common in middle-aged recreational athletes

### Management Principles

**Acute Phase (0-3 days):**
- Protection from further injury
- Optimal loading (not complete rest)
- Ice, compression, elevation
- Pain management

**Subacute Phase (3 days - 3 weeks):**
- Progressive ROM exercises
- Gradual loading
- Avoid complete immobilization
- Begin gentle stretching (pain-free)

**Remodeling Phase (3 weeks+):**
- Progressive strengthening
- Eccentric exercises (when ready)
- Sport-specific rehabilitation
- Return to play protocol

### Return to Sport Criteria
- Full pain-free range of motion
- Normal strength (>90% compared to other side)
- Pain-free functional movements
- Completed progressive running/sport activities`,
      keyTerms: [
        { term: 'myotendinous junction', definition: 'The transition zone where muscle fibers attach to tendon; most common site of strain injury' },
        { term: 'eccentric contraction', definition: 'Muscle contraction during lengthening; produces highest forces and is when most strains occur' },
        { term: 'biarticular muscle', definition: 'Muscle that crosses two joints; at higher risk for strain due to combined stretch from both joints' },
        { term: 'concentric contraction', definition: 'Muscle contraction while shortening; generates less force than eccentric' },
        { term: 'strain recurrence', definition: 'A repeat injury to a previously strained muscle; very common especially with incomplete rehabilitation' },
      ],
      analogies: [
        'A muscle strain is like a rope that frays - mild strain is a few fibers, severe is when it snaps completely.',
        'Eccentric loading is like a tug-of-war where you\'re trying to hold on while being pulled - the muscle is working while lengthening.',
      ],
    },
    3: {
      level: 3,
      summary: 'Muscle strain injuries result from excessive tensile load exceeding tissue tolerance, typically at the myotendinous junction during high-velocity eccentric actions, with injury severity graded by structural disruption and functional impairment, and optimal recovery requiring progressive mechanical loading to promote aligned scar tissue formation.',
      explanation: `## Pathophysiology of Muscle Strain

### Biomechanical Basis
**Tissue Failure:**
- Muscle-tendon unit has viscoelastic properties
- Rate of loading affects injury threshold
- High-velocity loading more damaging
- Failure typically at myotendinous junction (MTJ)

**Why the MTJ?**
- Transitional zone of force transmission
- Stress concentration at interface
- Lower tensile strength than muscle or tendon alone
- Intramuscular tendon: common injury site

### Muscle Architecture and Injury Risk

**Pennation Angle:**
- Parallel-fibered muscles (sartorius): Lower force, higher excursion
- Pennate muscles (gastrocnemius): Higher force, lower excursion
- Pennation affects injury pattern

**Fiber Type Distribution:**
- Type II fibers: Higher strain rates, more injury susceptible
- Hamstrings: High proportion of Type II
- Training can shift distribution

### Healing Phases

**Destruction Phase (0-3 days):**
- Myofiber necrosis
- Hematoma formation
- Inflammatory cell infiltration
- Cytokine release (IL-1β, TNF-α, IL-6)

**Repair Phase (3 days - 3 weeks):**
- Satellite cell activation
- Myoblast proliferation and differentiation
- New myofiber formation
- Scar tissue deposition
- Revascularization

**Remodeling Phase (3 weeks - months):**
- Myofiber maturation
- Scar tissue reorganization
- Contractile function restoration
- Ongoing for 6-12+ months

### Clinical Assessment

**History:**
- Mechanism (eccentric, high velocity, fatigue)
- Location and radiation of pain
- Functional limitations
- Previous injuries

**Physical Examination:**
| Finding | Grade I | Grade II | Grade III |
|---------|---------|----------|-----------|
| Tenderness | Localized | Moderate | Palpable defect |
| Swelling | Minimal | Moderate | Significant |
| ROM | Mildly limited | Moderately limited | Severely limited |
| Strength | Mild weakness | Moderate weakness | Inability to contract |
| Bruising | Rare | Common | Extensive |

**Imaging:**
- Ultrasound: First-line, dynamic assessment
- MRI: Gold standard, edema and structural detail
- Prognostic information (extent, location)

### Evidence-Based Rehabilitation

**Early Loading is Key:**
- Immobilization delays healing
- Controlled mechanical stress promotes:
  - Satellite cell activation
  - Collagen alignment
  - Myofiber regeneration
- Pain-guided progression

**Rehabilitation Phases:**
| Phase | Timeline | Goals | Interventions |
|-------|----------|-------|---------------|
| Acute | Days 1-5 | Protect, control swelling | POLICE, gentle ROM |
| Subacute | Days 5-21 | Restore ROM, begin loading | Isometrics, light resistance |
| Remodeling | Weeks 3-6+ | Strength, function | Progressive resistance, eccentrics |
| Return | Variable | Sport-specific readiness | Graduated return protocol |

**Eccentric Training:**
- Promotes tendon-like scar healing
- Improves tolerance to lengthening loads
- Reduces recurrence risk
- Introduce gradually (typically week 3+)

### Risk Factors and Prevention

**Modifiable Factors:**
- Previous injury (complete rehabilitation)
- Strength deficits
- Flexibility limitations
- Fatigue management
- Training load errors

**Prevention Strategies:**
- Eccentric strengthening programs (Nordic hamstring)
- Adequate warm-up
- Training load management
- Fatigue awareness`,
      keyTerms: [
        { term: 'intramuscular tendon', definition: 'Tendon extension within muscle belly; common site of strain at the muscle-tendon interface' },
        { term: 'satellite cells', definition: 'Muscle stem cells that activate following injury, proliferate, and differentiate into new myofibers' },
        { term: 'viscoelastic properties', definition: 'Time-dependent response to loading; rapid loading causes stiffer behavior and lower failure threshold' },
        { term: 'Nordic hamstring exercise', definition: 'Eccentric hamstring exercise shown to reduce hamstring strain incidence in athletes' },
        { term: 'scar tissue', definition: 'Fibrotic tissue that forms during healing; proper loading promotes aligned, functional tissue' },
        { term: 'POLICE principle', definition: 'Protection, Optimal Loading, Ice, Compression, Elevation - updated acute injury protocol emphasizing controlled loading' },
      ],
      clinicalNotes: 'MRI within 24-72 hours can provide prognostic information. Proximal hamstring injuries and those involving >50% cross-sectional area have longer recovery. Eccentric training programs (e.g., Nordic) reduce hamstring strain incidence by ~50%.',
    },
    4: {
      level: 4,
      summary: 'Muscle strain involves myofiber disruption with subsequent satellite cell-mediated regeneration competing with fibrotic repair, where early mechanical loading promotes myogenesis and aligned collagen deposition, while complete immobilization favors fibrosis, informing rehabilitation strategies that balance tissue protection with progressive loading to optimize functional outcomes.',
      explanation: `## Molecular and Cellular Mechanisms

### Injury Cascade
**Immediate Events:**
- Membrane disruption → Ca2+ influx
- Activation of calpains (proteases)
- Mitochondrial dysfunction
- ATP depletion → necrosis

**Inflammatory Response:**
- DAMPs release → TLR activation
- Neutrophil infiltration (peak 24 hrs)
- M1 macrophages: Phagocytosis, pro-inflammatory
- M2 macrophages: Resolution, pro-regenerative

### Satellite Cell Biology

**Activation:**
- HGF release from damaged ECM
- NO signaling
- Notch pathway activation
- Exit from quiescence (Pax7+ → MyoD+)

**Proliferation:**
- Myf5, MyoD expression
- Cell division in niche
- Balance proliferation vs. differentiation

**Differentiation:**
- Myogenin, MRF4 expression
- Cell cycle exit
- Fusion with damaged or new fibers
- Myonuclear addition

**Self-Renewal:**
- Pax7+ cells that don't differentiate
- Maintain satellite cell pool
- Essential for future regeneration

### Fibrosis vs. Regeneration

**Fibrotic Response:**
- TGF-β signaling
- Fibroblast proliferation
- Collagen I and III deposition
- Can impair contractile function

**Regenerative Response:**
- Satellite cell-mediated
- Myofiber replacement
- Restoration of contractile function
- Loading promotes regeneration over fibrosis

**Clinical Implications:**
- Complete rest → more fibrosis
- Controlled loading → better regeneration
- Balance is key

### Biomechanical Considerations

**Strain Injury Location Patterns:**
| Muscle | Common Site | Mechanism |
|--------|-------------|-----------|
| Hamstrings (proximal) | Semimembranosus MTJ | Stretching mechanism |
| Hamstrings (mid) | Biceps femoris intramuscular | Sprinting mechanism |
| Quadriceps | Rectus femoris central tendon | Kicking |
| Gastrocnemius | Medial head MTJ | Push-off |

**Prognostic Factors from Imaging:**
- Cross-sectional area involved
- Proximity to ischial tuberosity (hamstring)
- Intramuscular tendon involvement
- Length of injury

### Advanced Rehabilitation Concepts

**Mechanotherapy:**
- Mechanical loading as therapeutic stimulus
- Promotes:
  - Satellite cell proliferation
  - Collagen synthesis and alignment
  - Myofiber regeneration
  - Angiogenesis

**Eccentric Training Rationale:**
- Produces longest muscle-tendon unit
- Highest force generation
- Optimally loads healing tissue
- Adds sarcomeres in series

**Criteria-Based Progression:**
| Phase | Entry Criteria | Goals |
|-------|---------------|-------|
| Phase 1 | Day 1 | Pain control, protect |
| Phase 2 | Walk pain-free | ROM, isometrics |
| Phase 3 | Pain-free ADLs | Isotonic strengthening |
| Phase 4 | Normal strength | Eccentric, running initiation |
| Phase 5 | Running pain-free | Sport-specific activities |
| Return | Pass functional tests | Full sport participation |

### Recurrence Prevention

**Why Strains Recur:**
- Incomplete healing
- Residual weakness
- Altered neuromuscular control
- Scar tissue adhesions
- Premature return to sport

**Prevention Programs:**
- Nordic hamstring exercise: 50% reduction in hamstring strains
- Eccentric strength programs
- Load management
- Neuromuscular training

### Adjunctive Therapies

**Evidence Review:**
| Therapy | Proposed Mechanism | Evidence Level |
|---------|-------------------|----------------|
| PRP | Growth factor delivery | Mixed RCT results |
| NSAIDs | Inflammation reduction | May impair healing early |
| Therapeutic ultrasound | Cellular stimulation | Limited evidence |
| Massage | Adhesion reduction | Limited evidence |
| Dry needling | Myofascial release | Limited evidence |`,
      keyTerms: [
        { term: 'calpains', definition: 'Calcium-activated proteases that initiate myofiber breakdown following injury, enabling subsequent regeneration' },
        { term: 'TGF-β', definition: 'Transforming growth factor-beta; promotes fibroblast activity and fibrosis, can impair muscle regeneration' },
        { term: 'MyoD', definition: 'Myogenic determination factor; master transcription factor for satellite cell activation and myogenic commitment' },
        { term: 'mechanotherapy', definition: 'Use of mechanical loading as therapeutic intervention; promotes tissue healing and adaptation' },
        { term: 'Notch signaling', definition: 'Cell signaling pathway critical for satellite cell activation and self-renewal; regulated by injury' },
        { term: 'DAMPs', definition: 'Damage-associated molecular patterns; molecules released from damaged cells that initiate inflammatory response' },
      ],
      clinicalNotes: 'Key clinical points: 1) Avoid NSAIDs in first 48-72 hours if possible (may impair healing). 2) MRI at 48-72 hours provides optimal imaging. 3) Proximal hamstring injuries and biceps femoris have longer recovery. 4) Nordic exercise should be part of injury prevention and rehabilitation programs.',
    },
    5: {
      level: 5,
      summary: 'Contemporary muscle strain research integrates regenerative biology, mechanobiology, and movement science, focusing on satellite cell niche regulation, ECM remodeling dynamics, and precision rehabilitation targeting specific deficits, with emerging therapies aimed at optimizing the regeneration-fibrosis balance and preventing recurrence through individualized interventions.',
      explanation: `## Regenerative Biology of Muscle Healing

### Satellite Cell Niche Regulation

**Niche Components:**
- Basal lamina (laminin, collagen IV)
- Interstitial cells (FAPs, fibroblasts)
- Vascular (endothelial, pericytes)
- Immune cells (macrophages)
- ECM-bound growth factors

**Niche Signaling:**
\`\`\`
Injury → ECM disruption → HGF release
              ↓
Satellite cell activation (Pax7+ → MyoD+)
              ↓
Symmetric division: Self-renewal
Asymmetric division: Myogenic commitment
              ↓
Myogenin+ → Differentiation → Fusion
\`\`\`

**Fibro-Adipogenic Progenitors (FAPs):**
- Support satellite cell function
- Produce transient ECM for regeneration
- Can differentiate to fibroblasts or adipocytes
- Dysregulated in chronic conditions

### ECM Dynamics in Healing

**Matrix Remodeling:**
- MMP activation (collagenases, gelatinases)
- TIMP regulation
- Provisional matrix → mature ECM
- Collagen cross-linking

**Biomechanical Consequences:**
- Scar tissue: Higher stiffness, lower compliance
- Altered force transmission
- Potential stress concentrations
- Loading influences collagen organization

### Genetic and Epigenetic Factors

**Susceptibility Genes:**
| Gene | Variant | Association |
|------|---------|-------------|
| COL5A1 | rs12722 | Soft tissue injury risk |
| ELN | Various | Muscle flexibility |
| IGF2 | rs680 | Muscle damage markers |
| MMP3 | 5A/6A | Tendon/ligament injury |

**Epigenetic Regulation:**
- DNA methylation affects satellite cell function
- Histone modifications during regeneration
- miRNAs regulate myogenesis (miR-1, miR-206)
- Aging alters epigenetic landscape

## Advanced Diagnostic Approaches

### Imaging Biomarkers

**MRI Prognostic Features:**
- Cross-sectional area involvement
- Longitudinal extent
- Intramuscular tendon disruption
- Peritendinous edema

**Quantitative MRI:**
- T2 mapping for edema quantification
- Fat fraction for chronic changes
- Diffusion tensor imaging for fiber tracking

**Ultrasound Advances:**
- Shear wave elastography
- Tissue stiffness assessment
- Dynamic functional imaging
- Power Doppler for vascularity

### Functional Assessment Tools

**Strength Testing:**
- Isokinetic dynamometry
- Eccentric strength specifically
- Limb symmetry indices
- Rate of force development

**Movement Analysis:**
- 3D motion capture
- Force plate analysis
- EMG activation patterns
- Running biomechanics

## Precision Rehabilitation

### Individualized Loading Programs

**Phase-Based with Criteria:**
| Phase | Criteria to Progress | Key Interventions |
|-------|---------------------|-------------------|
| 1: Acute | Initial injury | POLICE, gentle AROM |
| 2: Subacute | Pain-free walking | Isometrics, light resistance |
| 3: Remodeling | 70% strength | Progressiveresistance, eccentric initiation |
| 4: Functional | 90% strength, pain-free | Running progression, agility |
| 5: Return | Pass testing battery | Sport-specific, maintenance |

**Eccentric Exercise Prescription:**
- Delayed until adequate healing (~3 weeks)
- Progressive intensity (angle, load, velocity)
- Nordic exercise: Gold standard for hamstrings
- Individualized based on injury location

### Return to Sport Decision Making

**Objective Testing Battery:**
- Strength: Isokinetic, peak torque limb symmetry >90%
- Function: Single-leg hop tests, agility
- Running: Completed progression without symptoms
- Sport-specific: Position/sport demands met

**Psychological Readiness:**
- Fear-avoidance beliefs
- Kinesiophobia assessment
- Confidence in injured limb
- Psychological intervention if needed

## Emerging Therapies

### Regenerative Medicine

**PRP (Platelet-Rich Plasma):**
- Concentrated growth factors (PDGF, TGF-β, VEGF)
- Variable preparation methods
- Mixed clinical evidence
- May accelerate early healing

**Stem Cell Therapies:**
- Autologous MSCs (research stage)
- Satellite cell transplantation (experimental)
- Challenges: Delivery, survival, integration

**Biomaterials:**
- ECM scaffolds (research)
- Growth factor delivery systems
- Mechanical support during healing

### Pharmacological Approaches

**Under Investigation:**
- Losartan: Anti-fibrotic (TGF-β pathway)
- Myostatin inhibitors: Enhance regeneration
- Senolytics: Age-related regenerative decline
- Follistatin: Muscle growth promotion

### Technology Integration

**Wearable Monitoring:**
- Load tracking during rehabilitation
- Movement quality assessment
- Early warning for re-injury risk
- Training load management

**AI and Machine Learning:**
- Recovery trajectory prediction
- Personalized rehabilitation algorithms
- Image analysis for diagnosis
- Risk stratification models

## Special Populations

### Masters Athletes
- Decreased satellite cell function
- Slower healing, higher fibrosis
- Longer rehabilitation timeline
- Prevention even more critical

### Youth Athletes
- Growth plate considerations
- Apophyseal injuries may mimic strains
- Excellent regenerative capacity
- Avoid overuse/overtraining

### Recurrent Strains
- Scar tissue at previous injury site
- Altered movement patterns
- Comprehensive biomechanical analysis
- Consider surgical evaluation if refractory`,
      keyTerms: [
        { term: 'fibro-adipogenic progenitors (FAPs)', definition: 'Interstitial stem cells that support satellite cell function in normal regeneration but can contribute to fibrosis and fatty infiltration when dysregulated' },
        { term: 'shear wave elastography', definition: 'Ultrasound technique measuring tissue stiffness; can assess healing status and identify scar tissue' },
        { term: 'diffusion tensor imaging', definition: 'MRI technique tracking water diffusion along muscle fibers; can assess fiber organization and disruption' },
        { term: 'ECM scaffold', definition: 'Decellularized extracellular matrix used as biomaterial to support tissue regeneration' },
        { term: 'kinesiophobia', definition: 'Fear of movement due to pain or injury; contributes to prolonged disability and requires psychological intervention' },
        { term: 'myostatin', definition: 'Negative regulator of muscle mass; inhibition promotes muscle growth and is being investigated for therapeutic use' },
      ],
      clinicalNotes: `Clinical integration:
1. MRI at 48-72 hours provides best prognostic information; sooner may underestimate injury
2. Criteria-based rehabilitation superior to time-based protocols
3. Nordic hamstring exercise reduces hamstring strain incidence by ~50% in prevention and should be part of rehabilitation
4. Proximal hamstring injuries near ischial tuberosity have longer recovery (average 5-6 weeks vs 2-3 weeks for mid-belly)
5. Consider psychological factors in athletes with prolonged recovery or multiple recurrences
6. PRP evidence is mixed; may have role in high-grade injuries but not routine use
7. Return-to-sport testing should include eccentric strength assessment
8. Training load management post-return is critical to prevent recurrence`,
    },
  },

  media: [
    {
      id: 'muscle-strain-anatomy',
      type: 'diagram',
      filename: 'muscle-strain-mtj.svg',
      title: 'Myotendinous Junction Injury',
      description: 'Anatomy of muscle strain at the myotendinous junction',
    },
    {
      id: 'strain-grading',
      type: 'diagram',
      filename: 'muscle-strain-grades.svg',
      title: 'Muscle Strain Grading',
      description: 'Visual representation of Grade I, II, and III muscle strains',
    },
  ],

  citations: [
    {
      id: 'baar-strain-2017',
      type: 'article',
      title: 'Skeletal muscle repair: successful and unsuccessful',
      source: 'American Journal of Physiology - Cell Physiology',
    },
    {
      id: 'askling-hamstring-2013',
      type: 'article',
      title: 'Acute hamstring injuries in Swedish elite football',
      source: 'British Journal of Sports Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-rice-protocol', targetType: 'concept', relationship: 'related', label: 'RICE Protocol' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play Principles' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['muscle-injury', 'strain', 'sports-medicine'],
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

export default muscleStrainsOverview;
