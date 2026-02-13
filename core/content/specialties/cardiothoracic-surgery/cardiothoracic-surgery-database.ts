/**
 * Biological Self — Cardiothoracic Surgery Specialty Database
 * 32 entries covering coronary, valvular, aortic, congenital-cardiac,
 * thoracic-oncologic, lung-transplant, mechanical-support, and
 * minimally-invasive-cardiac procedures.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CardiothoracicCategory =
  | 'coronary' | 'valvular' | 'aortic' | 'congenital-cardiac'
  | 'thoracic-oncologic' | 'lung-transplant' | 'mechanical-support'
  | 'minimally-invasive-cardiac';

export interface CardiothoracicEntry {
  id: string;
  name: string;
  category: CardiothoracicCategory;
  description: string;
  indications: string[];
  technique: string;
  complications: string[];
  outcomes: string;
  keyPearl: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const ct = (
  id: string, name: string, category: CardiothoracicCategory,
  description: string, indications: string[], technique: string,
  complications: string[], outcomes: string, keyPearl: string,
): CardiothoracicEntry => ({
  id, name, category, description, indications, technique,
  complications, outcomes, keyPearl,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const CARDIOTHORACIC_ENTRIES: Record<string, CardiothoracicEntry> = {

  // ===== CORONARY (2) ======================================================

  'cabg': ct(
    'cabg', 'Coronary Artery Bypass Grafting (CABG)', 'coronary',
    'Surgical myocardial revascularization using arterial or venous conduits to bypass stenotic coronary arteries. Gold standard for left main and multivessel disease.',
    ['Left main stenosis >50%', 'Three-vessel CAD (especially with reduced LVEF or diabetes)', 'Two-vessel CAD with proximal LAD involvement', 'Failed PCI or anatomy unsuitable for stenting', 'Ischemic cardiomyopathy with viable myocardium'],
    'Median sternotomy with cardiopulmonary bypass (on-pump) or beating-heart technique (off-pump). LIMA-to-LAD is the cornerstone graft with >90% 10-year patency. Additional conduits include RIMA, radial artery, and saphenous vein grafts. Proximal anastomoses to ascending aorta; distal to coronary targets beyond stenosis. Heparinization, cardioplegia for myocardial protection, and controlled reperfusion.',
    ['Perioperative MI (2-5%)', 'Mediastinitis and sternal wound infection (1-2%)', 'Stroke (1-2%)', 'Atrial fibrillation (20-40%)', 'Graft failure (SVG: 50% at 10 years)', 'Renal dysfunction', 'Bleeding requiring re-exploration'],
    'Operative mortality 1-3%. LIMA-LAD patency >95% at 10 years. Significant survival benefit over PCI in left main, three-vessel, and diabetic populations (SYNTAX, FREEDOM trials). Symptom relief in >90%.',
    'LIMA-to-LAD is non-negotiable — it is the single most important graft and drives long-term survival benefit in CABG.',
  ),

  'cabg-off-pump': ct(
    'cabg-off-pump', 'Off-Pump CABG (OPCAB)', 'coronary',
    'Coronary bypass performed on the beating heart without cardiopulmonary bypass, using mechanical stabilizers to immobilize the target coronary region.',
    ['High-risk patients for CPB (porcelain aorta, severe aortic atherosclerosis)', 'Renal insufficiency (avoiding CPB nephrotoxicity)', 'Elderly patients with comorbidities', 'Patient preference in experienced centers', 'Redo CABG with patent grafts'],
    'Median sternotomy approach. Octopus or Starfish tissue stabilizers immobilize the target area. Intracoronary shunts maintain distal perfusion during anastomosis. Positioning the heart for lateral and posterior targets requires Trendelenburg and right lateral tilt. Heparinization at lower dose than on-pump. Same conduit options as conventional CABG.',
    ['Hemodynamic instability during heart positioning', 'Incomplete revascularization (lower graft numbers in some series)', 'Conversion to on-pump (5-10%)', 'Technical difficulty with posterior targets', 'Comparable stroke and mortality to on-pump in experienced hands'],
    'ROOBY and CORONARY trials showed similar 5-year outcomes to on-pump CABG in experienced centers. May reduce transfusion, renal injury, and stroke in select patients. Surgeon experience is critical for equivalent graft quality.',
    'Off-pump CABG outcomes are highly surgeon-dependent — completeness of revascularization must not be compromised to avoid CPB.',
  ),

  // ===== VALVULAR (5) ======================================================

  'avr-surgical': ct(
    'avr-surgical', 'Surgical Aortic Valve Replacement (SAVR)', 'valvular',
    'Open surgical replacement of the aortic valve with a mechanical or bioprosthetic valve via sternotomy and cardiopulmonary bypass.',
    ['Severe aortic stenosis (valve area <1.0 cm2, mean gradient >40 mmHg) with symptoms', 'Severe aortic regurgitation with symptoms or LV dilation (LVESD >50 mm)', 'Low-risk patients <65 years (mechanical) or >65 years (bioprosthetic)', 'Concomitant cardiac surgery (CABG, aortic root)', 'Bicuspid aortic valve with stenosis or regurgitation'],
    'Median sternotomy, CPB, aortic cross-clamp, cardioplegia. Transverse aortotomy exposes the valve. Native valve excised, annulus debrided and sized. Prosthesis seated with pledgeted sutures (interrupted or running). Aortotomy closed, de-airing, and weaning from CPB. Mechanical valves require lifelong warfarin (INR 2.5-3.5); bioprosthetic valves allow anticoagulation-free management after 3-6 months.',
    ['Paravalvular leak (2-5%)', 'Heart block requiring pacemaker (3-8%)', 'Stroke (1-3%)', 'Prosthetic valve endocarditis (0.5-1%/year)', 'Structural valve degeneration (bioprosthetic: 10-15 years)', 'Thromboembolism (mechanical: 1-2%/year on warfarin)', 'Bleeding from anticoagulation'],
    'Operative mortality 1-3% in low-risk patients. Excellent long-term durability: mechanical valves last a lifetime; bioprosthetic valves 10-20 years depending on age. Symptom relief in >95%. SAVR remains standard for low-surgical-risk patients under 65.',
    'Valve choice is a shared decision: mechanical valves trade lifelong warfarin for durability; bioprosthetic valves trade eventual reoperation for freedom from anticoagulation.',
  ),

  'mvr-replacement': ct(
    'mvr-replacement', 'Mitral Valve Replacement', 'valvular',
    'Surgical replacement of the mitral valve with a mechanical or bioprosthetic prosthesis when repair is not feasible.',
    ['Severe mitral stenosis not amenable to commissurotomy', 'Severe mitral regurgitation with heavily calcified or destroyed leaflets', 'Failed prior mitral valve repair', 'Rheumatic mitral disease with extensive fibrosis', 'Endocarditis with extensive leaflet destruction'],
    'Median sternotomy or right mini-thoracotomy, CPB, left atriotomy or transseptal approach. Diseased valve excised preserving subvalvular chordal attachments when possible (critical for LV function). Prosthesis secured with pledgeted mattress sutures around the annulus. Mechanical valves used more often in mitral position due to higher flow and thrombotic risk with bioprosthetic.',
    ['Thromboembolism (mechanical: 2-3%/year even on warfarin)', 'LVOT obstruction (preserved posterior leaflet can cause SAM)', 'Paravalvular leak', 'Prosthetic valve endocarditis', 'Heart block (less common than AVR)', 'LV dysfunction from chordal disruption if not preserved', 'Hemolytic anemia (mechanical valves)'],
    'Operative mortality 4-8% (higher than AVR due to sicker population). 10-year survival 50-70%. Preserving the subvalvular apparatus significantly improves postoperative LV function and survival.',
    'Always preserve chordal attachments during mitral valve replacement — loss of the subvalvular apparatus leads to LV dysfunction and worse outcomes.',
  ),

  'mv-repair': ct(
    'mv-repair', 'Mitral Valve Repair', 'valvular',
    'Reconstructive surgery to restore mitral valve competency while preserving native valve tissue. Preferred over replacement for degenerative MR.',
    ['Severe degenerative mitral regurgitation (leaflet prolapse, flail)', 'Functional MR with annular dilation (adjunct to CABG or as standalone)', 'Endocarditis with limited leaflet destruction', 'Congenital mitral valve anomalies', 'Asymptomatic severe MR with LVEF 60-69% or LVESD 40-44 mm'],
    'Median sternotomy or minimally-invasive right thoracotomy. CPB and left atriotomy expose the valve. Techniques include leaflet resection (triangular or quadrangular), neochordae (Gore-Tex ePTFE), ring annuloplasty (rigid or semi-rigid), edge-to-edge repair (Alfieri stitch), and commissuroplasty. Ring annuloplasty is performed in virtually all repairs to stabilize the annulus.',
    ['Residual or recurrent MR (5-10% at 10 years)', 'SAM and LVOT obstruction (especially excess anterior leaflet tissue)', 'Mitral stenosis from over-reduction', 'Need for reoperation (1-2%/year)', 'Stroke and bleeding', 'Heart block (rare)'],
    'Repair durability: >90% freedom from reoperation at 10 years for degenerative disease. Operative mortality <1% in centers of excellence. Superior to replacement in terms of survival, LV function preservation, and avoidance of anticoagulation.',
    'Mitral valve repair is always preferred over replacement for degenerative disease — refer to experienced surgeons, as outcomes are highly volume-dependent.',
  ),

  'tvr-repair': ct(
    'tvr-repair', 'Tricuspid Valve Surgery (Repair/Replacement)', 'valvular',
    'Surgical intervention for tricuspid regurgitation, usually ring annuloplasty for functional TR or replacement for organic disease.',
    ['Severe TR during left-sided valve surgery', 'Moderate TR with tricuspid annular dilation >40 mm at left-sided surgery', 'Isolated severe TR with symptoms or RV dilation', 'Tricuspid valve endocarditis (IV drug use)', 'Ebstein anomaly with severe TR'],
    'Accessed via right atriotomy during sternotomy. Repair: ring annuloplasty (De Vega suture or rigid ring) is preferred. Kay bicuspidization for simple functional TR. Replacement: bioprosthetic valve strongly preferred in tricuspid position (mechanical valves have high thrombosis rates). In endocarditis, valve excision without replacement is an option with later staged replacement.',
    ['Residual TR after repair', 'Heart block (proximity to AV node at septal leaflet)', 'Prosthetic valve thrombosis (mechanical: up to 20%)', 'RV dysfunction progression', 'Liver dysfunction from chronic venous congestion', 'Reoperation risk'],
    'Operative mortality 5-10% (reflects advanced disease and biventricular dysfunction). Tricuspid annuloplasty at the time of left-sided surgery adds minimal risk but significantly reduces late TR. Isolated tricuspid surgery carries higher risk due to end-organ dysfunction.',
    'Do not ignore the tricuspid valve — addressing functional TR with annuloplasty at the time of left-sided surgery prevents progressive right heart failure.',
  ),

  'multi-valve': ct(
    'multi-valve', 'Double/Triple Valve Surgery', 'valvular',
    'Combined surgical intervention on two or three cardiac valves in a single operation, most commonly aortic and mitral, often with tricuspid repair.',
    ['Combined aortic and mitral valve disease (rheumatic heart disease)', 'Aortic and mitral disease with functional TR (triple valve)', 'Endocarditis involving multiple valves', 'Carcinoid heart disease (tricuspid and pulmonary)', 'Combined degenerative and calcific disease'],
    'Extended median sternotomy approach. Sequential valve procedures under single CPB run. Typical order: mitral valve first (left atriotomy), then aortic valve (aortotomy), then tricuspid (right atriotomy) — this allows inspection of the mitral prosthesis from the aortic root. Longer cross-clamp and CPB times increase myocardial protection demands.',
    ['Higher operative mortality than single valve (8-15%)', 'Prolonged CPB and cross-clamp time', 'Coagulopathy and bleeding', 'Renal failure', 'Multi-organ dysfunction', 'Prosthesis-patient mismatch', 'Complex anticoagulation management'],
    'Operative mortality 8-15%, significantly higher than single valve. Long-term survival depends on preoperative LV and RV function. Rheumatic patients in developing countries often present late with advanced multi-valve disease, driving higher mortality.',
    'Multi-valve surgery carries compounding risk — preoperative optimization of heart failure, nutrition, and end-organ function is critical to acceptable outcomes.',
  ),

  // ===== AORTIC (4) ========================================================

  'bentall': ct(
    'bentall', 'Aortic Root Replacement (Bentall Procedure)', 'aortic',
    'Composite replacement of the aortic valve, aortic root, and ascending aorta with reimplantation of the coronary arteries into the graft.',
    ['Aortic root aneurysm (>5.5 cm, or >5.0 cm with Marfan/bicuspid)', 'Aortic dissection involving the root', 'Severe aortic regurgitation with root dilation', 'Annuloaortic ectasia', 'Prosthetic valve endocarditis with root abscess'],
    'Median sternotomy, CPB with deep hypothermia if arch involved. Root excised, coronary buttons mobilized. Mechanical or bioprosthetic valved conduit sewn to the annulus with pledgeted sutures. Coronary buttons reimplanted into the graft (button Bentall technique). Distal anastomosis to ascending aorta or arch. Alternative: valve-sparing root replacement (David or Yacoub) in suitable anatomy.',
    ['Coronary button bleeding or kinking (can be lethal)', 'Stroke (3-5%)', 'Pseudoaneurysm at anastomoses', 'Prosthetic valve endocarditis', 'Aortic dissection recurrence', 'Bleeding requiring re-exploration (5-10%)', 'Renal failure'],
    'Operative mortality 3-7% (elective), 15-25% (emergency dissection). Excellent long-term durability of the composite graft. 10-year survival 70-80% in elective cases. Valve-sparing root replacement avoids anticoagulation with comparable durability in experienced centers.',
    'Coronary button reimplantation is the most technically critical step — tension-free, hemostatic anastomoses prevent catastrophic postoperative bleeding.',
  ),

  'aortic-dissection-repair': ct(
    'aortic-dissection-repair', 'Acute Aortic Dissection Repair', 'aortic',
    'Emergency surgical repair of Stanford Type A aortic dissection (involving the ascending aorta) to prevent rupture, tamponade, and death.',
    ['Stanford Type A dissection (any involvement of ascending aorta) — surgical emergency', 'Complicated Type B dissection (malperfusion, rupture, refractory pain)', 'Retrograde Type A dissection from TEVAR', 'Intramural hematoma of ascending aorta', 'Acute aortic regurgitation from dissection'],
    'Emergency median sternotomy. CPB with deep hypothermic circulatory arrest (DHCA 18-20C) for open distal anastomosis. Ascending aorta replaced with Dacron graft. If root involved: Bentall or valve-sparing root replacement. If arch involved: hemiarch or total arch replacement with island reimplantation of arch vessels or branched graft. Elephant trunk or frozen elephant trunk for extensive disease. BioGlue or felt reinforcement of dissected layers.',
    ['Operative mortality 15-25%', 'Stroke (10-15%)', 'Spinal cord ischemia (total arch/descending extension)', 'Malperfusion syndrome (mesenteric, renal, limb)', 'Bleeding and coagulopathy', 'Renal failure requiring dialysis', 'Recurrent dissection of residual aorta'],
    'Without surgery, Type A dissection mortality is 1-2% per hour in the first 48 hours. Surgical repair reduces 30-day mortality to 15-25%. Long-term surveillance mandatory for residual false lumen and distal aortic dilation.',
    'Type A dissection is the most time-sensitive cardiac surgical emergency — every hour of delay increases mortality, and the OR should be activated immediately upon diagnosis.',
  ),

  'thoracic-aortic-aneurysm': ct(
    'thoracic-aortic-aneurysm', 'Thoracic Aortic Aneurysm Repair', 'aortic',
    'Elective surgical or endovascular repair of thoracic aortic aneurysms to prevent rupture. Approach depends on location (root, ascending, arch, descending).',
    ['Ascending/root aneurysm >5.5 cm (>5.0 cm with connective tissue disorder)', 'Descending thoracic aneurysm >6.0 cm (or >5.5 cm with connective tissue disorder)', 'Growth rate >0.5 cm/year', 'Symptomatic aneurysm at any size', 'Saccular aneurysm or pseudoaneurysm'],
    'Ascending: median sternotomy, CPB, graft replacement (see Bentall for root). Arch: DHCA with antegrade cerebral perfusion, total arch with branched graft or island technique. Descending: left thoracotomy with distal aortic perfusion and CSF drainage, or TEVAR (endovascular stent graft) — now preferred for descending aneurysms. Hybrid approaches for complex arch pathology.',
    ['Stroke (arch surgery: 5-10%)', 'Spinal cord ischemia/paraplegia (descending: 3-8% open, 2-5% TEVAR)', 'Renal failure', 'Bleeding', 'Recurrent laryngeal nerve injury (descending)', 'Endoleak (TEVAR: 10-15%)', 'Graft infection'],
    'Elective operative mortality: ascending 3-5%, arch 5-10%, descending open 5-8%, TEVAR 2-4%. TEVAR has revolutionized descending aortic repair with lower morbidity. Long-term surveillance essential for endoleak and disease progression.',
    'Spinal cord protection (CSF drainage, permissive hypertension, staged repair) is paramount in descending thoracic aortic surgery to prevent paraplegia.',
  ),

  'aortic-arch-replacement': ct(
    'aortic-arch-replacement', 'Total Aortic Arch Replacement', 'aortic',
    'Complete replacement of the aortic arch with reimplantation or bypass of the great vessels. One of the most complex cardiac surgical procedures.',
    ['Aortic arch aneurysm >5.5 cm', 'Type A dissection extending into the arch', 'Atherosclerotic or mycotic arch aneurysm', 'Failed endovascular arch repair', 'Connective tissue disorder with arch involvement'],
    'Median sternotomy, CPB with deep hypothermic circulatory arrest (18-20C). Antegrade cerebral perfusion via axillary or innominate artery cannulation maintains brain protection. Arch vessels reimplanted as island patch or individually using branched Dacron graft (trifurcated or tetrafurcated). Frozen elephant trunk technique extends repair into the descending aorta with a stented distal component. Neurophysiologic monitoring (EEG, SSEP, NIRS) throughout.',
    ['Stroke (5-12%)', 'Temporary neurologic dysfunction (15-25%)', 'Spinal cord ischemia', 'Bleeding and coagulopathy from DHCA', 'Renal failure', 'Recurrent laryngeal nerve palsy', 'Prolonged ventilation'],
    'Operative mortality 5-12% in high-volume centers. Antegrade cerebral perfusion has significantly reduced stroke rates compared to DHCA alone. Frozen elephant trunk simplifies staged descending aortic repair. 5-year survival 60-75%.',
    'Antegrade selective cerebral perfusion is the modern standard during arch surgery — it extends the safe circulatory arrest time and reduces neurologic injury.',
  ),

  // ===== CONGENITAL-CARDIAC (3) ============================================

  'asd-closure': ct(
    'asd-closure', 'Atrial Septal Defect (ASD) Closure', 'congenital-cardiac',
    'Surgical or percutaneous closure of an atrial septal defect to eliminate left-to-right shunting and prevent right heart volume overload.',
    ['Hemodynamically significant ASD (Qp:Qs >1.5:1)', 'Right heart enlargement', 'Paradoxical embolism or cryptogenic stroke', 'Symptoms (dyspnea, exercise intolerance, atrial arrhythmias)', 'Secundum ASD suitable for device closure; primum and sinus venosus require surgery'],
    'Percutaneous: Amplatzer or Gore septal occluder deployed via femoral venous access under TEE/fluoroscopy for secundum ASDs with adequate rims. Surgical: median sternotomy or right mini-thoracotomy, CPB, right atriotomy. Direct suture closure for small defects, pericardial or synthetic patch for larger defects. Sinus venosus ASD requires baffle to redirect anomalous pulmonary veins.',
    ['Residual shunt (5-10% device, <3% surgical)', 'Device embolization or erosion (rare but serious)', 'Atrial arrhythmias (especially if older at repair)', 'Heart block (primum ASD repair)', 'Pericardial effusion', 'Stroke', 'Pulmonary vein stenosis (sinus venosus repair)'],
    'Procedural mortality <0.1% for device closure, <1% for surgical. Excellent long-term outcomes with closure before age 25 — normal life expectancy. Late closure (age >40) still reduces symptoms and RV remodeling but may not prevent atrial arrhythmias.',
    'Always evaluate for sinus venosus ASD with anomalous pulmonary venous return — it is missed by TTE alone and requires TEE or cross-sectional imaging.',
  ),

  'vsd-closure': ct(
    'vsd-closure', 'Ventricular Septal Defect (VSD) Closure', 'congenital-cardiac',
    'Surgical closure of a ventricular septal defect to eliminate left-to-right shunting, prevent pulmonary hypertension, and protect ventricular function.',
    ['Large VSD with Qp:Qs >2:1 or pulmonary hypertension', 'Symptomatic heart failure in infants despite medical therapy', 'Aortic regurgitation from supracristal VSD (any size)', 'Perimembranous VSD with progressive AR', 'Post-MI VSD (surgical emergency)'],
    'Median sternotomy, CPB, cardioplegia. Right atriotomy and trans-tricuspid approach (most perimembranous VSDs). Patch closure with Dacron or pericardium using pledgeted interrupted sutures. Outlet VSDs accessed via right ventriculotomy or pulmonary arteriotomy. Muscular VSDs may be closed percutaneously with Amplatzer device. Post-MI VSD repaired with infarct exclusion technique.',
    ['Heart block (perimembranous VSD: 1-3%, proximity to conduction system)', 'Residual VSD (5-10%)', 'Tricuspid regurgitation (from retraction during repair)', 'RV dysfunction (if ventriculotomy performed)', 'Hemolysis from residual shunt jet', 'Post-MI VSD: high mortality (20-40%)'],
    'Elective surgical mortality <1% in isolated VSD. Post-MI VSD mortality remains 20-40% despite surgery. Long-term outcomes excellent for congenital VSD closed in infancy — normal life expectancy and exercise capacity.',
    'In perimembranous VSD closure, place sutures on the right ventricular side of the septum near the conduction system to reduce heart block risk.',
  ),

  'myomectomy': ct(
    'myomectomy', 'Septal Myectomy (Morrow Procedure)', 'congenital-cardiac',
    'Surgical resection of hypertrophied interventricular septum to relieve dynamic LVOT obstruction in hypertrophic obstructive cardiomyopathy (HOCM).',
    ['HOCM with LVOT gradient >50 mmHg at rest or provocation, refractory to medical therapy', 'Drug-refractory symptoms (dyspnea, syncope, angina)', 'HOCM with severe mitral regurgitation (SAM-related)', 'Failed alcohol septal ablation', 'Associated anomalies (papillary muscle, mitral valve) requiring concomitant repair'],
    'Median sternotomy, CPB, aortotomy. Through the aortic valve, a trough-shaped resection of the basal septum is performed extending from below the right coronary ostium to beyond the mitral-septal contact point (modified extended Morrow). Typically 5-10 g of muscle removed. Concomitant mitral valve repair, papillary muscle reorientation, or anomalous chordae resection as needed. Intraoperative TEE confirms gradient elimination and MR resolution.',
    ['Iatrogenic VSD (1-2%)', 'Complete heart block requiring pacemaker (2-5%)', 'Aortic regurgitation from valve injury', 'Residual LVOT obstruction', 'Left bundle branch block (common)', 'Stroke', 'Operative mortality 0.5-1% in expert centers'],
    'Expert center mortality <1%. >95% gradient elimination. Long-term survival comparable to age-matched general population after successful myectomy. Superior to alcohol septal ablation in younger patients and those with complex anatomy.',
    'Septal myectomy is the gold standard for HOCM obstruction — it should be performed at experienced centers (>20 cases/year) where outcomes are dramatically better.',
  ),

  // ===== THORACIC-ONCOLOGIC (8) ============================================

  'lobectomy': ct(
    'lobectomy', 'Pulmonary Lobectomy', 'thoracic-oncologic',
    'Anatomic resection of a lung lobe for primary lung cancer or other localized pathology. Standard of care for stage I-II NSCLC.',
    ['Stage I-II non-small cell lung cancer (NSCLC)', 'Localized carcinoid tumor', 'Bronchiectasis confined to one lobe', 'Lung abscess refractory to antibiotics', 'Benign tumor (hamartoma) with mass effect or diagnostic uncertainty'],
    'VATS (preferred) or thoracotomy. Individual ligation and division of lobar pulmonary artery branches, pulmonary vein, and bronchus. Complete hilar and mediastinal lymph node dissection (stations 5-12). Fissure completion with stapler if incomplete. Bronchial stump tested for air leak. Single chest tube. Robotic-assisted lobectomy is increasingly used.',
    ['Prolonged air leak (8-15%)', 'Atrial fibrillation (10-20%)', 'Pneumonia (3-5%)', 'Bronchopleural fistula (1-2%)', 'Chylothorax (1%)', 'Postoperative pain and intercostal neuralgia', 'Respiratory failure requiring prolonged ventilation'],
    'Operative mortality 1-3%. 5-year survival for stage IA NSCLC: 77-92%. VATS lobectomy shows equivalent oncologic outcomes with less pain, shorter stay, and faster recovery than thoracotomy.',
    'Complete mediastinal lymph node dissection is mandatory during lobectomy for cancer — systematic nodal staging drives adjuvant therapy decisions and impacts survival.',
  ),

  'pneumonectomy': ct(
    'pneumonectomy', 'Pneumonectomy', 'thoracic-oncologic',
    'Complete removal of an entire lung, typically for centrally located lung cancer not amenable to lesser resection.',
    ['Centrally located NSCLC involving the main bronchus or pulmonary artery', 'Tumors crossing a major fissure involving multiple lobes', 'Destroyed lung from infection (tuberculosis, bronchiectasis)', 'Mesothelioma (extrapleural pneumonectomy)', 'Completion pneumonectomy for recurrence after prior lobectomy'],
    'Posterolateral thoracotomy (5th intercostal space). Main pulmonary artery ligated individually or with stapler. Superior and inferior pulmonary veins divided. Main bronchus divided and closed with stapler or hand-sewn technique, reinforced with tissue flap (pericardial fat, intercostal muscle, pleura). Mediastinal lymph node dissection. No chest tube left in (or balanced drainage). Right pneumonectomy carries higher morbidity than left.',
    ['Postpneumonectomy pulmonary edema (especially right, 4-7%)', 'Bronchopleural fistula (2-5%, higher on right side)', 'Cardiac herniation (right pneumonectomy if pericardium opened)', 'Post-pneumonectomy syndrome (mediastinal shift)', 'Empyema (2-5%)', 'Respiratory failure', 'Cardiac arrhythmias (20-40%)'],
    'Operative mortality 5-8% (right > left). 5-year survival for NSCLC 20-40% depending on stage. Should be avoided when a sleeve resection or bilobectomy can achieve R0 margins. Quality of life and pulmonary function significantly reduced postoperatively.',
    'Right pneumonectomy carries significantly higher mortality than left — always consider sleeve lobectomy as a parenchyma-sparing alternative.',
  ),

  'esophagectomy': ct(
    'esophagectomy', 'Esophagectomy', 'thoracic-oncologic',
    'Surgical resection of the esophagus for esophageal cancer, with gastric conduit reconstruction. One of the most morbid oncologic operations.',
    ['Esophageal adenocarcinoma or squamous cell carcinoma (resectable stages)', 'High-grade dysplasia in Barrett esophagus (not amenable to endoscopic therapy)', 'End-stage achalasia with megaesophagus', 'Caustic stricture with malignant transformation', 'Esophageal perforation not amenable to primary repair'],
    'Approaches: Ivor Lewis (right thoracotomy + laparotomy, intrathoracic anastomosis), McKeown (three-incision, cervical anastomosis), transhiatal (no thoracotomy, cervical anastomosis), minimally invasive (MIE — thoracoscopy/laparoscopy). Gastric conduit created by tubularizing the stomach along the greater curvature. Two-field or three-field lymphadenectomy. Jejunostomy tube for postoperative nutrition.',
    ['Anastomotic leak (10-15%, most common serious complication)', 'Pneumonia and respiratory failure (15-20%)', 'Recurrent laryngeal nerve injury (cervical anastomosis)', 'Chylothorax (2-4%)', 'Conduit necrosis (rare but devastating)', 'Stricture at anastomosis (10-30%)', 'Dumping syndrome and reflux'],
    'Operative mortality 2-5% in high-volume centers (vs. 10-15% in low-volume). 5-year survival 40-50% after neoadjuvant chemoradiation and R0 resection. MIE reduces pulmonary complications and length of stay compared to open approaches.',
    'Esophagectomy outcomes are profoundly volume-dependent — centralization to experienced centers (>20/year) dramatically reduces mortality.',
  ),

  'thymectomy': ct(
    'thymectomy', 'Thymectomy', 'thoracic-oncologic',
    'Surgical removal of the thymus gland for thymoma or myasthenia gravis. Extent of resection ranges from transcervical to extended transsternal.',
    ['Thymoma (any stage — complete resection is definitive treatment)', 'Myasthenia gravis (even without thymoma, improves remission rates)', 'Thymic carcinoma', 'Thymic cyst or mass of uncertain diagnosis', 'Thymic hyperplasia with refractory myasthenia'],
    'Approaches: VATS or robotic thymectomy (preferred for non-invasive disease and MG), median sternotomy (invasive thymoma), transcervical (MG without thymoma). Complete resection of all thymic tissue and perithymic fat is essential. For invasive thymoma, en bloc resection of involved structures (pericardium, lung, great vessels) may be required. Preoperative optimization of myasthenia (IVIG or plasmapheresis) reduces myasthenic crisis risk.',
    ['Myasthenic crisis (10-15% postoperatively)', 'Phrenic nerve injury (3-5%)', 'Bleeding', 'Wound infection (sternotomy approach)', 'Recurrence of thymoma (5-10% at 10 years)', 'Incomplete resection if capsule violated', 'Prolonged ventilation in MG patients'],
    'Operative mortality <1%. Thymoma: 10-year survival 80-90% for stage I-II. Myasthenia gravis: complete stable remission in 30-50% after thymectomy (MGTX trial confirmed benefit). Robotic approach offers equivalent completeness with less morbidity.',
    'In myasthenia gravis, preoperative stabilization with IVIG or plasmapheresis is essential — postoperative myasthenic crisis is the most dangerous complication.',
  ),

  'mediastinoscopy': ct(
    'mediastinoscopy', 'Mediastinoscopy', 'thoracic-oncologic',
    'Surgical exploration of the mediastinum through a suprasternal incision for tissue biopsy of paratracheal and subcarinal lymph nodes.',
    ['Staging of NSCLC with mediastinal lymphadenopathy (confirm N2/N3 disease)', 'PET-positive mediastinal nodes requiring tissue confirmation', 'Lymphoma diagnosis (inadequate tissue from other methods)', 'Sarcoidosis tissue diagnosis', 'Mediastinal mass biopsy when EBUS is non-diagnostic'],
    'General anesthesia, supine with neck extension. 3-4 cm transverse incision above the sternal notch. Dissection along pretracheal plane. Video-assisted mediastinoscope (VAM) inserted. Systematic biopsy of stations 2R, 4R, 2L, 4L, and 7 (subcarinal). Extended cervical mediastinoscopy (Ginsberg) can reach station 5 and 6. Hemostasis with packing or cautery. Increasingly replaced by EBUS-TBNA for staging.',
    ['Bleeding from innominate artery or vein (1-2%, can be catastrophic)', 'Recurrent laryngeal nerve injury (1%)', 'Pneumothorax', 'Esophageal perforation (rare)', 'Wound infection', 'False-negative result (5-10%)'],
    'Sensitivity 80-90% for mediastinal staging. Complication rate <2%. Largely being replaced by EBUS-TBNA and EUS-FNA for mediastinal staging, but remains the gold standard when tissue diagnosis is equivocal or EBUS is non-diagnostic.',
    'Mediastinoscopy remains the gold standard for mediastinal staging when EBUS is equivocal — a negative EBUS with high clinical suspicion warrants mediastinoscopy.',
  ),

  'chest-wall-reconstruction': ct(
    'chest-wall-reconstruction', 'Chest Wall Resection and Reconstruction', 'thoracic-oncologic',
    'En bloc resection of chest wall tumors with reconstruction to maintain respiratory mechanics and protect intrathoracic structures.',
    ['Primary chest wall tumors (chondrosarcoma, osteosarcoma, Ewing sarcoma)', 'Lung cancer with chest wall invasion (T3)', 'Chest wall metastases (isolated, selected cases)', 'Radiation necrosis of chest wall', 'Recurrent breast cancer invading chest wall'],
    'En bloc resection with 2-4 cm bony margins. Defects >5 cm or anterior/lateral location require rigid reconstruction (methylmethacrylate sandwich, titanium plates, or Gore-Tex patch). Soft tissue coverage with myocutaneous flaps (latissimus dorsi, pectoralis major, rectus abdominis, omentum). Smaller posterior defects covered by scapula may need only soft tissue. Preoperative CT and MRI for planning resection margins.',
    ['Respiratory failure from paradoxical chest wall motion', 'Flap necrosis or infection', 'Prosthetic material infection', 'Chronic pain', 'Pneumonia', 'Seroma/hematoma', 'Recurrence at margins'],
    'Operative mortality 1-5%. 5-year survival for primary chest wall sarcomas: 50-70% with R0 resection. Lung cancer with chest wall invasion (T3): 30-40% 5-year survival with complete resection and adjuvant therapy.',
    'Wide bony margins (>2 cm) are critical in chest wall sarcoma — marginal resection leads to local recurrence and worse survival.',
  ),

  'pectus-excavatum': ct(
    'pectus-excavatum', 'Pectus Excavatum Repair (Nuss Procedure)', 'thoracic-oncologic',
    'Minimally invasive repair of pectus excavatum (funnel chest) by placing a curved steel bar behind the sternum to correct the depression.',
    ['Haller index >3.25 on CT scan', 'Symptomatic pectus (exercise intolerance, dyspnea, chest pain)', 'Cardiac compression or displacement', 'Pulmonary function impairment', 'Significant psychosocial impact'],
    'Nuss procedure (minimally invasive): bilateral thoracoscopy-guided placement of a curved steel bar (Nuss bar) through small lateral incisions. Bar passed behind the sternum and flipped to elevate the depression. Stabilizers secured laterally. Bar removed after 2-3 years. Ravitch procedure (open): subperichondrial resection of deformed costal cartilages with sternal osteotomy and internal fixation. Modified Ravitch with absorbable plates increasingly used.',
    ['Bar displacement (2-5%)', 'Pneumothorax (5-10%)', 'Pericarditis or pericardial effusion', 'Wound infection (1-3%)', 'Hemothorax', 'Allergic reaction to nickel (bar material)', 'Chronic pain during bar tenure'],
    'Excellent cosmetic and functional results in >95% of patients. Nuss procedure: shorter OR time, less blood loss, but painful recovery. Best results in patients aged 12-18 years (chest wall flexibility). Bar removal at 2-3 years is a straightforward outpatient procedure.',
    'Timing matters — pectus repair is ideal during adolescence when the chest wall is still flexible, yielding superior and more durable correction.',
  ),

  'empyema-drainage': ct(
    'empyema-drainage', 'Empyema Drainage and Decortication', 'thoracic-oncologic',
    'Surgical management of pleural empyema, ranging from chest tube drainage to VATS debridement or open decortication to achieve lung re-expansion.',
    ['Complicated parapneumonic effusion with loculations', 'Frank empyema (purulent pleural fluid, positive cultures, pH <7.2)', 'Failed tube thoracostomy and fibrinolytic therapy', 'Trapped lung from fibrous peel', 'Chronic empyema with organized fibrotic cavity'],
    'Staged approach: Stage I (exudative): chest tube drainage and antibiotics. Stage II (fibrinopurulent): VATS debridement and breakdown of loculations, irrigation, chest tube placement. Stage III (organized): VATS or open decortication — removal of the visceral pleural peel to allow lung re-expansion. Open Eloesser flap (window thoracostomy) for chronically debilitated patients unable to tolerate decortication.',
    ['Incomplete lung re-expansion', 'Persistent air leak', 'Recurrent empyema (10-15%)', 'Bleeding from decortication (vascular pleural peel)', 'Bronchopleural fistula', 'Prolonged chest tube duration', 'Respiratory failure'],
    'VATS debridement in stage II: 85-90% success rate, length of stay 5-7 days. Early surgical intervention (within 2 weeks) produces better outcomes than prolonged tube drainage. Open decortication for stage III is definitive but morbid.',
    'Early VATS intervention for empyema (stage II) is superior to prolonged antibiotic and tube drainage — do not wait for organization before operating.',
  ),

  // ===== LUNG-TRANSPLANT (2) ===============================================

  'lung-transplant': ct(
    'lung-transplant', 'Lung Transplantation', 'lung-transplant',
    'Replacement of one or both diseased lungs with donor organs for end-stage lung disease. Bilateral sequential transplant is now most common.',
    ['COPD/emphysema (most common indication in most programs)', 'Idiopathic pulmonary fibrosis (IPF)', 'Cystic fibrosis (bilateral transplant mandatory)', 'Pulmonary arterial hypertension', 'Alpha-1 antitrypsin deficiency', 'Re-transplant for chronic allograft dysfunction'],
    'Bilateral sequential technique via clamshell incision (bilateral anterolateral thoracotomy with transverse sternotomy) or bilateral thoracotomies. Recipient pneumonectomy, then donor implantation: bronchial anastomosis (telescoping or end-to-end), pulmonary artery anastomosis, left atrial cuff anastomosis (pulmonary veins). CPB or ECMO standby for hemodynamic support. Native lung with worse function transplanted first. Ex-vivo lung perfusion (EVLP) expands donor pool.',
    ['Primary graft dysfunction (PGD, 10-25%, leading cause of early death)', 'Acute rejection (50% in first year)', 'Chronic lung allograft dysfunction (CLAD, 50% by 5 years)', 'Infections (CMV, Aspergillus, bacterial pneumonia)', 'Bronchial anastomotic complications (stenosis, dehiscence)', 'Renal failure from calcineurin inhibitors', 'Malignancy (PTLD, skin cancer)'],
    'Median survival 6.7 years (bilateral) vs 4.6 years (single). 1-year survival 85-90% in experienced centers. Quality of life and functional capacity dramatically improved. CLAD (BOS and RAS) remains the Achilles heel limiting long-term survival.',
    'Chronic lung allograft dysfunction (CLAD) is the major long-term barrier — early detection via spirometry decline and prompt immunosuppression adjustment is critical.',
  ),

  'lung-volume-reduction': ct(
    'lung-volume-reduction', 'Lung Volume Reduction Surgery (LVRS)', 'lung-transplant',
    'Resection of hyperinflated, emphysematous lung tissue to improve respiratory mechanics, diaphragm function, and elastic recoil.',
    ['Upper-lobe predominant emphysema with low exercise capacity (NETT trial criteria)', 'FEV1 20-45% predicted', 'Hyperinflation (TLC >120%, RV >150% predicted)', 'Completed pulmonary rehabilitation', 'Non-smoking for at least 6 months'],
    'VATS approach (bilateral) or median sternotomy. Identification and resection of 20-30% of the most emphysematous lung (typically upper lobes) using buttressed staple lines (bovine pericardium or PTFE). Target areas identified by CT heterogeneity mapping and perfusion scanning. Endobronchial valves (Zephyr) offer a non-surgical alternative for selected patients with intact interlobar fissures.',
    ['Prolonged air leak (30-50%, most common)', 'Pneumonia (10-15%)', 'Respiratory failure requiring prolonged ventilation', 'Operative mortality 5-7%', 'Cardiovascular complications', 'Re-admission for air leak management', 'Limited long-term benefit (effects may diminish after 3-5 years)'],
    'NETT trial: upper-lobe predominant emphysema with low exercise capacity showed survival benefit and significant quality-of-life improvement. FEV1 improvement of 10-15% absolute. Non-upper-lobe predominant disease with high exercise capacity: increased mortality with LVRS.',
    'Patient selection is everything in LVRS — the NETT trial clearly defined who benefits (upper-lobe emphysema, low exercise capacity) and who is harmed.',
  ),

  // ===== MECHANICAL-SUPPORT (4) ============================================

  'lvad': ct(
    'lvad', 'Left Ventricular Assist Device (LVAD) Implantation', 'mechanical-support',
    'Implantation of a continuous-flow mechanical pump to augment left ventricular output in advanced heart failure.',
    ['Bridge to transplant (BTT) — awaiting heart transplantation', 'Destination therapy (DT) — not a transplant candidate', 'Bridge to recovery — expected myocardial recovery (myocarditis, postpartum)', 'Bridge to candidacy — optimize end-organ function for transplant eligibility', 'INTERMACS profile 1-4 (cardiogenic shock to advanced NYHA IV)'],
    'Median sternotomy or less-invasive lateral thoracotomy. Inflow cannula inserted into LV apex, secured with sewing ring. Outflow graft anastomosed to ascending aorta. Driveline tunneled subcutaneously to exit site on abdomen, connecting to external controller and batteries. CPB used during implantation. Current devices: HeartMate 3 (centrifugal, fully magnetically levitated) — dominant platform with superior hemocompatibility.',
    ['Driveline infection (15-20%, most common long-term)', 'Pump thrombosis (2-5% with HeartMate 3)', 'Right ventricular failure (20-30%, may need temporary RVAD)', 'GI bleeding from acquired von Willebrand syndrome (15-25%)', 'Stroke (10-15% at 2 years)', 'Hemolysis', 'Aortic insufficiency (progressive, continuous flow)'],
    '2-year survival: 70-80% (HeartMate 3 MOMENTUM trial). Significant improvement in functional capacity, quality of life, and end-organ function. HeartMate 3 has dramatically reduced pump thrombosis compared to prior devices. Destination therapy outcomes approaching transplant outcomes in select patients.',
    'Right ventricular failure is the most feared early complication of LVAD — preoperative RV assessment (RVSWI, CVP/PCWP ratio, echo) is essential for planning.',
  ),

  'heart-transplant': ct(
    'heart-transplant', 'Heart Transplantation', 'mechanical-support',
    'Orthotopic replacement of a failing heart with a donor allograft. The definitive treatment for end-stage heart failure.',
    ['End-stage heart failure refractory to optimal medical therapy', 'Cardiogenic shock requiring mechanical support', 'Refractory ventricular arrhythmias', 'Severe ischemic heart disease not amenable to revascularization or LVAD', 'Congenital heart disease with irreparable anatomy', 'Failed LVAD therapy'],
    'Orthotopic technique: median sternotomy, CPB, recipient cardiectomy leaving posterior left atrial cuff (biatrial technique) or bicaval technique (preserving recipient IVC/SVC). Donor heart implanted with left atrial, aortic, PA, and bicaval (or right atrial) anastomoses. Bicaval technique is now standard — better sinus node function, less tricuspid regurgitation. Cold ischemic time <4 hours optimal (DCD hearts expanding with NRP and OCS).',
    ['Primary graft failure (5-10%, leading cause of early death)', 'Acute cellular and antibody-mediated rejection', 'Cardiac allograft vasculopathy (50% at 10 years)', 'Infections (CMV, toxoplasmosis, opportunistic)', 'Malignancy (skin cancer, PTLD)', 'Renal failure from calcineurin inhibitors', 'Hypertension and diabetes from immunosuppression'],
    'Median survival 12.5 years (conditional on 1-year survival: 14 years). 1-year survival 85-90%. Dramatic improvement in functional capacity and quality of life. DCD heart transplantation and ex-situ perfusion are expanding the donor pool.',
    'Cardiac allograft vasculopathy is the leading cause of late graft loss — annual surveillance angiography and intravascular ultrasound enable early detection.',
  ),

  'ecmo': ct(
    'ecmo', 'Extracorporeal Membrane Oxygenation (ECMO)', 'mechanical-support',
    'Temporary extracorporeal life support providing gas exchange (VV-ECMO) or both circulatory and gas exchange support (VA-ECMO) for refractory cardiopulmonary failure.',
    ['VA-ECMO: refractory cardiogenic shock, post-cardiotomy shock, cardiac arrest (ECPR), bridge to decision', 'VV-ECMO: severe ARDS (PaO2/FiO2 <80 despite optimal ventilation), bridge to lung transplant', 'Massive pulmonary embolism with hemodynamic collapse', 'Primary graft dysfunction after lung transplant', 'Refractory hypothermia with cardiac arrest'],
    'VV-ECMO: percutaneous femoral venous drainage cannula + internal jugular return cannula, or single dual-lumen cannula (Avalon) in right IJ. VA-ECMO: femoral arterial return + femoral venous drainage (peripheral), or central cannulation (ascending aorta and right atrium) in post-cardiotomy setting. Circuit: centrifugal pump, polymethylpentene membrane oxygenator, heat exchanger. Flows 3-6 L/min. Systemic anticoagulation with heparin (target ACT 180-220s).',
    ['Bleeding (30-50%, most common)', 'Limb ischemia (peripheral VA-ECMO: 10-20%, requires distal perfusion cannula)', 'Harlequin syndrome (differential hypoxia in VA-ECMO with recovering heart)', 'Stroke (5-10%)', 'Hemolysis', 'Infection (15-25%)', 'Circuit thrombosis and oxygenator failure'],
    'VV-ECMO for ARDS: 60% survival to discharge (ELSO registry). VA-ECMO for cardiogenic shock: 40-50% survival. ECPR for cardiac arrest: 25-35% neurologically intact survival. Outcomes are highly center-dependent. Bridge-to-decision allows time for diagnostic workup and treatment planning.',
    'ECMO is a bridge, not a destination — define the exit strategy (recovery, durable device, transplant, or withdrawal) within 48-72 hours of cannulation.',
  ),

  'cpb-principles': ct(
    'cpb-principles', 'Cardiopulmonary Bypass Principles', 'mechanical-support',
    'Extracorporeal circuit that temporarily replaces heart and lung function during cardiac surgery, enabling a motionless, bloodless operative field.',
    ['Most open cardiac surgical procedures (CABG, valve surgery, aortic surgery)', 'Congenital heart surgery', 'Circulatory arrest for aortic arch surgery', 'Pulmonary thromboendarterectomy', 'Rewarming in severe hypothermia'],
    'Components: venous cannula (right atrium or bicaval), reservoir, centrifugal or roller pump, membrane oxygenator, heat exchanger, arterial filter, arterial cannula (ascending aorta). Systemic heparinization (ACT >480s). Non-pulsatile flow at 2.2-2.4 L/min/m2. Moderate hypothermia (32-34C) or deep hypothermia (18-20C) for circulatory arrest. Cardioplegia (del Nido, Buckberg, or custodiol) for myocardial protection. Weaning: inotropes, reperfusion, deairing, protamine reversal.',
    ['Systemic inflammatory response (SIRS) from circuit contact', 'Coagulopathy (platelet consumption, fibrinolysis, hemodilution)', 'Neurocognitive dysfunction (30-50% transient, 1-5% stroke)', 'Renal injury (10-30%)', 'Hemodilution and anemia', 'Air embolism', 'Protamine reaction'],
    'CPB enables the vast majority of cardiac surgery. Ongoing refinements — biocompatible circuits, miniaturized systems, retrograde autologous priming, leukocyte filtration — continue to reduce inflammatory and hematologic complications.',
    'Myocardial protection is the cornerstone of safe CPB — adequate cardioplegia delivery and distribution determine the extent of ischemia-reperfusion injury.',
  ),

  // ===== MINIMALLY-INVASIVE-CARDIAC (4) ====================================

  'tavr': ct(
    'tavr', 'Transcatheter Aortic Valve Replacement (TAVR)', 'minimally-invasive-cardiac',
    'Catheter-based aortic valve replacement without sternotomy or CPB. Now approved for all surgical risk categories with severe aortic stenosis.',
    ['Severe symptomatic aortic stenosis in intermediate to high surgical risk', 'Inoperable patients with severe AS', 'Low-risk patients with suitable anatomy (expanding indication)', 'Valve-in-valve for degenerated surgical bioprosthetic valve', 'Bicuspid aortic valve (emerging, select cases)'],
    'Transfemoral approach (preferred, >95% of cases): percutaneous femoral artery access, retrograde crossing of aortic valve, balloon valvuloplasty (optional), self-expanding (Evolut) or balloon-expandable (SAPIEN) valve deployment. Alternative access: transapical, transaortic, subclavian, transcaval. CT-based annular sizing is critical for valve selection. Rapid ventricular pacing (180-220 bpm) for balloon-expandable deployment. Post-dilation for paravalvular leak.',
    ['Paravalvular leak (5-10%, reduced with newer-generation valves)', 'New permanent pacemaker (10-20% Evolut, 5-10% SAPIEN)', 'Stroke (1-3%)', 'Vascular access complications (5-10%)', 'Coronary obstruction (rare but lethal)', 'Valve thrombosis', 'Conduction abnormalities (new LBBB)'],
    '30-day mortality 1-3% across all risk groups. Non-inferior or superior to SAVR in low, intermediate, and high-risk trials (PARTNER, Evolut). Rapid recovery: most patients discharged in 1-3 days. Long-term valve durability data emerging (5-10 year results reassuring). Concerns remain about lifetime valve management in young patients.',
    'CT-based annular sizing is the single most important step in TAVR — incorrect sizing causes paravalvular leak (undersized) or annular rupture (oversized).',
  ),

  'mitraclip': ct(
    'mitraclip', 'MitraClip (Transcatheter Mitral Valve Repair)', 'minimally-invasive-cardiac',
    'Percutaneous edge-to-edge mitral valve repair using a clip device to reduce mitral regurgitation without surgery.',
    ['Severe primary (degenerative) MR at prohibitive surgical risk', 'Severe secondary (functional) MR despite guideline-directed medical therapy (COAPT criteria)', 'Symptomatic severe MR in heart failure patients not candidates for surgery', 'Heart failure with LVEF 20-50%, LVESD <70 mm, and effective regurgitant orifice >30 mm2'],
    'Transfemoral venous access, transseptal puncture to left atrium under TEE guidance. Steerable guide catheter positions the MitraClip system above the mitral valve. Clip arms opened, aligned perpendicular to coaptation line, advanced into LV, leaflets grasped, clip closed creating a double orifice. Multiple clips can be placed. Real-time TEE assessment of MR reduction and mitral gradient. Newer devices (PASCAL) offer independent leaflet capture.',
    ['Residual MR >2+ (5-10%)', 'Clip detachment or embolization (rare)', 'Mitral stenosis from excessive clipping (mean gradient >5 mmHg)', 'Atrial septal defect (iatrogenic, usually clinically insignificant)', 'Pericardial tamponade (1-2%)', 'Stroke', 'Need for subsequent mitral surgery'],
    'COAPT trial: 29% absolute reduction in heart failure hospitalization and significant mortality benefit in functional MR with proper patient selection. Primary MR: MitraClip inferior to surgery in EVEREST II but reasonable option for prohibitive-risk patients. Procedure-related mortality <1%.',
    'Patient selection is critical — COAPT trial success depends on disproportionate MR relative to LV size (EROA/LVEDV ratio); the MITRA-FR population (proportionate MR) showed no benefit.',
  ),

  'vats-general': ct(
    'vats-general', 'Video-Assisted Thoracoscopic Surgery (VATS)', 'minimally-invasive-cardiac',
    'Minimally invasive thoracic surgery using a camera and instruments through small port incisions, avoiding thoracotomy.',
    ['Lung biopsy (wedge resection) for diagnosis', 'Lobectomy for early-stage NSCLC', 'Pleural biopsy and pleurodesis', 'Empyema debridement', 'Pneumothorax (bullectomy and pleurodesis)', 'Mediastinal mass biopsy', 'Pericardial window', 'Sympathectomy for hyperhidrosis'],
    'General anesthesia with single-lung ventilation (double-lumen ETT or bronchial blocker). Lateral decubitus position. Typically 2-4 ports (5-12 mm incisions). Camera port in 7th-8th intercostal space, working ports triangulated. Utility incision (4-6 cm) for specimen extraction in VATS lobectomy. Endoscopic staplers for parenchymal division and vessel ligation. Complete lymph node dissection achievable. Uniportal VATS (single incision) is gaining popularity.',
    ['Conversion to thoracotomy (2-8%)', 'Prolonged air leak (wedge resection: 5%, lobectomy: 8-15%)', 'Bleeding (major: 1-2%)', 'Port-site recurrence (rare with proper technique)', 'Intercostal neuralgia', 'Atelectasis and pneumonia', 'Trocar injury'],
    'VATS lobectomy: equivalent oncologic outcomes to open thoracotomy with less pain, shorter hospital stay (3-5 days vs 5-7), faster return to activity, fewer complications. VATS is now the standard approach for early-stage NSCLC in most thoracic centers.',
    'Single-lung ventilation is the enabling technology for VATS — mastering lung isolation technique and managing hypoxemia during one-lung ventilation is essential.',
  ),

  'robotic-cardiac': ct(
    'robotic-cardiac', 'Robotic-Assisted Cardiac Surgery', 'minimally-invasive-cardiac',
    'Robot-assisted cardiac procedures using the da Vinci system through small port incisions, offering enhanced visualization and dexterity.',
    ['Mitral valve repair (robotic approach well-suited for posterior leaflet prolapse)', 'ASD closure', 'CABG (robotic LIMA harvest with mini-thoracotomy CABG)', 'Thymectomy for myasthenia gravis or thymoma', 'Cardiac tumor excision (myxoma)', 'Tricuspid valve repair'],
    'da Vinci system positioned at patient right side. Right mini-thoracotomy or port-only approach. Femoral CPB cannulation with endoaortic balloon occlusion (Heartport) or direct aortic clamping. 3D HD visualization with 10x magnification. Wristed instrumentation enables intracardiac suturing with 7 degrees of freedom. Robotic LIMA harvest for CABG is a hybrid approach (robotic IMA takedown + small anterior thoracotomy for LAD anastomosis).',
    ['Conversion to sternotomy (1-5%)', 'Femoral vessel injury from peripheral cannulation', 'Aortic dissection from endoclamp', 'Longer operative and CPB times (learning curve)', 'Cost (robotic system and disposable instruments)', 'Phrenic nerve injury', 'Port-site complications'],
    'Robotic mitral repair: >95% repair rate in experienced centers, operative mortality <1%, equivalent durability to sternotomy. Shorter hospital stay (3-4 days) and faster return to full activity. Learning curve approximately 20-40 cases for proficiency.',
    'Robotic cardiac surgery requires a dedicated team (surgeon, anesthesiologist, perfusionist, PA) — outcomes plateau after the institutional learning curve of 20-40 cases.',
  ),

  // ===== ADDITIONAL ENTRIES TO REACH 32 ====================================

  'pericardectomy': ct(
    'pericardectomy', 'Pericardectomy', 'minimally-invasive-cardiac',
    'Surgical removal of the pericardium for constrictive pericarditis or recurrent pericardial effusion refractory to medical therapy.',
    ['Constrictive pericarditis (hemodynamically significant)', 'Recurrent pericardial effusion refractory to pericardiocentesis and medical therapy', 'Effusive-constrictive pericarditis', 'Chronic pericardial tamponade', 'Radiation-induced constrictive pericarditis'],
    'Median sternotomy (preferred for total pericardiectomy) or left anterolateral thoracotomy. Radical pericardiectomy: removal from phrenic nerve to phrenic nerve, including diaphragmatic pericardium. CPB standby (not routinely needed but available for hemorrhage or hemodynamic instability). Careful dissection of densely adherent calcified pericardium from epicardium. Start over the LV (most critical chamber) and progress to RV, then atria.',
    ['Low cardiac output syndrome (epicardial injury during dissection)', 'Bleeding (epicardial vessels, thin RV wall)', 'Phrenic nerve injury', 'Acute RV dilation after pericardial release', 'Incomplete hemodynamic improvement (myocardial atrophy)', 'Arrhythmias', 'Respiratory failure'],
    'Operative mortality 5-10% (higher in radiation-induced and post-surgical cases). Hemodynamic improvement in 80-90%, but may be gradual over months as myocardium recovers. 5-year survival 70-80%. Radiation-induced constriction has worse outcomes due to concurrent myocardial fibrosis.',
    'Begin pericardial stripping over the left ventricle first — if the patient decompensates, the most critical chamber has already been freed.',
  ),

  'pulmonary-thromboendarterectomy': ct(
    'pulmonary-thromboendarterectomy', 'Pulmonary Thromboendarterectomy (PTE)', 'mechanical-support',
    'Surgical removal of organized thromboembolic material from the pulmonary arteries for chronic thromboembolic pulmonary hypertension (CTEPH).',
    ['CTEPH (WHO Group 4 pulmonary hypertension) with surgically accessible disease', 'Mean PAP >25 mmHg with V/Q mismatch despite 3+ months of anticoagulation', 'PVR >300 dynes/s/cm-5', 'New York Heart Association class II-IV symptoms', 'Central or lobar thromboembolic disease on CT/angiography'],
    'Median sternotomy, CPB with deep hypothermic circulatory arrest (18-20C) in 20-minute intervals. Bilateral pulmonary arteriotomies. True endarterectomy plane developed between organized thrombus and native intima — this is not a simple thrombectomy. Dissection extended into segmental and subsegmental arteries. Complete bilateral clearance is essential. DHCA provides bloodless field for distal dissection.',
    ['Reperfusion pulmonary edema (10-15%)', 'Residual pulmonary hypertension (10-20%)', 'Bleeding', 'Neurologic complications from DHCA', 'RV failure', 'Mortality 2-5% in expert centers', 'Airway bleeding (bronchial circulation)'],
    'Expert center mortality 2-5%. Dramatic hemodynamic improvement: mean PAP decreases by 50%, PVR normalizes in 60-70%. Marked improvement in functional class and exercise capacity. Only curative treatment for CTEPH.',
    'PTE is an endarterectomy, not an embolectomy — the correct dissection plane must be established for complete removal of organized fibrotic material.',
  ),

};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getCardiothoracicEntry(id: string): CardiothoracicEntry | undefined {
  return CARDIOTHORACIC_ENTRIES[id];
}

export function searchCardiothoracic(query: string): CardiothoracicEntry[] {
  const q = query.toLowerCase();
  return Object.values(CARDIOTHORACIC_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.indications.some(i => i.toLowerCase().includes(q)) ||
    e.technique.toLowerCase().includes(q) ||
    e.complications.some(c => c.toLowerCase().includes(q)) ||
    e.keyPearl.toLowerCase().includes(q),
  );
}

export function getCardiothoracicByCategory(cat: CardiothoracicCategory): CardiothoracicEntry[] {
  return Object.values(CARDIOTHORACIC_ENTRIES).filter(e => e.category === cat);
}

export function getCardiothoracicCount(): number {
  return Object.keys(CARDIOTHORACIC_ENTRIES).length;
}
