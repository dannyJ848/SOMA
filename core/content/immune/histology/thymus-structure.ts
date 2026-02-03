import { EducationalContent } from '../../types';

export const thymusStructureContent: EducationalContent = {
  id: 'histology-thymus-structure',
  type: 'structure',
  name: 'Thymus Structure',
  alternateNames: ['Thymus histology', 'Thymic architecture', 'T cell development organ'],

  levels: {
    1: {
      level: 1,
      summary: 'The thymus is a gland in the chest where T cells mature and learn to protect the body without attacking it.',
      explanation: `The thymus is a small organ located in your upper chest, behind your breastbone. It is most active during childhood and helps train your immune cells.

**What the Thymus Looks Like:**

1. **Outer Part (Cortex)**
   - Darker color
   - Packed with young T cells
   - Where cells first arrive

2. **Inner Part (Medulla)**
   - Lighter color
   - Fewer cells
   - Where mature cells finish training

**What the Thymus Does:**

1. **T Cell School**
   - Young T cells come from bone marrow
   - They learn to recognize threats
   - They learn not to attack the body

2. **Selection Process**
   - Good T cells graduate and leave
   - Bad T cells that might attack the body are removed

**Changes with Age:**
- Largest during childhood
- Shrinks during puberty
- Replaced by fat in adults
- Still works throughout life`,
      keyTerms: [
        { term: 'thymus', definition: 'Organ where T cells develop and mature' },
        { term: 'cortex', definition: 'Outer dark layer of the thymus with many immature T cells' },
        { term: 'medulla', definition: 'Inner lighter layer where T cells complete maturation' },
        { term: 'T cell', definition: 'Type of white blood cell that fights infections' },
      ],
      analogies: [
        'The thymus is like a training academy where new soldiers (T cells) learn to tell friends from enemies.',
        'Think of it as a quality control factory where defective products (self-reactive cells) are removed before shipping.',
      ],
      examples: [
        'A newborn has a large thymus to train all the new T cells needed for immune protection.',
        'The thymus shrinks in adults but continues to produce new T cells throughout life.',
      ],
    },
    2: {
      level: 2,
      summary: 'The thymus is a primary lymphoid organ with cortex and medulla compartments where T cell progenitors undergo selection to generate a self-tolerant, functional T cell repertoire.',
      explanation: `The thymus is the site of T lymphocyte development, where bone marrow-derived progenitors undergo proliferation, differentiation, and selection processes.

**Gross Structure:**

1. **Location and Size:**
   - Anterior superior mediastinum
   - Behind the sternum
   - Largest at puberty (30-40g)
   - Involutes with age (fatty replacement)

2. **Lobular Architecture:**
   - Bilobed structure
   - Lobules separated by connective tissue
   - Each lobule has cortex and medulla
   - Continuous medulla between lobules

**Microanatomy:**

1. **Cortex:**
   - Dark staining (lymphocyte density)
   - Outer 1/3 to 1/2 of lobule
   - Cortical thymocytes (immature T cells)
   - Cortical epithelial cells
   - Macrophages

2. **Medulla:**
   - Lighter staining
   - Center of lobule
   - Medullary thymocytes (mature T cells)
   - Medullary epithelial cells
   - Hassall corpuscles (thymic corpuscles)
   - Dendritic cells

3. **Capsule and Septa:**
   - Fibrous capsule
   - Trabeculae (connective tissue septa)
   - Blood vessels in trabeculae
   - Nerve fibers

**Stromal Cells:**

1. **Thymic Epithelial Cells (TECs):**
   - Cortical TECs (cTECs)
   - Medullary TECs (mTECs)
   - Form three-dimensional network
   - Provide microenvironment for T cells

2. **Dendritic Cells:**
   - Medullary location
   - Present self-antigens
   - Negative selection

3. **Macrophages:**
   - Clear apoptotic thymocytes
   - Cortex and cortico-medullary junction`,
      keyTerms: [
        { term: 'primary lymphoid organ', definition: 'Site where lymphocytes develop and mature; bone marrow and thymus' },
        { term: 'thymocyte', definition: 'Developing T cell within the thymus' },
        { term: 'Hassall corpuscle', definition: 'Concentric whorls of keratinized epithelial cells in thymic medulla' },
        { term: 'thymic involution', definition: 'Age-related decrease in thymic size and function' },
        { term: 'cortico-medullary junction', definition: 'Boundary region between cortex and medulla' },
      ],
      analogies: [
        'The cortex is like the freshman year where many students start but most do not make it through. The medulla is senior year with fewer but more prepared graduates.',
        'Hassall corpuscles are like the fossils of the thymus - unique structures that mark this special organ.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thymic histology reveals distinct cortical and medullary compartments with specialized stromal cells supporting T cell development through positive and negative selection processes.',
      explanation: `The thymic microenvironment provides the signals necessary for T cell receptor development and the selection processes that shape the T cell repertoire.

**Cortical Architecture:**

1. **Thymocyte Populations:**
   - Double-negative (CD4-CD8-): 5%
   - Double-positive (CD4+CD8+): 80%
   - Single-positive (CD4+ or CD8+): 15%
   - Proliferating cells (outer cortex)

2. **Cortical Thymic Epithelial Cells (cTECs):**
   - Stellate morphology
   - Express MHC class I and II
   - Present self-peptides
   - Cytokeratin 5/8 positive
   - Psmb11 (beta5t) expression

3. **Positive Selection:**
   - Occurs in cortex
   - Tests if TCR can bind self-MHC
   - Low affinity recognition = survival
   - No recognition = death by neglect
   - Cortical epithelium presents antigen

**Medullary Architecture:**

1. **Thymocyte Populations:**
   - Single-positive T cells
   - Self-reactive cells deleted
   - Regulatory T cells generated
   - Ready for export to periphery

2. **Medullary Thymic Epithelial Cells (mTECs):**
   - Polygonal morphology
   - Express MHC and co-stimulatory molecules
   - AIRE expression (promiscuous gene expression)
   - Present tissue-restricted antigens
   - Cytokeratin 5/14 positive

3. **Negative Selection:**
   - Occurs in medulla
   - High affinity for self-antigen = deletion
   - mTECs present self-antigens
   - Dendritic cells also participate

4. **Hassall Corpuscles:**
   - Concentric keratinized layers
   - Type VI cytokeratin positive
   - Express thymic stromal lymphopoietin (TSLP)
   - Support regulatory T cell development

**Vascular Supply:**

1. **Blood-Thymus Barrier:**
   - Continuous capillaries (cortex)
   - Tight junctions
   - Prevents antigen entry
   - Protects developing T cells

2. **Medullary Vessels:**
   - Fenestrated capillaries
   - Allow cell entry/exit
   - Post-capillary venules
   - T cell egress site`,
      keyTerms: [
        { term: 'AIRE', definition: 'Autoimmune Regulator; transcription factor for promiscuous gene expression in mTECs' },
        { term: 'positive selection', definition: 'Process selecting T cells with TCR that can recognize self-MHC molecules' },
        { term: 'negative selection', definition: 'Process deleting T cells with high affinity for self-antigens' },
        { term: 'double-positive thymocyte', definition: 'Immature T cell expressing both CD4 and CD8 co-receptors' },
        { term: 'promiscuous gene expression', definition: 'Expression of tissue-restricted genes by mTECs for negative selection' },
      ],
      clinicalNotes: 'DiGeorge syndrome: Thymic aplasia causing T cell deficiency. Myasthenia gravis: Thymic hyperplasia or thymoma common. AIRE mutations cause APS-1 (autoimmune polyendocrinopathy).',
    },
    4: {
      level: 4,
      summary: 'Thymic microanatomy supports complex T cell developmental processes with specialized epithelial subsets, antigen presentation mechanisms, and regulatory pathways ensuring self-tolerance and functional T cell export.',
      explanation: `The thymic stromal compartment creates specialized microenvironments that orchestrate T cell development, selection, and peripheral export.

**Thymic Epithelial Cell Biology:**

1. **Cortical TECs (cTECs):**
   
   *Unique Features:*
   - Express Psmb11 (beta5t subunit)
   - Generates unique peptide repertoire
   - Thymoproteasome function
   - Optimized for positive selection
   
   *Morphology:*
   - Stellate shape
   - Long cytoplasmic processes
   - Form three-dimensional meshwork
   - Express MHC I/II, CD40, ICAM-1

2. **Medullary TECs (mTECs):**
   
   *Heterogeneous Populations:*
   - mTEChi: High MHC II, AIRE+
   - mTEClo: Lower MHC II
   - Post-AIRE cells
   - Keratinized Hassall corpuscles
   
   *AIRE Function:*
   - Transcriptional regulator
   - Induces tissue-restricted antigen expression
   - Thousands of genes expressed
   - Insulin, thyroglobulin, etc.
   - Self-tolerance induction

3. **TEC Development:**
   - From pharyngeal pouch endoderm
   - FOXN1 transcription factor essential
   - Nude mutation (FOXN1) = no thymus
   - NF-kB signaling important

**Selection Mechanisms:**

1. **Positive Selection:**
   - TCR affinity threshold
   - Lck signaling through co-receptors
   - Ras-MAPK pathway activation
   - BCL2 upregulation (survival)
   - CD4 vs CD8 lineage decision

2. **Negative Selection:**
   - High affinity TCR engagement
   - Strong TCR signaling
   - BIM-mediated apoptosis
   - Clonal deletion
   - Some become regulatory T cells

3. **Lineage Commitment:**
   - Kinetic signaling model
   - CD8 requires persistent signaling
   - CD4 if signal interrupted
   - Th-POK transcription factor
   - RUNX3 for CD8

**Egress Mechanisms:**

1. **S1P Gradient:**
   - High S1P in blood/lymph
   - Low S1P in thymus
   - S1PR1 on mature T cells
   - Chemotactic egress signal

2. **Exit Pathways:**
   - Medullary post-capillary venules
   - Cortico-medullary junction
   - Perivascular spaces
   - Lymphatic vessels

**Thymocyte Kinetics:**

1. **Proliferation:**
   - DN stages: Extensive division
   - Cortical DP: Some proliferation
   - SP: Minimal proliferation
   - 98% die in thymus

2. **Development Timeline:**
   - DN to DP: 4-5 days
   - DP to SP: 3-4 days
   - SP maturation: 4-5 days
   - Total: ~2 weeks`,
      keyTerms: [
        { term: 'thymoproteasome', definition: 'Specialized proteasome in cTECs generating peptides for positive selection' },
        { term: 'FOXN1', definition: 'Forkhead box N1; transcription factor essential for thymic epithelial development' },
        { term: 'Th-POK', definition: 'T helper-inducing POZ/Kruppel-like factor; transcription factor for CD4 commitment' },
        { term: 'BIM', definition: 'BCL2-interacting mediator; pro-apoptotic protein mediating negative selection' },
        { term: 'S1PR1', definition: 'Sphingosine-1-phosphate receptor 1; mediates T cell egress from thymus' },
      ],
      clinicalNotes: 'FOXN1 deficiency causes Nude/SCID phenotype. Leaky SCID may present later with autoimmunity. Properdin deficiency (X-linked): Alternative complement pathway defect. Thymic rebound can be seen after chemotherapy in children.',
    },
    5: {
      level: 5,
      summary: 'Thymic pathology encompasses developmental disorders, neoplastic conditions, and autoimmune associations, with histological assessment critical for diagnosis and clinical management.',
      explanation: `Clinical-pathological correlation in thymic disorders requires understanding of developmental biology, neoplastic classification, and autoimmune associations.

**Thymic Hypoplasia/Aplasia:**

1. **DiGeorge Syndrome:**
   
   *Pathology:*
   - 22q11.2 microdeletion
   - Pharyngeal pouch defect
   - Thymic aplasia or hypoplasia
   - Parathyroid hypoplasia
   - Cardiac anomalies
   
   *Immunological:*
   - Variable T cell deficiency
   - Complete aplasia: SCID-like
   - Partial: Less severe
   - May improve with age

2. **FOXN1 Deficiency:**
   - Nude/SCID phenotype
   - Skin and hair abnormalities
   - Absent thymic epithelium
   - T cell deficiency
   - Autosomal recessive

**Thymic Hyperplasia:**

1. **True Thymic Hyperplasia:**
   - Increased thymic size
   - Normal histology
   - Rebound after stress (chemo)
   - Hyperthyroidism
   - Acromegaly

2. **Follicular Hyperplasia:**
   - B cell follicles with GCs
   - Myasthenia gravis (65%)
   - Other autoimmune diseases
   - HIV infection
   - Systemic lupus erythematosus

**Thymic Neoplasms:**

1. **Thymoma:**
   
   *Classification (WHO):*
   - Type A: Spindle cell, medullary
   - Type AB: Mixed
   - Type B1: Lymphocyte-rich, cortical
   - Type B2: Cortical
   - Type B3: Epithelial, atypical
   - Thymic carcinoma: Type C
   
   *Staging (Masaoka):*
   - I: Encapsulated
   - II: Microscopic invasion
   - III: Macroscopic invasion
   - IVA: Pleural/pericardial dissemination
   - IVB: Lymphogenous/hematogenous
   
   *Associations:*
   - Myasthenia gravis (30%)
   - Pure red cell aplasia
   - Hypogammaglobulinemia
   - Autoimmune disorders

2. **Thymic Carcinoma:**
   - Squamous cell carcinoma (most common)
   - Lymphoepithelioma-like
   - Sarcomatoid
   - Poor prognosis
   - Metastatic at presentation

3. **Neuroendocrine Tumors:**
   - Carcinoid tumors
   - Small cell carcinoma
   - Associated with MEN1
   - ACTH/Cushing syndrome

4. **Germ Cell Tumors:**
   - Teratoma (most common)
   - Seminoma
   - Non-seminomatous
   - Elevated tumor markers

**Other Thymic Conditions:**

1. **Thymic Cysts:**
   - Congenital (pharyngeal pouch)
   - Acquired (inflammatory)
   - Multilocular thymic cyst (HIV)
   - Usually incidental

2. **Thymic Lipoma/Fatty Replacement:**
   - Age-related involution
   - Mass-forming variant
   - CT density diagnostic
   - No clinical significance

**Histological Assessment:**

1. **Immunohistochemistry:**
   - CK5/6, p63 (epithelium)
   - CD3 (T cells)
   - CD20 (B cells)
   - CD5, CD117 (thymic carcinoma)
   - Ki-67 (proliferation)

2. **Flow Cytometry:**
   - Rule out lymphoma
   - T cell receptor analysis
   - Clonality assessment

3. **Molecular Testing:**
   - GAIN (thymic carcinoma)
   - Chromosome 6p25 gain
   - Mutational profiling`,
      keyTerms: [
        { term: 'thymoma', definition: 'Neoplasm of thymic epithelial cells with variable lymphocyte component' },
        { term: 'Masaoka staging', definition: 'Surgical-pathological staging system for thymoma based on invasiveness' },
        { term: 'cortical thymoma', definition: 'WHO type B1-B2 thymoma resembling normal thymic cortex' },
        { term: 'thymic carcinoma', definition: 'Malignant thymic epithelial tumor with cytological atypia' },
        { term: 'multilocular thymic cyst', definition: 'Acquired cystic lesion associated with HIV infection' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Myasthenia gravis: 65% have follicular hyperplasia; 15% have thymoma; 10-15% thymectomy non-responsive
- Thymoma: Most common anterior mediastinal mass in adults
- Thymic carcinoma: CD5+, CD117+, unlike thymoma; more aggressive
- Pure red cell aplasia: Associated with thymoma (5-10% of cases)
- Good syndrome: Thymoma + immunodeficiency (hypogammaglobulinemia) + opportunistic infections
- DiGeorge: Calcium issues first clue; 22q11.2 deletion; variable immunodeficiency
- Thymic rebound: Normal finding in children post-chemo; do not mistake for recurrence`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['histology', 'anatomy', 'development'],
    keywords: ['thymus', 'histology', 'T cell development', 'thymic selection', 'AIRE'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default thymusStructureContent;
