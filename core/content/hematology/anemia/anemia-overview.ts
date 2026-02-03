import { EducationalContent } from '../../types';

/**
 * Comprehensive overview of anemia classification and types
 * Covers microcytic, normocytic, and macrocytic anemias with detailed pathophysiology
 */
export const anemiaOverview: EducationalContent = {
  id: 'hematology-anemia-overview',
  type: 'concept',
  name: 'Anemia Classification and Overview',
  alternateNames: ['Anemia Types', 'Classification of Anemia', 'Anemia Categories'],

  levels: {
    1: {
      level: 1,
      summary: 'Anemia means you don\'t have enough healthy red blood cells to carry oxygen around your body, which makes you feel tired and weak.',
      explanation: `Anemia happens when something goes wrong with your red blood cells - the tiny disc-shaped cells that carry oxygen throughout your body. There are three main ways red blood cells can be affected:

**Size-Based Categories:**
- **Small cells (Microcytic)**: Like iron deficiency anemia - your body can't make cells the right size because it's missing iron
- **Normal-sized cells (Normocytic)**: Your body either isn't making enough cells or is losing/destroying them too quickly
- **Large cells (Macrocytic)**: Your body is missing vitamins like B12 or folate that help cells divide properly

Common symptoms include feeling very tired, looking pale, getting short of breath, having a fast heartbeat, feeling dizzy, and getting headaches. The good news is that most types of anemia can be treated once doctors figure out what's causing it.`,
      keyTerms: [
        { term: 'Anemia', definition: 'A condition where you don\'t have enough healthy red blood cells to carry oxygen', pronunciation: 'uh-NEE-mee-uh' },
        { term: 'Red blood cells', definition: 'Tiny disc-shaped cells that carry oxygen from your lungs to all parts of your body' },
        { term: 'Hemoglobin', definition: 'The protein in red blood cells that actually holds onto oxygen', pronunciation: 'HEE-muh-glow-bin' },
        { term: 'Microcytic', definition: 'Red blood cells that are smaller than normal', pronunciation: 'my-kro-SIT-ik' },
        { term: 'Macrocytic', definition: 'Red blood cells that are larger than normal', pronunciation: 'mak-ro-SIT-ik' },
      ],
      analogies: [
        'Red blood cells are like delivery trucks carrying oxygen packages. In anemia, you either have too few trucks, trucks that are too small to carry much, or trucks that break down before delivering their packages.',
        'Think of iron deficiency anemia like trying to build a car factory without enough steel - you can\'t make enough cars, and the ones you make are smaller and don\'t work as well.',
      ],
      examples: [
        'A teenager with heavy periods might develop iron deficiency anemia over time',
        'A strict vegan who doesn\'t take B12 supplements may develop vitamin B12 deficiency anemia after several years',
        'Someone with kidney disease might develop anemia because their kidneys aren\'t making enough of the hormone that tells the body to make red blood cells',
      ],
      patientCounselingPoints: [
        'Anemia is very common and usually treatable',
        'The treatment depends on finding out what type of anemia you have',
        'Eating a balanced diet with iron-rich foods (meat, beans, leafy greens) and vitamins can help prevent some types of anemia',
        'Always tell your doctor if you feel unusually tired or have other symptoms - anemia is diagnosed with a simple blood test',
      ],
    },

    2: {
      level: 2,
      summary: 'Anemia is classified by red blood cell size (MCV) into microcytic, normocytic, and macrocytic categories, each with distinct causes requiring different diagnostic approaches and treatments.',
      explanation: `Anemia is defined as hemoglobin below normal ranges (men <13 g/dL, women <12 g/dL, pregnancy <11 g/dL). The key to diagnosis is the MCV (mean corpuscular volume), which tells us the average size of red blood cells.

**Microcytic Anemia (MCV <80 fL):**
- **Iron deficiency**: Most common worldwide; causes include blood loss, poor diet, malabsorption
- **Thalassemia**: Genetic disorder of hemoglobin production
- **Anemia of chronic disease**: Sometimes microcytic when chronic
- **Sideroblastic anemia**: Rare condition affecting iron utilization

**Normocytic Anemia (MCV 80-100 fL):**
- **Anemia of chronic disease**: From inflammation blocking iron use
- **Acute blood loss**: Sudden bleeding before body adjusts
- **Hemolytic anemia**: Red blood cells destroyed too quickly
- **Aplastic anemia**: Bone marrow not making enough cells
- **Chronic kidney disease**: Low erythropoietin production

**Macrocytic Anemia (MCV >100 fL):**
- **Vitamin B12 deficiency**: From pernicious anemia, diet, or malabsorption
- **Folate deficiency**: From poor diet, malabsorption, or increased needs
- **Medications**: Chemotherapy, alcohol, certain anticonvulsants
- **Liver disease and hypothyroidism**: Affect red cell maturation

Symptoms vary by severity and speed of onset. Gradual anemia (like B12 deficiency over years) may cause minimal symptoms even at low hemoglobin, while rapid blood loss causes immediate symptoms. Additional testing includes reticulocyte count (are new cells being made?), iron studies, B12/folate levels, and peripheral blood smear.`,
      keyTerms: [
        { term: 'MCV', definition: 'Mean Corpuscular Volume - the average size of red blood cells measured in femtoliters (fL)' },
        { term: 'Hemoglobin', definition: 'The oxygen-carrying protein in red blood cells; low levels define anemia', pronunciation: 'HEE-muh-glow-bin' },
        { term: 'Reticulocyte', definition: 'A young red blood cell just released from bone marrow', pronunciation: 're-TIK-yoo-low-site' },
        { term: 'Erythropoietin', definition: 'Hormone made by kidneys that signals bone marrow to make red blood cells', pronunciation: 'eh-rith-ro-POY-eh-tin' },
        { term: 'Peripheral blood smear', definition: 'A microscope test where blood is spread on a slide to examine cell shapes' },
        { term: 'Ferritin', definition: 'Protein that stores iron; blood levels reflect total body iron stores', pronunciation: 'FAIR-ih-tin' },
      ],
      analogies: [
        'MCV is like measuring whether your delivery trucks are compact cars, normal trucks, or oversized vehicles',
        'Reticulocyte count is like checking how many new trucks your factory is producing to replace old ones',
      ],
      examples: [
        'A 50-year-old man with colon cancer presents with microcytic anemia from chronic GI bleeding',
        'A pregnant woman develops macrocytic anemia from folate deficiency due to increased fetal demands',
        'An elderly woman with rheumatoid arthritis has normocytic anemia from chronic inflammation',
      ],
    },

    3: {
      level: 3,
      summary: 'Systematic anemia evaluation uses MCV, reticulocyte index, and peripheral smear to distinguish production defects, hemolysis, and blood loss, guiding targeted diagnostic workup.',
      explanation: `**Diagnostic Approach:**

The reticulocyte production index (RPI) distinguishes hypoproliferative (RPI <2) from hyperproliferative (RPI >2) anemia:
- RPI = (reticulocyte % × patient Hct / normal Hct) / maturation time
- Hypoproliferative: bone marrow not responding (production problem)
- Hyperproliferative: bone marrow responding appropriately (loss or destruction)

**Microcytic Anemia (MCV <80 fL):**

*Iron Deficiency Anemia:*
- Low ferritin (<30 ng/mL diagnostic), low serum iron, elevated TIBC, low transferrin saturation (<15%)
- Peripheral smear: microcytic, hypochromic cells with increased central pallor, pencil cells
- Causes: GI bleeding (ulcer, cancer, angiodysplasia), menorrhagia, malabsorption (celiac), poor intake

*Thalassemia Trait:*
- Normal/elevated RBC count despite low Hgb (contrast to IDA with low RBC count)
- Normal/mildly low ferritin, normal RDW (vs elevated RDW in IDA)
- Hemoglobin electrophoresis: elevated HbA2 (β-thalassemia) or genetic testing (α-thalassemia)
- Target cells and basophilic stippling on smear

*Anemia of Chronic Disease (sometimes microcytic):*
- Normal/elevated ferritin, low serum iron, low/normal TIBC
- Elevated inflammatory markers (CRP, ESR)
- Soluble transferrin receptor helps distinguish: normal in ACD, elevated in IDA

**Normocytic Anemia (MCV 80-100 fL):**

*Hemolytic Anemia:*
- Elevated reticulocyte count (hyperproliferative)
- Elevated indirect bilirubin, elevated LDH, low haptoglobin
- Peripheral smear: spherocytes (autoimmune), schistocytes (microangiopathic), sickle cells
- Direct Coombs test positive in autoimmune hemolytic anemia

*Aplastic Anemia:*
- Pancytopenia (low WBC, RBC, platelets)
- Low reticulocyte count (hypoproliferative)
- Bone marrow biopsy: hypocellular marrow with fatty replacement

*Anemia of Chronic Disease:*
- Functional iron deficiency with normal/elevated ferritin
- Low erythropoietin response to anemia

**Macrocytic Anemia (MCV >100 fL):**

*Megaloblastic (nuclear-cytoplasmic dyssynchrony):*
- Hypersegmented neutrophils (>5 lobes) pathognomonic
- B12 deficiency: low B12, elevated MMA and homocysteine
- Folate deficiency: low folate, elevated homocysteine, normal MMA
- Macro-ovalocytes on smear

*Non-megaloblastic:*
- Reticulocytosis (polychromasia), liver disease (target cells), hypothyroidism, alcohol

Special tests: bone marrow biopsy for unexplained anemia, hemolysis workup (Coombs, G6PD, pyruvate kinase), hemoglobin electrophoresis for hemoglobinopathies.`,
      keyTerms: [
        { term: 'Reticulocyte production index', definition: 'RPI - corrected reticulocyte count accounting for anemia severity and maturation time' },
        { term: 'Megaloblastic', definition: 'Characteristic bone marrow changes from impaired DNA synthesis causing nuclear-cytoplasmic dyssynchrony', pronunciation: 'meg-uh-loh-BLAS-tik' },
        { term: 'Hypersegmented neutrophils', definition: 'Neutrophils with ≥5 nuclear lobes, diagnostic of megaloblastic anemia' },
        { term: 'Haptoglobin', definition: 'Plasma protein that binds free hemoglobin; depleted in hemolysis', pronunciation: 'hap-toh-GLO-bin' },
        { term: 'Coombs test', definition: 'Direct antiglobulin test detecting antibodies bound to red blood cells' },
        { term: 'Transferrin saturation', definition: 'Percentage of transferrin binding sites occupied by iron: (serum iron/TIBC) × 100' },
        { term: 'Soluble transferrin receptor', definition: 'sTfR - elevated in iron deficiency but not inflammation, helps distinguish IDA from ACD' },
      ],
      clinicalNotes: 'Always investigate cause of IDA in adult men and postmenopausal women (GI malignancy). Treat B12 before folate - folate alone can improve anemia but allows neurological damage to progress. In hemolytic anemia, check for underlying cause: autoimmune (lupus), mechanical (prosthetic valve), infectious (malaria), or hereditary (G6PD deficiency).',
    },

    4: {
      level: 4,
      summary: 'Advanced anemia diagnosis integrates hepcidin-mediated iron homeostasis, bone marrow examination, molecular diagnostics, and systematic evaluation of underlying etiologies including occult malignancy and inherited disorders.',
      explanation: `**Iron Metabolism and Hepcidin:**

Hepcidin is the master iron regulator, produced by hepatocytes in response to iron stores and inflammation (IL-6). It binds and degrades ferroportin (cellular iron exporter), blocking:
- Intestinal iron absorption (duodenal enterocytes)
- Iron release from macrophages recycling senescent RBCs

In iron deficiency: hepcidin suppressed → maximal iron absorption
In inflammation/ACD: hepcidin elevated → functional iron deficiency despite adequate stores

**Microcytic Anemia Differential:**

*Iron Deficiency:*
- Stages: 1) depleted stores (↓ferritin), 2) iron-deficient erythropoiesis (↓transferrin saturation), 3) IDA (↓Hgb, ↓MCV)
- Reticulocyte hemoglobin content (CHr or Ret-He) <28 pg is early marker
- Workup: men/postmenopausal women require bidirectional endoscopy to exclude GI malignancy
- IV iron indications: malabsorption, intolerance, need for rapid correction, heart failure (FAIR-HF trials)

*Thalassemia:*
- α-thalassemia: deletion of 1-4 α-globin genes (chr 16); silent carrier (1 gene), trait (2 genes), HbH disease (3 genes), hydrops fetalis (4 genes)
- β-thalassemia: point mutations in β-globin gene (chr 11); trait (heterozygous), intermedia, major
- Mentzer index: MCV/RBC - if <13 suggests thalassemia, >13 suggests IDA (not perfectly sensitive/specific)
- No treatment needed for trait; transfusion-dependent for major

*Sideroblastic Anemia:*
- Ringed sideroblasts in marrow (iron-laden mitochondria around nucleus)
- Causes: X-linked (ALAS2 mutations), acquired (MDS), reversible (alcohol, lead, isoniazid, copper deficiency)

**Normocytic Anemia Deep Dive:**

*Hemolytic Anemia Classification:*

Extravascular (spleen/liver macrophages):
- Hereditary spherocytosis (spectrin/ankyrin defects)
- G6PD deficiency (oxidative stress triggers)
- Sickle cell disease (HbSS)
- Autoimmune hemolytic anemia (warm IgG, cold IgM/C3)

Intravascular:
- Microangiopathic (TTP, HUS, DIC, prosthetic valve)
- PNH (complement-mediated)
- Transfusion reaction

Workup: peripheral smear morphology, Coombs test, G6PD level (not during acute crisis), osmotic fragility, hemoglobin electrophoresis, flow cytometry for PNH

*Aplastic Anemia:*
- Pancytopenia with hypocellular marrow (<25% cellularity)
- Causes: idiopathic (70%), drugs (chloramphenicol, NSAIDs, gold), viral (EBV, hepatitis, parvovirus B19), Fanconi anemia
- Severity: severe (ANC <500, platelets <20K, reticulocytes <20K) vs very severe (ANC <200)
- Treatment: immunosuppression (ATG + cyclosporine) or allogeneic stem cell transplant

**Macrocytic Anemia:**

*B12 Deficiency:*
- Absorption: dietary B12 → R-binder (saliva) → IF-B12 complex (stomach) → terminal ileum cubilin receptors
- Causes: pernicious anemia (anti-IF antibodies), gastrectomy, terminal ileal disease/resection, metformin, PPIs
- Subacute combined degeneration: posterior/lateral column demyelination causing sensory ataxia, spasticity
- Diagnostic: serum B12 <200 pg/mL definite, 200-400 borderline (check MMA and homocysteine - both elevated in B12 deficiency)
- Treatment: IM cyanocobalamin 1000 mcg daily × 7d → weekly × 4wk → monthly lifelong

*Folate Deficiency:*
- Body stores last 2-4 months (vs years for B12)
- Causes: poor intake (alcoholism, elderly), malabsorption (celiac, tropical sprue), ↑demand (pregnancy, hemolysis), drugs (methotrexate, phenytoin)
- Diagnosis: low serum/RBC folate, elevated homocysteine, normal MMA (differentiates from B12)
- Neural tube defects: supplementation 400-800 mcg daily for all women of childbearing age

*Myelodysplastic Syndrome:*
- Clonal hematopoiesis with dysplasia and ineffective erythropoiesis
- May present with isolated macrocytic anemia or cytopenias
- Bone marrow shows dysplastic changes; cytogenetics/molecular testing for prognosis
- Risk of transformation to AML

**Bone Marrow Examination Indications:**
- Unexplained anemia with no clear cause
- Pancytopenia
- Suspected malignancy (leukemia, lymphoma, metastatic disease)
- Suspicion of MDS or aplastic anemia
- Persistent unexplained macrocytosis`,
      keyTerms: [
        { term: 'Ferroportin', definition: 'Cellular iron export protein on enterocytes and macrophages; degraded by hepcidin', pronunciation: 'fair-oh-POR-tin' },
        { term: 'Mentzer index', definition: 'MCV/RBC ratio - <13 suggests thalassemia trait, >13 suggests iron deficiency' },
        { term: 'Ringed sideroblasts', definition: 'Erythroid precursors with iron-laden mitochondria forming ring around nucleus' },
        { term: 'Osmotic fragility', definition: 'Test for hereditary spherocytosis measuring RBC lysis in hypotonic solution' },
        { term: 'Subacute combined degeneration', definition: 'B12 deficiency causing demyelination of posterior and lateral spinal columns' },
        { term: 'Cubilin', definition: 'Ileal receptor for intrinsic factor-B12 complex absorption' },
        { term: 'MMA', definition: 'Methylmalonic acid - elevated specifically in B12 deficiency (not folate), helps differentiate' },
        { term: 'Ineffective erythropoiesis', definition: 'Intramedullary destruction of erythroid precursors before maturation' },
      ],
      clinicalNotes: 'Transfusion threshold typically Hgb <7 g/dL in stable patients, <8 g/dL in cardiac disease (TRICC trials). IV iron in heart failure improves symptoms even without anemia (FAIR-HF). Monitor potassium during B12/folate repletion - rapid erythropoiesis causes hypokalemia. Bone marrow exam if unexplained anemia persists despite workup. Consider PNH in Coombs-negative intravascular hemolysis.',
    },

    5: {
      level: 5,
      summary: 'Expert anemia management requires understanding genetic diagnostics for hemoglobinopathies, hereditary anemias, and MDS; recognizing rare causes; and individualizing treatment based on molecular mechanisms and patient-specific factors.',
      explanation: `**Advanced Diagnostics and Molecular Mechanisms:**

*Iron Disorders:*
- IRIDA (iron-refractory iron deficiency anemia): TMPRSS6 mutations causing constitutively elevated hepcidin → poor oral iron response, requires IV iron
- Hemochromatosis screening in unexplained elevated ferritin: HFE C282Y/H63D mutations, check transferrin saturation
- Anemia of inflammation molecular pathway: IL-6 → hepcidin via STAT3 and BMP/SMAD signaling
- Functional iron deficiency assessment: sTfR/log ferritin index >2 suggests true IDA even with elevated ferritin

*Thalassemia Genetics and Management:*
- α-thalassemia: genotyping for deletions (-α, --); HbH disease needs monitoring, avoid oxidant stress
- β-thalassemia: >200 known mutations; compound heterozygotes have variable severity
- Thalassemia major: transfusion every 2-3 weeks + iron chelation (deferasirox, deferoxamine)
- Luspatercept (activin receptor fusion protein) FDA-approved for β-thalassemia, reduces transfusion burden
- Allogeneic transplant curative but high risk; gene therapy emerging

*Sickle Cell Disease Molecular Therapies:*
- HbSS: Glu6Val substitution in β-globin → polymerization under deoxygenation
- Hydroxyurea: ↑HbF (fetal hemoglobin), reduces VOC frequency
- L-glutamine: reduces oxidative stress
- Crizanlizumab: P-selectin inhibitor reducing vaso-occlusion
- Voxelotor: increases Hb oxygen affinity, prevents sickling
- Gene therapy (Casgevy - CRISPR/Cas9, Lyfgenia - lentiviral): curative approaches

*Hemolytic Anemia Molecular Diagnosis:*
- Hereditary spherocytosis: spectrin (SPTA1/SPTB), ankyrin (ANK1), band 3 (SLC4A1), protein 4.2 (EPB42) mutations
- G6PD deficiency: X-linked; >400 variants; A- variant (10% residual activity) in African ancestry, Mediterranean variant (<10% activity)
- Pyruvate kinase deficiency: PKLR mutations; chronic hemolysis, may need splenectomy
- PNH: somatic PIGA mutations → GPI-anchor deficiency → complement-mediated lysis; flow cytometry CD55/CD59; treat with complement inhibitors (eculizumab, ravulizumab)

*Aplastic Anemia Advanced Management:*
- Telomere length testing: short telomeres suggest inherited bone marrow failure (dyskeratosis congenita, telomeropathies)
- Fanconi anemia: DEB test (chromosomal breakage), genetic panel; high cancer risk
- Immunosuppressive therapy: horse ATG (better than rabbit) + cyclosporine; response 60-70% at 6 months
- Eltrombopag: thrombopoietin mimetic with multilineage response in refractory aplastic anemia
- Allogeneic transplant: curative; matched sibling donor preferred; reduced-intensity conditioning in older patients

*Megaloblastic Anemia Rare Causes:*
- Hereditary folate malabsorption: SLC46A1 (PCFT) mutations; presents in infancy with megaloblastic anemia + seizures; needs parenteral folinic acid
- Cerebral folate deficiency: anti-folate receptor autoantibodies or FOLR1 mutations; low CSF folate with normal serum folate
- Transcobalamin II deficiency: normal B12 levels but functional deficiency; presents in infancy
- Imerslund-Grasbeck syndrome: cubilin (CUBN) or amnionless (AMN) mutations; selective B12 malabsorption ± proteinuria
- Dihydrofolate reductase deficiency: requires folinic acid (bypasses DHFR blockade)

*Myelodysplastic Syndrome Stratification:*
- IPSS-R scoring: cytogenetics, cytopenias, blast % → risk stratification
- Molecular profiling: TP53 (poor prognosis), SF3B1 (ring sideroblasts, good prognosis), spliceosome mutations
- Lower-risk MDS: ESA (erythropoiesis-stimulating agents) + luspatercept if ring sideroblasts
- Higher-risk MDS: hypomethylating agents (azacitidine, decitabine), allogeneic transplant if eligible
- Isolated del(5q): lenalidomide highly effective

**Anemia in Special Populations:**

*Chronic Kidney Disease:*
- EPO deficiency: initiate ESA when Hgb <10 g/dL if symptomatic
- Target Hgb 10-11.5 g/dL (TREAT trial: higher targets increased stroke/thrombosis)
- Iron status: maintain TSAT >20%, ferritin >100 ng/mL; IV iron preferred (PIVOTAL trial)
- HIF-PHI (hypoxia-inducible factor prolyl hydroxylase inhibitors): roxadustat, vadadustat - emerging oral alternatives to ESAs

*Heart Failure:*
- Iron deficiency (TSAT <20% or ferritin <100 ng/mL) in 30-50% of HF patients
- IV iron improves functional capacity and QOL even without anemia (FAIR-HF, AFFIRM-AHF, IRON-MAN trials)
- Ferric carboxymaltose or ferric derisomaltose preferred

*Cancer-Related Anemia:*
- Multifactorial: bone marrow infiltration, chemotherapy, nutritional deficiencies, EPO deficiency, inflammation
- ESAs controversial: may promote tumor growth in some cancers (ovarian, breast, head/neck)
- Transfusion threshold Hgb <7 g/dL unless symptomatic
- Correct iron, B12, folate deficiencies first

*Pregnancy:*
- Physiologic dilutional anemia: ↑plasma volume > ↑RBC mass
- Screen at first prenatal visit and 24-28 weeks
- Iron supplementation: 30-60 mg elemental iron daily for prophylaxis, 100-200 mg for treatment
- Folate: 400-800 mcg daily for all; 4 mg if prior neural tube defect

**Transfusion Medicine:**
- Restrictive strategy (Hgb <7 g/dL) non-inferior to liberal (Hgb <10 g/dL) in most settings (TRICC, TRISS trials)
- Exception: acute coronary syndrome (consider transfusion if Hgb <8 g/dL)
- Leukoreduction reduces febrile reactions, CMV transmission
- Irradiation prevents transfusion-associated GVHD in immunocompromised
- Washed RBCs for IgA deficiency or severe allergic reactions

**Emerging Therapies:**
- Gene therapy for hemoglobinopathies (SCD, thalassemia): CRISPR-based (Casgevy), lentiviral (Zynteglo, Lyfgenia)
- Mitapivat: pyruvate kinase activator for PK deficiency and thalassemia
- FTX-6058: anti-sickling agent in development
- Imetelstat: telomerase inhibitor for lower-risk MDS
- Next-generation complement inhibitors for PNH: iptacopan (factor B inhibitor), oral agent`,
      keyTerms: [
        { term: 'IRIDA', definition: 'Iron-refractory iron deficiency anemia due to TMPRSS6 mutations causing elevated hepcidin despite iron deficiency' },
        { term: 'Luspatercept', definition: 'Activin receptor IIB ligand trap promoting late-stage erythroid maturation; FDA-approved for β-thalassemia and MDS' },
        { term: 'Voxelotor', definition: 'HbS polymerization inhibitor increasing hemoglobin oxygen affinity in sickle cell disease' },
        { term: 'PIGA', definition: 'Phosphatidylinositol glycan class A gene; somatic mutations cause PNH via GPI-anchor deficiency' },
        { term: 'DEB test', definition: 'Diepoxybutane-induced chromosomal breakage test diagnostic for Fanconi anemia' },
        { term: 'IPSS-R', definition: 'Revised International Prognostic Scoring System for MDS risk stratification' },
        { term: 'HIF-PHI', definition: 'Hypoxia-inducible factor prolyl hydroxylase inhibitors - oral agents stimulating endogenous EPO' },
        { term: 'Ferric derisomaltose', definition: 'High-molecular-weight IV iron preparation allowing large single-dose infusion with low immunogenicity' },
      ],
      clinicalNotes: 'Consider genetic testing in unexplained hemolytic anemia, early-onset anemia, family history, or ethnic predisposition. Bone marrow with flow cytometry, cytogenetics, and molecular testing for pancytopenia or refractory anemia. IV iron caution with ferric carboxymaltose: can cause hypophosphatemia via FGF23 ↑. In refractory IDA with normal GI workup, consider capsule endoscopy, urine hemosiderin (intravascular hemolysis), celiac serology. Avoid transfusions in sickle cell crisis unless <5 g/dL or symptomatic - increases viscosity. Exchange transfusion for stroke, ACS. Monitor iron overload with ferritin and hepatic MRI in chronically transfused patients.',
    },
  },

  media: [],
  citations: [
    {
      id: 'camaschella-2019',
      type: 'article',
      title: 'Iron deficiency',
      authors: ['Camaschella C'],
      source: 'Blood',
      url: 'https://doi.org/10.1182/blood-2018-05-815944',
      accessedDate: '2026-01-30',
    },
    {
      id: 'tefferi-2023',
      type: 'article',
      title: 'Anemia in adults: a contemporary approach to diagnosis',
      authors: ['Tefferi A', 'Hanson CA', 'Inwards DJ'],
      source: 'Mayo Clin Proc',
      url: 'https://doi.org/10.1016/j.mayocp.2023.02.025',
      accessedDate: '2026-01-30',
    },
  ],
  crossReferences: [
    { targetId: 'hematology-iron-deficiency-anemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'hematology-b12-folate-deficiency', targetType: 'condition', relationship: 'child' },
    { targetId: 'hematology-hemolytic-anemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'hematology-aplastic-anemia', targetType: 'condition', relationship: 'child' },
    { targetId: 'hematology-sickle-cell-disease', targetType: 'condition', relationship: 'child' },
    { targetId: 'hematology-thalassemia', targetType: 'condition', relationship: 'child' },
  ],
  tags: {
    systems: ['hematology'],
    topics: ['anemia', 'classification', 'microcytic', 'normocytic', 'macrocytic', 'hemolysis', 'iron deficiency', 'B12', 'folate'],
    keywords: ['anemia', 'MCV', 'hemoglobin', 'iron', 'B12', 'folate', 'hemolysis', 'aplastic', 'sickle cell', 'thalassemia'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};

/**
 * Spanish translations for key terms and summaries
 * Provides accessible education for Spanish-speaking patients
 */
export const anemiaOverviewSpanish = {
  name: 'Clasificación y Descripción General de la Anemia',
  level1Summary: 'La anemia significa que no tienes suficientes glóbulos rojos sanos para transportar oxígeno por tu cuerpo, lo que te hace sentir cansado y débil.',
  level2Summary: 'La anemia se clasifica por el tamaño de los glóbulos rojos (VCM) en categorías microcítica, normocítica y macrocítica, cada una con causas distintas que requieren diferentes enfoques diagnósticos y tratamientos.',
  keyTerms: {
    'Anemia': 'Una condición donde no tienes suficientes glóbulos rojos sanos para transportar oxígeno',
    'Red blood cells': 'Glóbulos rojos - células diminutas en forma de disco que transportan oxígeno por todo tu cuerpo',
    'Hemoglobin': 'Hemoglobina - la proteína en los glóbulos rojos que sostiene el oxígeno',
    'Iron': 'Hierro - un mineral que tu cuerpo necesita para producir hemoglobina',
    'Ferritin': 'Ferritina - proteína que almacena hierro en el cuerpo',
    'MCV': 'VCM (Volumen Corpuscular Medio) - el tamaño promedio de los glóbulos rojos',
  },
  patientCounselingPoints: [
    'La anemia es muy común y generalmente tratable',
    'El tratamiento depende de identificar qué tipo de anemia tienes',
    'Comer una dieta equilibrada con alimentos ricos en hierro (carne, frijoles, vegetales de hojas verdes) y vitaminas puede ayudar a prevenir algunos tipos de anemia',
    'Siempre dile a tu médico si te sientes inusualmente cansado o tienes otros síntomas - la anemia se diagnostica con un simple análisis de sangre',
  ],
};
