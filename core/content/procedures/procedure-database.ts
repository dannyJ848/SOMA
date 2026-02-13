/**
 * Biological Self - Medical Procedures Database
 * Compact reference of 120+ common medical procedures
 */

// --- Types ---

export type ProcedureCategory = 'diagnostic' | 'therapeutic' | 'surgical' | 'screening' | 'preventive';

export type ComplexityLevel = 'minimal' | 'low' | 'moderate' | 'high' | 'very-high';

export type AnesthesiaType = 'none' | 'local' | 'topical' | 'regional' | 'sedation' | 'general' | 'spinal' | 'epidural';

export type SettingType =
  | 'outpatient-clinic' | 'outpatient-surgery-center' | 'hospital-outpatient'
  | 'hospital-inpatient' | 'emergency-department' | 'operating-room'
  | 'cardiac-cath-lab' | 'interventional-radiology' | 'endoscopy-suite'
  | 'bedside' | 'laboratory' | 'imaging-center' | 'home';

export interface MedicalProcedureEntry {
  procedureId: string;
  name: string;
  spanishName: string;
  category: ProcedureCategory;
  description: string;
  specialties: string[];
  bodyRegions: string[];
  complexity: ComplexityLevel;
  setting: SettingType[];
  anesthesia: AnesthesiaType[];
  whatToExpect: string;
  patientExplanation: string;
}

// --- Procedure Database ---

