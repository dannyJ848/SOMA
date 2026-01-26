import { EducationalContent } from '../../types';

export const immunodeficiencyDisordersContent: EducationalContent = {
  id: 'allergy-immunology-immunodeficiency-disorders',
  type: 'condition',
  name: 'Immunodeficiency Disorders',
  alternateNames: ['Primary Immunodeficiency', 'Immune Deficiency', 'PID', 'Inborn Errors of Immunity'],

  levels: {
    1: {
      level: 1,
      summary: 'Immunodeficiency disorders occur when parts of the immune system are missing or not working properly, making it harder for the body to fight infections.',
      explanation: `Immunodeficiency means your immune system is not as strong as it should be. This can be something you are born with (primary) or something that develops later (secondary).

**Types of Immunodeficiency:**

**Primary (Born With):**
- Genetic problems affecting immune cells
- Present from birth but may not be diagnosed until later
- Examples: SCID, common variable immunodeficiency

**Secondary (Develops Later):**
- Caused by other conditions or treatments
- HIV/AIDS
- Chemotherapy for cancer
- Medications that suppress the immune system

**Warning Signs of Immunodeficiency:**
1. Frequent infections (more than usual)
2. Severe infections that don't respond to treatment
3. Unusual infections (germs that rarely cause illness in healthy people)
4. Infections that keep coming back
5. Poor growth in children

**The "10 Warning Signs" (Jeffrey Modell Foundation):**
1. 4+ ear infections in one year
2. 2+ serious sinus infections in one year
3. 2+ months on antibiotics with little effect
4. 2+ pneumonias in one year
5. Failure to thrive (poor weight gain/growth)
6. Recurrent deep skin or organ abscesses
7. Persistent thrush or fungal infections
8. Need for IV antibiotics to clear infections
9. 2+ deep-seated infections
10. Family history of primary immunodeficiency

**Treatment:**
- Antibiotics to treat and prevent infections
- Immunoglobulin replacement (giving antibodies)
- In some cases, bone marrow transplant
- Gene therapy (for certain conditions)`,
      keyTerms: [
        { term: 'immunodeficiency', definition: 'When the immune system is weaker than normal' },
        { term: 'antibodies', definition: 'Proteins made by the immune system to fight germs' },
        { term: 'immunoglobulin', definition: 'Another name for antibodies, given as treatment' },
        { term: 'bone marrow transplant', definition: 'Replacing faulty immune cells with healthy ones from a donor' },
      ],
      analogies: [
        'Having immunodeficiency is like having a security system with missing cameras or broken locks - intruders (germs) can get in more easily.',
        'Immunoglobulin replacement is like hiring a security team to protect you because your own guards aren\'t working.',
      ],
      examples: [
        'A child with SCID (severe combined immunodeficiency) gets sick from infections that wouldn\'t affect a healthy child.',
        'Someone with common variable immunodeficiency gets pneumonia several times a year and needs regular immunoglobulin infusions.',
      ],
    },
    2: {
      level: 2,
      summary: 'Primary immunodeficiencies are genetic disorders affecting immune system components, classified by the arm of immunity affected (B cells, T cells, phagocytes, complement), presenting with recurrent infections and managed with prophylaxis, immunoglobulin replacement, or transplant.',
      explanation: `Primary immunodeficiencies (PIDs) represent over 400 genetic disorders affecting various components of the immune system, with presentations ranging from recurrent infections to autoimmunity.

**Classification by Immune Component:**

**Antibody (B Cell) Deficiencies (~65%):**
- Most common category
- Recurrent sinopulmonary infections
- Encapsulated bacteria: S. pneumoniae, H. influenzae
- Examples: CVID, XLA, selective IgA deficiency

**Combined Immunodeficiencies (~15%):**
- T and B cell dysfunction
- Severe, early-onset infections
- Opportunistic infections
- Example: SCID (severe combined immunodeficiency)

**Phagocyte Disorders (~10%):**
- Neutrophil number or function defects
- Bacterial and fungal infections
- Skin/soft tissue, lymph node, liver abscesses
- Examples: Chronic granulomatous disease (CGD), LAD

**Complement Deficiencies (~5%):**
- Encapsulated bacteria (early components)
- Neisseria infections (late components)
- Autoimmune diseases (early components)

**Innate Immune Defects:**
- Defects in pattern recognition, signaling
- Variable presentations

**Common Presentations by Pathogen:**

| Pathogen Type | Immune Defect |
|---------------|---------------|
| Encapsulated bacteria | Antibody, complement |
| Staphylococcus, Aspergillus | Phagocyte (CGD) |
| Opportunistic (PCP, CMV) | T cell (combined) |
| Neisseria (meningitis, gonorrhea) | Terminal complement |
| Mycobacteria | T cell, IFN-γ/IL-12 axis |

**Key Immunodeficiencies:**

**CVID (Common Variable Immunodeficiency):**
- Low IgG + low IgA and/or IgM
- Poor vaccine responses
- Age of onset: 20-40 years typically
- Treatment: Immunoglobulin replacement

**XLA (X-Linked Agammaglobulinemia):**
- Bruton tyrosine kinase (BTK) mutation
- Absent B cells and immunoglobulins
- Males, presents in infancy
- Treatment: Immunoglobulin replacement

**SCID:**
- Multiple genetic causes (IL2RG, ADA, RAG1/2)
- Absent/dysfunctional T cells
- B cells present but non-functional
- Life-threatening infections in infancy
- Treatment: Bone marrow transplant, gene therapy

**CGD (Chronic Granulomatous Disease):**
- NADPH oxidase defect
- Impaired oxidative burst in phagocytes
- Catalase-positive organisms: Staph aureus, Aspergillus
- Granuloma formation

**Diagnostic Approach:**
- Complete blood count with differential
- Immunoglobulin levels (IgG, IgA, IgM)
- Vaccine responses (pneumococcal, tetanus)
- Lymphocyte subsets (CD3, CD4, CD8, CD19, CD16/56)
- Complement studies (CH50, AH50)
- Specialized tests based on suspected defect`,
      keyTerms: [
        { term: 'CVID', definition: 'Common variable immunodeficiency; most common symptomatic PID in adults' },
        { term: 'SCID', definition: 'Severe combined immunodeficiency; lack of functional T cells and humoral immunity' },
        { term: 'XLA', definition: 'X-linked agammaglobulinemia; absence of B cells due to BTK mutation' },
        { term: 'CGD', definition: 'Chronic granulomatous disease; phagocyte oxidative burst defect' },
        { term: 'CH50', definition: 'Complement hemolytic 50; screens for classical complement pathway' },
      ],
      analogies: [
        'SCID is like having no army at all - both infantry (T cells) and artillery (B cell-derived antibodies) are missing.',
        'CGD is like firefighters who can get to the fire but their hoses don\'t work - neutrophils reach the bacteria but can\'t kill them.',
      ],
    },
    3: {
      level: 3,
      summary: 'Primary immunodeficiencies encompass over 400 inborn errors of immunity with monogenic defects affecting humoral, cellular, phagocyte, or complement function, diagnosed through immunophenotyping, functional assays, and genetic testing, with management including immunoglobulin replacement, antimicrobial prophylaxis, and curative hematopoietic stem cell transplant.',
      explanation: `Inborn errors of immunity (IEIs) represent a growing category of genetic disorders with diverse clinical manifestations beyond susceptibility to infection.

**Updated IUIS Classification (2022):**

1. Immunodeficiencies affecting cellular and humoral immunity
2. Combined immunodeficiencies with syndromic features
3. Predominantly antibody deficiencies
4. Diseases of immune dysregulation
5. Congenital defects of phagocyte number/function
6. Defects in intrinsic and innate immunity
7. Autoinflammatory disorders
8. Complement deficiencies
9. Bone marrow failure
10. Phenocopies of IEI

**Antibody Deficiencies - Detailed:**

**CVID:**
- Heterogeneous disorder, multiple genetic causes
- Marked decrease in IgG (<2 SD below mean)
- Low IgA and/or IgM
- Poor/absent specific antibody responses
- Exclusion of other causes
- Complications: Bronchiectasis, autoimmunity, lymphoproliferation, granulomas

**Specific Antibody Deficiency:**
- Normal immunoglobulin levels
- Poor response to polysaccharide vaccines
- Consider if recurrent sinopulmonary infections

**IgA Deficiency:**
- Most common PID (1:300-1:500)
- IgA <7 mg/dL
- Most asymptomatic
- Associated with celiac disease, autoimmunity
- Risk of reactions to blood products

**Combined Immunodeficiencies:**

**SCID Variants:**

| Type | Gene | Inheritance | T/B/NK |
|------|------|-------------|--------|
| X-linked SCID | IL2RG | XL | T-B+NK- |
| ADA deficiency | ADA | AR | T-B-NK- |
| RAG1/2 deficiency | RAG1/2 | AR | T-B-NK+ |
| Artemis deficiency | DCLRE1C | AR | T-B-NK+ |
| JAK3 deficiency | JAK3 | AR | T-B+NK- |

**Newborn Screening:**
- T-cell receptor excision circles (TRECs)
- Detects T-cell lymphopenia
- Identifies SCID before severe infections
- Enables early transplant (best outcomes)

**Phagocyte Disorders:**

**CGD:**
- NADPH oxidase mutations (CYBB, NCF1, NCF2, CYBA)
- X-linked (CYBB, ~70%) or autosomal recessive
- DHR (dihydrorhodamine) flow cytometry: Diagnostic
- Prophylaxis: TMP-SMX, itraconazole, IFN-γ

**Leukocyte Adhesion Deficiency (LAD):**
- Type 1: CD18 deficiency (integrin β2)
- Delayed umbilical cord separation
- Severe bacterial infections without pus
- Very high neutrophil counts

**Complement Deficiencies:**

| Component | Infections | Autoimmune |
|-----------|------------|------------|
| C1, C2, C4 | Encapsulated | SLE, vasculitis |
| C3 | Severe pyogenic | Nephritis |
| C5-C9 | Neisseria | Rare |
| MBL | Variable | Variable |
| Factors H, I | Encapsulated | aHUS, C3GN |

**Immune Dysregulation Syndromes:**

**ALPS (Autoimmune Lymphoproliferative Syndrome):**
- FAS/FASL pathway defects
- Defective lymphocyte apoptosis
- Lymphadenopathy, splenomegaly
- Autoimmune cytopenias
- Elevated double-negative T cells

**IPEX (Immune Dysregulation, Polyendocrinopathy, Enteropathy, X-linked):**
- FOXP3 mutation
- Treg deficiency
- Early-onset enteropathy, diabetes, dermatitis
- Usually fatal without HSCT

**Diagnostic Workup:**

*First-Line:*
- CBC with differential
- Quantitative immunoglobulins
- Specific antibody titers (pre/post-vaccine)

*Second-Line:*
- Lymphocyte subsets (T, B, NK)
- T cell proliferation to mitogens
- DHR test (phagocyte function)
- CH50, AH50 (complement)

*Genetic Testing:*
- Targeted gene panels
- Whole exome/genome sequencing
- Enables definitive diagnosis`,
      keyTerms: [
        { term: 'IUIS', definition: 'International Union of Immunological Societies; maintains IEI classification' },
        { term: 'TRECs', definition: 'T-cell receptor excision circles; byproduct of TCR rearrangement used for newborn screening' },
        { term: 'DHR test', definition: 'Dihydrorhodamine flow cytometry; diagnostic test for CGD measuring oxidative burst' },
        { term: 'ALPS', definition: 'Autoimmune lymphoproliferative syndrome; FAS pathway defect causing lymphoproliferation and autoimmunity' },
        { term: 'IPEX', definition: 'Immune dysregulation syndrome from FOXP3 mutation causing Treg deficiency' },
        { term: 'double-negative T cells', definition: 'CD4-CD8- T cells; elevated in ALPS' },
      ],
      clinicalNotes: 'Newborn SCID screening via TRECs has improved outcomes dramatically. CVID has multiple phenotypes: infection-only, autoimmune, lymphoproliferative, granulomatous. CGD: Think catalase-positive organisms (Staph, Aspergillus, Burkholderia). IgA deficiency: Warn about transfusion reactions. Always check vaccine responses in suspected antibody deficiency.',
    },
    4: {
      level: 4,
      summary: 'Inborn errors of immunity represent monogenic defects with defined molecular mechanisms affecting immune development, signaling, or effector function, diagnosed through integrated clinical, immunophenotypic, functional, and genetic evaluation, with management ranging from immunoglobulin replacement to hematopoietic stem cell transplant and emerging gene therapies.',
      explanation: `Advanced understanding of IEIs integrates molecular pathogenesis with precision diagnostics and targeted therapeutics.

**Molecular Mechanisms:**

**Developmental Defects:**

*Lymphoid Development:*
- ADA: Accumulation of toxic metabolites → lymphocyte death
- RAG1/2: Defective V(D)J recombination → no TCR/BCR diversity
- IL2RG (common γ chain): Disrupted cytokine signaling (IL-2, 4, 7, 9, 15, 21)
- BTK: B cell receptor signaling → arrest at pre-B stage

*Thymic Development:*
- DiGeorge syndrome: 22q11.2 deletion, thymic hypoplasia
- FOXN1 deficiency: Nude/SCID phenotype

**Signaling Defects:**

*JAK-STAT Pathway:*
- JAK3 deficiency: Mimics X-SCID (shared pathway)
- STAT3 LOF: Hyper-IgE syndrome (Job syndrome)
- STAT3 GOF: Early-onset autoimmunity
- STAT1 GOF: Chronic mucocutaneous candidiasis

*TLR Signaling:*
- IRAK4, MyD88 deficiency: Pyogenic bacterial susceptibility
- TLR3 pathway: HSV encephalitis

**Effector Function Defects:**

*Cytotoxicity:*
- Perforin (PRF1): Familial HLH
- Munc13-4, Syntaxin-11: Degranulation defects
- SH2D1A (SAP): XLP, EBV susceptibility

*Phagocyte Function:*
- NADPH oxidase: CGD
- G6PD (severe): Chronic hemolysis and infections
- Glucose-6-phosphate translocase: Neutropenia and infections

**Immune Dysregulation Mechanisms:**

**Regulatory T Cell Defects:**
- FOXP3 (IPEX): Treg development
- CD25 (IL2RA): IL-2 signaling in Tregs
- CTLA-4: Checkpoint, Treg function
- LRBA: CTLA-4 trafficking

**Apoptosis Defects:**
- FAS, FASL, Caspase 10, 8: ALPS
- CASP8: ALPS-like + immunodeficiency

**Advanced Diagnostics:**

**Functional Assays:**

*Lymphocyte Function:*
- Proliferation to mitogens (PHA, ConA)
- Proliferation to antigens (Candida, tetanus)
- Cytokine production (IFN-γ, IL-17)
- Cytotoxicity assays (NK function)

*Phagocyte Function:*
- DHR/NBT test (oxidative burst)
- Chemotaxis assays
- Phagocytosis assays

*Complement Function:*
- CH50: Classical pathway
- AH50: Alternative pathway
- Individual component levels

**Flow Cytometry Panels:**

| Phenotype | Key Markers |
|-----------|-------------|
| T cells | CD3, CD4, CD8, CD45RA/RO, CD31 |
| B cells | CD19, CD20, CD27, IgM, IgD |
| NK cells | CD16, CD56 |
| Tregs | CD4, CD25, FOXP3 |
| Memory | CD45RO, CCR7 |
| Recent thymic emigrants | CD4, CD45RA, CD31 |

**Genetic Testing:**

*Approaches:*
- Targeted panels (PID-focused)
- Clinical exome
- Whole exome sequencing (WES)
- Whole genome sequencing (WGS)
- RNA sequencing (for splicing variants)

*Variant Interpretation:*
- ACMG criteria
- Functional validation important
- VUS management challenging

**Therapeutic Advances:**

**Immunoglobulin Replacement:**
- IVIG: IV every 3-4 weeks
- SCIG: Subcutaneous weekly or biweekly
- Trough levels: Target >500-800 mg/dL
- Reduces infections in antibody deficiencies

**Hematopoietic Stem Cell Transplant:**

*Indications:*
- SCID (standard of care)
- CGD (for severe phenotype)
- WAS (severe)
- Selected combined deficiencies

*Outcomes:*
- SCID: Best if <3.5 months, no infections
- Matched sibling donor preferred
- Gene-corrected autologous emerging

**Gene Therapy:**

*Approved/Advanced:*
- ADA-SCID: Lentiviral gene therapy (Strimvelis)
- X-SCID: Lentiviral vector (clinical trials)
- CGD: Lentiviral (investigational)
- Artemis SCID: In development

*Approach:*
- Autologous HSCs transduced ex vivo
- No donor needed
- Reduced GVHD risk
- Insertional mutagenesis concerns (older vectors)

**Targeted Therapies:**

| Defect | Targeted Therapy |
|--------|-----------------|
| CTLA-4 haploinsufficiency | Abatacept (CTLA-4-Ig) |
| PI3K overactivation (APDS) | PI3K inhibitors (leniolisib) |
| JAK-STAT GOF | JAK inhibitors |
| STAT1 GOF | JAK inhibitors, ruxolitinib |`,
      keyTerms: [
        { term: 'common gamma chain', definition: 'IL2RG; shared cytokine receptor subunit, defective in X-SCID' },
        { term: 'V(D)J recombination', definition: 'Process generating antigen receptor diversity; defective in RAG deficiency' },
        { term: 'APDS', definition: 'Activated PI3K delta syndrome; gain-of-function mutation causing combined immunodeficiency' },
        { term: 'HLH', definition: 'Hemophagocytic lymphohistiocytosis; hyperinflammatory syndrome from cytotoxicity defects' },
        { term: 'XLP', definition: 'X-linked lymphoproliferative disease; SAP deficiency causing EBV susceptibility' },
        { term: 'insertional mutagenesis', definition: 'Risk of leukemia from retroviral vector integration near oncogenes' },
      ],
      clinicalNotes: 'SCID newborn screening has revolutionized outcomes. JAK inhibitors emerging for STAT GOF diseases. CTLA-4 and LRBA deficiency treatable with abatacept. Gene therapy offering cure for selected SCID types. Consider IEI in recurrent infections, autoimmunity, lymphoproliferation, or unusual infections.',
    },
    5: {
      level: 5,
      summary: 'Inborn errors of immunity comprise over 400 monogenic disorders with defined molecular mechanisms affecting all aspects of immune function, requiring integrated multimodal diagnostics and personalized therapeutics including immunoglobulin replacement, antimicrobial prophylaxis, targeted biologics, HSCT, and gene therapy, with ongoing expansion of phenotypes beyond classical infection susceptibility.',
      explanation: `Comprehensive management of IEIs requires synthesis of molecular immunology, advanced diagnostics, and evolving therapeutic options to optimize patient outcomes.

**Expanding IEI Landscape:**

**Beyond Infection Susceptibility:**

*Autoimmunity:*
- CVID: 20-30% develop autoimmune complications
- ALPS: Autoimmune cytopenias
- IPEX: Multi-organ autoimmunity
- APECED: Endocrine autoimmunity

*Autoinflammation:*
- CAPS (Cryopyrin-associated): IL-1-mediated
- FMF: Pyrin inflammasome
- TRAPS: TNF receptor
- Overlap with IEI (PLAID, APLAID)

*Malignancy:*
- Increased lymphoma risk in some IEIs
- CVID: Lymphoma, gastric cancer
- Ataxia-telangiectasia: Lymphoid malignancies
- XLP: EBV-driven lymphoma

*Allergic Disease:*
- DOCK8 deficiency: Severe atopy, eosinophilia
- STAT3 LOF (HIES): Elevated IgE, eczema
- PGM3 deficiency: Hyper-IgE phenotype

**Precision Diagnostics:**

**Diagnostic Algorithm:**

*Clinical Phenotyping:*
- Pattern of infections (bacterial, viral, fungal, opportunistic)
- Affected organs (lungs, skin, GI, CNS)
- Associated features (autoimmunity, malignancy, atopy)
- Family history and inheritance pattern

*Laboratory Pathway:*
1. Screen: CBC, Ig levels, vaccine titers
2. Characterize: Lymphocyte subsets, functional assays
3. Identify: Genetic testing

**Advanced Flow Cytometry:**

| Assessment | Clinical Utility |
|------------|-----------------|
| Naive/memory T cells | T cell lymphopenia characterization |
| Recent thymic emigrants | Thymic output assessment |
| Switched memory B cells | Class switch defects (CVID, HIGM) |
| FOXP3+ Tregs | IPEX, CTLA-4 defects |
| SAP expression | XLP diagnosis |
| XIAP expression | XLP2 diagnosis |
| CTLA-4 upregulation | CTLA-4/LRBA defects |
| DHR | CGD |

**Genetic Testing Considerations:**

*When to Suspect Novel Gene:*
- Unexplained phenotype
- Negative panel/exome
- Strong family history
- Consanguinity

*Variant Interpretation Challenges:*
- VUS common
- Need functional validation
- Consider RNA analysis
- Phenotype-genotype correlation

**Therapeutic Precision:**

**HSCT in IEI:**

*Transplant Considerations:*

| Factor | Impact |
|--------|--------|
| Age at transplant | Younger = better (SCID <3.5 mo optimal) |
| Infection status | Active infection = worse outcomes |
| Donor type | MSD > MUD > Haplo (varies by disease) |
| Conditioning | Disease-specific protocols |
| Gene-corrected auto | Emerging option |

*Disease-Specific Outcomes:*
- SCID: 90%+ survival with early MSD
- CGD: 85-90% survival with matched donor
- WAS: 80-90% survival
- IPEX: 70-80% survival

**Gene Therapy Era:**

*Current Landscape:*
- ADA-SCID: Approved (Strimvelis, EU)
- X-SCID: Advanced trials, lentiviral
- Artemis SCID: In development
- CGD: Investigational
- WAS: Investigational

*Technology Evolution:*
- γ-retroviral → Lentiviral (safer integration)
- In vivo gene therapy emerging
- Gene editing (CRISPR) in development

*Challenges:*
- Limited availability
- High cost
- Long-term monitoring needed
- Some diseases not yet addressable

**Targeted Biologics:**

| Target/Disease | Drug | Mechanism |
|---------------|------|-----------|
| CTLA-4/LRBA deficiency | Abatacept | CTLA-4 replacement |
| APDS (PI3K GOF) | Leniolisib | PI3Kδ inhibitor |
| STAT1/3 GOF | Ruxolitinib | JAK inhibitor |
| ALPS | Sirolimus | mTOR inhibitor |
| NEMO deficiency | Supportive | No specific therapy |
| HLH | Emapalumab | Anti-IFN-γ |

**Special Populations:**

**Adults with IEI:**
- Many PIDs diagnosed in adulthood (CVID, SAD)
- Consider in recurrent sinopulmonary infections
- May have decade of symptoms before diagnosis
- Complications: Bronchiectasis, autoimmunity

**Pregnancy in IEI:**
- IVIG safe in pregnancy
- Adjust for increased blood volume
- Monitor Ig levels
- Genetic counseling for offspring

**Transitional Care:**
- Pediatric to adult care transition
- Education about condition
- Maintain prophylaxis adherence
- Long-term complication monitoring

**Future Directions:**

*Novel Therapeutics:*
- In vivo gene therapy
- Gene editing
- Small molecule correctors
- Thymus transplantation

*Expanded Screening:*
- B cell and NK cell screening (beyond TRECs)
- Broader newborn screening panels
- Preimplantation genetic diagnosis

*Phenotype Expansion:*
- Recognition of incomplete/atypical forms
- Adult-onset disease
- Somatic mosaicism

**Case Integration:**

*Case: 6-month-old with recurrent pneumonia, thrush, FTT*

*Workup:*
- CBC: Lymphopenia (300/μL)
- Subsets: T cells absent, B cells present, NK cells absent
- Immunoglobulins: Low/absent

*Diagnosis:* X-SCID (IL2RG mutation confirmed)

*Management:*
- Protective isolation
- PJP prophylaxis
- CMV screening
- IVIG until transplant
- Expedited HSCT (MSD/MUD) or gene therapy

*Key Points:*
- Early diagnosis via newborn screen = best outcomes
- T-B+NK- phenotype = think γc chain defects
- Don't give live vaccines
- Family screening (X-linked)`,
      keyTerms: [
        { term: 'Strimvelis', definition: 'First approved gene therapy for ADA-SCID using autologous CD34+ cells' },
        { term: 'leniolisib', definition: 'PI3Kδ inhibitor approved for APDS (activated PI3K delta syndrome)' },
        { term: 'emapalumab', definition: 'Anti-IFN-γ monoclonal antibody approved for primary HLH' },
        { term: 'somatic mosaicism', definition: 'Post-zygotic mutations affecting subset of cells, causing variable IEI phenotypes' },
        { term: 'switched memory B cells', definition: 'CD27+IgM-IgD- B cells indicating successful class switch recombination' },
        { term: 'PLAID/APLAID', definition: 'PLCγ2-associated disorders with autoinflammation and immunodeficiency' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- SCID: Early transplant (<3.5 months, no infections) = best outcomes
- Newborn screening: TRECs detect T cell lymphopenia
- CVID: Low IgG + (low IgA or IgM) + poor vaccine response + exclude secondary
- XLA: Male, no B cells, BTK mutation
- CGD: DHR test diagnostic; catalase-positive organisms
- Terminal complement (C5-9): Recurrent Neisseria
- ALPS: Elevated double-negative T cells, FAS pathway
- IPEX: FOXP3, early-onset enteropathy/diabetes/dermatitis
- Gene therapy: ADA-SCID approved, X-SCID in advanced trials
- Abatacept for CTLA-4/LRBA deficiency
- Always consider IEI in unexplained autoimmunity or unusual infections`,
    },
  },

  media: [
    {
      id: 'pid-classification',
      type: 'diagram',
      filename: 'immunodeficiency-classification.svg',
      title: 'Primary Immunodeficiency Classification',
      description: 'IUIS classification of inborn errors of immunity',
    },
    {
      id: 'pid-diagnostic-algorithm',
      type: 'diagram',
      filename: 'pid-workup.svg',
      title: 'Primary Immunodeficiency Diagnostic Workup',
      description: 'Step-wise approach to evaluating suspected immunodeficiency',
    },
  ],
  citations: [
    {
      id: 'iuis-classification',
      type: 'article',
      title: 'Human Inborn Errors of Immunity: 2022 Update on the Classification',
      authors: ['Tangye SG', 'Al-Herz W', 'Bousfiha A'],
      source: 'Journal of Clinical Immunology',
    },
    {
      id: 'scid-newborn-screening',
      type: 'article',
      title: 'Newborn Screening for Severe Combined Immunodeficiency',
      authors: ['Kwan A', 'Puck JM'],
      source: 'Current Opinion in Pediatrics',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-immune-system-overview', targetType: 'concept', relationship: 'parent', label: 'Immune System Overview' },
    { targetId: 'allergy-immunology-autoimmune-principles', targetType: 'concept', relationship: 'related', label: 'Autoimmune Principles' },
    { targetId: 'allergy-immunology-allergy-testing', targetType: 'concept', relationship: 'see-also', label: 'Allergy Testing' },
  ],
  tags: {
    systems: ['immune', 'hematologic'],
    topics: ['immunology', 'genetics', 'pediatrics', 'infectious disease'],
    keywords: ['immunodeficiency', 'SCID', 'CVID', 'CGD', 'gene therapy', 'HSCT', 'inborn errors of immunity'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'medicine'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immunodeficiencyDisordersContent;
