/**
 * Biological Self - Medical Imaging Database
 * Compact reference of 30 medical imaging entries covering modalities,
 * body-region studies, clinical indications, and safety topics.
 */

// --- Types ---

export interface ImagingEntry {
  id: string;
  name: string;
  nameEs: string;
  category: 'modality' | 'body-region' | 'clinical-indication' | 'contrast' | 'safety';
  modality?: 'xray' | 'ct' | 'mri' | 'ultrasound' | 'nuclear' | 'pet' | 'fluoroscopy' | 'mammography' | 'dexa';
  summary: string;
  howItWorks: string;
  commonIndications: string[];
  whatItShows: string[];
  limitations: string[];
  preparation: string;
  risks: string[];
  duration: string;
  cost: 'low' | 'moderate' | 'high' | 'very-high';
  radiationExposure: 'none' | 'minimal' | 'low' | 'moderate' | 'high';
  contrastRequired: boolean;
  patientTip: string;
}

// --- Helper ---

function img(
  id: string, name: string, nameEs: string,
  category: ImagingEntry['category'],
  modality: ImagingEntry['modality'] | undefined,
  summary: string, howItWorks: string,
  commonIndications: string[], whatItShows: string[], limitations: string[],
  preparation: string, risks: string[], duration: string,
  cost: ImagingEntry['cost'], radiationExposure: ImagingEntry['radiationExposure'],
  contrastRequired: boolean, patientTip: string,
): ImagingEntry {
  return {
    id, name, nameEs, category, modality, summary, howItWorks,
    commonIndications, whatItShows, limitations, preparation, risks,
    duration, cost, radiationExposure, contrastRequired, patientTip,
  };
}

// --- Imaging Database ---

export const IMAGING_ENTRIES: Record<string, ImagingEntry> = {};

