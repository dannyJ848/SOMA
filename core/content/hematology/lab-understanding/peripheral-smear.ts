import { EducationalContent } from '../types';

export const peripheralSmear: EducationalContent = {
  id: 'hematology-peripheral-smear',
  type: 'procedure',
  name: 'Peripheral Blood Smear Examination',
  alternateNames: ['Blood Smear', 'Peripheral Smear', 'Blood Film', 'Manual Differential'],
  levels: {
    1: {
      level: 1,
      summary: 'A peripheral blood smear is a laboratory test where a drop of blood is spread on a glass slide and examined under a microscope.',
      explanation: 'A peripheral blood smear is a simple but important test where a technician spreads a drop of blood thinly on a glass slide, stains it with special dyes, and looks at it under a microscope. This allows doctors to see the size, shape, and appearance of blood cells. The test can show if red blood cells are normal, too large, too small, or have unusual shapes. It also shows different types of white blood cells and platelets. This test helps diagnose many conditions like anemia, infections, blood cancers, and bleeding disorders. Sometimes the automated blood count machine flags something unusual, and the smear helps figure out what\'s going on. A trained lab technician or pathologist performs the examination.',
      keyTerms: [
        { term: 'Peripheral blood', definition: 'Blood circulating in your body, as opposed to blood from bone marrow' },
        { term: 'Blood smear', definition: 'A thin layer of blood spread on a slide for microscopic examination' },
        { term: 'Stain', definition: 'Special dyes that color blood cells so they can be seen clearly' },
        { term: 'Morphology', definition: 'The study of the size, shape, and structure of cells' },
      ],
      analogies: [
        'A blood smear is like looking at individual bricks to understand the building\'s quality',
        'Think of it as a quality control inspection of your blood cells',
      ],
      examples: [
        'A blood smear showing sickle-shaped red cells confirms sickle cell disease',
        'Seeing immature white blood cells on smear suggests leukemia',
      ],
    },
    2: {
      level: 2,
      summary: 'Peripheral blood smear examination provides morphologic assessment of red cells, white cells, and platelets, supplementing automated analyzer data for diagnosis of hematologic disorders.',
      explanation: 'The peripheral smear evaluates red blood cell morphology (size, shape, color, inclusions), white blood cell differential (identifying and counting cell types), and platelet number and appearance. Red cell abnormalities: microcytic (iron deficiency, thalassemia), macrocytic (B12/folate deficiency, liver disease), hypochromic (low hemoglobin content), target cells (liver disease, thalassemia), spherocytes (immune hemolysis, hereditary spherocytosis), sickle cells, fragmented cells (schistocytes in microangiopathy). White cell assessment evaluates left shift (immature neutrophils in infection), toxic granulation, Dohle bodies (infection), atypical lymphocytes (viral infections), and blasts (leukemia). Platelet evaluation includes estimate of number and assessment for clumping (pseudothrombocytopenia). The smear is essential when CBC flags abnormalities, when clinical suspicion for specific disorder exists, or to confirm automated differential. Quality smear preparation requires proper spreading technique to create monolayer where cells don\'t overlap. Wright-Giemsa stain is standard.',
      keyTerms: [
        { term: 'Monolayer', definition: 'Area of smear where cells are spread thinly without overlapping' },
        { term: 'Left shift', definition: 'Presence of immature neutrophils indicating active infection' },
        { term: 'Schistocytes', definition: 'Fragmented red blood cells indicating mechanical damage' },
        { term: 'Toxic granulation', definition: 'Dark coarse granules in neutrophils seen in severe infection' },
        { term: 'Atypical lymphocytes', definition: 'Reactive lymphocytes seen in viral infections like mono' },
      ],
      analogies: [
        'Automated analyzers count the crowd; smears let you see faces and expressions',
        'A blood smear is like a photograph while the CBC is a population count',
      ],
      examples: [
        'Blood smear in TTP shows fragmented red cells and low platelets',
        'Malaria parasites visible inside red cells on thick and thin smears',
      ],
    },
    3: {
      level: 3,
      summary: 'Systematic peripheral smear examination follows structured approach to identify diagnostic morphologic features across all cell lines and correlate with clinical and laboratory findings.',
      explanation: 'Examination technique: scan at low power for overall assessment, then high power oil immersion for detailed morphology. Red cell systematic evaluation: normocytic vs microcytic vs macrocytic; normochromic vs hypochromic; poikilocytosis (shape variation) - identify specific abnormalities; inclusions (Howell-Jolly bodies, Heinz bodies, Pappenheimer bodies, basophilic stippling). White cell evaluation: differential count (100 cells); assess for left shift, toxic changes, abnormal morphology, blasts. Platelet estimate: average number per oil field x 20,000 approximates platelet count. Pathologic findings: rouleaux (multiple myeloma), agglutination (cold agglutinins), malaria parasites, babesia, trypanosomes, borrelia. Special preparations: reticulocyte stain (new methylene blue) for immature red cells; Heinz body preparation with crystal violet; iron stain for siderotic granules. Indications for smear review include unexplained anemia, thrombocytopenia, pancytopenia, suspected hemolysis, suspected malaria or other parasites, and monitoring response to therapy.',
      keyTerms: [
        { term: 'Poikilocytosis', definition: 'Variation in red blood cell shape' },
        { term: 'Howell-Jolly bodies', definition: 'Nuclear remnants in red cells indicating splenic dysfunction' },
        { term: 'Heinz bodies', definition: 'Denatured hemoglobin inclusions seen in G6PD deficiency' },
        { term: 'Rouleaux', definition: 'Red cells stacked like coins, seen with increased plasma proteins' },
        { term: 'Pappenheimer bodies', definition: 'Iron-containing granules in red cells' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced smear interpretation integrates morphologic patterns with clinical context, recognizing artifacts, rare findings, and directing additional diagnostic testing.',
      explanation: 'Pattern recognition: microcytic hypochromic with target cells suggests thalassemia or hemoglobinopathy; macrocytic with hypersegmented neutrophils indicates megaloblastic anemia; normocytic with polychromasia suggests hemolysis or bleeding; microangiopathic with schistocytes suggests TTP, HUS, DIC; leukoerythroblastic (nucleated red cells plus immature WBCs) suggests marrow infiltration or severe stress. White cell abnormalities: Auer rods (acute myeloid leukemia), Dohle bodies (sepsis, burns), hypersegmented neutrophils (B12/folate deficiency), toxic vacuolation (severe infection), Chédiak-Higashi granules, Alder-Reilly inclusions (mucopolysaccharidoses), Pelger-Huët anomaly (hereditary or acquired pseudo-Pelger in MDS). Platelet abnormalities: giant platelets (ITP, Bernard-Soulier), gray platelets (alpha granule deficiency), platelet satellitism (EDTA artifact). Artifacts to recognize: crenation from slow drying, water damage, stain precipitate, platelet clumping (EDTA-dependent pseudothrombocytopenia), cryoglobulin crystals. Special stains: iron stain for sideroblastic anemia; periodic acid-Schiff for glycogen in lymphoblasts; myeloperoxidase and esterase for leukemia classification.',
      keyTerms: [
        { term: 'Auer rods', definition: 'Needle-like crystalline inclusions in myeloid blasts, diagnostic of AML' },
        { term: 'Pelger-Huët anomaly', definition: 'Bilobed neutrophil nuclei, hereditary or in MDS' },
        { term: 'Leukoerythroblastic', definition: 'Pattern with immature red and white cells in peripheral blood' },
        { term: 'Platelet satellitism', definition: 'Platelets rosetting around neutrophils, EDTA artifact' },
        { term: 'Crenation', definition: 'Spiculated red cells from artifactual changes' },
      ],
      clinicalNotes: 'Always scan entire smear - rare abnormal cells may be anywhere. Correlate smear findings with CBC data - significant discrepancies suggest errors. Look at feather edge for large cells (blasts, lymphoma cells) that may be pushed there. If platelet clumping seen, redraw in citrate tube to verify count. Request pathologist review for unexplained cytopenias, suspected blasts, or unusual findings. Smear should be made within 2 hours of collection for optimal morphology.',
    },
    5: {
      level: 5,
      summary: 'Expert smear interpretation requires comprehensive pattern recognition, knowledge of rare disorders, recognition of subtle findings, and integration with advanced diagnostic techniques.',
      explanation: 'Rare and subtle findings: sea-blue histiocytes (Niemann-Pick, chronic myeloid leukemia), Gaucher cells, Tay-Sachs cells, mast cells in systemic mastocytosis, circulating plasma cells in multiple myeloma, Langerhans cells in histiocytosis. Red cell inclusions: Cabot rings (mitotic spindle remnants), basophilic stippling patterns (coarse in lead poisoning, fine in thalassemia), Pappenheimer bodies distinguishing from Howell-Jolly. Parasite detection: malaria species identification (falciparum with multiple parasites per cell, gametocyte shapes), Babesia (Maltese cross), trypanosomes (African sleeping sickness, Chagas disease), filarial parasites (Wuchereria, Brugia, Loa loa), Leishmania in macrophages. Leukemia morphology: FAB and WHO classification clues - Auer rods (AML), hand-mirror cells (ALL), flower cells (adult T-cell leukemia), smudge cells (CLL). Dysplastic changes in MDS: hypogranular neutrophils, pseudo-Pelger-Huët, micromegakaryocytes, nuclear-cytoplasmic asynchrony in erythroid precursors. Technology integration: digital pathology and automated image analysis emerging; telepathology for remote consultation; artificial intelligence for preliminary screening.',
      keyTerms: [
        { term: 'Sea-blue histiocyte', definition: 'Macrophage with blue cytoplasmic granules in specific storage diseases' },
        { term: 'Hand-mirror cell', definition: 'Lymphoid cell with cytoplasmic projection resembling handle' },
        { term: 'Flower cell', definition: 'Lymphocyte with lobulated nucleus in HTLV-1 associated leukemia' },
        { term: 'Dysplasia', definition: 'Abnormal cell development seen in MDS and other conditions' },
        { term: 'Telepathology', definition: 'Remote review of digital slide images' },
      ],
      clinicalNotes: 'Document all morphologic findings systematically. Photo documentation of rare or unusual findings. If uncertain, seek second opinion from hematopathologist. Malaria thick smears improve sensitivity; thin smears for species identification. Consider blood parasite exam for fever of unknown origin with exposure history. MDS diagnosis requires dysplasia in at least 10% of cells in a lineage. Correlate with flow cytometry, cytogenetics, and molecular studies for suspected leukemia.',
    },
  },
  media: [],
  citations: [
    'Bain BJ. Diagnosis from the blood smear. N Engl J Med. 2005;353(5):498-507.',
    'Glassy EF. Color Atlas of Hematology: An Illustrated Field Guide Based on Proficiency Testing. Northfield, IL: College of American Pathologists; 1998.',
    'Palmer L, Briggs C, McFadden S, et al. ICSH recommendations for the standardization of nomenclature and grading of peripheral blood cell morphological features. Int J Lab Hematol. 2015;37(3):287-303.',
  ],
  crossReferences: ['hematology-cbc-interpretation', 'hematology-coagulation-studies', 'hematology-anemias'],
  tags: {
    systems: ['hematology'],
    topics: ['laboratory medicine', 'blood smear', 'morphology', 'diagnostic testing'],
    keywords: ['blood smear', 'peripheral smear', 'morphology', 'red cells', 'white cells', 'platelets'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
