/**
 * Medical Suffixes Educational Content
 *
 * Comprehensive coverage of common medical suffixes with multi-level
 * explanations suitable for learners from 8th grade through medical professionals.
 */

import { EducationalContent } from '../types';

export const medicalSuffixes: EducationalContent = {
  id: 'medical-terminology-suffixes',
  type: 'topic',
  name: 'Medical Suffixes',
  alternateNames: ['Medical Word Endings', 'Suffixes in Medical Terminology'],

  levels: {
    1: {
      level: 1,
      summary: 'Suffixes are word parts added to the end of medical words that tell us what kind of condition, procedure, or specialist something is.',
      explanation: 'While prefixes go at the START of a word, suffixes go at the END. Medical suffixes are like category labels - they tell you what type of thing the word is describing.\n\n**Common Medical Suffixes:**\n\n**Condition Suffixes (describe a problem):**\n- **-itis** = inflammation (redness, swelling) → arthritis = joint inflammation\n- **-osis** = abnormal condition → scoliosis = curved spine condition\n- **-emia** = blood condition → anemia = problem with blood\n- **-pathy** = disease → neuropathy = nerve disease\n\n**Procedure Suffixes (describe an action):**\n- **-ectomy** = surgical removal → appendectomy = removing appendix\n- **-scopy** = looking with a camera → colonoscopy = looking in colon\n- **-plasty** = surgical repair → rhinoplasty = fixing nose\n\n**Specialist Suffixes (describe a doctor):**\n- **-ologist** = specialist doctor → cardiologist = heart doctor\n- **-logist** = expert → biologist = life science expert\n\n**Pain/Feeling Suffixes:**\n- **-algia** = pain → neuralgia = nerve pain\n- **-phobia** = fear → claustrophobia = fear of small spaces',
      keyTerms: [
        { term: 'suffix', definition: 'Letters added to the END of a word to change its meaning', pronunciation: 'SUF-iks' },
        { term: '-itis', definition: 'Suffix meaning inflammation or swelling', pronunciation: 'EYE-tis' },
        { term: '-ectomy', definition: 'Suffix meaning surgical removal of something', pronunciation: 'ek-TO-mee' },
        { term: '-ologist', definition: 'Suffix meaning a doctor or specialist', pronunciation: 'OL-uh-jist' },
      ],
      analogies: [
        'Think of suffixes like file folder labels - they tell you what "category" or "type" of thing you are dealing with.',
        'Medical words are like puzzles - the suffix is the last piece that tells you what the whole picture means.',
      ],
      examples: [
        'Tonsillitis = Tonsil + -itis = inflamed tonsils',
        'Appendectomy = Appendix + -ectomy = appendix removal surgery',
        'Cardiologist = Cardi (heart) + -ologist = heart doctor',
        'Neuralgia = Neur (nerve) + -algia = nerve pain',
        'Arthritis = Arthr (joint) + -itis = joint inflammation',
      ],
      patientCounselingPoints: [
        'If your diagnosis ends in "-itis," it means there is inflammation that might be treated with anti-inflammatory medicines.',
        'If your doctor is an "-ologist," they have special training in that specific area of medicine.',
      ],
    },

    2: {
      level: 2,
      summary: 'Medical suffixes are word endings that typically indicate a condition, disease, procedure, or specialist. They are essential for understanding medical terminology.',
      explanation: 'Medical suffixes usually determine the meaning of the entire word. While prefixes modify meaning, suffixes often tell you the fundamental category - what type of condition, procedure, or specialist is being discussed.\n\n**CONDITION AND DISEASE SUFFIXES:**\n\n| Suffix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| -itis | Inflammation | Tonsillitis | Inflamed tonsils |\n| -osis | Abnormal condition | Scoliosis | Curved spine |\n| -emia | Blood condition | Anemia | Low blood cells |\n| -pathy | Disease | Neuropathy | Nerve disease |\n| -algia | Pain | Myalgia | Muscle pain |\n| -dynia | Pain | Gastodynia | Stomach pain |\n| -megaly | Enlargement | Cardiomegaly | Enlarged heart |\n| -spasm | Involuntary contraction | Bronchospasm | Airway squeezing |\n| -plegia | Paralysis | Hemiplegia | Half paralysis |\n| -phasia | Speech | Aphasia | No speech |\n\n**PROCEDURE SUFFIXES:**\n\n| Suffix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| -ectomy | Surgical removal | Appendectomy | Remove appendix |\n| -otomy | Cutting into | Laparotomy | Cut into abdomen |\n| -ostomy | Creating opening | Colostomy | Colon opening |\n| -plasty | Surgical repair | Angioplasty | Vessel repair |\n| -scopy | Visual examination | Colonoscopy | Examine colon |\n| -graphy | Recording/imaging | Mammography | Breast imaging |\n| -therapy | Treatment | Chemotherapy | Drug treatment |\n\n**SPECIALIST SUFFIXES:**\n\n| Suffix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| -ologist | Specialist | Cardiologist | Heart specialist |\n| -iatrist | Physician | Psychiatrist | Mind physician |\n| -ician | Practitioner | Physician | Medical practitioner |\n\n**ADJECTIVAL SUFFIXES (DESCRIBING QUALITY):**\n\n| Suffix | Meaning | Example | Definition |\n|--------|---------|---------|------------|\n| -ac | Pertaining to | Cardiac | Pertaining to heart |\n| -al | Pertaining to | Gastric | Pertaining to stomach |\n| -ar | Pertaining to | Vascular | Pertaining to vessels |\n| -ic | Pertaining to | Thoracic | Pertaining to chest |\n| -ous | Pertaining to | Mucous | Pertaining to mucus |\n| -tic | Pertaining to | Phrenetic | Pertaining to mind |',
      keyTerms: [
        { term: 'suffix', definition: 'Word ending that indicates condition, procedure, or specialist', pronunciation: 'SUF-iks' },
        { term: '-itis', definition: 'Suffix indicating inflammation of an organ or tissue', pronunciation: 'EYE-tis' },
        { term: '-osis', definition: 'Suffix indicating abnormal condition or disease state', pronunciation: 'OH-sis' },
        { term: '-ectomy', definition: 'Suffix meaning surgical removal or excision', pronunciation: 'ek-TO-mee' },
        { term: '-otomy', definition: 'Suffix meaning surgical incision or cutting into', pronunciation: 'OT-uh-mee' },
        { term: '-ostomy', definition: 'Suffix meaning creation of a permanent surgical opening', pronunciation: 'OS-tuh-mee' },
        { term: '-plasty', definition: 'Suffix meaning surgical repair or reconstruction', pronunciation: 'PLAS-tee' },
        { term: '-scopy', definition: 'Suffix meaning visual examination using a scope', pronunciation: 'SKOP-ee' },
        { term: '-ologist', definition: 'Suffix meaning a medical specialist or expert', pronunciation: 'OL-uh-jist' },
      ],
      analogies: [
        'Medical suffixes are like file extensions - .txt, .jpg, .pdf tell you what KIND of file something is.',
        'Think of word construction like a train: prefix (engine) + root (cars) + suffix (caboose - tells you the train type).',
      ],
      examples: [
        'Condition: Gastritis (stomach inflammation), Hepatitis (liver inflammation), Bronchitis (bronchial inflammation)',
        'Disease: Neuropathy (nerve disease), Cardiomyopathy (heart muscle disease), Myopathy (muscle disease)',
        'Procedure: Cholecystectomy (gallbladder removal), Thyroidectomy (thyroid removal)',
        'Imaging: Mammography (breast imaging), Angiography (vessel imaging)',
        'Specialist: Neurologist (nerve/brain specialist), Oncologist (cancer specialist), Dermatologist (skin specialist)',
      ],
    },

    3: {
      level: 3,
      summary: 'Medical suffixes systematically indicate pathological conditions, diagnostic procedures, surgical interventions, and medical specialties, derived primarily from Greek and Latin origins.',
      explanation: 'Medical suffixes provide the grammatical and semantic framework for medical terminology. While roots identify the anatomical structure or concept, suffixes indicate the nature of the medical entity - whether it is a disease, procedure, diagnostic test, or specialty.\n\n**PATHOLOGICAL CONDITION SUFFIXES:**\n\n**Inflammatory Suffixes:**\n| Suffix | Etymology | Example | Meaning |\n|--------|----------|---------|---------|\n| -itis | Greek (inflammation) | Appendicitis | Appendix inflammation |\n| -itis | Greek | Meningitis | Meningeal inflammation |\n| -itis | Greek | Pancreatitis | Pancreatic inflammation |\n\n**Non-inflammatory Pathology Suffixes:**\n| Suffix | Etymology | Example | Meaning |\n|--------|----------|---------|--------|\n| -osis | Greek (condition) | Tuberculosis | Tubercle condition |\n| -osis | Greek | Osteoporosis | Porous bone condition |\n| -osis | Greek | Cirrhosis | Orange/yellow condition |\n| -pathy | Greek (disease) | Cardiomyopathy | Heart muscle disease |\n| -pathy | Greek | Encephalopathy | Brain disease |\n| -megaly | Greek (large) | Hepatomegaly | Liver enlargement |\n| -malacia | Greek (soft) | Osteomalacia | Soft bone |\n| -sclerosis | Greek (hard) | Atherosclerosis | Vessel hardening |\n| -stasis | Greek (standing) | Hemostasis | Blood standing still |\n| -ptosis | Greek (falling) | Blepharoptosis | Drooping eyelid |\n\n**BLOOD AND BODY FLUID SUFFIXES:**\n| Suffix | Etymology | Example | Meaning |\n|--------|----------|---------|---------|\n| -emia | Greek (blood) | Anemia | Without blood |\n| -emia | Greek | Leukemia | White blood condition |\n| -uria | Greek (urine) | Hematuria | Blood in urine |\n| -uria | Greek | Proteinuria | Protein in urine |\n| -rrhage | Greek (burst forth) | Hemorrhage | Blood bursting forth |\n| -rrhaphy | Greek (suture) | Herniorrhaphy | Hernia suture |\n| -rrhea | Greek (flow) | Diarrhea | Through-flow |\n| -rrhexis | Greek (rupture) | Cardiorrhexis | Heart rupture |\n\n**SURGICAL PROCEDURE SUFFIXES:**\n| Suffix | Etymology | Example | Meaning |\n|--------|----------|---------|--------|\n| -ectomy | Greek (cut out) | Appendectomy | Remove appendix |\n| -otomy | Greek (cut) | Laparotomy | Cut into abdomen |\n| -ostomy | Greek (mouth) | Tracheostomy | Permanent tracheal opening |\n| -plasty | Greek (mold) | Rhinoplasty | Reshape nose |\n| -pexy | Greek (fix) | Nephropexy | Fix kidney |\n| -centesis | Greek (puncture) | Paracentesis | Abdominal puncture |\n| -desis | Greek (binding) | Arthrodesis | Joint binding |\n\n**DIAGNOSTIC AND VISUALIZATION SUFFIXES:**\n| Suffix | Etymology | Example | Meaning |\n|--------|----------|---------|--------|\n| -scopy | Greek (look) | Endoscopy | Look inside |\n| -graphy | Greek (record) | Radiography | Record with radiation |\n| -gram | Greek (record) | ECG, EKG | Heart recording |\n| -graph | Greek (instrument) | Electrocardiograph | Heart recording instrument |\n| -meter | Greek (measure) | Thermometer | Heat measuring device |\n| -logy | Greek (study) | Pathology | Study of disease |',
      keyTerms: [
        { term: '-ectomy vs -otomy vs -ostomy', definition: '-ectomy = remove completely, -otomy = cut into for access, -ostomy = create permanent opening', pronunciation: 'ek-TOM-ee, OT-uh-mee, OS-tuh-mee' },
        { term: '-itis vs -osis', definition: '-itis = inflammatory condition, -osis = usually non-inflammatory degenerative condition', pronunciation: 'EYE-tis, OH-sis' },
        { term: '-plasty', definition: 'Surgical reconstruction or repair to restore form and function', pronunciation: 'PLAS-tee' },
        { term: '-pexy', definition: 'Surgical fixation or attachment of a mobile organ', pronunciation: 'PEK-see' },
        { term: '-centesis', definition: 'Surgical puncture to remove fluid for diagnostic or therapeutic purposes', pronunciation: 'sen-TEE-sis' },
        { term: '-desis', definition: 'Surgical fusion or immobilization of a joint', pronunciation: 'DEE-sis' },
        { term: '-rrhage, -rrhaphy, -rrhea, -rrhexis', definition: 'Four R suffixes: burst, suture, flow, rupture', pronunciation: 'rij, ruh-fee, ree-uh, rek-sis' },
      ],
      examples: [
        'Cholecystectomy (remove gallbladder) vs Cholecystostomy (gallbladder opening) vs Cholecystotomy (cut into gallbladder)',
        'Osteomalacia (soft bone - vitamin D deficiency) vs Osteoporosis (porous bone - density loss)',
        'Hemostasis (stop bleeding) vs Hemorrhage (bleeding) vs Hematorrhexis (vessel rupture)',
        'Arthroscopy (look in joint) vs Arthrography (image joint) vs Arthrogram (joint image)',
        'Laparotomy (cut into abdomen) vs Laparoscopy (look into abdomen) vs Laparostomy (abdominal opening)',
        'Nephropexy (kidney fixation) for nephroptosis (dropped kidney), causing nephroptosis',
        'Thoracentesis (chest puncture) vs Paracentesis (abdominal puncture) vs Amniocentesis (fluid puncture)',
      ],
    },

    4: {
      level: 4,
      summary: 'Medical suffixes provide systematic classification of pathological processes, procedural interventions, and diagnostic modalities through morphological patterns that reflect underlying pathophysiology and clinical approach.',
      explanation: 'Medical suffixes encode clinical decision-making by categorizing diseases by pathophysiology and procedures by therapeutic intent. Understanding suffix semantics is essential for clinical reasoning and appropriate diagnostic and therapeutic planning.\n\n**PATHOLOGICAL CLASSIFICATION BY SUFFIX:**\n\n**Inflammatory Conditions (-itis):**\n- Infectious: Bacterial meningitis, cellulitis, appendicitis\n- Autoimmune: Thyroiditis (Hashimoto), myocarditis, inflammatory bowel disease\n- Mechanical: Tendonitis, bursitis, fasciitis\n- Clinical implications: ESR/CRP elevation, anti-inflammatory treatment, potential antimicrobial therapy\n\n**Degenerative/Non-inflammatory Conditions (-osis):**\n- Metabolic: Osteoporosis, steatosis (fatty liver), cholelithiasis (gallstones)\n- Structural: Scoliosis, stenosis, diverticulosis\n- Neoplastic: Carcinomatosis, leukocytosis (reactive)\n- Clinical implications: Gradual onset, primarily surgical or metabolic management\n\n**Tissue Degeneration (-malacia, -porosis, -sclerosis):**\n- Osteomalacia: Vitamin D deficiency, impaired mineralization, low calcium/phosphate\n- Osteoporosis: Decreased bone density, DEXA T-score <-2.5, anti-resorptive therapy\n- Atherosclerosis: Lipid accumulation, plaque formation, statin therapy\n- Clinical approach: Laboratory evaluation, imaging, targeted pharmacotherapy\n\n**Organomegaly (-megaly):**\n- Cardiomegaly: Chest X-ray finding, cardiomyopathy evaluation\n- Hepatomegaly: Liver span >12 cm CMR, workup: hepatitis, fatty liver, congestion, infiltrative\n- Splenomegaly: Palpable >2 cm subcostal, workup: portal hypertension, lymphoproliferative\n- Clinical approach: Imaging characterization, laboratory evaluation, biopsy consideration\n\n**SURGICAL PROCEDURE SEMANTICS:**\n\n**Excisional Procedures (-ectomy):**\n- Curative intent: Tumorectomy, mastectomy, prostatectomy\n- Diagnostic: Excisional biopsy\n- Emergency: Appendectomy, necrectomy\n- Staging: Lymphadenectomy\n- Clinical considerations: Margins, lymphadenectomy, reconstruction considerations\n\n**Access Procedures (-otomy):**\n- Exploratory: Laparotomy, thoracotomy, craniotomy\n- Therapeutic access: Tracheotomy, arteriotomy, phlebotomy\n- Temporary vs permanent: Tracheotomy (potentially reversible) vs tracheostomy (permanent)\n\n**Diversion Procedures (-ostomy):**\n- Temporary: Loop colostomy, diverting loop ileostomy (reversal planned)\n- Permanent: End colostomy (AP resection), permanent urostomy\n- Feeding: Gastrostomy, jejunostomy\n- Clinical implications: Stoma care education, reversal planning, quality of life\n\n**Reconstruction (-plasty):**\n- Structural: Angioplasty, arthroplasty, rhinoplasty\n- Reconstructive: Mammoplasty, abdominoplasty\n- Functional: Valvuloplasty, urethroplasty\n-材料 choice: Synthetic vs autologous graft, durability considerations',
      keyTerms: [
        { term: 'organomegaly', definition: 'Abnormal enlargement of an organ, often palpable on physical exam or visible on imaging', pronunciation: 'or-gan-oh-MEG-uh-lee' },
        { term: 'liver span', definition: 'Midclavicular liver percussion measurement; normal 6-12 cm in adults', pronunciation: 'LIV-er span' },
        { term: 'DEXA T-score', definition: 'Dual-energy X-ray absorptiometry measure; <-2.5 = osteoporosis, -1.0 to -2.5 = osteopenia', pronunciation: 'DEK-sa T-score' },
        { term: 'stoma', definition: 'Surgically created opening between body cavity and external surface', pronunciation: 'STOH-muh' },
        { term: 'anastomosis', definition: 'Surgical connection between two tubular structures', pronunciation: 'uh-nas-tuh-MOH-sis' },
        { term: 'margins', definition: 'Tissue border between resected specimen and remaining tissue; critical for oncologic surgery', pronunciation: 'MAR-jinz' },
      ],
      examples: [
        'Liver disease differentiation: Hepatitis (-itis = inflammation, elevated transaminases) vs Cirrhosis (-osis = scarring, synthetic dysfunction)',
        'Colorectal surgical procedures: Colectomy (-ectomy = remove colon), Colostomy (-ostomy = opening), Colotomy (-otomy = cut into colon)',
        'Joint pathology: Arthritis (-itis = inflammatory, rheumatoid, gout) vs Arthrosis (-osis = degenerative, osteoarthritis)',
        'Kidney conditions: Nephritis (-itis = glomerulonephritis, interstitial nephritis) vs Nephrosis (-osis = minimal change disease)',
        'Vascular procedures: Endarterectomy (-ectomy = remove plaque) vs Angioplasty (-plasty = open vessel) vs Thrombectomy (-ectomy = remove clot)',
        'Gastric procedures: Gastrectomy (-ectomy = remove stomach) vs Gastrostomy (-ostomy = stomach opening) vs Gastrotomy (-otomy = cut into stomach)',
        'Pain syndromes: Neuralgia (-algia = nerve pain, often neuropathic) vs Arthralgia (-algia = joint pain)',
      ],
      clinicalNotes: 'Suffix-based understanding guides clinical approach. "-itis" conditions often require anti-inflammatory or antimicrobial therapy. "-osis" conditions typically indicate chronic degenerative processes managed medically or surgically. "-megaly" requires imaging and laboratory characterization. Surgical suffixes (-ectomy, -ostomy, -plasty) indicate procedure type critical for preoperative counseling and postoperative care.',
    },

    5: {
      level: 5,
      summary: 'Medical suffixes encode complex clinical, therapeutic, and prognostic information through morphological patterns that reflect evidence-based disease classification and treatment algorithms.',
      explanation: 'Medical suffixes constitute a clinically meaningful taxonomy that integrates pathophysiological mechanisms with therapeutic approaches. The systematic application of suffixes reflects evidence-based disease classification and guides clinical decision-making through standardized terminology.\n\n**INFLAMMATORY VERSUS DEGENERATIVE CLASSIFICATION:**\n\n**-itis (Inflammatory): Evidence-Based Approach**\n\n*Infectious -itis (Antimicrobial-Directed):*\n- Meningitis: CSF analysis (WBC, protein, glucose, culture), empiric antibiotics based on age\n- Appendicitis: CT diagnosis, prompt appendectomy to prevent perforation\n- Osteomyelitis: MRI confirmation, long-term IV antibiotics, possible surgical debridement\n- Diverticulitis: Hinchey classification guides conservative vs surgical management\n\n*Autoimmune -itis (Immunomodulatory-Directed):*\n- Thyroiditis: Hashimoto (hypothyroid, TPO antibodies), Graves (hyperthyroid, TSI), postpartum transient\n- Myocarditis: Viral prodrome, troponin elevation, CMR confirmation, ACE inhibitors, avoid exercise\n- Inflammatory bowel disease: Ulcerative colitis vs Crohn disease, mesalamine, biologics, surgical considerations\n\n**-osis (Degenerative/Metabolic): Evidence-Based Approach**\n\n*Metabolic -osis:*\n- Osteoporosis: FRAX score, DEXA screening (women >65, men >70), bisphosphonates, denosumab, teriparatide\n- Hepatosteatosis (NAFLD): Fibrosis-4 score, ultrasound elastography, weight loss, pioglitazone, NASH progression risk\n- Cholelithiasis: Symptomatic = cholecystectomy, asymptomatic observation, watchful waiting\n\n*Structural -osis:*\n- Aortic stenosis: Echo severity (velocity, mean gradient), AVA, watchful waiting vs AVR for symptoms or EF <50%\n- Mitral valve prolapse: MVP syndrome, beta-blockers for dysautonomia, surgical repair vs replacement criteria\n- Diverticulosis: High-fiber diet, mesalamine for recurrent diverticulitis controversy\n\n**SURGICAL ONCOLOGIC SUFFIX CLASSIFICATION:**\n\n**Cancer Surgery -ectomy vs -plasty:**\n- Lumpectomy (breast conservation) vs Mastectomy: NSABP B-06 trial equivalence, margin status\n- Prostatectomy: Radical vs robotic, nerve-sparing, continence and potency considerations\n- Thyroidectomy: Lobectomy vs total, ATA risk stratification, RAI indications\n- Colectomy: Segmental vs hemicolectomy, lymphadenectomy extent, CME vs complete mesocolic excision\n\n**Reconstructive -plasty:**\n- Breast reconstruction: Implant-based vs autologous (DIEP, TRAM flap), timing (immediate vs delayed)\n- Arthroplasty: TSA, hemiarthroplasty, reverse TSA, outcomes, rehabilitation expectations\n- Angioplasty: PCI vs CABG (SYNTAX, FREEDOM trials), DES vs BMS, DAPT duration\n\n**DIAGNOSTIC AND IMAGING SUFFIX UTILIZATION:**\n\n**-scopy (Endoscopic Evaluation):**\n- Colonoscopy: Screening interval (normal 10y, adenoma varies by number/size), adenoma surveillance guidelines\n- Upper endoscopy: Indication, biopsy protocol, Barrett surveillance, Seattle criteria\n- Bronchoscopy: Central lesions, transbronchial biopsy, EBUS for mediastinal staging\n\n**-graphy (Imaging Modalities):**\n- Mammography: Screening (biennial 50-74 USPSTF), dense breast notification, supplemental MRI\n- Coronary angiography: Indications (stable CAD, ACS), FFR for intermediate lesions, PCI vs CABG\n- Echocardiography: TTE standard, TEE for valvular detail, contrast for poor windows',
      keyTerms: [
        { term: 'Hinchey classification', definition: 'Staging system for perforated diverticulitis guiding surgical management: I (phlegmon) to IV (fecal peritonitis)', pronunciation: 'HIN-chee' },
        { term: 'FRAX score', definition: 'Fracture risk assessment tool combining clinical factors to guide osteoporosis treatment decisions', pronunciation: 'FRAX' },
        { term: 'NSABP B-06', definition: 'Trial demonstrating equivalence of lumpectomy + radiation vs mastectomy for early breast cancer', pronunciation: 'en-sab-bee-bee-zero-six' },
        { term: 'AVA', definition: 'Aortic valve area; severe AS <1.0 cm2, very severe <0.6 cm2', pronunciation: 'A-V-A' },
        { term: 'FFR', definition: 'Fractional flow reserve; <0.80 indicates ischemia, PCI beneficial', pronunciation: 'F-F-R' },
        { term: 'SYNTAX score', definition: 'Coronary artery disease complexity score guiding PCI vs CABG decision', pronunciation: 'SIN-taks' },
        { term: 'DAPT', definition: 'Dual antiplatelet therapy (aspirin + P2Y12 inhibitor) after PCI', pronunciation: 'DAPT' },
        { term: 'EBUS', definition: 'Endobronchial ultrasound for mediastinal lymph node sampling', pronunciation: 'E-bus' },
      ],
      examples: [
        'Diverticulitis management by Hinchey stage: Ia (phlegmon) - antibiotics, Ib (abscess) - antibiotics + percutaneous drainage, II (purulent peritonitis) - sigmoid resection + primary anastomosis, III (feculent) - Hartmann procedure',
        'Aortic stenosis: Normal AVA 2.5-4.5 cm2, mild 1.5-2.5, moderate 1.0-1.5, severe <1.0; Intervention for symptoms or EF <50% or asymptomatic severe + abnormal stress test',
        'Colon adenoma surveillance: 1-2 <10mm low-grade = 5-10y, 3-4 <10mm low-grade = 3-5y, 1-2 >=10mm = 3y, >5 adenomas = 1y, any high-grade = 1y',
        'PCI vs CABG by SYNTAX: Low (0-22) PCI equivalent, Intermediate (23-32) CABG advantage for diabetics, High (>32) CABG superior',
        'Thyroid cancer surgery: ATA 2015 guidelines, lobectomy for <4cm low-risk, total for >4cm or high-risk, RAI based on response to therapy stratification',
        'DAPT after DES: Short (1mo) for ischemic bleed risk, standard (6mo) for most, extended (12-30mo) for high ischemic/low bleed risk (PEGASUS, DAPT studies)',
      ],
      clinicalNotes: 'Suffix-based clinical taxonomy supports evidence-based practice. "-itis" conditions require inflammatory characterization (infectious vs autoimmune) for targeted therapy. "-osis" conditions indicate chronic processes requiring surveillance or staged intervention. Surgical suffixes (-ectomy, -plasty, -ostomy) determine operative approach, reconstruction considerations, and postoperative care pathways. "-scopy" and "-graphy" suffixes indicate diagnostic modality with specific indications, surveillance intervals, and guideline-directed follow-up.',
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
    { targetId: 'medical-terminology-word-roots', targetType: 'topic', relationship: 'sibling', label: 'Word Roots' },
    { targetId: 'medical-terminology-combining-forms', targetType: 'topic', relationship: 'sibling', label: 'Combining Forms' },
    { targetId: 'medical-terminology-systematic', targetType: 'topic', relationship: 'related', label: 'Systematic Terminology' },
  ],
  tags: {
    systems: ['general'],
    topics: ['medical-terminology', 'word-structure', 'etymology', 'procedures', 'diagnosis'],
    keywords: ['suffixes', 'word-parts', 'surgery', 'diagnosis', 'specialties'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'medicine'] },
  },
  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default medicalSuffixes;
