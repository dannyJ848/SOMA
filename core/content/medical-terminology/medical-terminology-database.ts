/**
 * Medical Terminology Database
 *
 * Comprehensive database of ~50 medical terminology entries for the SOMA
 * medical education app. Covers prefixes, suffixes, roots, anatomical terms,
 * diagnostic terms, procedures, pharmacological terms, and abbreviations.
 *
 * Includes utility functions for searching and filtering by category.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TermCategory =
  | 'prefix'
  | 'suffix'
  | 'root'
  | 'anatomical'
  | 'diagnostic'
  | 'procedure'
  | 'pharmacological'
  | 'abbreviation';

export interface MedicalTermEntry {
  id: string;
  term: string;
  termEs: string;
  category: TermCategory;
  meaning: string;
  etymology: string;
  examples: string[];
  relatedTerms: string[];
  pronunciation: string;
  patientExplanation: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const t = (
  id: string,
  term: string,
  termEs: string,
  category: TermCategory,
  meaning: string,
  etymology: string,
  examples: string[],
  relatedTerms: string[],
  pronunciation: string,
  patientExplanation: string,
): MedicalTermEntry => ({
  id,
  term,
  termEs,
  category,
  meaning,
  etymology,
  examples,
  relatedTerms,
  pronunciation,
  patientExplanation,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const MEDICAL_TERMINOLOGY_ENTRIES: Record<string, MedicalTermEntry> = {

  // ===== PREFIXES (7) =====================================================

  'prefix-hyper': t(
    'prefix-hyper',
    'hyper-',
    'hiper-',
    'prefix',
    'Above normal; excessive',
    'Greek "hyper" meaning over or above',
    ['hypertension', 'hyperglycemia', 'hyperthyroidism'],
    ['hypo-', 'supra-'],
    'HY-per',
    'This prefix means something is higher or more than normal. For example, hypertension means your blood pressure is higher than it should be.',
  ),

  'prefix-hypo': t(
    'prefix-hypo',
    'hypo-',
    'hipo-',
    'prefix',
    'Below normal; deficient',
    'Greek "hypo" meaning under or below',
    ['hypotension', 'hypoglycemia', 'hypothyroidism'],
    ['hyper-', 'sub-'],
    'HY-poh',
    'This prefix means something is lower or less than normal. For example, hypoglycemia means your blood sugar is lower than it should be.',
  ),

  'prefix-tachy': t(
    'prefix-tachy',
    'tachy-',
    'taqui-',
    'prefix',
    'Fast; rapid',
    'Greek "tachys" meaning swift',
    ['tachycardia', 'tachypnea'],
    ['brady-'],
    'TAK-ee',
    'This prefix means fast. Tachycardia means your heart is beating faster than normal.',
  ),

  'prefix-brady': t(
    'prefix-brady',
    'brady-',
    'bradi-',
    'prefix',
    'Slow',
    'Greek "bradys" meaning slow',
    ['bradycardia', 'bradypnea', 'bradykinesia'],
    ['tachy-'],
    'BRAY-dee',
    'This prefix means slow. Bradycardia means your heart is beating slower than normal.',
  ),

  'prefix-dys': t(
    'prefix-dys',
    'dys-',
    'dis-',
    'prefix',
    'Difficult; painful; abnormal',
    'Greek "dys" meaning bad or difficult',
    ['dyspnea', 'dysphagia', 'dysuria'],
    ['eu-'],
    'DIS',
    'This prefix means something is difficult or not working properly. Dyspnea means having difficulty breathing.',
  ),

  'prefix-poly': t(
    'prefix-poly',
    'poly-',
    'poli-',
    'prefix',
    'Many; excessive',
    'Greek "polys" meaning many',
    ['polydipsia', 'polyuria', 'polycythemia'],
    ['oligo-', 'mono-'],
    'PAHL-ee',
    'This prefix means many or too much. Polyuria means producing an unusually large amount of urine.',
  ),

  'prefix-anti': t(
    'prefix-anti',
    'anti-',
    'anti-',
    'prefix',
    'Against; opposing',
    'Greek "anti" meaning against',
    ['antibiotic', 'anticoagulant', 'antihypertensive'],
    ['pro-'],
    'AN-tee',
    'This prefix means against or working to counteract something. An antibiotic works against bacteria to fight infection.',
  ),

  // ===== SUFFIXES (7) =====================================================

  'suffix-itis': t(
    'suffix-itis',
    '-itis',
    '-itis',
    'suffix',
    'Inflammation',
    'Greek "-itis" meaning inflammation',
    ['arthritis', 'bronchitis', 'appendicitis', 'gastritis'],
    ['-osis', '-ectomy'],
    'EYE-tis',
    'This ending means inflammation or swelling. Arthritis means inflammation of the joints.',
  ),

  'suffix-ectomy': t(
    'suffix-ectomy',
    '-ectomy',
    '-ectomia',
    'suffix',
    'Surgical removal',
    'Greek "ektome" meaning excision or cutting out',
    ['appendectomy', 'cholecystectomy', 'mastectomy', 'tonsillectomy'],
    ['-otomy', '-ostomy', '-plasty'],
    'EK-toh-mee',
    'This ending means surgical removal. An appendectomy is surgery to remove the appendix.',
  ),

  'suffix-osis': t(
    'suffix-osis',
    '-osis',
    '-osis',
    'suffix',
    'Abnormal condition or disease',
    'Greek "-osis" meaning condition or process',
    ['stenosis', 'fibrosis', 'cirrhosis', 'thrombosis'],
    ['-itis', '-iasis'],
    'OH-sis',
    'This ending means an abnormal condition. Stenosis means an abnormal narrowing of a passage in the body.',
  ),

  'suffix-emia': t(
    'suffix-emia',
    '-emia',
    '-emia',
    'suffix',
    'Blood condition',
    'Greek "haima" meaning blood',
    ['anemia', 'septicemia', 'hyperglycemia', 'leukemia'],
    ['-uria', '-osis'],
    'EE-mee-ah',
    'This ending refers to a condition of the blood. Anemia means you do not have enough healthy red blood cells.',
  ),

  'suffix-algia': t(
    'suffix-algia',
    '-algia',
    '-algia',
    'suffix',
    'Pain',
    'Greek "algos" meaning pain',
    ['neuralgia', 'myalgia', 'arthralgia', 'cephalgia'],
    ['-dynia', '-itis'],
    'AL-jee-ah',
    'This ending means pain. Neuralgia means nerve pain, and myalgia means muscle pain.',
  ),

  'suffix-plasty': t(
    'suffix-plasty',
    '-plasty',
    '-plastia',
    'suffix',
    'Surgical repair or reconstruction',
    'Greek "plassein" meaning to mold or form',
    ['rhinoplasty', 'angioplasty', 'arthroplasty'],
    ['-ectomy', '-otomy'],
    'PLAS-tee',
    'This ending means surgical repair or reshaping. Angioplasty is a procedure to open blocked blood vessels.',
  ),

  'suffix-scopy': t(
    'suffix-scopy',
    '-scopy',
    '-scopia',
    'suffix',
    'Visual examination',
    'Greek "skopein" meaning to look or examine',
    ['endoscopy', 'colonoscopy', 'arthroscopy', 'bronchoscopy'],
    ['-graphy', '-gram'],
    'SKOH-pee',
    'This ending means looking inside with a special instrument. A colonoscopy lets the doctor see inside your colon.',
  ),

  // ===== ROOTS (7) ========================================================

  'root-cardi': t(
    'root-cardi',
    'cardi/o',
    'cardi/o',
    'root',
    'Heart',
    'Greek "kardia" meaning heart',
    ['cardiology', 'cardiomyopathy', 'electrocardiogram', 'tachycardia'],
    ['angi/o', 'hem/o', 'vas/o'],
    'KAR-dee-oh',
    'This root word means heart. Cardiology is the medical specialty focused on the heart.',
  ),

  'root-nephr': t(
    'root-nephr',
    'nephr/o',
    'nefr/o',
    'root',
    'Kidney',
    'Greek "nephros" meaning kidney',
    ['nephrology', 'nephritis', 'nephrectomy', 'nephropathy'],
    ['ren/o', 'ur/o'],
    'NEF-roh',
    'This root word means kidney. A nephrologist is a doctor who specializes in kidney diseases.',
  ),

  'root-hepat': t(
    'root-hepat',
    'hepat/o',
    'hepat/o',
    'root',
    'Liver',
    'Greek "hepar" meaning liver',
    ['hepatitis', 'hepatomegaly', 'hepatology', 'hepatocyte'],
    ['chol/e', 'bili'],
    'heh-PAT-oh',
    'This root word means liver. Hepatitis is inflammation of the liver.',
  ),

  'root-neur': t(
    'root-neur',
    'neur/o',
    'neur/o',
    'root',
    'Nerve; nervous system',
    'Greek "neuron" meaning nerve or sinew',
    ['neurology', 'neuropathy', 'neurosurgery', 'neuritis'],
    ['encephal/o', 'myel/o'],
    'NOOR-oh',
    'This root word means nerve or nervous system. Neurology is the study and treatment of nervous system disorders.',
  ),

  'root-oste': t(
    'root-oste',
    'oste/o',
    'oste/o',
    'root',
    'Bone',
    'Greek "osteon" meaning bone',
    ['osteoporosis', 'osteomyelitis', 'osteoarthritis', 'osteocyte'],
    ['arthr/o', 'chondr/o', 'my/o'],
    'AHS-tee-oh',
    'This root word means bone. Osteoporosis is a condition where bones become weak and brittle.',
  ),

  'root-pneum': t(
    'root-pneum',
    'pneum/o',
    'neum/o',
    'root',
    'Lung; air',
    'Greek "pneuma" meaning breath, air, or lung',
    ['pneumonia', 'pneumothorax', 'pneumonectomy'],
    ['pulmon/o', 'bronch/o'],
    'NOO-moh',
    'This root word means lung or air. Pneumonia is an infection that inflames the air sacs in the lungs.',
  ),

  'root-derm': t(
    'root-derm',
    'derm/o',
    'derm/o',
    'root',
    'Skin',
    'Greek "derma" meaning skin',
    ['dermatology', 'dermatitis', 'epidermis', 'hypodermic'],
    ['cutane/o', 'integument'],
    'DER-moh',
    'This root word means skin. Dermatology is the branch of medicine dealing with skin conditions.',
  ),

  // ===== ANATOMICAL (6) ===================================================

  'anatomical-anterior': t(
    'anatomical-anterior',
    'anterior',
    'anterior',
    'anatomical',
    'Toward the front of the body',
    'Latin "anterior" meaning before or in front',
    ['anterior cruciate ligament', 'anterior pituitary', 'anteroposterior view'],
    ['posterior', 'ventral'],
    'an-TEER-ee-or',
    'This term means the front side of your body. If a doctor says a structure is anterior, it means it is closer to the front.',
  ),

  'anatomical-posterior': t(
    'anatomical-posterior',
    'posterior',
    'posterior',
    'anatomical',
    'Toward the back of the body',
    'Latin "posterior" meaning behind or after',
    ['posterior cruciate ligament', 'posterior fossa', 'posteroanterior view'],
    ['anterior', 'dorsal'],
    'pos-TEER-ee-or',
    'This term means the back side of your body. If something is posterior, it is closer to your back.',
  ),

  'anatomical-lateral': t(
    'anatomical-lateral',
    'lateral',
    'lateral',
    'anatomical',
    'Toward the side of the body; away from the midline',
    'Latin "lateralis" meaning belonging to the side',
    ['lateral meniscus', 'lateral epicondylitis', 'lateral ventricle'],
    ['medial', 'bilateral', 'unilateral'],
    'LAT-er-al',
    'This term means toward the side, away from the center of your body. Your ears are lateral to your nose.',
  ),

  'anatomical-medial': t(
    'anatomical-medial',
    'medial',
    'medial',
    'anatomical',
    'Toward the midline of the body',
    'Latin "medialis" meaning of the middle',
    ['medial collateral ligament', 'medial meniscus', 'medial epicondyle'],
    ['lateral', 'median'],
    'MEE-dee-al',
    'This term means toward the middle of your body. Your nose is medial to your ears.',
  ),

  'anatomical-supine': t(
    'anatomical-supine',
    'supine',
    'supino',
    'anatomical',
    'Lying face up',
    'Latin "supinus" meaning lying on the back',
    ['supine position for surgery', 'supine hypotension syndrome'],
    ['prone', 'lateral decubitus'],
    'soo-PINE',
    'This means lying on your back with your face up. Doctors may ask you to lie supine during certain exams or procedures.',
  ),

  'anatomical-proximal': t(
    'anatomical-proximal',
    'proximal',
    'proximal',
    'anatomical',
    'Closer to the point of attachment or origin',
    'Latin "proximus" meaning nearest',
    ['proximal phalanx', 'proximal interphalangeal joint', 'proximal tubule'],
    ['distal'],
    'PROK-sih-mal',
    'This term means closer to where a limb attaches to the body. Your elbow is proximal to your hand, meaning it is closer to your shoulder.',
  ),

  // ===== DIAGNOSTIC (6) ===================================================

  'diagnostic-mri': t(
    'diagnostic-mri',
    'MRI',
    'resonancia magnetica',
    'diagnostic',
    'Magnetic Resonance Imaging; uses magnetic fields and radio waves to create detailed images of organs and tissues',
    'Modern English acronym; magnetic resonance first described in the 1940s',
    ['brain MRI', 'cardiac MRI', 'MRI with contrast'],
    ['CT scan', 'ultrasound', 'X-ray'],
    'em-ar-EYE',
    'An MRI is a scan that uses magnets and radio waves to take very detailed pictures of the inside of your body without using radiation.',
  ),

  'diagnostic-biopsy': t(
    'diagnostic-biopsy',
    'biopsy',
    'biopsia',
    'diagnostic',
    'Removal and examination of tissue from a living body to discover the presence, cause, or extent of a disease',
    'Greek "bios" (life) + "opsis" (sight)',
    ['needle biopsy', 'skin biopsy', 'bone marrow biopsy', 'liver biopsy'],
    ['histology', 'cytology', 'pathology'],
    'BY-op-see',
    'A biopsy is when a small piece of tissue is taken from your body and looked at under a microscope to check for disease such as cancer.',
  ),

  'diagnostic-auscultation': t(
    'diagnostic-auscultation',
    'auscultation',
    'auscultacion',
    'diagnostic',
    'Listening to the internal sounds of the body, typically with a stethoscope',
    'Latin "auscultare" meaning to listen',
    ['cardiac auscultation', 'pulmonary auscultation', 'abdominal auscultation'],
    ['palpation', 'percussion', 'inspection'],
    'aw-skul-TAY-shun',
    'Auscultation is when your doctor listens to sounds inside your body using a stethoscope, such as your heartbeat or breathing.',
  ),

  'diagnostic-echocardiogram': t(
    'diagnostic-echocardiogram',
    'echocardiogram',
    'ecocardiograma',
    'diagnostic',
    'Ultrasound imaging of the heart to evaluate structure and function',
    'Greek "echo" (reflected sound) + "kardia" (heart) + "gramma" (record)',
    ['transthoracic echocardiogram', 'transesophageal echocardiogram', 'stress echocardiogram'],
    ['electrocardiogram', 'cardiac catheterization'],
    'ek-oh-KAR-dee-oh-gram',
    'An echocardiogram is an ultrasound of your heart. It uses sound waves to create a moving picture showing how your heart pumps blood.',
  ),

  'diagnostic-cbc': t(
    'diagnostic-cbc',
    'CBC',
    'hemograma completo',
    'diagnostic',
    'Complete Blood Count; a blood test measuring red blood cells, white blood cells, and platelets',
    'Modern English acronym for Complete Blood Count',
    ['CBC with differential', 'routine CBC', 'serial CBC monitoring'],
    ['BMP', 'CMP', 'coagulation panel'],
    'see-bee-SEE',
    'A CBC is a common blood test that counts your blood cells. It helps your doctor check for conditions like infection, anemia, or clotting problems.',
  ),

  'diagnostic-palpation': t(
    'diagnostic-palpation',
    'palpation',
    'palpacion',
    'diagnostic',
    'Physical examination technique using the hands and fingers to feel body structures beneath the skin',
    'Latin "palpare" meaning to touch or feel softly',
    ['abdominal palpation', 'thyroid palpation', 'lymph node palpation'],
    ['auscultation', 'percussion', 'inspection'],
    'pal-PAY-shun',
    'Palpation is when your doctor gently presses on parts of your body with their hands to feel for anything unusual, like swelling or tenderness.',
  ),

  // ===== PROCEDURE (6) ====================================================

  'procedure-laparoscopy': t(
    'procedure-laparoscopy',
    'laparoscopy',
    'laparoscopia',
    'procedure',
    'Minimally invasive surgery using small incisions and a camera to visualize the abdominal or pelvic cavity',
    'Greek "lapara" (flank) + "skopein" (to view)',
    ['diagnostic laparoscopy', 'laparoscopic cholecystectomy', 'laparoscopic appendectomy'],
    ['laparotomy', 'thoracoscopy', 'endoscopy'],
    'lap-ah-ROS-koh-pee',
    'Laparoscopy is a type of surgery done through very small cuts using a tiny camera. It usually means less pain and faster recovery than traditional surgery.',
  ),

  'procedure-intubation': t(
    'procedure-intubation',
    'intubation',
    'intubacion',
    'procedure',
    'Insertion of a tube into the trachea to maintain an open airway or deliver mechanical ventilation',
    'Latin "in" (into) + "tubus" (tube)',
    ['endotracheal intubation', 'rapid sequence intubation', 'nasotracheal intubation'],
    ['extubation', 'tracheostomy', 'ventilation'],
    'in-too-BAY-shun',
    'Intubation is when a breathing tube is placed into your windpipe to help you breathe, usually during surgery or if you are very sick.',
  ),

  'procedure-catheterization': t(
    'procedure-catheterization',
    'catheterization',
    'cateterizacion',
    'procedure',
    'Insertion of a thin flexible tube into a body cavity, duct, or vessel for drainage, injection, or diagnostic purposes',
    'Greek "katheter" meaning something let down or inserted',
    ['urinary catheterization', 'cardiac catheterization', 'central venous catheterization'],
    ['cannulation', 'intubation'],
    'kath-eh-ter-ih-ZAY-shun',
    'Catheterization is when a thin, flexible tube called a catheter is placed into your body. It can drain fluids, deliver medicine, or help doctors see inside your blood vessels.',
  ),

  'procedure-dialysis': t(
    'procedure-dialysis',
    'dialysis',
    'dialisis',
    'procedure',
    'Medical procedure that filters waste products and excess fluid from the blood when the kidneys cannot function adequately',
    'Greek "dialysis" meaning dissolution or separation',
    ['hemodialysis', 'peritoneal dialysis', 'continuous renal replacement therapy'],
    ['transplant', 'nephrology', 'filtration'],
    'dye-AL-ih-sis',
    'Dialysis is a treatment that does the work of your kidneys when they can no longer clean your blood properly. A machine filters waste and extra fluid from your blood.',
  ),

  'procedure-angioplasty': t(
    'procedure-angioplasty',
    'angioplasty',
    'angioplastia',
    'procedure',
    'Procedure to widen narrowed or obstructed blood vessels, typically using a balloon catheter',
    'Greek "angeion" (vessel) + "plassein" (to mold)',
    ['coronary angioplasty', 'balloon angioplasty', 'angioplasty with stent placement'],
    ['atherectomy', 'bypass surgery', 'stent'],
    'AN-jee-oh-plas-tee',
    'Angioplasty is a procedure to open up blocked or narrowed blood vessels. A tiny balloon is inflated inside the vessel to widen it and restore blood flow.',
  ),

  'procedure-debridement': t(
    'procedure-debridement',
    'debridement',
    'desbridamiento',
    'procedure',
    'Removal of damaged, dead, or infected tissue to promote healing of remaining healthy tissue',
    'French "debrider" meaning to unbridle or remove constraints',
    ['wound debridement', 'surgical debridement', 'enzymatic debridement'],
    ['irrigation', 'wound care', 'necrosis'],
    'deh-BREED-ment',
    'Debridement is the removal of dead or damaged tissue from a wound so the healthy tissue underneath can heal properly.',
  ),

  // ===== PHARMACOLOGICAL (6) ==============================================

  'pharma-analgesic': t(
    'pharma-analgesic',
    'analgesic',
    'analgesico',
    'pharmacological',
    'A medication that relieves pain without causing loss of consciousness',
    'Greek "an" (without) + "algesis" (sense of pain)',
    ['acetaminophen', 'ibuprofen', 'opioid analgesics', 'topical analgesics'],
    ['anesthetic', 'anti-inflammatory', 'antipyretic'],
    'an-al-JEE-zik',
    'An analgesic is a pain reliever. Common examples include ibuprofen and acetaminophen. They help reduce pain without putting you to sleep.',
  ),

  'pharma-antibiotic': t(
    'pharma-antibiotic',
    'antibiotic',
    'antibiotico',
    'pharmacological',
    'A substance that kills or inhibits the growth of bacteria',
    'Greek "anti" (against) + "bios" (life)',
    ['amoxicillin', 'azithromycin', 'ciprofloxacin', 'broad-spectrum antibiotics'],
    ['antiviral', 'antifungal', 'antimicrobial'],
    'an-tee-by-OT-ik',
    'An antibiotic is a medicine that fights bacterial infections. It works by killing bacteria or stopping them from multiplying. Antibiotics do not work against viruses.',
  ),

  'pharma-anticoagulant': t(
    'pharma-anticoagulant',
    'anticoagulant',
    'anticoagulante',
    'pharmacological',
    'A medication that prevents or reduces blood clot formation',
    'Greek "anti" (against) + Latin "coagulare" (to curdle)',
    ['warfarin', 'heparin', 'apixaban', 'rivaroxaban'],
    ['antiplatelet', 'thrombolytic', 'coagulant'],
    'an-tee-koh-AG-yoo-lant',
    'An anticoagulant is a blood thinner. It helps prevent blood clots from forming, which can reduce the risk of stroke or heart attack.',
  ),

  'pharma-corticosteroid': t(
    'pharma-corticosteroid',
    'corticosteroid',
    'corticosteroide',
    'pharmacological',
    'A class of steroid hormones produced by the adrenal cortex, or synthetic equivalents used to reduce inflammation',
    'Latin "cortex" (bark/outer layer) + Greek "stereos" (solid)',
    ['prednisone', 'dexamethasone', 'hydrocortisone', 'inhaled corticosteroids'],
    ['NSAID', 'immunosuppressant', 'mineralocorticoid'],
    'kor-tih-koh-STEER-oyd',
    'A corticosteroid is a powerful anti-inflammatory medicine. It mimics a hormone your body makes naturally and is used to treat conditions like asthma, arthritis, and allergic reactions.',
  ),

  'pharma-bronchodilator': t(
    'pharma-bronchodilator',
    'bronchodilator',
    'broncodilatador',
    'pharmacological',
    'A medication that relaxes and widens the airways in the lungs to improve breathing',
    'Greek "bronchos" (windpipe) + Latin "dilatare" (to widen)',
    ['albuterol', 'ipratropium', 'salmeterol', 'rescue inhaler'],
    ['corticosteroid inhaler', 'mucolytic', 'anti-inflammatory'],
    'bron-koh-DY-lay-tor',
    'A bronchodilator is a medicine that opens up the airways in your lungs to make breathing easier. Inhalers used for asthma often contain bronchodilators.',
  ),

  'pharma-diuretic': t(
    'pharma-diuretic',
    'diuretic',
    'diuretico',
    'pharmacological',
    'A medication that promotes the production of urine, used to reduce fluid buildup in the body',
    'Greek "dia" (through) + "ourein" (to urinate)',
    ['furosemide', 'hydrochlorothiazide', 'spironolactone', 'loop diuretics'],
    ['antihypertensive', 'ACE inhibitor', 'nephrology'],
    'dy-yoo-RET-ik',
    'A diuretic is sometimes called a water pill. It helps your body get rid of extra salt and water through urine, which can lower blood pressure and reduce swelling.',
  ),

  // ===== ABBREVIATIONS (7) ================================================

  'abbr-stat': t(
    'abbr-stat',
    'STAT',
    'STAT (urgente)',
    'abbreviation',
    'Immediately; without delay',
    'Latin "statim" meaning immediately',
    ['order labs STAT', 'STAT medication order', 'STAT consult'],
    ['PRN', 'ASAP'],
    'STAT',
    'When your medical team says STAT, it means something needs to happen right away. It signals the highest level of urgency.',
  ),

  'abbr-prn': t(
    'abbr-prn',
    'PRN',
    'PRN (segun sea necesario)',
    'abbreviation',
    'As needed; when necessary',
    'Latin "pro re nata" meaning as the situation demands',
    ['pain medication PRN', 'PRN anti-nausea medication', 'oxygen PRN'],
    ['STAT', 'QID', 'BID'],
    'pee-ar-EN',
    'PRN means a medication or treatment should be given only when you need it, rather than on a fixed schedule. For example, you might take pain medicine PRN.',
  ),

  'abbr-bid': t(
    'abbr-bid',
    'BID',
    'BID (dos veces al dia)',
    'abbreviation',
    'Twice a day',
    'Latin "bis in die" meaning twice a day',
    ['take medication BID', 'BID dosing schedule'],
    ['QD', 'TID', 'QID', 'PRN'],
    'bee-eye-DEE',
    'BID means twice a day. If your doctor prescribes a medicine BID, you take it two times each day, usually morning and evening.',
  ),

  'abbr-npo': t(
    'abbr-npo',
    'NPO',
    'NPO (nada por boca)',
    'abbreviation',
    'Nothing by mouth; no eating or drinking',
    'Latin "nil per os" meaning nothing through the mouth',
    ['NPO after midnight', 'patient is NPO for surgery', 'NPO status'],
    ['PO', 'IV', 'NG tube'],
    'en-pee-OH',
    'NPO means you cannot eat or drink anything. This is usually required before surgery or certain tests to keep your stomach empty.',
  ),

  'abbr-po': t(
    'abbr-po',
    'PO',
    'PO (por via oral)',
    'abbreviation',
    'By mouth; oral administration',
    'Latin "per os" meaning through the mouth',
    ['PO medication', 'switch from IV to PO', 'PO intake'],
    ['IV', 'IM', 'SQ', 'NPO'],
    'pee-OH',
    'PO means by mouth. When a medicine is ordered PO, you take it as a pill or liquid that you swallow.',
  ),

  'abbr-dx': t(
    'abbr-dx',
    'Dx',
    'Dx (diagnostico)',
    'abbreviation',
    'Diagnosis',
    'Abbreviation of "diagnosis," from Greek "dia" (through) + "gnosis" (knowledge)',
    ['Dx: pneumonia', 'differential Dx', 'working Dx'],
    ['Tx', 'Rx', 'Hx', 'Sx'],
    'dee-EX',
    'Dx is shorthand for diagnosis, which is the identification of your illness or condition. You may see it written in your medical chart.',
  ),

  'abbr-rx': t(
    'abbr-rx',
    'Rx',
    'Rx (receta)',
    'abbreviation',
    'Prescription; treatment',
    'Latin "recipe" meaning take (imperative); the R with a cross stroke became the pharmacy symbol',
    ['Rx: amoxicillin 500mg', 'new Rx', 'Rx refill'],
    ['Dx', 'Tx', 'OTC'],
    'ar-EX',
    'Rx means prescription. It is the symbol you see on prescription bottles and refers to medications your doctor orders specifically for you.',
  ),

};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search medical terminology entries by query string.
 * Matches against term, meaning, etymology, examples, and patientExplanation.
 * Case-insensitive.
 */
