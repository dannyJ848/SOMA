import { EducationalContent } from '../../types';

export const connectiveTissueDiseasesContent: EducationalContent = {
  id: 'topic-connective-tissue-diseases',
  type: 'topic',
  name: 'Connective Tissue Diseases',
  alternateNames: ['CTD', 'Autoimmune connective tissue disorders', 'Collagen vascular diseases'],
  hpoId: 'HP:0003549',

  levels: {
    1: {
      level: 1,
      summary: 'Connective tissue diseases are a group of conditions where the immune system attacks the tissues that connect and support different parts of your body, like skin, joints, blood vessels, and internal organs.',
      explanation: `Connective tissue is the "glue" that holds your body together. It includes your skin, joints, blood vessels, and the tissues around your organs.

**What are connective tissue diseases:**
- A group of autoimmune conditions
- The immune system mistakenly attacks healthy connective tissue
- Can affect many parts of the body at once
- Often share similar symptoms

**Main types:**
1. **Lupus (SLE):** Affects skin, joints, kidneys, and other organs
2. **Scleroderma:** Causes hardening of skin and organs
3. **Sjogren's syndrome:** Causes dry eyes and mouth
4. **Dermatomyositis/Polymyositis:** Affects muscles and skin
5. **Mixed connective tissue disease:** Features of multiple conditions

**Common symptoms:**
- Joint pain and swelling
- Fatigue
- Skin rashes
- Muscle weakness
- Dry eyes or mouth
- Raynaud's phenomenon (fingers turning white/blue in cold)

**Who gets these conditions:**
- More common in women
- Can occur at any age
- May run in families
- Often triggered by infections or environmental factors

**Diagnosis:**
- Blood tests for autoantibodies
- Physical examination
- Sometimes imaging or biopsies

**Treatment:**
- Medications to calm the immune system
- Treating specific symptoms
- Regular monitoring
- Healthy lifestyle

**Living with CTD:**
With proper treatment, most people can manage their symptoms and live active lives.`,
      keyTerms: [
        { term: 'connective tissue', definition: 'The tissue that supports, connects, and separates different body parts' },
        { term: 'autoimmune', definition: 'When the immune system attacks the body\'s own healthy tissues' },
        { term: 'autoantibodies', definition: 'Antibodies that mistakenly attack your own body' },
        { term: 'overlap syndrome', definition: 'When someone has features of more than one connective tissue disease' },
      ],
      analogies: [
        'Connective tissue is like the scaffolding and glue that holds a building together - when it\'s damaged, many systems can be affected.',
        'Autoimmune disease is like friendly fire - your body\'s defense system attacking its own troops.',
      ],
      examples: [
        'A woman develops joint pain, fatigue, and a butterfly-shaped rash on her face',
        'Someone has dry eyes, dry mouth, and joint pain together',
        'A patient has muscle weakness, skin rash, and Raynaud\'s phenomenon',
      ],
    },
    2: {
      level: 2,
      summary: 'Connective tissue diseases comprise a group of systemic autoimmune disorders characterized by autoantibody production and immune-mediated inflammation affecting multiple organ systems, with overlapping clinical features and distinct serologic profiles.',
      explanation: `Connective tissue diseases (CTDs) share common pathogenic mechanisms involving loss of self-tolerance, autoantibody production, and chronic inflammation.

**Major Connective Tissue Diseases:**

1. **Systemic Lupus Erythematosus (SLE):**
   - Multi-system involvement
   - ANA positive (>95%)
   - Anti-dsDNA, anti-Smith antibodies
   - Nephritis, serositis, CNS involvement

2. **Systemic Sclerosis (Scleroderma):**
   - Skin fibrosis and vascular disease
   - Anti-centromere (limited) or anti-Scl-70 (diffuse)
   - Raynaud's, ILD, PAH, renal crisis

3. **Sjogren's Syndrome:**
   - Sicca symptoms (dry eyes, dry mouth)
   - Anti-SSA (Ro), anti-SSB (La)
   - Lymphoma risk
   - Primary or secondary

4. **Inflammatory Myopathies:**
   - Dermatomyositis: Skin + muscle
   - Polymyositis: Muscle only
   - Anti-Jo-1, anti-Mi-2
   - Proximal weakness, elevated CK

5. **Mixed Connective Tissue Disease (MCTD):**
   - Overlap features
   - High-titer anti-U1 RNP
   - Raynaud's, swollen hands, myositis

**Undifferentiated Connective Tissue Disease (UCTD):**
- Features of CTD but doesn't meet criteria for specific disease
- May evolve into defined CTD over time
- ANA positive
- Close monitoring required

**Overlap Syndromes:**
- Features of two or more CTDs
- Examples: Rhupus (RA + SLE), scleromyositis
- Treatment targets predominant features

**Shared Clinical Features:**
- Polyarthritis/arthralgias
- Raynaud's phenomenon
- Fatigue
- Serositis
- Interstitial lung disease
- Autoantibodies (ANA common to most)

**Diagnostic Approach:**
- ANA screening (if negative, most CTDs unlikely)
- Specific antibodies based on clinical picture
- Complete blood count (cytopenias)
- Inflammatory markers
- Organ-specific testing

**Common Autoantibodies:**

| Antibody | Disease Association |
|----------|-------------------|
| Anti-dsDNA | SLE (nephritis) |
| Anti-Smith | SLE (specific) |
| Anti-SSA/Ro | Sjogren's, SLE, neonatal lupus |
| Anti-SSB/La | Sjogren's |
| Anti-centromere | Limited SSc |
| Anti-Scl-70 | Diffuse SSc, ILD |
| Anti-Jo-1 | Antisynthetase syndrome |
| Anti-U1 RNP | MCTD, SLE |

**Treatment Principles:**
- Hydroxychloroquine: Most CTDs
- Immunosuppressants: Organ-threatening disease
- Biologics: Refractory cases
- Organ-specific management`,
      keyTerms: [
        { term: 'ANA', definition: 'Antinuclear antibody; screening test positive in most connective tissue diseases', pronunciation: 'A-N-A' },
        { term: 'UCTD', definition: 'Undifferentiated connective tissue disease; CTD features not meeting specific disease criteria' },
        { term: 'sicca symptoms', definition: 'Dryness of eyes (keratoconjunctivitis sicca) and mouth (xerostomia)' },
        { term: 'anti-dsDNA', definition: 'Antibody to double-stranded DNA; specific for SLE, associated with nephritis' },
        { term: 'antisynthetase syndrome', definition: 'Myositis with anti-aminoacyl-tRNA synthetase antibodies, ILD, arthritis, mechanic\'s hands' },
      ],
      analogies: [
        'Connective tissue diseases are like a spectrum of related conditions, with patients sometimes falling between clear categories.',
        'Autoantibodies are like name tags that help identify which specific condition someone has.',
      ],
    },
    3: {
      level: 3,
      summary: 'Connective tissue diseases share pathogenic mechanisms of immune dysregulation with loss of B and T cell tolerance, type I interferon activation, and autoantibody-mediated tissue damage, with diagnosis guided by classification criteria and serologic profiles informing prognosis and treatment.',
      explanation: `**Shared Pathogenic Mechanisms:**

1. **Loss of Tolerance:**
   - Defective clearance of apoptotic cells
   - Exposure of nuclear antigens
   - B cell hyperactivity
   - T regulatory cell dysfunction
   - Genetic susceptibility (HLA associations)

2. **Type I Interferon Signature:**
   - Prominent in SLE, Sjogren's, myositis
   - Plasmacytoid dendritic cell activation
   - Drives inflammation and autoantibody production
   - Therapeutic target (anifrolumab)

3. **Autoantibody-Mediated Damage:**
   - Immune complex deposition
   - Complement activation
   - Direct cellular effects
   - Neonatal disease (transplacental transfer)

**Disease-Specific Pathophysiology:**

*SLE:*
- Defective apoptotic cell clearance
- IC deposition in kidneys, skin, vessels
- Anti-dsDNA correlates with nephritis activity
- Complement consumption

*Systemic Sclerosis:*
- Vascular endothelial injury primary
- Immune activation secondary
- Fibroblast activation and fibrosis
- TGF-beta driven

*Sjogren's Syndrome:*
- Lymphocytic infiltration of exocrine glands
- B cell hyperactivity
- Ectopic germinal centers
- Lymphoma evolution (5% lifetime risk)

*Inflammatory Myopathies:*
- DM: Complement-mediated microangiopathy (perifascicular atrophy)
- PM: CD8+ T cell-mediated myofiber attack
- Autoantibodies predict phenotype and prognosis

**Dermatomyositis:**

*Cutaneous Features:*
- Heliotrope rash (purple eyelids)
- Gottron's papules (knuckles)
- V-sign, shawl sign
- Mechanic's hands
- Periungual telangiectasias

*Muscle Disease:*
- Proximal weakness
- Elevated CK
- EMG: Myopathic changes
- MRI: Muscle edema
- Biopsy: Perifascicular atrophy

*Myositis-Specific Antibodies:*
| Antibody | Phenotype |
|----------|----------|
| Anti-Jo-1 | Antisynthetase (ILD, arthritis) |
| Anti-Mi-2 | Classic DM, good prognosis |
| Anti-MDA5 | Amyopathic DM, severe ILD |
| Anti-TIF1-gamma | Cancer-associated DM |
| Anti-NXP2 | Calcinosis, cancer risk |
| Anti-SRP | Necrotizing myopathy, severe |

**Sjogren's Syndrome:**

*Primary vs Secondary:*
- Primary: Isolated sicca syndrome
- Secondary: With another CTD (RA, SLE, SSc)

*Clinical Features:*
- Sicca: Dry eyes, dry mouth
- Extraglandular: Fatigue, arthralgias, Raynaud's
- Severe: Vasculitis, ILD, renal tubular acidosis, neuropathy

*Diagnosis:*
- Anti-SSA/Ro, anti-SSB/La
- Schirmer's test, Rose Bengal staining
- Salivary gland biopsy (focal lymphocytic sialadenitis)
- 2016 ACR/EULAR criteria

*Complications:*
- B cell lymphoma (40x increased risk)
- Watch for: Parotid swelling, lymphadenopathy, monoclonal gammopathy
- Neonatal lupus (anti-SSA positive mothers)

**Mixed Connective Tissue Disease:**

*Sharp's Syndrome:*
- High-titer anti-U1 RNP (>1:1600)
- Raynaud's phenomenon
- Swollen "sausage" fingers
- Myositis features
- Arthritis
- Serositis

*Course:*
- May evolve into SLE, SSc, or remain MCTD
- Pulmonary hypertension is major complication
- Generally good prognosis

**Treatment Approach by Organ System:**

*Articular:*
- HCQ, NSAIDs, low-dose steroids
- MTX for refractory arthritis

*Pulmonary:*
- ILD: MMF, cyclophosphamide, nintedanib
- PAH: Vasodilators, combination therapy

*Renal:*
- Lupus nephritis: Based on class
- Aggressive immunosuppression for proliferative

*Myositis:*
- Glucocorticoids
- Steroid-sparing: MTX, azathioprine, IVIG
- Refractory: Rituximab`,
      keyTerms: [
        { term: 'type I interferon signature', definition: 'Pattern of interferon-induced gene expression common in SLE and other CTDs; therapeutic target' },
        { term: 'perifascicular atrophy', definition: 'Muscle fiber atrophy at edges of fascicles; characteristic of dermatomyositis on biopsy' },
        { term: 'anti-MDA5', definition: 'Antibody associated with clinically amyopathic dermatomyositis and rapidly progressive ILD' },
        { term: 'focal lymphocytic sialadenitis', definition: 'Clusters of 50+ lymphocytes per 4mm2 on salivary gland biopsy; diagnostic criterion for Sjogren\'s' },
        { term: 'neonatal lupus', definition: 'Condition in newborns of anti-SSA positive mothers; includes rash and congenital heart block' },
      ],
      clinicalNotes: 'Anti-SSA positive women of childbearing age need monitoring during pregnancy for fetal heart block. Anti-MDA5 dermatomyositis carries high mortality from rapidly progressive ILD - requires aggressive immunosuppression. Anti-TIF1-gamma in adult dermatomyositis warrants thorough cancer screening. Sjogren\'s patients need lymphoma surveillance.',
    },
    4: {
      level: 4,
      summary: 'Connective tissue diseases demonstrate shared immunopathogenic features including type I interferon activation, B cell dysregulation, and autoantibody-mediated inflammation, while specific antibody profiles predict organ involvement, malignancy risk, and response to targeted therapies such as anti-CD20, anti-BAFF, and interferon pathway inhibitors.',
      explanation: `**Advanced Immunopathogenesis:**

1. **Genetic Architecture:**
   - HLA associations (DR2, DR3 for SLE)
   - IRF5, STAT4, PTPN22 shared across CTDs
   - Complement deficiencies (C1q, C4) in SLE
   - Type I interferon pathway genes

2. **Epigenetics:**
   - DNA hypomethylation in SLE
   - microRNA dysregulation
   - Environmental triggers (UV, silica, drugs)
   - Drug-induced lupus mechanisms

3. **B Cell Abnormalities:**
   - Hyperactivation and autoantibody production
   - BAFF/BLyS elevation
   - Breach of peripheral tolerance
   - Plasma cell survival
   - Ectopic germinal centers (Sjogren's)

4. **T Cell Contributions:**
   - Th17/Treg imbalance
   - CD4 T cell help for autoantibodies
   - CD8 T cell cytotoxicity (PM)
   - Follicular helper T cells (Tfh)

**Interferon Pathway:**

*Type I Interferon (IFN-alpha/beta):*
- Produced by plasmacytoid dendritic cells
- Activated by immune complexes via TLR7/9
- Drives B cell activation
- Promotes autoantibody production
- Creates feed-forward loop

*Therapeutic Targeting:*
- Anifrolumab: Anti-IFNAR (approved for SLE)
- JAK inhibitors: Block downstream signaling
- TLR7/9 inhibitors: In development

**Complement in CTD:**

*SLE:*
- Classical pathway activation by IC
- Low C3, C4 in active disease
- C3d on erythrocytes (Coombs)
- Complement inhibition (investigational)

*Dermatomyositis:*
- MAC deposition in vessels
- Complement-mediated capillary injury
- Anti-C5 (zilucoplan) in trials

**Cancer-Associated Myositis:**

*Epidemiology:*
- 15-25% of DM patients have malignancy
- Risk highest at diagnosis and 2-3 years
- Anti-TIF1-gamma: Strongest cancer association
- Anti-NXP2: Cancer risk, especially in adults >40

*Screening Approach:*
- CT chest/abdomen/pelvis
- Age-appropriate cancer screening
- Consider PET-CT if high suspicion
- Repeat screening annually for 3-5 years

*Treatment:*
- Treat underlying malignancy
- Myositis may improve with cancer treatment
- Standard immunosuppression for muscle disease

**Pregnancy in CTD:**

*SLE:*
- Plan in remission, off teratogenic meds
- Hydroxychloroquine throughout (reduces flares)
- Monitor for nephritis flare
- Aspirin for preeclampsia prevention
- Neonatal lupus risk (anti-SSA)

*Antiphospholipid Syndrome:*
- Aspirin + heparin for positive antibodies
- High-risk: Consider LMWH + aspirin

*Anti-SSA/Ro Positive:*
- 2% risk congenital heart block
- Serial fetal echo (16-26 weeks)
- Dexamethasone if block develops (controversial)
- Hydroxychloroquine may reduce risk

*Medication Safety:*
| Safe | Avoid |
|------|-------|
| Hydroxychloroquine | Methotrexate |
| Azathioprine | Mycophenolate |
| Low-dose prednisone | Cyclophosphamide |
| Tacrolimus (limited data) | Leflunomide |
| IVIG | Biologics (most) |

**Emerging Targeted Therapies:**

*Anti-CD20 (Rituximab):*
- Off-label for refractory myositis
- Sjogren's (salivary function improvement modest)
- AAV approved, SLE trials negative

*Anti-BAFF (Belimumab):*
- Approved for SLE
- Reduces flares, steroid-sparing
- Being studied in Sjogren's

*Anti-IFNAR (Anifrolumab):*
- Approved for SLE
- Benefits skin, joint disease
- Reduces steroid use

*JAK Inhibitors:*
- Being studied in DM, SLE
- Oral, rapid onset
- Block multiple cytokine pathways

*Anti-CD19 CAR-T:*
- Early trials in refractory SLE
- Complete B cell depletion
- Remarkable early responses`,
      keyTerms: [
        { term: 'anifrolumab', definition: 'Anti-type I interferon receptor antibody; FDA-approved for SLE' },
        { term: 'TLR7/9', definition: 'Toll-like receptors that recognize nucleic acids; trigger interferon production in SLE' },
        { term: 'anti-TIF1-gamma', definition: 'Transcription intermediary factor 1 gamma antibody; strongest cancer association in dermatomyositis' },
        { term: 'congenital heart block', definition: 'Fetal/neonatal bradyarrhythmia from anti-SSA antibody-mediated inflammation of cardiac conduction tissue' },
        { term: 'BAFF/BLyS', definition: 'B cell activating factor; promotes B cell survival; target of belimumab' },
      ],
      clinicalNotes: 'Anti-TIF1-gamma and anti-NXP2 in adult dermatomyositis require thorough malignancy workup. Anifrolumab is now available for SLE and particularly helps skin and joint disease. Congenital heart block risk is 2% with anti-SSA; hydroxychloroquine may be protective. CAR-T cell therapy shows remarkable early results in refractory SLE.',
    },
    5: {
      level: 5,
      summary: 'Contemporary connective tissue disease management integrates precision medicine approaches with autoantibody-guided prognosis, interferon and B cell pathway targeting, and emerging cellular therapies, while addressing disease heterogeneity through molecular phenotyping and treat-to-target strategies informed by validated outcome measures.',
      explanation: `**Precision Medicine Framework:**

1. **Molecular Subtyping:**

   *SLE Clusters:*
   - Interferon-high inflammatory
   - Lymphopenic/thrombotic
   - Renal-predominant
   - Musculoskeletal-predominant
   - Low-disease activity

   *Myositis Phenotypes:*
   - Antisynthetase syndrome
   - Dermatomyositis (classic, amyopathic)
   - Immune-mediated necrotizing myopathy
   - Inclusion body myositis
   - Cancer-associated myositis

2. **Biomarker-Guided Therapy:**

   *Interferon Signature:*
   - Predicts anifrolumab response
   - May guide therapy selection
   - IFN-high patients benefit most

   *B Cell Markers:*
   - BAFF levels
   - B cell subsets
   - Plasma cell quantification
   - May predict rituximab/belimumab response

   *Complement Biomarkers:*
   - Cell-bound complement (CB-CAPs)
   - Urinary C3d
   - May precede clinical flares

3. **Treat-to-Target in SLE:**

   *DORIS Remission Definition:*
   - Clinical SLEDAI = 0
   - PGA <0.5
   - Prednisone <=5 mg/day
   - Stable immunosuppression

   *LLDAS (Low Disease Activity State):*
   - SLEDAI <=4 (no major organ activity)
   - No new activity
   - PGA <=1
   - Prednisone <=7.5 mg/day

   *Goals:*
   - Achieve remission or LLDAS
   - Minimize steroids
   - Prevent damage accrual
   - Serial SLICC/ACR Damage Index

4. **Novel Therapeutics:**

   *Type I Interferon Pathway:*
   - Anifrolumab: Approved, effective for skin/joints
   - TLR7/8/9 antagonists: In development
   - pDC depletion: Investigational

   *B Cell Targeting:*
   - Belimumab: Approved monoclonal
   - Obinutuzumab: Type II anti-CD20
   - CAR-T (CD19): Remarkable early data
   - Ianalumab: Anti-BAFF receptor

   *Plasma Cells:*
   - Daratumumab: Anti-CD38
   - Proteasome inhibitors
   - Target long-lived plasma cells

   *Complement:*
   - Ravulizumab: Anti-C5 (ongoing trials)
   - APL-2 (pegcetacoplan): C3 inhibitor
   - Anti-C1s (sutimlimab)

5. **CAR-T Cell Therapy:**

   *Mechanism:*
   - Autologous T cells with anti-CD19 chimeric antigen receptor
   - Complete B cell depletion
   - Potential "immune reset"

   *Early Results (SLE):*
   - Deep remissions achieved
   - Drug-free remission in some
   - B cells return but autoantibodies may not
   - Ongoing larger trials

   *Considerations:*
   - CRS risk
   - Cost and availability
   - Long-term durability unknown
   - Patient selection criteria evolving

6. **Organ-Specific Advances:**

   *Lupus Nephritis:*
   - Voclosporin: Approved add-on to MMF
   - Belimumab: Approved for nephritis
   - Obinutuzumab: NOBILITY trial positive
   - Target: Complete response (UPCR <0.5, normal Cr)

   *ILD in CTD:*
   - Nintedanib: Approved for progressive fibrosing ILD
   - Tocilizumab: SSc-ILD skin/lung
   - Combined immunosuppression + antifibrotic

   *Sjogren's Pipeline:*
   - Ianalumab (anti-BAFFR)
   - Iscalimab (anti-CD40)
   - Filgotinib (JAK1)
   - Multiple phase 2/3 trials

7. **Special Populations:**

   *Pediatric CTD:*
   - Juvenile dermatomyositis: Calcinosis risk
   - Pediatric SLE: More aggressive
   - Treatment extrapolated from adult data
   - Growth and development considerations

   *Elderly-Onset:*
   - Consider drug-induced disease
   - Higher malignancy association
   - Comorbidity management
   - Treatment tolerance

   *Refractory Disease:*
   - Define: Active despite standard therapy
   - Options: Novel biologics, trials
   - Multidisciplinary approach
   - Address non-adherence, misdiagnosis`,
      keyTerms: [
        { term: 'DORIS', definition: 'Definitions of Remission in SLE; international consensus on remission criteria' },
        { term: 'LLDAS', definition: 'Lupus Low Disease Activity State; validated minimal disease activity target' },
        { term: 'voclosporin', definition: 'Novel calcineurin inhibitor approved as add-on for lupus nephritis' },
        { term: 'ianalumab', definition: 'Anti-BAFF receptor antibody in development for SLE and Sjogren\'s' },
        { term: 'SLICC/ACR Damage Index', definition: 'Standardized measure of irreversible organ damage in SLE' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- ANA is screening test; negative ANA essentially excludes SLE
- Anti-dsDNA and anti-Smith are specific for SLE
- Anti-SSA associated with neonatal lupus and Sjogren's
- Myositis antibodies predict phenotype: Jo-1 (antisynthetase), MDA5 (ILD), TIF1-gamma (cancer)
- Hydroxychloroquine is foundational therapy for all CTDs
- Belimumab and anifrolumab are approved for SLE
- Voclosporin added to MMF improves lupus nephritis outcomes
- CAR-T therapy showing remarkable results in refractory SLE
- Treat-to-target: Aim for remission or LLDAS
- Drug-induced lupus: ANA positive, anti-histone positive, anti-dsDNA negative`,
    },
  },

  media: [
    {
      id: 'ctd-overlap',
      type: 'diagram',
      filename: 'ctd-overlap-diagram.svg',
      title: 'Connective Tissue Disease Overlap',
      description: 'Venn diagram showing clinical and serologic overlap between CTDs',
    },
    {
      id: 'autoantibody-associations',
      type: 'diagram',
      filename: 'ctd-autoantibody-table.svg',
      title: 'Autoantibody Associations in CTD',
      description: 'Table of autoantibodies and their disease associations',
    },
  ],
  citations: [
    {
      id: 'kaul-2016',
      type: 'article',
      title: 'Systemic lupus erythematosus',
      authors: ['Kaul A', 'Gordon C', 'Crow MK', 'et al.'],
      source: 'Nature Reviews Disease Primers',
      url: 'https://doi.org/10.1038/nrdp.2016.39',
    },
    {
      id: 'lundberg-2021',
      type: 'article',
      title: 'Idiopathic inflammatory myopathies',
      authors: ['Lundberg IE', 'Fujimoto M', 'Vencovsky J', 'et al.'],
      source: 'Nature Reviews Disease Primers',
      url: 'https://doi.org/10.1038/s41572-021-00321-x',
    },
  ],
  crossReferences: [
    { targetId: 'condition-systemic-lupus-erythematosus', targetType: 'condition', relationship: 'child', label: 'Systemic Lupus Erythematosus' },
    { targetId: 'condition-scleroderma', targetType: 'condition', relationship: 'child', label: 'Scleroderma' },
    { targetId: 'topic-autoimmune-serology', targetType: 'topic', relationship: 'related', label: 'Autoimmune Serology' },
  ],
  tags: {
    systems: ['immune', 'musculoskeletal', 'integumentary'],
    topics: ['rheumatology', 'autoimmune disease', 'connective tissue disease'],
    keywords: ['CTD', 'autoimmune', 'SLE', 'scleroderma', 'Sjogren\'s', 'dermatomyositis', 'MCTD'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default connectiveTissueDiseasesContent;
