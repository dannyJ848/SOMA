/**
 * Sprains and Strains - Educational Content
 *
 * Covers soft tissue injuries including ligament sprains and
 * muscle strains with grading, treatment, and rehabilitation.
 */

import { EducationalContent } from '../../types';

export const sprainsStrainsContent: EducationalContent = {
  id: 'sports-med-sprains-strains',
  type: 'condition',
  name: 'Sprains and Strains',
  alternateNames: ['Soft Tissue Injury', 'Ligament Sprain', 'Muscle Strain'],

  levels: {
    1: {
      level: 1,
      summary: 'Sprains and strains are two of the most common sports injuries, but they affect different parts of your body.',
      explanation: `## What's the Difference?

**Sprain**: Injury to a ligament (tissue connecting bones)
- Happens when a joint is forced beyond its normal range of motion
- Common sites: ankles, knees, wrists

**Strain**: Injury to a muscle or tendon (tissue connecting muscle to bone)
- Happens when muscles are stretched too far or contract too forcefully
- Common sites: hamstrings, back, shoulders

## Immediate Signs

**Sprains:**
- Pain around the joint
- Swelling
- Bruising
- Difficulty moving the joint

**Strains:**
- Pain in the muscle
- Muscle spasms
- Weakness
- Limited movement

Both can range from mild to severe depending on how much damage occurs.

## R.I.C.E. Method (First 24-48 Hours)

**Rest**: Stop activity and protect the injured area

**Ice**: Apply ice packs for 15-20 minutes, 3-4 times daily
- Never apply ice directly to skin
- Helps reduce swelling and pain

**Compression**: Use elastic bandage to reduce swelling
- Should be snug but not tight

**Elevation**: Raise injured area above heart level
- Helps drain fluid away from injury

## When to Seek Medical Care

- Visible deformity
- Inability to bear weight
- Severe pain or swelling
- Numbness or tingling
- No improvement after 2-3 days`,
      keyTerms: [
        { term: 'sprain', definition: 'Injury to a ligament connecting bones' },
        { term: 'strain', definition: 'Injury to a muscle or tendon' },
        { term: 'ligament', definition: 'Tough tissue connecting bones at joints' },
        { term: 'tendon', definition: 'Tissue connecting muscle to bone' },
      ],
      analogies: [
        'A sprain is like damaging a rope that holds two things together.',
        'A strain is like stretching a rubber band too far.',
      ],
      examples: [
        'A soccer player sprains their ankle landing wrong.',
        'A runner strains their hamstring while sprinting.',
      ],
    },
    2: {
      level: 2,
      summary: 'Sprains and strains are graded I-III by severity, managed initially with R.I.C.E. and progressing through phased rehabilitation.',
      explanation: `## Grading System

**Grade I (Mild)**
- Slight stretching or microscopic tears
- Minimal pain and swelling
- No joint instability
- Recovery: 1-2 weeks

**Grade II (Moderate)**
- Partial tear of tissue
- Moderate pain and swelling
- Some difficulty bearing weight
- Mild joint instability
- Recovery: 3-6 weeks

**Grade III (Severe)**
- Complete tear or rupture
- Severe pain initially (may decrease)
- Significant swelling and bruising
- Complete loss of function
- Recovery: 2-3 months (may need surgery)

## R.I.C.E. Method

**Rest**: Stop activity and protect injured area
**Ice**: 15-20 minutes, 3-4 times daily
**Compression**: Elastic bandage, snug but not tight
**Elevation**: Above heart level to drain fluid

## Physical Examination

**Special Tests for Ligaments:**
- Lachman test (ACL)
- Anterior drawer (ankle)
- Varus/valgus stress (knee ligaments)

**Strength Testing:**
- 0-5 scale for muscle strength
- Compared to uninjured side

## Prevention Strategies

1. Proper warm-up: 5-10 minutes of light activity
2. Stretching: Dynamic before activity, static after
3. Gradual progression: Increase intensity slowly
4. Equipment: Proper footwear and protective gear
5. Year-round fitness program`,
      keyTerms: [
        { term: 'RICE', definition: 'Rest, Ice, Compression, Elevation - acute injury protocol' },
        { term: 'instability', definition: 'Joint that gives way or feels loose' },
        { term: 'rupture', definition: 'Complete tear of tissue' },
        { term: 'Lachman test', definition: 'Primary clinical test for ACL integrity' },
      ],
      analogies: [
        'Grade III is like a rope completely breaking vs. Grade I where just a few strands are damaged.',
      ],
    },
    3: {
      level: 3,
      summary: 'Soft tissue healing progresses through inflammatory, proliferative, and remodeling phases requiring phased rehabilitation with appropriate timing for each.',
      explanation: `## Tissue Healing Process

**Inflammatory Phase (0-6 days)**
- Vasodilation and increased blood flow
- Neutrophil and macrophage infiltration
- Removal of damaged tissue
- Release of growth factors

**Proliferative Phase (3 days - 6 weeks)**
- Fibroblast activity and collagen synthesis
- Formation of granulation tissue
- Angiogenesis (new blood vessel formation)
- Type III collagen deposited (weaker, disorganized)

**Remodeling Phase (3 weeks - 12+ months)**
- Collagen maturation and realignment
- Type I collagen replaces Type III
- Tissue gradually gains strength
- Requires progressive loading

## Rehabilitation Phases

**Phase 1: Acute Phase (Days 1-7)**
- Continue R.I.C.E. protocol as needed
- Gentle range of motion exercises
- Pain-free movements only
- May use crutches or supportive devices

**Phase 2: Subacute Phase (Weeks 1-3)**
- Progressive stretching exercises
- Isometric contractions (muscle activation without movement)
- Light resistance training
- Balance and proprioception exercises

**Phase 3: Remodeling Phase (Weeks 3-6+)**
- Sport-specific exercises
- Progressive strengthening
- Agility and coordination drills
- Gradual return to activity

## Strengthening Exercises

**For Sprains (e.g., ankle):**
- Resistance band exercises
- Balance board/cushion training
- Calf raises
- Toe walking

**For Strains (e.g., hamstring):**
- Progressive stretching
- Eccentric strengthening
- Core strengthening
- Sport-specific movements`,
      keyTerms: [
        { term: 'proprioception', definition: 'Body awareness of joint position and movement' },
        { term: 'isometric', definition: 'Muscle contraction without joint movement' },
        { term: 'eccentric', definition: 'Muscle lengthening while contracting' },
        { term: 'angiogenesis', definition: 'Formation of new blood vessels' },
      ],
      clinicalNotes: 'Healing follows distinct phases. Treatment timing should align with healing stages. Proprioception training prevents re-injury. Prevention requires consistent habits and preparation.',
    },
    4: {
      level: 4,
      summary: 'Soft tissue healing involves inflammatory, proliferative, and remodeling phases with specific treatment modalities and return-to-sport criteria based on functional testing.',
      explanation: `## Advanced Treatment Modalities

**Therapeutic Interventions:**
- Manual therapy techniques (mobilization, massage)
- Blood flow restriction training
- Platelet-rich plasma (PRP) injections
- Neuromuscular electrical stimulation

**Advanced Assessment Tools:**
- Special tests for ligamentous instability
- Strength grading (0-5 scale)
- Range of motion measurements (goniometry)
- Functional movement assessment

**Imaging:**
- X-ray: Rule out fractures and assess joint alignment
- MRI: Soft tissue evaluation, grading tears
- Ultrasound: Dynamic assessment of tendons and ligaments
- CT scan: Bony detail and intra-articular injuries

## Return to Sport Criteria

1. Pain-free full range of motion
2. No swelling or tenderness
3. Strength >=90% compared to uninjured side
4. Normal functional movements
5. Sport-specific drills completed
6. Psychological readiness
7. Passing functional performance tests

## P.E.A.C.E. & L.O.V.E. Protocols

**P.E.A.C.E. (Acute Phase)**
- Protect, Elevate, Avoid anti-inflammatories, Compress, Educate

**L.O.V.E. (Subacute Phase)**
- Load, Optimism, Vascularization, Exercise

This modern approach updates traditional R.I.C.E. with evidence-based practices.`,
      keyTerms: [
        { term: 'fibroblast', definition: 'Cell that produces collagen and other connective tissue fibers' },
        { term: 'goniometry', definition: 'Measurement of joint angles using a specialized instrument' },
        { term: 'PRP', definition: 'Platelet-rich plasma; concentrated blood product with healing factors' },
      ],
      clinicalNotes: 'Healing follows distinct phases. Treatment timing should align with healing stages. Advanced imaging guides management decisions. Return to sport requires comprehensive functional assessment.',
    },
    5: {
      level: 5,
      summary: 'Contemporary soft tissue management integrates evolving R.I.C.E. to P.E.A.C.E. and L.O.V.E. paradigms, evidence-based loading protocols, and sex-specific considerations.',
      explanation: `## R.I.C.E. vs. P.E.A.C.E. & L.O.V.E.

Traditional R.I.C.E. has been reconsidered based on emerging evidence:

**P.E.A.C.E. (Acute Phase)**
- Protect: Unload for 1-3 days, minimize rest
- Elevate: Higher than heart
- Avoid anti-inflammatories: May impair healing
- Compress: Edema control
- Educate: Active recovery better than passive

**L.O.V.E. (Subacute Phase)**
- Load: Mechanical stress promotes repair
- Optimism: Psychology affects outcomes
- Vascularization: Pain-free aerobic activity
- Exercise: Active rehabilitation

## Biological Augmentation

**Platelet-Rich Plasma (PRP):**
- Meta-analyses show modest benefits in tendinopathy
- Mixed results for muscle strains
- Optimal concentration and protocol unclear
- Grade B recommendation for lateral epicondylitis

## Eccentric Training for Tendinopathy

Alfredson protocol for Achilles tendinopathy:
- 180 repetitions daily
- Progressive loading essential
- 12-week program shows ~70% success
- Heavy slow resistance shows similar outcomes

## Injury Prediction Models

Risk assessment factors:
- Previous injury (strongest predictor)
- Muscle imbalance (strength ratios)
- Fatigue and workload
- Biomechanical deficiencies
- Psychosocial factors

**Acute:Chronic Workload Ratio:**
- Ratio >1.5 associated with increased injury risk
- Considers recent workload vs. long-term average
- Guides training periodization

## Sex-Based Differences

**Females have higher rates of:**
- ACL injuries (2-8x higher)
- Patellofemoral pain
- Certain ankle sprains

**Contributing factors:**
- Q-angle differences
- Hormonal influences
- Neuromuscular activation patterns
- Landing biomechanics

**Implications:** Sex-specific prevention programs show 50-80% risk reduction`,
      keyTerms: [
        { term: 'acute:chronic workload ratio', definition: 'Ratio of recent training load to average long-term load; values >1.5 correlate with injury risk' },
        { term: 'Q-angle', definition: 'Quadriceps angle; angle between quadriceps pull and patellar tendon, typically larger in females' },
        { term: 'Alfredson protocol', definition: 'High-volume eccentric exercise program for Achilles tendinopathy' },
      ],
      clinicalNotes: 'Mechanical loading promotes tissue repair when appropriately applied. Acute:chronic workload ratio predicts injury risk. Sex-specific considerations are essential in prevention and treatment. Evidence supports active rehabilitation over passive rest.',
    },
  },

  media: [
    {
      id: 'sprain-strain-grading',
      type: 'diagram',
      filename: 'sprain-strain-grading.svg',
      title: 'Sprain and Strain Grading',
      description: 'Classification system for grading soft tissue injuries',
    },
  ],

  citations: [
    {
      id: 'soft-tissue-healing',
      type: 'article',
      title: 'Soft Tissue Healing and Repair',
      source: 'Journal of Athletic Training',
    },
    {
      id: 'eccentric-protocol',
      type: 'article',
      title: 'Eccentric Training for Tendinopathy',
      source: 'British Journal of Sports Medicine',
    },
  ],

  crossReferences: [
    { targetId: 'sports-med-ankle-injuries', targetType: 'topic', relationship: 'related', label: 'Ankle Injuries' },
    { targetId: 'sports-med-overuse-injuries', targetType: 'topic', relationship: 'related', label: 'Overuse Injuries' },
    { targetId: 'sports-med-return-to-play-principles', targetType: 'concept', relationship: 'related', label: 'Return to Play' },
  ],

  tags: {
    systems: ['musculoskeletal'],
    topics: ['sprain', 'strain', 'soft-tissue-injury', 'sports-medicine'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'sports-medicine', 'orthopedics'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default sprainsStrainsContent;
