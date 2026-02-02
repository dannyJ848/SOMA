import { EducationalContent } from '../../types';

export const immunodeficiencyDisordersContent: EducationalContent = {
  id: 'clinical-immunodeficiency-disorders',
  type: 'condition',
  name: 'Immunodeficiency Disorders',
  alternateNames: ['Immune deficiency', 'Immune system disorders', 'Primary immunodeficiency'],

  levels: {
    1: {
      level: 1,
      summary: 'Immunodeficiency disorders are conditions where the immune system does not work properly, making people get sick more often.',
      explanation: `Immunodeficiency means your body has trouble fighting germs. When someone has an immunodeficiency disorder, they get infections more easily than other people.

**Why the Immune System Might Not Work:**

1. **Born With It (Primary)**
   - Some people are born with genes that make their immune system weak
   - This runs in families sometimes
   - Can affect different parts of the immune system

2. **Developed Later (Secondary)**
   - Caused by other health problems
   - Can happen from medicines or treatments
   - May be temporary or permanent

**What Happens:**
- More frequent infections
- Infections that last longer
- Infections that are harder to treat
- May need special medicines or treatments

**Common Signs:**
- Many ear infections
- Frequent pneumonia
- Skin infections that keep coming back
- Needing antibiotics for a long time`,
      keyTerms: [
        { term: 'immunodeficiency', definition: 'A condition where the immune system does not work as well as it should' },
        { term: 'infection', definition: 'When germs get into the body and make you sick' },
        { term: 'immune system', definition: 'The body\'s defense system that fights germs and disease' },
      ],
      analogies: [
        'The immune system is like an army that protects a country. Immunodeficiency is like having a smaller or weaker army that cannot defend against invaders as well.',
        'Think of it like a security system in a house. With immunodeficiency, some of the alarms or locks do not work properly.',
      ],
      examples: [
        'Someone with immunodeficiency might get 8-10 ear infections in one year, while most children get 1-2.',
        'A common cold might last 2 weeks instead of a few days in someone with a weak immune system.',
      ],
    },
    2: {
      level: 2,
      summary: 'Immunodeficiency disorders impair the body\'s ability to fight infections, classified as primary (genetic) or secondary (acquired), leading to increased susceptibility to pathogens.',
      explanation: `Immunodeficiency disorders represent a failure of one or more components of the immune system to function properly. These conditions result in increased frequency, severity, and duration of infections.

**Classification:**

1. **Primary Immunodeficiencies (PIDs)**
   - Genetic/congenital defects
   - Usually present in childhood
   - Affect specific immune components
   - Over 400 recognized disorders

2. **Secondary Immunodeficiencies**
   - Acquired from other conditions
   - More common than primary
   - Often reversible if cause treated
   - Examples: HIV/AIDS, malnutrition, chemotherapy

**Affected Immune Components:**

1. **Humoral (B cell) Deficiencies**
   - Most common type (50-60% of PIDs)
   - Reduced antibody production
   - Susceptible to bacterial infections
   - Example: Common Variable Immunodeficiency (CVID)

2. **Cellular (T cell) Deficiencies**
   - Affect cell-mediated immunity
   - Susceptible to viral and fungal infections
   - Example: Severe Combined Immunodeficiency (SCID)

3. **Phagocytic Disorders**
   - Defective neutrophil function
   - Recurrent bacterial infections
   - Example: Chronic Granulomatous Disease

4. **Complement Deficiencies**
   - Missing complement proteins
   - Susceptible to encapsulated bacteria
   - Example: C3 deficiency`,
      keyTerms: [
        { term: 'primary immunodeficiency', definition: 'Genetic disorders present from birth that affect immune system function' },
        { term: 'secondary immunodeficiency', definition: 'Immune defects acquired from other diseases, treatments, or conditions' },
        { term: 'humoral immunity', definition: 'Immune responses mediated by antibodies produced by B cells' },
        { term: 'cell-mediated immunity', definition: 'Immune responses carried out by T cells' },
        { term: 'phagocyte', definition: 'A cell that engulfs and destroys pathogens, such as neutrophils and macrophages' },
      ],
      analogies: [
        'B cells are like archers shooting arrows (antibodies) at enemies. T cells are like soldiers fighting hand-to-hand. Immunodeficiency can affect either type of fighter.',
        'Complement proteins work like reinforcements called to help in a battle. Without them, the main forces have a harder time winning.',
      ],
    },
    3: {
      level: 3,
      summary: 'Immunodeficiency disorders encompass a diverse group of over 400 genetic and acquired conditions affecting innate and adaptive immunity, requiring sophisticated diagnostic approaches and targeted therapeutic interventions.',
      explanation: `Immunodeficiency disorders result from quantitative or qualitative defects in immune system components. Understanding their pathophysiology guides diagnosis and management.

**Primary Immunodeficiency Categories:**

1. **Antibody Deficiencies (50-60%)**
   
   *Common Variable Immunodeficiency (CVID):*
   - Most common symptomatic PID
   - Reduced IgG, IgA, and/or IgM
   - Normal B cell numbers but defective differentiation
   - Recurrent sinopulmonary infections
   - Autoimmune complications common
   
   *X-linked Agammaglobulinemia (XLA):*
   - BTK gene mutation
   - Absent B cells and all immunoglobulins
   - Presents after maternal antibodies wane (6-9 months)
   - Severe bacterial infections

2. **Combined Immunodeficiencies (20%)**
   
   *Severe Combined Immunodeficiency (SCID):*
   - T cell deficiency with variable B/NK cell involvement
   - "Bubble boy" disease
   - Fatal without hematopoietic stem cell transplant
   - Newborn screening now available
   
   *22q11.2 Deletion Syndrome (DiGeorge):*
   - Thymic hypoplasia
   - Variable T cell deficiency
   - Cardiac anomalies, hypocalcemia

3. **Phagocyte Defects (15%)**
   
   *Chronic Granulomatous Disease (CGD):*
   - NADPH oxidase defects
   - Cannot make reactive oxygen species
   - Catalase-positive organism infections
   - Granuloma formation
   
   *Leukocyte Adhesion Deficiency:*
   - Defective leukocyte migration
   - Delayed umbilical cord separation
   - Poor wound healing

4. **Complement Deficiencies (5%)**
   - Early components (C1-C4): Autoimmune disease
   - Late components (C5-C9): Neisserial infections
   - C3 deficiency: Severe pyogenic infections

**Diagnostic Approach:**

1. **Initial Screening:**
   - Complete blood count with differential
   - Quantitative immunoglobulins (IgG, IgA, IgM)
   - HIV testing
   - Vaccine response assessment

2. **Advanced Testing:**
   - Lymphocyte subset enumeration (CD3, CD4, CD8, CD19, CD16/56)
   - Nitroblue tetrazolium (NBT) test for CGD
   - Complement levels (CH50, AH50)
   - Genetic testing for specific mutations

**Management Principles:**

1. **Infection Prevention:**
   - Prophylactic antibiotics
   - Immunoglobulin replacement (IVIG/SCIG)
   - Avoid live vaccines in severe defects

2. **Definitive Treatment:**
   - Hematopoietic stem cell transplantation for SCID
   - Gene therapy for selected disorders
   - Enzyme replacement (ADA-SCID)`,
      keyTerms: [
        { term: 'CVID', definition: 'Common Variable Immunodeficiency; most common symptomatic PID with reduced immunoglobulins' },
        { term: 'SCID', definition: 'Severe Combined Immunodeficiency; life-threatening T cell deficiency requiring transplant' },
        { term: 'agammaglobulinemia', definition: 'Complete absence of gamma globulins (antibodies) in blood' },
        { term: 'NADPH oxidase', definition: 'Enzyme complex that generates reactive oxygen species for pathogen killing' },
        { term: 'CGD', definition: 'Chronic Granulomatous Disease; inherited defect in phagocyte respiratory burst' },
      ],
      clinicalNotes: 'Early diagnosis is critical for SCID, which is now included in newborn screening panels. CVID patients require regular IVIG and monitoring for complications including bronchiectasis, autoimmune disease, and lymphoma.',
    },
    4: {
      level: 4,
      summary: 'Immunodeficiency disorders involve quantitative or qualitative defects in immune components, requiring comprehensive immunological evaluation and personalized therapeutic strategies including biologics and cellular therapies.',
      explanation: `The diagnosis and management of immunodeficiency disorders requires understanding of immune system development, molecular mechanisms of disease, and evolving therapeutic modalities.

**Molecular Pathophysiology:**

1. **B Cell Development Defects**
   
   *X-linked Agammaglobulinemia:*
   - BTK (Bruton tyrosine kinase) mutations
   - Blocks pre-B cell to immature B cell transition
   - No mature B cells in periphery
   - Normal T cell function
   
   *Hyper-IgM Syndromes:*
   - CD40L deficiency (X-linked) most common
   - Cannot undergo class-switch recombination
   - Elevated IgM, decreased IgG/IgA/IgE
   - Susceptible to Pneumocystis jirovecii

2. **T Cell Development Defects**
   
   *IL2RG (Common Gamma Chain) Deficiency:*
   - Cytokine receptor subunit shared by IL-2, 4, 7, 9, 15, 21
   - Affects T and NK cell development
   - X-linked SCID most common form
   
   *RAG1/RAG2 Deficiency:*
   - Defective V(D)J recombination
   - No T or B cells (NK cells present)
   - Complete absence of adaptive immunity

3. **Phagocyte Function Defects**
   
   *Chronic Granulomatous Disease Mechanisms:*
   - X-linked (gp91phox): 65% of cases
   - Autosomal recessive (p47phox, p67phox, p22phox)
   - Cannot generate superoxide/hydrogen peroxide
   - Defective killing of catalase-positive organisms
   
   *Organism Pattern:*
   - Staphylococcus aureus
   - Burkholderia cepacia
   - Serratia marcescens
   - Nocardia
   - Aspergillus

**Diagnostic Algorithms:**

1. **Initial Evaluation:**
   - Detailed infection history (types, frequency, response)
   - Family history
   - Physical examination (growth, lymphoid tissue)
   - Basic labs: CBC, Ig levels, vaccine responses

2. **Specialized Testing:**
   
   *B Cell Evaluation:*
   - B cell enumeration (CD19/CD20)
   - In vitro immunoglobulin production
   - BTK protein expression (XLA)
   
   *T Cell Evaluation:*
   - Flow cytometry for T cell subsets
   - T cell proliferation assays
   - Cytokine production analysis
   - TRECs (T cell receptor excision circles)
   
   *Phagocyte Evaluation:*
   - Dihydrorhodamine (DHR) flow cytometry assay
   - Neutrophil oxidative burst
   - Chemotaxis assays

**Advanced Therapeutics:**

1. **Immunoglobulin Replacement:**
   - IVIG or SCIG for antibody deficiencies
   - Dosing: 400-600 mg/kg every 3-4 weeks
   - Targets trough IgG >500-800 mg/dL
   - Monitor for adverse reactions

2. **Hematopoietic Stem Cell Transplantation:**
   - Curative for SCID, CGD (severe)
   - Best outcomes with matched sibling donors
   - Reduced intensity conditioning regimens
   - Gene therapy alternative for some

3. **Gene Therapy:**
   - ADA-SCID: Eltrombopag-stimulated HSC collection
   - IL2RG SCID: gammaretroviral or lentiviral vectors
   - Long-term follow-up for insertional mutagenesis`,
      keyTerms: [
        { term: 'BTK', definition: 'Bruton tyrosine kinase; critical for B cell receptor signaling and development' },
        { term: 'V(D)J recombination', definition: 'Genetic recombination process generating diverse antigen receptor genes' },
        { term: 'TREC', definition: 'T cell receptor excision circle; marker of recent thymic emigrants' },
        { term: 'DHR assay', definition: 'Dihydrorhodamine flow cytometry test for neutrophil oxidative burst activity' },
        { term: 'class-switch recombination', definition: 'Process changing antibody isotype while maintaining antigen specificity' },
      ],
      clinicalNotes: 'CVID requires monitoring for complications: bronchiectasis (annual HRCT), autoimmune cytopenias, granulomatous disease, and increased lymphoma risk. CGD patients benefit from prophylactic trimethoprim-sulfamethoxazole and itraconazole.',
    },
    5: {
      level: 5,
      summary: 'Immunodeficiency disorders represent a spectrum of immune system failures requiring precision diagnosis, advanced molecular characterization, and individualized therapeutic approaches including targeted biologics, cellular therapies, and gene correction strategies.',
      explanation: `The field of clinical immunology has evolved to incorporate next-generation sequencing, functional genomics, and personalized therapeutic approaches for complex immunodeficiency disorders.

**Genomic Diagnosis:**

1. **Next-Generation Sequencing Applications**
   
   *Panel-Based Testing:*
   - Targeted gene panels for known PID genes
   - Rapid diagnosis of common disorders
   - Cost-effective screening approach
   
   *Whole Exome/Genome Sequencing:*
   - Identifies novel disease genes
   - Critical for atypical presentations
   - Family-based trio analysis
   - Variant interpretation challenges

2. **Novel Immunodeficiency Mechanisms**
   
   *Gain-of-Function Mutations:*
   - STAT1 GOF: CMC, bacterial infections, autoimmunity
   - STAT3 GOF: Early onset autoimmunity, lymphoproliferation
   - PI3K GOF: APDS (Activated PI3K Delta Syndrome)
   
   *Combined Immunodeficiency with Syndromic Features:*
   - Wiskott-Aldrich syndrome (WASp)
   - IPEX (FOXP3 deficiency)
   - Hyper-IgE syndrome (STAT3 deficiency)

**Advanced Therapeutic Modalities:**

1. **Targeted Biologics:**
   
   *IL-1 Pathway Inhibition:*
   - Anakinra for inflammasomopathies
   - CAPS, DIRA, HA20
   
   *JAK Inhibition:*
   - Ruxolitinib for HLH, immune dysregulation
   - Targeting cytokine storm syndromes
   
   *PI3K Inhibition:*
   - Leniolisib for APDS
   - Precision therapy for specific molecular defect

2. **Cellular Therapies:**
   
   *Gene Therapy Current Status:*
   - Strimvelis for ADA-SCID (approved in EU)
   - Lentiviral vectors reducing insertional risk
   - Conditioning-free approaches for SCID
   - Long-term efficacy data emerging
   
   *CAR-T and Engineered Immunity:*
   - Experimental for refractory infections
   - Allogeneic CMV-specific T cells
   - iPSC-derived immune cells (preclinical)

3. **Transplantation Advances:**
   
   *Haploidentical Transplantation:*
   - TCR alpha/beta depletion
   - CD45RA depletion
   - Improved outcomes without matched donors
   
   *Gene-Corrected Autologous HSC:*
   - Combining gene therapy with transplant
   - Reduced toxicity approaches

**Special Populations:**

1. **Adult-Onset Immunodeficiency:**
   - CVID most common
   - Late presentations of genetic disorders
   - Secondary causes must be excluded
   - Different complication profile

2. **Immunosenescence:**
   - Age-related immune decline
   - Infections in elderly (pneumonia, shingles)
   - Reduced vaccine responses
   - Inflammaging phenomenon

3. **Autoimmune Manifestations:**
   - Common in CVID, APECED
   - Immune dysregulation vs deficiency
   - Paradox of autoimmunity with immune defects
   - Treatment complexities

**Emerging Areas:**

1. **Inborn Errors of Immunity (IEI):*
   - New classification (2022 IUIS)
   - 485+ disorders across 10 categories
   - Includes immune dysregulation, autoinflammation
   
2. **Precision Medicine Approaches:*
   - Mutation-specific therapies
   - Biomarker-guided management
   - Predictive models for complications

3. **Global Health Considerations:*
   - Infections mimicking PIDs in developing world
   - Malnutrition and secondary immunodeficiency
   - Access to advanced diagnostics and therapies`,
      keyTerms: [
        { term: 'GOF mutation', definition: 'Gain-of-function mutation causing constitutive or enhanced protein activity' },
        { term: 'APDS', definition: 'Activated PI3K Delta Syndrome; immune dysregulation from PIK3CD/PIK3R1 mutations' },
        { term: 'inflammasomopathy', definition: 'Autoinflammatory disorder caused by NLRP3 or related inflammasome defects' },
        { term: 'haploidentical transplant', definition: 'Stem cell transplant from half-matched family donor' },
        { term: 'IEI', definition: 'Inborn Errors of Immunity; updated nomenclature encompassing immunodeficiency, dysregulation, and autoinflammation' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- TREC screening identifies SCID in newborns; requires immediate referral
- CVID: Monitor IgG trough, lung function, CT for bronchiectasis
- CGD: DHR assay replaces NBT; prophylaxis with TMP-SMX + itraconazole
- XLA: No live vaccines; IVIG lifelong; enteroviral meningoencephalitis risk
- SCID: HSCT before infections if possible; gene therapy for ADA-deficiency
- Warning signs: >8 ear infections/year, >2 pneumonia/year, need for IV antibiotics
- Complications of IVIG: Aseptic meningitis, thrombosis, hemolysis, renal toxicity`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['clinical', 'immunology', 'pathology'],
    keywords: ['immunodeficiency', 'CVID', 'SCID', 'primary immunodeficiency'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default immunodeficiencyDisordersContent;
