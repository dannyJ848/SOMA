/**
 * Osteoarthritis - Comprehensive Educational Content
 *
 * Degenerative joint disease characterized by cartilage breakdown,
 * bone changes, and joint symptoms.
 */

import { EducationalContent } from '../../types';

export const osteoarthritisContent: EducationalContent = {
  id: 'condition-osteoarthritis',
  type: 'condition',
  name: 'Osteoarthritis',
  alternateNames: ['OA', 'Degenerative Joint Disease', 'Osteoarthrosis'],
  hpoId: 'HP:0002758',

  levels: {
    1: {
      level: 1,
      summary: 'Osteoarthritis is the most common type of arthritis, occurring when the protective cartilage on the ends of bones wears down over time.',
      explanation: `Osteoarthritis (OA) is a condition that affects your joints, usually from wear and tear over many years.

**What Happens:**
- Cartilage, the cushion between bones, breaks down
- Bones rub against each other, causing pain
- Most common in knees, hips, hands, and spine

**Common Symptoms:**
- Joint pain during or after movement
- Stiffness, especially after resting
- Tenderness when touching the joint
- Loss of flexibility
- Grating sensation or bone spurs

**Risk Factors:**
- Getting older
- Being overweight
- Joint injuries
- Repetitive stress on joints
- Family history
- Being female (after menopause)

**Treatment:**
- Exercise and weight loss (most important)
- Over-the-counter pain relievers
- Physical therapy
- Joint injections for severe cases
- Joint replacement surgery for advanced cases`,
      keyTerms: [
        { term: 'cartilage', definition: 'Smooth tissue covering bone ends that allows easy movement' },
        { term: 'bone spur', definition: 'Extra bone growth at joint edges' },
        { term: 'joint replacement', definition: 'Surgery to replace damaged joint with artificial one' },
      ],
      analogies: [
        'Cartilage is like a cushion on a chair. Over time, it wears thin until you feel the hard surface underneath.',
      ],
      examples: [
        'A 65-year-old grandmother has knee pain when climbing stairs due to osteoarthritis.',
        'A former football player develops hip osteoarthritis in his 50s.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoarthritis is the most common form of arthritis; management focuses on symptom relief, maintaining function, and slowing progression through non-pharmacologic and pharmacologic approaches.',
      explanation: `OA is a degenerative joint disease involving cartilage, bone, and surrounding tissues.

**Pathophysiology:**
- Cartilage breakdown exceeds repair
- Subchondral bone changes (sclerosis, cysts, osteophytes)
- Synovitis and capsular fibrosis
- Muscle weakness contributes to progression

**Clinical Features:**
- Joint pain worsened by use, improved by rest
- Brief morning stiffness (<30 minutes)
- Crepitus, bony enlargement
- Reduced range of motion
- Heberden nodes (DIP), Bouchard nodes (PIP) in hands

**Radiographic Findings:**
- Joint space narrowing
- Osteophytes
- Subchondral sclerosis
- Subchondral cysts

**Management:**
- Non-pharmacologic: Exercise, weight loss, assistive devices
- Pharmacologic: Acetaminophen, NSAIDs, topical agents
- Intra-articular: Corticosteroids, hyaluronic acid
- Surgical: Joint replacement for advanced disease`,
      keyTerms: [
        { term: 'Heberden nodes', definition: 'Bony swellings at distal finger joints' },
        { term: 'osteophyte', definition: 'Bone spur growing at joint margin' },
        { term: 'subchondral', definition: 'Below the cartilage surface' },
      ],
    },
    3: {
      level: 3,
      summary: 'OA management prioritizes non-pharmacologic interventions; NSAIDs are most effective pharmacologically but require risk assessment; intra-articular injections provide short-term relief.',
      explanation: `Evidence-based OA management integrates multiple treatment modalities.

**Non-Pharmacologic Management:**
- Exercise: Strengthening, aerobic, range of motion
- Weight loss: 10% body weight reduces symptoms significantly
- Physical therapy: Gait training, bracing
- Assistive devices: Canes, walkers, shoe orthotics

**Pharmacologic Options:**
- Acetaminophen: First-line, limited efficacy
- Oral NSAIDs: Most effective; use lowest dose for shortest time
- Topical NSAIDs: Knee OA, fewer systemic effects
- Topical capsaicin: Alternative for hand/knee OA
- Duloxetine: For chronic pain, especially with depression

**Intra-articular Injections:**
- Corticosteroids: Rapid relief, 4-8 weeks duration
- Hyaluronic acid: Variable evidence, longer duration
- PRP/stem cells: Investigational

**Surgical Options:**
- Arthroscopy: Limited role (no benefit vs sham for most)
- Osteotomy: Unicompartmental knee OA in younger patients
- Joint replacement: Advanced disease, significant impact on quality of life`,
      keyTerms: [
        { term: 'duloxetine', definition: 'SNRI effective for chronic musculoskeletal pain' },
        { term: 'arthroscopy', definition: 'Minimally invasive joint surgery; limited role in OA' },
        { term: 'PRP', definition: 'Platelet-rich plasma; investigational for OA' },
      ],
    },
    4: {
      level: 4,
      summary: 'OA treatment requires multimodal approach; NSAIDs remain mainstay despite risks; duloxetine useful for chronic pain; joint replacement indicated for refractory symptoms and functional limitations.',
      explanation: `Comprehensive OA management addresses disease severity and patient factors.

**NSAID Selection:**
- Non-selective: Naproxen (lowest CV risk), ibuprofen
- COX-2 selective: Celecoxib (lower GI risk)
- Topical: Diclofenac (knee, hand OA), good safety
- Risk assessment: GI bleeding, CV events, renal function

**Duloxetine:**
- 60 mg daily for chronic musculoskeletal pain
- Mechanism: Central sensitization modulation
- Consider for patients with NSAID contraindications

**Knee OA Specific:**
- Valgus/Varus brace: Offload affected compartment
- Hyaluronic acid: Consider if NSAIDs contraindicated
- Genicular nerve ablation: For non-surgical candidates

**Hip OA:**
- Corticosteroid injection: Less reliable than knee
- Total hip arthroplasty: Excellent outcomes
- Anterior vs posterior approach considerations

**Indications for Joint Replacement:**
- Pain interfering with sleep/daily activities
- Failed conservative treatment
- Significant functional limitation
- Radiographic evidence of advanced disease`,
      keyTerms: [
        { term: 'genicular nerve ablation', definition: 'Radiofrequency ablation for knee OA pain' },
        { term: 'valgus brace', definition: 'Brace to offload medial knee compartment' },
        { term: 'total knee arthroplasty', definition: 'Knee replacement surgery' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert OA management integrates biomechanical optimization, targeted pharmacotherapy, and timely surgical referral; emerging disease-modifying therapies may change treatment paradigm.',
      explanation: `Advanced OA care addresses individualized treatment and emerging therapies.

**Biomechanical Factors:**
- Joint loading: Modification through gait, bracing, footwear
- Muscle function: Quadriceps strength critical for knee OA
- Proprioception: Balance training reduces fall risk

**Pain Mechanisms:**
- Nociceptive: Peripheral joint damage
- Nocplastic: Central sensitization (duloxetine target)
- Neuropathic: Nerve entrapment, referred pain

**Disease-Modifying OA Drugs (DMOADs):**
- None currently FDA approved
- Targets: Inflammation, subchondral bone, cartilage metabolism
- Trials: Sprifermin, lorecivivint, Wnt pathway inhibitors
- Biomarker development ongoing

**Joint Replacement Considerations:**
- Timing: Balance disease severity with surgical risk
- Prehabilitation: Improves post-operative outcomes
- Post-op rehabilitation: Critical for functional recovery
- Complications: Infection, instability, wear

**Future Directions:**
- Personalized medicine based on phenotype
- Earlier intervention strategies
- Regenerative medicine approaches`,
      keyTerms: [
        { term: 'DMOAD', definition: 'Disease-modifying osteoarthritis drug (in development)' },
        { term: 'central sensitization', definition: 'Amplified pain processing in central nervous system' },
        { term: 'prehabilitation', definition: 'Pre-surgical exercise program' },
      ],
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['arthritis', 'degenerative', 'joint'],
    keywords: ['osteoarthritis', 'OA', 'joint pain', 'cartilage'],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default osteoarthritisContent;
