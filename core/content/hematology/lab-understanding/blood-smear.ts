import { EducationalContent } from '../types';

export const bloodSmear: EducationalContent = {
  id: 'hematology-blood-smear',
  type: 'concept',
  name: 'Blood Smear',
  alternateNames: ['Peripheral Blood Smear', 'Blood Film', 'PBS', 'Manual Differential'],
  levels: {
    1: {
      level: 1,
      summary: 'A blood smear is when a drop of blood is spread on a glass slide and looked at under a microscope to examine the blood cells.',
      explanation: 'A blood smear lets doctors see your actual blood cells up close. A small drop of blood is spread thinly on a glass slide, dried, and stained with special dyes that make different parts of the cells show up in different colors. Then a trained person looks at it under a microscope. They can see the size, shape, and color of your red blood cells, count different types of white blood cells, and check that platelets look normal. Sometimes machines can\'t tell the whole story about blood cells, but looking directly at them can reveal important clues. For example, doctors might see that red blood cells are the wrong shape, spot abnormal cells like those found in leukemia, or see parasites like malaria. This simple test helps diagnose many blood conditions.',
      keyTerms: [
        { term: 'Blood smear', definition: 'A thin layer of blood on a slide examined under a microscope' },
        { term: 'Stain', definition: 'Special dye that colors cells so they can be seen clearly' },
        { term: 'Microscope', definition: 'Instrument that makes tiny things look bigger' },
        { term: 'Manual differential', definition: 'Counting different types of white blood cells by looking at them' },
      ],
    },
    2: {
      level: 2,
      summary: 'Peripheral blood smear examination provides morphologic assessment of red cells, white cells, and platelets, complementing automated CBC data with visual information about cell shape, size, and inclusions.',
      explanation: 'Blood smear preparation involves spreading blood into a thin film, air-drying, and staining (typically Wright-Giemsa). Examination occurs in the "feathered edge" where cells are in a single layer. Red blood cell assessment includes size (microcytic, normocytic, macrocytic), shape (poikilocytosis = abnormal shapes), color (hypochromic, normochromic, polychromasia), and inclusions (Howell-Jolly bodies, basophilic stippling). Specific RBC morphologies suggest diagnoses: target cells in liver disease or hemoglobinopathy; spherocytes in autoimmune hemolysis; sickle cells in sickle cell disease; schistocytes in microangiopathic hemolytic anemia. White blood cell review confirms automated differential and identifies abnormal cells: band forms (left shift in infection), toxic granulation, blast cells (leukemia), atypical lymphocytes (viral infection). Platelet assessment includes adequacy (verify low count isn\'t from clumping), size (large platelets in ITP), and morphology. The smear prompts further testing when abnormalities are found.',
      keyTerms: [
        { term: 'Wright-Giemsa stain', definition: 'Standard stain coloring blood cells for microscopy' },
        { term: 'Poikilocytosis', definition: 'Variation in red blood cell shape' },
        { term: 'Polychromasia', definition: 'Blue-gray color of young red blood cells (reticulocytes)' },
        { term: 'Toxic granulation', definition: 'Dark granules in neutrophils indicating severe infection' },
        { term: 'Atypical lymphocytes', definition: 'Activated lymphocytes with increased cytoplasm, seen in viral infections' },
      ],
    },
    3: {
      level: 3,
      summary: 'Blood smear interpretation integrates morphologic findings into pattern recognition for diagnosing hematologic disorders, with systematic review of all three cell lineages and correlation with clinical and laboratory data.',
      explanation: 'Systematic smear review follows a structured approach. Red cell morphology patterns: microcytic hypochromic with target cells and basophilic stippling suggests thalassemia; microcytic with pencil cells suggests iron deficiency; macrocytic with hypersegmented neutrophils suggests megaloblastic anemia; polychromasia with spherocytes suggests hemolysis. Specific RBC forms: tear drops (myelofibrosis, marrow infiltration); bite cells (G6PD deficiency, oxidative hemolysis); stomatocytes (liver disease, hereditary stomatocytosis); acanthocytes (abetalipoproteinemia, liver disease). WBC assessment: left shift with toxic changes indicates bacterial infection; circulating blasts require urgent hematology evaluation; Auer rods are diagnostic of AML; smudge cells characteristic of CLL. Intracellular parasites: malaria (ring forms, gametocytes), Babesia (maltese cross), Ehrlichia (morulae in granulocytes). Platelet morphology: giant platelets suggest inherited thrombocytopenia or destruction; platelet clumping causes pseudothrombocytopenia. Report should describe findings systematically and suggest correlating diagnoses.',
      keyTerms: [
        { term: 'Hypersegmented neutrophil', definition: 'Neutrophil with 6+ lobes, indicates B12 or folate deficiency' },
        { term: 'Auer rod', definition: 'Rod-shaped inclusion pathognomonic for acute myeloid leukemia' },
        { term: 'Smudge cell', definition: 'Fragile lymphocyte broken during smear preparation, characteristic of CLL' },
        { term: 'Tear drop cell', definition: 'Drop-shaped RBC suggesting marrow fibrosis or infiltration' },
        { term: 'Ring form', definition: 'Early malaria parasite stage seen in red blood cells' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced blood smear analysis recognizes rare and subtle findings, correlates morphology with automated analyzer flags, and integrates findings into comprehensive diagnostic workup.',
      explanation: 'Advanced morphologic assessment requires pattern recognition. Microangiopathic hemolytic anemia (MAHA): schistocytes (fragmented RBCs) plus thrombocytopenia is medical emergency—consider TTP, HUS, DIC, malignant hypertension, HELLP. Quantify schistocytes (>1% significant). Leukoerythroblastic picture: nucleated RBCs plus immature myeloid cells indicates marrow stress or infiltration (metastatic cancer, myelofibrosis)—bone marrow biopsy indicated. Red cell inclusions: Howell-Jolly bodies (asplenia or hyposplenism); Pappenheimer bodies (iron overload, sideroblastic anemia); Heinz bodies (require supravital stain, G6PD deficiency). Rouleaux formation (RBCs stacked like coins) suggests paraprotein or high inflammatory markers. Cryoglobulinemia shows RBC agglutination. White cell morphologies: pseudo-Pelger-Huet anomaly (bilobed neutrophils in MDS); Döhle bodies (pale blue cytoplasmic inclusions in infection); hypogranular neutrophils (MDS). Platelet satellitism (platelets around neutrophils) is EDTA-dependent pseudothrombocytopenia variant. Automated flags (blasts, immature granulocytes, nucleated RBCs) trigger manual smear review.',
      keyTerms: [
        { term: 'Schistocyte', definition: 'Fragmented red cell indicating mechanical hemolysis' },
        { term: 'Leukoerythroblastic', definition: 'Nucleated RBCs plus immature WBCs suggesting marrow pathology' },
        { term: 'Rouleaux', definition: 'RBCs stacked like coins from protein coating' },
        { term: 'Pseudo-Pelger-Huet', definition: 'Acquired bilobed neutrophils in MDS or drug effect' },
        { term: 'Pappenheimer bodies', definition: 'Iron-containing inclusions in RBCs' },
      ],
    },
    5: {
      level: 5,
      summary: 'Expert blood smear interpretation requires mastery of rare morphologies, recognition of artifacts versus true abnormalities, integration with flow cytometry and molecular findings, and understanding of technical factors affecting smear quality.',
      explanation: 'Clinical mastery integrates morphology with clinical picture. Artifact recognition: poor smear technique causes artifactual spherocytes at thick areas, crenation (echinocytes) from drying, water artifact from humidity. True morphology requires proper area examination and comparison with repeat smear if questionable. Quantitative assessment: estimate platelet count (one platelet per oil immersion field approximates 10K/mcL); verify automated differential with 100-200 cell manual count if discrepancy. Subtle diagnostic clues: occasional teardrop cells with leukoerythroblastic changes suggest early myelofibrosis; rare Pelger-Huet cells in otherwise normal smear may be inherited variant vs. early MDS; Sézary cells (cerebriform nuclei) suggest cutaneous T-cell lymphoma; hairy cells (cytoplasmic projections) suggest hairy cell leukemia. Parasite identification: malaria speciation important for treatment (P. falciparum has highest parasitemia, banana gametocytes; P. vivax/ovale have enlarged RBCs, Schüffner dots). Bone marrow correlation: peripheral findings often predict marrow pathology but definitive diagnosis requires marrow examination for many conditions. Report writing: describe findings objectively, suggest differential diagnosis, recommend appropriate follow-up testing.',
      keyTerms: [
        { term: 'Crenation', definition: 'Spiky RBC artifact from specimen drying or hyperosmolar conditions' },
        { term: 'Sézary cell', definition: 'Abnormal T cell with convoluted nucleus in cutaneous T-cell lymphoma' },
        { term: 'Hairy cell', definition: 'Lymphocyte with cytoplasmic projections in hairy cell leukemia' },
        { term: 'Schüffner dots', definition: 'Pink stippling in RBCs infected with P. vivax or P. ovale' },
        { term: 'Cerebriform nucleus', definition: 'Brain-like folded nucleus of Sézary cells' },
      ],
      clinicalNotes: 'Smear review indicated for: automated flags (blasts, immature cells, nucleated RBCs); unexplained cytopenias; suspected hemolytic anemia; suspected malignancy; suspected infection (malaria in travelers). Quality assessment: evaluate in monolayer zone; verify adequate staining (RBCs should be pink, WBCs show nuclear detail). If smear quality poor, request new specimen. Correlation with CBC: verify platelet estimate matches automated count; discordance suggests clumping or giant platelets. Critical findings requiring immediate communication: blast cells, schistocytes with thrombocytopenia (possible TTP), malaria parasites. For suspected malaria, examine thick and thin smears; report species and parasitemia percentage. Document findings comprehensively; include morphology images in electronic systems when available. Training and competency assessment essential for reliable smear interpretation. When uncertain about findings, seek second opinion from hematopathologist.',
    },
  },
  media: [],
  citations: [
    'Bain BJ. Diagnosis from the blood smear. N Engl J Med. 2005;353(5):498-507.',
    'Palmer L, et al. ICSH recommendations for the standardization of nomenclature and grading of peripheral blood cell morphological features. Int J Lab Hematol. 2015;37(3):287-303.',
    'Pierre RV. Red cell morphology and the peripheral blood film. Clin Lab Med. 2002;22(1):25-61.',
  ],
  crossReferences: ['hematology-cbc-interpretation', 'hematology-leukemia', 'hematology-platelet-disorders'],
  tags: {
    systems: ['hematology'],
    topics: ['blood smear', 'morphology', 'laboratory medicine', 'diagnosis'],
    keywords: ['blood smear', 'peripheral blood', 'morphology', 'microscopy', 'red cells', 'white cells', 'platelets'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
