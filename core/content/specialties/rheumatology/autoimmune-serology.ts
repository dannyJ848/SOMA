import { EducationalContent } from '../../types';

export const autoimmuneSerogyContent: EducationalContent = {
  id: 'topic-autoimmune-serology',
  type: 'topic',
  name: 'Autoimmune Serology',
  alternateNames: ['Autoantibody testing', 'Rheumatologic serologies', 'Autoimmune markers'],

  levels: {
    1: {
      level: 1,
      summary: 'Autoimmune serology involves blood tests that look for autoantibodies - proteins made by your immune system that mistakenly attack your own body instead of germs.',
      explanation: `Your immune system normally makes antibodies to fight infections. In autoimmune diseases, the body makes antibodies that attack its own tissues. These are called autoantibodies.

**What autoimmune tests measure:**
- Autoantibodies in your blood
- Signs of inflammation
- How well organs are working

**Common autoimmune blood tests:**

1. **ANA (Antinuclear Antibody):**
   - Screening test for many autoimmune diseases
   - Looks for antibodies attacking cell nuclei
   - Positive in lupus, scleroderma, and others
   - Can be positive in healthy people too

2. **Rheumatoid Factor (RF):**
   - Found in rheumatoid arthritis
   - Also positive in other conditions

3. **Anti-CCP:**
   - Very specific for rheumatoid arthritis
   - Can be positive before symptoms start

4. **Anti-dsDNA:**
   - Specific for lupus
   - Linked to kidney problems

5. **ANCA:**
   - Found in certain blood vessel diseases
   - Different patterns mean different conditions

**Understanding results:**
- Positive doesn't always mean disease
- Negative doesn't always rule out disease
- Results must be combined with symptoms
- Doctors look at the pattern of results

**When these tests are done:**
- Joint pain and swelling
- Unexplained fatigue
- Skin rashes
- Kidney problems
- Multiple symptoms together

**Important to know:**
- No single test diagnoses autoimmune disease
- Clinical picture is most important
- Tests help confirm suspicions
- Some tests monitor disease activity`,
      keyTerms: [
        { term: 'autoantibody', definition: 'An antibody that attacks your own body\'s cells and tissues' },
        { term: 'ANA', definition: 'Antinuclear antibody; a screening test for autoimmune diseases' },
        { term: 'titer', definition: 'A measure of how concentrated an antibody is in your blood' },
        { term: 'false positive', definition: 'When a test is positive but you don\'t actually have the disease' },
      ],
      analogies: [
        'Autoantibodies are like friendly fire - your body\'s defense system attacking its own troops.',
        'A positive ANA is like a smoke detector going off - it doesn\'t tell you where the fire is or if there even is one.',
      ],
      examples: [
        'A doctor orders an ANA test for a patient with joint pain and fatigue to check for lupus',
        'Anti-CCP testing helps distinguish rheumatoid arthritis from other types of joint pain',
        'Rising anti-dsDNA levels may signal a lupus flare before symptoms worsen',
      ],
    },
    2: {
      level: 2,
      summary: 'Autoimmune serology utilizes specific autoantibody testing to aid diagnosis, classification, and monitoring of autoimmune diseases, with test interpretation requiring correlation with clinical presentation and understanding of sensitivity versus specificity.',
      explanation: `Autoimmune serology encompasses tests for autoantibodies and inflammatory markers used in diagnosing and monitoring rheumatic diseases.

**Antinuclear Antibody (ANA):**

*Testing Methods:*
- Immunofluorescence (IIF): Gold standard
- ELISA/multiplex: Screening alternative

*Patterns and Associations:*
| Pattern | Associated Antibodies | Disease Associations |
|---------|----------------------|---------------------|
| Homogeneous | Anti-dsDNA, anti-histone | SLE, drug-induced lupus |
| Speckled | Anti-Sm, anti-RNP, anti-SSA/SSB | SLE, MCTD, Sjogren's |
| Nucleolar | Anti-Scl-70, anti-RNA pol III | Scleroderma |
| Centromere | Anti-centromere | Limited scleroderma |

*Interpretation:*
- Titer matters (>1:160 more significant)
- Must correlate with clinical findings
- 5-15% healthy population ANA positive
- Higher titers less likely false positive

**SLE Antibodies:**

| Antibody | Sensitivity | Specificity | Clinical Association |
|----------|-------------|-------------|---------------------|
| ANA | 95-99% | Low | Screening |
| Anti-dsDNA | 70% | 95% | Nephritis activity |
| Anti-Smith | 30% | 99% | SLE-specific |
| Anti-SSA/Ro | 30% | 70% | Neonatal lupus, Sjogren's |
| Anti-SSB/La | 15% | 90% | Sjogren's |
| Anti-RNP | 40% | 60% | MCTD, SLE |

**Rheumatoid Arthritis Serologies:**

*Rheumatoid Factor (RF):*
- IgM against Fc portion of IgG
- Sensitivity: 70-80%
- Specificity: 85%
- Also positive in: Sjogren's, infections, aging

*Anti-CCP (Anti-citrullinated Protein Antibody):*
- Sensitivity: 70%
- Specificity: 95%
- May precede clinical RA
- Associated with erosive disease

*Seronegative RA:*
- 20-30% are RF and anti-CCP negative
- Diagnosis remains clinical

**ANCA Testing:**

*Types:*
- c-ANCA (cytoplasmic): Anti-PR3
- p-ANCA (perinuclear): Anti-MPO

*Disease Associations:*
| Pattern/Antigen | Disease |
|-----------------|---------|
| c-ANCA/PR3 | GPA (Wegener's) |
| p-ANCA/MPO | MPA, EGPA |
| p-ANCA/other | Drug-induced, IBD |

**Myositis Antibodies:**

*Myositis-Specific:*
- Anti-Jo-1: Antisynthetase syndrome
- Anti-Mi-2: Classic dermatomyositis
- Anti-MDA5: Amyopathic DM, ILD
- Anti-TIF1-gamma: Cancer-associated DM

*Myositis-Associated:*
- Anti-PM-Scl: Overlap syndrome
- Anti-U1 RNP: MCTD

**Scleroderma Antibodies:**

| Antibody | Subtype | Features |
|----------|---------|----------|
| Anti-centromere | Limited | PAH risk |
| Anti-Scl-70 | Diffuse | ILD risk |
| Anti-RNA pol III | Diffuse | Renal crisis, cancer |

**Complement Testing:**
- C3, C4: Consumed in active SLE
- Low levels = active disease
- Useful for monitoring`,
      keyTerms: [
        { term: 'sensitivity', definition: 'How often the test is positive in people who have the disease (true positive rate)' },
        { term: 'specificity', definition: 'How often the test is negative in people without the disease (true negative rate)' },
        { term: 'anti-CCP', definition: 'Anti-cyclic citrullinated peptide antibody; highly specific for rheumatoid arthritis' },
        { term: 'c-ANCA', definition: 'Cytoplasmic ANCA pattern; associated with PR3 antibodies and GPA' },
        { term: 'p-ANCA', definition: 'Perinuclear ANCA pattern; associated with MPO antibodies and MPA/EGPA' },
      ],
      analogies: [
        'Sensitivity is like a metal detector at the airport - it catches most weapons but also keys and belt buckles.',
        'Specificity is like a fingerprint scanner - when it matches, you know it\'s the right person.',
      ],
    },
    3: {
      level: 3,
      summary: 'Autoimmune serology integrates immunofluorescence patterns, specific autoantibody identification, and quantitative assays to guide diagnosis, prognostication, and monitoring, with clinical utility dependent on pre-test probability and understanding of test characteristics in the appropriate clinical context.',
      explanation: `**ANA Testing - Technical Considerations:**

1. **Immunofluorescence (IIF) on HEp-2 Cells:**
   - Gold standard per ACR
   - Detects >150 autoantibodies
   - Provides pattern information
   - Labor-intensive, operator-dependent
   - Recommended threshold: >=1:80

2. **Solid-Phase Assays (ELISA, Multiplex):**
   - High throughput
   - Standardized
   - May miss some antibodies
   - Used for screening or confirmation

3. **ANA Patterns and Specific Antibodies:**

   *Homogeneous:*
   - Anti-dsDNA (SLE)
   - Anti-histone (drug-induced lupus)
   - Anti-nucleosome (SLE)

   *Speckled:*
   - Fine: Anti-SSA, Anti-SSB
   - Coarse: Anti-Sm, Anti-U1 RNP

   *Nucleolar:*
   - Anti-Scl-70 (SSc)
   - Anti-PM-Scl (overlap)
   - Anti-Th/To
   - Anti-U3 RNP (fibrillarin)

   *Centromere:*
   - Anti-CENP-A, B, C
   - Limited SSc

4. **ANA-Negative Autoimmune Disease:**
   - Anti-SSA/Ro can be ANA negative
   - Use multiplex or specific ELISA
   - Consider technical factors

**Complement Cascade:**

*Classical Pathway:*
- C1q, C4, C2, C3
- Activated by immune complexes
- Low C3, C4 in active SLE

*Alternative Pathway:*
- Factor B, D, properdin
- Activated by cell surfaces
- C3 nephritic factor in MPGN

*Lectin Pathway:*
- Mannose-binding lectin
- Innate immunity

*Complement in Disease:*
| Disease | C3 | C4 | Interpretation |
|---------|----|----|----------------|
| Active SLE | Low | Low | Classical pathway |
| Cryoglobulinemia | Normal/Low | Very Low | Classical pathway |
| C4 deficiency | Normal | Very Low | Genetic |
| MPGN Type II | Low | Normal | Alternative pathway |

**Antiphospholipid Antibodies:**

*Tests:*
- Lupus anticoagulant (LA): Functional assay
- Anti-cardiolipin (aCL): IgG, IgM
- Anti-beta2 glycoprotein I (anti-B2GPI): IgG, IgM

*Classification Criteria:*
- Persistent positivity (>=12 weeks apart)
- Medium-high titer for aCL (>40 GPL/MPL or >99th percentile)

*Clinical Associations:*
- Arterial/venous thrombosis
- Pregnancy morbidity
- Livedo reticularis
- Thrombocytopenia
- May be primary or secondary (SLE)

*Triple Positivity:*
- LA + aCL + anti-B2GPI
- Highest thrombosis risk
- Guides anticoagulation intensity

**Inflammatory Markers:**

*ESR (Erythrocyte Sedimentation Rate):*
- Non-specific inflammation
- Elevated in RA, PMR, GCA
- Affected by anemia, age, pregnancy

*CRP (C-Reactive Protein):*
- Acute phase reactant
- More rapid response than ESR
- Less affected by confounders
- Low or normal in SLE flares (paradoxically)

*Ferritin:*
- Extremely elevated in Adult-onset Still's disease
- Also elevated in MAS, HLH

**Disease-Specific Testing Algorithms:**

*Suspected SLE:*
1. ANA screening
2. If positive: Anti-dsDNA, anti-Smith, anti-RNP
3. Also: C3, C4, CBC, urinalysis, creatinine
4. Anti-SSA if Sjogren's features or pregnancy

*Suspected RA:*
1. RF and anti-CCP
2. If negative but clinical RA, treat anyway
3. Anti-CCP predicts erosions

*Suspected Scleroderma:*
1. ANA with pattern
2. Specific: Anti-centromere, anti-Scl-70, anti-RNA pol III
3. Extended panel if negative: Anti-Th/To, anti-U3 RNP

*Suspected Myositis:*
1. ANA (may be negative)
2. Myositis-specific antibody panel
3. Guides phenotype and prognosis`,
      keyTerms: [
        { term: 'HEp-2 cells', definition: 'Human epithelial cell line used as substrate for ANA immunofluorescence testing' },
        { term: 'lupus anticoagulant', definition: 'Functional assay detecting antiphospholipid antibodies that prolong clotting time in vitro but cause thrombosis in vivo' },
        { term: 'triple positivity', definition: 'Presence of lupus anticoagulant, anti-cardiolipin, and anti-beta2 glycoprotein I; highest APS thrombosis risk' },
        { term: 'anti-nucleosome', definition: 'Antibody to DNA-histone complex; highly specific for SLE, correlates with disease activity' },
        { term: 'C3 nephritic factor', definition: 'Autoantibody stabilizing C3 convertase causing uncontrolled complement activation in MPGN' },
      ],
      clinicalNotes: 'ANA IIF on HEp-2 cells remains the gold standard - solid-phase assays may miss some antibodies. Anti-SSA can be positive with negative ANA. CRP is typically not elevated in SLE flares unless infection or serositis present. Triple-positive antiphospholipid syndrome carries the highest thrombosis risk and may warrant more aggressive anticoagulation.',
    },
    4: {
      level: 4,
      summary: 'Autoimmune serology reflects underlying immunopathogenic mechanisms with autoantibodies serving as diagnostic biomarkers, prognostic indicators, and disease activity measures, while evolving understanding of epitope specificity, immunoglobulin subclass, and functional effects informs precision medicine approaches.',
      explanation: `**Immunopathogenic Basis of Autoantibodies:**

1. **Mechanisms of Autoantibody Generation:**
   - Defective apoptotic cell clearance
   - Exposure of sequestered antigens
   - Molecular mimicry (infection-triggered)
   - Epitope spreading
   - B cell hyperactivity
   - T cell help dysregulation

2. **Pathogenic vs. Non-Pathogenic Autoantibodies:**

   *Direct Pathogenicity:*
   - Anti-dsDNA: IC deposition in nephritis
   - ANCA: Neutrophil activation
   - Anti-GBM: Complement-mediated injury
   - Anti-phospholipid: Thrombosis

   *Indirect/Marker:*
   - Anti-Sm: Disease marker, not pathogenic
   - Anti-centromere: Disease marker
   - Anti-CCP: May contribute to inflammation

3. **Epitope Specificity:**

   *Anti-dsDNA:*
   - Cross-reacts with nucleosomes
   - Nephritogenic antibodies bind specific epitopes
   - Can cross-react with renal antigens

   *Anti-Ro/SSA:*
   - Ro52 vs Ro60 components
   - Different clinical associations
   - Ro52: Myositis-associated
   - Ro60: Sjogren's, SLE

   *Anti-CCP:*
   - Recognizes citrullinated peptides
   - Multiple specificities (vimentin, fibrinogen, alpha-enolase)
   - Shared epitope (HLA-DRB1) hypothesis

4. **Immunoglobulin Subclass:**

   *IgG Subclasses in Disease:*
   - IgG1, IgG3: Complement-fixing
   - IgG4: Non-complement-fixing
   - Subclass affects pathogenicity

   *Examples:*
   - Anti-dsDNA: IgG1, IgG3 more pathogenic
   - IgG4-related disease: IgG4 predominant
   - Membranous nephropathy: IgG4 anti-PLA2R

**Quantitative Assessment:**

1. **Titers and Clinical Correlation:**

   *Anti-dsDNA:*
   - Titer correlates with disease activity
   - Rising titers may predict flare
   - Useful for monitoring

   *Anti-CCP:*
   - Higher titers = worse prognosis
   - Predicts erosive disease
   - May decrease with treatment

   *ANCA:*
   - PR3-ANCA levels may predict relapse
   - Less clear for MPO-ANCA
   - Controversial whether to treat rising titers

2. **Standardization Challenges:**
   - Different assay platforms
   - Lack of universal standards
   - Quantitative comparisons difficult
   - International units vs. arbitrary units

**Novel Autoantibody Targets:**

1. **Myositis Panel Expansion:**

   *Antisynthetase Antibodies:*
   - Jo-1 (most common)
   - PL-7, PL-12, EJ, OJ, KS, Zo, Ha
   - Each associated with ILD, arthritis
   - Variable myositis severity

   *Anti-MDA5:*
   - Melanoma differentiation-associated gene 5
   - Amyopathic dermatomyositis
   - Rapidly progressive ILD
   - Asian populations: Worse prognosis

2. **SSc Antibodies:**

   *Expanded Panel:*
   - Anti-Th/To: ILD in limited SSc
   - Anti-U3 RNP (fibrillarin): PAH, renal crisis
   - Anti-U11/U12 RNP: Severe ILD
   - Anti-BICD2: Novel marker

3. **Overlap Antibodies:**
   - Anti-PM-Scl: SSc-myositis overlap
   - Anti-Ku: SLE-SSc-myositis overlap
   - Anti-U1 RNP: MCTD, SLE

**Functional Autoantibody Testing:**

1. **Antiphospholipid Antibodies:**
   - LA assays: Functional (DRVVT, LA-sensitive aPTT)
   - Different from binding assays
   - LA strongest predictor of thrombosis

2. **Anti-Type I Interferon:**
   - Neutralizing antibodies
   - Associated with severe COVID-19
   - May modify SLE phenotype

3. **Complement Function:**
   - CH50: Total classical pathway function
   - AH50: Alternative pathway
   - Identifies complement deficiencies

**Emerging Biomarkers:**

*Urine Biomarkers in Lupus Nephritis:*
- NGAL: Tubular injury
- MCP-1: Inflammation
- TWEAK: Activity marker
- May precede clinical flare

*Cell-Bound Complement (CB-CAPs):*
- Complement fragments on cells
- May be more sensitive than serum C3/C4
- Research tool currently`,
      keyTerms: [
        { term: 'epitope spreading', definition: 'Process where immune response expands from initial antigen to related epitopes over time' },
        { term: 'shared epitope', definition: 'HLA-DRB1 amino acid sequence associated with RA; may present citrullinated peptides' },
        { term: 'DRVVT', definition: 'Dilute Russell\'s viper venom time; sensitive assay for lupus anticoagulant' },
        { term: 'CH50', definition: 'Total hemolytic complement; functional assay of classical pathway' },
        { term: 'CB-CAPs', definition: 'Cell-bound complement activation products; may be more sensitive marker of lupus activity' },
      ],
      clinicalNotes: 'Anti-MDA5 positive dermatomyositis has a distinct phenotype with rapidly progressive ILD and requires aggressive immunosuppression. Antisynthetase syndrome can have minimal or absent myositis but significant ILD. Anti-dsDNA titers can be followed for lupus activity but should not drive treatment decisions alone. Lupus anticoagulant is the strongest predictor of thrombosis in APS.',
    },
    5: {
      level: 5,
      summary: 'Contemporary autoimmune serology integrates high-throughput multiplex platforms, extended autoantibody panels, and functional assays to enable precision diagnosis and risk stratification, while research advances explore pathogenic mechanisms, novel targets, and the role of autoantibodies in predicting treatment response and disease outcomes.',
      explanation: `**Precision Medicine Applications:**

1. **Autoantibody-Guided Therapy:**

   *SLE:*
   - Anti-dsDNA+/low complement: Higher nephritis risk
   - Anti-Sm: May predict neuropsychiatric involvement
   - Antiphospholipid: Anticoagulation decisions
   - Interferon signature: Anifrolumab response

   *Myositis:*
   - Anti-Jo-1: ILD-predominant, moderate prognosis
   - Anti-MDA5: Aggressive immunosuppression needed
   - Anti-TIF1-gamma/NXP2: Malignancy screening
   - Anti-SRP: Refractory, may need rituximab

   *SSc:*
   - Anti-centromere: PAH screening priority
   - Anti-Scl-70: ILD screening priority
   - Anti-RNA pol III: Cancer screening, avoid high-dose steroids

2. **Pre-Clinical/Pre-Symptomatic Detection:**

   *RA:*
   - Anti-CCP can precede symptoms by years
   - Research on prevention in high-risk individuals
   - PRAIRI study: Rituximab delayed onset

   *SLE:*
   - Autoantibodies accumulate before diagnosis
   - Sequential appearance over years
   - Potential for intervention studies

   *Type 1 Diabetes Analogy:*
   - Islet autoantibodies predict disease
   - Prevention trials based on serologic risk
   - May translate to rheumatic diseases

3. **Multiplex and High-Throughput Platforms:**

   *Addressable Laser Bead Assays:*
   - Simultaneous detection of multiple antibodies
   - Standardized, quantitative
   - ENA panels, myositis panels
   - Improved throughput

   *Planar Arrays:*
   - Research platforms
   - Hundreds of antigens
   - Discovery of novel autoantibodies

   *Challenges:*
   - Harmonization between platforms
   - Clinical validation
   - Interpreting novel findings

4. **Antigen-Specific B Cell Analysis:**

   *Single-Cell Technologies:*
   - Identify autoantibody-producing cells
   - Characterize B cell receptors
   - Understand clonal evolution

   *Implications:*
   - Target pathogenic B cell clones
   - Monitor treatment response
   - Predict relapse

5. **Autoantibody Glycosylation:**

   *IgG Glycoforms:*
   - Fc glycosylation affects function
   - Agalactosylated IgG: Pro-inflammatory
   - Sialylated IgG: Anti-inflammatory

   *Clinical Relevance:*
   - RA: Agalactosylated anti-CCP more pathogenic
   - May predict disease activity
   - Potential therapeutic target

6. **Novel Autoantibody Targets:**

   *Recently Identified:*
   - Anti-MDA5: Dermatomyositis
   - Anti-SAE1/2: Dermatomyositis
   - Anti-HMGCR: Statin-associated necrotizing myopathy
   - Anti-SRP: Necrotizing myopathy
   - Anti-NXP2: Dermatomyositis, calcinosis, cancer

   *Under Investigation:*
   - Anti-CXCL4: Early marker in SSc
   - Anti-BICD2: SSc ILD
   - Interferon-neutralizing antibodies
   - Novel lupus targets

7. **Functional Autoantibody Effects:**

   *Beyond Markers:*
   - Anti-NMDA receptor: Neuropsychiatric lupus
   - Anti-ribosomal P: Psychosis, depression
   - Anti-aquaporin 4: Neuromyelitis optica
   - Anti-contactin-1: Neuropathy

   *Therapeutic Implications:*
   - Plasmapheresis for antibody removal
   - B cell depletion for antibody suppression
   - Targeted therapies based on mechanism

8. **Laboratory Medicine Advances:**

   *Point-of-Care Testing:*
   - Rapid RF, anti-CCP
   - Enable early treatment decisions
   - Challenges with quality control

   *Reflex Testing Algorithms:*
   - ANA positive triggers specific antibodies
   - Cost-effective approach
   - Standardized interpretation

   *Machine Learning:*
   - Pattern recognition in ANA IIF
   - Automated reading
   - Quality assurance applications

**Clinical Integration:**

*Pre-Test Probability Framework:*
1. Assess clinical probability of disease
2. Select appropriate tests
3. Interpret in clinical context
4. Avoid shotgun panels without indication

*Pitfalls:*
- ANA screening without clinical indication
- Over-interpreting low-titer positives
- Missing ANA-negative autoimmune disease
- Confusing association with causation

*Cost-Effective Approach:*
- Start with clinical assessment
- Targeted testing based on suspicion
- Reflex testing algorithms
- Avoid unnecessary specialty panels`,
      keyTerms: [
        { term: 'pre-clinical autoimmunity', definition: 'Period before symptom onset where autoantibodies are detectable; potential window for prevention' },
        { term: 'agalactosylated IgG', definition: 'IgG lacking galactose residues; more pro-inflammatory and associated with active RA' },
        { term: 'anti-HMGCR', definition: 'Antibody against HMG-CoA reductase; associated with statin-related immune-mediated necrotizing myopathy' },
        { term: 'planar arrays', definition: 'High-throughput platforms allowing simultaneous detection of antibodies to hundreds of antigens' },
        { term: 'reflex testing', definition: 'Laboratory algorithm where positive screening test automatically triggers confirmatory or specific testing' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- ANA is a screening test - interpret with clinical context
- Anti-dsDNA and anti-Smith are specific for SLE
- Anti-CCP is highly specific for RA and predicts erosive disease
- c-ANCA/PR3 = GPA; p-ANCA/MPO = MPA, EGPA
- Anti-SSA can be positive with negative ANA - test specifically if Sjogren's suspected
- CRP typically NOT elevated in SLE flares (unless infection/serositis)
- Low C3, C4 indicates active SLE
- Triple-positive APS (LA + aCL + anti-B2GPI) = highest thrombosis risk
- Myositis antibodies define phenotype and prognosis
- Don't order autoimmune panels without clinical suspicion`,
    },
  },

  media: [
    {
      id: 'ana-patterns',
      type: 'image',
      filename: 'ana-immunofluorescence-patterns.jpg',
      title: 'ANA Immunofluorescence Patterns',
      description: 'Homogeneous, speckled, nucleolar, and centromere patterns on HEp-2 cells',
    },
    {
      id: 'autoantibody-associations',
      type: 'diagram',
      filename: 'autoantibody-disease-associations.svg',
      title: 'Autoantibody-Disease Associations',
      description: 'Table mapping autoantibodies to their associated diseases and clinical features',
    },
  ],
  citations: [
    {
      id: 'agmon-levin-2014',
      type: 'article',
      title: 'International recommendations for the assessment of autoantibodies to cellular antigens referred to as anti-nuclear antibodies',
      authors: ['Agmon-Levin N', 'Damoiseaux J', 'Kallenberg C', 'et al.'],
      source: 'Annals of the Rheumatic Diseases',
      url: 'https://doi.org/10.1136/annrheumdis-2013-203863',
    },
    {
      id: 'satoh-2015',
      type: 'article',
      title: 'Clinical interpretation of antinuclear antibody tests in systemic rheumatic diseases',
      authors: ['Satoh M', 'Tanaka S', 'Ceribelli A', 'et al.'],
      source: 'Modern Rheumatology',
      url: 'https://doi.org/10.3109/14397595.2015.1110697',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'related', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'condition-rheumatoid-arthritis', targetType: 'condition', relationship: 'related', label: 'Rheumatoid Arthritis' },
    { targetId: 'condition-vasculitis-syndromes', targetType: 'condition', relationship: 'related', label: 'Vasculitis Syndromes' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['rheumatology', 'laboratory medicine', 'diagnostics'],
    keywords: ['autoantibodies', 'ANA', 'anti-dsDNA', 'ANCA', 'RF', 'anti-CCP', 'serology'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default autoimmuneSerogyContent;
