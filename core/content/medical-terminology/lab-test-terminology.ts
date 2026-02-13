/**
 * Lab Test Terminology Content
 *
 * Medical vocabulary for laboratory testing:
 * - Complete Blood Count (CBC) terms
 * - Metabolic panel terms
 * - Coagulation terms
 * - Urinalysis terms
 * - Microbiology terms
 * - Specimen handling terms
 */

import { MedicalTerm, TerminologyModule } from './types';

// ============================================================================
// HEMATOLOGY LAB TERMS
// ============================================================================

export const hematologyLabTerms: MedicalTerm[] = [
  {
    id: 'lab-hemoglobin',
    term: 'Hemoglobin',
    alternateSpellings: ['Haemoglobin', 'Hgb', 'Hb'],
    pronunciation: {
      ipa: '/ˈhiːməɡloʊbɪn/',
      simplified: 'HEE-muh-gloh-bin',
      stressedSyllable: 1,
    },
    components: {
      root: 'hem/o + glob',
      suffix: '-in',
    },
    definitions: {
      1: 'The red stuff in blood cells that carries oxygen',
      2: 'The protein in red blood cells that carries oxygen',
      3: 'Oxygen-carrying metalloprotein in erythrocytes',
      4: 'Tetrameric protein with 4 heme groups; carries O2 and CO2',
      5: 'Hemoglobin A (HbA) has 2 alpha and 2 beta chains; oxygen binding is cooperative (sigmoidal curve); 2,3-DPG decreases affinity; variants include HbS, HbC, HbF',
    },
    etymology: {
      language: 'Greek/Latin',
      originalWord: 'haima + globus',
      originalMeaning: 'blood + ball',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['hematocrit', 'anemia', 'oxygen saturation', 'hemoglobinopathy'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-hematocrit',
    term: 'Hematocrit',
    alternateSpellings: ['Haematocrit', 'Hct', 'PCV'],
    pronunciation: {
      ipa: '/hɪˈmætəkrɪt/',
      simplified: 'hih-MAT-uh-krit',
      stressedSyllable: 2,
    },
    components: {
      root: 'hemat/o + crit',
    },
    definitions: {
      1: 'How much of your blood is made up of red blood cells',
      2: 'The percentage of blood that is red blood cells',
      3: 'The fraction of blood volume occupied by erythrocytes',
      4: 'Measured as percentage; approximately 3x hemoglobin value',
      5: 'Hematocrit varies with hydration status; spuriously elevated in hemoconcentration; low Hct with normal/high MCV suggests reticulocytosis or macrocytosis; normal male 40-54%, female 36-48%',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'haima + krites',
      originalMeaning: 'blood + judge/separator',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['hemoglobin', 'anemia', 'polycythemia', 'dehydration'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-leukocytosis',
    term: 'Leukocytosis',
    pronunciation: {
      ipa: '/ˌluːkəsaɪˈtoʊsɪs/',
      simplified: 'loo-koh-sy-TOH-sis',
      stressedSyllable: 4,
    },
    components: {
      root: 'leuk/o + cyt',
      suffix: '-osis',
    },
    definitions: {
      1: 'Having too many white blood cells',
      2: 'An elevated white blood cell count',
      3: 'Increased circulating leukocytes above the normal range',
      4: 'WBC >11,000/microL; may be neutrophilic, lymphocytic, or eosinophilic',
      5: 'Leukocytosis differential is key: neutrophilia (infection, steroids), lymphocytosis (viral, CLL), eosinophilia (allergy, parasites, drugs); leukemoid reaction shows WBC >50,000 without malignancy',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'leukos + kytos + -osis',
      originalMeaning: 'white + cell + condition',
    },
    category: 'laboratory',
    bodySystems: ['hematologic', 'immune'],
    relatedTerms: ['leukopenia', 'neutrophilia', 'lymphocytosis', 'left shift'],
    antonyms: ['leukopenia'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-reticulocyte',
    term: 'Reticulocyte',
    pronunciation: {
      ipa: '/rɪˈtɪkjʊloʊsaɪt/',
      simplified: 'reh-TIK-yoo-loh-site',
      stressedSyllable: 2,
    },
    components: {
      root: 'reticul/o + cyt',
      suffix: '-e',
    },
    definitions: {
      1: 'Baby red blood cells that just left the bone marrow',
      2: 'Young red blood cells recently released from bone marrow',
      3: 'Immature erythrocytes containing residual RNA',
      4: 'Elevated in hemolysis and bleeding (appropriate response); low in production failure',
      5: 'Reticulocyte count assesses marrow response to anemia; corrected count and reticulocyte index account for anemia severity; reticulocyte production index (RPI) >2 indicates appropriate response',
    },
    etymology: {
      language: 'Latin/Greek',
      originalWord: 'reticulum + kytos',
      originalMeaning: 'small net + cell',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['anemia', 'hemolysis', 'bone marrow response', 'RPI'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-mcv',
    term: 'Mean Corpuscular Volume',
    alternateSpellings: ['MCV'],
    pronunciation: {
      ipa: '/miːn kɔːrˈpʌskjʊlər ˈvɒljuːm/',
      simplified: 'MEEN kor-PUS-kyoo-ler VOL-yoom',
      stressedSyllable: 3,
    },
    components: {
      root: 'corpuscul + volum',
    },
    definitions: {
      1: 'The average size of your red blood cells',
      2: 'A measurement of the average size of red blood cells',
      3: 'The average volume of erythrocytes, measured in femtoliters',
      4: 'Classifies anemia as microcytic (<80), normocytic (80-100), or macrocytic (>100)',
      5: 'MCV guides anemia differential: microcytic (iron deficiency, thalassemia), normocytic (chronic disease, hemolysis), macrocytic (B12/folate deficiency, MDS, alcohol); reticulocytosis can elevate MCV',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'corpusculum + volumen',
      originalMeaning: 'small body + scroll/volume',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['MCH', 'MCHC', 'RDW', 'anemia classification'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// CHEMISTRY LAB TERMS
// ============================================================================

export const chemistryLabTerms: MedicalTerm[] = [
  {
    id: 'lab-creatinine',
    term: 'Creatinine',
    pronunciation: {
      ipa: '/kriˈætɪniːn/',
      simplified: 'kree-AT-ih-neen',
      stressedSyllable: 2,
    },
    components: {
      root: 'creatin',
      suffix: '-ine',
    },
    definitions: {
      1: 'A waste product from muscles that your kidneys filter out',
      2: 'A waste product filtered by the kidneys, used to measure kidney function',
      3: 'Metabolic byproduct of creatine phosphate in skeletal muscle',
      4: 'Freely filtered at glomerulus; used to estimate GFR; affected by muscle mass',
      5: 'Serum creatinine is inversely related to GFR; small changes at low creatinine reflect large GFR changes; cystatin C is an alternative less affected by muscle mass; equations (CKD-EPI) estimate GFR',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'kreas',
      originalMeaning: 'flesh/meat',
    },
    category: 'laboratory',
    bodySystems: ['urinary'],
    relatedTerms: ['BUN', 'GFR', 'kidney function', 'creatinine clearance'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-bun',
    term: 'Blood Urea Nitrogen',
    alternateSpellings: ['BUN', 'Urea'],
    pronunciation: {
      ipa: '/blʌd jʊˈriːə ˈnaɪtrədʒən/',
      simplified: 'BLUD yoo-REE-uh NY-truh-jen',
      stressedSyllable: 3,
    },
    components: {
      root: 'urea + nitrogen',
    },
    definitions: {
      1: 'Another waste product your kidneys filter from blood',
      2: 'A measure of nitrogen in blood from protein breakdown',
      3: 'The nitrogen component of urea in serum',
      4: 'Elevated in renal failure, dehydration, and GI bleeding; BUN/Cr ratio helps differentiate prerenal vs intrinsic',
      5: 'BUN increases with protein catabolism, GI bleeding, and decreased renal perfusion; BUN:Cr >20:1 suggests prerenal azotemia; 10-15:1 ratio is typical for intrinsic renal disease',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'ouron',
      originalMeaning: 'urine',
    },
    category: 'laboratory',
    bodySystems: ['urinary'],
    relatedTerms: ['creatinine', 'azotemia', 'uremia', 'prerenal'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-troponin',
    term: 'Troponin',
    pronunciation: {
      ipa: '/ˈtroʊpənɪn/',
      simplified: 'TROH-puh-nin',
      stressedSyllable: 1,
    },
    components: {
      root: 'tropon',
      suffix: '-in',
    },
    definitions: {
      1: 'A substance released when heart muscle is damaged',
      2: 'A protein released from damaged heart muscle',
      3: 'Cardiac-specific proteins released during myocardial injury',
      4: 'Troponin I and T are specific to cardiac muscle; rise 3-6 hours post-MI, peak 24 hours',
      5: 'High-sensitivity troponin detects MI earlier and identifies more patients; rising pattern helps distinguish acute MI from chronic elevation (renal failure, heart failure); delta troponin over 3-6 hours is key',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'tropein',
      originalMeaning: 'to turn (refers to role in muscle contraction)',
    },
    category: 'laboratory',
    bodySystems: ['cardiovascular'],
    relatedTerms: ['myocardial infarction', 'ACS', 'cardiac biomarkers', 'NSTEMI'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-bilirubin',
    term: 'Bilirubin',
    pronunciation: {
      ipa: '/ˌbɪlɪˈruːbɪn/',
      simplified: 'bil-ih-ROO-bin',
      stressedSyllable: 3,
    },
    components: {
      root: 'bili + rub',
      suffix: '-in',
    },
    definitions: {
      1: 'A yellow substance made when red blood cells break down',
      2: 'A yellow pigment produced when red blood cells are recycled',
      3: 'Degradation product of heme metabolism',
      4: 'Unconjugated (indirect) is albumin-bound; conjugated (direct) is water-soluble',
      5: 'Elevated indirect bilirubin: hemolysis, Gilbert syndrome; elevated direct bilirubin: biliary obstruction, hepatocellular disease; conjugated hyperbilirubinemia with elevated ALP suggests cholestatic pattern',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'bilis + ruber',
      originalMeaning: 'bile + red',
    },
    category: 'laboratory',
    bodySystems: ['gastrointestinal', 'hematologic'],
    relatedTerms: ['jaundice', 'hemolysis', 'cholestasis', 'conjugated', 'unconjugated'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-electrolytes',
    term: 'Electrolytes',
    pronunciation: {
      ipa: '/ɪˈlektrəlaɪts/',
      simplified: 'ih-LEK-troh-lites',
      stressedSyllable: 2,
    },
    components: {
      root: 'electr/o + lyt',
      suffix: '-e',
    },
    definitions: {
      1: 'Minerals in your blood that help your body work properly',
      2: 'Minerals in the blood like sodium, potassium, and chloride',
      3: 'Ionized minerals maintaining fluid balance and cellular function',
      4: 'Sodium, potassium, chloride, bicarbonate are routinely measured',
      5: 'Electrolyte abnormalities have cardiac and neurologic consequences; hypo/hypernatremia affect mental status; hypo/hyperkalemia affect cardiac conduction; anion gap helps classify metabolic acidosis',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'elektron + lytos',
      originalMeaning: 'amber (electric) + dissolvable',
    },
    category: 'laboratory',
    bodySystems: ['urinary', 'endocrine'],
    relatedTerms: ['sodium', 'potassium', 'chloride', 'bicarbonate', 'anion gap'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// COAGULATION LAB TERMS
// ============================================================================

export const coagulationLabTerms: MedicalTerm[] = [
  {
    id: 'lab-pt',
    term: 'Prothrombin Time',
    alternateSpellings: ['PT', 'Pro-time'],
    pronunciation: {
      ipa: '/proʊˈθrɒmbɪn taɪm/',
      simplified: 'proh-THROM-bin time',
      stressedSyllable: 2,
    },
    components: {
      prefix: 'pro-',
      root: 'thrombin',
    },
    definitions: {
      1: 'A test that measures how quickly your blood clots',
      2: 'A test measuring how fast blood clots via the extrinsic pathway',
      3: 'Measures clotting through the extrinsic and common pathways',
      4: 'Tests factors VII, X, V, II, and fibrinogen; prolonged by warfarin and liver disease',
      5: 'PT primarily assesses factor VII (shortest half-life); INR standardizes PT for warfarin monitoring; elevated in liver disease, vitamin K deficiency, and DIC',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'pro + thrombos',
      originalMeaning: 'before + clot',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['INR', 'PTT', 'coagulation', 'warfarin', 'vitamin K'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-inr',
    term: 'International Normalized Ratio',
    alternateSpellings: ['INR'],
    pronunciation: {
      ipa: '/ˌɪntərˈnæʃənəl ˈnɔːrməlaɪzd ˈreɪʃioʊ/',
      simplified: 'in-ter-NASH-uh-nul NOR-muh-lized RAY-shee-oh',
      stressedSyllable: 3,
    },
    components: {
      root: 'international + normalized + ratio',
    },
    definitions: {
      1: 'A standardized way to measure how thin your blood is on blood thinners',
      2: 'A standardized measure of blood clotting used to monitor warfarin',
      3: 'Standardized prothrombin time ratio for anticoagulation monitoring',
      4: 'Target INR varies by indication: 2-3 for AFib, 2.5-3.5 for mechanical valves',
      5: 'INR = (patient PT / control PT)^ISI; allows comparison across laboratories; supratherapeutic INR increases bleeding risk; reversal agents include vitamin K, FFP, and 4-factor PCC',
    },
    etymology: {
      language: 'English',
      originalWord: 'International Normalized Ratio',
      originalMeaning: 'Standardized clotting measurement',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['PT', 'warfarin', 'anticoagulation', 'vitamin K'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-ptt',
    term: 'Partial Thromboplastin Time',
    alternateSpellings: ['PTT', 'aPTT', 'Activated PTT'],
    pronunciation: {
      ipa: '/ˈpɑːrʃəl θrɒmboʊˈplæstɪn taɪm/',
      simplified: 'PAR-shul throm-boh-PLAS-tin time',
      stressedSyllable: 4,
    },
    components: {
      root: 'thromb/o + plast',
      suffix: '-in',
    },
    definitions: {
      1: 'Another test measuring how quickly blood clots',
      2: 'A test measuring blood clotting via the intrinsic pathway',
      3: 'Measures clotting through the intrinsic and common pathways',
      4: 'Tests factors XII, XI, IX, VIII, X, V, II, and fibrinogen; monitors heparin',
      5: 'PTT sensitive to intrinsic pathway factors; prolonged by heparin, hemophilia, lupus anticoagulant; mixing study differentiates factor deficiency (corrects) from inhibitor (does not correct)',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'thrombos + plastos',
      originalMeaning: 'clot + formed',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['PT', 'heparin', 'hemophilia', 'mixing study'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-d-dimer',
    term: 'D-Dimer',
    pronunciation: {
      ipa: '/diː ˈdaɪmər/',
      simplified: 'DEE-DY-mer',
      stressedSyllable: 2,
    },
    components: {
      root: 'd + dimer',
    },
    definitions: {
      1: 'A test that shows if there are blood clots forming in your body',
      2: 'A protein fragment produced when blood clots break down',
      3: 'Fibrin degradation product indicating active clot formation and lysis',
      4: 'Elevated in DVT/PE, DIC, recent surgery, infection, malignancy, and pregnancy',
      5: 'D-dimer is highly sensitive but not specific for VTE; negative D-dimer with low pretest probability excludes DVT/PE; age-adjusted cutoffs improve specificity in elderly; very high levels suggest DIC or extensive clot',
    },
    etymology: {
      language: 'English/Greek',
      originalWord: 'D + di + meros',
      originalMeaning: 'D-fragment + two + parts',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['DVT', 'PE', 'DIC', 'fibrinolysis', 'Wells criteria'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-fibrinogen',
    term: 'Fibrinogen',
    pronunciation: {
      ipa: '/faɪˈbrɪnədʒən/',
      simplified: 'fy-BRIN-uh-jen',
      stressedSyllable: 2,
    },
    components: {
      root: 'fibrin',
      suffix: '-ogen',
    },
    definitions: {
      1: 'A protein in your blood that helps form clots',
      2: 'A protein that is converted to fibrin to form blood clots',
      3: 'Glycoprotein converted by thrombin to fibrin in clot formation',
      4: 'Acute phase reactant; low in DIC, liver disease, massive transfusion',
      5: 'Fibrinogen is factor I in coagulation cascade; <100 mg/dL is critically low; replacement via cryoprecipitate or fibrinogen concentrate; elevated in inflammation; hypofibrinogenemia in DIC is consumptive',
    },
    etymology: {
      language: 'Latin/Greek',
      originalWord: 'fibra + genes',
      originalMeaning: 'fiber + producing',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['fibrin', 'DIC', 'thrombin', 'cryoprecipitate'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// URINALYSIS TERMS
// ============================================================================

export const urinalysisTerms: MedicalTerm[] = [
  {
    id: 'lab-specific-gravity',
    term: 'Specific Gravity',
    alternateSpellings: ['Sp Gr', 'SG'],
    pronunciation: {
      ipa: '/spəˈsɪfɪk ˈɡrævɪti/',
      simplified: 'speh-SIF-ik GRAV-ih-tee',
      stressedSyllable: 2,
    },
    components: {
      root: 'specific + gravity',
    },
    definitions: {
      1: 'How concentrated your urine is',
      2: 'A measure of how concentrated urine is compared to water',
      3: 'Ratio of urine density to water density, indicating concentration',
      4: 'Normal 1.005-1.030; reflects ability to concentrate/dilute urine',
      5: 'Fixed specific gravity at 1.010 suggests tubular damage (isosthenuria); high SG with dehydration is appropriate response; low SG with high urine output suggests diabetes insipidus',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'species + gravitas',
      originalMeaning: 'kind + weight',
    },
    category: 'laboratory',
    bodySystems: ['urinary'],
    relatedTerms: ['osmolality', 'ADH', 'dehydration', 'diabetes insipidus'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-pyuria',
    term: 'Pyuria',
    pronunciation: {
      ipa: '/paɪˈjʊəriə/',
      simplified: 'py-YOOR-ee-uh',
      stressedSyllable: 2,
    },
    components: {
      root: 'py/o + ur',
      suffix: '-ia',
    },
    definitions: {
      1: 'White blood cells (pus) in your urine',
      2: 'The presence of pus (white blood cells) in urine',
      3: 'White blood cells in urine indicating inflammation',
      4: 'Defined as >10 WBC/HPF; suggests UTI but not diagnostic alone',
      5: 'Sterile pyuria (WBCs without bacteria) occurs in interstitial nephritis, TB, STIs, and partially treated UTI; pyuria with bacteriuria supports UTI diagnosis; catheterized patients often have pyuria without infection',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'pyon + ouron',
      originalMeaning: 'pus + urine',
    },
    category: 'laboratory',
    bodySystems: ['urinary'],
    relatedTerms: ['UTI', 'bacteriuria', 'WBC esterase', 'sterile pyuria'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-proteinuria',
    term: 'Proteinuria',
    pronunciation: {
      ipa: '/ˌproʊtiːˈnjʊəriə/',
      simplified: 'proh-tee-NYOOR-ee-uh',
      stressedSyllable: 3,
    },
    components: {
      root: 'protein + ur',
      suffix: '-ia',
    },
    definitions: {
      1: 'Protein in your urine that should not normally be there',
      2: 'Protein in the urine, often indicating kidney problems',
      3: 'Abnormal urinary protein excretion',
      4: 'May be glomerular, tubular, or overflow; quantified by urine protein:creatinine ratio',
      5: 'Albuminuria is marker of glomerular damage; nephrotic range >3.5g/day; dipstick detects albumin not light chains; microalbuminuria (30-300 mg/day) is early diabetic nephropathy marker',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'proteios + ouron',
      originalMeaning: 'primary/first + urine',
    },
    category: 'laboratory',
    bodySystems: ['urinary'],
    relatedTerms: ['albuminuria', 'nephrotic syndrome', 'diabetic nephropathy', 'UPCR'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-cast',
    term: 'Urinary Cast',
    pronunciation: {
      ipa: '/ˈjʊərɪneri kæst/',
      simplified: 'YOOR-ih-nair-ee kast',
      stressedSyllable: 1,
    },
    components: {
      root: 'urinary + cast',
    },
    definitions: {
      1: 'Tiny tube-shaped particles found in urine',
      2: 'Cylindrical structures formed in kidney tubules found in urine',
      3: 'Tubular casts formed from protein matrix in renal tubules',
      4: 'Types: hyaline (normal), RBC (glomerulonephritis), WBC (pyelonephritis), muddy brown (ATN)',
      5: 'Casts form in tubules and indicate renal origin; RBC casts pathognomonic of glomerulonephritis; WBC casts indicate upper tract inflammation; muddy brown granular casts classic for ATN',
    },
    etymology: {
      language: 'English/Latin',
      originalWord: 'urina + Old Norse kasta',
      originalMeaning: 'urine + to throw/mold',
    },
    category: 'laboratory',
    bodySystems: ['urinary'],
    relatedTerms: ['glomerulonephritis', 'pyelonephritis', 'ATN', 'microscopy'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// MICROBIOLOGY TERMS
// ============================================================================

export const microbiologyTerms: MedicalTerm[] = [
  {
    id: 'lab-gram-stain',
    term: 'Gram Stain',
    pronunciation: {
      ipa: '/ɡræm steɪn/',
      simplified: 'GRAM stayn',
      stressedSyllable: 1,
    },
    components: {
      root: 'Gram + stain',
    },
    definitions: {
      1: 'A test that colors bacteria to help identify them',
      2: 'A staining technique that classifies bacteria as gram-positive or gram-negative',
      3: 'Differential staining based on cell wall structure',
      4: 'Gram-positive retain crystal violet (thick peptidoglycan); gram-negative stain pink/red',
      5: 'Gram stain provides rapid preliminary identification; gram-positive cocci in clusters suggests Staph, chains suggests Strep; gram-negative rods suggest Enterobacteriaceae or Pseudomonas; guides empiric therapy',
    },
    etymology: {
      language: 'Danish',
      originalWord: 'Hans Christian Gram',
      originalMeaning: 'Named after Danish bacteriologist (1853-1938)',
    },
    category: 'laboratory',
    bodySystems: ['immune'],
    relatedTerms: ['gram-positive', 'gram-negative', 'bacteria', 'culture'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-culture',
    term: 'Culture',
    pronunciation: {
      ipa: '/ˈkʌltʃər/',
      simplified: 'KUL-cher',
      stressedSyllable: 1,
    },
    components: {
      root: 'cultur',
      suffix: '-e',
    },
    definitions: {
      1: 'Growing germs from a sample to find out what is causing an infection',
      2: 'Growing microorganisms from a sample to identify infections',
      3: 'Laboratory propagation of microorganisms for identification and susceptibility testing',
      4: 'Blood, urine, sputum, wound cultures common; results in 24-72 hours typically',
      5: 'Culture allows definitive identification and susceptibility testing; blood cultures require 2+ sets from different sites; procalcitonin and clinical context guide empiric therapy while awaiting results',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'cultura',
      originalMeaning: 'cultivation',
    },
    category: 'laboratory',
    bodySystems: ['immune'],
    relatedTerms: ['sensitivity', 'blood culture', 'bacteremia', 'antibiotic'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-sensitivity',
    term: 'Sensitivity',
    alternateSpellings: ['Susceptibility', 'S/S'],
    pronunciation: {
      ipa: '/ˌsensɪˈtɪvɪti/',
      simplified: 'sen-sih-TIV-ih-tee',
      stressedSyllable: 3,
    },
    components: {
      root: 'sensitiv',
      suffix: '-ity',
    },
    definitions: {
      1: 'Testing which antibiotics can kill the germs causing your infection',
      2: 'Testing which antibiotics are effective against bacteria',
      3: 'Laboratory determination of antimicrobial effectiveness against an isolate',
      4: 'Reported as sensitive (S), intermediate (I), or resistant (R); MIC guides dosing',
      5: 'Susceptibility testing uses disk diffusion or MIC methods; CLSI breakpoints define S/I/R; multidrug resistance requires combination therapy; antibiogram data guides empiric choices',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'sensitivus',
      originalMeaning: 'capable of sensation',
    },
    category: 'laboratory',
    bodySystems: ['immune'],
    relatedTerms: ['culture', 'MIC', 'antibiotic', 'resistance'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// SPECIMEN HANDLING TERMS
// ============================================================================

export const specimenTerms: MedicalTerm[] = [
  {
    id: 'lab-specimen',
    term: 'Specimen',
    pronunciation: {
      ipa: '/ˈspesɪmən/',
      simplified: 'SPES-ih-men',
      stressedSyllable: 1,
    },
    components: {
      root: 'specim',
      suffix: '-en',
    },
    definitions: {
      1: 'A sample taken from your body for testing',
      2: 'A sample of body fluid or tissue collected for testing',
      3: 'A biological sample obtained for laboratory analysis',
      4: 'Types include blood, urine, stool, CSF, tissue, and body fluids',
      5: 'Specimen integrity is essential for accurate results; proper collection technique, labeling, and transport required; preanalytical errors are most common source of lab error',
    },
    etymology: {
      language: 'Latin',
      originalWord: 'specimen',
      originalMeaning: 'example, pattern',
    },
    category: 'laboratory',
    bodySystems: ['general'],
    relatedTerms: ['phlebotomy', 'collection', 'processing', 'analysis'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-hemolysis',
    term: 'Hemolysis',
    pronunciation: {
      ipa: '/hɪˈmɒlɪsɪs/',
      simplified: 'hih-MOL-ih-sis',
      stressedSyllable: 2,
    },
    components: {
      root: 'hem/o + lys',
      suffix: '-is',
    },
    definitions: {
      1: 'When red blood cells break open',
      2: 'The breakdown of red blood cells',
      3: 'Rupture of erythrocytes releasing intracellular contents',
      4: 'In vivo (pathological) or in vitro (specimen handling issue)',
      5: 'In vitro hemolysis is the most common preanalytical error; causes falsely elevated potassium, LDH, and AST; traumatic collection, prolonged tourniquet, and improper handling are causes; redraw required',
    },
    etymology: {
      language: 'Greek',
      originalWord: 'haima + lysis',
      originalMeaning: 'blood + loosening',
    },
    category: 'laboratory',
    bodySystems: ['hematologic'],
    relatedTerms: ['specimen', 'potassium', 'LDH', 'preanalytical'],
    usageContext: 'clinical',
  },
  {
    id: 'lab-fasting',
    term: 'Fasting',
    pronunciation: {
      ipa: '/ˈfæstɪŋ/',
      simplified: 'FAS-ting',
      stressedSyllable: 1,
    },
    components: {
      root: 'fast',
      suffix: '-ing',
    },
    definitions: {
      1: 'Not eating or drinking before a blood test',
      2: 'Going without food for a period before blood tests',
      3: 'Abstaining from caloric intake before specimen collection',
      4: 'Typically 8-12 hours; required for glucose, lipids, and some other tests',
      5: 'Fasting requirements vary by test; glucose and triglycerides most affected by recent intake; non-fasting lipid panels increasingly accepted; water and medications generally allowed',
    },
    etymology: {
      language: 'Old English',
      originalWord: 'faestan',
      originalMeaning: 'to abstain from food',
    },
    category: 'laboratory',
    bodySystems: ['general'],
    relatedTerms: ['glucose', 'lipid panel', 'specimen collection', 'preanalytical'],
    usageContext: 'clinical',
  },
];

// ============================================================================
// EXPORT MODULE
// ============================================================================

export const labTestTerminologyModule: TerminologyModule = {
  id: 'lab-test-terminology',
  name: 'Lab Test Terminology',
  description: 'Medical vocabulary for laboratory testing including hematology, chemistry, coagulation, urinalysis, microbiology, and specimen handling terms',
  terms: [
    ...hematologyLabTerms,
    ...chemistryLabTerms,
    ...coagulationLabTerms,
    ...urinalysisTerms,
    ...microbiologyTerms,
    ...specimenTerms,
  ],
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
};

// Individual term collections are already exported above via `export const`

export default labTestTerminologyModule;