export function searchMedicalTerms(query: string): MedicalTermEntry[] {
  const q = query.toLowerCase();
  return Object.values(MEDICAL_TERMINOLOGY_ENTRIES).filter((entry) => {
    return (
      entry.term.toLowerCase().includes(q) ||
      entry.termEs.toLowerCase().includes(q) ||
      entry.meaning.toLowerCase().includes(q) ||
      entry.etymology.toLowerCase().includes(q) ||
      entry.patientExplanation.toLowerCase().includes(q) ||
      entry.examples.some((ex) => ex.toLowerCase().includes(q)) ||
      entry.relatedTerms.some((rt) => rt.toLowerCase().includes(q))
    );
  });
}

/**
 * Filter medical terminology entries by one or more categories.
 */
export function filterByCategory(
  categories: TermCategory | TermCategory[],
): MedicalTermEntry[] {
  const cats = Array.isArray(categories) ? categories : [categories];
  return Object.values(MEDICAL_TERMINOLOGY_ENTRIES).filter((entry) =>
    cats.includes(entry.category),
  );
}

/**
 * Get a single medical terminology entry by its ID.
 * Returns undefined if not found.
 */
export function getTermById(id: string): MedicalTermEntry | undefined {
  return MEDICAL_TERMINOLOGY_ENTRIES[id];
}

/**
 * Get all unique categories present in the database.
 */
export function getAllCategories(): TermCategory[] {
  const categories = new Set<TermCategory>();
  for (const entry of Object.values(MEDICAL_TERMINOLOGY_ENTRIES)) {
    categories.add(entry.category);
  }
  return Array.from(categories);
}

/**
 * Get the total count of entries, optionally filtered by category.
 */
export function getTermCount(category?: TermCategory): number {
  if (!category) {
    return Object.keys(MEDICAL_TERMINOLOGY_ENTRIES).length;
  }
  return filterByCategory(category).length;
}