const entries: ImagingEntry[] = [

  // ============================================================
  // MODALITIES (9)
  // ============================================================

  img('mod-xray', 'X-Ray (Radiograph)', 'Radiografía',
    'modality', 'xray',
    'Uses ionizing radiation to create 2D images of bones and certain soft tissues.',
    'An X-ray tube emits a beam of photons that passes through the body. Dense structures like bone absorb more radiation and appear white, while air-filled areas appear black.',
    ['Fractures', 'Pneumonia', 'Foreign body detection', 'Joint alignment', 'Dental evaluation'],
    ['Bone fractures and dislocations', 'Lung consolidation or effusion', 'Heart size and silhouette', 'Soft tissue calcifications'],
    ['Poor soft tissue contrast', 'Cannot detect early bone pathology', '2D projection overlaps structures', 'Cannot evaluate ligaments or tendons'],
    'Remove metal jewelry and clothing with zippers in the area being imaged. No other preparation is typically needed.',
    ['Minimal ionizing radiation exposure', 'Contraindicated in pregnancy unless benefits outweigh risks'],
    '5-15 minutes', 'low', 'minimal', false,
    'Stand still and hold your breath briefly when instructed to ensure a clear image.'),

  img('mod-ct', 'CT Scan (Computed Tomography)', 'Tomografía computarizada (TC)',
    'modality', 'ct',
    'Uses rotating X-ray beams and computer reconstruction to create detailed cross-sectional images.',
    'An X-ray tube rotates around the patient while detectors on the opposite side capture transmitted radiation. Computers reconstruct the data into thin cross-sectional slices that can be reformatted in any plane.',
    ['Trauma evaluation', 'Cancer staging', 'Pulmonary embolism', 'Kidney stones', 'Stroke evaluation', 'Appendicitis'],
    ['Detailed bone anatomy', 'Organ size and pathology', 'Vascular abnormalities with contrast', 'Hemorrhage and fluid collections'],
    ['Ionizing radiation higher than plain X-ray', 'Contrast allergy risk', 'Less soft tissue contrast than MRI', 'Motion artifact in uncooperative patients'],
    'May require fasting 4 hours before if contrast is used. Inform staff of kidney disease, diabetes, or contrast allergies.',
    ['Ionizing radiation (equivalent to 100-500 chest X-rays depending on study)', 'IV contrast may cause allergic reaction or kidney injury', 'Oral contrast may cause nausea'],
    '5-30 minutes', 'moderate', 'moderate', false,
    'You will lie on a motorized table that slides through a donut-shaped scanner. The machine may ask you to hold your breath briefly.'),

  img('mod-mri', 'MRI (Magnetic Resonance Imaging)', 'Resonancia magnética (RM)',
    'modality', 'mri',
    'Uses powerful magnets and radiofrequency pulses to create highly detailed images of soft tissues without radiation.',
    'A strong magnetic field aligns hydrogen protons in the body. Radiofrequency pulses are applied, and as protons relax back to alignment they emit signals captured by receiver coils and reconstructed into images.',
    ['Brain and spinal cord evaluation', 'Joint and ligament injuries', 'Soft tissue masses', 'Cardiac imaging', 'Pelvic pathology'],
    ['Excellent soft tissue contrast', 'Ligament and cartilage detail', 'Brain white/gray matter distinction', 'Spinal cord pathology', 'Tumor characterization'],
    ['Long scan times (30-90 min)', 'Claustrophobia may limit tolerance', 'Contraindicated with certain metallic implants', 'Poor bone cortex detail', 'Expensive'],
    'Remove all metal objects. Complete an MRI safety questionnaire. Inform staff of any implants, pacemakers, or claustrophobia.',
    ['No ionizing radiation', 'Gadolinium contrast may rarely cause nephrogenic systemic fibrosis in severe kidney disease', 'Loud noise may cause hearing discomfort'],
    '30-90 minutes', 'high', 'none', false,
    'Bring earplugs or request them. You will lie inside a narrow tube; let staff know if you are claustrophobic.'),

  img('mod-ultrasound', 'Ultrasound (Sonography)', 'Ecografía / Ultrasonido',
    'modality', 'ultrasound',
    'Uses high-frequency sound waves to produce real-time images of organs and blood flow without radiation.',
    'A transducer emits high-frequency sound waves that bounce off internal structures. The returning echoes are processed into real-time images showing organ shape, texture, and blood flow via Doppler.',
    ['Pregnancy monitoring', 'Abdominal organ evaluation', 'Thyroid nodules', 'Vascular assessment', 'Musculoskeletal evaluation', 'Guided biopsies'],
    ['Organ size and texture', 'Gallstones and kidney stones', 'Fetal development', 'Blood flow velocity and direction', 'Fluid collections', 'Cystic vs solid masses'],
    ['Limited by body habitus and bowel gas', 'Operator dependent', 'Cannot penetrate bone or air-filled structures well', 'Limited field of view'],
    'Abdominal ultrasound often requires fasting for 8 hours. Pelvic ultrasound may require a full bladder. No preparation needed for most other studies.',
    ['No known risks at diagnostic frequencies', 'Considered safe in pregnancy'],
    '15-45 minutes', 'low', 'none', false,
    'Warm gel is applied to the skin. The exam is painless; the transducer may press firmly at times.'),

  img('mod-nuclear', 'Nuclear Medicine / Bone Scan', 'Gammagrafía ósea / Medicina nuclear',
    'modality', 'nuclear',
    'Uses small amounts of radioactive tracers injected into the body to evaluate organ function and detect bone abnormalities.',
    'A radioactive tracer (radiopharmaceutical) is injected intravenously and accumulates in target tissues. A gamma camera detects emitted radiation and creates functional images showing areas of increased or decreased metabolic activity.',
    ['Bone metastases', 'Stress fractures', 'Osteomyelitis', 'Thyroid evaluation', 'Cardiac perfusion', 'Renal function assessment'],
    ['Areas of increased bone turnover (hot spots)', 'Organ function and perfusion', 'Thyroid uptake patterns', 'Cardiac ischemia or infarction'],
    ['Low spatial resolution compared to CT/MRI', 'Non-specific uptake patterns', 'Delayed imaging (2-4 hours after injection)', 'Cannot characterize lesions precisely'],
    'Varies by study. Bone scan: arrive for injection, then return 2-4 hours later. Thyroid scan: may require stopping certain medications. Hydrate well.',
    ['Small dose of ionizing radiation from radiotracer', 'Allergic reactions extremely rare', 'Radiation excreted in urine; maintain hygiene'],
    '1-4 hours (including wait time)', 'high', 'moderate', false,
    'You will receive an injection and may need to wait several hours before scanning. Drink plenty of water to help clear the tracer.'),

  img('mod-pet', 'PET Scan (Positron Emission Tomography)', 'Tomografía por emisión de positrones (PET)',
    'modality', 'pet',
    'Detects metabolically active tissues using a radioactive glucose analog, often combined with CT for anatomic localization.',
    'Fluorodeoxyglucose (FDG) labeled with fluorine-18 is injected intravenously. Metabolically active cells absorb more FDG. The scanner detects emitted positrons and creates 3D functional images, typically fused with CT for precise localization.',
    ['Cancer detection and staging', 'Treatment response monitoring', 'Recurrence detection', 'Cardiac viability', 'Neurological disorders like Alzheimer disease'],
    ['Metabolically active tumors', 'Lymph node involvement', 'Distant metastases', 'Cardiac viability', 'Brain metabolic patterns'],
    ['False positives from inflammation or infection', 'Small lesions under 1 cm may be missed', 'Elevated blood sugar impairs quality', 'High cost and limited availability'],
    'Fast for 6 hours before the exam. Avoid strenuous exercise for 24 hours. Blood sugar should be below 200 mg/dL. Inform staff if diabetic.',
    ['Ionizing radiation from radiotracer and CT component', 'FDG is generally well tolerated', 'Avoid close contact with pregnant women and small children for several hours after'],
    '2-3 hours (including uptake period)', 'very-high', 'high', false,
    'Rest quietly for about 60 minutes after the injection to prevent muscle uptake of the tracer. Avoid talking or chewing gum during the uptake period.'),

  img('mod-fluoroscopy', 'Fluoroscopy', 'Fluoroscopia',
    'modality', 'fluoroscopy',
    'Provides continuous real-time X-ray imaging used for dynamic studies and image-guided procedures.',
    'A continuous X-ray beam passes through the body and is captured on a fluorescent screen or digital detector, creating a live video feed. This allows observation of movement and real-time guidance of instruments.',
    ['Barium swallow and upper GI series', 'Joint injections', 'Catheter and stent placement', 'Fracture reduction', 'Lumbar puncture guidance'],
    ['Real-time swallowing mechanics', 'GI tract anatomy and motility', 'Joint space and needle placement', 'Catheter and device positioning'],
    ['Continuous radiation exposure', 'Limited soft tissue detail', 'Contrast agents often required', 'Operator and patient radiation dose management'],
    'Upper GI: fast for 8 hours. Barium enema: bowel preparation. Follow specific instructions for the ordered study.',
    ['Continuous ionizing radiation; dose depends on procedure length', 'Barium may cause constipation', 'Water-soluble contrast may cause diarrhea'],
    '15-60 minutes', 'moderate', 'low', true,
    'You may be asked to swallow barium or have contrast administered. The table may tilt at different angles during the exam.'),

  img('mod-mammography', 'Mammography', 'Mamografía',
    'modality', 'mammography',
    'Specialized low-dose X-ray imaging of the breast for cancer screening and diagnostic evaluation.',
    'The breast is compressed between two plates to spread tissue evenly and reduce radiation dose. Low-energy X-rays create detailed images of breast tissue. Digital tomosynthesis (3D mammography) acquires images at multiple angles.',
    ['Breast cancer screening (age 40+ or earlier with risk factors)', 'Evaluation of breast lumps', 'Follow-up of prior abnormalities', 'Screening in high-risk patients'],
    ['Masses and calcifications', 'Architectural distortion', 'Asymmetric tissue density', 'Skin thickening or retraction'],
    ['Dense breast tissue reduces sensitivity', 'Cannot distinguish all benign from malignant lesions', 'Compression can be uncomfortable', 'Supplemental screening may be needed for high-risk patients'],
    'Do not apply deodorant, powder, or lotion to the underarm or breast area on the day of the exam. Schedule during the first two weeks of your menstrual cycle when breasts are less tender.',
    ['Very low radiation dose', 'Brief compression discomfort', 'False positives may lead to unnecessary biopsies'],
    '15-30 minutes', 'low', 'minimal', false,
    'The compression lasts only a few seconds per image. Taking ibuprofen 30 minutes before may reduce discomfort.'),

  img('mod-dexa', 'DEXA Scan (Bone Densitometry)', 'Densitometría ósea (DEXA)',
    'modality', 'dexa',
    'Uses two low-dose X-ray beams to measure bone mineral density for osteoporosis screening.',
    'Two X-ray beams at different energy levels pass through the bone. The difference in absorption between bone and soft tissue allows precise calculation of bone mineral density (BMD), reported as T-scores and Z-scores.',
    ['Osteoporosis screening (women 65+, men 70+)', 'Early screening with risk factors', 'Monitoring osteoporosis treatment', 'Fracture risk assessment'],
    ['Bone mineral density at hip and spine', 'T-score comparing to young adult peak', 'Z-score comparing to age-matched peers', 'Fracture risk prediction'],
    ['Does not assess bone quality or microarchitecture', 'Spinal degenerative changes may falsely elevate readings', 'Cannot diagnose cause of bone loss', 'Body size may affect accuracy'],
    'No special preparation. Avoid calcium supplements 24 hours before. Wear comfortable clothing without metal fasteners.',
    ['Extremely low radiation dose (less than a chest X-ray)', 'No known significant risks'],
    '10-20 minutes', 'low', 'minimal', false,
    'You will lie flat on a padded table while a scanning arm passes over your hip and spine. The exam is completely painless.'),

  // ============================================================
  // BODY-REGION IMAGING (10)
  // ============================================================

  img('region-chest-xray', 'Chest X-Ray Interpretation', 'Interpretación de radiografía de tórax',
    'body-region', 'xray',
    'Systematic evaluation of a posteroanterior and lateral chest radiograph for cardiopulmonary pathology.',
    'PA and lateral views are obtained. Systematic review covers airway, bones, cardiac silhouette, diaphragm, effusions, fields (lung), great vessels, and hilum (ABCDEFGH approach).',
    ['Cough or shortness of breath', 'Chest pain', 'Pre-operative evaluation', 'Follow-up of pneumonia or effusion', 'Line and tube placement check'],
    ['Pneumonia and atelectasis', 'Pleural effusion', 'Pneumothorax', 'Cardiomegaly', 'Rib fractures', 'Mediastinal widening'],
    ['Cannot detect early interstitial lung disease reliably', 'Small nodules may be missed', 'Poor sensitivity for pulmonary embolism', 'Overlapping structures may obscure pathology'],
    'Remove necklaces and clothing above the waist; a gown is provided. No other preparation is needed.',
    ['Minimal radiation (equivalent to 2-3 days of natural background radiation)'],
    '5-10 minutes', 'low', 'minimal', false,
    'Take a deep breath and hold it when the technician instructs to get the clearest image.'),

  img('region-abdominal-ct', 'Abdominal CT', 'TC abdominal',
    'body-region', 'ct',
    'Cross-sectional imaging of the abdomen and pelvis to evaluate organs, vessels, and pathology.',
    'Helical CT acquires continuous data as the patient passes through the scanner. IV contrast highlights vascular structures and organ parenchyma. Oral contrast may opacify the bowel. Multi-phase imaging evaluates arterial, portal venous, and delayed phases.',
    ['Abdominal pain', 'Appendicitis', 'Diverticulitis', 'Kidney stones', 'Trauma', 'Cancer staging', 'Bowel obstruction'],
    ['Solid organ pathology (liver, spleen, kidneys, pancreas)', 'Appendicitis and diverticulitis', 'Kidney and ureteral stones', 'Bowel obstruction', 'Vascular abnormalities', 'Lymphadenopathy'],
    ['Ionizing radiation', 'Contrast risks in renal insufficiency', 'Oral contrast may delay study', 'Less sensitive for small bowel mucosal lesions'],
    'NPO for 4 hours if contrast is used. Drink oral contrast if prescribed (1-2 hours before). Check kidney function (creatinine).',
    ['Moderate radiation dose', 'IV contrast: allergy risk and contrast-induced nephropathy', 'Oral contrast: nausea or diarrhea'],
    '10-30 minutes', 'moderate', 'moderate', false,
    'You may need to drink oral contrast solution before the scan. The IV contrast can cause a warm flushing sensation; this is normal and brief.'),

  img('region-brain-mri', 'Brain MRI', 'RM cerebral',
    'body-region', 'mri',
    'High-resolution imaging of the brain for structural and pathological evaluation using multiple MRI sequences.',
    'Standard sequences include T1-weighted (anatomy), T2-weighted (fluid and pathology), FLAIR (suppresses CSF to highlight lesions), DWI (detects acute stroke), and post-contrast T1 (enhancing lesions). Specialized sequences can assess blood vessels, perfusion, and spectroscopy.',
    ['Stroke evaluation', 'Seizures', 'Multiple sclerosis', 'Brain tumors', 'Headaches with red flags', 'Dementia workup'],
    ['Acute and chronic infarcts', 'Demyelinating lesions', 'Tumors and masses', 'Hemorrhage', 'Hydrocephalus', 'Congenital anomalies'],
    ['Long scan time (30-45 min)', 'Motion sensitive', 'Cannot be done with certain pacemakers', 'Acute blood may be difficult to detect on some sequences'],
    'Complete MRI safety screening. Remove all metal. Inform staff of implants or claustrophobia. Gadolinium contrast may be used.',
    ['No radiation', 'Gadolinium contrast risk in severe kidney disease', 'Loud noise requires ear protection', 'Anxiety from confined space'],
    '30-45 minutes', 'high', 'none', false,
    'Keep your head still throughout the exam. You will hear loud knocking and buzzing sounds; earplugs or headphones will be provided.'),

  img('region-cardiac-echo', 'Cardiac Echocardiography', 'Ecocardiografía cardíaca',
    'body-region', 'ultrasound',
    'Ultrasound of the heart evaluating chamber size, wall motion, valve function, and hemodynamics.',
    'A transducer placed on the chest wall uses sound waves to visualize cardiac chambers, valves, and great vessels. Doppler measures blood flow velocity and direction. M-mode provides motion timing. Strain imaging assesses myocardial deformation.',
    ['Heart failure evaluation', 'Murmur assessment', 'Valvular disease', 'Pericardial effusion', 'Cardiomyopathy', 'Pre-operative cardiac risk'],
    ['Ejection fraction and wall motion', 'Valve stenosis and regurgitation', 'Chamber dimensions', 'Pericardial effusion', 'Diastolic function', 'Pulmonary artery pressure estimate'],
    ['Operator dependent', 'Limited acoustic windows in obese or emphysematous patients', 'Cannot assess coronary arteries directly', 'Endocarditis vegetations may be missed'],
    'No special preparation for transthoracic echo. Transesophageal echo (TEE) requires NPO for 6 hours.',
    ['No known risks for transthoracic echo', 'TEE: sore throat, rare esophageal injury'],
    '30-60 minutes', 'moderate', 'none', false,
    'You will lie on your left side. The sonographer will press the transducer firmly against your chest to obtain images through the ribs.'),

  img('region-msk-mri', 'Musculoskeletal MRI', 'RM musculoesquelética',
    'body-region', 'mri',
    'Detailed evaluation of joints, ligaments, tendons, cartilage, and bone marrow using MRI.',
    'Dedicated surface coils provide high-resolution imaging of the target joint. Fluid-sensitive sequences highlight tears and edema. Fat-suppressed sequences detect bone marrow edema. Post-contrast imaging evaluates synovitis and infection.',
    ['ACL/meniscus tears', 'Rotator cuff evaluation', 'Stress fractures', 'Osteomyelitis', 'Soft tissue masses', 'Avascular necrosis'],
    ['Ligament and tendon tears', 'Cartilage defects', 'Bone marrow edema', 'Joint effusion', 'Soft tissue tumors', 'Bone infection'],
    ['Metal hardware causes artifact', 'Long scan time', 'Small field of view limits survey', 'Cannot assess dynamic instability'],
    'Remove all metal from the body part being scanned. Immobilize the joint. Complete MRI safety screening.',
    ['No radiation', 'Gadolinium contrast if needed', 'Loud noise'],
    '30-60 minutes', 'high', 'none', false,
    'The body part being scanned will be placed in a specialized coil. Stay as still as possible; even small movements can blur the images.'),

  img('region-pelvic-us', 'Pelvic Ultrasound', 'Ecografía pélvica',
    'body-region', 'ultrasound',
    'Transabdominal and transvaginal imaging of the uterus, ovaries, and pelvic organs.',
    'Transabdominal approach uses a full bladder as an acoustic window. Transvaginal approach uses a high-frequency endocavitary probe inserted into the vaginal canal for higher resolution images of the uterus and ovaries.',
    ['Abnormal uterine bleeding', 'Pelvic pain', 'Ovarian cyst evaluation', 'Fibroid assessment', 'Infertility workup', 'Early pregnancy'],
    ['Uterine size, shape, and fibroids', 'Ovarian cysts and masses', 'Endometrial thickness', 'Free pelvic fluid', 'Early pregnancy viability'],
    ['Bowel gas may obscure views', 'Limited by patient habitus', 'Cannot fully characterize complex masses', 'Operator dependent'],
    'Transabdominal: drink 32 oz of water 1 hour before and do not urinate. Transvaginal: empty the bladder.',
    ['No known risks', 'Mild discomfort with transvaginal probe'],
    '20-30 minutes', 'low', 'none', false,
    'The transabdominal part requires a full bladder which can be uncomfortable. The transvaginal portion is brief and most patients tolerate it well.'),

  img('region-thyroid-us', 'Thyroid Ultrasound', 'Ecografía tiroidea',
    'body-region', 'ultrasound',
    'High-resolution ultrasound of the thyroid gland to evaluate nodules, size, and vascularity.',
    'A high-frequency linear transducer is placed on the anterior neck. It evaluates thyroid size, echogenicity, nodule characteristics (solid vs cystic, calcifications, margins), and cervical lymph nodes. Doppler assesses vascularity.',
    ['Palpable thyroid nodule', 'Abnormal thyroid labs', 'Goiter evaluation', 'Thyroid cancer surveillance', 'Guided biopsy (FNA)'],
    ['Nodule size, number, and characteristics', 'TI-RADS classification for malignancy risk', 'Thyroid gland size and echogenicity', 'Cervical lymph node abnormalities'],
    ['Cannot determine thyroid function (need blood tests)', 'Operator dependent', 'Small nodules may be difficult to biopsy', 'Cannot visualize substernal extension'],
    'No preparation needed. Wear a top with an open neckline for easy access.',
    ['No known risks', 'FNA biopsy if performed: mild discomfort, rare bleeding or infection'],
    '15-30 minutes', 'low', 'none', false,
    'You will lie with your neck slightly extended. The exam is painless. If a biopsy is needed, local anesthesia will be used.'),

  img('region-carotid-doppler', 'Carotid Doppler Ultrasound', 'Doppler carotídeo',
    'body-region', 'ultrasound',
    'Duplex ultrasound evaluating carotid artery stenosis and blood flow to the brain.',
    'B-mode imaging shows vessel anatomy while Doppler measures blood flow velocity. Peak systolic and end-diastolic velocities correlate with the degree of stenosis. Color Doppler displays flow direction and turbulence.',
    ['TIA or stroke evaluation', 'Carotid bruit', 'Pre-operative assessment', 'Atherosclerosis screening in high-risk patients'],
    ['Degree of carotid stenosis', 'Plaque morphology and stability', 'Blood flow velocity and direction', 'Vertebral artery flow', 'Intima-media thickness'],
    ['Operator dependent', 'Heavily calcified plaque may shadow', 'Cannot assess intracranial vessels', 'Tortuous vessels may affect accuracy'],
    'No special preparation. Wear a shirt with an open collar.',
    ['No known risks', 'Completely non-invasive'],
    '30-45 minutes', 'low', 'none', false,
    'Gel is applied to your neck and a transducer glides over the carotid arteries. You may hear pulsing sounds from the Doppler signal.'),

  img('region-renal-us', 'Renal Ultrasound', 'Ecografía renal',
    'body-region', 'ultrasound',
    'Imaging of the kidneys and bladder to evaluate size, hydronephrosis, stones, and masses.',
    'A curved transducer images both kidneys through the flanks and the bladder through the lower abdomen. Doppler can assess renal artery flow. Pre- and post-void bladder volumes measure residual urine.',
    ['Elevated creatinine', 'Hematuria', 'Flank pain', 'Urinary retention', 'Hydronephrosis screening', 'Kidney transplant monitoring'],
    ['Kidney size and cortical thickness', 'Hydronephrosis', 'Renal cysts and masses', 'Kidney stones (many but not all)', 'Bladder volume and wall thickening'],
    ['Small stones may be missed (CT is more sensitive)', 'Cannot assess renal function', 'Bowel gas may obscure views', 'Cannot reliably detect renal artery stenosis without Doppler'],
    'Drink water to fill the bladder before the exam. No fasting required unless combined with abdominal ultrasound.',
    ['No known risks', 'Non-invasive and radiation-free'],
    '15-30 minutes', 'low', 'none', false,
    'You may need to hold your breath briefly while the sonographer captures images through your side and back.'),

  img('region-spine', 'Spine Imaging', 'Estudios de imagen de columna vertebral',
    'body-region', undefined,
    'Multi-modality imaging of the cervical, thoracic, or lumbar spine using X-ray, CT, or MRI.',
    'X-ray provides initial evaluation of alignment and fractures. CT excels at bony detail and complex fractures. MRI is the gold standard for disc herniation, spinal cord compression, infection, and tumors. Each modality is selected based on clinical context.',
    ['Back pain with red flags', 'Radiculopathy', 'Trauma', 'Spinal stenosis', 'Scoliosis', 'Post-surgical evaluation'],
    ['Vertebral alignment and fractures (X-ray/CT)', 'Disc herniation and nerve compression (MRI)', 'Spinal cord pathology (MRI)', 'Bony canal stenosis (CT)', 'Infection and tumors (MRI with contrast)'],
    ['X-ray misses soft tissue pathology', 'CT involves radiation', 'MRI limited by metal hardware', 'Imaging findings may not correlate with symptoms'],
    'X-ray: remove jewelry. CT: check kidney function if contrast is used. MRI: complete safety screening.',
    ['X-ray/CT: ionizing radiation', 'MRI: no radiation but contraindicated with certain implants', 'Contrast agents carry respective risks'],
    '10-60 minutes (varies by modality)', 'moderate', 'low', false,
    'For spine MRI, you will lie flat for 30-45 minutes. Inform your doctor if symptoms include leg weakness or bladder changes, as these may require urgent imaging.'),

  // ============================================================
  // CLINICAL INDICATIONS (6)
  // ============================================================

  img('indication-chest-pain', 'When to Order Imaging for Chest Pain', 'Cuándo solicitar imagen por dolor torácico',
    'clinical-indication', undefined,
    'Evidence-based guidance on selecting imaging studies for the evaluation of chest pain.',
    'Initial evaluation typically begins with chest X-ray and ECG. CT pulmonary angiography (CTPA) is the gold standard for suspected pulmonary embolism. Coronary CT angiography or stress testing evaluates coronary artery disease. Echocardiography assesses cardiac function and pericardial effusion.',
    ['Acute chest pain', 'Suspected pulmonary embolism', 'Suspected aortic dissection', 'Stable chest pain with cardiac risk factors'],
    ['Chest X-ray: pneumothorax, pneumonia, effusion, cardiomegaly', 'CTPA: pulmonary embolism', 'CT angiography: aortic dissection', 'Echo: wall motion abnormalities, pericardial effusion'],
    ['Normal imaging does not exclude all causes of chest pain', 'Coronary CTA limited in heavily calcified vessels', 'Nuclear stress test has lower specificity in women'],
    'ECG and chest X-ray are first-line and need no special preparation. Advanced imaging may require contrast, fasting, or heart rate control.',
    ['Radiation from CT studies', 'Contrast-related risks', 'False positives may lead to invasive procedures'],
    'Varies by study', 'moderate', 'low', false,
    'Describe your chest pain clearly: location, quality, duration, what makes it better or worse, and associated symptoms like shortness of breath or sweating.'),

  img('indication-headache', 'When to Order Imaging for Headache', 'Cuándo solicitar imagen por cefalea',
    'clinical-indication', undefined,
    'Guidelines for neuroimaging in headache evaluation, focusing on red flag features.',
    'Most primary headaches (migraine, tension) do not require imaging. Red flags prompting imaging include thunderclap onset, focal neurological deficits, papilledema, seizures, immunocompromised state, cancer history, age >50 new onset, or progressive worsening. Non-contrast CT is first-line for acute emergencies; MRI with and without contrast is preferred for non-emergent evaluation.',
    ['Thunderclap headache', 'New headache with focal deficits', 'Progressive headache', 'Headache in immunocompromised patients', 'First seizure with headache'],
    ['CT: acute hemorrhage, hydrocephalus, large masses', 'MRI: tumors, infections, demyelination, Chiari malformation, venous sinus thrombosis', 'CTA/MRA: aneurysm, dissection'],
    ['Routine imaging for primary headaches is not recommended', 'CT may miss posterior fossa pathology', 'MRI may reveal incidental findings causing anxiety'],
    'CT: no preparation. MRI: standard safety screening and possible contrast.',
    ['CT: radiation', 'MRI: gadolinium risks in renal disease', 'Incidental findings may lead to unnecessary follow-up'],
    'Varies by study', 'moderate', 'low', false,
    'Keep a headache diary noting onset, duration, severity, and triggers. This information helps your doctor determine whether imaging is necessary.'),

  img('indication-abdominal-pain', 'When to Order Imaging for Abdominal Pain', 'Cuándo solicitar imagen por dolor abdominal',
    'clinical-indication', undefined,
    'Approach to imaging selection for acute and chronic abdominal pain based on clinical presentation.',
    'Right lower quadrant pain in young adults: CT abdomen/pelvis (appendicitis). Right upper quadrant: ultrasound first (gallstones). Flank pain: CT without contrast (kidney stones). Diffuse pain: CT with contrast. Ultrasound is first-line in pregnancy and pediatrics. Upright abdominal X-ray may show obstruction or free air.',
    ['Appendicitis', 'Cholecystitis', 'Kidney stones', 'Bowel obstruction', 'Diverticulitis', 'Pancreatitis'],
    ['CT: appendicitis, diverticulitis, obstruction, abscess, free air', 'Ultrasound: gallstones, cholecystitis, ovarian pathology', 'X-ray: obstruction pattern, free air under diaphragm'],
    ['Ultrasound limited by gas and body habitus', 'CT involves radiation', 'Normal imaging does not exclude mesenteric ischemia early', 'Oral contrast may delay diagnosis'],
    'CT: NPO 4 hours if contrast. Ultrasound: fasting for gallbladder study. X-ray: no preparation.',
    ['CT radiation', 'Contrast nephrotoxicity', 'Missed diagnosis if wrong study ordered'],
    'Varies by study', 'moderate', 'low', false,
    'Tell your doctor the exact location of your pain, when it started, and whether you have nausea, vomiting, fever, or changes in bowel habits.'),

  img('indication-joint-pain', 'When to Order Imaging for Joint Pain', 'Cuándo solicitar imagen por dolor articular',
    'clinical-indication', undefined,
    'Imaging strategy for evaluating acute and chronic joint pain including trauma and inflammatory conditions.',
    'X-ray is always first-line for joint pain: evaluates fractures, arthritis, alignment, and joint space. MRI is used for soft tissue evaluation (ligaments, menisci, labrum). Ultrasound can detect effusions, synovitis, and guide aspiration. CT is used for complex fractures. Dual-energy CT can detect gout tophi.',
    ['Trauma with suspected fracture', 'Chronic joint pain and stiffness', 'Sports injury with suspected ligament tear', 'Gout evaluation', 'Inflammatory arthritis'],
    ['X-ray: fractures, osteoarthritis, chondrocalcinosis, erosions', 'MRI: ligament tears, meniscal tears, labral tears, osteochondral defects', 'Ultrasound: effusion, synovitis, crystal deposition', 'CT: complex fracture mapping'],
    ['X-ray may miss stress fractures and early erosions', 'MRI is expensive and may show incidental findings', 'Ultrasound is operator dependent'],
    'X-ray: no preparation. MRI: safety screening. Ultrasound: no preparation. Inform staff of metal implants.',
    ['X-ray: minimal radiation', 'MRI: no radiation, noise', 'CT: moderate radiation'],
    'Varies by study', 'low', 'minimal', false,
    'Point to the exact location of your pain and describe any locking, catching, or instability. Bring prior imaging for comparison if available.'),

  img('indication-cancer-screening', 'Cancer Screening Imaging', 'Imagen para detección de cáncer',
    'clinical-indication', undefined,
    'Evidence-based imaging modalities used for cancer screening in average and high-risk populations.',
    'Mammography screens for breast cancer. Low-dose CT screens for lung cancer in high-risk smokers. Colonoscopy (or CT colonography) screens for colon cancer. Ultrasound and MRI supplement breast screening in high-risk women. PSA and MRI are used in prostate cancer screening. Cervical cancer screening is primarily cytology-based.',
    ['Breast cancer screening', 'Lung cancer screening', 'Colorectal cancer screening', 'Prostate cancer evaluation', 'High-risk surveillance programs'],
    ['Mammography: breast masses, calcifications', 'Low-dose CT: lung nodules', 'CT colonography: polyps, masses', 'Breast MRI: enhanced detection in dense breast tissue', 'Prostate MRI: PI-RADS lesion scoring'],
    ['Screening has false positive rates leading to anxiety and biopsies', 'Overdiagnosis of indolent cancers', 'Not all cancers are detectable by imaging', 'Cost-effectiveness varies by population'],
    'Mammography: avoid deodorant. Low-dose CT: no preparation. CT colonography: bowel prep required. Follow your doctor\'s screening schedule recommendations.',
    ['Mammography and CT: low radiation', 'False positives may cause psychological distress', 'Overdiagnosis may lead to unnecessary treatment'],
    'Varies by modality', 'moderate', 'minimal', false,
    'Ask your doctor which screenings are recommended for your age, sex, family history, and risk factors. Keep track of your screening schedule.'),

  img('indication-trauma', 'Trauma Imaging', 'Imagen en trauma',
    'clinical-indication', undefined,
    'Systematic imaging approach for trauma patients following ATLS protocols.',
    'Primary survey imaging: chest X-ray, pelvic X-ray, and FAST (Focused Assessment with Sonography for Trauma) ultrasound at the bedside. Secondary survey: CT of head, cervical spine, chest, abdomen, and pelvis (pan-scan) for significant mechanisms. Extremity X-rays for suspected fractures. CT angiography for vascular injury.',
    ['Motor vehicle accidents', 'Falls from height', 'Penetrating trauma', 'Blunt abdominal trauma', 'Head injury'],
    ['FAST: free fluid in abdomen, pericardial effusion', 'CT head: hemorrhage, fractures, brain injury', 'CT C-spine: fractures, ligament injury', 'CT chest/abdomen: solid organ injury, pneumothorax, vascular injury'],
    ['FAST may miss retroperitoneal and hollow viscus injuries', 'CT may miss bowel and mesenteric injury initially', 'Radiation dose from pan-scan is significant', 'Unstable patients may not tolerate CT'],
    'Trauma imaging is performed emergently without standard preparation. Staff will remove clothing and jewelry. IV access is established for contrast.',
    ['Significant radiation from full trauma CT', 'IV contrast risks', 'Time delay for CT in unstable patients'],
    '15-45 minutes for full workup', 'high', 'high', false,
    'In trauma situations, the medical team will guide all imaging decisions. Cooperate with instructions and communicate any allergies or pregnancy.'),

  // ============================================================
  // SAFETY (5)
  // ============================================================

  img('safety-radiation', 'Radiation Safety Basics', 'Principios de seguridad radiológica',
    'safety', undefined,
    'Fundamental principles of radiation protection and understanding of dose for patients and healthcare workers.',
    'Radiation dose is measured in millisieverts (mSv). Annual natural background exposure is about 3 mSv. The three pillars of radiation safety are time (minimize exposure duration), distance (inverse square law), and shielding (lead aprons, barriers). The ALARA principle (As Low As Reasonably Achievable) guides all radiation use.',
    ['Understanding imaging radiation doses', 'Patient radiation exposure counseling', 'Occupational radiation safety', 'Cumulative dose tracking'],
    ['Relative doses: chest X-ray ~0.02 mSv, CT abdomen ~10 mSv, PET/CT ~25 mSv', 'Effective dose comparisons to background radiation', 'Organ-specific dose considerations'],
    ['Radiation risk is difficult to quantify at low doses', 'Linear no-threshold model is debated', 'Individual risk assessment is imprecise', 'Patient anxiety about radiation may lead to avoidance of necessary imaging'],
    'No preparation needed. Understanding radiation doses helps you make informed decisions about imaging.',
    ['Stochastic effects (cancer risk) increase with cumulative dose', 'Deterministic effects occur at very high doses (not typical of diagnostic imaging)', 'Children are more radiosensitive than adults'],
    'N/A', 'low', 'low', false,
    'Ask how much radiation a study involves and whether a non-radiation alternative exists. A single CT scan is generally safe but tracking cumulative exposure is wise.'),

  img('safety-mri-metals', 'MRI Safety: Metals and Implants', 'Seguridad en RM: metales e implantes',
    'safety', 'mri',
    'Critical safety considerations regarding ferromagnetic objects and implanted devices in the MRI environment.',
    'The MRI magnet is always on (typically 1.5T or 3T). Ferromagnetic objects become projectiles near the scanner. Implanted devices may malfunction, heat, or move. All patients complete a screening questionnaire. Implants are classified as MR Safe, MR Conditional (safe under specific conditions), or MR Unsafe.',
    ['Pre-MRI screening', 'Patients with pacemakers or defibrillators', 'Patients with joint replacements or spinal hardware', 'Retained metallic foreign bodies', 'Tattoos and permanent makeup'],
    ['Implant MRI compatibility classification', 'Screening protocol requirements', 'Zone safety classification (Zones I-IV)'],
    ['Some MR Conditional devices require specific scanner settings', 'Incomplete implant records may prevent scanning', 'Screening questionnaires rely on patient knowledge', 'Emergency situations may delay MRI due to screening'],
    'Complete the MRI safety questionnaire honestly and thoroughly. Bring implant cards or surgical records. Remove all metal items including jewelry, dentures, hearing aids, and hairpins.',
    ['Projectile injury from ferromagnetic objects', 'Implant malfunction or displacement', 'Burns from wire loops or tattoos', 'Cochlear implant damage', 'Pacemaker lead heating'],
    'N/A', 'high', 'none', false,
    'Disclose every surgery, implant, and injury involving metal. Even old shrapnel or metal fragments in the eyes can be dangerous. When in doubt, tell the MRI technologist.'),

  img('safety-contrast-allergy', 'Contrast Dye Allergies', 'Alergias al medio de contraste',
    'safety', undefined,
    'Management and prevention of allergic-like reactions to iodinated and gadolinium-based contrast agents.',
    'Iodinated contrast (used in CT) and gadolinium (used in MRI) can cause allergic-like reactions ranging from mild (hives, itching) to severe (anaphylaxis). Risk factors include prior contrast reaction, asthma, and multiple allergies. Premedication with corticosteroids and antihistamines reduces recurrence. Breakthrough reactions can still occur.',
    ['Prior contrast reaction management', 'Premedication protocols', 'Alternative imaging without contrast', 'Emergency treatment of anaphylaxis'],
    ['Mild reactions: urticaria, pruritus, nausea', 'Moderate reactions: bronchospasm, facial edema', 'Severe reactions: anaphylaxis, cardiovascular collapse', 'Delayed reactions: skin rash 1-7 days later'],
    ['Premedication does not eliminate all risk', 'Seafood allergy is not a specific risk factor (myth)', 'Mild reactions may not predict future severity', 'Non-contrast alternatives may be less diagnostic'],
    'Inform your doctor and radiology staff of any prior contrast reactions, asthma, or severe allergies. Premedication (prednisone and diphenhydramine) is given 13, 7, and 1 hour before the study if indicated.',
    ['Mild allergic reactions (1-3% of patients)', 'Severe anaphylaxis (rare, ~0.01-0.04%)', 'Contrast-induced nephropathy with iodinated contrast', 'Nephrogenic systemic fibrosis with gadolinium in severe renal failure'],
    'N/A', 'moderate', 'none', true,
    'Always report previous contrast reactions to your medical team before any imaging. Carry a card or note listing your allergy. Premedication greatly reduces but does not eliminate risk.'),

  img('safety-pregnancy', 'Imaging in Pregnancy', 'Imagen durante el embarazo',
    'safety', undefined,
    'Safety guidelines for diagnostic imaging during pregnancy, balancing maternal benefit against fetal risk.',
    'Ultrasound is the safest modality and is first-line. MRI without gadolinium is considered safe in the second and third trimesters. Ionizing radiation (X-ray, CT) should be minimized but is not absolutely contraindicated when clinically necessary. Fetal dose below 50 mGy carries negligible risk. Gadolinium crosses the placenta and is generally avoided.',
    ['Trauma in pregnancy', 'Appendicitis in pregnancy', 'Suspected pulmonary embolism in pregnancy', 'Abdominal pain in pregnancy'],
    ['Ultrasound: pelvic and abdominal pathology safely', 'MRI: soft tissue evaluation without radiation', 'Shielded X-ray: fracture evaluation', 'Low-dose CT: pulmonary embolism when necessary'],
    ['MRI is noisy and uncomfortable in late pregnancy', 'Gadolinium should be avoided', 'Iodinated contrast crosses placenta (use only if essential)', 'Delayed imaging due to safety concerns may harm the mother'],
    'Inform all medical staff of pregnancy or possible pregnancy. Always confirm pregnancy status before imaging. Ultrasound and MRI are preferred over CT.',
    ['Ionizing radiation: theoretical risk of childhood cancer at high doses', 'Gadolinium: associated with fetal abnormalities in animal studies', 'Iodinated contrast: neonatal thyroid suppression risk', 'No confirmed harm from diagnostic ultrasound or MRI'],
    'N/A', 'moderate', 'none', false,
    'Always tell your healthcare team if you are or might be pregnant. Necessary imaging should not be withheld if it is critical to your health.'),

  img('safety-pediatric', 'Pediatric Imaging Considerations', 'Consideraciones de imagen pediátrica',
    'safety', undefined,
    'Special considerations for diagnostic imaging in children, emphasizing radiation dose reduction and child-friendly approaches.',
    'Children are more sensitive to radiation due to rapidly dividing cells and longer remaining lifespan. The Image Gently campaign promotes reducing radiation doses. Ultrasound and MRI are preferred when feasible. CT protocols are adjusted for child size (weight-based). Sedation may be needed for MRI in young children. Communication and child life specialists ease anxiety.',
    ['Pediatric dose optimization', 'Sedation for MRI', 'Choosing the right modality', 'Reducing repeat imaging', 'Family-centered care during imaging'],
    ['Weight-based CT dose protocols', 'Age-appropriate imaging algorithms', 'Sedation safety protocols', 'Alternative modalities to avoid radiation'],
    ['Sedation carries its own risks', 'Children may not cooperate for long MRI scans', 'Smaller anatomy requires higher resolution and adapted protocols', 'Limited pediatric-specific imaging guidelines for some conditions'],
    'Parents should bring comfort items (stuffed animal, blanket). Explain the procedure in age-appropriate terms. Fasting may be required for sedation (typically 2-6 hours based on age).',
    ['Children are more radiosensitive than adults', 'Sedation risks: respiratory depression, aspiration', 'IV contrast reactions similar to adults', 'Repeated imaging increases cumulative dose'],
    'Varies by study and need for sedation', 'moderate', 'low', false,
    'Prepare your child by explaining the test simply: "a special camera will take pictures of the inside of your body." Many facilities have child life specialists to help.'),

];

// Populate the record
for (const entry of entries) {
  IMAGING_ENTRIES[entry.id] = entry;
}