export const MEDICAL_PROCEDURES: MedicalProcedureEntry[] = [

  // ============================================================
  // BLOOD TESTS & LABORATORY
  // ============================================================
  {
    procedureId: 'lab-cbc', name: 'Complete Blood Count (CBC)', spanishName: 'Hemograma completo',
    category: 'diagnostic', description: 'Measures red cells, white cells, hemoglobin, hematocrit, and platelets to evaluate overall health.',
    specialties: ['primary-care', 'hematology', 'internal-medicine'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'A quick blood draw from your arm vein, results typically within hours.',
    patientExplanation: 'A CBC checks the different types of cells in your blood to look for infections, anemia, clotting problems, and other conditions. It is one of the most commonly ordered blood tests.',
  },
  {
    procedureId: 'lab-bmp', name: 'Basic Metabolic Panel (BMP)', spanishName: 'Panel metabólico básico',
    category: 'diagnostic', description: 'Measures glucose, electrolytes, kidney function markers, and calcium levels in the blood.',
    specialties: ['primary-care', 'internal-medicine', 'nephrology'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Standard blood draw; fasting for 8-12 hours may be required.',
    patientExplanation: 'This test checks your blood sugar, kidney function, and important minerals like sodium and potassium to make sure your body chemistry is balanced.',
  },
  {
    procedureId: 'lab-cmp', name: 'Comprehensive Metabolic Panel (CMP)', spanishName: 'Panel metabólico completo',
    category: 'diagnostic', description: 'Includes all BMP tests plus liver enzymes, total protein, albumin, and bilirubin.',
    specialties: ['primary-care', 'internal-medicine', 'hepatology'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Standard blood draw; fasting for 10-12 hours is typically required.',
    patientExplanation: 'This broader blood panel checks your kidneys, liver, blood sugar, and electrolytes all in one test to give a more complete picture of your overall health.',
  },
  {
    procedureId: 'lab-lipid', name: 'Lipid Panel', spanishName: 'Panel de lípidos',
    category: 'screening', description: 'Measures total cholesterol, LDL, HDL, and triglycerides to assess cardiovascular risk.',
    specialties: ['primary-care', 'cardiology'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Blood draw after 9-12 hours of fasting; results within 1-2 days.',
    patientExplanation: 'This test measures your cholesterol and fat levels in the blood to help determine your risk for heart disease and stroke.',
  },
  {
    procedureId: 'lab-hba1c', name: 'Hemoglobin A1C', spanishName: 'Hemoglobina glicosilada A1C',
    category: 'diagnostic', description: 'Measures average blood sugar levels over the past 2-3 months for diabetes screening and monitoring.',
    specialties: ['primary-care', 'endocrinology'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Simple blood draw, no fasting required; results in 1-2 days.',
    patientExplanation: 'This test shows your average blood sugar over the past 2-3 months, helping to diagnose diabetes or see how well your diabetes is being controlled.',
  },
  {
    procedureId: 'lab-tsh', name: 'Thyroid Stimulating Hormone (TSH)', spanishName: 'Hormona estimulante de la tiroides',
    category: 'diagnostic', description: 'Measures TSH levels to screen for and monitor thyroid disorders.',
    specialties: ['primary-care', 'endocrinology'], bodyRegions: ['blood', 'endocrine'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Blood draw, typically drawn in the morning; results in 1-2 days.',
    patientExplanation: 'This test checks how well your thyroid gland is working. High levels may mean an underactive thyroid, while low levels may mean an overactive thyroid.',
  },
  {
    procedureId: 'lab-pt-inr', name: 'PT/INR (Coagulation Test)', spanishName: 'Tiempo de protrombina / INR',
    category: 'diagnostic', description: 'Measures how long it takes blood to clot, used to monitor blood-thinning medications.',
    specialties: ['hematology', 'cardiology', 'primary-care'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Quick blood draw; results same day or next day.',
    patientExplanation: 'This test checks how fast your blood clots. It is especially important if you take blood-thinning medications like warfarin.',
  },
  {
    procedureId: 'lab-urinalysis', name: 'Urinalysis', spanishName: 'Análisis de orina',
    category: 'diagnostic', description: 'Analyzes urine for signs of infection, kidney disease, diabetes, and other conditions.',
    specialties: ['primary-care', 'urology', 'nephrology'], bodyRegions: ['urinary'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'You provide a urine sample in a cup; results available within hours.',
    patientExplanation: 'This test examines your urine for bacteria, blood, sugar, or protein that may indicate an infection, kidney problem, or other health issue.',
  },
  {
    procedureId: 'lab-blood-culture', name: 'Blood Culture', spanishName: 'Hemocultivo',
    category: 'diagnostic', description: 'Detects bacteria or fungi in the blood to diagnose bloodstream infections.',
    specialties: ['infectious-disease', 'internal-medicine', 'emergency-medicine'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['hospital-inpatient', 'emergency-department'], anesthesia: ['none'],
    whatToExpect: 'Two sets of blood drawn from different sites; results take 24-72 hours.',
    patientExplanation: 'Blood is drawn and placed in special bottles to see if any bacteria or fungi are growing in your bloodstream, which would indicate a serious infection.',
  },
  {
    procedureId: 'lab-troponin', name: 'Troponin Test', spanishName: 'Prueba de troponina',
    category: 'diagnostic', description: 'Measures cardiac troponin protein levels to detect heart muscle damage.',
    specialties: ['cardiology', 'emergency-medicine'], bodyRegions: ['blood', 'heart'],
    complexity: 'minimal', setting: ['emergency-department', 'hospital-inpatient'], anesthesia: ['none'],
    whatToExpect: 'Blood draw, often repeated at intervals; results in 1-2 hours.',
    patientExplanation: 'This test looks for a protein released when your heart muscle is damaged, helping doctors determine if you are having or recently had a heart attack.',
  },
  {
    procedureId: 'lab-psa', name: 'Prostate-Specific Antigen (PSA)', spanishName: 'Antígeno prostático específico',
    category: 'screening', description: 'Measures PSA protein levels in blood to screen for prostate cancer.',
    specialties: ['urology', 'primary-care'], bodyRegions: ['blood', 'prostate'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Standard blood draw; results in 1-3 days.',
    patientExplanation: 'This blood test measures a protein made by the prostate gland. Elevated levels may indicate prostate cancer, but can also be raised by other conditions.',
  },

  // ============================================================
  // IMAGING - X-RAY, CT, MRI, ULTRASOUND
  // ============================================================
  {
    procedureId: 'img-xray-chest', name: 'Chest X-Ray', spanishName: 'Radiografía de tórax',
    category: 'diagnostic', description: 'Uses low-dose radiation to create images of the heart, lungs, airways, and chest bones.',
    specialties: ['radiology', 'pulmonology', 'emergency-medicine'], bodyRegions: ['chest', 'lungs', 'heart'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'imaging-center', 'emergency-department'], anesthesia: ['none'],
    whatToExpect: 'Stand against a plate, hold your breath briefly; done in under 5 minutes.',
    patientExplanation: 'A chest X-ray takes a quick picture of your lungs and heart using a small amount of radiation. It helps detect pneumonia, heart problems, and other chest conditions.',
  },
  {
    procedureId: 'img-ct-head', name: 'CT Scan - Head', spanishName: 'Tomografía computarizada de cabeza',
    category: 'diagnostic', description: 'Creates detailed cross-sectional images of the brain and skull using X-rays.',
    specialties: ['radiology', 'neurology', 'emergency-medicine', 'neurosurgery'], bodyRegions: ['head', 'brain'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient', 'emergency-department'], anesthesia: ['none'],
    whatToExpect: 'Lie still on a table that slides through a ring-shaped scanner; takes 5-10 minutes.',
    patientExplanation: 'A CT of the head uses X-rays from many angles to build detailed images of your brain. It can quickly detect bleeding, stroke, tumors, and skull fractures.',
  },
  {
    procedureId: 'img-ct-abdomen', name: 'CT Scan - Abdomen/Pelvis', spanishName: 'Tomografía de abdomen y pelvis',
    category: 'diagnostic', description: 'Detailed imaging of abdominal and pelvic organs, often with IV contrast dye.',
    specialties: ['radiology', 'gastroenterology', 'surgery', 'emergency-medicine'], bodyRegions: ['abdomen', 'pelvis'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient', 'emergency-department'], anesthesia: ['none'],
    whatToExpect: 'May drink oral contrast; IV contrast may be injected; scan takes 10-15 minutes.',
    patientExplanation: 'This scan creates detailed images of your abdominal organs like the liver, kidneys, and intestines. Contrast dye helps organs and blood vessels show up more clearly.',
  },
  {
    procedureId: 'img-ct-chest', name: 'CT Scan - Chest', spanishName: 'Tomografía de tórax',
    category: 'diagnostic', description: 'High-resolution imaging of the lungs, mediastinum, and chest structures.',
    specialties: ['radiology', 'pulmonology', 'oncology'], bodyRegions: ['chest', 'lungs'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Lie still, hold your breath when told; IV contrast may be used; takes about 10 minutes.',
    patientExplanation: 'A chest CT provides much more detail than a regular X-ray, showing the lungs and surrounding structures to detect tumors, infections, blood clots, and other problems.',
  },
  {
    procedureId: 'img-ct-angiography', name: 'CT Angiography (CTA)', spanishName: 'Angiografía por tomografía',
    category: 'diagnostic', description: 'CT scan with IV contrast to visualize blood vessels for blockages, aneurysms, or dissections.',
    specialties: ['radiology', 'cardiology', 'vascular-surgery'], bodyRegions: ['blood-vessels', 'chest', 'head'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient', 'emergency-department'], anesthesia: ['none'],
    whatToExpect: 'IV contrast is injected; you may feel warmth; scan takes 10-15 minutes.',
    patientExplanation: 'This specialized CT uses dye injected in your vein to create detailed pictures of your blood vessels, checking for blockages, clots, or abnormal bulges (aneurysms).',
  },
  {
    procedureId: 'img-mri-brain', name: 'MRI - Brain', spanishName: 'Resonancia magnética de cerebro',
    category: 'diagnostic', description: 'Uses magnetic fields and radio waves to create detailed images of brain structures without radiation.',
    specialties: ['radiology', 'neurology', 'neurosurgery'], bodyRegions: ['head', 'brain'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none', 'sedation'],
    whatToExpect: 'Lie inside a tube-shaped magnet for 30-60 minutes; loud knocking sounds; earplugs provided.',
    patientExplanation: 'An MRI uses powerful magnets (no radiation) to create extremely detailed pictures of your brain. It is the best way to see brain tumors, multiple sclerosis, and many other conditions.',
  },
  {
    procedureId: 'img-mri-spine', name: 'MRI - Spine', spanishName: 'Resonancia magnética de columna',
    category: 'diagnostic', description: 'Detailed imaging of spinal cord, nerve roots, vertebrae, and discs without radiation.',
    specialties: ['radiology', 'neurology', 'orthopedics', 'neurosurgery'], bodyRegions: ['spine'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none', 'sedation'],
    whatToExpect: 'Lie still in the scanner for 30-45 minutes; may need contrast injection.',
    patientExplanation: 'A spine MRI shows detailed images of your spinal cord, discs, and nerves to identify herniated discs, spinal stenosis, tumors, or infections.',
  },
  {
    procedureId: 'img-mri-knee', name: 'MRI - Knee', spanishName: 'Resonancia magnética de rodilla',
    category: 'diagnostic', description: 'Detailed imaging of knee joint structures including ligaments, menisci, cartilage, and tendons.',
    specialties: ['radiology', 'orthopedics', 'sports-medicine'], bodyRegions: ['knee'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Knee placed in a coil; lie still for 30-45 minutes; no radiation involved.',
    patientExplanation: 'This MRI gives detailed pictures of the ligaments, cartilage, and other structures inside your knee to diagnose tears, arthritis, and other injuries.',
  },
  {
    procedureId: 'img-mri-cardiac', name: 'Cardiac MRI', spanishName: 'Resonancia magnética cardíaca',
    category: 'diagnostic', description: 'Specialized MRI providing detailed images of heart structure, function, and blood flow.',
    specialties: ['radiology', 'cardiology'], bodyRegions: ['heart'],
    complexity: 'moderate', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'ECG leads placed on chest; lie still 45-90 minutes; hold breath periodically.',
    patientExplanation: 'A cardiac MRI creates very detailed images of your heart while it beats, showing how well it pumps and whether there is any scarring or structural abnormality.',
  },
  {
    procedureId: 'img-ultrasound-abdomen', name: 'Abdominal Ultrasound', spanishName: 'Ultrasonido abdominal',
    category: 'diagnostic', description: 'Uses sound waves to image abdominal organs including liver, gallbladder, kidneys, and pancreas.',
    specialties: ['radiology', 'gastroenterology', 'primary-care'], bodyRegions: ['abdomen'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'imaging-center'], anesthesia: ['none'],
    whatToExpect: 'Gel applied to skin; technician moves a probe over your abdomen; takes 20-30 minutes.',
    patientExplanation: 'An ultrasound uses sound waves (no radiation) to create pictures of your organs. It is commonly used to check the gallbladder, liver, kidneys, and look for fluid or masses.',
  },
  {
    procedureId: 'img-ultrasound-pelvic', name: 'Pelvic Ultrasound', spanishName: 'Ultrasonido pélvico',
    category: 'diagnostic', description: 'Images the uterus, ovaries, and surrounding pelvic structures using sound waves.',
    specialties: ['radiology', 'obstetrics-gynecology'], bodyRegions: ['pelvis', 'reproductive'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'imaging-center'], anesthesia: ['none'],
    whatToExpect: 'May be done externally or transvaginally; full bladder may be required; 20-30 minutes.',
    patientExplanation: 'This ultrasound examines the uterus, ovaries, and pelvis. It can detect ovarian cysts, fibroids, pregnancy, and other pelvic conditions without any radiation.',
  },
  {
    procedureId: 'img-echo', name: 'Echocardiogram (Transthoracic)', spanishName: 'Ecocardiograma transtorácico',
    category: 'diagnostic', description: 'Ultrasound of the heart to evaluate structure, valves, and pumping function.',
    specialties: ['cardiology'], bodyRegions: ['heart'],
    complexity: 'low', setting: ['outpatient-clinic', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Gel on chest; probe pressed against chest wall; takes 30-60 minutes.',
    patientExplanation: 'An echocardiogram is an ultrasound of your heart. It shows how well your heart pumps, whether your valves work properly, and if there are any structural problems.',
  },
  {
    procedureId: 'img-echo-tee', name: 'Transesophageal Echocardiogram (TEE)', spanishName: 'Ecocardiograma transesofágico',
    category: 'diagnostic', description: 'Ultrasound probe passed through the esophagus for closer, clearer images of the heart.',
    specialties: ['cardiology'], bodyRegions: ['heart', 'esophagus'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'operating-room'], anesthesia: ['sedation', 'topical'],
    whatToExpect: 'Throat numbed, sedation given; probe swallowed; takes 30-60 minutes; no eating after.',
    patientExplanation: 'Because the esophagus sits right behind the heart, this ultrasound probe placed through your mouth gives much clearer pictures than a standard echo, especially of the valves and for detecting blood clots.',
  },
  {
    procedureId: 'img-mammogram', name: 'Mammogram', spanishName: 'Mamografía',
    category: 'screening', description: 'Low-dose X-ray of the breast tissue to screen for and detect breast cancer.',
    specialties: ['radiology', 'breast-surgery'], bodyRegions: ['breast'],
    complexity: 'minimal', setting: ['imaging-center', 'outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Breast compressed between two plates for a few seconds per view; mild discomfort; 15-20 minutes.',
    patientExplanation: 'A mammogram is an X-ray of your breasts that can find cancers too small to feel. Regular screening mammograms are recommended starting between ages 40-50.',
  },
  {
    procedureId: 'img-dexa', name: 'DEXA Scan (Bone Density)', spanishName: 'Densitometría ósea DEXA',
    category: 'screening', description: 'Low-dose X-ray that measures bone mineral density to diagnose osteoporosis.',
    specialties: ['radiology', 'endocrinology', 'rheumatology'], bodyRegions: ['spine', 'hip', 'bone'],
    complexity: 'minimal', setting: ['imaging-center', 'outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Lie on a table while a scanner passes over your hip and spine; painless; 10-15 minutes.',
    patientExplanation: 'A DEXA scan measures how strong your bones are. It helps detect osteoporosis (weak bones) so treatment can start before a fracture happens.',
  },
  {
    procedureId: 'img-pet-ct', name: 'PET/CT Scan', spanishName: 'Tomografía PET/CT',
    category: 'diagnostic', description: 'Combines PET and CT imaging using a radioactive tracer to detect cancer, assess treatment response, and evaluate metabolic activity.',
    specialties: ['radiology', 'oncology', 'nuclear-medicine'], bodyRegions: ['whole-body'],
    complexity: 'moderate', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Radioactive sugar injected; wait 60 minutes; lie still for 30-45 minute scan.',
    patientExplanation: 'A PET/CT scan uses a small amount of radioactive sugar to highlight areas of high activity in your body, which can reveal cancer, assess if treatment is working, and detect recurrence.',
  },
  {
    procedureId: 'img-nuclear-stress', name: 'Nuclear Stress Test', spanishName: 'Prueba de estrés nuclear',
    category: 'diagnostic', description: 'Uses radioactive tracer and exercise or medication to evaluate blood flow to the heart muscle.',
    specialties: ['cardiology', 'nuclear-medicine'], bodyRegions: ['heart'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Tracer injected at rest and during stress; images taken twice; total time 3-4 hours.',
    patientExplanation: 'This test shows how blood flows to your heart at rest and under stress. It helps detect blocked arteries and determine if your heart muscle is getting enough blood.',
  },

  // ============================================================
  // ENDOSCOPY & GI PROCEDURES
  // ============================================================
  {
    procedureId: 'endo-egd', name: 'Upper Endoscopy (EGD)', spanishName: 'Endoscopia digestiva alta',
    category: 'diagnostic', description: 'A flexible camera is passed through the mouth to examine the esophagus, stomach, and upper small intestine.',
    specialties: ['gastroenterology'], bodyRegions: ['esophagus', 'stomach', 'duodenum'],
    complexity: 'moderate', setting: ['endoscopy-suite', 'outpatient-surgery-center'], anesthesia: ['sedation'],
    whatToExpect: 'Fast 6-8 hours before; IV sedation given; scope inserted through mouth; 15-20 minutes.',
    patientExplanation: 'A thin, flexible camera is placed through your mouth into your stomach. It lets the doctor see ulcers, inflammation, or growths and take tissue samples if needed.',
  },
  {
    procedureId: 'endo-colonoscopy', name: 'Colonoscopy', spanishName: 'Colonoscopia',
    category: 'screening', description: 'A flexible camera examines the entire colon and rectum for polyps, cancer, and inflammatory conditions.',
    specialties: ['gastroenterology', 'colorectal-surgery'], bodyRegions: ['colon', 'rectum'],
    complexity: 'moderate', setting: ['endoscopy-suite', 'outpatient-surgery-center'], anesthesia: ['sedation'],
    whatToExpect: 'Bowel prep day before; IV sedation; scope inserted through rectum; 30-60 minutes.',
    patientExplanation: 'A camera on a flexible tube is placed through the rectum to examine your entire colon. Polyps can be removed during the procedure, preventing them from becoming cancer.',
  },
  {
    procedureId: 'endo-sigmoidoscopy', name: 'Flexible Sigmoidoscopy', spanishName: 'Sigmoidoscopia flexible',
    category: 'diagnostic', description: 'Examines the rectum and lower colon (sigmoid) with a flexible scope.',
    specialties: ['gastroenterology', 'colorectal-surgery'], bodyRegions: ['colon', 'rectum'],
    complexity: 'low', setting: ['outpatient-clinic', 'endoscopy-suite'], anesthesia: ['none', 'sedation'],
    whatToExpect: 'Enema prep; shorter scope than colonoscopy; usually no sedation needed; 10-20 minutes.',
    patientExplanation: 'Similar to a colonoscopy but only examines the lower portion of your colon. It requires less preparation and often no sedation.',
  },
  {
    procedureId: 'endo-ercp', name: 'ERCP (Endoscopic Retrograde Cholangiopancreatography)', spanishName: 'Colangiopancreatografía retrógrada endoscópica',
    category: 'therapeutic', description: 'Combines endoscopy and fluoroscopy to diagnose and treat bile duct and pancreatic duct problems.',
    specialties: ['gastroenterology', 'interventional-endoscopy'], bodyRegions: ['bile-ducts', 'pancreas'],
    complexity: 'high', setting: ['endoscopy-suite', 'hospital-outpatient'], anesthesia: ['sedation', 'general'],
    whatToExpect: 'Fast overnight; deep sedation or general anesthesia; scope to bile ducts; 30-90 minutes.',
    patientExplanation: 'A special scope is passed through your mouth to where the bile duct enters your intestine. Dye is injected to see the ducts on X-ray, and stones can be removed or blockages opened.',
  },
  {
    procedureId: 'endo-eus', name: 'Endoscopic Ultrasound (EUS)', spanishName: 'Ultrasonido endoscópico',
    category: 'diagnostic', description: 'Combines endoscopy with ultrasound to image the walls of the GI tract and surrounding organs.',
    specialties: ['gastroenterology'], bodyRegions: ['esophagus', 'stomach', 'pancreas', 'bile-ducts'],
    complexity: 'high', setting: ['endoscopy-suite', 'hospital-outpatient'], anesthesia: ['sedation', 'general'],
    whatToExpect: 'Fast overnight; IV sedation; scope with ultrasound tip; biopsies possible; 30-60 minutes.',
    patientExplanation: 'An ultrasound probe on the tip of an endoscope gives very detailed images of the pancreas, bile ducts, and GI tract walls, and can guide needle biopsies of nearby masses.',
  },
  {
    procedureId: 'endo-capsule', name: 'Capsule Endoscopy', spanishName: 'Endoscopia por cápsula',
    category: 'diagnostic', description: 'A swallowed pill-sized camera takes thousands of images as it travels through the small intestine.',
    specialties: ['gastroenterology'], bodyRegions: ['small-intestine'],
    complexity: 'low', setting: ['outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Swallow a pill-sized camera; wear a sensor belt for 8 hours; camera passes naturally.',
    patientExplanation: 'You swallow a tiny camera in a capsule that takes pictures as it travels through your small intestine, an area regular endoscopes cannot easily reach. It passes naturally in your stool.',
  },

  // ============================================================
  // BIOPSY PROCEDURES
  // ============================================================
  {
    procedureId: 'bx-skin', name: 'Skin Biopsy', spanishName: 'Biopsia de piel',
    category: 'diagnostic', description: 'Removes a small sample of skin tissue for microscopic examination to diagnose skin conditions.',
    specialties: ['dermatology', 'primary-care'], bodyRegions: ['skin'],
    complexity: 'low', setting: ['outpatient-clinic'], anesthesia: ['local'],
    whatToExpect: 'Area numbed with local anesthetic; small tissue sample taken with punch, shave, or excision; 5-15 minutes.',
    patientExplanation: 'A small piece of skin is removed after numbing the area, then examined under a microscope to diagnose rashes, moles, or possible skin cancers.',
  },
  {
    procedureId: 'bx-breast', name: 'Breast Biopsy (Core Needle)', spanishName: 'Biopsia de mama con aguja gruesa',
    category: 'diagnostic', description: 'Uses a hollow needle to extract tissue samples from a breast abnormality, often guided by ultrasound or mammography.',
    specialties: ['radiology', 'breast-surgery'], bodyRegions: ['breast'],
    complexity: 'moderate', setting: ['imaging-center', 'outpatient-clinic'], anesthesia: ['local'],
    whatToExpect: 'Breast numbed; needle guided by imaging; several samples taken; pressure applied after; 30-60 minutes.',
    patientExplanation: 'After numbing the area, a needle is used to take small tissue samples from a lump or abnormality found on your mammogram or ultrasound. It avoids the need for surgery in most cases.',
  },
  {
    procedureId: 'bx-bone-marrow', name: 'Bone Marrow Biopsy', spanishName: 'Biopsia de médula ósea',
    category: 'diagnostic', description: 'Extracts a small core of bone marrow, usually from the hip bone, to evaluate blood cell production and detect cancers.',
    specialties: ['hematology', 'oncology'], bodyRegions: ['bone', 'hip'],
    complexity: 'moderate', setting: ['outpatient-clinic', 'hospital-outpatient'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Lie on your side; area numbed; needle inserted into hip bone; pressure sensation; 15-30 minutes.',
    patientExplanation: 'A needle is inserted into your hip bone to take a small sample of bone marrow, where blood cells are made. It helps diagnose leukemia, lymphoma, anemia, and other blood disorders.',
  },
  {
    procedureId: 'bx-liver', name: 'Liver Biopsy', spanishName: 'Biopsia hepática',
    category: 'diagnostic', description: 'A needle extracts a small sample of liver tissue to evaluate liver disease severity and type.',
    specialties: ['hepatology', 'gastroenterology', 'interventional-radiology'], bodyRegions: ['liver'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'interventional-radiology'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Ultrasound-guided; local anesthetic; brief needle insertion during breath-hold; 2-4 hours observation after.',
    patientExplanation: 'After numbing the skin, a needle is briefly inserted between your ribs into the liver to take a tiny tissue sample. It helps determine the cause and severity of liver disease.',
  },
  {
    procedureId: 'bx-prostate', name: 'Prostate Biopsy', spanishName: 'Biopsia de próstata',
    category: 'diagnostic', description: 'Ultrasound-guided needle biopsy of the prostate gland to check for cancer.',
    specialties: ['urology'], bodyRegions: ['prostate'],
    complexity: 'moderate', setting: ['outpatient-clinic', 'outpatient-surgery-center'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Ultrasound probe used for guidance; 10-12 needle samples taken; antibiotics given; 20-30 minutes.',
    patientExplanation: 'Small tissue samples are taken from the prostate using a needle guided by ultrasound. It is done to check whether an elevated PSA or abnormal exam is due to cancer.',
  },
  {
    procedureId: 'bx-lymph-node', name: 'Lymph Node Biopsy', spanishName: 'Biopsia de ganglio linfático',
    category: 'diagnostic', description: 'Removes all or part of a lymph node for examination to diagnose cancer, infection, or immune disorders.',
    specialties: ['surgery', 'hematology', 'oncology'], bodyRegions: ['lymph-nodes'],
    complexity: 'moderate', setting: ['outpatient-surgery-center', 'operating-room'], anesthesia: ['local', 'general'],
    whatToExpect: 'Excisional or needle biopsy; local or general anesthesia depending on location; 30-60 minutes.',
    patientExplanation: 'A swollen lymph node is removed or sampled with a needle to determine whether the swelling is caused by infection, lymphoma, or another condition.',
  },
  {
    procedureId: 'bx-kidney', name: 'Kidney Biopsy', spanishName: 'Biopsia renal',
    category: 'diagnostic', description: 'Ultrasound-guided needle biopsy of the kidney to diagnose glomerular and other kidney diseases.',
    specialties: ['nephrology', 'interventional-radiology'], bodyRegions: ['kidney'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'interventional-radiology'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Lie face-down; ultrasound-guided; local anesthetic; 4-6 hours bed rest after; same-day or overnight stay.',
    patientExplanation: 'A needle is inserted through your back into the kidney under ultrasound guidance to take a tiny tissue sample. It helps your doctor understand the exact type and cause of kidney disease.',
  },

  // ============================================================
  // CARDIAC PROCEDURES
  // ============================================================
  {
    procedureId: 'card-ecg', name: 'Electrocardiogram (ECG/EKG)', spanishName: 'Electrocardiograma',
    category: 'diagnostic', description: 'Records the electrical activity of the heart using electrodes placed on the skin.',
    specialties: ['cardiology', 'primary-care', 'emergency-medicine'], bodyRegions: ['heart'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'emergency-department', 'bedside'], anesthesia: ['none'],
    whatToExpect: 'Stickers placed on chest, arms, and legs; lie still for 10 seconds; completely painless.',
    patientExplanation: 'Small sticky patches on your skin record your heart rhythm. It takes less than a minute and helps detect irregular heartbeats, heart attacks, and other heart problems.',
  },
  {
    procedureId: 'card-holter', name: 'Holter Monitor (24-48hr)', spanishName: 'Monitor Holter',
    category: 'diagnostic', description: 'Portable device that continuously records heart rhythm over 24-48 hours during normal activities.',
    specialties: ['cardiology'], bodyRegions: ['heart'],
    complexity: 'minimal', setting: ['outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Electrodes stuck to chest; small recorder worn on belt; keep a symptom diary; return device in 1-2 days.',
    patientExplanation: 'You wear a small device that records every heartbeat for 1-2 days while you go about your daily life. It catches irregular rhythms that a brief ECG might miss.',
  },
  {
    procedureId: 'card-stress-test', name: 'Exercise Stress Test', spanishName: 'Prueba de esfuerzo',
    category: 'diagnostic', description: 'Monitors heart rhythm, blood pressure, and symptoms while walking on a treadmill at increasing intensity.',
    specialties: ['cardiology'], bodyRegions: ['heart'],
    complexity: 'low', setting: ['outpatient-clinic', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'ECG leads placed; walk on treadmill with increasing speed/incline; 15-30 minutes total.',
    patientExplanation: 'You walk on a treadmill while your heart rate, blood pressure, and ECG are monitored. It shows how well your heart handles physical activity and whether exercise triggers abnormal rhythms or chest pain.',
  },
  {
    procedureId: 'card-cath', name: 'Cardiac Catheterization', spanishName: 'Cateterismo cardíaco',
    category: 'diagnostic', description: 'A catheter is threaded through blood vessels to the heart to measure pressures, take images, and assess coronary arteries.',
    specialties: ['cardiology', 'interventional-cardiology'], bodyRegions: ['heart', 'coronary-arteries'],
    complexity: 'high', setting: ['cardiac-cath-lab'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Catheter inserted via wrist or groin; dye injected; X-ray images taken; 30-60 minutes; 2-6 hours recovery.',
    patientExplanation: 'A thin tube is threaded from your wrist or groin to your heart. Dye is injected to show your coronary arteries on X-ray, identifying any blockages that may need treatment.',
  },
  {
    procedureId: 'card-pci', name: 'Percutaneous Coronary Intervention (Angioplasty/Stent)', spanishName: 'Angioplastia coronaria con stent',
    category: 'therapeutic', description: 'Opens blocked coronary arteries using a balloon catheter and often places a stent to keep the artery open.',
    specialties: ['interventional-cardiology'], bodyRegions: ['coronary-arteries', 'heart'],
    complexity: 'high', setting: ['cardiac-cath-lab'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Done during or after catheterization; balloon inflated in artery; stent deployed; 1-2 hours; overnight stay.',
    patientExplanation: 'A tiny balloon is inflated inside a blocked heart artery to open it up, and a small metal mesh tube (stent) is placed to keep it open. This restores blood flow to the heart muscle.',
  },
  {
    procedureId: 'card-ablation', name: 'Cardiac Ablation', spanishName: 'Ablación cardíaca',
    category: 'therapeutic', description: 'Uses heat or cold energy delivered through catheters to destroy small areas of heart tissue causing abnormal rhythms.',
    specialties: ['electrophysiology', 'cardiology'], bodyRegions: ['heart'],
    complexity: 'high', setting: ['cardiac-cath-lab', 'operating-room'], anesthesia: ['sedation', 'general'],
    whatToExpect: 'Catheters inserted through groin veins; map heart rhythm; ablate abnormal tissue; 2-4 hours; overnight stay.',
    patientExplanation: 'Thin wires are threaded to your heart to find the exact spot causing your abnormal heartbeat. That spot is then carefully destroyed using heat or freezing, often curing the arrhythmia.',
  },
  {
    procedureId: 'card-pacemaker', name: 'Pacemaker Implantation', spanishName: 'Implante de marcapasos',
    category: 'therapeutic', description: 'Surgically implants a small device under the skin that sends electrical impulses to regulate slow heart rhythms.',
    specialties: ['electrophysiology', 'cardiology', 'cardiothoracic-surgery'], bodyRegions: ['heart', 'chest'],
    complexity: 'high', setting: ['operating-room', 'cardiac-cath-lab'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Small incision below collarbone; leads threaded to heart; device implanted under skin; 1-2 hours; overnight stay.',
    patientExplanation: 'A small device is placed under the skin near your collarbone with wires going to your heart. It monitors your heartbeat and sends electrical signals to keep it from going too slow.',
  },
  {
    procedureId: 'card-cardioversion', name: 'Electrical Cardioversion', spanishName: 'Cardioversión eléctrica',
    category: 'therapeutic', description: 'Delivers a controlled electrical shock to restore a normal heart rhythm from atrial fibrillation or flutter.',
    specialties: ['cardiology', 'emergency-medicine'], bodyRegions: ['heart'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'emergency-department'], anesthesia: ['sedation'],
    whatToExpect: 'Pads placed on chest; brief sedation; single shock delivered; wake up quickly; 1-2 hours total.',
    patientExplanation: 'While you are briefly asleep from sedation, a controlled electrical shock is delivered through pads on your chest to reset your heart back to its normal rhythm.',
  },

  // ============================================================
  // NEUROLOGIC PROCEDURES
  // ============================================================
  {
    procedureId: 'neuro-lp', name: 'Lumbar Puncture (Spinal Tap)', spanishName: 'Punción lumbar',
    category: 'diagnostic', description: 'A needle is inserted into the lower spine to collect cerebrospinal fluid for analysis.',
    specialties: ['neurology', 'emergency-medicine', 'anesthesiology'], bodyRegions: ['spine', 'nervous-system'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'emergency-department', 'bedside'], anesthesia: ['local'],
    whatToExpect: 'Curl on your side or sit bent forward; local numbing; needle between vertebrae; 20-30 minutes; lie flat 1-2 hours after.',
    patientExplanation: 'A needle is placed in your lower back to collect a small amount of the fluid surrounding your brain and spinal cord. It helps diagnose meningitis, multiple sclerosis, and other neurological conditions.',
  },
  {
    procedureId: 'neuro-eeg', name: 'Electroencephalogram (EEG)', spanishName: 'Electroencefalograma',
    category: 'diagnostic', description: 'Records electrical activity of the brain using electrodes placed on the scalp.',
    specialties: ['neurology'], bodyRegions: ['brain'],
    complexity: 'low', setting: ['outpatient-clinic', 'hospital-outpatient', 'bedside'], anesthesia: ['none'],
    whatToExpect: 'Electrodes glued to scalp; lie quietly for 20-40 minutes; may be asked to hyperventilate or look at flashing lights.',
    patientExplanation: 'Small sensors are placed on your scalp to record your brain waves. It is the main test used to diagnose epilepsy and evaluate seizure types.',
  },
  {
    procedureId: 'neuro-emg', name: 'Electromyography (EMG) / Nerve Conduction Study', spanishName: 'Electromiografía y velocidad de conducción nerviosa',
    category: 'diagnostic', description: 'Tests the electrical activity of muscles and the speed of nerve signal transmission.',
    specialties: ['neurology', 'physical-medicine'], bodyRegions: ['nerves', 'muscles'],
    complexity: 'low', setting: ['outpatient-clinic', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Small electrical shocks to nerves; thin needle inserted into muscles; mild discomfort; 30-60 minutes.',
    patientExplanation: 'This two-part test checks how well your nerves and muscles work. Small electrical impulses test nerve speed, and a thin needle in the muscle records its electrical activity to diagnose nerve damage or muscle disease.',
  },
  {
    procedureId: 'neuro-carotid-us', name: 'Carotid Ultrasound', spanishName: 'Ultrasonido carotídeo',
    category: 'diagnostic', description: 'Uses ultrasound to evaluate blood flow in the carotid arteries and detect plaque buildup.',
    specialties: ['neurology', 'vascular-surgery', 'radiology'], bodyRegions: ['neck', 'carotid-arteries'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'imaging-center'], anesthesia: ['none'],
    whatToExpect: 'Gel on neck; probe moved along both sides; painless; 20-30 minutes.',
    patientExplanation: 'An ultrasound probe is moved along your neck to see the arteries that supply blood to your brain. It detects narrowing or plaque that could increase your stroke risk.',
  },

  // ============================================================
  // PULMONARY PROCEDURES
  // ============================================================
  {
    procedureId: 'pulm-pft', name: 'Pulmonary Function Tests (PFTs)', spanishName: 'Pruebas de función pulmonar',
    category: 'diagnostic', description: 'Measures lung volumes, airflow rates, and gas exchange to evaluate breathing capacity.',
    specialties: ['pulmonology', 'allergy-immunology'], bodyRegions: ['lungs'],
    complexity: 'low', setting: ['outpatient-clinic', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Breathe into a mouthpiece with nose clipped; perform various breathing maneuvers; 30-60 minutes.',
    patientExplanation: 'You breathe into a machine that measures how much air your lungs hold and how well you move air in and out. It diagnoses asthma, COPD, and other lung conditions.',
  },
  {
    procedureId: 'pulm-bronchoscopy', name: 'Bronchoscopy', spanishName: 'Broncoscopia',
    category: 'diagnostic', description: 'A thin, flexible camera is inserted through the nose or mouth into the airways to examine the bronchial tubes.',
    specialties: ['pulmonology', 'thoracic-surgery'], bodyRegions: ['lungs', 'airways'],
    complexity: 'moderate', setting: ['endoscopy-suite', 'operating-room'], anesthesia: ['sedation', 'general'],
    whatToExpect: 'Fast 6 hours; sedation or general anesthesia; scope passed through nose/mouth; biopsies possible; 30-60 minutes.',
    patientExplanation: 'A thin camera is placed through your nose or mouth into your airways to look for infections, tumors, or bleeding. Tissue samples or fluid can be collected during the procedure.',
  },
  {
    procedureId: 'pulm-thoracentesis', name: 'Thoracentesis', spanishName: 'Toracocentesis',
    category: 'therapeutic', description: 'A needle drains fluid from the space between the lungs and chest wall (pleural space).',
    specialties: ['pulmonology', 'interventional-radiology'], bodyRegions: ['chest', 'pleural-space'],
    complexity: 'moderate', setting: ['bedside', 'hospital-outpatient'], anesthesia: ['local'],
    whatToExpect: 'Sit upright leaning forward; area numbed; needle guided by ultrasound; fluid drained; 15-30 minutes.',
    patientExplanation: 'A needle is inserted through your back into the fluid around your lung. Removing this fluid helps you breathe easier and allows the fluid to be tested to find the cause.',
  },
  {
    procedureId: 'pulm-chest-tube', name: 'Chest Tube Insertion', spanishName: 'Inserción de tubo torácico',
    category: 'therapeutic', description: 'A tube is placed through the chest wall into the pleural space to drain air, blood, or fluid.',
    specialties: ['pulmonology', 'thoracic-surgery', 'emergency-medicine'], bodyRegions: ['chest', 'pleural-space'],
    complexity: 'moderate', setting: ['emergency-department', 'hospital-inpatient', 'bedside'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Area numbed; small incision between ribs; tube inserted and connected to drainage system; tube remains until drainage stops.',
    patientExplanation: 'A tube is placed through a small incision between your ribs to drain air or fluid that has collected around your lung. The tube stays in place until the problem resolves, usually days.',
  },
  {
    procedureId: 'pulm-sleep-study', name: 'Polysomnography (Sleep Study)', spanishName: 'Polisomnografía (estudio del sueño)',
    category: 'diagnostic', description: 'Overnight recording of brain waves, oxygen levels, heart rate, and breathing during sleep.',
    specialties: ['pulmonology', 'sleep-medicine', 'neurology'], bodyRegions: ['whole-body'],
    complexity: 'low', setting: ['hospital-outpatient', 'home'], anesthesia: ['none'],
    whatToExpect: 'Spend a night in a sleep lab; sensors placed on head, face, chest, and legs; sleep monitored all night.',
    patientExplanation: 'You sleep overnight in a lab (or at home with a portable device) while sensors monitor your breathing, oxygen, brain waves, and movements to diagnose sleep apnea and other sleep disorders.',
  },

  // ============================================================
  // COMMON SURGERIES
  // ============================================================
  {
    procedureId: 'surg-appendectomy', name: 'Appendectomy', spanishName: 'Apendicectomía',
    category: 'surgical', description: 'Surgical removal of the appendix, most commonly for acute appendicitis.',
    specialties: ['general-surgery', 'emergency-medicine'], bodyRegions: ['abdomen', 'appendix'],
    complexity: 'moderate', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Usually laparoscopic (small incisions); general anesthesia; 30-60 minutes; go home same day or next day.',
    patientExplanation: 'The inflamed appendix is removed, usually through small incisions using a camera (laparoscopic). Most people go home the same or next day and recover within 1-3 weeks.',
  },
  {
    procedureId: 'surg-cholecystectomy', name: 'Cholecystectomy (Gallbladder Removal)', spanishName: 'Colecistectomía',
    category: 'surgical', description: 'Surgical removal of the gallbladder, most commonly for gallstones causing pain or inflammation.',
    specialties: ['general-surgery'], bodyRegions: ['abdomen', 'gallbladder'],
    complexity: 'moderate', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Usually laparoscopic; 3-4 small incisions; general anesthesia; 1-2 hours; same-day or overnight stay.',
    patientExplanation: 'Your gallbladder is removed through small incisions using a camera. You can live normally without a gallbladder. Most people go home the same day and recover in 1-2 weeks.',
  },
  {
    procedureId: 'surg-hernia-inguinal', name: 'Inguinal Hernia Repair', spanishName: 'Reparación de hernia inguinal',
    category: 'surgical', description: 'Repairs a weakness in the groin area where tissue or intestine bulges through the abdominal wall.',
    specialties: ['general-surgery'], bodyRegions: ['groin', 'abdomen'],
    complexity: 'moderate', setting: ['operating-room', 'outpatient-surgery-center'], anesthesia: ['general', 'regional', 'local'],
    whatToExpect: 'Open or laparoscopic; mesh typically placed to reinforce area; 1-2 hours; same-day discharge usually.',
    patientExplanation: 'The bulging tissue is pushed back into place and the weak spot is reinforced, usually with surgical mesh. Most people go home the same day and return to normal activity in 2-4 weeks.',
  },
  {
    procedureId: 'surg-hysterectomy', name: 'Hysterectomy', spanishName: 'Histerectomía',
    category: 'surgical', description: 'Surgical removal of the uterus, performed for fibroids, cancer, endometriosis, or abnormal bleeding.',
    specialties: ['gynecology', 'gynecologic-oncology'], bodyRegions: ['uterus', 'pelvis'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Vaginal, laparoscopic, or abdominal approach; general anesthesia; 1-3 hours; 1-3 day hospital stay.',
    patientExplanation: 'The uterus is removed through the vagina, small incisions, or a larger abdominal incision depending on the reason and size. Full recovery takes about 4-6 weeks.',
  },
  {
    procedureId: 'surg-cesarean', name: 'Cesarean Section (C-Section)', spanishName: 'Cesárea',
    category: 'surgical', description: 'Delivery of a baby through surgical incisions in the abdomen and uterus.',
    specialties: ['obstetrics-gynecology'], bodyRegions: ['abdomen', 'uterus'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['spinal', 'epidural', 'general'],
    whatToExpect: 'Spinal or epidural anesthesia; horizontal incision; baby delivered in minutes; surgery completed in 45-60 minutes; 2-4 day stay.',
    patientExplanation: 'Your baby is delivered through an incision in your lower abdomen. You are usually awake with numbing from the waist down. Recovery takes about 6 weeks, longer than vaginal delivery.',
  },
  {
    procedureId: 'surg-tonsillectomy', name: 'Tonsillectomy', spanishName: 'Amigdalectomía',
    category: 'surgical', description: 'Surgical removal of the tonsils, typically for recurrent infections or obstructive sleep apnea.',
    specialties: ['otolaryngology'], bodyRegions: ['throat', 'tonsils'],
    complexity: 'moderate', setting: ['operating-room', 'outpatient-surgery-center'], anesthesia: ['general'],
    whatToExpect: 'General anesthesia; tonsils removed through mouth; 20-30 minutes; go home same day; 10-14 days recovery.',
    patientExplanation: 'Your tonsils are removed through your mouth while you are asleep. Throat pain lasts 7-14 days. It is more commonly done in children but adults may need it too.',
  },
  {
    procedureId: 'surg-thyroidectomy', name: 'Thyroidectomy', spanishName: 'Tiroidectomía',
    category: 'surgical', description: 'Partial or total removal of the thyroid gland for nodules, cancer, or hyperthyroidism.',
    specialties: ['endocrine-surgery', 'otolaryngology', 'general-surgery'], bodyRegions: ['neck', 'thyroid'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Incision in lower neck; 2-3 hours; 1-2 day hospital stay; lifelong thyroid medication if total removal.',
    patientExplanation: 'Part or all of your thyroid gland is removed through an incision in your neck. If the entire gland is removed, you will need to take thyroid hormone medication daily for life.',
  },
  {
    procedureId: 'surg-mastectomy', name: 'Mastectomy', spanishName: 'Mastectomía',
    category: 'surgical', description: 'Surgical removal of one or both breasts, partially or completely, typically for breast cancer treatment or prevention.',
    specialties: ['breast-surgery', 'surgical-oncology'], bodyRegions: ['breast'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'General anesthesia; 1-3 hours; 1-2 day hospital stay; drains may be placed; reconstruction may be done simultaneously.',
    patientExplanation: 'Breast tissue is surgically removed to treat or prevent breast cancer. Reconstruction can often be started at the same time. Recovery takes several weeks.',
  },
  {
    procedureId: 'surg-cabg', name: 'Coronary Artery Bypass Grafting (CABG)', spanishName: 'Cirugía de derivación coronaria',
    category: 'surgical', description: 'Open-heart surgery that creates new routes around blocked coronary arteries using grafted blood vessels.',
    specialties: ['cardiothoracic-surgery'], bodyRegions: ['heart', 'coronary-arteries', 'chest'],
    complexity: 'very-high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Open-heart surgery; heart-lung machine used; 3-6 hours; ICU stay; 5-7 day hospitalization; 6-12 week recovery.',
    patientExplanation: 'Blood vessels from your leg, arm, or chest are used to bypass blocked heart arteries, restoring blood flow. It is major open-heart surgery with a long recovery but can dramatically improve symptoms and survival.',
  },
  {
    procedureId: 'surg-lumpectomy', name: 'Lumpectomy (Breast-Conserving Surgery)', spanishName: 'Tumorectomía',
    category: 'surgical', description: 'Removes a breast tumor and a margin of surrounding normal tissue while preserving the rest of the breast.',
    specialties: ['breast-surgery', 'surgical-oncology'], bodyRegions: ['breast'],
    complexity: 'moderate', setting: ['operating-room', 'outpatient-surgery-center'], anesthesia: ['general', 'local'],
    whatToExpect: 'General or local anesthesia; 1-2 hours; same-day discharge common; radiation usually follows.',
    patientExplanation: 'Only the tumor and a small rim of surrounding tissue are removed, keeping the rest of your breast. Radiation therapy usually follows to reduce the chance of cancer returning.',
  },
  {
    procedureId: 'surg-colectomy', name: 'Colectomy (Colon Resection)', spanishName: 'Colectomía',
    category: 'surgical', description: 'Removes part or all of the colon for cancer, diverticulitis, or inflammatory bowel disease.',
    specialties: ['colorectal-surgery', 'general-surgery'], bodyRegions: ['colon', 'abdomen'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Open or laparoscopic; general anesthesia; 2-4 hours; 3-7 day hospital stay; temporary ostomy possible.',
    patientExplanation: 'Part of your colon is removed and the healthy ends are reconnected. It can be done through small incisions or a larger opening. Recovery usually takes 4-6 weeks.',
  },

  // ============================================================
  // ORTHOPEDIC PROCEDURES
  // ============================================================
  {
    procedureId: 'ortho-tka', name: 'Total Knee Replacement', spanishName: 'Reemplazo total de rodilla',
    category: 'surgical', description: 'Replaces damaged knee joint surfaces with metal and plastic components to relieve pain and restore function.',
    specialties: ['orthopedics'], bodyRegions: ['knee'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general', 'spinal', 'regional'],
    whatToExpect: 'General or spinal anesthesia; 1-2 hours; 1-3 day hospital stay; extensive physical therapy for months.',
    patientExplanation: 'Your damaged knee joint is replaced with artificial metal and plastic parts. Physical therapy starts right away and continues for months. Most replacements last 15-20 years.',
  },
  {
    procedureId: 'ortho-tha', name: 'Total Hip Replacement', spanishName: 'Reemplazo total de cadera',
    category: 'surgical', description: 'Replaces the damaged hip joint with artificial components to eliminate pain and improve mobility.',
    specialties: ['orthopedics'], bodyRegions: ['hip'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general', 'spinal', 'regional'],
    whatToExpect: 'General or spinal anesthesia; 1-2 hours; 1-3 day hospital stay; walking with assistance same day.',
    patientExplanation: 'Your worn-out hip joint is replaced with an artificial ball-and-socket made of metal and ceramic or plastic. Most people walk with a walker the same day and recover over 3-6 months.',
  },
  {
    procedureId: 'ortho-acl', name: 'ACL Reconstruction', spanishName: 'Reconstrucción del ligamento cruzado anterior',
    category: 'surgical', description: 'Replaces a torn anterior cruciate ligament in the knee using a tendon graft.',
    specialties: ['orthopedics', 'sports-medicine'], bodyRegions: ['knee'],
    complexity: 'high', setting: ['operating-room', 'outpatient-surgery-center'], anesthesia: ['general', 'regional'],
    whatToExpect: 'Arthroscopic surgery; graft from hamstring or patellar tendon; 1-2 hours; same-day discharge; 6-9 months rehab.',
    patientExplanation: 'Your torn ACL is replaced with a tendon graft through small incisions using a camera. Recovery and physical therapy take 6-9 months before return to full sports.',
  },
  {
    procedureId: 'ortho-arthroscopy', name: 'Knee Arthroscopy', spanishName: 'Artroscopia de rodilla',
    category: 'surgical', description: 'Minimally invasive surgery using a camera and small instruments to diagnose and treat knee problems.',
    specialties: ['orthopedics', 'sports-medicine'], bodyRegions: ['knee'],
    complexity: 'moderate', setting: ['outpatient-surgery-center', 'operating-room'], anesthesia: ['general', 'regional'],
    whatToExpect: 'Small incisions; camera inserted into knee; 30-60 minutes; same-day discharge; 2-6 weeks recovery.',
    patientExplanation: 'A tiny camera is inserted through small cuts in your knee to look inside and fix problems like torn cartilage. You go home the same day and recovery is much faster than open surgery.',
  },
  {
    procedureId: 'ortho-shoulder-arthroscopy', name: 'Shoulder Arthroscopy', spanishName: 'Artroscopia de hombro',
    category: 'surgical', description: 'Minimally invasive surgery to repair rotator cuff tears, labral tears, and other shoulder problems.',
    specialties: ['orthopedics', 'sports-medicine'], bodyRegions: ['shoulder'],
    complexity: 'moderate', setting: ['outpatient-surgery-center', 'operating-room'], anesthesia: ['general', 'regional'],
    whatToExpect: 'Small incisions; camera in shoulder joint; 1-2 hours; same-day discharge; sling for weeks; months of rehab.',
    patientExplanation: 'Small instruments and a camera are inserted through tiny incisions to repair tears in your shoulder. You wear a sling for weeks and do physical therapy for several months.',
  },
  {
    procedureId: 'ortho-fracture-fixation', name: 'Fracture Fixation (ORIF)', spanishName: 'Fijación de fractura (reducción abierta y fijación interna)',
    category: 'surgical', description: 'Open surgery to realign broken bones and secure them with plates, screws, rods, or pins.',
    specialties: ['orthopedics', 'trauma-surgery'], bodyRegions: ['bone'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general', 'regional'],
    whatToExpect: 'Incision over fracture; bones aligned and fixed with hardware; 1-3 hours; may stay overnight.',
    patientExplanation: 'The broken bone is put back into proper alignment through a surgical incision and held in place with metal plates and screws. The hardware usually stays in permanently unless it causes problems.',
  },
  {
    procedureId: 'ortho-spinal-fusion', name: 'Spinal Fusion', spanishName: 'Fusión espinal',
    category: 'surgical', description: 'Permanently joins two or more vertebrae to eliminate motion and relieve pain from degenerative disc disease or instability.',
    specialties: ['orthopedics', 'neurosurgery'], bodyRegions: ['spine'],
    complexity: 'very-high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'General anesthesia; hardware and bone graft used; 2-6 hours; 2-4 day hospital stay; months of recovery.',
    patientExplanation: 'Two or more bones in your spine are fused together using bone graft and metal hardware. This stops painful movement at that segment but means that part of your spine will no longer bend.',
  },
  {
    procedureId: 'ortho-carpal-tunnel', name: 'Carpal Tunnel Release', spanishName: 'Liberación del túnel carpiano',
    category: 'surgical', description: 'Cuts the ligament pressing on the median nerve in the wrist to relieve carpal tunnel syndrome.',
    specialties: ['orthopedics', 'hand-surgery', 'neurosurgery'], bodyRegions: ['wrist', 'hand'],
    complexity: 'low', setting: ['outpatient-surgery-center'], anesthesia: ['local', 'regional'],
    whatToExpect: 'Small incision or endoscopic; local or regional anesthesia; 10-15 minutes; immediate use of hand; full recovery 4-6 weeks.',
    patientExplanation: 'The tight ligament pressing on the nerve in your wrist is cut through a small incision. The numbness and tingling usually improve within days to weeks.',
  },
  {
    procedureId: 'ortho-joint-injection', name: 'Joint Injection (Corticosteroid)', spanishName: 'Inyección articular de corticosteroide',
    category: 'therapeutic', description: 'Injects corticosteroid and local anesthetic directly into a joint to reduce inflammation and pain.',
    specialties: ['orthopedics', 'rheumatology', 'sports-medicine', 'primary-care'], bodyRegions: ['joint'],
    complexity: 'low', setting: ['outpatient-clinic'], anesthesia: ['local'],
    whatToExpect: 'Area cleaned; local numbing; needle inserted into joint; medication injected; 5-10 minutes; relief in days.',
    patientExplanation: 'Anti-inflammatory medication is injected directly into a painful joint. The injection may cause brief discomfort but typically provides relief within a few days that can last weeks to months.',
  },

  // ============================================================
  // SCREENING & PREVENTIVE PROCEDURES
  // ============================================================
  {
    procedureId: 'screen-pap', name: 'Pap Smear (Cervical Cytology)', spanishName: 'Papanicolaou (citología cervical)',
    category: 'screening', description: 'Collects cells from the cervix to screen for cervical cancer and precancerous changes.',
    specialties: ['obstetrics-gynecology', 'primary-care'], bodyRegions: ['cervix'],
    complexity: 'minimal', setting: ['outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Speculum inserted; cells gently brushed from cervix; mild discomfort; less than 5 minutes.',
    patientExplanation: 'During a pelvic exam, a small brush collects cells from your cervix. These cells are checked for abnormal changes that could lead to cervical cancer. Recommended every 3-5 years for most women.',
  },
  {
    procedureId: 'screen-fobt', name: 'Fecal Occult Blood Test (FOBT/FIT)', spanishName: 'Prueba de sangre oculta en heces',
    category: 'screening', description: 'Tests stool samples for hidden blood that may indicate colon cancer or polyps.',
    specialties: ['primary-care', 'gastroenterology'], bodyRegions: ['colon'],
    complexity: 'minimal', setting: ['home', 'outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Collect small stool sample at home using a kit; mail to lab; results in days.',
    patientExplanation: 'You collect a small stool sample at home and send it to a lab. The test checks for tiny amounts of blood that you cannot see, which could be an early sign of colon polyps or cancer.',
  },
  {
    procedureId: 'screen-ldct-lung', name: 'Low-Dose CT Lung Cancer Screening', spanishName: 'Tomografía de baja dosis para detección de cáncer de pulmón',
    category: 'screening', description: 'Low-radiation CT scan of the chest to screen high-risk individuals for early lung cancer.',
    specialties: ['radiology', 'pulmonology'], bodyRegions: ['lungs', 'chest'],
    complexity: 'minimal', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'No contrast needed; lie on table; single breath hold; scan takes less than 1 minute.',
    patientExplanation: 'A quick, low-dose CT scan looks for early lung cancer in people who are current or former heavy smokers. Finding cancer early dramatically improves the chance of cure.',
  },
  {
    procedureId: 'screen-aaa-us', name: 'Abdominal Aortic Aneurysm Screening', spanishName: 'Detección de aneurisma aórtico abdominal',
    category: 'screening', description: 'One-time ultrasound to check for enlargement of the abdominal aorta in at-risk men.',
    specialties: ['vascular-surgery', 'primary-care', 'radiology'], bodyRegions: ['abdomen', 'aorta'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'imaging-center'], anesthesia: ['none'],
    whatToExpect: 'Gel on abdomen; ultrasound probe measures aorta diameter; painless; 10-15 minutes.',
    patientExplanation: 'A quick ultrasound measures the width of the large artery in your abdomen. Recommended once for men aged 65-75 who have ever smoked to check for dangerous bulging of the aorta.',
  },
  {
    procedureId: 'prev-vaccination', name: 'Vaccination / Immunization', spanishName: 'Vacunación / Inmunización',
    category: 'preventive', description: 'Administration of a vaccine to stimulate immune protection against infectious diseases.',
    specialties: ['primary-care', 'pediatrics', 'infectious-disease'], bodyRegions: ['arm', 'immune-system'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'home'], anesthesia: ['none'],
    whatToExpect: 'Quick injection in the upper arm or thigh; mild soreness at site; 5 minutes.',
    patientExplanation: 'A vaccine teaches your immune system to recognize and fight specific germs. You may feel mild soreness at the injection site or brief flu-like symptoms as your body builds protection.',
  },
  {
    procedureId: 'prev-flu-shot', name: 'Influenza Vaccine', spanishName: 'Vacuna contra la influenza',
    category: 'preventive', description: 'Annual vaccination to protect against seasonal influenza strains.',
    specialties: ['primary-care', 'pediatrics'], bodyRegions: ['arm', 'immune-system'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'home'], anesthesia: ['none'],
    whatToExpect: 'Single injection in upper arm; mild soreness for 1-2 days; get annually before flu season.',
    patientExplanation: 'A yearly flu shot protects you from the most common flu strains expected that season. It is recommended for everyone 6 months and older, especially those with chronic conditions.',
  },
  {
    procedureId: 'prev-colonoscopy-screening', name: 'Screening Colonoscopy', spanishName: 'Colonoscopia de detección',
    category: 'screening', description: 'Routine colonoscopy for colorectal cancer screening in average-risk adults starting at age 45.',
    specialties: ['gastroenterology'], bodyRegions: ['colon', 'rectum'],
    complexity: 'moderate', setting: ['endoscopy-suite', 'outpatient-surgery-center'], anesthesia: ['sedation'],
    whatToExpect: 'Bowel prep day before; IV sedation; scope through rectum; polyps removed if found; repeat every 10 years if normal.',
    patientExplanation: 'A camera examines your entire colon while you are sedated. Polyps are removed before they can become cancer. If everything looks normal, you do not need another for 10 years.',
  },

  // ============================================================
  // DERMATOLOGIC PROCEDURES
  // ============================================================
  {
    procedureId: 'derm-excision', name: 'Skin Lesion Excision', spanishName: 'Escisión de lesión cutánea',
    category: 'surgical', description: 'Surgical removal of a skin growth, mole, or skin cancer with a margin of normal tissue.',
    specialties: ['dermatology', 'plastic-surgery'], bodyRegions: ['skin'],
    complexity: 'low', setting: ['outpatient-clinic', 'outpatient-surgery-center'], anesthesia: ['local'],
    whatToExpect: 'Area numbed; lesion cut out with margin; stitches placed; 15-30 minutes; sent to pathology.',
    patientExplanation: 'The suspicious growth is cut out along with a small border of normal skin, then sent to a lab to be examined. The area is closed with stitches.',
  },
  {
    procedureId: 'derm-mohs', name: 'Mohs Micrographic Surgery', spanishName: 'Cirugía de Mohs',
    category: 'surgical', description: 'Specialized skin cancer surgery that removes thin layers and examines them immediately to minimize tissue loss.',
    specialties: ['dermatology', 'dermatologic-surgery'], bodyRegions: ['skin'],
    complexity: 'moderate', setting: ['outpatient-clinic', 'outpatient-surgery-center'], anesthesia: ['local'],
    whatToExpect: 'Layers removed and checked under microscope one at a time; may take several hours; done in office.',
    patientExplanation: 'Skin cancer is removed one thin layer at a time, with each layer checked under a microscope right away. This ensures all cancer is removed while saving as much healthy skin as possible.',
  },
  {
    procedureId: 'derm-cryotherapy', name: 'Cryotherapy (Freezing)', spanishName: 'Crioterapia',
    category: 'therapeutic', description: 'Uses liquid nitrogen to freeze and destroy abnormal skin tissue such as warts and precancerous spots.',
    specialties: ['dermatology', 'primary-care'], bodyRegions: ['skin'],
    complexity: 'minimal', setting: ['outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Liquid nitrogen sprayed or applied to lesion; brief stinging/burning; blister may form; 1-2 minutes per spot.',
    patientExplanation: 'Liquid nitrogen is sprayed on warts, precancerous spots, or other skin growths to freeze and destroy them. You will feel a brief stinging sensation and a blister may form.',
  },

  // ============================================================
  // UROLOGIC PROCEDURES
  // ============================================================
  {
    procedureId: 'uro-cystoscopy', name: 'Cystoscopy', spanishName: 'Cistoscopia',
    category: 'diagnostic', description: 'A thin camera is inserted through the urethra to examine the inside of the bladder.',
    specialties: ['urology'], bodyRegions: ['bladder', 'urethra'],
    complexity: 'low', setting: ['outpatient-clinic', 'outpatient-surgery-center'], anesthesia: ['local', 'topical'],
    whatToExpect: 'Numbing gel applied; scope inserted through urethra; mild discomfort; 5-15 minutes.',
    patientExplanation: 'A thin camera is passed through the urethra to look inside your bladder. It helps find causes of blood in the urine, recurring infections, or bladder tumors.',
  },
  {
    procedureId: 'uro-lithotripsy', name: 'Extracorporeal Shock Wave Lithotripsy (ESWL)', spanishName: 'Litotricia extracorpórea por ondas de choque',
    category: 'therapeutic', description: 'Uses focused shock waves to break kidney stones into small fragments that can pass naturally.',
    specialties: ['urology'], bodyRegions: ['kidney', 'ureter'],
    complexity: 'moderate', setting: ['outpatient-surgery-center', 'hospital-outpatient'], anesthesia: ['sedation'],
    whatToExpect: 'Lie on table; shock waves focused on stone using X-ray or ultrasound; 30-60 minutes; go home same day.',
    patientExplanation: 'Shock waves are aimed at your kidney stone from outside your body to break it into tiny pieces that can pass in your urine. No incisions are needed.',
  },
  {
    procedureId: 'uro-turp', name: 'TURP (Transurethral Resection of Prostate)', spanishName: 'Resección transuretral de próstata',
    category: 'surgical', description: 'Removes excess prostate tissue through the urethra to relieve urinary obstruction from an enlarged prostate.',
    specialties: ['urology'], bodyRegions: ['prostate', 'urethra'],
    complexity: 'moderate', setting: ['operating-room'], anesthesia: ['spinal', 'general'],
    whatToExpect: 'Scope through urethra; prostate tissue trimmed; catheter placed; 1-2 day hospital stay.',
    patientExplanation: 'A scope is passed through the urethra to trim away excess prostate tissue that is blocking urine flow. No external incisions are needed. A catheter stays in for a day or two afterward.',
  },

  // ============================================================
  // OPHTHALMOLOGIC PROCEDURES
  // ============================================================
  {
    procedureId: 'eye-cataract', name: 'Cataract Surgery', spanishName: 'Cirugía de cataratas',
    category: 'surgical', description: 'Removes the clouded natural lens and replaces it with a clear artificial intraocular lens.',
    specialties: ['ophthalmology'], bodyRegions: ['eye'],
    complexity: 'moderate', setting: ['outpatient-surgery-center'], anesthesia: ['topical', 'local'],
    whatToExpect: 'Eye numbed with drops; tiny incision; cloudy lens removed and replaced; 15-30 minutes; go home same day.',
    patientExplanation: 'Your cloudy lens is removed through a tiny incision and replaced with a clear artificial lens. You are awake but your eye is completely numb. Vision improves within days.',
  },
  {
    procedureId: 'eye-lasik', name: 'LASIK Eye Surgery', spanishName: 'Cirugía LASIK',
    category: 'surgical', description: 'Reshapes the cornea with a laser to correct nearsightedness, farsightedness, or astigmatism.',
    specialties: ['ophthalmology'], bodyRegions: ['eye', 'cornea'],
    complexity: 'moderate', setting: ['outpatient-surgery-center'], anesthesia: ['topical'],
    whatToExpect: 'Numbing drops; corneal flap created; laser reshapes cornea; 10-15 minutes per eye; vision improves next day.',
    patientExplanation: 'A laser reshapes the surface of your eye to correct your vision so you may no longer need glasses or contacts. Both eyes can be done the same day with results noticed within 24 hours.',
  },
  {
    procedureId: 'eye-fundoscopy', name: 'Dilated Eye Exam (Fundoscopy)', spanishName: 'Examen de fondo de ojo con dilatación',
    category: 'screening', description: 'Dilating drops widen the pupil so the doctor can examine the retina, optic nerve, and blood vessels.',
    specialties: ['ophthalmology', 'optometry'], bodyRegions: ['eye', 'retina'],
    complexity: 'minimal', setting: ['outpatient-clinic'], anesthesia: ['topical'],
    whatToExpect: 'Dilating drops placed; wait 20-30 minutes; light shone into eye; blurry near vision for a few hours after.',
    patientExplanation: 'Drops widen your pupils so the doctor can see the back of your eye clearly. This checks for diabetes-related damage, glaucoma, and macular degeneration. Your near vision will be blurry for a few hours.',
  },

  // ============================================================
  // GYN / OB PROCEDURES
  // ============================================================
  {
    procedureId: 'gyn-colposcopy', name: 'Colposcopy', spanishName: 'Colposcopia',
    category: 'diagnostic', description: 'Uses a magnifying instrument to closely examine the cervix for abnormal areas after an abnormal Pap smear.',
    specialties: ['obstetrics-gynecology'], bodyRegions: ['cervix'],
    complexity: 'low', setting: ['outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Speculum placed; vinegar solution applied to cervix; magnified view; biopsies taken if needed; 15-20 minutes.',
    patientExplanation: 'After an abnormal Pap smear, a magnifying scope examines your cervix closely. Vinegar solution highlights abnormal areas, and small tissue samples may be taken for testing.',
  },
  {
    procedureId: 'gyn-iud', name: 'IUD Insertion', spanishName: 'Inserción de dispositivo intrauterino (DIU)',
    category: 'preventive', description: 'Places an intrauterine device in the uterus for long-acting reversible contraception.',
    specialties: ['obstetrics-gynecology', 'primary-care'], bodyRegions: ['uterus'],
    complexity: 'low', setting: ['outpatient-clinic'], anesthesia: ['none', 'local'],
    whatToExpect: 'Speculum placed; IUD inserted through cervix into uterus; cramping expected; 5-10 minutes.',
    patientExplanation: 'A small T-shaped device is placed inside your uterus for birth control. You may feel cramping during and after insertion. It provides effective contraception for 3-12 years depending on the type.',
  },
  {
    procedureId: 'gyn-dilation-curettage', name: 'Dilation and Curettage (D&C)', spanishName: 'Dilatación y curetaje',
    category: 'therapeutic', description: 'Dilates the cervix and removes tissue from the uterine lining for diagnosis or treatment of abnormal bleeding.',
    specialties: ['obstetrics-gynecology'], bodyRegions: ['uterus', 'cervix'],
    complexity: 'moderate', setting: ['outpatient-surgery-center', 'operating-room'], anesthesia: ['sedation', 'general'],
    whatToExpect: 'Cervix gently dilated; uterine lining scraped or suctioned; 10-15 minutes; go home same day.',
    patientExplanation: 'The opening of your uterus is gently widened and the lining is removed using suction or a scraping instrument. It is done to find the cause of heavy bleeding or after a miscarriage.',
  },
  {
    procedureId: 'ob-amniocentesis', name: 'Amniocentesis', spanishName: 'Amniocentesis',
    category: 'diagnostic', description: 'A needle extracts a small amount of amniotic fluid from around the fetus for genetic and developmental testing.',
    specialties: ['maternal-fetal-medicine', 'obstetrics-gynecology'], bodyRegions: ['abdomen', 'uterus'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'outpatient-clinic'], anesthesia: ['local', 'none'],
    whatToExpect: 'Ultrasound-guided needle through abdomen into amniotic sac; brief cramping; 10-15 minutes; results in 1-3 weeks.',
    patientExplanation: 'A thin needle guided by ultrasound collects a small sample of the fluid surrounding your baby. The fluid is tested for chromosomal abnormalities like Down syndrome and other genetic conditions.',
  },

  // ============================================================
  // ADDITIONAL DIAGNOSTIC / THERAPEUTIC
  // ============================================================
  {
    procedureId: 'gi-paracentesis', name: 'Paracentesis', spanishName: 'Paracentesis',
    category: 'therapeutic', description: 'A needle drains excess fluid from the abdominal cavity (ascites) for relief and diagnostic testing.',
    specialties: ['gastroenterology', 'hepatology', 'internal-medicine'], bodyRegions: ['abdomen'],
    complexity: 'moderate', setting: ['bedside', 'hospital-outpatient'], anesthesia: ['local'],
    whatToExpect: 'Lie on your back; area numbed; needle or catheter inserted into abdomen; fluid drained; 20-45 minutes.',
    patientExplanation: 'A needle is inserted into your abdomen to drain excess fluid that has built up, often from liver disease. Removing the fluid relieves pressure, bloating, and difficulty breathing.',
  },
  {
    procedureId: 'ir-picc-line', name: 'PICC Line Insertion', spanishName: 'Inserción de línea PICC',
    category: 'therapeutic', description: 'A long, thin catheter is inserted through an arm vein and threaded to a large vein near the heart for long-term IV access.',
    specialties: ['interventional-radiology', 'vascular-access'], bodyRegions: ['arm', 'vein'],
    complexity: 'low', setting: ['bedside', 'interventional-radiology'], anesthesia: ['local'],
    whatToExpect: 'Ultrasound-guided; local numbing; catheter threaded from arm; chest X-ray to confirm position; 30-45 minutes.',
    patientExplanation: 'A thin, flexible tube is placed in your arm vein and extends to a large vein near your heart. It is used for giving IV antibiotics, chemotherapy, or nutrition over weeks to months.',
  },
  {
    procedureId: 'ir-port', name: 'Port-a-Cath Implantation', spanishName: 'Implante de puerto de acceso venoso',
    category: 'surgical', description: 'Implants a small device under the skin connected to a central vein for repeated IV access, commonly for chemotherapy.',
    specialties: ['interventional-radiology', 'general-surgery'], bodyRegions: ['chest', 'vein'],
    complexity: 'moderate', setting: ['operating-room', 'interventional-radiology'], anesthesia: ['local', 'sedation'],
    whatToExpect: 'Small incision below collarbone; port placed under skin; catheter threaded into vein; 30-60 minutes; same-day discharge.',
    patientExplanation: 'A small disc-shaped device is placed under your skin near the collarbone, connected to a large vein. It creates a reliable access point for chemotherapy, blood draws, or IV medications.',
  },
  {
    procedureId: 'anes-epidural', name: 'Epidural Steroid Injection', spanishName: 'Inyección epidural de esteroides',
    category: 'therapeutic', description: 'Injects corticosteroid medication into the epidural space around spinal nerves to reduce pain and inflammation.',
    specialties: ['pain-management', 'anesthesiology', 'physical-medicine'], bodyRegions: ['spine'],
    complexity: 'moderate', setting: ['outpatient-clinic', 'outpatient-surgery-center'], anesthesia: ['local'],
    whatToExpect: 'Lie face-down; fluoroscopy guidance; local numbing; injection takes minutes; 30-60 minutes total visit.',
    patientExplanation: 'Anti-inflammatory medication is injected near the nerves in your spine to reduce pain from herniated discs, spinal stenosis, or sciatica. Relief may take a few days to start.',
  },
  {
    procedureId: 'anes-nerve-block', name: 'Peripheral Nerve Block', spanishName: 'Bloqueo nervioso periférico',
    category: 'therapeutic', description: 'Injects local anesthetic near a specific nerve to block pain signals from a particular body region.',
    specialties: ['anesthesiology', 'pain-management'], bodyRegions: ['nerves'],
    complexity: 'moderate', setting: ['outpatient-clinic', 'operating-room', 'emergency-department'], anesthesia: ['local'],
    whatToExpect: 'Ultrasound-guided; injection near target nerve; numbness in minutes; pain relief lasts hours to days.',
    patientExplanation: 'Numbing medication is injected near a specific nerve to block pain in a particular area of your body. It can be used for surgery, pain procedures, or to treat chronic pain.',
  },
  {
    procedureId: 'transfusion-rbc', name: 'Blood Transfusion', spanishName: 'Transfusión de sangre',
    category: 'therapeutic', description: 'Infuses donated red blood cells, plasma, or platelets into a patient through an IV line.',
    specialties: ['hematology', 'internal-medicine', 'surgery'], bodyRegions: ['blood'],
    complexity: 'low', setting: ['hospital-inpatient', 'hospital-outpatient', 'bedside'], anesthesia: ['none'],
    whatToExpect: 'Blood type verified; IV started; each unit infused over 1-4 hours; vitals monitored throughout.',
    patientExplanation: 'Donated blood products are given through an IV to replace blood lost from surgery, trauma, or disease. Your blood type is carefully matched and you are monitored for any reactions.',
  },
  {
    procedureId: 'dialysis-hemo', name: 'Hemodialysis', spanishName: 'Hemodiálisis',
    category: 'therapeutic', description: 'Filters waste and excess fluid from the blood using a dialysis machine when the kidneys can no longer function adequately.',
    specialties: ['nephrology'], bodyRegions: ['blood', 'kidney'],
    complexity: 'moderate', setting: ['hospital-outpatient', 'hospital-inpatient', 'home'], anesthesia: ['none'],
    whatToExpect: 'Blood drawn through access site, filtered by machine, and returned; 3-5 hours per session; typically 3 times per week.',
    patientExplanation: 'A machine filters your blood to remove waste and extra fluid, doing the work your kidneys can no longer do. Most people go to a dialysis center three times a week for 3-5 hours each visit.',
  },
  {
    procedureId: 'wound-debridement', name: 'Wound Debridement', spanishName: 'Desbridamiento de herida',
    category: 'therapeutic', description: 'Removes dead, damaged, or infected tissue from a wound to promote healing.',
    specialties: ['general-surgery', 'wound-care', 'dermatology'], bodyRegions: ['skin', 'soft-tissue'],
    complexity: 'moderate', setting: ['bedside', 'outpatient-clinic', 'operating-room'], anesthesia: ['local', 'sedation', 'general'],
    whatToExpect: 'Area numbed or sedation given; dead tissue removed with instruments; wound dressed; may need repeated sessions.',
    patientExplanation: 'Dead or infected tissue is removed from a wound to help it heal properly. Depending on the wound size and location, it may be done at the bedside or in the operating room.',
  },
  {
    procedureId: 'abscess-drainage', name: 'Abscess Incision and Drainage', spanishName: 'Incisión y drenaje de absceso',
    category: 'therapeutic', description: 'Cuts open and drains a pocket of pus (abscess) that has collected under the skin or in deeper tissue.',
    specialties: ['emergency-medicine', 'general-surgery', 'primary-care'], bodyRegions: ['skin', 'soft-tissue'],
    complexity: 'low', setting: ['emergency-department', 'outpatient-clinic'], anesthesia: ['local'],
    whatToExpect: 'Area numbed; incision made; pus drained; wound packed with gauze; 10-20 minutes; packing changes needed.',
    patientExplanation: 'A cut is made over the infected area to let the pus drain out. The wound is packed with gauze to keep it open and draining. Antibiotics may or may not be needed.',
  },
  {
    procedureId: 'central-line', name: 'Central Venous Catheter Insertion', spanishName: 'Inserción de catéter venoso central',
    category: 'therapeutic', description: 'Places a large-bore catheter into a major vein (neck, chest, or groin) for medication delivery, fluid resuscitation, or monitoring.',
    specialties: ['critical-care', 'emergency-medicine', 'anesthesiology'], bodyRegions: ['neck', 'chest', 'groin', 'vein'],
    complexity: 'moderate', setting: ['hospital-inpatient', 'emergency-department', 'bedside'], anesthesia: ['local'],
    whatToExpect: 'Ultrasound-guided; sterile technique; catheter placed in large vein; chest X-ray to confirm; 20-30 minutes.',
    patientExplanation: 'A large IV catheter is placed in a vein in your neck, chest, or groin when regular IVs are not sufficient. It allows delivery of strong medications and measurement of pressures inside your veins.',
  },
  {
    procedureId: 'intubation', name: 'Endotracheal Intubation', spanishName: 'Intubación endotraqueal',
    category: 'therapeutic', description: 'Places a breathing tube through the mouth into the trachea to secure the airway and deliver mechanical ventilation.',
    specialties: ['anesthesiology', 'critical-care', 'emergency-medicine'], bodyRegions: ['airway', 'trachea'],
    complexity: 'moderate', setting: ['operating-room', 'emergency-department', 'hospital-inpatient'], anesthesia: ['general', 'sedation'],
    whatToExpect: 'Sedation and paralytic given; laryngoscope used to visualize vocal cords; tube placed; connected to ventilator.',
    patientExplanation: 'A breathing tube is placed through your mouth into your windpipe while you are deeply sedated. It is connected to a machine that helps you breathe during surgery or critical illness.',
  },

  // ============================================================
  // ENT PROCEDURES
  // ============================================================
  {
    procedureId: 'ent-myringotomy', name: 'Myringotomy with Tubes (Ear Tubes)', spanishName: 'Miringotomía con tubos de ventilación',
    category: 'surgical', description: 'Makes a small incision in the eardrum and inserts a tube to allow drainage and ventilation of the middle ear.',
    specialties: ['otolaryngology'], bodyRegions: ['ear'],
    complexity: 'low', setting: ['outpatient-surgery-center', 'operating-room'], anesthesia: ['general'],
    whatToExpect: 'General anesthesia (especially in children); tiny incision in eardrum; tube placed; 10-15 minutes; go home same day.',
    patientExplanation: 'A tiny tube is placed through a small hole in the eardrum to drain fluid and prevent recurring ear infections. It is the most common childhood surgery. The tubes usually fall out on their own in 6-18 months.',
  },
  {
    procedureId: 'ent-septoplasty', name: 'Septoplasty', spanishName: 'Septoplastia',
    category: 'surgical', description: 'Straightens a deviated nasal septum to improve airflow and relieve chronic nasal obstruction.',
    specialties: ['otolaryngology'], bodyRegions: ['nose', 'septum'],
    complexity: 'moderate', setting: ['operating-room', 'outpatient-surgery-center'], anesthesia: ['general'],
    whatToExpect: 'Done through the nostrils (no external incisions); splints placed; 30-60 minutes; 1-2 weeks recovery.',
    patientExplanation: 'The crooked wall between your nostrils is straightened through surgery done entirely inside the nose. Splints may be placed for a few days. Most people recover in 1-2 weeks.',
  },
  {
    procedureId: 'ent-fess', name: 'Functional Endoscopic Sinus Surgery (FESS)', spanishName: 'Cirugía endoscópica funcional de senos paranasales',
    category: 'surgical', description: 'Uses an endoscope through the nostrils to open blocked sinus drainage pathways and remove diseased tissue.',
    specialties: ['otolaryngology'], bodyRegions: ['sinuses', 'nose'],
    complexity: 'moderate', setting: ['operating-room', 'outpatient-surgery-center'], anesthesia: ['general'],
    whatToExpect: 'Done through nostrils; camera-guided; 1-3 hours; same-day or overnight; nasal packing possible; 1-2 weeks recovery.',
    patientExplanation: 'A camera and tiny instruments are used through your nostrils to open your sinuses and remove blockages. No external cuts are made. You may have packing in your nose for a day or two.',
  },

  // ============================================================
  // ADDITIONAL PROCEDURES TO REACH 120+
  // ============================================================
  {
    procedureId: 'lab-d-dimer', name: 'D-Dimer Test', spanishName: 'Prueba de dímero D',
    category: 'diagnostic', description: 'Blood test that measures a protein fragment produced when a blood clot dissolves, used to rule out clotting events.',
    specialties: ['emergency-medicine', 'hematology', 'pulmonology'], bodyRegions: ['blood'],
    complexity: 'minimal', setting: ['emergency-department', 'laboratory'], anesthesia: ['none'],
    whatToExpect: 'Simple blood draw; results within hours; often used in emergency settings.',
    patientExplanation: 'This blood test helps rule out dangerous blood clots like deep vein thrombosis or pulmonary embolism. A normal result makes a blood clot very unlikely.',
  },
  {
    procedureId: 'lab-bnp', name: 'BNP / NT-proBNP Test', spanishName: 'Prueba de BNP / NT-proBNP',
    category: 'diagnostic', description: 'Measures brain natriuretic peptide levels to help diagnose and monitor heart failure.',
    specialties: ['cardiology', 'emergency-medicine', 'internal-medicine'], bodyRegions: ['blood', 'heart'],
    complexity: 'minimal', setting: ['emergency-department', 'laboratory', 'outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Standard blood draw; results within hours.',
    patientExplanation: 'This blood test measures a hormone released when your heart is under strain. High levels suggest your heart is not pumping as well as it should, helping diagnose heart failure.',
  },
  {
    procedureId: 'img-doppler-venous', name: 'Venous Doppler Ultrasound', spanishName: 'Ultrasonido Doppler venoso',
    category: 'diagnostic', description: 'Uses ultrasound to evaluate blood flow in veins, primarily to detect deep vein thrombosis (DVT).',
    specialties: ['radiology', 'vascular-surgery'], bodyRegions: ['legs', 'veins'],
    complexity: 'minimal', setting: ['outpatient-clinic', 'imaging-center', 'bedside'], anesthesia: ['none'],
    whatToExpect: 'Gel on leg; probe pressed along veins; painless; 20-30 minutes.',
    patientExplanation: 'An ultrasound probe checks the veins in your leg for blood clots. The technician presses on your veins to see if blood flows normally. It is painless and takes about 20-30 minutes.',
  },
  {
    procedureId: 'img-bone-scan', name: 'Bone Scan (Scintigraphy)', spanishName: 'Gammagrafía ósea',
    category: 'diagnostic', description: 'Uses a radioactive tracer injected into a vein to detect bone abnormalities including fractures, infections, and cancer spread.',
    specialties: ['nuclear-medicine', 'orthopedics', 'oncology'], bodyRegions: ['bone', 'whole-body'],
    complexity: 'low', setting: ['imaging-center', 'hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Tracer injected; wait 2-4 hours; then lie still for 30-60 minute scan.',
    patientExplanation: 'A small amount of radioactive tracer is injected and then absorbed by your bones. A special camera detects areas of increased activity, which can show fractures, infection, or cancer that has spread to the bones.',
  },
  {
    procedureId: 'surg-lap-nissen', name: 'Laparoscopic Nissen Fundoplication', spanishName: 'Fundoplicatura de Nissen laparoscópica',
    category: 'surgical', description: 'Wraps the top of the stomach around the lower esophagus to strengthen the anti-reflux barrier.',
    specialties: ['general-surgery', 'thoracic-surgery'], bodyRegions: ['esophagus', 'stomach'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Laparoscopic; 2-3 hours; 1-2 day hospital stay; soft diet for weeks; resolves reflux in most patients.',
    patientExplanation: 'The top of your stomach is wrapped around the lower esophagus to create a new valve that prevents acid reflux. Most people can stop taking reflux medications after this surgery.',
  },
  {
    procedureId: 'surg-lap-bariatric', name: 'Bariatric Surgery (Gastric Sleeve / Bypass)', spanishName: 'Cirugía bariátrica (manga gástrica / bypass)',
    category: 'surgical', description: 'Reduces stomach size or reroutes the digestive tract to promote significant weight loss in patients with severe obesity.',
    specialties: ['bariatric-surgery', 'general-surgery'], bodyRegions: ['stomach', 'small-intestine'],
    complexity: 'high', setting: ['operating-room'], anesthesia: ['general'],
    whatToExpect: 'Laparoscopic; 1-3 hours; 1-3 day hospital stay; strict diet progression; lifelong dietary and vitamin changes.',
    patientExplanation: 'The stomach is made much smaller (sleeve) or the digestive tract is rerouted (bypass) so you eat less and absorb fewer calories. It leads to significant weight loss but requires lifelong lifestyle changes.',
  },
  {
    procedureId: 'surg-turbt', name: 'TURBT (Transurethral Resection of Bladder Tumor)', spanishName: 'Resección transuretral de tumor vesical',
    category: 'surgical', description: 'Removes bladder tumors through the urethra using a resectoscope, both diagnostic and therapeutic.',
    specialties: ['urology'], bodyRegions: ['bladder'],
    complexity: 'moderate', setting: ['operating-room'], anesthesia: ['spinal', 'general'],
    whatToExpect: 'Scope through urethra; tumor removed; catheter placed; 30-60 minutes; overnight stay common.',
    patientExplanation: 'A scope is passed through the urethra to remove tumors from the inside of your bladder. No external incisions are needed. The tissue is sent to the lab to determine if cancer is present and how deep it goes.',
  },
  {
    procedureId: 'surg-tracheostomy', name: 'Tracheostomy', spanishName: 'Traqueostomía',
    category: 'surgical', description: 'Creates a surgical opening in the front of the neck into the trachea for long-term airway access.',
    specialties: ['otolaryngology', 'critical-care', 'general-surgery'], bodyRegions: ['neck', 'trachea'],
    complexity: 'moderate', setting: ['operating-room', 'bedside'], anesthesia: ['general', 'local'],
    whatToExpect: 'Incision in front of neck; tracheostomy tube placed; 20-45 minutes; requires specialized care and training.',
    patientExplanation: 'A small opening is made in the front of your neck into your windpipe, and a short tube is placed for breathing. This is done when a breathing tube through the mouth is needed for a long time or when the upper airway is blocked.',
  },
  {
    procedureId: 'prev-skin-check', name: 'Full-Body Skin Exam', spanishName: 'Examen dermatológico de cuerpo completo',
    category: 'screening', description: 'A dermatologist examines the entire skin surface for suspicious moles, skin cancers, and other lesions.',
    specialties: ['dermatology'], bodyRegions: ['skin'],
    complexity: 'minimal', setting: ['outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Undress to undergarments; doctor examines all skin with magnifying tool; 10-20 minutes.',
    patientExplanation: 'A dermatologist carefully looks at all areas of your skin for any moles or spots that look suspicious for skin cancer. Any concerning spots may be biopsied on the same visit.',
  },
  {
    procedureId: 'prev-bone-density', name: 'Osteoporosis Screening (DEXA)', spanishName: 'Detección de osteoporosis (DEXA)',
    category: 'screening', description: 'DEXA scan recommended for women 65+ and men 70+ to screen for osteoporosis before fractures occur.',
    specialties: ['primary-care', 'endocrinology', 'rheumatology'], bodyRegions: ['hip', 'spine', 'bone'],
    complexity: 'minimal', setting: ['imaging-center', 'outpatient-clinic'], anesthesia: ['none'],
    whatToExpect: 'Lie on padded table; scanner passes over hip and spine; painless; 10-15 minutes.',
    patientExplanation: 'A painless scan measures your bone density to check for thinning bones (osteoporosis). Early detection allows treatment to strengthen bones and prevent fractures.',
  },
  {
    procedureId: 'card-tilt-table', name: 'Tilt Table Test', spanishName: 'Prueba de mesa basculante',
    category: 'diagnostic', description: 'Evaluates how changes in position affect heart rate and blood pressure to diagnose causes of fainting.',
    specialties: ['cardiology', 'neurology'], bodyRegions: ['heart', 'nervous-system'],
    complexity: 'low', setting: ['hospital-outpatient'], anesthesia: ['none'],
    whatToExpect: 'Strapped to table; tilted upright to 60-70 degrees; monitored for 20-45 minutes for symptoms.',
    patientExplanation: 'You are strapped to a table that tilts you from lying flat to an upright position while your heart rate and blood pressure are monitored. It helps find out why you faint or feel lightheaded.',
  },
  {
    procedureId: 'resp-abg', name: 'Arterial Blood Gas (ABG)', spanishName: 'Gasometría arterial',
    category: 'diagnostic', description: 'Blood drawn from an artery (usually the wrist) to measure oxygen, carbon dioxide, and acid-base levels.',
    specialties: ['pulmonology', 'critical-care', 'emergency-medicine'], bodyRegions: ['blood', 'artery'],
    complexity: 'low', setting: ['emergency-department', 'hospital-inpatient', 'bedside'], anesthesia: ['none', 'local'],
    whatToExpect: 'Needle inserted into wrist artery; sharper pain than venous blood draw; results in minutes.',
    patientExplanation: 'Blood is taken from an artery in your wrist (rather than a vein) to directly measure oxygen and carbon dioxide levels. It is more uncomfortable than a regular blood draw but gives critical information about your breathing.',
  },
  {
    procedureId: 'rheum-joint-aspiration', name: 'Joint Aspiration (Arthrocentesis)', spanishName: 'Aspiración articular (artrocentesis)',
    category: 'diagnostic', description: 'Withdraws fluid from a swollen joint using a needle for analysis to diagnose infection, gout, or inflammation.',
    specialties: ['rheumatology', 'orthopedics', 'emergency-medicine'], bodyRegions: ['joint'],
    complexity: 'low', setting: ['outpatient-clinic', 'emergency-department'], anesthesia: ['local'],
    whatToExpect: 'Area numbed; needle inserted into joint; fluid withdrawn; 5-10 minutes; immediate pressure relief.',
    patientExplanation: 'A needle removes fluid from a swollen joint. The fluid is tested to find out if the swelling is caused by infection, gout, or another type of arthritis. Draining the fluid also relieves pressure and pain.',
  },
];

// --- Utility Functions ---

/**
 * Look up a single procedure by its procedureId.
 */
export function getProcedure(procedureId: string): MedicalProcedureEntry | undefined {
  return MEDICAL_PROCEDURES.find(p => p.procedureId === procedureId);
}

/**
 * Search procedures by keyword across name, spanishName, description, and patientExplanation.
 */
export function searchProcedures(query: string): MedicalProcedureEntry[] {
  const q = query.toLowerCase();
  return MEDICAL_PROCEDURES.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.spanishName.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.patientExplanation.toLowerCase().includes(q) ||
    p.procedureId.toLowerCase().includes(q)
  );
}

/**
 * Get all procedures in a given category.
 */
export function getProceduresByCategory(category: ProcedureCategory): MedicalProcedureEntry[] {
  return MEDICAL_PROCEDURES.filter(p => p.category === category);
}

/**
 * Get all procedures associated with a given specialty.
 */
export function getProceduresBySpecialty(specialty: string): MedicalProcedureEntry[] {
  const s = specialty.toLowerCase();
  return MEDICAL_PROCEDURES.filter(p =>
    p.specialties.some(sp => sp.toLowerCase() === s)
  );
}
