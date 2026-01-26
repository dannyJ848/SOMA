/**
 * Osteoarthritis - Comprehensive Educational Content
 */

import { EducationalContent } from '../../types';

export const osteoarthritis: EducationalContent = {
  id: 'condition-osteoarthritis',
  type: 'condition',
  name: 'Osteoarthritis',
  alternateNames: ['OA', 'Degenerative Joint Disease', 'Wear and Tear Arthritis'],
  hpoId: 'HP:0002758',

  levels: {
    1: {
      level: 1,
      summary: 'Osteoarthritis is a condition where the cartilage cushioning your joints wears down over time, causing pain and stiffness.',
      explanation: `Osteoarthritis is the most common type of arthritis. It happens when the smooth, slippery cartilage that covers the ends of bones wears away.

**Common symptoms:**
- Joint pain that worsens with activity
- Stiffness, especially in the morning
- Swelling around joints
- Reduced range of motion
- Grinding sensation in the joint

**Commonly affected joints:** Knees, hips, hands, spine

**Treatment:**
- Exercise and weight loss
- Physical therapy
- Pain medications (acetaminophen, NSAIDs)
- Joint injections
- Surgery for severe cases`,
      keyTerms: [
        { term: 'cartilage', definition: 'Smooth tissue covering the ends of bones in joints' },
        { term: 'arthritis', definition: 'Inflammation of one or more joints' },
      ],
      analogies: ['Cartilage is like the shock absorber in your car—when it wears out, you feel every bump.'],
      examples: ['An older person with knee pain that gets worse after walking and better with rest likely has osteoarthritis.'],
    },
    2: {
      level: 2,
      summary: 'OA is a degenerative joint disease involving cartilage loss, subchondral bone changes, and synovial inflammation, managed with multimodal therapy including exercise, weight management, and pharmacotherapy.',
      explanation: `## Pathology
- Cartilage degradation
- Subchondral bone sclerosis and cysts
- Osteophyte formation
- Synovial inflammation
- Muscle weakness

## Risk Factors
- Age, obesity, female sex
- Joint injury, repetitive stress
- Genetics, malalignment

## Diagnosis
- Clinical: Pain with use, morning stiffness <30 minutes
- Radiograph: Joint space narrowing, osteophytes, sclerosis, cysts

## Treatment
**Non-Pharmacologic:**
- Exercise (strengthening, aerobic)
- Weight loss
- Physical therapy

**Pharmacologic:**
- Topical NSAIDs (first-line for knee/hand)
- Oral NSAIDs, acetaminophen
- Duloxetine (chronic pain)
- Intra-articular corticosteroids (short-term relief)

**Surgical:**
- Total joint replacement for refractory cases`,
      keyTerms: [
        { term: 'osteophyte', definition: 'Bony projection (bone spur) that forms at joint margins in OA' },
        { term: 'subchondral', definition: 'Bone lying directly under cartilage' },
        { term: 'total joint replacement', definition: 'Surgical replacement of damaged joint with prosthesis' },
      ],
    },
    3: {
      level: 3,
      summary: 'OA pathophysiology involves cartilage matrix degradation via MMPs, chondrocyte dysfunction, and inflammatory mediators, with treatment focusing on symptom management and delaying progression.',
      explanation: `## Pathophysiology
- **Cartilage:** Collagen II degradation, proteoglycan loss, MMP activation
- **Chondrocytes:** Imbalanced anabolism/catabolism, apoptosis
- **Subchondral bone:** Increased turnover, microfractures, cysts
- **Synovium:** Low-grade inflammation, cytokine production (IL-1, TNF)
- **Biomechanics:** Altered load distribution, joint instability

## Imaging
- X-ray: Joint space narrowing, osteophytes, sclerosis (KL grading)
- MRI: Cartilage defects, bone marrow lesions, meniscal pathology

## Advanced Therapies
- Hyaluronic acid injections (viscosupplementation): Mixed evidence
- PRP injections: Emerging, not yet standard
- Stem cell therapy: Experimental

## Joint Replacement
- Indicated for refractory, functionally limiting OA
- Hip and knee most common
- Excellent outcomes for 15-20 years`,
      keyTerms: [
        { term: 'MMP', definition: 'Matrix metalloproteinase; enzyme degrading cartilage matrix' },
        { term: 'viscosupplementation', definition: 'Intra-articular hyaluronic acid injection' },
        { term: 'Kellgren-Lawrence', definition: 'Radiographic grading system for OA severity (0-4)' },
      ],
      clinicalNotes: 'Topical NSAIDs preferred for knee OA to reduce systemic side effects. Intra-articular steroids provide short-term relief but may accelerate cartilage loss with repeated injections.',
    },
    4: {
      level: 4,
      summary: 'OA phenotypes and endotypes guide treatment selection, with emerging disease-modifying therapies targeting inflammation, cartilage repair, and subchondral bone while addressing comorbidities and perioperative optimization.',
      explanation: `## OA Phenotypes
- Inflammatory phenotype: Responds to anti-inflammatory approaches
- Bone-dominant: Subchondral bone changes predominate
- Cartilage-dominant: Chondrocyte dysfunction
- Mechanical: Malalignment, biomechanical factors
- Metabolic: Associated with obesity, metabolic syndrome

## Disease-Modifying Therapies (DMOADS)
**In Development:**
- Anti-NGF (tanezumab): Pain, but osteonecrosis concerns
- Wnt pathway inhibitors
- Cathepsin K inhibitors
- IL-1/TNF antagonists (disappointing results so far)

## Perioperative Optimization
- Weight loss before surgery improves outcomes
- Smoking cessation
- Diabetes/glucose control
- Preoperative PT ("prehab")

## Post-Arthroplasty Care
- DVT prophylaxis
- Early mobilization
- Physical therapy
- Pain management (multimodal, opioid-sparing)`,
      keyTerms: [
        { term: 'DMOAD', definition: 'Disease-modifying osteoarthritis drug; aims to slow structural progression' },
        { term: 'NGF', definition: 'Nerve growth factor; pain mediator targeted by tanezumab' },
        { term: 'prehab', definition: 'Preoperative rehabilitation to improve surgical outcomes' },
      ],
      clinicalNotes: 'No approved DMOADs exist yet—management remains symptom-focused. Anti-NGF antibodies were promising but development stalled due to joint safety signals.',
    },
    5: {
      level: 5,
      summary: 'Precision OA care integrates imaging biomarkers, molecular endotyping, regenerative medicine approaches, and novel therapeutic targets while understanding OA as a whole-joint organ failure.',
      explanation: `## Biomarkers
- **Imaging:** MRI-based compositional imaging (dGEMRIC, T2 mapping)
- **Biochemical:** CTX-II, COMP, HA, uCTX-I
- **Genetic:** GWAS-identified risk loci

## Regenerative Medicine
- MACI (matrix-induced autologous chondrocyte implantation)
- Stem cell therapies (MSCs): Phase 2-3 trials
- Gene therapy approaches
- Scaffold/biomaterial combinations

## Novel Targets
- Senolytic therapy (clearing senescent chondrocytes)
- Wnt signaling modulation
- Aggrecanase (ADAMTS) inhibitors
- Epigenetic modifiers

## Joint Preservation
- High tibial osteotomy for malalignment
- Arthroscopic debridement (limited role)
- Biologics to delay arthroplasty`,
      keyTerms: [
        { term: 'MACI', definition: 'Matrix-induced autologous chondrocyte implantation; cartilage repair technique' },
        { term: 'senolytic', definition: 'Agent eliminating senescent cells to restore tissue function' },
        { term: 'dGEMRIC', definition: 'Delayed gadolinium-enhanced MRI of cartilage; measures proteoglycan content' },
      ],
      clinicalNotes: 'MACI is FDA-approved for focal cartilage defects but does not address diffuse OA. Senolytics are an exciting research area but not yet clinically available for OA.',
    },
  },

  media: [],
  citations: [{ id: 'oarsi-oa-2019', type: 'article', title: 'OARSI Guidelines for Non-Surgical Management of Knee OA', source: 'Osteoarthritis and Cartilage' }],
  crossReferences: [{ targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' }],
  tags: { systems: ['musculoskeletal'], topics: ['rheumatology', 'orthopedics'], keywords: ['osteoarthritis', 'OA', 'joint pain', 'cartilage'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] } },
  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteoarthritis;
