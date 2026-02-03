/**
 * Surgery Database
 *
 * Comprehensive surgery reference for SOMA medical education.
 * Covers ~30 entries across 8 categories: general-surgery, anesthesia,
 * pre-operative, post-operative, wound-care, minimally-invasive,
 * emergency-surgery, and complications.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SurgeryDatabaseCategory =
  | 'general-surgery'
  | 'anesthesia'
  | 'pre-operative'
  | 'post-operative'
  | 'wound-care'
  | 'minimally-invasive'
  | 'emergency-surgery'
  | 'complications';

export interface SurgeryEntry {
  id: string;
  name: string;
  nameEs: string;
  category: SurgeryDatabaseCategory;
  description: string;
  indications: string[];
  procedure: string[];
  risks: string[];
  recovery: string[];
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const entry = (
  id: string,
  name: string,
  nameEs: string,
  category: SurgeryDatabaseCategory,
  description: string,
  indications: string[],
  procedure: string[],
  risks: string[],
  recovery: string[],
  patientExplanation: string,
  emergencySigns: string[],
): SurgeryEntry => ({
  id, name, nameEs, category, description, indications, procedure,
  risks, recovery, patientExplanation, emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const SURGERY_ENTRIES: Record<string, SurgeryEntry> = {

  // ===== GENERAL SURGERY =====

  'appendectomy': entry(
    'appendectomy',
    'Appendectomy',
    'Apendicectomia',
    'general-surgery',
    'Surgical removal of the vermiform appendix, most commonly performed for acute appendicitis. Can be performed open or laparoscopically.',
    [
      'Acute appendicitis confirmed by clinical exam and imaging',
      'Perforated appendix with localized or diffuse peritonitis',
      'Recurrent appendicitis',
      'Appendiceal mass or mucocele found incidentally',
    ],
    [
      'Patient positioned supine under general anesthesia',
      'Laparoscopic approach: 3 trocar ports placed (umbilical, suprapubic, left lower quadrant)',
      'Appendix identified, mesoappendix divided with electrocautery or stapler',
      'Appendiceal base ligated and divided; specimen removed in retrieval bag',
      'Irrigation of peritoneal cavity if perforation present',
      'Port sites closed in layers',
    ],
    [
      'Surgical site infection (5-10% open, 2-5% laparoscopic)',
      'Intra-abdominal abscess formation',
      'Stump appendicitis from incomplete resection',
      'Bowel injury or ileus',
      'Bleeding from mesoappendix',
    ],
    [
      'Same-day discharge or 1-2 days for uncomplicated laparoscopic cases',
      'Advance diet as tolerated after return of bowel function',
      'Light activity within 1-2 weeks; full activity by 4-6 weeks',
      'Wound care: keep incisions clean and dry for 48 hours',
      'Follow-up in 2 weeks for wound check and pathology review',
    ],
    'Your appendix is a small pouch attached to your large intestine. When it becomes inflamed or infected (appendicitis), it needs to be removed to prevent it from bursting. The surgery is usually done through small incisions using a camera, and most people go home the same day or the next day.',
    [
      'Fever above 101.5 F (38.6 C) persisting more than 24 hours',
      'Increasing abdominal pain or rigidity',
      'Persistent nausea or vomiting preventing oral intake',
      'Redness, swelling, or drainage from incision sites',
      'Inability to pass gas or have a bowel movement for more than 3 days',
    ],
  ),

  'cholecystectomy': entry(
    'cholecystectomy',
    'Cholecystectomy',
    'Colecistectomia',
    'general-surgery',
    'Surgical removal of the gallbladder, most commonly performed laparoscopically for symptomatic cholelithiasis or cholecystitis.',
    [
      'Symptomatic gallstones (biliary colic)',
      'Acute cholecystitis',
      'Gallstone pancreatitis (after resolution of acute episode)',
      'Porcelain gallbladder (calcified wall, cancer risk)',
      'Gallbladder polyps greater than 10 mm',
    ],
    [
      'General anesthesia; patient supine in reverse Trendelenburg',
      'Four trocar ports: umbilical (camera), epigastric, two right subcostal',
      'Gallbladder retracted cephalad to expose Calot triangle',
      'Critical view of safety obtained: cystic duct and cystic artery identified',
      'Cystic artery and duct clipped and divided',
      'Gallbladder dissected from liver bed using electrocautery',
      'Specimen removed via umbilical port in retrieval bag',
      'Intraoperative cholangiogram if indicated',
    ],
    [
      'Bile duct injury (0.3-0.5%, most feared complication)',
      'Bile leak from cystic duct stump or duct of Luschka',
      'Retained common bile duct stones',
      'Post-cholecystectomy syndrome (persistent symptoms)',
      'Port-site hernia',
      'Bowel or vascular injury during trocar placement',
    ],
    [
      'Same-day discharge for most uncomplicated cases',
      'Clear liquids day of surgery; regular diet by next day',
      'Temporary fat intolerance common for 2-4 weeks',
      'Return to desk work in 1 week; physical labor in 2-4 weeks',
      'Steri-strips fall off on their own in 7-10 days',
    ],
    'Your gallbladder stores bile, a digestive fluid made by your liver. When gallstones cause pain or infection, removing the gallbladder is the best treatment. The surgery uses small incisions and a camera. You can live normally without a gallbladder because bile flows directly from the liver to the intestine.',
    [
      'Jaundice (yellowing of skin or eyes)',
      'Fever or chills after surgery',
      'Severe or worsening abdominal pain',
      'Dark urine or clay-colored stools',
      'Persistent nausea or vomiting',
    ],
  ),

  'hernia-repair': entry(
    'hernia-repair',
    'Inguinal Hernia Repair',
    'Reparacion de Hernia Inguinal',
    'general-surgery',
    'Surgical repair of a defect in the abdominal wall through which abdominal contents protrude. Mesh reinforcement is standard for most adult repairs.',
    [
      'Symptomatic inguinal hernia (pain, discomfort, bulging)',
      'Incarcerated hernia (irreducible but viable contents)',
      'Strangulated hernia (compromised blood supply, emergency)',
      'Enlarging hernia with risk of complications',
    ],
    [
      'Open tension-free repair (Lichtenstein): incision over inguinal canal, sac reduced, mesh placed over floor',
      'Laparoscopic TEP: preperitoneal approach, mesh placed posterior to defect',
      'Laparoscopic TAPP: transabdominal approach, peritoneum opened, mesh placed, peritoneum closed',
      'Mesh secured with tacks, sutures, or fibrin glue depending on approach',
      'Inspect for contralateral hernia during laparoscopic approach',
    ],
    [
      'Chronic groin pain or mesh-related discomfort (5-10%)',
      'Hernia recurrence (1-3% with mesh)',
      'Surgical site infection or mesh infection',
      'Seroma or hematoma formation',
      'Testicular ischemia or atrophy (rare, from spermatic cord injury)',
      'Urinary retention postoperatively',
    ],
    [
      'Home same day or next day',
      'Ice packs to groin for 48 hours to reduce swelling',
      'No heavy lifting (>15 lbs) for 4-6 weeks',
      'Walking encouraged immediately; drives in 1-2 weeks',
      'Scrotal support for comfort if swelling occurs',
      'Return to full activity by 6 weeks',
    ],
    'A hernia happens when part of your intestine or tissue pushes through a weak spot in your abdominal muscles, creating a bulge. Surgery repairs the weak spot and usually places a mesh patch to strengthen the area and prevent the hernia from coming back.',
    [
      'Sudden severe groin pain with a firm, tender bulge that cannot be pushed back',
      'Nausea, vomiting, or inability to pass gas (may indicate bowel obstruction)',
      'Fever or redness spreading around the incision',
      'Significant scrotal swelling or bruising that is worsening',
    ],
  ),

  'thyroidectomy': entry(
    'thyroidectomy',
    'Thyroidectomy',
    'Tiroidectomia',
    'general-surgery',
    'Partial or total removal of the thyroid gland. Performed for thyroid cancer, large goiters, hyperthyroidism unresponsive to medical therapy, or suspicious nodules.',
    [
      'Thyroid cancer (papillary, follicular, medullary, anaplastic)',
      'Suspicious thyroid nodule (Bethesda IV-VI on FNA)',
      'Compressive symptoms from multinodular goiter',
      'Graves disease refractory to medical management',
      'Retrosternal goiter',
    ],
    [
      'Low collar incision in a natural skin crease',
      'Subplatysmal flaps raised; strap muscles separated at midline raphe',
      'Superior and inferior thyroid vessels ligated',
      'Recurrent laryngeal nerve identified and preserved throughout dissection',
      'Parathyroid glands identified and preserved (auto-transplanted if devascularized)',
      'Thyroid lobe mobilized off trachea; isthmus divided',
      'Hemostasis ensured; drain placed if indicated',
      'Closure in layers; skin closed with subcuticular suture',
    ],
    [
      'Recurrent laryngeal nerve injury causing hoarseness (1-2% permanent)',
      'Hypoparathyroidism and hypocalcemia (transient 10-30%; permanent 1-3%)',
      'Postoperative hematoma with potential airway compromise',
      'Seroma formation',
      'Hypothyroidism (expected after total thyroidectomy)',
      'Wound infection (rare)',
    ],
    [
      'Overnight observation typical; some same-day discharge protocols exist',
      'Monitor serum calcium levels at 6 and 24 hours postoperatively',
      'Calcium and vitamin D supplementation as needed',
      'Thyroid hormone replacement starts day after total thyroidectomy',
      'Voice rest for 24-48 hours; voice assessment at follow-up',
      'Neck incision care: sun protection for 6-12 months to minimize scarring',
    ],
    'The thyroid is a butterfly-shaped gland in your neck that controls your metabolism. Sometimes it needs to be removed because of cancer, large growths, or overactivity that medicine cannot control. After surgery, you may need to take a daily thyroid hormone pill to replace what the gland used to make.',
    [
      'Difficulty breathing or swallowing (may indicate hematoma compressing airway)',
      'Numbness or tingling around the mouth, hands, or feet (low calcium)',
      'Muscle cramps or spasms',
      'Voice changes that worsen after surgery',
      'Neck swelling that is rapidly increasing',
    ],
  ),

  // ===== ANESTHESIA =====

  'general-anesthesia': entry(
    'general-anesthesia',
    'General Anesthesia',
    'Anestesia General',
    'anesthesia',
    'A medically induced state of unconsciousness with loss of protective reflexes, achieved through intravenous and inhaled agents. Required for most major surgical procedures.',
    [
      'Major abdominal, thoracic, or intracranial surgery',
      'Procedures requiring complete muscle relaxation',
      'Patient unable to cooperate with regional anesthesia',
      'Procedures where airway protection is needed',
      'Long-duration surgeries exceeding regional block duration',
    ],
    [
      'Pre-induction: IV access, monitors placed (ECG, SpO2, BP, EtCO2, temperature)',
      'Pre-oxygenation with 100% O2 for 3-5 minutes',
      'Induction with propofol (2 mg/kg) or etomidate, fentanyl, and neuromuscular blocker',
      'Endotracheal intubation or supraglottic airway placement',
      'Maintenance with volatile agent (sevoflurane/desflurane) or TIVA (propofol infusion)',
      'Intraoperative monitoring and adjustment of anesthetic depth',
      'Emergence: discontinue agents, reverse neuromuscular blockade with sugammadex or neostigmine',
      'Extubation when patient meets criteria (spontaneous breathing, following commands)',
    ],
    [
      'Aspiration pneumonitis',
      'Malignant hyperthermia (rare, 1:15,000-1:50,000)',
      'Difficult airway or failed intubation',
      'Anaphylaxis to anesthetic agents',
      'Postoperative nausea and vomiting (PONV, 30%)',
      'Awareness under anesthesia (0.1-0.2%)',
      'Dental injury during intubation',
      'Sore throat from endotracheal tube',
    ],
    [
      'Recovery in PACU for 1-2 hours with continuous monitoring',
      'Advance from clear liquids to regular diet as tolerated',
      'Manage PONV with ondansetron or multimodal antiemetics',
      'Pain management with multimodal approach (opioid-sparing when possible)',
      'Cognitive effects (grogginess, mild confusion) resolve within 24 hours typically',
      'No driving or important decisions for 24 hours',
    ],
    'General anesthesia puts you into a deep sleep so you feel no pain during surgery. An anesthesiologist stays with you the entire time, monitoring your heart, breathing, and brain activity. You will breathe through a tube placed in your throat while asleep. When surgery is done, the medicines are stopped and you wake up in the recovery room.',
    [
      'Difficulty breathing or shortness of breath after discharge',
      'Chest pain or irregular heartbeat',
      'Persistent confusion lasting more than 24 hours',
      'Severe nausea and vomiting preventing fluid intake',
      'Allergic reaction (rash, swelling, difficulty breathing)',
    ],
  ),

  'regional-anesthesia': entry(
    'regional-anesthesia',
    'Regional Anesthesia',
    'Anestesia Regional',
    'anesthesia',
    'Nerve blockade techniques that provide anesthesia and analgesia to a specific body region while the patient remains conscious. Includes spinal, epidural, and peripheral nerve blocks.',
    [
      'Lower extremity and pelvic surgery (spinal/epidural)',
      'Upper extremity surgery (brachial plexus block)',
      'Cesarean delivery (spinal or epidural)',
      'Postoperative pain management as adjunct to general anesthesia',
      'Patients with significant pulmonary disease where avoiding intubation is preferred',
    ],
    [
      'Spinal: lumbar puncture with local anesthetic injected into subarachnoid space at L3-L4',
      'Epidural: catheter placed in epidural space for continuous infusion',
      'Peripheral nerve block: ultrasound-guided injection of local anesthetic around target nerve',
      'Verify block adequacy with sensory and motor testing before surgical start',
      'Sedation may be administered for patient comfort',
      'Continuous catheter techniques allow extended postoperative analgesia',
    ],
    [
      'Post-dural puncture headache (1-2% after spinal)',
      'Epidural hematoma (rare, risk increased with anticoagulation)',
      'Local anesthetic systemic toxicity (LAST)',
      'Nerve injury (transient paresthesias more common; permanent injury rare)',
      'Hypotension from sympathetic blockade',
      'Urinary retention',
      'Infection at injection site or epidural abscess',
      'High or total spinal causing respiratory arrest (rare)',
    ],
    [
      'Sensation and motor function return over 2-6 hours depending on agent used',
      'Do not walk or bear weight until block has fully resolved',
      'Protect blocked extremity from injury (no feeling means no pain warning)',
      'Catheter site should be kept clean and dry if continuous block in place',
      'Report any prolonged numbness or weakness beyond expected duration',
    ],
    'Regional anesthesia numbs a specific part of your body so you do not feel pain during surgery, but you stay awake or lightly sedated. The anesthesiologist uses ultrasound to guide a needle near the nerves supplying the surgical area and injects numbing medicine. This often provides excellent pain relief for hours after surgery.',
    [
      'Severe headache that is worse when sitting up (may indicate spinal fluid leak)',
      'Progressive numbness or weakness beyond expected timeframe',
      'Back pain with fever (may indicate infection)',
      'Difficulty breathing',
      'Signs of allergic reaction (rash, tongue or lip swelling)',
    ],
  ),

  'monitored-anesthesia-care': entry(
    'monitored-anesthesia-care',
    'Monitored Anesthesia Care (MAC)',
    'Cuidado Anestesico Monitorizado',
    'anesthesia',
    'Anesthesia service involving monitoring and varying levels of sedation while the patient maintains spontaneous ventilation. Often used for minor procedures or in combination with local anesthesia.',
    [
      'Endoscopic procedures (colonoscopy, upper endoscopy)',
      'Minor skin or subcutaneous procedures',
      'Cataract and other ophthalmologic surgery',
      'Cardiac catheterization and electrophysiology procedures',
      'Procedures in patients with high general anesthesia risk',
    ],
    [
      'IV access established; standard monitors applied',
      'Supplemental oxygen via nasal cannula or face mask',
      'Sedation titrated with propofol infusion, midazolam, or dexmedetomidine',
      'Opioids (fentanyl) for analgesia as needed',
      'Surgeon applies local anesthesia to surgical site',
      'Continuous monitoring of respiratory status, hemodynamics, and level of consciousness',
      'Depth of sedation adjusted per surgical stimulation and patient comfort',
    ],
    [
      'Respiratory depression or airway obstruction',
      'Aspiration (risk lower than general anesthesia but not zero)',
      'Hemodynamic instability (hypotension, bradycardia)',
      'Paradoxical agitation from midazolam',
      'Over-sedation requiring conversion to general anesthesia',
    ],
    [
      'Rapid recovery; most patients discharged within 1-2 hours',
      'No driving for 24 hours after sedation',
      'Clear liquids first, advance as tolerated',
      'Minimal postoperative nausea compared to general anesthesia',
      'Responsible adult must accompany patient home',
    ],
    'Monitored anesthesia care is a lighter form of sedation where you remain breathing on your own. You may feel drowsy or drift in and out of sleep, but you are not fully unconscious. An anesthesiologist monitors you throughout and adjusts medications to keep you comfortable. This is commonly used for minor procedures or colonoscopies.',
    [
      'Difficulty breathing or very slow breathing after discharge',
      'Excessive drowsiness or inability to be woken up',
      'Chest pain or irregular heartbeat',
      'Severe nausea or vomiting',
    ],
  ),

  // ===== PRE-OPERATIVE =====

  'pre-op-assessment': entry(
    'pre-op-assessment',
    'Pre-Operative Assessment',
    'Evaluacion Preoperatoria',
    'pre-operative',
    'Systematic evaluation of a patient before surgery to identify and optimize medical conditions, assess surgical risk, and plan appropriate anesthetic management.',
    [
      'All patients undergoing elective or semi-urgent surgery',
      'Risk stratification for cardiac, pulmonary, and metabolic comorbidities',
      'Identification of medications requiring adjustment (anticoagulants, diabetic agents)',
      'Assessment of airway and anesthetic risks',
    ],
    [
      'Review medical history, surgical history, anesthetic history, and family history',
      'Complete physical examination including airway assessment (Mallampati score)',
      'Order labs based on patient age and comorbidities (CBC, BMP, coagulation, type and screen)',
      'ECG for patients over 50 or with cardiac risk factors',
      'Functional capacity assessment (can patient climb 2 flights of stairs = 4 METs)',
      'Apply risk calculators: ASA Physical Status, Revised Cardiac Risk Index, ACS NSQIP',
      'Optimize chronic conditions: glycemic control (HbA1c <8%), blood pressure, nutritional status',
      'Plan for DVT prophylaxis, antibiotic prophylaxis, and blood product availability',
    ],
    [
      'Failure to identify significant comorbidity leading to intraoperative complication',
      'Unrecognized difficult airway',
      'Medication interactions with anesthetic agents',
      'Cancellation of surgery due to inadequate preparation',
      'Perioperative cardiac event in unoptimized patient',
    ],
    [
      'Pre-operative instructions reviewed with patient (NPO guidelines, medication adjustments)',
      'Informed consent process completed',
      'Pre-surgical marking performed as applicable',
      'Patient given contact number for questions before surgery',
    ],
    'Before your surgery, your medical team needs to check your overall health to make sure you are as safe as possible. This includes reviewing your medications, checking your heart and lungs, and running blood tests. You will meet with your anesthesiologist to discuss the best plan for keeping you comfortable during surgery.',
    [
      'New chest pain, shortness of breath, or dizziness before surgery (report immediately)',
      'Fever or signs of active infection before surgery date',
      'Failure to follow NPO (fasting) instructions before surgery',
    ],
  ),

  'npo-guidelines': entry(
    'npo-guidelines',
    'NPO (Fasting) Guidelines',
    'Guias de Ayuno Preoperatorio',
    'pre-operative',
    'Evidence-based fasting guidelines before anesthesia to reduce aspiration risk. Based on ASA Practice Guidelines for Preoperative Fasting.',
    [
      'All patients receiving general anesthesia, regional anesthesia, or procedural sedation',
      'Reduction of gastric volume and acidity to minimize aspiration risk',
    ],
    [
      'Clear liquids: 2-hour minimum fast (water, black coffee, apple juice, pulp-free juice)',
      'Breast milk: 4-hour minimum fast',
      'Light meal or non-human milk: 6-hour minimum fast',
      'Full meal with fried or fatty foods: 8-hour minimum fast',
      'Continue clear carbohydrate-rich drinks up to 2 hours before for enhanced recovery protocols',
      'Take essential medications (cardiac, anti-seizure, inhaler) with sip of water on morning of surgery',
      'Hold diabetic medications and adjust insulin per protocol',
      'Hold ACE inhibitors/ARBs on morning of surgery per institutional protocol',
    ],
    [
      'Aspiration pneumonitis if guidelines not followed',
      'Dehydration and hypoglycemia if fasting is excessively prolonged',
      'Surgery cancellation if patient ate or drank outside guidelines',
      'Electrolyte imbalance from prolonged fasting in vulnerable patients',
    ],
    [
      'Resume oral intake as directed by surgical team postoperatively',
      'Start with small sips of clear liquids and advance as tolerated',
    ],
    'Before surgery, you need to stop eating and drinking for a specific period to keep your stomach empty. This prevents food or liquid from going into your lungs while you are under anesthesia. You can usually drink clear liquids like water up until 2 hours before, but you must stop solid food at least 6 to 8 hours before.',
    [
      'If you accidentally ate or drank outside the instructions, notify your surgical team immediately',
      'Diabetic patients experiencing low blood sugar symptoms while fasting should call their surgeon',
    ],
  ),

  'informed-consent': entry(
    'informed-consent',
    'Informed Consent Process',
    'Proceso de Consentimiento Informado',
    'pre-operative',
    'Legal and ethical process ensuring patients understand the proposed procedure, alternatives, risks, and benefits before agreeing to surgery. A fundamental patient right.',
    [
      'All surgical and invasive procedures',
      'Blood product transfusion',
      'Procedures involving anesthesia',
      'Experimental or off-label treatments',
    ],
    [
      'Surgeon explains diagnosis and proposed procedure in language patient understands',
      'Describe expected benefits and goals of surgery',
      'Discuss material risks and potential complications including rare but serious ones',
      'Present alternative treatment options including no treatment',
      'Allow patient to ask questions and express concerns',
      'Verify patient understanding using teach-back method',
      'Document consent with patient signature, witness, and date',
      'Ensure patient is not under influence of sedating medications when signing',
    ],
    [
      'Consent obtained without adequate explanation (legal liability)',
      'Language barrier leading to misunderstanding',
      'Patient consenting under duress or undue influence',
      'Failure to disclose material risks',
      'Performing procedure beyond scope of consent',
    ],
    [
      'Patient may withdraw consent at any time before the procedure',
      'Copy of consent form provided to patient',
      'If procedure scope changes intraoperatively, additional consent may be needed',
    ],
    'Before any surgery, your doctor must explain what will be done, why it is recommended, the risks involved, and what other options you have. You have the right to ask questions, take time to decide, and say no. Signing a consent form means you understand and agree to move forward, but you can change your mind at any point before the procedure.',
    [
      'If you feel pressured or do not understand what you are consenting to, speak up before signing',
    ],
  ),

  'surgical-site-marking': entry(
    'surgical-site-marking',
    'Surgical Site Marking and Timeout',
    'Marcaje del Sitio Quirurgico y Pausa de Seguridad',
    'pre-operative',
    'Patient safety protocol to prevent wrong-site, wrong-side, and wrong-patient surgery. Part of the WHO Surgical Safety Checklist and Joint Commission Universal Protocol.',
    [
      'All procedures involving laterality (left vs right)',
      'Procedures involving multiple structures or levels (e.g., spine)',
      'All operative cases per Universal Protocol requirements',
    ],
    [
      'Surgeon marks the operative site with indelible marker while patient is awake and can confirm',
      'Mark must be visible after draping',
      'Patient verifies correct site, side, and procedure',
      'Pre-procedure verification: correct patient, correct procedure, correct site, correct implants/equipment',
      'Surgical timeout immediately before incision: entire team pauses to confirm patient identity, procedure, site, positioning, antibiotic administration, DVT prophylaxis, anticipated critical events',
      'All team members empowered to speak up if discrepancy identified',
    ],
    [
      'Wrong-site surgery (a "never event")',
      'Wrong-side surgery',
      'Wrong-patient procedure',
      'Retained surgical instruments',
    ],
    [
      'Post-procedure debrief: review what went well and any concerns for recovery',
      'Instrument and sponge count confirmed correct before closing',
    ],
    'Before your surgery, the surgeon will mark the spot on your body where the operation will happen. This is an important safety step. In the operating room, the entire team pauses before starting to confirm your name, the correct procedure, and the correct body part. You can and should speak up if anything seems wrong.',
    [
      'If your surgical site marking is missing or seems incorrect, alert the team immediately',
    ],
  ),

  // ===== POST-OPERATIVE =====

  'post-op-pain-management': entry(
    'post-op-pain-management',
    'Post-Operative Pain Management',
    'Manejo del Dolor Postoperatorio',
    'post-operative',
    'Multimodal approach to controlling pain after surgery, balancing adequate analgesia with minimizing opioid-related side effects. Incorporates pharmacologic and non-pharmacologic strategies.',
    [
      'All surgical patients experiencing acute postoperative pain',
      'Enhanced Recovery After Surgery (ERAS) protocols',
      'Patients with chronic pain or opioid tolerance requiring tailored plans',
      'Pediatric and geriatric populations needing age-appropriate regimens',
    ],
    [
      'Multimodal analgesia: combine acetaminophen (scheduled), NSAIDs (if not contraindicated), and gabapentinoids',
      'Regional techniques: nerve blocks, epidural analgesia, wound infiltration with local anesthetic',
      'Patient-controlled analgesia (PCA) with opioids for moderate-to-severe pain',
      'Oral opioids (oxycodone, hydromorphone) for breakthrough pain, titrated to effect',
      'Non-pharmacologic: ice, elevation, positioning, breathing exercises, early ambulation',
      'Pain assessment using validated scales (NRS 0-10, Wong-Baker FACES for children)',
      'Reassess pain after each intervention; adjust plan based on response',
      'Transition from IV to oral analgesics as patient tolerates oral intake',
    ],
    [
      'Opioid-related: respiratory depression, sedation, nausea, constipation, urinary retention',
      'NSAID-related: GI bleeding, renal impairment, platelet dysfunction',
      'Inadequate pain control leading to poor mobilization and pulmonary complications',
      'Development of chronic postsurgical pain (5-10% of major surgeries)',
      'Opioid dependence or misuse with prolonged prescriptions',
    ],
    [
      'Scheduled acetaminophen and NSAIDs for 5-7 days after surgery',
      'Opioids for breakthrough pain only, with plan to taper within 1-2 weeks',
      'Stool softener prescribed with any opioid prescription',
      'Ice packs 20 minutes on / 20 minutes off for first 48 hours',
      'Report uncontrolled pain (consistently >7/10) to surgical team',
    ],
    'After surgery, some pain is expected, but the goal is to keep it manageable so you can move, breathe deeply, and recover. Your team will use a combination of medicines, including non-opioid pain relievers, anti-inflammatory drugs, and sometimes nerve blocks, to reduce the need for strong painkillers. Let your nurse know your pain level so they can adjust your treatment.',
    [
      'Severe pain not relieved by prescribed medications',
      'Excessive drowsiness or difficulty staying awake (may indicate opioid overdose)',
      'Difficulty breathing or very slow breathing rate',
      'Signs of allergic reaction to pain medications',
    ],
  ),

  'post-op-dvt-prevention': entry(
    'post-op-dvt-prevention',
    'DVT Prophylaxis',
    'Profilaxis de Trombosis Venosa Profunda',
    'post-operative',
    'Prevention of venous thromboembolism (deep vein thrombosis and pulmonary embolism) in surgical patients through mechanical and pharmacologic measures.',
    [
      'All hospitalized surgical patients (risk-stratified approach)',
      'High-risk patients: major orthopedic, oncologic, or pelvic surgery',
      'Moderate-risk: most general surgery procedures lasting >45 minutes',
      'Patients with additional risk factors: malignancy, obesity, prior VTE, immobility',
    ],
    [
      'Risk stratification using Caprini or Padua score',
      'Mechanical prophylaxis: sequential compression devices (SCDs) applied before induction',
      'Early ambulation: up to chair evening of surgery, walking POD1 when feasible',
      'Pharmacologic prophylaxis: low-molecular-weight heparin (enoxaparin 40 mg SQ daily) or unfractionated heparin (5000 units SQ q8-12h)',
      'Extended prophylaxis for 4 weeks after major abdominal or pelvic cancer surgery',
      'Extended prophylaxis for 10-35 days after total hip or knee replacement',
      'Graduated compression stockings for additional risk reduction',
      'Adequate hydration to prevent hemoconcentration',
    ],
    [
      'Deep vein thrombosis (DVT) if prophylaxis inadequate',
      'Pulmonary embolism (PE), potentially fatal',
      'Heparin-induced thrombocytopenia (HIT)',
      'Bleeding complications from pharmacologic prophylaxis',
      'Post-thrombotic syndrome after DVT',
    ],
    [
      'Continue compression stockings or SCDs until fully ambulatory',
      'Self-administer LMWH injections at home if prescribed for extended prophylaxis',
      'Stay well hydrated and avoid prolonged immobility',
      'Perform ankle pump exercises when sitting or lying in bed',
      'Report any calf swelling, redness, or tenderness',
    ],
    'After surgery, blood clots can form in the deep veins of your legs because you are less active. These clots can be dangerous if they travel to your lungs. To prevent this, your team will use compression devices on your legs, blood-thinning medication, and encourage you to get up and walk as soon as it is safe.',
    [
      'Sudden calf or leg swelling, pain, or warmth',
      'Sudden shortness of breath or chest pain (may be pulmonary embolism)',
      'Rapid heart rate with lightheadedness',
      'Coughing up blood',
    ],
  ),

  'enhanced-recovery-eras': entry(
    'enhanced-recovery-eras',
    'Enhanced Recovery After Surgery (ERAS)',
    'Recuperacion Mejorada Despues de Cirugia',
    'post-operative',
    'Evidence-based multimodal perioperative care pathway designed to reduce surgical stress, maintain physiologic function, and accelerate recovery. Reduces length of stay and complications.',
    [
      'Colorectal surgery (most extensively studied)',
      'Major abdominal and pelvic surgery',
      'Thoracic surgery, orthopedic surgery, gynecologic oncology',
      'Any surgical service implementing standardized recovery protocols',
    ],
    [
      'Pre-operative: patient education, carbohydrate loading 2 hours before, minimize fasting, no routine bowel prep',
      'Intraoperative: goal-directed fluid therapy, minimally invasive approach when possible, maintain normothermia, multimodal analgesia',
      'Postoperative: early oral intake (liquids POD0, diet POD1), early mobilization (out of bed POD0), multimodal opioid-sparing analgesia, early removal of catheters and drains',
      'Standardized discharge criteria: tolerating oral intake, pain controlled with oral medications, ambulating, no signs of complications',
      'Audit compliance with protocol elements',
    ],
    [
      'Protocol non-compliance reducing effectiveness',
      'Premature discharge leading to readmission',
      'Ileus if diet advanced too rapidly in some patients',
      'Under-treatment of pain if opioid-sparing taken to extreme',
    ],
    [
      'Length of stay reduced by 1-2 days on average compared to traditional care',
      'Return to bowel function 1 day earlier',
      'Complication rates reduced by 30-50% in compliant programs',
      'Patient satisfaction improved with active role in recovery',
      'Follow-up call within 24-48 hours of discharge',
    ],
    'Enhanced Recovery is a modern approach to surgery that helps you recover faster by preparing your body before surgery, using the best techniques during surgery, and getting you eating and moving sooner afterward. You will receive detailed instructions to follow at each step, and the goal is for you to get back to your normal life as quickly and safely as possible.',
    [
      'Unable to tolerate liquids or food after discharge',
      'Fever, increasing pain, or signs of infection',
      'Not having a bowel movement within 3-4 days of surgery',
      'Dizziness, weakness, or feeling faint',
    ],
  ),

  'post-op-ileus': entry(
    'post-op-ileus',
    'Post-Operative Ileus',
    'Ileo Postoperatorio',
    'post-operative',
    'Temporary impairment of gastrointestinal motility following surgery, most common after abdominal procedures. A normal physiologic response that becomes pathologic when prolonged beyond 3-5 days.',
    [
      'Expected after any abdominal surgery (temporary)',
      'Pathologic ileus diagnosed when bowel function fails to return by POD 3-5',
      'Differentiation from mechanical small bowel obstruction is critical',
    ],
    [
      'Prevention: minimize opioids, use multimodal analgesia, early ambulation, gum chewing',
      'Diagnosis: absent bowel sounds, abdominal distension, nausea, intolerance of oral intake',
      'Imaging: abdominal X-ray or CT to rule out mechanical obstruction',
      'Management: NPO with IV fluids, nasogastric tube if significant distension/vomiting',
      'Correct electrolyte abnormalities (especially hypokalemia, hypomagnesemia)',
      'Alvimopan (Entereg) for opioid-induced ileus prevention after bowel surgery',
      'Advance diet cautiously as bowel function returns (flatus, bowel sounds, bowel movement)',
    ],
    [
      'Aspiration from vomiting',
      'Electrolyte imbalance from protracted vomiting or NG output',
      'Prolonged hospitalization and increased costs',
      'Missed mechanical bowel obstruction requiring surgical intervention',
      'Mesenteric ischemia (rare but must be considered)',
    ],
    [
      'Resume oral intake slowly: clear liquids first, then advance',
      'Walk as much as possible to stimulate bowel function',
      'Minimize opioid use for pain control',
      'Chew gum for 30 minutes three times daily (stimulates GI motility)',
      'Monitor for return of gas passing and bowel movements',
    ],
    'After abdominal surgery, your intestines temporarily slow down or stop working, which is normal. This is called an ileus. You may feel bloated, nauseous, or unable to eat. Walking, chewing gum, and avoiding strong pain medications that slow the gut all help your bowels wake up. Most people recover bowel function within 2-4 days.',
    [
      'No bowel movement or passage of gas for more than 4-5 days after surgery',
      'Severe abdominal distension or worsening pain',
      'Repeated vomiting (especially green or brown bile)',
      'Inability to keep down any liquids',
    ],
  ),

  // ===== WOUND CARE =====

  'wound-healing-phases': entry(
    'wound-healing-phases',
    'Phases of Wound Healing',
    'Fases de la Cicatrizacion',
    'wound-care',
    'The four overlapping phases of tissue repair following surgical incision or traumatic injury: hemostasis, inflammation, proliferation, and remodeling.',
    [
      'Understanding normal healing trajectory to identify delayed or abnormal healing',
      'Guiding wound care management at each phase',
      'Patient education about expected wound appearance over time',
    ],
    [
      'Hemostasis (minutes): platelet aggregation, fibrin clot formation, vasoconstriction',
      'Inflammation (days 1-5): neutrophils then macrophages migrate; erythema, warmth, swelling are normal',
      'Proliferation (days 5-21): fibroblasts deposit collagen, granulation tissue forms, angiogenesis, epithelial cells migrate across wound (epithelialization), wound contracts',
      'Remodeling (3 weeks to 1-2 years): collagen cross-linking and reorganization, scar matures from red/raised to flat/pale, maximum tensile strength reaches 80% of original tissue',
    ],
    [
      'Delayed healing from infection, poor nutrition, diabetes, immunosuppression, smoking',
      'Hypertrophic scarring or keloid formation',
      'Wound dehiscence if tensile strength insufficient',
      'Chronic wound formation if healing stalls in inflammatory phase',
    ],
    [
      'Keep wound clean and protected during inflammation phase',
      'Moist wound environment promotes optimal healing',
      'Adequate protein and vitamin C intake support collagen synthesis',
      'Sun protection of scar for 6-12 months reduces hyperpigmentation',
      'Scar massage starting at 2-3 weeks may improve scar quality',
    ],
    'Your body heals a surgical wound in four stages over weeks to months. First, bleeding stops and a clot forms. Then, the wound becomes red and swollen as your immune system cleans it. Next, new tissue fills in the wound. Finally, the scar strengthens and matures over many months. Eating well, not smoking, and keeping the wound clean help this process.',
    [
      'Increasing redness, warmth, or swelling around the wound after 5 days',
      'Pus or foul-smelling drainage from the wound',
      'Wound edges separating or opening',
      'Red streaks extending from the wound (lymphangitis)',
      'Fever with wound changes',
    ],
  ),

  'surgical-wound-care': entry(
    'surgical-wound-care',
    'Surgical Wound Care',
    'Cuidado de Heridas Quirurgicas',
    'wound-care',
    'Evidence-based management of surgical incisions including dressing selection, wound assessment, and infection prevention techniques.',
    [
      'All postoperative patients with surgical incisions',
      'Prevention and early detection of surgical site infection',
      'Patient education for home wound care after discharge',
    ],
    [
      'Initial dressing removed at 24-48 hours per surgeon instructions',
      'Assess wound for approximation, erythema, drainage, and signs of infection',
      'Clean with gentle soap and water or normal saline (no hydrogen peroxide or alcohol)',
      'Apply appropriate dressing: dry gauze for clean wounds, moisture-retentive for healing by secondary intention',
      'Steri-strips or skin glue: leave in place until they fall off naturally',
      'Staple or suture removal per schedule (face 3-5 days, trunk 7-10 days, extremities 10-14 days)',
      'Negative pressure wound therapy (wound VAC) for complex or at-risk wounds',
      'Document wound assessment at each evaluation',
    ],
    [
      'Surgical site infection (SSI): superficial incisional, deep incisional, or organ/space',
      'Wound dehiscence or evisceration',
      'Seroma or hematoma under incision',
      'Contact dermatitis from dressings or adhesives',
      'Delayed healing from poor technique or patient factors',
    ],
    [
      'Shower with gentle soap after 48 hours (or as directed); pat dry',
      'Do not soak wound (no baths, swimming, hot tubs) for 2-4 weeks',
      'Change dressings as instructed or when soiled',
      'Watch for signs of infection daily',
      'Report any wound opening or new drainage',
    ],
    'After surgery, taking care of your incision helps it heal properly and prevents infection. Keep the wound clean and dry for the first 48 hours, then you can usually shower gently. Watch for signs of infection like increasing redness, swelling, warmth, or drainage. Do not pick at scabs, steri-strips, or stitches. Follow your surgeon\'s specific instructions.',
    [
      'Wound opening with visible deeper tissues or contents',
      'Thick, cloudy, or foul-smelling drainage',
      'Expanding redness or red streaks from the wound',
      'Fever above 101 F (38.3 C)',
      'Wound bleeding that does not stop with gentle pressure for 15 minutes',
    ],
  ),

  'suture-staple-types': entry(
    'suture-staple-types',
    'Suture and Staple Types',
    'Tipos de Suturas y Grapas',
    'wound-care',
    'Overview of wound closure materials including absorbable and non-absorbable sutures, skin staples, tissue adhesives, and adhesive strips. Selection depends on tissue type, tension, and cosmetic requirements.',
    [
      'Wound closure after surgical incision or laceration repair',
      'Selection based on tissue type, wound tension, and healing requirements',
      'Patient education about what to expect with different closure types',
    ],
    [
      'Absorbable sutures (Vicryl, Monocryl, PDS): dissolve over weeks to months; used for deep tissues, subcuticular closure',
      'Non-absorbable sutures (Nylon, Prolene, Silk): require removal; used for skin, tendon repair, vascular anastomosis',
      'Skin staples: fast application, good for scalp and trunk; removed at 7-14 days',
      'Tissue adhesive (Dermabond): topical skin closure for low-tension wounds; sloughs off in 7-10 days',
      'Steri-strips: adhesive strips for low-tension wounds or reinforcing other closures',
      'Running vs interrupted technique chosen based on wound length, tension, and infection risk',
      'Subcuticular (buried) closure provides best cosmetic outcome for skin',
    ],
    [
      'Suture reaction or granuloma formation',
      'Wound infection (higher with braided sutures like silk)',
      'Suture marks (railroad tracks) from leaving non-absorbable sutures too long',
      'Wound dehiscence if sutures removed too early or placed with inadequate bites',
      'Staple-related: more visible scarring, uncomfortable removal',
    ],
    [
      'Non-absorbable suture removal timing varies by location (see wound care entry)',
      'Staple removal with specialized staple remover at follow-up visit',
      'Steri-strips: do not pull off; let them fall off naturally',
      'Tissue adhesive: do not pick or scrub; avoid ointments over glue',
      'After suture removal, apply steri-strips for 1-2 weeks for additional support',
    ],
    'There are different ways to close a surgical wound. Your surgeon may use dissolving stitches under the skin, removable stitches or staples on top, special skin glue, or adhesive strips. Dissolving stitches do not need to be removed. Other types are removed at a follow-up visit. Do not pull on stitches, staples, or strips yourself.',
    [
      'Suture or staple pulling through the skin or wound opening',
      'Signs of infection around suture line',
      'Allergic reaction to wound closure material (rash, swelling)',
    ],
  ),

  // ===== MINIMALLY INVASIVE =====

  'laparoscopic-surgery': entry(
    'laparoscopic-surgery',
    'Laparoscopic Surgery',
    'Cirugia Laparoscopica',
    'minimally-invasive',
    'Surgical technique using small incisions, a camera (laparoscope), and specialized instruments to perform abdominal and pelvic operations. Offers reduced pain, shorter recovery, and smaller scars compared to open surgery.',
    [
      'Cholecystectomy (most common laparoscopic procedure)',
      'Appendectomy',
      'Hernia repair (TEP, TAPP)',
      'Colorectal resection',
      'Bariatric surgery (gastric bypass, sleeve gastrectomy)',
      'Diagnostic laparoscopy for unexplained abdominal pain or staging',
      'Gynecologic procedures (hysterectomy, ovarian surgery)',
    ],
    [
      'Pneumoperitoneum established with CO2 insufflation via Veress needle or Hasson (open) technique',
      'Trocars placed for camera and working instruments (typically 3-5 ports, 5-12mm)',
      'Camera inserted; abdominal cavity inspected',
      'Procedure performed using laparoscopic instruments under video guidance',
      'Specimen removed via port site, often in retrieval bag',
      'CO2 desufflated; trocar sites closed',
      'Local anesthetic injected at port sites for postoperative pain control',
    ],
    [
      'Trocar injury to bowel or blood vessels during entry',
      'CO2 embolism (rare)',
      'Subcutaneous emphysema',
      'Shoulder pain from diaphragmatic irritation by residual CO2',
      'Port-site hernia (especially at umbilical site >10mm)',
      'Conversion to open surgery if anatomy unclear or complications arise',
      'Thermal injury from electrocautery instruments',
    ],
    [
      'Most patients discharged same day or POD1',
      'Shoulder tip pain from residual CO2 resolves in 24-48 hours (walking helps)',
      'Diet advanced quickly; usually regular diet by POD1',
      'Light activity within 1-2 weeks; full activity 2-4 weeks',
      'Incision care: small adhesive strips over port sites',
      'Return to work 1-2 weeks earlier than open surgery equivalent',
    ],
    'Laparoscopic surgery uses small incisions (usually 5-12 millimeters) instead of one large cut. A tiny camera and special instruments are inserted through these small openings. The surgeon watches a screen to perform the operation. Benefits include less pain, smaller scars, shorter hospital stays, and faster recovery compared to traditional open surgery.',
    [
      'Increasing abdominal pain or distension after surgery',
      'Fever or signs of infection at port sites',
      'Shoulder pain that is severe or worsening after 48 hours',
      'Nausea and vomiting preventing oral intake',
      'Any sign of internal bleeding (lightheadedness, rapid pulse, pallor)',
    ],
  ),

  'robotic-surgery': entry(
    'robotic-surgery',
    'Robotic-Assisted Surgery',
    'Cirugia Asistida por Robot',
    'minimally-invasive',
    'Minimally invasive surgery performed using a robotic surgical system (e.g., da Vinci) that provides 3D visualization, tremor filtration, and articulating instruments with enhanced dexterity.',
    [
      'Prostatectomy (most common robotic procedure)',
      'Hysterectomy and gynecologic oncology',
      'Colorectal surgery',
      'Cardiac surgery (mitral valve repair)',
      'Head and neck surgery (transoral robotic surgery)',
      'Complex hernia repair',
      'Procedures requiring fine dissection in deep or narrow spaces',
    ],
    [
      'Patient positioned and docked to robotic system',
      'Ports placed: camera port plus 3-4 robotic arm ports and optional assistant port',
      'Surgeon sits at console away from patient, controlling instruments',
      'Robotic arms translate hand movements with motion scaling and tremor elimination',
      'Wristed instruments allow 7 degrees of freedom (exceeding human wrist)',
      '3D high-definition visualization with up to 10x magnification',
      'Bedside assistant manages suction, retraction, and stapling',
      'System undocked; port sites closed as in laparoscopic surgery',
    ],
    [
      'Same risks as laparoscopic surgery (trocar injury, CO2 effects)',
      'Mechanical failure of robotic system (rare, requires conversion)',
      'Longer operative times during learning curve',
      'Higher cost compared to standard laparoscopy',
      'Loss of haptic (tactile) feedback',
      'Positioning injuries from prolonged steep Trendelenburg',
    ],
    [
      'Similar recovery timeline to standard laparoscopic surgery',
      'Most patients discharged POD1',
      'Port-site incisions slightly larger than standard laparoscopy',
      'Expected functional outcomes (e.g., continence, potency for prostatectomy) discussed preoperatively',
    ],
    'Robotic surgery is a type of minimally invasive surgery where your surgeon controls a robotic system from a nearby console. The robot does not operate on its own; it translates your surgeon\'s hand movements into very precise movements inside your body. This technology allows for better visualization and more precise surgery in tight spaces, with small incisions and faster recovery.',
    [
      'Same emergency signs as laparoscopic surgery: increasing pain, fever, bleeding',
      'Difficulty urinating after urologic robotic procedures',
      'Signs of internal bleeding (dizziness, rapid heartbeat, pallor)',
    ],
  ),

  'endoscopic-procedures': entry(
    'endoscopic-procedures',
    'Endoscopic Procedures',
    'Procedimientos Endoscopicos',
    'minimally-invasive',
    'Diagnostic and therapeutic procedures performed using a flexible or rigid endoscope inserted through a natural body opening or small incision to visualize and treat conditions within hollow organs.',
    [
      'Upper endoscopy (EGD): dysphagia, GI bleeding, Barrett surveillance, foreign body removal',
      'Colonoscopy: colorectal cancer screening, polyp removal, GI bleeding evaluation',
      'Bronchoscopy: airway evaluation, biopsy, foreign body removal',
      'Cystoscopy: hematuria evaluation, bladder tumor resection',
      'ERCP: bile duct stone removal, stent placement for biliary obstruction',
    ],
    [
      'Patient preparation varies by procedure (bowel prep for colonoscopy, NPO for EGD)',
      'Sedation: MAC or moderate sedation for most GI endoscopy; general anesthesia for ERCP or bronchoscopy',
      'Endoscope advanced under direct visualization',
      'Diagnostic: inspection, photo documentation, tissue biopsy',
      'Therapeutic: polypectomy, hemostasis (clips, cautery, injection), dilation, stent placement',
      'Specimen sent for histopathology',
      'Endoscope withdrawn with final inspection',
    ],
    [
      'Perforation (0.1% colonoscopy, 0.5-1% ERCP)',
      'Bleeding after polypectomy or biopsy (1-2%)',
      'Post-ERCP pancreatitis (3-5%)',
      'Aspiration during sedation',
      'Missed lesions (incomplete examination)',
      'Infection (especially with ERCP)',
      'Adverse reaction to sedation or bowel prep',
    ],
    [
      'Monitor in recovery for 30-60 minutes after sedation',
      'Resume diet as tolerated unless otherwise instructed',
      'Mild bloating and gas common after colonoscopy (resolves same day)',
      'Biopsy results typically available in 5-7 days',
      'No driving for 24 hours after sedation',
      'Follow-up colonoscopy interval based on findings (3-10 years)',
    ],
    'An endoscopy uses a thin, flexible tube with a camera to look inside your body through a natural opening like your mouth or rectum. It can diagnose problems, take tissue samples (biopsies), and even treat certain conditions like removing polyps or stopping bleeding, all without any surgical cuts. You are usually sedated so you are comfortable during the procedure.',
    [
      'Severe abdominal pain after the procedure',
      'Blood in stool, vomit, or urine (more than a small amount)',
      'Fever or chills within 24-48 hours',
      'Black tarry stools indicating GI bleeding',
      'Difficulty swallowing or breathing after upper endoscopy',
    ],
  ),

  // ===== EMERGENCY SURGERY =====

  'exploratory-laparotomy': entry(
    'exploratory-laparotomy',
    'Exploratory Laparotomy',
    'Laparotomia Exploratoria',
    'emergency-surgery',
    'Open surgical exploration of the abdominal cavity performed emergently when the source of acute abdominal pathology is uncertain or when definitive treatment requires open access.',
    [
      'Peritonitis with hemodynamic instability',
      'Penetrating abdominal trauma',
      'Blunt abdominal trauma with free fluid and instability',
      'Acute mesenteric ischemia',
      'Perforated viscus',
      'Failed non-operative management of bowel obstruction',
    ],
    [
      'Midline laparotomy incision from xiphoid to pubis for maximum exposure',
      'Four-quadrant exploration: systematic inspection of all abdominal organs',
      'Control hemorrhage first (damage control if patient unstable)',
      'Identify and address pathology: repair perforation, resect ischemic bowel, control contamination',
      'Thorough irrigation of peritoneal cavity',
      'Decision to close primarily vs temporary abdominal closure (damage control)',
      'Placement of drains as needed',
    ],
    [
      'Surgical site infection (high risk due to emergency setting and contamination)',
      'Fascial dehiscence and evisceration',
      'Intra-abdominal abscess',
      'Anastomotic leak if bowel resection performed',
      'Short bowel syndrome if extensive resection needed',
      'Adhesive bowel obstruction (long-term)',
      'Incisional hernia (10-20%)',
    ],
    [
      'ICU admission common after emergency laparotomy',
      'NGT decompression until bowel function returns',
      'Wound management depends on contamination level (may be left open to heal by secondary intention)',
      'Nutritional support early (enteral preferred when possible)',
      'Serial abdominal exams to monitor for complications',
      'Planned return to OR in 24-48 hours if damage control approach used',
    ],
    'An exploratory laparotomy is an emergency surgery where the surgeon opens your abdomen through a large incision to find and fix a serious problem, such as bleeding, a burst organ, or blocked blood supply to the intestines. This is done when the situation is too urgent to wait for more tests. Recovery is longer than planned surgeries, and you will be monitored closely in the hospital.',
    [
      'This is already an emergency procedure; postoperatively watch for worsening abdominal pain',
      'Fever, rapid heartbeat, or dropping blood pressure',
      'Wound opening or evisceration (bowel visible through wound)',
      'Absence of bowel function beyond expected timeframe',
    ],
  ),

  'trauma-surgery': entry(
    'trauma-surgery',
    'Trauma Surgery Principles',
    'Principios de Cirugia de Trauma',
    'emergency-surgery',
    'Surgical management of injuries from blunt or penetrating mechanisms following ATLS (Advanced Trauma Life Support) principles. Prioritizes life-threatening injuries using a systematic approach.',
    [
      'Hemorrhagic shock from solid organ injury, vascular injury, or pelvic fracture',
      'Penetrating trauma to torso violating peritoneum or pleura',
      'Blunt abdominal trauma with positive FAST and hemodynamic instability',
      'Traumatic brain injury requiring surgical decompression',
      'Airway compromise from facial or neck trauma',
    ],
    [
      'Primary survey (ABCDE): Airway, Breathing, Circulation, Disability, Exposure',
      'Massive transfusion protocol activated for hemorrhagic shock (1:1:1 PRBC:FFP:platelets)',
      'FAST exam (Focused Assessment with Sonography for Trauma) at bedside',
      'Damage control surgery: abbreviated operation to control hemorrhage and contamination',
      'Temporary abdominal closure with planned return to OR',
      'Resuscitation in ICU: correct hypothermia, acidosis, coagulopathy (lethal triad)',
      'Definitive repair once patient stabilized (24-72 hours)',
      'Non-operative management when hemodynamically stable (e.g., splenic injury grade I-III)',
    ],
    [
      'Missed injuries (tertiary survey within 24 hours)',
      'Abdominal compartment syndrome from massive resuscitation',
      'Coagulopathy and multi-organ failure',
      'Ventilator-associated pneumonia',
      'Venous thromboembolism',
      'Post-traumatic stress disorder',
    ],
    [
      'ICU admission with serial monitoring',
      'Staged operations for definitive repair',
      'Physical and occupational therapy initiation early',
      'Trauma social work and psychological support',
      'Injury prevention counseling before discharge',
      'Follow-up imaging for non-operatively managed injuries',
    ],
    'Trauma surgery addresses injuries from accidents, falls, or violence. The surgical team follows a systematic approach to find and treat the most life-threatening injuries first. In severe cases, a quick initial surgery controls bleeding and contamination, and then a second planned surgery completes the repair once the body has stabilized. Recovery depends on the severity of injuries.',
    [
      'Any trauma patient: if losing consciousness, difficulty breathing, or heavy bleeding, call 911',
      'Post-surgery: worsening pain, new bleeding, confusion, or fever',
    ],
  ),

  'acute-bowel-obstruction': entry(
    'acute-bowel-obstruction',
    'Surgery for Bowel Obstruction',
    'Cirugia por Obstruccion Intestinal',
    'emergency-surgery',
    'Surgical management of mechanical intestinal obstruction when non-operative management fails or when strangulation is suspected. Most common cause in developed countries is adhesions from prior surgery.',
    [
      'Complete bowel obstruction with signs of strangulation (fever, peritonitis, leukocytosis)',
      'Closed-loop obstruction',
      'Failed non-operative management (no improvement in 48-72 hours)',
      'Incarcerated hernia causing obstruction',
      'Obstructing colon cancer (emergent left-sided; semi-elective right-sided)',
      'Volvulus not amenable to endoscopic decompression',
    ],
    [
      'Resuscitate with IV fluids and correct electrolytes',
      'Nasogastric decompression',
      'CT abdomen/pelvis with IV contrast to identify transition point and assess for strangulation',
      'Surgery: adhesiolysis (lysis of adhesions) or resection of obstructing lesion',
      'Assess bowel viability: color, peristalsis, mesenteric pulsation; resect non-viable segments',
      'Anastomosis if bowel viable and patient stable; diverting ostomy if unstable or contaminated',
      'Peritoneal irrigation',
    ],
    [
      'Anastomotic leak (3-6%)',
      'Recurrent obstruction from new adhesion formation',
      'Short bowel syndrome if extensive resection',
      'Surgical site infection',
      'Bowel necrosis if strangulation not recognized promptly',
      'Enterotomy (inadvertent bowel injury) during adhesiolysis',
    ],
    [
      'NGT until bowel function returns (flatus, bowel movement)',
      'Advance diet slowly: clear liquids to regular',
      'Monitor ostomy output if stoma created; stoma education provided',
      'Early ambulation to prevent adhesion reformation',
      'Follow-up to discuss potential reversal of ostomy if created',
    ],
    'A bowel obstruction means something is blocking your intestines, preventing food and waste from passing through. This can cause severe cramping, vomiting, and bloating. If the blockage does not improve with rest and suction through a nose tube, surgery is needed to remove the blockage and check that the intestines are still healthy.',
    [
      'Severe cramping abdominal pain with inability to pass gas or stool',
      'Bilious (green) or feculent (brown, foul) vomiting',
      'Fever with abdominal rigidity',
      'Signs of dehydration or shock (rapid pulse, dizziness)',
    ],
  ),

  'emergency-hemorrhage-control': entry(
    'emergency-hemorrhage-control',
    'Emergency Hemorrhage Control',
    'Control de Hemorragia de Emergencia',
    'emergency-surgery',
    'Surgical and interventional techniques to stop life-threatening bleeding. Follows damage control principles prioritizing hemorrhage control over definitive repair.',
    [
      'Traumatic hemorrhage with hemodynamic instability',
      'Postoperative hemorrhage requiring return to OR',
      'GI hemorrhage unresponsive to endoscopic treatment',
      'Ruptured abdominal aortic aneurysm',
      'Ruptured ectopic pregnancy with hemoperitoneum',
      'Postpartum hemorrhage unresponsive to medical management',
    ],
    [
      'Activate massive transfusion protocol: 1:1:1 ratio of PRBC:FFP:platelets',
      'Direct pressure and packing for externally accessible hemorrhage',
      'Tourniquet application for extremity hemorrhage (note time of application)',
      'Resuscitative endovascular balloon occlusion of aorta (REBOA) as temporizing measure',
      'Surgical exploration to identify and control bleeding source',
      'Techniques: suture ligation, vascular clamps, topical hemostatic agents, packing',
      'Interventional radiology: angioembolization for pelvic, hepatic, or splenic hemorrhage',
      'Damage control: pack and plan return to OR; avoid lethal triad',
      'Permissive hypotension (SBP 80-90) until surgical control achieved',
      'Tranexamic acid (TXA) within 3 hours of injury',
    ],
    [
      'Coagulopathy from massive transfusion and hypothermia',
      'Transfusion reactions',
      'Abdominal compartment syndrome from packing and resuscitation',
      'Organ failure from prolonged hypoperfusion',
      'Re-bleeding after initial control',
      'Limb ischemia from prolonged tourniquet use',
    ],
    [
      'ICU monitoring with serial hemoglobin and coagulation labs',
      'Warming measures to correct hypothermia',
      'Planned return to OR for pack removal and reassessment (24-48 hours)',
      'Blood bank coordination for ongoing transfusion needs',
      'Transition to definitive repair when stable',
    ],
    'When severe bleeding happens from an injury or during surgery, the surgical team acts quickly to stop the blood loss and keep you alive. This may involve pressing on the bleeding area, tying off blood vessels, or using special techniques to temporarily control bleeding. Blood transfusions replace what is lost. Additional surgeries may be needed once you are stable.',
    [
      'Heavy bleeding that soaks through bandages rapidly',
      'Feeling faint, dizzy, or confused (signs of blood loss)',
      'Rapid heart rate or difficulty breathing',
      'Cold, clammy, or pale skin',
    ],
  ),

  // ===== COMPLICATIONS =====

  'surgical-site-infection': entry(
    'surgical-site-infection',
    'Surgical Site Infection (SSI)',
    'Infeccion del Sitio Quirurgico',
    'complications',
    'Infection occurring within 30 days of surgery (or 90 days if implant placed) at the incision site or in the organ/space manipulated during the procedure. Most common healthcare-associated infection in surgical patients.',
    [
      'Diagnosis when purulent drainage, positive cultures, or clinical signs of infection develop at surgical site',
      'Classification: superficial incisional, deep incisional, or organ/space',
      'Risk factors: diabetes, obesity, smoking, immunosuppression, prolonged operation, contaminated wound',
    ],
    [
      'Prevention: appropriate preoperative antibiotic prophylaxis (within 60 minutes of incision)',
      'Skin preparation with chlorhexidine-alcohol solution',
      'Maintain normothermia and euglycemia intraoperatively',
      'Treatment of superficial SSI: open wound, drain purulence, local wound care',
      'Treatment of deep SSI: operative drainage, debridement, possible wound VAC placement',
      'Organ/space SSI: percutaneous drainage (IR-guided) or operative washout',
      'Antibiotics guided by wound cultures; empiric coverage for skin flora initially',
      'Wound may be left open to heal by secondary intention or closed with delayed primary closure',
    ],
    [
      'Wound dehiscence',
      'Fascial necrosis or necrotizing fasciitis (rare but life-threatening)',
      'Sepsis from deep or organ/space infection',
      'Need for additional surgeries',
      'Implant removal if prosthetic material infected',
      'Prolonged hospitalization and increased cost',
    ],
    [
      'Daily wound assessment and dressing changes',
      'Wound packing if left open (wet-to-dry or wound VAC)',
      'Complete antibiotic course as prescribed (typically 5-7 days for soft tissue)',
      'Follow-up wound checks until healed',
      'Risk factor modification: smoking cessation, glycemic control for future surgeries',
    ],
    'A surgical site infection happens when germs get into your surgical wound, causing redness, swelling, warmth, pain, and sometimes pus. To prevent infection, your team gives you antibiotics before surgery and uses sterile techniques. If an infection does develop, it may need to be drained, and you will take antibiotics. Most surgical site infections are treatable when caught early.',
    [
      'Increasing redness, swelling, or warmth around the incision',
      'Pus or cloudy drainage from the wound',
      'Fever above 101 F (38.3 C)',
      'Red streaks spreading from the wound',
      'Wound opening up or becoming painful',
    ],
  ),

  'anastomotic-leak': entry(
    'anastomotic-leak',
    'Anastomotic Leak',
    'Fuga Anastomotica',
    'complications',
    'Breakdown of a surgical connection (anastomosis) between two segments of bowel, resulting in spillage of intestinal contents into the peritoneal cavity. A serious complication of gastrointestinal surgery with significant morbidity and mortality.',
    [
      'Occurs in 3-6% of colorectal anastomoses (higher for low rectal, up to 10-15%)',
      'Also occurs after esophageal, gastric, and small bowel anastomoses',
      'Risk factors: malnutrition, steroids, smoking, radiation, tension on anastomosis, poor blood supply',
    ],
    [
      'Clinical diagnosis: fever, tachycardia, abdominal pain, peritonitis, elevated WBC on POD 3-7',
      'CT scan with oral and IV contrast: extraluminal air or fluid, contrast extravasation',
      'Small contained leak: percutaneous drain placement, IV antibiotics, NPO with parenteral nutrition',
      'Large or uncontained leak: return to OR for washout and diversion (ostomy creation)',
      'Source control is the priority: drain the contamination',
      'Endoscopic stenting may be an option for upper GI leaks',
    ],
    [
      'Sepsis and multi-organ failure',
      'Intra-abdominal abscess',
      'Need for temporary or permanent ostomy',
      'Prolonged ICU and hospital stay',
      'Mortality rate 10-20% for major leaks',
      'Stricture formation at anastomotic site during healing',
    ],
    [
      'Bowel rest (NPO) with IV nutrition or enteral feeding distal to leak',
      'Drain management and monitoring of output',
      'Antibiotics tailored to peritoneal cultures',
      'Ostomy education if diversion required',
      'Nutritional optimization for healing',
      'Planned ostomy reversal typically at 3-6 months once leak fully healed',
    ],
    'An anastomotic leak happens when the connection the surgeon made between two parts of your intestine does not heal properly, allowing intestinal contents to leak into your abdomen. This usually shows up a few days after surgery with fever, increasing pain, and feeling unwell. Treatment may require drainage, antibiotics, or additional surgery.',
    [
      'New fever and increasing abdominal pain 3-7 days after bowel surgery',
      'Rapid heart rate, chills, or feeling very unwell',
      'Drainage from wound that looks like intestinal contents',
      'Abdominal rigidity or inability to tolerate food',
    ],
  ),

  'venous-thromboembolism': entry(
    'venous-thromboembolism',
    'Venous Thromboembolism (DVT/PE)',
    'Tromboembolismo Venoso (TVP/TEP)',
    'complications',
    'Formation of blood clots in deep veins (DVT), which can embolize to the pulmonary arteries (PE). A leading cause of preventable death in hospitalized surgical patients.',
    [
      'Risk highest in orthopedic surgery (hip/knee replacement), cancer surgery, and pelvic surgery',
      'Risk factors: immobility, malignancy, obesity, prior VTE, hypercoagulable state, oral contraceptives',
      'Virchow triad: stasis, endothelial injury, hypercoagulability',
    ],
    [
      'DVT diagnosis: duplex ultrasound of affected extremity',
      'PE diagnosis: CT pulmonary angiography; D-dimer for low-risk patients',
      'Anticoagulation: heparin drip (or LMWH) bridged to oral anticoagulant (warfarin or DOAC)',
      'Massive PE with hemodynamic compromise: systemic thrombolysis (tPA), catheter-directed therapy, or surgical embolectomy',
      'IVC filter placement if anticoagulation contraindicated',
      'Duration of anticoagulation: 3 months for provoked (surgical) VTE; longer if unprovoked or recurrent',
    ],
    [
      'Fatal PE (most deaths occur within first hour)',
      'Bleeding complications from anticoagulation',
      'Heparin-induced thrombocytopenia (HIT)',
      'Post-thrombotic syndrome: chronic leg swelling, pain, skin changes',
      'Chronic thromboembolic pulmonary hypertension (CTEPH)',
      'Recurrent VTE',
    ],
    [
      'Anticoagulation adherence is critical; do not miss doses',
      'Compression stockings for DVT to reduce post-thrombotic syndrome',
      'Activity as tolerated; ambulation encouraged',
      'Avoid prolonged immobility; take breaks on long trips',
      'Follow-up with hematology if hypercoagulable workup indicated',
      'Lab monitoring: INR for warfarin, renal function for DOACs',
    ],
    'Blood clots can form in the deep veins of your legs after surgery, especially if you are not moving much. If a clot breaks loose and travels to your lungs, it is called a pulmonary embolism and can be life-threatening. Prevention with blood thinners and leg compression devices is key. If a clot does form, treatment with blood-thinning medication usually lasts at least 3 months.',
    [
      'Sudden leg swelling, pain, or redness (especially one-sided)',
      'Sudden shortness of breath or chest pain',
      'Coughing up blood',
      'Rapid heartbeat, dizziness, or fainting',
      'These require immediate medical attention',
    ],
  ),

  'post-op-hemorrhage': entry(
    'post-op-hemorrhage',
    'Post-Operative Hemorrhage',
    'Hemorragia Postoperatoria',
    'complications',
    'Significant bleeding after surgery, classified as primary (within 24 hours, usually technical) or secondary (after 24 hours, often from infection eroding a vessel). Requires prompt recognition and management.',
    [
      'Early hemorrhage: inadequate hemostasis during surgery, coagulopathy, slipped ligature',
      'Delayed hemorrhage: infection eroding vessel, anticoagulation, pseudoaneurysm',
      'Presents with tachycardia, hypotension, decreasing hemoglobin, increased drain output, wound hematoma',
    ],
    [
      'Recognize shock early: tachycardia often precedes hypotension',
      'Volume resuscitation with crystalloid and blood products',
      'Check coagulation labs: CBC, PT/INR, PTT, fibrinogen',
      'Reverse anticoagulation if applicable (vitamin K, FFP, PCC, protamine)',
      'Minor bleeding: pressure, ice, observation with serial hemoglobin',
      'Significant bleeding: return to OR for surgical exploration and hemostasis',
      'Interventional radiology embolization for select cases',
      'Wound hematoma: small ones observed; large or expanding ones evacuated surgically',
    ],
    [
      'Hemorrhagic shock and cardiovascular collapse',
      'Transfusion-related complications (TACO, TRALI, reactions)',
      'Wound infection from hematoma (blood is culture medium for bacteria)',
      'Airway compromise from neck hematoma (post-thyroidectomy emergency)',
      'Compartment syndrome from extremity hematoma',
      'Death if not recognized and treated promptly',
    ],
    [
      'Monitoring hemoglobin levels post-treatment',
      'Drain output monitoring (volume and character)',
      'Iron supplementation for postoperative anemia',
      'Activity restrictions until hemoglobin stable',
      'Follow-up labs to ensure recovery of blood counts',
    ],
    'Bleeding after surgery can happen for different reasons. Some bleeding is normal, but if it becomes heavy, it can be serious. Signs include feeling dizzy, a fast heartbeat, pallor, or a growing lump at the surgical site. Your medical team monitors you closely after surgery and can treat bleeding with pressure, medications, or a return to the operating room if needed.',
    [
      'Large amount of blood soaking through bandages or dressings',
      'Rapid swelling at the surgical site',
      'Dizziness, lightheadedness, or fainting',
      'Fast heartbeat or feeling short of breath',
      'Blood in drain output that is increasing',
      'After neck surgery: difficulty breathing or swallowing with neck swelling (emergency)',
    ],
  ),

  'wound-dehiscence': entry(
    'wound-dehiscence',
    'Wound Dehiscence',
    'Dehiscencia de Herida',
    'complications',
    'Partial or complete disruption of a surgical wound closure. Superficial dehiscence involves skin and subcutaneous tissue; fascial dehiscence is deeper and may lead to evisceration (bowel protruding through wound).',
    [
      'Occurs in 1-3% of abdominal surgeries',
      'Risk factors: obesity, malnutrition, infection, diabetes, chronic cough, steroids, emergency surgery',
      'Typically presents POD 5-10 with serosanguinous drainage ("pink or salmon-colored fluid")',
    ],
    [
      'Superficial dehiscence: wound exploration, debridement, healing by secondary intention or delayed primary closure',
      'Fascial dehiscence: emergent return to OR for fascial closure',
      'Evisceration: cover exposed bowel with sterile saline-moistened gauze, do NOT push bowel back in; emergent OR',
      'Address underlying causes: treat infection, optimize nutrition, control cough',
      'Consider retention sutures or mesh reinforcement for reclosure',
      'Negative pressure wound therapy for open wounds',
    ],
    [
      'Evisceration (surgical emergency)',
      'Enteric fistula formation',
      'Incisional hernia (long-term)',
      'Prolonged wound healing and hospitalization',
      'Sepsis if infected',
    ],
    [
      'Wound care as directed (packing changes, wound VAC management)',
      'High-protein diet and nutritional supplementation',
      'Abdominal binder for support',
      'Avoid straining, heavy lifting, and activities that increase abdominal pressure',
      'Follow-up wound assessments until fully healed',
    ],
    'Wound dehiscence means your surgical wound has opened up, either partially or fully. It usually happens 5 to 10 days after surgery and may start with a gush of clear or pinkish fluid from the incision. Superficial openings can heal on their own with wound care, but deeper openings where internal tissues or organs are visible require emergency surgery to close.',
    [
      'Sudden gush of fluid from the wound',
      'Wound edges visibly separating',
      'Any tissue or bowel visible through the wound (cover with moist cloth and call 911)',
      'Increasing wound drainage or pain',
    ],
  ),

  'malignant-hyperthermia': entry(
    'malignant-hyperthermia',
    'Malignant Hyperthermia',
    'Hipertermia Maligna',
    'complications',
    'Rare, life-threatening pharmacogenetic reaction to volatile anesthetic agents (e.g., sevoflurane) or succinylcholine, causing uncontrolled skeletal muscle hypermetabolism. Incidence approximately 1:15,000 in children, 1:50,000 in adults.',
    [
      'Triggered by volatile anesthetic agents (sevoflurane, desflurane, isoflurane) or succinylcholine',
      'Autosomal dominant inheritance; mutations in RYR1 gene (ryanodine receptor)',
      'Family history of anesthetic complications should raise suspicion',
    ],
    [
      'Early signs: unexplained rise in end-tidal CO2, tachycardia, muscle rigidity (especially masseter spasm)',
      'Late signs: hyperthermia (may rise 1-2 degrees C every 5 minutes), metabolic acidosis, hyperkalemia, rhabdomyolysis',
      'Immediate treatment: STOP all triggering agents, hyperventilate with 100% O2',
      'Dantrolene 2.5 mg/kg IV bolus, repeat every 5 minutes until symptoms resolve (may need up to 10 mg/kg)',
      'Active cooling: cold IV saline, ice packs to axillae and groin, cooling blanket',
      'Treat hyperkalemia: calcium chloride, insulin/glucose, bicarbonate',
      'Monitor CK, myoglobin, renal function for rhabdomyolysis',
      'ICU admission for at least 24-hour observation (recrudescence possible)',
      'Refer patient and family for genetic counseling and caffeine-halothane contracture testing',
    ],
    [
      'Cardiac arrest from hyperkalemia or arrhythmia',
      'Disseminated intravascular coagulation (DIC)',
      'Acute renal failure from myoglobinuria',
      'Compartment syndrome',
      'Multi-organ failure',
      'Death (mortality 5% with dantrolene; historically 70-80% without)',
    ],
    [
      'ICU monitoring for 24+ hours (recrudescence in 25% of cases)',
      'Continue dantrolene 1 mg/kg IV every 6 hours for 24-48 hours',
      'Aggressive IV hydration to prevent renal injury from myoglobin',
      'Patient and family referred for genetic testing',
      'MH susceptible patients receive MedAlert bracelet and carry documentation',
      'Future anesthetics must avoid all triggering agents (use TIVA with propofol, non-depolarizing muscle relaxants)',
    ],
    'Malignant hyperthermia is a very rare but serious reaction to certain anesthesia drugs. It causes your muscles to overheat and break down rapidly, which can be life-threatening. It runs in families. If you or a blood relative had a bad reaction to anesthesia, tell your doctor before any surgery. There is an effective treatment (dantrolene) that must be given immediately.',
    [
      'This is managed by the anesthesiology team during surgery',
      'After an episode: report any dark urine, muscle pain, or fever to the medical team immediately',
      'If you have a family history of anesthesia reactions, inform every doctor and dentist before any procedure',
    ],
  ),

  'seroma-hematoma': entry(
    'seroma-hematoma',
    'Seroma and Hematoma',
    'Seroma y Hematoma',
    'complications',
    'Collections of fluid (seroma: serous fluid; hematoma: blood) in a surgical wound or operative space. Common after procedures involving tissue dissection or flap creation.',
    [
      'Seroma: common after mastectomy, hernia repair with mesh, abdominoplasty, lymph node dissection',
      'Hematoma: can occur after any surgery; risk increased with anticoagulation, coagulopathy, hypertension',
      'Present as swelling, pressure, or fluctuance at or near the surgical site',
    ],
    [
      'Small collections: observation and compression; many resolve spontaneously',
      'Seroma aspiration: needle drainage under sterile technique; may require repeated aspiration',
      'Compression garment or binder to prevent reaccumulation',
      'Hematoma: small and stable ones observed; expanding or symptomatic ones evacuated surgically',
      'Drain placement for recurrent seromas',
      'Sclerotherapy for persistent seromas (talc, doxycycline, or fibrin glue instillation)',
      'Wound reopening and evacuation if hematoma becomes infected',
    ],
    [
      'Infection of the collection (abscess formation)',
      'Pressure on surrounding structures (e.g., neck hematoma compressing airway)',
      'Impaired wound healing from fluid separating tissue planes',
      'Capsule formation around chronic seroma',
      'Need for additional procedures',
    ],
    [
      'Wear compression garment as directed',
      'Activity restrictions to avoid reaccumulation',
      'Monitor for signs of infection (redness, warmth, fever)',
      'Follow-up aspiration appointments as scheduled',
      'Most seromas resolve within 2-4 weeks',
    ],
    'After surgery, fluid can collect near the incision. A seroma is a collection of clear body fluid, and a hematoma is a collection of blood. They usually appear as painless or mildly painful swelling near the wound. Small collections often go away on their own, but larger ones may need to be drained with a needle or in a minor procedure.',
    [
      'Rapidly expanding or tense swelling at the surgical site',
      'Overlying skin becoming red, warm, or tender (possible infection)',
      'After neck surgery: any significant swelling causing difficulty breathing or swallowing',
      'Fever associated with the collection',
    ],
  ),

  'adhesive-bowel-obstruction': entry(
    'adhesive-bowel-obstruction',
    'Adhesive Small Bowel Obstruction',
    'Obstruccion Intestinal por Adherencias',
    'complications',
    'Mechanical blockage of the small intestine caused by fibrous bands (adhesions) that form after previous abdominal surgery. The most common cause of small bowel obstruction in developed countries.',
    [
      'History of previous abdominal surgery (74% of SBO cases)',
      'Presents with colicky abdominal pain, vomiting, distension, and obstipation',
      'Highest risk after colorectal, gynecologic, and appendiceal surgery',
    ],
    [
      'CT abdomen/pelvis with IV contrast: dilated proximal bowel with transition point, decompressed distal bowel',
      'Initial management: NPO, IV fluids, NGT decompression, foley catheter',
      'Water-soluble contrast study (Gastrografin): diagnostic and potentially therapeutic; contrast in colon at 24 hours predicts resolution',
      'Non-operative management succeeds in 60-80% of partial obstructions',
      'Surgical indications: complete obstruction, signs of strangulation, failure to improve in 48-72 hours',
      'Surgery: laparoscopic or open adhesiolysis',
      'Adhesion prevention: meticulous surgical technique, adhesion barriers (Seprafilm)',
    ],
    [
      'Bowel strangulation and necrosis (requires emergent surgery)',
      'Bowel perforation',
      'Recurrent obstruction (up to 30% lifetime risk)',
      'Enterotomy during adhesiolysis',
      'Short bowel syndrome from repeated resections',
    ],
    [
      'Resume diet gradually once bowel function returns',
      'Monitor for recurrence: patient education about warning signs',
      'No definitive prevention for adhesion formation',
      'Follow-up if recurrent episodes to discuss surgical options',
    ],
    'Adhesions are bands of scar tissue that form inside your abdomen after surgery. Sometimes these bands can kink or block your intestines, causing pain, nausea, vomiting, and bloating. Many cases improve with rest and a tube to decompress the stomach. If the blockage does not clear or the bowel is in danger, surgery is needed to free the intestine.',
    [
      'Severe abdominal cramps that come in waves',
      'Vomiting green (bile) fluid',
      'Complete inability to pass gas or have a bowel movement',
      'Fever with abdominal pain and distension',
      'Abdominal pain that becomes constant (may indicate strangulation)',
    ],
  ),
};

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Returns all surgery entries as an array.
 */
