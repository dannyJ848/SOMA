/**
 * Blood Components - Comprehensive Educational Content
 *
 * Covers the composition of blood including red blood cells, white blood cells,
 * platelets, and plasma. Essential foundation for understanding hematology.
 */

import { EducationalContent } from '../../types';

export const bloodComponents: EducationalContent = {
  id: 'physiology-blood-components',
  type: 'concept',
  name: 'Blood Components',
  alternateNames: ['Blood composition', 'Blood elements', 'Formed elements'],

  levels: {
    1: {
      level: 1,
      summary: 'Blood is made up of liquid (plasma) and tiny cells that float in it, including red cells, white cells, and platelets.',
      explanation: `Blood is like a river flowing through your body, carrying important things to every part of you.

**What Blood Contains:**

Think of blood as a soup with different ingredients floating in it:

1. **Plasma (the liquid part)** - About half of your blood is this yellowish liquid. It is mostly water and carries nutrients, hormones, and waste products.

2. **Red Blood Cells** - These are tiny disc-shaped cells that give blood its red color. Their job is to carry oxygen from your lungs to your whole body. You have trillions of them!

3. **White Blood Cells** - These are your body's soldiers that fight germs and infections. There are fewer of them than red cells, but they are very important for staying healthy.

4. **Platelets** - These are tiny cell pieces that act like bandages inside your body. When you get a cut, platelets rush to the spot and stick together to stop the bleeding.

**Why Blood Is Important:**
- Delivers oxygen so your cells can make energy
- Brings food (nutrients) to every part of your body
- Takes away waste products
- Fights infections
- Helps stop bleeding when you get hurt
- Keeps your body temperature just right`,
      keyTerms: [
        { term: 'plasma', definition: 'The liquid part of blood that is mostly water' },
        { term: 'red blood cells', definition: 'Cells that carry oxygen and make blood look red' },
        { term: 'white blood cells', definition: 'Cells that fight germs and infections' },
        { term: 'platelets', definition: 'Tiny cell pieces that help stop bleeding' },
      ],
      analogies: [
        'Blood is like a delivery service - red cells are the trucks carrying oxygen, white cells are security guards, and platelets are repair workers.',
        'Think of plasma like the water in a swimming pool, and the blood cells are like people floating in it.',
      ],
      examples: [
        'When you donate blood, about one pint is collected - that is less than 10% of your total blood.',
        'If you have ever seen blood separate in a tube, the yellow liquid on top is plasma.',
      ],
    },
    2: {
      level: 2,
      summary: 'Blood consists of plasma (55%) and formed elements (45%), including erythrocytes, leukocytes, and thrombocytes, each with specific functions.',
      explanation: `Blood is a specialized connective tissue composed of cells suspended in a liquid matrix called plasma. An average adult has about 5 liters of blood.

**Blood Composition:**

**Plasma (55% of blood volume):**
- 90% water
- 7% plasma proteins (albumin, globulins, fibrinogen)
- 3% other solutes (nutrients, wastes, gases, electrolytes, hormones)

**Formed Elements (45% of blood volume):**

1. **Red Blood Cells (Erythrocytes):**
   - Most numerous (4.5-5.5 million per microliter)
   - Biconcave disc shape increases surface area
   - Contain hemoglobin for oxygen transport
   - No nucleus (allows more room for hemoglobin)
   - Lifespan: 120 days
   - Made in bone marrow

2. **White Blood Cells (Leukocytes):**
   - 5,000-10,000 per microliter
   - Several types: neutrophils, lymphocytes, monocytes, eosinophils, basophils
   - Fight infections and foreign invaders
   - Can leave blood vessels to enter tissues
   - Lifespan: hours to years depending on type

3. **Platelets (Thrombocytes):**
   - 150,000-400,000 per microliter
   - Cell fragments from megakaryocytes
   - Essential for blood clotting
   - Lifespan: 8-10 days

**Hematocrit:**
The percentage of blood volume occupied by red blood cells (normally 42-52% for men, 37-47% for women).

**Clinical Importance:**
- Low red cells = anemia (fatigue, weakness)
- Low white cells = infection risk
- Low platelets = bleeding risk
- Abnormal plasma proteins = various diseases`,
      keyTerms: [
        { term: 'erythrocyte', definition: 'Red blood cell; carries oxygen using hemoglobin', pronunciation: 'eh-RITH-roh-site' },
        { term: 'leukocyte', definition: 'White blood cell; part of the immune system', pronunciation: 'LOO-koh-site' },
        { term: 'thrombocyte', definition: 'Platelet; cell fragment essential for clotting', pronunciation: 'THROM-boh-site' },
        { term: 'hematocrit', definition: 'Percentage of blood volume made up of red blood cells', pronunciation: 'hee-MAT-oh-krit' },
        { term: 'hemoglobin', definition: 'Iron-containing protein in red cells that carries oxygen', pronunciation: 'HEE-moh-glow-bin' },
      ],
      analogies: [
        'Hematocrit is like measuring how much of a juice box is actually fruit pieces versus liquid.',
        'The biconcave shape of red cells is like a donut without a hole - this shape lets them squeeze through tiny capillaries.',
      ],
    },
    3: {
      level: 3,
      summary: 'Blood is a heterogeneous fluid tissue with precisely regulated cellular and acellular components, each contributing to homeostasis through oxygen transport, immunity, hemostasis, and biochemical exchange.',
      explanation: `## Plasma Composition

**Water (90%):**
- Solvent for all dissolved substances
- Heat absorption and distribution
- Medium for chemical reactions

**Plasma Proteins (7%):**

| Protein | % of Total | Function |
|---------|-----------|----------|
| Albumin | 60% | Oncotic pressure, transport carrier |
| Globulins | 35% | Immunity (immunoglobulins), transport (transferrin) |
| Fibrinogen | 4% | Clotting factor (Factor I) |
| Regulatory proteins | 1% | Hormones, enzymes |

**Other Solutes (3%):**
- Electrolytes: Na+, K+, Ca2+, Mg2+, Cl-, HCO3-, HPO42-
- Nutrients: Glucose, amino acids, lipids, vitamins
- Waste products: Urea, creatinine, bilirubin
- Gases: O2, CO2
- Hormones and signaling molecules

## Formed Elements

**Erythrocytes:**
- Dimensions: 7.5 micrometers diameter, 2 micrometers thick
- No nucleus, mitochondria, or ribosomes
- Cytoskeleton: Spectrin-actin network provides flexibility
- Contains ~280 million hemoglobin molecules per cell
- Hemoglobin: 4 globin chains + 4 heme groups (each with Fe2+)
- Oxygen-carrying capacity: 1.34 mL O2 per gram hemoglobin

**Leukocytes (The Differential):**

| Cell Type | % of WBC | Function |
|-----------|----------|----------|
| Neutrophils | 50-70% | Phagocytosis, first responders |
| Lymphocytes | 20-40% | Adaptive immunity (T cells, B cells, NK cells) |
| Monocytes | 2-8% | Phagocytosis, antigen presentation |
| Eosinophils | 1-4% | Parasitic infections, allergic responses |
| Basophils | 0.5-1% | Histamine release, allergic responses |

**Thrombocytes:**
- Fragments of megakaryocyte cytoplasm
- Diameter: 2-3 micrometers
- Contain granules: Dense (ADP, serotonin), Alpha (vWF, fibrinogen)
- Surface receptors: GPIb (binds vWF), GPIIb/IIIa (binds fibrinogen)

## Clinical Correlations

**Complete Blood Count (CBC):**
- RBC count, hemoglobin, hematocrit
- WBC count with differential
- Platelet count
- RBC indices (MCV, MCH, MCHC, RDW)

**Abnormalities:**
- Pancytopenia: Low all cell lines (bone marrow failure, leukemia)
- Leukocytosis: Elevated WBC (infection, inflammation, leukemia)
- Leukopenia: Low WBC (immunodeficiency, chemotherapy)
- Thrombocytosis: High platelets (reactive, myeloproliferative)
- Thrombocytopenia: Low platelets (ITP, TTP, DIC)`,
      keyTerms: [
        { term: 'oncotic pressure', definition: 'Osmotic pressure exerted by plasma proteins, particularly albumin, that retains fluid in vessels', pronunciation: 'on-KOT-ik' },
        { term: 'spectrin', definition: 'Cytoskeletal protein providing red cell membrane flexibility and shape', pronunciation: 'SPEK-trin' },
        { term: 'differential', definition: 'The proportional count of different white blood cell types' },
        { term: 'MCV', definition: 'Mean corpuscular volume; average red blood cell size (normal 80-100 fL)' },
        { term: 'pancytopenia', definition: 'Reduction in all three blood cell lines (RBC, WBC, platelets)', pronunciation: 'pan-sy-toh-PEE-nee-ah' },
      ],
      clinicalNotes: 'The CBC is one of the most commonly ordered laboratory tests. Understanding normal values and common abnormalities is essential for interpreting any patient presentation.',
    },
    4: {
      level: 4,
      summary: 'Blood component physiology integrates membrane biology, protein biochemistry, and cellular immunology, with clinical manifestations reflecting disruptions in production, function, or destruction of specific elements.',
      explanation: `## Erythrocyte Membrane and Metabolism

**Membrane Structure:**
- Lipid bilayer with integral and peripheral proteins
- Glycophorin A, B, C: Carry blood group antigens
- Band 3 (AE1): Anion exchanger, structural anchor
- Spectrin-anion cytoskeleton: alpha and beta spectrin tetramers
- Vertical interactions: Ankyrin links spectrin to Band 3
- Horizontal interactions: Spectrin-actin-protein 4.1 junctions

**Membrane Defects:**
- Hereditary spherocytosis: Spectrin/ankyrin deficiency
- Hereditary elliptocytosis: Spectrin/protein 4.1 defects
- Results in altered shape, decreased deformability, splenic sequestration

**Erythrocyte Metabolism:**
- No mitochondria = anaerobic glycolysis only
- Embden-Meyerhof pathway: ATP production
- Hexose monophosphate shunt: NADPH for oxidative defense
- Rapoport-Luebering shunt: 2,3-DPG synthesis
- Methemoglobin reductase: Maintains iron as Fe2+

**2,3-Diphosphoglycerate (2,3-DPG):**
- Binds deoxyhemoglobin, stabilizes T state
- Right shifts oxygen-hemoglobin dissociation curve
- Increased in: Hypoxia, anemia, alkalosis
- Decreased in: Stored blood, acidosis

## Plasma Protein Dynamics

**Albumin (35-50 g/L):**
- Synthesized in liver (12-25 g/day)
- Half-life: 18-20 days
- Functions:
  - 75-80% of plasma oncotic pressure
  - Transport: Fatty acids, bilirubin, hormones, drugs
  - Buffer for acid-base balance
  - Antioxidant

**Hypoalbuminemia Causes:**
- Decreased synthesis: Liver disease, malnutrition
- Increased loss: Nephrotic syndrome, protein-losing enteropathy
- Redistribution: Inflammation (acute phase response)
- Dilution: Fluid overload

**Acute Phase Response:**
- Positive acute phase reactants: CRP, ferritin, fibrinogen, hepcidin
- Negative acute phase reactants: Albumin, transferrin, transthyretin
- Mediated by IL-6, IL-1, TNF-alpha

## Leukocyte Biology

**Granulopoiesis:**
- Myeloblast -> Promyelocyte -> Myelocyte -> Metamyelocyte -> Band -> Segmented neutrophil
- Transit time: 7-14 days
- Reserve pool in marrow: 10x circulating pool
- Left shift: Increased immature forms (bands) in blood

**Neutrophil Function:**
- Margination and rolling (selectins)
- Adhesion (integrins: LFA-1, Mac-1)
- Diapedesis (PECAM-1)
- Chemotaxis (IL-8, C5a, fMLP)
- Phagocytosis and oxidative burst
- Degranulation and NET formation

**Lymphocyte Subsets:**
- CD4+ T cells: Helper function, cytokine production
- CD8+ T cells: Cytotoxic function
- B cells: Antibody production (CD19+, CD20+)
- NK cells: Innate cytotoxicity (CD16+, CD56+)
- Normal CD4/CD8 ratio: 1.5-2.0

## Platelet Ultrastructure

**Surface Membrane:**
- Open canalicular system (OCS): Increases surface area
- Dense tubular system (DTS): Calcium storage
- Glycocalyx: Glycoprotein receptors

**Granules:**
| Type | Contents |
|------|----------|
| Alpha granules | vWF, PF4, fibrinogen, Factor V, P-selectin, growth factors |
| Dense granules | ADP, ATP, serotonin, calcium, polyphosphates |
| Lysosomes | Acid hydrolases |

**Platelet Production:**
- Megakaryocyte polyploidization (up to 128N)
- Proplatelet formation and release
- Thrombopoietin (TPO): Primary growth factor
- TPO produced constitutively, cleared by platelets
- Low platelets = high TPO = increased production`,
      keyTerms: [
        { term: 'spectrin', definition: 'Flexible cytoskeletal protein forming a network under RBC membrane essential for shape and deformability' },
        { term: '2,3-DPG', definition: '2,3-diphosphoglycerate; allosteric modulator of hemoglobin that decreases oxygen affinity' },
        { term: 'acute phase response', definition: 'Inflammatory response causing altered synthesis of plasma proteins (increased CRP, decreased albumin)' },
        { term: 'left shift', definition: 'Increased immature neutrophils (bands) in peripheral blood indicating acute bacterial infection or stress' },
        { term: 'thrombopoietin', definition: 'Primary growth factor for megakaryocyte development and platelet production; constitutively produced and cleared by platelets' },
      ],
      clinicalNotes: 'Stored blood loses 2,3-DPG within 1-2 weeks, increasing hemoglobin oxygen affinity and potentially impairing tissue oxygen delivery in massive transfusion. The "left shift" terminology comes from the graphical representation of neutrophil maturation stages.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of blood components integrates molecular genetics, systems biology, and translational medicine to inform precision diagnostics and targeted therapeutics in hematologic disorders.',
      explanation: `## Erythrocyte Molecular Biology

**Hemoglobin Genetics and Switching:**
- Embryonic: Gower 1 (zeta2epsilon2), Gower 2 (alpha2epsilon2), Portland (zeta2gamma2)
- Fetal: HbF (alpha2gamma2) - High O2 affinity, resistant to sickling
- Adult: HbA (alpha2beta2) 95-98%, HbA2 (alpha2delta2) 2-3%

**Globin Gene Clusters:**
- Alpha cluster: Chromosome 16 (5'-zeta-alpha2-alpha1-3')
- Beta cluster: Chromosome 11 (5'-epsilon-Ggamma-Agamma-delta-beta-3')
- Locus control region (LCR): Enhancer elements for developmental switching

**Clinical Implications:**
- Hydrops fetalis: Loss of all alpha genes (Hb Barts: gamma4)
- Thalassemia: Imbalanced globin chain synthesis
- Sickle cell: HbS beta-chain mutation (Glu6Val)
- HbF induction therapy: Hydroxyurea, gene therapy approaches

**Red Cell Senescence:**
- Decreased enzyme activity (hexokinase, G6PD)
- Oxidative damage accumulation
- Phosphatidylserine exposure (eat-me signal)
- CD47 reduction (loss of dont-eat-me signal)
- Splenic macrophage recognition and phagocytosis

## Plasma Proteomics

**Clotting Factor Hierarchy:**
| Factor | Pathway | Half-life | Vitamin K dependent |
|--------|---------|-----------|---------------------|
| I (Fibrinogen) | Common | 4-5 days | No |
| II (Prothrombin) | Common | 3-4 days | Yes |
| V | Common | 12-36 hrs | No |
| VII | Extrinsic | 4-6 hrs | Yes |
| VIII | Intrinsic | 8-12 hrs | No |
| IX | Intrinsic | 18-24 hrs | Yes |
| X | Common | 1-2 days | Yes |
| XI | Intrinsic | 2-3 days | No |
| XII | Intrinsic | 2-3 days | No |
| XIII | Common | 9-14 days | No |

**Immunoglobulin Structure:**
- IgG: Most abundant, secondary response, crosses placenta
- IgM: Primary response, pentamer, complement activation
- IgA: Mucosal immunity, dimer with secretory component
- IgE: Allergic reactions, parasitic immunity
- IgD: B cell surface receptor

**Complement System:**
- Classical pathway: C1q binding to antibody-antigen
- Alternative pathway: Spontaneous C3 hydrolysis
- Lectin pathway: Mannose-binding lectin recognition
- Terminal pathway: MAC formation (C5b-C9)

## Advanced Leukocyte Biology

**Hematopoietic Stem Cell Biology:**
- HSC markers: CD34+, CD38-, CD90+, CD45RA-
- Self-renewal vs differentiation balance
- Niche interactions: Osteoblasts, endothelial cells, CXCL12-expressing cells
- Key pathways: Notch, Wnt, Hedgehog, BMP

**Clonal Hematopoiesis of Indeterminate Potential (CHIP):**
- Somatic mutations in hematopoietic cells
- Common genes: DNMT3A, TET2, ASXL1
- Increased with age (>10% over 70 years)
- Associated with increased cardiovascular risk
- Small increase in hematologic malignancy risk

**Flow Cytometry Applications:**
| Panel | Purpose | Key Markers |
|-------|---------|-------------|
| T cell | Lymphocyte subsets | CD3, CD4, CD8, CD45 |
| B cell | B lymphocyte disorders | CD19, CD20, kappa, lambda |
| Myeloid | Leukemia typing | CD13, CD33, CD117, MPO |
| Stem cell | Transplant enumeration | CD34, CD45 |
| PNH | Clone detection | CD55, CD59, FLAER |

## Platelet and Thrombosis Medicine

**Platelet Signaling Pathways:**
- Thromboxane A2 pathway: Aspirin target
- ADP pathway: P2Y12 receptor (clopidogrel target)
- Thrombin pathway: PAR-1, PAR-4 receptors
- Collagen pathway: GPVI receptor
- GPIIb/IIIa activation: Final common pathway (abciximab target)

**Antiplatelet Resistance:**
- Aspirin resistance: COX-1 polymorphisms, drug interactions, compliance
- Clopidogrel resistance: CYP2C19 poor metabolizers
- Platelet function testing: VerifyNow, PFA-100, TEG

**Novel Therapeutics:**
- Cangrelor: IV P2Y12 inhibitor
- Vorapaxar: PAR-1 antagonist
- TPO-receptor agonists: Romiplostim, eltrombopag
- Anti-GPIb agents: In development

## Laboratory Advances

**Next-Generation Diagnostics:**
- Reticulocyte hemoglobin (CHr/Ret-He): Functional iron status
- Immature platelet fraction (IPF): Thrombopoietic activity
- Immature reticulocyte fraction (IRF): Erythropoietic response
- Delta-hemoglobin: Hemoglobin instability

**Molecular Diagnostics:**
- BCR-ABL quantification: CML monitoring
- JAK2/CALR/MPL: MPN diagnosis
- NGS panels: Clonal hematopoiesis, AML/MDS
- Minimal residual disease (MRD): Flow cytometry, PCR

**Point-of-Care Testing:**
- Hemoglobin measurement: HemoCue
- INR monitoring: CoaguChek
- Platelet function: VerifyNow, Multiplate
- Viscoelastic testing: TEG, ROTEM`,
      keyTerms: [
        { term: 'CHIP', definition: 'Clonal hematopoiesis of indeterminate potential; age-related somatic mutations in blood cells without overt malignancy' },
        { term: 'hemoglobin switching', definition: 'Developmental transition from embryonic to fetal to adult hemoglobin types regulated by globin gene clusters' },
        { term: 'phosphatidylserine exposure', definition: 'Externalization of normally inner membrane phospholipid signaling apoptosis and serving as eat-me signal for phagocytes' },
        { term: 'PAR-1', definition: 'Protease-activated receptor-1; thrombin receptor on platelets targeted by vorapaxar' },
        { term: 'immature platelet fraction', definition: 'Measure of young, recently released platelets reflecting thrombopoietic activity' },
      ],
      clinicalNotes: `**Board-Relevant Pearls:**
- CYP2C19 poor metabolizers have reduced clopidogrel efficacy; consider genotype-guided antiplatelet selection
- CHIP is associated with 40% increased cardiovascular mortality independent of traditional risk factors
- HbF induction (hydroxyurea) benefits both sickle cell disease and beta-thalassemia by reducing HbS polymerization and globin chain imbalance
- Reticulocyte hemoglobin is a real-time marker of functional iron availability, useful in CKD and inflammation
- IPF distinguishes consumptive thrombocytopenia (high IPF) from production failure (low IPF)`,
    },
  },

  media: [
    {
      id: 'blood-composition-diagram',
      type: 'diagram',
      filename: 'blood-composition.svg',
      title: 'Blood Composition Overview',
      description: 'Visual breakdown of blood components showing plasma and formed elements',
    },
    {
      id: 'blood-smear-normal',
      type: 'histology',
      filename: 'normal-blood-smear.jpg',
      title: 'Normal Peripheral Blood Smear',
      description: 'Normal red blood cells, white blood cells, and platelets',
    },
  ],

  citations: [
    {
      id: 'williams-hematology-blood',
      type: 'textbook',
      title: 'Morphology of the Erythron',
      source: 'Williams Hematology',
      chapter: '2',
    },
    {
      id: 'openstax-ap-blood',
      type: 'textbook',
      title: 'Blood',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '18',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/18-introduction',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-rbc-physiology', targetType: 'topic', relationship: 'child', label: 'Red Blood Cell Physiology' },
    { targetId: 'physiology-wbc-function', targetType: 'topic', relationship: 'child', label: 'White Blood Cell Function' },
    { targetId: 'physiology-platelet-function', targetType: 'topic', relationship: 'child', label: 'Platelet Function' },
    { targetId: 'structure-bone-marrow', targetType: 'structure', relationship: 'related', label: 'Bone Marrow' },
  ],

  tags: {
    systems: ['hematologic'],
    topics: ['blood composition', 'hematology', 'physiology'],
    keywords: ['plasma', 'erythrocyte', 'leukocyte', 'thrombocyte', 'CBC'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'pediatrics'],
    },
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default bloodComponents;
