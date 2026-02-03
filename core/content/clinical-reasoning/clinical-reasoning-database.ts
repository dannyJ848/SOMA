/**
 * Clinical Reasoning Database
 *
 * Comprehensive reference database of clinical reasoning concepts for
 * medical education. Covers diagnostic frameworks, differential diagnosis
 * strategies, cognitive biases, test interpretation, Bayesian reasoning,
 * clinical decision rules, and management reasoning.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ClinicalReasoningCategory =
  | 'diagnostic-framework'
  | 'differential-diagnosis'
  | 'clinical-decision-making'
  | 'cognitive-bias'
  | 'probability-reasoning'
  | 'test-interpretation'
  | 'management-reasoning'
  | 'case-presentation';

export interface ClinicalReasoningEntry {
  id: string;
  name: string;
  category: ClinicalReasoningCategory;
  description: string;
  conceptExplanation: string;
  clinicalApplication: string;
  examples: string[];
  pitfalls: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database Entries
// ---------------------------------------------------------------------------

export const clinicalReasoningDatabase: readonly ClinicalReasoningEntry[] = [
  // =======================================================================
  // DIAGNOSTIC FRAMEWORKS
  // =======================================================================
  {
    id: 'illness-scripts',
    name: 'Illness Scripts',
    category: 'diagnostic-framework',
    description:
      'Mental models that encapsulate the typical features of a disease including predisposing factors, pathophysiology, and clinical presentation.',
    conceptExplanation:
      'An illness script is a structured knowledge representation clinicians develop through experience. Each script contains three key components: enabling conditions (epidemiology, risk factors), the fault (pathophysiology), and consequences (signs, symptoms, labs, imaging). Expert clinicians possess thousands of well-refined scripts that allow rapid pattern matching. Novices build scripts through deliberate study and clinical exposure.',
    clinicalApplication:
      'When encountering a patient, the clinician activates candidate illness scripts based on initial cues, then compares incoming data against each script. Scripts that match well are retained while poorly fitting scripts are discarded. This process operates largely automatically in experts but should be made explicit by learners to improve diagnostic accuracy.',
    examples: [
      'Pulmonary embolism script: risk factors (immobility, OCP use, malignancy), pathophysiology (venous thrombosis embolizing to pulmonary vasculature), consequences (acute dyspnea, pleuritic chest pain, tachycardia, hypoxia, elevated D-dimer)',
      'Community-acquired pneumonia script: enabling conditions (age extremes, smoking, immunosuppression), fault (bacterial infection of lung parenchyma), consequences (productive cough, fever, focal consolidation on exam and imaging)',
      'Acute appendicitis script: enabling conditions (young adults, age 10-30), fault (luminal obstruction leading to inflammation), consequences (periumbilical pain migrating to RLQ, anorexia, low-grade fever, leukocytosis)',
    ],
    pitfalls: [
      'Over-reliance on classic presentations — atypical scripts are common in elderly, immunosuppressed, and pediatric populations',
      'Scripts can become rigid if not updated with new evidence',
      'Rare diseases may lack well-developed scripts, leading to missed diagnoses',
    ],
    keyPearls: [
      'Actively compare at least three illness scripts when evaluating a new patient',
      'Build scripts deliberately by summarizing each case you encounter into the three-component format',
      'Atypical presentations are the norm in the elderly — adjust your scripts accordingly',
    ],
    references: [
      'Charlin B, et al. Scripts and medical diagnostic knowledge. Acad Med. 2000;75(2):182-190',
      'Schmidt HG, Rikers RM. How expertise develops in medicine. Med Educ. 2007;41(12):1115-1121',
    ],
  },
  {
    id: 'problem-representation',
    name: 'Problem Representation',
    category: 'diagnostic-framework',
    description:
      'A concise, abstract summary of a clinical case that transforms raw patient data into a higher-order characterization to facilitate differential diagnosis generation.',
    conceptExplanation:
      'Problem representation distills a complex patient encounter into a single-sentence summary using semantic qualifiers and epidemiological framing. A well-crafted problem representation transforms "54-year-old man with chest pain" into "a middle-aged man with acute-onset substernal crushing chest pressure with exertional component and diaphoresis." This abstraction links the case to stored illness scripts and narrows the differential.',
    clinicalApplication:
      'After the initial history, construct a one-sentence problem representation incorporating: age and sex, acuity (acute, subacute, chronic), key qualifying descriptors (semantic qualifiers), and the most discriminating features. Revise iteratively as new data emerge. Share with the team to ensure aligned reasoning.',
    examples: [
      '"A previously healthy young woman presenting with acute-onset pleuritic chest pain and dyspnea in the setting of recent oral contraceptive use" — points toward PE',
      '"An elderly man with chronic progressive exertional dyspnea, orthopnea, and bilateral lower extremity edema" — points toward CHF',
      '"A middle-aged diabetic woman with subacute epigastric pain radiating to the back, elevated lipase, and recent alcohol binge" — points toward acute pancreatitis',
    ],
    pitfalls: [
      'Including too much raw data without abstraction defeats the purpose',
      'Premature problem representation may anchor on the wrong framing',
      'Failing to update the representation as new information arrives',
    ],
    keyPearls: [
      'A good problem representation should trigger illness scripts automatically',
      'Practice writing one-sentence summaries for every patient encounter',
      'Use semantic qualifiers (acute vs chronic, unilateral vs bilateral) to add precision',
    ],
    references: [
      'Bowen JL. Educational strategies to promote clinical diagnostic reasoning. N Engl J Med. 2006;355(21):2217-2225',
      'Bordage G. Prototypes and semantic qualifiers. Med Educ. 2007;41(12):1117-1121',
    ],
  },
  {
    id: 'semantic-qualifiers',
    name: 'Semantic Qualifiers',
    category: 'diagnostic-framework',
    description:
      'Paired opposite descriptors used to abstract and refine clinical data into diagnostically meaningful categories.',
    conceptExplanation:
      'Semantic qualifiers are abstract, contrasting terms (acute/chronic, unilateral/bilateral, constant/intermittent, localized/diffuse) that transform raw clinical data into discriminating features. Research shows expert diagnosticians use significantly more semantic qualifiers than novices. By recasting findings in these terms, clinicians move from data collection to pattern recognition, linking observations to stored illness scripts more efficiently.',
    clinicalApplication:
      'When characterizing any symptom or finding, consciously apply relevant semantic qualifier pairs. For pain: acute vs chronic, sharp vs dull, constant vs intermittent, localized vs diffuse, exertional vs resting. For systemic findings: unilateral vs bilateral, proximal vs distal, upper vs lower. This precision narrows differentials and guides workup.',
    examples: [
      'Acute vs chronic headache: acute thunderclap headache suggests SAH; chronic progressive suggests mass lesion or medication overuse',
      'Symmetric vs asymmetric joint pain: symmetric polyarthritis suggests RA; asymmetric suggests psoriatic arthritis, reactive arthritis, or gout',
      'Constant vs colicky abdominal pain: constant suggests peritonitis or pancreatitis; colicky suggests bowel obstruction or renal colic',
    ],
    pitfalls: [
      'Forcing qualifiers onto ambiguous presentations can create false precision',
      'Patients may describe symptoms in ways that do not map neatly onto qualifier pairs',
      'Some conditions change character over time (e.g., appendicitis pain evolves from colicky to constant)',
    ],
    keyPearls: [
      'Master the core qualifier pairs: acute/chronic, unilateral/bilateral, constant/intermittent, localized/diffuse, proximal/distal',
      'Semantic qualifiers are the vocabulary of expert clinical reasoning',
      'Use qualifiers when presenting cases to sharpen your own thinking and communication',
    ],
    references: [
      'Bordage G, Zacks R. The structure of medical knowledge in the memories of medical students and general practitioners. Med Educ. 1984;18(6):406-416',
      'Nendaz MR, Bordage G. Promoting diagnostic problem representation. Med Educ. 2002;36(8):760-766',
    ],
  },
  {
    id: 'hypothetico-deductive-reasoning',
    name: 'Hypothetico-Deductive Reasoning',
    category: 'diagnostic-framework',
    description:
      'A diagnostic reasoning strategy where clinicians generate hypotheses early, then gather data to confirm or refute them.',
    conceptExplanation:
      'Within seconds of encountering a patient, clinicians generate a set of diagnostic hypotheses (typically 3-5). Subsequent history questions, exam maneuvers, and tests are selected to discriminate between these hypotheses. Each piece of data either increases or decreases the probability of each hypothesis. This iterative cycle of hypothesis generation, data gathering, and hypothesis revision continues until sufficient diagnostic certainty is achieved.',
    clinicalApplication:
      'After the chief complaint and first few minutes of history, explicitly state your top 3-5 hypotheses. For each subsequent question or test, ask: "Which hypothesis am I trying to confirm or refute?" This prevents unfocused data gathering and keeps reasoning goal-directed. Document hypothesis evolution in your notes.',
    examples: [
      'Patient with acute chest pain: generate hypotheses (ACS, PE, aortic dissection, pneumothorax, GERD), then ask targeted questions about risk factors, quality, radiation, and associated symptoms for each',
      'Patient with new-onset seizure: hypotheses (epilepsy, structural lesion, metabolic derangement, drug effect, CNS infection), then order CT head, BMP, toxicology screen, and LP based on clinical picture',
    ],
    pitfalls: [
      'Generating too few hypotheses early increases risk of missing the diagnosis',
      'Confirmation bias may lead to selectively seeking data that supports favored hypothesis',
      'The approach is less efficient than pattern recognition for classic presentations',
    ],
    keyPearls: [
      'Always generate at least three hypotheses before diving into data gathering',
      'Actively seek disconfirming evidence for your leading hypothesis',
      'This is the dominant reasoning strategy for unfamiliar or complex presentations',
    ],
    references: [
      'Elstein AS, et al. Medical problem solving: an analysis of clinical reasoning. Cambridge: Harvard University Press; 1978',
      'Norman G. Research in clinical reasoning: past history and current trends. Med Educ. 2005;39(4):418-427',
    ],
  },
  {
    id: 'pattern-recognition-dx',
    name: 'Pattern Recognition (Gestalt)',
    category: 'diagnostic-framework',
    description:
      'Rapid, non-analytic diagnostic reasoning based on instant recognition of a clinical pattern from prior experience.',
    conceptExplanation:
      'Pattern recognition (System 1 thinking) allows experienced clinicians to make rapid diagnoses by matching the current clinical picture to previously encountered patterns. It is the dominant mode of reasoning used by experts for typical presentations. The process is fast, effortless, and largely unconscious. A cardiologist who sees ST-elevation on an ECG instantly recognizes STEMI; a dermatologist who sees a targetoid rash immediately considers erythema multiforme.',
    clinicalApplication:
      'Pattern recognition is most reliable for common presentations encountered frequently. Use it as a starting point but validate with analytic reasoning (hypothetico-deductive) especially when: the presentation is atypical, you are a learner, or the stakes are high. Develop pattern libraries through deliberate exposure to cases, image banks, and clinical experience.',
    examples: [
      'Cushingoid appearance (moon facies, central obesity, striae, buffalo hump) immediately triggering Cushing syndrome evaluation',
      'A child with barking cough, inspiratory stridor, and URI prodrome immediately recognized as croup',
      'Classic dermatome-distributed vesicular rash instantly identified as herpes zoster',
    ],
    pitfalls: [
      'Misidentification when presentations overlap (e.g., cellulitis vs DVT with erythema)',
      'Overconfidence in pattern recognition without analytic verification',
      'Less reliable for rare conditions or atypical presentations of common diseases',
    ],
    keyPearls: [
      'Pattern recognition improves with deliberate practice and case volume',
      'Always apply an analytic check — ask "what else could this be?"',
      'Dual-process theory: best outcomes combine System 1 (pattern) and System 2 (analytic) reasoning',
    ],
    references: [
      'Kahneman D. Thinking, Fast and Slow. New York: Farrar, Straus and Giroux; 2011',
      'Eva KW. What every teacher needs to know about clinical reasoning. Med Educ. 2005;39(1):98-106',
    ],
  },

  // =======================================================================
  // DIFFERENTIAL DIAGNOSIS STRATEGIES
  // =======================================================================
  {
    id: 'anatomic-approach',
    name: 'Anatomic Approach to Differential Diagnosis',
    category: 'differential-diagnosis',
    description:
      'Generating a differential diagnosis by systematically considering each anatomic structure in the region of the presenting symptom.',
    conceptExplanation:
      'The anatomic approach involves mentally walking through every structure that could produce symptoms in a given location. For chest pain, you consider: skin/chest wall, musculoskeletal, pleura, lungs, heart/pericardium, great vessels, esophagus, mediastinum, and referred sources (subdiaphragmatic). This ensures a comprehensive differential by anchoring to anatomy rather than memory.',
    clinicalApplication:
      'When faced with a localized symptom, mentally dissect the region layer by layer from superficial to deep. List at least one diagnosis per anatomic structure. This approach is particularly powerful for pain-based chief complaints and complements pathophysiology-based approaches.',
    examples: [
      'Chest pain: chest wall (costochondritis), pleura (pleuritis), lung (pneumonia), heart (ACS, pericarditis), great vessels (aortic dissection), esophagus (GERD, Boerhaave), mediastinum (lymphoma)',
      'Right lower quadrant pain: skin (herpes zoster), muscle (strain), peritoneum (appendicitis), cecum (typhlitis), ovary (torsion, cyst rupture), ureter (nephrolithiasis), iliac vessels (aneurysm)',
      'Neck mass: skin (lipoma, sebaceous cyst), lymph node (reactive, lymphoma), thyroid (goiter, nodule), salivary gland (sialadenitis, tumor), vascular (carotid body tumor, branchial cleft cyst)',
    ],
    pitfalls: [
      'Referred pain can mislead anatomic reasoning (e.g., shoulder pain from diaphragmatic irritation)',
      'May miss systemic causes that are not localized to one region',
      'Can be time-consuming for experienced clinicians who can use pattern recognition',
    ],
    keyPearls: [
      'The anatomic approach is the most reliable method for completeness in localizable symptoms',
      'Think superficial to deep, anterior to posterior',
      'Always include referred pain sources as the final layer of your anatomic walk-through',
    ],
    references: [
      'Stern SDC, et al. Symptom to Diagnosis: An Evidence-Based Guide. 4th ed. McGraw-Hill; 2020',
      'Henderson MC, et al. The Patient History: An Evidence-Based Approach to Differential Diagnosis. 2nd ed. McGraw-Hill; 2012',
    ],
  },
  {
    id: 'pathophysiologic-approach',
    name: 'Pathophysiologic Approach to Differential Diagnosis',
    category: 'differential-diagnosis',
    description:
      'Generating a differential by categorizing diseases according to their underlying mechanism: infectious, inflammatory, neoplastic, vascular, metabolic, traumatic, congenital, degenerative, iatrogenic, and idiopathic.',
    conceptExplanation:
      'The pathophysiologic approach uses disease mechanism categories (often remembered by the mnemonic VINDICATE: Vascular, Infectious/Inflammatory, Neoplastic, Degenerative/Deficiency, Intoxication/Iatrogenic, Congenital/genetic, Autoimmune, Traumatic, Endocrine/metabolic) to ensure no category is overlooked. This is particularly useful for systemic symptoms, lab abnormalities, and imaging findings where anatomic localization may be unclear.',
    clinicalApplication:
      'For any clinical finding, walk through each pathophysiologic category and ask: "Could a vascular process cause this? An infectious process? A neoplasm?" This systematic approach is invaluable when the anatomic approach is insufficient, such as with diffuse symptoms (fatigue, weight loss, fever of unknown origin).',
    examples: [
      'Elevated liver enzymes: Vascular (Budd-Chiari, ischemic hepatitis), Infectious (hepatitis B/C), Neoplastic (hepatocellular carcinoma, metastases), Degenerative (NASH), Intoxication (acetaminophen, alcohol), Autoimmune (AIH, PBC)',
      'Lymphadenopathy: Infectious (EBV, HIV, TB), Inflammatory (sarcoidosis, SLE), Neoplastic (lymphoma, metastatic carcinoma), Iatrogenic (drug reaction — phenytoin, serum sickness)',
    ],
    pitfalls: [
      'Some categories may seem forced for certain presentations',
      'The mnemonic may give false sense of completeness if not applied thoughtfully',
      'Does not inherently prioritize by likelihood — must overlay epidemiologic reasoning',
    ],
    keyPearls: [
      'VINDICATE is most useful for systemic or non-localizable presentations',
      'Combine with anatomic approach for maximum completeness',
      'After generating the list, prioritize by prevalence and acuity',
    ],
    references: [
      'Bickley LS. Bates Guide to Physical Examination and History Taking. 13th ed. Wolters Kluwer; 2021',
      'Bowen JL. Educational strategies to promote clinical diagnostic reasoning. N Engl J Med. 2006;355(21):2217-2225',
    ],
  },
  {
    id: 'organ-system-approach',
    name: 'Organ System-Based Approach',
    category: 'differential-diagnosis',
    description:
      'Systematic consideration of each organ system as a potential source of the patient\'s symptoms or findings.',
    conceptExplanation:
      'The organ system approach runs through each body system (cardiovascular, pulmonary, GI, renal, neurologic, musculoskeletal, endocrine, hematologic, dermatologic, psychiatric) asking whether pathology in that system could explain the patient\'s presentation. It is especially useful for undifferentiated patients and those with multisystem complaints. This approach leverages the review of systems structure familiar to all medical trainees.',
    clinicalApplication:
      'For undifferentiated presentations like syncope, fatigue, or weight loss, systematically consider each organ system. List the most common diagnosis from each system that could present this way. Then use history, exam, and initial labs to narrow to the most likely systems involved.',
    examples: [
      'Syncope: Cardiac (arrhythmia, structural disease, outflow obstruction), Neurologic (seizure, vertebrobasilar insufficiency), Vascular (orthostatic hypotension, vasovagal), Metabolic (hypoglycemia), Pulmonary (massive PE), Psychiatric (conversion disorder)',
      'Fatigue: Endocrine (hypothyroidism, adrenal insufficiency), Hematologic (anemia), Infectious (chronic infection, EBV), Cardiac (heart failure), Pulmonary (COPD, OSA), Psychiatric (depression), Rheumatologic (SLE, RA)',
    ],
    pitfalls: [
      'Can be overly exhaustive without clinical prioritization',
      'May lead to excessive testing if every system is investigated equally',
      'Works best when paired with epidemiologic and probabilistic reasoning',
    ],
    keyPearls: [
      'Start with the most life-threatening system causes (do-not-miss diagnoses)',
      'Use epidemiology to prioritize which systems to investigate first',
      'The organ system approach and review of systems are natural companions',
    ],
    references: [
      'Stern SDC, et al. Symptom to Diagnosis: An Evidence-Based Guide. 4th ed. McGraw-Hill; 2020',
      'McGee S. Evidence-Based Physical Diagnosis. 5th ed. Elsevier; 2022',
    ],
  },
  {
    id: 'mnemonic-differential',
    name: 'Mnemonic-Based Differential Generation',
    category: 'differential-diagnosis',
    description:
      'Using structured mnemonics (VINDICATE, VITAMINS C+D, MIDNIT) to systematically generate differential diagnoses by disease category.',
    conceptExplanation:
      'Mnemonic-based approaches provide a structured scaffold for differential generation. Common mnemonics include VINDICATE (Vascular, Infectious, Neoplastic, Degenerative, Iatrogenic/Intoxication, Congenital, Autoimmune, Traumatic, Endocrine/metabolic), VITAMINS C+D (Vascular, Infectious/Inflammatory, Traumatic, Autoimmune, Metabolic, Iatrogenic/Idiopathic, Neoplastic, Social/psychiatric, Congenital, Degenerative), and MIDNIT (Metabolic, Infectious, Degenerative, Neoplastic, Inflammatory, Traumatic). These serve as cognitive checklists.',
    clinicalApplication:
      'Select a mnemonic and apply it systematically to the clinical problem. For each letter, generate at least one diagnosis. This is most useful when feeling stuck or when thoroughness is critical (e.g., unexplained finding, medicolegal concern). After generating the list, rank by probability and acuity.',
    examples: [
      'Bilateral hilar lymphadenopathy using VINDICATE: V-vasculitis, I-infection (TB, fungal), N-neoplasm (lymphoma), D-degenerative (rare), I-iatrogenic (drug reaction), C-congenital (rare), A-autoimmune (sarcoidosis), T-trauma (none), E-endocrine (none)',
      'New-onset ascites using VITAMINS: V-vascular (portal hypertension, Budd-Chiari), I-infectious (TB peritonitis), T-trauma (hemoperitoneum), A-autoimmune (SLE serositis), M-metabolic (cirrhosis, nephrotic), I-iatrogenic (peritoneal dialysis), N-neoplastic (peritoneal carcinomatosis), S-social (alcohol-related cirrhosis)',
    ],
    pitfalls: [
      'Mechanical application without clinical judgment can produce implausible differentials',
      'Multiple mnemonics with overlapping categories can cause confusion',
      'Does not inherently prioritize — must apply clinical reasoning after generation',
    ],
    keyPearls: [
      'Pick one mnemonic and master it rather than learning several',
      'Mnemonics are generation tools, not ranking tools — prioritize separately',
      'Most useful in the first two years of clinical training and for atypical presentations',
    ],
    references: [
      'Kass JS, Rose RV. Medical Mnemonics: Diagnosis and Therapy. CRC Press; 2006',
      'Henderson MC, et al. The Patient History: An Evidence-Based Approach to Differential Diagnosis. 2nd ed. McGraw-Hill; 2012',
    ],
  },
  {
    id: 'pivot-and-cluster',
    name: 'Pivot and Cluster Strategy',
    category: 'differential-diagnosis',
    description:
      'Selecting one key finding as a "pivot" and clustering other findings around it to identify the diagnosis that best explains all the data.',
    conceptExplanation:
      'The pivot-and-cluster strategy selects the most specific or discriminating finding in a case (the pivot) and builds the differential around it. Other findings are then clustered to see which diagnosis explains the most data points with a single unifying process. This is the core strategy of clinical problem solving and case presentation at the bedside.',
    clinicalApplication:
      'Identify the finding that is most specific, most abnormal, or most discriminating. Build a differential for that finding alone. Then check each candidate diagnosis against all other findings — the diagnosis that explains the most findings with one process is favored (Occam\'s razor). If no single diagnosis fits, consider Hickam\'s dictum (multiple diagnoses).',
    examples: [
      'Pivot on pancytopenia in a patient with fatigue, splenomegaly, and bone pain: cluster supports hematologic malignancy (leukemia, myelofibrosis) over isolated causes of each finding',
      'Pivot on a widened mediastinum in a patient with acute chest pain, BP differential, and aortic regurgitation murmur: cluster supports aortic dissection',
    ],
    pitfalls: [
      'Choosing the wrong pivot can lead reasoning astray',
      'Rare findings may be pivoted on inappropriately — common things remain common',
      'The strategy assumes a unifying diagnosis exists, which is not always the case',
    ],
    keyPearls: [
      'The best pivot is the most specific finding, not necessarily the most dramatic',
      'If the cluster does not fit a single diagnosis, reconsider your pivot or accept multiple diagnoses',
      'This is the dominant strategy used in CPC-style case reasoning',
    ],
    references: [
      'Eddy DM, Clanton CH. The art of diagnosis: solving the clinicopathological exercise. N Engl J Med. 1982;306(21):1263-1268',
      'Richardson WS. We should overcome the barriers to evidence-based clinical diagnosis. J Clin Epidemiol. 2007;60(3):217-227',
    ],
  },

  // =======================================================================
  // COGNITIVE BIASES
  // =======================================================================
  {
    id: 'anchoring-bias',
    name: 'Anchoring Bias',
    category: 'cognitive-bias',
    description:
      'The tendency to fixate on an initial piece of information or diagnosis and insufficiently adjust away from it as new data emerge.',
    conceptExplanation:
      'Anchoring occurs when the first diagnostic impression exerts disproportionate influence on subsequent reasoning. The anchor may come from the patient\'s self-diagnosis, the triage note, a referral diagnosis, or the clinician\'s first impression. Once set, the anchor resists adjustment even when contradictory evidence appears. This is one of the most pervasive biases in clinical medicine.',
    clinicalApplication:
      'Recognize common anchoring sources: prior diagnosis labels, triage assessments, referral letters, and the patient\'s own stated diagnosis. Actively practice "de-anchoring" by asking: "If I had not seen the prior note, what would I think?" Reassess from scratch when the clinical picture does not fit the working diagnosis.',
    examples: [
      'Patient labeled "anxiety" in the ED who actually has pulmonary embolism — clinicians anchor on the psychiatric label',
      'Transfer patient with "COPD exacerbation" who actually has decompensated heart failure — anchored on the referring diagnosis',
      'Patient presenting with "migraine" per triage note who has a subarachnoid hemorrhage — anchored on triage impression',
    ],
    pitfalls: [
      'Anchoring is unconscious and difficult to detect in real time',
      'High cognitive load (fatigue, time pressure) worsens anchoring',
      'Prior medical records can anchor even experienced clinicians',
    ],
    keyPearls: [
      'Always ask: "What if the prior diagnosis is wrong?"',
      'The most dangerous anchor is a prior diagnostic label in the medical record',
      'Structured diagnostic timeouts can reduce anchoring in high-stakes situations',
    ],
    references: [
      'Croskerry P. The importance of cognitive errors in diagnosis and strategies to minimize them. Acad Med. 2003;78(8):775-780',
      'Tversky A, Kahneman D. Judgment under uncertainty: heuristics and biases. Science. 1974;185(4157):1124-1131',
    ],
  },
  {
    id: 'premature-closure',
    name: 'Premature Closure',
    category: 'cognitive-bias',
    description:
      'Accepting a diagnosis before it has been fully verified, closing down the reasoning process too early.',
    conceptExplanation:
      'Premature closure is the single most common cognitive error in missed diagnoses. It occurs when clinicians stop considering alternatives once a plausible diagnosis is found, without adequately ruling out other possibilities. It often co-occurs with anchoring and satisfaction of search. The clinician "closes the case" mentally before all critical data have been obtained or considered.',
    clinicalApplication:
      'Build a habit of asking "What else could this be?" even when the diagnosis seems obvious. Use a diagnostic checklist for high-risk presentations (chest pain, headache, abdominal pain). Before finalizing a diagnosis, verify that all findings are explained and no red flags have been dismissed.',
    examples: [
      'Diagnosing musculoskeletal chest pain without obtaining an ECG in a patient with cardiac risk factors',
      'Attributing confusion in an elderly patient to UTI without checking glucose, ammonia, or performing imaging',
      'Accepting "viral syndrome" in a febrile traveler without considering malaria, typhoid, or dengue',
    ],
    pitfalls: [
      'Time pressure in busy clinical settings promotes premature closure',
      'Cognitive fatigue at the end of shifts increases vulnerability',
      'Confirmation bias and anchoring synergize with premature closure',
    ],
    keyPearls: [
      'Premature closure is the most commonly identified cognitive error in malpractice cases',
      'The antidote is a forced pause: "What is the worst thing this could be?"',
      'Never anchor on a benign diagnosis without explicitly excluding dangerous mimics',
    ],
    references: [
      'Graber ML, et al. Diagnostic error in internal medicine. Arch Intern Med. 2005;165(13):1493-1499',
      'Voytovich AE, et al. Premature conclusions in diagnostic reasoning. J Med Educ. 1985;60(4):302-307',
    ],
  },
  {
    id: 'availability-bias',
    name: 'Availability Bias',
    category: 'cognitive-bias',
    description:
      'Overestimating the likelihood of a diagnosis because similar cases are easily recalled from recent or emotionally vivid experience.',
    conceptExplanation:
      'Availability bias occurs when the ease of recalling a diagnosis inflates its perceived probability. A clinician who recently missed an aortic dissection may overtest for it in subsequent chest pain patients. Conversely, never having seen a rare condition makes it feel impossibly unlikely. The bias operates through the availability heuristic — if something comes to mind easily, it must be common or important.',
    clinicalApplication:
      'When a specific diagnosis feels particularly prominent in your mind, ask: "Am I thinking of this because it is truly likely in this patient, or because I recently saw a similar case?" Use evidence-based prevalence data and pretest probability rather than gut feeling. Decision tools and clinical prediction rules can counteract availability bias.',
    examples: [
      'Overtesting for PE after a recent missed PE case, even in low-probability patients',
      'Diagnosing every headache as meningitis during a meningitis outbreak season',
      'Missing a zebra diagnosis because "I have never seen one" — the inverse availability effect',
    ],
    pitfalls: [
      'Recent emotional cases (bad outcomes, malpractice) strongly amplify availability bias',
      'Media coverage of rare diseases can inflate perceived prevalence',
      'Can lead to both overtesting (for easily recalled conditions) and undertesting (for unfamiliar conditions)',
    ],
    keyPearls: [
      'Recent experience is a powerful but unreliable guide to probability',
      'Base rates and clinical prediction rules protect against availability bias',
      'Debrief after emotionally impactful cases to calibrate future reasoning',
    ],
    references: [
      'Mamede S, et al. Effect of availability bias and reflective reasoning on diagnostic accuracy. BMC Med Educ. 2010;10:67',
      'Croskerry P. Achieving quality in clinical decision making. Acad Med. 2002;77(12):1271-1280',
    ],
  },
  {
    id: 'confirmation-bias',
    name: 'Confirmation Bias',
    category: 'cognitive-bias',
    description:
      'The tendency to seek, interpret, and remember information that confirms a pre-existing hypothesis while ignoring or discounting contradictory evidence.',
    conceptExplanation:
      'Confirmation bias leads clinicians to selectively gather data that supports their working diagnosis and to interpret ambiguous findings as confirmatory. They may ask leading questions that elicit expected answers, overvalue supportive test results, and dismiss abnormal findings that do not fit. This bias reinforces diagnostic errors made through other biases (anchoring, premature closure) by preventing corrective feedback.',
    clinicalApplication:
      'Actively seek disconfirming evidence for your working diagnosis. Ask: "What finding would make me abandon this diagnosis?" and look for that finding. When interpreting tests, consider how the result fits alternative diagnoses, not just the favored one. Encourage team members to challenge the working diagnosis.',
    examples: [
      'Interpreting a borderline troponin as "trending down" to support the diagnosis of non-cardiac chest pain, when the trend is actually ambiguous',
      'Asking a patient "Is the pain better with antacids?" (leading) instead of "What makes the pain better or worse?" (open-ended)',
      'Dismissing a mildly abnormal chest X-ray as "artifact" because the working diagnosis is musculoskeletal pain',
    ],
    pitfalls: [
      'Confirmation bias is self-reinforcing — it prevents the feedback needed for correction',
      'It is amplified by overconfidence and time pressure',
      'Even experienced clinicians remain susceptible',
    ],
    keyPearls: [
      'The best clinicians actively seek disconfirming evidence',
      'Ask open-ended questions to avoid leading patients toward confirmatory answers',
      'Foster a team culture where challenging the working diagnosis is encouraged',
    ],
    references: [
      'Nickerson RS. Confirmation bias: a ubiquitous phenomenon in many guises. Rev Gen Psychol. 1998;2(2):175-220',
      'Croskerry P. The importance of cognitive errors in diagnosis. Acad Med. 2003;78(8):775-780',
    ],
  },
  {
    id: 'base-rate-neglect',
    name: 'Base Rate Neglect',
    category: 'cognitive-bias',
    description:
      'Ignoring the underlying prevalence of a disease when estimating its probability in a given patient, leading to overdiagnosis of rare conditions and underdiagnosis of common ones.',
    conceptExplanation:
      'Base rate neglect occurs when clinicians focus on how well symptoms match a diagnosis (representativeness) while ignoring how common that diagnosis actually is. A patient presenting with classic textbook findings for a rare disease may still more likely have a common disease with an atypical presentation. This bias is a failure of Bayesian reasoning — the pretest probability (base rate) is not factored appropriately into the diagnostic estimate.',
    clinicalApplication:
      'Always estimate the pretest probability before ordering tests. Ask: "How common is this diagnosis in my clinical setting and in this patient population?" Use epidemiologic data and clinical prediction rules to anchor pretest probability. Remember: when you hear hoofbeats, think horses before zebras — unless you are in Africa.',
    examples: [
      'Diagnosing a rare autoimmune condition based on one positive antibody test without considering the low base rate and high false-positive rate',
      'A young woman with palpitations: base rate for SVT is far higher than pheochromocytoma, despite textbook overlap in symptoms',
      'Failing to consider that chest pain in a 25-year-old has a very different base rate for ACS than in a 65-year-old diabetic smoker',
    ],
    pitfalls: [
      'Dramatic or classic presentations of rare diseases are overrepresented in medical education, amplifying this bias',
      'Clinicians in tertiary centers may overestimate base rates for rare diseases due to referral bias',
      'The representativeness heuristic directly feeds base rate neglect',
    ],
    keyPearls: [
      'Prevalence is the most important number in diagnostic reasoning',
      'A positive test result for a rare disease is more likely a false positive than a true positive',
      'Clinical prediction rules encode base rate information — use them',
    ],
    references: [
      'Kahneman D, Tversky A. On the psychology of prediction. Psychol Rev. 1973;80(4):237-251',
      'Eddy DM. Probabilistic reasoning in clinical medicine. In: Kahneman D, et al., eds. Judgment Under Uncertainty. Cambridge University Press; 1982:249-267',
    ],
  },
  {
    id: 'framing-effect',
    name: 'Framing Effect',
    category: 'cognitive-bias',
    description:
      'How the presentation of clinical information influences diagnostic reasoning — the same data framed differently leads to different conclusions.',
    conceptExplanation:
      'Framing effect refers to how the context, wording, or source of clinical information shapes interpretation. A patient described as "drug-seeking" is evaluated differently than one described as "in severe pain." A lab result flagged as "critical" receives more attention than the same value presented as a number. Transfer notes, triage impressions, and even the patient\'s own framing of symptoms profoundly influence the clinician\'s reasoning trajectory.',
    clinicalApplication:
      'Be aware of how information is framed when you receive it. Mentally reframe loaded language: replace "drug-seeking" with "presenting for pain management," replace "frequent flyer" with "patient with recurrent presentations." Read primary data (labs, imaging) yourself rather than relying solely on interpreted summaries.',
    examples: [
      '"90% survival rate" vs "10% mortality rate" — identical information framed differently changes patient and clinician decisions',
      'A triage note stating "anxiety attack" vs "chest pain, tachycardia, dyspnea" — same patient, different diagnostic trajectory',
      'Transfer summary stating "benign exam" may lead to less thorough re-evaluation',
    ],
    pitfalls: [
      'Negative framing of patients (labels like "noncompliant," "difficult") reduces diagnostic effort',
      'Positive framing may lead to overconfidence ("stable patient" who is actually deteriorating)',
      'Framing effects are amplified under time pressure and cognitive fatigue',
    ],
    keyPearls: [
      'Always evaluate primary data yourself — do not rely solely on others\' interpretations',
      'Replace pejorative framing with neutral clinical language',
      'The way a question is asked often determines the answer you get',
    ],
    references: [
      'Tversky A, Kahneman D. The framing of decisions and the psychology of choice. Science. 1981;211(4481):453-458',
      'Croskerry P. From mindless to mindful practice — cognitive bias and clinical decision making. N Engl J Med. 2013;368(26):2445-2448',
    ],
  },

  // =======================================================================
  // TEST INTERPRETATION
  // =======================================================================
  {
    id: 'sensitivity',
    name: 'Sensitivity (True Positive Rate)',
    category: 'test-interpretation',
    description:
      'The proportion of patients with a disease who test positive. A sensitive test, when negative, helps rule out disease (SnNOut).',
    conceptExplanation:
      'Sensitivity = TP / (TP + FN). A test with 95% sensitivity correctly identifies 95% of patients who have the disease — but 5% will have false negatives. High-sensitivity tests are best for screening and ruling out disease: if a highly sensitive test is negative, the disease is very unlikely (SnNOut: Sensitivity, Negative, rules Out). However, sensitivity alone tells nothing about false positives.',
    clinicalApplication:
      'Choose highly sensitive tests when you need to rule out a dangerous condition. A negative D-dimer (sensitivity ~96-97% for PE) in a low-risk patient effectively excludes PE. A negative troponin at 0 and 3 hours (sensitivity >99% for MI) effectively excludes MI. Always pair sensitivity with pretest probability for proper interpretation.',
    examples: [
      'D-dimer for PE: sensitivity ~96-97%. Negative D-dimer in low pretest probability effectively rules out PE',
      'HIV ELISA (4th gen): sensitivity ~99.7%. Excellent screening test — a negative result virtually excludes HIV after window period',
      'CT head for SAH within 6 hours: sensitivity ~98-100%. A negative CT within 6 hours of thunderclap headache is highly reassuring',
    ],
    pitfalls: [
      'High sensitivity does not mean the test is good for confirming disease — specificity matters for that',
      'Sensitivity can vary by disease severity (higher sensitivity for larger PEs, lower for subsegmental)',
      'SnNOut only works well when the test is applied in an appropriate pretest probability range',
    ],
    keyPearls: [
      'SnNOut: a Sensitive test, when Negative, rules Out the disease',
      'Use sensitive tests early in the workup to screen and exclude',
      'Sensitivity answers: "If the patient has the disease, will the test detect it?"',
    ],
    references: [
      'Parikh R, et al. Understanding and using sensitivity, specificity and predictive values. Indian J Ophthalmol. 2008;56(1):45-50',
      'McGee S. Evidence-Based Physical Diagnosis. 5th ed. Elsevier; 2022',
    ],
  },
  {
    id: 'specificity',
    name: 'Specificity (True Negative Rate)',
    category: 'test-interpretation',
    description:
      'The proportion of patients without a disease who test negative. A specific test, when positive, helps rule in disease (SpPIn).',
    conceptExplanation:
      'Specificity = TN / (TN + FP). A test with 95% specificity correctly identifies 95% of patients without the disease — but 5% of healthy patients will have false positives. High-specificity tests are best for confirming a diagnosis: if a highly specific test is positive, the disease is very likely (SpPIn: Specificity, Positive, rules In). Specificity and sensitivity are independent properties of a test.',
    clinicalApplication:
      'Choose highly specific tests when you need to confirm a diagnosis. Lipase >3x upper limit of normal (specificity >95%) confirms acute pancreatitis. Anti-CCP antibodies (specificity ~95-98%) strongly support rheumatoid arthritis. A positive specific test clinches the diagnosis; a negative specific test does not exclude it.',
    examples: [
      'Anti-CCP for rheumatoid arthritis: specificity ~95-98%. A positive test strongly supports RA diagnosis',
      'CT pulmonary angiography for PE: specificity ~97%. A positive CTPA confirms PE',
      'Lipase >3x ULN for acute pancreatitis: specificity >95%. Effectively diagnostic when combined with compatible presentation',
    ],
    pitfalls: [
      'High specificity does not mean the test is good for screening — sensitivity matters for that',
      'Even highly specific tests produce false positives when applied to low-prevalence populations',
      'SpPIn only works well when pretest probability is in a reasonable range',
    ],
    keyPearls: [
      'SpPIn: a Specific test, when Positive, rules In the disease',
      'Use specific tests later in the workup to confirm suspected diagnoses',
      'Specificity answers: "If the patient does NOT have the disease, will the test be negative?"',
    ],
    references: [
      'Parikh R, et al. Understanding and using sensitivity, specificity and predictive values. Indian J Ophthalmol. 2008;56(1):45-50',
      'Sackett DL, et al. Clinical Epidemiology: A Basic Science for Clinical Medicine. 2nd ed. Little, Brown; 1991',
    ],
  },
  {
    id: 'likelihood-ratios',
    name: 'Likelihood Ratios (LR+ and LR-)',
    category: 'test-interpretation',
    description:
      'The ratio of the probability of a test result in patients with disease versus without disease. LRs quantify how much a test result shifts disease probability.',
    conceptExplanation:
      'LR+ = sensitivity / (1 - specificity). LR- = (1 - sensitivity) / specificity. A LR+ > 10 substantially increases disease probability; a LR- < 0.1 substantially decreases it. Likelihood ratios are independent of prevalence and can be applied directly to pretest probability using a Fagan nomogram or the odds-likelihood ratio formula. They integrate sensitivity and specificity into a single clinically actionable metric.',
    clinicalApplication:
      'Use LR+ to determine how much a positive result increases disease probability, and LR- for how much a negative result decreases it. Rough guide: LR+ > 10 or LR- < 0.1 = large change; LR+ 5-10 or LR- 0.1-0.2 = moderate change; LR+ 2-5 or LR- 0.2-0.5 = small change; LR+ 1-2 or LR- 0.5-1 = negligible change. Multiply pretest odds by LR to get posttest odds.',
    examples: [
      'Positive S3 gallop for CHF: LR+ ~11. A positive S3 substantially increases the probability of heart failure',
      'Negative D-dimer for PE: LR- ~0.05-0.10. A negative D-dimer substantially decreases PE probability',
      'Positive straight leg raise for disc herniation: LR+ ~1.5-2.0. Only a small increase — not a strong confirmatory finding',
    ],
    pitfalls: [
      'LRs assume the test is applied appropriately to the relevant clinical population',
      'Spectrum bias: LRs derived in referral populations may overestimate utility in primary care',
      'The LR of a physical exam finding depends on examiner skill and technique',
    ],
    keyPearls: [
      'LR > 10 or < 0.1 are the thresholds for diagnostically powerful tests',
      'LRs are the most clinically useful test characteristic because they incorporate both sensitivity and specificity',
      'Use the Fagan nomogram to quickly convert pretest probability + LR to posttest probability',
    ],
    references: [
      'McGee S. Simplifying likelihood ratios. J Gen Intern Med. 2002;17(8):647-650',
      'Grimes DA, Schulz KF. Refining clinical diagnosis with likelihood ratios. Lancet. 2005;365(9469):1500-1505',
    ],
  },
  {
    id: 'pretest-posttest-probability',
    name: 'Pretest and Posttest Probability',
    category: 'test-interpretation',
    description:
      'The estimated probability of disease before (pretest) and after (posttest) a diagnostic test, forming the foundation of evidence-based test interpretation.',
    conceptExplanation:
      'Pretest probability is the estimated likelihood of disease based on clinical presentation, risk factors, and epidemiology — before any test is performed. Posttest probability is the revised probability after incorporating the test result. The relationship is: posttest odds = pretest odds x likelihood ratio. Every test moves you along a probability continuum; no test gives a binary answer. The clinical value of a test depends entirely on where the pretest probability falls.',
    clinicalApplication:
      'Before ordering any test, estimate the pretest probability. If pretest probability is very low (<5%), even a positive result is likely false positive (for most tests). If very high (>95%), even a negative result may be false negative. Tests are most useful in the diagnostic uncertainty zone (15-85%). Use clinical prediction rules (Wells, HEART) to estimate pretest probability formally.',
    examples: [
      'Low-risk PE (Wells score 0-1, pretest ~5%): negative D-dimer drops posttest probability to <1%, safely excluding PE',
      'High pretest probability for ACS (HEART score 7-10, pretest ~50-65%): troponin is ordered to shift probability, not to "screen"',
      'A 25-year-old with atypical chest pain (pretest probability for CAD <5%): a positive stress test is more likely false positive than true positive',
    ],
    pitfalls: [
      'Ordering tests without estimating pretest probability leads to uninterpretable results',
      'False positives are common when testing low-probability patients',
      'Clinicians frequently overestimate pretest probability for rare serious conditions',
    ],
    keyPearls: [
      'The most important step in test interpretation happens BEFORE the test: estimating pretest probability',
      'Tests are most valuable in the intermediate probability range (15-85%)',
      'If you would manage the patient the same regardless of the result, do not order the test',
    ],
    references: [
      'Pauker SG, Kassirer JP. The threshold approach to clinical decision making. N Engl J Med. 1980;302(20):1109-1117',
      'Richardson WS. Where do pretest probabilities come from? Evid Based Med. 1999;4(3):68-69',
    ],
  },

  // =======================================================================
  // PROBABILITY REASONING
  // =======================================================================
  {
    id: 'bayesian-reasoning',
    name: 'Bayesian Reasoning',
    category: 'probability-reasoning',
    description:
      'A mathematical framework for updating disease probability as new clinical information (history, exam, tests) becomes available.',
    conceptExplanation:
      'Bayesian reasoning applies Bayes\' theorem to clinical diagnosis: Posterior odds = Prior odds x Likelihood ratio. The prior (pretest) probability is updated with each piece of new information to generate a posterior (posttest) probability. This process is iterative — each posttest probability becomes the pretest probability for the next piece of information. Expert clinicians perform implicit Bayesian reasoning continuously, though explicit calculation is valuable for teaching and complex cases.',
    clinicalApplication:
      'Start with a pretest probability (from prevalence data or clinical prediction rules). Apply the likelihood ratio of each finding or test result to update the probability. Use the Fagan nomogram for bedside estimation or the formula: posttest odds = pretest odds x LR. Each history finding, exam maneuver, and lab result is an "information unit" that shifts probability.',
    examples: [
      'Chest pain evaluation: pretest probability 30% for ACS (based on history). Positive ECG changes (LR+ ~5) raises posttest to ~68%. Elevated troponin (LR+ ~15) raises further to ~97%.',
      'Suspected PE: Wells score gives pretest of 15%. Negative D-dimer (LR- 0.05) drops posttest to ~0.9%. No further testing needed.',
      'Pharyngitis: Centor score 3 gives pretest ~30-35% for GBS. Positive rapid strep (LR+ ~15) raises to >90%. Negative rapid strep (LR- ~0.08) drops to ~3-4%.',
    ],
    pitfalls: [
      'Sequential test results are only independent if the tests measure different things (conditional independence assumption)',
      'Estimating pretest probability is the weakest link — garbage in, garbage out',
      'Clinicians often anchor on categorical results (positive/negative) rather than thinking probabilistically',
    ],
    keyPearls: [
      'Every clinical observation is a diagnostic test with its own likelihood ratio',
      'Bayesian reasoning prevents both over- and under-testing by showing when probability crosses treatment thresholds',
      'The history alone is the most powerful diagnostic "test" — each question shifts probability',
    ],
    references: [
      'Sox HC, et al. Medical Decision Making. 2nd ed. Wiley-Blackwell; 2013',
      'Gill CJ, et al. Why clinicians are natural Bayesians. BMJ. 2005;330(7499):1080-1083',
    ],
  },
  {
    id: 'threshold-approach',
    name: 'Threshold Approach to Decision Making',
    category: 'probability-reasoning',
    description:
      'A framework using test and treatment thresholds to determine when to test, treat, or observe based on disease probability.',
    conceptExplanation:
      'The threshold model defines two key probability points: the test threshold (below which disease probability is so low that no testing is needed) and the treatment threshold (above which probability is so high that empiric treatment is warranted). Between these thresholds lies the "zone of uncertainty" where diagnostic testing is most valuable. The exact thresholds depend on disease severity, test risks/costs, and treatment risks/benefits.',
    clinicalApplication:
      'For any clinical scenario, define three zones: (1) Below the test threshold — probability is too low to justify testing, observe and reassure. (2) Between test and treatment thresholds — the test zone, where testing will meaningfully change management. (3) Above the treatment threshold — probability is high enough to treat empirically. Order tests only when the result would change management.',
    examples: [
      'PE: test threshold ~2% (below this, no D-dimer needed), treatment threshold ~85% (above this, anticoagulate without CT). Between 2-85%, diagnostic testing is warranted.',
      'Appendicitis: test threshold ~5%, treatment threshold ~90%. CT abdomen is useful in the 5-90% range. Very high probability → surgical consultation without imaging.',
      'Group A strep pharyngitis: test threshold ~10% (Centor 0-1, no test), treatment threshold ~50-70% (Centor 4, consider empiric antibiotics). Centor 2-3 → rapid strep test.',
    ],
    pitfalls: [
      'Threshold values are not universal — they depend on local epidemiology, test availability, and patient preferences',
      'Clinicians often test outside the useful zone (testing very low or very high probability patients)',
      'Risk tolerance varies between clinicians and patients, shifting thresholds',
    ],
    keyPearls: [
      'If the test result will not change your management, do not order the test',
      'The test zone is where diagnostic workup is most valuable — and where Bayesian reasoning matters most',
      'Shared decision making is essential when probability falls near a threshold',
    ],
    references: [
      'Pauker SG, Kassirer JP. The threshold approach to clinical decision making. N Engl J Med. 1980;302(20):1109-1117',
      'Djulbegovic B, et al. Progress in evidence-based medicine: a quarter century on. Lancet. 2017;390(10092):415-423',
    ],
  },
  {
    id: 'number-needed-to-treat',
    name: 'Number Needed to Treat / Harm (NNT/NNH)',
    category: 'probability-reasoning',
    description:
      'The number of patients who must receive a treatment for one additional patient to benefit (NNT) or be harmed (NNH).',
    conceptExplanation:
      'NNT = 1 / Absolute Risk Reduction (ARR). NNH = 1 / Absolute Risk Increase (ARI). NNT provides an intuitive measure of treatment efficacy: NNT of 5 means treat 5 patients for 1 to benefit. Lower NNT = more effective. Compare NNT to NNH for the same treatment to assess benefit-risk ratio. NNT is preferred over relative risk reduction because it accounts for baseline risk and provides a clinically meaningful metric.',
    clinicalApplication:
      'Use NNT to communicate treatment benefit to patients and to compare interventions. When counseling: "If we treat 20 patients like you with this medication, 1 additional patient will avoid a stroke compared to no treatment." Compare NNT and NNH to determine if benefits outweigh harms. Remember that NNT depends on baseline risk — the same intervention has different NNTs in different populations.',
    examples: [
      'Statins for secondary prevention of cardiovascular events: NNT ~25-30 over 5 years. NNH for myopathy ~250-500.',
      'Antibiotics for acute otitis media in children: NNT ~7-8 for pain resolution at 2-7 days. Most children improve without antibiotics.',
      'Aspirin for primary prevention of MI in moderate-risk patients: NNT ~250 over 5 years, NNH for major bleeding ~333.',
    ],
    pitfalls: [
      'NNT is time-dependent — always specify the time horizon',
      'NNT changes with baseline risk — a treatment with NNT of 50 in low-risk patients may have NNT of 5 in high-risk patients',
      'Relative risk reduction is often used in marketing because it sounds more impressive than NNT',
    ],
    keyPearls: [
      'An NNT of infinity means the treatment has zero absolute benefit',
      'Always compare NNT to NNH before recommending a treatment',
      'NNT is the antidote to misleading relative risk reduction statistics',
    ],
    references: [
      'Citrome L. Number needed to treat: what it is and what it isn\'t. Evid Based Ment Health. 2011;14(3):66-68',
      'Laupacis A, et al. An assessment of clinically useful measures of the consequences of treatment. N Engl J Med. 1988;318(26):1728-1733',
    ],
  },

  // =======================================================================
  // CLINICAL DECISION RULES
  // =======================================================================
  {
    id: 'wells-score-pe',
    name: 'Wells Score for Pulmonary Embolism',
    category: 'clinical-decision-making',
    description:
      'A validated clinical prediction rule that estimates the pretest probability of pulmonary embolism to guide diagnostic workup.',
    conceptExplanation:
      'The Wells score uses seven clinical criteria to stratify PE probability: clinical signs/symptoms of DVT (+3), PE as likely or more likely than alternative diagnosis (+3), heart rate >100 (+1.5), immobilization/surgery within 4 weeks (+1.5), previous PE/DVT (+1.5), hemoptysis (+1), malignancy (+1). Score interpretation: <2 (low probability, ~3%), 2-6 (moderate, ~20%), >6 (high, ~67%). Modified Wells uses a simplified cutoff: <=4 = PE unlikely, >4 = PE likely.',
    clinicalApplication:
      'Calculate Wells score before ordering any PE-specific testing. PE unlikely (<=4): obtain D-dimer; if negative, PE is excluded. PE likely (>4): proceed directly to CTPA. Do not order D-dimer in high-probability patients (it will not change management). The PERC rule can further risk-stratify very low-risk patients (Wells <2) to avoid D-dimer entirely.',
    examples: [
      'Patient with unilateral leg swelling (+3), tachycardia (+1.5), recent surgery (+1.5): Wells = 6, moderate-high probability → proceed to CTPA',
      'Young woman with pleuritic chest pain, no risk factors, Wells = 0: very low probability → apply PERC rule; if all negative, no further workup',
      'Patient with active cancer (+1), immobilization (+1.5), HR 105 (+1.5), Wells = 4: moderate → D-dimer; if elevated → CTPA',
    ],
    pitfalls: [
      'The subjective criterion ("PE as likely or more likely") introduces variability',
      'Wells was derived and validated in ED populations — may not apply to all settings',
      'Pregnancy, renal failure, and extreme obesity may limit applicability of the algorithm',
    ],
    keyPearls: [
      'Never skip the pretest probability step — ordering CTPA without risk stratification leads to overdiagnosis of subsegmental PE',
      'D-dimer is only useful in low-to-moderate probability patients',
      'The most common error is failing to calculate a formal score and relying on gestalt alone',
    ],
    references: [
      'Wells PS, et al. Derivation of a simple clinical model to categorize patients probability of PE. Thromb Haemost. 2000;83(3):416-420',
      'Raja AS, et al. Evaluation of patients with suspected acute PE. Ann Intern Med. 2015;163(9):701-711',
    ],
  },
  {
    id: 'heart-score',
    name: 'HEART Score for Chest Pain',
    category: 'clinical-decision-making',
    description:
      'A validated clinical prediction rule for risk stratification of patients presenting with chest pain for major adverse cardiac events (MACE).',
    conceptExplanation:
      'The HEART score evaluates five domains: History (0-2), ECG (0-2), Age (0-2), Risk factors (0-2), Troponin (0-2). Total score 0-3: low risk (0.9-1.7% MACE at 6 weeks), safe for discharge. Score 4-6: moderate risk (~12-17% MACE), observe and further workup. Score 7-10: high risk (~50-65% MACE), early invasive strategy. The HEART pathway has been validated to safely reduce unnecessary admissions for low-risk chest pain.',
    clinicalApplication:
      'Apply HEART score to all undifferentiated chest pain patients in the ED. Low risk (0-3): consider discharge with close follow-up after serial troponins. Moderate risk (4-6): admission, serial troponins, cardiology consultation, consider stress testing or coronary CTA. High risk (7-10): cardiology consultation for early invasive strategy.',
    examples: [
      'A 45-year-old with atypical chest pain, normal ECG, no risk factors, negative troponin: HEART score = 1-2, low risk → safe discharge with follow-up',
      'A 60-year-old diabetic smoker with substernal pressure, non-specific ECG changes, mildly elevated troponin: HEART = 7-8, high risk → cardiology consult and invasive strategy',
      'A 52-year-old with moderately suspicious history, age >45 (+1), hypertension (+1), normal ECG, borderline troponin: HEART = 4, moderate → observation and repeat troponin',
    ],
    pitfalls: [
      'HEART score should not be applied to STEMI patients — they need emergent catheterization regardless',
      'The history component is subjective and has inter-rater variability',
      'A low HEART score does not exclude all cardiac pathology — aortic dissection and myocarditis are not captured',
    ],
    keyPearls: [
      'HEART score 0-3 with two negative troponins = <1% MACE risk, safe for discharge',
      'The HEART pathway reduces unnecessary admissions by 20-30% compared to traditional approaches',
      'Always combine with clinical judgment — the score is a tool, not a mandate',
    ],
    references: [
      'Six AJ, et al. The HEART score for the assessment of patients with chest pain in the emergency department. Neth Heart J. 2008;16(6):191-196',
      'Mahler SA, et al. The HEART pathway randomized trial. Circ Cardiovasc Qual Outcomes. 2015;8(2):195-203',
    ],
  },
  {
    id: 'ottawa-ankle-rules',
    name: 'Ottawa Ankle Rules',
    category: 'clinical-decision-making',
    description:
      'A validated clinical decision rule to determine whether ankle or midfoot radiography is needed after an ankle injury.',
    conceptExplanation:
      'The Ottawa Ankle Rules state that ankle X-rays are only needed if: (1) bone tenderness along distal 6 cm of posterior edge of fibula or tip of lateral malleolus, (2) bone tenderness along distal 6 cm of posterior edge of tibia or tip of medial malleolus, or (3) inability to bear weight both immediately and in the ED (4 steps). Midfoot X-rays are needed if: bone tenderness at the base of 5th metatarsal or navicular, or inability to bear weight. Sensitivity approaches 100% for clinically significant fractures.',
    clinicalApplication:
      'Apply to all patients with ankle or midfoot injury. If none of the criteria are met, fracture is effectively excluded without imaging. This reduces unnecessary X-rays by 30-40% without missing significant fractures. The rules have been validated across all age groups (though less studied in children <6).',
    examples: [
      'Patient with ankle inversion injury, no posterior bony tenderness, able to bear weight: Ottawa negative → no X-ray needed',
      'Patient with ankle injury, tenderness at tip of lateral malleolus, unable to bear weight: Ottawa positive → obtain ankle X-rays',
      'Patient with midfoot injury, tenderness at base of 5th metatarsal: Ottawa positive → obtain foot X-rays',
    ],
    pitfalls: [
      'Must be applied within 10 days of injury; not validated for older injuries',
      'Unreliable if patient is intoxicated, has distracting injuries, or has diminished sensation',
      'Some patients and clinicians expect imaging regardless — shared decision making is key',
    ],
    keyPearls: [
      'Sensitivity ~98-100% for significant fractures — the gold standard of clinical decision rules',
      'The most validated clinical prediction rule in emergency medicine',
      'Reduces ankle X-rays by 30-40% without missing fractures',
    ],
    references: [
      'Stiell IG, et al. A study to develop clinical decision rules for the use of radiography in acute ankle injuries. Ann Emerg Med. 1992;21(4):384-390',
      'Bachmann LM, et al. Accuracy of Ottawa ankle rules to exclude fractures of the ankle and mid-foot. BMJ. 2003;326(7386):417',
    ],
  },
  {
    id: 'centor-criteria',
    name: 'Centor Criteria (Modified/McIsaac)',
    category: 'clinical-decision-making',
    description:
      'A clinical prediction rule for estimating the probability of Group A streptococcal pharyngitis to guide testing and treatment decisions.',
    conceptExplanation:
      'The modified Centor (McIsaac) criteria include: tonsillar exudates (+1), tender anterior cervical lymphadenopathy (+1), fever history (+1), absence of cough (+1), age 3-14 (+1), age 15-44 (0), age >=45 (-1). Score 0-1: ~1-10% probability GAS, no test or treatment. Score 2-3: ~15-35%, rapid antigen test. Score 4-5: ~50-65%, consider empiric treatment or test. The score helps avoid unnecessary antibiotic prescriptions for viral pharyngitis.',
    clinicalApplication:
      'Apply to all patients presenting with sore throat. Score 0-1: symptomatic treatment only, no testing. Score 2-3: perform rapid strep test; treat if positive, no culture backup needed in adults. Score >=4: rapid strep test or empiric treatment (guidelines vary). This approach reduces antibiotic overprescription while capturing true GAS infections.',
    examples: [
      'A 10-year-old with exudates, fever, tender nodes, no cough: McIsaac = 5 → rapid strep or empiric antibiotics',
      'A 50-year-old with cough, rhinorrhea, sore throat, no exudates or nodes: McIsaac = -1-0 → symptomatic care only',
      'A 30-year-old with exudates and tender nodes but also cough: McIsaac = 2 → perform rapid strep test',
    ],
    pitfalls: [
      'Does not differentiate GAS from other bacterial causes (Fusobacterium, gonococcal)',
      'Peritonsillar abscess, EBV mononucleosis, and epiglottitis require separate clinical evaluation',
      'Cultural and patient factors may influence treatment decisions beyond the score',
    ],
    keyPearls: [
      'Most sore throats are viral — antibiotics are not indicated for Centor 0-1',
      'The primary goal of GAS treatment is preventing rheumatic fever, not symptom relief',
      'Rapid strep tests have high specificity (~95%) but moderate sensitivity (~70-85%) — consider culture backup in children',
    ],
    references: [
      'Centor RM, et al. The diagnosis of strep throat in adults in the emergency room. Med Decis Making. 1981;1(3):239-246',
      'McIsaac WJ, et al. A clinical score to reduce unnecessary antibiotic use in patients with sore throat. CMAJ. 1998;158(1):75-83',
    ],
  },
  {
    id: 'curb-65',
    name: 'CURB-65 Score for Pneumonia Severity',
    category: 'clinical-decision-making',
    description:
      'A validated severity score for community-acquired pneumonia that guides disposition decisions (outpatient vs ward vs ICU).',
    conceptExplanation:
      'CURB-65 assigns one point each for: Confusion (new), Urea >7 mmol/L (>19 mg/dL), Respiratory rate >=30, Blood pressure (systolic <90 or diastolic <=60), and age >=65. Score 0-1: low severity (1-3% mortality), outpatient treatment. Score 2: moderate (9%), consider short hospital stay. Score 3-5: severe (15-40%), hospitalize; scores 4-5 consider ICU. CRB-65 (without urea) can be used in outpatient settings where labs are unavailable.',
    clinicalApplication:
      'Calculate CURB-65 for all patients with community-acquired pneumonia to guide disposition. Score 0-1 with adequate social support: outpatient antibiotics. Score 2: clinical judgment — many benefit from brief admission. Score 3+: inpatient, consider ICU consultation for scores 4-5. Always integrate with clinical judgment, comorbidities, and oxygen requirements.',
    examples: [
      'A 40-year-old with pneumonia, alert, normal vitals, normal urea: CURB-65 = 0 → outpatient treatment',
      'A 70-year-old (+1) with confusion (+1), RR 32 (+1), normal BP and urea: CURB-65 = 3 → hospitalize, consider ICU',
      'A 55-year-old with BUN 25 (+1), BP 85/55 (+1), no confusion, RR 22: CURB-65 = 2 → consider admission',
    ],
    pitfalls: [
      'Does not account for comorbidities (COPD, heart failure, immunosuppression)',
      'Young patients with severe sepsis may score low due to absence of age/urea points',
      'Oxygen saturation and radiographic extent are not captured',
    ],
    keyPearls: [
      'CURB-65 is best for disposition decisions, not antibiotic selection',
      'CRB-65 (without urea) is valid for primary care/prehospital triage',
      'Always supplement with clinical judgment — the score is a starting point',
    ],
    references: [
      'Lim WS, et al. Defining community acquired pneumonia severity on presentation to hospital. Thorax. 2003;58(5):377-382',
      'Mandell LA, et al. IDSA/ATS consensus guidelines on CAP in adults. Clin Infect Dis. 2007;44(Suppl 2):S27-72',
    ],
  },
  {
    id: 'perc-rule',
    name: 'PERC Rule (Pulmonary Embolism Rule-out Criteria)',
    category: 'clinical-decision-making',
    description:
      'An eight-criterion rule to exclude PE without any testing in very low-risk patients (pretest probability <15%).',
    conceptExplanation:
      'The PERC rule applies only when clinical gestalt or Wells score suggests low pretest probability (<15%). If ALL eight criteria are met (age <50, HR <100, SpO2 >94%, no unilateral leg swelling, no hemoptysis, no recent surgery/trauma, no prior PE/DVT, no exogenous estrogen), PE is excluded without D-dimer or imaging. This prevents the cascade of false-positive D-dimers leading to unnecessary CTPAs, contrast exposure, and incidental findings.',
    clinicalApplication:
      'First assess if PE is in the differential. If yes, estimate pretest probability. If low (<15% or Wells <=4), apply PERC. If all eight criteria are negative, no further PE workup is needed. If any PERC criterion is positive, proceed to D-dimer. The PERC rule prevents unnecessary testing in the lowest-risk patients.',
    examples: [
      'A 30-year-old woman with pleuritic chest pain, HR 78, SpO2 98%, no risk factors, no leg swelling: Wells 0, PERC negative → PE excluded, no testing',
      'A 55-year-old (age >50, PERC positive) with similar presentation: despite low Wells, must proceed to D-dimer',
      'A 40-year-old on oral contraceptives (estrogen use, PERC positive): must proceed to D-dimer despite otherwise low risk',
    ],
    pitfalls: [
      'PERC must ONLY be applied when pretest probability is already low (<15%)',
      'Applying PERC to moderate or high pretest probability patients will miss PEs',
      'PERC does not exclude other serious diagnoses (ACS, aortic dissection, pneumothorax)',
    ],
    keyPearls: [
      'PERC is a "rule-out" test for already low-risk patients — it does not lower moderate or high risk',
      'The intent is to prevent unnecessary D-dimers that lead to unnecessary CTPAs',
      'Applying PERC to the wrong population (gestalt >15%) defeats its purpose and misses PEs',
    ],
    references: [
      'Kline JA, et al. Clinical criteria to prevent unnecessary diagnostic testing in ED patients with suspected PE. J Thromb Haemost. 2004;2(8):1247-1255',
      'Singh B, et al. Pulmonary embolism rule-out criteria (PERC) in pulmonary embolism — revisited. Postgrad Med. 2013;125(1):232-238',
    ],
  },

  // =======================================================================
  // MANAGEMENT REASONING
  // =======================================================================
  {
    id: 'empiric-vs-definitive-therapy',
    name: 'Empiric vs Definitive Therapy',
    category: 'management-reasoning',
    description:
      'The distinction between broad initial treatment based on likely diagnoses (empiric) versus targeted treatment based on confirmed diagnosis (definitive).',
    conceptExplanation:
      'Empiric therapy is initiated before a definitive diagnosis is established, targeting the most likely pathogens or conditions based on clinical presentation, local resistance patterns, and patient risk factors. Definitive therapy is tailored to the confirmed diagnosis — typically after culture, pathology, or definitive imaging results return. The transition from empiric to definitive (de-escalation or escalation) is a critical management step.',
    clinicalApplication:
      'When initiating empiric therapy: cover the most dangerous likely diagnoses, use local antibiograms for infectious cases, reassess at 48-72 hours when culture and sensitivity data return. Transition to definitive therapy as soon as possible: narrow antibiotics, adjust medications based on confirmed diagnosis, and discontinue unnecessary treatments.',
    examples: [
      'Community-acquired pneumonia: empiric ceftriaxone + azithromycin → definitive narrow-spectrum antibiotic based on culture and sensitivity',
      'Suspected bacterial meningitis: empiric vancomycin + ceftriaxone + dexamethasone → narrow based on CSF culture',
      'Undifferentiated sepsis: broad-spectrum empiric coverage (e.g., pip-tazo + vancomycin) → de-escalate to targeted agent per blood culture results',
    ],
    pitfalls: [
      'Failure to de-escalate from empiric to definitive therapy promotes resistance',
      'Empiric therapy too narrow may miss the causative organism',
      'Some clinicians continue broad empiric therapy indefinitely out of inertia or uncertainty',
    ],
    keyPearls: [
      'The clock for de-escalation starts when culture data return — typically 48-72 hours',
      'Always reassess empiric therapy at 48-72 hours regardless of clinical response',
      'Antibiotic stewardship depends on reliable empiric-to-definitive transitions',
    ],
    references: [
      'Kollef MH. Inadequate antimicrobial treatment: an important determinant of outcome. Clin Infect Dis. 2000;31(Suppl 4):S131-138',
      'Dellit TH, et al. IDSA/SHEA guidelines for developing an institutional program to enhance antimicrobial stewardship. Clin Infect Dis. 2007;44(2):159-177',
    ],
  },
  {
    id: 'risk-benefit-analysis',
    name: 'Risk-Benefit Analysis in Clinical Decisions',
    category: 'management-reasoning',
    description:
      'Systematically weighing the potential benefits of an intervention against its risks, costs, and burdens to guide clinical management.',
    conceptExplanation:
      'Every clinical intervention carries both potential benefits and potential harms. Risk-benefit analysis involves quantifying (when possible) or qualitatively estimating both sides. Key considerations: absolute risk reduction (not relative), number needed to treat vs number needed to harm, patient preferences and values, quality-adjusted life years, and time horizon. Shared decision making with the patient is essential when trade-offs are close.',
    clinicalApplication:
      'For any proposed intervention (medication, procedure, surgery, screening test): (1) What is the expected benefit (NNT, ARR)? (2) What are the risks (NNH, complication rates)? (3) What are the patient\'s preferences? (4) What are the alternatives including watchful waiting? Present information in absolute terms to patients and use decision aids when available.',
    examples: [
      'Anticoagulation for atrial fibrillation: stroke prevention benefit (NNT ~25-30/year) vs major bleeding risk (NNH ~100-200/year) — favorable ratio for most patients with CHA2DS2-VASc >=2',
      'Screening colonoscopy at age 50: mortality reduction NNT ~1000 per screening, vs perforation risk ~1/1000 — favorable risk-benefit profile',
      'Carotid endarterectomy for asymptomatic stenosis: NNT ~17-20 to prevent 1 stroke over 5 years vs perioperative stroke/death risk ~3% — benefits are marginal, shared decision making is essential',
    ],
    pitfalls: [
      'Relative risk reduction overstates benefit — always use absolute numbers',
      'Publication bias may inflate reported benefits of interventions',
      'Patient values and preferences may differ from clinician assumptions',
    ],
    keyPearls: [
      'Always present risks and benefits in absolute terms, not relative terms',
      'When NNT and NNH are close, patient preferences should drive the decision',
      'The best decision for one patient may not be the best for another with different values',
    ],
    references: [
      'Montori VM, et al. Shared decision making and the patient\'s right to information. Mayo Clin Proc. 2017;92(9):1347-1350',
      'Guyatt GH, et al. GRADE guidelines: rating the quality of evidence. J Clin Epidemiol. 2011;64(4):383-394',
    ],
  },
  {
    id: 'watchful-waiting',
    name: 'Watchful Waiting (Active Observation)',
    category: 'management-reasoning',
    description:
      'A deliberate management strategy of monitoring a condition with specific follow-up criteria rather than immediate intervention.',
    conceptExplanation:
      'Watchful waiting is not inaction — it is a structured management plan with defined monitoring intervals, specific criteria for escalation, and clear safety-net instructions. It is appropriate when: the condition is likely self-limited, the risks of intervention outweigh benefits at the current stage, or diagnostic certainty is insufficient to commit to a specific treatment. It requires reliable patient follow-up and clear communication.',
    clinicalApplication:
      'When choosing watchful waiting: (1) Define what you are watching for (red flags, failure to improve, new symptoms). (2) Set a specific timeline for reassessment. (3) Provide clear safety-net instructions to the patient. (4) Document the reasoning for observation. (5) Ensure the patient has access to follow-up. This is a positive management decision, not a lack of one.',
    examples: [
      'Acute otitis media in children >2 years with mild symptoms: watchful waiting for 48-72 hours with safety-net prescription for antibiotics if not improving',
      'Incidental thyroid nodule <1 cm: follow-up ultrasound in 12-24 months rather than immediate biopsy',
      'Mild diverticulitis (uncomplicated, first episode): outpatient management with clear return precautions rather than admission or surgery',
    ],
    pitfalls: [
      'Patients may interpret watchful waiting as "doing nothing" — communicate actively',
      'Requires reliable follow-up system — not appropriate if patient cannot return',
      'Must clearly define escalation criteria to avoid delayed treatment when needed',
    ],
    keyPearls: [
      'Watchful waiting is an active decision, not a passive one — document it as a management plan',
      'Always provide safety-net advice: what to watch for, when to return, and how to reach you',
      'Shared decision making is crucial — the patient must agree to the monitoring plan',
    ],
    references: [
      'Rosenfeld RM, et al. Clinical practice guideline: acute otitis media. Pediatrics. 2013;131(3):e964-e999',
      'Little P, et al. Information leaflet and antibiotic prescribing for acute lower respiratory tract infection. JAMA. 2005;293(24):3029-3035',
    ],
  },
  {
    id: 'shared-decision-making',
    name: 'Shared Decision Making',
    category: 'management-reasoning',
    description:
      'A collaborative process where clinician and patient jointly make healthcare decisions that align with the best evidence and the patient\'s values and preferences.',
    conceptExplanation:
      'Shared decision making (SDM) is the process of integrating three domains: the best available clinical evidence, the clinician\'s expertise and experience, and the patient\'s values, preferences, and circumstances. It is most important when there are multiple reasonable options (equipoise), when trade-offs between benefits and harms are close, or when decisions are preference-sensitive. SDM requires effective communication, decision aids, and adequate health literacy support.',
    clinicalApplication:
      'SDM is especially important for: cancer screening decisions, elective procedures, chronic disease management options, end-of-life care, and any decision with close benefit-risk trade-offs. Use decision aids when available. Present options in terms the patient understands. Explore patient values explicitly: "What matters most to you?" Avoid both paternalism and abandonment ("It is up to you").',
    examples: [
      'PSA screening: present the benefits (possible early cancer detection) and harms (false positives, overdiagnosis, treatment side effects) and explore patient preferences',
      'Knee osteoarthritis: present options (physical therapy, injections, total knee replacement) with expected outcomes for each, aligned to patient activity goals',
      'Atrial fibrillation anticoagulation: discuss stroke risk reduction vs bleeding risk, incorporating patient lifestyle (fall risk, medication adherence, activity level)',
    ],
    pitfalls: [
      'SDM requires time and communication skills — it is often skipped under time pressure',
      'Information overload can paralyze patients rather than empower them',
      'SDM does not mean the clinician abdicates responsibility — expert guidance is still essential',
    ],
    keyPearls: [
      'The best decision is the one that aligns evidence with patient values',
      'Use the "ask-tell-ask" framework: ask what the patient knows, tell key information, ask what they understood',
      'Decision aids improve patient understanding and reduce decisional conflict',
    ],
    references: [
      'Elwyn G, et al. Shared decision making: a model for clinical practice. J Gen Intern Med. 2012;27(10):1361-1367',
      'Stacey D, et al. Decision aids for people facing health treatment or screening decisions. Cochrane Database Syst Rev. 2017;4:CD001431',
    ],
  },
  {
    id: 'escalation-de-escalation',
    name: 'Escalation and De-escalation of Care',
    category: 'management-reasoning',
    description:
      'The systematic process of increasing or decreasing the intensity of treatment based on clinical response, new data, and evolving clinical picture.',
    conceptExplanation:
      'Escalation involves intensifying treatment when the patient is not responding as expected or when the clinical picture worsens. De-escalation involves narrowing or reducing treatment when the diagnosis is confirmed, the patient is improving, or initial broad therapy is no longer needed. Both require deliberate reassessment at defined intervals. Failure to de-escalate is as problematic as failure to escalate — it leads to unnecessary treatment, side effects, and resource utilization.',
    clinicalApplication:
      'Build reassessment triggers into every treatment plan: (1) What improvement do I expect and by when? (2) What deterioration would prompt escalation? (3) What data will allow de-escalation? For infections: reassess at 48-72 hours when cultures return. For critical illness: daily reassessment of organ support needs. For chronic disease: periodic reassessment of medication necessity and dose.',
    examples: [
      'Sepsis: escalate from floor to ICU if lactate fails to clear, vasopressors needed, or respiratory failure develops. De-escalate antibiotics at 48-72 hours per culture data.',
      'Asthma exacerbation: escalate from bronchodilators to systemic steroids to BiPAP to intubation based on response. De-escalate by weaning steroids and transitioning to maintenance inhalers.',
      'Pain management: escalate from acetaminophen to NSAIDs to opioids based on severity. De-escalate opioids as acute pain resolves, transitioning to non-opioid multimodal analgesia.',
    ],
    pitfalls: [
      'Inertia: treatments started in acute settings continue indefinitely without reassessment',
      'Failure to escalate due to anchoring on the original diagnosis or plan',
      'De-escalation requires confidence — some clinicians fear narrowing therapy',
    ],
    keyPearls: [
      'Every treatment plan should include explicit escalation and de-escalation criteria',
      'The 48-72 hour reassessment is the most important management checkpoint in acute care',
      'If nothing has changed in your management over 48 hours, ask why — something should have been updated',
    ],
    references: [
      'Rhodes A, et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis. Intensive Care Med. 2017;43(3):304-377',
      'Tabah A, et al. A systematic review of the definitions, determinants, and clinical outcomes of antimicrobial de-escalation in the ICU. Clin Infect Dis. 2016;62(8):1009-1017',
    ],
  },

  // =======================================================================
  // CASE PRESENTATION
  // =======================================================================
  {
    id: 'case-presentation-structure',
    name: 'Structured Case Presentation',
    category: 'case-presentation',
    description:
      'The standard framework for organizing and presenting clinical cases in medical education and clinical practice.',
    conceptExplanation:
      'A structured case presentation follows a standard format: (1) One-line summary (problem representation), (2) HPI with pertinent positives and negatives, (3) PMH/PSH/medications/allergies/social/family history, (4) Review of systems, (5) Physical examination, (6) Data (labs/imaging), (7) Assessment with prioritized problem list, (8) Plan for each problem. The presentation should be hypothesis-driven — include data that discriminates between differential diagnoses and omit irrelevant detail.',
    clinicalApplication:
      'Begin with a strong problem representation sentence. Present HPI chronologically with semantic qualifiers. Highlight pertinent positives (findings that support specific diagnoses) and pertinent negatives (absence of findings that argue against specific diagnoses). The assessment should synthesize, not just list — explain your reasoning. The plan should be actionable and specific.',
    examples: [
      'Opening: "Mr. Smith is a 65-year-old man with COPD and 40-pack-year smoking history presenting with 3 days of progressive dyspnea, productive cough with purulent sputum, and fever."',
      'Pertinent negative: "Denies chest pain, hemoptysis, unilateral leg swelling, or recent immobilization" — argues against PE and cardiac causes',
      'Assessment: "Most likely COPD exacerbation triggered by bacterial infection given productive purulent sputum and fever. Pneumonia must be excluded. PE is lower on the differential given absence of risk factors."',
    ],
    pitfalls: [
      'Data dumps without synthesis — presenting every detail without prioritization',
      'Failing to include pertinent negatives that narrow the differential',
      'Assessment that restates the HPI instead of synthesizing and reasoning through the differential',
    ],
    keyPearls: [
      'The opening sentence should trigger the listener\'s illness scripts immediately',
      'Pertinent negatives are as important as pertinent positives',
      'The assessment is where you demonstrate clinical reasoning — it is the most important part',
    ],
    references: [
      'Green EH, et al. Oral presentations in medicine: a summary of published recommendations. J Gen Intern Med. 2009;24(7):858-861',
      'Koenig HG, et al. The patient presentation in medical education. Med Teach. 1991;13(2):165-175',
    ],
  },
  {
    id: 'pertinent-positives-negatives',
    name: 'Pertinent Positives and Negatives',
    category: 'case-presentation',
    description:
      'Selectively reporting clinical findings that support or argue against specific diagnoses on the differential, demonstrating hypothesis-driven reasoning.',
    conceptExplanation:
      'Pertinent positives are findings that are present and support a specific diagnosis on the differential. Pertinent negatives are findings that are absent and argue against a specific diagnosis. Selecting the right pertinent positives and negatives demonstrates that the presenter has an active differential and is reasoning through it. This is the hallmark of an excellent clinical presentation and distinguishes expert from novice communication.',
    clinicalApplication:
      'For each diagnosis on your differential, identify the key findings that would be expected (pertinent positives if present, pertinent negatives if absent). Include these in your presentation. Do not include normal findings that do not discriminate between diagnoses (e.g., "mucous membranes are moist" is pertinent in dehydration, irrelevant in otitis media).',
    examples: [
      'For suspected PE: pertinent positive = unilateral leg swelling; pertinent negatives = no recent immobilization, no hemoptysis, no prior VTE',
      'For suspected meningitis: pertinent positives = fever, nuchal rigidity, photophobia; pertinent negatives = no rash (argues against meningococcemia), no focal neurologic deficits (argues against abscess)',
      'For suspected hyperthyroidism: pertinent positives = weight loss, tremor, palpitations; pertinent negatives = no exophthalmos, no thyroid bruit (may argue against Graves)',
    ],
    pitfalls: [
      'Including too many pertinent negatives buries the important ones',
      'Failing to include pertinent negatives suggests lack of differential diagnosis',
      'Pertinent negatives only make sense in context of a stated differential',
    ],
    keyPearls: [
      'Every pertinent negative should correspond to a specific diagnosis on your differential',
      'If you cannot identify pertinent negatives, your differential is underdeveloped',
      'The absence of expected findings is often as diagnostically powerful as their presence',
    ],
    references: [
      'Bowen JL. Educational strategies to promote clinical diagnostic reasoning. N Engl J Med. 2006;355(21):2217-2225',
      'Bordage G. Prototypes and semantic qualifiers: from past to present. Med Educ. 2007;41(12):1117-1121',
    ],
  },
  {
    id: 'problem-list-prioritization',
    name: 'Problem List Prioritization',
    category: 'case-presentation',
    description:
      'Organizing a patient\'s clinical problems by acuity, severity, and relatedness to create a structured assessment and plan.',
    conceptExplanation:
      'Problem list prioritization involves ordering clinical problems from most acute/severe to least. Related problems should be grouped under a unifying diagnosis when possible (Occam\'s razor). The primary problem drives the admission or encounter diagnosis. Secondary problems may be active (requiring current management) or chronic stable (requiring maintenance). Each problem should have an explicit assessment (what you think it is and why) and plan (what you will do about it).',
    clinicalApplication:
      'After synthesizing all clinical data: (1) List all identified problems. (2) Determine which are related and which are independent. (3) Rank by acuity (life-threatening first). (4) For each problem, state your assessment (most likely diagnosis and reasoning) and plan (diagnostics, therapeutics, monitoring). Review and reprioritize daily on inpatient services.',
    examples: [
      'Problem 1: Acute hypoxic respiratory failure, likely secondary to bilateral pneumonia. Plan: antibiotics, supplemental O2, monitor for intubation.',
      'Problem 2: Acute kidney injury, likely prerenal in setting of sepsis and volume depletion. Plan: IV fluids, trend Cr, monitor UOP.',
      'Problem 3: Type 2 diabetes, chronic stable. Plan: hold metformin in setting of AKI, sliding scale insulin, recheck HbA1c.',
    ],
    pitfalls: [
      'Failing to unify related problems leads to fragmented care',
      'Neglecting chronic problems during acute admissions (e.g., not resuming home medications)',
      'Not reprioritizing the problem list as the clinical picture evolves',
    ],
    keyPearls: [
      'The problem list is a living document — reprioritize daily',
      'Try to explain the most findings with the fewest diagnoses (Occam\'s razor) before invoking multiple independent processes',
      'Every problem needs both an assessment AND a plan',
    ],
    references: [
      'Weed LL. Medical records that guide and teach. N Engl J Med. 1968;278(11):593-600',
      'Haber RJ, Lingard LA. Learning oral presentation skills: a rhetorical analysis with pedagogical implications. J Gen Intern Med. 2001;16(5):308-314',
    ],
  },
  {
    id: 'dual-process-theory',
    name: 'Dual Process Theory of Clinical Reasoning',
    category: 'diagnostic-framework',
    description:
      'The cognitive framework describing two parallel reasoning systems: fast intuitive (System 1) and slow analytical (System 2) and their interaction in clinical diagnosis.',
    conceptExplanation:
      'System 1 (intuitive) reasoning is fast, automatic, pattern-based, and effortless — it drives expert pattern recognition. System 2 (analytical) reasoning is slow, deliberate, rule-based, and effortful — it drives hypothetico-deductive reasoning. Both systems operate in parallel. Expert clinicians default to System 1 for routine cases but engage System 2 for complex, ambiguous, or high-stakes situations. Diagnostic errors often arise when System 1 provides a wrong pattern match and System 2 fails to override it.',
    clinicalApplication:
      'Use System 1 for initial gestalt and rapid triage. Engage System 2 whenever: the case is complex, the initial impression does not quite fit, red flags are present, the diagnosis is high-stakes, or you are a learner. Build habits that trigger System 2 override: diagnostic timeouts, checklists, forced pauses. The "feeling of unease" is often System 2 signaling a mismatch.',
    examples: [
      'System 1 success: experienced EM physician sees classic STEMI pattern on ECG and activates cath lab within seconds',
      'System 1 failure: same physician sees a young woman with chest pain and automatically labels it "anxiety" without analytical verification',
      'System 2 override: intern presents a case that "does not add up" — the attending pauses, reexamines the data analytically, and identifies aortic dissection',
    ],
    pitfalls: [
      'Over-reliance on System 1 in complex cases leads to cognitive bias errors',
      'Over-reliance on System 2 is inefficient and impractical for routine cases',
      'Fatigue, time pressure, and cognitive overload degrade System 2 functioning',
    ],
    keyPearls: [
      'The best clinicians toggle between System 1 and System 2 as needed',
      'Trust your unease — it is often System 2 detecting a mismatch',
      'Structured forced pauses (diagnostic timeout) are the most reliable trigger for System 2 engagement',
    ],
    references: [
      'Croskerry P. A universal model of diagnostic reasoning. Acad Med. 2009;84(8):1022-1028',
      'Kahneman D. Thinking, Fast and Slow. New York: Farrar, Straus and Giroux; 2011',
    ],
  },
  {
    id: 'diagnostic-timeout',
    name: 'Diagnostic Timeout',
    category: 'diagnostic-framework',
    description:
      'A deliberate pause in the diagnostic process to reconsider the working diagnosis, review for cognitive biases, and ensure critical alternatives have not been missed.',
    conceptExplanation:
      'The diagnostic timeout is analogous to the surgical timeout — a structured pause to prevent errors. It involves stopping to ask: (1) What is my working diagnosis? (2) What data support it? (3) What data do NOT fit? (4) What is the worst-case diagnosis I must not miss? (5) Am I being influenced by any cognitive bias? It is most valuable at transitions of care, before discharge, when the clinical picture is not improving as expected, and in high-stakes situations.',
    clinicalApplication:
      'Implement diagnostic timeouts at key decision points: before discharge, at change of shift, when the patient is not improving, before invasive procedures, and when you feel uncertain. Ask the five questions systematically. Encourage the entire team to participate. Even 60 seconds of deliberate reconsideration can catch errors that hours of automatic processing missed.',
    examples: [
      'Before ED discharge of chest pain patient: "What is the worst thing this could be? Have I adequately excluded ACS, PE, and dissection?"',
      'At morning rounds for a patient not improving on antibiotics: "What if this is not pneumonia? Could this be heart failure, PE, or empyema?"',
      'Before sending a patient to the OR for appendectomy: "Does everything fit? Could this be Crohn\'s, mesenteric adenitis, or ruptured ovarian cyst?"',
    ],
    pitfalls: [
      'Time pressure and workflow demands make diagnostic timeouts difficult to implement consistently',
      'Can feel redundant for obvious cases — but even obvious cases are sometimes wrong',
      'Cultural barriers may prevent junior team members from questioning the working diagnosis',
    ],
    keyPearls: [
      'The diagnostic timeout is the single most practical debiasing strategy',
      'Make it a habit at every transition of care and before every discharge',
      'The question "What is the worst thing this could be?" is the most important question in medicine',
    ],
    references: [
      'Graber ML, et al. Cognitive interventions to reduce diagnostic error. BMJ Qual Saf. 2012;21(7):535-557',
      'Ely JW, et al. Checklists to reduce diagnostic errors. Acad Med. 2011;86(3):307-313',
    ],
  },
  {
    id: 'occams-razor-vs-hickams-dictum',
    name: 'Occam\'s Razor vs Hickam\'s Dictum',
    category: 'management-reasoning',
    description:
      'Competing principles for unifying clinical findings: Occam\'s razor favors one diagnosis explaining all findings, while Hickam\'s dictum acknowledges patients can have multiple independent diagnoses.',
    conceptExplanation:
      'Occam\'s razor (parsimony) holds that a single unifying diagnosis is preferred over multiple independent ones. This is a useful starting point: try to explain the most findings with the fewest diagnoses. Hickam\'s dictum counters that "a patient can have as many diseases as they darn well please." In reality, young patients with multisystem disease often have one unifying diagnosis (SLE, sarcoidosis, endocarditis), while elderly patients with multiple comorbidities may genuinely have several independent conditions. The appropriate framework depends on clinical context.',
    clinicalApplication:
      'Start with Occam\'s razor — attempt to unify all findings under one diagnosis. If no single diagnosis fits, consider Hickam\'s dictum: could there be two or more independent processes? In general, younger patients and multisystem disease favor Occam\'s razor; older patients with multiple comorbidities favor Hickam\'s dictum. When a single diagnosis explains 80% of findings, investigate that diagnosis and evaluate the remaining findings separately.',
    examples: [
      'Occam: Young woman with joint pain, malar rash, pleuritis, and proteinuria — SLE explains all findings with one diagnosis',
      'Hickam: 75-year-old with COPD exacerbation AND new atrial fibrillation AND gout flare — three independent conditions in an elderly multimorbid patient',
      'Occam: Fever, new murmur, splinter hemorrhages, and hematuria — infective endocarditis unifies all findings',
    ],
    pitfalls: [
      'Forcing all findings into one diagnosis when multiple conditions are present delays treatment of the secondary conditions',
      'Assuming multiple diagnoses in young patients may miss a unifying rare disease',
      'Neither principle is always correct — clinical judgment is required',
    ],
    keyPearls: [
      'Start with Occam\'s razor, but keep Hickam\'s dictum in reserve',
      'Young + multisystem = think Occam. Old + multimorbid = think Hickam.',
      'The best diagnosticians know when to switch between the two frameworks',
    ],
    references: [
      'Hilliard AA, et al. Occam\'s razor versus Saint\'s triad. N Engl J Med. 2004;350(6):599-603',
      'Mani N, Bhargava A. Hickam\'s dictum in clinical practice. Am J Med. 2015;128(9):e35',
    ],
  },
  {
    id: 'test-treatment-threshold',
    name: 'Test-Treatment Threshold Model',
    category: 'probability-reasoning',
    description:
      'A quantitative framework defining when disease probability is low enough to rule out (no treatment), high enough to rule in (empiric treatment), or uncertain enough to require testing.',
    conceptExplanation:
      'The test-treatment threshold model defines two critical probability points. The test threshold is the probability below which the disease is so unlikely that no testing or treatment is warranted. The treatment threshold is the probability above which the disease is so likely that empiric treatment should begin without further testing. Between these thresholds is the testing zone where diagnostic workup adds value. Threshold values depend on: disease severity, treatment benefits and risks, test accuracy, and test risks.',
    clinicalApplication:
      'For each clinical decision: (1) Estimate the pretest probability. (2) Define the test threshold (informed by disease risk if missed, false-positive consequences). (3) Define the treatment threshold (informed by treatment risk-benefit ratio). (4) If pretest probability falls between thresholds, test. If below the test threshold, reassure. If above the treatment threshold, treat empirically. Use this model to justify why you are or are not ordering a test.',
    examples: [
      'Appendicitis in a child: if clinical probability is >90% (classic presentation), proceed to OR without CT. If 15-90%, CT imaging is warranted. If <15%, observe.',
      'Strep pharyngitis: test threshold ~10% (below this, no rapid strep needed), treatment threshold ~50-70%. Centor score helps stratify into these zones.',
      'Deep vein thrombosis: test threshold ~3% (below, no ultrasound). Treatment threshold ~85% (above, start anticoagulation while awaiting confirmatory test).',
    ],
    pitfalls: [
      'Threshold values are context-dependent and not universally agreed upon',
      'Patient preferences can shift thresholds (a patient terrified of missing cancer may prefer a lower test threshold)',
      'Clinicians tend to test too much (testing below the test threshold) and too little (not treating above the treatment threshold)',
    ],
    keyPearls: [
      'If the test result will not change management, the probability is outside the testing zone — do not order the test',
      'Dangerous diseases with safe treatments have low test thresholds (rule out aggressively)',
      'Benign diseases with risky treatments have high treatment thresholds (require more certainty to treat)',
    ],
    references: [
      'Pauker SG, Kassirer JP. The threshold approach to clinical decision making. N Engl J Med. 1980;302(20):1109-1117',
      'Tsalatsanis A, et al. Modeling medical decision making using the threshold approach. J Biomed Inform. 2010;43(6):829-839',
    ],
  },
  {
    id: 'clinical-prediction-rules-overview',
    name: 'Clinical Prediction Rules — Overview',
    category: 'clinical-decision-making',
    description:
      'Evidence-based tools that quantify the probability of a clinical condition or outcome to standardize and improve decision making.',
    conceptExplanation:
      'Clinical prediction rules (CPRs) are derived from multivariate analysis of patient datasets, then validated in independent populations. They combine multiple clinical variables into a score or algorithm that estimates disease probability or prognosis. Well-validated CPRs reduce variability in clinical decisions, decrease unnecessary testing, and improve resource utilization. The best CPRs have undergone derivation, internal validation, external validation, and impact analysis (demonstrating improved outcomes when used).',
    clinicalApplication:
      'Use validated CPRs when available for common clinical decisions. Key rules include: Wells (PE and DVT), HEART (chest pain), Ottawa (ankle and knee injuries), CURB-65 (pneumonia severity), CHA2DS2-VASc (stroke risk in AF), PERC (PE rule-out), Centor/McIsaac (pharyngitis), Alvarado (appendicitis), CHADS-VASc + HAS-BLED (anticoagulation decisions). Apply the rule as designed (do not modify criteria) and interpret within clinical context.',
    examples: [
      'Wells score reduces unnecessary CTPA by identifying low-risk PE patients who need only D-dimer',
      'HEART score safely discharges 30% more low-risk chest pain patients compared to standard care',
      'Ottawa rules reduce ankle X-rays by 30-40% without missing fractures',
    ],
    pitfalls: [
      'CPRs should augment, not replace, clinical judgment',
      'Rules validated in one population may not apply to another (external validity)',
      'Over-reliance on scores can lead to cookbook medicine without critical thinking',
    ],
    keyPearls: [
      'Use CPRs to estimate pretest probability, then apply Bayesian reasoning',
      'The strongest CPRs have undergone impact analysis showing improved patient outcomes',
      'Know the limitations and excluded populations for every CPR you use',
    ],
    references: [
      'McGinn TG, et al. Tips for learners of evidence-based medicine: clinical prediction rules. CMAJ. 2008;178(6):721-725',
      'Stiell IG, Wells GA. Methodologic standards for the development of clinical decision rules in emergency medicine. Ann Emerg Med. 1999;33(4):437-447',
    ],
  },
  {
    id: 'cognitive-debiasing-strategies',
    name: 'Cognitive Debiasing Strategies',
    category: 'cognitive-bias',
    description:
      'Structured techniques to recognize and mitigate cognitive biases in clinical reasoning, reducing diagnostic error.',
    conceptExplanation:
      'Cognitive debiasing strategies are deliberate techniques to counteract systematic reasoning errors. Major strategies include: (1) Metacognition — thinking about your thinking, recognizing when biases may be active. (2) Diagnostic timeout — structured pause to reconsider. (3) Consider-the-opposite — actively generating alternative explanations. (4) Checklists — ensuring systematic coverage. (5) Structured reflection — reviewing diagnostic reasoning after cases. (6) Calibration training — improving confidence-accuracy alignment. These strategies are most effective when practiced habitually.',
    clinicalApplication:
      'Build debiasing habits into daily practice: (1) Start each case by asking "What are three things this could be?" (2) Before finalizing a diagnosis, ask "What is the worst-case scenario?" (3) Use diagnostic checklists for high-risk presentations. (4) Debrief after unexpected outcomes. (5) Seek second opinions for uncertain cases. (6) Maintain a "mistake diary" to identify personal bias patterns.',
    examples: [
      'Consider-the-opposite: working diagnosis is COPD exacerbation, deliberately ask "What if this is heart failure?"',
      'Diagnostic checklist for headache: have I considered SAH, meningitis, temporal arteritis, CO poisoning, and acute glaucoma?',
      'Structured reflection after a missed MI: "What cues did I ignore? What bias was active? How will I approach this differently?"',
    ],
    pitfalls: [
      'Knowledge of biases alone does not prevent them — deliberate practice is required',
      'Debiasing takes cognitive effort and may slow throughput in busy settings',
      'Overuse of System 2 checking for every routine case is impractical',
    ],
    keyPearls: [
      'Debiasing is a skill that improves with deliberate practice, not just awareness',
      'Focus debiasing efforts on high-stakes decisions and cases that feel uncertain',
      'The best debiasing tool is asking "What else could this be?" for every patient',
    ],
    references: [
      'Croskerry P, et al. Cognitive debiasing 1: origins of bias and theory of debiasing. BMJ Qual Saf. 2013;22(Suppl 2):ii58-ii64',
      'Lambe KA, et al. Dual-process cognitive interventions to enhance diagnostic reasoning. BMJ Qual Saf. 2016;25(10):808-820',
    ],
  },
] as const;

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Search entries by matching query against name, description, conceptExplanation, and clinicalApplication. */
export function searchClinicalReasoningEntries(
  query: string,
): ClinicalReasoningEntry[] {
  const q = query.toLowerCase();
  return clinicalReasoningDatabase.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.conceptExplanation.toLowerCase().includes(q) ||
      e.clinicalApplication.toLowerCase().includes(q),
  ) as unknown as ClinicalReasoningEntry[];
}

/** Filter entries by one or more categories. */
export function filterByCategory(
  categories: ClinicalReasoningCategory[],
): ClinicalReasoningEntry[] {
  const set = new Set<string>(categories);
  return clinicalReasoningDatabase.filter((e) =>
    set.has(e.category),
  ) as unknown as ClinicalReasoningEntry[];
}

/** Retrieve a single entry by id, or undefined if not found. */
export function getEntryById(
  id: string,
): ClinicalReasoningEntry | undefined {
  return clinicalReasoningDatabase.find(
    (e) => e.id === id,
  ) as ClinicalReasoningEntry | undefined;
}
