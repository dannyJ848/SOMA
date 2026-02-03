/**
 * Biological Self — Neurosurgery Specialty Database
 * 32 entries covering cranial oncology, cerebrovascular, spine, functional,
 * pediatric neurosurgery, peripheral nerve, trauma, and neuro-critical-care.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type NeurosurgeryCategory =
  | 'cranial-oncology' | 'cerebrovascular' | 'spine' | 'functional'
  | 'pediatric-neurosurgery' | 'peripheral-nerve' | 'trauma' | 'neuro-critical-care';

export interface NeurosurgeryEntry {
  id: string;
  name: string;
  category: NeurosurgeryCategory;
  description: string;
  indications: string[];
  technique: string;
  risks: string[];
  outcomes: string;
  keyPearl: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const ns = (
  id: string, name: string, category: NeurosurgeryCategory,
  description: string, indications: string[], technique: string,
  risks: string[], outcomes: string, keyPearl: string,
): NeurosurgeryEntry => ({
  id, name, category, description, indications, technique, risks, outcomes, keyPearl,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const NEUROSURGERY_ENTRIES: Record<string, NeurosurgeryEntry> = {

  // ===== CRANIAL ONCOLOGY (5) ================================================

  'craniotomy-tumor': ns(
    'craniotomy-tumor', 'Craniotomy for Tumor Resection', 'cranial-oncology',
    'Open surgical approach involving removal of a bone flap to access and resect intracranial neoplasms while preserving neurological function.',
    ['Primary brain tumors (gliomas, meningiomas, metastases)', 'Symptomatic mass effect or raised ICP', 'Tissue diagnosis needed for treatment planning', 'Seizures refractory to medical management', 'Progressive neurological deficit from tumor growth'],
    'Patient positioned based on tumor location (supine, lateral, prone, or park-bench). Neuronavigation registered to preoperative MRI. Scalp incision planned to expose adequate bone. Craniotomy performed with high-speed drill and craniotome. Dura opened in cruciate or curvilinear fashion. Microsurgical tumor resection under operating microscope with intraoperative ultrasound or fluorescence (5-ALA) guidance. Meticulous hemostasis, watertight dural closure (with graft if needed), bone flap replaced and secured with titanium plates.',
    ['Hemorrhage (intraoperative or postoperative hematoma)', 'Neurological deficit (motor, speech, vision depending on location)', 'Infection (wound, meningitis, abscess)', 'CSF leak', 'Seizures', 'Venous thromboembolism', 'Brain edema'],
    'Extent of resection correlates with survival in gliomas and metastases. Gross total resection achievable in >90% of meningiomas (Simpson Grade I-II). Perioperative mortality <2% at high-volume centers.',
    'Maximal safe resection balances oncological benefit with functional preservation — use intraoperative mapping and fluorescence guidance to push boundaries safely.',
  ),

  'glioblastoma-resection': ns(
    'glioblastoma-resection', 'Glioblastoma Resection', 'cranial-oncology',
    'Surgical debulking of WHO grade 4 glioblastoma (GBM), the most common and aggressive primary malignant brain tumor in adults.',
    ['Newly diagnosed GBM with surgically accessible tumor', 'Recurrent GBM with favorable performance status (KPS >60)', 'Mass effect causing neurological deterioration', 'Need for tissue to confirm molecular markers (MGMT, IDH)', 'Reduction of tumor burden prior to chemoradiation'],
    'Awake or asleep craniotomy based on tumor proximity to eloquent cortex. 5-ALA fluorescence-guided resection highlights tumor margins (fluoresces pink-violet under blue light). Intraoperative MRI at select centers to assess extent of resection in real time. Cavity-lining with carmustine wafers (Gliadel) in select cases. Supramarginal resection of FLAIR abnormality improves outcomes when safe.',
    ['New or worsened neurological deficit (15-20%)', 'Postoperative hemorrhage into resection cavity', 'Cerebral edema requiring prolonged steroids', 'Wound infection or meningitis', 'DVT/PE (GBM is highly prothrombotic)', 'Seizures'],
    'Median survival with maximal resection + Stupp protocol (temozolomide + RT): 14-16 months. Extent of resection >98% of enhancing tumor associated with improved OS. MGMT methylation strongest prognostic factor.',
    '5-ALA fluorescence transforms GBM surgery — complete resection of enhancing tumor doubles when fluorescence guidance is used vs. conventional white light.',
  ),

  'meningioma-resection': ns(
    'meningioma-resection', 'Meningioma Resection', 'cranial-oncology',
    'Surgical excision of meningiomas, the most common primary intracranial tumor; typically benign (WHO grade 1) and potentially curable with complete resection.',
    ['Symptomatic meningioma (seizures, focal deficit, headache)', 'Growing tumor on serial imaging', 'Significant peritumoral edema', 'Large tumor (>3 cm) even if asymptomatic', 'WHO grade 2/3 (atypical/anaplastic) requiring aggressive resection'],
    'Preoperative embolization of feeding vessels (middle meningeal artery) considered for large or vascular tumors. Craniotomy centered over tumor. Early devascularization by cauterizing dural base. Internal debulking followed by extracapsular dissection. Involved dura and bone excised when possible (Simpson Grade I). Skull base meningiomas may require combined approaches (subfrontal, pterional, retrosigmoid) and cranial nerve preservation under monitoring.',
    ['Cranial nerve injury (especially skull base: III, IV, V, VI, VII)', 'Venous sinus injury or thrombosis (parasagittal tumors)', 'CSF leak (especially anterior skull base)', 'Stroke from vascular injury', 'Recurrence (7-20% for Grade I at 10 years)', 'Seizures'],
    'Simpson Grade I resection (complete tumor + dura + bone) achieves <10% recurrence at 10 years for WHO grade 1. WHO grade 2 recurrence ~40% at 5 years even with GTR. Adjuvant RT for subtotal resection or higher grades.',
    'Simpson grade matters — resecting involved dura and hyperostotic bone converts a "good" resection into a curative one for benign meningiomas.',
  ),

  'pituitary-surgery': ns(
    'pituitary-surgery', 'Pituitary Surgery (Transsphenoidal Approach)', 'cranial-oncology',
    'Endoscopic or microscopic transsphenoidal approach for resection of pituitary adenomas and other sellar/parasellar lesions.',
    ['Functioning adenoma (prolactinoma resistant to dopamine agonists, Cushing disease, acromegaly)', 'Non-functioning adenoma with visual compromise (chiasmal compression)', 'Pituitary apoplexy with visual loss or altered consciousness', 'Rathke cleft cyst or craniopharyngioma', 'Tissue diagnosis for indeterminate sellar mass'],
    'Endoscopic endonasal approach is current standard. Nasal mucosa elevated, posterior septectomy, anterior sphenoidotomy performed. Sellar floor opened with drill. Dura incised and tumor removed with ring curettes and suction under endoscopic visualization. Extended approaches allow access to suprasellar, cavernous sinus, and clival lesions. Closure with fat graft, fascia lata, nasoseptal flap (Hadad-Bassagasteguy), and tissue sealant to prevent CSF leak.',
    ['CSF leak (2-5%, higher in extended approaches)', 'Diabetes insipidus (transient 10-20%, permanent 1-3%)', 'Hypopituitarism (new deficiency in 5-10%)', 'Carotid artery injury (rare, <1%, but catastrophic)', 'Epistaxis', 'Meningitis', 'Vision worsening'],
    'Gross total resection in 80-90% of microadenomas. Endocrine remission in Cushing disease: 70-90% for microadenomas. Visual improvement in >80% with chiasmal decompression. Recurrence rate 10-20% for non-functioning macroadenomas at 10 years.',
    'The nasoseptal flap revolutionized skull base reconstruction — vascularized mucosal coverage dropped CSF leak rates from >20% to <5% in extended approaches.',
  ),

  'awake-craniotomy': ns(
    'awake-craniotomy', 'Awake Craniotomy', 'cranial-oncology',
    'Surgical procedure performed with the patient awake during cortical mapping and tumor resection to maximize resection near eloquent cortex while preserving function.',
    ['Tumor adjacent to or within eloquent cortex (speech, motor, language)', 'Low-grade gliomas in functional areas', 'Recurrent gliomas near previously mapped cortex', 'Need to define functional boundaries intraoperatively', 'Patient able to cooperate (no severe anxiety, claustrophobia, or cognitive impairment)'],
    'Asleep-awake-asleep technique most common. Scalp block with local anesthetic. Patient awakened after craniotomy. Bipolar cortical stimulation (Penfield technique) maps motor cortex (involuntary movement) and language areas (speech arrest, anomia, paraphasic errors). Tumor resection proceeds with continuous neurological testing. Subcortical stimulation identifies white matter tracts (corticospinal tract, arcuate fasciculus). Positive mapping sites marked and preserved with 1 cm margin.',
    ['Intraoperative seizure (10-15%, usually controlled with cold irrigation)', 'New neurological deficit (transient 15-20%, permanent 3-5%)', 'Patient anxiety or loss of cooperation', 'Nausea or brain swelling (tight brain)', 'Failure to complete awake phase requiring conversion to general anesthesia'],
    'Awake craniotomy with mapping increases extent of resection by 15-20% compared to resection under general anesthesia for tumors near eloquent cortex. Permanent deficit rate <5% at experienced centers.',
    'If subcortical stimulation elicits a response at <5 mm from the resection cavity wall, STOP — you are at the functional boundary of a critical white matter tract.',
  ),

  // ===== CEREBROVASCULAR (5) =================================================

  'aneurysm-clipping': ns(
    'aneurysm-clipping', 'Cerebral Aneurysm Clipping', 'cerebrovascular',
    'Microsurgical placement of a titanium clip across the neck of an intracranial aneurysm to exclude it from circulation, preventing rupture or re-rupture.',
    ['Ruptured aneurysm (subarachnoid hemorrhage)', 'Unruptured aneurysm >7 mm or with risk factors (family history, morphology)', 'Aneurysm morphology unfavorable for coiling (wide neck, branch incorporation)', 'Young patient (durable long-term exclusion)', 'Failed endovascular treatment'],
    'Pterional (frontotemporal) craniotomy for anterior circulation aneurysms; subtemporal or retrosigmoid for posterior circulation. Sylvian fissure dissection exposes Circle of Willis. Proximal and distal vascular control obtained before clip application. Temporary clips used for proximal control during dissection. Permanent clip placed across aneurysm neck under microscope. Intraoperative ICG videoangiography or micro-Doppler confirms parent vessel patency and aneurysm exclusion. Papaverine applied for vasospasm.',
    ['Intraoperative rupture (5-10%)', 'Stroke from parent vessel occlusion or perforator injury', 'Cranial nerve palsy (especially CN III for PComm aneurysms)', 'Vasospasm (in SAH patients, peak days 4-14)', 'Clip slippage or residual aneurysm', 'Seizures', 'Hydrocephalus'],
    'Complete aneurysm obliteration in >90% with experienced surgeon. Annual re-rupture rate <1% after complete clipping. In SAH, clinical outcome correlates with admission Hunt-Hess grade: Grade I-II, 70-80% good outcome; Grade IV-V, <30% good outcome.',
    'Temporary clipping time matters — keep under 5-7 minutes per application and use burst suppression (EEG) for brain protection during prolonged temporary occlusion.',
  ),

  'avm-resection': ns(
    'avm-resection', 'Arteriovenous Malformation (AVM) Resection', 'cerebrovascular',
    'Microsurgical excision of brain arteriovenous malformations — direct connections between arteries and veins without an intervening capillary bed.',
    ['Ruptured AVM (hemorrhage)', 'Spetzler-Martin Grade I-III (favorable surgical anatomy)', 'Seizures refractory to medical management', 'Progressive neurological deficit from steal phenomenon', 'Young patient with high lifetime rupture risk'],
    'Craniotomy over the AVM nidus. Circumferential dissection of nidus from brain parenchyma. Arterial feeders identified and coagulated/clipped first — critically, draining veins preserved until ALL feeders divided (premature venous occlusion causes catastrophic nidus engorgement and hemorrhage). Final step: divide draining veins and remove nidus en bloc. Preoperative embolization of deep feeders reduces intraoperative bleeding. Intraoperative angiography confirms complete resection.',
    ['Intraoperative hemorrhage (premature venous drainage occlusion)', 'Normal perfusion pressure breakthrough (edema/hemorrhage after AVM removal)', 'Stroke from perforator injury', 'New neurological deficit', 'Residual AVM on postoperative angiography', 'Seizures'],
    'Spetzler-Martin Grade I-II: excellent surgical outcomes (>95% cure, <5% morbidity). Grade III: individualized. Grade IV-V: generally not surgically resected (observe or radiosurgery). ARUBA trial applies to unruptured AVMs only.',
    'Never sacrifice a draining vein until all arterial feeders are disconnected — violating this principle is the single most common cause of catastrophic intraoperative AVM hemorrhage.',
  ),

  'carotid-endarterectomy': ns(
    'carotid-endarterectomy', 'Carotid Endarterectomy (CEA)', 'cerebrovascular',
    'Surgical removal of atherosclerotic plaque from the internal carotid artery to prevent stroke in patients with significant carotid stenosis.',
    ['Symptomatic carotid stenosis >50% (NASCET criteria)', 'Asymptomatic stenosis >60-70% in select patients (low surgical risk)', 'Recurrent TIAs despite antiplatelet therapy', 'Crescendo TIAs or stroke-in-evolution', 'Ulcerated plaque with stenosis'],
    'Longitudinal neck incision along anterior border of SCM. Carotid sheath opened, common/internal/external carotid arteries isolated. Systemic heparinization. Carotid artery clamped (ICA, ECA, CCA). Shunt placed if EEG/stump pressure indicates inadequate collateral flow. Arteriotomy from CCA into ICA. Atheromatous plaque dissected in subadventitial plane. Plaque removed with endpoint feathered distally. Arteriotomy closed primarily or with patch angioplasty (Dacron or bovine pericardium). Patch closure reduces restenosis.',
    ['Stroke (perioperative 2-3%)', 'Cranial nerve injury (hypoglossal, vagus, marginal mandibular — 5-8%)', 'Wound hematoma with airway compromise', 'Hyperperfusion syndrome (headache, seizures, ICH)', 'Myocardial infarction', 'Restenosis'],
    'NASCET: CEA reduced 2-year stroke risk from 26% to 9% for symptomatic stenosis >70%. Perioperative stroke/death rate must be <6% (symptomatic) or <3% (asymptomatic) for benefit. Stroke risk reduction durable at 10+ years.',
    'Hyperperfusion syndrome typically occurs days 3-7 post-CEA — strict blood pressure control (SBP <140) in the first week is essential to prevent intracerebral hemorrhage.',
  ),

  'decompressive-craniectomy': ns(
    'decompressive-craniectomy', 'Decompressive Craniectomy', 'cerebrovascular',
    'Removal of a large bone flap without replacement to allow swollen brain to expand externally, reducing intracranial pressure in life-threatening cerebral edema.',
    ['Malignant MCA infarction (within 48h, age <60 strongest evidence)', 'Refractory elevated ICP after traumatic brain injury', 'Severe subarachnoid hemorrhage with refractory intracranial hypertension', 'Encephalitis with mass effect', 'Venous sinus thrombosis with hemorrhagic infarction and herniation'],
    'Large fronto-temporo-parietal craniectomy (at least 12x15 cm, ideally 15x15 cm) — small craniectomies cause cortical herniation through the defect. Temporal bone removed flush to middle fossa floor. Dura opened widely in stellate fashion and dural augmentation performed with dural substitute. Bone flap stored in abdominal subcutaneous pocket or bone bank at -80C. Cranioplasty performed 6-12 weeks later after edema resolves.',
    ['Herniation through craniectomy edges (if bone window too small)', 'External brain fungus (brain swelling beyond bone margin)', 'Subdural hygroma or hydrocephalus', 'Syndrome of the trephined (neurological decline before cranioplasty)', 'Infection', 'Seizures', 'Contralateral epidural hematoma'],
    'DECIMAL/DESTINY/HAMLET trials: decompressive craniectomy for malignant MCA infarction (age <60) reduces mortality from 78% to 29% and doubles favorable outcome (mRS 0-3). RESCUE-ICP: reduces mortality in TBI but increases vegetative survival.',
    'Size matters — a craniectomy less than 12 cm in diameter causes MORE harm from edge herniation. Go big or do not do it.',
  ),

  'stereotactic-radiosurgery': ns(
    'stereotactic-radiosurgery', 'Stereotactic Radiosurgery (Gamma Knife / SRS)', 'cerebrovascular',
    'Non-invasive delivery of a single high dose of focused radiation to a precise intracranial target using stereotactic frame or frameless guidance.',
    ['Brain metastases (1-10 lesions, <3 cm)', 'Small to medium AVMs (Spetzler-Martin Grade I-III, <3 cm nidus)', 'Vestibular schwannoma (especially with serviceable hearing)', 'Residual or recurrent meningioma after surgery', 'Trigeminal neuralgia refractory to medical therapy', 'Pituitary adenoma residual/recurrent'],
    'Frame-based (Gamma Knife): Leksell stereotactic frame affixed to skull under local anesthesia. High-resolution MRI with frame in place for planning. 192 cobalt-60 sources focused to deliver high dose to target with rapid dose fall-off. Frameless (CyberKnife, LINAC-based): fiducial or image-guided tracking. Single fraction for most lesions; hypofractionated SRS (3-5 fractions) for larger targets or those near optic apparatus. Typical margin dose: 12-25 Gy depending on target.',
    ['Radiation necrosis (5-15%, higher for larger lesions)', 'Cerebral edema (perilesional, may require steroids)', 'Cranial neuropathy (hearing loss in schwannoma, visual loss near optic apparatus)', 'Radiation-induced tumor (rare, <1% at 10 years)', 'Hemorrhage from AVM before obliteration (latency period 2-3 years)'],
    'Brain metastases: local control 80-90% at 1 year. AVM obliteration: 70-80% at 3 years for small AVMs. Vestibular schwannoma: 95% tumor control, 50-70% hearing preservation. Trigeminal neuralgia: 70-80% initial pain relief.',
    'For AVMs, the patient remains at risk of hemorrhage during the 2-3 year obliteration latency period — this must be clearly communicated during consent.',
  ),

  // ===== SPINE (7) ===========================================================

  'cervical-fusion': ns(
    'cervical-fusion', 'Cervical Spinal Fusion (ACDF / Posterior)', 'spine',
    'Surgical stabilization and decompression of the cervical spine via anterior (ACDF, corpectomy) or posterior (laminectomy with lateral mass/pedicle screws) approaches.',
    ['Cervical radiculopathy failing 6-12 weeks conservative treatment', 'Cervical myelopathy (spinal cord compression with upper motor neuron signs)', 'Cervical instability (trauma, rheumatoid subluxation)', 'Cervical disc herniation with progressive neurological deficit', 'Ossification of posterior longitudinal ligament (OPLL)'],
    'ACDF: anterior cervical incision (usually left-sided), platysma divided, dissection medial to SCM and carotid sheath, lateral to esophagus/trachea. Disc removed, endplates prepared, neural foramen decompressed. Interbody cage or structural allograft placed. Anterior plate fixation. Posterior: midline incision, subperiosteal dissection. Laminectomy or laminoplasty for decompression. Lateral mass screws (C3-C6) or pedicle screws (C2, C7) with rod fixation for fusion.',
    ['Dysphagia (ACDF, 2-10% transient, <2% persistent)', 'Recurrent laryngeal nerve injury (hoarseness)', 'Esophageal injury (rare but serious)', 'Vertebral artery injury', 'C5 palsy (posterior approach, 5-10%)', 'Adjacent segment disease (2.9%/year)', 'Pseudarthrosis (nonunion)', 'Spinal cord injury'],
    'ACDF: >90% improvement in radiculopathy, 70-80% improvement in myelopathy symptoms. Fusion rate >95% for single-level ACDF. Myelopathy outcomes better when surgery performed before severe cord signal changes on MRI.',
    'In cervical myelopathy, timing is everything — MRI T2 signal change (myelomalacia) indicates cord damage that may not reverse; operate before this point for best outcomes.',
  ),

  'lumbar-fusion': ns(
    'lumbar-fusion', 'Lumbar Spinal Fusion (PLIF/TLIF/ALIF)', 'spine',
    'Surgical stabilization of the lumbar spine with interbody fusion and pedicle screw instrumentation to treat instability, spondylolisthesis, and degenerative disc disease.',
    ['Spondylolisthesis (degenerative or isthmic, Grade I-II symptomatic)', 'Recurrent disc herniation with instability', 'Degenerative disc disease with mechanical back pain failing conservative therapy (>6 months)', 'Lumbar stenosis with instability', 'Post-laminectomy instability', 'Deformity correction (scoliosis, kyphosis)'],
    'TLIF (most common): posterior midline incision, pedicle screw insertion. Unilateral facetectomy, disc space entered and prepared. Interbody cage (PEEK or titanium) packed with bone graft placed. PLIF: bilateral approach to disc. ALIF: anterior retroperitoneal approach for L4-S1 (vascular surgeon assists for vessel mobilization). MIS-TLIF via tubular retractor reduces tissue disruption. Bone graft options: autograft (iliac crest gold standard), BMP, allograft.',
    ['Pseudarthrosis (nonunion, 5-15%)', 'Adjacent segment disease (2-4%/year)', 'Nerve root injury (radiculopathy)', 'Dural tear and CSF leak', 'Hardware malposition or failure', 'Infection (2-5%)', 'Great vessel injury (ALIF, <1% but catastrophic)', 'Retrograde ejaculation (ALIF, 2-5%)'],
    'Spondylolisthesis fusion: 80-90% patient satisfaction. Fusion rates with instrumentation: >90%. MIS-TLIF shows equivalent fusion rates with less blood loss and shorter hospital stay. Adjacent segment disease may require future surgery in 15-30% at 10 years.',
    'For isthmic spondylolisthesis, direct pars repair (Buck screw or hook construct) in young patients preserves motion segments and avoids the cascade of adjacent segment disease.',
  ),

  'laminectomy': ns(
    'laminectomy', 'Laminectomy (Lumbar Decompression)', 'spine',
    'Removal of the lamina and ligamentum flavum to decompress the spinal canal in lumbar spinal stenosis, the most common indication for spine surgery in patients over 65.',
    ['Neurogenic claudication (leg pain with walking, relieved by sitting/flexion)', 'Lumbar spinal stenosis on imaging correlating with symptoms', 'Failure of conservative management (6+ months PT, injections)', 'Progressive neurological deficit (foot drop)', 'Cauda equina syndrome (emergency)'],
    'Prone positioning on Wilson frame or Jackson table (flexion opens laminar space). Midline posterior incision. Subperiosteal muscle dissection. Spinous process and lamina removed with Kerrison rongeurs and high-speed burr. Ligamentum flavum excised. Lateral recess and foramen decompressed. Preserve at least 50% of facet joint to avoid instability. Bilateral decompression via unilateral approach (minimally invasive) reduces muscle disruption. Laminotomy (partial lamina removal) for single-level stenosis.',
    ['Post-laminectomy instability (if >50% facet joint removed)', 'Dural tear and CSF leak (5-10%)', 'Epidural hematoma', 'Recurrent stenosis from scar tissue', 'Nerve root injury', 'Infection (1-3%)', 'Worsening back pain from destabilization'],
    'SPORT trial: surgery superior to conservative treatment for lumbar stenosis at 2 and 4 years for pain, function, and satisfaction. 70-80% significant improvement in walking capacity. ~20% require additional surgery within 10 years.',
    'Preserve the facet joints — removing more than 50% bilaterally creates iatrogenic instability requiring fusion. The lateral recess is the bottleneck, not the central canal.',
  ),

  'discectomy': ns(
    'discectomy', 'Lumbar Microdiscectomy', 'spine',
    'Minimally invasive removal of herniated disc fragment compressing a nerve root, the most common spine surgery performed worldwide.',
    ['Lumbar radiculopathy from disc herniation with concordant MRI findings', 'Failure of 6-12 weeks conservative management', 'Progressive motor deficit (foot drop)', 'Cauda equina syndrome (emergency — within 48 hours)', 'Intractable sciatica significantly affecting quality of life'],
    'Prone position. Small (2-3 cm) paramedian incision centered on disc level using fluoroscopic guidance. Muscle split via tubular retractor (MIS technique) or subperiosteal dissection. Partial laminotomy and ligamentum flavum removed to expose nerve root. Nerve root gently retracted. Herniated disc fragment identified and removed with pituitary rongeur. Additional loose disc fragments removed from within disc space. Annular defect noted but not repaired (annular closure devices experimental).',
    ['Recurrent disc herniation (5-10% at 5 years)', 'Dural tear (1-3%)', 'Nerve root injury (rare, <1%)', 'Discitis or wound infection (1%)', 'Wrong-level surgery (preventable with fluoroscopy)', 'Epidural hematoma', 'Chronic back pain'],
    'SPORT trial: surgery provides faster pain relief; at 4 years both surgical and conservative groups improve significantly. 85-95% of patients report good-to-excellent relief of leg pain. Recurrence rate 5-10% at 5 years.',
    'Cauda equina syndrome is a true surgical emergency — delay beyond 48 hours significantly increases permanent bowel/bladder dysfunction. When in doubt, scan and decompress.',
  ),

  'spinal-cord-tumor': ns(
    'spinal-cord-tumor', 'Spinal Cord Tumor Resection', 'spine',
    'Microsurgical excision of intramedullary, intradural-extramedullary, or extradural spinal tumors with intraoperative neurophysiological monitoring.',
    ['Intradural-extramedullary tumors (schwannoma, meningioma — most surgically favorable)', 'Intramedullary tumors (ependymoma, hemangioblastoma — well-circumscribed, resectable)', 'Progressive myelopathy or radiculopathy from tumor compression', 'Spinal cord compression with neurological deterioration', 'Tissue diagnosis needed for treatment planning'],
    'Posterior approach via laminectomy or laminoplasty. Dura opened in midline (intradural tumors). For extramedullary tumors: tumor mobilized away from cord, feeding vessels cauterized, en bloc removal. For intramedullary: midline myelotomy, tumor-cord interface developed with microsurgical technique. CUSA (cavitron ultrasonic aspirator) for internal debulking. Continuous SSEP and MEP monitoring — >50% MEP amplitude decline triggers pause. Ependymomas have a clear cleavage plane; astrocytomas often do not.',
    ['Neurological deterioration (worsened myelopathy)', 'CSF leak and pseudomeningocele', 'Spinal instability (multilevel laminectomy)', 'Wound infection', 'Postoperative spinal deformity (kyphosis, especially in children)', 'Recurrence'],
    'Gross total resection achievable in 90-100% of spinal schwannomas and meningiomas with excellent outcomes. Ependymomas: GTR in 50-70% with favorable neurological outcomes. Astrocytomas: often only biopsy/debulking due to infiltrative nature.',
    'Intraoperative MEP monitoring is the guardian angel — a sustained 50% drop in MEP amplitude during intramedullary tumor resection means stop and reassess before permanent damage occurs.',
  ),

  'spinal-cord-stimulator': ns(
    'spinal-cord-stimulator', 'Spinal Cord Stimulator Implantation', 'spine',
    'Implantation of epidural electrodes delivering electrical impulses to the spinal cord dorsal columns to modulate chronic pain signaling.',
    ['Failed back surgery syndrome (most common indication)', 'Complex regional pain syndrome (CRPS)', 'Chronic radiculopathy not amenable to further surgery', 'Peripheral neuropathy (diabetic)', 'Refractory angina pectoris', 'Peripheral vascular disease with limb ischemia pain'],
    'Two-phase process. Trial phase: percutaneous cylindrical leads placed in epidural space under fluoroscopy, typically at T8-T10 for low back/leg pain. External generator worn for 5-7 days. If >50% pain reduction, proceed to permanent implant. Permanent: paddle leads (laminotomy) or percutaneous leads, tunneled to implantable pulse generator (IPG) in gluteal or abdominal pocket. Programming: traditional tonic stimulation, burst stimulation, high-frequency (10 kHz HF10), or dorsal root ganglion (DRG) stimulation.',
    ['Lead migration (10-15%, most common complication)', 'Infection (3-5%)', 'Hardware malfunction or fracture', 'Inadequate pain relief or loss of efficacy over time', 'Epidural hematoma (rare)', 'Dural puncture', 'Painful IPG pocket'],
    'PROCESS trial: SCS + CMM superior to CMM alone for FBSS at 2 years (47% vs 7% achieving >50% pain relief). HF10 therapy showed superiority over traditional SCS for back pain. DRG stimulation superior for CRPS. 60-70% of trialed patients proceed to permanent implant.',
    'The trial period is the most important step — never skip it. A successful trial (>50% relief) is the strongest predictor of long-term SCS success.',
  ),

  'chiari-decompression': ns(
    'chiari-decompression', 'Chiari Malformation Decompression', 'spine',
    'Posterior fossa decompression for Chiari I malformation (cerebellar tonsillar herniation >5 mm below foramen magnum) to restore CSF flow dynamics.',
    ['Symptomatic Chiari I (occipital headache worsened by Valsalva, cough)', 'Associated syringomyelia', 'Progressive neurological symptoms (sensory changes, weakness, ataxia)', 'Sleep apnea attributed to brainstem compression', 'Cranial nerve dysfunction (dysphagia, hoarseness)'],
    'Prone position with head in Mayfield clamp, neck flexed. Midline suboccipital incision. Suboccipital craniectomy (2.5-3 cm) exposing foramen magnum. C1 laminectomy (sometimes C2). Dura opened in Y-shape. Arachnoid preserved if possible (extradural-only approach favored in some centers). Tonsillar reduction with bipolar cautery if tonsils are bulky. Duraplasty with autologous pericranium or synthetic graft to expand posterior fossa. Intraoperative ultrasound confirms restored CSF flow.',
    ['CSF leak (5-10%)', 'Pseudomeningocele', 'Aseptic meningitis', 'Occipital neuralgia or wound pain', 'Infection', 'Cerebellar injury', 'Incomplete symptom relief', 'Need for revision surgery (10-15%)'],
    'Headache improvement in 80-90% of patients. Syrinx reduction or stabilization in 70-80%. Neurological deficits less likely to reverse if present >2 years. Pediatric outcomes generally superior to adult.',
    'The key surgical question is whether to open the dura (duraplasty) or decompress bone only — intraoperative ultrasound showing persistent tonsillar pulsation and CSF flow after bony decompression supports a bone-only approach.',
  ),

  // ===== FUNCTIONAL (4) ======================================================

  'deep-brain-stimulation': ns(
    'deep-brain-stimulation', 'Deep Brain Stimulation (DBS)', 'functional',
    'Implantation of electrodes into deep brain nuclei to modulate pathological neural circuit activity, primarily for movement disorders.',
    ['Parkinson disease with motor fluctuations or dyskinesia (most common)', 'Essential tremor refractory to medications', 'Primary generalized or segmental dystonia', 'Obsessive-compulsive disorder (humanitarian device exemption)', 'Treatment-resistant epilepsy (anterior nucleus of thalamus)'],
    'Stage 1: Stereotactic frame placed. High-resolution MRI fused with CT for target planning. Targets: STN or GPi for Parkinson disease, VIM thalamus for tremor, GPi for dystonia. Bilateral burr holes. Microelectrode recording (MER) maps target nucleus by characteristic neuronal firing patterns. Macrostimulation tests for benefit and side effects. DBS lead secured with miniplate. Stage 2 (same day or later): IPG (battery) implanted in subclavicular pocket, tunneled extensions connect leads to IPG. Directional leads and sensing-enabled IPGs (adaptive DBS) are latest innovations.',
    ['Intracranial hemorrhage (1-2% per lead)', 'Infection (3-5%, often hardware-related)', 'Lead migration or fracture', 'Stimulation side effects (dysarthria, paresthesia, mood changes)', 'Hardware malfunction', 'Seizure (rare)', 'Cognitive decline (especially bilateral STN in older patients)'],
    'Parkinson STN-DBS: 50-60% improvement in off-medication motor scores (UPDRS-III). Reduces levodopa dose by 50%. Tremor DBS (VIM): 80-90% tremor suppression. Dystonia GPi-DBS: 50-70% improvement (may take months to optimize). Battery life: 3-5 years (non-rechargeable) or 15+ years (rechargeable).',
    'Target selection in Parkinson disease matters — STN-DBS reduces medications but carries more cognitive/mood side effects; GPi-DBS is safer cognitively but does not reduce medication dose.',
  ),

  'epilepsy-surgery': ns(
    'epilepsy-surgery', 'Epilepsy Surgery', 'functional',
    'Resective or disconnective surgery for medically refractory epilepsy, aiming for seizure freedom when medications fail.',
    ['Drug-resistant epilepsy (failed adequate trials of 2+ AEDs)', 'Identifiable seizure focus on presurgical evaluation', 'Mesial temporal sclerosis (best surgical epilepsy candidate)', 'Focal cortical dysplasia or low-grade tumor causing seizures', 'Hemispheric syndromes in children (Rasmussen, Sturge-Weber)'],
    'Comprehensive presurgical evaluation: video-EEG, MRI (epilepsy protocol), PET, neuropsychological testing, Wada test (for language/memory lateralization). Invasive monitoring with stereo-EEG (SEEG) or subdural grids if non-invasive data discordant. Anterior temporal lobectomy (ATL) for mesial temporal epilepsy: amygdala, hippocampus, and parahippocampal gyrus resected. Lesionectomy for focal lesions. Disconnection procedures: corpus callosotomy, functional hemispherectomy. Newer: LITT (laser interstitial thermal therapy) for MRI-guided ablation of seizure focus.',
    ['Memory decline (especially dominant temporal resection)', 'Visual field deficit (superior quadrantanopia from Meyer loop — "pie in the sky")', 'Language deficit (dominant hemisphere)', 'Stroke or hemorrhage', 'Infection', 'Failure to achieve seizure freedom', 'Psychiatric complications (depression, psychosis)'],
    'Anterior temporal lobectomy: 60-80% seizure freedom (Engel Class I) at 2 years (strongest evidence in epilepsy surgery). MTS with concordant data: up to 80% seizure free. Non-lesional extratemporal epilepsy: 40-50% seizure free. LITT outcomes approaching open surgery for select cases.',
    'Mesial temporal sclerosis with concordant video-EEG, MRI, and PET is the single best surgical epilepsy scenario — do not let these patients languish on ineffective medication trials for years.',
  ),

  'baclofen-pump': ns(
    'baclofen-pump', 'Intrathecal Baclofen Pump Implantation', 'functional',
    'Implantation of a programmable pump delivering baclofen directly into the intrathecal space for severe spasticity management.',
    ['Severe spasticity from cerebral palsy, spinal cord injury, or multiple sclerosis', 'Spasticity refractory to oral medications (baclofen, tizanidine, dantrolene)', 'Intolerable side effects from oral antispasticity medications', 'Spasticity interfering with function, positioning, or hygiene', 'Positive response to intrathecal baclofen trial (test dose)'],
    'Trial phase: lumbar puncture with 50-100 mcg intrathecal baclofen bolus. Ashworth scale assessed at baseline and at 4-6 hours. Positive response: >1 point improvement in Ashworth score. Implantation: pump (SynchroMed II) placed in subcutaneous abdominal pocket. Catheter tunneled subcutaneously, inserted into intrathecal space via lumbar puncture needle, and advanced to thoracic level (T10-T12 for lower extremity, C5-T2 for upper extremity spasticity). Pump programmed for continuous or flex-dose infusion. Refills every 1-6 months via percutaneous reservoir access.',
    ['Catheter-related complications (kink, migration, disconnection — 15-25%)', 'Infection (5-10%)', 'CSF leak and postdural puncture headache', 'Baclofen overdose (respiratory depression, drowsiness, coma)', 'Baclofen withdrawal (abrupt discontinuation causes hyperthermia, seizures, rhabdomyolysis — potentially fatal)', 'Pump malfunction', 'Wound dehiscence (thin patients)'],
    'Ashworth score improvement of 2-3 points typical. 85-90% of trialed patients report significant spasticity reduction. Quality of life, ease of care, and pain significantly improved. Dose requirements typically increase over time.',
    'Baclofen withdrawal is a medical emergency that mimics malignant hyperthermia and neuroleptic malignant syndrome — every patient and caregiver must know to seek emergency care if pump alarms, spasticity returns suddenly, or fever develops.',
  ),

  'trigeminal-neuralgia-mvd': ns(
    'trigeminal-neuralgia-mvd', 'Microvascular Decompression for Trigeminal Neuralgia', 'functional',
    'Posterior fossa surgery to relieve neurovascular compression of the trigeminal nerve root entry zone, the only procedure addressing the underlying cause of classical trigeminal neuralgia.',
    ['Classical trigeminal neuralgia (Type 1: lancinating, shock-like) refractory to carbamazepine/oxcarbazepine', 'MRI showing neurovascular compression (SCA most common offender)', 'Patient fit for posterior fossa surgery', 'Preference for durable, medication-free outcome', 'Failure or recurrence after percutaneous procedures or radiosurgery'],
    'Retrosigmoid craniotomy (3 cm behind ear). Lateral decubitus or park-bench position. CSF released from cerebellopontine angle cistern. Trigeminal nerve identified at root entry zone. Offending vessel (usually SCA, sometimes AICA or vein) mobilized away from nerve. Teflon felt pledget interposed between vessel and nerve. Nerve root inspected 360 degrees for additional compression. Avoid excessive cerebellar retraction (risk of hearing loss, facial palsy). Watertight dural closure.',
    ['Hearing loss (1-2%)', 'Facial numbness (new, 2-5%)', 'Facial weakness (rare)', 'CSF leak (2-5%)', 'Aseptic meningitis', 'Cerebellar injury', 'Stroke (rare)', 'Recurrence (15-20% at 10 years)'],
    'Immediate pain relief in 90-95% of patients. Long-term pain-free rate: 70-80% at 10 years (best of any TN procedure). Type 1 TN (lancinating) responds better than Type 2 (constant). Presence of clear neurovascular compression on MRI predicts best outcome.',
    'The root entry zone is where CNS myelin transitions to PNS myelin — this is where the nerve is most vulnerable to compression and where you must look for the offending vessel.',
  ),

  // ===== PEDIATRIC NEUROSURGERY (3) ==========================================

  'vp-shunt': ns(
    'vp-shunt', 'Ventriculoperitoneal (VP) Shunt', 'pediatric-neurosurgery',
    'Implantation of a one-way valve system diverting CSF from the cerebral ventricles to the peritoneal cavity to treat hydrocephalus.',
    ['Obstructive hydrocephalus (aqueductal stenosis, tumor, Chiari)', 'Communicating hydrocephalus (post-hemorrhagic, post-meningitic)', 'Normal pressure hydrocephalus (triad: gait disturbance, dementia, incontinence)', 'Failed endoscopic third ventriculostomy', 'Myelomeningocele-associated hydrocephalus'],
    'Ventricular catheter placed via frontal (Kocher point) or occipital (Frazier point) burr hole into frontal horn of lateral ventricle, ideally with neuronavigation or ultrasound guidance. Programmable valve (Medtronic Strata, Codman Certas) connected with preset opening pressure. Distal catheter tunneled subcutaneously from scalp to abdomen. Peritoneal catheter inserted via minilaparotomy into peritoneal cavity. Alternative distal sites: atrium (VA shunt), pleura. Antibiotic-impregnated catheters reduce infection rate.',
    ['Shunt malfunction (obstruction — most common, 30-40% at 1 year in children)', 'Infection (5-10%, higher in neonates)', 'Over-drainage (slit ventricle syndrome, subdural hematomas)', 'Under-drainage (persistent hydrocephalus)', 'Catheter migration or disconnection', 'Abdominal complications (pseudocyst, perforation)', 'Seizures'],
    'Effective CSF diversion in >90%. Shunt revision rate: 30-40% within first year (pediatric), lower in adults. 5-year shunt survival: 50-60%. Programmable valves reduce over-drainage and revision rate. NPH: gait improves in 60-80%, cognition in 30-50%.',
    'Shunt infection presenting >2 months after surgery is almost always Staph epidermidis biofilm — treat with shunt externalization, IV vancomycin, and intrathecal antibiotics, then replace the entire system.',
  ),

  'evd-placement': ns(
    'evd-placement', 'External Ventricular Drain (EVD) Placement', 'pediatric-neurosurgery',
    'Bedside or OR insertion of a catheter into the lateral ventricle for emergency CSF drainage, ICP monitoring, and intrathecal medication delivery.',
    ['Acute hydrocephalus (SAH, intraventricular hemorrhage, meningitis)', 'ICP monitoring and management in traumatic brain injury', 'Temporizing measure before definitive CSF diversion', 'Intrathecal antibiotic or fibrinolytic administration', 'CSF sampling in ventriculitis'],
    'Kocher point: 11 cm posterior to nasion (or 1 cm anterior to coronal suture), 3 cm lateral to midline (mid-pupillary line), on non-dominant side when possible. Twist drill or burr hole through skull. Catheter directed toward medial canthus of ipsilateral eye in coronal plane and toward ipsilateral tragus in sagittal plane (targeting frontal horn, ipsilateral foramen of Monro). CSF flow confirms placement. Catheter secured, tunneled subcutaneously 5 cm from burr hole, connected to closed drainage system at prescribed height above tragus (typically 10-15 cm H2O).',
    ['Hemorrhage along catheter tract (5-7%)', 'Infection/ventriculitis (5-10%, increases with duration >5 days)', 'Catheter misplacement (10-20% freehand, <5% with navigation)', 'Over-drainage and ventricular collapse', 'Catheter occlusion by blood or debris', 'Pneumocephalus'],
    'Accurate freehand placement in 70-80% (improved with navigation). Infection rate: 1-2% per day, mitigated by antibiotic-impregnated catheters and tunneling. ICP monitoring allows targeted therapy (CPP optimization, osmotic therapy titration). EVD weaning trial predicts shunt dependence.',
    'Kocher point landmarks are sacred — placing the burr hole too lateral risks the motor strip, too posterior risks the coronal suture and superior sagittal sinus. Always confirm landmarks before drilling.',
  ),

  'myelomeningocele-repair': ns(
    'myelomeningocele-repair', 'Myelomeningocele Repair', 'pediatric-neurosurgery',
    'Surgical closure of open spinal neural tube defect, performed either prenatally (in utero) or within 24-72 hours of birth to prevent further neurological damage and infection.',
    ['Open myelomeningocele (neural placode exposed)', 'Prenatal repair (MOMS trial criteria: 19-25 weeks gestation, Chiari II malformation)', 'Postnatal repair within 24-72 hours of birth', 'Prevention of CSF leak, infection, and further cord tethering', 'All open neural tube defects require closure'],
    'Postnatal: placode (neural tissue) sharply dissected from surrounding skin. Placode rolled into a tube (reconstituting the spinal cord) and sutured. Dura closed (with graft if needed) as a watertight layer. Myofascial flaps mobilized for robust intermediate layer. Skin closed without tension (may require relaxing incisions or rotational flaps). Prenatal (MOMS): hysterotomy at 19-25 weeks, same layered closure over placode, uterine closure, cesarean delivery at 37 weeks. Fetoscopic approaches under investigation.',
    ['CSF leak and wound dehiscence', 'Hydrocephalus requiring VP shunt (80-90% postnatal, 40% prenatal — MOMS trial)', 'Tethered cord (long-term)', 'Chiari II malformation (associated in nearly all)', 'Infection (wound, meningitis)', 'Preterm delivery and uterine dehiscence (prenatal repair)', 'Neurological worsening'],
    'MOMS trial: prenatal repair reduced VP shunt rate from 82% to 40%, improved Chiari II malformation, and improved motor function at 30 months. Postnatal repair: prevents infection and further deterioration but does not reverse existing deficit. Neurological level determines functional outcome (L3 and above: wheelchair; L4-L5: community ambulation with braces; S1+: near-normal ambulation).',
    'The MOMS trial was a landmark — prenatal repair halved the need for shunting and improved motor function, but at the cost of preterm delivery risk. Patient selection and counseling are critical.',
  ),

  // ===== PERIPHERAL NERVE (3) ================================================

  'carpal-tunnel-release': ns(
    'carpal-tunnel-release', 'Carpal Tunnel Release', 'peripheral-nerve',
    'Division of the transverse carpal ligament (flexor retinaculum) to decompress the median nerve at the wrist, the most common peripheral nerve surgery.',
    ['Carpal tunnel syndrome failing conservative treatment (splinting, injections) for 3-6 months', 'Severe median nerve compression with thenar atrophy or constant numbness', 'Electrodiagnostic confirmation of median neuropathy at wrist', 'Acute carpal tunnel syndrome (fracture, hemorrhage)', 'Failed steroid injection with persistent symptoms'],
    'Open technique: 3-4 cm incision along thenar crease in line with ring finger ray. Palmar aponeurosis divided. Transverse carpal ligament (TCL) identified and divided longitudinally under direct vision, from distal wrist crease to superficial palmar arch. Median nerve inspected — neurolysis if scarred. Endoscopic technique (Chow or Agee): single or dual portal, camera inserted beneath TCL, ligament divided from undersurface. Tourniquet (arm or forearm) for bloodless field. Local or regional anesthesia (wide-awake local anesthesia, WALANT, increasingly popular).',
    ['Pillar pain (tenderness at thenar/hypothenar eminence, most common, resolves)', 'Incomplete release (persistent symptoms)', 'Median nerve or palmar cutaneous branch injury (rare)', 'Superficial palmar arch injury', 'Wound infection', 'Grip weakness (transient)', 'Complex regional pain syndrome (rare)'],
    '90-95% symptom improvement. Nocturnal symptoms resolve first (often within days). Numbness recovery depends on severity and duration (mild: weeks; severe with atrophy: months, may be incomplete). Endoscopic: faster return to work (2 vs 4 weeks) but equivalent long-term outcomes. Thenar atrophy recovery is incomplete if longstanding.',
    'Thenar atrophy signals severe, chronic compression — early surgery yields best results. Once motor axons degenerate, muscle recovery is limited even after successful decompression.',
  ),

  'ulnar-nerve-transposition': ns(
    'ulnar-nerve-transposition', 'Ulnar Nerve Transposition / Decompression', 'peripheral-nerve',
    'Surgical decompression or anterior transposition of the ulnar nerve at the elbow (cubital tunnel) to relieve chronic compression neuropathy.',
    ['Cubital tunnel syndrome failing 3 months conservative treatment', 'Progressive hand weakness or intrinsic muscle atrophy', 'Positive electrodiagnostic studies with ulnar neuropathy at elbow', 'Subluxating ulnar nerve over medial epicondyle', 'Clawing of ring and small fingers (advanced disease)'],
    'Simple decompression (in situ): incision posterior to medial epicondyle. Ulnar nerve identified proximally and traced through cubital tunnel. Osborne ligament (roof of cubital tunnel) divided. Arcade of Struthers released proximally. FCU fascia released distally. Nerve freed without transposition. Anterior transposition (subcutaneous, intramuscular, or submuscular): nerve moved anterior to medial epicondyle to eliminate traction with elbow flexion. Submuscular transposition: flexor-pronator mass detached, nerve placed beneath muscle, mass reattached. Medial epicondylectomy: alternative to transposition.',
    ['Medial antebrachial cutaneous nerve injury (numbness of medial forearm)', 'Recurrent compression or subluxation', 'Elbow stiffness', 'Wound infection or hematoma', 'Failure to improve (especially if severe preoperative atrophy)', 'New ulnar nerve injury'],
    'Good to excellent outcomes in 70-85%. Results worse with severe preoperative axonal loss. Simple decompression vs. transposition: comparable outcomes for primary surgery (meta-analyses). Transposition preferred for subluxating nerve or revision surgery. Motor recovery less predictable than sensory improvement.',
    'The medial antebrachial cutaneous nerve crosses the operative field — identify and protect it early, as injury causes a painful neuroma that is more bothersome than the original ulnar symptoms.',
  ),

  'peripheral-nerve-repair': ns(
    'peripheral-nerve-repair', 'Peripheral Nerve Repair', 'peripheral-nerve',
    'Microsurgical repair of transected or injured peripheral nerves through direct epineurial repair, nerve grafting, or conduit placement to restore motor and sensory function.',
    ['Sharp nerve transection (lacerations, surgical injury)', 'Nerve gap after debridement of contused nerve ends', 'Brachial plexus injury (traction, avulsion)', 'Failed nerve recovery after closed injury (3-6 months observation)', 'Nerve tumor resection requiring reconstruction'],
    'Epineurial repair: nerve ends freshened to healthy fascicular pattern (pouting fascicles). 8-0 or 9-0 nylon sutures placed in epineurium for tension-free coaptation under operating microscope. Fascicular alignment matched by surface vessel pattern and internal topography. Nerve grafting: sural nerve autograft (most common donor) harvested and cable grafted to bridge gaps >2 cm. Nerve conduits (collagen, PGA) for gaps <3 cm in sensory nerves. Nerve transfers: nearby expendable motor nerve (e.g., Oberlin transfer — ulnar fascicle to biceps branch) for proximal injuries where reinnervation distance is too great for grafting.',
    ['Failure of reinnervation (especially proximal injuries, long gaps)', 'Neuroma formation at repair site', 'Donor site morbidity (sural nerve: lateral foot numbness)', 'Infection', 'Neuropathic pain', 'Tendon or joint contracture during reinnervation wait'],
    'Nerve regeneration: ~1 mm/day (1 inch/month). Sharp transection with primary repair: 70-80% useful recovery. Grafting: 50-70% depending on gap and nerve type. Nerve transfers: 80-90% for biceps reinnervation (Oberlin). Motor endplate viability lost after 12-18 months of denervation — sets the time limit for repair.',
    'The 12-18 month motor endplate deadline drives all surgical timing — if a nerve will not reinnervate its target muscle within this window, consider nerve transfer or tendon transfer instead of grafting.',
  ),

  // ===== TRAUMA (3) ==========================================================

  'burr-hole-evacuation': ns(
    'burr-hole-evacuation', 'Burr Hole Evacuation (EDH / SDH)', 'trauma',
    'Emergent or urgent placement of burr holes for evacuation of epidural or chronic subdural hematomas to relieve mass effect and prevent herniation.',
    ['Chronic subdural hematoma with neurological symptoms (most common burr hole indication)', 'Epidural hematoma (temporizing if craniotomy not immediately available)', 'Recurrent chronic subdural hematoma', 'Bilateral chronic subdural hematomas', 'Acute-on-chronic subdural hematoma'],
    'Chronic SDH: two burr holes placed (frontal and parietal) on affected side. Dura coagulated and opened. Subdural membrane opened. Hematoma irrigated with warm saline until fluid runs clear. Subdural drain placed (closed system, removed at 24-48 hours). Drain reduces recurrence from ~25% to ~10%. Epidural hematoma (temporizing): burr hole over pterion (temporal) to release arterial blood (middle meningeal artery). Definitive EDH treatment requires craniotomy for clot evacuation and vessel cauterization. Bedside twist-drill craniostomy: option for chronic SDH in high-risk patients.',
    ['Recurrence of chronic SDH (10-20% even with drain)', 'Tension pneumocephalus', 'Seizures', 'Acute hemorrhage (injury to cortical vessel or bridging vein)', 'Infection (empyema, meningitis)', 'Failure to re-expand brain (trapped brain, may need subduroperitoneal shunt)', 'Misplacement'],
    'Chronic SDH burr hole evacuation: 80-90% symptomatic improvement. Recurrence rate with drain: 10% vs 25% without. Mortality: <5% for chronic SDH. Acute EDH: surgical evacuation in comatose patients with pupil abnormality is life-saving (mortality drops from >90% to 10-30% with timely surgery).',
    'The lucid interval of epidural hematoma is a neurosurgical classic — a patient who "talks and dies" has an expanding EDH until proven otherwise. CT and evacuation must not be delayed.',
  ),

  'cranioplasty': ns(
    'cranioplasty', 'Cranioplasty', 'trauma',
    'Reconstruction of the skull defect after prior craniectomy, restoring cosmesis, cerebral protection, and often improving neurological function (syndrome of the trephined).',
    ['Prior decompressive craniectomy (most common, 6-12 weeks post-craniectomy)', 'Traumatic skull defect', 'Syndrome of the trephined (neurological decline from atmospheric pressure on brain)', 'Cosmetic deformity', 'Post-craniotomy bone flap infection requiring removal and delayed reconstruction'],
    'Autologous bone flap (stored frozen at -80C or in abdominal pocket) replaced and secured with titanium plates and screws. If autologous bone resorbed or infected: custom implant fabricated from patient CT scan (PEEK, titanium mesh, porous polyethylene, or hydroxyapatite). Incision reopened along prior scar. Temporalis muscle and scar tissue carefully dissected. Subgaleal drain placed. Bone flap or implant contoured and fixed. Complications higher with autologous bone resorption (especially in children and large flaps). 3D-printed patient-specific implants offer superior cosmetic fit.',
    ['Infection (5-10%, higher with synthetic implants)', 'Autologous bone resorption (up to 30% in some series, more in children)', 'Epidural or subgaleal hematoma', 'Seizures', 'Wound dehiscence', 'Implant exposure', 'Hydrocephalus (may manifest after cranioplasty)'],
    'Neurological improvement after cranioplasty reported in 25-50% of patients (syndrome of the trephined reversal). Autologous bone flap resorption: 10-30%. Custom PEEK/titanium implants: excellent long-term durability and cosmesis. Optimal timing: 6-12 weeks post-craniectomy (earlier if stable).',
    'Syndrome of the trephined is under-recognized — patients with large skull defects may have headache, cognitive decline, and motor deterioration simply from atmospheric pressure deforming the brain. Cranioplasty is therapeutic, not just cosmetic.',
  ),

  'lumbar-puncture': ns(
    'lumbar-puncture', 'Lumbar Puncture', 'trauma',
    'Insertion of a spinal needle into the lumbar subarachnoid space to obtain CSF for diagnosis, measure opening pressure, or deliver intrathecal therapeutics.',
    ['Suspected meningitis or encephalitis (most urgent indication)', 'Subarachnoid hemorrhage (CT-negative, LP for xanthochromia)', 'Normal pressure hydrocephalus (high-volume tap test)', 'Idiopathic intracranial hypertension (diagnostic and therapeutic)', 'CSF analysis for demyelinating disease, carcinomatosis, or inflammation', 'Intrathecal chemotherapy or anesthesia'],
    'Patient in lateral decubitus (preferred for opening pressure accuracy) or seated position. Spine flexed to open interspinous spaces. L3-L4 or L4-L5 interspace identified (iliac crest line = L4 spinous process). Sterile preparation and local anesthesia. 20-22G spinal needle (atraumatic tip preferred to reduce PDPH) inserted in midline, angled cephalad. Pop felt as ligamentum flavum and dura penetrated. Stylet removed, CSF flow confirmed. Opening pressure measured with manometer (normal: 6-25 cm H2O). CSF collected in sequential tubes (tube 1: cell count, tube 4: cell count to assess traumatic vs true SAH). Closing pressure optional. Stylet replaced before withdrawal.',
    ['Post-dural puncture headache (10-30% with cutting needle, <5% with atraumatic)', 'Epidural or subdural hematoma (if coagulopathy)', 'Infection (meningitis, epidural abscess)', 'Tonsillar herniation (if raised ICP from mass lesion — CT BEFORE LP if papilledema, focal deficit, or altered consciousness)', 'Back pain at puncture site', 'CSF leak', 'Nerve root irritation (radicular pain, transient)'],
    'Diagnostic accuracy: sensitivity 95-100% for bacterial meningitis when performed before antibiotics. CSF analysis: cell count, protein, glucose, Gram stain, culture, and specialized tests (oligoclonal bands, cytology, biomarkers). Post-LP headache: atraumatic needles and smaller gauge significantly reduce incidence. Blood patch effective for refractory PDPH.',
    'Never perform a lumbar puncture in a patient with signs of raised ICP from a mass lesion (focal deficits, papilledema, altered GCS) without neuroimaging first — the risk of brain herniation is real and lethal.',
  ),

  // ===== NEURO-CRITICAL CARE (2) =============================================

  'icp-management': ns(
    'icp-management', 'Intracranial Pressure Management', 'neuro-critical-care',
    'Multimodal management of elevated intracranial pressure (ICP >22 mmHg) using a tiered protocol to prevent secondary brain injury.',
    ['Traumatic brain injury (GCS <8 with abnormal CT)', 'Subarachnoid hemorrhage with hydrocephalus or edema', 'Intracerebral hemorrhage with mass effect', 'Acute hepatic failure with cerebral edema', 'Malignant cerebral infarction', 'CNS infection with raised ICP'],
    'Tier 0 (baseline): head of bed 30 degrees, head midline, avoid hyperthermia, normocarbia (PaCO2 35-40), adequate sedation/analgesia. ICP monitor (EVD preferred — allows drainage, or parenchymal bolt). Target ICP <22 and CPP 60-70 mmHg. Tier 1: CSF drainage via EVD (5-10 mL intermittent or continuous). Tier 2: hyperosmolar therapy — mannitol 20% (0.25-1 g/kg bolus) or hypertonic saline 23.4% (30 mL bolus, serum Na target <155). Tier 3: moderate hyperventilation (PaCO2 30-35, temporary bridge). Pentobarbital coma (EEG burst suppression). Targeted temperature management (33-36C). Decompressive craniectomy (last resort surgical option).',
    ['Osmotic therapy complications (renal injury, electrolyte disturbances)', 'Barbiturate coma side effects (hypotension, immunosuppression)', 'Hyperventilation causing cerebral ischemia (vasoconstriction)', 'EVD infection (ventriculitis)', 'Rebound intracranial hypertension', 'Cerebral herniation despite treatment', 'Systemic complications (DVT, pneumonia, sepsis)'],
    'BTF guidelines: ICP treatment threshold >22 mmHg. CPP target 60-70 mmHg. Mortality with sustained ICP >40 mmHg approaches 100%. EVD drainage achieves ICP control in ~50% of cases as sole intervention. Barbiturate coma reduces ICP in 80% but increases hypotension. Decompressive craniectomy reduces mortality but increases vegetative survival (RESCUE-ICP).',
    'The Monro-Kellie doctrine governs all ICP management — the skull is a fixed box; you can only reduce ICP by reducing brain (osmotherapy, surgery), blood (hyperventilation), or CSF (drainage) volume.',
  ),

  'sah-management': ns(
    'sah-management', 'Subarachnoid Hemorrhage Management', 'neuro-critical-care',
    'Comprehensive neurocritical care protocol for aneurysmal subarachnoid hemorrhage (aSAH), addressing the aneurysm and preventing devastating secondary complications.',
    ['Aneurysmal subarachnoid hemorrhage (ruptured intracranial aneurysm)', 'Hunt-Hess grade I-V presentation', 'Fisher Grade 3-4 (thick cisternal blood — high vasospasm risk)', 'Need for definitive aneurysm treatment (clip or coil)', 'Prevention and management of delayed cerebral ischemia (DCI)'],
    'Acute phase: secure airway (GCS <8), BP control (SBP <160 before aneurysm treatment), aneurysm treatment within 24 hours (microsurgical clipping or endovascular coiling based on anatomy and patient factors — ISAT trial favors coiling when feasible). EVD for acute hydrocephalus. Vasospasm prevention: nimodipine 60 mg q4h for 21 days (only calcium channel blocker with evidence). DCI monitoring: clinical exam (best), transcranial Doppler (MCA velocity >120 cm/s suspicious, >200 cm/s high probability), CT perfusion, CTA. DCI treatment: induced hypertension (phenylephrine to SBP 180-220), IV milrinone, intra-arterial vasodilators (verapamil, nicardipine), balloon angioplasty. Seizure prophylaxis: levetiracetam (avoid phenytoin — worsens outcomes). Fever control, DVT prophylaxis, sodium monitoring (cerebral salt wasting, SIADH).',
    ['Rebleeding before treatment (4% in first 24h, devastating)', 'Vasospasm and delayed cerebral ischemia (days 4-14, up to 30%)', 'Hydrocephalus (acute and chronic, 20-30%)', 'Seizures', 'Hyponatremia (cerebral salt wasting most common)', 'Medical complications (pneumonia, DVT/PE, cardiac stunning)', 'Death (overall mortality 25-35%)'],
    'Overall mortality: 25-35%. Good outcome (mRS 0-2): 60-70% for Hunt-Hess I-III. DCI occurs in 20-30% and is the leading cause of preventable morbidity. Nimodipine reduces poor outcome by ~30%. ISAT: coiling had better 1-year outcomes than clipping for anterior circulation aneurysms amenable to either. Long-term follow-up shows higher retreatment rate with coiling.',
    'The 14-day vasospasm window is a minefield — clinical deterioration in this period is DCI until proven otherwise. Triple-H therapy is outdated; euvolemia with induced hypertension is current standard.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getNeurosurgeryEntry(id: string): NeurosurgeryEntry | undefined {
  return NEUROSURGERY_ENTRIES[id];
}

export function searchNeurosurgery(query: string): NeurosurgeryEntry[] {
  const q = query.toLowerCase();
  return Object.values(NEUROSURGERY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.indications.some(i => i.toLowerCase().includes(q)) ||
    e.technique.toLowerCase().includes(q) ||
    e.risks.some(r => r.toLowerCase().includes(q)) ||
    e.keyPearl.toLowerCase().includes(q),
  );
}

export function getNeurosurgeryByCategory(cat: NeurosurgeryCategory): NeurosurgeryEntry[] {
  return Object.values(NEUROSURGERY_ENTRIES).filter(e => e.category === cat);
}

export function getNeurosurgeryCount(): number {
  return Object.keys(NEUROSURGERY_ENTRIES).length;
}
