import { EducationalContent } from '../../types';

export const thymusContent: EducationalContent = {
  id: 'structure-thymus',
  type: 'structure',
  name: 'Thymus',
  alternateNames: ['Thymus gland', 'Thymic gland'],
  fmaId: 'FMA:9608',

  levels: {
    1: {
      level: 1,
      summary: 'The thymus is a small organ behind your breastbone that teaches immune cells how to protect your body.',
      explanation: `The thymus is like a school for special immune cells called T cells. It sits right behind your breastbone (the bone in the middle of your chest) and in front of your heart.

**What the Thymus Does:**
- Trains T cells to recognize germs
- Teaches T cells NOT to attack your own body
- Helps young immune cells grow up and become helpful

**Fun Facts:**
- The thymus is biggest when you're a baby or young child
- As you grow older, it slowly gets smaller and turns into fat
- By the time you're an adult, your thymus has done most of its important work

Think of the thymus like a training camp. Immune cells arrive as "recruits," learn what they need to know, and then graduate to go protect your body. The cells that don't learn properly are sent away so they can't cause problems.`,
      keyTerms: [
        { term: 'thymus', definition: 'A small organ that trains immune cells', pronunciation: 'THY-mus' },
        { term: 'T cell', definition: 'A type of immune cell that fights infections and is trained in the thymus' },
        { term: 'immune cell', definition: 'Cells that protect your body from germs' },
      ],
      analogies: [
        'The thymus is like a school where immune cells learn friend from foe.',
        'T cells are like soldiers, and the thymus is their training academy.',
      ],
      examples: [
        'When you get a vaccination, the T cells trained by your thymus help your body remember how to fight that germ.',
      ],
    },
    2: {
      level: 2,
      summary: 'The thymus is a primary lymphoid organ where T lymphocytes mature and undergo selection to become functional, self-tolerant immune cells.',
      explanation: `The thymus is a bilobed organ located in the superior mediastinum (upper chest), posterior to the sternum and anterior to the great vessels. It is most active during childhood and undergoes involution (shrinking) with age.

**Structure:**
- Two lobes connected by connective tissue
- Each lobe divided into lobules
- Each lobule has:
  - **Cortex** (outer region): Dense with immature T cells (thymocytes)
  - **Medulla** (inner region): Less dense, contains more mature T cells

**Function:**

1. **T Cell Development**
   - Immature cells arrive from bone marrow
   - They're called "thymocytes" while in the thymus
   - They develop T cell receptors (TCRs)

2. **T Cell Selection**
   - **Positive selection** (in cortex): Cells must recognize self-MHC molecules to survive
   - **Negative selection** (in medulla): Cells that react too strongly to self-antigens are eliminated
   - Only 2-5% of thymocytes survive selection

3. **Output**
   - Mature, self-tolerant T cells leave via blood
   - These include CD4+ helper T cells and CD8+ cytotoxic T cells

**Age-Related Changes:**
- Maximum size at puberty (~30-40 grams)
- Gradually replaced by adipose tissue (fatty involution)
- By age 75, may weigh only a few grams
- Still produces some T cells throughout life`,
      keyTerms: [
        { term: 'thymocyte', definition: 'An immature T cell developing in the thymus', pronunciation: 'THY-moh-site' },
        { term: 'positive selection', definition: 'Process that ensures T cells can recognize MHC molecules' },
        { term: 'negative selection', definition: 'Process that eliminates T cells that would attack the body\'s own tissues' },
        { term: 'mediastinum', definition: 'The central compartment of the chest containing the heart, thymus, and great vessels', pronunciation: 'mee-dee-as-TY-num' },
        { term: 'involution', definition: 'The gradual shrinking of an organ, like the thymus with age', pronunciation: 'in-voh-LOO-shun' },
      ],
      analogies: [
        'Positive selection is like a vision test - cells must be able to see (recognize) the right molecules.',
        'Negative selection is like a background check - cells that would attack friendly targets are removed.',
      ],
    },
    3: {
      level: 3,
      summary: 'The thymus provides a specialized microenvironment for T cell receptor gene rearrangement, lineage commitment, and central tolerance induction through interactions with thymic epithelial cells and antigen-presenting cells.',
      explanation: `The thymus is a primary lymphoid organ essential for establishing the T cell repertoire and central tolerance. Its unique architecture creates distinct microenvironments that guide thymocyte development.

**Anatomical Organization:**

1. **Capsule and Septa**
   - Dense connective tissue capsule
   - Trabeculae extend inward, dividing into lobules
   - Blood vessels travel in trabeculae

2. **Cortex**
   - Subcapsular zone: Earliest thymocytes (DN stage)
   - Outer cortex: TCR gene rearrangement
   - Inner cortex: Positive selection
   - Contains cortical thymic epithelial cells (cTECs)
   - Highly vascularized
   - Blood-thymus barrier in cortex

3. **Corticomedullary Junction**
   - Transition zone
   - Site of lineage commitment (CD4 vs CD8)
   - Contains dendritic cells

4. **Medulla**
   - Medullary thymic epithelial cells (mTECs)
   - Hassall's corpuscles (concentric epithelial structures)
   - Dendritic cells for negative selection
   - Mature thymocytes await export

**T Cell Development Stages:**

1. **Double Negative (DN)**: CD4-CD8-
   - DN1-DN4 progression
   - TCRβ gene rearrangement
   - β-selection checkpoint

2. **Double Positive (DP)**: CD4+CD8+
   - TCRα rearrangement
   - Positive selection on cTECs
   - ~90% die by neglect (failure to bind MHC)

3. **Single Positive (SP)**: CD4+ or CD8+
   - Lineage determined by MHC class recognition
   - MHC-II recognition → CD4+ T cell
   - MHC-I recognition → CD8+ T cell

4. **Negative Selection**
   - mTECs express tissue-restricted antigens (via AIRE)
   - Strong self-reactive cells undergo apoptosis
   - Some become regulatory T cells (Tregs)

**Key Molecules:**

- **AIRE** (Autoimmune Regulator): Transcription factor in mTECs enabling expression of peripheral tissue antigens
- **CCR7/CCL19/CCL21**: Chemokine signaling guiding thymocyte migration
- **Notch signaling**: Essential for T cell lineage commitment
- **IL-7**: Survival signal for developing thymocytes`,
      keyTerms: [
        { term: 'double negative (DN)', definition: 'Early thymocytes lacking both CD4 and CD8 surface markers' },
        { term: 'double positive (DP)', definition: 'Intermediate thymocytes expressing both CD4 and CD8' },
        { term: 'AIRE', definition: 'Autoimmune Regulator; transcription factor enabling mTECs to express tissue-specific antigens for tolerance induction', pronunciation: 'air' },
        { term: 'cTEC', definition: 'Cortical thymic epithelial cell; mediates positive selection' },
        { term: 'mTEC', definition: 'Medullary thymic epithelial cell; mediates negative selection via AIRE-driven antigen expression' },
        { term: 'Hassall\'s corpuscle', definition: 'Concentric whorls of keratinized epithelial cells in thymic medulla; produce factors influencing Treg development' },
      ],
      clinicalNotes: 'AIRE mutations cause Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy (APECED/APS-1), demonstrating the importance of thymic central tolerance.',
    },
    4: {
      level: 4,
      summary: 'The thymus orchestrates T cell development through spatiotemporally regulated interactions between thymocytes and stromal cells, with distinct molecular programs governing β-selection, positive selection, lineage commitment, and negative selection that establish a functional, self-tolerant T cell repertoire.',
      explanation: `The thymus represents a highly specialized organ where thymic stromal cells create distinct niches that instruct T cell development through receptor-ligand interactions, cytokine signaling, and antigen presentation.

**Thymic Stromal Cell Populations:**

1. **Cortical Thymic Epithelial Cells (cTECs)**
   - Express MHC-I and MHC-II for positive selection
   - Unique proteasome: Thymoproteasome (β5t subunit)
   - Generates unique peptide-MHC for selection
   - Express cathepsin L and TSSP for MHC-II peptide generation
   - Produce DLL4 (Notch ligand), CCL25, CXCL12, IL-7

2. **Medullary Thymic Epithelial Cells (mTECs)**
   - AIRE+ mTECs: Express ~4,000 tissue-restricted antigens (TRAs)
   - AIRE-independent mechanisms also contribute
   - Fezf2 regulates additional TRA expression
   - Some mTECs can cross-present antigens
   - Produce CCL19, CCL21 attracting CCR7+ thymocytes

3. **Thymic Dendritic Cells**
   - Resident DCs (Sirpα+): Efficient negative selectors
   - Migratory DCs: Bring peripheral antigens
   - Plasmacytoid DCs: Role in tolerance
   - Cross-present antigens from mTECs and apoptotic cells

4. **Other Stromal Cells**
   - Macrophages: Clear apoptotic thymocytes
   - Fibroblasts: Structural support
   - Endothelial cells: Control entry/egress
   - B cells: Present antigens, produce antibodies

**Molecular Mechanisms of Selection:**

1. **β-Selection Checkpoint**
   - Tests functional TCRβ rearrangement
   - Pre-TCR formation (TCRβ + pTα + CD3)
   - Signals proliferation and allelic exclusion
   - Survival via Notch and IL-7 signaling

2. **Positive Selection Signaling**
   - Weak/moderate TCR signal required
   - ERK pathway activation → survival
   - Transcription factors: RORγt downregulated, Th-POK/Runx3 for lineage

3. **Kinetic Signaling Model of Lineage Choice**
   - Persistent TCR signaling → CD4 lineage (Th-POK)
   - Interrupted TCR signaling → CD8 lineage (Runx3)
   - Explains MHC restriction

4. **Negative Selection Mechanisms**
   - Strong TCR signal → apoptosis (Bim, Nur77)
   - Caspase-mediated cell death
   - Threshold depends on coreceptor, costimulation
   - Can be clonal deletion or receptor editing (rare in T cells)

**Regulatory T Cell Development:**

- Alternative fate for intermediate-affinity self-reactive clones
- Foxp3 induction in thymus (tTregs)
- Requires IL-2, TGF-β signaling
- CD25 expression
- Essential for peripheral tolerance

**Thymic Involution:**

- Programmed and influenced by sex steroids
- Adipocyte accumulation
- Decreased TEC numbers
- Reduced T cell output
- Increased memory:naive T cell ratio with age
- Can be partially reversed (sex steroid ablation, IL-7, keratinocyte growth factor)`,
      keyTerms: [
        { term: 'thymoproteasome', definition: 'Specialized proteasome in cTECs containing β5t subunit, generating unique peptides for positive selection' },
        { term: 'TSSP', definition: 'Thymus-specific serine protease; involved in MHC-II peptide generation in cTECs' },
        { term: 'kinetic signaling model', definition: 'Theory that CD4/CD8 lineage choice depends on duration of TCR signaling during positive selection' },
        { term: 'Th-POK', definition: 'Transcription factor (encoded by Zbtb7b) that directs CD4 lineage commitment' },
        { term: 'Runx3', definition: 'Transcription factor that directs CD8 lineage commitment and represses CD4' },
        { term: 'Fezf2', definition: 'Transcription factor in mTECs regulating AIRE-independent tissue-restricted antigen expression' },
      ],
      clinicalNotes: 'DiGeorge syndrome (22q11.2 deletion) results in thymic hypoplasia with T cell deficiency. Complete DiGeorge requires thymus transplantation. FOXN1 mutations cause T-B+NK+ SCID due to lack of thymic epithelium.',
    },
    5: {
      level: 5,
      summary: 'The thymus functions as a dynamic organ where developmentally programmed and niche-derived signals integrate to generate a diverse, self-tolerant T cell repertoire, with clinical implications for immunodeficiency, autoimmunity, thymoma, and thymic regeneration strategies.',
      explanation: `The thymus represents a critical node in adaptive immunity, and its dysfunction or manipulation has profound clinical consequences. Understanding thymic biology informs diagnosis and treatment of immunological disorders.

**Advanced Thymic Physiology:**

1. **Thymic Crosstalk**

   *Thymocyte-Stroma Interactions:*
   - Bidirectional: TECs require thymocyte signals for maintenance
   - RANKL from thymocytes → mTEC maturation
   - CD40L-CD40 interactions enhance AIRE expression
   - LTα/β signaling organizes medullary structure

   *Consequences of Crosstalk Disruption:*
   - RANK deficiency → reduced mTECs, autoimmunity
   - Blocks in thymocyte development affect TEC homeostasis

2. **Transcriptional and Epigenetic Regulation**

   *AIRE Function:*
   - Partners with DNA-PKcs, PARP1, TOP2a
   - Targets stalled RNA polymerase II at promoters
   - Releases transcriptional stalling of TRA genes
   - Epigenetic marks (H3K4me0) direct targeting

   *mTEC Heterogeneity:*
   - Single-cell studies reveal diverse mTEC populations
   - "Mimetic" cells resemble peripheral cells (tuft, ionocyte-like)
   - Post-AIRE mTECs with distinct expression patterns

3. **Recent Emigrant T Cells (RTEs)**

   - Newly exported T cells with distinct properties
   - Lower proliferative capacity initially
   - Require peripheral maturation
   - Marked by CD31, PTK7
   - Decreased with age

**Clinical Correlations:**

1. **Primary Immunodeficiencies Affecting Thymus**

   *22q11.2 Deletion Syndrome (DiGeorge):*
   - TBX1 haploinsufficiency affects pharyngeal arch development
   - Thymic hypoplasia/aplasia
   - Cardiac defects, hypocalcemia, facial dysmorphism
   - Complete vs partial based on T cell counts
   - Treatment: Thymus transplantation for complete form

   *FOXN1 Deficiency:*
   - Nude/SCID phenotype
   - T-B+NK+ SCID
   - Congenital alopecia

   *CHARGE Syndrome:*
   - CHD7 mutations
   - Thymic hypoplasia
   - Combined immunodeficiency

   *Cartilage-Hair Hypoplasia:*
   - RMRP mutations
   - T cell deficiency

2. **Autoimmune Manifestations of Thymic Defects**

   *APECED/APS-1:*
   - AIRE mutations
   - Chronic mucocutaneous candidiasis
   - Hypoparathyroidism
   - Adrenal insufficiency
   - Multiple autoantibodies

   *Omenn Syndrome:*
   - Hypomorphic RAG mutations
   - Oligoclonal, autoreactive T cells
   - Erythroderma, eosinophilia, elevated IgE

3. **Thymoma and Myasthenia Gravis**

   *Thymoma:*
   - Epithelial tumor of thymus
   - WHO classification: A, AB, B1, B2, B3, thymic carcinoma
   - Associated paraneoplastic syndromes
   - ~30-40% have myasthenia gravis

   *Myasthenia Gravis:*
   - Autoantibodies against AChR (85%), MuSK, LRP4
   - Thymic abnormalities in most patients
   - Thymoma in 10-15%
   - Thymic hyperplasia with germinal centers in others
   - Thymectomy beneficial in many cases

   *Other Thymoma-Associated Conditions:*
   - Pure red cell aplasia
   - Hypogammaglobulinemia (Good syndrome)
   - Acquired immunodeficiency

4. **Thymic Regeneration and Rejuvenation**

   *Clinical Scenarios:*
   - Post-chemotherapy
   - Post-hematopoietic cell transplant
   - HIV treatment (immune reconstitution)
   - Aging

   *Therapeutic Approaches:*
   - IL-7: Enhances thymopoiesis, clinical trials
   - Keratinocyte growth factor (KGF): Protects TECs
   - Sex steroid ablation: Reverses involution
   - Growth hormone/IGF-1: Thymic effects
   - FOXN1 overexpression: Experimental

   *Thymus Organoids:*
   - iPSC-derived TECs
   - Potential for tolerance induction
   - Personalized thymus replacement

5. **Thymus in Transplantation**

   *Thymus Transplantation:*
   - For complete DiGeorge syndrome
   - Cultured thymus slices
   - T cells develop from recipient progenitors
   - Achieves functional immune reconstitution

   *Tolerance Induction:*
   - Thymic injection of antigens
   - Combined thymus/organ transplant strategies
   - Experimental mixed chimerism protocols

**Laboratory Evaluation:**

- T cell subsets: CD3, CD4, CD8 counts
- Naive T cells: CD45RA+CCR7+ (recent thymic emigrants: CD31+)
- TCR excision circles (TRECs): Marker of thymic output
- TCR repertoire diversity (spectratyping, sequencing)
- Autoantibody panels for suspected autoimmunity`,
      keyTerms: [
        { term: 'TREC', definition: 'T cell receptor excision circle; episomal DNA byproduct of TCR rearrangement, used as marker of recent thymic emigrants' },
        { term: 'Good syndrome', definition: 'Immunodeficiency associated with thymoma, characterized by hypogammaglobulinemia and recurrent infections' },
        { term: 'thymus transplantation', definition: 'Procedure implanting cultured thymic tissue for immune reconstitution in athymic patients' },
        { term: 'APECED', definition: 'Autoimmune Polyendocrinopathy-Candidiasis-Ectodermal Dystrophy; caused by AIRE mutations' },
        { term: 'thymoma', definition: 'Neoplasm of thymic epithelial cells; associated with paraneoplastic autoimmune conditions' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- DiGeorge: 22q11.2 deletion, CATCH-22 features, TRECs absent/low
- APECED triad: Chronic mucocutaneous candidiasis, hypoparathyroidism, adrenal insufficiency
- Thymoma workup: CT chest, anti-AChR antibodies, consider PFTs
- Myasthenia gravis with thymoma: Thymectomy recommended regardless of response to therapy
- Post-transplant thymic function: TREC levels predict immune reconstitution
- Newborn SCID screening: TREC-based assay detects T cell lymphopenia`,
    },
  },

  media: [
    {
      id: 'thymus-anatomy',
      type: 'diagram',
      filename: 'thymus-anatomy.svg',
      title: 'Thymus Anatomical Structure',
      description: 'Location and gross anatomy of the thymus in the mediastinum',
    },
    {
      id: 'thymus-histology',
      type: 'histology',
      filename: 'thymus-histology.jpg',
      title: 'Thymus Histology',
      description: 'Light microscopy showing cortex, medulla, and Hassall corpuscles',
    },
    {
      id: 't-cell-development',
      type: 'diagram',
      filename: 't-cell-development.svg',
      title: 'T Cell Development in Thymus',
      description: 'Stages of thymocyte maturation from DN to SP',
    },
  ],
  citations: [
    {
      id: 'klein-2014',
      type: 'article',
      title: 'Positive and negative selection of the T cell repertoire: what thymocytes see (and don\'t see)',
      authors: ['Klein L', 'Kyewski B', 'Allen PM', 'Hogquist KA'],
      source: 'Nature Reviews Immunology',
      url: 'https://doi.org/10.1038/nri3667',
    },
    {
      id: 'openstax-ap-ch21',
      type: 'textbook',
      title: 'The Lymphatic and Immune System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '21',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-introduction',
      license: 'CC BY 4.0',
    },
  ],
  crossReferences: [
    { targetId: 'system-immune', targetType: 'system', relationship: 'parent', label: 'Immune System' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
    { targetId: 'process-t-cell-development', targetType: 'pathway', relationship: 'related', label: 'T Cell Development' },
    { targetId: 'concept-central-tolerance', targetType: 'concept', relationship: 'related', label: 'Central Tolerance' },
  ],
  tags: {
    systems: ['immune', 'lymphatic'],
    structures: ['FMA:9607'],
    topics: ['anatomy', 'physiology', 'immunology', 'development'],
    keywords: ['T cells', 'thymus', 'central tolerance', 'thymocytes', 'AIRE', 'selection'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'pathology', 'pediatrics'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thymusContent;
