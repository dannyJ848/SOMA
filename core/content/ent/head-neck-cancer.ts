import { EducationalContent } from '../types';

/**
 * Head and Neck Cancer Educational Content
 *
 * Covers: oral cavity cancer, oropharyngeal cancer (HPV-related),
 * laryngeal cancer, nasopharyngeal cancer, thyroid cancer, salivary gland tumors.
 */

const nameEs: Record<string, string> = {
  'oral-cavity-cancer': 'Cáncer de cavidad oral',
  'oropharyngeal-cancer': 'Cáncer orofaríngeo',
  'laryngeal-cancer': 'Cáncer de laringe',
  'nasopharyngeal-cancer': 'Cáncer nasofaríngeo',
  'thyroid-cancer': 'Cáncer de tiroides',
  'salivary-gland-tumors': 'Tumores de glándulas salivales',
};

function makeContent(
  id: string,
  name: string,
  alternateNames: string[],
  levels: EducationalContent['levels'],
  keywords: string[],
): EducationalContent {
  return {
    id,
    type: 'condition',
    name,
    alternateNames,
    levels,
    media: [],
    citations: [
      {
        id: `${id}-nccn`,
        type: 'article',
        title: 'NCCN Clinical Practice Guidelines: Head and Neck Cancers (Version 4.2024)',
        source: 'National Comprehensive Cancer Network',
      },
    ],
    crossReferences: [
      { targetId: 'ent-throat', targetType: 'topic', relationship: 'related', label: 'Throat Disorders' },
    ],
    tags: {
      systems: ['upper-airway', 'digestive'],
      topics: ['oncology', 'head-neck-cancer'],
      keywords,
      clinicalRelevance: 'critical',
      examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'ent'] },
    },
    createdAt: '2026-01-30T00:00:00.000Z',
    updatedAt: '2026-01-30T00:00:00.000Z',
    version: 1,
    status: 'published',
  };
}

