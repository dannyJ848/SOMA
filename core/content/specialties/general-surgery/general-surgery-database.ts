/**
 * Biological Self — General Surgery Specialty Database
 * 36 entries covering abdominal, breast, endocrine-surgery, trauma,
 * minimally-invasive, emergency, colorectal, and hepatobiliary procedures.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type GeneralSurgeryCategory =
  | 'abdominal' | 'breast' | 'endocrine-surgery' | 'trauma'
  | 'minimally-invasive' | 'emergency' | 'colorectal' | 'hepatobiliary';

export interface GeneralSurgeryEntry {
  id: string;
  name: string;
  category: GeneralSurgeryCategory;
  description: string;
  indications: string[];
  technique: string;
  complications: string[];
  recovery: string;
  keyPearl: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const gs = (
  id: string, name: string, category: GeneralSurgeryCategory,
  description: string, indications: string[], technique: string,
  complications: string[], recovery: string, keyPearl: string,
): GeneralSurgeryEntry => ({
  id, name, category, description, indications, technique,
  complications, recovery, keyPearl,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const GENERAL_SURGERY_ENTRIES: Record<string, GeneralSurgeryEntry> = {

  // ===== ABDOMINAL (6) =====================================================

  'appendectomy': gs(
    'appendectomy', 'Appendectomy', 'abdominal',
    'Surgical removal of the vermiform appendix, most commonly for acute appendicitis. Laparoscopic approach is standard in most centers.',
    ['Acute appendicitis', 'Perforated appendicitis with abscess', 'Appendiceal neoplasm found incidentally', 'Recurrent right lower quadrant pain with imaging findings'],
    'Laparoscopic: 3-port technique with umbilical camera port and two working ports. Mesoappendix divided with energy device or clips; appendix base secured with endoloops or stapler. Specimen removed in bag. Open: McBurney or Rocky-Davis incision for complicated cases.',
    ['Surgical site infection (3-5% laparoscopic, 8-12% open)', 'Intra-abdominal abscess', 'Stump appendicitis from incomplete resection', 'Ileus', 'Small bowel injury'],
    'Laparoscopic: return to normal activity in 1-2 weeks. Open: 2-4 weeks. Perforated cases may require longer antibiotic courses and delayed recovery.',
    'Alvarado score >= 7 supports surgical intervention; CT has >95% sensitivity. In young women, consider gynecologic differential. Interval appendectomy after percutaneous drainage is debated for complicated appendicitis.',
  ),

  'cholecystectomy': gs(
    'cholecystectomy', 'Cholecystectomy', 'abdominal',
    'Surgical removal of the gallbladder, overwhelmingly performed laparoscopically. Most common elective general surgery procedure.',
    ['Symptomatic cholelithiasis', 'Acute cholecystitis', 'Gallstone pancreatitis (after pancreatitis resolves)', 'Porcelain gallbladder (malignancy risk)', 'Gallbladder polyps >10 mm'],
    'Laparoscopic 4-port technique: critical view of safety (CVS) must be achieved before clipping any structures — cystic duct and artery clearly identified with hepatocystic triangle cleared. Intraoperative cholangiogram if concern for CBD stones. Subtotal cholecystectomy if severe inflammation obscures anatomy.',
    ['Bile duct injury (0.3-0.5%, devastating)', 'Bile leak from cystic duct stump or duct of Luschka', 'Retained CBD stone', 'Post-cholecystectomy syndrome (diarrhea, dyspepsia)', 'Bowel or vascular injury at port entry'],
    'Same-day discharge or 23-hour observation for uncomplicated cases. Return to full activity in 1-2 weeks. Acute cholecystitis may require longer hospitalization.',
    'The Critical View of Safety is the single most important step to prevent bile duct injury. If anatomy cannot be clearly defined, convert to open or perform subtotal cholecystectomy — never clip a structure you cannot identify.',
  ),

  'nissen-fundoplication': gs(
    'nissen-fundoplication', 'Nissen Fundoplication', 'abdominal',
    'Laparoscopic 360-degree gastric fundic wrap around the distal esophagus to recreate the anti-reflux barrier at the gastroesophageal junction.',
    ['Refractory GERD despite maximal PPI therapy', 'Large paraesophageal hernia', 'GERD with confirmed pathologic acid exposure on pH testing', 'Recurrent aspiration from reflux', 'Patient preference to discontinue lifelong PPI'],
    'Laparoscopic: reduce hernia, dissect both crura, mobilize fundus by dividing short gastric vessels, create a 2-3 cm floppy wrap over a 56-60 Fr bougie. Crural repair with posterior sutures. Partial wraps (Toupet 270-degree, Dor anterior) used for impaired esophageal motility.',
    ['Dysphagia (most common early, usually transient)', 'Gas-bloat syndrome (inability to belch)', 'Wrap disruption or herniation', 'Vagal nerve injury', 'Recurrent reflux (10-15% at 10 years)'],
    'Liquid diet for 1-2 weeks, soft diet for 4-6 weeks. Return to normal activity in 2-4 weeks. Long-term success rate 85-90%.',
    'Preoperative workup must include upper endoscopy, esophageal manometry, and pH testing. Manometry rules out achalasia (contraindication) and identifies weak peristalsis where a partial wrap is preferred.',
  ),

  'splenectomy': gs(
    'splenectomy', 'Splenectomy', 'abdominal',
    'Surgical removal of the spleen, performed laparoscopically for elective cases or open for trauma and massive splenomegaly.',
    ['Immune thrombocytopenic purpura (ITP) refractory to medical therapy', 'Hereditary spherocytosis', 'Splenic trauma (Grade IV-V or hemodynamic instability)', 'Splenic abscess or cyst', 'Staging or treatment of hematologic malignancy'],
    'Laparoscopic: right lateral decubitus position, divide splenocolic and splenorenal ligaments, control splenic hilum with stapler or individual vessel ligation. Search for accessory spleens (present in 15-30%). Open: left subcostal incision for trauma or massive spleen. Partial splenectomy or splenic artery embolization are alternatives.',
    ['Post-splenectomy sepsis (OPSI — overwhelming, often fatal)', 'Pancreatic tail injury and fistula', 'Portal vein thrombosis', 'Thrombocytosis (reactive, usually transient)', 'Subphrenic abscess'],
    'Laparoscopic: 1-3 days hospitalization, 2-4 weeks recovery. Open: 5-7 days hospitalization. Lifelong infection precautions and vaccinations required.',
    'Vaccinate against encapsulated organisms (Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis) at least 2 weeks before elective splenectomy or 2 weeks after emergent. Patients need lifelong awareness of OPSI risk.',
  ),

  'ventral-hernia-repair': gs(
    'ventral-hernia-repair', 'Ventral Hernia Repair', 'abdominal',
    'Surgical repair of anterior abdominal wall hernias including primary ventral, incisional, and epigastric hernias. Mesh reinforcement is standard for defects >2 cm.',
    ['Symptomatic ventral or incisional hernia', 'Incarceration or strangulation (emergent)', 'Enlarging hernia with risk of complications', 'Recurrent hernia after prior repair', 'Large abdominal wall defect causing functional impairment'],
    'Open: mesh placed in retrorectus (Rives-Stoppa) or preperitoneal position preferred. Component separation (anterior or posterior/TAR) for large defects requiring fascial advancement. Laparoscopic/robotic: intraperitoneal onlay mesh (IPOM) or retrorectus (eTEP). Mesh fixation with transfascial sutures or tacks.',
    ['Surgical site infection (highest morbidity driver)', 'Mesh infection requiring explantation', 'Seroma (very common, usually self-resolving)', 'Hernia recurrence (5-15% depending on technique)', 'Chronic pain from mesh or fixation'],
    'Return to light activity in 2-4 weeks, avoid heavy lifting for 6-12 weeks. Large abdominal wall reconstructions may require 3-6 months for full recovery.',
    'Retrorectus mesh placement (Rives-Stoppa) has the lowest recurrence rates. For contaminated fields, biologic mesh or delayed primary repair is preferred over synthetic mesh. Preoperative optimization (weight loss, smoking cessation, diabetes control) dramatically reduces complications.',
  ),

  'adrenalectomy': gs(
    'adrenalectomy', 'Adrenalectomy', 'abdominal',
    'Surgical removal of one or both adrenal glands, predominantly performed laparoscopically or robotically for benign and small malignant lesions.',
    ['Functional adrenal adenoma (Cushing, Conn, pheochromocytoma)', 'Adrenal mass >4 cm or with suspicious imaging features', 'Adrenocortical carcinoma', 'Isolated adrenal metastasis', 'Bilateral hyperplasia refractory to medical therapy'],
    'Laparoscopic transabdominal lateral approach (most common): lateral decubitus position, mobilize colon, identify adrenal vein (right drains to IVC, left to left renal vein), ligate adrenal vein first in pheochromocytoma. Posterior retroperitoneoscopic approach for bilateral cases. Open for large or locally invasive tumors.',
    ['Hemorrhage (especially right adrenal vein-IVC junction)', 'Adrenal insufficiency (bilateral or contralateral suppression)', 'Hypertensive crisis intraoperatively (pheochromocytoma)', 'Injury to adjacent structures (IVC, renal vein, pancreas, spleen)', 'Tumor recurrence in adrenocortical carcinoma'],
    'Laparoscopic: 1-2 days hospitalization, 1-2 weeks recovery. Stress-dose steroids needed if bilateral or contralateral suppression. Pheochromocytoma patients need postoperative blood pressure monitoring.',
    'Pheochromocytoma requires 10-14 days of alpha-blockade (phenoxybenzamine) before surgery to prevent intraoperative hypertensive crisis. Always ligate the adrenal vein first. Right adrenalectomy is technically more challenging due to the short right adrenal vein draining directly into IVC.',
  ),

  // ===== BREAST (3) ========================================================

  'mastectomy': gs(
    'mastectomy', 'Mastectomy', 'breast',
    'Surgical removal of breast tissue for cancer treatment or risk reduction. Includes total (simple), modified radical, skin-sparing, and nipple-sparing approaches.',
    ['Invasive breast carcinoma not amenable to breast conservation', 'Multicentric breast cancer', 'Inflammatory breast cancer (after neoadjuvant chemotherapy)', 'BRCA1/2 carriers (prophylactic)', 'DCIS with extensive microcalcifications', 'Patient preference over lumpectomy'],
    'Skin-sparing mastectomy: elliptical incision removing nipple-areolar complex, all breast tissue dissected off skin flaps and chest wall. Nipple-sparing: preserves nipple-areolar complex (subareolar margin must be negative). Modified radical: includes level I-II axillary lymph node dissection. Immediate reconstruction with implant or autologous flap is standard.',
    ['Skin flap necrosis', 'Seroma (very common)', 'Surgical site infection', 'Lymphedema (especially with axillary dissection)', 'Phantom breast pain', 'Implant complications (capsular contracture, infection)'],
    'Drain removal in 1-3 weeks. Return to normal activity in 4-6 weeks. Adjuvant therapy timing depends on reconstruction approach. Physical therapy for range of motion.',
    'Skin-sparing and nipple-sparing mastectomies have equivalent oncologic outcomes to traditional mastectomy when properly selected. Always confirm negative margins. Oncoplastic techniques have expanded breast conservation options, reducing the need for mastectomy.',
  ),

  'sentinel-lymph-node-biopsy': gs(
    'sentinel-lymph-node-biopsy', 'Sentinel Lymph Node Biopsy', 'breast',
    'Minimally invasive lymph node staging technique identifying the first draining node(s) from a primary tumor to assess for metastatic spread without full axillary dissection.',
    ['Clinically node-negative invasive breast cancer', 'T1-T2 breast cancers for axillary staging', 'DCIS undergoing mastectomy (cannot re-biopsy sentinel node later)', 'Melanoma >1 mm Breslow depth or high-risk features'],
    'Dual tracer technique: technetium-99m sulfur colloid (injected preoperatively, localized with gamma probe) and isosulfan blue or indocyanine green dye (injected at induction). Identify and excise all hot and/or blue nodes. Intraoperative touch prep or frozen section in select cases. Z0011 trial: completion axillary dissection may be omitted with 1-2 positive sentinel nodes if receiving breast conservation with radiation.',
    ['Lymphedema (1-5%, much lower than full axillary dissection)', 'Allergic reaction to blue dye (1-2%)', 'False-negative result (5-8%)', 'Seroma', 'Sensory nerve injury (intercostobrachial nerve)'],
    'Minimal additional recovery beyond primary procedure. Blue dye causes skin discoloration and blue-green urine for 24-48 hours.',
    'The ACOSOG Z0011 trial was paradigm-shifting: patients with 1-2 positive sentinel nodes undergoing lumpectomy + whole-breast radiation do NOT need completion axillary dissection. This spares significant morbidity without compromising survival.',
  ),

  'breast-lumpectomy': gs(
    'breast-lumpectomy', 'Breast Lumpectomy (Breast-Conserving Surgery)', 'breast',
    'Partial mastectomy excising the tumor with a rim of normal tissue, combined with radiation therapy as an oncologically equivalent alternative to mastectomy.',
    ['Early-stage invasive breast cancer (T1-T2)', 'DCIS amenable to excision with clear margins', 'Patient preference for breast conservation', 'Favorable tumor-to-breast size ratio', 'Unifocal disease'],
    'Wire-localized or seed-localized excision for nonpalpable lesions. Excise tumor with grossly normal margin of tissue. Specimen oriented with clips/sutures and sent for margin assessment. Cavity shave margins reduce re-excision rates. Oncoplastic techniques allow larger excisions with superior cosmetic results. No ink on tumor is the accepted margin standard.',
    ['Positive margins requiring re-excision (15-20%)', 'Seroma and hematoma', 'Surgical site infection', 'Cosmetic deformity (especially large excisions)', 'Local recurrence (5-10% at 10 years with radiation)'],
    'Return to normal activity in 1-2 weeks. Radiation therapy typically begins 4-6 weeks postoperatively. Annual mammographic surveillance lifelong.',
    '"No ink on tumor" is the accepted margin standard for invasive cancer (SSO-ASTRO consensus). Cavity shave margins reduce re-excision rates by ~50%. Lumpectomy + radiation provides equivalent overall survival to mastectomy for appropriately selected patients.',
  ),

  // ===== ENDOCRINE SURGERY (3) =============================================

  'thyroidectomy': gs(
    'thyroidectomy', 'Thyroidectomy', 'endocrine-surgery',
    'Surgical removal of part (lobectomy) or all (total) of the thyroid gland. Requires meticulous technique to preserve the recurrent laryngeal nerves and parathyroid glands.',
    ['Thyroid carcinoma (papillary, follicular, medullary)', 'Suspicious thyroid nodule (Bethesda V-VI)', 'Compressive goiter causing dysphagia or airway compromise', 'Graves disease refractory to medical therapy', 'Bethesda III-IV nodule for diagnostic lobectomy'],
    'Collar incision, subplatysmal flaps raised, strap muscles retracted. Identify and preserve recurrent laryngeal nerve (RLN) with or without intraoperative nerve monitoring. Identify and preserve parathyroid glands (reimplant if devascularized). Ligate superior and inferior thyroid arteries. Capsular dissection technique to protect parathyroids. Berry ligament is danger zone for RLN.',
    ['Recurrent laryngeal nerve injury (1-2% transient, <1% permanent)', 'Hypoparathyroidism and hypocalcemia (transient 20-30%, permanent 1-2%)', 'Post-operative hematoma with airway compromise (emergency)', 'Seroma', 'Hypothyroidism (expected after total thyroidectomy)'],
    'Overnight observation standard (monitor for hematoma and hypocalcemia). Check calcium and PTH at 6 hours. Thyroid hormone replacement after total thyroidectomy. Voice rest for 1-2 days.',
    'Post-thyroidectomy hematoma is a surgical emergency — open the wound at bedside if airway is compromised. Always check calcium and PTH postoperatively. Intraoperative nerve monitoring does not prevent RLN injury but aids identification.',
  ),

  'parathyroidectomy': gs(
    'parathyroidectomy', 'Parathyroidectomy', 'endocrine-surgery',
    'Surgical removal of abnormal parathyroid gland(s) for primary hyperparathyroidism. Focused (minimally invasive) approach is preferred when a single adenoma is localized.',
    ['Primary hyperparathyroidism meeting NIH surgical criteria', 'Symptomatic hypercalcemia (stones, bones, groans)', 'Age <50 with primary HPT', 'Calcium >1 mg/dL above normal', 'eGFR <60 or T-score < -2.5'],
    'Focused minimally invasive parathyroidectomy (MIP): localize with sestamibi scan and neck ultrasound; small incision directed at adenoma. Intraoperative PTH monitoring (Miami criterion: >50% drop from highest pre-excision level at 10 minutes). Four-gland exploration if localization discordant, multigland disease suspected, or PTH fails to drop. Subtotal parathyroidectomy for 4-gland hyperplasia.',
    ['Persistent or recurrent hyperparathyroidism (2-5%)', 'Hypocalcemia (hungry bone syndrome in severe HPT)', 'Recurrent laryngeal nerve injury', 'Hematoma', 'Failed localization requiring bilateral exploration'],
    'Outpatient or 23-hour observation for focused approach. Monitor calcium postoperatively. Hungry bone syndrome may require prolonged calcium and vitamin D supplementation.',
    'Concordant localization on two imaging modalities (sestamibi + ultrasound) allows focused MIP with >95% success rate. Intraoperative PTH monitoring confirms complete resection. Always consider MEN syndromes (especially MEN1) in young patients or multigland disease.',
  ),

  'thyroid-lobectomy-diagnostic': gs(
    'thyroid-lobectomy-diagnostic', 'Diagnostic Thyroid Lobectomy', 'endocrine-surgery',
    'Hemithyroidectomy performed for thyroid nodules with indeterminate cytology (Bethesda III-IV) to obtain definitive histologic diagnosis.',
    ['Bethesda III (atypia of undetermined significance) with suspicious molecular markers', 'Bethesda IV (follicular neoplasm) — cannot distinguish adenoma from carcinoma on FNA', 'Patient preference over observation for indeterminate nodules', 'Nodules with suspicious ultrasound features and indeterminate cytology'],
    'Same technique as thyroid lobectomy: collar incision, identification and preservation of ipsilateral RLN and parathyroid glands, ligation of thyroid vessels, isthmus division. Specimen sent for permanent histology. Molecular testing (Afirma, ThyroSeq) can help risk-stratify preoperatively to avoid unnecessary surgery.',
    ['Recurrent laryngeal nerve injury', 'Hypoparathyroidism (lower risk than total thyroidectomy)', 'Need for completion thyroidectomy if cancer found on final pathology', 'Hematoma', 'Hypothyroidism (occurs in ~20-30%)'],
    'Outpatient or overnight stay. Final pathology in 5-7 days. If cancer is found, completion thyroidectomy may be needed depending on tumor size and type.',
    'Molecular testing (ThyroSeq v3, Afirma GSC) has high negative predictive value and can reclassify many indeterminate nodules as benign, reducing unnecessary diagnostic surgeries by up to 50%. Low-risk papillary thyroid cancers <4 cm may be adequately treated with lobectomy alone.',
  ),

  // ===== TRAUMA (5) ========================================================

  'trauma-laparotomy': gs(
    'trauma-laparotomy', 'Trauma Laparotomy (Exploratory)', 'trauma',
    'Emergent midline laparotomy for abdominal trauma with hemodynamic instability or peritonitis. Systematic exploration of all four quadrants is mandatory.',
    ['Penetrating abdominal trauma with hemodynamic instability or peritonitis', 'Blunt trauma with free fluid on FAST and hemodynamic instability', 'Gunshot wound to abdomen (most require exploration)', 'Failed nonoperative management of solid organ injury', 'Evisceration or diaphragmatic injury'],
    'Midline incision from xiphoid to pubis. Four-quadrant packing for hemorrhage control. Systematic exploration: liver, spleen, diaphragm, stomach, duodenum (Kocher maneuver), small bowel (run entire length), colon, mesentery, retroperitoneum, pelvis, bladder. Control contamination, achieve hemostasis, then definitive repair. Cattell-Braasch maneuver for right retroperitoneal access, left medial visceral rotation (Mattox maneuver) for aorta.',
    ['Missed injury (most common cause of preventable death)', 'Postoperative hemorrhage', 'Anastomotic leak', 'Intra-abdominal abscess', 'Abdominal compartment syndrome', 'Enteroatmospheric fistula with open abdomen'],
    'ICU postoperatively. May require planned re-exploration in 24-48 hours (damage control). Definitive abdominal closure when physiologically optimized. Full recovery depends on injuries — weeks to months.',
    'Packing and damage control surgery saves lives in the exsanguinating patient. Systematic exploration prevents missed injuries. The triad of death (hypothermia, acidosis, coagulopathy) must be aggressively corrected. Always perform a Kocher maneuver and run the entire small bowel.',
  ),

  'damage-control-surgery': gs(
    'damage-control-surgery', 'Damage Control Surgery', 'trauma',
    'Abbreviated surgical strategy for severely injured patients focused on hemorrhage control and contamination limitation, deferring definitive repair until physiologic stabilization.',
    ['Lethal triad: hypothermia (<35C), acidosis (pH <7.2), coagulopathy', 'Massive transfusion requirement (>10 units pRBC in 24h)', 'Hemodynamic instability despite resuscitation', 'Multiple severe injuries requiring prolonged operative time', 'Anticipated abdominal compartment syndrome'],
    'Phase 1 (OR): rapid hemorrhage control (packing, shunts, ligation), contamination control (staple/ligate bowel, drain bile), temporary abdominal closure (VAC or Bogota bag). Phase 2 (ICU): aggressive resuscitation — warm fluids, correct coagulopathy (massive transfusion protocol 1:1:1 pRBC:FFP:platelets), correct acidosis. Phase 3 (OR): planned re-exploration at 24-48h for definitive repair, pack removal, anastomosis, and abdominal closure.',
    ['Abdominal compartment syndrome', 'Enteroatmospheric fistula', 'Missed injuries discovered at re-exploration', 'Intra-abdominal abscess', 'Fascial retraction preventing primary closure', 'Multiorgan failure'],
    'ICU stay typically 7-14+ days. Multiple re-explorations may be needed. Abdominal closure may require staged approaches or mesh over weeks. Total recovery is prolonged (months).',
    'Damage control saves patients who would die from the physiologic insult of a prolonged definitive operation. The decision to abbreviate must be made EARLY — do not wait until the patient is in extremis. Permissive hypotension (SBP 80-90) and massive transfusion protocols are integral.',
  ),

  'fast-exam': gs(
    'fast-exam', 'FAST Exam (Focused Assessment with Sonography for Trauma)', 'trauma',
    'Bedside point-of-care ultrasound for rapid detection of free intraperitoneal or pericardial fluid in the trauma patient.',
    ['Blunt abdominal trauma with hemodynamic instability', 'Initial trauma assessment (primary survey adjunct)', 'Penetrating thoracoabdominal trauma', 'Undifferentiated hypotension in trauma', 'Serial assessment during trauma resuscitation'],
    'Four acoustic windows: (1) Right upper quadrant (Morrison pouch — hepatorenal recess, most sensitive), (2) Left upper quadrant (splenorenal recess and left paracolic gutter), (3) Suprapubic (pouch of Douglas/rectovesical), (4) Subxiphoid (pericardial effusion). Extended FAST (eFAST) adds bilateral anterior thoracic views for pneumothorax. Patient supine, curvilinear probe. Free fluid appears as anechoic stripe.',
    ['False negative in retroperitoneal hemorrhage, hollow viscus injury, early bleeding', 'Operator-dependent accuracy', 'False positive (pre-existing ascites, full bladder)', 'Cannot grade solid organ injury', 'Missed injuries if FAST negative used as sole criterion'],
    'Performed in real-time during initial assessment (takes 2-4 minutes). No recovery — it is a diagnostic tool that guides immediate surgical decision-making.',
    'FAST answers ONE question in the unstable patient: is there free fluid? A positive FAST + hemodynamic instability = OR. A negative FAST does NOT rule out injury — CT scan is definitive for stable patients. Sensitivity is 73-88% but specificity is >95% for significant hemoperitoneum.',
  ),

  'chest-tube-insertion': gs(
    'chest-tube-insertion', 'Chest Tube Insertion (Tube Thoracostomy)', 'trauma',
    'Placement of a thoracostomy tube into the pleural space for drainage of air (pneumothorax) or fluid (hemothorax, effusion, empyema).',
    ['Traumatic pneumothorax or hemothorax', 'Tension pneumothorax (after needle decompression)', 'Iatrogenic pneumothorax', 'Large pleural effusion causing respiratory compromise', 'Empyema or parapneumonic effusion requiring drainage'],
    '5th intercostal space, anterior to mid-axillary line (safe triangle). Skin incision, blunt dissection over the rib (avoiding intercostal neurovascular bundle on inferior rib surface), enter pleural space with finger sweep (confirm no adhesions). Direct tube posteriorly and superiorly for pneumothorax, posteriorly and inferiorly for fluid. Connect to underwater seal or suction (-20 cmH2O). Confirm placement with CXR. Size: 28-32 Fr for hemothorax/trauma, 20-24 Fr for pneumothorax.',
    ['Intercostal vessel injury and bleeding', 'Lung laceration', 'Tube malposition (subcutaneous, intra-fissural)', 'Empyema or infection', 'Re-expansion pulmonary edema (rapid evacuation of large effusion)', 'Retained hemothorax'],
    'Tube remains until output <150-200 mL/day (fluid) or no air leak for 24 hours (pneumothorax). Water seal trial before removal. Recovery depends on underlying condition.',
    'Initial chest tube output >1500 mL of blood or >200 mL/h for 2-4 hours is an indication for thoracotomy. Always perform a finger sweep before inserting the tube. The safe triangle avoids major structures. Never clamp a chest tube draining a pneumothorax.',
  ),

  'central-line-placement': gs(
    'central-line-placement', 'Central Venous Catheter Placement', 'trauma',
    'Insertion of a multi-lumen catheter into a central vein (internal jugular, subclavian, or femoral) for medication delivery, hemodynamic monitoring, or vascular access.',
    ['Vasopressor administration', 'Large-bore access for resuscitation', 'Total parenteral nutrition', 'Central venous pressure monitoring', 'Lack of peripheral venous access', 'Hemodialysis access (temporary)'],
    'Ultrasound-guided Seldinger technique is standard. Internal jugular (preferred — low complication rate with US): identify vein by compressibility, access under real-time visualization, advance guidewire, dilate tract, thread catheter, confirm wire position before dilation. Subclavian: landmark or US-guided, lower infection rate but higher pneumothorax risk. Femoral: easiest access in emergencies but highest infection rate. Confirm position with CXR (tip at cavoatrial junction).',
    ['Pneumothorax (subclavian > IJ)', 'Arterial puncture and hematoma', 'Central line-associated bloodstream infection (CLABSI)', 'Air embolism', 'Venous thrombosis', 'Cardiac arrhythmia from wire in right atrium'],
    'Can remain in place for days to weeks depending on indication. Daily assessment of ongoing need (remove as soon as possible to minimize CLABSI risk). Site care per institutional bundle protocol.',
    'Ultrasound guidance reduces complications by >50% and is now standard of care for IJ placement. Always confirm guidewire position (aspiration of venous blood, ultrasound, or fluoroscopy) before dilating. The central line bundle (hand hygiene, chlorhexidine, maximal barrier, optimal site selection, daily review) dramatically reduces CLABSI.',
  ),

  // ===== EMERGENCY (5) =====================================================

  'bowel-obstruction-management': gs(
    'bowel-obstruction-management', 'Small Bowel Obstruction Management', 'emergency',
    'Diagnosis and management of mechanical small bowel obstruction. Adhesions (60%), hernias (15%), and tumors (15%) are the most common causes.',
    ['Complete or high-grade small bowel obstruction (SBO)', 'SBO with signs of strangulation (fever, tachycardia, peritonitis, leukocytosis)', 'Closed-loop obstruction on CT', 'Failure of nonoperative management (48-72 hours trial)', 'Incarcerated hernia causing obstruction'],
    'Nonoperative: NPO, NGT decompression, IV fluid resuscitation, serial abdominal exams. Water-soluble contrast (Gastrografin) challenge is both therapeutic and diagnostic — contrast in colon at 24h predicts resolution. Operative: laparoscopic or open adhesiolysis, hernia repair, bowel resection with anastomosis if nonviable bowel. Assess bowel viability by color, peristalsis, and mesenteric pulsation.',
    ['Bowel ischemia and necrosis (missed strangulation)', 'Anastomotic leak', 'Recurrent obstruction (adhesions reform)', 'Short bowel syndrome (extensive resection)', 'Wound infection', 'Aspiration pneumonia'],
    'Nonoperative resolution: resume diet when flatus/BMs return, advance as tolerated. Post-surgical: 5-10 days hospitalization, 4-6 weeks full recovery.',
    'CT scan with IV contrast is the gold standard — look for transition point, closed-loop, mesenteric edema, or reduced wall enhancement (ischemia). The decision for surgery is clinical: peritonitis, fever, leukocytosis, or failure to improve in 48-72 hours. Gastrografin challenge both predicts success and accelerates resolution of partial SBO.',
  ),

  'abscess-incision-drainage': gs(
    'abscess-incision-drainage', 'Abscess Incision and Drainage', 'emergency',
    'Definitive treatment for cutaneous and subcutaneous abscesses. Antibiotics alone are insufficient — all abscesses require source control through drainage.',
    ['Fluctuant subcutaneous abscess', 'Perianal or perirectal abscess', 'Pilonidal abscess (acute)', 'Bartholin gland abscess', 'Breast abscess (non-lactational or failed aspiration)'],
    'Local or regional anesthesia, incision over point of maximal fluctuance, break up loculations with finger or hemostat, irrigate cavity with saline. Packing (traditional) or loop drain technique. Perianal abscesses require exam under anesthesia for complex or recurrent cases to identify fistula tract. Ultrasound can confirm fluid collection and guide drainage. Culture wound in immunocompromised or recurrent cases.',
    ['Recurrence (especially if packing inadequate)', 'Fistula formation (perianal abscess — 30-50% develop fistula-in-ano)', 'Incomplete drainage', 'Necrotizing soft tissue infection (rare but life-threatening)', 'Pain during packing changes'],
    'Packing changes daily or every other day until cavity heals by secondary intention (2-4 weeks). Follow-up in 48 hours for wound check. Return to normal activity in days.',
    'Antibiotics are adjunctive, NOT primary treatment — drainage is curative. Always consider necrotizing fasciitis if disproportionate pain, crepitus, systemic toxicity, or rapid progression. Perianal abscesses should be drained in the OR to evaluate for fistula and horseshoe extensions.',
  ),

  'wound-debridement': gs(
    'wound-debridement', 'Wound Debridement', 'emergency',
    'Removal of necrotic, devitalized, or infected tissue from a wound to promote healing. Fundamental principle: wounds cannot heal in the presence of necrotic tissue.',
    ['Necrotizing fasciitis (emergent)', 'Diabetic foot ulcer with necrotic tissue', 'Traumatic wound with devitalized tissue', 'Surgical site infection', 'Pressure ulcer (stage III-IV) with eschar', 'Open fracture wound'],
    'Sharp debridement: scalpel or scissors excision of necrotic tissue back to viable, bleeding margins. Necrotizing fasciitis requires aggressive serial debridements — tissue that does not bleed or separates easily along fascial planes must be excised. Negative pressure wound therapy (VAC) after debridement accelerates granulation. Enzymatic debridement (collagenase) for non-surgical candidates. Assess wound depth and structures involved.',
    ['Bleeding (especially in well-vascularized areas)', 'Damage to underlying structures (tendons, nerves)', 'Incomplete debridement requiring return to OR', 'Pain', 'Bacteremia during debridement', 'Wound progression despite debridement'],
    'Depends on wound type and size. Necrotizing fasciitis: multiple OR trips, prolonged hospitalization, skin grafting or flap coverage. Simple debridement: outpatient with regular wound care.',
    'Necrotizing fasciitis is a surgical emergency — "when in doubt, cut it out." The LRINEC score can aid diagnosis. Do NOT wait for imaging or cultures — take to OR immediately if clinical suspicion is high. Broad-spectrum antibiotics (vancomycin + piperacillin-tazobactam + clindamycin for toxin suppression) plus aggressive debridement.',
  ),

  'hemorrhoidectomy': gs(
    'hemorrhoidectomy', 'Hemorrhoidectomy', 'emergency',
    'Surgical excision of hemorrhoidal tissue for symptomatic internal or external hemorrhoids refractory to conservative and office-based treatments.',
    ['Grade III-IV internal hemorrhoids (prolapsing, not reducible)', 'Thrombosed external hemorrhoid (acute, within 72 hours)', 'Mixed internal/external hemorrhoids', 'Failed rubber band ligation or sclerotherapy', 'Hemorrhoids with associated pathology (fissure, fistula, skin tags)'],
    'Excisional hemorrhoidectomy (Ferguson closed technique or Milligan-Morgan open): excise hemorrhoid pedicle and tissue, ligate vascular pedicle. Preserve mucosal bridges between excision sites to prevent stenosis. Stapled hemorrhoidopexy (PPH): circumferential stapled mucosectomy for prolapsing internal hemorrhoids. Hemorrhoidal artery ligation (THD/HAL-RAR): Doppler-guided suture ligation.',
    ['Pain (significant — most common complaint)', 'Urinary retention (spinal anesthesia, pain-related)', 'Hemorrhage (delayed bleeding at 7-14 days when pedicle separates)', 'Anal stenosis (from excessive tissue removal)', 'Fecal incontinence (rare)', 'Recurrence'],
    'Severe pain for 1-2 weeks. Sitz baths, stool softeners, and adequate analgesia essential. Return to work in 1-3 weeks. Full healing in 4-6 weeks.',
    'Most hemorrhoids do NOT need surgery — fiber, hydration, topical treatments, and rubber band ligation manage 90%+ of cases. When surgery is needed, preserve mucosal bridges between excision sites to prevent stricture. Grade IV and thrombosed hemorrhoids within 72 hours have the clearest surgical indications.',
  ),

  'pilonidal-cyst-excision': gs(
    'pilonidal-cyst-excision', 'Pilonidal Cyst Excision', 'emergency',
    'Surgical management of pilonidal disease, a chronic inflammatory condition of the natal cleft caused by hair follicle obstruction and foreign body reaction.',
    ['Recurrent pilonidal abscess', 'Chronic pilonidal sinus with drainage', 'Failed conservative management', 'Complex or branching pilonidal disease', 'Pilonidal abscess (acute — I&D first, then definitive)'],
    'Acute abscess: lateral (off-midline) incision and drainage. Definitive repair options: (1) Wide excision with healing by secondary intention (lowest recurrence but slowest healing), (2) Excision with primary midline closure (fast healing but highest recurrence), (3) Off-midline closure techniques — Limberg/rhomboid flap, Karydakis flap, cleft lift (Bascom) — flatten natal cleft to prevent recurrence. Minimally invasive: endoscopic pilonidal sinus treatment (EPSiT), pit-picking.',
    ['Wound dehiscence (especially midline closure)', 'Recurrence (10-30% depending on technique)', 'Surgical site infection', 'Chronic wound requiring prolonged care', 'Cosmetic deformity'],
    'Healing by secondary intention: 6-12 weeks. Flap closure: 2-4 weeks. Off-midline techniques have faster healing and lower recurrence than midline closure.',
    'Off-midline closure techniques (Limberg flap, Karydakis, cleft lift) have the lowest recurrence rates (5-8%) because they flatten the natal cleft. Midline closures have unacceptably high recurrence (up to 30%). For acute abscess, perform lateral I&D first and plan definitive surgery after inflammation resolves.',
  ),

  // ===== COLORECTAL (4) ====================================================

  'colectomy': gs(
    'colectomy', 'Colectomy (Partial and Total)', 'colorectal',
    'Surgical removal of part or all of the colon. Includes right hemicolectomy, left hemicolectomy, sigmoid colectomy, subtotal and total colectomy. Laparoscopic approach is standard for most indications.',
    ['Colon cancer (segmental resection with lymphadenectomy)', 'Complicated diverticulitis (perforation, abscess, fistula, stricture)', 'Inflammatory bowel disease (ulcerative colitis, Crohn colitis)', 'Cecal or sigmoid volvulus', 'Large or high-risk polyps not amenable to endoscopic removal', 'Toxic megacolon (total colectomy)'],
    'Right hemicolectomy: mobilize cecum and ascending colon, ligate ileocolic and right colic pedicles, ileocolic anastomosis (stapled or hand-sewn). Sigmoid colectomy: mobilize sigmoid, ligate IMA (high or low ligation depending on indication), colorectal anastomosis with or without diverting loop ileostomy. Cancer operations require en bloc mesenteric lymphadenectomy with minimum 12 lymph nodes. Complete mesocolic excision (CME) is the oncologic standard.',
    ['Anastomotic leak (3-6%, highest at colorectal anastomosis)', 'Surgical site infection', 'Ileus (prolonged in 10-15%)', 'Bleeding', 'Ureteral injury (left-sided resections)', 'Wound dehiscence and incisional hernia'],
    'Enhanced recovery after surgery (ERAS) protocols: early feeding, mobilization, and multimodal analgesia. Hospital stay 3-5 days (laparoscopic), 5-7 days (open). Full recovery 4-6 weeks.',
    'For colon cancer: minimum 12 lymph nodes must be examined for adequate staging. Complete mesocolic excision (CME) with central vascular ligation improves oncologic outcomes. Always identify the left ureter before dividing the IMA. Enhanced recovery (ERAS) protocols reduce hospital stay by 30%.',
  ),

  'low-anterior-resection': gs(
    'low-anterior-resection', 'Low Anterior Resection', 'colorectal',
    'Sphincter-preserving resection of the rectum with total mesorectal excision (TME) for rectal cancer, restoring bowel continuity with a colorectal or coloanal anastomosis.',
    ['Mid and upper rectal cancer', 'Low rectal cancer after neoadjuvant chemoradiation (if adequate distal margin achievable)', 'Large rectal villous adenoma', 'Selected cases of rectal Crohn disease'],
    'Total mesorectal excision (TME) is the oncologic standard: sharp dissection in the avascular areolar plane surrounding the mesorectum, preserving an intact mesorectal envelope. Distal margin ≥1 cm (2 cm traditional, 1 cm acceptable with clear CRM). Circular stapled colorectal or coloanal anastomosis. Diverting loop ileostomy for low anastomoses. Neoadjuvant chemoradiation for T3-4 or node-positive disease.',
    ['Anastomotic leak (5-15%, higher for low anastomosis)', 'Low anterior resection syndrome (LARS — urgency, frequency, incontinence)', 'Urinary and sexual dysfunction (pelvic nerve injury)', 'Local recurrence (reduced to <5% with TME)', 'Permanent stoma if ileostomy reversal not feasible'],
    'Hospital stay 5-7 days. Diverting ileostomy reversed at 8-12 weeks after confirming anastomotic integrity. LARS symptoms improve over 12-18 months but may persist. Pelvic floor rehabilitation may help.',
    'TME quality (intact mesorectal envelope, clear circumferential resection margin) is THE most important predictor of local recurrence and survival. Always evaluate for LARS preoperatively. Neoadjuvant chemoradiation for locally advanced rectal cancer can achieve pathologic complete response in 15-20%.',
  ),

  'appendicitis-interval-appendectomy': gs(
    'appendicitis-interval-appendectomy', 'Interval Appendectomy', 'colorectal',
    'Elective appendectomy performed 6-8 weeks after successful nonoperative management of complicated (perforated) appendicitis with abscess, following percutaneous drainage.',
    ['Prior complicated appendicitis managed with antibiotics and percutaneous drainage', 'Persistent appendicolith on follow-up imaging', 'Recurrent right lower quadrant symptoms', 'Concern for underlying appendiceal neoplasm (especially age >40)', 'Patient preference after complicated appendicitis'],
    'Laparoscopic approach preferred. Often technically challenging due to adhesions and fibrosis. Preoperative colonoscopy recommended in patients >40 to rule out cecal pathology. Dissection may require appendiceal stump inversion or partial cecectomy if base is inflamed. Send specimen for pathology to evaluate for neoplasm.',
    ['Conversion to open (higher rate than primary appendectomy)', 'Cecal injury requiring extended resection', 'Surgical site infection', 'Ileus', 'Incidental appendiceal neoplasm found on pathology (10-20% in older patients)'],
    'Similar to standard appendectomy: 1-2 weeks for laparoscopic. May be more prolonged if complex dissection or conversion required.',
    'The necessity of routine interval appendectomy is debated. Current evidence suggests it may be safely omitted in patients <40 without appendicolith. However, patients >40 should undergo interval appendectomy and colonoscopy due to 10-20% incidence of appendiceal neoplasm discovered at surgery.',
  ),

  'ostomy-creation-reversal': gs(
    'ostomy-creation-reversal', 'Ostomy Creation and Reversal', 'colorectal',
    'Surgical creation of a stoma (ileostomy or colostomy) bringing bowel to the abdominal surface, and subsequent reversal to restore intestinal continuity.',
    ['Diverting loop ileostomy for distal anastomosis protection', 'End colostomy after Hartmann procedure', 'End ileostomy after total proctocolectomy', 'Fecal diversion for perineal wound healing', 'Unresectable distal obstruction (palliative)'],
    'Creation: preoperative stoma marking by enterostomal therapist (critical for quality of life). Circular skin incision, cruciate fascial incision, deliver bowel without tension or twist. Loop stoma: supporting rod for 5-7 days, mature both limbs. End stoma: mature with mucocutaneous sutures. Reversal: circumferential incision around stoma, takedown of adhesions, stapled or hand-sewn anastomosis. Ileostomy reversal: confirm distal anastomosis integrity (contrast study or endoscopy) before reversal.',
    ['Parastomal hernia (up to 50% long-term)', 'Stoma prolapse or retraction', 'High-output ileostomy with dehydration', 'Skin excoriation', 'Small bowel obstruction (especially after reversal)', 'Anastomotic leak at reversal'],
    'Stoma creation: 3-5 days. Reversal: 3-5 days hospitalization. Stoma function begins 2-3 days postoperatively. Dietary counseling and ongoing enterostomal therapy support.',
    'Preoperative stoma marking is essential — a poorly placed stoma dramatically reduces quality of life. High-output ileostomy (>1500 mL/day) causes dehydration and electrolyte imbalance; manage with dietary modification, loperamide, and oral rehydration. Always confirm distal anastomosis integrity before ileostomy reversal.',
  ),

  // ===== HEPATOBILIARY (4) =================================================

  'whipple-procedure': gs(
    'whipple-procedure', 'Pancreaticoduodenectomy (Whipple Procedure)', 'hepatobiliary',
    'Complex resection of the pancreatic head, duodenum, distal common bile duct, gallbladder, and distal stomach (classic) or pylorus-preserving variant for periampullary malignancies.',
    ['Pancreatic head adenocarcinoma (resectable)', 'Ampullary carcinoma', 'Distal cholangiocarcinoma', 'Duodenal carcinoma', 'Chronic pancreatitis with intractable pain or biliary obstruction', 'Large periampullary adenoma'],
    'Assess resectability: no SMA/celiac involvement, no distant metastases. Resection phase: cholecystectomy, Kocher maneuver, divide stomach/duodenum, divide jejunum, divide pancreatic neck (frozen section of margin), divide bile duct. Reconstruction (3 anastomoses): pancreaticojejunostomy (or pancreaticogastrostomy), hepaticojejunostomy, gastrojejunostomy (or duodenojejunostomy if pylorus-preserving). Drain placement near pancreatic anastomosis.',
    ['Delayed gastric emptying (most common, 20-40%)', 'Pancreatic fistula (10-20%, major morbidity driver)', 'Post-pancreatectomy hemorrhage (sentinel bleed — always investigate)', 'Wound infection', 'Marginal ulcer', 'Exocrine and endocrine insufficiency'],
    'Hospital stay 7-14 days. Drain amylase monitoring for pancreatic fistula. Pancreatic enzyme supplementation. Full recovery 2-3 months. Adjuvant chemotherapy typically begins within 8 weeks.',
    'Sentinel bleed (herald bleed from drain or GI tract) after Whipple demands immediate CT angiography — it may herald catastrophic hemorrhage from pseudoaneurysm of the gastroduodenal artery stump. Pancreatic fistula grade B/C requires drain management and possible intervention. High-volume centers (>20 Whipples/year) have significantly lower mortality.',
  ),

  'hepatic-resection': gs(
    'hepatic-resection', 'Hepatic Resection (Hepatectomy)', 'hepatobiliary',
    'Surgical removal of liver parenchyma, ranging from wedge resection to extended hepatectomy. The liver regenerates to near-original volume within 6-8 weeks.',
    ['Hepatocellular carcinoma (HCC) in non-cirrhotic liver or selected cirrhotic patients', 'Colorectal liver metastases', 'Intrahepatic cholangiocarcinoma', 'Benign tumors (hepatic adenoma >5 cm, symptomatic FNH)', 'Gallbladder cancer with liver invasion'],
    'Couinaud segmental anatomy guides resection planning. Pringle maneuver (portal triad clamping) controls inflow for parenchymal transection. Right hepatectomy: segments V-VIII. Left hepatectomy: segments II-IV. Parenchymal transection with CUSA, harmonic scalpel, or clamp-crush technique. Future liver remnant (FLR) assessment with volumetry — portal vein embolization if FLR <30% (or <40% in cirrhosis) to induce contralateral hypertrophy. Laparoscopic approach increasingly used for minor resections.',
    ['Post-hepatectomy liver failure (most feared, related to FLR)', 'Bile leak', 'Hemorrhage', 'Venous air embolism', 'Portal vein thrombosis', 'Perihepatic abscess'],
    'Hospital stay 5-7 days for major resection. Liver regeneration occurs over 6-8 weeks. Monitor LFTs, bilirubin, INR. Avoid hepatotoxins during recovery.',
    'Future liver remnant (FLR) volume is the most critical preoperative assessment — insufficient FLR causes post-hepatectomy liver failure. Portal vein embolization or ALPPS can increase FLR before resection. The Pringle maneuver can safely occlude portal inflow for 15-20 min intervals. ICG clearance testing helps assess functional reserve in cirrhosis.',
  ),

  'cbd-exploration': gs(
    'cbd-exploration', 'Common Bile Duct Exploration', 'hepatobiliary',
    'Surgical exploration of the common bile duct for stone extraction, performed open or laparoscopically as an alternative to ERCP for choledocholithiasis.',
    ['Choledocholithiasis discovered during cholecystectomy (intraoperative cholangiogram)', 'Failed ERCP stone extraction', 'Concurrent cholecystectomy with known CBD stones', 'Altered anatomy preventing ERCP (Roux-en-Y gastric bypass)', 'Recurrent CBD stones'],
    'Laparoscopic CBDE: transcystic approach (through cystic duct) for small stones (<8 mm) using basket retrieval under fluoroscopy or choledochoscopy. Choledochotomy (longitudinal incision in CBD) for larger stones or failed transcystic approach — primary closure over T-tube or transcystic drain, or choledochoduodenostomy for very dilated duct. Choledochoscope allows direct visualization and lithotripsy of impacted stones.',
    ['Retained CBD stones', 'Bile leak', 'CBD stricture (from instrumentation or closure)', 'Pancreatitis', 'T-tube dislodgement', 'Injury to CBD or hepatic duct'],
    'If T-tube placed: clamping trial at 2 weeks, cholangiogram before removal at 4-6 weeks. Without T-tube: standard cholecystectomy recovery. Return to normal activity in 2-4 weeks.',
    'Laparoscopic CBDE at the time of cholecystectomy is as effective as ERCP + laparoscopic cholecystectomy in a single procedure, with similar stone clearance rates (>90%). It avoids a second procedure and ERCP-associated risks (pancreatitis). Transcystic approach is preferred — choledochotomy reserved for stones >8 mm or failed transcystic extraction.',
  ),

  'liver-abscess-drainage': gs(
    'liver-abscess-drainage', 'Liver Abscess Drainage', 'hepatobiliary',
    'Percutaneous or surgical drainage of pyogenic or amebic liver abscesses. Percutaneous catheter drainage is first-line for pyogenic abscesses.',
    ['Pyogenic liver abscess >5 cm', 'Abscess not responding to antibiotics alone', 'Amebic abscess failing metronidazole (or imminent rupture)', 'Multiloculated or complex abscess', 'Diagnostic aspiration for culture and sensitivity'],
    'Percutaneous: CT or ultrasound-guided catheter placement (8-14 Fr) into abscess cavity, aspirate contents, leave drain in place. Send fluid for Gram stain, culture (aerobic, anaerobic, fungal), cytology. Surgical drainage (laparoscopic or open) for failed percutaneous drainage, multiple abscesses, or concurrent surgical pathology (biliary obstruction). IV antibiotics: broad-spectrum empiric (piperacillin-tazobactam or meropenem) then narrow based on cultures.',
    ['Sepsis and bacteremia during drainage', 'Hemorrhage (hepatic vein or artery injury)', 'Pleural effusion or empyema', 'Catheter displacement', 'Recurrence', 'Biliary fistula'],
    'Drain remains until output minimal and cavity collapsed on imaging (typically 1-3 weeks). IV antibiotics 2-4 weeks, oral antibiotics to complete 4-6 week course. Amebic abscess: metronidazole + luminal agent (paromomycin).',
    'Pyogenic liver abscess: always evaluate for underlying biliary pathology (choledocholithiasis, malignancy) or portal pyemia (diverticulitis, appendicitis). Klebsiella pneumoniae liver abscess is increasingly common and may be associated with metastatic endophthalmitis — check for diabetes. Amebic abscess typically responds to metronidazole alone; drain only if >5 cm, left lobe (rupture risk), or no improvement.',
  ),

  // ===== MINIMALLY INVASIVE (5) ============================================

  'inguinal-hernia-repair': gs(
    'inguinal-hernia-repair', 'Inguinal Hernia Repair', 'minimally-invasive',
    'Surgical repair of inguinal hernias (indirect or direct) using mesh reinforcement. Open (Lichtenstein) and laparoscopic/robotic (TEP, TAPP) approaches available.',
    ['Symptomatic inguinal hernia', 'Incarcerated inguinal hernia', 'Bilateral inguinal hernias (laparoscopic preferred)', 'Recurrent hernia after prior anterior repair (posterior approach preferred)', 'Femoral hernia (often repaired concurrently)'],
    'Lichtenstein (open tension-free): inguinal incision, identify cord structures, reduce hernia, polypropylene mesh secured over the floor of the inguinal canal. TEP (totally extraperitoneal): preperitoneal balloon dissection, mesh placement covering myopectineal orifice without entering peritoneal cavity. TAPP (transabdominal preperitoneal): intraperitoneal access, peritoneal flap, preperitoneal mesh, close peritoneum. All approaches cover direct, indirect, and femoral spaces.',
    ['Chronic groin pain (most common long-term issue, 10-12%)', 'Recurrence (1-2% with mesh)', 'Surgical site infection', 'Mesh infection (rare but devastating)', 'Testicular atrophy (ischemic orchitis from cord injury)', 'Seroma/hematoma', 'Vas deferens injury'],
    'Return to light activity in 1-2 weeks. Heavy lifting restricted for 4-6 weeks (open) or 2-4 weeks (laparoscopic). Most patients return to work within 1-2 weeks.',
    'Laparoscopic repair (TEP/TAPP) offers faster recovery, less chronic pain, and superior outcomes for bilateral and recurrent hernias. The "triangle of doom" (external iliac vessels) and "triangle of pain" (lateral cutaneous nerve, genitofemoral nerve) must be avoided during tack or staple fixation in laparoscopic repair. Watchful waiting is appropriate for minimally symptomatic hernias.',
  ),

  'femoral-hernia-repair': gs(
    'femoral-hernia-repair', 'Femoral Hernia Repair', 'minimally-invasive',
    'Surgical repair of femoral hernias, which protrude through the femoral canal below the inguinal ligament. Higher incarceration risk than inguinal hernias.',
    ['All femoral hernias should be repaired (high incarceration/strangulation risk)', 'Incarcerated or strangulated femoral hernia (emergent)', 'Groin hernia in women (femoral more common than often recognized)', 'Found incidentally during inguinal hernia repair'],
    'McVay (Cooper ligament) repair: open approach suturing transversalis fascia to Cooper ligament. Laparoscopic TEP/TAPP: preferred as they cover the femoral space with mesh from the preperitoneal side. Emergency: low approach (infrainguinal) or preperitoneal approach (Nyhus). Always check bowel viability if incarcerated. Consider bowel resection if strangulated.',
    ['Bowel necrosis if strangulation missed', 'Femoral vein compression or injury', 'Recurrence (higher than inguinal hernia repair)', 'DVT from femoral vein compression', 'Chronic pain'],
    'Similar to inguinal hernia repair: 1-2 weeks light activity. Emergency cases with bowel resection require longer recovery.',
    'Femoral hernias account for 40% of all emergent hernia repairs despite being only 5% of groin hernias — always repair when found. They are more common in women but still most commonly seen overall in men. A laparoscopic approach (TEP/TAPP) covers the femoral space comprehensively and is preferred for elective repair.',
  ),

  'umbilical-hernia-repair': gs(
    'umbilical-hernia-repair', 'Umbilical Hernia Repair', 'minimally-invasive',
    'Repair of hernia at the umbilical ring. Small defects may be closed primarily; larger defects require mesh reinforcement.',
    ['Symptomatic umbilical hernia in adults', 'Umbilical hernia in cirrhotic patients with refractory ascites', 'Incarcerated umbilical hernia', 'Hernia >2 cm (mesh repair recommended)', 'Pediatric umbilical hernia persisting beyond age 4-5'],
    'Small defects (<2 cm): primary suture repair (Mayo or vest-over-pants technique). Larger defects: mesh reinforcement in preperitoneal or retrorectus position preferred. Laparoscopic or robotic approach for larger defects or concurrent diastasis. Cirrhotic patients: optimize ascites preoperatively with diuretics or TIPS, permanent mesh can be used with acceptable outcomes. Always excise redundant skin and hernia sac.',
    ['Recurrence (up to 10% primary repair, <2% with mesh)', 'Surgical site infection', 'Seroma', 'Skin necrosis (large hernia repair with skin closure under tension)', 'Ascites leak in cirrhotic patients'],
    'Outpatient procedure for most cases. Return to normal activity in 1-2 weeks. Lifting restrictions for 4-6 weeks.',
    'Primary suture repair has unacceptably high recurrence for defects >2 cm — use mesh. In cirrhotic patients, umbilical hernia repair is no longer contraindicated; optimize ascites control preoperatively and use mesh. Emergent repair in cirrhosis carries high mortality (up to 14%).',
  ),

  'incisional-hernia-repair': gs(
    'incisional-hernia-repair', 'Incisional Hernia Repair', 'minimally-invasive',
    'Repair of hernia through a prior surgical incision. Occurs in 10-20% of abdominal surgeries. Mesh-based repair is the standard due to high primary suture recurrence rates.',
    ['Symptomatic incisional hernia', 'Incarceration or strangulation', 'Progressive enlargement', 'Loss of domain causing functional impairment', 'Recurrent incisional hernia'],
    'Open: retrorectus mesh placement (Rives-Stoppa) or posterior component separation with transversus abdominis release (TAR) for large defects. Robotic/laparoscopic: enhanced-view TEP (eTEP) with retrorectus mesh, or intraperitoneal onlay mesh (IPOM-plus with defect closure). Mesh selection: permanent synthetic (polypropylene/polyester) for clean fields, biologic or absorbable for contaminated. Preoperative CT for surgical planning — assess defect size, contents, and loss of domain.',
    ['Recurrence (10-20% overall, technique-dependent)', 'Surgical site infection (SSI) and mesh infection', 'Seroma (nearly universal, usually self-resolving)', 'Chronic pain', 'Skin necrosis over repair', 'Fistula (especially with intraperitoneal synthetic mesh and bowel adhesion)'],
    'Avoid heavy lifting for 6-12 weeks. Large abdominal wall reconstructions: 3-6 months recovery. Abdominal binder support for 6 weeks.',
    'Retrorectus mesh position has the lowest recurrence rates and avoids direct mesh-bowel contact. Preoperative risk optimization (BMI <35, HbA1c <8%, smoking cessation, nutritional optimization) is critical. For contaminated fields, biologic or absorbable synthetic mesh is preferred. CT scan is essential for preoperative planning of complex repairs.',
  ),

  'bariatric-sleeve-gastrectomy': gs(
    'bariatric-sleeve-gastrectomy', 'Laparoscopic Sleeve Gastrectomy', 'minimally-invasive',
    'Longitudinal resection of 75-80% of the stomach along the greater curvature, creating a tubular "sleeve." Most commonly performed bariatric procedure worldwide.',
    ['BMI ≥40 kg/m2', 'BMI ≥35 with obesity-related comorbidities (T2DM, hypertension, OSA)', 'BMI ≥30 with uncontrolled T2DM (metabolic surgery)', 'Failed supervised medical weight management', 'Appropriate surgical candidate after multidisciplinary evaluation'],
    'Laparoscopic: 5-port technique, divide short gastric vessels, staple along greater curvature starting 4-6 cm from pylorus using 36-40 Fr bougie as guide. Oversew or reinforce staple line (surgeon preference). Send specimen. Upper GI series or endoscopy on POD1 to evaluate for leak (institutional variation). Ensure no twisting or narrowing of the sleeve.',
    ['Staple line leak (1-3%, most dreaded complication)', 'Staple line hemorrhage', 'Gastric sleeve stricture', 'GERD (new onset or worsening, 20-30%)', 'Nutritional deficiencies (B12, iron, folate)', 'Insufficient weight loss or weight regain'],
    'Hospital stay 1-2 days. Liquid diet for 2 weeks, pureed 2 weeks, soft 2 weeks, then regular diet. Expected excess weight loss 60-70% at 2 years. Lifelong vitamin supplementation and follow-up.',
    'Sleeve gastrectomy is irreversible — 80% of the stomach is removed. Staple line leak at the GEJ/angle of His is the most feared complication, presenting with tachycardia (often the first sign), fever, and left shoulder pain. New or worsened GERD is the main long-term concern and may necessitate conversion to gastric bypass.',
  ),

  'bariatric-gastric-bypass': gs(
    'bariatric-gastric-bypass', 'Roux-en-Y Gastric Bypass', 'minimally-invasive',
    'Creation of a small gastric pouch connected to a Roux limb of jejunum, bypassing the majority of the stomach, duodenum, and proximal jejunum. Gold-standard metabolic surgery for T2DM.',
    ['BMI ≥40 or ≥35 with comorbidities', 'Uncontrolled T2DM (superior metabolic outcomes to sleeve)', 'Severe GERD (contraindication to sleeve gastrectomy)', 'Revision from prior failed sleeve gastrectomy or adjustable band', 'BMI ≥30 with metabolic syndrome'],
    'Laparoscopic: create small (30 mL) gastric pouch by dividing stomach. Divide jejunum 30-50 cm from ligament of Treitz. Create Roux limb (75-150 cm). Gastrojejunostomy (linear or circular stapled, or hand-sewn). Jejunojejunostomy to restore intestinal continuity. Close all mesenteric defects (Petersen space and jejunojejunostomy mesenteric defect) to prevent internal hernia.',
    ['Anastomotic leak (1-2%)', 'Internal hernia through mesenteric defects (2-5%, can be delayed)', 'Marginal ulcer at gastrojejunostomy (5-10%)', 'Dumping syndrome', 'Nutritional deficiencies (iron, calcium, B12, thiamine)', 'Cholelithiasis from rapid weight loss'],
    'Hospital stay 2-3 days. Staged diet advancement over 6 weeks. Expected excess weight loss 70-80% at 2 years. Lifelong vitamin supplementation (multivitamin, calcium-citrate, B12, iron) and annual lab monitoring.',
    'Internal hernia is a surgical emergency that can present years after surgery with intermittent, crampy abdominal pain — CT with mesenteric swirl sign is diagnostic. Always close mesenteric defects. Marginal ulcers are associated with smoking, NSAIDs, and H. pylori. Thiamine deficiency can present as Wernicke encephalopathy in patients with prolonged vomiting — supplement empirically.',
  ),

  // ===== ADDITIONAL PROCEDURES ==============================================

  'tracheostomy': gs(
    'tracheostomy', 'Tracheostomy', 'emergency',
    'Surgical creation of an airway through the anterior tracheal wall, performed for prolonged mechanical ventilation, upper airway obstruction, or pulmonary toilet.',
    ['Prolonged mechanical ventilation (typically >10-14 days)', 'Upper airway obstruction (tumor, bilateral vocal cord paralysis, angioedema)', 'Failed extubation or difficult airway', 'Need for long-term pulmonary toilet', 'Head and neck surgery requiring secure airway'],
    'Open surgical: horizontal skin incision between cricoid and sternal notch, divide strap muscles in midline, identify thyroid isthmus (divide or retract), enter trachea between 2nd-3rd tracheal rings (inferiorly placed to avoid subglottic stenosis). Create Bjork flap or horizontal incision. Percutaneous dilational tracheostomy (PDT): performed at bedside with bronchoscopic guidance, Seldinger technique with serial dilators. PDT preferred for ICU patients; open for difficult anatomy or pediatric patients.',
    ['Hemorrhage (thyroid vessels, innominate artery erosion — devastating late complication)', 'False passage', 'Pneumothorax (especially in pediatric patients)', 'Tracheal stenosis (most common late complication)', 'Tracheoinnominate fistula (1-3%, often fatal)', 'Accidental decannulation', 'Stomal infection'],
    'First tracheostomy tube change at 5-7 days (allows tract maturation). Decannulation when patient meets criteria (adequate cough, manageable secretions, no upper airway obstruction). Speaking valve (Passy-Muir) improves quality of life.',
    'Tracheoinnominate fistula presents as hemorrhage from the tracheostomy site — temporize by hyperinflating the cuff and applying digital pressure through the stoma against the sternum, then emergent OR. A low tracheostomy (below the 3rd ring) increases this risk. Always perform bronchoscopy during PDT to confirm midline placement.',
  ),

  'feeding-tube-placement': gs(
    'feeding-tube-placement', 'Feeding Tube Placement (PEG/Surgical)', 'emergency',
    'Establishment of enteral access for nutrition and medication delivery when oral intake is not feasible. PEG (percutaneous endoscopic gastrostomy) is the most common method.',
    ['Dysphagia from neurologic disease (stroke, ALS, head injury)', 'Head and neck cancer with impaired swallowing', 'Prolonged NPO status requiring enteral nutrition >4 weeks', 'Gastric decompression (venting PEG)', 'Supplemental nutrition in cystic fibrosis or other chronic diseases'],
    'PEG (Ponsky pull technique): endoscope transilluminates anterior gastric wall, percutaneous needle insertion, guidewire passed through stomach and pulled out orally, PEG tube attached and pulled into position. Surgical gastrostomy (open or laparoscopic): Stamm technique with concentric purse-string sutures. Surgical jejunostomy (Witzel technique) for patients requiring post-pyloric feeding. Radiologic (fluoroscopic) gastrostomy available as alternative.',
    ['Wound infection (most common, 5-25%)', 'Tube dislodgement (critical if <2 weeks — tract not mature)', 'Buried bumper syndrome', 'Aspiration pneumonia (not fully prevented by post-pyloric feeding)', 'Peritonitis (if tube falls out before tract matures)', 'Colonic injury during placement'],
    'Begin feeding 4-24 hours after PEG placement (early feeding is safe). Tube site care daily. Replace PEG tube every 6-12 months. If tube dislodges within 2 weeks, do NOT blindly replace — confirm tract and position radiographically.',
    'Early tube dislodgement (<2 weeks) is dangerous — the immature tract can allow free peritoneal contamination. Do not blindly replace; obtain contrast study or surgical consultation. PEG is contraindicated with interposed colon (hepatoflexure), massive ascites, and inability to transilluminate. Always verify endoscope indentation on the abdominal wall ("safe tract" signs) before puncture.',
  ),

  'esophagectomy': gs(
    'esophagectomy', 'Esophagectomy', 'abdominal',
    'Surgical resection of the esophagus for malignant or end-stage benign disease. Among the most complex operations in general surgery with significant morbidity.',
    ['Esophageal adenocarcinoma or squamous cell carcinoma (resectable)', 'High-grade dysplasia in Barrett esophagus (failed endoscopic therapy)', 'End-stage achalasia or esophageal stricture', 'Esophageal perforation not amenable to primary repair', 'Selected GIST or neuroendocrine tumors'],
    'Ivor Lewis (most common): laparoscopic abdominal phase (gastric mobilization, conduit creation) + right thoracotomy (esophageal resection, intrathoracic anastomosis). McKeown (3-field): adds cervical incision with neck anastomosis (lower leak consequence but higher recurrent laryngeal nerve injury). Transhiatal: abdominal + cervical approach avoiding thoracotomy. Minimally invasive (MIE): thoracoscopic + laparoscopic. Stomach is the preferred conduit.',
    ['Anastomotic leak (5-15%, major morbidity/mortality driver)', 'Pneumonia and respiratory failure (most common complication)', 'Conduit ischemia or necrosis', 'Recurrent laryngeal nerve injury', 'Chylothorax (thoracic duct injury)', 'Stricture at anastomosis (20-40%, usually dilatable)', 'Dumping syndrome and reflux'],
    'ICU stay 2-5 days. Hospital stay 7-14 days. Jejunostomy feeding tube placed intraoperatively for nutrition. Gradual diet advancement over weeks. Long-term: small frequent meals, sleeping elevated, nutritional monitoring.',
    'Volume-outcome relationship is strongest for esophagectomy — refer to high-volume centers (>20 cases/year). Anastomotic leak is the most feared complication; contrast swallow or CT on POD5-7. Conduit necrosis requires emergent takedown. Minimally invasive approaches (MIE/robotic) reduce pulmonary complications. Neoadjuvant chemoradiation (CROSS protocol) is standard for locally advanced disease.',
  ),

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getGeneralSurgeryEntry(id: string): GeneralSurgeryEntry | undefined {
  return GENERAL_SURGERY_ENTRIES[id];
}

export function searchGeneralSurgery(query: string): GeneralSurgeryEntry[] {
  const q = query.toLowerCase();
  return Object.values(GENERAL_SURGERY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.indications.some(i => i.toLowerCase().includes(q)) ||
    e.complications.some(c => c.toLowerCase().includes(q)) ||
    e.keyPearl.toLowerCase().includes(q),
  );
}

export function getGeneralSurgeryByCategory(cat: GeneralSurgeryCategory): GeneralSurgeryEntry[] {
  return Object.values(GENERAL_SURGERY_ENTRIES).filter(e => e.category === cat);
}

export function getGeneralSurgeryCount(): number {
  return Object.keys(GENERAL_SURGERY_ENTRIES).length;
}