export function getAllSurgeryEntries(): SurgeryEntry[] {
  return Object.values(SURGERY_ENTRIES);
}

/**
 * Retrieves a single surgery entry by its ID.
 * Returns undefined if not found.
 */
export function getSurgeryEntryById(id: string): SurgeryEntry | undefined {
  return SURGERY_ENTRIES[id];
}

/**
 * Filters surgery entries by category.
 */
export function getSurgeryEntriesByCategory(category: SurgeryDatabaseCategory): SurgeryEntry[] {
  return Object.values(SURGERY_ENTRIES).filter(e => e.category === category);
}

/**
 * Searches surgery entries by query string across name, nameEs,
 * description, indications, and patientExplanation fields.
 * Case-insensitive. Returns entries sorted by relevance (name match first).
 */
export function searchSurgeryEntries(query: string): SurgeryEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const scored: { entry: SurgeryEntry; score: number }[] = [];

  for (const entry of Object.values(SURGERY_ENTRIES)) {
    let score = 0;

    // Name matches score highest
    if (entry.name.toLowerCase().includes(q)) score += 10;
    if (entry.nameEs.toLowerCase().includes(q)) score += 10;
    if (entry.id.includes(q)) score += 8;

    // Description
    if (entry.description.toLowerCase().includes(q)) score += 5;

    // Patient explanation
    if (entry.patientExplanation.toLowerCase().includes(q)) score += 3;

    // Indications
    if (entry.indications.some(i => i.toLowerCase().includes(q))) score += 4;

    // Procedure steps
    if (entry.procedure.some(p => p.toLowerCase().includes(q))) score += 2;

    // Risks
    if (entry.risks.some(r => r.toLowerCase().includes(q))) score += 2;

    // Recovery
    if (entry.recovery.some(r => r.toLowerCase().includes(q))) score += 1;

    // Emergency signs
    if (entry.emergencySigns.some(e => e.toLowerCase().includes(q))) score += 2;

    if (score > 0) {
      scored.push({ entry, score });
    }
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .map(s => s.entry);
}

