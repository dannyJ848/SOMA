import { EducationalContent } from '../../types';

export const spleenContent: EducationalContent = {
  id: 'structure-spleen',
  type: 'structure',
  name: 'Spleen',
  alternateNames: ['Lien', 'Splenic organ'],
  fmaId: 'FMA:7196',

  levels: {
    1: {
      level: 1,
      summary: 'The spleen is an organ in your belly that filters blood and helps fight infections.',
      explanation: `The spleen is about the size of your fist and sits on the left side of your belly, tucked under your ribs. Even though you can't feel it, it's always working hard!

**What the Spleen Does:**

1. **Blood Filter**
   - Removes old, worn-out red blood cells
   - Takes out germs and damaged cells from your blood
   - It's like a car wash for your blood!

2. **Germ Fighter**
   - Stores white blood cells that fight infections
   - Makes antibodies (special proteins that attack germs)
   - Helps your body remember germs it has seen before

3. **Blood Storage**
   - Keeps extra blood cells for emergencies
   - If you get hurt and lose blood, the spleen can release stored cells

**Can You Live Without a Spleen?**
Yes! If someone's spleen is damaged or has to be removed, other organs can take over most of its jobs. But people without a spleen need to be more careful about certain infections.`,
      keyTerms: [
        { term: 'spleen', definition: 'An organ that filters blood and helps fight infections' },
        { term: 'filter', definition: 'To remove unwanted things from a liquid' },
        { term: 'antibodies', definition: 'Proteins made by your body that attack germs' },
      ],
      analogies: [
        'The spleen is like a blood recycling center - it gets rid of old red blood cells and keeps the useful parts.',
        'Think of the spleen as a security checkpoint that catches germs traveling in your blood.',
      ],
      examples: [
        'When you get sick, your spleen helps make antibodies to fight the infection.',
        'Old red blood cells (about 120 days old) are removed by the spleen.',
      ],
    },
    2: {
      level: 2,
      summary: 'The spleen is the largest lymphoid organ, functioning as a blood filter that removes old erythrocytes and participates in immune responses against blood-borne pathogens.',
      explanation: `The spleen is located in the left upper quadrant of the abdomen, between the 9th and 11th ribs. It weighs approximately 150-200 grams in adults.

**Structural Organization:**

The spleen has two main functional areas:

1. **Red Pulp** (~75% of splenic volume)
   - Filters blood and removes old/damaged red blood cells
   - Contains splenic cords (cords of Billroth) and venous sinusoids
   - Red blood cells must squeeze through narrow slits to return to circulation
   - Old or abnormal cells can't pass and are destroyed by macrophages

2. **White Pulp** (~25% of splenic volume)
   - Lymphoid tissue surrounding arteries
   - Contains T cells (around central arteriole - PALS)
   - Contains B cells (in follicles)
   - Site of immune responses to blood-borne antigens

**Functions:**

1. **Filtration**
   - Removes senescent (old) red blood cells (~1% per day)
   - Removes cells with inclusions (Howell-Jolly bodies, parasites)
   - Culling: Complete destruction of abnormal cells
   - Pitting: Removing inclusions while sparing the cell

2. **Immune Function**
   - Produces antibodies (especially IgM)
   - Responds to polysaccharide antigens
   - Contains opsonins: properdin, tuftsin
   - Critical for defense against encapsulated bacteria

3. **Hematopoiesis**
   - Produces blood cells during fetal life
   - Can resume in adults with bone marrow failure (extramedullary hematopoiesis)

4. **Reservoir Function**
   - Stores platelets (~30% of body's platelets)
   - Stores blood in some species (less significant in humans)`,
      keyTerms: [
        { term: 'red pulp', definition: 'The part of the spleen that filters blood and removes old red blood cells' },
        { term: 'white pulp', definition: 'Lymphoid tissue in the spleen where immune responses occur' },
        { term: 'PALS', definition: 'Periarteriolar lymphoid sheath; T cell zone around central arterioles', pronunciation: 'palz' },
        { term: 'encapsulated bacteria', definition: 'Bacteria with protective outer capsules that the spleen helps fight (e.g., Streptococcus pneumoniae)' },
        { term: 'Howell-Jolly bodies', definition: 'Nuclear remnants in red blood cells that are normally removed by the spleen' },
      ],
      analogies: [
        'The red pulp works like a quality control station, testing red blood cells for flexibility and function.',
        'The white pulp is like an immune system outpost, monitoring blood for invaders.',
      ],
    },
    3: {
      level: 3,
      summary: 'The spleen integrates mechanical filtration of aged erythrocytes through splenic cords with immunological surveillance via organized lymphoid compartments, providing critical defense against encapsulated organisms and blood-borne pathogens.',
      explanation: `The spleen represents a unique secondary lymphoid organ that combines the functions of blood filtration and adaptive immune responses within a highly organized microarchitecture.

**Vascular Architecture:**

1. **Arterial Supply**
   - Splenic artery (from celiac trunk) → trabecular arteries
   - Central arterioles enter white pulp
   - Penicillar arterioles branch in red pulp
   - Open circulation: Blood enters splenic cords directly
   - Closed circulation: Direct vessel connections (minority)

2. **Venous Drainage**
   - Splenic sinusoids → trabecular veins → splenic vein
   - Splenic vein joins superior mesenteric vein → portal vein
   - No lymphatic drainage from splenic parenchyma

**White Pulp Organization:**

1. **Periarteriolar Lymphoid Sheath (PALS)**
   - T cell zone
   - CD4+ T cells predominate
   - Dendritic cells present antigens
   - Surrounds central arteriole

2. **Follicles**
   - B cell zone, adjacent to PALS
   - Primary follicles: Naive B cells
   - Secondary follicles: Germinal centers after activation
   - Follicular dendritic cells trap antigen-antibody complexes

3. **Marginal Zone**
   - Interface between white and red pulp
   - Specialized marginal zone B cells (IgM+IgD-)
   - Marginal zone macrophages
   - Critical for T-independent antibody responses
   - Filters blood entering white pulp

**Red Pulp Microanatomy:**

1. **Splenic Cords (Cords of Billroth)**
   - Reticular cell framework
   - Macrophages embedded in cords
   - Plasma cells producing antibodies

2. **Venous Sinusoids**
   - Lined by specialized endothelial cells
   - Ring fibers create narrow inter-endothelial slits (1-3 μm)
   - RBCs must deform to pass through

**Filtration Mechanisms:**

1. **Mechanical Filtration**
   - Deformability testing at sinusoidal slits
   - Normal RBCs (7.5 μm) squeeze through 1-3 μm slits
   - Stiff, old, or abnormal cells are trapped

2. **Culling**
   - Complete destruction of senescent RBCs
   - Macrophages phagocytose entire cells
   - Iron recycled to bone marrow

3. **Pitting**
   - Removal of intracellular inclusions
   - Howell-Jolly bodies, Heinz bodies, parasites (Babesia)
   - Cell survives with inclusion removed

**Immunological Functions:**

1. **Antibody Production**
   - Major source of circulating IgM
   - Critical for T-independent type 2 antigens (polysaccharides)
   - Marginal zone B cells respond rapidly

2. **Opsonin Production**
   - Tuftsin: Enhances phagocytosis
   - Properdin: Activates alternative complement pathway

3. **Pathogen Clearance**
   - Filters bacteremic blood
   - Clears opsonized bacteria
   - Essential for encapsulated organisms: "SHiNE SKiS"
     * Streptococcus pneumoniae
     * Haemophilus influenzae
     * Neisseria meningitidis
     * Escherichia coli (K1)
     * Salmonella
     * Klebsiella
     * Streptococcus (Group B)`,
      keyTerms: [
        { term: 'marginal zone', definition: 'Region at white-red pulp interface containing specialized B cells and macrophages that respond to blood-borne antigens' },
        { term: 'splenic cords', definition: 'Reticular tissue framework of red pulp containing macrophages and providing filtration structure' },
        { term: 'pitting function', definition: 'Splenic removal of intracellular inclusions from erythrocytes without destroying the cell' },
        { term: 'culling', definition: 'Complete splenic destruction and removal of abnormal or senescent red blood cells' },
        { term: 'tuftsin', definition: 'Tetrapeptide produced by spleen that enhances macrophage and neutrophil phagocytic activity' },
      ],
      clinicalNotes: 'Asplenic patients are at high risk for overwhelming post-splenectomy infection (OPSI) with encapsulated bacteria. Vaccination against pneumococcus, meningococcus, and H. influenzae is essential. Howell-Jolly bodies on peripheral smear indicate splenic dysfunction.',
    },
    4: {
      level: 4,
      summary: 'The spleen functions as an integrated immunological-hematological organ where distinct microanatomical compartments enable mechanical erythrocyte quality control, marginal zone-dependent T-independent immunity, and germinal center-based antibody responses, with dysfunction causing specific susceptibilities to infection and altered erythrocyte morphology.',
      explanation: `The spleen's unique architecture creates specialized niches that coordinate mechanical blood filtration with adaptive and innate immune functions, making it essential for defense against specific pathogens.

**Advanced Microanatomy:**

1. **White Pulp Compartmentalization**

   *T Cell Zone (PALS):*
   - Central arteriole at core
   - Predominantly CD4+ T cells, some CD8+
   - XCR1+ and CD11b+ dendritic cells
   - Fibroblastic reticular cells (FRCs) produce CCL19, CCL21
   - T-B border zone for cognate interactions

   *B Cell Follicles:*
   - Follicular B cells (IgM+IgD+)
   - Germinal center formation upon activation
   - Follicular dendritic cells (non-hematopoietic)
   - Tingible body macrophages clear apoptotic GC B cells

   *Marginal Zone:*
   - Outer: Marginal zone macrophages (MARCO+, SIGNR1+)
   - Inner: Marginal zone B cells (IgMhiIgDlo, CD1d+, CD21hi)
   - Metallophilic macrophages (MOMA-1+, SIGLEC-1+)
   - MAdCAM-1+ marginal sinus

2. **Red Pulp Organization**

   *Splenic Cords:*
   - CD169+ macrophages (sialoadhesin)
   - F4/80+ red pulp macrophages
   - Plasma cells (long-lived)
   - Open blood supply

   *Sinusoidal Endothelium:*
   - CD8α+ endothelial cells
   - Discontinuous basal lamina
   - Ring fibers (stress fibers)
   - Inter-endothelial slits: 1-3 μm

**Immunological Specializations:**

1. **Marginal Zone B Cell Responses**

   *Characteristics:*
   - Pre-activated state
   - Strong BCR signaling capacity
   - High expression of CD1d (lipid presentation)
   - Complement receptors (CR1, CR2)

   *T-Independent Type 2 Responses:*
   - Polysaccharide antigens (capsules)
   - Rapid IgM production (days)
   - Memory MZ B cells for re-exposure
   - Deficient in children <2 years (immature MZ)

   *T-Independent Type 1:*
   - TLR ligands (LPS)
   - Direct B cell activation

2. **Germinal Center Reactions**

   - Conventional T-dependent responses
   - Somatic hypermutation
   - Affinity maturation
   - Class-switch recombination
   - Memory B cell and plasma cell generation

3. **Splenic Dendritic Cell Populations**

   - CD8α+ DCs: Cross-presentation, Batf3-dependent
   - CD11b+ DCs: CD4 T cell activation
   - Plasmacytoid DCs: Type I interferon
   - Monocyte-derived DCs during inflammation

**Erythrocyte Quality Control:**

1. **Deformability Testing**

   - RBC membrane must deform (7.5 μm → 1-3 μm slit)
   - Requires intact cytoskeleton (spectrin, ankyrin)
   - ATP-dependent membrane flexibility
   - Surface area:volume ratio critical

2. **Recognition Signals for Removal**

   - Phosphatidylserine exposure (eat-me signal)
   - Band 3 clustering → natural antibody binding
   - CD47 loss (don't-eat-me signal)
   - Oxidative damage markers

3. **Pitting Mechanism**

   - Partial phagocytosis at sinusoidal passage
   - Removes: Howell-Jolly bodies, Heinz bodies, siderotic granules, Pappenheimer bodies
   - Removes parasites: Plasmodium, Babesia

**Reservoir and Hematopoietic Functions:**

1. **Platelet Pooling**
   - ~30% of platelets in spleen
   - Expanded in splenomegaly (hypersplenism)
   - Contributes to post-splenectomy thrombocytosis

2. **Extramedullary Hematopoiesis**
   - Reactivated in myelofibrosis, thalassemia
   - Contains HSC niches
   - Can contribute to cytopenias (sequestration)

3. **Monocyte Reservoir**
   - Splenic red pulp stores monocytes
   - Deploy during inflammation (myocardial infarction model)
   - Human relevance still being defined`,
      keyTerms: [
        { term: 'marginal zone B cell', definition: 'Specialized splenic B cell population that rapidly responds to blood-borne polysaccharide antigens independently of T cell help' },
        { term: 'MARCO', definition: 'Macrophage receptor with collagenous structure; scavenger receptor on marginal zone macrophages for pathogen clearance' },
        { term: 'CD47', definition: '"Don\'t eat me" signal on erythrocytes; loss promotes phagocytic clearance by splenic macrophages' },
        { term: 'hypersplenism', definition: 'Splenic sequestration causing peripheral blood cytopenias despite adequate bone marrow production' },
        { term: 'FRC', definition: 'Fibroblastic reticular cell; stromal cell in T zone producing chemokines and forming conduit network' },
      ],
      clinicalNotes: 'Splenic function can be assessed by absence of Howell-Jolly bodies, pitted RBC count, and radiolabeled heat-damaged RBC clearance. Functional asplenia occurs in sickle cell disease (autosplenectomy), celiac disease, and inflammatory bowel disease.',
    },
    5: {
      level: 5,
      summary: 'The spleen serves as a critical nexus for immunological surveillance, erythrocyte homeostasis, and reservoir functions, with clinical significance spanning infectious complications of asplenia, hypersplenism syndromes, malignant infiltration, and emerging roles in cardiovascular and inflammatory diseases.',
      explanation: `Understanding splenic biology is essential for managing asplenic patients, evaluating splenomegaly, and recognizing the organ's emerging roles in systemic disease.

**Advanced Immunology:**

1. **Marginal Zone Biology**

   *Development:*
   - Derived from transitional B cells (T2)
   - Notch2 signaling essential (Delta-like 1 ligand)
   - Absent until ~2 years of age in humans
   - MZ B cells recirculate (unlike mice)

   *Function in Human Disease:*
   - MZ lymphoma: CD5-, CD10-, sIgM+
   - Autoimmunity: MZ B cells produce autoantibodies
   - IgA nephropathy: MZ origin proposed

   *Splenic Marginal Zone Lymphoma:*
   - Indolent B cell lymphoma
   - Villous lymphocytes on smear
   - Often hepatitis C associated
   - Splenectomy may be therapeutic

2. **Splenic B Cell Memory**

   *IgM Memory B Cells:*
   - Distinct population (IgM+IgD+CD27+)
   - Circulating equivalent of MZ B cells
   - Reduced in asplenia
   - Biomarker of splenic function

   *Long-Lived Plasma Cells:*
   - Red pulp is plasma cell niche
   - Survival signals from stromal cells
   - IL-6, APRIL, BAFF

3. **Innate Immune Functions**

   *Natural Antibodies:*
   - Produced by B1 cells and MZ B cells
   - Anti-phosphorylcholine, anti-oxidized lipids
   - Protective against pneumococcus
   - Housekeeping: Clear apoptotic cells

   *Complement:*
   - Splenic synthesis of C3, C4, Factor B
   - Alternative pathway activation (properdin)
   - Critical for opsonization

**Clinical Syndromes:**

1. **Overwhelming Post-Splenectomy Infection (OPSI)**

   *Risk:*
   - Lifetime risk: 3-5%
   - Highest in first 2-3 years
   - Higher in children, immunocompromised
   - Higher with hematologic indications

   *Microbiology:*
   - S. pneumoniae (~50-70%)
   - H. influenzae type b
   - N. meningitidis
   - Capnocytophaga canimorsus (dog bites)
   - Babesia, Plasmodium

   *Prevention:*
   - Vaccination: PCV13 then PPSV23, MenACWY, MenB, Hib
   - Prophylactic antibiotics (children, high-risk adults)
   - Patient education: Medical alert, early antibiotics
   - Influenza vaccination annually

   *Presentation:*
   - Rapid progression (hours)
   - Non-specific prodrome → septic shock
   - Purpura fulminans, DIC
   - ~50% mortality even with treatment

2. **Splenomegaly Evaluation**

   *Massive Splenomegaly:*
   - CML, myelofibrosis, hairy cell leukemia
   - Gaucher disease
   - Malaria (chronic), visceral leishmaniasis
   - Thalassemia major

   *Moderate Splenomegaly:*
   - Portal hypertension
   - Lymphoma, leukemia
   - Hemolytic anemias
   - Infections (EBV, HIV, endocarditis)

   *Mild Splenomegaly:*
   - Infections (mononucleosis)
   - Congestive heart failure
   - Autoimmune (SLE, RA)

3. **Hypersplenism**

   *Mechanism:*
   - Increased sequestration in enlarged spleen
   - Pan-cytopenia or selective cytopenia
   - Bone marrow compensatory hyperplasia

   *Causes:*
   - Portal hypertension (cirrhosis)
   - Myeloproliferative neoplasms
   - Storage diseases
   - Hemoglobinopathies

   *Management:*
   - Treat underlying cause
   - Splenectomy (severe, symptomatic)
   - Splenic artery embolization
   - Consider functional asplenia protocols post-splenectomy

4. **Splenic Trauma**

   *Injury Grading (AAST):*
   - Grade I: Subcapsular hematoma <10%
   - Grade II: Parenchymal laceration 1-3 cm
   - Grade III: Laceration >3 cm, >25% devascularization
   - Grade IV: >25% devascularization
   - Grade V: Shattered spleen, hilar devascularization

   *Management Evolution:*
   - Non-operative management preferred (hemodynamically stable)
   - Angioembolization for active bleeding
   - Splenorrhaphy, partial splenectomy
   - Splenectomy for uncontrolled hemorrhage
   - Post-trauma vaccines per asplenia protocols

5. **Sickle Cell and the Spleen**

   *Acute Splenic Sequestration:*
   - Sudden splenic enlargement
   - Hemoglobin drop ≥2 g/dL
   - Emergency in children with SCD
   - Treatment: Transfusion, consider splenectomy

   *Autosplenectomy:*
   - Progressive infarction
   - Functional asplenia by age 5 in HbSS
   - Howell-Jolly bodies on smear

**Emerging Roles:**

1. **Cardiovascular Disease**
   - Splenic monocyte reservoir deploys to heart post-MI
   - Splenic inflammation in atherosclerosis
   - Splenectomy associated with increased cardiovascular events

2. **Cancer Immunotherapy**
   - Spleen as reservoir of anti-tumor T cells
   - Splenic marginal zone critical for CAR-T production
   - Splenic irradiation affects immunotherapy response`,
      keyTerms: [
        { term: 'OPSI', definition: 'Overwhelming post-splenectomy infection; fulminant sepsis with encapsulated organisms in asplenic patients' },
        { term: 'autosplenectomy', definition: 'Progressive splenic infarction and fibrosis leading to functional asplenia, classically in sickle cell disease' },
        { term: 'splenic sequestration', definition: 'Acute pooling of blood in the spleen causing hemodynamic compromise, seen in sickle cell disease' },
        { term: 'IgM memory B cell', definition: 'Circulating B cell population (CD27+IgM+IgD+) related to splenic marginal zone; reduced in asplenia' },
        { term: 'pitted RBC count', definition: 'Quantification of red cells with membrane pits; elevated in functional asplenia; correlates with infection risk' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- Vaccinations for splenectomy: Ideally 2 weeks pre-op; PCV13 → PPSV23 (8 weeks later), MenACWY, MenB, Hib
- Emergency splenectomy: Vaccinate 2 weeks post-op when stable
- Howell-Jolly bodies: Pathognomonic for asplenia/hyposplenia
- Splenomegaly with lymphocytosis + villous lymphocytes → splenic MZL
- Massive splenomegaly + night sweats + early satiety → think myelofibrosis, CML
- Post-splenectomy: Lifelong elevated WBC, platelets (may need to adjust reference ranges)
- Ruptured spleen: Kehr sign (left shoulder pain from diaphragmatic irritation)`,
    },
  },

  media: [
    {
      id: 'spleen-anatomy',
      type: 'diagram',
      filename: 'spleen-anatomy.svg',
      title: 'Spleen Gross Anatomy',
      description: 'External features and vascular supply of the spleen',
    },
    {
      id: 'spleen-microanatomy',
      type: 'diagram',
      filename: 'spleen-microanatomy.svg',
      title: 'Spleen Microarchitecture',
      description: 'White pulp, red pulp, and marginal zone organization',
    },
  ],
  citations: [
    {
      id: 'mebius-2005',
      type: 'article',
      title: 'Structure and function of the spleen',
      authors: ['Mebius RE', 'Kraal G'],
      source: 'Nature Reviews Immunology',
      url: 'https://doi.org/10.1038/nri1669',
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
    { targetId: 'system-lymphatic', targetType: 'system', relationship: 'parent', label: 'Lymphatic System' },
    { targetId: 'structure-lymph-nodes', targetType: 'structure', relationship: 'sibling', label: 'Lymph Nodes' },
  ],
  tags: {
    systems: ['immune', 'lymphatic', 'hematopoietic'],
    structures: ['FMA:7196'],
    topics: ['anatomy', 'physiology', 'immunology', 'hematology'],
    keywords: ['spleen', 'white pulp', 'red pulp', 'marginal zone', 'asplenia', 'filtration'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'surgery', 'pathology'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spleenContent;
