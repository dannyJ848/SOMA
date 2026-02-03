/**
 * Medical Word Roots Educational Content
 *
 * Comprehensive coverage of common medical word roots with multi-level
 * explanations suitable for learners from 8th grade through medical professionals.
 */

import { EducationalContent } from '../types';

export const medicalWordRoots: EducationalContent = {
  id: 'medical-terminology-word-roots',
  type: 'topic',
  name: 'Medical Word Roots',
  alternateNames: ['Word Roots', 'Medical Root Words', 'Etymological Roots'],

  levels: {
    1: {
      level: 1,
      summary: 'Word roots are the main part of a medical word that tells you what body part or idea the word is about.',
      explanation: 'If medical words were puzzles, the root word would be the most important middle piece! The root word tells you what the word is actually talking about - like a heart, a bone, or breathing.\n\n**Common Word Roots:**\n\n**Body Part Roots:**\n- **Cardi** = heart → Cardiologist = heart doctor\n- **Gastr** = stomach → Gastritis = stomach inflammation\n- **Neur** = nerve → Neuron = nerve cell\n- **Derm** = skin → Dermatologist = skin doctor\n- **Pulmon** = lung → Pulmonology = lung medicine\n- **Hepat** = liver → Hepatitis = liver inflammation\n- **Ren/Nephr** = kidney → Nephrologist = kidney doctor\n- **Oste** = bone → Osteoporosis = bone thinning\n- **Arthr** = joint → Arthritis = joint inflammation\n- **My** = muscle → Myalgia = muscle pain\n\n**Action/Function Roots:**\n- **Pne** = breathing/breath → Pneumonia = lung sickness\n- **Vas** = vessel → Vascular = about blood vessels\n- **Cyt** = cell → Cytology = study of cells\n- **Path** = disease → Pathology = study of disease',
      keyTerms: [
        { term: 'root word', definition: 'The main part of a word that carries its basic meaning', pronunciation: 'ROOT word' },
        { term: 'cardi', definition: 'Root word meaning heart', pronunciation: 'KAR-dee' },
        { term: 'gastr', definition: 'Root word meaning stomach', pronunciation: 'GAS-ter' },
        { term: 'neur', definition: 'Root word meaning nerve', pronunciation: 'NOOR' },
        { term: 'derm', definition: 'Root word meaning skin', pronunciation: 'DERM' },
      ],
      analogies: [
        'The root word is like the main ingredient in a recipe - it determines what you are making!',
        'Think of root words like the noun in a sentence - they tell you what the subject is.',
      ],
      examples: [
        'Cardi + o + logist = Heart + connecting vowel + specialist = Heart doctor',
        'Gastr + itis = Stomach + inflammation = Stomach inflammation',
        'Neur + algia = Nerve + pain = Nerve pain',
        'Derm + atologist = Skin + specialist = Skin doctor',
        'Arthr + itis = Joint + inflammation = Joint inflammation',
      ],
      patientCounselingPoints: [
        'Knowing root words helps you understand medical terms - "cardi" always refers to heart, "gastr" to stomach.',
      ],
    },

    2: {
      level: 2,
      summary: 'Medical word roots contain the core meaning of medical terms, usually referring to body structures, organs, or fundamental concepts.',
      explanation: 'Word roots are the foundation of medical terminology. They contain the essential meaning of the term and usually identify an organ, tissue, body system, or fundamental concept. Most medical roots derive from Greek or Latin.\n\n**ORGAN SYSTEM WORD ROOTS:**\n\n**Cardiovascular System:**\n| Root | Meaning | Example | Definition |\n|------|---------|---------|------------|\n| Cardi | Heart | Cardiac | Pertaining to heart |\n| Vas, Vasc | Vessel | Vascular | Pertaining to vessels |\n| Angi | Vessel | Angiogram | Vessel picture |\n| Aort | Aorta | Aortic | Pertaining to aorta |\n| Arteri | Artery | Arterial | Pertaining to arteries |\n| Ven | Vein | Venous | Pertaining to veins |\n| Hem, Hemat | Blood | Hematology | Study of blood |\n\n**Respiratory System:**\n| Root | Meaning | Example | Definition |\n|------|---------|---------|------------|\n| Pneum, Pneumon | Lung | Pneumonia | Lung infection |\n| Pulmon | Lung | Pulmonary | Pertaining to lungs |\n| Bronch | Bronchus | Bronchitis | Bronchial inflammation |\n| Laryng | Larynx | Laryngitis | Voice box inflammation |\n| Pharyng | Pharynx | Pharyngitis | Throat inflammation |\n| Thorac | Chest | Thoracic | Pertaining to chest |\n\n**Digestive System:**\n| Root | Meaning | Example | Definition |\n|------|---------|---------|------------|\n| Gastr | Stomach | Gastritis | Stomach inflammation |\n| Enter | Intestine | Enteritis | Intestinal inflammation |\n| Hepat | Liver | Hepatitis | Liver inflammation |\n| Chol | Bile | Cholecyst | Gallbladder |\n| Colon | Colon | Colitis | Colon inflammation |\n| Proct | Anus/rectum | Proctology | Study of rectum |\n| Dent | Tooth | Dental | Pertaining to teeth |\n| Gingiv | Gum | Gingivitis | Gum inflammation |\n\n**Nervous System:**\n| Root | Meaning | Example | Definition |\n|------|---------|---------|------------|\n| Neur | Nerve | Neuron | Nerve cell |\n| Encephal | Brain | Encephalitis | Brain inflammation |\n| Cerebr | Brain | Cerebral | Pertaining to brain |\n| Cerebell | Cerebellum | Cerebellar | Pertaining to cerebellum |\n| Mening | Meninges | Meningitis | Meningeal inflammation |\n| Myel | Spinal cord | Myelogram | Spinal cord X-ray |\n| Gli | Glial cell | Glioma | Glial tumor |',
      keyTerms: [
        { term: 'word root', definition: 'The foundation of a medical word that contains its core meaning', pronunciation: 'word ROOT' },
        { term: 'combining form', definition: 'Root word plus a connecting vowel (usually "o") for combining with other parts', pronunciation: 'kum-BY-ning form' },
        { term: 'cardi', definition: 'Greek root meaning heart', pronunciation: 'KAR-dee' },
        { term: 'hepat', definition: 'Greek root meaning liver', pronunciation: 'HEP-at' },
        { term: 'nephr, ren', definition: 'Greek (nephr) and Latin (ren) roots meaning kidney', pronunciation: 'NEF-ron, REN' },
        { term: 'pneum, pneumon', definition: 'Greek root meaning lung or air', pronunciation: 'NOO-mon' },
        { term: 'oste', definition: 'Greek root meaning bone', pronunciation: 'OS-tee' },
        { term: 'arthr', definition: 'Greek root meaning joint', pronunciation: 'AR-ther' },
      ],
      analogies: [
        'Word roots are like the main ingredient in a recipe - the core element that defines what you are making.',
        'Think of word roots like the trunk of a tree - everything else (prefixes, suffixes) branches off from it.',
      ],
      examples: [
        'Cardiology = Cardi (heart) + o + logy (study) = Study of the heart',
        'Gastroenterology = Gastr (stomach) + entero (intestine) + logy (study) = Study of stomach and intestines',
        'Neuropathy = Neur (nerve) + pathy (disease) = Nerve disease',
        'Hepatomegaly = Hepat (liver) + megaly (enlargement) = Enlarged liver',
        'Bronchitis = Bronch (bronchus) + itis (inflammation) = Inflamed bronchi',
        'Osteoporosis = Oste (bone) + porosis (porous) = Porous bones',
        'Arthroscopy = Arthr (joint) + scopy (looking) = Looking into a joint',
      ],
    },

    3: {
      level: 3,
      summary: 'Medical word roots derived primarily from Greek and Latin provide the foundation for medical terminology, with combining vowels facilitating pronunciation and word construction.',
      explanation: 'Word roots contain the fundamental semantic content of medical terms. Most roots originate from classical languages: approximately 75% Greek, 20% Latin, with smaller contributions from Arabic, French, and other languages. Roots can stand alone or attach to prefixes and suffixes.\n\n**ROOT CLASSIFICATION BY ORGAN SYSTEM:**\n\n**Cardiovascular Roots:**\n| Root | Language | Meaning | Example | Definition |\n|------|----------|---------|---------|------------|\n| Cardi | Greek | Heart | Cardiac | Heart-related |\n| My | Greek | Muscle | Myocardium | Heart muscle |\n| Endocardi | Greek | Inner heart | Endocardium | Heart lining |\n| Pericardi | Greek | Around heart | Pericardium | Heart sac |\n| Vas | Latin | Vessel/duct | Vas deferens | Sperm duct |\n| Vasc | Latin | Vessel | Vascular | Vessel system |\n| Angi | Greek | Vessel | Angiogram | Vessel image |\n| Aort | Greek | Aorta | Aortic | Aortic valve/artery |\n| Arteri | Greek | Artery | Arteriole | Small artery |\n| Ven | Latin | Vein | Venous | Vein-related |\n| Phleb | Greek | Vein | Phlebitis | Vein inflammation |\n| Hem, Hemat | Greek | Blood | Hematology | Blood study |\n\n**Respiratory Roots:**\n| Root | Language | Meaning | Example | Definition |\n|------|----------|---------|---------|------------|\n| Pneum | Greek | Air/lung | Pneumothorax | Air in chest |\n| Pneumon | Greek | Lung | Pneumonectomy | Lung removal |\n| Pulmon | Latin | Lung | Pulmonary | Lung-related |\n| Bronch | Greek | Bronchus | Bronchoscopy | Airway exam |\n| Trache | Greek | Trachea | Tracheostomy | Airway opening |\n| Laryng | Greek | Larynx | Laryngoscope | Voice box scope |\n| Pharyng | Greek | Pharynx | Pharyngitis | Throat infection |\n| Alveol | Latin | Alveolus | Alveolar | Air sac related |\n| Pleur | Greek | Pleura | Pleurisy | Pleura inflammation |\n\n**Gastrointestinal Roots:**\n| Root | Language | Meaning | Example | Definition |\n|------|----------|---------|---------|------------|\n| Gastr | Greek | Stomach | Gastric | Stomach-related |\n| Enter | Greek | Intestine | Enteritis | Intestine infection |\n| Duoden | Greek | Duodenum | Duodenal | First intestine segment |\n| Jejun | Latin | Jejunum | Jejunal | Second intestine segment |\n| Ile | Latin | Ileum | Ileal | Third intestine segment |\n| Col | Greek | Colon | Colitis | Colon inflammation |\n| Proct | Greek | Anus/rectum | Proctologist | Rectal specialist |\n| An | Greek | Ring | Anal | Anus-related |\n| Hepat | Greek | Liver | Hepatocyte | Liver cell |\n| Chol | Greek | Bile | Cholecyst | Gallbladder |\n| Cyst | Greek | Sac/bladder | Cholecyst | Gallbladder |\n| Pancreat | Greek | Pancreas | Pancreatitis | Pancreas infection |\n| Sial | Greek | Saliva | Sialadenitis | Salivary gland infection |\n| Esophag | Greek | Esophagus | Esophagitis | Esophagus infection |\n| Odont | Greek | Tooth | Orthodontics | Straight teeth |\n\n**Renal/Urinary Roots:**\n| Root | Language | Meaning | Example | Definition |\n|------|----------|---------|---------|------------|\n| Nephr | Greek | Kidney | Nephron | Kidney unit |\n| Ren | Latin | Kidney | Renal | Kidney-related |\n| Ureter | Greek | Ureter | Ureteral | Ureter tube |\n| Urethr | Greek | Urethra | Urethral | Urethra tube |\n| Cyst | Greek | Bladder | Cystitis | Bladder infection |\n| Pyel | Greek | Pelvis | Pyelonephritis | Kidney pelvis infection |\n| Glomerul | Greek | Little ball | Glomerulus | Kidney filter |\n| Ur | Greek | Urine | Urinary | Urine system |\n\n**Nervous System Roots:**\n| Root | Language | Meaning | Example | Definition |\n|------|----------|---------|---------|------------|\n| Neur | Greek | Nerve | Neuron | Nerve cell |\n| Encephal | Greek | Brain | Encephalitis | Brain infection |\n| Cerebr | Latin | Brain | Cerebral | Brain-related |\n| Cerebell | Latin | Cerebellum | Cerebellar | Little brain |\n| Mening | Greek | Membrane | Meningitis | Brain membrane infection |\n| Myel | Greek | Marrow/spinal cord | Myelitis | Cord inflammation |\n| Gli | Greek | Glue | Glioma | Glial tumor |\n| Axon | Greek | Axis | Axonal | Nerve fiber |\n| Synaps | Greek | Join | Synapse | Nerve junction |\n| Psych | Greek | Mind | Psychiatry | Mind medicine |',
      keyTerms: [
        { term: 'combining vowel', definition: 'Usually "o" placed between word parts to facilitate pronunciation; dropped if suffix begins with vowel', pronunciation: 'kum-BY-ning VOW-el' },
        { term: 'Greek vs Latin roots', definition: 'Greek roots (~75%) describe organs and concepts; Latin roots (~20%) often describe anatomical structures', pronunciation: 'GREEK vs LAT-in' },
        { term: 'cardio vs cardiac', definition: 'Cardio- is combining form (has vowel), cardi- is root (no vowel)', pronunciation: 'KAR-dee-oh vs KAR-dee-ak' },
        { term: 'nephr vs ren', definition: 'Greek (nephr) and Latin (ren) roots both mean kidney; used in different terms', pronunciation: 'NEF-ron vs REN' },
        { term: 'pneum vs pneumon', definition: 'Pneum- means air, pneumon- specifically means lung', pronunciation: 'NOOM vs NOO-mon' },
      ],
      examples: [
        'Cardio- + megaly = Cardiomegaly (enlarged heart)',
        'Gastro- + enter- + -itis = Gastroenteritis (stomach/intestine inflammation)',
        'Neuro- + pathy = Neuropathy (nerve disease)',
        'Hepato- + megaly = Hepatomegaly (enlarged liver)',
        'Broncho- + -scopy = Bronchoscopy (airway examination)',
        'Nephr- + -itis = Nephritis (kidney inflammation), Ren- + -al = Renal (kidney-related)',
        'Oste- + -porosis = Osteoporosis (porous bone condition)',
        'Arthr- + -scopy = Arthroscopy (joint examination)',
      ],
    },

    4: {
      level: 4,
      summary: 'Medical word roots form the semantic foundation of clinical terminology, encoding anatomical, physiological, and pathological concepts through classical language derivation.',
      explanation: 'Medical word roots represent a precise semantic system derived from Greek and Latin anatomical and physiological terminology. Root selection reflects historical medical knowledge development and provides systematic categorization of body systems, tissues, and pathological processes.\n\n**CARDIOVASCULAR ROOTS: CLINICAL APPLICATIONS**\n\n**Cardio- (Heart):**\n- Cardiac output: SV x HR, normal 4-8 L/min\n- Cardiac enzymes: Troponin I/T, CK-MB for myocardial infarction\n- Cardiomegaly: Chest X-ray finding, cardiothoracic ratio > 0.5\n- Pericardial effusion: Echocardiogram, tamponade physiology (beck triad)\n\n**Myo- (Muscle):**\n- Myocardium: Cardiac muscle, coronary artery supply\n- Myocarditis: Viral, autoimmune, troponin elevation without CAD\n- Myocardial infarction: STEMI vs NSTEMI, reperfusion strategies\n- Myopathy: Muscle disease, CK elevation, proximal weakness pattern\n\n**Vasc-/Vas- (Vessel):**\n- Vascular: Pertaining to blood vessels, atherosclerosis, aneurysm\n- Vasoconstriction/vasodilation: Autonomic regulation, blood pressure\n- Vasculitis: Giant cell arteritis, Takayasu, PAN, ESR/CRP\n\n**Angi- (Vessel):**\n- Angiogram: Vessel imaging, coronary angiography, cerebral angiography\n- Angioplasty: Vessel repair, balloon, stent, drug-eluting stents\n- Angiosarcoma: Vessel origin malignancy, rare, poor prognosis\n- Angioedema: Vessel-related swelling, bradykinin-mediated, ACE inhibitor cause\n\n**RESPIRATORY ROOTS: PULMONARY PATHOLOGY**\n\n**Pneumon-/Pneum- (Lung/Air):**\n- Pneumonia: CAP vs HAP vs VAP, CURB-65 severity, PORT scoring\n- Pneumothorax: Spontaneous vs traumatic, tension physiology, chest tube\n- Pneumocystis: PCP pneumonia in HIV, CD4 < 200, TMP-SMX prophylaxis\n- Pneumoconiosis: Dust lung disease, silicosis, asbestosis, occupational history\n\n**Pulmon- (Lung):**\n- Pulmonary embolism: CT pulmonary angiography, V/Q scan, Wells criteria\n- Pulmonary hypertension: Right heart cath, mean PA pressure > 25 mmHg\n- Pulmonary function tests: Obstructive (FEV1/FVC < 0.7) vs restrictive (TLC < 80%)\n\n**Bronch- (Bronchus):**\n- Bronchitis: Acute viral vs chronic (productive cough > 3 months x 2 years)\n- Bronchodilator: Beta-agonists, anticholinergics, asthma/COPD management\n- Bronchiectasis: Bronchial dilation, chronic infection, CF, post-infectious\n\n**GASTROINTESTINAL ROOTS: DIGESTIVE PATHOLOGY**\n\n**Gastr- (Stomach):**\n- Gastritis: Erosive vs non-erosive, H. pylori, NSAID-related\n- Gastric ulcer: PUD vs gastric malignancy, biopsy confirmation\n- Gastroparesis: Diabetic, postsurgical, gastric emptying study\n\n**Hepat- (Liver):**\n- Hepatitis: A (fecal-oral), B (blood/sexual), C (blood), serology\n- Hepatocellular carcinoma: Cirrhosis risk, AFP, surveillance ultrasound\n- Hepatomegaly: Liver enlargement, right upper quadrant, span >12 cm\n- Hepatotoxicity: Drug-induced liver injury, acetaminophen, R factor\n\n**Enter- (Intestine):**\n- Enteritis: Infectious (viral, bacterial, parasitic), inflammatory (Crohn)\n- Enterocolitis: Small and large intestine inflammation, NEC in neonates\n- Enteropathy: Celiac (gluten-sensitive), whipple disease, tropical sprue\n\n**Chol- (Bile) + Cyst- (Bladder/Sac):**\n- Cholecystitis: Gallbladder inflammation, RUQ pain, ultrasound (wall thickening, pericholecystic fluid)\n- Cholelithiasis: Gallstones, asymptomatic observation vs symptomatic cholecystectomy\n- Choledocholithiasis: CBD stone, ERCP vs cholecystectomy with IOC\n\n**NEPHROLOGIC ROOTS: RENAL PATHOLOGY**\n\n**Nephr- (Kidney - Greek):**\n- Nephrolithiasis: Kidney stones, calcium oxalate, uric acid, struvite, cystine\n- Nephrotic syndrome: Proteinuria > 3.5 g/day, edema, hypoalbuminemia, hyperlipidemia\n- Nephritic syndrome: Hematuria, RBC casts, proteinuria < 3.5 g/day, oliguria\n- Nephrosclerosis: Hypertensive kidney disease, benign vs malignant\n\n**Ren- (Kidney - Latin):**\n- Renal artery stenosis: Fibromuscular dysplasia vs atherosclerotic, ACE inhibitor caution\n- Renal cell carcinoma: Clear cell type, CT enhancement, partial vs radical nephrectomy\n- Renal failure: AKIN/AKI stages, CKD stages (eGFR 90, 60-89, 30-59, 15-29, <15)',
      keyTerms: [
        { term: 'cardiomegaly', definition: 'Enlarged heart visible on imaging; cardiothoracic ratio > 0.5 on PA chest X-ray', pronunciation: 'kar-dee-oh-MEG-uh-lee' },
        { term: 'pneumothorax', definition: 'Air in pleural space causing lung collapse; spontaneous vs traumatic etiologies', pronunciation: 'noo-moh-THOR-aks' },
        { term: 'hepatomegaly', definition: 'Enlarged liver; midclavicular percussion > 12 cm indicates pathology', pronunciation: 'hep-at-oh-MEG-uh-lee' },
        { term: 'nephrotic syndrome', definition: 'Heavy proteinuria (>3.5 g/day) with edema, hypoalbuminemia, hyperlipidemia', pronunciation: 'NEF-rot-ik SIN-drohm' },
        { term: 'cholecystitis', definition: 'Inflammation of gallbladder, usually due to gallstone obstruction', pronunciation: 'koh-lee-sis-TIE-tis' },
        { term: 'bronchiectasis', definition: 'Abnormal, permanent dilation of bronchi with chronic infection and sputum production', pronunciation: 'brong-kee-EK-tuh-sis' },
      ],
      examples: [
        'Cardiac workup: ECG, troponins, BNP, echocardiogram for cardiomegaly',
        'Pneumonia evaluation: CXR, CBC, CRP, blood cultures, sputum culture, CURB-65 severity',
        'Pulmonary embolism: CT pulmonary angiogram, V/Q scan if contrast contraindicated, Wells criteria',
        'Hepatitis workup: Serology (IgM anti-HAV, HBsAg, anti-HCV), LFTs, ultrasound for chronic',
        'Gastric ulcer vs malignancy: EGD with biopsy, H. pylori testing, repeat EGD to confirm healing',
        'Nephrotic vs nephritic: Heavy proteinuria vs hematuria with casts, different underlying pathologies',
        'Cholecystitis diagnosis: RUQ ultrasound (wall thickening, pericholecystic fluid, stones), HIDA scan if equivocal',
      ],
      clinicalNotes: 'Understanding word roots facilitates clinical communication and diagnostic reasoning. Cardiac terms indicate cardiac structure and pathology. Pulmonary roots distinguish airway vs parenchymal vs vascular disease. Gastrointestinal roots separate esophageal, gastric, intestinal, and hepatobiliary pathology. Renal roots (Greek nephr- vs Latin ren-) appear in different clinical contexts (nephrology specialty vs renal function lab tests).',
    },

    5: {
      level: 5,
      summary: 'Medical word roots encode precise clinical, pathophysiological, and therapeutic concepts through classical language morphology that supports evidence-based clinical practice and communication.',
      explanation: 'Medical word roots constitute a semantic taxonomy that integrates anatomical, pathological, and therapeutic concepts through systematic morphological patterns. Root derivation reflects historical medical knowledge development while supporting contemporary precision in clinical documentation and research.\n\n**ROOT-BASED PATHOLOGICAL CLASSIFICATION:**\n\n**Cardiovascular Pathology (Cardi-, Vas-, Angi-):**\n\n*Cardiomyopathy Classification:*\n- Dilated cardiomyopathy: Systolic dysfunction, EF < 40%, ischemic vs non-ischemic\n- Hypertrophic cardiomyopathy: ASH, SAM, LVOT gradient, sudden death risk\n- Restrictive cardiomyopathy: Amyloid, sarcoid, hemochromatosis, biopsy confirmation\n- Arrhythmogenic right ventricular cardiomyopathy: Fibrofatty replacement, ARVC task force criteria\n\n*Vascular Pathology:*\n- Atherosclerosis: Plaque formation, lipid core, fibrous cap, rupture risk, statin therapy\nn- Aneurysm: Arterial dilation, size criteria for intervention (AAA > 5.5 cm)\n- Vasculitis: Large vessel (GCA, Takayasu), medium vessel (PAN, Kawasaki), small vessel (ANCA-associated)\n\n**Pulmonary Pathology (Pneumon-, Pulmon-, Bronch-):**\n\n*Pneumonia Classification:*\n- Community-acquired: Typical (S. pneumo, H. flu) vs atypical (Mycoplasma, Legionella)\n- Healthcare-associated: HCAP (now HAP/VAP categorization), MDR risk\n- Aspiration: Anaerobic coverage, clindamycin, aspiration precautions\n- Opportunistic: PCP, CMV, fungal in immunocompromised\n\n*Interstitial Lung Disease:*\n- Pulmonary fibrosis: UIP pattern, HRCL honeycombing, antifibrotic therapy (pirfenidone, nintedanib)\n- Sarcoidosis: Non-caseating granulomas, ACE level, steroid-sparing agents\n- Hypersensitivity pneumonitis: Occupational exposure, precipitating antibodies\n\n**Hepatobiliary Pathology (Hepat-, Chol-, Cyst-):**\n\n*Hepatitis Etiology:*\n- Viral: A (fecal-oral, IgM anti-HAV), B (serology, vaccine, HBsAg loss), C (RNA, treatment, cure)\n- Autoimmune: ANA, ASMA, IgG, steroid responsiveness\n- Drug-induced: Acetaminophen (NAC), idiosyncratic (R factor prediction)\n- Alcoholic: AST/ALT > 2:1, MCV elevation, abstinence, nutritional support\n\n*Gallbladder Disease:*\n- Cholelithiasis: Asymptomatic observation, symptomatic cholecystectomy indications\n- Cholecystitis: Calculous vs acalculous, gangrene vs perforation risks\n- Choledocholithiasis: ERCRPC vs laparoscopic IOC, cholangitis severity (Tokyo criteria)\n\n**Renal Pathology (Nephr-, Ren-):**\n\n*Glomerular Disease:*\n- Nephrotic syndrome: FSGS, membranous, minimal change, podocyte injury\n- Nephritic syndrome: Post-streptococcal GN, IgA nephropathy, RPGN, crescents\n- Rapidly progressive: ANCA-associated, anti-GBM, immune complex\n\n*Tubulointerstitial Disease:*\n- Acute tubular necrosis: Ischemic vs nephrotoxic, recovery potential\n- Interstitial nephritis: Drug-induced (PPIs, NSAIDs, antibiotics), eosinophilia, eosinophiluria\n- Pyelonephritis: Ascending infection, emphysematous in diabetics, imaging',
      keyTerms: [
        { term: 'cardiomyopathy', definition: 'Primary myocardial disease categorized by functional pattern: dilated, hypertrophic, restrictive, arrhythmogenic', pronunciation: 'kar-dee-oh-my-OP-uh-thee' },
        { term: 'UIP pattern', definition: 'Usual interstitial pneumonia pattern; basal, subpleural reticular changes with honeycombing on HRCT', pronunciation: 'U-I-P PAT-ern' },
        { term: 'RPGN', definition: 'Rapidly progressive glomerulonephritis; crescentic GN with rapid renal decline', pronunciation: 'R-P-G-N' },
        { term: 'Tokyo criteria', definition: 'Diagnostic criteria for cholangitis: fever, jaundice, pain, shock, CNS disturbance', pronunciation: 'TOH-kyoh krie-TEER-ee-uh' },
        { term: 'SAMS', definition: 'Statin-associated muscle symptoms; includes myalgia, myopathy, elevated CK', pronunciation: 'SAMS' },
        { term: 'MDR', definition: 'Multidrug-resistant; HCAP/VAP pathogens resistant to multiple antibiotics', pronunciation: 'M-D-R' },
      ],
      examples: [
        'Cardiomyopathy workup: ECG, echo, cardiac MRI, coronary angiography, endomyocardial biopsy for specific indications',
        'ILD evaluation: HRCT pattern (UIP vs NSIP vs other), PFT restrictive pattern, surgical lung biopsy for atypical cases',
        'Hepatitis B treatment: HBV DNA, ALT, HBeAg status, tenofovir/entecavir first-line, finite vs indefinite therapy',
        'Hepatitis C: DAA therapies (sofosbuvir/ledipasvir), 8-12 week treatment, SVR = cure, fibrosis assessment post-treatment',
        'Nephrotic syndrome: Renal biopsy, immunofluorescence, EM, treat underlying cause, ACE-I, statins, anticoagulation select',
        'Emphysematous pyelonephritis: Diabetic patients, E. coli, gas on imaging, antibiotics vs nephrectomy by class',
        'Acute interstitial nephritis: Drug history, eosinophilia/eosinophiluria, renal recovery after withdrawal, steroids',
      ],
      clinicalNotes: 'Root-based medical terminology provides systematic classification of disease entities that guide evidence-based management. Cardiac root terms (cardio-, myo-, peri-) identify specific structures for targeted interventions (catheter-based, surgical). Pulmonary roots (pneum-, pneumon-, bronch-) distinguish parenchymal, airway, and vascular diseases with specific treatment pathways. Hepatobiliary roots (hepat-, chol-, cyst-) separate hepatic, biliary, and gallbladder pathology for appropriate specialist referral. Renal roots (nephr- vs ren-) appear in different contexts: nephrology specialty vs renal function lab panels and interventional radiology procedures.',
    },
  },

  media: [],
  citations: [
    {
      id: 'chabner-2020',
      type: 'textbook',
      title: 'The Language of Medicine',
      source: 'Elsevier',
      authors: ['Davi-Ellen Chabner'],
      chapter: '1-4',
    },
  ],
  crossReferences: [
    { targetId: 'medical-terminology-prefixes', targetType: 'topic', relationship: 'sibling', label: 'Medical Prefixes' },
    { targetId: 'medical-terminology-suffixes', targetType: 'topic', relationship: 'sibling', label: 'Medical Suffixes' },
    { targetId: 'medical-terminology-combining-forms', targetType: 'topic', relationship: 'sibling', label: 'Combining Forms' },
  ],
  tags: {
    systems: ['general'],
    topics: ['medical-terminology', 'word-structure', 'etymology', 'anatomy'],
    keywords: ['roots', 'word-parts', 'greek', 'latin', 'organs', 'anatomy'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['all'] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default medicalWordRoots;
