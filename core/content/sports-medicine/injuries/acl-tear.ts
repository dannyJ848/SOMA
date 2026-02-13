/**
 * ACL Tear - Comprehensive Educational Content
 *
 * Covers anterior cruciate ligament injury pathophysiology, diagnosis,
 * management, and rehabilitation strategies.
 */

import { EducationalContent } from '../../types';

export const aclTear: EducationalContent = {
  id: 'sports-med-acl-tear',
  type: 'condition',
  name: 'ACL Tear',
  alternateNames: ['Anterior Cruciate Ligament Tear', 'ACL Rupture', 'ACL Injury'],

  levels: {
    1: {
      level: 1,
      summary: 'An ACL tear is when the main ligament in the middle of your knee gets stretched too far or tears, usually during sports.',
      explanation: `## What is an ACL Tear?

The ACL (Anterior Cruciate Ligament) is like a strong rope inside your knee that keeps your leg bones connected and stable.

**What Happens**
- The ACL gets stretched too far and tears
- You might hear or feel a "pop" in your knee
- Your knee swells up quickly
- It feels unstable, like it might give out

**How It Usually Happens**
- Landing wrong from a jump
- Stopping suddenly while running
- Changing direction quickly
- Getting hit on the side of the knee

**Signs of an ACL Tear**
- A popping sound or feeling
- Knee swells within hours
- Pain, especially when walking
- Knee feels wobbly or unstable

**Treatment Options**
- Rest and physical therapy (for less active people)
- Surgery to rebuild the ligament (for athletes)
- Rehabilitation takes 6-12 months`,
      keyTerms: [
        { term: 'ACL', definition: 'A ligament in the center of the knee that prevents the shin bone from sliding forward' },
        { term: 'ligament', definition: 'Strong bands of tissue that connect bones together' },
        { term: 'reconstruction', definition: 'Surgery to rebuild a torn ligament using other tissue' },
      ],
      analogies: [
        'The ACL is like a safety strap that keeps your knee from bending the wrong way.',
        'Tearing your ACL is like breaking the main cable on a suspension bridge.',
      ],
    },
    2: {
      level: 2,
      summary: 'ACL tears typically occur through non-contact mechanisms involving deceleration, pivoting, or landing, presenting with immediate swelling and instability, diagnosed clinically with Lachman test, and managed with rehabilitation or surgical reconstruction.',
      explanation: `## Understanding ACL Tears

### Anatomy
The ACL connects the femur (thigh bone) to the tibia (shin bone) and:
- Prevents anterior translation of the tibia
- Provides rotational stability
- Contains mechanoreceptors for proprioception

### Mechanism of Injury
**Non-Contact (70-80%):**
- Deceleration with planted foot
- Pivoting/cutting movements
- Landing from jump with knee extended
- Valgus collapse pattern

**Contact:**
- Direct blow to lateral knee
- Hyperextension force

### Clinical Presentation
- Audible/palpable "pop" (50-70%)
- Immediate disability
- Hemarthrosis within 2-4 hours
- Feeling of instability

### Physical Examination
| Test | Technique | Positive Finding |
|------|-----------|------------------|
| Lachman | Flex knee 20-30°, anterior tibial translation | Increased laxity, soft endpoint |
| Anterior Drawer | Flex knee 90°, pull tibia forward | >6mm translation |
| Pivot Shift | Valgus + internal rotation | Subluxation/reduction clunk |

### Associated Injuries
- Meniscal tears (50%)
- MCL injury (30%)
- "Unhappy triad": ACL + MCL + medial meniscus
- Bone bruise (MRI)

### Treatment Options
**Non-operative:**
- Indicated for low-demand patients
- Rehabilitation focused on strength and stability
- Activity modification

**Surgical Reconstruction:**
- Indicated for active individuals
- Graft options: hamstring, patellar tendon, quadriceps, allograft
- 6-12 month rehabilitation`,
      keyTerms: [
        { term: 'Lachman test', definition: 'Primary clinical test for ACL integrity, performed with knee flexed 20-30 degrees' },
        { term: 'hemarthrosis', definition: 'Blood accumulation in a joint, indicating significant injury' },
        { term: 'pivot shift', definition: 'Clinical test demonstrating rotational instability from ACL deficiency' },
      ],
    },
    3: {
      level: 3,
      summary: 'ACL injury involves complex biomechanical loading patterns, with diagnosis confirmed by clinical examination and MRI, treatment decision based on patient factors, and rehabilitation emphasizing neuromuscular control and criteria-based return to sport.',
      explanation: `## ACL Injury Pathomechanics

### Biomechanical Considerations
**Loading Pattern:**
- Combined anterior tibial translation + internal rotation
- Knee near full extension (0-30°)
- Quadriceps dominant landing
- Dynamic valgus collapse

**Risk Factors:**
- Female sex (2-8x higher risk)
- Anatomic: narrow intercondylar notch, increased tibial slope
- Neuromuscular: quadriceps dominance, reduced hip control
- Hormonal: possible menstrual cycle effects
- Previous ACL injury

### Imaging
**MRI Findings:**
- Primary: Discontinuous ligament, abnormal signal
- Secondary: Bone bruises (lateral femoral condyle, posterolateral tibia)
- Associated: Meniscal tears, cartilage injury

### Treatment Decision-Making
**Factors Favoring Surgery:**
- Young, active patients
- High-demand sports participation
- Recurrent instability
- Combined injuries
- Desire to return to pivoting sports

**Factors Favoring Non-operative:**
- Low activity demands
- Older patients
- No instability symptoms
- Willing to modify activities

### Surgical Considerations
**Graft Selection:**
| Graft | Advantages | Disadvantages |
|-------|------------|---------------|
| Bone-patellar tendon-bone | Strong fixation, bone-to-bone healing | Anterior knee pain |
| Hamstring | Less donor site morbidity | Slower incorporation |
| Quadriceps tendon | Strong, less harvest issues | Newer technique |
| Allograft | No donor morbidity | Higher failure in young athletes |

### Rehabilitation Principles
**Phase-Based Progression:**
- Phase 1: Protect graft, restore ROM
- Phase 2: Progressive strengthening
- Phase 3: Running, agility
- Phase 4: Sport-specific training
- Phase 5: Return to sport

**Return to Sport Criteria:**
- Time: Minimum 9 months post-op
- Strength: >90% limb symmetry
- Hop tests: >90% limb symmetry
- Psychological readiness`,
      keyTerms: [
        { term: 'dynamic valgus', definition: 'Inward knee collapse during landing or cutting, associated with ACL injury risk' },
        { term: 'intercondylar notch', definition: 'Groove in the femur where ACL is housed; narrow notch is a risk factor' },
        { term: 'limb symmetry index', definition: 'Comparison of injured to uninjured limb, used for return-to-sport decisions' },
      ],
      clinicalNotes: 'Lachman test is most sensitive (85-95%). MRI confirms diagnosis and identifies associated injuries. Graft choice should be individualized. Criteria-based return to sport reduces re-injury risk.',
    },
    4: {
      level: 4,
      summary: 'ACL injury involves multi-planar biomechanical failure, with healing limited by intra-articular environment, surgical reconstruction addressing mechanical stability while rehabilitation targets neuromuscular deficits and cortical reorganization.',
      explanation: `## Advanced ACL Pathophysiology

### Ligament Failure Mechanics
**Tensile Properties:**
- Ultimate load: ~2200N
- Strain at failure: ~20%
- Primary bundle loading varies with knee flexion

**Injury Biomechanics:**
- Combined loading: anterior shear + valgus + internal rotation
- Ground reaction forces 2-5x body weight
- 40-50ms from contact to failure

### Why ACLs Don't Heal
**Intra-articular Environment:**
- Synovial fluid inhibits clot formation
- Poor blood supply
- Mechanical instability prevents apposition
- Limited intrinsic healing capacity

### Surgical Reconstruction
**Graft Biology:**
- Necrosis phase: 0-4 weeks
- Revascularization: 4-12 weeks
- Cellular repopulation: 3-6 months
- Ligamentization: 6-24 months
- Graft never fully recapitulates native ACL

**Tunnel Positioning:**
- Anatomic reconstruction philosophy
- Femoral tunnel: center of native footprint
- Tibial tunnel: posterior to anterior horn of lateral meniscus

### Neuromuscular Deficits
**Arthrogenic Muscle Inhibition:**
- Quadriceps inhibition from joint effusion
- Altered reciprocal inhibition
- Persistent after mechanical repair

**Cortical Changes:**
- Altered somatosensory representation
- Modified motor planning
- Increased cognitive movement control

### Return to Sport Evidence
**Re-injury Rates:**
- Ipsilateral: 5-15% at 2 years
- Contralateral: 5-15% at 2 years
- Higher risk: early return (<9 months), young athletes

**Criteria-Based Return:**
- Strength testing (isokinetic, isometric)
- Hop test battery
- Landing biomechanics
- Psychological screening (ACL-RSI)`,
      keyTerms: [
        { term: 'ligamentization', definition: 'Process by which tendon graft transforms to ligament-like tissue over 1-2 years' },
        { term: 'arthrogenic muscle inhibition', definition: 'Reflexive inhibition of muscles surrounding injured joint' },
        { term: 'ACL-RSI', definition: 'ACL Return to Sport after Injury scale; psychological readiness assessment' },
      ],
      clinicalNotes: 'Graft failure highest in young athletes returning early to pivoting sports. Quadriceps strength deficits may persist years post-surgery. Comprehensive rehabilitation addressing neuromuscular deficits essential.',
    },
    5: {
      level: 5,
      summary: 'Contemporary ACL research integrates biomechanical modeling, biologic augmentation strategies, and neuroscience approaches to optimize prevention, treatment, and rehabilitation outcomes.',
      explanation: `## Molecular and Cellular Mechanisms

### ACL Biology
**Cellular Composition:**
- Fibroblasts predominant
- Mechanosensitive response to loading
- Collagen type I primary structural protein

**Healing Limitations:**
- Synovial fluid metalloproteinases
- Insufficient fibrin clot formation
- Intrinsic vs extrinsic healing debate

### Biologic Augmentation
**Current Research:**
- Platelet-rich plasma: inconsistent evidence
- Stem cell therapies: preclinical stage
- Gene therapy: experimental
- Bio-enhanced repair: emerging evidence for bridge-enhanced ACL repair (BEAR)

### Injury Prevention
**Neuromuscular Training Programs:**
- FIFA 11+: 50-70% reduction in ACL injury
- Targeted landing mechanics training
- Hip and trunk control emphasis

**Biomechanical Risk Factors:**
- Peak knee abduction moment
- Reduced knee flexion at landing
- Trunk position
- Ground reaction force patterns

### Return to Sport Science
**Movement Quality Assessment:**
- 3D motion analysis
- Force plate assessment
- Drop jump screening
- Single-leg squat quality

**Psychological Factors:**
- Fear of re-injury correlates with outcomes
- Self-efficacy measures
- Kinesiophobia assessment

### Future Directions
- Personalized risk prediction
- Biologic graft enhancement
- Wearable technology for rehabilitation monitoring
- Individualized return-to-sport algorithms`,
      keyTerms: [
        { term: 'BEAR procedure', definition: 'Bridge-enhanced ACL repair; uses bioactive scaffold to promote healing of torn ACL' },
        { term: 'kinesiophobia', definition: 'Fear of movement or re-injury; significant predictor of return-to-sport outcomes' },
        { term: 'knee abduction moment', definition: 'Rotational force pushing knee inward during landing; predictor of ACL injury risk' },
      ],
      clinicalNotes: 'Prevention programs most effective when implemented consistently. Biologic augmentation remains experimental. Psychological readiness is independent predictor of successful return to sport. Movement quality may be more important than isolated strength testing.',
    },
  },

  media: [
    {
      id: 'acl-anatomy',
      type: 'diagram',
      filename: 'acl-anatomy.svg',
      title: 'ACL Anatomy',
      description: 'Location and structure of the anterior cruciate ligament',
    },
  ],

  citations: [
    {
      id: 'acl-guidelines',
      type: 'article',
      title: 'ACL Injury Clinical Practice Guidelines',
      source: 'Journal of Orthopaedic & Sports Physical Therapy',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['knee-injury', 'ligament-tear', 'sports-medicine'],
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

export default aclTear;
