/**
 * Oncology Conditions Database
 *
 * Comprehensive reference of major oncology conditions with
 * clinical summaries, patient education, and bilingual support.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type OncologyCategory =
  | 'solid-tumor'
  | 'hematologic';

export interface OncologyConditionEntry {
  id: string;
  name: string;
  nameEs: string;
  category: OncologyCategory;
  icd11: string;
  description: string;
  descriptionEs: string;
  riskFactors: string[];
  pathophysiology: string;
  pathophysiologyEs: string;
  symptoms: string[];
  diagnostics: {
    tests: string[];
    imaging: string[];
    criteria: string[];
  };
  treatment: {
    medications: string[];
    procedures: string[];
    lifestyle: string[];
  };
  emergencySigns: string[];
  patientExplanation: string;
  patientExplanationEs: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function onc(
  id: string, name: string, nameEs: string,
  category: OncologyCategory, icd11: string,
  description: string, descriptionEs: string,
  riskFactors: string[],
  pathophysiology: string, pathophysiologyEs: string,
  symptoms: string[],
  diagnostics: { tests: string[]; imaging: string[]; criteria: string[] },
  treatment: { medications: string[]; procedures: string[]; lifestyle: string[] },
  emergencySigns: string[],
  patientExplanation: string, patientExplanationEs: string,
): OncologyConditionEntry {
  return {
    id, name, nameEs, category, icd11, description, descriptionEs,
    riskFactors, pathophysiology, pathophysiologyEs, symptoms,
    diagnostics, treatment, emergencySigns, patientExplanation, patientExplanationEs,
  };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ONCOLOGY_CONDITIONS: Record<string, OncologyConditionEntry> = {

  'breast-cancer': onc(
    'breast-cancer', 'Breast Cancer', 'Cáncer de mama',
    'solid-tumor', '2C60',
    'Malignant tumor arising from breast tissue, most commonly ductal or lobular in origin. The most common cancer in women worldwide.',
    'Tumor maligno que surge del tejido mamario, más comúnmente de origen ductal o lobular. El cáncer más común en mujeres en todo el mundo.',
    ['Female sex', 'Advancing age (>50 years)', 'BRCA1/BRCA2 mutations', 'Family history of breast/ovarian cancer', 'Early menarche or late menopause', 'Nulliparity or first pregnancy after age 30', 'Hormone replacement therapy', 'Obesity', 'Alcohol consumption', 'Prior chest radiation'],
    'Malignant transformation occurs in ductal or lobular epithelium due to genetic mutations (e.g., BRCA, TP53, HER2 amplification). Tumor cells proliferate uncontrollably, invade local tissue, and may metastasize via lymphatics or bloodstream to distant organs (bone, liver, lung, brain). Hormone receptor (ER/PR) and HER2 status guide targeted therapy.',
    'La transformación maligna ocurre en el epitelio ductal o lobular debido a mutaciones genéticas (ej., BRCA, TP53, amplificación HER2). Las células tumorales proliferan sin control, invaden tejido local y pueden metastatizar vía linfática o sanguínea a órganos distantes (hueso, hígado, pulmón, cerebro). El estado de receptores hormonales (ER/PR) y HER2 guía la terapia dirigida.',
    ['Painless breast lump or mass', 'Breast skin changes (dimpling, peau d\'orange, erythema)', 'Nipple retraction or discharge (especially bloody)', 'Asymmetry or change in breast size/shape', 'Axillary lymphadenopathy', 'Advanced disease: bone pain, dyspnea, jaundice'],
    {
      tests: ['Diagnostic mammography', 'Breast ultrasound', 'Core needle biopsy with histology', 'Immunohistochemistry (ER, PR, HER2, Ki-67)', 'Genetic testing (BRCA1/2 if indicated)', 'Tumor markers (CA 15-3, CA 27-29—for monitoring, not diagnosis)'],
      imaging: ['Bilateral mammography', 'Breast MRI (high-risk screening or extent assessment)', 'CT chest/abdomen/pelvis (staging)', 'Bone scan or PET-CT (if metastatic disease suspected)', 'Brain MRI (if neurologic symptoms)'],
      criteria: ['TNM staging system', 'Histologic type (ductal, lobular, etc.)', 'Grade (1-3)', 'Receptor status: ER, PR, HER2', 'Lymph node involvement', 'Distant metastases'],
    },
    {
      medications: ['Chemotherapy (AC-T, TC, dose-dense regimens)', 'Endocrine therapy: tamoxifen (premenopausal), aromatase inhibitors (postmenopausal)', 'HER2-targeted: trastuzumab, pertuzumab', 'CDK4/6 inhibitors: palbociclib, ribociclib (ER+ metastatic)', 'Immunotherapy: pembrolizumab (PD-L1+ triple-negative)'],
      procedures: ['Breast-conserving surgery (lumpectomy) + radiation', 'Mastectomy (simple, modified radical, or skin-sparing)', 'Sentinel lymph node biopsy or axillary dissection', 'Radiation therapy (adjuvant or neoadjuvant)', 'Reconstructive surgery (immediate or delayed)'],
      lifestyle: ['Maintain healthy weight (BMI <25)', 'Regular exercise (150+ min/week)', 'Limit alcohol to <1 drink/day', 'Smoking cessation', 'Adherence to endocrine therapy (5-10 years)', 'Emotional support and counseling'],
    },
    ['New severe bone pain or fractures', 'Persistent headache, vision changes, or seizures (brain metastases)', 'Severe shortness of breath or cough (lung metastases)', 'Jaundice or abdominal swelling (liver metastases)', 'Hypercalcemia symptoms (confusion, nausea, constipation)'],
    'Breast cancer begins when cells in the breast tissue start growing out of control, forming a lump or tumor. Not all breast lumps are cancer, but any new lump should be checked by a doctor. Treatment depends on the type and stage of cancer—many early-stage breast cancers are highly treatable with surgery, radiation, and medications. Some breast cancers are driven by hormones (estrogen or progesterone), and others by a protein called HER2; knowing this helps doctors choose the best treatment. Regular mammograms and self-exams are important for early detection.',
    'El cáncer de mama comienza cuando las células del tejido mamario empiezan a crecer sin control, formando una masa o tumor. No todas las masas mamarias son cáncer, pero cualquier masa nueva debe ser evaluada por un médico. El tratamiento depende del tipo y estadio del cáncer—muchos cánceres de mama en etapa temprana son altamente tratables con cirugía, radiación y medicamentos. Algunos cánceres de mama son impulsados por hormonas (estrógeno o progesterona), y otros por una proteína llamada HER2; conocer esto ayuda a los médicos a elegir el mejor tratamiento. Las mamografías regulares y los autoexámenes son importantes para la detección temprana.',
  ),

  'lung-cancer-nsclc': onc(
    'lung-cancer-nsclc', 'Lung Cancer (Non-Small Cell)', 'Cáncer de pulmón (células no pequeñas)',
    'solid-tumor', '2C25',
    'Malignant tumor of the lung, accounting for 85% of lung cancers. Includes adenocarcinoma, squamous cell, and large cell subtypes.',
    'Tumor maligno del pulmón, representa el 85% de los cánceres de pulmón. Incluye adenocarcinoma, células escamosas y subtipos de células grandes.',
    ['Tobacco smoking (leading cause—85-90%)', 'Secondhand smoke exposure', 'Radon exposure', 'Asbestos or occupational carcinogens', 'Family history of lung cancer', 'Prior radiation therapy', 'COPD or pulmonary fibrosis', 'Air pollution'],
    'Carcinogenic exposure causes DNA damage and mutations in bronchial epithelium (e.g., EGFR, ALK, KRAS, PD-L1). Malignant cells proliferate, invade local structures (pleura, chest wall, mediastinum), and metastasize to lymph nodes, brain, bone, liver, and adrenal glands. Adenocarcinoma is the most common subtype and often peripheral; squamous cell is central and associated with smoking.',
    'La exposición carcinogénica causa daño al ADN y mutaciones en el epitelio bronquial (ej., EGFR, ALK, KRAS, PD-L1). Las células malignas proliferan, invaden estructuras locales (pleura, pared torácica, mediastino) y metastatizan a ganglios linfáticos, cerebro, hueso, hígado y glándulas suprarrenales. El adenocarcinoma es el subtipo más común y frecuentemente periférico; células escamosas son centrales y asociadas con tabaquismo.',
    ['Persistent cough or change in chronic cough', 'Hemoptysis (coughing up blood)', 'Dyspnea and chest pain', 'Hoarseness (recurrent laryngeal nerve involvement)', 'Weight loss and fatigue', 'Recurrent pneumonia or bronchitis', 'Superior vena cava syndrome (facial swelling, dyspnea)', 'Horner syndrome (ptosis, miosis, anhidrosis)'],
    {
      tests: ['Low-dose CT chest (screening in high-risk patients)', 'Sputum cytology', 'Bronchoscopy with biopsy', 'CT-guided needle biopsy', 'Molecular testing (EGFR, ALK, ROS1, BRAF, PD-L1)', 'Mediastinoscopy or EBUS for lymph node staging'],
      imaging: ['CT chest with contrast', 'PET-CT (staging and metastasis detection)', 'Brain MRI (all patients—high risk of brain metastases)', 'Bone scan if symptoms or elevated alkaline phosphatase'],
      criteria: ['TNM staging (IA-IVB)', 'Histologic subtype (adenocarcinoma, squamous, large cell)', 'Molecular markers (EGFR, ALK, ROS1, BRAF, KRAS, PD-L1 expression)', 'Performance status (ECOG 0-4)', 'Resectability assessment'],
    },
    {
      medications: ['Chemotherapy: platinum doublets (cisplatin/carboplatin + pemetrexed or paclitaxel)', 'Targeted therapy: EGFR inhibitors (erlotinib, osimertinib), ALK inhibitors (crizotinib, alectinib)', 'Immunotherapy: pembrolizumab, nivolumab, atezolizumab (PD-1/PD-L1 inhibitors)', 'Bevacizumab (anti-VEGF, non-squamous only)', 'Adjuvant therapy post-surgery in resectable disease'],
      procedures: ['Surgical resection: lobectomy, pneumonectomy (early-stage disease)', 'Video-assisted thoracoscopic surgery (VATS)', 'Stereotactic body radiotherapy (SBRT) for inoperable early-stage', 'Definitive chemoradiation for locally advanced disease', 'Palliative radiation for bone metastases or SVC syndrome'],
      lifestyle: ['Smoking cessation (mandatory—improves outcomes even after diagnosis)', 'Pulmonary rehabilitation', 'Nutritional support (high protein for cachexia)', 'Pain management and palliative care referral', 'Oxygen therapy if hypoxemic', 'Psychosocial support and advance care planning'],
    },
    ['Massive hemoptysis', 'Sudden severe dyspnea or chest pain (pneumothorax, PE)', 'Facial/upper extremity swelling with dyspnea (SVC syndrome)', 'New neurologic deficits or severe headache (brain metastases)', 'Spinal cord compression symptoms (back pain, weakness, bowel/bladder dysfunction)', 'Hypercalcemia (confusion, severe nausea)'],
    'Non-small cell lung cancer (NSCLC) is the most common type of lung cancer, usually linked to smoking but can also occur in non-smokers. Early stages may have no symptoms, which is why screening with low-dose CT is recommended for high-risk individuals. Symptoms like persistent cough, coughing up blood, or unexplained weight loss should prompt evaluation. Treatment depends on the stage and may include surgery, radiation, chemotherapy, targeted therapy (if specific mutations are found), or immunotherapy. Quitting smoking is the single most important step you can take, even after diagnosis—it improves treatment effectiveness and quality of life.',
    'El cáncer de pulmón de células no pequeñas (NSCLC) es el tipo más común de cáncer de pulmón, usualmente vinculado al tabaquismo pero también puede ocurrir en no fumadores. Las etapas tempranas pueden no tener síntomas, por eso se recomienda tamizaje con CT de baja dosis para individuos de alto riesgo. Síntomas como tos persistente, toser sangre o pérdida de peso inexplicable deben ser evaluados. El tratamiento depende del estadio y puede incluir cirugía, radiación, quimioterapia, terapia dirigida (si se encuentran mutaciones específicas) o inmunoterapia. Dejar de fumar es el paso más importante que puede tomar, incluso después del diagnóstico—mejora la efectividad del tratamiento y calidad de vida.',
  ),

  'colorectal-cancer': onc(
    'colorectal-cancer', 'Colorectal Cancer', 'Cáncer colorrectal',
    'solid-tumor', '2B90',
    'Malignant tumor arising from the colon or rectum, typically from adenomatous polyps. Third most common cancer worldwide.',
    'Tumor maligno que surge del colon o recto, típicamente de pólipos adenomatosos. Tercer cáncer más común a nivel mundial.',
    ['Age >50 years', 'Inflammatory bowel disease (Crohn\'s, ulcerative colitis)', 'Family history or hereditary syndromes (Lynch syndrome, FAP)', 'Personal history of polyps', 'Diet high in red/processed meat and low in fiber', 'Obesity and physical inactivity', 'Smoking and heavy alcohol use', 'Type 2 diabetes'],
    'Colorectal cancer develops through the adenoma-carcinoma sequence over years. Genetic mutations (APC, KRAS, TP53) accumulate, transforming normal mucosa into adenomatous polyps, then invasive carcinoma. Tumor cells invade through bowel wall layers, spread to regional lymph nodes, and metastasize hematogenously to liver (most common site), lungs, and peritoneum. Microsatellite instability (MSI) and KRAS/BRAF status guide treatment.',
    'El cáncer colorrectal se desarrolla a través de la secuencia adenoma-carcinoma durante años. Mutaciones genéticas (APC, KRAS, TP53) se acumulan, transformando mucosa normal en pólipos adenomatosos, luego carcinoma invasivo. Las células tumorales invaden capas de la pared intestinal, se propagan a ganglios linfáticos regionales y metastatizan hematógenamente al hígado (sitio más común), pulmones y peritoneo. Inestabilidad de microsatélites (MSI) y estado KRAS/BRAF guían el tratamiento.',
    ['Change in bowel habits (diarrhea, constipation, or narrowing of stool)', 'Rectal bleeding or blood in stool (bright red or dark/tarry)', 'Abdominal pain or cramping', 'Unexplained weight loss and fatigue', 'Iron-deficiency anemia', 'Feeling of incomplete evacuation', 'Advanced disease: bowel obstruction, jaundice (liver mets)'],
    {
      tests: ['Colonoscopy with biopsy (diagnostic and therapeutic)', 'Fecal occult blood test (FOBT) or FIT (screening)', 'CEA (carcinoembryonic antigen—monitoring, not diagnostic)', 'Complete blood count (anemia)', 'Comprehensive metabolic panel', 'Molecular testing (MSI/MMR, KRAS, NRAS, BRAF)'],
      imaging: ['CT chest/abdomen/pelvis with contrast (staging)', 'MRI pelvis (for rectal cancer—assess local invasion)', 'PET-CT (if metastatic disease or equivocal findings)', 'Endorectal ultrasound (rectal cancer staging)'],
      criteria: ['TNM staging (I-IV)', 'Histologic grade', 'Microsatellite instability status (MSI-H vs MSS)', 'KRAS, NRAS, BRAF mutation status', 'Location (right-sided vs left-sided—prognostic)', 'Resectability and lymph node involvement'],
    },
    {
      medications: ['Chemotherapy: FOLFOX (5-FU, leucovorin, oxaliplatin), FOLFIRI (5-FU, leucovorin, irinotecan)', 'Targeted therapy: bevacizumab (anti-VEGF), cetuximab or panitumumab (anti-EGFR, KRAS/NRAS wild-type only)', 'Immunotherapy: pembrolizumab, nivolumab (MSI-H/dMMR tumors)', 'Adjuvant chemotherapy for stage III and high-risk stage II', 'Capecitabine (oral 5-FU) in some regimens'],
      procedures: ['Surgical resection: colectomy (right, left, or sigmoid) or proctectomy', 'Polypectomy during colonoscopy (early lesions)', 'Laparoscopic or robotic-assisted surgery', 'Neoadjuvant chemoradiation for rectal cancer (stage II-III)', 'Liver resection or ablation for isolated liver metastases', 'Diverting colostomy or ileostomy (temporary or permanent)'],
      lifestyle: ['High-fiber diet rich in fruits, vegetables, whole grains', 'Limit red meat (<500g/week) and avoid processed meats', 'Maintain healthy weight and exercise regularly (150+ min/week)', 'Limit alcohol consumption', 'Smoking cessation', 'Surveillance colonoscopy per guidelines', 'Manage ostomy care if applicable'],
    },
    ['Complete bowel obstruction (severe abdominal pain, distension, no stool/gas)', 'Perforation (sudden severe abdominal pain, peritonitis)', 'Massive GI bleeding', 'Severe anemia with syncope or chest pain', 'Jaundice with abdominal pain (biliary obstruction from liver mets)', 'New neurologic symptoms (brain metastases rare but possible)'],
    'Colorectal cancer usually starts as a polyp (small growth) in the colon or rectum. Over many years, some polyps can turn into cancer. This is why screening colonoscopies are so important—they can find and remove polyps before they become cancer. Symptoms like blood in stool, change in bowel habits, or unexplained weight loss should prompt evaluation. Treatment often involves surgery to remove the tumor, sometimes combined with chemotherapy or radiation. The good news is that when caught early (before spreading beyond the colon), colorectal cancer is highly curable. After treatment, regular surveillance colonoscopies are essential to catch any recurrence early.',
    'El cáncer colorrectal usualmente comienza como un pólipo (pequeño crecimiento) en el colon o recto. Durante muchos años, algunos pólipos pueden convertirse en cáncer. Por eso las colonoscopias de tamizaje son tan importantes—pueden encontrar y remover pólipos antes de que se vuelvan cáncer. Síntomas como sangre en heces, cambio en hábitos intestinales o pérdida de peso inexplicable deben evaluarse. El tratamiento frecuentemente involucra cirugía para remover el tumor, a veces combinada con quimioterapia o radiación. La buena noticia es que cuando se detecta temprano (antes de propagarse más allá del colon), el cáncer colorrectal es altamente curable. Después del tratamiento, colonoscopias de vigilancia regulares son esenciales para detectar cualquier recurrencia tempranamente.',
  ),

  'prostate-cancer': onc(
    'prostate-cancer', 'Prostate Cancer', 'Cáncer de próstata',
    'solid-tumor', '2C82',
    'Malignant tumor of the prostate gland, most commonly adenocarcinoma. The most common cancer in men (excluding skin cancer).',
    'Tumor maligno de la glándula prostática, más comúnmente adenocarcinoma. El cáncer más común en hombres (excluyendo cáncer de piel).',
    ['Advancing age (>65 years)', 'African American race', 'Family history of prostate cancer', 'Germline mutations (BRCA1/2, Lynch syndrome)', 'Obesity', 'Diet high in dairy and calcium', 'Agent Orange exposure'],
    'Prostate cancer develops from glandular epithelium, most commonly in the peripheral zone. Genetic alterations (TMPRSS2-ERG fusion, PTEN loss, TP53) drive malignant transformation. Tumors are often multifocal and slow-growing but can be locally invasive and metastasize to pelvic lymph nodes and bone (osteoblastic lesions). Gleason score reflects histologic grade and correlates with prognosis.',
    'El cáncer de próstata se desarrolla del epitelio glandular, más comúnmente en la zona periférica. Alteraciones genéticas (fusión TMPRSS2-ERG, pérdida PTEN, TP53) impulsan transformación maligna. Los tumores frecuentemente son multifocales y de crecimiento lento pero pueden ser localmente invasivos y metastatizar a ganglios linfáticos pélvicos y hueso (lesiones osteoblásticas). El puntaje de Gleason refleja grado histológico y se correlaciona con pronóstico.',
    ['Often asymptomatic (detected by PSA screening)', 'Urinary symptoms: frequency, urgency, weak stream, nocturia', 'Hematuria or hematospermia', 'Erectile dysfunction', 'Advanced disease: bone pain (back, hips, ribs)', 'Spinal cord compression (back pain, lower extremity weakness)', 'Weight loss and fatigue'],
    {
      tests: ['PSA (prostate-specific antigen) testing', 'Digital rectal exam (DRE)', 'Transrectal ultrasound-guided biopsy (TRUS biopsy) or MRI-fusion biopsy', 'Gleason score (grade groups 1-5)', 'Genomic tests (Oncotype DX, Decipher, Prolaris—risk stratification)', 'Germline testing (BRCA1/2, ATM, PALB2) if high-risk or metastatic'],
      imaging: ['Multiparametric MRI prostate (before biopsy or for active surveillance)', 'CT abdomen/pelvis (staging if high-risk)', 'Bone scan (if high-risk or symptomatic)', 'PSMA PET-CT (recurrent or metastatic disease)', 'Chest X-ray or CT chest'],
      criteria: ['TNM staging (T1-T4, N0-N1, M0-M1)', 'Gleason score/Grade Group (1-5)', 'PSA level', 'Risk stratification: low, intermediate, high, very high risk', 'Metastatic vs localized disease', 'Castration-sensitive vs castration-resistant'],
    },
    {
      medications: ['Androgen deprivation therapy (ADT): GnRH agonists (leuprolide, goserelin) or antagonists (degarelix)', 'Androgen receptor inhibitors: abiraterone, enzalutamide, apalutamide, darolutamide', 'Chemotherapy: docetaxel, cabazitaxel (metastatic castration-resistant)', 'Radium-223 (bone metastases)', 'PARP inhibitors: olaparib, rucaparib (BRCA-mutated metastatic disease)', 'Immunotherapy: sipuleucel-T (metastatic castration-resistant)'],
      procedures: ['Radical prostatectomy (open, laparoscopic, or robotic)', 'Active surveillance (PSA monitoring, periodic MRI/biopsy for low-risk)', 'External beam radiation therapy (EBRT) or brachytherapy', 'Pelvic lymph node dissection if high-risk', 'Salvage radiation or surgery for recurrent disease', 'Orchiectomy (surgical castration—rarely used)'],
      lifestyle: ['Healthy diet rich in vegetables, tomatoes (lycopene), fish', 'Regular exercise (reduces fatigue, preserves muscle mass on ADT)', 'Weight management', 'Bone health: calcium, vitamin D, bisphosphonates or denosumab if on ADT', 'Sexual health counseling and ED management', 'Mental health support (depression common with ADT)'],
    },
    ['Sudden severe back pain with leg weakness or numbness (spinal cord compression—emergency)', 'Inability to urinate (urinary retention)', 'Severe bone pain or pathologic fracture', 'Signs of hypercalcemia (confusion, nausea, constipation)', 'Sudden neurologic changes', 'Hematuria with clots causing obstruction'],
    'Prostate cancer is the most common cancer in men and usually grows slowly. Many men with low-risk prostate cancer can be monitored closely with active surveillance rather than immediate treatment. PSA (a blood test) and digital rectal exam are used for early detection. Treatment options include surgery, radiation, hormone therapy, and for advanced disease, chemotherapy or newer targeted therapies. Hormone therapy (ADT) works by lowering testosterone, which prostate cancer needs to grow, but can cause side effects like hot flashes, fatigue, and bone loss. Regular exercise and a healthy diet can help manage side effects and improve quality of life.',
    'El cáncer de próstata es el cáncer más común en hombres y usualmente crece lentamente. Muchos hombres con cáncer de próstata de bajo riesgo pueden ser monitoreados cercanamente con vigilancia activa en lugar de tratamiento inmediato. PSA (un análisis de sangre) y examen rectal digital se usan para detección temprana. Las opciones de tratamiento incluyen cirugía, radiación, terapia hormonal y para enfermedad avanzada, quimioterapia o terapias dirigidas más nuevas. La terapia hormonal (ADT) funciona bajando la testosterona, que el cáncer de próstata necesita para crecer, pero puede causar efectos secundarios como bochornos, fatiga y pérdida ósea. El ejercicio regular y una dieta saludable pueden ayudar a manejar efectos secundarios y mejorar calidad de vida.',
  ),

  'all-leukemia': onc(
    'all-leukemia', 'Leukemia (Acute Lymphoblastic)', 'Leucemia (linfoblástica aguda)',
    'hematologic', '2A60',
    'Aggressive malignancy of lymphoid progenitor cells in bone marrow and blood. Most common childhood cancer but also affects adults.',
    'Malignidad agresiva de células progenitoras linfoides en médula ósea y sangre. Cáncer infantil más común pero también afecta adultos.',
    ['Age (<5 years and >50 years—bimodal)', 'Prior chemotherapy or radiation', 'Genetic syndromes (Down syndrome, ataxia-telangiectasia)', 'Ionizing radiation exposure', 'Certain viral infections (HTLV-1)', 'Philadelphia chromosome (BCR-ABL1) in adults'],
    'Malignant transformation of lymphoid progenitors (B-cell or T-cell lineage) leads to uncontrolled proliferation of immature lymphoblasts in bone marrow. Blasts replace normal hematopoietic cells, causing cytopenias. Circulating blasts infiltrate blood, lymph nodes, spleen, liver, CNS, and testes. Chromosomal abnormalities (e.g., Philadelphia chromosome, MLL rearrangements) influence prognosis and guide therapy.',
    'La transformación maligna de progenitores linfoides (linaje células B o T) lleva a proliferación descontrolada de linfoblastos inmaduros en médula ósea. Los blastos reemplazan células hematopoyéticas normales, causando citopenias. Los blastos circulantes infiltran sangre, ganglios linfáticos, bazo, hígado, SNC y testículos. Anormalidades cromosómicas (ej., cromosoma Filadelfia, reordenamientos MLL) influencian pronóstico y guían terapia.',
    ['Fatigue, weakness, pallor (anemia)', 'Easy bruising, petechiae, bleeding (thrombocytopenia)', 'Fever and recurrent infections (neutropenia)', 'Bone and joint pain (especially children)', 'Lymphadenopathy and hepatosplenomegaly', 'CNS involvement: headache, cranial nerve palsies, altered mental status', 'Testicular swelling (extramedullary disease)'],
    {
      tests: ['Complete blood count with differential (leukocytosis, anemia, thrombocytopenia)', 'Peripheral blood smear (lymphoblasts)', 'Bone marrow aspiration and biopsy (≥20% blasts for diagnosis)', 'Flow cytometry (B-cell vs T-cell lineage, immunophenotyping)', 'Cytogenetics and FISH (Philadelphia chromosome, MLL, hyperdiploidy)', 'Molecular testing (BCR-ABL1, IKZF1, TP53)', 'Lumbar puncture (CNS involvement)'],
      imaging: ['Chest X-ray (mediastinal mass in T-cell ALL)', 'CT chest/abdomen/pelvis (lymphadenopathy, organomegaly)', 'MRI brain (if CNS symptoms)', 'Testicular ultrasound (in males with testicular swelling)'],
      criteria: ['≥20% lymphoblasts in bone marrow or peripheral blood', 'B-cell vs T-cell lineage', 'Cytogenetic risk groups (Philadelphia+, MLL-rearranged, hypodiploid, etc.)', 'CNS involvement (CNS1, CNS2, CNS3)', 'Minimal residual disease (MRD) status post-induction—strong prognostic factor', 'Age and white blood cell count at diagnosis'],
    },
    {
      medications: ['Induction chemotherapy: multi-agent (vincristine, daunorubicin, L-asparaginase, corticosteroids)', 'Consolidation/intensification: high-dose methotrexate, cytarabine', 'CNS prophylaxis: intrathecal chemotherapy (methotrexate, cytarabine)', 'Maintenance therapy: 6-mercaptopurine, methotrexate (2-3 years)', 'Philadelphia+ ALL: tyrosine kinase inhibitors (imatinib, dasatinib, ponatinib)', 'Immunotherapy: blinatumomab (BiTE antibody), CAR T-cell therapy (tisagenlecleucel)', 'Rituximab (CD20+ B-ALL)'],
      procedures: ['Allogeneic hematopoietic stem cell transplant (high-risk disease or relapse)', 'Lumbar puncture for intrathecal chemotherapy', 'Central venous catheter placement (port or PICC)', 'Supportive care: blood/platelet transfusions, G-CSF, antimicrobial prophylaxis'],
      lifestyle: ['Strict infection precautions during neutropenia (hand hygiene, avoid crowds/sick contacts)', 'Nutritional support (high protein, adequate calories)', 'Maintain hydration', 'Avoid live vaccines during treatment', 'Psychosocial support and counseling', 'School/work accommodations during treatment', 'Physical therapy to maintain strength'],
    },
    ['Fever >38.3°C with neutropenia (<500 cells/μL)—medical emergency', 'Severe bleeding or persistent bleeding that doesn\'t stop', 'Signs of infection: chills, rigors, severe sore throat', 'Tumor lysis syndrome: confusion, irregular heartbeat, decreased urine output', 'Severe shortness of breath or chest pain (leukostasis, mediastinal mass)', 'Neurologic changes: severe headache, vision changes, seizures (CNS involvement)', 'Severe abdominal pain (typhlitis)'],
    'Acute lymphoblastic leukemia (ALL) is a cancer of the blood and bone marrow where the body produces too many immature white blood cells (lymphoblasts). These abnormal cells crowd out healthy blood cells, causing anemia, infections, and bleeding. ALL requires intensive chemotherapy given in phases over 2-3 years. The good news is that childhood ALL has a cure rate exceeding 90%, and adult outcomes have improved significantly with newer therapies. During treatment, infection prevention is critical—fever must be reported immediately. Many patients also need treatment directed to the brain and spinal cord to prevent disease spread. Long-term follow-up is essential to monitor for late effects and relapse.',
    'La leucemia linfoblástica aguda (LLA) es un cáncer de la sangre y médula ósea donde el cuerpo produce demasiadas células blancas inmaduras (linfoblastos). Estas células anormales desplazan células sanguíneas sanas, causando anemia, infecciones y sangrado. LLA requiere quimioterapia intensiva administrada en fases durante 2-3 años. La buena noticia es que la LLA infantil tiene tasa de curación superior al 90%, y resultados en adultos han mejorado significativamente con terapias más nuevas. Durante tratamiento, prevención de infecciones es crítica—fiebre debe reportarse inmediatamente. Muchos pacientes también necesitan tratamiento dirigido al cerebro y médula espinal para prevenir propagación de enfermedad. Seguimiento a largo plazo es esencial para monitorear efectos tardíos y recaída.',
  ),

  'nhl-lymphoma': onc(
    'nhl-lymphoma', 'Lymphoma (Non-Hodgkin)', 'Linfoma (no Hodgkin)',
    'hematologic', '2B33',
    'Diverse group of lymphoid malignancies arising from B-cells, T-cells, or NK cells. Includes indolent and aggressive subtypes.',
    'Grupo diverso de malignidades linfoides que surgen de células B, células T o células NK. Incluye subtipos indolentes y agresivos.',
    ['Immunosuppression (HIV, organ transplant, autoimmune disease)', 'EBV, HCV, HTLV-1, H. pylori infection', 'Prior chemotherapy or radiation', 'Family history of lymphoma', 'Occupational exposures (pesticides, herbicides)', 'Autoimmune conditions (Sjögren\'s, celiac disease)', 'Advancing age'],
    'Malignant transformation of lymphocytes occurs in lymph nodes or extranodal sites. B-cell lymphomas (85%—DLBCL, follicular, marginal zone, mantle cell) and T/NK-cell lymphomas (15%) have distinct pathogenesis. Oncogenic drivers (BCL2, BCL6, MYC translocations; TP53 mutations) cause uncontrolled proliferation. Tumors disrupt normal immune function and can spread widely through lymphatic system.',
    'La transformación maligna de linfocitos ocurre en ganglios linfáticos o sitios extranodales. Linfomas de células B (85%—DLBCL, folicular, zona marginal, células del manto) y linfomas de células T/NK (15%) tienen patogénesis distintas. Impulsores oncogénicos (translocaciones BCL2, BCL6, MYC; mutaciones TP53) causan proliferación descontrolada. Los tumores interrumpen función inmune normal y pueden propagarse ampliamente por sistema linfático.',
    ['Painless lymphadenopathy (neck, axilla, groin)', 'B symptoms: fever, drenching night sweats, weight loss >10%', 'Fatigue and weakness', 'Pruritus (itching)', 'Splenomegaly and hepatomegaly', 'Extranodal involvement: GI (abdominal pain), CNS (headache, focal deficits), skin (rash, nodules)', 'Superior vena cava syndrome (mediastinal mass)', 'Cytopenias if bone marrow involvement'],
    {
      tests: ['Excisional lymph node biopsy (preferred) or core needle biopsy', 'Flow cytometry and immunohistochemistry (cell of origin, CD20, CD3, etc.)', 'Cytogenetics and FISH (BCL2, BCL6, MYC rearrangements)', 'Molecular testing (MYD88, BRAF, TP53)', 'Complete blood count and comprehensive metabolic panel', 'LDH (elevated—correlates with tumor burden)', 'Beta-2 microglobulin', 'HIV and hepatitis serologies'],
      imaging: ['PET-CT (staging and response assessment—Deauville score)', 'CT chest/abdomen/pelvis with contrast', 'MRI brain/spine if CNS symptoms', 'Endoscopy or colonoscopy if GI involvement suspected'],
      criteria: ['Ann Arbor staging (I-IV)', 'Histologic subtype (DLBCL, follicular, marginal zone, mantle cell, etc.)', 'Cell of origin (germinal center vs activated B-cell for DLBCL)', 'International Prognostic Index (IPI): age, stage, LDH, performance status, extranodal sites', 'Double/triple hit lymphoma (MYC + BCL2 and/or BCL6)', 'Bulky disease (>10cm mass)'],
    },
    {
      medications: ['R-CHOP (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisone)—most common for aggressive NHL', 'Rituximab maintenance (follicular lymphoma)', 'Bendamustine + rituximab (indolent lymphomas)', 'Ibrutinib, acalabrutinib (BTK inhibitors—mantle cell, marginal zone)', 'Venetoclax (BCL2 inhibitor—relapsed/refractory)', 'CAR T-cell therapy: axicabtagene, tisagenlecleucel (relapsed/refractory DLBCL)', 'Polatuzumab vedotin, loncastuximab (antibody-drug conjugates)'],
      procedures: ['Autologous stem cell transplant (relapsed aggressive lymphoma)', 'Allogeneic stem cell transplant (select cases)', 'Radiation therapy (stage I-II or bulky disease)', 'Intrathecal chemotherapy (CNS prophylaxis in high-risk)', 'Watchful waiting (asymptomatic indolent lymphomas)'],
      lifestyle: ['Infection precautions during chemotherapy', 'Nutritional support (maintain weight and muscle mass)', 'Regular exercise as tolerated', 'Avoid alcohol during chemotherapy', 'Skin protection (avoid sun exposure)', 'Psychosocial support and support groups', 'Survivorship care plan post-treatment (monitor for late effects)'],
    },
    ['Fever with neutropenia during chemotherapy', 'Tumor lysis syndrome: severe nausea, decreased urine output, confusion, arrhythmias', 'Superior vena cava syndrome: facial/upper extremity swelling, dyspnea', 'Spinal cord compression: back pain, leg weakness, bowel/bladder dysfunction', 'Severe shortness of breath (mediastinal mass, pleural effusion)', 'New neurologic symptoms (CNS involvement)', 'Cytokine release syndrome after CAR T-cell therapy (high fever, hypotension)'],
    'Non-Hodgkin lymphoma (NHL) is a cancer of the lymphatic system, which is part of your immune system. There are many types—some grow slowly (indolent) and others quickly (aggressive). Common symptoms include swollen lymph nodes that don\'t hurt, fever, night sweats, and weight loss. Treatment depends on the specific type and stage but often includes chemotherapy combined with rituximab (an antibody targeting cancer cells). Aggressive lymphomas like diffuse large B-cell lymphoma are treated with curative intent, while indolent lymphomas may be watched carefully or treated when symptoms develop. Newer treatments like CAR T-cell therapy have dramatically improved outcomes for relapsed disease.',
    'El linfoma no Hodgkin (LNH) es un cáncer del sistema linfático, que es parte de su sistema inmune. Hay muchos tipos—algunos crecen lentamente (indolentes) y otros rápidamente (agresivos). Síntomas comunes incluyen ganglios linfáticos inflamados que no duelen, fiebre, sudores nocturnos y pérdida de peso. El tratamiento depende del tipo específico y estadio pero frecuentemente incluye quimioterapia combinada con rituximab (un anticuerpo que ataca células cancerosas). Linfomas agresivos como linfoma difuso de células B grandes se tratan con intención curativa, mientras linfomas indolentes pueden observarse cuidadosamente o tratarse cuando se desarrollan síntomas. Tratamientos más nuevos como terapia con células CAR T han mejorado dramáticamente resultados para enfermedad recaída.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Get a single oncology condition by ID. */
export function getOncologyConditionById(id: string): OncologyConditionEntry | undefined {
  return ONCOLOGY_CONDITIONS[id];
}

/** Search conditions by name, category, or any text field (case-insensitive). */
export function searchOncologyConditions(query: string): OncologyConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(ONCOLOGY_CONDITIONS).filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.nameEs.toLowerCase().includes(q) ||
    c.category.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.descriptionEs.toLowerCase().includes(q) ||
    c.pathophysiology.toLowerCase().includes(q) ||
    c.pathophysiologyEs.toLowerCase().includes(q) ||
    c.patientExplanation.toLowerCase().includes(q) ||
    c.patientExplanationEs.toLowerCase().includes(q),
  );
}

/** Filter conditions by category. */
export function getOncologyByCategory(category: OncologyCategory): OncologyConditionEntry[] {
  return Object.values(ONCOLOGY_CONDITIONS).filter(c => c.category === category);
}

/** Return the total number of oncology conditions in the database. */
export function getOncologyConditionCount(): number {
  return Object.keys(ONCOLOGY_CONDITIONS).length;
}
