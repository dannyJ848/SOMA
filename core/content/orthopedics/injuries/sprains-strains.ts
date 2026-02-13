import { EducationalContent } from '../../types';

export const sprainsAndStrainsContent: EducationalContent = {
  id: 'ortho-patient-sprains-strains',
  type: 'condition',
  name: 'Sprains and Strains',
  alternateNames: ['Ligament injury', 'Muscle strain', 'Pulled muscle'],

  levels: {
    1: {
      level: 1,
      summary: 'A sprain is a stretched or torn ligament (connects bones), while a strain is a stretched or torn muscle or tendon (connects muscle to bone).',
      explanation: `Sprains and strains are common injuries that happen when you overstretch or tear soft tissues in your body.

**Sprains (Ligaments):**
- Happen at joints (ankle, knee, wrist)
- Caused by twisting or sudden movements
- Common: Ankle sprains from stepping wrong

**Strains (Muscles/Tendons):**
- Happen in muscles
- Caused by overstretching or overuse
- Common: Hamstring strain from running

**Symptoms:**
- Pain and tenderness
- Swelling
- Bruising
- Difficulty moving the area

**Treatment (RICE):**
- **Rest**: Stop the activity
- **Ice**: 15-20 minutes several times daily
- **Compression**: Wrap with elastic bandage
- **Elevation**: Raise above heart level

**When to See a Doctor:**
- Can't put weight on it
- Joint feels unstable
- Severe swelling or bruising
- Numbness or tingling
- No improvement after a few days`,
      keyTerms: [
        { term: 'sprain', definition: 'Injury to a ligament from stretching or tearing' },
        { term: 'strain', definition: 'Injury to a muscle or tendon from stretching or tearing' },
        { term: 'RICE', definition: 'Rest, Ice, Compression, Elevation - basic treatment for sprains and strains' },
      ],
      analogies: [
        'A sprain is like stretching a rubber band too far at a joint.',
        'A strain is like pulling a rope until some fibers break.',
      ],
      examples: [
        'Rolling your ankle while walking on uneven ground causes an ankle sprain.',
        'Suddenly sprinting without warming up can cause a hamstring strain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sprains and strains are graded by severity (I-III) based on tissue damage, with treatment ranging from protection and early motion to surgical repair.',
      explanation: `Both injuries involve soft tissue damage but affect different structures.

**Sprain Grading:**
- **Grade I**: Stretched fibers, no instability
- **Grade II**: Partial tear, mild instability
- **Grade III**: Complete rupture, significant instability

**Strain Grading:**
- **Grade I**: Minor fiber disruption
- **Grade II**: Moderate tear with weakness
- **Grade III**: Complete rupture

**Common Sprains:**
- Ankle (ATFL most common)
- Knee (MCL, ACL)
- Wrist (scapholunate)
- Thumb (UCL - gamekeeper's)

**Common Strains:**
- Hamstring
- Quadriceps
- Calf (gastrocnemius)
- Groin (adductors)

**Treatment by Grade:**

*Grade I:*
- RICE protocol
- Early protected motion
- Return: 1-2 weeks

*Grade II:*
- Immobilization period
- Physical therapy
- Return: 3-6 weeks

*Grade III:*
- May require surgery
- Prolonged rehabilitation
- Return: 8-12+ weeks

**Rehabilitation Focus:**
- Restore range of motion
- Strengthen supporting muscles
- Improve proprioception
- Gradual return to activity`,
      keyTerms: [
        { term: 'Grade III injury', definition: 'Complete tear of ligament, muscle, or tendon' },
        { term: 'ATFL', definition: 'Anterior talofibular ligament; most commonly sprained ankle ligament' },
        { term: 'proprioception', definition: 'Body\'s sense of position and movement in space' },
      ],
      analogies: [
        'Grade I is like a stretched rubber band, Grade II has some fibers broken, Grade III is completely snapped.',
        'Rehabilitation rebuilds the foundation before adding the house back on top.',
      ],
    },
    3: {
      level: 3,
      summary: 'Ligament and muscle injury healing follows predictable phases, with treatment balancing tissue protection with mechanical loading to optimize repair quality.',
      explanation: `Understanding healing biology guides evidence-based treatment approaches.

**Ligament Healing Phases:**

*Inflammatory (0-72 hours):*
- Hemorrhage and clot formation
- Inflammatory cell infiltration
- Cytokine release

*Proliferative (72 hours - 6 weeks):*
- Fibroblast migration
- Collagen synthesis (Type III initially)
- Granulation tissue formation

*Remodeling (6 weeks - 1 year+):*
- Type III to Type I collagen conversion
- Fiber alignment along stress lines
- Maturation and strengthening

**Muscle Healing Phases:**
- Destruction: Myofiber necrosis
- Repair: Satellite cell activation, regeneration
- Remodeling: Fiber maturation, scar formation

**Factors Affecting Healing:**
- Blood supply
- Mechanical loading
- Age and nutrition
- Smoking and medications (NSAIDs timing)

**Functional Treatment Approach:**
- Early controlled motion
- Progressive loading
- Neuromuscular training
- Sport-specific rehabilitation

**Ankle Sprain Protocol:**
- Grade I-II: Functional treatment preferred
- External support (brace vs. tape)
- Balance training reduces recurrence 50%
- Surgery rarely indicated acutely

**High-Risk Injuries:**
- ACL: Usually requires reconstruction in active patients
- Achilles rupture: Surgical vs. non-operative debate
- Thumb UCL: Often surgical for complete tears
- High ankle sprain: Prolonged recovery`,
      keyTerms: [
        { term: 'Type III collagen', definition: 'Weaker collagen initially produced during healing; gradually replaced by Type I' },
        { term: 'satellite cells', definition: 'Muscle stem cells that activate for repair after injury' },
        { term: 'functional treatment', definition: 'Early mobilization with external support vs. immobilization' },
      ],
      clinicalNotes: 'Chronic ankle instability develops in 20-40% after sprain. Proprioceptive training is the most effective prevention. Surgery reserved for failed conservative treatment.',
    },
    4: {
      level: 4,
      summary: 'Biomechanical understanding of ligament and muscle injury mechanisms guides prevention strategies and surgical decision-making in high-grade injuries.',
      explanation: `Advanced management integrates tissue mechanics with clinical decision-making.

**Ligament Biomechanics:**

*Mechanical Properties:*
- Nonlinear stress-strain curve
- Toe region: Crimp straightening
- Linear region: Fiber loading
- Failure: Progressive rupture

*Healing Properties:*
- Never regains native properties
- 50-70% of normal strength at 1 year
- Inferior material properties (increased laxity)

**Muscle Injury Biomechanics:**
- Injuries occur at myotendinous junction
- Eccentric loading most common mechanism
- Type II fibers more susceptible
- Pennation angle affects injury pattern

**Surgical Considerations:**

*Ligament Repair vs. Reconstruction:*
- Acute repair: Limited healing capacity
- Augmentation techniques
- Reconstruction: Better outcomes for ACL

*Muscle/Tendon Repair:*
- Achilles: End-to-end vs. augmentation
- Hamstring: Retraction threshold for surgery
- Pectoralis: Surgical repair for complete tears

**Return-to-Sport Testing:**

*Objective Criteria:*
- Strength (LSI >90%)
- Hop tests (LSI >90%)
- Functional movement quality
- Sport-specific testing

*Time-Based Criteria:*
- Minimum tissue healing time
- ACL: 9-12 months minimum
- Hamstring: 4-8 weeks (grade-dependent)

**Prevention Strategies:**
- Neuromuscular training programs
- FIFA 11+: 50% reduction in injuries
- Warm-up protocols
- Load management`,
      keyTerms: [
        { term: 'myotendinous junction', definition: 'Interface between muscle and tendon; common injury site' },
        { term: 'LSI', definition: 'Limb Symmetry Index; comparison of injured to uninjured side' },
        { term: 'eccentric loading', definition: 'Muscle lengthening under tension; high injury risk' },
      ],
      clinicalNotes: 'Return-to-sport testing should be comprehensive. Psychological readiness (fear of reinjury) is independent predictor of reinjury and should be assessed.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based management of sprains and strains integrates current research on optimal healing environments, surgical techniques, and rehabilitation protocols with emerging biologic augmentation strategies.',
      explanation: `Expert management requires understanding of current evidence and emerging approaches.

**Current Evidence:**

*Ankle Sprain:*
- Functional treatment superior to immobilization (Cochrane)
- Exercise therapy reduces recurrence
- Surgery: Limited role except chronic instability

*ACL Injury:*
- Reconstruction vs. conservative: KANON, COMPARE trials
- Non-operative possible in selective patients
- Rehab-focused approach gaining evidence

*Hamstring Strain:*
- Active rehabilitation superior to rest
- Eccentric strengthening during healing
- Return based on criteria, not time alone

**Biological Augmentation:**

*PRP:*
- Muscle injuries: Some positive evidence
- Ligament healing: Mixed results
- Tendinopathy: Better than ligament injury

*Stem Cells:*
- Preclinical promise
- Limited clinical evidence
- Regulatory considerations

**Advanced Rehabilitation:**

*Blood Flow Restriction (BFR):*
- Low-load strength gains
- Applicable during early rehabilitation
- Evidence accumulating

*Technology:*
- Wearable load monitoring
- Movement analysis
- Biofeedback training

**Outcome Prediction:**
- MRI prognostic for muscle injuries
- Time to first contraction (hamstring)
- Degree of tendon involvement

**Prevention Evidence:**

*Programs with Strong Evidence:*
- FIFA 11+ (soccer)
- PEP program (ACL prevention)
- Nordic hamstring exercise

*Key Components:*
- Neuromuscular control
- Strength training
- Plyometrics
- Sport-specific movement quality

**Chronic Sequelae:**
- Post-traumatic osteoarthritis risk
- Chronic instability patterns
- Myofascial restrictions
- Altered movement patterns`,
      keyTerms: [
        { term: 'blood flow restriction training', definition: 'Low-load exercise with tourniquet to achieve strength gains' },
        { term: 'Nordic hamstring exercise', definition: 'Eccentric hamstring exercise shown to reduce injury rates' },
        { term: 'FIFA 11+', definition: 'Evidence-based warm-up program reducing injuries by 30-50%' },
      ],
      clinicalNotes: 'Prevention programs are highly effective but underutilized. Implementation barriers include time, compliance, and coaching education. Team-based approaches improve adoption.',
    },
  },

  media: [
    {
      id: 'sprain-strain-comparison',
      type: 'diagram',
      filename: 'sprain-vs-strain.svg',
      title: 'Sprain vs Strain',
      description: 'Comparison of ligament sprain and muscle strain',
    },
  ],
  citations: [
    {
      id: 'sprain-strain-ref',
      type: 'textbook',
      title: 'Soft Tissue Injuries',
      source: 'Sports Medicine Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-ligament-tears', targetType: 'condition', relationship: 'related', label: 'Ligament Tears' },
    { targetId: 'ortho-patient-prevention', targetType: 'concept', relationship: 'related', label: 'Injury Prevention' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'sports medicine', 'injuries'],
    keywords: ['sprain', 'strain', 'ligament', 'muscle', 'RICE'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sprainsAndStrainsContent;
