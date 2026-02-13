/**
 * Biological Self — Vascular Surgery Specialty Database
 * 32 entries covering aortic, carotid, peripheral-arterial, venous,
 * dialysis-access, endovascular, emergency-vascular, and wound-management.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type VascularSurgeryCategory =
  | 'aortic' | 'carotid' | 'peripheral-arterial' | 'venous'
  | 'dialysis-access' | 'endovascular' | 'emergency-vascular' | 'wound-management';

export interface VascularSurgeryEntry {
  id: string;
  name: string;
  category: VascularSurgeryCategory;
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

const vs = (
  id: string, name: string, category: VascularSurgeryCategory,
  description: string, indications: string[], technique: string,
  complications: string[], outcomes: string, keyPearl: string,
): VascularSurgeryEntry => ({
  id, name, category, description, indications, technique,
  complications, outcomes, keyPearl,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const VASCULAR_SURGERY_ENTRIES: Record<string, VascularSurgeryEntry> = {

  // ===== AORTIC (4) ==========================================================

  'open-aaa-repair': vs(
    'open-aaa-repair', 'Open Abdominal Aortic Aneurysm Repair', 'aortic',
    'Traditional surgical repair of infrarenal aortic aneurysm via midline laparotomy with interposition graft (tube or bifurcated).',
    ['AAA >= 5.5 cm (men) or >= 5.0 cm (women)', 'Rapid expansion > 1 cm/year', 'Symptomatic aneurysm', 'Ruptured AAA', 'Anatomy unsuitable for EVAR (short/angulated neck, iliac occlusion)'],
    'Midline or retroperitoneal approach. Proximal and distal aortic clamping. Longitudinal aortotomy, thrombus removal, Dacron or PTFE graft sewn end-to-end (tube) or as aortobifemoral bypass. Reimplant IMA if back-bleeding is poor or sigmoid appears ischemic. Close aneurysm sac over graft.',
    ['Myocardial infarction (most common cause of perioperative death)', 'Renal failure from suprarenal clamping or atheroemboli', 'Colonic ischemia (IMA ligation)', 'Spinal cord ischemia (rare for infrarenal)', 'Graft infection', 'Aortoenteric fistula (late)', 'Sexual dysfunction from hypogastric nerve injury'],
    'Perioperative mortality 3-5% elective, >40% ruptured. Durable long-term results with 90% 5-year graft patency. Gold standard when EVAR anatomy is unfavorable.',
    'Reimplant the IMA if sigmoid Doppler signals are poor or stump pressure is < 40 mmHg — colonic ischemia carries 50% mortality.',
  ),

  'evar': vs(
    'evar', 'Endovascular Aneurysm Repair (EVAR)', 'aortic',
    'Minimally invasive repair of infrarenal AAA by deploying a stent-graft via femoral artery access to exclude the aneurysm sac from circulation.',
    ['AAA >= 5.5 cm with suitable anatomy', 'Infrarenal neck >= 15 mm length, <= 60 degree angulation, 18-32 mm diameter', 'High surgical risk patients favoring less invasive approach', 'Symptomatic or ruptured AAA with favorable anatomy'],
    'Bilateral femoral cutdown or percutaneous access. Guidewire and catheter placement under fluoroscopy. Main body deployed from one femoral artery with suprarenal fixation. Contralateral limb cannulated and deployed. Completion angiogram to assess for endoleak. Closure of access sites.',
    ['Endoleak (Type I-V; Type II most common)', 'Access site injury (iliac rupture, dissection)', 'Graft migration', 'Limb occlusion/thrombosis', 'Post-implantation syndrome (fever, leukocytosis)', 'Renal artery coverage', 'Need for secondary intervention (20-30% at 5 years)'],
    'Perioperative mortality 1-2% elective. Shorter ICU/hospital stay vs open repair. Similar long-term survival but higher reintervention rate. Requires lifelong CT surveillance.',
    'Type II endoleak (retrograde flow via lumbar/IMA) is most common; observe if sac is stable, intervene if sac grows > 5 mm.',
  ),

  'tevar': vs(
    'tevar', 'Thoracic Endovascular Aortic Repair (TEVAR)', 'aortic',
    'Endovascular stent-graft deployment in the descending thoracic aorta for aneurysm, dissection, transection, or penetrating ulcer.',
    ['Descending thoracic aneurysm >= 6 cm', 'Complicated type B dissection (malperfusion, rupture, refractory pain)', 'Traumatic aortic transection', 'Penetrating aortic ulcer with expanding hematoma', 'Mycotic aneurysm of descending aorta'],
    'Femoral access (usually right). Stiff guidewire positioned in ascending aorta. Device advanced and deployed under fluoroscopy with controlled hypotension or rapid pacing for precise positioning. Proximal landing zone must have >= 2 cm seal. Carotid-subclavian bypass if left subclavian coverage required. Completion angiogram.',
    ['Spinal cord ischemia/paraplegia (5-10%)', 'Stroke (2-5%, higher with arch coverage)', 'Left arm ischemia (subclavian coverage)', 'Endoleak', 'Retrograde type A dissection', 'Access vessel injury', 'Renal failure'],
    'Perioperative mortality 5-10% for aneurysm, lower for traumatic transection. Superior to open thoracic repair for morbidity/mortality. 5-year survival 60-70%.',
    'Spinal cord protection: CSF drainage, MAP > 80, avoid hypotension, stage procedures if long aortic coverage needed (> 20 cm).',
  ),

  'aortic-dissection-management': vs(
    'aortic-dissection-management', 'Aortic Dissection Management', 'aortic',
    'Acute management of aortic dissection — Stanford Type A requires emergent surgery; uncomplicated Type B is managed medically with surgery reserved for complications.',
    ['Type A: all patients unless prohibitive comorbidities', 'Complicated Type B: malperfusion (renal, mesenteric, limb), rupture, refractory hypertension/pain, rapid expansion', 'Uncomplicated Type B: medical management with surveillance', 'Connective tissue disorder with Type B dissection (lower threshold for intervention)'],
    'Type A: emergent median sternotomy, cardiopulmonary bypass, deep hypothermic circulatory arrest. Replace ascending aorta +/- arch with Dacron graft. Resuspend or replace aortic valve. Type B medical: IV esmolol/labetalol targeting HR < 60 and SBP 100-120. Complicated Type B: TEVAR to cover primary entry tear, restore true lumen flow.',
    ['Type A surgical mortality 15-25%', 'Stroke (10-15% Type A repair)', 'Malperfusion syndrome (mesenteric, renal, limb)', 'Aortic regurgitation', 'Cardiac tamponade', 'Renal failure', 'Paraplegia (Type B intervention)'],
    'Type A: 90% mortality if untreated; surgical survival 70-85%. Uncomplicated Type B: 90% in-hospital survival with medical management. Complicated Type B with TEVAR: 85-90% survival.',
    'Anti-impulse therapy (beta-blocker FIRST, then vasodilator) is critical — reducing dP/dt limits propagation. Never give vasodilators without beta-blockade.',
  ),

  // ===== CAROTID (2) =========================================================

  'carotid-endarterectomy': vs(
    'carotid-endarterectomy', 'Carotid Endarterectomy (CEA)', 'carotid',
    'Open surgical removal of atherosclerotic plaque from the carotid bifurcation to reduce stroke risk.',
    ['Symptomatic carotid stenosis >= 50% (NASCET criteria)', 'Asymptomatic carotid stenosis >= 60-70% in selected patients', 'Recurrent TIA despite medical therapy', 'Crescendo TIA or stroke-in-evolution'],
    'Longitudinal neck incision along SCM. Dissect carotid sheath, identify CCA, ICA, ECA. Systemic heparinization. Clamp vessels. Shunt placement if indicated (EEG monitoring or routine). Longitudinal arteriotomy across plaque. Endarterectomy in subadventitial plane. Evert or patch angioplasty closure (Dacron/bovine pericardium). Assess backbleeding, restore flow.',
    ['Stroke (1-3% at experienced centers)', 'Cranial nerve injury (hypoglossal, vagus, marginal mandibular — 5-8%)', 'Neck hematoma with airway compromise', 'Hyperperfusion syndrome (headache, seizure, ICH)', 'Myocardial infarction', 'Restenosis (5-10% at 5 years)', 'Wound infection'],
    'NNT ~6 for symptomatic stenosis >= 70% to prevent stroke over 5 years (NASCET). Perioperative stroke/death rate must be < 3% symptomatic, < 6% asymptomatic. Durable long-term results.',
    'Post-op hyperperfusion syndrome risk peaks days 3-7: strict BP control (SBP < 140) and monitor for new headache, seizure, or focal deficit.',
  ),

  'carotid-stenting': vs(
    'carotid-stenting', 'Carotid Artery Stenting (CAS)', 'carotid',
    'Endovascular treatment of carotid stenosis using angioplasty and stent placement with embolic protection device.',
    ['Symptomatic carotid stenosis >= 50% with high surgical risk', 'Radiation-induced stenosis', 'Restenosis after prior CEA', 'Surgically inaccessible lesion (high carotid bifurcation)', 'Contralateral carotid occlusion (relative)'],
    'Femoral artery access with 6-8F sheath. Catheterize CCA, exchange for stiff wire. Deploy embolic protection device (distal filter or proximal flow reversal) in distal ICA. Pre-dilate stenosis. Deploy self-expanding stent across lesion. Post-dilate to appose stent. Retrieve protection device. Completion angiography.',
    ['Stroke (periprocedural 3-5%)', 'Bradycardia/hypotension from carotid body stimulation', 'Access site complications', 'In-stent restenosis (5-10%)', 'Hyperperfusion syndrome', 'Contrast nephropathy', 'Distal embolization despite protection'],
    'CREST trial: equivalent 4-year stroke/MI/death rates for CAS vs CEA. CAS has higher periprocedural stroke risk, CEA has higher MI risk. Best for high surgical risk patients.',
    'Atropine should be drawn and ready before balloon inflation at the carotid bulb — carotid body stimulation causes profound bradycardia.',
  ),

  // ===== PERIPHERAL-ARTERIAL (5) =============================================

  'femoral-popliteal-bypass': vs(
    'femoral-popliteal-bypass', 'Femoral-Popliteal Bypass', 'peripheral-arterial',
    'Surgical bypass of occluded superficial femoral artery using autologous vein or prosthetic graft from common femoral to above- or below-knee popliteal artery.',
    ['Lifestyle-limiting claudication refractory to exercise therapy and medication', 'Critical limb ischemia (rest pain, tissue loss, Rutherford 4-6)', 'Failed or unsuitable endovascular intervention', 'Acute limb ischemia with SFA occlusion'],
    'Longitudinal groin incision to expose CFA/SFA/profunda. Medial knee or below-knee incision for popliteal exposure. Harvest reversed great saphenous vein (preferred) or use PTFE/Dacron. Heparinize. Proximal anastomosis end-to-side to CFA. Tunnel graft anatomically. Distal anastomosis end-to-side to popliteal artery. Confirm flow with Doppler/angiography.',
    ['Graft thrombosis (most common cause of failure)', 'Wound infection (groin incision especially)', 'Graft infection', 'Seroma/lymphocele', 'Myocardial infarction', 'Limb loss despite bypass', 'Steal syndrome (rare)'],
    'Above-knee vein bypass: 80% 5-year patency. Below-knee vein bypass: 65-70% 5-year patency. Prosthetic (PTFE) below-knee: ~50% at 3 years. Vein graft patency is significantly superior to prosthetic, especially below the knee.',
    'Always use autologous saphenous vein when available — "vein is gold" below the knee. Map veins preoperatively with duplex ultrasound.',
  ),

  'femoral-tibial-bypass': vs(
    'femoral-tibial-bypass', 'Femoral-Tibial Bypass', 'peripheral-arterial',
    'Distal bypass from femoral artery to tibial or pedal vessel for limb salvage in critical limb ischemia with infrageniculate disease.',
    ['Critical limb ischemia with tibial occlusive disease', 'Non-healing foot wound or gangrene with inadequate pedal perfusion', 'Failed tibial angioplasty', 'Rutherford 5-6 with patent target vessel on imaging'],
    'Expose CFA via groin incision. Identify target tibial vessel (anterior tibial, posterior tibial, or peroneal) or dorsalis pedis via distal incision. Harvest ipsilateral GSV in situ or reversed. In-situ technique: lyse valves with valvulotome, ligate side branches. Create proximal and distal anastomoses. Confirm pedal perfusion with continuous-wave Doppler.',
    ['Graft failure/thrombosis', 'Wound complications (up to 25%)', 'Graft infection', 'Myocardial infarction', 'Amputation despite patent graft (inadequate wound healing)', 'Limb edema', 'Conduit stenosis requiring revision'],
    'Limb salvage rate 70-80% at 5 years with vein graft. Primary patency 60-65% at 5 years. Prosthetic grafts have poor results in tibial bypasses. Vein graft surveillance with duplex essential.',
    'Graft surveillance duplex at 1, 3, 6, 9, 12 months then biannually detects stenosis before thrombosis — preemptive revision doubles long-term patency.',
  ),

  'iliac-angioplasty-stenting': vs(
    'iliac-angioplasty-stenting', 'Iliac Artery Angioplasty and Stenting', 'peripheral-arterial',
    'Endovascular treatment of aortoiliac occlusive disease using balloon angioplasty with primary or selective stent placement.',
    ['Lifestyle-limiting claudication from iliac stenosis/occlusion (TASC A-C)', 'Critical limb ischemia with inflow disease', 'Erectile dysfunction from bilateral iliac disease (Leriche syndrome)', 'As inflow procedure before distal bypass'],
    'Femoral or contralateral femoral access. Cross lesion with wire and catheter. Exchange for stiff wire. Balloon angioplasty to vessel diameter. Primary stent placement (balloon-expandable at ostia, self-expanding distally). Kissing stent technique for aortic bifurcation disease. Completion angiography with pressure gradient measurement.',
    ['Access site hematoma or pseudoaneurysm', 'Iliac rupture (covered stent bailout)', 'Distal embolization', 'Stent fracture', 'In-stent restenosis', 'Renal artery compromise (aortic bifurcation disease)', 'Contrast nephropathy'],
    'Technical success > 95%. Primary patency 70-80% at 5 years for iliac stenting. Superior to aortobifemoral bypass for TASC A-B lesions with lower morbidity. First-line for most iliac disease.',
    'Use balloon-expandable stents at the aortic bifurcation and iliac ostia for precise placement; self-expanding stents for the external iliac for flexibility.',
  ),

  'femoral-angioplasty-stenting': vs(
    'femoral-angioplasty-stenting', 'Femoral-Popliteal Angioplasty and Stenting', 'peripheral-arterial',
    'Endovascular treatment of femoropopliteal occlusive disease with balloon angioplasty, drug-coated balloon (DCB), or stent placement.',
    ['Claudication refractory to exercise therapy (TASC A-C)', 'Critical limb ischemia with SFA disease', 'Short segment stenosis or occlusion (ideal)', 'Poor surgical candidate for bypass'],
    'Antegrade or contralateral femoral access. Cross lesion intraluminally or subintimally (re-entry device). Plain balloon angioplasty followed by drug-coated balloon (paclitaxel). Provisional stenting for flow-limiting dissection or recoil. Self-expanding nitinol stents preferred. Intravascular ultrasound (IVUS) for optimization.',
    ['Restenosis (30-50% at 1 year with bare stent)', 'Stent fracture in SFA (flexion zone)', 'Distal embolization', 'Vessel perforation', 'Access site complication', 'In-stent occlusion', 'Target lesion revascularization'],
    'Drug-coated balloon: primary patency 80-85% at 1 year (vs 60% plain balloon). Stent patency 70-75% at 1 year. Endovascular-first approach for most femoropopliteal disease with surgery reserved for failures.',
    'Drug-coated balloons are now first-line for femoropopliteal disease — they dramatically reduce restenosis without leaving a permanent implant.',
  ),

  'popliteal-artery-entrapment': vs(
    'popliteal-artery-entrapment', 'Popliteal Artery Entrapment Syndrome', 'peripheral-arterial',
    'Anatomic variant where the popliteal artery is compressed by abnormal musculotendinous structures, causing claudication in young patients.',
    ['Exertional calf claudication in young athletic patient', 'Popliteal artery occlusion or aneurysm in young patient without atherosclerosis', 'Positional ankle-brachial index drop with plantar flexion', 'Bilateral symptoms (30% bilateral)'],
    'Posterior approach to popliteal fossa. Identify the anomalous relationship (medial head of gastrocnemius, popliteus, fibrous band). Release the compressive structure. If artery is damaged (stenosis, aneurysm, occlusion), resect affected segment and interpose reversed saphenous vein graft. Fasciotomy if compartment syndrome present.',
    ['Graft thrombosis', 'Recurrence if anomalous anatomy not fully addressed', 'Tibial nerve injury', 'Wound complications', 'DVT', 'Compartment syndrome', 'Persistent claudication from established arterial damage'],
    'Excellent results with early intervention — 90-95% long-term patency after decompression with or without bypass. Delay leads to irreversible arterial damage. Bilateral exploration recommended.',
    'Always consider this diagnosis in young patients (< 40) with calf claudication — provocative MRA with active plantar flexion is the best noninvasive diagnostic test.',
  ),

  // ===== VENOUS (5) ==========================================================

  'varicose-vein-ablation': vs(
    'varicose-vein-ablation', 'Varicose Vein Ablation', 'venous',
    'Minimally invasive thermal or chemical ablation of incompetent great saphenous vein (GSV) or small saphenous vein (SSV) for symptomatic varicose veins.',
    ['Symptomatic varicose veins (pain, heaviness, swelling)', 'Saphenous vein reflux > 0.5 seconds on duplex', 'Venous stasis skin changes (C3-C6 CEAP)', 'Superficial thrombophlebitis', 'Bleeding varicose vein'],
    'Ultrasound-guided percutaneous access to GSV at or below the knee. Advance laser fiber or radiofrequency catheter to saphenofemoral junction (2 cm distal to SFJ). Tumescent anesthesia (dilute lidocaine in saline) infiltrated perivenously. Activate energy source and withdraw catheter at prescribed rate. Concomitant phlebectomy of branch varicosities.',
    ['Endovenous heat-induced thrombosis (EHIT) extending into deep vein', 'Skin burn or paresthesia (saphenous nerve)', 'DVT (< 1%)', 'Skin hyperpigmentation', 'Recanalization (5-10% at 5 years)', 'Phlebitis', 'Bruising and tenderness'],
    'GSV closure rate > 95% at 1 year, 90% at 5 years. Equivalent to surgical stripping with less pain and faster recovery. Significant quality-of-life improvement in 85-90% of patients.',
    'Position the catheter tip 2 cm from the SFJ under ultrasound — too close risks EHIT extension into the femoral vein.',
  ),

  'dvt-management': vs(
    'dvt-management', 'Deep Vein Thrombosis Management', 'venous',
    'Medical and interventional management of lower extremity deep venous thrombosis to prevent PE, reduce post-thrombotic syndrome, and restore venous patency.',
    ['Acute proximal DVT (femoral, popliteal, iliac)', 'Iliofemoral DVT in young patients (consider intervention)', 'Phlegmasia cerulea dolens (limb-threatening)', 'DVT with contraindication to anticoagulation (IVC filter)', 'Recurrent DVT despite anticoagulation'],
    'Medical: anticoagulation with LMWH/fondaparinux bridge to warfarin (INR 2-3) or DOAC (rivaroxaban, apixaban — no bridge needed). Duration: 3 months provoked, indefinite unprovoked or recurrent. Interventional: catheter-directed thrombolysis (CDT) or pharmacomechanical thrombectomy for iliofemoral DVT < 14 days. Compression stockings. Early ambulation.',
    ['Pulmonary embolism (fatal in 1-2%)', 'Post-thrombotic syndrome (20-50%)', 'Bleeding from anticoagulation (major: 2-3%/year)', 'Heparin-induced thrombocytopenia', 'Recurrence (5-10%/year after stopping anticoagulation)', 'Venous ulceration', 'Intracranial hemorrhage with thrombolysis'],
    'DOAC therapy: 2-3% recurrence rate per year. Catheter-directed therapy reduces post-thrombotic syndrome in iliofemoral DVT (ATTRACT trial subgroup). Compression therapy improves symptoms.',
    'Iliofemoral DVT in a young, active patient with symptoms < 14 days — strongly consider catheter-directed intervention to reduce post-thrombotic syndrome burden.',
  ),

  'may-thurner-syndrome': vs(
    'may-thurner-syndrome', 'May-Thurner Syndrome', 'venous',
    'Compression of the left common iliac vein by the overlying right common iliac artery against the lumbar spine, predisposing to left iliofemoral DVT.',
    ['Left iliofemoral DVT in young woman (classic presentation)', 'Recurrent left leg DVT', 'Left leg swelling disproportionate to right', 'Left leg venous claudication (heaviness with activity)', 'Iliac vein stenosis > 50% on imaging'],
    'Acute DVT: catheter-directed thrombolysis or pharmacomechanical thrombectomy via popliteal or jugular access. Once thrombus cleared, venography reveals iliac vein stenosis/web. Intravascular ultrasound (IVUS) confirms > 50% stenosis. Deploy dedicated venous stent (Wallstent or VENOVO) extending from external iliac to IVC. Post-dilate. Anticoagulation 6-12 months minimum.',
    ['Stent thrombosis (5-10%)', 'Stent migration', 'In-stent restenosis', 'Contralateral iliac vein compression', 'Access site thrombosis', 'Bleeding from thrombolysis', 'Post-thrombotic syndrome despite intervention'],
    'Venous stent patency 90-95% at 2 years. Significant symptom improvement in 85-90%. Early intervention for acute DVT with underlying May-Thurner improves outcomes vs anticoagulation alone.',
    'IVUS is essential — venography underestimates iliac vein compression by 30-40%. Always use IVUS to size the stent and confirm adequate expansion.',
  ),

  'ivc-filter-placement': vs(
    'ivc-filter-placement', 'IVC Filter Placement and Retrieval', 'venous',
    'Placement of a retrievable filter in the infrarenal IVC to prevent pulmonary embolism when anticoagulation is contraindicated or has failed.',
    ['Acute proximal DVT or PE with absolute contraindication to anticoagulation', 'Recurrent PE despite adequate anticoagulation', 'Prophylactic in high-risk trauma patients (relative)', 'Free-floating iliocaval thrombus', 'Massive PE with residual DVT and poor cardiopulmonary reserve'],
    'Femoral or jugular venous access. IVC venography to assess diameter (< 30 mm for most filters), renal vein position, and thrombus location. Deploy retrievable filter (Denali, Gunther Tulip) infrarenally under fluoroscopy. Confirm position and tilt. For retrieval: jugular access, snare the hook, collapse filter into sheath.',
    ['Filter tilt or migration', 'IVC thrombosis (3-10%)', 'Filter fracture and embolization', 'Caval penetration by struts', 'Recurrent DVT (increased risk with filter in place)', 'Retrieval failure (10-20% with prolonged dwell)', 'Post-thrombotic IVC syndrome'],
    'PE prevention: 95-99% effective. Retrievable filters should be removed as soon as indication resolves. FDA recommends retrieval within 29-54 days. Retrieval success > 90% if attempted within 3 months.',
    'Every filter placed should have a retrieval plan — set a reminder at insertion. Indwelling filters increase long-term DVT risk and should not be permanent unless truly necessary.',
  ),

  'thoracic-outlet-decompression': vs(
    'thoracic-outlet-decompression', 'Thoracic Outlet Syndrome Decompression', 'venous',
    'Surgical decompression of the thoracic outlet by first rib resection and scalenectomy to relieve neurovascular compression.',
    ['Venous TOS (Paget-Schroetter): effort thrombosis of subclavian vein', 'Arterial TOS: subclavian artery aneurysm/stenosis with embolization', 'Neurogenic TOS: refractory to conservative therapy (3-6 months PT)', 'Cervical rib with vascular compromise', 'Recurrent symptoms after prior decompression'],
    'Venous TOS: catheter-directed thrombolysis first, then early first rib resection (transaxillary or supraclavicular approach). Transaxillary: divide anterior and middle scalene muscles, resect first rib from costochondral junction to transverse process. Supraclavicular: better for arterial TOS with vascular reconstruction. Neurolysis of brachial plexus if needed.',
    ['Pneumothorax (most common, 5-10%)', 'Brachial plexus injury', 'Long thoracic nerve injury (winged scapula)', 'Vascular injury (subclavian artery/vein)', 'Recurrence (10-15%)', 'Wound infection', 'Lymphatic leak (chylothorax if left-sided)'],
    'Venous TOS: 85-90% good/excellent results with thrombolysis + first rib resection. Arterial TOS: excellent outcomes with decompression + vascular repair. Neurogenic TOS: 70-80% improvement with surgery.',
    'For Paget-Schroetter syndrome, the sequence is: thrombolysis first, anticoagulation, then first rib resection within 2-4 weeks — this "thrombolysis-first" protocol maximizes venous patency.',
  ),

  // ===== DIALYSIS-ACCESS (3) =================================================

  'av-fistula-creation': vs(
    'av-fistula-creation', 'Arteriovenous Fistula Creation', 'dialysis-access',
    'Surgical creation of a native arteriovenous connection for long-term hemodialysis access — the gold standard vascular access.',
    ['CKD Stage 4-5 anticipated to need hemodialysis', 'eGFR < 20 mL/min or dialysis expected within 6-12 months', 'Fistula First initiative: preferred over graft or catheter', 'Failed prior access requiring new fistula', 'Suitable forearm or upper arm veins on vein mapping'],
    'Preoperative duplex vein mapping (cephalic vein >= 2.5 mm, arterial diameter >= 2.0 mm). Start distally: radiocephalic (Brescia-Cimino) at wrist is first choice. Expose artery and vein, mobilize vein, heparinize. End-vein to side-artery anastomosis with 6-0 or 7-0 Prolene. Confirm thrill. If forearm veins inadequate, brachiocephalic or brachiobasilic (with transposition) fistula.',
    ['Primary failure/non-maturation (20-40%, most common)', 'Stenosis (juxta-anastomotic or venous outflow)', 'Thrombosis', 'Steal syndrome (hand ischemia)', 'Aneurysm/pseudoaneurysm formation', 'Infection (low rate, 2-3%)', 'High-output cardiac failure (rare, flow > 2 L/min)'],
    'Primary patency: 50-60% at 1 year, but assisted patency 70-80% with surveillance and intervention. Maturation takes 6-12 weeks. Superior to grafts for longevity and infection risk. "Fistula First" — KDOQI recommends AVF for 65% of incident HD patients.',
    'Rule of 6s for maturation: flow > 600 mL/min, diameter > 6 mm, depth < 6 mm from skin surface, and at least 6 weeks old before cannulation.',
  ),

  'av-graft-placement': vs(
    'av-graft-placement', 'Arteriovenous Graft Placement', 'dialysis-access',
    'Surgical interposition of a prosthetic conduit (PTFE) between artery and vein for hemodialysis access when native fistula is not feasible.',
    ['Inadequate veins for AVF creation (failed vein mapping)', 'Failed prior AVF attempts', 'Urgent need for access (can use in 2-3 weeks vs 6-12 weeks for AVF)', 'Exhausted AVF options', 'Early-cannulation graft for bridge to AVF maturation'],
    'Upper arm loop graft (brachial artery to axillary/basilic vein) is most common configuration. Expose artery and vein via separate incisions. Tunnel 6 mm PTFE graft in loop or straight configuration. Arterial anastomosis end-graft to side-artery. Venous anastomosis end-graft to side-vein. Confirm thrill. Close in layers.',
    ['Thrombosis (most common cause of failure, 15-20%/year)', 'Infection (10-15% — much higher than AVF)', 'Pseudoaneurysm at cannulation sites', 'Venous outflow stenosis (neo-intimal hyperplasia)', 'Steal syndrome (more common than AVF)', 'Seroma', 'Graft degradation'],
    'Primary patency: 40-50% at 1 year (inferior to AVF). Assisted patency with thrombectomy and revision: 60-70% at 2 years. Can cannulate in 2-3 weeks (early-cannulation grafts in 24-72 hours). Higher intervention burden vs AVF.',
    'Most grafts fail from venous anastomotic stenosis — schedule surveillance duplex every 3 months and intervene for > 50% stenosis with declining flow.',
  ),

  'dialysis-catheter-placement': vs(
    'dialysis-catheter-placement', 'Dialysis Catheter Placement', 'dialysis-access',
    'Insertion of a tunneled or non-tunneled central venous catheter for temporary or emergent hemodialysis access.',
    ['Emergent hemodialysis needed (no mature AVF/AVG)', 'Bridge to AVF/AVG maturation', 'Peritoneal dialysis failure requiring HD transition', 'Acute kidney injury requiring RRT', 'No other access options (exhausted sites)'],
    'Right internal jugular vein preferred (straightest path to SVC-RA junction). Ultrasound-guided venous puncture. Seldinger technique with guidewire placement. For tunneled catheter: create subcutaneous tunnel from deltopectoral groove to venotomy. Dilate tract, place split-tip or Palindrome catheter with Dacron cuff in tunnel. Tip at cavoatrial junction. Confirm position with fluoroscopy. Suture, heparin-lock lumens.',
    ['Catheter-related bloodstream infection (CRBSI — 2-5 per 1000 catheter-days)', 'Central vein stenosis (especially subclavian — AVOID)', 'Pneumothorax (IJ approach < 1%)', 'Thrombosis', 'Catheter malfunction/fibrin sheath', 'Air embolism', 'Arterial puncture'],
    'Bridge access only — 30-day infection rate 5-10%. Tunneled catheters last months but with high complication rate. KDOQI: catheter prevalence should be < 10% of HD patients. Convert to AVF/AVG as soon as possible.',
    'NEVER place a subclavian dialysis catheter — central vein stenosis rates approach 40-50% and can permanently preclude ipsilateral AVF creation.',
  ),

  // ===== ENDOVASCULAR (4) ====================================================

  'renal-artery-stenting': vs(
    'renal-artery-stenting', 'Renal Artery Stenting', 'endovascular',
    'Endovascular treatment of renal artery stenosis with angioplasty and stent placement to improve renal perfusion and control hypertension.',
    ['Fibromuscular dysplasia with renovascular hypertension (angioplasty alone often curative)', 'Atherosclerotic RAS with flash pulmonary edema', 'Progressive renal insufficiency with bilateral RAS', 'Refractory hypertension (failure of >= 3 drugs including diuretic)', 'Solitary functioning kidney with significant RAS'],
    'Femoral access with 6F guide catheter. Selective renal arteriography. Cross stenosis with 0.014" guidewire. For FMD: angioplasty alone. For atherosclerotic ostial disease: balloon-expandable stent placement extending 1-2 mm into aorta. Post-dilation to nominal pressure. Completion angiography with pressure gradient measurement (< 10 mmHg residual).',
    ['Renal artery dissection or perforation', 'Atheroemboli to kidney (cholesterol shower)', 'Contrast nephropathy', 'Access site complications', 'In-stent restenosis (15-20% at 1 year)', 'Renal function deterioration', 'Stent fracture'],
    'FMD: cure of hypertension in 35-50%, improvement in 80-90%. Atherosclerotic RAS: CORAL and ASTRAL trials show no benefit over medical therapy for most patients. Select patients with flash pulmonary edema or declining renal function may benefit.',
    'Atherosclerotic RAS: medical therapy is first-line (CORAL trial). Reserve stenting for flash pulmonary edema, refractory heart failure, or rapidly declining GFR with bilateral disease.',
  ),

  'mesenteric-ischemia-management': vs(
    'mesenteric-ischemia-management', 'Mesenteric Ischemia Management', 'endovascular',
    'Endovascular and open surgical management of acute and chronic mesenteric ischemia to restore intestinal perfusion.',
    ['Acute mesenteric ischemia (SMA embolism or thrombosis) — surgical emergency', 'Chronic mesenteric ischemia (intestinal angina): weight loss, postprandial pain, food fear', 'SMA/celiac stenosis > 70% with symptoms', 'Acute-on-chronic mesenteric ischemia'],
    'Acute: emergent laparotomy, SMA embolectomy (transverse arteriotomy with Fogarty catheter), assess bowel viability (second-look in 24-48h). Consider endovascular aspiration thrombectomy. Chronic: mesenteric stenting preferred (SMA primary, celiac if SMA cannot be treated). Retrograde open mesenteric stenting (ROMS) as hybrid option. Open bypass (aorto-SMA) for failed endovascular.',
    ['Bowel necrosis and short gut syndrome', 'Reperfusion injury', 'Multiorgan failure', 'In-stent restenosis (20-30%)', 'Reocclusion', 'Mortality (acute: 30-70%; chronic intervention: 5-10%)', 'Contrast nephropathy'],
    'Acute mesenteric ischemia: mortality 30-70% despite treatment — time is bowel. Chronic mesenteric stenting: 85-90% technical success, 70-80% symptom-free at 3 years. Open bypass patency is superior but higher morbidity.',
    'Acute mesenteric ischemia: "pain out of proportion to exam" is the classic clue — lactate rises LATE. CT angiography is the definitive rapid diagnostic. Do not wait for lab confirmation.',
  ),

  'peripheral-embolectomy': vs(
    'peripheral-embolectomy', 'Peripheral Embolectomy', 'endovascular',
    'Surgical removal of acute arterial embolus using balloon catheter (Fogarty) to restore limb perfusion in acute limb ischemia.',
    ['Acute limb ischemia (Rutherford I or IIa/IIb)', 'Embolic occlusion (cardiac source: atrial fibrillation, MI, valve disease)', 'Acute graft thrombosis', 'Saddle embolus at aortic bifurcation', 'Upper extremity embolism (brachial/axillary)'],
    'Expose common femoral artery (most common access). Transverse arteriotomy. Pass Fogarty balloon catheter distally and proximally, inflate and withdraw to extract thrombus. Repeat passes until no further clot and brisk inflow/backbleeding. Completion angiography to confirm patency. Arteriotomy closure with patch if needed. Fasciotomy if prolonged ischemia (> 4-6 hours) or compartment pressures elevated.',
    ['Compartment syndrome (most feared complication after reperfusion)', 'Reperfusion injury (hyperkalemia, myoglobinuria, metabolic acidosis)', 'Intimal injury from catheter', 'Residual thrombus or distal embolization', 'Recurrent embolization', 'Limb loss despite embolectomy', 'Renal failure from myoglobin'],
    'Limb salvage 75-90% for viable limbs (Rutherford I-IIa). Irreversible ischemia (IIb-III) carries 10-25% amputation rate. 30-day mortality 10-15% (reflects comorbid cardiac disease). Long-term anticoagulation essential to prevent recurrence.',
    'The 6 Ps of acute limb ischemia: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia. Paralysis and paresthesia indicate threatened limb — emergent intervention required.',
  ),

  'mechanical-thrombectomy': vs(
    'mechanical-thrombectomy', 'Mechanical Thrombectomy', 'endovascular',
    'Percutaneous catheter-based mechanical removal or aspiration of arterial or venous thrombus as an alternative to open surgery or pharmacologic thrombolysis.',
    ['Acute limb ischemia (alternative to open embolectomy)', 'Acute iliofemoral DVT (pharmacomechanical thrombectomy)', 'Acute graft thrombosis', 'Acute mesenteric ischemia (aspiration thrombectomy)', 'Patients at high bleeding risk (avoid lytic agents)'],
    'Percutaneous femoral or popliteal access. Catheter-based devices include: aspiration thrombectomy (Penumbra Indigo), rheolytic (AngioJet), rotational (Cleaner), and pharmacomechanical (EKOS with ultrasound-enhanced lysis). Cross thrombus with wire, deploy device, extract or macerate clot. Often combined with low-dose thrombolytic for residual thrombus. Completion angiography.',
    ['Distal embolization', 'Vessel injury or perforation', 'Hemolysis and hemoglobinuria (rheolytic devices)', 'Bradycardia with AngioJet (adenosine release)', 'Access site complications', 'Incomplete thrombus removal', 'Renal injury from hemolysis or contrast'],
    'Comparable limb salvage to open embolectomy (80-90%) with lower morbidity. Pharmacomechanical thrombectomy reduces lytic dose and time by 50%. Increasingly first-line for acute limb ischemia at endovascular-capable centers.',
    'AngioJet causes transient bradycardia from adenosine release — pretreat with atropine and limit run times. Avoid prolonged use to minimize hemolysis.',
  ),

  // ===== EMERGENCY-VASCULAR (4) ==============================================

  'ruptured-aaa': vs(
    'ruptured-aaa', 'Ruptured Abdominal Aortic Aneurysm', 'emergency-vascular',
    'Life-threatening rupture of infrarenal aortic aneurysm requiring emergent repair — 80-90% mortality without surgery.',
    ['Known or newly discovered AAA with rupture (CT-confirmed or clinical triad)', 'Classic triad: abdominal/back pain, pulsatile mass, hypotension', 'Hemodynamic instability with known AAA', 'Contained retroperitoneal rupture (relatively stable)'],
    'Permissive hypotension (SBP 70-90 mmHg) — avoid aggressive resuscitation before aortic control. EVAR if anatomy is suitable AND patient is stable enough for CT (increasingly preferred). Open repair: rapid midline laparotomy, supraceliac clamping for hemorrhage control, then infrarenal clamp when possible. Repair as standard open AAA. Massive transfusion protocol. Damage control if coagulopathic.',
    ['Death (operative mortality 40-50% for those reaching OR)', 'Abdominal compartment syndrome', 'Multiorgan failure', 'Myocardial infarction', 'Renal failure requiring dialysis', 'Colonic ischemia', 'Limb ischemia'],
    'Overall mortality 80-90% (including prehospital deaths). Operative mortality: 40-50% open, 20-30% emergent EVAR. Survivors who leave hospital have reasonable long-term outlook. Endovascular repair associated with better early survival if anatomy permits.',
    'Permissive hypotension saves lives — do NOT aggressively fluid resuscitate before aortic control. Target SBP 70-90 and conscious patient.',
  ),

  'acute-limb-ischemia': vs(
    'acute-limb-ischemia', 'Acute Limb Ischemia', 'emergency-vascular',
    'Sudden decrease in limb perfusion threatening limb viability — a vascular emergency requiring prompt intervention within 6 hours.',
    ['Acute onset of limb pain, pallor, pulselessness (< 14 days)', 'Rutherford Classification: I (viable), IIa (marginally threatened), IIb (immediately threatened), III (irreversible)', 'Embolic source (atrial fibrillation, MI, aneurysm)', 'Thrombosis of native artery, graft, or stent', 'Trauma with vascular injury'],
    'Immediate heparin bolus (80-100 U/kg). Rutherford I: anticoagulation and imaging (CTA). IIa: urgent revascularization (endovascular or surgical within 6-12h). IIb: emergent revascularization (< 6 hours). III (irreversible): amputation. Embolectomy vs catheter-directed thrombolysis vs mechanical thrombectomy based on etiology and clinical scenario. Four-compartment fasciotomy if ischemia > 4-6 hours.',
    ['Compartment syndrome', 'Reperfusion injury (myoglobinuria, hyperkalemia, acidosis, cardiac arrest)', 'Amputation (10-30%)', 'Renal failure', 'Multiorgan failure', 'Death (10-15% at 30 days)', 'Fasciotomy wound complications'],
    'Limb salvage: Rutherford I-IIa 90-95%, IIb 70-80%. Mortality 10-15% at 30 days (reflects comorbidities). Key determinant: time from onset to revascularization. Long-term anticoagulation for embolic source.',
    'Immediately heparinize — even before imaging. Time is muscle. And always check for compartment syndrome after revascularization; prophylactic fasciotomy if ischemia exceeded 4-6 hours.',
  ),

  'vascular-trauma': vs(
    'vascular-trauma', 'Vascular Trauma Management', 'emergency-vascular',
    'Emergent management of traumatic arterial and venous injuries from penetrating or blunt mechanisms.',
    ['Hard signs of vascular injury (pulsatile bleeding, expanding hematoma, absent pulses, bruit/thrill)', 'Penetrating trauma with proximity to major vessels', 'Ankle-brachial index < 0.9 after extremity trauma', 'Blunt aortic injury (deceleration mechanism)', 'Mangled extremity with vascular compromise'],
    'Control hemorrhage (direct pressure, tourniquet). Assess for hard vs soft signs. CTA for stable patients with soft signs. Hard signs: operative exploration. Primary repair for clean lacerations. Interposition vein graft for segmental loss. Prosthetic graft for large-caliber arteries if vein unavailable. Temporary vascular shunt (Argyle/Javid) for damage control. Repair veins if possible (ligate if hemodynamically unstable). Fasciotomy liberally.',
    ['Hemorrhagic shock and death', 'Limb loss', 'Compartment syndrome', 'Reperfusion injury', 'Graft thrombosis or infection', 'Pseudoaneurysm', 'Arteriovenous fistula (missed injury)'],
    'Mortality depends on injury location — extremity: 5-10%, abdominal aorta: 50-70%. Temporary shunts allow damage control with 85-90% patency for hours. Endovascular repair increasingly used for thoracic aortic injury (90% survival with TEVAR).',
    'Temporary intravascular shunts (Argyle/Javid) buy critical time in damage control — place in 2 minutes, maintain perfusion for hours while managing other injuries.',
  ),

  'phlegmasia-cerulea-dolens': vs(
    'phlegmasia-cerulea-dolens', 'Phlegmasia Cerulea Dolens', 'emergency-vascular',
    'Massive iliofemoral DVT causing complete venous outflow obstruction with limb-threatening ischemia from venous gangrene.',
    ['Acute onset massively swollen, cyanotic, painful limb', 'Phlegmasia alba dolens progressing to cerulea dolens', 'Compartment syndrome from venous congestion', 'Impending venous gangrene', 'Hemodynamic compromise from fluid sequestration in limb'],
    'Immediate anticoagulation with IV heparin. Emergent catheter-directed thrombolysis or pharmacomechanical thrombectomy (preferred over systemic lysis). Venous access via popliteal vein, contralateral femoral, or jugular approach. Mechanical thrombectomy devices for rapid debulking. Stent underlying iliac stenosis (May-Thurner). Fasciotomy for compartment syndrome. Surgical venous thrombectomy if endovascular fails.',
    ['Venous gangrene requiring amputation (20-40% without treatment)', 'Massive PE', 'Compartment syndrome', 'Bleeding from thrombolysis', 'Renal failure', 'DIC', 'Death (20-30%)'],
    'Without intervention: 20-40% amputation rate, 20-30% mortality. With aggressive catheter-directed therapy: limb salvage 80-90%. Early intervention is critical — venous gangrene is irreversible.',
    'This is a surgical emergency — do not delay for imaging beyond a bedside duplex. Massive fluid resuscitation is needed (liters sequester in the limb causing hypovolemic shock).',
  ),

  // ===== WOUND-MANAGEMENT (5) ================================================

  'bka-amputation': vs(
    'bka-amputation', 'Below-Knee Amputation (BKA)', 'wound-management',
    'Transtibial amputation performed for non-salvageable limb ischemia, infection, or trauma, preserving the knee joint for superior prosthetic rehabilitation.',
    ['Non-reconstructable critical limb ischemia with tissue loss', 'Wet gangrene or uncontrolled sepsis of the foot', 'Failed revascularization with progressive tissue loss', 'Severe diabetic foot infection unresponsive to treatment', 'Traumatic limb destruction below the knee'],
    'Long posterior myocutaneous flap technique (Burgess). Anterior incision at tibial tuberosity level. Posterior flap length equals 2/3 of calf diameter. Divide anterior muscles, ligate anterior tibial vessels. Transect tibia and bevel anteriorly. Fibula cut 1 cm proximal to tibia. Divide posterior muscles and create well-padded flap. Identify and transect nerves under tension (allow retraction). Myoplasty and myodesis. Close without tension. Rigid or soft dressing.',
    ['Wound dehiscence or failure to heal (5-15%)', 'Infection/osteomyelitis of stump', 'Phantom limb pain (50-80%)', 'Knee flexion contracture', 'Revision to AKA (10-20%)', 'DVT/PE', 'Depression and psychological impact'],
    'Primary healing rate 70-85%. Ambulatory rehabilitation with prosthesis: 70-80% of BKA patients. Energy expenditure for walking: 40-60% above normal. 5-year survival: 40-60% (reflects systemic vascular disease burden). BKA vastly superior to AKA for rehabilitation.',
    'Preserve the knee at all costs — a BKA patient walks with 40-60% more energy expenditure vs normal, while AKA requires 100%+ more. The knee joint is the most important determinant of ambulatory status.',
  ),

  'aka-amputation': vs(
    'aka-amputation', 'Above-Knee Amputation (AKA)', 'wound-management',
    'Transfemoral amputation performed when below-knee amputation is not feasible due to inadequate perfusion, tissue loss, or knee contracture.',
    ['Failed BKA or non-healing BKA stump', 'Extensive gangrene or infection above the ankle', 'Non-ambulatory patient with severe flexion contracture', 'Insufficient blood flow for BKA healing (absent popliteal pulse, low TcPO2)', 'Extensive trauma above the knee'],
    'Fishmouth or anteroposterior equal flaps at mid-thigh (aim for 12-15 cm stump from greater trochanter). Divide quadriceps and hamstrings. Ligate superficial femoral artery and vein. Transect femur with oscillating saw. Bevel sharp edges. Divide sciatic nerve sharply under tension, allow retraction. Myodesis of adductors to femur through drill holes. Close in layers without tension. Compressive dressing.',
    ['Wound dehiscence', 'Hematoma/seroma', 'Phantom limb pain', 'Hip flexion contracture', 'Prosthetic fitting difficulties', 'DVT/PE', 'Cardiovascular mortality (30-50% at 2 years)'],
    'Primary healing rate 85-95% (better blood supply than BKA level). Ambulatory with prosthesis: only 30-40% of AKA patients (vs 70-80% BKA). Energy expenditure: 100%+ above normal. 2-year mortality: 30-50%. 5-year survival: 30-40%.',
    'Myodesis (suturing adductors to the femur) is essential — without it, the femur abducts and the stump becomes non-functional for prosthetic use.',
  ),

  'vascular-wound-care': vs(
    'vascular-wound-care', 'Wound Care for Vascular Patients', 'wound-management',
    'Specialized wound management for arterial insufficiency ulcers, venous stasis ulcers, and diabetic foot wounds, integrating vascular assessment and revascularization.',
    ['Non-healing lower extremity wound > 4 weeks', 'Arterial ulcer (ABI < 0.9, toe pressure < 40 mmHg)', 'Venous stasis ulcer (typically medial malleolus)', 'Diabetic foot ulcer (Wagner 1-5)', 'Post-surgical wound complication in vascular patient'],
    'Arterial ulcer: revascularization is primary treatment; moist wound environment, avoid compression. Venous ulcer: multilayer compression bandaging (30-40 mmHg — ONLY if ABI > 0.8), wound debridement, skin substitutes for refractory wounds. Diabetic foot: offloading (total contact cast), debridement, infection management (antibiotics per culture), revascularization if ABI < 0.9 or toe pressure < 40. Negative pressure wound therapy (NPWT) for complex wounds. Hyperbaric oxygen for select refractory wounds.',
    ['Wound progression despite treatment', 'Cellulitis and osteomyelitis', 'Amputation', 'Allergic contact dermatitis from dressings', 'Maceration from excessive moisture', 'Revascularization complications', 'Chronic pain and disability'],
    'Venous ulcers: 70-80% healing at 6 months with compression. Arterial ulcers: 80% healing after successful revascularization. Diabetic foot ulcers: 60-70% healing at 20 weeks with standard care. Total contact casting heals 80-90% of neuropathic plantar ulcers.',
    'NEVER apply compression bandaging to an arterial ulcer or a leg with ABI < 0.8 — it will worsen ischemia and can cause tissue necrosis. Always check ABI before compression.',
  ),

  'limb-salvage': vs(
    'limb-salvage', 'Limb Salvage Procedures', 'wound-management',
    'Comprehensive approach combining revascularization, debridement, and reconstructive techniques to preserve a threatened limb and avoid amputation.',
    ['Critical limb ischemia (rest pain, tissue loss — Rutherford 4-6)', 'Diabetic foot with infection and ischemia (neuroischemic ulcer)', 'Failed conservative wound management with viable proximal limb', 'Adequate cardiac function to tolerate intervention', 'Patient motivated for prolonged rehabilitation'],
    'Staged approach: (1) Revascularization first (endovascular or bypass to restore inline flow to foot). (2) Debridement of necrotic tissue and drainage of infection. (3) Minor amputation (toe, ray, transmetatarsal) preserving weight-bearing surface. (4) Wound reconstruction (skin graft, flap, or secondary intention). (5) Offloading and rehabilitation. Angiosome-directed revascularization targets the artery supplying the wound territory.',
    ['Revascularization failure', 'Recurrent or progressive tissue loss', 'Persistent infection requiring proximal amputation', 'Myocardial infarction', 'Renal failure (contrast exposure)', 'Prolonged hospitalization', 'Non-functional salvaged limb'],
    'Limb salvage success: 70-80% at 1 year with modern techniques. Angiosome-directed revascularization improves wound healing by 20-30% over indirect revascularization. 5-year limb preservation: 60-70% in CLI patients treated aggressively.',
    'Angiosome principle: direct revascularization to the artery feeding the wound territory (e.g., posterior tibial for heel, anterior tibial for dorsal foot) significantly improves healing rates.',
  ),

  'diabetic-foot-management': vs(
    'diabetic-foot-management', 'Diabetic Foot Management', 'wound-management',
    'Multidisciplinary management of diabetic foot complications including neuropathic ulcers, Charcot neuroarthropathy, infection, and ischemia.',
    ['Diabetic foot ulcer (Wagner classification 1-5)', 'Charcot foot deformity', 'Diabetic foot infection (mild to severe)', 'Peripheral arterial disease in diabetic patient', 'High-risk foot (neuropathy, deformity, prior ulcer/amputation)'],
    'Assessment: ABI and toe pressures (arterial evaluation), monofilament and vibration testing (neuropathy), probe-to-bone test (osteomyelitis screen), plain films and MRI if infection suspected. Treatment: offloading (total contact cast or removable walker for neuropathic ulcer), sharp debridement of callus and non-viable tissue, culture-directed antibiotics for infection, revascularization if ischemic component (ABI < 0.9 or toe pressure < 40). Charcot acute phase: immobilization in total contact cast 3-6 months.',
    ['Amputation (15-20% of diabetic ulcers lead to amputation)', 'Osteomyelitis (20-60% of moderate-severe infections)', 'Sepsis from foot infection', 'Contralateral limb loss (50% at 3 years after first amputation)', 'Charcot foot collapse and ulceration', 'Death (5-year mortality after amputation: 50-60%)', 'Recurrent ulceration (40-65% at 5 years)'],
    'Total contact casting heals 80-90% of neuropathic plantar ulcers. Multidisciplinary foot teams reduce amputation rates by 50-85%. Revascularization combined with wound care achieves 70% limb salvage in neuroischemic ulcers.',
    'Every diabetic foot ulcer needs a vascular assessment — up to 50% of "neuropathic" ulcers have a significant ischemic component. Check ABI and toe pressures on every patient.',
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

export function getVascularSurgeryEntry(id: string): VascularSurgeryEntry | undefined {
  return VASCULAR_SURGERY_ENTRIES[id];
}

export function searchVascularSurgery(query: string): VascularSurgeryEntry[] {
  const q = query.toLowerCase();
  return Object.values(VASCULAR_SURGERY_ENTRIES).filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.includes(q) ||
    e.indications.some(i => i.toLowerCase().includes(q)) ||
    e.technique.toLowerCase().includes(q) ||
    e.complications.some(c => c.toLowerCase().includes(q)) ||
    e.keyPearl.toLowerCase().includes(q),
  );
}

export function getVascularSurgeryByCategory(cat: VascularSurgeryCategory): VascularSurgeryEntry[] {
  return Object.values(VASCULAR_SURGERY_ENTRIES).filter(e => e.category === cat);
}

export function getVascularSurgeryCount(): number {
  return Object.keys(VASCULAR_SURGERY_ENTRIES).length;
}
