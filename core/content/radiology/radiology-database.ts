/**
 * Radiology Interpretation Database
 *
 * Comprehensive database of radiology interpretation entries covering
 * CXR, abdominal films, CT, MRI, ultrasound, contrast studies,
 * radiation safety, interventional basics, and MSK imaging.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RadiologyCategory =
  | 'chest-xray'
  | 'abdominal-xray'
  | 'ct-interpretation'
  | 'mri-interpretation'
  | 'ultrasound'
  | 'contrast-studies'
  | 'radiation-safety'
  | 'interventional'
  | 'musculoskeletal-imaging';

export interface RadiologyEntry {
  id: string;
  name: string;
  category: RadiologyCategory;
  description: string;
  technique: string;
  normalAppearance: string;
  abnormalFindings: string[];
  differentialDiagnosis: string[];
  clinicalCorrelation: string;
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const radiologyDatabase: RadiologyEntry[] = [
  // =========================================================================
  // CHEST X-RAY
  // =========================================================================
  {
    id: 'cxr-systematic-approach',
    name: 'CXR Systematic Approach',
    category: 'chest-xray',
    description:
      'Structured method for interpreting chest radiographs to avoid missed findings.',
    technique:
      'PA and lateral views preferred. AP portable acceptable in acute settings. Adequate inspiration = 8-10 posterior ribs visible. Check rotation by comparing clavicular head distance to spinous processes.',
    normalAppearance:
      'Clear lung fields bilaterally. Normal cardiac silhouette (CTR <0.5 on PA). Sharp costophrenic angles. Normal mediastinal contour. Intact bony structures. Trachea midline.',
    abnormalFindings: [
      'Opacities (consolidation, mass, atelectasis)',
      'Increased lucency (pneumothorax, emphysema)',
      'Pleural abnormalities (effusion, thickening)',
      'Mediastinal widening or shift',
      'Cardiac enlargement',
      'Abnormal lines and tubes',
    ],
    differentialDiagnosis: [
      'Use ABCDE mnemonic: Airway, Bones, Cardiac, Diaphragm, Everything else',
      'Opacity differential depends on location, shape, and air bronchograms',
    ],
    clinicalCorrelation:
      'The CXR remains the most frequently ordered radiologic study. A systematic approach reduces missed findings from 30% to under 5%. Always compare with prior films when available.',
    keyPearls: [
      'ABCDE approach: Airway, Bones, Cardiac, Diaphragm, Everything else (lungs, soft tissue)',
      'Always check review areas: apices, costophrenic angles, retrocardiac space, below diaphragm',
      'Lateral view adds ~15% diagnostic yield over PA alone',
      'AP films magnify cardiac silhouette - do not use CTR for cardiomegaly assessment',
    ],
    references: [
      'Felson B. Chest Roentgenology. WB Saunders.',
      'ACR Appropriateness Criteria - Chest Imaging.',
    ],
  },
  {
    id: 'cxr-pneumonia',
    name: 'CXR: Pneumonia',
    category: 'chest-xray',
    description:
      'Radiographic findings in pulmonary infections including lobar, bronchopneumonia, and interstitial patterns.',
    technique:
      'PA and lateral views. Upright positioning preferred. AP portable if patient cannot stand.',
    normalAppearance:
      'Clear lung parenchyma without consolidation. Normal bronchovascular markings.',
    abnormalFindings: [
      'Lobar consolidation with air bronchograms',
      'Patchy airspace opacities (bronchopneumonia)',
      'Interstitial reticular or reticulonodular pattern (atypical/viral)',
      'Pleural effusion (parapneumonic)',
      'Cavitation (abscess, TB, Klebsiella)',
      'Hilar lymphadenopathy',
    ],
    differentialDiagnosis: [
      'Pulmonary edema',
      'Pulmonary hemorrhage',
      'Atelectasis',
      'Lung cancer (post-obstructive pneumonia)',
      'Organizing pneumonia (COP)',
      'Eosinophilic pneumonia',
    ],
    clinicalCorrelation:
      'CXR sensitivity for pneumonia is ~75%. Early or mild infections may be radiographically occult. CT is more sensitive. Round pneumonia is more common in children and may mimic a mass.',
    keyPearls: [
      'Air bronchograms indicate airspace (alveolar) disease',
      'Silhouette sign localizes pathology: loss of right heart border = RML; loss of left heart border = lingula',
      'Round pneumonia in children mimics a mass - follow-up after antibiotics',
      'Cavitation with air-fluid level suggests abscess',
      'Immunocompromised patients may have atypical presentations',
    ],
    references: [
      'Franquet T. Imaging of Pulmonary Infection. Radiology. 2018.',
      'IDSA/ATS Guidelines for Community-Acquired Pneumonia.',
    ],
  },
  {
    id: 'cxr-pneumothorax',
    name: 'CXR: Pneumothorax',
    category: 'chest-xray',
    description:
      'Identification of air in the pleural space on chest radiography.',
    technique:
      'Upright PA preferred. Expiratory films may improve detection of small PTX. Supine AP in trauma (look for deep sulcus sign).',
    normalAppearance:
      'Lung markings extend to periphery. No visible visceral pleural line.',
    abnormalFindings: [
      'Visible visceral pleural line with absent lung markings peripherally',
      'Deep sulcus sign on supine films',
      'Mediastinal shift away from affected side (tension PTX)',
      'Flattened ipsilateral hemidiaphragm (tension)',
      'Subcutaneous emphysema',
    ],
    differentialDiagnosis: [
      'Skin fold artifact (lines extend beyond chest wall)',
      'Large bulla (curvilinear margin but convex toward mediastinum)',
      'Pneumomediastinum',
      'Artifact from clothing or tubing',
    ],
    clinicalCorrelation:
      'Tension pneumothorax is a clinical diagnosis requiring immediate needle decompression before imaging. On supine film, pneumothorax collects anteriorly and may only manifest as deep sulcus sign or increased lucency at the base.',
    keyPearls: [
      'Skin folds vs. PTX: skin fold lines extend beyond lung margin and lack sharp visceral pleural line',
      'Deep sulcus sign: abnormally deep costophrenic angle on supine film = anterior pneumothorax',
      'Tension PTX: mediastinal shift, flattened diaphragm, hemodynamic compromise',
      'CT is far more sensitive than CXR for small pneumothorax',
      'Expiratory films rarely add diagnostic value over standard inspiratory PA',
    ],
    references: [
      'MacDuff A et al. BTS Pleural Disease Guideline. Thorax. 2010.',
      'ACR Appropriateness Criteria - Pneumothorax.',
    ],
  },
  {
    id: 'cxr-pleural-effusion',
    name: 'CXR: Pleural Effusion',
    category: 'chest-xray',
    description:
      'Detection and characterization of fluid in the pleural space on chest radiography.',
    technique:
      'Upright PA and lateral views. Lateral decubitus films confirm free-flowing fluid (layers dependently). At least 200 mL needed for blunting on PA upright; 50 mL on lateral.',
    normalAppearance:
      'Sharp costophrenic angles bilaterally. Clear lateral costophrenic angles on lateral view.',
    abnormalFindings: [
      'Blunting of costophrenic angle (meniscus sign)',
      'Opacification of hemithorax in large effusions',
      'Fluid tracking up lateral chest wall',
      'Subpulmonic effusion (elevated hemidiaphragm appearance)',
      'Loculated fluid (D-shaped or lenticular opacity)',
      'Lamellar effusion (thin fluid layer along chest wall)',
    ],
    differentialDiagnosis: [
      'Pleural thickening (does not shift on decubitus)',
      'Atelectasis (volume loss, shift toward opacity)',
      'Consolidation (air bronchograms present)',
      'Elevated hemidiaphragm',
      'Subpulmonic effusion mimicking elevated diaphragm',
    ],
    clinicalCorrelation:
      'Transudative vs. exudative effusion cannot be distinguished radiographically - thoracentesis with Light criteria is needed. Massive unilateral effusion with contralateral mediastinal shift raises concern for malignancy.',
    keyPearls: [
      'Lateral view detects effusions as small as 50 mL (posterior costophrenic angle)',
      'PA upright requires ~200 mL to blunt costophrenic angle',
      'Subpulmonic effusion: suspect when hemidiaphragm peak is lateral to expected position',
      'Loculated effusion does not layer on decubitus - consider empyema or hemothorax',
      'White-out hemithorax: effusion shifts mediastinum away; atelectasis shifts toward',
    ],
    references: [
      'Light RW. Pleural Diseases. Lippincott Williams & Wilkins.',
      'ACR Appropriateness Criteria - Pleural Effusion.',
    ],
  },
  {
    id: 'cxr-cardiomegaly',
    name: 'CXR: Cardiomegaly',
    category: 'chest-xray',
    description:
      'Assessment of cardiac size and chamber enlargement on chest radiography.',
    technique:
      'PA view at 72-inch SID required for accurate cardiothoracic ratio. AP films magnify the heart and overestimate size.',
    normalAppearance:
      'Cardiothoracic ratio (CTR) <0.5 on PA view. Normal cardiac borders and contour. No redistribution of pulmonary vasculature.',
    abnormalFindings: [
      'CTR >0.5 on PA (cardiomegaly)',
      'Enlarged left atrial appendage (straightening of left heart border)',
      'Double density sign (enlarged LA seen through heart)',
      'Boot-shaped heart (RV enlargement)',
      'Pericardial effusion (water-bottle silhouette)',
      'Pulmonary venous congestion (cephalization)',
      'Kerley B lines (interstitial edema)',
    ],
    differentialDiagnosis: [
      'Pericardial effusion vs. true chamber enlargement (echo needed)',
      'AP projection artifact',
      'Poor inspiratory effort',
      'High cardiac output states (anemia, thyrotoxicosis)',
      'Dilated cardiomyopathy',
      'Valvular heart disease',
    ],
    clinicalCorrelation:
      'CXR is often the first study suggesting heart failure or cardiomyopathy. Echocardiography is needed for chamber-specific analysis. Cephalization of pulmonary vessels indicates elevated PCWP (>12 mmHg).',
    keyPearls: [
      'CTR >0.5 on PA = cardiomegaly (do not assess on AP)',
      'Cephalization (upper lobe vessel distension) = PCWP 12-18 mmHg',
      'Kerley B lines = interstitial edema, PCWP >18 mmHg',
      'Bilateral pleural effusions = PCWP >25 mmHg (CHF until proven otherwise)',
      'Water-bottle heart = pericardial effusion until echo proves otherwise',
    ],
    references: [
      'Defined by Danzer CS, Am J Med Sci. 1919.',
      'ACC/AHA Heart Failure Guidelines.',
    ],
  },
  {
    id: 'cxr-aortic-dissection',
    name: 'CXR: Aortic Dissection',
    category: 'chest-xray',
    description:
      'Chest radiograph findings suggestive of acute aortic dissection.',
    technique:
      'PA and lateral views. CXR has limited sensitivity (~60-90%) and is a screening tool only. CTA is definitive.',
    normalAppearance:
      'Normal aortic knob. Mediastinal width <8 cm on PA. Normal descending aortic contour.',
    abnormalFindings: [
      'Widened mediastinum (>8 cm at aortic knob on PA)',
      'Abnormal aortic contour or double density',
      'Left apical cap (hematoma tracking over apex)',
      'Deviation of trachea or nasogastric tube to right',
      'Depression of left mainstem bronchus',
      'Left pleural effusion (hemothorax)',
      'Calcium sign (intimal calcification displaced >10 mm from outer aortic wall)',
    ],
    differentialDiagnosis: [
      'Aortic aneurysm without dissection',
      'Mediastinal mass or lymphadenopathy',
      'Tortuous aorta (elderly)',
      'AP projection causing apparent widening',
      'Mediastinal hematoma from other causes',
    ],
    clinicalCorrelation:
      'A normal CXR does not exclude dissection. If clinical suspicion is high (acute tearing chest pain radiating to back, blood pressure differential), proceed directly to CTA. Type A (ascending) requires emergent surgery; Type B (descending) is typically managed medically.',
    keyPearls: [
      'Widened mediastinum is most common CXR finding but sensitivity is only ~60-90%',
      'Normal CXR does NOT rule out dissection - CTA is definitive',
      'Left apical cap = blood tracking over lung apex',
      'Calcium sign: intimal calcification displaced from outer wall suggests false lumen',
      'Type A = ascending (surgical emergency); Type B = descending (medical management)',
    ],
    references: [
      'Defined by DeBakey ME and Stanford classification.',
      'AHA/ACC Guideline on Aortic Disease. 2022.',
    ],
  },

  // =========================================================================
  // ABDOMINAL X-RAY
  // =========================================================================
  {
    id: 'abd-bowel-obstruction',
    name: 'Abdominal Film: Bowel Obstruction',
    category: 'abdominal-xray',
    description:
      'Radiographic evaluation of small and large bowel obstruction on abdominal plain films.',
    technique:
      'Supine and upright abdominal films. Left lateral decubitus if patient cannot stand (to detect free air). Three-view acute abdomen series: supine abdomen, upright abdomen, upright chest.',
    normalAppearance:
      'Small bowel <3 cm, large bowel <6 cm, cecum <9 cm in diameter. Normal gas pattern with small amount of gas in stomach and colon. No dilated loops.',
    abnormalFindings: [
      'Dilated small bowel loops (>3 cm) with air-fluid levels',
      'Differential air-fluid levels in same loop (upright)',
      'String-of-pearls sign (small trapped air bubbles)',
      'Transition point with decompressed distal bowel',
      'Dilated colon (>6 cm, cecum >9 cm)',
      'Coffee bean sign (sigmoid volvulus)',
      'Absence of rectal gas in complete obstruction',
    ],
    differentialDiagnosis: [
      'Ileus (generalized dilation without transition point)',
      'Pseudo-obstruction (Ogilvie syndrome)',
      'Sentinel loop (localized ileus near inflammation)',
      'SBO: adhesions (most common), hernia, neoplasm, Crohn disease',
      'LBO: colorectal cancer, volvulus, diverticulitis',
    ],
    clinicalCorrelation:
      'Plain films have ~60% sensitivity for SBO. CT is superior for detecting transition point, etiology, and complications (strangulation, closed-loop). Rule of 3-6-9: SB >3 cm, LB >6 cm, cecum >9 cm. Cecal diameter >12 cm = impending perforation risk.',
    keyPearls: [
      'Rule of 3-6-9: SB >3 cm, LB >6 cm, cecum >9 cm = abnormal',
      'SBO: dilated proximal loops, decompressed distal bowel, air-fluid levels',
      'Valvulae conniventes (small bowel) cross entire lumen; haustra (colon) are incomplete',
      'Coffee bean sign = sigmoid volvulus; cecal volvulus shows kidney-shaped gas in LUQ',
      'CT is gold standard for detecting transition point and strangulation',
    ],
    references: [
      'Thompson WM et al. AJR. Imaging of bowel obstruction.',
      'ACR Appropriateness Criteria - Suspected SBO.',
    ],
  },
  {
    id: 'abd-free-air',
    name: 'Abdominal Film: Pneumoperitoneum',
    category: 'abdominal-xray',
    description:
      'Detection of free intraperitoneal air on plain radiographs indicating bowel perforation.',
    technique:
      'Upright CXR is most sensitive plain film for detecting free air (as little as 1-2 mL under diaphragm). Left lateral decubitus shows air over liver. Supine films are least sensitive.',
    normalAppearance:
      'No air visible beneath the diaphragm on upright films. Normal bowel gas pattern. No Rigler sign.',
    abnormalFindings: [
      'Free air under diaphragm on upright CXR',
      'Rigler sign (double-wall sign: air on both sides of bowel wall on supine)',
      'Football sign (large oval lucency in supine, especially neonates)',
      'Falciform ligament sign (outlined by free air)',
      'Triangular air collections between bowel loops',
      'Air outlining liver edge on left lateral decubitus',
    ],
    differentialDiagnosis: [
      'Chilaiditi sign (interposed colon between liver and diaphragm)',
      'Subdiaphragmatic fat pad',
      'Curvilinear atelectasis',
      'Post-surgical (normal up to 7 days post-laparotomy)',
      'Post-endoscopy or peritoneal dialysis',
    ],
    clinicalCorrelation:
      'Free air in a non-post-surgical patient requires urgent surgical consultation for presumed bowel perforation. CT is far more sensitive than plain film and can detect tiny amounts of free air. Causes include perforated peptic ulcer, diverticulitis, trauma, and iatrogenic.',
    keyPearls: [
      'Upright CXR is more sensitive than upright abdominal film for free air',
      'Patient should be upright for 10 minutes before film to allow air to rise',
      'Rigler sign (double-wall): both sides of bowel wall visible = large pneumoperitoneum',
      'Football sign: large midline lucency on supine film (especially neonates)',
      'Post-op free air can persist up to 7 days; persistent or increasing air is concerning',
    ],
    references: [
      'Defined by Rigler LG. AJR. 1941.',
      'Defined by Miller RE, Nelson SW. AJR. 1971.',
    ],
  },
  {
    id: 'abd-calcifications',
    name: 'Abdominal Film: Calcifications',
    category: 'abdominal-xray',
    description:
      'Recognition and significance of calcifications on abdominal plain films.',
    technique:
      'Supine abdominal film (KUB). Identify location, morphology, and distribution of calcifications.',
    normalAppearance:
      'Phleboliths (round with radiolucent center) in pelvis are common and benign. Costal cartilage calcification. Vascular calcifications in elderly.',
    abnormalFindings: [
      'Renal calculi (90% radiopaque - calcium oxalate, calcium phosphate)',
      'Gallstones (only 10-15% radiopaque)',
      'Pancreatic calcifications (chronic pancreatitis)',
      'Appendicolith (RLQ calcified fecalith)',
      'Aortic aneurysm (curvilinear wall calcification)',
      'Uterine fibroid calcification',
      'Adrenal calcification',
      'Lymph node calcification (granulomatous disease)',
    ],
    differentialDiagnosis: [
      'Phleboliths vs. ureteral stones (phleboliths are round with lucent center)',
      'Vascular calcification vs. organ calcification (follows vessel course)',
      'Mesenteric lymph node calcification (TB, histoplasmosis)',
      'Costal cartilage calcification (normal variant)',
    ],
    clinicalCorrelation:
      'KUB sensitivity for renal stones is ~60%; CT without contrast (stone protocol) is >95% sensitive. Pancreatic calcifications are pathognomonic for chronic pancreatitis. An appendicolith with RLQ pain is highly suggestive of appendicitis.',
    keyPearls: [
      '90% of renal stones are radiopaque; only 10-15% of gallstones are',
      'Phleboliths have a central lucency; ureteral stones do not',
      'Pancreatic calcifications = chronic pancreatitis (often alcoholic)',
      'Appendicolith + RLQ pain = appendicitis until proven otherwise',
      'Porcelain gallbladder (rim calcification) has malignancy risk - cholecystectomy recommended',
    ],
    references: [
      'Defined by Dyer RB et al. RadioGraphics. Abdominal Calcifications.',
      'ACR Appropriateness Criteria - Acute Flank Pain.',
    ],
  },

  // =========================================================================
  // CT INTERPRETATION
  // =========================================================================
  {
    id: 'ct-head-stroke',
    name: 'CT Head: Acute Stroke',
    category: 'ct-interpretation',
    description:
      'Non-contrast head CT interpretation for acute ischemic and hemorrhagic stroke.',
    technique:
      'Non-contrast CT head is the initial study for acute stroke. CT angiography (CTA) and CT perfusion (CTP) performed in the same session for large vessel occlusion evaluation.',
    normalAppearance:
      'Normal gray-white matter differentiation. No hyperdense vessel sign. No hypodensity or sulcal effacement. Normal ventricles and midline.',
    abnormalFindings: [
      'Early ischemic changes: loss of gray-white differentiation, sulcal effacement',
      'Hyperdense vessel sign (thrombus in MCA = dense MCA sign)',
      'Insular ribbon sign (loss of insular cortex definition)',
      'Obscured lentiform nucleus',
      'ASPECTS score <6 suggests large core infarct',
      'Hyperdense parenchyma = acute hemorrhage (ICH)',
      'Subarachnoid hemorrhage: hyperdense blood in sulci/cisterns',
    ],
    differentialDiagnosis: [
      'Ischemic stroke vs. hemorrhagic stroke',
      'Subdural vs. epidural hematoma',
      'Tumor with hemorrhage',
      'Venous sinus thrombosis',
      'Hypoglycemia (can mimic stroke clinically)',
      'Todd paralysis (postictal)',
    ],
    clinicalCorrelation:
      'NCCT is obtained to exclude hemorrhage before thrombolysis. Early ischemic changes may be subtle in the first 6 hours. CT perfusion defines core (irreversible) vs. penumbra (salvageable) tissue. ASPECTS score guides treatment decisions for mechanical thrombectomy.',
    keyPearls: [
      'Primary role of initial NCCT is to EXCLUDE hemorrhage before tPA',
      'NCCT may be normal in first 6-12 hours of ischemic stroke',
      'Dense MCA sign = clot in MCA; 30% sensitivity but highly specific',
      'ASPECTS: 10-point score; <6 = large infarct, poor candidate for intervention',
      'CT perfusion mismatch (core vs. penumbra) extends treatment window to 24 hours',
    ],
    references: [
      'AHA/ASA Acute Ischemic Stroke Guidelines. 2019.',
      'Defined by Barber PA et al. ASPECTS. Lancet. 2000.',
    ],
  },
  {
    id: 'ct-head-hemorrhage',
    name: 'CT Head: Intracranial Hemorrhage',
    category: 'ct-interpretation',
    description:
      'Non-contrast head CT for detection and characterization of intracranial hemorrhage.',
    technique:
      'Non-contrast CT head. Acute blood appears hyperdense (50-70 HU). CTA may follow to identify source (aneurysm, AVM).',
    normalAppearance:
      'No hyperdense collections. Normal sulci and cisterns. Normal ventricles without blood layering.',
    abnormalFindings: [
      'Epidural hematoma: biconvex/lenticular, does not cross sutures',
      'Subdural hematoma: crescent-shaped, crosses sutures',
      'Subarachnoid hemorrhage: hyperdense blood in sulci and cisterns',
      'Intraparenchymal hemorrhage: hyperdense mass within brain',
      'Intraventricular hemorrhage: blood layering in ventricles',
      'Midline shift, herniation, hydrocephalus',
    ],
    differentialDiagnosis: [
      'Epidural: middle meningeal artery (temporal bone fracture)',
      'Subdural: bridging vein tear (trauma, anticoagulation, elderly)',
      'SAH: ruptured aneurysm (85%), AVM, trauma',
      'IPH: hypertension (basal ganglia, thalamus, pons, cerebellum), amyloid angiopathy (lobar)',
      'Hemorrhagic transformation of ischemic stroke',
    ],
    clinicalCorrelation:
      'Acute blood is hyperdense on CT. Subacute blood (1-3 weeks) becomes isodense, then hypodense (chronic). Epidural hematoma = "talk and die" lucid interval. SAH with negative CT requires lumbar puncture (sensitivity of CT drops after 6 hours).',
    keyPearls: [
      'Blood density on CT evolves: acute (bright) -> subacute (iso) -> chronic (dark)',
      'Epidural: lenticular, does not cross sutures, often temporal (MMA)',
      'Subdural: crescent, crosses sutures, follows brain surface',
      'SAH: blood in cisterns/sulci - check suprasellar, Sylvian, interhemispheric cisterns',
      'CT sensitivity for SAH: ~98% in first 6 hours, drops to ~50% at 1 week',
    ],
    references: [
      'Defined by Connolly ES et al. AHA/ASA SAH Guidelines. Stroke. 2012.',
      'Defined by Hemphill JC et al. ICH Score. Stroke. 2001.',
    ],
  },
  {
    id: 'ct-pe-protocol',
    name: 'CT Pulmonary Angiography (CTPA)',
    category: 'ct-interpretation',
    description:
      'CT pulmonary angiography for diagnosis of pulmonary embolism.',
    technique:
      'IV contrast with bolus tracking at pulmonary artery. Thin slices (0.625-1.25 mm). ECG gating optional. Patient coached to hold breath. Scan craniocaudal direction.',
    normalAppearance:
      'Homogeneous opacification of pulmonary arteries. No intraluminal filling defects. Normal RV/LV ratio (<1:1). No pleural effusion.',
    abnormalFindings: [
      'Intraluminal filling defect (acute PE = central/occlusive)',
      'Saddle embolus (straddles bifurcation)',
      'RV enlargement (RV/LV >1:1 = RV strain)',
      'Septal bowing toward LV',
      'Reflux of contrast into IVC/hepatic veins',
      'Peripheral wedge-shaped infarct (Hampton hump)',
      'Mosaic attenuation (chronic PE)',
      'Eccentric mural thrombus (chronic PE)',
    ],
    differentialDiagnosis: [
      'Flow artifact vs. true filling defect',
      'Mucus plugging (pulmonary arteries vs. bronchi)',
      'Pulmonary artery sarcoma (rare)',
      'In situ thrombosis (vasculitis)',
      'Lymph node compression',
    ],
    clinicalCorrelation:
      'CTPA sensitivity >95% and specificity >97% for PE. RV strain on CTPA predicts adverse outcomes even if hemodynamically stable (submassive PE). Wells score or PERC rule should guide ordering. D-dimer used to exclude PE in low-probability patients.',
    keyPearls: [
      'Acute PE: central filling defect with surrounding contrast (polo mint sign on axial)',
      'Chronic PE: eccentric mural thrombus, calcification, web/band, mosaic attenuation',
      'RV/LV ratio >1 on CT = RV strain, consider thrombolysis in massive PE',
      'Saddle PE does not automatically mean massive - assess hemodynamics',
      'Poor bolus opacification can create false-positive filling defects - check for adequate contrast',
    ],
    references: [
      'PIOPED II Study. NEJM. 2006.',
      'ESC Guidelines for PE Management. 2019.',
    ],
  },
  {
    id: 'ct-abdomen-appendicitis',
    name: 'CT Abdomen: Appendicitis',
    category: 'ct-interpretation',
    description:
      'CT findings in acute appendicitis, the most common surgical emergency.',
    technique:
      'CT abdomen/pelvis with IV contrast is standard. Oral contrast no longer routinely required. Thin slices (3-5 mm) through pelvis.',
    normalAppearance:
      'Normal appendix <6 mm diameter, thin-walled, no periappendiceal fat stranding.',
    abnormalFindings: [
      'Dilated appendix >6 mm with wall enhancement',
      'Appendicolith (25-30% of cases)',
      'Periappendiceal fat stranding',
      'Periappendiceal fluid or abscess',
      'Appendiceal wall thickening and enhancement',
      'Focal cecal wall thickening (cecal bar sign)',
      'Arrowhead sign (contrast/air funneling toward appendix)',
    ],
    differentialDiagnosis: [
      'Mesenteric lymphadenitis',
      'Right-sided diverticulitis',
      'Crohn disease (terminal ileitis)',
      'Tubo-ovarian abscess / PID',
      'Epiploic appendagitis',
      'Omental infarction',
      'Meckel diverticulitis',
    ],
    clinicalCorrelation:
      'CT sensitivity is 94-98% for appendicitis. Perforation is suggested by extraluminal air, abscess, or phlegmon. In children and pregnant patients, ultrasound is first-line (graded compression technique). MRI is an alternative in pregnancy.',
    keyPearls: [
      'Appendix >6 mm with periappendiceal fat stranding is highly suggestive',
      'Appendicolith present in 25-30% of cases; highly specific when present with symptoms',
      'Perforation: look for extraluminal air, abscess, loss of appendiceal wall integrity',
      'Ultrasound first in children and pregnancy; MRI as alternative',
      'Normal appendix on CT effectively rules out appendicitis (NPV ~98%)',
    ],
    references: [
      'Defined by Rao PM et al. NEJM. 1998.',
      'ACR Appropriateness Criteria - RLQ Pain.',
    ],
  },
  {
    id: 'ct-abdomen-pelvis',
    name: 'CT Abdomen/Pelvis: Systematic Interpretation',
    category: 'ct-interpretation',
    description:
      'Structured approach to interpreting contrast-enhanced CT of the abdomen and pelvis.',
    technique:
      'IV contrast with portal venous phase timing (~70 seconds). Oral contrast optional depending on indication. Arterial phase added for liver, pancreas, vascular, or active bleeding protocols.',
    normalAppearance:
      'Homogeneous organ enhancement. Normal bowel caliber and wall thickness. No free fluid or lymphadenopathy. Normal vascular caliber.',
    abnormalFindings: [
      'Organ lesions (hepatic, renal, adrenal, splenic, pancreatic)',
      'Bowel wall thickening or dilation',
      'Free fluid in peritoneal recesses',
      'Lymphadenopathy (>1 cm short axis)',
      'Vascular abnormalities (aneurysm, dissection, occlusion)',
      'Musculoskeletal findings (fractures, metastases)',
      'Retroperitoneal pathology',
    ],
    differentialDiagnosis: [
      'Free fluid: ascites, hemorrhage, bile leak, bowel perforation',
      'Liver lesions: cyst, hemangioma, metastasis, HCC, FNH, adenoma',
      'Renal lesions: cyst (Bosniak classification), RCC, AML',
      'Lymphadenopathy: reactive, lymphoma, metastatic, infectious',
    ],
    clinicalCorrelation:
      'CT abdomen/pelvis is the workhorse study for acute abdomen, trauma, and oncology staging. Always review in multiple windows (soft tissue, lung, bone). Check all organs systematically and review the scout image. Incidental findings are common and require appropriate follow-up.',
    keyPearls: [
      'Systematic review: liver, gallbladder, spleen, pancreas, adrenals, kidneys, bowel, vessels, nodes, bones',
      'Always check lung bases, adrenals, and bones for incidental findings',
      'Portal venous phase (70s) is best for most abdominal pathology',
      'Arterial phase (25-30s) needed for hypervascular lesions, aorta, and active bleeding',
      'ACR Incidental Findings Committee white papers guide management of incidentalomas',
    ],
    references: [
      'ACR Incidental Findings Committee Recommendations.',
      'ACR Appropriateness Criteria - Acute Abdominal Pain.',
    ],
  },

  // =========================================================================
  // MRI INTERPRETATION
  // =========================================================================
  {
    id: 'mri-brain',
    name: 'MRI Brain: Interpretation Approach',
    category: 'mri-interpretation',
    description:
      'Systematic approach to brain MRI interpretation including key sequences and common pathology.',
    technique:
      'Standard brain MRI: T1, T2, FLAIR, DWI/ADC, T1 post-contrast (if indicated). SWI/GRE for hemorrhage. MRA if vascular pathology suspected.',
    normalAppearance:
      'Normal gray-white matter differentiation on all sequences. No restricted diffusion. No abnormal enhancement. Normal ventricular size and sulcal pattern for age.',
    abnormalFindings: [
      'Restricted diffusion (bright DWI, dark ADC) = acute infarct, abscess core, tumor',
      'FLAIR hyperintensity = edema, gliosis, demyelination, tumor',
      'Abnormal enhancement = BBB breakdown (tumor, infection, inflammation)',
      'Mass effect, midline shift, herniation',
      'Blooming on GRE/SWI = hemorrhage, calcification',
      'T1 bright signal = fat, blood products (methemoglobin), melanin, protein',
    ],
    differentialDiagnosis: [
      'White matter lesions: MS, small vessel disease, vasculitis, ADEM',
      'Ring-enhancing lesion: abscess, high-grade glioma, metastasis, lymphoma, toxoplasmosis',
      'Restricted diffusion: acute stroke, abscess, epidermoid, highly cellular tumor',
      'T1 hyperintense: subacute blood, fat, melanoma metastasis',
    ],
    clinicalCorrelation:
      'DWI is the most sensitive sequence for acute stroke (within minutes). FLAIR is most sensitive for white matter pathology and subarachnoid disease. Post-contrast imaging essential for tumor and infection evaluation. Always compare with prior studies.',
    keyPearls: [
      'DWI bright + ADC dark = true restricted diffusion (stroke, abscess, hypercellular tumor)',
      'DWI bright + ADC bright = T2 shine-through (not true restriction)',
      'Ring-enhancing lesion DDx: abscess (DWI bright center), tumor (DWI variable)',
      'MS plaques: periventricular, juxtacortical, infratentorial, spinal cord (Dawson fingers)',
      'FLAIR is better than T2 for periventricular and cortical lesions (CSF suppression)',
    ],
    references: [
      'Defined by Osborn AG. Diagnostic Imaging: Brain. Elsevier.',
      'McDonald Criteria for MS Diagnosis. 2017 revision.',
    ],
  },
  {
    id: 'mri-spine',
    name: 'MRI Spine: Interpretation',
    category: 'mri-interpretation',
    description:
      'Approach to MRI of the cervical, thoracic, and lumbar spine for common pathology.',
    technique:
      'Sagittal T1, T2, STIR. Axial T2 through levels of interest. Post-contrast if infection, tumor, or post-surgical evaluation. Whole spine screening for metastases.',
    normalAppearance:
      'Normal vertebral body marrow signal (T1 bright, fat signal). Normal disc height and hydration (T2 bright). Normal spinal cord signal and caliber. Patent neural foramina.',
    abnormalFindings: [
      'Disc herniation (protrusion, extrusion, sequestration)',
      'Spinal stenosis (central, lateral recess, foraminal)',
      'Cord signal abnormality (T2 bright = edema/myelopathy)',
      'Vertebral body compression fracture',
      'Marrow replacement (metastasis: T1 dark, T2/STIR bright)',
      'Epidural abscess (rim-enhancing collection)',
      'Spondylodiscitis (disc and endplate enhancement)',
    ],
    differentialDiagnosis: [
      'Acute vs. chronic compression fracture: STIR bright = acute; T1 reconstitution = chronic',
      'Pathologic fracture: posterior wall involvement, enhancing soft tissue mass, pedicle destruction',
      'Disc herniation vs. osteophyte: disc is T2 bright, osteophyte is T2 dark',
      'Epidural abscess vs. epidural hematoma',
    ],
    clinicalCorrelation:
      'MRI is the gold standard for spinal cord, disc, and soft tissue evaluation. Emergent MRI indicated for cauda equina syndrome (bilateral leg weakness, saddle anesthesia, bladder dysfunction). Cord compression from metastasis requires urgent evaluation and treatment.',
    keyPearls: [
      'Acute compression fracture: STIR bright (edema), T1 dark; chronic: normal marrow signal',
      'Cauda equina syndrome = emergent MRI and neurosurgical consult',
      'Disc nomenclature: bulge (broad-based), protrusion (focal), extrusion (past disc space), sequestration (free fragment)',
      'Cord T2 signal change at level of stenosis = myelopathy (may be irreversible)',
      'Post-surgical: enhancing scar vs. recurrent disc (scar enhances, disc fragment does not)',
    ],
    references: [
      'NASS Clinical Guidelines for Lumbar Disc Herniation.',
      'Defined by Fardon DF et al. Spine. Lumbar Disc Nomenclature. 2014.',
    ],
  },
  {
    id: 'mri-knee',
    name: 'MRI Knee: Interpretation',
    category: 'mri-interpretation',
    description:
      'MRI evaluation of the knee for meniscal tears, ligament injuries, and cartilage pathology.',
    technique:
      'Standard knee MRI: sagittal PD/T2 fat-sat, coronal PD/T2 fat-sat, axial PD fat-sat. T1 for anatomy. 3T preferred for resolution.',
    normalAppearance:
      'Menisci: uniform low signal triangles (bow-tie bodies, 2 body slices). ACL: continuous low-signal band. PCL: uniform dark band. Cartilage: smooth, uniform signal and thickness.',
    abnormalFindings: [
      'Meniscal tear: high signal extending to articular surface on 2+ images',
      'ACL tear: discontinuity, abnormal angle, edema in intercondylar notch',
      'PCL tear: thickened, discontinuous, or abnormal signal',
      'MCL/LCL injury: thickening, edema, discontinuity',
      'Bone marrow edema pattern: indicates bone bruise or occult fracture',
      'Cartilage defect: thinning, fissuring, full-thickness loss',
      'Joint effusion, Baker cyst',
    ],
    differentialDiagnosis: [
      'Meniscal tear vs. normal meniscal vascularity (grade 1-2 signal does not reach surface)',
      'ACL tear: bone bruise pattern (lateral femoral condyle + posterolateral tibial plateau = pivot shift)',
      'MCL tear grade: I (sprain), II (partial), III (complete disruption)',
      'Parameniscal cyst (suggests underlying meniscal tear)',
    ],
    clinicalCorrelation:
      'MRI sensitivity for meniscal tears is 90-95%. ACL tears are frequently associated with lateral bone bruises (pivot-shift mechanism). O\'Donoghue unhappy triad: ACL + MCL + medial meniscus (or lateral meniscus). Cartilage grading uses modified Outerbridge classification.',
    keyPearls: [
      'Meniscal tear requires high signal reaching articular surface on 2+ consecutive images',
      'Bucket-handle tear: absent bow tie on >2 sagittal slices, double PCL sign',
      'ACL tear: empty notch sign, anterior tibial translation, bone bruise pattern',
      'Pivot-shift bone bruise: lateral femoral condyle + posterolateral tibia = ACL tear mechanism',
      'Magic angle artifact can mimic pathology at 55 degrees to B0 (especially posterior horn meniscus)',
    ],
    references: [
      'Defined by Stoller DW. Magnetic Resonance Imaging in Orthopaedics and Sports Medicine.',
      'Defined by Outerbridge RE. J Bone Joint Surg. Cartilage classification. 1961.',
    ],
  },

  // =========================================================================
  // ULTRASOUND
  // =========================================================================
  {
    id: 'us-fast-exam',
    name: 'Ultrasound: FAST Exam',
    category: 'ultrasound',
    description:
      'Focused Assessment with Sonography for Trauma - rapid bedside assessment for free fluid in trauma.',
    technique:
      'Curvilinear (3.5-5 MHz) or phased array probe. Four standard views: subxiphoid (cardiac), RUQ (Morrison pouch), LUQ (splenorenal), suprapubic (pelvis). eFAST adds bilateral anterior chest for pneumothorax.',
    normalAppearance:
      'No free fluid in pericardial space, Morrison pouch (hepatorenal recess), splenorenal recess, or pelvis. Lung sliding present bilaterally on eFAST.',
    abnormalFindings: [
      'Anechoic stripe in Morrison pouch (RUQ free fluid)',
      'Perisplenic or splenorenal fluid',
      'Pericardial effusion (anechoic rim around heart)',
      'Pelvic free fluid (posterior to bladder)',
      'Absent lung sliding (pneumothorax on eFAST)',
      'Lung point (transition between sliding and non-sliding)',
    ],
    differentialDiagnosis: [
      'Physiologic pelvic fluid in women (small amount)',
      'Pre-existing ascites',
      'Pericardial fat pad vs. effusion',
      'Pleural effusion (above diaphragm) vs. peritoneal fluid (below diaphragm)',
      'Mirror artifact mimicking free fluid',
    ],
    clinicalCorrelation:
      'FAST sensitivity is 73-88% for free fluid (dependent on volume; >200 mL more reliably detected). Negative FAST does not exclude solid organ injury - CT is definitive. Positive FAST in hemodynamically unstable patient = OR for exploratory laparotomy. Serial FAST exams improve sensitivity.',
    keyPearls: [
      'Positive FAST + unstable vitals = OR (no CT needed)',
      'Negative FAST does not rule out injury - CT for stable patients with mechanism',
      'RUQ (Morrison pouch) is the most sensitive single view for free fluid',
      'Minimum detectable fluid on FAST is approximately 200-500 mL',
      'eFAST adds bilateral anterior chest views for pneumothorax (absent lung sliding)',
    ],
    references: [
      'Defined by Rozycki GS et al. J Trauma. 1995.',
      'ATLS 10th Edition - FAST Protocol.',
    ],
  },
  {
    id: 'us-ruq',
    name: 'Ultrasound: Right Upper Quadrant',
    category: 'ultrasound',
    description:
      'RUQ ultrasound for evaluation of gallbladder disease, biliary pathology, and hepatic assessment.',
    technique:
      'Curvilinear probe (3.5-5 MHz). Patient fasting 4-6 hours for gallbladder distension. Subcostal and intercostal approaches. Left lateral decubitus positioning may improve visualization.',
    normalAppearance:
      'Thin-walled gallbladder (<3 mm) with anechoic bile. Common bile duct <6 mm (<8 mm post-cholecystectomy, <10 mm if age >60). Homogeneous liver parenchyma.',
    abnormalFindings: [
      'Gallstones: echogenic foci with posterior acoustic shadowing, mobile',
      'Sonographic Murphy sign (focal tenderness under probe at GB)',
      'GB wall thickening >3 mm (cholecystitis)',
      'Pericholecystic fluid',
      'CBD dilation >6 mm',
      'Intrahepatic biliary dilation (parallel channel sign)',
      'Hepatic steatosis (increased echogenicity)',
      'Focal liver lesions',
    ],
    differentialDiagnosis: [
      'Gallstone vs. polyp: stones are mobile with shadowing; polyps are fixed, no shadow',
      'Sludge vs. stones: sludge is low-level echoes without discrete shadowing',
      'GB wall thickening: cholecystitis, hepatitis, CHF, hypoalbuminemia, ascites',
      'CBD dilation: choledocholithiasis, stricture, ampullary tumor, pancreatic head mass',
    ],
    clinicalCorrelation:
      'RUQ ultrasound is the first-line study for suspected biliary colic and cholecystitis. Sonographic Murphy sign has 92% PPV for acute cholecystitis. CBD dilation without visible stone warrants MRCP or EUS. HIDA scan if ultrasound equivocal for cholecystitis.',
    keyPearls: [
      'Classic cholecystitis triad: gallstones + GB wall thickening + sonographic Murphy sign',
      'CBD normal <6 mm (add 1 mm per decade >60; up to 10 mm post-cholecystectomy)',
      'Wall-echo-shadow (WES) sign: contracted GB packed with stones',
      'Porcelain gallbladder: hyperechoic GB wall with shadowing (malignancy risk)',
      'Hepatic steatosis: liver brighter than kidney cortex',
    ],
    references: [
      'ACR Appropriateness Criteria - RUQ Pain.',
      'ACR-SPR-SRU Practice Parameter for US of the Abdomen.',
    ],
  },
  {
    id: 'us-pelvic',
    name: 'Ultrasound: Pelvic',
    category: 'ultrasound',
    description:
      'Transabdominal and transvaginal ultrasound for evaluation of pelvic pathology.',
    technique:
      'Transabdominal: curvilinear probe, full bladder required as acoustic window. Transvaginal: high-frequency endocavitary probe (7-10 MHz), empty bladder. Doppler for vascularity assessment.',
    normalAppearance:
      'Uterus: homogeneous myometrium, thin endometrium (varies with cycle). Ovaries: <3 cm in longest dimension, small follicles. No free fluid in cul-de-sac (or minimal physiologic).',
    abnormalFindings: [
      'Ectopic pregnancy: empty uterus + adnexal mass + free fluid + positive beta-hCG',
      'Ovarian cyst (simple = anechoic, complex = septations/solid components)',
      'Ovarian torsion: enlarged edematous ovary, absent Doppler flow',
      'Endometrial thickening (>5 mm postmenopausal)',
      'Uterine fibroids (heterogeneous myometrial masses)',
      'Tubo-ovarian abscess (complex adnexal mass)',
    ],
    differentialDiagnosis: [
      'Ectopic pregnancy vs. corpus luteum cyst (CL has ring-of-fire Doppler)',
      'Ovarian cyst: simple cyst, endometrioma (ground glass), dermoid (fat-fluid level)',
      'Complex adnexal mass: TOA, ectopic, ovarian neoplasm, hemorrhagic cyst',
      'Endometrial thickening: polyp, hyperplasia, carcinoma',
    ],
    clinicalCorrelation:
      'Transvaginal US should demonstrate IUP when beta-hCG >3000 mIU/mL (discriminatory zone). Empty uterus above discriminatory zone raises ectopic concern. Ovarian torsion can have preserved Doppler flow (dual blood supply) - do not rely on Doppler alone.',
    keyPearls: [
      'Discriminatory zone: IUP should be seen by TV-US when beta-hCG >3000 mIU/mL',
      'Empty uterus + positive hCG = ectopic until proven otherwise',
      'Ovarian torsion may have preserved arterial flow - whirlpool sign of twisted pedicle is more reliable',
      'Endometrial thickness >5 mm in postmenopausal patient with bleeding warrants biopsy',
      'O-RADS: standardized reporting system for adnexal findings',
    ],
    references: [
      'ACR Appropriateness Criteria - First Trimester Bleeding.',
      'ACOG Practice Bulletin - Ectopic Pregnancy. 2018.',
    ],
  },
  {
    id: 'us-dvt',
    name: 'Ultrasound: DVT Evaluation',
    category: 'ultrasound',
    description:
      'Compression ultrasound for diagnosis of deep vein thrombosis of the lower extremities.',
    technique:
      'Linear high-frequency probe (7-12 MHz). Two-point compression (CFV at groin, popliteal vein behind knee) or whole-leg compression. Complete study includes augmentation and spectral Doppler.',
    normalAppearance:
      'Veins compress completely with probe pressure (walls coapt). Normal phasic flow with respiratory variation on spectral Doppler. Augmentation with distal compression.',
    abnormalFindings: [
      'Non-compressibility of vein (most reliable sign)',
      'Intraluminal echogenic thrombus',
      'Vein distension',
      'Absent or reduced flow on Doppler',
      'Loss of respiratory phasicity (proximal obstruction)',
      'Absent augmentation with distal compression',
    ],
    differentialDiagnosis: [
      'Acute DVT: vein distended, hypoechoic/anechoic thrombus, non-compressible',
      'Chronic DVT: vein contracted, echogenic thrombus, wall thickening, collaterals',
      'Baker cyst (mimics popliteal DVT clinically)',
      'Superficial thrombophlebitis',
      'Extrinsic compression (lymphadenopathy, mass)',
      'Cellulitis (swollen leg without DVT)',
    ],
    clinicalCorrelation:
      'Compression ultrasound sensitivity is >95% for proximal DVT (above knee) but only ~50% for isolated calf DVT. Two-point compression has similar accuracy to whole-leg in many studies. Wells score and D-dimer should guide testing. Negative two-point study may need repeat in 5-7 days if clinical suspicion remains.',
    keyPearls: [
      'Non-compressibility is the single most reliable sign of DVT',
      'Sensitivity >95% for proximal DVT; ~50% for calf DVT',
      'Two-point compression (CFV + popliteal) is efficient and accurate for proximal DVT',
      'Acute thrombus is hypoechoic (may be invisible) - rely on compressibility',
      'Loss of respiratory phasicity suggests more proximal obstruction (iliac, IVC)',
    ],
    references: [
      'ACR Appropriateness Criteria - Suspected Lower Extremity DVT.',
      'Wells Score for DVT. Wells PS et al. Lancet. 1997.',
    ],
  },
  {
    id: 'us-echocardiography',
    name: 'Ultrasound: Echocardiography Basics',
    category: 'ultrasound',
    description:
      'Fundamental echocardiographic views and measurements for cardiac assessment.',
    technique:
      'Phased array probe (2-4 MHz). Standard views: parasternal long axis (PLAX), parasternal short axis (PSAX), apical 4-chamber (A4C), apical 2-chamber, subcostal. Left lateral decubitus positioning.',
    normalAppearance:
      'Normal LV wall motion and thickness (8-12 mm). Normal EF (55-70%). Normal valve leaflet motion without regurgitation or stenosis. No pericardial effusion. Normal chamber dimensions.',
    abnormalFindings: [
      'Reduced LV ejection fraction',
      'Regional wall motion abnormalities (hypokinesis, akinesis, dyskinesis)',
      'Valvular stenosis (thickened, calcified, restricted motion)',
      'Valvular regurgitation (color Doppler jet)',
      'LV hypertrophy (wall thickness >12 mm)',
      'Chamber dilation (dilated cardiomyopathy)',
      'Pericardial effusion (anechoic rim)',
      'RV dilation and dysfunction',
      'Intracardiac thrombus or vegetation',
    ],
    differentialDiagnosis: [
      'Wall motion abnormality: ischemia, myocarditis, stress cardiomyopathy',
      'LV hypertrophy: hypertension, HCM, aortic stenosis, infiltrative disease',
      'Pericardial effusion: pericarditis, uremia, malignancy, trauma, post-surgical',
      'Vegetation: infective endocarditis, Libman-Sacks (SLE), marantic',
    ],
    clinicalCorrelation:
      'Echocardiography is the primary imaging modality for cardiac structure and function. Bedside echo (POCUS) can rapidly identify pericardial effusion/tamponade, severe LV dysfunction, and RV strain in PE. Formal TTE provides quantitative assessment of EF, valvular disease, and diastolic function.',
    keyPearls: [
      'Parasternal long axis is the best starting view - assess aortic root, mitral valve, LV',
      'Apical 4-chamber: assess all 4 chambers, EF by eyeball or Simpson biplane method',
      'E/A ratio and tissue Doppler e-prime assess diastolic function',
      'Pericardial tamponade: effusion + RV diastolic collapse + IVC plethora + clinical shock',
      'McConnell sign (RV free wall akinesis with apical sparing) suggests acute PE',
    ],
    references: [
      'ASE Guidelines for Performing a Comprehensive TTE. 2019.',
      'Defined by Lang RM et al. JASE. Chamber Quantification. 2015.',
    ],
  },

  // =========================================================================
  // CONTRAST STUDIES
  // =========================================================================
  {
    id: 'contrast-iodinated',
    name: 'Iodinated Contrast: Considerations',
    category: 'contrast-studies',
    description:
      'Safety considerations, contraindications, and management of iodinated contrast media used in CT and fluoroscopy.',
    technique:
      'IV injection via power injector. Typical dose 1-2 mL/kg. Flow rates 2-5 mL/s depending on study. Bolus tracking or test bolus for optimal timing.',
    normalAppearance:
      'Homogeneous organ and vascular enhancement. Appropriate timing for study indication.',
    abnormalFindings: [
      'Contrast extravasation (active bleeding)',
      'Non-enhancing regions (infarction, necrosis)',
      'Abnormal enhancement patterns (tumor vascularity)',
      'Contrast pooling (false lumen in dissection)',
    ],
    differentialDiagnosis: [
      'Contrast reaction vs. vasovagal episode vs. anxiety',
      'Contrast-induced nephropathy vs. other causes of AKI',
      'Allergic-like reaction vs. chemotoxic reaction',
    ],
    clinicalCorrelation:
      'Iodinated contrast reaction risk is 0.2-0.7% (mild) and 0.02-0.04% (severe). Risk factors: prior reaction (5x risk), asthma, multiple allergies. Metformin held 48h after contrast if eGFR <30 (risk of lactic acidosis). eGFR >30 is generally safe for IV contrast (ACR 2023 manual).',
    keyPearls: [
      'Prior contrast reaction is the strongest risk factor (5x increased risk)',
      'Premedication protocol: prednisone 50 mg at 13h, 7h, 1h before + diphenhydramine 50 mg at 1h',
      'Contrast-induced nephropathy risk is lower than previously thought (ACR updated guidelines)',
      'eGFR >30: IV contrast generally safe; eGFR <30: risk-benefit discussion',
      'Metformin: hold 48h post-contrast only if eGFR <30 (prevent lactic acidosis)',
      'Thyroid storm risk with iodinated contrast in uncontrolled hyperthyroidism',
    ],
    references: [
      'ACR Manual on Contrast Media. 2023 Edition.',
      'ACR-NKF Consensus Statement on Contrast. 2020.',
    ],
  },
  {
    id: 'contrast-gadolinium',
    name: 'Gadolinium Contrast: MRI Considerations',
    category: 'contrast-studies',
    description:
      'Safety, indications, and risks of gadolinium-based contrast agents for MRI.',
    technique:
      'IV injection at 0.1 mmol/kg (standard dose). Typical injection rate 2 mL/s. Imaging timing varies by protocol (dynamic liver: 20-30s arterial, 70s portal venous, 3-5 min delayed).',
    normalAppearance:
      'Enhancement of normal vascular structures. Uniform organ enhancement in appropriate phases.',
    abnormalFindings: [
      'Enhancement of mass lesions (BBB breakdown)',
      'Ring enhancement (abscess, high-grade tumor)',
      'Leptomeningeal enhancement (meningitis, carcinomatosis)',
      'Abnormal organ enhancement patterns',
    ],
    differentialDiagnosis: [
      'NSF vs. systemic sclerosis vs. eosinophilic fasciitis',
      'Gadolinium deposition disease (controversial entity)',
      'Enhancement from inflammation vs. neoplasm',
    ],
    clinicalCorrelation:
      'Gadolinium-based contrast agents are classified into Group I (higher NSF risk, linear chelates) and Group II (lower risk, macrocyclic chelates). NSF occurs almost exclusively with eGFR <30 and Group I agents. Gadolinium deposition in brain and bone occurs with all agents but clinical significance is uncertain.',
    keyPearls: [
      'Group II (macrocyclic: Dotarem, Gadavist, ProHance) preferred - lowest NSF risk',
      'NSF risk essentially eliminated with Group II agents even in dialysis patients',
      'Gadolinium deposition in brain (dentate nucleus, globus pallidus) - clinical significance unknown',
      'Avoid gadolinium in pregnancy unless benefit clearly outweighs risk',
      'No need to hold metformin (unlike iodinated contrast)',
      'Allergic-like reactions much rarer than with iodinated contrast (~0.01-0.1%)',
    ],
    references: [
      'ACR Manual on Contrast Media - Gadolinium Section. 2023.',
      'FDA Drug Safety Communication on Gadolinium Retention. 2017.',
    ],
  },

  // =========================================================================
  // RADIATION SAFETY
  // =========================================================================
  {
    id: 'radsafety-alara',
    name: 'Radiation Safety: ALARA Principle',
    category: 'radiation-safety',
    description:
      'As Low As Reasonably Achievable - the fundamental principle of radiation protection in medical imaging.',
    technique:
      'Apply three pillars of radiation protection: time (minimize exposure duration), distance (inverse square law), shielding (appropriate barriers). Justification of every study and optimization of technique.',
    normalAppearance:
      'N/A - safety principle, not an imaging finding.',
    abnormalFindings: [
      'Excessive radiation dose alerts in dose monitoring systems',
      'Repeat examinations without clinical indication',
      'Failure to use pediatric protocols in children',
      'Missing documentation of pregnancy screening',
    ],
    differentialDiagnosis: [
      'Deterministic effects (dose-threshold): skin erythema >2 Gy, cataract >0.5 Gy',
      'Stochastic effects (no threshold): cancer, genetic effects - probability increases with dose',
    ],
    clinicalCorrelation:
      'Annual background radiation is ~3 mSv. Medical imaging adds ~3 mSv average per person in the US. Linear no-threshold model estimates ~5 excess fatal cancers per 100,000 persons per 10 mSv. Benefits of appropriate imaging far outweigh risks, but unnecessary studies should be avoided.',
    keyPearls: [
      'ALARA: As Low As Reasonably Achievable - applies to all ionizing radiation imaging',
      'Three pillars: Time, Distance, Shielding',
      'Justification (right study), optimization (right technique), dose limitation (occupational limits)',
      'Occupational annual limit: 50 mSv/year, 100 mSv over 5 years',
      'Pregnant worker limit: 5 mSv total to fetus over gestation',
      'Image Gently (pediatric) and Image Wisely (adult) campaigns',
    ],
    references: [
      'ICRP Publication 103. Recommendations of the ICRP. 2007.',
      'ACR Appropriateness Criteria - Radiation Dose.',
    ],
  },
  {
    id: 'radsafety-dose-comparison',
    name: 'Radiation Safety: Dose Comparison Chart',
    category: 'radiation-safety',
    description:
      'Comparative radiation doses for common imaging studies to facilitate risk communication with patients.',
    technique:
      'Effective dose in milliSieverts (mSv). Use dose comparisons with natural background radiation or equivalent number of CXRs for patient counseling.',
    normalAppearance:
      'N/A - reference data for dose comparison.',
    abnormalFindings: [
      'CXR: 0.02 mSv (1 day background)',
      'Extremity X-ray: 0.001-0.01 mSv',
      'Abdomen X-ray: 0.7 mSv (3 months background)',
      'Mammogram: 0.4 mSv',
      'Head CT: 2 mSv (8 months background)',
      'Chest CT: 7 mSv (2 years background)',
      'Abdomen/pelvis CT: 10 mSv (3 years background)',
      'CT coronary angiography: 5-15 mSv',
      'Nuclear stress test: 10-15 mSv',
    ],
    differentialDiagnosis: [
      'US and MRI: zero ionizing radiation',
      'Nuclear medicine: variable dose based on radiopharmaceutical',
      'Fluoroscopy: highly variable, can be very high for interventional procedures',
    ],
    clinicalCorrelation:
      'Natural annual background radiation is ~3 mSv (varies by location: Denver ~5 mSv). A single CT abdomen/pelvis delivers about 3 years of background radiation. Risk communication should be proportional and balanced - a needed CT scan provides far more benefit than the theoretical small cancer risk.',
    keyPearls: [
      'Background radiation: ~3 mSv/year; CXR = ~0.02 mSv (equivalent to ~2.4 days background)',
      'CT abdomen/pelvis (~10 mSv) = ~3 years background radiation = ~500 CXRs',
      'US and MRI use NO ionizing radiation',
      'Pediatric patients: 2-3x more radiosensitive than adults',
      'Cumulative dose tracking is increasingly recommended but no strict "lifetime limit" for patients',
    ],
    references: [
      'Defined by Mettler FA et al. Radiology. Effective Doses in Radiology. 2008.',
      'ACR-AAPM Technical Standard for Management of Radiation Dose.',
    ],
  },
  {
    id: 'radsafety-pregnancy',
    name: 'Radiation Safety: Imaging in Pregnancy',
    category: 'radiation-safety',
    description:
      'Guidelines for diagnostic imaging during pregnancy, balancing fetal radiation risk against diagnostic benefit.',
    technique:
      'Ultrasound and MRI (without gadolinium) are preferred modalities. X-ray and CT used when clinically necessary with appropriate fetal dose estimation. Shield when possible.',
    normalAppearance:
      'N/A - safety guideline, not imaging finding.',
    abnormalFindings: [
      'Fetal dose thresholds: <50 mGy generally safe',
      'Deterministic effects (microcephaly, intellectual disability) unlikely below 100-200 mGy',
      'No single diagnostic study reaches 50 mGy fetal dose',
      'Iodinated contrast crosses placenta - use only when essential',
    ],
    differentialDiagnosis: [
      'Fetal dose by study: CXR <0.01 mGy, head/chest CT <1 mGy, abdomen/pelvis CT 10-50 mGy',
      'Risk period: organogenesis (2-8 weeks) most sensitive to teratogenesis',
      'Stochastic risk: estimated additional lifetime cancer risk ~0.1% per 10 mGy',
    ],
    clinicalCorrelation:
      'No single diagnostic study delivers enough radiation to justify termination of pregnancy. ACR states: "The risk of not making the diagnosis is usually far greater than the small risk from radiation exposure." Always document informed discussion. Use US and MRI first when possible.',
    keyPearls: [
      'No single diagnostic study justifies pregnancy termination (all below teratogenic threshold)',
      'Threshold for deterministic effects: 100-200 mGy (no diagnostic study reaches this)',
      'Preferred modalities: ultrasound first, then MRI (without gadolinium)',
      'CT is acceptable when clinically indicated - fetal dose from most studies is low',
      'Gadolinium crosses placenta and is classified as category C - avoid unless essential',
      'Document informed consent discussion regardless of study type',
    ],
    references: [
      'ACR-SPR Practice Parameter for Imaging Pregnant Patients. 2018.',
      'ACOG Committee Opinion 723: Imaging During Pregnancy. 2017.',
    ],
  },

  // =========================================================================
  // INTERVENTIONAL
  // =========================================================================
  {
    id: 'ir-biopsy-basics',
    name: 'Interventional Radiology: Image-Guided Biopsy',
    category: 'interventional',
    description:
      'Fundamentals of percutaneous image-guided biopsy techniques used across organ systems.',
    technique:
      'Guidance modalities: US (real-time, no radiation, preferred when lesion visible), CT (deep lesions, lung, retroperitoneum), fluoroscopy (bone), MRI (prostate fusion). Core needle biopsy (18-20G) preferred for tissue architecture. FNA (22-25G) for cytology.',
    normalAppearance:
      'N/A - interventional procedure.',
    abnormalFindings: [
      'Target lesion identification and needle trajectory planning',
      'Complications: hemorrhage, pneumothorax (lung biopsy ~20%), infection, tumor seeding (rare)',
      'Non-diagnostic sample (need repeat biopsy)',
    ],
    differentialDiagnosis: [
      'Core biopsy vs. FNA: core provides architecture (preferred for most solid masses)',
      'Imaging guidance choice depends on lesion visibility and accessibility',
      'Coaxial technique for multiple passes through single puncture',
    ],
    clinicalCorrelation:
      'Image-guided biopsy has largely replaced surgical biopsy for most lesions. Pneumothorax rate for lung biopsy is 15-25% (chest tube needed in 5-7%). Bleeding risk increased with coagulopathy - check platelets >50k, INR <1.5. Anticoagulants should be held per SIR consensus guidelines.',
    keyPearls: [
      'US guidance preferred when lesion visible (real-time, no radiation, portable)',
      'CT guidance for deep lesions, lung nodules, retroperitoneal masses',
      'Core needle (18-20G) preferred for tissue architecture; FNA (22-25G) for cytology',
      'Lung biopsy pneumothorax rate: 15-25%; chest tube needed in ~5-7%',
      'Pre-procedure: check coagulation (platelets >50K, INR <1.5), hold anticoagulants per SIR guidelines',
    ],
    references: [
      'SIR Consensus Guidelines for Periprocedural Management. 2019.',
      'ACR-SIR-SPR Practice Parameter for Image-Guided Biopsy.',
    ],
  },
  {
    id: 'ir-drainage',
    name: 'Interventional Radiology: Abscess Drainage',
    category: 'interventional',
    description:
      'Percutaneous image-guided drainage of fluid collections and abscesses.',
    technique:
      'Seldinger (wire exchange) or trocar (direct puncture) technique. US or CT guidance. Drainage catheter typically 8-14 Fr. Locking pigtail catheter for long-term drainage.',
    normalAppearance:
      'N/A - interventional procedure.',
    abnormalFindings: [
      'Drainable fluid collection (>3 cm, accessible percutaneous route)',
      'Catheter output monitoring (character, volume)',
      'Follow-up imaging to assess residual collection',
      'Catheter check/exchange if poor drainage',
    ],
    differentialDiagnosis: [
      'Abscess (enhancing rim, gas, clinical sepsis) vs. sterile collection (seroma, hematoma)',
      'Organized hematoma (may not drain well)',
      'Phlegmon (not drainable - no fluid component)',
      'Loculated vs. free-flowing collection',
    ],
    clinicalCorrelation:
      'Percutaneous drainage is first-line treatment for most abscesses >3 cm. Success rate is 80-90% with source control. Indications for surgical drainage: multiple loculations not accessible percutaneously, enteric fistula, failed percutaneous drainage. Drain is removed when output <10-20 mL/day and imaging shows resolution.',
    keyPearls: [
      'Percutaneous drainage is first-line for most abscesses >3 cm',
      'Success rate 80-90% with appropriate antibiotic coverage',
      'Seldinger technique: needle -> wire -> dilator -> catheter (safer for deep collections)',
      'Remove drain when output <10-20 mL/day and follow-up imaging shows resolution',
      'Phlegmon = inflammatory tissue without discrete fluid; not drainable - treat with antibiotics',
    ],
    references: [
      'SIR Quality Improvement Guidelines for Percutaneous Drainage.',
      'Defined by vanSonnenberg E et al. Radiology. Percutaneous Abscess Drainage. 1982.',
    ],
  },
  {
    id: 'ir-vascular-access',
    name: 'Interventional Radiology: Vascular Access',
    category: 'interventional',
    description:
      'Image-guided central venous access including PICC lines, tunneled catheters, and ports.',
    technique:
      'US-guided venous puncture (preferred over landmark technique). Fluoroscopic confirmation of tip position. PICC: basilic or brachial vein; tunneled line: IJV; port: IJV with subcutaneous pocket.',
    normalAppearance:
      'N/A - interventional procedure.',
    abnormalFindings: [
      'Catheter tip position: ideal at cavoatrial junction (CAJ)',
      'Malposition: tip in IVC, azygos vein, contralateral brachiocephalic',
      'Pneumothorax (complication of subclavian approach)',
      'Catheter-related thrombosis',
      'Line infection (tunnel site erythema, bacteremia)',
    ],
    differentialDiagnosis: [
      'PICC vs. tunneled catheter vs. port: selection based on duration and use',
      'PICC: weeks to months, chemotherapy, antibiotics, TPN',
      'Port: months to years, intermittent access (chemo cycles)',
      'Tunneled line: hemodialysis, long-term IV access',
    ],
    clinicalCorrelation:
      'US-guided access reduces complications compared to landmark technique (NICE guidelines). Catheter tip should be at the cavoatrial junction on post-procedure imaging. PICC lines have higher thrombosis rates than tunneled catheters. Port infections may require device removal.',
    keyPearls: [
      'US guidance is standard of care for central venous access (reduces complications)',
      'Ideal catheter tip position: cavoatrial junction (CAJ)',
      'Post-procedure CXR confirms tip position and excludes pneumothorax',
      'PICC: higher DVT risk than tunneled lines; avoid in patients needing future AV fistula',
      'Port infection: may attempt salvage with antibiotics + lock therapy; remove if persistent',
    ],
    references: [
      'SIR Clinical Practice Guidelines for Central Venous Access.',
      'NICE Guidelines: US Guidance for Central Venous Access. 2002.',
    ],
  },

  // =========================================================================
  // MUSCULOSKELETAL IMAGING
  // =========================================================================
  {
    id: 'msk-fracture-basics',
    name: 'MSK Imaging: Fracture Identification',
    category: 'musculoskeletal-imaging',
    description:
      'Systematic approach to identifying fractures on plain radiographs and advanced imaging.',
    technique:
      'Minimum 2 views at 90 degrees for any suspected fracture. Include joint above and below. CT for complex fractures (intra-articular, spine, pelvis). MRI for occult fractures and stress fractures.',
    normalAppearance:
      'Intact cortical margins. Normal trabecular pattern. Normal joint alignment. No soft tissue swelling.',
    abnormalFindings: [
      'Cortical disruption (fracture line)',
      'Lucent line (non-impacted fracture)',
      'Sclerotic line (impacted/healing fracture)',
      'Angulation, displacement, shortening',
      'Joint effusion (lipohemarthrosis = intra-articular fracture)',
      'Soft tissue swelling overlying fracture site',
      'Periosteal reaction (stress fracture, healing)',
    ],
    differentialDiagnosis: [
      'Fracture vs. nutrient foramen (smooth corticated edges, oblique)',
      'Fracture vs. accessory ossicle (smooth, corticated, known locations)',
      'Pathologic fracture: lytic lesion, permeative destruction, soft tissue mass',
      'Stress fracture vs. insufficiency fracture (activity vs. weakened bone)',
    ],
    clinicalCorrelation:
      'X-ray sensitivity for fractures varies by location: high for long bone shaft, lower for scaphoid, hip, and stress fractures. Ottawa ankle/knee/foot rules guide need for X-ray. MRI is the gold standard for occult fractures. Lipohemarthrosis on lateral knee X-ray indicates intra-articular fracture.',
    keyPearls: [
      'Always obtain minimum 2 views at 90 degrees; 3 views for ankle and wrist',
      'Ottawa rules reduce unnecessary imaging in ankle, knee, and foot injuries',
      'Lipohemarthrosis (fat-fluid level on lateral knee): intra-articular fracture until proven otherwise',
      'Scaphoid fracture may be X-ray occult - MRI if clinical suspicion (snuffbox tenderness)',
      'Describe fractures: open/closed, location, orientation, displacement, angulation, comminution',
    ],
    references: [
      'Defined by Stiell IG et al. Ottawa Ankle Rules. JAMA. 1994.',
      'ACR Appropriateness Criteria - Acute Extremity Trauma.',
    ],
  },
  {
    id: 'msk-shoulder',
    name: 'MSK Imaging: Shoulder',
    category: 'musculoskeletal-imaging',
    description:
      'Imaging evaluation of the shoulder for rotator cuff, labral, and bony pathology.',
    technique:
      'X-ray: AP (internal/external rotation), axillary lateral, scapular Y (outlet). MRI: standard protocol with PD and T2 fat-sat in 3 planes. MR arthrogram for labral tears (intra-articular gadolinium).',
    normalAppearance:
      'Normal acromiohumeral distance (>7 mm). Intact rotator cuff tendons (supraspinatus, infraspinatus, subscapularis, teres minor). Normal labrum and glenohumeral ligaments.',
    abnormalFindings: [
      'Rotator cuff tear: tendon discontinuity, retraction, fatty infiltration',
      'Rotator cuff tendinopathy: thickened, abnormal signal without full-thickness tear',
      'Labral tear: displaced or fragmented labrum (Bankart, SLAP)',
      'Hill-Sachs lesion (posterolateral humeral head impaction fracture)',
      'Bankart lesion (anteroinferior glenoid labral tear)',
      'Acromioclavicular joint arthropathy',
      'Subacromial/subdeltoid bursitis',
    ],
    differentialDiagnosis: [
      'Rotator cuff tear: partial vs. full-thickness, acute vs. chronic',
      'Impingement: subacromial spur, type III acromion, os acromiale',
      'Adhesive capsulitis (frozen shoulder): thickened capsule, axillary recess',
      'Calcific tendinitis: calcium within tendon substance',
    ],
    clinicalCorrelation:
      'Rotator cuff tears are extremely common: up to 50% of asymptomatic people over 60 have tears. Clinical correlation is essential. MRI sensitivity for full-thickness tears is >90%. MR arthrogram improves detection of partial-thickness and labral tears. Ultrasound is an excellent alternative for rotator cuff evaluation in experienced hands.',
    keyPearls: [
      'Supraspinatus is the most commonly torn rotator cuff tendon (critical zone)',
      'Hill-Sachs + Bankart lesion = anterior shoulder instability',
      'SLAP tear: superior labrum anterior to posterior; MR arthrogram is gold standard',
      'Acromiohumeral distance <7 mm suggests chronic massive rotator cuff tear',
      'Fatty infiltration of cuff muscles (Goutallier classification) affects surgical prognosis',
    ],
    references: [
      'Defined by Goutallier D et al. Clin Orthop. Fatty degeneration. 1994.',
      'ACR Appropriateness Criteria - Shoulder Pain.',
    ],
  },
  {
    id: 'msk-spine-imaging',
    name: 'MSK Imaging: Spine Overview',
    category: 'musculoskeletal-imaging',
    description:
      'Overview of spine imaging modalities and common pathology across cervical, thoracic, and lumbar regions.',
    technique:
      'X-ray: AP and lateral (flexion/extension for instability). CT: trauma, fracture characterization, pre-surgical planning. MRI: disc, cord, soft tissue, infection, tumor. Bone scan: metastases screening.',
    normalAppearance:
      'Normal lordosis (cervical, lumbar) and kyphosis (thoracic). Normal vertebral body height and alignment. Intact pedicles on AP view. Normal disc spaces.',
    abnormalFindings: [
      'Compression fracture: loss of vertebral body height',
      'Burst fracture: retropulsed fragment, widened interpedicular distance',
      'Spondylolisthesis: anterior slippage of one vertebra on another',
      'Spondylolysis: pars interarticularis defect (Scottie dog sign)',
      'Absent pedicle sign (metastasis)',
      'Disc space narrowing and osteophytes (degenerative)',
      'Widened prevertebral soft tissues (cervical trauma/infection)',
    ],
    differentialDiagnosis: [
      'Benign vs. pathologic compression fracture: STIR signal, posterior wall, pedicle involvement',
      'Degenerative disc disease vs. infection: infection crosses disc space with endplate destruction',
      'Spondylolysis vs. facet arthropathy on oblique views',
      'Schmorl node (disc herniation into vertebral body) vs. destructive lesion',
    ],
    clinicalCorrelation:
      'Canadian C-spine rule and NEXUS criteria guide cervical spine imaging in trauma. MRI is indicated for neurologic deficits, suspected cord compression, and cauda equina syndrome. Red flags for back pain: age >50, fever, weight loss, IV drug use, neurologic deficit, cancer history.',
    keyPearls: [
      'NEXUS criteria: no midline tenderness, no intoxication, no focal deficit, no distracting injury, alert = no imaging needed',
      'Scottie dog on oblique lumbar X-ray: collar break = spondylolysis (pars defect)',
      'Absent pedicle on AP view: think metastasis',
      'Widened prevertebral soft tissues (C3-C4 >7 mm, C6-C7 >22 mm): retropharyngeal injury or abscess',
      'Jefferson fracture (C1 burst): lateral mass overhang on open-mouth AP view',
    ],
    references: [
      'Defined by Stiell IG et al. Canadian C-spine Rule. NEJM. 2003.',
      'Defined by Hoffman JR et al. NEXUS Criteria. NEJM. 2000.',
    ],
  },

  // =========================================================================
  // ADDITIONAL ENTRIES TO REACH 35+
  // =========================================================================
  {
    id: 'cxr-lung-mass',
    name: 'CXR: Lung Mass/Nodule',
    category: 'chest-xray',
    description:
      'Identification and characterization of pulmonary nodules and masses on chest radiography.',
    technique:
      'PA and lateral CXR. Nodule = <3 cm; Mass = >3 cm. CT recommended for any indeterminate nodule. Compare with prior imaging.',
    normalAppearance:
      'Clear lung fields. Normal hilar structures. No discrete opacity.',
    abnormalFindings: [
      'Solitary pulmonary nodule (<3 cm)',
      'Pulmonary mass (>3 cm)',
      'Calcification pattern: benign (central, laminar, popcorn) vs. eccentric (concerning)',
      'Spiculated margins (highly suspicious for malignancy)',
      'Cavitation (squamous cell carcinoma, TB, abscess)',
      'Hilar/mediastinal lymphadenopathy',
    ],
    differentialDiagnosis: [
      'Malignant: primary lung cancer, metastasis, lymphoma, carcinoid',
      'Benign: granuloma (TB, histoplasmosis), hamartoma (popcorn calcification), AVM',
      'Infectious: round pneumonia, abscess, fungal infection',
    ],
    clinicalCorrelation:
      'Fleischner Society guidelines direct management of incidental pulmonary nodules based on size, morphology, and risk factors. Spiculated or growing nodules require tissue diagnosis. PET-CT helpful for nodules >8 mm. Low-dose CT screening recommended for high-risk patients (NLST criteria).',
    keyPearls: [
      'Nodule (<3 cm) vs. mass (>3 cm): masses are cancer until proven otherwise',
      'Benign calcification patterns: central, diffuse, laminar, popcorn (hamartoma)',
      'Spiculated margins = high likelihood of malignancy',
      'Fleischner guidelines: size and risk factors guide follow-up intervals',
      'Lung-RADS for screening CT; Fleischner for incidental nodules',
    ],
    references: [
      'Fleischner Society Guidelines for Incidental Pulmonary Nodules. 2017.',
      'National Lung Screening Trial (NLST). NEJM. 2011.',
    ],
  },
  {
    id: 'ct-renal-colic',
    name: 'CT: Renal Colic / Urolithiasis',
    category: 'ct-interpretation',
    description:
      'Non-contrast CT for evaluation of kidney stones and ureteral obstruction.',
    technique:
      'Non-contrast CT abdomen/pelvis (stone protocol). Low-dose CT has similar sensitivity. No oral or IV contrast needed. Thin slices for small stone detection.',
    normalAppearance:
      'No calcific densities in collecting system or ureters. Normal renal size and parenchyma. No hydronephrosis.',
    abnormalFindings: [
      'Calcific density in ureter (stone)',
      'Hydronephrosis / hydroureter proximal to stone',
      'Perinephric stranding (edema)',
      'Tissue rim sign (rim of soft tissue around ureteral stone)',
      'Ureteral wall thickening at stone level',
      'Forniceal rupture (perinephric fluid from high-grade obstruction)',
    ],
    differentialDiagnosis: [
      'Ureteral stone vs. phlebolith: tissue rim sign (stone), comet tail sign (phlebolith)',
      'Uric acid stones: radiolucent on X-ray but visible on CT',
      'Appendicolith in appendix vs. ureteral stone',
      'Calcified mesenteric lymph node',
    ],
    clinicalCorrelation:
      'CT without contrast is >95% sensitive for urolithiasis. Stone composition cannot be determined by CT but density helps (uric acid: 200-600 HU; calcium: 800-1200+ HU). Stones >5 mm less likely to pass spontaneously. Emergent urology consultation for infected obstructed stone (pyonephrosis).',
    keyPearls: [
      'Non-contrast CT is gold standard for renal colic (>95% sensitive)',
      'Tissue rim sign distinguishes ureteral stone from phlebolith',
      'Stone size predicts passage: <5 mm = ~90% pass; >7 mm = <50% pass',
      'Low-dose CT protocol adequate for stone detection (reduced radiation)',
      'Infected obstructed kidney = urologic emergency (sepsis risk)',
    ],
    references: [
      'AUA/Endourology Society Guideline on Kidney Stones. 2014.',
      'ACR Appropriateness Criteria - Acute Flank Pain.',
    ],
  },
  {
    id: 'us-thyroid',
    name: 'Ultrasound: Thyroid Nodule Evaluation',
    category: 'ultrasound',
    description:
      'Ultrasound characterization and risk stratification of thyroid nodules using ACR TI-RADS.',
    technique:
      'High-frequency linear probe (10-15 MHz). Evaluate composition, echogenicity, shape, margins, and echogenic foci. Apply ACR TI-RADS scoring system.',
    normalAppearance:
      'Homogeneous thyroid parenchyma. No discrete nodules. Normal isthmus thickness (<3 mm).',
    abnormalFindings: [
      'Solid hypoechoic nodule (more suspicious)',
      'Taller-than-wide shape (suspicious)',
      'Irregular margins or extrathyroidal extension',
      'Punctate echogenic foci (microcalcifications - suspicious)',
      'Macrocalcification (coarse calcification)',
      'Suspicious cervical lymphadenopathy (round, loss of fatty hilum, calcifications)',
    ],
    differentialDiagnosis: [
      'Benign: colloid cyst, adenomatoid nodule, thyroiditis',
      'Malignant: papillary carcinoma (most common), follicular, medullary, anaplastic',
      'Indeterminate: follicular neoplasm (cannot distinguish adenoma from carcinoma on US)',
    ],
    clinicalCorrelation:
      'ACR TI-RADS assigns points based on 5 US features to categorize nodules as TR1-TR5 and guide FNA thresholds by size. Papillary carcinoma: hypoechoic, solid, microcalcifications, taller-than-wide. Most thyroid nodules are benign (>90%). FNA is the gold standard for cytologic diagnosis.',
    keyPearls: [
      'ACR TI-RADS: score based on composition, echogenicity, shape, margin, echogenic foci',
      'TR1 (benign): no FNA; TR5 (highly suspicious): FNA if >=1 cm',
      'Microcalcifications (punctate echogenic foci) = psammoma bodies = papillary cancer association',
      'Taller-than-wide shape has high specificity for malignancy',
      'Purely cystic nodules and spongiform nodules are almost always benign',
    ],
    references: [
      'ACR TI-RADS. Tessler FN et al. JACR. 2017.',
      'ATA Thyroid Nodule Management Guidelines. 2015.',
    ],
  },
  {
    id: 'ct-trauma',
    name: 'CT: Trauma Pan-Scan',
    category: 'ct-interpretation',
    description:
      'Whole-body CT evaluation in the trauma setting covering head, C-spine, chest, abdomen, and pelvis.',
    technique:
      'Non-contrast head CT + CT angiography of neck + contrast-enhanced chest/abdomen/pelvis. Arterial phase for vascular injuries. Portal venous phase for solid organ injury grading. Delayed phase if active bleeding suspected.',
    normalAppearance:
      'No intracranial hemorrhage. Normal alignment of C-spine. No pneumothorax or hemothorax. No solid organ laceration. No free fluid. No fractures.',
    abnormalFindings: [
      'Intracranial hemorrhage (epidural, subdural, SAH, contusion)',
      'C-spine fracture or ligamentous injury',
      'Pneumothorax, hemothorax',
      'Aortic injury (pseudoaneurysm, dissection, transection)',
      'Solid organ laceration (liver, spleen, kidney - AAST grading)',
      'Active contrast extravasation (active bleeding)',
      'Pelvic fracture with hematoma',
      'Bowel/mesenteric injury (free fluid without solid organ injury)',
    ],
    differentialDiagnosis: [
      'Active bleeding: contrast extravasation increasing on delayed phase',
      'Splenic laceration grading (AAST I-V) guides management',
      'Liver laceration: most managed non-operatively',
      'Bowel injury: free fluid without solid organ injury = suspicious; oral contrast extravasation = perforation',
    ],
    clinicalCorrelation:
      'Pan-scan CT reduces mortality in major trauma by identifying injuries quickly. AAST organ injury scale guides management. Active extravasation on CT may warrant interventional radiology embolization. Free fluid without solid organ injury raises concern for bowel/mesenteric injury requiring surgical exploration.',
    keyPearls: [
      'Active extravasation: contrast blush increasing in size on delayed imaging',
      'AAST grading for solid organ injury (I-V) guides operative vs. non-operative management',
      'Free fluid without solid organ injury = suspect bowel/mesenteric injury',
      'Aortic injury: look at aortic isthmus (just distal to left subclavian)',
      'Delayed phase helpful to distinguish active bleeding from contained vascular injury',
    ],
    references: [
      'ATLS 10th Edition - Imaging in Trauma.',
      'AAST Organ Injury Scaling. 2018 Revision.',
    ],
  },
  {
    id: 'mri-stroke-diffusion',
    name: 'MRI Brain: DWI for Acute Stroke',
    category: 'mri-interpretation',
    description:
      'Diffusion-weighted imaging as the gold standard for acute ischemic stroke detection.',
    technique:
      'DWI with multiple b-values (0, 1000 s/mm2). ADC map generated. Combined with FLAIR, T2, GRE/SWI, MRA, and perfusion imaging (PWI).',
    normalAppearance:
      'No restricted diffusion. Homogeneous ADC values. Normal DWI signal intensity.',
    abnormalFindings: [
      'Bright DWI + dark ADC = true restricted diffusion (acute infarct)',
      'Bright DWI + bright ADC = T2 shine-through (not acute stroke)',
      'DWI-FLAIR mismatch: DWI positive, FLAIR negative = likely within 4.5-hour window',
      'DWI-perfusion mismatch: small core + large penumbra = treatment target',
      'Hemorrhagic transformation on GRE/SWI',
    ],
    differentialDiagnosis: [
      'Acute ischemic stroke (cytotoxic edema = restricted diffusion)',
      'Abscess core (restricted diffusion)',
      'Highly cellular tumor (lymphoma, epidermoid)',
      'Status epilepticus (transient cortical restriction)',
      'Creutzfeldt-Jakob disease (cortical and basal ganglia restriction)',
    ],
    clinicalCorrelation:
      'DWI detects acute ischemia within minutes (CT may be normal for 6-12 hours). DWI-FLAIR mismatch can estimate stroke onset time when unknown (wake-up stroke). DWI-perfusion mismatch identifies salvageable penumbra for thrombectomy up to 24 hours (DAWN and DEFUSE-3 trials).',
    keyPearls: [
      'DWI is positive within minutes of stroke onset; CT may remain normal for hours',
      'True restriction: DWI bright + ADC dark; T2 shine-through: DWI bright + ADC bright',
      'DWI-FLAIR mismatch: DWI+/FLAIR- suggests stroke within ~4.5 hours (MR WITNESS trial)',
      'DWI-perfusion mismatch: treatment target for late-window thrombectomy (DAWN, DEFUSE-3)',
      'DWI restriction can be reversible in early reperfusion (transient ischemic attack)',
    ],
    references: [
      'Nogueira RG et al. DAWN Trial. NEJM. 2018.',
      'Albers GW et al. DEFUSE-3 Trial. NEJM. 2018.',
    ],
  },
  {
    id: 'us-aorta',
    name: 'Ultrasound: Abdominal Aorta',
    category: 'ultrasound',
    description:
      'Ultrasound evaluation of the abdominal aorta for aneurysm screening and surveillance.',
    technique:
      'Curvilinear probe (3.5-5 MHz). Measure outer wall to outer wall in AP diameter. Scan from xiphoid to bifurcation in transverse and sagittal planes. Fasting improves visualization (less bowel gas).',
    normalAppearance:
      'Aortic diameter <3 cm. Smooth intimal surface. Normal tapering from proximal to distal. Bifurcation at L4 level.',
    abnormalFindings: [
      'Abdominal aortic aneurysm (AAA): diameter >=3 cm',
      'Mural thrombus within aneurysm',
      'Dissection flap (rare to see on US)',
      'Rupture signs: retroperitoneal hematoma, irregular aortic contour',
      'Iliac artery aneurysm (>1.5 cm)',
    ],
    differentialDiagnosis: [
      'AAA vs. tortuous aorta (measure in true short axis perpendicular to flow)',
      'Para-aortic lymphadenopathy mimicking aneurysm',
      'Aortic ectasia (2.5-3 cm) vs. true aneurysm (>=3 cm)',
    ],
    clinicalCorrelation:
      'US screening for AAA recommended for men aged 65-75 who have ever smoked (USPSTF Grade B). Repair threshold: 5.5 cm (men), 5.0 cm (women), or growth >0.5 cm/6 months. Ruptured AAA has 80% mortality - classic triad: abdominal/flank pain, pulsatile mass, hypotension. Unstable patient goes directly to OR.',
    keyPearls: [
      'AAA defined as aortic diameter >=3 cm (outer wall to outer wall)',
      'USPSTF screening: men 65-75 with smoking history (one-time US)',
      'Repair threshold: 5.5 cm (men), 5.0 cm (women), or rapid growth >0.5 cm/6 months',
      'Ruptured AAA classic triad: pain, pulsatile mass, hypotension (often incomplete)',
      'Surveillance intervals: 3-3.9 cm every 3 years; 4-4.9 cm annually; 5-5.4 cm every 6 months',
    ],
    references: [
      'USPSTF AAA Screening Recommendation. 2019.',
      'SVS Practice Guidelines for AAA. 2018.',
    ],
  },
  {
    id: 'ct-liver-lesions',
    name: 'CT: Liver Lesion Characterization',
    category: 'ct-interpretation',
    description:
      'Multiphasic CT characterization of common hepatic lesions with enhancement patterns.',
    technique:
      'Multiphasic CT: non-contrast, arterial phase (25-30s), portal venous (70s), delayed (3-5 min). Thin slices with multiplanar reformats.',
    normalAppearance:
      'Homogeneous liver parenchyma enhancing uniformly. No focal lesions. Normal hepatic vasculature.',
    abnormalFindings: [
      'Simple cyst: water density, no enhancement, sharp margins',
      'Hemangioma: peripheral nodular enhancement with progressive centripetal fill-in',
      'FNH: arterial enhancement with central scar (delayed enhancement of scar)',
      'Hepatocellular adenoma: heterogeneous arterial enhancement, risk of hemorrhage',
      'HCC: arterial enhancement + washout in portal venous/delayed phase (LI-RADS)',
      'Metastasis: variable; colorectal mets hypodense on PV phase; neuroendocrine mets hypervascular',
    ],
    differentialDiagnosis: [
      'Hypervascular lesions: HCC, FNH, adenoma, hypervascular metastases (RCC, melanoma, NET)',
      'Hypovascular lesions: cyst, metastases (GI, lung), abscess',
      'Flash-filling lesion in arterial phase: hemangioma vs. AV shunt vs. hypervascular tumor',
    ],
    clinicalCorrelation:
      'LI-RADS categorizes liver observations in at-risk patients (chronic liver disease) from LR-1 (definitely benign) to LR-5 (definitely HCC). Arterial phase hyperenhancement + portal venous washout + enhancing capsule = LR-5 (HCC, no biopsy needed). MRI with hepatobiliary contrast (Eovist) adds specificity.',
    keyPearls: [
      'Hemangioma: peripheral nodular enhancement, progressive fill-in (pathognomonic)',
      'FNH: homogeneous arterial blush with central scar (scar enhances on delayed)',
      'HCC (LI-RADS): arterial enhancement + washout + capsule = LR-5',
      'Multiphasic CT essential: different lesions visible in different phases',
      'MRI with Eovist (hepatobiliary phase): FNH retains contrast; adenoma/HCC do not',
    ],
    references: [
      'ACR LI-RADS v2018. CT/MRI Diagnostic Table.',
      'Defined by Elsayes KM et al. RadioGraphics. Hepatic Imaging. 2019.',
    ],
  },
  {
    id: 'ir-embolization',
    name: 'Interventional Radiology: Embolization',
    category: 'interventional',
    description:
      'Catheter-based embolization techniques for hemorrhage control, tumor treatment, and vascular malformations.',
    technique:
      'Femoral or radial arterial access. Selective/superselective catheterization under fluoroscopy. Embolic agents: coils, particles, gelatin sponge, glue, Onyx. Angiographic confirmation of vessel occlusion.',
    normalAppearance:
      'N/A - interventional procedure.',
    abnormalFindings: [
      'Active contrast extravasation (bleeding source)',
      'Pseudoaneurysm (contained vascular injury)',
      'AVM nidus and feeding vessels',
      'Tumor blush (hypervascular tumor)',
      'Post-embolization: absent flow to target territory',
    ],
    differentialDiagnosis: [
      'GI bleeding source: upper vs. lower, arterial vs. venous',
      'Post-traumatic hemorrhage: solid organ, pelvic fracture, mesenteric',
      'Uterine fibroid embolization vs. surgical myomectomy',
      'TACE for HCC (transarterial chemoembolization)',
    ],
    clinicalCorrelation:
      'Embolization is first-line for many hemorrhagic emergencies in hemodynamically stable patients. GI bleeding requires active rate >0.5 mL/min for angiographic detection. Pelvic fracture hemorrhage increasingly managed by IR embolization. UAE (uterine artery embolization) is established treatment for symptomatic fibroids.',
    keyPearls: [
      'Angiographic detection of bleeding requires >0.5 mL/min active hemorrhage',
      'CTA before angiography helps localize bleeding source and plan approach',
      'Coils for vessel occlusion; particles for tumor/diffuse bleeding; gelfoam for temporary hemostasis',
      'TACE: chemoembolization of HCC (embolic particles loaded with chemotherapy)',
      'Post-embolization syndrome: fever, pain, nausea (expected, not a complication)',
    ],
    references: [
      'SIR Quality Improvement Guidelines for Embolization.',
      'AASLD Guidelines for HCC - Locoregional Therapy.',
    ],
  },
];

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Search entries by query string across name, description, findings, and pearls. */
export const searchRadiologyEntries = (query: string): RadiologyEntry[] => {
  const q = query.toLowerCase();
  return radiologyDatabase.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.abnormalFindings.some((f) => f.toLowerCase().includes(q)) ||
      e.differentialDiagnosis.some((d) => d.toLowerCase().includes(q)) ||
      e.keyPearls.some((p) => p.toLowerCase().includes(q)) ||
      e.clinicalCorrelation.toLowerCase().includes(q),
  );
};

/** Filter entries by one or more categories. */
export const filterByCategory = (
  categories: RadiologyCategory[],
): RadiologyEntry[] =>
  radiologyDatabase.filter((e) => categories.includes(e.category));

/** Get a single entry by its unique id, or undefined if not found. */
export const getEntryById = (id: string): RadiologyEntry | undefined =>
  radiologyDatabase.find((e) => e.id === id);
