import { EducationalContent } from '../../types';

export const osteoarthritisPatientContent: EducationalContent = {
  id: 'ortho-patient-osteoarthritis',
  type: 'condition',
  name: 'Osteoarthritis',
  alternateNames: ['OA', 'Degenerative joint disease', 'Wear and tear arthritis'],

  levels: {
    1: {
      level: 1,
      summary: 'Osteoarthritis is the most common type of arthritis, where the cushioning cartilage in joints wears down over time, causing pain and stiffness.',
      explanation: `Osteoarthritis (OA) happens when the smooth cartilage that covers the ends of bones in your joints wears down. Think of it like the tread on a tire wearing out.

**What Happens:**
- Cartilage breaks down
- Bones may rub together
- Joint becomes painful and stiff
- Bone spurs may form

**Common Joints Affected:**
- Knees
- Hips
- Hands
- Spine

**Risk Factors:**
- Age (more common over 50)
- Being overweight
- Previous joint injuries
- Family history
- Overuse from work or sports

**Symptoms:**
- Joint pain, especially with activity
- Stiffness, particularly in the morning
- Swelling
- Reduced flexibility
- Grating sensation

**Treatment:**
- Stay active with gentle exercise
- Maintain a healthy weight
- Pain medications when needed
- Physical therapy
- Joint replacement if severe`,
      keyTerms: [
        { term: 'osteoarthritis', definition: 'Wear and tear arthritis where cartilage breaks down' },
        { term: 'cartilage', definition: 'Smooth, slippery tissue covering bones in joints' },
        { term: 'bone spur', definition: 'Extra bone growth that forms around damaged joints' },
      ],
      analogies: [
        'Cartilage wearing down is like the rubber on a brake pad wearing thin.',
        'Bone spurs are like your body trying to patch a road with extra asphalt.',
      ],
      examples: [
        'Knee pain climbing stairs is common with knee osteoarthritis.',
        'Morning stiffness lasting less than 30 minutes is typical of OA.',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoarthritis involves progressive cartilage degeneration with secondary bone changes. Management focuses on symptom control, function preservation, and addressing modifiable risk factors.',
      explanation: `Osteoarthritis is a disease of the whole joint, not just cartilage.

**Joint Changes:**
- Cartilage: Fibrillation, fissuring, loss
- Bone: Sclerosis, osteophytes, cysts
- Synovium: Inflammation
- Ligaments: Laxity
- Muscles: Weakness

**Classification (Kellgren-Lawrence):**
- Grade 0: Normal
- Grade 1: Doubtful narrowing, possible osteophytes
- Grade 2: Definite osteophytes, possible narrowing
- Grade 3: Moderate osteophytes, definite narrowing
- Grade 4: Large osteophytes, marked narrowing, bone-on-bone

**Risk Factors:**
*Non-modifiable:*
- Age
- Genetics
- Sex (more common in women after 50)

*Modifiable:*
- Obesity
- Joint injury
- Occupational overload
- Muscle weakness

**Treatment Approach:**

*Non-pharmacologic:*
- Patient education
- Weight management
- Exercise (strengthening, aerobic, flexibility)
- Physical therapy
- Assistive devices

*Pharmacologic:*
- Acetaminophen
- NSAIDs (oral and topical)
- Intra-articular injections

*Surgical:*
- Arthroscopy (limited role)
- Osteotomy (realignment)
- Joint replacement`,
      keyTerms: [
        { term: 'osteophyte', definition: 'Bone spur; body\'s attempt to stabilize the joint' },
        { term: 'Kellgren-Lawrence', definition: 'Grading system for osteoarthritis severity on X-ray' },
        { term: 'sclerosis', definition: 'Thickening of bone beneath damaged cartilage' },
      ],
      analogies: [
        'Osteophytes are like the body building a retaining wall around an unstable slope.',
        'Grade 4 OA (bone-on-bone) is like two brake rotors grinding together.',
      ],
    },
    3: {
      level: 3,
      summary: 'OA pathophysiology involves complex interactions between mechanical factors, inflammation, and failed repair mechanisms. Evidence-based management integrates lifestyle modification, pharmacotherapy, and surgical intervention.',
      explanation: `Understanding OA requires appreciation of both mechanical and biological factors.

**Pathophysiology:**

*Cartilage:*
- Chondrocyte dysfunction
- Matrix metalloproteinase upregulation
- Proteoglycan loss
- Collagen network disruption
- Loss of water content

*Subchondral Bone:*
- Increased turnover
- Microdamage
- Bone marrow lesions (on MRI)
- Sclerosis and cyst formation

*Synovium:*
- Low-grade inflammation
- Inflammatory mediators (IL-1, TNF-alpha)
- Effusion
- Synovial thickening

**Phenotypes:**
- Post-traumatic
- Inflammatory
- Metabolic (obesity-related)
- Mechanical overload
- Aging-related

**Evidence-Based Treatment:**

*Strong Evidence:*
- Exercise (aerobic + strengthening)
- Weight loss (if overweight)
- NSAIDs (short-term)
- Topical NSAIDs

*Moderate Evidence:*
- Acetaminophen (weaker than NSAIDs)
- Intra-articular corticosteroids (short-term)
- Physical therapy

*Uncertain/Weak Evidence:*
- Glucosamine/chondroitin
- Viscosupplementation
- PRP

**Injection Therapies:**
- Corticosteroids: Short-term relief, repeated use concerns
- Hyaluronic acid: Variable evidence
- PRP: Growing interest, evidence developing`,
      keyTerms: [
        { term: 'bone marrow lesion', definition: 'Abnormal signal in bone on MRI; correlates with pain' },
        { term: 'matrix metalloproteinase', definition: 'Enzymes that break down cartilage matrix' },
        { term: 'viscosupplementation', definition: 'Injection of hyaluronic acid into joint' },
      ],
      clinicalNotes: 'Guidelines recommend non-pharmacologic therapy first, with NSAIDs for flares. Repeated corticosteroid injections may accelerate cartilage loss. Surgery indicated when conservative measures fail.',
    },
    4: {
      level: 4,
      summary: 'OA represents a spectrum of joint disease with distinct mechanical and inflammatory phenotypes. Treatment individualization based on phenotype, structural progression, and functional impact optimizes outcomes.',
      explanation: `Advanced OA management integrates phenotyping with targeted interventions.

**Phenotype Characterization:**

*Post-Traumatic:*
- Clear injury history
- Younger patients
- Localized cartilage loss
- May respond to unloading/realignment

*Inflammatory:*
- Effusion, warmth
- Elevated CRP
- May respond to anti-inflammatory approaches
- Consider secondary causes

*Metabolic:*
- Associated with obesity, metabolic syndrome
- Systemic inflammation
- Weight loss particularly effective
- Hand OA association

*Biomechanical:*
- Malalignment
- Meniscal pathology
- May benefit from osteotomy
- Bracing for focal disease

**MRI Assessment:**
- Cartilage: Defects, volume
- Bone: Marrow lesions, cysts, attrition
- Meniscus: Tears, extrusion
- Synovitis: Effusion, thickening
- Ligaments: Integrity

**Advanced Treatment:**

*Biologics:*
- PRP: Various preparations
- BMAC: Limited evidence
- Adipose-derived cells

*Surgical Options:*
- Arthroscopic debridement: Limited role
- Cartilage restoration: Focal defects
- Osteotomy: Unicompartmental disease with malalignment
- Arthroplasty: End-stage disease

**Osteotomy Principles:**
- Correct alignment
- Shift load to healthy compartment
- Appropriate patient selection
- Bridge to or delay arthroplasty

**Outcome Measures:**
- WOMAC
- KOOS/HOOS
- VAS pain
- Functional testing`,
      keyTerms: [
        { term: 'phenotype', definition: 'Distinct subtype of disease with different characteristics and treatment response' },
        { term: 'BMAC', definition: 'Bone marrow aspirate concentrate; cell-based therapy' },
        { term: 'osteotomy', definition: 'Surgical bone cutting to realign joint and shift load' },
      ],
      clinicalNotes: 'Matching treatment to phenotype may improve outcomes. Inflammatory phenotype may respond to anti-inflammatory approaches. Mechanical phenotype may benefit from alignment correction.',
    },
    5: {
      level: 5,
      summary: 'Contemporary OA research focuses on disease modification, biomarker development, and personalized medicine approaches. Prevention through modifiable risk factor management remains the most impactful intervention.',
      explanation: `Expert OA management requires understanding of current evidence and emerging strategies.

**Disease Modification:**

*Failed DMOAD Trials:*
- IL-1 inhibitors
- MMP inhibitors
- Bisphosphonates
- Most growth factors

*Ongoing Research:*
- Wnt pathway inhibitors
- Senolytic therapy
- Gene therapy
- Structural approaches

**Biomarker Development:**
- Cartilage: CTX-II, COMP
- Bone: CTX-I
- Synovium: HA, MMP-3
- Imaging biomarkers
- Currently research tools, not clinical practice

**Prevention Strategies:**

*Primary Prevention:*
- Weight management
- Injury prevention
- Occupational modification
- Exercise

*Secondary Prevention:*
- Post-injury rehabilitation
- Meniscal preservation
- Alignment correction
- ACL reconstruction in appropriate patients

**Arthroplasty Outcomes:**
- 10-year survival >95%
- 85-90% patient satisfaction
- Persistent pain in 10-20%
- Implant longevity improving

**Emerging Concepts:**

*Precision Medicine:*
- Phenotype-directed treatment
- Genetic risk profiling
- Imaging-based stratification

*Regenerative Approaches:*
- Cell therapies
- Scaffold-based repair
- Gene therapy
- Limited evidence currently

**Health System Considerations:**
- OA is leading cause of disability
- Rising prevalence with aging population
- Cost-effective interventions: Exercise, weight loss
- Arthroplasty cost-effective for appropriate patients`,
      keyTerms: [
        { term: 'DMOAD', definition: 'Disease-modifying osteoarthritis drug; no current approved agents' },
        { term: 'senolytic therapy', definition: 'Treatment targeting senescent cells; research for OA' },
        { term: 'CTX-II', definition: 'C-terminal telopeptide of type II collagen; cartilage degradation marker' },
      ],
      clinicalNotes: 'No DMOAD exists despite decades of research. Prevention and symptom management remain the focus. Exercise and weight loss have the strongest evidence for non-pharmacologic management.',
    },
  },

  media: [
    {
      id: 'oa-progression',
      type: 'diagram',
      filename: 'osteoarthritis-progression.svg',
      title: 'Osteoarthritis Progression',
      description: 'Stages of joint changes in osteoarthritis',
    },
  ],
  citations: [
    {
      id: 'oa-ref',
      type: 'textbook',
      title: 'Osteoarthritis: Pathophysiology and Management',
      source: 'Rheumatology Reference',
      license: 'Educational Use',
    },
  ],
  crossReferences: [
    { targetId: 'ortho-patient-joint-replacement', targetType: 'concept', relationship: 'related', label: 'Joint Replacement' },
    { targetId: 'ortho-patient-non-surgical-management', targetType: 'concept', relationship: 'related', label: 'Non-Surgical Management' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['orthopedics', 'arthritis', 'degenerative'],
    keywords: ['osteoarthritis', 'OA', 'cartilage', 'degenerative'],
    clinicalRelevance: 'high',
  },

  createdAt: '2024-01-24T00:00:00.000Z',
  updatedAt: '2024-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteoarthritisPatientContent;
