import { EducationalContent } from '../../types';

export const typeIVHypersensitivityContent: EducationalContent = {
  id: 'allergy-immunology-type-iv-hypersensitivity',
  type: 'concept',
  name: 'Type IV Hypersensitivity (Delayed-Type/Cell-Mediated)',
  alternateNames: ['Delayed-Type Hypersensitivity', 'DTH', 'Cell-Mediated Hypersensitivity', 'T Cell-Mediated Hypersensitivity'],

  levels: {
    1: {
      level: 1,
      summary: 'Type IV hypersensitivity is a slow allergic reaction caused by T cells instead of antibodies, taking 24-72 hours to appear.',
      explanation: `Type IV hypersensitivity is different from other allergic reactions. Instead of antibodies causing the problem, special immune cells called T cells are responsible. Because T cells take time to find and attack the target, symptoms appear 1-3 days after exposure.

**How It Works:**

1. **First Exposure (Sensitization)**
   - Your T cells learn to recognize a substance
   - This takes about 1-2 weeks
   - You have no symptoms during this time

2. **Second Exposure (Reaction)**
   - T cells recognize the substance again
   - They release chemicals that call other immune cells
   - Inflammation builds up slowly over 24-72 hours
   - This causes redness, swelling, and sometimes blisters

**Common Examples:**

- **Poison Ivy/Oak/Sumac**: The oil causes an itchy, blistering rash 1-3 days after touching the plant
- **Contact Dermatitis**: Allergic reactions to nickel jewelry, latex, fragrances, or other substances touching skin
- **Tuberculin Skin Test (TB Test)**: A positive result shows your immune system has seen TB bacteria before
- **Drug Reactions**: Some medications cause skin rashes that appear days after starting the drug

**Key Features:**
- Takes 24-72 hours to develop (unlike immediate allergies)
- No antibodies involved - only T cells
- Usually affects the skin
- Can cause rash, itching, swelling, and blisters

**Common Allergens:**
- Plant oils (poison ivy, urushiol)
- Metals (nickel, chromium, cobalt)
- Rubber chemicals (latex)
- Fragrances and preservatives in cosmetics
- Certain medications`,
      keyTerms: [
        { term: 'T cell', definition: 'A type of white blood cell that directs immune responses without making antibodies' },
        { term: 'contact dermatitis', definition: 'Skin rash caused by touching something you are allergic to' },
        { term: 'delayed reaction', definition: 'An allergic response that takes 1-3 days to appear' },
        { term: 'sensitization', definition: 'When your immune system first learns to recognize a substance' },
      ],
      analogies: [
        'Type IV is like a slow-cooking meal compared to microwave cooking (Type I). It takes longer but the reaction builds up over time.',
        'Think of T cells as detectives that take time to investigate before calling for backup. The reaction is delayed because the investigation takes 24-72 hours.',
      ],
      examples: [
        'If you touch poison ivy on Monday, you might not see a rash until Wednesday or Thursday.',
        'A TB skin test is read 48-72 hours later because that is how long it takes for the T cell reaction to develop.',
      ],
    },
    2: {
      level: 2,
      summary: 'Type IV hypersensitivity is a T cell-mediated immune response that develops over 24-72 hours, involving antigen presentation, T helper cell activation, and cytokine-mediated inflammation.',
      explanation: `Type IV hypersensitivity (delayed-type hypersensitivity, DTH) is distinct from Types I-III because it is mediated by T cells rather than antibodies. The delayed timing (24-72 hours) reflects the time needed for T cell activation and cytokine-mediated inflammation.

**Mechanism Overview:**

**Phase 1: Sensitization (First Exposure)**
1. Antigen enters tissue (often through skin)
2. Dendritic cells (Langerhans cells in skin) capture antigen
3. DCs migrate to lymph nodes
4. Antigen presented via MHC Class II to naive CD4+ T cells
5. T cells differentiate into memory Th1 cells
6. No symptoms at this stage

**Phase 2: Elicitation (Re-exposure)**
1. Antigen re-enters tissue
2. Local APCs present antigen to memory T cells
3. T cells release cytokines (IFN-γ, TNF-α)
4. Macrophages and other immune cells recruited
5. Inflammation develops over 24-72 hours

**Key Cytokines:**

| Cytokine | Source | Effect |
|----------|--------|--------|
| IFN-γ | Th1 cells | Activates macrophages, increases MHC expression |
| TNF-α | Th1, macrophages | Inflammation, vascular changes |
| IL-2 | Th1 cells | T cell proliferation |
| IL-12 | DCs, macrophages | Promotes Th1 differentiation |

**Clinical Types:**

**Contact Hypersensitivity:**
- Classic Type IV reaction
- Small molecules (haptens) bind skin proteins
- Examples: Nickel, poison ivy (urushiol), rubber chemicals
- Presents as eczematous dermatitis at contact site

**Tuberculin-Type Hypersensitivity:**
- Response to injected protein antigens
- Classic example: PPD (tuberculin skin test)
- Positive = prior exposure to TB (infection or vaccination)
- Indurated papule at 48-72 hours

**Granulomatous Hypersensitivity:**
- Chronic T cell activation
- Persistent antigens that cannot be eliminated
- Macrophages fuse into giant cells
- Examples: TB, sarcoidosis, Crohn's disease

**Common Causes of Allergic Contact Dermatitis:**
- Nickel (jewelry, belt buckles)
- Urushiol (poison ivy, oak, sumac)
- Rubber accelerators (gloves, elastics)
- Fragrances (cosmetics, soaps)
- Preservatives (formaldehyde, parabens)
- Topical antibiotics (neomycin, bacitracin)
- Hair dyes (p-phenylenediamine)

**Patch Testing:**
- Gold standard for diagnosing contact allergy
- Suspected allergens applied under occlusion for 48 hours
- Read at 48 and 96 hours
- Positive = eczematous reaction at test site`,
      keyTerms: [
        { term: 'delayed-type hypersensitivity', definition: 'T cell-mediated immune response developing over 24-72 hours', pronunciation: 'DTH' },
        { term: 'Th1 cells', definition: 'T helper cells that secrete IFN-γ and promote cell-mediated immunity' },
        { term: 'hapten', definition: 'Small molecule that becomes immunogenic when bound to a carrier protein', pronunciation: 'HAP-ten' },
        { term: 'granuloma', definition: 'Collection of activated macrophages and giant cells formed in response to persistent antigens' },
        { term: 'patch test', definition: 'Diagnostic test where potential allergens are applied to skin to detect contact allergy' },
        { term: 'Langerhans cell', definition: 'Dendritic cell residing in the epidermis that captures antigens and migrates to lymph nodes' },
      ],
      analogies: [
        'Patch testing is like a "wanted poster lineup" - you show the skin multiple suspects and see which one causes a reaction.',
        'Granuloma formation is like the immune system building a wall around something it cannot eliminate, keeping it contained.',
      ],
    },
    3: {
      level: 3,
      summary: 'Type IV hypersensitivity encompasses T cell-mediated reactions including contact hypersensitivity (CD8+ cytotoxic), tuberculin-type (CD4+ Th1), and granulomatous responses, each with distinct pathogenic mechanisms and clinical presentations.',
      explanation: `Type IV hypersensitivity represents a heterogeneous group of T cell-mediated reactions that share delayed kinetics but differ in their immunologic mechanisms and clinical manifestations.

**Immunologic Subtypes:**

**Type IVa: Th1-Mediated (Tuberculin-Type)**
- CD4+ Th1 cells predominant
- IFN-γ activates macrophages
- Classic delayed-type hypersensitivity
- Examples: TB skin test, leprosy (tuberculoid)

**Type IVb: Th2-Mediated**
- CD4+ Th2 cells predominant
- IL-4, IL-5, IL-13 secretion
- Eosinophilic inflammation
- Examples: Chronic allergic asthma, atopic dermatitis (late phase)

**Type IVc: Cytotoxic T Cell-Mediated**
- CD8+ CTL predominant
- Direct cytotoxicity via perforin/granzyme
- Examples: Contact dermatitis, Stevens-Johnson syndrome, drug reactions

**Type IVd: T Cell-Neutrophilic**
- T cells recruit neutrophils via CXCL8 (IL-8), GM-CSF
- Sterile pustular reactions
- Examples: Acute generalized exanthematous pustulosis (AGEP), Behcet's disease

**Detailed Mechanism: Contact Hypersensitivity**

**Sensitization Phase:**
1. Hapten penetrates stratum corneum
2. Hapten binds to self-proteins → hapten-carrier conjugate
3. Langerhans cells capture hapten-protein complex
4. LC upregulate CCR7, migrate to lymph nodes
5. LC present hapten-modified peptides via MHC I and II
6. Naive T cells (both CD4+ and CD8+) activated
7. Memory T cells established (take 10-14 days)

**Elicitation Phase:**
1. Re-exposure to hapten
2. Local keratinocytes process hapten
3. Memory T cells (especially CD8+) recognize hapten-peptide
4. CD8+ CTLs kill keratinocytes (perforin, FasL)
5. Cytokines recruit additional inflammatory cells
6. Clinical: Eczematous dermatitis at 24-72 hours

**Role of Innate Immunity:**
- Hapten-induced innate signals required for sensitization
- TLR activation on keratinocytes and LCs
- NLRP3 inflammasome activation
- IL-1β, IL-18 enhance T cell priming

**Granulomatous Inflammation:**

**Formation:**
- Persistent antigen that cannot be cleared
- Continuous macrophage activation by IFN-γ
- Macrophage differentiation into epithelioid cells
- Cell fusion into multinucleated giant cells
- CD4+ T cells form peripheral cuff

**Types of Giant Cells:**
- Langhans giant cells: Nuclei arranged peripherally (TB)
- Foreign body giant cells: Nuclei scattered (inert material)
- Touton giant cells: Lipid-laden (xanthogranuloma)

**Granulomatous Diseases:**
- Infectious: TB, leprosy, fungal, parasitic
- Non-infectious: Sarcoidosis, Crohn's disease, foreign body
- Drug-induced: Some drug reactions with granulomatous features

**Severe Cutaneous Adverse Reactions (SCARs):**

**Stevens-Johnson Syndrome (SJS) / Toxic Epidermal Necrolysis (TEN):**
- CD8+ T cell-mediated keratinocyte apoptosis
- Granulysin identified as key mediator
- Fas-FasL and perforin/granzyme pathways
- <10% BSA = SJS; >30% BSA = TEN; 10-30% = overlap
- HLA associations: HLA-B*15:02 (carbamazepine in Asians), HLA-B*58:01 (allopurinol)

**Drug Reaction with Eosinophilia and Systemic Symptoms (DRESS):**
- Mixed Th1/Th2 response
- HHV-6 reactivation common
- Prolonged latency (2-8 weeks)
- Multi-organ involvement (liver, kidney, lung)
- Persistent symptoms after drug withdrawal`,
      keyTerms: [
        { term: 'Type IVc', definition: 'CD8+ cytotoxic T cell-mediated hypersensitivity, as seen in contact dermatitis and SJS/TEN' },
        { term: 'granulysin', definition: 'Cytotoxic protein released by CTLs, key mediator of keratinocyte death in SJS/TEN' },
        { term: 'DRESS syndrome', definition: 'Drug reaction with eosinophilia and systemic symptoms; severe T cell-mediated drug hypersensitivity' },
        { term: 'epithelioid cell', definition: 'Activated macrophage with abundant cytoplasm, characteristic of granulomatous inflammation' },
        { term: 'Langhans giant cell', definition: 'Multinucleated giant cell with nuclei arranged in a horseshoe pattern, seen in tuberculosis' },
        { term: 'HLA-B*58:01', definition: 'HLA allele strongly associated with allopurinol-induced SJS/TEN' },
      ],
      clinicalNotes: 'Contact dermatitis: Patch test gold standard; avoid allergen. SJS/TEN: Stop causative drug immediately; supportive care; consider IVIg or cyclosporine. DRESS: Systemic steroids for severe organ involvement; may take months to resolve. Screen HLA-B*15:02 before carbamazepine in Asian populations; HLA-B*58:01 before allopurinol in high-risk populations.',
    },
    4: {
      level: 4,
      summary: 'Type IV hypersensitivity encompasses mechanistically diverse T cell-mediated responses classified by predominant T cell subset and effector mechanism, with clinically important manifestations ranging from contact dermatitis to life-threatening severe cutaneous adverse reactions, each with specific immunopathogenic pathways and therapeutic implications.',
      explanation: `Type IV hypersensitivity represents the complexity of T cell-mediated tissue damage, with understanding of specific mechanisms guiding diagnosis and management.

**Molecular Mechanisms:**

**Hapten Processing and Presentation:**

*Hapten-Protein Conjugation:*
- Electrophilic haptens: React with nucleophilic amino acids (Cys, Lys)
- Urushiol (poison ivy): Oxidized to quinone, binds proteins
- Nickel: Binds histidine residues in MHC/peptide complex
- Pro-haptens: Require metabolic activation (drugs)

*Presentation Pathways:*
- MHC Class I: For CD8+ T cell recognition (main in contact dermatitis)
- MHC Class II: For CD4+ T cell recognition
- Direct interaction: Metal ions may directly alter MHC-peptide complex
- p-i concept: Pharmacological interaction with immune receptor

**The p-i Concept (Pharmacological Interaction):**
- Drug binds directly to TCR or MHC without processing
- No covalent hapten-carrier binding required
- Explains rapid reactions in sensitized individuals
- Examples: Abacavir, carbamazepine
- Drug-HLA binding: Alters peptide repertoire presented

**Abacavir Hypersensitivity:**
- HLA-B*57:01 strongly associated
- Abacavir binds within peptide-binding groove
- Alters self-peptide repertoire
- Self-reactive T cells activated
- Screening prevents hypersensitivity reactions

**T Cell Subsets in Drug Hypersensitivity:**

| Reaction | Predominant T Cell | Mechanism | Clinical Features |
|----------|-------------------|-----------|-------------------|
| Maculopapular exanthem | CD4+ | Cytokines | Morbilliform rash |
| SJS/TEN | CD8+ | Granulysin, FasL | Keratinocyte necrosis |
| DRESS | CD4+, CD8+ | Cytokines, viral reactivation | Multi-organ |
| AGEP | CD8+, neutrophil recruitment | CXCL8/IL-17 | Sterile pustules |
| FDE | CD8+ TRM | IFN-γ, FasL | Localized recurrence |

**Severe Cutaneous Adverse Reactions - Detailed:**

**SJS/TEN Pathogenesis:**

*Key Mediators:*
- Granulysin: 15 kDa cytotoxic protein
  - Expressed by CTLs and NK cells
  - Causes keratinocyte apoptosis
  - Concentration correlates with disease severity
- FasL: Membrane-bound and soluble
  - Fas-mediated apoptosis of keratinocytes
- Perforin/granzyme B: CTL granule-mediated killing

*Immunopathology:*
- Blister fluid: CD8+ CTLs predominant
- Keratinocyte apoptosis > necrosis
- Satellite cell necrosis (apoptotic keratinocytes surrounded by lymphocytes)
- Full-thickness epidermal loss

*Drug-Specific HLA Associations:*
- Carbamazepine: HLA-B*15:02 (SJS/TEN in Asians), HLA-A*31:01 (DRESS/MPE in Europeans)
- Allopurinol: HLA-B*58:01 (all populations)
- Abacavir: HLA-B*57:01 (HSR)
- Dapsone: HLA-B*13:01 (HSR in Asians)

**DRESS Syndrome Pathogenesis:**

*Viral Reactivation:*
- HHV-6 reactivation in >50% of cases
- Also CMV, EBV
- Mechanism unclear: Drug-induced immunosuppression? Cross-reactivity?
- Viral reactivation correlates with disease severity

*Immunologic Features:*
- Regulatory T cell expansion
- Th2 cytokine predominance (IL-4, IL-5, IL-13)
- Eosinophilia (>700/µL diagnostic criterion)
- May have persistent autoimmune sequelae (thyroiditis)

**Fixed Drug Eruption (FDE):**

*Mechanism:*
- Tissue-resident memory T cells (TRM) at lesion site
- Express CD69, CD103 (tissue retention)
- Intraepithelial CD8+ T cells
- Upon drug re-exposure: Local IFN-γ, FasL expression
- Same site affected each time

**Therapeutic Approaches:**

**Contact Dermatitis:**
- Avoidance of allergen (primary)
- Topical corticosteroids (acute treatment)
- Tacrolimus/pimecrolimus for sensitive areas
- Systemic steroids for severe cases

**SJS/TEN:**
- Immediate drug withdrawal
- Transfer to burn unit if severe
- Supportive care (fluids, wound care, nutrition)
- Controversial therapies: IVIg, cyclosporine, etanercept, plasmapheresis
- Cyclosporine may be most effective (blocks granulysin)

**DRESS:**
- Drug withdrawal
- Systemic corticosteroids (mainstay)
- Taper slowly over 6-8 weeks
- Monitor for organ involvement and viral reactivation
- Long-term follow-up for autoimmune sequelae`,
      keyTerms: [
        { term: 'p-i concept', definition: 'Pharmacological interaction with immune receptor; drug directly binds TCR or MHC without antigen processing' },
        { term: 'tissue-resident memory T cell', definition: 'Memory T cell that remains in tissue without recirculating, responsible for rapid local immune responses' },
        { term: 'satellite cell necrosis', definition: 'Apoptotic keratinocyte surrounded by lymphocytes, characteristic of SJS/TEN histology' },
        { term: 'HLA-B*57:01', definition: 'HLA allele associated with abacavir hypersensitivity; mandatory screening before use' },
        { term: 'FDE', definition: 'Fixed drug eruption; recurrent lesion at same site upon drug re-exposure' },
      ],
      clinicalNotes: 'Pharmacogenomic screening: HLA-B*57:01 before abacavir (eliminates HSR); HLA-B*15:02 before carbamazepine in Asians; HLA-B*58:01 before allopurinol in high-risk. SJS/TEN mortality correlates with BSA involvement (SCORTEN score). DRESS can have autoimmune sequelae months later. FDE: Important to identify causative drug; lesion recurs at exact same site.',
    },
    5: {
      level: 5,
      summary: 'Type IV hypersensitivity integrates diverse T cell-mediated pathways from hapten-protein conjugate processing through MHC presentation to tissue-specific effector mechanisms, with pharmacogenomic associations enabling risk prediction for severe drug reactions and mechanistic understanding guiding targeted therapeutic interventions.',
      explanation: `Comprehensive understanding of Type IV hypersensitivity requires integration of molecular immunology, pharmacogenomics, and clinical medicine to optimize diagnosis, prevention, and treatment.

**Systems-Level Understanding:**

**Skin as Immune Organ:**

*Cellular Components:*
- Keratinocytes: Produce cytokines, antimicrobial peptides, express TLRs
- Langerhans cells: Epidermal DCs, antigen capture and presentation
- Dermal DCs: Multiple subsets with distinct functions
- Tissue-resident memory T cells: Rapid local immunity
- Innate lymphoid cells: Barrier immunity

*Immune Surveillance:*
- Continuous sampling of environmental antigens
- Tolerance to commensal organisms
- Rapid response to pathogens and danger signals

**Mechanistic Classification - Extended:**

**Contact Hypersensitivity:**

*Sensitization Requirements:*
- Danger signals: Irritation, TLR activation, NLRP3 inflammasome
- Without danger signals: Tolerance may develop
- "Hapten-only" exposure can induce tolerance

*Resolution Mechanisms:*
- Regulatory T cells (Tregs)
- IL-10 production
- Tolerogenic DCs
- Anergy of effector T cells

**Hapten vs Drug Hypersensitivity:**

*Haptens (Classic Contact):*
- Small molecules <1 kDa
- Covalent binding to proteins
- Requires protein conjugation for immunogenicity
- Metabolic activation may be needed

*Drugs (p-i Concept):*
- Non-covalent interaction with MHC or TCR
- No antigen processing required
- Conformational changes in MHC-peptide-TCR complex
- Drug-specific T cells

**Pharmacogenomics and Precision Medicine:**

**HLA-Drug Associations - Mechanisms:**

*HLA-B*57:01 and Abacavir:*
- Abacavir binds non-covalently in HLA-B*57:01 binding groove
- Alters peptide binding repertoire
- "Altered self" peptides presented
- CD8+ T cells activated against novel peptide-HLA complexes
- 100% negative predictive value with screening

*HLA-B*15:02 and Carbamazepine:*
- Strong association with SJS/TEN in Han Chinese, Thai, Malaysian
- Less associated with MPE or DRESS
- Mechanism: Altered peptide presentation
- FDA recommends screening in at-risk populations

*HLA-A*31:01 and Carbamazepine:*
- Associated with all types of carbamazepine hypersensitivity in Europeans
- Lower risk than B*15:02 for SJS/TEN but broader phenotype

**Beyond HLA - Other Pharmacogenomic Factors:**

*Drug Metabolism:*
- CYP enzyme variants affect reactive metabolite formation
- Sulfamethoxazole: NAT2 slow acetylators at higher risk
- Nevirapine: CYP2B6 516G>T affects metabolism

*Immune Response Genes:*
- Granulysin polymorphisms may affect SJS/TEN severity
- Cytokine gene variants (TNF-α, IL-6)

**T Cell Receptor Repertoire in Drug Reactions:**

*Clonality:*
- SJS/TEN: Oligoclonal expansion in blister fluid
- DRESS: Polyclonal expansion
- Specific TCR Vβ usage for certain drugs

*Public TCR Clonotypes:*
- Shared TCRs among individuals with same HLA + drug
- Carbamazepine: TCR Vβ-11-ISGSY clonotype in HLA-B*15:02+ patients
- Potential for TCR-based diagnostics

**Diagnostic Advances:**

**In Vivo Testing:**

*Patch Testing:*
- Gold standard for contact allergens
- Drug patch testing: Variable sensitivity
- Delayed reading essential (48h, 96h)
- Interpretation: ICDRG criteria

*Intradermal Testing:*
- More sensitive than patch for drugs
- Risk of systemic reaction
- Read at 24h and 48-72h for delayed reactions

*Drug Provocation Test (DPT):*
- Gold standard for drug allergy diagnosis
- Not for severe reactions (SJS/TEN, DRESS)
- Graded challenge in controlled setting

**In Vitro Testing:**

*Lymphocyte Transformation Test (LTT):*
- Measures drug-specific T cell proliferation
- Sensitive for DRESS, less for SJS/TEN
- Requires specialized laboratory
- Best performed 4-8 weeks after reaction

*Enzyme-Linked Immunospot (ELISpot):*
- Measures cytokine-secreting T cells
- IFN-γ, granulysin ELISpot for SJS/TEN
- Granzyme B ELISpot
- More sensitive than LTT

*Flow Cytometry-Based Assays:*
- CD69 upregulation on T cells
- Intracellular cytokine staining
- Faster than proliferation assays

**Case-Based Integration:**

**Case: Patient with morbilliform rash 10 days after starting allopurinol**

*Clinical Assessment:*
1. Assess severity: DRESS? SJS/TEN? Simple MPE?
2. RegiSCAR criteria for DRESS
3. SCORTEN for SJS/TEN prognosis

*RegiSCAR Criteria for DRESS:*
- Hospitalization
- Reaction suspected to be drug-related
- Acute rash
- Fever >38°C
- Enlarged lymph nodes (≥2 sites)
- Involvement of ≥1 internal organ
- Blood count abnormalities (eosinophilia, lymphocytosis)

*Workup:*
- CBC with differential (eosinophilia)
- LFTs, renal function
- Consider skin biopsy
- HHV-6 PCR if DRESS suspected
- Consider HLA-B*58:01 testing (if not done pre-treatment)

*Management:*
- Discontinue allopurinol
- Supportive care
- Systemic steroids if DRESS with organ involvement
- Monitor for flares/sequelae over months

*Prevention:*
- HLA-B*58:01 screening in high-risk populations (Asian, African, renal impairment)
- Start allopurinol at low dose (100 mg or less)
- Gradual dose escalation`,
      keyTerms: [
        { term: 'RegiSCAR', definition: 'European Registry of Severe Cutaneous Adverse Reactions; provides diagnostic criteria for DRESS and other SCARs' },
        { term: 'SCORTEN', definition: 'Severity scoring system for toxic epidermal necrolysis, predicting mortality' },
        { term: 'lymphocyte transformation test', definition: 'In vitro test measuring T cell proliferation to drug antigen, useful for delayed drug hypersensitivity diagnosis' },
        { term: 'ELISpot', definition: 'Enzyme-linked immunospot assay; detects cytokine-secreting cells, more sensitive than LTT' },
        { term: 'public TCR clonotype', definition: 'Identical T cell receptor sequence found in multiple individuals with the same HLA and drug reaction' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Type IV = T cell-mediated = delayed (24-72 hours)
- Subtypes: IVa (Th1), IVb (Th2), IVc (CD8+ CTL), IVd (neutrophilic)
- Contact dermatitis: Patch test diagnosis, avoid allergen
- SJS/TEN: CD8+ CTL, granulysin key mediator
- DRESS: Eosinophilia, organ involvement, HHV-6 reactivation
- HLA screening: B*57:01 (abacavir), B*15:02 (carbamazepine in Asians), B*58:01 (allopurinol)
- TB skin test: Classic Type IV (48-72 hour read)
- Granuloma: Persistent antigen, epithelioid macrophages, giant cells
- SJS/TEN treatment: Stop drug, supportive care, cyclosporine may be beneficial
- DRESS: Steroids, taper over 6-8 weeks, watch for autoimmune sequelae`,
    },
  },

  media: [
    {
      id: 'type-iv-mechanism-diagram',
      type: 'diagram',
      filename: 'type-iv-hypersensitivity-mechanism.svg',
      title: 'Type IV Hypersensitivity Mechanism',
      description: 'Diagram showing sensitization and elicitation phases of delayed-type hypersensitivity',
    },
    {
      id: 'patch-test-image',
      type: 'image',
      filename: 'patch-test-positive.jpg',
      title: 'Positive Patch Test',
      description: 'Example of positive patch test reaction showing eczematous response',
    },
  ],
  citations: [
    {
      id: 'abbas-type-iv',
      type: 'textbook',
      title: 'Cellular and Molecular Immunology',
      authors: ['Abbas AK', 'Lichtman AH', 'Pillai S'],
      source: 'Elsevier',
      chapter: '19',
    },
    {
      id: 'pichler-drug-hypersensitivity',
      type: 'article',
      title: 'Drug hypersensitivity reactions: classification and relationship to T-cell activation',
      authors: ['Pichler WJ'],
      source: 'Allergy, Asthma, and Clinical Immunology',
    },
  ],
  crossReferences: [
    { targetId: 'allergy-immunology-immune-system-overview', targetType: 'concept', relationship: 'parent', label: 'Immune System Overview' },
    { targetId: 'allergy-immunology-drug-allergies', targetType: 'condition', relationship: 'see-also', label: 'Drug Allergies' },
    { targetId: 'allergy-immunology-allergy-testing', targetType: 'concept', relationship: 'see-also', label: 'Allergy Testing' },
  ],
  tags: {
    systems: ['immune', 'integumentary'],
    topics: ['immunology', 'hypersensitivity', 'dermatology', 'pharmacology'],
    keywords: ['type IV', 'delayed hypersensitivity', 'T cell', 'contact dermatitis', 'drug reaction', 'SJS', 'TEN', 'DRESS'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'dermatology', 'pathology'] },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default typeIVHypersensitivityContent;
