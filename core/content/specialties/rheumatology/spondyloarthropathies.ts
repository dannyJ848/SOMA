import { EducationalContent } from '../../types';

export const spondyloarthropathiesContent: EducationalContent = {
  id: 'condition-spondyloarthropathies',
  type: 'condition',
  name: 'Spondyloarthropathies',
  alternateNames: ['Spondyloarthritis', 'SpA', 'Seronegative spondyloarthropathies'],
  hpoId: 'HP:0002829',

  levels: {
    1: {
      level: 1,
      summary: 'Spondyloarthropathies are a family of related conditions that cause inflammation mainly in the spine and joints where ligaments attach to bone.',
      explanation: `Spondyloarthropathies (or spondyloarthritis) are a group of conditions that share common features and often run in families.

**The SpA family includes:**
- Ankylosing spondylitis (spine inflammation)
- Psoriatic arthritis (arthritis with psoriasis skin disease)
- Reactive arthritis (arthritis triggered by infection)
- Arthritis associated with inflammatory bowel disease (Crohn's, ulcerative colitis)
- Undifferentiated spondyloarthritis

**What they have in common:**
- Inflammation of the spine and/or sacroiliac joints (where spine meets pelvis)
- Inflammation where tendons and ligaments attach to bone (enthesitis)
- Association with a gene called HLA-B27
- No rheumatoid factor in blood (hence "seronegative")
- Can affect eyes, skin, and bowel

**Main symptoms across the group:**
- Back pain that is worse in the morning and improves with movement
- Joint pain and swelling (often asymmetric, lower limbs)
- Heel pain (Achilles or under the foot)
- Swollen "sausage" fingers or toes
- Eye inflammation (red, painful eye)
- Skin rashes (psoriasis)

**Who is affected:**
- Often starts in young adulthood
- Runs in families
- HLA-B27 gene increases risk
- Males slightly more affected overall

**Treatment:**
- Anti-inflammatory medicines
- Physical therapy and exercise (very important)
- Biologic medicines for more severe disease
- Treating associated conditions (skin, bowel, eyes)`,
      keyTerms: [
        { term: 'spondyloarthropathy', definition: 'A family of conditions causing inflammation in the spine, joints, and where ligaments attach to bone', pronunciation: 'SPON-dil-oh-ar-THROP-ah-thee' },
        { term: 'seronegative', definition: 'The blood does not show rheumatoid factor antibody (unlike rheumatoid arthritis)' },
        { term: 'enthesis', definition: 'The place where a tendon or ligament attaches to bone', pronunciation: 'EN-thee-sis' },
        { term: 'HLA-B27', definition: 'A gene that increases the risk of developing spondyloarthritis' },
      ],
      analogies: [
        'Think of the SpA family like cousins - they share many traits (genes, features) but each has their own personality.',
        'Enthesitis is inflammation at the "anchor points" where ropes (tendons) attach to the dock (bone).',
      ],
      examples: [
        'A young man with back stiffness and psoriasis patches on his skin',
        'Someone who develops joint swelling weeks after a gastrointestinal infection',
        'A person with Crohn\'s disease who also has recurring back pain',
      ],
    },
    2: {
      level: 2,
      summary: 'Spondyloarthropathies are a group of inflammatory diseases sharing clinical features of axial/peripheral arthritis, enthesitis, dactylitis, and extra-articular manifestations, with strong HLA-B27 association and negative rheumatoid factor.',
      explanation: `The spondyloarthropathies represent a spectrum of related conditions unified by shared genetic associations, clinical features, and pathogenic mechanisms.

**Classification:**

*Traditional Categories:*
1. Ankylosing spondylitis (AS)
2. Psoriatic arthritis (PsA)
3. Reactive arthritis (ReA)
4. IBD-associated arthritis
5. Undifferentiated SpA
6. Juvenile SpA

*Modern ASAS Classification:*
- Axial spondyloarthritis (radiographic and non-radiographic)
- Peripheral spondyloarthritis

**Shared Features (ASAS Criteria):**

*SpA Features:*
- Inflammatory back pain
- Arthritis (peripheral)
- Enthesitis
- Uveitis
- Dactylitis
- Psoriasis
- Crohn's/colitis
- Good NSAID response
- Family history of SpA
- HLA-B27 positive
- Elevated CRP

**Individual Conditions:**

1. **Ankylosing Spondylitis:**
   - Primarily axial (spine, SI joints)
   - Progressive spinal fusion
   - HLA-B27 in 90-95%
   - Male predominance (though equal in non-radiographic)

2. **Psoriatic Arthritis:**
   - Arthritis + psoriasis
   - Five clinical patterns (DIP, asymmetric oligoarticular, symmetric polyarticular, axial, arthritis mutilans)
   - Dactylitis and nail involvement characteristic
   - HLA-B27 in 30-50% (especially axial)

3. **Reactive Arthritis:**
   - Triggered by GI or GU infection
   - Classic triad: arthritis, urethritis, conjunctivitis (not always complete)
   - Chlamydia trachomatis, Salmonella, Shigella, Yersinia, Campylobacter
   - Usually self-limited but can become chronic
   - HLA-B27 in 50-80%

4. **IBD-associated Arthritis:**
   - Peripheral (Type 1): Pauciarticular, parallels bowel activity
   - Peripheral (Type 2): Polyarticular, independent of bowel
   - Axial: Independent of bowel activity, like AS
   - HLA-B27 in axial form

**Key Differentiating Features:**

*From Rheumatoid Arthritis:*
- Seronegative (RF and anti-CCP negative)
- Asymmetric joint involvement
- Spine involvement
- Enthesitis
- Different joint pattern (DIP in PsA, spares in RA)

**Diagnosis:**
- Clinical assessment (SpA features)
- HLA-B27 testing
- Imaging: X-ray and MRI of SI joints/spine
- Inflammatory markers (may be normal)
- Consider triggering infections (reactive arthritis)

**Treatment Principles:**
- NSAIDs: First-line for all
- Conventional DMARDs: Peripheral disease (MTX, SSZ, LEF)
- Biologics: TNF inhibitors, IL-17 inhibitors, IL-12/23 inhibitors
- Physical therapy: Essential for axial disease`,
      keyTerms: [
        { term: 'dactylitis', definition: 'Diffuse swelling of an entire digit ("sausage finger/toe"), characteristic of SpA', pronunciation: 'dak-til-EYE-tis' },
        { term: 'reactive arthritis', definition: 'Sterile inflammatory arthritis triggered by infection elsewhere (usually GI or GU)' },
        { term: 'ASAS', definition: 'Assessment of SpondyloArthritis international Society; developed classification criteria' },
        { term: 'axial SpA', definition: 'Spondyloarthritis predominantly affecting the spine and sacroiliac joints' },
        { term: 'peripheral SpA', definition: 'Spondyloarthritis predominantly affecting limb joints, entheses, or dactylitis' },
      ],
      analogies: [
        'The SpA family is like a Venn diagram with overlapping circles - each condition has unique features but they share common ground.',
        'Dactylitis makes the finger or toe look like a sausage because the whole digit is inflamed, not just the joint.',
      ],
    },
    3: {
      level: 3,
      summary: 'Spondyloarthropathies share IL-23/IL-17 pathway-driven inflammation at entheses and synovium, HLA-B27 association, and clinical features of axial arthritis, peripheral arthritis, enthesitis, dactylitis, and extra-articular manifestations, classified as axial or peripheral SpA with specific treatment implications.',
      explanation: `The spondyloarthropathies represent a unified disease concept with shared pathogenic mechanisms and overlapping clinical features.

**Unifying Pathogenic Concepts:**

1. **Enthesitis as Central Feature:**
   - Enthesis is "ground zero" for SpA
   - Mechanical stress triggers inflammation
   - Resident immune cells (ILCs, gamma-delta T cells)
   - IL-17, IL-22 production
   - Microtrauma hypothesis

2. **IL-23/IL-17 Axis:**
   - Central cytokine pathway in all SpA
   - IL-23 from dendritic cells, macrophages
   - IL-17 from Th17, ILC3, gamma-delta T cells
   - Drives inflammation and bone remodeling
   - Therapeutic target

3. **HLA-B27:**
   - Variable association across SpA
   - AS: 90-95%
   - Reactive arthritis: 50-80%
   - PsA axial: 30-50%
   - IBD axial: 50-75%
   - Multiple proposed mechanisms

**ASAS Classification Criteria:**

*Axial SpA:*
- Back pain ≥3 months, age onset <45 years, plus:
- Imaging arm: Sacroiliitis on imaging + ≥1 SpA feature, OR
- Clinical arm: HLA-B27 + ≥2 other SpA features

*Peripheral SpA:*
- Arthritis or enthesitis or dactylitis, plus:
- ≥1 of: Uveitis, psoriasis, IBD, preceding infection, HLA-B27, sacroiliitis on imaging, OR
- ≥2 of: Arthritis, enthesitis, dactylitis, IBP history, family SpA history

**Specific Conditions:**

*Psoriatic Arthritis:*

Clinical Patterns (Moll and Wright):
1. Asymmetric oligoarticular (most common initially)
2. Symmetric polyarticular (RA-like)
3. DIP predominant
4. Spondylitis-predominant
5. Arthritis mutilans (severe destructive)

CASPAR Criteria:
- Inflammatory arthritis + ≥3 points:
- Psoriasis (current 2 pts, history 1 pt, family 1 pt)
- Nail dystrophy (1 pt)
- Dactylitis (1 pt)
- Negative RF (1 pt)
- Juxta-articular new bone on X-ray (1 pt)

Treatment:
- csDMARDs: MTX, leflunomide (peripheral)
- TNFi: Axial and peripheral
- IL-17i: Axial and peripheral
- IL-12/23i, IL-23i: Peripheral (not axial)
- JAKi: Peripheral and axial
- PDE4i (apremilast): Peripheral

*Reactive Arthritis:*

Triggering Organisms:
- GU: Chlamydia trachomatis
- GI: Salmonella, Shigella, Yersinia, Campylobacter, C. difficile

Clinical Features:
- Onset 1-4 weeks after infection
- Asymmetric oligoarthritis (lower limbs)
- Enthesitis, dactylitis
- Mucocutaneous: Keratoderma blennorrhagicum, circinate balanitis
- Conjunctivitis (not uveitis usually)

Course:
- 60-80% remit within 6 months
- 15-30% develop chronic arthritis
- Chlamydia-triggered more likely chronic
- HLA-B27+ associated with chronicity

Treatment:
- Treat triggering infection (especially Chlamydia)
- NSAIDs
- Intra-articular steroids
- DMARDs if chronic (sulfasalazine)
- Biologics rarely needed

*IBD-Associated Arthritis:*

Types:
- Type 1 peripheral: Pauciarticular, large joints, parallels IBD activity
- Type 2 peripheral: Polyarticular, small joints, independent of IBD
- Axial: AS-like, independent of IBD activity

Treatment Considerations:
- Treat underlying IBD
- Sulfasalazine for peripheral
- TNF monoclonals for axial (infliximab, adalimumab)
- Avoid IL-17 inhibitors (worsen IBD)
- NSAIDs use with caution (may flare IBD)

**Treatment Algorithm:**

Axial SpA:
1. NSAIDs (2 attempts, full dose)
2. TNFi or IL-17i
3. Switch mechanism if failure
4. JAKi as alternative
5. csDMARDs NOT effective

Peripheral SpA:
1. NSAIDs, local corticosteroids
2. csDMARDs (MTX, SSZ, LEF) for persistent peripheral arthritis
3. bDMARDs/tsDMARDs if inadequate response
4. Choice depends on associated features (skin, IBD)`,
      keyTerms: [
        { term: 'CASPAR criteria', definition: 'Classification criteria for Psoriatic Arthritis, emphasizing psoriasis, nail changes, dactylitis, RF negativity, and new bone formation' },
        { term: 'keratoderma blennorrhagicum', definition: 'Hyperkeratotic skin lesions on palms/soles in reactive arthritis, histologically identical to pustular psoriasis' },
        { term: 'arthritis mutilans', definition: 'Severe destructive arthropathy with bone resorption and "telescoping" digits; occurs in PsA', pronunciation: 'moo-tih-LANZ' },
        { term: 'circinate balanitis', definition: 'Painless, serpiginous ulcers on the glans penis in reactive arthritis' },
        { term: 'pencil-in-cup deformity', definition: 'Radiographic finding in PsA showing bone erosion with widened joint space resembling pencil in cup' },
      ],
      clinicalNotes: 'DIP joint involvement is characteristic of PsA and OA, but NOT RA. IL-17 inhibitors effective for axial and peripheral SpA but avoid in IBD. IL-12/23 and IL-23 inhibitors work well for peripheral PsA and psoriasis but NOT for axial disease. Reactive arthritis from Chlamydia - treat patient AND partners.',
    },
    4: {
      level: 4,
      summary: 'Spondyloarthropathies share entheseal-centric pathogenesis with IL-23/IL-17 axis activation, HLA-B27-mediated immune dysregulation, and Wnt-driven new bone formation, with therapeutic targeting differentiated by axial vs. peripheral predominance and extra-articular manifestation profile.',
      explanation: `**Unified Pathogenic Model:**

1. **Enthesis as Immunological Niche:**

   *Anatomical Considerations:*
   - Entheses are fibrocartilaginous structures
   - High mechanical stress concentration
   - Resident immune cells (not normally present elsewhere)
   - ILC3, gamma-delta T cells at entheses
   - Proximity to bone marrow

   *Mechanobiology:*
   - Mechanical stress triggers innate response
   - PGE2 release, danger signals
   - Resident immune cell activation
   - IL-17, IL-22 production locally
   - "Stress-responsive tissue" concept

2. **IL-23/IL-17 Axis Centrality:**

   *Cellular Sources:*
   - IL-23: Dendritic cells, macrophages
   - IL-17: ILC3, gamma-delta T, MAIT, Th17 cells
   - IL-22: Similar sources, often co-produced

   *Downstream Effects:*
   - Neutrophil recruitment
   - MMP production, tissue damage
   - Osteoclast activation (bone erosion)
   - Osteoblast activation (new bone formation)
   - Synergism with TNF

   *Therapeutic Relevance:*
   - IL-17i effective across SpA
   - IL-23i effective for peripheral but NOT axial
   - Suggests different cytokine dependencies

3. **HLA-B27 Across SpA Spectrum:**

   *Mechanism Hypotheses:*
   - Arthritogenic peptide presentation
   - Misfolded HLA-B27 triggering UPR
   - Surface homodimers engaging KIR3DL2
   - Altering gut microbiome

   *Disease-Specific Associations:*
   - Strongest in axial disease
   - Less strong in peripheral PsA
   - Predicts axial involvement in any SpA

4. **Gut-Joint Axis:**

   *Subclinical Gut Inflammation:*
   - Present in 50%+ of SpA patients
   - Even without IBD symptoms
   - Histologically resembles early Crohn's
   - Shared IL-23/IL-17 biology

   *Microbiome Dysbiosis:*
   - Altered gut bacteria in SpA
   - Potential disease trigger
   - Shared with IBD
   - Therapeutic target (theoretically)

**Psoriatic Arthritis Deep Dive:**

*Pathogenesis:*
- IL-23/IL-17 axis central
- TNF contribution significant
- CD8+ T cells in joints
- Synovial-entheseal complex involvement
- Skin and nail disease share pathways

*Distinctions from RA:*
- Enthesis involvement prominent
- DIP joints affected
- New bone formation occurs
- Dactylitis mechanism (flexor tenosynovitis)
- Different HLA associations (B27, Cw6)

*Treatment Positioning:*

| Drug Class | Skin | Peripheral | Axial | Enthesitis | Dactylitis |
|------------|------|------------|-------|------------|------------|
| MTX | Moderate | Moderate | No | Limited | Limited |
| TNFi | Good | Good | Good | Good | Good |
| IL-17i | Excellent | Good | Good | Good | Good |
| IL-23i | Excellent | Good | No | Good | Good |
| JAKi | Good | Good | Good | Good | Good |
| PDE4i | Moderate | Moderate | No | Moderate | Moderate |

*Head-to-Head Trials:*
- SPIRIT-H2H: Ixekizumab vs adalimumab (IL-17i better for skin)
- EXCEED: Secukinumab vs adalimumab (similar overall)

**Reactive Arthritis Mechanisms:**

*Pathogenesis:*
- Molecular mimicry between bacterial and self-antigens
- Persistence of bacterial antigens in joints
- Chlamydia DNA/RNA detected in joints
- HLA-B27 may present bacterial peptides

*Why HLA-B27 Predisposes:*
- Slower bacterial clearance
- Enhanced presentation of bacterial antigens
- Cross-reactive T cell responses
- Prolonged inflammatory response

**IBD-Arthritis Mechanistic Links:**

*Shared Pathways:*
- IL-23/IL-17 axis
- Gut barrier dysfunction
- Bacterial translocation
- Identical TNF biology

*Treatment Paradox:*
- IL-17i contraindicated in IBD (worsens it)
- Yet IL-17 elevated in IBD
- Suggests IL-17 may be protective in gut
- TNF monoclonals work for both

**New Bone Formation (Across SpA):**

*Mechanism:*
- Follows resolution of inflammation
- Wnt signaling activation
- BMP pathway involvement
- MSCs differentiate to osteoblasts
- Endochondral ossification

*Clinical Implications:*
- Anti-inflammatory therapy controls symptoms
- Effect on new bone formation less clear
- Possible uncoupling of processes
- Early treatment may prevent`,
      keyTerms: [
        { term: 'ILC3', definition: 'Type 3 innate lymphoid cells; tissue-resident cells at entheses and gut producing IL-17 and IL-22' },
        { term: 'MAIT cells', definition: 'Mucosal-associated invariant T cells; abundant at mucosal surfaces, respond to bacterial metabolites, produce IL-17' },
        { term: 'synovial-entheseal complex', definition: 'Anatomical concept that synovium and enthesis are functionally connected, particularly in small joints' },
        { term: 'molecular mimicry', definition: 'Similarity between microbial and self-antigens leading to cross-reactive immune responses' },
        { term: 'pencil-in-cup', definition: 'Radiographic appearance in arthritis mutilans with severe bone erosion of one bone end and expansion of the opposing end' },
      ],
      clinicalNotes: 'IL-23 inhibitors (guselkumab, risankizumab) excellent for skin and peripheral PsA but do NOT work for axial disease - important prescribing consideration. This paradox suggests axial and peripheral SpA may have different cytokine dependencies despite shared features.',
    },
    5: {
      level: 5,
      summary: 'Spondyloarthropathies represent a unified disease concept of entheseal-centric IL-23/IL-17-driven inflammation modulated by HLA-B27 and the gut-joint axis, with precision medicine differentiating axial from peripheral disease, informing pathway-specific biologic selection based on dominant clinical domain and extra-articular manifestations.',
      explanation: `**Precision Medicine Framework for SpA:**

1. **Disease Domain Assessment:**

   *Clinical Domains:*
   - Axial: Spine, sacroiliac joints
   - Peripheral arthritis: Joints
   - Enthesitis: Achilles, plantar fascia, etc.
   - Dactylitis: Whole digit involvement
   - Skin: Psoriasis
   - Nail: Psoriatic nail disease
   - Eye: Uveitis
   - Gut: IBD

   *Treatment Matching:*
   - Each domain may require different treatment
   - Biologics vary in efficacy across domains
   - Personalized approach based on dominant domains

2. **Biologic Selection by Mechanism:**

   *TNF Inhibitors:*
   - Effective across most domains
   - Best evidence for uveitis (monoclonals)
   - Effective for IBD (infliximab, adalimumab, golimumab)
   - First-line for axial SpA in many guidelines

   *IL-17 Inhibitors:*
   - Excellent for skin
   - Good for axial and peripheral
   - May worsen IBD (contraindicated)
   - Candida infection risk

   *IL-23 Inhibitors:*
   - Excellent for skin
   - Good for peripheral arthritis, enthesitis, dactylitis
   - NOT effective for axial disease (key limitation)
   - Safe in IBD

   *IL-12/23 Inhibitor (Ustekinumab):*
   - Good for skin
   - Moderate for peripheral
   - Limited axial efficacy
   - Approved for Crohn's

   *JAK Inhibitors:*
   - Broad efficacy profile
   - Axial and peripheral
   - Skin moderate
   - Oral advantage
   - Safety considerations (CV, VTE, malignancy warnings)

3. **Genetic and Biomarker Stratification:**

   *HLA-B27 Status:*
   - Predicts axial involvement
   - May influence treatment response (limited data)
   - Prognostic implications

   *Inflammatory Markers:*
   - CRP elevation predicts radiographic progression
   - May predict biologic response
   - MRI inflammation predicts structural benefit

   *Emerging Biomarkers:*
   - Serum calprotectin
   - Specific cytokine profiles
   - Gene expression signatures
   - Microbiome profiles

4. **Treatment Strategies:**

   *Axial-Predominant SpA:*
   1. NSAIDs (minimum 2 trials)
   2. TNFi or IL-17i (first-line biologics)
   3. If inadequate: Switch mechanism or JAKi
   4. csDMARDs: NOT effective for axial

   *Peripheral-Predominant PsA:*
   1. NSAIDs, local steroids
   2. csDMARDs (MTX preferred if psoriasis)
   3. bDMARDs: TNFi, IL-17i, IL-23i, IL-12/23i
   4. tsDMARDs: JAKi, apremilast

   *Domain-Specific Considerations:*
   - Uveitis: TNF monoclonal antibody
   - IBD: TNF monoclonal, avoid IL-17i
   - Severe psoriasis: IL-17i, IL-23i may be preferred
   - Axial with peripheral: TNFi or IL-17i covers both

5. **Axial vs. Peripheral SpA Dichotomy:**

   *Why IL-23i Fails in Axial Disease:*
   - Different cytokine dependencies
   - Entheseal IL-17 may be IL-23-independent
   - ILC3 at entheses produce IL-17 without IL-23
   - Gamma-delta T cells IL-17 not IL-23 dependent

   *Implications:*
   - Axial SpA may be fundamentally different
   - Need for axial-specific biomarkers
   - Treatment selection must consider predominant involvement

6. **Comorbidity Management:**

   *Cardiovascular:*
   - Increased CV risk in all SpA
   - Treat inflammation (may reduce risk)
   - Screen and manage traditional risk factors
   - NSAIDs: Use with caution, CV risk

   *Metabolic:*
   - Obesity common in PsA
   - Affects treatment response
   - Weight loss improves outcomes
   - Metabolic syndrome associations

   *Psychological:*
   - Depression, anxiety common
   - Pain, fatigue, disability contribute
   - Screening and treatment important

7. **Emerging Therapies:**

   *Bimekizumab:*
   - Dual IL-17A and IL-17F inhibitor
   - Superior skin clearance vs IL-17A alone
   - Axial and peripheral efficacy
   - Recently approved

   *Novel IL-23 Inhibitors:*
   - Guselkumab, risankizumab, tildrakizumab
   - Peripheral SpA efficacy
   - Axial SpA trials negative

   *JAK Inhibitor Expansion:*
   - Upadacitinib: AS, PsA approved
   - Tofacitinib: AS, PsA approved
   - Others in development

   *Other Targets:*
   - GM-CSF inhibitors
   - TYK2 inhibitors (deucravacitinib)
   - RIPK1 inhibitors
   - Microbiome modulation

8. **Treat-to-Target in SpA:**

   *Emerging Concept:*
   - Define target (remission or low disease activity)
   - Measure regularly with validated tools
   - Adjust therapy until target achieved

   *Outcome Measures:*
   - Axial: ASDAS, BASDAI
   - PsA: MDA (minimal disease activity), DAPSA
   - Composite measures covering multiple domains

   *Challenges:*
   - Multiple domains to assess
   - No single target encompasses all
   - Patient preferences vary`,
      keyTerms: [
        { term: 'MDA', definition: 'Minimal disease activity; composite outcome measure for PsA covering joints, entheses, skin, pain, function' },
        { term: 'DAPSA', definition: 'Disease Activity in PSoriatic Arthritis; measures joint inflammation specifically' },
        { term: 'bimekizumab', definition: 'Biologic that blocks both IL-17A and IL-17F; recently approved for SpA' },
        { term: 'domain-based treatment', definition: 'Treatment selection based on which clinical domains (axial, peripheral, skin, etc.) are most affected' },
        { term: 'TYK2 inhibitor', definition: 'Selective JAK family inhibitor with potentially improved safety profile; deucravacitinib being studied in SpA' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- SpA family shares HLA-B27 association, enthesitis, axial involvement, extra-articular features
- IL-23 inhibitors work for peripheral PsA and psoriasis but NOT axial SpA - key exam point
- IL-17 inhibitors work for axial and peripheral but AVOID in IBD
- TNF monoclonals (not etanercept) preferred if uveitis or IBD coexist
- DIP joint involvement distinguishes PsA (and OA) from RA
- Reactive arthritis: Classic triad = arthritis + urethritis + conjunctivitis (but often incomplete)
- Reactive arthritis triggers: Chlamydia (GU), Salmonella/Shigella/Yersinia/Campylobacter (GI)
- IBD arthritis Type 1 (oligoarticular) parallels gut activity; Type 2 (polyarticular) and axial are independent
- New bone formation in SpA distinct from RA erosions - syndesmophytes, enthesophytes
- Pencil-in-cup deformity and arthritis mutilans are severe PsA manifestations`,
    },
  },

  media: [
    {
      id: 'spa-classification',
      type: 'diagram',
      filename: 'spa-classification-diagram.svg',
      title: 'SpA Classification',
      description: 'Diagram showing relationship between SpA subtypes and classification as axial vs peripheral',
    },
    {
      id: 'psa-patterns',
      type: 'diagram',
      filename: 'psa-patterns.svg',
      title: 'Psoriatic Arthritis Clinical Patterns',
      description: 'The five clinical patterns of psoriatic arthritis (Moll and Wright)',
    },
    {
      id: 'dactylitis',
      type: 'image',
      filename: 'dactylitis-sausage-digit.jpg',
      title: 'Dactylitis',
      description: 'Sausage digit with diffuse swelling of entire finger',
    },
  ],
  citations: [
    {
      id: 'ritchlin-2017',
      type: 'article',
      title: 'Psoriatic Arthritis',
      authors: ['Ritchlin CT', 'Colbert RA', 'Gladman DD'],
      source: 'New England Journal of Medicine',
      url: 'https://doi.org/10.1056/NEJMra1505557',
    },
    {
      id: 'sieper-2017',
      type: 'article',
      title: 'Axial Spondyloarthritis',
      authors: ['Sieper J', 'Poddubnyy D'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(16)31591-4',
    },
  ],
  crossReferences: [
    { targetId: 'condition-ankylosing-spondylitis', targetType: 'condition', relationship: 'child', label: 'Ankylosing Spondylitis' },
    { targetId: 'condition-psoriatic-arthritis', targetType: 'condition', relationship: 'child', label: 'Psoriatic Arthritis' },
    { targetId: 'concept-biologics', targetType: 'concept', relationship: 'related', label: 'Biologic Therapies' },
    { targetId: 'system-musculoskeletal', targetType: 'system', relationship: 'parent', label: 'Musculoskeletal System' },
  ],
  tags: {
    systems: ['musculoskeletal', 'immune', 'dermatologic', 'gastrointestinal'],
    topics: ['rheumatology', 'spondyloarthritis', 'autoimmune', 'immunology'],
    keywords: ['spondyloarthritis', 'SpA', 'HLA-B27', 'enthesitis', 'psoriatic arthritis', 'reactive arthritis', 'IBD arthritis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spondyloarthropathiesContent;
