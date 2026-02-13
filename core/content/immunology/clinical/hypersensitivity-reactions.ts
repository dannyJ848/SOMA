import { EducationalContent } from '../../types';

export const hypersensitivityReactionsContent: EducationalContent = {
  id: 'clinical-hypersensitivity-reactions',
  type: 'concept',
  name: 'Hypersensitivity Reactions',
  alternateNames: ['Allergic reactions', 'Immune hypersensitivity', 'Gell and Coombs classification'],

  levels: {
    1: {
      level: 1,
      summary: 'Hypersensitivity reactions are when the immune system overreacts to something harmless, causing problems ranging from mild allergies to serious reactions.',
      explanation: `Sometimes the immune system reacts too strongly to things that are not really dangerous. This is called hypersensitivity. It can cause anything from a runny nose to a life-threatening emergency.

**Four Types of Hypersensitivity:**

1. **Type 1 - Immediate (IgE-mediated)**
   - Happens within minutes
   - Causes hay fever, hives, peanut allergies
   - Can cause anaphylaxis (severe reaction)

2. **Type 2 - Cytotoxic**
   - Antibodies attack the body\'s own cells
   - Causes some blood disorders

3. **Type 3 - Immune Complex**
   - Clumps of antibodies cause inflammation
   - Can affect joints, skin, kidneys

4. **Type 4 - Delayed (T cell-mediated)**
   - Takes 24-72 hours to appear
   - Poison ivy, some medication rashes

**Common Examples:**
- Pollen allergies (Type 1)
- Blood transfusion reactions (Type 2)
- Lupus (Type 3)
- TB skin test (Type 4)`,
      keyTerms: [
        { term: 'hypersensitivity', definition: 'An exaggerated or inappropriate immune response to a substance' },
        { term: 'allergy', definition: 'A type of hypersensitivity reaction to normally harmless substances' },
        { term: 'anaphylaxis', definition: 'A severe, life-threatening allergic reaction affecting multiple body systems' },
      ],
      analogies: [
        'Hypersensitivity is like a fire alarm that goes off when there is just a little smoke from toast - it overreacts to a small problem.',
        'Think of it as a security system that is set too sensitive, triggering alerts for things that are not actual threats.',
      ],
      examples: [
        'Eating peanuts when allergic can cause throat swelling and trouble breathing within minutes.',
        'Poison ivy rash appears 1-3 days after touching the plant, not immediately.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hypersensitivity reactions are classified by Gell and Coombs into four types based on immunological mechanisms: IgE-mediated, antibody-mediated, immune complex-mediated, and T cell-mediated reactions.',
      explanation: `The Gell and Coombs classification system categorizes immune-mediated tissue damage into four distinct types based on the underlying immunological mechanisms.

**Type I: Immediate Hypersensitivity (IgE-mediated)**

1. **Mechanism:**
   - Sensitization: IgE production to allergen
   - IgE binds to Fc epsilon RI on mast cells/basophils
   - Re-exposure: Cross-linking of IgE triggers degranulation
   - Release: Histamine, leukotrienes, prostaglandins, cytokines

2. **Timing:** Minutes (immediate)

3. **Clinical Examples:**
   - Allergic rhinitis (hay fever)
   - Allergic asthma
   - Urticaria (hives)
   - Anaphylaxis
   - Food allergies

**Type II: Cytotoxic Hypersensitivity (Antibody-mediated)**

1. **Mechanism:**
   - IgG or IgM against cell surface antigens
   - Complement activation
   - Opsonization for phagocytosis
   - Antibody-dependent cellular cytotoxicity (ADCC)

2. **Timing:** Hours

3. **Clinical Examples:**
   - Autoimmune hemolytic anemia
   - Immune thrombocytopenia
   - Goodpasture syndrome
   - Myasthenia gravis
   - ABO transfusion reactions

**Type III: Immune Complex Hypersensitivity**

1. **Mechanism:**
   - Antigen-antibody complexes form
   - Deposited in tissues
   - Complement activation (C5a recruitment)
   - Neutrophil infiltration and damage

2. **Timing:** Hours to days

3. **Clinical Examples:**
   - Serum sickness
   - Arthus reaction
   - Lupus nephritis
   - Post-streptococcal glomerulonephritis
   - Rheumatoid arthritis (joints)

**Type IV: Delayed-Type Hypersensitivity (T cell-mediated)**

1. **Mechanism:**
   - Sensitized T cells (CD4+ Th1, CD8+)
   - Cytokine release (IFN-gamma, TNF)
   - Macrophage activation
   - Direct cytotoxicity

2. **Timing:** 24-72 hours

3. **Clinical Examples:**
   - Contact dermatitis (poison ivy)
   - Tuberculin skin test
   - Granuloma formation (TB, sarcoid)
   - Type 1 diabetes (pancreatic beta cells)
   - Multiple sclerosis`,
      keyTerms: [
        { term: 'IgE', definition: 'Immunoglobulin E; antibody class involved in allergic reactions and parasitic immunity' },
        { term: 'mast cell', definition: 'Tissue-resident immune cell containing granules with histamine and other mediators' },
        { term: 'immune complex', definition: 'Antigen-antibody aggregates that can deposit in tissues and cause inflammation' },
        { term: 'Fc receptor', definition: 'Cell surface receptor that binds to the constant region of antibodies' },
        { term: 'Arthus reaction', definition: 'Localized immune complex-mediated vasculitis at antigen injection site' },
      ],
      analogies: [
        'Type I is like a bomb going off immediately when triggered. Type IV is more like a slow-burning fire that builds up over time.',
        'Types II and III are like friendly fire - your own antibodies attacking your body instead of just protecting it.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hypersensitivity reactions represent distinct immunopathological mechanisms involving IgE-mediated mast cell activation, complement-fixing antibodies, soluble immune complex deposition, or cell-mediated cytotoxicity, with specific diagnostic and therapeutic implications.',
      explanation: `Understanding the molecular mechanisms of hypersensitivity reactions enables accurate diagnosis and targeted therapeutic interventions for immune-mediated diseases.

**Type I: Immediate Hypersensitivity - Detailed Mechanisms**

1. **Sensitization Phase:**
   - Allergen uptake by dendritic cells
   - Th2 differentiation (IL-4 driven)
   - B cell class-switching to IgE
   - IgE binds Fc epsilon RI on mast cells
   - Mast cells "armed" for weeks to months

2. **Effector Phase - Early:**
   - Allergen cross-links IgE on mast cells
   - Fc epsilon RI aggregation
   - Syk kinase activation
   - Degranulation (pre-formed mediators):
     * Histamine: Vasodilation, bronchospasm, pruritus
     * Tryptase: Marker of mast cell activation
     * Heparin: Anticoagulant effects
   
3. **Effector Phase - Late:**
   - Newly synthesized mediators:
     * Leukotrienes (LTC4, LTD4, LTE4): Bronchospasm
     * Prostaglandin D2: Vasodilation, chemotaxis
     * Platelet-activating factor: Anaphylaxis
   - Cytokine release (TNF, IL-4, IL-5, IL-13)
   - Eosinophil recruitment (hours)

4. **Clinical Manifestations:**
   - Cutaneous: Urticaria, angioedema, flushing
   - Respiratory: Bronchospasm, rhinorrhea, laryngeal edema
   - Cardiovascular: Hypotension, tachycardia, shock
   - GI: Nausea, vomiting, diarrhea, cramping

**Type II: Cytotoxic Hypersensitivity - Detailed Mechanisms**

1. **Antibody Targets:**
   - Cell surface proteins (RBCs, platelets)
   - Basement membrane components
   - Cell surface receptors

2. **Effector Mechanisms:**
   
   *Complement Activation:*
   - Classical pathway activation
   - C3b opsonization
   - MAC (C5b-9) formation
   - Cell lysis
   
   *Phagocytosis:*
   - Fc receptor binding
   - CR1-mediated uptake
   - Splenic/liver macrophage clearance
   
   *ADCC:*
   - NK cell Fc receptor engagement
   - Perforin/granzyme release
   - Target cell death

3. **Antibody-Mediated Receptor Modulation:**
   - Agonist: Graves disease (TSH receptor)
   - Antagonist: Myasthenia gravis (ACh receptor)
   - Internalization: Autoimmune thrombocytopenia

**Type III: Immune Complex Disease**

1. **Complex Formation:**
   - Antigen excess: Small, soluble complexes
   - Equivalence: Large, insoluble complexes
   - Antibody excess: Small complexes (less pathogenic)

2. **Tissue Deposition Factors:**
   - Vascular permeability (C3a, C5a)
   - Blood flow patterns (turbulence)
   - Charge interactions
   - Clearance capacity

3. **Inflammatory Cascade:**
   - C5a: Neutrophil chemotaxis
   - Neutrophil activation
   - Reactive oxygen species release
   - Lysosomal enzyme release
   - Tissue damage

**Type IV: Cell-Mediated Hypersensitivity**

1. **CD4+ T Cell Mechanisms:**
   - Th1 cells recognize antigen on APCs
   - IFN-gamma production
   - Macrophage activation
   - Granuloma formation (chronic)
   - Example: TB, contact dermatitis

2. **CD8+ T Cell Mechanisms:**
   - Direct killing of antigen-bearing cells
   - Perforin/granzyme pathway
   - Fas/FasL pathway
   - Example: Type 1 diabetes, viral hepatitis

3. **Granulomatous Inflammation:**
   - Persistent antigen (indigestible)
   - Activated macrophages (epithelioid)
   - Multinucleated giant cells
   - T cell-mediated maintenance`,
      keyTerms: [
        { term: 'Fc epsilon RI', definition: 'High-affinity IgE receptor on mast cells and basophils' },
        { term: 'Syk kinase', definition: 'Tyrosine kinase essential for signaling through Fc receptors' },
        { term: 'leukotriene', definition: 'Lipid mediator derived from arachidonic acid causing bronchospasm and vascular permeability' },
        { term: 'ADCC', definition: 'Antibody-Dependent Cellular Cytotoxicity; NK cell-mediated killing of antibody-coated targets' },
        { term: 'epithelioid cell', definition: 'Activated macrophage with epithelial-like appearance in granulomas' },
      ],
      clinicalNotes: 'Type I reactions can be diagnosed with skin prick testing or specific IgE testing. Basophil activation tests emerging for diagnosis. Epinephrine is first-line for anaphylaxis.',
    },
    4: {
      level: 4,
      summary: 'Hypersensitivity reactions involve complex immunological cascades with specific cellular and molecular mediators, requiring sophisticated diagnostic approaches and targeted therapeutic interventions including biologics and desensitization protocols.',
      explanation: `Clinical management of hypersensitivity disorders requires understanding of disease mechanisms, diagnostic testing modalities, and evidence-based therapeutic strategies.

**Type I Hypersensitivity - Clinical Aspects:**

1. **Diagnostic Testing:**
   
   *In Vivo Tests:*
   - Skin prick testing (SPT): Quick, sensitive
   - Intradermal testing: More sensitive, higher false positive
   - Patch testing: For contact dermatitis (Type IV)
   - Oral food challenges: Gold standard for food allergy
   
   *In Vitro Tests:*
   - Specific IgE (sIgE): Quantitative, safe
   - Component-resolved diagnostics (CRD)
   - Basophil activation test (BAT)
   - Mast cell tryptase (during acute reaction)

2. **Therapeutic Approaches:**
   
   *Allergen Avoidance:*
   - Environmental controls for aeroallergens
   - Dietary elimination for food allergies
   - Label reading, emergency action plans
   
   *Pharmacotherapy:*
   - H1 antihistamines: Symptomatic relief
   - Corticosteroids: Anti-inflammatory
   - Leukotriene receptor antagonists
   - Epinephrine: First-line anaphylaxis
   
   *Disease-Modifying:*
   - Allergen immunotherapy (SCIT/SLIT)
   - Omalizumab (anti-IgE)
   - Dupliumab (anti-IL-4Ralpha)
   - Emerging biologics

3. **Anaphylaxis Management:**
   - Epinephrine IM (anterolateral thigh)
   - Adjuncts: H1/H2 blockers, corticosteroids
   - Fluid resuscitation
   - Observation (biphasic reactions)
   - Patient education, action plan

**Type II Hypersensitivity - Clinical Examples:**

1. **Autoimmune Hemolytic Anemia:**
   - Warm type (IgG, 80%): Idiopathic, SLE, CLL
   - Cold type (IgM): Mycoplasma, EBV, lymphoma
   - Direct Coombs test diagnostic
   - Steroids, rituximab, splenectomy

2. **Immune Thrombocytopenia (ITP):**
   - Anti-platelet glycoprotein antibodies
   - Bleeding manifestations
   - First-line: Steroids, IVIG
   - Second-line: TPO agonists, rituximab

3. **Goodpasture Syndrome:**
   - Anti-GBM antibodies
   - Pulmonary hemorrhage + glomerulonephritis
   - Urgent plasmapheresis + immunosuppression

**Type III Hypersensitivity - Clinical Patterns:**

1. **Serum Sickness:**
   - Foreign protein administration
   - Fever, rash, arthralgias, lymphadenopathy
   - 7-14 days post-exposure
   - Self-limited; antihistamines, NSAIDs

2. **Arthus Reaction:**
   - Localized immune complex vasculitis
   - Pre-existing antibodies
   - Hours after antigen injection
   - Necrosis at injection site

3. **Systemic Lupus Erythematosus:**
   - Multiple immune complex-mediated manifestations
   - Nephritis, vasculitis, arthritis
   - Complement consumption (C3, C4 low)

**Type IV Hypersensitivity - Clinical Subtypes:**

1. **Contact Dermatitis:**
   - Haptens (small molecules) + skin proteins
   - Poison ivy (urushiol), nickel, fragrances
   - Pruritic, vesicular rash
   - Patch testing for diagnosis
   - Topical corticosteroids

2. **Tuberculin-Type:**
   - PPD skin test
   - IFN-gamma release assays (IGRA)
   - Latent TB diagnosis
   - Correlates with cell-mediated immunity

3. **Granulomatous:**
   - Chronic antigen persistence
   - Tuberculosis, sarcoidosis, leprosy
   - Th1-mediated macrophage activation
   - Caseating vs non-caseating granulomas`,
      keyTerms: [
        { term: 'component-resolved diagnostics', definition: 'IgE testing to specific allergen components rather than whole extracts' },
        { term: 'basophil activation test', definition: 'Flow cytometry-based assay measuring allergen-induced basophil activation' },
        { term: 'hapten', definition: 'Small molecule that becomes immunogenic when bound to carrier proteins' },
        { term: 'biphasic reaction', definition: 'Anaphylaxis recurrence 4-8 hours after initial symptoms resolve' },
        { term: 'TPO agonist', definition: 'Thrombopoietin receptor agonist stimulating platelet production' },
      ],
      clinicalNotes: 'Always prescribe two epinephrine auto-injectors for anaphylaxis. Beta-blockers can mask anaphylaxis symptoms and interfere with epinephrine response. C1 inhibitor deficiency causes bradykinin-mediated angioedema (not histamine-mediated).',
    },
    5: {
      level: 5,
      summary: 'Hypersensitivity disorders require precision diagnosis integrating clinical history, laboratory testing, and emerging biomarkers, with therapeutic approaches ranging from avoidance strategies to biologics, immunomodulation, and allergen-specific immunotherapy.',
      explanation: `Modern management of hypersensitivity disorders incorporates advanced diagnostics, targeted therapeutics, and evidence-based protocols for both acute and chronic manifestations.

**Advanced Diagnostic Approaches:**

1. **Component-Resolved Diagnostics (CRD):**
   
   *Principles:*
   - Tests IgE to specific allergen proteins
   - Distinguishes primary sensitization from cross-reactivity
   - Predicts clinical reactivity
   - Guides immunotherapy selection
   
   *Clinical Applications:*
   - Peanut: Ara h 2 (major allergen) vs Ara h 8 (PR-10, mild)
   - Birch pollen-fruit syndrome: Bet v 1 cross-reactivity
   - House dust mite: Der p 1, Der p 2, Der p 23
   - Improves risk stratification

2. **Cellular Assays:**
   
   *Basophil Activation Test (BAT):*
   - Flow cytometry-based
   - Measures CD63 or CD203c upregulation
   - Useful for: NSAID hypersensitivity, perioperative reactions
   - Non-IgE mediated reactions
   - Ex vivo diagnostic tool
   
   *Lymphocyte Transformation Test:*
   - T cell proliferation to drug antigens
   - Delayed hypersensitivity reactions
   - Limited availability

3. **Biomarkers:**
   - Tryptase: Acute mast cell activation
   - Chromogranin A: Neuroendocrine tumors (differential)
   - IL-6, TNF: Cytokine storm syndromes
   - MRGPRX2: Non-IgE mast cell activation

**Advanced Therapeutics:**

1. **Biologics in Allergy/Immunology:**
   
   *Omalizumab (Anti-IgE):*
   - Indications: Allergic asthma, chronic urticaria, nasal polyps
   - Reduces free IgE, Fc epsilon RI downregulation
   - Enables oral immunotherapy for food allergy
   
   *Dupliumab (Anti-IL-4Ralpha):*
   - Blocks IL-4 and IL-13
   - Atopic dermatitis, asthma, CRSwNP
   - Type 2 inflammation inhibitor
   
   *Emerging:*
   - Tezepelumab (anti-TSLP): Severe asthma
   - Mepolizumab/reslizumab (anti-IL-5): Eosinophilic asthma
   - Benralizumab (anti-IL-5R): Eosinophilic asthma

2. **Allergen Immunotherapy (AIT):**
   
   *Mechanisms:*
   - Induction of allergen-specific Treg cells
   - IgE to IgG4 class switching
   - Mast cell desensitization
   - Long-term immune modulation
   
   *Routes:*
   - Subcutaneous (SCIT): Standard, well-established
   - Sublingual (SLIT): Safer, home administration
   - Oral (OIT): Food allergies, desensitization
   - Epicutaneous (EPIT): Peanut allergy trials
   
   *Indications:*
   - Allergic rhinitis/conjunctivitis
   - Allergic asthma
   - Hymenoptera venom allergy
   - Food allergies (emerging)

3. **Drug Desensitization:**
   - Incremental dose escalation
   - Temporary tolerance induction
   - Reactions managed with premedication
   - Indications: Essential medications only
   - Examples: Aspirin, antibiotics, chemotherapy

**Special Clinical Scenarios:**

1. **Mast Cell Activation Syndrome (MCAS):**
   - Symptoms in multiple organ systems
   - Response to mast cell mediators
   - Normal or elevated tryptase
   - Diagnostic criteria evolving
   - Treatment: H1/H2 blockers, cromolyn, steroids

2. **Hereditary Angioedema (HAE):**
   - C1 inhibitor deficiency (types I, II)
   - Factor XII mutation (type III)
   - Bradykinin-mediated (not histamine)
   - Does NOT respond to antihistamines/epinephrine
   - Treatments: C1 inhibitor concentrate, icatibant, ecallantide

3. **Cytokine Release Syndrome (CRS):**
   - CAR-T therapy complication
   - IL-6 driven (tocilizumab effective)
   - Grading system guides therapy
   - Can progress to hemophagocytic lymphohistiocytosis

**Drug Allergy Evaluation:**

1. **Risk Stratification:**
   - History details essential
   - Timing of reaction
   - Alternative agents available
   - Cross-reactivity patterns

2. **Testing Approaches:**
   - Skin testing (limited utility for many drugs)
   - Graded challenges
   - Test dosing protocols
   - Desensitization when necessary`,
      keyTerms: [
        { term: 'PR-10 protein', definition: 'Pathogenesis-related protein family; pan-allergens often associated with mild oral allergy syndrome' },
        { term: 'MRGPRX2', definition: 'Mas-related G protein-coupled receptor X2; mediates non-IgE mast cell activation' },
        { term: 'TSLP', definition: 'Thymic Stromal Lymphopoietin; epithelial cytokine promoting type 2 inflammation' },
        { term: 'OIT', definition: 'Oral Immunotherapy; gradual introduction of allergen to induce desensitization' },
        { term: 'CRSwNP', definition: 'Chronic Rhinosinusitis with Nasal Polyps; type 2 inflammatory condition' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Anaphylaxis: Epinephrine first-line; antihistamines do NOT treat airway compromise or shock
- Wheal >3mm than negative control = positive skin prick test
- Beta-blockers contraindicated with anaphylaxis risk; complicate treatment
- ACE inhibitors contraindicated in HAE; can cause bradykinin-mediated angioedema
- Trytpase peaks 1-2 hours after anaphylaxis onset; collect serial samples
- SCIT: 30-minute observation required (anaphylaxis risk)
- Drug allergy testing: Penicillin skin testing highly predictive; most drugs not validated`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune'],
    topics: ['clinical', 'immunology', 'pathology'],
    keywords: ['hypersensitivity', 'allergy', 'anaphylaxis', 'IgE', 'Gell and Coombs'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hypersensitivityReactionsContent;
