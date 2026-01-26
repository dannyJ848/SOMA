import { EducationalContent } from '../../types';

export const rheumatoidArthritisContent: EducationalContent = {
  id: 'condition-rheumatoid-arthritis',
  type: 'condition',
  name: 'Rheumatoid Arthritis',
  alternateNames: ['RA', 'Rheumatoid disease', 'Inflammatory polyarthritis'],
  hpoId: 'HP:0001370',

  levels: {
    1: {
      level: 1,
      summary: 'Rheumatoid arthritis is when your body\'s defense system accidentally attacks your joints, causing pain and swelling.',
      explanation: `Imagine your body has an army of tiny soldiers (immune cells) that normally protect you from germs. In rheumatoid arthritis, these soldiers get confused and start attacking your own joints instead.

**What happens:**
- Your joints become swollen, warm, and painful
- It usually affects the same joints on both sides of your body (like both hands)
- Morning stiffness that lasts more than an hour
- You might feel tired and unwell

**Which joints are affected:**
- Small joints in hands and fingers
- Wrists
- Feet and toes
- Can spread to bigger joints like knees and elbows

**Why it matters:**
If left untreated, the inflammation can damage the joints over time. But with modern medicines, most people can control their symptoms and prevent damage.

**Good news:**
Doctors now have many powerful medicines that can stop the attack on your joints and help you feel much better.`,
      keyTerms: [
        { term: 'immune system', definition: 'Your body\'s defense army that normally fights germs' },
        { term: 'inflammation', definition: 'Swelling, redness, and pain - signs your body is reacting to something' },
        { term: 'joints', definition: 'The places where two bones meet and let you move, like your knuckles' },
        { term: 'autoimmune', definition: 'When your immune system attacks your own body by mistake' },
      ],
      analogies: [
        'RA is like friendly fire - your body\'s defense soldiers accidentally attack your own joints instead of germs.',
        'Think of a joint like a door hinge. In RA, the hinge gets rusty and swollen, making it hard to open and close smoothly.',
      ],
      examples: [
        'Waking up with stiff fingers that take an hour to loosen up',
        'Both wrists hurting at the same time',
        'Feeling exhausted along with joint pain',
      ],
    },
    2: {
      level: 2,
      summary: 'Rheumatoid arthritis is a chronic autoimmune disease causing symmetric inflammatory polyarthritis, primarily affecting the small joints of the hands and feet.',
      explanation: `Rheumatoid arthritis (RA) is the most common inflammatory arthritis, affecting about 1% of adults worldwide, with women affected 2-3 times more often than men.

**Disease Mechanism:**
- The immune system mistakenly attacks the synovium (joint lining)
- This causes inflammation, swelling, and pain
- Chronic inflammation leads to joint damage
- Affects multiple joints symmetrically

**Classic Presentation:**
1. **Joint symptoms:**
   - Symmetric polyarthritis (same joints on both sides)
   - Small joints: MCP, PIP, wrists, MTP joints
   - Morning stiffness lasting >1 hour
   - Warm, swollen, tender joints

2. **Systemic symptoms:**
   - Fatigue
   - Low-grade fever
   - Weight loss
   - General malaise

**Joints typically affected:**
- Hands: MCP (knuckles) and PIP (middle finger joints)
- Wrists
- Feet: MTP joints
- Later: elbows, shoulders, knees, ankles

**Joints typically spared:**
- DIP joints (fingertips) - these are affected in osteoarthritis
- Lower spine

**Diagnosis:**
- Blood tests: RF (rheumatoid factor), anti-CCP antibodies
- Inflammatory markers: ESR, CRP
- X-rays or ultrasound to check for joint damage
- Clinical examination

**Treatment goals:**
- Control symptoms
- Prevent joint damage
- Maintain function
- Improve quality of life`,
      keyTerms: [
        { term: 'synovium', definition: 'The thin tissue lining inside joints that produces lubricating fluid', pronunciation: 'sih-NO-vee-um' },
        { term: 'polyarthritis', definition: 'Inflammation affecting five or more joints', pronunciation: 'pol-ee-ar-THRY-tis' },
        { term: 'MCP joint', definition: 'Metacarpophalangeal joint - the knuckle where fingers meet the hand', pronunciation: 'MCP' },
        { term: 'rheumatoid factor', definition: 'An antibody found in the blood of many RA patients', pronunciation: 'ROO-mah-toyd' },
        { term: 'anti-CCP', definition: 'Anti-cyclic citrullinated peptide antibodies - a more specific test for RA' },
      ],
      analogies: [
        'The synovium in RA becomes like an invasive weed, growing where it shouldn\'t and causing damage to surrounding structures.',
        'RA is like an ongoing fire in your joints - treatment aims to put out the fire before it causes permanent damage.',
      ],
    },
    3: {
      level: 3,
      summary: 'Rheumatoid arthritis is a systemic autoimmune disease characterized by symmetric inflammatory synovitis, driven by autoreactive T cells and autoantibodies, leading to pannus formation and joint destruction.',
      explanation: `Rheumatoid arthritis represents a complex interaction between genetic susceptibility, environmental triggers, and immune dysregulation.

**Pathophysiology:**

1. **Initiation Phase:**
   - Genetic predisposition (HLA-DR4, HLA-DR1 - "shared epitope")
   - Environmental triggers (smoking, infections, microbiome changes)
   - Loss of tolerance to self-antigens
   - Citrullination of proteins (PAD enzyme activation)

2. **Inflammation Phase:**
   - CD4+ T helper cells recognize citrullinated peptides
   - B cell activation producing autoantibodies (RF, ACPA)
   - Macrophage activation releasing TNF-alpha, IL-1, IL-6
   - Synovial fibroblast proliferation
   - Angiogenesis in synovium

3. **Destruction Phase:**
   - Pannus formation (invasive granulation tissue)
   - Osteoclast activation causing bone erosions
   - Cartilage degradation by MMPs
   - Tendon and ligament damage

**Clinical Features:**

*Articular:*
- Symmetric inflammatory polyarthritis
- MCP, PIP, wrist, MTP involvement
- Morning stiffness >1 hour
- Joint effusions
- Late: subluxation, deformities (ulnar deviation, swan neck, boutonniere)

*Extra-articular manifestations (15-25%):*
- Rheumatoid nodules (elbows, fingers, lungs)
- Pulmonary: ILD, nodules, pleuritis
- Cardiovascular: accelerated atherosclerosis, pericarditis
- Ocular: scleritis, episcleritis
- Felty syndrome: RA + splenomegaly + neutropenia
- Vasculitis

**Laboratory Findings:**
- RF positive in 70-80%
- Anti-CCP (ACPA) positive in 60-70%, more specific
- Elevated ESR and CRP
- Normocytic anemia of chronic disease
- Thrombocytosis

**Imaging:**
- X-rays: periarticular osteopenia, joint space narrowing, erosions
- Ultrasound: synovitis, power Doppler activity
- MRI: bone marrow edema predicts erosions

**2010 ACR/EULAR Classification Criteria:**
Score ≥6 needed for diagnosis, based on:
- Joint involvement (0-5 points)
- Serology: RF/ACPA (0-3 points)
- Acute phase reactants: ESR/CRP (0-1 point)
- Duration ≥6 weeks (0-1 point)`,
      keyTerms: [
        { term: 'pannus', definition: 'Abnormal layer of inflammatory granulation tissue that grows over joint surfaces and erodes cartilage and bone', pronunciation: 'PAN-us' },
        { term: 'citrullination', definition: 'Post-translational modification of arginine residues to citrulline, creating neoantigens in RA', pronunciation: 'sih-TROO-lin-ay-shun' },
        { term: 'shared epitope', definition: 'Common amino acid sequence in HLA-DR molecules associated with RA susceptibility' },
        { term: 'ACPA', definition: 'Anti-citrullinated protein antibodies, highly specific for RA and associated with erosive disease' },
        { term: 'synovitis', definition: 'Inflammation of the synovial membrane lining joints', pronunciation: 'sin-oh-VY-tis' },
      ],
      clinicalNotes: 'Anti-CCP positive RA has higher risk of erosive disease. Smoking cessation is crucial as it worsens disease and reduces treatment efficacy. Early aggressive treatment ("treat-to-target") improves outcomes.',
    },
    4: {
      level: 4,
      summary: 'Rheumatoid arthritis pathogenesis involves breach of tolerance to citrullinated self-antigens, HLA class II-restricted T cell activation, germinal center formation in synovium, and cytokine-driven joint destruction mediated by pannus invasion.',
      explanation: `**Detailed Immunopathogenesis:**

1. **Pre-clinical Phase (ACPA+ arthralgia):**
   - Mucosal origins hypothesis: oral/lung microbiome dysbiosis
   - P. gingivalis expresses PAD enzyme
   - Smoking induces lung citrullination
   - ACPA development precedes symptoms by years
   - Epitope spreading occurs before clinical disease

2. **Genetic Architecture:**
   - HLA-DRB1 shared epitope: accounts for 30-50% of genetic risk
   - Non-HLA genes: PTPN22, STAT4, CTLA4, TRAF1, CCR6
   - Gene-environment interaction: smoking + shared epitope = 40x risk

3. **Cellular Immunology:**

   *T cells:*
   - CD4+ Th1/Th17 cells predominate in synovium
   - Recognize citrullinated peptides on HLA-DR
   - Produce IFN-gamma, IL-17, IL-21
   - Tfh cells drive B cell responses
   - Treg dysfunction/imbalance

   *B cells:*
   - Ectopic lymphoid structures in synovium
   - ACPA-producing plasma cells
   - Antigen presentation to T cells
   - Production of inflammatory cytokines
   - Memory B cell reservoirs

   *Macrophages:*
   - Major source of TNF-alpha, IL-1beta, IL-6
   - M1 polarization predominates
   - Osteoclast precursors
   - Produce matrix metalloproteinases

   *Fibroblast-like synoviocytes (FLS):*
   - Tumor-like behavior: invasive, resistant to apoptosis
   - Produce MMPs, ADAMTSs
   - Express adhesion molecules
   - Perpetuate inflammation autonomously

4. **Cytokine Networks:**
   - TNF-alpha: master regulator, drives inflammation and erosions
   - IL-6: acute phase response, B cell activation, osteoclastogenesis
   - IL-1: cartilage destruction, fever
   - IL-17: osteoclast activation, neutrophil recruitment
   - GM-CSF: macrophage activation
   - RANKL: osteoclast differentiation

5. **Joint Destruction Mechanisms:**
   - Pannus-cartilage interface invasion
   - MMP-1, MMP-3, MMP-13 degrade collagen
   - ADAMTS-4, ADAMTS-5 degrade aggrecan
   - RANKL-RANK signaling activates osteoclasts
   - Bone erosions at bare areas (cartilage-bone junction)
   - Osteoprotegerin (OPG) is protective

**Clinical Phenotypes:**

1. **Seropositive RA:**
   - RF+ and/or ACPA+
   - More erosive disease
   - Extra-articular manifestations
   - Associated with shared epitope

2. **Seronegative RA:**
   - RF- and ACPA-
   - Often less severe
   - Must exclude other diagnoses
   - May still develop erosions

3. **Early RA (<6 months):**
   - Window of opportunity for treatment
   - More responsive to therapy
   - May achieve drug-free remission

4. **Established/Erosive RA:**
   - Structural damage present
   - Harder to achieve remission
   - Focus on preventing progression

**Disease Activity Assessment:**
- DAS28 (Disease Activity Score): ESR/CRP + swollen/tender joints + patient global
- CDAI (Clinical Disease Activity Index)
- SDAI (Simplified Disease Activity Index)
- Remission: DAS28 <2.6, CDAI ≤2.8, SDAI ≤3.3

**Prognostic Factors for Erosive Disease:**
- ACPA positivity (strongest)
- High RF titers
- Shared epitope
- Early erosions on imaging
- High disease activity
- Smoking`,
      keyTerms: [
        { term: 'fibroblast-like synoviocytes', definition: 'Resident mesenchymal cells of the synovium that acquire invasive, tumor-like properties in RA', pronunciation: 'FLS' },
        { term: 'RANKL', definition: 'Receptor activator of nuclear factor kappa-B ligand; cytokine essential for osteoclast formation', pronunciation: 'RANK-ligand' },
        { term: 'DAS28', definition: 'Disease Activity Score using 28 joints; composite measure for monitoring RA activity', pronunciation: 'dass-twenty-eight' },
        { term: 'ectopic lymphoid structures', definition: 'Organized lymphoid tissue forming in non-lymphoid sites like RA synovium' },
        { term: 'epitope spreading', definition: 'Progressive expansion of autoimmune response to additional self-antigens over time' },
      ],
      clinicalNotes: 'The "window of opportunity" in early RA (<3-6 months) offers best chance for remission. Treat-to-target strategy with DAS28 <2.6 goal improves outcomes. B cell depletion (rituximab) effective in ACPA+ patients suggests B cells are central to pathogenesis.',
    },
    5: {
      level: 5,
      summary: 'Rheumatoid arthritis represents a breach in peripheral tolerance to citrullinated proteins, with disease pathogenesis involving HLA-peptide-TCR interactions, germinal center reactions in synovium, and cytokine/osteoclast-mediated joint destruction, informing therapeutic targeting of TNF, IL-6, T cell costimulation, B cells, and JAK-STAT signaling.',
      explanation: `**Advanced Immunopathogenesis:**

1. **Mucosal Origins and Preclinical RA:**

   *Oral Microbiome:*
   - Porphyromonas gingivalis expresses PAD (PPAD)
   - Aggregatibacter actinomycetemcomitans induces hypercitrullination
   - Periodontal disease epidemiologically linked to RA
   - ACPA cross-react with citrullinated bacterial proteins

   *Lung Involvement:*
   - Smoking induces pulmonary citrullination
   - Bronchoalveolar lavage shows ACPA in at-risk individuals
   - ILD may precede articular disease
   - Inhalational exposures (silica) increase risk

   *Gut Microbiome:*
   - Prevotella copri expansion in early RA
   - Altered microbiome diversity
   - Potential role in systemic inflammation

2. **Molecular Mechanisms of Autoimmunity:**

   *Citrullination Biology:*
   - PAD2 and PAD4 expressed in inflamed synovium
   - Substrates: fibrinogen, vimentin, alpha-enolase, histones
   - NETosis releases citrullinated histones
   - Calcium-dependent enzyme activation

   *HLA-Peptide-TCR Interaction:*
   - Shared epitope (positions 70-74) binds citrullinated peptides
   - Position 11 variation affects peptide binding
   - Non-shared epitope alleles can be protective (DERAA)
   - CD4+ T cells recognize cit-vimentin, cit-fibrinogen

   *B Cell Immunology:*
   - ACPA undergo affinity maturation
   - IgG, IgA, and IgM isotypes present
   - Glycosylation pattern affects pathogenicity
   - Fc sialylation inversely correlates with disease activity
   - ACPA directly activate osteoclasts via surface citrullinated proteins

3. **Synovial Pathology Subtypes:**

   *Lymphoid:*
   - Ectopic germinal centers
   - T-B cell aggregates with FDC networks
   - Associated with ACPA production
   - May predict response to B cell depletion

   *Myeloid:*
   - Macrophage-rich infiltrates
   - High TNF, IL-6 expression
   - May respond better to TNF inhibition

   *Fibroid:*
   - Pauci-immune
   - Fibroblast hyperplasia
   - Poor response to biologics
   - May need different therapeutic approach

4. **Resolution and Remission:**

   *Sustained Remission:*
   - Requires synovial inflammation resolution
   - Residual subclinical synovitis on imaging predicts flare
   - Molecular remission vs clinical remission
   - FLS epigenetic reprogramming may persist

   *Drug-Free Remission:*
   - Achievable in 10-20% of early RA
   - More likely in ACPA-negative disease
   - Short symptom duration favorable
   - Aggressive initial treatment important

5. **Precision Medicine Approaches:**

   *Biomarker-Guided Therapy:*
   - ACPA+ associated with rituximab response
   - Synovial tissue phenotyping
   - Gene expression signatures predicting response
   - Multi-biomarker disease activity (MBDA) score

   *Emerging Targets:*
   - GM-CSF pathway (otilimab, mavrilimumab)
   - Bruton's tyrosine kinase (fenebrutinib)
   - CD40-CD40L costimulation
   - Notch signaling
   - Fibroblast-targeted therapies

**Treatment Algorithm (2023 ACR/EULAR):**

1. **Newly Diagnosed:**
   - Methotrexate first-line (15-25 mg/week)
   - Short-term glucocorticoids for bridging
   - Target: remission or low disease activity by 6 months

2. **Inadequate Response to MTX:**
   - Add biologic DMARD or JAKi
   - Poor prognostic factors favor earlier escalation
   - TNFi, IL-6Ri, abatacept, JAKi as options

3. **Inadequate Response to First bDMARD:**
   - Switch to different mechanism
   - Consider rituximab if ACPA+
   - Multiple cycling may be needed

4. **Treat-to-Target Principles:**
   - Measure disease activity regularly (q1-3 months)
   - Adjust therapy until target reached
   - Consider tapering after sustained remission (≥6 months)

**Comorbidity Management:**

*Cardiovascular:*
- 50% increased CV mortality
- Treat RA as CV risk equivalent
- Aggressive lipid management
- Avoid glucocorticoid excess
- Control inflammation (lowers CV risk)

*Infections:*
- Screen for latent TB before biologics
- Hepatitis B/C screening
- Live vaccines contraindicated on immunosuppression
- Herpes zoster vaccination recommended

*Malignancy:*
- Lymphoma risk increased (related to disease activity)
- No clear increase with biologics (except possibly JAKi)
- Screen appropriately`,
      keyTerms: [
        { term: 'PPAD', definition: 'Porphyromonas gingivalis peptidylarginine deiminase; bacterial enzyme inducing citrullination that may trigger ACPA production' },
        { term: 'shared epitope', definition: 'Conserved amino acid sequence at HLA-DRB1 positions 70-74 (QKRAA, QRRAA, RRRAA) associated with RA susceptibility' },
        { term: 'NETosis', definition: 'Neutrophil cell death releasing neutrophil extracellular traps (NETs) containing citrullinated histones and DNA' },
        { term: 'MBDA', definition: 'Multi-biomarker disease activity score; serum protein panel correlating with RA activity' },
        { term: 'treat-to-target', definition: 'Treatment strategy adjusting therapy until predefined remission or low disease activity goal is achieved' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- ACPA more specific than RF for RA diagnosis
- Shared epitope + smoking + ACPA = high-risk for severe erosive disease
- MTX remains first-line csDMARD; optimize dose before adding biologics
- JAK inhibitors carry boxed warnings for MACE, VTE, malignancy (especially in high-risk patients)
- Treat RA inflammation aggressively to reduce CV risk
- Screen for latent TB with IGRA before starting biologics
- Rituximab preferred in ACPA+ patients after TNFi failure
- Tofacitinib equivalent efficacy to adalimumab in MTX-IR patients
- Sustained remission >6 months may allow gradual biologic tapering
- Felty syndrome: RA + splenomegaly + neutropenia (recurrent infections)
- Rheumatoid nodules histology: palisading granulomas with central necrosis`,
    },
  },

  media: [
    {
      id: 'ra-joint-diagram',
      type: 'diagram',
      filename: 'ra-joint-pathology.svg',
      title: 'Rheumatoid Arthritis Joint Pathology',
      description: 'Cross-section showing synovial inflammation, pannus formation, and erosion development',
    },
    {
      id: 'ra-hand-deformities',
      type: 'image',
      filename: 'ra-hand-deformities.jpg',
      title: 'Classic RA Hand Deformities',
      description: 'Ulnar deviation, swan neck, and boutonniere deformities',
    },
  ],
  citations: [
    {
      id: 'smolen-2016',
      type: 'article',
      title: 'Rheumatoid arthritis',
      authors: ['Smolen JS', 'Aletaha D', 'McInnes IB'],
      source: 'Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(16)30173-8',
      license: 'Copyright Elsevier',
    },
    {
      id: 'acr-eular-2010',
      type: 'article',
      title: '2010 Rheumatoid arthritis classification criteria',
      authors: ['Aletaha D', 'Neogi T', 'Silman AJ', 'et al.'],
      source: 'Arthritis & Rheumatism',
      url: 'https://doi.org/10.1002/art.27584',
    },
    {
      id: 'firestein-2017',
      type: 'textbook',
      title: 'Kelley and Firestein\'s Textbook of Rheumatology',
      authors: ['Firestein GS', 'Budd RC', 'Gabriel SE', 'et al.'],
      source: 'Elsevier',
      chapter: 'Rheumatoid Arthritis',
    },
  ],
  crossReferences: [
    { targetId: 'concept-autoimmune-serology', targetType: 'concept', relationship: 'related', label: 'Autoimmune Serology' },
    { targetId: 'concept-dmards', targetType: 'concept', relationship: 'related', label: 'DMARDs' },
    { targetId: 'concept-biologics', targetType: 'concept', relationship: 'related', label: 'Biologic Therapies' },
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent', label: 'Immune System' },
  ],
  tags: {
    systems: ['musculoskeletal', 'immune'],
    topics: ['rheumatology', 'autoimmune', 'arthritis', 'immunology'],
    keywords: ['RA', 'rheumatoid', 'autoimmune arthritis', 'ACPA', 'anti-CCP', 'pannus', 'synovitis'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default rheumatoidArthritisContent;
