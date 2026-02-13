import { EducationalContent } from '../../types';

export const spleenHistologyContent: EducationalContent = {
  id: 'histology-spleen-histology',
  type: 'structure',
  name: 'Spleen Histology',
  alternateNames: ['Splenic histology', 'White pulp histology', 'Red pulp histology'],

  levels: {
    1: {
      level: 1,
      summary: 'The spleen has two main parts visible under the microscope: white pulp for immune functions and red pulp for blood filtration.',
      explanation: `When you look at the spleen under a microscope, you can see two distinct areas with different jobs.

**White Pulp:**
- Looks lighter in color
- Contains lymphocytes (immune cells)
- Surrounds small arteries
- Fights infections
- Makes antibodies

**Red Pulp:**
- Looks darker red
- Filters the blood
- Removes old blood cells
- Stores blood cells
- Contains many blood vessels

**How They Work Together:**
1. Blood enters through the splenic artery
2. Some goes to white pulp (immune surveillance)
3. Most goes to red pulp (filtration)
4. Cleaned blood exits through splenic vein

**Why the Colors:**
- White pulp: Mostly white blood cells, less blood
- Red pulp: Full of red blood cells, giving it a red color`,
      keyTerms: [
        { term: 'white pulp', definition: 'The immune portion of the spleen containing lymphocytes' },
        { term: 'red pulp', definition: 'The filtering portion of the spleen containing blood sinusoids' },
        { term: 'lymphocyte', definition: 'A type of white blood cell that fights infection' },
        { term: 'splenic artery', definition: 'The main blood vessel bringing blood to the spleen' },
      ],
      analogies: [
        'The white pulp is like a security office checking IDs, while the red pulp is like a recycling plant processing old materials.',
        'Think of the spleen as having a security team (white pulp) and a cleanup crew (red pulp) working side by side.',
      ],
      examples: [
        'When you look at a spleen slice under the microscope, the white pulp appears as purple dots scattered throughout red tissue.',
        'The white pulp gets bigger when fighting an infection, just like lymph nodes swell.',
      ],
    },
    2: {
      level: 2,
      summary: 'Splenic histology reveals distinct white pulp lymphoid tissue surrounding arteries and red pulp filtration areas with sinusoids and cords, enabling blood filtration and immune surveillance.',
      explanation: `The spleen's microanatomy supports its dual functions of immune surveillance and blood filtration through specialized compartments.

**White Pulp Organization:**

1. **Periarteriolar Lymphoid Sheath (PALS):**
   - T cell zone
   - Surrounds central arteriole
   - CD4+ and CD8+ T cells
   - Sheath is 1-2 cells thick in sections

2. **Lymphoid Follicles:**
   - B cell zone adjacent to PALS
   - Primary follicles (resting)
   - Secondary follicles (germinal centers when active)
   - Marginal zone surrounds follicles

3. **Marginal Zone:**
   - Interface between white and red pulp
   - Marginal zone B cells
   - Marginal metallophilic macrophages
   - Special sinus (marginal sinus)

**Red Pulp Organization:**

1. **Splenic Cords (Cords of Billroth):**
   - Reticular fiber framework
   - Contains macrophages, plasma cells
   - Open blood circulation
   - Site of erythrocyte quality control

2. **Splenic Sinusoids:**
   - Specialized venous vessels
   - Lined by rod-shaped endothelial cells
   - Discontinuous basement membrane
   - Ring fibers (stress fibers)
   - Blood filters through 1-3 μm slits

3. **Pulp Arterioles:**
   - Branch from central arteriole
   - Some end in white pulp (closed)
   - Some open into cords (open)
   - Some become penicillar arterioles

**Vascular Patterns:**

1. **Open Circulation (90%):**
   - Blood empties into cords
   - Filters through sinusoid walls
   - Returns to circulation

2. **Closed Circulation (10%):**
   - Direct arteriolar-sinusoid connection
   - Faster transit
   - Less filtration`,
      keyTerms: [
        { term: 'PALS', definition: 'Periarteriolar Lymphoid Sheath; T cell zone around central arterioles' },
        { term: 'marginal zone', definition: 'Region at white-red pulp interface with specialized B cells and macrophages' },
        { term: 'splenic cord', definition: 'Reticular tissue framework between sinusoids containing macrophages' },
        { term: 'penicillar arteriole', definition: 'Small terminal arteriole in red pulp with sheath of macrophages' },
        { term: 'Billroth cords', definition: 'Another name for splenic cords; reticular tissue of red pulp' },
      ],
      analogies: [
        'The PALS is like a sleeve of T cells wrapped around the artery, checking all the blood that passes by.',
        'The splenic sinusoids act like a sieve with tiny holes that only flexible cells can squeeze through.',
      ],
    },
    3: {
      level: 3,
      summary: 'Splenic histology demonstrates complex microarchitecture with compartmentalized immune zones, specialized filtration structures, and unique vascular patterns enabling mechanical and immunological blood processing.',
      explanation: `Detailed microscopic examination reveals the structural adaptations that enable the spleen's specialized functions.

**Cellular Components:**

1. **White Pulp Cells:**
   
   *T Cells (PALS):*
   - Predominantly CD4+ helper T cells
   - CD8+ cytotoxic T cells
   - Memory and naive populations
   - Activated during immune responses
   
   *B Cells:*
   - Follicular B cells (IgD+, IgM+)
   - Marginal zone B cells (IgMhi, IgDlo, CD21hi)
   - Undergo activation in germinal centers
   - Plasma cell differentiation
   
   *Macrophages:*
   - Marginal metallophilic macrophages
   - Marginal zone macrophages
   - Not phagocytic in white pulp

2. **Red Pulp Cells:**
   
   *Macrophages:*
   - CD163+ red pulp macrophages
   - Express scavenger receptors
   - Phagocytose old RBCs, pathogens
   - Iron recycling function
   
   *Endothelial Cells:*
   - Rod-shaped morphology
   - CD8+ expression (unique)
   - Form sinusoid lining
   - Gap junctions between cells

**Structural Specializations:**

1. **Sinusoid Architecture:**
   
   *Endothelial Cells:*
   - Elongated shape (long axis radial)
   - Synthesize unique basal lamina
   - Reticulin ring fibers (actin)
   - Intercellular slits: 1-3 μm
   
   *Basement Membrane:*
   - Discontinuous
   - Contains ring fibers
   - Allows cell passage

2. **Erythrocyte Transit:**
   - RBCs (7.5 μm) must deform
   - Pass through 1-3 μm slits
   - Deformability test
   - Stiff cells trapped for removal

**Germinal Center Dynamics:**

1. **In White Pulp:**
   - Form during immune responses
   - Similar to lymph node GCs
   - Dark zone (proliferation)
   - Light zone (selection)
   - Surrounded by mantle zone

2. **Antigen Transport:**
   - Marginal zone B cells capture antigen
   - Transport to follicles
   - Present to follicular B cells
   - Tfh cells provide help

**Specialized Macrophage Populations:**

1. **Marginal Zone Macrophages:**
   - Express MARCO, SIGNR1
   - Scavenger receptors
   - Blood-borne antigen capture
   - Non-phagocytic presentation

2. **Metallophilic Macrophages:**
   - MOMA-1+, SIGLEC-1+
   - Interface between zones
   - Antigen presentation
   - Barrier function

3. **Red Pulp Macrophages:**
   - F4/80+, CD169+
   - High phagocytic capacity
   - Iron storage (hemosiderin)
   - Pitting function`,
      keyTerms: [
        { term: 'MARCO', definition: 'Macrophage Receptor with Collagenous Structure; scavenger receptor on MZ macrophages' },
        { term: 'metallophilic macrophage', definition: 'Splenic macrophage at marginal zone-white pulp interface' },
        { term: 'ring fiber', definition: 'Actin-containing stress fiber in sinusoid basement membrane' },
        { term: 'pitting', definition: 'Removal of inclusions from RBCs by splenic macrophages' },
        { term: 'hemosiderin', definition: 'Iron storage complex visible as brown pigment in macrophages' },
      ],
      clinicalNotes: 'Howell-Jolly bodies in peripheral smear indicate splenic dysfunction. Hyposplenia can be assessed by pitted RBC count. Splenic amyloidosis shows deposits in red pulp vessel walls.',
    },
    4: {
      level: 4,
      summary: 'Splenic histology reflects complex immunological and hematological functions with specialized stromal networks, distinct macrophage populations, and unique structural adaptations for erythrocyte quality control and immune surveillance.',
      explanation: `Advanced understanding of splenic histology integrates cellular immunology, vascular biology, and the structural basis for clinical functional assessment.

**Stromal Cell Networks:**

1. **White Pulp Stroma:**
   
   *Fibroblastic Reticular Cells:*
   - Similar to lymph node FRCs
   - Form conduit network
   - Produce CCL19, CCL21
   - Support T cell zone
   
   *Follicular Dendritic Cells:*
   - CD21/CD35 positive
   - Immune complex retention
   - Germinal center organization
   - Long-term antigen storage

2. **Red Pulp Stroma:**
   - Reticular cell framework
   - Type IV collagen, laminin
   - Fibronectin rich
   - Supports sinusoid structure

**Vascular Anatomy Details:**

1. **Central Arteriole:**
   - Branch of trabecular artery
   - Enters white pulp at eccentric position
   - PALS surrounds it
   - Branches at follicle margin

2. **Penicillar Arterioles:**
   - Arterial capillaries
   - Sheathed capillaries
   - Macrophage sheath
   - Open or closed circulation

3. **Blood Flow Patterns:**
   
   *Open Circulation:*
   - Blood exits unsheathed capillaries
   - Enters splenic cords
   - Slow transit through cords
   - Active filtration
   
   *Closed Circulation:*
   - Direct capillary-sinusoid connection
   - Faster transit
   - Less filtration time

**Cellular Kinetics:**

1. **Lymphocyte Migration:**
   - HEV equivalent: Penicillar arterioles
   - Marginal zone: Entry point
   - Chemokine-directed movement
   - CXCL13 (B cells), CCL21 (T cells)

2. **Erythrocyte Sequestration:**
   - Normal transit time: 30-60 minutes
   - Delayed in hypersplenism
   - Quality control during passage
   - Surface area:volume ratio test

**Histochemical Features:**

1. **Special Stains:**
   - Reticulin stain: Framework
   - Iron stain: Hemosiderin
   - PAS: Basement membranes
   - CD8: Sinusoid endothelium

2. **Immunohistochemistry:**
   - CD68/CD163: Macrophages
   - CD21: FDCs
   - CD3: T cells
   - CD20: B cells
   - CD8: Sinusoid endothelium (unique)

**Pathological Changes:**

1. **Reactive Changes:**
   - Follicular hyperplasia
   - Marginal zone expansion
   - Germinal center development
   - Red pulp congestion

2. **Atrophic Changes:**
   - White pulp depletion
   - Fibrosis
   - Autosplenectomy (sickle cell)
   - Amyloid deposition`,
      keyTerms: [
        { term: 'sheathed capillary', definition: 'Penicillar arteriole surrounded by macrophage sheath in red pulp' },
        { term: 'hyposplenism', definition: 'Reduced splenic function; associated with Howell-Jolly bodies' },
        { term: 'autosplenectomy', definition: 'Progressive splenic infarction leading to functional asplenia' },
        { term: 'siderophage', definition: 'Macrophage containing hemosiderin iron pigment' },
        { term: 'white pulp atrophy', definition: 'Loss of lymphoid tissue in spleen; seen in immunodeficiency, aging' },
      ],
      clinicalNotes: 'Littoral cell angioma: vascular tumor from sinusoid lining cells (CD8+, CD31+, CD68+). Splenic hamartoma: disorganized red pulp elements. Accessory spleen: common (10-30%), usually near splenic hilum.',
    },
    5: {
      level: 5,
      summary: 'Splenic histopathology provides diagnostic insights across infectious, neoplastic, and storage disorders, with specialized staining patterns and architectural changes guiding clinical interpretation.',
      explanation: `Clinical-pathological correlation in splenic histology requires integration of architectural patterns, cellular morphology, and specialized techniques.

**Reactive Splenic Conditions:**

1. **Infectious Mononucleosis:**
   - Marked white pulp hyperplasia
   - Immunoblast proliferation
   - Reed-Sternberg-like cells
   - Red pulp congestion
   - May mimic lymphoma

2. **Malaria:**
   - Red pulp hyperplasia
   - Phagocytosed parasites visible
   - Pigment-laden macrophages
   - May see granulomas

3. **Tuberculosis:**
   - Caseating granulomas
   - Splenic involvement in miliary TB
   - AFB staining positive

4. **Sarcoidosis:**
   - Non-caseating granulomas
   - Splenic involvement common
   - May cause hypersplenism

**Splenic Lymphomas:**

1. **Splenic Marginal Zone Lymphoma:**
   
   *Histology:*
   - Effaced white pulp architecture
   - Small lymphocytes with villous projections
   - Red pulp infiltration
   - Sinuses preserved
   
   *Immunophenotype:*
   - CD20+, CD79a+
   - IgD+, IgM+
   - CD5-, CD10-, CD23-
   - CD43+/-
   
   *Clinical:*
   - Splenomegaly
   - Villous lymphocytes in blood
   - Hepatitis C association

2. **Hairy Cell Leukemia:**
   - Infiltrates red pulp
   - Blood lakes (pseudosinuses)
   - TRAP stain positive
   - CD103+, CD25+, CD11c+
   - BRAF V600E mutation

3. **Lymphoplasmacytic Lymphoma:**
   - MYD88 L265P mutation
   - IgM paraprotein
   - Mast cell hyperplasia
   - PAS-positive intranuclear inclusions

**Non-Lymphoid Tumors:**

1. **Littoral Cell Angioma:**
   - From sinusoid lining cells
   - Anastomosing vascular channels
   - Papillary projections
   - CD31+, CD68+, CD8+
   - May have hemophagocytosis

2. **Sclerosing Angiomatoid Nodular Transformation (SANT):*
   - Nodular transformation
   - Multiple vascular patterns
   - CD31+, CD34+, CD68+
   - Benign, often incidental

3. **Hemangioma:**
   - Most common benign tumor
   - Cavernous or capillary
   - CD31+, CD34+
   - Often incidental finding

**Storage Diseases:**

1. **Gaucher Disease:**
   - Gaucher cells in red pulp
   - Wrinkled paper cytoplasm
   - PAS positive
   - Splenomegaly, hypersplenism

2. **Niemann-Pick Disease:**
   - Foamy histiocytes
   - Sphingomyelin accumulation
   - Sea-blue histiocytes

**Vascular Disorders:**

1. **Peliosis:**
   - Blood-filled cystic spaces
   - No endothelial lining
   - Associated with steroids, TB
   - Risk of rupture

2. **Infarction:**
   - Coagulative necrosis
   - Wedge-shaped (if arterial)
   - Fibrous scarring
   - Common in sickle cell disease`,
      keyTerms: [
        { term: 'villous lymphocyte', definition: 'Lymphocyte with hairy cytoplasmic projections; seen in SMZL' },
        { term: 'blood lake', definition: 'Pseudosinus filled with blood in hairy cell leukemia' },
        { term: 'Gaucher cell', definition: 'Macrophage with glucocerebroside accumulation; wrinkled cytoplasm' },
        { term: 'TRAP stain', definition: 'Tartrate-resistant acid phosphatase; positive in hairy cell leukemia' },
        { term: 'peliosis', definition: 'Blood-filled spaces without endothelial lining' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Accessory spleen: Found in 10-30%, most common near hilum; can hypertrophy after splenectomy
- Howell-Jolly bodies: Nuclear remnants in RBCs indicate splenic dysfunction
- Hyposplenism: Pitted RBC count >12% indicates reduced function
- SMZL: Villous lymphocytes, CD103 negative (vs hairy cell leukemia CD103 positive)
- Hereditary spherocytosis: Spherocytes seen, splenic sequestration
- Sickle cell: Autosplenectomy by age 5 in homozygous disease
- Splenic amyloid: Congo red positive, apple-green birefringence`,
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['immune', 'lymphatic', 'hematopoietic'],
    topics: ['histology', 'anatomy', 'pathology'],
    keywords: ['spleen', 'histology', 'white pulp', 'red pulp', 'marginal zone'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spleenHistologyContent;
