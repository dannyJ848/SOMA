/**
 * Pain Management Database
 *
 * Comprehensive database of pain management entries covering assessment tools,
 * pharmacologic management, interventional procedures, and non-pharmacologic
 * approaches for medical education (SOMA).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type PainCategory =
  | 'acute-pain'
  | 'chronic-pain'
  | 'neuropathic'
  | 'cancer-pain'
  | 'musculoskeletal-pain'
  | 'headache'
  | 'interventional'
  | 'pharmacologic'
  | 'non-pharmacologic';

export interface PainManagementEntry {
  id: string;
  name: string;
  category: PainCategory;
  description: string;
  pathophysiology: string;
  assessment: string;
  management: string;
  medications: string[];
  sideEffects: string[];
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Helper
// ---------------------------------------------------------------------------

const e = (
  id: string,
  name: string,
  category: PainCategory,
  description: string,
  pathophysiology: string,
  assessment: string,
  management: string,
  medications: string[],
  sideEffects: string[],
  keyPearls: string[],
  references: string[],
): PainManagementEntry => ({
  id,
  name,
  category,
  description,
  pathophysiology,
  assessment,
  management,
  medications,
  sideEffects,
  keyPearls,
  references,
});

// ---------------------------------------------------------------------------
// Database Entries
// ---------------------------------------------------------------------------

export const painManagementDatabase: PainManagementEntry[] = [
  // ===== ACUTE PAIN =====
  e(
    'acute-postoperative-pain',
    'Acute Postoperative Pain',
    'acute-pain',
    'Pain following surgical procedures, typically self-limiting and resolving with tissue healing over days to weeks.',
    'Tissue injury triggers nociceptor activation via released inflammatory mediators (prostaglandins, bradykinin, substance P). A-delta fibers carry sharp, well-localized pain; C fibers carry dull, diffuse pain. Peripheral and central sensitization can amplify signals if untreated.',
    'Numeric Rating Scale (NRS) 0-10 at rest and with movement. Assess pain quality, location, and functional impact. Monitor for signs of complications (infection, compartment syndrome). Reassess after each intervention using standardized intervals.',
    'Multimodal analgesia is gold standard: scheduled acetaminophen + NSAID (if not contraindicated) + opioid PRN. Regional anesthesia (nerve blocks, epidurals) when appropriate. ERAS protocols reduce opioid requirements by 30-50%. Transition to oral agents as soon as tolerated.',
    ['Acetaminophen 1g IV/PO q6h', 'Ketorolac 15-30mg IV q6h (max 5 days)', 'Morphine 2-4mg IV q2-4h PRN', 'Oxycodone 5-10mg PO q4-6h PRN', 'Gabapentin 300mg preop (adjunct)', 'Ropivacaine 0.2% for nerve blocks'],
    ['Opioid: Nausea, constipation, sedation, respiratory depression', 'NSAID: GI bleeding, AKI, platelet dysfunction', 'Acetaminophen: Hepatotoxicity at supratherapeutic doses', 'Regional: Nerve injury, local anesthetic toxicity, hematoma'],
    ['Uncontrolled acute postop pain is the strongest modifiable predictor of chronic postsurgical pain', 'Always prescribe bowel regimen with opioids', 'Multimodal analgesia reduces opioid use 25-40%', 'Reassess pain with activity, not just at rest'],
    ['Chou R et al. Management of Postoperative Pain. J Pain. 2016;17(2):131-157', 'ERAS Society Guidelines. World J Surg. 2019'],
  ),

  e(
    'acute-trauma-pain',
    'Acute Trauma Pain',
    'acute-pain',
    'Pain resulting from acute physical injury such as fractures, lacerations, burns, or blunt trauma.',
    'Direct tissue damage activates nociceptors. Inflammatory cascade (histamine, prostaglandins, cytokines) lowers nociceptor thresholds. Bone fractures stimulate periosteal A-delta and C fibers. Burns activate TRPV1 receptors. Sympathetic activation causes tachycardia, hypertension, diaphoresis.',
    'Rapid pain assessment using NRS or Wong-Baker FACES. OPQRST mnemonic for pain history. Rule out life-threatening injuries first (ATLS approach). Serial assessments to detect evolving pathology (compartment syndrome, expanding hematoma).',
    'IV opioids for severe pain (titrate to effect). Fracture stabilization/splinting provides significant relief. Regional anesthesia when feasible (femoral nerve block for hip fracture). Ketamine 0.1-0.3 mg/kg IV for opioid-sparing analgesia. Wound care and local anesthetics for lacerations.',
    ['Morphine 0.1mg/kg IV titrated', 'Fentanyl 1mcg/kg IV (hemodynamically favorable)', 'Ketamine 0.1-0.3mg/kg IV subdissociative', 'Ketorolac 15-30mg IV', 'Lidocaine 1-2% local infiltration', 'Acetaminophen 1g IV'],
    ['Opioid-induced hypotension in hemorrhagic shock', 'Ketamine: Emergence reactions, hypertension', 'Masking evolving surgical pathology with excessive analgesia', 'NSAID risk in coagulopathic/hemorrhaging patients'],
    ['Femoral nerve block reduces opioid need by 50% in hip fractures', 'Ketamine is particularly useful when hemodynamic instability limits opioid use', 'Untreated pain impairs splinting, physical exam, and rehabilitation', 'Always reassess; worsening pain may indicate compartment syndrome'],
    ['ATLS 10th Edition. American College of Surgeons. 2018', 'Motov S et al. Sub-dissociative ketamine. Am J Emerg Med. 2015'],
  ),

  e(
    'acute-renal-colic',
    'Acute Renal Colic',
    'acute-pain',
    'Severe flank pain caused by ureteral obstruction, most commonly from nephrolithiasis. Often described as the worst pain patients have experienced.',
    'Ureteral obstruction causes increased intraluminal pressure, ureteral smooth muscle spasm, and prostaglandin-mediated inflammation. Pain is visceral (dull, colicky) from capsular distension and somatic (sharp) from peritoneal irritation. Referred pain to groin via shared T11-L2 innervation.',
    'NRS for severity. Costovertebral angle tenderness. Urinalysis (hematuria in 85%). Non-contrast CT abdomen/pelvis is gold standard for diagnosis. Assess for infection (fever, pyuria) which constitutes a urologic emergency.',
    'NSAIDs are first-line (ketorolac equivalent to opioids with fewer side effects). IV fluids for hydration. Alpha-blockers (tamsulosin) for medical expulsive therapy for stones <10mm. Urology referral for stones >10mm, infection with obstruction, or intractable pain.',
    ['Ketorolac 30mg IV/IM', 'Ibuprofen 600mg PO', 'Morphine 0.1mg/kg IV PRN', 'Acetaminophen 1g IV (adjunct)', 'Tamsulosin 0.4mg PO daily (MET)', 'Ondansetron 4mg IV for nausea'],
    ['NSAID: Renal vasoconstriction (avoid in CKD)', 'Opioid: Nausea, urinary retention may worsen symptoms', 'Tamsulosin: Orthostatic hypotension, retrograde ejaculation'],
    ['NSAIDs are first-line for renal colic; evidence shows equal or superior efficacy to opioids', 'Obstructing stone + fever/infection = urologic emergency requiring decompression', 'Most stones <5mm pass spontaneously; >10mm usually require intervention', 'IV fluids do not accelerate stone passage but treat dehydration'],
    ['Smith-Bindman R et al. NEJM. 2014;371:1100-10', 'AUA/Endourology Society Guideline on Surgical Management of Stones. 2016'],
  ),

  // ===== CHRONIC PAIN =====
  e(
    'chronic-low-back-pain',
    'Chronic Low Back Pain',
    'chronic-pain',
    'Persistent or recurrent low back pain lasting >12 weeks, the leading cause of disability worldwide. Often multifactorial with biopsychosocial contributors.',
    'Potential pain generators include intervertebral discs (annular tears), facet joints, sacroiliac joints, muscles/ligaments, and nerve roots. Central sensitization develops with chronicity: NMDA-mediated wind-up, glial activation, reduced descending inhibition. Nociplastic pain predominates when structural findings do not correlate with symptoms.',
    'STarT Back screening tool for risk stratification. Oswestry Disability Index (ODI) or Roland-Morris Questionnaire for function. Pain Catastrophizing Scale. PHQ-9/GAD-7 for comorbid depression/anxiety. Red flags: cauda equina, cancer, fracture, infection.',
    'First-line: exercise therapy, CBT, self-management education. Pharmacologic: NSAIDs (short course), duloxetine, muscle relaxants (short-term). Avoid chronic opioids (SPACE trial showed no benefit over nonopioids). Interventional options for refractory cases. Multidisciplinary rehabilitation has best evidence.',
    ['Naproxen 500mg PO BID (short course)', 'Duloxetine 60mg PO daily', 'Cyclobenzaprine 5-10mg PO TID (short-term)', 'Gabapentin 300-1200mg TID (if radicular)', 'Topical diclofenac gel (localized)', 'Acetaminophen 650mg PO q6h (modest benefit)'],
    ['NSAIDs: GI bleeding, CV events, AKI with chronic use', 'Duloxetine: Nausea, dizziness, discontinuation syndrome', 'Muscle relaxants: Sedation, abuse potential (carisoprodol)', 'Gabapentin: Dizziness, sedation, edema'],
    ['Imaging is not indicated in the first 6 weeks without red flags', 'Exercise and CBT have the best long-term evidence for chronic LBP', 'SPACE trial: Opioids no better than nonopioids at 12 months', 'Yellow flags (fear-avoidance, catastrophizing) predict chronicity better than imaging'],
    ['Krebs EE et al. SPACE trial. JAMA. 2018;319(9):872-882', 'Qaseem A et al. ACP Guidelines. Ann Intern Med. 2017;166(7):514-530'],
  ),

  e(
    'fibromyalgia',
    'Fibromyalgia',
    'chronic-pain',
    'Chronic widespread pain syndrome characterized by widespread musculoskeletal pain, fatigue, cognitive dysfunction, and sleep disturbance. Affects 2-4% of the population, predominantly women.',
    'Nociplastic pain (central sensitization without peripheral nociceptive input). Augmented central pain processing demonstrated on fMRI. Deficient descending inhibition (reduced conditioned pain modulation). Neuroinflammation: elevated substance P in CSF, glial activation. Associated with HPA axis dysregulation and autonomic dysfunction.',
    'ACR 2016 criteria: Widespread Pain Index (WPI) >= 7 and Symptom Severity Scale (SSS) >= 5, OR WPI 4-6 and SSS >= 9. Symptoms present >= 3 months. Not explained by another diagnosis. Assess comorbid depression, anxiety, sleep disorders. Exclude hypothyroidism, inflammatory arthritis, vitamin D deficiency.',
    'Patient education about central sensitization (pain neuroscience education). Graduated aerobic exercise is the single most effective intervention. FDA-approved: duloxetine, milnacipran, pregabalin. CBT for coping strategies. Sleep hygiene optimization. Avoid opioids (worsen outcomes in fibromyalgia).',
    ['Duloxetine 60mg PO daily', 'Pregabalin 75-225mg PO BID', 'Milnacipran 50mg PO BID', 'Amitriptyline 10-25mg PO qhs (off-label)', 'Cyclobenzaprine 5mg PO qhs (off-label, low dose)'],
    ['Duloxetine: Nausea, dry mouth, sexual dysfunction, discontinuation syndrome', 'Pregabalin: Dizziness, somnolence, weight gain, peripheral edema', 'Milnacipran: Nausea, headache, hypertension', 'Amitriptyline: Sedation, weight gain, anticholinergic effects, QT prolongation'],
    ['Opioids are NOT recommended for fibromyalgia and may worsen central sensitization', 'Exercise is the highest-rated evidence-based treatment', 'Pain neuroscience education reduces fear-avoidance and catastrophizing', '30% pain reduction is a realistic and meaningful treatment goal'],
    ['Clauw DJ. Fibromyalgia: A Clinical Review. JAMA. 2014;311(15):1547-55', 'Macfarlane GJ et al. EULAR Guidelines. Ann Rheum Dis. 2017;76(2):318-328'],
  ),

  e(
    'complex-regional-pain-syndrome',
    'Complex Regional Pain Syndrome (CRPS)',
    'chronic-pain',
    'Chronic pain condition typically affecting a limb after injury, characterized by disproportionate pain, sensory changes, vasomotor/sudomotor abnormalities, and motor/trophic changes.',
    'Type I (no nerve injury) and Type II (with nerve injury). Involves neurogenic inflammation (CGRP, substance P), peripheral and central sensitization, sympathetic-afferent coupling, autoimmune mechanisms (autoantibodies against autonomic receptors), and neuroplastic cortical changes (altered body schema).',
    'Budapest diagnostic criteria: continuing pain disproportionate to inciting event, plus symptoms in 3 of 4 categories and signs in 2 of 4 categories (sensory, vasomotor, sudomotor/edema, motor/trophic). Three-phase bone scan and thermography may support diagnosis. Exclude other diagnoses.',
    'Early aggressive physical/occupational therapy is paramount (graded motor imagery, mirror therapy). Pharmacologic: gabapentinoids, bisphosphonates (early), corticosteroids (acute flare), low-dose naltrexone. Interventional: sympathetic nerve blocks, SCS (strongest interventional evidence). Psychological support essential.',
    ['Gabapentin 300-1200mg TID', 'Pregabalin 75-150mg BID', 'Alendronate 40mg PO daily x 8 weeks', 'Prednisone taper (acute flare)', 'Nifedipine 10mg TID (vasomotor)', 'Low-dose naltrexone 1.5-4.5mg PO qhs'],
    ['Gabapentinoids: Dizziness, sedation, edema', 'Bisphosphonates: GI upset, osteonecrosis of jaw (rare at short course)', 'Corticosteroids: Weight gain, hyperglycemia, immunosuppression', 'Sympathetic block: Pneumothorax (stellate), vascular injury'],
    ['Early diagnosis and physical therapy are the most important prognostic factors', 'SCS has the strongest evidence for interventional treatment of CRPS', 'Mirror therapy and graded motor imagery address cortical reorganization', 'CRPS can resolve spontaneously in some cases, especially with early treatment'],
    ['Harden RN et al. Validation of Budapest Criteria. Pain Med. 2010;11(8):1257-1273', 'Birklein F et al. CRPS. Nat Rev Dis Primers. 2015;1:15022'],
  ),

  // ===== NEUROPATHIC PAIN =====
  e(
    'diabetic-peripheral-neuropathy',
    'Diabetic Peripheral Neuropathy',
    'neuropathic',
    'The most common cause of neuropathic pain, affecting up to 50% of diabetic patients. Distal symmetric polyneuropathy (stocking-glove pattern) is the classic presentation.',
    'Hyperglycemia causes polyol pathway activation (sorbitol accumulation), advanced glycation end-product formation, PKC activation, oxidative stress, and microvascular damage. Small fibers (C and A-delta) affected early, causing burning pain and autonomic dysfunction. Large fiber involvement causes numbness, loss of proprioception.',
    'Michigan Neuropathy Screening Instrument or Toronto Clinical Neuropathy Score. Monofilament testing (10g Semmes-Weinstein) for protective sensation. DN4 for neuropathic pain screening. HbA1c, fasting glucose. Rule out other causes: B12, TSH, SPEP, HIV. Nerve conduction studies if atypical presentation.',
    'Optimize glycemic control (may slow progression, does not reverse damage). First-line analgesics: duloxetine (FDA-approved), pregabalin (FDA-approved), gabapentin. TCAs effective but more side effects. Topical capsaicin 8% patch for localized pain. Foot care education essential to prevent ulceration.',
    ['Duloxetine 60mg PO daily', 'Pregabalin 75-150mg PO BID', 'Gabapentin 300-1200mg PO TID', 'Amitriptyline 25-75mg PO qhs', 'Capsaicin 8% patch q3 months', 'Lidocaine 5% patch (localized)'],
    ['Duloxetine: Nausea, dizziness (usually transient)', 'Pregabalin/Gabapentin: Dizziness, somnolence, weight gain, edema', 'TCAs: Anticholinergic effects, cardiac risk, sedation', 'Capsaicin patch: Application site pain, transient BP elevation'],
    ['Tight glycemic control prevents neuropathy onset but does not reliably reverse it', 'NNT for 50% pain reduction: TCAs ~3, duloxetine ~6, pregabalin ~7', 'Always check feet for ulcers at every visit in diabetic neuropathy patients', 'Combination therapy (different mechanisms) often more effective than monotherapy'],
    ['Pop-Busui R et al. ADA Position Statement. Diabetes Care. 2017;40(1):136-154', 'Finnerup NB et al. NeuPSIG Guidelines. Lancet Neurol. 2015;14(2):162-173'],
  ),

  e(
    'postherpetic-neuralgia',
    'Postherpetic Neuralgia',
    'neuropathic',
    'Neuropathic pain persisting >= 90 days after herpes zoster (shingles) rash onset. Risk increases with age; affects 10-18% of herpes zoster patients overall, up to 50% of those >60 years.',
    'Varicella-zoster virus reactivation damages sensory ganglia and peripheral nerves. Wallerian degeneration of sensory axons with dorsal horn atrophy. Loss of C-fiber nociceptors leads to denervation supersensitivity. Central sensitization with expanded receptive fields. Both allodynia (intact A-beta fiber input to sensitized dorsal horn) and sensory loss coexist.',
    'Clinical diagnosis based on pain in prior zoster dermatome. Characterize pain quality: constant burning, lancinating paroxysms, allodynia. QST can identify phenotype (irritable vs. denervation nociceptor). VAS/NRS severity. Assess sleep disruption, depression, functional impact.',
    'Prevention is paramount: Shingrix vaccine (>90% efficacy for zoster and PHN). First-line: gabapentinoids, TCAs, lidocaine 5% patch. Capsaicin 8% patch provides 3-month relief from single application. Combination therapy for refractory cases. Opioids reserved for severe cases unresponsive to first-line agents.',
    ['Gabapentin 300-1200mg PO TID', 'Pregabalin 75-150mg PO BID', 'Nortriptyline 25-75mg PO qhs', 'Lidocaine 5% patch (up to 3)', 'Capsaicin 8% patch q3 months', 'Tramadol 50-100mg PO q6h (second-line)'],
    ['Gabapentinoids: Dizziness, sedation, ataxia in elderly', 'TCAs: Anticholinergic effects, cardiac conduction changes, falls risk', 'Lidocaine patch: Skin irritation', 'Capsaicin: Severe application-site pain (pretreat with topical anesthetic)'],
    ['Shingrix vaccine is the most effective prevention strategy (>90% efficacy)', 'Elderly patients respond better to topical agents (fewer systemic side effects)', 'Early antiviral treatment of zoster may reduce PHN risk', 'Lidocaine patch is preferred first-line in elderly due to minimal systemic effects'],
    ['Dworkin RH et al. Recommendations for PHN Management. Mayo Clin Proc. 2014;89(3):361-372', 'CDC Advisory Committee. Shingrix Recommendations. MMWR. 2018'],
  ),

  e(
    'trigeminal-neuralgia',
    'Trigeminal Neuralgia',
    'neuropathic',
    'Severe, unilateral, paroxysmal facial pain in one or more trigeminal nerve divisions, often described as electric shock-like. The "suicide disease" due to severity.',
    'Classical form caused by neurovascular compression (usually superior cerebellar artery) of trigeminal nerve root entry zone, causing focal demyelination and ectopic impulse generation. Secondary forms from MS plaques or tumors. Ephaptic transmission (cross-talk) between myelinated and unmyelinated fibers at compression site.',
    'ICHD-3 diagnostic criteria: paroxysmal attacks (fraction of a second to 2 min), V2/V3 distribution, triggered by innocuous stimuli (chewing, talking, wind). MRI with thin-cut brainstem sequences to identify neurovascular compression and exclude secondary causes (MS, tumor). Neurological exam should be normal in classical form.',
    'First-line: Carbamazepine (NNT ~2) or oxcarbazepine. Dose titration to effect. For refractory cases: microvascular decompression (MVD) is most durable surgical option (70-80% long-term relief). Gamma knife radiosurgery for poor surgical candidates. Percutaneous procedures (balloon compression, glycerol rhizolysis, RF thermocoagulation).',
    ['Carbamazepine 100mg BID, titrate to 200-400mg TID', 'Oxcarbazepine 150mg BID, titrate to 300-600mg BID', 'Baclofen 10-20mg TID (adjunct)', 'Lamotrigine 200-400mg daily (adjunct)', 'Botulinum toxin A (emerging, off-label)'],
    ['Carbamazepine: Hyponatremia, aplastic anemia, Stevens-Johnson syndrome, hepatotoxicity, dizziness', 'Oxcarbazepine: Hyponatremia (more common than CBZ), dizziness, GI upset', 'Baclofen: Sedation, withdrawal seizures if abruptly stopped', 'MVD: CSF leak, hearing loss, stroke (rare)'],
    ['Carbamazepine response is almost diagnostic of trigeminal neuralgia', 'Check HLA-B*1502 in Asian patients before carbamazepine (Stevens-Johnson risk)', 'MRI is essential to exclude secondary causes (MS, CPA tumor)', 'MVD provides the most durable surgical relief (70-80% at 10 years)'],
    ['Cruccu G et al. AAN/EAN Guidelines. Eur J Neurol. 2016;23(1):27-33', 'Zakrzewska JM et al. Trigeminal Neuralgia. BMJ. 2014;348:g474'],
  ),

  e(
    'central-post-stroke-pain',
    'Central Post-Stroke Pain',
    'neuropathic',
    'Central neuropathic pain syndrome following stroke, classically associated with thalamic infarction (Dejerine-Roussy syndrome) but can follow any lesion affecting the spinothalamocortical pathway.',
    'Lesion of the spinothalamic pathway at any level causes disinhibition and reorganization of pain processing. Thalamic deafferentation leads to spontaneous neuronal firing. Loss of normal sensory gating and altered cortical processing. May involve both loss of inhibition and gain of excitatory function.',
    'Clinical diagnosis: neuropathic pain in body area corresponding to stroke-affected territory, with sensory abnormalities (especially altered temperature and pinprick sensation). Onset typically weeks to months post-stroke. DN4 or LANSS screening. MRI confirms stroke location overlapping spinothalamic pathway.',
    'Treatment is challenging with modest evidence. Amitriptyline and lamotrigine have best evidence. Pregabalin/gabapentin used commonly. rTMS (repetitive transcranial magnetic stimulation) of motor cortex shows promise. Deep brain stimulation for refractory cases. Rehabilitation and psychological support.',
    ['Amitriptyline 25-75mg PO qhs', 'Lamotrigine 200-400mg PO daily', 'Pregabalin 75-150mg PO BID', 'Gabapentin 300-1200mg PO TID', 'Tramadol 50-100mg PO q6h (adjunct)'],
    ['Amitriptyline: Cardiac risk, anticholinergic effects (especially problematic in stroke patients)', 'Lamotrigine: Stevens-Johnson syndrome (slow titration mandatory), headache', 'Pregabalin/Gabapentin: Sedation, dizziness, gait instability'],
    ['Central post-stroke pain is underdiagnosed; screen all stroke patients with new pain', 'Onset is typically delayed weeks to months after the stroke event', 'Altered temperature sensation in the affected area is highly suggestive', 'rTMS of motor cortex is an emerging non-invasive treatment option'],
    ['Klit H et al. Central post-stroke pain. Lancet Neurol. 2009;8(9):857-868', 'EFNS Guidelines on Central Neuropathic Pain. Eur J Neurol. 2010;17(5):649-660'],
  ),

  // ===== CANCER PAIN =====
  e(
    'cancer-bone-pain',
    'Cancer-Related Bone Pain',
    'cancer-pain',
    'The most common type of cancer pain, caused by primary bone tumors or metastatic disease. Affects 75% of patients with bone metastases. Breast, prostate, and lung cancers are the most common sources.',
    'Tumor cells and associated stromal cells release osteoclast-activating factors (RANKL, PTHrP, IL-6), causing osteolysis and periosteal stretching. Acidic microenvironment activates TRPV1 and ASIC channels on sensory neurons. Tumor cells release NGF, endothelin, and prostaglandins sensitizing nociceptors. Pathological fractures cause acute-on-chronic pain.',
    'Visual Analog Scale with body diagram for pain mapping. Imaging: plain radiographs, bone scan (sensitive), PET-CT (specific), MRI for spinal cord compression. Assess for oncologic emergencies: spinal cord compression, pathological fracture risk (Mirels scoring). Brief Pain Inventory for functional impact.',
    'Follow WHO pain ladder with modifications. NSAIDs effective for bone pain due to prostaglandin involvement. Radiation therapy (single fraction 8 Gy effective for localized pain). Bisphosphonates/denosumab reduce skeletal events. Radionuclides (Ra-223) for diffuse osseous disease. Interventional: vertebroplasty, nerve blocks.',
    ['Ibuprofen 400-600mg TID or Celecoxib 200mg BID', 'Morphine ER titrated to effect', 'Dexamethasone 4-8mg PO daily (perilesional edema)', 'Zoledronic acid 4mg IV q4 weeks', 'Denosumab 120mg SC q4 weeks', 'Radiation therapy 8 Gy single fraction'],
    ['Opioids: Constipation, nausea, sedation, respiratory depression', 'NSAIDs: GI bleeding, renal impairment (thrombocytopenia risk in cancer patients)', 'Bisphosphonates: Renal impairment, osteonecrosis of jaw, hypocalcemia', 'Denosumab: Hypocalcemia, ONJ, rebound bone loss on discontinuation', 'Dexamethasone: Hyperglycemia, immunosuppression, myopathy'],
    ['NSAIDs are particularly effective for bone metastatic pain due to COX-2/prostaglandin mechanism', 'Single fraction radiation (8 Gy) is as effective as fractionated for palliation', 'Always assess for spinal cord compression in patients with spine metastases and new symptoms', 'Breakthrough pain dosing: 10-15% of total 24-hour opioid dose'],
    ['Fallon M et al. ESMO Guidelines on Cancer Pain. Ann Oncol. 2018;29(Suppl 4):iv166-iv191', 'WHO Guidelines for Pharmacological Management of Cancer Pain. 2018'],
  ),

  e(
    'cancer-breakthrough-pain',
    'Cancer Breakthrough Pain',
    'cancer-pain',
    'Transient exacerbation of pain occurring despite adequate background analgesia. Affects 40-80% of cancer patients on around-the-clock opioids.',
    'Three subtypes: incident (predictable, movement-related), spontaneous (unpredictable), and end-of-dose failure. Mechanisms mirror underlying cancer pain (somatic, visceral, neuropathic) but represent transient escalation above controlled baseline. Rapid onset (median 3 minutes to peak) and short duration (median 30 minutes).',
    'Distinguish from background pain inadequacy (which requires baseline dose adjustment). Characterize onset speed, duration, frequency, triggers, and predictability. Alberta Breakthrough Pain Assessment Tool. Ensure baseline analgesia is optimized before addressing breakthrough separately.',
    'Rapid-onset opioids matched to pain kinetics. Oral transmucosal fentanyl citrate (OTFC), fentanyl buccal tablet, or intranasal fentanyl for rapid onset. Dose: individually titrated (NOT calculated from background dose). Pre-emptive dosing for predictable incident pain. Optimize baseline regimen if >4 episodes/day.',
    ['Fentanyl buccal tablet 100-800mcg (titrate)', 'Oral transmucosal fentanyl citrate 200-1600mcg', 'Fentanyl nasal spray 100-400mcg', 'Immediate-release morphine 10-15% of 24h dose', 'Immediate-release oxycodone 10-15% of 24h dose'],
    ['Transmucosal fentanyl: Respiratory depression, dizziness, nausea', 'All rapid-onset opioids carry high abuse potential', 'Application site reactions with buccal/sublingual formulations', 'Risk of dose stacking with frequent episodes'],
    ['Rapid-onset transmucosal fentanyl better matches the kinetics of breakthrough pain than oral IR opioids', 'Transmucosal fentanyl products are NOT interchangeable (different bioavailability)', 'More than 4 breakthrough episodes/day suggests inadequate baseline analgesia', 'All transmucosal fentanyl products require REMS programs (TIRF REMS)'],
    ['Davies AN et al. Breakthrough Cancer Pain. J Pain Symptom Manage. 2009;38(6):e1-e3', 'NCCN Adult Cancer Pain Guidelines. Version 2.2024'],
  ),

  // ===== MUSCULOSKELETAL PAIN =====
  e(
    'osteoarthritis-pain',
    'Osteoarthritis Pain',
    'musculoskeletal-pain',
    'Pain from degenerative joint disease, the most common form of arthritis. Affects over 300 million people worldwide. Knee and hip are the most disabling locations.',
    'Multifactorial: cartilage degradation exposes subchondral bone with nociceptor-rich periosteum. Synovial inflammation (low-grade) with inflammatory mediator release. Subchondral bone marrow lesions correlate strongly with pain. Central sensitization develops in many patients (explains widespread pain and poor correlation with imaging).',
    'ACR clinical criteria for knee/hip OA. Weight-bearing radiographs (KL grading: 0-4). Pain with activity, morning stiffness <30 minutes, crepitus. WOMAC or KOOS questionnaires for function. Assess for central sensitization if pain exceeds structural findings.',
    'Core treatments: exercise (quadriceps strengthening, aerobic), weight management (5% loss reduces pain significantly), education. Pharmacologic: topical NSAIDs first-line for knee/hand OA, oral NSAIDs, duloxetine. Intra-articular: corticosteroids (short-term), hyaluronic acid (controversial). Joint replacement for end-stage disease.',
    ['Topical diclofenac 1% gel QID', 'Oral naproxen 500mg BID (short course)', 'Acetaminophen 650mg QID (modest effect)', 'Duloxetine 60mg daily', 'IA triamcinolone 40mg (knee)', 'IA hyaluronic acid (variable evidence)'],
    ['Topical NSAID: Skin irritation, minimal systemic effects', 'Oral NSAID: GI bleeding, CV risk, renal impairment', 'IA corticosteroid: Cartilage damage with repeated injections, infection risk', 'Duloxetine: Nausea, fatigue, discontinuation syndrome'],
    ['Topical NSAIDs are first-line for knee and hand OA with lower systemic risk than oral NSAIDs', 'Exercise is the single most important intervention (NNT ~4 for clinically meaningful improvement)', 'Repeated IA corticosteroid injections may accelerate cartilage loss (JAMA 2017)', 'Imaging severity often does not correlate with pain severity (central sensitization)'],
    ['Kolasinski SL et al. ACR/AF Guidelines for OA. Arthritis Care Res. 2020;72(2):149-162', 'Bannuru RR et al. OARSI Guidelines. Osteoarthritis Cartilage. 2019;27(11):1578-1589'],
  ),

  e(
    'myofascial-pain-syndrome',
    'Myofascial Pain Syndrome',
    'musculoskeletal-pain',
    'Regional pain disorder characterized by trigger points in taut bands of skeletal muscle that produce local and referred pain patterns. Extremely common but frequently underdiagnosed.',
    'Trigger points represent areas of sustained muscle contraction with local ischemia, energy crisis, and sensitized nociceptors. Integrated hypothesis: abnormal acetylcholine release at motor endplate -> sustained sarcomere contraction -> local ischemia -> release of sensitizing substances (substance P, CGRP, bradykinin). Peripheral and central sensitization develop.',
    'Clinical diagnosis: palpable taut band with hyperirritable spot (trigger point), characteristic referred pain pattern on compression, local twitch response, restricted range of motion. No definitive laboratory or imaging test. Distinguish from fibromyalgia (regional vs. widespread, trigger points vs. tender points).',
    'Identify and address perpetuating factors (posture, ergonomics, stress, sleep). Trigger point injection (lidocaine or dry needling) provides immediate relief. Stretch-and-spray technique. Physical therapy with stretching and strengthening. Topical agents (lidocaine patch, menthol). Muscle relaxants short-term for acute flares.',
    ['Lidocaine 1% for trigger point injection', 'Dry needling (no medication)', 'Cyclobenzaprine 5-10mg PO qhs', 'Tizanidine 2-4mg PO TID', 'Topical lidocaine 5% patch', 'Topical menthol/methyl salicylate'],
    ['Trigger point injection: Post-injection soreness, bleeding, infection (rare), pneumothorax (upper trapezius/paraspinal)', 'Cyclobenzaprine: Sedation, dry mouth, dizziness', 'Tizanidine: Hypotension, sedation, hepatotoxicity'],
    ['Trigger point injection with lidocaine or dry needling provides immediate relief', 'Must address perpetuating factors (posture, ergonomics, stress) for lasting benefit', 'Referred pain patterns are reproducible and predictable (Travell and Simons maps)', 'Myofascial pain is the most common reason for referral to pain clinics'],
    ['Travell JG, Simons DG. Myofascial Pain and Dysfunction: The Trigger Point Manual. 3rd Ed.', 'Shah JP et al. Myofascial Trigger Points. Curr Pain Headache Rep. 2015;19(3):1-12'],
  ),

  // ===== HEADACHE =====
  e(
    'migraine',
    'Migraine',
    'headache',
    'A primary headache disorder affecting 12-15% of the global population. Characterized by recurrent episodes of moderate-severe, typically unilateral, pulsating headache with associated features.',
    'Cortical spreading depression (CSD) triggers aura and activates the trigeminovascular system. Trigeminal afferents release CGRP, substance P, and neurokinin A, causing neurogenic inflammation and meningeal vasodilation. Central sensitization of trigeminal nucleus caudalis produces cutaneous allodynia. Brainstem nuclei (PAG, locus coeruleus) dysfunction underlies migraine susceptibility.',
    'ICHD-3 diagnostic criteria: >= 5 attacks lasting 4-72h with at least 2 of: unilateral, pulsating, moderate-severe, aggravated by activity; plus at least 1 of: nausea/vomiting, photophobia and phonophobia. MIDAS or HIT-6 for disability assessment. Red flags (SNOOP mnemonic) warrant neuroimaging.',
    'Acute: Triptans are first-line specific therapy. NSAIDs for mild-moderate attacks. CGRP receptor antagonists (gepants) for triptan-intolerant. Preventive (>= 4 days/month): CGRP monoclonal antibodies, topiramate, propranolol, amitriptyline, valproate. Lifestyle: sleep hygiene, hydration, trigger avoidance.',
    ['Sumatriptan 50-100mg PO or 6mg SC', 'Rizatriptan 10mg PO (MLT)', 'Ubrogepant 50-100mg PO', 'Erenumab 70-140mg SC monthly (prevention)', 'Topiramate 50-100mg PO daily (prevention)', 'Propranolol 40-160mg PO daily (prevention)'],
    ['Triptans: Chest tightness, triptan sensations, contraindicated in CAD/uncontrolled HTN', 'Gepants: Nausea, somnolence, minimal contraindications', 'CGRP mAbs: Injection site reactions, constipation', 'Topiramate: Cognitive dysfunction, paresthesias, weight loss, kidney stones, teratogenic', 'Propranolol: Bradycardia, fatigue, bronchospasm, depression'],
    ['CGRP-targeted therapies have revolutionized migraine prevention with fewer side effects', 'Medication overuse headache develops with acute medication use > 10-15 days/month', 'Cutaneous allodynia indicates central sensitization and predicts poorer triptan response if treatment is delayed', 'Triptans are contraindicated in hemiplegic migraine and basilar-type aura'],
    ['Ashina M et al. Migraine. NEJM. 2020;383(19):1866-1876', 'AHS Consensus on Integrating CGRP mAbs into Practice. Headache. 2019;59(1):1-18'],
  ),

  e(
    'tension-type-headache',
    'Tension-Type Headache',
    'headache',
    'The most common primary headache, affecting up to 80% of the population at some point. Characterized by bilateral, non-pulsating, mild-moderate pressure-like headache without significant associated features.',
    'Episodic form involves peripheral myofascial mechanisms: pericranial muscle tenderness, myofascial trigger points. Chronic form develops central sensitization with reduced pain thresholds and impaired descending inhibition. Stress, poor posture, sleep disruption, and jaw clenching are common contributors.',
    'ICHD-3 criteria: bilateral, pressing/tightening quality, mild-moderate intensity, not aggravated by routine physical activity; no nausea (or mild nausea in chronic), no vomiting, no more than one of photophobia or phonophobia. Classify: infrequent episodic (<1 day/month), frequent episodic (1-14 days/month), chronic (>15 days/month for >3 months).',
    'Episodic: Simple analgesics (ibuprofen, acetaminophen). Limit to <2 days/week to prevent medication overuse headache. Chronic: Amitriptyline is best-studied preventive. Stress management, physical therapy, posture correction, biofeedback. Avoid opioids and butalbital-containing combinations.',
    ['Ibuprofen 400-600mg PO PRN', 'Acetaminophen 1000mg PO PRN', 'Naproxen 500mg PO PRN', 'Amitriptyline 10-75mg PO qhs (chronic prevention)', 'Mirtazapine 15-30mg PO qhs (alternative preventive)'],
    ['NSAIDs: GI upset, renal risk with frequent use', 'Acetaminophen: Hepatotoxicity with overuse', 'Amitriptyline: Sedation, weight gain, dry mouth, cardiac risk', 'Medication overuse headache from frequent analgesic use'],
    ['Limit acute medication to <2 days/week to prevent medication overuse headache', 'Amitriptyline is the only well-studied preventive for chronic tension-type headache', 'Pericranial tenderness is the most significant objective finding', 'Chronic TTH and chronic migraine frequently overlap and may require similar approaches'],
    ['Bendtsen L et al. EFNS Guideline on TTH. Eur J Neurol. 2010;17(11):1318-1325', 'IHS Classification (ICHD-3). Cephalalgia. 2018;38(1):1-211'],
  ),

  e(
    'cluster-headache',
    'Cluster Headache',
    'headache',
    'A primary trigeminal autonomic cephalalgia (TAC) characterized by severe unilateral orbital/temporal pain with ipsilateral autonomic features. The most severe primary headache syndrome.',
    'Hypothalamic activation (posterior hypothalamus is the pacemaker). Trigeminovascular system activation causes severe periorbital pain. Trigeminal-autonomic reflex produces ipsilateral parasympathetic symptoms (tearing, nasal congestion). Circadian and circannual periodicity linked to hypothalamic clock. More common in males (3:1).',
    'ICHD-3: severe unilateral orbital/supraorbital/temporal pain lasting 15-180 min, with at least 1 ipsilateral autonomic feature (tearing, nasal congestion, ptosis, miosis, eyelid edema, forehead sweating) or restlessness. Frequency: every other day to 8/day. Episodic (remission > 3 months) or chronic. MRI brain to exclude secondary causes.',
    'Acute: High-flow oxygen (12-15 L/min via non-rebreather for 15 min) is first-line. Sumatriptan 6mg SC or zolmitriptan nasal spray. Transitional: Prednisone taper, occipital nerve block. Preventive: Verapamil (first-line, ECG monitoring), lithium, galcanezumab (FDA-approved for episodic).',
    ['Oxygen 12-15 L/min non-rebreather x 15 min', 'Sumatriptan 6mg SC', 'Zolmitriptan 5mg nasal spray', 'Verapamil 240-960mg PO daily (prevention)', 'Prednisone taper (transitional bridge)', 'Galcanezumab 300mg SC monthly (episodic)'],
    ['High-dose verapamil: Heart block, constipation, edema (ECG monitoring mandatory)', 'Sumatriptan SC: Injection site pain, triptan sensations', 'Lithium: Narrow therapeutic window, thyroid/renal toxicity, tremor', 'Prednisone: Avascular necrosis, hyperglycemia (short-term use)'],
    ['High-flow oxygen is first-line acute treatment (NNT ~3, no side effects)', 'Verapamil requires ECG monitoring at baseline and with each dose increase (heart block risk)', 'Cluster headache patients are often restless/agitated during attacks (unlike migraine patients who prefer stillness)', 'Galcanezumab is the first FDA-approved specific preventive for cluster headache (2019)'],
    ['Robbins MS et al. AHS Guidelines for Cluster Headache. Headache. 2016;56(7):1093-1106', 'Goadsby PJ et al. Cluster Headache. Lancet Neurol. 2024;23(5):528-540'],
  ),

  // ===== ASSESSMENT TOOLS =====
  e(
    'visual-analog-scale',
    'Visual Analog Scale (VAS)',
    'acute-pain',
    'A continuous, unidimensional pain intensity measure consisting of a 100mm horizontal line anchored at "no pain" and "worst pain imaginable." The patient marks the point representing current pain intensity.',
    'Based on the psychophysical principle that subjective sensory intensity can be mapped onto a linear continuum. Provides a ratio-level measurement with greater sensitivity to change than categorical scales. The marked distance in mm from "no pain" provides the score.',
    '100mm horizontal line with anchors. Patient marks a point; distance measured in mm. Interpretation: 0-4mm no pain, 5-44mm mild, 45-74mm moderate, 75-100mm severe. MCID: 13-19mm depending on context. Superior sensitivity to change makes it preferred for research.',
    'Primarily used in clinical research settings. Administer on paper or electronic tablet. Ensure patient understands the concept. Measure with ruler. Serial measurements track treatment response. May be less practical in clinical settings than NRS due to measurement requirement.',
    [],
    ['Requires physical or electronic measurement device', 'Slightly more complex to administer than NRS', 'Less practical in telephone follow-up'],
    ['More sensitive to change than NRS, making it preferred in research', 'MCID is 13-19mm (approximately 1.3-1.9 on a 0-10 scale)', 'Not suitable for telephone assessment (requires visual component)', 'Electronic versions eliminate measurement variability'],
    ['Hawker GA et al. Measures of Adult Pain. Arthritis Care Res. 2011;63(S11):S240-S252', 'Hjermstad MJ et al. Pain Assessment Tools. J Clin Oncol. 2011;29(26):3631-3638'],
  ),

  e(
    'numeric-rating-scale',
    'Numeric Rating Scale (NRS)',
    'acute-pain',
    'The most widely used clinical pain assessment tool. An 11-point numeric scale (0-10) where 0 = no pain and 10 = worst pain imaginable. Can be administered verbally, written, or electronically.',
    'Based on ordinal scaling of pain intensity. Validated across multiple populations and languages. Correlates strongly with VAS (r = 0.86-0.95). Simple cognitive processing makes it accessible to most adults and adolescents. Allows verbal administration for bedside or telephone use.',
    'Ask patient to rate pain on 0-10 scale. Specify context: at rest, with movement, worst in past 24 hours, average. Interpretation: 0 = none, 1-3 = mild, 4-6 = moderate, 7-10 = severe. MCID: 1.0-2.0 points. 30% reduction = "moderately important change." 50% reduction = "substantially important change."',
    'Administer at each clinical encounter. Document initial score, intervention, and reassessment score. Set functional pain goals with patient (not necessarily zero). Use alongside functional measures (activity, sleep). The 2001 JCAHO "pain as 5th vital sign" initiative drove widespread adoption.',
    [],
    ['Subjective and affected by psychological state', 'Single-dimension measure (intensity only)', 'Not validated in cognitively impaired or young children'],
    ['Most practical pain scale for clinical use (verbal administration, no equipment needed)', 'Always assess pain with activity, not just at rest', '30% reduction is considered clinically meaningful', 'Combine with functional assessment for a complete picture (pain alone is insufficient)'],
    ['Farrar JT et al. Clinical Importance of Changes in Chronic Pain Intensity. Pain. 2001;94(2):149-158', 'JCAHO Pain Standards. Joint Commission on Accreditation of Healthcare Organizations. 2001'],
  ),

  e(
    'wong-baker-faces-scale',
    'Wong-Baker FACES Pain Rating Scale',
    'acute-pain',
    'A pictorial pain scale using six cartoon faces ranging from happy/no hurt to crying/worst hurt. Designed for children ages 3+ and adults with communication barriers.',
    'Uses facial expressions as universal indicators of pain intensity, bypassing language and numeric comprehension requirements. Based on the principle that facial expression is a reliable pain behavior across cultures. Validated in pediatric, geriatric, and cross-cultural populations.',
    'Six faces scored 0, 2, 4, 6, 8, 10. Ask the patient to point to the face that best shows how much they hurt. Can be used in children >= 3 years, adults with cognitive impairment, and language barriers. Explain that the faces show how much something hurts, not how they feel emotionally (sad vs. pain).',
    'Standard assessment tool in pediatric settings. Post visually in patient rooms. Use alongside behavioral observation in preverbal children. For cognitively impaired adults, combine with PAINAD or behavioral assessment. Available in multiple languages and culturally adapted versions.',
    [],
    ['May confuse emotional distress with pain intensity', 'Less precise than numeric scales', 'Potential for affective bias (choosing sad face for emotional reasons)'],
    ['Clarify that faces represent pain intensity, not emotions (key instruction for valid results)', 'Validated for children ages 3 and older', 'Useful for adults with language barriers, cognitive impairment, or low literacy', 'Available in multiple languages and cultural adaptations'],
    ['Wong DL, Baker CM. Pain in Children. Pediatr Nurs. 1988;14(1):9-17', 'Garra G et al. Validation of the Wong-Baker FACES Scale. Acad Emerg Med. 2010;17(1):50-54'],
  ),

  // ===== PHARMACOLOGIC =====
  e(
    'who-pain-ladder',
    'WHO Analgesic Ladder',
    'pharmacologic',
    'Three-step framework for rational pain management developed by WHO in 1986 for cancer pain, now applied broadly. Step 1: non-opioid +/- adjuvant; Step 2: weak opioid + non-opioid +/- adjuvant; Step 3: strong opioid +/- non-opioid +/- adjuvant.',
    'Based on the principle of matching analgesic potency to pain severity. Non-opioids inhibit peripheral and central prostaglandin synthesis. Weak opioids provide partial mu-receptor activation. Strong opioids provide full mu-agonism with no ceiling effect. Adjuvants target specific pain mechanisms. Multimodal approach exploits complementary mechanisms.',
    'Assess pain severity (NRS) to determine appropriate step. Step 1: Mild pain (1-3/10). Step 2: Moderate pain (4-6/10). Step 3: Severe pain (7-10/10). Modern "elevator" concept: skip steps for severe pain. Reassess regularly; step up if inadequate, step down when improved.',
    'Step 1: Acetaminophen +/- NSAID. Step 2: Codeine or tramadol + Step 1. Step 3: Morphine, oxycodone, hydromorphone, or fentanyl + Step 1 medications. Key principles: "by the clock" (scheduled), "by the mouth" (oral preferred), "by the ladder" (severity-matched), "for the individual" (personalized). Modern 4th step includes interventional procedures.',
    ['Step 1: Acetaminophen 1g q6h, Ibuprofen 400mg q6h', 'Step 2: Tramadol 50-100mg q6h, Codeine 30-60mg q4h', 'Step 3: Morphine ER 15-30mg q12h, Oxycodone 5-15mg q4-6h', 'Adjuvants at any step: Gabapentin, Duloxetine, Dexamethasone'],
    ['Step 1: GI bleeding, hepatotoxicity, CV risk', 'Step 2: Seizures (tramadol), variable metabolism (codeine), serotonin syndrome', 'Step 3: Respiratory depression, constipation, dependence, tolerance, hyperalgesia', 'Adjuvants: Agent-specific side effects'],
    ['Originally achieved 70-90% efficacy for cancer pain when properly applied', 'Continue non-opioids at higher steps for additive/synergistic effect (opioid-sparing)', 'Modern modification includes a 4th step for interventional procedures', 'The ladder is less applicable to chronic non-cancer pain where opioids are not first-line'],
    ['WHO Cancer Pain Relief. World Health Organization. 1986 (updated 2018)', 'Vargas-Schaffer G. WHO Analgesic Ladder Revisited. Can Fam Physician. 2010;56(6):514-517'],
  ),

  e(
    'opioid-pharmacology',
    'Opioid Pharmacology',
    'pharmacologic',
    'Opioid analgesics act primarily through mu-opioid receptors (MOR) in the CNS and periphery. They represent the most potent class of analgesics available but carry significant risks of respiratory depression, dependence, and addiction.',
    'Mu-receptor activation: G-protein coupled (Gi/o) -> decreased cAMP, increased K+ conductance (hyperpolarization), decreased Ca2+ entry (reduced neurotransmitter release). Acts at spinal dorsal horn (presynaptic inhibition), brainstem (PAG, RVM descending inhibition), and cortical regions (pain perception/affect). Tolerance develops via receptor phosphorylation/internalization.',
    'Morphine milligram equivalents (MME) for risk assessment. CDC thresholds: >50 MME/day = increased risk; >90 MME/day = avoid or carefully justify. Opioid Risk Tool (ORT) before initiation. SOAPP-R for detailed risk. COMM for ongoing monitoring. PMP check mandatory. Urine drug testing (baseline, periodic, risk-stratified).',
    'Start low, go slow. Immediate-release first for opioid-naive. Titrate based on pain and function, not pain score alone. Equianalgesic conversions with 25-50% dose reduction for incomplete cross-tolerance. Bowel regimen from day one. Naloxone co-prescription for high-risk patients. Regular reassessment of 4 As: Analgesia, Activity, Adverse effects, Aberrant behavior.',
    ['Morphine 5-15mg PO q4h (gold standard)', 'Oxycodone 5-10mg PO q4-6h', 'Hydromorphone 1-2mg PO q4-6h', 'Fentanyl 12-25 mcg/hr patch q72h (opioid-tolerant only)', 'Methadone (complex PK, specialist use)', 'Buprenorphine (partial agonist, ceiling on resp depression)'],
    ['Respiratory depression (primary cause of opioid death)', 'Constipation (no tolerance develops, treat prophylactically)', 'Nausea/vomiting (usually transient)', 'Sedation, pruritus, urinary retention', 'Tolerance, physical dependence, addiction', 'Opioid-induced hyperalgesia with chronic use', 'QT prolongation (methadone)'],
    ['No tolerance develops to constipation - prescribe bowel regimen from day one', 'Methadone has NMDA-antagonist activity making it useful for neuropathic pain and OIH', 'Peak respiratory depression risk: 2-4h for IR opioids, days 3-5 for methadone initiation', 'Buprenorphine has ceiling effect on respiratory depression (safer in some contexts)'],
    ['CDC Clinical Practice Guideline for Prescribing Opioids. MMWR. 2022;71(3):1-95', 'Dowell D et al. JAMA. 2016;315(15):1624-1645'],
  ),

  e(
    'nsaid-pharmacology',
    'NSAID Pharmacology',
    'pharmacologic',
    'Non-steroidal anti-inflammatory drugs inhibit cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis. First-line for mild-moderate pain and inflammatory conditions. Both non-selective and COX-2-selective agents available.',
    'COX-1 (constitutive): maintains gastric mucosal integrity, platelet aggregation (TXA2), renal perfusion. COX-2 (inducible/constitutive): mediates inflammation, pain sensitization, renal sodium handling, vascular prostacyclin (PGI2). Non-selective NSAIDs inhibit both; COX-2 inhibitors spare GI COX-1 but block vascular PGI2, creating prothrombotic state.',
    'Assess GI risk (age >65, prior ulcer, H. pylori, anticoagulants, steroids). CV risk (ASCVD, HTN, HF). Renal function (eGFR). Bleeding risk. Use validated risk stratification: low GI + low CV = any NSAID; high GI + low CV = celecoxib or NSAID + PPI; low GI + high CV = naproxen (short course); high GI + high CV = avoid NSAIDs.',
    'Lowest effective dose for shortest duration. Topical NSAIDs first-line for localized knee/hand OA (lower systemic risk). PPI co-prescription for GI risk. Avoid in CKD stage 4-5, decompensated HF, active GI bleeding. Avoid "triple whammy" (NSAID + ACE-I/ARB + diuretic). Take aspirin 30 min before ibuprofen to preserve cardioprotection.',
    ['Ibuprofen 400-800mg TID', 'Naproxen 250-500mg BID', 'Celecoxib 100-200mg BID', 'Ketorolac 15-30mg IV q6h (max 5 days)', 'Topical diclofenac 1% gel QID', 'Meloxicam 7.5-15mg daily'],
    ['GI: Dyspepsia, ulceration, bleeding, perforation', 'CV: MI, stroke (all NSAIDs carry black box warning)', 'Renal: AKI, sodium retention, hyperkalemia, HTN', 'Hematologic: Platelet dysfunction (non-selective)', 'Aspirin-exacerbated respiratory disease (AERD)', 'Celecoxib: Sulfonamide cross-reactivity (debated)'],
    ['Topical NSAIDs have 6-10% systemic absorption of oral doses with similar local efficacy', 'Naproxen may have lowest CV risk among NSAIDs (PRECISION trial)', 'Administer aspirin 30 min before ibuprofen to preserve cardioprotection', 'Ketorolac is the most potent analgesic NSAID but limited to 5 days'],
    ['Nissen SE et al. PRECISION Trial. NEJM. 2016;375(26):2519-2529', 'CNT Collaboration. Lancet. 2013;382(9894):769-779'],
  ),

  e(
    'adjuvant-analgesics',
    'Adjuvant Analgesics',
    'pharmacologic',
    'Medications whose primary indication is not pain but possess analgesic properties for specific pain types. Includes antidepressants, anticonvulsants, corticosteroids, muscle relaxants, and topical agents. Used at any step of the WHO ladder.',
    'Gabapentinoids: bind alpha-2-delta subunit of VGCC, reduce excitatory neurotransmitter release. SNRIs: enhance descending serotonergic/noradrenergic inhibition. TCAs: SNRI + sodium channel blockade + NMDA antagonism. Corticosteroids: reduce peritumoral edema, nerve compression, inflammation. Muscle relaxants: various mechanisms reducing skeletal muscle tone.',
    'Match adjuvant to pain mechanism: neuropathic -> gabapentinoids/SNRIs/TCAs; bone pain -> NSAIDs/bisphosphonates/corticosteroids; visceral pain -> anticholinergics; muscle spasm -> cyclobenzaprine/baclofen; inflammatory -> corticosteroids. Assess comorbidities that may benefit from dual action (depression + pain -> duloxetine).',
    'Start one adjuvant at a time, low dose, titrate over 1-2 weeks. Allow adequate trial (2-4 weeks at therapeutic dose) before declaring failure. Consider comorbidities when selecting (duloxetine for pain + depression; pregabalin for pain + anxiety). Combine agents from different classes if single agent insufficient. 30-50% pain reduction is a realistic goal.',
    ['Gabapentin 100-1200mg TID', 'Pregabalin 75-300mg BID', 'Duloxetine 30-60mg daily', 'Amitriptyline 10-75mg qhs', 'Dexamethasone 4-16mg daily (cancer/inflammation)', 'Baclofen 5-20mg TID (spasticity)'],
    ['Gabapentinoids: Dizziness, sedation, edema, weight gain', 'SNRIs: Nausea, sexual dysfunction, discontinuation syndrome, HTN', 'TCAs: Anticholinergic effects, cardiac risk (QT prolongation), sedation', 'Corticosteroids: Hyperglycemia, immunosuppression, myopathy, psychosis', 'Muscle relaxants: Sedation, abuse potential (carisoprodol)'],
    ['TCAs have the lowest NNT (~3) for neuropathic pain but worst side effect profile', 'Duloxetine has triple indication: DPN, fibromyalgia, chronic musculoskeletal pain', 'Gabapentinoids require renal dose adjustment and slow titration', 'Dexamethasone is invaluable for cancer-related pain from nerve compression and bone mets'],
    ['Finnerup NB et al. NeuPSIG Pharmacotherapy Guidelines. Lancet Neurol. 2015;14(2):162-173', 'Sommer C et al. Pharmacotherapy of Neuropathic Pain. Curr Opin Neurol. 2020;33(5):631-638'],
  ),

  e(
    'ketamine-for-pain',
    'Ketamine for Pain Management',
    'pharmacologic',
    'NMDA receptor antagonist with analgesic properties at subanesthetic doses. Increasingly used for refractory pain, opioid-induced hyperalgesia, central sensitization, and perioperative opioid-sparing.',
    'Blocks NMDA receptors (non-competitive antagonist) preventing glutamate-mediated central sensitization and wind-up. Also interacts with opioid, monoaminergic, cholinergic, and sodium channel systems. Prevents tolerance to opioid analgesia. Active metabolite norketamine has analgesic and antidepressant activity. S-ketamine (esketamine) has 2x potency.',
    'Consider for: refractory neuropathic pain, CRPS, opioid-induced hyperalgesia, central sensitization states, perioperative opioid-sparing, sickle cell crisis. Screen for: uncontrolled HTN, elevated ICP, psychotic disorders, active substance abuse. Baseline BP, HR monitoring during infusion.',
    'Subanesthetic IV infusion: 0.1-0.5 mg/kg/hr (pain management, not general anesthesia doses). Bolus: 0.1-0.3 mg/kg IV for acute pain. Perioperative: low-dose infusion reduces opioid consumption 25-40%. Intranasal: 0.5-1 mg/kg for procedural or breakthrough pain. Oral: 0.5 mg/kg TID (limited bioavailability ~20%).',
    ['IV infusion 0.1-0.5 mg/kg/hr', 'IV bolus 0.1-0.3 mg/kg', 'Intranasal 0.5-1 mg/kg', 'Oral 0.5 mg/kg TID (low bioavailability)', 'S-ketamine (Spravato) nasal spray (depression indication)'],
    ['Psychotomimetic effects: vivid dreams, hallucinations, dissociation', 'Hypertension, tachycardia', 'Nausea, vomiting', 'Nystagmus, dizziness', 'Chronic use: ulcerative cystitis, hepatotoxicity, cognitive effects', 'Abuse potential (Schedule III)'],
    ['Subanesthetic ketamine (0.1-0.3 mg/kg) provides analgesia without significant dissociation', 'Reduces opioid consumption 25-40% when used perioperatively', 'Particularly effective for central sensitization and opioid-induced hyperalgesia', 'Consider for patients on chronic high-dose opioids undergoing surgery'],
    ['Schwenk ES et al. Consensus Guidelines on IV Ketamine for Pain. Reg Anesth Pain Med. 2018;43(5):456-466', 'Cohen SP et al. Consensus Guidelines on Ketamine for Chronic Pain. Reg Anesth Pain Med. 2018;43(5):521-546'],
  ),

  // ===== INTERVENTIONAL =====
  e(
    'epidural-steroid-injection',
    'Epidural Steroid Injection',
    'interventional',
    'Injection of corticosteroid with or without local anesthetic into the epidural space for radicular pain. One of the most commonly performed pain interventions.',
    'Corticosteroid reduces inflammation around compressed nerve roots by inhibiting phospholipase A2, reducing prostaglandin and leukotriene synthesis. Local anesthetic provides immediate pain relief and interrupts pain cycle. Approaches: interlaminar (midline), transforaminal (targeted to specific nerve root, more evidence for radiculopathy), caudal (sacral hiatus).',
    'Indicated for radicular pain (disc herniation, spinal stenosis, foraminal narrowing) not responding to conservative management (4-6 weeks). Pre-procedure MRI to correlate imaging with symptoms. Fluoroscopic or CT guidance recommended (improves accuracy, safety). Contraindications: coagulopathy, infection, allergy to injectate.',
    'Transforaminal approach preferred for unilateral radiculopathy (targeted delivery). Interlaminar for bilateral symptoms or spinal stenosis. Limit to 3-4 per year per joint/location (steroid side effects). Best evidence: acute radiculopathy from disc herniation (<3 months). Limited evidence for chronic degenerative stenosis. Combine with physical therapy for optimal outcomes.',
    ['Dexamethasone 10mg (preferred for transforaminal, particulate-free)', 'Triamcinolone 40-80mg (interlaminar)', 'Methylprednisolone 40-80mg (interlaminar)', 'Bupivacaine 0.25% 1-2mL or Lidocaine 1% 1-3mL'],
    ['Common: Transient pain flare, headache, flushing, insomnia', 'Uncommon: Dural puncture (post-dural puncture headache), vasovagal episode', 'Rare: Epidural hematoma, epidural abscess, nerve injury', 'Very rare: Spinal cord infarction (particulate steroid in transforaminal), arachnoiditis', 'Systemic steroid effects: Hyperglycemia, adrenal suppression, immunosuppression'],
    ['Use non-particulate steroid (dexamethasone) for transforaminal injections (lower infarction risk)', 'Best evidence is for acute disc-related radiculopathy, not chronic degenerative stenosis', 'Fluoroscopic guidance improves accuracy from ~70% (blind) to >95%', 'Always hold anticoagulants per ASRA guidelines before epidural procedures'],
    ['Manchikanti L et al. Epidural Injections Systematic Review. Pain Physician. 2021;24(S1):S209-S232', 'ASRA Guidelines on Anticoagulation. Reg Anesth Pain Med. 2018;43(3):263-309'],
  ),

  e(
    'facet-joint-interventions',
    'Facet Joint Interventions',
    'interventional',
    'Diagnostic and therapeutic procedures targeting the facet (zygapophyseal) joints, a common source of axial spine pain. Includes medial branch blocks (diagnostic) and radiofrequency ablation (therapeutic).',
    'Facet joints are innervated by medial branches of the dorsal rami at each level and the level above. Facet arthropathy causes mechanical, inflammatory, and nociceptive pain, typically axial without radicular features. Pain patterns: cervical facets -> neck/occipital pain; lumbar facets -> axial low back/buttock pain, rarely below knee.',
    'Suspect facet pain: axial pain worse with extension/rotation, paraspinal tenderness, no radicular features. Definitive diagnosis requires controlled diagnostic medial branch blocks (>= 80% relief with dual blocks is diagnostic standard). Imaging (CT/MRI) does not reliably identify symptomatic facet joints. Single blocks have 25-40% false positive rate.',
    'Diagnostic phase: Dual comparative medial branch blocks (lidocaine and bupivacaine on separate occasions). If both positive (>= 80% relief): radiofrequency ablation (RFA) of medial branches. RFA creates lesion at 80-90 degrees C for 60-90 seconds. Duration of relief: 6-12 months typically, can be repeated. Cooled RF may provide larger lesions.',
    ['Diagnostic block: Lidocaine 0.5% or Bupivacaine 0.25% (0.3-0.5mL per nerve)', 'Radiofrequency ablation: thermal lesion at 80-90C x 60-90 sec', 'IA facet corticosteroid: Triamcinolone 10mg (limited evidence)'],
    ['Medial branch block: Pain at injection site, vasovagal response', 'RFA: Temporary increased pain (neuritis), numbness in cutaneous distribution, rare motor weakness', 'IA injection: Infection, bleeding, allergic reaction', 'All: Fluoroscopy radiation exposure'],
    ['Dual comparative blocks are the diagnostic standard (single blocks have 25-40% false positive rate)', 'Radiofrequency ablation provides 6-12 months relief and can be repeated', 'IA corticosteroid injections have limited evidence compared to medial branch interventions', 'Imaging cannot reliably predict which facet joints are symptomatic'],
    ['Cohen SP et al. Facet Joint Pain. NEJM. 2007;356:2373-2383', 'Manchikanti L et al. ASIPP Guidelines for Facet Joint Interventions. Pain Physician. 2020;23(1):1-127'],
  ),

  e(
    'nerve-blocks',
    'Peripheral Nerve Blocks',
    'interventional',
    'Injection of local anesthetic (with or without corticosteroid) around peripheral nerves to provide regional analgesia. Used diagnostically and therapeutically for acute, chronic, and perioperative pain.',
    'Local anesthetics block voltage-gated sodium channels, preventing action potential propagation. Differential blockade: small unmyelinated C-fibers (pain) blocked before large myelinated fibers (motor). Corticosteroid reduces perineural inflammation. Duration depends on agent: lidocaine 1-2h, bupivacaine 4-8h, liposomal bupivacaine up to 72h. Continuous catheters extend duration.',
    'Selection based on surgical site or pain location. Ultrasound guidance is standard of care (improved success rate, reduced complications). Common blocks: interscalene (shoulder), supraclavicular (upper extremity), femoral/adductor canal (knee), popliteal sciatic (foot/ankle), TAP (abdominal wall), intercostal (thoracic). Pre-procedure neurovascular assessment.',
    'Single-shot blocks for acute/perioperative pain. Continuous perineural catheters for extended relief (48-72h). Diagnostic blocks to identify pain generators in chronic pain. Adjuvants: dexamethasone (prolongs duration), dexmedetomidine (emerging), epinephrine (decreases systemic absorption). Always aspirate before injection, inject incrementally.',
    ['Bupivacaine 0.25-0.5% (long-acting)', 'Ropivacaine 0.2-0.5% (slightly lower cardiac toxicity)', 'Lidocaine 1-2% (short-acting, diagnostic)', 'Liposomal bupivacaine (Exparel, up to 72h)', 'Dexamethasone 4mg perineural (adjuvant)', 'Epinephrine 1:200,000 (adjuvant, vascular marker)'],
    ['Local anesthetic systemic toxicity (LAST): Tinnitus, seizures, cardiac arrest', 'Nerve injury (0.01-0.04%): Neuropraxia usually temporary', 'Vascular puncture, hematoma', 'Infection', 'Pneumothorax (supraclavicular, intercostal blocks)', 'Unintended motor blockade (falls risk)'],
    ['Ultrasound guidance is standard of care, improving success and reducing complications', 'LAST protocol: Stop injection, call for help, 20% intralipid 1.5 mL/kg bolus', 'Perineural dexamethasone 4mg prolongs block duration by 6-8 hours', 'Adductor canal block preserves quadriceps strength vs. femoral nerve block for knee surgery'],
    ['Hadzic A. Hadzic\'s Peripheral Nerve Blocks and Anatomy. 3rd Ed. McGraw-Hill. 2022', 'Neal JM et al. ASRA Practice Advisory on LAST. Reg Anesth Pain Med. 2018;43(2):113-123'],
  ),

  e(
    'spinal-cord-stimulation',
    'Spinal Cord Stimulation (SCS)',
    'interventional',
    'Neuromodulation technique using implanted electrodes to deliver electrical impulses to the dorsal columns of the spinal cord. FDA-approved for chronic intractable pain of the trunk and limbs.',
    'Traditional (tonic): Gate control theory - A-beta fiber activation in dorsal columns inhibits nociceptive transmission at dorsal horn. High-frequency (10 kHz): Paresthesia-free, may block wide dynamic range neurons. Burst: Mimics thalamic burst firing, modulates medial (affective) and lateral (sensory) pain pathways. Closed-loop: ECAP-controlled real-time dose adjustment.',
    'Trial period (5-7 days) with percutaneous leads before permanent implant. Success criterion: >= 50% pain reduction and functional improvement. Best candidates: Failed back surgery syndrome (FBSS), CRPS, painful diabetic neuropathy. Screen for psychological contraindications (severe depression, secondary gain, unrealistic expectations). MRI compatibility varies by device.',
    'Trial phase: Percutaneous lead placement, external generator, 5-7 day evaluation. Permanent implant if trial successful. Programming optimization over weeks-months. Newer modalities: HF10 (10 kHz, paresthesia-free), BurstDR, DTM (differential target multiplexed), closed-loop ECAP-controlled. DRG stimulation for focal neuropathies (CRPS, groin pain).',
    ['No systemic medications (device-based therapy)', 'Programming parameters vary by modality', 'Rechargeable vs. non-rechargeable IPG options', 'MRI-conditional devices increasingly available'],
    ['Lead migration (most common, 5-15%)', 'Infection (3-5%)', 'Hardware failure, lead fracture', 'Wound complications, seroma', 'Undesirable stimulation/paresthesia', 'Very rare: Epidural hematoma, nerve injury, paralysis', 'Revision surgery rate 20-40% over device lifetime'],
    ['A successful trial (>= 50% relief) is required before permanent implantation', 'CRPS and FBSS have the strongest evidence supporting SCS efficacy', 'HF10 therapy provides paresthesia-free pain relief', 'Psychological screening is mandatory before SCS implantation', 'SCS should be considered before chronic opioid therapy for appropriate candidates'],
    ['Deer TR et al. NACC Guidelines for SCS. Neuromodulation. 2022;25(3):293-408', 'Kapural L et al. SENZA Trial (HF10). Anesth Analg. 2015;120(5):1150-1159'],
  ),

  e(
    'radiofrequency-ablation',
    'Radiofrequency Ablation (RFA)',
    'interventional',
    'Neurolytic procedure using heat generated by radiofrequency current to create lesions on pain-transmitting nerves. Most commonly applied to medial branch nerves (facet pain) and genicular nerves (knee pain).',
    'Conventional (continuous) RF: Electrode tip heated to 60-90 degrees C for 60-90 seconds, creating a predictable thermal lesion destroying nerve tissue. Pulsed RF: Short high-voltage bursts without sustained heating (42 degrees C), neuromodulatory rather than ablative. Cooled RF: Water-cooled electrode allows larger lesions. Nerve regeneration occurs over 6-12 months.',
    'Requires prior positive diagnostic blocks (ideally dual comparative blocks). Facet RFA: Best evidence for lumbar and cervical axial pain. Genicular nerve RFA: Emerging evidence for knee OA pain. Sacroiliac joint RF: Lateral branch radiofrequency for SIJ pain. Contraindications: Coagulopathy, active infection, anatomic variants.',
    'Fluoroscopic or ultrasound guidance. Sensory stimulation at 50 Hz to confirm proximity to target nerve (concordant paresthesia at < 0.5V). Motor stimulation at 2 Hz to exclude proximity to motor nerves (no motor response at < 2x sensory threshold). Lesion at 80-90 degrees C for 60-90 seconds. Multiple lesions for larger target area. Expect 6-12 months relief, repeatable.',
    ['Lidocaine 1-2% for local anesthesia', 'Bupivacaine 0.25% with triamcinolone post-lesion (reduce neuritis)', 'No systemic medications required for the procedure itself'],
    ['Temporary neuritis (post-procedure pain flare, 1-2 weeks)', 'Numbness in cutaneous nerve distribution', 'Rare: Motor weakness if motor nerve inadvertently ablated', 'Infection, bleeding (rare)', 'Skin burn at grounding pad or needle entry site (very rare)'],
    ['Dual comparative diagnostic blocks before RFA reduce treatment failure rate', 'Proper electrode placement parallel to target nerve maximizes lesion efficacy', 'Relief duration is 6-12 months; procedure can be safely repeated', 'Cooled RF creates larger lesions and may improve outcomes for sacroiliac joint pain'],
    ['Manchikanti L et al. ASIPP Guidelines for RF. Pain Physician. 2020;23(1):1-127', 'Davis T et al. Genicular Nerve RFA for Knee OA. PM&R. 2018;10(12):1320-1328'],
  ),

  e(
    'intrathecal-drug-delivery',
    'Intrathecal Drug Delivery Systems',
    'interventional',
    'Implantable pump delivering medication directly into the intrathecal (subarachnoid) space. Provides potent analgesia at 1/300th of oral opioid doses, reducing systemic side effects. Reserved for refractory cancer and non-cancer pain.',
    'Direct CSF delivery bypasses blood-brain barrier, achieving high spinal cord drug concentrations with minimal systemic absorption. Morphine is the most commonly used (hydrophilic, remains in CSF). Ziconotide (Prialt) is a non-opioid option (N-type calcium channel blocker from cone snail venom). Baclofen for spasticity. Combination therapy increasingly used.',
    'Indicated for: cancer pain refractory to systemic therapy, chronic non-cancer pain failing conservative and interventional measures. Trial phase required: IT morphine bolus or continuous catheter trial. Polyanalgesic Consensus Conference (PACC) guidelines for drug selection. Screen for psychological stability, realistic expectations, no active infection.',
    'Trialing: Single IT bolus (morphine 0.1-0.5mg) or continuous catheter (3-7 days). If >= 50% pain relief: permanent implant with programmable pump. Refills every 1-6 months depending on concentration and dose. First-line: morphine or ziconotide alone. Second-line: morphine + bupivacaine, or hydromorphone. IT granuloma monitoring required with chronic opioid use.',
    ['Morphine IT 0.1-15mg/day (start 0.1-0.5mg/day)', 'Hydromorphone IT 0.02-4mg/day', 'Ziconotide IT 0.5-19.2mcg/day (non-opioid)', 'Bupivacaine IT 1-30mg/day (adjuvant)', 'Baclofen IT 50-1500mcg/day (spasticity)'],
    ['Catheter-tip granuloma (opioid-related inflammatory mass, can cause cord compression)', 'Infection: Meningitis, wound infection (2-5%)', 'CSF leak/post-dural puncture headache', 'Pump malfunction, catheter dislodgement', 'Ziconotide: Psychosis, cognitive impairment, meningitis-like syndrome', 'Opioid: Respiratory depression, hormonal effects (hypogonadism, adrenal insufficiency)'],
    ['IT morphine is 300x more potent than oral morphine (1mg IT ~ 300mg PO)', 'Catheter-tip granuloma risk increases with high-concentration opioids; monitor with MRI', 'Ziconotide is the only FDA-approved non-opioid IT analgesic', 'Pump must be refilled on schedule; empty pump with IT baclofen causes life-threatening withdrawal'],
    ['Deer TR et al. PACC Guidelines. Neuromodulation. 2017;20(2):96-132', 'Prager JP. Intrathecal Drug Delivery. Clin J Pain. 2002;18(6):S127-S135'],
  ),

  // ===== NON-PHARMACOLOGIC =====
  e(
    'cognitive-behavioral-therapy-pain',
    'Cognitive Behavioral Therapy for Pain',
    'non-pharmacologic',
    'Evidence-based psychological intervention that addresses maladaptive thoughts, emotions, and behaviors contributing to the chronic pain experience. Strongest evidence of any psychological intervention for chronic pain.',
    'Targets cognitive distortions (catastrophizing, helplessness, fear-avoidance) that amplify pain perception and disability. Behavioral activation counters deconditioning and withdrawal. Neuroimaging shows CBT normalizes pain-related brain activation patterns (reduced prefrontal, ACC activity). Reduces cortisol and inflammatory markers.',
    'Assessment: Pain Catastrophizing Scale (PCS), Tampa Scale for Kinesiophobia (TSK), Fear-Avoidance Beliefs Questionnaire (FABQ), PHQ-9, GAD-7. High catastrophizing (PCS > 30) is one of the strongest predictors of poor outcomes. Identify maladaptive coping strategies, avoidance behaviors, and secondary gain factors.',
    'Typically 8-12 sessions. Components: pain education, cognitive restructuring (challenging catastrophic thoughts), behavioral activation (graded activity/exposure), relaxation training, pacing, sleep hygiene, relapse prevention. NNT ~4 for meaningful improvement. Can be delivered individually, in groups, or via digital platforms. Acceptance and Commitment Therapy (ACT) is an effective variant.',
    [],
    ['No medication side effects (primary advantage)', 'Requires patient engagement and motivation', 'Therapist availability may be limited', 'Insurance coverage variable'],
    ['CBT has the strongest evidence of any psychological intervention for chronic pain', 'Pain catastrophizing (PCS > 30) is one of the best predictors of poor pain outcomes', 'Effects are durable and may increase over time (unlike medications)', 'Can be effectively delivered via telehealth and digital platforms'],
    ['Williams ACDC et al. CBT for Chronic Pain. Cochrane Database Syst Rev. 2020;8:CD007407', 'Ehde DM et al. CBT for Chronic Pain. Am Psychol. 2014;69(2):153-166'],
  ),

  e(
    'exercise-therapy-for-pain',
    'Exercise Therapy for Pain',
    'non-pharmacologic',
    'Structured physical activity programs as treatment for chronic pain. Includes aerobic exercise, resistance training, flexibility training, and mind-body exercise. One of the most consistently effective interventions across pain conditions.',
    'Mechanisms: exercise-induced hypoalgesia (EIH) via endogenous opioid and endocannabinoid release. Improved muscle strength reduces mechanical stress. Anti-inflammatory effects (IL-6 release triggers anti-inflammatory cascade). Improved sleep quality. Neuroplastic changes: enhanced descending inhibition, normalized cortical processing. Psychological: improved self-efficacy, reduced fear-avoidance.',
    'Assess baseline fitness, comorbidities, and barriers to exercise. Identify specific condition-appropriate exercise (aquatic for severe OA, walking for low back pain, yoga for fibromyalgia). Start below current capacity and progress gradually. Monitor for exercise-induced pain flares (distinguish from injury). Assess adherence barriers and preferences.',
    'Graduated approach: start below current capacity, increase by 10% per week. Aerobic exercise: 150 min/week moderate intensity (walking, cycling, swimming). Resistance training: 2-3x/week. Flexibility: daily stretching/yoga. Aquatic exercise ideal for severe joint disease. Supervised initially, transition to self-directed. Pain neuroscience education before starting to reduce fear-avoidance.',
    [],
    ['Temporary pain flares (expected, educate patients this does not mean harm)', 'Injury risk if progression too rapid', 'Cardiovascular risk in sedentary patients starting vigorous exercise', 'Adherence is the primary challenge (50% dropout at 6 months)'],
    ['Exercise is the single most effective non-pharmacologic intervention across chronic pain conditions', 'Aquatic exercise is excellent for patients who cannot tolerate land-based exercise', 'Educate patients that exercise-related pain flares are normal and not harmful', 'Adherence is the biggest challenge; patient preference and enjoyment predict success'],
    ['Geneen LJ et al. Physical Activity and Exercise for Chronic Pain. Cochrane Database Syst Rev. 2017;4:CD011279', 'Ambrose KR, Golightly YM. Physical Exercise as Non-Pharmacological Treatment. PM&R. 2015;7(Suppl):S263-S272'],
  ),

  e(
    'acupuncture-for-pain',
    'Acupuncture for Pain',
    'non-pharmacologic',
    'Traditional Chinese medicine technique involving insertion of thin needles at specific body points. Evidence supports efficacy for several chronic pain conditions, though mechanisms remain debated.',
    'Proposed mechanisms: local tissue effects (adenosine release, microtrauma-induced healing), segmental inhibition (gate control at spinal level), heterosegmental effects (endogenous opioid release, diffuse noxious inhibitory controls/DNIC), central effects (fMRI shows modulation of pain matrix, default mode network, and descending inhibition). Contextual/placebo effects also contribute.',
    'Consider for: chronic low back pain, knee OA, tension headache, migraine prophylaxis, neck pain. NICE and ACP guidelines recommend for chronic LBP. Acupuncture vs. sham acupuncture shows small but significant difference. Acupuncture vs. usual care shows larger, clinically meaningful difference. Assess patient willingness and access to qualified practitioners.',
    'Traditional body acupuncture: 6-12 sessions over 8-12 weeks. Electroacupuncture (EA) may enhance effects for musculoskeletal pain. Auricular acupuncture for battlefield acupuncture protocol. Dry needling targets myofascial trigger points specifically (overlapping but distinct from traditional acupuncture). Select licensed/certified acupuncturist.',
    [],
    ['Local: Bruising, soreness at needle sites', 'Rare: Infection, pneumothorax (improper technique), broken needle', 'Lightheadedness, vasovagal syncope', 'Very safe when performed by trained practitioners'],
    ['ACP recommends acupuncture as a first-line non-pharmacologic option for chronic low back pain', 'Real acupuncture is superior to sham, but both are superior to usual care (contextual effects matter)', 'Electroacupuncture may be more effective than manual acupuncture for musculoskeletal pain', 'Minimal risk profile makes it a reasonable option when conventional therapies are contraindicated'],
    ['Vickers AJ et al. Acupuncture for Chronic Pain: Individual Patient Data Meta-analysis. Arch Intern Med. 2012;172(19):1444-1453', 'Qaseem A et al. ACP Guidelines for LBP. Ann Intern Med. 2017;166(7):514-530'],
  ),

  e(
    'mindfulness-based-stress-reduction',
    'Mindfulness-Based Stress Reduction (MBSR)',
    'non-pharmacologic',
    'Structured 8-week program combining mindfulness meditation, body scanning, and gentle yoga. Developed by Jon Kabat-Zinn for chronic pain and stress. Evidence supports efficacy for various chronic pain conditions.',
    'Mindfulness meditation modulates pain processing via multiple pathways: reduced prefrontal cortex activation (cognitive reappraisal), enhanced ACC and insula engagement (acceptance without reactivity), reduced amygdala reactivity (decreased emotional suffering), strengthened descending inhibition. Reduces pain catastrophizing and fear-avoidance. Alters default mode network connectivity.',
    'Appropriate for: chronic pain with significant psychological/emotional component, stress-related pain amplification, fibromyalgia, chronic headache, IBS. Assess patient willingness to practice meditation. Screen for trauma history (body scanning may be triggering). Identify meditation experience and preferences.',
    'Standard 8-week MBSR program: weekly 2.5-hour group sessions, daily 45-min home practice. Key components: body scan, sitting meditation, walking meditation, gentle hatha yoga. Pain-specific adaptations: mindful attention to pain without judgment/reaction. Effective NNT ~5 for clinically meaningful pain reduction. Apps and digital platforms expand access.',
    [],
    ['No physical side effects', 'May initially increase pain awareness before developing acceptance', 'Body scanning may be triggering for trauma survivors', 'Requires significant time commitment for practice', 'Not a substitute for appropriate medical treatment'],
    ['MBSR teaches "uncoupling" of sensory pain from emotional suffering', 'Consistent practice is key; benefits correlate with meditation hours', 'Particularly effective for fibromyalgia and chronic pain with high catastrophizing', 'Can be combined with CBT (Mindfulness-Based Cognitive Therapy, MBCT)'],
    ['Kabat-Zinn J et al. The Clinical Use of Mindfulness Meditation. J Behav Med. 1985;8(2):163-190', 'Hilton L et al. Mindfulness Meditation for Chronic Pain. Ann Behav Med. 2017;51(2):199-213'],
  ),

  e(
    'physical-therapy-for-pain',
    'Physical Therapy and Rehabilitation',
    'non-pharmacologic',
    'Comprehensive rehabilitation approach using therapeutic exercise, manual therapy, modalities, and education to restore function, reduce pain, and prevent disability. Core component of multimodal pain management.',
    'Exercise restores muscle strength, flexibility, and endurance (addresses deconditioning). Manual therapy modulates pain via gate control and descending inhibition. Graded activity exposure reduces fear-avoidance and kinesiophobia. Neuroplastic effects: movement re-education reverses maladaptive motor patterns. Education empowers self-management.',
    'Functional assessment: range of motion, strength, gait analysis, balance, pain behavior observation. Patient-specific functional scale (PSFS). STarT Back screening tool for risk stratification in LBP. Yellow flag identification: catastrophizing, fear-avoidance, passive coping. Set functional goals collaboratively.',
    'Individualized program based on assessment. Manual therapy (joint mobilization, manipulation, myofascial release) for acute relief. Therapeutic exercise (strength, flexibility, endurance) for long-term benefit. Modalities (TENS, ultrasound, heat/ice) as adjuncts. Pain neuroscience education. Graded exposure for fear-avoidant patients. Home exercise program for maintenance.',
    [],
    ['Temporary pain flares with manual therapy or exercise progression', 'Rare: Vertebral artery dissection with cervical manipulation (1 in 5.85 million)', 'Soreness after new exercises (expected)', 'Modality burns (rare with proper technique)'],
    ['Exercise therapy has the strongest evidence for long-term chronic pain benefit', 'Pain neuroscience education reduces fear-avoidance and improves exercise engagement', 'Manual therapy provides short-term relief but should be combined with active exercise', 'Home exercise adherence is the key predictor of long-term success'],
    ['Foster NE et al. STarT Back Stratified Care. Lancet. 2011;378(9802):1560-1571', 'Babatunde OO et al. PT Effectiveness for MSK Pain. PLoS One. 2017;12(6):e0178621'],
  ),

  e(
    'transcutaneous-electrical-nerve-stimulation',
    'Transcutaneous Electrical Nerve Stimulation (TENS)',
    'non-pharmacologic',
    'Non-invasive analgesic modality using surface electrodes to deliver electrical stimulation to peripheral nerves. Safe, self-administered, and widely available over the counter.',
    'Conventional TENS (high frequency, low intensity): Gate control mechanism - A-beta fiber activation inhibits nociceptive transmission at dorsal horn. Acupuncture-like TENS (low frequency, high intensity): Endogenous opioid release (enkephalins, endorphins). Segmental and extrasegmental inhibition. May also activate descending inhibition pathways.',
    'Consider for: localized musculoskeletal pain, neuropathic pain, OA, labor pain, postoperative pain. Contraindications: cardiac pacemaker/defibrillator, epilepsy (avoid head/neck placement), over carotid sinus, over pregnant uterus. Place electrodes around or proximal to painful area. Adjust frequency and intensity to patient comfort.',
    'Conventional TENS: High frequency (50-100 Hz), low intensity (comfortable tingling). Use during painful activities. Acupuncture-like TENS: Low frequency (2-4 Hz), higher intensity (visible muscle twitch). Use for 20-30 min sessions. Place electrodes around or proximal to pain. Patients can self-adjust. No limit on daily use. Low cost, minimal risk.',
    [],
    ['Skin irritation under electrodes', 'Rare: Skin burns (defective equipment)', 'Interference with cardiac pacemaker', 'Temporary muscle soreness with high-intensity settings'],
    ['Evidence is modest but safety profile makes TENS a reasonable adjunct', 'Most effective when used during activity, not at rest', 'Electrode placement significantly affects efficacy (experiment with positions)', 'Tolerance may develop; varying parameters (frequency, intensity) can help'],
    ['Johnson MI et al. TENS for Pain. Cochrane Database Syst Rev. 2015', 'Vance CGT et al. TENS for Pain. Pain. 2014;155(12):2599-2611'],
  ),

  e(
    'multidisciplinary-pain-rehabilitation',
    'Multidisciplinary Pain Rehabilitation',
    'non-pharmacologic',
    'Integrated treatment programs combining physical, psychological, and medical interventions delivered by a coordinated interdisciplinary team. Represents the gold standard for complex chronic pain management.',
    'Addresses the biopsychosocial model of chronic pain comprehensively. Physical reconditioning reverses deconditioning and disability. Psychological intervention addresses catastrophizing, fear-avoidance, depression. Medical optimization includes rational medication management and opioid tapering. Social and vocational rehabilitation addresses functional barriers. Neuroplastic changes from combined interventions.',
    'Appropriate for: chronic pain with significant disability, failed unimodal treatments, high psychosocial complexity, opioid dependence with chronic pain, multiple pain conditions. Assessment: comprehensive intake by each discipline (physician, PT, OT, psychology, nursing). Validated outcome measures: Oswestry, PROMIS, PCS, PHQ-9, return-to-work status.',
    'Intensive programs: 3-6 weeks, 4-8 hours/day. Team: pain physician, physical therapist, occupational therapist, psychologist, nurse, social worker. Components: graded exercise, CBT/ACT, pain education, medication optimization, vocational counseling, sleep management. Functional restoration focus (not pain elimination). Evidence shows superior outcomes to unimodal treatments.',
    [],
    ['Time-intensive commitment (3-6 weeks full-time)', 'May not be covered by all insurance plans', 'Temporary pain increase during physical reconditioning', 'Psychological distress during therapy engagement', 'Limited program availability in many regions'],
    ['Gold standard for complex chronic pain; superior to single-modality treatments', 'Functional restoration (not pain elimination) is the appropriate goal', 'Patients often achieve better function even if pain intensity does not significantly change', 'Return-to-work rates significantly higher than conventional care (60-80% vs. 20-30%)'],
    ['Kamper SJ et al. Multidisciplinary Rehabilitation for Chronic LBP. Cochrane Database Syst Rev. 2015;2:CD000963', 'Gatchel RJ et al. Interdisciplinary Chronic Pain Management. Am Psychol. 2014;69(2):119-130'],
  ),
];

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/**
 * Search pain management entries by query string across id, name,
 * description, pathophysiology, assessment, management, medications,
 * and keyPearls fields.
 */
export function searchPainEntries(query: string): PainManagementEntry[] {
  const q = query.toLowerCase();
  return painManagementDatabase.filter((entry) => {
    const fields = [
      entry.id,
      entry.name,
      entry.description,
      entry.pathophysiology,
      entry.assessment,
      entry.management,
      ...entry.medications,
      ...entry.keyPearls,
    ];
    return fields.some((f) => f.toLowerCase().includes(q));
  });
}

/**
 * Filter entries by one or more PainCategory values.
 */
export function filterByCategory(categories: PainCategory[]): PainManagementEntry[] {
  const set = new Set<PainCategory>(categories);
  return painManagementDatabase.filter((entry) => set.has(entry.category));
}

/**
 * Retrieve a single entry by its unique id. Returns undefined if not found.
 */
export function getEntryById(id: string): PainManagementEntry | undefined {
  return painManagementDatabase.find((entry) => entry.id === id);
}
