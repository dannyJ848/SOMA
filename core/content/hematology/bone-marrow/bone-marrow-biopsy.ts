import { EducationalContent } from '../types';

export const boneMarrowBiopsy: EducationalContent = {
  id: 'hematology-bone-marrow-biopsy',
  type: 'concept',
  name: 'Bone Marrow Biopsy',
  alternateNames: ['Bone Marrow Aspiration', 'Bone Marrow Examination', 'BMA/BMB', 'Marrow Trephine'],
  levels: {
    1: {
      level: 1,
      summary: 'A bone marrow biopsy is a test where doctors take a small sample from inside your bone to look at the cells that make your blood.',
      explanation: 'When doctors need to understand why your blood isn\'t working right, they may need to look at where blood cells are made—the bone marrow. A bone marrow biopsy takes a tiny piece of the spongy tissue from inside your bone, usually from the back of your hip. First, the doctor numbs the area with medicine so you don\'t feel pain. Then they use a special needle to take out some liquid (called aspiration) and a small solid piece (called the biopsy). The procedure takes about 15-20 minutes. You might feel some pressure or brief discomfort, but it\'s usually over quickly. The samples are sent to a lab where experts look at them under a microscope to check if the cells look normal and if there are the right amounts of each type.',
      keyTerms: [
        { term: 'Bone marrow', definition: 'Soft, spongy tissue inside bones where blood cells are made' },
        { term: 'Aspiration', definition: 'Using a needle to take out liquid bone marrow' },
        { term: 'Biopsy', definition: 'Taking a small solid piece of tissue to examine' },
        { term: 'Local anesthesia', definition: 'Medicine that numbs just one area of your body' },
      ],
    },
    2: {
      level: 2,
      summary: 'Bone marrow biopsy and aspiration are diagnostic procedures that obtain samples for morphological, immunophenotypic, and genetic analysis to evaluate blood disorders and cancers.',
      explanation: 'A bone marrow examination typically includes both aspiration (liquid sample) and core biopsy (solid tissue sample), each providing different information. The aspiration allows assessment of individual cell morphology, cell counts, and provides material for flow cytometry, cytogenetics, and molecular testing. The core biopsy shows marrow architecture, cellularity, and is essential for detecting fibrosis or focal lesions. The posterior iliac crest is the preferred site due to accessibility and adequate marrow volume. Indications include evaluation of unexplained cytopenias (low blood counts), suspicion for leukemia or lymphoma, staging of known malignancies, unexplained elevated blood counts, and monitoring treatment response. Contraindications are few but include severe bleeding disorders (relative) and local infection. Complications are rare and include bleeding, infection, and pain. Results are interpreted alongside clinical history and peripheral blood findings to establish diagnoses ranging from nutritional deficiencies to bone marrow failure syndromes to hematologic malignancies.',
      keyTerms: [
        { term: 'Core biopsy', definition: 'Solid cylinder of bone marrow tissue showing architecture' },
        { term: 'Posterior iliac crest', definition: 'Back of the hip bone, standard site for marrow biopsy' },
        { term: 'Flow cytometry', definition: 'Test identifying cell types by their surface proteins' },
        { term: 'Cytogenetics', definition: 'Study of chromosome abnormalities in marrow cells' },
        { term: 'Cellularity', definition: 'Proportion of marrow space occupied by blood-forming cells vs. fat' },
      ],
    },
    3: {
      level: 3,
      summary: 'Bone marrow examination integrates morphological assessment with ancillary studies including immunophenotyping, cytogenetics, FISH, and molecular diagnostics to provide comprehensive evaluation of hematologic disorders.',
      explanation: 'Complete marrow evaluation requires coordinated specimen collection for multiple analyses. Aspirate smears are stained with Wright-Giemsa for morphology (cell identification, maturation assessment, dysplasia detection) and Prussian blue for iron stores. Touch preparations from the biopsy preserve cytologic detail lost in decalcification. The core biopsy is processed for H&E and reticulin staining, with immunohistochemistry as needed (CD34 for blasts, CD138 for plasma cells, CD3/CD20 for lymphoid infiltrates). Flow cytometry on aspirate identifies immunophenotype and detects minimal residual disease. Conventional karyotyping requires dividing cells; FISH can be performed on interphase cells for specific abnormalities. Molecular studies (PCR, NGS) detect mutations guiding diagnosis and prognosis (e.g., JAK2 in myeloproliferative neoplasms, FLT3 in AML). The differential includes assessment of M:E ratio, megakaryocyte morphology and number, and presence of abnormal cells. Integrated interpretation by hematopathologists synthesizes all data into a comprehensive diagnosis.',
      keyTerms: [
        { term: 'Dysplasia', definition: 'Abnormal cell development suggesting myelodysplastic syndrome' },
        { term: 'Touch preparation', definition: 'Cytology slide made by touching biopsy to glass before processing' },
        { term: 'Immunohistochemistry', definition: 'Using antibodies to identify specific proteins in tissue sections' },
        { term: 'FISH', definition: 'Fluorescence in situ hybridization detecting specific genetic abnormalities' },
        { term: 'NGS', definition: 'Next-generation sequencing for comprehensive mutation detection' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced bone marrow interpretation requires integration of morphologic patterns, immunophenotypic profiles, comprehensive genetic testing, and clinical context to diagnose complex hematologic disorders and guide risk-adapted treatment strategies.',
      explanation: 'Expert marrow evaluation extends beyond basic parameters. Morphologic assessment includes blast percentage using a 500-cell differential, identification of Auer rods (diagnostic of AML), dysplastic features per MDS criteria (pseudo-Pelger-Huët cells, ringed sideroblasts, micromegakaryocytes), and pattern of infiltration (interstitial, nodular, diffuse, paratrabecular). Mast cell aggregates suggest systemic mastocytosis; granulomas warrant infectious workup. Flow cytometry panels must be comprehensive—acute leukemia panels include lymphoid (CD19, CD10, TdT) and myeloid (CD13, CD33, CD117, MPO) markers with aberrant expression patterns aiding MRD detection. Cytogenetic/molecular findings are disease-defining in some contexts (BCR-ABL1 for CML, PML-RARA for APL) and prognostic in others (complex karyotype in MDS). WHO classification requires integration of clinical features, morphology, and genetics. Challenging scenarios include hypocellular AML vs. aplastic anemia, MDS vs. reactive changes, and therapy-related myeloid neoplasms. Second opinions and additional testing may be needed for definitive diagnosis.',
      keyTerms: [
        { term: 'Auer rods', definition: 'Crystallized granules pathognomonic of acute myeloid leukemia' },
        { term: 'Ringed sideroblasts', definition: 'Erythroblasts with iron-laden mitochondria, seen in MDS-RS' },
        { term: 'Paratrabecular', definition: 'Growth pattern adjacent to bone, characteristic of follicular lymphoma' },
        { term: 'Aberrant expression', definition: 'Abnormal marker patterns distinguishing malignant from normal cells' },
        { term: 'MDS', definition: 'Myelodysplastic syndrome, clonal disorder with dysplasia and cytopenias' },
      ],
    },
    5: {
      level: 5,
      summary: 'Clinical mastery of bone marrow examination encompasses technical expertise in sample acquisition, systematic interpretation of multimodal results, recognition of diagnostic pitfalls, and effective communication of findings to guide patient management.',
      explanation: 'Clinical proficiency requires both procedural and interpretive competence. Procedure: informed consent addressing risks (bleeding, infection, pain) and alternatives; verify coagulation parameters and hold anticoagulants appropriately; position patient prone or lateral; use adequate local anesthesia including periosteum; obtain aspirate before biopsy (hemodilution concern); collect in proper tubes (EDTA for morphology/flow, heparin for cytogenetics, PAXgene for molecular). Technical challenges include fibrotic marrow ("dry tap")—attempt multiple sites, ensure adequate biopsy length, consider touch preparations; packed marrow may require additional passes. Interpretation pitfalls: hemodiluted aspirates underestimate cellularity; subcortical sampling overestimates cellularity; bone marrow necrosis requires dedicated workup; reactive conditions can mimic malignancy (B12 deficiency mimicking MDS). Reporting: standardized synoptic format improves clarity; include cellularity, M:E ratio, blast percentage, specific findings, and final diagnosis; clearly state specimen adequacy; provide differential diagnosis when appropriate. Communication: discuss unexpected findings promptly; recommend additional testing when indicated; participate in tumor boards for complex cases.',
      keyTerms: [
        { term: 'Dry tap', definition: 'Inability to aspirate liquid marrow, often due to fibrosis or packed cells' },
        { term: 'Hemodilution', definition: 'Contamination of aspirate with peripheral blood, reducing diagnostic yield' },
        { term: 'Synoptic report', definition: 'Structured format ensuring all essential elements are documented' },
        { term: 'Specimen adequacy', definition: 'Assessment of whether sample quality permits definitive interpretation' },
        { term: 'Tumor board', definition: 'Multidisciplinary conference for complex oncology case discussion' },
      ],
      clinicalNotes: 'Pre-procedure: check platelet count (>50K preferred), INR, PTT; hold aspirin 7 days, anticoagulants per protocol; no absolute contraindications though severe thrombocytopenia requires platelet support. Procedural sedation considered for anxious patients or anticipated multiple samples. Bilateral biopsies increase sensitivity for focal lesions (lymphoma staging). Post-procedure: pressure for 5-10 minutes, observe 30-60 minutes, advise to avoid heavy lifting 24 hours, report significant bleeding or fever. Results turnaround: morphology 24-48 hours, flow cytometry 24 hours, cytogenetics 7-14 days, FISH 3-7 days, molecular varies by test. For urgent cases (suspected APL), communicate with lab for expedited processing. Document all tubes sent and tests ordered. Ensure results reach ordering provider and are integrated into management plan.',
    },
  },
  media: [],
  citations: [
    'Lee SH, et al. Bone marrow aspiration and biopsy: A review of current practice. Br J Haematol. 2016;173(4):512-518.',
    'Bain BJ. Bone marrow biopsy morbidity: review of 2003. J Clin Pathol. 2005;58(4):406-408.',
    'Arber DA, et al. The 2016 revision to the World Health Organization classification of myeloid neoplasms and acute leukemia. Blood. 2016;127(20):2391-2405.',
  ],
  crossReferences: ['hematology-bone-marrow-anatomy', 'hematology-leukemia', 'hematology-cbc-interpretation'],
  tags: {
    systems: ['hematology'],
    topics: ['bone marrow', 'diagnostic procedures', 'hematopathology', 'cancer diagnosis'],
    keywords: ['bone marrow biopsy', 'aspiration', 'flow cytometry', 'cytogenetics', 'hematologic malignancy'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
