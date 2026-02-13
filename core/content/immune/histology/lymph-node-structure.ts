import { EducationalContent } from '../../types';

export const lymphNodeStructureContent: EducationalContent = {
  id: 'histology-lymph-node-structure',
  type: 'structure',
  name: 'Lymph Node Structure',
  alternateNames: ['Lymph node histology', 'Nodal architecture', 'Lymphoid follicle'],

  levels: {
    1: {
      level: 1,
      summary: 'Lymph nodes are small bean-shaped organs that filter lymph fluid and help the body fight infections.',
      explanation: `Lymph nodes are small glands scattered throughout your body, especially in your neck, armpits, and groin. They are part of your immune system and help fight germs.

**What Lymph Nodes Look Like:**
- Small - about the size of a pea or bean
- Bean-shaped
- Connected by lymphatic vessels

**Inside a Lymph Node:**

1. **Outer Layer (Capsule)**
   - Tough covering that protects the node
   - Keeps everything inside organized

2. **Cortex (Outer Area)**
   - Contains follicles (little clusters of cells)
   - Where B cells live and work
   - Germinal centers form when fighting infection

3. **Paracortex (Middle Area)**
   - Where T cells are located
   - High endothelial venules let cells enter

4. **Medulla (Inner Area)**
   - Contains medullary cords and sinuses
   - Plasma cells here make antibodies

**What Lymph Nodes Do:**
- Filter lymph fluid
- Trap germs and foreign substances
- Activate immune cells
- Make antibodies`,
      keyTerms: [
        { term: 'lymph node', definition: 'Small organ that filters lymph and contains immune cells' },
        { term: 'cortex', definition: 'The outer layer of the lymph node containing follicles' },
        { term: 'medulla', definition: 'The inner part of the lymph node with cords and sinuses' },
        { term: 'follicle', definition: 'A cluster of B cells in the lymph node cortex' },
      ],
      analogies: [
        'Lymph nodes are like security checkpoints along a highway, checking everyone who passes through for problems.',
        'Think of a lymph node as a police station where officers (immune cells) wait to respond to trouble.',
      ],
      examples: [
        'When you have a sore throat, the lymph nodes in your neck may swell as they fight the infection.',
        'Doctors often check lymph nodes during physical exams to see if they are enlarged.',
      ],
    },
    2: {
      level: 2,
      summary: 'Lymph nodes are secondary lymphoid organs with distinct microanatomical compartments supporting antigen presentation, lymphocyte activation, and immune response generation.',
      explanation: `Lymph nodes are encapsulated secondary lymphoid organs that filter lymph and serve as sites for antigen presentation and lymphocyte activation.

**Gross Structure:**

1. **Size and Shape:**
   - 1-25 mm in length
   - Bean-shaped with convex and concave surfaces
   - Concave surface (hilum): Vessels enter/exit
   - 500-600 lymph nodes in adult human

2. **Stroma:**
   - Fibrous capsule
   - Trabeculae (connective tissue partitions)
   - Reticular fiber network
   - Fibroblastic reticular cells

**Microanatomical Compartments:**

1. **Cortex:**
   - Primary follicles: Naive B cells
   - Secondary follicles: Germinal centers (after activation)
   - Mantle zone: Small lymphocytes surrounding follicle
   - Marginal zone (at periphery)

2. **Paracortex:**
   - T cell zone
   - High endothelial venules (HEVs)
   - Interdigitating dendritic cells
   - Contains both CD4+ and CD8+ T cells

3. **Medulla:**
   - Medullary cords: Plasma cells, B cells, macrophages
   - Medullary sinuses: Filter lymph, contain macrophages
   - Reticular cell framework

**Vascular Architecture:**

1. **Afferent Lymphatics:**
   - Multiple vessels enter convex surface
   - Bring lymph from tissues
   - Drain into subcapsular sinus

2. **Efferent Lymphatics:**
   - Single vessel exits hilum
   - Carries filtered lymph
   - Leads to next node or lymphatic ducts

3. **Blood Vessels:**
   - Artery and vein at hilum
   - Supply oxygen and nutrients
   - Route for lymphocyte entry/exit`,
      keyTerms: [
        { term: 'secondary lymphoid organ', definition: 'Organ where immune responses are initiated; includes lymph nodes, spleen, MALT' },
        { term: 'germinal center', definition: 'Site of B cell proliferation and differentiation in activated follicles' },
        { term: 'high endothelial venule', definition: 'Specialized blood vessel allowing lymphocyte entry into lymph node' },
        { term: 'reticular fiber', definition: 'Fine collagen fibers forming supportive framework in lymphoid organs' },
        { term: 'subcapsular sinus', definition: 'Space beneath capsule where afferent lymph first enters' },
      ],
      analogies: [
        'The cortex is like the classroom where B cells learn to recognize invaders. The paracortex is where T cells get their training.',
        'The medullary sinuses are like drainage channels that allow filtered lymph to exit while macrophages catch any remaining debris.',
      ],
    },
    3: {
      level: 3,
      summary: 'Lymph nodes exhibit complex compartmentalization enabling antigen capture, lymphocyte trafficking, and coordinated cellular interactions essential for adaptive immune responses.',
      explanation: `Lymph node architecture facilitates efficient antigen presentation, lymphocyte recruitment, and the cellular interactions necessary for generating protective immunity.

**Cellular Composition:**

1. **B Cell Zones (Cortex):**
   
   *Primary Follicles:*
   - Resting naive B cells (IgD+, IgM+)
   - Follicular dendritic cells (FDCs)
   - CXCL13 chemokine gradient
   
   *Secondary Follicles:*
   - Germinal center reaction
   - Dark zone: Proliferating centroblasts
   - Light zone: Centrocytes, selection
   - Tingible body macrophages
   - FDCs with immune complexes

2. **T Cell Zone (Paracortex):**
   
   *T Cell Subsets:*
   - CD4+ T cells predominate
   - CD8+ T cells present
   - Regulatory T cells
   - Naive and memory populations
   
   *Antigen Presenting Cells:*
   - Interdigitating dendritic cells
   - Migratory dendritic cells from periphery
   - CCR7-mediated homing
   - T cell priming occurs here

3. **Medullary Region:**
   - Plasma cells (antibody production)
   - Macrophages (phagocytosis)
   - Reticular network support

**Lymphocyte Trafficking:**

1. **Entry Mechanisms:**
   
   *From Blood (HEVs):*
   - Selectin-mediated rolling
   - Chemokine activation
   - Integrin activation (LFA-1)
   - Diapedesis through endothelium
   - CCR7 guides T cells to paracortex
   - CXCR5 guides B cells to follicles
   
   *From Lymph:*
   - Afferent lymph carries dendritic cells
   - Subcapsular sinus macrophages
   - Antigen transport to follicles

2. **Exit Mechanisms:**
   - S1P (sphingosine-1-phosphate) gradient
   - S1PR1 expression on lymphocytes
   - Egress via efferent lymphatic
   - Returns to circulation

**Antigen Presentation:**

1. **Subcapsular Sinus:**
   - CD169+ macrophages capture antigen
   - Non-degradative capture
   - Transport to follicular B cells
   - Presentation to B cells

2. **Intranodal Migration:**
   - Dendritic cells arrive via afferent lymph
   - Migrate to paracortex via CCR7
   - Present antigen to T cells
   - B cells acquire antigen, present to T cells`,
      keyTerms: [
        { term: 'follicular dendritic cell', definition: 'Non-phagocytic cell presenting antigen to B cells in germinal centers' },
        { term: 'centroblast', definition: 'Proliferating B cell in dark zone of germinal center' },
        { term: 'tingible body macrophage', definition: 'Macrophage in germinal center with apoptotic debris' },
        { term: 'S1P', definition: 'Sphingosine-1-phosphate; lipid mediator creating egress gradient' },
        { term: 'diapedesis', definition: 'Migration of blood cells through blood vessel walls' },
      ],
      clinicalNotes: 'Lymph node architecture is disrupted in lymphomas. Follicular hyperplasia shows reactive germinal centers. Paracortical hyperplasia seen in viral infections.',
    },
    4: {
      level: 4,
      summary: 'Lymph node microanatomy supports complex immunological functions through specialized stromal cell networks, chemokine-directed compartmentalization, and dynamic cellular interactions during immune responses.',
      explanation: `The lymph node stromal cell network creates specialized microenvironments that orchestrate immune cell positioning, migration, and functional interactions during homeostasis and immune responses.

**Stromal Cell Populations:**

1. **Fibroblastic Reticular Cells (FRCs):**
   
   *Characteristics:*
   - Podoplanin (gp38) positive
   - Express ER-TR7 antigen
   - Form reticular fiber conduits
   - Produce CCL19, CCL21
   
   *Functions:*
   - Structural framework
   - Guide T cell migration
   - Present self-antigens
   - Regulate T cell survival
   - Produce IL-7 for T cell homeostasis

2. **Follicular Dendritic Cells (FDCs):**
   
   *Phenotype:*
   - CD21/CD35 (complement receptors)
   - Fc receptors (CD32, CD16)
   - CXCL13 production
   - Not bone marrow derived
   
   *Functions:*
   - Antigen presentation to B cells
   - Long-term antigen retention
   - B cell selection in germinal centers
   - Immune complex trapping

3. **Marginal Reticular Cells:**
   - Subcapsular location
   - MAdCAM-1 expression
   - CXCL13 production
   - Interface between B and T zones

**Germinal Center Biology:**

1. **Dark Zone:**
   - Proliferating centroblasts
   - BCL6 high expression
   - AID expression (somatic hypermutation)
   - Rapid division (6-12 hours/cycle)
   - Directed migration by CXCL12

2. **Light Zone:**
   - Non-dividing centrocytes
   - Selection by antigen on FDCs
   - T follicular helper (Tfh) cells
   - CXCR4 guides cells here
   - BCL2 upregulation (survival)

3. **Selection Process:**
   - Centrocytes test BCR affinity
   - High affinity: Tfh help, survival
   - Low affinity: Apoptosis
   - Class-switch recombination
   - Plasma cell and memory differentiation

**High Endothelial Venule Biology:**

1. **Structure:**
   - Cuboidal endothelium
   - Tight junctions modified
   - Basement membrane gaps
   - Surrounded by pericytes

2. **Molecular Mechanisms:**
   - L-selectin ligands (PNAd)
   - CCL21 presentation
   - ICAM-1, VCAM-1 expression
   - Chemokine-triggered integrin activation

3. **Cellular Entry:**
   - Rolling: L-selectin/PNAd
   - Activation: CCR7/CCL21
   - Arrest: LFA-1/ICAM-1
   - Transmigration: Paracellular

**Conduit System:**

1. **Structure:**
   - FRC-lined channels
   - Collagen fiber core
   - Connects subcapsular sinus to HEVs
   - Transport small molecules

2. **Function:**
   - Rapid antigen transport
   - Chemokine distribution
   - Communication pathway`,
      keyTerms: [
        { term: 'podoplanin', definition: 'Glycoprotein marker of FRCs and lymphatic endothelium' },
        { term: 'AID', definition: 'Activation-Induced Cytidine Deaminase; enzyme for somatic hypermutation and class-switching' },
        { term: 'Tfh cell', definition: 'T follicular helper cell; CD4+ T cell helping B cells in germinal centers' },
        { term: 'conduit', definition: 'FRC-lined channel transporting small molecules within lymph node' },
        { term: 'PNAd', definition: 'Peripheral Node Addressin; L-selectin ligand on HEVs' },
      ],
      clinicalNotes: 'Lymph node stromal cells can be infected by HIV (FRCs, FDCs). Conduits allow HIV dissemination. Germinal centers are sites of viral replication and persistence.',
    },
    5: {
      level: 5,
      summary: 'Lymph node histology reflects dynamic immunological processes with specialized microenvironments supporting antigen-specific responses, and pathological alterations provide diagnostic insights in infections, lymphomas, and immune dysregulation.',
      explanation: `Clinical-pathological correlation in lymph node histology requires understanding normal architecture, reactive patterns, and neoplastic transformations.

**Reactive Lymph Node Patterns:**

1. **Follicular Hyperplasia:**
   
   *Features:*
   - Enlarged, polarized follicles
   - Prominent germinal centers
   - Mantle zones preserved
   - Starry sky pattern (tingible body macrophages)
   
   *Clinical Associations:*
   - Rheumatoid arthritis
   - HIV infection (early)
   - Syphilis
   - Nonspecific immune response

2. **Paracortical Hyperplasia:**
   
   *Features:*
   - Expanded paracortex
   - T cell proliferation
   - Immunoblasts present
   - Follicles may be small
   
   *Clinical Associations:*
   - Viral infections (EBV, CMV)
   - Drug reactions
   - Dermatopathic lymphadenopathy
   - Post-vaccination

3. **Sinus Hyperplasia:**
   
   *Features:*
   - Distended sinuses
   - Sinus histiocytosis
   - May contain pigment, debris
   - Cortical follicles prominent
   
   *Clinical Associations:*
   - Lymph node draining cancer
   - Dermatopathic lymphadenopathy
   - Rosai-Dorfman disease

**Infectious Pathology:**

1. **Granulomatous Inflammation:**
   
   *Caseating:*
   - Central necrosis
   - Tuberculosis
   - Fungal infections
   
   *Non-caseating:*
   - Sarcoidosis
   - Cat scratch disease (stellate)
   - Toxoplasmosis

2. **Viral Infections:**
   
   *HIV:*
   - Early: Follicular hyperplasia
   - Progression: Follicular involution
   - Late: Burnt-out appearance
   - FDC network disruption
   
   *EBV:*
   - Paracortical hyperplasia
   - Immunoblast proliferation
   - Reed-Sternberg-like cells
   - May mimic lymphoma

**Lymphoma Diagnosis:**

1. **B Cell Lymphomas:**
   
   *Follicular Lymphoma:*
   - Back-to-back follicles
   - Loss of polarization
   - BCL2 positive (germinal centers)
   - t(14;18) translocation
   
   *Diffuse Large B Cell Lymphoma:*
   - Effaced architecture
   - Sheets of large cells
   - BCL6+, CD10+/-
   - Aggressive presentation
   
   *Mantle Cell Lymphoma:*
   - Expanded mantle zones
   - Monotonous small cells
   - CD5+, cyclin D1+
   - t(11;14) translocation

2. **T Cell Lymphomas:**
   
   *Peripheral T Cell Lymphoma:*
   - Paracortical expansion
   - Polymorphous infiltrate
   - Reed-Sternberg-like B cells
   - EBV positive

**Special Stains and Markers:**

1. **Immunohistochemistry Panel:**
   - B cells: CD20, CD79a, PAX5
   - T cells: CD3, CD5, CD7
   - Subsets: CD4, CD8, CD10, BCL6
   - Proliferation: Ki-67
   - Germinal center: CD21 (FDCs)

2. **In Situ Hybridization:**
   - EBER (EBV)
   - Kappa/lambda light chains
   - Viral genomes

**Clinical Applications:**

1. **Lymph Node Biopsy Indications:**
   - Persistent enlargement (>4 weeks)
   - Hard, fixed nodes
   - Constitutional symptoms
   - Supraclavicular location
   - Size >2 cm

2. **Fine Needle Aspiration vs Excisional:**
   - FNA: Screening, triage
   - Excisional: Architecture assessment
   - Excisional preferred for lymphoma diagnosis`,
      keyTerms: [
        { term: 'starry sky pattern', definition: 'Low-power appearance of germinal centers with scattered tingible body macrophages' },
        { term: 'follicular involution', definition: 'Loss of germinal centers in lymph node; seen in HIV progression' },
        { term: 'EBER', definition: 'EBV-encoded small RNA; marker for EBV infection by in situ hybridization' },
        { term: 'immunoblast', definition: 'Large activated lymphocyte with prominent nucleolus' },
        { term: 'dermatopathic lymphadenopathy', definition: 'Reactive lymph node changes associated with skin disease' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Supraclavicular lymphadenopathy: High suspicion for malignancy (Virchow node on left)
- Excisional biopsy preferred for lymphoma diagnosis (need architecture)
- Follicular hyperplasia: Reactive germinal centers, polarized, starry sky
- Follicular lymphoma: Back-to-back follicles, BCL2+ germinal centers, no polarization
- Reed-Sternberg cells: CD15+, CD30+, CD45-, PAX5+ (weak)
- HIV lymph nodes: Early follicular hyperplasia, late follicular burnout
- Kikuchi-Fujimoto disease: Necrotizing lymphadenitis, young women, cervical nodes`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune', 'lymphatic'],
    topics: ['histology', 'anatomy', 'immunology'],
    keywords: ['lymph node', 'histology', 'germinal center', 'follicle'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default lymphNodeStructureContent;
