import { EducationalContent } from '../../types';

export const osteoarthritisContent: EducationalContent = {
  id: 'condition-osteoarthritis',
  type: 'condition',
  name: 'Osteoarthritis',
  alternateNames: ['OA', 'Degenerative joint disease', 'DJD', 'Wear and tear arthritis', 'Arthrosis'],
  hpoId: 'HP:0002758',

  levels: {
    1: {
      level: 1,
      summary: 'Osteoarthritis is when the cushioning in your joints wears down over time, causing pain and stiffness.',
      explanation: `Think of your joints like a door hinge that has a special cushion (cartilage) to help it move smoothly. In osteoarthritis, this cushion slowly wears away over time.

**What happens:**
- The smooth cushion (cartilage) in your joints breaks down
- Bones can start rubbing against each other
- Joints become stiff and painful
- You might hear cracking or grinding sounds

**Where it happens most:**
- Knees
- Hips
- Hands (especially the fingertips and base of thumb)
- Spine (neck and lower back)

**What makes it more likely:**
- Getting older (most common after age 50)
- Previous joint injuries
- Being overweight (extra stress on joints)
- Doing the same joint movements over and over
- Family history

**How it feels:**
- Pain that gets worse with activity
- Stiffness in the morning (usually less than 30 minutes)
- Joints may look bigger or bony
- Less movement in the joint

**The good news:**
While we can't cure OA, there are many ways to manage it:
- Exercise and physical therapy
- Weight management
- Pain medicines
- Joint injections
- In severe cases, joint replacement surgery`,
      keyTerms: [
        { term: 'cartilage', definition: 'The smooth, slippery cushion covering the ends of bones in a joint' },
        { term: 'joint', definition: 'Where two bones meet and allow movement' },
        { term: 'degenerative', definition: 'Getting worse slowly over time' },
        { term: 'stiffness', definition: 'Difficulty moving a joint, especially after rest' },
      ],
      analogies: [
        'Cartilage is like the rubber tip on a pencil eraser - it protects the bone underneath and helps things glide smoothly. In OA, this rubber wears down.',
        'OA is like the tread wearing off a tire - the more miles you put on it, the more worn it gets.',
      ],
      examples: [
        'Knee pain after walking up stairs that gets better with rest',
        'Stiff fingers in the morning that loosen up after 15 minutes',
        'A grinding feeling when you bend your knee',
      ],
    },
    2: {
      level: 2,
      summary: 'Osteoarthritis is a degenerative joint disease involving cartilage breakdown, subchondral bone changes, and joint inflammation, most commonly affecting weight-bearing joints.',
      explanation: `Osteoarthritis (OA) is the most common form of arthritis, affecting over 300 million people worldwide. Unlike rheumatoid arthritis, OA is primarily a mechanical/degenerative disease rather than autoimmune.

**Pathology Basics:**
- Progressive loss of articular cartilage
- Changes in underlying bone (subchondral sclerosis, cysts)
- Bone spurs (osteophytes) form at joint margins
- Mild synovial inflammation
- Weakening of surrounding muscles

**Risk Factors:**

*Non-modifiable:*
- Age (strongest risk factor)
- Female sex (especially after menopause)
- Genetics
- Previous joint injury

*Modifiable:*
- Obesity (especially for knee OA)
- Joint overuse/repetitive stress
- Muscle weakness
- Joint malalignment

**Clinical Presentation:**

*Symptoms:*
- Pain with activity, relieved by rest
- Morning stiffness <30 minutes (vs. >1 hour in RA)
- Decreased range of motion
- Joint instability ("giving way")
- Gelling (stiffness after prolonged sitting)

*Signs:*
- Bony enlargement
- Crepitus (grinding sensation)
- Limited range of motion
- Effusions (usually mild)
- Malalignment (varus/valgus)

**Joint Distribution:**
- Knees: most commonly symptomatic
- Hips: significant cause of disability
- Hands: DIP (Heberden's nodes), PIP (Bouchard's nodes), 1st CMC
- Spine: facet joints, disc degeneration
- Feet: 1st MTP (bunion association)

**Diagnosis:**
- Clinical diagnosis (no blood test)
- X-ray: joint space narrowing, osteophytes, sclerosis, cysts
- MRI: shows early cartilage changes, not usually needed
- Blood tests normal (RF negative, CRP normal)`,
      keyTerms: [
        { term: 'articular cartilage', definition: 'The smooth hyaline cartilage covering bone ends in joints', pronunciation: 'ar-TIK-yoo-lar' },
        { term: 'osteophyte', definition: 'A bone spur that forms at joint margins in OA', pronunciation: 'OS-tee-oh-fite' },
        { term: 'Heberden\'s nodes', definition: 'Bony enlargements at the DIP (fingertip) joints characteristic of hand OA' },
        { term: 'Bouchard\'s nodes', definition: 'Bony enlargements at the PIP (middle finger) joints in OA' },
        { term: 'crepitus', definition: 'A grinding or crackling sensation felt when moving a joint', pronunciation: 'KREP-ih-tus' },
      ],
      analogies: [
        'OA is like a road developing potholes over time - the smooth surface breaks down and the ride gets bumpy.',
        'Osteophytes are like stalactites in a cave - extra material building up where it doesn\'t belong.',
      ],
    },
    3: {
      level: 3,
      summary: 'Osteoarthritis is a complex disease of the whole joint organ involving cartilage degradation, subchondral bone remodeling, osteophyte formation, synovial inflammation, and periarticular tissue changes, driven by mechanical stress and inflammatory mediators.',
      explanation: `Osteoarthritis is now understood as a disease of the entire joint "organ," not simply cartilage wear.

**Molecular Pathophysiology:**

1. **Cartilage Changes:**
   - Chondrocyte dysfunction and death
   - Imbalance between anabolism and catabolism
   - Matrix metalloproteinases (MMPs) degrade collagen
   - ADAMTS enzymes degrade aggrecan
   - Loss of proteoglycans reduces water content
   - Collagen network disruption

2. **Subchondral Bone:**
   - Initial bone marrow lesions (edema)
   - Subchondral sclerosis (thickening)
   - Subchondral cysts
   - Altered bone remodeling
   - Crosstalk between bone and cartilage

3. **Synovium:**
   - Low-grade synovitis (unlike RA)
   - Macrophage infiltration
   - Cytokine production (IL-1, TNF, IL-6)
   - Contributes to pain and progression

4. **Osteophyte Formation:**
   - TGF-beta driven
   - Endochondral ossification at joint margins
   - May be stabilizing mechanism
   - Also impair joint motion

**Inflammatory Mediators:**
- IL-1beta: major catabolic cytokine
- TNF-alpha: synergizes with IL-1
- MMPs (1, 3, 13): collagen degradation
- ADAMTS-4/5 (aggrecanases): proteoglycan loss
- Prostaglandins: pain signaling
- Nitric oxide: chondrocyte stress

**OA Phenotypes:**

1. **Post-traumatic OA:**
   - Following ACL tear, meniscal injury, fracture
   - Earlier onset
   - Known mechanical trigger

2. **Metabolic OA:**
   - Association with metabolic syndrome
   - Obesity, diabetes, dyslipidemia
   - Hand OA even in non-weight-bearing joints
   - Adipokines may drive inflammation

3. **Aging-associated OA:**
   - Chondrocyte senescence
   - Reduced regenerative capacity
   - Accumulated oxidative damage

4. **Genetic OA:**
   - Erosive hand OA
   - Early-onset OA
   - GDF5, SMAD3, COL2A1 variants

**Imaging:**

*X-ray (Kellgren-Lawrence grading):*
- Grade 0: Normal
- Grade 1: Doubtful narrowing, possible osteophytes
- Grade 2: Definite osteophytes, possible narrowing
- Grade 3: Moderate osteophytes/narrowing, sclerosis
- Grade 4: Large osteophytes, marked narrowing, severe sclerosis

*MRI findings:*
- Cartilage thinning/defects
- Bone marrow lesions (predict progression)
- Meniscal pathology
- Synovitis
- Effusion

**Treatment Approach:**

*Non-pharmacologic (first-line):*
- Exercise (strengthening, aerobic, aquatic)
- Weight loss (if overweight)
- Physical therapy
- Assistive devices
- Bracing

*Pharmacologic:*
- Topical NSAIDs (knee, hand OA)
- Oral NSAIDs (lowest effective dose, shortest duration)
- Acetaminophen (less effective than NSAIDs)
- Duloxetine (central sensitization)
- Intra-articular corticosteroids
- Intra-articular hyaluronic acid (controversial)

*Surgical:*
- Arthroscopy (limited indications)
- Osteotomy (young, malaligned)
- Joint replacement (end-stage)`,
      keyTerms: [
        { term: 'ADAMTS', definition: 'A disintegrin and metalloproteinase with thrombospondin motifs; enzymes that degrade aggrecan in cartilage', pronunciation: 'A-DAMS' },
        { term: 'bone marrow lesion', definition: 'Subchondral bone signal abnormality on MRI associated with pain and OA progression' },
        { term: 'chondrocyte', definition: 'The only cell type in cartilage, responsible for matrix production and maintenance', pronunciation: 'KON-droh-site' },
        { term: 'Kellgren-Lawrence', definition: 'Radiographic grading system for OA severity (0-4)' },
        { term: 'aggrecan', definition: 'Major proteoglycan in cartilage that attracts water and provides compressive resistance' },
      ],
      clinicalNotes: 'Bone marrow lesions on MRI predict OA progression and correlate with pain. NSAIDs are more effective than acetaminophen for OA pain. Weight loss of 5-10% significantly improves knee OA symptoms.',
    },
    4: {
      level: 4,
      summary: 'Osteoarthritis pathogenesis involves mechanotransduction-induced chondrocyte catabolism, inflammasome activation, subchondral bone-cartilage unit disruption, and synovial inflammation, with distinct molecular phenotypes informing targeted therapeutic development.',
      explanation: `**Advanced Molecular Pathogenesis:**

1. **Mechanobiology:**

   *Chondrocyte Mechanotransduction:*
   - Integrin signaling (alpha5beta1, alphaVbeta3)
   - Ion channels (TRPV4, Piezo1/2)
   - Primary cilium as mechanosensor
   - Abnormal loading activates catabolic pathways
   - MAPK, NF-kappaB activation

   *Loading and Cartilage Health:*
   - Physiologic loading maintains cartilage
   - Excessive/abnormal loading is destructive
   - Immobilization causes cartilage atrophy
   - Joint malalignment alters stress distribution

2. **Inflammasome and Innate Immunity:**

   *NLRP3 Inflammasome:*
   - Activated by DAMPs (damage-associated molecular patterns)
   - Cartilage fragments, uric acid crystals, cholesterol
   - Caspase-1 activation
   - IL-1beta and IL-18 processing
   - Pyroptosis (inflammatory cell death)

   *Complement Activation:*
   - C5a, C3a in OA synovial fluid
   - MAC formation on chondrocytes
   - Complement regulatory proteins decreased
   - Synovial inflammation driver

3. **Cellular Senescence:**

   *Chondrocyte Senescence:*
   - p16INK4a accumulation with age
   - SASP (senescence-associated secretory phenotype)
   - MMPs, cytokines, chemokines
   - Paracrine effects on neighboring cells
   - Senolytics as therapeutic target

4. **Subchondral Bone-Cartilage Unit:**

   *Bone-Cartilage Crosstalk:*
   - Tidemark advancement and calcified cartilage thickening
   - Vascular invasion into cartilage
   - Growth factors from bone (TGF-beta, BMPs)
   - Subchondral bone stiffness alters cartilage loading
   - Bone remodeling inhibitors (bisphosphonates) studied

   *Bone Marrow Lesions:*
   - Histology: fibrosis, necrosis, edema
   - High bone turnover regions
   - Strongly associated with pain
   - Predict structural progression
   - Potential therapeutic target

5. **Synovitis and Joint Inflammation:**

   *Synovial Macrophages:*
   - M1-like polarization
   - Phagocytose cartilage debris
   - Produce inflammatory mediators
   - Adipose tissue-derived macrophages (infrapatellar fat pad)

   *Synovial Fluid Changes:*
   - Low viscosity (HA degradation)
   - DAMPs (cartilage fragments, S100 proteins)
   - Inflammatory cytokines
   - Lubricin reduction

**Distinct OA Phenotypes and Biomarkers:**

1. **Structural Phenotypes:**
   - Atrophic vs. hypertrophic
   - Cartilage-predominant vs. bone-predominant
   - Inflammatory vs. non-inflammatory

2. **Biomarkers:**

   *Cartilage turnover:*
   - CTX-II (C-terminal telopeptide of type II collagen)
   - COMP (cartilage oligomeric matrix protein)
   - Aggrecan fragments

   *Bone turnover:*
   - CTX-I (bone collagen)
   - Osteocalcin

   *Inflammation:*
   - hs-CRP, IL-6
   - MMP-3

   *Metabolic:*
   - Adipokines (leptin, adiponectin)
   - AGEs (advanced glycation end products)

**Pain Mechanisms:**

1. **Peripheral Sensitization:**
   - Subchondral bone innervation
   - NGF (nerve growth factor) upregulation
   - Prostaglandins, bradykinin
   - TRPV1 activation

2. **Central Sensitization:**
   - Temporal summation
   - Widespread hyperalgesia
   - Brain changes (functional MRI)
   - Nociplastic pain component

3. **Therapeutic Implications:**
   - Anti-NGF antibodies (tanezumab)
   - Duloxetine for central sensitization
   - Topical capsaicin (TRPV1 desensitization)

**Emerging Therapies:**

*Disease-Modifying Targets:*
- Wnt signaling inhibitors
- IL-1 inhibition (disappointing results so far)
- MMP-13 inhibitors
- ADAMTS-5 inhibitors
- Senolytics (UBX0101)
- Sprifermin (FGF18) - showed structural benefit

*Regenerative Approaches:*
- Autologous chondrocyte implantation
- MSC therapy (modest results)
- Platelet-rich plasma (variable evidence)
- Gene therapy (in development)`,
      keyTerms: [
        { term: 'SASP', definition: 'Senescence-associated secretory phenotype; inflammatory factors secreted by senescent cells that promote tissue dysfunction' },
        { term: 'mechanotransduction', definition: 'The process by which cells convert mechanical signals into biochemical responses' },
        { term: 'DAMP', definition: 'Damage-associated molecular pattern; endogenous molecules released from damaged tissue that activate innate immunity' },
        { term: 'nociplastic pain', definition: 'Pain arising from altered nociception without clear evidence of tissue damage or somatosensory system lesion' },
        { term: 'sprifermin', definition: 'Recombinant FGF18 that promotes cartilage anabolism; investigational disease-modifying OA drug' },
      ],
      clinicalNotes: 'Anti-NGF antibodies (tanezumab, fasinumab) reduce OA pain but carry FDA concerns about rapidly progressive OA. Subchondral bone-targeting (bisphosphonates, calcitonin) has shown mixed results. IL-1 inhibition disappointing despite strong rationale. No FDA-approved disease-modifying OA drug exists.',
    },
    5: {
      level: 5,
      summary: 'Osteoarthritis represents a heterogeneous syndrome of joint failure with distinct molecular endotypes (inflammatory, metabolic, mechanical, senescent), informing precision medicine approaches targeting mechanotransduction, inflammasome activation, senescence, and growth factor signaling for disease modification.',
      explanation: `**Precision Medicine in OA:**

1. **Molecular Endotypes:**

   *Inflammatory Endotype:*
   - Synovitis-driven
   - Elevated hs-CRP, IL-6, MMP-3
   - MRI synovitis, Hoffa-synovitis
   - May respond to anti-inflammatory DMOADs
   - Overlaps with metabolic OA

   *Low-Inflammation/Mechanical Endotype:*
   - Biomechanical abnormalities predominate
   - Normal inflammatory markers
   - Post-traumatic OA often in this category
   - May benefit from realignment, unloading

   *Metabolic Endotype:*
   - Adiposity-driven
   - High adipokines (leptin, visfatin)
   - AGE accumulation
   - Generalized OA (hand involvement)
   - May benefit from weight loss, metabolic interventions

   *Aging/Senescence Endotype:*
   - p16+ senescent cell accumulation
   - SASP-driven catabolism
   - May benefit from senolytics

2. **Systems Biology of OA:**

   *Transcriptomic Studies:*
   - Cartilage gene expression clusters identify phenotypes
   - Wnt signaling upregulated in OA
   - Hypoxia pathways (HIF-2alpha) pro-catabolic
   - Circadian rhythm genes affect cartilage homeostasis

   *Epigenetics:*
   - DNA methylation changes in OA cartilage
   - MMP13 promoter hypomethylated
   - miRNAs: miR-140 (protective), miR-155 (pathogenic)
   - Histone modifications alter gene expression

   *Metabolomics:*
   - Altered amino acid metabolism
   - Lipid mediators (omega-3 vs. omega-6)
   - Gut microbiome-joint axis
   - Mitochondrial dysfunction, oxidative stress

3. **Advanced Imaging Biomarkers:**

   *Compositional MRI:*
   - T2 mapping: collagen/water content
   - T1rho: proteoglycan content
   - dGEMRIC: glycosaminoglycan mapping
   - Detect pre-radiographic disease

   *Semiquantitative Scoring:*
   - WORMS (Whole-Organ MRI Score)
   - MOAKS (MRI OA Knee Score)
   - Bone marrow lesion volume
   - Cartilage thickness/morphology

4. **Clinical Trial Design and Failures:**

   *Structure-Modifying Trials:*
   - Primary endpoint: JSN on X-ray or MRI cartilage
   - Phase III failures: IL-1Ra (anakinra), MMP inhibitors, doxycycline
   - Modest success: Sprifermin (FGF18) - JSN slowing
   - Challenge: disconnection between structure and symptoms

   *Lessons Learned:*
   - Patient selection critical (phenotyping)
   - Early disease may be more modifiable
   - Need for symptom + structure endpoints
   - Duration of trials (years needed)

5. **Disease-Modifying Pipeline:**

   *Growth Factor Approaches:*
   - Sprifermin (FGF18): completed Phase III, regulatory path unclear
   - Kartogenin: small molecule chondrogenesis inducer
   - TGF-beta modulators

   *Anti-Inflammatory:*
   - JAK inhibitors (topical for hand OA)
   - NF-kappaB inhibitors
   - Complement inhibitors

   *Senolytic/Senomorphic:*
   - UBX0101 (MDM2/p53): Phase I-II completed
   - Fisetin, quercetin + dasatinib
   - SASP inhibitors

   *Anabolic:*
   - Wnt pathway modulators (complex dual role)
   - PTH analogs
   - BMP-7 (OP-1)

   *Gene Therapy:*
   - IL-1Ra gene transfer (TissueGene-C)
   - AAV vectors for growth factors

6. **Pain Phenotypes and Targeted Therapy:**

   *Nociceptive-Predominant:*
   - Local joint pathology drives pain
   - Responds to joint-directed therapy
   - IA injections, surgery helpful

   *Nociplastic/Central Sensitization:*
   - Pain out of proportion to structural damage
   - Widespread pain, fatigue, sleep issues
   - Responds to duloxetine, pregabalin
   - Poor surgical outcomes

   *Mixed Phenotype:*
   - Most common in clinical practice
   - Multimodal approach needed

**Current Treatment Recommendations (2024):**

*EULAR Guidelines:*
- Core: education, exercise, weight loss
- Topical NSAIDs for knee/hand OA
- Oral NSAIDs: short courses, GI/CV risk assessment
- IA corticosteroids: short-term benefit
- IA hyaluronic acid: weak recommendation against
- Cane: hip/knee OA

*ACR/AF Guidelines:*
- Similar core recommendations
- Conditional recommendation for duloxetine
- Strong recommendation against arthroscopic surgery for knee OA
- Platelet-rich plasma: no recommendation (insufficient evidence)

*Total Joint Replacement:*
- Cost-effective for end-stage OA
- Timing optimization important
- Younger patients: higher revision rates
- Obesity: higher complication risk but still beneficial
- Multimodal perioperative care improves outcomes`,
      keyTerms: [
        { term: 'DMOAD', definition: 'Disease-modifying osteoarthritis drug; agent that slows structural progression of OA (none yet approved)' },
        { term: 'endotype', definition: 'Disease subtype defined by distinct pathobiological mechanism, informing targeted therapy' },
        { term: 'dGEMRIC', definition: 'Delayed gadolinium-enhanced MRI of cartilage; technique assessing glycosaminoglycan content' },
        { term: 'senolytic', definition: 'Drug that selectively kills senescent cells to reduce SASP and tissue dysfunction' },
        { term: 'HIF-2alpha', definition: 'Hypoxia-inducible factor 2-alpha; transcription factor upregulated in OA cartilage that drives catabolism' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- No FDA-approved DMOADs exist
- Anti-NGF antibodies FDA concerns: rapidly progressive OA risk
- Sprifermin (FGF18) showed MRI cartilage thickening in Phase III but unclear clinical benefit
- MRI bone marrow lesions strongly predict OA progression
- Arthroscopic debridement not recommended for degenerative meniscal tears with OA
- OA is not simply "wear and tear" - active metabolic disease
- Hand OA DIP involvement helps distinguish from RA (PIP, MCP)
- Erosive hand OA: subchondral erosions, inflammation, poor prognosis
- Metabolic syndrome associated with OA independent of BMI
- Central sensitization explains pain-structure discordance in OA`,
    },
  },

  media: [
    {
      id: 'oa-joint-diagram',
      type: 'diagram',
      filename: 'oa-joint-changes.svg',
      title: 'Osteoarthritis Joint Pathology',
      description: 'Normal joint vs. OA joint showing cartilage loss, osteophytes, bone changes',
    },
    {
      id: 'oa-hand-xray',
      type: 'image',
      filename: 'oa-hand-xray.jpg',
      title: 'Hand OA X-ray',
      description: 'X-ray showing DIP joint narrowing, osteophytes, Heberden nodes',
    },
  ],
  citations: [
    {
      id: 'hunter-bierma-2019',
      type: 'article',
      title: 'Osteoarthritis',
      authors: ['Hunter DJ', 'Bierma-Zeinstra S'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(19)30417-9',
    },
    {
      id: 'acr-oa-2020',
      type: 'article',
      title: '2019 ACR/AF Guideline for the Management of Osteoarthritis',
      authors: ['Kolasinski SL', 'et al.'],
      source: 'Arthritis & Rheumatology',
      url: 'https://doi.org/10.1002/art.41142',
    },
  ],
  crossReferences: [
    { targetId: 'system-musculoskeletal', targetType: 'system', relationship: 'parent', label: 'Musculoskeletal System' },
    { targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
  ],
  tags: {
    systems: ['musculoskeletal'],
    topics: ['rheumatology', 'orthopedics', 'degenerative'],
    keywords: ['OA', 'osteoarthritis', 'degenerative joint disease', 'cartilage', 'arthritis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default osteoarthritisContent;
