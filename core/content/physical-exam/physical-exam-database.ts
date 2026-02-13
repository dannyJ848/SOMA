/**
 * Physical Examination Database - Comprehensive Reference
 *
 * Searchable database of physical exam maneuvers, findings, and clinical
 * correlations for medical education. Covers all major exam categories.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PhysicalExamCategory =
  | 'general'
  | 'cardiovascular'
  | 'respiratory'
  | 'abdominal'
  | 'neurological'
  | 'musculoskeletal'
  | 'head-neck'
  | 'skin'
  | 'psychiatric'
  | 'pediatric';

export interface PhysicalExamEntry {
  id: string;
  name: string;
  category: PhysicalExamCategory;
  description: string;
  technique: string;
  normalFindings: string[];
  abnormalFindings: string[];
  clinicalSignificance: string;
  associatedConditions: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const physicalExamDatabase: PhysicalExamEntry[] = [
  // ========================================================================
  // GENERAL EXAMINATION
  // ========================================================================
  {
    id: 'gen-vital-signs',
    name: 'Vital Signs Assessment',
    category: 'general',
    description: 'Measurement of temperature, heart rate, blood pressure, respiratory rate, and oxygen saturation.',
    technique: 'Measure temperature (oral, tympanic, or temporal), HR via radial pulse for 15-60 s, BP with appropriately sized cuff at heart level, RR counted unobtrusively over 30-60 s, SpO2 via pulse oximetry.',
    normalFindings: [
      'Temp 36.1-37.2 °C (97-99 °F)',
      'HR 60-100 bpm, regular',
      'BP < 120/80 mmHg',
      'RR 12-20 breaths/min',
      'SpO2 ≥ 95% on room air',
    ],
    abnormalFindings: [
      'Fever > 38 °C (100.4 °F)',
      'Tachycardia > 100 bpm or bradycardia < 60 bpm',
      'Hypertension ≥ 130/80 mmHg',
      'Tachypnea > 20 breaths/min',
      'Hypoxia SpO2 < 90%',
    ],
    clinicalSignificance: 'Vital signs are the first objective data obtained; abnormalities may signal infection, hemodynamic instability, respiratory failure, or pain.',
    associatedConditions: ['Sepsis', 'Hypertensive emergency', 'COPD exacerbation', 'Heart failure', 'Shock'],
    keyPearls: [
      'Orthostatic vitals (lying → sitting → standing) detect volume depletion',
      'Use appropriately sized BP cuff to avoid falsely elevated readings',
      'Count RR before the patient is aware you are observing',
    ],
    references: ['Bates\' Guide to Physical Examination, Ch. 4', 'AHA 2017 Hypertension Guidelines'],
  },
  {
    id: 'gen-bmi',
    name: 'Body Mass Index',
    category: 'general',
    description: 'Calculated measure of body composition using height and weight.',
    technique: 'Measure height with stadiometer (shoes removed) and weight on calibrated scale. BMI = weight (kg) / height (m)².',
    normalFindings: ['BMI 18.5-24.9 kg/m² (normal weight)'],
    abnormalFindings: [
      'BMI < 18.5 (underweight)',
      'BMI 25-29.9 (overweight)',
      'BMI ≥ 30 (obese)',
      'BMI ≥ 40 (morbidly obese)',
    ],
    clinicalSignificance: 'BMI is a screening tool for weight-related health risk but does not distinguish fat mass from lean mass.',
    associatedConditions: ['Obesity', 'Metabolic syndrome', 'Type 2 diabetes', 'Anorexia nervosa', 'Malnutrition'],
    keyPearls: [
      'BMI overestimates adiposity in muscular individuals',
      'Waist circumference > 40 in (M) or > 35 in (F) adds cardiovascular risk independent of BMI',
      'Pediatric BMI uses age/sex-specific percentiles',
    ],
    references: ['WHO BMI Classification', 'NHLBI Obesity Guidelines'],
  },
  {
    id: 'gen-habitus',
    name: 'General Appearance and Body Habitus',
    category: 'general',
    description: 'Observation of overall body build, posture, nutritional status, and level of distress.',
    technique: 'Observe patient from doorway: state of alertness, body build (asthenic, sthenic, hypersthenic), grooming, affect, mobility, respiratory effort, and apparent age versus stated age.',
    normalFindings: [
      'Alert, well-nourished, well-developed',
      'Appears stated age',
      'No acute distress',
      'Appropriate grooming and hygiene',
    ],
    abnormalFindings: [
      'Cachectic or wasted appearance',
      'Cushingoid habitus (central obesity, moon facies, buffalo hump)',
      'Marfanoid habitus (tall, thin, long limbs, arachnodactyly)',
      'Acute distress, diaphoresis, labored breathing',
    ],
    clinicalSignificance: 'The general survey begins forming a differential before any focused exam. Body habitus may suggest endocrine, genetic, or chronic disease.',
    associatedConditions: ['Cushing syndrome', 'Marfan syndrome', 'Cachexia (malignancy)', 'Hypothyroidism', 'Acromegaly'],
    keyPearls: [
      'Document "appears older/younger than stated age" when discrepant',
      'Cushingoid features may result from exogenous corticosteroids',
      'Cachexia in a young patient raises concern for malignancy or chronic infection',
    ],
    references: ['Bates\' Guide to Physical Examination, Ch. 4', 'DeGowin\'s Diagnostic Examination'],
  },

  // ========================================================================
  // CARDIOVASCULAR
  // ========================================================================
  {
    id: 'cv-heart-sounds',
    name: 'Heart Sound Auscultation',
    category: 'cardiovascular',
    description: 'Systematic listening to heart sounds at the four classic valve areas using diaphragm and bell of the stethoscope.',
    technique: 'Auscultate in sequence: aortic (R 2nd ICS), pulmonic (L 2nd ICS), Erb point (L 3rd ICS), tricuspid (L lower sternal border), mitral/apex (L 5th ICS MCL). Use diaphragm for high-pitched sounds (S1, S2, aortic regurgitation) and bell for low-pitched sounds (S3, S4, mitral stenosis).',
    normalFindings: ['S1 loudest at apex', 'S2 loudest at base', 'S2 physiologic splitting with inspiration', 'No extra sounds or murmurs'],
    abnormalFindings: ['Diminished S1 (first-degree AV block)', 'Fixed split S2 (ASD)', 'Paradoxical split S2 (LBBB, aortic stenosis)', 'S3 gallop (volume overload)', 'S4 gallop (stiff ventricle)'],
    clinicalSignificance: 'Heart sounds provide real-time assessment of valvular function, hemodynamics, and myocardial compliance.',
    associatedConditions: ['Heart failure', 'Atrial septal defect', 'Aortic stenosis', 'Hypertension (S4)', 'Dilated cardiomyopathy'],
    keyPearls: [
      'S3 is normal in young adults and pregnancy but pathologic after age 40 (suggests HFrEF)',
      'S4 always pathologic; indicates reduced ventricular compliance',
      'Patient positioning matters: left lateral decubitus accentuates mitral sounds',
    ],
    references: ['Bates\' Guide, Ch. 9', 'Braunwald\'s Heart Disease'],
  },
  {
    id: 'cv-murmurs',
    name: 'Heart Murmur Evaluation',
    category: 'cardiovascular',
    description: 'Characterization of cardiac murmurs by timing, location, radiation, intensity, shape, and pitch.',
    technique: 'Grade murmur I-VI. Determine timing (systolic vs diastolic). Identify location of maximum intensity, radiation, and response to maneuvers (Valsalva, squatting, standing, handgrip).',
    normalFindings: ['No murmur auscultated', 'Innocent flow murmur may be present in children/young adults (grade I-II/VI, systolic, no radiation)'],
    abnormalFindings: [
      'Crescendo-decrescendo systolic murmur at R upper sternal border radiating to carotids (aortic stenosis)',
      'Holosystolic murmur at apex radiating to axilla (mitral regurgitation)',
      'Diastolic decrescendo murmur at L sternal border (aortic regurgitation)',
      'Low-pitched diastolic rumble at apex (mitral stenosis)',
      'Harsh systolic murmur increasing with Valsalva (HOCM)',
    ],
    clinicalSignificance: 'Murmurs may indicate valvular heart disease requiring echocardiographic confirmation and potential surgical intervention.',
    associatedConditions: ['Aortic stenosis', 'Mitral regurgitation', 'Mitral valve prolapse', 'HOCM', 'Rheumatic heart disease'],
    keyPearls: [
      'Diastolic murmurs are always pathologic',
      'Valsalva decreases preload—murmurs decrease except HOCM and MVP which increase',
      'Squatting increases preload and afterload—opposite effect of Valsalva',
    ],
    references: ['Bates\' Guide, Ch. 9', 'ACC/AHA Valvular Heart Disease Guidelines'],
  },
  {
    id: 'cv-jvd',
    name: 'Jugular Venous Distension (JVP)',
    category: 'cardiovascular',
    description: 'Assessment of central venous pressure by observing the internal jugular vein pulsation.',
    technique: 'Position patient supine at 30-45°. Turn head slightly left. Identify internal jugular vein pulsation (not palpable, double waveform, varies with respiration). Measure vertical height from sternal angle to top of pulsation; add 5 cm for RA position.',
    normalFindings: ['JVP ≤ 8 cm H2O (≤ 3 cm above sternal angle)'],
    abnormalFindings: [
      'Elevated JVP > 8 cm H2O (volume overload, RV failure)',
      'Kussmaul sign (JVP rises with inspiration—constrictive pericarditis)',
      'Cannon A waves (AV dissociation)',
      'Absent X descent (atrial fibrillation)',
    ],
    clinicalSignificance: 'JVP is a bedside estimate of right atrial pressure. Elevation suggests right heart failure, volume overload, or pericardial disease.',
    associatedConditions: ['Right heart failure', 'Constrictive pericarditis', 'Cardiac tamponade', 'Tricuspid regurgitation', 'Superior vena cava syndrome'],
    keyPearls: [
      'Differentiate JVP from carotid pulse: JVP is non-palpable, has double waveform, and drops with inspiration',
      'Hepatojugular reflux (sustained JVP rise with 15 s RUQ pressure) suggests HF',
      'JVP cannot be assessed in patients with central venous catheters on that side',
    ],
    references: ['Bates\' Guide, Ch. 9', 'McGee\'s Evidence-Based Physical Diagnosis'],
  },
  {
    id: 'cv-peripheral-pulses',
    name: 'Peripheral Pulse Examination',
    category: 'cardiovascular',
    description: 'Palpation and grading of arterial pulses to assess peripheral vascular perfusion.',
    technique: 'Palpate bilaterally: radial, brachial, carotid (one at a time), femoral, popliteal, dorsalis pedis, posterior tibial. Grade 0 (absent), 1+ (diminished), 2+ (normal), 3+ (bounding). Note rate, rhythm, contour, and symmetry.',
    normalFindings: ['All pulses 2+ bilaterally', 'Regular rhythm', 'Normal contour (smooth upstroke and downstroke)', 'Symmetric'],
    abnormalFindings: [
      'Absent or diminished pulses (PAD, arterial occlusion)',
      'Radio-femoral delay (coarctation of aorta)',
      'Pulsus alternans (alternating strong/weak—severe LV dysfunction)',
      'Pulsus paradoxus (> 10 mmHg drop in SBP with inspiration—tamponade)',
      'Water-hammer pulse (aortic regurgitation)',
    ],
    clinicalSignificance: 'Asymmetric or absent pulses indicate vascular obstruction; pulse contour abnormalities reflect cardiac pathology.',
    associatedConditions: ['Peripheral artery disease', 'Aortic coarctation', 'Cardiac tamponade', 'Aortic regurgitation', 'Aortic dissection'],
    keyPearls: [
      'Always check dorsalis pedis and posterior tibial in diabetics',
      'ABI < 0.9 is diagnostic for PAD',
      'Pulsus paradoxus > 10 mmHg: think tamponade, severe asthma, or tension pneumothorax',
    ],
    references: ['Bates\' Guide, Ch. 9', 'AHA/ACC PAD Guidelines'],
  },

  // ========================================================================
  // RESPIRATORY
  // ========================================================================
  {
    id: 'resp-auscultation',
    name: 'Lung Auscultation',
    category: 'respiratory',
    description: 'Systematic listening to breath sounds over all lung fields to identify normal and adventitious sounds.',
    technique: 'Patient sitting upright, breathing deeply through open mouth. Auscultate anterior (apex to base) and posterior (apex to base) using diaphragm. Compare side to side at each level. Minimum 6 posterior and 4 anterior sites.',
    normalFindings: [
      'Vesicular breath sounds over peripheral lung fields (soft, low-pitched, inspiration > expiration)',
      'Bronchovesicular at mainstem bronchi (1st/2nd ICS anteriorly, between scapulae)',
      'Bronchial/tubular over trachea (loud, high-pitched, expiration > inspiration)',
    ],
    abnormalFindings: [
      'Crackles/rales (fine: pulmonary fibrosis, CHF; coarse: pneumonia, bronchiectasis)',
      'Wheezes (high-pitched: asthma, COPD; fixed monophonic: focal obstruction)',
      'Rhonchi (low-pitched: secretions in large airways)',
      'Stridor (inspiratory: upper airway obstruction—emergency)',
      'Diminished/absent breath sounds (pleural effusion, pneumothorax, COPD)',
    ],
    clinicalSignificance: 'Auscultation localizes pulmonary pathology and assesses severity of airway obstruction or parenchymal disease.',
    associatedConditions: ['Pneumonia', 'Asthma', 'COPD', 'Pulmonary fibrosis', 'Pleural effusion', 'Pneumothorax'],
    keyPearls: [
      'Fine crackles that persist after cough suggest fibrosis; those that clear suggest fluid',
      'Silent chest in asthma = severe obstruction—emergent',
      'Egophony (E→A change) suggests consolidation above an effusion',
    ],
    references: ['Bates\' Guide, Ch. 8', 'Murray & Nadel\'s Textbook of Respiratory Medicine'],
  },
  {
    id: 'resp-percussion',
    name: 'Chest Percussion',
    category: 'respiratory',
    description: 'Tapping the chest wall to determine underlying tissue density (air, fluid, or solid).',
    technique: 'Place non-dominant hand firmly on chest wall with middle finger pressed against ICS. Tap distal interphalangeal joint sharply with dominant middle finger. Compare symmetrically. Percuss anterior, lateral, and posterior thorax.',
    normalFindings: ['Resonant percussion note over all lung fields', 'Dullness over heart, liver, and scapulae', 'Tympany over gastric bubble (Traube space)'],
    abnormalFindings: [
      'Dullness (consolidation, pleural effusion, mass)',
      'Hyperresonance (pneumothorax, emphysema)',
      'Flatness (large pleural effusion, dense mass)',
      'Shifting dullness on lateral decubitus (free-flowing effusion)',
    ],
    clinicalSignificance: 'Percussion differentiates air-filled from fluid-filled or solid structures and identifies diaphragm excursion.',
    associatedConditions: ['Pleural effusion', 'Pneumothorax', 'Lobar pneumonia', 'Emphysema', 'Lung mass'],
    keyPearls: [
      'Diaphragmatic excursion: normally 3-5 cm; reduced in COPD or phrenic nerve palsy',
      'Stony dullness strongly suggests effusion over consolidation',
      'Hyperresonance with tracheal deviation and absent breath sounds = tension pneumothorax',
    ],
    references: ['Bates\' Guide, Ch. 8', 'DeGowin\'s Diagnostic Examination'],
  },
  {
    id: 'resp-tactile-fremitus',
    name: 'Tactile Fremitus',
    category: 'respiratory',
    description: 'Palpation of vibrations transmitted through the chest wall when the patient speaks.',
    technique: 'Place ulnar surface of hands on symmetric chest areas. Ask patient to say "ninety-nine" or "one-one-one." Compare vibration intensity side to side. Assess anterior and posterior.',
    normalFindings: ['Symmetric vibration bilaterally', 'More prominent over central airways', 'Less prominent peripherally and at bases'],
    abnormalFindings: [
      'Increased fremitus (consolidation—sound transmits better through solid)',
      'Decreased/absent fremitus (effusion, pneumothorax, thick chest wall, bronchial obstruction)',
    ],
    clinicalSignificance: 'Fremitus combined with percussion and auscultation helps distinguish consolidation from effusion from pneumothorax.',
    associatedConditions: ['Pneumonia (increased)', 'Pleural effusion (decreased)', 'Pneumothorax (absent)', 'Endobronchial lesion (decreased distal)'],
    keyPearls: [
      'Consolidation triad: increased fremitus, dullness to percussion, bronchial breath sounds',
      'Effusion triad: decreased fremitus, stony dullness, decreased breath sounds',
      'Pneumothorax triad: absent fremitus, hyperresonance, absent breath sounds',
    ],
    references: ['Bates\' Guide, Ch. 8', 'Sapira\'s Art and Science of Bedside Diagnosis'],
  },

  // ========================================================================
  // ABDOMINAL
  // ========================================================================
  {
    id: 'abd-inspection',
    name: 'Abdominal Inspection',
    category: 'abdominal',
    description: 'Visual examination of the abdomen for contour, symmetry, skin changes, and visible peristalsis.',
    technique: 'Patient supine with arms at sides. Expose abdomen from xiphoid to symphysis pubis. Inspect from the side and above for contour (flat, scaphoid, distended, protuberant), symmetry, skin (scars, striae, spider angiomata, caput medusae), visible masses, and peristalsis.',
    normalFindings: ['Flat or slightly rounded contour', 'Symmetric', 'No visible masses or pulsations', 'No skin discoloration or scars (unless surgical history)'],
    abnormalFindings: [
      'Distension (ascites, obstruction, ileus, mass, pregnancy)',
      'Scaphoid/sunken (malnutrition, dehydration)',
      'Caput medusae (portal hypertension)',
      'Cullen sign (periumbilical ecchymosis—hemoperitoneum)',
      'Grey Turner sign (flank ecchymosis—retroperitoneal hemorrhage)',
    ],
    clinicalSignificance: 'Inspection can reveal cirrhosis, bowel obstruction, hemorrhage, or surgical history before palpation.',
    associatedConditions: ['Ascites', 'Bowel obstruction', 'Pancreatitis (Cullen/Grey Turner)', 'Portal hypertension', 'Ectopic pregnancy'],
    keyPearls: [
      'Always inspect before auscultating and palpating',
      'Cullen and Grey Turner signs take 24-48 h to appear after hemorrhage',
      'Visible peristalsis suggests bowel obstruction, especially in thin patients',
    ],
    references: ['Bates\' Guide, Ch. 11', 'Sabiston Textbook of Surgery'],
  },
  {
    id: 'abd-auscultation',
    name: 'Abdominal Auscultation',
    category: 'abdominal',
    description: 'Listening to bowel sounds and vascular bruits before palpation to avoid altering motility.',
    technique: 'Use diaphragm in RLQ (ileocecal area). Listen for at least 2 minutes before declaring absent bowel sounds. Auscultate for bruits over aorta, renal arteries, iliac arteries, and femoral arteries.',
    normalFindings: ['Bowel sounds present, 5-34 per minute, intermittent clicks/gurgles', 'No vascular bruits'],
    abnormalFindings: [
      'Hyperactive/high-pitched (early obstruction, gastroenteritis, GI bleed)',
      'Absent bowel sounds (ileus, peritonitis—listen full 2 min)',
      'Succussion splash (gastric outlet obstruction)',
      'Abdominal bruit (renal artery stenosis, AAA, hepatic vascular tumor)',
    ],
    clinicalSignificance: 'Bowel sounds assess GI motility; bruits may indicate renovascular hypertension or aneurysm.',
    associatedConditions: ['Bowel obstruction', 'Ileus', 'Renal artery stenosis', 'Abdominal aortic aneurysm', 'Peritonitis'],
    keyPearls: [
      'Auscultate BEFORE palpation—palpation can stimulate bowel sounds',
      'High-pitched tinkling sounds with rushes suggest mechanical obstruction',
      'Abdominal bruits with hypertension suggest renovascular disease',
    ],
    references: ['Bates\' Guide, Ch. 11', 'Schwartz\'s Principles of Surgery'],
  },
  {
    id: 'abd-palpation',
    name: 'Abdominal Palpation',
    category: 'abdominal',
    description: 'Light and deep palpation to assess tenderness, organomegaly, masses, and peritoneal signs.',
    technique: 'Light palpation first (1 cm depth) all four quadrants, then deep (4-5 cm). Start farthest from pain. Assess for tenderness, guarding (voluntary vs involuntary), rebound tenderness (Blumberg sign), rigidity, masses, and organomegaly.',
    normalFindings: ['Soft, non-tender', 'No guarding or rigidity', 'No masses palpable', 'Liver edge may be palpable at costal margin with inspiration', 'Spleen not palpable'],
    abnormalFindings: [
      'Involuntary guarding (peritoneal irritation)',
      'Rebound tenderness (peritonitis)',
      'Board-like rigidity (diffuse peritonitis—surgical emergency)',
      'Palpable mass (tumor, hernia, organomegaly)',
      'Hepatomegaly (> 12 cm span by percussion)',
      'Splenomegaly (palpable below costal margin)',
    ],
    clinicalSignificance: 'Palpation identifies surgical emergencies (peritonitis) and guides differential diagnosis based on location and quality of tenderness.',
    associatedConditions: ['Appendicitis', 'Cholecystitis', 'Peritonitis', 'Hepatomegaly', 'Splenomegaly', 'Abdominal aortic aneurysm'],
    keyPearls: [
      'Involuntary guarding is more significant than voluntary guarding',
      'Board-like rigidity = diffuse peritonitis until proven otherwise',
      'A pulsatile, expansile mass in the epigastrium suggests AAA—do not palpate aggressively',
    ],
    references: ['Bates\' Guide, Ch. 11', 'Cope\'s Early Diagnosis of the Acute Abdomen'],
  },
  {
    id: 'abd-murphy-sign',
    name: 'Murphy Sign',
    category: 'abdominal',
    description: 'Palpation maneuver to detect acute cholecystitis by eliciting pain on gallbladder compression during inspiration.',
    technique: 'Hook fingers under R costal margin at MCL. Ask patient to take a deep breath. Positive: patient abruptly stops inspiration (inspiratory arrest) due to pain as inflamed gallbladder descends onto examiner\'s fingers.',
    normalFindings: ['Negative Murphy sign—patient completes inspiration without pain'],
    abnormalFindings: ['Positive Murphy sign (inspiratory arrest with RUQ pain)'],
    clinicalSignificance: 'Positive Murphy sign has ~97% sensitivity for acute cholecystitis when combined with RUQ pain and fever.',
    associatedConditions: ['Acute cholecystitis', 'Cholelithiasis', 'Biliary colic'],
    keyPearls: [
      'Sonographic Murphy sign (pain when ultrasound probe compresses gallbladder) is even more specific',
      'Elderly and diabetic patients may have blunted Murphy sign despite cholecystitis',
      'Charcot triad (RUQ pain, fever, jaundice) suggests cholangitis, not just cholecystitis',
    ],
    references: ['Bates\' Guide, Ch. 11', 'Sabiston Textbook of Surgery'],
  },
  {
    id: 'abd-mcburney-point',
    name: 'McBurney Point Tenderness',
    category: 'abdominal',
    description: 'Assessment of point tenderness at McBurney point, the classic location for appendicitis pain.',
    technique: 'Locate McBurney point: one-third the distance from the ASIS to the umbilicus on the right. Apply deep palpation. Positive: maximal tenderness at this location.',
    normalFindings: ['No tenderness at McBurney point'],
    abnormalFindings: ['Point tenderness at McBurney point', 'Rebound tenderness at McBurney point'],
    clinicalSignificance: 'McBurney point tenderness is the classic finding of acute appendicitis, though appendix location varies.',
    associatedConditions: ['Acute appendicitis', 'Mesenteric lymphadenitis', 'Meckel diverticulitis'],
    keyPearls: [
      'Retrocecal appendix may present with flank or back pain rather than McBurney tenderness',
      'Pelvic appendix may cause suprapubic pain or rectal tenderness',
      'In pregnancy, the appendix shifts superiorly—tenderness may be in RUQ',
    ],
    references: ['Bates\' Guide, Ch. 11', 'Schwartz\'s Principles of Surgery'],
  },
  {
    id: 'abd-rovsing-sign',
    name: 'Rovsing Sign',
    category: 'abdominal',
    description: 'Referred RLQ pain elicited by palpation of the LLQ, suggesting peritoneal irritation from appendicitis.',
    technique: 'Apply deep palpation in the LLQ. Positive: patient reports pain in the RLQ (referred pain).',
    normalFindings: ['No referred pain to RLQ with LLQ palpation'],
    abnormalFindings: ['RLQ pain elicited by LLQ palpation (positive Rovsing sign)'],
    clinicalSignificance: 'Rovsing sign suggests peritoneal inflammation in the RLQ and supports the diagnosis of acute appendicitis.',
    associatedConditions: ['Acute appendicitis', 'Peritonitis'],
    keyPearls: [
      'Mechanism: LLQ pressure shifts peritoneal fluid/gas toward inflamed RLQ, causing pain',
      'Combine with psoas sign (pain with R hip extension) and obturator sign (pain with R hip internal rotation) for retrocecal/pelvic appendicitis',
      'Alvarado score combines clinical findings and labs to stratify appendicitis risk',
    ],
    references: ['Cope\'s Early Diagnosis of the Acute Abdomen', 'Annals of Surgery'],
  },

  // ========================================================================
  // NEUROLOGICAL
  // ========================================================================
  {
    id: 'neuro-cranial-nerves',
    name: 'Cranial Nerve Examination',
    category: 'neurological',
    description: 'Systematic evaluation of all 12 cranial nerves assessing sensory, motor, and special functions.',
    technique: 'CN I: smell identification. CN II: visual acuity, visual fields, fundoscopy. CN III/IV/VI: extraocular movements, pupil reaction (PERRLA). CN V: facial sensation (3 divisions), masseter strength, corneal reflex. CN VII: facial expression (raise eyebrows, smile, puff cheeks). CN VIII: hearing (whisper, Rinne, Weber). CN IX/X: palate elevation ("ah"), gag reflex. CN XI: SCM and trapezius strength. CN XII: tongue protrusion, look for deviation/fasciculations.',
    normalFindings: [
      'All 12 cranial nerves intact',
      'PERRLA (pupils equal, round, reactive to light and accommodation)',
      'Full extraocular movements without nystagmus',
      'Symmetric facial movements',
      'Midline tongue protrusion',
    ],
    abnormalFindings: [
      'CN III palsy (ptosis, "down and out" eye, fixed dilated pupil)',
      'CN VII palsy: upper motor neuron (forehead spared) vs lower motor neuron (entire face, Bell palsy)',
      'CN XII lesion (tongue deviates toward lesion side)',
      'Relative afferent pupillary defect (Marcus Gunn pupil—optic nerve disease)',
    ],
    clinicalSignificance: 'Cranial nerve deficits localize lesions in the brainstem, skull base, or peripheral nerve pathways.',
    associatedConditions: ['Stroke', 'Bell palsy', 'Acoustic neuroma', 'Multiple sclerosis', 'Myasthenia gravis', 'Brain tumor'],
    keyPearls: [
      'UMN CN VII: forehead spared (bilateral cortical innervation); LMN: entire face affected',
      'CN III palsy with pupil involvement suggests posterior communicating artery aneurysm—emergency',
      '"Down and out" eye = CN III palsy; intorted eye cannot look down = CN IV palsy',
    ],
    references: ['Bates\' Guide, Ch. 17', 'Adams and Victor\'s Principles of Neurology'],
  },
  {
    id: 'neuro-dtr',
    name: 'Deep Tendon Reflexes',
    category: 'neurological',
    description: 'Testing monosynaptic stretch reflexes to assess the integrity of spinal cord segments and peripheral nerves.',
    technique: 'Use reflex hammer. Strike tendon briskly with patient relaxed. Test bilaterally: biceps (C5-C6), brachioradialis (C5-C6), triceps (C6-C7), patellar (L2-L4), Achilles (S1-S2). Grade: 0 (absent), 1+ (hypoactive), 2+ (normal), 3+ (hyperactive without clonus), 4+ (hyperactive with clonus). Test Babinski (plantar reflex).',
    normalFindings: ['2+ symmetric reflexes throughout', 'Downgoing toes (flexor plantar response)'],
    abnormalFindings: [
      'Hyperreflexia with clonus (UMN lesion)',
      'Hyporeflexia/areflexia (LMN lesion, peripheral neuropathy)',
      'Upgoing toe (Babinski sign—UMN lesion in adults)',
      'Asymmetric reflexes (lateralizing sign)',
    ],
    clinicalSignificance: 'Reflex patterns distinguish upper motor neuron (hyperreflexia, Babinski) from lower motor neuron (hyporeflexia) pathology.',
    associatedConditions: ['Spinal cord compression', 'Multiple sclerosis', 'Peripheral neuropathy', 'ALS (combined UMN/LMN)', 'Stroke'],
    keyPearls: [
      'Babinski sign is normal in infants < 12 months (immature corticospinal tract)',
      'Jendrassik maneuver (interlocking fingers and pulling) enhances reflexes in anxious patients',
      'Clonus (≥ 3 beats) at the ankle is pathologic and indicates UMN lesion',
    ],
    references: ['Bates\' Guide, Ch. 17', 'Campbell\'s DeJong\'s The Neurologic Examination'],
  },
  {
    id: 'neuro-cerebellar',
    name: 'Cerebellar Examination',
    category: 'neurological',
    description: 'Assessment of coordination, balance, and smooth motor control mediated by the cerebellum.',
    technique: 'Finger-to-nose (FTN): patient touches own nose then examiner\'s finger, repeat. Heel-to-shin (HTS): run heel down opposite shin. Rapid alternating movements (RAM): pronation/supination of hands. Romberg test: stand with feet together, eyes closed. Gait assessment: tandem walk (heel-to-toe), walking on heels and toes.',
    normalFindings: ['Accurate FTN without dysmetria', 'Smooth HTS', 'Rapid alternating movements fluid', 'Negative Romberg (steady with eyes closed)', 'Normal tandem gait'],
    abnormalFindings: [
      'Dysmetria (past-pointing on FTN)',
      'Intention tremor (worsens approaching target)',
      'Dysdiadochokinesia (clumsy RAM)',
      'Positive Romberg (falls with eyes closed—sensory ataxia)',
      'Wide-based, staggering gait (cerebellar ataxia)',
    ],
    clinicalSignificance: 'Cerebellar signs localize pathology to the cerebellum or its connections; acute onset suggests stroke or demyelination.',
    associatedConditions: ['Cerebellar stroke', 'Multiple sclerosis', 'Chronic alcohol use', 'Friedreich ataxia', 'Posterior fossa tumor'],
    keyPearls: [
      'Romberg tests proprioception, not cerebellum—cerebellar ataxia is present with eyes open',
      'Cerebellar hemisphere lesions cause ipsilateral limb ataxia',
      'Midline (vermis) lesions cause truncal ataxia and wide-based gait',
    ],
    references: ['Bates\' Guide, Ch. 17', 'Adams and Victor\'s Principles of Neurology'],
  },
  {
    id: 'neuro-sensory',
    name: 'Sensory Examination',
    category: 'neurological',
    description: 'Testing of primary sensory modalities (light touch, pain, temperature, vibration, proprioception) and cortical sensory functions.',
    technique: 'Light touch: cotton wisp. Pain: disposable pin (sharp vs dull). Temperature: cool tuning fork. Vibration: 128 Hz tuning fork on bony prominences distally to proximally. Proprioception: move distal phalanx up/down with patient\'s eyes closed. Cortical: stereognosis, graphesthesia, two-point discrimination, extinction to double simultaneous stimulation.',
    normalFindings: ['Intact light touch, pain, temperature bilaterally', 'Vibration intact distally', 'Proprioception intact in toes/fingers', 'Cortical sensory functions intact'],
    abnormalFindings: [
      'Stocking-glove distribution loss (peripheral neuropathy)',
      'Dermatomal sensory loss (radiculopathy)',
      'Sensory level (spinal cord lesion)',
      'Hemisensory loss (thalamic stroke)',
      'Dissociated sensory loss—loss of pain/temp with preserved touch (syringomyelia, Brown-Séquard)',
    ],
    clinicalSignificance: 'Sensory patterns localize lesions to peripheral nerves, roots, spinal cord, or brain.',
    associatedConditions: ['Diabetic neuropathy', 'Carpal tunnel syndrome', 'Spinal cord compression', 'Stroke', 'Syringomyelia', 'B12 deficiency'],
    keyPearls: [
      'Always test distal before proximal—neuropathy affects longest fibers first',
      'Vibration and proprioception travel in dorsal columns; pain/temperature in spinothalamic tract',
      'Brown-Séquard (cord hemisection): ipsilateral motor/proprioception loss, contralateral pain/temp loss',
    ],
    references: ['Bates\' Guide, Ch. 17', 'Campbell\'s DeJong\'s The Neurologic Examination'],
  },
  {
    id: 'neuro-motor',
    name: 'Motor Examination',
    category: 'neurological',
    description: 'Assessment of muscle bulk, tone, strength, and involuntary movements.',
    technique: 'Inspect for atrophy, fasciculations, and involuntary movements. Test tone by passive range of motion at wrists, elbows, knees. Grade strength 0-5 (MRC scale) for major muscle groups bilaterally: deltoids (C5), biceps (C5-6), wrist extensors (C6-7), triceps (C7), grip (C8-T1), hip flexors (L1-2), quads (L3-4), ankle dorsiflexors (L4-5), plantarflexors (S1-2).',
    normalFindings: ['5/5 strength throughout', 'Normal bulk and tone bilaterally', 'No fasciculations or involuntary movements'],
    abnormalFindings: [
      'UMN pattern: spasticity (velocity-dependent increased tone), clasp-knife, no atrophy early',
      'LMN pattern: flaccidity, atrophy, fasciculations',
      'Rigidity (lead-pipe or cogwheel—Parkinson disease)',
      'Pronator drift (subtle UMN weakness)',
    ],
    clinicalSignificance: 'Motor exam distinguishes UMN from LMN lesions and localizes to specific nerve roots or peripheral nerves.',
    associatedConditions: ['Stroke', 'ALS', 'Myasthenia gravis', 'Parkinson disease', 'Guillain-Barré syndrome', 'Radiculopathy'],
    keyPearls: [
      'Pronator drift is the most sensitive test for subtle corticospinal (UMN) weakness',
      'UMN weakness is pyramidal: extensors weaker in upper limbs, flexors weaker in lower limbs',
      'MRC 3/5 = movement against gravity only; below 3 = movement only with gravity eliminated',
    ],
    references: ['Bates\' Guide, Ch. 17', 'Aids to the Examination of the Peripheral Nervous System (MRC)'],
  },

  // ========================================================================
  // MUSCULOSKELETAL
  // ========================================================================
  {
    id: 'msk-joint-exam',
    name: 'Joint Examination',
    category: 'musculoskeletal',
    description: 'Systematic assessment of joints including inspection, palpation, range of motion, and stability testing.',
    technique: 'For each joint: inspect for swelling, erythema, deformity. Palpate for warmth, effusion, tenderness, crepitus. Test active then passive ROM. Compare bilaterally. Note any locking or instability.',
    normalFindings: ['No swelling, erythema, or deformity', 'Full active and passive ROM', 'No tenderness or crepitus', 'Stable ligaments'],
    abnormalFindings: [
      'Joint effusion (fluctuance, ballottement)',
      'Warmth and erythema (inflammatory arthritis, septic joint)',
      'Bony enlargement (Heberden/Bouchard nodes—OA)',
      'Decreased ROM with crepitus (degenerative disease)',
      'Joint instability (ligamentous injury)',
    ],
    clinicalSignificance: 'Joint exam differentiates inflammatory from non-inflammatory, mechanical from systemic arthropathy.',
    associatedConditions: ['Osteoarthritis', 'Rheumatoid arthritis', 'Gout', 'Septic arthritis', 'Ligamentous injury'],
    keyPearls: [
      'Hot, red, swollen joint = septic arthritis until proven otherwise (aspirate!)',
      'DIP involvement + Heberden nodes = OA; MCP/PIP + ulnar deviation = RA',
      'Monoarticular: think infection, crystal disease. Polyarticular: think RA, SLE',
    ],
    references: ['Bates\' Guide, Ch. 16', 'Firestein\'s Kelley and Firestein\'s Textbook of Rheumatology'],
  },
  {
    id: 'msk-lachman',
    name: 'Lachman Test',
    category: 'musculoskeletal',
    description: 'Anterior translation test of the tibia on the femur to assess ACL integrity.',
    technique: 'Patient supine, knee flexed 20-30°. Stabilize distal femur with one hand. Grasp proximal tibia with the other hand and apply anterior force. Positive: increased anterior translation with soft or absent endpoint compared to opposite side.',
    normalFindings: ['Firm endpoint with minimal anterior translation (< 3 mm)', 'Symmetric bilaterally'],
    abnormalFindings: ['Increased anterior translation with soft/absent endpoint (ACL tear)', 'Side-to-side difference > 3 mm'],
    clinicalSignificance: 'Lachman test is the most sensitive physical exam maneuver for ACL tears (~85% sensitivity).',
    associatedConditions: ['ACL tear', 'ACL sprain', 'Combined ligament injuries'],
    keyPearls: [
      'Lachman is more sensitive than anterior drawer for ACL tears',
      '20-30° flexion relaxes the hamstrings, reducing false negatives',
      'Pivot shift test is more specific but harder to perform and painful in the acute setting',
    ],
    references: ['Hoppenfeld\'s Physical Examination of the Spine and Extremities', 'JBJS Reviews'],
  },
  {
    id: 'msk-mcmurray',
    name: 'McMurray Test',
    category: 'musculoskeletal',
    description: 'Rotational stress test for meniscal tears of the knee.',
    technique: 'Patient supine. Flex hip and knee fully. Cup heel with one hand, place other hand over joint line. For medial meniscus: externally rotate tibia and slowly extend knee while applying valgus stress. For lateral meniscus: internally rotate tibia and extend with varus stress. Positive: palpable click/pop or pain along the joint line.',
    normalFindings: ['No click, pop, or pain with maneuver', 'Full flexion-extension arc smooth'],
    abnormalFindings: ['Palpable click/pop at joint line (meniscal tear)', 'Pain along medial or lateral joint line', 'Locking or catching sensation'],
    clinicalSignificance: 'McMurray test helps identify meniscal tears which may require arthroscopic intervention.',
    associatedConditions: ['Medial meniscus tear', 'Lateral meniscus tear', 'Bucket-handle tear (locked knee)'],
    keyPearls: [
      'Joint line tenderness alone has higher sensitivity than McMurray for meniscal tears',
      'Medial meniscus tears are ~3x more common than lateral',
      'O\'Donoghue unhappy triad: ACL + medial meniscus + MCL (now recognized as lateral meniscus more common)',
    ],
    references: ['Hoppenfeld\'s Physical Examination of the Spine and Extremities', 'Orthopedic Physical Assessment'],
  },
  {
    id: 'msk-slr',
    name: 'Straight Leg Raise Test',
    category: 'musculoskeletal',
    description: 'Passive hip flexion with extended knee to detect lumbar nerve root irritation (sciatic stretch).',
    technique: 'Patient supine, both legs extended. Passively raise the symptomatic leg with knee fully extended. Positive: radicular pain (not hamstring tightness) between 30° and 70° of elevation. Cross-over SLR: raising the asymptomatic leg reproduces pain in the symptomatic leg.',
    normalFindings: ['No radicular pain with leg elevation to 70°+', 'Hamstring tightness alone is not positive'],
    abnormalFindings: [
      'Radicular pain in sciatic distribution at 30-70° (disc herniation)',
      'Positive cross-over SLR (highly specific for disc herniation)',
      'Pain below 30° suggests non-organic cause or hip pathology',
    ],
    clinicalSignificance: 'SLR is the most sensitive bedside test for L4-S1 disc herniation compressing a nerve root.',
    associatedConditions: ['Lumbar disc herniation', 'Sciatica', 'Lumbar radiculopathy', 'Cauda equina syndrome'],
    keyPearls: [
      'SLR sensitivity ~91%, specificity ~26% for disc herniation',
      'Cross-over SLR sensitivity ~29%, specificity ~88%—highly specific when positive',
      'Pain must be radicular (below knee), not just back or hamstring—distinguish carefully',
    ],
    references: ['Bates\' Guide, Ch. 16', 'Deyo RA et al., NEJM 2001'],
  },
  {
    id: 'msk-shoulder-exam',
    name: 'Shoulder Examination',
    category: 'musculoskeletal',
    description: 'Comprehensive assessment of the shoulder including rotator cuff tests, impingement signs, and instability.',
    technique: 'Inspect for asymmetry, atrophy. Palpate AC joint, bicipital groove. Active/passive ROM: flexion, extension, abduction, adduction, internal/external rotation. Special tests: Neer (impingement—passive forward flexion with scapula stabilized), Hawkins (impingement—90° flexion with internal rotation), Empty can (supraspinatus—thumb down, resist abduction at 30° forward), Drop arm (full-thickness cuff tear), Speed (biceps—resist forward flexion with elbow extended, forearm supinated), Apprehension/relocation (anterior instability).',
    normalFindings: ['Full ROM without pain', 'Negative impingement signs', 'Strong rotator cuff', 'Stable glenohumeral joint'],
    abnormalFindings: [
      'Painful arc 60-120° (subacromial impingement)',
      'Positive empty can test (supraspinatus tear)',
      'Positive drop arm test (large rotator cuff tear)',
      'Positive apprehension/relocation (anterior instability)',
    ],
    clinicalSignificance: 'Shoulder exam differentiates impingement, rotator cuff tears, instability, and adhesive capsulitis.',
    associatedConditions: ['Rotator cuff tear', 'Subacromial impingement', 'Adhesive capsulitis (frozen shoulder)', 'Labral tear', 'AC joint arthritis'],
    keyPearls: [
      'Adhesive capsulitis: loss of both active AND passive external rotation',
      'Rotator cuff tear: weakness on exam; impingement: pain but preserved strength',
      'Loss of passive ROM suggests adhesive capsulitis or glenohumeral arthritis, not cuff pathology',
    ],
    references: ['Hoppenfeld\'s Physical Examination of the Spine and Extremities', 'Neer CS, JBJS 1972'],
  },

  // ========================================================================
  // HEAD & NECK
  // ========================================================================
  {
    id: 'hn-fundoscopy',
    name: 'Fundoscopic Examination',
    category: 'head-neck',
    description: 'Direct visualization of the retina, optic disc, vessels, and macula using an ophthalmoscope.',
    technique: 'Dim room lights. Set ophthalmoscope to 0 diopters. Approach at 15° temporal to patient\'s line of gaze. Use right eye/right hand for patient\'s right eye. Focus on red reflex, then optic disc, then follow vessels outward in four quadrants, then examine macula (ask patient to look directly at light).',
    normalFindings: ['Sharp optic disc margins, yellow-pink color', 'Cup-to-disc ratio < 0.5', 'A:V ratio 2:3', 'No hemorrhages, exudates, or cotton-wool spots', 'Normal macular reflex'],
    abnormalFindings: [
      'Papilledema (blurred disc margins, elevated disc—increased ICP)',
      'Optic atrophy (pale disc—MS, prior optic neuritis)',
      'Copper/silver wiring (chronic hypertension)',
      'Flame hemorrhages, cotton-wool spots (hypertensive retinopathy, DM)',
      'Microaneurysms, neovascularization (diabetic retinopathy)',
      'Cherry-red spot (central retinal artery occlusion)',
    ],
    clinicalSignificance: 'Fundoscopy is the only non-invasive way to directly visualize arterioles and detect end-organ damage from hypertension, diabetes, and elevated ICP.',
    associatedConditions: ['Papilledema (ICP)', 'Diabetic retinopathy', 'Hypertensive retinopathy', 'Glaucoma', 'Central retinal artery/vein occlusion'],
    keyPearls: [
      'Absent spontaneous venous pulsations may suggest elevated ICP (but present in only ~80% of normals)',
      'Papilledema is usually bilateral; unilateral disc edema may be optic neuritis or ischemic optic neuropathy',
      'Cup-to-disc ratio > 0.5 raises concern for glaucoma',
    ],
    references: ['Bates\' Guide, Ch. 7', 'Kanski\'s Clinical Ophthalmology'],
  },
  {
    id: 'hn-otoscopy',
    name: 'Otoscopic Examination',
    category: 'head-neck',
    description: 'Visualization of the external ear canal and tympanic membrane using an otoscope.',
    technique: 'Select largest speculum that fits. In adults, pull pinna up, back, and out to straighten canal. In children < 3 yrs, pull pinna down and back. Inspect canal for cerumen, foreign body, erythema. Examine TM: color, translucency, cone of light (5 o\'clock R, 7 o\'clock L), position, mobility (pneumatic otoscopy).',
    normalFindings: [
      'External canal clear, no erythema',
      'TM pearly gray, translucent',
      'Cone of light intact',
      'TM mobile with pneumatic otoscopy',
      'Landmarks visible (malleus handle, umbo)',
    ],
    abnormalFindings: [
      'Bulging, erythematous TM (acute otitis media)',
      'Retracted TM (eustachian tube dysfunction, negative middle ear pressure)',
      'Air-fluid level behind TM (otitis media with effusion)',
      'Perforation (chronic OM, trauma, cholesteatoma)',
      'Canal erythema with debris (otitis externa)',
    ],
    clinicalSignificance: 'Otoscopy is essential for diagnosing ear infections, effusions, perforations, and canal pathology.',
    associatedConditions: ['Acute otitis media', 'Otitis media with effusion', 'Otitis externa', 'Cholesteatoma', 'TM perforation'],
    keyPearls: [
      'Pneumatic otoscopy is the gold standard for assessing middle ear fluid',
      'In children, ear pain + bulging TM + erythema = AOM; effusion without acute symptoms = OME',
      'Weber and Rinne tests complement otoscopy for conductive vs sensorineural hearing loss',
    ],
    references: ['Bates\' Guide, Ch. 7', 'Nelson\'s Textbook of Pediatrics'],
  },
  {
    id: 'hn-thyroid',
    name: 'Thyroid Examination',
    category: 'head-neck',
    description: 'Inspection and palpation of the thyroid gland to assess size, symmetry, nodularity, and tenderness.',
    technique: 'Inspect neck with patient swallowing water—thyroid moves with swallowing. Palpate from behind or anteriorly. Identify isthmus over 2nd-3rd tracheal rings. Palpate each lobe by displacing trachea toward the side being examined. Assess size, consistency, nodules, tenderness. Auscultate for bruit if enlarged.',
    normalFindings: ['Thyroid not visible or barely visible with swallowing', 'Soft, non-tender, no palpable nodules', 'Isthmus palpable, lobes often not discretely palpable'],
    abnormalFindings: [
      'Diffuse enlargement (goiter—Graves, Hashimoto, iodine deficiency)',
      'Single nodule (thyroid adenoma, cyst, or carcinoma)',
      'Multiple nodules (multinodular goiter)',
      'Firm, fixed, irregular mass (malignancy concern)',
      'Tender thyroid (subacute thyroiditis)',
      'Thyroid bruit (Graves disease—hypervascular)',
    ],
    clinicalSignificance: 'Thyroid exam detects goiter and nodules requiring further evaluation with TSH and ultrasound.',
    associatedConditions: ['Graves disease', 'Hashimoto thyroiditis', 'Thyroid carcinoma', 'Multinodular goiter', 'Subacute thyroiditis'],
    keyPearls: [
      'Key thyroid features: moves with swallowing (vs lymph node which does not)',
      'A firm, fixed nodule with cervical lymphadenopathy = malignancy until proven otherwise',
      'All nodules > 1 cm or those with suspicious US features warrant FNA biopsy',
    ],
    references: ['Bates\' Guide, Ch. 7', 'ATA Thyroid Nodule Guidelines 2015'],
  },
  {
    id: 'hn-lymph-nodes',
    name: 'Cervical Lymph Node Examination',
    category: 'head-neck',
    description: 'Systematic palpation of head and neck lymph node chains to detect lymphadenopathy.',
    technique: 'Palpate with pads of 2nd-4th fingers in circular motion. Systematic order: preauricular, postauricular, occipital, tonsillar, submandibular, submental, superficial cervical, posterior cervical, deep cervical chain, supraclavicular. Note size, consistency, tenderness, mobility, and distribution.',
    normalFindings: ['Small (< 1 cm), soft, mobile, non-tender nodes may be normal', 'Many cervical nodes not palpable in adults'],
    abnormalFindings: [
      'Tender, mobile, soft nodes (reactive/infectious)',
      'Hard, fixed, non-tender nodes (malignancy)',
      'Matted nodes (TB, lymphoma)',
      'Supraclavicular lymphadenopathy (high concern for malignancy)',
      'Left supraclavicular (Virchow node—GI malignancy)',
    ],
    clinicalSignificance: 'Lymphadenopathy location and characteristics guide differential diagnosis from benign reactive to lymphoma or metastatic disease.',
    associatedConditions: ['Pharyngitis', 'Mononucleosis', 'Lymphoma', 'Head and neck carcinoma', 'Tuberculosis', 'HIV'],
    keyPearls: [
      'Supraclavicular nodes are almost always pathologic in adults—biopsy indicated',
      'Virchow node (L supraclavicular) classically associated with gastric cancer (Troisier sign)',
      'Generalized lymphadenopathy (≥ 2 noncontiguous regions) suggests systemic disease (HIV, SLE, lymphoma)',
    ],
    references: ['Bates\' Guide, Ch. 7', 'DeGowin\'s Diagnostic Examination'],
  },
  {
    id: 'hn-oral-exam',
    name: 'Oral Cavity Examination',
    category: 'head-neck',
    description: 'Inspection of lips, buccal mucosa, gingiva, teeth, tongue, palate, and oropharynx.',
    technique: 'Use tongue depressor and light. Inspect lips, buccal mucosa, gingiva, teeth. Ask patient to protrude tongue and move side to side. Inspect dorsum, ventral surface, and lateral borders. Examine hard and soft palate. Observe oropharynx and tonsillar pillars. Palpate floor of mouth bimanually if indicated.',
    normalFindings: ['Pink, moist mucous membranes', 'Teeth in good repair', 'Tongue midline with normal papillae', 'Palate intact, uvula midline', 'Tonsils without exudate'],
    abnormalFindings: [
      'Leukoplakia (white patch—premalignant)',
      'Erythroplakia (red patch—high malignant potential)',
      'Tonsillar exudate (strep pharyngitis, mono, peritonsillar abscess)',
      'Palatal petechiae (mononucleosis)',
      'Glossitis (B12/iron deficiency)',
      'Oral candidiasis (white plaques that scrape off—immunocompromised)',
    ],
    clinicalSignificance: 'Oral exam may reveal nutritional deficiencies, infections, premalignant lesions, and systemic disease.',
    associatedConditions: ['Oral cancer', 'Streptococcal pharyngitis', 'Mononucleosis', 'Iron/B12 deficiency', 'HIV/AIDS (oral candidiasis)'],
    keyPearls: [
      'Lateral tongue is the most common site for oral squamous cell carcinoma',
      'Centor criteria for strep: tonsillar exudate, tender anterior cervical lymphadenopathy, fever, absence of cough',
      'Koplik spots (buccal mucosa white spots) are pathognomonic for measles',
    ],
    references: ['Bates\' Guide, Ch. 7', 'Cummings Otolaryngology'],
  },

  // ========================================================================
  // SKIN / DERMATOLOGIC
  // ========================================================================
  {
    id: 'skin-lesion-morphology',
    name: 'Skin Lesion Morphology Assessment',
    category: 'skin',
    description: 'Systematic description of skin lesions using standardized dermatologic terminology.',
    technique: 'Describe using: primary morphology (macule, papule, patch, plaque, vesicle, bulla, pustule, nodule, wheal, cyst), secondary changes (scale, crust, erosion, ulcer, fissure, atrophy, lichenification), distribution (localized, generalized, dermatonal, photo-distributed, extensor/flexor), color, size, shape, arrangement, and border characteristics.',
    normalFindings: ['Skin intact without lesions', 'Warm, dry, appropriate turgor', 'No rashes or discoloration'],
    abnormalFindings: [
      'Maculopapular rash (viral exanthem, drug eruption)',
      'Vesicles in dermatomal pattern (herpes zoster)',
      'Target lesions (erythema multiforme)',
      'Purpura (palpable: vasculitis; non-palpable: thrombocytopenia)',
      'Petechiae (platelet disorder, meningococcemia)',
    ],
    clinicalSignificance: 'Accurate morphologic description narrows the differential and guides further workup.',
    associatedConditions: ['Drug eruptions', 'Herpes zoster', 'Vasculitis', 'Meningococcemia', 'Psoriasis', 'Eczema'],
    keyPearls: [
      'Macule < 1 cm (flat, color change); patch > 1 cm. Papule < 1 cm (raised); plaque > 1 cm',
      'Palpable purpura = vasculitis until proven otherwise',
      'Nikolsky sign (skin sloughs with lateral pressure) suggests pemphigus vulgaris, TEN, or SSSS',
    ],
    references: ['Fitzpatrick\'s Dermatology', 'Habif\'s Clinical Dermatology'],
  },
  {
    id: 'skin-melanoma-screening',
    name: 'Melanoma Screening (ABCDE)',
    category: 'skin',
    description: 'Evaluation of pigmented lesions for features suggesting melanoma using the ABCDE criteria.',
    technique: 'Full body skin exam with good lighting. Evaluate pigmented lesions: A = Asymmetry (one half unlike the other), B = Border irregularity (ragged, notched), C = Color variation (multiple shades of brown, black, red, white, blue), D = Diameter > 6 mm (pencil eraser), E = Evolving (changing size, shape, color, symptoms). "Ugly duckling" sign: lesion that looks different from patient\'s other nevi.',
    normalFindings: ['Symmetric nevi with regular borders', 'Uniform color', 'Stable over time', '< 6 mm diameter'],
    abnormalFindings: [
      'Asymmetric lesion with irregular borders and color variation',
      'Lesion > 6 mm or growing',
      'New pigmented lesion in patient > 40',
      'Lesion that bleeds, itches, or ulcerates',
    ],
    clinicalSignificance: 'Early detection of melanoma dramatically improves survival (5-yr survival > 98% if localized).',
    associatedConditions: ['Melanoma', 'Dysplastic nevus syndrome', 'Basal cell carcinoma', 'Squamous cell carcinoma'],
    keyPearls: [
      'The "ugly duckling" sign may be more sensitive than ABCDE alone',
      'Amelanotic melanoma lacks pigment—maintain high suspicion for non-healing pink nodules',
      'Dermoscopy by trained clinicians improves diagnostic accuracy over naked-eye exam',
    ],
    references: ['AAD Melanoma Screening Guidelines', 'JAMA Dermatology'],
  },
  {
    id: 'skin-turgor-caprefill',
    name: 'Skin Turgor and Capillary Refill',
    category: 'skin',
    description: 'Assessment of hydration status through skin elasticity and peripheral perfusion.',
    technique: 'Skin turgor: pinch skin on dorsum of hand (adults) or abdomen (infants/elderly) for 2 seconds, release, and time return to normal. Capillary refill: press nail bed firmly for 5 seconds, release, time return of color.',
    normalFindings: ['Skin turgor: immediate recoil (< 2 seconds)', 'Capillary refill: < 2 seconds'],
    abnormalFindings: [
      'Tenting of skin (dehydration, especially > 2 seconds)',
      'Capillary refill > 2 seconds (poor perfusion, dehydration, shock, hypothermia)',
    ],
    clinicalSignificance: 'These are rapid bedside assessments of volume status and peripheral perfusion.',
    associatedConditions: ['Dehydration', 'Shock', 'Peripheral vascular disease', 'Hypothermia'],
    keyPearls: [
      'Skin turgor is unreliable in elderly (loss of elasticity) and obese patients',
      'Test turgor on forehead or sternum in elderly for more reliability',
      'Capillary refill is affected by ambient temperature—warm the hand first in cold environments',
    ],
    references: ['Bates\' Guide, Ch. 6', 'ATLS Manual'],
  },

  // ========================================================================
  // PSYCHIATRIC
  // ========================================================================
  {
    id: 'psych-mse-appearance',
    name: 'Mental Status Exam: Appearance and Behavior',
    category: 'psychiatric',
    description: 'Observation of the patient\'s appearance, grooming, psychomotor activity, and behavior during the interview.',
    technique: 'Observe and document: apparent age, body habitus, grooming/hygiene, attire (appropriate for weather/setting), eye contact, psychomotor activity (agitation, retardation, catatonia), abnormal movements (tremor, tardive dyskinesia, tics), level of cooperation, and attitude toward examiner.',
    normalFindings: ['Appears stated age', 'Appropriate grooming and dress', 'Good eye contact', 'Normal psychomotor activity', 'Cooperative and engaged'],
    abnormalFindings: [
      'Disheveled appearance (depression, psychosis, substance use, dementia)',
      'Psychomotor agitation (mania, anxiety, akathisia)',
      'Psychomotor retardation (depression, catatonia)',
      'Poor eye contact (depression, autism spectrum, psychosis)',
      'Guarded, hostile, or uncooperative (paranoia, personality disorders)',
    ],
    clinicalSignificance: 'Appearance and behavior provide immediate clues about mood state, cognitive function, and functional capacity.',
    associatedConditions: ['Major depressive disorder', 'Bipolar disorder (mania)', 'Schizophrenia', 'Substance use disorders', 'Dementia'],
    keyPearls: [
      'Document objective observations, not interpretations (e.g., "wearing winter coat indoors in summer" not "dresses inappropriately")',
      'Psychomotor retardation may be the only observable sign in masked depression',
      'Distinguish akathisia (inner restlessness, cannot sit still) from agitation',
    ],
    references: ['Kaplan & Sadock\'s Synopsis of Psychiatry', 'The Psychiatric Interview, 3rd Ed.'],
  },
  {
    id: 'psych-mse-mood-affect',
    name: 'Mental Status Exam: Mood and Affect',
    category: 'psychiatric',
    description: 'Assessment of the patient\'s emotional state (mood = subjective report; affect = observed expression).',
    technique: 'Ask "How are you feeling?" or "How would you describe your mood?" for subjective mood. Observe affect throughout interview: range (broad, restricted, flat), quality (euthymic, dysphoric, euphoric, anxious, irritable), congruence (matches stated mood and thought content), reactivity (changes appropriately during conversation), stability.',
    normalFindings: ['Mood euthymic', 'Affect full range, congruent with mood and thought content', 'Affect reactive and appropriate to situation'],
    abnormalFindings: [
      'Flat affect (no emotional expression—schizophrenia, severe depression)',
      'Labile affect (rapid shifting—pseudobulbar affect, mania, personality disorders)',
      'Incongruent affect (laughing while discussing sad topics—psychosis)',
      'Euphoric mood with grandiosity (mania)',
      'Anxious, irritable mood with psychomotor agitation',
    ],
    clinicalSignificance: 'Mood/affect assessment is central to diagnosing mood disorders, psychotic disorders, and personality pathology.',
    associatedConditions: ['Major depression', 'Bipolar disorder', 'Schizophrenia', 'Pseudobulbar affect', 'Generalized anxiety disorder'],
    keyPearls: [
      'Mood is what the patient tells you; affect is what you observe—they may not match',
      'Flat affect is not the same as blunted affect (blunted = reduced range; flat = no range)',
      'La belle indifférence (lack of concern about symptoms) may suggest conversion disorder',
    ],
    references: ['Kaplan & Sadock\'s Synopsis of Psychiatry', 'DSM-5-TR'],
  },
  {
    id: 'psych-mse-thought',
    name: 'Mental Status Exam: Thought Process and Content',
    category: 'psychiatric',
    description: 'Evaluation of how a patient thinks (process/form) and what they think about (content).',
    technique: 'Thought process: assess through speech—is it logical, goal-directed, organized? Note: circumstantiality (returns to point eventually), tangentiality (never returns to point), loose associations, flight of ideas, thought blocking, word salad. Thought content: ask about delusions, obsessions, phobias, suicidal/homicidal ideation, ideas of reference. Always assess safety: "Are you having thoughts of harming yourself or others?"',
    normalFindings: ['Linear, logical, goal-directed thought process', 'No delusions, obsessions, or hallucinations', 'Denies suicidal/homicidal ideation'],
    abnormalFindings: [
      'Tangential or circumstantial thinking (psychosis, mania, anxiety)',
      'Loose associations/derailment (schizophrenia)',
      'Flight of ideas (mania)',
      'Perseveration (frontal lobe pathology, OCD)',
      'Delusions (paranoid, grandiose, somatic, nihilistic)',
      'Suicidal ideation (assess plan, intent, means, protective factors)',
    ],
    clinicalSignificance: 'Thought disorder is a core feature of psychotic disorders; thought content guides risk assessment and diagnosis.',
    associatedConditions: ['Schizophrenia', 'Bipolar disorder', 'OCD', 'Major depression with psychotic features', 'Delusional disorder'],
    keyPearls: [
      'Always document suicidal ideation assessment—it is the standard of care',
      'Circumstantial = eventually reaches the point; tangential = never does',
      'Paranoid delusions in an elderly patient with clear sensorium: consider delusional disorder or Lewy body dementia',
    ],
    references: ['Kaplan & Sadock\'s Synopsis of Psychiatry', 'Carlat\'s The Psychiatric Interview'],
  },
  {
    id: 'psych-mse-cognition',
    name: 'Mental Status Exam: Cognition',
    category: 'psychiatric',
    description: 'Bedside assessment of orientation, attention, memory, language, and executive function.',
    technique: 'Orientation: person, place, time, situation. Attention: spell WORLD backward, serial 7s, digit span (normal ≥ 5 forward). Memory: registration (3 words), recall at 5 min. Language: naming, repetition, comprehension, reading, writing. Executive: clock draw, Luria sequences, abstract interpretation (proverbs/similarities). Use standardized tools: MMSE (max 30), MoCA (max 30, more sensitive for MCI).',
    normalFindings: ['Oriented x4', 'Intact attention', '3/3 recall at 5 minutes', 'Fluent language, naming intact', 'Normal clock draw', 'MMSE ≥ 24, MoCA ≥ 26'],
    abnormalFindings: [
      'Disorientation (delirium, dementia—time first, then place, then person)',
      'Impaired attention (delirium—hallmark feature)',
      'Impaired recall (Alzheimer disease—early feature)',
      'Naming difficulty (aphasia—stroke, frontotemporal dementia)',
      'Abnormal clock draw (visuospatial/executive dysfunction)',
    ],
    clinicalSignificance: 'Cognitive testing distinguishes delirium (attention impaired) from dementia (memory impaired early) and localizes cortical dysfunction.',
    associatedConditions: ['Delirium', 'Alzheimer disease', 'Vascular dementia', 'Frontotemporal dementia', 'Lewy body dementia', 'Stroke (aphasia)'],
    keyPearls: [
      'Delirium: acute, fluctuating, inattention prominent. Dementia: chronic, progressive, memory loss prominent',
      'MoCA is more sensitive than MMSE for mild cognitive impairment',
      'Clock draw tests executive function, visuospatial ability, and comprehension in one task',
    ],
    references: ['Folstein MF et al., MMSE 1975', 'Nasreddine ZS et al., MoCA 2005', 'DSM-5-TR'],
  },

  // ========================================================================
  // PEDIATRIC
  // ========================================================================
  {
    id: 'peds-growth-assessment',
    name: 'Pediatric Growth Assessment',
    category: 'pediatric',
    description: 'Serial measurement of weight, length/height, head circumference, and plotting on age/sex-specific growth curves.',
    technique: 'Weight: calibrated infant scale (undressed) or standing scale. Length (< 2 yrs): supine on length board. Height (≥ 2 yrs): stadiometer. Head circumference (< 2 yrs): largest occipitofrontal circumference with tape measure. Plot on WHO (< 2 yrs) or CDC (2-20 yrs) growth charts. Calculate weight-for-length or BMI-for-age percentile.',
    normalFindings: ['Tracking along a consistent percentile (within 2 major lines)', 'Birth weight doubles by 4-5 months, triples by 12 months', 'Head circumference grows ~1 cm/month in first year'],
    abnormalFindings: [
      'Crossing percentile lines downward (failure to thrive)',
      'Weight-for-length < 5th percentile (underweight/malnutrition)',
      'BMI > 95th percentile (obesity)',
      'Head circumference > 97th or < 3rd percentile',
      'Macrocephaly (hydrocephalus, megalencephaly)',
      'Microcephaly (congenital infection, genetic syndrome)',
    ],
    clinicalSignificance: 'Growth monitoring is the cornerstone of pediatric well-child care and detects nutritional, endocrine, and genetic disorders.',
    associatedConditions: ['Failure to thrive', 'Growth hormone deficiency', 'Hydrocephalus', 'Congenital infections (TORCH)', 'Turner syndrome', 'Constitutional growth delay'],
    keyPearls: [
      'Weight affected first in acute malnutrition; height affected in chronic malnutrition; head circumference affected last',
      'Premature infants: use corrected age until 2 years for growth plotting',
      'Crossing 2 major percentile lines (up or down) warrants investigation',
    ],
    references: ['Nelson\'s Textbook of Pediatrics', 'WHO Child Growth Standards', 'CDC Growth Charts'],
  },
  {
    id: 'peds-developmental-milestones',
    name: 'Developmental Milestone Assessment',
    category: 'pediatric',
    description: 'Evaluation of gross motor, fine motor, language, and social-emotional development at age-appropriate intervals.',
    technique: 'Use standardized screening: ASQ-3 or Denver II. Observe directly and obtain caregiver history. Key milestones: 2 mo (social smile), 4 mo (rolls, reaches), 6 mo (sits unsupported, babbles), 9 mo (pincer grasp, stranger anxiety), 12 mo (walks, 1-2 words), 18 mo (runs, 10+ words, points), 24 mo (2-word phrases, kicks ball), 3 yr (tricycle, 3-word sentences), 4 yr (hops, counts to 4), 5 yr (skips, ties shoes).',
    normalFindings: ['Meeting milestones within expected age range', 'Progressive skill acquisition across all domains'],
    abnormalFindings: [
      'Loss of previously acquired skills (regression—neurodegenerative disease, Rett syndrome)',
      'Global developmental delay (intellectual disability, genetic syndrome)',
      'Language delay with social deficits (autism spectrum disorder)',
      'Isolated motor delay (cerebral palsy, muscular dystrophy)',
    ],
    clinicalSignificance: 'Early detection of developmental delay allows for early intervention, which significantly improves outcomes.',
    associatedConditions: ['Autism spectrum disorder', 'Cerebral palsy', 'Intellectual disability', 'Hearing loss', 'Duchenne muscular dystrophy'],
    keyPearls: [
      'Developmental regression is a red flag—always investigate (consider metabolic, neurodegenerative, or seizure disorder)',
      'Hearing screening is critical for any child with speech delay',
      'Social smile by 2 months is one of the earliest milestones; absence warrants close follow-up',
    ],
    references: ['AAP Bright Futures Guidelines', 'Nelson\'s Textbook of Pediatrics'],
  },
  {
    id: 'peds-fontanelle',
    name: 'Fontanelle Examination',
    category: 'pediatric',
    description: 'Palpation of the anterior and posterior fontanelles in infants to assess intracranial pressure and hydration.',
    technique: 'With infant upright and calm (crying increases ICP), palpate anterior fontanelle (junction of sagittal and coronal sutures). Assess size, fullness/tension, and pulsation. Posterior fontanelle (junction of sagittal and lambdoid) typically closes by 2-3 months. Anterior fontanelle closes by 12-18 months.',
    normalFindings: ['Anterior fontanelle soft, flat, pulsatile', 'Posterior fontanelle open at birth, closes 2-3 months', 'Anterior fontanelle: ~2.5 cm at birth, closes 12-18 months'],
    abnormalFindings: [
      'Bulging fontanelle (increased ICP: meningitis, hydrocephalus)',
      'Sunken fontanelle (dehydration)',
      'Premature closure (craniosynostosis)',
      'Delayed closure (hypothyroidism, rickets, hydrocephalus, Down syndrome)',
    ],
    clinicalSignificance: 'Fontanelle exam is a rapid bedside assessment of ICP and hydration status in infants.',
    associatedConditions: ['Meningitis', 'Hydrocephalus', 'Dehydration', 'Craniosynostosis', 'Rickets'],
    keyPearls: [
      'Always assess fontanelle with infant upright and calm—crying causes false bulging',
      'Bulging fontanelle + fever + irritability = meningitis until proven otherwise',
      'Craniosynostosis: premature fusion causes abnormal head shape and may restrict brain growth',
    ],
    references: ['Nelson\'s Textbook of Pediatrics', 'Palpalogy\'s Palatal Neonatology'],
  },
  {
    id: 'peds-hip-exam',
    name: 'Pediatric Hip Examination (Barlow/Ortolani)',
    category: 'pediatric',
    description: 'Screening maneuvers for developmental dysplasia of the hip (DDH) in neonates.',
    technique: 'Ortolani test: flex hips and knees to 90°, gently abduct hips while lifting greater trochanter anteriorly. Positive: palpable "clunk" as dislocated hip reduces. Barlow test: adduct flexed hip with gentle posterior pressure. Positive: femoral head dislocates posteriorly out of acetabulum. In older infants (> 3 months): limited hip abduction and limb length discrepancy (Galeazzi sign).',
    normalFindings: ['Negative Ortolani (no clunk on abduction)', 'Negative Barlow (no dislocation on adduction)', 'Symmetric hip abduction > 60°', 'Equal limb lengths'],
    abnormalFindings: [
      'Positive Ortolani clunk (dislocated hip that reduces)',
      'Positive Barlow (hip dislocatable)',
      'Limited hip abduction (DDH in older infant)',
      'Limb length discrepancy (Galeazzi sign)',
      'Asymmetric thigh/gluteal folds',
    ],
    clinicalSignificance: 'Early DDH detection allows treatment with Pavlik harness (< 6 months) and avoids surgical intervention.',
    associatedConditions: ['Developmental dysplasia of the hip', 'Acetabular dysplasia'],
    keyPearls: [
      'Risk factors for DDH: breech presentation, female sex, family history, oligohydramnios',
      'Hip clicks (soft, high-pitched) are common and benign; clunks are pathologic',
      'Ultrasound screening recommended if risk factors present even with normal exam',
    ],
    references: ['AAP DDH Guidelines', 'Nelson\'s Textbook of Pediatrics'],
  },

  // ========================================================================
  // ADDITIONAL ENTRIES
  // ========================================================================
  {
    id: 'resp-inspection',
    name: 'Respiratory Inspection',
    category: 'respiratory',
    description: 'Visual assessment of respiratory pattern, rate, effort, and chest wall configuration.',
    technique: 'Observe respiratory rate (count unobtrusively for 30-60 s), depth, rhythm, effort (accessory muscle use, nasal flaring, intercostal retractions), and chest shape. Note any asymmetry, barrel chest, pectus deformity, kyphoscoliosis.',
    normalFindings: ['RR 12-20, regular rhythm', 'No accessory muscle use', 'Symmetric chest expansion', 'Normal AP:lateral diameter ratio (~5:7)'],
    abnormalFindings: [
      'Barrel chest (increased AP diameter—COPD)',
      'Accessory muscle use (respiratory distress)',
      'Paradoxical breathing (diaphragm paralysis)',
      'Kussmaul breathing (deep, rapid—DKA)',
      'Cheyne-Stokes (crescendo-decrescendo with apnea—heart failure, brainstem lesion)',
    ],
    clinicalSignificance: 'Respiratory pattern abnormalities localize pathology and assess disease severity.',
    associatedConditions: ['COPD', 'Respiratory failure', 'DKA', 'Heart failure', 'Brainstem herniation'],
    keyPearls: [
      'Barrel chest with prolonged expiration and pursed-lip breathing = emphysema',
      'Tripod position (leaning forward, arms braced) = severe respiratory distress',
      'Kussmaul breathing: rate AND depth increased; distinguish from tachypnea (rate only)',
    ],
    references: ['Bates\' Guide, Ch. 8', 'West\'s Respiratory Physiology'],
  },
  {
    id: 'cv-precordial-palpation',
    name: 'Precordial Palpation',
    category: 'cardiovascular',
    description: 'Palpation of the anterior chest wall to locate the PMI and detect heaves, lifts, and thrills.',
    technique: 'Palpate with palm and fingertips over precordium. Locate PMI (point of maximal impulse): normally 5th ICS, MCL, < 2.5 cm diameter. Assess for heaves (sustained lift—RV at L sternal border, LV at apex), thrills (palpable murmur), and pulsations.',
    normalFindings: ['PMI at 5th ICS, MCL, < 2.5 cm, brief tap', 'No heaves, lifts, or thrills'],
    abnormalFindings: [
      'Displaced PMI laterally and inferiorly (LV dilation)',
      'Sustained PMI (LV hypertrophy)',
      'Parasternal heave (RV hypertrophy/pressure overload)',
      'Palpable thrill (corresponds to grade ≥ 4/6 murmur)',
    ],
    clinicalSignificance: 'PMI displacement suggests cardiomegaly; heaves and thrills indicate hemodynamically significant valvular or structural disease.',
    associatedConditions: ['LV hypertrophy', 'Dilated cardiomyopathy', 'Pulmonary hypertension (RV heave)', 'Severe aortic stenosis (thrill)'],
    keyPearls: [
      'PMI displaced beyond MCL = cardiomegaly with high specificity',
      'A palpable S3 (diastolic impulse) corresponds to the audible S3 gallop',
      'Pectus excavatum can displace PMI and simulate cardiomegaly',
    ],
    references: ['Bates\' Guide, Ch. 9', 'Braunwald\'s Heart Disease'],
  },
  {
    id: 'abd-shifting-dullness',
    name: 'Shifting Dullness for Ascites',
    category: 'abdominal',
    description: 'Percussion technique to detect free peritoneal fluid (ascites).',
    technique: 'Patient supine. Percuss from umbilicus laterally to the flank until dullness is encountered; mark. Have patient roll toward opposite side, wait 30 seconds, percuss again. Positive: dullness shifts to the dependent side. Fluid wave test: assistant places ulnar edge of hand on midline; tap one flank, feel for impulse on opposite flank.',
    normalFindings: ['Tympany centrally, dullness over flanks fixed with repositioning', 'No fluid wave'],
    abnormalFindings: [
      'Shifting dullness (requires ~500 mL free fluid)',
      'Positive fluid wave (requires larger volume of ascites)',
      'Bulging flanks in supine position',
    ],
    clinicalSignificance: 'Ascites detection suggests liver disease, heart failure, malignancy, or nephrotic syndrome requiring paracentesis for diagnosis.',
    associatedConditions: ['Cirrhosis (most common)', 'Heart failure', 'Peritoneal carcinomatosis', 'Nephrotic syndrome', 'Tuberculosis'],
    keyPearls: [
      'Shifting dullness is the most sensitive bedside test for ascites (~83% sensitivity)',
      'Absence of flank dullness rules out ascites with ~90% negative predictive value',
      'Ultrasound detects as little as 100 mL of fluid and is superior to exam',
    ],
    references: ['Bates\' Guide, Ch. 11', 'McGee\'s Evidence-Based Physical Diagnosis'],
  },
  {
    id: 'neuro-gait',
    name: 'Gait Assessment',
    category: 'neurological',
    description: 'Observation of the patient\'s walking pattern to identify neurological and musculoskeletal abnormalities.',
    technique: 'Observe patient walking at normal pace, turning. Note stride length, base width, arm swing, posture, and stability. Test tandem gait (heel-to-toe), walking on heels (L4-L5), walking on toes (S1-S2). Assess Romberg (stand feet together, eyes closed).',
    normalFindings: ['Smooth, symmetric stride', 'Normal base width', 'Symmetric arm swing', 'Able to tandem walk', 'Negative Romberg'],
    abnormalFindings: [
      'Hemiplegic gait (circumduction—stroke)',
      'Parkinsonian gait (shuffling, festinating, reduced arm swing, en bloc turning)',
      'Ataxic gait (wide-based, staggering—cerebellar)',
      'Steppage gait (high stepping—foot drop, L4-L5 or peroneal nerve)',
      'Waddling gait (proximal myopathy—hip girdle weakness)',
      'Antalgic gait (shortened stance phase—pain avoidance)',
    ],
    clinicalSignificance: 'Gait integrates motor, sensory, cerebellar, vestibular, and musculoskeletal systems; abnormalities may be the first sign of neurological disease.',
    associatedConditions: ['Stroke', 'Parkinson disease', 'Cerebellar disease', 'Peripheral neuropathy', 'Normal pressure hydrocephalus (magnetic gait)', 'Lumbar stenosis'],
    keyPearls: [
      'NPH classic triad: "wet, wacky, wobbly" (incontinence, dementia, gait apraxia)',
      'Parkinsonian gait plus early falls and vertical gaze palsy = progressive supranuclear palsy',
      'Gait speed is a "vital sign" in geriatrics—< 0.8 m/s predicts poor outcomes',
    ],
    references: ['Bates\' Guide, Ch. 17', 'Adams and Victor\'s Principles of Neurology'],
  },
  {
    id: 'msk-hip-exam',
    name: 'Adult Hip Examination',
    category: 'musculoskeletal',
    description: 'Assessment of the hip joint including ROM, impingement tests, and special maneuvers.',
    technique: 'Inspect gait. Palpate greater trochanter (bursitis), inguinal ligament (hip flexor). Test ROM: flexion (120°), extension (30°), abduction (45°), adduction (30°), internal rotation (35°), external rotation (45°). FABER/Patrick test: flex, abduct, externally rotate hip—knee falls toward table. FADIR: flex, adduct, internally rotate—tests femoroacetabular impingement. Trendelenburg test: stand on one leg; positive if contralateral pelvis drops (weak hip abductors).',
    normalFindings: ['Full ROM without pain', 'Negative FABER', 'Negative FADIR', 'Negative Trendelenburg'],
    abnormalFindings: [
      'Positive FADIR (femoroacetabular impingement, labral tear)',
      'Positive FABER (SI joint or hip pathology)',
      'Positive Trendelenburg (superior gluteal nerve injury, hip OA)',
      'Log roll pain (hip joint pathology—most specific)',
    ],
    clinicalSignificance: 'Hip exam differentiates intra-articular pathology (OA, labral tear, AVN) from extra-articular (bursitis, tendinopathy, referred pain).',
    associatedConditions: ['Hip osteoarthritis', 'Femoroacetabular impingement', 'Labral tear', 'Greater trochanteric bursitis', 'Avascular necrosis'],
    keyPearls: [
      'Pain with log roll (passive rotation in extension) is the most specific test for intra-articular hip pathology',
      'Groin pain with hip flexion/IR = intra-articular; lateral pain = trochanteric bursitis; buttock = SI joint/referred',
      'AVN risk factors: corticosteroids, alcohol, sickle cell, trauma',
    ],
    references: ['Hoppenfeld\'s Physical Examination of the Spine and Extremities', 'JOSPT Hip CPG'],
  },
  {
    id: 'hn-sinus-exam',
    name: 'Sinus Examination',
    category: 'head-neck',
    description: 'Palpation and transillumination of the paranasal sinuses.',
    technique: 'Palpate/percuss over frontal sinuses (above medial eyebrow) and maxillary sinuses (below zygomatic bone). Assess for tenderness. Transillumination: in darkened room, place light against hard palate (maxillary) or under medial eyebrow (frontal). Observe for glow through sinus.',
    normalFindings: ['No tenderness on palpation/percussion', 'Bilateral symmetric transillumination'],
    abnormalFindings: [
      'Tenderness over frontal or maxillary sinuses (acute sinusitis)',
      'Decreased or absent transillumination (sinusitis, mucosal thickening)',
      'Periorbital edema (ethmoid sinusitis)',
    ],
    clinicalSignificance: 'Sinus exam supports clinical diagnosis of sinusitis though imaging is rarely needed for acute uncomplicated disease.',
    associatedConditions: ['Acute bacterial sinusitis', 'Chronic sinusitis', 'Allergic rhinitis'],
    keyPearls: [
      'Acute sinusitis is diagnosed clinically—symptoms > 10 days or biphasic illness',
      'Transillumination has limited sensitivity and specificity',
      'Facial pain alone does not equal sinusitis—consider dental, TMJ, or migraine',
    ],
    references: ['Bates\' Guide, Ch. 7', 'AAO-HNS Sinusitis Guidelines'],
  },
  {
    id: 'skin-nail-exam',
    name: 'Nail Examination',
    category: 'skin',
    description: 'Inspection of fingernails and toenails for shape, color, and texture changes reflecting systemic disease.',
    technique: 'Inspect all nails. Assess color, shape (clubbing, spooning, pitting), angle (normal Lovibond angle < 180°), nail bed (splinter hemorrhages, Terry nails), lunula, cuticle, periungual tissue. Test for clubbing: Schamroth sign (obliterated diamond-shaped window when opposing nails).',
    normalFindings: ['Pink nail beds', 'Normal Lovibond angle (< 160°)', 'Smooth surface without pitting', 'No clubbing (Schamroth window present)'],
    abnormalFindings: [
      'Clubbing (pulmonary disease, endocarditis, cirrhosis, IBD)',
      'Koilonychia (spoon nails—iron deficiency)',
      'Nail pitting (psoriasis, alopecia areata)',
      'Splinter hemorrhages (endocarditis, trauma)',
      'Terry nails (white with distal dark band—cirrhosis, CHF)',
      'Beau lines (transverse grooves—systemic illness interruption)',
      'Half-and-half nails (Lindsay nails—uremia/CKD)',
    ],
    clinicalSignificance: 'Nail changes often reflect systemic disease and can be identified on routine exam.',
    associatedConditions: ['Infective endocarditis', 'Iron deficiency anemia', 'Psoriasis', 'Cirrhosis', 'COPD/lung cancer', 'Chronic kidney disease'],
    keyPearls: [
      'Clubbing develops over weeks to months; most commonly pulmonary (lung cancer, IPF, bronchiectasis)',
      'Splinter hemorrhages: single = trauma; multiple = think endocarditis',
      'Mees lines (white transverse bands) = arsenic poisoning or severe systemic illness',
    ],
    references: ['Fitzpatrick\'s Dermatology', 'Bates\' Guide, Ch. 6'],
  },
  {
    id: 'neuro-meningeal-signs',
    name: 'Meningeal Signs',
    category: 'neurological',
    description: 'Examination for nuchal rigidity and meningeal irritation suggesting meningitis or subarachnoid hemorrhage.',
    technique: 'Nuchal rigidity: passively flex the neck. Kernig sign: with hip flexed to 90°, attempt to extend the knee. Positive: resistance/pain with extension. Brudzinski sign: passively flex the neck. Positive: involuntary flexion of the hips and knees.',
    normalFindings: ['Supple neck, full passive flexion without pain', 'Negative Kernig sign', 'Negative Brudzinski sign'],
    abnormalFindings: [
      'Nuchal rigidity (resistance to passive neck flexion)',
      'Positive Kernig sign (pain/resistance extending knee with hip flexed)',
      'Positive Brudzinski sign (hip/knee flexion with passive neck flexion)',
    ],
    clinicalSignificance: 'Meningeal signs are red flags for meningitis or SAH and mandate urgent lumbar puncture and/or imaging.',
    associatedConditions: ['Bacterial meningitis', 'Viral meningitis', 'Subarachnoid hemorrhage', 'Carcinomatous meningitis'],
    keyPearls: [
      'Sensitivity of meningeal signs for meningitis is only ~50%—absence does not rule it out',
      'Jolt accentuation (headache worsens with head rotation 2-3 Hz) may be more sensitive than nuchal rigidity',
      'In neonates and elderly, meningeal signs may be absent despite meningitis',
    ],
    references: ['Bates\' Guide, Ch. 17', 'Thomas KE et al., Clin Infect Dis 2002'],
  },
  {
    id: 'peds-moro-reflex',
    name: 'Primitive Reflexes (Moro, Grasp, Rooting)',
    category: 'pediatric',
    description: 'Assessment of neonatal primitive reflexes that indicate brainstem and spinal cord integrity.',
    technique: 'Moro: support infant\'s head and back; allow head to drop back slightly (2-3 cm). Normal: bilateral arm abduction, extension, then adduction ("embrace"). Palmar grasp: place finger in palm. Normal: finger grip. Rooting: stroke cheek near mouth. Normal: turns toward stimulus. Plantar grasp: stroke sole. Normal: toe curling. Asymmetric tonic neck reflex (ATNR): turn head to side. Normal: arm/leg extend on face side, flex on occiput side ("fencing").',
    normalFindings: ['Symmetric Moro response', 'Palmar grasp present at birth, integrates by 6 months', 'Rooting present, integrates by 3-4 months', 'Moro integrates by 4-6 months'],
    abnormalFindings: [
      'Asymmetric Moro (brachial plexus injury, clavicle fracture, hemiparesis)',
      'Absent Moro (severe CNS depression)',
      'Persistent primitive reflexes beyond expected age (cerebral palsy, brain injury)',
    ],
    clinicalSignificance: 'Primitive reflexes assess brainstem function in neonates; asymmetry suggests focal injury, persistence suggests upper motor neuron pathology.',
    associatedConditions: ['Erb palsy (C5-C6 brachial plexus injury)', 'Clavicle fracture', 'Cerebral palsy', 'Neonatal encephalopathy'],
    keyPearls: [
      'Asymmetric Moro in a neonate: think birth trauma (clavicle fracture, brachial plexus injury)',
      'Erb palsy (C5-C6): "waiter\'s tip" position—arm internally rotated, elbow extended, wrist flexed',
      'Persistence of Moro beyond 6 months suggests upper motor neuron lesion',
    ],
    references: ['Nelson\'s Textbook of Pediatrics', 'Palatal Palatal Palatal Pediatrics'],
  },
  {
    id: 'abd-obturator-psoas',
    name: 'Psoas and Obturator Signs',
    category: 'abdominal',
    description: 'Special maneuvers testing for retroperitoneal and pelvic irritation, classically associated with appendicitis.',
    technique: 'Psoas sign: patient supine; examiner passively extends R hip (or patient actively flexes R hip against resistance). Positive: RLQ pain (retrocecal appendix irritating psoas). Obturator sign: patient supine; flex R hip and knee to 90°, then internally rotate hip. Positive: RLQ/hypogastric pain (pelvic appendix or abscess near obturator internus).',
    normalFindings: ['No pain with hip extension or internal rotation'],
    abnormalFindings: [
      'Positive psoas sign (pain with hip extension—retrocecal appendicitis, psoas abscess)',
      'Positive obturator sign (pain with hip internal rotation—pelvic appendicitis, pelvic abscess)',
    ],
    clinicalSignificance: 'These signs help localize an inflamed appendix or pelvic pathology and support the diagnosis of appendicitis.',
    associatedConditions: ['Retrocecal appendicitis (psoas)', 'Pelvic appendicitis (obturator)', 'Psoas abscess', 'Pelvic inflammatory disease'],
    keyPearls: [
      'Psoas sign is most useful when appendix is retrocecal (30% of patients)',
      'Neither sign alone is highly sensitive, but positive findings increase specificity',
      'Psoas abscess can present similarly—consider in patients with spine infections, IBD, or IV drug use',
    ],
    references: ['Cope\'s Early Diagnosis of the Acute Abdomen', 'Schwartz\'s Principles of Surgery'],
  },
  {
    id: 'cv-edema',
    name: 'Peripheral Edema Assessment',
    category: 'cardiovascular',
    description: 'Examination for pitting edema in the lower extremities and sacrum as a sign of fluid overload or venous insufficiency.',
    technique: 'Press firmly over medial malleolus, anterior tibia, or dorsum of foot for 5-10 seconds, then release. Grade pitting: 1+ (2 mm depression, immediate rebound), 2+ (4 mm, 15 s rebound), 3+ (6 mm, 30 s rebound), 4+ (8 mm, > 30 s rebound). Check sacral edema in bedridden patients. Note distribution: bilateral vs unilateral, extent (ankle, pretibial, knee, thigh).',
    normalFindings: ['No pitting edema', 'No sacral edema', 'Symmetric lower extremities'],
    abnormalFindings: [
      'Bilateral pitting edema (CHF, nephrotic syndrome, cirrhosis, venous insufficiency)',
      'Unilateral edema (DVT, lymphedema, cellulitis, Baker cyst)',
      'Non-pitting edema (lymphedema, myxedema/hypothyroidism)',
      'Sacral edema (volume overload in bedridden patient)',
    ],
    clinicalSignificance: 'Edema pattern and distribution narrows the differential between cardiac, hepatic, renal, and local causes.',
    associatedConditions: ['Heart failure', 'Nephrotic syndrome', 'Cirrhosis', 'Deep vein thrombosis', 'Lymphedema', 'Chronic venous insufficiency'],
    keyPearls: [
      'Unilateral edema = DVT until proven otherwise—obtain D-dimer or duplex ultrasound',
      'Non-pitting edema suggests lymphedema or myxedema, not fluid overload',
      'In bedridden patients, check sacrum—dependent edema follows gravity',
    ],
    references: ['Bates\' Guide, Ch. 9 & 16', 'Braunwald\'s Heart Disease'],
  },
];

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Search entries by query string across name, description, technique, and associated conditions. */
export const searchPhysicalExamEntries = (query: string): PhysicalExamEntry[] => {
  const q = query.toLowerCase();
  return physicalExamDatabase.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.technique.toLowerCase().includes(q) ||
      e.associatedConditions.some((c) => c.toLowerCase().includes(q)) ||
      e.keyPearls.some((p) => p.toLowerCase().includes(q)),
  );
};

/** Filter entries by one or more categories. */
export const filterByCategory = (categories: PhysicalExamCategory[]): PhysicalExamEntry[] =>
  physicalExamDatabase.filter((e) => categories.includes(e.category));

/** Retrieve a single entry by its id, or undefined if not found. */
export const getEntryById = (id: string): PhysicalExamEntry | undefined =>
  physicalExamDatabase.find((e) => e.id === id);