/**
 * Searches surgery entries with both a query string and a category filter.
 * If query is empty, returns all entries in the given category.
 * If category is undefined, searches across all categories.
 */
export function filterSurgeryEntries(
  options: { query?: string; category?: SurgeryDatabaseCategory },
): SurgeryEntry[] {
  let results: SurgeryEntry[];

  if (options.query && options.query.trim()) {
    results = searchSurgeryEntries(options.query);
  } else {
    results = getAllSurgeryEntries();
  }

  if (options.category) {
    results = results.filter(e => e.category === options.category);
  }

  return results;
}

/**
 * Returns all distinct categories present in the database.
 */
export function getSurgeryDatabaseCategories(): SurgeryDatabaseCategory[] {
  const cats = new Set<SurgeryDatabaseCategory>();
  for (const entry of Object.values(SURGERY_ENTRIES)) {
    cats.add(entry.category);
  }
  return Array.from(cats);
}

/**
 * Returns a count of entries per category.
 */
export function getSurgeryEntryCounts(): Record<SurgeryDatabaseCategory, number> {
  const counts = {} as Record<SurgeryDatabaseCategory, number>;
  for (const entry of Object.values(SURGERY_ENTRIES)) {
    counts[entry.category] = (counts[entry.category] || 0) + 1;
  }
  return counts;
}
