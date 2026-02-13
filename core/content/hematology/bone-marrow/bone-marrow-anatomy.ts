import { EducationalContent } from '../types';

export const boneMarrowAnatomy: EducationalContent = {
  id: 'hematology-bone-marrow-anatomy',
  type: 'concept',
  name: 'Bone Marrow Anatomy',
  alternateNames: ['Bone Marrow Structure', 'Medullary Cavity', 'Hematopoietic Tissue'],
  levels: {
    1: {
      level: 1,
      summary: 'Bone marrow is the soft, spongy tissue inside your bones that makes all your blood cells.',
      explanation: 'Inside most of your bones is a soft material called bone marrow. It\'s like a factory that makes all the cells in your blood: red blood cells that carry oxygen, white blood cells that fight infections, and platelets that help stop bleeding. There are two types of bone marrow. Red marrow is where blood cells are made and is found mainly in flat bones like your hip bones, breastbone, skull, and ribs. Yellow marrow is mostly fat and is found in the center of long bones like your arms and legs. When you\'re born, almost all your marrow is red, but as you grow up, more of it turns to yellow marrow. Your body can convert yellow marrow back to red marrow if you need to make more blood cells.',
      keyTerms: [
        { term: 'Bone marrow', definition: 'Soft tissue inside bones where blood cells are made' },
        { term: 'Red marrow', definition: 'The type of marrow that makes blood cells' },
        { term: 'Yellow marrow', definition: 'Marrow that stores fat and doesn\'t make blood cells' },
        { term: 'Flat bones', definition: 'Bones like hip bones and ribs that contain red marrow in adults' },
      ],
    },
    2: {
      level: 2,
      summary: 'Bone marrow is a specialized tissue within the medullary cavities of bones, containing hematopoietic stem cells and stromal components that together support blood cell production.',
      explanation: 'Bone marrow occupies the central cavity of bones and consists of two main compartments: the hematopoietic (blood-forming) compartment and the stromal (supportive) compartment. The hematopoietic component contains stem cells that give rise to all blood cell types through a process called hematopoiesis. These stem cells differentiate along multiple lineages: the myeloid lineage produces red blood cells, platelets, and most white blood cells (neutrophils, monocytes, eosinophils, basophils), while the lymphoid lineage produces lymphocytes (B cells and T cells). The stromal compartment provides structural support and includes fat cells (adipocytes), fibroblasts, blood vessels (the vascular sinusoids where mature cells enter circulation), and specialized cells like osteoblasts at the bone surface. Red marrow is hematopoietically active, while yellow marrow is predominantly adipose tissue. In adults, active red marrow is concentrated in the axial skeleton (spine, pelvis, sternum, ribs, skull) and proximal long bones.',
      keyTerms: [
        { term: 'Hematopoiesis', definition: 'The process of blood cell formation in the bone marrow' },
        { term: 'Stem cells', definition: 'Primitive cells that can develop into all types of blood cells' },
        { term: 'Myeloid lineage', definition: 'Cell line producing red cells, platelets, granulocytes, and monocytes' },
        { term: 'Lymphoid lineage', definition: 'Cell line producing lymphocytes (B cells, T cells, NK cells)' },
        { term: 'Stromal cells', definition: 'Supportive cells that create the bone marrow environment' },
      ],
    },
    3: {
      level: 3,
      summary: 'Bone marrow microanatomy comprises distinct hematopoietic and stromal compartments within a specialized vascular network, with stem cell niches maintained by complex cellular interactions and signaling gradients.',
      explanation: 'The bone marrow microenvironment is organized into specialized niches. The endosteal niche, adjacent to bone surfaces, is maintained by osteoblasts and supports quiescent hematopoietic stem cells (HSCs) through adhesion molecules (N-cadherin) and signaling pathways (Notch, Wnt). The perivascular niche, associated with sinusoidal vessels, includes mesenchymal stem cells, CXCL12-abundant reticular (CAR) cells, and endothelial cells that regulate HSC maintenance through CXCL12/CXCR4 signaling and other factors. Marrow sinusoids are fenestrated vessels allowing mature cell egress; the sinusoidal endothelium produces cytokines supporting hematopoiesis. Adipocytes, once considered passive, actively regulate hematopoiesis through adipokine secretion; marrow adiposity increases with age and in certain pathologic states. Macrophages form erythroblastic islands supporting red cell production. The extracellular matrix includes fibronectin, collagen, and proteoglycans that anchor cells and bind growth factors. Oxygen gradients exist within marrow, with hypoxic niches supporting stem cell quiescence.',
      keyTerms: [
        { term: 'Stem cell niche', definition: 'Specialized microenvironment maintaining stem cell properties' },
        { term: 'Endosteal niche', definition: 'Stem cell niche at the bone surface, supports quiescent stem cells' },
        { term: 'Perivascular niche', definition: 'Stem cell niche around blood vessels, supports active hematopoiesis' },
        { term: 'CXCL12', definition: 'Chemokine critical for stem cell homing and retention in marrow' },
        { term: 'Erythroblastic island', definition: 'Structural unit of red cell production: macrophage surrounded by developing erythroblasts' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of bone marrow architecture encompasses the regulatory networks governing stem cell fate, niche-specific signaling pathways, spatial organization of hematopoietic development, and the impact of marrow dysfunction on disease pathophysiology.',
      explanation: 'Bone marrow organization reflects complex regulatory systems. HSC heterogeneity includes long-term repopulating cells (LT-HSC), short-term HSCs, and multipotent progenitors with differing self-renewal capacity and lineage bias. Spatial organization follows specific patterns: megakaryocytes locate near sinusoids for platelet release; granulopoiesis occurs near endosteum; erythropoiesis in islands allows efficient iron transfer. Circadian rhythms regulate HSC trafficking—sympathetic nervous system signaling to stromal cells alters CXCL12 expression, causing HSC mobilization during rest. Aging affects marrow by skewing toward myeloid differentiation, reducing regenerative capacity, and altering niche function. The marrow stroma contributes to malignancy: interactions between leukemic cells and niche components confer chemotherapy resistance; myeloma cells reprogram osteoblasts and activate osteoclasts causing bone destruction. Inflammatory states alter marrow architecture through cytokine-mediated changes. Understanding these mechanisms informs therapeutic strategies including mobilization protocols (G-CSF, plerixafor disrupting CXCL12/CXCR4) and targeting of leukemia-niche interactions.',
      keyTerms: [
        { term: 'LT-HSC', definition: 'Long-term hematopoietic stem cells with durable self-renewal capacity' },
        { term: 'Circadian regulation', definition: 'Daily cycling affecting stem cell release and homing' },
        { term: 'Myeloid skewing', definition: 'Age-related shift toward myeloid rather than lymphoid cell production' },
        { term: 'Plerixafor', definition: 'CXCR4 antagonist used to mobilize stem cells into peripheral blood' },
        { term: 'Leukemia-niche interaction', definition: 'Supportive relationship between malignant cells and marrow microenvironment' },
      ],
    },
    5: {
      level: 5,
      summary: 'Clinical application of bone marrow anatomy knowledge requires understanding of normal marrow cellularity and composition by age, pathological alterations in hematologic diseases, implications for biopsy interpretation, and therapeutic manipulation of the marrow niche.',
      explanation: 'Clinical marrow assessment integrates anatomical knowledge with pathology. Normal cellularity approximates 100 minus age (percentage), though ranges exist. Biopsy adequacy requires sufficient length (>1.5cm) and assessment of multiple parameters: cellularity, M:E ratio (normally 2-4:1), megakaryocyte number/morphology, iron stores (absent in iron deficiency, ringed sideroblasts in MDS), presence of abnormal infiltrates, reticulin/collagen fibrosis (graded 0-3), and trilineage maturation. Hypocellularity characterizes aplastic anemia; hypercellularity with maturation arrest suggests leukemia; nodular lymphoid infiltrates indicate lymphoma or CLL. Marrow fibrosis (increased reticulin/collagen) occurs in myelofibrosis, hairy cell leukemia, metastatic carcinoma. Necrosis may indicate aggressive malignancy or infection. Granulomas suggest infection (TB, fungal) or sarcoidosis. Therapy-related changes include post-chemotherapy hypocellularity, G-CSF effect (left shift), and radiation changes. In transplantation, marrow homing depends on intact CXCL12 signaling; conditioning regimens create niche space; engraftment kinetics vary by stem cell source (peripheral blood faster than marrow). Emerging niche-targeted therapies include antibodies disrupting leukemia-stroma interactions.',
      keyTerms: [
        { term: 'M:E ratio', definition: 'Myeloid to erythroid precursor ratio, normally 2-4:1' },
        { term: 'Reticulin fibrosis', definition: 'Increased reticulin fibers indicating marrow pathology' },
        { term: 'Marrow cellularity', definition: 'Percentage of marrow space occupied by hematopoietic cells vs. fat' },
        { term: 'Trilineage maturation', definition: 'Normal development of all three blood cell lineages' },
        { term: 'Engraftment', definition: 'Establishment of donor hematopoiesis after transplantation' },
      ],
      clinicalNotes: 'Posterior iliac crest is preferred biopsy site due to accessibility and adequate marrow. Sternal aspirates avoid in patients at myeloma/metastatic disease risk (perforation concern). Bilateral biopsies increase yield for lymphoma staging and MDS diagnosis. Touch preparations preserve cytology lost in decalcification. Flow cytometry requires fresh aspirate; FISH/cytogenetics need dividing cells. Peripheral blood may substitute when marrow is "dry tap" (fibrosis, packed marrow). Document distance from cortex—subcortical samples may misrepresent cellularity. In aplastic anemia, biopsy essential as aspirate may be hypocellular due to hemodilution. Post-transplant marrow timing varies by indication: engraftment confirmation (day +28-30), disease assessment varies by protocol.',
    },
  },
  media: [],
  citations: [
    'Morrison SJ, Scadden DT. The bone marrow niche for haematopoietic stem cells. Nature. 2014;505(7483):327-334.',
    'Baccin C, et al. Combined single-cell and spatial transcriptomics reveal the molecular, cellular and spatial bone marrow niche organization. Nat Cell Biol. 2020;22(1):38-48.',
    'Lee-Thedieck C, et al. Bone marrow stem cell niches in health and disease. Front Cell Dev Biol. 2019;7:372.',
  ],
  crossReferences: ['hematology-bone-marrow-biopsy', 'hematology-cbc-interpretation', 'hematology-leukemia'],
  tags: {
    systems: ['hematology', 'skeletal'],
    topics: ['bone marrow', 'hematopoiesis', 'stem cells', 'anatomy'],
    keywords: ['bone marrow', 'stem cells', 'hematopoiesis', 'niche', 'sinusoids', 'stroma'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
