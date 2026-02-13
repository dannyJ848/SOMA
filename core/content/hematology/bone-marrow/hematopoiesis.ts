import { EducationalContent } from '../types';

export const hematopoiesis: EducationalContent = {
  id: 'hematology-hematopoiesis',
  type: 'process',
  name: 'Hematopoiesis',
  alternateNames: ['Blood Cell Formation', 'Blood Cell Production', 'Myelopoiesis'],
  levels: {
    1: {
      level: 1,
      summary: 'Hematopoiesis is the process by which your body makes all the different types of blood cells.',
      explanation: 'Hematopoiesis is how your body creates blood cells. It happens mainly in your bone marrow, which is the soft tissue inside certain bones like your hips, ribs, and spine. The process starts with special cells called stem cells. These stem cells can become any type of blood cell: red blood cells that carry oxygen, white blood cells that fight infection, and platelets that help stop bleeding. Your body makes millions of new blood cells every day to replace old ones that wear out. The bone marrow works like a busy factory, constantly producing the right amounts of each cell type based on what your body needs. When you have an infection, more white blood cells are made. When you lose blood, more red blood cells are produced.',
      keyTerms: [
        { term: 'Stem cells', definition: 'Special cells that can become any type of blood cell' },
        { term: 'Bone marrow', definition: 'Soft tissue inside bones where blood cells are made' },
        { term: 'Red blood cells', definition: 'Cells that carry oxygen to all parts of your body' },
        { term: 'White blood cells', definition: 'Cells that fight infections and protect against disease' },
        { term: 'Platelets', definition: 'Small cell fragments that help blood clot and stop bleeding' },
      ],
      analogies: [
        'Hematopoiesis is like a tree growing from a single seed - one stem cell branches into many different cell types',
        'Think of bone marrow as a factory assembly line producing different products from raw materials',
      ],
      examples: [
        'When you donate blood, your bone marrow increases red blood cell production to replace what was lost',
        'During an infection, your bone marrow makes more white blood cells to fight the germs',
      ],
    },
    2: {
      level: 2,
      summary: 'Hematopoiesis is the regulated production of blood cellular components from hematopoietic stem cells, occurring primarily in bone marrow and involving differentiation into myeloid and lymphoid lineages.',
      explanation: 'Hematopoietic stem cells (HSCs) are multipotent cells capable of self-renewal and differentiation into all blood cell types. They reside in specialized bone marrow niches that regulate their function. Differentiation follows two main lineages: myeloid (producing erythrocytes, granulocytes, monocytes, megakaryocytes) and lymphoid (producing T-cells, B-cells, NK cells). Erythropoiesis (red cell production) is regulated by erythropoietin (EPO) produced by kidneys in response to hypoxia. Thrombopoiesis (platelet production) is controlled by thrombopoietin (TPO) stimulating megakaryocyte maturation and platelet release. Granulopoiesis produces neutrophils, eosinophils, and basophils. Monocytes enter tissues to become macrophages and dendritic cells. Hematopoiesis sites change during development: yolk sac (early embryo), liver and spleen (fetus), bone marrow (birth onward). In adults, active hematopoiesis occurs in axial skeleton (vertebrae, ribs, sternum, pelvis) and proximal long bones.',
      keyTerms: [
        { term: 'Multipotent', definition: 'Able to develop into multiple different cell types' },
        { term: 'Self-renewal', definition: 'Ability of stem cells to make copies of themselves' },
        { term: 'Erythropoietin', definition: 'Hormone produced by kidneys that stimulates red blood cell production' },
        { term: 'Thrombopoietin', definition: 'Hormone that stimulates platelet production' },
        { term: 'Myeloid lineage', definition: 'Cell line producing red cells, platelets, and myeloid white cells' },
      ],
      analogies: [
        'Stem cells are like college students who can major in any field - they choose their specialty as they mature',
        'Cytokines like EPO are like managers giving orders to increase production when needed',
      ],
      examples: [
        'A patient with kidney failure has anemia because reduced EPO production decreases red cell production',
        'High altitude stimulates increased erythropoietin and red cell production to compensate for lower oxygen',
      ],
    },
    3: {
      level: 3,
      summary: 'Hematopoiesis involves complex regulation by cytokines, transcription factors, and bone marrow microenvironment, with distinct stages of maturation for each blood cell lineage.',
      explanation: 'Hematopoietic stem cells reside in endosteal and vascular niches, regulated by interactions with stromal cells, osteoblasts, and endothelial cells. Key cytokines include stem cell factor (SCF), IL-3, IL-6, IL-7, GM-CSF, and G-CSF. Transcription factors control lineage commitment: GATA-1 for erythroid, PU.1 for myeloid, Pax5 for B-cells. Erythropoiesis stages: proerythroblast → basophilic erythroblast → polychromatophilic erythroblast → orthochromatophilic erythroblast → reticulocyte → erythrocyte. Red cells expel nuclei before entering circulation. Granulocyte maturation: myeloblast → promyelocyte → myelocyte → metamyelocyte → band → segmented neutrophil. Megakaryocytes undergo endomitosis (DNA replication without cell division) becoming polyploid giant cells that extend proplatelets into sinusoids. Lymphopoiesis occurs in bone marrow (B-cells) and thymus (T-cells). B-cell development: pro-B → pre-B → immature B → mature B. T-cell precursors migrate to thymus for selection and maturation.',
      keyTerms: [
        { term: 'Transcription factor', definition: 'Proteins controlling gene expression and cell fate decisions' },
        { term: 'Endomitosis', definition: 'Nuclear division without cell division, creating polyploid cells' },
        { term: 'Stromal cells', definition: 'Support cells in bone marrow that nurture stem cells' },
        { term: 'Reticulocyte', definition: 'Immature red blood cell that still contains RNA' },
        { term: 'GM-CSF', definition: 'Granulocyte-macrophage colony-stimulating factor, stimulates myeloid production' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of hematopoiesis encompasses stem cell biology, clonal hematopoiesis, stress erythropoiesis, and therapeutic manipulation for hematologic disorders.',
      explanation: 'Hematopoietic stem cell heterogeneity includes long-term HSCs (quiescent, lifelong self-renewal) and short-term HSCs (actively cycling, limited self-renewal). Cell surface markers (CD34, CD38, CD90, CD45RA) distinguish populations. Clonal hematopoiesis of indeterminate potential (CHIP) occurs with aging - somatic mutations in DNMT3A, TET2, ASXL1 provide clonal advantage but no disease. Progresses to clonal cytopenia of undetermined significance (CCUS) then myeloid neoplasms. Stress erythropoiesis activates during anemia: EPO rises, HSCs proliferate, stress erythroid progenitors emerge. Splenic erythropoiesis can resume in extreme stress (extramedullary hematopoiesis). Therapeutic applications: G-CSF mobilizes stem cells for collection; erythropoiesis-stimulating agents (ESAs) treat anemia; TPO receptor agonists treat thrombocytopenia. Bone marrow transplant replaces defective hematopoiesis. Gene therapy targets HSCs for genetic blood disorders. Understanding leukemic stem cells (LSCs) that resist therapy and cause relapse is critical for cure.',
      keyTerms: [
        { term: 'CHIP', definition: 'Clonal hematopoiesis of indeterminate potential, age-related mutation acquisition' },
        { term: 'Clonal advantage', definition: 'Mutation giving stem cells growth/survival benefit over normal cells' },
        { term: 'Stress erythropoiesis', definition: 'Accelerated red cell production during anemia or hypoxia' },
        { term: 'Extramedullary hematopoiesis', definition: 'Blood cell production outside bone marrow' },
        { term: 'Leukemic stem cells', definition: 'Cancer stem cells that resist therapy and cause relapse' },
      ],
      clinicalNotes: 'Understanding hematopoiesis explains cytopenias, myeloproliferation, and treatment effects. EPO deficiency in kidney disease causes anemia. B12/folate deficiency impairs DNA synthesis in rapidly dividing progenitors. Myelosuppressive chemotherapy affects actively cycling cells. G-CSF accelerates neutrophil recovery after chemotherapy. Splenomegaly in myelofibrosis reflects extramedullary hematopoiesis. CHIP identification may influence cancer screening and cardiovascular risk assessment.',
    },
    5: {
      level: 5,
      summary: 'Expert-level hematopoiesis encompasses single-cell genomics, metabolic regulation, niche biology, and cutting-edge therapeutic approaches for hematologic diseases.',
      explanation: 'Single-cell RNA sequencing reveals hematopoietic hierarchies and differentiation trajectories, identifying rare intermediate populations and regulatory networks. Metabolic regulation: HSCs rely on glycolysis and anaerobic metabolism; differentiated cells use oxidative phosphorylation. Hypoxia maintains stemness in the bone marrow niche. Niche components include mesenchymal stromal cells, endothelial cells, sympathetic nerves, and non-myelinating Schwann cells. CXCL12-CXCR4 and SCF-KIT signaling maintain HSCs. Inflammation mobilizes HSCs and biases differentiation. Clonal hematopoiesis mutations in CHIP increase cardiovascular risk and leukemia transformation. Somatic mutations in blood are also biomarkers for solid tumor monitoring (mutation tracking). Advanced therapies: ex vivo HSC expansion, in vivo HSC expansion with small molecules, HSC gene therapy using lentiviral vectors or CRISPR editing, iPSC-derived hematopoietic cells for disease modeling. Targeting leukemic stem cells by disrupting their niche interactions or metabolic dependencies is an active research area.',
      keyTerms: [
        { term: 'Single-cell RNA sequencing', definition: 'Technology analyzing gene expression in individual cells' },
        { term: 'Lentiviral vector', definition: 'Modified virus used to deliver therapeutic genes to HSCs' },
        { term: 'CRISPR', definition: 'Gene editing technology for correcting genetic defects' },
        { term: 'iPSC', definition: 'Induced pluripotent stem cells reprogrammed from adult cells' },
        { term: 'Lineage tracing', definition: 'Tracking cell fate from single progenitors' },
      ],
      clinicalNotes: 'Single-cell analysis refines understanding of leukemia heterogeneity and minimal residual disease. CHIP mutations provide clonal markers for tracking hematopoietic dynamics. Metabolic dependencies differ between normal and malignant cells - potential therapeutic targets. Niche-targeted therapies may mobilize or protect stem cells. Gene therapy for sickle cell, thalassemia, and SCID is transforming these diseases. Understanding HSC biology is critical for optimizing transplant outcomes and developing regenerative therapies.',
    },
  },
  media: [],
  citations: [
    'Orkin SH, Zon LI. Hematopoiesis: an evolving paradigm for stem cell biology. Cell. 2008;132(4):631-644.',
    'Pinho S, Frenette PS. Haematopoietic stem cell activity and interactions with the niche. Nat Rev Mol Cell Biol. 2019;20(5):303-320.',
    'Steensma DP, Bejar R, Jaiswal S, et al. Clonal hematopoiesis of indeterminate potential and its distinction from myelodysplastic syndromes. Blood. 2015;126(1):9-16.',
  ],
  crossReferences: ['hematology-bone-marrow-anatomy', 'hematology-bone-marrow-transplant', 'hematology-leukemia'],
  tags: {
    systems: ['hematology'],
    topics: ['hematopoiesis', 'stem cells', 'bone marrow', 'blood cell production'],
    keywords: ['hematopoiesis', 'stem cells', 'erythropoiesis', 'myelopoiesis', 'lymphopoiesis'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
