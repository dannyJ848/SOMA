import { EducationalContent } from './types';

// =============================================================================
// IRON DEFICIENCY ANEMIA - Comprehensive Multi-Level Content
// =============================================================================

export const ironDeficiencyAnemiaComprehensive: EducationalContent = {
  id: 'hematology-iron-deficiency-anemia-comprehensive',
  type: 'condition',
  name: 'Iron Deficiency Anemia',
  nameEs: 'Anemia por deficiencia de hierro',
  alternateNames: ['IDA', 'Microcytic Anemia', 'Sideropenic Anemia'],
  levels: {
    1: {
      level: 1,
      summary: 'Iron deficiency anemia means your body does not have enough iron to make healthy red blood cells.',
      explanation:
        'Your blood has tiny cells called red blood cells that carry oxygen everywhere in your body, like delivery trucks. These trucks need a special material called iron to pick up and carry oxygen. When you do not have enough iron, your body makes fewer and smaller red blood cells. This means less oxygen gets delivered to your muscles, brain, and organs. You might feel very tired, look pale, get dizzy, or feel short of breath. Some people even crave ice or dirt (this is called pica). The most common reasons for low iron are not eating enough iron-rich foods (like meat, beans, or spinach), losing blood (from heavy periods or stomach problems), or your body needing extra iron (like during pregnancy). Doctors fix this by having you take iron pills and eat more iron-rich foods. They also look for the reason you lost iron in the first place.',
      keyTerms: [
        { term: 'Iron', definition: 'A mineral your body needs to make the oxygen-carrying part of red blood cells' },
        { term: 'Hemoglobin', definition: 'The protein inside red blood cells that grabs onto oxygen and carries it through your body' },
        { term: 'Red blood cells', definition: 'Tiny disc-shaped cells in your blood that deliver oxygen to every part of your body' },
        { term: 'Anemia', definition: 'A condition where you do not have enough healthy red blood cells to carry oxygen' },
        { term: 'Pica', definition: 'An unusual craving to eat things that are not food, like ice or dirt' },
      ],
      analogies: [
        'Iron is like fuel for delivery trucks - without enough fuel, the trucks (red blood cells) cannot make their oxygen deliveries.',
        'Think of iron like the metal in a magnet that grabs oxygen - without it, red blood cells cannot hold onto their oxygen cargo.',
      ],
      examples: [
        'A teenage girl with heavy menstrual periods who feels tired all the time and craves ice chips.',
        'A toddler who drinks too much milk and does not eat enough iron-rich solid foods.',
      ],
      patientCounselingPoints: [
        'Eat iron-rich foods like red meat, beans, lentils, spinach, and fortified cereals.',
        'Take iron supplements on an empty stomach with orange juice (vitamin C helps absorption).',
        'Iron pills may cause constipation or dark stools - this is normal.',
        'Tell your doctor if you have heavy periods, blood in your stool, or stomach pain.',
      ],
    },
    2: {
      level: 2,
      summary: 'Iron deficiency anemia is the most common anemia worldwide, characterized by microcytic hypochromic red blood cells due to inadequate iron for hemoglobin synthesis.',
      explanation:
        'Iron deficiency anemia (IDA) develops in three progressive stages. Stage 1 is iron depletion: ferritin drops as storage iron is used up. Stage 2 is iron-deficient erythropoiesis: serum iron falls and transferrin (TIBC) rises as the body tries to capture more iron, but red blood cells are still normal. Stage 3 is overt anemia: hemoglobin drops, and red blood cells become microcytic (MCV <80 fL) and hypochromic (pale). The MCV classification system groups anemias by red blood cell size: microcytic (MCV <80), normocytic (MCV 80-100), and macrocytic (MCV >100). IDA is the classic microcytic anemia. Key lab findings include low ferritin (most specific single test), low serum iron, high TIBC, low transferrin saturation (<15%), and elevated RDW (red cell distribution width, reflecting varied cell sizes). Peripheral blood smear shows small pale red cells, target cells, pencil cells (elliptocytes), and occasionally thrombocytosis. Causes include blood loss (GI bleeding, menorrhagia), poor intake (vegetarian diet, food insecurity), malabsorption (celiac disease, gastric bypass, H. pylori), and increased demand (pregnancy, growth spurts). Treatment is oral ferrous sulfate 325 mg two to three times daily; reticulocyte count rises in 5-7 days and hemoglobin increases 1-2 g/dL per month.',
      keyTerms: [
        { term: 'Ferritin', definition: 'A blood protein that stores iron; the most sensitive single test for iron deficiency' },
        { term: 'Microcytic', definition: 'Red blood cells smaller than normal (MCV below 80 fL)' },
        { term: 'Hypochromic', definition: 'Red blood cells with reduced hemoglobin content, appearing pale under microscopy' },
        { term: 'TIBC', definition: 'Total Iron Binding Capacity - measures transferrin availability; elevated in iron deficiency' },
        { term: 'Transferrin saturation', definition: 'Percentage of iron-binding sites on transferrin occupied by iron; low in IDA' },
        { term: 'MCV', definition: 'Mean Corpuscular Volume - average red blood cell size used to classify anemias' },
        { term: 'RDW', definition: 'Red cell Distribution Width - measures variability in red blood cell size; elevated in IDA' },
        { term: 'Peripheral smear', definition: 'Microscopic examination of a blood sample spread on a glass slide' },
      ],
      analogies: [
        'Ferritin is like a savings account for iron - when it drops, you are spending more iron than you are saving.',
        'TIBC rising is like sending out more empty delivery trucks because you do not have enough packages (iron) to fill them.',
      ],
      examples: [
        'A 50-year-old man with occult GI bleeding from colon polyps presenting with fatigue, MCV 68, ferritin 5.',
        'A pregnant woman in her third trimester with hemoglobin 9.5 and ferritin 8 despite prenatal vitamins.',
      ],
    },
    3: {
      level: 3,
      summary: 'Iron metabolism centers on the hepcidin-ferroportin axis, with iron deficiency anemia requiring systematic differentiation from thalassemia trait and anemia of chronic disease through iron studies and advanced markers.',
      explanation:
        'Iron homeostasis is tightly regulated because humans lack a physiologic excretion mechanism. Dietary iron is absorbed in the duodenum: heme iron is absorbed directly via HCP1, while non-heme ferric iron (Fe3+) is reduced to ferrous (Fe2+) by duodenal cytochrome b (Dcytb) and transported by DMT1. Intracellular iron is stored as ferritin or exported via ferroportin, the only known cellular iron exporter. Hepcidin, a 25-amino-acid peptide produced by hepatocytes, is the master regulator: it binds ferroportin causing its internalization and degradation, blocking iron absorption and macrophage iron recycling. Hepcidin is upregulated by iron loading (via BMP-SMAD pathway through HFE, TfR2, and hemojuvelin) and inflammation (via IL-6/JAK-STAT3), and downregulated by iron deficiency, hypoxia (via HIF), and erythropoietic drive (via erythroferrone from erythroblasts). In true iron deficiency, hepcidin is suppressed, maximizing iron absorption. In anemia of chronic disease (ACD), inflammatory cytokines raise hepcidin, trapping iron in macrophages despite adequate stores (functional iron deficiency). Distinguishing IDA from ACD: the soluble transferrin receptor (sTfR) is elevated in IDA but normal in ACD; the sTfR/log ferritin index (Thomas plot) helps in mixed states. Reticulocyte hemoglobin content (CHr or Ret-He) detects iron-restricted erythropoiesis within 1-2 days. Hemoglobin electrophoresis differentiates thalassemia trait (elevated HbA2 in beta-thal trait) from IDA (normal electrophoresis). Erythropoiesis requires coordinated iron delivery to mitochondria for heme synthesis; iron is incorporated into protoporphyrin IX by ferrochelatase. In iron deficiency, zinc substitutes for iron creating zinc protoporphyrin (ZPP), another diagnostic marker.',
      keyTerms: [
        { term: 'Hepcidin', definition: 'Liver-produced peptide hormone that is the master regulator of systemic iron homeostasis' },
        { term: 'Ferroportin', definition: 'The sole known cellular iron exporter, regulated by hepcidin-induced degradation' },
        { term: 'DMT1', definition: 'Divalent Metal Transporter 1 - imports ferrous iron across the apical enterocyte membrane' },
        { term: 'Erythroferrone', definition: 'Hormone released by erythroblasts that suppresses hepcidin to increase iron supply during stress erythropoiesis' },
        { term: 'Soluble transferrin receptor', definition: 'Cleaved extracellular domain of TfR1; elevated in iron deficiency and increased erythropoiesis' },
        { term: 'Hemoglobin electrophoresis', definition: 'Laboratory method separating hemoglobin variants to diagnose thalassemias and hemoglobinopathies' },
        { term: 'BMP-SMAD pathway', definition: 'Signaling cascade in hepatocytes that senses iron levels and upregulates hepcidin transcription' },
        { term: 'Zinc protoporphyrin', definition: 'Formed when zinc substitutes for iron in heme synthesis; elevated in iron deficiency' },
      ],
      clinicalNotes: 'Ferritin <15 ng/mL is diagnostic of iron deficiency; <30 ng/mL in the setting of inflammation has 92% sensitivity. sTfR/log ferritin >2 suggests IDA even with elevated ferritin. CHr <28 pg indicates iron-restricted erythropoiesis. Always check hemoglobin electrophoresis when microcytic anemia does not respond to iron. Beta-thalassemia trait: MCV low, RBC count high, Mentzer index (MCV/RBC) <13, elevated HbA2.',
    },
    4: {
      level: 4,
      summary: 'Advanced iron metabolism involves the hepcidin-ferroportin regulatory network, hereditary hemolytic anemias spanning membrane, enzyme, and hemoglobin defects, and warm versus cold autoimmune hemolytic anemias with distinct pathophysiology.',
      explanation:
        'The hepcidin-ferroportin axis is regulated at multiple levels. The BMP6-HJV-BMP receptor complex on hepatocytes activates SMAD1/5/8, which complex with SMAD4 to transactivate HAMP (hepcidin gene). HFE and TfR2 act as iron sensors modulating this pathway - their mutations cause hereditary hemochromatosis through hepcidin deficiency. Matriptase-2 (TMPRSS6) cleaves HJV, suppressing hepcidin; loss-of-function mutations cause iron-refractory iron deficiency anemia (IRIDA). Erythroferrone (ERFE), produced by erythroblasts under EPO stimulation, suppresses hepcidin by sequestering BMP ligands, explaining iron loading in ineffective erythropoiesis (thalassemia intermedia, MDS).\n\nIneffective erythropoiesis is a hallmark of thalassemias, MDS, and congenital dyserythropoietic anemias (CDAs). In beta-thalassemia major, absent beta-globin chains cause alpha-chain precipitation, oxidative damage, and intramedullary apoptosis of erythroid precursors. This drives massive ERFE production, hepcidin suppression, and progressive iron overload even without transfusion.\n\nHereditary hemolytic anemias are classified by defect: (1) Membrane defects - hereditary spherocytosis (spectrin/ankyrin mutations, osmotic fragility positive, DAT negative) and hereditary elliptocytosis (spectrin dimer self-association defects); (2) Enzyme defects - G6PD deficiency (X-linked, episodic hemolysis with oxidant stress, Heinz bodies, bite cells) and pyruvate kinase deficiency (chronic hemolysis, echinocytes); (3) Hemoglobin defects - sickle cell disease (HbS polymerization, vaso-occlusion, chronic hemolysis) and thalassemias (globin chain imbalance).\n\nAutoimmune hemolytic anemia (AIHA): Warm AIHA (IgG-mediated, extravascular hemolysis via splenic macrophages, spherocytes on smear, positive DAT for IgG, responds to steroids/rituximab/splenectomy) versus cold agglutinin disease (IgM-mediated, complement fixation, intravascular hemolysis, positive DAT for C3d only, associated with Mycoplasma/lymphoma, treat underlying cause, avoid cold exposure, rituximab). Mixed-type AIHA has features of both. Paroxysmal cold hemoglobinuria (PCH) involves Donath-Landsteiner IgG antibody (anti-P) that binds at cold temperature and fixes complement at 37 degrees C.',
      keyTerms: [
        { term: 'TMPRSS6 (Matriptase-2)', definition: 'Serine protease that cleaves hemojuvelin to suppress hepcidin; mutations cause IRIDA' },
        { term: 'IRIDA', definition: 'Iron-Refractory Iron Deficiency Anemia - autosomal recessive condition from TMPRSS6 mutations causing inappropriately high hepcidin' },
        { term: 'Ineffective erythropoiesis', definition: 'Premature destruction of erythroid precursors within bone marrow before maturation' },
        { term: 'Hereditary spherocytosis', definition: 'Most common inherited membrane defect causing hemolysis; due to spectrin, ankyrin, or band 3 mutations' },
        { term: 'G6PD deficiency', definition: 'X-linked enzymopathy causing episodic oxidant-induced hemolysis; most common enzyme deficiency worldwide' },
        { term: 'Warm AIHA', definition: 'IgG-mediated autoimmune hemolysis with extravascular destruction predominantly in spleen' },
        { term: 'Cold agglutinin disease', definition: 'IgM-mediated complement-fixing autoimmune hemolysis occurring at low temperatures' },
        { term: 'Direct antiglobulin test (DAT)', definition: 'Coombs test detecting antibodies or complement bound to red blood cell surface; key to AIHA diagnosis' },
      ],
      clinicalNotes: 'Warm AIHA: first-line is prednisone 1 mg/kg; second-line rituximab or splenectomy. Cold agglutinin disease: steroids ineffective; rituximab-based therapy or sutimlimab (anti-C1s complement inhibitor, FDA-approved 2022). G6PD testing may be falsely normal during acute hemolysis (young reticulocytes have normal G6PD) - retest 2-3 months later. Hereditary spherocytosis: eosin-5-maleimide (EMA) binding test is preferred screening; osmotic fragility is less specific. PK deficiency: paradoxical improvement after splenectomy with rising reticulocyte count and improved anemia. In sickle cell, hydroxyurea increases HbF, reducing sickling frequency.',
    },
    5: {
      level: 5,
      summary: 'Cutting-edge anemia management includes gene therapy for hemoglobinopathies, novel erythropoiesis-stimulating agents targeting the HIF-PHD axis, and precision diagnostics for rare congenital anemias.',
      explanation:
        'Iron-refractory iron deficiency anemia (IRIDA) is caused by homozygous or compound heterozygous TMPRSS6 mutations resulting in constitutively elevated hepcidin. Patients fail oral iron and respond partially to IV iron. Diagnosis requires genetic testing; hepcidin levels are inappropriately elevated for the degree of iron deficiency. Emerging therapies include anti-hepcidin antibodies and hepcidin-lowering agents.\n\nCongenital dyserythropoietic anemias (CDAs) are rare inherited disorders of erythropoiesis: CDA type I (CDAN1 or C15orf41 mutations, megaloblastic changes, chromatin bridging), CDA type II (SEC23B mutations, HEMPAS, multinucleated erythroblasts, positive acidified serum lysis test), and CDA type III (KIF23 mutations, giant multinucleated erythroblasts). CDA-II is most common; patients develop iron overload. Diagnosis requires bone marrow morphology and genetic confirmation.\n\nGene therapy for sickle cell disease has reached clinical practice. Exagamglogene autotemcel (exa-cel/Casgevy) uses CRISPR-Cas9 to disrupt the BCL11A erythroid enhancer, derepressing fetal hemoglobin (HbF) production. Lovotibeglogene autotemcel (lovo-cel/Lyfgenia) uses lentiviral vector to introduce an anti-sickling beta-globin gene (betaA-T87Q). Both require myeloablative busulfan conditioning. Clinical trials show sustained HbF elevation >20% and elimination of vaso-occlusive crises in most patients. Betibeglogene autotemcel (beti-cel/Zynteglo) similarly uses lentiviral gene addition for transfusion-dependent beta-thalassemia.\n\nLuspatercept (Reblozyl) is a recombinant fusion protein (modified activin receptor IIB-Fc) that traps TGF-beta superfamily ligands (GDF11, activin A/B), promoting late-stage erythroid maturation. FDA-approved for MDS with ring sideroblasts (MDS-RS) and transfusion-dependent beta-thalassemia; reduces transfusion burden by 33-50%. The COMMANDS trial showed superiority over epoetin alfa as first-line for lower-risk MDS with anemia.\n\nRoxadustat is an oral hypoxia-inducible factor prolyl hydroxylase inhibitor (HIF-PHI). By stabilizing HIF-2alpha, it stimulates endogenous EPO production, enhances iron absorption (suppresses hepcidin via HIF pathway), and improves iron mobilization. Approved in multiple countries for CKD-related anemia; notable for oral administration and hepcidin-lowering effect providing functional iron benefit without IV iron. Clinical trials (ALPS, ANDES, OLYMPUS) demonstrated non-inferiority to ESAs with additional iron metabolism benefits. Cardiovascular safety remains under ongoing surveillance.\n\nEmerging approaches: anti-hepcidin strategies (LY2787106 antibody, lexaptepid pegol anticalin), ferroportin stabilizers, TMPRSS6-targeting siRNA (SLN124) for iron-loading anemias, mitapivat (PKR activator for PK deficiency and thalassemia), and imetelstat (telomerase inhibitor for lower-risk MDS). The bitopertin (GlyT1 inhibitor) program was discontinued but established proof-of-concept for targeting glycine transport in erythropoiesis.',
      keyTerms: [
        { term: 'Exagamglogene autotemcel (exa-cel)', definition: 'CRISPR-based gene therapy for SCD and beta-thalassemia targeting BCL11A enhancer to increase fetal hemoglobin' },
        { term: 'Luspatercept', definition: 'TGF-beta superfamily ligand trap promoting late-stage erythroid maturation; approved for MDS-RS and beta-thalassemia' },
        { term: 'Roxadustat', definition: 'Oral HIF-PHI that stimulates endogenous EPO and suppresses hepcidin for CKD-related anemia' },
        { term: 'Congenital dyserythropoietic anemia', definition: 'Rare inherited disorders of erythropoiesis with characteristic morphologic abnormalities and ineffective erythropoiesis' },
        { term: 'BCL11A', definition: 'Transcription factor that represses fetal hemoglobin; its erythroid enhancer is the target of exa-cel gene therapy' },
        { term: 'Mitapivat', definition: 'Allosteric activator of pyruvate kinase R (PKR) for PK deficiency and thalassemia' },
        { term: 'HIF-PHI', definition: 'Hypoxia-Inducible Factor Prolyl Hydroxylase Inhibitor - stabilizes HIF to stimulate EPO and improve iron metabolism' },
        { term: 'Erythroferrone (ERFE)', definition: 'Erythroblast-derived hormone suppressing hepcidin; mediates iron loading in ineffective erythropoiesis' },
      ],
      clinicalNotes: 'Gene therapy for SCD: exa-cel and lovo-cel both FDA-approved (Dec 2023). Requires myeloablative conditioning with busulfan and autologous stem cell collection. Lovo-cel carries a boxed warning for hematologic malignancy risk (insertional oncogenesis). Patients need long-term follow-up for 15 years post-infusion. Luspatercept: administer subcutaneously every 3 weeks starting at 1 mg/kg, titrate up to 1.75 mg/kg; monitor for hypertension and thromboembolic events. Roxadustat: target Hgb 10-12 g/dL; concern for increased MACE in non-dialysis-dependent CKD (ROCKIES data) led to FDA non-approval in the US for NDD-CKD. Mitapivat (ACTIVATE/ACTIVATE-T trials): reduces transfusion burden in thalassemia and improves Hgb in PK deficiency.',
    },
  },
  media: [],
  citations: [
    'Camaschella C. Iron-deficiency anemia. N Engl J Med. 2015;372(19):1832-1843.',
    'Muckenthaler MU, et al. A Red Carpet for Iron Metabolism. Cell. 2017;168(3):344-361.',
    'Auerbach M, Adamson JW. How we diagnose and treat iron deficiency anemia. Am J Hematol. 2016;91(1):31-38.',
    'Nemeth E, Ganz T. Hepcidin-Ferroportin Interaction Controls Systemic Iron Homeostasis. Int J Mol Sci. 2021;22(12):6493.',
    'Cappellini MD, et al. Iron deficiency across chronic inflammatory conditions. Blood. 2020;136(10):1109-1119.',
  ],
  crossReferences: [
    'hematology-b12-folate-deficiency',
    'hematology-hemolytic-anemia',
    'hematology-aplastic-anemia',
    'hematology-thalassemia',
    'hematology-sickle-cell-disease',
  ],
  tags: {
    systems: ['hematology'],
    topics: ['anemia', 'iron metabolism', 'microcytic anemia', 'hemolytic anemia', 'gene therapy'],
    keywords: ['iron deficiency', 'hepcidin', 'ferroportin', 'ferritin', 'hemoglobin', 'erythropoiesis', 'luspatercept', 'roxadustat', 'exa-cel'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};

// =============================================================================
// B12 AND FOLATE DEFICIENCY ANEMIA
// =============================================================================

export const b12FolateDeficiencyComprehensive: EducationalContent = {
  id: 'hematology-b12-folate-deficiency-comprehensive',
  type: 'condition',
  name: 'Vitamin B12 and Folate Deficiency Anemia',
  nameEs: 'Anemia por deficiencia de vitamina B12 y folato',
  alternateNames: ['Megaloblastic Anemia', 'Pernicious Anemia', 'Macrocytic Anemia'],
  levels: {
    1: {
      level: 1,
      summary: 'When you do not have enough vitamin B12 or folate, your body makes red blood cells that are too big and do not work well.',
      explanation:
        'Your body needs vitamins B12 and folate to make healthy red blood cells. When these vitamins are missing, your bone marrow makes red blood cells that are too large and oddly shaped. These oversized cells cannot carry oxygen as well and break down faster than normal ones. B12 comes from animal foods like meat, eggs, and dairy, so strict vegetarians may not get enough. Your stomach also needs a special protein called intrinsic factor to absorb B12 - some people\'s immune systems attack the cells that make this protein (this is called pernicious anemia). Folate comes from leafy greens, beans, and fortified grains. Not having enough folate is especially dangerous during pregnancy because it can cause birth defects in the baby\'s spine (spina bifida). Symptoms include tiredness, weakness, numbness or tingling in hands and feet (from B12 deficiency), and a sore red tongue. Treatment is replacing the missing vitamin - B12 shots or pills, or folate supplements.',
      keyTerms: [
        { term: 'Vitamin B12', definition: 'A vitamin found in animal foods that your body needs to make red blood cells and keep nerves healthy' },
        { term: 'Folate', definition: 'A B vitamin found in leafy greens and beans needed for making new cells, especially important in pregnancy' },
        { term: 'Intrinsic factor', definition: 'A protein made by your stomach that helps absorb vitamin B12' },
        { term: 'Pernicious anemia', definition: 'A type of B12 deficiency caused by your immune system attacking stomach cells' },
      ],
      analogies: [
        'B12 and folate are like blueprints for building red blood cells - without good blueprints, the cells come out too big and misshapen.',
        'Intrinsic factor is like a key that unlocks the door so B12 can enter your body from the stomach.',
      ],
      patientCounselingPoints: [
        'If you are vegan or vegetarian, you may need B12 supplements or fortified foods.',
        'Pregnant women should take folate supplements to prevent birth defects.',
        'B12 deficiency can cause nerve damage (tingling, numbness) that may be permanent if untreated.',
        'If you have pernicious anemia, you will need B12 replacement for life.',
      ],
    },
    2: {
      level: 2,
      summary: 'Megaloblastic anemia results from impaired DNA synthesis due to B12 or folate deficiency, producing macrocytic red blood cells (MCV >100 fL) with hypersegmented neutrophils on peripheral smear.',
      explanation:
        'Vitamin B12 (cobalamin) and folate are essential cofactors in DNA synthesis, specifically in the conversion of deoxyuridine monophosphate (dUMP) to deoxythymidine monophosphate (dTMP) via thymidylate synthase. Folate donates the methyl group; B12 is required to regenerate active tetrahydrofolate (THF) from methylTHF (the "methyl trap"). Deficiency of either vitamin impairs DNA replication, causing nuclear-cytoplasmic asynchrony - the nucleus remains immature while the cytoplasm matures normally, producing large cells (megaloblasts). Key lab findings: macrocytic anemia (MCV >100 fL, often >110 fL), hypersegmented neutrophils (5+ lobes in >5% or any with 6+ lobes), elevated LDH and indirect bilirubin (from ineffective erythropoiesis and intramedullary hemolysis), low reticulocyte count, and possible pancytopenia. B12-specific findings: elevated methylmalonic acid (MMA) and homocysteine. Folate-specific: elevated homocysteine only, normal MMA. B12 deficiency causes include pernicious anemia (anti-intrinsic factor antibodies), gastrectomy, ileal resection/Crohn disease, strict veganism, metformin use, and nitrous oxide exposure. Folate deficiency causes include poor diet, alcoholism, pregnancy, hemolytic anemias (increased demand), and medications (methotrexate, trimethoprim, phenytoin).',
      keyTerms: [
        { term: 'Megaloblastic', definition: 'Abnormally large cell precursors with immature nuclei due to impaired DNA synthesis' },
        { term: 'Hypersegmented neutrophils', definition: 'Neutrophils with 5 or more nuclear lobes; hallmark of megaloblastic anemia' },
        { term: 'Methylmalonic acid (MMA)', definition: 'Metabolite elevated specifically in B12 deficiency (not folate deficiency)' },
        { term: 'Homocysteine', definition: 'Amino acid elevated in both B12 and folate deficiency' },
        { term: 'Pancytopenia', definition: 'Low counts of all three blood cell lines (red cells, white cells, platelets)' },
        { term: 'Nuclear-cytoplasmic asynchrony', definition: 'Mismatch where nuclear maturation lags behind cytoplasmic maturation' },
      ],
      examples: [
        'A 65-year-old woman with fatigue, glossitis, and peripheral neuropathy found to have MCV 124, low B12, elevated MMA.',
        'An alcoholic man with poor diet presenting with pancytopenia, MCV 108, and low folate level.',
      ],
    },
    3: {
      level: 3,
      summary: 'B12 and folate biochemistry integrates one-carbon metabolism, the methionine cycle, and thymidylate synthesis, with deficiency causing megaloblastic changes through impaired purine and pyrimidine synthesis.',
      explanation:
        'B12 serves as a cofactor for two enzymes: (1) methionine synthase, which transfers a methyl group from methylTHF to homocysteine to form methionine (regenerating THF), and (2) methylmalonyl-CoA mutase, which converts methylmalonyl-CoA to succinyl-CoA (propionate metabolism). The "methyl trap" hypothesis explains why B12 deficiency mimics folate deficiency: without B12, folate is trapped as methylTHF and cannot be recycled to THF for downstream reactions including thymidylate synthesis (dUMP to dTMP) and purine synthesis. This impairs DNA replication in all rapidly dividing cells.\n\nB12 absorption requires: (1) acid/pepsin in stomach to release B12 from food proteins, (2) R-binder (haptocorrin) binding in stomach, (3) pancreatic proteases cleaving R-binder in duodenum, (4) intrinsic factor (IF) binding in duodenum, (5) IF-B12 complex absorption via cubilin/amnionless receptors in terminal ileum. Any disruption along this pathway causes deficiency.\n\nNeurologic manifestations of B12 deficiency include subacute combined degeneration (demyelination of dorsal columns and lateral corticospinal tracts), peripheral neuropathy, cognitive impairment, and psychiatric symptoms. The neurologic mechanism involves impaired methylmalonyl-CoA mutase leading to accumulation of abnormal odd-chain fatty acids incorporated into myelin. Folate deficiency does NOT cause neurologic disease. Critically, folate supplementation can correct the hematologic abnormalities of B12 deficiency while allowing neurologic damage to progress - this is why serum B12 must always be checked before treating macrocytic anemia with folate alone.\n\nNon-megaloblastic macrocytosis (MCV elevated without megaloblastic changes) is caused by alcoholism, liver disease, hypothyroidism, MDS, reticulocytosis, and certain drugs (hydroxyurea, AZT). These must be differentiated from true megaloblastic anemia.',
      keyTerms: [
        { term: 'Methyl trap', definition: 'B12 deficiency traps folate as methylTHF, preventing regeneration of THF for DNA synthesis' },
        { term: 'Methionine synthase', definition: 'B12-dependent enzyme converting homocysteine to methionine while regenerating THF from methylTHF' },
        { term: 'Methylmalonyl-CoA mutase', definition: 'B12-dependent enzyme in propionate metabolism; dysfunction causes methylmalonic acidemia' },
        { term: 'Subacute combined degeneration', definition: 'B12 deficiency causing demyelination of posterior columns and lateral corticospinal tracts of spinal cord' },
        { term: 'Cubilin-amnionless complex', definition: 'Terminal ileum receptor complex for IF-B12 absorption; mutations cause Imerslund-Grasbeck syndrome' },
        { term: 'Thymidylate synthase', definition: 'Enzyme converting dUMP to dTMP using methyleneTHF; rate-limiting step impaired in folate/B12 deficiency' },
      ],
      clinicalNotes: 'B12 level <200 pg/mL is deficient; 200-400 is indeterminate (check MMA and homocysteine). Elevated MMA with elevated homocysteine confirms B12 deficiency. Elevated homocysteine with normal MMA suggests folate deficiency. Anti-intrinsic factor antibodies are specific (50-70% sensitive) for pernicious anemia. Schilling test is historical. Neurologic damage from B12 deficiency may be irreversible if treatment is delayed >6 months. Nitrous oxide oxidizes B12 cobalt, inactivating it - recreational use can precipitate acute B12 deficiency with myelopathy.',
    },
    4: {
      level: 4,
      summary: 'Advanced B12/folate deficiency management requires integration of specialized diagnostics, recognition of atypical presentations, and understanding of the interplay between one-carbon metabolism and epigenetic regulation.',
      explanation:
        'Diagnostic complexity arises in several scenarios: (1) Combined B12 and iron deficiency (dimorphic anemia) produces a normal MCV with mixed micro/macrocytic populations; high RDW and dimorphic peripheral smear are clues. (2) B12 deficiency with concurrent thalassemia trait masks macrocytosis. (3) Functional B12 deficiency: normal total B12 but low holotranscobalamin (holoTC, the biologically active B12 fraction bound to transcobalamin II). HoloTC is the earliest marker of B12 depletion. (4) Falsely normal B12 in myeloproliferative neoplasms (high haptocorrin) or falsely low B12 in pregnancy and oral contraceptive use.\n\nPernicious anemia management: lifelong B12 replacement (IM cyanocobalamin 1000 mcg daily for 7 days, weekly for 4 weeks, then monthly; or high-dose oral 1000-2000 mcg daily is non-inferior). Screen for associated autoimmune conditions (thyroid disease, type 1 DM, vitiligo). Increased risk of gastric carcinoid tumors and gastric adenocarcinoma - endoscopic surveillance recommendations vary but consider upper endoscopy at diagnosis.\n\nFolate in pregnancy and neural tube defect prevention: 400 mcg daily for all women of childbearing age; 4 mg daily for women with prior affected pregnancy. MTHFR polymorphisms (C677T, A1298C) may impair folate metabolism; 5-methylTHF supplementation bypasses this. The folate-homocysteine-cardiovascular disease hypothesis was not supported by randomized trials (HOPE-2, NORVIT) despite epidemiologic associations.\n\nAutoimmune gastritis and pernicious anemia pathophysiology: CD4+ T-cell mediated destruction of gastric parietal cells leads to achlorhydria, loss of intrinsic factor, and hypergastrinemia. The achlorhydria also impairs food-bound B12 release and iron absorption (contributing iron deficiency). Chronic hypergastrinemia stimulates enterochromaffin-like (ECL) cell hyperplasia, potentially progressing to type I gastric carcinoid tumors.',
      keyTerms: [
        { term: 'Holotranscobalamin', definition: 'Biologically active B12 bound to transcobalamin II; earliest marker of B12 depletion' },
        { term: 'Dimorphic anemia', definition: 'Concurrent micro and macrocytic populations suggesting combined deficiencies' },
        { term: 'MTHFR polymorphism', definition: 'Genetic variant impairing methylenetetrahydrofolate reductase, affecting folate metabolism' },
        { term: 'Autoimmune gastritis', definition: 'Immune-mediated destruction of parietal cells causing achlorhydria and intrinsic factor loss' },
        { term: 'Type I gastric carcinoid', definition: 'ECL cell tumor arising from chronic hypergastrinemia in autoimmune gastritis' },
      ],
      clinicalNotes: 'Holotranscobalamin (holoTC) <35 pmol/L suggests early B12 depletion even with normal total B12. In pernicious anemia, check gastrin level (elevated) and consider upper endoscopy at diagnosis. Monitor for iron deficiency (concurrent achlorhydria impairs iron absorption). After B12 repletion, reticulocyte peak occurs at day 5-8 and potassium may drop acutely (monitor K+ in severe megaloblastic anemia). High-dose oral B12 (1000-2000 mcg/day) achieves adequate absorption via mass action (1% absorbed without IF) and is a valid alternative to injections. In critically ill patients with lactic acidosis and megaloblastic anemia, consider empiric B12+folate before results return.',
    },
    5: {
      level: 5,
      summary: 'Expert-level B12/folate management encompasses rare inherited disorders of cobalamin metabolism, one-carbon metabolism in epigenetics and cancer biology, and emerging diagnostics including metabolomics.',
      explanation:
        'Inherited disorders of cobalamin metabolism comprise complementation groups (cblA through cblJ and mut) affecting different steps of intracellular B12 processing: cblA and cblB affect adenosylcobalamin synthesis (methylmalonic acidemia without homocystinuria), cblC/D/F/J affect both pathways (combined methylmalonic acidemia and homocystinuria), and cblE/G affect methionine synthase reductase and methionine synthase respectively (homocystinuria without methylmalonic acidemia). CblC disease (MMACHC mutations) is the most common inborn error of B12 metabolism, presenting in infancy with feeding difficulties, developmental delay, megaloblastic anemia, and thrombotic microangiopathy.\n\nTranscobalamin II deficiency is a rare autosomal recessive disorder causing severe megaloblastic anemia in infancy despite normal serum B12 (because holoTC is absent but haptocorrin-bound B12 is normal). Hereditary intrinsic factor deficiency (juvenile pernicious anemia) presents similarly but without anti-IF antibodies.\n\nOne-carbon metabolism connects folate/B12 to epigenetic regulation: methionine is converted to S-adenosylmethionine (SAM), the universal methyl donor for DNA methylation, histone methylation, and numerous biosynthetic reactions. Disruption of one-carbon metabolism affects global DNA methylation patterns, potentially contributing to carcinogenesis. The MTHFR C677T variant (10-15% homozygous in European populations) reduces enzyme activity by 70% and is associated with neural tube defects, but randomized trials have not confirmed cardiovascular or cancer risk reduction with supplementation beyond basic replacement.\n\nEmerging diagnostics: metabolomic profiling using liquid chromatography-mass spectrometry can simultaneously quantify B12, folate, MMA, homocysteine, methylcitric acid, and cystathionine for comprehensive one-carbon pathway assessment. Point-of-care B12 assays are improving access in resource-limited settings. Combined measurement of holoTC + MMA (cB12 composite score) improves diagnostic accuracy.\n\nGastric intrinsic factor autoantibodies: type I (blocking) antibodies prevent IF-B12 binding and are highly specific for pernicious anemia. Type II (binding/precipitating) antibodies block IF-B12 complex binding to ileal receptors. Anti-parietal cell antibodies (anti-H+/K+ ATPase) are sensitive but less specific, found in 10% of elderly without PA.',
      keyTerms: [
        { term: 'CblC disease', definition: 'Most common inborn error of B12 metabolism (MMACHC mutations) causing combined methylmalonic acidemia and homocystinuria' },
        { term: 'S-adenosylmethionine (SAM)', definition: 'Universal methyl donor derived from methionine; connects one-carbon metabolism to epigenetic regulation' },
        { term: 'Transcobalamin II deficiency', definition: 'Rare AR disorder causing megaloblastic anemia with normal B12 levels due to absent active B12 transport' },
        { term: 'cB12 composite score', definition: 'Combined biomarker score (holoTC, MMA, homocysteine, methylcitric acid) for improved B12 status assessment' },
        { term: 'Complementation groups', definition: 'Genetic classification of inborn errors of cobalamin metabolism based on cell fusion complementation studies' },
      ],
      clinicalNotes: 'In neonates/infants with megaloblastic anemia, consider inborn errors of B12 metabolism (cblC most common) - check urine organic acids and plasma amino acids. Transcobalamin II deficiency: treat with high-dose IM hydroxocobalamin (1 mg 2-3x/week). Hydroxocobalamin is preferred over cyanocobalamin in inborn errors. Nitrous oxide anesthesia is contraindicated in patients with known or suspected B12 deficiency - can precipitate acute neurologic deterioration. In MDS, macrocytosis is non-megaloblastic; do not attribute to B12/folate without confirming deficiency. For recurrent neural tube defects despite folate, consider MTHFR genotyping and 5-methylTHF supplementation.',
    },
  },
  media: [],
  citations: [
    'Green R, et al. Vitamin B12 deficiency. Nat Rev Dis Primers. 2017;3:17040.',
    'Stabler SP. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-160.',
    'Shipton MJ, Thachil J. Vitamin B12 deficiency - A 21st century perspective. Clin Med. 2015;15(2):145-150.',
    'Froese DS, et al. Vitamin B12, folate, and the methionine remethylation cycle. Nutrients. 2019;11(2):306.',
  ],
  crossReferences: [
    'hematology-iron-deficiency-anemia-comprehensive',
    'hematology-mds',
    'hematology-aplastic-anemia',
    'neurology-subacute-combined-degeneration',
  ],
  tags: {
    systems: ['hematology', 'neurology', 'gastroenterology'],
    topics: ['anemia', 'B12 deficiency', 'folate deficiency', 'megaloblastic anemia', 'one-carbon metabolism'],
    keywords: ['B12', 'cobalamin', 'folate', 'megaloblastic', 'pernicious anemia', 'MMA', 'homocysteine', 'intrinsic factor'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};

// =============================================================================
// HEMOLYTIC ANEMIA - Comprehensive
// =============================================================================

export const hemolyticAnemiaComprehensive: EducationalContent = {
  id: 'hematology-hemolytic-anemia-comprehensive',
  type: 'condition',
  name: 'Hemolytic Anemia',
  nameEs: 'Anemia hemolitica',
  alternateNames: ['Hemolytic Disorders', 'Red Blood Cell Destruction Anemias'],
  levels: {
    1: {
      level: 1,
      summary: 'Hemolytic anemia is when your red blood cells are destroyed faster than your body can replace them.',
      explanation:
        'Normally, red blood cells live for about 120 days before they are recycled. In hemolytic anemia, something destroys them much sooner - sometimes in just a few days. Your bone marrow tries to make new red blood cells faster to keep up, but it cannot always make enough. This leads to anemia (not enough red blood cells). Signs include tiredness, pale or yellowish skin (jaundice from the breakdown products), dark urine, and sometimes an enlarged spleen. Causes include inherited conditions (where the red blood cells themselves are defective), immune system problems (where your body mistakenly attacks its own red blood cells), infections (like malaria), and certain medications. Treatment depends on the cause and may include medicines to calm the immune system, blood transfusions, or surgery to remove the spleen.',
      keyTerms: [
        { term: 'Hemolysis', definition: 'The breaking apart or destruction of red blood cells' },
        { term: 'Jaundice', definition: 'Yellow color of the skin and eyes caused by buildup of bilirubin from broken red blood cells' },
        { term: 'Spleen', definition: 'An organ that filters blood and removes old or damaged red blood cells' },
        { term: 'Reticulocytes', definition: 'Young red blood cells that the bone marrow releases early when it is working hard to replace destroyed cells' },
      ],
      analogies: [
        'Imagine a factory making cars (red blood cells) - normally cars last 10 years, but if they start breaking down after 1 year, the factory cannot make replacements fast enough.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hemolytic anemia is characterized by premature red blood cell destruction with compensatory reticulocytosis, classified as intrinsic (corpuscular) versus extrinsic (extracorpuscular) and intravascular versus extravascular.',
      explanation:
        'Hemolysis is classified by location: intravascular (within blood vessels) shows hemoglobinemia, hemoglobinuria, low haptoglobin, elevated LDH, and hemosiderinuria. Extravascular (in spleen/liver macrophages) shows elevated indirect bilirubin, splenomegaly, and elevated LDH. Both show reticulocytosis (bone marrow compensation), elevated LDH, and low haptoglobin. The reticulocyte production index (RPI) >2 confirms adequate marrow response. Intrinsic (corpuscular) causes are usually inherited: membrane defects (spherocytosis, elliptocytosis), enzyme defects (G6PD deficiency, pyruvate kinase deficiency), and hemoglobin defects (sickle cell, thalassemia). The one exception is paroxysmal nocturnal hemoglobinuria (PNH), which is an acquired intrinsic defect. Extrinsic causes are usually acquired: autoimmune (warm/cold AIHA), mechanical (microangiopathic hemolytic anemia in TTP/HUS, DIC, prosthetic valves producing schistocytes), infections (malaria, Clostridium perfringens), medications, and hypersplenism. The direct antiglobulin test (DAT/Coombs test) is the key test to distinguish immune from non-immune hemolysis.',
      keyTerms: [
        { term: 'Haptoglobin', definition: 'Protein that binds free hemoglobin; consumed and decreased during hemolysis' },
        { term: 'Reticulocyte production index', definition: 'Corrected reticulocyte count accounting for anemia severity; >2 indicates adequate marrow response' },
        { term: 'Schistocytes', definition: 'Fragmented red blood cells seen in microangiopathic hemolysis (TTP, HUS, DIC)' },
        { term: 'Direct antiglobulin test', definition: 'Detects antibodies or complement on RBC surface; positive in autoimmune hemolysis' },
        { term: 'Intravascular hemolysis', definition: 'RBC destruction within blood vessels, releasing free hemoglobin' },
        { term: 'Extravascular hemolysis', definition: 'RBC destruction by macrophages in spleen and liver' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hemolytic anemia pathophysiology encompasses red cell membrane biology, metabolic enzyme pathways, hemoglobin structure-function, and immune-mediated mechanisms with distinct diagnostic and therapeutic approaches.',
      explanation:
        'Membrane defects: Hereditary spherocytosis (HS) involves vertical interactions (spectrin-ankyrin-band 3 complex). Loss of membrane surface area converts biconcave discs to spherocytes that are trapped and destroyed in the splenic cords. Diagnosis: spherocytes on smear, elevated MCHC, positive EMA binding test, negative DAT. Hereditary elliptocytosis involves horizontal interactions (spectrin dimer self-association). Most cases are clinically mild; severe cases (homozygous, HPP) present in infancy.\n\nEnzyme defects: G6PD deficiency impairs the hexose monophosphate shunt, the sole source of NADPH in RBCs. Without NADPH, glutathione cannot be regenerated, leaving hemoglobin vulnerable to oxidant damage. Oxidized hemoglobin precipitates as Heinz bodies; splenic macrophages remove Heinz body inclusions creating bite cells. Over 400 variants exist; Class I (chronic hemolysis), Class II (severe intermittent, e.g., G6PD Mediterranean), Class III (moderate, e.g., G6PD A-). Pyruvate kinase deficiency impairs glycolysis, reducing ATP production needed for membrane ion pumps, causing chronic hemolysis with echinocytes.\n\nHemoglobin defects: Sickle cell disease (HbS, Glu6Val in beta-globin) causes HbS polymerization under deoxygenation, forming tactoids that distort RBCs. Chronic hemolysis, vaso-occlusion, and endothelial dysfunction from free hemoglobin scavenging nitric oxide drive the pathophysiology. Thalassemias: alpha-thal from gene deletions (--/alpha-alpha = trait, --/-- = Hb Barts hydrops fetalis); beta-thal from point mutations reducing (beta+) or abolishing (beta0) beta-globin synthesis.\n\nMicroangiopathic hemolytic anemia (MAHA): fibrin strands in small vessels shear RBCs producing schistocytes. Causes include TTP (ADAMTS13 deficiency), HUS (Shiga toxin or complement-mediated), DIC, malignant hypertension, HELLP syndrome, and prosthetic valve hemolysis.',
      keyTerms: [
        { term: 'EMA binding test', definition: 'Eosin-5-maleimide flow cytometry test for hereditary spherocytosis; reduced binding indicates membrane protein loss' },
        { term: 'Heinz bodies', definition: 'Precipitated denatured hemoglobin seen with supravital staining in G6PD deficiency and unstable hemoglobins' },
        { term: 'Hexose monophosphate shunt', definition: 'Metabolic pathway generating NADPH for glutathione reduction and oxidant defense in RBCs' },
        { term: 'ADAMTS13', definition: 'Metalloprotease that cleaves von Willebrand factor; deficiency causes TTP' },
        { term: 'HbS polymerization', definition: 'Deoxygenated sickle hemoglobin forms rigid polymers distorting red blood cells' },
        { term: 'Spectrin', definition: 'Major cytoskeletal protein of the RBC membrane; mutations cause hereditary spherocytosis and elliptocytosis' },
      ],
      clinicalNotes: 'Hemolysis workup: CBC with reticulocyte count, LDH, haptoglobin, indirect bilirubin, DAT, peripheral smear. Haptoglobin <25 mg/dL is highly suggestive of hemolysis. In MAHA, always check ADAMTS13 activity urgently - TTP is a medical emergency requiring plasma exchange. Do not transfuse platelets in TTP (worsens thrombosis). G6PD levels may be falsely normal during acute hemolysis - retest in 2-3 months. In sickle cell crisis: hydration, analgesia, oxygen if hypoxic, transfuse for acute chest syndrome or stroke.',
    },
    4: {
      level: 4,
      summary: 'Advanced hemolytic anemia management requires detailed understanding of hereditary membrane and enzyme defects, warm versus cold AIHA treatment algorithms, and complement-mediated hemolysis in PNH and aHUS.',
      explanation:
        'Hereditary spherocytosis genetics: autosomal dominant in 75% (ANK1, SLC4A1/band 3, SPTB/beta-spectrin); autosomal recessive in 25% (SPTA1/alpha-spectrin, EPB42/protein 4.2). Severity correlates with degree of spectrin deficiency. Management: folate supplementation, splenectomy for moderate-severe disease (partial splenectomy in children <6 years to preserve immune function), pre-splenectomy vaccinations (pneumococcus, meningococcus, H. influenzae), and cholecystectomy if gallstones present.\n\nAutoimmune hemolytic anemia treatment algorithms: Warm AIHA - first-line: prednisone 1-1.5 mg/kg x 2-3 weeks with taper; second-line: rituximab (preferred over splenectomy per ASH 2020 guidelines) or splenectomy; third-line: mycophenolate, azathioprine, danazol, cyclosporine. Cold agglutinin disease - avoid cold exposure; rituximab monotherapy or rituximab-bendamustine; sutimlimab (anti-C1s monoclonal antibody, FDA approved 2022) for patients requiring transfusion. Evans syndrome (AIHA + ITP): consider underlying immunodeficiency (ALPS, CVID) or lymphoproliferative disorder.\n\nParoxysmal nocturnal hemoglobinuria (PNH): acquired clonal stem cell disorder with somatic PIGA mutation causing GPI-anchor deficiency, losing CD55 (DAF) and CD59 (MIRL) from cell surfaces. Without CD59, complement C5b-9 MAC formation is unregulated, causing intravascular hemolysis, thrombosis, and bone marrow failure. Diagnosis by flow cytometry (FLAER assay). Treatment: eculizumab/ravulizumab (anti-C5 monoclonal antibodies); iptacopan (oral factor B inhibitor, 2023) and danicopan (oral factor D inhibitor, add-on) for residual anemia on anti-C5 therapy; pegcetacoplan (anti-C3) for patients with suboptimal response to anti-C5.\n\nComplement-mediated HUS (aHUS): mutations in complement regulatory genes (CFH, CFI, MCP, CFB, C3, THBD). Distinguished from TTP by ADAMTS13 >10%. Eculizumab/ravulizumab is standard treatment; plasma exchange as bridging therapy.',
      keyTerms: [
        { term: 'PIGA mutation', definition: 'Somatic mutation in PNH causing loss of GPI-anchored complement regulators (CD55, CD59)' },
        { term: 'FLAER assay', definition: 'Fluorescent aerolysin-based flow cytometry test for GPI-anchor deficiency in PNH diagnosis' },
        { term: 'Eculizumab', definition: 'Anti-C5 complement monoclonal antibody for PNH and aHUS' },
        { term: 'Sutimlimab', definition: 'Anti-C1s monoclonal antibody FDA-approved for cold agglutinin disease' },
        { term: 'Evans syndrome', definition: 'Concurrent autoimmune hemolytic anemia and immune thrombocytopenia' },
        { term: 'ALPS', definition: 'Autoimmune Lymphoproliferative Syndrome - inherited FAS/FASL mutations causing lymphoproliferation and multilineage cytopenias' },
      ],
      clinicalNotes: 'PNH: vaccinate against Neisseria meningitidis at least 2 weeks before starting eculizumab (or give prophylactic antibiotics if urgent). Monitor for breakthrough hemolysis; ravulizumab (longer half-life) reduces breakthrough events. PNH thrombosis: anticoagulate and start complement inhibitor. Warm AIHA: cross-matching is difficult due to panagglutinins - communicate with blood bank; least incompatible units are acceptable in life-threatening anemia. Evans syndrome in children: screen for ALPS (elevated double-negative T cells, vitamin B12, IL-10, sFASL).',
    },
    5: {
      level: 5,
      summary: 'Expert hemolytic anemia management integrates novel complement therapeutics, emerging gene therapies for hemoglobinopathies, and precision diagnostics for rare congenital hemolytic anemias.',
      explanation:
        'The complement therapeutics landscape has expanded dramatically. Proximal complement inhibition (C3): pegcetacoplan (subcutaneous anti-C3) addresses extravascular hemolysis from C3b opsonization that persists on anti-C5 therapy in PNH. The PEGASUS trial showed superior hemoglobin improvement versus eculizumab. Factor B inhibition: iptacopan (oral, LNP023) inhibits alternative pathway amplification; APPLY-PNH trial showed Hgb improvement as monotherapy. Factor D inhibition: danicopan (oral) as add-on to anti-C5 improved Hgb by 2.4 g/dL in phase 3. These oral agents may eventually replace parenteral anti-C5 therapy.\n\nGene therapy for sickle cell: beyond exa-cel and lovo-cel, investigational approaches include in vivo gene editing (base editing to create naturally protective Makassar variant HbG-Makassar), and allelic gene correction targeting the sickle mutation directly. Voxelotin (GBT440), an HbS polymerization inhibitor, increases hemoglobin by stabilizing the oxy-conformation but did not improve vaso-occlusive crises in clinical trials (GBT was withdrawn from market in 2023 after post-marketing analysis). Crizanlizumab (anti-P-selectin) reduces vaso-occlusive crises.\n\nRare congenital hemolytic anemias: hereditary stomatocytosis (PIEZO1 or KCNN4 mutations causing cation leak) - splenectomy is CONTRAINDICATED due to thrombosis risk. Hereditary xerocytosis (dehydrated stomatocytosis): similar contraindication. Southeast Asian ovalocytosis (band 3 Arg27del) provides malaria resistance. Congenital dyserythropoietic anemia type II (HEMPAS): SEC23B mutations causing abnormal N-glycosylation of band 3; diagnosed by SDS-PAGE showing band 3 migration abnormality or genetic testing.\n\nNext-generation diagnostics: whole exome/genome sequencing panels for hereditary hemolytic anemias now include >70 genes. Ektacytometry (osmotic gradient) characterizes membrane deformability across osmolality range, distinguishing HS, HE, stomatocytosis, and xerocytosis with a single test. Digital morphology AI systems can automate peripheral smear analysis for hemolytic findings.',
      keyTerms: [
        { term: 'Pegcetacoplan', definition: 'Anti-C3 complement inhibitor addressing C3b-mediated extravascular hemolysis in PNH' },
        { term: 'Iptacopan', definition: 'Oral factor B inhibitor for alternative complement pathway; monotherapy option in PNH' },
        { term: 'Ektacytometry', definition: 'Technique measuring RBC deformability across osmotic gradient to diagnose membrane disorders' },
        { term: 'Hereditary stomatocytosis', definition: 'Cation leak disorder from PIEZO1/KCNN4 mutations; splenectomy contraindicated due to thrombosis risk' },
        { term: 'Base editing', definition: 'Precision gene editing converting single nucleotide without double-strand breaks; investigated for SCD correction' },
      ],
      clinicalNotes: 'Hereditary stomatocytosis/xerocytosis: splenectomy is absolutely contraindicated - causes severe portal/mesenteric venous thrombosis. Suspect if hemolysis with stomatocytes on smear and elevated MCV. Confirm with ektacytometry and PIEZO1/KCNN4 genetic testing before any splenectomy for unexplained hemolysis. PNH proximal complement inhibitors: pegcetacoplan increases infection risk (encapsulated organisms) - ensure meningococcal vaccination. Monitor for breakthrough hemolysis when switching between complement inhibitors. Next-generation SCD therapies: ongoing trials of in vivo base editing (BEAM-101, EDIT-301) may eliminate need for myeloablative conditioning.',
    },
  },
  media: [],
  citations: [
    'Barcellini W, Fattizzo B. Clinical Applications of Hemolytic Markers in the Differential Diagnosis and Management of Hemolytic Anemia. Dis Markers. 2015;2015:635670.',
    'Hill A, et al. Paroxysmal nocturnal haemoglobinuria. Nat Rev Dis Primers. 2017;3:17028.',
    'Brodsky RA. Complement in hemolytic anemia. Blood. 2015;126(22):2459-2465.',
    'Risitano AM, et al. Complement fraction 3 binding on erythrocytes as additional mechanism of disease in PNH patients treated by eculizumab. Blood. 2009;113(17):4094-4100.',
    'Ware RE, et al. Sickle cell disease. Lancet. 2017;390(10091):311-323.',
  ],
  crossReferences: [
    'hematology-iron-deficiency-anemia-comprehensive',
    'hematology-coagulation-disorders',
    'hematology-aplastic-anemia',
    'hematology-hematologic-malignancies',
  ],
  tags: {
    systems: ['hematology', 'immunology'],
    topics: ['hemolytic anemia', 'complement', 'membrane disorders', 'enzymopathies', 'hemoglobinopathies', 'autoimmune'],
    keywords: ['hemolysis', 'spherocytosis', 'G6PD', 'sickle cell', 'PNH', 'AIHA', 'complement', 'eculizumab'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};

// =============================================================================
// APLASTIC ANEMIA - Comprehensive
// =============================================================================

export const aplasticAnemiaComprehensive: EducationalContent = {
  id: 'hematology-aplastic-anemia-comprehensive',
  type: 'condition',
  name: 'Aplastic Anemia',
  nameEs: 'Anemia aplasica',
  alternateNames: ['Bone Marrow Failure', 'Aplastic Pancytopenia'],
  levels: {
    1: {
      level: 1,
      summary: 'Aplastic anemia is a rare condition where your bone marrow stops making enough blood cells.',
      explanation:
        'Your bone marrow is like a factory inside your bones that makes all your blood cells - red blood cells (carry oxygen), white blood cells (fight infection), and platelets (stop bleeding). In aplastic anemia, this factory slows down or almost stops working. Without enough blood cells, you can feel very tired and weak (low red cells), get infections easily (low white cells), and bruise or bleed easily (low platelets). This can happen because of autoimmune problems (your immune system attacks the marrow), certain medications, chemicals like benzene, viral infections, or sometimes no known cause. Treatment depends on how severe it is and may include blood transfusions, medicines to calm the immune system, or a bone marrow transplant from a matching donor.',
      keyTerms: [
        { term: 'Bone marrow', definition: 'Spongy tissue inside bones that makes all your blood cells' },
        { term: 'Platelets', definition: 'Tiny blood cells that help form clots to stop bleeding' },
        { term: 'Bone marrow transplant', definition: 'A treatment where diseased marrow is replaced with healthy marrow from a donor' },
      ],
      analogies: [
        'Aplastic anemia is like a factory shutdown - the machines (bone marrow) stop producing, so there are not enough products (blood cells) to go around.',
      ],
    },
    2: {
      level: 2,
      summary: 'Aplastic anemia is a bone marrow failure syndrome characterized by pancytopenia and hypocellular bone marrow, most commonly caused by immune-mediated destruction of hematopoietic stem cells.',
      explanation:
        'Aplastic anemia (AA) is defined by pancytopenia (low counts of all three cell lines) with a hypocellular bone marrow (<25% cellularity or <50% cellularity with <30% hematopoietic cells). Severity classification: severe AA requires at least 2 of 3 criteria (neutrophils <500, platelets <20,000, reticulocytes <20,000) plus marrow cellularity <25%; very severe AA has neutrophils <200. Causes: idiopathic (70%, most are immune-mediated), drugs (chloramphenicol, carbamazepine, NSAIDs), toxins (benzene), radiation, viruses (hepatitis-associated AA, parvovirus B19, EBV, HIV), and inherited syndromes (Fanconi anemia, dyskeratosis congenita). Diagnosis requires bone marrow biopsy showing fat-replaced hypocellular marrow with residual lymphocytes and stromal cells. Treatment for severe AA: allogeneic stem cell transplant (preferred for young patients with matched sibling donor) or immunosuppressive therapy with horse anti-thymocyte globulin (ATG) + cyclosporine + eltrombopag.',
      keyTerms: [
        { term: 'Pancytopenia', definition: 'Reduction in all three blood cell lines: red cells, white cells, and platelets' },
        { term: 'Hypocellular marrow', definition: 'Bone marrow with reduced hematopoietic cells, replaced by fat' },
        { term: 'Anti-thymocyte globulin (ATG)', definition: 'Immunosuppressive antibody targeting T cells, used in aplastic anemia treatment' },
        { term: 'Eltrombopag', definition: 'Thrombopoietin receptor agonist that also stimulates hematopoietic stem cells in aplastic anemia' },
        { term: 'Fanconi anemia', definition: 'Inherited bone marrow failure syndrome with DNA repair defects and cancer predisposition' },
      ],
    },
    3: {
      level: 3,
      summary: 'Aplastic anemia pathophysiology centers on T-cell-mediated autoimmune destruction of hematopoietic stem cells, with clonal evolution risk to MDS/AML and overlap with inherited bone marrow failure syndromes.',
      explanation:
        'The autoimmune model of acquired AA: oligoclonal cytotoxic CD8+ T cells (often expressing Th1 cytokines IFN-gamma and TNF-alpha) target hematopoietic stem and progenitor cells (HSPCs), inducing apoptosis through Fas/FasL pathway and perforin/granzyme. The trigger is unknown but may involve molecular mimicry or neoantigen presentation. Regulatory T cells (Tregs) are reduced, failing to suppress autoreactive clones. Telomere shortening is found in ~30% of AA patients, reflecting stem cell exhaustion and/or underlying genetic predisposition.\n\nClonal evolution: 10-15% of AA patients develop clonal cytogenetic abnormalities; monosomy 7 and trisomy 8 are most common. PNH clones (GPI-anchor deficient) develop in 40-50% of AA patients, likely because PIGA-mutant cells escape immune attack (GPI-anchored proteins may present the target antigen). Most PNH clones remain small and clinically insignificant but some evolve to clinical PNH. MDS/AML transformation risk is 10-20% over 10 years.\n\nInherited bone marrow failure syndromes (IBMFS): Fanconi anemia (FA) - biallelic mutations in DNA repair pathway genes (FANCA most common); diagnosed by chromosome breakage test with DEB/MMC. Dyskeratosis congenita (DC) - telomere biology disorders (DKC1, TERT, TERC, TINF2, etc.) with classic triad of nail dystrophy, oral leukoplakia, and reticulate skin pigmentation. Shwachman-Diamond syndrome (SBDS mutations) - pancreatic insufficiency + neutropenia. Diamond-Blackfan anemia (RPS19 and other ribosomal protein mutations) - isolated red cell aplasia with physical anomalies. All IBMFS carry elevated cancer risk.',
      keyTerms: [
        { term: 'Clonal hematopoiesis', definition: 'Expansion of blood cell clones with somatic mutations; may precede MDS/AML in AA' },
        { term: 'Chromosome breakage test', definition: 'Diagnostic test for Fanconi anemia showing increased chromosomal breaks with DEB or mitomycin C' },
        { term: 'Telomere biology disorders', definition: 'Inherited conditions with short telomeres causing bone marrow failure, pulmonary fibrosis, and liver disease' },
        { term: 'GPI-anchor', definition: 'Glycosylphosphatidylinositol membrane anchor; loss in PNH allows immune escape of mutant clone' },
        { term: 'Diamond-Blackfan anemia', definition: 'Inherited pure red cell aplasia from ribosomal protein gene mutations' },
      ],
      clinicalNotes: 'Screen all young AA patients (<40-50 years) for IBMFS: chromosome breakage test (FA), telomere length (DC), and consider genetic panel. This is critical because IBMFS patients cannot tolerate standard conditioning regimens for transplant and have different cancer surveillance needs. PNH flow cytometry should be checked at diagnosis and serially. Clonal cytogenetics at diagnosis and annually; monosomy 7 portends worse prognosis and may warrant early transplant consideration.',
    },
    4: {
      level: 4,
      summary: 'Aplastic anemia treatment integrates immunosuppressive therapy optimization, transplant conditioning innovations, and management of clonal complications.',
      explanation:
        'Immunosuppressive therapy (IST): The standard regimen is horse ATG (ATGAM 40 mg/kg/day x 4 days) + cyclosporine (target trough 200-400 ng/mL for 12+ months) + eltrombopag (150 mg/day starting day 1). The NIH trial demonstrated that adding eltrombopag to IST improved overall response rate from 66% to 94% and complete response from 10% to 58%. Rabbit ATG is inferior to horse ATG for initial therapy (shown in randomized trial). Response is assessed at 3-6 months. Relapse occurs in 30-40% upon cyclosporine taper.\n\nAllogeneic transplant: matched sibling donor (MSD) transplant is first-line for severe AA in patients <40 years. Conditioning: fludarabine + cyclophosphamide +/- ATG. Outcomes: >90% survival with MSD. For patients without MSD: matched unrelated donor (MUD) transplant outcomes have improved with better matching and conditioning; haploidentical transplant with post-transplant cyclophosphamide is emerging as a viable option. Older patients (>40) typically receive IST first.\n\nClonal evolution management: somatic mutations in BCOR/BCORL1 and PIGA are common and generally favorable. DNMT3A, ASXL1, and RUNX1 mutations suggest higher MDS/AML risk. Monosomy 7 may warrant transplant. PNH clone evolution: if >10% GPI-deficient granulocytes with clinical hemolysis, consider complement inhibitor therapy. AA-PNH syndrome represents a clinical spectrum.\n\nRefractory AA: options include second course of IST (rabbit ATG if horse ATG used first), alemtuzumab, cyclophosphamide (high-dose without rescue - Johns Hopkins protocol, effective but risk of prolonged neutropenia and fungal infections), and eltrombopag monotherapy. Allogeneic transplant is considered for refractory disease regardless of age if suitable donor available.',
      keyTerms: [
        { term: 'Horse ATG', definition: 'Equine anti-thymocyte globulin (ATGAM); superior to rabbit ATG for initial AA treatment' },
        { term: 'Eltrombopag in AA', definition: 'TPO-receptor agonist that stimulates residual HSCs; dramatically improves IST response when added upfront' },
        { term: 'Haploidentical transplant', definition: 'Half-matched family donor transplant using post-transplant cyclophosphamide for graft-versus-host prophylaxis' },
        { term: 'Post-transplant cyclophosphamide', definition: 'Strategy eliminating alloreactive T cells after transplant, enabling haploidentical donor use' },
        { term: 'BCOR/BCORL1 mutations', definition: 'Somatic mutations common in AA with generally favorable prognosis' },
      ],
      clinicalNotes: 'Treatment algorithm: Age <40 with MSD -> transplant. Age <40 without MSD -> IST (ATG + CSA + eltrombopag); if no response at 6 months, consider MUD or haploidentical transplant. Age >40 -> IST first-line; transplant for refractory disease. Monitor cyclosporine troughs carefully - nephrotoxicity is dose-limiting. Eltrombopag can cause liver toxicity - monitor LFTs biweekly initially. Screen for iron overload in transfusion-dependent patients (ferritin, liver MRI); chelate when ferritin >1000 ng/mL. Pre-transplant: DEB test and telomere length essential to exclude IBMFS.',
    },
    5: {
      level: 5,
      summary: 'Expert aplastic anemia management encompasses genomic-guided therapy, novel immunomodulatory approaches, and precision monitoring of clonal dynamics.',
      explanation:
        'Genomic landscape of AA: next-generation sequencing reveals somatic mutations in 30-50% of AA patients at diagnosis. The mutation spectrum differs from de novo MDS: enriched for BCOR/BCORL1 (favors IST response), PIGA (reflects immune selection), and depleted for spliceosome mutations (SF3B1, SRSF2, U2AF1). DNMT3A mutations at variant allele frequency >10% predict MDS evolution. Monitoring mutation dynamics by serial NGS/ddPCR informs clonal trajectory and therapy decisions.\n\nTelomere biology in AA: short telomeres (age-adjusted <1st percentile by flow-FISH) predict poorer IST response and higher relapse/clonal evolution risk. Patients with very short telomeres should be evaluated for cryptic telomere biology disorders (TERT, TERC, RTEL1, PARN germline variants may lack classic DC features). Androgens (danazol) can activate telomerase and lengthen telomeres modestly (shown in NIH trial).\n\nEmerging therapies: emapalumab (anti-IFN-gamma antibody) targets the key effector cytokine in AA pathophysiology; early trials show promise. Abatacept (CTLA4-Ig) modulates T-cell co-stimulation. JAK inhibitors (ruxolitinib) suppress IFN-gamma signaling. These biologics may provide more targeted immunosuppression with fewer toxicities than ATG/CSA. Gene therapy for Fanconi anemia using lentiviral FANCA gene correction of autologous HSPCs is in clinical trials, potentially avoiding transplant-related complications.\n\nTransplant innovations: ex vivo T-cell depletion (TCR alpha-beta depletion) reduces GVHD while preserving NK cell and gamma-delta T cell immunity. Gene-edited universal donor cells are investigational. For IBMFS patients requiring transplant, reduced-intensity conditioning is mandatory (radiation sensitivity in FA, organ toxicity in DC). Fludarabine-based regimens have transformed FA transplant outcomes.\n\nPrecision monitoring: measurable clonal hematopoiesis tracking by error-corrected sequencing (variant allele frequency detection to 0.1%), serial PNH clone quantification, and telomere length dynamics guide intervention timing. Cell-free DNA analysis may enable non-invasive clonal monitoring.',
      keyTerms: [
        { term: 'Error-corrected sequencing', definition: 'Deep sequencing with molecular barcoding enabling detection of somatic mutations at VAF 0.1%' },
        { term: 'Flow-FISH telomere length', definition: 'Gold standard clinical assay measuring telomere length in lymphocyte subsets' },
        { term: 'Emapalumab', definition: 'Anti-interferon-gamma monoclonal antibody; investigational for aplastic anemia targeting key pathogenic cytokine' },
        { term: 'TCR alpha-beta depletion', definition: 'Ex vivo graft manipulation removing alloreactive T cells while preserving innate immunity' },
        { term: 'FANCA gene therapy', definition: 'Lentiviral gene correction of autologous HSPCs for Fanconi anemia; avoids allogeneic transplant risks' },
      ],
      clinicalNotes: 'All AA patients should have NGS panel at diagnosis including BCOR, BCORL1, DNMT3A, ASXL1, RUNX1, TP53, and other MDS-related genes. Serial monitoring every 6-12 months. Short telomeres (<1st percentile): consider germline telomere gene panel; predict poorer IST response. Danazol 800 mg/day modestly lengthens telomeres but watch for liver toxicity (peliosis hepatis) and virilization. For Fanconi anemia transplant: avoid cyclophosphamide >20-40 mg/kg and radiation if possible; fludarabine-based reduced intensity conditioning. Screen FA patients annually for squamous cell carcinomas (head/neck, anogenital) starting in second decade.',
    },
  },
  media: [],
  citations: [
    'Young NS. Aplastic Anemia. N Engl J Med. 2018;379(17):1643-1656.',
    'Townsley DM, et al. Eltrombopag Added to Standard Immunosuppression for Aplastic Anemia. N Engl J Med. 2017;376(16):1540-1550.',
    'Ogawa S. Clonal hematopoiesis in acquired aplastic anemia. Blood. 2016;128(3):337-347.',
    'Alter BP. Diagnosis, genetics, and management of inherited bone marrow failure syndromes. Hematology Am Soc Hematol Educ Program. 2007;2007:29-39.',
  ],
  crossReferences: [
    'hematology-hematologic-malignancies',
    'hematology-iron-deficiency-anemia-comprehensive',
    'hematology-hemolytic-anemia-comprehensive',
    'hematology-bone-marrow-transplant',
  ],
  tags: {
    systems: ['hematology'],
    topics: ['aplastic anemia', 'bone marrow failure', 'immunosuppression', 'stem cell transplant', 'inherited syndromes'],
    keywords: ['aplastic anemia', 'pancytopenia', 'ATG', 'eltrombopag', 'Fanconi anemia', 'telomere', 'PNH', 'clonal evolution'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['SOMA Content Team'],
};
