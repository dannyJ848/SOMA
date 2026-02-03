/**
 * Procedure Terminology Content
 *
 * Medical vocabulary for surgical and diagnostic procedures:
 * - Surgical procedures (by suffix type)
 * - Diagnostic procedures
 * - Imaging procedures
 * - Therapeutic interventions
 * - Endoscopic procedures
 */

import { MedicalTerm, TerminologyModule } from './types';

// ============================================================================
// SURGICAL PROCEDURES (-ECTOMY - REMOVAL)
// ============================================================================

export const ectomyProcedures: MedicalTerm[] = [
  {
    id: 'proc-appendectomy',
    term: 'Appendectomy',
    pronunciation: {
      ipa: '/ˌæpənˈdɛktəmi/',
      simplified: 'ap-en-DEK-tuh-mee',
      stressedSyllable: 3,
    },
    components: {
      root: 'appendic',
      suffix: '-ectomy',
    },
    definitions: {
      1: 'Surgery to remove your appendix',
      2: 'Surgical removal of the appendix',
      3: 'Excision of the vermiform appendix',
      4: 'Standard treatment for acute appendicitis; open or laparoscopic approach',
      5: 'Appendectomy is the most common emergency abdominal surgery; laparoscopic approach preferred when possible; interval appendectomy may follow abscess drainage',
    },
    etymology: {
      language: 'Latin/Greek',
      originalWord: 'appendix + ektome',
      originalMeaning: 'appendage + excision',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['appendicitis', 'laparoscopy', 'McBurney point'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-cholecystectomy',
    term: 'Cholecystectomy',
    pronunciation: {
      ipa: '/ˌkɒlɪsɪsˈtɛktəmi/',
      simplified: 'koh-leh-sis-TEK-tuh-mee',
      stressedSyllable: 4,
    },
    components: {
      root: 'cholecyst',
      suffix: '-ectomy',
    },
    definitions: {
      1: 'Surgery to remove your gallbladder',
      2: 'Surgical removal of the gallbladder',
      3: 'Excision of the gallbladder, typically for cholelithiasis or cholecystitis',
      4: 'Laparoscopic approach is standard; critical view of safety prevents bile duct injury',
      5: 'Cholecystectomy is the most common elective abdominal surgery; indications include symptomatic cholelithiasis, acute cholecystitis, and gallbladder polyps; intraoperative cholangiography may assess for CBD stones',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'chole + kystis + ektome',
      originalMeaning: 'bile + bladder + excision',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['cholelithiasis', 'cholecystitis', 'laparoscopy', 'ERCP'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-mastectomy',
    term: 'Mastectomy',
    pronunciation: {
      ipa: '/mæˈstɛktəmi/',
      simplified: 'mas-TEK-tuh-mee',
      stressedSyllable: 2,
    },
    components: {
      root: 'mast',
      suffix: '-ectomy',
    },
    definitions: {
      1: 'Surgery to remove a breast',
      2: 'Surgical removal of the breast',
      3: 'Excision of breast tissue, performed for cancer or risk reduction',
      4: 'Types include simple, modified radical, and skin-sparing mastectomy',
      5: 'Mastectomy options include nipple-sparing, skin-sparing, simple, and modified radical; sentinel lymph node biopsy guides axillary management; immediate or delayed reconstruction available',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'mastos + ektome',
      originalMeaning: 'breast + excision',
    },
    category: 'procedure',
    bodySystems: ['reproductive'],
    relatedTerms: ['lumpectomy', 'breast cancer', 'sentinel node biopsy', 'reconstruction'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-nephrectomy',
    term: 'Nephrectomy',
    pronunciation: {
      ipa: '/nɪˈfrɛktəmi/',
      simplified: 'neh-FREK-tuh-mee',
      stressedSyllable: 2,
    },
    components: {
      root: 'nephr',
      suffix: '-ectomy',
    },
    definitions: {
      1: 'Surgery to remove a kidney',
      2: 'Surgical removal of a kidney',
      3: 'Excision of the kidney for cancer, donation, or non-functioning organ',
      4: 'Radical includes kidney, adrenal, Gerota fascia; partial spares nephrons',
      5: 'Nephrectomy approaches include open, laparoscopic, and robotic; partial nephrectomy preferred for small renal masses to preserve renal function; living donor nephrectomy typically laparoscopic',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'nephros + ektome',
      originalMeaning: 'kidney + excision',
    },
    category: 'procedure',
    bodySystems: ['urinary'],
    relatedTerms: ['renal cell carcinoma', 'partial nephrectomy', 'kidney transplant'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-splenectomy',
    term: 'Splenectomy',
    pronunciation: {
      ipa: '/splɪˈnɛktəmi/',
      simplified: 'spleh-NEK-tuh-mee',
      stressedSyllable: 2,
    },
    components: {
      root: 'splen',
      suffix: '-ectomy',
    },
    definitions: {
      1: 'Surgery to remove your spleen',
      2: 'Surgical removal of the spleen',
      3: 'Excision of the spleen for trauma, hematologic disorders, or hypersplenism',
      4: 'Post-splenectomy sepsis risk requires vaccination and antibiotics',
      5: 'Splenectomy indications include ITP refractory to medical therapy, hereditary spherocytosis, splenic trauma, and certain lymphomas; encapsulated organism prophylaxis essential (pneumococcus, meningococcus, H. influenzae)',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'splen + ektome',
      originalMeaning: 'spleen + excision',
    },
    category: 'procedure',
    bodySystems: ['lymphatic', 'hematologic'],
    relatedTerms: ['ITP', 'hypersplenism', 'overwhelming post-splenectomy infection'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// SURGICAL PROCEDURES (-OTOMY - INCISION)
// ============================================================================

export const otomyProcedures: MedicalTerm[] = [
  {
    id: 'proc-laparotomy',
    term: 'Laparotomy',
    alternateSpellings: ['Celiotomy'],
    pronunciation: {
      ipa: '/ˌlæpəˈrɒtəmi/',
      simplified: 'lap-uh-ROT-uh-mee',
      stressedSyllable: 3,
    },
    components: {
      root: 'lapar',
      suffix: '-otomy',
    },
    definitions: {
      1: 'Surgery that opens up your belly',
      2: 'A surgical incision into the abdomen',
      3: 'Opening of the abdominal cavity for surgery or exploration',
      4: 'May be midline, transverse, or subcostal incision based on indication',
      5: 'Exploratory laparotomy indicated for unstable trauma, peritonitis, and when diagnosis unclear; increasingly replaced by laparoscopy for stable patients',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'lapara + tome',
      originalMeaning: 'flank/abdomen + cutting',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['laparoscopy', 'exploratory surgery', 'incision'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-thoracotomy',
    term: 'Thoracotomy',
    pronunciation: {
      ipa: '/ˌθɔːrəˈkɒtəmi/',
      simplified: 'thor-uh-KOT-uh-mee',
      stressedSyllable: 3,
    },
    components: {
      root: 'thorac',
      suffix: '-otomy',
    },
    definitions: {
      1: 'Surgery that opens up your chest',
      2: 'A surgical incision into the chest wall',
      3: 'Opening of the thoracic cavity for access to intrathoracic structures',
      4: 'Posterolateral approach most common; anterolateral for emergency',
      5: 'Thoracotomy provides access for lung resection, esophagectomy, and cardiac surgery; VATS (video-assisted thoracoscopic surgery) has replaced open approach for many indications',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'thorax + tome',
      originalMeaning: 'chest + cutting',
    },
    category: 'procedure',
    bodySystems: ['respiratory', 'cardiovascular'],
    relatedTerms: ['VATS', 'sternotomy', 'lobectomy', 'pneumonectomy'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-craniotomy',
    term: 'Craniotomy',
    pronunciation: {
      ipa: '/ˌkreɪniˈɒtəmi/',
      simplified: 'kray-nee-OT-uh-mee',
      stressedSyllable: 3,
    },
    components: {
      root: 'crani',
      suffix: '-otomy',
    },
    definitions: {
      1: 'Surgery that opens part of your skull',
      2: 'A surgical opening in the skull to access the brain',
      3: 'Removal of a portion of skull to access intracranial contents',
      4: 'Bone flap is replaced after surgery; craniectomy leaves defect open',
      5: 'Craniotomy approaches named by location (pterional, suboccipital); indications include tumor resection, aneurysm clipping, and hematoma evacuation; decompressive craniectomy for severe cerebral edema',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kranion + tome',
      originalMeaning: 'skull + cutting',
    },
    category: 'procedure',
    bodySystems: ['nervous'],
    relatedTerms: ['craniectomy', 'brain tumor', 'subdural hematoma', 'burr hole'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-tracheotomy',
    term: 'Tracheotomy',
    alternateSpellings: ['Tracheostomy (often used interchangeably)'],
    pronunciation: {
      ipa: '/ˌtreɪkiˈɒtəmi/',
      simplified: 'tray-kee-OT-uh-mee',
      stressedSyllable: 3,
    },
    components: {
      root: 'trache',
      suffix: '-otomy',
    },
    definitions: {
      1: 'Making an opening in the windpipe to help breathing',
      2: 'A surgical opening in the windpipe (trachea)',
      3: 'Incision into the trachea to establish airway access',
      4: 'Tracheotomy is the incision; tracheostomy is the resulting stoma',
      5: 'Tracheostomy indications include prolonged mechanical ventilation, upper airway obstruction, and secretion management; percutaneous technique common in ICU; decannulation requires capping trial',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'tracheia + tome',
      originalMeaning: 'windpipe + cutting',
    },
    category: 'procedure',
    bodySystems: ['respiratory'],
    relatedTerms: ['intubation', 'airway', 'cricothyrotomy', 'decannulation'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// SURGICAL PROCEDURES (-OSTOMY - CREATING AN OPENING)
// ============================================================================

export const ostomyProcedures: MedicalTerm[] = [
  {
    id: 'proc-colostomy',
    term: 'Colostomy',
    pronunciation: {
      ipa: '/kəˈlɒstəmi/',
      simplified: 'kuh-LOS-tuh-mee',
      stressedSyllable: 2,
    },
    components: {
      root: 'col',
      suffix: '-ostomy',
    },
    definitions: {
      1: 'Surgery that brings part of your large intestine to your belly surface',
      2: 'A surgical opening from the colon to the abdominal wall',
      3: 'Creation of an opening from colon to skin for fecal diversion',
      4: 'May be loop (temporary) or end (often permanent); named by location',
      5: 'Colostomy indications include colorectal cancer, diverticulitis, trauma, and obstruction; output consistency varies by location (ascending watery, sigmoid formed); stomal complications include retraction, prolapse, and hernia',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kolon + stoma',
      originalMeaning: 'large intestine + mouth/opening',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['ileostomy', 'stoma', 'fecal diversion', 'Hartmann procedure'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-ileostomy',
    term: 'Ileostomy',
    pronunciation: {
      ipa: '/ˌɪliˈɒstəmi/',
      simplified: 'il-ee-OS-tuh-mee',
      stressedSyllable: 3,
    },
    components: {
      root: 'ile',
      suffix: '-ostomy',
    },
    definitions: {
      1: 'Surgery that brings part of your small intestine to your belly surface',
      2: 'A surgical opening from the small intestine to the abdominal wall',
      3: 'Creation of an opening from ileum to skin for intestinal diversion',
      4: 'Output is high-volume and liquid; electrolyte monitoring essential',
      5: 'Ileostomy used in IBD, colorectal surgery, and familial polyposis; loop ileostomy protects distal anastomosis; end ileostomy may be permanent; high output can cause dehydration and electrolyte abnormalities',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'eileos + stoma',
      originalMeaning: 'ileum + mouth/opening',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['colostomy', 'stoma', 'Crohn disease', 'total proctocolectomy'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-gastrostomy',
    term: 'Gastrostomy',
    pronunciation: {
      ipa: '/ɡæˈstrɒstəmi/',
      simplified: 'gas-TROS-tuh-mee',
      stressedSyllable: 2,
    },
    components: {
      root: 'gastr',
      suffix: '-ostomy',
    },
    definitions: {
      1: 'Making an opening into your stomach from outside for feeding',
      2: 'A surgical opening from the stomach to the abdominal wall',
      3: 'Creation of an opening from stomach to skin for nutritional access',
      4: 'PEG (percutaneous endoscopic gastrostomy) is most common method',
      5: 'Gastrostomy indications include dysphagia, neurological impairment, and head/neck cancer; PEG preferred over NG for long-term feeding (>4 weeks); complications include infection, leakage, and buried bumper syndrome',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'gaster + stoma',
      originalMeaning: 'stomach + mouth/opening',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['PEG tube', 'enteral nutrition', 'jejunostomy', 'feeding tube'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-urostomy',
    term: 'Urostomy',
    pronunciation: {
      ipa: '/jʊˈrɒstəmi/',
      simplified: 'yoo-ROS-tuh-mee',
      stressedSyllable: 2,
    },
    components: {
      root: 'ur',
      suffix: '-ostomy',
    },
    definitions: {
      1: 'Surgery that creates a new way for urine to leave your body',
      2: 'A surgical opening to divert urine to the skin surface',
      3: 'Creation of an opening for urinary diversion, typically using ileal conduit',
      4: 'Ileal conduit (Bricker) is most common; continent diversions available',
      5: 'Urostomy indications include bladder cancer requiring cystectomy, neurogenic bladder, and pelvic exenteration; ileal conduit uses intestinal segment to funnel urine; neobladder provides continent alternative in select patients',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'ouron + stoma',
      originalMeaning: 'urine + mouth/opening',
    },
    category: 'procedure',
    bodySystems: ['urinary'],
    relatedTerms: ['ileal conduit', 'cystectomy', 'neobladder', 'urinary diversion'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// SURGICAL PROCEDURES (-PLASTY - REPAIR/RECONSTRUCTION)
// ============================================================================

export const plastyProcedures: MedicalTerm[] = [
  {
    id: 'proc-angioplasty',
    term: 'Angioplasty',
    pronunciation: {
      ipa: '/ˈændʒioʊˌplæsti/',
      simplified: 'AN-jee-oh-plas-tee',
      stressedSyllable: 1,
    },
    components: {
      root: 'angi',
      suffix: '-plasty',
    },
    definitions: {
      1: 'Using a balloon to open a blocked blood vessel',
      2: 'A procedure to widen narrowed blood vessels',
      3: 'Endovascular dilation of stenotic vessels using balloon catheter',
      4: 'Often combined with stent placement; PCI for coronary, PTA for peripheral',
      5: 'Angioplasty disrupts plaque and stretches vessel; drug-eluting stents reduce restenosis; used in coronary, peripheral, renal, and carotid disease; antiplatelet therapy essential post-procedure',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'angeion + plassein',
      originalMeaning: 'vessel + to mold',
    },
    category: 'procedure',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['stent', 'PCI', 'cardiac catheterization', 'atherosclerosis'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-arthroplasty',
    term: 'Arthroplasty',
    pronunciation: {
      ipa: '/ˈɑːrθroʊˌplæsti/',
      simplified: 'AR-throh-plas-tee',
      stressedSyllable: 1,
    },
    components: {
      root: 'arthr',
      suffix: '-plasty',
    },
    definitions: {
      1: 'Surgery to replace or repair a damaged joint',
      2: 'Surgical repair or replacement of a joint',
      3: 'Reconstruction or replacement of a joint, typically with prosthesis',
      4: 'Total (THA, TKA) replaces entire joint; hemi- replaces one component',
      5: 'Arthroplasty indications include severe osteoarthritis, rheumatoid arthritis, and fracture; bearing surfaces include metal-on-polyethylene, ceramic; complications include infection, loosening, dislocation, and VTE',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'arthron + plassein',
      originalMeaning: 'joint + to mold',
    },
    category: 'procedure',
    bodySystems: ['musculoskeletal'],
    relatedTerms: ['joint replacement', 'total hip', 'total knee', 'prosthesis'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-rhinoplasty',
    term: 'Rhinoplasty',
    pronunciation: {
      ipa: '/ˈraɪnoʊˌplæsti/',
      simplified: 'RY-noh-plas-tee',
      stressedSyllable: 1,
    },
    components: {
      root: 'rhin',
      suffix: '-plasty',
    },
    definitions: {
      1: 'Surgery to change the shape of your nose',
      2: 'Surgical reshaping of the nose',
      3: 'Surgical reconstruction or modification of the nose',
      4: 'May be cosmetic or functional (septoplasty for deviation)',
      5: 'Rhinoplasty may be open (external incision) or closed (endonasal); functional rhinoplasty addresses nasal obstruction; grafts may use septal, ear, or rib cartilage; revision rates relatively high',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'rhis + plassein',
      originalMeaning: 'nose + to mold',
    },
    category: 'procedure',
    bodySystems: ['respiratory'],
    relatedTerms: ['septoplasty', 'nasal reconstruction', 'cosmetic surgery'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// ENDOSCOPIC PROCEDURES (-SCOPY - VISUAL EXAMINATION)
// ============================================================================

export const scopyProcedures: MedicalTerm[] = [
  {
    id: 'proc-colonoscopy',
    term: 'Colonoscopy',
    pronunciation: {
      ipa: '/ˌkɒləˈnɒskəpi/',
      simplified: 'kol-uh-NOS-kuh-pee',
      stressedSyllable: 3,
    },
    components: {
      root: 'colon',
      suffix: '-oscopy',
    },
    definitions: {
      1: 'Using a camera to look inside your large intestine',
      2: 'Visual examination of the colon using a flexible camera',
      3: 'Endoscopic examination of the colon and terminal ileum',
      4: 'Used for screening, diagnosis, and therapeutic interventions',
      5: 'Colonoscopy is the gold standard for colorectal cancer screening; begins age 45; therapeutic uses include polypectomy, hemostasis, and stricture dilation; complications include perforation and bleeding',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kolon + skopein',
      originalMeaning: 'large intestine + to look',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['polypectomy', 'colorectal cancer screening', 'sigmoidoscopy'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-bronchoscopy',
    term: 'Bronchoscopy',
    pronunciation: {
      ipa: '/brɒŋˈkɒskəpi/',
      simplified: 'brong-KOS-kuh-pee',
      stressedSyllable: 2,
    },
    components: {
      root: 'bronch',
      suffix: '-oscopy',
    },
    definitions: {
      1: 'Using a camera to look inside your airways',
      2: 'Visual examination of the airways using a scope',
      3: 'Endoscopic visualization of the tracheobronchial tree',
      4: 'Flexible for diagnosis; rigid for foreign body and massive hemoptysis',
      5: 'Bronchoscopy allows BAL, biopsy, and therapeutic interventions; endobronchial ultrasound (EBUS) stages lung cancer; navigational bronchoscopy accesses peripheral lesions; rigid bronchoscopy for airway obstruction',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'bronchos + skopein',
      originalMeaning: 'windpipe + to look',
    },
    category: 'procedure',
    bodySystems: ['respiratory'],
    relatedTerms: ['BAL', 'EBUS', 'lung biopsy', 'airway management'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-cystoscopy',
    term: 'Cystoscopy',
    pronunciation: {
      ipa: '/sɪsˈtɒskəpi/',
      simplified: 'sis-TOS-kuh-pee',
      stressedSyllable: 2,
    },
    components: {
      root: 'cyst',
      suffix: '-oscopy',
    },
    definitions: {
      1: 'Using a camera to look inside your bladder',
      2: 'Visual examination of the bladder using a scope',
      3: 'Endoscopic visualization of the urethra and bladder',
      4: 'Flexible for office diagnosis; rigid for therapeutic procedures',
      5: 'Cystoscopy indications include hematuria, recurrent UTI, and bladder cancer surveillance; allows biopsy, resection (TURBT), and stent placement; blue light cystoscopy improves tumor detection',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kystis + skopein',
      originalMeaning: 'bladder + to look',
    },
    category: 'procedure',
    bodySystems: ['urinary'],
    relatedTerms: ['TURBT', 'bladder cancer', 'ureteral stent', 'hematuria'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-arthroscopy',
    term: 'Arthroscopy',
    pronunciation: {
      ipa: '/ɑːrˈθrɒskəpi/',
      simplified: 'ar-THROS-kuh-pee',
      stressedSyllable: 2,
    },
    components: {
      root: 'arthr',
      suffix: '-oscopy',
    },
    definitions: {
      1: 'Using a camera to look inside a joint',
      2: 'Visual examination of a joint using a small camera',
      3: 'Endoscopic visualization and surgery of joint structures',
      4: 'Common for knee (meniscus, ACL) and shoulder (rotator cuff)',
      5: 'Arthroscopy allows diagnosis and treatment with minimal incision; knee arthroscopy most common orthopedic procedure; indications include meniscal tears, loose bodies, and ligament reconstruction',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'arthron + skopein',
      originalMeaning: 'joint + to look',
    },
    category: 'procedure',
    bodySystems: ['musculoskeletal'],
    relatedTerms: ['meniscectomy', 'ACL reconstruction', 'rotator cuff repair'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-laparoscopy',
    term: 'Laparoscopy',
    pronunciation: {
      ipa: '/ˌlæpəˈrɒskəpi/',
      simplified: 'lap-uh-ROS-kuh-pee',
      stressedSyllable: 3,
    },
    components: {
      root: 'lapar',
      suffix: '-oscopy',
    },
    definitions: {
      1: 'Using small cameras and tools to do surgery in your belly',
      2: 'Minimally invasive surgery using a camera in the abdomen',
      3: 'Endoscopic visualization and surgery of the abdominal cavity',
      4: 'Requires pneumoperitoneum; ports placed for instruments',
      5: 'Laparoscopy has largely replaced open surgery for cholecystectomy, appendectomy, and many other procedures; advantages include less pain, shorter recovery; robotic platforms extend capabilities',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'lapara + skopein',
      originalMeaning: 'flank + to look',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['minimally invasive surgery', 'robotic surgery', 'trocar'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// DIAGNOSTIC/IMAGING PROCEDURES
// ============================================================================

export const imagingProcedures: MedicalTerm[] = [
  {
    id: 'proc-echocardiography',
    term: 'Echocardiography',
    pronunciation: {
      ipa: '/ˌekoʊkɑːrdiˈɒɡrəfi/',
      simplified: 'ek-oh-kar-dee-OG-ruh-fee',
      stressedSyllable: 5,
    },
    components: {
      root: 'echo + cardi/o',
      suffix: '-graphy',
    },
    definitions: {
      1: 'Using sound waves to make pictures of your heart',
      2: 'Ultrasound imaging of the heart',
      3: 'Diagnostic imaging of cardiac structure and function using ultrasound',
      4: 'TTE (transthoracic) is standard; TEE (transesophageal) for better visualization',
      5: 'Echocardiography assesses chamber size, wall motion, valve function, and hemodynamics; Doppler measures flow velocities; strain imaging detects subclinical dysfunction; stress echo evaluates ischemia',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'echo + kardia + graphein',
      originalMeaning: 'sound + heart + to write',
    },
    category: 'procedure',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['TTE', 'TEE', 'ejection fraction', 'Doppler', 'strain'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-angiography',
    term: 'Angiography',
    pronunciation: {
      ipa: '/ˌændʒiˈɒɡrəfi/',
      simplified: 'an-jee-OG-ruh-fee',
      stressedSyllable: 3,
    },
    components: {
      root: 'angi',
      suffix: '-graphy',
    },
    definitions: {
      1: 'Taking pictures of blood vessels using dye',
      2: 'X-ray imaging of blood vessels using contrast dye',
      3: 'Radiographic visualization of vessels after contrast injection',
      4: 'Conventional (catheter-based), CTA, or MRA modalities available',
      5: 'Catheter angiography remains gold standard for coronary and cerebral vessels; provides intervention capability; CTA/MRA increasingly used for diagnosis; risks include contrast nephropathy and access site complications',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'angeion + graphein',
      originalMeaning: 'vessel + to write',
    },
    category: 'procedure',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['CTA', 'MRA', 'cardiac catheterization', 'contrast'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-biopsy',
    term: 'Biopsy',
    pronunciation: {
      ipa: '/ˈbaɪɒpsi/',
      simplified: 'BY-op-see',
      stressedSyllable: 1,
    },
    components: {
      root: 'bi/o + ops',
      suffix: '-y',
    },
    definitions: {
      1: 'Taking a small piece of tissue to look at under a microscope',
      2: 'Removing tissue sample for examination',
      3: 'Sampling of tissue for histopathological examination',
      4: 'Methods include needle (FNA, core), incisional, and excisional biopsy',
      5: 'Biopsy provides tissue diagnosis; FNA for cytology, core for architecture; image guidance (US, CT) for deep lesions; excisional both diagnostic and therapeutic for small lesions',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'bios + opsis',
      originalMeaning: 'life + viewing',
    },
    category: 'procedure',
    bodySystems: ['general'],
    relatedTerms: ['FNA', 'core biopsy', 'pathology', 'histology'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-paracentesis',
    term: 'Paracentesis',
    pronunciation: {
      ipa: '/ˌpærəsɛnˈtiːsɪs/',
      simplified: 'pair-uh-sen-TEE-sis',
      stressedSyllable: 4,
    },
    components: {
      prefix: 'para-',
      root: 'centes',
      suffix: '-is',
    },
    definitions: {
      1: 'Using a needle to drain fluid from your belly',
      2: 'Removing fluid from the abdominal cavity with a needle',
      3: 'Needle aspiration of peritoneal fluid for diagnosis or treatment',
      4: 'Diagnostic (cell count, albumin, culture) and therapeutic (large-volume)',
      5: 'Paracentesis indicated for new ascites, suspected SBP, and symptomatic relief; SAAG >= 1.1 indicates portal hypertension; large-volume (>5L) requires albumin replacement to prevent post-paracentesis circulatory dysfunction',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'para + kentesis',
      originalMeaning: 'beside + puncture',
    },
    category: 'procedure',
    bodySystems: ['gastrointestinal'],
    relatedTerms: ['ascites', 'SBP', 'SAAG', 'cirrhosis'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-thoracentesis',
    term: 'Thoracentesis',
    pronunciation: {
      ipa: '/ˌθɔːrəsɛnˈtiːsɪs/',
      simplified: 'thor-uh-sen-TEE-sis',
      stressedSyllable: 4,
    },
    components: {
      root: 'thorac',
      suffix: '-centesis',
    },
    definitions: {
      1: 'Using a needle to drain fluid from around your lung',
      2: 'Removing fluid from around the lung with a needle',
      3: 'Needle aspiration of pleural fluid for diagnosis or treatment',
      4: 'Diagnostic (Light criteria differentiate exudate/transudate) and therapeutic',
      5: 'Thoracentesis indicated for new pleural effusion and respiratory distress from effusion; Light criteria classify effusion; transudates suggest heart failure/cirrhosis; exudates suggest infection/malignancy/inflammation',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'thorax + kentesis',
      originalMeaning: 'chest + puncture',
    },
    category: 'procedure',
    bodySystems: ['respiratory'],
    relatedTerms: ['pleural effusion', 'Light criteria', 'empyema', 'chest tube'],
    usageContext: 'clinical',
  },
  {
    id: 'proc-lumbar-puncture',
    term: 'Lumbar Puncture',
    alternateSpellings: ['Spinal Tap'],
    pronunciation: {
      ipa: '/ˈlʌmbər ˈpʌŋktʃər/',
      simplified: 'LUM-bar PUNK-cher',
      stressedSyllable: 1,
    },
    components: {
      root: 'lumbar + punctur',
    },
    definitions: {
      1: 'Using a needle in your lower back to get spinal fluid',
      2: 'Inserting a needle into the spinal canal to obtain cerebrospinal fluid',
      3: 'Needle aspiration of CSF from the subarachnoid space',
      4: 'Performed at L3-L4 or L4-L5 interspace; measures opening pressure',
      5: 'LP indicated for meningitis, SAH, MS, and IIH diagnosis; contraindicated with increased ICP and coagulopathy; post-LP headache common; blood patch for persistent PDPH',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'lumbus + punctura',
      originalMeaning: 'loin + pricking',
    },
    category: 'procedure',
    bodySystems: ['nervous'],
    relatedTerms: ['CSF analysis', 'meningitis', 'opening pressure', 'myelography'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const procedureTerminologyModule: TerminologyModule = {
  id: 'procedure-terminology',
  name: 'Procedure Terminology',
  description: 'Medical vocabulary for surgical and diagnostic procedures including excision, incision, ostomy creation, reconstruction, endoscopy, and diagnostic/imaging procedures',
  terms: [
    ...ectomyProcedures,
    ...otomyProcedures,
    ...ostomyProcedures,
    ...plastyProcedures,
    ...scopyProcedures,
    ...imagingProcedures,
  ],
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
};

// Individual procedure collections are already exported above via `export const`

export default procedureTerminologyModule;