export const headNeckCancerContent: Record<string, EducationalContent> = {
  'oral-cavity-cancer': makeContent(
    'ent-oral-cavity-cancer',
    'Oral Cavity Cancer',
    ['Mouth Cancer', nameEs['oral-cavity-cancer']],
    {
      1: {
        level: 1,
        summary: 'Oral cavity cancer is cancer of the mouth, including the lips, tongue, gums, and inner cheeks. Tobacco and alcohol are the biggest risk factors.',
        explanation: 'Oral cavity cancer starts in the tissues of the mouth. It can appear as a sore that does not heal, a white or red patch, or a lump. Smoking, chewing tobacco, and heavy drinking raise the risk. Dentists often spot early signs during routine checkups. Treatment usually involves surgery, sometimes with radiation.',
        keyTerms: [
          { term: 'leukoplakia', definition: 'A white patch in the mouth that may become cancer' },
          { term: 'biopsy', definition: 'Removing a small tissue sample to check for cancer' },
        ],
        patientCounselingPoints: ['See a dentist regularly for oral cancer screening.', 'Report any mouth sore lasting more than two weeks.'],
      },
      2: {
        level: 2,
        summary: 'Oral cavity squamous cell carcinoma (SCC) arises from mucosal epithelium. Tobacco and alcohol act synergistically. Leukoplakia and erythroplakia are precursor lesions.',
        explanation: 'The oral cavity extends from the vermilion border of the lips to the junction of the hard and soft palate and circumvallate papillae. SCC accounts for over 90% of malignancies. Staging uses tumor size and depth of invasion (DOI), a key factor added in AJCC 8th edition. Surgery is the primary treatment for most oral cavity cancers, with adjuvant radiation for adverse features.',
        keyTerms: [
          { term: 'depth of invasion', definition: 'How deep the tumor grows into tissue, affecting T staging' },
          { term: 'erythroplakia', definition: 'Red mucosal patch with high malignant potential' },
        ],
      },
      3: {
        level: 3,
        summary: 'Oral cavity SCC management centers on surgical resection with margin assessment. Depth of invasion >4 mm drives elective neck dissection. Adjuvant RT/CRT is guided by pathologic features including margin status and extranodal extension.',
        explanation: 'Field cancerization from chronic carcinogen exposure underlies multifocal disease risk. DOI replaced tumor thickness in AJCC 8th edition staging (DOI >5mm = T2, >10mm = T3). Elective neck dissection (levels I-III) is recommended when occult metastasis risk exceeds 15-20%, typically at DOI >4mm. Postoperative concurrent chemoradiation (cisplatin) is indicated for positive margins or extranodal extension (ENE).',
        keyTerms: [
          { term: 'field cancerization', definition: 'Widespread epithelial preneoplastic change from chronic carcinogen exposure' },
          { term: 'extranodal extension', definition: 'Tumor growth beyond the lymph node capsule, a major adverse prognostic factor' },
        ],
        clinicalNotes: 'Peroral approach preferred for accessible tumors. Mandibulotomy needed for posterior oral cavity access.',
      },
      4: {
        level: 4,
        summary: 'Oral cavity cancer genomics reveals frequent TP53, CDKN2A, and NOTCH1 alterations. Sentinel lymph node biopsy is emerging for early-stage N0 disease. Free-flap reconstruction addresses complex defects after composite resection.',
        explanation: 'TP53 mutations occur in >60% of tobacco-related oral SCC. CDKN2A inactivation via deletion or promoter methylation is common. NOTCH1 loss-of-function mutations occur in ~15%. Sentinel node biopsy (99mTc-labeled tracer + ICG) has >90% sensitivity for occult metastasis in T1-T2 N0 tumors. Fibula free flap remains the workhorse for mandibular reconstruction, with 3D-planned cutting guides improving accuracy.',
        keyTerms: [
          { term: 'sentinel lymph node biopsy', definition: 'Identification and removal of the first draining lymph node to detect occult metastasis' },
          { term: 'fibula free flap', definition: 'Vascularized bone and soft tissue from the leg used for jaw reconstruction' },
        ],
        clinicalNotes: 'Tumor budding and worst pattern of invasion are emerging histopathologic prognostic factors beyond conventional grading.',
      },
      5: {
        level: 5,
        summary: 'Current oral cavity cancer research focuses on refining risk stratification (DOI, tumor budding, immune profiling), expanding sentinel node biopsy indications, biomarker-guided adjuvant therapy, and AI-assisted margin assessment intraoperatively.',
        explanation: 'The SEND trial and international validation studies are establishing sentinel node biopsy as standard for early oral SCC. Circulating tumor DNA monitoring post-resection shows promise for MRD detection. Intraoperative fluorescence (e.g., pafolacianine/OTL38) and AI-powered confocal microscopy are under investigation for real-time margin assessment. Neoadjuvant immunotherapy (anti-PD-1) window trials show pathologic responses in a subset, though optimal patient selection remains unclear.',
        keyTerms: [
          { term: 'tumor budding', definition: 'Isolated small clusters of cancer cells at the invasive front, associated with aggressive behavior' },
          { term: 'pafolacianine', definition: 'Folate receptor-targeted fluorescent agent for intraoperative tumor visualization' },
        ],
        clinicalNotes: 'NCCN recommends elective neck dissection for T1 tumors with DOI >4mm. Consider SLNB in centers with validated expertise for T1-T2 N0 disease.',
      },
    },
    ['oral cavity cancer', 'mouth cancer', 'SCC', 'leukoplakia', 'erythroplakia'],
  ),

  'oropharyngeal-cancer': makeContent(
    'ent-oropharyngeal-cancer',
    'Oropharyngeal Cancer (HPV-Related)',
    ['HPV-Related Throat Cancer', 'Tonsil Cancer', nameEs['oropharyngeal-cancer']],
    {
      1: {
        level: 1,
        summary: 'Oropharyngeal cancer affects the back of the throat, including the tonsils and base of the tongue. A virus called HPV is now the leading cause.',
        explanation: 'This cancer grows in the part of the throat behind the mouth. HPV (the same virus linked to cervical cancer) causes most cases today, especially in younger adults. Symptoms include a persistent sore throat, difficulty swallowing, or a painless neck lump. The HPV vaccine can prevent many of these cancers. Treatment may include radiation, chemotherapy, or surgery.',
        keyTerms: [
          { term: 'HPV', definition: 'Human papillomavirus, a common virus that can cause certain cancers' },
          { term: 'oropharynx', definition: 'The middle part of the throat behind the mouth' },
        ],
        patientCounselingPoints: ['The HPV vaccine is recommended for boys and girls to prevent these cancers.', 'HPV-related throat cancer has a very good cure rate.'],
      },
      2: {
        level: 2,
        summary: 'HPV-positive oropharyngeal SCC is now the most common HPV-associated cancer in the US. HPV-16 is the predominant genotype. These tumors have a distinct biology and significantly better prognosis than HPV-negative disease.',
        explanation: 'HPV-positive oropharyngeal cancer typically presents as a cystic neck mass or asymmetric tonsillar enlargement. p16 immunohistochemistry serves as the standard surrogate marker. AJCC 8th edition created separate staging for HPV-positive disease reflecting its better prognosis. Treatment usually involves radiation with concurrent chemotherapy for advanced stages.',
        keyTerms: [
          { term: 'p16', definition: 'A protein overexpressed in HPV-driven cancers, used as a diagnostic marker' },
          { term: 'cystic neck mass', definition: 'A fluid-filled lump in the neck that may be the first sign of HPV-positive throat cancer' },
        ],
      },
      3: {
        level: 3,
        summary: 'HPV E6/E7 oncoproteins drive carcinogenesis through p53 degradation and Rb inactivation respectively. The AJCC 8th edition separates p16-positive oropharyngeal staging, with most patients classified as stage I-II despite bulky nodal disease.',
        explanation: 'HPV-16 accounts for >90% of HPV-positive oropharyngeal SCC. Integration of viral DNA leads to constitutive E6/E7 expression. Unlike tobacco-related tumors, HPV-positive cancers retain wild-type TP53 and have lower mutational burden. Definitive chemoradiation (cisplatin 100mg/m2 q3weeks) is the standard for locally advanced disease. TORS is an alternative for T1-T2 tumors, potentially allowing de-escalation of adjuvant therapy.',
        keyTerms: [
          { term: 'E6/E7', definition: 'HPV oncoproteins that inactivate p53 and Rb tumor suppressors' },
          { term: 'TORS', definition: 'Transoral robotic surgery for oropharyngeal tumors' },
        ],
        clinicalNotes: 'Smoking status matters: HPV-positive patients with >10 pack-years have inferior outcomes and should not be deintensified.',
      },
      4: {
        level: 4,
        summary: 'Deintensification strategies for favorable-risk HPV-positive oropharyngeal cancer include reduced radiation dose, substitution of concurrent agents, and primary surgical approaches. Circulating HPV DNA is an emerging biomarker for treatment response and surveillance.',
        explanation: 'Key deintensification trials: ECOG 1308 (induction chemo then reduced-dose RT), NRG-HN002 (60 Gy with concurrent cisplatin), PATHOS (surgery then risk-adapted adjuvant), and ORATOR (TORS vs RT). Circulating HPV-ctDNA has >95% sensitivity for detecting residual disease post-treatment. Risk stratification uses T-stage, N-stage, and smoking history. PIK3CA mutations (~25%) represent a potential therapeutic target.',
        keyTerms: [
          { term: 'deintensification', definition: 'Reducing treatment intensity to limit toxicity while maintaining cure rates' },
          { term: 'HPV-ctDNA', definition: 'Circulating HPV tumor DNA in blood used for disease monitoring' },
        ],
        clinicalNotes: 'RTOG 1016 showed cetuximab is inferior to cisplatin as a radiosensitizer in HPV-positive oropharyngeal cancer; cisplatin remains the standard concurrent agent.',
      },
      5: {
        level: 5,
        summary: 'Current frontiers include response-adaptive deintensification guided by ctDNA clearance, neoadjuvant immunotherapy, and long-term survivorship optimization. Standard-of-care remains cisplatin-based CRT for most locally advanced HPV-positive OPC outside clinical trials.',
        explanation: 'Ongoing trials: OPTIMA (response-adaptive dose reduction), QUARTERBACK (60 vs 70 Gy), and dart-HPV (dose-painted IMRT). Post-treatment PET at 12 weeks guides need for neck dissection. Pembrolizumab is being evaluated in the definitive setting (KEYNOTE-412, negative for EFS). Long-term survivorship issues include dysphagia, xerostomia, and carotid stenosis. HPV vaccination impact on incidence will take decades to manifest given the long latency period.',
        keyTerms: [
          { term: 'response-adaptive therapy', definition: 'Adjusting treatment based on early response assessment' },
          { term: 'dose painting', definition: 'Varying radiation dose within the treatment field based on tumor characteristics' },
        ],
        clinicalNotes: 'Outside a clinical trial, do not deintensify. Standard remains 70 Gy with concurrent high-dose cisplatin for stage III-IV HPV-positive OPC.',
      },
    },
    ['oropharyngeal cancer', 'HPV', 'tonsil cancer', 'base of tongue cancer', 'p16'],
  ),

  'laryngeal-cancer': makeContent(
    'ent-laryngeal-cancer',
    'Laryngeal Cancer',
    ['Voice Box Cancer', 'Cancer of the Larynx', nameEs['laryngeal-cancer']],
    {
      1: {
        level: 1,
        summary: 'Laryngeal cancer is cancer of the voice box. Hoarseness that lasts more than two weeks is the most common warning sign. Smoking is the biggest risk factor.',
        explanation: 'The larynx (voice box) contains your vocal cords and helps you breathe, speak, and swallow. Cancer here usually starts on or near the vocal cords. The earliest symptom is often a hoarse voice that does not go away. Treatment may include radiation, surgery, or both. Early-stage cancers have high cure rates.',
        keyTerms: [
          { term: 'larynx', definition: 'The voice box, located in the front of the neck' },
          { term: 'hoarseness', definition: 'A rough or raspy voice, often the first sign of laryngeal cancer' },
        ],
        patientCounselingPoints: ['Any hoarseness lasting more than two weeks should be checked by a doctor.', 'Quitting smoking greatly reduces your risk.'],
      },
      2: {
        level: 2,
        summary: 'Laryngeal SCC is divided into glottic (vocal cords), supraglottic (above cords), and subglottic (below cords) subsites. Glottic cancers present early with hoarseness. Supraglottic cancers often present at advanced stages with neck metastases.',
        explanation: 'Glottic cancers account for ~60% of laryngeal cancers and present early due to voice changes. The glottis has sparse lymphatic drainage, so early glottic cancer rarely metastasizes. Supraglottic cancers (~35%) have rich lymphatic drainage and often present with neck nodes. Treatment for early glottic cancer includes radiation or endoscopic laser excision with excellent voice preservation. Advanced disease may require total laryngectomy.',
        keyTerms: [
          { term: 'glottis', definition: 'The part of the larynx containing the vocal cords' },
          { term: 'laryngectomy', definition: 'Surgical removal of the voice box' },
        ],
      },
      3: {
        level: 3,
        summary: 'Organ preservation with chemoradiation (VA Larynx trial, RTOG 91-11) is standard for advanced laryngeal cancer. Total laryngectomy remains indicated for T4a disease with cartilage invasion or post-treatment salvage.',
        explanation: 'RTOG 91-11 established concurrent cisplatin-RT as superior to induction chemo followed by RT or RT alone for laryngeal preservation. T1-T2 glottic: RT or TLM with >90% local control. T3-T4a: chemoradiation for organ preservation vs total laryngectomy (comparable survival). T4a with cartilage destruction: primary laryngectomy preferred. Post-laryngectomy rehabilitation includes tracheoesophageal puncture (TEP) voice prosthesis, electrolarynx, or esophageal speech.',
        keyTerms: [
          { term: 'organ preservation', definition: 'Chemoradiation approach to treat cancer while keeping the larynx intact' },
          { term: 'TEP', definition: 'Tracheoesophageal puncture; a valve that enables speech after laryngectomy' },
        ],
        clinicalNotes: 'Functional larynx is required for organ preservation candidacy. Non-functional larynx (aspiration, airway obstruction) warrants primary laryngectomy.',
      },
      4: {
        level: 4,
        summary: 'Laryngeal cancer management balances oncologic control with functional preservation. TLM and TORS offer minimally invasive options for select tumors. Salvage laryngectomy after failed chemoradiation carries significant morbidity including pharyngocutaneous fistula.',
        explanation: 'TLM (CO2 laser) allows precise resection with organ preservation for T1-T2 and select T3 glottic cancers. Anterior commissure involvement is a relative contraindication. Post-CRT salvage laryngectomy has ~30% pharyngocutaneous fistula rate. Pectoralis major flap onlay reduces fistula risk. Neopharyngeal stricture and hypothyroidism are common post-treatment complications. Narrow-band imaging (NBI) enhances detection of superficial mucosal lesions.',
        keyTerms: [
          { term: 'TLM', definition: 'Transoral laser microsurgery using CO2 laser for endoscopic tumor resection' },
          { term: 'pharyngocutaneous fistula', definition: 'Abnormal connection between pharynx and skin, a major post-laryngectomy complication' },
        ],
        clinicalNotes: 'Rising laryngectomy rates in some series suggest overuse of organ preservation. Patient selection is critical.',
      },
      5: {
        level: 5,
        summary: 'Contemporary issues include declining organ preservation success rates in community settings, biomarker-guided treatment selection, laryngeal transplantation research, and improved rehabilitation technologies for total laryngectomy patients.',
        explanation: 'NCDB data suggest organ preservation outcomes in community settings may be inferior to trial results, with some centers reporting declining laryngeal cancer survival. Biomarkers under investigation include EGFR, p53, and hypoxia markers for predicting CRT response. Laryngeal transplant has been performed in rare cases with immunosuppression. Indwelling voice prostheses (Provox) have improved TEP reliability. AI-assisted voice reconstruction is an emerging field.',
        keyTerms: [
          { term: 'Provox', definition: 'An indwelling voice prosthesis for speech after total laryngectomy' },
          { term: 'hypoxia markers', definition: 'Indicators of low oxygen in tumors predicting radiation resistance' },
        ],
        clinicalNotes: 'NCCN recommends multidisciplinary discussion for all T3-T4 laryngeal cancers. Total laryngectomy should be discussed as a viable option alongside organ preservation.',
      },
    },
    ['laryngeal cancer', 'voice box cancer', 'glottic', 'supraglottic', 'laryngectomy'],
  ),

  'nasopharyngeal-cancer': makeContent(
    'ent-nasopharyngeal-cancer',
    'Nasopharyngeal Cancer',
    ['NPC', 'Nasopharyngeal Carcinoma', nameEs['nasopharyngeal-cancer']],
    {
      1: {
        level: 1,
        summary: 'Nasopharyngeal cancer starts in the area behind the nose. It is more common in Southeast Asia and is linked to the Epstein-Barr virus (EBV).',
        explanation: 'The nasopharynx is the upper part of the throat, behind the nose. Cancer here can cause a blocked nose, nosebleeds, hearing loss, or a neck lump. It is rare in most countries but common in Southern China and Southeast Asia. Treatment usually involves radiation and chemotherapy, and cure rates are good when caught early.',
        keyTerms: [
          { term: 'nasopharynx', definition: 'The upper part of the throat behind the nose' },
          { term: 'EBV', definition: 'Epstein-Barr virus, linked to nasopharyngeal cancer' },
        ],
        patientCounselingPoints: ['A persistent blocked ear or nose in endemic regions should be evaluated.', 'NPC responds well to radiation therapy.'],
      },
      2: {
        level: 2,
        summary: 'Nasopharyngeal carcinoma (NPC) is associated with EBV infection, genetic susceptibility, and dietary factors (salted fish). The WHO classifies NPC into keratinizing, non-keratinizing (differentiated and undifferentiated), and basaloid subtypes.',
        explanation: 'Non-keratinizing undifferentiated NPC (WHO Type III) is the most common form in endemic regions and is strongly EBV-associated. It presents with nasal obstruction, epistaxis, serous otitis media (Eustachian tube obstruction), cranial neuropathies, or cervical lymphadenopathy. Diagnosis requires biopsy, often with EBV serology (VCA-IgA, EA-IgA). Primary treatment is radiation with concurrent cisplatin for stage II and above.',
        keyTerms: [
          { term: 'WHO classification', definition: 'Histologic typing system: keratinizing, non-keratinizing, and basaloid NPC' },
          { term: 'serous otitis media', definition: 'Fluid behind eardrum from Eustachian tube blockage, an early NPC sign' },
        ],
      },
      3: {
        level: 3,
        summary: 'NPC management relies on intensity-modulated radiation therapy (IMRT) with concurrent cisplatin. Plasma EBV DNA is a validated prognostic and monitoring biomarker. Induction chemotherapy (gemcitabine-cisplatin) improves outcomes in locoregionally advanced disease.',
        explanation: 'IMRT has dramatically improved local control (>90%) while reducing xerostomia. The landmark Intergroup 0099 study established concurrent cisplatin-RT plus adjuvant cisplatin/5-FU. More recent data (NPC-0501, ADEPT) support induction gemcitabine-cisplatin followed by CRT for stage III-IVA. Plasma EBV DNA (quantitative PCR) at diagnosis, mid-treatment, and post-treatment is the key biomarker. Detectable post-treatment EBV DNA predicts recurrence.',
        keyTerms: [
          { term: 'plasma EBV DNA', definition: 'Circulating viral DNA used as a tumor biomarker for NPC' },
          { term: 'induction chemotherapy', definition: 'Chemotherapy given before definitive radiation to reduce tumor burden' },
        ],
        clinicalNotes: 'Retropharyngeal and level II nodes are the most common nodal stations involved. Bilateral neck irradiation is standard.',
      },
      4: {
        level: 4,
        summary: 'NPC biology involves EBV latent membrane proteins (LMP1, LMP2) driving NF-kB and PI3K/AKT signaling. Immune checkpoint inhibitors show activity in recurrent/metastatic NPC. EBV-targeted immunotherapy and adoptive T-cell therapy are under investigation.',
        explanation: 'LMP1 mimics CD40 signaling, activating NF-kB and promoting cell survival. LMP2A activates PI3K/AKT and Wnt pathways. The immune microenvironment is characterized by dense lymphocytic infiltration. Anti-PD-1 therapy (camrelizumab, toripalimab) combined with chemotherapy has shown significant benefit in R/M NPC in Asian trials. EBV-specific cytotoxic T-cell therapy and therapeutic vaccination are in clinical trials. Screening with EBV DNA in endemic populations reduces stage at diagnosis.',
        keyTerms: [
          { term: 'LMP1', definition: 'EBV latent membrane protein 1 that drives oncogenic NF-kB signaling' },
          { term: 'adoptive T-cell therapy', definition: 'Infusion of EBV-specific T-cells to target NPC' },
        ],
        clinicalNotes: 'Population-based EBV DNA screening in Guangdong province detected early-stage NPC with improved survival outcomes.',
      },
      5: {
        level: 5,
        summary: 'Emerging NPC management includes risk-adapted therapy guided by EBV DNA kinetics, immunotherapy integration in the definitive setting, and population-level EBV screening in endemic regions. Proton therapy may reduce late toxicity.',
        explanation: 'JUPITER-02 and CAPTAIN-1st established gemcitabine-cisplatin plus anti-PD-1 as a new standard for R/M NPC. Integration of immunotherapy into the definitive setting is being studied (NCT04419896). Risk-adapted approaches using mid-treatment EBV DNA to guide adjuvant therapy intensity are in trials. Proton therapy dosimetric advantages in the nasopharynx may reduce temporal lobe necrosis, a serious late toxicity of photon RT. Population screening with EBV DNA followed by endoscopy and MRI has been validated in large prospective studies.',
        keyTerms: [
          { term: 'temporal lobe necrosis', definition: 'Radiation-induced brain injury from NPC treatment, reduced with advanced techniques' },
          { term: 'risk-adapted therapy', definition: 'Tailoring treatment intensity based on individual biomarker response' },
        ],
        clinicalNotes: 'For endemic-region patients, plasma EBV DNA should be checked at baseline, mid-treatment, post-treatment, and during surveillance. Undetectable post-RT EBV DNA is associated with >90% 3-year OS.',
      },
    },
    ['nasopharyngeal cancer', 'NPC', 'EBV', 'Epstein-Barr', 'endemic'],
  ),

  'thyroid-cancer': makeContent(
    'ent-thyroid-cancer',
    'Thyroid Cancer',
    ['Thyroid Carcinoma', nameEs['thyroid-cancer']],
    {
      1: {
        level: 1,
        summary: 'Thyroid cancer starts in the thyroid gland in the front of your neck. It is one of the most treatable cancers, especially when found early.',
        explanation: 'The thyroid is a butterfly-shaped gland in the front of your neck that makes hormones controlling metabolism. A lump (nodule) in the thyroid is very common and usually not cancer. When thyroid cancer does occur, it grows slowly and has an excellent cure rate. Treatment typically involves surgery and sometimes radioactive iodine therapy. Most people live normal lives after treatment.',
        keyTerms: [
          { term: 'thyroid', definition: 'A butterfly-shaped gland in the neck that makes hormones' },
          { term: 'nodule', definition: 'A lump in the thyroid gland, usually not cancerous' },
        ],
        patientCounselingPoints: ['Most thyroid nodules are benign.', 'Thyroid cancer has one of the highest survival rates of all cancers.'],
      },
      2: {
        level: 2,
        summary: 'Thyroid cancer subtypes include papillary (most common, >80%), follicular, medullary, and anaplastic. Fine-needle aspiration (FNA) with Bethesda classification guides management. Surgery with or without radioactive iodine (RAI) is the standard treatment.',
        explanation: 'Papillary thyroid carcinoma (PTC) is the most common, has excellent prognosis, and frequently spreads to cervical lymph nodes but rarely causes death. Follicular thyroid cancer (~10%) spreads via blood to lungs and bones. Medullary thyroid cancer arises from C-cells and produces calcitonin. Anaplastic thyroid cancer is rare but extremely aggressive. FNA biopsy using the Bethesda System (categories I-VI) determines need for surgery.',
        keyTerms: [
          { term: 'Bethesda System', definition: 'Six-category classification of thyroid FNA results guiding management' },
          { term: 'RAI', definition: 'Radioactive iodine therapy that targets thyroid cancer cells' },
        ],
      },
      3: {
        level: 3,
        summary: 'Thyroid cancer management is risk-stratified using the ATA 2015 guidelines. Molecular testing (Afirma, ThyroSeq) helps classify indeterminate FNA results. BRAF V600E and RAS mutations are the most common driver alterations.',
        explanation: 'ATA risk stratification: low (intrathyroidal PTC <4cm, no adverse features), intermediate (minor extrathyroidal extension, small-volume nodal disease), high (gross extrathyroidal extension, incomplete resection, distant metastases). Lobectomy is sufficient for low-risk tumors 1-4cm. Total thyroidectomy is indicated for bilateral disease, high-risk features, or when RAI is planned. Molecular testing reduces unnecessary surgery for Bethesda III-IV nodules. Dynamic risk assessment at follow-up reclassifies patients based on response to therapy.',
        keyTerms: [
          { term: 'BRAF V600E', definition: 'The most common oncogenic mutation in papillary thyroid cancer' },
          { term: 'dynamic risk stratification', definition: 'Ongoing reclassification of recurrence risk based on treatment response' },
        ],
        clinicalNotes: 'Active surveillance is now an accepted option for low-risk papillary microcarcinomas (<1cm) in appropriate patients.',
      },
      4: {
        level: 4,
        summary: 'Thyroid cancer molecular landscape includes BRAF, RAS, RET/PTC rearrangements, and TERT promoter mutations. Targeted therapy (lenvatinib, sorafenib, selpercatinib) has transformed RAI-refractory differentiated and advanced medullary thyroid cancer management.',
        explanation: 'BRAF V600E + TERT promoter co-mutation identifies aggressive PTC with increased recurrence and mortality. RET fusions drive papillary cancer; RET point mutations (M918T, C634R) drive medullary cancer (sporadic and MEN2). Selpercatinib and pralsetinib are highly active RET-selective inhibitors. Lenvatinib (VEGFR/FGFR TKI) is first-line for RAI-refractory DTC. Dabrafenib + trametinib is approved for BRAF V600E anaplastic thyroid cancer. Redifferentiation therapy (MEK inhibitors) to restore RAI avidity is under investigation.',
        keyTerms: [
          { term: 'TERT promoter', definition: 'Telomerase promoter mutation associated with aggressive thyroid cancer behavior' },
          { term: 'selpercatinib', definition: 'Selective RET kinase inhibitor for RET-altered thyroid cancers' },
        ],
        clinicalNotes: 'All medullary thyroid cancer patients should undergo RET germline testing. MEN2A/2B families require prophylactic thyroidectomy.',
      },
      5: {
        level: 5,
        summary: 'Contemporary thyroid oncology integrates molecular profiling into surgical decision-making, employs risk-adapted RAI, utilizes targeted therapies for advanced disease, and increasingly considers active surveillance for indolent microcarcinomas to reduce overtreatment.',
        explanation: 'The thyroid cancer overdiagnosis epidemic has led to active surveillance programs (pioneered in Japan, now validated in Korea and US). Molecular-guided lobectomy reduces unnecessary total thyroidectomy. TSH-stimulated thyroglobulin with neck ultrasound is the cornerstone of DTC surveillance. For anaplastic thyroid cancer, neoadjuvant dabrafenib/trametinib (if BRAF-mutant) or pembrolizumab/lenvatinib combinations can convert unresectable to resectable disease. NTRK inhibitors (larotrectinib, entrectinib) are tissue-agnostic options for rare NTRK-fusion thyroid cancers.',
        keyTerms: [
          { term: 'overdiagnosis', definition: 'Detection of cancers that would never cause harm, leading to unnecessary treatment' },
          { term: 'redifferentiation', definition: 'Restoring iodine uptake in refractory thyroid cancer using targeted agents' },
        ],
        clinicalNotes: 'ATA 2015 guidelines recommend against RAI for low-risk DTC (intrathyroidal T1-T2 N0). Reserve RAI for intermediate and high-risk disease.',
      },
    },
    ['thyroid cancer', 'papillary', 'follicular', 'medullary', 'anaplastic', 'BRAF', 'RET'],
  ),

  'salivary-gland-tumors': makeContent(
    'ent-salivary-gland-tumors',
    'Salivary Gland Tumors',
    ['Salivary Gland Neoplasms', nameEs['salivary-gland-tumors']],
    {
      1: {
        level: 1,
        summary: 'Salivary gland tumors are growths in the glands that make saliva. Most occur in the parotid gland (near the ear). Many are benign, but some can be cancerous.',
        explanation: 'Salivary glands make the saliva that keeps your mouth moist and helps digest food. The largest is the parotid gland, located in front of each ear. A lump near the ear or under the jaw may be a salivary gland tumor. Most are benign (not cancer), but a doctor should evaluate any new lump. Treatment is usually surgery. If the tumor is cancerous, radiation may also be needed.',
        keyTerms: [
          { term: 'parotid gland', definition: 'The largest salivary gland, located in front of each ear' },
          { term: 'benign', definition: 'Not cancerous; a growth that does not spread to other parts of the body' },
        ],
        patientCounselingPoints: ['Most parotid lumps are benign.', 'Facial weakness with a parotid mass needs urgent evaluation.'],
      },
      2: {
        level: 2,
        summary: 'Salivary gland tumors follow the rule of 80s: 80% occur in the parotid, 80% of parotid tumors are benign, and 80% of benign parotid tumors are pleomorphic adenomas. Smaller glands have higher malignancy rates.',
        explanation: 'Pleomorphic adenoma (benign mixed tumor) is the most common salivary neoplasm. Warthin tumor is the second most common benign tumor (almost exclusively in the parotid, associated with smoking). Mucoepidermoid carcinoma is the most common malignant salivary tumor. Adenoid cystic carcinoma is notable for perineural invasion and late distant metastases. Facial nerve involvement suggests malignancy. FNA biopsy guides preoperative planning.',
        keyTerms: [
          { term: 'pleomorphic adenoma', definition: 'The most common benign salivary tumor, also called mixed tumor' },
          { term: 'adenoid cystic carcinoma', definition: 'A malignant salivary tumor known for nerve invasion and late recurrence' },
        ],
      },
      3: {
        level: 3,
        summary: 'Salivary gland tumor surgery requires facial nerve preservation when not directly invaded. WHO 2022 classification recognizes >30 histologic subtypes. Adjuvant radiation is indicated for high-grade malignancies, close/positive margins, perineural invasion, and advanced stage.',
        explanation: 'Superficial parotidectomy with facial nerve dissection is the minimum operation for parotid tumors. Total parotidectomy is needed for deep-lobe tumors. Facial nerve sacrifice is only justified for direct tumor invasion. The WHO 2022 classification includes new entities like secretory carcinoma (ETV6-NTRK3 fusion) and microsecretory adenocarcinoma. Neutron or proton therapy may benefit unresectable adenoid cystic carcinoma. Neck dissection is therapeutic (clinically positive nodes) rather than elective for most salivary cancers.',
        keyTerms: [
          { term: 'Frey syndrome', definition: 'Gustatory sweating after parotidectomy from aberrant nerve regeneration' },
          { term: 'secretory carcinoma', definition: 'Salivary tumor defined by ETV6-NTRK3 fusion, targetable with NTRK inhibitors' },
        ],
        clinicalNotes: 'Never perform incisional biopsy of parotid tumors (risk of tumor spillage and facial nerve injury). Use FNA or core needle biopsy.',
      },
      4: {
        level: 4,
        summary: 'Salivary gland cancers harbor recurrent gene fusions (MYB-NFIB in adenoid cystic, ETV6-NTRK3 in secretory carcinoma, CRTC1-MAML2 in mucoepidermoid). Molecular classification is increasingly guiding diagnosis and targeted therapy.',
        explanation: 'Adenoid cystic carcinoma: MYB-NFIB or MYBL1-NFIB fusion in ~60%; NOTCH1 mutations in 10-15% associated with solid histology and worse prognosis. Mucoepidermoid carcinoma: CRTC1/3-MAML2 fusion-positive tumors have better prognosis. Salivary duct carcinoma: Androgen receptor (AR)-positive in >95%, HER2 amplification in ~30%, treated with AR blockade and/or anti-HER2 therapy. NTRK inhibitors (larotrectinib, entrectinib) show durable responses in secretory carcinoma.',
        keyTerms: [
          { term: 'MYB-NFIB', definition: 'The defining gene fusion of adenoid cystic carcinoma' },
          { term: 'androgen receptor', definition: 'Hormone receptor expressed in salivary duct carcinoma, targetable with anti-androgen therapy' },
        ],
        clinicalNotes: 'Adenoid cystic carcinoma can recur decades after initial treatment. Lifelong surveillance is recommended. Lung metastases may be indolent and observed.',
      },
      5: {
        level: 5,
        summary: 'Precision oncology for salivary gland cancers leverages fusion-targeted therapies, AR/HER2-directed treatment for salivary duct carcinoma, and immunotherapy for high-grade tumors. Comprehensive genomic profiling should be standard for advanced/recurrent disease.',
        explanation: 'Pembrolizumab shows modest activity in salivary gland cancers (ORR ~12%), with higher responses in high-TMB or PD-L1-positive cases. Combined AR blockade (bicalutamide or enzalutamide) plus anti-HER2 therapy is under investigation for salivary duct carcinoma. Lenvatinib has activity in adenoid cystic carcinoma. Carbon-ion and neutron therapy offer potential benefits for unresectable skull-base adenoid cystic carcinoma due to higher relative biological effectiveness. Molecular tumor boards should guide therapy for rare subtypes.',
        keyTerms: [
          { term: 'carbon-ion therapy', definition: 'Heavy particle radiation with higher biological effectiveness for radioresistant tumors' },
          { term: 'comprehensive genomic profiling', definition: 'Broad molecular testing to identify actionable alterations across all genes' },
        ],
        clinicalNotes: 'ASCO/CAP recommend comprehensive genomic profiling for all advanced salivary gland cancers. Test for NTRK fusions, HER2, AR, and PD-L1 at minimum.',
      },
    },
    ['salivary gland', 'parotid', 'pleomorphic adenoma', 'adenoid cystic', 'mucoepidermoid'],
  ),
};

export default headNeckCancerContent;
